// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { Button } from 'chrome://resources/cros_components/button/button.js';
import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { queryRequiredElement } from '../../common/js/dom_utils.js';
import { isCrosComponentsEnabled } from '../../common/js/flags.js';
const htmlTemplate = html `<!--_html_template_start_-->

<style>
  cr-icon-button,
  cr-button {
    margin-inline: 0;
  }

  cr-button {
    --active-bg: none;
    --hover-bg-color: var(--cros-sys-hover_on_subtle);
    --ink-color: var(--cros-sys-ripple_neutral_on_subtle);
    --paper-ripple-opacity: 100%;
    --text-color: var(--cros-sys-primary);
    border: none;
    border-radius: 18px;
    box-shadow: none;
    font: var(--cros-button-2-font);
    height: 36px;
    padding-inline: 16px;
  }

  :host-context(.focus-outline-visible) cr-button:focus {
    outline: 2px solid var(--cros-sys-focus_ring);
    outline-offset: 2px;
  }

  cr-icon-button {
    --cr-active-bg-color: var(--cros-sys-pressed_on_subtle);
    --cr-focus-outline-color: var(--cros-sys-focus_ring);
    --cr-hover-background-color: var(--cros-sys-hover_on_subtle);
    --cr-icon-button-fill-color: var(--cros-sys-on_surface);
    border-radius: 12px;
  }

  @keyframes setcollapse {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }

  @keyframes setexpand {
    from {
      transform: rotate(-180deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  :host([data-category='expand']) {
      animation: setexpand 200ms forwards;
  }

  :host([data-category='collapse']) {
      animation: setcollapse 200ms forwards;
  }

  :host {
    flex-shrink: 0;
    position: relative;
  }

  :host(:not([data-category='dismiss']):not([data-category='extra-button']):not([data-category='cancel'])) {
    width: 36px;
  }

  #dismiss,
  #extra-button,
  #cancel,
  #dismiss-jelly,
  #extra-button-jelly,
  #cancel-jelly,
  #icon {
    display: none;
  }

  :host([data-category='dismiss']) #dismiss,
  :host([data-category='dismiss']) #dismiss-jelly,
  :host([data-category='extra-button']) #extra-button,
  :host([data-category='extra-button']) #extra-button-jelly,
  :host([data-category='cancel']) #cancel,
  :host([data-category='cancel']) #cancel-jelly,
  :host([data-category='collapse']) #icon,
  :host([data-category='expand']) #icon {
    display: inline-block;
  }
</style>
<xf-jellybean>
  <cr-button slot="old" id='dismiss'>$i18n{DRIVE_WELCOME_DISMISS}</cr-button>
  <cr-button slot="old" id='extra-button'></cr-button>
  <cr-button slot="old" id='cancel'>$i18n{CANCEL_LABEL}</cr-button>

  <cros-button slot="jelly" id='dismiss-jelly' button-style="floating" label="$i18n{DRIVE_WELCOME_DISMISS}"></cros-button>
  <cros-button slot="jelly" id='extra-button-jelly' button-style="floating"></cros-button>
  <cros-button slot="jelly" id='cancel-jelly' button-style="floating" label="$i18n{CANCEL_LABEL}"></cros-button>
</xf-jellybean>
<cr-icon-button id='icon'></cr-icon-button>
<!--_html_template_end_-->`;
/**
 * A button used inside PanelItem with varying display characteristics.
 */
export class PanelButton extends HTMLElement {
    constructor() {
        super();
        this.createElement_();
    }
    /**
     * Creates a PanelButton.
     * @private
     */
    createElement_() {
        const fragment = htmlTemplate.content.cloneNode(true);
        this.attachShadow({ mode: 'open' }).appendChild(fragment);
    }
    /**
     * Registers this instance to listen to these attribute changes.
     */
    static get observedAttributes() {
        return [
            'data-category',
        ];
    }
    /**
     * Callback triggered by the browser when our attribute values change.
     * @param {string} name Attribute that's changed.
     * @param {?string} oldValue Old value of the attribute.
     * @param {?string} newValue New value of the attribute.
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        /** @type {?Element} */
        const iconButton = this.shadowRoot?.querySelector('cr-icon-button') ?? null;
        if (name === 'data-category') {
            switch (newValue) {
                case 'collapse':
                case 'expand':
                    iconButton?.setAttribute('iron-icon', 'cr:expand-less');
                    break;
            }
        }
    }
    /**
     * When using the extra button, the text can be programmatically set
     * @param {string} text The text to use on the extra button.
     */
    setExtraButtonText(text) {
        if (!this.shadowRoot) {
            return;
        }
        if (isCrosComponentsEnabled()) {
            const extraButton = 
            /** @type {!Button} */ (queryRequiredElement('#extra-button-jelly', this.shadowRoot));
            extraButton.label = text;
        }
        else {
            const extraButton = 
            /** @type {!CrButtonElement} */ (queryRequiredElement('#extra-button', this.shadowRoot));
            extraButton.innerText = text;
        }
    }
}
window.customElements.define('xf-button', PanelButton);
// # sourceURL=//ui/file_manager/file_manager/foreground/elements/xf_button.js
