// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'os-settings-search-selection-dialog' is a dialog for setting
 * the preferred search engine.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/md_select.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import '../settings_shared.css.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { getTemplate } from './os_search_selection_dialog.html.js';
import { SearchEnginesBrowserProxyImpl } from './search_engines_browser_proxy.js';
const OsSettingsSearchSelectionDialogElementBase = WebUiListenerMixin(PolymerElement);
class OsSettingsSearchSelectionDialogElement extends OsSettingsSearchSelectionDialogElementBase {
    static get is() {
        return 'os-settings-search-selection-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * List of default search engines available.
             */
            searchEngines_: {
                type: Array,
                value() {
                    return [];
                },
            },
        };
    }
    constructor() {
        super();
        this.browserProxy_ = SearchEnginesBrowserProxyImpl.getInstance();
    }
    ready() {
        super.ready();
        this.browserProxy_.getSearchEnginesList().then(this.updateSearchEngines_.bind(this));
        this.addWebUiListener('search-engines-changed', this.updateSearchEngines_.bind(this));
    }
    updateSearchEngines_(searchEngines) {
        this.set('searchEngines_', searchEngines.defaults);
    }
    /**
     * Enables the checked languages.
     */
    onActionButtonClick_() {
        const select = castExists(this.shadowRoot.querySelector('select'));
        const searchEngine = this.searchEngines_[select.selectedIndex];
        this.browserProxy_.setDefaultSearchEngine(searchEngine.modelIndex);
        this.$.dialog.close();
    }
    onCancelButtonClick_() {
        this.$.dialog.close();
    }
    onKeydown_(e) {
        if (e.key === 'Escape') {
            this.onCancelButtonClick_();
        }
    }
}
customElements.define(OsSettingsSearchSelectionDialogElement.is, OsSettingsSearchSelectionDialogElement);
