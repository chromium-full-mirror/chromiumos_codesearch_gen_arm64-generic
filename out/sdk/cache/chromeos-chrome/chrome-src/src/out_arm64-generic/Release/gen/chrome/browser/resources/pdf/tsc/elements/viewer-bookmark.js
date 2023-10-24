// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/paper-styles/color.js';
import './pdf-shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './viewer-bookmark.html.js';
/** Amount that each level of bookmarks is indented by (px). */
const BOOKMARK_INDENT = 20;
export var ChangePageOrigin;
(function (ChangePageOrigin) {
    ChangePageOrigin["BOOKMARK"] = "bookmark";
    ChangePageOrigin["THUMBNAIL"] = "thumbnail";
    ChangePageOrigin["PAGE_SELECTOR"] = "pageSelector";
})(ChangePageOrigin || (ChangePageOrigin = {}));
export class ViewerBookmarkElement extends PolymerElement {
    static get is() {
        return 'viewer-bookmark';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            bookmark: {
                type: Object,
                observer: 'bookmarkChanged_',
            },
            depth: {
                type: Number,
                observer: 'depthChanged_',
            },
            childDepth_: Number,
            childrenShown_: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
        };
    }
    ready() {
        super.ready();
        this.$.item.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                this.onEnter_(e);
            }
            else if (e.key === ' ') {
                this.onSpace_(e);
            }
        });
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    bookmarkChanged_() {
        this.$.expand.style.visibility =
            this.bookmark.children.length > 0 ? 'visible' : 'hidden';
    }
    depthChanged_() {
        this.childDepth_ = this.depth + 1;
        this.$.item.style.paddingInlineStart =
            (this.depth * BOOKMARK_INDENT) + 'px';
    }
    onClick_() {
        if (this.bookmark.page != null) {
            if (this.bookmark.zoom != null) {
                this.fire_('change-zoom', { zoom: this.bookmark.zoom });
            }
            if (this.bookmark.x != null && this.bookmark.y != null) {
                this.fire_('change-page-and-xy', {
                    page: this.bookmark.page,
                    x: this.bookmark.x,
                    y: this.bookmark.y,
                    origin: ChangePageOrigin.BOOKMARK,
                });
            }
            else {
                this.fire_('change-page', { page: this.bookmark.page, origin: ChangePageOrigin.BOOKMARK });
            }
        }
        else if (this.bookmark.uri != null) {
            this.fire_('navigate', { uri: this.bookmark.uri, newtab: true });
        }
    }
    onEnter_(e) {
        // Don't allow events which have propagated up from the expand button to
        // trigger a click.
        if (e.target !== this.$.expand) {
            this.onClick_();
        }
    }
    onSpace_(e) {
        // cr-icon-button stops propagation of space events, so there's no need
        // to check the event source here.
        this.onClick_();
        // Prevent default space scroll behavior.
        e.preventDefault();
    }
    toggleChildren_(e) {
        this.childrenShown_ = !this.childrenShown_;
        e.stopPropagation(); // Prevent the above onClick_ handler from firing.
    }
    getAriaExpanded_() {
        return this.childrenShown_ ? 'true' : 'false';
    }
}
customElements.define(ViewerBookmarkElement.is, ViewerBookmarkElement);
