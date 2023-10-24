// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://user-notes-side-panel.top-chrome/shared/sp_icons.html.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../strings.m.js';
import './user_note.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { UserNotesApiProxyImpl } from './user_notes_api_proxy.js';
import { getTemplate } from './user_notes_list.html.js';
export class UserNotesListElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.userNotesApi_ = UserNotesApiProxyImpl.getInstance();
        this.listenerId_ = null;
    }
    static get is() {
        return 'user-notes-list';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            notes: {
                type: Array,
                value: () => [],
            },
            startNoteCreation: {
                type: Boolean,
                notify: true,
            },
            firstNoteCreation: {
                type: Boolean,
                value: false,
            },
            activeSortIndex_: {
                type: Number,
                observer: 'onActiveSortIndexChanged_',
                value: function () {
                    return loadTimeData.getBoolean('sortByNewest') ? 0 : 1;
                },
            },
            sortTypes_: {
                type: Array,
                value: () => [loadTimeData.getString('sortNewest'),
                    loadTimeData.getString('sortOldest')],
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        const callbackRouter = this.userNotesApi_.getCallbackRouter();
        this.listenerId_ = callbackRouter.sortByNewestPrefChanged.addListener((sortByNewest) => {
            const sortIndex = sortByNewest ? 0 : 1;
            if (this.activeSortIndex_ !== sortIndex) {
                this.activeSortIndex_ = sortIndex;
            }
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.listenerId_);
        this.userNotesApi_.getCallbackRouter().removeListener(this.listenerId_);
        this.listenerId_ = null;
    }
    onAllNotesClick_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.dispatchEvent(new CustomEvent('all-notes-click', {
            bubbles: true,
            composed: true,
        }));
    }
    onShowSortMenuClicked_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.$.sortMenu.showAt(event.target);
    }
    getSortLabel_() {
        return this.sortTypes_[this.activeSortIndex_];
    }
    getSortMenuItemLabel_(sortType) {
        return loadTimeData.getStringF('sortByType', sortType);
    }
    sortMenuItemIsSelected_(sortType) {
        return this.sortTypes_[this.activeSortIndex_] === sortType;
    }
    onSortTypeClicked_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.$.sortMenu.close();
        const sortByNewest = event.model.index === 0;
        this.userNotesApi_.setSortOrder(sortByNewest);
    }
    onActiveSortIndexChanged_() {
        this.$.notesList.render();
    }
    sortByModificationTime_(note1, note2) {
        const sortByNewest = this.activeSortIndex_ === 0;
        if (note1 === null) {
            return sortByNewest ? -1 : 1;
        }
        if (note2 === null) {
            return sortByNewest ? 1 : -1;
        }
        const comp = Number(note1.lastModificationTime.internalValue -
            note2.lastModificationTime.internalValue);
        return sortByNewest ? -comp : comp;
    }
}
customElements.define(UserNotesListElement.is, UserNotesListElement);
