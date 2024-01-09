// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestKioskBrowserProxy extends TestBrowserProxy {
    initialSettings_;
    appSettings_;
    constructor() {
        super([
            'initializeKioskAppSettings',
            'getKioskAppSettings',
            'addKioskApp',
            'disableKioskAutoLaunch',
            'enableKioskAutoLaunch',
            'removeKioskApp',
            'setDisableBailoutShortcut',
        ]);
        this.initialSettings_ = {
            kioskEnabled: true,
            autoLaunchEnabled: false,
        };
        this.appSettings_ = {
            apps: [],
            disableBailout: false,
            hasAutoLaunchApp: false,
        };
    }
    setAppSettings(settings) {
        this.appSettings_ = settings;
    }
    setInitialSettings(settings) {
        this.initialSettings_ = settings;
    }
    initializeKioskAppSettings() {
        this.methodCalled('initializeKioskAppSettings');
        return Promise.resolve(this.initialSettings_);
    }
    getKioskAppSettings() {
        this.methodCalled('getKioskAppSettings');
        return Promise.resolve(this.appSettings_);
    }
    addKioskApp(appId) {
        this.methodCalled('addKioskApp', appId);
    }
    disableKioskAutoLaunch(appId) {
        this.methodCalled('disableKioskAutoLaunch', appId);
    }
    enableKioskAutoLaunch(appId) {
        this.methodCalled('enableKioskAutoLaunch', appId);
    }
    removeKioskApp(appId) {
        this.methodCalled('removeKioskApp', appId);
    }
    setDisableBailoutShortcut(disableBailout) {
        this.methodCalled('setDisableBailoutShortcut', disableBailout);
    }
}
