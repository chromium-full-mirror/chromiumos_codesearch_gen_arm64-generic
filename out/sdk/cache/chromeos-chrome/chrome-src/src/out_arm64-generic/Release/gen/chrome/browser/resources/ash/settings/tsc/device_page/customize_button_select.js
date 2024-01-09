// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/md_select.css.js';
import 'chrome://resources/polymer/v3_0/iron-dropdown/iron-dropdown.js';
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import 'chrome://resources/ash/common/shortcut_input_ui/shortcut_input_key.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/ash/common/shortcut_input_ui/icons.html.js';
import './input_device_settings_shared.css.js';
import './customize_button_dropdown_item.js';
import '../settings_shared.css.js';
import { LWIN_KEY, META_KEY } from 'chrome://resources/ash/common/shortcut_input_ui/shortcut_input_key.js';
import { KeyToIconNameMap } from 'chrome://resources/ash/common/shortcut_input_ui/shortcut_utils.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './customize_button_select.html.js';
import { StaticShortcutAction } from './input_device_settings_types.js';
export const NO_REMAPPING_OPTION_VALUE = 'none';
export const KEY_COMBINATION_OPTION_VALUE = 'key combination';
export const OPEN_DIALOG_OPTION_VALUE = 'open key combination dialog';
const ACCELERATOR_ACTION_PREFIX = 'acceleratorAction';
const STATICS_SHORTCUT_ACTION_PREFIX = 'staticShortcutAction';
/**
 * Bit mask of modifiers.
 * Ordering is according to UX, but values match EventFlags in
 * ui/events/event_constants.h.
 */
var Modifier;
(function (Modifier) {
    Modifier[Modifier["NONE"] = 0] = "NONE";
    Modifier[Modifier["CONTROL"] = 4] = "CONTROL";
    Modifier[Modifier["SHIFT"] = 2] = "SHIFT";
    Modifier[Modifier["ALT"] = 8] = "ALT";
    Modifier[Modifier["META"] = 16] = "META";
})(Modifier || (Modifier = {}));
/**
 * Map the modifier keys to the bit value. Currently the modifiers only
 * contains the following four.
 */
const modifierBitMaskToString = new Map([
    [Modifier.CONTROL, 'Ctrl'],
    [Modifier.SHIFT, 'Shift'],
    [Modifier.ALT, 'Alt'],
    [Modifier.META, 'Meta'],
]);
/**
 * Converts a keyEvent to a string representing all the modifiers and the vkey.
 */
