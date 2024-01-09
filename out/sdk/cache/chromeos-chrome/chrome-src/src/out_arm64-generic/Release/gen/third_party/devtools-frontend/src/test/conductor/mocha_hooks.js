"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.mochaHooks = exports.mochaGlobalTeardown = exports.mochaGlobalSetup = void 0;
const Crypto = require("crypto");
const fs = require("fs");
const istanbul_lib_coverage_1 = require("istanbul-lib-coverage");
const report = require("istanbul-lib-report");
const istanbul_lib_source_maps_1 = require("istanbul-lib-source-maps");
const reports = require("istanbul-reports");
const path = require("path");
const rimraf = require("rimraf");
const hooks_js_1 = require("./hooks.js");
const test_runner_config_js_1 = require("./test_runner_config.js");
const test_server_js_1 = require("./test_server.js");
/* eslint-disable no-console */
process.on('SIGINT', hooks_js_1.postFileTeardown);
const TEST_SERVER_TYPE = (0, test_runner_config_js_1.getTestRunnerConfigSetting)('test-server-type', 'hosted-mode');
if (TEST_SERVER_TYPE !== 'hosted-mode' && TEST_SERVER_TYPE !== 'component-docs' && TEST_SERVER_TYPE !== 'none') {
    throw new Error(`Invalid test server type: ${TEST_SERVER_TYPE}`);
}
// Required to reassign to allow for TypeScript to correctly deduce its type
const DERIVED_SERVER_TYPE = TEST_SERVER_TYPE;
// We can run Mocha in two modes: serial and parallel. In parallel mode, Mocha
// starts multiple node processes which don't know about each other. It provides
// them one test file at a time, and when they are finished with that file they
// ask for another one. This means in parallel mode, the unit of work is a test
// file, and a full setup and teardown is done before/after each file even if it
// will eventually run another test file. This is inefficient for us because we
// have a relatively long setup time, but we can't avoid it at the moment. It
// also means that the setup and teardown code needs to be aware that it may be
// run multiple times within the same node process.
// The two functions below are 'global setup fixtures':
// https://mochajs.org/#global-setup-fixtures. These let us start one hosted
// mode server and share it between all the parallel test runners.
async function mochaGlobalSetup() {
    // Start the test server in the 'main' process. In parallel mode, we
    // share one server between all parallel runners. The parallel runners are all
    // in different processes, so we pass the port number as an environment var.
    if (DERIVED_SERVER_TYPE === 'none') {
        return;
    }
    process.env.testServerPort = String(await (0, test_server_js_1.startServer)(DERIVED_SERVER_TYPE));
    console.log(`Started ${DERIVED_SERVER_TYPE} server on port ${process.env.testServerPort}`);
}
exports.mochaGlobalSetup = mochaGlobalSetup;
function mochaGlobalTeardown() {
    console.log('Stopping server');
    (0, test_server_js_1.stopServer)();
}
exports.mochaGlobalTeardown = mochaGlobalTeardown;
function logScreenshotFileUrl() {
    const screenshotFile = process.env.HTML_OUTPUT_FILE;
    if (screenshotFile) {
        const hash = Crypto.createHash('sha256');
        const contents = fs.readFileSync(screenshotFile);
        hash.update(contents);
        console.error(`If running on bots, screenshots can be downloaded from: https://cas-viewer.appspot.com/projects/chromium-swarm/instances/default_instance/blobs/${hash.digest('hex')}/${contents.byteLength}?filename=screenshots.html`);
    }
}
const testSuiteCoverageMap = (0, istanbul_lib_coverage_1.createCoverageMap)();
const testsRunWithCoverageEnvSet = Boolean(process.env.COVERAGE || process.env.COVERAGE_FOLDERS);
const SHOULD_GATHER_COVERAGE_INFORMATION = testsRunWithCoverageEnvSet && DERIVED_SERVER_TYPE === 'component-docs';
const INTERACTIONS_COVERAGE_LOCATION = path.join(process.cwd(), 'interactions-coverage/');
let didPauseAtBeginning = false;
// These are the 'root hook plugins': https://mochajs.org/#root-hook-plugins
// These open and configure the browser before tests are run.
exports.mochaHooks = {
    // In serial mode (Mocha’s default), before all tests begin, once only.
    // In parallel mode, run before all tests begin, for each file.
    beforeAll: async function () {
        // It can take arbitrarly long on bots to boot up a server and start
        // DevTools. Since this timeout only applies for this hook, we can let it
        // take an arbitrarily long time, while still enforcing that tests run
        // reasonably quickly (2 seconds by default).
        this.timeout(0);
        await (0, hooks_js_1.preFileSetup)(Number(process.env.testServerPort));
    },
    // In serial mode, run after all tests end, once only.
    // In parallel mode, run after all tests end, for each file.
    afterAll: async function () {
        await (0, hooks_js_1.postFileTeardown)();
        logScreenshotFileUrl();
        if (!SHOULD_GATHER_COVERAGE_INFORMATION) {
            return;
        }
        // Writing the coverage files to disk can take a lot longer on CQ than the
        // default timeout. Since all of this work is synchronous (and would
        // immediately fail if it went wrong), we can set the timeout to infinite
        // here.
        this.timeout(0);
        // Make sure that any previously existing coverage reports are purged.
        if (fs.existsSync(INTERACTIONS_COVERAGE_LOCATION)) {
            rimraf.sync(INTERACTIONS_COVERAGE_LOCATION);
        }
        const remappedCoverageMap = await (0, istanbul_lib_source_maps_1.createSourceMapStore)().transformCoverage(testSuiteCoverageMap);
        const context = report.createContext({
            dir: INTERACTIONS_COVERAGE_LOCATION,
            coverageMap: remappedCoverageMap,
            defaultSummarizer: 'nested',
        });
        reports.create('html').execute(context);
        reports.create('json').execute(context);
        reports.create('text', { file: 'coverage.txt' }).execute(context);
        reports.create('json-summary').execute(context);
    },
    // In both modes, run before each test.
    beforeEach: async function () {
        // Sets the timeout higher for this hook only.
        this.timeout(20000);
        await (0, hooks_js_1.watchForHang)(hooks_js_1.resetPages);
        await (0, hooks_js_1.watchForHang)(hooks_js_1.unregisterAllServiceWorkers);
        // Pause when running interactively in debug mode. This is mututally
        // exclusive with parallel mode.
        // We need to pause after `resetPagesBetweenTests`, otherwise the DevTools
        // and target tab are not available to us to set breakpoints in.
        // We still only want to pause once, so we remember that we did pause.
        if (process.env['DEBUG_TEST'] && !didPauseAtBeginning) {
            this.timeout(0);
            didPauseAtBeginning = true;
            console.log('Running in debug mode.');
            console.log(' - Press enter to run the test.');
            console.log(' - Press ctrl + c to quit.');
            await new Promise(resolve => {
                const { stdin } = process;
                stdin.on('data', () => {
                    stdin.pause();
                    resolve();
                });
            });
        }
    },
    afterEach: async function () {
        if (!SHOULD_GATHER_COVERAGE_INFORMATION) {
            return;
        }
        const coverageData = await (0, hooks_js_1.collectCoverageFromPage)();
        const testCoverageMap = (0, istanbul_lib_coverage_1.createCoverageMap)();
        if (coverageData) {
            for (const file of Object.values(coverageData)) {
                testCoverageMap.addFileCoverage((0, istanbul_lib_coverage_1.createFileCoverage)(file));
            }
        }
        testSuiteCoverageMap.merge(testCoverageMap);
    },
};
//# sourceMappingURL=mocha_hooks.js.map