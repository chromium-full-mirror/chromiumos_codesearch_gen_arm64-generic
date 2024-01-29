// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview consolidated consent screen implementation.
 */
import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import '//resources/js/action_link.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/paper-styles/color.js';
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/oobe_icons.html.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import { assert } from '//resources/js/assert.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OobeModalDialog } from '../../components/dialogs/oobe_modal_dialog.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { ContentType, WebViewHelper } from '../../components/web_view_helper.js';
import { WebViewLoader } from '../../components/web_view_loader.js';
import { Oobe } from '../../cr_ui.js';
import { getTemplate } from './consolidated_consent.html.js';
// Enum that describes the current state of the consolidated consent screen
var ConsolidatedConsentScreenState;
(function (ConsolidatedConsentScreenState) {
    ConsolidatedConsentScreenState["LOADING"] = "loading";
    ConsolidatedConsentScreenState["LOADED"] = "loaded";
    ConsolidatedConsentScreenState["PLAY_LOAD_ERROR"] = "play-load-error";
    ConsolidatedConsentScreenState["GOOGLE_EULA"] = "google-eula";
    ConsolidatedConsentScreenState["CROS_EULA"] = "cros-eula";
    ConsolidatedConsentScreenState["ARC"] = "arc";
    ConsolidatedConsentScreenState["PRIVACY"] = "privacy";
})(ConsolidatedConsentScreenState || (ConsolidatedConsentScreenState = {}));
/**
 * URL to use when online page is not available.
 */
const GOOGLE_EULA_TERMS_URL = 'chrome://terms';
const PRIVACY_POLICY_URL = 'chrome://terms/arc/privacy_policy';
/**
 * Timeout to load online ToS.
 */
