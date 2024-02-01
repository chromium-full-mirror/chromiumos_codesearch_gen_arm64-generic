// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestExtensionsHatsBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'panelShown',
            'extensionKeptAction',
            'extensionRemovedAction',
            'nonTriggerExtensionRemovedAction',
            'removeAllAction',
        ]);
    }
    panelShown() {
        this.methodCalled('panelShown');
    }
    extensionKeptAction() {
        this.methodCalled('extensionKeptAction');
    }
    extensionRemovedAction() {
        this.methodCalled('extensionRemovedAction');
    }
    nonTriggerExtensionRemovedAction() {
        this.methodCalled('nonTriggerExtensionRemovedAction');
    }
    removeAllAction(numberOfExtensionsRemoved) {
        this.methodCalled('removeAllAction', [numberOfExtensionsRemoved]);
    }
}
