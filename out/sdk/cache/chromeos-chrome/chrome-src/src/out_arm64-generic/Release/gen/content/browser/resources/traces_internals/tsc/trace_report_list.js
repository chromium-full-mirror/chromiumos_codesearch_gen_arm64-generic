// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './trace_report.js';
import 'chrome://resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { TraceReportBrowserProxy } from './trace_report_browser_proxy.js';
import { getTemplate } from './trace_report_list.html.js';
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
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.initializeList();
    }
    async initializeList() {
        this.isLoading = true;
        // TODO(b/299476756): |result| can be empty/null/false in some methods
        // which should be handled differently than currently for the user to
        // know if an action has return the value expected or not. Not simply
        // if the call to the method failed.
        const { reports } = await this.traceReportProxy_.handler.getAllTraceReports();
        this.traces = reports;
        this.isLoading = false;
    }
}
customElements.define(TraceReportListElement.is, TraceReportListElement);
