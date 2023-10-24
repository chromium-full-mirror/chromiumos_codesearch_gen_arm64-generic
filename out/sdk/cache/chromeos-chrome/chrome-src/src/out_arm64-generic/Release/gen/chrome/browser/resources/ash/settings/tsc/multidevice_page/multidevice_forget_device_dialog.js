// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-multidevice-forget-device-dialog' is the dialog used to forget a
 * connected android phone.
 */
import '../settings_shared.css.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './multidevice_forget_device_dialog.html.js';
class SettingsMultideviceForgetDeviceDialogElement extends PolymerElement {
    static get is() {
        return 'settings-multidevice-forget-device-dialog';
    }
    static get template() {
        return getTemplate();
    }
    closeDialog_() {
        this.$.forgetDeviceDialog.close();
    }
    onConfirmClick_() {
        const forgetDeviceRequestedEvent = new CustomEvent('forget-device-requested', {
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(forgetDeviceRequestedEvent);
        this.closeDialog_();
    }
}
customElements.define(SettingsMultideviceForgetDeviceDialogElement.is, SettingsMultideviceForgetDeviceDialogElement);
