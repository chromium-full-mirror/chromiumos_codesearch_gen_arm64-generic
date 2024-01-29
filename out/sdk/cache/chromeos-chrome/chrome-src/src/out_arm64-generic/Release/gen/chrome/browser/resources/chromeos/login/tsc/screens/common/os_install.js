// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for OS install screen.
 */
import '//resources/cr_elements/cr_shared_vars.css.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import '../../components/dialogs/oobe_modal_dialog.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { afterNextRender, mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OobeTextButton } from '../../components/buttons/oobe_text_button.js';
import { OobeModalDialog } from '../../components/dialogs/oobe_modal_dialog.js';
import { getTemplate } from './os_install.html.js';
var OsInstallScreenSteps;
(function (OsInstallScreenSteps) {
    OsInstallScreenSteps["INTRO"] = "intro";
    OsInstallScreenSteps["IN_PROGRESS"] = "in-progress";
    OsInstallScreenSteps["FAILED"] = "failed";
    OsInstallScreenSteps["NO_DESTINATION_DEVICE_FOUND"] = "no-destination-device-found";
    OsInstallScreenSteps["SUCCESS"] = "success";
})(OsInstallScreenSteps || (OsInstallScreenSteps = {}));
const OsInstallScreenElementBase = mixinBehaviors([
    OobeI18nBehavior,
    OobeDialogHostBehavior,
    LoginScreenBehavior,
    MultiStepBehavior,
], PolymerElement);
export class OsInstall extends OsInstallScreenElementBase {
    static get is() {
        return 'os-install-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Success step subtitile message.
             */
            osInstallDialogSuccessSubtitile: {
                type: String,
                value: '',
            },
        };
    }
    constructor() {
        super();
    }
    get EXTERNAL_API() {
        return ['showStep', 'setServiceLogs', 'updateCountdownString'];
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return OsInstallScreenSteps.INTRO;
    }
    get UI_STEPS() {
        return OsInstallScreenSteps;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('OsInstallScreen');
    }
    /**
     * Set and show screen step.
     */
    showStep(step) {
        this.setUIStep(step);
    }
    /**
     * This is the 'on-click' event handler for the 'back' button.
     */
    onBack() {
        this.userActed('os-install-exit');
    }
    onIntroNextButtonPressed() {
        const confirmationDialog = this.shadowRoot?.querySelector('#osInstallDialogConfirm');
        if (confirmationDialog instanceof OobeModalDialog) {
            confirmationDialog.showDialog();
        }
        const closeConfirmDialogButton = this.shadowRoot?.querySelector('#closeConfirmDialogButton');
        if (closeConfirmDialogButton instanceof OobeTextButton) {
            closeConfirmDialogButton.focus();
        }
    }
    onConfirmNextButtonPressed() {
        const confirmationDialog = this.shadowRoot?.querySelector('#osInstallDialogConfirm');
        if (confirmationDialog instanceof OobeModalDialog) {
            confirmationDialog.hideDialog();
        }
        this.userActed('os-install-confirm-next');
    }
    onErrorSendFeedbackButtonPressed() {
        this.userActed('os-install-error-send-feedback');
    }
    onErrorShutdownButtonPressed() {
        this.userActed('os-install-error-shutdown');
    }
    onCloseConfirmDialogButtonPressed() {
        const confirmationDialog = this.shadowRoot?.querySelector('#osInstallDialogConfirm');
        if (confirmationDialog instanceof OobeModalDialog) {
            confirmationDialog.hideDialog();
        }
        const osInstallIntroNextButton = this.shadowRoot?.querySelector('#osInstallIntroNextButton');
        if (osInstallIntroNextButton instanceof OobeTextButton) {
            osInstallIntroNextButton.focus();
        }
    }
    getErrorNoDestContentHtml(locale) {
        return this.i18nAdvancedDynamic(locale, 'osInstallDialogErrorNoDestContent', {
            tags: ['p', 'ul', 'li'],
        });
    }
    getErrorFailedSubtitleHtml(locale) {
        return this.i18nAdvancedDynamic(locale, 'osInstallDialogErrorFailedSubtitle', {
            tags: ['p'],
        });
    }
    /**
     * Shows service logs.
     */
    onServiceLogsLinkClicked() {
        const serviceLogsDialog = this.shadowRoot?.querySelector('#serviceLogsDialog');
        if (serviceLogsDialog instanceof OobeModalDialog) {
            serviceLogsDialog.showDialog();
        }
        const closeServiceLogsDialog = this.shadowRoot?.querySelector('#closeServiceLogsDialog');
        if (closeServiceLogsDialog instanceof OobeTextButton) {
            closeServiceLogsDialog.focus();
        }
    }
    /**
     * On-click event handler for close button of the service logs dialog.
     */
    hideServiceLogsDialog() {
        const serviceLogsDialog = this.shadowRoot?.querySelector('#serviceLogsDialog');
        if (serviceLogsDialog instanceof OobeModalDialog) {
            serviceLogsDialog.hideDialog();
        }
        this.focusLogsLink();
    }
    focusLogsLink() {
        if (this.uiStep == OsInstallScreenSteps.NO_DESTINATION_DEVICE_FOUND) {
            afterNextRender(this, () => {
                const noDestLogsLink = this.shadowRoot?.querySelector('#noDestLogsLink');
                if (noDestLogsLink instanceof HTMLAnchorElement) {
                    noDestLogsLink.focus();
                }
            });
        }
        else if (this.uiStep == OsInstallScreenSteps.FAILED) {
            afterNextRender(this, () => {
                const serviceLogsLink = this.shadowRoot?.querySelector('#serviceLogsLink');
                if (serviceLogsLink instanceof HTMLAnchorElement) {
                    serviceLogsLink.focus();
                }
            });
        }
    }
    /**
     * serviceLogs Logs to show as plain text.
     */
    setServiceLogs(serviceLogs) {
        const webview = this.shadowRoot.getElementById('serviceLogsFrame');
        webview.src =
            'data:text/html;charset=utf-8,' +
                encodeURIComponent('<style>' +
                    'body {' + this.getServiceLogsFontsStyling() +
                    '  color: RGBA(0,0,0,.87);' +
                    '  margin : 0;' +
                    '  padding : 0;' +
                    '  white-space: pre-wrap;' +
                    '}' +
                    '#logsContainer {' +
                    '  overflow: auto;' +
                    '  height: 99%;' +
                    '  padding-left: 16px;' +
                    '  padding-right: 16px;' +
                    '}' +
                    '#logsContainer::-webkit-scrollbar-thumb {' +
                    '  border-radius: 10px;' +
                    '}' +
                    '</style>' +
                    '<body><div id="logsContainer">' + serviceLogs + '</div>' +
                    '</body>');
    }
    /**
     * timeLeftMessage Countdown message on success step.
     */
    updateCountdownString(timeLeftMessage) {
        this.osInstallDialogSuccessSubtitile = timeLeftMessage;
    }
    /**
     * Generates fonts styling for the service log WebView based on OobeJelly
     * flag.
     */
    getServiceLogsFontsStyling() {
        const isOobeJellyEnabled = loadTimeData.getBoolean('isOobeJellyEnabled');
        if (!isOobeJellyEnabled) {
            return '  font-family: Roboto, sans-serif;' +
                '  font-size: 14sp;';
        }
        // Those values correspond to the cros-body-1 token.
        return ('  font-family: Google Sans Text Regular, Google Sans, Roboto, sans-serif;' +
            '  font-size: 14px;' +
            '  font-weight: 400;' +
            '  line-height: 20px;');
    }
}
customElements.define(OsInstall.is, OsInstall);
