// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export function emptyState() {
    return {
        loading: {
            recentImages: false,
            recentImageData: {},
            thumbnails: false,
            currentSelected: false,
            setImage: 0,
        },
        recentImageData: {},
        recentImages: null,
        thumbnails: null,
        currentSelected: null,
        pendingSelected: null,
    };
}
