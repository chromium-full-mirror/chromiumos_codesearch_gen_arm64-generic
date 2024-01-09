// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import { getTemplate } from './setup_cancel_dialog.html.js';
/**
 * The SetupCancelDialogElement represents the confirmation dialog shown when
 * the user wants to cancel the setup part way through.
 */
export class SetupCancelDialogElement extends HTMLElement {
    dialog;
    /** Callback called if the user chooses to cancel the setup. */
    cancelCallback = null;
    // Save reference to listener so it can be removed from the document in
    // disconnectedCallback().
    boundKeyDownListener_;
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }).innerHTML = getTemplate();
        this.dialog = this.$('cr-dialog');
        this.$('.action-button').addEventListener('click', () => this.onResumeButtonClick());
        this.$('.cancel-button').addEventListener('click', () => this.onCancelButtonClick());
        this.boundKeyDownListener_ = this.onKeyDown.bind(this);
    }
    connectedCallback() {
        document.addEventListener('keydown', this.boundKeyDownListener_);
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.boundKeyDownListener_);
    }
    $(query) {
        return this.shadowRoot.querySelector(query);
    }
    get open() {
        return this.dialog.open;
    }
    show(cancelCallback) {
        this.cancelCallback = cancelCallback;
        this.dialog.showModal();
    }
    onResumeButtonClick() {
        this.dialog.close();
    }
    onCancelButtonClick() {
        this.cancelCallback();
    }
    onKeyDown(e) {
        if (e.key === 'Escape') {
            // Handle Escape as a "resume".
            e.stopImmediatePropagation();
            e.preventDefault();
            this.onResumeButtonClick();
            return;
        }
    }
}
customElements.define('setup-cancel-dialog', SetupCancelDialogElement);
