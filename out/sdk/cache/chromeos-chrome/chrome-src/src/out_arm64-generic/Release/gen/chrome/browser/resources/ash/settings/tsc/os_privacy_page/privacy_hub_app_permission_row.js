// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-privacy-hub-app-permission-row' is a custom row element
 * representing an app. This is used in the subpages of the OS Settings Privacy
 * controls page.
 */
import { AppType, PermissionType, TriState } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { createBoolPermissionValue, createTriStatePermissionValue, isBoolValue, isPermissionEnabled, isTriStateValue } from 'chrome://resources/cr_components/app_management/permission_util.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { getAppPermissionProvider } from './mojo_interface_provider.js';
import { getTemplate } from './privacy_hub_app_permission_row.html.js';
import { NUMBER_OF_POSSIBLE_USER_ACTIONS, PrivacyHubSensorSubpageUserAction } from './privacy_hub_metrics_util.js';
function getPermissionValueAsTriState(permission) {
    if (isTriStateValue(permission.value)) {
        return castExists(permission.value.tristateValue);
    }
    return permission.value.boolValue ? TriState.kAllow : TriState.kBlock;
}
const SettingsPrivacyHubAppPermissionRowBase = I18nMixin(PolymerElement);
export class SettingsPrivacyHubAppPermissionRow extends SettingsPrivacyHubAppPermissionRowBase {
    static get is() {
        return 'settings-privacy-hub-app-permission-row';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            app: {
                type: Object,
            },
            /**
             * A string version of the permission type. Must be a value of the
             * permission type enum in appManagement.mojom.PermissionType.
             */
            permissionType: {
                type: String,
                reflectToAttribute: true,
            },
            /**
             * Boolean state indicator for the value of the permission of type
             * `this.permissionType`.
             *
             * `TriState.kAllow` maps to `true`.
             * `TriState.kAsk` and `TriState.kBlock` maps to `false`.
             */
            checked_: {
                type: Boolean,
                value: false,
            },
            /**
             * A text describing the permission value.
             */
            permissionText_: {
                type: String,
                value: '',
            },
            isPermissionManaged_: {
                type: Boolean,
                value: false,
            },
            shouldRedirectToAndroidSettings_: {
                type: Boolean,
                computed: 'computeShouldRedirectToAndroidSettings_(app.type, ' +
                    'isPermissionManaged_)',
            },
            shouldDisableToggle_: {
                type: Boolean,
                computed: 'computeShouldDisableToggle_(isPermissionManaged_, ' +
                    'shouldRedirectToAndroidSettings_)',
            },
        };
    }
    static get observers() {
        return ['onPermissionChange_(app.permissions.*)'];
    }
    constructor() {
        super();
        this.mojoInterfaceProvider_ = getAppPermissionProvider();
    }
    onPermissionChange_() {
        const permission = castExists(this.app.permissions[PermissionType[this.permissionType]]);
        this.checked_ = isPermissionEnabled(permission.value);
        this.isPermissionManaged_ = permission.isManaged;
        const value = getPermissionValueAsTriState(permission);
        if (value === TriState.kAllow && permission.details) {
            this.permissionText_ = this.i18n('privacyHubPermissionAllowedTextWithDetails', permission.details);
            return;
        }
        switch (value) {
            case TriState.kAllow:
                this.permissionText_ = this.i18n('privacyHubPermissionAllowedText');
                break;
            case TriState.kBlock:
                this.permissionText_ = this.i18n('privacyHubPermissionDeniedText');
                break;
            case TriState.kAsk:
                this.permissionText_ = this.i18n('privacyHubPermissionAskText');
                break;
        }
    }
    onPermissionRowClick_() {
        if (this.isPermissionManaged_) {
            return;
        }
        const userActionHistogramName = `ChromeOS.PrivacyHub.${this.permissionType.substring(1)}Subpage.UserAction`;
        if (this.shouldRedirectToAndroidSettings_) {
            this.mojoInterfaceProvider_.openNativeSettings(this.app.id);
            chrome.metricsPrivate.recordEnumerationValue(userActionHistogramName, PrivacyHubSensorSubpageUserAction.ANDROID_SETTINGS_LINK_CLICKED, Object.keys(PrivacyHubSensorSubpageUserAction).length);
            return;
        }
        const permission = castExists(this.app.permissions[PermissionType[this.permissionType]]);
        if (isBoolValue(permission.value)) {
            permission.value = createBoolPermissionValue(!this.checked_);
        }
        else if (isTriStateValue(permission.value)) {
            permission.value = createTriStatePermissionValue(this.checked_ ? TriState.kBlock : TriState.kAllow);
        }
        this.mojoInterfaceProvider_.setPermission(this.app.id, permission);
        chrome.metricsPrivate.recordEnumerationValue(userActionHistogramName, PrivacyHubSensorSubpageUserAction.APP_PERMISSION_CHANGED, NUMBER_OF_POSSIBLE_USER_ACTIONS);
    }
    computeShouldRedirectToAndroidSettings_() {
        return !this.isPermissionManaged_ &&
            loadTimeData.getBoolean('isArcReadOnlyPermissionsEnabled') &&
            this.app.type === AppType.kArc;
    }
    computeShouldDisableToggle_() {
        return this.isPermissionManaged_ || this.shouldRedirectToAndroidSettings_;
    }
}
customElements.define(SettingsPrivacyHubAppPermissionRow.is, SettingsPrivacyHubAppPermissionRow);
