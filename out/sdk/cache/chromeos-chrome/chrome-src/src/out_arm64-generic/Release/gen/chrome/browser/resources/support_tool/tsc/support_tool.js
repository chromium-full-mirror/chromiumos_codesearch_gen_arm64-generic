// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/polymer/v3_0/iron-pages/iron-pages.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import './data_collectors.js';
import './issue_details.js';
import './spinner_page.js';
import './pii_selection.js';
import './data_export_done.js';
import './support_tool_shared.css.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { getTemplate } from './support_tool.html.js';
export var SupportToolPageIndex;
(function (SupportToolPageIndex) {
    SupportToolPageIndex[SupportToolPageIndex["ISSUE_DETAILS"] = 0] = "ISSUE_DETAILS";
    SupportToolPageIndex[SupportToolPageIndex["DATA_COLLECTOR_SELECTION"] = 1] = "DATA_COLLECTOR_SELECTION";
    SupportToolPageIndex[SupportToolPageIndex["SPINNER"] = 2] = "SPINNER";
    SupportToolPageIndex[SupportToolPageIndex["PII_SELECTION"] = 3] = "PII_SELECTION";
    SupportToolPageIndex[SupportToolPageIndex["EXPORT_SPINNER"] = 4] = "EXPORT_SPINNER";
    SupportToolPageIndex[SupportToolPageIndex["DATA_EXPORT_DONE"] = 5] = "DATA_EXPORT_DONE";
})(SupportToolPageIndex || (SupportToolPageIndex = {}));
const SupportToolElementBase = WebUiListenerMixin(PolymerElement);
export class SupportToolElement extends SupportToolElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = BrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'support-tool';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            selectedPage_: {
                type: SupportToolPageIndex,
                value: SupportToolPageIndex.ISSUE_DETAILS,
                observer: 'onSelectedPageChange_',
            },
            supportToolPageIndex_: {
                readonly: true,
                type: Object,
                value: SupportToolPageIndex,
            },
            // The error message shown in errorMessageToast element when it's shown.
            errorMessage_: {
                type: String,
                value: '',
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('screenshot-received', this.onScreenshotReceived_.bind(this));
        this.addWebUiListener('data-collection-completed', this.onDataCollectionCompleted_.bind(this));
        this.addWebUiListener('data-collection-cancelled', this.onDataCollectionCancelled_.bind(this));
        this.addWebUiListener('support-data-export-started', this.onDataExportStarted_.bind(this));
        this.addWebUiListener('data-export-completed', this.onDataExportCompleted_.bind(this));
    }
    onScreenshotReceived_(screenshotBase64) {
        if (screenshotBase64 !== 'CANCELED') {
            // Only continues if the user didn't cancel the screenshot.
            this.$.dataCollectors.setScreenshotData(screenshotBase64);
        }
    }
    onDataExportStarted_() {
        this.selectedPage_ = SupportToolPageIndex.EXPORT_SPINNER;
    }
    onDataCollectionCompleted_(piiItems) {
        this.$.piiSelection.updateDetectedPiiItems(piiItems);
        this.selectedPage_ = SupportToolPageIndex.PII_SELECTION;
    }
    onDataCollectionCancelled_() {
        // Change the selected page into issue details page so they user can restart
        // data collection if they want.
        this.selectedPage_ = SupportToolPageIndex.ISSUE_DETAILS;
    }
    displayError_(errorMessage) {
        this.errorMessage_ = errorMessage;
        this.$.errorMessageToast.show();
    }
    onDataExportCompleted_(result) {
        if (result.success) {
            // Show the exported data path to user in data export page if the data
            // export is successful.
            this.$.dataExportDone.setPath(result.path);
            this.selectedPage_ = SupportToolPageIndex.DATA_EXPORT_DONE;
        }
        else {
            // Show a toast with error message and turn back to the PII selection page
            // so the user can retry exporting their data.
            this.selectedPage_ = SupportToolPageIndex.PII_SELECTION;
            this.displayError_(result.error);
        }
    }
    onDataCollectionStart_(result) {
        if (result.success) {
            this.selectedPage_ = SupportToolPageIndex.SPINNER;
        }
        else {
            this.displayError_(result.errorMessage);
        }
    }
    onErrorMessageToastCloseClicked_() {
        this.$.errorMessageToast.hide();
    }
    onContinueClick_() {
        // If we are currently on data collectors selection page, send signal to
        // start data collection.
        if (this.selectedPage_ === SupportToolPageIndex.DATA_COLLECTOR_SELECTION) {
            this.browserProxy_
                .startDataCollection(this.$.issueDetails.getIssueDetails(), this.$.dataCollectors.getDataCollectors(), this.$.dataCollectors.getEditedScreenshotBase64())
                .then(this.onDataCollectionStart_.bind(this));
        }
        else {
            this.selectedPage_ = this.selectedPage_ + 1;
        }
    }
    onBackClick_() {
        this.selectedPage_ = this.selectedPage_ - 1;
    }
    shouldHideBackButton_() {
        // Back button will only be shown on data collectors selection page.
        return this.selectedPage_ !== SupportToolPageIndex.DATA_COLLECTOR_SELECTION;
    }
    shouldHideContinueButtonContainer_() {
        // Continue button container will only be shown in issue details page and
        // data collectors selection page.
        return this.selectedPage_ >= SupportToolPageIndex.SPINNER;
    }
    onSelectedPageChange_() {
        // On every selected page change, the focus will be moved to each page's
        // header to ensure a smooth experience in terms of accessibility.
        switch (this.selectedPage_) {
            case SupportToolPageIndex.ISSUE_DETAILS:
                this.$.issueDetails.ensureFocusOnPageHeader();
                break;
            case SupportToolPageIndex.DATA_COLLECTOR_SELECTION:
                this.$.dataCollectors.ensureFocusOnPageHeader();
                break;
            case SupportToolPageIndex.SPINNER:
                this.$.spinnerPage.ensureFocusOnPageHeader();
                break;
            case SupportToolPageIndex.PII_SELECTION:
                this.$.piiSelection.ensureFocusOnPageHeader();
                break;
            case SupportToolPageIndex.EXPORT_SPINNER:
                this.$.exportSpinner.ensureFocusOnPageHeader();
                break;
            case SupportToolPageIndex.DATA_EXPORT_DONE:
                this.$.dataExportDone.ensureFocusOnPageHeader();
                break;
            default:
                break;
        }
    }
}
customElements.define(SupportToolElement.is, SupportToolElement);
