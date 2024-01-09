// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ParentAccessParams_FlowType } from 'chrome://parent-access/parent_access_ui.mojom-webui.js';
function strToMojoString16(str) {
    return { data: str.split('').map(ch => ch.charCodeAt(0)) };
}
export function buildWebApprovalsParams() {
    const webApprovalsParams = {
        url: { url: 'https://testing.com' },
        childDisplayName: strToMojoString16('Child name'),
        faviconPngBytes: [],
    };
    const parentAccessParams = {
        flowType: ParentAccessParams_FlowType.kWebsiteAccess,
        flowTypeParams: { webApprovalsParams },
        isDisabled: false,
    };
    return parentAccessParams;
}
export function buildExtensionApprovalsParamsWithPermissions(isDisabled = false, hasDetails = false) {
    const permission = {
        permission: strToMojoString16('permission'),
        details: hasDetails ? strToMojoString16('details') : strToMojoString16(''),
    };
    const extensionApprovalsParams = {
        extensionName: strToMojoString16('Extension name'),
        iconPngBytes: [],
        childDisplayName: strToMojoString16('Child Name'),
        permissions: [permission],
    };
    const parentAccessParams = {
        flowType: ParentAccessParams_FlowType.kExtensionAccess,
        flowTypeParams: { extensionApprovalsParams },
        isDisabled: isDisabled,
    };
    return parentAccessParams;
}
export function buildExtensionApprovalsParamsWithoutPermissions(isDisabled = false) {
    const extensionApprovalsParams = {
        extensionName: strToMojoString16('Extension name'),
        iconPngBytes: [],
        childDisplayName: strToMojoString16('Child Name'),
        permissions: [],
    };
    const parentAccessParams = {
        flowType: ParentAccessParams_FlowType.kExtensionAccess,
        isDisabled: isDisabled,
        flowTypeParams: { extensionApprovalsParams },
    };
    return parentAccessParams;
}
export function clearDocumentBody() {
    document.body.innerHTML = window.trustedTypes.emptyHTML;
}
