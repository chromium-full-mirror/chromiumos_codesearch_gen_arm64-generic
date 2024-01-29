// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Common prefs behavior.
 */
// clang-format off
import { assert } from 'chrome://resources/js/assert.js';
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export const PrefsMixin = dedupingMixin((superClass) => {
    class PrefsMixin extends superClass {
        static get properties() {
            return {
                /** Preferences state. */
                prefs: {
                    type: Object,
                    notify: true,
                },
            };
        }
        /**
         * Gets the pref at the given prefPath. Throws if the pref is not found.
         */
        getPref(prefPath) {
            const pref = this.get(prefPath, this.prefs);
            assert(typeof pref !== 'undefined', 'Pref is missing: ' + prefPath);
            return pref;
        }
        /**
         * Sets the value of the pref at the given prefPath. Throws if the pref
         * is not found.
         */
        setPrefValue(prefPath, value) {
            this.getPref(prefPath); // Ensures we throw if the pref is not found.
            this.set('prefs.' + prefPath + '.value', value);
        }
        /**
         * Appends the item to the pref list at the given key if the item is not
         * already in the list. Asserts if the pref itself is not found or is
         * not an Array type.
         */
        appendPrefListItem(key, item) {
            const pref = this.getPref(key);
            assert(pref && pref.type === chrome.settingsPrivate.PrefType.LIST);
            if (pref.value.indexOf(item) === -1) {
                this.push('prefs.' + key + '.value', item);
            }
        }
        /**
         * Updates the item in the pref list to the new value. Asserts if the
         * pref itself is not found or is not an Array type.
         */
        updatePrefListItem(key, item, newItem) {
            const pref = this.getPref(key);
            assert(pref && pref.type === chrome.settingsPrivate.PrefType.LIST);
            const index = pref.value.indexOf(item);
            if (index !== -1) {
                this.set(`prefs.${key}.value.${index}`, newItem);
            }
        }
        /**
         * Deletes the given item from the pref at the given key if the item is
         * found. Asserts if the pref itself is not found or is not an Array
         * type.
         */
        deletePrefListItem(key, item) {
            assert(this.getPref(key).type === chrome.settingsPrivate.PrefType.LIST);
            const index = this.getPref(key).value.indexOf(item);
            if (index !== -1) {
                this.splice(`prefs.${key}.value`, index, 1);
            }
        }
        /**
         * Updates the entry in the pref dictionary to the new key value pair.
         * Asserts if the pref itself is not found or is not a dictionary type.
         */
        setPrefDictEntry(prefPath, key, value) {
            const pref = this.getPref(prefPath);
            assert(pref && pref.type === chrome.settingsPrivate.PrefType.DICTIONARY);
            pref.value[key] = value;
            this.set('prefs.' + prefPath + '.value', { ...pref.value });
        }
        /**
         * Deletes the given key from the pref dictionary if it is
         * found. Asserts if the pref itself is not found or is not a dictionary
         * type.
         */
        deletePrefDictEntry(prefPath, key) {
            const pref = this.getPref(prefPath);
            assert(pref && pref.type === chrome.settingsPrivate.PrefType.DICTIONARY);
            delete pref.value[key];
            this.set('prefs.' + prefPath + '.value', { ...pref.value });
        }
    }
    return PrefsMixin;
});
