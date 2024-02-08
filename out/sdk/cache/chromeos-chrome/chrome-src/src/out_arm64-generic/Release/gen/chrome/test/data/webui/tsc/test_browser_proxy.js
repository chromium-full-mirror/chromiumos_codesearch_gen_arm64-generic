// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from '//resources/js/assert.js';
import { PromiseResolver } from '//resources/js/promise_resolver.js';
export class TestBrowserProxy {
    resolverMap_;
    /**
     * @param methodNames Names of all methods whose calls need to be tracked.
     */
    constructor(methodNames = []) {
        this.resolverMap_ = new Map();
        methodNames.forEach(methodName => {
            this.createMethodData_(methodName);
        });
    }
    /**
     * Called by subclasses when a tracked method is called from the code that
     * is being tested.
     * @param args Arguments to be forwarded to the testing code, useful for
     *     checking whether the proxy method was called with the expected
     *     arguments.
     */
    methodCalled(methodName, ...args) {
        const methodData = this.resolverMap_.get(methodName);
        assert(methodData);
        const storedArgs = args.length === 1 ? args[0] : args;
        methodData.args.push(storedArgs);
        this.resolverMap_.set(methodName, methodData);
        methodData.resolver.resolve(storedArgs);
    }
    /**
     * @return A promise that is resolved when the given method is called.
     */
    whenCalled(methodName) {
        return this.getMethodData_(methodName).resolver.promise;
    }
    /**
     * Resets the PromiseResolver associated with the given method.
     */
    resetResolver(methodName) {
        this.getMethodData_(methodName);
        this.createMethodData_(methodName);
    }
    /**
     * Resets all PromiseResolvers.
     */
    reset() {
        this.resolverMap_.forEach((_value, methodName) => {
            this.createMethodData_(methodName);
        });
    }
    /**
     * Get number of times method is called.
     */
    getCallCount(methodName) {
        return this.getMethodData_(methodName).args.length;
    }
    /**
     * Returns the arguments of calls made to |method|.
     */
    getArgs(methodName) {
        return this.getMethodData_(methodName).args;
    }
    /**
     * Try to give programmers help with mistyped methodNames.
     */
    getMethodData_(methodName) {
        // Tip: check that the |methodName| is being passed to |this.constructor|.
        const methodData = this.resolverMap_.get(methodName);
        assert(methodData, `Method '${methodName}' not found in TestBrowserProxy.`);
        return methodData;
    }
    /**
     * Creates a new |MethodData| for |methodName|.
     */
    createMethodData_(methodName) {
        this.resolverMap_.set(methodName, { resolver: new PromiseResolver(), args: [] });
    }
}
