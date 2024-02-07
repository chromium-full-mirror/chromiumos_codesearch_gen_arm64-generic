// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_link_row/cr_link_row.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { assertExhaustive } from '../assert_extras.js';
import { OneDriveBrowserProxy } from './one_drive_browser_proxy.js';
import { getTemplate } from './one_drive_subpage.html.js';
const SettingsOneDriveSubpageElementBase = I18nMixin(PolymerElement);
export class SettingsOneDriveSubpageElement extends SettingsOneDriveSubpageElementBase {
    static get is() {
        return 'settings-one-drive-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
               @private Indicates whether the user is connected to OneDrive or not.
              */
            connectionState_: {
                type: String,
                value() {
                    return "loading" /* OneDriveConnectionState.LOADING */;
                },
            },
        };
    }
    constructor() {
        super();
        this.oneDriveProxy_ = OneDriveBrowserProxy.getInstance();
        this.initPromise = this.updateUserEmailAddress_();
    }
    connectedCallback() {
        super.connectedCallback();
        this.oneDriveProxy_.observer.onODFSMountOrUnmount.addListener(this.updateUserEmailAddress_.bind(this));
    }
    updateConnectionStateForTesting(connectionState) {
        this.connectionState_ = connectionState;
    }
    async updateUserEmailAddress_() {
        this.connectionState_ = "loading" /* OneDriveConnectionState.LOADING */;
        const { email } = await this.oneDriveProxy_.handler.getUserEmailAddress();
        this.userEmailAddress_ = email;
        this.connectionState_ = email === null ?
            "disconnected" /* OneDriveConnectionState.DISCONNECTED */ :
            "connected" /* OneDriveConnectionState.CONNECTED */;
    }
    isConnected_() {
        return this.connectionState_ === "connected" /* OneDriveConnectionState.CONNECTED */;
    }
    isLoading_() {
        return this.connectionState_ === "loading" /* OneDriveConnectionState.LOADING */;
    }
    signedInAsLabel_() {
        switch (this.connectionState_) {
            case "connected" /* OneDriveConnectionState.CONNECTED */:
                assert(this.userEmailAddress_);
                return this.i18nAdvanced('oneDriveSignedInAs', { tags: ['strong'], substitutions: [this.userEmailAddress_] });
            case "disconnected" /* OneDriveConnectionState.DISCONNECTED */:
                return this.i18nAdvanced('oneDriveDisconnected');
            case "loading" /* OneDriveConnectionState.LOADING */:
                return this.i18nAdvanced('oneDriveLoading');
            default:
                assertExhaustive(this.connectionState_);
        }
    }
    connectDisconnectButtonLabel_() {
        return this.i18n(this.connectionState_ === "connected" /* OneDriveConnectionState.CONNECTED */ ?
            'oneDriveDisconnect' :
            'oneDriveConnect');
    }
    async onConnectDisconnectButtonClick_() {
        switch (this.connectionState_) {
            case "connected" /* OneDriveConnectionState.CONNECTED */: {
                const { success } = await this.oneDriveProxy_.handler.disconnectFromOneDrive();
                if (!success) {
                    console.error('Disconnecting from OneDrive failed');
                }
                break;
            }
            case "disconnected" /* OneDriveConnectionState.DISCONNECTED */: {
                const { success } = await this.oneDriveProxy_.handler.connectToOneDrive();
                if (!success) {
                    console.error('Connecting to OneDrive failed');
                }
                break;
            }
            case "loading" /* OneDriveConnectionState.LOADING */:
                console.warn('Connect button clicked when connection state is loading');
                break;
            default:
                assertExhaustive(this.connectionState_);
        }
        // The UI is updated by listening to `onODFSMountOrUnmount`.
    }
    async onOpenOneDriveFolderClick_() {
        const { success } = await this.oneDriveProxy_.handler.openOneDriveFolder();
        if (!success) {
            console.error('Opening OneDrive folder failed');
        }
    }
}
customElements.define(SettingsOneDriveSubpageElement.is, SettingsOneDriveSubpageElement);
