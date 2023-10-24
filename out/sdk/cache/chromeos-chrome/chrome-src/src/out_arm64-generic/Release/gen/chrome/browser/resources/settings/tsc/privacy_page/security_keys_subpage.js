// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'security-keys-subpage' is a settings subpage
 * containing operations on security keys.
 */
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../settings_shared.css.js';
import './security_keys_credential_management_dialog.js';
import './security_keys_bio_enroll_dialog.js';
import './security_keys_set_pin_dialog.js';
import './security_keys_reset_dialog.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from '../i18n_setup.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { getTemplate } from './security_keys_subpage.html.js';
class SecurityKeysSubpageElement extends PolymerElement {
    static get is() {
        return 'security-keys-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            enableBioEnrollment_: {
                type: Boolean,
                readOnly: true,
                value() {
                    return loadTimeData.getBoolean('enableSecurityKeysBioEnrollment');
                },
            },
            showSetPINDialog_: {
                type: Boolean,
                value: false,
            },
            showCredentialManagementDialog_: {
                type: Boolean,
                value: false,
            },
            showResetDialog_: {
                type: Boolean,
                value: false,
            },
            showBioEnrollDialog_: {
                type: Boolean,
                value: false,
            },
        };
    }
    onManagePhonesClick_() {
        Router.getInstance().navigateTo(routes.SECURITY_KEYS_PHONES);
    }
    onSetPin_() {
        this.showSetPINDialog_ = true;
    }
    onSetPinDialogClosed_() {
        this.showSetPINDialog_ = false;
        focusWithoutInk(this.$.setPINButton);
    }
    onCredentialManagement_() {
        this.showCredentialManagementDialog_ = true;
    }
    onCredentialManagementDialogClosed_() {
        this.showCredentialManagementDialog_ = false;
        const toFocus = this.shadowRoot.querySelector('#credentialManagementButton');
        assert(toFocus);
        focusWithoutInk(toFocus);
    }
    onReset_() {
        this.showResetDialog_ = true;
    }
    onResetDialogClosed_() {
        this.showResetDialog_ = false;
        focusWithoutInk(this.$.resetButton);
    }
    onBioEnroll_() {
        this.showBioEnrollDialog_ = true;
    }
    onBioEnrollDialogClosed_() {
        this.showBioEnrollDialog_ = false;
        const toFocus = this.shadowRoot.querySelector('#bioEnrollButton');
        assert(toFocus);
        focusWithoutInk(toFocus);
    }
}
customElements.define(SecurityKeysSubpageElement.is, SecurityKeysSubpageElement);
