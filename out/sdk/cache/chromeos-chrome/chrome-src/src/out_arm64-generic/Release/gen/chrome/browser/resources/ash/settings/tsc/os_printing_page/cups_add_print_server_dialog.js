// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'add-print-server-dialog' is a dialog in which the user can
 *   add a print server.
 */
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_input/cr_input.js';
import './cups_add_printer_dialog.js';
import './cups_printer_dialog_error.js';
import './cups_printer_shared.css.js';
import './cups_printers_browser_proxy.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './cups_add_print_server_dialog.html.js';
import { getPrintServerErrorText } from './cups_printer_dialog_util.js';
import { CupsPrintersBrowserProxyImpl, PrintServerResult } from './cups_printers_browser_proxy.js';
export class AddPrintServerDialogElement extends PolymerElement {
    static get is() {
        return 'add-print-server-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            printServerAddress_: {
                type: String,
                value: '',
            },
            errorText_: {
                type: String,
                value: '',
            },
            inProgress_: {
                type: Boolean,
                value: false,
            },
        };
    }
    constructor() {
        super();
        this.browserProxy_ = CupsPrintersBrowserProxyImpl.getInstance();
    }
    onCancelClick_() {
        this.shadowRoot.querySelector('add-printer-dialog').close();
    }
    onAddPrintServerClick_() {
        this.inProgress_ = true;
        this.shadowRoot.querySelector('#printServerAddressInput').invalid = false;
        this.browserProxy_.queryPrintServer(this.printServerAddress_)
            .then(this.onPrintServerAddedSucceeded_.bind(this), this.onPrintServerAddedFailed_.bind(this));
    }
    onPrintServerAddedSucceeded_(printers) {
        this.inProgress_ = false;
        const addPrintServerEvent = new CustomEvent('add-print-server-and-show-toast', {
            bubbles: true,
            composed: true,
            detail: { printers },
        });
        this.dispatchEvent(addPrintServerEvent);
        this.shadowRoot.querySelector('add-printer-dialog').close();
    }
    onPrintServerAddedFailed_(addPrintServerError) {
        this.inProgress_ = false;
        if (addPrintServerError === PrintServerResult.INCORRECT_URL) {
            this.shadowRoot
                .querySelector('#printServerAddressInput').invalid =
                true;
            return;
        }
        this.errorText_ = getPrintServerErrorText(addPrintServerError);
    }
    /**
     * Keypress event handler. If enter is pressed, trigger the add event.
     */
    onKeypress(event) {
        if (event.key !== 'Enter') {
            return;
        }
        event.stopPropagation();
        this.onAddPrintServerClick_();
    }
}
customElements.define(AddPrintServerDialogElement.is, AddPrintServerDialogElement);
