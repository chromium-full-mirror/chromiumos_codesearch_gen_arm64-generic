// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../strings.m.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { CustomElement } from 'chrome://resources/js/custom_element.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { LevelNamesToValues, PolicyLevel, PolicyScope, PolicySource, Presets, ScopeNamesToValues, SourceNamesToValues } from './policy_test_browser_proxy.js';
import { getTemplate } from './policy_test_row.html.js';
export class PolicyTestRowElement extends CustomElement {
    hasAnError_ = false;
    errorEvents_ = new EventTracker();
    inputType_;
    schema_;
    static get template() {
        return getTemplate();
    }
    constructor() {
        super();
    }
    getErrorState() {
        return this.hasAnError_;
    }
    setSchema(schema) {
        const hadSchema = !!this.schema_;
        this.schema_ = schema;
        if (hadSchema) {
            this.updatePolicyNamespaces_();
            this.updatePolicyNames();
        }
        else {
            this.initialize_();
        }
    }
    // Event listener function that clears the policy name when the namespace is
    // changed.
    onPolicyNamespaceChanged_(_) {
        this.updatePolicyNames();
        const nameInput = this.getRequiredElement('.name');
        nameInput.value = '';
        this.changeInputType_(this.getRequiredElement('.namespace'), nameInput, false);
    }
    // Event listener function for changing the input type when a policy name is
    // selected.
    onPolicyNameChanged_(_) {
        this.changeInputType_(this.getRequiredElement('.namespace'), this.getRequiredElement('.name'));
    }
    changeInputType_(namespaceInput, nameInput, updateErrorState = true) {
        assert(this.schema_);
        assert(namespaceInput.value in this.schema_);
        // Return if invalid policy name
        if (!this.isValidPolicyName_(namespaceInput.value, nameInput.value)) {
            if (updateErrorState) {
                this.setInErrorState_(nameInput);
            }
            return;
        }
        const ns = this.getNamespace();
        const newValueType = this.schema_[ns][nameInput.value];
        const inputElement = this.getRequiredElement('.value');
        const inputElementCell = inputElement.parentNode;
        inputElement.remove();
        switch (newValueType) {
            case 'boolean':
                this.inputType_ = Boolean;
                const boolDropdown = document.createElement('select');
                boolDropdown.classList.add('value');
                // By default, have labels true/false for boolean policies, but use
                // enable/disable or allow/disallow if the policy name contains 'enable'
                // or 'allow' respectively.
                const boolOptions = {
                    'true': ['True', 'Enabled', 'Allow'],
                    'false': ['False', 'Disabled', 'Disallow'],
                };
                let boolOptionIndex = 0;
                const policyNameLower = nameInput.value.toLowerCase();
                if (policyNameLower.includes('enable')) {
                    boolOptionIndex = 1;
                }
                else if (policyNameLower.includes('allow')) {
                    boolOptionIndex = 2;
                }
                const optionsArray = [
                    boolOptions['true'][boolOptionIndex],
                    boolOptions['false'][boolOptionIndex],
                ];
                optionsArray.forEach((option) => {
                    const optionElement = document.createElement('option');
                    optionElement.textContent = option;
                    optionElement.value = String(boolOptions['true'].includes(option));
                    boolDropdown.appendChild(optionElement);
                });
                inputElementCell.appendChild(boolDropdown);
                break;
            case 'integer':
                this.inputType_ = Number;
                const intInput = document.createElement('input');
                intInput.type = 'number';
                intInput.classList.add('value');
                inputElementCell.appendChild(intInput);
                break;
            case 'number':
                this.inputType_ = Number;
                const numInput = document.createElement('input');
                numInput.type = 'number';
                numInput.step = 'any';
                numInput.classList.add('value');
                inputElementCell.appendChild(numInput);
                break;
            case 'string':
                this.inputType_ = String;
                const strInput = document.createElement('input');
                strInput.type = 'text';
                strInput.classList.add('value');
                inputElementCell.appendChild(strInput);
                break;
            case 'list':
                this.inputType_ = Array;
                const listInput = document.createElement('input');
                listInput.type = 'text';
                listInput.classList.add('value');
                inputElementCell.appendChild(listInput);
                break;
            case 'dictionary':
                this.inputType_ = Object;
                const dictInput = document.createElement('input');
                dictInput.type = 'text';
                dictInput.classList.add('value');
                inputElementCell.appendChild(dictInput);
                break;
            default:
                assertNotReached();
        }
    }
    // Helper method for disabling/enabling the source, scope and level dropdowns
    // if disabled is true/false and setting their values to those given in
    // presetAttributes.
    changeAttributesFromPreset_(disabled, presetAttributes) {
        ['.source', '.scope', '.level'].forEach((attributeSelector) => {
            const attributeDropdown = this.getRequiredElement(attributeSelector);
            attributeDropdown.disabled = disabled;
            if (presetAttributes) {
                attributeDropdown.value = String(Object.values(presetAttributes)[Object.keys(presetAttributes)
                    .indexOf(attributeSelector.substring(1))]);
            }
        });
    }
    // Event listener method for changing the selected values in the source, scope
    // and level dropdowns when the user selects a preset.
    changePreset_(event) {
        const selectElement = event.target;
        const presetToApply = parseInt(selectElement.value);
        switch (presetToApply) {
            case Presets.PRESET_CUSTOM:
                this.changeAttributesFromPreset_(false);
                break;
            case Presets.PRESET_CBCM:
                this.changeAttributesFromPreset_(true, {
                    source: PolicySource.SOURCE_CLOUD_VAL,
                    scope: PolicyScope.SCOPE_DEVICE_VAL,
                    level: PolicyLevel.LEVEL_MANDATORY_VAL,
                });
                break;
            case Presets.PRESET_LOCAL_MACHINE:
                this.changeAttributesFromPreset_(true, {
                    source: PolicySource.SOURCE_PLATFORM_VAL,
                    scope: PolicyScope.SCOPE_DEVICE_VAL,
                    level: PolicyLevel.LEVEL_MANDATORY_VAL,
                });
                break;
            case Presets.PRESET_CLOUD_ACCOUNT:
                this.changeAttributesFromPreset_(true, {
                    source: PolicySource.SOURCE_CLOUD_VAL,
                    scope: PolicyScope.SCOPE_USER_VAL,
                    level: PolicyLevel.LEVEL_MANDATORY_VAL,
                });
                break;
            default:
                assertNotReached();
        }
    }
    // Function that verifies policy name is a valid.
    isValidPolicyName_(policyNamespace, policyName) {
        if (this.schema_ && policyNamespace in this.schema_ &&
            policyName in this.schema_[policyNamespace]) {
            return true;
        }
        else {
            return false;
        }
    }
    getNamespace() {
        return this.getRequiredElement('.namespace').value;
    }
    // Updates the policy namespaces <select> to match extensions from the schema.
    updatePolicyNamespaces_() {
        assert(this.schema_);
        const policyNamespaceInput = this.getRequiredElement('.namespace');
        assert(policyNamespaceInput.value in this.schema_);
        // Clear old values.
        while (policyNamespaceInput.firstChild) {
            policyNamespaceInput.removeChild(policyNamespaceInput.firstChild);
        }
        // Populate with extension IDs, keep sorted. 'Chrome' is always the first
        // element for browser policies.
        const sortedNamespacesWithChromeFirst = Object.keys(this.schema_).toSorted((a, b) => {
            if (a === 'chrome') {
                return -1;
            }
            if (b === 'chrome') {
                return 1;
            }
            return a < b ? -1 : (b < a ? 1 : 0);
        });
        for (const ns of sortedNamespacesWithChromeFirst) {
            const currOption = document.createElement('option');
            currOption.textContent = ns === 'chrome' ? 'Chrome' : ns;
            currOption.value = ns;
            policyNamespaceInput.appendChild(currOption);
        }
    }
    // Updates the policy names <datalist> to match the current namespace.
    updatePolicyNames() {
        assert(this.schema_);
        const ns = this.getNamespace();
        const policyNameDatalist = this.getRequiredElement('#policy-name-list');
        // Clear old values.
        while (policyNameDatalist.firstChild) {
            policyNameDatalist.removeChild(policyNameDatalist.firstChild);
        }
        // Populate with new values.
        for (const name in this.schema_[ns]) {
            const currOption = document.createElement('option');
            currOption.textContent = name;
            policyNameDatalist.appendChild(currOption);
        }
        const policyNameInput = this.getRequiredElement('.name');
        if (policyNameInput.value) {
            this.changeInputType_(this.getRequiredElement('.namespace'), policyNameInput);
        }
    }
    // Function that initializes the policy selection dropdowns and delete
    // button for the current row.
    initialize_() {
        assert(this.schema_);
        const policyNamespaceInput = this.getRequiredElement('.namespace');
        policyNamespaceInput.addEventListener('change', this.onPolicyNamespaceChanged_.bind(this));
        const policyNameInput = this.getRequiredElement('.name');
        policyNameInput.addEventListener('change', this.onPolicyNameChanged_.bind(this));
        // Populate the policy namespace & name dropdowns with <option>s.
        this.updatePolicyNamespaces_();
        this.updatePolicyNames();
        // Add an event listener for this row's delete button.
        this.getRequiredElement('.remove-btn')
            .addEventListener('click', this.remove.bind(this));
        // Add event listeners for this row's preset select options.
        const policyPresetDropdown = this.getRequiredElement('.preset');
        policyPresetDropdown.addEventListener('change', this.changePreset_.bind(this));
        // Set the value attributes of the policy type and preset dropdown options.
        const idToValue = [
            { id: 'scopeUser', value: PolicyScope.SCOPE_USER_VAL },
            { id: 'scopeDevice', value: PolicyScope.SCOPE_DEVICE_VAL },
            { id: 'levelRecommended', value: PolicyLevel.LEVEL_RECOMMENDED_VAL },
            { id: 'levelMandatory', value: PolicyLevel.LEVEL_MANDATORY_VAL },
            {
                id: 'sourceEnterpriseDefault',
                value: PolicySource.SOURCE_ENTERPRISE_DEFAULT_VAL,
            },
            { id: 'sourceCommandLine', value: PolicySource.SOURCE_COMMAND_LINE_VAL },
            { id: 'sourceCloud', value: PolicySource.SOURCE_CLOUD_VAL },
            // 
            {
                id: 'sourceActiveDirectory',
                value: PolicySource.SOURCE_ACTIVE_DIRECTORY_VAL,
            },
            // 
            { id: 'sourcePlatform', value: PolicySource.SOURCE_PLATFORM_VAL },
            { id: 'sourceMerged', value: PolicySource.SOURCE_MERGED_VAL },
            // 
            { id: 'sourceCloudFromAsh', value: PolicySource.SOURCE_CLOUD_FROM_ASH_VAL },
            {
                id: 'sourceRestrictedManagedGuestSessionOverride',
                value: PolicySource.SOURCE_RESTRICTED_MANAGED_GUEST_SESSION_OVERRIDE_VAL,
            },
            // 
            { id: 'custom', value: Presets.PRESET_CUSTOM },
            { id: 'cbcm', value: Presets.PRESET_CBCM },
            { id: 'localMachine', value: Presets.PRESET_LOCAL_MACHINE },
            { id: 'cloudAccount', value: Presets.PRESET_CLOUD_ACCOUNT },
        ];
        for (const pair of idToValue) {
            this.getRequiredElement(`#${pair.id}`)
                .setAttribute('value', String(pair.value));
        }
    }
    // Class method for setting the name, source, scope, level and value cells for
    // this row.
    setInitialValues(initialValues) {
        const policyNamespaceInput = this.getRequiredElement('.namespace');
        const policyNameInput = this.getRequiredElement('.name');
        const policySourceInput = this.getRequiredElement('.source');
        const policyLevelInput = this.getRequiredElement('.level');
        const policyScopeInput = this.getRequiredElement('.scope');
        policyNamespaceInput.value = String(initialValues.namespace);
        this.updatePolicyNames();
        policySourceInput.value = String(initialValues.source);
        policyLevelInput.value = String(initialValues.level);
        policyScopeInput.value = String(initialValues.scope);
        // Change input type according to policy, set value to new input
        policyNameInput.value = initialValues.name;
        this.changeInputType_(policyNamespaceInput, policyNameInput);
        const policyValueInput = this.getRequiredElement('.value');
        if (this.inputType_ === String) {
            initialValues.value = this.trimSurroundingQuotes_(initialValues.value);
        }
        policyValueInput.value = JSON.stringify(initialValues.value);
    }
    // Event listener function for setting the select element background back to
    // white after being highlighted in red, and then clicked by the user.
    resetErrorState_(event) {
        event.target.classList.remove('error');
        this.errorEvents_.remove(event.target);
        this.hasAnError_ = false;
    }
    // Helper method for highlighting an element in red and adding an event
    // listener to get rid of the element highlight on focus, for elements with
    // invalid input.
    setInErrorState_(inputElement) {
        inputElement.classList.add('error');
        this.errorEvents_.add(inputElement, 'focus', this.resetErrorState_.bind(this));
        this.hasAnError_ = true;
    }
    // Helper method for trimming the surrounding double quotes in the string, if
    // any are present.
    trimSurroundingQuotes_(stringToTrim) {
        if (stringToTrim.length < 2) {
            return stringToTrim;
        }
        stringToTrim.trim();
        if (stringToTrim.charAt(0) === '"' &&
            stringToTrim.charAt(stringToTrim.length - 1) === '"') {
            stringToTrim = stringToTrim.substring(1, stringToTrim.length - 1);
        }
        stringToTrim.trim();
        return stringToTrim;
    }
    // Class method for returning the value for this policy (the value in the
    // value cell of this row).
    getPolicyValue() {
        const inputElement = this.getRequiredElement('.value');
        // If the policy expects a string, any input is valid.
        if (this.inputType_ === String) {
            return inputElement.value.toString();
        }
        try {
            const obj = JSON.parse(inputElement.value);
            if (obj !== undefined && obj.constructor === this.inputType_) {
                return obj;
            }
            throw new Error();
        }
        catch {
            this.setInErrorState_(inputElement);
        }
        return '';
    }
    getPolicyNamespace() {
        assert(this.schema_);
        const namespaceInput = this.getRequiredElement('.namespace');
        if (namespaceInput.value in this.schema_) {
            return namespaceInput.value;
        }
        else {
            this.setInErrorState_(namespaceInput);
            return '';
        }
    }
    // Class method for returning the name for this policy (the value in the
    // name cell of this row)
    getPolicyName() {
        const namespaceInput = this.getRequiredElement('.namespace');
        const nameInput = this.getRequiredElement('.name');
        if (this.isValidPolicyName_(namespaceInput.value, nameInput.value)) {
            return nameInput.value;
        }
        else {
            this.setInErrorState_(nameInput);
            return '';
        }
    }
    // Class method for returning the level, source or scope set in this
    // row.
    getPolicyAttribute(attributeName) {
        return this.getRequiredElement(`.${attributeName}`)
            .value;
    }
    // Class method for returning the string value of the given attribute in this
    // row. Should only be used for enum attributes (level, scope and source).
    getStringPolicyAttribute(attributeName) {
        const intVal = parseInt(String(this.getPolicyAttribute(`${attributeName}`)));
        switch (attributeName) {
            case 'level':
                return Object.keys(LevelNamesToValues)
                    .find(name => LevelNamesToValues[name] === intVal);
            case 'scope':
                return Object.keys(ScopeNamesToValues)
                    .find(name => ScopeNamesToValues[name] === intVal);
            case 'source':
                return Object.keys(SourceNamesToValues)
                    .find(name => SourceNamesToValues[name] === intVal);
            default:
                assertNotReached();
        }
    }
}
customElements.define('policy-test-row', PolicyTestRowElement);
