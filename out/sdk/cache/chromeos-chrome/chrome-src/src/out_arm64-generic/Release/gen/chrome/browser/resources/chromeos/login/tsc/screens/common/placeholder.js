// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './placeholder.html.js';
const PlaceholderScreenElementBase = mixinBehaviors([OobeI18nBehavior, OobeDialogHostBehavior, LoginScreenBehavior], PolymerElement);
class PlaceholderScreen extends PlaceholderScreenElementBase {
    static get is() {
        return 'placeholder-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {};
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('PlaceholderScreen');
    }
    /**
     * Next button click handler.
     */
    onNextClicked_() {
        this.userActed('next');
    }
    /**
     * Back button click handler.
     */
    onBackClicked_() {
        this.userActed('back');
    }
}
customElements.define(PlaceholderScreen.is, PlaceholderScreen);
