"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForPlayerButtonTexts = exports.getPlayerButtonText = exports.getPlayerErrors = exports.getPlayerButton = exports.playMediaFile = void 0;
const helper_js_1 = require("../../shared/helper.js");
async function playMediaFile(media) {
    const { target } = (0, helper_js_1.getBrowserAndPages)();
    await (0, helper_js_1.goToResource)(`media/${media}`);
    // Need to click play manually - autoplay policy prevents it otherwise.
    await target.evaluate(() => new Promise(resolve => {
        const videoElement = document.getElementsByName('media')[0];
        // Only resolve the promise when the video has finished
        // the entirety of it's playback.
        videoElement.addEventListener('ended', () => {
            resolve();
        }, { once: true });
        // If the element is in the error state, then consider
        // it to be finished.
        if (videoElement.error) {
            resolve();
        }
        // If the video is _already_ in an ended state and time
        // is greater than 0, then autoplay allowed playback and
        // the playback has already finished. We can just resolve
        // in this case.
        if (videoElement.ended && videoElement.currentTime > 0) {
            resolve();
            return;
        }
        // If we aren't ended or errord, and the time is still 0,
        // then autoplay requires us to play the video manually.
        if (!videoElement.ended && videoElement.currentTime === 0) {
            void videoElement.play();
            return;
        }
        // If the player has entered the ended state with t=0,
        // this is an error, and the test should fail. If the player
        // has not ended yet, then the event listener above should
        // resolve the promise shortly.
    }));
}
exports.playMediaFile = playMediaFile;
async function getPlayerButton() {
    return await (0, helper_js_1.waitFor)('.player-entry-player-title');
}
exports.getPlayerButton = getPlayerButton;
async function getPlayerErrors(count) {
    await (0, helper_js_1.click)('.player-entry-player-title');
    await (0, helper_js_1.click)('#tab-messages');
    return await (0, helper_js_1.waitForMany)('.media-message-error', count);
}
exports.getPlayerErrors = getPlayerErrors;
async function getPlayerButtonText() {
    const playerEntry = await getPlayerButton();
    return await playerEntry.evaluate(element => element.textContent);
}
exports.getPlayerButtonText = getPlayerButtonText;
async function waitForPlayerButtonTexts(count) {
    return (0, helper_js_1.waitForFunction)(async () => {
        return await (0, helper_js_1.waitForMany)('.player-entry-player-title', count);
    });
}
exports.waitForPlayerButtonTexts = waitForPlayerButtonTexts;
//# sourceMappingURL=media-helpers.js.map