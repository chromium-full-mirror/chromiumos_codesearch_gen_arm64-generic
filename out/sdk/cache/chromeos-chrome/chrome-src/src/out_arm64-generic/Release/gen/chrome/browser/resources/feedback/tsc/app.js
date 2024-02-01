// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../../strings.m.js';
import './feedback_shared_styles.css.js';
// 
import './js/jelly_colors.js';
// 
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './app.html.js';
import { FeedbackBrowserProxyImpl } from './js/feedback_browser_proxy.js';
import { BT_DEVICE_REGEX, BT_REGEX, CANNOT_CONNECT_REGEX, CELLULAR_REGEX, DISPLAY_REGEX, FAST_PAIR_REGEX, NEARBY_SHARE_REGEX, SMART_LOCK_REGEX, TETHER_REGEX, THUNDERBOLT_REGEX, USB_REGEX, WIFI_REGEX } from './js/feedback_regexes.js';
import { FEEDBACK_LANDING_PAGE, FEEDBACK_LANDING_PAGE_TECHSTOP, FEEDBACK_LEGAL_HELP_URL, FEEDBACK_PRIVACY_POLICY_URL, FEEDBACK_TERM_OF_SERVICE_URL, openUrlInAppWindow } from './js/feedback_util.js';
import { domainQuestions, questionnaireBegin, questionnaireNotification } from './js/questionnaire.js';
import { takeScreenshot } from './js/take_screenshot.js';
const MAX_ATTACH_FILE_SIZE = 3 * 1024 * 1024;
const MAX_SCREENSHOT_WIDTH = 100;
export class FeedbackAppElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.formOpenTime = new Date().getTime();
        this.attachedFileBlob = null;
        /**
         * Which questions have been appended to the issue description text area.
         */
        this.appendedQuestions = {};
        /**
         * The object will be manipulated by sendReport().
         */
        this.feedbackInfo = {
            assistantDebugInfoAllowed: false,
            attachedFile: undefined,
            attachedFileBlobUuid: undefined,
            autofillMetadata: '',
            categoryTag: undefined,
            description: '...',
            descriptionPlaceholder: undefined,
            email: undefined,
            flow: chrome.feedbackPrivate.FeedbackFlow.REGULAR,
            fromAssistant: false,
            fromAutofill: false,
            includeBluetoothLogs: false,
            pageUrl: undefined,
            sendHistograms: undefined,
            systemInformation: [],
            useSystemWindowFrame: false,
            isOffensiveOrUnsafe: undefined,
            aiMetadata: undefined,
        };
    }
    static get is() {
        return 'feedback-app';
    }
    static get template() {
        return getTemplate();
    }
    /**
     * Initializes our page.
     * Flow:
     * .) DOMContent Loaded        -> . Request feedbackInfo object
     *                                . Setup page event handlers
     * .) Feedback Object Received -> . take screenshot
     *                                . request email
     *                                . request System info
     *                                . request i18n strings
     * .) Screenshot taken         -> . Show Feedback window.
     */
    async connectedCallback() {
        super.connectedCallback();
        // Initialize `browserProxy` only after tests had a chance to do setup
        // steps, one of which is to replace the prod proxy with a test version.
        // this.browserProxy = FeedbackBrowserProxyImpl.getInstance();
        const dialogArgs = FeedbackBrowserProxyImpl.getInstance().getDialogArguments();
        if (dialogArgs) {
            this.feedbackInfo = JSON.parse(dialogArgs);
        }
        await this.applyData(this.feedbackInfo);
        // Setup our event handlers.
        this.getRequiredElement('#attach-file')
            .addEventListener('change', (e) => this.onFileSelected(e));
        this.getRequiredElement('#attach-file')
            .addEventListener('click', this.onOpenFileDialog.bind(this));
        this.getRequiredElement('#send-report-button').onclick =
            this.sendReport.bind(this);
        this.getRequiredElement('#cancel-button').onclick = (e) => this.cancel(e);
        this.getRequiredElement('#remove-attached-file').onclick =
            this.clearAttachedFile.bind(this);
        // 
        this.getRequiredElement('#performance-info-checkbox')
            .addEventListener('change', this.performanceFeedbackChanged.bind(this));
        // 
        // Dispatch event used by tests.
        this.dispatchEvent(new CustomEvent('ready-for-testing'));
    }
    /**
     * Apply updates based on the received `FeedbackInfo` object.
     * @return A promise signaling that all UI updates have finished.
     */
    applyData(feedbackInfo) {
        if (feedbackInfo.includeBluetoothLogs) {
            assert(feedbackInfo.flow ===
                chrome.feedbackPrivate.FeedbackFlow.GOOGLE_INTERNAL);
            this.getRequiredElement('#description-text')
                .addEventListener('input', (e) => this.checkForSendBluetoothLogs(e));
        }
        if (feedbackInfo.showQuestionnaire) {
            assert(feedbackInfo.flow ===
                chrome.feedbackPrivate.FeedbackFlow.GOOGLE_INTERNAL);
            this.getRequiredElement('#description-text')
                .addEventListener('input', (e) => this.checkForShowQuestionnaire(e));
        }
        // 
        if (this.shadowRoot.querySelector('#assistant-checkbox-container') != null &&
            feedbackInfo.flow ===
                chrome.feedbackPrivate.FeedbackFlow.GOOGLE_INTERNAL &&
            feedbackInfo.fromAssistant) {
            this.getRequiredElement('#assistant-checkbox-container').hidden = false;
        }
        // 
        if (this.shadowRoot.querySelector('#autofill-checkbox-container') != null &&
            feedbackInfo.flow ===
                chrome.feedbackPrivate.FeedbackFlow.GOOGLE_INTERNAL &&
            feedbackInfo.fromAutofill) {
            this.getRequiredElement('#autofill-checkbox-container').hidden = false;
        }
        this.getRequiredElement('#description-text').textContent =
            feedbackInfo.description;
        if (feedbackInfo.descriptionPlaceholder) {
            this.getRequiredElement('#description-text')
                .placeholder = feedbackInfo.descriptionPlaceholder;
        }
        if (feedbackInfo.pageUrl) {
            this.getRequiredElement('#page-url-text').value =
                feedbackInfo.pageUrl;
        }
        const isAiFlow = feedbackInfo.flow === chrome.feedbackPrivate.FeedbackFlow.AI;
        if (isAiFlow) {
            this.getRequiredElement('#free-form-text').textContent =
                loadTimeData.getString('freeFormTextAi');
            this.getRequiredElement('#offensive-container').hidden = false;
            this.getRequiredElement('#log-id-container').hidden = false;
        }
        const whenScreenshotUpdated = takeScreenshot().then((screenshotCanvas) => {
            // We've taken our screenshot, show the feedback page without any
            // further delay.
            window.requestAnimationFrame(this.resizeAppWindow.bind(this));
            FeedbackBrowserProxyImpl.getInstance().showDialog();
            // Allow feedback to be sent even if the screenshot failed.
            if (!screenshotCanvas) {
                const checkbox = this.getRequiredElement('#screenshot-checkbox');
                checkbox.disabled = true;
                checkbox.checked = false;
                return Promise.resolve();
            }
            return new Promise((resolve) => {
                screenshotCanvas.toBlob((blob) => {
                    const image = this.getRequiredElement('#screenshot-image');
                    image.src = URL.createObjectURL(blob);
                    // Only set the alt text when the src url is available, otherwise we'd
                    // get a broken image picture instead. crbug.com/773985.
                    image.alt = 'screenshot';
                    image.classList.toggle('wide-screen', image.width > MAX_SCREENSHOT_WIDTH);
                    feedbackInfo.screenshot = blob;
                    resolve();
                });
            });
        });
        const whenEmailUpdated = isAiFlow ?
            Promise.resolve() :
            FeedbackBrowserProxyImpl.getInstance().getUserEmail().then((email) => {
                // Never add an empty option.
                if (!email) {
                    return;
                }
                const optionElement = document.createElement('option');
                optionElement.value = email;
                optionElement.text = email;
                optionElement.selected = true;
                // Make sure the "Report anonymously" option comes last.
                this.getRequiredElement('#user-email-drop-down')
                    .insertBefore(optionElement, this.getRequiredElement('#anonymous-user-option'));
                // Now we can unhide the user email section:
                this.getRequiredElement('#user-email').hidden = false;
                // Only show email consent checkbox when an email address exists.
                this.getRequiredElement('#consent-container').hidden = false;
            });
        // An extension called us with an attached file.
        if (feedbackInfo.attachedFile) {
            this.getRequiredElement('#attached-filename-text').textContent =
                feedbackInfo.attachedFile.name;
            this.attachedFileBlob = feedbackInfo.attachedFile.data;
            this.getRequiredElement('#custom-file-container').hidden = false;
            this.getRequiredElement('#attach-file').hidden = true;
        }
        // No URL, file attachment for login screen feedback.
        if (feedbackInfo.flow === chrome.feedbackPrivate.FeedbackFlow.LOGIN) {
            this.getRequiredElement('#page-url').hidden = true;
            this.getRequiredElement('#attach-file-container').hidden = true;
            this.getRequiredElement('#attach-file-note').hidden = true;
        }
        // 
        if (feedbackInfo.traceId &&
            (this.shadowRoot.querySelector('#performance-info-area'))) {
            this.getRequiredElement('#performance-info-area').hidden = false;
            this.getRequiredElement('#performance-info-checkbox')
                .checked = true;
            this.performanceFeedbackChanged();
            this.getRequiredElement('#performance-info-link')
                .onclick = this.openSlowTraceWindow;
        }
        // 
        const autofillMetadataUrlElement = this.shadowRoot.querySelector('#autofill-metadata-url');
        if (autofillMetadataUrlElement) {
            // Opens a new window showing the full anonymized autofill metadata.
            autofillMetadataUrlElement.onclick = (e) => {
                e.preventDefault();
                FeedbackBrowserProxyImpl.getInstance().showAutofillMetadataInfo(feedbackInfo.autofillMetadata);
            };
            autofillMetadataUrlElement.onauxclick = (e) => {
                e.preventDefault();
            };
        }
        const sysInfoUrlElement = this.shadowRoot.querySelector('#sys-info-url');
        if (sysInfoUrlElement) {
            // Opens a new window showing the full anonymized system+app
            // information.
            sysInfoUrlElement.onclick = (e) => {
                e.preventDefault();
                FeedbackBrowserProxyImpl.getInstance().showSystemInfo();
            };
            sysInfoUrlElement.onauxclick = (e) => {
                e.preventDefault();
            };
        }
        const histogramUrlElement = this.shadowRoot.querySelector('#histograms-url');
        if (histogramUrlElement) {
            histogramUrlElement.onclick = (e) => {
                e.preventDefault();
                FeedbackBrowserProxyImpl.getInstance().showMetrics();
            };
            histogramUrlElement.onauxclick = (e) => {
                e.preventDefault();
            };
        }
        // The following URLs don't open on login screen, so hide them.
        // TODO(crbug.com/1116383): Find a solution to display them properly.
        // Update: the bluetooth and assistant logs links will work on login
        // screen now. But to limit the scope of this CL, they are still hidden.
        if (feedbackInfo.flow !== chrome.feedbackPrivate.FeedbackFlow.LOGIN) {
            const legalHelpPageUrlElement = this.shadowRoot.querySelector('#legal-help-page-url');
            if (legalHelpPageUrlElement) {
                this.setupLinkHandlers(legalHelpPageUrlElement, FEEDBACK_LEGAL_HELP_URL, false /* useAppWindow */);
            }
            const privacyPolicyUrlElement = this.shadowRoot.querySelector('#privacy-policy-url');
            if (privacyPolicyUrlElement) {
                this.setupLinkHandlers(privacyPolicyUrlElement, FEEDBACK_PRIVACY_POLICY_URL, false /* useAppWindow */);
            }
            const termsOfServiceUrlElement = this.shadowRoot.querySelector('#terms-of-service-url');
            if (termsOfServiceUrlElement) {
                this.setupLinkHandlers(termsOfServiceUrlElement, FEEDBACK_TERM_OF_SERVICE_URL, false /* useAppWindow */);
            }
            // 
            const bluetoothLogsInfoLinkElement = this.shadowRoot.querySelector('#bluetooth-logs-info-link');
            if (bluetoothLogsInfoLinkElement) {
                bluetoothLogsInfoLinkElement.onclick = (e) => {
                    e.preventDefault();
                    FeedbackBrowserProxyImpl.getInstance().showBluetoothLogsInfo();
                    bluetoothLogsInfoLinkElement.onauxclick = (e) => {
                        e.preventDefault();
                    };
                };
            }
            const assistantLogsInfoLinkElement = this.shadowRoot.querySelector('#assistant-logs-info-link');
            if (assistantLogsInfoLinkElement) {
                assistantLogsInfoLinkElement.onclick = (e) => {
                    e.preventDefault();
                    FeedbackBrowserProxyImpl.getInstance().showAssistantLogsInfo();
                    assistantLogsInfoLinkElement.onauxclick = (e) => {
                        e.preventDefault();
                    };
                };
            }
            // 
        }
        // Make sure our focus starts on the description field.
        this.getRequiredElement('#description-text').focus();
        return Promise.all([whenScreenshotUpdated, whenEmailUpdated])
            .then(() => { });
    }
    async sendFeedbackReport(useSystemInfo) {
        const ID = Math.round(Date.now() / 1000);
        const FLOW = this.feedbackInfo.flow;
        const result = await FeedbackBrowserProxyImpl.getInstance().sendFeedback(this.feedbackInfo, useSystemInfo, this.formOpenTime);
        if (result.status === chrome.feedbackPrivate.Status.SUCCESS) {
            if (FLOW !== chrome.feedbackPrivate.FeedbackFlow.LOGIN &&
                result.landingPageType !==
                    chrome.feedbackPrivate.LandingPageType.NO_LANDING_PAGE) {
                const landingPage = result.landingPageType ===
                    chrome.feedbackPrivate.LandingPageType.NORMAL ?
                    FEEDBACK_LANDING_PAGE :
                    FEEDBACK_LANDING_PAGE_TECHSTOP;
                OpenWindowProxyImpl.getInstance().openUrl(landingPage);
            }
        }
        else {
            console.warn('Feedback: Report for request with ID ' + ID +
                ' will be sent later.');
        }
        this.scheduleWindowClose();
    }
    /**
     * Reads the selected file when the user selects a file.
     * @param fileSelectedEvent The onChanged event for the file input box.
     */
    onFileSelected(fileSelectedEvent) {
        // 
        // This is needed on CrOS. Otherwise, the feedback window will stay behind
        // the Chrome window.
        FeedbackBrowserProxyImpl.getInstance().showDialog();
        // 
        const file = fileSelectedEvent.target.files[0];
        if (!file) {
            // User canceled file selection.
            this.attachedFileBlob = null;
            return;
        }
        if (file.size > MAX_ATTACH_FILE_SIZE) {
            this.getRequiredElement('#attach-error').hidden = false;
            // Clear our selected file.
            this.getRequiredElement('#attach-file').value = '';
            this.attachedFileBlob = null;
            return;
        }
        this.attachedFileBlob = file.slice();
    }
    /**
     * Called when user opens the file dialog. Hide 'attach-error' before file
     * dialog is open to prevent a11y bug https://crbug.com/1020047
     */
    onOpenFileDialog() {
        this.getRequiredElement('#attach-error').hidden = true;
    }
    /**
     * Clears the file that was attached to the report with the initial request.
     * Instead we will now show the attach file button in case the user wants to
     * attach another file.
     */
    clearAttachedFile() {
        this.getRequiredElement('#custom-file-container').hidden = true;
        this.attachedFileBlob = null;
        this.feedbackInfo.attachedFile = undefined;
        this.getRequiredElement('#attach-file').hidden = false;
    }
    /**
     * Sets up the event handlers for the given |anchorElement|.
     * @param anchorElement The <a> html element.
     * @param url The destination URL for the link.
     * @param useAppWindow true if the URL should be opened inside a new App
     *     Window, false if it should be opened in a new tab.
     */
    setupLinkHandlers(anchorElement, url, useAppWindow) {
        anchorElement.onclick = (e) => {
            e.preventDefault();
            if (useAppWindow) {
                openUrlInAppWindow(url);
            }
            else {
                window.open(url, '_blank');
            }
        };
        anchorElement.onauxclick = (e) => {
            e.preventDefault();
        };
    }
    // 
    /**
     * Opens a new window with chrome://slow_trace, downloading performance data.
     */
    openSlowTraceWindow() {
        window.open('chrome://slow_trace/tracing.zip#' + this.feedbackInfo.traceId);
    }
    // 
    /**
     * Checks if any keywords related to bluetooth have been typed. If they are,
     * we show the bluetooth logs option, otherwise hide it.
     * @param inputEvent The input event for the description textarea.
     */
    checkForSendBluetoothLogs(inputEvent) {
        const value = inputEvent.target.value;
        const isRelatedToBluetooth = BT_REGEX.test(value) ||
            CANNOT_CONNECT_REGEX.test(value) || TETHER_REGEX.test(value) ||
            SMART_LOCK_REGEX.test(value) || NEARBY_SHARE_REGEX.test(value) ||
            FAST_PAIR_REGEX.test(value) || BT_DEVICE_REGEX.test(value);
        this.getRequiredElement('#bluetooth-checkbox-container').hidden =
            !isRelatedToBluetooth;
    }
    /**
     * Checks if any keywords have associated questionnaire in a domain. If so,
     * we append the questionnaire in
     * getRequiredElement('description-text').
     * @param inputEvent The input event for the description textarea.
     */
    checkForShowQuestionnaire(inputEvent) {
        const toAppend = [];
        // Match user-entered description before the questionnaire to reduce false
        // positives due to matching the questionnaire questions and answers.
        const value = inputEvent.target.value;
        const questionnaireBeginPos = value.indexOf(questionnaireBegin);
        const matchedText = questionnaireBeginPos >= 0 ?
            value.substring(0, questionnaireBeginPos) :
            value;
        if (BT_REGEX.test(matchedText)) {
            toAppend.push(...domainQuestions['bluetooth']);
        }
        if (WIFI_REGEX.test(matchedText)) {
            toAppend.push(...domainQuestions['wifi']);
        }
        if (CELLULAR_REGEX.test(matchedText)) {
            toAppend.push(...domainQuestions['cellular']);
        }
        if (DISPLAY_REGEX.test(matchedText)) {
            toAppend.push(...domainQuestions['display']);
        }
        if (THUNDERBOLT_REGEX.test(matchedText)) {
            toAppend.push(...domainQuestions['thunderbolt']);
        }
        else if (USB_REGEX.test(matchedText)) {
            toAppend.push(...domainQuestions['usb']);
        }
        if (toAppend.length === 0) {
            return;
        }
        const textarea = this.getRequiredElement('#description-text');
        const savedCursor = textarea.selectionStart;
        if (Object.keys(this.appendedQuestions).length === 0) {
            textarea.value += '\n\n' + questionnaireBegin + '\n';
            this.getRequiredElement('#questionnaire-notification').textContent =
                questionnaireNotification;
        }
        for (const question of toAppend) {
            if (question in this.appendedQuestions) {
                continue;
            }
            textarea.value += '* ' + question + ' \n';
            this.appendedQuestions[question] = true;
        }
        // After appending text, the web engine automatically moves the cursor to
        // the end of the appended text, so we need to move the cursor back to where
        // the user was typing before.
        textarea.selectionEnd = savedCursor;
    }
    /**
     * Updates the description-text box based on whether it was valid.
     * If invalid, indicate an error to the user. If valid, remove indication of
     * the error.
     */
    updateDescription(wasValid) {
        // Set visibility of the alert text for users who don't use a screen
        // reader.
        this.getRequiredElement('#description-empty-error').hidden = wasValid;
        // Change the textarea's aria-labelled by to ensure the screen reader does
        // (or doesn't) read the error, as appropriate.
        // If it does read the error, it should do so _before_ it reads the normal
        // description.
        const description = this.getRequiredElement('#description-text');
        description.setAttribute('aria-labelledby', (wasValid ? '' : 'description-empty-error ') + 'free-form-text');
        // Indicate whether input is valid.
        description.setAttribute('aria-invalid', String(!wasValid));
        if (!wasValid) {
            // Return focus to field so user can correct error.
            description.focus();
        }
        // We may have added or removed a line of text, so make sure the app window
        // is the right size.
        this.resizeAppWindow();
    }
    /**
     * Sends the report; after the report is sent, we need to be redirected to
     * the landing page, but we shouldn't be able to navigate back, hence
     * we open the landing page in a new tab and sendReport closes this tab.
     * @return Whether the report was sent.
     */
    sendReport() {
        const textarea = this.getRequiredElement('#description-text');
        if (textarea.value.length === 0) {
            this.updateDescription(false);
            return false;
        }
        // This isn't strictly necessary, since if we get past this point we'll
        // succeed, but for future-compatibility (and in case we later add more
        // failure cases after this), re-hide the alert and reset the aria label.
        this.updateDescription(true);
        // Prevent double clicking from sending additional reports.
        this.getRequiredElement('#send-report-button').disabled =
            true;
        if (!this.feedbackInfo.attachedFile && this.attachedFileBlob) {
            this.feedbackInfo.attachedFile = {
                name: this.getRequiredElement('#attach-file').value,
                data: this.attachedFileBlob,
            };
        }
        const consentCheckboxValue = this.getRequiredElement('#consent-checkbox').checked;
        this.feedbackInfo.systemInformation = [
            {
                key: 'feedbackUserCtlConsent',
                value: String(consentCheckboxValue),
            },
        ];
        if (this.feedbackInfo.flow === chrome.feedbackPrivate.FeedbackFlow.AI) {
            this.feedbackInfo.isOffensiveOrUnsafe =
                this.getRequiredElement('#offensive-checkbox')
                    .checked;
            if (!this.getRequiredElement('#log-id-checkbox')
                .checked) {
                this.feedbackInfo.aiMetadata = undefined;
            }
        }
        this.feedbackInfo.description = textarea.value;
        this.feedbackInfo.pageUrl =
            this.getRequiredElement('#page-url-text').value;
        this.feedbackInfo.email =
            this.getRequiredElement('#user-email-drop-down')
                .value;
        let useSystemInfo = false;
        let useHistograms = false;
        const checkbox = this.shadowRoot.querySelector('#sys-info-checkbox');
        if (checkbox != null && checkbox.checked) {
            // Send histograms along with system info.
            useHistograms = true;
            useSystemInfo = true;
        }
        const autofillCheckbox = this.shadowRoot.querySelector('#autofill-metadata-checkbox');
        if (autofillCheckbox != null && autofillCheckbox.checked &&
            !this.getRequiredElement('#autofill-checkbox-container').hidden) {
            this.feedbackInfo.sendAutofillMetadata = true;
        }
        // 
        const assistantCheckbox = this.shadowRoot.querySelector('#assistant-info-checkbox');
        if (assistantCheckbox != null && assistantCheckbox.checked &&
            !this.getRequiredElement('#assistant-checkbox-container').hidden) {
            // User consent to link Assistant debug info on Assistant server.
            this.feedbackInfo.assistantDebugInfoAllowed = true;
        }
        const bluetoothCheckbox = this.shadowRoot.querySelector('#bluetooth-logs-checkbox');
        if (bluetoothCheckbox != null && bluetoothCheckbox.checked &&
            !this.getRequiredElement('#bluetooth-checkbox-container').hidden) {
            this.feedbackInfo.sendBluetoothLogs = true;
            this.feedbackInfo.categoryTag = 'BluetoothReportWithLogs';
        }
        const performanceCheckbox = this.shadowRoot.querySelector('#performance-info-checkbox');
        if (performanceCheckbox == null || !performanceCheckbox.checked) {
            this.feedbackInfo.traceId = undefined;
        }
        // 
        this.feedbackInfo.sendHistograms = useHistograms;
        if (this.getRequiredElement('#screenshot-checkbox')
            .checked) {
            // The user is okay with sending the screenshot and tab titles.
            this.feedbackInfo.sendTabTitles = true;
        }
        else {
            // The user doesn't want to send the screenshot, so clear it.
            this.feedbackInfo.screenshot = undefined;
        }
        let productId = parseInt('' + this.feedbackInfo.productId, 10);
        if (isNaN(productId)) {
            // For apps that still use a string value as the |productId|, we must
            // clear that value since the API uses an integer value, and a conflict in
            // data types will cause the report to fail to be sent.
            productId = undefined;
        }
        this.feedbackInfo.productId = productId;
        // Request sending the report, show the landing page (if allowed)
        this.sendFeedbackReport(useSystemInfo);
        return true;
    }
    /**
     * Click listener for the cancel button.
     */
    cancel(e) {
        e.preventDefault();
        this.scheduleWindowClose();
    }
    // 
    /**
     * Update the page when performance feedback state is changed.
     */
    performanceFeedbackChanged() {
        const screenshotCheckbox = this.getRequiredElement('#screenshot-checkbox');
        const fileInput = this.getRequiredElement('#attach-file');
        if (this.getRequiredElement('#performance-info-checkbox')
            .checked) {
            fileInput.disabled = true;
            fileInput.checked = false;
            screenshotCheckbox.disabled = true;
            screenshotCheckbox.checked = false;
        }
        else {
            fileInput.disabled = false;
            screenshotCheckbox.disabled = false;
        }
    }
    // 
    resizeAppWindow() {
        // TODO(crbug.com/1167223): The UI is now controlled by a WebDialog delegate
        // which is set to not resizable for now. If needed, a message handler can
        // be added to respond to resize request.
    }
    /**
     * Close the window after 100ms delay.
     */
    scheduleWindowClose() {
        setTimeout(() => FeedbackBrowserProxyImpl.getInstance().closeDialog(), 100);
    }
    /**
     * TODO(crbug.com/1509032): A helper function in favor of converting feedback
     * UI from non-web component HTML to PolymerElement. It's better to be
     * replaced by polymer's $ helper dictionary.
     */
    getRequiredElement(query) {
        const el = this.shadowRoot.querySelector(query);
        assert(el);
        assert(el instanceof HTMLElement);
        return el;
    }
}
customElements.define(FeedbackAppElement.is, FeedbackAppElement);
