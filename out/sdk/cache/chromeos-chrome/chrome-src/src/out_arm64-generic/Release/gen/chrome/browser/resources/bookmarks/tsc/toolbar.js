// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_selection_overlay.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './shared_style.css.js';
import './strings.m.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_search_field.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { setSearchTerm } from './actions.js';
import { BookmarksCommandManagerElement } from './command_manager.js';
import { Command, MenuSource } from './constants.js';
import { StoreClientMixin } from './store_client_mixin.js';
import { getTemplate } from './toolbar.html.js';
const BookmarksToolbarElementBase = StoreClientMixin(PolymerElement);
export class BookmarksToolbarElement extends BookmarksToolbarElementBase {
    static get is() {
        return 'bookmarks-toolbar';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            sidebarWidth: {
                type: String,
                observer: 'onSidebarWidthChanged_',
            },
            showSelectionOverlay: {
                type: Boolean,
                computed: 'shouldShowSelectionOverlay_(selectedItems_, globalCanEdit_)',
                readOnly: true,
            },
            narrow_: {
                type: Boolean,
                reflectToAttribute: true,
            },
            searchTerm_: {
                type: String,
                observer: 'onSearchTermChanged_',
            },
            selectedItems_: Object,
            globalCanEdit_: Boolean,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.watch('searchTerm_', state => state.search.term);
        this.watch('selectedItems_', state => state.selection.items);
        this.watch('globalCanEdit_', state => state.prefs.canEdit);
        this.updateFromStore();
    }
    get searchField() {
        return this.shadowRoot.querySelector('cr-toolbar')
            .getSearchField();
    }
    onMenuButtonOpenClick_(e) {
        this.dispatchEvent(new CustomEvent('open-command-menu', {
            bubbles: true,
            composed: true,
            detail: {
                targetElement: e.target,
                source: MenuSource.TOOLBAR,
            },
        }));
    }
    onDeleteSelectionClick_() {
        const selection = this.selectedItems_;
        const commandManager = BookmarksCommandManagerElement.getInstance();
        assert(commandManager.canExecute(Command.DELETE, selection));
        commandManager.handle(Command.DELETE, selection);
    }
    onClearSelectionClick_() {
        const commandManager = BookmarksCommandManagerElement.getInstance();
        assert(commandManager.canExecute(Command.DESELECT_ALL, this.selectedItems_));
        commandManager.handle(Command.DESELECT_ALL, this.selectedItems_);
    }
    onSearchChanged_(e) {
        if (e.detail !== this.searchTerm_) {
            this.dispatch(setSearchTerm(e.detail));
        }
    }
    onSidebarWidthChanged_() {
        this.style.setProperty('--sidebar-width', this.sidebarWidth);
    }
    onSearchTermChanged_() {
        this.searchField.setValue(this.searchTerm_ || '');
    }
    shouldShowSelectionOverlay_() {
        return this.selectedItems_.size > 1 && this.globalCanEdit_;
    }
    canDeleteSelection_() {
        return this.showSelectionOverlay &&
            BookmarksCommandManagerElement.getInstance().canExecute(Command.DELETE, this.selectedItems_);
    }
    getItemsSelectedString_() {
        return loadTimeData.getStringF('itemsSelected', this.selectedItems_.size);
    }
}
customElements.define(BookmarksToolbarElement.is, BookmarksToolbarElement);
