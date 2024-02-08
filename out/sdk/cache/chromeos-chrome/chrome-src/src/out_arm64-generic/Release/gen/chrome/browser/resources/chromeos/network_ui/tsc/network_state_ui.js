// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/network/network_icon.js';
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_shared_style.css.js';
import { OncMojo } from 'chrome://resources/ash/common/network/onc_mojo.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrosNetworkConfig, FilterType, NO_LIMIT } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/cros_network_config.mojom-webui.js';
import { NetworkType } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './network_state_ui.html.js';
import { NetworkUiBrowserProxyImpl } from './network_ui_browser_proxy.js';
/**
 * Properties to display in the network state table. Each entry can be either
 * a single state field or an array of state fields. If more than one is
 * specified then the first non empty value is used.
 */
const NETWORK_STATE_FIELDS = [
    'guid',
    'name',
    'type',
    'connectionState',
    'connectable',
    'errorState',
    'wifi.security',
    ['cellular.networkTechnology', 'EAP.EAP'],
    'cellular.activationState',
    'cellular.roaming',
    'wifi.frequency',
    'wifi.signalStrength',
];
const FAVORITE_STATE_FIELDS = ['guid', 'name', 'type', 'source'];
const DEVICE_STATE_FIELDS = ['type', 'deviceState'];
function createTableCellElement() {
    return document.createElement('td');
}
function createTableRowElement() {
    return document.createElement('tr');
}
function getOncTypeString(key, value) {
    if (value === undefined) {
        return '';
    }
    if (key === 'type' && value === 'etherneteap') {
        // Special case, not in production UI.
        return 'EthernetEAP';
    }
    return OncMojo.getTypeString(key, value);
}
class NetworkStateUiElement extends PolymerElement {
    constructor() {
        super(...arguments);
        /**
         * This UI will use both the networkingPrivate extension API and the
         * networkConfig mojo API until we provide all of the required functionality
         * in networkConfig. TODO(stevenjb): Remove use of networkingPrivate api.
         */
        this.networkConfig_ = CrosNetworkConfig.getRemote();
        this.browserProxy_ = NetworkUiBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'network-state-ui';
    }
    static get template() {
        return getTemplate();
    }
    connectedCallback() {
        super.connectedCallback();
        /** Set the refresh rate if the interval is found in the url. */
        const interval = new URL(window.location.href).searchParams.get('refresh');
        if (interval) {
            window.setInterval(() => {
                this.requestNetworks_();
            }, parseInt(interval, 10) * 1000);
        }
        this.requestNetworks_();
    }
    /**
     * Returns the ONC data property for |state| associated with a key. Used
     * to access properties in the state by |key| which may may refer to a
     * nested property, e.g. 'WiFi.Security'. If any part of a nested key is
     * missing, this will return undefined.
     */
    getOncProperty_(state, key) {
        let dict = state;
        const keys = key.split('.');
        while (keys.length > 1) {
            const k = keys.shift();
            dict = dict[k];
            if (!dict || typeof dict !== 'object') {
                return undefined;
            }
        }
        const k = keys.shift();
        return getOncTypeString(k, dict[k]);
    }
    /**
     * Creates a cell with a button for expanding a network state table row.
     */
    createStateTableExpandButton_(state) {
        const cell = createTableCellElement();
        cell.className = 'state-table-expand-button-cell';
        const button = document.createElement('button');
        button.addEventListener('click', (event) => {
            this.toggleExpandRow_(event.target, state);
        });
        button.className = 'state-table-expand-button';
        button.textContent = '+';
        cell.appendChild(button);
        return cell;
    }
    /**
     * Creates a cell with an icon representing the network state.
     */
    createStateTableIcon_(state) {
        const cell = createTableCellElement();
        cell.className = 'state-table-icon-cell';
        const icon = document.createElement('network-icon');
        icon.isListItem = true;
        icon.networkState = OncMojo.getDefaultNetworkState(state.type);
        cell.appendChild(icon);
        return cell;
    }
    /**
     * Creates a cell in the network state table.
     */
    createStateTableCell_(value) {
        const cell = createTableCellElement();
        cell.textContent = value || '';
        return cell;
    }
    /**
     * Creates a row in the network state table.
     */
    createStateTableRow_(stateFields, state) {
        const row = createTableRowElement();
        row.className = 'state-table-row';
        row.appendChild(this.createStateTableExpandButton_(state));
        row.appendChild(this.createStateTableIcon_(state));
        for (let i = 0; i < stateFields.length; ++i) {
            const field = stateFields[i];
            let value;
            if (typeof field === 'string') {
                value = this.getOncProperty_(state, field);
            }
            else {
                for (let j = 0; j < field.length; ++j) {
                    value = this.getOncProperty_(state, field[j]);
                    if (value != undefined) {
                        break;
                    }
                }
            }
            if (field === 'guid' && value) {
                value = value.slice(0, 8);
            }
            row.appendChild(this.createStateTableCell_(value));
        }
        return row;
    }
    /**
     * Creates a table for networks or favorites.
     */
    createStateTable_(tablename, stateFields, states) {
        const table = this.shadowRoot.querySelector('#' + tablename);
        const oldRows = table.querySelectorAll('.state-table-row');
        for (let i = 0; i < oldRows.length; ++i) {
            table.removeChild(oldRows[i]);
        }
        states.forEach((state) => {
            table.appendChild(this.createStateTableRow_(stateFields, state));
        });
    }
    /**
     * Returns a valid HTMLElement id from |guid|.
     */
    idFromGuid_(guid) {
        return '_' + guid.replace(/[{}]/g, '');
    }
    /**
     * Returns a valid HTMLElement id from |type|. Note: |type| may be a Shill
     * type or an ONC type, so strip _ and convert to lowercase to unify them.
     */
    idFromTypeString_(type) {
        return '_' + type.replace(/[{}_]/g, '').toLowerCase();
    }
    idFromType_(type) {
        return this.idFromTypeString_(getOncTypeString('type', type));
    }
    /**
     * This callback function is triggered when visible networks are received.
     */
    onVisibleNetworksReceived_(states) {
        this.createStateTable_('network-state-table', NETWORK_STATE_FIELDS, states);
    }
    /**
     * This callback function is triggered when favorite networks are received.
     */
    onFavoriteNetworksReceived_(states) {
        this.createStateTable_('favorite-state-table', FAVORITE_STATE_FIELDS, states);
    }
    /**
     * This callback function is triggered when device states are received.
     */
    onDeviceStatesReceived_(states) {
        this.createStateTable_('device-state-table', DEVICE_STATE_FIELDS, states);
    }
    getSelectedFormat_() {
        const formatSelect = this.shadowRoot.querySelector('#get-property-format');
        return formatSelect.options[formatSelect.selectedIndex].value;
    }
    /**
     * Toggles the button state and add or remove a row displaying the complete
     * state information for a row.
     */
    toggleExpandRow_(btn, state) {
        const cell = btn.parentNode;
        const row = cell.parentNode;
        if (btn.textContent === '-') {
            btn.textContent = '+';
            row.parentNode.removeChild(row.nextSibling);
        }
        else {
            btn.textContent = '-';
            const expandedRow = this.createExpandedRow_(state, row);
            row.parentNode.insertBefore(expandedRow, row.nextSibling);
        }
    }
    /**
     * Creates the expanded row for displaying the complete state as JSON.
     */
    createExpandedRow_(state, baseRow) {
        assert(state);
        const guid = 'guid' in state ? state.guid : '';
        const expandedRow = createTableRowElement();
        expandedRow.className = 'state-table-row';
        const emptyCell = createTableCellElement();
        emptyCell.style.border = 'none';
        expandedRow.appendChild(emptyCell);
        const detailCell = createTableCellElement();
        detailCell.id =
            guid ? this.idFromGuid_(guid) : this.idFromType_(state.type);
        detailCell.className = 'state-table-expanded-cell';
        detailCell.colSpan = baseRow.childNodes.length - 1;
        expandedRow.appendChild(detailCell);
        if (guid) {
            this.handleNetworkDetail_(guid, this.getSelectedFormat_(), detailCell);
        }
        else {
            this.handleDeviceDetail_(state, this.getSelectedFormat_(), detailCell);
        }
        return expandedRow;
    }
    /**
     * Requests network details and calls showDetail_ with the result.
     */
    handleNetworkDetail_(guid, selectedId, detailCell) {
        if (selectedId === 'shill') {
            this.browserProxy_.getShillNetworkProperties(guid).then((response) => {
                this.getShillNetworkPropertiesResult_(response);
            });
        }
        else if (selectedId === 'state') {
            this.networkConfig_.getNetworkState(guid)
                .then((responseParams) => {
                if (responseParams && responseParams.result) {
                    this.showDetail_(detailCell, responseParams.result);
                }
                else {
                    this.showDetailError_(detailCell, 'getNetworkState(' + guid + ') failed');
                }
            })
                .catch((error) => {
                this.showDetailError_(detailCell, 'Mojo service failure: ' + error);
            });
        }
        else if (selectedId === 'managed') {
            this.networkConfig_.getManagedProperties(guid)
                .then((responseParams) => {
                if (responseParams && responseParams.result) {
                    this.showDetail_(detailCell, responseParams.result);
                }
                else {
                    this.showDetailError_(detailCell, 'getManagedProperties(' + guid + ') failed');
                }
            })
                .catch((error) => {
                this.showDetailError_(detailCell, 'Mojo service failure: ' + error);
            });
        }
        else {
            chrome.networkingPrivate.getProperties(guid).then((properties) => {
                this.showDetail_(detailCell, properties, chrome.runtime.lastError);
            });
        }
    }
    /**
     * Requests network details and calls showDetail_ with the result.
     */
    handleDeviceDetail_(state, selectedId, detailCell) {
        if (selectedId === 'shill') {
            this.browserProxy_
                .getShillDeviceProperties(OncMojo.getNetworkTypeString(state.type))
                .then((response) => {
                this.getShillDevicePropertiesResult_(response);
            });
        }
        else {
            this.showDetail_(detailCell, state);
        }
    }
    showDetail_(detailCell, state, error) {
        if (error && error.message) {
            this.showDetailError_(detailCell, error.message);
            return;
        }
        detailCell.textContent =
            JSON.stringify(state, (_, value) => {
                return typeof value === 'bigint' ? value.toString() : value;
            }, '\t');
    }
    showDetailError_(detailCell, error) {
        detailCell.textContent = error;
    }
    /**
     * Callback invoked by Chrome after a getShillNetworkProperties call. The
     * |args| parameter contains the requested Shill properties on success, and
     * contains just 'GUID' and 'ShillError' on failure.
     */
    getShillNetworkPropertiesResult_(args) {
        const properties = args.shift();
        const guid = properties['GUID'];
        if (!guid) {
            console.error('No GUID in getShillNetworkPropertiesResult_');
            return;
        }
        const detailCell = this.shadowRoot.querySelector('td#' + this.idFromGuid_(guid));
        if (!detailCell) {
            console.error('No cell for GUID: ' + guid);
            return;
        }
        if (properties['ShillError']) {
            detailCell.textContent = properties['ShillError'];
        }
        else {
            detailCell.textContent = JSON.stringify(properties, null, '\t');
        }
    }
    /**
     * Callback invoked by Chrome after a getShillDeviceProperties call. The
     * |args| parameter contains the requested Shill properties on success, and
     * contains just 'GUID' and 'ShillError' on failure.
     */
    getShillDevicePropertiesResult_(args) {
        const properties = args.shift();
        const type = properties['Type'];
        if (!type) {
            console.error('No Type in getShillDevicePropertiesResult_');
            return;
        }
        const detailCell = this.shadowRoot.querySelector('td#' + this.idFromTypeString_(type));
        if (!detailCell) {
            console.error('No cell for Type: ' + type);
            return;
        }
        if (properties['ShillError']) {
            detailCell.textContent = properties['ShillError'];
        }
        else {
            detailCell.textContent = JSON.stringify(properties, null, '\t');
        }
    }
    /**
     * Callback invoked by Chrome after a getShillEthernetEap call. The first
     * item in the result will be the EAP properties if any.
     */
    getShillEthernetEapResult_(result) {
        const state = result.shift();
        const states = [];
        if (state) {
            // |state.type| is expected to be the string "etherneteap", which is not
            // supported by the rest of this UI. Use the kEthernet constant instead.
            // See https://crbug.com/1213176.
            state.type = NetworkType.kEthernet;
            states.push(state);
        }
        this.createStateTable_('ethernet-eap-state-table', FAVORITE_STATE_FIELDS, states);
    }
    /**
     * Requests an update of all network info.
     */
    requestNetworks_() {
        this.networkConfig_
            .getNetworkStateList({
            filter: FilterType.kVisible,
            networkType: NetworkType.kAll,
            limit: NO_LIMIT,
        })
            .then((responseParams) => {
            this.onVisibleNetworksReceived_(responseParams.result);
        });
        this.networkConfig_
            .getNetworkStateList({
            filter: FilterType.kConfigured,
            networkType: NetworkType.kAll,
            limit: NO_LIMIT,
        })
            .then((responseParams) => {
            this.onFavoriteNetworksReceived_(responseParams.result);
        });
        this.networkConfig_.getDeviceStateList().then((responseParams) => {
            this.onDeviceStatesReceived_(responseParams.result);
        });
        // Only request EthernetEAP properties when the 'shill' format is selected.
        if (this.getSelectedFormat_() === 'shill') {
            this.browserProxy_.getShillEthernetEap().then((result) => {
                this.getShillEthernetEapResult_(result);
            });
        }
    }
}
customElements.define(NetworkStateUiElement.is, NetworkStateUiElement);
