// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './strings.m.js';
import { CustomElement } from 'chrome://resources/js/custom_element.js';
import { getTemplate } from './connectors_tabs.html.js';
import { DeviceTrustConnectorElement } from './device_trust_connector.js';
// Set of all connector tabs. Adding a new entry here will make it automatically
// show in the UI.
const connectorTabs = [{
        title: 'Device Trust',
        directive: DeviceTrustConnectorElement.is,
        isEnabled: true,
    }];
class ConnectorsTabsElement extends CustomElement {
    static get is() {
        return 'connectors-tabs';
    }
    static get template() {
        return getTemplate();
    }
    get tabHeaders() {
        return this.$all('.tabs > button');
    }
    get tabContents() {
        return this.$all('.content > div');
    }
    get noConnectorsMessage() {
        return this.$('#no-connectors-message');
    }
    constructor() {
        super();
        this.enabledTabs = connectorTabs.filter(x => x.isEnabled);
        // Exit early if no connectors are enabled.
        if (!this.enabledTabs.length) {
            this.showElement(this.noConnectorsMessage);
            return;
        }
        // Add tabs dynamically.
        const headersRoot = this.$('.tabs');
        const contentRoot = this.$('.content');
        if (!headersRoot || !contentRoot) {
            console.error('Could not find headersRoot or contentRoot.');
            return;
        }
        for (const tab of this.enabledTabs) {
            if (tab.isEnabled) {
                this.addTab(headersRoot, contentRoot, tab);
            }
        }
        window.onhashchange = () => {
            this.urlHashChanged(window.location.hash);
        };
        this.urlHashChanged(window.location.hash);
    }
    urlHashChanged(hash) {
        hash = (hash || '').split('#').pop() || '';
        const tab = this.enabledTabs.find(t => t.directive === hash.toLowerCase()) ||
            this.enabledTabs[0];
        if (tab) {
            this.showTab(tab);
        }
        else {
            console.error(`Could not find tab for hash '${hash}', and no default tab was available.'`);
        }
    }
    onTabSelected(tabId) {
        // Update URL hash, which will trigger tab selection.
        window.location.hash = tabId;
    }
    showTab(tab) {
        const index = this.enabledTabs.findIndex(x => x === tab);
        if (index < 0) {
            console.error(`Tab ${tab.directive} was not found in the array of enabled connectors.`);
            return;
        }
        this.tabHeaders.forEach(h => h.classList.remove('active'));
        this.tabHeaders.item(index).classList.add('active');
        this.tabContents.forEach(c => this.hideElement(c));
        this.showElement(this.tabContents.item(index));
    }
    addTab(headersRoot, contentRoot, tab) {
        const headerElement = document.createElement('button');
        headerElement.innerText = tab.title;
        headerElement.addEventListener('click', () => this.onTabSelected(tab.directive));
        headersRoot.appendChild(headerElement);
        const contentElement = document.createElement('div');
        contentElement.classList.add('tabcontent');
        contentElement.id = tab.directive;
        contentElement.appendChild(document.createElement(tab.directive));
        contentRoot.appendChild(contentElement);
    }
    showElement(element) {
        element?.classList.remove('hidden');
    }
    hideElement(element) {
        element?.classList.add('hidden');
    }
}
customElements.define(ConnectorsTabsElement.is, ConnectorsTabsElement);
