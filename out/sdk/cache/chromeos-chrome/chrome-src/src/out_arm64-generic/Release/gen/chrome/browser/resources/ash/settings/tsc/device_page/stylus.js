// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-stylus' is the settings subpage with stylus-specific settings.
 */
import 'chrome://resources/ash/common/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/ash/common/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/ash/common/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/js/action_link.js';
import 'chrome://resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import '../controls/settings_toggle_button.js';
import '../settings_shared.css.js';
import { CrPolicyIndicatorType } from 'chrome://resources/ash/common/cr_elements/policy/cr_policy_indicator_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { microTask, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { assertExists } from '../assert_extras.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { RouteObserverMixin } from '../common/route_observer_mixin.js';
import { recordSettingChange } from '../metrics_recorder.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { routes } from '../router.js';
import { DevicePageBrowserProxyImpl, NoteAppLockScreenSupport } from './device_page_browser_proxy.js';
import { getTemplate } from './stylus.html.js';
const FIND_MORE_APPS_URL = 'https://play.google.com/store/apps/' +
    'collection/promotion_30023cb_stylus_apps';
const SettingsStylusElementBase = DeepLinkingMixin(RouteObserverMixin(PolymerElement));
export class SettingsStylusElement extends SettingsStylusElementBase {
    static get is() {
        return 'settings-stylus';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /** Preferences state. */
            prefs: {
                type: Object,
                notify: true,
            },
            /**
             * Policy indicator type for user policy - used for policy indicator UI
             * shown when an app that is not allowed to run on lock screen by policy
             * is selected.
             */
            userPolicyIndicator_: {
                type: String,
                value: CrPolicyIndicatorType.USER_POLICY,
            },
            /**
             * Note taking apps the user can pick between.
             */
            appChoices_: {
                type: Array,
                value() {
                    return [];
                },
            },
            /**
             * True if the device has an internal stylus.
             */
            hasInternalStylus_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('hasInternalStylus');
                },
                readOnly: true,
            },
            /**
             * Currently selected note taking app.
             */
            selectedApp_: {
                type: Object,
                value: null,
            },
            /**
             * True if the ARC container has not finished starting yet.
             */
            waitingForAndroid_: {
                type: Boolean,
                value: false,
            },
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([
                    Setting.kStylusToolsInShelf,
                    Setting.kStylusNoteTakingApp,
                    Setting.kStylusNoteTakingFromLockScreen,
                    Setting.kStylusLatestNoteOnLockScreen,
                ]),
            },
        };
    }
    constructor() {
        super();
        this.browserProxy_ = DevicePageBrowserProxyImpl.getInstance();
    }
    ready() {
        super.ready();
        this.browserProxy_.setNoteTakingAppsUpdatedCallback(this.onNoteAppsUpdated_.bind(this));
        this.browserProxy_.requestNoteTakingApps();
    }
    currentRouteChanged(route) {
        // Does not apply to this page.
        if (route !== routes.STYLUS) {
            return;
        }
        this.attemptDeepLink();
    }
    /**
     * @return Whether note taking from the lock screen is supported
     *     by the selected note-taking app.
     */
    supportsLockScreen_() {
        return !!this.selectedApp_ &&
            this.selectedApp_.lockScreenSupport !==
                NoteAppLockScreenSupport.NOT_SUPPORTED;
    }
    /**
     * @return Whether the selected app is disallowed to handle note
     *     actions from lock screen as a result of a user policy.
     */
    disallowedOnLockScreenByPolicy_() {
        return !!this.selectedApp_ &&
            this.selectedApp_.lockScreenSupport ===
                NoteAppLockScreenSupport.NOT_ALLOWED_BY_POLICY;
    }
    /**
     * @return Whether the selected app is enabled as a note action
     *     handler on the lock screen.
     */
    lockScreenSupportEnabled_() {
        return !!this.selectedApp_ &&
            this.selectedApp_.lockScreenSupport ===
                NoteAppLockScreenSupport.ENABLED;
    }
    /**
     * Finds note app info with the provided app id.
     */
    findApp_(id) {
        return this.appChoices_.find((app) => app.value === id) || null;
    }
    /**
     * Toggles whether the selected app is enabled as a note action handler on
     * the lock screen.
     */
    toggleLockScreenSupport_() {
        assertExists(this.selectedApp_);
        if (this.selectedApp_.lockScreenSupport !==
            NoteAppLockScreenSupport.ENABLED &&
            this.selectedApp_.lockScreenSupport !==
                NoteAppLockScreenSupport.SUPPORTED) {
            return;
        }
        this.browserProxy_.setPreferredNoteTakingAppEnabledOnLockScreen(this.selectedApp_.lockScreenSupport ===
            NoteAppLockScreenSupport.SUPPORTED);
        recordSettingChange();
    }
    onSelectedAppChanged_() {
        const app = this.findApp_(this.$.selectApp.value);
        this.selectedApp_ = app;
        if (app && !app.preferred) {
            this.browserProxy_.setPreferredNoteTakingApp(app.value);
            recordSettingChange();
        }
    }
    onNoteAppsUpdated_(apps, waitingForAndroid) {
        this.waitingForAndroid_ = waitingForAndroid;
        this.appChoices_ = apps;
        // Wait until app selection UI is updated before setting the selected app.
        microTask.run(this.onSelectedAppChanged_.bind(this));
    }
    showNoApps_(apps, waitingForAndroid) {
        return apps.length === 0 && !waitingForAndroid;
    }
    showApps_(apps, waitingForAndroid) {
        return apps.length > 0 && !waitingForAndroid;
    }
    onFindAppsClick_() {
        this.browserProxy_.showPlayStore(FIND_MORE_APPS_URL);
    }
}
customElements.define(SettingsStylusElement.is, SettingsStylusElement);
