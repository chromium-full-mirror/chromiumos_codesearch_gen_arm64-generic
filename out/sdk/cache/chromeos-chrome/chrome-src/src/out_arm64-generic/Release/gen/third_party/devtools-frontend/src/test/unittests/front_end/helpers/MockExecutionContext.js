// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as SDK from '../../../../front_end/core/sdk/sdk.js';
import { assertNotNullOrUndefined } from '../../../../front_end/core/platform/platform.js';
export class MockExecutionContext extends SDK.RuntimeModel.ExecutionContext {
    constructor(target) {
        const runtimeModel = target.model(SDK.RuntimeModel.RuntimeModel);
        assertNotNullOrUndefined(runtimeModel);
        super(runtimeModel, 1, 'test id', 'test name', 'test origin', true);
    }
    async evaluate(options, userGesture, _awaitPromise) {
        assert.isTrue(userGesture);
        return { error: 'test' };
    }
}
//# sourceMappingURL=MockExecutionContext.js.map