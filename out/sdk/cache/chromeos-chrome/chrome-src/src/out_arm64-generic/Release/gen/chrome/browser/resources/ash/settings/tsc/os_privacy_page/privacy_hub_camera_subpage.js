// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-privacy-hub-camera-subpage' contains a detailed overview about the
 * state of the system camera access.
 */
import './privacy_hub_app_permission_row.js';
import { PermissionType } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { isPermissionEnabled } from 'chrome://resources/cr_components/app_management/permission_util.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { AppPermissionsObserverReceiver } from '../mojom-webui/app_permission_handler.mojom-webui.js';
import { MediaDevicesProxy } from './media_devices_proxy.js';
import { getAppPermissionProvider } from './mojo_interface_provider.js';
import { PrivacyHubBrowserProxyImpl } from './privacy_hub_browser_proxy.js';
import { getTemplate } from './privacy_hub_camera_subpage.html.js';
import { CAMERA_SUBPAGE_USER_ACTION_HISTOGRAM_NAME, NUMBER_OF_POSSIBLE_USER_ACTIONS, PrivacyHubSensorSubpageUserAction } from './privacy_hub_metrics_util.js';
/**
 * Whether the app has camera permission defined.
 */
function hasCameraPermission(app) {
    return app.permissions[PermissionType.kCamera] !== undefined;
}
const SettingsPrivacyHubCameraSubpageBase = WebUiListenerMixin(I18nMixin(PrefsMixin(PolymerElement)));
export class SettingsPrivacyHubCameraSubpage extends SettingsPrivacyHubCameraSubpageBase {
    static get is() {
        return 'settings-privacy-hub-camera-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Apps with camera permission defined.
             */
            appList_: {
                type: Array,
                value: [],
            },
            connectedCameras_: {
                type: Array,
                value: [],
            },
            isCameraListEmpty_: {
                type: Boolean,
                computed: 'computeIsCameraListEmpty_(connectedCameras_)',
            },
            /**
             * Tracks if the Chrome code wants the camera switch to be disabled.
             */
            cameraSwitchForceDisabled_: {
                type: Boolean,
                value: false,
            },
            shouldDisableCameraToggle_: {
                type: Boolean,
                computed: 'computeShouldDisableCameraToggle_(isCameraListEmpty_, ' +
                    'cameraSwitchForceDisabled_)',
            },
        };
    }
    constructor() {
        super();
        this.browserProxy_ = PrivacyHubBrowserProxyImpl.getInstance();
        this.mojoInterfaceProvider_ = getAppPermissionProvider();
        this.appPermissionsObserverReceiver_ = null;
    }
    ready() {
        super.ready();
        this.addWebUiListener('force-disable-camera-switch', (disabled) => {
            this.cameraSwitchForceDisabled_ = disabled;
        });
        this.browserProxy_.getInitialCameraSwitchForceDisabledState().then((disabled) => {
            this.cameraSwitchForceDisabled_ = disabled;
        });
        this.updateCameraList_();
        MediaDevicesProxy.getMediaDevices().addEventListener('devicechange', () => this.updateCameraList_());
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
        this.appList_ = apps.filter(hasCameraPermission);
    }
    isCameraPermissionEnabled_(app) {
        const permission = castExists(app.permissions[PermissionType.kCamera]);
        return isPermissionEnabled(permission.value);
    }
    /** Implements AppPermissionsObserver.OnAppUpdated */
    onAppUpdated(updatedApp) {
        if (!hasCameraPermission(updatedApp)) {
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
    async updateCameraList_() {
        const connectedCameras = [];
        const devices = await MediaDevicesProxy.getMediaDevices().enumerateDevices();
        devices.forEach((device) => {
            if (device.kind === 'videoinput') {
                connectedCameras.push(device.label);
            }
        });
        this.connectedCameras_ = connectedCameras;
    }
    computeIsCameraListEmpty_() {
        return this.connectedCameras_.length === 0;
    }
    computeOnOffText_() {
        const cameraAllowed = this.getPref('ash.user.camera_allowed').value;
        return cameraAllowed ? this.i18n('deviceOn') : this.i18n('deviceOff');
    }
    computeOnOffSubtext_() {
        const cameraAllowed = this.getPref('ash.user.camera_allowed').value;
        return cameraAllowed ? this.i18n('cameraToggleSubtext') :
            this.i18n('blockedForAllText');
    }
    computeShouldDisableCameraToggle_() {
        return this.cameraSwitchForceDisabled_ || this.isCameraListEmpty_;
    }
    getCameraToggle_() {
        return castExists(this.shadowRoot.querySelector('#cameraToggle'));
    }
    onAccessStatusRowClick_() {
        if (this.shouldDisableCameraToggle_) {
            return;
        }
        this.getCameraToggle_().click();
    }
    onManagePermissionsInChromeRowClick_() {
        chrome.metricsPrivate.recordEnumerationValue(CAMERA_SUBPAGE_USER_ACTION_HISTOGRAM_NAME, PrivacyHubSensorSubpageUserAction.WEBSITE_PERMISSION_LINK_CLICKED, NUMBER_OF_POSSIBLE_USER_ACTIONS);
        window.open('chrome://settings/content/camera');
    }
    onCameraToggleClick_() {
        chrome.metricsPrivate.recordEnumerationValue(CAMERA_SUBPAGE_USER_ACTION_HISTOGRAM_NAME, PrivacyHubSensorSubpageUserAction.SYSTEM_ACCESS_CHANGED, NUMBER_OF_POSSIBLE_USER_ACTIONS);
    }
}
customElements.define(SettingsPrivacyHubCameraSubpage.is, SettingsPrivacyHubCameraSubpage);
