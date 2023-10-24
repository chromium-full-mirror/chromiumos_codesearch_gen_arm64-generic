// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-safety-check-element' bundles functionality safety check elements
 * have in common. It is used by all safety check elements: parent, updates,
 * passwords, etc.
 */
import 'chrome://resources/cr_elements/cr_actionable_row_style.css.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../settings_shared.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './safety_check_child.html.js';
/**
 * UI states a safety check child can be in. Defines the basic UI of the child.
 */
export var SafetyCheckIconStatus;
(function (SafetyCheckIconStatus) {
    SafetyCheckIconStatus[SafetyCheckIconStatus["RUNNING"] = 0] = "RUNNING";
    SafetyCheckIconStatus[SafetyCheckIconStatus["SAFE"] = 1] = "SAFE";
    SafetyCheckIconStatus[SafetyCheckIconStatus["INFO"] = 2] = "INFO";
    SafetyCheckIconStatus[SafetyCheckIconStatus["WARNING"] = 3] = "WARNING";
    SafetyCheckIconStatus[SafetyCheckIconStatus["NOTIFICATION_PERMISSIONS"] = 4] = "NOTIFICATION_PERMISSIONS";
    SafetyCheckIconStatus[SafetyCheckIconStatus["UNUSED_SITE_PERMISSIONS"] = 5] = "UNUSED_SITE_PERMISSIONS";
    SafetyCheckIconStatus[SafetyCheckIconStatus["EXTENSIONS_REVIEW"] = 6] = "EXTENSIONS_REVIEW";
})(SafetyCheckIconStatus || (SafetyCheckIconStatus = {}));
const SettingsSafetyCheckChildElementBase = I18nMixin(PolymerElement);
export class SettingsSafetyCheckChildElement extends SettingsSafetyCheckChildElementBase {
    static get is() {
        return 'settings-safety-check-child';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Status of the left hand icon.
             */
            iconStatus: {
                type: Number,
                value: SafetyCheckIconStatus.RUNNING,
            },
            // Primary label of the child.
            label: String,
            // Secondary label of the child.
            subLabel: String,
            // Text of the right hand button. |null| removes it from the DOM.
            buttonLabel: String,
            // Aria label of the right hand button.
            buttonAriaLabel: String,
            // Classes of the right hand button.
            buttonClass: String,
            // Icon for the right hand button.
            buttonIcon: String,
            // Should the entire row be clickable.
            rowClickable: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'onRowClickableChanged_',
            },
            // Is the row directed to external link.
            external: {
                type: Boolean,
                value: false,
            },
            rowClickableIcon_: {
                type: String,
                computed: 'computeRowClickableIcon_(external)',
            },
            // Right hand managed icon. |null| removes it from the DOM.
            managedIcon: String,
        };
    }
    /** @return The left hand icon for an icon status. */
    getStatusIcon_() {
        switch (this.iconStatus) {
            case SafetyCheckIconStatus.RUNNING:
                return null;
            case SafetyCheckIconStatus.SAFE:
                return 'cr:check';
            case SafetyCheckIconStatus.INFO:
                return 'cr:info';
            case SafetyCheckIconStatus.WARNING:
                return 'cr:warning';
            case SafetyCheckIconStatus.NOTIFICATION_PERMISSIONS:
                return 'settings:notifications-none';
            case SafetyCheckIconStatus.UNUSED_SITE_PERMISSIONS:
                return 'cr:info-outline';
            case SafetyCheckIconStatus.EXTENSIONS_REVIEW:
                return 'cr:extension';
            default:
                assertNotReached();
        }
    }
    /** @return The left hand icon src for an icon status. */
    getStatusIconSrc_() {
        if (this.iconStatus === SafetyCheckIconStatus.RUNNING) {
            return 'chrome://resources/images/throbber_small.svg';
        }
        return null;
    }
    /** @return The left hand icon class for an icon status. */
    getStatusIconClass_() {
        switch (this.iconStatus) {
            case SafetyCheckIconStatus.RUNNING:
            case SafetyCheckIconStatus.SAFE:
                return 'icon-blue';
            case SafetyCheckIconStatus.WARNING:
                return 'icon-red';
            default:
                return '';
        }
    }
    /** @return The left hand icon aria label for an icon status. */
    getStatusIconAriaLabel_() {
        switch (this.iconStatus) {
            case SafetyCheckIconStatus.RUNNING:
                return this.i18n('safetyCheckIconRunningAriaLabel');
            case SafetyCheckIconStatus.SAFE:
                return this.i18n('safetyCheckIconSafeAriaLabel');
            case SafetyCheckIconStatus.INFO:
                return this.i18n('safetyCheckIconInfoAriaLabel');
            case SafetyCheckIconStatus.WARNING:
                return this.i18n('safetyCheckIconWarningAriaLabel');
            case SafetyCheckIconStatus.NOTIFICATION_PERMISSIONS:
            case SafetyCheckIconStatus.UNUSED_SITE_PERMISSIONS:
            case SafetyCheckIconStatus.EXTENSIONS_REVIEW:
                return undefined;
            default:
                assertNotReached();
        }
    }
    /** @return Whether right-hand side button should be shown. */
    showButton_() {
        return !!this.buttonLabel;
    }
    onButtonClick_() {
        this.dispatchEvent(new CustomEvent('button-click', { bubbles: true, composed: true }));
    }
    /** @return Whether the right-hand side managed icon should be shown. */
    showManagedIcon_() {
        return !!this.managedIcon;
    }
    /** @return Whether the right-hand side button icon should be shown. */
    showButtonIcon_() {
        return !!this.buttonIcon;
    }
    /** @return The icon to show when the row is clickable. */
    computeRowClickableIcon_() {
        return this.external ? 'cr:open-in-new' : 'cr:arrow-right';
    }
    /** @return The subpage role description if the arrow right icon is used. */
    getRoleDescription_() {
        return this.rowClickableIcon_ === 'cr:arrow-right' ?
            this.i18n('subpageArrowRoleDescription') :
            '';
    }
    onRowClickableChanged_() {
        // For cr-actionable-row-style.
        this.toggleAttribute('effectively-disabled_', !this.rowClickable);
    }
    sanitizeInnerHtml_(rawString) {
        return sanitizeInnerHtml(rawString);
    }
}
customElements.define(SettingsSafetyCheckChildElement.is, SettingsSafetyCheckChildElement);
