// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-input-method-options-page' is the settings sub-page
 * to allow users to change options for each input method.
 */
import 'chrome://resources/ash/common/cr_elements/md_select.css.js';
import 'chrome://resources/ash/common/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/ash/common/cr_elements/cr_icon_button/cr_icon_button.js';
import '../settings_shared.css.js';
import './os_japanese_clear_ime_data_dialog.js';
import './os_japanese_manage_user_dictionary_page.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { afterNextRender, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { assertExhaustive } from '../assert_extras.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { RouteObserverMixin } from '../common/route_observer_mixin.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { OsSettingsSubpageElement } from '../os_settings_page/os_settings_subpage.js';
import { Router, routes } from '../router.js';
import { getTemplate } from './input_method_options_page.html.js';
import { AUTOCORRECT_OPTION_MAP_OVERRIDE, generateOptions, getDefaultValue, getFirstPartyInputMethodEngineId, getOptionLabelName, getOptionMenuItems, getOptionSubtitleName, getOptionUiType, getOptionUrl, getSubmenuButtonType, getUntranslatedOptionLabelName, isOptionLabelTranslated, OptionType, PHYSICAL_KEYBOARD_AUTOCORRECT_ENABLED_BY_DEFAULT, SettingsHeaders, shouldStoreAsNumber, SubmenuButton, UiType } from './input_method_util.js';
/**
 * The root path of input method options in Prefs.
 */
