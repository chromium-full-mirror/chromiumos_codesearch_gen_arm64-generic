// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './app_details_item.js';
import './pin_to_shelf_item.js';
import './read_only_permission_item.js';
import './resize_lock_item.js';
import './app_management_cros_shared_style.css.js';
import 'chrome://resources/cr_components/app_management/icons.html.js';
import 'chrome://resources/cr_components/app_management/more_permissions_item.js';
import 'chrome://resources/cr_components/app_management/permission_item.js';
import 'chrome://resources/cr_components/app_management/supported_links_item.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { getPermission, getSelectedApp } from 'chrome://resources/cr_components/app_management/util.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { AppManagementStoreMixin } from '../../common/app_management/store_mixin.js';
import { isRevampWayfindingEnabled } from '../../common/load_time_booleans.js';
import { getTemplate } from './arc_detail_view.html.js';
const AppManagementArcDetailViewElementBase = AppManagementStoreMixin(I18nMixin(PolymerElement));
export class AppManagementArcDetailViewElement extends AppManagementArcDetailViewElementBase {
    static get is() {
        return 'app-management-arc-detail-view';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            prefs: {
                type: Object,
                notify: true,
            },
            app_: Object,
            apps_: Object,
            /**
             * Static definition for the list of permissions to display for the app.
             */
            permissionDefinitions_: {
                type: Array,
                value: () => {
                    return [
                        {
                            type: 'kLocation',
                            icon: 'app-management:location',
                            labelId: 'appManagementLocationPermissionLabel',
                        },
                        {
                            type: 'kCamera',
                            icon: 'app-management:camera',
                            labelId: 'appManagementCameraPermissionLabel',
                        },
                        {
                            type: 'kMicrophone',
                            icon: 'app-management:microphone',
                            labelId: 'appManagementMicrophonePermissionLabel',
                        },
                        {
                            type: 'kContacts',
                            icon: 'app-management:contacts',
                            labelId: 'appManagementContactsPermissionLabel',
                        },
                        {
                            type: 'kStorage',
                            icon: 'app-management:storage',
                            labelId: 'appManagementStoragePermissionLabel',
                        },
                    ];
                },
            },
            hasReadOnlyPermissions_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('appManagementArcReadOnlyPermissions'),
                readOnly: true,
            },
            isRevampWayfindingEnabled_: {
                type: Boolean,
                value() {
                    return isRevampWayfindingEnabled();
                },
                readOnly: true,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.watch('app_', state => getSelectedApp(state));
        this.watch('apps_', state => state.apps);
        this.updateFromStore();
    }
    /**
     * Returns true if the app has not requested any permissions.
     */
    noPermissionsRequested_(app, permissionDefinitions) {
        if (app === undefined) {
            return true;
        }
        for (const permissionDef of permissionDefinitions) {
            const permission = getPermission(app, permissionDef.type);
            if (permission !== undefined) {
                return false;
            }
        }
        return true;
    }
    getAppManagementMorePermissionsLabel_() {
        return this.isRevampWayfindingEnabled_ ?
            this.i18n('appManagementMorePermissionsLabelAndroidApp') :
            this.i18n('appManagementMorePermissionsLabel');
    }
}
customElements.define(AppManagementArcDetailViewElement.is, AppManagementArcDetailViewElement);
