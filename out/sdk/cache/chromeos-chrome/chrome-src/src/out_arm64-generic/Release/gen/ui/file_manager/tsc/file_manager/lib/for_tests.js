// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { BaseStore, Slice } from './base_store.js';
/** Async function to emulate async API calls. */
export async function sleep(time) {
    let resolve;
    const p = new Promise((r => resolve = r));
    setTimeout((v) => resolve(v), time);
    return p;
}
/** Counts how many times `onStateChanged()` was called. */
export class TestSubscriber {
    constructor() {
        this.calledCounter = 0;
    }
    onStateChanged(_state) {
        this.calledCounter += 1;
    }
}
/**
 * Creates new Store, subscriber and dispatchedActions.
 * These can be called multiple times for each test, which create new
 * independent instances of those.
 */
export function setupTestStore() {
    // All actions dispatched via the store and processed by the reducer.
    const dispatchedActions = Array(0);
    const testSlice = new Slice('test');
    const createTestAction = testSlice.addReducer('test', (state, payload) => {
        dispatchedActions.push({ type: 'test', payload });
        return {
            numVisitors: (state.numVisitors || 0) + 1,
            latestPayload: payload || undefined,
        };
    });
    const createStepAction = testSlice.addReducer('step', (state, payload) => {
        dispatchedActions.push({ type: 'step', payload });
        return state;
    });
    /**
     * This is an Actions Producer implemented.
     *
     * This produces 4 actions.
     *
     * Imagine that each sleep() is an API call.
     * @param payload: A string to identify the call to foo.
     */
    async function* actionsProducerSuccess(payload) {
        // Produce an action before any async code.
        yield createStepAction(`0 ${payload}`);
        let counter = 0;
        for (const waitingTime of [2, 2]) {
            counter++;
            // Emulate an async API call.
            await sleep(waitingTime);
            yield createStepAction(`${counter} ${payload}`);
        }
        // Yield the final action to the store.
        yield createStepAction(`final ${payload}`);
    }
    /** ActionsProducer that yields an empty/undefined action. */
    async function* producesEmpty(payload) {
        yield createStepAction(`0 ${payload}`);
        yield;
        yield createStepAction(`final ${payload}`);
    }
    const store = new BaseStore({}, [testSlice]);
    const subscriber = new TestSubscriber();
    return {
        store,
        subscriber,
        dispatchedActions,
        createTestAction,
        producesEmpty,
        actionsProducerSuccess,
    };
}
