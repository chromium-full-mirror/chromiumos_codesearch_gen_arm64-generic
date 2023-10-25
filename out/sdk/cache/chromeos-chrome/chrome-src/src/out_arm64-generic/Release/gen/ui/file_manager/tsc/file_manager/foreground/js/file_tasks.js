// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * This file is checked via TS, so we suppress Closure checks.
 * @suppress {checkTypes}
 */
import { assert } from 'chrome://resources/ash/common/assert.js';
import { executeTask, getDirectory, getFileTasks } from '../../common/js/api.js';
import { AsyncQueue } from '../../common/js/async_util.js';
import { entriesToURLs, isFakeEntry } from '../../common/js/entry_utils.js';
import { annotateTasks, getDefaultTask, INSTALL_LINUX_PACKAGE_TASK_DESCRIPTOR, isFilesAppId, parseActionId } from '../../common/js/file_tasks.js';
import { FileType } from '../../common/js/file_type.js';
import { recordEnum, recordTime } from '../../common/js/metrics.js';
import { ProgressCenterItem, ProgressItemState, ProgressItemType } from '../../common/js/progress_center_common.js';
import { LEGACY_FILES_EXTENSION_ID } from '../../common/js/url_constants.js';
import { str, strf, util } from '../../common/js/util.js';
import { VolumeManagerCommon } from '../../common/js/volume_manager_types.js';
import '../../externs/background/crostini.js';
import '../../externs/background/progress_center.js';
import '../../externs/ts/state.js';
import '../../externs/volume_manager.js';
import { getStore } from '../../state/store.js';
import { USER_CANCELLED } from '../../widgets/xf_password_dialog.js';
import { constants } from './constants.js';
import './directory_model.js';
import { PastePlan } from './file_transfer_controller.js';
import './metadata/metadata_item.js';
import './metadata/metadata_model.js';
import './task_controller.js';
import './task_history.js';
import './ui/default_task_dialog.js';
import './ui/file_manager_ui.js';
import { FilesConfirmDialog } from './ui/files_confirm_dialog.js';
import { UMA_INDEX_KNOWN_EXTENSIONS } from './uma_enums.gen.js';
/**
 * Office file handlers UMA values (must be consistent with OfficeFileHandler in
 * tools/metrics/histograms/enums.xml).
 * @const @enum {number}
 */
const OfficeFileHandlersHistogramValues = {
    OTHER: 0,
    WEB_DRIVE_OFFICE: 1,
    QUICK_OFFICE: 2,
};
/**
 * Represents a collection of available tasks to execute for a specific list
 * of entries.
 */
