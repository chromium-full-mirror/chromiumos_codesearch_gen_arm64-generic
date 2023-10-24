// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordManagerImpl } from './password_manager_proxy.js';
import { SyncBrowserProxyImpl } from './sync_browser_proxy.js';
/**
 * This mixin bundles functionality related to syncing, sign in status and
 * account storage.
 */
export const UserUtilMixin = dedupingMixin((superClass) => {
    class UserUtilMixin extends WebUiListenerMixin(superClass) {
        constructor() {
            super(...arguments);
            this.setIsOptedInForAccountStorageListener_ = null;
        }
        static get properties() {
            return {
                /**
                 * Indicates whether user opted in using passwords stored on
                 * their account.
                 */
                isOptedInForAccountStorage: {
                    type: Boolean,
                    value: false,
                },
                /* Account storage eligibility. */
                isEligibleForAccountStorage: {
                    type: Boolean,
                    value: false,
                    computed: 'computeIsEligibleForAccountStorage_(syncInfo_)',
                },
                /**
                 * If true, the edit dialog and removal notification show
                 * information about which location(s) a password is stored.
                 */
                isAccountStoreUser: {
                    type: Boolean,
                    computed: 'computeIsAccountStoreUser_(' +
                        'isOptedInForAccountStorage, isEligibleForAccountStorage)',
                },
                isSyncingPasswords: {
                    type: Boolean,
                    value: true,
                    computed: 'computeIsSyncingPasswords_(syncInfo_)',
                },
                /* Email of the primary account. */
                accountEmail: {
                    type: String,
                    value: '',
                    computed: 'computeAccountEmail_(accountInfo_)',
                },
                /* Email of the primary account. */
                avatarImage: {
                    type: String,
                    value: '',
                    computed: 'computeAvatarImage_(accountInfo_)',
                },
            };
        }
        connectedCallback() {
            super.connectedCallback();
            // Create listener functions.
            this.setIsOptedInForAccountStorageListener_ = (optedIn) => this.isOptedInForAccountStorage = optedIn;
            const syncInfoChanged = (syncInfo) => this.syncInfo_ =
                syncInfo;
            const accountInfoChanged = (accountInfo) => this.accountInfo_ = accountInfo;
            // Request initial data.
            PasswordManagerImpl.getInstance().isOptedInForAccountStorage().then(this.setIsOptedInForAccountStorageListener_);
            SyncBrowserProxyImpl.getInstance().getSyncInfo().then(syncInfoChanged);
            SyncBrowserProxyImpl.getInstance().getAccountInfo().then(accountInfoChanged);
            // Listen for changes.
            PasswordManagerImpl.getInstance().addAccountStorageOptInStateListener(this.setIsOptedInForAccountStorageListener_);
            this.addWebUiListener('sync-info-changed', syncInfoChanged);
            this.addWebUiListener('stored-accounts-changed', accountInfoChanged);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            assert(this.setIsOptedInForAccountStorageListener_);
            PasswordManagerImpl.getInstance()
                .removeAccountStorageOptInStateListener(this.setIsOptedInForAccountStorageListener_);
            this.setIsOptedInForAccountStorageListener_ = null;
        }
        optInForAccountStorage() {
            PasswordManagerImpl.getInstance().optInForAccountStorage(true);
        }
        optOutFromAccountStorage() {
            PasswordManagerImpl.getInstance().optInForAccountStorage(false);
        }
        computeIsEligibleForAccountStorage_() {
            return !!this.syncInfo_ && this.syncInfo_.isEligibleForAccountStorage;
        }
        computeIsSyncingPasswords_() {
            return !!this.syncInfo_ && this.syncInfo_.isSyncingPasswords;
        }
        computeAccountEmail_() {
            return (this.accountInfo_ ? this.accountInfo_.email : '');
        }
        computeAvatarImage_() {
            return this.accountInfo_.avatarImage || '';
        }
        computeIsAccountStoreUser_() {
            return this.isEligibleForAccountStorage &&
                this.isOptedInForAccountStorage;
        }
    }
    return UserUtilMixin;
});
