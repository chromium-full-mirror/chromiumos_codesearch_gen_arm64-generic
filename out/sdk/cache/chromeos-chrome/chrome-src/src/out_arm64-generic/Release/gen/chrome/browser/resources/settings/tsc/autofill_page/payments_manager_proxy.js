// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Implementation that accesses the private API.
 */
export class PaymentsManagerImpl {
    setPersonalDataManagerListener(listener) {
        chrome.autofillPrivate.onPersonalDataChanged.addListener(listener);
    }
    removePersonalDataManagerListener(listener) {
        chrome.autofillPrivate.onPersonalDataChanged.removeListener(listener);
    }
    getCreditCardList() {
        return chrome.autofillPrivate.getCreditCardList();
    }
    getIbanList() {
        return chrome.autofillPrivate.getIbanList();
    }
    isValidIban(ibanValue) {
        return chrome.autofillPrivate.isValidIban(ibanValue);
    }
    removeCreditCard(guid) {
        chrome.autofillPrivate.removeEntry(guid);
    }
    clearCachedCreditCard(guid) {
        chrome.autofillPrivate.maskCreditCard(guid);
    }
    saveCreditCard(creditCard) {
        chrome.autofillPrivate.saveCreditCard(creditCard);
    }
    saveIban(iban) {
        chrome.autofillPrivate.saveIban(iban);
    }
    removeIban(guid) {
        chrome.autofillPrivate.removeEntry(guid);
    }
    migrateCreditCards() {
        chrome.autofillPrivate.migrateCreditCards();
    }
    logServerCardLinkClicked() {
        chrome.autofillPrivate.logServerCardLinkClicked();
    }
    logServerIbanLinkClicked() {
        chrome.autofillPrivate.logServerIbanLinkClicked();
    }
    setCreditCardFidoAuthEnabledState(enabled) {
        chrome.autofillPrivate.setCreditCardFIDOAuthEnabledState(enabled);
    }
    addVirtualCard(cardId) {
        chrome.autofillPrivate.addVirtualCard(cardId);
    }
    removeVirtualCard(serverId) {
        chrome.autofillPrivate.removeVirtualCard(serverId);
    }
    isUserVerifyingPlatformAuthenticatorAvailable() {
        if (!window.PublicKeyCredential) {
            return Promise.resolve(null);
        }
        return window.PublicKeyCredential
            .isUserVerifyingPlatformAuthenticatorAvailable();
    }
    authenticateUserAndFlipMandatoryAuthToggle() {
        chrome.autofillPrivate.authenticateUserAndFlipMandatoryAuthToggle();
    }
    getLocalCard(guid) {
        return chrome.autofillPrivate.getLocalCard(guid);
    }
    // 
    bulkDeleteAllCvcs() {
        chrome.autofillPrivate.bulkDeleteAllCvcs();
    }
    static getInstance() {
        return instance || (instance = new PaymentsManagerImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
