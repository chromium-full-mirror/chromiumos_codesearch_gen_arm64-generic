// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { boolAttrSetter, crInjectTypeAndInit, jsSetter } from '../../../common/js/cr_ui.js';
/** The next id suffix to use when giving each item an unique id. */
let nextUniqueIdSuffix = 0;
/** Creates a new list item element. */
export function createListItem() {
    const el = document.createElement('li');
    crInjectTypeAndInit(el, ListItem);
    return el;
}
export class ListItem extends HTMLLIElement {
    constructor() {
        super(...arguments);
        /** This item's index in the containing list. */
        this.listIndex_ = -1;
    }
    /** Plain text label. */
    get label() {
        return this.textContent || '';
    }
    set label(label) {
        this.textContent = label;
    }
    /** This item's index in the containing list. */
    get listIndex() {
        return this.listIndex_;
    }
    set listIndex(value) {
        jsSetter(this, 'listIndex', value);
    }
    /**
     * Whether the item is the lead in a selection. Setting this does not update
     * the underlying selection model. This is only used for display purpose.
     */
    get lead() {
        return this.hasAttribute('lead');
    }
    set lead(value) {
        boolAttrSetter(this, 'lead', value);
    }
    /**
     * Whether the item is selected. Setting this does not update the underlying
     * selection model. This is only used for display purpose.
     */
    get selected() {
        return this.hasAttribute('selected');
    }
    set selected(value) {
        boolAttrSetter(this, 'selected', value);
    }
    /** Called when an element is decorated as a list item. */
    initialize() {
        this.listIndex_ = -1;
        this.setAttribute('role', 'listitem');
        if (!this.id) {
            this.id = 'listitem-' + nextUniqueIdSuffix++;
        }
    }
}
