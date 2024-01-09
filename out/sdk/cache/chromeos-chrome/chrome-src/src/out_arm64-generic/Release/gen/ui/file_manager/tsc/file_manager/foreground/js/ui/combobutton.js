// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This implements a combobutton control.
 */
import { assert } from 'chrome://resources/js/assert.js';
import { boolAttrSetter, crInjectTypeAndInit } from '../../../common/js/cr_ui.js';
import { FilesMenuItem } from './files_menu.js';
import { MultiMenuButton } from './multi_menu_button.js';
function isFilesMenuItem(menuItem) {
    const menu = menuItem.closest('cr-menu');
    if (!menu) {
        return false;
    }
    return menu && menu.classList.contains('files-menu');
}
/**
 * Creates a new combo button element.
 */
export class ComboButton extends MultiMenuButton {
    constructor() {
        super(...arguments);
        this.defaultItem_ = null;
        this.trigger_ = null;
        this.actionNode_ = null;
    }
    /**
     * Truncates drop-down list.
     */
    clear() {
        this.menu?.clear();
        this.multiple = false;
    }
    addDropDownItem(item) {
        assert(this.menu);
        this.multiple = true;
        const menuItem = this.menu.addMenuItem(item);
        assert(isFilesMenuItem(menuItem));
        crInjectTypeAndInit(menuItem, FilesMenuItem);
        menuItem.toggleManagedIcon(/*visible=*/ !!item.isPolicyDefault);
        if (item.isDefault) {
            menuItem.setIsDefaultAttribute();
        }
        menuItem.data = item;
        // Move backgroundImage from the menu item container to the child icon.
        menuItem.iconStartImage = menuItem.style.backgroundImage;
        menuItem.style.backgroundImage = '';
        if (item.iconType) {
            menuItem.iconStartImage = '';
            menuItem.iconStartFileType = item.iconType;
        }
        menuItem.toggleAttribute('disabled', !!item.isDlpBlocked);
        return menuItem;
    }
    /**
     * Adds separator to drop-down list.
     */
    addSeparator() {
        this.menu?.addSeparator();
    }
    /**
     * Default item to fire on combobox click
     */
    get defaultItem() {
        return this.defaultItem_;
    }
    set defaultItem(defaultItem) {
        this.defaultItem_ = defaultItem;
        this.actionNode_.textContent = defaultItem?.label || '';
    }
    initialize() {
        super.initialize();
        assert(this.menu);
        this.classList.add('combobutton');
        const buttonLayer = this.ownerDocument.createElement('div');
        buttonLayer.classList.add('button');
        this.appendChild(buttonLayer);
        this.actionNode_ = this.ownerDocument.createElement('div');
        this.actionNode_.classList.add('action');
        buttonLayer.appendChild(this.actionNode_);
        const triggerIcon = this.ownerDocument.createElement('iron-icon');
        triggerIcon.setAttribute('icon', 'files:arrow-drop-down');
        this.trigger_ = this.ownerDocument.createElement('div');
        this.trigger_.classList.add('trigger');
        this.trigger_.appendChild(triggerIcon);
        buttonLayer.appendChild(this.trigger_);
        this.addEventListener('click', this.handleButtonClick_.bind(this));
        this.trigger_.addEventListener('click', this.handleTriggerClicked_.bind(this));
        this.menu.addEventListener('activate', this.handleMenuActivate_.bind(this));
        // Remove mousedown event listener created by MultiMenuButton::decorate,
        // and move it down to trigger_.
        this.removeEventListener('mousedown', this);
        this.trigger_.addEventListener('mousedown', this);
    }
    handleTriggerClicked_(event) {
        event.stopPropagation();
    }
    handleMenuActivate_(e) {
        const event = e;
        const target = event.target;
        assert(isFilesMenuItem(target));
        this.dispatchSelectEvent_(target.data);
    }
    handleButtonClick_(_event) {
        if (this.multiple) {
            // When there are multiple choices just show/hide menu.
            if (this.isMenuShown()) {
                this.hideMenu();
            }
            else {
                this.showMenu(true);
            }
        }
        else {
            // When there is only 1 choice, just dispatch to open.
            this.blur();
            this.dispatchSelectEvent_(this.defaultItem_);
        }
    }
    dispatchSelectEvent_(item) {
        const selectEvent = new CustomEvent('combobutton-select', { detail: item });
        this.dispatchEvent(selectEvent);
    }
    /**
     * When there are multiple choices just show/hide menu.
     */
    get multiple() {
        return this.hasAttribute('multiple');
    }
    set multiple(value) {
        boolAttrSetter(this, 'multiple', value);
    }
}
