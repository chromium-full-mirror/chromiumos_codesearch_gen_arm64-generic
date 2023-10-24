// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isValueEmpty(value) {
    return value === undefined || value === '';
}
/**
 * The base class for data behind an address component. It exposes the `value`
 * property, which is how interface controls (e.g. input) communicate with it.
 */
export class AddressComponentUi {
    constructor(addressFields, originalFields, fieldType, label, additionalClassName = '', isTextarea = false, skipValidation = false, isRequired = false) {
        this.addressFields_ = addressFields;
        this.existingAddress_ = originalFields !== undefined;
        this.originalValue_ = originalFields?.get(fieldType);
        this.fieldType_ = fieldType;
        this.label = label;
        this.additionalClassName = additionalClassName;
        this.isTextarea = isTextarea;
        this.isRequired = isRequired;
        this.skipValidation_ = skipValidation;
        this.isValidatable_ = false;
    }
    /**
     * Being validatable for an address component means that its invalid state
     * is visible to the user. Having a component not validatable initially
     * (before any interactions with controls) allows less aggressive validation
     * experience for the user.
     */
    get isValidatable() {
        return this.isValidatable_;
    }
    get isValid() {
        if (this.skipValidation_) {
            return true;
        }
        if (this.existingAddress_) {
            // "dont make it worse" validation for existing addresses:
            // consider a field valid as long as it is equal to the original value,
            // whether it is valid or not.
            if (this.originalValue_ === this.value ||
                (isValueEmpty(this.originalValue_) && isValueEmpty(this.value))) {
                return true;
            }
        }
        return !this.isRequired || !!this.value;
    }
    get value() {
        return this.addressFields_.get(this.fieldType_);
    }
    set value(value) {
        const changed = value !== this.value;
        this.addressFields_.set(this.fieldType_, value);
        if (changed) {
            this.onValueUpdateListener?.();
        }
    }
    get hasValue() {
        return !isValueEmpty(this.value);
    }
    get fieldType() {
        return this.fieldType_;
    }
    makeValidatable() {
        this.isValidatable_ = true;
    }
}
