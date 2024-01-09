// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Fake implementation of PasspointService for testing.
 */
import { assert } from 'chrome://resources/ash/common/assert.js';
export class FakePasspointService {
    subs_;
    constructor() {
        this.subs_ = new Map();
    }
    addSubscription(sub) {
        assert(sub !== undefined);
        this.subs_.set(sub.id, sub);
    }
    resetForTest() {
        this.subs_ = new Map();
    }
    getPasspointSubscription(id) {
        return new Promise(resolve => {
            const sub = this.subs_.get(id);
            resolve({ result: sub ? sub : null });
        });
    }
    listPasspointSubscriptions() {
        return Promise.resolve({ result: Array.from(this.subs_, ([_, value]) => (value)) });
    }
    registerPasspointListener(_) {
        // Listener is ignored for now.
    }
    deletePasspointSubscription(id) {
        return new Promise(resolve => {
            resolve({ success: this.subs_.delete(id) });
        });
    }
}
