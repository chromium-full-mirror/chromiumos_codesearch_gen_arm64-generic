// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { getTemplate } from './passpoint_remove_dialog.html.js';
const PasspointRemoveDialogElementBase = I18nMixin(PolymerElement);
export class PasspointRemoveDialogElement extends PasspointRemoveDialogElementBase {
    static get is() {
        return 'passpoint-remove-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {};
    }
    constructor() {
        super();
        this.isPasspointEnabled_ = loadTimeData.valueExists('isPasspointEnabled') &&
            loadTimeData.getBoolean('isPasspointEnabled');
        this.isPasspointSettingsEnabled_ =
            loadTimeData.valueExists('isPasspointSettingsEnabled') &&
                loadTimeData.getBoolean('isPasspointSettingsEnabled');
    }
    open() {
        const dialog = this.getDialog_();
        if (!dialog.open) {
            dialog.showModal();
        }
        this.shadowRoot.querySelector('#confirmButton').focus();
    }
    close() {
        const dialog = this.getDialog_();
        if (dialog.open) {
            dialog.close();
        }
    }
    getDialog_() {
        return castExists(this.shadowRoot.querySelector('#dialog'));
    }
    onCancelClick_() {
        this.getDialog_().cancel();
    }
    onConfirmClick_() {
        const event = new CustomEvent('confirm', { bubbles: true, composed: true });
        this.dispatchEvent(event);
    }
    getDialogTitle_() {
        if (this.isPasspointSettingsEnabled_) {
            return this.i18n('networkSectionPasspointGoToSubscriptionTitle');
        }
        return this.i18n('networkSectionPasspointRemovalTitle');
    }
    hasDescription_() {
        return this.isPasspointEnabled_ && !this.isPasspointSettingsEnabled_;
    }
    getDialogInformation_() {
        if (this.isPasspointSettingsEnabled_) {
            return this.i18n('networkSectionPasspointGoToSubscriptionInformation');
        }
        return this.i18n('networkSectionPasspointRemovalInformation');
    }
    getConfirmButtonLabel_() {
        if (this.isPasspointSettingsEnabled_) {
            return this.i18n('networkSectionPasspointGoToSubscriptionButtonLabel');
        }
        return this.i18n('confirm');
    }
    getConfirmButtonA11yLabel_() {
        if (this.isPasspointSettingsEnabled_) {
            return this.i18n('passpointRemoveGoToSubscriptionButtonA11yLabel');
        }
        return this.i18n('passpointRemoveConfirmA11yLabel');
    }
}
customElements.define(PasspointRemoveDialogElement.is, PasspointRemoveDialogElement);
