// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as webcamUtils from 'chrome://resources/ash/common/cr_picture/webcam_utils.js';
/**
 * @fileoverview methods to make it easier to mock out functions for testing.
 */
let webcamUtilsInstance = webcamUtils;
/** Set a mock value for testing. */
export function setWebcamUtilsForTesting(replacement) {
    webcamUtilsInstance = replacement;
}
export function getWebcamUtils() {
    return webcamUtilsInstance;
}
let instance = null;
/** Wrapper around browser media API to mock out for tests. */
export class GetUserMediaProxy {
    static setInstanceForTesting(replacement) {
        instance = replacement;
    }
    static getInstance() {
        return instance || (instance = new GetUserMediaProxy());
    }
    getUserMedia() {
        return navigator.mediaDevices.getUserMedia({
            audio: false,
            video: getWebcamUtils().kDefaultVideoConstraints,
        });
    }
}
