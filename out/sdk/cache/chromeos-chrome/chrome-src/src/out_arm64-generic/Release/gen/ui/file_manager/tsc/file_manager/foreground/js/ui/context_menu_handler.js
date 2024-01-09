// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { dispatchPropertyChange } from 'chrome://resources/ash/common/cr_deprecated.js';
import { assertInstanceof } from 'chrome://resources/js/assert.js';
import { crInjectTypeAndInit } from '../../../common/js/cr_ui.js';
import { FilesEventTarget } from '../../../common/js/files_event_target.js';
import { Menu } from './menu.js';
import { MenuItem } from './menu_item.js';
import { HideType } from './multi_menu_button.js';
import { positionPopupAtPoint } from './position_util.js';
/**
 * Handles context menus.
 */
class ContextMenuHandler extends FilesEventTarget {
    constructor() {
        super(...arguments);
        this.abortController_ = null;
        this.menu_ = null;
        this.hideTimestamp_ = null;
        this.keyIsDown_ = false;
        this.resizeObserver_ = null;
    }
    get menu() {
        return this.menu_;
    }
    getMenuPosition_(target, clientX, clientY) {
        // When the user presses the context menu key (on the keyboard) we need
        // to detect this.
        let x;
        let y;
        if (this.keyIsDown_) {
            let rect;
            if ('getRectForContextMenu' in target) {
                rect = target.getRectForContextMenu();
            }
            else {
                rect = target.getBoundingClientRect();
            }
            const offset = Math.min(rect.width, rect.height) / 2;
            x = rect.left + offset;
            y = rect.top + offset;
        }
        else {
            x = clientX;
            y = clientY;
        }
        return { x, y };
    }
    /**
     * Shows a menu as a context menu.
     * @param e The event triggering the show (usually a contextmenu event).
     * @param menu The menu to show.
     */
    showMenu(e, menu) {
        assertInstanceof(e.currentTarget, Node);
        menu.updateCommands(e.currentTarget);
        if (!menu.hasVisibleItems()) {
            return;
        }
        const htmlElement = e.currentTarget;
        const { x, y } = this.getMenuPosition_(htmlElement, e.clientX, e.clientY);
        this.menu_ = menu;
        menu.classList.remove('hide-delayed');
        menu.show({ x, y });
        menu.contextElement = htmlElement;
        // When the menu is shown we steal a lot of events.
        const doc = menu.ownerDocument;
        if (this.resizeObserver_) {
            this.resizeObserver_.disconnect();
        }
        this.resizeObserver_ = new ResizeObserver((_entries) => {
            positionPopupAtPoint(x, y, menu);
        });
        this.resizeObserver_.observe(menu);
        this.abortController_ = new AbortController();
        const signal = this.abortController_.signal;
        doc.addEventListener('keydown', this.handleKeyboardEvent_.bind(this), { signal, capture: true });
        doc.addEventListener('mousedown', this.handleMouseEvent_.bind(this), { signal, capture: true });
        doc.addEventListener('touchstart', this.handleTouchEvent_.bind(this), { signal, capture: true });
        doc.addEventListener('focus', this.handleFocusEvent_.bind(this), { signal });
        doc.defaultView?.addEventListener('popstate', this.handleHideMenuEvent_.bind(this), { signal });
        doc.defaultView?.addEventListener('resize', this.handleHideMenuEvent_.bind(this), { signal });
        doc.defaultView?.addEventListener('blur', this.handleHideMenuEvent_.bind(this), { signal });
        menu.addEventListener('contextmenu', this.handleContextMenuEvent_.bind(this), { signal });
        menu.addEventListener('activate', this.handleActivateEvent_.bind(this), { signal });
        const ev = new CustomEvent('show', { detail: { element: menu.contextElement, menu } });
        this.dispatchEvent(ev);
    }
    /**
     * Hide the currently shown menu.
     * @param hideType Type of hide.
     *     default: HideType.INSTANT.
     */
    hideMenu(hideType) {
        const menu = this.menu;
        if (!menu) {
            return;
        }
        if (hideType === HideType.DELAYED) {
            menu.classList.add('hide-delayed');
        }
        else {
            menu.classList.remove('hide-delayed');
        }
        menu.hide();
        const originalContextElement = menu.contextElement;
        menu.contextElement = null;
        this.abortController_?.abort();
        if (this.resizeObserver_) {
            this.resizeObserver_.unobserve(menu);
            this.resizeObserver_ = null;
        }
        menu.selectedIndex = -1;
        this.menu_ = null;
        // On windows we might hide the menu in a right mouse button up and if
        // that is the case we wait some short period before we allow the menu
        // to be shown again.
        this.hideTimestamp_ = 0;
        const ev = new CustomEvent('hide', { detail: { element: originalContextElement, menu } });
        this.dispatchEvent(ev);
    }
    handleKeyboardEvent_(e) {
        // Keep track of keydown state so that we can use that to determine the
        // reason for the contextmenu event.
        switch (e.type) {
            case 'keydown':
                this.keyIsDown_ = !e.ctrlKey && !e.altKey &&
                    // context menu key or Shift-F10.
                    (e.keyCode === 93 && !e.shiftKey || e.key === 'F10' && e.shiftKey);
                break;
            case 'keyup':
                this.keyIsDown_ = false;
                break;
        }
        if (!this.menu || e.type !== 'keydown') {
            return;
        }
        if (e.key === 'Escape') {
            this.hideMenu();
            e.stopPropagation();
            e.preventDefault();
            // If the menu is visible we let it handle all the keyboard events
            // unless Ctrl is held down.
        }
        else if (this.menu && !e.ctrlKey) {
            this.menu.handleKeyDown(e);
            e.preventDefault();
            e.stopPropagation();
        }
    }
    handleTouchEvent_(e) {
        if (!this.menu?.contains(e.target)) {
            this.hideMenu();
        }
    }
    handleFocusEvent_(e) {
        if (!this.menu?.contains(e.target)) {
            this.hideMenu();
        }
    }
    handleHideMenuEvent_(_e) {
        if (this.menu) {
            this.hideMenu();
        }
    }
    handleActivateEvent_(e) {
        if (this.menu) {
            const hideDelayed = e.target instanceof MenuItem && e.target.checkable;
            this.hideMenu(hideDelayed ? HideType.DELAYED : HideType.INSTANT);
        }
    }
    handleContextMenuEvent_(e) {
        if ((!this.menu || !this.menu.contains(e.target)) &&
            (!this.hideTimestamp_ || Date.now() - this.hideTimestamp_ > 50)) {
            this.showMenu(e, e.currentTarget.contextMenu);
        }
        e.preventDefault();
        e.stopPropagation();
    }
    /**
     * Handles mouse event callbacks.
     */
    handleMouseEvent_(e) {
        if (!this.menu) {
            return;
        }
        if (!this.menu.contains(e.target)) {
            this.hideMenu();
        }
        else {
            e.preventDefault();
        }
    }
    /**
     * Adds a contextMenu property to an element or element class.
     * @param elementOrClass The element or class to add the contextMenu property
     *     to.
     */
    addContextMenuProperty(elementOrClass) {
        const target = typeof elementOrClass === 'function' ?
            elementOrClass.prototype :
            elementOrClass;
        Object.defineProperty(target, 'contextMenu', {
            get: function () {
                return this.contextMenu_;
            },
            set: function (menu) {
                const oldContextMenu = this.contextMenu;
                if (typeof menu === 'string' && menu[0] === '#') {
                    menu = this.ownerDocument.getElementById(menu.slice(1));
                    crInjectTypeAndInit(menu, Menu);
                }
                if (menu === oldContextMenu) {
                    return;
                }
                if (oldContextMenu && !menu) {
                    this.abortController_?.abort();
                }
                if (menu && !oldContextMenu) {
                    this.abortController_ = new AbortController();
                    const signal = this.abortController_.signal;
                    this.addEventListener('contextmenu', contextMenuHandler.handleContextMenuEvent_.bind(contextMenuHandler), { signal });
                    this.addEventListener('keydown', contextMenuHandler.handleKeyboardEvent_.bind(contextMenuHandler), { signal });
                    this.addEventListener('keyup', contextMenuHandler.handleKeyboardEvent_.bind(contextMenuHandler), { signal });
                }
                this.contextMenu_ = menu;
                if (menu && menu.id) {
                    this.setAttribute('contextmenu', '#' + menu.id);
                }
                dispatchPropertyChange(this, 'contextMenu', menu, oldContextMenu);
            },
        });
        if (!target.getRectForContextMenu) {
            /**
             * @return The rect to use for positioning the context menu when the
             *     context menu is not opened using a mouse position.
             */
            target.getRectForContextMenu = function () {
                return this.getBoundingClientRect();
            };
        }
    }
    /**
     * Sets the given contextMenu to the given element. A contextMenu property
     * would be added if necessary.
     * @param element The element or class to set the contextMenu to.
     * @param contextMenu The contextMenu property to be set.
     */
    setContextMenu(element, contextMenu) {
        if (!element || !element.contextMenu) {
            this.addContextMenuProperty(element);
        }
        element.contextMenu = contextMenu;
    }
}
/**
 * The singleton context menu handler.
 */
export const contextMenuHandler = new ContextMenuHandler();
