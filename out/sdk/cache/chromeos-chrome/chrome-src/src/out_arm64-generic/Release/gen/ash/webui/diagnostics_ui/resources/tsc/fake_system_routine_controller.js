// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FakeMethodResolver } from 'chrome://resources/ash/common/fake_method_resolver.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { RoutineType, StandardRoutineResult } from './system_routine_controller.mojom-webui.js';
export class FakeSystemRoutineController {
    constructor() {
        this.methods = new FakeMethodResolver();
        this.routineResults = new Map();
        /**
         * Controls the delay resolving routines. By default this is 0 and routines
         * resolve immediately, but still asynchronously.
         */
        this.delayTimeMilliseconds = 0;
        /**
         * Holds the resolver for the next routine waiting to be resolved. This
         * will be null if no routines are in progress.
         */
        this.resolver = null;
        // Holds the remote that is called on completion.
        this.remote = null;
        // Holds the type of the routine currently running.
        this.routineType = null;
        this.registerMethods();
    }
    getAllRoutines() {
        return [
            RoutineType.kBatteryCharge,
            RoutineType.kBatteryDischarge,
            RoutineType.kCpuStress,
            RoutineType.kCpuCache,
            RoutineType.kCpuFloatingPoint,
            RoutineType.kCpuPrime,
            RoutineType.kMemory,
            RoutineType.kCaptivePortal,
            RoutineType.kDnsLatency,
            RoutineType.kDnsResolution,
            RoutineType.kDnsResolverPresent,
            RoutineType.kGatewayCanBePinged,
            RoutineType.kHasSecureWiFiConnection,
            RoutineType.kHttpFirewall,
            RoutineType.kHttpsFirewall,
            RoutineType.kHttpsLatency,
            RoutineType.kLanConnectivity,
            RoutineType.kSignalStrength,
            RoutineType.kArcHttp,
            RoutineType.kArcPing,
            RoutineType.kArcDnsResolution,
        ];
    }
    // Implements SystemRoutineController.GetSupportedRoutines
    getSupportedRoutines() {
        return this.methods.resolveMethod('getSupportedRoutines');
    }
    // Sets the value that will be returned when calling getSupportedRoutines().
    setFakeSupportedRoutines(routines) {
        this.methods.setResult('getSupportedRoutines', { routines: routines });
    }
    // Implements SystemRoutineController.RunRoutine.
    runRoutine(routineType, remoteRunner) {
        this.resolver = new PromiseResolver();
        this.remote = remoteRunner;
        this.routineType = routineType;
        // If there is a positive or zero delay then setup a timer, otherwise
        // the routine will wait until resolveRoutineForTesting() is called.
        if (this.delayTimeMilliseconds >= 0) {
            setTimeout(() => {
                this.fireRemoteWithResult();
            }, this.delayTimeMilliseconds);
        }
    }
    // Setup method resolvers.
    registerMethods() {
        this.methods.register('getSupportedRoutines');
    }
    setFakeStandardRoutineResult(routineType, routineResult) {
        this.routineResults.set(routineType, { simpleResult: routineResult });
    }
    setFakePowerRoutineResult(routineType, routineResult) {
        this.routineResults.set(routineType, { powerResult: routineResult });
    }
    /**
     * Sets how long each routine waits before resolving. Setting to a value
     * >=0 will use a timer to delay resolution automatically. Setting to -1
     * will allow a caller to manually determine when each routine resolves.
     *
     * If set to -1, the caller can call resolveRoutineForTesting() and
     * isRoutineInProgressForTesting() to manually control in unit tests.
     */
    setDelayTimeInMillisecondsForTesting(delayMilliseconds) {
        assert(delayMilliseconds >= -1);
        this.delayTimeMilliseconds = delayMilliseconds;
    }
    // Returns the pending run routine promise.
    getRunRoutinePromiseForTesting() {
        assert(this.resolver != null);
        return this.resolver.promise;
    }
    /**
     * Resolves a routine that is in progress. The delay time must be set to
     * -1 or this method will assert. It will also assert if there is no
     * routine running. Use isRoutineInProgressForTesting() to determine if
     * a routing is currently in progress.
     */
    resolveRoutineForTesting() {
        assert(this.delayTimeMilliseconds == -1);
        assert(this.resolver != null);
        const promise = this.resolver.promise;
        this.fireRemoteWithResult();
        return promise;
    }
    /**
     * Returns true if a routine is in progress. The delay time must be -1
     * otherwise this function will assert.
     */
    isRoutineInProgressForTesting() {
        assert(this.delayTimeMilliseconds == -1);
        return this.resolver != null;
    }
    // Returns the expected result for a running routine.
    getResultInfo() {
        assert(this.routineType != null);
        let result = this.routineResults.get(this.routineType);
        if (result == undefined) {
            result = { simpleResult: StandardRoutineResult.kExecutionError };
        }
        const resultInfo = {
            type: this.routineType,
            result: result,
        };
        return resultInfo;
    }
    // Fires the remote callback with the expected result.
    fireRemoteWithResult() {
        this.remote.onRoutineResult(this.getResultInfo());
        this.resolver.resolve(null);
        this.resolver = null;
        this.remote = null;
        this.routineType = null;
    }
}
