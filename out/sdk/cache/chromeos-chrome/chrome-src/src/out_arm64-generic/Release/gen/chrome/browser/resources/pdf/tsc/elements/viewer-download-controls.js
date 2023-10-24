// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './icons.html.js';
import './pdf-shared.css.js';
import { AnchorAlignment } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { SaveRequestType } from '../constants.js';
import { getTemplate } from './viewer-download-controls.html.js';
export class ViewerDownloadControlsElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.waitForFormFocusChange_ = null;
    }
    static get is() {
        return 'viewer-download-controls';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            hasEdits: Boolean,
            hasEnteredAnnotationMode: Boolean,
            isFormFieldFocused: {
                type: Boolean,
                observer: 'onFormFieldFocusedChanged_',
            },
            downloadHasPopup_: {
                type: String,
                computed: 'computeDownloadHasPopup_(hasEdits,' +
                    'hasEnteredAnnotationMode)',
            },
            menuOpen_: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
        };
    }
    isMenuOpen() {
        return this.menuOpen_;
    }
    closeMenu() {
        this.$.menu.close();
    }
    onOpenChanged_(e) {
        this.menuOpen_ = e.detail.value;
    }
    hasEditsToSave_() {
        return this.hasEnteredAnnotationMode || this.hasEdits;
    }
    /**
     * @return The value for the aria-haspopup attribute for the download button.
     */
    computeDownloadHasPopup_() {
        return this.hasEditsToSave_() ? 'menu' : 'false';
    }
    showDownloadMenu_() {
        this.$.menu.showAt(this.$.download, {
            anchorAlignmentX: AnchorAlignment.CENTER,
        });
        // For tests
        this.dispatchEvent(new CustomEvent('download-menu-shown-for-testing', { bubbles: true, composed: true }));
    }
    onDownloadClick_() {
        this.waitForEdits_().then(hasEdits => {
            if (hasEdits) {
                this.showDownloadMenu_();
            }
            else {
                this.dispatchSaveEvent_(SaveRequestType.ORIGINAL);
            }
        });
    }
    /**
     * @return Promise that resolves with true if the PDF has edits and/or
     *     annotations, and false otherwise.
     */
    waitForEdits_() {
        if (this.hasEditsToSave_()) {
            return Promise.resolve(true);
        }
        if (!this.isFormFieldFocused) {
            return Promise.resolve(false);
        }
        this.waitForFormFocusChange_ = new PromiseResolver();
        return this.waitForFormFocusChange_.promise;
    }
    onFormFieldFocusedChanged_() {
        if (!this.waitForFormFocusChange_) {
            return;
        }
        this.waitForFormFocusChange_.resolve(this.hasEdits);
        this.waitForFormFocusChange_ = null;
    }
    dispatchSaveEvent_(type) {
        this.dispatchEvent(new CustomEvent('save', { detail: type, bubbles: true, composed: true }));
    }
    onDownloadOriginalClick_() {
        this.dispatchSaveEvent_(SaveRequestType.ORIGINAL);
        this.$.menu.close();
    }
    onDownloadEditedClick_() {
        this.dispatchSaveEvent_(this.hasEnteredAnnotationMode ? SaveRequestType.ANNOTATION :
            SaveRequestType.EDITED);
        this.$.menu.close();
    }
}
customElements.define(ViewerDownloadControlsElement.is, ViewerDownloadControlsElement);
