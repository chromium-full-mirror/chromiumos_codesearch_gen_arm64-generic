// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let mediaDevicesInstance = null;
export class MediaDevicesProxy {
    static getMediaDevices() {
        return mediaDevicesInstance || navigator.mediaDevices;
    }
    static setMediaDevicesForTesting(obj) {
        mediaDevicesInstance = obj;
    }
}
