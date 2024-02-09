// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for signin fatal error.
 */
import '//resources/js/action_link.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/buttons/oobe_text_button.js';
import { assert } from '//resources/js/assert.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { OobeTypes } from '../../components/oobe_types.js';
import { getTemplate } from './signin_fatal_error.html.js';
const SigninFatalErrorBase = mixinBehaviors([OobeI18nBehavior, OobeDialogHostBehavior, LoginScreenBehavior], PolymerElement);
export class SigninFatalScreen extends SigninFatalErrorBase {
    static get is() {
        return 'signin-fatal-error-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Subtitle that will be shown to the user describing the error
             */
            errorSubtitle: {
                type: String,
                computed: 'computeSubtitle(locale, errorState, params)',
            },
            /**
             * Error state from the screen
             */
            errorState: {
                type: Number,
                value: OobeTypes.FatalErrorCode.UNKNOWN,
            },
            /**
             * Additional information that will be used when creating the subtitle.
             */
            params: {
                type: Object,
                value: {},
            },
            keyboardHint: {
                type: String,
            },
            details: {
                type: String,
            },
            helpLinkText: {
                type: String,
            },
        };
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('SignInFatalErrorScreen');
    }
    /** Initial UI State for screen */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.BLOCKING;
    }
    /**
     * Returns the control which should receive initial focus.
     */
    get defaultControl() {
        const actionButton = this.shadowRoot?.querySelector('#actionButton');
        return actionButton ? actionButton : null;
    }
    /**
     * Invoked just before being shown. Contains all the data for the screen.
     * @param data Screen init payload.
     */
    onBeforeShow(data) {
        this.params = data;
        this.errorState = data.errorState;
        this.keyboardHint = data.keyboardHint;
        this.details = data.details;
        this.helpLinkText = data.helpLinkText;
    }
    onClick() {
        this.userActed('screen-dismissed');
    }
    /**
     * Generates the key for the button that is shown to the
     * user based on the error
     */
    computeButtonKey(errorState) {
        if (errorState == OobeTypes.FatalErrorCode.INSECURE_CONTENT_BLOCKED) {
            return 'fatalErrorDoneButton';
        }
        return 'fatalErrorTryAgainButton';
    }
    /**
     * Generates the subtitle that is shown to the
     * user based on the error
     */
    computeSubtitle(locale, errorState, params) {
        switch (errorState) {
            case OobeTypes.FatalErrorCode.SCRAPED_PASSWORD_VERIFICATION_FAILURE:
                return this.i18nDynamic(locale, 'fatalErrorMessageVerificationFailed');
            case OobeTypes.FatalErrorCode.MISSING_GAIA_INFO:
                return this.i18nDynamic(locale, 'fatalErrorMessageNoAccountDetails');
            case OobeTypes.FatalErrorCode.INSECURE_CONTENT_BLOCKED:
                const url = params.url;
                assert(url);
                return this.i18nDynamic(locale, 'fatalErrorMessageInsecureURL', url);
            case OobeTypes.FatalErrorCode.CUSTOM:
                assert(params.errorText);
                return params.errorText;
            default:
                return '';
        }
    }
    onHelpLinkClicked() {
        this.userActed('learn-more');
    }
}
customElements.define(SigninFatalScreen.is, SigninFatalScreen);
