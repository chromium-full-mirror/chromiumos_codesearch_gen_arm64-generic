// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import '../shared_style.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordManagerImpl } from '../password_manager_proxy.js';
import { getTemplate } from './edit_passkey_dialog.html.js';
const EditPasskeyDialogElementBase = I18nMixin(PolymerElement);
export class EditPasskeyDialogElement extends EditPasskeyDialogElementBase {
    static get is() {
        return 'edit-passkey-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            passkey: Object,
            username_: String,
            displayName_: String,
        };
    }
    ready() {
        super.ready();
        assert(this.passkey.isPasskey);
        this.username_ = this.passkey.username;
        this.displayName_ = this.passkey.displayName || '';
    }
    onCancel_() {
        this.$.dialog.close();
    }
    onEditClick_() {
        this.passkey.username = this.username_;
        this.passkey.displayName = this.displayName_;
        PasswordManagerImpl.getInstance()
            .changeCredential(this.passkey)
            .finally(() => {
            this.$.dialog.close();
        });
    }
}
customElements.define(EditPasskeyDialogElement.is, EditPasskeyDialogElement);
