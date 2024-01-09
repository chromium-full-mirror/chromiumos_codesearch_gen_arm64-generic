// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { Store } from 'chrome://resources/js/store.js';
import { assertDeepEquals, assertEquals, assertFalse } from 'chrome://webui-test/chai_assert.js';
function reducer({ value }, action) {
    switch (action.name) {
        case 'append':
            return { value: value + action.value };
    }
}
class TestObserver {
    values = [];
    onStateChanged({ value }) {
        this.values.push(value);
    }
}
suite('StoreTest', function () {
    let store;
    setup(function () {
        store = new Store({ value: '' }, reducer);
    });
    test('pre-init dispatch queues actions', function () {
        assertFalse(store.isInitialized(), 'store not initialized yet');
        store.dispatch({ name: 'append', value: '+pre-init-action' });
        store.dispatch({ name: 'append', value: '+second-action' });
        assertEquals('', store.data.value, 'no actions processed yet');
        store.init({ value: 'initial' });
        assertEquals('initial+pre-init-action+second-action', store.data.value, 'append action processed');
    });
    test('notifies observers of changes', function () {
        store.init({ value: '' });
        const observer = new TestObserver();
        store.addObserver(observer);
        const actions = [
            { name: 'append', value: 'a' },
            { name: 'append', value: 'b' },
            { name: 'append', value: 'c' },
        ];
        actions.forEach(action => store.dispatch(action));
        assertDeepEquals(['a', 'ab', 'abc'], observer.values, 'each state is recorded by observer');
    });
    test('batches changes together after beginBatchUpdate', function () {
        store.init({ value: '' });
        const observer = new TestObserver();
        store.addObserver(observer);
        store.dispatch({ name: 'append', value: 'a' });
        store.beginBatchUpdate();
        const actions = [
            { name: 'append', value: 'x' },
            { name: 'append', value: 'yz' },
        ];
        actions.forEach(action => store.dispatch(action));
        assertEquals('axyz', store.data.value, 'batch update actions still update store data');
        assertDeepEquals(['a'], observer.values, 'observers are behind actual store data');
        store.endBatchUpdate();
        assertDeepEquals(['a', 'axyz'], observer.values, 'observed values grouped the batch actions');
    });
    test('removeObserver stops updates', function () {
        store.init({ value: '' });
        const observer = new TestObserver();
        store.addObserver(observer);
        store.dispatch({ name: 'append', value: 'a' });
        store.dispatch({ name: 'append', value: 'b' });
        store.removeObserver(observer);
        store.dispatch({ name: 'append', value: 'c' });
        assertDeepEquals(['a', 'ab'], observer.values, 'append c not received after removeObserver');
    });
});
