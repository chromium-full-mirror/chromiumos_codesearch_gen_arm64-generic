// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import '../strings.m.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
// 
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { IronA11yAnnouncer } from 'chrome://resources/polymer/v3_0/iron-a11y-announcer/iron-a11y-announcer.js';
// 
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PrinterType } from '../data/destination.js';
import { State } from '../data/state.js';
import { getTemplate } from './button_strip.html.js';
export class PrintPreviewButtonStripElement extends PolymerElement {
    constructor() {
        super(...arguments);
        // 
        this.lastState_ = State.NOT_READY;
        // 
    }
    static get is() {
        return 'print-preview-button-strip';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            destination: Object,
            firstLoad: Boolean,
            maxSheets: Number,
            sheetCount: Number,
            state: Number,
            printButtonEnabled_: {
                type: Boolean,
                value: false,
            },
            printButtonLabel_: {
                type: String,
                value() {
                    return loadTimeData.getString('printButton');
                },
            },
            // 
            errorMessage_: {
                type: String,
                observer: 'errorMessageChanged_',
            },
            isPinValid: Boolean,
            // 
        };
    }
    static get observers() {
        return [
            'updatePrintButtonLabel_(destination.id)',
            'updatePrintButtonEnabled_(state, destination.id, maxSheets, sheetCount)',
            // 
            'updatePrintButtonEnabled_(isPinValid)',
            'updateErrorMessage_(state, destination.id, maxSheets, sheetCount)',
            // 
        ];
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    onPrintClick_() {
        this.fire_('print-requested');
    }
    onCancelClick_() {
        this.fire_('cancel-requested');
    }
    isPdf_() {
        return this.destination &&
            this.destination.type === PrinterType.PDF_PRINTER;
    }
    updatePrintButtonLabel_() {
        this.printButtonLabel_ =
            loadTimeData.getString(this.isPdf_() ? 'saveButton' : 'printButton');
    }
    updatePrintButtonEnabled_() {
        switch (this.state) {
            case (State.PRINTING):
                this.printButtonEnabled_ = false;
                break;
            case (State.READY):
                // 
                this.printButtonEnabled_ = !this.printButtonDisabled_();
                // 
                // 
                if (this.firstLoad || this.lastState_ === State.PRINTING) {
                    this.shadowRoot
                        .querySelector('cr-button.action-button').focus();
                    this.fire_('print-button-focused');
                }
                break;
            default:
                this.printButtonEnabled_ = false;
                break;
        }
        this.lastState_ = this.state;
    }
    // 
    /**
     * This disables the print button if the sheets limit policy is violated or
     * pin printing is enabled and the pin is invalid.
     */
    printButtonDisabled_() {
        return this.isSheetsLimitPolicyViolated_() || !this.isPinValid;
    }
    /**
     * The sheets policy is violated if 3 conditions are met:
     * * This is "real" printing, i.e. not saving to PDF/Drive.
     * * Sheets policy is present.
     * * Either number of sheets is not calculated or exceeds policy limit.
     */
    isSheetsLimitPolicyViolated_() {
        return !this.isPdf_() && this.maxSheets > 0 &&
            (this.sheetCount === 0 || this.sheetCount > this.maxSheets);
    }
    /**
     * @return Whether to show the "Too many sheets" error.
     */
    showSheetsError_() {
        // The error is shown if the number of sheets is already calculated and the
        // print button is disabled.
        return this.sheetCount > 0 && this.isSheetsLimitPolicyViolated_();
    }
    updateErrorMessage_() {
        if (!this.showSheetsError_()) {
            this.errorMessage_ = '';
            return;
        }
        PluralStringProxyImpl.getInstance()
            .getPluralString('sheetsLimitErrorMessage', this.maxSheets)
            .then(label => {
            this.errorMessage_ = label;
        });
    }
    /**
     * Uses IronA11yAnnouncer to notify screen readers that an error is set.
     */
    errorMessageChanged_() {
        if (this.errorMessage_ !== '') {
            IronA11yAnnouncer.requestAvailability();
            this.fire_('iron-announce', { text: this.errorMessage_ });
        }
    }
}
customElements.define(PrintPreviewButtonStripElement.is, PrintPreviewButtonStripElement);
