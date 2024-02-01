// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Saves computed values to avoid recalculating them repeatedly.
 *
 * Caches are single-use, and abandoned after the top-level question is answered
 * (e.g. what are all the interesting descendants of this node?)
 */
export class SACache {
    isActionable = new Map();
    isGroup = new Map();
    isInterestingSubtree = new Map();
}
