// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export const InputMixin = dedupingMixin((superClass) => {
    class InputMixin extends superClass {
        constructor() {
            super(...arguments);
            /** Timeout used to delay processing of the input, in ms. */
            this.timeout_ = null;
        }
        static get properties() {
            return {
                lastValue_: {
                    type: String,
                    value: '',
                },
            };
        }
        connectedCallback() {
            super.connectedCallback();
            this.getInput().addEventListener('input', () => this.resetTimeout_());
            this.getInput().addEventListener('keydown', (e) => this.onKeyDown_(e));
        }
        getInput() {
            assertNotReached();
        }
        /**
         * @return The delay to use for the timeout, in ms. Elements using
         *     this behavior must set this delay as data-timeout-delay on the
         *     input element returned by getInput().
         */
        getTimeoutDelayMs_() {
            const delay = parseInt(this.getInput().dataset['timeoutDelay'], 10);
            assert(!Number.isNaN(delay));
            return delay;
        }
        /**
         * Called when a key is pressed on the input.
         */
        onKeyDown_(event) {
            if (event.key !== 'Enter' && event.key !== 'Tab') {
                return;
            }
            this.resetAndUpdate();
        }
        /**
         * Called when a input event occurs on the textfield. Starts an input
         * timeout.
         */
        resetTimeout_() {
            if (this.timeout_) {
                clearTimeout(this.timeout_);
            }
            this.timeout_ =
                setTimeout(() => this.onTimeout_(), this.getTimeoutDelayMs_());
        }
        /**
         * Called after a timeout after user input into the textfield.
         */
        onTimeout_() {
            this.timeout_ = null;
            const value = this.getInput().value || '';
            if (this.lastValue_ !== value) {
                this.lastValue_ = value;
                this.dispatchEvent(new CustomEvent('input-change', { bubbles: true, composed: true, detail: value }));
            }
        }
        resetString() {
            this.lastValue_ = null;
        }
        resetAndUpdate() {
            if (this.timeout_) {
                clearTimeout(this.timeout_);
            }
            this.onTimeout_();
        }
    }
    return InputMixin;
});
