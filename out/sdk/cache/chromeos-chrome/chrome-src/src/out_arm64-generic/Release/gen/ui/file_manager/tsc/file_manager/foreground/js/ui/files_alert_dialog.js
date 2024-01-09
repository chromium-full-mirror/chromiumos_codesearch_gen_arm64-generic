// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getFilesAppModalDialogInstance } from '../../../common/js/util.js';
import { AlertDialog } from './dialogs.js';
/**
 * Alert dialog.
 */
export class FilesAlertDialog extends AlertDialog {
    /**
     */
    constructor(parentNode) {
        super(parentNode);
        this.container.classList.add('files-ng');
    }
    initDom() {
        super.initDom();
        this.hasModalContainer = true;
        this.frame.classList.add('files-alert-dialog');
    }
    get parentNode() {
        this.parentNode_ = getFilesAppModalDialogInstance();
        return this.parentNode_;
    }
    show_(title, onOk, onCancel, onShow) {
        this.parentNode_ = getFilesAppModalDialogInstance();
        super.show_(title, onOk, onCancel, onShow);
        this.parentNode.showModal();
    }
    hide(onHide) {
        this.parentNode.close();
        super.hide(onHide);
    }
    showWithTitle(title, message, onOk, onCancel, onShow) {
        this.frame.classList.toggle('no-title', !title);
        super.showWithTitle(title, message, onOk, onCancel, onShow);
    }
    showHtml(title, message, onOk, onCancel, onShow) {
        this.frame.classList.toggle('no-title', !title);
        super.showHtml(title, message, onOk, onCancel, onShow);
    }
    /**
     * Async version of show(). Resolves when the alert dialog is dismissed.
     */
    showAsync(title) {
        return new Promise(resolve => this.show(title, resolve));
    }
}
