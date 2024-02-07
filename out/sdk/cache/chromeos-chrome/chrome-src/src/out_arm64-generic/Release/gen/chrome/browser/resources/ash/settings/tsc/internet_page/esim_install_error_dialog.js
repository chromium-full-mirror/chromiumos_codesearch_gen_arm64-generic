// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element handling errors when installing an eSIM
 * profile, such as requiring a confirmation code.
 */
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/ash/common/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import '../settings_shared.css.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { ESimOperationResult, ProfileInstallResult } from 'chrome://resources/mojo/chromeos/ash/services/cellular_setup/public/mojom/esim_manager.mojom-webui.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './esim_install_error_dialog.html.js';
const EsimInstallErrorDialogElementBase = I18nMixin(PolymerElement);
export class EsimInstallErrorDialogElement extends EsimInstallErrorDialogElementBase {
    static get is() {
        return 'esim-install-error-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The error code returned when profile install attempt was made in
             * networks list.
             */
            errorCode: {
                type: Object,
                value: null,
            },
            profile: {
                type: Object,
                value: null,
            },
            confirmationCode_: {
                type: String,
                value: '',
                observer: 'onConfirmationCodeChanged_',
            },
            isConfirmationCodeInvalid_: {
                type: Boolean,
                value: false,
            },
            isInstallInProgress_: {
                type: Boolean,
                value: false,
            },
        };
    }
    onConfirmationCodeChanged_() {
        this.isConfirmationCodeInvalid_ = false;
    }
    onDoneClicked_() {
        if (!this.isConfirmationCodeError_()) {
            this.$.installErrorDialog.close();
            return;
        }
        this.isInstallInProgress_ = true;
        this.isConfirmationCodeInvalid_ = false;
        this.profile.installProfile(this.confirmationCode_).then((response) => {
            this.isInstallInProgress_ = false;
            if (response.result === ESimOperationResult.kSuccess) {
                this.$.installErrorDialog.close();
                return;
            }
            // TODO(crbug.com/1093185) Only display confirmation code entry if the
            // error was an invalid confirmation code, else display generic error.
            this.isConfirmationCodeInvalid_ = true;
        });
    }
    onCancelClicked_() {
        this.$.installErrorDialog.close();
    }
    isConfirmationCodeError_() {
        return this.errorCode === ProfileInstallResult.kErrorNeedsConfirmationCode;
    }
    isDoneButtonDisabled_() {
        return this.isConfirmationCodeError_() &&
            (!this.confirmationCode_ || this.isInstallInProgress_);
    }
}
customElements.define(EsimInstallErrorDialogElement.is, EsimInstallErrorDialogElement);
