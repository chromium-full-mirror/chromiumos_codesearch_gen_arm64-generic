// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * Fake implementation of CrosAudioConfig for testing.
 */
import { assert } from 'chrome://resources/js/assert.js';
import { AudioDeviceType, AudioEffectState, MuteState } from '../mojom-webui/cros_audio_config.mojom-webui.js';
export const defaultFakeMicJack = {
    id: BigInt(1),
    displayName: 'Mic Jack',
    isActive: true,
    deviceType: AudioDeviceType.kInternalMic,
    noiseCancellationState: AudioEffectState.kNotSupported,
    forceRespectUiGainsState: AudioEffectState.kNotEnabled,
    hfpMicSrState: AudioEffectState.kNotSupported,
};
export const fakeSpeakerActive = {
    id: BigInt(2),
    displayName: 'Speaker',
    isActive: true,
    deviceType: AudioDeviceType.kInternalSpeaker,
    noiseCancellationState: AudioEffectState.kNotSupported,
    forceRespectUiGainsState: AudioEffectState.kNotSupported,
    hfpMicSrState: AudioEffectState.kNotSupported,
};
export const fakeMicJackInactive = {
    id: BigInt(3),
    displayName: 'Mic Jack',
    isActive: false,
    deviceType: AudioDeviceType.kInternalSpeaker,
    noiseCancellationState: AudioEffectState.kNotSupported,
    forceRespectUiGainsState: AudioEffectState.kNotSupported,
    hfpMicSrState: AudioEffectState.kNotSupported,
};
export const defaultFakeSpeaker = {
    id: BigInt(4),
    displayName: 'Speaker',
    isActive: false,
    deviceType: AudioDeviceType.kInternalSpeaker,
    noiseCancellationState: AudioEffectState.kNotSupported,
    forceRespectUiGainsState: AudioEffectState.kNotSupported,
    hfpMicSrState: AudioEffectState.kNotSupported,
};
export const fakeInternalFrontMic = {
    id: BigInt(5),
    displayName: 'FrontMic',
    isActive: true,
    deviceType: AudioDeviceType.kFrontMic,
    noiseCancellationState: AudioEffectState.kNotEnabled,
    forceRespectUiGainsState: AudioEffectState.kNotEnabled,
    hfpMicSrState: AudioEffectState.kNotSupported,
};
export const fakeBluetoothMic = {
    id: BigInt(6),
    displayName: 'Bluetooth Mic',
    isActive: false,
    deviceType: AudioDeviceType.kBluetoothNbMic,
    noiseCancellationState: AudioEffectState.kNotSupported,
    forceRespectUiGainsState: AudioEffectState.kNotEnabled,
    hfpMicSrState: AudioEffectState.kNotSupported,
};
export const fakeInternalMicActive = {
    id: BigInt(7),
    displayName: 'Internal Mic',
    isActive: true,
    deviceType: AudioDeviceType.kInternalMic,
    noiseCancellationState: AudioEffectState.kNotSupported,
    forceRespectUiGainsState: AudioEffectState.kNotEnabled,
    hfpMicSrState: AudioEffectState.kNotSupported,
};
export const defaultFakeAudioSystemProperties = {
    outputDevices: [defaultFakeSpeaker, defaultFakeMicJack],
    outputVolumePercent: 75,
    inputGainPercent: 87,
    outputMuteState: MuteState.kNotMuted,
    inputDevices: [fakeInternalFrontMic, fakeBluetoothMic],
    inputMuteState: MuteState.kNotMuted,
};
/** Creates an audio device based on provided device and isActive override. */
export function createAudioDevice(baseDevice, isActive) {
    assert(!!baseDevice);
    return ({ ...baseDevice, isActive });
}
export class FakeCrosAudioConfig {
    constructor() {
        this.audioSystemProperties = defaultFakeAudioSystemProperties;
        this.observers = [];
    }
    observeAudioSystemProperties(observer) {
        this.observers.push(observer);
        this.notifyAudioSystemPropertiesUpdated();
    }
    /**
     * Sets the active output or input device and notifies observers.
     */
    setActiveDevice(deviceId) {
        const isOutputDevice = !!(this.audioSystemProperties.outputDevices.find((device) => device.id === deviceId));
        if (isOutputDevice) {
            const devices = this.audioSystemProperties.outputDevices.map((device) => createAudioDevice(device, device.id === deviceId));
            this.audioSystemProperties.outputDevices = devices;
        }
        else {
            // Device must be an input device otherwise an invalid device was
            // provided.
            assert(this.audioSystemProperties.inputDevices.find((device) => device.id === deviceId));
            const devices = this.audioSystemProperties.inputDevices.map((device) => createAudioDevice(device, device.id === deviceId));
            this.audioSystemProperties.inputDevices = devices;
        }
        this.notifyAudioSystemPropertiesUpdated();
    }
    /**
     * Sets `audioSystemProperties` to the desired properties and notifies
     * observers.
     */
    setAudioSystemProperties(properties) {
        this.audioSystemProperties = properties;
        this.notifyAudioSystemPropertiesUpdated();
    }
    /** Handle updating active input device noise cancellation state. */
    setNoiseCancellationEnabled(enabled) {
        if (!this.audioSystemProperties.inputDevices) {
            return;
        }
        const activeIndex = this.audioSystemProperties.inputDevices.findIndex((device) => device.isActive &&
            device.noiseCancellationState !== AudioEffectState.kNotSupported);
        if (activeIndex === -1) {
            return;
        }
        const nextState = enabled ? AudioEffectState.kEnabled : AudioEffectState.kNotEnabled;
        this.audioSystemProperties.inputDevices[activeIndex]
            .noiseCancellationState = nextState;
        this.notifyAudioSystemPropertiesUpdated();
    }
    /** Handle updating active input device force respect ui gains state. */
    setForceRespectUiGainsEnabled(enabled) {
        if (!this.audioSystemProperties.inputDevices) {
            return;
        }
        const activeIndex = this.audioSystemProperties.inputDevices.findIndex((device) => device.isActive);
        if (activeIndex === -1) {
            return;
        }
        const nextState = enabled ? AudioEffectState.kEnabled : AudioEffectState.kNotEnabled;
        this.audioSystemProperties.inputDevices[activeIndex]
            .forceRespectUiGainsState = nextState;
        this.notifyAudioSystemPropertiesUpdated();
    }
    /** Handle updating hfp mic sr state. */
    setHfpMicSrEnabled(enabled) {
        if (!this.audioSystemProperties.inputDevices) {
            return;
        }
        const activeIndex = this.audioSystemProperties.inputDevices.findIndex((device) => device.isActive &&
            device.hfpMicSrState !== AudioEffectState.kNotSupported);
        if (activeIndex === -1) {
            return;
        }
        const nextState = enabled ? AudioEffectState.kEnabled : AudioEffectState.kNotEnabled;
        this.audioSystemProperties.inputDevices[activeIndex].hfpMicSrState =
            nextState;
        this.notifyAudioSystemPropertiesUpdated();
    }
    /**
     * Sets the mute state based on provided value.
     */
    setOutputMuted(muted) {
        this.audioSystemProperties.outputMuteState =
            muted ? MuteState.kMutedByUser : MuteState.kNotMuted;
        this.notifyAudioSystemPropertiesUpdated();
    }
    /**
     * Sets the input device mute state to `kMutedByUser` when true and
     * `kNotMuted` when false.
     */
    setInputMuted(muted) {
        const muteState = muted ? MuteState.kMutedByUser : MuteState.kNotMuted;
        this.audioSystemProperties.inputMuteState = muteState;
        this.notifyAudioSystemPropertiesUpdated();
    }
    /**
     * Sets the `inputGainPercent` to the desired volume and notifies
     * observers.
     */
    setInputGainPercent(gain) {
        assert(gain >= 0 && gain <= 100);
        this.audioSystemProperties.inputGainPercent = Math.round(gain);
        this.notifyAudioSystemPropertiesUpdated();
    }
    /**
     * Sets the `outputVolumePercent` to the desired volume and notifies
     * observers.
     */
    setOutputVolumePercent(volume) {
        this.audioSystemProperties.outputVolumePercent = Math.round(volume);
        this.notifyAudioSystemPropertiesUpdated();
    }
    /** Notifies the observer list that `audioSystemProperties` has changed. */
    notifyAudioSystemPropertiesUpdated() {
        this.observers.forEach((observer) => {
            observer.onPropertiesUpdated(this.audioSystemProperties);
        });
    }
}
