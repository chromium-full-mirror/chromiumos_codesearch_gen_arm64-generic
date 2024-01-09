// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-privacy-hub-microphone-subpage' contains a detailed overview about
 * the state of the system microphone access.
 */
import './privacy_hub_app_permission_row.js';
import { PermissionType } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { isPermissionEnabled } from 'chrome://resources/cr_components/app_management/permission_util.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { AppPermissionsObserverReceiver } from '../mojom-webui/app_permission_handler.mojom-webui.js';
import { MediaDevicesProxy } from './media_devices_proxy.js';
import { getAppPermissionProvider } from './mojo_interface_provider.js';
import { PrivacyHubBrowserProxyImpl } from './privacy_hub_browser_proxy.js';
import { MICROPHONE_SUBPAGE_USER_ACTION_HISTOGRAM_NAME, NUMBER_OF_POSSIBLE_USER_ACTIONS, PrivacyHubSensorSubpageUserAction } from './privacy_hub_metrics_util.js';
import { getTemplate } from './privacy_hub_microphone_subpage.html.js';
/**
 * Whether the app has microphone permission defined.
 * */
function hasMicrophonePermission(app) {
    return app.permissions[PermissionType.kMicrophone] !== undefined;
}
const SettingsPrivacyHubMicrophoneSubpageBase = WebUiListenerMixin(I18nMixin(PrefsMixin(PolymerElement)));
export class SettingsPrivacyHubMicrophoneSubpage extends SettingsPrivacyHubMicrophoneSubpageBase {
    static get is() {
        return 'settings-privacy-hub-microphone-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Apps with microphone permission.
             */
            appList_: {
                type: Array,
                value: [],
            },
            /**
             * The list of microphones connected to the device.
             */
            connectedMicrophones_: {
                type: Array,
                value: [],
            },
            /**
             * Indicates whether `connectedMicrophones_` is empty.
             */
            isMicListEmpty_: {
                type: Boolean,
                computed: 'computeIsMicListEmpty_(connectedMicrophones_)',
            },
            /**
             * Indicates whether the microphone hardware toggle is active.
             */
            microphoneHardwareToggleActive_: {
                type: Boolean,
                value: false,
            },
            /**
             * Indicates whether the `cr-toggle` for microphone should be disabled.
             */
            shouldDisableMicrophoneToggle_: {
                type: Boolean,
                computed: 'computeShouldDisableMicrophoneToggle_(isMicListEmpty_, ' +
                    'microphoneHardwareToggleActive_)',
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
        this.addWebUiListener('microphone-hardware-toggle-changed', (enabled) => {
            this.setMicrophoneHardwareToggleState_(enabled);
        });
        this.browserProxy_.getInitialMicrophoneHardwareToggleState().then((enabled) => {
            this.setMicrophoneHardwareToggleState_(enabled);
        });
        this.updateMicrophoneList_();
        MediaDevicesProxy.getMediaDevices().addEventListener('devicechange', () => this.updateMicrophoneList_());
    }
    async connectedCallback() {
        super.connectedCallback();
        this.appPermissionsObserverReceiver_ =
            new AppPermissionsObserverReceiver(this);
        this.mojoInterfaceProvider_.addObserver(this.appPermissionsObserverReceiver_.$.bindNewPipeAndPassRemote());
        await this.updateAppList_();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.appPermissionsObserverReceiver_.$.close();
    }
    setMicrophoneHardwareToggleState_(enabled) {
        this.microphoneHardwareToggleActive_ = enabled;
    }
    async updateAppList_() {
        const apps = (await this.mojoInterfaceProvider_.getApps()).apps;
        this.appList_ = apps.filter(hasMicrophonePermission);
    }
    async updateMicrophoneList_() {
        const connectedMicrophones = [];
        const devices = await MediaDevicesProxy.getMediaDevices().enumerateDevices();
        devices.forEach((device) => {
            if (device.kind === 'audioinput' && device.deviceId !== 'default') {
                connectedMicrophones.push(device.label);
            }
        });
        this.connectedMicrophones_ = connectedMicrophones;
    }
    computeIsMicListEmpty_() {
        return this.connectedMicrophones_.length === 0;
    }
    computeOnOffText_() {
        const microphoneAllowed = this.getPref('ash.user.microphone_allowed').value;
        return microphoneAllowed ? this.i18n('deviceOn') : this.i18n('deviceOff');
    }
    computeOnOffSubtext_() {
        const microphoneAllowed = this.getPref('ash.user.microphone_allowed').value;
        return microphoneAllowed ? this.i18n('microphoneToggleSubtext') :
            this.i18n('blockedForAllText');
    }
    computeShouldDisableMicrophoneToggle_() {
        return this.microphoneHardwareToggleActive_ || this.isMicListEmpty_;
    }
    onManagePermissionsInChromeRowClick_() {
        chrome.metricsPrivate.recordEnumerationValue(MICROPHONE_SUBPAGE_USER_ACTION_HISTOGRAM_NAME, PrivacyHubSensorSubpageUserAction.WEBSITE_PERMISSION_LINK_CLICKED, NUMBER_OF_POSSIBLE_USER_ACTIONS);
        window.open('chrome://settings/content/microphone');
    }
    /**
     * Returns true if the microphone permission of the app is in Allowed or
     * equivalent state.
     */
    isMicrophonePermissionEnabled_(app) {
        assert(hasMicrophonePermission(app));
        return isPermissionEnabled(app.permissions[PermissionType.kMicrophone].value);
    }
    /** Implements AppPermissionsObserver.OnAppUpdated */
    onAppUpdated(updatedApp) {
        if (!hasMicrophonePermission(updatedApp)) {
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
    getMicrophoneToggle_() {
        return castExists(this.shadowRoot.querySelector('#microphoneToggle'));
    }
    onAccessStatusRowClick_() {
        if (this.shouldDisableMicrophoneToggle_) {
            return;
        }
        this.getMicrophoneToggle_().click();
    }
    onMicrophoneToggleClick_() {
        chrome.metricsPrivate.recordEnumerationValue(MICROPHONE_SUBPAGE_USER_ACTION_HISTOGRAM_NAME, PrivacyHubSensorSubpageUserAction.SYSTEM_ACCESS_CHANGED, NUMBER_OF_POSSIBLE_USER_ACTIONS);
    }
}
customElements.define(SettingsPrivacyHubMicrophoneSubpage.is, SettingsPrivacyHubMicrophoneSubpage);
