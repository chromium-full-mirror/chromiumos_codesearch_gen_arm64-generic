"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const animations_helpers_js_1 = require("../helpers/animations-helpers.js");
const runAnimationTest = async (animationFn) => {
    const { target } = (0, helper_js_1.getBrowserAndPages)();
    await (0, animations_helpers_js_1.waitForAnimationsPanelToLoad)();
    await (0, helper_js_1.goToResource)('animations/animations-shown.html');
    await target.evaluate(animationFn);
    await (0, animations_helpers_js_1.waitForAnimationContent)();
};
(0, mocha_extensions_js_1.describe)('The Animations Panel', async () => {
    (0, mocha_extensions_js_1.it)('Listens for animation in webpage', async () => {
        await (0, animations_helpers_js_1.waitForAnimationsPanelToLoad)();
        await (0, animations_helpers_js_1.navigateToSiteWithAnimation)();
        await (0, animations_helpers_js_1.waitForAnimationContent)();
    });
    (0, mocha_extensions_js_1.it)('WAAPI animation with delay is displayed on the timeline', async () => {
        await runAnimationTest('startAnimationWithDelay()');
    });
    (0, mocha_extensions_js_1.it)('WAAPI animation with end delay is displayed on the timeline', async () => {
        await runAnimationTest('startAnimationWithEndDelay()');
    });
    (0, mocha_extensions_js_1.it)('WAAPI animation with negative start time is dplayed on the timeline', async () => {
        await runAnimationTest('startAnimationWithNegativeStartTime()');
    });
    (0, mocha_extensions_js_1.it)('WAAPI animation with step timing is displayed on the timeline', async () => {
        await runAnimationTest('startAnimationWithStepTiming()');
    });
    (0, mocha_extensions_js_1.it)('WAAPI animation with keyframe effect is displayed on the timeline', async () => {
        await runAnimationTest('startAnimationWithKeyframeEffect()');
    });
    (0, mocha_extensions_js_1.it)('CSS animation is displayed on the timeline', async () => {
        await runAnimationTest('startCSSAnimation()');
    });
    (0, mocha_extensions_js_1.it)('CSS transition is displayed on the timeline', async () => {
        await runAnimationTest('startCSSTransition()');
    });
});
//# sourceMappingURL=animations_test.js.map