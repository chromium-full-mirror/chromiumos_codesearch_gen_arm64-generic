// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-search-engines-page' is the settings page
 * containing search engines settings.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/js/cr.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import '../controls/controlled_radio_button.js';
import '../controls/settings_radio_group.js';
import '../simple_confirmation_dialog.js';
import './search_engine_edit_dialog.js';
import './search_engines_list.js';
import './omnibox_extension_entry.js';
import '../settings_shared.css.js';
import '../settings_vars.css.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { GlobalScrollTargetMixin } from '../global_scroll_target_mixin.js';
import { routes } from '../route.js';
import { SearchEnginesBrowserProxyImpl, SearchEnginesInteractions } from './search_engines_browser_proxy.js';
import { getTemplate } from './search_engines_page.html.js';
const SettingsSearchEnginesPageElementBase = GlobalScrollTargetMixin(WebUiListenerMixin(PolymerElement));
export class SettingsSearchEnginesPageElement extends SettingsSearchEnginesPageElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = SearchEnginesBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-search-engines-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Preferences state.
             */
            prefs: {
                type: Object,
                notify: true,
            },
            defaultEngines: Array,
            activeEngines: Array,
            otherEngines: Array,
            extensions: Array,
            /**
             * Needed by GlobalScrollTargetMixin.
             */
            subpageRoute: {
                type: Object,
                value: routes.SEARCH_ENGINES,
            },
            showExtensionsList_: {
                type: Boolean,
                computed: 'computeShowExtensionsList_(extensions)',
            },
            /** Filters out all search engines that do not match. */
            filter: {
                type: String,
                value: '',
            },
            matchingDefaultEngines_: {
                type: Array,
                computed: 'computeMatchingEngines_(defaultEngines, filter)',
            },
            matchingActiveEngines_: {
                type: Array,
                computed: 'computeMatchingEngines_(activeEngines, filter)',
            },
            matchingOtherEngines_: {
                type: Array,
                computed: 'computeMatchingEngines_(otherEngines, filter)',
            },
            matchingExtensions_: {
                type: Array,
                computed: 'computeMatchingEngines_(extensions, filter)',
            },
            omniboxExtensionlastFocused_: Object,
            omniboxExtensionListBlurred_: Boolean,
            dialogModel_: {
                type: Object,
                value: null,
            },
            dialogAnchorElement_: {
                type: Object,
                value: null,
            },
            showEditDialog_: {
                type: Boolean,
                value: false,
            },
            showDeleteConfirmationDialog_: {
                type: Boolean,
                value: false,
            },
        };
    }
    static get observers() {
        return ['extensionsChanged_(extensions, showExtensionsList_)'];
    }
    ready() {
        super.ready();
        this.browserProxy_.getSearchEnginesList().then(this.enginesChanged_.bind(this));
        this.addWebUiListener('search-engines-changed', this.enginesChanged_.bind(this));
        this.addEventListener('view-or-edit-search-engine', e => this.onEditSearchEngine_(e));
        this.addEventListener('delete-search-engine', e => this.onDeleteSearchEngine_(e));
    }
    openEditDialog_(searchEngine, anchorElement) {
        this.dialogModel_ = searchEngine;
        this.dialogAnchorElement_ = anchorElement;
        this.showEditDialog_ = true;
    }
    openDeleteConfirmationDialog_(searchEngine, anchorElement) {
        this.dialogModel_ = searchEngine;
        this.dialogAnchorElement_ = anchorElement;
        this.showDeleteConfirmationDialog_ = true;
    }
    onCloseEditDialog_() {
        this.showEditDialog_ = false;
        focusWithoutInk(this.dialogAnchorElement_);
        this.dialogModel_ = null;
        this.dialogAnchorElement_ = null;
    }
    onCloseDeleteConfirmationDialog_() {
        const dialog = this.shadowRoot.querySelector('settings-simple-confirmation-dialog');
        assert(dialog);
        const confirmed = dialog.wasConfirmed();
        this.showDeleteConfirmationDialog_ = false;
        if (confirmed) {
            assert(this.dialogModel_);
            this.browserProxy_.removeSearchEngine(this.dialogModel_.modelIndex);
            this.dialogAnchorElement_ = null;
        }
        this.dialogModel_ = null;
    }
    onEditSearchEngine_(e) {
        this.openEditDialog_(e.detail.engine, e.detail.anchorElement);
    }
    onDeleteSearchEngine_(e) {
        this.openDeleteConfirmationDialog_(e.detail.engine, e.detail.anchorElement);
    }
    extensionsChanged_() {
        if (this.showExtensionsList_ && this.$.extensions) {
            this.$.extensions.notifyResize();
        }
    }
    enginesChanged_(searchEnginesInfo) {
        this.defaultEngines = searchEnginesInfo.defaults;
        this.activeEngines = searchEnginesInfo.actives;
        this.otherEngines = searchEnginesInfo.others;
        this.extensions = searchEnginesInfo.extensions;
    }
    onAddSearchEngineClick_(e) {
        e.preventDefault();
        this.openEditDialog_(null, this.shadowRoot.querySelector('#addSearchEngine'));
    }
    computeShowExtensionsList_() {
        return this.extensions.length > 0;
    }
    /**
     * Filters the given list based on the currently existing filter string.
     */
    computeMatchingEngines_(list) {
        if (this.filter === '') {
            return list;
        }
        const filter = this.filter.toLowerCase();
        return list.filter(e => {
            return [e.displayName, e.name, e.keyword, e.url].some(term => term.toLowerCase().includes(filter));
        });
    }
    /**
     * @param list The original list.
     * @param filteredList The filtered list.
     * @return Whether to show the "no results" message.
     */
    showNoResultsMessage_(list, filteredList) {
        return list.length > 0 && filteredList.length === 0;
    }
    onKeyboardShortcutSettingChange_() {
        const spaceEnabled = this.$.keyboardShortcutSettingGroup.selected === 'true';
        this.browserProxy_.recordSearchEnginesPageHistogram(spaceEnabled ?
            SearchEnginesInteractions.KEYBOARD_SHORTCUT_SPACE_OR_TAB :
            SearchEnginesInteractions.KEYBOARD_SHORTCUT_TAB);
    }
}
customElements.define(SettingsSearchEnginesPageElement.is, SettingsSearchEnginesPageElement);
