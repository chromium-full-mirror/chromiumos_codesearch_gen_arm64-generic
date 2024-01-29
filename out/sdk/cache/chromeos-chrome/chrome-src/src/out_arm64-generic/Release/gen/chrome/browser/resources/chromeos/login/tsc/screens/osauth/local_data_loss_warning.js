// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/iron-media-query/iron-media-query.js';
import '../../components/oobe_icons.html.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { getTemplate } from './local_data_loss_warning.html.js';
const LocalDataLossWarningBase = mixinBehaviors([
    OobeI18nBehavior,
    OobeDialogHostBehavior,
    LoginScreenBehavior,
], PolymerElement);
export class LocalDataLossWarning extends LocalDataLossWarningBase {
    static get is() {
        return 'local-data-loss-warning-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            email: {
                type: String,
                value: '',
            },
            disabled: {
                type: Boolean,
            },
            isOwner: {
                type: Boolean,
            },
            canGoBack: {
                type: Boolean,
            },
        };
    }
    constructor() {
        super();
        this.disabled = false;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('LocalDataLossWarningScreen');
    }
    /** Initial UI State for screen */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.PASSWORD_CHANGED;
    }
    /**
     * Invoked just before being shown. Contains all the data for the screen.
     */
    onBeforeShow(data) {
        this.isOwner = data['isOwner'];
        this.email = data['email'];
        this.canGoBack = data['canGoBack'];
    }
    /**
     * Returns the subtitle message for the data loss warning screen.
     * @param locale The i18n locale.
     * @param email The email address that the user is trying to recover.
     * @return The translated subtitle message.
     */
    getDataLossWarningSubtitleMessage(locale, email) {
        return this.i18nAdvancedDynamic(locale, 'dataLossWarningSubtitle', { substitutions: [email] });
    }
    onProceedClicked() {
        if (this.disabled) {
            return;
        }
        this.disabled = true;
        this.userActed('recreateUser');
    }
    onResetClicked() {
        if (this.disabled) {
            return;
        }
        this.disabled = true;
        this.userActed('powerwash');
    }
    onBackButtonClicked() {
        if (this.disabled) {
            return;
        }
        this.userActed('back');
    }
    onCancelClicked() {
        if (this.disabled) {
            return;
        }
        this.userActed('cancel');
    }
}
customElements.define(LocalDataLossWarning.is, LocalDataLossWarning);
