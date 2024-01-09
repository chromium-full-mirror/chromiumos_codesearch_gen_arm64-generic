// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { EnterpriseReportingBrowserProxy } from './browser_proxy.js';
import { getTemplate } from './reporting_history.html.js';
export class ReportingHistoryElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.browserProxy = EnterpriseReportingBrowserProxy.getInstance();
        this.filterOptions = [
            ReportingHistoryElement.allEvents,
            ReportingHistoryElement.allButUploads,
            'QueueAction',
            'Enqueue',
            'Flush',
            'Confirm',
            'Upload',
        ];
        this.selectedOption = ReportingHistoryElement.allEvents;
    }
    // Filtering options for the table.
    static { this.allEvents = 'All events'; }
    static { this.allButUploads = 'All events except uploads'; }
    static get is() {
        return 'reporting-history-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            loggingState: Boolean,
            filterOptions: {
                type: Array,
                value: () => [],
            },
            selectedOption: {
                type: String,
                value: '',
            },
        };
    }
    loggingStateToString(checked) {
        return checked ? 'On' : 'Off';
    }
    onToggleChange(event) {
        event.stopPropagation();
        // Deliver the value to the handler.
        this.browserProxy.handler.recordDebugState(event.detail);
    }
    onFilterChange() {
        const currentSelection = this.$.erpTableFilter.value;
        if (this.selectedOption != currentSelection) {
            this.selectedOption = currentSelection;
            this.updateErpTable();
        }
    }
    onDownloadButtonClick() {
        // Select the table and traverse through it.
        const tableRows = this.$.body.querySelectorAll('.erp-history-table tr');
        const csv = [];
        tableRows.forEach(currentRow => {
            const row = [];
            const cols = currentRow.querySelectorAll('td, th');
            cols.forEach(currentCol => {
                let value = '';
                // For the erp-parameters column we need to extract the information from
                // the bullet lists, for all the other columns we just append the
                // innerHTML directly.
                if (currentCol.className == 'erp-parameters') {
                    currentCol.querySelectorAll('li').forEach(el => {
                        value += el.innerText + ' - ';
                    });
                }
                else {
                    value = currentCol.innerHTML;
                }
                row.push(value);
            });
            csv.push(row.join(','));
        });
        // Create the file and download it. Format: reporting_logs_DATE.csv.
        const csvFile = new Blob([csv.join('\n')], { type: 'text/csv' });
        const url = URL.createObjectURL(csvFile);
        const a = document.createElement('a');
        a.href = url;
        a.download = `reporting_logs_${new Date().toISOString()}.csv`;
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }
    connectedCallback() {
        super.connectedCallback();
        // Set up history table to initially show as empty.
        this.setEmptyErpTable();
        // Add a listener for the asynchronous 'setErpHistoryData' event
        // to be invoked by page handler and populate the table.
        this.browserProxy.callbackRouter.setErpHistoryData.addListener((historyData) => {
            this.currentHistory = historyData;
            this.updateErpTable();
        });
    }
    ready() {
        super.ready();
        // Set initial history on/off state after refresh.
        this.browserProxy.handler.getDebugState().then(({ state }) => {
            this.loggingState = state;
        });
        // Populate history upon page refresh.
        this.browserProxy.handler.getErpHistoryData().then(({ historyData }) => {
            this.currentHistory = historyData;
            this.updateErpTable();
        });
    }
    // Fills the table as empty (initially or upon update).
    setEmptyErpTable() {
        const emptyRow = document.createElement('tr');
        // Pad with empty data cells, so that the alignment matches.
        emptyRow.replaceChildren(this.createHistoryTableDataCell('No events', 'erp-type'), this.composeEventParameters([], 'erp-parameters'), this.createHistoryTableDataCell('', 'erp-status'), this.createHistoryTableDataCell('', 'erp-timestamp'));
        this.$.body.appendChild(emptyRow);
    }
    // Fills the passed table element with the given history.
    updateErpTable() {
        // Reset table.
        this.$.body.replaceChildren();
        // If there are no events, present a placeholder.
        if (this.currentHistory.events.length === 0) {
            this.setEmptyErpTable();
            return;
        }
        // If there are events we filter them by the type of event.
        const filteredEvents = this.currentHistory.events.filter((event) => event.call == this.selectedOption ||
            this.selectedOption == ReportingHistoryElement.allEvents ||
            (this.selectedOption == ReportingHistoryElement.allButUploads &&
                event.call != 'Upload'));
        // If there are no events after filtering, present the placeholder.
        if (filteredEvents.length === 0) {
            this.setEmptyErpTable();
            return;
        }
        // Populate the table row by the events: iterate through the history
        // in reverse order so that the most recent event shows up first.
        // This uses the already filtered events by the user selection.
        for (const event of filteredEvents.reverse()) {
            const row = this.composeTableRow(event);
            this.$.body.appendChild(row);
        }
    }
    // Composes table row with the given history event.
    composeTableRow(event) {
        const row = document.createElement('tr');
        row.replaceChildren(this.createHistoryTableDataCell(this.erpHistoryTypeToString(event.call), 'erp-type'), this.composeEventParameters(event.parameters, 'erp-parameters'), this.createHistoryTableDataCell(event.status, 'erp-status'), this.createHistoryTableDataCell(this.timestampToString(Number(event.time)), 'erp-timestamp'));
        return row;
    }
    // Composes parameters as a list.
    composeEventParameters(parameters, className) {
        const list = document.createElement('ul');
        for (const parameter of parameters) {
            const line = document.createElement('li');
            line.textContent = parameter.name + ': ' + parameter.value;
            list.appendChild(line);
        }
        const element = document.createElement('td');
        element.appendChild(list);
        element.classList.add(className);
        return element;
    }
    // Composes table data cell
    createHistoryTableDataCell(textContent, className) {
        const td = document.createElement('td');
        td.classList.add(className);
        td.textContent = textContent;
        return td;
    }
    // Helper function to convert undefined ERP history types to 'Unknown' string.
    erpHistoryTypeToString(erpHistoryType) {
        return erpHistoryType || 'Unknown';
    }
    // Converts a given Unix timestamp into a human-readable string.
    timestampToString(timestampSeconds) {
        if (timestampSeconds === 0) {
            // This case should not normally happen.
            return 'N/A';
        }
        assert(!Number.isNaN(timestampSeconds));
        // Multiply by 1000 since the constructor expects milliseconds, but the
        // timestamps are in seconds.
        const timestamp = new Date(timestampSeconds * 1000);
        // For today's timestamp, show time only.
        const now = new Date();
        if (timestamp.getDate() === now.getDate()) {
            return timestamp.toLocaleTimeString();
        }
        // Otherwise show whole timestamp.
        return timestamp.toLocaleString();
    }
}
customElements.define(ReportingHistoryElement.is, ReportingHistoryElement);
