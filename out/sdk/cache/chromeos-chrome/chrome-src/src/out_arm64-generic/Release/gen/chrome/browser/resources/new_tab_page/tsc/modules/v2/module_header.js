// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './icons.html.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { I18nMixin } from '../../i18n_setup.js';
import { getTemplate } from './module_header.html.js';
/** Element that displays a header inside a module.  */
export class ModuleHeaderElementV2 extends I18nMixin(PolymerElement) {
    static get is() {
        return 'ntp-module-header-v2';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            headerText: String,
            moreActionsText: String,
            menuItemGroups: Array,
        };
    }
    showAt(e) {
        this.$.actionMenu.showAt(e.target);
    }
    onButtonClick_(e) {
        const { action } = e.model.item;
        assert(action);
        e.stopPropagation();
        this.$.actionMenu.close();
        if (action === 'customize-module') {
            this.dispatchEvent(new Event('customize-module', { bubbles: true, composed: true }));
        }
        else {
            this.dispatchEvent(new Event(`${action}-button-click`, { bubbles: true, composed: true }));
        }
    }
    onMenuButtonClick_(e) {
        e.stopPropagation();
        this.dispatchEvent(new Event('menu-button-click', { bubbles: true }));
    }
    showDivider_(index) {
        return index === 0;
    }
}
customElements.define(ModuleHeaderElementV2.is, ModuleHeaderElementV2);
