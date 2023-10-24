// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './searched_label.js';
import './shared_style.css.js';
import './strings.m.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/js/icon.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import { FocusRowMixin } from 'chrome://resources/cr_elements/focus_row_mixin.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { getFaviconForPageURL } from 'chrome://resources/js/icon.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { afterNextRender, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BrowserServiceImpl } from './browser_service.js';
import { getTemplate } from './history_item.html.js';
const HistoryItemElementBase = FocusRowMixin(PolymerElement);
export class HistoryItemElement extends HistoryItemElementBase {
    constructor() {
        super(...arguments);
        this.isShiftKeyDown_ = false;
        this.selectionNotAllowed_ = !loadTimeData.getBoolean('allowDeletingHistory');
        this.eventTracker_ = new EventTracker();
    }
    static get is() {
        return 'history-item';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            // Underlying HistoryEntry data for this.item. Contains read-only fields
            // from the history backend, as well as fields computed by history-list.
            item: {
                type: Object,
                observer: 'itemChanged_',
            },
            selected: {
                type: Boolean,
                reflectToAttribute: true,
            },
            isCardStart: {
                type: Boolean,
                reflectToAttribute: true,
            },
            isCardEnd: {
                type: Boolean,
                reflectToAttribute: true,
            },
            lastFocused: {
                type: Object,
                notify: true,
            },
            listBlurred: {
                type: Boolean,
                notify: true,
            },
            ironListTabIndex: {
                type: Number,
                observer: 'ironListTabIndexChanged_',
            },
            selectionNotAllowed_: Boolean,
            hasTimeGap: Boolean,
            index: Number,
            numberOfItems: Number,
            // Search term used to obtain this history-item.
            searchTerm: String,
            overrideCustomEquivalent: {
                type: Boolean,
                value: true,
            },
            ariaDescribedByForHeading_: {
                type: String,
                computed: 'getAriaDescribedByForHeading_(isCardStart, isCardEnd)',
            },
            ariaDescribedByForActions_: {
                type: String,
                computed: 'getAriaDescribedByForActions_(isCardStart, isCardEnd)',
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        afterNextRender(this, () => {
            // Adding listeners asynchronously to reduce blocking time, since these
            // history items are items in a potentially long list.
            this.eventTracker_.add(this.$.checkbox, 'keydown', (e) => this.onCheckboxKeydown_(e));
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.remove(this.$.checkbox, 'keydown');
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    focusOnMenuButton() {
        focusWithoutInk(this.$['menu-button']);
    }
    onCheckboxKeydown_(e) {
        if (e.shiftKey && e.key === 'Tab') {
            this.focus();
        }
    }
    /**
     * Toggle item selection whenever the checkbox or any non-interactive part
     * of the item is clicked.
     */
    onRowClick_(e) {
        const path = e.composedPath();
        // VoiceOver has issues with click events within elements that have a role
        // of row, so this event listeners has to be on the row itself.
        // (See crbug.com/1185827.)
        let inItemContainer = false;
        for (let i = 0; i < path.length; i++) {
            const elem = path[i];
            if (elem.id !== 'checkbox' &&
                (elem.nodeName === 'A' || elem.nodeName === 'CR-ICON-BUTTON')) {
                return;
            }
            if (!inItemContainer && elem.id === 'item-container') {
                inItemContainer = true;
            }
        }
        if (this.selectionNotAllowed_ || !inItemContainer) {
            return;
        }
        this.$.checkbox.focus();
        this.fire_('history-checkbox-select', {
            index: this.index,
            shiftKey: e.shiftKey,
        });
    }
    /**
     * This is bound to mouse/keydown instead of click/press because this
     * has to fire before onCheckboxChange_. If we bind it to click/press,
     * it might trigger out of desired order.
     */
    onCheckboxClick_(e) {
        this.isShiftKeyDown_ = e.shiftKey;
    }
    onCheckboxChange_() {
        this.fire_('history-checkbox-select', {
            index: this.index,
            // If the user clicks or press enter/space key, oncheckboxClick_ will
            // trigger before this function, so a shift-key might be recorded.
            shiftKey: this.isShiftKeyDown_,
        });
        this.isShiftKeyDown_ = false;
    }
    onRowMousedown_(e) {
        // Prevent shift clicking a checkbox from selecting text.
        if (e.shiftKey) {
            e.preventDefault();
        }
    }
    getEntrySummary_() {
        const item = this.item;
        return loadTimeData.getStringF('entrySummary', this.isCardStart || this.isCardEnd ?
            this.cardTitle_(this.numberOfItems, this.searchTerm) :
            '', item.dateTimeOfDay, item.starred ? loadTimeData.getString('bookmarked') : '', item.title, item.domain);
    }
    /**
     * The first and last rows of a card have a described-by field pointing to
     * the date header, to make sure users know if they have jumped between cards
     * when navigating up or down with the keyboard.
     */
    getAriaDescribedByForHeading_() {
        return this.isCardStart || this.isCardEnd ? 'date-accessed' : '';
    }
    /**
     * Actions menu is described by the title and domain of the row and may
     * include the date to make sure users know if they have jumped between dates.
     */
    getAriaDescribedByForActions_() {
        return this.isCardStart || this.isCardEnd ?
            'title-and-domain date-accessed' :
            'title-and-domain';
    }
    getAriaChecked_(selected) {
        return selected ? 'true' : 'false';
    }
    /**
     * Remove bookmark of current item when bookmark-star is clicked.
     */
    onRemoveBookmarkClick_() {
        if (!this.item.starred) {
            return;
        }
        if (this.shadowRoot.querySelector('#bookmark-star') ===
            this.shadowRoot.activeElement) {
            focusWithoutInk(this.$['menu-button']);
        }
        const browserService = BrowserServiceImpl.getInstance();
        browserService.removeBookmark(this.item.url);
        browserService.recordAction('BookmarkStarClicked');
        this.fire_('remove-bookmark-stars', this.item.url);
    }
    /**
     * Fires a custom event when the menu button is clicked. Sends the details
     * of the history item and where the menu should appear.
     */
    onMenuButtonClick_(e) {
        this.fire_('open-menu', {
            target: e.target,
            index: this.index,
            item: this.item,
        });
        // Stops the 'click' event from closing the menu when it opens.
        e.stopPropagation();
    }
    onMenuButtonKeydown_(e) {
        if (this.item.starred && e.shiftKey && e.key === 'Tab') {
            // If this item has a bookmark star, pressing shift + Tab from the more
            // actions menu should move focus to the star. FocusRow will try to
            // instead move focus to the previous focus row control, and since the
            // star is not a focus row control, stop immediate propagation here to
            // instead allow default browser behavior.
            e.stopImmediatePropagation();
        }
    }
    /**
     * Record metrics when a result is clicked.
     */
    onLinkClick_() {
        const browserService = BrowserServiceImpl.getInstance();
        browserService.recordAction('EntryLinkClick');
        if (this.searchTerm) {
            browserService.recordAction('SearchResultClick');
        }
    }
    onLinkRightClick_() {
        BrowserServiceImpl.getInstance().recordAction('EntryLinkRightClick');
    }
    /**
     * Set the favicon image, based on the URL of the history item.
     */
    itemChanged_() {
        this.$.icon.style.backgroundImage = getFaviconForPageURL(this.item.url, this.item.isUrlInRemoteUserData, this.item.remoteIconUrlForUma);
        this.eventTracker_.add(this.$['time-accessed'], 'mouseover', () => this.addTimeTitle_());
    }
    /**
     * @param numberOfItems The number of items in the card.
     * @param search The search term associated with these results.
     * @return The title for this history card.
     */
    cardTitle_(numberOfItems, search) {
        if (this.item === undefined) {
            return '';
        }
        if (!search) {
            return this.item.dateRelativeDay;
        }
        return searchResultsTitle(numberOfItems, search);
    }
    addTimeTitle_() {
        const el = this.$['time-accessed'];
        el.setAttribute('title', new Date(this.item.time).toString());
        this.eventTracker_.remove(el, 'mouseover');
    }
    /**
     * @param sampleElement An element to find an equivalent for.
     * @return An equivalent element to focus, or null to use the
     *     default element.
     */
    getCustomEquivalent(sampleElement) {
        return sampleElement.getAttribute('focus-type') === 'star' ? this.$.link :
            null;
    }
}
customElements.define(HistoryItemElement.is, HistoryItemElement);
/**
 * @return The title for a page of search results.
 */
export function searchResultsTitle(numberOfResults, searchTerm) {
    const resultId = numberOfResults === 1 ? 'searchResult' : 'searchResults';
    return loadTimeData.getStringF('foundSearchResults', numberOfResults, loadTimeData.getString(resultId), searchTerm);
}
