// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { MetadataItem } from './metadata_item.js';
import { MetadataRequest } from './metadata_request.js';
export class MetadataProvider {
    constructor(validPropertyNames) {
        this.validPropertyNames_ = new Set(validPropertyNames);
    }
    checkPropertyNames(names) {
        // Check if the property name is correct or not.
        for (const propertyName of names) {
            assert(this.validPropertyNames_.has(propertyName), propertyName);
        }
    }
}
