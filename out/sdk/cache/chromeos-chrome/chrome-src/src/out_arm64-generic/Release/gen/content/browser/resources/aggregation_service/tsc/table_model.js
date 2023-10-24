// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class TableModel {
    constructor() {
        this.cols = [];
        this.emptyRowText = '';
        this.sortIdx = -1;
        this.rowsChangedListeners = new Set();
    }
    styleRow(_tr, _data) { }
    getRows() {
        return [];
    }
    notifyRowsChanged() {
        this.rowsChangedListeners.forEach(f => f());
    }
}
