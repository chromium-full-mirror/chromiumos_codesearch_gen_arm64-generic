// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://os-settings/os_settings.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestSwitchAccessSubpageBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'refreshAssignmentsFromPrefs',
            'notifySwitchAccessActionAssignmentPaneActive',
            'notifySwitchAccessActionAssignmentPaneInactive',
            'notifySwitchAccessSetupGuideAttached',
        ]);
    }
    refreshAssignmentsFromPrefs() {
        this.methodCalled('refreshAssignmentsFromPrefs');
    }
    notifySwitchAccessActionAssignmentPaneActive() {
        this.methodCalled('notifySwitchAccessActionAssignmentPaneActive');
    }
    notifySwitchAccessActionAssignmentPaneInactive() {
        this.methodCalled('notifySwitchAccessActionAssignmentPaneInactive');
    }
    notifySwitchAccessSetupGuideAttached() {
        this.methodCalled('notifySwitchAccessSetupGuideAttached');
    }
}
