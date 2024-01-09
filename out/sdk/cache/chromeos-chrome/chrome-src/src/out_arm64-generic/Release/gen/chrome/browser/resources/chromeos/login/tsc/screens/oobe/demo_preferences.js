// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/polymer/v3_0/paper-styles/color.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/oobe_i18n_dropdown.js';
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { Oobe } from '../../cr_ui.js';
import { getTemplate } from './demo_preferences.html.js';
const DemoPreferencesScreenBase = mixinBehaviors([OobeI18nBehavior, OobeDialogHostBehavior, LoginScreenBehavior], PolymerElement);
export class DemoPreferencesScreen extends DemoPreferencesScreenBase {
    static get is() {
        return 'demo-preferences-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * List of languages for language selector dropdown.
             */
            languages: {
                type: Array,
            },
            /**
             * List of countries for country selector dropdown.
             */
            countries: {
                type: Array,
            },
            /**
             * Indicate whether a country has been selected.
             */
            isCountrySelected: {
                type: Boolean,
                value: false,
            },
            /**
             * Indicates whether the next button is enabled and the user can continue.
             */
            userCanContinue: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                computed: `userCanContinue_(retailerNameInput,
                                    storeNumberInput,
                                    isCountrySelected)`,
            },
            retailerNameInput: {
                type: String,
                value: '',
            },
            storeNumberInput: {
                type: String,
                value: '',
            },
            /**
             * Indicates whether the string entered for storeNumberInput is
             * invalid. Note that we have to use a negative boolean here so that we
             * can style the helper text based on this value.
             */
            storeNumberInputInvalid: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                computed: 'isStoreNumberInputInvalid_(storeNumberInput)',
            },
        };
    }
    constructor() {
        super();
        /**
         * Flag that ensures that OOBE configuration is applied only once.
         */
        this.configurationApplied = false;
        /**
         * Country id of the option if no real country is selected.
         */
        this.countryNotSelectedId = 'N/A';
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('DemoPreferencesScreen');
        this.updateLocalizedContent();
    }
    /** Overridden from LoginScreenBehavior. */
    get EXTERNAL_API() {
        return [];
    }
    /** Returns a control which should receive an initial focus. */
    get defaultControl() {
        return this.shadowRoot.getElementById('demoPreferencesDialog');
    }
    /** Called when dialog is shown */
    onBeforeShow() {
        window.setTimeout(this.applyOobeConfiguration_.bind(this), 0);
    }
    /** Called when dialog is shown for the first time */
    applyOobeConfiguration_() {
        if (this.configurationApplied) {
            return;
        }
        const configuration = Oobe.getInstance().getOobeConfiguration();
        if (!configuration) {
            return;
        }
        if (configuration.demoPreferencesNext) {
            this.onNextClicked_();
        }
        this.configurationApplied = true;
    }
    /** Called after resources are updated. */
    updateLocalizedContent() {
        assert(loadTimeData);
        const languageList = loadTimeData.getValue('languageList');
        this.setLanguageList_(languageList);
        const countryList = loadTimeData.getValue('demoModeCountryList');
        this.setCountryList_(countryList);
        this.i18nUpdateLocale();
    }
    /**
     * Sets language list.
     */
    setLanguageList_(languages) {
        this.languages = languages;
    }
    /**
     * Sets country list.
     */
    setCountryList_(countries) {
        this.countries = countries;
        this.shadowRoot.getElementById('countryDropdownContainer').hidden =
            countries.length == 0;
        for (let i = 0; i < countries.length; ++i) {
            const country = countries[i];
            if (country.selected && country.value !== this.countryNotSelectedId) {
                this.isCountrySelected = true;
                return;
            }
        }
    }
    /**
     * Determines whether the Next button is enabled and the user may continue.
     * Based on the country, retailer name, and store number preferences being
     * correctly set.
     *
     */
    userCanContinue_(retailerNameInput, storeNumberInput, isCountrySelected) {
        return !!retailerNameInput && RegExp('^[0-9]+$').test(storeNumberInput) &&
            isCountrySelected;
    }
    /**
     * Validates store number input for styling the input helper text. Note we
     * only consider the input invalid if it's nonempty, thus the different
     * pattern than in {@link userCanContinue_}
     *
     */
    isStoreNumberInputInvalid_(storeNumberInput) {
        return !RegExp('^[0-9]*$').test(storeNumberInput);
    }
    /**
     * Handle country selection.
     */
    onCountrySelected_(event) {
        this.userActed(['set-demo-mode-country', event.detail.value]);
        this.isCountrySelected = event.detail.value !== this.countryNotSelectedId;
    }
    onInputKeyDown_(e) {
        if (e.key == 'Enter' &&
            this.userCanContinue_(this.retailerNameInput, this.storeNumberInput, this.isCountrySelected)) {
            this.onNextClicked_();
        }
    }
    /**
     * Back button click handler.
     */
    onBackClicked_() {
        this.userActed('close-setup');
    }
    /**
     * Next button click handler.
     */
    onNextClicked_() {
        this.userActed([
            'continue-setup',
            this.retailerNameInput,
            this.storeNumberInput,
        ]);
    }
}
customElements.define(DemoPreferencesScreen.is, DemoPreferencesScreen);
