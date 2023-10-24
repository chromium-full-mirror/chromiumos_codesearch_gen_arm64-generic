// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from '../i18n_setup.js';
import { getTemplate } from './module_header.html.js';
/** Element that displays a header inside a module.  */
export class ModuleHeaderElement extends PolymerElement {
    static get is() {
        return 'ntp-module-header';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /** The src for the icon showing on the header. */
            iconSrc: String,
            /** The chip text showing on the header. */
            chipText: String,
            /** The description text showing in the header. */
            descriptionText: String,
            /** True if the header should display an info button. */
            showInfoButton: {
                type: Boolean,
                value: false,
            },
            /**
             * True if the redesigned modules are enabled. Will put the info
             * button in the action menu dropdown instead of separate button next to
             * the action menu.
             */
            showInfoButtonDropdown: {
                type: Boolean,
                value: false,
            },
            /** True if the header should display a dismiss button. */
            showDismissButton: {
                type: Boolean,
                value: false,
            },
            /**
             * False if the header should display a menu button that lets the user
             * open the module action menu.
             */
            hideMenuButton: {
                type: Boolean,
                value: false,
            },
            dismissText: String,
            disableText: String,
            moreActionsText: String,
            modulesRedesignedEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('modulesRedesignedEnabled'),
                reflectToAttribute: true,
            },
            /** True if the header should display an icon. */
            showIcon_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('modulesHeaderIconEnabled'),
            },
            iconStyle_: {
                type: String,
                computed: `computeIconStyle_(iconSrc)`,
            },
        };
    }
    computeIconStyle_() {
        return `-webkit-mask-image: url(${this.iconSrc});`;
    }
    onInfoButtonClick_() {
        this.$.actionMenu.close();
        this.dispatchEvent(new Event('info-button-click', { bubbles: true, composed: true }));
    }
    onMenuButtonClick_(e) {
        this.$.actionMenu.showAt(e.target);
    }
    onDismissButtonClick_() {
        this.$.actionMenu.close();
        this.dispatchEvent(new Event('dismiss-button-click', { bubbles: true }));
    }
    onDisableButtonClick_() {
        this.$.actionMenu.close();
        this.dispatchEvent(new Event('disable-button-click', { bubbles: true }));
    }
    onCustomizeButtonClick_() {
        this.$.actionMenu.close();
        this.dispatchEvent(new Event('customize-module', { bubbles: true, composed: true }));
    }
}
customElements.define(ModuleHeaderElement.is, ModuleHeaderElement);
