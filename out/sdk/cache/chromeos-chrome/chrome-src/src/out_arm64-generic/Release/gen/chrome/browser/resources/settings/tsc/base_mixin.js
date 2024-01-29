// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export const BaseMixin = dedupingMixin((superClass) => {
    class BaseMixin extends superClass {
        $$(query) {
            return this.shadowRoot.querySelector(query);
        }
        fire(eventName, detail) {
            this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
        }
    }
    return BaseMixin;
});
