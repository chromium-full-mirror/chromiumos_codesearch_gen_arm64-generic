"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const perf_hooks_1 = require("perf_hooks");
const helper_js_1 = require("../../shared/helper.js");
const perf_helper_js_1 = require("../helpers/perf-helper.js");
const report_js_1 = require("../report/report.js");
describe('Boot performance', () => {
    const RUNS = 37;
    const benchmark = {
        name: 'BootPerf',
        values: [],
        mean: 0,
        percentile50: 0,
        percentile90: 0,
        percentile99: 0,
    };
    after(() => {
        const values = benchmark.values;
        benchmark.mean = Number((0, perf_helper_js_1.mean)(values).toFixed(2));
        benchmark.percentile50 = Number((0, perf_helper_js_1.percentile)(values, 0.5).toFixed(2));
        benchmark.percentile90 = Number((0, perf_helper_js_1.percentile)(values, 0.9).toFixed(2));
        benchmark.percentile99 = Number((0, perf_helper_js_1.percentile)(values, 0.99).toFixed(2));
        (0, report_js_1.addBenchmarkResult)(benchmark);
        /* eslint-disable no-console */
        console.log(`Benchmark name: ${benchmark.name}`);
        console.log(`Mean boot time: ${benchmark.mean}ms`);
        console.log(`50th percentile boot time: ${benchmark.percentile50}ms`);
        console.log(`90th percentile boot time: ${benchmark.percentile90}ms`);
        console.log(`99th percentile boot time: ${benchmark.percentile99}ms`);
        /* eslint-enable no-console */
    });
    for (let run = 1; run <= RUNS; run++) {
        it(`run ${run}/${RUNS}`, async () => {
            const start = perf_hooks_1.performance.now();
            await (0, helper_js_1.reloadDevTools)();
            // Ensure only 2 decimal places.
            const timeTaken = (perf_hooks_1.performance.now() - start).toFixed(2);
            benchmark.values.push(Number(timeTaken));
        });
    }
});
//# sourceMappingURL=boot-perf_test.js.map