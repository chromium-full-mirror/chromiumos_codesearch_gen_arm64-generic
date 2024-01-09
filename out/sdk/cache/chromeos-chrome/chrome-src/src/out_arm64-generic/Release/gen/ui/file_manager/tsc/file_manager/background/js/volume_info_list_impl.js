// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The container of the VolumeInfo for each mounted volume.
 */
import { ArrayDataModel } from '../../common/js/array_data_model.js';
export class VolumeInfoListImpl extends ArrayDataModel {
    constructor() {
        super([]);
    }
    add(volumeInfo) {
        const index = this.findIndex(volumeInfo.volumeId);
        if (index !== -1) {
            super.splice(index, 1, volumeInfo);
        }
        else {
            super.push(volumeInfo);
        }
    }
    remove(volumeId) {
        const index = this.findIndex(volumeId);
        if (index !== -1) {
            super.splice(index, 1);
        }
    }
    item(index) {
        return super.item(index);
    }
    /**
     * Obtains an index from the volume ID.
     */
    findIndex(volumeId) {
        for (let i = 0; i < this.length; i++) {
            if (this.item(i).volumeId === volumeId) {
                return i;
            }
        }
        return -1;
    }
}
