// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element wrapping gaia styled button for login/oobe.
 */
import '//resources/ash/common/cr_elements/cros_color_overrides.css.js';
import '//resources/polymer/v3_0/paper-styles/color.js';
import { CrButtonElement } from '//resources/ash/common/cr_elements/cr_button/cr_button.js';
import { assert } from '//resources/js/assert.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './gaia_button.html.js';
export const GaiaButtonBase = mixinBehaviors([], PolymerElement);
export class GaiaButton extends GaiaButtonBase {
    static get is() {
        return 'gaia-button';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            link: {
                type: Boolean,
                reflectToAttribute: true,
                observer: 'onLinkChanged',
                value: false,
            },
        };
    }
    getButton() {
        const button = this.shadowRoot?.querySelector('#button');
        assert(button instanceof CrButtonElement);
        return button;
    }
    focus() {
        this.getButton().focus();
    }
    onLinkChanged() {
        this.getButton().classList.toggle('action-button', !this.link);
    }
    onClick(e) {
        if (this.disabled) {
            e.stopPropagation();
        }
    }
}
customElements.define(GaiaButton.is, GaiaButton);
