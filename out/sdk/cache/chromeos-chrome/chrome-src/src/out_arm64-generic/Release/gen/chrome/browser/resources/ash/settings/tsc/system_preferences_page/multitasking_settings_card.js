// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'storage-and-power-settings-card' is the card element containing storage and
 * power settings.
 */
import '../controls/settings_toggle_button.js';
import '../os_settings_page/settings_card.js';
import '../settings_shared.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { shouldShowMultitasking } from '../common/load_time_booleans.js';
import { RouteObserverMixin } from '../common/route_observer_mixin.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { routes } from '../router.js';
import { getTemplate } from './multitasking_settings_card.html.js';
const MultitaskingSettingsCardElementBase = RouteObserverMixin(DeepLinkingMixin(I18nMixin(PolymerElement)));
export class MultitaskingSettingsCardElement extends MultitaskingSettingsCardElementBase {
    static get is() {
        return 'multitasking-settings-card';
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
            /**
             * Used by DeepLinkingMixin to focus this element's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([Setting.kSnapWindowSuggestions]),
            },
            shouldShowMultitasking_: {
                type: Boolean,
                value() {
                    return shouldShowMultitasking();
                },
                readOnly: true,
            },
        };
    }
    currentRouteChanged(newRoute) {
        if (newRoute !== routes.SYSTEM_PREFERENCES) {
            return;
        }
        this.attemptDeepLink();
    }
    // The following strings are only defined when the OsSettingsRevampWayfinding
    // feature flag is enabled. Avoid using $i18n{} templating in HTML to avoid
    // crashes when the feature is disabled.
    getHeaderText_() {
        return this.i18n('multitaskingSettingsCardTitle');
    }
    getLabelText_() {
        return this.i18n('snapWindowLabel');
    }
    getDescriptionText_() {
        return this.i18n('snapWindowDescription');
    }
}
customElements.define(MultitaskingSettingsCardElement.is, MultitaskingSettingsCardElement);
