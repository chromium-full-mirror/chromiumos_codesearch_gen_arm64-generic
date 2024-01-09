// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import './help_content.js';
import './help_resources_icons.html.js';
import './os_feedback_shared.css.js';
import { strictQuery } from 'chrome://resources/ash/common/typescript_utils/strict_query.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { stringToMojoString16 } from 'chrome://resources/js/mojo_type_util.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { btRegEx, buildWordMatcher, FeedbackFlowState } from './feedback_flow.js';
import { showScrollingEffectOnStart, showScrollingEffects } from './feedback_utils.js';
import { getHelpContentProvider } from './mojo_interface_provider.js';
import { domainQuestions, questionnaireBegin } from './questionnaire.js';
import { getTemplate } from './search_page.html.js';
/**  The maximum number of help contents wanted per search. */
const MAX_RESULTS = 5;
/**  The host of untrusted child page. */
export const OS_FEEDBACK_UNTRUSTED_ORIGIN = 'chrome-untrusted://os-feedback';
/**  Regular expression to check for wifi-related keywords. */
const wifiRegEx = buildWordMatcher(['wifi', 'wi-fi', 'internet', 'network', 'hotspot']);
/**  Regular expression to check for cellular-related keywords. */
const cellularRegEx = buildWordMatcher([
    '2G', '3G', '4G', '5G', 'LTE', 'UMTS',
    'SIM', 'eSIM', 'mmWave', 'mobile', 'APN', 'IMEI',
    'IMSI', 'eUICC', 'carrier', 'T.Mobile', 'TMO', 'Verizon',
    'VZW', 'AT&T', 'MVNO', 'pin.lock', 'cellular',
]);
/**  Regular expression to check for display-related keywords. */
const displayRegEx = buildWordMatcher([
    'display',
    'displayport',
    'hdmi',
    'monitor',
    'panel',
    'screen',
]);
/**  Regular expression to check for USB-related keywords. */
const usbRegEx = buildWordMatcher([
    'USB',
    'USB-C',
    'Type-C',
    'TypeC',
    'USBC',
    'USBTypeC',
    'USBPD',
    'hub',
    'charger',
    'dock',
]);
/**  Regular expression to check for thunderbolt-related keywords. */
const thunderboltRegEx = buildWordMatcher([
    'Thunderbolt',
    'Thunderbolt3',
    'Thunderbolt4',
    'TBT',
    'TBT3',
    'TBT4',
    'TB3',
    'TB4',
]);
/**
 * @fileoverview
 * 'search-page' is the first step of the feedback tool. It displays live help
 *  contents relevant to the text entered by the user.
 */
