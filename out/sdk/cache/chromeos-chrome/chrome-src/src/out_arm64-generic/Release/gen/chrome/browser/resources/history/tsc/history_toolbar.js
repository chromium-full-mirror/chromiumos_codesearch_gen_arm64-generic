// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './shared_style.css.js';
import './strings.m.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_selection_overlay.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { IronA11yAnnouncer } from 'chrome://resources/polymer/v3_0/iron-a11y-announcer/iron-a11y-announcer.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './history_toolbar.html.js';
export class HistoryToolbarElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.count = 0;
        this.itemsSelected_ = false;
    }
    static get is() {
        return 'history-toolbar';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            // Number of history items currently selected.
            // TODO(calamity): bind this to
            // listContainer.selectedItem.selectedPaths.length.
            count: {
                type: Number,
                observer: 'changeToolbarView_',
            },
            // True if 1 or more history items are selected. When this value changes
            // the background colour changes.
            itemsSelected_: Boolean,
            pendingDelete: Boolean,
            // The most recent term entered in the search field. Updated incrementally
            // as the user types.
            searchTerm: {
                type: String,
                observer: 'searchTermChanged_',
            },
            // True if the backend is processing and a spinner should be shown in the
            // toolbar.
            spinnerActive: {
                type: Boolean,
                value: false,
            },
            hasDrawer: {
                type: Boolean,
                reflectToAttribute: true,
            },
            hasMoreResults: Boolean,
            querying: Boolean,
            queryInfo: Object,
            // Whether to show the menu promo (a tooltip that points at the menu
            // button
            // in narrow mode).
            showMenuPromo: Boolean,
        };
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    get searchField() {
        return this.$.mainToolbar.getSearchField();
    }
    deleteSelectedItems() {
        this.fire_('delete-selected');
    }
    clearSelectedItems() {
        this.fire_('unselect-all');
        IronA11yAnnouncer.requestAvailability();
        this.fire_('iron-announce', { text: loadTimeData.getString('itemsUnselected') });
    }
    /**
     * Changes the toolbar background color depending on whether any history items
     * are currently selected.
     */
    changeToolbarView_() {
        this.itemsSelected_ = this.count > 0;
    }
    /**
     * When changing the search term externally, update the search field to
     * reflect the new search term.
     */
    searchTermChanged_() {
        if (this.searchField.getValue() !== this.searchTerm) {
            this.searchField.showAndFocus();
            this.searchField.setValue(this.searchTerm);
        }
    }
    canShowMenuPromo_() {
        return this.showMenuPromo && !loadTimeData.getBoolean('isGuestSession');
    }
    onSearchChanged_(event) {
        this.fire_('change-query', { search: event.detail });
    }
    numberOfItemsSelected_(count) {
        return count > 0 ? loadTimeData.getStringF('itemsSelected', count) : '';
    }
}
customElements.define(HistoryToolbarElement.is, HistoryToolbarElement);
