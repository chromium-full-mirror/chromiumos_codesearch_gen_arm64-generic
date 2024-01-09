// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestLifetimeBrowserProxy extends TestBrowserProxy {
    showRelaunchConfirmationDialog;
    confirmationDialogDescription;
    constructor() {
        super([
            'restart',
            'relaunch',
            'signOutAndRestart',
            'factoryReset',
            'shouldShowRelaunchConfirmationDialog',
            'getRelaunchConfirmationDialogDescription',
        ]);
        this.showRelaunchConfirmationDialog = true;
        this.confirmationDialogDescription = null;
    }
    setRelaunchConfirmationDialog(showConfirmationDialog) {
        this.showRelaunchConfirmationDialog = showConfirmationDialog;
    }
    setConfirmationDialogDescription(dialogDescription) {
        this.confirmationDialogDescription = dialogDescription;
    }
    restart() {
        this.methodCalled('restart');
    }
    relaunch() {
        this.methodCalled('relaunch');
    }
    signOutAndRestart() {
        this.methodCalled('signOutAndRestart');
    }
    factoryReset(requestTpmFirmwareUpdate) {
        this.methodCalled('factoryReset', requestTpmFirmwareUpdate);
    }
    shouldShowRelaunchConfirmationDialog() {
        this.methodCalled('shouldShowRelaunchConfirmationDialog');
        return Promise.resolve(this.showRelaunchConfirmationDialog);
    }
    getRelaunchConfirmationDialogDescription() {
        this.methodCalled('getRelaunchConfirmationDialogDescription');
        return Promise.resolve(this.confirmationDialogDescription);
    }
}