const SearchPageElementBase = I18nMixin(PolymerElement);
export class SearchPageElement extends SearchPageElementBase {
    static get is() {
        return 'search-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            feedbackContext: { type: Object, readOnly: false, notify: true },
            descriptionTemplate: {
                type: String,
                readonly: true,
                observer: SearchPageElement.prototype.descriptionTemplateChanged,
            },
            descriptionPlaceholderText: {
                type: String,
                readonly: true,
                observer: SearchPageElement.prototype.descriptionPlaceholderTextChanged,
            },
            helpContentSearchResultCount: {
                type: Number,
                notify: true,
            },
            noHelpContentDisplayed: {
                type: Boolean,
                notify: true,
            },
        };
    }
    constructor() {
        super();
        this.descriptionTemplate = '';
        this.descriptionPlaceholderText = '';
        this.helpContentSearchResultCount = 0;
        this.noHelpContentDisplayed = false;
        /**
         * The list of questionnaire questions that have already been appended to
         * the input text.
         */
        this.appendedQuestions = [];
        /**  Whether the search result content is returned with popular content. */
        this.isPopularContentForTesting = false;
        /**  Timer used to add a delay to fire a new search. */
        this.searchTimerID = -1;
        /**
         * The unique id of a query. Whenever a new query is scheduled, this number
         * will be incremented by 1. New query will have a bigger sequence number
         * than older queries.
         * @private {number}
         */
        this.querySeqNo = 0;
        /**
         * Delay in milliseconds before firing a new search.
         *
         * This variable needs to remain public because the unit tests need to
         * set its value.
         */
        this.searchTimoutInMs = 250;
        this.helpContentProvider = getHelpContentProvider();
        this.lastPostedQuerySeqNo = -1;
        this.iframeLoaded = new Promise(resolve => {
            this.resolveIframeLoaded = resolve;
        });
        // Set focus on the input field and decide whether to show scrolling effect
        // after iframe is loaded.
        this.iframeLoaded.then(() => {
            this.focusInputElement();
            showScrollingEffectOnStart(this);
        });
    }
    ready() {
        super.ready();
        this.iframe = strictQuery('iframe', this.shadowRoot, HTMLIFrameElement);
        // Fetch popular help contents with empty query.
        this.fetchHelpContent(
        /* query= */ '', /* querySeqNo= */ this.getNextQuerySeqNo());
        this.getInputElement().addEventListener('input', () => this.checkForShowQuestionnaire());
        window.addEventListener('message', (e) => {
            const message = e.data;
            if (message.iframeHeight) {
                this.style.setProperty('--iframe-height', message.iframeHeight.toString() + 'px');
            }
        }, false);
    }
    handleInputChanged(e) {
        clearTimeout(this.searchTimerID);
        const textArea = e.target;
        const query = textArea.value.trim();
        // As the user is typing, hide the error message.
        if (query.length > 0) {
            this.hideError();
        }
        // When the user is not logged in, the feedback app does not allow access to
        // external websites. Therefore, search is not needed.
        if (!this.isUserLoggedIn()) {
            return;
        }
        const querySeqNo = this.getNextQuerySeqNo();
        this.searchTimerID = setTimeout(() => {
            this.fetchHelpContent(query, querySeqNo);
        }, this.searchTimoutInMs);
    }
    getNextQuerySeqNo() {
        return this.querySeqNo++;
    }
    /**
     * When the feedback app is launched from OOBE or the login screen, the
     * categoryTag is set to "Login".
     */
    isUserLoggedIn() {
        return this.feedbackContext?.categoryTag !== 'Login';
    }
    /**
     * Fetches help content/popular search and notifies iframe if querySeqNo is
     * greater than previous.
     */
    async fetchHelpContent(query, querySeqNo) {
        if (!this.iframe) {
            console.warn('untrusted iframe is not found');
            return;
        }
        // When the user is not logged in, the feedback app does not allow access to
        // external websites. Therefore, search is not needed.
        if (!this.isUserLoggedIn()) {
            return;
        }
        const request = {
            query: stringToMojoString16(query),
            maxResults: MAX_RESULTS,
        };
        const isQueryEmpty = (query === '');
        let isPopularContent;
        let response;
        if (isQueryEmpty) {
            // Load popular help content if they are not loaded before.
            if (this.popularHelpContentList === undefined) {
                response = await this.helpContentProvider.getHelpContents(request);
                this.popularHelpContentList = response.response.results;
            }
            this.helpContentSearchResultCount = this.popularHelpContentList.length;
            isPopularContent = true;
        }
        else {
            response = await this.helpContentProvider.getHelpContents(request);
            isPopularContent = (response.response.results.length === 0);
            this.helpContentSearchResultCount = response.response.results.length;
        }
        this.isPopularContentForTesting = isPopularContent;
        const data = {
            contentList: (isPopularContent ? this.popularHelpContentList :
                response.response.results),
            isQueryEmpty: isQueryEmpty,
            isPopularContent: isPopularContent,
        };
        this.noHelpContentDisplayed = (data.contentList.length === 0);
        // Wait for the iframe to complete loading before postMessage.
        await this.iframeLoaded;
        // Results from an older query will be ignored.
        if (querySeqNo > this.lastPostedQuerySeqNo) {
            this.lastPostedQuerySeqNo = querySeqNo;
            // TODO(xiangdongkong): Use Mojo to communicate with untrusted page.
            this.iframe.contentWindow.postMessage(data, OS_FEEDBACK_UNTRUSTED_ORIGIN);
        }
    }
    getInputElement() {
        return strictQuery('#descriptionText', this.shadowRoot, HTMLTextAreaElement);
    }
    /**  Focus on the textarea element. */
    focusInputElement() {
        this.getInputElement().focus();
    }
    onInputInvalid() {
        this.showError();
        this.focusInputElement();
    }
    getErrorElement() {
        return strictQuery('#emptyErrorContainer', this.shadowRoot, HTMLElement);
    }
    showError() {
        // TODO(xiangdongkong): Change the textarea's aria-labelledby to ensure the
        // screen reader does (or doesn't) read the error, as appropriate.
        // If it does read the error, it should do so _before_ it reads the normal
        // description.
        const errorElement = this.getErrorElement();
        errorElement.hidden = false;
        errorElement.setAttribute('aria-hidden', 'false');
        const descriptionTextElement = this.getInputElement();
        descriptionTextElement.classList.add('has-error');
    }
    hideError() {
        const errorElement = this.getErrorElement();
        if (errorElement.hidden) {
            return;
        }
        errorElement.hidden = true;
        errorElement.setAttribute('aria-hidden', 'true');
        const descriptionTextElement = this.getInputElement();
        descriptionTextElement.classList.remove('has-error');
    }
    feedbackWritingGuidanceUrl() {
        // TODO(xiangdongkong): append ?hl={the application locale} to the url.
        const url = 'https://support.google.com/chromebook/answer/2982029';
        return url;
    }
    handleContinueButtonClicked(e) {
        e.stopPropagation();
        const textInput = this.getInputElement().value.trim();
        if (textInput.length === 0) {
            this.onInputInvalid();
        }
        else {
            this.dispatchEvent(new CustomEvent('continue-click', {
                composed: true,
                bubbles: true,
                detail: { currentState: FeedbackFlowState.SEARCH, description: textInput },
            }));
        }
    }
    setDescription(text) {
        this.getInputElement().value = text;
    }
    descriptionTemplateChanged(currentTemplate) {
        this.getInputElement().value = currentTemplate;
    }
    descriptionPlaceholderTextChanged(currentPlaceholder) {
        if (currentPlaceholder === '') {
            this.getInputElement().placeholder = this.i18n('descriptionHint');
        }
        else {
            this.getInputElement().placeholder = currentPlaceholder;
        }
    }
    /**
     * Checks if any keywords have associated questionnaire in a domain. If so,
     * we append the questionnaire to the text input box.
     */
    checkForShowQuestionnaire() {
        if (!this.feedbackContext.isInternalAccount) {
            return;
        }
        const toAppend = [];
        // Match user-entered description before the questionnaire to reduce false
        // positives due to matching the questionnaire questions and answers.
        const textarea = this.getInputElement();
        const value = textarea.value;
        const questionnaireBeginPos = value.indexOf(questionnaireBegin);
        const matchedText = questionnaireBeginPos >= 0 ?
            value.substring(0, questionnaireBeginPos) :
            value;
        if (btRegEx.test(matchedText)) {
            toAppend.push(...domainQuestions['bluetooth']);
        }
        if (wifiRegEx.test(matchedText)) {
            toAppend.push(...domainQuestions['wifi']);
        }
        if (cellularRegEx.test(matchedText)) {
            toAppend.push(...domainQuestions['cellular']);
        }
        if (displayRegEx.test(matchedText)) {
            toAppend.push(...domainQuestions['display']);
        }
        if (thunderboltRegEx.test(matchedText)) {
            toAppend.push(...domainQuestions['thunderbolt']);
        }
        else if (usbRegEx.test(matchedText)) {
            toAppend.push(...domainQuestions['usb']);
        }
        if (toAppend.length === 0) {
            return;
        }
        const savedCursor = textarea.selectionStart;
        if (this.appendedQuestions.length === 0) {
            textarea.value += '\n\n' + questionnaireBegin + '\n';
        }
        for (const question of toAppend) {
            if (this.appendedQuestions.includes(question)) {
                continue;
            }
            textarea.value += '* ' + question + ' \n';
            this.appendedQuestions.push(question);
        }
        // After appending text, the web engine automatically moves the cursor to
        // the end of the appended text, so we need to move the cursor back to where
        // the user was typing before.
        textarea.selectionEnd = savedCursor;
    }
    onContainerScroll(event) {
        showScrollingEffects(event, this);
    }
    getSearchResultCountForTesting() {
        return this.helpContentSearchResultCount;
    }
    getIsPopularContentForTesting() {
        return this.isPopularContentForTesting;
    }
    getNextQuerySeqNoForTesting() {
        return this.querySeqNo;
    }
    setNextQuerySeqNoForTesting(nextQuerySeqNo) {
        this.querySeqNo = nextQuerySeqNo;
    }
    getLastPostedQuerySeqNoForTesting() {
        return this.lastPostedQuerySeqNo;
    }
}
customElements.define(SearchPageElement.is, SearchPageElement);
