// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import './metrics_utils.js';
import './share_password_dialog_header.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordSharingActions, recordPasswordSharingInteraction } from './metrics_utils.js';
import { getTemplate } from './share_password_error_dialog.html.js';
export class SharePasswordErrorDialogElement extends I18nMixin(PolymerElement) {
    static get is() {
        return 'share-password-error-dialog';
    }
    static get template() {
        return getTemplate();
    }
    onClickCancel_() {
        recordPasswordSharingInteraction(PasswordSharingActions.ERROR_DIALOG_CANCELED);
        this.$.dialog.cancel();
    }
    onClickTryAgain_() {
        recordPasswordSharingInteraction(PasswordSharingActions.ERROR_DIALOG_TRY_AGAIN_CLICKED);
        this.dispatchEvent(new CustomEvent('restart', { bubbles: true, composed: true }));
    }
}
customElements.define(SharePasswordErrorDialogElement.is, SharePasswordErrorDialogElement);
