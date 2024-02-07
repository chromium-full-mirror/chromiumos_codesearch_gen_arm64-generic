// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './consumer_auto_update_toggle_dialog.html.js';
export class SettingsConsumerAutoUpdateToggleDialogElement extends PolymerElement {
    static get is() {
        return 'settings-consumer-auto-update-toggle-dialog';
    }
    static get template() {
        return getTemplate();
    }
    connectedCallback() {
        super.connectedCallback();
        this.$.dialog.showModal();
    }
    onTurnOffClick_() {
        this.dispatchEvent(new CustomEvent('set-consumer-auto-update', {
            bubbles: true,
            composed: true,
            detail: {
                item: false,
            },
        }));
        this.$.dialog.close();
    }
    onKeepUpdatesClick_() {
        this.dispatchEvent(new CustomEvent('set-consumer-auto-update', {
            bubbles: true,
            composed: true,
            detail: {
                item: true,
            },
        }));
        this.$.dialog.close();
    }
}
customElements.define(SettingsConsumerAutoUpdateToggleDialogElement.is, SettingsConsumerAutoUpdateToggleDialogElement);
