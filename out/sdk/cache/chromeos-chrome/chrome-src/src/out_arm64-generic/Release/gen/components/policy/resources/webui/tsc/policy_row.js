// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/js/action_link.js';
import './policy_conflict.js';
import './strings.m.js';
import { CustomElement } from 'chrome://resources/js/custom_element.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { getTemplate } from './policy_row.html.js';
export class PolicyRowElement extends CustomElement {
    static get template() {
        return getTemplate();
    }
    connectedCallback() {
        const toggle = this.shadowRoot.querySelector('.policy.row .toggle');
        toggle.addEventListener('click', () => this.toggleExpanded());
        const copy = this.shadowRoot.querySelector('.copy-value');
        copy.addEventListener('click', () => this.copyValue_());
        this.setAttribute('role', 'rowgroup');
        this.classList.add('policy-data');
    }
    initialize(policy) {
        this.policy = policy;
        this.unset_ = policy.value === undefined;
        this.hasErrors_ = !!policy.error;
        this.hasWarnings_ = !!policy.warning;
        this.hasInfos_ = !!policy.info;
        this.hasConflicts_ = !!policy.conflicts;
        this.hasSuperseded_ = !!policy.superseded;
        this.isMergedValue_ = !!policy.allSourcesMerged;
        this.deprecated_ = !!policy.deprecated;
        this.future_ = !!policy.future;
        // Populate the name column.
        const nameDisplay = this.shadowRoot.querySelector('.name .link span');
        nameDisplay.textContent = policy.name;
        if (policy.link) {
            const link = this.shadowRoot.querySelector('.name .link');
            link.href = policy.link;
            link.title = loadTimeData.getStringF('policyLearnMore', policy.name);
            this.toggleAttribute('no-help-link', false);
        }
        else {
            this.toggleAttribute('no-help-link', true);
        }
        // Populate the remaining columns with policy scope, level and value if a
        // value has been set. Otherwise, leave them blank.
        if (!this.unset_) {
            const scopeDisplay = this.shadowRoot.querySelector('.scope');
            let scope = 'scopeDevice';
            if (policy.scope === 'user') {
                scope = 'scopeUser';
            }
            else if (policy.scope === 'allUsers') {
                scope = 'scopeAllUsers';
            }
            scopeDisplay.textContent = loadTimeData.getString(scope);
            // Display scope and level as rows instead of columns on space constraint
            // devices.
            // 
            const levelDisplay = this.shadowRoot.querySelector('.level');
            levelDisplay.textContent = loadTimeData.getString(policy.level === 'recommended' ? 'levelRecommended' :
                'levelMandatory');
            const sourceDisplay = this.shadowRoot.querySelector('.source');
            sourceDisplay.textContent = loadTimeData.getString(policy.source);
            // Reduces load on the DOM for long values;
            const convertValue = (value, format) => {
                // Skip 'string' policy to avoid unnecessary conversions.
                if (typeof value == 'string') {
                    return value;
                }
                if (format) {
                    return JSON.stringify(value, null, 2);
                }
                else {
                    return JSON.stringify(value, null);
                }
            };
            // If value is longer than 256 characters, truncate and add ellipsis.
            const policyValueStr = convertValue(policy.value);
            const truncatedValue = policyValueStr.length > 256 ?
                `${policyValueStr.substring(0, 256)}\u2026` :
                policyValueStr;
            const valueDisplay = this.shadowRoot.querySelector('.value');
            valueDisplay.textContent = truncatedValue;
            const copyLink = this.shadowRoot.querySelector('.copy .link');
            copyLink.title = loadTimeData.getStringF('policyCopyValue', policy.name);
            const valueRowContentDisplay = this.shadowRoot.querySelector('.value.row .value');
            // Expanded policy value is formatted.
            valueRowContentDisplay.textContent =
                convertValue(policy.value, /*format=*/ true);
            const errorRowContentDisplay = this.shadowRoot.querySelector('.errors.row .value');
            errorRowContentDisplay.textContent = policy.error;
            const warningRowContentDisplay = this.shadowRoot.querySelector('.warnings.row .value');
            warningRowContentDisplay.textContent = policy.warning;
            const infoRowContentDisplay = this.shadowRoot.querySelector('.infos.row .value');
            infoRowContentDisplay.textContent = policy.info;
            const messagesDisplay = this.shadowRoot.querySelector('.messages');
            const errorsNotice = this.hasErrors_ ? loadTimeData.getString('error') : '';
            const deprecationNotice = this.deprecated_ ? loadTimeData.getString('deprecated') : '';
            const futureNotice = this.future_ ? loadTimeData.getString('future') : '';
            const warningsNotice = this.hasWarnings_ ? loadTimeData.getString('warning') : '';
            const conflictsNotice = this.hasConflicts_ && !this.isMergedValue_ ?
                loadTimeData.getString('conflict') :
                '';
            const ignoredNotice = this.policy.ignored ? loadTimeData.getString('ignored') : '';
            let notice = [
                errorsNotice,
                deprecationNotice,
                futureNotice,
                warningsNotice,
                ignoredNotice,
                conflictsNotice,
            ].filter(x => !!x)
                .join(', ') ||
                loadTimeData.getString('ok');
            const supersededNotice = this.hasSuperseded_ && !this.isMergedValue_ ?
                loadTimeData.getString('superseding') :
                '';
            if (supersededNotice) {
                // Include superseded notice regardless of other notices
                notice += `, ${supersededNotice}`;
            }
            messagesDisplay.textContent = notice;
            if (policy.conflicts) {
                policy.conflicts.forEach(conflict => {
                    const row = document.createElement('policy-conflict');
                    row.initialize(conflict, 'conflictValue');
                    row.classList.add('policy-conflict-data');
                    this.shadowRoot.appendChild(row);
                });
            }
            if (policy.superseded) {
                policy.superseded.forEach(superseded => {
                    const row = document.createElement('policy-conflict');
                    row.initialize(superseded, 'supersededValue');
                    row.classList.add('policy-superseded-data');
                    this.shadowRoot.appendChild(row);
                });
            }
        }
        else {
            const messagesDisplay = this.shadowRoot.querySelector('.messages');
            messagesDisplay.textContent = loadTimeData.getString('unset');
        }
    }
    // Copies the policy's value to the clipboard.
    copyValue_() {
        const policyValueDisplay = this.shadowRoot.querySelector('.value.row .value');
        // Select the text that will be copied.
        const selection = window.getSelection();
        const range = window.document.createRange();
        range.selectNodeContents(policyValueDisplay);
        selection.removeAllRanges();
        selection.addRange(range);
        // Copy the policy value to the clipboard.
        navigator.clipboard
            .writeText(policyValueDisplay.innerText)
            .catch(error => {
            console.error('Unable to copy policy value to clipboard:', error);
        });
    }
    // Toggle the visibility of an additional row containing the complete text.
    toggleExpanded() {
        const warningRowDisplay = this.shadowRoot.querySelector('.warnings.row');
        const errorRowDisplay = this.shadowRoot.querySelector('.errors.row');
        const infoRowDisplay = this.shadowRoot.querySelector('.infos.row');
        const valueRowDisplay = this.shadowRoot.querySelector('.value.row');
        // 
        valueRowDisplay.hidden = !valueRowDisplay.hidden;
        this.classList.toggle('expanded', !valueRowDisplay.hidden);
        this.shadowRoot.querySelector('.show-more').hidden =
            !valueRowDisplay.hidden;
        this.shadowRoot.querySelector('.show-less').hidden =
            valueRowDisplay.hidden;
        if (this.hasWarnings_) {
            warningRowDisplay.hidden = !warningRowDisplay.hidden;
        }
        if (this.hasErrors_) {
            errorRowDisplay.hidden = !errorRowDisplay.hidden;
        }
        if (this.hasInfos_) {
            infoRowDisplay.hidden = !infoRowDisplay.hidden;
        }
        this.shadowRoot.querySelectorAll('.policy-conflict-data')
            .forEach(row => row.hidden = !row.hidden);
        this.shadowRoot.querySelectorAll('.policy-superseded-data')
            .forEach(row => row.hidden = !row.hidden);
    }
}
customElements.define('policy-row', PolicyRowElement);
