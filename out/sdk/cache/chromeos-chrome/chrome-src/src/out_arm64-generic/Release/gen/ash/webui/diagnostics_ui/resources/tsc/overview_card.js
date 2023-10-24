// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './diagnostics_shared.css.js';
import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getSystemDataProvider } from './mojo_interface_provider.js';
import { getTemplate } from './overview_card.html.js';
/**
 * @fileoverview
 * 'overview-card' shows an overview of system information such
 * as CPU type, version, board name, and memory.
 */
export class OverviewCardElement extends PolymerElement {
    static get is() {
        return 'overview-card';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            systemInfo: {
                type: Object,
            },
            deviceInfo: {
                type: String,
                value: '',
                computed: 'getDeviceInfo(systemInfo.versionInfo.fullVersionString,' +
                    'systemInfo.boardName)',
            },
        };
    }
    constructor() {
        super();
        this.systemDataProvider = getSystemDataProvider();
        this.fetchSystemInfo();
    }
    fetchSystemInfo() {
        this.systemDataProvider.getSystemInfo().then((result) => {
            this.onSystemInfoReceived(result.systemInfo);
        });
    }
    onSystemInfoReceived(systemInfo) {
        this.systemInfo = systemInfo;
    }
    getDeviceInfo() {
        const marketingNameValid = !this.shouldHideMarketingName();
        const boardName = this.systemInfo.boardName;
        const version = this.systemInfo.versionInfo.fullVersionString;
        if (!boardName && !marketingNameValid) {
            const versionInfo = loadTimeData.getStringF('versionInfo', version);
            // Capitalize "v" in "version" if board and marketing name are missing.
            return versionInfo[0].toUpperCase() + versionInfo.slice(1);
        }
        const deviceInfo = this.systemInfo.boardName ?
            loadTimeData.getStringF('boardAndVersionInfo', this.systemInfo.boardName, version) :
            loadTimeData.getStringF('versionInfo', version);
        return marketingNameValid ? `(${deviceInfo})` : deviceInfo;
    }
    shouldHideMarketingName() {
        return this.systemInfo.marketingName === 'TBD' ||
            this.systemInfo.marketingName === '';
    }
}
customElements.define(OverviewCardElement.is, OverviewCardElement);
