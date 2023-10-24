// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/polymer/v3_0/paper-styles/color.js';
import { assert } from 'chrome://resources/js/assert.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { IronA11yAnnouncer } from 'chrome://resources/polymer/v3_0/iron-a11y-announcer/iron-a11y-announcer.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './shortcut_input.html.js';
import { hasValidModifiers, isValidKeyCode, Key, keystrokeToString } from './shortcut_util.js';
var ShortcutError;
(function (ShortcutError) {
    ShortcutError[ShortcutError["NO_ERROR"] = 0] = "NO_ERROR";
    ShortcutError[ShortcutError["INCLUDE_START_MODIFIER"] = 1] = "INCLUDE_START_MODIFIER";
    ShortcutError[ShortcutError["TOO_MANY_MODIFIERS"] = 2] = "TOO_MANY_MODIFIERS";
    ShortcutError[ShortcutError["NEED_CHARACTER"] = 3] = "NEED_CHARACTER";
})(ShortcutError || (ShortcutError = {}));
const ExtensionsShortcutInputElementBase = I18nMixin(PolymerElement);
export class ExtensionsShortcutInputElement extends ExtensionsShortcutInputElementBase {
    static get is() {
        return 'extensions-shortcut-input';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            delegate: Object,
            item: Object,
            command: Object,
            shortcut: {
                type: String,
                value: '',
            },
            capturing_: {
                type: Boolean,
                value: false,
            },
            error_: {
                type: Number,
                value: ShortcutError.NO_ERROR,
            },
            readonly_: {
                type: Boolean,
                value: true,
                reflectToAttribute: true,
            },
            pendingShortcut_: {
                type: String,
                value: '',
            },
        };
    }
    ready() {
        super.ready();
        const node = this.$.input;
        node.addEventListener('mouseup', this.startCapture_.bind(this));
        node.addEventListener('blur', this.endCapture_.bind(this));
        node.addEventListener('focus', this.startCapture_.bind(this));
        node.addEventListener('keydown', this.onKeyDown_.bind(this));
        node.addEventListener('keyup', this.onKeyUp_.bind(this));
    }
    startCapture_() {
        if (this.capturing_ || this.readonly_) {
            return;
        }
        this.capturing_ = true;
        this.delegate.setShortcutHandlingSuspended(true);
    }
    endCapture_() {
        if (!this.capturing_) {
            return;
        }
        this.pendingShortcut_ = '';
        this.capturing_ = false;
        this.$.input.blur();
        this.error_ = ShortcutError.NO_ERROR;
        this.delegate.setShortcutHandlingSuspended(false);
        this.readonly_ = true;
    }
    clearShortcut_() {
        this.pendingShortcut_ = '';
        this.shortcut = '';
        // We commit the empty shortcut in order to clear the current shortcut
        // for the extension.
        this.commitPending_();
        this.endCapture_();
    }
    onKeyDown_(e) {
        if (this.readonly_) {
            return;
        }
        if (e.target === this.$.edit) {
            return;
        }
        if (e.keyCode === Key.ESCAPE) {
            if (!this.capturing_) {
                // If we're not currently capturing, allow escape to propagate.
                return;
            }
            // Otherwise, escape cancels capturing.
            this.endCapture_();
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        if (e.keyCode === Key.TAB) {
            // Allow tab propagation for keyboard navigation.
            return;
        }
        if (!this.capturing_) {
            this.startCapture_();
        }
        this.handleKey_(e);
    }
    onKeyUp_(e) {
        // Ignores pressing 'Space' or 'Enter' on the edit button. In 'Enter's
        // case, the edit button disappears before key-up, so 'Enter's key-up
        // target becomes the input field, not the edit button, and needs to
        // be caught explicitly.
        if (this.readonly_) {
            return;
        }
        if (e.target === this.$.edit || e.key === 'Enter') {
            return;
        }
        if (e.keyCode === Key.ESCAPE || e.keyCode === Key.TAB) {
            return;
        }
        this.handleKey_(e);
    }
    getErrorString_(_error, includeStartModifier, tooManyModifiers, needCharacter) {
        switch (this.error_) {
            case ShortcutError.INCLUDE_START_MODIFIER:
                return includeStartModifier;
            case ShortcutError.TOO_MANY_MODIFIERS:
                return tooManyModifiers;
            case ShortcutError.NEED_CHARACTER:
                return needCharacter;
            default:
                assert(this.error_ === ShortcutError.NO_ERROR);
                return '';
        }
    }
    handleKey_(e) {
        // While capturing, we prevent all events from bubbling, to prevent
        // shortcuts lacking the right modifier (F3 for example) from activating
        // and ending capture prematurely.
        e.preventDefault();
        e.stopPropagation();
        // We don't allow both Ctrl and Alt in the same keybinding.
        // TODO(devlin): This really should go in hasValidModifiers,
        // but that requires updating the existing page as well.
        if (e.ctrlKey && e.altKey) {
            this.error_ = ShortcutError.TOO_MANY_MODIFIERS;
            return;
        }
        if (!hasValidModifiers(e)) {
            this.pendingShortcut_ = '';
            this.error_ = ShortcutError.INCLUDE_START_MODIFIER;
            return;
        }
        this.pendingShortcut_ = keystrokeToString(e);
        if (!isValidKeyCode(e.keyCode)) {
            this.error_ = ShortcutError.NEED_CHARACTER;
            return;
        }
        this.error_ = ShortcutError.NO_ERROR;
        IronA11yAnnouncer.requestAvailability();
        this.dispatchEvent(new CustomEvent('iron-announce', {
            bubbles: true,
            composed: true,
            detail: {
                text: this.i18n('shortcutSet', this.computeText_()),
            },
        }));
        this.commitPending_();
        this.endCapture_();
    }
    commitPending_() {
        this.shortcut = this.pendingShortcut_;
        this.delegate.updateExtensionCommandKeybinding(this.item.id, this.command.name, this.shortcut);
    }
    computeInputAriaLabel_() {
        return this.i18n('editShortcutInputLabel', this.command.description, this.item.name);
    }
    computeEditButtonAriaLabel_() {
        return this.i18n('editShortcutButtonLabel', this.command.description, this.item.name);
    }
    computePlaceholder_() {
        if (this.readonly_) {
            return this.shortcut ? this.i18n('shortcutSet', this.computeText_()) :
                this.i18n('shortcutNotSet');
        }
        return this.i18n('shortcutTypeAShortcut');
    }
    /**
     * @return The text to be displayed in the shortcut field.
     */
    computeText_() {
        const shortcutString = this.capturing_ ? this.pendingShortcut_ : this.shortcut;
        return shortcutString.split('+').join(' + ');
    }
    getIsInvalid_() {
        return this.error_ !== ShortcutError.NO_ERROR;
    }
    onEditClick_() {
        // TODO(ghazale): The clearing functionality should be improved.
        // Instead of clicking the edit button, and then clicking elsewhere to
        // commit the "empty" shortcut, we want to introduce a separate clear
        // button.
        this.clearShortcut_();
        this.readonly_ = false;
        this.$.input.focus();
    }
}
customElements.define(ExtensionsShortcutInputElement.is, ExtensionsShortcutInputElement);
