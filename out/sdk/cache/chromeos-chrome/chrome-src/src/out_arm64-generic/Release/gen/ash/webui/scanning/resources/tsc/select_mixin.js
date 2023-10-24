// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/ash/common/assert.js';
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
/**
 * Helper functions for custom elements that implement a scan setting using a
 * single select element. Elements that use this behavior are required to
 * implement getOptionAtIndex(), sortOptions(), and isDefaultOption().
 */
export const SelectMixin = dedupingMixin((superClass) => {
    class SelectMixin extends superClass {
        static get properties() {
            return {
                disabled: Boolean,
                options: {
                    type: Array,
                    value: () => [],
                },
                selectedOption: {
                    type: String,
                    notify: true,
                },
            };
        }
        static get observers() {
            return ['optionsChanged(options.*)'];
        }
        /**
         * Get the index of the default option if it exists. If not, use the
         * index of the first option in the options array.
         */
        getDefaultSelectedIndex() {
            assert(this.options.length > 0);
            const defaultIndex = this.options.findIndex((option) => {
                return this.isDefaultOption(option);
            });
            return defaultIndex === -1 ? 0 : defaultIndex;
        }
        getSelectElement() {
            return this.shadowRoot.querySelector('select');
        }
        /**
         * Sorts the options and sets the selected option when options change.
         */
        optionsChanged() {
            if (this.options.length > 1) {
                this.sortOptions();
            }
            if (this.options.length > 0) {
                const selectedOptionIndex = this.getDefaultSelectedIndex();
                this.selectedOption = this.getOptionAtIndex(selectedOptionIndex);
                this.getSelectElement().selectedIndex = selectedOptionIndex;
            }
        }
    }
    return SelectMixin;
});
