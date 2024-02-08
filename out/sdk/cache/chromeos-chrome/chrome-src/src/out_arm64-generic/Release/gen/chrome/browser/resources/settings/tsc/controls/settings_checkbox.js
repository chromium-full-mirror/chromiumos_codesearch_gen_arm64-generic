// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * `settings-checkbox` is a checkbox that controls a supplied preference.
 */
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/policy/cr_policy_pref_indicator.js';
import { SettingsBooleanControlMixin } from '/shared/settings/controls/settings_boolean_control_mixin.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './settings_checkbox.html.js';
const SettingsCheckboxElementBase = SettingsBooleanControlMixin(PolymerElement);
export class SettingsCheckboxElement extends SettingsCheckboxElementBase {
    static get is() {
        return 'settings-checkbox';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Alternative source for the sub-label that can contain html markup.
             * Only use with trusted input.
             */
            subLabelHtml: {
                type: String,
                value: '',
                observer: 'onSubLabelHtmlChanged_',
            },
        };
    }
    static get observers() {
        return [
            'onSubLabelChanged_(subLabel, subLabelHtml)',
        ];
    }
    onSubLabelChanged_() {
        this.$.checkbox.ariaDescription = this.$.subLabel.textContent;
    }
    /**
     * Don't let clicks on a link inside the secondary label reach the checkbox.
     */
    onSubLabelHtmlChanged_() {
        const links = this.$.subLabel.querySelectorAll('a');
        links.forEach((link) => {
            link.addEventListener('click', this.stopPropagation_.bind(this));
        });
    }
    stopPropagation_(event) {
        event.stopPropagation();
    }
    hasSubLabel_(subLabel, subLabelHtml) {
        return !!subLabel || !!subLabelHtml;
    }
    sanitizeInnerHtml_(rawString) {
        return sanitizeInnerHtml(rawString);
    }
}
customElements.define(SettingsCheckboxElement.is, SettingsCheckboxElement);
