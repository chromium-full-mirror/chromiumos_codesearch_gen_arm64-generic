// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './privacy_hub_geolocation_subpage.html.js';
import { LOCATION_PERMISSION_CHANGE_FROM_SETTINGS_HISTOGRAM_NAME } from './privacy_hub_metrics_util.js';
/**
 * Geolocation access levels for the ChromeOS system.
 * This must be kept in sync with `GeolocationAccessLevel` in
 * ash/constants/geolocation_access_level.h
 */
export var GeolocationAccessLevel;
(function (GeolocationAccessLevel) {
    GeolocationAccessLevel[GeolocationAccessLevel["DISALLOWED"] = 0] = "DISALLOWED";
    GeolocationAccessLevel[GeolocationAccessLevel["ALLOWED"] = 1] = "ALLOWED";
    GeolocationAccessLevel[GeolocationAccessLevel["ONLY_ALLOWED_FOR_SYSTEM"] = 2] = "ONLY_ALLOWED_FOR_SYSTEM";
})(GeolocationAccessLevel || (GeolocationAccessLevel = {}));
export const GEOLOCATION_ACCESS_LEVEL_ENUM_SIZE = Object.keys(GeolocationAccessLevel).length;
const SettingsPrivacyHubGeolocationSubpageBase = PrefsMixin(I18nMixin(PolymerElement));
export class SettingsPrivacyHubGeolocationSubpage extends SettingsPrivacyHubGeolocationSubpageBase {
    static get is() {
        return 'settings-privacy-hub-geolocation-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            geolocationMapTargets_: {
                type: Object,
                value() {
                    return [
                        {
                            value: GeolocationAccessLevel.ALLOWED,
                            name: this.i18n('geolocationAccessLevelAllowed'),
                        },
                        {
                            value: GeolocationAccessLevel.ONLY_ALLOWED_FOR_SYSTEM,
                            name: this.i18n('geolocationAccessLevelOnlyAllowedForSystem'),
                        },
                        {
                            value: GeolocationAccessLevel.DISALLOWED,
                            name: this.i18n('geolocationAccessLevelDisallowed'),
                        },
                    ];
                },
            },
        };
    }
    recordMetric_() {
        const accessLevel = this.$.geolocationDropdown.pref.value;
        chrome.metricsPrivate.recordEnumerationValue(LOCATION_PERMISSION_CHANGE_FROM_SETTINGS_HISTOGRAM_NAME, accessLevel, GEOLOCATION_ACCESS_LEVEL_ENUM_SIZE);
    }
}
customElements.define(SettingsPrivacyHubGeolocationSubpage.is, SettingsPrivacyHubGeolocationSubpage);
