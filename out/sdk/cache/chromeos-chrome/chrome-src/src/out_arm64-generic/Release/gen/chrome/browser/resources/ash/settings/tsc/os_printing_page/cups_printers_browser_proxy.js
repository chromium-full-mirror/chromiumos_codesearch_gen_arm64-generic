// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used from the "CUPS printing" section to
 * interact with the browser. Used only on Chrome OS.
 */
import { sendWithPromise } from 'chrome://resources/js/cr.js';
/**
 * These values must be kept in sync with the PrinterSetupResult enum in
 * chrome/browser/ash/printing/printer_configurer.h.
 */
export var PrinterSetupResult;
(function (PrinterSetupResult) {
    PrinterSetupResult[PrinterSetupResult["FATAL_ERROR"] = 0] = "FATAL_ERROR";
    PrinterSetupResult[PrinterSetupResult["SUCCESS"] = 1] = "SUCCESS";
    PrinterSetupResult[PrinterSetupResult["PRINTER_UNREACHABLE"] = 2] = "PRINTER_UNREACHABLE";
    PrinterSetupResult[PrinterSetupResult["DBUS_ERROR"] = 3] = "DBUS_ERROR";
    PrinterSetupResult[PrinterSetupResult["NATIVE_PRINTERS_NOT_ALLOWED"] = 4] = "NATIVE_PRINTERS_NOT_ALLOWED";
    PrinterSetupResult[PrinterSetupResult["INVALID_PRINTER_UPDATE"] = 5] = "INVALID_PRINTER_UPDATE";
    PrinterSetupResult[PrinterSetupResult["COMPONENT_UNAVAILAVLE"] = 6] = "COMPONENT_UNAVAILAVLE";
    PrinterSetupResult[PrinterSetupResult["EDIT_SUCCESS"] = 7] = "EDIT_SUCCESS";
    PrinterSetupResult[PrinterSetupResult["PPD_TOO_LARGE"] = 10] = "PPD_TOO_LARGE";
    PrinterSetupResult[PrinterSetupResult["INVALID_PPD"] = 11] = "INVALID_PPD";
    PrinterSetupResult[PrinterSetupResult["PPD_NOT_FOUND"] = 12] = "PPD_NOT_FOUND";
    PrinterSetupResult[PrinterSetupResult["PPD_UNRETRIEVABLE"] = 13] = "PPD_UNRETRIEVABLE";
    PrinterSetupResult[PrinterSetupResult["IO_ERROR"] = 14] = "IO_ERROR";
    PrinterSetupResult[PrinterSetupResult["MEMORY_ALLOCATION_ERROR"] = 15] = "MEMORY_ALLOCATION_ERROR";
    PrinterSetupResult[PrinterSetupResult["BAD_URI"] = 16] = "BAD_URI";
    PrinterSetupResult[PrinterSetupResult["MANUAL_SETUP_REQUIRED"] = 17] = "MANUAL_SETUP_REQUIRED";
    PrinterSetupResult[PrinterSetupResult["DBUS_NO_REPLY"] = 64] = "DBUS_NO_REPLY";
    PrinterSetupResult[PrinterSetupResult["DBUS_TIMEOUT"] = 65] = "DBUS_TIMEOUT";
})(PrinterSetupResult || (PrinterSetupResult = {}));
/**
 * These values must be kept in sync with the PrintServerQueryResult enum in
 * /chrome/browser/ash/printing/server_printers_fetcher.h
 */
export var PrintServerResult;
(function (PrintServerResult) {
    PrintServerResult[PrintServerResult["NO_ERRORS"] = 0] = "NO_ERRORS";
    PrintServerResult[PrintServerResult["INCORRECT_URL"] = 1] = "INCORRECT_URL";
    PrintServerResult[PrintServerResult["CONNECTION_ERROR"] = 2] = "CONNECTION_ERROR";
    PrintServerResult[PrintServerResult["HTTP_ERROR"] = 3] = "HTTP_ERROR";
    PrintServerResult[PrintServerResult["CANNOT_PARSE_IPP_RESPONSE"] = 4] = "CANNOT_PARSE_IPP_RESPONSE";
})(PrintServerResult || (PrintServerResult = {}));
let instance = null;
export class CupsPrintersBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new CupsPrintersBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    getCupsSavedPrintersList() {
        return sendWithPromise('getCupsSavedPrintersList');
    }
    getCupsEnterprisePrintersList() {
        return sendWithPromise('getCupsEnterprisePrintersList');
    }
    updateCupsPrinter(printerId, printerName) {
        return sendWithPromise('updateCupsPrinter', printerId, printerName);
    }
    removeCupsPrinter(printerId, printerName) {
        chrome.send('removeCupsPrinter', [printerId, printerName]);
    }
    retrieveCupsPrinterPpd(printerId, printerName, eula) {
        chrome.send('retrieveCupsPrinterPpd', [printerId, printerName, eula]);
    }
    addCupsPrinter(newPrinter) {
        return sendWithPromise('addCupsPrinter', newPrinter);
    }
    reconfigureCupsPrinter(printer) {
        return sendWithPromise('reconfigureCupsPrinter', printer);
    }
    getCupsPrinterPpdPath() {
        return sendWithPromise('selectPPDFile');
    }
    startDiscoveringPrinters() {
        chrome.send('startDiscoveringPrinters');
    }
    stopDiscoveringPrinters() {
        chrome.send('stopDiscoveringPrinters');
    }
    getCupsPrinterManufacturersList() {
        return sendWithPromise('getCupsPrinterManufacturersList');
    }
    getCupsPrinterModelsList(manufacturer) {
        return sendWithPromise('getCupsPrinterModelsList', manufacturer);
    }
    getPrinterInfo(newPrinter) {
        return sendWithPromise('getPrinterInfo', newPrinter);
    }
    getPrinterPpdManufacturerAndModel(printerId) {
        return sendWithPromise('getPrinterPpdManufacturerAndModel', printerId);
    }
    addDiscoveredPrinter(printerId) {
        return sendWithPromise('addDiscoveredPrinter', printerId);
    }
    cancelPrinterSetUp(newPrinter) {
        chrome.send('cancelPrinterSetUp', [newPrinter]);
    }
    getEulaUrl(ppdManufacturer, ppdModel) {
        return sendWithPromise('getEulaUrl', ppdManufacturer, ppdModel);
    }
    queryPrintServer(serverUrl) {
        return sendWithPromise('queryPrintServer', serverUrl);
    }
    openPrintManagementApp() {
        chrome.send('openPrintManagementApp');
    }
    openScanningApp() {
        chrome.send('openScanningApp');
    }
    requestPrinterStatusUpdate(printerId) {
        return sendWithPromise('requestPrinterStatus', printerId);
    }
}
