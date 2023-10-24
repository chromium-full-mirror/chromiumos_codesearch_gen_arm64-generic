// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import './print_management_shared.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getMetadataProvider } from './mojo_interface_provider.js';
import { getTemplate } from './print_job_clear_history_dialog.html.js';
/**
 * @fileoverview
 * 'print-job-clear-history-dialog' is a confirmation dialog for clearing the
 * print job history
 */
const PrintJobClearHistoryDialogElementBase = I18nMixin(PolymerElement);
class PrintJobClearHistoryDialogElement extends PrintJobClearHistoryDialogElementBase {
    constructor() {
        super(...arguments);
        this.mojoInterfaceProvider = getMetadataProvider();
    }
    static get is() {
        return 'print-job-clear-history-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            shouldDisableClearButton: {
                type: Boolean,
                value: false,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.$.clearDialog.showModal();
    }
    onCancelButtonClick() {
        this.$.clearDialog.close();
    }
    onClearButtonClick() {
        this.shouldDisableClearButton = true;
        this.mojoInterfaceProvider.deleteAllPrintJobs().then(this.onClearedHistory.bind(this));
    }
    onClearedHistory(clearedHistoryResult) {
        if (clearedHistoryResult.success) {
            this.dispatchEvent(new CustomEvent('all-history-cleared', { bubbles: true, composed: true }));
        }
        // Failed case results in a no op and closes the dialog.
        // |clearedHistoryResult| is temporarily set to false until the policy
        // to control print job history deletions is implemented.
        this.$.clearDialog.close();
    }
}
customElements.define(PrintJobClearHistoryDialogElement.is, PrintJobClearHistoryDialogElement);
