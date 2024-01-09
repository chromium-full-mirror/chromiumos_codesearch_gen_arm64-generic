"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const performance_helpers_js_1 = require("../../../e2e/helpers/performance-helpers.js");
const helper_js_1 = require("../../../shared/helper.js");
const perf_helper_js_1 = require("../../helpers/perf-helper.js");
const report_js_1 = require("../../report/report.js");
async function getPanelWithFixture(fixture) {
    await (0, performance_helpers_js_1.navigateToPerformanceTab)();
    const uploadProfileHandle = await (0, helper_js_1.waitFor)('input[type=file]');
    await uploadProfileHandle.uploadFile(`test/unittests/fixtures/traces/${fixture}.json.gz`);
    return await (0, helper_js_1.waitFor)('.widget.panel.timeline');
}
describe('Performance panel trace load performance', () => {
    const allBenchmarks = [];
    describe('Total trace load time', async () => {
        beforeEach(async () => {
            // Reload devtools to get a fresh version of the panel on each
            // run and prevent a skew due to caching, etc.
            await (0, helper_js_1.reloadDevTools)();
        });
        const RUNS = 10;
        const traceLoadBenchmark = {
            name: 'TraceLoad',
            values: [],
            mean: 0,
            percentile50: 0,
            percentile90: 0,
            percentile99: 0,
        };
        for (let run = 1; run <= RUNS; run++) {
            it(`run ${run}/${RUNS}`, async function () {
                this.timeout(20_000);
                const panelElement = await getPanelWithFixture('web-dev');
                const eventPromise = panelElement.evaluate(el => {
                    return new Promise(resolve => {
                        el.addEventListener('traceload', e => {
                            const ev = e;
                            resolve(ev.duration);
                        }, { once: true });
                    });
                });
                const duration = await eventPromise;
                // Ensure only 2 decimal places.
                const timeTaken = Number(duration.toFixed(2));
                traceLoadBenchmark.values.push(timeTaken);
            });
        }
        after(() => {
            allBenchmarks.push(traceLoadBenchmark);
        });
    });
    after(async () => {
        // Calculate statistics for each benchmark.
        for (const benchmark of allBenchmarks) {
            /* eslint-disable no-console */
            const values = benchmark.values;
            benchmark.mean = Number((0, perf_helper_js_1.mean)(values).toFixed(2));
            benchmark.percentile50 = Number((0, perf_helper_js_1.percentile)(values, 0.5).toFixed(2));
            benchmark.percentile90 = Number((0, perf_helper_js_1.percentile)(values, 0.9).toFixed(2));
            benchmark.percentile99 = Number((0, perf_helper_js_1.percentile)(values, 0.99).toFixed(2));
            (0, report_js_1.addBenchmarkResult)(benchmark);
            console.log(`Benchmark name: ${benchmark.name}`);
            console.log(`Mean boot time: ${benchmark.mean}ms`);
            console.log(`50th percentile boot time: ${benchmark.percentile50}ms`);
            console.log(`90th percentile boot time: ${benchmark.percentile90}ms`);
            console.log(`99th percentile boot time: ${benchmark.percentile99}ms`);
            /* eslint-enable no-console */
        }
    });
});
//# sourceMappingURL=trace-load_test.js.map