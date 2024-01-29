// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export function getFakeAccountsList() {
    return ['test@gmail.com', 'test2@gmail.com', 'test3@gmail.com'];
}
export function getFakeDeviceId() {
    return '4b1918ab-e8a4-456d-b499-0000deadbeef';
}
export const fakeAuthenticationData = {
    hl: 'hl',
    gaiaUrl: 'https://accounts.google.com/',
    gaiaPath: 'gaiaPath',
    authMode: 1,
};
export const fakeAuthenticationDataWithEmail = {
    hl: 'hl',
    gaiaUrl: 'https://accounts.google.com/',
    gaiaPath: 'gaiaPath',
    authMode: 1,
    email: 'example@gmail.com',
};
/*
 * Fake data used for `show-signin-error-page` web listener in
 * chrome/browser/resources/inline_login/inline_login_app.js.
 */
export const fakeSigninBlockedByPolicyData = {
    email: 'john.doe@example.com',
    hostedDomain: 'example.com',
    deviceType: 'Chromebook',
    signinBlockedByPolicy: true,
};
export class TestAuthenticator extends EventTarget {
    authMode = null;
    data = null;
    loadCalls = 0;
    getAccountsResponseCalls = 0;
    getAccountsResponseResult = null;
    getDeviceIdResponseCalls = 0;
    getDeviceIdResponseResult = '';
    insecureContentBlockedCallback = null;
    missingGaiaInfoCallback = null;
    samlApiUsedCallback = null;
    recordSamlProviderCallback = null;
    /**
     * @param authMode Authorization mode.
     * @param data Parameters for the authorization flow.
     */
    load(authMode, data) {
        this.loadCalls++;
        this.authMode = authMode;
        this.data = data;
    }
    /**
     * @param accounts list of emails.
     */
    getAccountsResponse(accounts) {
        this.getAccountsResponseCalls++;
        this.getAccountsResponseResult = accounts;
    }
    /**
     * @param deviceId Device ID.
     */
    getDeviceIdResponse(deviceId) {
        this.getDeviceIdResponseCalls++;
        this.getDeviceIdResponseResult = deviceId;
    }
    sendMessageToWebview(_messageType, _messageData) { }
    setWebviewPartition(_newWebviewPartitionName) { }
    resetWebview() { }
    resetStates() { }
    reload() { }
}
export class TestInlineLoginBrowserProxy extends TestBrowserProxy {
    dialogArguments_ = null;
    constructor() {
        super([
            'initialize',
            'authenticatorReady',
            'switchToFullTab',
            'completeLogin',
            'metricsHandler:recordAction',
            'showIncognito',
            'getAccounts',
            'getDeviceId',
            'dialogClose',
            'skipWelcomePage',
            'openGuestWindow',
            'getDialogArguments',
        ]);
    }
    setDialogArguments(dialogArguments) {
        this.dialogArguments_ = dialogArguments;
    }
    initialize() {
        this.methodCalled('initialize');
    }
    authenticatorReady() {
        this.methodCalled('authenticatorReady');
    }
    switchToFullTab(url) {
        this.methodCalled('switchToFullTab', url);
    }
    completeLogin(credentials) {
        this.methodCalled('completeLogin', credentials);
    }
    lstFetchResults(arg) {
        this.methodCalled('lstFetchResults', arg);
    }
    recordAction(metricsAction) {
        this.methodCalled('metricsHandler:recordAction', metricsAction);
    }
    showIncognito() {
        this.methodCalled('showIncognito');
    }
    getAccounts() {
        this.methodCalled('getAccounts');
        return Promise.resolve(getFakeAccountsList());
    }
    getDeviceId() {
        this.methodCalled('getDeviceId');
        return Promise.resolve(getFakeDeviceId());
    }
    dialogClose() {
        this.methodCalled('dialogClose');
    }
    skipWelcomePage(skip) {
        this.methodCalled('skipWelcomePage', skip);
    }
    openGuestWindow() {
        this.methodCalled('openGuestWindow');
    }
    getDialogArguments() {
        return JSON.stringify(this.dialogArguments_);
    }
}
