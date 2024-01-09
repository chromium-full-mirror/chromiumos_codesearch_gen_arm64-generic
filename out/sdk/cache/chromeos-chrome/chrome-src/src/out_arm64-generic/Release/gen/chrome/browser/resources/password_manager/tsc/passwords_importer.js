// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/md_select.css.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import './site_favicon.js';
import './dialogs/password_preview_item.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordManagerImpl } from './password_manager_proxy.js';
import { getTemplate } from './passwords_importer.html.js';
import { Page, Router } from './router.js';
var DialogState;
(function (DialogState) {
    DialogState[DialogState["NO_DIALOG"] = 0] = "NO_DIALOG";
    DialogState[DialogState["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    DialogState[DialogState["STORE_PICKER"] = 2] = "STORE_PICKER";
    DialogState[DialogState["SUCCESS"] = 3] = "SUCCESS";
    DialogState[DialogState["ERROR"] = 4] = "ERROR";
    DialogState[DialogState["ALREADY_ACTIVE"] = 5] = "ALREADY_ACTIVE";
    DialogState[DialogState["CONFLICTS"] = 6] = "CONFLICTS";
})(DialogState || (DialogState = {}));
/**
 * Should be kept in sync with
 * |password_manager::metrics_util::PasswordsImportDesktopInteractions|.
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 */
var PasswordsImportDesktopInteractions;
(function (PasswordsImportDesktopInteractions) {
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["DIALOG_OPENED_FROM_THREE_DOT_MENU"] = 0] = "DIALOG_OPENED_FROM_THREE_DOT_MENU";
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["DIALOG_OPENED_FROM_EMPTY_STATE"] = 1] = "DIALOG_OPENED_FROM_EMPTY_STATE";
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["CANCELED_BEFORE_FILE_SELECT"] = 2] = "CANCELED_BEFORE_FILE_SELECT";
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["UPM_STORE_PICKER_OPENED"] = 3] = "UPM_STORE_PICKER_OPENED";
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["UPM_FILE_SELECT_LAUNCHED"] = 4] = "UPM_FILE_SELECT_LAUNCHED";
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["UPM_VIEW_PASSWORDS_CLICKED"] = 5] = "UPM_VIEW_PASSWORDS_CLICKED";
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["CONFLICTS_CANCELED"] = 6] = "CONFLICTS_CANCELED";
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["CONFLICTS_REAUTH_FAILED"] = 7] = "CONFLICTS_REAUTH_FAILED";
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["CONFLICTS_SKIP_CLICKED"] = 8] = "CONFLICTS_SKIP_CLICKED";
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["CONFLICTS_REPLACE_CLICKED"] = 9] = "CONFLICTS_REPLACE_CLICKED";
    // Must be last.
    PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["COUNT"] = 10] = "COUNT";
})(PasswordsImportDesktopInteractions || (PasswordsImportDesktopInteractions = {}));
function recordPasswordsImportInteraction(interaction) {
    chrome.metricsPrivate.recordEnumerationValue('PasswordManager.Import.DesktopInteractions', interaction, PasswordsImportDesktopInteractions.COUNT);
}
const PasswordsImporterElementBase = I18nMixin(PolymerElement);
export class PasswordsImporterElement extends PasswordsImporterElementBase {
    constructor() {
        super(...arguments);
        this.dialogState_ = DialogState.NO_DIALOG;
        this.results_ = null;
        this.passwordManager_ = PasswordManagerImpl.getInstance();
    }
    static get is() {
        return 'passwords-importer';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            dialogState_: Number,
            dialogStateEnum_: {
                type: Object,
                value: DialogState,
                readOnly: true,
            },
            storeOptionEnum_: {
                type: Object,
                value: chrome.passwordsPrivate.PasswordStoreSet,
                readOnly: true,
            },
            selectedStoreOption_: String,
            results_: Object,
            successDescription_: String,
            failedImportsSummary_: String,
            rowsWithUnknownErrorsSummary_: String,
            conflictsDialogTitle_: String,
            conflicts_: {
                type: Array,
                value: [],
            },
            conflictsSelectedForReplace_: {
                type: Array,
                value: [],
            },
            showRowsWithUnknownErrorsSummary_: {
                type: Boolean,
                value: false,
            },
            bannerDescription_: {
                type: String,
                computed: 'computeBannerDescription_(isUserSyncingPasswords,' +
                    'isAccountStoreUser, accountEmail)',
            },
        };
    }
    static get observers() {
        return [
            'updateDefaultStore_(isAccountStoreUser)',
            'updatePasswordsSavedToAccount_(isUserSyncingPasswords)',
        ];
    }
    launchImport() {
        recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.DIALOG_OPENED_FROM_EMPTY_STATE);
        this.dialogState_ = DialogState.IN_PROGRESS;
        // Timeout is needed to allow Polymer to render the Settings page before the
        // system file picker has been opened.
        setTimeout(() => {
            if (this.isAccountStoreUser) {
                this.dialogState_ = DialogState.STORE_PICKER;
            }
            else {
                this.selectFileHelper_();
            }
        }, 200);
    }
    updateDefaultStore_() {
        if (this.isAccountStoreUser) {
            PasswordManagerImpl.getInstance().isAccountStoreDefault().then(isAccountStoreDefault => {
                this.selectedStoreOption_ = isAccountStoreDefault ?
                    chrome.passwordsPrivate.PasswordStoreSet.ACCOUNT :
                    chrome.passwordsPrivate.PasswordStoreSet.DEVICE;
            });
        }
    }
    updatePasswordsSavedToAccount_() {
        if (this.isUserSyncingPasswords) {
            this.passwordsSavedToAccount_ = true;
        }
        else {
            this.passwordsSavedToAccount_ = false;
        }
    }
    isState_(state) {
        return this.dialogState_ === state;
    }
    computeBannerDescription_() {
        if (this.isAccountStoreUser) {
            return this.i18n('importPasswordsGenericDescription');
        }
        if (this.isUserSyncingPasswords) {
            return this.i18n('importPasswordsDescriptionAccount', this.i18n('localPasswordManager'), this.accountEmail);
        }
        return this.i18n('importPasswordsDescriptionDevice');
    }
    onBannerClick_() {
        if (this.isAccountStoreUser && this.isState_(DialogState.NO_DIALOG)) {
            recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.UPM_STORE_PICKER_OPENED);
            this.dialogState_ = DialogState.STORE_PICKER;
        }
    }
    closeDialog_() {
        this.dialogState_ = DialogState.NO_DIALOG;
        // TODO(crbug/1432962): Make sure that focus behaves correctly when the
        // dialog is closed.
    }
    async resetImporter() {
        let deleteFile = false;
        if (this.isState_(DialogState.SUCCESS) &&
            !this.shouldHideDeleteFileOption_()) {
            // Trigger the file deletion if checkbox is ticked in SUCCESS (with no
            // errors) state.
            const deleteFileOption = this.shadowRoot.querySelector('#deleteFileOption');
            assert(deleteFileOption);
            deleteFile = deleteFileOption.checked;
            chrome.metricsPrivate.recordBoolean('PasswordManager.Import.FileDeletionSelected', deleteFile);
        }
        await this.passwordManager_.resetImporter(deleteFile);
    }
    async onCloseClick_() {
        if (this.isState_(DialogState.CONFLICTS)) {
            recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.CONFLICTS_CANCELED);
        }
        await this.resetImporter();
        this.closeDialog_();
    }
    async onViewPasswordsClick_() {
        recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.UPM_VIEW_PASSWORDS_CLICKED);
        await this.resetImporter();
        this.closeDialog_();
        Router.getInstance().navigateTo(Page.PASSWORDS);
    }
    async selectFileHelper_() {
        // Clear selected rows from previous import, so it won’t affect the
        // following import.
        this.conflictsSelectedForReplace_ = [];
        this.dialogState_ = DialogState.IN_PROGRESS;
        // For "non-account-store-users" users passwords are stored in the "profile"
        // (DEVICE) store.
        let destinationStore = chrome.passwordsPrivate.PasswordStoreSet.DEVICE;
        if (this.isAccountStoreUser) {
            const storePicker = this.shadowRoot.querySelector('#storePicker');
            assert(storePicker);
            this.selectedStoreOption_ = storePicker.value;
            this.passwordsSavedToAccount_ = this.selectedStoreOption_ ===
                chrome.passwordsPrivate.PasswordStoreSet.ACCOUNT;
            if (this.passwordsSavedToAccount_) {
                destinationStore = chrome.passwordsPrivate.PasswordStoreSet.ACCOUNT;
            }
        }
        this.results_ =
            await this.passwordManager_.importPasswords(destinationStore);
        await this.processResults_();
    }
    async onSelectFileClick_() {
        recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.UPM_FILE_SELECT_LAUNCHED);
        await this.selectFileHelper_();
    }
    async continueImportHelper_(selectedIds) {
        this.dialogState_ = DialogState.IN_PROGRESS;
        // Close the dialog while import is in progress.
        this.results_ = await this.passwordManager_.continueImport(selectedIds);
        if (this.results_.status ===
            chrome.passwordsPrivate.ImportResultsStatus.DISMISSED) {
            recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.CONFLICTS_REAUTH_FAILED);
            // When re-auth fails, restore the conflicts dialog.
            this.dialogState_ = DialogState.CONFLICTS;
            return;
        }
        await this.processResults_();
    }
    async onSkipClick_() {
        recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.CONFLICTS_SKIP_CLICKED);
        await this.continueImportHelper_(/*selectedIds=*/ []);
    }
    async onReplaceClick_() {
        recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.CONFLICTS_REPLACE_CLICKED);
        await this.continueImportHelper_(this.conflictsSelectedForReplace_);
    }
    isPreviewItemChecked_(id) {
        return this.conflictsSelectedForReplace_.includes(id);
    }
    /**
     * Handler for ticking conflicting password checkbox.
     */
    onPasswordSelectedChange_() {
        this.conflictsSelectedForReplace_ =
            Array.from(this.shadowRoot.querySelectorAll('password-preview-item'))
                .filter(item => item.checked)
                .map(item => item.passwordId);
    }
    shouldDisableReplace_() {
        return !this.conflictsSelectedForReplace_.length;
    }
    async processResults_() {
        assert(this.results_);
        switch (this.results_.status) {
            case chrome.passwordsPrivate.ImportResultsStatus.SUCCESS:
                await this.handleSuccess_();
                return;
            case chrome.passwordsPrivate.ImportResultsStatus.MAX_FILE_SIZE:
            case chrome.passwordsPrivate.ImportResultsStatus.IO_ERROR:
            case chrome.passwordsPrivate.ImportResultsStatus.UNKNOWN_ERROR:
            case chrome.passwordsPrivate.ImportResultsStatus.NUM_PASSWORDS_EXCEEDED:
            case chrome.passwordsPrivate.ImportResultsStatus.BAD_FORMAT:
                this.dialogState_ = DialogState.ERROR;
                break;
            case chrome.passwordsPrivate.ImportResultsStatus.CONFLICTS:
                this.conflictsDialogTitle_ =
                    await PluralStringProxyImpl.getInstance().getPluralString('importPasswordsConflictsTitle', this.results_.displayedEntries.length);
                this.conflicts_ = this.results_.displayedEntries;
                this.dialogState_ = DialogState.CONFLICTS;
                break;
            case chrome.passwordsPrivate.ImportResultsStatus.IMPORT_ALREADY_ACTIVE:
                this.dialogState_ = DialogState.ALREADY_ACTIVE;
                break;
            case chrome.passwordsPrivate.ImportResultsStatus.DISMISSED:
                this.dialogState_ = DialogState.NO_DIALOG;
                break;
            default:
                assertNotReached();
        }
    }
    getFailedImportsWithKnownErrors_() {
        assert(this.results_);
        return this.results_.displayedEntries.filter((entry) => entry.status !==
            chrome.passwordsPrivate.ImportEntryStatus.UNKNOWN_ERROR);
    }
    async handleSuccess_() {
        assert(this.results_);
        if (this.results_.displayedEntries.length) {
            const rowsWithUnknownErrorCount = this.results_.displayedEntries
                .filter((entry) => entry.status ===
                chrome.passwordsPrivate.ImportEntryStatus.UNKNOWN_ERROR)
                .length;
            this.failedImportsSummary_ =
                await PluralStringProxyImpl.getInstance().getPluralString('importPasswordsFailuresSummary', this.results_.displayedEntries.length);
            if (rowsWithUnknownErrorCount) {
                this.rowsWithUnknownErrorsSummary_ =
                    await PluralStringProxyImpl.getInstance().getPluralString('importPasswordsBadRowsFormat', rowsWithUnknownErrorCount);
                this.showRowsWithUnknownErrorsSummary_ = true;
            }
        }
        if (this.passwordsSavedToAccount_) {
            let descriptionText = await PluralStringProxyImpl.getInstance().getPluralString('importPasswordsSuccessSummaryAccount', this.results_.numberImported);
            descriptionText =
                descriptionText.replace('$1', this.i18n('localPasswordManager'));
            this.successDescription_ =
                descriptionText.replace('$2', this.accountEmail);
        }
        else {
            const descriptionText = await PluralStringProxyImpl.getInstance().getPluralString('importPasswordsSuccessSummaryDevice', this.results_.numberImported);
            this.successDescription_ =
                descriptionText.replace('$1', this.i18n('localPasswordManager'));
        }
        this.dialogState_ = DialogState.SUCCESS;
    }
    getSuccessDialogTitle_() {
        assert(this.results_);
        return this.results_.displayedEntries.length ?
            this.i18n('importPasswordsCompleteTitle') :
            this.i18n('importPasswordsSuccessTitle');
    }
    getErrorDialogDescription_() {
        assert(this.results_);
        switch (this.results_.status) {
            case chrome.passwordsPrivate.ImportResultsStatus.MAX_FILE_SIZE:
                return this.i18nAdvanced('importPasswordsFileSizeExceeded');
            case chrome.passwordsPrivate.ImportResultsStatus.IO_ERROR:
            case chrome.passwordsPrivate.ImportResultsStatus.UNKNOWN_ERROR:
                return this.i18nAdvanced('importPasswordsUnknownError');
            case chrome.passwordsPrivate.ImportResultsStatus.NUM_PASSWORDS_EXCEEDED:
                return this.i18nAdvanced('importPasswordsLimitExceeded');
            case chrome.passwordsPrivate.ImportResultsStatus.BAD_FORMAT:
                return this.i18nAdvanced('importPasswordsBadFormatError', {
                    attrs: ['class'],
                    substitutions: [
                        this.results_.fileName,
                        loadTimeData.getString('importPasswordsHelpURL'),
                    ],
                });
            default:
                assertNotReached();
        }
    }
    getSuccessTipHtml_() {
        assert(this.results_);
        return this.i18nAdvanced('importPasswordsSuccessTip', { attrs: ['class'], substitutions: [this.results_.fileName] });
    }
    getCheckboxLabelHtml_() {
        assert(this.results_);
        return this.i18nAdvanced('importPasswordsDeleteFileOption', { attrs: ['class'], substitutions: [this.results_.fileName] });
    }
    shouldHideLinkRowIcon_() {
        return !this.isAccountStoreUser || this.isState_(DialogState.IN_PROGRESS);
    }
    shouldShowSelectFileButton_() {
        return !this.isAccountStoreUser && !this.isState_(DialogState.IN_PROGRESS);
    }
    shouldHideDeleteFileOption_() {
        // "Delete file" checkbox is only shown in "success" state if all passwords
        // were imported.
        assert(this.results_);
        return !!this.results_.displayedEntries.length;
    }
    shouldHideFailuresSummary_() {
        assert(this.results_);
        return !this.results_.displayedEntries.length;
    }
    getStoreOptionAccountText_() {
        assert(this.accountEmail);
        return this.i18n('passwordsStoreOptionAccount', this.i18n('localPasswordManager'), this.accountEmail);
    }
    getFailedEntryErrorMessage_(status) {
        // TODO(crbug/1434221): Use constants for length limits.
        switch (status) {
            case chrome.passwordsPrivate.ImportEntryStatus.MISSING_PASSWORD:
                return this.i18n('importPasswordsMissingPassword');
            case chrome.passwordsPrivate.ImportEntryStatus.MISSING_URL:
                return this.i18n('importPasswordsMissingURL');
            case chrome.passwordsPrivate.ImportEntryStatus.INVALID_URL:
                return this.i18n('importPasswordsInvalidURL');
            case chrome.passwordsPrivate.ImportEntryStatus.LONG_URL:
                return this.i18n('importPasswordsLongURL');
            case chrome.passwordsPrivate.ImportEntryStatus.LONG_PASSWORD:
                return this.i18n('importPasswordsLongPassword');
            case chrome.passwordsPrivate.ImportEntryStatus.LONG_USERNAME:
                return this.i18n('importPasswordsLongUsername');
            case chrome.passwordsPrivate.ImportEntryStatus.CONFLICT_PROFILE:
                if (this.isUserSyncingPasswords) {
                    return this.i18n('importPasswordsConflictAccount', this.i18n('localPasswordManager'), this.accountEmail);
                }
                return this.i18n('importPasswordsConflictDevice');
            case chrome.passwordsPrivate.ImportEntryStatus.CONFLICT_ACCOUNT:
                return this.i18n('importPasswordsConflictAccount', this.i18n('localPasswordManager'), this.accountEmail);
            case chrome.passwordsPrivate.ImportEntryStatus.LONG_NOTE:
            case chrome.passwordsPrivate.ImportEntryStatus.LONG_CONCATENATED_NOTE:
                return this.i18n('importPasswordsLongNote');
            case chrome.passwordsPrivate.ImportEntryStatus.UNKNOWN_ERROR:
            case chrome.passwordsPrivate.ImportEntryStatus.NON_ASCII_URL:
            default:
                assertNotReached();
        }
    }
}
customElements.define(PasswordsImporterElement.is, PasswordsImporterElement);
