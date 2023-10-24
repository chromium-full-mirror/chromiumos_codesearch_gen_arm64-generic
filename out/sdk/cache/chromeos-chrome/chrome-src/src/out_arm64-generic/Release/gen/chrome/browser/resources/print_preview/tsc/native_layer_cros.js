// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class NativeLayerCrosImpl {
    getEulaUrl(destinationId) {
        return sendWithPromise('getEulaUrl', destinationId);
    }
    grantExtensionPrinterAccess(provisionalDestinationId) {
        return sendWithPromise('grantExtensionPrinterAccess', provisionalDestinationId);
    }
    setupPrinter(printerId) {
        return sendWithPromise('setupPrinter', printerId);
    }
    requestPrinterStatusUpdate(printerId) {
        return sendWithPromise('requestPrinterStatus', printerId);
    }
    recordPrinterStatusRetrySuccessHistogram(retrySuccessful) {
        chrome.send('metricsHandler:recordBooleanHistogram', ['PrinterStatusRetrySuccess', retrySuccessful]);
    }
    choosePrintServers(printServerIds) {
        chrome.send('choosePrintServers', [printServerIds]);
    }
    getPrintServersConfig() {
        return sendWithPromise('getPrintServersConfig');
    }
    recordPrintAttemptOutcome(printAttemptOutcome) {
        chrome.send('recordPrintAttemptOutcome', [printAttemptOutcome]);
    }
    getShowManagePrinters() {
        return sendWithPromise('getShowManagePrinters');
    }
    observeLocalPrinters() {
        return sendWithPromise('observeLocalPrinters');
    }
    static getInstance() {
        return instance || (instance = new NativeLayerCrosImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
