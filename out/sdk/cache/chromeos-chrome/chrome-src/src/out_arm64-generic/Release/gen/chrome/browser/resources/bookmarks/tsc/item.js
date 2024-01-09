// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './shared_style.css.js';
import './strings.m.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { getFaviconForPageURL } from 'chrome://resources/js/icon.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { isMac } from 'chrome://resources/js/platform.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { selectItem } from './actions.js';
import { BookmarksCommandManagerElement } from './command_manager.js';
import { Command, MenuSource } from './constants.js';
import { getTemplate } from './item.html.js';
import { StoreClientMixin } from './store_client_mixin.js';
const BookmarksItemElementBase = StoreClientMixin(PolymerElement);
export class BookmarksItemElement extends BookmarksItemElementBase {
    static get is() {
        return 'bookmarks-item';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            itemId: {
                type: String,
                observer: 'onItemIdChanged_',
            },
            ironListTabIndex: Number,
            item_: {
                type: Object,
                observer: 'onItemChanged_',
            },
            isSelectedItem_: {
                type: Boolean,
                reflectToAttribute: true,
            },
            isMultiSelect_: Boolean,
            isFolder_: Boolean,
            lastTouchPoints_: Number,
        };
    }
    static get observers() {
        return [
            'updateFavicon_(item_.url)',
        ];
    }
    ready() {
        super.ready();
        this.addEventListener('click', e => this.onClick_(e));
        this.addEventListener('dblclick', e => this.onDblClick_(e));
        this.addEventListener('contextmenu', e => this.onContextMenu_(e));
        this.addEventListener('keydown', e => this.onKeydown_(e));
        this.addEventListener('auxclick', e => this.onMiddleClick_(e));
        this.addEventListener('mousedown', e => this.cancelMiddleMouseBehavior_(e));
        this.addEventListener('mouseup', e => this.cancelMiddleMouseBehavior_(e));
        this.addEventListener('touchstart', e => this.onTouchStart_(e));
    }
    connectedCallback() {
        super.connectedCallback();
        this.watch('item_', state => state.nodes[this.itemId]);
        this.watch('isSelectedItem_', state => state.selection.items.has(this.itemId));
        this.watch('isMultiSelect_', state => state.selection.items.size > 1);
        this.updateFromStore();
    }
    setIsSelectedItemForTesting(selected) {
        this.isSelectedItem_ = selected;
    }
    focusMenuButton() {
        focusWithoutInk(this.$.menuButton);
    }
    getDropTarget() {
        return this;
    }
    onContextMenu_(e) {
        e.preventDefault();
        e.stopPropagation();
        // Prevent context menu from appearing after a drag, but allow opening the
        // context menu through 2 taps
        const capabilities = e.sourceCapabilities;
        if (capabilities && capabilities.firesTouchEvents &&
            this.lastTouchPoints_ !== 2) {
            return;
        }
        this.focus();
        if (!this.isSelectedItem_) {
            this.selectThisItem_();
        }
        this.dispatchEvent(new CustomEvent('open-command-menu', {
            bubbles: true,
            composed: true,
            detail: {
                x: e.clientX,
                y: e.clientY,
                source: MenuSource.ITEM,
                targetId: this.itemId,
            },
        }));
    }
    onMenuButtonClick_(e) {
        e.stopPropagation();
        e.preventDefault();
        // Skip selecting the item if this item is part of a multi-selected group.
        if (!this.isMultiSelectMenu_()) {
            this.selectThisItem_();
        }
        this.dispatchEvent(new CustomEvent('open-command-menu', {
            bubbles: true,
            composed: true,
            detail: {
                targetElement: e.target,
                source: MenuSource.ITEM,
                targetId: this.itemId,
            },
        }));
    }
    selectThisItem_() {
        this.dispatch(selectItem(this.itemId, this.getState(), {
            clear: true,
            range: false,
            toggle: false,
        }));
    }
    getItemUrl_() {
        return this.item_.url || '';
    }
    onItemIdChanged_() {
        // TODO(tsergeant): Add a histogram to measure whether this assertion fails
        // for real users.
        assert(this.getState().nodes[this.itemId]);
        this.updateFromStore();
    }
    onItemChanged_() {
        this.isFolder_ = !this.item_.url;
        this.setAttribute('aria-label', this.item_.title || this.item_.url ||
            loadTimeData.getString('folderLabel'));
    }
    onClick_(e) {
        // Ignore double clicks so that Ctrl double-clicking an item won't deselect
        // the item before opening.
        if (e.detail !== 2) {
            const addKey = isMac ? e.metaKey : e.ctrlKey;
            this.dispatch(selectItem(this.itemId, this.getState(), {
                clear: !addKey,
                range: e.shiftKey,
                toggle: addKey && !e.shiftKey,
            }));
        }
        e.stopPropagation();
        e.preventDefault();
    }
    onKeydown_(e) {
        if (e.key === 'ArrowLeft') {
            this.focus();
        }
        else if (e.key === 'ArrowRight') {
            this.$.menuButton.focus();
        }
        else if (e.key === ' ') {
            this.dispatch(selectItem(this.itemId, this.getState(), {
                clear: false,
                range: false,
                toggle: true,
            }));
        }
    }
    onDblClick_(_e) {
        if (!this.isSelectedItem_) {
            this.selectThisItem_();
        }
        const commandManager = BookmarksCommandManagerElement.getInstance();
        const itemSet = this.getState().selection.items;
        if (commandManager.canExecute(Command.OPEN, itemSet)) {
            commandManager.handle(Command.OPEN, itemSet);
        }
    }
    onMiddleClick_(e) {
        if (e.button !== 1) {
            return;
        }
        this.selectThisItem_();
        if (this.isFolder_) {
            return;
        }
        const commandManager = BookmarksCommandManagerElement.getInstance();
        const itemSet = this.getState().selection.items;
        const command = e.shiftKey ? Command.OPEN : Command.OPEN_NEW_TAB;
        if (commandManager.canExecute(command, itemSet)) {
            commandManager.handle(command, itemSet);
        }
    }
    onTouchStart_(e) {
        this.lastTouchPoints_ = e.touches.length;
    }
    /**
     * Prevent default middle-mouse behavior. On Windows, this prevents autoscroll
     * (during mousedown), and on Linux this prevents paste (during mouseup).
     */
    cancelMiddleMouseBehavior_(e) {
        if (e.button === 1) {
            e.preventDefault();
        }
    }
    updateFavicon_(url) {
        this.$.icon.className =
            url ? 'website-icon' : 'folder-icon icon-folder-open';
        this.$.icon.style.backgroundImage =
            url ? getFaviconForPageURL(url, false) : '';
    }
    getButtonAriaLabel_() {
        if (!this.item_) {
            return ''; // Item hasn't loaded, skip for now.
        }
        if (this.isMultiSelectMenu_()) {
            return loadTimeData.getStringF('moreActionsMultiButtonAxLabel');
        }
        return loadTimeData.getStringF('moreActionsButtonAxLabel', this.item_.title);
    }
    /**
     * This item is part of a group selection.
     */
    isMultiSelectMenu_() {
        return this.isSelectedItem_ && this.isMultiSelect_;
    }
}
customElements.define(BookmarksItemElement.is, BookmarksItemElement);
