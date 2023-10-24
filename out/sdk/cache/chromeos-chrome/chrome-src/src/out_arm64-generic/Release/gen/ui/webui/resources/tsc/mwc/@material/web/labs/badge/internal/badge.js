/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "//resources/mwc/tslib/tslib.js";
import { html, LitElement } from '//resources/mwc/lit/index.js';
import { property } from '//resources/mwc/lit/index.js';
import { classMap } from '//resources/mwc/lit/index.js';
/**
 * TODO(b/265340196): add docs
 */
export class Badge extends LitElement {
    constructor() {
        super(...arguments);
        this.value = '';
    }
    render() {
        const classes = { 'md3-badge--large': this.value };
        return html `<div class="md3-badge ${classMap(classes)}">
      <p class="md3-badge__value">${this.value}</p>
    </div>`;
    }
}
__decorate([
    property()
], Badge.prototype, "value", void 0);
//# sourceMappingURL=badge.js.map