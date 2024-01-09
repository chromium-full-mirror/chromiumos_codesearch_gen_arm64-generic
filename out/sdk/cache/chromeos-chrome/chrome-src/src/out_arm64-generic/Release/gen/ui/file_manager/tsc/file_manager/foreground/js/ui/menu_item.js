// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import { assert } from 'chrome://resources/js/assert.js';
import { boolAttrSetter, crInjectTypeAndInit } from '../../../common/js/cr_ui.js';
import { Command } from './command.js';
/**
 * Creates a new menu item element.
 */
export function createMenuItem() {
    const el = document.createElement('cr-menu-item');
    return crInjectTypeAndInit(el, MenuItem);
}
export class MenuItem extends HTMLElement {
    constructor() {
        super(...arguments);
        this.command_ = null;
    }
    /**
     * Initializes the menu item.
     */
    initialize() {
        this.command_ = null;
        const commandId = this.getAttribute('command');
        if (commandId) {
            this.command = commandId;
        }
        this.addEventListener('mouseup', this.handleMouseUp_);
        // Adding the 'custom-appearance' class prevents widgets.css from changing
        // the appearance of this element.
        this.classList.add('custom-appearance');
        // Enable Text to Speech on the menu. Additionally, ID has to be set,
        // since it is used in element's aria-activedescendant attribute.
        if (!this.isSeparator()) {
            this.setAttribute('role', 'menuitem');
            this.setAttribute('tabindex', this.getAttribute('tabindex') || '-1');
        }
        const iconUrl = this.getAttribute('icon');
        if (iconUrl) {
            this.iconUrl = iconUrl;
        }
    }
    /**
     * Creates a new menu separator element.
     * @return The new separator element.
     */
    static createSeparator() {
        const el = document.createElement('hr');
        return crInjectTypeAndInit(el, MenuItem);
    }
    /**
     * The command associated with this menu item. If this is set to a string
     * of the form "#element-id" then the element is looked up in the document
     * of the command.
     */
    get command() {
        return this.command_;
    }
    set command(command) {
        if (this.command_) {
            this.command_.removeEventListener('labelChange', this);
            this.command_.removeEventListener('disabledChange', this);
            this.command_.removeEventListener('hiddenChange', this);
            this.command_.removeEventListener('checkedChange', this);
        }
        if (typeof command === 'string' && command[0] === '#') {
            command = this.ownerDocument.body.querySelector(command);
            assert(command);
            crInjectTypeAndInit(command, Command);
        }
        command = command;
        this.command_ = command;
        if (command) {
            if (command.id) {
                this.setAttribute('command', '#' + command.id);
            }
            if (command.label) {
                this.label = command.label;
            }
            this.disabled = command.disabled;
            this.hidden = command.hidden;
            this.checked = command.checked;
            this.command_.addEventListener('labelChange', this);
            this.command_.addEventListener('disabledChange', this);
            this.command_.addEventListener('hiddenChange', this);
            this.command_.addEventListener('checkedChange', this);
        }
        this.updateShortcut_();
    }
    /**
     * The text label.
     */
    get label() {
        return this.textContent;
    }
    set label(label) {
        this.textContent = label;
    }
    /**
     * Menu icon.
     */
    get iconUrl() {
        return this.style.backgroundImage;
    }
    set iconUrl(url) {
        this.style.backgroundImage = 'url(' + url + ')';
    }
    /**
     * @return Whether the menu item is a separator.
     */
    isSeparator() {
        return this.tagName === 'HR';
    }
    /**
     * Updates shortcut text according to associated command. If command has
     * multiple shortcuts, only first one is displayed.
     */
    updateShortcut_() {
        this.removeAttribute('shortcutText');
        if (!this.command_ || !this.command_.shortcut ||
            this.command_.hideShortcutText) {
            return;
        }
        const shortcuts = this.command_.shortcut.split(/\s+/);
        if (shortcuts.length === 0) {
            return;
        }
        const shortcut = shortcuts[0];
        const mods = {};
        let ident = '';
        shortcut.split('|').forEach((part) => {
            const partUc = part.toUpperCase();
            switch (partUc) {
                case 'CTRL':
                case 'ALT':
                case 'SHIFT':
                case 'META':
                    mods[partUc] = true;
                    break;
                default:
                    console.assert(!ident, 'Shortcut has two non-modifier keys');
                    ident = part;
            }
        });
        let shortcutText = '';
        ['CTRL', 'ALT', 'SHIFT', 'META'].forEach(function (mod) {
            if (mods[mod]) {
                shortcutText += loadTimeData.getString('SHORTCUT_' + mod) + '+';
            }
        });
        if (ident === ' ') {
            ident = 'Space';
        }
        if (ident.length !== 1) {
            shortcutText += loadTimeData.getString('SHORTCUT_' + ident.toUpperCase());
        }
        else {
            shortcutText += ident.toUpperCase();
        }
        this.setAttribute('shortcutText', shortcutText);
    }
    /**
     * Handles mouseup events. This dispatches an activate event; if there is an
     * associated command, that command is executed.
     * @param e The mouseup event object.
     */
    handleMouseUp_(e) {
        // Only dispatch an activate event for left or middle click.
        if (e.button > 1) {
            return;
        }
        if (!this.disabled && !this.isSeparator() && this.selected) {
            // Store |contextElement| since it'll be removed by {Menu} on handling
            // 'activate' event.
            const parent = this.parentElement;
            const contextElement = parent.contextElement;
            const activationEvent = document.createEvent('Event');
            activationEvent.initEvent('activate', true, true);
            activationEvent.originalEvent = e;
            // Dispatch command event followed by executing the command object.
            if (this.dispatchEvent(activationEvent)) {
                const command = this.command;
                if (command) {
                    command.execute(contextElement);
                    swallowDoubleClick(e);
                }
            }
        }
    }
    /**
     * Updates command according to the node on which this menu was invoked.
     * @param node Node on which menu was opened.
     */
    updateCommand(node) {
        if (this.command_) {
            this.command_.canExecuteChange(node);
        }
    }
    /**
     * Handles changes to the associated command.
     * @param e The event object.
     */
    handleEvent(e) {
        if (!this.command) {
            return;
        }
        switch (e.type) {
            case 'disabledChange':
                this.disabled = this.command.disabled;
                break;
            case 'hiddenChange':
                this.hidden = this.command.hidden;
                break;
            case 'labelChange':
                this.label = this.command.label;
                break;
            case 'checkedChange':
                this.checked = this.command.checked;
                break;
        }
    }
    /**
     * Whether the menu item is disabled or not.
     */
    get disabled() {
        return this.hasAttribute('disabled');
    }
    set disabled(value) {
        boolAttrSetter(this, 'disabled', value);
    }
    /**
     * Whether the menu item is hidden or not.
     */
    get hidden() {
        return this.hasAttribute('hidden');
    }
    set hidden(value) {
        boolAttrSetter(this, 'hidden', value);
    }
    /**
     * Whether the menu item is selected or not.
     */
    get selected() {
        return this.hasAttribute('selected');
    }
    set selected(value) {
        boolAttrSetter(this, 'selected', value);
    }
    /**
     * Whether the menu item is checked or not.
     */
    get checked() {
        return this.hasAttribute('checked');
    }
    set checked(value) {
        boolAttrSetter(this, 'checked', value);
    }
    /**
     * Whether the menu item is checkable or not.
     */
    get checkable() {
        return this.hasAttribute('checkable');
    }
    set checkable(value) {
        boolAttrSetter(this, 'checkable', value);
    }
}
/**
 * Users complain they occasionally use doubleclicks instead of clicks
 * (http://crbug.com/140364). To fix it we freeze click handling for the
 * double-click time interval.
 * @param e Initial click event.
 */
function swallowDoubleClick(e) {
    const target = e.target;
    const doc = target.ownerDocument;
    let counter = Math.min(1, e.detail);
    function swallow(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    function onclick(e) {
        if (e.detail > counter) {
            counter = e.detail;
            // Swallow the click since it's a click inside the double-click timeout.
            swallow(e);
        }
        else {
            // Stop tracking clicks and let regular handling.
            doc.removeEventListener('dblclick', swallow, true);
            doc.removeEventListener('click', onclick, true);
        }
    }
    // The following 'click' event (if e.type === 'mouseup') mustn't be taken
    // into account (it mustn't stop tracking clicks). Start event listening
    // after zero timeout.
    setTimeout(function () {
        doc.addEventListener('click', onclick, true);
        doc.addEventListener('dblclick', swallow, true);
    });
}
