// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { LoaderType, LoadTarget } from './thumbnail_loader.js';
/**
 * Mock thumbnail loader.
 */
export class MockThumbnailLoader {
    static { this.testImageDataUrl = null; }
    static { this.testImageWidth = 0; }
    static { this.testImageHeight = 0; }
    static { this.errorUrls = []; }
    /**
     * @param entry An entry.
     * @param loaderType Loader type.
     * @param metadata Metadata.
     * @param mediaType Media type.
     * @param loadTargets Load targets.
     * @param priority Priority.
     */
    constructor(entry_, _loaderType, _metadata, _mediaType, _loadTargets, _priority) {
        this.entry_ = entry_;
    }
    /**
     * Loads thumbnail as data url.
     *
     * @return A promise which is resolved with data url.
     */
    async loadAsDataUrl() {
        if (MockThumbnailLoader.errorUrls.indexOf(this.entry_.toURL()) !== -1) {
            throw new Error('Failed to load thumbnail.');
        }
        return Promise.resolve({
            data: MockThumbnailLoader.testImageDataUrl,
            width: MockThumbnailLoader.testImageWidth,
            height: MockThumbnailLoader.testImageHeight,
        });
    }
}
