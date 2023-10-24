/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import './sidenav_item.js';
import { css, html, LitElement } from '//resources/mwc/lit/index.js';
import { castExists } from '../helpers/helpers.js';
import { isRTL, isSidenavItem, shadowPiercingActiveItem } from './sidenav_util.js';
const ATTRIBUTE_OBSERVER_CONFIG = {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: ['mayHaveChildren', 'mayhavechildren']
};
/**
 * True iff `item` is not disabled and every parent of it allows children to be
 * selected.
 */
function isSelectable(item) {
    if (item.disabled)
        return false;
    let parent = item.parentItem;
    while (parent) {
        if (!parent.expanded || parent.disabled)
            return false;
        parent = parent.parentItem;
    }
    return true;
}
/**
 * True iff the user has navigated to `item` or has not navigated and `item`
 * is enabled.
 */
function isSelected(item) {
    return item.tabIndex === 0;
}
/**
 * <cros-sidenav> is the container of the <cros-sidenav-item> elements. An
 * example DOM structure is like this:
 *
 * <cros-sidenav>
 *   <cros-sidenav-item>
 *     <cros-sidenav-item></cros-sidenav-item>
 *   </cros-sidenav-item>
 *   <cros-sidenav-item></cros-sidenav-item>
 * </cros-sidenav>
 *
 * The enabling and focus of <cros-sidenav-item> is controlled in
 * <cros-sidenav>, this is because we need to make sure only one item is being
 * enabled or focused.
 */
