// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertExists, assertInstanceof } from './assert.js';
/**
 * Photo or video resolution.
 */
export class Resolution {
    constructor(width, height) {
        this.width = width ?? 0;
        this.height = height ?? -1;
    }
    /**
     * @return Total pixel number.
     */
    get area() {
        return this.width * this.height;
    }
    /**
     * Aspect ratio calculates from width divided by height.
     */
    get aspectRatio() {
        // Special aspect ratio mapping rule, see http://b/147986763.
        if (this.width === 848 && this.height === 480) {
            return (new Resolution(16, 9)).aspectRatio;
        }
        // Approximate to 4 decimal places to prevent precision error during
        // comparing.
        return parseFloat((this.width / this.height).toFixed(4));
    }
    /**
     * @return The amount of mega pixels to 1 decimal place.
     */
    get mp() {
        return parseFloat((this.area / 1000000).toFixed(1));
    }
    /**
     * Compares width/height of resolutions, see if they are equal or not.
     *
     * @param resolution Resolution to be compared with.
     */
    equals(resolution) {
        if (resolution === null) {
            return false;
        }
        return this.width === resolution.width && this.height === resolution.height;
    }
    /**
     * Compares width/height of resolutions, see if they are equal or not. It also
     * returns true if the resolution is rotated.
     *
     * @param resolution Resolution to be compared with.
     */
    equalsWithRotation(resolution) {
        return (this.width === resolution.width &&
            this.height === resolution.height) ||
            (this.width === resolution.height && this.height === resolution.width);
    }
    /**
     * Compares aspect ratio of resolutions, see if they are equal or not.
     *
     * @param resolution Resolution to be compared with.
     */
    aspectRatioEquals(resolution) {
        return this.aspectRatio === resolution.aspectRatio;
    }
    /**
     * Create Resolution object from string.
     */
    static fromString(s) {
        const [width, height] = s.split('x').map((x) => Number(x));
        return new Resolution(width, height);
    }
    toString() {
        return `${this.width}x${this.height}`;
    }
}
/**
 * Types of common mime types.
 */
export var MimeType;
(function (MimeType) {
    MimeType["GIF"] = "image/gif";
    MimeType["JPEG"] = "image/jpeg";
    MimeType["JSON"] = "application/json";
    MimeType["MP4"] = "video/mp4";
    MimeType["PDF"] = "application/pdf";
})(MimeType || (MimeType = {}));
/**
 * Capture modes.
 */
export var Mode;
(function (Mode) {
    Mode["PHOTO"] = "photo";
    Mode["PORTRAIT"] = "portrait";
    Mode["SCAN"] = "scan";
    Mode["VIDEO"] = "video";
})(Mode || (Mode = {}));
/**
 * Camera facings.
 */
