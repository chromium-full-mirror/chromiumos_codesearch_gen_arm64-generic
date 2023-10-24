// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_components/localized_link/localized_link.js';
import '//resources/cr_elements/cr_link_row/cr_link_row.js';
import '//resources/cr_elements/cr_radio_button/cr_radio_button.js';
import '//resources/cr_elements/cr_radio_group/cr_radio_group.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import '//resources/cr_elements/policy/cr_policy_indicator.js';
import '//resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import '../settings_shared.css.js';
import { WebUiListenerMixin } from '//resources/cr_elements/web_ui_listener_mixin.js';
import { assert } from '//resources/js/assert.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { StatusAction, SyncBrowserProxyImpl, syncPrefsIndividualDataTypes } from '/shared/settings/people_page/sync_browser_proxy.js';
// 
import { loadTimeData } from '../i18n_setup.js';
import { Router } from '../router.js';
import { getTemplate } from './sync_controls.html.js';
/**
 * Names of the radio buttons which allow the user to choose their data sync
 * mechanism.
 */
var RadioButtonNames;
(function (RadioButtonNames) {
    RadioButtonNames["SYNC_EVERYTHING"] = "sync-everything";
    RadioButtonNames["CUSTOMIZE_SYNC"] = "customize-sync";
})(RadioButtonNames || (RadioButtonNames = {}));
const SYNC_DECOUPLE_ADDRESS_PAYMENT_SETTINGS_FEATURE = 'syncDecoupleAddressPaymentSettings';
/**
 * @fileoverview
 * 'settings-sync-controls' contains all sync data type controls.
 */
