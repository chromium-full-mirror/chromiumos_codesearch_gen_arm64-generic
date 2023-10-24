// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-crostini-import-confirmation-dialog' is a component
 * warning the user that importing a container overrides the existing container.
 * By clicking 'Continue', the user agrees to start the import.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import '../settings_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { CrostiniBrowserProxyImpl } from './crostini_browser_proxy.js';
import { getTemplate } from './crostini_import_confirmation_dialog.html.js';
class SettingsCrostiniImportConfirmationDialogElement extends PolymerElement {
    static get is() {
        return 'settings-crostini-import-confirmation-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            importContainerId: {
                type: Object,
            },
        };
    }
    constructor() {
        super();
        this.browserProxy_ = CrostiniBrowserProxyImpl.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        this.$.dialog.showModal();
    }
    onCancelClick_() {
        this.$.dialog.close();
    }
    onContinueClick_() {
        this.browserProxy_.importCrostiniContainer(this.importContainerId);
        this.$.dialog.close();
    }
}
customElements.define(SettingsCrostiniImportConfirmationDialogElement.is, SettingsCrostiniImportConfirmationDialogElement);
