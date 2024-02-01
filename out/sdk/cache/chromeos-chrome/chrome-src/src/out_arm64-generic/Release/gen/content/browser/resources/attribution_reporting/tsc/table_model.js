// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class TableModel {
    cols;
    sortIdx;
    emptyRowText;
    rowsChangedListeners = new Set();
    constructor(cols, sortIdx, emptyRowText) {
        this.cols = cols;
        this.sortIdx = sortIdx;
        this.emptyRowText = emptyRowText;
    }
    styleRow(_tr, _data) { }
    empty() {
        return this.getRows().length === 0;
    }
    notifyRowsChanged() {
        this.rowsChangedListeners.forEach(f => f());
    }
}
export class ArrayTableModel extends TableModel {
    rows_ = [];
    constructor(cols, sortIdx, emptyRowText) {
        super(cols, sortIdx, emptyRowText);
    }
    getRows() {
        return this.rows_;
    }
    setRows(rows) {
        this.rows_ = rows;
        this.notifyRowsChanged();
    }
    addRow(row) {
        // Prevent the page from consuming ever more memory if the user leaves the
        // page open for a long time.
        // TODO(apaseltiner): This should really remove the oldest rather than clear
        // out everything.
        if (this.rows_.length >= 1000) {
            this.rows_ = [];
        }
        this.rows_.push(row);
        this.notifyRowsChanged();
    }
    clear() {
        this.setRows([]);
    }
}