const CONSOLIDATED_CONSENT_ONLINE_LOAD_TIMEOUT_IN_MS = 10000;
/**
 * This enum is tied directly to a UMA enum defined in
 * //tools/metrics/histograms/enums.xml, and should always reflect it (do not
 * change one without changing the other).
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 */
var ConsolidatedConsentUserAction;
(function (ConsolidatedConsentUserAction) {
    ConsolidatedConsentUserAction[ConsolidatedConsentUserAction["ACCEPT_BUTTON"] = 0] = "ACCEPT_BUTTON";
    ConsolidatedConsentUserAction[ConsolidatedConsentUserAction["BACK_DEMO_BUTTON"] = 1] = "BACK_DEMO_BUTTON";
    ConsolidatedConsentUserAction[ConsolidatedConsentUserAction["GOOGLE_EULA_LINK"] = 2] = "GOOGLE_EULA_LINK";
    ConsolidatedConsentUserAction[ConsolidatedConsentUserAction["CROS_EULA_LINK"] = 3] = "CROS_EULA_LINK";
    ConsolidatedConsentUserAction[ConsolidatedConsentUserAction["ARC_TOS_LINK"] = 4] = "ARC_TOS_LINK";
    ConsolidatedConsentUserAction[ConsolidatedConsentUserAction["PRIVACY_POLICY_LINK"] = 5] = "PRIVACY_POLICY_LINK";
    ConsolidatedConsentUserAction[ConsolidatedConsentUserAction["USAGE_OPTIN_LEARN_MORE"] = 6] = "USAGE_OPTIN_LEARN_MORE";
    ConsolidatedConsentUserAction[ConsolidatedConsentUserAction["BACKUP_OPTIN_LEARN_MORE"] = 7] = "BACKUP_OPTIN_LEARN_MORE";
    ConsolidatedConsentUserAction[ConsolidatedConsentUserAction["LOCATION_OPTIN_LEARN_MORE"] = 8] = "LOCATION_OPTIN_LEARN_MORE";
    ConsolidatedConsentUserAction[ConsolidatedConsentUserAction["FOOTER_LEARN_MORE"] = 9] = "FOOTER_LEARN_MORE";
    ConsolidatedConsentUserAction[ConsolidatedConsentUserAction["ERROR_STEP_RETRY_BUTTON"] = 10] = "ERROR_STEP_RETRY_BUTTON";
    ConsolidatedConsentUserAction[ConsolidatedConsentUserAction["MAX"] = 11] = "MAX";
})(ConsolidatedConsentUserAction || (ConsolidatedConsentUserAction = {}));
const ConsolidatedConsentScreenElementBase = mixinBehaviors([
    OobeI18nBehavior,
    LoginScreenBehavior,
    MultiStepBehavior,
], PolymerElement);
export class ConsolidatedConsent extends ConsolidatedConsentScreenElementBase {
    static get is() {
        return 'consolidated-consent-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            isArcEnabled: {
                type: Boolean,
                value: true,
            },
            isDemo: {
                type: Boolean,
                value: false,
            },
            isChildAccount: {
                type: Boolean,
                value: false,
            },
            isTosHidden: {
                type: Boolean,
                value: false,
            },
            usageManaged: {
                type: Boolean,
                value: false,
            },
            usageOptinHidden: {
                type: Boolean,
                value: false,
            },
            usageOptinHiddenLoading: {
                type: Boolean,
                value: true,
            },
            backupManaged: {
                type: Boolean,
                value: false,
            },
            locationManaged: {
                type: Boolean,
                value: false,
            },
            usageChecked: {
                type: Boolean,
                value: true,
            },
            backupChecked: {
                type: Boolean,
                value: true,
            },
            locationChecked: {
                type: Boolean,
                value: true,
            },
            recoveryVisible: {
                type: Boolean,
                value: false,
            },
            recoveryChecked: {
                type: Boolean,
                value: false,
            },
        };
    }
    constructor() {
        super();
        this.areWebviewsInitialized = false;
        // Text displayed in the Arc Terms of Service webview.
        this.arcTosContent = '';
        // Flag that ensures that OOBE configuration is applied only once.
        this.configurationApplied = false;
        // Online URLs
        this.googleEulaUrl = '';
        this.crosEulaUrl = '';
        this.arcTosUrl = '';
        this.privacyPolicyUrl = '';
    }
    get EXTERNAL_API() {
        return [
            'setUsageMode',
            'setBackupMode',
            'setLocationMode',
            'setUsageOptinHidden',
        ];
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        // The initial step of the screen is `LOADING` until `setUsageOptinHidden()`
        // method is called. `setUsageOptinHidden()` is called after ownership
        // status is retrieved asynchronously.
        return ConsolidatedConsentScreenState.LOADING;
    }
    get UI_STEPS() {
        return ConsolidatedConsentScreenState;
    }
    /** Initial UI State for screen */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.ONBOARDING;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('ConsolidatedConsentScreen');
        this.updateLocalizedContent();
    }
    onBeforeShow(data) {
        window.setTimeout(this.applyOobeConfiguration);
        this.isArcEnabled = data['isArcEnabled'];
        this.isDemo = data['isDemo'];
        this.isChildAccount = data['isChildAccount'];
        this.isTosHidden = data['isTosHidden'];
        this.recoveryVisible = data['showRecoveryOption'];
        this.recoveryChecked = data['recoveryOptionDefault'];
        if (this.isDemo) {
            this.usageOptinHidden = false;
            this.usageOptinHiddenLoading = false;
        }
        this.googleEulaUrl = data['googleEulaUrl'];
        this.crosEulaUrl = data['crosEulaUrl'];
        this.arcTosUrl = data['arcTosUrl'];
        this.privacyPolicyUrl = data['privacyPolicyUrl'];
        // If the ToS section is hidden, apply the remove the top border of the
        // first opt-in.
        if (this.isTosHidden) {
            const useageStatsDiv = this.shadowRoot?.querySelector('#usageStats');
            if (useageStatsDiv instanceof HTMLDivElement) {
                useageStatsDiv.classList.add('first-optin-no-tos');
            }
        }
        const loadedContentDiv = this.shadowRoot?.querySelector('#loadedContent');
        if (loadedContentDiv instanceof HTMLDivElement) {
            if (this.isArcOptInsHidden(this.isArcEnabled, this.isDemo)) {
                loadedContentDiv.classList.remove('landscape-vertical-centered');
                loadedContentDiv.classList.add('landscape-header-aligned');
            }
            else {
                loadedContentDiv.classList.remove('landscape-header-aligned');
                loadedContentDiv.classList.add('landscape-vertical-centered');
            }
        }
        // Call updateLocalizedContent() to ensure that the listeners of the click
        // events on the ToS links are added.
        this.updateLocalizedContent();
    }
    applyOobeConfiguration() {
        if (this.configurationApplied) {
            return;
        }
        const configuration = Oobe.getInstance().getOobeConfiguration();
        if (!configuration) {
            return;
        }
        if (configuration.eulaSendStatistics) {
            this.usageChecked = true;
        }
        if (configuration.eulaAutoAccept && configuration.arcTosAutoAccept) {
            this.onAcceptClick();
        }
    }
    // If ARC is disabled, don't show ARC ToS.
    shouldShowArcTos(isTosHidden, isArcEnabled) {
        return !isTosHidden && isArcEnabled;
    }
    preventNewWindows(webview) {
        webview.addEventListener('newwindow', (event) => {
            event.preventDefault();
        });
    }
    initializeTosWebivews() {
        if (this.areWebviewsInitialized) {
            return;
        }
        this.areWebviewsInitialized = true;
        const googleEulaWebview = this.shadowRoot?.querySelector('#consolidatedConsentGoogleEulaWebview');
        assert(googleEulaWebview);
        this.preventNewWindows(googleEulaWebview);
        const crosEulaWebview = this.shadowRoot?.querySelector('#consolidatedConsentCrosEulaWebview');
        assert(crosEulaWebview);
        this.preventNewWindows(crosEulaWebview);
        const arcTosWebview = this.shadowRoot?.querySelector('#consolidatedConsentArcTosWebview');
        assert(arcTosWebview);
        this.preventNewWindows(arcTosWebview);
        const privacyPolicyWebview = this.shadowRoot?.querySelector('#consolidatedConsentPrivacyPolicyWebview');
        assert(privacyPolicyWebview);
        this.preventNewWindows(privacyPolicyWebview);
    }
    showGoogleEula() {
        this.initializeTosWebivews();
        this.setUIStep(ConsolidatedConsentScreenState.LOADING);
        const googleEulaWebview = this.shadowRoot?.querySelector('#consolidatedConsentGoogleEulaWebview');
        assert(googleEulaWebview);
        this.loadEulaWebview(googleEulaWebview, this.googleEulaUrl, false /* clearAnchors */);
    }
    loadEulaWebview(webview, onlineTosUrl, clearAnchors) {
        const loadFailureCallback = () => {
            WebViewHelper.loadUrlContentToWebView(webview, GOOGLE_EULA_TERMS_URL, ContentType.HTML);
        };
        const tosLoader = new WebViewLoader(webview, CONSOLIDATED_CONSENT_ONLINE_LOAD_TIMEOUT_IN_MS, loadFailureCallback, clearAnchors, true /* inject_css */);
        tosLoader.setUrl(onlineTosUrl);
    }
    onGoogleEulaContentLoad() {
        this.setUIStep(ConsolidatedConsentScreenState.GOOGLE_EULA);
    }
    showCrosEula() {
        this.initializeTosWebivews();
        this.setUIStep(ConsolidatedConsentScreenState.LOADING);
        const crosEulaWebview = this.shadowRoot?.querySelector('#consolidatedConsentCrosEulaWebview');
        assert(crosEulaWebview);
        this.loadEulaWebview(crosEulaWebview, this.crosEulaUrl, true /* clearAnchors */);
    }
    onCrosEulaContentLoad() {
        this.setUIStep(ConsolidatedConsentScreenState.CROS_EULA);
    }
    showArcTos() {
        this.initializeTosWebivews();
        this.setUIStep(ConsolidatedConsentScreenState.LOADING);
        this.loadArcTosWebview(this.arcTosUrl);
    }
    loadArcTosWebview(onlineTosUrl) {
        const loadFailureCallback = () => {
            this.setUIStep(ConsolidatedConsentScreenState.PLAY_LOAD_ERROR);
        };
        const arcTosWebview = this.shadowRoot?.querySelector('#consolidatedConsentArcTosWebview');
        assert(arcTosWebview);
        const tosLoader = new WebViewLoader(arcTosWebview, CONSOLIDATED_CONSENT_ONLINE_LOAD_TIMEOUT_IN_MS, loadFailureCallback, false /* clearAnchors */, false /* inject_css */);
        tosLoader.setUrl(onlineTosUrl);
    }
    onArcTosContentLoad() {
        // In demo mode, consents are not recorded, so no need to store the ToS
        // Content.
        if (!this.isDemo) {
            const arcTosWebview = this.shadowRoot?.querySelector('#consolidatedConsentArcTosWebview');
            assert(arcTosWebview);
            arcTosWebview.executeScript({ code: 'document.body.innerHTML;' }, (results) => {
                if (results && results.length === 1 &&
                    typeof results[0] === 'string') {
                    this.arcTosContent = results[0];
                }
            });
        }
        this.setUIStep(ConsolidatedConsentScreenState.ARC);
    }
    showPrivacyPolicy() {
        this.initializeTosWebivews();
        this.setUIStep(ConsolidatedConsentScreenState.LOADING);
        this.loadPrivacyPolicyWebview(this.privacyPolicyUrl);
    }
    loadPrivacyPolicyWebview(onlineTosUrl) {
        const privacyPolicyWebview = this.shadowRoot?.querySelector('#consolidatedConsentPrivacyPolicyWebview');
        assert(privacyPolicyWebview);
        const loadFailureCallback = () => {
            if (this.isDemo) {
                WebViewHelper.loadUrlContentToWebView(privacyPolicyWebview, PRIVACY_POLICY_URL, ContentType.PDF);
            }
        };
        const tosLoader = new WebViewLoader(privacyPolicyWebview, CONSOLIDATED_CONSENT_ONLINE_LOAD_TIMEOUT_IN_MS, loadFailureCallback, false /* clearAnchors */, false /* inject_css */);
        tosLoader.setUrl(onlineTosUrl);
    }
    onPrivacyPolicyContentLoad() {
        this.setUIStep(ConsolidatedConsentScreenState.PRIVACY);
    }
    updateLocalizedContent() {
        const privacyPolicyLink = this.shadowRoot?.querySelector('#privacyPolicyLink');
        assert(privacyPolicyLink);
        privacyPolicyLink.onclick = () => this.onPrivacyPolicyLinkClick();
        const googleEulaLink = this.shadowRoot?.querySelector('#googleEulaLink');
        assert(googleEulaLink);
        googleEulaLink.onclick = () => this.onGoogleEulaLinkClick();
        const googleEulaLinkArcDisabled = this.shadowRoot?.querySelector('#googleEulaLinkArcDisabled');
        assert(googleEulaLinkArcDisabled);
        googleEulaLinkArcDisabled.onclick = () => this.onGoogleEulaLinkClick();
        const crosEulaLink = this.shadowRoot?.querySelector('#crosEulaLink');
        assert(crosEulaLink);
        crosEulaLink.onclick = () => this.onCrosEulaLinkClick();
        const crosEulaLinkArcDisabled = this.shadowRoot?.querySelector('#crosEulaLinkArcDisabled');
        assert(crosEulaLinkArcDisabled);
        crosEulaLinkArcDisabled.onclick = () => this.onCrosEulaLinkClick();
        const arcTosLink = this.shadowRoot?.querySelector('#arcTosLink');
        assert(arcTosLink);
        arcTosLink.onclick = () => this.onArcTosLinkClick();
    }
    getSubtitleArcEnabled(locale) {
        const subtitle = document.createElement('div');
        subtitle.innerHTML = this.i18nAdvancedDynamic(locale, 'consolidatedConsentSubheader', { attrs: ['id'] });
        const privacyPolicyLink = subtitle.querySelector('#privacyPolicyLink');
        assert(privacyPolicyLink);
        privacyPolicyLink.setAttribute('is', 'action-link');
        privacyPolicyLink.classList.add('oobe-local-link');
        return sanitizeInnerHtml(subtitle.innerHTML, { tags: ['a'], attrs: ['id', 'is', 'class'] });
    }
    getTermsDescriptionArcEnabled(locale) {
        const description = document.createElement('div');
        description.innerHTML = this.i18nAdvancedDynamic(locale, 'consolidatedConsentTermsDescription', { attrs: ['id'] });
        const googleEulaLink = description.querySelector('#googleEulaLink');
        assert(googleEulaLink);
        googleEulaLink.setAttribute('is', 'action-link');
        googleEulaLink.classList.add('oobe-local-link');
        const crosEulaLink = description.querySelector('#crosEulaLink');
        assert(crosEulaLink);
        crosEulaLink.setAttribute('is', 'action-link');
        crosEulaLink.classList.add('oobe-local-link');
        const arcTosLink = description.querySelector('#arcTosLink');
        assert(arcTosLink);
        arcTosLink.setAttribute('is', 'action-link');
        arcTosLink.classList.add('oobe-local-link');
        return sanitizeInnerHtml(description.innerHTML, { tags: ['a'], attrs: ['id', 'is', 'class'] });
    }
    getTermsDescriptionArcDisabled(locale) {
        const description = document.createElement('div');
        description.innerHTML = this.i18nAdvancedDynamic(locale, 'consolidatedConsentTermsDescriptionArcDisabled', { attrs: ['id'] });
        const googleEulaLink = description.querySelector('#googleEulaLinkArcDisabled');
        assert(googleEulaLink);
        googleEulaLink.setAttribute('is', 'action-link');
        googleEulaLink.classList.add('oobe-local-link');
        const crosEulaLink = description.querySelector('#crosEulaLinkArcDisabled');
        assert(crosEulaLink);
        crosEulaLink.setAttribute('is', 'action-link');
        crosEulaLink.classList.add('oobe-local-link');
        return sanitizeInnerHtml(description.innerHTML, { tags: ['a'], attrs: ['id', 'is', 'class'] });
    }
    getTitle(locale, isTosHidden, isChildAccount) {
        if (isTosHidden) {
            return this.i18nAdvancedDynamic(locale, 'consolidatedConsentHeaderManaged');
        }
        if (isChildAccount) {
            return this.i18nAdvancedDynamic(locale, 'consolidatedConsentHeaderChild');
        }
        return this.i18nAdvancedDynamic(locale, 'consolidatedConsentHeader');
    }
    getUsageLearnMoreText(locale, isChildAccount, isArcEnabled, isDemo) {
        if (this.isArcOptInsHidden(isArcEnabled, isDemo)) {
            if (isChildAccount) {
                return this.i18nAdvancedDynamic(locale, 'consolidatedConsentUsageOptInLearnMoreArcDisabledChild');
            }
            return this.i18nAdvancedDynamic(locale, 'consolidatedConsentUsageOptInLearnMoreArcDisabled');
        }
        if (isChildAccount) {
            return this.i18nAdvancedDynamic(locale, 'consolidatedConsentUsageOptInLearnMoreChild');
        }
        return this.i18nAdvancedDynamic(locale, 'consolidatedConsentUsageOptInLearnMore');
    }
    getBackupLearnMoreText(locale, isChildAccount) {
        if (isChildAccount) {
            return this.i18nAdvancedDynamic(locale, 'consolidatedConsentBackupOptInLearnMoreChild');
        }
        return this.i18nAdvancedDynamic(locale, 'consolidatedConsentBackupOptInLearnMore');
    }
    getLocationLearnMoreText(locale, isChildAccount) {
        if (isChildAccount) {
            return this.i18nAdvancedDynamic(locale, 'consolidatedConsentLocationOptInLearnMoreChild');
        }
        return this.i18nAdvancedDynamic(locale, 'consolidatedConsentLocationOptInLearnMore');
    }
    isArcOptInsHidden(isArcEnabled, isDemo) {
        return !isArcEnabled || isDemo;
    }
    setUsageMode(enabled, managed) {
        this.usageChecked = enabled;
        this.usageManaged = managed;
    }
    /**
     * Sets the hidden property of the usage opt-in.
     * @param hidden Defines the value used for the hidden property of
     *     the usage opt-in.
     */
    setUsageOptinHidden(hidden) {
        this.usageOptinHidden = hidden;
        this.usageOptinHiddenLoading = false;
        this.setUIStep(ConsolidatedConsentScreenState.LOADED);
    }
    /**
     * Sets current backup and restore mode.
     * @param enabled Defines the state of backup opt in.
     * @param managed Defines whether this setting is set by policy.
     */
    setBackupMode(enabled, managed) {
        this.backupChecked = enabled;
        this.backupManaged = managed;
    }
    /**
     * Sets current usage of location service opt in mode.
     * @param enabled Defines the state of location service opt in.
     * @param managed Defines whether this setting is set by policy.
     */
    setLocationMode(enabled, managed) {
        this.locationChecked = enabled;
        this.locationManaged = managed;
    }
    onGoogleEulaLinkClick() {
        this.recordUmaHistogramForUserActions(ConsolidatedConsentUserAction.GOOGLE_EULA_LINK);
        this.showGoogleEula();
    }
    onCrosEulaLinkClick() {
        this.recordUmaHistogramForUserActions(ConsolidatedConsentUserAction.CROS_EULA_LINK);
        this.showCrosEula();
    }
    onArcTosLinkClick() {
        this.recordUmaHistogramForUserActions(ConsolidatedConsentUserAction.ARC_TOS_LINK);
        this.showArcTos();
    }
    onPrivacyPolicyLinkClick() {
        this.recordUmaHistogramForUserActions(ConsolidatedConsentUserAction.PRIVACY_POLICY_LINK);
        this.showPrivacyPolicy();
    }
    onTermsStepOkClick() {
        this.setUIStep(ConsolidatedConsentScreenState.LOADED);
    }
    onErrorDoneClick() {
        this.setUIStep(ConsolidatedConsentScreenState.LOADED);
    }
    onUsageLearnMoreClick() {
        this.recordUmaHistogramForUserActions(ConsolidatedConsentUserAction.USAGE_OPTIN_LEARN_MORE);
        const usageLearnMorePopUp = this.shadowRoot?.querySelector('#usageLearnMorePopUp');
        if (usageLearnMorePopUp instanceof OobeModalDialog) {
            usageLearnMorePopUp.showDialog();
        }
    }
    onBackupLearnMoreClick() {
        this.recordUmaHistogramForUserActions(ConsolidatedConsentUserAction.BACKUP_OPTIN_LEARN_MORE);
        const backupLearnMorePopUp = this.shadowRoot?.querySelector('#backupLearnMorePopUp');
        if (backupLearnMorePopUp instanceof OobeModalDialog) {
            backupLearnMorePopUp.showDialog();
        }
    }
    onLocationLearnMoreClick() {
        this.recordUmaHistogramForUserActions(ConsolidatedConsentUserAction.LOCATION_OPTIN_LEARN_MORE);
        const locationLearnMorePopUp = this.shadowRoot?.querySelector('#locationLearnMorePopUp');
        if (locationLearnMorePopUp instanceof OobeModalDialog) {
            locationLearnMorePopUp.showDialog();
        }
    }
    onFooterLearnMoreClick() {
        this.recordUmaHistogramForUserActions(ConsolidatedConsentUserAction.FOOTER_LEARN_MORE);
        const footerLearnMorePopUp = this.shadowRoot?.querySelector('#footerLearnMorePopUp');
        if (footerLearnMorePopUp instanceof OobeModalDialog) {
            footerLearnMorePopUp.showDialog();
        }
    }
    onAcceptClick() {
        this.recordUmaHistogramForUserActions(ConsolidatedConsentUserAction.ACCEPT_BUTTON);
        this.userActed([
            'tos-accept',
            this.usageChecked,
            this.backupChecked,
            this.locationChecked,
            this.arcTosContent,
            this.recoveryChecked,
        ]);
    }
    /**
     * On-tap event handler for Retry button.
     */
    onRetryClick() {
        this.recordUmaHistogramForUserActions(ConsolidatedConsentUserAction.ERROR_STEP_RETRY_BUTTON);
        this.showArcTos();
    }
    /**
     * On-tap event handler for Back button.
     */
    onBack() {
        this.recordUmaHistogramForUserActions(ConsolidatedConsentUserAction.BACK_DEMO_BUTTON);
        this.userActed('back');
    }
    recordUmaHistogramForUserActions(result) {
        chrome.send('metricsHandler:recordInHistogram', [
            'OOBE.ConsolidatedConsentScreen.UserActions',
            result,
            ConsolidatedConsentUserAction.MAX,
        ]);
    }
}
customElements.define(ConsolidatedConsent.is, ConsolidatedConsent);