export var Facing;
(function (Facing) {
    Facing["ENVIRONMENT"] = "environment";
    Facing["EXTERNAL"] = "external";
    Facing["USER"] = "user";
    // VIRTUAL_{facing} is for labeling video device for configuring extra stream
    // from corresponding {facing} video device.
    Facing["VIRTUAL_ENV"] = "virtual_environment";
    Facing["VIRTUAL_EXT"] = "virtual_external";
    Facing["VIRTUAL_USER"] = "virtual_user";
})(Facing || (Facing = {}));
export var ViewName;
(function (ViewName) {
    ViewName["CAMERA"] = "view-camera";
    ViewName["DOCUMENT_REVIEW"] = "view-document-review";
    ViewName["EXPERT_SETTINGS"] = "view-expert-settings";
    ViewName["FLASH"] = "view-flash";
    ViewName["LOW_STORAGE_DIALOG"] = "view-low-storage-dialog";
    ViewName["OPTION_PANEL"] = "view-option-panel";
    ViewName["PHOTO_ASPECT_RATIO_SETTINGS"] = "view-photo-aspect-ratio-settings";
    ViewName["PHOTO_RESOLUTION_SETTINGS"] = "view-photo-resolution-settings";
    ViewName["PTZ_PANEL"] = "view-ptz-panel";
    ViewName["REVIEW"] = "view-review";
    ViewName["SETTINGS"] = "view-settings";
    ViewName["SPLASH"] = "view-splash";
    ViewName["VIDEO_RESOLUTION_SETTINGS"] = "view-video-resolution-settings";
    ViewName["WARNING"] = "view-warning";
})(ViewName || (ViewName = {}));
export var VideoType;
(function (VideoType) {
    VideoType["GIF"] = "gif";
    VideoType["MP4"] = "mp4";
})(VideoType || (VideoType = {}));
export var PhotoResolutionLevel;
(function (PhotoResolutionLevel) {
    PhotoResolutionLevel["FULL"] = "full";
    PhotoResolutionLevel["MEDIUM"] = "medium";
    PhotoResolutionLevel["UNKNOWN"] = "unknown";
})(PhotoResolutionLevel || (PhotoResolutionLevel = {}));
/* eslint-disable cca/string-enum-order */
export var VideoResolutionLevel;
(function (VideoResolutionLevel) {
    VideoResolutionLevel["FOUR_K"] = "4K";
    VideoResolutionLevel["QUAD_HD"] = "Quad HD";
    VideoResolutionLevel["FULL_HD"] = "Full HD";
    VideoResolutionLevel["HD"] = "HD";
    VideoResolutionLevel["THREE_SIXTY_P"] = "360p";
    VideoResolutionLevel["FULL"] = "full";
    VideoResolutionLevel["MEDIUM"] = "medium";
    VideoResolutionLevel["UNKNOWN"] = "unknown";
})(VideoResolutionLevel || (VideoResolutionLevel = {}));
/* eslint-enable cca/string-enum-order */
export var AspectRatioSet;
(function (AspectRatioSet) {
    AspectRatioSet[AspectRatioSet["RATIO_4_3"] = 1.3333] = "RATIO_4_3";
    AspectRatioSet[AspectRatioSet["RATIO_16_9"] = 1.7778] = "RATIO_16_9";
    AspectRatioSet[AspectRatioSet["RATIO_OTHER"] = 0] = "RATIO_OTHER";
    AspectRatioSet[AspectRatioSet["RATIO_SQUARE"] = 1] = "RATIO_SQUARE";
})(AspectRatioSet || (AspectRatioSet = {}));
export var Rotation;
(function (Rotation) {
    Rotation[Rotation["ANGLE_0"] = 0] = "ANGLE_0";
    Rotation[Rotation["ANGLE_90"] = 90] = "ANGLE_90";
    Rotation[Rotation["ANGLE_180"] = 180] = "ANGLE_180";
    Rotation[Rotation["ANGLE_270"] = 270] = "ANGLE_270";
})(Rotation || (Rotation = {}));
// `ROTATION_ORDER` is used for document scanning fix mode to show/crop images.
// The length must be fixed at 4.
export const ROTATION_ORDER = Object.values(Rotation).filter((r) => typeof r === 'number');
/**
 * Type for performance event.
 */
export var PerfEvent;
(function (PerfEvent) {
    PerfEvent["CAMERA_SWITCHING"] = "camera-switching";
    PerfEvent["GIF_CAPTURE_POST_PROCESSING"] = "gif-capture-post-processing";
    PerfEvent["LAUNCHING_FROM_LAUNCH_APP_COLD"] = "launching-from-launch-app-cold";
    PerfEvent["LAUNCHING_FROM_LAUNCH_APP_WARM"] = "launching-from-launch-app-warm";
    PerfEvent["LAUNCHING_FROM_WINDOW_CREATION"] = "launching-from-window-creation";
    PerfEvent["MODE_SWITCHING"] = "mode-switching";
    PerfEvent["PHOTO_CAPTURE_POST_PROCESSING"] = "photo-capture-post-processing";
    PerfEvent["PHOTO_CAPTURE_SHUTTER"] = "photo-capture-shutter";
    PerfEvent["PHOTO_TAKING"] = "photo-taking";
    PerfEvent["PORTRAIT_MODE_CAPTURE_POST_PROCESSING"] = "portrait-mode-capture-post-processing";
    PerfEvent["TIME_LAPSE_CAPTURE_POST_PROCESSING"] = "time-lapse-capture-post-processing";
    PerfEvent["VIDEO_CAPTURE_POST_PROCESSING"] = "video-capture-post-processing";
})(PerfEvent || (PerfEvent = {}));
/**
 * Gets video track settings from a video track.
 *
 * This asserts that all property that should exists on video track settings
 * (.width, .height, .deviceId, .frameRate) all exists and narrow the type.
 */
export function getVideoTrackSettings(videoTrack) {
    // TODO(pihsun): The type from TypeScript lib.dom.d.ts is wrong on Chrome and
    // the .deviceId should never be undefined. Try to override that when we have
    // newer TypeScript compiler (>= 4.5) that supports overriding lib.dom.d.ts.
    const { deviceId, width, height, frameRate } = videoTrack.getSettings();
    return {
        deviceId: assertExists(deviceId),
        width: assertExists(width),
        height: assertExists(height),
        frameRate: assertExists(frameRate),
    };
}
/**
 * A proxy to get preview video or stream with notification of when the video
 * stream is expired.
 */
