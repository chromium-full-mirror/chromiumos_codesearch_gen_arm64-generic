// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
/**
 * TODO(beccahughes): Description
 */
export class MediaDataTable {
    constructor(table, delegate) {
        this.data_ = [];
        this.table_ = table;
        this.delegate_ = delegate;
        // Set table header sort handlers.
        const headers = this.table_.querySelectorAll('th[sort-key]');
        headers.forEach(header => {
            header.addEventListener('click', this.handleSortClick_.bind(this));
        });
    }
    handleSortClick_(e) {
        const target = e.target;
        assert(target);
        if (target.classList.contains('sort-column')) {
            target.toggleAttribute('sort-reverse');
        }
        else {
            const sortColumn = document.querySelector('.sort-column');
            assert(sortColumn);
            sortColumn.classList.remove('sort-column');
            target.classList.add('sort-column');
        }
        this.render();
    }
    render() {
        // Find the body of the table and clear it.
        const body = this.table_.querySelectorAll('tbody')[0];
        body.innerHTML =
            window.trustedTypes ? window.trustedTypes.emptyHTML : '';
        // Get the sort key from the columns to determine which data should be in
        // which column.
        const headerCells = Array.from(this.table_.querySelectorAll('thead th'));
        const dataAndSortKeys = headerCells.map((e) => {
            return e.getAttribute('sort-key') ? e.getAttribute('sort-key') :
                e.getAttribute('data-key');
        });
        const currentSortCol = this.table_.querySelectorAll('.sort-column')[0];
        const currentSortKey = currentSortCol.getAttribute('sort-key') || '';
        const currentSortReverse = currentSortCol.hasAttribute('sort-reverse');
        // Sort the data based on the current sort key.
        this.data_.sort((a, b) => {
            return (currentSortReverse ? -1 : 1) *
                this.delegate_.compareTableItem(currentSortKey, a, b);
        });
        // Generate the table rows.
        this.data_.forEach((dataRow) => {
            const tr = document.createElement('tr');
            body.appendChild(tr);
            dataAndSortKeys.forEach((key) => {
                const td = document.createElement('td');
                // Keys with a period denote nested objects.
                let data = dataRow;
                const expandedKey = key.split('.');
                expandedKey.forEach((k) => {
                    data = data[k];
                    key = k;
                });
                this.delegate_.insertDataField(td, data, key, dataRow);
                tr.appendChild(td);
            });
        });
    }
    /**
     * @param data The data to update
     */
    setData(data) {
        this.data_ = data;
        this.render();
    }
}