export class Sidenav extends LitElement {
    /** @nocollapse */
    static { this.styles = css `
      :host {
        display: block;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      slot::slotted(cros-sidenav-item:first-child) {
        margin-top: 0;
      }
  `; }
    /** @nocollapse */
    static { this.properties = {
        doubleclickExpands: { type: Boolean, reflect: true },
        allowNoEnabled: { type: Boolean, reflect: true },
        role: { type: String, reflect: true },
    }; }
    /** @nocollapse */
    static get events() {
        return {
            /** Triggers when a tree item has been enabled. */
            SIDENAV_ENABLED_CHANGED: 'cros-sidenav-enabled-changed',
        };
    }
    /**
     * Return the enabled tree item. If there are items, an enabled item always
     * exists, unless `allowNoEnabled` is true.
     */
    get enabledItem() {
        return this.items.find(item => item.enabled) || null;
    }
    /** Setting this to null is a noop, unless `allowNoEnabled` is true. */
    set enabledItem(item) {
        if (!item && !this.allowNoEnabled) {
            throw new Error('Setting enabledItem to null is disallowed.');
        }
        this.enableItem(item);
    }
    /**
     * Get all the SidenavItems in the Sidenav. The items are in the order that
     * they are shown, top to bottom.
     */
    get items() {
        return this.childrenSlot.assignedElements()
            .filter(isSidenavItem)
            .flatMap(
        // The Sidenav's slot contains the declarations of all SidenavItems,
        // regardless of how nested. However, `assignedElements()` returns
        // an array of the top elements, so we have to expand each one
        // individually.
        e => [e].concat(Array.from(e.querySelectorAll('cros-sidenav-item'))));
    }
    /**
     * The child tree items which can be selected, e.g. using the arrow keys.
     * This set always includes the selected item, even if it is not selectable.
     * For example, this could happen if the item was selected before being
     * disabled.
     */
    get selectableItems() {
        return this.items.filter(e => isSelectable(e) || isSelected(e));
    }
    /** The default unnamed slot to let consumer pass children tree items. */
    get childrenSlot() {
        return castExists(this.renderRoot.querySelector('slot'));
    }
    /**
     * The `selectedItem` is the item that the user navigated to. If the user
     * hasn't navigated, this is the enabled item. The `selectedItem` is the item
     * that should receive focus when the sidenav receives focus. There should
     * always be an item to focus, unless there are no items.
     */
    get selectedItem() {
        return this.items.find(isSelected) || null;
    }
    constructor() {
        super();
        /**
         * Listens for changes on sidenav children and recalculates the sidenav's
         * state if necessary.
         */
        this.itemAttributeObserver = new MutationObserver((mutationList) => {
            for (const mutation of mutationList) {
                if (mutation.type === 'attributes' &&
                    mutation.target.tagName === 'CROS-SIDENAV-ITEM' &&
                    mutation.attributeName?.toLowerCase() === 'mayhavechildren') {
                    this.updateLayered();
                    return;
                }
                if (mutation.type === 'childList') {
                    this.updateLayered();
                    return;
                }
            }
        });
        this.doubleclickExpands = false;
        this.allowNoEnabled = false;
        this.role = 'navigation';
        // Listen for changes to children, to update the Sidenav's state if
        // necessary.
        this.itemAttributeObserver.observe(this, ATTRIBUTE_OBSERVER_CONFIG);
    }
    render() {
        return html `
      <ul
          class="tree"
          role="tree"
          @dblclick=${this.onTreeDblClicked}
          @keydown=${this.onTreeKeyDown}
          @cros-sidenav-item-expanded=${this.onSidenavItemExpanded}
          @cros-sidenav-item-collapsed=${this.onSidenavItemCollapsed}
          @cros-sidenav-item-enabled-changed=${this.onSidenavItemEnabledChanged}>
        <slot @slotchange=${this.onSlotChanged}></slot>
      </ul>
    `;
    }
    /**
     * If the sidenav receives focus, proxy focus down to the selected sidenav
     * item.
     */
    focus() {
        // If there are items, there's always a selected item.
        if (this.selectedItem) {
            this.selectedItem.focus();
        }
    }
    /**
     * When the children change, make sure the sidenav state is passed on to the
     * new tree structure.
     */
    onSlotChanged() {
        const rootChildren = this.childrenSlot.assignedElements().filter(isSidenavItem);
        rootChildren.forEach((child, i) => {
            child.layer = 0;
            child.ariaSetSize = `${rootChildren.length}`;
            child.ariaPosInSet = `${i + 1}`;
        });
        // The sidenav must always have a selected item, unless `allowNoEnabled`.
        if (!this.items.some(item => item.enabled) &&
            this.selectableItems.length > 0 && !this.allowNoEnabled) {
            // Enabling an item also makes it the selected item.
            this.enableItem(castExists(this.selectableItems[0]));
        }
        // The sidenav must always have a selected item.
        if (!this.selectedItem && this.selectableItems.length > 0) {
            this.selectItem(castExists(this.selectableItems[0]));
        }
        this.updateLayered();
    }
    /**
     * Infers whether this sidenav has nested children (i.e. is layered), and
     * sets `inLayered` on all the children.
     */
    updateLayered() {
        const layered = this.querySelectorAll('cros-sidenav-item cros-sidenav-item, ' +
            'cros-sidenav-item[mayHaveChildren]')
            .length > 0;
        for (const item of this.querySelectorAll('cros-sidenav-item')) {
            item.inLayered = layered;
        }
    }
    /** Handles the expanded event of the tree item. */
    onSidenavItemExpanded(e) {
        const treeItem = e.detail.item;
        treeItem.scrollIntoViewIfNeeded(false);
    }
    /** Handles the collapse event of the tree item. */
    onSidenavItemCollapsed(e) {
        const collapsedItem = e.detail.item;
        // If the currently selected tree item (`oldSelectedItem`) is a descent of
        // another tree item (`treeItem`) which is going to be collapsed, we need to
        // mark the ancestor tree item (`this`) as selected.
        if (this.selectedItem !== collapsedItem) {
            const oldSelectedItem = this.selectedItem;
            if (oldSelectedItem && collapsedItem.contains(oldSelectedItem)) {
                this.selectItem(collapsedItem);
            }
        }
    }
    /** Handles when that enabled status of an item has changed. */
    onSidenavItemEnabledChanged(e) {
        const item = e.detail.item;
        if (item.enabled) {
            item.reveal();
            this.enableItem(item);
        }
    }
    /** Called when the user double clicks on a tree item. */
    async onTreeDblClicked(e) {
        if (!this.doubleclickExpands)
            return;
        // Stop if the the click target is not a tree item.
        const treeItem = e.target;
        if (treeItem && !isSidenavItem(treeItem)) {
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
        }
    }
    /**
     * Handle the keydown within the tree, this mainly handles the navigation
     * and the selection with the keyboard.
     */
    onTreeKeyDown(e) {
        const selectedItem = this.selectedItem;
        const selectableItems = this.selectableItems;
        const currentIndex = selectableItems.findIndex(i => i === selectedItem);
        if (e.ctrlKey) {
            return;
        }
        if (!selectedItem || currentIndex === -1) {
            return;
        }
        let itemToSelect = null;
        switch (e.key) {
            case 'ArrowUp':
                if (currentIndex > 0) {
                    itemToSelect = selectableItems[currentIndex - 1];
                }
                break;
            case 'ArrowDown':
                if (currentIndex < selectableItems.length - 1) {
                    itemToSelect = selectableItems[currentIndex + 1];
                }
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
                // Don't let back/forward keyboard shortcuts be used.
                if (e.altKey) {
                    break;
                }
                const expandKey = isRTL() ? 'ArrowLeft' : 'ArrowRight';
                if (e.key === expandKey) {
                    if (selectedItem.hasChildren() && !selectedItem.expanded) {
                        selectedItem.expanded = true;
                    }
                    else {
                        itemToSelect = selectedItem.selectableItems[0];
                    }
                }
                else {
                    if (selectedItem.expanded) {
                        selectedItem.expanded = false;
                    }
                    else {
                        itemToSelect = selectedItem.parentItem;
                    }
                }
                break;
            case 'Home':
                itemToSelect = this.selectableItems[0];
                break;
            case 'End':
                itemToSelect = this.selectableItems[this.selectableItems.length - 1];
                break;
            case '*':
                for (const item of this.selectableItems) {
                    if (item.parentItem === selectedItem.parentItem) {
                        item.expanded = true;
                    }
                }
                break;
            default:
                break;
        }
        // Select the next item whose label starts with the pressed key.
        if (e.key.match('^[A-Za-z]$')) {
            // Search after the current item, then continue searching from the
            // beginning of the items list.
            for (let searchIndex = (currentIndex + 1) % selectableItems.length; searchIndex !== currentIndex; searchIndex = (searchIndex + 1) % selectableItems.length) {
                const searchItem = selectableItems[searchIndex];
                if (searchItem.label.toLowerCase().startsWith(e.key.toLowerCase())) {
                    itemToSelect = searchItem;
                    break;
                }
            }
        }
        if (itemToSelect) {
            this.selectItem(itemToSelect);
            e.preventDefault();
        }
    }
    /**
     * Make `itemToEnable` become the enabled item in the tree, this will
     * also un-enable the previously enabled tree item to make sure at most
     * one tree item is enabled in the tree.
     */
    enableItem(itemToEnable) {
        const previousEnabledItem = this.items.find(item => item.enabled && item !== itemToEnable) || null;
        if (previousEnabledItem) {
            previousEnabledItem.enabled = false;
        }
        if (itemToEnable) {
            itemToEnable.enabled = true;
            this.selectItem(itemToEnable);
            itemToEnable
                .scrollIntoViewIfNeeded(false);
        }
        const enabledChangeEvent = new CustomEvent(Sidenav.events.SIDENAV_ENABLED_CHANGED, {
            bubbles: true,
            composed: true,
            detail: {
                previousEnabledItem,
                enabledItem: itemToEnable,
            },
        });
        this.dispatchEvent(enabledChangeEvent);
    }
    /**
     * Make `itemToSelect` become the selected item in the tree. The previously
     * selected item is unselected. The selected item is the only tabbable item,
     * so that if the user tabs away and returns, they return to the last selected
     * item.
     */
    selectItem(itemToSelect) {
        const oldSelectedItem = this.items.find(item => isSelected(item) && item !== itemToSelect);
        if (oldSelectedItem)
            oldSelectedItem.tabIndex = -1;
        itemToSelect.tabIndex = 0;
        // If the sidenav has focus, move focus to the newly selected item.
        if (this.contains(shadowPiercingActiveItem())) {
            if (oldSelectedItem)
                oldSelectedItem.blur();
            // Schedule the focusing, because we may need to wait for the item to
            // become visible, so that it can receive focus.
            itemToSelect.updateComplete.then(() => {
                itemToSelect.focus();
            });
        }
    }
}
customElements.define('cros-sidenav', Sidenav);
