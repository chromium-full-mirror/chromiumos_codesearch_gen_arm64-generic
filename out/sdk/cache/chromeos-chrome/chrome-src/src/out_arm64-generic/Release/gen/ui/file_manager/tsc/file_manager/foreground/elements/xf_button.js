// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrButtonElement } from 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import { Button } from 'chrome://resources/cros_components/button/button.js';
import { queryRequiredElement } from '../../common/js/dom_utils.js';
import { isCrosComponentsEnabled } from '../../common/js/flags.js';
import { getTemplate } from './xf_button.html.js';
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
     */
    createElement_() {
        const template = document.createElement('template');
        template.innerHTML = getTemplate();
        const fragment = template.content.cloneNode(true);
        this.attachShadow({ mode: 'open' }).appendChild(fragment);
    }
    static get is() {
        return 'xf-button';
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
     * @param name Attribute that's changed.
     * @param oldValue Old value of the attribute.
     * @param newValue New value of the attribute.
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
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
     * @param text The text to use on the extra button.
     */
    setExtraButtonText(text) {
        if (!this.shadowRoot) {
            return;
        }
        if (isCrosComponentsEnabled()) {
            const extraButton = queryRequiredElement('#extra-button-jelly', this.shadowRoot);
            extraButton.label = text;
        }
        else {
            const extraButton = queryRequiredElement('#extra-button', this.shadowRoot);
            extraButton.innerText = text;
        }
    }
}
window.customElements.define(PanelButton.is, PanelButton);
