// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertInstanceof } from 'chrome://resources/js/assert.js';
import { Menu } from './menu.js';
import { MenuItem } from './menu_item.js';
/**
 * Menu item with ripple animation.
 */
export class FilesMenuItem extends MenuItem {
    constructor() {
        super();
        this.animating_ = false;
        this.hidden_ = undefined;
        this.descriptor = null;
        throw new Error('Designed to decorate elements');
    }
    initialize() {
        this.animating_ = false;
        // Custom menu item can have sophisticated content (elements).
        if (!this.children.length) {
            this.label_ = document.createElement('span');
            this.label_.textContent = this.textContent;
            this.iconStart_ = document.createElement('div');
            this.iconStart_.classList.add('icon', 'start');
            this.iconManaged_ = document.createElement('div');
            this.iconManaged_.classList.add('icon', 'managed');
            this.iconEnd_ = document.createElement('div');
            this.iconEnd_.classList.add('icon', 'end');
            /**
             * This is hidden by default because most of the menu items require
             * neither the end icon nor the managed icon, so the component that
             * plans to use either end icon should explicitly make it visible.
             */
            this.setIconEndHidden(true);
            this.toggleManagedIcon(/*visible=*/ false);
            // Override with standard menu item elements.
            this.textContent = '';
            this.appendChild(this.iconStart_);
            this.appendChild(this.label_);
            this.appendChild(this.iconManaged_);
            this.appendChild(this.iconEnd_);
        }
        this.ripple_ = document.createElement('paper-ripple');
        this.appendChild(this.ripple_);
        this.addEventListener('activate', this.onActivated_.bind(this));
    }
    /**
     * Handles activate event.
     */
    onActivated_(evt) {
        const event = evt;
        // Perform ripple animation if it's activated by keyboard.
        if (event.originalEvent instanceof KeyboardEvent) {
            this.ripple_.simulatedRipple();
        }
        // Perform fade out animation.
        const menu = this.parentNode;
        assertInstanceof(menu, Menu);
        // If activation was on a menu-item that hosts a sub-menu, don't animate
        const subMenuId = event.target.getAttribute('sub-menu');
        if (subMenuId) {
            if (document.querySelector(subMenuId) !== null) {
                return;
            }
        }
        this.setMenuAsAnimating_(menu, /*animating=*/ true);
        const player = menu.animate([
            {
                opacity: 1,
                offset: 0,
            },
            {
                opacity: 0,
                offset: 1,
            },
        ], 300);
        player.addEventListener('finish', this.setMenuAsAnimating_.bind(this, menu, /*animating=*/ false));
    }
    /**
     * Sets menu as animating. Pass value equal to true to set it as animating.
     */
    setMenuAsAnimating_(menu, value) {
        menu.classList.toggle('animating', value);
        for (let i = 0; i < menu.menuItems.length; i++) {
            const menuItem = menu.menuItems[i];
            if (menuItem instanceof FilesMenuItem) {
                menuItem.setAnimating_(value);
            }
        }
        if (!value) {
            menu.classList.remove('toolbar-menu');
        }
    }
    /**
     * Sets the menu item as animating. Pass value set to true to set this as
     * animating.
     */
    setAnimating_(value) {
        this.animating_ = value;
        if (this.animating_) {
            return;
        }
        // Update hidden property if there is a pending change.
        if (this.hidden_ !== undefined) {
            this.hidden = this.hidden_;
            this.hidden_ = undefined;
        }
    }
    get hidden() {
        if (this.hidden_ !== undefined) {
            return this.hidden_;
        }
        return Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'hidden')
            ?.get?.call(this);
    }
    /**
     * Overrides hidden property to block the change of hidden property while
     * menu is animating.
     */
    set hidden(value) {
        if (this.animating_) {
            this.hidden_ = value;
            return;
        }
        Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'hidden')
            ?.set?.call(this, value);
    }
    get label() {
        return this.label_.textContent || '';
    }
    set label(value) {
        this.label_.textContent = value;
    }
    get iconStartImage() {
        return this.iconStart_.style.backgroundImage;
    }
    set iconStartImage(value) {
        this.iconStart_.setAttribute('style', 'background-image: ' + value);
    }
    get iconStartFileType() {
        return this.iconStart_.getAttribute('file-type-icon') || '';
    }
    set iconStartFileType(value) {
        this.iconStart_.setAttribute('file-type-icon', value);
    }
    /**
     * Sets or removes the `is-managed` attribute.
     */
    toggleIsManagedAttribute(isManaged) {
        this.toggleAttribute('is-managed', isManaged);
    }
    /**
     * Sets the `is-default` attribute.
     */
    setIsDefaultAttribute() {
        this.toggleAttribute('is-default', true);
    }
    /**
     * Toggles visibility of the `Managed by Policy` icon.
     */
    toggleManagedIcon(visible) {
        this.iconManaged_.toggleAttribute('hidden', !visible);
        this.toggleIsManagedAttribute(visible);
    }
    get iconEndImage() {
        return this.iconEnd_.style.backgroundImage;
    }
    set iconEndImage(value) {
        this.iconEnd_.setAttribute('style', 'background-image: ' + value);
    }
    get iconEndFileType() {
        return this.iconEnd_.getAttribute('file-type-icon') || '';
    }
    set iconEndFileType(value) {
        this.iconEnd_.setAttribute('file-type-icon', value);
    }
    removeIconEndFileType() {
        this.iconEnd_.removeAttribute('file-type-icon');
    }
    setIconEndHidden(isHidden) {
        this.iconEnd_.toggleAttribute('hidden', isHidden);
    }
}
