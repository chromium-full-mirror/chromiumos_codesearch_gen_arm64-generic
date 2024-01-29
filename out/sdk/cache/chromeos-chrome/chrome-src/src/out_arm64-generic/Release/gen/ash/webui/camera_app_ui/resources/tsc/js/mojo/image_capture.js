// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertExists } from '../assert.js';
import { bitmapToJpegBlob, getNumberEnumMapping } from '../util.js';
import { WaitableEvent } from '../waitable_event.js';
import { DeviceOperator, parseMetadata } from './device_operator.js';
import { CameraMetadataTag, Effect, StreamType, } from './type.js';
import { closeEndpoint, } from './util.js';
/**
 * Creates the wrapper of JS image-capture and Mojo image-capture.
 */
export class CrosImageCapture {
    /**
     * @param videoTrack A video track whose still images will be taken.
     */
    constructor(videoTrack) {
        /**
         * Pending events waiting for arrival of their corresponding metadata.
         */
        this.pendingResultForMetadata = [];
        /**
         * The observer endpoint for saving metadata. It will be null if no observer
         * is registered.
         */
        this.metadataObserver = null;
        this.deviceId = assertExists(videoTrack.getSettings().deviceId);
        this.capture = new ImageCapture(videoTrack);
    }
    /**
     * Gets the photo capabilities with the available options/effects.
     */
    async getPhotoCapabilities() {
        return this.capture.getPhotoCapabilities();
    }
    /**
     * Takes single or multiple photo(s) with given |photoSettings| and
     * |photoEffects|. The amount of result photo(s) depends on the given
     * |photoSettings| and |photoEffects|, and the first promise of the returned
     * array will always be resolved with the unreprocessed photo. The returned
     * array will be resolved once it received the shutter event.
     *
     * @param photoSettings Photo settings for ImageCapture's takePhoto().
     * @param photoEffects Photo effects to be applied.
     */
    async takePhoto(photoSettings, photoEffects = []) {
        const deviceOperator = DeviceOperator.getInstance();
        if (deviceOperator === null) {
            if (photoEffects.length > 0) {
                throw new Error('Applying effects is not supported on this device');
            }
            return [{
                    pendingBlob: this.capture.takePhoto(photoSettings),
                    pendingMetadata: null,
                }];
        }
        const getMetadata = (() => {
            // The amount should be the length of |photoEffects| plus |reference|.
            const numMetadata = photoEffects.length + 1;
            const arr = [];
            for (let i = 0; i < numMetadata; i++) {
                if (this.metadataObserver === null) {
                    arr.push(null);
                }
                else {
                    const pendingMetadata = new WaitableEvent();
                    this.pendingResultForMetadata.push(pendingMetadata);
                    arr.push(pendingMetadata.wait());
                }
            }
            return arr;
        });
        const doTakes = (async () => {
            const metadataArr = getMetadata();
            const blobs = [];
            if (photoEffects.length === 0) {
                blobs.push(this.capture.takePhoto(photoSettings));
            }
            else {
                assert(photoEffects.length === 1 &&
                    photoEffects[0] === Effect.kPortraitMode);
                const portraitBlobs = await deviceOperator.takePortraitModePhoto(this.deviceId);
                blobs.push(...portraitBlobs);
            }
            // Assuming the metadata is returned according to the order:
            // [reference, effect_1, effect_2, ...]
            return blobs.map((blob, index) => {
                return { pendingBlob: blob, pendingMetadata: metadataArr[index] };
            });
        });
        const onShutterDone = new WaitableEvent();
        const shutterObserver = await deviceOperator.addShutterObserver(this.deviceId, () => {
            onShutterDone.signal();
        });
        const takes = doTakes();
        await onShutterDone.wait();
        closeEndpoint(shutterObserver);
        return takes;
    }
    grabFrame() {
        return this.capture.grabFrame();
    }
    /**
     * @return Returns jpeg blob of the grabbed frame.
     */
    async grabJpegFrame() {
        const bitmap = await this.capture.grabFrame();
        return bitmapToJpegBlob(bitmap);
    }
    /**
     * Adds an observer to save image metadata.
     */
    async addMetadataObserver() {
        if (this.metadataObserver !== null) {
            return;
        }
        const deviceOperator = DeviceOperator.getInstance();
        if (deviceOperator === null) {
            return;
        }
        const cameraMetadataTagInverseLookup = {};
        for (const [key, value] of Object.entries(getNumberEnumMapping(CameraMetadataTag))) {
            if (key === 'MIN_VALUE' || key === 'MAX_VALUE') {
                continue;
            }
            cameraMetadataTagInverseLookup[value] = key;
        }
        const callback = (metadata) => {
            const parsedMetadata = {};
            // TODO(b/215648588): Make CameraMetadata.entries mandatory.
            assert(metadata.entries !== undefined);
            for (const entry of metadata.entries) {
                const key = cameraMetadataTagInverseLookup[entry.tag];
                if (key === undefined) {
                    // TODO(kaihsien): Add support for vendor tags.
                    continue;
                }
                const val = parseMetadata(entry);
                parsedMetadata[key] = val;
            }
            assertExists(this.pendingResultForMetadata.shift())
                .signal(parsedMetadata);
        };
        this.metadataObserver = await deviceOperator.addMetadataObserver(this.deviceId, callback, StreamType.kJpegOutput);
    }
    removeMetadataObserver() {
        if (this.metadataObserver === null) {
            return;
        }
        closeEndpoint(this.metadataObserver);
        this.metadataObserver = null;
    }
}
