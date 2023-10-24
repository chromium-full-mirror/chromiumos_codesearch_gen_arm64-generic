// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A dialog for editing the name of a phone that has been linked
    for use as a security key.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { SecurityKeysPhonesBrowserProxyImpl } from './security_keys_browser_proxy.js';
import { getTemplate } from './security_keys_phones_dialog.html.js';
export class SecurityKeysPhonesDialog extends PolymerElement {
    constructor() {
        super(...arguments);
        this.browserProxy_ = SecurityKeysPhonesBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'security-keys-phones-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            name: String,
            publicKey: String,
        };
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onSaveClick_() {
        const newName = this.$.name.value;
        if (newName === this.name) {
            this.$.dialog.close();
            return;
        }
        this.browserProxy_.rename(this.publicKey, newName)
            .then(() => this.$.dialog.close());
    }
    validate_(event) {
        const input = event.target;
        input.invalid = input.value === '';
        this.$.actionButton.disabled = input.invalid;
    }
}
customElements.define(SecurityKeysPhonesDialog.is, SecurityKeysPhonesDialog);
