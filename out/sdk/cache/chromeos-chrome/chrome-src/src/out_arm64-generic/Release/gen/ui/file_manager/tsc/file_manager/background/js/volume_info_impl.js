// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/ash/common/assert.js';
import { FakeEntryImpl } from '../../common/js/files_app_entry_types.js';
import { isDriveFsBulkPinningEnabled } from '../../common/js/flags.js';
import { str } from '../../common/js/util.js';
import { VolumeManagerCommon } from '../../common/js/volume_manager_types.js';
import '../../externs/files_app_entry_interfaces.js';
/**
 * Represents each volume, such as "drive", "download directory", each "USB
 * flush storage", or "mounted zip archive" etc.
 */
export class VolumeInfoImpl {
    /**
     * `volumeType` is the type of the volume.
     * `volumeId` is the ID of the volume.
     * `fileSystem` is the file system object for this volume.
     * `error` is the error if an error is found.
     * `deviceType` is the type of device
     *     ('usb'|'sd'|'optical'|'mobile'|'unknown') (as defined in
     *     chromeos/ash/components/disks/disk_mount_manager.cc). Can be undefined.
     * `devicePath` is the dentifier of the device that the
     *     volume belongs to. Can be undefined.
     * `isReadOnly` is true if the volume is read only.
     * `isReadOnlyRemovableDevice` is true if the volume is read only
     *     removable device.
     * `profile` is the profile information.
     * `label` is the abel of the volume.
     * `providerId` is the Id of the provider for this volume.
     *     Undefined for non-FSP volumes.
     * `hasMedia` is true when the volume has been identified
     *     as containing media such as photos or videos.
     * `configurable` is true when the volume can be configured.
     * `watchable` is true when the volume can be watched.
     * `source` is the source of the volume's data.
     * `diskFileSystemType` is the file system type identifier.
     * `iconSet` is the set of icons for this volume.
     * `driveLabel` is the drive label of the volume. Removable
     *     partitions belonging to the same device will share the same drive
     *     label.
     * `remoteMountPath` is the path on the remote host
     *     where this volume is mounted, for crostini this is the user's homedir
     *     (/home/<username>).
     * `vmType` is the type of the VM which owns the volume if this is a
     *     GuestOS volume.
     */
    constructor(volumeType_, volumeId_, fileSystem_, 
    // Note: This represents if the mounting of the volume is successfully
    // done or not. (If error is empty string, the mount is successfully
    // done).
    // TODO(hidehiko): Rename to make this more understandable.
    error_, deviceType_, devicePath_, isReadOnly_, isReadOnlyRemovableDevice_, profile_, label_, providerId_, hasMedia_, configurable_, watchable_, source_, diskFileSystemType_, iconSet_, driveLabel_, remoteMountPath_, vmType_) {
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
        this.hasMedia_ = hasMedia_;
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
        if (volumeType_ === VolumeManagerCommon.VolumeType.DRIVE) {
            if (!isDriveFsBulkPinningEnabled()) {
                this.fakeEntries_[VolumeManagerCommon.RootType.DRIVE_OFFLINE] =
                    new FakeEntryImpl(str('DRIVE_OFFLINE_COLLECTION_LABEL'), VolumeManagerCommon.RootType.DRIVE_OFFLINE);
            }
            this.fakeEntries_[VolumeManagerCommon.RootType.DRIVE_SHARED_WITH_ME] =
                new FakeEntryImpl(str('DRIVE_SHARED_WITH_ME_COLLECTION_LABEL'), VolumeManagerCommon.RootType.DRIVE_SHARED_WITH_ME);
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
    get fakeEntries() {
        return this.fakeEntries_;
    }
    get error() {
        return this.error_;
    }
    get deviceType() {
        return this.deviceType_;
    }
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
     * Label for the volume.
     */
    get label() {
        return this.label_;
    }
    get providerId() {
        return this.providerId_;
    }
    get hasMedia() {
        return this.hasMedia_;
    }
    /**
     * True if the volume is configurable.
     */
    get configurable() {
        return this.configurable_;
    }
    /**
     * True if the volume is watchable.
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
     * An entry to be used as prefix of this volume on breadcrumbs, e.g. "My Files
     * > Downloads", "My Files" is a prefixEntry on "Downloads" VolumeInfo.
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
        return VolumeInfoImpl
            .resolveFileSystemUrl_(this.fileSystem_.root.toURL() +
            VolumeManagerCommon.SHARED_DRIVES_DIRECTORY_NAME)
            .then(sharedDrivesRoot => {
            this.sharedDriveDisplayRoot_ = sharedDrivesRoot;
        }, error => {
            if (error.name != 'NotFoundError') {
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
        return VolumeInfoImpl
            .resolveFileSystemUrl_(this.fileSystem_.root.toURL() +
            VolumeManagerCommon.COMPUTERS_DIRECTORY_NAME)
            .then((computersRoot) => {
            this.computersDisplayRoot_ = computersRoot;
        }, (error) => {
            if (error.name != 'NotFoundError') {
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
        if (this.volumeType !== VolumeManagerCommon.VolumeType.DRIVE) {
            this.displayRoot_ = this.fileSystem_.root;
            return Promise.resolve(this.displayRoot_);
        }
        // For Drive, we need to resolve.
        const displayRootURL = this.fileSystem_.root.toURL() + 'root';
        const [displayRoot] = await Promise.all([
            VolumeInfoImpl.resolveFileSystemUrl_(displayRootURL),
            this.resolveSharedDrivesRoot_(),
            this.resolveComputersRoot_(),
        ]);
        // Store the obtained displayRoot.
        this.displayRoot_ = displayRoot;
        return this.displayRoot_;
    }
    resolveDisplayRoot(optOnSuccess, optOnFailure) {
        if (optOnSuccess) {
            this.displayRootPromise_.then(optOnSuccess, optOnFailure);
        }
        return assert(this.displayRootPromise_);
    }
}