const PREFS_PATH = 'settings.language.input_method_specific_settings';
const SettingsInputMethodOptionsPageElementBase = RouteObserverMixin(PrefsMixin(I18nMixin(DeepLinkingMixin(PolymerElement))));
export class SettingsInputMethodOptionsPageElement extends SettingsInputMethodOptionsPageElementBase {
    constructor() {
        super(...arguments);
        // Internal properties for mixins.
        // From DeepLinkingMixin.
        this.supportedSettingIds = new Set([
            Setting.kShowPKAutoCorrection,
            Setting.kShowVKAutoCorrection,
        ]);
    }
    static get is() {
        return 'settings-input-method-options-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            languageHelper: Object,
            /**
             * Input method ID.
             */
            id_: String,
            /**
             * Input method engine ID.
             */
            engineId_: String,
            /**
             * The content to be displayed in the page, auto generated every time when
             * the user enters the page.
             */
            optionSections_: {
                type: Array,
                // This array is shared between all instances of the class:
                // https://crrev.com/c/3897703/comment/fa845200_e10503c6/
                // TODO(b/265556004): Move this to the constructor to avoid this.
                value: [],
            },
            showClearPersonalizedData_: {
                type: Boolean,
                value: false,
            },
        };
    }
    /**
     * RouteObserverMixin override
     */
    async currentRouteChanged(route) {
        if (route !== routes.OS_LANGUAGES_INPUT_METHOD_OPTIONS) {
            this.id_ = '';
            // During tests, the parent node is not a <os-settings-subpage>.
            if (this.parentNode instanceof OsSettingsSubpageElement) {
                this.parentNode.pageTitle = '';
            }
            this.optionSections_ = [];
            return;
        }
        const queryParams = Router.getInstance().getQueryParameters();
        await this.languageHelper.whenReady();
        this.id_ = queryParams.get('id') ||
            await this.languageHelper.getCurrentInputMethod();
        const displayName = this.languageHelper.getInputMethodDisplayName(this.id_);
        // During tests, the parent node is not a <os-settings-subpage>.
        if (this.parentNode instanceof OsSettingsSubpageElement) {
            this.parentNode.pageTitle = displayName;
        }
        // Safety: As this page (under normal use) can only be navigated to via
        // the inputs settings page, we should always have a valid input method ID
        // here.
        // Note that this asserts that this input method has a name, not that this
        // input method has options (from `generateOptions`). It is possible for
        // an input method to have a valid display name and not have options, and
        // an input method to have options but not a valid display name.
        assert(displayName !== '', `Input method ID '${this.id_}' is invalid`);
        this.engineId_ = getFirstPartyInputMethodEngineId(this.id_);
        this.populateOptionSections_();
        this.attemptDeepLink();
    }
    onSubmenuButtonClick_(e) {
        // Safety: The submenu button is always a <cr-button>, which is an Element.
        const submenuButtonType = e.target.getAttribute('submenu-button-type');
        if (submenuButtonType ===
            SubmenuButton.JAPANESE_DELETE_PERSONALIZATION_DATA) {
            this.showClearPersonalizedData_ = true;
            return;
        }
        console.error(`SubmenuButton with invalid type clicked : ${submenuButtonType}`);
    }
    onClearPersonalizedDataClose_() {
        this.showClearPersonalizedData_ = false;
    }
    /**
     * For some engineId, we want to store the data in a different storage
     * engineId. i.e. we want to use the nacl_mozc_jp settings data for
     * the nacl_mozc_us settings.
     */
    getStorageEngineId_() {
        return this.engineId_ !== 'nacl_mozc_us' ? this.engineId_ : 'nacl_mozc_jp';
    }
    /**
     * Get menu items for an option, and enrich the items with selected status and
     * i18n label.
     */
    getMenuItems(name, value) {
        return getOptionMenuItems(name).map(menuItem => {
            return {
                ...menuItem,
                selected: menuItem.value === value,
                label: menuItem.name ? this.i18n(menuItem.name) : menuItem.value,
            };
        });
    }
    /**
     * Generate the sections of options according to the engine ID and Prefs.
     */
    populateOptionSections_() {
        const inputMethodSpecificSettings = this.getPref(PREFS_PATH).value;
        const options = generateOptions(this.engineId_, {
            isPhysicalKeyboardAutocorrectAllowed: loadTimeData.getBoolean('isPhysicalKeyboardAutocorrectAllowed'),
            isPhysicalKeyboardPredictiveWritingAllowed: loadTimeData.getBoolean('isPhysicalKeyboardPredictiveWritingAllowed'),
            isJapaneseSettingsAllowed: loadTimeData.getBoolean('systemJapanesePhysicalTyping'),
            isVietnameseFirstPartyInputSettingsAllowed: loadTimeData.getBoolean('allowFirstPartyVietnameseInput'),
        });
        // The settings for Japanese for both engine nacl_mozc_us and nacl_mozc_jp
        // types will be stored in nacl_mozc_us. See:
        // https://crsrc.org/c/chrome/browser/ash/input_method/input_method_settings.cc;drc=5b784205e8043fb7d1c11e3d80521e80704947ca;l=25
        const engineId = this.getStorageEngineId_();
        const currentSettings = inputMethodSpecificSettings[engineId] ?? {};
        const defaultOverrides = this.getDefaultValueOverrides_(engineId);
        const makeOption = (option) => {
            const name = option.name;
            const uiType = getOptionUiType(name);
            let value = currentSettings[name];
            if (value === undefined) {
                value = getDefaultValue(
                // This cast is VERY unsafe, as `OPTION_DEFAULT` only contains
                // a small subset of options as keys.
                // TODO(b/263829863): Investigate and fix this type cast.
                name, defaultOverrides);
            }
            let needsPrefUpdate = false;
            if (!this.isSettingValueValid_(name, value)) {
                value = getDefaultValue(
                // This cast is VERY unsafe, as `OPTION_DEFAULT` only contains
                // a small subset of options as keys.
                // TODO(b/263829863): Investigate and fix this type cast.
                name, defaultOverrides);
                needsPrefUpdate = true;
            }
            if (loadTimeData.getBoolean('allowAutocorrectToggle') &&
                name in AUTOCORRECT_OPTION_MAP_OVERRIDE) {
                // Safety: We checked that `name` is a key above.
                value = AUTOCORRECT_OPTION_MAP_OVERRIDE[name]
                    // Safety: All autocorrect prefs have values that are
                    // numbers in `getOptionMenuItems` as well as
                    // `OPTION_DEFAULT`.
                    .mapValueForDisplay(value);
            }
            if (needsPrefUpdate) {
                // This function call is unsafe if this option is
                // `JAPANESE_NUMBER_OF_SUGGESTIONS`, or `allowAutocorrectToggle` is off
                // and this option is an autocorrect option.
                // In this case, `this.updatePref_` expects the value to be a string, as
                // the `shouldStoreAsNumber` branch is hit - but `getDefaultValue`
                // returns a number, not a string, in this case.
                // TODO(b/265557721): Fix the use of Polymer two-way native bindings in
                // the dropdown part of the template, and remove the
                // `shouldStoreAsNumber` branch.
                this.updatePref_(name, value);
            }
            const label = isOptionLabelTranslated(name) ?
                this.i18n(getOptionLabelName(name)) :
                getUntranslatedOptionLabelName(name);
            const subtitleStringName = getOptionSubtitleName(name);
            const subtitle = subtitleStringName && this.i18n(subtitleStringName);
            let link = -1;
            if (name === OptionType.PHYSICAL_KEYBOARD_AUTO_CORRECTION_LEVEL) {
                link = Setting.kShowPKAutoCorrection;
            }
            if (name === OptionType.VIRTUAL_KEYBOARD_AUTO_CORRECTION_LEVEL) {
                link = Setting.kShowVKAutoCorrection;
            }
            return {
                name: name,
                uiType: uiType,
                value: value,
                label: label,
                subtitle: subtitle,
                deepLink: link,
                menuItems: this.getMenuItems(name, value),
                url: getOptionUrl(name),
                dependentOptions: option.dependentOptions ?
                    option.dependentOptions.map(t => makeOption({ name: t })) :
                    [],
                submenuButtonType: this.isSubmenuButton_(uiType) ?
                    getSubmenuButtonType(name) :
                    undefined,
            };
        };
        // If there is no option name in a section, this section, including the
        // section title, should not be displayed.
        this.optionSections_ =
            options.filter(section => section.optionNames.length > 0)
                .map(section => {
                return {
                    title: this.getSectionTitleI18n_(section.title),
                    options: section.optionNames.map(makeOption, false),
                };
            });
    }
    /**
     * Returns an object specifying the default values to be used for a subset
     * of options.
     *
     * @param engineId The engine id we want default values for.
     * @return Default value overrides.
     */
    getDefaultValueOverrides_(engineId) {
        if (!loadTimeData.getBoolean('autocorrectEnableByDefault')) {
            return {};
        }
        const enabledByDefaultKey = PHYSICAL_KEYBOARD_AUTOCORRECT_ENABLED_BY_DEFAULT;
        const prefBlob = this.getPref(PREFS_PATH).value;
        const isAutocorrectDefaultEnabled = prefBlob?.[engineId]?.[enabledByDefaultKey];
        return !isAutocorrectDefaultEnabled ? {} : {
            [OptionType.PHYSICAL_KEYBOARD_AUTO_CORRECTION_LEVEL]: 1,
        };
    }
    dependentOptionsDisabled_(value) {
        // TODO(b/189909728): Sometimes the value comes as a string, other times as
        // an integer, other times as a boolean, so handle all cases. Try to
        // understand and fix this.
        return value === '0' || value === 0 || value === false;
    }
    /**
     * Handler for toggle button and dropdown change. Update the value of the
     * changing option in Cros prefs.
     */
    onToggleButtonOrDropdownChange_(e) {
        // e.model isn't correctly set for dependent options, due to nested
        // dom-repeat, so figure out what option was actually set.
        const option = e.model.dependent ? e.model.dependent : e.model.option;
        // The value of dropdown is not updated immediately when the event is fired.
        // Wait for the polymer state to update to make sure we write the latest
        // to Cros Prefs.
        afterNextRender(this, () => {
            this.updatePref_(option.name, option.value);
        });
    }
    isSettingValueValid_(name, value) {
        // TODO(b/238031866): Move this to be a function, as this method does not
        // use `this`.
        const uiType = getOptionUiType(name);
        if (uiType !== UiType.DROPDOWN) {
            return true;
        }
        const menuItems = getOptionMenuItems(name);
        return !!menuItems.find((item) => item.value === value);
    }
    /**
     * Update an input method pref.
     *
     * Callers must ensure that `newValue` is the value DISPLAYED for `optionName`
     * as this method maps back displayed values to stored prefs values.
     */
    updatePref_(optionName, newValue) {
        // Get the existing settings dictionary, in order to update it later.
        // |PrefsMixin.setPrefValue| will update Cros Prefs only if the reference
        // of variable has changed, so we need to copy the current content into a
        // new variable.
        const updatedSettings = {};
        Object.assign(updatedSettings, this.getPref(PREFS_PATH).value);
        const engineId = this.getStorageEngineId_();
        if (updatedSettings[engineId] === undefined) {
            updatedSettings[engineId] = {};
        }
        if (loadTimeData.getBoolean('allowAutocorrectToggle') &&
            optionName in AUTOCORRECT_OPTION_MAP_OVERRIDE) {
            // newValue is passed in as the value for display, so map it back to a
            // number.
            newValue =
                // Safety: We checked that optionName is a key above.
                AUTOCORRECT_OPTION_MAP_OVERRIDE[optionName]
                    // Safety: Enforced in documentation. As newValue must be the
                    // value displayed for an autocorrect option, newValue should be
                    // a boolean here.
                    .mapValueForWrite(newValue);
        }
        else if (shouldStoreAsNumber(optionName)) {
            // Safety: The above if statements ensure that `optionName` is one of:
            // - `PHYSICAL_KEYBOARD_AUTO_CORRECTION_LEVEL, if `allowAutocorrectToggle`
            //   is not set
            // - `VIRTUAL_KEYBOARD_AUTO_CORRECTION_LEVEL, if `allowAutocorrectToggle`
            //   is not set
            // - `JAPANESE_NUMBER_OF_SUGGESTIONS`
            // All of the above returns `UiType.DROPDOWN` in `getOptionUiType`, so
            // they are incorrectly passed as a string from Polymer's two-way native
            // binding, and all of the above return numbers from `getOptionMenuItems`.
            // TODO(b/265557721): Remove this when we remove Polymer's two-way native
            // binding of value changes.
            newValue = parseInt(newValue, 10);
        }
        // Safety: `updatedSettings[engineId]` is guaranteed to be defined as we
        // defined it above.
        updatedSettings[engineId][optionName] = newValue;
        this.setPrefValue(PREFS_PATH, updatedSettings);
    }
    /**
     * Opens external link in Chrome.
     */
    navigateToOtherPageInSettings_(e) {
        // Safety: This method is only called from an option if
        // `isLink_(option.uiType)` is true, i.e. `option.uiType === UiType.LINK`,
        // which, as of writing, is only true if it is EDIT_USER_DICT or
        // JAPANESE_MANAGE_USER_DICTIONARY - both of which should have a valid url
        // in `getOptionUrl`.
        Router.getInstance().navigateTo(e.model.option.url);
    }
    /**
     * @param section the name of the section.
     * @return the i18n string for the section title.
     */
    getSectionTitleI18n_(section) {
        switch (section) {
            case SettingsHeaders.BASIC:
                return this.i18n('inputMethodOptionsBasicSectionTitle');
            case SettingsHeaders.ADVANCED:
                return this.i18n('inputMethodOptionsAdvancedSectionTitle');
            case SettingsHeaders.PHYSICAL_KEYBOARD:
                return this.i18n('inputMethodOptionsPhysicalKeyboardSectionTitle');
            case SettingsHeaders.VIRTUAL_KEYBOARD:
                return this.i18n('inputMethodOptionsVirtualKeyboardSectionTitle');
            case SettingsHeaders.SUGGESTIONS:
                return this.i18n('inputMethodOptionsSuggestionsSectionTitle');
            // Japanese section
            case SettingsHeaders.INPUT_ASSISTANCE:
                return this.i18n('inputMethodOptionsInputAssistanceSectionTitle');
            // Japanese section
            case SettingsHeaders.USER_DICTIONARIES:
                return this.i18n('inputMethodOptionsUserDictionariesSectionTitle');
            // Japanese section
            case SettingsHeaders.PRIVACY:
                return this.i18n('inputMethodOptionsPrivacySectionTitle');
            case SettingsHeaders.VIETNAMESE_SHORTHAND:
                return this.i18n('inputMethodOptionsVietnameseShorthandTypingTitle');
            case SettingsHeaders.VIETNAMESE_FLEXIBLE_TYPING_EMPTY_HEADER:
            case SettingsHeaders.VIETNAMESE_SHOW_UNDERLINE_EMPTY_HEADER:
                return '';
            default:
                assertExhaustive(section);
        }
    }
    /**
     * @return true if title should be shown.
     */
    shouldShowTitle(section) {
        return section.title.length > 0;
    }
    /**
     * @return true if |item| is a toggle button.
     */
    isToggleButton_(item) {
        return item === UiType.TOGGLE_BUTTON;
    }
    /**
     * @return true if |item| is a toggle button.
     */
    isSubmenuButton_(item) {
        return item === UiType.SUBMENU_BUTTON;
    }
    /**
     * @return true if |item| is a dropdown.
     */
    isDropdown_(item) {
        return item === UiType.DROPDOWN;
    }
    /**
     * @return true if |item| is an external link.
     */
    isLink_(item) {
        return item === UiType.LINK;
    }
}
customElements.define(SettingsInputMethodOptionsPageElement.is, SettingsInputMethodOptionsPageElement);
