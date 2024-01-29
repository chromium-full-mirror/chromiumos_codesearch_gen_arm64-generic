// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Fake implementation of chrome.system.display for testing.
 */
import { assert } from 'chrome://resources/js/assert.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { FakeChromeEvent } from 'chrome://webui-test/fake_chrome_event.js';
/**
 * Fake of the chrome.system.display API.
 */
export class FakeSystemDisplay {
    fakeDisplays = [];
    fakeLayouts = [];
    getInfoCalled = new PromiseResolver();
    getLayoutCalled = new PromiseResolver();
    overscanCalibrationStartCalled = 0;
    overscanCalibrationResetCalled = 0;
    overscanCalibrationCompleteCalled = 0;
    onDisplayChanged = new FakeChromeEvent();
    // The following properties mirror the necessary enum members.
    /* eslint-disable @typescript-eslint/naming-convention */
    LayoutPosition = chrome.system.display.LayoutPosition;
    ActiveState = chrome.system.display.ActiveState;
    MirrorMode = chrome.system.display.MirrorMode;
    /* eslint-enable @typescript-eslint/naming-convention */
    addDisplayForTest(display) {
        this.fakeDisplays.push(display);
        this.updateLayouts_();
    }
    getInfo(_flags) {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Create a shallow copy to trigger Polymer data binding updates.
                let displays = [];
                if (this.fakeDisplays.length > 0 &&
                    this.fakeDisplays[0].mirroringSourceId) {
                    // When mirroring is enabled, send only the info for the display
                    // being mirrored.
                    const display = this.getFakeDisplay_(this.fakeDisplays[0].mirroringSourceId);
                    assert(display);
                    displays = [display];
                }
                else {
                    displays = this.fakeDisplays.slice();
                }
                resolve(displays);
                this.getInfoCalled.resolve(null);
                // Reset the promise resolver.
                this.getInfoCalled = new PromiseResolver();
            });
        });
    }
    setDisplayProperties(id, info) {
        const display = this.getFakeDisplay_(id);
        if (!display) {
            chrome.runtime.lastError = { message: 'Display not found.' };
            return Promise.reject();
        }
        if (info.mirroringSourceId !== undefined) {
            for (const d of this.fakeDisplays) {
                d.mirroringSourceId = info.mirroringSourceId;
            }
        }
        if (info.isPrimary !== undefined) {
            let havePrimary = info.isPrimary;
            for (const fakeDisplay of this.fakeDisplays) {
                if (fakeDisplay.id === id) {
                    fakeDisplay.isPrimary = info.isPrimary;
                }
                else if (havePrimary) {
                    fakeDisplay.isPrimary = false;
                }
                else {
                    fakeDisplay.isPrimary = true;
                    havePrimary = true;
                }
            }
            this.updateLayouts_();
        }
        if (info.rotation !== undefined) {
            display.rotation = info.rotation;
        }
        return Promise.resolve();
    }
    getDisplayLayout() {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Create a shallow copy to trigger Polymer data binding updates.
                resolve(this.fakeLayouts.slice());
                this.getLayoutCalled.resolve(null);
                // Reset the promise resolver.
                this.getLayoutCalled = new PromiseResolver();
            });
        });
    }
    async setDisplayLayout(layouts) {
        this.fakeLayouts = layouts;
    }
    async setMirrorMode(info) {
        let mirroringSourceId = '';
        if (info.mode === this.MirrorMode.NORMAL) {
            // Select the primary display as the mirroring source.
            for (const fakeDisplay of this.fakeDisplays) {
                if (fakeDisplay.isPrimary) {
                    mirroringSourceId = fakeDisplay.id;
                    break;
                }
            }
        }
        for (const fakeDisplay of this.fakeDisplays) {
            fakeDisplay.mirroringSourceId = mirroringSourceId;
        }
    }
    // The below method is overridden to provide TS compatibility for tests.
    // But this is an unused method and hence doesn't have any implementation.
    overscanCalibrationAdjust(_id) { }
    async overscanCalibrationStart() {
        this.overscanCalibrationStartCalled++;
    }
    async overscanCalibrationReset() {
        this.overscanCalibrationResetCalled++;
    }
    async overscanCalibrationComplete() {
        this.overscanCalibrationCompleteCalled++;
    }
    async showNativeTouchCalibration(_id) {
        return true;
    }
    getFakeDisplay_(id) {
        return this.fakeDisplays.find((display) => {
            return display.id === id;
        });
    }
    updateLayouts_() {
        this.fakeLayouts = [];
        let primaryId = '';
        for (const fakeDisplay of this.fakeDisplays) {
            if (fakeDisplay.isPrimary) {
                primaryId = fakeDisplay.id;
                break;
            }
        }
        this.fakeLayouts = this.fakeDisplays.map((fakeDisplay) => {
            return {
                id: fakeDisplay.id,
                parentId: fakeDisplay.isPrimary ? '' : primaryId,
                position: this.LayoutPosition.RIGHT,
                offset: 0,
            };
        });
    }
}
