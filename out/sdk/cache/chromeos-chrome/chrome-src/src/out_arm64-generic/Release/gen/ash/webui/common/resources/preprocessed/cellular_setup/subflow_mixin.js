// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer mixin for dealing with Cellular setup subflows.
 * It includes some methods and property shared between subflows.
 */
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export const SubflowMixin = dedupingMixin((superClass) => {
    class SubflowMixin extends superClass {
        static get properties() {
            return {
                buttonState: {
                    type: Object,
                    notify: true,
                },
            };
        }
        initSubflow() {
            assertNotReached();
        }
        navigateForward() {
            assertNotReached();
        }
        navigateBackward() {
            assertNotReached();
        }
    }
    return SubflowMixin;
});
