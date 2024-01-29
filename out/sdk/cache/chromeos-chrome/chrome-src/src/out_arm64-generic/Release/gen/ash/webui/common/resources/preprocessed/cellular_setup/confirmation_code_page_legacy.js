// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Page in eSIM Cellular Setup flow shown if an eSIM profile requires a
 * confirmation code to install. This element contains an input for the user to
 * enter the confirmation code.
 */
import '//resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import '//resources/polymer/v3_0/iron-media-query/iron-media-query.js';
import '//resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import './base_page.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { mojoString16ToString } from 'chrome://resources/js/mojo_type_util.js';
import { getTemplate } from './confirmation_code_page_legacy.html.js';
const ConfirmationCodePageLegacyElementBase = I18nMixin(PolymerElement);
export class ConfirmationCodePageLegacyElement extends ConfirmationCodePageLegacyElementBase {
    static get is() {
        return 'confirmation-code-page-legacy';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            profile: {
                type: Object,
                observer: 'onProfileChanged_',
            },
            confirmationCode: {
                type: String,
                notify: true,
            },
            showError: Boolean,
            /**
             * Indicates the UI is busy with an operation and cannot be interacted
             * with.
             */
            showBusy: {
                type: Boolean,
                value: false,
            },
            profileProperties_: {
                type: Object,
                value: null,
            },
            isDarkModeActive_: {
                type: Boolean,
                value: false,
            },
        };
    }
    async onProfileChanged_() {
        if (!this.profile) {
            this.profileProperties_ = null;
            return;
        }
        const response = await this.profile.getProperties();
        this.profileProperties_ = response.properties;
    }
    onKeyDown_(e) {
        if (e.key === 'Enter') {
            this.dispatchEvent(new CustomEvent('forward-navigation-requested', {
                bubbles: true,
                composed: true,
            }));
        }
        e.stopPropagation();
    }
    shouldShowProfileDetails_() {
        return !!this.profile;
    }
    getProfileName_() {
        if (!this.profileProperties_) {
            return '';
        }
        return mojoString16ToString(this.profileProperties_.name);
    }
    getProfileImage_() {
        return this.isDarkModeActive_ ?
            'chrome://resources/ash/common/cellular_setup/default_esim_profile_dark.svg' :
            'chrome://resources/ash/common/cellular_setup/default_esim_profile.svg';
    }
}
customElements.define(ConfirmationCodePageLegacyElement.is, ConfirmationCodePageLegacyElement);
