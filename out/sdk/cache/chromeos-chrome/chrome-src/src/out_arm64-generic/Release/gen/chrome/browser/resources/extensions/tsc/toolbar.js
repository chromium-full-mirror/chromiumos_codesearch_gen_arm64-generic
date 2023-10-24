// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/paper-styles/color.js';
import './pack_dialog.js';
import { getToastManager } from 'chrome://resources/cr_elements/cr_toast/cr_toast_manager.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { listenOnce } from 'chrome://resources/js/util_ts.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './toolbar.html.js';
const ExtensionsToolbarElementBase = I18nMixin(PolymerElement);
export class ExtensionsToolbarElement extends ExtensionsToolbarElementBase {
    static get is() {
        return 'extensions-toolbar';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            extensions: Array,
            delegate: Object,
            inDevMode: {
                type: Boolean,
                value: false,
                observer: 'onInDevModeChanged_',
                reflectToAttribute: true,
            },
            devModeControlledByPolicy: Boolean,
            isChildAccount: Boolean,
            // 
            kioskEnabled: Boolean,
            // 
            narrow: {
                type: Boolean,
                notify: true,
            },
            canLoadUnpacked: Boolean,
            expanded_: Boolean,
            showPackDialog_: Boolean,
            /**
             * Prevents initiating update while update is in progress.
             */
            isUpdating_: { type: Boolean, value: false },
        };
    }
    ready() {
        super.ready();
        this.setAttribute('role', 'banner');
    }
    focusSearchInput() {
        this.$.toolbar.getSearchField().showAndFocus();
    }
    isSearchFocused() {
        return this.$.toolbar.getSearchField().isSearchFocused();
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    shouldDisableDevMode_() {
        return this.devModeControlledByPolicy || this.isChildAccount;
    }
    getTooltipText_() {
        return this.i18n(this.isChildAccount ? 'controlledSettingChildRestriction' :
            'controlledSettingPolicy');
    }
    getIcon_() {
        return this.isChildAccount ? 'cr20:kite' : 'cr20:domain';
    }
    onDevModeToggleChange_(e) {
        this.delegate.setProfileInDevMode(e.detail);
        chrome.metricsPrivate.recordUserAction('Options_ToggleDeveloperMode_' + (e.detail ? 'Enabled' : 'Disabled'));
    }
    onInDevModeChanged_(_current, previous) {
        const drawer = this.$.devDrawer;
        if (this.inDevMode) {
            if (drawer.hidden) {
                drawer.hidden = false;
                // Requesting the offsetTop will cause a reflow (to account for
                // hidden).
                drawer.offsetTop;
            }
        }
        else {
            if (previous === undefined) {
                drawer.hidden = true;
                return;
            }
            listenOnce(drawer, 'transitionend', () => {
                if (!this.inDevMode) {
                    drawer.hidden = true;
                }
            });
        }
        this.expanded_ = !this.expanded_;
    }
    onLoadUnpackedClick_() {
        this.delegate.loadUnpacked()
            .then((success) => {
            if (success) {
                const toastManager = getToastManager();
                toastManager.duration = 3000;
                toastManager.show(this.i18n('toolbarLoadUnpackedDone'));
            }
        })
            .catch(loadError => {
            this.fire_('load-error', loadError);
        });
        chrome.metricsPrivate.recordUserAction('Options_LoadUnpackedExtension');
    }
    onPackClick_() {
        chrome.metricsPrivate.recordUserAction('Options_PackExtension');
        this.showPackDialog_ = true;
    }
    onPackDialogClose_() {
        this.showPackDialog_ = false;
        this.$.packExtensions.focus();
    }
    // 
    onKioskClick_() {
        this.fire_('kiosk-tap');
    }
    // 
    onUpdateNowClick_() {
        // If already updating, do not initiate another update.
        if (this.isUpdating_) {
            return;
        }
        this.isUpdating_ = true;
        const toastManager = getToastManager();
        // Keep the toast open indefinitely.
        toastManager.duration = 0;
        toastManager.show(this.i18n('toolbarUpdatingToast'));
        this.delegate.updateAllExtensions(this.extensions)
            .then(() => {
            toastManager.hide();
            toastManager.duration = 3000;
            toastManager.show(this.i18n('toolbarUpdateDone'));
            this.isUpdating_ = false;
        }, loadError => {
            this.fire_('load-error', loadError);
            toastManager.hide();
            this.isUpdating_ = false;
        });
    }
}
customElements.define(ExtensionsToolbarElement.is, ExtensionsToolbarElement);
