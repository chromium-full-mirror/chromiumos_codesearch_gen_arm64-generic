// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './app_management_shared_style.css.js';
import './toggle_row.js';
import { assert, assertNotReached } from '//resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BrowserProxy } from './browser_proxy.js';
import { AppManagementUserAction, WindowMode } from './constants.js';
import { recordAppManagementUserAction } from './util.js';
import { getTemplate } from './window_mode_item.html.js';
function convertWindowModeToBool(windowMode) {
    switch (windowMode) {
        case WindowMode.kBrowser:
            return false;
        case WindowMode.kWindow:
            return true;
        default:
            assertNotReached();
    }
}
function getWindowModeBoolean(windowMode) {
    assert(windowMode !== WindowMode.kUnknown, 'Window Mode Not Set');
    return convertWindowModeToBool(windowMode);
}
export class AppManagementWindowModeElement extends PolymerElement {
    static get is() {
        return 'app-management-window-mode-item';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            windowModeLabel: String,
            app: Object,
            hidden: {
                type: Boolean,
                computed: 'isHidden_(app)',
                reflectToAttribute: true,
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('click', this.onClick_);
        this.addEventListener('change', this.toggleWindowMode_);
    }
    getValue_() {
        return getWindowModeBoolean(this.app.windowMode);
    }
    onClick_() {
        this.shadowRoot
            .querySelector('#toggle-row').click();
    }
    toggleWindowMode_() {
        const currentWindowMode = this.app.windowMode;
        if (currentWindowMode === WindowMode.kUnknown) {
            assertNotReached();
        }
        const newWindowMode = (currentWindowMode === WindowMode.kBrowser) ?
            WindowMode.kWindow :
            WindowMode.kBrowser;
        BrowserProxy.getInstance().handler.setWindowMode(this.app.id, newWindowMode);
        const booleanWindowMode = getWindowModeBoolean(newWindowMode);
        const windowModeChangeAction = booleanWindowMode ?
            AppManagementUserAction.WINDOW_MODE_CHANGED_TO_WINDOW :
            AppManagementUserAction.WINDOW_MODE_CHANGED_TO_BROWSER;
        recordAppManagementUserAction(this.app.type, windowModeChangeAction);
    }
    isHidden_() {
        return this.app.hideWindowMode;
    }
}
customElements.define(AppManagementWindowModeElement.is, AppManagementWindowModeElement);
