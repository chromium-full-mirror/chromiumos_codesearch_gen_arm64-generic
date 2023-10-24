// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Exception used to stop ActionsProducer when they're no longer valid.
 *
 * The concurrency model function uses this exception to force the
 * ActionsProducer to stop.
 */
export class ConcurrentActionInvalidatedError extends Error {
}
/** Helper to distinguish the Action from a ActionsProducer.  */
export function isActionsProducer(value) {
    return (value.next !== undefined &&
        value.throw !== undefined);
}
