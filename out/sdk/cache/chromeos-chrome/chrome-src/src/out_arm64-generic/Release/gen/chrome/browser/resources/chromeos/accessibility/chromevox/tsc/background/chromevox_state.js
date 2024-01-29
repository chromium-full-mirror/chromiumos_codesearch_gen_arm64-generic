// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class ChromeVoxState {
    static instance;
    static position = {};
    static resolveReadyPromise_;
    static readyPromise_ = new Promise(resolve => ChromeVoxState.resolveReadyPromise_ = resolve);
    static ready() {
        return ChromeVoxState.readyPromise_;
    }
}
