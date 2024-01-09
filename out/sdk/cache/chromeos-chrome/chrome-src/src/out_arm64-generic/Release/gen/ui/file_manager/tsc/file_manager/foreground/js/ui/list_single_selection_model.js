// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { dispatchPropertyChange } from 'chrome://resources/ash/common/cr_deprecated.js';
import { NativeEventTarget as EventTarget } from 'chrome://resources/ash/common/event_target.js';
/**
 * Creates a new selection model that is to be used with lists. This only
 * allows a single index to be selected.
 */
export class ListSingleSelectionModel extends EventTarget {
    /**
     * @param length The number items in the selection.
     */
    constructor(length) {
        super();
        // True if any item could be lead or anchor. False if only selected ones.
        this.independentLeadItem_ = false;
        this.leadIndex_ = -1;
        this.selectedIndex_ = -1;
        this.selectedIndexBefore_ = -1;
        this.changeCount_ = null;
        this.length_ = length ?? 0;
    }
    /**
     * The number of items in the model.
     */
    get length() {
        return this.length_;
    }
    /**
     *   The selected indexes.
     */
    get selectedIndexes() {
        const i = this.selectedIndex;
        return i !== -1 ? [this.selectedIndex] : [];
    }
    set selectedIndexes(indexes) {
        this.selectedIndex_ = indexes.length ? indexes[0] : -1;
    }
    /**
     * Convenience getter which returns the first selected index.
     * Setter also changes lead and anchor indexes if value is nonegative.
     */
    get selectedIndex() {
        return this.selectedIndex_;
    }
    set selectedIndex(selectedIndex) {
        const oldSelectedIndex = this.selectedIndex;
        const i = Math.max(-1, Math.min(this.length_ - 1, selectedIndex));
        if (i !== oldSelectedIndex) {
            this.beginChange();
            this.selectedIndex_ = i;
            this.leadIndex = i >= 0 ? i : this.leadIndex;
            this.endChange();
        }
    }
    /**
     * Selects a range of indexes, starting with {@code start} and ends with
     * {@code end}.
     * @param start The first index to select.
     * @param end The last index to select.
     */
    selectRange(start, end) {
        // Only select first index.
        this.selectedIndex = Math.min(start, end);
    }
    /**
     * Selects all indexes.
     */
    selectAll() {
        // Select all is not allowed on a single selection model
    }
    /**
     * Clears the selection
     */
    clear() {
        this.beginChange();
        this.length_ = 0;
        this.selectedIndex = this.anchorIndex = this.leadIndex = -1;
        this.endChange();
    }
    /**
     * Unselects all selected items.
     */
    unselectAll() {
        this.selectedIndex = -1;
    }
    /**
     * Sets the selected state for an index.
     * @param index The index to set the selected state for.
     * @param b Whether to select the index or not.
     */
    setIndexSelected(index, b) {
        // Only allow selection
        const oldSelected = index === this.selectedIndex_;
        if (oldSelected === b) {
            return;
        }
        if (b) {
            this.selectedIndex = index;
        }
        else if (index === this.selectedIndex_) {
            this.selectedIndex = -1;
        }
    }
    /**
     * Whether a given index is selected or not.
     * @param index The index to check.
     * @return Whether an index is selected.
     */
    getIndexSelected(index) {
        return index === this.selectedIndex_;
    }
    /**
     * This is used to begin batching changes. Call {@code endChange} when you
     * are done making changes.
     */
    beginChange() {
        if (!this.changeCount_) {
            this.changeCount_ = 0;
            this.selectedIndexBefore_ = this.selectedIndex_;
        }
        this.changeCount_++;
    }
    /**
     * Call this after changes are done and it will dispatch a change event if
     * any changes were actually done.
     */
    endChange() {
        this.changeCount_--;
        if (!this.changeCount_) {
            if (this.selectedIndexBefore_ !== this.selectedIndex_) {
                const indexes = [this.selectedIndexBefore_, this.selectedIndex_];
                this.dispatchEvent(new CustomEvent('change', {
                    detail: {
                        changes: indexes.filter(index => index !== -1)
                            .map((index) => ({
                            index: index,
                            selected: index === this.selectedIndex_,
                        })),
                    },
                }));
            }
        }
    }
    /**
     * The leadIndex is used with multiple selection and it is the index that
     * the user is moving using the arrow keys.
     */
    get leadIndex() {
        return this.leadIndex_;
    }
    set leadIndex(leadIndex) {
        const li = this.adjustIndex_(leadIndex);
        if (li !== this.leadIndex_) {
            const oldLeadIndex = this.leadIndex_;
            this.leadIndex_ = li;
            dispatchPropertyChange(this, 'leadIndex', li, oldLeadIndex);
            dispatchPropertyChange(this, 'anchorIndex', li, oldLeadIndex);
        }
    }
    adjustIndex_(index) {
        index = Math.max(-1, Math.min(this.length_ - 1, index));
        if (!this.independentLeadItem_) {
            index = this.selectedIndex;
        }
        return index;
    }
    /**
     * The anchorIndex is used with multiple selection.
     */
    get anchorIndex() {
        return this.leadIndex;
    }
    set anchorIndex(anchorIndex) {
        this.leadIndex = anchorIndex;
    }
    /**
     * Whether the selection model supports multiple selected items.
     */
    get multiple() {
        return false;
    }
    /**
     * Adjusts the selection after reordering of items in the table.
     * @param permutation The reordering permutation.
     */
    adjustToReordering(permutation) {
        if (this.leadIndex !== -1) {
            this.leadIndex = permutation[this.leadIndex];
        }
        const oldSelectedIndex = this.selectedIndex;
        if (oldSelectedIndex !== -1) {
            this.selectedIndex = permutation[oldSelectedIndex];
        }
    }
    /**
     * Adjusts selection model length.
     * @param length New selection model length.
     */
    adjustLength(length) {
        this.length_ = length;
    }
}
