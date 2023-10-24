// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used from the "Kerberos Accounts" subsection of
 * the "Kerberos" section of Settings, to interact with the browser. Chrome OS
 * only.
 */
import { sendWithPromise } from 'chrome://resources/js/cr.js';
/**
 *  These values must be kept in sync with the ErrorType enum in
 *  third_party/cros_system_api/dbus/kerberos/kerberos_service.proto.
 */
export var KerberosErrorType;
(function (KerberosErrorType) {
    KerberosErrorType[KerberosErrorType["NONE"] = 0] = "NONE";
    KerberosErrorType[KerberosErrorType["UNKNOWN"] = 1] = "UNKNOWN";
    KerberosErrorType[KerberosErrorType["D_BUS_FAILURE"] = 2] = "D_BUS_FAILURE";
    KerberosErrorType[KerberosErrorType["NETWORK_PROBLEM"] = 3] = "NETWORK_PROBLEM";
    KerberosErrorType[KerberosErrorType["UNKNOWN_KRB5_ERROR"] = 4] = "UNKNOWN_KRB5_ERROR";
    KerberosErrorType[KerberosErrorType["BAD_PRINCIPAL"] = 5] = "BAD_PRINCIPAL";
    KerberosErrorType[KerberosErrorType["BAD_PASSWORD"] = 6] = "BAD_PASSWORD";
    KerberosErrorType[KerberosErrorType["PASSWORD_EXPIRED"] = 7] = "PASSWORD_EXPIRED";
    KerberosErrorType[KerberosErrorType["PASSWORD_REJECTED"] = 8] = "PASSWORD_REJECTED";
    KerberosErrorType[KerberosErrorType["NO_CREDENTIALS_CACHE_FOUND"] = 9] = "NO_CREDENTIALS_CACHE_FOUND";
    KerberosErrorType[KerberosErrorType["KERBEROS_TICKET_EXPIRED"] = 10] = "KERBEROS_TICKET_EXPIRED";
    KerberosErrorType[KerberosErrorType["KDC_DOES_NOT_SUPPORT_ENCRYPTION_TYPE"] = 11] = "KDC_DOES_NOT_SUPPORT_ENCRYPTION_TYPE";
    KerberosErrorType[KerberosErrorType["CONTACTING_KDC_FAILED"] = 12] = "CONTACTING_KDC_FAILED";
    KerberosErrorType[KerberosErrorType["PARSE_REQUEST_FAILED"] = 13] = "PARSE_REQUEST_FAILED";
    KerberosErrorType[KerberosErrorType["LOCAL_IO"] = 14] = "LOCAL_IO";
    KerberosErrorType[KerberosErrorType["UNKNOWN_PRINCIPAL_NAME"] = 15] = "UNKNOWN_PRINCIPAL_NAME";
    KerberosErrorType[KerberosErrorType["DUPLICATE_PRINCIPAL_NAME"] = 16] = "DUPLICATE_PRINCIPAL_NAME";
    KerberosErrorType[KerberosErrorType["IN_PROGRESS"] = 17] = "IN_PROGRESS";
    KerberosErrorType[KerberosErrorType["PARSE_PRINCIPAL_FAILED"] = 18] = "PARSE_PRINCIPAL_FAILED";
    KerberosErrorType[KerberosErrorType["BAD_CONFIG"] = 19] = "BAD_CONFIG";
    KerberosErrorType[KerberosErrorType["JAIL_FAILURE"] = 20] = "JAIL_FAILURE";
    KerberosErrorType[KerberosErrorType["KERBEROS_DISABLED"] = 21] = "KERBEROS_DISABLED";
})(KerberosErrorType || (KerberosErrorType = {}));
/**
 *  Error codes for config validation.
 *  These values must be kept in sync with the KerberosConfigErrorCode enum in
 *  third_party/cros_system_api/dbus/kerberos/kerberos_service.proto.
 */
export var KerberosConfigErrorCode;
(function (KerberosConfigErrorCode) {
    KerberosConfigErrorCode[KerberosConfigErrorCode["NONE"] = 0] = "NONE";
    KerberosConfigErrorCode[KerberosConfigErrorCode["SECTION_NESTED_IN_GROUP"] = 1] = "SECTION_NESTED_IN_GROUP";
    KerberosConfigErrorCode[KerberosConfigErrorCode["SECTION_SYNTAX"] = 2] = "SECTION_SYNTAX";
    KerberosConfigErrorCode[KerberosConfigErrorCode["EXPECTED_OPENING_CURLY_BRACE"] = 3] = "EXPECTED_OPENING_CURLY_BRACE";
    KerberosConfigErrorCode[KerberosConfigErrorCode["EXTRA_CURLY_BRACE"] = 4] = "EXTRA_CURLY_BRACE";
    KerberosConfigErrorCode[KerberosConfigErrorCode["RELATION_SYNTAX"] = 5] = "RELATION_SYNTAX";
    KerberosConfigErrorCode[KerberosConfigErrorCode["KEY_NOT_SUPPORTED"] = 6] = "KEY_NOT_SUPPORTED";
    KerberosConfigErrorCode[KerberosConfigErrorCode["SECTION_NOT_SUPPORTED"] = 7] = "SECTION_NOT_SUPPORTED";
    KerberosConfigErrorCode[KerberosConfigErrorCode["KRB5_FAILED_TO_PARSE"] = 8] = "KRB5_FAILED_TO_PARSE";
    KerberosConfigErrorCode[KerberosConfigErrorCode["TOO_MANY_NESTED_GROUPS"] = 9] = "TOO_MANY_NESTED_GROUPS";
    KerberosConfigErrorCode[KerberosConfigErrorCode["LINE_TOO_LONG"] = 10] = "LINE_TOO_LONG";
})(KerberosConfigErrorCode || (KerberosConfigErrorCode = {}));
let instance = null;
export class KerberosAccountsBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new KerberosAccountsBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    getAccounts() {
        return sendWithPromise('getKerberosAccounts');
    }
    addAccount(principalName, password, rememberPassword, config, allowExisting) {
        return sendWithPromise('addKerberosAccount', principalName, password, rememberPassword, config, allowExisting);
    }
    removeAccount(account) {
        return sendWithPromise('removeKerberosAccount', account.principalName);
    }
    validateConfig(krb5conf) {
        return sendWithPromise('validateKerberosConfig', krb5conf);
    }
    setAsActiveAccount(account) {
        chrome.send('setAsActiveKerberosAccount', [account.principalName]);
    }
}
