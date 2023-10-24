// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class Size {
    /**
     * Immutable two-dimensional size.
     */
    constructor(width, height) {
        this.width_ = width;
        this.height_ = height;
    }
    get width() {
        return this.width_;
    }
    get height() {
        return this.height_;
    }
    equals(other) {
        return other !== null && this.width_ === other.width_ &&
            this.height_ === other.height_;
    }
}
