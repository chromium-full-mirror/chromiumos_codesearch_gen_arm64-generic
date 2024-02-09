// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Oobe signin screen implementation.
 */
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './online_authentication_screen.html.js';
/**
 * UI mode for the dialog.
 */
var DialogMode;
(function (DialogMode) {
    DialogMode["LOADING"] = "loading";
})(DialogMode || (DialogMode = {}));
const OnlineAuthenticationScreenElementBase = mixinBehaviors([LoginScreenBehavior, MultiStepBehavior, OobeI18nBehavior], PolymerElement);
export class OnlineAuthenticationScreenElement extends OnlineAuthenticationScreenElementBase {
    static get is() {
        return 'online-authentication-screen-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {};
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return DialogMode.LOADING;
    }
    get UI_STEPS() {
        return DialogMode;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('OnlineAuthenticationScreen');
    }
}
customElements.define(OnlineAuthenticationScreenElement.is, OnlineAuthenticationScreenElement);
