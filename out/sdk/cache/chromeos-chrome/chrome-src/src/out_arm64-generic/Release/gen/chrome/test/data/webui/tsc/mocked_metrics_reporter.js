// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class MockedMetricsReporter {
    mark(_name) { }
    measure(_startMark, _endMark) {
        return Promise.resolve(0n);
    }
    hasMark(_name) {
        return Promise.resolve(false);
    }
    hasLocalMark(_name) {
        return false;
    }
    clearMark(_name) { }
    umaReportTime(_histogram, _time) { }
}