export class PreviewVideo {
    constructor(video, onExpired) {
        this.video = video;
        this.onExpired = onExpired;
    }
    getStream() {
        return assertInstanceof(this.video.srcObject, MediaStream);
    }
    getVideoTrack() {
        return this.getStream().getVideoTracks()[0];
    }
    getVideoSettings() {
        return getVideoTrackSettings(this.getVideoTrack());
    }
    isExpired() {
        return this.onExpired.isSignaled();
    }
}
/**
 * Types of error used in ERROR metrics.
 */
export var ErrorType;
(function (ErrorType) {
    ErrorType["BROKEN_THUMBNAIL"] = "broken-thumbnail";
    ErrorType["CHECK_COVER_FAILURE"] = "check-cover-failed";
    ErrorType["DEVICE_INFO_UPDATE_FAILURE"] = "device-info-update-failure";
    ErrorType["DEVICE_NOT_EXIST"] = "device-not-exist";
    ErrorType["EMPTY_FILE"] = "empty-file";
    ErrorType["FILE_SYSTEM_FAILURE"] = "file-system-failure";
    ErrorType["FRAME_ROTATION_NOT_DISABLED"] = "frame-rotation-not-disabled";
    ErrorType["HANDLE_CAMERA_RESULT_FAILURE"] = "handle-camera-result-failure";
    ErrorType["IDLE_DETECTOR_FAILURE"] = "idle-detector-failure";
    ErrorType["INVALID_REVIEW_UI_STATE"] = "invalid-review-ui-state";
    ErrorType["METADATA_MAPPING_FAILURE"] = "metadata-mapping-failure";
    ErrorType["MULTI_WINDOW_HANDLING_FAILURE"] = "multi-window-handling-failure";
    ErrorType["MULTIPLE_STREAMS_FAILURE"] = "multiple-streams-failure";
    ErrorType["NO_AVAILABLE_LEVEL"] = "no-available-level";
    ErrorType["PERF_METRICS_FAILURE"] = "perf-metrics-failure";
    ErrorType["PRELOAD_IMAGE_FAILURE"] = "preload-image-failure";
    ErrorType["RESUME_CAMERA_FAILURE"] = "resume-camera-failure";
    ErrorType["RESUME_PAUSE_FAILURE"] = "resume-pause-failure";
    ErrorType["SET_FPS_RANGE_FAILURE"] = "set-fps-range-failure";
    ErrorType["START_CAMERA_FAILURE"] = "start-camera-failure";
    ErrorType["START_CAPTURE_FAILURE"] = "start-capture-failure";
    ErrorType["STOP_CAPTURE_FAILURE"] = "stop-capture-failure";
    ErrorType["SUSPEND_CAMERA_FAILURE"] = "suspend-camera-failure";
    ErrorType["UNCAUGHT_ERROR"] = "uncaught-error";
    ErrorType["UNCAUGHT_PROMISE"] = "uncaught-promise";
    ErrorType["UNSAFE_INTEGER"] = "unsafe-integer";
    ErrorType["UNSUPPORTED_PROTOCOL"] = "unsupported-protocol";
})(ErrorType || (ErrorType = {}));
/**
 * Error level used in ERROR metrics.
 */
export var ErrorLevel;
(function (ErrorLevel) {
    ErrorLevel["ERROR"] = "ERROR";
    ErrorLevel["WARNING"] = "WARNING";
})(ErrorLevel || (ErrorLevel = {}));
/**
 * Throws when a method is not implemented.
 */
export class NotImplementedError extends Error {
    constructor(message = 'Method is not implemented') {
        super(message);
        this.name = this.constructor.name;
    }
}
/**
 * Throws when an action is canceled.
 */
export class CanceledError extends Error {
    constructor(message = 'The action is canceled') {
        super(message);
        this.name = this.constructor.name;
    }
}
/**
 * Throws when an element fails to load a source.
 */
export class LoadError extends Error {
    constructor(message = 'Source failed to load') {
        super(message);
        this.name = this.constructor.name;
    }
}
/**
 * Throws when an media element fails to play.
 */
export class PlayError extends Error {
    constructor(message = 'Media element failed to play') {
        super(message);
        this.name = this.constructor.name;
    }
}
/**
 * Throws when an media element play a malformed file.
 */
