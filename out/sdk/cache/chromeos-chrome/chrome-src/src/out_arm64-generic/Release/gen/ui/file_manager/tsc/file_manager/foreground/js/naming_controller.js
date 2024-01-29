// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { getFile } from '../../common/js/api.js';
import { getKeyModifiers } from '../../common/js/dom_utils.js';
import { isFakeEntry, isSameEntry } from '../../common/js/entry_utils.js';
import { strf } from '../../common/js/translations.js';
import { FileErrorToDomError, UserCanceledError } from '../../common/js/util.js';
import { renameEntry, validateEntryName, validateFileName } from './file_rename.js';
import { FilesAlertDialog } from './ui/files_alert_dialog.js';
import { ListType } from './ui/list_container.js';
/**
 * Controller to handle naming.
 */
export class NamingController {
    constructor(listContainer_, alertDialog_, confirmDialog_, directoryModel_, fileFilter_, selectionHandler_) {
        this.listContainer_ = listContainer_;
        this.alertDialog_ = alertDialog_;
        this.confirmDialog_ = confirmDialog_;
        this.directoryModel_ = directoryModel_;
        this.fileFilter_ = fileFilter_;
        this.selectionHandler_ = selectionHandler_;
        /**
         * Whether the entry being renamed is a root of a removable
         * partition/volume.
         */
        this.isRemovableRoot_ = false;
        this.volumeInfo_ = null;
        // Register events.
        this.listContainer_.renameInput.addEventListener('keydown', this.onRenameInputKeyDown_.bind(this));
        this.listContainer_.renameInput.addEventListener('blur', this.onRenameInputBlur_.bind(this));
    }
    /**
     * Verifies the user entered name for file or folder to be created or
     * renamed to. See also validateFileName.
     * Returns true immediately if the name is valid, else returns false
     * after the user has dismissed the error dialog.
     *
     * @param parentEntry The URL of the parent directory entry.
     * @param name New file or folder name.
     * @return True if valid.
     */
    async validateFileName_(parentEntry, name) {
        try {
            await validateFileName(parentEntry, name, this.fileFilter_.isHiddenFilesVisible());
            return true;
        }
        catch (error) {
            await this.alertDialog_.showAsync(error.message);
            return false;
        }
    }
    async validateFileNameForSaving(filename) {
        const directory = this.directoryModel_.getCurrentDirEntry();
        const currentDirUrl = directory.toURL().replace(/\/?$/, '/');
        const fileUrl = currentDirUrl + encodeURIComponent(filename);
        try {
            const isValid = await this.validateFileName_(directory, filename);
            if (!isValid) {
                throw new Error('Invalid filename.');
            }
            if (directory && isFakeEntry(directory)) {
                // Can't save a file into a fake directory.
                throw new Error('Cannot save into fake entry.');
            }
            await getFile(directory, filename, { create: false });
        }
        catch (error) {
            if (error instanceof DOMException) {
                if (error.name === FileErrorToDomError.NOT_FOUND_ERR) {
                    // The file does not exist, so it should be ok to create a new file.
                    return fileUrl;
                }
                if (error.name === FileErrorToDomError.TYPE_MISMATCH_ERR) {
                    // A directory is found. Do not allow to overwrite directory.
                    this.alertDialog_.show(strf('DIRECTORY_ALREADY_EXISTS', filename));
                    throw error;
                }
                // Unexpected error.
                console.warn('File save failed:', error.code);
            }
            throw error;
        }
        // An existing file is found. Show confirmation dialog to overwrite it.
        // If the user selects "OK", save it.
        return new Promise((fulfill, reject) => {
            this.confirmDialog_.show(strf('CONFIRM_OVERWRITE_FILE', filename), () => fulfill(fileUrl), () => reject(new UserCanceledError('Canceled')));
        });
    }
    isRenamingInProgress() {
        return !!this.getRenameInput_().currentEntry;
    }
    /**
     * Start the renaming flow. The `isRemovableRoot` parameter indicates whether
     * the target is a removable volume root or not. The `volumeInfo` parameter
     * provides a volume information about the target entry. The `volumeInfo`
     * parameter can be null if method is invoked on a folder that is in the
     * tree view and is not root of an external drive.
     */
    initiateRename(isRemovableRoot = false, volumeInfo = null) {
        this.isRemovableRoot_ = isRemovableRoot;
        if (isRemovableRoot) {
            assert(volumeInfo);
            this.volumeInfo_ = volumeInfo;
        }
        else {
            this.volumeInfo_ = null;
        }
        const selectedIndex = this.listContainer_.selectionModel?.selectedIndex ?? -1;
        const item = this.listContainer_.currentList.getListItemByIndex(selectedIndex);
        if (!item) {
            return;
        }
        const label = item.querySelector('.filename-label');
        const input = this.listContainer_.renameInput;
        const dataModel = this.listContainer_.currentList.dataModel;
        const currentEntry = dataModel.item(item.listIndex);
        input.value = label.textContent ?? '';
        item.setAttribute('renaming', '');
        label.parentNode.appendChild(input);
        input.focus();
        const selectionEnd = input.value.lastIndexOf('.');
        if (currentEntry.isFile && selectionEnd !== -1) {
            input.selectionStart = 0;
            input.selectionEnd = selectionEnd;
        }
        else {
            input.select();
        }
        // This has to be set late in the process so we don't handle spurious
        // blur events.
        this.getRenameInput_().currentEntry = currentEntry;
        this.listContainer_.startBatchUpdates();
    }
    /**
     * Restores the item which is being renamed while refreshing the file list. Do
     * nothing if no item is being renamed or such an item disappeared.
     *
     * While refreshing file list it gets repopulated with new file entries.
     * There is not a big difference whether DOM items stay the same or not.
     * Except for the item that the user is renaming.
     */
    restoreItemBeingRenamed() {
        if (!this.isRenamingInProgress()) {
            return;
        }
        const dm = this.directoryModel_;
        const leadIndex = dm.getFileListSelection().leadIndex;
        if (leadIndex < 0) {
            return;
        }
        const leadEntry = dm.getFileList().item(leadIndex);
        if (!isSameEntry(this.getRenameInput_().currentEntry, leadEntry)) {
            return;
        }
        const leadListItem = this.listContainer_.findListItemForNode(this.listContainer_.renameInput);
        if (this.listContainer_.currentListType === ListType.DETAIL) {
            this.listContainer_.table.updateFileMetadata(leadListItem, leadEntry);
        }
        this.listContainer_.currentList.restoreLeadItem(leadListItem);
    }
    /**
     * Convenience method to access HTMLInputElement with the type that contains
     * all extra properties we set on it.
     */
    getRenameInput_() {
        return this.listContainer_.renameInput;
    }
    onRenameInputKeyDown_(event) {
        if (!this.isRenamingInProgress()) {
            return;
        }
        // Do not move selection or lead item in list during rename.
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.stopPropagation();
        }
        switch (getKeyModifiers(event) + event.key) {
            case 'Escape':
                this.cancelRename_();
                event.preventDefault();
                break;
            case 'Enter':
                this.commitRename_();
                event.preventDefault();
                break;
        }
    }
    onRenameInputBlur_() {
        const contextMenu = this.getRenameInput_().contextMenu;
        if (contextMenu && !contextMenu.hidden) {
            return;
        }
        if (this.isRenamingInProgress() && !this.getRenameInput_().validation) {
            this.commitRename_();
        }
    }
    /**
     * Returns a promise that resolves when done renaming - both when renaming is
     * successful and when it fails.
     */
    async commitRename_() {
        const input = this.getRenameInput_();
        const entry = this.getRenameInput_().currentEntry;
        const newName = input.value;
        const renamedItemElement = this.listContainer_.findListItemForNode(this.listContainer_.renameInput);
        const nameNode = renamedItemElement.querySelector('.filename-label');
        if (!newName || newName === nameNode?.textContent) {
            this.cancelRename_();
            return;
        }
        const volumeInfo = this.volumeInfo_;
        const isRemovableRoot = this.isRemovableRoot_;
        try {
            input.validation = true;
            await validateEntryName(entry, newName, this.fileFilter_.isHiddenFilesVisible(), volumeInfo, isRemovableRoot);
        }
        catch (error) {
            await this.alertDialog_.showAsync(error.message);
            // Cancel rename if it fails to restore focus from alert dialog.
            // Otherwise, just cancel the commitment and continue to rename.
            if (document.activeElement !== input) {
                this.cancelRename_();
            }
            return;
        }
        finally {
            input.validation = false;
        }
        // Validation succeeded. Do renaming.
        this.getRenameInput_().currentEntry = null;
        if (this.listContainer_.renameInput.parentNode) {
            this.listContainer_.renameInput.parentNode.removeChild(this.listContainer_.renameInput);
        }
        // Optimistically apply new name immediately to avoid flickering in
        // case of success.
        nameNode.textContent = newName;
        try {
            const newEntry = await renameEntry(entry, newName, volumeInfo, isRemovableRoot);
            // RemovableRoot doesn't have a callback to report renaming is done.
            if (!isRemovableRoot) {
                await this.directoryModel_.onRenameEntry(entry, newEntry);
            }
            const selectionModel = this.listContainer_.currentList.selectionModel;
            // Select new entry.
            selectionModel.selectedIndex =
                this.directoryModel_.getFileList().indexOf(newEntry);
            // Force to update selection immediately.
            this.selectionHandler_.onFileSelectionChanged();
            renamedItemElement.removeAttribute('renaming');
            this.listContainer_.endBatchUpdates();
            // Focus may go out of the list. Back it to the list.
            this.listContainer_.currentList.focus();
        }
        catch (error) {
            // Write back to the old name.
            nameNode.textContent = entry.name;
            renamedItemElement.removeAttribute('renaming');
            this.listContainer_.endBatchUpdates();
            // Show error dialog.
            this.alertDialog_.show(error.message);
        }
    }
    cancelRename_() {
        this.getRenameInput_().currentEntry = null;
        const item = this.listContainer_.findListItemForNode(this.listContainer_.renameInput);
        if (item) {
            item.removeAttribute('renaming');
        }
        const parent = this.listContainer_.renameInput.parentNode;
        if (parent) {
            parent.removeChild(this.listContainer_.renameInput);
        }
        this.listContainer_.endBatchUpdates();
        // Focus may go out of the list. Back it to the list.
        this.listContainer_.currentList.focus();
    }
}
