// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'language-settings-card' is the card element containing language settings.
 */
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../os_settings_page/settings_card.js';
import '../settings_shared.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { isRevampWayfindingEnabled } from '../common/load_time_booleans.js';
import { RouteOriginMixin } from '../common/route_origin_mixin.js';
import { Router, routes } from '../router.js';
import { getTemplate } from './language_settings_card.html.js';
import { ACCESSIBILITY_COMMON_IME_ID } from './languages.js';
const LanguageSettingsCardElementBase = RouteOriginMixin(I18nMixin(PolymerElement));
export class LanguageSettingsCardElement extends LanguageSettingsCardElementBase {
    constructor() {
        super(...arguments);
        // Internal state.
        this.isRevampWayfindingEnabled_ = isRevampWayfindingEnabled();
        // Internal properties for mixins.
        // From RouteOriginMixin. This needs to be defined after
        // `isRevampWayfindingEnabled_`.
        this.route = this.isRevampWayfindingEnabled_ ? routes.SYSTEM_PREFERENCES :
            routes.OS_LANGUAGES;
    }
    static get is() {
        return 'language-settings-card';
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
            languages: Object,
            languageHelper: Object,
            isRevampWayfindingEnabled_: Boolean,
            rowIcons_: {
                type: Object,
                value() {
                    if (isRevampWayfindingEnabled()) {
                        return {
                            languages: 'os-settings:language-revamp',
                        };
                    }
                    return {
                        languages: '',
                    };
                },
            },
        };
    }
    ready() {
        super.ready();
        this.addFocusConfig(routes.OS_LANGUAGES_LANGUAGES, '#languagesRow');
        this.addFocusConfig(routes.OS_LANGUAGES_INPUT, '#inputRow');
    }
    getHeaderText_() {
        if (this.isRevampWayfindingEnabled_) {
            return this.i18n('languagesPageTitle');
        }
        return this.i18n('osLanguagesPageTitle');
    }
    onLanguagesV2Click_() {
        Router.getInstance().navigateTo(routes.OS_LANGUAGES_LANGUAGES);
    }
    onInputClick_() {
        Router.getInstance().navigateTo(routes.OS_LANGUAGES_INPUT);
    }
    /**
     * @param code The language code of the language.
     * @return The display name of the language specified.
     */
    getLanguageDisplayName_(code) {
        if (!code || !this.languageHelper) {
            return '';
        }
        const language = this.languageHelper.getLanguage(code);
        if (!language) {
            return '';
        }
        return language.displayName;
    }
    /**
     * @param id The input method ID.
     * @return The display name of the input method.
     */
    getInputMethodDisplayName_(id) {
        if (!id || !this.languageHelper) {
            return '';
        }
        if (id === ACCESSIBILITY_COMMON_IME_ID) {
            return '';
        }
        return this.languageHelper.getInputMethodDisplayName(id);
    }
}
customElements.define(LanguageSettingsCardElement.is, LanguageSettingsCardElement);
