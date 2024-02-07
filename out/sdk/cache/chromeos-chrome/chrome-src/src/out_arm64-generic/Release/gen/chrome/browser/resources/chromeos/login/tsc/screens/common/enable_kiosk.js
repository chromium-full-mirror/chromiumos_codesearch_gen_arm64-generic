// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying material design Enable Kiosk
 * screen.
 */
import '//resources/ash/common/cr_elements/icons.html.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './enable_kiosk.html.js';
/**
 * UI mode for the dialog.
 */
var EnableKioskMode;
(function (EnableKioskMode) {
    EnableKioskMode["CONFIRM"] = "confirm";
    EnableKioskMode["SUCCESS"] = "success";
    EnableKioskMode["ERROR"] = "error";
})(EnableKioskMode || (EnableKioskMode = {}));
export const EnableKioskBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, OobeDialogHostBehavior], PolymerElement);
export class EnableKiosk extends EnableKioskBase {
    static get is() {
        return 'enable-kiosk-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Current dialog state
             */
            state_: {
                value: EnableKioskMode.CONFIRM,
            },
        };
    }
    constructor() {
        super();
    }
    get EXTERNAL_API() {
        return ['onCompleted'];
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('KioskEnableScreen');
    }
    /** Called after resources are updated. */
    updateLocalizedContent() {
        this.i18nUpdateLocale();
    }
    /** Called when dialog is shown */
    onBeforeShow() {
        this.state_ = EnableKioskMode.CONFIRM;
    }
    /**
     * "Enable" button handler
     */
    onEnableButton_() {
        this.userActed('enable');
    }
    /**
     * "Cancel" / "Ok" button handler
     */
    closeDialog_() {
        this.userActed('close');
    }
    onCompleted(success) {
        this.state_ = success ? EnableKioskMode.SUCCESS : EnableKioskMode.ERROR;
    }
    /**
     * Simple equality comparison function.
     */
    eq_(one, another) {
        return one === another;
    }
    primaryButtonTextKey_(state) {
        if (state === EnableKioskMode.CONFIRM) {
            return 'kioskOKButton';
        }
        return 'kioskCancelButton';
    }
}
customElements.define(EnableKiosk.is, EnableKiosk);
