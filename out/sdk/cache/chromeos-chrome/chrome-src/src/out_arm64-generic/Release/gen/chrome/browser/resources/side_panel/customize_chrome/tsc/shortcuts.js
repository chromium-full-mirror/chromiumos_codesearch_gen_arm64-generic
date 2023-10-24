// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import './button_label.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { CustomizeChromeApiProxy } from './customize_chrome_api_proxy.js';
import { getTemplate } from './shortcuts.html.js';
export class ShortcutsElement extends PolymerElement {
    static get is() {
        return 'customize-chrome-shortcuts';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            customLinksEnabled_: Boolean,
            shortcutsRadioSelection_: {
                type: String,
                computed: 'computeShortcutsRadioSelection_(customLinksEnabled_)',
            },
            show_: Boolean,
            initialized_: {
                type: Boolean,
                value: false,
            },
        };
    }
    constructor() {
        super();
        this.shortcutsRadioSelection_ = undefined;
        this.setMostVisitedSettingsListenerId_ = null;
        this.pageHandler_ = CustomizeChromeApiProxy.getInstance().handler;
        this.callbackRouter_ = CustomizeChromeApiProxy.getInstance().callbackRouter;
    }
    connectedCallback() {
        super.connectedCallback();
        this.setMostVisitedSettingsListenerId_ =
            this.callbackRouter_.setMostVisitedSettings.addListener((customLinksEnabled, shortcutsVisible) => {
                this.customLinksEnabled_ = customLinksEnabled;
                this.show_ = shortcutsVisible;
                this.initialized_ = true;
            });
        this.pageHandler_.updateMostVisitedSettings();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setMostVisitedSettingsListenerId_);
        this.callbackRouter_.removeListener(this.setMostVisitedSettingsListenerId_);
    }
    setMostVisitedSettings_() {
        this.pageHandler_.setMostVisitedSettings(this.customLinksEnabled_, /* shortcutsVisible= */ this.show_);
    }
    onShortcutsRadioSelectionChanged_(e) {
        this.customLinksEnabled_ = e.detail.value === 'customLinksOption';
        this.setMostVisitedSettings_();
    }
    computeShortcutsRadioSelection_() {
        return this.customLinksEnabled_ ? 'customLinksOption' : 'mostVisitedOption';
    }
    onShowShortcutsToggleChange_(e) {
        this.show_ = e.detail;
        this.setMostVisitedSettings_();
    }
}
customElements.define(ShortcutsElement.is, ShortcutsElement);
