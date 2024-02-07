// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/auth_setup/set_local_password_input.js';
import { SetLocalPasswordInputElement } from 'chrome://resources/ash/common/auth_setup/set_local_password_input.js';
import { fireAuthTokenInvalidEvent } from 'chrome://resources/ash/common/quick_unlock/utils.js';
import { CrButtonElement } from 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import { CrDialogElement } from 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import { assert } from 'chrome://resources/js/assert.js';
import { ConfigureResult, PasswordFactorEditor } from 'chrome://resources/mojo/chromeos/ash/services/auth_factor_config/public/mojom/auth_factor_config.mojom-webui.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './set_local_password_dialog.html.js';
export class SettingsSetLocalPasswordDialogElement extends PolymerElement {
    static get is() {
        return 'settings-set-local-password-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            authToken: {
                type: String,
                value: null,
            },
            showError_: {
                type: Boolean,
                value: false,
            },
        };
    }
    ready() {
        super.ready();
        // Dynamic checks to make sure that our static type declaration about named
        // elements in the shadow DOM are actually true.
        assert(this.$.setPasswordInput instanceof SetLocalPasswordInputElement);
        assert(this.$.submitButton instanceof CrButtonElement);
        assert(this.$.dialog instanceof CrDialogElement);
    }
    showModal() {
        if (!this.$.dialog.open) {
            this.reset();
            this.$.dialog.showModal();
            this.$.setPasswordInput.focus();
        }
    }
    reset() {
        this.$.setPasswordInput.reset();
        this.showError_ = false;
    }
    async submit() {
        this.showError_ = false;
        await this.$.setPasswordInput.validate();
        const value = this.$.setPasswordInput.value;
        if (value === null) {
            return;
        }
        const authToken = this.authToken;
        if (typeof authToken !== 'string') {
            fireAuthTokenInvalidEvent(this);
            return;
        }
        const { result } = await PasswordFactorEditor.getRemote().updateLocalPassword(authToken, value);
        switch (result) {
            case ConfigureResult.kSuccess:
                this.$.dialog.close();
                return;
            case ConfigureResult.kInvalidTokenError:
                fireAuthTokenInvalidEvent(this);
                return;
            case ConfigureResult.kFatalError:
                this.showError_ = true;
                console.error('Internal error while setting local password');
                return;
        }
    }
    cancel() {
        this.$.dialog.cancel();
    }
}
customElements.define(SettingsSetLocalPasswordDialogElement.is, SettingsSetLocalPasswordDialogElement);
