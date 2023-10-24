// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * `settings-toggle-button` is a toggle that controls a supplied preference.
 */
import '//resources/cr_elements/cr_shared_style.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import '//resources/cr_elements/action_link.css.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import '//resources/cr_elements/policy/cr_policy_pref_indicator.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
// 
import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { SettingsBooleanControlMixin } from './settings_boolean_control_mixin.js';
import { getTemplate } from './settings_toggle_button.html.js';
const SettingsToggleButtonElementBase = SettingsBooleanControlMixin(PolymerElement);
export class SettingsToggleButtonElement extends SettingsToggleButtonElementBase {
    static get is() {
        return 'settings-toggle-button';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            ariaLabel: {
                type: String,
                reflectToAttribute: false,
                observer: 'onAriaLabelSet_',
                value: '',
            },
            ariaShowLabel: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            ariaShowSublabel: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            elideLabel: {
                type: Boolean,
                reflectToAttribute: true,
            },
            learnMoreUrl: {
                type: String,
                reflectToAttribute: true,
            },
            subLabelWithLink: {
                type: String,
                reflectToAttribute: true,
            },
            learnMoreAriaLabel: {
                type: String,
                value: '',
            },
            icon: String,
            subLabelIcon: String,
        };
    }
    static get observers() {
        return [
            'onDisableOrPrefChange_(disabled, pref.*)',
        ];
    }
    ready() {
        super.ready();
        this.addEventListener('click', this.onHostClick_);
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { detail, bubbles: true, composed: true }));
    }
    focus() {
        this.$.control.focus();
    }
    /**
     * Removes the aria-label attribute if it's added by $i18n{...}.
     */
    onAriaLabelSet_() {
        if (this.hasAttribute('aria-label')) {
            const ariaLabel = this.ariaLabel;
            this.removeAttribute('aria-label');
            this.ariaLabel = ariaLabel;
        }
    }
    getAriaLabel_() {
        return this.ariaLabel || this.label;
    }
    getLearnMoreAriaLabelledBy_() {
        return this.learnMoreAriaLabel ? 'learn-more-aria-label' :
            'sub-label-text learn-more';
    }
    onDisableOrPrefChange_() {
        this.toggleAttribute('effectively-disabled_', this.controlDisabled());
    }
    /**
     * Handles non cr-toggle button clicks (cr-toggle handles its own click events
     * which don't bubble).
     */
    onHostClick_(e) {
        e.stopPropagation();
        if (this.controlDisabled()) {
            return;
        }
        this.checked = !this.checked;
        this.notifyChangedByUserInteraction();
        this.fire_('change');
    }
    onLearnMoreClick_(e) {
        e.stopPropagation();
        this.fire_('learn-more-clicked');
    }
    /**
     * Set up the contents of sub label with link.
     */
    getSubLabelWithLinkContent_(contents) {
        return sanitizeInnerHtml(contents, {
            attrs: [
                'id',
                'is',
                'aria-hidden',
                'aria-label',
                'aria-labelledby',
                'tabindex',
            ],
        });
    }
    onSubLabelTextWithLinkClick_(e) {
        const target = e.target;
        if (target.tagName === 'A') {
            this.fire_('sub-label-link-clicked', target.id);
            e.preventDefault();
            e.stopPropagation();
        }
    }
    onChange_(e) {
        this.checked = e.detail;
        this.notifyChangedByUserInteraction();
    }
}
customElements.define(SettingsToggleButtonElement.is, SettingsToggleButtonElement);
