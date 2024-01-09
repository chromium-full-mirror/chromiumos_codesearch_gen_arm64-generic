// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertExists, assertInstanceof } from '../assert.js';
import { AsyncJobQueue } from '../async_job_queue.js';
import * as dom from '../dom.js';
import * as metrics from '../metrics.js';
import * as state from '../state.js';
import { ViewName } from '../type.js';
import { DelayInterval } from '../util.js';
import { PTZPanelOptions, View } from './view.js';
/**
 * A set of vid:pid of digital zoom cameras whose PT control is disabled when
 * all zooming out.
 */
const digitalZoomCameras = new Set([
    '046d:0809',
    '046d:0823',
    '046d:0825',
    '046d:082d',
    '046d:0843',
    '046d:085c',
    '046d:085e',
    '046d:0893',
]);
/**
 * Detects hold gesture on UI and triggers corresponding handler.
 *
 * @param params Gesture parameters.
 * @param params.button Target button for the gesture.
 * @param params.handlePress Triggered once for the first press.
 * @param params.handleHold Triggered every |holdInterval| ms when holding UI
 *     for more than |pressTimeout| ms.
 * @param params.handleRelease Triggered once the user releases the button.
 * @param params.pressTimeout Timeout in ms before triggering |handleHold|.
 * @param params.holdInterval Trigger interval for the |handleHold|.
 */
function detectHoldGesture({ button, handlePress, handleHold, handleRelease, pressTimeout, holdInterval, }) {
    let interval = null;
    function press() {
        if (interval !== null) {
            interval.stop();
        }
        handlePress();
        interval = new DelayInterval(() => {
            if (button.disabled) {
                // Releasing the hold if the button is disabled, since disabled button
                // might not get onkeyup event.
                release();
                return;
            }
            handleHold();
        }, pressTimeout, holdInterval);
    }
    function release() {
        if (interval !== null) {
            interval.stop();
            interval = null;
        }
        handleRelease();
    }
    button.onpointerdown = press;
    button.onpointerleave = release;
    button.onpointerup = release;
    button.onkeydown = ({ key, repeat }) => {
        if (repeat) {
            // Ignoring repeating keydown event since we have our own DelayInterval
            // implementation.
            return;
        }
        if (key === 'Enter' || key === ' ') {
            press();
        }
    };
    button.onkeyup = ({ key }) => {
        if (key === 'Enter' || key === ' ') {
            release();
        }
    };
    // Prevent context menu popping out when touch hold buttons.
    button.oncontextmenu = () => false;
}
/**
 * View controller for PTZ panel.
 */
