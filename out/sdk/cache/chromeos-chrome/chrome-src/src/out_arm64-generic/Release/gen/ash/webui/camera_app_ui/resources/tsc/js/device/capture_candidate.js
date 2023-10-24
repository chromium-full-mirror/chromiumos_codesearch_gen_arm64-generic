// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class Camera3CaptureCandidate {
    constructor(deviceId, resolution, previewResolutions) {
        this.deviceId = deviceId;
        this.resolution = resolution;
        this.previewResolutions = this.sortPreview(previewResolutions, resolution);
    }
    getConstFps() {
        return null;
    }
    /**
     * Sorts the preview resolution (rp) according to the capture resolution
     * (rc) and the screen size (rs) with the following orders:
     * If |rc| <= |rs|:
     *   1. All |rp| <= |rc|, and the larger, the better.
     *   2. All |rp| > |rc|, and the smaller, the better.
     *
     * If |rc| > |rs|:
     *   1. All |rp| where |rs| <= |rp| <= |rc|, and the smaller, the
     *   better.
     *   2. All |rp| < |rs|, and the larger, the better.
     *   3. All |rp| > |rc|, and the smaller, the better.
     *
     * Note that generally we compare resolutions by their width. But since the
     * aspect ratio of |rs| might be different from the |rc| and |rp|, we also
     * consider |screenHeight * captureAspectRatio| as a possible |rs| and prefer
     * using the smaller one.
     */
    sortPreview(previewResolutions, captureResolution) {
        if (previewResolutions.length === 0) {
            return [];
        }
        const screenWidth = Math.floor(window.screen.width * window.devicePixelRatio);
        const screenHeight = Math.floor(window.screen.height * window.devicePixelRatio);
        const aspectRatio = captureResolution.width / captureResolution.height;
        const rs = Math.min(screenWidth, Math.floor(screenHeight * aspectRatio));
        const rc = captureResolution.width;
        function cmpDescending(r1, r2) {
            return r2.width - r1.width;
        }
        function cmpAscending(r1, r2) {
            return r1.width - r2.width;
        }
        if (rc <= rs) {
            const notLargerThanR = previewResolutions.filter((r) => r.width <= rc).sort(cmpDescending);
            const largerThanR = previewResolutions.filter((r) => r.width > rc).sort(cmpAscending);
            return notLargerThanR.concat(largerThanR);
        }
        else {
            const betweenRsR = previewResolutions.filter((r) => rs <= r.width && r.width <= rc)
                .sort(cmpAscending);
            const smallerThanRs = previewResolutions.filter((r) => r.width < rs).sort(cmpDescending);
            const largerThanR = previewResolutions.filter((r) => r.width > rc).sort(cmpAscending);
            return betweenRsR.concat(smallerThanRs).concat(largerThanR);
        }
    }
}
export class PhotoCaptureCandidate extends Camera3CaptureCandidate {
    constructor(deviceId, resolution, previewResolutions, supportPTZ) {
        super(deviceId, resolution, previewResolutions);
        this.supportPTZ = supportPTZ;
    }
    getStreamConstraintsCandidates() {
        let previewResolutions = this.previewResolutions;
        // Use workaround for b/184089334 on PTZ camera to use preview frame
        // as photo result.
        if (this.supportPTZ &&
            previewResolutions.find((r) => this.resolution.equals(r)) !==
                undefined) {
            previewResolutions = [this.resolution];
        }
        return previewResolutions.map(({ width, height }) => ({
            deviceId: this.deviceId,
            audio: false,
            video: {
                width,
                height,
            },
        }));
    }
}
export class VideoCaptureCandidate extends Camera3CaptureCandidate {
    constructor(deviceId, resolution, previewResolutions, constFps, hasAudio) {
        super(deviceId, resolution, previewResolutions);
        this.constFps = constFps;
        this.hasAudio = hasAudio;
    }
    getStreamConstraintsCandidates() {
        // For non-multistream recording, preview stream is used directly
        // to do video recording.
        const { width, height } = this.resolution;
        const buildConstraint = (frameRate) => ({
            deviceId: this.deviceId,
            audio: this.hasAudio,
            video: {
                frameRate,
                width,
                height,
            },
        });
        const frameRate = this.constFps === null ? { min: 20, ideal: 30 } : { exact: this.constFps };
        const streamConstraints = [buildConstraint(frameRate)];
        // If another web app is opened and requests a low fps streaming, CCA will
        // get an OverconstrainedError. In this case, the constraint is relaxed but
        // the error message is kept in the log.
        if (this.constFps === null) {
            streamConstraints.push(buildConstraint({ ideal: 30 }));
        }
        return streamConstraints;
    }
    getConstFps() {
        return this.constFps;
    }
}
export class MultiStreamVideoCaptureCandidate extends VideoCaptureCandidate {
    constructor(deviceId, resolution, previewResolutions, constFps, hasAudio) {
        super(deviceId, resolution, previewResolutions, constFps, hasAudio);
    }
    getStreamConstraintsCandidates() {
        const frameRate = this.constFps === null ? { min: 20, ideal: 30 } : { exact: this.constFps };
        const buildConstraint = (frameRate, { width, height }) => ({
            deviceId: this.deviceId,
            audio: this.hasAudio,
            video: {
                frameRate,
                width,
                height,
            },
        });
        const streamConstraints = [];
        for (const previewResolution of this.previewResolutions) {
            streamConstraints.push(buildConstraint(frameRate, previewResolution));
        }
        // If another web app is opened and requests a low fps streaming, CCA will
        // get an OverconstrainedError. In this case, the constraint is relaxed but
        // the error message is kept in the log.
        if (this.constFps === null) {
            for (const previewResolution of this.previewResolutions) {
                streamConstraints.push(buildConstraint({ ideal: 30 }, previewResolution));
            }
        }
        return streamConstraints;
    }
}
export class FakeCameraCaptureCandidate {
    constructor(deviceId, videoMode, hasAudio) {
        this.deviceId = deviceId;
        this.videoMode = videoMode;
        this.hasAudio = hasAudio;
        this.resolution = null;
    }
    getStreamConstraintsCandidates() {
        const frameRate = { min: 20, ideal: 30 };
        return [
            {
                deviceId: this.deviceId,
                audio: this.hasAudio,
                video: {
                    aspectRatio: { ideal: this.videoMode ? 1.7777777778 : 1.3333333333 },
                    width: { min: 1280 },
                    frameRate,
                },
            },
            {
                deviceId: this.deviceId,
                audio: this.hasAudio,
                video: {
                    width: { min: 640 },
                    frameRate,
                },
            },
        ];
    }
    getConstFps() {
        return null;
    }
}
