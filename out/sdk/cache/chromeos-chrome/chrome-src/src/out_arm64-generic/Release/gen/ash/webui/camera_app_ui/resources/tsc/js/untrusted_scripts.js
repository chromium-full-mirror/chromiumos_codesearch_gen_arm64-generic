// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertExists } from './assert.js';
import * as Comlink from './lib/comlink.js';
import { isLocalDev } from './models/load_time_data.js';
import { Ga4MetricDimension, GaMetricDimension, } from './untrusted_ga_helper.js';
import { expandPath } from './util.js';
import { WaitableEvent } from './waitable_event.js';
/**
 * Creates the iframe to host the untrusted scripts under
 * chrome-untrusted://camera-app and append to the document.
 */
export function createUntrustedIframe() {
    const untrustedPageReady = new WaitableEvent();
    const iframe = document.createElement('iframe');
    iframe.addEventListener('load', () => untrustedPageReady.signal());
    if (isLocalDev()) {
        iframe.setAttribute('src', expandPath('/views/untrusted_script_loader.html'));
    }
    else {
        iframe.setAttribute('src', 'chrome-untrusted://camera-app/views/untrusted_script_loader.html');
    }
    iframe.hidden = true;
    iframe.setAttribute('allow', 'cross-origin-isolated');
    document.body.appendChild(iframe);
    return { iframe, pageReadyEvent: untrustedPageReady };
}
let memoryMeasurementHelper = null;
/**
 * Creates JS module by given |scriptUrl| under untrusted context with given
 * origin and returns its proxy.
 *
 * @param untrustedIframe The untrusted iframe.
 * @param scriptUrl The URL of the script to load.
 */
export async function injectUntrustedJSModule(untrustedIframe, scriptUrl) {
    const { iframe, pageReadyEvent } = untrustedIframe;
    await pageReadyEvent.wait();
    assert(iframe.contentWindow !== null);
    const untrustedRemote = Comlink.wrap(Comlink.windowEndpoint(iframe.contentWindow, self));
    // Memory measurement for all untrusted scripts can be done on any single
    // untrusted frame.
    if (memoryMeasurementHelper === null) {
        memoryMeasurementHelper = untrustedRemote;
    }
    await untrustedRemote.loadScript(scriptUrl);
    // loadScript adds the script exports to what's exported by the
    // untrustedRemote, so we manually cast it to the expected type.
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return untrustedRemote;
}
let gaHelper = null;
let videoProcessorHelper = null;
/**
 * Measure memory used by untrusted scripts.
 */
export async function measureUntrustedScriptsMemory() {
    assert(memoryMeasurementHelper !== null);
    return memoryMeasurementHelper.measureMemoryUsage();
}
/**
 * Gets the singleton GaHelper instance that is located in an untrusted iframe.
 */
export function getGaHelper() {
    return assertExists(gaHelper);
}
/**
 * Sets the singleton GaHelper instance. This should only be called on
 * initialize by init.ts.
 */
export function setGaHelper(newGaHelper) {
    assert(gaHelper === null, 'gaHelper should only be initialize once on init');
    gaHelper = newGaHelper;
}
/**
 * Types of event parameters and dimensions for GA and GA4.
 */
export { Ga4MetricDimension, GaMetricDimension };
/**
 * Gets the singleton VideoProcessorHelper instance that is located in an
 * untrusted iframe.
 */
export function getVideoProcessorHelper() {
    return assertExists(videoProcessorHelper);
}
/**
 * Sets the singleton VideoProcessorHelper instance. This should only be called
 * on initialize by init.ts.
 */
export function setVideoProcessorHelper(newVideoProcessorHelper) {
    assert(videoProcessorHelper === null, 'videoProcessorHelper should only be initialize once on init');
    videoProcessorHelper = newVideoProcessorHelper;
}
