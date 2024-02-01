// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'os-settings-sanitize-dialog' is a dialog shown to request confirmation
 * from the user for reverting to safe settings (aka sanitize).
 */
import 'chrome://resources/cr_components/localized_link/localized_link.js';
import '../settings_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { recordSettingChange } from '../metrics_recorder.js';
import { OsResetBrowserProxyImpl } from './os_reset_browser_proxy.js';
import { getTemplate } from './os_sanitize_dialog.html.js';
export class OsSettingsSanitizeDialogElement extends PolymerElement {
    static get is() {
        return 'os-settings-sanitize-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {};
    }
    constructor() {
        super();
        this.osResetBrowserProxy_ = OsResetBrowserProxyImpl.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        this.osResetBrowserProxy_.onShowSanitizeDialog();
        this.$.dialog.showModal();
    }
    onAbortSanitize() {
        this.$.dialog.close();
    }
    onPerformSanitize() {
        recordSettingChange();
        this.osResetBrowserProxy_.performSanitizeSettings();
        if (this.$.dialog.open) {
            this.$.dialog.close();
        }
    }
}
customElements.define(OsSettingsSanitizeDialogElement.is, OsSettingsSanitizeDialogElement);
