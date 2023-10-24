// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export function emptyState() {
    return {
        defaultUserImages: null,
        image: null,
        info: null,
        profileImage: null,
        isCameraPresent: false,
        lastExternalUserImage: null,
        imageIsEnterpriseManaged: null,
    };
}
