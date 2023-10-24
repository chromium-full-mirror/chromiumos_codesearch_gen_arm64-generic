// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './pack_dialog_alert.html.js';
export class ExtensionsPackDialogAlertElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.cancelLabel_ = null;
        /** This needs to be initialized to trigger data-binding. */
        this.confirmLabel_ = '';
    }
    static get is() {
        return 'extensions-pack-dialog-alert';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            model: Object,
            title_: String,
            message_: String,
            cancelLabel_: String,
            confirmLabel_: String,
        };
    }
    get returnValue() {
        return this.$.dialog.getNative().returnValue;
    }
    ready() {
        super.ready();
        // Initialize button label values for initial html binding.
        this.cancelLabel_ = null;
        this.confirmLabel_ = null;
        switch (this.model.status) {
            case chrome.developerPrivate.PackStatus.WARNING:
                this.title_ = loadTimeData.getString('packDialogWarningTitle');
                this.cancelLabel_ = loadTimeData.getString('cancel');
                this.confirmLabel_ = loadTimeData.getString('packDialogProceedAnyway');
                break;
            case chrome.developerPrivate.PackStatus.ERROR:
                this.title_ = loadTimeData.getString('packDialogErrorTitle');
                this.cancelLabel_ = loadTimeData.getString('ok');
                break;
            case chrome.developerPrivate.PackStatus.SUCCESS:
                this.title_ = loadTimeData.getString('packDialogTitle');
                this.cancelLabel_ = loadTimeData.getString('ok');
                break;
            default:
                assertNotReached();
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.$.dialog.showModal();
    }
    getCancelButtonClass_() {
        return this.confirmLabel_ ? 'cancel-button' : 'action-button';
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onConfirmClick_() {
        // The confirm button should only be available in WARNING state.
        assert(this.model.status === chrome.developerPrivate.PackStatus.WARNING);
        this.$.dialog.close();
    }
}
customElements.define(ExtensionsPackDialogAlertElement.is, ExtensionsPackDialogAlertElement);