function getInputKeys(keyEvent) {
    const inputKeysArray = [];
    modifierBitMaskToString.forEach((modifierName, bitValue) => {
        // Now if pressing a single modifier key like "shift", it will show
        // "shift + shift" instead of a single "shift".
        // Temporarily add a condition to check modifierName duplicating with
        // keyDisplay until it's fixed in the key combination logics.
        if ((keyEvent.modifiers & bitValue) !== 0 &&
            modifierName !== keyEvent.keyDisplay) {
            inputKeysArray.push(modifierName, '+');
        }
    });
    if (keyEvent.keyDisplay !== undefined && keyEvent.keyDisplay.length !== 0) {
        inputKeysArray.push(keyEvent.keyDisplay);
    }
    else {
        // If no regular key to display, remove the extra '+'.
        inputKeysArray.splice(inputKeysArray.length - 1, 1);
    }
    return inputKeysArray;
}
const CustomizeButtonSelectElementBase = I18nMixin(PolymerElement);
export class CustomizeButtonSelectElement extends CustomizeButtonSelectElementBase {
    static get is() {
        return 'customize-button-select';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            menu: {
                type: Object,
            },
            shouldShowDropdownMenu_: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            buttonRemappingList: {
                type: Array,
            },
            remappingIndex: {
                type: Number,
            },
            buttonRemapping_: {
                type: Object,
            },
            actionList: {
                type: Array,
            },
            selectedValue: {
                type: String,
                value: NO_REMAPPING_OPTION_VALUE,
            },
            label_: {
                type: String,
                computed: 'getSelectedLabel_(selectedValue, menu.*)',
            },
            inputKeys_: {
                type: Array,
                value: [],
            },
            remappedToKeyCombination_: {
                type: Boolean,
                value: false,
            },
        };
    }
    static get observers() {
        return [
            'onSettingsChanged(selectedValue)',
            'initializeButtonSelect_(buttonRemappingList.*, remappingIndex, ' +
                'actionList)',
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('blur', this.onBlur_);
        this.addEventListener('customize-button-dropdown-selected', this.onDropdownItemSelected_);
        this.addEventListener('keydown', this.onKeyDown_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('blur', this.onBlur_);
        this.removeEventListener('customize-button-dropdown-selected', this.onDropdownItemSelected_);
        this.removeEventListener('keydown', this.onKeyDown_);
    }
    focus() {
        this.$.selectDropdown.focus();
    }
    initializeButtonSelect_() {
        if (!this.buttonRemappingList ||
            !this.buttonRemappingList[this.remappingIndex] || !this.actionList) {
            return;
        }
        this.isInitialized_ = false;
        this.buttonRemapping_ = this.buttonRemappingList[this.remappingIndex];
        this.setUpMenuItems_();
        this.initializeSelectedValue_();
        this.isInitialized_ = true;
    }
    showDropdownMenu_() {
        this.shouldShowDropdownMenu_ = true;
    }
    onBlur_() {
        this.shouldShowDropdownMenu_ = false;
    }
    onDropdownItemSelected_(e) {
        const optionValue = e.detail.value ?? NO_REMAPPING_OPTION_VALUE;
        if (optionValue === OPEN_DIALOG_OPTION_VALUE) {
            this.dispatchEvent(new CustomEvent('show-key-combination-dialog', {
                bubbles: true,
                composed: true,
                detail: { buttonIndex: this.remappingIndex },
            }));
        }
        else if (optionValue !== this.selectedValue) {
            this.set('selectedValue', optionValue);
        }
        // Close dropdown menu after selected.
        this.shouldShowDropdownMenu_ = false;
    }
    getSelectedLabel_() {
        if (!this.selectedValue || !this.menu) {
            return this.i18n('noRemappingOptionLabel');
        }
        return this.findOptionInMenu_(this.selectedValue)?.name ??
            this.i18n('noRemappingOptionLabel');
    }
    findOptionInMenu_(targetValue) {
        return this.menu.find((option) => option.value === targetValue);
    }
    setSelectedValue(newValue) {
        const foundOption = this.menu.find((dropdownItem) => dropdownItem.value === newValue);
        const foundValue = foundOption === undefined ? NO_REMAPPING_OPTION_VALUE :
            foundOption.value;
        this.set('selectedValue', foundValue);
    }
    setUpMenuItems_() {
        if (!this.actionList) {
            return;
        }
        const tempMenu = [];
        // Put default action to the top of dropdown menu per UX requirement.
        tempMenu.push({
            value: NO_REMAPPING_OPTION_VALUE,
            name: this.i18n('noRemappingOptionLabel'),
        });
        // Fill the dropdown menu with actionList.
        for (const actionChoice of this.actionList) {
            const acceleratorAction = actionChoice.actionType.acceleratorAction;
            const staticShortcutAction = actionChoice.actionType.staticShortcutAction;
            if (acceleratorAction !== undefined) {
                // Prepend an acceleratorAction prefix to distinguish it from the
                // StaticShortcutAction enum.
                tempMenu.push({
                    value: ACCELERATOR_ACTION_PREFIX + acceleratorAction.toString(),
                    name: actionChoice.name,
                });
            }
            else if (staticShortcutAction !== undefined) {
                // Prepend a staticShortcutAction prefix to distinguish it from the
                // AcceleratorAction enum.
                tempMenu.push({
                    value: STATICS_SHORTCUT_ACTION_PREFIX + staticShortcutAction.toString(),
                    name: actionChoice.name,
                });
            }
        }
        // Put 'Key combination' option in the dropdown menu.
        tempMenu.push({
            value: OPEN_DIALOG_OPTION_VALUE,
            name: this.i18n('keyCombinationOptionLabel'),
        });
        // Put kDisable action to the end of dropdown menu per UX requirement.
        tempMenu.push({
            value: STATICS_SHORTCUT_ACTION_PREFIX + StaticShortcutAction.kDisable,
            name: this.i18n('disbableOptionLabel'),
        });
        // This option is hidden in the menu because it's only displayed on
        // customize-button-select.
        tempMenu.push({
            value: KEY_COMBINATION_OPTION_VALUE,
            name: this.i18n('keyCombinationOptionLabel'),
            hidden: true,
        });
        this.set('menu', tempMenu);
    }
    initializeSelectedValue_() {
        this.inputKeys_ = [];
        this.remappedToKeyCombination_ = false;
        // For accelerator actions, the remappingAction.acceleratorAction value is
        // number.
        const acceleratorAction = this.buttonRemapping_.remappingAction?.acceleratorAction;
        const keyEvent = this.buttonRemapping_.remappingAction?.keyEvent;
        // For static shortcut actions, the remappingAction.staticShortcutAction
        // value is number.
        const staticShortcutAction = this.buttonRemapping_.remappingAction?.staticShortcutAction;
        if (acceleratorAction !== undefined && !isNaN(acceleratorAction)) {
            // Prepend an acceleratorAction prefix to distinguish it from the
            // staticShortcutAction enum.
            this.setSelectedValue(ACCELERATOR_ACTION_PREFIX + acceleratorAction.toString());
        }
        else if (keyEvent) {
            this.inputKeys_ = getInputKeys(keyEvent);
            this.remappedToKeyCombination_ = !!this.inputKeys_;
            this.setSelectedValue(KEY_COMBINATION_OPTION_VALUE);
        }
        else if (staticShortcutAction !== undefined && !isNaN(staticShortcutAction)) {
            // Prepend a staticShortcutAction prefix to distinguish it from
            // the acceleratorAction enum.
            const originalStaticShortcutAction = STATICS_SHORTCUT_ACTION_PREFIX + staticShortcutAction.toString();
            this.setSelectedValue(originalStaticShortcutAction);
        }
        else {
            this.setSelectedValue(NO_REMAPPING_OPTION_VALUE);
        }
    }
    /**
     * This method is called when selectedvalue is changed to
     * NO_REMAPPING_OPTION_VALUE or enums of remappingAction.
     *
     * @returns Updated button remapping with selected remapping action or
     * no remapping action.
     */
    getUpdatedRemapping() {
        if (this.selectedValue === NO_REMAPPING_OPTION_VALUE) {
            const updatedRemapping = {
                name: this.buttonRemapping_.name,
                button: this.buttonRemapping_.button,
            };
            return updatedRemapping;
        }
        // Otherwise the button is remapped to a remappingAction.
        let remappingAction = undefined;
        if (this.selectedValue.startsWith(ACCELERATOR_ACTION_PREFIX)) {
            // Remove the acceleratorAction prefix to get the real enum value.
            remappingAction = {
                acceleratorAction: Number(this.selectedValue.slice(ACCELERATOR_ACTION_PREFIX.length)),
            };
        }
        if (this.selectedValue.startsWith(STATICS_SHORTCUT_ACTION_PREFIX)) {
            // Remove the staticShortcutAction prefix to get the real enum value.
            remappingAction = {
                staticShortcutAction: Number(this.selectedValue.slice(STATICS_SHORTCUT_ACTION_PREFIX.length)),
            };
        }
        const updatedRemapping = {
            ...this.buttonRemapping_,
            remappingAction,
        };
        return updatedRemapping;
    }
    /**
     * Update device settings whenever the selectedValue changes.
     */
    onSettingsChanged() {
        if (!this.isInitialized_) {
            return;
        }
        this.set(`buttonRemappingList.${this.remappingIndex}`, this.getUpdatedRemapping());
        this.dispatchEvent(new CustomEvent('button-remapping-changed', {
            bubbles: true,
            composed: true,
        }));
    }
    getIconIdForKey_(key) {
        if (key === META_KEY || key === LWIN_KEY) {
            return 'shortcut-input-keys:launcher';
        }
        const iconName = KeyToIconNameMap[key];
        return iconName ? `shortcut-input-keys:${iconName}` : null;
    }
    /**
     * Return true if the item in the dropdown menu is selected.
     */
    isItemSelected_(item) {
        if (item.value === OPEN_DIALOG_OPTION_VALUE &&
            this.selectedValue === KEY_COMBINATION_OPTION_VALUE) {
            return true;
        }
        return item.value === this.selectedValue;
    }
    onKeyDown_(e) {
        if (e.key === 'Enter') {
            this.shouldShowDropdownMenu_ = !this.shouldShowDropdownMenu_;
            return;
        }
        // TODO(yyhyyh@): Add case for ArrowUp and ArrowDown.
    }
}
customElements.define(CustomizeButtonSelectElement.is, CustomizeButtonSelectElement);
