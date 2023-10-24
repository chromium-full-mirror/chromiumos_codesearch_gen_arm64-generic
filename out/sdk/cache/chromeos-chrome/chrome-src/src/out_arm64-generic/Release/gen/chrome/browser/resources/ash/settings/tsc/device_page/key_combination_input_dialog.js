// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './input_device_settings_shared.css.js';
import '../settings_shared.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { keyEventsAreEqual } from './input_device_settings_utils.js';
import { getTemplate } from './key_combination_input_dialog.html.js';
const KeyCombinationInputDialogElementBase = I18nMixin(PolymerElement);
export class KeyCombinationInputDialogElement extends KeyCombinationInputDialogElementBase {
    static get is() {
        return 'key-combination-input-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            buttonRemappingList: {
                type: Array,
            },
            remappingIndex: {
                type: Number,
            },
            buttonRemapping_: {
                type: Object,
            },
            isOpen: {
                type: Boolean,
                value: false,
            },
        };
    }
    static get observers() {
        return [
            'initializeDialog(buttonRemappingList.*, remappingIndex)',
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('shortcut-input-complete', this.onShortcutInputComplete_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('shortcut-input-complete', this.onShortcutInputComplete_);
    }
    /**
     * Initialize the button remapping content and set up fake pref.
     */
    initializeDialog() {
        if (!this.buttonRemappingList ||
            !this.buttonRemappingList[this.remappingIndex]) {
            return;
        }
        this.buttonRemapping_ = this.buttonRemappingList[this.remappingIndex];
    }
    showModal() {
        this.initializeDialog();
        const keyCombinationInputDialog = this.$.keyCombinationInputDialog;
        keyCombinationInputDialog.showModal();
        this.isOpen = keyCombinationInputDialog.open;
    }
    close() {
        const keyCombinationInputDialog = this.$.keyCombinationInputDialog;
        keyCombinationInputDialog.close();
        this.isOpen = keyCombinationInputDialog.open;
    }
    cancelDialogClicked_() {
        this.close();
    }
    saveDialogClicked_() {
        if (!this.inputKeyEvent_) {
            return;
        }
        const prevKeyEvent = this.buttonRemapping_.remappingAction?.keyEvent;
        if (!prevKeyEvent ||
            !keyEventsAreEqual(this.inputKeyEvent_, prevKeyEvent)) {
            this.set(`buttonRemappingList.${this.remappingIndex}`, this.getUpdatedButtonRemapping_());
            this.dispatchEvent(new CustomEvent('button-remapping-changed', {
                bubbles: true,
                composed: true,
            }));
        }
        this.close();
    }
    /**
     * @returns Button remapping with updated remapping action based on
     * users' key combination input.
     */
    getUpdatedButtonRemapping_() {
        return {
            ...this.buttonRemapping_,
            remappingAction: {
                keyEvent: this.inputKeyEvent_,
            },
        };
    }
    /**
     * Listens for ShortcutInputCompleteEvent to store users' input keyEvent.
     */
    onShortcutInputComplete_(e) {
        this.inputKeyEvent_ = e.detail.keyEvent;
    }
}
customElements.define(KeyCombinationInputDialogElement.is, KeyCombinationInputDialogElement);
