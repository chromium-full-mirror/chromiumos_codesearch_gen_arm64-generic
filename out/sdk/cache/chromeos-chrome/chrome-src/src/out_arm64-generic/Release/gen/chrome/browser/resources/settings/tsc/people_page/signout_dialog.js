// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-signout-dialog' is a dialog that allows the
 * user to turn off sync and sign out of Chromium.
 */
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import '//resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import '//resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import '../settings_shared.css.js';
import { WebUiListenerMixin } from '//resources/cr_elements/web_ui_listener_mixin.js';
import { sanitizeInnerHtml } from '//resources/js/parse_html_subset.js';
import { microTask, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { SyncBrowserProxyImpl } from '/shared/settings/people_page/sync_browser_proxy.js';
import { loadTimeData } from '../i18n_setup.js';
import { getTemplate } from './signout_dialog.html.js';
const SettingsSignoutDialogElementBase = WebUiListenerMixin(PolymerElement);
export class SettingsSignoutDialogElement extends SettingsSignoutDialogElementBase {
    static get is() {
        return 'settings-signout-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The current sync status, supplied by the parent.
             */
            syncStatus: {
                type: Object,
                observer: 'syncStatusChanged_',
            },
            /**
             * True if the checkbox to delete the profile has been checked.
             */
            deleteProfile_: Boolean,
            /**
             * True if the profile deletion warning is visible.
             */
            deleteProfileWarningVisible_: Boolean,
            /**
             * The profile deletion warning. The message indicates the number of
             * profile stats that will be deleted if a non-zero count for the profile
             * stats is returned from the browser.
             */
            deleteProfileWarning_: String,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('profile-stats-count-ready', this.handleProfileStatsCount_.bind(this));
        // 
        microTask.run(() => {
            this.$.dialog.showModal();
        });
    }
    /**
     * @return true when the user selected 'Confirm'.
     */
    wasConfirmed() {
        return this.$.dialog.getNative().returnValue === 'success';
    }
    /**
     * Handler for when the profile stats count is pushed from the browser.
     */
    handleProfileStatsCount_(count) {
        const username = this.syncStatus.signedInUsername || '';
        if (count === 0) {
            this.deleteProfileWarning_ = loadTimeData.getStringF('deleteProfileWarningWithoutCounts', username);
        }
        else if (count === 1) {
            this.deleteProfileWarning_ = loadTimeData.getStringF('deleteProfileWarningWithCountsSingular', username);
        }
        else {
            this.deleteProfileWarning_ = loadTimeData.getStringF('deleteProfileWarningWithCountsPlural', count, username);
        }
    }
    /**
     * Polymer observer for syncStatus.
     */
    syncStatusChanged_() {
        if (!this.syncStatus.signedIn && this.$.dialog.open) {
            this.$.dialog.close();
        }
    }
    // 
    // 
    getDisconnectExplanationHtml_(_domain) {
        return sanitizeInnerHtml(loadTimeData.getString('syncDisconnectExplanation'));
    }
    // 
    onDisconnectCancel_() {
        this.$.dialog.cancel();
    }
    onDisconnectConfirm_() {
        this.$.dialog.close();
        // 
        // 
        // Chrome OS users are always signed-in, so just turn off sync.
        SyncBrowserProxyImpl.getInstance().turnOffSync();
        // 
    }
    /**
     * @return true if the profile is a secondary profile on LaCros, has the
     *     option to turn off sync without deleting the profile.
     */
    isDeleteProfileFooterVisible_() {
        // 
        // If the "Clear and Continue" button is not shown, show the footer that
        // allows the user to delete the profile.
        return !this.isClearProfileConfirmButtonVisible_();
    }
    /**
     * @return true if the profile is managed and the feature to turn Sync off for
     *     managed profiles is not enabled. In that case the profile has to be
     *     cleared, otherwise the user may turn off sync.
     */
    isClearProfileConfirmButtonVisible_() {
        return !!this.syncStatus.domain &&
            !loadTimeData.getBoolean('turnOffSyncAllowedForManagedProfiles');
    }
}
customElements.define(SettingsSignoutDialogElement.is, SettingsSignoutDialogElement);
