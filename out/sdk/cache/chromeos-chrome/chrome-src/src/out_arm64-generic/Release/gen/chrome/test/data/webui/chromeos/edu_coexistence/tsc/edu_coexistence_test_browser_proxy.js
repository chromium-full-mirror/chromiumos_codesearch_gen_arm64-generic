// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
const DEFAULT_COEXISTENCE_PARAMS = {
    url: 'https://foo.example.com/supervision/coexistence/intro',
    hl: 'en-US',
    sourceUi: 'oobe',
    clientId: 'test-client-id',
    clientVersion: ' test-client-version',
    eduCoexistenceId: ' test-edu-coexistence-id',
    platformVersion: ' test-platform-version',
    releaseChannel: 'test-release-channel',
    deviceId: 'test-device-id',
    eduCoexistenceAccessToken: 'token',
    signinTime: 10000,
};
const DEFAULT_DIALOG_ARGUMENTS = {
    isAvailableInArc: true,
    showArcAvailabilityPicker: false,
};
export class TestEduCoexistenceBrowserProxy extends TestBrowserProxy {
    dialogArguments;
    coexistenceParams;
    constructor() {
        super([
            'initializeLogin',
            'initializeEduArgs',
            'authenticatorReady',
            'completeLogin',
            'getAccounts',
            'getDeviceId',
            'consentValid',
            'consentLogged',
            'dialogClose',
            'onError',
        ]);
        this.dialogArguments = DEFAULT_DIALOG_ARGUMENTS;
        this.coexistenceParams = DEFAULT_COEXISTENCE_PARAMS;
    }
    initializeLogin() {
        this.methodCalled('initializeLogin');
    }
    initializeEduArgs() {
        this.methodCalled('initializeEduArgs');
        return Promise.resolve(this.coexistenceParams);
    }
    authenticatorReady() {
        this.methodCalled('authenticatorReady');
    }
    completeLogin(credentials) {
        this.methodCalled('completeLogin', credentials);
    }
    getAccounts() {
        this.methodCalled('getAccounts');
        return Promise.resolve(['test@gmail.com', 'test2@gmail.com', 'test3@gmail.com']);
    }
    getDeviceId() {
        this.methodCalled('getDeviceId');
        return Promise.resolve('4b1918ab-e8a4-456d-b499-0000deadbeef');
    }
    consentValid() {
        this.methodCalled('consentValid');
    }
    consentLogged(account, eduCoexistenceTosVersion) {
        this.methodCalled('consentLogged', account, eduCoexistenceTosVersion);
        return Promise.resolve(true);
    }
    dialogClose() {
        this.methodCalled('dialogClose');
    }
    onError() {
        this.methodCalled('error');
    }
    getDialogArguments() {
        return JSON.stringify(this.dialogArguments);
    }
    /**
     * The passed in params override DEFAULT_COEXISTENCE_PARAMS for this instance
     * of TestEduCoexistenceBrowserProxy.
     */
    setCoexistenceParams(coexistenceParams) {
        this.coexistenceParams = coexistenceParams;
    }
    /**
     * The passed in dialogArguments override DEFAULT_DIALOG_ARGUMENTS for this
     * instance of TestEduCoexistenceBrowserProxy.
     */
    setDialogArguments(dialogArguments) {
        this.dialogArguments = dialogArguments;
    }
}
