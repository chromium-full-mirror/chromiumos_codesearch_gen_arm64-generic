// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-crostini-shared-usb-devices' is a variant of the
 * shared usb devices subpage for Crostini.
 */
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { SettingsGuestOsSharedUsbDevicesElement } from '../guest_os/guest_os_shared_usb_devices.js';
import { CrostiniBrowserProxyImpl, DEFAULT_CROSTINI_GUEST_ID } from './crostini_browser_proxy.js';
export class CrostiniSharedUsbDevicesElement extends SettingsGuestOsSharedUsbDevicesElement {
    static get is() {
        return 'settings-crostini-shared-usb-devices';
    }
    static get properties() {
        return {
            ...SettingsGuestOsSharedUsbDevicesElement.properties,
            guestOsType: {
                type: String,
                value: 'crostini',
            },
            defaultGuestId: {
                type: Object,
                value() {
                    return DEFAULT_CROSTINI_GUEST_ID;
                },
            },
            /**
             * Whether the guest OS hosts multiple containers.
             */
            hasContainers: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('showCrostiniExtraContainers');
                },
            },
        };
    }
    ready() {
        super.ready();
        this.addWebUiListener('crostini-container-info', (infos) => this.onContainerInfo_(infos));
        CrostiniBrowserProxyImpl.getInstance().requestContainerInfo();
    }
}
customElements.define(CrostiniSharedUsbDevicesElement.is, CrostiniSharedUsbDevicesElement);
