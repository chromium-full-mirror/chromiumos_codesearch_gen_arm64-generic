// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Mixin to be used by Polymer elements that want to listen for
 * Passpoint subscription events.
 */
import { MojoConnectivityProvider } from 'chrome://resources/ash/common/connectivity/mojo_connectivity_provider.js';
import { PasspointEventsListenerReceiver } from 'chrome://resources/ash/common/connectivity/passpoint.mojom-webui.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export const PasspointListenerMixin = dedupingMixin((superClass) => {
    class PasspointListenerMixin extends superClass {
        static get properties() {
            return {
                isPasspointSettingsEnabled: {
                    type: Boolean,
                    readOnly: true,
                    value() {
                        return loadTimeData.valueExists('isPasspointSettingsEnabled') &&
                            loadTimeData.getBoolean('isPasspointSettingsEnabled');
                    },
                },
            };
        }
        constructor(...args) {
            super(...args);
            this.listener_ = null;
        }
        connectedCallback() {
            super.connectedCallback();
            if (this.isPasspointSettingsEnabled) {
                this.listener_ = new PasspointEventsListenerReceiver(this);
                MojoConnectivityProvider.getInstance()
                    .getPasspointService()
                    .registerPasspointListener(this.listener_.$.bindNewPipeAndPassRemote());
            }
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            if (this.listener_) {
                this.listener_.$.close();
            }
        }
        onPasspointSubscriptionAdded(_) { }
        onPasspointSubscriptionRemoved(_) { }
    }
    return PasspointListenerMixin;
});
