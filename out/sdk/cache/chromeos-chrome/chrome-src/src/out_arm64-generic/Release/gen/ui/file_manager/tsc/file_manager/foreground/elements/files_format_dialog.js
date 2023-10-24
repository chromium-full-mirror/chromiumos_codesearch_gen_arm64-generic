// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * This file is checked via TS, so we suppress Closure checks.
 * @suppress {checkTypes}
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/md_select.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import '../../common/js/files_app_entry_types.js';
import { str, strf, util } from '../../common/js/util.js';
import '../../externs/files_app_entry_interfaces.js';
import { validateExternalDriveName } from '../js/file_rename.js';
import { getTemplate } from './files_format_dialog.html.js';
function getVolumeInfoDisplayRoot(entry) {
    if ('volumeInfo' in entry) {
        return entry.volumeInfo.displayRoot || null;
    }
    return null;
}
export class FilesFormatDialog extends PolymerElement {
    constructor() {
        super(...arguments);
        this.volumeInfo_ = null;
        this.root_ = null;
    }
    static get is() {
        return 'files-format-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            label_: {
                type: String,
                value: '',
            },
            formatType_: {
                type: String,
                value: chrome.fileManagerPrivate.FormatFileSystemType.VFAT,
            },
            spaceUsed_: {
                type: String,
                value: '',
            },
            isErase_: {
                type: Boolean,
                value: false,
            },
        };
    }
    ready() {
        super.ready();
        this.$.dialog.consumeKeydownEvent = true;
    }
    cancel() {
        this.$.dialog.cancel();
    }
    format() {
        try {
            validateExternalDriveName(this.label_, this.formatType_);
        }
        catch (error) {
            this.$.label.setAttribute('error-message', error.message);
            this.$.label.invalid = true;
            return;
        }
        if (this.isErase_) {
            chrome.fileManagerPrivate.singlePartitionFormat(this.root_?.devicePath || '', this.formatType_, this.label_);
        }
        else {
            chrome.fileManagerPrivate.formatVolume(this.volumeInfo_?.volumeId || '', this.formatType_, this.label_);
        }
        this.$.dialog.close();
    }
    /**
     * Used to set "single-partition-format" attribute on element.
     * It is used to check flag status in the tests.
     */
    getSinglePartitionFormat() {
        if (util.isSinglePartitionFormatEnabled()) {
            return 'single-partition-format';
        }
        return '';
    }
    getConfirmLabel(isErase) {
        if (util.isSinglePartitionFormatEnabled()) {
            if (isErase) {
                return str('REPARTITION_DIALOG_CONFIRM_LABEL');
            }
            else {
                return str('FORMAT_DIALOG_CONFIRM_SHORT_LABEL');
            }
        }
        else {
            return str('FORMAT_DIALOG_CONFIRM_LABEL');
        }
    }
    getDialogMessage(isErase) {
        if (util.isSinglePartitionFormatEnabled()) {
            if (isErase) {
                return str('REPARTITION_DIALOG_MESSAGE');
            }
            else {
                return str('FORMAT_PARTITION_DIALOG_MESSAGE');
            }
        }
        else {
            return str('FORMAT_DIALOG_MESSAGE');
        }
    }
    getStrf(token, value) {
        return strf(token, value);
    }
    /**
     * Shows the dialog for drive represented by |volumeInfo|.
     */
    showModal(volumeInfo) {
        this.isErase_ = false;
        this.label_ = '';
        this.formatType_ = chrome.fileManagerPrivate.FormatFileSystemType.VFAT;
        this.spaceUsed_ = '';
        this.volumeInfo_ = volumeInfo;
        this.title = this.volumeInfo_.label;
        if (volumeInfo.displayRoot) {
            chrome.fileManagerPrivate.getDirectorySize(volumeInfo.displayRoot, (spaceUsed) => {
                if (spaceUsed > 0 && volumeInfo === this.volumeInfo_) {
                    this.spaceUsed_ = util.bytesToString(spaceUsed);
                }
                if (window.IN_TEST) {
                    this.$['warning-container'].setAttribute('fully-initialized', '');
                }
            });
        }
        this.$.dialog.showModal();
    }
    /**
     * Shows the dialog for erasing device.
     */
    showEraseModal(root) {
        this.isErase_ = true;
        this.label_ = '';
        this.formatType_ = chrome.fileManagerPrivate.FormatFileSystemType.VFAT;
        this.spaceUsed_ = '';
        this.root_ = root;
        this.title = root.label;
        const childVolumes = this.root_.getUIChildren();
        let totalSpaceUsed = 0;
        const getSpaceUsedRequests = childVolumes.map((childVolume) => {
            return new Promise((resolve) => {
                const displayRoot = getVolumeInfoDisplayRoot(childVolume);
                if (displayRoot) {
                    chrome.fileManagerPrivate.getDirectorySize(displayRoot, (spaceUsed) => {
                        totalSpaceUsed += spaceUsed;
                        if (totalSpaceUsed > 0) {
                            this.spaceUsed_ = util.bytesToString(totalSpaceUsed);
                        }
                        resolve();
                    });
                }
            });
        });
        Promise.all(getSpaceUsedRequests).then(() => {
            if (window.IN_TEST) {
                this.$['warning-container'].setAttribute('fully-initialized', '');
            }
        });
        this.$.dialog.showModal();
    }
}
customElements.define(FilesFormatDialog.is, FilesFormatDialog);
