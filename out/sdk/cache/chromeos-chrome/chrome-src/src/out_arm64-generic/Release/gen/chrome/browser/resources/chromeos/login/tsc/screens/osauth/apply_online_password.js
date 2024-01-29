// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './apply_online_password.html.js';
const ApplyOnlinePasswordScreenBase = mixinBehaviors([
    OobeDialogHostBehavior,
    OobeI18nBehavior,
    LoginScreenBehavior,
], PolymerElement);
export class ApplyOnlinePasswordScreen extends ApplyOnlinePasswordScreenBase {
    static get is() {
        return 'apply-online-password-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {};
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('ApplyOnlinePasswordScreen');
    }
}
customElements.define(ApplyOnlinePasswordScreen.is, ApplyOnlinePasswordScreen);
