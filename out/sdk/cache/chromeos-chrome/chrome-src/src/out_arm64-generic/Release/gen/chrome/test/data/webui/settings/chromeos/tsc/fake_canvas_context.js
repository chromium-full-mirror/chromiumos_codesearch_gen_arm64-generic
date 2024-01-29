// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class FakeCanvasContext {
    clearRectCalls_ = [];
    fillRectCalls_ = [];
    clearRect(x, y, width, height) {
        this.clearRectCalls_.push([x, y, width, height]);
    }
    fillRect(x, y, width, height) {
        this.fillRectCalls_.push([x, y, width, height]);
    }
    getClearRectCalls() {
        return this.clearRectCalls_;
    }
    getFillRectCalls() {
        return this.fillRectCalls_;
    }
}
