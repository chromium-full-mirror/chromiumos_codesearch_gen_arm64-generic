// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { Debouncer, dedupingMixin, timeOut } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export const SelectMixin = dedupingMixin((superClass) => {
    class SelectMixin extends superClass {
        constructor() {
            super(...arguments);
            this.debouncer_ = null;
        }
        static get properties() {
            return {
                selectedValue: {
                    type: String,
                    observer: 'onSelectedValueChange_',
                },
            };
        }
        onSelectedValueChange_(_current, previous) {
            // Don't trigger an extra preview request at startup.
            if (previous === undefined) {
                return;
            }
            this.debouncer_ = Debouncer.debounce(this.debouncer_, timeOut.after(100), () => this.callProcessSelectChange_());
        }
        callProcessSelectChange_() {
            if (!this.isConnected) {
                return;
            }
            this.onProcessSelectChange(this.selectedValue);
            // For testing only
            this.dispatchEvent(new CustomEvent('process-select-change', { bubbles: true, composed: true }));
        }
        onProcessSelectChange(_value) { }
    }
    return SelectMixin;
});
