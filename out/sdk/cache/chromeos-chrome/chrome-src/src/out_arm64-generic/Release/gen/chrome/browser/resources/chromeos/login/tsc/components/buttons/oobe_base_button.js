// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/ash/common/cr_elements/cr_button/cr_button.js';
import { assert } from '//resources/js/assert.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { OobeI18nBehavior } from '../behaviors/oobe_i18n_behavior.js';
export const OobeBaseButtonBase = mixinBehaviors([OobeI18nBehavior], PolymerElement);
export class OobeBaseButton extends OobeBaseButtonBase {
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            /*
             * The ID of the localized string to be used as button text.
             */
            textKey: {
                type: String,
            },
            labelForAria: {
                type: String,
            },
            labelForAria_: {
                type: String,
                computed: 'computeAriaLabel(labelForAria, locale, textKey)',
            },
        };
    }
    focus() {
        this.$.button.focus();
    }
    computeAriaLabel(labelForAria, _locale, textKey) {
        if (labelForAria) {
            return labelForAria;
        }
        return (!textKey) ? '' : this.i18n(textKey);
    }
    onClick() {
        // Just checking here. The event is propagated further.
        assert(!this.disabled);
    }
}
