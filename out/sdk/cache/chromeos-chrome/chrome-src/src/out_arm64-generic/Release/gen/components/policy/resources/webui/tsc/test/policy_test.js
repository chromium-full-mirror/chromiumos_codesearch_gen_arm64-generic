// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './policy_test_table.js';
import { getRequiredElement } from 'chrome://resources/js/util_ts.js';
import { LevelNamesToValues, PolicyLevel, PolicyScope, PolicySource, PolicyTestBrowserProxy, ScopeNamesToValues, SourceNamesToValues } from './policy_test_browser_proxy.js';
const policyTestBrowserProxy = PolicyTestBrowserProxy.getInstance();
function initialize() {
    getRequiredElement('import-policies-file-input')
        .addEventListener('change', uploadPoliciesFile);
    getRequiredElement('apply-policies').addEventListener('click', applyPolicies);
    getRequiredElement('revert-applied-policies')
        .addEventListener('click', resetPolicies);
    getRequiredElement('clear-policies').addEventListener('click', clearPolicies);
    getRequiredElement('export-policies-json')
        .addEventListener('click', exportAndDownloadPolicies);
    getRequiredElement('restart-browser')
        .addEventListener('click', restartBrowser);
}
function uploadPoliciesFile() {
    const fileInput = getRequiredElement('import-policies-file-input');
    // Get selected file
    const jsonFile = fileInput.files?.length == 1 ? fileInput.files[0] : null;
    if (jsonFile) {
        applyPoliciesFromFile(jsonFile);
    }
}
function applyPoliciesFromFile(jsonFile) {
    // Read file as string
    const reader = new FileReader();
    reader.readAsText(jsonFile);
    reader.addEventListener('load', () => {
        const fileInput = getRequiredElement('import-policies-file-input');
        // Extension policies are ignored, they are not supported on this page
        try {
            const policyTable = getRequiredElement('policy-test-table');
            // Empty policy table
            policyTable.clearRows();
            // Populate the test table after determining whether the array or
            // object format is used.
            const policies = JSON.parse(reader.result);
            if (policies.constructor === Array) {
                // Add row for each policy.
                policies.forEach((policy) => {
                    policyTable.addRow(policy);
                });
            }
            else {
                const policiesObj = policies['policyValues']['chrome']['policies'];
                // Add row for each policy
                for (const [key, value] of Object.entries(policiesObj)) {
                    if (key.startsWith('_')) {
                        continue;
                    }
                    policyTable.addRow(convertToPolicyInfo(key, value));
                }
            }
            // Reset files
            fileInput.value = '';
        }
        catch {
            alert('Invalid file format.');
        }
    }, false);
}
function convertToPolicyInfo(policyName, value) {
    const policy = {
        name: policyName,
        source: Number(SourceNamesToValues[value['source']]) ??
            PolicySource.SOURCE_ENTERPRISE_DEFAULT_VAL,
        scope: Number(ScopeNamesToValues[value['scope']]) ??
            PolicyScope.SCOPE_USER_VAL,
        level: Number(LevelNamesToValues[value['level']]) ??
            PolicyLevel.LEVEL_MANDATORY_VAL,
        value: JSON.stringify(value['value']),
    };
    return policy;
}
async function applyPolicies() {
    const jsonString = getRequiredElement('policy-test-table')
        .getTestPoliciesJsonString();
    if (jsonString) {
        // Set user affiliation
        const userAffiliation = getRequiredElement('user-affiliated').checked;
        await policyTestBrowserProxy.setUserAffiliation(userAffiliation);
        // Disable the Apply policies button and re-enable after sending, to ensure
        // that the JSON string is not accidentally sent twice.
        getRequiredElement('apply-policies').disabled = true;
        await policyTestBrowserProxy.applyTestPolicies(jsonString);
        getRequiredElement('revert-applied-policies').disabled =
            false;
        getRequiredElement('apply-policies').disabled = false;
    }
}
function clearPolicies() {
    getRequiredElement('policy-test-table').clearRows();
    getRequiredElement('policy-test-table').addEmptyRow();
}
function resetPolicies(event) {
    policyTestBrowserProxy.revertTestPolicies();
    event.target.disabled = true;
}
function exportAndDownloadPolicies() {
    const jsonString = getRequiredElement('policy-test-table')
        .getTestPoliciesJsonString();
    if (jsonString) {
        const blob = new Blob([jsonString], { type: 'application/json' });
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'test_policies.json';
        document.body.appendChild(link);
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    }
}
function restartBrowser() {
    const jsonString = getRequiredElement('policy-test-table')
        .getTestPoliciesJsonString();
    if (jsonString) {
        policyTestBrowserProxy.restartWithTestPolicies(jsonString);
    }
}
document.addEventListener('DOMContentLoaded', initialize);
