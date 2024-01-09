// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from './test_browser_proxy.js';
// clang-format on
/**
 * Test implementation
 */
export class TestPluralStringProxy extends TestBrowserProxy {
    text = 'some text';
    constructor() {
        super([
            'getPluralString',
        ]);
    }
    getPluralString(messageName, itemCount) {
        this.methodCalled('getPluralString', { messageName, itemCount });
        return Promise.resolve(this.text);
    }
    getPluralStringTupleWithComma(messageName1, itemCount1, messageName2, itemCount2) {
        this.methodCalled('getPluralStringTupleWithComma', { messageName1, itemCount1, messageName2, itemCount2 });
        return Promise.resolve(this.text);
    }
    getPluralStringTupleWithPeriods(messageName1, itemCount1, messageName2, itemCount2) {
        this.methodCalled('getPluralStringTupleWithPeriods', { messageName1, itemCount1, messageName2, itemCount2 });
        return Promise.resolve(this.text);
    }
}
