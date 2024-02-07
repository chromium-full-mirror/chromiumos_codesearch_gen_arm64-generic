// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_toast/cr_toast.js';
import 'chrome://resources/ash/common/cr_elements/icons.html.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import './battery_status_card.js';
import './cpu_card.js';
import './diagnostics_shared.css.js';
import './icons.html.js';
import './memory_card.js';
import './overview_card.js';
import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { DiagnosticsBrowserProxyImpl } from './diagnostics_browser_proxy.js';
import { getSystemDataProvider } from './mojo_interface_provider.js';
import { TestSuiteStatus } from './routine_list_executor.js';
import { getTemplate } from './system_page.html.js';
/**
 * @fileoverview
 * 'system-page' is the main page for viewing telemetric system information
 * and running diagnostic tests.
 */
const SystemPageElementBase = I18nMixin(PolymerElement);
export class SystemPageElement extends SystemPageElementBase {
    static get is() {
        return 'system-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            saveSessionLogEnabled: {
                type: Boolean,
                value: true,
            },
            showBatteryStatusCard: {
                type: Boolean,
                value: false,
            },
            testSuiteStatus: {
                type: Number,
                value: TestSuiteStatus.NOT_RUNNING,
            },
            systemInfoReceived: {
                type: Boolean,
                value: false,
            },
            toastText: {
                type: String,
                value: '',
            },
            isLoggedIn: {
                type: Boolean,
                value: loadTimeData.getBoolean('isLoggedIn'),
            },
            isActive: {
                type: Boolean,
                value: true,
            },
        };
    }
    constructor() {
        super();
        this.systemDataProvider = getSystemDataProvider();
        this.browserProxy = DiagnosticsBrowserProxyImpl.getInstance();
        this.fetchSystemInfo();
        this.browserProxy.initialize();
    }
    fetchSystemInfo() {
        this.systemDataProvider.getSystemInfo().then((result) => {
            this.onSystemInfoReceived(result.systemInfo);
        });
        setTimeout(() => this.recordLateSystemInfo(), 3000);
    }
    onSystemInfoReceived(systemInfo) {
        this.systemInfoReceived = true;
        this.showBatteryStatusCard = systemInfo.deviceCapabilities.hasBattery;
    }
    recordLateSystemInfo() {
        if (!this.systemInfoReceived) {
            console.warn('system info not received within three seconds.');
        }
    }
    onSessionLogClick() {
        // Click already handled then leave early.
        if (!this.saveSessionLogEnabled) {
            return;
        }
        this.saveSessionLogEnabled = false;
        this.browserProxy.saveSessionLog()
            .then(
        /* @type {boolean} */ (success) => {
            const result = success ? 'Success' : 'Failure';
            this.toastText =
                loadTimeData.getString(`sessionLogToastText${result}`);
            this.$.toast.show();
        })
            .catch(() => { })
            .finally(() => {
            this.saveSessionLogEnabled = true;
        });
    }
    /**
     * 'navigation-view-panel' is responsible for calling this function when
     * the active page changes.
     */
    onNavigationPageChanged({ isActive }) {
        this.isActive = isActive;
        if (isActive) {
            // Focus the topmost system page element.
            const overviewCard = this.shadowRoot.querySelector('#overviewCard');
            assert(overviewCard);
            const overviewCardContainer = overviewCard.shadowRoot.querySelector('#overviewCardContainer');
            assert(overviewCardContainer);
            overviewCardContainer.focus();
            // TODO(ashleydp): Remove when a call can be made at a higher component
            // to avoid duplicate code in all navigatable pages.
            this.browserProxy.recordNavigation('system');
        }
    }
}
customElements.define(SystemPageElement.is, SystemPageElement);
