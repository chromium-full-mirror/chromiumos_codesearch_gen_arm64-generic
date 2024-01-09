// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var XfTree_1;
import { isRTL } from 'chrome://resources/ash/common/util.js';
import { css, customElement, html, query, state, XfBase } from './xf_base.js';
import { XfTreeItem } from './xf_tree_item.js';
import { handleTreeSlotChange, isTreeItem } from './xf_tree_util.js';
/**
 * <xf-tree> is the container of the <xf-tree-item> elements. An example
 * DOM structure is like this:
 *
 * <xf-tree>
 *   <xf-tree-item>
 *     <xf-tree-item></xf-tree-item>
 *   </xf-tree-item>
 *   <xf-tree-item></xf-tree-item>
 * </xf-tree>
 *
 * The selection and focus of <xf-tree-item> is controlled in <xf-tree>,
 * this is because we need to make sure only one item is being selected or
 * focused.
 *
 * TODO(b/285977941): Remove the closure annotation here.
 * @constructor
 */
let XfTree = XfTree_1 = class XfTree extends XfBase {
    constructor() {
        super(...arguments);
        /** The child tree items. */
        this.items_ = [];
        /**
         * Maintain these in the tree level so we can make sure at most one tree item
         * can be selected/focused.
         */
        this.selectedItem_ = null;
        this.focusedItem_ = null;
        /**
         * Value to set aria-setsize, which is the number of the top level child tree
         * items.
         */
        this.ariaSetSize_ = 0;
    }
    // Inside the tree, there's at most 1 tree item is focusable (tabindex = 0)
    // "delegatesFocus = true" will make sure when the tree is focused (either
    // via click or focus() call on the host element), the only focusable tree
    // item will get the focus.
    static get shadowRootOptions() {
        return {
            ...XfBase.shadowRootOptions,
            delegatesFocus: true,
        };
    }
    static get events() {
        return {
            /** Triggers when a tree item has been selected. */
            TREE_SELECTION_CHANGED: 'tree_selection_changed',
        };
    }
    /** Return the selected tree item, could be null. */
    get selectedItem() {
        return this.selectedItem_;
    }
    set selectedItem(item) {
        this.selectItem_(item);
    }
    /** Return the focused tree item, could be null. */
    get focusedItem() {
        return this.focusedItem_;
    }
    set focusedItem(item) {
        this.makeItemFocusable_(item);
    }
    /** The child tree items. */
    get items() {
        return this.items_;
    }
    /** The child tree items which can be tabbed/focused into. */
    get tabbableItems() {
        return this.items_.filter(item => !item.disabled);
    }
    static get styles() {
        return getCSS();
    }
    render() {
        return html `
      <ul
        class="tree"
        role="tree"
        aria-setsize=${this.ariaSetSize_}
        @tree_item_collapsed=${this.onTreeItemCollapsed_}
      >
        <slot @slotchange=${this.onSlotChanged_}></slot>
      </ul>
    `;
    }
    connectedCallback() {
        super.connectedCallback();
        // Binding all these events at the host element level because the blank
        // space of the tree doesn't belong to the root <ul> element.
        this.addEventListener('contextmenu', this.onHostContextMenu_.bind(this));
        this.addEventListener('click', this.onHostClicked_.bind(this));
        this.addEventListener('dblclick', this.onHostDblClicked_.bind(this));
        this.addEventListener('mousedown', this.onHostMouseDown_.bind(this));
        this.addEventListener('keydown', this.onHostKeyDown_.bind(this));
    }
    onSlotChanged_() {
        const oldItems = new Set(this.items_);
        // Update `items_` every time when the children slot changes (e.g.
        // add/remove).
        this.items_ = this.$childrenSlot_.assignedElements().filter(isTreeItem);
        this.ariaSetSize_ = this.tabbableItems.length;
        const newItems = new Set(this.items_);
        handleTreeSlotChange(this, oldItems, newItems);
    }
    /**
     * Handles the collapse event of the tree item.
     */
    onTreeItemCollapsed_(e) {
        const treeItem = e.detail.item;
        // If the currently focused tree item (`oldFocusedItem`) is a descent of
        // another tree item (`treeItem`) which is going to be collapsed, we need to
        // mark the ancestor tree item (`this`) as focused.
        if (this.focusedItem_ !== treeItem) {
            const oldFocusedItem = this.focusedItem_;
            if (oldFocusedItem && treeItem.contains(oldFocusedItem)) {
                this.makeItemFocusable_(treeItem);
            }
        }
    }
    /** Called when the user clicks within the host element. */
    onHostClicked_(e) {
        // Mouse right click won't trigger click event, so this check is not
        // necessary in real scenario. This is mainly for the browser test because
        // waitAndRightClickEvent will actually trigger a click event with button=2.
        if (e.button === 2) {
            return;
        }
        // Stop if the the click target is not a tree item.
        const treeItem = e.target;
        if (treeItem && !isTreeItem(treeItem)) {
            // Clicking the non tree item area should focus the whole tree, which will
            // delegate the focus to the currently focusable child tree item.
            this.focus();
            return;
        }
        if (treeItem.disabled) {
            e.stopImmediatePropagation();
            e.preventDefault();
            return;
        }
        // Use composed path to know which element inside the shadow root
        // has been clicked.
        const innerClickTarget = e.composedPath()[0];
        if (innerClickTarget.className === 'expand-icon') {
            treeItem.expanded = !treeItem.expanded;
        }
        else {
            treeItem.selected = true;
        }
        treeItem.focus();
    }
    /** Called when the user double clicks within the host element. */
    onHostDblClicked_(e) {
        // Stop if the the click target is not a tree item.
        const treeItem = e.target;
        if (treeItem && !isTreeItem(treeItem)) {
            // Double clicking the non tree item area should focus the whole tree,
            // which will delegate the focus to the currently focusable child tree
            // item.
            this.focus();
            return;
        }
        if (treeItem.disabled) {
            e.stopImmediatePropagation();
            e.preventDefault();
            return;
        }
        // Use composed path to know which element inside the shadow root
        // has been clicked.
        const innerClickTarget = e.composedPath()[0];
        if (innerClickTarget.className !== 'expand-icon' &&
            treeItem.hasChildren()) {
            treeItem.expanded = !treeItem.expanded;
            treeItem.focus();
        }
    }
    /** Called when mouse down event happens within the host element. */
    onHostMouseDown_(e) {
        // Only handle the right click here, left click is handled by the click
        // handler above.
        if (e.button !== 2) {
            return;
        }
        // Stop if the the click target is not a tree item.
        const treeItem = e.target;
        if (treeItem && !isTreeItem(treeItem)) {
            // Right clicking the non tree item area should focus the whole tree,
            // which will delegate the focus to the currently focusable child tree
            // item.
            this.focus();
            return;
        }
        if (treeItem.disabled) {
            e.stopImmediatePropagation();
            e.preventDefault();
            return;
        }
        treeItem.focus();
    }
    /** Called when a context menu event happens within the host element. */
    onHostContextMenu_(e) {
        // Delegate the tree level contextmenu event to the focused child tree item.
        // Note: tree item contextmenu event will never arrive here because the
        // event listener registered in ContextMenuHandler stops propagation after
        // showing the context menu. So the handler here is only for right clicking
        // on the blank space area (e.g. outside the root <ul> element).
        if (this.focusedItem_) {
            const domRect = this.focusedItem_.getRectForContextMenu();
            // Calculate the center point of the tree item, so <xf-tree-item> knows
            // where to show the context menu pop-up.
            const x = domRect.x + (domRect.width / 2);
            const y = domRect.y + (domRect.height / 2);
            this.focusedItem_.dispatchEvent(new PointerEvent(e.type, { ...e, clientX: x, clientY: y }));
        }
    }
    /**
     * Handle the keydown within the host element, this mainly handles the
     * navigation and the selection with the keyboard.
     */
    onHostKeyDown_(e) {
        if (e.ctrlKey || e.repeat) {
            return;
        }
        if (!this.focusedItem_) {
            return;
        }
        if (this.tabbableItems.length === 0) {
            return;
        }
        let itemToFocus = null;
        switch (e.key) {
            case 'Enter':
            case ' ':
                this.selectItem_(this.focusedItem_);
                break;
            case 'ArrowUp':
                itemToFocus = this.getPreviousItem_(this.focusedItem_);
                break;
            case 'ArrowDown':
                itemToFocus = this.getNextItem_(this.focusedItem_);
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
                // Don't let back/forward keyboard shortcuts be used.
                if (e.altKey) {
                    break;
                }
                const expandKey = isRTL() ? 'ArrowLeft' : 'ArrowRight';
                if (e.key === expandKey) {
                    if (this.focusedItem_.hasChildren() && !this.focusedItem_.expanded) {
                        this.focusedItem_.expanded = true;
                    }
                    else {
                        itemToFocus = this.focusedItem_.tabbableItems[0];
                    }
                }
                else {
                    if (this.focusedItem_.expanded) {
                        this.focusedItem_.expanded = false;
                    }
                    else {
                        itemToFocus = this.focusedItem_.parentItem;
                    }
                }
                break;
            case 'Home':
                itemToFocus = this.tabbableItems[0];
                break;
            case 'End':
                itemToFocus = this.tabbableItems[this.tabbableItems.length - 1];
                break;
        }
        if (itemToFocus) {
            itemToFocus.focus();
            e.preventDefault();
        }
    }
    /**
     * Helper function that returns the next tabbable tree item.
     */
    getNextItem_(item) {
        if (item.expanded && item.tabbableItems.length > 0) {
            return item.tabbableItems[0];
        }
        return this.getNextHelper_(item);
    }
    /**
     * Another helper function that returns the next tabbable tree item.
     */
    getNextHelper_(item) {
        if (!item) {
            return null;
        }
        const nextSibling = item.nextElementSibling;
        if (nextSibling) {
            if (nextSibling.disabled) {
                return this.getNextHelper_(nextSibling);
            }
            return nextSibling;
        }
        return this.getNextHelper_(item.parentItem);
    }
    /**
     * Helper function that returns the previous tabbable tree item.
     */
    getPreviousItem_(item) {
        let previousSibling = item.previousElementSibling;
        while (previousSibling && previousSibling.disabled) {
            previousSibling =
                previousSibling.previousElementSibling;
        }
        if (previousSibling) {
            return this.getLastHelper_(previousSibling);
        }
        return item.parentItem;
    }
    /**
     * Helper function that returns the last tabbable tree item in the subtree.
     */
    getLastHelper_(item) {
        if (!item) {
            return null;
        }
        if (item.expanded && item.tabbableItems.length > 0) {
            const lastChild = item.tabbableItems[item.tabbableItems.length - 1];
            return this.getLastHelper_(lastChild);
        }
        return item;
    }
    /**
     * Make `itemToSelect` become the selected item in the tree, this will
     * also unselect the previously selected tree item to make sure at most
     * one tree item is selected in the tree.
     */
    selectItem_(itemToSelect) {
        const previousSelectedItem = this.selectedItem_;
        if (itemToSelect === previousSelectedItem) {
            return;
        }
        if (previousSelectedItem) {
            previousSelectedItem.selected = false;
        }
        this.selectedItem_ = itemToSelect;
        if (this.selectedItem_) {
            this.selectedItem_.selected = true;
            // When tree item gets selected programmatically (e.g. not through
            // mouse/keyboard), there might be other elements on the page which have
            // the focus, we don't want to steal the focus, so all we do here is to
            // make the item focusable.
            this.makeItemFocusable_(this.selectedItem_);
        }
        const selectionChangeEvent = new CustomEvent(XfTree_1.events.TREE_SELECTION_CHANGED, {
            bubbles: true,
            composed: true,
            detail: {
                previousSelectedItem,
                selectedItem: this.selectedItem,
            },
        });
        this.dispatchEvent(selectionChangeEvent);
    }
    /**
     * Make `itemToFocus` become the focusable, this will also make the previously
     * focused item non-focusable so we can make sure only 1 tree item is
     * focusable, this is essential for "delegatesFocus" to work.
     *
     * Note: this method only make the item to be focusable, it won't actually
     * focus the item, we need to call `.focus()` after to focus it.
     */
    makeItemFocusable_(itemToFocus) {
        const previousFocusedItem = this.focusedItem_;
        if (previousFocusedItem === itemToFocus) {
            return;
        }
        if (previousFocusedItem) {
            previousFocusedItem.toggleFocusable(false);
        }
        this.focusedItem_ = itemToFocus;
        if (this.focusedItem_) {
            this.focusedItem_.toggleFocusable(true);
        }
    }
};
__decorate([
    query('slot')
], XfTree.prototype, "$childrenSlot_", void 0);
__decorate([
    state()
], XfTree.prototype, "ariaSetSize_", void 0);
XfTree = XfTree_1 = __decorate([
    customElement('xf-tree')
], XfTree);
export { XfTree };
function getCSS() {
    return css `
    :host {
      display: block;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  `;
}
