// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class BookmarkElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.itemId = '';
    }
    getDropTarget() {
        return null;
    }
}
export class DragData {
    constructor() {
        this.elements = null;
        this.sameProfile = false;
    }
}
