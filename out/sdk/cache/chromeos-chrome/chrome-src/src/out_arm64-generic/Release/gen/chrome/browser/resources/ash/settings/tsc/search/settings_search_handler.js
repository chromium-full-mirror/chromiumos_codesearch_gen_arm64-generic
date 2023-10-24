// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * Provides functions used for OS settings search.
 * Also provides a way to inject a test implementation for verifying
 * OS settings search.
 */
import { SearchHandler } from '../mojom-webui/search.mojom-webui.js';
let settingsSearchHandler = null;
export function setSettingsSearchHandlerForTesting(testSearchHandler) {
    settingsSearchHandler = testSearchHandler;
}
export function getSettingsSearchHandler() {
    if (settingsSearchHandler) {
        return settingsSearchHandler;
    }
    settingsSearchHandler = SearchHandler.getRemote();
    return settingsSearchHandler;
}
