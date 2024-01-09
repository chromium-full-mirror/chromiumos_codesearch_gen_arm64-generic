// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-safety-hub-page' is the settings page that presents the safety
 * state of Chrome.
 */
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './safety_hub_card.js';
import './safety_hub_module.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordManagerImpl, PasswordManagerPage } from '../autofill_page/password_manager_proxy.js';
import { MetricsBrowserProxyImpl, SafetyHubModuleType, SafetyHubSurfaces } from '../metrics_browser_proxy.js';
import { RelaunchMixin, RestartType } from '../relaunch_mixin.js';
import { routes } from '../route.js';
import { RouteObserverMixin, Router } from '../router.js';
import { CardState, SafetyHubBrowserProxyImpl, SafetyHubEvent } from './safety_hub_browser_proxy.js';
import { getTemplate } from './safety_hub_page.html.js';
const SettingsSafetyHubPageElementBase = RouteObserverMixin(RelaunchMixin(WebUiListenerMixin(I18nMixin(PolymerElement))));
export class SettingsSafetyHubPageElement extends SettingsSafetyHubPageElementBase {
    constructor() {
        super(...arguments);
        this.shouldRecordMetric_ = false;
        this.browserProxy_ = SafetyHubBrowserProxyImpl.getInstance();
        this.metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-safety-hub-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            // The object that holds data of Password Check card.
            passwordCardData_: Object,
            // The object that holds data of Version Check card.
            versionCardData_: Object,
            // The object that holds data of Safe Browsing card.
            safeBrowsingCardData_: Object,
            // Whether Notification Permissions module should be visible.
            showNotificationPermissions_: {
                type: Boolean,
                value: false,
            },
            // Whether Unused Site Permissions module should be visible.
            showUnusedSitePermissions_: {
                type: Boolean,
                value: false,
            },
            // Whether Extensions module should be visible.
            showExtensions_: {
                type: Boolean,
                value: false,
            },
            showNoRecommendationsState_: {
                type: Boolean,
                computed: 'computeShowNoRecommendationsState_(showUnusedSitePermissions_.*, showExtensions_.*, showNotificationPermissions_.*)',
            },
            userEducationItemList_: Array,
            // Whether the data for notification permissions is ready.
            hasDataForNotificationPermissions_: Boolean,
            // Whether the data for unused site permissions is ready.
            hasDataForUnusedPermissions_: Boolean,
            // Whether the data for extensions is ready.
            hasDataForExtensions_: Boolean,
        };
    }
    static get observers() {
        return [
            'onAllModulesLoaded_(passwordCardData_, versionCardData_, safeBrowsingCardData_, hasDataForUnusedPermissions_, hasDataForNotificationPermissions_, hasDataForExtensions_)',
        ];
    }
    connectedCallback() {
        this.initializeCards_();
        this.initializeModules_();
        this.initializeUserEducation_();
        super.connectedCallback();
    }
    currentRouteChanged() {
        if (Router.getInstance().getCurrentRoute() !== routes.SAFETY_HUB) {
            return;
        }
        // When the user navigates to the Safety Hub page, any active menu
        // notification is dismissed.
        this.browserProxy_.dismissActiveMenuNotification();
        this.metricsBrowserProxy_.recordSafetyHubImpression(SafetyHubSurfaces.SAFETY_HUB_PAGE);
        this.metricsBrowserProxy_.recordSafetyHubInteraction(SafetyHubSurfaces.SAFETY_HUB_PAGE);
        // Only record the metrics when the user navigates to the Safety Hub page.
        this.shouldRecordMetric_ = true;
        this.onAllModulesLoaded_();
    }
    initializeCards_() {
        // TODO(crbug.com/1443466): Add listeners for cards.
        this.browserProxy_.getPasswordCardData().then((data) => {
            this.passwordCardData_ = data;
        });
        this.browserProxy_.getSafeBrowsingCardData().then((data) => {
            this.safeBrowsingCardData_ = data;
        });
        this.browserProxy_.getVersionCardData().then((data) => {
            this.versionCardData_ = data;
        });
    }
    initializeModules_() {
        this.addWebUiListener(SafetyHubEvent.NOTIFICATION_PERMISSIONS_MAYBE_CHANGED, (sites) => this.onNotificationPermissionListChanged_(sites));
        this.addWebUiListener(SafetyHubEvent.UNUSED_PERMISSIONS_MAYBE_CHANGED, (sites) => this.onUnusedSitePermissionListChanged_(sites));
        this.addWebUiListener(SafetyHubEvent.EXTENSIONS_CHANGED, (num) => this.onExtensionsChanged_(num));
        this.browserProxy_.getNotificationPermissionReview().then((sites) => this.onNotificationPermissionListChanged_(sites));
        this.browserProxy_.getRevokedUnusedSitePermissionsList().then((sites) => this.onUnusedSitePermissionListChanged_(sites));
        this.browserProxy_.getNumberOfExtensionsThatNeedReview().then((num) => this.onExtensionsChanged_(num));
    }
    initializeUserEducation_() {
        this.userEducationItemList_ = [
            {
                origin: this.i18n('safetyHubUserEduDataHeader'),
                detail: this.i18nAdvanced('safetyHubUserEduDataSubheader'),
                icon: 'settings20:chrome-filled',
            },
            {
                origin: this.i18n('safetyHubUserEduIncognitoHeader'),
                detail: this.i18nAdvanced('safetyHubUserEduIncognitoSubheader'),
                icon: 'settings20:incognito-unfilled',
            },
            {
                origin: this.i18n('safetyHubUserEduSafeBrowsingHeader'),
                detail: this.i18nAdvanced('safetyHubUserEduSafeBrowsingSubheader'),
                icon: 'cr:security',
            },
        ];
    }
    onPasswordsClick_() {
        this.metricsBrowserProxy_.recordSafetyHubCardStateClicked('Settings.SafetyHub.PasswordsCard.StatusOnClick', this.passwordCardData_.state);
        PasswordManagerImpl.getInstance().showPasswordManager(PasswordManagerPage.CHECKUP);
    }
    onPasswordsKeyPress_(e) {
        e.stopPropagation();
        if (this.isEnterOrSpaceClicked_(e)) {
            this.onPasswordsClick_();
        }
    }
    onVersionClick_() {
        this.metricsBrowserProxy_.recordSafetyHubCardStateClicked('Settings.SafetyHub.VersionCard.StatusOnClick', this.versionCardData_.state);
        if (this.versionCardData_.state === CardState.WARNING) {
            this.performRestart(RestartType.RELAUNCH);
        }
        else {
            Router.getInstance().navigateTo(routes.ABOUT, /* dynamicParams= */ undefined, 
            /* removeSearch= */ true);
        }
    }
    onVersionKeyPress_(e) {
        e.stopPropagation();
        if (this.isEnterOrSpaceClicked_(e)) {
            this.onVersionClick_();
        }
    }
    onSafeBrowsingClick_() {
        this.metricsBrowserProxy_.recordSafetyHubCardStateClicked('Settings.SafetyHub.SafeBrowsingCard.StatusOnClick', this.safeBrowsingCardData_.state);
        Router.getInstance().navigateTo(routes.SECURITY, /* dynamicParams= */ undefined, 
        /* removeSearch= */ true);
    }
    onSafeBrowsingKeyPress_(e) {
        e.stopPropagation();
        if (this.isEnterOrSpaceClicked_(e)) {
            this.onSafeBrowsingClick_();
        }
    }
    onNotificationPermissionListChanged_(permissions) {
        // The module should be visible if there is any item on the list, or if
        // there is no item on the list but the list was shown before.
        this.showNotificationPermissions_ =
            permissions.length > 0 || this.showNotificationPermissions_;
        this.hasDataForNotificationPermissions_ = true;
    }
    onUnusedSitePermissionListChanged_(permissions) {
        // The module should be visible if there is any item on the list, or if
        // there is no item on the list but the list was shown before.
        this.showUnusedSitePermissions_ =
            permissions.length > 0 || this.showUnusedSitePermissions_;
        this.hasDataForUnusedPermissions_ = true;
    }
    computeShowNoRecommendationsState_() {
        return !(this.showUnusedSitePermissions_ || this.showNotificationPermissions_ ||
            this.showExtensions_);
    }
    onExtensionsChanged_(numberOfExtensions) {
        this.showExtensions_ = !!numberOfExtensions;
        this.hasDataForExtensions_ = true;
    }
    isEnterOrSpaceClicked_(e) {
        return e.key === 'Enter' || e.key === ' ';
    }
    onAllModulesLoaded_() {
        // If the metrics are recorded already, don't record again.
        if (!this.shouldRecordMetric_) {
            return;
        }
        // Wait till the data of the cards be ready.
        if (!this.passwordCardData_ || !this.safeBrowsingCardData_ ||
            !this.versionCardData_) {
            return;
        }
        // Wait till the data of the modules be ready.
        if (!this.hasDataForUnusedPermissions_ ||
            !this.hasDataForNotificationPermissions_ ||
            !this.hasDataForExtensions_) {
            return;
        }
        this.shouldRecordMetric_ = false;
        let hasAnyWarning = false;
        // TODO(crbug.com/1443466): Iterate over the cards/modules with for loop.
        if (this.passwordCardData_.state !== CardState.SAFE) {
            this.metricsBrowserProxy_.recordSafetyHubModuleWarningImpression(SafetyHubModuleType.PASSWORDS);
            hasAnyWarning = true;
        }
        if (this.safeBrowsingCardData_.state !== CardState.SAFE) {
            this.metricsBrowserProxy_.recordSafetyHubModuleWarningImpression(SafetyHubModuleType.SAFE_BROWSING);
            hasAnyWarning = true;
        }
        if (this.versionCardData_.state !== CardState.SAFE) {
            this.metricsBrowserProxy_.recordSafetyHubModuleWarningImpression(SafetyHubModuleType.VERSION);
            hasAnyWarning = true;
        }
        if (this.showNotificationPermissions_) {
            this.metricsBrowserProxy_.recordSafetyHubModuleWarningImpression(SafetyHubModuleType.NOTIFICATIONS);
            hasAnyWarning = true;
        }
        if (this.showUnusedSitePermissions_) {
            this.metricsBrowserProxy_.recordSafetyHubModuleWarningImpression(SafetyHubModuleType.PERMISSIONS);
            hasAnyWarning = true;
        }
        if (this.showExtensions_) {
            this.metricsBrowserProxy_.recordSafetyHubModuleWarningImpression(SafetyHubModuleType.EXTENSIONS);
            hasAnyWarning = true;
        }
        this.metricsBrowserProxy_.recordSafetyHubDashboardAnyWarning(hasAnyWarning);
    }
}
customElements.define(SettingsSafetyHubPageElement.is, SettingsSafetyHubPageElement);
