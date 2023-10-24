// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-search-page' is the settings page containing search settings.
 */
import 'chrome://resources/cr_elements/policy/cr_policy_pref_indicator.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/md_select.css.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import '../i18n_setup.js';
import '../settings_page/settings_animated_pages.js';
import '../settings_page/settings_subpage.js';
import '../settings_shared.css.js';
import '../settings_vars.css.js';
import '../site_favicon.js';
import { addWebUiListener } from 'chrome://resources/js/cr.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BaseMixin } from '../base_mixin.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { SearchEnginesBrowserProxyImpl } from '../search_engines_page/search_engines_browser_proxy.js';
import { getTemplate } from './search_page.html.js';
const SettingsSearchPageElementBase = BaseMixin(PolymerElement);
export class SettingsSearchPageElement extends SettingsSearchPageElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = SearchEnginesBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-search-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            prefs: Object,
            /**
             * List of default search engines available.
             */
            searchEngines_: {
                type: Array,
                value() {
                    return [];
                },
            },
            // Whether the `kSearchEngineChoiceSettingsUi` feature is enabled or not.
            searchEngineChoiceSettingsUi_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('searchEngineChoiceSettingsUi');
                },
            },
            // The selected default search engine.
            // This depends on `prefs.default_search_provider_data.template_url_data`
            // because we want to update the `defaultSearchEngine_` variable every
            // time the default search provider is updated in the pref.
            defaultSearchEngine_: {
                type: Object,
                computed: 'computeDefaultSearchEngine_(' +
                    'prefs.default_search_provider_data.template_url_data, ' +
                    'searchEngines_)',
            },
            /** Filter applied to search engines. */
            searchEnginesFilter_: String,
            focusConfig_: Object,
        };
    }
    ready() {
        super.ready();
        // Omnibox search engine
        const updateSearchEngines = (searchEngines) => {
            this.set('searchEngines_', searchEngines.defaults);
        };
        this.browserProxy_.getSearchEnginesList().then(updateSearchEngines);
        addWebUiListener('search-engines-changed', updateSearchEngines);
        this.focusConfig_ = new Map();
        if (routes.SEARCH_ENGINES) {
            this.focusConfig_.set(routes.SEARCH_ENGINES.path, '#enginesSubpageTrigger');
        }
    }
    onChange_() {
        const select = this.shadowRoot.querySelector('select');
        const searchEngine = this.searchEngines_[select.selectedIndex];
        this.browserProxy_.setDefaultSearchEngine(searchEngine.modelIndex);
    }
    onDisableExtension_() {
        this.dispatchEvent(new CustomEvent('refresh-pref', {
            bubbles: true,
            composed: true,
            detail: 'default_search_provider.enabled',
        }));
    }
    onManageSearchEnginesClick_() {
        Router.getInstance().navigateTo(routes.SEARCH_ENGINES);
    }
    isDefaultSearchControlledByPolicy_(pref) {
        return pref.controlledBy ===
            chrome.settingsPrivate.ControlledBy.USER_POLICY;
    }
    isDefaultSearchEngineEnforced_(pref) {
        return pref.enforcement === chrome.settingsPrivate.Enforcement.ENFORCED;
    }
    computeDefaultSearchEngine_() {
        return this.searchEngines_.length ?
            this.searchEngines_.find(searchEngine => searchEngine.default) :
            null;
    }
}
customElements.define(SettingsSearchPageElement.is, SettingsSearchPageElement);
