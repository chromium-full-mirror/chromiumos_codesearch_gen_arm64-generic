// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { MetadataItem } from './metadata_item.js';
/**
 * Cache of metadata for a FileEntry.
 */
export class MetadataCacheItem {
    constructor() {
        /**
         * Map of property name and MetadataCacheItemProperty.
         */
        this.properties_ = {};
    }
    /**
     * Creates requested names that need to be loaded.
     * @return Property names that need to be loaded.
     */
    createRequests(names) {
        const loadRequested = [];
        for (const name of names) {
            assert(!/Error$/.test(name));
            // Check if the property needs to be updated.
            const property = this.properties_[name];
            if (property &&
                property.state !== MetadataCacheItemPropertyState.INVALIDATED) {
                continue;
            }
            loadRequested.push(name);
        }
        return loadRequested;
    }
    /**
     * Marks the given properties as loading.
     */
    startRequests(requestId, names) {
        for (const name of names) {
            assert(!/Error$/.test(name));
            if (!this.properties_[name]) {
                this.properties_[name] = new MetadataCacheItemProperty();
            }
            this.properties_[name].requestId = requestId;
            this.properties_[name].state = MetadataCacheItemPropertyState.LOADING;
        }
    }
    /**
     * Feeds the result of startRequests.
     * @param requestId Request ID passed when calling startRequests.
     * @param typedObject Map of property name and value.
     * @return Whether at least one property is updated or not.
     */
    storeProperties(requestId, typedObject) {
        let changed = false;
        for (const name in typedObject) {
            if (/.Error$/.test(name) && typedObject[name]) {
                typedObject[name.substr(0, name.length - 5)] = undefined;
            }
        }
        for (const _name in typedObject) {
            if (/.Error$/.test(_name)) {
                continue;
            }
            const name = _name;
            if (!this.properties_[name]) {
                this.properties_[name] = new MetadataCacheItemProperty();
            }
            if (requestId < this.properties_[name].requestId ||
                this.properties_[name].state ===
                    MetadataCacheItemPropertyState.FULFILLED) {
                continue;
            }
            changed = true;
            this.properties_[name].requestId = requestId;
            this.properties_[name].value = typedObject[name];
            const errorKey = `${name}Error`;
            this.properties_[name].error =
                typedObject[errorKey];
            this.properties_[name].state = MetadataCacheItemPropertyState.FULFILLED;
        }
        return changed;
    }
    /**
     * Marks the caches of all properties in the item as invalidates and forces to
     * reload at the next time of startRequests. Optionally, takes an array of
     * names and only invalidates those.
     * @param requestId Request ID of the invalidation request. This must
     *     be larger than other requests ID passed to the item before.
     */
    invalidate(requestId, names) {
        const namesToInvalidate = names ?
            names.filter(n => this.properties_[n]) :
            Object.keys(this.properties_);
        for (const name of namesToInvalidate) {
            assert(this.properties_[name].requestId < requestId);
            this.properties_[name].requestId = requestId;
            this.properties_[name].state =
                MetadataCacheItemPropertyState.INVALIDATED;
        }
    }
    /**
     * Obtains property for entries and names.
     * Note that it returns invalidated properties also.
     */
    get(names) {
        const result = new MetadataItem();
        for (const name of names) {
            assert(!/Error$/.test(name));
            if (this.properties_[name]) {
                // `undefined` is the intersection of all possible properties of
                // MetadataItem.
                result[name] = this.properties_[name].value;
                const errorKey = `${name}Error`;
                // TODO(TS): check ... if (!(errorKey in result)){
                result[errorKey] =
                    this.properties_[name].error;
            }
        }
        return result;
    }
    /**
     * Creates deep copy of the item.
     */
    clone() {
        const clonedItem = new MetadataCacheItem();
        for (const name in this.properties_) {
            const property = this.properties_[name];
            const newItemProperties = new MetadataCacheItemProperty();
            newItemProperties.value = property.value;
            newItemProperties.error = property.error;
            newItemProperties.requestId = property.requestId;
            newItemProperties.state = property.state;
            clonedItem.properties_[name] = newItemProperties;
        }
        return clonedItem;
    }
    /**
     * Returns whether all the given properties are fulfilled.
     * @param names Property names.
     */
    hasFreshCache(names) {
        for (const name of names) {
            const property = this.properties_[name];
            if (!(property &&
                property.state === MetadataCacheItemPropertyState.FULFILLED)) {
                return false;
            }
        }
        return true;
    }
}
var MetadataCacheItemPropertyState;
(function (MetadataCacheItemPropertyState) {
    MetadataCacheItemPropertyState["INVALIDATED"] = "invalidated";
    MetadataCacheItemPropertyState["LOADING"] = "loading";
    MetadataCacheItemPropertyState["FULFILLED"] = "fulfilled";
})(MetadataCacheItemPropertyState || (MetadataCacheItemPropertyState = {}));
/**
 * Cache of metadata for a property.
 */
class MetadataCacheItemProperty {
    constructor() {
        /**
         * Cached value of property.
         */
        this.value = null;
        this.error = undefined;
        /**
         * Last request ID.
         */
        this.requestId = -1;
        /**
         * Cache state of the property.
         */
        this.state = MetadataCacheItemPropertyState.INVALIDATED;
    }
}