export class PTZPanel extends View {
    constructor() {
        super(ViewName.PTZ_PANEL, {
            dismissByEsc: true,
            dismissByBackgroundClick: true,
            dismissOnStopStreaming: true,
        });
        /**
         * Video track of opened stream having PTZ support.
         */
        this.track = null;
        this.resetPTZ = null;
        this.panel = dom.get('#ptz-panel', HTMLDivElement);
        this.resetAll = dom.get('#ptz-reset-all', HTMLButtonElement);
        this.panLeft = dom.get('#pan-left', HTMLButtonElement);
        this.panRight = dom.get('#pan-right', HTMLButtonElement);
        this.tiltUp = dom.get('#tilt-up', HTMLButtonElement);
        this.tiltDown = dom.get('#tilt-down', HTMLButtonElement);
        this.zoomIn = dom.get('#zoom-in', HTMLButtonElement);
        this.zoomOut = dom.get('#zoom-out', HTMLButtonElement);
        this.mirrorObserver = null;
        /**
         * Queues asynchronous pan change jobs in sequence.
         */
        this.panQueues = new AsyncJobQueue();
        /**
         * Queues asynchronous tilt change jobs in sequence.
         */
        this.tiltQueues = new AsyncJobQueue();
        /**
         * Queues asynchronous zoom change jobs in sequence.
         */
        this.zoomQueues = new AsyncJobQueue();
        /**
         * Whether the camera associated with current track is a digital zoom
         * cameras whose PT control is disabled when all zooming out.
         */
        this.isDigitalZoom = false;
        this.setMirrorObserver(() => {
            this.checkDisabled();
        });
    }
    removeMirrorObserver() {
        if (this.mirrorObserver !== null) {
            state.removeObserver(state.State.MIRROR, this.mirrorObserver);
        }
    }
    setMirrorObserver(observer) {
        this.removeMirrorObserver();
        this.mirrorObserver = observer;
        state.addObserver(state.State.MIRROR, observer);
    }
    /**
     * Binds buttons with the attribute name to be controlled.
     *
     * @param attr One of pan, tilt, zoom attribute name to be bound.
     * @param incBtn Button for increasing the value.
     * @param decBtn Button for decreasing the value.
     */
    bind(attr, incBtn, decBtn) {
        const track = this.track;
        assert(track !== null);
        const { min, max, step } = track.getCapabilities()[attr];
        function getCurrent() {
            assert(track !== null);
            return assertExists(track.getSettings()[attr]);
        }
        this.checkDisabled();
        const queue = new AsyncJobQueue();
        /**
         * Returns a function triggering |attr| change of preview moving toward
         * +1/-1 direction with |deltaInPercent|.
         *
         * @param deltaInPercent Change rate in percent with respect to min/max
         *     range.
         * @param direction Change in +1 or -1 direction.
         */
        const onTrigger = (deltaInPercent, direction) => {
            const delta = Math.max(Math.round((max - min) / step * deltaInPercent / 100), 1) *
                step * direction;
            return () => {
                queue.push(async () => {
                    if (!track.enabled) {
                        return;
                    }
                    const current = getCurrent();
                    const needMirror = attr === 'pan' && state.get(state.State.MIRROR);
                    const next = Math.max(min, Math.min(max, current + delta * (needMirror ? -1 : 1)));
                    if (current === next) {
                        return;
                    }
                    await track.applyConstraints({ advanced: [{ [attr]: next }] });
                    this.checkDisabled();
                });
            };
        };
        const PRESS_TIMEOUT = 500;
        const HOLD_INTERVAL = 200;
        const pressStepPercent = attr === 'zoom' ? 10 : 1;
        const holdStepPercent = HOLD_INTERVAL / 1000; // Move 1% in 1000 ms.
        detectHoldGesture({
            button: incBtn,
            handlePress: onTrigger(pressStepPercent, 1),
            handleHold: onTrigger(holdStepPercent, 1),
            handleRelease: () => queue.clear(),
            pressTimeout: PRESS_TIMEOUT,
            holdInterval: HOLD_INTERVAL,
        });
        detectHoldGesture({
            button: decBtn,
            handlePress: onTrigger(pressStepPercent, -1),
            handleHold: onTrigger(holdStepPercent, -1),
            handleRelease: () => queue.clear(),
            pressTimeout: PRESS_TIMEOUT,
            holdInterval: HOLD_INTERVAL,
        });
        return queue;
    }
    canPan() {
        assert(this.track !== null);
        return this.track.getCapabilities().pan !== undefined;
    }
    canTilt() {
        assert(this.track !== null);
        return this.track.getCapabilities().tilt !== undefined;
    }
    canZoom() {
        assert(this.track !== null);
        return this.track.getCapabilities().zoom !== undefined;
    }
    checkDisabled() {
        if (this.track === null) {
            return;
        }
        const capabilities = this.track.getCapabilities();
        const settings = this.track.getSettings();
        function updateDisable(incBtn, decBtn, attr) {
            const current = settings[attr];
            const { min, max, step } = capabilities[attr];
            assert(current !== undefined);
            decBtn.disabled = current - step < min;
            incBtn.disabled = current + step > max;
        }
        if (capabilities.zoom !== undefined) {
            updateDisable(this.zoomIn, this.zoomOut, 'zoom');
        }
        const allZoomOut = this.zoomOut.disabled;
        if (capabilities.tilt !== undefined) {
            if (allZoomOut && this.isDigitalZoom) {
                this.tiltUp.disabled = this.tiltDown.disabled = true;
            }
            else {
                updateDisable(this.tiltUp, this.tiltDown, 'tilt');
            }
        }
        if (capabilities.pan !== undefined) {
            if (allZoomOut && this.isDigitalZoom) {
                this.panLeft.disabled = this.panRight.disabled = true;
            }
            else {
                let incBtn = this.panRight;
                let decBtn = this.panLeft;
                if (state.get(state.State.MIRROR)) {
                    ([incBtn, decBtn] = [decBtn, incBtn]);
                }
                updateDisable(incBtn, decBtn, 'pan');
            }
        }
    }
    entering(options) {
        const { stream, vidPid, resetPTZ } = assertInstanceof(options, PTZPanelOptions);
        const { bottom, right } = dom.get('#open-ptz-panel', HTMLButtonElement).getBoundingClientRect();
        this.panel.style.bottom = `${window.innerHeight - bottom}px`;
        this.panel.style.left = `${right + 6}px`;
        this.track = assertInstanceof(stream, MediaStream).getVideoTracks()[0];
        this.isDigitalZoom = state.get(state.State.USE_FAKE_CAMERA) ||
            (vidPid !== null && digitalZoomCameras.has(vidPid));
        this.resetPTZ = resetPTZ;
        const canPan = this.canPan();
        const canTilt = this.canTilt();
        const canZoom = this.canZoom();
        metrics.sendOpenPTZPanelEvent({
            pan: canPan,
            tilt: canTilt,
            zoom: canZoom,
        });
        state.set(state.State.HAS_PAN_SUPPORT, canPan);
        state.set(state.State.HAS_TILT_SUPPORT, canTilt);
        state.set(state.State.HAS_ZOOM_SUPPORT, canZoom);
        if (canPan) {
            this.panQueues = this.bind('pan', this.panRight, this.panLeft);
        }
        if (canTilt) {
            this.tiltQueues = this.bind('tilt', this.tiltUp, this.tiltDown);
        }
        if (canZoom) {
            this.zoomQueues = this.bind('zoom', this.zoomIn, this.zoomOut);
        }
        this.resetAll.onclick = async () => {
            await Promise.all([
                this.panQueues.clear(),
                this.tiltQueues.clear(),
                this.zoomQueues.clear(),
            ]);
            assert(this.resetPTZ !== null);
            await this.resetPTZ();
            this.checkDisabled();
        };
    }
    leaving() {
        this.removeMirrorObserver();
        return true;
    }
}
