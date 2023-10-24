// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A settings subpage that allows the user to see and manage the
    set of phones that are usable as security keys.
 */
import '../settings_shared.css.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { SecurityKeysPhonesBrowserProxyImpl } from './security_keys_browser_proxy.js';
import { getTemplate } from './security_keys_phones_subpage.html.js';
export class SecurityKeysPhonesSubpageElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.browserProxy_ = SecurityKeysPhonesBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'security-keys-phones-subpage';
    }
    static get template() {
        return getTemplate();
    }
    ready() {
        super.ready();
        this.addEventListener('edit-security-key-phone', this.editPhone_.bind(this));
        this.addEventListener('delete-security-key-phone', this.deletePhone_.bind(this));
        this.browserProxy_.enumerate().then(this.onEnumerateComplete_.bind(this));
    }
    /**
     * Called when the browser has a new set of phone details.
     */
    onEnumerateComplete_([syncedPhones, linkedPhones]) {
        this.syncedPhones_ = syncedPhones;
        this.linkedPhones_ = linkedPhones;
    }
    /**
     * Called when the user clicks "Edit" in a drop-down menu to open the dialog.
     */
    editPhone_(e) {
        this.dialogPublicKey_ = e.detail;
        this.dialogName_ = this.nameFromPublicKey_(e.detail);
        this.showDialog_ = true;
    }
    /**
     * Called when an edit dialog as closed (whether successful or not).
     */
    onDialogClose_() {
        this.showDialog_ = false;
        // The dialog may have renamed a phone so refresh the lists.
        this.browserProxy_.enumerate().then(this.onEnumerateComplete_.bind(this));
    }
    /**
     * Called when the user clicks "Delete" in a drop-down menu to delete a linked
     * phone.
     */
    deletePhone_(e) {
        this.browserProxy_.delete(e.detail).then(this.onEnumerateComplete_.bind(this));
    }
    /**
     * Returns the name of a linked phone given its public key.
     */
    nameFromPublicKey_(publicKey) {
        const matchingPhones = this.linkedPhones_.filter(phone => phone.publicKey === publicKey);
        assert(matchingPhones.length !== 0);
        return matchingPhones[0].name;
    }
}
customElements.define(SecurityKeysPhonesSubpageElement.is, SecurityKeysPhonesSubpageElement);
