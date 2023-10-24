// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrosHotspotConfig } from './cros_hotspot_config.mojom-webui.js';
/**
 * @fileoverview
 * Wrapper for CrosHotspotConfig that provides the ability to inject a fake
 * CrosHotspotConfig implementation for tests.
 */
let hotspotConfig = null;
/**
 * The CrosHotspotConfig implementation used for testing. Passing null reverses
 * the override.
 */
export function setHotspotConfigForTesting(testHotspotConfig) {
    hotspotConfig = testHotspotConfig;
}
export function getHotspotConfig() {
    if (hotspotConfig) {
        return hotspotConfig;
    }
    hotspotConfig = CrosHotspotConfig.getRemote();
    return hotspotConfig;
}
