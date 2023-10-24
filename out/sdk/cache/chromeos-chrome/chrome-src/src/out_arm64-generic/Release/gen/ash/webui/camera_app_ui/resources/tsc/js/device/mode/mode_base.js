// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertInstanceof } from '../../assert.js';
import * as error from '../../error.js';
import { CrosImageCapture } from '../../mojo/image_capture.js';
import { CanceledError, ErrorLevel, ErrorType, } from '../../type.js';
/**
 * Base class for controlling capture sequence in different camera modes.
 */
export class ModeBase {
    /**
     * @param video Preview video.
     * @param facing Camera facing of current mode.
     */
    constructor(video, facing) {
        this.video = video;
        this.facing = facing;
        /**
         * Promise for ongoing capture operation.
         */
        this.capture = null;
        this.crosImageCapture = new CrosImageCapture(video.getVideoTrack());
    }
    /**
     * Initiates video/photo capture operation.
     *
     * @return Promise for the ongoing capture operation. The outer promise is
     *     resolved after the camere usage is finished. The inner promise is
     *     resolved after the post processing part are finished.
     */
    startCapture() {
        if (this.capture === null) {
            this.capture = (async () => {
                try {
                    return await this.start();
                }
                finally {
                    this.capture = null;
                }
            })();
        }
        return this.capture;
    }
    /**
     * Stops the ongoing capture operation.
     */
    async stopCapture() {
        this.stop();
        try {
            await this.capture;
        }
        catch (e) {
            if (e instanceof CanceledError) {
                return;
            }
            error.reportError(ErrorType.STOP_CAPTURE_FAILURE, ErrorLevel.ERROR, assertInstanceof(e, Error));
        }
    }
    getImageCapture() {
        return this.crosImageCapture;
    }
    /**
     * Adds an observer to save image metadata.
     */
    async addMetadataObserver() {
        if (this.video.isExpired()) {
            return;
        }
        await this.crosImageCapture.addMetadataObserver();
    }
    /**
     * Removes the observer that saves metadata.
     */
    removeMetadataObserver() {
        if (!this.video.isExpired()) {
            return;
        }
        this.crosImageCapture.removeMetadataObserver();
    }
    /**
     * Clears everything when mode is not needed anymore.
     */
    async clear() {
        await this.stopCapture();
    }
    /**
     * Stops the ongoing capture operation under this mode.
     */
    stop() {
        // To be overridden by subclass.
    }
}
export class ModeFactory {
    /**
     * @param constraints Constraints for preview stream.
     * @param captureResolution Capture resolution.
     */
    constructor(constraints, captureResolution) {
        this.constraints = constraints;
        this.captureResolution = captureResolution;
        this.previewVideo = null;
        /**
         * Preview stream.
         */
        this.stream = null;
        /**
         * Camera facing of current mode.
         */
        this.facing = null;
    }
    setFacing(facing) {
        this.facing = facing;
    }
    setPreviewVideo(previewVideo) {
        this.previewVideo = previewVideo;
    }
}
