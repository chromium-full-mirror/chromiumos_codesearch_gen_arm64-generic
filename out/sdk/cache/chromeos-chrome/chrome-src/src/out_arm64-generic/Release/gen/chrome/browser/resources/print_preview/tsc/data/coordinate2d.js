// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class Coordinate2d {
    /**
     * Immutable two dimensional point in space. The units of the dimensions are
     * undefined.
     * @param x X-dimension of the point.
     * @param y Y-dimension of the point.
     */
    constructor(x, y) {
        this.x_ = x;
        this.y_ = y;
    }
    get x() {
        return this.x_;
    }
    get y() {
        return this.y_;
    }
    equals(other) {
        return other !== null && this.x_ === other.x_ && this.y_ === other.y_;
    }
}
