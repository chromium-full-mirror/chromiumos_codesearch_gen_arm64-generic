"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDevToolsFrontendHostname = exports.collectCoverageFromPage = exports.postFileTeardown = exports.preFileSetup = exports.reloadDevTools = exports.resetPages = exports.unregisterAllServiceWorkers = exports.watchForHang = void 0;
/* eslint-disable no-console */
// use require here due to
// https://github.com/evanw/esbuild/issues/587#issuecomment-901397213
const puppeteer = require("puppeteer-core");
const puppeteer_state_js_1 = require("./puppeteer-state.js");
const test_runner_config_js_1 = require("./test_runner_config.js");
const frontend_tab_js_1 = require("./frontend_tab.js");
const events_js_1 = require("./events.js");
const target_tab_js_1 = require("./target_tab.js");
const viewportWidth = 1280;
const viewportHeight = 720;
// Adding some offset to the window size used in the headful mode
// so to account for the size of the browser UI.
// Values are choosen by trial and error to make sure that the window
// size is not much bigger than the viewport but so that the entire
// viewport is visible.
const windowWidth = viewportWidth + 50;
const windowHeight = viewportHeight + 200;
const headless = !process.env['DEBUG_TEST'];
const envSlowMo = process.env['STRESS'] ? 50 : undefined;
const envThrottleRate = process.env['STRESS'] ? 3 : 1;
const envLatePromises = process.env['LATE_PROMISES'] !== undefined ?
    ['true', ''].includes(process.env['LATE_PROMISES'].toLowerCase()) ? 10 : Number(process.env['LATE_PROMISES']) :
    0;
