// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { setDefaultUserImagesAction, setUserInfoAction } from './user_actions.js';
/**
 * @fileoverview provides functions to fetch and set user info.
 */
export async function initializeUserData(provider, store) {
    const { userInfo } = await provider.getUserInfo();
    store.dispatch(setUserInfoAction(userInfo));
}
export async function fetchDefaultUserImages(provider, store) {
    const { defaultUserImages } = await provider.getDefaultUserImages();
    store.dispatch(setDefaultUserImagesAction(defaultUserImages));
}
export function saveCameraImage(pngBinary, userProvider) {
    const numBytes = pngBinary.byteLength;
    const { handle, result: createSharedBufferResult } = Mojo.createSharedBuffer(numBytes);
    assert(createSharedBufferResult === Mojo.RESULT_OK, 'Could not create shared buffer');
    const { buffer, result: mapBufferResult } = handle.mapBuffer(0, numBytes);
    assert(mapBufferResult === Mojo.RESULT_OK, 'Could not map shared buffer');
    const uint8View = new Uint8Array(buffer);
    uint8View.set(pngBinary);
    const sharedMemory = { bufferHandle: handle, size: numBytes };
    // Cast to any first because types inferred from generated closure compiler
    // annotations are incorrect.
    const bigBuffer = { sharedMemory };
    userProvider.selectCameraImage(bigBuffer);
}
