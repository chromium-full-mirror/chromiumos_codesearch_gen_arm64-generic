// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/ash/common/cr_elements/policy/cr_tooltip_icon.js';
import './file_attachment.js';
import './os_feedback_shared.css.js';
import { CrButtonElement } from 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import { CrCheckboxElement } from 'chrome://resources/ash/common/cr_elements/cr_checkbox/cr_checkbox.js';
import { CrDialogElement } from 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { strictQuery } from 'chrome://resources/ash/common/typescript_utils/strict_query.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { FEEDBACK_LEGAL_HELP_URL, FEEDBACK_PRIVACY_POLICY_URL, FEEDBACK_TERMS_OF_SERVICE_URL } from './feedback_constants.js';
import { FeedbackFlowState } from './feedback_flow.js';
import { showScrollingEffects } from './feedback_utils.js';
import { FileAttachmentElement } from './file_attachment.js';
import { getFeedbackServiceProvider } from './mojo_interface_provider.js';
import { FeedbackAppPreSubmitAction } from './os_feedback_ui.mojom-webui.js';
import { getTemplate } from './share_data_page.html.js';
/**
 * @fileoverview
 * 'share-data-page' is the second page of the feedback tool. It allows users to
 * choose what data to send with the feedback report.
 */
const ShareDataPageElementBase = I18nMixin(PolymerElement);
export class ShareDataPageElement extends ShareDataPageElementBase {
    static get is() {
        return 'share-data-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            feedbackContext: {
                type: Object,
                readOnly: false,
                notify: true,
                observer: ShareDataPageElement.prototype.onFeedbackContextChanged,
            },
            screenshotUrl: { type: String, readOnly: false, notify: true },
            shouldShowBluetoothCheckbox: { type: Boolean, readOnly: false, notify: true },
            shouldShowLinkCrossDeviceDogfoodFeedbackCheckbox: { type: Boolean, readOnly: false, notify: true },
            shouldShowAssistantCheckbox: { type: Boolean, readOnly: false, notify: true },
            shouldShowAutofillCheckbox: { type: Boolean, readOnly: false, notify: true },
        };
    }
    constructor() {
        super();
        this.feedbackServiceProvider = getFeedbackServiceProvider();
    }
    ready() {
        super.ready();
        this.setLinksInPrivacyNote();
        this.setSysInfoCheckboxAttributes();
        this.setAssistantLogsAttributes();
        this.setBluetoothLogsAttributes();
        this.setWifiDebugLogsAttributes();
        this.setLinkCrossDeviceDogfoodFeedbackAttributes();
        this.setAutofillAttributes();
        // Set the aria description works the best for screen reader.
        // It reads the description when the checkbox is focused, and when it is
        // checked and unchecked.
        strictQuery('#screenshotCheckbox', this.shadowRoot, CrCheckboxElement)
            .ariaDescription = this.i18n('attachScreenshotCheckboxAriaLabel');
        strictQuery('#imageButton', this.shadowRoot, HTMLButtonElement).ariaLabel =
            this.i18n('previewImageAriaLabel', strictQuery('#screenshotCheckLabel', this.shadowRoot, HTMLElement)
                .textContent ??
                '');
        // Set up event listener for email change to retarget |this| to be the
        // ShareDataPageElement's context.
        strictQuery('#userEmailDropDown', this.shadowRoot, HTMLSelectElement)
            .addEventListener('change', this.handleUserEmailDropDownChanged.bind(this));
    }
    hasEmail() {
        return (this.feedbackContext !== null && !!this.feedbackContext.email);
    }
    /**
     * If feedback app has been requested from settings search, we do not need to
     * collect system info and metrics data by default.
     */
    checkSysInfoAndMetrics() {
        if (!this.feedbackContext) {
            return true;
        }
        return !this.feedbackContext.fromSettingsSearch;
    }
    shouldShowPerformanceTraceCheckbox() {
        return (this.feedbackContext !== null && this.feedbackContext.traceId !== 0);
    }
    /** Focus on the screenshot checkbox when entering the page. */
    focusScreenshotCheckbox() {
        strictQuery('#screenshotCheckbox', this.shadowRoot, CrCheckboxElement)
            .focus();
    }
    hasScreenshot() {
        return !!this.screenshotUrl;
    }
    handleScreenshotClick() {
        strictQuery('#screenshotDialog', this.shadowRoot, HTMLDialogElement)
            .showModal();
        this.feedbackServiceProvider.recordPreSubmitAction(FeedbackAppPreSubmitAction.kViewedScreenshot);
    }
    handleScreenshotDialogCloseClick() {
        strictQuery('#screenshotDialog', this.shadowRoot, HTMLDialogElement)
            .close();
    }
    handleUserEmailDropDownChanged() {
        const email = strictQuery('#userEmailDropDown', this.shadowRoot, HTMLSelectElement)
            .value;
        const consentCheckbox = strictQuery('#userConsentCheckbox', this.shadowRoot, CrCheckboxElement);
        // Update UI and state of #userConsentCheckbox base on if report will be
        // anonymous.
        if (email === '') {
            consentCheckbox.disabled = true;
            consentCheckbox.checked = false;
            strictQuery('#userConsentLabel', this.shadowRoot, HTMLElement)
                .classList.add('disabled-input-text');
        }
        else {
            consentCheckbox.disabled = false;
            strictQuery('#userConsentLabel', this.shadowRoot, HTMLElement)
                .classList.remove('disabled-input-text');
        }
    }
    handleOpenMetricsDialog(e) {
        // The default behavior of clicking on an anchor tag
        // with href="#" is a scroll to the top of the page.
        // This link opens a dialog, so we want to prevent
        // this default behavior.
        e.preventDefault();
        this.feedbackServiceProvider.openMetricsDialog();
    }
    handleOpenSystemInfoDialog(e) {
        // The default behavior of clicking on an anchor tag
        // with href="#" is a scroll to the top of the page.
        // This link opens a dialog, so we want to prevent
        // this default behavior.
        e.preventDefault();
        this.feedbackServiceProvider.openSystemInfoDialog();
    }
    handleOpenAutofillMetadataDialog(e) {
        // The default behavior of clicking on an anchor tag
        // with href="#" is a scroll to the top of the page.
        // This link opens a dialog, so we want to prevent
        // this default behavior.
        e.preventDefault();
        this.feedbackServiceProvider.openAutofillDialog(this.feedbackContext.autofillMetadata || '');
    }
    handleOpenBluetoothLogsInfoDialog(e) {
        // The default behavior of clicking on an anchor tag
        // with href="#" is a scroll to the top of the page.
        // This link opens a dialog, so we want to prevent
        // this default behavior.
        e.preventDefault();
        strictQuery('#bluetoothDialog', this.shadowRoot, CrDialogElement)
            .showModal();
        strictQuery('#bluetoothDialogDoneButton', this.shadowRoot, CrButtonElement)
            .focus();
    }
    handleCloseBluetoothDialogClicked() {
        strictQuery('#bluetoothDialog', this.shadowRoot, CrDialogElement).close();
    }
    handleOpenWifiDebugLogsInfoDialog(e) {
        // The default behavior of clicking on an anchor tag
        // with href="#" is a scroll to the top of the page.
        // This link opens a dialog, so we want to prevent
        // this default behavior.
        e.preventDefault();
        strictQuery('#wifiDebugLogsDialog', this.shadowRoot, CrDialogElement)
            .showModal();
        strictQuery('#wifiDebugLogsDialogDoneButton', this.shadowRoot, CrButtonElement)
            .focus();
    }
    handleCloseWifiDebugLogsDialogClicked() {
        strictQuery('#wifiDebugLogsDialog', this.shadowRoot, CrDialogElement)
            .close();
    }
    handleOpenLinkCrossDeviceDogfoodFeedbackInfoDialog(e) {
        // The default behavior of clicking on an anchor tag
        // with href="#" is a scroll to the top of the page.
        // This link opens a dialog, so we want to prevent
        // this default behavior.
        e.preventDefault();
        strictQuery('#linkCrossDeviceDogfoodFeedbackDialog', this.shadowRoot, CrDialogElement)
            .showModal();
        strictQuery('#linkCrossDeviceDogfoodFeedbackDialogDoneButton', this.shadowRoot, CrButtonElement)
            .focus();
    }
    handleCloseLinkCrossDeviceDogfoodFeedbackDialogClicked() {
        strictQuery('#linkCrossDeviceDogfoodFeedbackDialog', this.shadowRoot, CrDialogElement)
            .close();
    }
    handleOpenAssistantLogsDialog(e) {
        // The default behavior of clicking on an anchor tag
        // with href="#" is a scroll to the top of the page.
        // This link opens a dialog, so we want to prevent
        // this default behavior.
        e.preventDefault();
        strictQuery('#assistantDialog', this.shadowRoot, CrDialogElement)
            .showModal();
        strictQuery('#assistantDialogDoneButton', this.shadowRoot, CrButtonElement)
            .focus();
    }
    handleCloseAssistantDialogClicked() {
        strictQuery('#assistantDialog', this.shadowRoot, CrDialogElement).close();
    }
    handleBackButtonClicked(e) {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('go-back-click', {
            composed: true,
            bubbles: true,
            detail: { currentState: FeedbackFlowState.SHARE_DATA },
        }));
    }
    handleSendButtonClicked(e) {
        strictQuery('#buttonSend', this.shadowRoot, CrButtonElement).disabled =
            true;
        e.stopPropagation();
        this.createReport().then(report => {
            this.dispatchEvent(new CustomEvent('continue-click', {
                composed: true,
                bubbles: true,
                detail: { currentState: FeedbackFlowState.SHARE_DATA, report: report },
            }));
        });
    }
    async createReport() {
        const report = ({
            feedbackContext: {
                assistantDebugInfoAllowed: false,
                fromSettingsSearch: false,
                isInternalAccount: false,
                wifiDebugLogsAllowed: false,
                traceId: 0,
                pageUrl: undefined,
                fromAssistant: false,
                fromAutofill: false,
                autofillMetadata: '{}',
                hasLinkedCrossDevicePhone: false,
                categoryTag: '',
                email: '',
                extraDiagnostics: '',
            },
            description: { data: [] },
            attachedFile: undefined,
            sendBluetoothLogs: false,
            sendWifiDebugLogs: false,
            includeAutofillMetadata: false,
            includeSystemLogsAndHistograms: strictQuery('#sysInfoCheckbox', this.shadowRoot, CrCheckboxElement)
                .checked,
            includeScreenshot: strictQuery('#screenshotCheckbox', this.shadowRoot, CrCheckboxElement)
                .checked &&
                !!strictQuery('#screenshotImage', this.shadowRoot, HTMLImageElement)
                    .src,
            contactUserConsentGranted: strictQuery('#userConsentCheckbox', this.shadowRoot, CrCheckboxElement)
                .checked,
        });
        const attachedFile = await strictQuery('file-attachment', this.shadowRoot, FileAttachmentElement)
            .getAttachedFile();
        if (attachedFile) {
            report.attachedFile = attachedFile;
        }
        const email = strictQuery('#userEmailDropDown', this.shadowRoot, HTMLSelectElement)
            .value;
        if (email) {
            report.feedbackContext.email = email;
        }
        // Ensure consent granted is false when email not provided.
        if (!email) {
            report.contactUserConsentGranted = false;
        }
        if (strictQuery('#pageUrlCheckbox', this.shadowRoot, CrCheckboxElement)
            .checked) {
            report.feedbackContext.pageUrl = {
                url: strictQuery('#pageUrlText', this.shadowRoot, HTMLElement)
                    .textContent.trim(),
            };
        }
        if (this.feedbackContext.extraDiagnostics &&
            strictQuery('#sysInfoCheckbox', this.shadowRoot, CrCheckboxElement)
                .checked) {
            report.feedbackContext.extraDiagnostics =
                this.feedbackContext.extraDiagnostics;
        }
        if (this.feedbackContext.categoryTag) {
            report.feedbackContext.categoryTag = this.feedbackContext.categoryTag;
        }
        const isLinkCrossDeviceIssue = !strictQuery('#linkCrossDeviceDogfoodFeedbackCheckboxContainer', this.shadowRoot, HTMLElement)
            .hidden &&
            strictQuery('#linkCrossDeviceDogfoodFeedbackCheckbox', this.shadowRoot, CrCheckboxElement)
                .checked;
        if (!strictQuery('#bluetoothCheckboxContainer', this.shadowRoot, HTMLElement)
            .hidden &&
            strictQuery('#bluetoothLogsCheckbox', this.shadowRoot, CrCheckboxElement)
                .checked) {
            report.feedbackContext.categoryTag = isLinkCrossDeviceIssue ?
                'linkCrossDeviceDogfoodFeedbackWithBluetoothLogs' :
                'BluetoothReportWithLogs';
            report.sendBluetoothLogs = true;
        }
        else {
            if (isLinkCrossDeviceIssue) {
                report.feedbackContext.categoryTag =
                    'linkCrossDeviceDogfoodFeedbackWithoutBluetoothLogs';
            }
            report.sendBluetoothLogs = false;
        }
        if (this.feedbackContext.fromAutofill &&
            !strictQuery('#autofillCheckboxContainer', this.shadowRoot, HTMLElement)
                .hidden &&
            strictQuery('#autofillCheckbox', this.shadowRoot, CrCheckboxElement)
                .checked) {
            report.includeAutofillMetadata = true;
            report.feedbackContext.autofillMetadata =
                this.feedbackContext.autofillMetadata;
        }
        else {
            report.includeAutofillMetadata = false;
            report.feedbackContext.autofillMetadata = '';
        }
        report.sendWifiDebugLogs = this.shouldShowWifiDebugLogsCheckbox &&
            strictQuery('#wifiDebugLogsCheckbox', this.shadowRoot, CrCheckboxElement)
                .checked;
        if (strictQuery('#performanceTraceCheckbox', this.shadowRoot, CrCheckboxElement)
            .checked) {
            report.feedbackContext.traceId = this.feedbackContext.traceId;
        }
        else {
            report.feedbackContext.traceId = 0;
        }
        report.feedbackContext.fromAssistant = this.feedbackContext.fromAssistant;
        report.feedbackContext.assistantDebugInfoAllowed =
            this.feedbackContext.fromAssistant &&
                !strictQuery('#assistantLogsContainer', this.shadowRoot, HTMLElement)
                    .hidden &&
                strictQuery('#assiatantLogsCheckbox', this.shadowRoot, CrCheckboxElement)
                    .checked;
        return report;
    }
    /**
     * When starting a new report, the send report button should be
     * re-enabled.
     */
    reEnableSendReportButton() {
        strictQuery('#buttonSend', this.shadowRoot, CrButtonElement).disabled =
            false;
    }
    /**
     * Make the link clickable and open it in a new window
     */
    openLinkInNewWindow(linkSelector, linkUrl) {
        const linkElement = this.shadowRoot.querySelector(linkSelector);
        if (linkElement) {
            linkElement.setAttribute('href', linkUrl);
            linkElement.setAttribute('target', '_blank');
        }
    }
    /**
     * When the feedback app is launched from OOBE or the login screen, the
     * categoryTag is set to "Login".
     */
    isUserLoggedIn() {
        return this.feedbackContext?.categoryTag !== 'Login';
    }
    getAttachFilesLabel() {
        return this.isUserLoggedIn() ? this.i18n('attachFilesLabelLoggedIn') :
            this.i18n('attachFilesLabelLoggedOut');
    }
    getSysInfoCheckboxLabel() {
        return this.i18nAdvanced('includeSystemInfoAndMetricsCheckboxLabel', { attrs: ['id'] });
    }
    getPerformanceTraceCheckboxLabel() {
        return this.i18nAdvanced('includePerformanceTraceCheckboxLabel', { attrs: ['id'] });
    }
    getAssistantLogsCheckboxLabel() {
        return this.i18nAdvanced('includeAssistantLogsCheckboxLabel', { attrs: ['id'] });
    }
    getAutofillCheckboxLabel() {
        return this.i18nAdvanced('includeAutofillCheckboxLabel', { attrs: ['id'] });
    }
    getBluetoothLogsCheckboxLabel() {
        return this.i18nAdvanced('bluetoothLogsInfo', { attrs: ['id'] });
    }
    getWifiDebugLogsCheckboxLabel() {
        return this.i18nAdvanced('wifiDebugLogsInfo', { attrs: ['id'] });
    }
    getLinkCrossDeviceDogfoodFeedbackCheckboxLabel() {
        return this.i18nAdvanced('linkCrossDeviceDogfoodFeedbackInfo', { attrs: ['id'] });
    }
    getPrivacyNote() {
        if (this.isUserLoggedIn()) {
            return this.i18nAdvanced('privacyNote', { attrs: ['id'] });
        }
        else {
            return this.i18nAdvanced('privacyNoteLoggedOut', {
                substitutions: [
                    FEEDBACK_PRIVACY_POLICY_URL,
                    FEEDBACK_TERMS_OF_SERVICE_URL,
                    FEEDBACK_LEGAL_HELP_URL,
                ],
            });
        }
    }
    setLinksInPrivacyNote() {
        this.openLinkInNewWindow('#legalHelpPageUrl', FEEDBACK_LEGAL_HELP_URL);
        this.openLinkInNewWindow('#privacyPolicyUrl', FEEDBACK_PRIVACY_POLICY_URL);
        this.openLinkInNewWindow('#termsOfServiceUrl', FEEDBACK_TERMS_OF_SERVICE_URL);
    }
    setSysInfoCheckboxAttributes() {
        const sysInfoLink = strictQuery('#sysInfoLink', this.shadowRoot, HTMLAnchorElement);
        // Setting href causes <a> tag to display as link.
        sysInfoLink.setAttribute('href', '#');
        sysInfoLink.addEventListener('click', (e) => {
            this.handleOpenSystemInfoDialog(e);
            this.feedbackServiceProvider.recordPreSubmitAction(FeedbackAppPreSubmitAction.kViewedSystemAndAppInfo);
        });
        const histogramsLink = strictQuery('#histogramsLink', this.shadowRoot, HTMLAnchorElement);
        histogramsLink.setAttribute('href', '#');
        histogramsLink.addEventListener('click', (e) => {
            this.handleOpenMetricsDialog(e);
            this.feedbackServiceProvider.recordPreSubmitAction(FeedbackAppPreSubmitAction.kViewedMetrics);
        });
    }
    setAutofillAttributes() {
        const assistantLogsLink = strictQuery('#autofillMetadataUrl', this.shadowRoot, HTMLAnchorElement);
        // Setting href causes <a> tag to display as link.
        assistantLogsLink.setAttribute('href', '#');
        assistantLogsLink.addEventListener('click', (e) => {
            this.handleOpenAutofillMetadataDialog(e);
            this.feedbackServiceProvider.recordPreSubmitAction(FeedbackAppPreSubmitAction.kViewedAutofillMetadata);
        });
    }
    setAssistantLogsAttributes() {
        const assistantLogsLink = strictQuery('#assistantLogsLink', this.shadowRoot, HTMLAnchorElement);
        // Setting href causes <a> tag to display as link.
        assistantLogsLink.setAttribute('href', '#');
        assistantLogsLink.addEventListener('click', (e) => void this.handleOpenAssistantLogsDialog(e));
    }
    setBluetoothLogsAttributes() {
        const bluetoothLogsLink = strictQuery('#bluetoothLogsInfoLink', this.shadowRoot, HTMLAnchorElement);
        // Setting href causes <a> tag to display as link.
        bluetoothLogsLink.setAttribute('href', '#');
        bluetoothLogsLink.addEventListener('click', (e) => void this.handleOpenBluetoothLogsInfoDialog(e));
    }
    setWifiDebugLogsAttributes() {
        const wifiDebugLogsLink = strictQuery('#wifiDebugLogsInfoLink', this.shadowRoot, HTMLAnchorElement);
        // Setting href causes <a> tag to display as link.
        wifiDebugLogsLink.setAttribute('href', '#');
        wifiDebugLogsLink.addEventListener('click', (e) => void this.handleOpenWifiDebugLogsInfoDialog(e));
    }
    setLinkCrossDeviceDogfoodFeedbackAttributes() {
        const linkCrossDeviceDogfoodFeedbackLink = strictQuery('#linkCrossDeviceDogfoodFeedbackInfoLink', this.shadowRoot, HTMLAnchorElement);
        // Setting href causes <a> tag to display as link.
        linkCrossDeviceDogfoodFeedbackLink.setAttribute('href', '#');
        linkCrossDeviceDogfoodFeedbackLink.addEventListener('click', (e) => void this.handleOpenLinkCrossDeviceDogfoodFeedbackInfoDialog(e));
    }
    onFeedbackContextChanged() {
        // We can only set up the hyperlink for the performance trace checkbox once
        // we receive the trace id.
        if (this.feedbackContext !== null && this.feedbackContext.traceId !== 0) {
            this.openLinkInNewWindow('#performanceTraceLink', `chrome://slow_trace/tracing.zip#${this.feedbackContext.traceId}`);
        }
        // Update the privacy note when the feedback context changed.
        this.setLinksInPrivacyNote();
    }
    onContainerScroll(event) {
        showScrollingEffects(event, this);
    }
}
customElements.define(ShareDataPageElement.is, ShareDataPageElement);
