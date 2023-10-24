"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
const webaudio_helpers_js_1 = require("../helpers/webaudio-helpers.js");
(0, mocha_extensions_js_1.describe)('The WebAudio Panel', async () => {
    afterEach(async () => {
        // @see console-autocomplete_test.ts
        // Make sure we don't close DevTools while there is an outstanding
        // Runtime.evaluate CDP request, which causes an error. crbug.com/1134579.
        await (0, sources_helpers_js_1.openSourcesPanel)();
    });
    (0, mocha_extensions_js_1.it)('Listens for audio contexts', async () => {
        await (0, webaudio_helpers_js_1.waitForTheWebAudioPanelToLoad)();
        await (0, webaudio_helpers_js_1.navigateToSiteWithAudioContexts)();
        await (0, webaudio_helpers_js_1.waitForWebAudioContent)();
    });
});
//# sourceMappingURL=webaudio_test.js.map