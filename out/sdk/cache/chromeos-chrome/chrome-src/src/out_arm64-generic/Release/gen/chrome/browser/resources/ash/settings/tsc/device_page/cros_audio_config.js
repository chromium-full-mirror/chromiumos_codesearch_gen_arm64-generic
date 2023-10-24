// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * Provides singleton access to the CrosAudioConfig mojo interface and the
 * ability to override it with a fake implementation needed for tests.
 */
import { CrosAudioConfig } from '../mojom-webui/cros_audio_config.mojom-webui.js';
import { FakeCrosAudioConfig } from './fake_cros_audio_config.js';
let crosAudioConfig = null;
/** Use FakeCrosAudioConfig implementation in `getCrosAudioConfig`. */
const useFakeMojo = false;
/**
 * The CrosAudioConfig implementation used for testing. Passing null reverses
 * the override.
 */
export function setCrosAudioConfigForTesting(testCrosAudioConfig) {
    crosAudioConfig = testCrosAudioConfig;
}
export function getCrosAudioConfig() {
    if (!crosAudioConfig && useFakeMojo) {
        crosAudioConfig = new FakeCrosAudioConfig();
    }
    if (!crosAudioConfig) {
        crosAudioConfig = CrosAudioConfig.getRemote();
    }
    // Base case returns a fake CrosAudioConfig used for testing.
    return crosAudioConfig;
}
