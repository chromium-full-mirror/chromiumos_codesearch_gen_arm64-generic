// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_components/app_management/toggle_row.js';
import { AppManagementUserAction } from 'chrome://resources/cr_components/app_management/constants.js';
import { recordAppManagementUserAction } from 'chrome://resources/cr_components/app_management/util.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../../assert_extras.js';
import { recordSettingChange } from '../../metrics_recorder.js';
import { AppManagementBrowserProxy } from './browser_proxy.js';
import { getTemplate } from './resize_lock_item.html.js';
export class AppManagementResizeLockItemElement extends PolymerElement {
    static get is() {
        return 'app-management-resize-lock-item';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
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
        this.addEventListener('change', this.toggleSetting_);
    }
    getValue_(app) {
        return app.resizeLocked;
    }
    isHidden_(app) {
        return app.hideResizeLocked;
    }
    toggleSetting_() {
        const newState = !this.app.resizeLocked;
        assert(newState === this.getToggleRow_().isChecked());
        AppManagementBrowserProxy.getInstance().handler.setResizeLocked(this.app.id, newState);
        recordSettingChange();
        const userAction = newState ?
            AppManagementUserAction.RESIZE_LOCK_TURNED_ON :
            AppManagementUserAction.RESIZE_LOCK_TURNED_OFF;
        recordAppManagementUserAction(this.app.type, userAction);
    }
    onClick_() {
        this.getToggleRow_().click();
    }
    getToggleRow_() {
        return castExists(this.shadowRoot.querySelector('#toggleRow'));
    }
}
customElements.define(AppManagementResizeLockItemElement.is, AppManagementResizeLockItemElement);