export class FileTasks {
    constructor(volumeManager_, metadataModel_, directoryModel_, ui_, fileTransferController_, entries_, resultingTasks_, defaultTask_, taskHistory_, progressCenter_, taskController_) {
        this.volumeManager_ = volumeManager_;
        this.metadataModel_ = metadataModel_;
        this.directoryModel_ = directoryModel_;
        this.ui_ = ui_;
        this.fileTransferController_ = fileTransferController_;
        this.entries_ = entries_;
        this.resultingTasks_ = resultingTasks_;
        this.defaultTask_ = defaultTask_;
        this.taskHistory_ = taskHistory_;
        this.progressCenter_ = progressCenter_;
        this.taskController_ = taskController_;
        this.mutex_ = new AsyncQueue();
    }
    /**
     * Creates an instance of FileTasks for the specified list of entries with
     * mime types.
     */
    static async create(volumeManager, metadataModel, directoryModel, ui, fileTransferController, entries, taskHistory, crostini, progressCenter, taskController) {
        let resultingTasks = {
            tasks: [],
            policyDefaultHandlerStatus: undefined,
        };
        // Cannot use fake entries with getFileTasks.
        entries = entries.filter(e => !isFakeEntry(e));
        const dlpSourceUrls = metadataModel.getCache(entries, ['sourceUrl'])
            .map(m => m.sourceUrl || '');
        if (entries.length !== 0) {
            resultingTasks = await getFileTasks(entries, dlpSourceUrls);
            if (!resultingTasks || !resultingTasks.tasks) {
                throw new Error('Cannot get file tasks.');
            }
        }
        // Linux package installation is currently only supported for a single
        // file which is inside the Linux container, or in a shareable volume.
        // TODO(timloh): Instead of filtering these out, we probably should show a
        // dialog with an error message, similar to when attempting to run
        // Crostini tasks with non-Crostini entries.
        if (entries.length !== 1 ||
            !(isCrostiniEntry(entries[0], volumeManager) ||
                crostini.canSharePath(constants.DEFAULT_CROSTINI_VM, entries[0], false /* persist */))) {
            resultingTasks.tasks = resultingTasks.tasks.filter((task) => !util.descriptorEqual(task.descriptor, INSTALL_LINUX_PACKAGE_TASK_DESCRIPTOR));
        }
        const tasks = annotateTasks(resultingTasks.tasks, entries);
        resultingTasks.tasks = tasks;
        const defaultTask = getDefaultTask(tasks, resultingTasks.policyDefaultHandlerStatus, taskHistory);
        return new FileTasks(volumeManager, metadataModel, directoryModel, ui, fileTransferController, entries, resultingTasks, defaultTask, taskHistory, progressCenter, taskController);
    }
    /** Creates FileTasks instance based on the data from the Store. */
    static fromStoreTasks(tasks, volumeManager, metadataModel, directoryModel, ui, fileTransferController, entries, taskHistory, progressCenter, taskController) {
        return new FileTasks(volumeManager, metadataModel, directoryModel, ui, fileTransferController, entries, tasks, tasks.defaultTask ?? null, taskHistory, progressCenter, taskController);
    }
    get entries() {
        return this.entries_;
    }
    get defaultTask() {
        return this.defaultTask_;
    }
    getAnnotatedTasks() {
        // resultingTasks_.tasks is annotated at create().
        return this.resultingTasks_.tasks;
    }
    /** Gets the policy default handler status.  */
    getPolicyDefaultHandlerStatus() {
        return this.resultingTasks_.policyDefaultHandlerStatus;
    }
    /** Returns whether the system is currently offline. */
    static isOffline_(volumeManager) {
        const connection = volumeManager.getDriveConnectionState();
        return connection.type ==
            chrome.fileManagerPrivate.DriveConnectionStateType.OFFLINE &&
            connection.reason ==
                chrome.fileManagerPrivate.DriveOfflineReason.NO_NETWORK;
    }
    /**
     * Records a metric, as well as recording online and offline versions of it.
     *
     * @param name Metric name.
     * @param value Enum value.
     * @param values Array of valid values.
     */
    static recordEnumWithOnlineAndOffline_(volumeManager, name, value, values) {
        recordEnum(name, value, values);
        if (FileTasks.isOffline_(volumeManager)) {
            recordEnum(name + '.Offline', value, values);
        }
        else {
            recordEnum(name + '.Online', value, values);
        }
    }
    /**
     * Returns ViewFileType enum or 'other' for the given entry.
     * @return A ViewFileType enum or 'other'.
     */
    static getViewFileType(entry) {
        let extension = FileType.getExtension(entry).toLowerCase();
        if (UMA_INDEX_KNOWN_EXTENSIONS.indexOf(extension) < 0) {
            extension = 'other';
        }
        return extension;
    }
    /** Records trial of opening file grouped by extensions.  */
    static recordViewingFileTypeUma_(volumeManager, entries) {
        for (const entry of entries) {
            FileTasks.recordEnumWithOnlineAndOffline_(volumeManager, 'ViewingFileType', FileTasks.getViewFileType(entry), UMA_INDEX_KNOWN_EXTENSIONS);
        }
    }
    /**
     * Records trial of opening file grouped by root types.
     * @param rootType The type of the root where entries are being opened.
     */
    static recordViewingRootTypeUma_(volumeManager, rootType) {
        if (rootType !== null) {
            FileTasks.recordEnumWithOnlineAndOffline_(volumeManager, 'ViewingRootType', rootType, VolumeManagerCommon.RootTypesForUMA);
        }
    }
    /**
     * Records the elapsed time for mounting a ZIP file as a ZipMountTime
     * histogram value.
     * @param rootType The type of the root where the ZIP file has been mounted
     *     from.
     * @param time Time to be recorded in milliseconds.
     */
    static recordZipMountTimeUma_(rootType, time) {
        let root;
        switch (rootType) {
            case VolumeManagerCommon.RootType.MY_FILES:
            case VolumeManagerCommon.RootType.DOWNLOADS:
                root = 'MyFiles';
                break;
            case VolumeManagerCommon.RootType.DRIVE:
                root = 'Drive';
                break;
            default:
                root = 'Other';
        }
        recordTime(`ZipMountTime.${root}`, time);
    }
    /**
     * Records trial of opening Office file grouped by file handlers.
     * @param entries The entries to be opened.
     * @param rootType The type of the root where entries are being opened.
     */
    static recordOfficeFileHandlerUma_(volumeManager, entries, rootType, task) {
        if (!task) {
            return;
        }
        // This UMA is only applicable to Office files.
        if (!entries.every(entry => hasOfficeExtension(entry))) {
            return;
        }
        let histogramName = 'OfficeFiles.FileHandler';
        switch (rootType) {
            case VolumeManagerCommon.RootType.DRIVE:
                histogramName += '.Drive';
                break;
            default:
                histogramName += '.NotDrive';
        }
        if (FileTasks.isOffline_(volumeManager)) {
            histogramName += '.Offline';
        }
        else {
            histogramName += '.Online';
        }
        let fileHandler = OfficeFileHandlersHistogramValues.OTHER;
        switch (parseActionId(task.descriptor.actionId)) {
            case 'open-web-drive-office-word':
            case 'open-web-drive-office-excel':
            case 'open-web-drive-office-powerpoint':
                fileHandler = OfficeFileHandlersHistogramValues.WEB_DRIVE_OFFICE;
                break;
            case 'qo_documents':
                fileHandler = OfficeFileHandlersHistogramValues.QUICK_OFFICE;
                break;
        }
        recordEnum(histogramName, fileHandler, Object.values(OfficeFileHandlersHistogramValues));
    }
    /** Returns true if the descriptor is for an internal task.  */
    static isInternalTask_(descriptor) {
        const { appId, taskType, actionId } = descriptor;
        if (!isFilesAppId(appId)) {
            return false;
        }
        // Legacy Files app task type is 'app', Files SWA is 'web'.
        if (!(taskType === 'app' || taskType == 'web')) {
            return false;
        }
        const parsedActionId = parseActionId(actionId);
        switch (parsedActionId) {
            case 'mount-archive':
            case 'install-linux-package':
            case 'import-crostini-image':
                return true;
            default:
                return false;
        }
    }
    /**
     * Show dialog when user opens or drags a file with PluginVM and the file
     * is not in PvmSharedDir or shared with PluginVM. The dialog tells the
     * user to move or copy the file to PvmSharedDir and offers an action to do
     * that.
     *
     * @param entries Selected entries to be moved or copied.
     * @param ui FileManager UI to show dialog.
     * @param moveMessage Message if files are local and can be moved.
     * @param copyMessage Message if files should be copied.
     */
    static showPluginVmNotSharedDialog(entries, volumeManager, metadataModel, ui, moveMessage, copyMessage, fileTransferController, directoryModel) {
        assert(entries.length > 0);
        const isMyFiles = isMyFilesEntry(entries[0], volumeManager);
        const dialog = new FilesConfirmDialog(ui.element);
        dialog.setOkLabel(str(isMyFiles ? 'CONFIRM_MOVE_BUTTON_LABEL' : 'CONFIRM_COPY_BUTTON_LABEL'));
        dialog.show(isMyFiles ? moveMessage : copyMessage, async () => {
            if (!fileTransferController) {
                console.warn('FileTransferController not set');
                return;
            }
            const pvmDir = await FileTasks.getPvmSharedDir_(volumeManager);
            assert(volumeManager.getLocationInfo(pvmDir));
            fileTransferController.executePaste(new PastePlan(entries.map(e => e.toURL()), [], pvmDir, metadataModel, 
            /*isMove=*/ isMyFiles));
            directoryModel.changeDirectoryEntry(pvmDir);
        });
    }
    /** Executes default task.  */
    async executeDefault() {
        FileTasks.recordViewingFileTypeUma_(this.volumeManager_, this.entries_);
        FileTasks.recordViewingRootTypeUma_(this.volumeManager_, this.directoryModel_.getCurrentRootType());
        FileTasks.recordOfficeFileHandlerUma_(this.volumeManager_, this.entries_, this.directoryModel_.getCurrentRootType(), this.defaultTask_);
        return this.executeDefaultInternal_();
    }
    async executeDefaultInternal_() {
        if (this.defaultTask_) {
            this.executeInternal_(this.defaultTask_);
            return;
        }
        // If there's policy involved and |defaultTask_| is null, means that policy
        // assignment was incorrect. We should not execute anything in this case.
        if (this.getPolicyDefaultHandlerStatus()) {
            console.assert(this.getPolicyDefaultHandlerStatus() ===
                chrome.fileManagerPrivate.PolicyDefaultHandlerStatus
                    .INCORRECT_ASSIGNMENT, 'policyDefaultHandlerStatus expected to be INCORRECT, thus not executing the task');
            return;
        }
        const nonGenericTasks = this.resultingTasks_.tasks.filter(t => !t.isGenericFileHandler);
        // If there is only one task that is not a generic file handler, it should
        // be executed as a default task. If there are multiple tasks that are not
        // generic file handlers, and none of them are considered as default, we
        // show a task picker to ask the user to choose one.
        if (nonGenericTasks.length >= 2) {
            this.showTaskPicker(this.ui_.defaultTaskPicker, str('OPEN_WITH_BUTTON_LABEL'), '', task => {
                this.execute(task);
            }, TaskPickerType.OpenWith);
            return;
        }
        // We don't have tasks, so try to show a file in a browser tab.
        // We only do that for single selection to avoid confusion.
        if (this.entries_.length !== 1) {
            return;
        }
        const filename = this.entries_[0].name;
        const extension = util.splitExtension(filename)[1] || null;
        try {
            await this.checkAvailability_();
        }
        catch (error) {
            console.warn('Rejected after checking availability due to', error);
            return;
        }
        try {
            const descriptor = {
                appId: LEGACY_FILES_EXTENSION_ID,
                taskType: 'file',
                actionId: 'view-in-browser',
            };
            const result = await executeTask(descriptor, this.entries_);
            switch (result) {
                case 'opened':
                    break;
                case 'message_sent':
                    util.isTeleported(window).then(teleported => {
                        if (teleported) {
                            this.ui_.showOpenInOtherDesktopAlert(this.entries_);
                        }
                    });
                    break;
                case 'empty':
                    break;
                case 'failed':
                    throw new Error();
            }
        }
        catch {
            let textMessageId;
            let titleMessageId;
            switch (extension) {
                case '.exe':
                case '.msi':
                    textMessageId = 'NO_TASK_FOR_EXECUTABLE';
                    break;
                case '.dmg':
                    textMessageId = 'NO_TASK_FOR_DMG';
                    break;
                case '.crx':
                    textMessageId = 'NO_TASK_FOR_CRX';
                    titleMessageId = 'NO_TASK_FOR_CRX_TITLE';
                    break;
                default:
                    textMessageId = 'NO_TASK_FOR_FILE';
            }
            const text = strf(textMessageId, str('NO_TASK_FOR_FILE_URL'));
            const title = titleMessageId ? str(titleMessageId) : filename;
            this.ui_.alertDialog.showHtml(title, text);
        }
    }
    /** Executes a single task.  */
    execute(task) {
        FileTasks.recordViewingFileTypeUma_(this.volumeManager_, this.entries_);
        FileTasks.recordViewingRootTypeUma_(this.volumeManager_, this.directoryModel_.getCurrentRootType());
        FileTasks.recordOfficeFileHandlerUma_(this.volumeManager_, this.entries_, this.directoryModel_.getCurrentRootType(), task);
        this.executeInternal_(task);
    }
    /** The core implementation to execute a single task. */
    async executeInternal_(task) {
        const entries = this.entries_;
        try {
            await this.checkAvailability_();
        }
        catch (error) {
            console.warn('Rejected after checking availability due to', error);
            return;
        }
        this.taskHistory_.recordTaskExecuted(task.descriptor);
        const msg = (entries.length === 1) ?
            strf('OPEN_A11Y', entries[0].name) :
            strf('OPEN_A11Y_PLURAL', entries.length);
        this.ui_.speakA11yMessage(msg);
        if (FileTasks.isInternalTask_(task.descriptor)) {
            this.executeInternalTask_(task.descriptor);
            return;
        }
        try {
            const result = await executeTask(task.descriptor, entries);
            const TaskResult = chrome.fileManagerPrivate.TaskResult;
            switch (result) {
                case TaskResult.MESSAGE_SENT:
                    util.isTeleported(window).then((teleported) => {
                        if (teleported) {
                            this.ui_.showOpenInOtherDesktopAlert(entries);
                        }
                    });
                    break;
                case TaskResult.FAILED_PLUGIN_VM_DIRECTORY_NOT_SHARED:
                    const moveMessage = strf('UNABLE_TO_OPEN_WITH_PLUGIN_VM_DIRECTORY_NOT_SHARED_MESSAGE', task.title);
                    const copyMessage = strf('UNABLE_TO_OPEN_WITH_PLUGIN_VM_EXTERNAL_DRIVE_MESSAGE', task.title);
                    FileTasks.showPluginVmNotSharedDialog(entries, this.volumeManager_, this.metadataModel_, this.ui_, moveMessage, copyMessage, this.fileTransferController_, this.directoryModel_);
                    break;
            }
        }
        catch (error) {
            console.warn(`Failed to execute task ${JSON.stringify(task.descriptor)}: ${error}`);
        }
    }
    /**
     * Ensures that the all files are available right now.
     * Must not call before initialization.
     * Resolved when checking is completed and all files are available
     * Rejected/throws if the user cancels the confirmation dialog for downloading
     * in cellular/metered network dialog.
     */
    async checkAvailability_() {
        const areAll = (entries, props, name) => {
            let okEntriesNum = 0;
            for (let i = 0; i < entries.length; i++) {
                // If got no properties, we safely assume that item is available.
                if (props[i] && (props[i][name] || entries[i]?.isDirectory)) {
                    okEntriesNum++;
                }
            }
            return okEntriesNum === props.length;
        };
        const containsDriveEntries = this.entries_.some(entry => {
            const volumeInfo = this.volumeManager_.getVolumeInfo(entry);
            return volumeInfo &&
                volumeInfo.volumeType === VolumeManagerCommon.VolumeType.DRIVE;
        });
        // Availability is not checked for non-Drive files, as availableOffline, nor
        // availableWhenMetered are not exposed for other types of volumes at this
        // moment.
        if (!containsDriveEntries) {
            return;
        }
        const isDriveOffline = this.volumeManager_.getDriveConnectionState().type ===
            chrome.fileManagerPrivate.DriveConnectionStateType.OFFLINE;
        if (isDriveOffline) {
            const props = await this.metadataModel_.get(this.entries_, ['availableOffline', 'hosted']);
            if (areAll(this.entries_, props, 'availableOffline')) {
                return;
            }
            const msg = props[0].hosted ?
                str(this.entries_.length === 1 ? 'HOSTED_OFFLINE_MESSAGE' :
                    'HOSTED_OFFLINE_MESSAGE_PLURAL') :
                strf(this.entries_.length === 1 ? 'OFFLINE_MESSAGE' :
                    'OFFLINE_MESSAGE_PLURAL', str('OFFLINE_COLUMN_LABEL'));
            this.ui_.alertDialog.showHtml(str('OFFLINE_HEADER'), msg);
            const isBulkPinningEnabled = !!getStore().getState()?.preferences?.driveFsBulkPinningEnabled;
            for (const entry of this.entries_) {
                recordEnum('DriveOfflineOpen.Unavailable', FileTasks.getViewFileType(entry), UMA_INDEX_KNOWN_EXTENSIONS);
                if (isBulkPinningEnabled) {
                    recordEnum('GoogleDrive.BulkPinning.OfflineOpen', FileTasks.getViewFileType(entry), UMA_INDEX_KNOWN_EXTENSIONS);
                }
            }
            return Promise.reject('drive is offline');
        }
        const isOnMetered = this.volumeManager_.getDriveConnectionState().type ===
            chrome.fileManagerPrivate.DriveConnectionStateType.METERED;
        if (!isOnMetered) {
            return;
        }
        const props = await this.metadataModel_.get(this.entries_, ['availableWhenMetered', 'size']);
        if (areAll(this.entries_, props, 'availableWhenMetered')) {
            return;
        }
        let sizeToDownload = 0;
        for (let i = 0; i !== this.entries_.length; i++) {
            if (!props[i].availableWhenMetered) {
                sizeToDownload += (props[i].size || 0);
            }
        }
        const msg = strf(this.entries_.length === 1 ? 'CONFIRM_MOBILE_DATA_USE' :
            'CONFIRM_MOBILE_DATA_USE_PLURAL', util.bytesToString(sizeToDownload));
        return new Promise((resolve, reject) => this.ui_.confirmDialog.show(msg, resolve, reject));
    }
    /**
     * Executes an internal task, which is a task Files app handles internally
     * without calling into fileManagerPrivate to execute it.
     */
    executeInternalTask_(descriptor) {
        const parsedActionId = parseActionId(descriptor.actionId);
        if (parsedActionId === 'mount-archive') {
            this.mountArchives_();
            return;
        }
        if (parsedActionId === 'install-linux-package') {
            this.installLinuxPackageInternal_();
            return;
        }
        if (parsedActionId === 'import-crostini-image') {
            this.importCrostiniImageInternal_();
            return;
        }
        console.error('The specified task is not a valid internal task: ' +
            util.makeTaskID(descriptor));
    }
    /** Install a Linux Package in the Linux container.  */
    installLinuxPackageInternal_() {
        assert(this.entries_.length === 1);
        this.ui_.installLinuxPackageDialog.showInstallLinuxPackageDialog(this.entries_[0]);
    }
    /**
     * Imports a Crostini Image File (.tini). This overrides the existing Linux
     * apps and files.
     */
    importCrostiniImageInternal_() {
        assert(this.entries_.length === 1);
        this.ui_.importCrostiniImageDialog.showImportCrostiniImageDialog(this.entries_[0]);
    }
    /**
     * Mounts an archive file. Asks for password and retries if necessary.
     * @param url URL of the archive file to mount.
     */
    async mountArchive_(url) {
        const filename = util.extractFilePath(url)?.split('/').pop() || '';
        const item = new ProgressCenterItem();
        item.id = 'Mounting: ' + url;
        item.type = ProgressItemType.MOUNT_ARCHIVE;
        item.message = strf('ARCHIVE_MOUNT_MESSAGE', filename);
        item.cancelCallback = async () => {
            // Remove progress panel.
            item.state = ProgressItemState.CANCELED;
            this.progressCenter_.updateItem(item);
            // Cancel archive mounting.
            try {
                await this.volumeManager_.cancelMounting(url);
            }
            catch (error) {
                console.warn('Cannot cancel archive (redacted):', error);
                console.log(`Cannot cancel archive '${url}':`, error);
            }
        };
        // Display progress panel.
        item.state = ProgressItemState.PROGRESSING;
        this.progressCenter_.updateItem(item);
        // First time, try without providing a password.
        try {
            return await this.volumeManager_.mountArchive(url);
        }
        catch (error) {
            // If error is not about needing a password, propagate it.
            if (error !== VolumeManagerCommon.VolumeError.NEED_PASSWORD) {
                throw error;
            }
        }
        finally {
            // Remove progress panel.
            item.state = ProgressItemState.COMPLETED;
            this.progressCenter_.updateItem(item);
        }
        // We need a password.
        const unlock = await this.mutex_.lock();
        try {
            /** @type {?string} */ let password = null;
            while (true) {
                // Ask for password.
                do {
                    const dialog = this.ui_.passwordDialog;
                    password = await dialog.askForPassword(filename, password);
                } while (!password);
                // Display progress panel.
                item.state = ProgressItemState.PROGRESSING;
                this.progressCenter_.updateItem(item);
                // Mount archive with password.
                try {
                    return await this.volumeManager_.mountArchive(url, password);
                }
                catch (error) {
                    // If error is not about needing a password, propagate it.
                    if (error !== VolumeManagerCommon.VolumeError.NEED_PASSWORD) {
                        throw error;
                    }
                }
                finally {
                    // Remove progress panel.
                    item.state = ProgressItemState.COMPLETED;
                    this.progressCenter_.updateItem(item);
                }
            }
        }
        finally {
            unlock();
        }
    }
    /**
     * Mounts an archive file and changes directory. Asks for password if
     * necessary. Displays error message if necessary.
     * @param url URL of the archive file to moumt.
     * @return a promise that is never rejected.
     */
    async mountArchiveAndChangeDirectory_(tracker, url) {
        try {
            const startTime = Date.now();
            const volumeInfo = await this.mountArchive_(url);
            // On mountArchive_ success, record mount time UMA.
            FileTasks.recordZipMountTimeUma_(this.directoryModel_.getCurrentRootType(), Date.now() - startTime);
            if (tracker.hasChanged) {
                return;
            }
            try {
                const displayRoot = await volumeInfo.resolveDisplayRoot();
                if (tracker.hasChanged) {
                    return;
                }
                this.directoryModel_.changeDirectoryEntry(displayRoot);
            }
            catch (error) {
                console.error('Cannot resolve display root after mounting:', error);
            }
        }
        catch (error) {
            // No need to display an error message if user canceled mounting or
            // canceled the password prompt.
            if (error === USER_CANCELLED ||
                error === VolumeManagerCommon.VolumeError.CANCELLED) {
                return;
            }
            const filename = util.extractFilePath(url)?.split('/').pop() || '';
            const item = new ProgressCenterItem();
            item.id = 'Cannot mount: ' + url;
            item.type = ProgressItemType.MOUNT_ARCHIVE;
            const msgId = error === VolumeManagerCommon.VolumeError.INVALID_PATH ?
                'ARCHIVE_MOUNT_INVALID_PATH' :
                'ARCHIVE_MOUNT_FAILED';
            item.message = strf(msgId, filename);
            item.state = ProgressItemState.ERROR;
            this.progressCenter_.updateItem(item);
            console.warn('Cannot mount (redacted):', error);
            console.debug(`Cannot mount '${url}':`, error);
        }
    }
    /** Mounts the selected archive(s). Asks for password if necessary. */
    async mountArchives_() {
        const tracker = this.directoryModel_.createDirectoryChangeTracker();
        tracker.start();
        try {
            // TODO(mtomasz): Move conversion from entry to url to custom bindings.
            // crbug.com/345527.
            const urls = entriesToURLs(this.entries_);
            const promises = urls.map(url => this.mountArchiveAndChangeDirectory_(tracker, url));
            await Promise.all(promises);
        }
        finally {
            tracker.stop();
        }
    }
    /**
     * Shows modal task picker dialog with currently available list of tasks.
     *
     * @param taskDialog Task dialog to show and update.
     * @param onSuccess Callback to pass selected task.
     * @param pickerType Task picker type.
     */
    showTaskPicker(taskDialog, title, message, onSuccess, pickerType) {
        let items = this.taskController_.createItems(this);
        if (pickerType === TaskPickerType.ChangeDefault) {
            items = items.filter(item => !item.isGenericFileHandler);
        }
        let defaultIdx = 0;
        if (this.defaultTask_) {
            for (let j = 0; j < items.length; j++) {
                if (util.descriptorEqual(items[j].task.descriptor, this.defaultTask_.descriptor)) {
                    defaultIdx = j;
                }
            }
        }
        taskDialog.showDefaultTaskDialog(title, message, items, defaultIdx, item => {
            onSuccess(item.task);
        });
    }
    static async getPvmSharedDir_(volumeManager) {
        const volumeInfo = volumeManager.getCurrentProfileVolumeInfo(VolumeManagerCommon.VolumeType.DOWNLOADS);
        if (!volumeInfo) {
            throw new Error(`Error getting PvmDefault dir`);
        }
        return await getDirectory(volumeInfo.fileSystem.root, 'PvmDefault', { create: false });
    }
}
/**
 * Dialog types to show a task picker.
 * @enum {string}
 */
export const TaskPickerType = {
    ChangeDefault: 'ChangeDefault',
    OpenWith: 'OpenWith',
};
/** Office file extensions. */
const OFFICE_EXTENSIONS = new Set(['.doc', '.docx', '.xls', 'xlsm', '.xlsx', '.ppt', '.pptx']);
function hasOfficeExtension(entry) {
    return OFFICE_EXTENSIONS.has(FileType.getExtension(entry));
}
function isCrostiniEntry(entry, volumeManager) {
    const location = volumeManager.getLocationInfo(entry);
    return !!location &&
        location.rootType === VolumeManagerCommon.RootType.CROSTINI;
}
function isMyFilesEntry(entry, volumeManager) {
    const location = volumeManager.getLocationInfo(entry);
    return !!location &&
        location.rootType === VolumeManagerCommon.RootType.DOWNLOADS;
}
