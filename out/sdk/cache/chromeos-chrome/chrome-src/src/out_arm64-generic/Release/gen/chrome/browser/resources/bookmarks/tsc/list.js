// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import './shared_style.css.js';
import './strings.m.js';
import './item.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { assert } from 'chrome://resources/js/assert.js';
import { isMac } from 'chrome://resources/js/platform.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { ListPropertyUpdateMixin } from 'chrome://resources/cr_elements/list_property_update_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { getDeepActiveElement } from 'chrome://resources/js/util_ts.js';
import { microTask, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { deselectItems, selectAll, selectItem, updateAnchor } from './actions.js';
import { BookmarksCommandManagerElement } from './command_manager.js';
import { MenuSource } from './constants.js';
import { getTemplate } from './list.html.js';
import { StoreClientMixin } from './store_client_mixin.js';
import { canReorderChildren, getDisplayedList } from './util.js';
const BookmarksListElementBase = StoreClientMixin(ListPropertyUpdateMixin(PolymerElement));
export class BookmarksListElement extends BookmarksListElementBase {
    constructor() {
        super(...arguments);
        this.eventTracker_ = new EventTracker();
    }
    static get is() {
        return 'bookmarks-list';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * A list of item ids wrapped in an Object. This is necessary because
             * iron-list is unable to distinguish focusing index 6 from focusing id
             * '6' so the item we supply to iron-list needs to be non-index-like.
             */
            displayedList_: {
                type: Array,
                value() {
                    // Use an empty list during initialization so that the databinding to
                    // hide #list takes effect.
                    return [];
                },
            },
            displayedIds_: {
                type: Array,
                observer: 'onDisplayedIdsChanged_',
            },
            searchTerm_: {
                type: String,
                observer: 'onDisplayedListSourceChange_',
            },
            selectedFolder_: {
                type: String,
                observer: 'onDisplayedListSourceChange_',
            },
            selectedItems_: Object,
        };
    }
    ready() {
        super.ready();
        this.addEventListener('click', () => this.deselectItems_());
        this.addEventListener('contextmenu', e => this.onContextMenu_(e));
        this.addEventListener('open-command-menu', e => this.onOpenCommandMenu_(e));
    }
    connectedCallback() {
        super.connectedCallback();
        const list = this.$.list;
        list.scrollTarget = this;
        this.watch('displayedIds_', function (state) {
            return getDisplayedList(state);
        });
        this.watch('searchTerm_', state => state.search.term);
        this.watch('selectedFolder_', state => state.selectedFolder);
        this.watch('selectedItems_', state => state.selection.items);
        this.updateFromStore();
        this.$.list.addEventListener('keydown', this.onItemKeydown_.bind(this), true);
        this.eventTracker_.add(document, 'highlight-items', (e) => this.onHighlightItems_(e));
        this.eventTracker_.add(document, 'import-began', () => this.onImportBegan_());
        this.eventTracker_.add(document, 'import-ended', () => this.onImportEnded_());
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.remove(document, 'highlight-items');
    }
    getDropTarget() {
        return this.$.message;
    }
    /**
     * Updates `displayedList_` using splices to be equivalent to `newValue`. This
     * allows the iron-list to delete sublists of items which preserves scroll and
     * focus on incremental update.
     */
    async onDisplayedIdsChanged_(newValue, _oldValue) {
        const updatedList = newValue.map(id => ({ id: id }));
        let skipFocus = false;
        let selectIndex = -1;
        if (this.matches(':focus-within')) {
            if (this.selectedItems_.size > 0) {
                const selectedId = Array.from(this.selectedItems_)[0];
                skipFocus = newValue.some(id => id === selectedId);
                selectIndex =
                    this.displayedList_.findIndex(({ id }) => selectedId === id);
            }
            if (selectIndex === -1 && updatedList.length > 0) {
                selectIndex = 0;
            }
            else {
                selectIndex = Math.min(selectIndex, updatedList.length - 1);
            }
        }
        this.updateList('displayedList_', item => item.id, updatedList);
        // Trigger a layout of the iron list. Otherwise some elements may render
        // as blank entries. See https://crbug.com/848683
        this.$.list.dispatchEvent(new CustomEvent('iron-resize', { bubbles: true, composed: true }));
        const label = await PluralStringProxyImpl.getInstance().getPluralString('listChanged', this.displayedList_.length);
        getAnnouncerInstance().announce(label);
        if (!skipFocus && selectIndex > -1) {
            setTimeout(() => {
                this.$.list.focusItem(selectIndex);
                // Focus menu button so 'Undo' is only one tab stop away on delete.
                const item = getDeepActiveElement();
                if (item) {
                    item.focusMenuButton();
                }
            });
        }
    }
    onDisplayedListSourceChange_() {
        this.scrollTop = 0;
    }
    /**
     * Scroll the list so that |itemId| is visible, if it is not already.
     */
    scrollToId_(itemId) {
        const index = this.displayedIds_.indexOf(itemId);
        const list = this.$.list;
        if (index >= 0 && index < list.firstVisibleIndex ||
            index > list.lastVisibleIndex) {
            list.scrollToIndex(index);
        }
    }
    emptyListMessage_() {
        let emptyListMessage = 'noSearchResults';
        if (!this.searchTerm_) {
            emptyListMessage =
                canReorderChildren(this.getState(), this.getState().selectedFolder) ?
                    'emptyList' :
                    'emptyUnmodifiableList';
        }
        return loadTimeData.getString(emptyListMessage);
    }
    isEmptyList_() {
        return this.displayedList_.length === 0;
    }
    deselectItems_() {
        this.dispatch(deselectItems());
    }
    getIndexForItemElement_(el) {
        return this.$.list.modelForElement(el)
            .index;
    }
    onOpenCommandMenu_(e) {
        // If the item is not visible, scroll to it before rendering the menu.
        if (e.detail.source === MenuSource.ITEM) {
            this.scrollToId_(e.composedPath()[0].itemId);
        }
    }
    /**
     * Highlight a list of items by selecting them, scrolling them into view and
     * focusing the first item.
     */
    onHighlightItems_(e) {
        // Ensure that we only select items which are actually being displayed.
        // This should only matter if an unrelated update to the bookmark model
        // happens with the perfect timing to end up in a tracked batch update.
        const toHighlight = e.detail.filter((item) => this.displayedIds_.indexOf(item) !== -1);
        if (toHighlight.length <= 0) {
            return;
        }
        const leadId = toHighlight[0];
        this.dispatch(selectAll(toHighlight, this.getState(), leadId));
        // Allow iron-list time to render additions to the list.
        microTask.run(() => {
            this.scrollToId_(leadId);
            const leadIndex = this.displayedIds_.indexOf(leadId);
            assert(leadIndex !== -1);
            this.$.list.focusItem(leadIndex);
        });
    }
    onImportBegan_() {
        getAnnouncerInstance().announce(loadTimeData.getString('importBegan'));
    }
    onImportEnded_() {
        getAnnouncerInstance().announce(loadTimeData.getString('importEnded'));
    }
    onItemKeydown_(e) {
        let handled = true;
        const list = this.$.list;
        let focusMoved = false;
        let focusedIndex = this.getIndexForItemElement_(e.target);
        const oldFocusedIndex = focusedIndex;
        const cursorModifier = isMac ? e.metaKey : e.ctrlKey;
        if (e.key === 'ArrowUp') {
            focusedIndex--;
            focusMoved = true;
        }
        else if (e.key === 'ArrowDown') {
            focusedIndex++;
            focusMoved = true;
            e.preventDefault();
        }
        else if (e.key === 'Home') {
            focusedIndex = 0;
            focusMoved = true;
        }
        else if (e.key === 'End') {
            focusedIndex = list.items.length - 1;
            focusMoved = true;
        }
        else if (e.key === ' ' && cursorModifier) {
            this.dispatch(selectItem(this.displayedIds_[focusedIndex], this.getState(), {
                clear: false,
                range: false,
                toggle: true,
            }));
        }
        else {
            handled = false;
        }
        if (focusMoved) {
            focusedIndex =
                Math.min(list.items.length - 1, Math.max(0, focusedIndex));
            list.focusItem(focusedIndex);
            if (cursorModifier && !e.shiftKey) {
                this.dispatch(updateAnchor(this.displayedIds_[focusedIndex]));
            }
            else {
                // If shift-selecting with no anchor, use the old focus index.
                if (e.shiftKey && this.getState().selection.anchor === null) {
                    this.dispatch(updateAnchor(this.displayedIds_[oldFocusedIndex]));
                }
                // If the focus moved from something other than a Ctrl + move event,
                // update the selection.
                const config = {
                    clear: !cursorModifier,
                    range: e.shiftKey,
                    toggle: false,
                };
                this.dispatch(selectItem(this.displayedIds_[focusedIndex], this.getState(), config));
            }
        }
        // Prevent the iron-list from changing focus on enter.
        if (e.key === 'Enter') {
            if (e.composedPath()[0].tagName === 'CR-ICON-BUTTON') {
                return;
            }
            if (e.composedPath()[0] instanceof HTMLButtonElement) {
                handled = true;
            }
        }
        if (!handled) {
            handled = BookmarksCommandManagerElement.getInstance().handleKeyEvent(e, this.getState().selection.items);
        }
        if (handled) {
            e.stopPropagation();
        }
    }
    onContextMenu_(e) {
        e.preventDefault();
        this.deselectItems_();
        this.dispatchEvent(new CustomEvent('open-command-menu', {
            bubbles: true,
            composed: true,
            detail: {
                x: e.clientX,
                y: e.clientY,
                source: MenuSource.LIST,
            },
        }));
    }
    getAriaRowindex_(index) {
        return index + 1;
    }
    getAriaSelected_(id) {
        return this.selectedItems_.has(id);
    }
    setDisplayedIdsForTesting(ids) {
        this.displayedIds_ = ids;
    }
}
customElements.define(BookmarksListElement.is, BookmarksListElement);
