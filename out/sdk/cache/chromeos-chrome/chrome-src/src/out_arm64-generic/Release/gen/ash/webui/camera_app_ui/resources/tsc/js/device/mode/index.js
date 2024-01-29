// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertExists, assertInstanceof, } from '../../assert.js';
import * as expert from '../../expert.js';
import { DeviceOperator } from '../../mojo/device_operator.js';
import { CaptureIntent } from '../../mojo/type.js';
import * as state from '../../state.js';
import { Mode, Resolution, } from '../../type.js';
import { getFpsRangeFromConstraints } from '../../util.js';
import { StreamManagerChrome } from '../stream_manager_chrome.js';
import { PhotoFactory, } from './photo.js';
import { PortraitFactory } from './portrait.js';
import { ScanFactory, } from './scan.js';
import { VideoFactory, } from './video.js';
export { getDefaultScanCorners } from './scan.js';
export { setAvc1Parameters, Video } from './video.js';
/**
 * Mode controller managing capture sequence of different camera mode.
 */
export class Modes {
    constructor() {
        /**
         * Capture controller of current camera mode.
         */
        this.current = null;
        /**
         * Parameters to create mode capture controller.
         */
        this.captureParams = null;
        this.handler = null;
        // Workaround for b/184089334 on PTZ camera to use preview frame as photo
        // result.
        function checkSupportPTZForPhotoMode(captureResolution, previewResolution) {
            return captureResolution.equals(previewResolution);
        }
        /**
         * Prepares the device for the specific `resolution` and `captureIntent`.
         */
        async function prepareDeviceForPhoto(constraints, resolution, captureIntent) {
            const deviceOperator = DeviceOperator.getInstance();
            if (deviceOperator === null) {
                return;
            }
            const deviceId = constraints.deviceId;
            await deviceOperator.setCaptureIntent(deviceId, captureIntent);
            await deviceOperator.setStillCaptureResolution(deviceId, resolution);
        }
        this.allModes = {
            [Mode.VIDEO]: {
                getCaptureFactory: () => {
                    const params = this.getCaptureParams();
                    return new VideoFactory(params.constraints, params.captureResolution, params.videoSnapshotResolution, assertExists(this.handler));
                },
                isSupported: () => Promise.resolve(true),
                isSupportPTZ: () => true,
                prepareDevice: async (constraints) => {
                    const deviceOperator = DeviceOperator.getInstance();
                    if (deviceOperator === null) {
                        return;
                    }
                    const deviceId = constraints.deviceId;
                    await deviceOperator.setCaptureIntent(deviceId, CaptureIntent.kVideoRecord);
                    await deviceOperator.setMultipleStreamsEnabled(deviceId, expert.isEnabled(expert.ExpertOption.ENABLE_MULTISTREAM_RECORDING));
                    if (expert.isEnabled(expert.ExpertOption.ENABLE_MULTISTREAM_RECORDING_CHROME)) {
                        const captureResolution = assertExists(this.getCaptureParams().captureResolution);
                        await StreamManagerChrome.getInstance().prepare({
                            ...constraints,
                            video: {
                                ...constraints.video,
                                width: captureResolution.width,
                                height: captureResolution.height,
                            },
                        });
                    }
                    if (await deviceOperator.isBlobVideoSnapshotEnabled(deviceId)) {
                        await deviceOperator.setStillCaptureResolution(deviceId, assertExists(this.getCaptureParams().videoSnapshotResolution));
                    }
                    // TODO(wtlee): To set the fps range to the default value, we should
                    // remove the frameRate from constraints instead of using incomplete
                    // range.
                    const { minFps, maxFps } = getFpsRangeFromConstraints(constraints.video?.frameRate);
                    await deviceOperator.setFpsRange(deviceId, minFps, maxFps);
                },
                fallbackMode: Mode.PHOTO,
            },
            [Mode.PHOTO]: {
                getCaptureFactory: () => {
                    const params = this.getCaptureParams();
                    return new PhotoFactory(params.constraints, params.captureResolution, assertExists(this.handler));
                },
                isSupported: () => Promise.resolve(true),
                isSupportPTZ: checkSupportPTZForPhotoMode,
                prepareDevice: async (constraints, resolution) => prepareDeviceForPhoto(constraints, resolution, CaptureIntent.kStillCapture),
                fallbackMode: Mode.SCAN,
            },
            [Mode.PORTRAIT]: {
                getCaptureFactory: () => {
                    const params = this.getCaptureParams();
                    return new PortraitFactory(params.constraints, params.captureResolution, assertExists(this.handler));
                },
                isSupported: async (deviceId) => {
                    if (deviceId === null) {
                        return false;
                    }
                    const deviceOperator = DeviceOperator.getInstance();
                    if (deviceOperator === null) {
                        return false;
                    }
                    return deviceOperator.isPortraitModeSupported(deviceId);
                },
                isSupportPTZ: checkSupportPTZForPhotoMode,
                prepareDevice: async (constraints, resolution) => prepareDeviceForPhoto(constraints, resolution, CaptureIntent.kPortraitCapture),
                fallbackMode: Mode.PHOTO,
            },
            [Mode.SCAN]: {
                getCaptureFactory: () => {
                    const params = this.getCaptureParams();
                    return new ScanFactory(params.constraints, params.captureResolution, assertExists(this.handler));
                },
                isSupported: async () => Promise.resolve(true),
                isSupportPTZ: checkSupportPTZForPhotoMode,
                prepareDevice: async (constraints, resolution) => prepareDeviceForPhoto(constraints, resolution, CaptureIntent.kStillCapture),
                fallbackMode: Mode.PHOTO,
            },
        };
        expert.addObserver(expert.ExpertOption.SAVE_METADATA, () => this.updateSaveMetadata());
    }
    initialize(handler) {
        this.handler = handler;
    }
    getCaptureParams() {
        assert(this.captureParams !== null);
        return this.captureParams;
    }
    /**
     * Gets all mode candidates. Desired trying sequence of candidate modes is
     * reflected in the order of the returned array.
     */
    async getModeCandidates(deviceId, startingMode) {
        const tried = new Set();
        const results = [];
        let mode = startingMode;
        while (!tried.has(mode)) {
            tried.add(mode);
            if (await this.isSupported(mode, deviceId)) {
                results.push(mode);
            }
            mode = this.allModes[mode].fallbackMode;
        }
        return results;
    }
    /**
     * Gets factory to create `mode` capture object.
     */
    getModeFactory(mode) {
        return this.allModes[mode].getCaptureFactory();
    }
    /**
     * @param mode Mode for the capture.
     * @param constraints Constraints for preview stream.
     * @param captureResolution Capture resolution. May be null on device not
     *     support of setting resolution.
     * @param videoSnapshotResolution Video snapshot resolution. May be null on
     *     device not support of setting resolution.
     */
    setCaptureParams(mode, constraints, captureResolution, videoSnapshotResolution) {
        this.captureParams =
            { mode, constraints, captureResolution, videoSnapshotResolution };
    }
    /**
     * Makes video capture device prepared for capturing in this mode.
     */
    async prepareDevice() {
        if (state.get(state.State.USE_FAKE_CAMERA)) {
            return;
        }
        const { mode, captureResolution, constraints } = this.getCaptureParams();
        return this.allModes[mode].prepareDevice(constraints, assertInstanceof(captureResolution, Resolution));
    }
    async isSupported(mode, deviceId) {
        return this.allModes[mode].isSupported(deviceId);
    }
    isSupportPTZ(mode, captureResolution, previewResolution) {
        return this.allModes[mode].isSupportPTZ(captureResolution, previewResolution);
    }
    /**
     * Creates and updates current mode object.
     *
     * @param factory The factory ready for producing mode capture object.
     */
    async updateMode(factory) {
        if (this.current !== null) {
            await this.current.clear();
            this.disableSaveMetadata();
        }
        this.current = factory.produce();
        await this.updateSaveMetadata();
    }
    /**
     * Clears everything when mode is not needed anymore.
     */
    async clear() {
        if (this.current !== null) {
            await this.current.clear();
            this.disableSaveMetadata();
        }
        this.captureParams = null;
        this.current = null;
    }
    /**
     * Checks whether to save image metadata or not.
     */
    async updateSaveMetadata() {
        if (expert.isEnabled(expert.ExpertOption.SAVE_METADATA)) {
            await this.enableSaveMetadata();
        }
        else {
            this.disableSaveMetadata();
        }
    }
    /**
     * Enables save metadata of subsequent photos in the current mode.
     */
    async enableSaveMetadata() {
        if (this.current !== null) {
            await this.current.addMetadataObserver();
        }
    }
    /**
     * Disables save metadata of subsequent photos in the current mode.
     */
    disableSaveMetadata() {
        if (this.current !== null) {
            this.current.removeMetadataObserver();
        }
    }
}
