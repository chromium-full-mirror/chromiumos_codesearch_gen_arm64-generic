// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { ShortcutInputProvider } from '../mojom-webui/shortcut_input_provider.mojom-webui.js';
/**
 * @fileoverview
 * Provides singleton access to mojo interfaces.
 */
let shortcutInputProvider;
export function getShortcutInputProvider() {
    if (!shortcutInputProvider) {
        shortcutInputProvider = ShortcutInputProvider.getRemote();
    }
    assert(!!shortcutInputProvider);
    return shortcutInputProvider;
}
