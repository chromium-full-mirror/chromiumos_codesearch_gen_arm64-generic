// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'crostini-extra-containers' is the settings extras containers subpage for
 * Crostini.
 */
import 'chrome://resources/ash/common/cr_elements/icons.html.js';
import 'chrome://resources/ash/common/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/ash/common/cr_elements/cr_lazy_render/cr_lazy_render.js';
import 'chrome://resources/ash/common/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import './crostini_extra_containers_create_dialog.js';
import '../settings_shared.css.js';
import { WebUiListenerMixin } from 'chrome://resources/ash/common/cr_elements/web_ui_listener_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { hexColorToSkColor } from 'chrome://resources/js/color_utils.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { VM_DEVICE_MICROPHONE } from '../guest_os/guest_os_browser_proxy.js';
import { equalContainerId } from '../guest_os/guest_os_container_select.js';
import { CrostiniBrowserProxyImpl, DEFAULT_CROSTINI_CONTAINER, DEFAULT_CROSTINI_VM } from './crostini_browser_proxy.js';
import { getTemplate } from './crostini_extra_containers.html.js';
const ExtraContainersElementBase = WebUiListenerMixin(PolymerElement);
export class ExtraContainersElement extends ExtraContainersElementBase {
    static get is() {
        return 'settings-crostini-extra-containers';
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
            showCreateContainerDialog_: {
                type: Boolean,
                value: false,
            },
            allContainers_: {
                type: Array,
                notify: true,
                value() {
                    return [];
                },
            },
            allSharedVmDevices_: {
                type: Array,
                value() {
                    return [];
                },
            },
            allVms_: {
                type: Array,
                value() {
                    return [];
                },
            },
            lastMenuContainerInfo_: {
                type: Object,
            },
            /**
             * Whether the export import buttons should be enabled. Initially false
             * until status has been confirmed.
             */
            enableButtons_: {
                type: Boolean,
                computed: 'isEnabledButtons_(installerShowing_, exportImportInProgress_)',
            },
            installerShowing_: {
                type: Boolean,
                value: false,
            },
            // TODO(b/231890242): Disable delete and stop buttons when a container is
            // being exported or imported.
            exportImportInProgress_: {
                type: Boolean,
                value: false,
            },
        };
    }
    constructor() {
        super();
        /**
         * Tracks the last container that was selected for delete.
         */
        this.lastMenuContainerInfo_ = null;
        this.browserProxy_ = CrostiniBrowserProxyImpl.getInstance();
    }
    ready() {
        super.ready();
        this.addWebUiListener('crostini-container-info', (infos) => this.onContainerInfo_(infos));
        this.addWebUiListener('crostini-shared-vmdevices', (sharedVmDevices) => this.onSharedVmDevices_(sharedVmDevices));
        this.browserProxy_.requestContainerInfo();
        this.browserProxy_.requestSharedVmDevices();
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('crostini-export-import-operation-status-changed', (inProgress) => {
            this.exportImportInProgress_ = inProgress;
        });
        this.addWebUiListener('crostini-installer-status-changed', (installerShowing) => {
            this.installerShowing_ = installerShowing;
        });
        this.browserProxy_.requestCrostiniExportImportOperationStatus();
        this.browserProxy_.requestCrostiniInstallerStatus();
    }
    setMicrophoneToggle_(id, checked) {
        const crToggle = this.shadowRoot.querySelector(`#microphone-${id.vm_name}-${id.container_name}`);
        if (!crToggle) {
            // The toggles may not yet have been added to the DOM.
            return;
        }
        if (crToggle.checked !== checked) {
            crToggle.set('checked', checked);
        }
    }
    onSharedVmDevices_(sharedVmDevices) {
        this.set('allSharedVmDevices_', sharedVmDevices);
        for (const sharing of sharedVmDevices) {
            this.setMicrophoneToggle_(sharing.id, sharing.vmDevices[VM_DEVICE_MICROPHONE]);
        }
    }
    async updateSharedVmDevices_(id) {
        let idx = this.allSharedVmDevices_.findIndex(sharing => equalContainerId(sharing.id, id));
        if (idx < 0) {
            idx = this.allSharedVmDevices_.push({ id: id, vmDevices: { [VM_DEVICE_MICROPHONE]: false } }) -
                1;
        }
        const result = await this.browserProxy_.isVmDeviceShared(id, VM_DEVICE_MICROPHONE);
        this.allSharedVmDevices_[idx].vmDevices[VM_DEVICE_MICROPHONE] = result;
        this.setMicrophoneToggle_(id, result);
    }
    onContainerInfo_(containerInfos) {
        const vmNames = new Set();
        const crostiniContainerInfos = containerInfos;
        for (const info of crostiniContainerInfos) {
            vmNames.add(info.id.vm_name);
            const oldContainerInfo = this.allContainers_.find(container => equalContainerId(container.id, info.id));
            info.detailsExpanded = (oldContainerInfo !== undefined) ?
                oldContainerInfo.detailsExpanded :
                false;
        }
        this.set('allVms_', Array.from(vmNames.values()));
        this.set('allContainers_', crostiniContainerInfos);
    }
    onCreateClick_() {
        this.showCreateContainerDialog_ = true;
    }
    onCreateContainerDialogClose_() {
        this.showCreateContainerDialog_ = false;
    }
    onContainerMenuClick_(event) {
        const target = event.currentTarget;
        const containerId = target['dataContainerId'];
        this.lastMenuContainerInfo_ =
            this.allContainers_.find(e => e.id.vm_name === containerId.vm_name &&
                e.id.container_name === containerId.container_name) ||
                null;
        this.getContainerMenu_().showAt(target);
    }
    onDeleteContainerClick_() {
        if (this.lastMenuContainerInfo_) {
            this.browserProxy_.deleteContainer(this.lastMenuContainerInfo_.id);
        }
        this.closeContainerMenu_();
    }
    onStopContainerClick_() {
        if (this.lastMenuContainerInfo_) {
            this.browserProxy_.stopContainer(this.lastMenuContainerInfo_.id);
        }
        this.closeContainerMenu_();
    }
    onExportContainerClick_() {
        if (this.lastMenuContainerInfo_) {
            this.browserProxy_.exportCrostiniContainer(this.lastMenuContainerInfo_.id);
        }
        this.closeContainerMenu_();
    }
    onImportContainerClick_() {
        if (this.lastMenuContainerInfo_) {
            this.browserProxy_.importCrostiniContainer(this.lastMenuContainerInfo_.id);
        }
        this.closeContainerMenu_();
    }
    onContainerColorChange_(event) {
        const target = event.currentTarget;
        const containerId = target['dataContainerId'];
        const hexColor = target.value;
        this.browserProxy_.setContainerBadgeColor(containerId, hexColorToSkColor(hexColor));
    }
    shouldDisableDeleteContainer_(info) {
        return info && info.id.vm_name === DEFAULT_CROSTINI_VM &&
            info.id.container_name === DEFAULT_CROSTINI_CONTAINER;
    }
    shouldDisableStopContainer_(info) {
        return !info || !info.ipv4;
    }
    getContainerMenu_() {
        return this.$.containerMenu.get();
    }
    closeContainerMenu_() {
        const menu = this.getContainerMenu_();
        assert(menu.open && this.lastMenuContainerInfo_);
        menu.close();
        this.lastMenuContainerInfo_ = null;
    }
    isEnabledButtons_(installerShowing, exportImportInProgress) {
        return !(installerShowing || exportImportInProgress);
    }
    byNameWithDefault_(name1, name2, defaultName) {
        if (name1 === name2) {
            return 0;
        }
        // defaultName sorts first.
        if (name1 === defaultName) {
            return -1;
        }
        if (name2 === defaultName) {
            return 1;
        }
        return name1 < name2 ? -1 : 1;
    }
    byVmName_(name1, name2) {
        return this.byNameWithDefault_(name1, name2, DEFAULT_CROSTINI_VM);
    }
    byGuestId_(id1, id2) {
        const result = this.byVmName_(id1.vm_name, id2.vm_name);
        if (result !== 0) {
            return result;
        }
        return this.byNameWithDefault_(id1.container_name, id2.container_name, DEFAULT_CROSTINI_CONTAINER);
    }
    infoHasVmName_(vmName) {
        return info => vmName === info.id.vm_name;
    }
    isMicrophoneShared_(id) {
        const deviceSharing = this.allSharedVmDevices_.find((sharing) => equalContainerId(sharing.id, id));
        if (!deviceSharing) {
            return false;
        }
        return deviceSharing.vmDevices[VM_DEVICE_MICROPHONE];
    }
    async onMicrophoneSharingChanged_(event) {
        const target = event.currentTarget;
        const id = target['dataContainerId'];
        const shared = target.checked;
        await this.browserProxy_.setVmDeviceShared(id, VM_DEVICE_MICROPHONE, shared);
        await this.updateSharedVmDevices_(id);
    }
    showIp_(info) {
        return !!info.ipv4 && info.ipv4.length > 0;
    }
}
customElements.define(ExtraContainersElement.is, ExtraContainersElement);
