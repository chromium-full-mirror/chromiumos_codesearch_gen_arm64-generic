/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { css, html, LitElement } from 'lit';
/**
 * A cros compliant separator component for use in cros-menu.
 */
export class MenuSeparator extends LitElement {
    /** @nocollapse */
    static { this.styles = css `
    hr {
      background-color: var(--cros-sys-separator);
      height: 1px;
      border: 0;
    }
  `; }
    render() {
        return html `
      <hr role="separator"/>
    `;
    }
}
customElements.define('cros-menu-separator', MenuSeparator);
