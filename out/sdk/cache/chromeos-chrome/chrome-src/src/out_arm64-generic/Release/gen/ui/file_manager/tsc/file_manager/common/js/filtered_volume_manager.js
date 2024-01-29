// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { VolumeInfoList } from '../../background/js/volume_info_list.js';
import { VolumeManager } from '../../background/js/volume_manager.js';
import { FilesAppEntry } from '../../common/js/files_app_entry_types.js';
import {} from './array_data_model.js';
import { isFuseBoxDebugEnabled } from './flags.js';
import { AllowedPaths, ARCHIVE_OPENED_EVENT_TYPE, isNative, VolumeType } from './volume_manager_types.js';
/**
 * Implementation of VolumeInfoList for FilteredVolumeManager.
 * In foreground/ we want to enforce this list to be filtered, so we forbid
 * adding/removing/splicing of the list.
 * The inner list ownership is shared between FilteredVolumeInfoList and
 * FilteredVolumeManager to enforce these constraints.
 */
export class FilteredVolumeInfoList extends VolumeInfoList {
    add(_volumeInfo) {
        throw new Error('FilteredVolumeInfoList.add not allowed in foreground');
    }
    remove(_volumeInfo) {
        throw new Error('FilteredVolumeInfoList.remove not allowed in foreground');
    }
    item(index) {
        return super.item(index);
    }
}
/**
 * Volume types that match the Android 'media-store-files-only' volume filter,
 * viz., the volume content is indexed by the Android MediaStore.
 */
const MEDIA_STORE_VOLUME_TYPES = [
    VolumeType.DOWNLOADS,
    VolumeType.REMOVABLE,
];
/**
 * Thin wrapper for VolumeManager. This should be an interface proxy to talk
 * to VolumeManager. This class also filters some "disallowed" volumes;
 * for example, Drive volumes are dropped if Drive is disabled, and read-only
 * volumes are dropped in save-as dialogs.
 */
