// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { queryRequiredElement } from '../../common/js/dom_utils.js';
import { FileListModel } from './file_list_model.js';
import { MultiMenuButton } from './ui/multi_menu_button.js';
export class SortMenuController {
    constructor(sortButton, fileListModel_) {
        this.fileListModel_ = fileListModel_;
        const menu = sortButton.menu;
        assert(menu);
        this.sortByNameButton_ =
            queryRequiredElement('#sort-menu-sort-by-name', menu);
        this.sortBySizeButton_ =
            queryRequiredElement('#sort-menu-sort-by-size', menu);
        this.sortByTypeButton_ =
            queryRequiredElement('#sort-menu-sort-by-type', menu);
        this.sortByDateButton_ =
            queryRequiredElement('#sort-menu-sort-by-date', menu);
        sortButton.addEventListener('menushow', this.updateCheckmark_.bind(this));
    }
    /**
     * Update checkmarks for each sort options.
     */
    updateCheckmark_() {
        const field = this.fileListModel_.sortStatus.field;
        const sortField = field;
        this.setCheckStatus_(this.sortByNameButton_, sortField === 'name');
        this.setCheckStatus_(this.sortBySizeButton_, sortField === 'size');
        this.setCheckStatus_(this.sortByTypeButton_, sortField === 'type');
        this.setCheckStatus_(this.sortByDateButton_, sortField === 'modificationTime');
    }
    /**
     * Set attribute 'checked' for the menu item.
     */
    setCheckStatus_(menuItem, checked) {
        menuItem.toggleAttribute('checked', checked);
    }
}
