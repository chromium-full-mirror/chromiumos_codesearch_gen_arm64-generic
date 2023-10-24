// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/polymer/v3_0/paper-styles/color.js';
import './code_section.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './install_warnings_dialog.html.js';
class ExtensionsInstallWarningsDialogElement extends PolymerElement {
    static get is() {
        return 'extensions-install-warnings-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            installWarnings: Array,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.$.dialog.showModal();
    }
    onOkClick_() {
        this.$.dialog.close();
    }
}
customElements.define(ExtensionsInstallWarningsDialogElement.is, ExtensionsInstallWarningsDialogElement);
