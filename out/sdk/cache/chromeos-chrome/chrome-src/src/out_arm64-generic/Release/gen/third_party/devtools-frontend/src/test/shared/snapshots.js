"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertMatchesJSONSnapshot = void 0;
const chai_1 = require("chai");
const fs_1 = require("fs");
const path_1 = require("path");
const test_runner_config_js_1 = require("../conductor/test_runner_config.js");
const CWD = (0, test_runner_config_js_1.getTestRunnerConfigSetting)('cwd', '');
const TEST_SUITE_SOURCE_DIR = (0, test_runner_config_js_1.getTestRunnerConfigSetting)('test-suite-source-dir', '');
const TEST_SUITE_PATH = (0, test_runner_config_js_1.getTestRunnerConfigSetting)('test-suite-path', '');
if (!CWD || !TEST_SUITE_SOURCE_DIR) {
    throw new Error('--cwd and --test-suite-source-dir must be provided when running the snapshot tests.');
}
if (!TEST_SUITE_PATH) {
    throw new Error('--test-suite-path must be specified');
}
const SNAPSHOTS_DIR = (0, path_1.join)(CWD, TEST_SUITE_SOURCE_DIR, 'snapshots');
const UPDATE_SNAPSHOTS = Boolean(process.env['UPDATE_SNAPSHOTS']);
let currentTestPath;
let currentTestTitle;
let snapshotIndex = 0;
beforeEach(function () {
    if (this.currentTest) {
        // The test file path is always the coloned beginning part of a test's first title.
        const [describeTitle, ...otherParts] = this.currentTest.titlePath();
        const [testPath, ...title] = describeTitle.split(':');
        // The test path is included for every describe statement, so let's clean them.
        currentTestTitle = [title.join(':'), ...otherParts.map(part => part.replaceAll(`${testPath}: `, ''))]
            .map(part => part.trim())
            .join(' ');
        // The ITERATIONS environment variable suffixes tests after the first test,
        // so we need to remove the suffix for snapshots to match.
        const iterationSuffix = /( \(#[0-9]+\))$/;
        const match = iterationSuffix.exec(currentTestTitle);
        if (match) {
            currentTestTitle = currentTestTitle.slice(0, -match[1].length);
        }
        currentTestPath = testPath && (0, path_1.normalize)(testPath.trim());
        snapshotIndex = 0;
    }
});
after(() => {
    if (UPDATE_SNAPSHOTS) {
        saveSnapshotsIfTaken();
    }
});
let currentSnapshotPath;
let currentSnapshot = {};
const saveSnapshotsIfTaken = () => {
    if (currentSnapshotPath !== undefined && currentSnapshot !== undefined) {
        (0, fs_1.mkdirSync)((0, path_1.dirname)(currentSnapshotPath), { recursive: true });
        (0, fs_1.writeFileSync)(currentSnapshotPath, JSON.stringify(currentSnapshot, undefined, 2));
    }
    currentSnapshotPath = undefined;
    currentSnapshot = {};
};
const restoreSnapshots = () => {
    if (!currentSnapshotPath || !(0, fs_1.existsSync)(currentSnapshotPath)) {
        throw new Error(`Could not find snapshot for ${currentSnapshotPath}. You can update the snapshots by running the tests with UPDATE_SNAPSHOTS=1.`);
    }
    currentSnapshot = JSON.parse((0, fs_1.readFileSync)(currentSnapshotPath, 'utf-8'));
};
const getSnapshotPath = (testPath) => {
    return (0, path_1.join)(SNAPSHOTS_DIR, (0, path_1.dirname)(testPath), `${(0, path_1.basename)(testPath, (0, path_1.extname)(testPath))}.json`);
};
const getOrUpdateSnapshot = (value, options) => {
    if (!currentTestPath || !currentTestTitle) {
        throw new Error('Not using snapshot helper in test');
    }
    const name = options.name ?? ++snapshotIndex;
    const testName = `${currentTestTitle} - ${name}`;
    const path = getSnapshotPath(currentTestPath);
    if (UPDATE_SNAPSHOTS) {
        if (currentSnapshotPath !== path) {
            saveSnapshotsIfTaken();
            currentSnapshotPath = path;
        }
        currentSnapshot[testName] = value;
    }
    else {
        if (currentSnapshotPath !== path) {
            currentSnapshotPath = path;
            restoreSnapshots();
        }
    }
    return currentSnapshot[testName];
};
/**
 * Asserts that the given value matches a saved stringified version of the
 * value.
 *
 * To update the saved version, tests must be run with UPDATE_SNAPSHOTS=1.
 *
 * Saved snapshots will appear in the `<test-suite-root>/snapshots` directory,
 * prefixed with the path of the test.
 *
 * If multiple snapshots are taken in a single test, snapshots will be numbered
 * and thus become order dependent. In this case, using
 * {@link SnapshotOptions.name} to create named snapshots is recommended.
 *
 * @param value - The value to assert.
 * @param options - Options to configure snapshot behavior.
 */
const assertMatchesJSONSnapshot = (value, options = {}) => {
    chai_1.assert.deepEqual(value, getOrUpdateSnapshot(value, options));
};
exports.assertMatchesJSONSnapshot = assertMatchesJSONSnapshot;
//# sourceMappingURL=snapshots.js.map