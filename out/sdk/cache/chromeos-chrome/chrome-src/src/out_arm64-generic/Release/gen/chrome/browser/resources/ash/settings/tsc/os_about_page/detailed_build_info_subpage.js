// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-detailed-build-info-subpage' contains detailed build
 * information for ChromeOS.
 */
import 'chrome://resources/cr_components/localized_link/localized_link.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import 'chrome://resources/cr_components/settings_prefs/prefs.js';
import '../settings_shared.css.js';
import './channel_switcher_dialog.js';
import './consumer_auto_update_toggle_dialog.js';
import './edit_hostname_dialog.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { CrPolicyIndicatorType } from 'chrome://resources/cr_elements/policy/cr_policy_indicator_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { RouteObserverMixin } from '../common/route_observer_mixin.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { routes } from '../router.js';
import { AboutPageBrowserProxyImpl, browserChannelToI18nId } from './about_page_browser_proxy.js';
import { getTemplate } from './detailed_build_info_subpage.html.js';
import { DeviceNameBrowserProxyImpl } from './device_name_browser_proxy.js';
import { DeviceNameState } from './device_name_util.js';
const SettingsDetailedBuildInfoSubpageBase = DeepLinkingMixin(RouteObserverMixin(PrefsMixin(I18nMixin(WebUiListenerMixin(PolymerElement)))));
class SettingsDetailedBuildInfoSubpageElement extends SettingsDetailedBuildInfoSubpageBase {
    static get is() {
        return 'settings-detailed-build-info-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            versionInfo_: Object,
            channelInfo_: Object,
            deviceNameMetadata_: Object,
            currentlyOnChannelText_: String,
            showChannelSwitcherDialog_: Boolean,
            showEditHostnameDialog_: Boolean,
            canChangeChannel_: Boolean,
            isManagedAutoUpdateEnabled_: Boolean,
            showConsumerAutoUpdateToggleDialog_: Boolean,
            eolMessageWithMonthAndYear: {
                type: String,
                value: '',
            },
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([
                    Setting.kChangeChromeChannel,
                    Setting.kChangeDeviceName,
                    Setting.kCopyDetailedBuildInfo,
                ]),
            },
            shouldHideEolInfo_: {
                type: Boolean,
                computed: 'computeShouldHideEolInfo_(eolMessageWithMonthAndYear)',
            },
            isHostnameSettingEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isHostnameSettingEnabled');
                },
                readOnly: true,
            },
            /**
             * Whether the browser/ChromeOS is managed by their organization
             * through enterprise policies.
             */
            isManaged_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isManaged');
                },
                readOnly: true,
            },
            /**
             * Whether or not the consumer auto update toggling is allowed.
             */
            isConsumerAutoUpdateTogglingAllowed_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isConsumerAutoUpdateTogglingAllowed');
                },
                readOnly: true,
            },
            /**
             * Whether or not to show the consumer auto update toggle.
             */
            showConsumerAutoUpdateToggle_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('showAutoUpdateToggle') &&
                        !loadTimeData.getBoolean('isManaged');
                },
                readOnly: true,
            },
            /**
             * Whether or not to show the managed auto update toggle.
             */
            showManagedAutoUpdateToggle_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('showAutoUpdateToggle') &&
                        loadTimeData.getBoolean('isManaged');
                },
                readOnly: true,
            },
        };
    }
    constructor() {
        super();
        this.aboutPageBrowserProxy_ = AboutPageBrowserProxyImpl.getInstance();
        this.deviceNameBrowserProxy_ = DeviceNameBrowserProxyImpl.getInstance();
    }
    ready() {
        super.ready();
        this.aboutPageBrowserProxy_.pageReady();
        this.addEventListener('set-consumer-auto-update', (event) => {
            this.aboutPageBrowserProxy_.setConsumerAutoUpdate(event.detail.item);
        });
        if (this.isManaged_) {
            this.syncManagedAutoUpdateToggle_();
        }
        else {
            // This is to keep the Chrome pref in sync in case it becomes stale.
            // For example, if users toggle the consumer auto update, but the settings
            // page happened to crash/close before it got flushed out this would
            // assure a sync between the Chrome pref and the platform pref.
            this.syncConsumerAutoUpdateToggle_();
        }
        this.aboutPageBrowserProxy_.getVersionInfo().then(versionInfo => {
            this.versionInfo_ = versionInfo;
        });
        this.updateChannelInfo_();
        if (this.isHostnameSettingEnabled_) {
            this.addWebUiListener('settings.updateDeviceNameMetadata', (data) => this.updateDeviceNameMetadata_(data));
            this.deviceNameBrowserProxy_.notifyReadyForDeviceName();
        }
    }
    currentRouteChanged(route, _oldRoute) {
        // Does not apply to this page.
        if (route !== routes.ABOUT_DETAILED_BUILD_INFO) {
            return;
        }
        this.attemptDeepLink();
    }
    computeShouldHideEolInfo_() {
        return this.isManaged_ || !this.eolMessageWithMonthAndYear;
    }
    updateChannelInfo_() {
        // canChangeChannel() call is expected to be low-latency, so fetch this
        // value by itself to ensure UI consistency (see https://crbug.com/848750).
        this.aboutPageBrowserProxy_.canChangeChannel().then(canChangeChannel => {
            this.canChangeChannel_ = canChangeChannel;
        });
        // getChannelInfo() may have considerable latency due to updates. Fetch this
        // metadata as part of a separate request.
        this.aboutPageBrowserProxy_.getChannelInfo().then(info => {
            this.channelInfo_ = info;
            // Display the target channel for the 'Currently on' message.
            this.currentlyOnChannelText_ = this.i18n('aboutCurrentlyOnChannelInfo', this.i18n(browserChannelToI18nId(info.targetChannel, info.isLts)));
        });
    }
    syncManagedAutoUpdateToggle_() {
        this.aboutPageBrowserProxy_.isManagedAutoUpdateEnabled().then(isManagedAutoUpdateEnabled => {
            this.isManagedAutoUpdateEnabled_ = isManagedAutoUpdateEnabled;
        });
    }
    syncConsumerAutoUpdateToggle_() {
        this.aboutPageBrowserProxy_.isConsumerAutoUpdateEnabled().then(enabled => {
            this.aboutPageBrowserProxy_.setConsumerAutoUpdate(enabled);
        });
    }
    updateDeviceNameMetadata_(data) {
        this.deviceNameMetadata_ = data;
    }
    getDeviceNameText_() {
        if (!this.deviceNameMetadata_) {
            return '';
        }
        return this.deviceNameMetadata_.deviceName;
    }
    getDeviceNameEditButtonA11yDescription_() {
        if (!this.deviceNameMetadata_) {
            return '';
        }
        return this.i18n('aboutDeviceNameEditBtnA11yDescription', this.getDeviceNameText_());
    }
    canEditDeviceName_() {
        if (!this.deviceNameMetadata_) {
            return false;
        }
        return this.deviceNameMetadata_.deviceNameState ===
            DeviceNameState.CAN_BE_MODIFIED;
    }
    shouldShowPolicyIndicator_() {
        return this.getDeviceNameIndicatorType_() !== CrPolicyIndicatorType.NONE;
    }
    getDeviceNameIndicatorType_() {
        if (!this.deviceNameMetadata_) {
            return CrPolicyIndicatorType.NONE;
        }
        if (this.deviceNameMetadata_.deviceNameState ===
            DeviceNameState.CANNOT_BE_MODIFIED_BECAUSE_OF_POLICIES) {
            return CrPolicyIndicatorType.DEVICE_POLICY;
        }
        if (this.deviceNameMetadata_.deviceNameState ===
            DeviceNameState.CANNOT_BE_MODIFIED_BECAUSE_NOT_DEVICE_OWNER) {
            return CrPolicyIndicatorType.OWNER;
        }
        return CrPolicyIndicatorType.NONE;
    }
    getChangeChannelIndicatorSourceName_(canChangeChannel) {
        if (canChangeChannel) {
            // the indicator should be invisible.
            return '';
        }
        if (loadTimeData.getBoolean('aboutEnterpriseManaged')) {
            return '';
        }
        return loadTimeData.valueExists('ownerEmail') ?
            loadTimeData.getString('ownerEmail') :
            '';
    }
    getChangeChannelIndicatorType_(canChangeChannel) {
        if (canChangeChannel) {
            return CrPolicyIndicatorType.NONE;
        }
        return loadTimeData.getBoolean('aboutEnterpriseManaged') ?
            CrPolicyIndicatorType.DEVICE_POLICY :
            CrPolicyIndicatorType.OWNER;
    }
    onChangeChannelClick_(e) {
        e.preventDefault();
        this.showChannelSwitcherDialog_ = true;
    }
    onEditHostnameClick_(e) {
        e.preventDefault();
        this.showEditHostnameDialog_ = true;
    }
    copyToClipBoardEnabled_() {
        return !!this.versionInfo_ && !!this.channelInfo_;
    }
    onCopyBuildDetailsToClipBoardClick_() {
        const buildInfo = {
            application_label: loadTimeData.getString('aboutBrowserVersion'),
            platform: this.versionInfo_.osVersion,
            aboutChannelLabel: this.channelInfo_.targetChannel,
            firmware_version: this.versionInfo_.osFirmware,
            aboutIsArcStatusTitle: loadTimeData.getBoolean('aboutIsArcEnabled'),
            arc_label: this.versionInfo_.arcVersion,
            isEnterpriseManagedTitle: loadTimeData.getBoolean('aboutEnterpriseManaged'),
            aboutIsDeveloperModeTitle: loadTimeData.getBoolean('aboutIsDeveloperMode'),
        };
        const entries = [];
        for (const key in buildInfo) {
            entries.push(this.i18n(key) + ': ' + String(buildInfo[key]));
        }
        navigator.clipboard.writeText(entries.join('\n'));
        getAnnouncerInstance().announce(this.i18n('aboutBuildDetailsCopiedToClipboardA11yLabel'));
    }
    onConsumerAutoUpdateToggled_(_event) {
        if (!this.isConsumerAutoUpdateTogglingAllowed_) {
            return;
        }
        this.showDialogOrFlushConsumerAutoUpdateToggle();
    }
    onConsumerAutoUpdateToggledSettingsBox_() {
        if (!this.isConsumerAutoUpdateTogglingAllowed_) {
            return;
        }
        // Copy how cr-toggle negates the `checked` field.
        this.setPrefValue('settings.consumer_auto_update_toggle', !this.getPref('settings.consumer_auto_update_toggle').value);
        this.showDialogOrFlushConsumerAutoUpdateToggle();
    }
    showDialogOrFlushConsumerAutoUpdateToggle() {
        if (!this.getPref('settings.consumer_auto_update_toggle').value) {
            // Only show dialog when turning the toggle off.
            this.showConsumerAutoUpdateToggleDialog_ = true;
            return;
        }
        // Turning the toggle on requires no dialog.
        this.aboutPageBrowserProxy_.setConsumerAutoUpdate(true);
    }
    onConsumerAutoUpdateToggleDialogClosed_() {
        this.showConsumerAutoUpdateToggleDialog_ = false;
    }
    onVisitBuildDetailsPageClick_(e) {
        e.preventDefault();
        window.open('chrome://version');
    }
    onChannelSwitcherDialogClosed_() {
        this.showChannelSwitcherDialog_ = false;
        const button = castExists(this.shadowRoot.querySelector('cr-button'));
        focusWithoutInk(button);
        this.updateChannelInfo_();
    }
    onEditHostnameDialogClosed_() {
        this.showEditHostnameDialog_ = false;
        const button = castExists(this.shadowRoot.querySelector('cr-button'));
        focusWithoutInk(button);
    }
}
customElements.define(SettingsDetailedBuildInfoSubpageElement.is, SettingsDetailedBuildInfoSubpageElement);
