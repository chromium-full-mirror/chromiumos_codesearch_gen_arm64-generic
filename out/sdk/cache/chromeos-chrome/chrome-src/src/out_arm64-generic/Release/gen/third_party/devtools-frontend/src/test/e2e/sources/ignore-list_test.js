"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const settings_helpers_js_1 = require("../helpers/settings-helpers.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
(0, mocha_extensions_js_1.describe)('Ignore list', async function () {
    (0, mocha_extensions_js_1.it)('can be toggled on and off in call stack', async function () {
        await (0, settings_helpers_js_1.setIgnoreListPattern)('thirdparty');
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('multi-files-mycode.js', 'multi-files.html');
        await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 4);
        const scriptEvaluation = target.evaluate('f();');
        await (0, helper_js_1.waitFor)(sources_helpers_js_1.RESUME_BUTTON);
        await (0, helper_js_1.waitFor)('.ignore-listed-call-frame.hidden');
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.getCallFrameNames)(), ['inner', 'outer', '(anonymous)']);
        // Toggle to show ignore-listed frames
        await (0, helper_js_1.click)('.ignore-listed-message-label');
        await (0, helper_js_1.waitFor)('.ignore-listed-call-frame:not(.hidden)');
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.getCallFrameNames)(), ['inner', 'innercall', 'callfunc', 'outer', '(anonymous)']);
        // Toggle back off
        await (0, helper_js_1.click)('.ignore-listed-message-label');
        await (0, helper_js_1.waitFor)('.ignore-listed-call-frame.hidden');
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.getCallFrameNames)(), ['inner', 'outer', '(anonymous)']);
        await (0, helper_js_1.click)(sources_helpers_js_1.RESUME_BUTTON);
        await scriptEvaluation;
    });
    (0, mocha_extensions_js_1.it)('shows no toggle when everything is ignore-listed', async function () {
        await (0, settings_helpers_js_1.setIgnoreListPattern)('multi|pptr');
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('multi-files-mycode.js', 'multi-files.html');
        await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 4);
        const scriptEvaluation = target.evaluate('f();');
        await (0, helper_js_1.waitFor)(sources_helpers_js_1.RESUME_BUTTON);
        // Toggle is not shown
        await (0, helper_js_1.waitFor)('.ignore-listed-message.hidden');
        // There are visible ignore-listed frames
        await (0, helper_js_1.waitFor)('.ignore-listed-call-frame:not(.hidden)');
        // All frames are shown
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.getCallFrameNames)(), ['inner', 'innercall', 'callfunc', 'outer', '(anonymous)']);
        await (0, helper_js_1.click)(sources_helpers_js_1.RESUME_BUTTON);
        await scriptEvaluation;
    });
    (0, mocha_extensions_js_1.it)('skips frames when stepping in and out', async function () {
        await (0, settings_helpers_js_1.setIgnoreListPattern)('thirdparty');
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        (0, helper_js_1.installEventListener)(frontend, sources_helpers_js_1.DEBUGGER_PAUSED_EVENT);
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('multi-files-mycode.js', 'multi-files.html');
        await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 8);
        const scriptEvaluation = target.evaluate('f();');
        await (0, helper_js_1.waitFor)(sources_helpers_js_1.RESUME_BUTTON);
        await (0, helper_js_1.waitFor)(sources_helpers_js_1.PAUSE_INDICATOR_SELECTOR);
        await (0, helper_js_1.waitForFunction)(async () => await (0, helper_js_1.getPendingEvents)(frontend, sources_helpers_js_1.DEBUGGER_PAUSED_EVENT));
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.getCallFrameNames)(), ['outer', '(anonymous)']);
        await (0, helper_js_1.step)('Step in', sources_helpers_js_1.stepIn);
        await (0, helper_js_1.waitFor)('.call-frame-title-text[title="inner"]');
        await (0, helper_js_1.waitFor)('.ignore-listed-call-frame.hidden');
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.getCallFrameNames)(), ['inner', 'outer', '(anonymous)']);
        await (0, helper_js_1.step)('Step out', sources_helpers_js_1.stepOut);
        await (0, helper_js_1.waitForNone)('.call-frame-title-text[title="inner"]');
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.getCallFrameNames)(), ['outer', '(anonymous)']);
        await (0, helper_js_1.click)(sources_helpers_js_1.RESUME_BUTTON);
        await scriptEvaluation;
    });
    (0, mocha_extensions_js_1.it)('indicates ignored sources in page source tree', async function () {
        await (0, settings_helpers_js_1.setIgnoreListPattern)('/sources/');
        await (0, helper_js_1.goToResource)('sources/multi-files.html');
        await (0, sources_helpers_js_1.openSourcesPanel)();
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.readIgnoreListedSources)(), [
            'test/e2e/resources/sources',
            'multi-files.html',
            'multi-files-mycode.js',
            'multi-files-thirdparty.js',
        ]);
        await (0, settings_helpers_js_1.toggleIgnoreListing)(false);
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.readIgnoreListedSources)(), []);
        await (0, settings_helpers_js_1.toggleIgnoreListing)(true);
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.readIgnoreListedSources)(), [
            'test/e2e/resources/sources',
            'multi-files.html',
            'multi-files-mycode.js',
            'multi-files-thirdparty.js',
        ]);
    });
    (0, mocha_extensions_js_1.it)('removes ignored sources from page source tree', async function () {
        await (0, helper_js_1.enableExperiment)('justMyCode');
        await (0, settings_helpers_js_1.setIgnoreListPattern)('thirdparty');
        await (0, helper_js_1.goToResource)('sources/multi-files.html');
        await (0, sources_helpers_js_1.openSourcesPanel)();
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.readSourcesTreeView)(), ['top', 'localhost:XXXX', 'test/e2e/resources/sources', 'multi-files.html', 'multi-files-mycode.js']);
        await (0, settings_helpers_js_1.toggleIgnoreListing)(false);
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.readSourcesTreeView)(), [
            'top',
            'localhost:XXXX',
            'test/e2e/resources/sources',
            'multi-files.html',
            'multi-files-mycode.js',
            'multi-files-thirdparty.js',
        ]);
        await (0, settings_helpers_js_1.toggleIgnoreListing)(true);
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.readSourcesTreeView)(), ['top', 'localhost:XXXX', 'test/e2e/resources/sources', 'multi-files.html', 'multi-files-mycode.js']);
    });
});
//# sourceMappingURL=ignore-list_test.js.map