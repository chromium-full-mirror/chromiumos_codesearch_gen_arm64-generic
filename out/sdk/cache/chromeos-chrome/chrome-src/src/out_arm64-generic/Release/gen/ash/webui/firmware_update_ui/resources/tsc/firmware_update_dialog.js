// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/mojo/mojo/public/mojom/base/big_buffer.mojom-webui.js';
import 'chrome://resources/mojo/mojo/public/mojom/base/file_path.mojom-webui.js';
import 'chrome://resources/mojo/mojo/public/mojom/base/string16.mojom-webui.js';
import 'chrome://resources/polymer/v3_0/paper-progress/paper-progress.js';
import './firmware_shared.css.js';
import './firmware_shared_fonts.css.js';
import './firmware_update.mojom-webui.js';
import './strings.m.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { mojoString16ToString } from 'chrome://resources/js/mojo_type_util.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { DeviceRequestId, DeviceRequestKind, DeviceRequestObserverReceiver, UpdateProgressObserverReceiver, UpdateState } from './firmware_update.mojom-webui.js';
import { getTemplate } from './firmware_update_dialog.html.js';
import { isAppV2Enabled } from './firmware_update_utils.js';
import { getUpdateProvider } from './mojo_interface_provider.js';
const initialDialogContent = {
    title: '',
    body: '',
    footer: '',
};
const initialInstallationProgress = {
    percentage: 0,
    state: UpdateState.kIdle,
};
const deviceRequestIdToStringId = new Map([
    [DeviceRequestId.kDoNotPowerOff, 'requestIdDoNotPowerOff'],
    [DeviceRequestId.kReplugInstall, 'requestIdReplugInstall'],
    [DeviceRequestId.kInsertUSBCable, 'requestIdInsertUsbCable'],
    [DeviceRequestId.kRemoveUSBCable, 'requestIdRemoveUsbCable'],
    [DeviceRequestId.kPressUnlock, 'requestIdPressUnlock'],
    [DeviceRequestId.kRemoveReplug, 'requestIdRemoveReplug'],
    [DeviceRequestId.kReplugPower, 'requestIdReplugPower'],
]);
/**
 * @fileoverview
 * 'firmware-update-dialog' displays information related to a firmware update.
 */
