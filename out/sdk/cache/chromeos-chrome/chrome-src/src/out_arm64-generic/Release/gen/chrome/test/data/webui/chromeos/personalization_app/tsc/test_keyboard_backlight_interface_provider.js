// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { BacklightColor } from 'chrome://personalization/js/personalization_app.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestKeyboardBacklightProvider extends TestBrowserProxy {
    zoneCount = 5;
    zoneColors = [
        BacklightColor.kBlue,
        BacklightColor.kRed,
        BacklightColor.kWallpaper,
        BacklightColor.kYellow,
    ];
    currentBacklightState = { color: BacklightColor.kBlue };
    constructor() {
        super([
            'setKeyboardBacklightObserver',
            'setBacklightColor',
            'setBacklightZoneColor',
            'shouldShowNudge',
            'handleNudgeShown',
        ]);
    }
    keyboardBacklightObserverRemote = null;
    setZoneCount(zoneCount) {
        this.zoneCount = zoneCount;
    }
    setCurrentBacklightState(backlightState) {
        this.currentBacklightState = backlightState;
    }
    setBacklightColor(backlightColor) {
        this.methodCalled('setBacklightColor', backlightColor);
    }
    setBacklightZoneColor(zone, backlightColor) {
        this.methodCalled('setBacklightZoneColor', zone, backlightColor);
    }
    shouldShowNudge() {
        this.methodCalled('shouldShowNudge');
        return Promise.resolve({ shouldShowNudge: true });
    }
    handleNudgeShown() {
        this.methodCalled('handleNudgeShown');
    }
    setKeyboardBacklightObserver(remote) {
        this.methodCalled('setKeyboardBacklightObserver', remote);
        this.keyboardBacklightObserverRemote = remote;
    }
    fireOnBacklightStateChanged(currentBacklightState) {
        this.keyboardBacklightObserverRemote.onBacklightStateChanged(currentBacklightState);
    }
    fireOnWallpaperColorChanged(wallpaperColor) {
        this.keyboardBacklightObserverRemote.onWallpaperColorChanged(wallpaperColor);
    }
}
