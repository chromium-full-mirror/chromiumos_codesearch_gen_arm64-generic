// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'search-and-assistant-settings-card' is the card element containing search
 * and assistant settings.
 */
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../os_settings_page/settings_card.js';
import '../settings_shared.css.js';
import './search_engine.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { isAssistantAllowed, isRevampWayfindingEnabled, shouldShowQuickAnswersSettings } from '../common/load_time_booleans.js';
import { RouteOriginMixin } from '../common/route_origin_mixin.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { Router, routes } from '../router.js';
import { getTemplate } from './search_and_assistant_settings_card.html.js';
const SearchAndAssistantSettingsCardElementBase = DeepLinkingMixin(RouteOriginMixin(I18nMixin(PolymerElement)));
export class SearchAndAssistantSettingsCardElement extends SearchAndAssistantSettingsCardElementBase {
    static get is() {
        return 'search-and-assistant-settings-card';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            prefs: {
                type: Object,
                notify: true,
            },
            shouldShowQuickAnswersSettings_: {
                type: Boolean,
                value: () => {
                    return shouldShowQuickAnswersSettings();
                },
            },
            /** Can be disallowed due to flag, policy, locale, etc. */
            isAssistantAllowed_: {
                type: Boolean,
                value: () => {
                    return isAssistantAllowed();
                },
            },
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([Setting.kPreferredSearchEngine]),
            },
            isRevampWayfindingEnabled_: {
                type: Boolean,
                value() {
                    return isRevampWayfindingEnabled();
                },
                readOnly: true,
            },
            rowIcons_: {
                type: Object,
                value() {
                    if (isRevampWayfindingEnabled()) {
                        return {
                            searchEngine: 'os-settings:explore',
                            assistant: 'os-settings:assistant',
                            contentRecommendations: 'os-settings:content-recommend',
                        };
                    }
                    return {
                        searchEngine: '',
                        assistant: '',
                        contentRecommendations: '',
                    };
                },
            },
        };
    }
    constructor() {
        super();
        /** RouteOriginMixin overrde */
        this.route = this.isRevampWayfindingEnabled_ ? routes.SYSTEM_PREFERENCES :
            routes.OS_SEARCH;
    }
    ready() {
        super.ready();
        this.addFocusConfig(routes.SEARCH_SUBPAGE, '#searchRow');
        this.addFocusConfig(routes.GOOGLE_ASSISTANT, '#assistantRow');
    }
    currentRouteChanged(newRoute, oldRoute) {
        super.currentRouteChanged(newRoute, oldRoute);
        // Does not apply to this page.
        if (newRoute !== this.route) {
            return;
        }
        this.attemptDeepLink();
    }
    onSearchClick_() {
        assert(this.shouldShowQuickAnswersSettings_);
        Router.getInstance().navigateTo(routes.SEARCH_SUBPAGE);
    }
    onGoogleAssistantClick_() {
        assert(this.isAssistantAllowed_);
        Router.getInstance().navigateTo(routes.GOOGLE_ASSISTANT);
    }
    getAssistantEnabledDisabledLabel_(isAssistantEnabled) {
        return this.i18n(isAssistantEnabled ? 'searchGoogleAssistantEnabled' :
            'searchGoogleAssistantDisabled');
    }
}
customElements.define(SearchAndAssistantSettingsCardElement.is, SearchAndAssistantSettingsCardElement);
