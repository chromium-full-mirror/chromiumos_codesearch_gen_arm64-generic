// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @file
 * H264 related utility functions referenced from
 * media/video/h264_level_limits.cc.
 */
import { assert, assertNotReached } from './assert.js';
import { getNumberEnumMapping } from './util.js';
export var Profile;
(function (Profile) {
    Profile[Profile["BASELINE"] = 66] = "BASELINE";
    Profile[Profile["MAIN"] = 77] = "MAIN";
    Profile[Profile["HIGH"] = 100] = "HIGH";
})(Profile || (Profile = {}));
export const profileValues = new Set(Object.values(getNumberEnumMapping(Profile)));
/**
 * Asserts that a number is one of the value of possible h264 profile.
 */
export function assertProfile(v) {
    assert(profileValues.has(v));
    return v;
}
const profileNames = {
    [Profile.BASELINE]: 'baseline',
    [Profile.MAIN]: 'main',
    [Profile.HIGH]: 'high',
};
/**
 * Gets the name of a h264 profile.
 */
export function getProfileName(profile) {
    return profileNames[profile];
}
export var Level;
(function (Level) {
    // Ignore unsupported lower levels.
    Level[Level["LV30"] = 30] = "LV30";
    Level[Level["LV31"] = 31] = "LV31";
    Level[Level["LV32"] = 32] = "LV32";
    Level[Level["LV40"] = 40] = "LV40";
    Level[Level["LV41"] = 41] = "LV41";
    Level[Level["LV42"] = 42] = "LV42";
    Level[Level["LV50"] = 50] = "LV50";
    Level[Level["LV51"] = 51] = "LV51";
    Level[Level["LV52"] = 52] = "LV52";
    Level[Level["LV60"] = 60] = "LV60";
    Level[Level["LV61"] = 61] = "LV61";
    Level[Level["LV62"] = 62] = "LV62";
})(Level || (Level = {}));
export const LEVELS = Object.values(getNumberEnumMapping(Level)).sort((a, b) => a - b);
const levelLimits = (() => {
    function limit(processRate, frameSize, mainBitrate) {
        return { processRate, frameSize, mainBitrate };
    }
    return {
        [Level.LV30]: limit(40500, 1620, 10000),
        [Level.LV31]: limit(108000, 3600, 14000),
        [Level.LV32]: limit(216000, 5120, 20000),
        [Level.LV40]: limit(245760, 8192, 20000),
        [Level.LV41]: limit(245760, 8192, 50000),
        [Level.LV42]: limit(522240, 8704, 50000),
        [Level.LV50]: limit(589824, 22080, 135000),
        [Level.LV51]: limit(983040, 36864, 240000),
        [Level.LV52]: limit(2073600, 36864, 240000),
        [Level.LV60]: limit(4177920, 139264, 240000),
        [Level.LV61]: limit(8355840, 139264, 480000),
        [Level.LV62]: limit(16711680, 139264, 800000),
    };
})();
/**
 * @return Returns the maximal available bitrate supported by target
 *     profile and level.
 */
export function getMaxBitrate(profile, level) {
    const { mainBitrate } = levelLimits[level];
    const kbs = (() => {
        switch (profile) {
            case Profile.BASELINE:
            case Profile.MAIN:
                return mainBitrate;
            case Profile.HIGH:
                return Math.floor(mainBitrate * 5 / 4);
            default:
                assertNotReached();
        }
    })();
    return kbs * 1000;
}
/**
 * H264 macroblock size in pixels.
 */
const MACROBLOCK_SIZE = 16;
/**
 * @return Returns whether the recording |fps| and |resolution| fit in the h264
 *     level limitation.
 */
export function checkLevelLimits(level, fps, { width, height }) {
    const frameSize = Math.ceil(width / MACROBLOCK_SIZE) * Math.ceil(height / MACROBLOCK_SIZE);
    const processRate = frameSize * fps;
    const limit = levelLimits[level];
    return frameSize <= limit.frameSize && processRate <= limit.processRate;
}
/**
 * Gets minimal available level with respect to given profile, bitrate,
 * resolution, fps.
 */
export function getMinimalLevel(profile, bitrate, fps, resolution) {
    for (const level of LEVELS) {
        if (checkLevelLimits(level, fps, resolution) &&
            getMaxBitrate(profile, level) >= bitrate) {
            return level;
        }
    }
    return null;
}
