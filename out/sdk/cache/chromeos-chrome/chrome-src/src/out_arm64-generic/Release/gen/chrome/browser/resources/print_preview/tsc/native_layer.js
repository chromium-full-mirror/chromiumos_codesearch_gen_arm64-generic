// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
/**
 * Enumeration of background graphics printing mode restrictions used by
 * Chromium.
 * This has to coincide with |printing::BackgroundGraphicsModeRestriction| as
 * defined in printing/backend/printing_restrictions.h
 */
export var BackgroundGraphicsModeRestriction;
(function (BackgroundGraphicsModeRestriction) {
    BackgroundGraphicsModeRestriction[BackgroundGraphicsModeRestriction["UNSET"] = 0] = "UNSET";
    BackgroundGraphicsModeRestriction[BackgroundGraphicsModeRestriction["ENABLED"] = 1] = "ENABLED";
    BackgroundGraphicsModeRestriction[BackgroundGraphicsModeRestriction["DISABLED"] = 2] = "DISABLED";
})(BackgroundGraphicsModeRestriction || (BackgroundGraphicsModeRestriction = {}));
/**
 * Enumeration of color mode restrictions used by Chromium.
 * This has to coincide with |printing::ColorModeRestriction| as defined in
 * printing/backend/printing_restrictions.h
 */
export var ColorModeRestriction;
(function (ColorModeRestriction) {
    ColorModeRestriction[ColorModeRestriction["UNSET"] = 0] = "UNSET";
    ColorModeRestriction[ColorModeRestriction["MONOCHROME"] = 1] = "MONOCHROME";
    ColorModeRestriction[ColorModeRestriction["COLOR"] = 2] = "COLOR";
})(ColorModeRestriction || (ColorModeRestriction = {}));
/**
 * Enumeration of duplex mode restrictions used by Chromium.
 * This has to coincide with |printing::DuplexModeRestriction| as defined in
 * printing/backend/printing_restrictions.h
 */
export var DuplexModeRestriction;
(function (DuplexModeRestriction) {
    DuplexModeRestriction[DuplexModeRestriction["UNSET"] = 0] = "UNSET";
    DuplexModeRestriction[DuplexModeRestriction["SIMPLEX"] = 1] = "SIMPLEX";
    DuplexModeRestriction[DuplexModeRestriction["LONG_EDGE"] = 2] = "LONG_EDGE";
    DuplexModeRestriction[DuplexModeRestriction["SHORT_EDGE"] = 4] = "SHORT_EDGE";
    DuplexModeRestriction[DuplexModeRestriction["DUPLEX"] = 6] = "DUPLEX";
})(DuplexModeRestriction || (DuplexModeRestriction = {}));
// 
/**
 * Enumeration of PIN printing mode restrictions used by Chromium.
 * This has to coincide with |printing::PinModeRestriction| as defined in
 * printing/backend/printing_restrictions.h
 */
export var PinModeRestriction;
(function (PinModeRestriction) {
    PinModeRestriction[PinModeRestriction["UNSET"] = 0] = "UNSET";
    PinModeRestriction[PinModeRestriction["PIN"] = 1] = "PIN";
    PinModeRestriction[PinModeRestriction["NO_PIN"] = 2] = "NO_PIN";
})(PinModeRestriction || (PinModeRestriction = {}));
export class NativeLayerImpl {
    getInitialSettings() {
        return sendWithPromise('getInitialSettings');
    }
    getPrinters(type) {
        return sendWithPromise('getPrinters', type);
    }
    getPrinterCapabilities(destinationId, type) {
        return sendWithPromise('getPrinterCapabilities', destinationId, type);
    }
    getPreview(printTicket) {
        return sendWithPromise('getPreview', printTicket);
    }
    managePrinters() {
        chrome.send('managePrinters');
    }
    doPrint(printTicket) {
        return sendWithPromise('doPrint', printTicket);
    }
    cancelPendingPrintRequest() {
        chrome.send('cancelPendingPrintRequest');
    }
    saveAppState(appStateStr) {
        chrome.send('saveAppState', [appStateStr]);
    }
    // 
    dialogClose(isCancel) {
        if (isCancel) {
            chrome.send('closePrintPreviewDialog');
        }
        chrome.send('dialogClose');
    }
    hidePreview() {
        chrome.send('hidePreview');
    }
    recordInHistogram(histogram, bucket, maxBucket) {
        chrome.send('metricsHandler:recordInHistogram', [histogram, bucket, maxBucket]);
    }
    recordBooleanHistogram(histogram, value) {
        chrome.send('metricsHandler:recordBooleanHistogram', [histogram, value]);
    }
    static getInstance() {
        return instance || (instance = new NativeLayerImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
