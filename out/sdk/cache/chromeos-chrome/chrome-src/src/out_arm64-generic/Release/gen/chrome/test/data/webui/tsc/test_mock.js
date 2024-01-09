// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
/**
 * A base class for all test mocks to inherit from. Provides helper
 * methods for allowing tests to track when a method was called.
 *
 * Must pass a base class T for the mock.
 */
export class TestMock {
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
     * Creates a |TestMock|, which has mock functions for all functions of
     * class |clazz|.
     */
    static fromClass(clazz) {
        const methodNames = Object.getOwnPropertyNames(clazz.prototype)
            .filter(methodName => methodName !== 'constructor');
        const proxy = new TestMock(methodNames);
        proxy.mockMethods_(methodNames, clazz);
        return proxy;
    }
    /**
     * Creates a mock implementation for each method name. These mocks allow tests
     * to either set a result when the mock is called using
     * |setResultFor(methodName)|, or set a result mapper function that will be
     * invoked when a method is called using |setResultMapperFor(methodName)|.
     */
    mockMethods_(methodNames, clazz) {
        methodNames.forEach(methodName => {
            const descriptor = Object.getOwnPropertyDescriptor(clazz.prototype, methodName);
            const mockedMethod = (...args) => this.methodCalled(methodName, ...args);
            if (descriptor.get) {
                descriptor.get = mockedMethod;
            }
            if (descriptor.set) {
                descriptor.set = mockedMethod;
            }
            if (descriptor.value && descriptor.value instanceof Function) {
                descriptor.value = mockedMethod;
            }
            Object.defineProperty(this, methodName, descriptor);
        });
    }
    /**
     * Called by subclasses when a tracked method is called from the code that
     * is being tested.
     * @param args Arguments to be forwarded to the testing code, useful for
     *     checking whether the proxy method was called with the expected
     *     arguments.
     * @return If set the result registered via |setResult[Mapper]For|.
     */
    methodCalled(methodName, ...args) {
        const methodData = this.resolverMap_.get(methodName);
        assert(methodData);
        const storedArgs = args.length === 1 ? args[0] : args;
        methodData.args.push(storedArgs);
        this.resolverMap_.set(methodName, methodData);
        methodData.resolver.resolve(storedArgs);
        if (methodData.resultMapper) {
            return methodData.resultMapper(...args);
        }
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
     * Sets a function |resultMapper| that is called with the original arguments
     * passed to method named |methodName|. This allows a test to return a unique
     * object each method invovation or have the returned value be different based
     * on the arguments.
     */
    setResultMapperFor(methodName, resultMapper) {
        this.getMethodData_(methodName).resultMapper = resultMapper;
    }
    /**
     * Sets the return value of a method.
     */
    setResultFor(methodName, value) {
        this.getMethodData_(methodName).resultMapper = () => value;
    }
    /**
     * Try to give programmers help with mistyped methodNames.
     */
    getMethodData_(methodName) {
        // Tip: check that the |methodName| is being passed to |this.constructor|.
        const methodData = this.resolverMap_.get(methodName);
        assert(methodData, `Method '${String(methodName)}' not found in TestMock.`);
        return methodData;
    }
    /**
     * Creates a new |MethodData| for |methodName|.
     */
    createMethodData_(methodName) {
        this.resolverMap_.set(methodName, { resolver: new PromiseResolver(), args: [] });
    }
}
