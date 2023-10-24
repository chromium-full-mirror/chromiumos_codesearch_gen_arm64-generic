// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ParentAccessUiHandler } from './parent_access_ui.mojom-webui.js';
let parentAccessUIHandler;
let parentAccessParams;
export function getParentAccessUiHandler() {
    if (!parentAccessUIHandler) {
        parentAccessUIHandler = ParentAccessUiHandler.getRemote();
    }
    return parentAccessUIHandler;
}
export async function getParentAccessParams() {
    if (!parentAccessParams) {
        parentAccessParams =
            await getParentAccessUiHandler().getParentAccessParams();
    }
    return parentAccessParams;
}
// Sets a ParentAccessUIHandler for testing.
export function setParentAccessUiHandlerForTest(handler) {
    parentAccessUIHandler = handler;
}
// Clears the cached handler and params for testing.
export function resetParentAccessHandlerForTest() {
    parentAccessUIHandler = null;
    parentAccessParams = null;
}
