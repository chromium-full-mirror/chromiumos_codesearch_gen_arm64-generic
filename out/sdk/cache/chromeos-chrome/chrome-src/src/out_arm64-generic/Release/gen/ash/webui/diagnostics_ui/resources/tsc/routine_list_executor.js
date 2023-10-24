// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { RoutineRunnerReceiver } from './system_routine_controller.mojom-webui.js';
/**
 * Represents the execution progress of a test routine.
 */
export var ExecutionProgress;
(function (ExecutionProgress) {
    ExecutionProgress[ExecutionProgress["NOT_STARTED"] = 0] = "NOT_STARTED";
    ExecutionProgress[ExecutionProgress["RUNNING"] = 1] = "RUNNING";
    ExecutionProgress[ExecutionProgress["COMPLETED"] = 2] = "COMPLETED";
    ExecutionProgress[ExecutionProgress["CANCELLED"] = 3] = "CANCELLED";
    ExecutionProgress[ExecutionProgress["SKIPPED"] = 4] = "SKIPPED";
    ExecutionProgress[ExecutionProgress["WARNING"] = 5] = "WARNING";
})(ExecutionProgress || (ExecutionProgress = {}));
/**
 * Represents the status of the test suite.
 */
export var TestSuiteStatus;
(function (TestSuiteStatus) {
    TestSuiteStatus[TestSuiteStatus["NOT_RUNNING"] = 0] = "NOT_RUNNING";
    TestSuiteStatus[TestSuiteStatus["RUNNING"] = 1] = "RUNNING";
    TestSuiteStatus[TestSuiteStatus["COMPLETED"] = 2] = "COMPLETED";
})(TestSuiteStatus || (TestSuiteStatus = {}));
/**
 * Represents the input to a single routine-result-entry in a
 * routine-result-list.
 */
export class ResultStatusItem {
    constructor(routine, progress = ExecutionProgress.NOT_STARTED) {
        this.result = null;
        this.routine = routine;
        this.progress = progress;
    }
}
/**
 * Implements the RoutineRunnerInterface remote. Creates a resolver and resolves
 * it when the onRoutineResult function is called.
 */
class ExecutionContext {
    constructor() {
        this.routineRunner = new RoutineRunnerReceiver(this);
        this.resolver = new PromiseResolver();
    }
    /**
     * Implements RoutineRunnerInterface.onRoutineResult.
     */
    onRoutineResult(result) {
        this.resolver.resolve(result);
        this.close();
    }
    whenComplete() {
        return this.resolver.promise;
    }
    close() {
        this.routineRunner.$.close();
    }
    cancel() {
        this.resolver.resolve(null);
    }
}
/**
 * Executes a list of test routines, firing a status callback with a
 * ResultStatusItem before and after each test. The resulting ResultStatusItem
 * maps directly to an entry in a routine-result-list.
 */
export class RoutineListExecutor {
    constructor(routineController) {
        this.currentExecutionContext = null;
        this.routinesCancelled = false;
        this.routineController = routineController;
    }
    /**
     * Executes a list of routines providing a status callback as each test
     * starts and finishes. The return promise will resolve when all tests are
     * completed.
     */
    runRoutines(routines, statusCallback) {
        assert(routines.length > 0);
        // Create a chain of promises that each schedule the next routine when
        // they complete, firing the status callback before and after each test.
        let promise = Promise.resolve();
        routines.forEach((name) => {
            promise = promise.then(() => {
                // Notify the status callback of the test status.
                if (this.routinesCancelled) {
                    statusCallback(new ResultStatusItem(name, ExecutionProgress.CANCELLED));
                    return ExecutionProgress.CANCELLED;
                }
                statusCallback(new ResultStatusItem(name, ExecutionProgress.RUNNING));
                this.currentExecutionContext = new ExecutionContext();
                // Create a new remote and execute the next test.
                this.routineController.runRoutine(name, this.currentExecutionContext.routineRunner.$
                    .bindNewPipeAndPassRemote());
                // When the test completes, notify the status callback of the
                // result.
                return this.currentExecutionContext.whenComplete().then((info) => {
                    let progress = ExecutionProgress.CANCELLED;
                    let result = null;
                    if (info !== null) {
                        assert(info.type === name);
                        progress = ExecutionProgress.COMPLETED;
                        result = info.result;
                    }
                    const status = new ResultStatusItem(name, progress);
                    status.result = result;
                    statusCallback(status);
                    return progress;
                });
            });
        });
        return promise;
    }
    close() {
        if (this.currentExecutionContext) {
            this.currentExecutionContext.close();
        }
    }
    cancel() {
        if (this.currentExecutionContext) {
            this.routinesCancelled = true;
            this.currentExecutionContext.cancel();
        }
    }
}
