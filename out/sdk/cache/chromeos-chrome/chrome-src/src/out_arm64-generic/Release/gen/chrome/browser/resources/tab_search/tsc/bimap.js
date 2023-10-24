// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'BiMap' is an implementation of a bidirectional map. It
 * facilitates looking up for associated pairs in either direction.
 */
// TODO(romanarora): Investigate leveraging an existing data structures third
// party library or moving this class to a shareable location.
export class BiMap {
    constructor() {
        this.map_ = new Map();
        this.inverseMap_ = new Map();
    }
    get(key) {
        return this.map_.get(key);
    }
    invGet(key) {
        return this.inverseMap_.get(key);
    }
    set(key, value) {
        this.map_.set(key, value);
        this.inverseMap_.set(value, key);
    }
    invSet(key, value) {
        this.inverseMap_.set(key, value);
        this.map_.set(value, key);
    }
    size() {
        return this.map_.size;
    }
}
