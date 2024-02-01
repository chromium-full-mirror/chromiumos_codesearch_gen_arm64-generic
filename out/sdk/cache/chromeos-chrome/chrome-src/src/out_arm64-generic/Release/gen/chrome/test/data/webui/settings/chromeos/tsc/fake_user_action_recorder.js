// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Fake implementation of ash.settings.mojom.UserActionRecorderRemote.
 */
export class FakeUserActionRecorder {
    pageFocusCount = 0;
    pageBlurCount = 0;
    clickCount = 0;
    navigationCount = 0;
    searchCount = 0;
    settingChangeCount = 0;
    recordPageFocus() {
        ++this.pageFocusCount;
    }
    recordPageBlur() {
        ++this.pageBlurCount;
    }
    recordClick() {
        ++this.clickCount;
    }
    recordNavigation() {
        ++this.navigationCount;
    }
    recordSearch() {
        ++this.searchCount;
    }
    recordSettingChange() {
        ++this.settingChangeCount;
    }
    recordSettingChangeWithDetails() {
        ++this.settingChangeCount;
    }
}
