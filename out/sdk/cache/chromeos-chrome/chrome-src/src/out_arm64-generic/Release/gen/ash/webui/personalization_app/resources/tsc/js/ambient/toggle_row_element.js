// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This component displays a description text and a toggle button.
 */
import '../../css/common.css.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import { isPersonalizationJellyEnabled } from '../load_time_booleans.js';
import { WithPersonalizationStore } from '../personalization_store.js';
import { setAmbientModeEnabled } from './ambient_controller.js';
import { getAmbientProvider } from './ambient_interface_provider.js';
import { getTemplate } from './toggle_row_element.html.js';
export class ToggleRowElement extends WithPersonalizationStore {
    static get is() {
        return 'toggle-row';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            isPersonalizationJellyEnabled_: {
                type: Boolean,
                value() {
                    return isPersonalizationJellyEnabled();
                },
            },
            ambientModeEnabled_: Boolean,
        };
    }
    focus() {
        this.$.toggle.focus();
    }
    connectedCallback() {
        super.connectedCallback();
        this.watch('ambientModeEnabled_', state => state.ambient.ambientModeEnabled);
        this.updateFromStore();
    }
    getAriaLabel_() {
        return this.i18n(this.ambientModeEnabled_ ? 'ambientModeOn' : 'ambientModeOff');
    }
    getToggleRowTitle_() {
        return this.getAriaLabel_().toUpperCase();
    }
    onAmbientModeToggled_(event) {
        const toggleButton = event.currentTarget;
        const ambientModeEnabled = toggleButton.checked;
        setAmbientModeEnabled(ambientModeEnabled, getAmbientProvider(), this.getStore());
    }
}
customElements.define(ToggleRowElement.is, ToggleRowElement);
