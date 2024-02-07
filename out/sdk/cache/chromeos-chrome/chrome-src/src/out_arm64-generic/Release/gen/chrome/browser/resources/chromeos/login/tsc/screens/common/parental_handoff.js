// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for Parental Handoff screen.
 */
import '//resources/ash/common/cr_elements/cr_shared_vars.css.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './parental_handoff.html.js';
export const ParentalHandoffElementBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, OobeDialogHostBehavior], PolymerElement);
export class ParentalHandoff extends ParentalHandoffElementBase {
    static get is() {
        return 'parental-handoff-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The username to be displayed
             */
            username: {
                type: String,
                value: '',
            },
        };
    }
    constructor() {
        super();
    }
    /**
     * Event handler that is invoked just before the frame is shown.
     */
    onBeforeShow(data) {
        if ('username' in data) {
            this.username = data.username;
        }
        const parentalHandoffDialog = this.shadowRoot.querySelector('#parentalHandoffDialog');
        parentalHandoffDialog.focus();
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('ParentalHandoffScreen');
    }
    /*
     * Executed on language change.
     */
    updateLocalizedContent() {
        this.i18nUpdateLocale();
    }
    /**
     * On-tap event handler for Next button.
     *
     */
    onNextButtonPressed() {
        this.userActed('next');
    }
}
customElements.define(ParentalHandoff.is, ParentalHandoff);
