// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/md_select.css.js';
import 'chrome://resources/polymer/v3_0/paper-styles/color.js';
import './shortcut_input.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './keyboard_shortcuts.html.js';
const ExtensionsKeyboardShortcutsElementBase = I18nMixin(PolymerElement);
// The UI to display and manage keyboard shortcuts set for extension commands.
export class ExtensionsKeyboardShortcutsElement extends ExtensionsKeyboardShortcutsElementBase {
    static get is() {
        return 'extensions-keyboard-shortcuts';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            delegate: Object,
            items: Array,
            /**
             * Proxying the enum to be used easily by the html template.
             */
            CommandScope_: {
                type: Object,
                value: chrome.developerPrivate.CommandScope,
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('view-enter-start', this.onViewEnter_);
    }
    onViewEnter_() {
        chrome.metricsPrivate.recordUserAction('Options_ExtensionCommands');
    }
    calculateShownItems_() {
        return this.items.filter(function (item) {
            return item.commands.length > 0;
        });
    }
    /**
     * A polymer bug doesn't allow for databinding of a string property as a
     * boolean, but it is correctly interpreted from a function.
     * Bug: https://github.com/Polymer/polymer/issues/3669
     */
    hasKeybinding_(keybinding) {
        return !!keybinding;
    }
    computeScopeAriaLabel_(item, command) {
        return this.i18n('shortcutScopeLabel', command.description, item.name);
    }
    /**
     * Determines whether to disable the dropdown menu for the command's scope.
     */
    computeScopeDisabled_(command) {
        return command.isExtensionAction || !command.isActive;
    }
    /**
     * This function exists to force trigger an update when CommandScope_
     * becomes available.
     */
    triggerScopeChange_(scope) {
        return scope;
    }
    onCloseButtonClick_() {
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
    onScopeChanged_(event) {
        this.delegate.updateExtensionCommandScope(event.model.get('item.id'), event.model.get('command.name'), event.target.value);
    }
}
customElements.define(ExtensionsKeyboardShortcutsElement.is, ExtensionsKeyboardShortcutsElement);
