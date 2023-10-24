// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class PdfViewerPrivateProxyImpl {
    isPdfOcrAlwaysActive() {
        return new Promise(resolve => {
            chrome.pdfViewerPrivate.isPdfOcrAlwaysActive(result => resolve(result));
        });
    }
    setPdfOcrPref(value) {
        return new Promise(resolve => {
            chrome.pdfViewerPrivate.setPdfOcrPref(value, result => resolve(result));
        });
    }
    addPdfOcrPrefChangedListener(listener) {
        chrome.pdfViewerPrivate.onPdfOcrPrefChanged.addListener(listener);
    }
    removePdfOcrPrefChangedListener(listener) {
        chrome.pdfViewerPrivate.onPdfOcrPrefChanged.removeListener(listener);
    }
    static getInstance() {
        return instance || (instance = new PdfViewerPrivateProxyImpl());
    }
}
let instance = null;
