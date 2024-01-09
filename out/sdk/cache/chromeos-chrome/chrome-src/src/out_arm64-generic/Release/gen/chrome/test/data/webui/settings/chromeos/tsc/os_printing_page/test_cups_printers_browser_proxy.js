// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PrinterSetupResult, PrintServerResult } from 'chrome://os-settings/lazy_load.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestCupsPrintersBrowserProxy extends TestBrowserProxy {
    printerList;
    printServerPrinters;
    manufacturers;
    models;
    printerInfo;
    printerPpdMakeModel;
    printerStatusMap;
    printerPpdPath;
    eulaUrl;
    getPrinterInfoResult;
    queryPrintServerResult;
    addDiscoveredFailedPrinter;
    constructor() {
        super([
            'addCupsPrinter',
            'addDiscoveredPrinter',
            'getCupsSavedPrintersList',
            'getCupsEnterprisePrintersList',
            'getCupsPrinterManufacturersList',
            'getCupsPrinterModelsList',
            'getPrinterInfo',
            'getPrinterPpdManufacturerAndModel',
            'queryPrintServer',
            'startDiscoveringPrinters',
            'stopDiscoveringPrinters',
            'cancelPrinterSetUp',
            'updateCupsPrinter',
            'removeCupsPrinter',
            'reconfigureCupsPrinter',
            'getEulaUrl',
            'requestPrinterStatusUpdate',
            'retrieveCupsPrinterPpd',
            'getCupsPrinterPpdPath',
            'openPrintManagementApp',
            'openScanningApp',
        ]);
        this.printerList = { printerList: [] };
        this.printServerPrinters = { printerList: [] };
        this.manufacturers = { success: false, manufacturers: [] };
        this.models = { success: false, models: [] };
        this.printerInfo = {
            makeAndModel: '',
            autoconf: false,
            ppdRefUserSuppliedPpdUrl: '',
            ppdRefEffectiveMakeAndModel: '',
            ppdReferenceResolved: false,
        };
        this.printerPpdMakeModel = { ppdManufacturer: '', ppdModel: '' };
        this.printerStatusMap = {};
        this.printerPpdPath = '';
        /**
         * |eulaUrl| in conjunction with |setEulaUrl| mimics setting the EULA url
         * for a printer.
         */
        this.eulaUrl = '';
        /**
         * If set, 'getPrinterInfo' will fail and the promise will be reject with
         * this PrinterSetupResult.
         */
        this.getPrinterInfoResult = null;
        /**
         * Contains the result code from querying a print server.
         */
        this.queryPrintServerResult = null;
        /**
         * If set, 'addDiscoveredPrinter' will fail and the promise will be
         * rejected with this printer.
         */
        this.addDiscoveredFailedPrinter = null;
    }
    addCupsPrinter(newPrinter) {
        this.methodCalled('addCupsPrinter', newPrinter);
        return Promise.resolve(PrinterSetupResult.SUCCESS);
    }
    addDiscoveredPrinter(printerId) {
        this.methodCalled('addDiscoveredPrinter', printerId);
        if (this.addDiscoveredFailedPrinter !== null) {
            return Promise.reject(this.addDiscoveredFailedPrinter);
        }
        return Promise.resolve(PrinterSetupResult.SUCCESS);
    }
    getCupsSavedPrintersList() {
        this.methodCalled('getCupsSavedPrintersList');
        return Promise.resolve(this.printerList);
    }
    getCupsEnterprisePrintersList() {
        this.methodCalled('getCupsEnterprisePrintersList');
        return Promise.resolve(this.printerList);
    }
    getCupsPrinterManufacturersList() {
        this.methodCalled('getCupsPrinterManufacturersList');
        return Promise.resolve(this.manufacturers);
    }
    getCupsPrinterModelsList(manufacturer) {
        this.methodCalled('getCupsPrinterModelsList', manufacturer);
        return Promise.resolve(this.models);
    }
    getPrinterInfo(newPrinter) {
        this.methodCalled('getPrinterInfo', newPrinter);
        if (this.getPrinterInfoResult !== null) {
            return Promise.reject(this.getPrinterInfoResult);
        }
        return Promise.resolve(this.printerInfo);
    }
    startDiscoveringPrinters() {
        this.methodCalled('startDiscoveringPrinters');
    }
    stopDiscoveringPrinters() {
        this.methodCalled('stopDiscoveringPrinters');
    }
    cancelPrinterSetUp(newPrinter) {
        this.methodCalled('cancelPrinterSetUp', newPrinter);
    }
    updateCupsPrinter(printerId, printerName) {
        this.methodCalled('updateCupsPrinter', [printerId, printerName]);
        return Promise.resolve(PrinterSetupResult.EDIT_SUCCESS);
    }
    removeCupsPrinter(printerId, printerName) {
        this.methodCalled('removeCupsPrinter', [printerId, printerName]);
    }
    getPrinterPpdManufacturerAndModel(printerId) {
        this.methodCalled('getPrinterPpdManufacturerAndModel', printerId);
        return Promise.resolve(this.printerPpdMakeModel);
    }
    reconfigureCupsPrinter(printer) {
        this.methodCalled('reconfigureCupsPrinter', printer);
        return Promise.resolve(PrinterSetupResult.EDIT_SUCCESS);
    }
    getEulaUrl(ppdManufacturer, ppdModel) {
        this.methodCalled('getEulaUrl', [ppdManufacturer, ppdModel]);
        return Promise.resolve(this.eulaUrl);
    }
    queryPrintServer(serverUrl) {
        this.methodCalled('queryPrintServer', serverUrl);
        if (this.queryPrintServerResult !== PrintServerResult.NO_ERRORS) {
            return Promise.reject(this.queryPrintServerResult);
        }
        return Promise.resolve(this.printServerPrinters);
    }
    requestPrinterStatusUpdate(printerId) {
        this.methodCalled('requestPrinterStatusUpdate', printerId);
        return Promise.resolve(this.printerStatusMap[printerId]);
    }
    retrieveCupsPrinterPpd(printerId, printerName, eula) {
        this.methodCalled('retrieveCupsPrinterPpd', [printerId, printerName, eula]);
    }
    getCupsPrinterPpdPath() {
        this.methodCalled('getCupsPrinterPpdPath');
        return Promise.resolve(this.printerPpdPath);
    }
    openPrintManagementApp() {
        this.methodCalled('openPrintManagementApp');
    }
    openScanningApp() {
        this.methodCalled('openScanningApp');
    }
    setEulaUrl(eulaUrl) {
        this.eulaUrl = eulaUrl;
    }
    setGetPrinterInfoResult(result) {
        this.getPrinterInfoResult = result;
    }
    setQueryPrintServerResult(result) {
        this.queryPrintServerResult = result;
    }
    setAddDiscoveredPrinterFailure(printer) {
        this.addDiscoveredFailedPrinter = printer;
    }
    addPrinterStatus(printerId, reason, severity) {
        this.printerStatusMap[printerId] = {
            printerId,
            statusReasons: [
                {
                    reason,
                    severity,
                },
            ],
            timestamp: 0,
        };
    }
}
