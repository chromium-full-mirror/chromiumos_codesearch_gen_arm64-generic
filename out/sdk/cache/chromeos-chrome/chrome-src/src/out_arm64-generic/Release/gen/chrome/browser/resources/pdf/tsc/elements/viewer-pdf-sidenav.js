// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './shared-vars.css.js';
import '../pdf_viewer_shared_style.css.js';
import './icons.html.js';
import './viewer-attachment-bar.js';
import './viewer-document-outline.js';
import './viewer-thumbnail-bar.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { record, UserAction } from '../metrics.js';
import { getTemplate } from './viewer-pdf-sidenav.html.js';
var TabId;
(function (TabId) {
    TabId[TabId["THUMBNAIL"] = 0] = "THUMBNAIL";
    TabId[TabId["OUTLINE"] = 1] = "OUTLINE";
    TabId[TabId["ATTACHMENT"] = 2] = "ATTACHMENT";
})(TabId || (TabId = {}));
export class ViewerPdfSidenavElement extends PolymerElement {
    static get is() {
        return 'viewer-pdf-sidenav';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            activePage: Number,
            attachments: {
                type: Array,
                value: () => [],
            },
            bookmarks: {
                type: Array,
                value: () => [],
            },
            clockwiseRotations: Number,
            docLength: Number,
            hideIcons_: {
                type: Boolean,
                computed: 'computeHideIcons_(tabs_.length)',
            },
            tabs_: {
                type: Array,
                computed: `computeTabs_(bookmarks.length, attachments.length)`,
            },
            selectedTab_: {
                type: Number,
                value: 0,
            },
        };
    }
    ready() {
        super.ready();
        this.$.icons.addEventListener('keydown', this.onKeydown_.bind(this));
    }
    computeTabs_() {
        const tabs = [
            {
                id: TabId.THUMBNAIL,
                icon: 'pdf:thumbnails',
                title: '$i18n{tooltipThumbnails}',
            },
        ];
        if (this.bookmarks.length > 0) {
            tabs.push({
                id: TabId.OUTLINE,
                icon: 'pdf:doc-outline',
                title: '$i18n{tooltipDocumentOutline}',
            });
        }
        if (this.attachments.length > 0) {
            tabs.push({
                id: TabId.ATTACHMENT,
                icon: 'pdf:attach-file',
                title: '$i18n{tooltipAttachments}',
            });
        }
        return tabs;
    }
    computeHideIcons_() {
        return this.tabs_.length === 1;
    }
    getTabAriaSelected_(tabId) {
        return this.tabs_[this.selectedTab_].id === tabId ? 'true' : 'false';
    }
    getTabIndex_(tabId) {
        return this.tabs_[this.selectedTab_].id === tabId ? '0' : '-1';
    }
    getTabSelectedClass_(tabId) {
        return this.tabs_[this.selectedTab_].id === tabId ? 'selected' : '';
    }
    onTabClick_(e) {
        const targetTab = e.model.item;
        switch (targetTab.id) {
            case TabId.THUMBNAIL:
                record(UserAction.SELECT_SIDENAV_THUMBNAILS);
                this.selectedTab_ = 0;
                break;
            case TabId.OUTLINE:
                record(UserAction.SELECT_SIDENAV_OUTLINE);
                this.selectedTab_ = 1;
                break;
            case TabId.ATTACHMENT:
                record(UserAction.SELECT_SIDENAV_ATTACHMENT);
                this.selectedTab_ = this.tabs_.length - 1;
                break;
        }
    }
    hideThumbnailView_() {
        return this.tabs_[this.selectedTab_].id !== TabId.THUMBNAIL;
    }
    hideOutlineView_() {
        return this.tabs_[this.selectedTab_].id !== TabId.OUTLINE;
    }
    hideAttachmentView_() {
        return this.tabs_[this.selectedTab_].id !== TabId.ATTACHMENT;
    }
    onKeydown_(e) {
        if (this.hideIcons_ || (e.key !== 'ArrowUp' && e.key !== 'ArrowDown')) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.key === 'ArrowUp') {
            if (this.selectedTab_ === 0) {
                this.selectedTab_ = this.tabs_.length - 1;
            }
            else {
                this.selectedTab_--;
            }
        }
        else {
            if (this.selectedTab_ === this.tabs_.length - 1) {
                this.selectedTab_ = 0;
            }
            else {
                this.selectedTab_++;
            }
        }
    }
    getHideIconsForTesting() {
        return this.hideIcons_;
    }
}
customElements.define(ViewerPdfSidenavElement.is, ViewerPdfSidenavElement);
