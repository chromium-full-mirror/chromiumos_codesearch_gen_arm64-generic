// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertExists } from './assert.js';
import * as Comlink from './lib/comlink.js';
/**
 * The MP4 video processor URL in trusted type.
 */
const mp4VideoProcessorURL = (() => {
    const staticUrlPolicy = assertExists(window.trustedTypes)
        .createPolicy('video-processor-js-static', {
        // util.expandPath is not used here since this
        // is in a different window, and local dev
        // doesn't override this.
        createScriptURL: (_url) => '../js/models/ffmpeg/video_processor.js',
    });
    // TODO(crbug.com/980846): Remove the empty string if
    // https://github.com/w3c/webappsec-trusted-types/issues/278 gets fixed.
    return staticUrlPolicy.createScriptURL('');
})();
/**
 * Connects the |port| to worker which exposes the video processor.
 */
async function connectToWorker(port) {
    /*
     * TODO(pihsun): TypeScript only supports string|URL instead of
     * TrustedScriptURL as parameter to Worker.
     */
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const trustedURL = mp4VideoProcessorURL;
    // TODO(pihsun): actually get correct type from the function definition.
    const worker = Comlink.wrap(new Worker(trustedURL, { type: 'module' }));
    await worker.exposeVideoProcessor(Comlink.transfer(port, [port]));
}
export { connectToWorker };
