// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-omnibox-extension-entry' is a component for showing
 * an omnibox extension with its name and keyword.
 */
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './search_engine_entry.css.js';
import '../settings_shared.css.js';
import '../site_favicon.js';
import { ExtensionControlBrowserProxyImpl } from '/shared/settings/extension_control_browser_proxy.js';
import { AnchorAlignment } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { FocusRowMixin } from 'chrome://resources/cr_elements/focus_row_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './omnibox_extension_entry.html.js';
const SettingsOmniboxExtensionEntryElementBase = FocusRowMixin(PolymerElement);
export class SettingsOmniboxExtensionEntryElement extends SettingsOmniboxExtensionEntryElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = ExtensionControlBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-omnibox-extension-entry';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            engine: Object,
        };
    }
    onManageClick_() {
        this.closePopupMenu_();
        this.browserProxy_.manageExtension(this.engine.extension.id);
    }
    onDisableClick_() {
        this.closePopupMenu_();
        this.browserProxy_.disableExtension(this.engine.extension.id);
    }
    closePopupMenu_() {
        this.shadowRoot.querySelector('cr-action-menu').close();
    }
    onDotsClick_() {
        const dots = this.shadowRoot.querySelector('cr-icon-button');
        assert(dots);
        this.shadowRoot.querySelector('cr-action-menu').showAt(dots, {
            anchorAlignmentY: AnchorAlignment.AFTER_END,
        });
    }
}
customElements.define(SettingsOmniboxExtensionEntryElement.is, SettingsOmniboxExtensionEntryElement);
