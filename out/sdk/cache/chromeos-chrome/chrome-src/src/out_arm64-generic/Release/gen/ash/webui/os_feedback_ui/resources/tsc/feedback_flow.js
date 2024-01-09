// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/polymer/v3_0/iron-pages/iron-pages.js';
import './confirmation_page.js';
import './search_page.js';
import './share_data_page.js';
import './strings.m.js';
import { assert } from 'chrome://resources/ash/common/assert.js';
import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import { strictQuery } from 'chrome://resources/ash/common/typescript_utils/strict_query.js';
import { ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { stringToMojoString16 } from 'chrome://resources/js/mojo_type_util.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ConfirmationPageElement } from './confirmation_page.js';
import { getTemplate } from './feedback_flow.html.js';
import { showScrollingEffectOnStart, showScrollingEffects } from './feedback_utils.js';
import { getFeedbackServiceProvider } from './mojo_interface_provider.js';
import { FeedbackAppExitPath, FeedbackAppHelpContentOutcome, FeedbackAppPreSubmitAction } from './os_feedback_ui.mojom-webui.js';
import { SearchPageElement } from './search_page.js';
import { ShareDataPageElement } from './share_data_page.js';
/**  The host of untrusted child page. */
const OS_FEEDBACK_UNTRUSTED_ORIGIN = 'chrome-untrusted://os-feedback';
/**  The id of help-content-clicked message. */
const HELP_CONTENT_CLICKED = 'help-content-clicked';
/**  Enum for actions on search page. */
export var SearchPageAction;
(function (SearchPageAction) {
    SearchPageAction["CONTINUE"] = "continue";
    SearchPageAction["QUIT"] = "quit";
})(SearchPageAction || (SearchPageAction = {}));
/**  Enum for feedback flow states. */
export var FeedbackFlowState;
(function (FeedbackFlowState) {
    FeedbackFlowState["SEARCH"] = "searchPage";
    FeedbackFlowState["SHARE_DATA"] = "shareDataPage";
    FeedbackFlowState["CONFIRMATION"] = "confirmationPage";
})(FeedbackFlowState || (FeedbackFlowState = {}));
/**
 * Enum for reserved query parameters used by feedback source to provide
 * addition context to final report.
 */
export const AdditionalContextQueryParam = {
    DESCRIPTION_TEMPLATE: 'description_template',
    DESCRIPTION_PLACEHOLDER_TEXT: 'description_placeholder_text',
    EXTRA_DIAGNOSTICS: 'extra_diagnostics',
    CATEGORY_TAG: 'category_tag',
    PAGE_URL: 'page_url',
    FROM_ASSISTANT: 'from_assistant',
    FROM_SETTINGS_SEARCH: 'from_settings_search',
    FROM_AUTOFILL: 'from_autofill',
    AUTOFILL_METADATA: 'autofill_metadata',
};
/**
 * Builds a RegExp that matches one of the given words. Each word has to match
 * at word boundary and is not at the end of the tested string. For example,
 * the word "SIM" would match the string "I have a sim card issue" but not
 * "I have a simple issue" nor "I have a sim" (because the user might not have
 * finished typing yet).
 */
export function buildWordMatcher(words) {
    return new RegExp(words.map((word) => '\\b' + word + '\\b[^$]').join('|'), 'i');
}
/**
 * Regular expression to check for all variants of blu[e]toot[h] with or
 * without space between the words; for BT when used as an individual word,
 * or as two individual characters, and for BLE, BlueZ, and Floss when used
 * as an individual word. Case insensitive matching.
 */
export const btRegEx = new RegExp('blu[e]?[ ]?toot[h]?|\\bb[ ]?t\\b|\\bble\\b|\\bfloss\\b|\\bbluez\\b', 'i');
/**
 * Regular expression to check for all strings indicating that a user can't
 * connect to a HID or Audio device.
 * Sample strings this will match:
 * "I can't connect the speaker!",
 * "The keyboard has connection problem."
 */
const cantConnectRegEx = new RegExp('((headphone|keyboard|mouse|speaker)((?!(connect|pair)).*)(connect|pair))' +
    '|((connect|pair).*(headphone|keyboard|mouse|speaker))', 'i');
/**
 * Regular expression to check for "tether", "tethering" or "hotspot". Case
 * insensitive matching.
 */
const tetherRegEx = new RegExp('tether(ing)?|hotspot', 'i');
/**
 * Regular expression to check for "Smart (Un)lock" or "Easy (Un)lock" with
 * or without space between the words. Case insensitive matching.
 */
const smartLockRegEx = new RegExp('(smart|easy)[ ]?(un)?lock', 'i');
/**
 * Regular expression to check for keywords related to Nearby Share like
 * "nearby (share)" or "phone (hub)".
 * Case insensitive matching.
 */
const nearbyShareRegEx = new RegExp('nearby|phone', 'i');
/**
 * Regular expression to check for keywords related to Fast Pair like
 * "fast pair".
 * Case insensitive matching.
 */
const fastPairRegEx = new RegExp('fast[ ]?pair', 'i');
/**  Regular expression to check for Bluetooth device specific keywords. */
const btDeviceRegEx = buildWordMatcher(['apple', 'allegro', 'pixelbud', 'microsoft', 'sony']);
/**
 * Regular expression to check for Phone Hub / Eche device specific keywords
 * like "app stream" or "camera roll".
 */
const phoneHubRegEx = new RegExp('app[ ]?stream(ing)?|phone|camera[ ]?roll', 'i');
/**  Regular expression to check for wifi-related keywords. */
const wifiRegEx = new RegExp('\\b(wifi|wi\-fi|internet|network|hotspot)\\b', 'i');
/**
 * @fileoverview
 * 'feedback-flow' manages the navigation among the steps to be taken.
 */
export class FeedbackFlowElement extends PolymerElement {
    static get is() {
        return 'feedback-flow';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            currentState: { type: String },
            feedbackContext: { type: Object, readonly: false, notify: true },
        };
    }
    constructor() {
        super();
        /**  The id of an element on the page that is currently shown. */
        this.currentState = FeedbackFlowState.SEARCH;
        /**  Whether to show the bluetooth Logs checkbox in share data page. */
        this.shouldShowBluetoothCheckbox = false;
        /**  Whether to show the Wifi debug Logs checkbox in share data page. */
        this.shouldShowWifiDebugLogsCheckbox = false;
        /**
         * Whether to show the Link Cross Device Dogfood Feedback checkbox in share
         * data page.
         */
        this.shouldShowLinkCrossDeviceDogfoodFeedbackCheckbox = false;
        /**  Whether to show the autofill checkbox in share data page. */
        this.shouldShowAutofillCheckbox = false;
        /**  Whether to show the assistant checkbox in share data page. */
        this.shouldShowAssistantCheckbox = false;
        /**  Whether user clicks the help content or not. */
        this.helpContentClicked = false;
        /**  To avoid helpContentOutcome metric emit more than one time. */
        this.helpContentOutcomeMetricEmitted = false;
        this.dialogArgs = chrome.getVariableValue('dialogArguments');
        this.feedbackServiceProvider = getFeedbackServiceProvider();
    }
    connectedCallback() {
        super.connectedCallback();
        if (loadTimeData.getBoolean('isJellyEnabledForOsFeedback')) {
            // TODO(b/276493287): After the Jelly experiment is launched, replace
            // `cros_styles.css` with `theme/colors.css` directly in `index.html`.
            // Also add `theme/typography.css` to `index.html`.
            document.querySelector('link[href*=\'cros_styles.css\']')
                ?.setAttribute('href', 'chrome://theme/colors.css?sets=legacy,sys');
            const typographyLink = document.createElement('link');
            typographyLink.href = 'chrome://theme/typography.css';
            typographyLink.rel = 'stylesheet';
            document.head.appendChild(typographyLink);
            document.body.classList.add('jelly-enabled');
            /** @suppress {checkTypes} */
            (function () {
                ColorChangeUpdater.forDocument().start();
            })();
        }
    }
    ready() {
        super.ready();
        if (this.dialogArgs && this.dialogArgs.length > 0) {
            this.initializeForDialogMode();
        }
        else {
            this.initializeForNonDialogMode();
        }
        window.addEventListener('message', event => {
            if (event.data.id !== HELP_CONTENT_CLICKED) {
                return;
            }
            if (event.origin !== OS_FEEDBACK_UNTRUSTED_ORIGIN) {
                console.error('Unknown origin: ' + event.origin);
                return;
            }
            this.helpContentClicked = true;
            this.feedbackServiceProvider.recordPreSubmitAction(FeedbackAppPreSubmitAction.kViewedHelpContent);
            this.feedbackServiceProvider.recordHelpContentSearchResultCount(this.helpContentSearchResultCount);
        });
        window.addEventListener('beforeunload', _event => {
            switch (this.currentState) {
                case FeedbackFlowState.SEARCH:
                    this.recordExitPath(FeedbackAppExitPath.kQuitSearchPageHelpContentClicked, FeedbackAppExitPath.kQuitSearchPageNoHelpContentClicked);
                    if (!this.helpContentOutcomeMetricEmitted) {
                        this.recordHelpContentOutcome(SearchPageAction.QUIT, FeedbackAppHelpContentOutcome.kQuitHelpContentClicked, FeedbackAppHelpContentOutcome.kQuitNoHelpContentClicked);
                        this.helpContentOutcomeMetricEmitted = true;
                    }
                    break;
                case FeedbackFlowState.SHARE_DATA:
                    this.recordExitPath(FeedbackAppExitPath.kQuitShareDataPageHelpContentClicked, FeedbackAppExitPath.kQuitShareDataPageNoHelpContentClicked);
                    break;
                case FeedbackFlowState.CONFIRMATION:
                    this.recordExitPath(FeedbackAppExitPath.kSuccessHelpContentClicked, FeedbackAppExitPath.kSuccessNoHelpContentClicked);
                    break;
            }
        });
        this.style.setProperty('--window-height', window.innerHeight.toString() + 'px');
        window.addEventListener('resize', (event) => {
            this.style.setProperty('--window-height', window.innerHeight.toString() + 'px');
            let page = null;
            switch (this.currentState) {
                case FeedbackFlowState.SEARCH:
                    page = strictQuery('search-page', this.shadowRoot, SearchPageElement);
                    break;
                case FeedbackFlowState.SHARE_DATA:
                    page = strictQuery('share-data-page', this.shadowRoot, ShareDataPageElement);
                    break;
                case FeedbackFlowState.CONFIRMATION:
                    page = strictQuery('confirmation-page', this.shadowRoot, ConfirmationPageElement);
                    break;
                default:
                    console.warn('unexpected state: ', this.currentState);
            }
            if (page) {
                showScrollingEffects(event, page);
            }
        });
    }
    /** TODO(http://b/issues/233080620): Add a type definition for feedbackInfo.*/
    initializeForDialogMode() {
        // This is on Dialog mode. The `dialogArgs` contains feedback context
        // info.
        const feedbackInfo = JSON.parse(this.dialogArgs);
        assert(!!feedbackInfo);
        this.feedbackContext = {
            assistantDebugInfoAllowed: false,
            fromSettingsSearch: feedbackInfo.fromSettingsSearch ?? false,
            isInternalAccount: feedbackInfo.isInternalAccount ?? false,
            wifiDebugLogsAllowed: false,
            traceId: feedbackInfo.traceId ?? 0,
            pageUrl: { url: feedbackInfo.pageUrl ?? '' },
            fromAssistant: feedbackInfo.fromAssistant ?? false,
            fromAutofill: feedbackInfo.fromAutofill ?? false,
            autofillMetadata: feedbackInfo.autofillMetadata ?
                JSON.stringify(feedbackInfo.autofillMetadata) :
                '{}',
            hasLinkedCrossDevicePhone: feedbackInfo.hasLinkedCrossDevicePhone ?? false,
            categoryTag: feedbackInfo.categoryTag ?? '',
            email: '',
            extraDiagnostics: '',
        };
        this.descriptionTemplate = feedbackInfo.description ?? '';
        this.descriptionPlaceholderText = feedbackInfo.descriptionPlaceholder ?? '';
        if (feedbackInfo.systemInformation?.length == 1) {
            // Currently, one extra diagnostics string may be passed to feedback
            // app.
            //
            // Sample input:
            //" systemInformation": [
            //   {
            //    "key": "EXTRA_DIAGNOSTICS",
            //    "value": "extra log data"
            //   }
            // ].
            assert('EXTRA_DIAGNOSTICS' === feedbackInfo.systemInformation[0].key);
            this.feedbackContext.extraDiagnostics =
                feedbackInfo.systemInformation[0].value;
        }
        this.isUserLoggedIn = this.feedbackContext.categoryTag !== 'Login';
        this.onFeedbackContextReceived();
    }
    initializeForNonDialogMode() {
        this.feedbackServiceProvider.getFeedbackContext().then((response) => {
            this.feedbackContext = response.feedbackContext;
            this.isUserLoggedIn = true;
            this.setAdditionalContextFromQueryParams();
            this.onFeedbackContextReceived();
        });
    }
    fetchScreenshot() {
        const shareDataPage = strictQuery('share-data-page', this.shadowRoot, ShareDataPageElement);
        // Fetch screenshot if not fetched before.
        if (!shareDataPage.screenshotUrl) {
            this.feedbackServiceProvider.getScreenshotPng().then((response) => {
                if (response.pngData.length > 0) {
                    const blob = new Blob([Uint8Array.from(response.pngData)], { type: 'image/png' });
                    const imageUrl = URL.createObjectURL(blob);
                    shareDataPage.screenshotUrl = imageUrl;
                }
            });
        }
    }
    onFeedbackContextReceived() {
        if (!this.feedbackContext) {
            return;
        }
        this.shouldShowAssistantCheckbox = this.feedbackContext.isInternalAccount &&
            this.feedbackContext.fromAssistant;
        this.shouldShowAutofillCheckbox = this.feedbackContext.fromAutofill;
    }
    /**
     * Sets additional context passed from RequestFeedbackFlow as part of the URL.
     * See `AdditionalContextQueryParam` for valid query parameters.
     */
    setAdditionalContextFromQueryParams() {
        if (!this.feedbackContext) {
            return;
        }
        const params = new URLSearchParams(window.location.search);
        const extraDiagnostics = params.get(AdditionalContextQueryParam.EXTRA_DIAGNOSTICS);
        this.feedbackContext.extraDiagnostics =
            extraDiagnostics ? decodeURIComponent(extraDiagnostics) : '';
        const descriptionTemplate = params.get(AdditionalContextQueryParam.DESCRIPTION_TEMPLATE);
        this.descriptionTemplate =
            descriptionTemplate && descriptionTemplate.length > 0 ?
                decodeURIComponent(descriptionTemplate) :
                '';
        const descriptionPlaceholderText = params.get(AdditionalContextQueryParam.DESCRIPTION_PLACEHOLDER_TEXT);
        this.descriptionPlaceholderText =
            descriptionPlaceholderText && descriptionPlaceholderText.length > 0 ?
                decodeURIComponent(descriptionPlaceholderText) :
                '';
        const categoryTag = params.get(AdditionalContextQueryParam.CATEGORY_TAG);
        this.feedbackContext.categoryTag =
            categoryTag ? decodeURIComponent(categoryTag) : '';
        const pageUrl = params.get(AdditionalContextQueryParam.PAGE_URL);
        if (pageUrl) {
            this.set('feedbackContext.pageUrl', { url: pageUrl });
        }
        const fromAssistant = params.get(AdditionalContextQueryParam.FROM_ASSISTANT);
        this.feedbackContext.fromAssistant = !!fromAssistant;
        const fromSettingsSearch = params.get(AdditionalContextQueryParam.FROM_SETTINGS_SEARCH);
        this.set('feedbackContext.fromSettingsSearch', !!fromSettingsSearch);
        const fromAutofill = params.get(AdditionalContextQueryParam.FROM_AUTOFILL);
        this.feedbackContext.fromAutofill = !!fromAutofill;
        const autofillMetadata = params.get(AdditionalContextQueryParam.AUTOFILL_METADATA);
        if (autofillMetadata) {
            this.feedbackContext.autofillMetadata = autofillMetadata;
        }
    }
    handleContinueClick(event) {
        const customEvent = event;
        switch (customEvent.detail.currentState) {
            case FeedbackFlowState.SEARCH:
                this.currentState = FeedbackFlowState.SHARE_DATA;
                this.description = customEvent.detail.description ?? '';
                this.shouldShowBluetoothCheckbox = this.feedbackContext !== null &&
                    this.feedbackContext.isInternalAccount &&
                    this.isDescriptionRelatedToBluetooth(this.description);
                this.shouldShowWifiDebugLogsCheckbox =
                    this.computeShouldShowWifiDebugLogsCheckbox();
                this.shouldShowLinkCrossDeviceDogfoodFeedbackCheckbox =
                    this.feedbackContext !== null &&
                        loadTimeData.getBoolean('enableLinkCrossDeviceDogfoodFeedbackFlag') &&
                        this.feedbackContext.isInternalAccount &&
                        this.feedbackContext.hasLinkedCrossDevicePhone &&
                        this.isDescriptionRelatedToCrossDevice(this.description);
                this.fetchScreenshot();
                const shareDataPage = strictQuery('share-data-page', this.shadowRoot, ShareDataPageElement);
                shareDataPage.focusScreenshotCheckbox();
                showScrollingEffectOnStart(shareDataPage);
                if (!this.helpContentOutcomeMetricEmitted) {
                    this.recordHelpContentOutcome(SearchPageAction.CONTINUE, FeedbackAppHelpContentOutcome.kContinueHelpContentClicked, FeedbackAppHelpContentOutcome.kContinueNoHelpContentClicked);
                    this.helpContentOutcomeMetricEmitted = true;
                }
                break;
            case FeedbackFlowState.SHARE_DATA:
                const report = customEvent.detail.report;
                report.description = stringToMojoString16(this.description);
                // TODO(xiangdongkong): Show a spinner or the like for sendReport could
                // take a while.
                this.feedbackServiceProvider.sendReport(report).then((response) => {
                    this.currentState = FeedbackFlowState.CONFIRMATION;
                    this.sendReportStatus = response.status;
                    const confirmationPage = strictQuery('confirmation-page', this.shadowRoot, ConfirmationPageElement);
                    confirmationPage.focusPageTitle();
                    showScrollingEffectOnStart(confirmationPage);
                });
                break;
            default:
                console.warn('unexpected state: ', customEvent.detail.currentState);
        }
    }
    handleGoBackClick(event) {
        const customEvent = event;
        switch (customEvent.detail.currentState) {
            case FeedbackFlowState.SHARE_DATA:
                this.navigateToSearchPage();
                break;
            case FeedbackFlowState.CONFIRMATION:
                // Remove the text from previous search.
                const searchPage = strictQuery('search-page', this.shadowRoot, SearchPageElement);
                searchPage.setDescription(/*text=*/ '');
                showScrollingEffectOnStart(searchPage);
                // Re-enable the send button in share data page.
                const shareDataPage = strictQuery('share-data-page', this.shadowRoot, ShareDataPageElement);
                shareDataPage.reEnableSendReportButton();
                // Re-enable helpContentOutcomeMetric to be emitted in search page.
                this.helpContentOutcomeMetricEmitted = false;
                this.navigateToSearchPage();
                break;
            default:
                console.warn('unexpected state: ', customEvent.detail.currentState);
        }
    }
    computeShouldShowWifiDebugLogsCheckbox() {
        return this.feedbackContext !== null &&
            this.feedbackContext.isInternalAccount &&
            this.feedbackContext.wifiDebugLogsAllowed &&
            wifiRegEx.test(this.description);
    }
    navigateToSearchPage() {
        this.currentState = FeedbackFlowState.SEARCH;
        const searchPage = strictQuery('search-page', this.shadowRoot, SearchPageElement);
        searchPage.focusInputElement();
        showScrollingEffectOnStart(searchPage);
    }
    recordHelpContentOutcome(action, outcomeHelpContentClicked, outcomeNoHelpContentClicked) {
        if (this.noHelpContentDisplayed) {
            action == SearchPageAction.CONTINUE ?
                this.feedbackServiceProvider.recordHelpContentOutcome(FeedbackAppHelpContentOutcome.kContinueNoHelpContentDisplayed) :
                this.feedbackServiceProvider.recordHelpContentOutcome(FeedbackAppHelpContentOutcome.kQuitNoHelpContentDisplayed);
            return;
        }
        this.helpContentClicked ?
            this.feedbackServiceProvider.recordHelpContentOutcome(outcomeHelpContentClicked) :
            this.feedbackServiceProvider.recordHelpContentOutcome(outcomeNoHelpContentClicked);
    }
    recordExitPath(pathHelpContentClicked, pathNoHelpContentClicked) {
        if (this.noHelpContentDisplayed) {
            this.feedbackServiceProvider.recordExitPath(FeedbackAppExitPath.kQuitNoHelpContentDisplayed);
            return;
        }
        this.helpContentClicked ?
            this.feedbackServiceProvider.recordExitPath(pathHelpContentClicked) :
            this.feedbackServiceProvider.recordExitPath(pathNoHelpContentClicked);
    }
    setCurrentStateForTesting(newState) {
        this.currentState = newState;
    }
    setSendReportStatusForTesting(status) {
        this.sendReportStatus = status;
    }
    setDescriptionForTesting(text) {
        this.description = text;
    }
    setHelpContentClickedForTesting(helpContentClicked) {
        this.helpContentClicked = helpContentClicked;
    }
    setNoHelpContentDisplayedForTesting(noHelpContentDisplayed) {
        this.noHelpContentDisplayed = noHelpContentDisplayed;
    }
    getDescriptionTemplateForTesting() {
        return this.descriptionTemplate;
    }
    getDescriptionPlaceholderTextForTesting() {
        return this.descriptionPlaceholderText;
    }
    getIsUserLoggedInForTesting() {
        return this.isUserLoggedIn;
    }
    getFeedbackContextForTesting() {
        return this.feedbackContext;
    }
    getShouldShowWifiDebugLogsCheckboxForTesting() {
        return this.shouldShowWifiDebugLogsCheckbox;
    }
    /**
     * Checks if any keywords related to bluetooth have been typed. If they are,
     * we show the bluetooth logs option, otherwise hide it.
     */
    isDescriptionRelatedToBluetooth(textInput) {
        /**
         * If the user is not signed in with a internal google account, the
         * bluetooth checkbox should be hidden and skip the relative check.
         */
        const isRelatedToBluetooth = btRegEx.test(textInput) ||
            cantConnectRegEx.test(textInput) ||
            this.isDescriptionRelatedToCrossDevice(textInput) ||
            fastPairRegEx.test(textInput) || btDeviceRegEx.test(textInput);
        return isRelatedToBluetooth;
    }
    /**
     * If the user is not signed in with a internal google account, the Cross
     * Device checkbox should be hidden and skip the relative check.
     *
     * Checks if any keywords related to Cross Device have been typed. If they
     * are, we show the cross device checkbox, otherwise hide it.
     */
    isDescriptionRelatedToCrossDevice(textInput) {
        const isRelatedToCrossDevice = phoneHubRegEx.test(textInput) ||
            tetherRegEx.test(textInput) || smartLockRegEx.test(textInput) ||
            nearbyShareRegEx.test(textInput);
        return isRelatedToCrossDevice;
    }
}
customElements.define(FeedbackFlowElement.is, FeedbackFlowElement);
