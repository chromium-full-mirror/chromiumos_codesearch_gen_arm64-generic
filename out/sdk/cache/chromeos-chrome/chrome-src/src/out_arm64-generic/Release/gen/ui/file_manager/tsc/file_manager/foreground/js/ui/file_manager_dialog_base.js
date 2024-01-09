// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getFilesAppModalDialogInstance } from '../../../common/js/util.js';
import { BaseDialog } from './dialogs.js';
/**
 * This class is an extended class, to manage the status of the dialogs.
 */
export class FileManagerDialogBase extends BaseDialog {
    /**
     * The flag if any dialog is shown. True if a dialog is visible, false
     * otherwise.
     */
    static { this.shown = false; }
    /**
     * @param parentNode Parent node of the dialog.
     */
    constructor(parentNode) {
        super(parentNode);
        this.container.classList.add('files-ng');
    }
    initDom() {
        super.initDom();
        this.hasModalContainer = true;
    }
    /**
     * @param title Title.
     * @param message Message.
     * @param onOk Called when the OK button is pressed.
     * @param onCancel Called when the cancel button is
     *     pressed.
     * @return True if the dialog can show successfully. False if the
     *     dialog failed to show due to an existing dialog.
     */
    showOkCancelDialog(title, message, onOk, onCancel) {
        return this.showImpl_(title, message, onOk, onCancel);
    }
    /**
     * @param title Title.
     * @param message Message.
     * @param onOk Called when the OK button is pressed.
     * @param onCancel Called when the cancel button is pressed.
     * @return {boolean} True if the dialog can show successfully. False if the
     *     dialog failed to show due to an existing dialog.
     * @private
     */
    showImpl_(title, message, onOk, onCancel) {
        if (FileManagerDialogBase.shown) {
            return false;
        }
        FileManagerDialogBase.shown = true;
        // If a dialog is shown, activate the window.
        window.focus();
        super.showWithTitle(title, message, onOk, onCancel);
        return true;
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
     * Returns true if the dialog can show successfully. False if the
     * dialog failed to show due to an existing dialog.
     */
    showBlankDialog() {
        return this.showImpl_('', '');
    }
    /**
     * @param title Title.
     * @return True if the dialog can show successfully. False if the
     *     dialog failed to show due to an existing dialog.
     */
    showTitleOnlyDialog(title) {
        return this.showImpl_(title, '');
    }
    /**
     * @param title Title.
     * @param text Text to be shown in the dialog.
     * @return True if the dialog can show successfully. False if the
     *     dialog failed to show due to an existing dialog.
     */
    showTitleAndTextDialog(title, text) {
        this.buttons.style.display = 'none';
        return this.showImpl_(title, text);
    }
    show_(title, onOk, onCancel, onShow) {
        this.parentNode_ = getFilesAppModalDialogInstance();
        super.show_(title, onOk, onCancel, onShow);
        this.parentNode.showModal();
    }
    get parentNode() {
        this.parentNode_ = getFilesAppModalDialogInstance();
        return this.parentNode_;
    }
    hide(onHide) {
        this.parentNode.close();
        FileManagerDialogBase.shown = false;
        super.hide(onHide);
    }
}
