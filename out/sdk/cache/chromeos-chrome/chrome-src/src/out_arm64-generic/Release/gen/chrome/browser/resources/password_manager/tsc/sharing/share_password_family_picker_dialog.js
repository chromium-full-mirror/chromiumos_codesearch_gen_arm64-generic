// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import './metrics_utils.js';
import './share_password_dialog_header.js';
import './share_password_recipient.js';
import '../shared_style.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { UserUtilMixin } from '../user_utils_mixin.js';
import { PasswordSharingActions, recordPasswordSharingInteraction } from './metrics_utils.js';
import { getTemplate } from './share_password_family_picker_dialog.html.js';
export class SharePasswordFamilyPickerDialogElement extends UserUtilMixin(I18nMixin(PolymerElement)) {
    static get is() {
        return 'share-password-family-picker-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            dialogTitle: String,
            members: Array,
            selectedRecipients: {
                type: Array,
                value: [],
                reflectToAttribute: true,
                notify: true,
            },
            eligibleRecipients_: {
                type: Array,
                computed: 'computeEligible_(members)',
            },
            ineligibleRecipients_: {
                type: Array,
                computed: 'computeIneligible_(members)',
            },
        };
    }
    computeEligible_() {
        const eligibleMembers = this.members.filter(member => member.isEligible);
        eligibleMembers.sort((a, b) => (a.displayName > b.displayName ? 1 : -1));
        return eligibleMembers;
    }
    computeIneligible_() {
        const inEligibleMembers = this.members.filter(member => !member.isEligible);
        inEligibleMembers.sort((a, b) => (a.displayName > b.displayName ? 1 : -1));
        return inEligibleMembers;
    }
    recipientSelected_() {
        this.selectedRecipients =
            Array
                .from(this.shadowRoot.querySelectorAll('share-password-recipient'))
                .filter(item => item.selected)
                .map(item => item.recipient);
    }
    onViewFamilyClick_() {
        recordPasswordSharingInteraction(PasswordSharingActions.FAMILY_PICKER_VIEW_FAMILY_CLICKED);
    }
    onClickCancel_() {
        recordPasswordSharingInteraction(PasswordSharingActions.FAMILY_PICKER_CANCELED);
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
    onClickShare_() {
        if (this.selectedRecipients.length === 1) {
            recordPasswordSharingInteraction(PasswordSharingActions.FAMILY_PICKER_SHARE_WITH_ONE_MEMBER);
        }
        else {
            recordPasswordSharingInteraction(PasswordSharingActions.FAMILY_PICKER_SHARE_WITH_MULTIPLE_MEMBERS);
        }
        this.dispatchEvent(new CustomEvent('start-share', { bubbles: true, composed: true }));
    }
}
customElements.define(SharePasswordFamilyPickerDialogElement.is, SharePasswordFamilyPickerDialogElement);
