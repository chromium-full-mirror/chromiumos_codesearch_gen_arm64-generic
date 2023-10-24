// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Mixin to be used by Polymer elements that define Support Tool
 * pages.
 */
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export const SupportToolPageMixin = dedupingMixin((superClass) => {
    const superClassBase = I18nMixin(superClass);
    class SupportToolPageMixin extends superClassBase {
        $$(query) {
            return this.shadowRoot.querySelector(query);
        }
        // Puts the focus on the first header (h1) element of the page. Every
        // Support Tool page Polymer element that implements this mixin should
        // have a focusable header to describe the step.
        ensureFocusOnPageHeader() {
            this.$$('h1').focus();
        }
    }
    return SupportToolPageMixin;
});
