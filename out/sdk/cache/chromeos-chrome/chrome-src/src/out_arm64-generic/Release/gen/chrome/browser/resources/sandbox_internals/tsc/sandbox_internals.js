// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// 
import './strings.m.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
// 
import { getRequiredElement } from 'chrome://resources/js/util_ts.js';
/**
 * CSS classes for different statuses.
 */
var StatusClass;
(function (StatusClass) {
    StatusClass["GOOD"] = "good";
    StatusClass["BAD"] = "bad";
    StatusClass["MEDIUM"] = "medium";
    StatusClass["INFO"] = "info";
})(StatusClass || (StatusClass = {}));
/**
 * Adds a row to the sandbox status table.
 * @param name The name of the status item.
 * @param value The status of the item.
 * @param cssClass A CSS class to apply to the row.
 * @return The newly added TR.
 */
function addStatusRow(name, value, cssClass) {
    const row = document.createElement('tr');
    const nameCol = row.appendChild(document.createElement('td'));
    const valueCol = row.appendChild(document.createElement('td'));
    nameCol.textContent = name;
    valueCol.textContent = value;
    if (cssClass != null) {
        nameCol.classList.add(cssClass);
        valueCol.classList.add(cssClass);
    }
    getRequiredElement('sandbox-status').appendChild(row);
    return row;
}
/**
 * Reports the overall sandbox status evaluation message.
 */
function setEvaluation(result) {
    const message = result ? 'You are adequately sandboxed.' :
        'You are NOT adequately sandboxed.';
    getRequiredElement('evaluation').innerText = message;
}
// 
// 
/**
 * Adds a status row that reports either Yes or No.
 * @param name The name of the status item.
 * @param result The status (good/bad) result.
 * @return The newly added TR.
 */
function addGoodBadRow(name, result) {
    return addStatusRow(name, result ? 'Yes' : 'No', result ? StatusClass.GOOD : StatusClass.BAD);
}
/**
 * Main page handler for desktop Linux.
 */
function linuxHandler() {
    const suidSandbox = loadTimeData.getBoolean('suid');
    const nsSandbox = loadTimeData.getBoolean('userNs');
    let layer1SandboxType = 'None';
    let layer1SandboxCssClass = StatusClass.BAD;
    if (suidSandbox) {
        layer1SandboxType = 'SUID';
        layer1SandboxCssClass = StatusClass.MEDIUM;
    }
    else if (nsSandbox) {
        layer1SandboxType = 'Namespace';
        layer1SandboxCssClass = StatusClass.GOOD;
    }
    addStatusRow('Layer 1 Sandbox', layer1SandboxType, layer1SandboxCssClass);
    addGoodBadRow('PID namespaces', loadTimeData.getBoolean('pidNs'));
    addGoodBadRow('Network namespaces', loadTimeData.getBoolean('netNs'));
    addGoodBadRow('Seccomp-BPF sandbox', loadTimeData.getBoolean('seccompBpf'));
    addGoodBadRow('Seccomp-BPF sandbox supports TSYNC', loadTimeData.getBoolean('seccompTsync'));
    const enforcingYamaBroker = loadTimeData.getBoolean('yamaBroker');
    addGoodBadRow('Ptrace Protection with Yama LSM (Broker)', enforcingYamaBroker);
    const enforcingYamaNonbroker = loadTimeData.getBoolean('yamaNonbroker');
    // If there is no ptrace protection anywhere, that is bad.
    // If there is no ptrace protection for nonbroker processes because of the
    // user namespace sandbox, that is fine and we display as medium.
    const yamaNonbrokerCssClass = enforcingYamaBroker ?
        (enforcingYamaNonbroker ? StatusClass.GOOD : StatusClass.MEDIUM) :
        StatusClass.BAD;
    addStatusRow('Ptrace Protection with Yama LSM (Non-broker)', enforcingYamaNonbroker ? 'Yes' : 'No', yamaNonbrokerCssClass);
    setEvaluation(loadTimeData.getBoolean('sandboxGood'));
}
// 
document.addEventListener('DOMContentLoaded', () => {
    // 
    // 
    linuxHandler();
    // 
});
