// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'guest-os-shared-usb-devices' is the settings shared usb devices subpage for
 * guest OSes.
 */
import 'chrome://resources/ash/common/cr_elements/cr_toggle/cr_toggle.js';
import './guest_os_shared_usb_devices_add_dialog.js';
import { CrToggleElement } from 'chrome://resources/ash/common/cr_elements/cr_toggle/cr_toggle.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/ash/common/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { assertExists, cast } from '../assert_extras.js';
import { recordSettingChange } from '../metrics_recorder.js';
import { getVMNameForGuestOsType, GuestOsBrowserProxyImpl } from './guest_os_browser_proxy.js';
import { containerLabel, equalContainerId } from './guest_os_container_select.js';
import { getTemplate } from './guest_os_shared_usb_devices.html.js';
const SettingsGuestOsSharedUsbDevicesElementBase = I18nMixin(WebUiListenerMixin(PolymerElement));
export class SettingsGuestOsSharedUsbDevicesElement extends SettingsGuestOsSharedUsbDevicesElementBase {
    static get is() {
        return 'settings-guest-os-shared-usb-devices';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The type of Guest OS to share with. Should be 'crostini' or 'pluginVm'.
             */
            guestOsType: {
                type: String,
                value: '',
            },
            /**
             * The USB Devices available for connection to a VM.
             */
            sharedUsbDevices_: {
                type: Array,
                value() {
                    return [];
                },
            },
            defaultGuestId: {
                type: Object,
                value() {
                    return {
                        vm_name: '',
                        container_name: '',
                    };
                },
            },
            /**
             * The USB device which was toggled to be shared, but is already shared
             * with another VM. When non-null the reassign dialog is shown.
             */
            reassignDevice_: {
                type: Object,
                value: null,
            },
            /**
             * Whether the guest OS hosts multiple containers.
             */
            hasContainers: {
                type: Boolean,
                value() {
                    return false;
                },
            },
            showAddUsbDialog_: {
                type: Boolean,
                value: false,
            },
            /**
             * The known ContainerIds for display in the UI.
             */
            allContainers_: {
                type: Array,
                notify: true,
                value() {
                    return [];
                },
            },
        };
    }
    constructor() {
        super();
        this.browserProxy_ = GuestOsBrowserProxyImpl.getInstance();
    }
    ready() {
        super.ready();
        this.addWebUiListener('guest-os-shared-usb-devices-changed', this.onGuestOsSharedUsbDevicesChanged_.bind(this));
        this.browserProxy_.notifyGuestOsSharedUsbDevicesPageReady();
    }
    onContainerInfo_(containerInfos) {
        this.set('allContainers_', containerInfos);
    }
    showGuestId_(sharedUsbDevices, id) {
        return sharedUsbDevices.some(this.byGuestId_(id));
    }
    hasSharedDevices_(sharedUsbDevices, containerInfos) {
        return sharedUsbDevices.some(dev => containerInfos.some(info => dev.device.guestId &&
            equalContainerId(dev.device.guestId, info.id)));
    }
    onGuestOsSharedUsbDevicesChanged_(devices) {
        this.sharedUsbDevices_ = devices.map((device) => {
            return {
                shared: !!device.guestId && device.guestId.vm_name === this.vmName_(),
                device: device,
            };
        });
    }
    onDeviceSharedChange_(event) {
        const device = event.model.item.device;
        // Show reassign dialog if device is already shared with another VM.
        const target = cast(event.target, CrToggleElement);
        if (target.checked && device.promptBeforeSharing) {
            target.checked = false;
            this.reassignDevice_ = device;
            return;
        }
        this.browserProxy_.setGuestOsUsbDeviceShared(this.vmName_(), this.defaultGuestId.container_name, device.guid, target.checked);
        recordSettingChange();
    }
    onReassignCancel_() {
        this.reassignDevice_ = null;
    }
    onReassignContinueClick_() {
        assertExists(this.reassignDevice_);
        this.browserProxy_.setGuestOsUsbDeviceShared(this.vmName_(), this.defaultGuestId.container_name, this.reassignDevice_.guid, true);
        this.reassignDevice_ = null;
        recordSettingChange();
    }
    vmName_() {
        return getVMNameForGuestOsType(this.guestOsType);
    }
    getDescriptionText_() {
        return this.i18n(this.guestOsType + 'SharedUsbDevicesDescription');
    }
    getReassignDialogText_(device) {
        return this.i18n('guestOsSharedUsbDevicesReassign', device.label);
    }
    byGuestId_(id) {
        return (dev) => (!!dev.device.guestId &&
            equalContainerId(dev.device.guestId, id));
    }
    onAddUsbClick_() {
        this.showAddUsbDialog_ = true;
    }
    onAddUsbDialogClose_() {
        this.showAddUsbDialog_ = false;
    }
    guestLabel_(id) {
        return containerLabel(id, this.vmName_());
    }
    onRemoveUsbClick_(event) {
        const device = event.model.item.device;
        if (device.guestId) {
            this.browserProxy_.setGuestOsUsbDeviceShared(device.guestId.vm_name, '', device.guid, false);
        }
    }
}
customElements.define(SettingsGuestOsSharedUsbDevicesElement.is, SettingsGuestOsSharedUsbDevicesElement);
