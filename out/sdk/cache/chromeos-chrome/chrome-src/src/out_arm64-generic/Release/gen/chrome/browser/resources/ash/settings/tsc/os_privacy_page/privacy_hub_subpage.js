// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'os-settings-privacy-hub-subpage' contains privacy hub configurations.
 */
import 'chrome://resources/cr_components/app_management/icons.html.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import '/shared/settings/controls/settings_toggle_button.js';
import '../settings_shared.css.js';
import './metrics_consent_toggle_button.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { DeepLinkingMixin } from '../deep_linking_mixin.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { RouteObserverMixin } from '../route_observer_mixin.js';
import { Router, routes } from '../router.js';
import { MediaDevicesProxy } from './media_devices_proxy.js';
import { PrivacyHubBrowserProxyImpl } from './privacy_hub_browser_proxy.js';
import { getTemplate } from './privacy_hub_subpage.html.js';
/**
 * These values are persisted to logs and should not be renumbered or re-used.
 * Keep in sync with PrivacyHubNavigationOrigin in
 * tools/metrics/histograms/enums.xml and
 * ash/system/privacy_hub/privacy_hub_metrics.h.
 */
export const PrivacyHubNavigationOrigin = {
    SYSTEM_SETTINGS: 0,
    NOTIFICATION: 1,
};
const SettingsPrivacyHubSubpageBase = PrefsMixin(DeepLinkingMixin(RouteObserverMixin(WebUiListenerMixin(I18nMixin(PolymerElement)))));
export class SettingsPrivacyHubSubpage extends SettingsPrivacyHubSubpageBase {
    static get is() {
        return 'settings-privacy-hub-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Whether the location access control should be displayed in Privacy Hub.
             */
            showPrivacyHubLocationControl_: {
                type: Boolean,
                readOnly: true,
                value: function () {
                    return loadTimeData.getBoolean('showPrivacyHubLocationControl');
                },
            },
            useCameraToggleFallbackSubtext_: {
                type: Boolean,
                value: false,
            },
            /**
             * The list of connected cameras.
             */
            camerasConnected_: {
                type: Array,
                value: [],
            },
            isCameraListEmpty_: {
                type: Boolean,
                computed: 'computeIsCameraListEmpty_(camerasConnected_)',
            },
            isHatsSurveyEnabled_: {
                type: Boolean,
                readOnly: true,
                value: function () {
                    return loadTimeData.getBoolean('isPrivacyHubHatsEnabled');
                },
            },
            /**
             * The list of connected microphones.
             */
            microphonesConnected_: {
                type: Array,
                value: [],
            },
            isMicListEmpty_: {
                type: Boolean,
                computed: 'computeIsMicListEmpty_(microphonesConnected_)',
            },
            microphoneHardwareToggleActive_: {
                type: Boolean,
                value: false,
            },
            shouldDisableMicrophoneToggle_: {
                type: Boolean,
                computed: 'computeShouldDisableMicrophoneToggle_(isMicListEmpty_, ' +
                    'microphoneHardwareToggleActive_)',
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
            /**
             * Whether the features related to app permissions should be displayed in
             * privacy hub.
             */
            showAppPermissions_: {
                type: Boolean,
                readOnly: true,
                value: () => {
                    return loadTimeData.getBoolean('showAppPermissionsInsidePrivacyHub');
                },
            },
            /**
             * Whether the part of speak-on-mute detection should be displayed.
             */
            showSpeakOnMuteDetectionPage_: {
                type: Boolean,
                readOnly: true,
                value: () => {
                    return loadTimeData.getBoolean('showSpeakOnMuteDetectionPage');
                },
            },
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([
                    Setting.kCameraOnOff,
                    Setting.kMicrophoneOnOff,
                    Setting.kSpeakOnMuteDetectionOnOff,
                    Setting.kGeolocationOnOff,
                    Setting.kUsageStatsAndCrashReports,
                ]),
            },
        };
    }
    constructor() {
        super();
        this.browserProxy_ = PrivacyHubBrowserProxyImpl.getInstance();
    }
    ready() {
        super.ready();
        assert(loadTimeData.getBoolean('showPrivacyHubPage'));
        this.addWebUiListener('microphone-hardware-toggle-changed', (enabled) => {
            this.setMicrophoneHardwareToggleState_(enabled);
        });
        this.browserProxy_.getInitialMicrophoneHardwareToggleState().then((enabled) => {
            this.setMicrophoneHardwareToggleState_(enabled);
        });
        this.addWebUiListener('force-disable-camera-switch', (disabled) => {
            this.cameraSwitchForceDisabled_ = disabled;
        });
        this.browserProxy_.getInitialCameraSwitchForceDisabledState().then((disabled) => {
            this.cameraSwitchForceDisabled_ = disabled;
        });
        this.browserProxy_.getCameraLedFallbackState().then((enabled) => {
            this.setCameraLedFallbackState_(enabled);
        });
        this.updateMediaDeviceLists_();
        MediaDevicesProxy.getMediaDevices().addEventListener('devicechange', () => this.updateMediaDeviceLists_());
    }
    currentRouteChanged(route) {
        // Does not apply to this page.
        if (route !== routes.PRIVACY_HUB) {
            if (this.isHatsSurveyEnabled_) {
                this.browserProxy_.sendLeftOsPrivacyPage();
            }
            return;
        }
        if (this.isHatsSurveyEnabled_) {
            this.browserProxy_.sendOpenedOsPrivacyPage();
        }
        this.attemptDeepLink();
    }
    /**
     * @return Whether the list of cameras displayed in this page is empty.
     */
    computeIsCameraListEmpty_() {
        return this.camerasConnected_.length === 0;
    }
    /**
     * @return Whether the list of microphones displayed in this page is empty.
     */
    computeIsMicListEmpty_() {
        return this.microphonesConnected_.length === 0;
    }
    setMicrophoneHardwareToggleState_(enabled) {
        if (enabled) {
            this.microphoneHardwareToggleActive_ = true;
        }
        else {
            this.microphoneHardwareToggleActive_ = false;
        }
    }
    /**
     * @param enabled whether the fallback mechanism for camera LED is enabled
     */
    setCameraLedFallbackState_(enabled) {
        this.useCameraToggleFallbackSubtext_ = enabled;
    }
    /**
     * @return Whether privacy hub microphone toggle should be disabled.
     */
    computeShouldDisableMicrophoneToggle_() {
        return this.microphoneHardwareToggleActive_ || this.isMicListEmpty_;
    }
    /**
     * @return Whether privacy hub camera toggle should be disabled.
     */
    computeShouldDisableCameraToggle_() {
        return this.cameraSwitchForceDisabled_ || this.isCameraListEmpty_;
    }
    updateMediaDeviceLists_() {
        MediaDevicesProxy.getMediaDevices().enumerateDevices().then((devices) => {
            const connectedCameras = [];
            const connectedMicrophones = [];
            devices.forEach((device) => {
                if (device.kind === 'videoinput') {
                    connectedCameras.push(device.label);
                }
                else if (device.kind === 'audioinput' && device.deviceId !== 'default') {
                    connectedMicrophones.push(device.label);
                }
            });
            this.camerasConnected_ = connectedCameras;
            this.microphonesConnected_ = connectedMicrophones;
        });
    }
    onCameraToggleChanged_(event) {
        chrome.metricsPrivate.recordBoolean('ChromeOS.PrivacyHub.Camera.Settings.Enabled', event.target.checked);
    }
    onMicrophoneToggleChanged_(event) {
        chrome.metricsPrivate.recordBoolean('ChromeOS.PrivacyHub.Microphone.Settings.Enabled', event.target.checked);
    }
    navigateToMicrophoneSubpage_() {
        Router.getInstance().navigateTo(routes.PRIVACY_HUB_MICROPHONE);
    }
    onMicrophoneWrapperClick_() {
        this.navigateToMicrophoneSubpage_();
    }
    onMicrophoneSubpageArrowClick_(e) {
        this.navigateToMicrophoneSubpage_();
        e.stopPropagation();
    }
    onGeolocationAreaClick_() {
        Router.getInstance().navigateTo(routes.PRIVACY_HUB_GEOLOCATION);
    }
}
customElements.define(SettingsPrivacyHubSubpage.is, SettingsPrivacyHubSubpage);
