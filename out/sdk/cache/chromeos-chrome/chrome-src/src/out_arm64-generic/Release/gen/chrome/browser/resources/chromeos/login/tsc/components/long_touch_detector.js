// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const LONG_TOUCH_TIME_MS = 1000;
export class LongTouchDetector {
    constructor(element, callback) {
        this.callback = callback;
        this.timeoutId = null;
        element.addEventListener('touchstart', () => void this.onTouchStart());
        element.addEventListener('touchend', () => void this.killTimer());
        element.addEventListener('touchcancel', () => void this.killTimer());
        element.addEventListener('mousedown', () => void this.onTouchStart());
        element.addEventListener('mouseup', () => void this.killTimer());
        element.addEventListener('mouseleave', () => void this.killTimer());
    }
    onTimeout() {
        this.killTimer();
        this.callback();
    }
    onTouchStart() {
        this.killTimer();
        this.timeoutId =
            window.setTimeout(() => void this.onTimeout(), LONG_TOUCH_TIME_MS);
    }
    killTimer() {
        if (this.timeoutId === null) {
            return;
        }
        window.clearTimeout(this.timeoutId);
        this.timeoutId = null;
    }
}
