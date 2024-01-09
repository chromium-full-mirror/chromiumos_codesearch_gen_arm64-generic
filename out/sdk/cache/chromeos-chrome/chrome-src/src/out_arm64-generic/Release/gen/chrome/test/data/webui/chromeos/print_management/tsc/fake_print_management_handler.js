// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class FakePrintManagementHandler {
    launchPrinterSettingsCount = 0;
    lastLaunchSource = null;
    constructor() {
        this.resetForTest();
    }
    launchPrinterSettings(source) {
        ++this.launchPrinterSettingsCount;
        this.lastLaunchSource = source;
    }
    getLaunchPrinterSettingsCount() {
        return this.launchPrinterSettingsCount;
    }
    getLastLaunchSource() {
        return this.lastLaunchSource;
    }
    resetForTest() {
        this.launchPrinterSettingsCount = 0;
        this.lastLaunchSource = null;
    }
}
