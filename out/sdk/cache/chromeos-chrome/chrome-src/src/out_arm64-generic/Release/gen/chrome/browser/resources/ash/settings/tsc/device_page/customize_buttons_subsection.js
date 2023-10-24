// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'customize-buttons-subsection' contains a list of 'customize-button-row'
 * elements that allow users to remap buttons to actions or key combinations.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import '../settings_shared.css.js';
import './customize_button_row.js';
import './key_combination_input_dialog.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './customize_buttons_subsection.html.js';
import { DragAndDropManager } from './drag_and_drop_manager.js';
const MAX_BUTTON_NAME_INPUT_LENGTH = 64;
const CustomizeButtonsSubsectionElementBase = I18nMixin(PolymerElement);
export class CustomizeButtonsSubsectionElement extends CustomizeButtonsSubsectionElementBase {
    constructor() {
        super(...arguments);
        this.dragAndDropManager = new DragAndDropManager();
        this.onDrop_ = (originIndex, destinationIndex) => {
            if (originIndex < 0 || originIndex >= this.buttonRemappingList.length ||
                destinationIndex < 0 ||
                destinationIndex >= this.buttonRemappingList.length) {
                return;
            }
            // Move the item in this.buttonRemappingList from originIndex
            // to destinationIndex.
            const movedItem = this.buttonRemappingList[originIndex];
            // Remove item at origin index
            this.splice('buttonRemappingList', originIndex, 1);
            // Add item at destination index
            this.splice('buttonRemappingList', destinationIndex, 0, movedItem);
            this.dispatchEvent(new CustomEvent('button-remapping-changed', {
                bubbles: true,
                composed: true,
            }));
        };
    }
    static get is() {
        return 'customize-buttons-subsection';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            actionList: {
                type: Array,
            },
            buttonRemappingList: {
                type: Array,
            },
            selectedButton_: {
                type: Object,
            },
            shouldShowRenamingDialog_: {
                type: Boolean,
                value: false,
            },
            selectedButtonName_: {
                type: String,
                value: '',
                observer: 'onNameInputChanged_',
            },
            selectedButtonIndex_: {
                type: Number,
            },
            buttonNameInvalid_: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('show-renaming-dialog', this.showRenamingDialog_);
        this.addEventListener('show-key-combination-dialog', this.showKeyCombinationDialog_);
        this.dragAndDropManager.init(this, this.onDrop_.bind(this));
    }
    disconnectedCallback() {
        this.dragAndDropManager.destroy();
    }
    showRenamingDialog_(e) {
        this.selectedButtonIndex_ = e.detail.buttonIndex;
        this.selectedButton_ = this.buttonRemappingList[this.selectedButtonIndex_];
        this.selectedButtonName_ = this.selectedButton_.name;
        this.buttonNameInvalid_ = false;
        this.shouldShowRenamingDialog_ = true;
    }
    /**
     * Returns a formatted string containing the current number of characters
     * entered in the input compared to the maximum number of characters allowed.
     */
    getInputCountString_(buttonName) {
        // minimumIntegerDigits is 2 because we want to show a leading zero if
        // length is less than 10.
        return this.i18n('buttonRenamingDialogInputCharCount', buttonName.length.toLocaleString(
        /*locales=*/ undefined, { minimumIntegerDigits: 2 }), MAX_BUTTON_NAME_INPUT_LENGTH.toLocaleString());
    }
    showKeyCombinationDialog_(e) {
        this.selectedButtonIndex_ = e.detail.buttonIndex;
        this.$.keyCombinationInputDialog.showModal();
    }
    cancelRenamingDialogClicked_() {
        this.shouldShowRenamingDialog_ = false;
    }
    saveRenamingDialogClicked_() {
        if (!this.isSaveDisabled_()) {
            this.updateButtonName_();
            this.shouldShowRenamingDialog_ = false;
        }
    }
    onKeyDownInRenamingDialog_(event) {
        this.buttonNameInvalid_ = false;
        if (event.key === 'Enter') {
            this.saveRenamingDialogClicked_();
        }
    }
    onNameInputChanged_(_newValue, oldValue) {
        // If oldValue.length > MAX_BUTTON_NAME_INPUT_LENGTH, the user attempted
        // to enter more than the max limit, this method was called and it was
        // truncated, and then this method was called one more time.
        this.buttonNameInvalid_ =
            !!oldValue && oldValue.length > MAX_BUTTON_NAME_INPUT_LENGTH;
        // Truncate the name to maxInputLength.
        this.selectedButtonName_ =
            this.selectedButtonName_.substring(0, MAX_BUTTON_NAME_INPUT_LENGTH);
    }
    updateButtonName_() {
        if (!!this.selectedButtonName_ &&
            this.selectedButton_.name !== this.selectedButtonName_) {
            this.set(`buttonRemappingList.${this.selectedButtonIndex_}.name`, this.selectedButtonName_);
            this.dispatchEvent(new CustomEvent('button-remapping-changed', {
                bubbles: true,
                composed: true,
            }));
        }
        this.selectedButtonName_ = '';
    }
    isSaveDisabled_() {
        if (this.selectedButtonName_ === this.selectedButton_.name) {
            return true;
        }
        if (!this.selectedButtonName_.length) {
            return true;
        }
        return false;
    }
}
customElements.define(CustomizeButtonsSubsectionElement.is, CustomizeButtonsSubsectionElement);
