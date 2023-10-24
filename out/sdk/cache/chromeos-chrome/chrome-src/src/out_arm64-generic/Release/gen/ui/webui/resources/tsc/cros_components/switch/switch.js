/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import 'chrome://resources/mwc/@material/web/switch/switch.js';
import { css, html, LitElement } from '//resources/mwc/lit/index.js';
import { shouldProcessClick } from '../helpers/helpers.js';
/** A chromeOS switch component. */
export class Switch extends LitElement {
    /** @nocollapse */
    static { this.styles = css `
    :host {
      display: inline-block;
    }
    md-switch {
      --md-focus-ring-duration: 0s;

      --md-switch-handle-height: 12px;
      --md-switch-handle-width: 12px;

      --md-switch-selected-handle-height: 12px;
      --md-switch-selected-handle-width: 12px;

      --md-switch-pressed-handle-height: 12px;
      --md-switch-pressed-handle-width: 12px;

      --md-switch-track-height: 16px;
      --md-switch-track-outline-width: 0;
      --md-switch-track-width: 32px;

      --md-switch-state-layer-size: 32px;

      /* selected */
      --md-switch-selected-track-color: var(--cros-sys-primary);
      --md-switch-selected-hover-track-color: var(--cros-sys-primary);
      --md-switch-selected-focus-track-color: var(--cros-sys-primary);
      --md-switch-selected-pressed-track-color: var(--cros-sys-primary);

      --md-switch-selected-handle-color: var(--cros-sys-on_primary);
      --md-switch-selected-hover-handle-color: var(--cros-sys-on_primary);
      --md-switch-selected-focus-handle-color: var(--cros-sys-on_primary);
      --md-switch-selected-pressed-handle-color: var(--cros-sys-on_primary);

      /* unselected */
      --md-switch-track-color: var(--cros-sys-secondary);
      --md-switch-hover-track-color: var(--cros-sys-secondary);
      --md-switch-focus-track-color: var(--cros-sys-secondary);
      --md-switch-pressed-track-color: var(--cros-sys-secondary);

      --md-switch-handle-color: var(--cros-sys-on_secondary);
      --md-switch-hover-handle-color: var(--cros-sys-on_secondary);
      --md-switch-focus-handle-color: var(--cros-sys-on_secondary);
      --md-switch-pressed-handle-color: var(--cros-sys-on_secondary);
    }

    md-switch::part(focus-ring) {
      --md-focus-ring-width: 2px;
      --md-focus-ring-color: var(--cros-sys-primary);
    }

    /* disabled */
    md-switch[disabled] {
      opacity: 0.38;
      --md-switch-disabled-handle-color: var(--cros-sys-on_secondary);
      --md-switch-disabled-handle-opacity: 1;
      --md-switch-disabled-track-color: var(--cros-sys-secondary);
      --md-switch-disabled-track-opacity: 1;

      --md-switch-disabled-selected-handle-color: var(--cros-sys-on_primary);
      --md-switch-disabled-selected-handle-opacity: 1;
      --md-switch-disabled-selected-track-color: var(--cros-sys-primary);
    }
  `; }
    /** @nocollapse */
    static { this.properties = {
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
    }; }
    /** @nocollapse */
    static { this.events = {
        /** The switch value changed via user input. */
        CHANGE: 'change',
    }; }
    get mdSwitch() {
        return this.shadowRoot.querySelector('md-switch');
    }
    constructor() {
        super();
        this.disabled = false;
        this.selected = false;
        this.addEventListener('click', (event) => {
            if (shouldProcessClick(event)) {
                this.click();
            }
        });
    }
    render() {
        return html `
      <md-switch
          ?disabled=${this.disabled}
          ?selected=${this.selected}
          @change=${this.onChange}>
      </md-switch>
    `;
    }
    onChange() {
        this.selected = this.mdSwitch.selected;
        this.dispatchEvent(new Event('change', { bubbles: true }));
    }
    click() {
        this.mdSwitch?.click();
    }
}
customElements.define('cros-switch', Switch);
