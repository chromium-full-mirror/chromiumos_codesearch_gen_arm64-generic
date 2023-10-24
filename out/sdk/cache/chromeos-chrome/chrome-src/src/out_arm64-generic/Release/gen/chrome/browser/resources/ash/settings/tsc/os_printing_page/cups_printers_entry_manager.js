// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { addWebUiListener, removeWebUiListener } from 'chrome://resources/js/cr.js';
import { findDifference } from './cups_printer_dialog_util.js';
import { PrinterType } from './cups_printer_types.js';
import { CupsPrintersBrowserProxyImpl } from './cups_printers_browser_proxy.js';
let instance = null;
/**
 * Class for managing printer entries. Holds Saved, Nearby, Enterprise, Print
 * Server printers and notifies observers of any applicable changes to either
 * printer lists.
 */
export class CupsPrintersEntryManager {
    static getInstance() {
        return instance || (instance = new CupsPrintersEntryManager());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    static resetForTesting() {
        instance = null;
    }
    constructor() {
        this.savedPrinters_ = [];
        this.nearbyPrinters_ = [];
        this.enterprisePrinters_ = [];
        this.onSavedPrintersChangedListeners_ = [];
        this.printServerPrinters = [];
        this.onNearbyPrintersChangedListeners_ = [];
        this.onNearbyPrintersChangedListener_ = null;
        this.onEnterprisePrintersChangedListeners_ = [];
        this.onEnterprisePrintersChangedListener_ = null;
        this.haveInitialSavedPrintersLoaded_ = false;
    }
    addWebUiListeners() {
        // TODO(1005905): Add on-saved-printers-changed listener here once legacy
        // code is removed.
        this.onNearbyPrintersChangedListener_ = addWebUiListener('on-nearby-printers-changed', this.setNearbyPrintersList.bind(this));
        this.onEnterprisePrintersChangedListener_ = addWebUiListener('on-enterprise-printers-changed', this.onEnterprisePrintersChanged.bind(this));
        CupsPrintersBrowserProxyImpl.getInstance().startDiscoveringPrinters();
    }
    onEnterprisePrintersChanged(cupsPrintersList) {
        this.setEnterprisePrintersList(cupsPrintersList.printerList.map(printerInfo => ({ printerInfo, printerType: PrinterType.ENTERPRISE })));
    }
    removeWebUiListeners() {
        if (this.onNearbyPrintersChangedListener_) {
            removeWebUiListener(this.onNearbyPrintersChangedListener_);
            this.onNearbyPrintersChangedListener_ = null;
        }
        if (this.onEnterprisePrintersChangedListener_) {
            removeWebUiListener(this.onEnterprisePrintersChangedListener_);
            this.onEnterprisePrintersChangedListener_ = null;
        }
    }
    get savedPrinters() {
        return this.savedPrinters_;
    }
    get nearbyPrinters() {
        return this.nearbyPrinters_;
    }
    get enterprisePrinters() {
        return this.enterprisePrinters_;
    }
    addOnSavedPrintersChangedListener(listener) {
        this.onSavedPrintersChangedListeners_.push(listener);
    }
    removeOnSavedPrintersChangedListener(listener) {
        this.onSavedPrintersChangedListeners_ =
            this.onSavedPrintersChangedListeners_.filter(lis => lis !== listener);
    }
    addOnNearbyPrintersChangedListener(listener) {
        this.onNearbyPrintersChangedListeners_.push(listener);
    }
    removeOnNearbyPrintersChangedListener(listener) {
        this.onNearbyPrintersChangedListeners_ =
            this.onNearbyPrintersChangedListeners_.filter(lis => lis !== listener);
    }
    addOnEnterprisePrintersChangedListener(listener) {
        this.onEnterprisePrintersChangedListeners_.push(listener);
    }
    removeOnEnterprisePrintersChangedListener(listener) {
        this.onEnterprisePrintersChangedListeners_ =
            this.onEnterprisePrintersChangedListeners_.filter(lis => lis !== listener);
    }
    /**
     * Sets the saved printers list and notifies observers of any applicable
     * changes.
     */
    setSavedPrintersList(printerList) {
        let printersAdded = [];
        let printersRemoved = [];
        if (!this.haveInitialSavedPrintersLoaded_) {
            this.haveInitialSavedPrintersLoaded_ = true;
        }
        else if (printerList.length > this.savedPrinters_.length) {
            printersAdded = findDifference(printerList, this.savedPrinters_);
        }
        else if (printerList.length < this.savedPrinters_.length) {
            printersRemoved = findDifference(this.savedPrinters_, printerList);
        }
        this.savedPrinters_ = printerList;
        this.notifyOnSavedPrintersChangedListeners_(this.savedPrinters_, printersAdded, printersRemoved);
    }
    /**
     * Sets the nearby printers list and notifies observers of any applicable
     * changes.
     */
    setNearbyPrintersList(automaticPrinters, discoveredPrinters) {
        if (!automaticPrinters && !discoveredPrinters) {
            return;
        }
        this.nearbyPrinters_ = [];
        for (const printer of automaticPrinters) {
            this.nearbyPrinters_.push({ printerInfo: printer, printerType: PrinterType.AUTOMATIC });
        }
        for (const printer of discoveredPrinters) {
            this.nearbyPrinters_.push({ printerInfo: printer, printerType: PrinterType.DISCOVERED });
        }
        this.notifyOnNearbyPrintersChangedListeners_();
    }
    // Sets the enterprise printers list and notifies observers.
    setEnterprisePrintersList(enterprisePrinters) {
        this.enterprisePrinters_ = enterprisePrinters;
        this.notifyOnEnterprisePrintersChangedListeners_();
    }
    /**
     * Adds the found print server printers to |printServerPrinters|.
     * |foundPrinters| consist of print server printers that have not been saved
     * and will appear in the nearby printers list.
     */
    addPrintServerPrinters(foundPrinters) {
        // Get only new printers from |foundPrinters|. We ignore previously
        // found printers.
        const newPrinters = foundPrinters.printerList.filter(p1 => {
            return !this.printServerPrinters.some(p2 => p2.printerInfo.printerId === p1.printerId);
        });
        for (const printer of newPrinters) {
            this.printServerPrinters.push({ printerInfo: printer, printerType: PrinterType.PRINTSERVER });
        }
        // All printers from print servers are treated as nearby printers.
        this.notifyOnNearbyPrintersChangedListeners_();
    }
    /**
     * Non-empty/null fields indicate the applicable change to be notified.
     */
    notifyOnSavedPrintersChangedListeners_(savedPrinters, addedPrinter, removedPrinter) {
        this.onSavedPrintersChangedListeners_.forEach(listener => listener(savedPrinters, addedPrinter, removedPrinter));
    }
    notifyOnNearbyPrintersChangedListeners_() {
        this.onNearbyPrintersChangedListeners_.forEach(listener => listener(this.nearbyPrinters_));
    }
    notifyOnEnterprisePrintersChangedListeners_() {
        this.onEnterprisePrintersChangedListeners_.forEach(listener => listener(this.enterprisePrinters_));
    }
}
