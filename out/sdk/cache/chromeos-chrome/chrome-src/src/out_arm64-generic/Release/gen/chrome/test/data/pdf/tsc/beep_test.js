// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
chrome.test.runTests([
    /**
     * Test that the JS was able to call back via "app.beep()"
     */
    function testHasCorrectBeepCount() {
        const viewer = document.body.querySelector('#viewer');
        chrome.test.assertEq(1, viewer.beepCount);
        chrome.test.succeed();
    },
]);
export {};
