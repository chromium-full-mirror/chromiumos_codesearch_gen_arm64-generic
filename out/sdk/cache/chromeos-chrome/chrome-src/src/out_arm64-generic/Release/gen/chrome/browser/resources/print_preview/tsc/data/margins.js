// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Enumeration of the orientations of margins.
 */
export var CustomMarginsOrientation;
(function (CustomMarginsOrientation) {
    CustomMarginsOrientation["TOP"] = "top";
    CustomMarginsOrientation["RIGHT"] = "right";
    CustomMarginsOrientation["BOTTOM"] = "bottom";
    CustomMarginsOrientation["LEFT"] = "left";
})(CustomMarginsOrientation || (CustomMarginsOrientation = {}));
/**
 * Must be kept in sync with the C++ MarginType enum in
 * printing/print_job_constants.h.
 */
export var MarginsType;
(function (MarginsType) {
    MarginsType[MarginsType["DEFAULT"] = 0] = "DEFAULT";
    MarginsType[MarginsType["NO_MARGINS"] = 1] = "NO_MARGINS";
    MarginsType[MarginsType["MINIMUM"] = 2] = "MINIMUM";
    MarginsType[MarginsType["CUSTOM"] = 3] = "CUSTOM";
})(MarginsType || (MarginsType = {}));
export class Margins {
    /**
     * Creates a Margins object that holds four margin values in points.
     */
    constructor(top, right, bottom, left) {
        /**
         * Backing store for the margin values in points. The numbers are stored as
         * integer values, because that is what the C++ `printing::PageMargins` class
         * expects.
         */
        this.value_ = { top: 0, bottom: 0, left: 0, right: 0 };
        this.value_ = {
            top: Math.round(top),
            right: Math.round(right),
            bottom: Math.round(bottom),
            left: Math.round(left),
        };
    }
    /**
     * @param orientation Specifies the margin value to get.
     * @return Value of the margin of the given orientation.
     */
    get(orientation) {
        return this.value_[orientation];
    }
    /**
     * @param orientation Specifies the margin to set.
     * @param value Updated value of the margin in points to modify.
     * @return A new copy of |this| with the modification made to the specified
     *     margin.
     */
    set(orientation, value) {
        const newValue = this.clone_();
        newValue[orientation] = value;
        return new Margins(newValue[CustomMarginsOrientation.TOP], newValue[CustomMarginsOrientation.RIGHT], newValue[CustomMarginsOrientation.BOTTOM], newValue[CustomMarginsOrientation.LEFT]);
    }
    /**
     * @param other The other margins object to compare against.
     * @return Whether this margins object is equal to another.
     */
    equals(other) {
        if (other === null) {
            return false;
        }
        for (const key in this.value_) {
            const orientation = key;
            if (this.value_[orientation] !== other.value_[orientation]) {
                return false;
            }
        }
        return true;
    }
    /** @return A serialized representation of the margins. */
    serialize() {
        return this.clone_();
    }
    clone_() {
        const clone = { top: 0, bottom: 0, left: 0, right: 0 };
        for (const o in this.value_) {
            const orientation = o;
            clone[orientation] = this.value_[orientation];
        }
        return clone;
    }
}
