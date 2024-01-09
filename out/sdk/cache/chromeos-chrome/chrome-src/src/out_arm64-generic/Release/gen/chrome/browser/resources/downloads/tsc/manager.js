// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './strings.m.js';
import './bypass_warning_confirmation_dialog.js';
import './item.js';
import './toolbar.js';
import 'chrome://resources/cr_components/managed_footnote/managed_footnote.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_page_host_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { getToastManager } from 'chrome://resources/cr_elements/cr_toast/cr_toast_manager.js';
import { FindShortcutMixin } from 'chrome://resources/cr_elements/find_shortcut_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { Debouncer, PolymerElement, timeOut } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BrowserProxy } from './browser_proxy.js';
import { State } from './downloads.mojom-webui.js';
import { getTemplate } from './manager.html.js';
import { SearchService } from './search_service.js';
const DownloadsManagerElementBase = FindShortcutMixin(PolymerElement);
export class DownloadsManagerElement extends DownloadsManagerElementBase {
    static get is() {
        return 'downloads-manager';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            hasDownloads_: {
                observer: 'hasDownloadsChanged_',
                type: Boolean,
            },
            hasShadow_: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            inSearchMode_: {
                type: Boolean,
                value: false,
            },
            items_: {
                type: Array,
                value() {
                    return [];
                },
            },
            spinnerActive_: {
                type: Boolean,
                notify: true,
            },
            bypassDialogItemId_: {
                type: String,
                value: '',
            },
            lastFocused_: Object,
            listBlurred_: Boolean,
        };
    }
    static get observers() {
        return ['itemsChanged_(items_.*)'];
    }
    constructor() {
        super();
        this.announcerDebouncer_ = null;
        this.searchService_ = SearchService.getInstance();
        this.loaded_ = new PromiseResolver();
        this.eventTracker_ = new EventTracker();
        const browserProxy = BrowserProxy.getInstance();
        this.mojoEventTarget_ = browserProxy.callbackRouter;
        this.mojoHandler_ = browserProxy.handler;
        // Regular expression that captures the leading slash, the content and the
        // trailing slash in three different groups.
        const CANONICAL_PATH_REGEX = /(^\/)([\/-\w]+)(\/$)/;
        const path = location.pathname.replace(CANONICAL_PATH_REGEX, '$1$2');
        if (path !== '/') { // There are no subpages in chrome://downloads.
            window.history.replaceState(undefined /* stateObject */, '', '/');
        }
    }
    connectedCallback() {
        super.connectedCallback();
        // TODO(dbeam): this should use a class instead.
        this.toggleAttribute('loading', true);
        document.documentElement.classList.remove('loading');
        this.listenerIds_ = [
            this.mojoEventTarget_.clearAll.addListener(this.clearAll_.bind(this)),
            this.mojoEventTarget_.insertItems.addListener(this.insertItems_.bind(this)),
            this.mojoEventTarget_.removeItem.addListener(this.removeItem_.bind(this)),
            this.mojoEventTarget_.updateItem.addListener(this.updateItem_.bind(this)),
        ];
        this.eventTracker_.add(document, 'keydown', (e) => this.onKeyDown_(e));
        this.eventTracker_.add(document, 'click', () => this.onClick_());
        this.loaded_.promise.then(() => {
            requestIdleCallback(function () {
                // https://github.com/microsoft/TypeScript/issues/13569
                document.fonts.load('bold 12px Roboto');
            });
        });
        this.searchService_.loadMore();
        // Intercepts clicks on toast.
        const toastManager = getToastManager();
        toastManager.shadowRoot.querySelector('#toast').onclick =
            e => this.onToastClicked_(e);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds_.forEach(id => assert(this.mojoEventTarget_.removeListener(id)));
        this.eventTracker_.removeAll();
    }
    onSaveDangerousClick_(e) {
        const bypassItem = this.items_.find(item => item.id === e.detail.id);
        if (bypassItem) {
            this.bypassDialogItemId_ = bypassItem.id;
            assert(!!this.mojoHandler_);
            this.mojoHandler_.recordOpenBypassWarningPrompt(this.bypassDialogItemId_);
        }
    }
    shouldShowBypassWarningDialog_() {
        return this.bypassDialogItemId_ !== '';
    }
    computeBypassWarningDialogFileName_() {
        const bypassItem = this.items_.find(item => item.id === this.bypassDialogItemId_);
        return bypassItem?.fileName || '';
    }
    hideBypassWarningDialog_() {
        this.bypassDialogItemId_ = '';
    }
    onBypassWarningConfirmationDialogClose_() {
        const dialog = this.shadowRoot.querySelector('download-bypass-warning-confirmation-dialog');
        assert(dialog);
        assert(this.bypassDialogItemId_ !== '');
        assert(!!this.mojoHandler_);
        if (dialog.wasConfirmed()) {
            this.mojoHandler_.saveDangerousFromPromptRequiringGesture(this.bypassDialogItemId_);
        }
        else {
            // Closing the dialog by clicking cancel is treated the same as closing
            // the dialog by pressing Esc. Both are treated as CANCEL, not CLOSE.
            this.mojoHandler_.recordCancelBypassWarningPrompt(this.bypassDialogItemId_);
        }
        this.hideBypassWarningDialog_();
    }
    clearAll_() {
        this.set('items_', []);
    }
    hasDownloadsChanged_() {
        if (this.hasDownloads_) {
            this.$.downloadsList.fire('iron-resize');
        }
    }
    insertItems_(index, items) {
        // Insert |items| at the given |index| via Array#splice().
        if (items.length > 0) {
            this.items_.splice(index, 0, ...items);
            this.updateHideDates_(index, index + items.length);
            this.notifySplices('items_', [{
                    index: index,
                    addedCount: items.length,
                    object: this.items_,
                    type: 'splice',
                    removed: [],
                }]);
        }
        if (this.hasAttribute('loading')) {
            this.removeAttribute('loading');
            this.loaded_.resolve();
        }
        this.spinnerActive_ = false;
    }
    itemsChanged_() {
        this.hasDownloads_ = this.items_.length > 0;
        this.$.toolbar.hasClearableDownloads =
            loadTimeData.getBoolean('allowDeletingHistory') &&
                this.items_.some(({ state }) => state !== State.kDangerous &&
                    state !== State.kInsecure && state !== State.kInProgress &&
                    state !== State.kPaused);
        if (this.inSearchMode_) {
            this.announcerDebouncer_ = Debouncer.debounce(this.announcerDebouncer_, timeOut.after(500), () => {
                const searchText = this.$.toolbar.getSearchText();
                const announcement = this.items_.length === 0 ?
                    this.noDownloadsText_() :
                    (this.items_.length === 1 ?
                        loadTimeData.getStringF('searchResultsSingular', searchText) :
                        loadTimeData.getStringF('searchResultsPlural', this.items_.length, searchText));
                getAnnouncerInstance().announce(announcement);
            });
        }
    }
    /**
     * @return The text to show when no download items are showing.
     */
    noDownloadsText_() {
        return loadTimeData.getString(this.inSearchMode_ ? 'noSearchResults' : 'noDownloads');
    }
    onKeyDown_(e) {
        let clearAllKey = 'c';
        // 
        if (e.key === clearAllKey && e.altKey && !e.ctrlKey && !e.shiftKey &&
            !e.metaKey) {
            this.onClearAllCommand_();
            e.preventDefault();
            return;
        }
        if (e.key === 'z' && !e.altKey && !e.shiftKey) {
            let hasTriggerModifier = e.ctrlKey && !e.metaKey;
            // 
            if (hasTriggerModifier) {
                this.onUndoCommand_();
                e.preventDefault();
            }
        }
    }
    onClick_() {
        const toastManager = getToastManager();
        if (toastManager.isToastOpen) {
            toastManager.hide();
        }
    }
    onClearAllCommand_() {
        if (!this.$.toolbar.canClearAll()) {
            return;
        }
        this.mojoHandler_.clearAll();
        const canUndo = this.items_.some(data => !data.isDangerous && !data.isInsecure);
        getToastManager().show(loadTimeData.getString('toastClearedAll'), 
        /* hideSlotted= */ !canUndo);
    }
    onUndoCommand_() {
        if (!this.$.toolbar.canUndo()) {
            return;
        }
        getToastManager().hide();
        this.mojoHandler_.undo();
    }
    onToastClicked_(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    onScroll_() {
        const container = this.$.downloadsList.scrollTarget;
        const distanceToBottom = container.scrollHeight - container.scrollTop - container.offsetHeight;
        if (distanceToBottom <= 100) {
            // Approaching the end of the scrollback. Attempt to load more items.
            this.searchService_.loadMore();
        }
        this.hasShadow_ = container.scrollTop > 0;
    }
    onSearchChanged_() {
        this.inSearchMode_ = this.searchService_.isSearching();
    }
    removeItem_(index) {
        const removed = this.items_.splice(index, 1);
        this.updateHideDates_(index, index);
        if (removed.some(item => item.id === this.bypassDialogItemId_)) {
            this.hideBypassWarningDialog_();
        }
        this.notifySplices('items_', [{
                index: index,
                addedCount: 0,
                object: this.items_,
                type: 'splice',
                removed: removed,
            }]);
        this.onScroll_();
    }
    onUndoClick_() {
        getToastManager().hide();
        this.mojoHandler_.undo();
    }
    /**
     * Updates whether dates should show for |this.items_[start - end]|. Note:
     * this method does not trigger template bindings. Use notifySplices() or
     * after calling this method to ensure items are redrawn.
     */
    updateHideDates_(start, end) {
        for (let i = start; i <= end; ++i) {
            const current = this.items_[i];
            if (!current) {
                continue;
            }
            const prev = this.items_[i - 1];
            current.hideDate = !!prev && prev.dateString === current.dateString;
        }
    }
    updateItem_(index, data) {
        this.items_[index] = data;
        this.updateHideDates_(index, index);
        this.notifyPath(`items_.${index}`);
        setTimeout(() => {
            const list = this.$.downloadsList;
            list.updateSizeForIndex(index);
        }, 0);
    }
    // Override FindShortcutMixin methods.
    handleFindShortcut(modalContextOpen) {
        if (modalContextOpen) {
            return false;
        }
        this.$.toolbar.focusOnSearchInput();
        return true;
    }
    // Override FindShortcutMixin methods.
    searchInputHasFocus() {
        return this.$.toolbar.isSearchFocused();
    }
}
customElements.define(DownloadsManagerElement.is, DownloadsManagerElement);
