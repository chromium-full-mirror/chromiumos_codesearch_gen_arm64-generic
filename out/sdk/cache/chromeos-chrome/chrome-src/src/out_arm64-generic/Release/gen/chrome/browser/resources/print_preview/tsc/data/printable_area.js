// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class PrintableArea {
    /**
     * Object describing the printable area of a page in the document.
     * @param origin Top left corner of the printable area of the document.
     * @param size Size of the printable area of the document.
     */
    constructor(origin, size) {
        this.origin_ = origin;
        this.size_ = size;
    }
    get origin() {
        return this.origin_;
    }
    get size() {
        return this.size_;
    }
    equals(other) {
        return other !== null && this.origin_.equals(other.origin_) &&
            this.size_.equals(other.size_);
    }
}
