// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from '../../assert.js';
import { I18nString } from '../../i18n_string.js';
import { Effect } from '../../mojo/type.js';
import * as toast from '../../toast.js';
import { Resolution, } from '../../type.js';
import * as util from '../../util.js';
import { Photo, PhotoFactory, } from './photo.js';
/**
 * Portrait mode capture controller.
 */
export class Portrait extends Photo {
    constructor(video, facing, captureResolution, portraitHandler) {
        super(video, facing, captureResolution, portraitHandler);
        this.portraitHandler = portraitHandler;
    }
    async start() {
        const timestamp = Date.now();
        let photoSettings;
        if (this.captureResolution !== null) {
            photoSettings = {
                imageWidth: this.captureResolution.width,
                imageHeight: this.captureResolution.height,
            };
        }
        else {
            const caps = await this.getImageCapture().getPhotoCapabilities();
            photoSettings = {
                imageWidth: caps.imageWidth.max,
                imageHeight: caps.imageHeight.max,
            };
        }
        let reference;
        let portrait;
        try {
            [reference, portrait] = await this.getImageCapture().takePhoto(photoSettings, [Effect.PORTRAIT_MODE]);
            this.portraitHandler.playShutterEffect();
        }
        catch (e) {
            toast.show(I18nString.ERROR_MSG_TAKE_PHOTO_FAILED);
            throw e;
        }
        async function toPhotoResult(pendingResult) {
            const blob = await pendingResult.pendingBlob;
            const image = await util.blobToImage(blob);
            const resolution = new Resolution(image.width, image.height);
            const metadata = await pendingResult.pendingMetadata;
            return { blob, timestamp, resolution, metadata };
        }
        return [this.portraitHandler.onPortraitCaptureDone(toPhotoResult(reference), toPhotoResult(portrait))];
    }
}
/**
 * Factory for creating portrait mode capture object.
 */
export class PortraitFactory extends PhotoFactory {
    /**
     * @param constraints Constraints for preview stream.
     */
    constructor(constraints, captureResolution, portraitHandler) {
        super(constraints, captureResolution, portraitHandler);
        this.portraitHandler = portraitHandler;
    }
    produce() {
        assert(this.previewVideo !== null);
        assert(this.facing !== null);
        return new Portrait(this.previewVideo, this.facing, this.captureResolution, this.portraitHandler);
    }
}
