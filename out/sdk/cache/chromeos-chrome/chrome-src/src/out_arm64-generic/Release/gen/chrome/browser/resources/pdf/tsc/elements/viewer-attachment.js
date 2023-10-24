// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './viewer-attachment.html.js';
export class ViewerAttachmentElement extends PolymerElement {
    static get is() {
        return 'viewer-attachment';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            attachment: Object,
            index: Number,
            saveAllowed_: {
                type: Boolean,
                reflectToAttribute: true,
                computed: 'computeSaveAllowed_(attachment.size)',
            },
        };
    }
    /** Indicate whether the attachment can be downloaded. */
    computeSaveAllowed_() {
        return this.attachment.size !== -1;
    }
    onDownloadClick_() {
        if (this.attachment.size === -1) {
            return;
        }
        this.dispatchEvent(new CustomEvent('save-attachment', { detail: this.index, bubbles: true, composed: true }));
    }
}
customElements.define(ViewerAttachmentElement.is, ViewerAttachmentElement);
