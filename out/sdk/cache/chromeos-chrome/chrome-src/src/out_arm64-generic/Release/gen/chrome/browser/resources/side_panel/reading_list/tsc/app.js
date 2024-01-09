// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://read-later.top-chrome/shared/sp_empty_state.js';
import 'chrome://read-later.top-chrome/shared/sp_footer.js';
import 'chrome://read-later.top-chrome/shared/sp_heading.js';
import 'chrome://read-later.top-chrome/shared/sp_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/mwb_element_shared_style.css.js';
import 'chrome://resources/cr_elements/mwb_shared_style.css.js';
import 'chrome://resources/cr_elements/mwb_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/iron-selector/iron-selector.js';
import './reading_list_item.js';
import '../strings.m.js';
import { ColorChangeUpdater } from '//resources/cr_components/color_change_listener/colors_css_updater.js';
import { HelpBubbleMixin } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { listenOnce } from 'chrome://resources/js/util.js';
import { IronSelectableBehavior } from 'chrome://resources/polymer/v3_0/iron-selector/iron-selectable.js';
import { mixinBehaviors, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './app.html.js';
import { CurrentPageActionButtonState } from './reading_list.mojom-webui.js';
import { ReadingListApiProxyImpl } from './reading_list_api_proxy.js';
import { MARKED_AS_READ_UI_EVENT } from './reading_list_item.js';
const navigationKeys = new Set(['ArrowDown', 'ArrowUp']);
const ReadingListAppElementBase = mixinBehaviors([IronSelectableBehavior], HelpBubbleMixin(PolymerElement));
// browser_element_identifiers constants
const ADD_CURRENT_TAB_ELEMENT_ID = 'kAddCurrentTabToReadingListElementId';
const READING_LIST_UNREAD_ELEMENT_ID = 'kSidePanelReadingListUnreadElementId';
const MARKED_AS_READ_NATIVE_EVENT_ID = 'kSidePanelReadingMarkedAsReadEventId';
export class ReadingListAppElement extends ReadingListAppElementBase {
    static get is() {
        return 'reading-list-app';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /** Property for IronSelectableBehavior */
            attrForSelected: {
                type: String,
                value: 'data-url',
            },
            unreadItems_: {
                type: Array,
                value: [],
            },
            readItems_: {
                type: Array,
                value: [],
            },
            currentPageActionButtonState_: {
                type: Number,
                value: CurrentPageActionButtonState.kDisabled,
            },
            buttonRipples: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('useRipples'),
            },
            loadingContent_: {
                type: Boolean,
                value: true,
            },
        };
    }
    constructor() {
        super();
        this.apiProxy_ = ReadingListApiProxyImpl.getInstance();
        this.listenerIds_ = [];
        this.readingListEventTracker_ = new EventTracker();
        ColorChangeUpdater.forDocument().start();
        this.visibilityChangedListener_ = () => {
            // Refresh Reading List's list data when transitioning into a visible
            // state.
            if (document.visibilityState === 'visible') {
                this.updateReadLaterEntries_();
            }
        };
    }
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('visibilitychange', this.visibilityChangedListener_);
        const callbackRouter = this.apiProxy_.getCallbackRouter();
        this.listenerIds_.push(callbackRouter.itemsChanged.addListener((entries) => this.updateItems_(entries)), callbackRouter.currentPageActionButtonStateChanged.addListener((state) => this.updateCurrentPageActionButton_(state)));
        this.updateReadLaterEntries_();
        this.apiProxy_.updateCurrentPageActionButtonState();
        this.readingListEventTracker_.add(this.root, MARKED_AS_READ_UI_EVENT, this.onMarkedAsRead.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds_.forEach(id => this.apiProxy_.getCallbackRouter().removeListener(id));
        document.removeEventListener('visibilitychange', this.visibilityChangedListener_);
        this.unregisterHelpBubble(READING_LIST_UNREAD_ELEMENT_ID);
        this.readingListEventTracker_.remove(this.root, MARKED_AS_READ_UI_EVENT);
    }
    ready() {
        super.ready();
        this.registerHelpBubble(ADD_CURRENT_TAB_ELEMENT_ID, '#currentPageActionButton');
        this.$.unreadItemsList.addEventListener('rendered-item-count-changed', () => {
            const firstUnreadItem = this.root.querySelector('.unread-item');
            if (firstUnreadItem) {
                this.registerHelpBubble(READING_LIST_UNREAD_ELEMENT_ID, firstUnreadItem);
            }
        });
    }
    /** Overridden from IronSelectableBehavior to allow nested items. */
    get items() {
        return Array.from(this.shadowRoot.querySelectorAll('reading-list-item'));
    }
    /**
     * Fetches the latest reading list entries from the browser.
     */
    async updateReadLaterEntries_() {
        const getEntriesStartTimestamp = Date.now();
        const { entries } = await this.apiProxy_.getReadLaterEntries();
        chrome.metricsPrivate.recordTime('ReadingList.WebUI.ReadingListDataReceived', Math.round(Date.now() - getEntriesStartTimestamp));
        if (entries.unreadEntries.length !== 0 ||
            entries.readEntries.length !== 0) {
            listenOnce(this.$.readingListList, 'dom-change', () => {
                // Push ShowUI() callback to the event queue to allow deferred rendering
                // to take place.
                setTimeout(() => this.apiProxy_.showUi(), 0);
            });
        }
        else {
            setTimeout(() => this.apiProxy_.showUi(), 0);
        }
        this.updateItems_(entries);
    }
    updateItems_(entries) {
        this.unreadItems_ = entries.unreadEntries;
        this.readItems_ = entries.readEntries;
        this.loadingContent_ = false;
    }
    updateCurrentPageActionButton_(state) {
        this.currentPageActionButtonState_ = state;
    }
    ariaLabel_(item) {
        return `${item.title} - ${item.displayUrl} - ${item.displayTimeSinceUpdate}`;
    }
    /**
     * @return The appropriate text for the empty state subheader
     */
    getEmptyStateSubheaderText_() {
        return loadTimeData.getString('emptyStateAddFromDialogSubheader');
    }
    /**
     * @return The appropriate text for the current page action button
     */
    getCurrentPageActionButtonText_() {
        if (this.getCurrentPageActionButtonMarkAsRead_()) {
            return loadTimeData.getString('markCurrentTabAsRead');
        }
        else {
            return loadTimeData.getString('addCurrentTab');
        }
    }
    /**
     * @return The appropriate cr icon for the current page action button
     */
    getCurrentPageActionButtonIcon_() {
        if (this.getCurrentPageActionButtonMarkAsRead_()) {
            return 'cr:check';
        }
        else {
            return 'cr:add';
        }
    }
    /**
     * @return Whether the current page action button should be disabled
     */
    getCurrentPageActionButtonDisabled_() {
        return this.currentPageActionButtonState_ ===
            CurrentPageActionButtonState.kDisabled;
    }
    /**
     * @return Whether the current page action button should be in its mark as
     * read state
     */
    getCurrentPageActionButtonMarkAsRead_() {
        return this.currentPageActionButtonState_ ===
            CurrentPageActionButtonState.kMarkAsRead;
    }
    isReadingListEmpty_() {
        return this.unreadItems_.length === 0 && this.readItems_.length === 0;
    }
    onCurrentPageActionButtonClick_() {
        if (this.getCurrentPageActionButtonMarkAsRead_()) {
            this.apiProxy_.markCurrentTabAsRead();
            this.sendTutorialCustomEvent();
        }
        else {
            this.apiProxy_.addCurrentTab();
        }
    }
    onMarkedAsRead() {
        this.sendTutorialCustomEvent();
    }
    sendTutorialCustomEvent() {
        this.notifyHelpBubbleAnchorCustomEvent(READING_LIST_UNREAD_ELEMENT_ID, MARKED_AS_READ_NATIVE_EVENT_ID);
    }
    onItemKeyDown_(e) {
        if (e.shiftKey || !navigationKeys.has(e.key)) {
            return;
        }
        switch (e.key) {
            case 'ArrowDown':
                this.selectNext();
                this.selectedItem.focus();
                break;
            case 'ArrowUp':
                this.selectPrevious();
                this.selectedItem.focus();
                break;
            default:
                assertNotReached();
        }
        e.preventDefault();
        e.stopPropagation();
    }
    onItemFocus_(e) {
        this.selected = e.currentTarget.dataset['url'];
    }
    shouldShowHr_() {
        return this.unreadItems_.length > 0 && this.readItems_.length > 0;
    }
    shouldShowList_() {
        return this.unreadItems_.length > 0 || this.readItems_.length > 0;
    }
}
customElements.define(ReadingListAppElement.is, ReadingListAppElement);
