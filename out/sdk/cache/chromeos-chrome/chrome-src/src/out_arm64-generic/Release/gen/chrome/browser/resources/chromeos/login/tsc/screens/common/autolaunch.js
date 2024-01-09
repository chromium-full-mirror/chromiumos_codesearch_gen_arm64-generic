// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Oobe reset screen implementation.
 */
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/buttons/oobe_text_button.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './autolaunch.html.js';
const AutolaunchBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, OobeDialogHostBehavior], PolymerElement);
export class Autolaunch extends AutolaunchBase {
    static get is() {
        return 'autolaunch-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            appName: {
                type: String,
                value: '',
            },
            appIconUrl: {
                type: String,
                value: '',
            },
        };
    }
    constructor() {
        super();
    }
    get EXTERNAL_API() {
        return [
            'updateApp',
        ];
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('AutolaunchScreen');
    }
    onConfirm() {
        this.userActed('confirm');
    }
    onCancel() {
        this.userActed('cancel');
    }
    /**
     * Event handler invoked when the page is shown and ready.
     */
    onBeforeShow() {
        chrome.send('autolaunchVisible');
    }
    /**
     * Cancels the reset and drops the user back to the login screen.
     */
    cancel() {
        this.userActed('cancel');
    }
    /**
     * Sets app to be displayed in the auto-launch warning.
     * @param app An dictionary with app info.
     */
    updateApp(app) {
        this.appName = app.appName;
        if (app.appIconUrl && app.appIconUrl.length) {
            this.appIconUrl = app.appIconUrl;
        }
    }
}
customElements.define(Autolaunch.is, Autolaunch);
