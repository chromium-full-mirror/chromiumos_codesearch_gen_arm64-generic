// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './app_management_cros_shared_style.css.js';
import '//resources/ash/common/cr_elements/cr_button/cr_button.js';
import '//resources/ash/common/cr_elements/policy/cr_tooltip_icon.js';
import { BrowserProxy } from '//resources/cr_components/app_management/browser_proxy.js';
import { AppManagementUserAction, InstallReason } from '//resources/cr_components/app_management/constants.js';
import { recordAppManagementUserAction } from '//resources/cr_components/app_management/util.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './uninstall_button.html.js';
export class AppManagementUninstallButtonElement extends PolymerElement {
    static get is() {
        return 'app-management-uninstall-button';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            app: Object,
            uninstallLabel: String,
            policyLabel: String,
        };
    }
    /**
     * Returns true if the button should be disabled due to app install type.
     *
     * If the compiler complains about the "lack of ending return statement",
     * you maybe just added a new InstallReason and need to add a new case.
     */
    getDisableState_() {
        switch (this.app.installReason) {
            case InstallReason.kSystem:
            case InstallReason.kPolicy:
            case InstallReason.kKiosk:
                return true;
            case InstallReason.kUnknown:
            case InstallReason.kOem:
            case InstallReason.kDefault:
            case InstallReason.kSubApp:
            case InstallReason.kSync:
            case InstallReason.kUser:
            case InstallReason.kSubApp:
            case InstallReason.kCommandLine:
                return false;
        }
    }
    /**
     * Returns true if the app was installed by a policy.
     */
    showPolicyIndicator_() {
        return this.app.installReason === InstallReason.kPolicy;
    }
    /**
     * Returns true if the uninstall button should be shown.
     */
    showUninstallButton_() {
        return this.app.installReason !== InstallReason.kSystem;
    }
    onClick_() {
        BrowserProxy.getInstance().handler.uninstall(this.app.id);
        recordAppManagementUserAction(this.app.type, AppManagementUserAction.UNINSTALL_DIALOG_LAUNCHED);
    }
}
customElements.define(AppManagementUninstallButtonElement.is, AppManagementUninstallButtonElement);
