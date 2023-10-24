// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_nav_menu_item_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/paper-ripple/paper-ripple.js';
import './shared_style.css.js';
import './strings.m.js';
import { assert } from 'chrome://resources/js/assert.js';
import { isRTL } from 'chrome://resources/js/util_ts.js';
import { microTask, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { changeFolderOpen, selectFolder } from './actions.js';
import { BookmarksCommandManagerElement } from './command_manager.js';
import { FOLDER_OPEN_BY_DEFAULT_DEPTH, MenuSource, ROOT_NODE_ID } from './constants.js';
import { getTemplate } from './folder_node.html.js';
import { StoreClientMixin } from './store_client_mixin.js';
import { hasChildFolders, isShowingSearch } from './util.js';
const BookmarksFolderNodeElementBase = StoreClientMixin(PolymerElement);
export class BookmarksFolderNodeElement extends BookmarksFolderNodeElementBase {
    constructor() {
        super(...arguments);
        this.isSelectedFolder_ = false;
    }
    static get is() {
        return 'bookmarks-folder-node';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            itemId: {
                type: String,
                observer: 'updateFromStore',
            },
            depth: {
                type: Number,
                observer: 'depthChanged_',
            },
            isOpen: {
                type: Boolean,
                computed: 'computeIsOpen_(openState_, depth)',
            },
            item_: Object,
            openState_: Boolean,
            selectedFolder_: String,
            searchActive_: Boolean,
            isSelectedFolder_: {
                type: Boolean,
                reflectToAttribute: true,
                computed: 'computeIsSelected_(itemId, selectedFolder_, searchActive_)',
            },
            hasChildFolder_: {
                type: Boolean,
                computed: 'computeHasChildFolder_(item_.children)',
            },
        };
    }
    static get observers() {
        return [
            'updateAriaExpanded_(hasChildFolder_, isOpen)',
            'scrollIntoViewIfNeeded_(isSelectedFolder_)',
        ];
    }
    ready() {
        super.ready();
        this.addEventListener('keydown', e => this.onKeydown_(e));
    }
    /** @override */
    connectedCallback() {
        super.connectedCallback();
        this.watch('item_', state => {
            return state.nodes[this.itemId];
        });
        this.watch('openState_', state => {
            return state.folderOpenState.has(this.itemId) ?
                state.folderOpenState.get(this.itemId) :
                null;
        });
        this.watch('selectedFolder_', state => state.selectedFolder);
        this.watch('searchActive_', state => {
            return isShowingSearch(state);
        });
        this.updateFromStore();
    }
    getContainerClass_(isSelectedFolder) {
        return isSelectedFolder ? 'selected' : '';
    }
    getFocusTarget() {
        return this.$.container;
    }
    getDropTarget() {
        return this.$.container;
    }
    onKeydown_(e) {
        let yDirection = 0;
        let xDirection = 0;
        let handled = true;
        if (e.key === 'ArrowUp') {
            yDirection = -1;
        }
        else if (e.key === 'ArrowDown') {
            yDirection = 1;
        }
        else if (e.key === 'ArrowLeft') {
            xDirection = -1;
        }
        else if (e.key === 'ArrowRight') {
            xDirection = 1;
        }
        else if (e.key === ' ') {
            this.selectFolder_();
        }
        else {
            handled = false;
        }
        if (isRTL()) {
            xDirection *= -1;
        }
        this.changeKeyboardSelection_(xDirection, yDirection, this.shadowRoot.activeElement);
        if (!handled) {
            handled = BookmarksCommandManagerElement.getInstance().handleKeyEvent(e, new Set([this.itemId]));
        }
        if (!handled) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
    }
    changeKeyboardSelection_(xDirection, yDirection, currentFocus) {
        let newFocusFolderNode = null;
        const isChildFolderNodeFocused = currentFocus &&
            currentFocus.tagName === 'BOOKMARKS-FOLDER-NODE';
        if (xDirection === 1) {
            // The right arrow opens a folder if closed and goes to the first child
            // otherwise.
            if (this.hasChildFolder_) {
                if (!this.isOpen) {
                    this.dispatch(changeFolderOpen(this.item_.id, true));
                }
                else {
                    yDirection = 1;
                }
            }
        }
        else if (xDirection === -1) {
            // The left arrow closes a folder if open and goes to the parent
            // otherwise.
            if (this.hasChildFolder_ && this.isOpen) {
                this.dispatch(changeFolderOpen(this.item_.id, false));
            }
            else {
                const parentFolderNode = this.getParentFolderNode();
                if (parentFolderNode.itemId !== ROOT_NODE_ID) {
                    parentFolderNode.getFocusTarget().focus();
                }
            }
        }
        if (!yDirection) {
            return;
        }
        // The current node's successor is its first child when open.
        if (!isChildFolderNodeFocused && yDirection === 1 && this.isOpen) {
            const children = this.getChildFolderNodes_();
            if (children.length) {
                newFocusFolderNode = children[0];
            }
        }
        if (isChildFolderNodeFocused) {
            // Get the next child folder node if a child is focused.
            if (!newFocusFolderNode) {
                newFocusFolderNode = this.getNextChild(yDirection === -1, currentFocus);
            }
            // The first child's predecessor is this node.
            if (!newFocusFolderNode && yDirection === -1) {
                newFocusFolderNode = this;
            }
        }
        // If there is no newly focused node, allow the parent to handle the change.
        if (!newFocusFolderNode) {
            if (this.itemId !== ROOT_NODE_ID) {
                this.getParentFolderNode().changeKeyboardSelection_(0, yDirection, this);
            }
            return;
        }
        // The root node is not navigable.
        if (newFocusFolderNode.itemId !== ROOT_NODE_ID) {
            newFocusFolderNode.getFocusTarget().focus();
        }
    }
    /**
     * Returns the next or previous visible bookmark node relative to |child|.
     */
    getNextChild(reverse, child) {
        let newFocus = null;
        const children = this.getChildFolderNodes_();
        const index = children.indexOf(child);
        assert(index !== -1);
        if (reverse) {
            // A child node's predecessor is either the previous child's last visible
            // descendant, or this node, which is its immediate parent.
            newFocus =
                index === 0 ? null : children[index - 1].getLastVisibleDescendant();
        }
        else if (index < children.length - 1) {
            // A successor to a child is the next child.
            newFocus = children[index + 1];
        }
        return newFocus;
    }
    /**
     * Returns the immediate parent folder node, or null if there is none.
     */
    getParentFolderNode() {
        let parentFolderNode = this.parentNode;
        while (parentFolderNode &&
            parentFolderNode.tagName !==
                'BOOKMARKS-FOLDER-NODE') {
            parentFolderNode =
                parentFolderNode.parentNode || parentFolderNode.host;
        }
        return parentFolderNode || null;
    }
    getLastVisibleDescendant() {
        const children = this.getChildFolderNodes_();
        if (!this.isOpen || children.length === 0) {
            return this;
        }
        return children.pop().getLastVisibleDescendant();
    }
    selectFolder_() {
        if (!this.isSelectedFolder_) {
            this.dispatch(selectFolder(this.itemId, this.getState().nodes));
        }
    }
    onContextMenu_(e) {
        e.preventDefault();
        this.selectFolder_();
        BookmarksCommandManagerElement.getInstance().openCommandMenuAtPosition(e.clientX, e.clientY, MenuSource.TREE, new Set([this.itemId]));
    }
    getChildFolderNodes_() {
        return Array.from(this.shadowRoot.querySelectorAll('bookmarks-folder-node'));
    }
    /**
     * Toggles whether the folder is open.
     */
    toggleFolder_(e) {
        this.dispatch(changeFolderOpen(this.itemId, !this.isOpen));
        e.stopPropagation();
    }
    preventDefault_(e) {
        e.preventDefault();
    }
    computeIsSelected_(itemId, selectedFolder, searchActive) {
        return itemId === selectedFolder && !searchActive;
    }
    computeHasChildFolder_() {
        return hasChildFolders(this.itemId, this.getState().nodes);
    }
    depthChanged_() {
        this.style.setProperty('--node-depth', String(this.depth));
        if (this.depth === -1) {
            this.$.descendants.removeAttribute('role');
        }
    }
    getChildDepth_() {
        return this.depth + 1;
    }
    isFolder_(itemId) {
        return !this.getState().nodes[itemId].url;
    }
    isRootFolder_() {
        return this.itemId === ROOT_NODE_ID;
    }
    getTabIndex_() {
        // This returns a tab index of 0 for the cached selected folder when the
        // search is active, even though this node is not technically selected. This
        // allows the sidebar to be focusable during a search.
        return this.selectedFolder_ === this.itemId ? '0' : '-1';
    }
    /**
     * Sets the 'aria-expanded' accessibility on nodes which need it. Note that
     * aria-expanded="false" is different to having the attribute be undefined.
     */
    updateAriaExpanded_(hasChildFolder, isOpen) {
        if (hasChildFolder) {
            this.getFocusTarget().setAttribute('aria-expanded', String(isOpen));
        }
        else {
            this.getFocusTarget().removeAttribute('aria-expanded');
        }
    }
    /**
     * Scrolls the folder node into view when the folder is selected.
     */
    scrollIntoViewIfNeeded_() {
        if (!this.isSelectedFolder_) {
            return;
        }
        microTask.run(() => this.$.container.scrollIntoViewIfNeeded());
    }
    computeIsOpen_(openState, depth) {
        return openState != null ? openState :
            depth <= FOLDER_OPEN_BY_DEFAULT_DEPTH;
    }
}
customElements.define(BookmarksFolderNodeElement.is, BookmarksFolderNodeElement);
