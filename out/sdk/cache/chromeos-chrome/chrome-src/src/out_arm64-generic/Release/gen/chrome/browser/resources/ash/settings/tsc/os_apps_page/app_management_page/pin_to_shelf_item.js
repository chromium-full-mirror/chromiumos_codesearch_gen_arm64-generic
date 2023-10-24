// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_components/app_management/toggle_row.js';
import { AppManagementUserAction, OptionalBool } from 'chrome://resources/cr_components/app_management/constants.js';
import { convertOptionalBoolToBool, recordAppManagementUserAction, toggleOptionalBool } from 'chrome://resources/cr_components/app_management/util.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../../assert_extras.js';
import { recordSettingChange } from '../../metrics_recorder.js';
import { AppManagementBrowserProxy } from './browser_proxy.js';
import { getTemplate } from './pin_to_shelf_item.html.js';
export class AppManagementPinToShelfItemElement extends PolymerElement {
    static get is() {
        return 'app-management-pin-to-shelf-item';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            app: Object,
            hidden: {
                type: Boolean,
                computed: 'isAvailable_(app)',
                reflectToAttribute: true,
            },
            disabled: {
                type: Boolean,
                computed: 'isManaged_(app)',
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
        return app.isPinned === OptionalBool.kTrue;
    }
    isAvailable_(app) {
        return app.hidePinToShelf;
    }
    isManaged_(app) {
        return app.isPolicyPinned === OptionalBool.kTrue;
    }
    toggleSetting_() {
        const newState = castExists(toggleOptionalBool(this.app.isPinned));
        const newStateBool = convertOptionalBoolToBool(newState);
        assert(newStateBool === this.getToggleRow_().isChecked());
        AppManagementBrowserProxy.getInstance().handler.setPinned(this.app.id, newState);
        recordSettingChange();
        const userAction = newStateBool ?
            AppManagementUserAction.PIN_TO_SHELF_TURNED_ON :
            AppManagementUserAction.PIN_TO_SHELF_TURNED_OFF;
        recordAppManagementUserAction(this.app.type, userAction);
    }
    onClick_() {
        this.getToggleRow_().click();
    }
    getToggleRow_() {
        return castExists(this.shadowRoot.querySelector('#toggleRow'));
    }
}
customElements.define(AppManagementPinToShelfItemElement.is, AppManagementPinToShelfItemElement);
