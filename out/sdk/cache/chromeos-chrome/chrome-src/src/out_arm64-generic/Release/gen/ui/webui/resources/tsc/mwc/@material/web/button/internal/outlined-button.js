/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { html } from '//resources/mwc/lit/index.js';
import { Button } from './button.js';
/**
 * An outlined button component.
 */
export class OutlinedButton extends Button {
    renderOutline() {
        return html `<span class="button__outline"></span>`;
    }
}
//# sourceMappingURL=outlined-button.js.map