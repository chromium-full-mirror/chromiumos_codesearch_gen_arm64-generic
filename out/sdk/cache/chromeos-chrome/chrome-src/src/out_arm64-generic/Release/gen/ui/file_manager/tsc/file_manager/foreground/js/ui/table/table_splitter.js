// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This implements a splitter element which can be used to resize
 * table columns.
 *
 * Each splitter is associated with certain column and resizes it when dragged.
 * It is column model responsibility to resize other columns accordingly.
 */
import { dispatchSimpleEvent } from 'chrome://resources/ash/common/cr_deprecated.js';
import { jsSetter } from '../../../../common/js/cr_ui.js';
import { FileTableColumnModel } from '../file_table.js';
import { Splitter } from '../splitter.js';
import { Table } from './table.js';
export function createTableSplitter(table) {
    const el = document.createElement('div');
    Object.setPrototypeOf(el, TableSplitter.prototype);
    el.initialize(table);
    return el;
}
/**
 * Creates a new table splitter element.
 */
export class TableSplitter extends Splitter {
    constructor() {
        super(...arguments);
        this.table_ = null;
        this.columnIndex_ = -1;
        this.columnWidth_ = 0;
    }
    /**
     * Initializes the element.
     */
    initialize(table) {
        super.initialize();
        this.table_ = table;
        const icon = document.createElement('cr-icon-button');
        icon.setAttribute('iron-icon', 'files32:bar-dragger');
        icon.setAttribute('tabindex', '-1');
        icon.setAttribute('aria-hidden', 'true');
        icon.classList.add('splitter-icon');
        this.appendChild(icon);
        this.classList.add('table-header-splitter');
    }
    /**
     * Handles start of the splitter dragging.
     * Saves starting width of the column and changes the cursor.
     */
    handleSplitterDragStart() {
        const cm = this.table.columnModel;
        this.ownerDocument.documentElement.classList.add('col-resize');
        this.columnWidth_ = cm.getWidth(this.columnIndex);
        cm.handleSplitterDragStart();
    }
    /**
     * Handles spliter moves. Sets new width of the column.
     */
    handleSplitterDragMove(deltaX) {
        const cm = this.table.columnModel;
        if ('setWidthAndKeepTotal' in cm) {
            cm.setWidthAndKeepTotal(this.columnIndex, this.columnWidth_ + deltaX);
        }
    }
    /**
     * Handles end of the splitter dragging. Restores cursor.
     */
    handleSplitterDragEnd() {
        const cm = this.table.columnModel;
        this.ownerDocument.documentElement.classList.remove('col-resize');
        dispatchSimpleEvent(this, 'column-resize-end', /*bubbles=*/ true);
        cm.handleSplitterDragEnd();
    }
    get columnIndex() {
        return this.columnIndex_;
    }
    set columnIndex(value) {
        jsSetter(this, 'columnIndex', value);
    }
    get table() {
        return this.table_;
    }
    set table(value) {
        jsSetter(this, 'table', value);
    }
}
