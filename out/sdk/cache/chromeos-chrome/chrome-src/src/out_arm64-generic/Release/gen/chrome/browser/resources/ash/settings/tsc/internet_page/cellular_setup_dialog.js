// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'os-settings-cellular-setup-dialog' embeds the <cellular-setup>
 * that is shared with OOBE in a dialog with OS Settings stylizations.
 */
import 'chrome://resources/ash/common/cellular_setup/cellular_setup.js';
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/ash/common/cr_elements/cr_shared_vars.css.js';
import '../settings_shared.css.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './cellular_setup_dialog.html.js';
import { CellularSetupSettingsDelegate } from './cellular_setup_settings_delegate.js';
const OsSettingsCellularSetupDialogElementBase = I18nMixin(PolymerElement);
export class OsSettingsCellularSetupDialogElement extends OsSettingsCellularSetupDialogElementBase {
    static get is() {
        return 'os-settings-cellular-setup-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Name of cellular dialog page to be selected.
             */
            pageName: String,
            delegate_: Object,
            psimBanner_: {
                type: String,
            },
            dialogHeader_: {
                type: String,
            },
        };
    }
    constructor() {
        super();
        this.delegate_ = new CellularSetupSettingsDelegate();
    }
    ready() {
        super.ready();
        this.addEventListener('exit-cellular-setup', this.onExitCellularSetup_);
    }
    connectedCallback() {
        super.connectedCallback();
        this.$.dialog.showModal();
    }
    onExitCellularSetup_() {
        this.$.dialog.close();
    }
    shouldShowPsimBanner_() {
        return !!this.psimBanner_;
    }
    getDialogHeader_() {
        if (this.dialogHeader_) {
            return this.dialogHeader_;
        }
        return this.i18n('cellularSetupDialogTitle');
    }
}
customElements.define(OsSettingsCellularSetupDialogElement.is, OsSettingsCellularSetupDialogElement);
