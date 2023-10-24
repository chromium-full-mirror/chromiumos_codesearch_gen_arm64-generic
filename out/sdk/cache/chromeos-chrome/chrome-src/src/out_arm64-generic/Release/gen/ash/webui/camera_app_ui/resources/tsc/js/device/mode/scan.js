// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from '../../assert.js';
import { Point } from '../../geometry.js';
import { ModeFactory } from './mode_base.js';
import { Photo, } from './photo.js';
/**
 * @param size Size of image to be cropped document from.
 */
export function getDefaultScanCorners(size) {
    // No initial guess from scan API, position corners in box of portrait A4
    // size occupied with 80% center area.
    const WIDTH_A4 = 210;
    const HEIGHT_A4 = 297;
    const { width: w, height: h } = size;
    const [width, height] = size.aspectRatio > WIDTH_A4 / HEIGHT_A4 ?
        [h / w * WIDTH_A4 / HEIGHT_A4 * 0.8, 0.8] :
        [0.8, w / h * HEIGHT_A4 / WIDTH_A4 * 0.8];
    return [
        new Point(0.5 - width / 2, 0.5 - height / 2),
        new Point(0.5 - width / 2, 0.5 + height / 2),
        new Point(0.5 + width / 2, 0.5 + height / 2),
        new Point(0.5 + width / 2, 0.5 - height / 2),
    ];
}
class DocumentPhotoHandler {
    constructor(handler) {
        this.handler = handler;
    }
    playShutterEffect() {
        this.handler.playShutterEffect();
    }
    onPhotoError() {
        this.handler.onPhotoError();
    }
    onPhotoCaptureDone(pendingPhotoResult) {
        return this.handler.onDocumentCaptureDone(pendingPhotoResult);
    }
}
/**
 * Scan mode capture controller.
 */
export class Scan extends Photo {
    constructor(video, facing, captureResolution, scanHandler) {
        super(video, facing, captureResolution, new DocumentPhotoHandler(scanHandler));
    }
}
/**
 * Factory for creating scan mode capture object.
 */
export class ScanFactory extends ModeFactory {
    /**
     * @param constraints Constraints for preview stream.
     */
    constructor(constraints, captureResolution, handler) {
        super(constraints, captureResolution);
        this.handler = handler;
    }
    produce() {
        assert(this.previewVideo !== null);
        assert(this.facing !== null);
        return new Scan(this.previewVideo, this.facing, this.captureResolution, this.handler);
    }
}