const TEST_SERVER_TYPE = (0, test_runner_config_js_1.getTestRunnerConfigSetting)('test-server-type', 'hosted-mode');
let browser;
let frontendTab;
let targetTab;
const envChromeBinary = (0, test_runner_config_js_1.getTestRunnerConfigSetting)('chrome-binary-path', process.env['CHROME_BIN'] || '');
const envChromeFeatures = (0, test_runner_config_js_1.getTestRunnerConfigSetting)('chrome-features', process.env['CHROME_FEATURES'] || '');
async function watchForHang(stepFn) {
    const stackTrace = new Error().stack;
    const timeout = setTimeout(() => console.error(`Hung at step ${stepFn.name || stepFn.toString()}\nTrace: ${stackTrace}`), 10000);
    let isException = true;
    try {
        const result = await stepFn();
        isException = false;
        return result;
    }
    finally {
        clearTimeout(timeout);
        if (isException) {
            console.error(`Exception thrown during step ${stepFn.name || stepFn.toString()}\nTrace: ${stackTrace}`);
        }
    }
}
exports.watchForHang = watchForHang;
function launchChrome() {
    // Use port 0 to request any free port.
    const enabledFeatures = [
        'Portals',
        'PortalsCrossOrigin',
        'PartitionedCookies',
        'SharedStorageAPI',
        'FencedFrames',
        'PrivacySandboxAdsAPIsOverride',
        'AutofillEnableDevtoolsIssues',
    ];
    const launchArgs = [
        '--remote-allow-origins=*', '--remote-debugging-port=0', '--enable-experimental-web-platform-features',
        // This fingerprint may be generated from the certificate using
        // openssl x509 -noout -pubkey -in scripts/hosted_mode/cert.pem | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | base64
        '--ignore-certificate-errors-spki-list=KLy6vv6synForXwI6lDIl+D3ZrMV6Y1EMTY6YpOcAos=',
        '--site-per-process',
        '--host-resolver-rules=MAP *.test 127.0.0.1', '--disable-gpu',
        '--enable-blink-features=CSSContainerQueries,HighlightInheritance', // TODO(crbug.com/1218390) Remove globally enabled flags and conditionally enable them
    ];
    const opts = {
        headless: headless ? 'new' : false,
        executablePath: envChromeBinary,
        dumpio: !headless || Boolean(process.env['LUCI_CONTEXT']),
        slowMo: envSlowMo,
    };
    // Always set the default viewport because setting only the window size for
    // headful mode would result in much smaller actual viewport.
    opts.defaultViewport = { width: viewportWidth, height: viewportHeight };
    // Toggle either viewport or window size depending on headless vs not.
    if (!headless) {
        launchArgs.push(`--window-size=${windowWidth},${windowHeight}`);
    }
    if (envChromeFeatures) {
        enabledFeatures.push(envChromeFeatures);
    }
    launchArgs.push(`--enable-features=${enabledFeatures.join(',')}`);
    opts.args = launchArgs;
    return puppeteer.launch(opts);
}
async function loadTargetPageAndFrontend(testServerPort) {
    browser = await launchChrome();
    (0, events_js_1.setupBrowserProcessIO)(browser);
    // Load the target page.
    targetTab = await target_tab_js_1.TargetTab.create(browser);
    // Create the frontend - the page that will be under test. This will be either
    // DevTools Frontend in hosted mode, or the component docs in docs test mode.
    let frontend;
    if (TEST_SERVER_TYPE === 'hosted-mode') {
        /**
         * In hosted mode we run the DevTools and test against it.
         */
        frontendTab = await frontend_tab_js_1.DevToolsFrontendTab.create({
            browser,
            testServerPort,
            targetId: targetTab.targetId(),
        });
        frontend = frontendTab.page;
    }
    else if (TEST_SERVER_TYPE === 'component-docs') {
        /**
         * In the component docs mode it points to the page where we load component
         * doc examples, so let's just set it to an empty page for now.
         */
        frontend = await browser.newPage();
        (0, events_js_1.installPageErrorHandlers)(frontend);
        await (0, frontend_tab_js_1.loadEmptyPageAndWaitForContent)(frontend);
    }
    else {
        throw new Error(`Unknown TEST_SERVER_TYPE "${TEST_SERVER_TYPE}"`);
    }
    (0, puppeteer_state_js_1.setBrowserAndPages)({ target: targetTab.page, frontend, browser });
}
async function unregisterAllServiceWorkers() {
    const { target } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    await target.evaluate(async () => {
        if (!navigator.serviceWorker) {
            return;
        }
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map(r => r.unregister()));
    });
}
exports.unregisterAllServiceWorkers = unregisterAllServiceWorkers;
async function resetPages() {
    const { frontend, target } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    await watchForHang(() => target.bringToFront());
    await watchForHang(() => targetTab.reset());
    await watchForHang(() => frontend.bringToFront());
    await watchForHang(() => throttleCPUIfRequired(frontend));
    await watchForHang(() => delayPromisesIfRequired(frontend));
    if (TEST_SERVER_TYPE === 'hosted-mode') {
        await watchForHang(() => frontendTab.reset());
    }
    else if (TEST_SERVER_TYPE === 'component-docs') {
        // Reset the frontend back to an empty page for the component docs server.
        await watchForHang(() => (0, frontend_tab_js_1.loadEmptyPageAndWaitForContent)(frontend));
    }
}
exports.resetPages = resetPages;
async function delayPromisesIfRequired(page) {
    if (envLatePromises === 0) {
        return;
    }
    console.log(`Delaying promises by ${envLatePromises}ms`);
    await page.evaluate(delay => {
        globalThis.Promise = class extends Promise {
            constructor(executor) {
                super((resolve, reject) => {
                    executor(value => setTimeout(() => resolve(value), delay), reason => setTimeout(() => reject(reason), delay));
                });
            }
        };
    }, envLatePromises);
}
async function throttleCPUIfRequired(page) {
    if (envThrottleRate === 1) {
        return;
    }
    console.log(`Throttling CPU: ${envThrottleRate}x slowdown`);
    const client = await page.target().createCDPSession();
    await client.send('Emulation.setCPUThrottlingRate', {
        rate: envThrottleRate,
    });
}
async function reloadDevTools(options) {
    await frontendTab.reload(options);
}
exports.reloadDevTools = reloadDevTools;
// Can be run multiple times in the same process.
async function preFileSetup(serverPort) {
    (0, puppeteer_state_js_1.setTestServerPort)(serverPort);
    (0, puppeteer_state_js_1.registerHandlers)();
    await loadTargetPageAndFrontend(serverPort);
}
exports.preFileSetup = preFileSetup;
// Can be run multiple times in the same process.
async function postFileTeardown() {
    // We need to kill the browser before we stop the hosted mode server.
    // That's because the browser could continue to make network requests,
    // even after we would have closed the server. If we did so, the requests
    // would fail and the test would crash on closedown. This only happens
    // for the very last test that runs.
    await browser.close();
    (0, puppeteer_state_js_1.clearPuppeteerState)();
    (0, events_js_1.dumpCollectedErrors)();
}
exports.postFileTeardown = postFileTeardown;
function collectCoverageFromPage() {
    const { frontend } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    return frontend.evaluate('window.__coverage__');
}
exports.collectCoverageFromPage = collectCoverageFromPage;
function getDevToolsFrontendHostname() {
    return frontendTab.hostname();
}
exports.getDevToolsFrontendHostname = getDevToolsFrontendHostname;
//# sourceMappingURL=hooks.js.map