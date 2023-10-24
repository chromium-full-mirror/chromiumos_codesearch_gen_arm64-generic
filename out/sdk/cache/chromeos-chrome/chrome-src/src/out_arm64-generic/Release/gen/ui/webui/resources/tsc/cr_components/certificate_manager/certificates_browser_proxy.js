// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used from the "Manage certificates" section
 * to interact with the browser.
 */
import { sendWithPromise } from 'chrome://resources/js/cr.js';
/**
 * Enumeration of all possible certificate types.
 */
export var CertificateType;
(function (CertificateType) {
    CertificateType["CA"] = "ca";
    CertificateType["OTHER"] = "other";
    CertificateType["PERSONAL"] = "personal";
    CertificateType["SERVER"] = "server";
})(CertificateType || (CertificateType = {}));
export class CertificatesBrowserProxyImpl {
    refreshCertificates() {
        chrome.send('refreshCertificates');
    }
    viewCertificate(id) {
        chrome.send('viewCertificate', [id]);
    }
    exportCertificate(id) {
        chrome.send('exportCertificate', [id]);
    }
    deleteCertificate(id) {
        return sendWithPromise('deleteCertificate', id);
    }
    exportPersonalCertificate(id) {
        return sendWithPromise('exportPersonalCertificate', id);
    }
    exportPersonalCertificatePasswordSelected(password) {
        return sendWithPromise('exportPersonalCertificatePasswordSelected', password);
    }
    importPersonalCertificate(useHardwareBacked) {
        return sendWithPromise('importPersonalCertificate', useHardwareBacked);
    }
    importPersonalCertificatePasswordSelected(password) {
        return sendWithPromise('importPersonalCertificatePasswordSelected', password);
    }
    getCaCertificateTrust(id) {
        return sendWithPromise('getCaCertificateTrust', id);
    }
    editCaCertificateTrust(id, ssl, email, objSign) {
        return sendWithPromise('editCaCertificateTrust', id, ssl, email, objSign);
    }
    importCaCertificateTrustSelected(ssl, email, objSign) {
        return sendWithPromise('importCaCertificateTrustSelected', ssl, email, objSign);
    }
    cancelImportExportCertificate() {
        chrome.send('cancelImportExportCertificate');
    }
    importCaCertificate() {
        return sendWithPromise('importCaCertificate');
    }
    importServerCertificate() {
        return sendWithPromise('importServerCertificate');
    }
    static getInstance() {
        return instance || (instance = new CertificatesBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
// The singleton instance_ is replaced with a test version of this wrapper
// during testing.
let instance = null;
