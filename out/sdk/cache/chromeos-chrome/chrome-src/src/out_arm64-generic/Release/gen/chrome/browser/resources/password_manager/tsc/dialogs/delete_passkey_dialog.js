// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import '../shared_style.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordManagerImpl } from '../password_manager_proxy.js';
import { getTemplate } from './delete_passkey_dialog.html.js';
const DeletePasskeyDialogElementBase = I18nMixin(PolymerElement);
export class DeletePasskeyDialogElement extends DeletePasskeyDialogElementBase {
    static get is() {
        return 'delete-passkey-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            passkey: Object,
        };
    }
    ready() {
        super.ready();
        assert(this.passkey.isPasskey);
    }
    onCancel_() {
        this.$.dialog.close();
    }
    onDelete_() {
        PasswordManagerImpl.getInstance().removeCredential(this.passkey.id, this.passkey.storedIn);
        this.dispatchEvent(new CustomEvent('passkey-removed', {
            bubbles: true,
            composed: true,
        }));
        this.$.dialog.close();
    }
    getDescriptionHtml_() {
        // Passkeys have a single https affiliated origin corresponding to the
        // relying party identifier.
        assert(this.passkey.affiliatedDomains);
        const domain = this.passkey.affiliatedDomains[0];
        assert(domain);
        return this.i18nAdvanced('deletePasskeyConfirmationDescription', {
            substitutions: [`<a href='${domain.url}' target='_blank'>${domain.name}</a>`],
        });
    }
}
customElements.define(DeletePasskeyDialogElement.is, DeletePasskeyDialogElement);
