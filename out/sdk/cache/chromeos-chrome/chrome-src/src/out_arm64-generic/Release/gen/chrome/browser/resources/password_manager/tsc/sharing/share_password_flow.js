// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Element which shows and controls password sharing dialogs.
 */
import './share_password_family_picker_dialog.js';
import './share_password_loading_dialog.js';
import './share_password_error_dialog.js';
import './share_password_no_other_family_members_dialog.js';
import './share_password_not_family_member_dialog.js';
import './share_password_confirmation_dialog.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordManagerImpl } from '../password_manager_proxy.js';
import { getTemplate } from './share_password_flow.html.js';
export var ShareFlowState;
(function (ShareFlowState) {
    ShareFlowState[ShareFlowState["NO_DIALOG"] = 0] = "NO_DIALOG";
    ShareFlowState[ShareFlowState["FETCHING"] = 1] = "FETCHING";
    ShareFlowState[ShareFlowState["ERROR"] = 2] = "ERROR";
    ShareFlowState[ShareFlowState["NO_OTHER_MEMBERS"] = 3] = "NO_OTHER_MEMBERS";
    ShareFlowState[ShareFlowState["NOT_FAMILY_MEMBER"] = 4] = "NOT_FAMILY_MEMBER";
    ShareFlowState[ShareFlowState["FAMILY_PICKER"] = 5] = "FAMILY_PICKER";
    ShareFlowState[ShareFlowState["CONFIRMATION"] = 6] = "CONFIRMATION";
})(ShareFlowState || (ShareFlowState = {}));
const SharePasswordFlowElementBase = I18nMixin(PolymerElement);
export class SharePasswordFlowElement extends SharePasswordFlowElementBase {
    constructor() {
        super(...arguments);
        this.flowState = ShareFlowState.NO_DIALOG;
        this.fetchResults_ = null;
        this.passwordManager_ = PasswordManagerImpl.getInstance();
    }
    static get is() {
        return 'share-password-flow';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            passwordName: String,
            iconUrl: String,
            password: Object,
            flowState: Number,
            fetchResults_: Object,
            recipients_: {
                type: Array,
                value: [],
            },
            flowStateEnum_: {
                type: Object,
                value: ShareFlowState,
                readOnly: true,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.startSharing_();
    }
    async startSharing_() {
        // TODO(crbug/1445526): Add timeout to avoid flickering.
        this.flowState = ShareFlowState.FETCHING;
        this.fetchResults_ = await this.passwordManager_.fetchFamilyMembers();
        switch (this.fetchResults_.status) {
            case chrome.passwordsPrivate.FamilyFetchStatus.UNKNOWN_ERROR:
                this.flowState = ShareFlowState.ERROR;
                break;
            case chrome.passwordsPrivate.FamilyFetchStatus.NO_MEMBERS:
                // TODO(crbug/1445526): Rename FamilyFetchStatus.NO_MEMBERS to
                // NOT_FAMILY_MEMBER.
                this.flowState = ShareFlowState.NOT_FAMILY_MEMBER;
                break;
            case chrome.passwordsPrivate.FamilyFetchStatus.SUCCESS:
                if (this.fetchResults_.familyMembers.length === 0) {
                    this.flowState = ShareFlowState.NO_OTHER_MEMBERS;
                    return;
                }
                this.flowState = ShareFlowState.FAMILY_PICKER;
                break;
            default:
                assertNotReached();
        }
    }
    isState_(state) {
        return this.flowState === state;
    }
    getShareDialogTitle_() {
        return this.i18n('shareDialogTitle', this.passwordName);
    }
    onDialogClose_() {
        this.dispatchEvent(new CustomEvent('share-flow-done', { bubbles: true, composed: true }));
        this.flowState = ShareFlowState.NO_DIALOG;
    }
    onStartShare_() {
        this.flowState = ShareFlowState.CONFIRMATION;
    }
}
customElements.define(SharePasswordFlowElement.is, SharePasswordFlowElement);
