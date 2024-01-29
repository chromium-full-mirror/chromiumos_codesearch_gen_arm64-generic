// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/ash/common/assert.js';
import { FakeEntry, FakeEntryImpl, FilesAppEntry } from '../../common/js/files_app_entry_types.js';
import { isDriveFsBulkPinningEnabled } from '../../common/js/flags.js';
import { str } from '../../common/js/translations.js';
import { COMPUTERS_DIRECTORY_NAME, FileSystemType, RootType, SHARED_DRIVES_DIRECTORY_NAME, Source, VolumeType } from '../../common/js/volume_manager_types.js';
/**
 * Represents each volume, such as "drive", "download directory", each "USB
 * flush storage", or "mounted zip archive" etc.
 */
export class VolumeInfo {
    /**
     * @param volumeType is the type of the volume.
     * @param volumeId is the ID of the volume.
     * @param fileSystem is the file system object for this volume.
     * @param error is the error if an error is found. Note: This represents if
     *     the mounting of the volume is successfully done or not. (If error is
     *     empty string, the mount is successfully done).
     * @param deviceType is the type of device
     *     ('usb'|'sd'|'optical'|'mobile'|'unknown') (as defined in
     *     chromeos/ash/components/disks/disk_mount_manager.cc). Can be undefined.
     * @param devicePath is the identifier of the device that the volume belongs
     *     to. Can be undefined.
     * @param isReadOnly is true if the volume is read only.
     * @param isReadOnlyRemovableDevice is true if the volume is read only
     *     removable device.
     * @param profile is the profile information.
     * @param label is the abel of the volume.
     * @param providerId is the Id of the provider for this volume. Undefined for
     *     non-FSP volumes.
     * @param configurable is true when the volume can be configured.
     * @param watchable is true when the volume can be watched.
     * @param source is the source of the volume's data.
     * @param diskFileSystemType is the file system type identifier.
     * @param iconSet is the set of icons for this volume.
     * @param driveLabel is the drive label of the volume. Removable partitions
     *     belonging to the same device will share the same drive label.
     * @param remoteMountPath is the path on the remote host where this volume is
     *     mounted, for crostini this is the user's homedir (/home/<username>).
     * @param vmType is the type of the VM which owns the volume if this is a
     *     GuestOS volume.
     */
    constructor(volumeType_, volumeId_, fileSystem_, error_, deviceType_, devicePath_, isReadOnly_, isReadOnlyRemovableDevice_, profile_, label_, providerId_, configurable_, watchable_, source_, diskFileSystemType_, iconSet_, driveLabel_, remoteMountPath_, vmType_) {
        this.volumeType_ = volumeType_;
        this.volumeId_ = volumeId_;
        this.fileSystem_ = fileSystem_;
        this.error_ = error_;
        this.deviceType_ = deviceType_;
        this.devicePath_ = devicePath_;
        this.isReadOnly_ = isReadOnly_;
        this.isReadOnlyRemovableDevice_ = isReadOnlyRemovableDevice_;
        this.profile_ = profile_;
        this.label_ = label_;
        this.providerId_ = providerId_;
        this.configurable_ = configurable_;
        this.watchable_ = watchable_;
        this.source_ = source_;
        this.diskFileSystemType_ = diskFileSystemType_;
        this.iconSet_ = iconSet_;
        this.driveLabel_ = driveLabel_;
        this.remoteMountPath_ = remoteMountPath_;
        this.vmType_ = vmType_;
        this.displayRoot_ = null;
        this.sharedDriveDisplayRoot_ = null;
        this.computersDisplayRoot_ = null;
        /**
         * An entry to be used as prefix of this volume on breadcrumbs, e.g. "My Files
         * > Downloads", "My Files" is a prefixEntry on "Downloads" VolumeInfo.
         */
        this.prefixEntry_ = null;
        this.fakeEntries_ = {};
        this.displayRoot_ = null;
        this.sharedDriveDisplayRoot_ = null;
        this.computersDisplayRoot_ = null;
        this.prefixEntry_ = null;
        this.fakeEntries_ = {};
        if (volumeType_ === VolumeType.DRIVE) {
            if (!isDriveFsBulkPinningEnabled()) {
                this.fakeEntries_[RootType.DRIVE_OFFLINE] = new FakeEntryImpl(str('DRIVE_OFFLINE_COLLECTION_LABEL'), RootType.DRIVE_OFFLINE);
            }
            this.fakeEntries_[RootType.DRIVE_SHARED_WITH_ME] = new FakeEntryImpl(str('DRIVE_SHARED_WITH_ME_COLLECTION_LABEL'), RootType.DRIVE_SHARED_WITH_ME);
        }
        this.displayRootPromise_ = this.resolveDisplayRootImpl_();
    }
    get volumeType() {
        return this.volumeType_;
    }
    get volumeId() {
        return this.volumeId_;
    }
    get fileSystem() {
        // TODO(b/309054429): fileSystem could be null, handle it gracefully.
        return this.fileSystem_;
    }
    /** Display root path. It is null before finishing to resolve the entry. */
    get displayRoot() {
        return this.displayRoot_;
    }
    /**
     * The display root path of Shared Drives directory. It is null before
     * finishing to resolve the entry. Valid only for Drive volume.
     */
    get sharedDriveDisplayRoot() {
        return this.sharedDriveDisplayRoot_;
    }
    /**
     * The display root path of Computers directory. It is null before finishing
     * to resolve the entry. Valid only for Drive volume.
     */
    get computersDisplayRoot() {
        return this.computersDisplayRoot_;
    }
    /**
     * The volume's fake entries such as Recent, Offline, Shared with me, etc...
     * in Google Drive.
     */
    get fakeEntries() {
        return this.fakeEntries_;
    }
    /**
     * This represents if the mounting of the volume is successfully done or
     * not. (If error is empty string, the mount is successfully done)
     */
    get error() {
        return this.error_;
    }
    /**
     * The type of device. (e.g. USB, SD card, DVD etc.)
     */
    get deviceType() {
        return this.deviceType_;
    }
    /**
     * If the volume is removable, devicePath is the path of the system device
     * this device's block is a part of. (e.g.
     * /sys/devices/pci0000:00/.../8:0:0:0/) Otherwise, this should be empty.
     */
    get devicePath() {
        return this.devicePath_;
    }
    get isReadOnly() {
        return this.isReadOnly_;
    }
    /**
     * Whether the device is read-only removable device or not.
     */
    get isReadOnlyRemovableDevice() {
        return this.isReadOnlyRemovableDevice_;
    }
    get profile() {
        return this.profile_;
    }
    /**
     * Label for the volume if the volume is either removable or a provided file
     * system. In case of removables, if disk is a parent, then its label, else
     * parent's label (e.g. "TransMemory").
     */
    get label() {
        return this.label_;
    }
    /**
     * ID of a provider for this volume.
     */
    get providerId() {
        return this.providerId_;
    }
    /**
     * True if the volume is configurable.
     * See https://developer.chrome.com/apps/fileSystemProvider.
     */
    get configurable() {
        return this.configurable_;
    }
    /**
     * True if the volume notifies about changes via file/directory watchers.
     */
    get watchable() {
        return this.watchable_;
    }
    /**
     * Source of the volume's data.
     */
    get source() {
        return this.source_;
    }
    /**
     * File system type identifier.
     */
    get diskFileSystemType() {
        return this.diskFileSystemType_;
    }
    /**
     * Set of icons for this volume.
     */
    get iconSet() {
        return this.iconSet_;
    }
    /**
     * Drive label for the volume. Removable partitions belonging to the same
     * physical media device will share the same drive label.
     */
    get driveLabel() {
        return this.driveLabel_;
    }
    /**
     * The path on the remote host where this volume is mounted, for crostini this
     * is the user's homedir (/home/<username>).
     */
    get remoteMountPath() {
        return this.remoteMountPath_;
    }
    /**
     * An entry to be used as prefix of this volume on breadcrumbs,
     * e.g. "My Files > Downloads"
     * "My Files" is a prefixEntry on "Downloads" VolumeInfo.
     */
    get prefixEntry() {
        return this.prefixEntry_;
    }
    set prefixEntry(entry) {
        this.prefixEntry_ = entry;
    }
    /**
     * If this is a GuestOS volume, the type of the VM which owns this volume.
     */
    get vmType() {
        return this.vmType_;
    }
    /**
     * Returns a promise to the entry for the given URL
     */
    static resolveFileSystemUrl_(url) {
        return new Promise(window.webkitResolveLocalFileSystemURL.bind(null, url));
    }
    /**
     * Sets |sharedDriveDisplayRoot_| if team drives are enabled.
     *
     * The return value will resolve once this operation is complete.
     */
    resolveSharedDrivesRoot_() {
        if (!this.fileSystem_) {
            return Promise.reject(this.error);
        }
        return VolumeInfo
            .resolveFileSystemUrl_(this.fileSystem_.root.toURL() + SHARED_DRIVES_DIRECTORY_NAME)
            .then(sharedDrivesRoot => {
            this.sharedDriveDisplayRoot_ = sharedDrivesRoot;
        }, error => {
            if (error.name !== 'NotFoundError') {
                throw error;
            }
        });
    }
    /**
     * Sets |computersDisplayRoot_| if Computers are enabled.
     *
     * If Computers are not enabled, resolveFileSystemUrl_ will return a
     * 'NotFoundError' which will be caught here. Any other errors will be
     * rethrown.
     *
     * The return value will resolve once this operation is complete.
     */
    resolveComputersRoot_() {
        if (!this.fileSystem_) {
            return Promise.reject(this.error);
        }
        return VolumeInfo
            .resolveFileSystemUrl_(this.fileSystem_.root.toURL() + COMPUTERS_DIRECTORY_NAME)
            .then((computersRoot) => {
            this.computersDisplayRoot_ = computersRoot;
        }, (error) => {
            if (error.name !== 'NotFoundError') {
                throw error;
            }
        });
    }
    /**
     * Returns a promise that resolves when the display root is resolved.
     */
    async resolveDisplayRootImpl_() {
        if (!this.fileSystem_) {
            return Promise.reject(this.error);
        }
        if (this.volumeType !== VolumeType.DRIVE) {
            this.displayRoot_ = this.fileSystem_.root;
            return Promise.resolve(this.displayRoot_);
        }
        // For Drive, we need to resolve.
        const displayRootURL = this.fileSystem_.root.toURL() + 'root';
        const [displayRoot] = await Promise.all([
            VolumeInfo.resolveFileSystemUrl_(displayRootURL),
            this.resolveSharedDrivesRoot_(),
            this.resolveComputersRoot_(),
        ]);
        // Store the obtained displayRoot.
        this.displayRoot_ = displayRoot;
        return this.displayRoot_;
    }
    /**
     * Starts resolving the display root and obtains it.  It may take long time
     * for Drive. Once resolved, it is cached.
     *
     * @param onSuccess Success callback with the display root directory as an
     *     argument.
     */
    resolveDisplayRoot(optOnSuccess, optOnFailure) {
        if (optOnSuccess) {
            this.displayRootPromise_.then(optOnSuccess, optOnFailure);
        }
        return assert(this.displayRootPromise_);
    }
}
