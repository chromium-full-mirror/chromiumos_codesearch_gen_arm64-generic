// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying material design Sync Consent
 * screen.
 */
import '//resources/ash/common/cr_elements/cros_color_overrides.css.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/paper-tooltip/paper-tooltip.js';
// 
import '../../components/buttons/oobe_text_button.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/hd_iron_icon.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import { CrCheckboxElement } from '//resources/ash/common/cr_elements/cr_checkbox/cr_checkbox.js';
import { assert, assertNotReached } from '//resources/js/assert.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { getTemplate } from './sync_consent.html.js';
/**
 * UI mode for the dialog.
 */
var SyncUiSteps;
(function (SyncUiSteps) {
    SyncUiSteps["ASH_SYNC"] = "ash-sync";
    SyncUiSteps["LOADING"] = "loading";
    SyncUiSteps["LACROS_OVERVIEW"] = "lacros-overview";
    SyncUiSteps["LACROS_CUSTOMIZE"] = "lacros-customize";
})(SyncUiSteps || (SyncUiSteps = {}));
/**
 * Available user actions.
 */
var UserAction;
(function (UserAction) {
    UserAction["CONTINUE"] = "continue";
    UserAction["SYNC_EVERYTHING"] = "sync-everything";
    UserAction["SYNC_CUSTOM"] = "sync-custom";
    UserAction["LACROS_DECLINE"] = "lacros-decline";
})(UserAction || (UserAction = {}));
const SyncConsentScreenElementBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
export class SyncConsentScreen extends SyncConsentScreenElementBase {
    static get is() {
        return 'sync-consent-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * OS Sync options status.
             */
            osSyncItemsStatus: {
                type: Object,
                notify: true,
            },
            /**
             * Indicates whether user is minor mode user (e.g. under age of 18).
             */
            isMinorMode: Boolean,
            /**
             * Indicates whether Lacros is enabled.
             */
            isLacrosEnabled: Boolean,
            /**
             * The text key for the opt-in button (it could vary based on whether
             * the user is in minor mode).
             */
            optInButtonTextKey: {
                type: String,
                computed: 'getOptInButtonTextKey(isMinorMode)',
            },
            /**
             * Array of strings of the consent description elements
             */
            consentDescription: {
                type: Array,
            },
            /**
             * The text of the consent confirmation element.
             */
            consentConfirmation: {
                type: String,
            },
        };
    }
    constructor() {
        super();
        this.isMinorMode = false;
        this.isLacrosEnabled = false;
        this.osSyncItemsStatus = {
            osApps: true,
            osPreferences: true,
            osWifiConfigurations: true,
            osWallpaper: true,
        };
    }
    get EXTERNAL_API() {
        return ['showLoadedStep', 'setIsMinorMode'];
    }
    get UI_STEPS() {
        return SyncUiSteps;
    }
    /** Initial UI State for screen */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.ONBOARDING;
    }
    /**
     * Event handler that is invoked just before the screen is shown.
     */
    onBeforeShow(data) {
        this.isLacrosEnabled = data['isLacrosEnabled'];
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return SyncUiSteps.LOADING;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('SyncConsentScreen');
        this.i18nUpdateLocale();
    }
    /**
     * Wallpaper sync is a special case; its implementation relies upon
     * OS Settings to be synced. Thus, the wallpaper label and toggle are
     * only enabled when the Settings sync toggle is on.
     */
    onSettingsSyncedChanged() {
        this.set('osSyncItemsStatus.osWallpaper', this.osSyncItemsStatus.osPreferences);
    }
    /**
     * Reacts to changes in loadTimeData.
     */
    updateLocalizedContent() {
        this.i18nUpdateLocale();
    }
    /**
     * This is called when SyncScreenBehavior becomes Shown.
     */
    showLoadedStep(isSyncLacros) {
        if (isSyncLacros) {
            this.showLacrosOverview();
        }
        else {
            this.showAshSync();
        }
    }
    /**
     * This is called to set ash-sync step.
     */
    showAshSync() {
        this.setUIStep(SyncUiSteps.ASH_SYNC);
    }
    /**
     * This is called to set lacros-overview step.
     */
    showLacrosOverview() {
        this.setUIStep(SyncUiSteps.LACROS_OVERVIEW);
    }
    /**
     * This is called to set lacros-customize step.
     */
    showLacrosCustomize() {
        this.setUIStep(SyncUiSteps.LACROS_CUSTOMIZE);
    }
    /**
     * Set the minor mode flag, which controls whether we could use nudge
     * techinuque on the UI.
     */
    setIsMinorMode(isMinorMode) {
        this.isMinorMode = isMinorMode;
    }
    /**
     * Continue button is clicked
     */
    onSettingsSaveAndContinue(e, optedIn) {
        assert(e.composedPath());
        let checkedBox = false;
        const reviewSettingsBox = this.shadowRoot?.querySelector('#reviewSettingsBox');
        if (reviewSettingsBox instanceof CrCheckboxElement) {
            checkedBox = reviewSettingsBox.checked;
        }
        this.userActed([
            UserAction.CONTINUE,
            optedIn,
            checkedBox,
            this.getConsentDescription(),
            this.getConsentConfirmation(e.composedPath()),
        ]);
    }
    onAccepted(e) {
        this.onSettingsSaveAndContinue(e, true /* optedIn */);
    }
    onDeclined(e) {
        this.onSettingsSaveAndContinue(e, false /* optedIn */);
    }
    /**
     * @param path Path of the click event. Must contain
     *     a consent confirmation element.
     * @return The text of the consent confirmation element.
     */
    getConsentConfirmation(path) {
        for (const element of path) {
            if (!element.hasAttribute) {
                continue;
            }
            if (element.hasAttribute('consent-confirmation')) {
                return element.innerHTML.trim();
            }
            // Search down in case of click on a button with description below.
            const labels = element.querySelectorAll('[consent-confirmation]');
            if (labels && labels.length > 0) {
                assert(labels.length == 1);
                let result = '';
                for (const label of labels) {
                    result += label.innerHTML.trim();
                }
                return result;
            }
        }
        assertNotReached('No consent confirmation element found.');
    }
    /** return Text of the consent description elements. */
    getConsentDescription() {
        const consentDescriptionElements = this.shadowRoot?.querySelectorAll('[consent-description]');
        assert(consentDescriptionElements);
        const consentDescription = Array.from(consentDescriptionElements)
            .filter(element => element.clientWidth * element.clientHeight > 0)
            .map(element => element.innerHTML.trim());
        assert(consentDescription);
        return consentDescription;
    }
    getReviewSettingText(locale, isArcRestricted) {
        if (isArcRestricted) {
            return this.i18nDynamic(locale, 'syncConsentReviewSyncOptionsWithArcRestrictedText');
        }
        return this.i18nDynamic(locale, 'syncConsentReviewSyncOptionsText');
    }
    /**
     * @return The text key of the accept button.
     */
    getOptInButtonTextKey(isMinorMode) {
        return isMinorMode ? 'syncConsentTurnOnSync' :
            'syncConsentAcceptAndContinue';
    }
    onSyncEverything(e) {
        this.userActed([
            UserAction.SYNC_EVERYTHING,
            this.getConsentDescription(),
            this.getConsentConfirmation((e.composedPath())),
        ]);
    }
    onManageClicked(e) {
        this.consentDescription = this.getConsentDescription();
        this.consentConfirmation =
            this.getConsentConfirmation((e.composedPath()));
        this.showLacrosCustomize();
    }
    onBackClicked() {
        this.showLacrosOverview();
    }
    onNextClicked() {
        this.userActed([
            UserAction.SYNC_CUSTOM,
            this.osSyncItemsStatus,
            this.consentDescription,
            this.consentConfirmation,
        ]);
    }
    onLacrosDeclineClicked() {
        this.userActed(UserAction.LACROS_DECLINE);
    }
    getAriaLabeltooltip(locale) {
        return this.i18nDynamic(locale, 'syncConsentScreenOsSyncAppsTooltipText') +
            this.i18nDynamic(locale, 'syncConsentScreenOsSyncAppsTooltipAdditionalText');
    }
    getAriaLabelToggleButtons(locale, title, subtitle) {
        return this.i18nDynamic(locale, title) + '. ' +
            this.i18nDynamic(locale, subtitle);
    }
}
customElements.define(SyncConsentScreen.is, SyncConsentScreen);
