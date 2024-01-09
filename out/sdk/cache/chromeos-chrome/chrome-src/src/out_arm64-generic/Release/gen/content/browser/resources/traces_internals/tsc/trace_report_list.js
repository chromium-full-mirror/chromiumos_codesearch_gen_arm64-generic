// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './trace_report.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { TraceReportBrowserProxy } from './trace_report_browser_proxy.js';
import { getTemplate } from './trace_report_list.html.js';
export var NotificationTypeEnum;
(function (NotificationTypeEnum) {
    NotificationTypeEnum["UPDATE"] = "Update";
    NotificationTypeEnum["ERROR"] = "Error";
    NotificationTypeEnum["ANNOUNCEMENT"] = "Announcement";
})(NotificationTypeEnum || (NotificationTypeEnum = {}));
export class Notification {
    constructor(type, label) {
        this.type = type;
        this.label = label;
    }
}
export class TraceReportListElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.traceReportProxy_ = TraceReportBrowserProxy.getInstance();
        this.traces = [];
        this.isLoading = false;
    }
    static get is() {
        return 'trace-report-list';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            traces: Array,
            isLoading: Boolean,
            notification: Notification,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.initializeList();
    }
    async initializeList() {
        this.isLoading = true;
        const { reports } = await this.traceReportProxy_.handler.getAllTraceReports();
        if (reports) {
            this.traces = reports;
        }
        else {
            this.traces = [];
            this.notification = new Notification(NotificationTypeEnum.ERROR, 'Error: Could not retrieve any trace reports.');
            this.$.toast.show();
        }
        this.isLoading = false;
    }
    showToastHandler_(e) {
        assert(e.detail);
        this.notification = e.detail;
        this.$.toast.show();
    }
    getNotificationIcon_(type) {
        switch (type) {
            case NotificationTypeEnum.ANNOUNCEMENT:
                return 'cr:info-outline';
            case NotificationTypeEnum.ERROR:
                return 'cr:error-outline';
            case NotificationTypeEnum.UPDATE:
                return 'cr:sync';
            default:
                return '';
        }
    }
    getNotificationStyling_(type) {
        switch (type) {
            case NotificationTypeEnum.ANNOUNCEMENT:
                return 'announcement';
            case NotificationTypeEnum.ERROR:
                return 'error';
            case NotificationTypeEnum.UPDATE:
                return 'update';
            default:
                return '';
        }
    }
    hasTraces_(traces) {
        return traces.length > 0;
    }
    async onDeleteAllTracesClick_() {
        const { success } = await this.traceReportProxy_.handler.deleteAllTraces();
        if (!success) {
            this.dispatchToast_('Failed to delete to delete all traces.');
        }
        this.initializeList();
    }
    dispatchToast_(message) {
        this.dispatchEvent(new CustomEvent('show-toast', {
            bubbles: true,
            composed: true,
            detail: new Notification(NotificationTypeEnum.ERROR, message),
        }));
    }
}
customElements.define(TraceReportListElement.is, TraceReportListElement);
