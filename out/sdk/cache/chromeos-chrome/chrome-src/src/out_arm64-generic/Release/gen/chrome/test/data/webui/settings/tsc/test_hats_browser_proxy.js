// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestHatsBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'trustSafetyInteractionOccurred',
            'securityPageHatsRequest',
            'now',
        ]);
        this.currentTime = 0;
    }
    trustSafetyInteractionOccurred(interaction) {
        this.methodCalled('trustSafetyInteractionOccurred', interaction);
    }
    securityPageHatsRequest(securityPageInteraction, safeBrowsingSetting, totalTimeOnPage) {
        this.methodCalled('securityPageHatsRequest', [securityPageInteraction, safeBrowsingSetting, totalTimeOnPage]);
    }
    setNow(now) {
        this.currentTime = now;
    }
    now() {
        this.methodCalled('now', this.currentTime);
        return this.currentTime;
    }
}
