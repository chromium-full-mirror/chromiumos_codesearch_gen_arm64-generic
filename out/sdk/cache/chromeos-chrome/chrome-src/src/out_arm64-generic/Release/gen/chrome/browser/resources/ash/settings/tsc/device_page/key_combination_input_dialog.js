// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/shortcut_input_ui/shortcut_input_key.js';
import 'chrome://resources/ash/common/shortcut_input_ui/shortcut_input.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './input_device_settings_shared.css.js';
import '../settings_shared.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { keyEventsAreEqual } from './input_device_settings_utils.js';
import { getTemplate } from './key_combination_input_dialog.html.js';
import { getShortcutInputProvider } from './shortcut_input_mojo_interface_provider.js';
const KeyCombinationInputDialogElementBase = I18nMixin(PolymerElement);
export class KeyCombinationInputDialogElement extends KeyCombinationInputDialogElementBase {
    constructor() {
        super(...arguments);
        this.isCapturing = false;
        this.eventTracker_ = new EventTracker();
    }
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
            isCapturing: {
                type: Boolean,
            },
            inputKeyEvent: {
                type: Object,
            },
            hasLauncherButton: {
                type: Boolean,
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
        this.eventTracker_.add(this, 'shortcut-input-event', this.onShortcutInputEvent_);
        this.eventTracker_.add(this, 'shortcut-input-capture-state', this.onShortcutInputUpdate_);
        // Set window as the eventTarget to exclude blur event from shortcut-input.
        this.eventTracker_.add(window, 'blur', this.onBlur_.bind(this));
        this.shortcutInput = this.$.shortcutInput;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
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
        this.shortcutInput.reset();
        this.shortcutInput.startObserving();
    }
    close() {
        const keyCombinationInputDialog = this.$.keyCombinationInputDialog;
        keyCombinationInputDialog.close();
        this.isOpen = keyCombinationInputDialog.open;
        this.shortcutInput.reset();
        this.shortcutInput.stopObserving();
    }
    getShortcutProvider() {
        return getShortcutInputProvider();
    }
    onBlur_() {
        if (this.isCapturing && !this.inputKeyEvent && this.isOpen) {
            this.close();
        }
    }
    cancelDialogClicked_() {
        this.close();
    }
    saveDialogClicked_() {
        if (!this.inputKeyEvent) {
            return;
        }
        const prevKeyEvent = this.buttonRemapping_.remappingAction?.keyEvent;
        if (!prevKeyEvent ||
            !keyEventsAreEqual(this.inputKeyEvent, prevKeyEvent)) {
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
                keyEvent: this.inputKeyEvent,
            },
        };
    }
    /**
     * Listens for ShortcutInputCompleteEvent to store users' input keyEvent.
     */
    onShortcutInputEvent_(e) {
        this.inputKeyEvent = e.detail.keyEvent;
        this.shortcutInput.stopObserving();
    }
    onShortcutInputUpdate_(e) {
        this.isCapturing = e.detail.capturing;
    }
    onEditButtonClicked_() {
        this.inputKeyEvent = undefined;
        this.shortcutInput.reset();
        this.shortcutInput.startObserving();
    }
    shouldDisableSaveButton_() {
        return this.inputKeyEvent === undefined;
    }
    shouldShowEditButton_() {
        return !this.isCapturing;
    }
}
customElements.define(KeyCombinationInputDialogElement.is, KeyCombinationInputDialogElement);
