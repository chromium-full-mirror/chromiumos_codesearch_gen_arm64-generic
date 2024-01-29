// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Oobe signin screen implementation.
 */
import '../../components/notification_card.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './user_allowlist_check_screen.html.js';
// The help topic regarding user not being in the allowlist.
const HELP_CANT_ACCESS_ACCOUNT = 188036;
/**
 * UI mode for the dialog.
 */
var DialogMode;
(function (DialogMode) {
    DialogMode["DEFAULT"] = "default";
})(DialogMode || (DialogMode = {}));
const UserAllowlistCheckScreenElementBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
export class UserAllowlistCheckScreenElement extends UserAllowlistCheckScreenElementBase {
    static get is() {
        return 'user-allowlist-check-screen-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            allowlistError: {
                type: String,
                value: 'allowlistErrorConsumer',
            },
        };
    }
    get EXTERNAL_API() {
        return [];
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return DialogMode.DEFAULT;
    }
    get UI_STEPS() {
        return DialogMode;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('UserAllowlistCheckScreen');
    }
    /**
     * Event handler that is invoked just before the frame is shown.
     */
    onBeforeShow(optData) {
        const isManaged = optData && optData.enterpriseManaged;
        const isFamilyLinkAllowed = optData && optData.familyLinkAllowed;
        if (isManaged && isFamilyLinkAllowed) {
            this.allowlistError = 'allowlistErrorEnterpriseAndFamilyLink';
        }
        else if (isManaged) {
            this.allowlistError = 'allowlistErrorEnterprise';
        }
        else {
            this.allowlistError = 'allowlistErrorConsumer';
        }
        const submitButton = this.shadowRoot?.querySelector('#submitButton');
        if (submitButton instanceof HTMLElement) {
            // TODO(b/320446861): Fix type once GaiaButton can be added.
            submitButton.focus();
        }
    }
    onAllowlistErrorTryAgainClick() {
        this.userActed('retry');
    }
    onAllowlistErrorLinkClick_() {
        chrome.send('launchHelpApp', [HELP_CANT_ACCESS_ACCOUNT]);
    }
}
customElements.define(UserAllowlistCheckScreenElement.is, UserAllowlistCheckScreenElement);
