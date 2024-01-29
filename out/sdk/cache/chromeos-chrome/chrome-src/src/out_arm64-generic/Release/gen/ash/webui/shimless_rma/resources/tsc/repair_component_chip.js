// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './shimless_rma_shared.css.js';
import './icons.html.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/paper-tooltip/paper-tooltip.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { CLICK_REPAIR_COMPONENT_BUTTON, createCustomEvent } from './events.js';
import { getTemplate } from './repair_component_chip.html.js';
import { modifyTabbableElement } from './shimless_rma_util.js';
/**
 * @fileoverview
 * 'repair-component-chip' represents a single component chip that can be marked
 * as replaced.
 */
const RepairComponentChipBase = I18nMixin(PolymerElement);
export class RepairComponentChip extends RepairComponentChipBase {
    static get is() {
        return 'repair-component-chip';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                value: false,
            },
            checked: {
                notify: true,
                reflectToAttribute: true,
                type: Boolean,
                value: false,
            },
            componentName: { type: String, value: '' },
            componentIdentifier: { type: String, value: '' },
            uniqueId: {
                reflectToAttribute: true,
                type: Number,
                value: '',
            },
            isFirstClickableComponent: {
                type: Boolean,
                value: false,
                observer: RepairComponentChip.prototype.onIsFirstClickableComponentChanged,
            },
        };
    }
    onComponentButtonClicked() {
        this.checked = !this.checked;
        // Notify the page that the component chip was clicked, so that the page can
        // put the focus on it.
        this.dispatchEvent(createCustomEvent(CLICK_REPAIR_COMPONENT_BUTTON, this.uniqueId));
    }
    onIsFirstClickableComponentChanged() {
        // Tab should go to the first non-disabled component in the list,
        // not individual component.
        modifyTabbableElement(this.shadowRoot.querySelector('#componentButton'), this.isFirstClickableComponent);
    }
    isAriaPressed() {
        return this.checked.toString();
    }
}
customElements.define(RepairComponentChip.is, RepairComponentChip);
