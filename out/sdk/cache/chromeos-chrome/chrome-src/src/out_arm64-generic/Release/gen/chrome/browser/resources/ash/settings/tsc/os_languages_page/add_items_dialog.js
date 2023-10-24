// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'os-settings-add-items-dialog' is a dialog for adding an
 * unordered set of items at a time. The component supports suggested items, as
 * well as items being disabled by policy.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_search_field/cr_search_field.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import './cr_checkbox_with_policy.js';
import './shared_style.css.js';
import '../settings_shared.css.js';
import { CrScrollableMixin } from 'chrome://resources/cr_elements/cr_scrollable_mixin.js';
import { FindShortcutMixin } from 'chrome://resources/cr_elements/find_shortcut_mixin.js';
import { afterNextRender, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './add_items_dialog.html.js';
const ITEMS_ADDED_EVENT_NAME = 'items-added';
const OsSettingsAddItemsDialogElementBase = CrScrollableMixin(FindShortcutMixin(PolymerElement));
export class OsSettingsAddItemsDialogElement extends OsSettingsAddItemsDialogElementBase {
    static get is() {
        return 'os-settings-add-items-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            items: {
                type: Array,
                // This array is shared between all instances of the class:
                // https://crrev.com/c/3897703/comment/fa845200_e10503c6/
                // TODO(b/265556004): Move this to the constructor to avoid this.
                value: [],
            },
            /**
             * Item IDs to show in the "Suggested" section of the dialog.
             * Any items in this array which are disabled by policy, or IDs which do
             * not appear in the items array will be filtered out automatically.
             */
            suggestedItemIds: {
                type: Array,
                // This array is shared between all instances of the class:
                // https://crrev.com/c/3897703/comment/fa845200_e10503c6/
                // TODO(b/265556004): Move this to the constructor to avoid this.
                value: [],
            },
            header: String,
            searchLabel: String,
            suggestedItemsLabel: String,
            allItemsLabel: String,
            policyTooltip: String,
            lowercaseQueryString_: String,
            filteredItems_: {
                type: Array,
                computed: 'getFilteredItems_(items.*, lowercaseQueryString_)',
                // This array is shared between all instances of the class:
                // https://crrev.com/c/3897703/comment/fa845200_e10503c6/
                // TODO(b/265556004): Move this to the constructor to avoid this.
                value: [],
            },
            itemIdsToAdd_: {
                type: Object,
                value() {
                    return new Set();
                },
            },
            /**
             * Mapping from item ID to item for use in computing `suggestedItems_`.
             */
            itemIdsToItems_: {
                type: Object,
                computed: 'getItemIdsToItems_(items.*)',
                value() {
                    return new Map();
                },
            },
            /**
             * All items in this array are guaranteed to not be disabled by policy.
             */
            suggestedItems_: {
                type: Array,
                computed: 'getSuggestedItems_(suggestedItemIds.*, itemIdsToItems_)',
                // This array is shared between all instances of the class:
                // https://crrev.com/c/3897703/comment/fa845200_e10503c6/
                // TODO(b/265556004): Move this to the constructor to avoid this.
                value: [],
            },
            showSuggestedList_: {
                type: Boolean,
                computed: `shouldShowSuggestedList_(suggestedItems_.length,
            lowercaseQueryString_)`,
                value: false,
            },
            showFilteredList_: {
                type: Boolean,
                computed: 'shouldShowFilteredList_(filteredItems_.length)',
                value: true,
            },
            disableActionButton_: {
                type: Boolean,
                computed: 'shouldDisableActionButton_(itemIdsToAdd_.size)',
                value: true,
            },
        };
    }
    static get observers() {
        return [
            // The two observers below have all possible properties that could affect
            // the scroll offset of the two lists as dependencies.
            `updateSuggestedListScrollOffset_(showSuggestedList_,
          suggestedItemsLabel)`,
            `updateFilteredListScrollOffset_(showSuggestedList_,
          suggestedItemsLabel, suggestedItems_.length, showFilteredList_)`,
        ];
    }
    handleFindShortcut(_modalContextOpen) {
        // Assumes this is the only open modal.
        const searchInput = this.$.search.getSearchInput();
        searchInput.scrollIntoView();
        if (!this.searchInputHasFocus()) {
            searchInput.focus();
        }
        return true;
    }
    searchInputHasFocus() {
        return this.$.search.getSearchInput() ===
            this.$.search.shadowRoot.activeElement;
    }
    // 'search-changed' event listener on a <cr-search-field>.
    onSearchChanged_(e) {
        this.lowercaseQueryString_ = e.detail.toLocaleLowerCase();
    }
    // 'change' event listener on a <cr-checkbox>.
    onCheckboxChange_(e) {
        const id = e.model.item.id;
        // Safety: This method is only called from a 'change' event from a
        // <cr-checkbox>, so the event target must be a <cr-checkbox>.
        if (e.target.checked) {
            this.itemIdsToAdd_.add(id);
        }
        else {
            this.itemIdsToAdd_.delete(id);
        }
        // Polymer doesn't notify changes to set size.
        this.notifyPath('itemIdsToAdd_.size');
    }
    onCancelButtonClick_() {
        this.$.dialog.close();
    }
    onActionButtonClick_() {
        const event = new CustomEvent(ITEMS_ADDED_EVENT_NAME, {
            bubbles: true,
            composed: true,
            detail: this.itemIdsToAdd_,
        });
        this.dispatchEvent(event);
        this.$.dialog.close();
    }
    onKeydown_(e) {
        // Close dialog if 'esc' is pressed and the search box is already empty.
        if (e.key === 'Escape' && !this.$.search.getValue().trim()) {
            this.$.dialog.close();
        }
        else if (e.key !== 'PageDown' && e.key !== 'PageUp') {
            this.$.search.scrollIntoView();
        }
    }
    /**
     * True if the user has chosen to add this item (checked its checkbox).
     */
    willAdd_(id) {
        return this.itemIdsToAdd_.has(id);
    }
    getItemIdsToItems_() {
        return new Map(this.items.map(item => [item.id, item]));
    }
    /**
     * Returns whether a string matches the current search query.
     */
    matchesSearchQuery_(string) {
        return string.toLocaleLowerCase().includes(this.lowercaseQueryString_);
    }
    getFilteredItems_() {
        if (!this.lowercaseQueryString_) {
            return this.items;
        }
        return this.items.filter(item => this.matchesSearchQuery_(item.name) ||
            item.searchTerms.some(term => this.matchesSearchQuery_(term)));
    }
    getSuggestedItems_() {
        return this.suggestedItemIds.map(id => this.itemIdsToItems_.get(id))
            .filter((item) => item !== undefined)
            .filter(item => !item.disabledByPolicy);
    }
    shouldShowSuggestedList_() {
        return this.suggestedItems_.length > 0 && !this.lowercaseQueryString_;
    }
    shouldShowFilteredList_() {
        return this.filteredItems_.length > 0;
    }
    shouldDisableActionButton_() {
        return !this.itemIdsToAdd_.size;
    }
    updateSuggestedListScrollOffset_() {
        afterNextRender(this, () => {
            if (!this.showSuggestedList_) {
                return;
            }
            // Because #suggested-items-list is not statically created (as it is
            // within a <template is="dom-if">), we can't use this.$ here.
            const list = this.shadowRoot.querySelector('#suggested-items-list');
            if (list === null) {
                return;
            }
            list.scrollOffset = list.offsetTop;
        });
    }
    updateFilteredListScrollOffset_() {
        afterNextRender(this, () => {
            if (!this.showFilteredList_) {
                return;
            }
            // Because #filtered-items-list is not statically created (as it is
            // within a <template is="dom-if">), we can't use this.$ here.
            const list = this.shadowRoot.querySelector('#filtered-items-list');
            if (list === null) {
                return;
            }
            list.scrollOffset = list.offsetTop;
        });
    }
}
customElements.define(OsSettingsAddItemsDialogElement.is, OsSettingsAddItemsDialogElement);
