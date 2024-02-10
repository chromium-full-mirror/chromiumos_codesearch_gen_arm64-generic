// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import './icons.html.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './trace_report.html.js';
import { SkipUploadReason } from './trace_report.mojom-webui.js';
import { TraceReportBrowserProxy } from './trace_report_browser_proxy.js';
import { Notification, NotificationTypeEnum } from './trace_report_list.js';
var UploadState;
(function (UploadState) {
    UploadState[UploadState["NOT_UPLOADED"] = 0] = "NOT_UPLOADED";
    UploadState[UploadState["PENDING"] = 1] = "PENDING";
    UploadState[UploadState["USER_REQUEST"] = 2] = "USER_REQUEST";
    UploadState[UploadState["UPLOADED"] = 3] = "UPLOADED";
})(UploadState || (UploadState = {}));
// Create the temporary element here to hold the data to download the trace
// since it is only obtained after downloadData_ is called. This way we can
// perform a download directly in JS without touching the element that
// triggers the action. Initiate download a resource identified by |url| into
// |filename|.
function downloadUrl(fileName, url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
}
export class TraceReportElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.isLoading = false;
        this.traceReportProxy_ = TraceReportBrowserProxy.getInstance();
    }
    static get is() {
        return 'trace-report';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            trace: Object,
            // Enable the html template to use UploadState
            uploadStateEnum_: {
                type: Object,
                value: UploadState,
                readOnly: true,
            },
            isLoading: Boolean,
        };
    }
    onCopyUuidClick_() {
        // Get the text field
        assert(this.trace.uuid.high);
        assert(this.trace.uuid.low);
        navigator.clipboard.writeText(`${this.tokenToString_(this.trace.uuid)}`);
    }
    onCopyScenarioClick_() {
        // Get the text field
        assert(this.trace.scenarioName);
        navigator.clipboard.writeText(this.trace.scenarioName);
    }
    onCopyUploadRuleClick_() {
        // Get the text field
        assert(this.trace.uploadRuleName);
        navigator.clipboard.writeText(this.trace.uploadRuleName);
    }
    getSkipReason_(skipReason) {
        // Keep this in sync with the values of SkipUploadReason in
        // trace_report.mojom
        const skipReasonMap = [
            'None',
            'Size limit exceeded',
            'Not anonymized',
            'Scenario quota exceeded',
            'Upload timed out',
        ];
        return skipReasonMap[skipReason];
    }
    isManualUploadPermitted_(skipReason) {
        return skipReason !== SkipUploadReason.kNotAnonymized;
    }
    getTraceSize_(size) {
        if (this.trace.totalSize < 1) {
            return '0 Bytes';
        }
        let displayedSize = Number(size);
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        let i = 0;
        for (i; displayedSize >= k && i < 3; i++) {
            displayedSize /= k;
        }
        return `${displayedSize.toFixed(2)} ${sizes[i]}`;
    }
    dateToString_(mojoTime) {
        // The JS Date() is based off of the number of milliseconds since
        // the UNIX epoch (1970-01-01 00::00:00 UTC), while |internalValue|
        // of the base::Time (represented in mojom.Time) represents the
        // number of microseconds since the Windows FILETIME epoch
        // (1601-01-01 00:00:00 UTC). This computes the final JS time by
        // computing the epoch delta and the conversion from microseconds to
        // milliseconds.
        const windowsEpoch = Date.UTC(1601, 0, 1, 0, 0, 0, 0);
        const unixEpoch = Date.UTC(1970, 0, 1, 0, 0, 0, 0);
        // |epochDeltaInMs| equals to
        // base::Time::kTimeTToMicrosecondsOffset.
        const epochDeltaInMs = unixEpoch - windowsEpoch;
        const timeInMs = Number(mojoTime.internalValue) / 1000;
        // Define the format in which the date string is going to be displayed.
        return new Date(timeInMs - epochDeltaInMs)
            .toLocaleString(
        /*locales=*/ undefined, {
            hour: 'numeric',
            minute: 'numeric',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour12: true,
        });
    }
    async onDownloadTraceClick_() {
        this.isLoading = true;
        const { trace } = await this.traceReportProxy_.handler.downloadTrace(this.trace.uuid);
        if (trace !== null) {
            this.downloadData_(`${this.tokenToString_(this.trace.uuid)}.gz`, trace);
        }
        else {
            this.dispatchToast_(`Failed to download trace ${this.tokenToString_(this.trace.uuid)}.`);
        }
        this.isLoading = false;
    }
    downloadData_(fileName, data) {
        if (data.invalidBuffer) {
            this.dispatchToast_(`Invalid buffer received for ${this.tokenToString_(this.trace.uuid)}.`);
            return;
        }
        try {
            let bytes;
            if (Array.isArray(data.bytes)) {
                bytes = new Uint8Array(data.bytes);
            }
            else {
                assert(!!data.sharedMemory, 'sharedMemory must be defined here');
                const sharedMemory = data.sharedMemory;
                const { buffer, result } = sharedMemory.bufferHandle.mapBuffer(0, sharedMemory.size);
                assert(result === Mojo.RESULT_OK, 'Could not map buffer');
                bytes = new Uint8Array(buffer);
            }
            const url = URL.createObjectURL(new Blob([bytes], { type: 'application/octet-stream' }));
            downloadUrl(fileName, url);
        }
        catch (e) {
            this.dispatchToast_(`Unable to create blob from trace data for ${this.tokenToString_(this.trace.uuid)}.`);
        }
    }
    async onDeleteTraceClick_() {
        this.isLoading = true;
        const { success } = await this.traceReportProxy_.handler.deleteSingleTrace(this.trace.uuid);
        if (!success) {
            this.dispatchToast_(`Failed to delete ${this.tokenToString_(this.trace.uuid)}.`);
        }
        else {
            this.dispatchReloadRequest_();
        }
        this.isLoading = false;
    }
    async onUploadTraceClick_() {
        this.isLoading = true;
        const { success } = await this.traceReportProxy_.handler.userUploadSingleTrace(this.trace.uuid);
        if (!success) {
            this.dispatchToast_(`Failed to upload trace ${this.tokenToString_(this.trace.uuid)}.`);
        }
        else {
            this.dispatchReloadRequest_();
        }
        this.isLoading = false;
    }
    uploadStateEqual(value1, value2) {
        return value1 === value2;
    }
    tokenToString_(token) {
        return `${token.high.toString(16)}-${token.low.toString(16)}`;
    }
    dispatchToast_(message) {
        this.dispatchEvent(new CustomEvent('show-toast', {
            bubbles: true,
            composed: true,
            detail: new Notification(NotificationTypeEnum.ERROR, message),
        }));
    }
    isDownloadDisabled_(isLoading, uploadState) {
        return isLoading || uploadState === UploadState.UPLOADED;
    }
    dispatchReloadRequest_() {
        this.dispatchEvent(new CustomEvent('refresh-traces-request', {
            bubbles: true,
            composed: true,
        }));
    }
}
customElements.define(TraceReportElement.is, TraceReportElement);
