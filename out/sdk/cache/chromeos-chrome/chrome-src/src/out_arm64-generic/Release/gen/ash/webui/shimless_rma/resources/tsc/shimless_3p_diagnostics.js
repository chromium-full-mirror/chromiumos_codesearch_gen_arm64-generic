// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './shimless_rma_shared.css.js';
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getShimlessRmaService } from './mojo_interface_provider.js';
import { getTemplate } from './shimless_3p_diagnostics.html.js';
import { Show3pDiagnosticsAppResult } from './shimless_rma.mojom-webui.js';
import { disableAllButtons, enableAllButtons } from './shimless_rma_util.js';
/**
 * @fileoverview
 * 'shimless-3p-diagnostics' manages dialogs to install and show 3p diagnostics
 * app.
 */
const Shimless3pDiagnosticsBase = I18nMixin(PolymerElement);
export class Shimless3pDiagnostics extends Shimless3pDiagnosticsBase {
    static get is() {
        return 'shimless-3p-diagnostics';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            hasPendingLaunch: {
                type: Boolean,
                value: false,
            },
            providerName: {
                type: String,
                value: '',
            },
            installableAppPath: {
                type: String,
                value: '',
            },
            appInfo: {
                type: Object,
                value: null,
            },
            errorTitle: {
                type: String,
                value: '',
            },
            errorMessage: {
                type: String,
                value: '',
            },
        };
    }
    constructor() {
        super();
        this.shimlessRmaService = getShimlessRmaService();
        if (!loadTimeData.getBoolean('3pDiagnosticsEnabled')) {
            return;
        }
        this.shimlessRmaService.get3pDiagnosticsProvider().then(({ provider }) => {
            this.providerName = provider;
        });
    }
    /**
     * Ends the launch process and enables all buttons.
     */
    completeLaunch() {
        this.hasPendingLaunch = false;
        enableAllButtons(this);
    }
    /**
     * Shows the error dialog with specific title and message.
     */
    showError(titleId, messageId) {
        assert(this.providerName);
        this.errorTitle = this.i18n(titleId, this.providerName);
        this.errorMessage = this.i18n(messageId);
        const dialog = this.shadowRoot.querySelector('#shimless3pDiagErrorDialog');
        assert(dialog);
        dialog.showModal();
    }
    /**
     * Shows the dialog to ask whether users want to install an installable app
     * from external storage or not.
     */
    showFindInstallableDialog(appPath) {
        this.installableAppPath = appPath.path;
        const dialog = this.shadowRoot.querySelector('#shimless3pDiagFindInstallableDialog');
        assert(dialog);
        dialog.showModal();
    }
    /**
     * Completes the last installation by replying the user approval result. If
     * the installation is approved, then show the app. Otherwise, just finish the
     * launch process.
     */
    completeLastInstall(isApproved) {
        this.shimlessRmaService.completeLast3pDiagnosticsInstallation(isApproved)
            .then(() => {
            isApproved ? this.show3pDiagnosticsApp() : this.completeLaunch();
        });
    }
    /**
     * Shows the permission review dialog for users to review the app permissions.
     * If there is no permission requested, the dialog won't be shown and the app
     * is approved.
     */
    showPermissionReviewDialogOrCompleteLastInstall(appInfo) {
        if (!appInfo.permissionMessage) {
            this.completeLastInstall(true);
            return;
        }
        this.appInfo = appInfo;
        const dialog = this.shadowRoot.querySelector('#shimless3pDiagReviewPermissionDialog');
        assert(dialog);
        dialog.showModal();
    }
    /**
     * Shows the 3p diagnostics app. The app dialog will be shown in another
     * webview outside of this webui. If no app is installed or fails to load
     * installed app, shows the error.
     */
    show3pDiagnosticsApp() {
        this.shimlessRmaService.show3pDiagnosticsApp().then((result) => {
            switch (result.result) {
                case Show3pDiagnosticsAppResult.kOk:
                    this.completeLaunch();
                    return;
                case Show3pDiagnosticsAppResult.kAppNotInstalled:
                    this.showError('3pNotInstalledDialogTitle', '3pCheckWithOemDialogMessage');
                    return;
                case Show3pDiagnosticsAppResult.kFailedToLoad:
                    this.showError('3pFailedToLoadDialogTitle', '3pFailedToLoadDialogMessage');
                    return;
            }
            assertNotReached();
        });
    }
    /**
     * Handles cancel event or skip button of installable dialog. Skips the
     * install process and tries to load the installed app.
     */
    onCancelOrSkipInstallButtonClicked() {
        const dialog = this.shadowRoot.querySelector('#shimless3pDiagFindInstallableDialog');
        assert(dialog);
        dialog.close();
        this.show3pDiagnosticsApp();
    }
    /**
     * Handles install button of installable dialog. Installs the installable app.
     */
    onInstallButtonClicked() {
        const dialog = this.shadowRoot.querySelector('#shimless3pDiagFindInstallableDialog');
        assert(dialog);
        dialog.close();
        this.shimlessRmaService.installLastFound3pDiagnosticsApp().then((result) => {
            result.appInfo ? this.showPermissionReviewDialogOrCompleteLastInstall(result.appInfo) :
                this.showError('3pFailedToInstallDialogTitle', '3pCheckWithOemDialogMessage');
        });
    }
    /**
     * Handles cancel event or cancel button of permission review dialog. Cancels
     * the installation and ends the launch process.
     */
    onCancelOrCancelInstallButtonClicked() {
        const dialog = this.shadowRoot.querySelector('#shimless3pDiagReviewPermissionDialog');
        assert(dialog);
        dialog.close();
        this.completeLastInstall(/*isApproved=*/ false);
    }
    /**
     * Handles accept button of permission review dialog. Continues the
     * installation.
     */
    onAcceptPermissionButtonClicked() {
        const dialog = this.shadowRoot.querySelector('#shimless3pDiagReviewPermissionDialog');
        assert(dialog);
        dialog.close();
        this.completeLastInstall(/*isApproved=*/ true);
    }
    /**
     * Handles cancel event or back button of error dialog. Close the dialog and
     * ends the launch process.
     */
    onErrorDialogCancelOrBackButtonClicked() {
        const dialog = this.shadowRoot.querySelector('#shimless3pDiagErrorDialog');
        assert(dialog);
        dialog.close();
        this.completeLaunch();
    }
    /**
     * Launch the 3p diagnostics app. This will ask if users want to install the
     * app from external storage if app files exist, or launch the installed app.
     */
    launch3pDiagnostics() {
        if (!loadTimeData.getBoolean('3pDiagnosticsEnabled') ||
            this.hasPendingLaunch) {
            return;
        }
        // If there is no provider or provider is not yet fetched, don't show
        // any UI action and just return.
        if (!this.providerName) {
            return;
        }
        this.hasPendingLaunch = true;
        disableAllButtons(this, /*showBusyStateOverlay=*/ true);
        this.shimlessRmaService.getInstallable3pDiagnosticsAppPath().then((result) => {
            result.appPath ? this.showFindInstallableDialog(result.appPath) :
                this.show3pDiagnosticsApp();
        });
    }
}
customElements.define(Shimless3pDiagnostics.is, Shimless3pDiagnostics);
