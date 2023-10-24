// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class TitleItem {
    constructor(title, expandable = false, expanded = false) {
        this.title = title;
        this.expandable = expandable;
        this.expanded = expanded;
    }
}
