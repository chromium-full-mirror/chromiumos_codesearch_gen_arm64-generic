// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
/**
 * These values must be kept in sync with the values in
 * third_party/cros_system_api/dbus/service_constants.h.
 */
export var FingerprintResultType;
(function (FingerprintResultType) {
    FingerprintResultType[FingerprintResultType["SUCCESS"] = 0] = "SUCCESS";
    FingerprintResultType[FingerprintResultType["PARTIAL"] = 1] = "PARTIAL";
    FingerprintResultType[FingerprintResultType["INSUFFICIENT"] = 2] = "INSUFFICIENT";
    FingerprintResultType[FingerprintResultType["SENSOR_DIRTY"] = 3] = "SENSOR_DIRTY";
    FingerprintResultType[FingerprintResultType["TOO_SLOW"] = 4] = "TOO_SLOW";
    FingerprintResultType[FingerprintResultType["TOO_FAST"] = 5] = "TOO_FAST";
    FingerprintResultType[FingerprintResultType["IMMOBILE"] = 6] = "IMMOBILE";
})(FingerprintResultType || (FingerprintResultType = {}));
let instance = null;
export class FingerprintBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new FingerprintBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    getFingerprintsList() {
        return sendWithPromise('getFingerprintsList');
    }
    getNumFingerprints() {
        return sendWithPromise('getNumFingerprints');
    }
    startEnroll(authToken) {
        chrome.send('startEnroll', [authToken]);
    }
    cancelCurrentEnroll() {
        chrome.send('cancelCurrentEnroll');
    }
    getEnrollmentLabel(_index) {
        return sendWithPromise('getEnrollmentLabel');
    }
    removeEnrollment(index, authToken) {
        return sendWithPromise('removeEnrollment', index, authToken);
    }
    changeEnrollmentLabel(index, newLabel) {
        return sendWithPromise('changeEnrollmentLabel', index, newLabel);
    }
    fakeScanComplete() {
        chrome.send('fakeScanComplete');
    }
}
