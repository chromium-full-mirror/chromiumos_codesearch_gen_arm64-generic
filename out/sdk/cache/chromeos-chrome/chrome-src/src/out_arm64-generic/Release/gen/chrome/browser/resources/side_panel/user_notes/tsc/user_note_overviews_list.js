// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './user_note_overview_row.js';
import '//user-notes-side-panel.top-chrome/shared/sp_heading.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './user_note_overviews_list.html.js';
import { UserNotesApiProxyImpl } from './user_notes_api_proxy.js';
export class UserNoteOverviewsListElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.userNotesApi_ = UserNotesApiProxyImpl.getInstance();
    }
    static get is() {
        return 'user-note-overviews-list';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            overviews: Object,
            currentTabHasNotes_: {
                computed: 'hasOverviewforCurrentTab_(overviews)',
                type: Boolean,
            },
        };
    }
    hasOverviewforCurrentTab_() {
        return this.overviews.filter(overview => overview.isCurrentTab === true)
            .length > 0;
    }
    headerShownBeforeOverview_(index) {
        return index === 0 || (index === 1 && this.currentTabHasNotes_);
    }
    getHeader_(index) {
        return loadTimeData.getString((index === 0 && this.currentTabHasNotes_) ? 'currentTab' : 'allNotes');
    }
    shouldShowHr_(overview) {
        return overview.isCurrentTab && this.overviews.length > 1;
    }
    sortOverviews_(overview1, overview2) {
        // Sort the current tab overview at the top.
        if (overview1.isCurrentTab) {
            return -1;
        }
        if (overview2.isCurrentTab) {
            return 1;
        }
        // Sort remaining overviews by last modification time.
        return Number(overview2.lastModificationTime.internalValue -
            overview1.lastModificationTime.internalValue);
    }
    onRowClicked_(event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.detail.overview.isCurrentTab) {
            this.dispatchEvent(new CustomEvent('current-tab-overview-selected', {
                bubbles: true,
                composed: true,
            }));
        }
        else {
            this.userNotesApi_.noteOverviewSelected(event.detail.overview.url, {
                middleButton: false,
                altKey: event.detail.event.altKey,
                ctrlKey: event.detail.event.ctrlKey,
                metaKey: event.detail.event.metaKey,
                shiftKey: event.detail.event.shiftKey,
            });
        }
    }
    onShowContextMenuClicked_(event) {
        event.preventDefault();
        event.stopPropagation();
        // TODO(crbug.com/1409894): Implement this.
    }
}
customElements.define(UserNoteOverviewsListElement.is, UserNoteOverviewsListElement);
