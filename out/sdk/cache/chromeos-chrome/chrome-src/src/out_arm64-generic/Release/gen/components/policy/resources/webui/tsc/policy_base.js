// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './strings.m.js';
import 'chrome://resources/js/action_link.js';
// 
import './status_box.js';
import './policy_table.js';
import { addWebUiListener, sendWithPromise } from 'chrome://resources/js/cr.js';
import { FocusOutlineManager } from 'chrome://resources/js/focus_outline_manager.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { getRequiredElement } from 'chrome://resources/js/util_ts.js';
// A singleton object that handles communication between browser and WebUI.
export class Page {
    constructor() {
        this.policyTables = {};
    }
    /**
     * Main initialization function. Called by the browser on page load.
     */
    initialize() {
        FocusOutlineManager.forDocument(document);
        this.mainSection = getRequiredElement('main-section');
        const policyElement = getRequiredElement('policy-ui');
        // Add or remove header shadow based on scroll position.
        policyElement.addEventListener('scroll', () => {
            document.getElementsByTagName('header')[0].classList.toggle('header-shadow', policyElement.scrollTop > 0);
        });
        // Place the initial focus on the search input field.
        const filterElement = getRequiredElement('search-field-input');
        filterElement.focus();
        filterElement.addEventListener('search', () => {
            for (const policyTable in this.policyTables) {
                this.policyTables[policyTable].setFilterPattern(filterElement.value);
            }
        });
        const reloadPoliciesButton = getRequiredElement('reload-policies');
        reloadPoliciesButton.onclick = () => {
            reloadPoliciesButton.disabled = true;
            getRequiredElement('screen-reader-message').textContent =
                loadTimeData.getString('loadingPolicies');
            sendWithPromise('reloadPolicies');
        };
        const moreActionsButton = getRequiredElement('more-actions-button');
        const moreActionsIcon = getRequiredElement('dropdown-icon');
        const moreActionsList = getRequiredElement('more-actions-list');
        moreActionsButton.onclick = () => {
            moreActionsList.classList.toggle('more-actions-visibility');
        };
        // Close dropdown if user clicks anywhere on page.
        document.addEventListener('click', function (event) {
            if (moreActionsList && event.target !== moreActionsButton &&
                event.target !== moreActionsIcon) {
                moreActionsList.classList.add('more-actions-visibility');
            }
        });
        const exportButton = getRequiredElement('export-policies');
        const hideExportButton = loadTimeData.valueExists('hideExportButton') &&
            loadTimeData.getBoolean('hideExportButton');
        if (hideExportButton) {
            exportButton.style.display = 'none';
        }
        else {
            exportButton.onclick = () => {
                sendWithPromise('exportPoliciesJSON');
            };
        }
        // 
        getRequiredElement('copy-policies').onclick = () => {
            sendWithPromise('copyPoliciesJSON');
        };
        getRequiredElement('show-unset').onchange = () => {
            for (const policyTable in this.policyTables) {
                this.policyTables[policyTable]?.filter();
            }
        };
        sendWithPromise('listenPoliciesUpdates');
        addWebUiListener('status-updated', (status) => this.setStatus(status));
        addWebUiListener('policies-updated', (names, values) => this.onPoliciesReceived_(names, values));
        addWebUiListener('download-json', (json) => this.downloadJson(json));
    }
    onPoliciesReceived_(policyNames, policyValuesResponse) {
        const policyValues = policyValuesResponse.policyValues;
        const policyIds = policyValuesResponse.policyIds;
        const policyGroups = policyIds.map((id) => {
            const knownPolicyNames = policyNames[id] ? policyNames[id].policyNames : [];
            const value = policyValues[id];
            const knownPolicyNamesSet = new Set(knownPolicyNames);
            const receivedPolicyNames = value.policies ? Object.keys(value.policies) : [];
            const allPolicyNames = Array.from(new Set([...knownPolicyNames, ...receivedPolicyNames]));
            const policies = allPolicyNames.map(name => Object.assign({
                name,
                link: [
                    policyNames['chrome']?.policyNames,
                    policyNames['precedence']?.policyNames,
                ].includes(knownPolicyNames) &&
                    knownPolicyNamesSet.has(name) ?
                    `https://chromeenterprise.google/policies/?policy=${name}` :
                    undefined,
            }, value?.policies[name]));
            return {
                name: value.forSigninScreen ?
                    `${value.name} [${loadTimeData.getString('signinProfile')}]` :
                    value.name,
                id: value.isExtension ? id : null,
                policies,
                ...(value.precedenceOrder &&
                    { precedenceOrder: value.precedenceOrder }),
            };
        });
        policyGroups.forEach(group => this.createOrUpdatePolicyTable(group));
        // 
        this.reloadPoliciesDone();
    }
    // Triggers the download of the policies as a JSON file.
    downloadJson(json) {
        const blob = new Blob([json], { type: 'application/json' });
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'policies.json';
        document.body.appendChild(link);
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
        document.body.removeChild(link);
    }
    createOrUpdatePolicyTable(dataModel) {
        const id = `${dataModel.name}-${dataModel.id}`;
        if (!this.policyTables[id]) {
            this.policyTables[id] = document.createElement('policy-table');
            this.mainSection.appendChild(this.policyTables[id]);
        }
        this.policyTables[id].update(dataModel);
    }
    /**
     * Update the status section of the page to show the current cloud policy
     * status.
     * Status is the dictionary containing the current policy status.
     */
    setStatus(status) {
        // Remove any existing status boxes.
        const container = getRequiredElement('status-box-container');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        // Hide the status section.
        const section = getRequiredElement('status-section');
        section.hidden = true;
        // Add a status box for each scope that has a cloud policy status.
        for (const scope in status) {
            const boxStatus = status[scope];
            if (!boxStatus.policyDescriptionKey) {
                continue;
            }
            const box = document.createElement('status-box');
            box.initialize(scope, boxStatus);
            container.appendChild(box);
            // Show the status section.
            section.hidden = false;
        }
    }
    /**
     * Re-enable the reload policies button when the previous request to reload
     * policies values has completed.
     */
    reloadPoliciesDone() {
        getRequiredElement('reload-policies').disabled =
            false;
        getRequiredElement('screen-reader-message').textContent =
            loadTimeData.getString('loadPoliciesDone');
    }
    // 
    static getInstance() {
        return instance || (instance = new Page());
    }
}
// Make Page a singleton.
let instance;
