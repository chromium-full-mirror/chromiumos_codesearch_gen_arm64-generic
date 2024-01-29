// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { LitElement } from 'lit/index.js';
export class CrLitElement extends LitElement {
    $;
    constructor() {
        super();
        // Lazily populate a helper `$` object for easy access to any child elements
        // in the `shadowRoot` that have an ID. This works similarly to the
        // equivalent Polymer functionality, except that it can also work for
        // elements that don't exist in the DOM at the time the element is
        // connected. Should only be called after firstUpdated() lifecycle method
        // has been called or within firstUpdated() itself. Children accessed this
        // way are expected to exist in the DOM for the full lifetime of this
        // element (never removed).
        const self = this;
        this.$ = new Proxy({}, {
            get(cache, id) {
                // First look whether the element has already been retrieved previously.
                if (id in cache) {
                    return cache[id];
                }
                // Otherwise query the shadow DOM and cache the reference for later use.
                const element = self.shadowRoot.querySelector(`#${id}`);
                if (element === null) {
                    throw new Error(`CrLitElement: Failed to find child with id ${id}`);
                }
                cache[id] = element;
                return element;
            },
        });
    }
    // Modifies the 'properties' object by automatically specifying
    // "attribute: <attr_name>" for each reactive property where attr_name is a
    // dash-case equivalent of the property's name. For example a 'fooBar'
    // property will be mapped to a 'foo-bar' attribute, matching Polymer's
    // behavior, instead of Lit's default behavior (which would map to 'foobar').
    // This is done to make it easier to migrate Polymer elements to Lit.
    static patchPropertiesObject() {
        if (!this.hasOwnProperty('properties')) {
            // Return early if there's no `properties` block on the element.
            // Note: This does not take into account properties defined with
            // decorators.
            return;
        }
        const properties = this.properties;
        for (const [key, value] of Object.entries(properties)) {
            // Skip properties that explicitly specify the attribute name.
            if (value.attribute != null) {
                continue;
            }
            // Specify a dash-case attribute name, derived from the property name,
            // similar to what Polymer did.
            value.attribute =
                key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        }
        // Mutating the properties object alone isn't enough, in the case where
        // the properties block is defined as a getter, need to also override the
        // getter.
        Object.defineProperty(this, 'properties', { value: properties });
    }
    static finalize() {
        this.patchPropertiesObject();
        super.finalize();
    }
}