export class PlayMalformedError extends Error {
    constructor(message = 'Media element failed to play a malformed file') {
        super(message);
        this.name = this.constructor.name;
    }
}
/**
 * Throws when the data to generate thumbnail is totally empty.
 */
export class EmptyThumbnailError extends Error {
    constructor(message = 'The thumbnail is empty') {
        super(message);
        this.name = this.constructor.name;
    }
}
export class LowStorageError extends Error {
    constructor() {
        const message = 'Cannot start recording due to low storage.';
        super(message);
        this.name = this.constructor.name;
    }
}
/**
 * Throws when the recording is ended with no chunk returned.
 */
export class NoChunkError extends Error {
    constructor(message = 'No chunk is received during recording session') {
        super(message);
        this.name = this.constructor.name;
    }
}
/**
 * Throws when the GIF or time lapse recording is ended with no frame captured.
 */
export class NoFrameError extends Error {
    constructor(message = 'No frames captured during the recording') {
        super(message);
        this.name = this.constructor.name;
    }
}
/**
 * Throws when the portrait mode fails to detect a human face.
 */
export class PortraitErrorNoFaceDetected extends Error {
    constructor(message = 'No human face detected in the scene') {
        super(message);
        this.name = this.constructor.name;
    }
}
/**
 * Throws when the camera is suspended while camera effects are ongoing.
 */
export class CameraSuspendError extends Error {
    constructor(message = 'camera suspended') {
        super(message);
        this.name = this.constructor.name;
    }
}
/**
 * Types of local storage key.
 */
export var LocalStorageKey;
(function (LocalStorageKey) {
    LocalStorageKey["CUSTOM_VIDEO_PARAMETERS"] = "customVideoParameters";
    LocalStorageKey["ENABLE_FPS_PICKER"] = "enableFPSPicker";
    LocalStorageKey["ENABLE_FULL_SIZED_VIDEO_SNAPSHOT"] = "enableFullSizedVideoSnapshot";
    LocalStorageKey["ENABLE_MULTISTREAM_RECORDING"] = "enableMultistreamRecording";
    LocalStorageKey["ENABLE_MULTISTREAM_RECORDING_CHROME"] = "enableMultistreamRecordingChrome";
    LocalStorageKey["ENABLE_PTZ_FOR_BUILTIN"] = "enablePTZForBuiltin";
    LocalStorageKey["EXPERT_MODE"] = "expert";
    LocalStorageKey["GA_ID_REFRESH_TIME"] = "gaIdRefreshTime";
    LocalStorageKey["GA_USER_ID"] = "google-analytics.analytics.user-id";
    LocalStorageKey["GA4_CLIENT_ID"] = "ga4ClientId";
    LocalStorageKey["MIRRORING_TOGGLES"] = "mirroringToggles";
    LocalStorageKey["PREF_DEVICE_PHOTO_ASPECT_RATIO_SET"] = "devicePhotoAspectRatioSet";
    LocalStorageKey["PREF_DEVICE_PHOTO_RESOLUTION_EXPERT"] = "devicePhotoResolutionExpert";
    LocalStorageKey["PREF_DEVICE_PHOTO_RESOLUTION_LEVEL"] = "devicePhotoResolutionLevel";
    LocalStorageKey["PREF_DEVICE_VIDEO_RESOLUTION_EXPERT"] = "deviceVideoResolutionExpert";
    LocalStorageKey["PREF_DEVICE_VIDEO_RESOLUTION_FPS"] = "deviceVideoResolutionFps";
    LocalStorageKey["PREF_DEVICE_VIDEO_RESOLUTION_LEVEL"] = "deviceVideoResolutionLevel";
    LocalStorageKey["PRINT_PERFORMANCE_LOGS"] = "printPerformanceLogs";
    LocalStorageKey["SAVE_METADATA"] = "saveMetadata";
    LocalStorageKey["SHOW_ALL_RESOLUTIONS"] = "showAllResolutions";
    LocalStorageKey["SHOW_METADATA"] = "showMetadata";
    LocalStorageKey["TOGGLE_MIC"] = "toggleMic";
})(LocalStorageKey || (LocalStorageKey = {}));
/**
 * Type of low storage dialog.
 */
export var LowStorageDialogType;
(function (LowStorageDialogType) {
    LowStorageDialogType["AUTO_STOP"] = "auto-stop";
    LowStorageDialogType["CANNOT_START"] = "cannot-start";
})(LowStorageDialogType || (LowStorageDialogType = {}));
