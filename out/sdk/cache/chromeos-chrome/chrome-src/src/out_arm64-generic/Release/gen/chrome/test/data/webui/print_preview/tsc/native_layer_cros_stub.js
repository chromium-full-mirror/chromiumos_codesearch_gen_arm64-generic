// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { NativeLayerCrosImpl, PrinterStatusReason, PrinterStatusSeverity } from 'chrome://print/print_preview.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export function setNativeLayerCrosInstance() {
    const instance = new NativeLayerCrosStub();
    NativeLayerCrosImpl.setInstance(instance);
    return instance;
}
/**
 * Test version of the Chrome OS native layer.
 */
export class NativeLayerCrosStub extends TestBrowserProxy {
    /** The response to be sent on a |setupPrinter| call. */
    setupPrinterResponse_ = null;
    /** Whether the printer setup request should be rejected. */
    shouldRejectPrinterSetup_ = false;
    eulaUrl_ = '';
    printerStatusMap_ = new Map();
    multiplePrinterStatusRequestsPromise_ = null;
    multiplePrinterStatusRequestsCount_ = 0;
    printServersConfig_ = { printServers: [], isSingleServerFetchingMode: false };
    showManagePrinters = true;
    /** When true, all printer status retry requests return NO_ERROR. */
    simulateStatusRetrySuccesful_ = false;
    localPrinters_ = [];
    constructor() {
        super([
            'getEulaUrl',
            'requestPrinterStatusUpdate',
            'setupPrinter',
            'choosePrintServers',
            'getPrintServersConfig',
            'recordPrinterStatusRetrySuccessHistogram',
            'getShowManagePrinters',
            'observeLocalPrinters',
        ]);
    }
    getEulaUrl(destinationId) {
        this.methodCalled('getEulaUrl', { destinationId: destinationId });
        return Promise.resolve(this.eulaUrl_);
    }
    setupPrinter(printerId) {
        this.methodCalled('setupPrinter', printerId);
        assert(this.setupPrinterResponse_);
        return this.shouldRejectPrinterSetup_ ?
            Promise.reject(this.setupPrinterResponse_) :
            Promise.resolve(this.setupPrinterResponse_);
    }
    grantExtensionPrinterAccess(provisionalId) {
        return Promise.resolve({
            extensionId: 'abc123',
            extensionName: 'my extension',
            id: provisionalId,
            name: provisionalId + '_Name',
        });
    }
    /**
     * @param response The response to send when |setupPrinter| is called.
     * @param reject Whether printSetup requests should be
     *     rejected. Defaults to false (will resolve callback) if not provided.
     */
    setSetupPrinterResponse(response, reject) {
        this.shouldRejectPrinterSetup_ = reject || false;
        this.setupPrinterResponse_ = response;
    }
    /** @param eulaUrl The eulaUrl of the PPD. */
    setEulaUrl(eulaUrl) {
        this.eulaUrl_ = eulaUrl;
    }
    requestPrinterStatusUpdate(printerId) {
        this.methodCalled('requestPrinterStatusUpdate');
        if (this.multiplePrinterStatusRequestsPromise_) {
            this.multiplePrinterStatusRequestsCount_--;
            if (this.multiplePrinterStatusRequestsCount_ === 0) {
                this.multiplePrinterStatusRequestsPromise_.resolve();
                this.multiplePrinterStatusRequestsPromise_ = null;
            }
        }
        const printerStatus = this.printerStatusMap_.get(printerId);
        // When |simulateStatusRetrySuccesful_| is true, force the next status
        // request for |printerId| to return NO_ERROR.
        if (this.simulateStatusRetrySuccesful_) {
            this.addPrinterStatusToMap(printerId, {
                printerId: printerId,
                statusReasons: [{
                        reason: PrinterStatusReason.NO_ERROR,
                        severity: PrinterStatusSeverity.REPORT,
                    }],
                timestamp: Date.now(),
            });
        }
        return Promise.resolve(printerStatus);
    }
    addPrinterStatusToMap(printerId, printerStatus) {
        this.printerStatusMap_.set(printerId, printerStatus);
    }
    /**
     * @param count The number of printer status requests to wait for.
     * @return Promise that resolves after |count| requests.
     */
    waitForMultiplePrinterStatusRequests(count) {
        assert(this.multiplePrinterStatusRequestsPromise_ === null);
        this.multiplePrinterStatusRequestsCount_ = count;
        this.multiplePrinterStatusRequestsPromise_ = new PromiseResolver();
        return this.multiplePrinterStatusRequestsPromise_.promise;
    }
    choosePrintServers(printServerIds) {
        this.methodCalled('choosePrintServers', printServerIds);
    }
    getPrintServersConfig() {
        this.methodCalled('getPrintServersConfig');
        return Promise.resolve(this.printServersConfig_);
    }
    recordPrinterStatusRetrySuccessHistogram(retrySuccessful) {
        this.methodCalled('recordPrinterStatusRetrySuccessHistogram', retrySuccessful);
    }
    recordPrintAttemptOutcome() { }
    setPrintServersConfig(printServersConfig) {
        this.printServersConfig_ = printServersConfig;
    }
    simulateStatusRetrySuccesful() {
        this.simulateStatusRetrySuccesful_ = true;
    }
    getShowManagePrinters() {
        this.methodCalled('getShowManagePrinters');
        return Promise.resolve(this.showManagePrinters);
    }
    setShowManagePrinters(show) {
        this.showManagePrinters = show;
    }
    setLocalPrinters(printers) {
        this.localPrinters_ = printers;
    }
    observeLocalPrinters() {
        this.methodCalled('observeLocalPrinters');
        return Promise.resolve(this.localPrinters_);
    }
}
