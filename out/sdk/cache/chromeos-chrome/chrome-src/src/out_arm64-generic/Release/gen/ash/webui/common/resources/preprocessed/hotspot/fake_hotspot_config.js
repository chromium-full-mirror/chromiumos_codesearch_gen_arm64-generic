// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { FakeMethodResolver } from '../fake_method_resolver.js';
import { HotspotControlResult, HotspotState, SetHotspotConfigResult } from './cros_hotspot_config.mojom-webui.js';
/**
 * @fileoverview
 * Implements a fake version of the CrosHotspotConfig mojo interface.
 */
export class FakeHotspotConfig {
    constructor() {
        this.methods_ = new FakeMethodResolver();
        this.hotspotInfo_ = null;
        this.observers_ = [];
        this.stateObservers_ = [];
        this.setHotspotConfigResult_ = null;
        this.enableHotspotResult_ = null;
        this.disableHotspotResult_ = null;
        this.registerMethods();
    }
    // Implements CrosHotspotConfigInterface.getHotspotInfo().
    getHotspotInfo() {
        this.methods_.setResult('getHotspotInfo', { hotspotInfo: this.hotspotInfo_ });
        return this.methods_.resolveMethod('getHotspotInfo');
    }
    // Set the value that will be returned when calling getHotspotInfo() and
    // notify observers.
    setFakeHotspotInfo(hotspotInfo) {
        this.hotspotInfo_ = hotspotInfo;
        this.notifyHotspotInfoUpdated_();
    }
    // Update the hotspot state value and notify observers.
    setFakeHotspotState(state) {
        assert(this.hotspotInfo_);
        this.hotspotInfo_.state = state;
        this.hotspotInfo_ = { ...this.hotspotInfo_ };
        this.notifyHotspotInfoUpdated_();
    }
    // Update the hotspot allow status and notify observers.
    setFakeHotspotAllowStatus(allowStatus) {
        assert(this.hotspotInfo_);
        this.hotspotInfo_.allowStatus = allowStatus;
        this.hotspotInfo_ = { ...this.hotspotInfo_ };
        this.notifyHotspotInfoUpdated_();
    }
    // Update the hotspot connected client count and notify observers.
    setFakeHotspotActiveClientCount(clientCount) {
        assert(this.hotspotInfo_);
        this.hotspotInfo_.clientCount = clientCount;
        this.hotspotInfo_ = { ...this.hotspotInfo_ };
        this.notifyHotspotInfoUpdated_();
    }
    // Update the hotspot config and notify observers.
    setFakeHotspotConfig(config) {
        assert(this.hotspotInfo_);
        this.hotspotInfo_.config = config;
        this.hotspotInfo_ = { ...this.hotspotInfo_ };
        this.notifyHotspotInfoUpdated_();
    }
    // Set the value that will be returned when calling enableHotspot().
    setFakeEnableHotspotResult(result) {
        this.enableHotspotResult_ = result;
        this.methods_.setResult('enableHotspot', { result: this.enableHotspotResult_ });
    }
    // Implements CrosHotspotConfigInterface.enableHotspot().
    enableHotspot() {
        assert(this.hotspotInfo_);
        if (this.hotspotInfo_.state === HotspotState.kEnabled) {
            return this.methods_.resolveMethod('enableHotspot');
        }
        this.setFakeHotspotState(HotspotState.kEnabling);
        if (this.enableHotspotResult_ === HotspotControlResult.kSuccess) {
            this.setFakeHotspotState(HotspotState.kEnabled);
        }
        else {
            this.setFakeHotspotState(HotspotState.kDisabled);
        }
        return this.methods_.resolveMethod('enableHotspot');
    }
    // Set the value that will be returned when calling disableHotspot().
    setFakeDisableHotspotResult(result) {
        this.disableHotspotResult_ = result;
        this.methods_.setResult('disableHotspot', { result: result });
    }
    // Implements CrosHotspotConfigInterface.disableHotspot().
    disableHotspot() {
        assert(this.hotspotInfo_);
        if (this.hotspotInfo_.state === HotspotState.kDisabled) {
            return this.methods_.resolveMethod('disableHotspot');
        }
        this.setFakeHotspotState(HotspotState.kDisabling);
        if (this.disableHotspotResult_ === HotspotControlResult.kSuccess) {
            this.setFakeHotspotState(HotspotState.kDisabled);
        }
        else {
            this.setFakeHotspotState(HotspotState.kEnabled);
        }
        return this.methods_.resolveMethod('disableHotspot');
    }
    // Set the value that will be returned when calling setHotspotConfig().
    setFakeSetHotspotConfigResult(result) {
        this.setHotspotConfigResult_ = result;
        this.methods_.setResult('setHotspotConfig', { result: this.setHotspotConfigResult_ });
    }
    // Implements CrosHotspotConfigInterface.setHotspotConfig().
    setHotspotConfig(hotspotConfig) {
        if (this.setHotspotConfigResult_ === SetHotspotConfigResult.kSuccess) {
            this.setFakeHotspotConfig(hotspotConfig);
        }
        return this.methods_.resolveMethod('setHotspotConfig');
    }
    // Implements CrosHotspotConfigInterface.addObserver().
    addObserver(remote) {
        this.observers_.push(remote);
    }
    // Implements CrosHotspotConfigInterface.observeEnabledStateChanges()
    observeEnabledStateChanges(remote) {
        this.stateObservers_.push(remote);
    }
    // Setup method resolvers.
    registerMethods() {
        this.methods_.register('getHotspotInfo');
        this.methods_.register('enableHotspot');
        this.methods_.register('disableHotspot');
        this.methods_.register('setHotspotConfig');
    }
    // Disables all observers and resets config to its initial state.
    reset() {
        this.methods_ = new FakeMethodResolver();
        this.registerMethods();
        this.hotspotInfo_ = null;
        this.setHotspotConfigResult_ = null;
        this.enableHotspotResult_ = null;
        this.disableHotspotResult_ = null;
        this.observers_ = [];
    }
    notifyHotspotInfoUpdated_() {
        for (const observer of this.observers_) {
            observer.onHotspotInfoChanged();
        }
    }
}
