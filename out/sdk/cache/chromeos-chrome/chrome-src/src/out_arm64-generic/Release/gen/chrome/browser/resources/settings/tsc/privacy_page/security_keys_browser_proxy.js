// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
// clang-format on
/**
 * Ctap2Status contains a subset of CTAP2 status codes. See
 * device::CtapDeviceResponseCode for the full list.
 */
export var Ctap2Status;
(function (Ctap2Status) {
    Ctap2Status[Ctap2Status["OK"] = 0] = "OK";
    Ctap2Status[Ctap2Status["ERR_FP_DATABASE_FULL"] = 23] = "ERR_FP_DATABASE_FULL";
    Ctap2Status[Ctap2Status["ERR_INVALID_OPTION"] = 44] = "ERR_INVALID_OPTION";
    Ctap2Status[Ctap2Status["ERR_KEEPALIVE_CANCEL"] = 45] = "ERR_KEEPALIVE_CANCEL";
})(Ctap2Status || (Ctap2Status = {}));
/**
 * SampleStatus is the result for reading an individual sample ("touch")
 * during a fingerprint enrollment. This is a subset of the
 * lastEnrollSampleStatus enum defined in the CTAP spec.
 */
export var SampleStatus;
(function (SampleStatus) {
    SampleStatus[SampleStatus["OK"] = 0] = "OK";
})(SampleStatus || (SampleStatus = {}));
export class SecurityKeysPinBrowserProxyImpl {
    startSetPin() {
        return sendWithPromise('securityKeyStartSetPIN');
    }
    setPin(oldPIN, newPIN) {
        return sendWithPromise('securityKeySetPIN', oldPIN, newPIN);
    }
    close() {
        return chrome.send('securityKeyPINClose');
    }
    static getInstance() {
        return pinBrowserProxyInstance ||
            (pinBrowserProxyInstance = new SecurityKeysPinBrowserProxyImpl());
    }
    static setInstance(obj) {
        pinBrowserProxyInstance = obj;
    }
}
let pinBrowserProxyInstance = null;
export class SecurityKeysCredentialBrowserProxyImpl {
    startCredentialManagement() {
        return sendWithPromise('securityKeyCredentialManagementStart');
    }
    providePin(pin) {
        return sendWithPromise('securityKeyCredentialManagementPIN', pin);
    }
    enumerateCredentials() {
        return sendWithPromise('securityKeyCredentialManagementEnumerate');
    }
    deleteCredentials(ids) {
        return sendWithPromise('securityKeyCredentialManagementDelete', ids);
    }
    updateUserInformation(credentialId, userHandle, newUsername, newDisplayname) {
        return sendWithPromise('securityKeyCredentialManagementUpdate', credentialId, userHandle, newUsername, newDisplayname);
    }
    close() {
        return chrome.send('securityKeyCredentialManagementClose');
    }
    static getInstance() {
        return credentialBrowserProxyInstance ||
            (credentialBrowserProxyInstance =
                new SecurityKeysCredentialBrowserProxyImpl());
    }
    static setInstance(obj) {
        credentialBrowserProxyInstance = obj;
    }
}
let credentialBrowserProxyInstance = null;
export class SecurityKeysResetBrowserProxyImpl {
    reset() {
        return sendWithPromise('securityKeyReset');
    }
    completeReset() {
        return sendWithPromise('securityKeyCompleteReset');
    }
    close() {
        return chrome.send('securityKeyResetClose');
    }
    static getInstance() {
        return resetBrowserProxyInstance ||
            (resetBrowserProxyInstance = new SecurityKeysResetBrowserProxyImpl());
    }
    static setInstance(obj) {
        resetBrowserProxyInstance = obj;
    }
}
let resetBrowserProxyInstance = null;
export class SecurityKeysBioEnrollProxyImpl {
    startBioEnroll() {
        return sendWithPromise('securityKeyBioEnrollStart');
    }
    providePin(pin) {
        return sendWithPromise('securityKeyBioEnrollProvidePIN', pin);
    }
    getSensorInfo() {
        return sendWithPromise('securityKeyBioEnrollGetSensorInfo');
    }
    enumerateEnrollments() {
        return sendWithPromise('securityKeyBioEnrollEnumerate');
    }
    startEnrolling() {
        return sendWithPromise('securityKeyBioEnrollStartEnrolling');
    }
    cancelEnrollment() {
        return chrome.send('securityKeyBioEnrollCancel');
    }
    deleteEnrollment(id) {
        return sendWithPromise('securityKeyBioEnrollDelete', id);
    }
    renameEnrollment(id, name) {
        return sendWithPromise('securityKeyBioEnrollRename', id, name);
    }
    close() {
        return chrome.send('securityKeyBioEnrollClose');
    }
    static getInstance() {
        return bioEnrollProxyInstance ||
            (bioEnrollProxyInstance = new SecurityKeysBioEnrollProxyImpl());
    }
    static setInstance(obj) {
        bioEnrollProxyInstance = obj;
    }
}
let bioEnrollProxyInstance = null;
export class SecurityKeysPhonesBrowserProxyImpl {
    enumerate() {
        return sendWithPromise('securityKeyPhonesEnumerate');
    }
    delete(name) {
        return sendWithPromise('securityKeyPhonesDelete', name);
    }
    rename(publicKey, newName) {
        return sendWithPromise('securityKeyPhonesRename', publicKey, newName);
    }
    static getInstance() {
        return phonesProxyInstance ||
            (phonesProxyInstance = new SecurityKeysPhonesBrowserProxyImpl());
    }
    static setInstance(obj) {
        phonesProxyInstance = obj;
    }
}
let phonesProxyInstance = null;