const SettingsSyncControlsElementBase = WebUiListenerMixin(PolymerElement);
export class SettingsSyncControlsElement extends SettingsSyncControlsElementBase {
    static get is() {
        return 'settings-sync-controls';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            hidden: {
                type: Boolean,
                value: false,
                computed: 'syncControlsHidden_(' +
                    'syncStatus.signedIn, syncStatus.disabled, syncStatus.hasError)',
                reflectToAttribute: true,
            },
            /**
             * The current sync preferences, supplied by SyncBrowserProxy.
             */
            syncPrefs: Object,
            /**
             * The current sync status, supplied by the parent.
             */
            syncStatus: {
                type: Object,
                observer: 'syncStatusChanged_',
            },
            // 
        };
    }
    constructor() {
        super();
        this.browserProxy_ = SyncBrowserProxyImpl.getInstance();
        /**
         * Caches the individually selected synced data types. This is used to
         * be able to restore the selections after checking and unchecking Sync All.
         */
        this.cachedSyncPrefs_ = null;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('sync-prefs-changed', this.handleSyncPrefsChanged_.bind(this));
        const router = Router.getInstance();
        if (router.getCurrentRoute() ===
            router.getRoutes().SYNC_ADVANCED) {
            this.browserProxy_.didNavigateToSyncPage();
        }
    }
    // 
    /**
     * Handler for when the sync preferences are updated.
     */
    handleSyncPrefsChanged_(syncPrefs) {
        this.syncPrefs = syncPrefs;
        // If autofill is not registered or synced, force Payments integration off.
        // TODO(crbug.com/1435431): Remove this coupling.
        if (!loadTimeData.getBoolean(SYNC_DECOUPLE_ADDRESS_PAYMENT_SETTINGS_FEATURE) &&
            (!this.syncPrefs.autofillRegistered ||
                !this.syncPrefs.autofillSynced)) {
            this.set('syncPrefs.paymentsSynced', false);
        }
    }
    /**
     * @return Computed binding returning the selected sync data radio button.
     */
    selectedSyncDataRadio_() {
        return this.syncPrefs.syncAllDataTypes ? RadioButtonNames.SYNC_EVERYTHING :
            RadioButtonNames.CUSTOMIZE_SYNC;
    }
    /**
     * Called when the sync data radio button selection changes.
     */
    onSyncDataRadioSelectionChanged_(event) {
        const syncAllDataTypes = event.detail.value === RadioButtonNames.SYNC_EVERYTHING;
        this.set('syncPrefs.syncAllDataTypes', syncAllDataTypes);
        this.handleSyncAllDataTypesChanged_(syncAllDataTypes);
    }
    // 
    handleSyncAllDataTypesChanged_(syncAllDataTypes) {
        if (syncAllDataTypes) {
            this.set('syncPrefs.syncAllDataTypes', true);
            // Cache the previously selected preference before checking every box.
            this.cachedSyncPrefs_ = {};
            for (const dataType of syncPrefsIndividualDataTypes) {
                // These are all booleans, so this shallow copy is sufficient.
                this.cachedSyncPrefs_[dataType] =
                    this.syncPrefs[dataType];
                this.set(['syncPrefs', dataType], true);
            }
        }
        else if (this.cachedSyncPrefs_) {
            // Restore the previously selected preference.
            for (const dataType of syncPrefsIndividualDataTypes) {
                this.set(['syncPrefs', dataType], this.cachedSyncPrefs_[dataType]);
            }
        }
        chrome.metricsPrivate.recordUserAction(syncAllDataTypes ? 'Sync_SyncEverything' : 'Sync_CustomizeSync');
        this.onSingleSyncDataTypeChanged_();
    }
    /**
     * Handler for when any sync data type checkbox is changed (except autofill).
     */
    onSingleSyncDataTypeChanged_() {
        assert(this.syncPrefs);
        this.browserProxy_.setSyncDatatypes(this.syncPrefs);
    }
    /**
     * Handler for when the autofill data type checkbox is changed.
     */
    onAutofillDataTypeChanged_() {
        if (!loadTimeData.getBoolean(SYNC_DECOUPLE_ADDRESS_PAYMENT_SETTINGS_FEATURE)) {
            // TODO(crbug.com/1435431): Remove this coupling.
            this.set('syncPrefs.paymentsSynced', this.syncPrefs.autofillSynced);
        }
        this.onSingleSyncDataTypeChanged_();
    }
    // TODO(crbug.com/1435431): Remove this coupling.
    shouldPaymentsCheckboxBeHidden_(paymentsRegistered, autofillRegistered) {
        if (loadTimeData.getBoolean(SYNC_DECOUPLE_ADDRESS_PAYMENT_SETTINGS_FEATURE)) {
            return !paymentsRegistered;
        }
        else {
            return !paymentsRegistered || !autofillRegistered;
        }
    }
    // TODO(crbug.com/1435431): Remove this coupling.
    disablePaymentsCheckbox_(syncAllDataTypes, autofillSynced, autofillManaged, paymentsManaged) {
        if (loadTimeData.getBoolean(SYNC_DECOUPLE_ADDRESS_PAYMENT_SETTINGS_FEATURE)) {
            return this.disableTypeCheckBox_(syncAllDataTypes, paymentsManaged);
        }
        else {
            return this.disableTypeCheckBox_(syncAllDataTypes, paymentsManaged) ||
                !autofillSynced || autofillManaged;
        }
    }
    disableTypeCheckBox_(syncAllDataTypes, dataTypeManaged) {
        return syncAllDataTypes || dataTypeManaged;
    }
    syncStatusChanged_() {
        const router = Router.getInstance();
        const routes = router.getRoutes();
        if (router.getCurrentRoute() === routes.SYNC_ADVANCED &&
            this.syncControlsHidden_()) {
            router.navigateTo(routes.SYNC);
        }
    }
    /**
     * @return Whether the sync controls are hidden.
     */
    syncControlsHidden_() {
        if (!this.syncStatus) {
            // Show sync controls by default.
            return false;
        }
        if (!this.syncStatus.signedIn || this.syncStatus.disabled) {
            return true;
        }
        return !!this.syncStatus.hasError &&
            this.syncStatus.statusAction !== StatusAction.ENTER_PASSPHRASE &&
            this.syncStatus.statusAction !==
                StatusAction.RETRIEVE_TRUSTED_VAULT_KEYS;
    }
}
customElements.define(SettingsSyncControlsElement.is, SettingsSyncControlsElement);
