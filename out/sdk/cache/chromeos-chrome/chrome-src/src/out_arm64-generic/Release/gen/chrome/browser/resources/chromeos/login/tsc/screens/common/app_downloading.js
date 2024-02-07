// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying material design App Downloading
 * screen.
 */
import '//resources/ash/common/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_cr_lottie.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { OobeCrLottie } from '../../components/oobe_cr_lottie.js';
import { getTemplate } from './app_downloading.html.js';
const AppDownloadingBase = mixinBehaviors([OobeI18nBehavior, OobeDialogHostBehavior, LoginScreenBehavior], PolymerElement);
export class AppDownloading extends AppDownloadingBase {
    static get is() {
        return 'app-downloading-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {};
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('AppDownloadingScreen');
    }
    /** Initial UI State for screen */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.ONBOARDING;
    }
    /**
     * Returns the control which should receive initial focus.
     */
    get defaultControl() {
        return this.shadowRoot.querySelector('#app-downloading-dialog');
    }
    /** Called when dialog is shown */
    onBeforeShow() {
        const downloadingApps = this.getDownloadingAppsLottiePlayer();
        if (downloadingApps instanceof OobeCrLottie) {
            downloadingApps.playing = true;
        }
    }
    /** Called when dialog is hidden */
    onBeforeHide() {
        const downloadingApps = this.getDownloadingAppsLottiePlayer();
        if (downloadingApps instanceof OobeCrLottie) {
            downloadingApps.playing = false;
        }
    }
    onContinue() {
        this.userActed('appDownloadingContinueSetup');
    }
    getDownloadingAppsLottiePlayer() {
        return this.shadowRoot?.querySelector('#downloadingApps');
    }
}
customElements.define(AppDownloading.is, AppDownloading);
