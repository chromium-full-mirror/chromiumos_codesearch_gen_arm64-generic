// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-privacy-hub-geolocation-subpage' contains a detailed overview about
 * the state of the system geolocation access.
 */
import './privacy_hub_app_permission_row.js';
import { PermissionType } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { isPermissionEnabled } from 'chrome://resources/cr_components/app_management/permission_util.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { assertExhaustive, castExists } from '../assert_extras.js';
import { AppPermissionsObserverReceiver } from '../mojom-webui/app_permission_handler.mojom-webui.js';
import { getAppPermissionProvider } from './mojo_interface_provider.js';
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
/**
 * Whether the app has location permission defined.
 */
function hasLocationPermission(app) {
    return app.permissions[PermissionType.kLocation] !== undefined;
}
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
            /**
             * Apps with location permission defined.
             */
            appList_: {
                type: Array,
                value: [],
            },
            isGeolocationAllowedForApps_: {
                type: Boolean,
                computed: 'computedIsGeolocationAllowedForApps_(' +
                    'prefs.ash.user.geolocation_access_level.value)',
            },
        };
    }
    constructor() {
        super();
        this.mojoInterfaceProvider_ = getAppPermissionProvider();
        this.appPermissionsObserverReceiver_ = null;
    }
    connectedCallback() {
        super.connectedCallback();
        this.appPermissionsObserverReceiver_ =
            new AppPermissionsObserverReceiver(this);
        this.mojoInterfaceProvider_.addObserver(this.appPermissionsObserverReceiver_.$.bindNewPipeAndPassRemote());
        this.updateAppList_();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.appPermissionsObserverReceiver_.$.close();
    }
    async updateAppList_() {
        const apps = (await this.mojoInterfaceProvider_.getApps()).apps;
        this.appList_ = apps.filter(hasLocationPermission);
    }
    isLocationPermissionEnabled_(app) {
        const permission = castExists(app.permissions[PermissionType.kLocation]);
        return isPermissionEnabled(permission.value);
    }
    /** Implements AppPermissionsObserver.OnAppUpdated */
    onAppUpdated(updatedApp) {
        if (!hasLocationPermission(updatedApp)) {
            return;
        }
        const idx = this.appList_.findIndex(app => app.id === updatedApp.id);
        if (idx === -1) {
            // New app installed.
            this.push('appList_', updatedApp);
        }
        else {
            // An already installed app is updated.
            this.splice('appList_', idx, 1, updatedApp);
        }
    }
    /** Implements AppPermissionsObserver.OnAppRemoved */
    onAppRemoved(appId) {
        const idx = this.appList_.findIndex(app => app.id === appId);
        if (idx !== -1) {
            this.splice('appList_', idx, 1);
        }
    }
    computedIsGeolocationAllowedForApps_() {
        const accessLevel = this.getPref('ash.user.geolocation_access_level')
            .value;
        switch (accessLevel) {
            case GeolocationAccessLevel.ALLOWED:
                return true;
            case GeolocationAccessLevel.DISALLOWED:
            case GeolocationAccessLevel.ONLY_ALLOWED_FOR_SYSTEM:
                return false;
            default:
                assertExhaustive(accessLevel);
        }
    }
    onManagePermissionsInChromeRowClick_() {
        OpenWindowProxyImpl.getInstance().openUrl('chrome://settings/content/location');
    }
    recordMetric_() {
        const accessLevel = this.$.geolocationDropdown.pref.value;
        chrome.metricsPrivate.recordEnumerationValue(LOCATION_PERMISSION_CHANGE_FROM_SETTINGS_HISTOGRAM_NAME, accessLevel, GEOLOCATION_ACCESS_LEVEL_ENUM_SIZE);
    }
    geolocationAllowedForSystem_() {
        return this.getPref('ash.user.geolocation_access_level')
            .value !== GeolocationAccessLevel.DISALLOWED;
    }
    getSystemServicesPermissionText_() {
        return this.geolocationAllowedForSystem_() ?
            this.i18n('privacyHubSystemServicesAllowedText') :
            this.i18n('privacyHubSystemServicesBlockedText');
    }
}
customElements.define(SettingsPrivacyHubGeolocationSubpage.is, SettingsPrivacyHubGeolocationSubpage);
