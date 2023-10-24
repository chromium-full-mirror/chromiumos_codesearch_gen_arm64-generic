// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'add-printer-manufacturer-model-dialog' is a dialog in which the user can
 *   manually select the manufacture and model of the new printer.
 */
import 'chrome://resources/cr_components/localized_link/localized_link.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import './cups_add_printer_dialog.js';
import './cups_printer_dialog_error.js';
import './cups_printer_shared.css.js';
import './cups_printers_browser_proxy.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './cups_add_printer_manufacturer_model_dialog.html.js';
import { getBaseName, getErrorText, isPPDInfoValid } from './cups_printer_dialog_util.js';
import { CupsPrintersBrowserProxyImpl } from './cups_printers_browser_proxy.js';
export class AddPrinterManufacturerModelDialogElement extends PolymerElement {
    static get is() {
        return 'add-printer-manufacturer-model-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            activePrinter: {
                type: Object,
                notify: true,
            },
            manufacturerList: Array,
            modelList: Array,
            /**
             * Whether the user selected PPD file is valid.
             */
            invalidPPD_: {
                type: Boolean,
                value: false,
            },
            /**
             * The base name of a newly selected PPD file.
             */
            newUserPPD_: String,
            /**
             * The URL to a printer's EULA.
             */
            eulaUrl_: {
                type: String,
                value: '',
            },
            addPrinterInProgress_: {
                type: Boolean,
                value: false,
            },
            /**
             * The error text to be displayed on the dialog.
             */
            errorText_: {
                type: String,
                value: '',
            },
            /**
             * Indicates whether the value in the Manufacturer dropdown is a valid
             * printer manufacturer.
             */
            isManufacturerInvalid_: Boolean,
            /**
             * Indicates whether the value in the Model dropdown is a valid printer
             * model.
             */
            isModelInvalid_: Boolean,
        };
    }
    static get observers() {
        return [
            'selectedManufacturerChanged_(activePrinter.ppdManufacturer)',
            'selectedModelChanged_(activePrinter.ppdModel)',
        ];
    }
    constructor() {
        super();
        this.browserProxy_ = CupsPrintersBrowserProxyImpl.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        this.browserProxy_.getCupsPrinterManufacturersList().then(this.manufacturerListChanged_.bind(this));
    }
    close() {
        this.shadowRoot.querySelector('add-printer-dialog').close();
    }
    onPrinterAddedSucceeded_(result) {
        const showCupsPrinterToastEvent = new CustomEvent('show-cups-printer-toast', {
            bubbles: true,
            composed: true,
            detail: { resultCode: result, printerName: this.activePrinter.printerName },
        });
        this.dispatchEvent(showCupsPrinterToastEvent);
        this.close();
    }
    /**
     * Handler for addCupsPrinter failure.
     */
    onPrinterAddedFailed_(result) {
        this.addPrinterInProgress_ = false;
        this.errorText_ = getErrorText(result);
    }
    /**
     * If the printer is a nearby printer, return make + model with the subtext.
     * Otherwise, return printer name.
     */
    getManufacturerAndModelSubtext_() {
        if (this.activePrinter.printerMakeAndModel) {
            return loadTimeData.getStringF('manufacturerAndModelAdditionalInformation', this.activePrinter.printerMakeAndModel);
        }
        return loadTimeData.getStringF('manufacturerAndModelAdditionalInformation', this.activePrinter.printerName);
    }
    selectedManufacturerChanged_(manufacturer) {
        // Reset model if manufacturer is changed.
        this.set('activePrinter.ppdModel', '');
        this.modelList = [];
        if (manufacturer && manufacturer.length !== 0) {
            this.browserProxy_.getCupsPrinterModelsList(manufacturer)
                .then(this.modelListChanged_.bind(this));
        }
    }
    /**
     * Attempts to get the EULA Url if the selected printer has one.
     */
    selectedModelChanged_() {
        this.errorText_ = '';
        if (!this.activePrinter.ppdManufacturer || !this.activePrinter.ppdModel) {
            // Do not check for an EULA unless both |ppdManufacturer| and |ppdModel|
            // are set. Set |eulaUrl_| to be empty in this case.
            this.onGetEulaUrlCompleted_('' /* eulaUrl */);
            return;
        }
        this.browserProxy_
            .getEulaUrl(this.activePrinter.ppdManufacturer, this.activePrinter.ppdModel)
            .then(this.onGetEulaUrlCompleted_.bind(this));
    }
    onGetEulaUrlCompleted_(eulaUrl) {
        this.eulaUrl_ = eulaUrl;
    }
    manufacturerListChanged_(manufacturersInfo) {
        if (!manufacturersInfo.success) {
            return;
        }
        this.manufacturerList = manufacturersInfo.manufacturers;
        if (this.activePrinter.ppdManufacturer.length !== 0) {
            this.browserProxy_
                .getCupsPrinterModelsList(this.activePrinter.ppdManufacturer)
                .then(this.modelListChanged_.bind(this));
        }
    }
    modelListChanged_(modelsInfo) {
        if (modelsInfo.success) {
            this.modelList = modelsInfo.models;
        }
    }
    onBrowseFile_() {
        this.browserProxy_.getCupsPrinterPpdPath().then(this.printerPpdPathChanged_.bind(this));
    }
    /**
     * @param path The full path to the selected PPD file
     */
    printerPpdPathChanged_(path) {
        this.set('activePrinter.printerPPDPath', path);
        this.invalidPPD_ = !path;
        this.newUserPPD_ = getBaseName(path);
    }
    onCancelClick_() {
        this.close();
        this.browserProxy_.cancelPrinterSetUp(this.activePrinter);
    }
    addPrinter_() {
        this.addPrinterInProgress_ = true;
        this.browserProxy_.addCupsPrinter(this.activePrinter)
            .then(this.onPrinterAddedSucceeded_.bind(this), this.onPrinterAddedFailed_.bind(this));
    }
    /**
     * @return Whether we have enough information to set up the printer
     */
    canAddPrinter_(ppdManufacturer, ppdModel, printerPPDPath, addPrinterInProgress, isManufacturerInvalid, isModelInvalid) {
        return !addPrinterInProgress &&
            isPPDInfoValid(ppdManufacturer, ppdModel, printerPPDPath) &&
            !isManufacturerInvalid && !isModelInvalid;
    }
}
customElements.define(AddPrinterManufacturerModelDialogElement.is, AddPrinterManufacturerModelDialogElement);
