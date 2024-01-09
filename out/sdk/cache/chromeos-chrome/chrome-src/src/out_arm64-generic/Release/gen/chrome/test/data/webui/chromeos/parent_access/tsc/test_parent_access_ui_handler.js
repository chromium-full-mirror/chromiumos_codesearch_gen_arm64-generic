// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestParentAccessUiHandler extends TestBrowserProxy {
    params;
    oauthToken;
    oauthTokenStatus;
    constructor() {
        super([
            'getOauthToken',
            'onParentAccessCallbackReceived',
            'getParentAccessParams',
            'getParentAccessUrl',
            'onParentAccessDone',
            'onBeforeScreenDone',
        ]);
        this.params = null;
        this.oauthToken = '';
        this.oauthTokenStatus = null;
    }
    getOauthToken() {
        this.methodCalled('getOauthToken');
        return Promise.resolve({
            oauthToken: this.oauthToken,
            status: this.oauthTokenStatus,
        });
    }
    onParentAccessCallbackReceived() {
        this.methodCalled('onParentAccessCallbackReceived');
        return Promise.resolve({ message: { type: 0 } });
    }
    getParentAccessParams() {
        this.methodCalled('getParentAccessParams');
        return Promise.resolve({ params: this.params });
    }
    getParentAccessUrl() {
        this.methodCalled('getParentAccessUrl');
        return Promise.resolve({ url: 'https://families.google.com/parentaccess' });
    }
    onParentAccessDone(parentAccessResult) {
        this.methodCalled('onParentAccessDone', parentAccessResult);
        return Promise.resolve();
    }
    onBeforeScreenDone() {
        this.methodCalled('onBeforeScreenDone');
        return Promise.resolve();
    }
    setParentAccessParams(params) {
        this.params = params;
    }
    setOauthTokenStatus(token, status) {
        this.oauthToken = token;
        this.oauthTokenStatus = status;
    }
}
