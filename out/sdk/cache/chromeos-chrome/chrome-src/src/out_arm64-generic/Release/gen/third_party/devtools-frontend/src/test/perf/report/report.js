"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeReport = exports.clearResults = exports.addBenchmarkResult = void 0;
const fs = require("fs");
const path_1 = require("path"); // eslint-disable-line rulesdir/es_modules_import
const results = [];
function addBenchmarkResult(benchmark) {
    results.push(benchmark);
}
exports.addBenchmarkResult = addBenchmarkResult;
function clearResults() {
    results.length = 0;
}
exports.clearResults = clearResults;
function writeReport() {
    // This points to perf-data under devtools root directory
    // devtools-frontend/perf-data.
    const directory = (0, path_1.join)(__dirname, '..', '..', '..', '..', '..', '..', 'perf-data');
    fs.mkdirSync(directory, { recursive: true });
    const filePath = (0, path_1.join)(directory, 'devtools-perf.json');
    fs.writeFileSync(filePath, JSON.stringify(results), { encoding: 'utf8' });
    // eslint-disable-next-line no-console
    console.log(`perf report file was written to ${filePath}`);
}
exports.writeReport = writeReport;
//# sourceMappingURL=report.js.map