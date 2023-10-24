// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-security-keys-reset-dialog' is a dialog for
 * triggering factory resets of security keys.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/polymer/v3_0/iron-pages/iron-pages.js';
import 'chrome://resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import '../settings_shared.css.js';
import '../i18n_setup.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { SecurityKeysResetBrowserProxyImpl } from './security_keys_browser_proxy.js';
import { getTemplate } from './security_keys_reset_dialog.html.js';
export var ResetDialogPage;
(function (ResetDialogPage) {
    ResetDialogPage["INITIAL"] = "initial";
    ResetDialogPage["NO_RESET"] = "noReset";
    ResetDialogPage["RESET_FAILED"] = "resetFailed";
    ResetDialogPage["RESET_CONFIRM"] = "resetConfirm";
    ResetDialogPage["RESET_SUCCESS"] = "resetSuccess";
    ResetDialogPage["RESET_NOT_ALLOWED"] = "resetNotAllowed";
})(ResetDialogPage || (ResetDialogPage = {}));
const SettingsSecurityKeysResetDialogElementBase = I18nMixin(PolymerElement);
export class SettingsSecurityKeysResetDialogElement extends SettingsSecurityKeysResetDialogElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = SecurityKeysResetBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-security-keys-reset-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * A CTAP error code for when the specific error was not recognised.
             */
            errorCode_: Number,
            /**
             * True iff the process has completed, successfully or otherwise.
             */
            complete_: {
                type: Boolean,
                value: false,
            },
            /**
             * The id of an element on the page that is currently shown.
             */
            shown_: {
                type: String,
                value: ResetDialogPage.INITIAL,
            },
            title_: String,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.title_ = this.i18n('securityKeysResetTitle');
        this.$.dialog.showModal();
        this.browserProxy_.reset().then(code => {
            // code is a CTAP error code. See
            // https://fidoalliance.org/specs/fido-v2.0-rd-20180702/fido-client-to-authenticator-protocol-v2.0-rd-20180702.html#error-responses
            if (code === 1 /* INVALID_COMMAND */) {
                this.shown_ = ResetDialogPage.NO_RESET;
                this.finish_();
            }
            else if (code !== 0 /* unknown error */) {
                this.errorCode_ = code;
                this.shown_ = ResetDialogPage.RESET_FAILED;
                this.finish_();
            }
            else {
                this.title_ = this.i18n('securityKeysResetConfirmTitle');
                this.shown_ = ResetDialogPage.RESET_CONFIRM;
                this.browserProxy_.completeReset().then(code => {
                    this.title_ = this.i18n('securityKeysResetTitle');
                    if (code === 0 /* SUCCESS */) {
                        this.shown_ = ResetDialogPage.RESET_SUCCESS;
                    }
                    else if (code === 48 /* NOT_ALLOWED */) {
                        this.shown_ = ResetDialogPage.RESET_NOT_ALLOWED;
                    }
                    else /* unknown error */ {
                        this.errorCode_ = code;
                        this.shown_ = ResetDialogPage.RESET_FAILED;
                    }
                    this.finish_();
                });
            }
        });
    }
    closeDialog_() {
        this.$.dialog.close();
        this.finish_();
    }
    finish_() {
        if (this.complete_) {
            return;
        }
        this.complete_ = true;
        this.browserProxy_.close();
    }
    onIronSelect_(e) {
        // Prevent this event from bubbling since it is unnecessarily triggering
        // the listener within settings-animated-pages.
        e.stopPropagation();
    }
    /**
     * @param code CTAP error code.
     * @return Contents of the error string that may be displayed to the user.
     *     Used automatically by Polymer.
     */
    resetFailed_(code) {
        if (code === null) {
            return '';
        }
        return this.i18n('securityKeysResetError', code.toString());
    }
    /**
     * @param complete Whether the dialog process is complete.
     * @return The label of the dialog button. Used automatically by Polymer.
     */
    closeText_(complete) {
        return this.i18n(complete ? 'ok' : 'cancel');
    }
    /**
     * @param complete Whether the dialog process is complete.
     * @return The class of the dialog button. Used automatically by Polymer.
     */
    maybeActionButton_(complete) {
        return complete ? 'action-button' : 'cancel-button';
    }
}
customElements.define(SettingsSecurityKeysResetDialogElement.is, SettingsSecurityKeysResetDialogElement);