export class FilteredVolumeManager extends VolumeManager {
    /**
     * @param allowedPaths_ Which paths are supported in the Files app dialog.
     * @param writableOnly_ If true, only writable volumes are returned.
     *     volumeManagerGetter Promise that resolves when the VolumeManager has
     *     been initialized.
     * @param volumeManagerGetter_ Promise that resolves when the VolumeManager
     *     has been initialized.
     * @param volumeFilter Array of Files app mode dependent volume filter names
     *     from Files app launch params, [] typically.
     * @param disabledVolumes_ List of volumes that should be visible but can't be
     *     selected.
     */
    constructor(allowedPaths_, writableOnly_, volumeManagerGetter_, volumeFilter, disabledVolumes_) {
        super();
        this.allowedPaths_ = allowedPaths_;
        this.writableOnly_ = writableOnly_;
        this.volumeManagerGetter_ = volumeManagerGetter_;
        this.disabledVolumes_ = disabledVolumes_;
        // VolumeManager.volumeInfoList property accessed by callers.
        this.volumeInfoList = new FilteredVolumeInfoList();
        this.volumeManager_ = null;
        this.disposed_ = false;
        this.onEventBound_ = this.onEvent_.bind(this);
        /**
         * True if chrome://flags#fuse-box-debug is enabled. This shows additional
         * UI elements, for manual fusebox testing.
         */
        this.isFuseBoxDebugEnabled_ = isFuseBoxDebugEnabled();
        /**
         * Tracks async initialization of volume manager.
         */
        this.initialized_ = this.initialize_();
        this.onVolumeInfoListUpdatedBound_ = this.onVolumeInfoListUpdated_.bind(this);
        this.isFuseBoxOnly_ = volumeFilter.includes('fusebox-only');
        this.isMediaStoreOnly_ = volumeFilter.includes('media-store-files-only');
    }
    getFuseBoxOnlyFilterEnabled() {
        return this.isFuseBoxOnly_;
    }
    getMediaStoreFilesOnlyFilterEnabled() {
        return this.isMediaStoreOnly_;
    }
    /**
     * List of disabled volumes.
     */
    get disabledVolumes() {
        return this.disabledVolumes_;
    }
    /**
     * Checks if a volume type is allowed.
     *
     * Note that even if a volume type is allowed, a volume of that type might be
     * disallowed for other restrictions. To check if a specific volume is allowed
     * or not, use isAllowedVolume_() instead.
     *
     */
    isAllowedVolumeType_(volumeType) {
        switch (this.allowedPaths_) {
            case AllowedPaths.ANY_PATH:
            case AllowedPaths.ANY_PATH_OR_URL:
                return true;
            case AllowedPaths.NATIVE_PATH:
                assert(volumeType);
                return isNative(volumeType);
        }
    }
    /**
     * True if the volume |diskFileSystemType| is a fusebox file system.
     * @param diskFileSystemType Volume diskFileSystemType.
     */
    isFuseBoxFileSystem_(diskFileSystemType) {
        return diskFileSystemType === 'fusebox';
    }
    /**
     * True if the volume content is indexed by the Android MediaStore.
     */
    isMediaStoreVolume_(volumeInfo) {
        return MEDIA_STORE_VOLUME_TYPES.indexOf(volumeInfo.volumeType) >= 0;
    }
    /**
     * Checks if a volume is allowed.
     */
    isAllowedVolume(volumeInfo) {
        if (!volumeInfo.volumeType) {
            return false;
        }
        if (this.writableOnly_ && volumeInfo.isReadOnly) {
            return false;
        }
        // If the media store filter is enabled and the volume is not supported
        // by the Android MediaStore, remove the volume from the UI.
        if (this.isMediaStoreOnly_ && !this.isMediaStoreVolume_(volumeInfo)) {
            return false;
        }
        // If the volume type is supported by fusebox, decide whether to show
        // fusebox or non-fusebox volumes in the UI.
        if (this.isFuseBoxDebugEnabled_) {
            // Do nothing: show the fusebox and non-fusebox versions in the files
            // app UI. Used for manually testing fusebox.
        }
        else if (this.isFuseBoxOnly_) {
            // SelectFileAsh requires fusebox volumes or native volumes.
            return this.isFuseBoxFileSystem_(volumeInfo.diskFileSystemType) ||
                isNative(volumeInfo.volumeType);
        }
        else if (this.isFuseBoxFileSystem_(volumeInfo.diskFileSystemType)) {
            // Normal Files app: remove fusebox volumes.
            return false;
        }
        if (!this.isAllowedVolumeType_(volumeInfo.volumeType)) {
            return false;
        }
        return true;
    }
    /**
     * Async part of the initialization.
     */
    async initialize_() {
        this.volumeManager_ = await this.volumeManagerGetter_;
        if (this.disposed_) {
            return;
        }
        // Subscribe to VolumeManager.
        this.volumeManager_.addEventListener('drive-connection-changed', this.onEventBound_);
        this.volumeManager_.addEventListener('externally-unmounted', this.onEventBound_);
        this.volumeManager_.addEventListener(ARCHIVE_OPENED_EVENT_TYPE, this.onEventBound_);
        // Dispatch 'drive-connection-changed' to listeners, since the return value
        // of FilteredVolumeManager.getDriveConnectionState() can be changed by
        // setting this.volumeManager_.
        this.dispatchEvent(new CustomEvent('drive-connection-changed'));
        // Cache volumeInfoList.
        const volumeInfoList = [];
        for (let i = 0; i < this.volumeManager_.volumeInfoList.length; i++) {
            const volumeInfo = this.volumeManager_.volumeInfoList.item(i);
            if (!this.isAllowedVolume(volumeInfo)) {
                continue;
            }
            volumeInfoList.push(volumeInfo);
        }
        this.volumeInfoList.splice(0, this.volumeInfoList.length, ...volumeInfoList);
        // Subscribe to VolumeInfoList.
        // In VolumeInfoList, we only use 'splice' event.
        this.volumeManager_.volumeInfoList.addEventListener('splice', this.onVolumeInfoListUpdatedBound_);
    }
    /**
     * Disposes the instance. After the invocation of this method, any other
     * method should not be called.
     */
    dispose() {
        this.disposed_ = true;
        if (!this.volumeManager_) {
            return;
        }
        this.volumeManager_.removeEventListener('drive-connection-changed', this.onEventBound_);
        this.volumeManager_.removeEventListener('externally-unmounted', this.onEventBound_);
        this.volumeManager_.volumeInfoList.removeEventListener('splice', this.onVolumeInfoListUpdatedBound_);
    }
    /**
     * Called on events sent from VolumeManager. This has responsibility to
     * re-dispatch the event to the listeners.
     * @param event Custom event object sent from VolumeManager.
     */
    onEvent_(event) {
        // Note: Can not re-dispatch the same |event| object, because it throws a
        // runtime "The event is already being dispatched." error.
        switch (event.type) {
            case 'drive-connection-changed':
                if (this.isAllowedVolumeType_(VolumeType.DRIVE)) {
                    this.dispatchEvent(new CustomEvent('drive-connection-changed'));
                }
                break;
            case 'externally-unmounted':
                if (this.isAllowedVolume(event.detail)) {
                    this.dispatchEvent(new CustomEvent('externally-unmount', { detail: event.detail }));
                }
                break;
            case ARCHIVE_OPENED_EVENT_TYPE:
                if (this.getVolumeInfo(event.detail.mountPoint)) {
                    this.dispatchEvent(new CustomEvent(event.type, { detail: event.detail }));
                }
                break;
        }
    }
    /**
     * Called on events of modifying VolumeInfoList.
     * @param event Event object sent from VolumeInfoList.
     */
    onVolumeInfoListUpdated_(event) {
        const spliceEventDetail = event.detail;
        // Filters some volumes.
        let index = spliceEventDetail.index;
        if (spliceEventDetail.index && index) {
            for (let i = 0; i < spliceEventDetail.index; i++) {
                const volumeInfo = this.volumeManager_.volumeInfoList.item(i);
                if (!this.isAllowedVolume(volumeInfo)) {
                    index--;
                }
            }
        }
        let numRemovedVolumes = 0;
        for (let i = 0; i < spliceEventDetail.removed.length; i++) {
            const volumeInfo = spliceEventDetail.removed[i];
            if (this.isAllowedVolume(volumeInfo)) {
                numRemovedVolumes++;
            }
        }
        const addedVolumes = [];
        for (let i = 0; i < spliceEventDetail.added.length; i++) {
            const volumeInfo = spliceEventDetail.added[i];
            if (this.isAllowedVolume(volumeInfo)) {
                addedVolumes.push(volumeInfo);
            }
        }
        this.volumeInfoList.splice(index, numRemovedVolumes, ...addedVolumes);
    }
    /**
     * Ensures the VolumeManager is initialized, and then invokes callback.
     * If the VolumeManager is already initialized, callback will be called
     * immediately.
     * @param callback Called on initialization completion.
     */
    ensureInitialized(callback) {
        this.initialized_.then(callback);
    }
    /**
     * @return Current drive connection state.
     */
    getDriveConnectionState() {
        if (!this.isAllowedVolumeType_(VolumeType.DRIVE) || !this.volumeManager_) {
            return {
                type: chrome.fileManagerPrivate.DriveConnectionStateType.OFFLINE,
                reason: chrome.fileManagerPrivate.DriveOfflineReason.NO_SERVICE,
            };
        }
        return this.volumeManager_.getDriveConnectionState();
    }
    getVolumeInfo(entry) {
        return this.filterDisallowedVolume_(this.volumeManager_ && this.volumeManager_.getVolumeInfo(entry));
    }
    /**
     * Obtains a volume information of the current profile.
     * @param volumeType Volume type.
     * @return Found volume info.
     */
    getCurrentProfileVolumeInfo(volumeType) {
        return this.filterDisallowedVolume_(this.volumeManager_ &&
            this.volumeManager_.getCurrentProfileVolumeInfo(volumeType));
    }
    getDefaultDisplayRoot(callback) {
        this.ensureInitialized(() => {
            const defaultVolume = this.getCurrentProfileVolumeInfo(VolumeType.DOWNLOADS);
            if (!defaultVolume) {
                console.warn('Cannot get default display root');
                callback(null);
                return;
            }
            defaultVolume.resolveDisplayRoot(callback, () => {
                // defaultVolume is DOWNLOADS and resolveDisplayRoot should succeed.
                console.error('Cannot resolve default display root');
                callback(null);
            });
        });
    }
    /**
     * Obtains location information from an entry.
     *
     * @param entry File or directory entry.
     * @return Location information.
     */
    getLocationInfo(entry) {
        const locationInfo = this.volumeManager_ && this.volumeManager_.getLocationInfo(entry);
        if (!locationInfo) {
            return null;
        }
        if (locationInfo.volumeInfo &&
            !this.filterDisallowedVolume_(locationInfo.volumeInfo)) {
            return null;
        }
        return locationInfo;
    }
    findByDevicePath(devicePath) {
        for (let i = 0; i < this.volumeInfoList.length; i++) {
            const volumeInfo = this.volumeInfoList.item(i);
            if (volumeInfo.devicePath && volumeInfo.devicePath === devicePath) {
                return this.filterDisallowedVolume_(volumeInfo);
            }
        }
        return null;
    }
    /**
     * Returns a promise that will be resolved when volume info, identified
     * by {@code volumeId} is created.
     *
     * @return The VolumeInfo. Will not resolve if the volume is never mounted.
     */
    async whenVolumeInfoReady(volumeId) {
        await this.initialized_;
        const volumeInfo = this.filterDisallowedVolume_(await this.volumeManager_.whenVolumeInfoReady(volumeId));
        if (!volumeInfo) {
            throw new Error(`Volume not allowed: ${volumeId}`);
        }
        return volumeInfo;
    }
    async mountArchive(fileUrl, password) {
        await this.initialized_;
        return this.volumeManager_.mountArchive(fileUrl, password);
    }
    async cancelMounting(fileUrl) {
        await this.initialized_;
        return this.volumeManager_.cancelMounting(fileUrl);
    }
    async unmount(volumeInfo) {
        await this.initialized_;
        return this.volumeManager_.unmount(volumeInfo);
    }
    /**
     * Requests configuring of the specified volume.
     * @param volumeInfo Volume to be configured.
     * @return Fulfilled on success, otherwise rejected with an error message.
     */
    async configure(volumeInfo) {
        await this.initialized_;
        return this.volumeManager_.configure(volumeInfo);
    }
    /**
     * Filters volume info by isAllowedVolume_().
     *
     * @return Null if the volume is disallowed. Otherwise just returns the
     *     volume.
     */
    filterDisallowedVolume_(volumeInfo) {
        if (volumeInfo && this.isAllowedVolume(volumeInfo)) {
            return volumeInfo;
        }
        else {
            return null;
        }
    }
    hasDisabledVolumes() {
        return this.disabledVolumes_.length > 0;
    }
    isDisabled(volume) {
        return this.disabledVolumes_.includes(volume);
    }
}