const FirmwareUpdateDialogElementBase = I18nMixin(PolymerElement);
export class FirmwareUpdateDialogElement extends FirmwareUpdateDialogElementBase {
    constructor() {
        super(...arguments);
        this.update = null;
        this.isInitiallyInflight = false;
        this.lastDeviceRequestId = null;
        this.dialogContent = initialDialogContent;
        this.updateProvider = getUpdateProvider();
        this.installController = null;
        this.updateProgressObserverReceiver = null;
        this.deviceRequestObserverReceiver = null;
        this.inactiveDialogStates = [UpdateState.kUnknown, UpdateState.kIdle];
    }
    static get is() {
        return 'firmware-update-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            update: {
                type: Object,
            },
            installationProgress: {
                type: Object,
                value: initialInstallationProgress,
                observer: FirmwareUpdateDialogElement.prototype.installationProgressChanged,
            },
            isInitiallyInflight: {
                value: false,
            },
            dialogContent: {
                type: Object,
                value: initialDialogContent,
                computed: 'computeDialogContent(installationProgress.*,' +
                    'isInitiallyInflight, lastDeviceRequestId)',
            },
            /**
             * This property is used to keep track of the ID of the last-received
             * DeviceRequest. If this property is not null, it means there is a
             * pending request. If the property is null, it means there are no pending
             * requests.
             */
            lastDeviceRequestId: {
                type: Object,
                value: null,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // When v2 of the app is not enabled, treat "kWaitingForUser" as an inactive
        // state. This gracefully handles an unexpected edge case where fwupd sends
        // a kWaitingForUser status even though the v2 flag is disabled (which
        // shouldn't normally happen).
        if (!isAppV2Enabled()) {
            this.inactiveDialogStates.push(UpdateState.kWaitingForUser);
        }
        window.addEventListener('open-update-dialog', (e) => this.onOpenUpdateDialog(e));
    }
    /** Implements DeviceRequestObserver.onDeviceRequest */
    onDeviceRequest(request) {
        // OnDeviceRequest should only be triggered when the v2 flag is enabled.
        assert(isAppV2Enabled());
        if (request.kind !== DeviceRequestKind.kImmediate) {
            // Ignore non-immediate requests.
            return;
        }
        this.lastDeviceRequestId = request.id;
    }
    /** Implements UpdateProgressObserver.onStatusChanged */
    onStatusChanged(update) {
        // If the update switched *away* from kWaitingForUser, hide any requests.
        // This can happen as part of the normal flow (i.e. the request was executed
        // by the user) or as part of an error flow (e.g. the instruction timed out,
        // or some other error occurred). In either case, we want to reset
        // lastDeviceRequestId so that the app knows the hide the request.
        if (isAppV2Enabled() && update.state !== UpdateState.kWaitingForUser &&
            this.installationProgress.state === UpdateState.kWaitingForUser) {
            this.lastDeviceRequestId = null;
        }
        if (update.state === UpdateState.kSuccess ||
            update.state === UpdateState.kFailed) {
            // Install is completed, reset inflight state.
            this.isInitiallyInflight = false;
        }
        this.installationProgress = update;
        if (this.isUpdateInProgress() && this.isDialogOpen()) {
            // 'aria-hidden' is used to prevent ChromeVox from announcing
            // the body text automatically. Setting 'aria-hidden' to false
            // here allows ChromeVox to announce the body text when a user
            // navigates to it.
            assert(this.shadowRoot);
            this.shadowRoot.querySelector('#updateDialogBody').setAttribute('aria-hidden', 'false');
        }
    }
    installationProgressChanged(prevProgress, currProgress) {
        if (!currProgress || prevProgress.state == currProgress.state) {
            return;
        }
        // Focus the dialog title if the update state has changed.
        assert(this.shadowRoot);
        const dialogTitle = this.shadowRoot.querySelector('#updateDialogTitle');
        if (dialogTitle) {
            dialogTitle.focus();
        }
    }
    closeDialog() {
        this.isInitiallyInflight = false;
        // Resetting |installationProgress| triggers a call to
        // |shouldShowUpdateDialog|.
        this.installationProgress = initialInstallationProgress;
        this.update = null;
    }
    async prepareForUpdate() {
        assert(this.update);
        const response = await this.updateProvider.prepareForUpdate(this.update.deviceId);
        if (!response.controller) {
            // TODO(michaelcheco): Handle |StartInstall| failed case.
            return;
        }
        this.installController = response.controller;
        this.bindReceiverAndMaybeStartUpdate();
    }
    bindReceiverAndMaybeStartUpdate() {
        this.updateProgressObserverReceiver =
            new UpdateProgressObserverReceiver(this);
        assert(this.installController);
        this.installController.addUpdateProgressObserver(this.updateProgressObserverReceiver.$.bindNewPipeAndPassRemote());
        // Listen for device requests if v2 of the app is enabled.
        if (isAppV2Enabled()) {
            this.deviceRequestObserverReceiver =
                new DeviceRequestObserverReceiver(this);
            this.installController.addDeviceRequestObserver(this.deviceRequestObserverReceiver.$.bindNewPipeAndPassRemote());
        }
        // Only start new updates, inflight updates will be observed instead.
        if (!this.isInitiallyInflight) {
            assert(this.update);
            this.installController.beginUpdate(this.update.deviceId, this.update.filepath);
        }
    }
    shouldShowUpdateDialog() {
        if (!this.update) {
            return false;
        }
        // Handles the case in which an update is in progress on app load, but has
        // yet to receive an progress update callback.
        if (this.isInitiallyInflight) {
            return true;
        }
        const activeDialogStates = [
            UpdateState.kUpdating,
            UpdateState.kRestarting,
            UpdateState.kFailed,
            UpdateState.kSuccess,
        ];
        if (isAppV2Enabled()) {
            activeDialogStates.push(UpdateState.kWaitingForUser);
        }
        // Show dialog is there is an update in progress.
        return activeDialogStates.includes(this.installationProgress.state) ||
            this.installationProgress.percentage > 0;
    }
    computePercentageValue() {
        if (this.installationProgress?.percentage) {
            return this.installationProgress.percentage;
        }
        return 0;
    }
    isUpdateInProgress() {
        if (this.inactiveDialogStates.includes(this.installationProgress.state)) {
            return this.installationProgress.percentage > 0;
        }
        return this.installationProgress.state === UpdateState.kUpdating;
    }
    isDeviceRestarting() {
        return this.installationProgress.state === UpdateState.kRestarting;
    }
    shouldShowProgressBar() {
        const showProgressBar = this.isUpdateInProgress() ||
            this.isDeviceRestarting() || this.isWaitingForUserAction() ||
            this.isInitiallyInflight;
        assert(this.shadowRoot);
        const progressIsActiveEl = this.shadowRoot.activeElement ==
            this.shadowRoot.querySelector('#progress');
        // Move focus to the dialog title if the progress label is currently
        // active and set to be hidden. This case is reached when the dialog state
        // moves from restarting to completed.
        const dialogTitle = this.shadowRoot.querySelector('#updateDialogTitle');
        if (progressIsActiveEl && !showProgressBar && dialogTitle) {
            dialogTitle.focus();
        }
        return showProgressBar;
    }
    isUpdateDone() {
        return this.installationProgress.state === UpdateState.kSuccess ||
            this.installationProgress.state === UpdateState.kFailed;
    }
    createRequestDialogContent() {
        assert(this.update);
        const { deviceName } = this.update;
        const { percentage } = this.installationProgress;
        assert(this.lastDeviceRequestId !== null);
        const requestStringId = deviceRequestIdToStringId.get(this.lastDeviceRequestId);
        assert(!!requestStringId);
        return {
            title: this.i18n('updating', mojoString16ToString(deviceName)),
            body: this.i18n(requestStringId),
            footer: this.i18n('waitingFooterText', percentage),
        };
    }
    createDialogContentObj(state) {
        assert(this.update);
        const { deviceName, deviceVersion } = this.update;
        const { percentage } = this.installationProgress;
        const dialogContent = new Map([
            [
                UpdateState.kUpdating,
                {
                    title: this.i18n('updating', mojoString16ToString(deviceName)),
                    body: this.i18n('updatingInfo'),
                    footer: this.i18n('installing', percentage),
                },
            ],
            [
                UpdateState.kRestarting,
                {
                    title: this.i18n('restartingTitleText', mojoString16ToString(deviceName)),
                    body: this.i18n('restartingBodyText'),
                    footer: this.i18n('restartingFooterText'),
                },
            ],
            [
                UpdateState.kFailed,
                {
                    title: this.i18n('updateFailedTitleText', mojoString16ToString(deviceName)),
                    body: this.i18n('updateFailedBodyText'),
                    footer: '',
                },
            ],
            [
                UpdateState.kSuccess,
                {
                    title: this.i18n('deviceUpToDate', mojoString16ToString(deviceName)),
                    body: this.i18n('hasBeenUpdated', mojoString16ToString(deviceName), deviceVersion),
                    footer: '',
                },
            ],
        ]);
        assert(dialogContent.has(state));
        return dialogContent.get(state);
    }
    computeDialogContent() {
        // No update in progress.
        if (!this.isInitiallyInflight && !this.update) {
            return initialDialogContent;
        }
        if (this.inactiveDialogStates.includes(this.installationProgress.state) ||
            this.isDeviceRestarting()) {
            return this.createDialogContentObj(UpdateState.kRestarting);
        }
        // Regular case: Update is in progress, started from the same instance of
        // which the app launched.
        // Edge case: App launch with an update in progress, but no progress
        // callback has been called yet.
        if (this.isInitiallyInflight || this.isUpdateInProgress()) {
            return this.createDialogContentObj(UpdateState.kUpdating);
        }
        if (isAppV2Enabled() &&
            this.installationProgress.state === UpdateState.kWaitingForUser) {
            if (this.lastDeviceRequestId === null) {
                // Show normal update flow until onDeviceRequest is called.
                return this.createDialogContentObj(UpdateState.kUpdating);
            }
            else {
                return this.createRequestDialogContent();
            }
        }
        if (this.isUpdateDone()) {
            return this.createDialogContentObj(this.installationProgress.state);
        }
        return initialDialogContent;
    }
    isInIndeterminateState() {
        if (this.installationProgress) {
            return this.inactiveDialogStates.includes(this.installationProgress.state) ||
                this.isDeviceRestarting();
        }
        return false;
    }
    isProgressBarDisabled() {
        return this.isWaitingForUserAction();
    }
    computeButtonText() {
        if (!this.isUpdateDone()) {
            return '';
        }
        return this.installationProgress.state === UpdateState.kSuccess ?
            this.i18n('doneButton') :
            this.i18n('okButton');
    }
    isDialogOpen() {
        assert(this.shadowRoot);
        return !!this.shadowRoot.querySelector('#updateDialog');
    }
    /** Event callback for 'open-update-dialog'. */
    onOpenUpdateDialog(e) {
        this.update = e.detail.update;
        this.isInitiallyInflight = e.detail.inflight;
        this.prepareForUpdate();
    }
    setIsInitiallyInflightForTesting(isInitiallyInflight) {
        this.isInitiallyInflight = isInitiallyInflight;
    }
    isWaitingForUserAction() {
        return isAppV2Enabled() && this.lastDeviceRequestId !== null &&
            this.installationProgress.state === UpdateState.kWaitingForUser;
    }
}
customElements.define(FirmwareUpdateDialogElement.is, FirmwareUpdateDialogElement);
