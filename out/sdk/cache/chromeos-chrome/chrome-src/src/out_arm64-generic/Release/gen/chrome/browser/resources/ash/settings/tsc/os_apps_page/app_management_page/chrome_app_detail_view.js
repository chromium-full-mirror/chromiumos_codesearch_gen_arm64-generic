// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './app_details_item.js';
import './more_permissions_item.js';
import './pin_to_shelf_item.js';
import './app_management_cros_shared_style.css.js';
import { getSelectedApp } from 'chrome://resources/cr_components/app_management/util.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { AppManagementBrowserProxy } from '../../common/app_management/browser_proxy.js';
import { AppManagementStoreMixin } from '../../common/app_management/store_mixin.js';
import { isRevampWayfindingEnabled } from '../../common/load_time_booleans.js';
import { getTemplate } from './chrome_app_detail_view.html.js';
const AppManagementChromeAppDetailViewElementBase = AppManagementStoreMixin(I18nMixin(PolymerElement));
export class AppManagementChromeAppDetailViewElement extends AppManagementChromeAppDetailViewElementBase {
    static get is() {
        return 'app-management-chrome-app-detail-view';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            app_: {
                type: Object,
                observer: 'onAppChanged_',
            },
            isRevampWayfindingEnabled_: {
                type: Boolean,
                value() {
                    return isRevampWayfindingEnabled();
                },
                readOnly: true,
            },
            messages_: Object,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.watch('app_', state => getSelectedApp(state));
        this.updateFromStore();
    }
    async onAppChanged_() {
        try {
            const { messages: messages } = await AppManagementBrowserProxy.getInstance()
                .handler.getExtensionAppPermissionMessages(this.app_.id);
            this.messages_ = messages;
        }
        catch (err) {
            console.warn(err);
        }
    }
    getPermissionMessages_(messages) {
        return messages.map(m => m.message);
    }
    getPermissionSubmessagesByMessage_(index, messages) {
        // Dom-repeat still tries to access messages[0] when app has no
        // permission therefore we add an extra check.
        if (!messages[index]) {
            return null;
        }
        return messages[index].submessages;
    }
    hasPermissions_(messages) {
        return messages.length > 0;
    }
    getAppManagementMorePermissionsLabel_() {
        return this.isRevampWayfindingEnabled_ ?
            this.i18n('appManagementMorePermissionsLabelChromeApp') :
            this.i18n('appManagementMorePermissionsLabel');
    }
}
customElements.define(AppManagementChromeAppDetailViewElement.is, AppManagementChromeAppDetailViewElement);
