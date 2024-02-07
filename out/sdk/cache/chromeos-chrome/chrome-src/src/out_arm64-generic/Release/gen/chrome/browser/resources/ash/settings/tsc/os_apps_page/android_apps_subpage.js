// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'android-apps-subpage' is the settings subpage for managing android apps.
 */
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/ash/common/cr_elements/cr_link_row/cr_link_row.js';
import '../settings_shared.css.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { isRevampWayfindingEnabled } from '../common/load_time_booleans.js';
import { RouteObserverMixin } from '../common/route_observer_mixin.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { Router, routes } from '../router.js';
import { AndroidAppsBrowserProxyImpl } from './android_apps_browser_proxy.js';
import { getTemplate } from './android_apps_subpage.html.js';
const GOOGLE_PLAY_STORE_URL = 'https://play.google.com/store/';
const SettingsAndroidAppsSubpageElementBase = DeepLinkingMixin(RouteObserverMixin(PrefsMixin(I18nMixin(PolymerElement))));
export class SettingsAndroidAppsSubpageElement extends SettingsAndroidAppsSubpageElementBase {
    static get is() {
        return 'settings-android-apps-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            androidAppsInfo: {
                type: Object,
            },
            playStoreEnabled_: {
                type: Boolean,
                computed: 'computePlayStoreEnabled_(androidAppsInfo)',
                observer: 'onPlayStoreEnabledChanged_',
            },
            dialogBody_: {
                type: TrustedHTML,
                value() {
                    return this.i18nAdvanced('androidAppsDisableDialogMessage', { substitutions: [], tags: ['br'] });
                },
            },
            /** Whether Arc VM manage usb subpage should be shown. */
            isArcVmManageUsbAvailable: Boolean,
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([
                    Setting.kManageAndroidPreferences,
                    Setting.kRemovePlayStore,
                ]),
            },
            isRevampWayfindingEnabled_: {
                type: Boolean,
                value() {
                    return isRevampWayfindingEnabled();
                },
                readOnly: true,
            },
        };
    }
    currentRouteChanged(route) {
        // Does not apply to this page.
        if (route !== routes.ANDROID_APPS_DETAILS) {
            return;
        }
        this.attemptDeepLink();
    }
    onPlayStoreEnabledChanged_(enabled) {
        if (!enabled &&
            Router.getInstance().currentRoute === routes.ANDROID_APPS_DETAILS) {
            Router.getInstance().navigateToPreviousRoute();
        }
    }
    computePlayStoreEnabled_() {
        return this.androidAppsInfo.playStoreEnabled;
    }
    allowRemove_() {
        return this.prefs.arc.enabled.enforcement !==
            chrome.settingsPrivate.Enforcement.ENFORCED;
    }
    /**
     * Shows a confirmation dialog when disabling android apps.
     */
    onRemoveClick_() {
        this.$.confirmDisableDialog.showModal();
    }
    /**
     * Handles the shared proxy confirmation dialog 'Confirm' button.
     */
    onConfirmDisableDialogConfirm_() {
        this.setPrefValue('arc.enabled', false);
        this.$.confirmDisableDialog.close();
        // Sub-page will be closed in onAndroidAppsInfoUpdate_ call.
    }
    /**
     * Handles the shared proxy confirmation dialog 'Cancel' button or a cancel
     * event.
     */
    onConfirmDisableDialogCancel_() {
        this.$.confirmDisableDialog.close();
    }
    onConfirmDisableDialogClose_() {
        focusWithoutInk(castExists(this.shadowRoot.querySelector('#remove')));
    }
    onManageAndroidAppsClick_(event) {
        // |event.detail| is the click count. Keyboard events will have 0 clicks.
        const isKeyboardAction = event.detail === 0;
        AndroidAppsBrowserProxyImpl.getInstance().showAndroidAppsSettings(isKeyboardAction);
    }
    onSharedUsbDevicesClick_() {
        Router.getInstance().navigateTo(routes.ANDROID_APPS_DETAILS_ARC_VM_SHARED_USB_DEVICES);
    }
    getGuestOsSharedUsbDevicesSublabel_() {
        return this.isRevampWayfindingEnabled_ ?
            this.i18n('guestOsSharedUsbDevicesDescription') :
            null;
    }
    onOpenGooglePlayClick_() {
        AndroidAppsBrowserProxyImpl.getInstance().openGooglePlayStore(GOOGLE_PLAY_STORE_URL);
    }
}
customElements.define(SettingsAndroidAppsSubpageElement.is, SettingsAndroidAppsSubpageElement);
