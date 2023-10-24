// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as SDK from '../../../../front_end/core/sdk/sdk.js';
export function setupPageResourceLoaderForSourceMap(sourceMapContent) {
    const loadSourceMap = async (_url) => {
        return {
            success: true,
            content: sourceMapContent,
            errorDescription: { message: '', statusCode: 0, netError: 0, netErrorName: '', urlValid: true },
        };
    };
    SDK.PageResourceLoader.PageResourceLoader.instance({ forceNew: true, loadOverride: loadSourceMap, maxConcurrentLoads: 1 });
}
//# sourceMappingURL=SourceMapHelpers.js.map