// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Element which controls pre- and post-jellybean migration UI.
 * Disable type checking for closure, as it is done by the typescript compiler.
 * @suppress{missingProperties}
 */
import { util } from '../common/js/util.js';
import { customElement, html, XfBase } from './xf_base.js';
let XfJellybean = class XfJellybean extends XfBase {
    render() {
        if (util.isCrosComponentsEnabled()) {
            return html `
        <slot name="jelly">
          Jelly
        <slot>
      `;
        }
        return html `
      <slot name="old">
        Big Belly
      <slot>`;
    }
    firstUpdated() {
        // Jellybean status does not change during runtime. We can cleanup the
        // unused variant.
        const unusedElements = util.isCrosComponentsEnabled() ?
            this.querySelectorAll('[slot="old"]') :
            this.querySelectorAll('[slot="jelly"]');
        unusedElements.forEach((el) => el.remove());
    }
};
XfJellybean = __decorate([
    customElement('xf-jellybean')
], XfJellybean);
export { XfJellybean };
