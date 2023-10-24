// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrSettingsPrefs } from 'chrome://resources/cr_components/settings_prefs/prefs_types.js';
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
/**
 * Tracks the initialization of a specified preference and logs an error if the
 * pref is not defined after prefs have been fetched.
 */
export const PrefControlMixin = dedupingMixin((superClass) => {
    class PrefControlMixin extends superClass {
        static get properties() {
            return {
                /** The Preference object being tracked. */
                pref: {
                    type: Object,
                    notify: true,
                    observer: 'validatePref_',
                },
            };
        }
        connectedCallback() {
            super.connectedCallback();
            this.validatePref_();
        }
        /**
         * Logs an error once prefs are initialized if the tracked pref is not
         * found.
         */
        validatePref_() {
            CrSettingsPrefs.initialized.then(() => {
                if (this.pref === undefined) {
                    console.error(this.getErrorInfo('not found'));
                }
                else if (typeof this.pref === 'string') {
                    console.error(this.getErrorInfo('incorrect type string'));
                }
                else if (this.pref.enforcement ===
                    chrome.settingsPrivate.Enforcement.PARENT_SUPERVISED) {
                    console.error('PARENT_SUPERVISED is not enforced by pref controls');
                }
            });
        }
        /**
         * Produce an error message with additional information about the
         * element and host causing the error.
         */
        getErrorInfo(message) {
            let error = `Pref error [${message}] for element ${this.tagName}`;
            if (this.id) {
                error += `#${this.id}`;
            }
            error += ` in ${this.getRootNode().host.tagName}`;
            return error;
        }
    }
    return PrefControlMixin;
});
