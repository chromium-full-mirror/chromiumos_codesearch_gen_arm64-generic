// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './viewer-properties-dialog.html.js';
export class ViewerPropertiesDialogElement extends PolymerElement {
    static get is() {
        return 'viewer-properties-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            documentMetadata: Object,
            fileName: String,
            pageCount: Number,
        };
    }
    getFastWebViewValue_(yesLabel, noLabel, linearized) {
        return linearized ? yesLabel : noLabel;
    }
    getOrPlaceholder_(value) {
        return value || '-';
    }
    onClickClose_() {
        this.$.dialog.close();
    }
}
customElements.define(ViewerPropertiesDialogElement.is, ViewerPropertiesDialogElement);
