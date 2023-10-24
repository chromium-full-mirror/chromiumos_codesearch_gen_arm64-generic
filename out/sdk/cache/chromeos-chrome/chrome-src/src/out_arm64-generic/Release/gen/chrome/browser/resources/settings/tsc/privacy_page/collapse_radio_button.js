// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button_style.css.js';
import 'chrome://resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../settings_shared.css.js';
import { CrRadioButtonMixin } from 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PaperRippleBehavior } from 'chrome://resources/polymer/v3_0/paper-behaviors/paper-ripple-behavior.js';
import { mixinBehaviors, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './collapse_radio_button.html.js';
const SettingsCollapseRadioButtonElementBase = mixinBehaviors([PaperRippleBehavior], CrRadioButtonMixin(PolymerElement));
export class SettingsCollapseRadioButtonElement extends SettingsCollapseRadioButtonElementBase {
    static get is() {
        return 'settings-collapse-radio-button';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            expanded: {
                type: Boolean,
                notify: true,
                value: false,
            },
            noAutomaticCollapse: {
                type: Boolean,
                value: false,
            },
            noCollapse: Boolean,
            label: String,
            indicatorAriaLabel: String,
            icon: {
                type: String,
                value: null,
            },
            /*
             * The Preference associated with the radio group.
             */
            pref: Object,
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            subLabel: {
                type: String,
                value: '', // Allows the $hidden= binding to run without being set.
            },
            /*
             * The aria-label attribute associated with the expand button. Used by
             * screen readers when announcing the expand button.
             */
            expandAriaLabel: String,
        };
    }
    static get observers() {
        return [
            'onCheckedChanged_(checked)',
            'onPrefChanged_(pref.*)',
        ];
    }
    constructor() {
        super();
        /**
         * Tracks if this button was clicked but wasn't expanded.
         */
        this.pendingUpdateCollapsed_ = false;
    }
    // Overridden from CrRadioButtonMixin
    getPaperRipple() {
        return this.getRipple();
    }
    // Overridden from PaperRippleBehavior
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    _createRipple() {
        this._rippleContainer = this.shadowRoot.querySelector('.disc-wrapper');
        const ripple = super._createRipple();
        ripple.id = 'ink';
        ripple.setAttribute('recenters', '');
        ripple.classList.add('circle', 'toggle-ink');
        return ripple;
    }
    /**
     * Updates the collapsed status of this radio button to reflect
     * the user selection actions.
     */
    updateCollapsed() {
        if (this.pendingUpdateCollapsed_) {
            this.pendingUpdateCollapsed_ = false;
            this.expanded = this.checked;
        }
    }
    getBubbleAnchor() {
        const anchor = this.shadowRoot.querySelector('#button');
        assert(anchor);
        return anchor;
    }
    onCheckedChanged_() {
        this.pendingUpdateCollapsed_ = true;
        if (!this.noAutomaticCollapse) {
            this.updateCollapsed();
        }
    }
    onPrefChanged_() {
        // If the preference has been set, and is managed, this control should be
        // disabled. Unless the value associated with this control is present in
        // |pref.userSelectableValues|. This will override the disabled set on the
        // element externally.
        this.disabled = !!this.pref &&
            this.pref.enforcement === chrome.settingsPrivate.Enforcement.ENFORCED &&
            !(!!this.pref.userSelectableValues &&
                this.pref.userSelectableValues.includes(this.name));
    }
    onExpandClicked_() {
        this.dispatchEvent(new CustomEvent('expand-clicked', { bubbles: true, composed: true }));
    }
    onRadioFocus_() {
        this.getRipple().showAndHoldDown();
    }
    /**
     * Clear the ripple associated with the radio button when the expand button
     * is focused. Stop propagation to prevent the ripple being re-created.
     */
    onNonRadioFocus_(e) {
        this.getRipple().clear();
        e.stopPropagation();
    }
}
customElements.define(SettingsCollapseRadioButtonElement.is, SettingsCollapseRadioButtonElement);
