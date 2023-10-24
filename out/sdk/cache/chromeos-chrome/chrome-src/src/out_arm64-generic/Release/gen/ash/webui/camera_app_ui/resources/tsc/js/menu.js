// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertInstanceof } from './assert.js';
import * as dom from './dom.js';
import { getKeyboardShortcut, instantiateTemplate } from './util.js';
// The minimum pixels space between menu and viewport.
const MARGIN = 8;
const DEFAULT_ANCHOR_ORIGIN = {
    vertical: 'bottom',
    horizontal: 'left',
};
const DEFAULT_TRANSFORM_ORIGIN = {
    vertical: 'top',
    horizontal: 'left',
};
const DEFAULT_POSITION = {
    left: 0,
    top: 0,
};
const DEFAULT_CLASSES = {
    root: 'menu-root',
    item: 'item',
};
export class Menu {
    constructor({ entryElement, id, items, target, anchorElement = entryElement, anchorOrigin = DEFAULT_ANCHOR_ORIGIN, transformOrigin = DEFAULT_TRANSFORM_ORIGIN, position = DEFAULT_POSITION, classes = {}, }) {
        this.items = [];
        const fragment = instantiateTemplate('#menu');
        this.root = dom.getFrom(fragment, '.menu-root', HTMLUListElement);
        this.entry = entryElement;
        this.anchor = anchorElement;
        entryElement.setAttribute('aria-haspopup', 'true');
        entryElement.setAttribute('aria-controls', id);
        this.root.setAttribute('aria-labelledby', entryElement.id);
        this.classes = { ...DEFAULT_CLASSES, ...classes };
        this.root.classList.add(this.classes.root);
        this.root.id = id;
        for (const item of items) {
            const fragment = instantiateTemplate('#menu-item');
            const itemElement = dom.getFrom(fragment, '.item', HTMLLIElement);
            itemElement.setAttribute('tabindex', '-1');
            itemElement.classList.add(this.classes.item);
            item.render(itemElement);
            this.root.append(itemElement);
            itemElement.addEventListener('click', (e) => {
                this.handleItemClick(e, item.action);
            });
            itemElement.addEventListener('keydown', (e) => {
                this.handleItemKeydown(e, item.action);
            });
            this.items.push(itemElement);
        }
        this.setupEntry();
        target.append(this.root);
        this.clickAwayListener = (e) => {
            if (e.target instanceof Node && this.root.contains(e.target)) {
                return;
            }
            this.close();
        };
        this.anchorOrigin = anchorOrigin;
        this.transformOrigin = transformOrigin;
        this.position = position;
    }
    isOpen() {
        return this.root.getAttribute('aria-expanded') === 'true';
    }
    /**
     * Open the menu.
     */
    open() {
        if (this.isOpen()) {
            return;
        }
        this.root.setAttribute('aria-expanded', 'true');
        this.layout();
        window.addEventListener('click', this.clickAwayListener);
    }
    /**
     * Close the menu.
     */
    close() {
        if (!this.isOpen()) {
            return;
        }
        this.root.setAttribute('aria-expanded', 'false');
        this.entry.focus();
        window.removeEventListener('click', this.clickAwayListener);
    }
    focusItem(newItem) {
        for (const item of this.items) {
            assertInstanceof(item, HTMLLIElement).tabIndex = -1;
        }
        newItem.tabIndex = 0;
        newItem.focus();
    }
    focusFirstItem() {
        this.focusItem(this.items[0]);
    }
    focusLastItem() {
        this.focusItem(this.items[this.items.length - 1]);
    }
    setupEntry() {
        this.entry.addEventListener('click', (e) => {
            if (this.isOpen()) {
                this.close();
            }
            else {
                this.open();
                this.focusFirstItem();
            }
            e.stopPropagation();
            e.preventDefault();
        });
        this.entry.addEventListener('keydown', (e) => {
            const key = getKeyboardShortcut(e);
            switch (key) {
                case 'ArrowDown':
                    this.open();
                    this.focusFirstItem();
                    break;
                case 'ArrowUp':
                    this.open();
                    this.focusLastItem();
                    break;
                default:
                    return;
            }
            e.preventDefault();
            e.stopPropagation();
        });
    }
    handleItemKeydown(e, action) {
        const key = getKeyboardShortcut(e);
        const item = assertInstanceof(e.currentTarget, HTMLLIElement);
        switch (key) {
            case ' ':
            case 'Enter':
                this.close();
                action(e);
                break;
            case 'Escape':
                this.close();
                break;
            case 'ArrowUp':
                this.focusPreviousItem(item);
                break;
            case 'ArrowDown':
                this.focusNextItem(item);
                break;
            case 'Home':
                this.focusFirstItem();
                break;
            case 'End':
                this.focusLastItem();
                break;
            case 'Tab':
            case 'Shift-Tab':
                this.close();
                break;
            default:
                return;
        }
        e.stopPropagation();
        e.preventDefault();
    }
    handleItemClick(e, action) {
        this.close();
        action(e);
        e.stopPropagation();
        e.preventDefault();
    }
    focusPreviousItem(item) {
        const index = this.items.indexOf(item);
        assert(index !== -1);
        const nextIndex = (this.items.length + index - 1) % this.items.length;
        this.focusItem(this.items[nextIndex]);
    }
    focusNextItem(item) {
        const index = this.items.indexOf(item);
        assert(index !== -1);
        const nextIndex = (index + 1) % this.items.length;
        this.focusItem(this.items[nextIndex]);
    }
    layout() {
        const { top, right, bottom, left, width, height } = this.anchor.getBoundingClientRect();
        let menuLeft = left;
        let menuTop = top;
        if (this.anchorOrigin.horizontal === 'center') {
            menuLeft = left + width / 2;
        }
        else if (this.anchorOrigin.horizontal === 'right') {
            menuLeft = right;
        }
        if (this.anchorOrigin.vertical === 'center') {
            menuTop = top + height / 2;
        }
        else if (this.anchorOrigin.vertical === 'bottom') {
            menuTop = bottom;
        }
        menuLeft += this.position.left;
        menuTop += this.position.top;
        const { width: offsetWidth, height: offsetHeight } = this.root.getBoundingClientRect();
        if (this.transformOrigin.horizontal === 'center') {
            menuLeft -= offsetWidth / 2;
        }
        else if (this.transformOrigin.horizontal === 'right') {
            menuLeft -= offsetWidth;
        }
        if (this.transformOrigin.vertical === 'center') {
            menuTop -= offsetHeight / 2;
        }
        else if (this.transformOrigin.vertical === 'bottom') {
            menuTop -= offsetHeight;
        }
        menuLeft = Math.max(Math.min(menuLeft, document.body.offsetWidth - offsetWidth - MARGIN), MARGIN);
        menuTop = Math.max(Math.min(menuTop, document.body.offsetHeight - offsetHeight - MARGIN), MARGIN);
        const style = this.root.attributeStyleMap;
        style.set('left', CSS.px(menuLeft));
        style.set('top', CSS.px(menuTop));
    }
}
