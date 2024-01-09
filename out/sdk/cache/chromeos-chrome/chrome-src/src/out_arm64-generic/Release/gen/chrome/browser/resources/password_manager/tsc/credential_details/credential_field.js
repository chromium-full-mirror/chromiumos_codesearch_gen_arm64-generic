// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordManagerImpl, PasswordViewPageInteractions } from '../password_manager_proxy.js';
import { getTemplate } from './credential_field.html.js';
// An element that represents a credential field with a 'copy' button.
export class CredentialFieldElement extends PolymerElement {
    static get is() {
        return 'credential-field';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The label on the actual input element. Required.
             */
            label: String,
            /**
             * The label on the copy button. Required.
             */
            copyButtonLabel: String,
            /**
             * Text that appears on the toast when clicking the copy button.
             * Required.
             */
            valueCopiedToastLabel: String,
            /**
             * Field value.
             */
            value: String,
            /*
             * Placeholder when the value is empty.
             */
            placeholder: String,
            /**
             * If set, clicking the copy button will record this password view
             * interaction.
             */
            interactionId: PasswordViewPageInteractions,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        assert(this.label);
        assert(this.copyButtonLabel);
        assert(this.valueCopiedToastLabel);
    }
    onCopyValueClick_() {
        navigator.clipboard.writeText(this.value).catch(() => { });
        this.$.toast.show();
        PasswordManagerImpl.getInstance().extendAuthValidity();
        if (this.interactionId) {
            PasswordManagerImpl.getInstance().recordPasswordViewInteraction(this.interactionId);
        }
    }
}
customElements.define(CredentialFieldElement.is, CredentialFieldElement);
