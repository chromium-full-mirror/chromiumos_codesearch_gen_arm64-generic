// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-privacy-page' is the settings page containing privacy and
 * security settings.
 */
import 'chrome://resources/cr_components/settings_prefs/prefs.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import '/shared/settings/controls/settings_toggle_button.js';
import '../safety_hub/safety_hub_module.js';
import '../settings_page/settings_animated_pages.js';
import '../settings_page/settings_subpage.js';
import '../settings_shared.css.js';
import '../site_settings/settings_category_default_radio_group.js';
import './privacy_guide/privacy_guide_dialog.js';
import { PrivacyPageBrowserProxyImpl } from '/shared/settings/privacy_page/privacy_page_browser_proxy.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BaseMixin } from '../base_mixin.js';
import { HatsBrowserProxyImpl, TrustSafetyInteraction } from '../hats_browser_proxy.js';
import { loadTimeData } from '../i18n_setup.js';
import { MetricsBrowserProxyImpl, PrivacyGuideInteractions, SafetyHubEntryPoint } from '../metrics_browser_proxy.js';
import { routes } from '../route.js';
import { RouteObserverMixin, Router } from '../router.js';
import { SafetyHubBrowserProxyImpl, SafetyHubEvent } from '../safety_hub/safety_hub_browser_proxy.js';
import { ChooserType, ContentSetting, ContentSettingsTypes, CookieControlsMode, SettingsState } from '../site_settings/constants.js';
import { SiteSettingsPrefsBrowserProxyImpl } from '../site_settings/site_settings_prefs_browser_proxy.js';
import { PrivacyGuideAvailabilityMixin } from './privacy_guide/privacy_guide_availability_mixin.js';
import { getTemplate } from './privacy_page.html.js';
const SettingsPrivacyPageElementBase = PrivacyGuideAvailabilityMixin(RouteObserverMixin(WebUiListenerMixin(I18nMixin(PrefsMixin(BaseMixin(PolymerElement))))));
export class SettingsPrivacyPageElement extends SettingsPrivacyPageElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = PrivacyPageBrowserProxyImpl.getInstance();
        this.metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
        this.siteSettingsPrefsBrowserProxy_ = SiteSettingsPrefsBrowserProxyImpl.getInstance();
        this.safetyHubBrowserProxy_ = SafetyHubBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-privacy-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Preferences state.
             */
            prefs: {
                type: Object,
                notify: true,
            },
            isGuest_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isGuest');
                },
            },
            showClearBrowsingDataDialog_: Boolean,
            showPrivacyGuideDialog_: Boolean,
            enableSafeBrowsingSubresourceFilter_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableSafeBrowsingSubresourceFilter');
                },
            },
            enableBlockAutoplayContentSetting_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableBlockAutoplayContentSetting');
                },
            },
            blockAutoplayStatus_: {
                type: Object,
                value() {
                    return {};
                },
            },
            enablePaymentHandlerContentSetting_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enablePaymentHandlerContentSetting');
                },
            },
            enableFederatedIdentityApiContentSetting_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableFederatedIdentityApiContentSetting');
                },
            },
            enableExperimentalWebPlatformFeatures_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableExperimentalWebPlatformFeatures');
                },
            },
            enableSecurityKeysSubpage_: {
                type: Boolean,
                readOnly: true,
                value() {
                    return loadTimeData.getBoolean('enableSecurityKeysSubpage');
                },
            },
            enableWebBluetoothNewPermissionsBackend_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableWebBluetoothNewPermissionsBackend'),
            },
            showNotificationPermissionsReview_: {
                type: Boolean,
                value: false,
            },
            isPrivacySandboxRestricted_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('isPrivacySandboxRestricted'),
            },
            isPrivacySandboxRestrictedNoticeEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('isPrivacySandboxRestrictedNoticeEnabled'),
            },
            is3pcdRedesignEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('is3pcdCookieSettingsRedesignEnabled'),
            },
            privateStateTokensEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('privateStateTokensEnabled'),
            },
            enablePermissionStorageAccessApi_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enablePermissionStorageAccessApi'),
            },
            autoPictureInPictureEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('autoPictureInPictureEnabled'),
            },
            /**
             * Whether the File System Access Persistent Permissions UI should be
             * displayed.
             */
            showPersistentPermissions_: {
                type: Boolean,
                readOnly: true,
                value: function () {
                    return loadTimeData.getBoolean('showPersistentPermissions');
                },
            },
            blockMidiByDefault_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('blockMidiByDefault'),
            },
            focusConfig_: {
                type: Object,
                value() {
                    const map = new Map();
                    if (routes.SECURITY) {
                        map.set(routes.SECURITY.path, '#securityLinkRow');
                    }
                    if (routes.COOKIES) {
                        map.set(`${routes.COOKIES.path}_${routes.PRIVACY.path}`, '#thirdPartyCookiesLinkRow');
                        map.set(`${routes.COOKIES.path}_${routes.BASIC.path}`, '#thirdPartyCookiesLinkRow');
                    }
                    if (routes.TRACKING_PROTECTION) {
                        map.set(routes.TRACKING_PROTECTION.path, '#trackingProtectionLinkRow');
                    }
                    if (routes.SITE_SETTINGS) {
                        map.set(routes.SITE_SETTINGS.path, '#permissionsLinkRow');
                    }
                    if (routes.PRIVACY_GUIDE) {
                        map.set(routes.PRIVACY_GUIDE.path, '#privacyGuideLinkRow');
                    }
                    if (routes.PRIVACY_SANDBOX) {
                        map.set(routes.PRIVACY_SANDBOX.path, '#privacySandboxLinkRow');
                    }
                    return map;
                },
            },
            /**
             * Expose the Permissions SettingsState enum to HTML bindings.
             */
            settingsStateEnum_: {
                type: Object,
                value: SettingsState,
            },
            searchFilter_: String,
            /**
             * Expose ContentSettingsTypes enum to HTML bindings.
             */
            contentSettingsTypesEnum_: {
                type: Object,
                value: ContentSettingsTypes,
            },
            /**
             * Expose ContentSetting enum to HTML bindings.
             */
            contentSettingEnum_: {
                type: Object,
                value: ContentSetting,
            },
            /**
             * Expose ChooserType enum to HTML bindings.
             */
            chooserTypeEnum_: {
                type: Object,
                value: ChooserType,
            },
            safetyCheckNotificationPermissionsEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('safetyCheckNotificationPermissionsEnabled');
                },
            },
            notificationsDefaultBehaviorLabel_: {
                type: String,
                computed: 'computeNotificationsDefaultBehaviorLabel_(safetyCheckNotificationPermissionsEnabled_)',
            },
            enableSafetyHub_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableSafetyHub') &&
                        !loadTimeData.getBoolean('isGuest');
                },
            },
            showDedicatedCpssSetting_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('permissionDedicatedCpssSettings');
                },
            },
            isNotificationAllowed_: Boolean,
            isLocationAllowed_: Boolean,
            notificationPermissionsReviewHeader_: String,
            notificationPermissionsReviewSubeader_: String,
        };
    }
    ready() {
        super.ready();
        this.onBlockAutoplayStatusChanged_({
            pref: {
                key: '',
                type: chrome.settingsPrivate.PrefType.BOOLEAN,
                value: false,
            },
            enabled: false,
        });
        this.addWebUiListener('onBlockAutoplayStatusChanged', (status) => this.onBlockAutoplayStatusChanged_(status));
        if (this.safetyCheckNotificationPermissionsEnabled_ && !this.isGuest_) {
            this.addWebUiListener(SafetyHubEvent.NOTIFICATION_PERMISSIONS_MAYBE_CHANGED, (sites) => this.onReviewNotificationPermissionListChanged_(sites));
            this.safetyHubBrowserProxy_.getNotificationPermissionReview().then((sites) => this.onReviewNotificationPermissionListChanged_(sites));
        }
        this.updateLocationAndNotificationState_();
    }
    currentRouteChanged() {
        this.showClearBrowsingDataDialog_ =
            Router.getInstance().getCurrentRoute() === routes.CLEAR_BROWSER_DATA;
        this.showPrivacyGuideDialog_ =
            Router.getInstance().getCurrentRoute() === routes.PRIVACY_GUIDE &&
                this.isPrivacyGuideAvailable;
        // Only record the metrics when the user navigates to the notification
        // settings page that shows the entry point.
        if (Router.getInstance().getCurrentRoute() ===
            routes.SITE_SETTINGS_NOTIFICATIONS &&
            this.showNotificationPermissionsReview_) {
            this.metricsBrowserProxy_.recordSafetyHubEntryPointShown(SafetyHubEntryPoint.NOTIFICATIONS);
        }
    }
    /**
     * Called when the block autoplay status changes.
     */
    onBlockAutoplayStatusChanged_(autoplayStatus) {
        this.blockAutoplayStatus_ = autoplayStatus;
    }
    /**
     * Updates the block autoplay pref when the toggle is changed.
     */
    onBlockAutoplayToggleChange_(event) {
        const target = event.target;
        this.browserProxy_.setBlockAutoplayEnabled(target.checked);
    }
    onClearBrowsingDataClick_() {
        this.interactedWithPage_();
        Router.getInstance().navigateTo(routes.CLEAR_BROWSER_DATA);
    }
    onCookiesClick_() {
        this.interactedWithPage_();
        Router.getInstance().navigateTo(routes.COOKIES);
    }
    onTrackingProtectionClick_() {
        this.interactedWithPage_();
        this.metricsBrowserProxy_.recordAction('Settings.TrackingProtection.OpenedFromPrivacyPage');
        Router.getInstance().navigateTo(routes.TRACKING_PROTECTION);
    }
    onCbdDialogClosed_() {
        Router.getInstance().navigateTo(routes.CLEAR_BROWSER_DATA.parent);
        setTimeout(() => {
            // Focus after a timeout to ensure any a11y messages get read before
            // screen readers read out the newly focused element.
            const toFocus = this.shadowRoot.querySelector('#clearBrowsingData');
            assert(toFocus);
            focusWithoutInk(toFocus);
        });
    }
    onPrivacyGuideDialogClosed_() {
        Router.getInstance().navigateToPreviousRoute();
        const toFocus = this.shadowRoot.querySelector('#privacyGuideLinkRow');
        assert(toFocus);
        focusWithoutInk(toFocus);
    }
    onPermissionsPageClick_() {
        this.interactedWithPage_();
        Router.getInstance().navigateTo(routes.SITE_SETTINGS);
    }
    onSecurityPageClick_() {
        this.interactedWithPage_();
        this.metricsBrowserProxy_.recordAction('SafeBrowsing.Settings.ShowedFromParentSettings');
        Router.getInstance().navigateTo(routes.SECURITY);
    }
    onPrivacySandboxClick_() {
        this.interactedWithPage_();
        this.metricsBrowserProxy_.recordAction('Settings.PrivacySandbox.OpenedFromSettingsParent');
        Router.getInstance().navigateTo(routes.PRIVACY_SANDBOX);
    }
    async updateLocationAndNotificationState_() {
        const [notificationDefaultValue, locationDefaultValue] = await Promise.all([
            this.siteSettingsPrefsBrowserProxy_.getDefaultValueForContentType(ContentSettingsTypes.NOTIFICATIONS),
            this.siteSettingsPrefsBrowserProxy_.getDefaultValueForContentType(ContentSettingsTypes.GEOLOCATION),
        ]);
        this.isNotificationAllowed_ =
            (notificationDefaultValue.setting === ContentSetting.ASK);
        this.isLocationAllowed_ =
            (locationDefaultValue.setting === ContentSetting.ASK);
    }
    onLocationTopLevelRadioChanged_(event) {
        const radioButtonName = event.detail.value;
        switch (radioButtonName) {
            case 'location-block-radio-button':
                this.setPrefValue('generated.geolocation', SettingsState.BLOCK);
                this.isLocationAllowed_ = false;
                break;
            case 'location-ask-radio-button':
                this.setPrefValue('generated.geolocation', SettingsState.CPSS);
                this.isLocationAllowed_ = true;
                break;
        }
    }
    onNotificationTopLevelRadioChanged_(event) {
        const radioButtonName = event.detail.value;
        switch (radioButtonName) {
            case 'notification-block-radio-button':
                this.setPrefValue('generated.notification', SettingsState.BLOCK);
                this.isNotificationAllowed_ = false;
                break;
            case 'notification-ask-radio-button':
                this.setPrefValue('generated.notification', SettingsState.CPSS);
                this.isNotificationAllowed_ = true;
                break;
        }
    }
    onPrivacyGuideClick_() {
        this.metricsBrowserProxy_.recordPrivacyGuideEntryExitHistogram(PrivacyGuideInteractions.SETTINGS_LINK_ROW_ENTRY);
        this.metricsBrowserProxy_.recordAction('Settings.PrivacyGuide.StartPrivacySettings');
        Router.getInstance().navigateTo(routes.PRIVACY_GUIDE, /* dynamicParams */ undefined, 
        /* removeSearch */ true);
    }
    async onReviewNotificationPermissionListChanged_(permissions) {
        // The notification permissions review is shown when there are items to
        // review (provided the feature is enabled and should be shown). Once
        // visible it remains that way to show completion info, even if the list is
        // emptied.
        if (this.showNotificationPermissionsReview_) {
            return;
        }
        this.showNotificationPermissionsReview_ = !this.isGuest_ &&
            this.safetyCheckNotificationPermissionsEnabled_ &&
            permissions.length > 0;
        this.notificationPermissionsReviewHeader_ =
            await PluralStringProxyImpl.getInstance().getPluralString('safetyHubNotificationPermissionsPrimaryLabel', permissions.length);
        this.notificationPermissionsReviewSubheader_ =
            await PluralStringProxyImpl.getInstance().getPluralString('safetyHubNotificationPermissionsSecondaryLabel', permissions.length);
    }
    interactedWithPage_() {
        HatsBrowserProxyImpl.getInstance().trustSafetyInteractionOccurred(TrustSafetyInteraction.USED_PRIVACY_CARD);
    }
    computePrivacySandboxSublabel_() {
        const enabled = this.getPref('privacy_sandbox.apis_enabled_v2').value;
        return enabled ? this.i18n('privacySandboxTrialsEnabled') :
            this.i18n('privacySandboxTrialsDisabled');
    }
    computeAdPrivacySublabel_() {
        // When the privacy sandbox is restricted with a notice, the sublabel
        // wording indicates measurement only, rather than general ad privacy.
        const restricted = this.isPrivacySandboxRestricted_ &&
            this.isPrivacySandboxRestrictedNoticeEnabled_;
        return restricted ? this.i18n('adPrivacyRestrictedLinkRowSubLabel') :
            this.i18n('adPrivacyLinkRowSubLabel');
    }
    computeNotificationsDefaultBehaviorLabel_() {
        return this.safetyCheckNotificationPermissionsEnabled_ ?
            this.i18n('siteSettingsNotificationsDefaultBehaviorDescription') :
            this.i18n('siteSettingsDefaultBehaviorDescription');
    }
    computeThirdPartyCookiesSublabel_() {
        const currentCookieSetting = this.getPref('profile.cookie_controls_mode').value;
        switch (currentCookieSetting) {
            case CookieControlsMode.OFF:
                return this.i18n('thirdPartyCookiesLinkRowSublabelEnabled');
            case CookieControlsMode.INCOGNITO_ONLY:
                return this.i18n('thirdPartyCookiesLinkRowSublabelDisabledIncognito');
            case CookieControlsMode.BLOCK_THIRD_PARTY:
                return this.i18n('thirdPartyCookiesLinkRowSublabelDisabled');
            default:
                assertNotReached();
        }
    }
    shouldShowAdPrivacy_() {
        return !this.isPrivacySandboxRestricted_ ||
            this.isPrivacySandboxRestrictedNoticeEnabled_;
    }
    onSafetyHubButtonClick_() {
        this.metricsBrowserProxy_.recordSafetyHubEntryPointClicked(SafetyHubEntryPoint.NOTIFICATIONS);
        Router.getInstance().navigateTo(routes.SAFETY_HUB);
    }
}
customElements.define(SettingsPrivacyPageElement.is, SettingsPrivacyPageElement);
