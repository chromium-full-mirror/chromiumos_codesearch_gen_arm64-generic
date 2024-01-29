// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying material design update required.
 */
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { sanitizeInnerHtml } from '//resources/js/parse_html_subset.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OobeModalDialog } from '../../components/dialogs/oobe_modal_dialog.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { CheckingDownloadingUpdate } from './checking_downloading_update.js';
import { getTemplate } from './update_required_card.html.js';
/**
 * Possible UI states of the screen. Must be in the same order as
 * UpdateRequiredView::UIState enum values.
 */
var UpdateRequiredUiState;
(function (UpdateRequiredUiState) {
    UpdateRequiredUiState["UPDATE_REQUIRED_MESSAGE"] = "update-required-message";
    UpdateRequiredUiState["UPDATE_PROCESS"] = "update-process";
    UpdateRequiredUiState["UPDATE_NEED_PERMISSION"] = "update-need-permission";
    UpdateRequiredUiState["UPDATE_COMPLETED_NEED_REBOOT"] = "update-completed-need-reboot";
    UpdateRequiredUiState["UPDATE_ERROR"] = "update-error";
    UpdateRequiredUiState["EOL_REACHED"] = "eol";
    UpdateRequiredUiState["UPDATE_NO_NETWORK"] = "update-no-network";
})(UpdateRequiredUiState || (UpdateRequiredUiState = {}));
const UpdateRequiredBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
export class UpdateRequired extends UpdateRequiredBase {
    static get is() {
        return 'update-required-card-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Is device connected to network?
             */
            isNetworkConnected: {
                type: Boolean,
                value: false,
            },
            updateProgressUnavailable: {
                type: Boolean,
                value: true,
            },
            updateProgressValue: {
                type: Number,
                value: 0,
            },
            updateProgressMessage: {
                type: String,
                value: '',
            },
            estimatedTimeLeftVisible: {
                type: Boolean,
                value: false,
            },
            enterpriseManager: {
                type: String,
                value: '',
            },
            deviceName: {
                type: String,
                value: '',
            },
            eolAdminMessage: {
                type: String,
                value: '',
            },
            usersDataPresent: {
                type: Boolean,
                value: false,
            },
            /**
             * Estimated time left in seconds.
             */
            estimatedTimeLeft: {
                type: Number,
                value: 0,
            },
        };
    }
    get EXTERNAL_API() {
        return [
            'setIsConnected',
            'setUpdateProgressUnavailable',
            'setUpdateProgressValue',
            'setUpdateProgressMessage',
            'setEstimatedTimeLeftVisible',
            'setEstimatedTimeLeft',
            'setUIState',
            'setEnterpriseAndDeviceName',
            'setEolMessage',
            'setIsUserDataPresent',
        ];
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('UpdateRequiredScreen');
        this.updateEolDeleteUsersDataMessage();
    }
    /** Initial UI State for screen */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.BLOCKING;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return UpdateRequiredUiState.UPDATE_REQUIRED_MESSAGE;
    }
    get UI_STEPS() {
        return UpdateRequiredUiState;
    }
    onBeforeShow() {
        const elem = this.shadowRoot?.querySelector('#downloadingUpdate');
        if (elem instanceof CheckingDownloadingUpdate) {
            elem.onBeforeShow();
        }
    }
    /** Called after resources are updated. */
    updateLocalizedContent() {
        this.i18nUpdateLocale();
        this.updateEolDeleteUsersDataMessage();
    }
    /**
     * @param enterpriseManager Manager of device -could be a domain
     *    name or an email address.
     */
    setEnterpriseAndDeviceName(enterpriseManager, device) {
        this.enterpriseManager = enterpriseManager;
        this.deviceName = device;
    }
    /**
     * @param eolMessage Not sanitized end of life message from policy
     */
    setEolMessage(eolMessage) {
        this.eolAdminMessage = sanitizeInnerHtml(eolMessage).toString();
    }
    setIsConnected(connected) {
        this.isNetworkConnected = connected;
    }
    /**
     */
    setUpdateProgressUnavailable(unavailable) {
        this.updateProgressUnavailable = unavailable;
    }
    /**
     * Sets update's progress bar value.
     * @param progress Percentage of the progress bar.
     */
    setUpdateProgressValue(progress) {
        this.updateProgressValue = progress;
    }
    /**
     * Sets message below progress bar.
     * @param message Message that should be shown.
     */
    setUpdateProgressMessage(message) {
        this.updateProgressMessage = message;
    }
    /**
     * Shows or hides downloading ETA message.
     * @param visible Are ETA message visible?
     */
    setEstimatedTimeLeftVisible(visible) {
        this.estimatedTimeLeftVisible = visible;
    }
    /**
     * Sets estimated time left until download will complete.
     * @param seconds Time left in seconds.
     */
    setEstimatedTimeLeft(seconds) {
        this.estimatedTimeLeft = seconds;
    }
    /**
     * Sets current UI state of the screen.
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    setUIState(uiState) {
        this.setUIStep(Object.values(UpdateRequiredUiState)[uiState]);
    }
    setIsUserDataPresent(dataPresent) {
        this.usersDataPresent = dataPresent;
    }
    onSelectNetworkClicked() {
        this.userActed('select-network');
    }
    onUpdateClicked() {
        this.userActed('update');
    }
    onFinishClicked() {
        this.userActed('finish');
    }
    onCellularPermissionRejected() {
        this.userActed('update-reject-cellular');
    }
    onCellularPermissionAccepted() {
        this.userActed('update-accept-cellular');
    }
    /**
     * Simple equality comparison function.
     */
    eq(one, another) {
        return one === another;
    }
    isEmpty(eolAdminMessage) {
        return !eolAdminMessage || eolAdminMessage.trim().length == 0;
    }
    updateEolDeleteUsersDataMessage() {
        const message = this.shadowRoot?.querySelector('#deleteUsersDataMessage');
        if (message instanceof HTMLElement) {
            message.innerHTML = this.i18nAdvanced('eolDeleteUsersDataMessage', {
                substitutions: [loadTimeData.getString('deviceType')],
                attrs: ['id'],
            });
        }
        const linkElement = this.shadowRoot?.querySelector('#deleteDataLink');
        if (linkElement instanceof HTMLAnchorElement) {
            linkElement.setAttribute('is', 'action-link');
            linkElement.classList.add('oobe-local-link');
            linkElement.addEventListener('click', () => this.showConfirmationDialog());
        }
    }
    showConfirmationDialog() {
        const dialog = this.shadowRoot?.querySelector('#confirmationDialog');
        if (dialog instanceof OobeModalDialog) {
            dialog.showDialog();
        }
    }
    hideConfirmationDialog() {
        const dialog = this.shadowRoot?.querySelector('#confirmationDialog');
        if (dialog instanceof OobeModalDialog) {
            dialog.hideDialog();
        }
    }
    onDeleteUsersConfirmed() {
        this.userActed('confirm-delete-users');
        this.hideConfirmationDialog();
    }
}
customElements.define(UpdateRequired.is, UpdateRequired);
