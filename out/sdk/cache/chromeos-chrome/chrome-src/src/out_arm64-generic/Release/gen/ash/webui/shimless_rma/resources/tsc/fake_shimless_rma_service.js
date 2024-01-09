// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/ash/common/assert.js';
import { FakeMethodResolver } from 'chrome://resources/ash/common/fake_method_resolver.js';
import { FakeObservables } from 'chrome://resources/ash/common/fake_observables.js';
import { CalibrationOverallStatus, CalibrationStatus, ComponentType, FinalizationError, FinalizationStatus, OsUpdateOperation, ProvisioningError, ProvisioningStatus, RmadErrorCode, State, UpdateErrorCode, UpdateRoFirmwareStatus } from './shimless_rma.mojom-webui.js';
export class FakeShimlessRmaService {
    constructor() {
        this.methods = new FakeMethodResolver();
        this.observables = new FakeObservables();
        /**
         * The list of states for this RMA flow.
         */
        this.states = [];
        /**
         * The index into states for the current fake state.
         */
        this.stateIndex = 0;
        /**
         * The list of components.
         */
        this.components = [];
        /**
         * Control automatically triggering a HWWP disable observation.
         */
        this.automaticallyTriggerDisableWriteProtectionObservation = false;
        /**
         * Control automatically triggering update RO firmware observations.
         */
        this.automaticallyTriggerUpdateRoFirmwareObservation = false;
        /**
         * Control automatically triggering provisioning observations.
         */
        this.automaticallyTriggerProvisioningObservation = false;
        /**
         * Control automatically triggering calibration observations.
         */
        this.automaticallyTriggerCalibrationObservation = false;
        /**
         * Control automatically triggering OS update observations.
         */
        this.automaticallyTriggerOsUpdateObservation = false;
        /**
         * Control automatically triggering a hardware verification observation.
         */
        this.automaticallyTriggerHardwareVerificationStatusObservation = false;
        /**
         * Control automatically triggering a finalization observation.
         */
        this.automaticallyTriggerFinalizationObservation = false;
        /**
         * Control automatically triggering power cable state observations.
         */
        this.automaticallyTriggerPowerCableStateObservation = false;
        /**
         * Both abortRma and forward state transitions can have significant delays
         * that are useful to fake for manual testing.
         * Defaults to no delay for unit tests.
         */
        this.resolveMethodDelayMs = 0;
        /**
         * The result of calling trackConfiguredNetworks.
         */
        this.trackConfiguredNetworksCalled = false;
        /**
         * The approval of last call to completeLast3pDiagnosticsInstallation.
         */
        this.lastCompleteLast3pDiagnosticsInstallationApproval = null;
        /**
         * Has show3pDiagnosticsApp been called.
         */
        this.wasShow3pDiagnosticsAppCalled = false;
        this.reset();
    }
    setAsyncOperationDelayMs(delayMs) {
        this.resolveMethodDelayMs = delayMs;
    }
    /**
     * Set the ordered list of states end error codes for this fake.
     * Setting an empty list (the default) returns kRmaNotRequired for any state
     * function.
     * Next state functions and transitionPreviousState will move through the fake
     * state through the list, and return kTransitionFailed if it would move off
     * either end. getCurrentState always return the state at the current index.
     */
    setStates(states) {
        this.states = states;
        this.stateIndex = 0;
    }
    getCurrentState() {
        // As next state functions and transitionPreviousState can modify the result
        // of this function the result must be set at the time of the call.
        if (this.states.length === 0) {
            this.setFakeCurrentState(State.kUnknown, false, false, RmadErrorCode.kRmaNotRequired);
        }
        else {
            // It should not be possible for stateIndex to be out of range unless
            // there is a bug in the fake.
            assert(this.stateIndex < this.states.length);
            const state = this.states[this.stateIndex];
            this.setFakeCurrentState(state.state, state.canExit, state.canGoBack, state.error);
        }
        return this.methods.resolveMethodWithDelay('getCurrentState', this.resolveMethodDelayMs);
    }
    transitionPreviousState() {
        // As next state methods and transitionPreviousState can modify the result
        // of this function the result must be set at the time of the call.
        if (this.states.length === 0) {
            this.setFakePrevState(State.kUnknown, false, false, RmadErrorCode.kRmaNotRequired);
        }
        else if (this.stateIndex === 0) {
            // It should not be possible for stateIndex to be out of range unless
            // there is a bug in the fake.
            assert(this.stateIndex < this.states.length);
            const state = this.states[this.stateIndex];
            this.setFakePrevState(state.state, state.canExit, state.canGoBack, RmadErrorCode.kTransitionFailed);
        }
        else {
            this.stateIndex--;
            const state = this.states[this.stateIndex];
            this.setFakePrevState(state.state, state.canExit, state.canGoBack, state.error);
        }
        return this.methods.resolveMethodWithDelay('transitionPreviousState', this.resolveMethodDelayMs);
    }
    abortRma() {
        return this.methods.resolveMethodWithDelay('abortRma', this.resolveMethodDelayMs);
    }
    /**
     * Sets the value that will be returned when calling abortRma().
     */
    setAbortRmaResult(error) {
        this.methods.setResult('abortRma', { error: error });
    }
    beginFinalization() {
        return this.getNextStateForMethod('beginFinalization', State.kWelcomeScreen);
    }
    trackConfiguredNetworks() {
        this.trackConfiguredNetworksCalled = true;
    }
    getTrackConfiguredNetworks() {
        return this.trackConfiguredNetworksCalled;
    }
    networkSelectionComplete() {
        return this.getNextStateForMethod('networkSelectionComplete', State.kConfigureNetwork);
    }
    getCurrentOsVersion() {
        return this.methods.resolveMethod('getCurrentOsVersion');
    }
    setGetCurrentOsVersionResult(version) {
        this.methods.setResult('getCurrentOsVersion', { version: version });
    }
    checkForOsUpdates() {
        return this.methods.resolveMethod('checkForOsUpdates');
    }
    setCheckForOsUpdatesResult(version) {
        this.methods.setResult('checkForOsUpdates', { updateAvailable: true, version });
    }
    updateOs() {
        if (this.automaticallyTriggerOsUpdateObservation) {
            this.triggerOsUpdateObserver(OsUpdateOperation.kCheckingForUpdate, 0.1, UpdateErrorCode.kSuccess, 500);
            this.triggerOsUpdateObserver(OsUpdateOperation.kUpdateAvailable, 0.3, UpdateErrorCode.kSuccess, 1000);
            this.triggerOsUpdateObserver(OsUpdateOperation.kDownloading, 0.5, UpdateErrorCode.kSuccess, 1500);
            this.triggerOsUpdateObserver(OsUpdateOperation.kVerifying, 0.7, UpdateErrorCode.kSuccess, 2000);
            this.triggerOsUpdateObserver(OsUpdateOperation.kFinalizing, 0.9, UpdateErrorCode.kSuccess, 2500);
            this.triggerOsUpdateObserver(OsUpdateOperation.kUpdatedNeedReboot, 1.0, UpdateErrorCode.kSuccess, 3000);
        }
        return this.methods.resolveMethod('updateOs');
    }
    setUpdateOsResult(started) {
        this.methods.setResult('updateOs', { updateStarted: started });
    }
    updateOsSkipped() {
        return this.getNextStateForMethod('updateOsSkipped', State.kUpdateOs);
    }
    setSameOwner() {
        return this.getNextStateForMethod('setSameOwner', State.kChooseDestination);
    }
    setDifferentOwner() {
        return this.getNextStateForMethod('setDifferentOwner', State.kChooseDestination);
    }
    setWipeDevice() {
        return this.getNextStateForMethod('setWipeDevice', State.kChooseWipeDevice);
    }
    manualDisableWriteProtectAvailable() {
        return this.methods.resolveMethod('manualDisableWriteProtectAvailable');
    }
    setManualDisableWriteProtectAvailableResult(available) {
        this.methods.setResult('manualDisableWriteProtectAvailable', { available: available });
    }
    chooseManuallyDisableWriteProtect() {
        return this.getNextStateForMethod('chooseManuallyDisableWriteProtect', State.kChooseWriteProtectDisableMethod);
    }
    chooseRsuDisableWriteProtect() {
        return this.getNextStateForMethod('chooseRsuDisableWriteProtect', State.kChooseWriteProtectDisableMethod);
    }
    getRsuDisableWriteProtectChallenge() {
        return this.methods.resolveMethod('getRsuDisableWriteProtectChallenge');
    }
    setGetRsuDisableWriteProtectChallengeResult(challenge) {
        this.methods.setResult('getRsuDisableWriteProtectChallenge', { challenge: challenge });
    }
    getRsuDisableWriteProtectHwid() {
        return this.methods.resolveMethod('getRsuDisableWriteProtectHwid');
    }
    setGetRsuDisableWriteProtectHwidResult(hwid) {
        this.methods.setResult('getRsuDisableWriteProtectHwid', { hwid: hwid });
    }
    getRsuDisableWriteProtectChallengeQrCode() {
        return this.methods.resolveMethod('getRsuDisableWriteProtectChallengeQrCode');
    }
    setGetRsuDisableWriteProtectChallengeQrCodeResponse(qrCodeData) {
        this.methods.setResult('getRsuDisableWriteProtectChallengeQrCode', { qrCodeData: qrCodeData });
    }
    setRsuDisableWriteProtectCode() {
        return this.getNextStateForMethod('setRsuDisableWriteProtectCode', State.kEnterRSUWPDisableCode);
    }
    writeProtectManuallyDisabled() {
        return this.getNextStateForMethod('writeProtectManuallyDisabled', State.kWaitForManualWPDisable);
    }
    getWriteProtectDisableCompleteAction() {
        return this.methods.resolveMethod('getWriteProtectDisableCompleteAction');
    }
    setGetWriteProtectDisableCompleteAction(action) {
        this.methods.setResult('getWriteProtectDisableCompleteAction', { action: action });
    }
    confirmManualWpDisableComplete() {
        return this.getNextStateForMethod('confirmManualWpDisableComplete', State.kWPDisableComplete);
    }
    getComponentList() {
        this.methods.setResult('getComponentList', { components: this.components });
        return this.methods.resolveMethod('getComponentList');
    }
    setGetComponentListResult(components) {
        this.components = components;
    }
    setComponentList() {
        return this.getNextStateForMethod('setComponentList', State.kSelectComponents);
    }
    reworkMainboard() {
        return this.getNextStateForMethod('reworkMainboard', State.kSelectComponents);
    }
    roFirmwareUpdateComplete() {
        return this.getNextStateForMethod('roFirmwareUpdateComplete', State.kUpdateRoFirmware);
    }
    shutdownForRestock() {
        return this.getNextStateForMethod('shutdownForRestock', State.kRestock);
    }
    continueFinalizationAfterRestock() {
        return this.getNextStateForMethod('continueFinalizationAfterRestock', State.kRestock);
    }
    getRegionList() {
        return this.methods.resolveMethod('getRegionList');
    }
    setGetRegionListResult(regions) {
        this.methods.setResult('getRegionList', { regions: regions });
    }
    getSkuList() {
        return this.methods.resolveMethod('getSkuList');
    }
    setGetSkuListResult(skus) {
        this.methods.setResult('getSkuList', { skus: skus });
    }
    getCustomLabelList() {
        return this.methods.resolveMethod('getCustomLabelList');
    }
    setGetCustomLabelListResult(customLabels) {
        this.methods.setResult('getCustomLabelList', { customLabels: customLabels });
    }
    getSkuDescriptionList() {
        return this.methods.resolveMethod('getSkuDescriptionList');
    }
    setGetSkuDescriptionListResult(skuDescriptions) {
        this.methods.setResult('getSkuDescriptionList', { skuDescriptions: skuDescriptions });
    }
    getOriginalSerialNumber() {
        return this.methods.resolveMethod('getOriginalSerialNumber');
    }
    setGetOriginalSerialNumberResult(serialNumber) {
        this.methods.setResult('getOriginalSerialNumber', { serialNumber: serialNumber });
    }
    getOriginalRegion() {
        return this.methods.resolveMethod('getOriginalRegion');
    }
    setGetOriginalRegionResult(regionIndex) {
        this.methods.setResult('getOriginalRegion', { regionIndex: regionIndex });
    }
    getOriginalSku() {
        return this.methods.resolveMethod('getOriginalSku');
    }
    setGetOriginalSkuResult(skuIndex) {
        this.methods.setResult('getOriginalSku', { skuIndex: skuIndex });
    }
    getOriginalCustomLabel() {
        return this.methods.resolveMethod('getOriginalCustomLabel');
    }
    setGetOriginalCustomLabelResult(customLabelIndex) {
        this.methods.setResult('getOriginalCustomLabel', { customLabelIndex: customLabelIndex });
    }
    getOriginalDramPartNumber() {
        return this.methods.resolveMethod('getOriginalDramPartNumber');
    }
    setGetOriginalDramPartNumberResult(dramPartNumber) {
        this.methods.setResult('getOriginalDramPartNumber', { dramPartNumber: dramPartNumber });
    }
    getOriginalFeatureLevel() {
        return this.methods.resolveMethod('getOriginalFeatureLevel');
    }
    setGetOriginalFeatureLevelResult(featureLevel) {
        this.methods.setResult('getOriginalFeatureLevel', { originalFeatureLevel: featureLevel });
    }
    setDeviceInformation(_serialNumber, _regionIndex, _skuIndex, _customLabelIndex, _dramPartNumber, _isChassisBranded, _hwComplianceVersion) {
        return this.getNextStateForMethod('setDeviceInformation', State.kUpdateDeviceInformation);
    }
    getCalibrationComponentList() {
        return this.methods.resolveMethod('getCalibrationComponentList');
    }
    setGetCalibrationComponentListResult(components) {
        this.methods.setResult('getCalibrationComponentList', { components: components });
    }
    getCalibrationSetupInstructions() {
        return this.methods.resolveMethod('getCalibrationSetupInstructions');
    }
    setGetCalibrationSetupInstructionsResult(instructions) {
        this.methods.setResult('getCalibrationSetupInstructions', { instructions: instructions });
    }
    /**
     * The fake does not use the status list parameter, the fake data is never
     * updated.
     */
    startCalibration() {
        return this.getNextStateForMethod('startCalibration', State.kCheckCalibration);
    }
    runCalibrationStep() {
        return this.getNextStateForMethod('runCalibrationStep', State.kSetupCalibration);
    }
    continueCalibration() {
        return this.getNextStateForMethod('continueCalibration', State.kRunCalibration);
    }
    calibrationComplete() {
        return this.getNextStateForMethod('calibrationComplete', State.kRunCalibration);
    }
    retryProvisioning() {
        return this.getNextStateForMethod('retryProvisioning', State.kProvisionDevice);
    }
    provisioningComplete() {
        return this.getNextStateForMethod('provisioningComplete', State.kProvisionDevice);
    }
    finalizationComplete() {
        return this.getNextStateForMethod('finalizationComplete', State.kFinalize);
    }
    retryFinalization() {
        return this.getNextStateForMethod('retryFinalization', State.kFinalize);
    }
    writeProtectManuallyEnabled() {
        return this.getNextStateForMethod('writeProtectManuallyEnabled', State.kWaitForManualWPEnable);
    }
    getLog() {
        return this.methods.resolveMethod('getLog');
    }
    setGetLogResult(log) {
        this.methods.setResult('getLog', { log: log, error: RmadErrorCode.kOk });
    }
    saveLog() {
        return this.methods.resolveMethod('saveLog');
    }
    setSaveLogResult(savePath) {
        this.methods.setResult('saveLog', { savePath: savePath, error: RmadErrorCode.kOk });
    }
    getPowerwashRequired() {
        return this.methods.resolveMethod('getPowerwashRequired');
    }
    setGetPowerwashRequiredResult(powerwashRequired) {
        this.methods.setResult('getPowerwashRequired', { powerwashRequired: powerwashRequired, error: RmadErrorCode.kOk });
    }
    launchDiagnostics() {
        console.log('(Fake) Launching diagnostics...');
    }
    /**
     * The fake does not use the status list parameter, the fake data is never
     * updated.
     */
    endRma() {
        return this.getNextStateForMethod('endRma', State.kRepairComplete);
    }
    criticalErrorExitToLogin() {
        return this.methods.resolveMethodWithDelay('criticalErrorExitToLogin', this.resolveMethodDelayMs);
    }
    criticalErrorReboot() {
        return this.methods.resolveMethodWithDelay('criticalErrorReboot', this.resolveMethodDelayMs);
    }
    shutDownAfterHardwareError() {
        console.log('(Fake) Shutting down...');
    }
    get3pDiagnosticsProvider() {
        return this.methods.resolveMethodWithDelay('get3pDiagnosticsProvider', this.resolveMethodDelayMs);
    }
    setGet3pDiagnosticsProviderResult(provider) {
        this.methods.setResult('get3pDiagnosticsProvider', { provider });
    }
    getInstallable3pDiagnosticsAppPath() {
        return this.methods.resolveMethod('getInstallable3pDiagnosticsAppPath');
    }
    setInstallable3pDiagnosticsAppPath(appPath) {
        this.methods.setResult('getInstallable3pDiagnosticsAppPath', { appPath });
    }
    installLastFound3pDiagnosticsApp() {
        return this.methods.resolveMethod('installLastFound3pDiagnosticsApp');
    }
    setInstallLastFound3pDiagnosticsApp(appInfo) {
        this.methods.setResult('installLastFound3pDiagnosticsApp', { appInfo });
    }
    completeLast3pDiagnosticsInstallation(isApproved) {
        this.lastCompleteLast3pDiagnosticsInstallationApproval = isApproved;
        return Promise.resolve();
    }
    getLastCompleteLast3pDiagnosticsInstallationApproval() {
        return this.lastCompleteLast3pDiagnosticsInstallationApproval;
    }
    show3pDiagnosticsApp() {
        this.wasShow3pDiagnosticsAppCalled = true;
        return this.methods.resolveMethod('show3pDiagnosticsApp');
    }
    setShow3pDiagnosticsAppResult(result) {
        this.methods.setResult('show3pDiagnosticsApp', { result });
    }
    /**
     * Implements ShimlessRmaServiceInterface.ObserveError.
     */
    observeError(remote) {
        this.observables.observe('ErrorObserver_onError', (error) => {
            remote.onError(error);
        });
    }
    /**
     * Implements ShimlessRmaServiceInterface.ObserveOsUpdate.
     */
    observeOsUpdateProgress(remote) {
        this.observables.observe('OsUpdateObserver_onOsUpdateProgressUpdated', (operation, progress, errorCode) => {
            remote.onOsUpdateProgressUpdated(operation, progress, errorCode);
        });
    }
    /**
     * Implements ShimlessRmaServiceInterface.ObserveRoFirmwareUpdateProgress.
     */
    observeRoFirmwareUpdateProgress(remote) {
        this.observables.observe('UpdateRoFirmwareObserver_onUpdateRoFirmwareStatusChanged', (status) => {
            remote.onUpdateRoFirmwareStatusChanged(status);
        });
        if (this.automaticallyTriggerUpdateRoFirmwareObservation) {
            this.triggerUpdateRoFirmwareObserver(UpdateRoFirmwareStatus.kWaitUsb, 0);
            this.triggerUpdateRoFirmwareObserver(UpdateRoFirmwareStatus.kUpdating, 1000);
            this.triggerUpdateRoFirmwareObserver(UpdateRoFirmwareStatus.kRebooting, 2000);
            this.triggerUpdateRoFirmwareObserver(UpdateRoFirmwareStatus.kComplete, 3000);
        }
    }
    /**
     * Trigger update ro firmware observations when an observer is added.
     */
    enableAautomaticallyTriggerUpdateRoFirmwareObservation() {
        this.automaticallyTriggerUpdateRoFirmwareObservation = true;
    }
    /**
     * Implements ShimlessRmaServiceInterface.ObserveCalibration.
     */
    observeCalibrationProgress(remote) {
        this.observables.observe('CalibrationObserver_onCalibrationUpdated', (componentStatus) => {
            remote.onCalibrationUpdated(componentStatus);
        });
        this.observables.observe('CalibrationObserver_onCalibrationStepComplete', (status) => {
            remote.onCalibrationStepComplete(status);
        });
        if (this.automaticallyTriggerCalibrationObservation) {
            this.triggerCalibrationObserver({
                component: ComponentType.kBaseAccelerometer,
                status: CalibrationStatus.kCalibrationWaiting,
                progress: 0.0,
            }, 1000);
            this.triggerCalibrationObserver({
                component: ComponentType.kBaseAccelerometer,
                status: CalibrationStatus.kCalibrationInProgress,
                progress: 0.2,
            }, 2000);
            this.triggerCalibrationObserver({
                component: ComponentType.kBaseAccelerometer,
                status: CalibrationStatus.kCalibrationInProgress,
                progress: 0.4,
            }, 3000);
            this.triggerCalibrationObserver({
                component: ComponentType.kBaseAccelerometer,
                status: CalibrationStatus.kCalibrationInProgress,
                progress: 0.6,
            }, 4000);
            this.triggerCalibrationObserver({
                component: ComponentType.kBaseAccelerometer,
                status: CalibrationStatus.kCalibrationInProgress,
                progress: 0.8,
            }, 5000);
            this.triggerCalibrationObserver({
                component: ComponentType.kLidAccelerometer,
                status: CalibrationStatus.kCalibrationWaiting,
                progress: 0.0,
            }, 6000);
            this.triggerCalibrationObserver({
                component: ComponentType.kBaseAccelerometer,
                status: CalibrationStatus.kCalibrationComplete,
                progress: 0.5,
            }, 7000);
            this.triggerCalibrationObserver({
                component: ComponentType.kBaseAccelerometer,
                status: CalibrationStatus.kCalibrationFailed,
                progress: 1.0,
            }, 8000);
            this.triggerCalibrationObserver({
                component: ComponentType.kBaseGyroscope,
                status: CalibrationStatus.kCalibrationSkip,
                progress: 1.0,
            }, 9000);
            this.triggerCalibrationOverallObserver(CalibrationOverallStatus.kCalibrationOverallComplete, 10000);
        }
    }
    /**
     * Implements ShimlessRmaServiceInterface.ObserveProvisioning.
     */
    observeProvisioningProgress(remote) {
        this.observables.observe('ProvisioningObserver_onProvisioningUpdated', (status, progress, error) => {
            remote.onProvisioningUpdated(status, progress, error);
        });
        if (this.automaticallyTriggerProvisioningObservation) {
            // Fake progress over 4 seconds.
            this.triggerProvisioningObserver(ProvisioningStatus.kInProgress, 0.25, ProvisioningError.kUnknown, 1000);
            this.triggerProvisioningObserver(ProvisioningStatus.kInProgress, 0.5, ProvisioningError.kUnknown, 2000);
            this.triggerProvisioningObserver(ProvisioningStatus.kInProgress, 0.75, ProvisioningError.kUnknown, 3000);
            this.triggerProvisioningObserver(ProvisioningStatus.kComplete, 1.0, ProvisioningError.kUnknown, 4000);
        }
    }
    /**
     * Trigger provisioning observations when an observer is added.
     */
    enableAutomaticallyTriggerProvisioningObservation() {
        this.automaticallyTriggerProvisioningObservation = true;
    }
    /**
     * Trigger calibration observations when an observer is added.
     */
    enableAutomaticallyTriggerCalibrationObservation() {
        this.automaticallyTriggerCalibrationObservation = true;
    }
    /**
     * Trigger OS update observations when an OS update is started.
     */
    enableAutomaticallyTriggerOsUpdateObservation() {
        this.automaticallyTriggerOsUpdateObservation = true;
    }
    /**
     * Implements ShimlessRmaServiceInterface.ObserveHardwareWriteProtectionState.
     */
    observeHardwareWriteProtectionState(remote) {
        this.observables.observe('HardwareWriteProtectionStateObserver_onHardwareWriteProtectionStateChanged', (enabled) => {
            remote.onHardwareWriteProtectionStateChanged(enabled);
        });
        if (this.states &&
            this.automaticallyTriggerDisableWriteProtectionObservation) {
            assert(this.stateIndex < this.states.length);
            this.triggerHardwareWriteProtectionObserver(this.states[this.stateIndex].state === State.kWaitForManualWPEnable, 3000);
        }
    }
    /**
     * Trigger a disable write protection observation when an observer is added.
     */
    enableAutomaticallyTriggerDisableWriteProtectionObservation() {
        this.automaticallyTriggerDisableWriteProtectionObservation = true;
    }
    /**
     * Implements ShimlessRmaServiceInterface.ObservePowerCableState.
     */
    observePowerCableState(remote) {
        this.observables.observe('PowerCableStateObserver_onPowerCableStateChanged', (pluggedIn) => {
            remote.onPowerCableStateChanged(pluggedIn);
        });
        if (this.automaticallyTriggerPowerCableStateObservation) {
            this.triggerPowerCableObserver(false, 1000);
            this.triggerPowerCableObserver(true, 10000);
            this.triggerPowerCableObserver(false, 15000);
        }
    }
    /**
     * Trigger a disable power cable state observations when an observer is added.
     */
    enableAutomaticallyTriggerPowerCableStateObservation() {
        this.automaticallyTriggerPowerCableStateObservation = true;
    }
    /**
     * Implements ShimlessRmaServiceInterface.ObserveExternalDiskState.
     */
    observeExternalDiskState(remote) {
        this.observables.observe('ExternalDiskStateObserver_onExternalDiskStateChanged', (detected) => {
            remote.onExternalDiskStateChanged(detected);
        });
        this.triggerExternalDiskObserver(true, 10000);
        this.triggerExternalDiskObserver(false, 15000);
    }
    /**
     * Implements ShimlessRmaServiceInterface.ObserveHardwareVerificationStatus.
     */
    observeHardwareVerificationStatus(remote) {
        this.observables.observe('HardwareVerificationStatusObserver_onHardwareVerificationResult', (isCompliant, errorMessage) => {
            remote.onHardwareVerificationResult(isCompliant, errorMessage);
        });
        if (this.automaticallyTriggerHardwareVerificationStatusObservation) {
            this.triggerHardwareVerificationStatusObserver(true, '', 3000);
        }
    }
    /**
     * Trigger a hardware verification observation when an observer is added.
     */
    enableAutomaticallyTriggerHardwareVerificationStatusObservation() {
        this.automaticallyTriggerHardwareVerificationStatusObservation = true;
    }
    /**
     * Implements ShimlessRmaServiceInterface.ObserveFinalizationStatus.
     */
    observeFinalizationStatus(remote) {
        this.observables.observe('FinalizationObserver_onFinalizationUpdated', (status, progress, error) => {
            remote.onFinalizationUpdated(status, progress, error);
        });
        if (this.automaticallyTriggerFinalizationObservation) {
            this.triggerFinalizationObserver(FinalizationStatus.kInProgress, 0.25, FinalizationError.kUnknown, 1000);
            this.triggerFinalizationObserver(FinalizationStatus.kInProgress, 0.75, FinalizationError.kUnknown, 2000);
            this.triggerFinalizationObserver(FinalizationStatus.kComplete, 1.0, FinalizationError.kUnknown, 3000);
        }
    }
    /**
     * Trigger a finalization progress observation when an observer is added.
     */
    enableAutomaticallyTriggerFinalizationObservation() {
        this.automaticallyTriggerFinalizationObservation = true;
    }
    /**
     * Causes the error observer to fire after a delay.
     */
    triggerErrorObserver(error, delayMs) {
        return this.triggerObserverAfterMs('ErrorObserver_onError', error, delayMs);
    }
    /**
     * Causes the OS update observer to fire after a delay.
     */
    triggerOsUpdateObserver(operation, progress, error, delayMs) {
        return this.triggerObserverAfterMs('OsUpdateObserver_onOsUpdateProgressUpdated', [operation, progress, error], delayMs);
    }
    /**
     * Causes the update RO firmware observer to fire after a delay.
     */
    triggerUpdateRoFirmwareObserver(status, delayMs) {
        return this.triggerObserverAfterMs('UpdateRoFirmwareObserver_onUpdateRoFirmwareStatusChanged', status, delayMs);
    }
    /**
     * Causes the calibration observer to fire after a delay.
     */
    triggerCalibrationObserver(componentStatus, delayMs) {
        return this.triggerObserverAfterMs('CalibrationObserver_onCalibrationUpdated', componentStatus, delayMs);
    }
    /**
     * Causes the calibration overall observer to fire after a delay.
     */
    triggerCalibrationOverallObserver(status, delayMs) {
        return this.triggerObserverAfterMs('CalibrationObserver_onCalibrationStepComplete', status, delayMs);
    }
    /**
     * Causes the provisioning observer to fire after a delay.
     */
    triggerProvisioningObserver(status, progress, error, delayMs) {
        return this.triggerObserverAfterMs('ProvisioningObserver_onProvisioningUpdated', [status, progress, error], delayMs);
    }
    /**
     * Causes the hardware write protection observer to fire after a delay.
     */
    triggerHardwareWriteProtectionObserver(enabled, delayMs) {
        return this.triggerObserverAfterMs('HardwareWriteProtectionStateObserver_onHardwareWriteProtectionStateChanged', enabled, delayMs);
    }
    /**
     * Causes the power cable observer to fire after a delay.
     */
    triggerPowerCableObserver(pluggedIn, delayMs) {
        return this.triggerObserverAfterMs('PowerCableStateObserver_onPowerCableStateChanged', pluggedIn, delayMs);
    }
    /**
     * Causes the external disk observer to fire after a delay.
     */
    triggerExternalDiskObserver(detected, delayMs) {
        return this.triggerObserverAfterMs('ExternalDiskStateObserver_onExternalDiskStateChanged', detected, delayMs);
    }
    /**
     * Causes the hardware verification observer to fire after a delay.
     */
    triggerHardwareVerificationStatusObserver(isCompliant, errorMessage, delayMs) {
        return this.triggerObserverAfterMs('HardwareVerificationStatusObserver_onHardwareVerificationResult', [isCompliant, errorMessage], delayMs);
    }
    /**
     * Causes the finalization observer to fire after a delay.
     */
    triggerFinalizationObserver(status, progress, error, delayMs) {
        return this.triggerObserverAfterMs('FinalizationObserver_onFinalizationUpdated', [status, progress, error], delayMs);
    }
    /**
     * Causes an observer to fire after a delay.
     */
    triggerObserverAfterMs(method, result, delayMs) {
        const setDataTriggerAndResolve = function (service, resolve) {
            service.observables.setObservableData(method, [result]);
            service.observables.trigger(method);
            resolve();
        };
        return new Promise((resolve) => {
            if (delayMs === 0) {
                setDataTriggerAndResolve(this, resolve);
            }
            else {
                setTimeout(() => {
                    setDataTriggerAndResolve(this, resolve);
                }, delayMs);
            }
        });
    }
    /**
     * Disables all observers and resets provider to its initial state.
     */
    reset() {
        this.registerMethods();
        this.registerObservables();
        this.states = [];
        this.stateIndex = 0;
        // This state data is more complicated so the behavior of the get/set
        // methods is a little different than other fakes in that they don't return
        // undefined by default.
        this.components = [];
        this.setGetLogResult('');
        this.setSaveLogResult({ 'path': '' });
        this.lastCompleteLast3pDiagnosticsInstallationApproval = null;
        this.setGet3pDiagnosticsProviderResult(null);
    }
    /**
     * Setup method resolvers.
     */
    registerMethods() {
        this.methods = new FakeMethodResolver();
        this.methods.register('getCurrentState');
        this.methods.register('transitionPreviousState');
        this.methods.register('abortRma');
        this.methods.register('canExit');
        this.methods.register('canGoBack');
        this.methods.register('beginFinalization');
        this.methods.register('trackConfiguredNetworks');
        this.methods.register('networkSelectionComplete');
        this.methods.register('getCurrentOsVersion');
        this.methods.register('checkForOsUpdates');
        this.methods.register('updateOs');
        this.methods.register('updateOsSkipped');
        this.methods.register('setSameOwner');
        this.methods.register('setDifferentOwner');
        this.methods.register('setWipeDevice');
        this.methods.register('chooseManuallyDisableWriteProtect');
        this.methods.register('chooseRsuDisableWriteProtect');
        this.methods.register('getRsuDisableWriteProtectChallenge');
        this.methods.register('getRsuDisableWriteProtectHwid');
        this.methods.register('getRsuDisableWriteProtectChallengeQrCode');
        this.methods.register('setRsuDisableWriteProtectCode');
        this.methods.register('writeProtectManuallyDisabled');
        this.methods.register('getWriteProtectDisableCompleteAction');
        this.methods.register('confirmManualWpDisableComplete');
        this.methods.register('shutdownForRestock');
        this.methods.register('continueFinalizationAfterRestock');
        this.methods.register('getComponentList');
        this.methods.register('setComponentList');
        this.methods.register('reworkMainboard');
        this.methods.register('roFirmwareUpdateComplete');
        this.methods.register('getRegionList');
        this.methods.register('getSkuList');
        this.methods.register('getCustomLabelList');
        this.methods.register('getSkuDescriptionList');
        this.methods.register('getOriginalSerialNumber');
        this.methods.register('getOriginalRegion');
        this.methods.register('getOriginalSku');
        this.methods.register('getOriginalCustomLabel');
        this.methods.register('getOriginalDramPartNumber');
        this.methods.register('getOriginalFeatureLevel');
        this.methods.register('setDeviceInformation');
        this.methods.register('getCalibrationComponentList');
        this.methods.register('getCalibrationSetupInstructions');
        this.methods.register('startCalibration');
        this.methods.register('runCalibrationStep');
        this.methods.register('continueCalibration');
        this.methods.register('calibrationComplete');
        this.methods.register('retryProvisioning');
        this.methods.register('provisioningComplete');
        this.methods.register('retryFinalization');
        this.methods.register('finalizationComplete');
        this.methods.register('writeProtectManuallyEnabled');
        this.methods.register('getLog');
        this.methods.register('saveLog');
        this.methods.register('getPowerwashRequired');
        this.methods.register('endRma');
        // Critical error handling
        this.methods.register('criticalErrorExitToLogin');
        this.methods.register('criticalErrorReboot');
        this.methods.register('shutDownAfterHardwareError');
        this.methods.register('get3pDiagnosticsProvider');
        this.methods.register('getInstallable3pDiagnosticsAppPath');
        this.methods.register('installLastFound3pDiagnosticsApp');
        this.methods.register('show3pDiagnosticsApp');
    }
    /**
     * Setup observables.
     */
    registerObservables() {
        if (this.observables) {
            this.observables.stopAllTriggerIntervals();
        }
        this.observables = new FakeObservables();
        this.observables.register('ErrorObserver_onError');
        this.observables.register('OsUpdateObserver_onOsUpdateProgressUpdated');
        this.observables.register('UpdateRoFirmwareObserver_onUpdateRoFirmwareStatusChanged');
        this.observables.register('CalibrationObserver_onCalibrationUpdated');
        this.observables.register('CalibrationObserver_onCalibrationStepComplete');
        this.observables.register('ProvisioningObserver_onProvisioningUpdated');
        this.observables.register('HardwareWriteProtectionStateObserver_onHardwareWriteProtectionStateChanged');
        this.observables.register('PowerCableStateObserver_onPowerCableStateChanged');
        this.observables.register('ExternalDiskStateObserver_onExternalDiskStateChanged');
        this.observables.register('HardwareVerificationStatusObserver_onHardwareVerificationResult');
        this.observables.register('FinalizationObserver_onFinalizationUpdated');
    }
    getNextStateForMethod(method, expectedState) {
        if (this.states.length === 0) {
            this.setFakeStateForMethod(method, State.kUnknown, false, false, RmadErrorCode.kRmaNotRequired);
        }
        else if (this.stateIndex >= this.states.length - 1) {
            // It should not be possible for stateIndex to be out of range unless
            // there is a bug in the fake.
            assert(this.stateIndex < this.states.length);
            const state = this.states[this.stateIndex];
            this.setFakeStateForMethod(method, state.state, state.canExit, state.canGoBack, RmadErrorCode.kTransitionFailed);
        }
        else if (this.states[this.stateIndex].state !== expectedState) {
            // Error: Called in wrong state.
            const state = this.states[this.stateIndex];
            this.setFakeStateForMethod(method, state.state, state.canExit, state.canGoBack, RmadErrorCode.kRequestInvalid);
        }
        else {
            // Success.
            this.stateIndex++;
            if (method === 'chooseManuallyDisableWriteProtect') {
                // A special case so that choosing manual WP disable sends you to the
                // appropriate page in the fake app.
                this.stateIndex++;
            }
            const state = this.states[this.stateIndex];
            this.setFakeStateForMethod(method, state.state, state.canExit, state.canGoBack, state.error);
        }
        return this.methods.resolveMethodWithDelay(method, this.resolveMethodDelayMs);
    }
    /**
     * Sets the value that will be returned when calling getCurrent().
     */
    setFakeCurrentState(state, canExit, canGoBack, error) {
        this.setFakeStateForMethod('getCurrentState', state, canExit, canGoBack, error);
    }
    /**
     * Sets the value that will be returned when calling
     * transitionPreviousState().
     */
    setFakePrevState(state, canExit, canGoBack, error) {
        this.setFakeStateForMethod('transitionPreviousState', state, canExit, canGoBack, error);
    }
    /**
     * Sets the value that will be returned when calling state specific functions
     * that update state. e.g. setSameOwner()
     */
    setFakeStateForMethod(method, state, canExit, canGoBack, error) {
        this.methods.setResult(method, {
            stateResult: {
                state: state,
                canExit: canExit,
                canGoBack: canGoBack,
                error: error,
            },
        });
    }
}
