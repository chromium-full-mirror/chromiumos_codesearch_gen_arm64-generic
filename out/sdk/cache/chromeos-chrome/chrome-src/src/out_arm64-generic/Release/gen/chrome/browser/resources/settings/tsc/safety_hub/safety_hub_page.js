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
import { RelaunchMixin, RestartType } from '../relaunch_mixin.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { CardState, SafetyHubBrowserProxyImpl, SafetyHubEvent } from './safety_hub_browser_proxy.js';
import { getTemplate } from './safety_hub_page.html.js';
const SettingsSafetyHubPageElementBase = RelaunchMixin(WebUiListenerMixin(I18nMixin(PolymerElement)));
export class SettingsSafetyHubPageElement extends SettingsSafetyHubPageElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = SafetyHubBrowserProxyImpl.getInstance();
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
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.initializeCards_();
        this.initializeModules_();
        this.initializeUserEducation_();
    }
    initializeCards_() {
        // TODO(1443466): Add listeners for cards.
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
        PasswordManagerImpl.getInstance().showPasswordManager(PasswordManagerPage.CHECKUP);
    }
    onPasswordsKeyPress_(e) {
        e.stopPropagation();
        if (this.isEnterOrSpaceClicked_(e)) {
            this.onPasswordsClick_();
        }
    }
    onVersionClick_() {
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
    }
    onUnusedSitePermissionListChanged_(permissions) {
        // The module should be visible if there is any item on the list, or if
        // there is no item on the list but the list was shown before.
        this.showUnusedSitePermissions_ =
            permissions.length > 0 || this.showUnusedSitePermissions_;
    }
    computeShowNoRecommendationsState_() {
        return !(this.showUnusedSitePermissions_ || this.showNotificationPermissions_ ||
            this.showExtensions_);
    }
    onExtensionsChanged_(numberOfExtensions) {
        this.showExtensions_ = !!numberOfExtensions;
    }
    isEnterOrSpaceClicked_(e) {
        return e.key === 'Enter' || e.key === ' ';
    }
}
customElements.define(SettingsSafetyHubPageElement.is, SettingsSafetyHubPageElement);
