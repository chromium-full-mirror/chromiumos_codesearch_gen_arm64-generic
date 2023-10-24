// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview An element that lists phones usable as security keys,
    optionally with a drop-down menu for editing or deleting them.
 */
import '../settings_shared.css.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { AnchorAlignment } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './security_keys_phones_list.html.js';
class SecurityKeysPhonesListElement extends PolymerElement {
    static get is() {
        return 'security-keys-phones-list';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            immutable: { type: Boolean, value: false },
            phones: { type: Array, value: [] },
        };
    }
    onDotsClick_(e) {
        this.publicKeyForActionMenu_ =
            e.target.dataset['phonePublicKey'];
        this.shadowRoot.querySelector('cr-action-menu').showAt(e.target, {
            anchorAlignmentY: AnchorAlignment.AFTER_END,
        });
    }
    onEditClick_(e) {
        this.handleClick_(e, 'edit-security-key-phone');
    }
    onDeleteClick_(e) {
        this.handleClick_(e, 'delete-security-key-phone');
    }
    handleClick_(e, eventName) {
        e.stopPropagation();
        this.closePopupMenu_();
        this.dispatchEvent(new CustomEvent(eventName, {
            bubbles: true,
            composed: true,
            detail: this.publicKeyForActionMenu_,
        }));
    }
    closePopupMenu_() {
        this.shadowRoot.querySelector('cr-action-menu').close();
    }
}
customElements.define(SecurityKeysPhonesListElement.is, SecurityKeysPhonesListElement);
