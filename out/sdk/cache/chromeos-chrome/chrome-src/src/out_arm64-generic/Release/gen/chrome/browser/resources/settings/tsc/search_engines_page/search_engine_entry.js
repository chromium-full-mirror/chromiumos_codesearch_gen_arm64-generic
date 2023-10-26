// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-search-engine-entry' is a component for showing a
 * search engine with its name, domain and query URL.
 */
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import './search_engine_entry.css.js';
import '../settings_shared.css.js';
import '../site_favicon.js';
import { AnchorAlignment } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './search_engine_entry.html.js';
import { ChoiceMadeLocation, SearchEnginesBrowserProxyImpl } from './search_engines_browser_proxy.js';
export class SettingsSearchEngineEntryElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.browserProxy_ = SearchEnginesBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-search-engine-entry';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            engine: Object,
            showShortcut: { type: Boolean, value: false, reflectToAttribute: true },
            showQueryUrl: { type: Boolean, value: false, reflectToAttribute: true },
            isDefault: {
                reflectToAttribute: true,
                type: Boolean,
                computed: 'computeIsDefault_(engine)',
            },
        };
    }
    closePopupMenu_() {
        this.shadowRoot.querySelector('cr-action-menu').close();
    }
    computeIsDefault_() {
        return this.engine.default;
    }
    onDeleteClick_(e) {
        e.preventDefault();
        this.closePopupMenu_();
        if (!this.engine.shouldConfirmDeletion) {
            this.browserProxy_.removeSearchEngine(this.engine.modelIndex);
            return;
        }
        const dots = this.shadowRoot.querySelector('cr-icon-button.icon-more-vert');
        assert(dots);
        this.dispatchEvent(new CustomEvent('delete-search-engine', {
            bubbles: true,
            composed: true,
            detail: {
                engine: this.engine,
                anchorElement: dots,
            },
        }));
    }
    onDotsClick_() {
        const dots = this.shadowRoot.querySelector('cr-icon-button.icon-more-vert');
        assert(dots);
        this.shadowRoot.querySelector('cr-action-menu').showAt(dots, {
            anchorAlignmentY: AnchorAlignment.AFTER_END,
        });
    }
    onEditClick_(e) {
        e.preventDefault();
        this.closePopupMenu_();
        const anchor = this.shadowRoot.querySelector('cr-icon-button');
        assert(anchor);
        this.dispatchEvent(new CustomEvent('edit-search-engine', {
            bubbles: true,
            composed: true,
            detail: {
                engine: this.engine,
                anchorElement: anchor,
            },
        }));
    }
    onMakeDefaultClick_() {
        this.closePopupMenu_();
        this.browserProxy_.setDefaultSearchEngine(this.engine.modelIndex, ChoiceMadeLocation.SEARCH_ENGINE_SETTINGS);
    }
    onActivateClick_() {
        this.closePopupMenu_();
        this.browserProxy_.setIsActiveSearchEngine(this.engine.modelIndex, /*is_active=*/ true);
    }
    onDeactivateClick_() {
        this.closePopupMenu_();
        this.browserProxy_.setIsActiveSearchEngine(this.engine.modelIndex, /*is_active=*/ false);
    }
}
customElements.define(SettingsSearchEngineEntryElement.is, SettingsSearchEngineEntryElement);
