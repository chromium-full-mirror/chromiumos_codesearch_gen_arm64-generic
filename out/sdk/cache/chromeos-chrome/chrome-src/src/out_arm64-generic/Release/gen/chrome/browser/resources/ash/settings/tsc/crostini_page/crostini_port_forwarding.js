// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'crostini-port-forwarding' is the settings port forwarding subpage for
 * Crostini.
 */
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../controls/settings_toggle_button.js';
import '../os_settings_page/settings_card.js';
import '../settings_shared.css.js';
import './crostini_port_forwarding_add_port_dialog.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { containerLabel, equalContainerId } from '../guest_os/guest_os_container_select.js';
import { recordSettingChange } from '../metrics_recorder.js';
import { CrostiniBrowserProxyImpl, DEFAULT_CROSTINI_CONTAINER, DEFAULT_CROSTINI_GUEST_ID, DEFAULT_CROSTINI_VM } from './crostini_browser_proxy.js';
import { getTemplate } from './crostini_port_forwarding.html.js';
const CrostiniPortForwardingBase = PrefsMixin(WebUiListenerMixin(PolymerElement));
export class CrostiniPortForwardingElement extends CrostiniPortForwardingBase {
    static get is() {
        return 'settings-crostini-port-forwarding';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            showAddPortDialog_: {
                type: Boolean,
                value: false,
            },
            /**
             * The forwarded ports for display in the UI.
             */
            allPorts_: {
                type: Array,
                notify: true,
                value() {
                    return [];
                },
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
            /**
             * Current active network interface to be displayed.
             */
            activeInterface_: {
                type: String,
                value: '',
            },
            /**
             * Current active network IP to be displayed.
             */
            activeIpAddress_: {
                type: String,
                value: '',
            },
        };
    }
    static get observers() {
        return [
            'onCrostiniPortsChanged_(prefs.crostini.port_forwarding.ports.value)',
        ];
    }
    constructor() {
        super();
        /**
         * List of ports are currently being forwarded.
         */
        this.activePorts_ = [];
        /**
         * Tracks the last port that was selected for removal.
         */
        this.lastMenuOpenedPort_ = null;
        this.browserProxy_ = CrostiniBrowserProxyImpl.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('crostini-port-forwarder-active-ports-changed', (ports) => this.onCrostiniPortsActiveStateChanged_(ports));
        this.addWebUiListener('crostini-container-info', (infos) => this.onContainerInfo_(infos));
        this.addWebUiListener('crostini-active-network-info', (iface, ipAddress) => this.onCrostiniActiveNetworkInfo_([iface, ipAddress]));
        this.browserProxy_.getCrostiniActivePorts().then((ports) => this.onCrostiniPortsActiveStateChanged_(ports));
        this.browserProxy_.getCrostiniActiveNetworkInfo().then((networkInfo) => this.onCrostiniActiveNetworkInfo_(networkInfo));
        this.browserProxy_.requestContainerInfo();
    }
    onCrostiniActiveNetworkInfo_(networkInfo) {
        this.set('activeInterface_', networkInfo[0]);
        this.set('activeIpAddress_', networkInfo[1]);
    }
    onContainerInfo_(containerInfos) {
        this.set('allContainers_', containerInfos);
    }
    onCrostiniPortsChanged_(ports) {
        this.splice('allPorts_', 0, this.allPorts_.length);
        for (const port of ports) {
            port.is_active = this.activePorts_.some(activePort => activePort.port_number === port.port_number &&
                activePort.protocol_type === port.protocol_type);
            port.container_id = port.container_id || {
                vm_name: port['vm_name'] || DEFAULT_CROSTINI_VM,
                container_name: port['container_name'] || DEFAULT_CROSTINI_CONTAINER,
            };
            this.push('allPorts_', port);
        }
        this.notifyPath('allContainers_');
    }
    onCrostiniPortsActiveStateChanged_(ports) {
        this.activePorts_ = ports;
        for (let i = 0; i < this.allPorts_.length; i++) {
            this.set(`allPorts_.${i}.${'is_active'}`, this.activePorts_.some(activePort => activePort.port_number === this.allPorts_[i].port_number &&
                activePort.protocol_type ===
                    this.allPorts_[i].protocol_type));
        }
    }
    onAddPortClick_() {
        this.showAddPortDialog_ = true;
    }
    onAddPortDialogClose_() {
        this.showAddPortDialog_ = false;
    }
    onShowRemoveAllPortsMenuClick_(event) {
        const menu = this.$.removeAllPortsMenu.get();
        menu.showAt(event.target);
    }
    onRemoveSinglePortClick_(event) {
        const target = event.currentTarget;
        const containerId = target['dataContainerId'];
        const portNumber = Number(target.dataset['portNumber']);
        const protocolType = Number(target.dataset['protocolType']);
        this.browserProxy_
            .removeCrostiniPortForward(containerId, portNumber, protocolType)
            .then((_result) => {
            // TODO(crbug.com/848127): Error handling for result
            recordSettingChange();
        });
    }
    onRemoveAllPortsClick_() {
        const menu = this.$.removeAllPortsMenu.get();
        assert(menu.open);
        for (const container of this.allContainers_) {
            this.browserProxy_.removeAllCrostiniPortForwards(container.id);
        }
        recordSettingChange();
        menu.close();
    }
    onPortActivationChange_(event) {
        const target = event.currentTarget;
        const containerId = target['dataContainerId'];
        const portNumber = Number(target.dataset['portNumber']);
        const protocolType = Number(target.dataset['protocolType']);
        if (target.checked) {
            target.checked = false;
            this.browserProxy_
                .activateCrostiniPortForward(containerId, portNumber, protocolType)
                .then(result => {
                if (!result) {
                    this.$.errorToast.show();
                }
                // TODO(crbug.com/848127): Elaborate on error handling for result
            });
        }
        else {
            this.browserProxy_
                .deactivateCrostiniPortForward(containerId, portNumber, protocolType)
                .then((_result) => {
                // TODO(crbug.com/848127): Error handling for result
            });
        }
    }
    showContainerId_(allPorts, id) {
        return allPorts.some(port => equalContainerId(port.container_id, id)) &&
            allPorts.some(port => !equalContainerId(port.container_id, DEFAULT_CROSTINI_GUEST_ID));
    }
    containerLabel_(id) {
        return containerLabel(id, DEFAULT_CROSTINI_VM);
    }
    hasContainerPorts_(allPorts, id) {
        return allPorts.some(port => equalContainerId(port.container_id, id));
    }
    byContainerId_(id) {
        return port => equalContainerId(port.container_id, id);
    }
}
customElements.define(CrostiniPortForwardingElement.is, CrostiniPortForwardingElement);
