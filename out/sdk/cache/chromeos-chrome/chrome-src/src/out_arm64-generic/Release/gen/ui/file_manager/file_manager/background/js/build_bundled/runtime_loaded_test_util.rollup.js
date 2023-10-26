import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import 'chrome://resources/mwc/lit/index.js';

// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * State of progress items.
 * @const @enum {string}
 */
const ProgressItemState = {
    SCANNING: 'scanning',
    PROGRESSING: 'progressing',
    COMPLETED: 'completed',
    ERROR: 'error',
    CANCELED: 'canceled',
    PAUSED: 'paused',
};
Object.freeze(ProgressItemState);
/**
 * Item of the progress center.
 */
class ProgressCenterItem {
    constructor() {
        /**
         * Item ID.
         * @private @type {string}
         */
        this.id_ = '';
        /**
         * State of the progress item.
         * @type {ProgressItemState}
         */
        this.state = ProgressItemState.PROGRESSING;
        /**
         * Message of the progress item.
         * @type {string}
         */
        this.message = '';
        /**
         * Source message for the progress item.
         * @type {string}
         */
        this.sourceMessage = '';
        /**
         * Destination message for the progress item.
         * @type {string}
         */
        this.destinationMessage = '';
        /**
         * Number of items being processed.
         * @type {number}
         */
        this.itemCount = 0;
        /**
         * Max value of the progress.
         * @type {number}
         */
        this.progressMax = 0;
        /**
         * Current value of the progress.
         * @type {number}
         */
        this.progressValue = 0;
        /**
         * Type of progress item.
         * @type {?ProgressItemType}
         */
        this.type = null;
        /**
         * Whether the item represents a single item or not.
         * @type {boolean}
         */
        this.single = true;
        /**
         * If the property is true, only the message of item shown in the progress
         * center and the notification of the item is created as priority = -1.
         * @type {boolean}
         */
        this.quiet = false;
        /**
         * Callback function to cancel the item.
         * @type {?function():void}
         */
        this.cancelCallback = null;
        /**
         * Optional callback to be invoked after dismissing the item.
         */
        // @ts-ignore: error TS7008: Member 'dismissCallback' implicitly has an
        // 'any' type.
        this.dismissCallback = null;
        /**
         * The predicted remaining time to complete the progress item in seconds.
         * @type {number}
         */
        this.remainingTime;
        /**
         * Contains the text and callback on an extra button when the progress
         * center item is either in COMPLETED, ERROR, or PAUSED state.
         * @type {!Map<!ProgressItemState, !ProgressItemExtraButton>}
         */
        this.extraButton = new Map();
        /**
         * In the case of a copy/move operation, whether the destination folder is
         * a child of My Drive.
         * @type {boolean}
         */
        this.isDestinationDrive = false;
        /**
         * The type of policy error that occurred, if any.
         * @type {?PolicyErrorType}
         */
        this.policyError = null;
        /**
         * The number of files with a policy restriction, if any.
         * @type {?number}
         */
        this.policyFileCount = null;
        /**
         * The name of the first file with a policy restriction, if any.
         * @type {?string}
         */
        this.policyFileName = null;
    }
    /**
     * Sets the extra button text and callback. Use this to add an additional
     * button with configurable functionality.
     * @param {string} text Text to use for the button.
     * @param {!ProgressItemState} state Which state to show the button for.
     *     Currently only `ProgressItemState.COMPLETED`,
     * `ProgressItemState.ERROR`, and `ProgressItemState.PAUSED` are supported.
     * @param {!function():void} callback The callback to invoke when the button
     *     is pressed.
     */
    setExtraButton(state, text, callback) {
        if (!text || !callback) {
            console.warn('Text and callback must be supplied');
            return;
        }
        if (this.extraButton.has(state)) {
            console.warn('Extra button already defined for state:', state);
            return;
        }
        const extraButton = { text, callback };
        this.extraButton.set(state, extraButton);
    }
    /**
     * Setter of Item ID.
     * @param {string} value New value of ID.
     */
    set id(value) {
        if (!this.id_) {
            this.id_ = value;
        }
        else {
            console.error('The ID is already set. (current ID: ' + this.id_ + ')');
        }
    }
    /**
     * Getter of Item ID.
     * @return {string} Item ID.
     */
    get id() {
        return this.id_;
    }
    /**
     * Gets progress rate in percent.
     *
     * If the current state is canceled or completed, it always returns 0 or 100
     * respectively.
     *
     * @return {number} Progress rate in percent.
     */
    get progressRateInPercent() {
        switch (this.state) {
            case ProgressItemState.CANCELED:
                return 0;
            case ProgressItemState.COMPLETED:
                return 100;
            default:
                return ~~(100 * this.progressValue / this.progressMax);
        }
    }
    /**
     * Whether the item can be canceled or not.
     * @return {boolean} True if the item can be canceled.
     */
    get cancelable() {
        return !!(this.state == ProgressItemState.PROGRESSING &&
            this.cancelCallback && this.single) ||
            !!(this.state == ProgressItemState.PAUSED && this.cancelCallback);
    }
    /**
     * Clones the item.
     * @return {!ProgressCenterItem} New item having the same properties as this.
     */
    clone() {
        const clonedItem = Object.assign(new ProgressCenterItem(), this);
        return /** @type {!ProgressCenterItem} */ (clonedItem);
    }
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Verify |value| is truthy.
 * @param value A value to check for truthiness. Note that this
 *     may be used to test whether |value| is defined or not, and we don't want
 *     to force a cast to boolean.
 */
function assert$1(value, message) {
    if (value) {
        return;
    }
    throw new Error('Assertion failed' + (message ? `: ${message}` : ''));
}
/**
 * Call this from places in the code that should never be reached.
 *
 * For example, handling all the values of enum with a switch() like this:
 *
 *   function getValueFromEnum(enum) {
 *     switch (enum) {
 *       case ENUM_FIRST_OF_TWO:
 *         return first
 *       case ENUM_LAST_OF_TWO:
 *         return last;
 *     }
 *     assertNotReached();
 *   }
 *
 * This code should only be hit in the case of serious programmer error or
 * unexpected input.
 */
function assertNotReached$1(message = 'Unreachable code hit') {
    assert$1(false, message);
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Trusted script URLs used by the Files app.
const ALLOWED_SCRIPT_URLS = new Set([
    'foreground/js/main.js',
    'background/js/runtime_loaded_test_util.js',
    'foreground/js/deferred_elements.js',
    'foreground/js/metadata/metadata_dispatcher.js',
]);
if (!window.hasOwnProperty('trustedScriptUrlPolicy_')) {
    assert$1(window.trustedTypes);
    window.trustedScriptUrlPolicy_ =
        window.trustedTypes.createPolicy('file-manager-trusted-script', {
            createScriptURL: (url) => {
                if (!ALLOWED_SCRIPT_URLS.has(url)) {
                    throw new Error('Script URL not allowed: ' + url);
                }
                return url;
            },
            createHTML: () => assertNotReached$1(),
            createScript: () => assertNotReached$1(),
        });
}
/**
 * Create a TrustedTypes script URL policy from a list of allowed sources, and
 * return a sanitized script URL using this policy.
 *
 * @param url Script URL to be sanitized.
 */
function getSanitizedScriptUrl(url) {
    assert$1(window.trustedScriptUrlPolicy_);
    return window.trustedScriptUrlPolicy_.createScriptURL(url);
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Used to load scripts at a runtime. Typical use:
 *
 * await new ScriptLoader('its_time.js').load();
 *
 * Optional parameters may be also specified:
 *
 * await new ScriptLoader('its_time.js', {type: 'module'}).load();
 */
class ScriptLoader {
    /**
     * Creates a loader that loads the script specified by |src| once the load
     * method is called. Optional |params| can specify other script attributes.
     */
    constructor(src_, params = {}) {
        this.src_ = src_;
        this.type_ = params.type;
        this.defer_ = params.defer;
    }
    async load() {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            if (this.type_ !== undefined) {
                script.type = this.type_;
            }
            if (this.defer_ !== undefined) {
                script.defer = this.defer_;
            }
            script.onload = () => resolve(this.src_);
            script.onerror = (error) => reject(error);
            script.src = getSanitizedScriptUrl(this.src_);
            document.head.append(script);
        });
    }
}

// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Assertion support.
 */

/**
 * Note: This method is deprecated. Use the equvalent method in assert_ts.ts
 * instead.
 * Verify |condition| is truthy and return |condition| if so.
 * @template T
 * @param {T} condition A condition to check for truthiness.  Note that this
 *     may be used to test whether a value is defined or not, and we don't want
 *     to force a cast to Boolean.
 * @param {string=} opt_message A message to show on failure.
 * @return {T} A non-null |condition|.
 * @closurePrimitive {asserts.truthy}
 * @suppress {reportUnknownTypes} because T is not sufficiently constrained.
 */
function assert(condition, opt_message) {
  if (!condition) {
    let message = 'Assertion failed';
    if (opt_message) {
      message = message + ': ' + opt_message;
    }
    const error = new Error(message);
    const global = function() {
      const thisOrSelf = this || self;
      /** @type {boolean} */
      thisOrSelf.traceAssertionsForTesting;
      return thisOrSelf;
    }();
    if (global.traceAssertionsForTesting) {
      console.warn(error.stack);
    }
    throw error;
  }
  return condition;
}

/**
 * Note: This method is deprecated. Use the equvalent method in assert_ts.ts
 * instead.
 * Call this from places in the code that should never be reached.
 *
 * For example, handling all the values of enum with a switch() like this:
 *
 *   function getValueFromEnum(enum) {
 *     switch (enum) {
 *       case ENUM_FIRST_OF_TWO:
 *         return first
 *       case ENUM_LAST_OF_TWO:
 *         return last;
 *     }
 *     assertNotReached();
 *     return document;
 *   }
 *
 * This code should only be hit in the case of serious programmer error or
 * unexpected input.
 *
 * @param {string=} message A message to show when this is hit.
 * @closurePrimitive {asserts.fail}
 */
function assertNotReached(message) {
  assert(false, message || 'Unreachable code hit');
}

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Namespace for common types.
 */
const VolumeManagerCommon = {};
/**
 * Type of a file system.
 * @enum {string}
 * @const
 */
VolumeManagerCommon.FileSystemType = {
    UNKNOWN: '',
    VFAT: 'vfat',
    EXFAT: 'exfat',
    NTFS: 'ntfs',
    HFSPLUS: 'hfsplus',
    EXT2: 'ext2',
    EXT3: 'ext3',
    EXT4: 'ext4',
    ISO9660: 'iso9660',
    UDF: 'udf',
};
/**
 * Volume name length limits by file system type
 * @enum {number}
 * @const
 */
VolumeManagerCommon.FileSystemTypeVolumeNameLengthLimit = {
    'vfat': 11,
    'exfat': 15,
    'ntfs': 32,
};
/**
 * Type of a navigation root.
 *
 * Navigation root are the top-level entries in the navigation tree, in the left
 * hand side.
 *
 * This must be kept synchronised with the VolumeManagerRootType variant in
 * tools/metrics/histograms/metadata/file/histograms.xml.
 *
 * @enum {string}
 * @const
 */
VolumeManagerCommon.RootType = {
    // Root for a downloads directory.
    DOWNLOADS: 'downloads',
    // Root for a mounted archive volume.
    ARCHIVE: 'archive',
    // Root for a removable volume.
    REMOVABLE: 'removable',
    // Root for a drive volume.
    DRIVE: 'drive',
    // The grand root entry of Shared Drives in Drive volume.
    SHARED_DRIVES_GRAND_ROOT: 'shared_drives_grand_root',
    // Root directory of a Shared Drive.
    SHARED_DRIVE: 'team_drive',
    // Root for a MTP volume.
    MTP: 'mtp',
    // Root for a provided volume.
    PROVIDED: 'provided',
    // Fake root for offline available files on the drive.
    DRIVE_OFFLINE: 'drive_offline',
    // Fake root for shared files on the drive.
    DRIVE_SHARED_WITH_ME: 'drive_shared_with_me',
    // Fake root for recent files on the drive.
    DRIVE_RECENT: 'drive_recent',
    // Root for media views.
    MEDIA_VIEW: 'media_view',
    // Root for documents providers.
    DOCUMENTS_PROVIDER: 'documents_provider',
    // Fake root for the mixed "Recent" view.
    RECENT: 'recent',
    // 'Google Drive' fake parent entry of 'My Drive', 'Shared with me' and
    // 'Offline'.
    DRIVE_FAKE_ROOT: 'drive_fake_root',
    // Root for crostini 'Linux files'.
    CROSTINI: 'crostini',
    // Root for mountable Guest OSs.
    GUEST_OS: 'guest_os',
    // Root for android files.
    ANDROID_FILES: 'android_files',
    // My Files root, which aggregates DOWNLOADS, ANDROID_FILES and CROSTINI.
    MY_FILES: 'my_files',
    // The grand root entry of My Computers in Drive volume.
    COMPUTERS_GRAND_ROOT: 'computers_grand_root',
    // Root directory of a Computer.
    COMPUTER: 'computer',
    // Root directory of an external media folder under computers grand root.
    EXTERNAL_MEDIA: 'external_media',
    // Root directory of an SMB file share.
    SMB: 'smb',
    // Trash.
    TRASH: 'trash',
};
Object.freeze(VolumeManagerCommon.RootType);
/**
 * Keep the order of this in sync with FileManagerRootType in
 * tools/metrics/histograms/enums.xml.
 * The array indices will be recorded in UMA as enum values. The index for each
 * root type should never be renumbered nor reused in this array.
 *
 * @type {!Array<VolumeManagerCommon.RootType>}
 * @const
 */
VolumeManagerCommon.RootTypesForUMA = [
    VolumeManagerCommon.RootType.DOWNLOADS,
    VolumeManagerCommon.RootType.ARCHIVE,
    VolumeManagerCommon.RootType.REMOVABLE,
    VolumeManagerCommon.RootType.DRIVE,
    VolumeManagerCommon.RootType.SHARED_DRIVES_GRAND_ROOT,
    VolumeManagerCommon.RootType.SHARED_DRIVE,
    VolumeManagerCommon.RootType.MTP,
    VolumeManagerCommon.RootType.PROVIDED,
    'DEPRECATED_DRIVE_OTHER',
    VolumeManagerCommon.RootType.DRIVE_OFFLINE,
    VolumeManagerCommon.RootType.DRIVE_SHARED_WITH_ME,
    VolumeManagerCommon.RootType.DRIVE_RECENT,
    VolumeManagerCommon.RootType.MEDIA_VIEW,
    VolumeManagerCommon.RootType.RECENT,
    VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT,
    'DEPRECATED_ADD_NEW_SERVICES_MENU',
    VolumeManagerCommon.RootType.CROSTINI,
    VolumeManagerCommon.RootType.ANDROID_FILES,
    VolumeManagerCommon.RootType.MY_FILES,
    VolumeManagerCommon.RootType.COMPUTERS_GRAND_ROOT,
    VolumeManagerCommon.RootType.COMPUTER,
    VolumeManagerCommon.RootType.EXTERNAL_MEDIA,
    VolumeManagerCommon.RootType.DOCUMENTS_PROVIDER,
    VolumeManagerCommon.RootType.SMB,
    'DEPRECATED_RECENT_AUDIO',
    'DEPRECATED_RECENT_IMAGES',
    'DEPRECATED_RECENT_VIDEOS',
    VolumeManagerCommon.RootType.TRASH,
    VolumeManagerCommon.RootType.GUEST_OS, // 28
];
/**
 * Error type of VolumeManager.
 * @enum {string}
 * @const
 */
VolumeManagerCommon.VolumeError = {
    /* Internal errors */
    TIMEOUT: 'timeout',
    /* System events */
    UNKNOWN_ERROR: chrome.fileManagerPrivate.MountError.UNKNOWN_ERROR,
    INTERNAL_ERROR: chrome.fileManagerPrivate.MountError.INTERNAL_ERROR,
    INVALID_ARGUMENT: chrome.fileManagerPrivate.MountError.INVALID_ARGUMENT,
    INVALID_PATH: chrome.fileManagerPrivate.MountError.INVALID_PATH,
    PATH_ALREADY_MOUNTED: chrome.fileManagerPrivate.MountError.PATH_ALREADY_MOUNTED,
    PATH_NOT_MOUNTED: chrome.fileManagerPrivate.MountError.PATH_NOT_MOUNTED,
    DIRECTORY_CREATION_FAILED: chrome.fileManagerPrivate.MountError.DIRECTORY_CREATION_FAILED,
    INVALID_MOUNT_OPTIONS: chrome.fileManagerPrivate.MountError.INVALID_MOUNT_OPTIONS,
    INSUFFICIENT_PERMISSIONS: chrome.fileManagerPrivate.MountError.INSUFFICIENT_PERMISSIONS,
    MOUNT_PROGRAM_NOT_FOUND: chrome.fileManagerPrivate.MountError.MOUNT_PROGRAM_NOT_FOUND,
    MOUNT_PROGRAM_FAILED: chrome.fileManagerPrivate.MountError.MOUNT_PROGRAM_FAILED,
    INVALID_DEVICE_PATH: chrome.fileManagerPrivate.MountError.INVALID_DEVICE_PATH,
    UNKNOWN_FILESYSTEM: chrome.fileManagerPrivate.MountError.UNKNOWN_FILESYSTEM,
    UNSUPPORTED_FILESYSTEM: chrome.fileManagerPrivate.MountError.UNSUPPORTED_FILESYSTEM,
    NEED_PASSWORD: chrome.fileManagerPrivate.MountError.NEED_PASSWORD,
    CANCELLED: chrome.fileManagerPrivate.MountError.CANCELLED,
    BUSY: chrome.fileManagerPrivate.MountError.BUSY,
};
Object.freeze(VolumeManagerCommon.VolumeError);
/**
 * The type of each volume.
 * @enum {string}
 * @const
 */
VolumeManagerCommon.VolumeType = {
    DRIVE: 'drive',
    DOWNLOADS: 'downloads',
    REMOVABLE: 'removable',
    ARCHIVE: 'archive',
    MTP: 'mtp',
    PROVIDED: 'provided',
    MEDIA_VIEW: 'media_view',
    DOCUMENTS_PROVIDER: 'documents_provider',
    CROSTINI: 'crostini',
    GUEST_OS: 'guest_os',
    ANDROID_FILES: 'android_files',
    MY_FILES: 'my_files',
    SMB: 'smb',
    SYSTEM_INTERNAL: 'system_internal',
    TRASH: 'trash',
};
/**
 * Source of each volume's data.
 * @enum {string}
 * @const
 */
VolumeManagerCommon.Source = {
    FILE: 'file',
    DEVICE: 'device',
    NETWORK: 'network',
    SYSTEM: 'system',
};
Object.freeze(VolumeManagerCommon.VolumeType);
/**
 * Obtains volume type from root type.
 * @param {VolumeManagerCommon.RootType} rootType RootType
// @ts-ignore: error TS2366: Function lacks ending return statement and return
type does not include 'undefined'.
 * @return {VolumeManagerCommon.VolumeType}
 */
VolumeManagerCommon.getVolumeTypeFromRootType = rootType => {
    switch (rootType) {
        case VolumeManagerCommon.RootType.DOWNLOADS:
            return VolumeManagerCommon.VolumeType.DOWNLOADS;
        case VolumeManagerCommon.RootType.ARCHIVE:
            return VolumeManagerCommon.VolumeType.ARCHIVE;
        case VolumeManagerCommon.RootType.REMOVABLE:
            return VolumeManagerCommon.VolumeType.REMOVABLE;
        case VolumeManagerCommon.RootType.DRIVE:
        case VolumeManagerCommon.RootType.SHARED_DRIVES_GRAND_ROOT:
        case VolumeManagerCommon.RootType.SHARED_DRIVE:
        case VolumeManagerCommon.RootType.DRIVE_OFFLINE:
        case VolumeManagerCommon.RootType.DRIVE_SHARED_WITH_ME:
        case VolumeManagerCommon.RootType.DRIVE_RECENT:
        case VolumeManagerCommon.RootType.COMPUTERS_GRAND_ROOT:
        case VolumeManagerCommon.RootType.COMPUTER:
        case VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT:
        case VolumeManagerCommon.RootType.EXTERNAL_MEDIA:
            return VolumeManagerCommon.VolumeType.DRIVE;
        case VolumeManagerCommon.RootType.MTP:
            return VolumeManagerCommon.VolumeType.MTP;
        case VolumeManagerCommon.RootType.PROVIDED:
            return VolumeManagerCommon.VolumeType.PROVIDED;
        case VolumeManagerCommon.RootType.MEDIA_VIEW:
            return VolumeManagerCommon.VolumeType.MEDIA_VIEW;
        case VolumeManagerCommon.RootType.DOCUMENTS_PROVIDER:
            return VolumeManagerCommon.VolumeType.DOCUMENTS_PROVIDER;
        case VolumeManagerCommon.RootType.CROSTINI:
            return VolumeManagerCommon.VolumeType.CROSTINI;
        case VolumeManagerCommon.RootType.GUEST_OS:
            return VolumeManagerCommon.VolumeType.GUEST_OS;
        case VolumeManagerCommon.RootType.ANDROID_FILES:
            return VolumeManagerCommon.VolumeType.ANDROID_FILES;
        case VolumeManagerCommon.RootType.MY_FILES:
            return VolumeManagerCommon.VolumeType.MY_FILES;
        case VolumeManagerCommon.RootType.SMB:
            return VolumeManagerCommon.VolumeType.SMB;
        case VolumeManagerCommon.RootType.TRASH:
            return VolumeManagerCommon.VolumeType.TRASH;
    }
    assertNotReached('Unknown root type: ' + rootType);
    return VolumeManagerCommon.VolumeType.DOWNLOADS;
};
/**
 * Obtains root type from volume type.
 * @param {VolumeManagerCommon.VolumeType} volumeType .
// @ts-ignore: error TS2366: Function lacks ending return statement and return
type does not include 'undefined'.
 * @return {VolumeManagerCommon.RootType}
 */
VolumeManagerCommon.getRootTypeFromVolumeType = volumeType => {
    switch (volumeType) {
        case VolumeManagerCommon.VolumeType.ANDROID_FILES:
            return VolumeManagerCommon.RootType.ANDROID_FILES;
        case VolumeManagerCommon.VolumeType.ARCHIVE:
            return VolumeManagerCommon.RootType.ARCHIVE;
        case VolumeManagerCommon.VolumeType.CROSTINI:
            return VolumeManagerCommon.RootType.CROSTINI;
        case VolumeManagerCommon.VolumeType.GUEST_OS:
            return VolumeManagerCommon.RootType.GUEST_OS;
        case VolumeManagerCommon.VolumeType.DOWNLOADS:
            return VolumeManagerCommon.RootType.DOWNLOADS;
        case VolumeManagerCommon.VolumeType.DRIVE:
            return VolumeManagerCommon.RootType.DRIVE;
        case VolumeManagerCommon.VolumeType.MEDIA_VIEW:
            return VolumeManagerCommon.RootType.MEDIA_VIEW;
        case VolumeManagerCommon.VolumeType.DOCUMENTS_PROVIDER:
            return VolumeManagerCommon.RootType.DOCUMENTS_PROVIDER;
        case VolumeManagerCommon.VolumeType.MTP:
            return VolumeManagerCommon.RootType.MTP;
        case VolumeManagerCommon.VolumeType.MY_FILES:
            return VolumeManagerCommon.RootType.MY_FILES;
        case VolumeManagerCommon.VolumeType.PROVIDED:
            return VolumeManagerCommon.RootType.PROVIDED;
        case VolumeManagerCommon.VolumeType.REMOVABLE:
            return VolumeManagerCommon.RootType.REMOVABLE;
        case VolumeManagerCommon.VolumeType.SMB:
            return VolumeManagerCommon.RootType.SMB;
        case VolumeManagerCommon.VolumeType.TRASH:
            return VolumeManagerCommon.RootType.TRASH;
    }
    assertNotReached('Unknown volume type: ' + volumeType);
    return VolumeManagerCommon.VolumeType.DOWNLOADS;
};
/**
 * Returns true if the given |volumeType| is expected to provide third party
 * icons in the iconSet property of the volume.
 * @param {VolumeManagerCommon.VolumeType} volumeType
 * @return {boolean}
 */
VolumeManagerCommon.shouldProvideIcons = volumeType => {
    switch (volumeType) {
        case VolumeManagerCommon.VolumeType.ANDROID_FILES:
            return true;
        case VolumeManagerCommon.VolumeType.DOCUMENTS_PROVIDER:
            return true;
        case VolumeManagerCommon.VolumeType.PROVIDED:
            return true;
    }
    if (!volumeType) {
        assertNotReached('Invalid volume type: ' + volumeType);
    }
    return false;
};
/**
 * List of media view root types.
 *
 * Keep this in sync with constants in arc_media_view_util.cc.
 *
 * @enum {string}
 * @const
 */
VolumeManagerCommon.MediaViewRootType = {
    IMAGES: 'images_root',
    VIDEOS: 'videos_root',
    AUDIO: 'audio_root',
    DOCUMENTS: 'documents_root',
};
Object.freeze(VolumeManagerCommon.MediaViewRootType);
/**
 * Obtains volume type from root type.
 * @param {string} volumeId Volume ID.
 * @return {VolumeManagerCommon.MediaViewRootType}
 */
VolumeManagerCommon.getMediaViewRootTypeFromVolumeId = volumeId => {
    return /** @type {VolumeManagerCommon.MediaViewRootType} */ (volumeId.split(':', 2)[1]);
};
/**
 * An event name trigerred when a user tries to mount the volume which is
 * already mounted. The event object must have a volumeId property.
 * @const @type {string}
 */
VolumeManagerCommon.VOLUME_ALREADY_MOUNTED = 'volume_already_mounted';
VolumeManagerCommon.SHARED_DRIVES_DIRECTORY_NAME = 'team_drives';
VolumeManagerCommon.SHARED_DRIVES_DIRECTORY_PATH =
    '/' + VolumeManagerCommon.SHARED_DRIVES_DIRECTORY_NAME;
/**
 * This is the top level directory name for Computers in drive that are using
 * the backup and sync feature.
 * @const @type {string}
 */
VolumeManagerCommon.COMPUTERS_DIRECTORY_NAME = 'Computers';
VolumeManagerCommon.COMPUTERS_DIRECTORY_PATH =
    '/' + VolumeManagerCommon.COMPUTERS_DIRECTORY_NAME;
/**
 * @const
 */
VolumeManagerCommon.ARCHIVE_OPENED_EVENT_TYPE = 'archive_opened';
/**
 * ID of the Google Photos DocumentsProvider volume.
 * @const @type {string}
 */
VolumeManagerCommon.PHOTOS_DOCUMENTS_PROVIDER_VOLUME_ID =
    'documents_provider:com.google.android.apps.photos.photoprovider/com.google.android.apps.photos';
/**
 * ID of the MediaDocumentsProvider. All the files returned by ARC source in
 * Recents have this ID prefix in their filesystem.
 * @const @type {string}
 */
VolumeManagerCommon.MEDIA_DOCUMENTS_PROVIDER_ID =
    'com.android.providers.media.documents';
/**
 * Creates an CustomEvent object for changing current directory when an archive
 * file is newly mounted, or when opened a one already mounted.
 * @param {!DirectoryEntry} mountPoint The root directory of the mounted
 *     volume.
 * @return {!CustomEvent<!DirectoryEntry>}
 */
VolumeManagerCommon.createArchiveOpenedEvent = mountPoint => {
    // @ts-ignore: error TS2322: Type 'CustomEvent<{ mountPoint:
    // FileSystemDirectoryEntry; }>' is not assignable to type
    // 'CustomEvent<FileSystemDirectoryEntry>'.
    return new CustomEvent(VolumeManagerCommon.ARCHIVE_OPENED_EVENT_TYPE, { detail: { mountPoint: mountPoint } });
};
/**
 * Checks if a file entry is a Recent entry coming from ARC source.
 * @param {?Entry} entry
 * @return {boolean}
 */
VolumeManagerCommon.isRecentArcEntry = entry => {
    if (!entry) {
        return false;
    }
    return entry.filesystem.name.startsWith(VolumeManagerCommon.MEDIA_DOCUMENTS_PROVIDER_ID);
};

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @enum {string}
 */
const EntryType = {
    // Entries from the FileSystem API.
    FS_API: 'FS_API',
    // The root of a volume is an Entry from the FileSystem API, but it aggregates
    // more data from the volume.
    VOLUME_ROOT: 'VOLUME_ROOT',
    // A directory-like entry to aggregate other entries.
    ENTRY_LIST: 'ENTRY_LIST',
    // Placeholder that is replaced for another entry, for Crostini/GuestOS.
    PLACEHOLDER: 'PLACEHOLDER',
    // Root for the Trash.
    TRASH: 'TRASH',
    // Root for the Recent.
    RECENT: 'RECENT',
};
/**
 * The status of a property, for properties that have their state updated via
 * asynchronous steps.
 * @enum {string}
 */
const PropStatus = {
    STARTED: 'STARTED',
    // Finished:
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
};
/**
 * Used to group volumes in the navigation tree.
 * Sections:
 *      - TOP: Recents, Shortcuts.
 *      - MY_FILES: My Files (which includes Downloads, Crostini and Arc++ as
 *                  its children).
 *      - TRASH: trash.
 *      - GOOGLE_DRIVE: Just Google Drive.
 *      - ODFS: Just ODFS.
 *      - CLOUD: All other cloud: SMBs, FSPs and Documents Providers.
 *      - ANDROID_APPS: ANDROID picker apps.
 *      - REMOVABLE: Archives, MTPs, Media Views and Removables.
 * @enum {string}
 */
const NavigationSection = {
    TOP: 'top',
    MY_FILES: 'my_files',
    GOOGLE_DRIVE: 'google_drive',
    ODFS: 'odfs',
    CLOUD: 'cloud',
    TRASH: 'trash',
    ANDROID_APPS: 'android_apps',
    REMOVABLE: 'removable',
};
/**
 * @enum {string}
 */
const NavigationType = {
    SHORTCUT: 'shortcut',
    VOLUME: 'volume',
    RECENT: 'recent',
    CROSTINI: 'crostini',
    GUEST_OS: 'guest_os',
    ENTRY_LIST: 'entry_list',
    DRIVE: 'drive',
    ANDROID_APPS: 'android_apps',
    TRASH: 'trash',
    // Materialized view is used for Recent and in the future for Search.
    MATERIALIZED_VIEW: 'materialized_view',
};

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Namespace for common constants used in Files app.
 * @namespace
 */
const constants = {};
/**
 * @const @type {!Array<string>}
 */
constants.ACTIONS_MODEL_METADATA_PREFETCH_PROPERTY_NAMES = [
    'canPin',
    'hosted',
    'pinned',
];
/**
 * The list of executable file extensions.
 *
 * @const
 * @type {Array<string>}
 */
// @ts-ignore: error TS4104: The type 'readonly string[]' is 'readonly' and
// cannot be assigned to the mutable type 'string[]'.
constants.EXECUTABLE_EXTENSIONS = Object.freeze([
    '.exe',
    '.lnk',
    '.deb',
    '.dmg',
    '.jar',
    '.msi',
]);
/**
 * These metadata is expected to be cached to accelerate computeAdditional.
 * See: crbug.com/458915.
 * @const @type {!Array<string>}
 */
constants.FILE_SELECTION_METADATA_PREFETCH_PROPERTY_NAMES = [
    'availableOffline',
    'contentMimeType',
    'hosted',
    'canPin',
];
/**
 * Metadata property names used by FileTable and FileGrid.
 * These metadata is expected to be cached.
 * TODO(sashab): Store capabilities as a set of flags to save memory. See
 * https://crbug.com/849997
 *
 * @const @type {!Array<string>}
 */
constants.LIST_CONTAINER_METADATA_PREFETCH_PROPERTY_NAMES = [
    'availableOffline',
    'contentMimeType',
    'customIconUrl',
    'hosted',
    'modificationTime',
    'modificationByMeTime',
    'pinned',
    'shared',
    'size',
    'canCopy',
    'canDelete',
    'canRename',
    'canAddChildren',
    'canShare',
    'canPin',
    'isMachineRoot',
    'isExternalMedia',
    'isArbitrarySyncFolder',
];
/**
 * Metadata properties used to inform the user about DLP (Data Leak Prevention)
 * Files restrictions. These metadata is expected to be cached.
 *
 * @const @type {!Array<string>}
 */
constants.DLP_METADATA_PREFETCH_PROPERTY_NAMES = [
    'isDlpRestricted',
    'sourceUrl',
    'isRestrictedForDestination',
];
/**
 * Name of the default crostini VM: crostini::kCrostiniDefaultVmName
 * @const
 */
constants.DEFAULT_CROSTINI_VM = 'termina';
/**
 * Name of the Plugin VM: plugin_vm::kPluginVmName.
 * @const
 */
constants.PLUGIN_VM = 'PvmDefault';
/**
 * Name of the default bruschetta VM: bruschetta::kBruschettaVmName
 * @const
 */
constants.DEFAULT_BRUSCHETTA_VM = 'bru';
/**
 * DOMError type for crostini connection failure.
 * @const @type {string}
 */
constants.CROSTINI_CONNECT_ERR = 'CrostiniConnectErr';
/**
 * ID of the fake fileSystemProvider custom action containing OneDrive document
 * URLs.
 * @const @type {string}
 */
constants.FSP_ACTION_HIDDEN_ONEDRIVE_URL = 'HIDDEN_ONEDRIVE_URL';
/**
 * ID of the fake fileSystemProvider custom action containing OneDrive document
 * User Emails.
 * @const @type {string}
 */
constants.FSP_ACTION_HIDDEN_ONEDRIVE_USER_EMAIL = 'HIDDEN_ONEDRIVE_USER_EMAIL';
/**
 * ID of the fake fileSystemProvider custom action containing OneDrive document
 * Reauthentication Required state.
 * @const @type {string}
 */
constants.FSP_ACTION_HIDDEN_ONEDRIVE_REAUTHENTICATION_REQUIRED =
    'HIDDEN_ONEDRIVE_REAUTHENTICATION_REQUIRED';
/**
 * All icon types.
 */
constants.ICON_TYPES = {
    ANDROID_FILES: 'android_files',
    ARCHIVE: 'archive',
    AUDIO: 'audio',
    // Explicitly request the icon to be 0x0. Used to avoid the scenario where a
    // `type` is not specifically supplied vs. actually wanting a blank icon.
    BLANK: 'blank',
    BRUSCHETTA: 'bruschetta',
    BULK_PINNING_BATTERY_SAVER: 'bulk_pinning_battery_saver',
    BULK_PINNING_DONE: 'bulk_pinning_done',
    BULK_PINNING_OFFLINE: 'bulk_pinning_offline',
    CAMERA_FOLDER: 'camera-folder',
    CANT_PIN: 'cant-pin',
    CHECK: 'check',
    CLOUD_DONE: 'cloud_done',
    CLOUD_ERROR: 'cloud_error',
    CLOUD_OFFLINE: 'cloud_offline',
    CLOUD_PAUSED: 'cloud_paused',
    CLOUD_SYNC: 'cloud_sync',
    CLOUD: 'cloud',
    COMPUTER: 'computer',
    COMPUTERS_GRAND_ROOT: 'computers_grand_root',
    CROSTINI: 'crostini',
    DOWNLOADS: 'downloads',
    DRIVE_BULK_PINNING: 'drive_bulk_pinning',
    DRIVE_LOGO: 'drive_logo',
    DRIVE_OFFLINE: 'drive_offline',
    DRIVE_RECENT: 'drive_recent',
    DRIVE_SHARED_WITH_ME: 'drive_shared_with_me',
    DRIVE: 'drive',
    ERROR: 'error',
    ERROR_BANNER: 'error_banner',
    EXCEL: 'excel',
    EXTERNAL_MEDIA: 'external_media',
    FOLDER: 'folder',
    GENERIC: 'generic',
    GOOGLE_DOC: 'gdoc',
    GOOGLE_DRAW: 'gdraw',
    GOOGLE_FORM: 'gform',
    GOOGLE_LINK: 'glink',
    GOOGLE_MAP: 'gmap',
    GOOGLE_SHEET: 'gsheet',
    GOOGLE_SITE: 'gsite',
    GOOGLE_SLIDES: 'gslides',
    GOOGLE_TABLE: 'gtable',
    IMAGE: 'image',
    MTP: 'mtp',
    MY_FILES: 'my_files',
    OFFLINE: 'offline',
    OPTICAL: 'optical',
    PDF: 'pdf',
    PLUGIN_VM: 'plugin_vm',
    POWERPOINT: 'ppt',
    RAW: 'raw',
    RECENT: 'recent',
    REMOVABLE: 'removable',
    SCRIPT: 'script',
    SD_CARD: 'sd',
    SERVICE_DRIVE: 'service_drive',
    SHARED_DRIVE: 'shared_drive',
    SHARED_DRIVES_GRAND_ROOT: 'shared_drives_grand_root',
    SHARED_FOLDER: 'shared_folder',
    SHORTCUT: 'shortcut',
    SITES: 'sites',
    SMB: 'smb',
    TEAM_DRIVE: 'team_drive',
    THUMBNAIL_GENERIC: 'thumbnail_generic',
    TINI: 'tini',
    TRASH: 'trash',
    UNKNOWN_REMOVABLE: 'unknown_removable',
    USB: 'usb',
    VIDEO: 'video',
    WORD: 'word',
};
/**
 * Extension ID for OneDrive FSP, also used as ProviderId.
 * @const
 * @type {string}
 */
constants.ODFS_EXTENSION_ID = 'gnnndjlaomemikopnjhhnoombakkkkdg';

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file contains utils for working with icons.
 */
/** Return icon name for the VM type. */
function vmTypeToIconName(vmType) {
    if (vmType === undefined) {
        console.error('vmType: is undefined');
        return '';
    }
    switch (vmType) {
        case chrome.fileManagerPrivate.VmType.BRUSCHETTA:
            return constants.ICON_TYPES.BRUSCHETTA;
        case chrome.fileManagerPrivate.VmType.ARCVM:
            return constants.ICON_TYPES.ANDROID_FILES;
        case chrome.fileManagerPrivate.VmType.TERMINA:
            return constants.ICON_TYPES.CROSTINI;
        default:
            console.error('Unable to determine icon for vmType: ' + vmType);
            return '';
    }
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Entry-like types for Files app UI.
 * This file defines the interface |FilesAppEntry| and some specialized
 * implementations of it.
 *
 * These entries are intended to behave like the browser native FileSystemEntry
 * (aka Entry) and FileSystemDirectoryEntry (aka DirectoryEntry), providing an
 * unified API for Files app UI components. UI components should be able to
 * display any implementation of FilesAppEntry.
 * The main intention of those types is to be able to provide alternative
 * implementations and from other sources for "entries", as well as be able to
 * extend the native "entry" types.
 *
 * Native Entry:
 * https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
 * Native DirectoryEntry:
 * https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader
 */
/**
 * A reader compatible with DirectoryEntry.createReader (from Web Standards)
 * that reads a static list of entries, provided at construction time.
 * https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader
 * It can be used by DirectoryEntry-like such as EntryList to return its
 * entries.
 * @extends {DirectoryReader}
 */
class StaticReader {
    /**
     * @param {!Array<!Entry|!FilesAppEntry>} entries: Array of Entry-like
     * instances that will be returned/read by this reader.
     */
    constructor(entries) {
        this.entries_ = entries;
    }
    /**
     * Reads array of entries via |success| callback.
     *
     * @param {function(!Array<!Entry>):void} success: A callback that
     *     will be called multiple times with the entries, last call will be
     *     called with an empty array indicating that no more entries available.
     * @param {function(!FileError)=} _error: A callback that's never
     *     called, it's here to match the signature from the Web Standards.
     */
    readEntries(success, _error) {
        const entries = this.entries_;
        // readEntries is suppose to return empty result when there are no more
        // files to return, so we clear the entries_ attribute for next call.
        this.entries_ = [];
        // Triggers callback asynchronously.
        setTimeout(success, 0, entries);
    }
}
/**
 * A reader compatible with DirectoryEntry.createReader (from Web Standards),
 * It chains entries from one reader to another, creating a combined set of
 * entries from all readers.
 * @extends {DirectoryReader}
 */
class CombinedReaders {
    /**
     * @param {!Array<!DirectoryReader>} readers Array of all readers that will
     * have their entries combined.
     */
    constructor(readers) {
        /**
         * @private @type {!Array<!DirectoryReader>} Reversed readers so the
         *     readEntries can just use pop() to get the next
         */
        this.readers_ = readers.reverse();
        /** @private @type {!DirectoryReader} */
        // @ts-ignore: error TS2322: Type 'DirectoryReader | undefined' is not
        // assignable to type 'DirectoryReader'.
        this.currentReader_ = readers.pop();
    }
    /**
     * @param {function(!Array<!Entry>):void} success returning entries
     *     of all readers, it's called with empty Array when there is no more
     *     entries to return.
     * @param {function(!FileError)=} error called when error happens when reading
     *    from readers.
     * for this implementation.
     */
    readEntries(success, error) {
        if (!this.currentReader_) {
            // If there is no more reader to consume, just return an empty result
            // which indicates that read has finished.
            success([]);
            return;
        }
        this.currentReader_.readEntries((results) => {
            if (results.length) {
                success(results);
            }
            else {
                // If there isn't no more readers, finish by calling success with no
                // results.
                if (!this.readers_.length) {
                    success([]);
                    return;
                }
                // Move to next reader and start consuming it.
                // @ts-ignore: error TS2322: Type 'DirectoryReader | undefined' is not
                // assignable to type 'DirectoryReader'.
                this.currentReader_ = this.readers_.pop();
                this.readEntries(success, error);
            }
            // @ts-ignore: error TS2345: Argument of type '((arg0: FileError) => any)
            // | undefined' is not assignable to parameter of type 'ErrorCallback |
            // undefined'.
        }, error);
    }
}
/**
 * EntryList, a DirectoryEntry-like object that contains entries. Initially used
 * to implement "My Files" containing VolumeEntry for "Downloads", "Linux
 * Files" and "Play Files".
 *
 * @implements FilesAppDirEntry
 */
class EntryList {
    /**
     * @param {string} label: Label to be used when displaying to user, it should
     *    already translated.
     * @param {VolumeManagerCommon.RootType} rootType root type.
     * @param {string} devicePath Device path
     */
    constructor(label, rootType, devicePath = '') {
        /**
         * @private @type {string} label: Label to be used when displaying to user,
         *     it
         *      should be already translated.
         */
        this.label_ = label;
        /** @private @type {VolumeManagerCommon.RootType} rootType root type. */
        this.rootType_ = rootType;
        /**
         * @private @type {string} devicePath Path belonging to the external media
         * device. Partitions on the same external drive have the same device path.
         */
        this.devicePath_ = devicePath;
        /**
         * @private @type {!Array<!Entry|!FilesAppEntry>} children entries of
         * this EntryList instance.
         */
        this.children_ = [];
        this.isDirectory = true;
        this.isFile = false;
        this.type_name = 'EntryList';
        this.fullPath = '/';
        /**
         * @type {?FileSystem}
         */
        this.filesystem = null;
        /**
         * @public @type {boolean} EntryList can be a placeholder of a real volume
         * (e.g. MyFiles or DriveFakeRootEntryList), it can be disabled if the
         * corresponding volume type is disabled.
         */
        this.disabled = false;
    }
    /**
     * @return {!Array<!Entry|!FilesAppEntry>} List of entries that are shown as
     *     children of this Volume in the UI, but are not actually entries of the
     *     Volume.  E.g. 'Play files' is shown as a child of 'My files'.
     */
    getUIChildren() {
        return this.children_;
    }
    get label() {
        return this.label_;
    }
    get rootType() {
        return this.rootType_;
    }
    get name() {
        return this.label_;
    }
    get devicePath() {
        return this.devicePath_;
    }
    get isNativeType() {
        return false;
    }
    /**
     * @param {function({modificationTime: Date, size: number}): void} success
     * @param {function(FileError)=} _error
     */
    getMetadata(success, _error) {
        // Defaults modificationTime to current time just to have a valid value.
        setTimeout(() => success({ modificationTime: new Date(), size: 0 }));
    }
    /**
     * @return {string} used to compare entries.
     */
    toURL() {
        // There may be multiple entry lists. Append the device path to return
        // a unique identifiable URL for the entry list.
        if (this.devicePath_) {
            return 'entry-list://' + this.rootType + '/' + this.devicePath_;
        }
        return 'entry-list://' + this.rootType;
    }
    /**
     * @param {(function((DirectoryEntry|FilesAppDirEntry)):void)=} success
     * @param {function(Error)=} _error callback.
     */
    getParent(success, _error) {
        const self = /** @type {!FilesAppDirEntry} */ (this);
        setTimeout(() => success && success(self), 0, this);
    }
    /**
     * @param {!Entry|!FilesAppEntry} entry that should be added as
     * child of this EntryList.
     * This method is specific to EntryList instance.
     */
    addEntry(entry) {
        this.children_.push(entry);
        // Only VolumeEntry can have prefix set because it sets on VolumeInfo,
        // which is then used on LocationInfo/PathComponent.
        if ( /** @type{FilesAppEntry} */(entry).type_name == 'VolumeEntry') {
            const volumeEntry = /** @type {VolumeEntry} */ (entry);
            volumeEntry.setPrefix(this);
        }
    }
    /**
     * @return {!DirectoryReader} Returns a reader compatible with
     * DirectoryEntry.createReader (from Web Standards) that reads the children of
     * this EntryList instance.
     * This method is defined on DirectoryEntry.
     */
    createReader() {
        return new StaticReader(this.children_);
    }
    /**
     * @param {!import('../../externs/volume_info.js').VolumeInfo} volumeInfo
     *     that's desired to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     * Note: we compare the volumeId instead of the whole volumeInfo reference
     * because the same volume could be mounted multiple times and every time a
     * new volumeInfo is created.
     * @return {number} index of entry on this EntryList or -1 if not found.
     */
    findIndexByVolumeInfo(volumeInfo) {
        return this.children_.findIndex(childEntry => 
        /** @type {VolumeEntry} */ (childEntry).volumeInfo ?
            /** @type {VolumeEntry} */ (childEntry).volumeInfo.volumeId ===
                volumeInfo.volumeId :
            false);
    }
    /**
     * Removes the first volume with the given type.
     * @param {!VolumeManagerCommon.VolumeType} volumeType desired type.
     * This method is specific to VolumeEntry/EntryList instance.
     * @return {boolean} if entry was removed.
     */
    removeByVolumeType(volumeType) {
        const childIndex = this.children_.findIndex(childEntry => {
            const volumeInfo = /** @type {VolumeEntry} */ (childEntry).volumeInfo;
            return volumeInfo && volumeInfo.volumeType === volumeType;
        });
        if (childIndex !== -1) {
            this.children_.splice(childIndex, 1);
            return true;
        }
        return false;
    }
    /**
     * Removes all entries that match the rootType.
     * @param {!VolumeManagerCommon.RootType} rootType to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     */
    removeAllByRootType(rootType) {
        this.children_ = this.children_.filter(entry => /** @type{FilesAppEntry} */ (entry).rootType !== rootType);
    }
    /**
     * Removes all entries that match the volumeType.
     * @param {!VolumeManagerCommon.VolumeType} volumeType to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     */
    removeAllByVolumeType(volumeType) {
        this.children_ = this.children_.filter(entry => /** @type {VolumeEntry} */ (entry).volumeType !== volumeType);
    }
    /**
     * Removes the entry.
     * @param {!Entry|FilesAppEntry} entry to be removed.
     * This method is specific to EntryList and VolumeEntry instance.
     * @return {boolean} if entry was removed.
     */
    removeChildEntry(entry) {
        const childIndex = this.children_.findIndex(childEntry => childEntry === entry);
        if (childIndex !== -1) {
            this.children_.splice(childIndex, 1);
            return true;
        }
        return false;
    }
    getNativeEntry() {
        return null;
    }
    /**
     * EntryList can be a placeholder for the real volume (e.g. MyFiles or
     * DriveFakeRootEntryList), if so this field will be the volume type of the
     * volume it represents.
     * @return {VolumeManagerCommon.VolumeType|null}
     */
    get volumeType() {
        switch (this.rootType) {
            case VolumeManagerCommon.RootType.MY_FILES:
                return VolumeManagerCommon.VolumeType.DOWNLOADS;
            case VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT:
                return VolumeManagerCommon.VolumeType.DRIVE;
            default:
                return null;
        }
    }
    /**
     * @param {!DirectoryEntry|!FilesAppDirEntry} newParent
     * @param {string=} newName
     * @param {(function(Entry)|function(FilesAppEntry))=} success
     * @param {function(FileError)=} error
     */
    // @ts-ignore: error TS6133: 'error' is declared but its value is never read.
    copyTo(newParent, newName, success, error) { }
    /**
     * @param {!DirectoryEntry|!FilesAppDirEntry} newParent
     * @param {string} newName
     * @param {(function(Entry)|function(FilesAppEntry))=} success
     * @param {function(FileError)=} error
     */
    // @ts-ignore: error TS6133: 'error' is declared but its value is never read.
    moveTo(newParent, newName, success, error) { }
    /**
     * @param {function(Entry):void|function(FilesAppEntry):void} success
     * @param {function(FileError)=} error
     */
    // @ts-ignore: error TS6133: 'error' is declared but its value is never read.
    remove(success, error) { }
    /**
     * @param {string} path
     * @param {!FileSystemFlags=} options
     * @param {(function(!FileEntry)|function(!FilesAppEntry))=} success
     * @param {function(!FileError)=} error
     */
    // @ts-ignore: error TS6133: 'error' is declared but its value is never read.
    getFile(path, options, success, error) { }
    /**
     * @param {string} path
     * @param {!FileSystemFlags=} options
     * @param {(function(!DirectoryEntry)|function(!FilesAppDirEntry))=} success
     * @param {function(!FileError)=} error
     */
    // @ts-ignore: error TS6133: 'error' is declared but its value is never read.
    getDirectory(path, options, success, error) { }
    /**
     * @param {function():void} success
     * @param {function(!Error)=} error
     */
    // @ts-ignore: error TS6133: 'error' is declared but its value is never read.
    removeRecursively(success, error) { }
}
/**
 * A DirectoryEntry-like which represents a Volume, based on VolumeInfo.
 *
 * It uses composition to behave like a DirectoryEntry and proxies some calls
 * to its VolumeInfo instance.
 *
 * It's used to be able to add a volume as child of |EntryList| and make volume
 * displayable on file list.
 *
 * @implements FilesAppDirEntry
 */
class VolumeEntry {
    /**
     * @param {!import('../../externs/volume_info.js').VolumeInfo} volumeInfo:
     *     VolumeInfo for this entry.
     */
    constructor(volumeInfo) {
        /**
         * @private @type {!import('../../externs/volume_info.js').VolumeInfo} holds
         *     a reference to VolumeInfo to delegate some
         * method calls to it.
         */
        this.volumeInfo_ = volumeInfo;
        /**
         * @private @type{!Array<!Entry|!FilesAppEntry>} additional entries that
         *     will be displayed together with this Volume's entries.
         */
        this.children_ = [];
        /** @type {DirectoryEntry} from Volume's root. */
        this.rootEntry_ = volumeInfo.displayRoot;
        if (!volumeInfo.displayRoot) {
            volumeInfo.resolveDisplayRoot(displayRoot => {
                this.rootEntry_ = displayRoot;
            });
        }
        this.type_name = 'VolumeEntry';
        // TODO(b/271485133): consider deriving this from volumeInfo. Setting
        // rootType here breaks some integration tests, e.g.
        // saveAsDlpRestrictedAndroid.
        /** @type {?VolumeManagerCommon.RootType} */
        this.rootType = null;
        this.disabled_ = false;
    }
    /**
     * @return {!import('../../externs/volume_info.js').VolumeInfo} for this
     *     entry. This method is only valid for
     * VolumeEntry instances.
     */
    get volumeInfo() {
        return this.volumeInfo_;
    }
    /** @return {!VolumeManagerCommon.VolumeType} */
    get volumeType() {
        return this.volumeInfo_.volumeType;
    }
    /**
     * @return {?FileSystem} FileSystem for this volume.
     * This method is defined on Entry.
     */
    get filesystem() {
        return this.rootEntry_ ? this.rootEntry_.filesystem : null;
    }
    /**
     * @return {!Array<!Entry|!FilesAppEntry>} List of entries that are shown as
     *     children of this Volume in the UI, but are not actually entries of the
     *     Volume.  E.g. 'Play files' is shown as a child of 'My files'.  Use
     *     createReader to find real child entries of the Volume's filesystem.
     */
    getUIChildren() {
        return this.children_;
    }
    /**
     * @return {string} Full path for this volume.
     * This method is defined on Entry.
     */
    get fullPath() {
        return this.rootEntry_ ? this.rootEntry_.fullPath : '';
    }
    get isDirectory() {
        // Defaults to true if root entry isn't resolved yet, because a VolumeEntry
        // is like a directory.
        return this.rootEntry_ ? this.rootEntry_.isDirectory : true;
    }
    get isFile() {
        // Defaults to false if root entry isn't resolved yet.
        return this.rootEntry_ ? this.rootEntry_.isFile : false;
    }
    /**
     * @return {boolean} if this entry is disabled. This method is only valid for
     * VolumeEntry instances.
     */
    get disabled() {
        return this.disabled_;
    }
    /**
     * Sets the disabled property. This method is only valid for
     * VolumeEntry instances.
     * @param {boolean} disabled
     */
    set disabled(disabled) {
        this.disabled_ = disabled;
    }
    /**
     * @see https://github.com/google/closure-compiler/blob/mastexterns/browser/fileapi.js
     * @param {string} path Entry fullPath.
     * @param {!FileSystemFlags=} options
     * @param {function(!DirectoryEntry):void=} success
     * @param {function(!FileError):void=} error
     */
    getDirectory(path, options, success, error) {
        if (!this.rootEntry_) {
            error && setTimeout(error, 0, new Error('root entry not resolved yet.'));
            return;
        }
        // @ts-ignore: error TS2769: No overload matches this call.
        this.rootEntry_.getDirectory(path, options, success, error);
    }
    /**
     * @see https://github.com/google/closure-compiler/blob/mastexterns/browser/fileapi.js
     * @param {string} path
     * @param {!FileSystemFlags=} options
     * @param {function(!FileEntry):void=} success
     * @param {function(!FileError):void=} error
     * @return {undefined}
     */
    getFile(path, options, success, error) {
        if (!this.rootEntry_) {
            error && setTimeout(error, 0, new Error('root entry not resolved yet.'));
            return;
        }
        // @ts-ignore: error TS2769: No overload matches this call.
        this.rootEntry_.getFile(path, options, success, error);
    }
    /**
     * @return {string} Name for this volume.
     */
    get name() {
        return this.volumeInfo_.label;
    }
    /**
     * @return {string}
     */
    toURL() {
        return this.rootEntry_ ? this.rootEntry_.toURL() : '';
    }
    /**
     * String used to determine the icon.
     * @return {string}
     */
    get iconName() {
        if (this.volumeInfo_.volumeType ==
            VolumeManagerCommon.VolumeType.GUEST_OS) {
            return vmTypeToIconName(this.volumeInfo_.vmType);
        }
        if (this.volumeInfo_.volumeType ==
            VolumeManagerCommon.VolumeType.DOWNLOADS) {
            return /** @type {string} */ (VolumeManagerCommon.VolumeType.MY_FILES);
        }
        return /** @type {string} */ (this.volumeInfo_.volumeType);
    }
    /**
     * @param {function((DirectoryEntry|FilesAppDirEntry)):void=} success
     *     callback, it returns itself since EntryList is intended to be used as
     * root node and the Web Standard says to do so.
     * @param {function(Error)=} _error callback, not used for this
     *     implementation.
     */
    getParent(success, _error) {
        const self = /** @type {!FilesAppDirEntry} */ (this);
        setTimeout(() => success && success(self), 0, this);
    }
    /**
     * @param {function({modificationTime: Date, size: number}): void} success
     * @param {function(FileError)=} error
     */
    getMetadata(success, error) {
        // @ts-ignore: error TS2345: Argument of type '((arg0: FileError) => any) |
        // undefined' is not assignable to parameter of type 'ErrorCallback |
        // undefined'.
        this.rootEntry_.getMetadata(success, error);
    }
    get isNativeType() {
        return true;
    }
    getNativeEntry() {
        return this.rootEntry_;
    }
    /**
     * @return {!DirectoryReader} Returns a reader from root entry, which is
     * compatible with DirectoryEntry.createReader (from Web Standards).
     * This method is defined on DirectoryEntry.
     */
    createReader() {
        const readers = [];
        if (this.rootEntry_) {
            readers.push(this.rootEntry_.createReader());
        }
        if (this.children_.length) {
            readers.push(new StaticReader(this.children_));
        }
        return new CombinedReaders(readers);
    }
    /**
     * @param {!FilesAppEntry} entry An entry to be used as prefix of this
     *     instance on breadcrumbs path, e.g. "My Files > Downloads", "My Files"
     *     is a prefixEntry on "Downloads" VolumeInfo.
     */
    setPrefix(entry) {
        this.volumeInfo_.prefixEntry = entry;
    }
    /**
     * @param {!Entry|!FilesAppEntry} entry that should be added as
     * child of this VolumeEntry.
     * This method is specific to VolumeEntry instance.
     */
    addEntry(entry) {
        this.children_.push(entry);
        // Only VolumeEntry can have prefix set because it sets on VolumeInfo,
        // which is then used on LocationInfo/PathComponent.
        if ( /** @type {!FilesAppEntry} */(entry).type_name == 'VolumeEntry') {
            const volumeEntry = /** @type {VolumeEntry} */ (entry);
            volumeEntry.setPrefix(this);
        }
    }
    /**
     * @param {!import('../../externs/volume_info.js').VolumeInfo} volumeInfo
     *     that's desired to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     * Note: we compare the volumeId instead of the whole volumeInfo reference
     * because the same volume could be mounted multiple times and every time a
     * new volumeInfo is created.
     * @return {number} index of entry within VolumeEntry or -1 if not found.
     */
    findIndexByVolumeInfo(volumeInfo) {
        return this.children_.findIndex(childEntry => 
        /** @type {VolumeEntry} */ (childEntry).volumeInfo ?
            /** @type {VolumeEntry} */ (childEntry).volumeInfo.volumeId ===
                volumeInfo.volumeId :
            false);
    }
    /**
     * Removes the first volume with the given type.
     * @param {!VolumeManagerCommon.VolumeType} volumeType desired type.
     * This method is specific to VolumeEntry/EntryList instance.
     * @return {boolean} if entry was removed.
     */
    removeByVolumeType(volumeType) {
        const childIndex = this.children_.findIndex(childEntry => {
            const entry = /** @type {VolumeEntry} */ (childEntry);
            return entry.volumeInfo && entry.volumeInfo.volumeType === volumeType;
        });
        if (childIndex !== -1) {
            this.children_.splice(childIndex, 1);
            return true;
        }
        return false;
    }
    /**
     * Removes all entries that match the rootType.
     * @param {!VolumeManagerCommon.RootType} rootType to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     */
    removeAllByRootType(rootType) {
        this.children_ = this.children_.filter(entry => /** @type {!FilesAppEntry} */ (entry).rootType !== rootType);
    }
    /**
     * Removes all entries that match the volumeType.
     * @param {!VolumeManagerCommon.VolumeType} volumeType to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     */
    removeAllByVolumeType(volumeType) {
        this.children_ = this.children_.filter(entry => /** @type {VolumeEntry} */ (entry).volumeType !== volumeType);
    }
    /**
     * Removes the entry.
     * @param {!Entry|FilesAppEntry} entry to be removed.
     * This method is specific to EntryList and VolumeEntry instance.
     * @return {boolean} if entry was removed.
     */
    removeChildEntry(entry) {
        const childIndex = this.children_.findIndex(childEntry => childEntry === entry);
        if (childIndex !== -1) {
            this.children_.splice(childIndex, 1);
            return true;
        }
        return false;
    }
    /**
     * @param {!DirectoryEntry|!FilesAppDirEntry} newParent
     * @param {string=} newName
     * @param {(function(Entry)|function(FilesAppEntry))=} success
     * @param {function(FileError)=} error
     */
    // @ts-ignore: error TS6133: 'error' is declared but its value is never read.
    copyTo(newParent, newName, success, error) { }
    /**
     * @param {!DirectoryEntry|!FilesAppDirEntry} newParent
     * @param {string} newName
     * @param {(function(!Entry)|function(!FilesAppEntry))=} success
     * @param {function(!FileError)=} error
     */
    // @ts-ignore: error TS6133: 'error' is declared but its value is never read.
    moveTo(newParent, newName, success, error) { }
    /**
     * @param {function(!Entry):void|function(!FilesAppEntry):void} success
     * @param {function(!FileError)=} error
     */
    // @ts-ignore: error TS6133: 'error' is declared but its value is never read.
    remove(success, error) { }
    /**
     * @param {function():void} success
     * @param {function(!Error)=} error
     */
    // @ts-ignore: error TS6133: 'error' is declared but its value is never read.
    removeRecursively(success, error) { }
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isFlagEnabled(flagName) {
    return loadTimeData.isInitialized() && loadTimeData.valueExists(flagName) &&
        loadTimeData.getBoolean(flagName);
}
/**
 * Returns true if GuestOsFiles flag is enabled.
 */
function isGuestOsEnabled() {
    return isFlagEnabled('GUEST_OS');
}
/**
 * Returns whether the DriveFsBulkPinning feature flag is enabled.
 */
function isDriveFsBulkPinningEnabled() {
    return isFlagEnabled('DRIVE_FS_BULK_PINNING');
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Exception used to stop ActionsProducer when they're no longer valid.
 *
 * The concurrency model function uses this exception to force the
 * ActionsProducer to stop.
 */
class ConcurrentActionInvalidatedError extends Error {
}
/** Helper to distinguish the Action from a ActionsProducer.  */
function isActionsProducer(value) {
    return (value.next !== undefined &&
        value.throw !== undefined);
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A Selector implementation for redux, bundled with a
 * SelectorEmitter helper class that allows selectors to be efficiently updated.
 * @suppress {checkTypes} closure can't recognize LitElement
 */
/**
 * A class implementing ReactiveController in order to provide an ergonomic
 * way to update Lit elements based on selected data.
 */
class SelectorController {
    constructor(host, value, subscribe) {
        this.host = host;
        this.value = value;
        this.subscribe = subscribe;
        this.host.addController(this);
    }
    hostConnected() {
        this.unsubscribe = this.subscribe((value) => {
            this.value = value;
            this.host.requestUpdate();
        });
    }
    hostDisconnected() {
        this.unsubscribe();
    }
}
/**
 * A node in the selector DAG (Directed Acyclic Graph). Used to efficiently
 * process selectors and eliminate redundant calculations and state updates. A
 * selector node essentially connects parent selectors through a `select()`
 * function that combines all of their parents' emitted values to form a new
 * value.
 *
 * Note: `SelectorNode` implements the `Selector` interface, allowing the store
 * to expose nodes as `Selector`s, hiding complexities related to
 * `SelectorNode`'s implementation.
 */
class SelectorNode {
    /**
     * @param parents Either an array of Selectors or SelectorNodes whose values
     *     should be fed into the `select` function to calculate the selector's
     *     new value.
     * @param select The function that calculates the selector's new value once at
     *     least one its parents emits a new value or, initially, after the
     *     selector node is constructed. The arguments of select() must match the
     *     order and type of what is emitted by the parents. This typing match is
     *     not enforced here because SelectorNodes are only meant to be created by
     *     the Store. Users of the Store should use `combineXSelectors()` to combine
     *     selectors.
     * @param name An optional human-readable name used for debugging purposes.
     *     Named selectors will log to the console when window.DEBUG_STORE is set,
     *     whenever they emit a new value.
     */
    constructor(parents, select, name) {
        this.select = select;
        this.name = name;
        /** Last value emitted by the selector. */
        this.value_ = undefined;
        /** List of selector's current subscribers. */
        this.subscribers_ = [];
        /** List of selector's current parents. */
        this.parents_ = [];
        /**
         * The depth of this node in the SelectorEmitter DAG. Used to ensure Selector
         * nodes are emitted in the correct order.
         *
         * Nodes of depth D+1 are only processed after all nodes of depth D have been
         * processed, starting from D=0.
         *
         * Only source nodes (nodes without parents) have depth=0;
         */
        this.depth = 0;
        /** List of selector's current children. */
        this.children = [];
        this.parents = parents;
    }
    /**
     * Creates a new source node (a node with no parents).
     *
     * The store's default selector should be a source node, but other data
     * sources can be registered as source nodes as well.
     *
     * Slice's default selectors are then connected to the store's source node,
     * and additional selector nodes can then be created from store and slices'
     * default selectors using `combineXSelectors()` (and resulting selectors can be
     * further combined using `combineXSelectors()`).
     */
    static createSourceNode(select) {
        return new SelectorNode([], select);
    }
    /**
     * Creates a selector node that doesn't have parents or select function. Used
     * by slices to create selectors that are not yet connected to the store but
     * that can be subscribed to before the store is constructed.
     *
     * In other words, disconnected nodes should eventually be connected to the
     * SelectorEmitter DAG and should retain their list of subscribers after doing
     * so.
     *
     * Disconnected nodes are exclusively used internally by slices and are not
     * meant to be used outside of it.
     */
    static createDisconnectedNode(name) {
        return new SelectorNode([], () => undefined, name);
    }
    /**
     * We use a getter for parents to make sure they are always retrieved as
     * SelectorNodes, even though they might be passed in as Selectors in the
     * `combineXSelectors()` functions.
     */
    get parents() {
        return this.parents_;
    }
    set parents(parents) {
        // Disconnect current parents, if any, before replacing them.
        this.disconnect_();
        this.parents_ = parents;
        // Connects this node to its new parents.
        for (const parent of parents) {
            parent.children.push(this);
            this.depth = Math.max(this.depth, parent.depth + 1);
        }
        // Calculate the node's initial value.
        this.emit();
    }
    /**
     * Disconnects itself from the DAG by deleting its connections with its
     * parents.
     */
    disconnect_() {
        // Disconnect node from its parents.
        this.parents.forEach(p => p.disconnectChild_(this));
        this.parents_ = [];
    }
    /** Disconnects the node from one of its children. */
    disconnectChild_(node) {
        this.children.splice(this.children.indexOf(node), 1);
    }
    /**
     * Sets a new value, if such new value is different from the current. If
     * it's different, returns true and notify subscribers. Else, returns false.
     */
    emit() {
        const parentValues = this.parents.map(p => p.get());
        const newValue = this.select(...parentValues);
        if (newValue === this.value_) {
            return false;
        }
        if (window.DEBUG_STORE && this.name) {
            console.log(`Selector '${this.name}' emitted a new value:`);
            console.log(newValue);
        }
        this.value_ = newValue;
        for (const subscriber of this.subscribers_) {
            try {
                subscriber(newValue);
            }
            catch (e) {
                console.error(e);
            }
        }
        return true;
    }
    get() {
        return this.value_;
    }
    subscribe(cb) {
        this.subscribers_.push(cb);
        return () => this.subscribers_.splice(this.subscribers_.indexOf(cb), 1);
    }
    createController(host) {
        return new SelectorController(host, this.get(), this.subscribe.bind(this));
    }
    delete() {
        if (this.children.length > 0) {
            throw new Error('Attempting to delete node that still has children.');
        }
        this.disconnect_();
        this.subscribers_ = [];
    }
}
/**
 * A DAG (Directed Acyclic Graph) representation of chains of selectors where
 * one selector only emits if at least one of their parents has emitted, while
 * also guaranteeing that, when multiple parents of a given node emit, their
 * child only emits a single time.
 */
class SelectorEmitter {
    constructor() {
        /** Source nodes. I.e., nodes with no parents. */
        this.sourceNodes_ = [];
    }
    /** Connect source node to the DAG. */
    addSource(node) {
        this.sourceNodes_.push(node);
    }
    /**
     * Propagates changes from sourceNodes to the rest of the DAG.
     *
     * Nodes of depth D+1 are only processed after all nodes of depth D have been
     * processed, starting from D=0.
     *
     * This method ensures selectors are evaluated efficiently by:
     * - Only evaluating nodes if at least one of their parents has emitted a new
     * value;
     * - Ensuring each node only emits once per call to `processChange()` unlike a
     * naive implementation that would emit every time a parent emitted a new
     * value (meaning the node would emit multiple times per iteration if it had
     * multiple emitting parents).
     */
    processChange() {
        const toExplore = [...this.sourceNodes_];
        while (toExplore.length > 0) {
            const node = toExplore.pop();
            // Only traverse children if a new value is emitted. Children with
            // multiple parents might still be enqueued by the remaining parents.
            if (node.emit()) {
                toExplore.push(...node.children);
                // TODO(300209290): use heap instead.
                // Ensure nodes are explored in ascending order of depth.
                toExplore.sort((a, b) => b.depth - a.depth);
            }
        }
    }
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Slices represent a part of the state that is nested directly under the root
 * state, aggregating its reducers and selectors.
 * @template State The shape of the store's root state.
 * @template LocalState The shape of this slice.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class Slice {
    /**
     * @param name The prefix to be used when registering action types with
     *     this slice.
     */
    constructor(name) {
        this.name = name;
        /**
         * Reducers registered with this slice.
         * Only one reducer per slice can be associated with a given action type.
         */
        this.reducers = new Map();
        /**
         * The slice's default selector - a selector that is created automatically
         * when the slice is constructed. It selects the slice's part of the state.
         */
        this.selector = SelectorNode.createDisconnectedNode(this.name);
    }
    /**
     * Returns the full action name given by prepending the slice's name to the
     * given action type (the full name is formatted as "[SLICE_NAME] TYPE").
     *
     * If the given action type is already the full name, it's returned without
     * any changes.
     *
     * Note: the only valid scenario where the given type is the full name is when
     * registering a reducer for an action primarily registered in another slice.
     */
    prependSliceName_(type) {
        const isFullName = type[0] === '[';
        return isFullName ? type : `[${this.name}] ${type}`;
    }
    /**
     * Returns an action factory for the added reducer.
     * @param localType The name of the action handled by this reducer. It should
     *     be either a new action, (e.g., 'do-thing') in which case it will get
     *     prefixed with the slice's name (e.g., '[sliceName] do-thing'), or an
     *     existing action from another slice (e.g., `someActionFactory.type`).
     * @returns A callable action factory that also holds the type and payload
     *     typing of the actions it produces. Those can be used to register
     *     reducers in other slices with the same action type.
     */
    addReducer(localType, reducer) {
        const type = this.prependSliceName_(localType);
        if (this.reducers.get(type)) {
            throw new Error('Attempting to register multiple reducers ' +
                `within slice for the same action type: ${type}`);
        }
        this.reducers.set(type, reducer);
        const actionFactory = (payload) => ({ type, payload });
        // Include action type and payload typing so different slices can register
        // reducers for the same action type.
        actionFactory.type = type;
        actionFactory.PAYLOAD = null;
        return actionFactory;
    }
}
/**
 * A generic datastore for the state of a page, where the state is publicly
 * readable but can only be modified by dispatching an Action.
 *
 * The Store should be extended by specifying `StateType`, the app state type
 * associated with the store.
 */
class BaseStore {
    constructor(state, slices) {
        /**
         * A map of action names to reducers handled by the store.
         */
        this.reducers_ = new Map();
        /**
         * Whether the Store has been initialized. See init() method to initialize.
         */
        this.initialized_ = false;
        /**
         * Batch mode groups multiple Action mutations and only notify the observes
         * at the end of the batch. See beginBatchUpdate() and endBatchUpdate()
         * methods.
         */
        this.batchMode_ = false;
        /**
         * The DAG representation of selectors held by the store. It ensures
         * selectors are updated in an efficient manner. For more information,
         * please see the `SelectorEmitter` class documentation.
         */
        this.selectorEmitter_ = new SelectorEmitter();
        this.state_ = state;
        this.queuedActions_ = [];
        this.observers_ = [];
        this.initialized_ = false;
        this.batchMode_ = false;
        const sliceNames = new Set(slices.map(slice => slice.name));
        if (sliceNames.size !== slices.length) {
            throw new Error('One or more given slices have the same name. ' +
                'Please ensure slices are uniquely named: ' +
                [...sliceNames].join(', '));
        }
        // Connect the default root selector to the Selector Emitter.
        const rootSelector = SelectorNode.createSourceNode(() => this.state_);
        this.selectorEmitter_.addSource(rootSelector);
        this.selector = rootSelector;
        for (const slice of slices) {
            // Connect the slice's default selector to the store's.
            slice.selector.select = (state) => state[slice.name];
            slice.selector.parents = [rootSelector];
            // Populate reducers with slice.
            for (const [type, reducer] of slice.reducers.entries()) {
                const reducerList = this.reducers_.get(type);
                if (!reducerList) {
                    this.reducers_.set(type, [reducer]);
                }
                else {
                    reducerList.push(reducer);
                }
            }
        }
    }
    /**
     * Marks the Store as initialized.
     * While the Store is not initialized, no action is processed and no observes
     * are notified.
     *
     * It should be called by the app's initialization code.
     */
    init(initialState) {
        this.state_ = initialState;
        this.queuedActions_.forEach((action) => {
            this.dispatchInternal_(action);
        });
        this.initialized_ = true;
        this.selectorEmitter_.processChange();
        this.notifyObservers_(this.state_);
    }
    isInitialized() {
        return this.initialized_;
    }
    /**
     * Subscribe to Store changes/updates.
     * @param observer Callback called whenever the Store is updated.
     * @returns callback to unsubscribe the observer.
     */
    subscribe(observer) {
        this.observers_.push(observer);
        return this.unsubscribe.bind(this, observer);
    }
    /**
     * Removes the observer which will stop receiving Store updates.
     * @param observer The instance that was observing the store.
     */
    unsubscribe(observer) {
        // Create new copy of `observers_` to ensure elements are not removed
        // from the array in the middle of the loop in `notifyObservers_()`.
        this.observers_ = this.observers_.filter(o => o !== observer);
    }
    /**
     * Begin a batch update to store data, which will disable updates to the
     * observers until `endBatchUpdate()` is called. This is useful when a single
     * UI operation is likely to cause many sequential model updates.
     */
    beginBatchUpdate() {
        this.batchMode_ = true;
    }
    /**
     * End a batch update to the store data, notifying the observers of any
     * changes which occurred while batch mode was enabled.
     */
    endBatchUpdate() {
        this.batchMode_ = false;
        this.notifyObservers_(this.state_);
    }
    /** @returns the current state of the store.  */
    getState() {
        return this.state_;
    }
    /**
     * Dispatches an Action to the Store.
     *
     * For synchronous actions it sends the action to the reducers, which updates
     * the Store state, then the Store notifies all subscribers.
     * If the Store isn't initialized, the action is queued and dispatched to
     * reducers during the initialization.
     */
    dispatch(action) {
        if (isActionsProducer(action)) {
            this.consumeProducedActions_(action);
            return;
        }
        if (!this.initialized_) {
            this.queuedActions_.push(action);
            return;
        }
        this.dispatchInternal_(action);
    }
    /** Synchronously call apply the `action` by calling the reducer.  */
    dispatchInternal_(action) {
        this.reduce(action);
    }
    /**
     * Consumes the produced actions from the actions producer.
     * It dispatches each generated action.
     */
    async consumeProducedActions_(actionsProducer) {
        while (true) {
            try {
                const { done, value } = await actionsProducer.next();
                // Accept undefined to accept empty `yield;` or `return;`.
                // The empty `yield` is useful to allow the generator to be stopped at
                // any arbitrary point.
                if (value !== undefined) {
                    this.dispatch(value);
                }
                if (done) {
                    return;
                }
            }
            catch (error) {
                if (isInvalidationError(error)) {
                    // This error is expected when the actionsProducer has been
                    // invalidated.
                    return;
                }
                console.warn('Failure executing actions producer', error);
            }
        }
    }
    /** Apply the `action` to the Store by calling the reducer.  */
    reduce(action) {
        if (window.DEBUG_STORE) {
            console.groupCollapsed(`Action: ${action.type}`);
            console.dir(action.payload);
        }
        const reducers = this.reducers_.get(action.type);
        if (!reducers || reducers.length === 0) {
            console.error(`No registered reducers for action: ${action.type}`);
            return;
        }
        this.state_ = reducers.reduce((state, reducer) => reducer(state, action.payload), this.state_);
        // Batch notifications until after all initialization queuedActions are
        // resolved.
        if (this.initialized_ && !this.batchMode_) {
            this.notifyObservers_(this.state_);
        }
        if (this.selector.get() !== this.state_) {
            this.selectorEmitter_.processChange();
        }
        if (window.DEBUG_STORE) {
            console.groupEnd();
        }
    }
    /** Notify observers with the current state. */
    notifyObservers_(state) {
        this.observers_.forEach(o => {
            try {
                o.onStateChanged(state);
            }
            catch (error) {
                // Subscribers shouldn't fail, here we only log and continue to all
                // other subscribers.
                console.error(error);
            }
        });
    }
}
/** Returns true when the error is a ConcurrentActionInvalidatedError. */
function isInvalidationError(error) {
    if (!error) {
        return false;
    }
    if (error instanceof ConcurrentActionInvalidatedError) {
        return true;
    }
    // Rollup sometimes duplicate the definition of error class so the
    // `instanceof` above fail in this condition.
    if (error.constructor?.name === 'ConcurrentActionInvalidatedError') {
        return true;
    }
    return false;
}

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * List of dialog types.
 *
 * Keep this in sync with FileManagerDialog::GetDialogTypeAsString, except
 * FULL_PAGE which is specific to this code.
 */
var DialogType;
(function (DialogType) {
    DialogType["SELECT_FOLDER"] = "folder";
    DialogType["SELECT_UPLOAD_FOLDER"] = "upload-folder";
    DialogType["SELECT_SAVEAS_FILE"] = "saveas-file";
    DialogType["SELECT_OPEN_FILE"] = "open-file";
    DialogType["SELECT_OPEN_MULTI_FILE"] = "open-multi-file";
    DialogType["FULL_PAGE"] = "full-page";
})(DialogType || (DialogType = {}));

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* This file is generated from:
 *  ../../../../../../../home/chrome-bot/chrome_root/src/ui/file_manager/base/gn/file_types.json5
 */
/**
 * @typedef {{
 *   translationKey: !string,
 *   type: !string,
 *   icon: (string|undefined),
 *   subtype: !string,
 *   extensions: (!Array<!string>|undefined),
 *   mime: (string|undefined),
 *   encrypted: (boolean|undefined),
 *   originalMimeType: (string|undefined)
 * }}
 */
// @ts-ignore:  error TS7005: Variable 'FileExtensionType' implicitly has an 'any' type.
/**
 * Maps a file extension to a FileExtensionType.
 * Note: If an extension can match multiple types, in this map contains
 * only the first occurrence.
 *
 * @const Map<string, !FileExtensionType>
 */
const EXTENSION_TO_TYPE = new Map([
    [".jpeg", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".jpg", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".jfif", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".pjpeg", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".pjp", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".bmp", {
            "extensions": [
                ".bmp"
            ],
            "mime": "image/bmp",
            "subtype": "BMP",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".gif", {
            "extensions": [
                ".gif"
            ],
            "mime": "image/gif",
            "subtype": "GIF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".ico", {
            "extensions": [
                ".ico"
            ],
            "mime": "image/x-icon",
            "subtype": "ICO",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".png", {
            "extensions": [
                ".png"
            ],
            "mime": "image/png",
            "subtype": "PNG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".webp", {
            "extensions": [
                ".webp"
            ],
            "mime": "image/webp",
            "subtype": "WebP",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".tif", {
            "extensions": [
                ".tif",
                ".tiff"
            ],
            "mime": "image/tiff",
            "subtype": "TIFF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".tiff", {
            "extensions": [
                ".tif",
                ".tiff"
            ],
            "mime": "image/tiff",
            "subtype": "TIFF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".svg", {
            "extensions": [
                ".svg",
                ".svgz"
            ],
            "mime": "image/svg+xml",
            "subtype": "SVG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".svgz", {
            "extensions": [
                ".svg",
                ".svgz"
            ],
            "mime": "image/svg+xml",
            "subtype": "SVG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".avif", {
            "extensions": [
                ".avif"
            ],
            "mime": "image/avif",
            "subtype": "AVIF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".jxl", {
            "extensions": [
                ".jxl"
            ],
            "mime": "image/jxl",
            "subtype": "JXL",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".xbm", {
            "extensions": [
                ".xbm"
            ],
            "mime": "image/x-xbitmap",
            "subtype": "XBM",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".arw", {
            "extensions": [
                ".arw"
            ],
            "icon": "image",
            "mime": "image/x-sony-arw",
            "subtype": "ARW",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".cr2", {
            "extensions": [
                ".cr2"
            ],
            "icon": "image",
            "mime": "image/x-canon-cr2",
            "subtype": "CR2",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".dng", {
            "extensions": [
                ".dng"
            ],
            "icon": "image",
            "mime": "image/x-adobe-dng",
            "subtype": "DNG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".nef", {
            "extensions": [
                ".nef"
            ],
            "icon": "image",
            "mime": "image/x-nikon-nef",
            "subtype": "NEF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".nrw", {
            "extensions": [
                ".nrw"
            ],
            "icon": "image",
            "mime": "image/x-nikon-nrw",
            "subtype": "NRW",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".orf", {
            "extensions": [
                ".orf"
            ],
            "icon": "image",
            "mime": "image/x-olympus-orf",
            "subtype": "ORF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".raf", {
            "extensions": [
                ".raf"
            ],
            "icon": "image",
            "mime": "image/x-fuji-raf",
            "subtype": "RAF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".rw2", {
            "extensions": [
                ".rw2"
            ],
            "icon": "image",
            "mime": "image/x-panasonic-rw2",
            "subtype": "RW2",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".3gp", {
            "extensions": [
                ".3gp",
                ".3gpp"
            ],
            "mime": "video/3gpp",
            "subtype": "3GP",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".3gpp", {
            "extensions": [
                ".3gp",
                ".3gpp"
            ],
            "mime": "video/3gpp",
            "subtype": "3GP",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".avi", {
            "extensions": [
                ".avi"
            ],
            "mime": "video/x-msvideo",
            "subtype": "AVI",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mov", {
            "extensions": [
                ".mov"
            ],
            "mime": "video/quicktime",
            "subtype": "QuickTime",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mkv", {
            "extensions": [
                ".mkv"
            ],
            "mime": "video/x-matroska",
            "subtype": "MKV",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mp4", {
            "extensions": [
                ".mp4",
                ".m4v",
                ".mpg4",
                ".mpeg4"
            ],
            "mime": "video/mp4",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".m4v", {
            "extensions": [
                ".mp4",
                ".m4v",
                ".mpg4",
                ".mpeg4"
            ],
            "mime": "video/mp4",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mpg4", {
            "extensions": [
                ".mp4",
                ".m4v",
                ".mpg4",
                ".mpeg4"
            ],
            "mime": "video/mp4",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mpeg4", {
            "extensions": [
                ".mp4",
                ".m4v",
                ".mpg4",
                ".mpeg4"
            ],
            "mime": "video/mp4",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mpg", {
            "extensions": [
                ".mpg",
                ".mpeg"
            ],
            "mime": "video/mpeg",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mpeg", {
            "extensions": [
                ".mpg",
                ".mpeg"
            ],
            "mime": "video/mpeg",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".ogm", {
            "extensions": [
                ".ogm",
                ".ogv",
                ".ogx"
            ],
            "mime": "video/ogg",
            "subtype": "OGG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".ogv", {
            "extensions": [
                ".ogm",
                ".ogv",
                ".ogx"
            ],
            "mime": "video/ogg",
            "subtype": "OGG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".ogx", {
            "extensions": [
                ".ogm",
                ".ogv",
                ".ogx"
            ],
            "mime": "video/ogg",
            "subtype": "OGG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".webm", {
            "extensions": [
                ".webm"
            ],
            "mime": "video/webm",
            "subtype": "WebM",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".amr", {
            "extensions": [
                ".amr"
            ],
            "mime": "audio/amr",
            "subtype": "AMR",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".flac", {
            "extensions": [
                ".flac"
            ],
            "mime": "audio/flac",
            "subtype": "FLAC",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".mp3", {
            "extensions": [
                ".mp3"
            ],
            "mime": "audio/mpeg",
            "subtype": "MP3",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".m4a", {
            "extensions": [
                ".m4a"
            ],
            "mime": "audio/mp4a-latm",
            "subtype": "MPEG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".oga", {
            "extensions": [
                ".oga",
                ".ogg",
                ".opus"
            ],
            "mime": "audio/ogg",
            "subtype": "OGG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".ogg", {
            "extensions": [
                ".oga",
                ".ogg",
                ".opus"
            ],
            "mime": "audio/ogg",
            "subtype": "OGG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".opus", {
            "extensions": [
                ".oga",
                ".ogg",
                ".opus"
            ],
            "mime": "audio/ogg",
            "subtype": "OGG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".wav", {
            "extensions": [
                ".wav"
            ],
            "mime": "audio/x-wav",
            "subtype": "WAV",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".weba", {
            "extensions": [
                ".weba"
            ],
            "mime": "audio/webm",
            "subtype": "WEBA",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".txt", {
            "extensions": [
                ".txt",
                ".text"
            ],
            "mime": "text/plain",
            "subtype": "TXT",
            "translationKey": "PLAIN_TEXT_FILE_TYPE",
            "type": "text"
        }],
    [".text", {
            "extensions": [
                ".txt",
                ".text"
            ],
            "mime": "text/plain",
            "subtype": "TXT",
            "translationKey": "PLAIN_TEXT_FILE_TYPE",
            "type": "text"
        }],
    [".csv", {
            "extensions": [
                ".csv"
            ],
            "mime": "text/csv",
            "subtype": "CSV",
            "translationKey": "CSV_TEXT_FILE_TYPE",
            "type": "text"
        }],
    [".zip", {
            "extensions": [
                ".zip"
            ],
            "mime": "application/zip",
            "subtype": "ZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".rar", {
            "extensions": [
                ".rar"
            ],
            "mime": "application/x-rar-compressed",
            "subtype": "RAR",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".iso", {
            "extensions": [
                ".iso"
            ],
            "mime": "application/x-iso9660-image",
            "subtype": "ISO",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".7z", {
            "extensions": [
                ".7z"
            ],
            "mime": "application/x-7z-compressed",
            "subtype": "7-Zip",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".crx", {
            "extensions": [
                ".crx"
            ],
            "mime": "application/x-chrome-extension",
            "subtype": "CRX",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tar", {
            "extensions": [
                ".tar"
            ],
            "mime": "application/x-tar",
            "subtype": "TAR",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".bz2", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".bz", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tbz", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tbz2", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tz2", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tb2", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".gz", {
            "extensions": [
                ".gz",
                ".tgz"
            ],
            "mime": "application/x-gzip",
            "subtype": "GZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tgz", {
            "extensions": [
                ".gz",
                ".tgz"
            ],
            "mime": "application/x-gzip",
            "subtype": "GZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".lz", {
            "extensions": [
                ".lz"
            ],
            "mime": "application/x-lzip",
            "subtype": "LZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".lzo", {
            "extensions": [
                ".lzo"
            ],
            "mime": "application/x-lzop",
            "subtype": "LZOP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".lzma", {
            "extensions": [
                ".lzma",
                ".tlzma",
                ".tlz"
            ],
            "mime": "application/x-lzma",
            "subtype": "LZMA",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tlzma", {
            "extensions": [
                ".lzma",
                ".tlzma",
                ".tlz"
            ],
            "mime": "application/x-lzma",
            "subtype": "LZMA",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tlz", {
            "extensions": [
                ".lzma",
                ".tlzma",
                ".tlz"
            ],
            "mime": "application/x-lzma",
            "subtype": "LZMA",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".xz", {
            "extensions": [
                ".xz",
                ".txz"
            ],
            "mime": "application/x-xz",
            "subtype": "XZ",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".txz", {
            "extensions": [
                ".xz",
                ".txz"
            ],
            "mime": "application/x-xz",
            "subtype": "XZ",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".z", {
            "extensions": [
                ".z",
                ".taz",
                ".tz"
            ],
            "mime": "application/x-compress",
            "subtype": "Z",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".taz", {
            "extensions": [
                ".z",
                ".taz",
                ".tz"
            ],
            "mime": "application/x-compress",
            "subtype": "Z",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tz", {
            "extensions": [
                ".z",
                ".taz",
                ".tz"
            ],
            "mime": "application/x-compress",
            "subtype": "Z",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".zst", {
            "extensions": [
                ".zst",
                ".tzst"
            ],
            "mime": "application/zstd",
            "subtype": "Zstandard",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tzst", {
            "extensions": [
                ".zst",
                ".tzst"
            ],
            "mime": "application/zstd",
            "subtype": "Zstandard",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".gdoc", {
            "extensions": [
                ".gdoc"
            ],
            "icon": "gdoc",
            "mime": "application/vnd.google-apps.document",
            "subtype": "doc",
            "translationKey": "GDOC_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gsheet", {
            "extensions": [
                ".gsheet"
            ],
            "icon": "gsheet",
            "mime": "application/vnd.google-apps.spreadsheet",
            "subtype": "sheet",
            "translationKey": "GSHEET_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gslides", {
            "extensions": [
                ".gslides"
            ],
            "icon": "gslides",
            "mime": "application/vnd.google-apps.presentation",
            "subtype": "slides",
            "translationKey": "GSLIDES_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gdraw", {
            "extensions": [
                ".gdraw"
            ],
            "icon": "gdraw",
            "mime": "application/vnd.google-apps.drawing",
            "subtype": "draw",
            "translationKey": "GDRAW_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gtable", {
            "extensions": [
                ".gtable"
            ],
            "icon": "gtable",
            "mime": "application/vnd.google-apps.fusiontable",
            "subtype": "table",
            "translationKey": "GTABLE_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".glink", {
            "extensions": [
                ".glink"
            ],
            "icon": "glink",
            "mime": "application/vnd.google-apps.shortcut",
            "subtype": "glink",
            "translationKey": "GLINK_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gform", {
            "extensions": [
                ".gform"
            ],
            "icon": "gform",
            "mime": "application/vnd.google-apps.form",
            "subtype": "form",
            "translationKey": "GFORM_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gmap", {
            "extensions": [
                ".gmap"
            ],
            "icon": "gmap",
            "mime": "application/vnd.google-apps.map",
            "subtype": "map",
            "translationKey": "GMAP_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gsite", {
            "extensions": [
                ".gsite"
            ],
            "icon": "gsite",
            "mime": "application/vnd.google-apps.site",
            "subtype": "site",
            "translationKey": "GSITE_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".pdf", {
            "extensions": [
                ".pdf"
            ],
            "icon": "pdf",
            "mime": "application/pdf",
            "subtype": "PDF",
            "translationKey": "PDF_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".htm", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".html", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".mht", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".mhtml", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".shtml", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".xht", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".xhtml", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".doc", {
            "extensions": [
                ".doc"
            ],
            "icon": "word",
            "mime": "application/msword",
            "subtype": "Word",
            "translationKey": "WORD_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".docx", {
            "extensions": [
                ".docx"
            ],
            "icon": "word",
            "mime": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "subtype": "Word",
            "translationKey": "WORD_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".ppt", {
            "extensions": [
                ".ppt"
            ],
            "icon": "ppt",
            "mime": "application/vnd.ms-powerpoint",
            "subtype": "PPT",
            "translationKey": "POWERPOINT_PRESENTATION_FILE_TYPE",
            "type": "document"
        }],
    [".pptx", {
            "extensions": [
                ".pptx"
            ],
            "icon": "ppt",
            "mime": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "subtype": "PPT",
            "translationKey": "POWERPOINT_PRESENTATION_FILE_TYPE",
            "type": "document"
        }],
    [".xls", {
            "extensions": [
                ".xls"
            ],
            "icon": "excel",
            "mime": "application/vnd.ms-excel",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    [".xlsx", {
            "extensions": [
                ".xlsx"
            ],
            "icon": "excel",
            "mime": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    [".xlsm", {
            "extensions": [
                ".xlsm"
            ],
            "icon": "excel",
            "mime": "application/vnd.ms-excel.sheet.macroEnabled.12",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    [".tini", {
            "extensions": [
                ".tini"
            ],
            "icon": "tini",
            "subtype": "TGZ",
            "translationKey": "TINI_FILE_TYPE",
            "type": "archive"
        }],
]);
/**
 * Maps a MIME type to a FileExtensionType.
 * Note: If a MIME type can match multiple types, in this map contains
 * only the first occurrence.
 *
 * @const Map<string, !FileExtensionType>
 */
const MIME_TO_TYPE = new Map([
    ["image/jpeg", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/bmp", {
            "extensions": [
                ".bmp"
            ],
            "mime": "image/bmp",
            "subtype": "BMP",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/gif", {
            "extensions": [
                ".gif"
            ],
            "mime": "image/gif",
            "subtype": "GIF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/x-icon", {
            "extensions": [
                ".ico"
            ],
            "mime": "image/x-icon",
            "subtype": "ICO",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/png", {
            "extensions": [
                ".png"
            ],
            "mime": "image/png",
            "subtype": "PNG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/webp", {
            "extensions": [
                ".webp"
            ],
            "mime": "image/webp",
            "subtype": "WebP",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/tiff", {
            "extensions": [
                ".tif",
                ".tiff"
            ],
            "mime": "image/tiff",
            "subtype": "TIFF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/svg+xml", {
            "extensions": [
                ".svg",
                ".svgz"
            ],
            "mime": "image/svg+xml",
            "subtype": "SVG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/avif", {
            "extensions": [
                ".avif"
            ],
            "mime": "image/avif",
            "subtype": "AVIF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/jxl", {
            "extensions": [
                ".jxl"
            ],
            "mime": "image/jxl",
            "subtype": "JXL",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/x-xbitmap", {
            "extensions": [
                ".xbm"
            ],
            "mime": "image/x-xbitmap",
            "subtype": "XBM",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/x-sony-arw", {
            "extensions": [
                ".arw"
            ],
            "icon": "image",
            "mime": "image/x-sony-arw",
            "subtype": "ARW",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-canon-cr2", {
            "extensions": [
                ".cr2"
            ],
            "icon": "image",
            "mime": "image/x-canon-cr2",
            "subtype": "CR2",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-adobe-dng", {
            "extensions": [
                ".dng"
            ],
            "icon": "image",
            "mime": "image/x-adobe-dng",
            "subtype": "DNG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-nikon-nef", {
            "extensions": [
                ".nef"
            ],
            "icon": "image",
            "mime": "image/x-nikon-nef",
            "subtype": "NEF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-nikon-nrw", {
            "extensions": [
                ".nrw"
            ],
            "icon": "image",
            "mime": "image/x-nikon-nrw",
            "subtype": "NRW",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-olympus-orf", {
            "extensions": [
                ".orf"
            ],
            "icon": "image",
            "mime": "image/x-olympus-orf",
            "subtype": "ORF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-fuji-raf", {
            "extensions": [
                ".raf"
            ],
            "icon": "image",
            "mime": "image/x-fuji-raf",
            "subtype": "RAF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-panasonic-rw2", {
            "extensions": [
                ".rw2"
            ],
            "icon": "image",
            "mime": "image/x-panasonic-rw2",
            "subtype": "RW2",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["video/3gpp", {
            "extensions": [
                ".3gp",
                ".3gpp"
            ],
            "mime": "video/3gpp",
            "subtype": "3GP",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/x-msvideo", {
            "extensions": [
                ".avi"
            ],
            "mime": "video/x-msvideo",
            "subtype": "AVI",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/quicktime", {
            "extensions": [
                ".mov"
            ],
            "mime": "video/quicktime",
            "subtype": "QuickTime",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/x-matroska", {
            "extensions": [
                ".mkv"
            ],
            "mime": "video/x-matroska",
            "subtype": "MKV",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/mp4", {
            "extensions": [
                ".mp4",
                ".m4v",
                ".mpg4",
                ".mpeg4"
            ],
            "mime": "video/mp4",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/mpeg", {
            "extensions": [
                ".mpg",
                ".mpeg"
            ],
            "mime": "video/mpeg",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/ogg", {
            "extensions": [
                ".ogm",
                ".ogv",
                ".ogx"
            ],
            "mime": "video/ogg",
            "subtype": "OGG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["application/ogg", {
            "extensions": [
                ".ogm",
                ".ogv",
                ".ogx"
            ],
            "mime": "application/ogg",
            "subtype": "OGG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/webm", {
            "extensions": [
                ".webm"
            ],
            "mime": "video/webm",
            "subtype": "WebM",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["audio/amr", {
            "extensions": [
                ".amr"
            ],
            "mime": "audio/amr",
            "subtype": "AMR",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/flac", {
            "extensions": [
                ".flac"
            ],
            "mime": "audio/flac",
            "subtype": "FLAC",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/mpeg", {
            "extensions": [
                ".mp3"
            ],
            "mime": "audio/mpeg",
            "subtype": "MP3",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/mp4a-latm", {
            "extensions": [
                ".m4a"
            ],
            "mime": "audio/mp4a-latm",
            "subtype": "MPEG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/ogg", {
            "extensions": [
                ".oga",
                ".ogg",
                ".opus"
            ],
            "mime": "audio/ogg",
            "subtype": "OGG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/x-wav", {
            "extensions": [
                ".wav"
            ],
            "mime": "audio/x-wav",
            "subtype": "WAV",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/webm", {
            "extensions": [
                ".weba"
            ],
            "mime": "audio/webm",
            "subtype": "WEBA",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["text/plain", {
            "extensions": [
                ".txt",
                ".text"
            ],
            "mime": "text/plain",
            "subtype": "TXT",
            "translationKey": "PLAIN_TEXT_FILE_TYPE",
            "type": "text"
        }],
    ["text/csv", {
            "extensions": [
                ".csv"
            ],
            "mime": "text/csv",
            "subtype": "CSV",
            "translationKey": "CSV_TEXT_FILE_TYPE",
            "type": "text"
        }],
    ["application/zip", {
            "extensions": [
                ".zip"
            ],
            "mime": "application/zip",
            "subtype": "ZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-rar-compressed", {
            "extensions": [
                ".rar"
            ],
            "mime": "application/x-rar-compressed",
            "subtype": "RAR",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-iso9660-image", {
            "extensions": [
                ".iso"
            ],
            "mime": "application/x-iso9660-image",
            "subtype": "ISO",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-7z-compressed", {
            "extensions": [
                ".7z"
            ],
            "mime": "application/x-7z-compressed",
            "subtype": "7-Zip",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-chrome-extension", {
            "extensions": [
                ".crx"
            ],
            "mime": "application/x-chrome-extension",
            "subtype": "CRX",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-tar", {
            "extensions": [
                ".tar"
            ],
            "mime": "application/x-tar",
            "subtype": "TAR",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-bzip2", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-gzip", {
            "extensions": [
                ".gz",
                ".tgz"
            ],
            "mime": "application/x-gzip",
            "subtype": "GZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-lzip", {
            "extensions": [
                ".lz"
            ],
            "mime": "application/x-lzip",
            "subtype": "LZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-lzop", {
            "extensions": [
                ".lzo"
            ],
            "mime": "application/x-lzop",
            "subtype": "LZOP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-lzma", {
            "extensions": [
                ".lzma",
                ".tlzma",
                ".tlz"
            ],
            "mime": "application/x-lzma",
            "subtype": "LZMA",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-xz", {
            "extensions": [
                ".xz",
                ".txz"
            ],
            "mime": "application/x-xz",
            "subtype": "XZ",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-compress", {
            "extensions": [
                ".z",
                ".taz",
                ".tz"
            ],
            "mime": "application/x-compress",
            "subtype": "Z",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/zstd", {
            "extensions": [
                ".zst",
                ".tzst"
            ],
            "mime": "application/zstd",
            "subtype": "Zstandard",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/vnd.google-apps.document", {
            "extensions": [
                ".gdoc"
            ],
            "icon": "gdoc",
            "mime": "application/vnd.google-apps.document",
            "subtype": "doc",
            "translationKey": "GDOC_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.spreadsheet", {
            "extensions": [
                ".gsheet"
            ],
            "icon": "gsheet",
            "mime": "application/vnd.google-apps.spreadsheet",
            "subtype": "sheet",
            "translationKey": "GSHEET_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.presentation", {
            "extensions": [
                ".gslides"
            ],
            "icon": "gslides",
            "mime": "application/vnd.google-apps.presentation",
            "subtype": "slides",
            "translationKey": "GSLIDES_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.drawing", {
            "extensions": [
                ".gdraw"
            ],
            "icon": "gdraw",
            "mime": "application/vnd.google-apps.drawing",
            "subtype": "draw",
            "translationKey": "GDRAW_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.fusiontable", {
            "extensions": [
                ".gtable"
            ],
            "icon": "gtable",
            "mime": "application/vnd.google-apps.fusiontable",
            "subtype": "table",
            "translationKey": "GTABLE_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.shortcut", {
            "extensions": [
                ".glink"
            ],
            "icon": "glink",
            "mime": "application/vnd.google-apps.shortcut",
            "subtype": "glink",
            "translationKey": "GLINK_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.form", {
            "extensions": [
                ".gform"
            ],
            "icon": "gform",
            "mime": "application/vnd.google-apps.form",
            "subtype": "form",
            "translationKey": "GFORM_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.map", {
            "extensions": [
                ".gmap"
            ],
            "icon": "gmap",
            "mime": "application/vnd.google-apps.map",
            "subtype": "map",
            "translationKey": "GMAP_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.site", {
            "extensions": [
                ".gsite"
            ],
            "icon": "gsite",
            "mime": "application/vnd.google-apps.site",
            "subtype": "site",
            "translationKey": "GSITE_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/pdf", {
            "extensions": [
                ".pdf"
            ],
            "icon": "pdf",
            "mime": "application/pdf",
            "subtype": "PDF",
            "translationKey": "PDF_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    ["text/html", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    ["application/msword", {
            "extensions": [
                ".doc"
            ],
            "icon": "word",
            "mime": "application/msword",
            "subtype": "Word",
            "translationKey": "WORD_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", {
            "extensions": [
                ".docx"
            ],
            "icon": "word",
            "mime": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "subtype": "Word",
            "translationKey": "WORD_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.ms-powerpoint", {
            "extensions": [
                ".ppt"
            ],
            "icon": "ppt",
            "mime": "application/vnd.ms-powerpoint",
            "subtype": "PPT",
            "translationKey": "POWERPOINT_PRESENTATION_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.openxmlformats-officedocument.presentationml.presentation", {
            "extensions": [
                ".pptx"
            ],
            "icon": "ppt",
            "mime": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "subtype": "PPT",
            "translationKey": "POWERPOINT_PRESENTATION_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.ms-excel", {
            "extensions": [
                ".xls"
            ],
            "icon": "excel",
            "mime": "application/vnd.ms-excel",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", {
            "extensions": [
                ".xlsx"
            ],
            "icon": "excel",
            "mime": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.ms-excel.sheet.macroEnabled.12", {
            "extensions": [
                ".xlsm"
            ],
            "icon": "excel",
            "mime": "application/vnd.ms-excel.sheet.macroEnabled.12",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
]);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * A special placeholder for unknown types with no extension.
 */
const PLACEHOLDER = {
    translationKey: 'NO_EXTENSION_FILE_TYPE',
    type: 'UNKNOWN',
    icon: '',
    subtype: '',
    extensions: undefined,
    mime: undefined,
    encrypted: undefined,
    originalMimeType: undefined,
};
/**
 * Returns the final extension of a file name, check for the last two dots
 * to distinguish extensions like ".tar.gz" and ".gz".
 */
function getFinalExtension(fileName) {
    if (!fileName) {
        return '';
    }
    const lowerCaseFileName = fileName.toLowerCase();
    const parts = lowerCaseFileName.split('.');
    // No dot, so no extension.
    if (parts.length === 1) {
        return '';
    }
    // Only one dot, so only 1 extension.
    if (parts.length === 2) {
        return `.${parts.pop()}`;
    }
    // More than 1 dot/extension: e.g. ".tar.gz".
    const last = `.${parts.pop()}`;
    const secondLast = `.${parts.pop()}`;
    const doubleExtension = `${secondLast}${last}`;
    if (EXTENSION_TO_TYPE.has(doubleExtension)) {
        return doubleExtension;
    }
    // Double extension doesn't exist in the map, return the single one.
    return last;
}
/**
 * Gets the file type object for a given file name (base name). Use getType()
 * if possible, since this method can't recognize directories.
 */
function getFileTypeForName(name) {
    const extension = getFinalExtension(name);
    if (EXTENSION_TO_TYPE.has(extension)) {
        return EXTENSION_TO_TYPE.get(extension);
    }
    // Unknown file type.
    if (extension === '') {
        return PLACEHOLDER;
    }
    // subtype is the extension excluding the first dot.
    return {
        translationKey: 'GENERIC_FILE_TYPE',
        type: 'UNKNOWN',
        subtype: extension.substr(1).toUpperCase(),
        icon: '',
        extensions: undefined,
        mime: undefined,
        encrypted: undefined,
        originalMimeType: undefined,
    };
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Namespace object for file type utility functions.
 */
function FileType() { }
// All supported file types are now defined in
// ui/file_manager/base/gn/file_types.json5.
/**
 * A special type for directory.
 * @type{!FileExtensionType}
 * @const
 */
// @ts-ignore: error TS2739: Type '{ translationKey: string; type: string; icon:
// string; subtype: string; }' is missing the following properties from type
// 'FileExtensionType': extensions, mime, encrypted, originalMimeType
FileType.DIRECTORY = {
    translationKey: 'FOLDER',
    type: '.folder',
    icon: 'folder',
    subtype: '',
};
/**
 * Returns the file path extension for a given file.
 *
 * @param {Entry|FilesAppEntry} entry Reference to the file.
 * @return {string} The extension including a leading '.', or empty string if
 *     not found.
 */
FileType.getExtension = entry => {
    // No extension for a directory.
    if (entry.isDirectory) {
        return '';
    }
    return getFinalExtension(entry.name);
};
/**
 * Gets the file type object for a given entry. If mime type is provided, then
 * uses it with higher priority than the extension.
 *
 * @param {(Entry|FilesAppEntry)} entry Reference to the entry.
 * @param {string=} opt_mimeType Optional mime type for the entry.
 * @return {!FileExtensionType} The matching descriptor or a placeholder.
 */
FileType.getType = (entry, opt_mimeType) => {
    if (entry.isDirectory) {
        // For removable partitions, use the file system type.
        if ( /** @type {VolumeEntry}*/(entry).volumeInfo &&
            /** @type {VolumeEntry}*/ (entry).volumeInfo.diskFileSystemType) {
            // @ts-ignore: error TS2739: Type '{ translationKey: string; type: string;
            // subtype: string; icon: string; }' is missing the following properties
            // from type 'FileExtensionType': extensions, mime, encrypted,
            // originalMimeType
            return {
                translationKey: '',
                type: 'partition',
                subtype: assert(
                /** @type {VolumeEntry}*/ (entry).volumeInfo.diskFileSystemType),
                icon: '',
            };
        }
        return FileType.DIRECTORY;
    }
    if (opt_mimeType) {
        const cseMatch = opt_mimeType.match(/^application\/vnd.google-gsuite.encrypted; content="([a-z\/.-]+)"$/);
        if (cseMatch) {
            const type = /** @type {FileExtensionType} */ ({ ...FileType.getType(entry, cseMatch[1]) });
            type.encrypted = true;
            type.originalMimeType = cseMatch[1];
            return type;
        }
    }
    if (opt_mimeType && MIME_TO_TYPE.has(opt_mimeType)) {
        // @ts-ignore: error TS2322: Type '{ extensions: string[]; mime: string;
        // subtype: string; translationKey: string; type: string; icon?: undefined;
        // } | { extensions: string[]; icon: string; mime: string; subtype: string;
        // translationKey: string; type: string; } | undefined' is not assignable to
        // type 'FileExtensionType'.
        return MIME_TO_TYPE.get(opt_mimeType);
    }
    return getFileTypeForName(entry.name);
};
/**
 * Gets the media type for a given file.
 *
 * @param {Entry|FilesAppEntry} entry Reference to the file.
 * @param {string=} opt_mimeType Optional mime type for the file.
 * @return {string} The value of 'type' property from one of the elements in
 *     the knows file types (file_types.json5) or undefined.
 */
FileType.getMediaType = (entry, opt_mimeType) => {
    return FileType.getType(entry, opt_mimeType).type;
};
/**
 * @param {Entry} entry Reference to the file.
 * @param {string=} opt_mimeType Optional mime type for the file.
 * @return {boolean} True if audio file.
 */
FileType.isAudio = (entry, opt_mimeType) => {
    return FileType.getMediaType(entry, opt_mimeType) === 'audio';
};
/**
 * Returns whether the |entry| is image file that can be opened in browser.
 * Note that it returns false for RAW images.
 * @param {Entry} entry Reference to the file.
 * @param {string=} opt_mimeType Optional mime type for the file.
 * @return {boolean} True if image file.
 */
FileType.isImage = (entry, opt_mimeType) => {
    return FileType.getMediaType(entry, opt_mimeType) === 'image';
};
/**
 * @param {Entry} entry Reference to the file.
 * @param {string=} opt_mimeType Optional mime type for the file.
 * @return {boolean} True if video file.
 */
FileType.isVideo = (entry, opt_mimeType) => {
    return FileType.getMediaType(entry, opt_mimeType) === 'video';
};
/**
 * @param {Entry} entry Reference to the file.
 * @param {string=} opt_mimeType Optional mime type for the file.
 * @return {boolean} True if document file.
 */
FileType.isDocument = (entry, opt_mimeType) => {
    const type = FileType.getMediaType(entry, opt_mimeType);
    return type === 'document' || type === 'hosted' || type === 'text';
};
/**
 * @param {Entry} entry Reference to the file.
 * @param {string=} opt_mimeType Optional mime type for the file.
 * @return {boolean} True if raw file.
 */
FileType.isRaw = (entry, opt_mimeType) => {
    return FileType.getMediaType(entry, opt_mimeType) === 'raw';
};
/**
 * @param {Entry} entry Reference to the file
 * @param {string=} opt_mimeType Optional mime type for this file.
 * @return {boolean} Whether or not this is a PDF file.
 */
FileType.isPDF = (entry, opt_mimeType) => {
    return FileType.getType(entry, opt_mimeType).subtype === 'PDF';
};
/**
 * Files with more pixels won't have preview.
 * @param {!Array<string>} types
 * @param {Entry|FilesAppEntry} entry Reference to the file.
 * @param {string=} opt_mimeType Optional mime type for the file.
 * @return {boolean} True if type is in specified set
 */
FileType.isType = (types, entry, opt_mimeType) => {
    const type = FileType.getMediaType(entry, opt_mimeType);
    return !!type && types.indexOf(type) !== -1;
};
/**
 * @param {Entry} entry Reference to the file.
 * @param {string=} opt_mimeType Optional mime type for the file.
 * @return {boolean} Returns true if the file is hosted.
 */
FileType.isHosted = (entry, opt_mimeType) => {
    return FileType.getType(entry, opt_mimeType).type === 'hosted';
};
/**
 * @param {Entry|FilesAppEntry} entry Reference to the file.
 * @param {string=} opt_mimeType Optional mime type for the file.
 * @return {boolean} Returns true if the file is encrypted with CSE.
 */
FileType.isEncrypted = (entry, opt_mimeType) => {
    const type = FileType.getType(entry, opt_mimeType);
    return type.encrypted !== undefined && type.encrypted;
};
/**
 * @param {Entry|VolumeEntry|FileData} entry Reference to the file.
 * @param {string=} opt_mimeType Optional mime type for the file.
 * @param {VolumeManagerCommon.RootType=} opt_rootType The root type of the
 *     entry.
 * @return {string} Returns string that represents the file icon.
 *     It refers to a file 'images/filetype_' + icon + '.png'.
 */
FileType.getIcon = (entry, opt_mimeType, opt_rootType) => {
    let icon;
    // Handles the FileData and FilesAppEntry types.
    // @ts-ignore: error TS2339: Property 'iconName' does not exist on type
    // 'FileSystemEntry | FileData | VolumeEntry'.
    if (entry && entry.iconName) {
        // @ts-ignore: error TS2339: Property 'iconName' does not exist on type
        // 'FileSystemEntry | FileData | VolumeEntry'.
        return entry.iconName;
    }
    // Handles other types of entries.
    if (entry) {
        entry = /** @type {!Entry|!VolumeEntry} */ (entry);
        const fileType = FileType.getType(entry, opt_mimeType);
        const overridenIcon = FileType.getIconOverrides(entry, opt_rootType);
        icon = overridenIcon || fileType.icon || fileType.type;
    }
    return icon || 'unknown';
};
/**
 * Returns a string to be used as an attribute value to customize the entry
 * icon.
 *
 * @param {Entry|FilesAppEntry} entry
 * @param {VolumeManagerCommon.RootType=} opt_rootType The root type of the
 *     entry.
 * @return {string}
 */
FileType.getIconOverrides = (entry, opt_rootType) => {
    // Overrides per RootType and defined by fullPath.
    const overrides = {
        [VolumeManagerCommon.RootType.DOWNLOADS]: {
            '/Camera': 'camera-folder',
            '/Downloads': VolumeManagerCommon.VolumeType.DOWNLOADS,
            '/PvmDefault': 'plugin_vm',
        },
    };
    // @ts-ignore: error TS2538: Type 'undefined' cannot be used as an index type.
    const root = overrides[opt_rootType];
    return root ? root[entry.fullPath] : '';
};

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Utility methods for accessing chrome.metricsPrivate API.
 *
 * To be included as a first script in main.html
 */
/**
 * A map from interval name to interval start timestamp.
 */
/** Convert a short metric name to the full format. */
function convertName(name) {
    return 'FileBrowser.' + name;
}
/** Wrapper method for calling chrome.fileManagerPrivate safely. */
function callAPI(name, args) {
    try {
        const method = chrome.metricsPrivate[name];
        method.apply(chrome.metricsPrivate, args);
    }
    catch (e) {
        console.error(e.stack);
    }
}
/**
 * Record an enum value.
 *
 * @param name Metric name.
 * @param value Enum value.
 * @param validValues Array of valid values or a boundary number
 *     (one-past-the-end) value.
 */
function recordEnum(name, value, validValues) {
    console.assert(validValues !== undefined);
    let index = validValues.indexOf(value);
    const boundaryValue = validValues.length;
    // Collect invalid values in the overflow bucket at the end.
    if (index < 0 || index >= boundaryValue) {
        index = boundaryValue - 1;
    }
    // Setting min to 1 looks strange but this is exactly the recommended way
    // of using histograms for enum-like types. Bucket #0 works as a regular
    // bucket AND the underflow bucket.
    // (Source: UMA_HISTOGRAM_ENUMERATION definition in
    // base/metrics/histogram.h)
    const metricDescr = {
        'metricName': convertName(name),
        'type': chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
        'min': 1,
        'max': boundaryValue - 1,
        'buckets': boundaryValue,
    };
    callAPI('recordValue', [metricDescr, index]);
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * Dispatches a simple event on an event target.
 * @param {!EventTarget} target The event target to dispatch the event on.
 * @param {string} type The type of the event.
 * @param {boolean=} bubbles Whether the event bubbles or not.
 * @param {boolean=} cancelable Whether the default action of the event
 *     can be prevented. Default is true.
 * @return {boolean} If any of the listeners called {@code preventDefault}
 *     during the dispatch this will return false.
 */
function dispatchSimpleEvent(target, type, bubbles, cancelable) {
  const e = new Event(
      type,
      {bubbles: bubbles, cancelable: cancelable === undefined || cancelable});
  return target.dispatchEvent(e);
}

// Copyright 2010 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
* @fileoverview Work-around for
* https://github.com/google/closure-compiler/issues/3143, such that WebUI code
* can use the native EventTarget class.
* TODO(dpapad): Remove this entire file if/when that issue is fixed.
*/

/**
 * @constructor
 * @implements {EventTarget}
 */
const NativeEventTarget = self['EventTarget'];

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// namespace
const storage = {};
/**
 * Class used to emit window.localStorage change events to event listeners.
 * This class does 3 things:
 *
 * 1. Holds the onChanged event listeners for the current window.
 * 2. Sends broadcast event to all windows.
 * 3. Listens to broadcast events and propagates to the listeners in
 *    the current window.
 *
 * NOTE: This doesn't support the `oldValue` because it's simpler and the
 * current clients of `onChanged` don't need it.
 */
class StorageChangeTracker {
    // @ts-ignore: error TS7006: Parameter 'storageNamespace' implicitly has an
    // 'any' type.
    constructor(storageNamespace) {
        /**
         * Storage onChanged event listeners for the current window.
         * @private @type {!Array<OnChangedListener>}
         * */
        // @ts-ignore: error TS7008: Member 'listeners_' implicitly has an 'any[]'
        // type.
        this.listeners_ = [];
        /**
         * Storage namespace argument added when calling listeners.
         * @private @type {string}
         */
        this.storageNamespace_ = storageNamespace;
        /**
         * Event to send local storage changes to all window listeners.
         */
        window.addEventListener('storage', this.onStorageEvent_.bind(this));
    }
    /**
     * Resets for testing: removes all listeners.
     */
    resetForTesting() {
        this.listeners_ = [];
    }
    /**
     * Adds an onChanged event listener for the current window.
     * @param {function(!Object<string, !ValueChanged>, string):void} callback
     */
    addListener(callback) {
        this.listeners_.push(callback);
    }
    /**
     * Notifies listeners_ of key value changes.
     * @param {!Object<string, *>} changedValues changed.
     */
    keysChanged(changedValues) {
        /** @type {!Object<string, !ValueChanged>} */
        const changedKeys = {};
        for (const [k, v] of Object.entries(changedValues)) {
            // `oldValue` isn't necessary for the current use case.
            const key = /** @type {string} */ (k);
            changedKeys[key] = { newValue: v };
        }
        this.notifyLocally_(changedKeys);
    }
    /**
     * Process localStorage `storage` event and notify listeners_.
     * @private
     */
    // @ts-ignore: error TS7006: Parameter 'event' implicitly has an 'any' type.
    onStorageEvent_(event) {
        if (!event.key) {
            return;
        }
        const key = /** @type {string} */ (event.key);
        const newValue = /** @type {string} */ (event.newValue);
        const changedKeys = {};
        try {
            // @ts-ignore: error TS7053: Element implicitly has an 'any' type because
            // expression of type 'string' can't be used to index type '{}'.
            changedKeys[key] = { newValue: JSON.parse(newValue) };
        }
        catch (error) {
            console.warn(`Failed to JSON parse localStorage value from key: "${key}" ` +
                `returning the raw value.`, error);
            // @ts-ignore: error TS7053: Element implicitly has an 'any' type because
            // expression of type 'string' can't be used to index type '{}'.
            changedKeys[key] = { newValue };
        }
        // @ts-ignore: error TS2345: Argument of type '{}' is not assignable to
        // parameter of type '{ [x: string]: ValueChanged; }'.
        this.notifyLocally_(changedKeys);
    }
    /**
     * Notifies local (current window) listeners_ of key value changes.
     * @param {!Object<string, ValueChanged>} keys
     * @private
     */
    notifyLocally_(keys) {
        for (const listener of this.listeners_) {
            try {
                listener(keys, this.storageNamespace_);
            }
            catch (error) {
                console.error(`Error calling storage.onChanged listener: ${error}`);
            }
        }
    }
}
/**
 * StorageAreaImpl using window.localStorage as the storage area.
 */
class StorageAreaImpl {
    /**
     * @param {string} type
     */
    constructor(type) {
        /** @private @type {!StorageChangeTracker} */
        this.storageChangeTracker_ = new StorageChangeTracker(type);
    }
    /**
     * Gets values of |keys| and return them in the callback.
     * @param {string|!Array<string>} keys
     * @param {!function(!Object):void} callback
     */
    get(keys, callback) {
        const keyList = Array.isArray(keys) ? keys : [keys];
        const result = {};
        for (const key of keyList) {
            // @ts-ignore: error TS7053: Element implicitly has an 'any' type because
            // expression of type 'string' can't be used to index type '{}'.
            result[key] = this.getValue_(key);
        }
        callback(result);
    }
    /**
     * Gets the value of |key| from local storage.
     * @param {string} key
     * @private
     */
    getValue_(key) {
        const value = /** @type {string} */ (window.localStorage.getItem(key));
        try {
            return JSON.parse(value);
        }
        catch (error) {
            console.warn(`Failed to JSON parse localStorage value from key: "${key}" ` +
                `returning the raw value.`, error);
            return value;
        }
    }
    /**
     * Async version of this.get() storage method.
     * @param {string|!Array<string>} keys
     * @returns {!Promise<!Object<string, *>>}
     */
    async getAsync(keys) {
        // @ts-ignore: error TS6133: 'reject' is declared but its value is never
        // read.
        return new Promise((resolve, reject) => {
            this.get(keys, (values) => {
                resolve(values);
            });
        });
    }
    /**
     * Stores items in local storage.
     * @param {!Object<string, *>} items The items to store.
     * @param {?function()=} opt_callback Optional callback to be called when
     *   the items have been stored.
     */
    set(items, opt_callback) {
        for (const key in items) {
            const value = JSON.stringify(items[key]);
            window.localStorage.setItem(key, value);
        }
        this.notifyChange_(Object.keys(items));
        if (opt_callback) {
            opt_callback();
        }
    }
    /**
     * Async version of this.set() storage method.
     * @param {!Object<string, *>} items The items to store.
     * @returns {!Promise<void>}
     */
    async setAsync(items) {
        // @ts-ignore: error TS6133: 'reject' is declared but its value is never
        // read.
        return new Promise((resolve, reject) => {
            this.set(items, () => {
                resolve();
            });
        });
    }
    /**
     * Removes the given |keys| from local storage.
     * @param {string|!Array<string>} keys
     */
    remove(keys) {
        const keyList = Array.isArray(keys) ? keys : [keys];
        for (const key of keyList) {
            window.localStorage.removeItem(key);
        }
        this.notifyChange_(keyList);
    }
    /**
     * Clears local storage.
     */
    clear() {
        window.localStorage.clear();
        this.notifyChange_([]);
    }
    /**
     * Notifies key changes to storage change tracker listeners.
     * @param {!Array<string>} keys
     * @private
     */
    notifyChange_(keys) {
        const values = {};
        for (const k of keys) {
            // @ts-ignore: error TS7053: Element implicitly has an 'any' type because
            // expression of type 'string' can't be used to index type '{}'.
            values[k] = this.getValue_(k);
        }
        this.getStorageChangeTracker_().keysChanged(values);
    }
    /**
     * Gets storage change tracker.
     * @returns {!StorageChangeTracker}
     * @private
     */
    getStorageChangeTracker_() {
        return this.storageChangeTracker_;
    }
}
/**
 * @type {!StorageAreaImpl}
 */
storage.local = new StorageAreaImpl('local');
/**
 * NOTE: Here we only expose StorageChangeTracker APIs addListener() and
 * resetForTesting().
 *
 * @type {{
 *   addListener: function(OnChangedListener):void,
 *   resetForTesting: function():void,
 * }}
 */
// @ts-ignore: error TS2341: Property 'getStorageChangeTracker_' is private and
// only accessible within class 'StorageAreaImpl'.
storage.onChanged = storage.local.getStorageChangeTracker_();

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * TaskHistory object keeps track of the history of task executions. Recent
 * history is stored in local storage.
 */
class TaskHistory extends NativeEventTarget {
    constructor() {
        super();
        /**
         * The recent history of task executions. Key is task ID and value is time
         * stamp of the latest execution of the task.
         * @type {!Object<string, number>}
         */
        this.lastExecutedTime_ = {};
        storage.onChanged.addListener(this.onLocalStorageChanged_.bind(this));
        this.load_();
    }
    /**
     * Records the timing of task execution.
     * @param {!chrome.fileManagerPrivate.FileTaskDescriptor} descriptor
     */
    recordTaskExecuted(descriptor) {
        const taskId = util.makeTaskID(descriptor);
        this.lastExecutedTime_[taskId] = Date.now();
        this.truncate_();
        this.save_();
    }
    /**
     * Gets the time stamp of last execution of given task. If the record is not
     * found, returns 0.
     * @param {!chrome.fileManagerPrivate.FileTaskDescriptor} descriptor
     * @return {number}
     */
    getLastExecutedTime(descriptor) {
        const taskId = util.makeTaskID(descriptor);
        // @ts-ignore: error TS2322: Type 'number | undefined' is not assignable to
        // type 'number'.
        return this.lastExecutedTime_[taskId] ? this.lastExecutedTime_[taskId] : 0;
    }
    /**
     * Loads the current history from local storage.
     * @private
     */
    load_() {
        storage.local.get(TaskHistory.STORAGE_KEY_LAST_EXECUTED_TIME, value => {
            this.lastExecutedTime_ =
                // @ts-ignore: error TS7053: Element implicitly has an 'any' type
                // because expression of type 'string' can't be used to index type
                // 'Object'.
                value[TaskHistory.STORAGE_KEY_LAST_EXECUTED_TIME] || {};
        });
    }
    /**
     * Saves the current history to local storage.
     * @private
     */
    save_() {
        const objectToSave = {};
        // @ts-ignore: error TS7053: Element implicitly has an 'any' type because
        // expression of type 'string' can't be used to index type '{}'.
        objectToSave[TaskHistory.STORAGE_KEY_LAST_EXECUTED_TIME] =
            this.lastExecutedTime_;
        storage.local.set(objectToSave);
    }
    /**
     * Handles local storage change event to update the current history.
     * @param {!Object<string, !ValueChanged>} changes
     * @param {string} areaName
     * @private
     */
    onLocalStorageChanged_(changes, areaName) {
        if (areaName !== 'local') {
            return;
        }
        for (const key in changes) {
            if (key == TaskHistory.STORAGE_KEY_LAST_EXECUTED_TIME) {
                this.lastExecutedTime_ = changes[key]?.newValue;
                dispatchSimpleEvent(this, TaskHistory.EventType.UPDATE);
            }
        }
    }
    /**
     * Trancates current history so that the size of history does not exceed
     * STORAGE_KEY_LAST_EXECUTED_TIME.
     * @private
     */
    truncate_() {
        const keys = Object.keys(this.lastExecutedTime_);
        if (keys.length <= TaskHistory.LAST_EXECUTED_TIME_HISTORY_MAX) {
            return;
        }
        let items = [];
        for (let i = 0; i < keys.length; i++) {
            // @ts-ignore: error TS2538: Type 'undefined' cannot be used as an index
            // type.
            items.push({ id: keys[i], timestamp: this.lastExecutedTime_[keys[i]] });
        }
        items.sort((a, b) => b.timestamp - a.timestamp);
        items = items.slice(0, TaskHistory.LAST_EXECUTED_TIME_HISTORY_MAX);
        const newObject = {};
        for (let i = 0; i < items.length; i++) {
            // @ts-ignore: error TS2532: Object is possibly 'undefined'.
            newObject[items[i].id] = items[i].timestamp;
        }
        // @ts-ignore: error TS2322: Type '{}' is not assignable to type '{ [x:
        // string]: number; }'.
        this.lastExecutedTime_ = newObject;
    }
}
/**
 * @enum {string}
 */
TaskHistory.EventType = {
    UPDATE: 'update',
};
/**
 * Key used to store the task history in local storage.
 * @const @type {string}
 */
TaskHistory.STORAGE_KEY_LAST_EXECUTED_TIME = 'task-last-executed-time';
/**
 * @const @type {number}
 */
TaskHistory.LAST_EXECUTED_TIME_HISTORY_MAX = 100;

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @const @type {string} */
const LEGACY_FILES_EXTENSION_ID = 'hhaomjibdihmijegdhdafkllkbggdgoj';
/** @const @type {string} */
const SWA_FILES_APP_HOST = 'file-manager';
/**
 * The URL of the legacy version of File Manager.
 * @const @type {!URL}
 */
new URL(`chrome-extension://${LEGACY_FILES_EXTENSION_ID}`);
/**
 * The URL of the System Web App version of File Manager.
 * @const @type {!URL}
 */
new URL(`chrome://${SWA_FILES_APP_HOST}`);

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * File path component.
 *
 * File path can be represented as a series of path components. Each component
 * has its name used as a visible label and URL which point to the component
 * in the path.
 * PathComponent.computeComponentsFromEntry computes an array of PathComponent
 * of the given entry.
 */
class PathComponent {
    /**
     * @param {string} name Name.
     * @param {string} url Url.
     * @param {FilesAppEntry=} opt_fakeEntry Fake entry should be set when
     *     this component represents fake entry.
     */
    constructor(name, url, opt_fakeEntry) {
        this.name = name;
        this.url_ = url;
        this.fakeEntry_ = opt_fakeEntry || null;
    }
    /**
     * Resolve an entry of the component.
     * @return {!Promise<!Entry|!FilesAppEntry>} A promise which is
     *     resolved with an entry.
     */
    resolveEntry() {
        if (this.fakeEntry_) {
            return /** @type {!Promise<!Entry|!FilesAppEntry>} */ (Promise.resolve(this.fakeEntry_));
        }
        else {
            return new Promise(window.webkitResolveLocalFileSystemURL.bind(null, this.url_));
        }
    }
    /**
     * Returns the key of this component (its URL).
     */
    getKey() {
        return this.url_;
    }
    /**
     * Computes path components for the path of entry.
     * @param {!Entry|!FilesAppEntry} entry An entry.
     * @return {!Array<!PathComponent>} Components.
     */
    // @ts-ignore: error TS7006: Parameter 'volumeManager' implicitly has an 'any'
    // type.
    static computeComponentsFromEntry(entry, volumeManager) {
        /**
         * Replace the root directory name at the end of a url.
         * The input, |url| is a displayRoot URL of a Drive volume like
         * filesystem:chrome-extension://....foo.com-hash/root
         * The output is like:
         * filesystem:chrome-extension://....foo.com-hash/other
         *
         * @param {string} url which points to a volume display root
         * @param {string} newRoot new root directory name
         * @return {string} new URL with the new root directory name
         */
        const replaceRootName = (url, newRoot) => {
            return url.slice(0, url.length - '/root'.length) + newRoot;
        };
        // @ts-ignore: error TS7034: Variable 'components' implicitly has type
        // 'any[]' in some locations where its type cannot be determined.
        const components = [];
        const locationInfo = volumeManager.getLocationInfo(entry);
        if (!locationInfo) {
            // @ts-ignore: error TS7005: Variable 'components' implicitly has an
            // 'any[]' type.
            return components;
        }
        if (isFakeEntry(entry)) {
            components.push(new PathComponent(util.getEntryLabel(locationInfo, entry), entry.toURL(), 
            /** @type {!FakeEntry} */ (entry)));
            return components;
        }
        // Add volume component.
        let displayRootUrl = locationInfo.volumeInfo.displayRoot.toURL();
        let displayRootFullPath = locationInfo.volumeInfo.displayRoot.fullPath;
        const prefixEntry = locationInfo.volumeInfo.prefixEntry;
        // Directories under Drive Fake Root can return the fake root entry list as
        // prefix entry, but we will never show "Google Drive" as the prefix in the
        // breadcrumb.
        if (prefixEntry &&
            prefixEntry.rootType !== VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT) {
            components.push(new PathComponent(prefixEntry.name, prefixEntry.toURL(), prefixEntry));
        }
        if (locationInfo.rootType ===
            VolumeManagerCommon.RootType.DRIVE_SHARED_WITH_ME) {
            // DriveFS shared items are in either of:
            // <drivefs>/.files-by-id/<id>/<item>
            // <drivefs>/.shortcut-targets-by-id/<id>/<item>
            const match = entry.fullPath.match(/^\/\.(files|shortcut-targets)-by-id\/.+?\//);
            if (match) {
                displayRootFullPath = match[0];
            }
            else {
                console.warn('Unexpected shared DriveFS path: ', entry.fullPath);
            }
            displayRootUrl = replaceRootName(displayRootUrl, displayRootFullPath);
            const sharedWithMeFakeEntry = locationInfo.volumeInfo
                .fakeEntries[VolumeManagerCommon.RootType.DRIVE_SHARED_WITH_ME];
            components.push(new PathComponent(str('DRIVE_SHARED_WITH_ME_COLLECTION_LABEL'), sharedWithMeFakeEntry.toURL(), sharedWithMeFakeEntry));
        }
        else if (locationInfo.rootType === VolumeManagerCommon.RootType.SHARED_DRIVE) {
            displayRootUrl = replaceRootName(displayRootUrl, VolumeManagerCommon.SHARED_DRIVES_DIRECTORY_PATH);
            components.push(new PathComponent(util.getRootTypeLabel(locationInfo), displayRootUrl));
        }
        else if (locationInfo.rootType === VolumeManagerCommon.RootType.COMPUTER) {
            displayRootUrl = replaceRootName(displayRootUrl, VolumeManagerCommon.COMPUTERS_DIRECTORY_PATH);
            components.push(new PathComponent(util.getRootTypeLabel(locationInfo), displayRootUrl));
        }
        else {
            components.push(new PathComponent(util.getRootTypeLabel(locationInfo), displayRootUrl));
        }
        // Get relative path to display root (e.g. /root/foo/bar -> foo/bar).
        let relativePath = entry.fullPath.slice(displayRootFullPath.length);
        if (entry.fullPath.startsWith(VolumeManagerCommon.SHARED_DRIVES_DIRECTORY_PATH)) {
            relativePath = entry.fullPath.slice(VolumeManagerCommon.SHARED_DRIVES_DIRECTORY_PATH.length);
        }
        else if (entry.fullPath.startsWith(VolumeManagerCommon.COMPUTERS_DIRECTORY_PATH)) {
            relativePath = entry.fullPath.slice(VolumeManagerCommon.COMPUTERS_DIRECTORY_PATH.length);
        }
        if (relativePath.indexOf('/') === 0) {
            relativePath = relativePath.slice(1);
        }
        if (relativePath.length === 0) {
            return components;
        }
        // currentUrl should be without trailing slash.
        let currentUrl = /^.+\/$/.test(displayRootUrl) ?
            displayRootUrl.slice(0, displayRootUrl.length - 1) :
            displayRootUrl;
        // Add directory components to the target path.
        const paths = relativePath.split('/');
        for (let i = 0; i < paths.length; i++) {
            // @ts-ignore: error TS2345: Argument of type 'string | undefined' is not
            // assignable to parameter of type 'string | number | boolean'.
            currentUrl += '/' + encodeURIComponent(paths[i]);
            let path = paths[i];
            if (i === 0 &&
                locationInfo.rootType === VolumeManagerCommon.RootType.DOWNLOADS) {
                if (path === 'Downloads') {
                    path = str('DOWNLOADS_DIRECTORY_LABEL');
                }
                if (path === 'PvmDefault') {
                    path = str('PLUGIN_VM_DIRECTORY_LABEL');
                }
                if (path === 'Camera') {
                    path = str('CAMERA_DIRECTORY_LABEL');
                }
            }
            // @ts-ignore: error TS2345: Argument of type 'string | undefined' is not
            // assignable to parameter of type 'string'.
            components.push(new PathComponent(path, currentUrl));
        }
        return components;
    }
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Android apps slice of the store.
 * @suppress {checkTypes}
 *
 * Android App is something we get from private API
 * `chrome.fileManagerPrivate.getAndroidPickerApps`, it will be shown as a
 * directory item in FilePicker mode.
 */
const slice$b = new Slice('androidApps');
/** Action factory to add all android app config to the store. */
slice$b.addReducer('add', addAndroidAppsReducer);
function addAndroidAppsReducer(currentState, payload) {
    const androidApps = {};
    for (const app of payload.apps) {
        // For android app item, if no icon is derived from IconSet, set the icon to
        // the generic one.
        let icon = constants.ICON_TYPES.GENERIC;
        if (app.iconSet) {
            const backgroundImage = util.iconSetToCSSBackgroundImageValue(app.iconSet);
            if (backgroundImage !== 'none') {
                icon = app.iconSet;
            }
        }
        androidApps[app.packageName] = {
            ...app,
            icon,
        };
    }
    return {
        ...currentState,
        androidApps,
    };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Bulk pinning slice of the store.
 * @suppress {checkTypes}
 *
 * BulkPinProgress is the current state of files that are being pinned when the
 * BulkPinning feature is enabled. During bulk pinning, all the users items in
 * My drive are pinned and kept available offline. This tracks the progress of
 * both the initial operation and any subsequent updates along with any error
 * states that may occur.
 */
const slice$a = new Slice('bulkPinning');
/** Create action to update the bulk pin progress. */
slice$a.addReducer('set-progress', (state, bulkPinning) => ({
    ...state,
    bulkPinning,
}));

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Device slice of the store.
 * @suppress {checkTypes}
 */
const slice$9 = new Slice('device');
const updateDeviceConnectionState = slice$9.addReducer('set-connection-state', updateDeviceConnectionStateReducer$1);
function updateDeviceConnectionStateReducer$1(currentState, payload) {
    let device;
    // Device connection.
    if (payload.connection !== currentState.device.connection) {
        device = {
            ...currentState.device,
            connection: payload.connection,
        };
    }
    return device ? { ...currentState, device } : currentState;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Drive slice of the store.
 * @suppress {checkTypes}
 */
const slice$8 = new Slice('drive');
slice$8.addReducer('set-drive-connection-status', updateDriveConnectionStatusReducer);
function updateDriveConnectionStatusReducer(currentState, payload) {
    const drive = { ...currentState.drive };
    if (payload.type !== currentState.drive.connectionType) {
        drive.connectionType = payload.type;
    }
    if (payload.type ===
        chrome.fileManagerPrivate.DriveConnectionStateType.OFFLINE &&
        payload.reason !== currentState.drive.offlineReason) {
        drive.offlineReason = payload.reason;
    }
    else {
        drive.offlineReason = undefined;
    }
    return { ...currentState, drive };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Folder shortcuts slice of the store.
 * @suppress {checkTypes}
 */
const slice$7 = new Slice('folderShortcuts');
/** Create action to refresh all folder shortcuts with provided ones. */
slice$7.addReducer('refresh', refreshFolderShortcutReducer);
function refreshFolderShortcutReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, payload.entries);
    return {
        ...currentState,
        folderShortcuts: payload.entries.map(entry => entry.toURL()),
    };
}
/** Create action to add a folder shortcut. */
slice$7.addReducer('add', addFolderShortcutReducer);
function addFolderShortcutReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, [payload.entry]);
    const { entry } = payload;
    const key = entry.toURL();
    const { folderShortcuts } = currentState;
    for (let i = 0; i < folderShortcuts.length; i++) {
        // Do nothing if the key is already existed.
        if (key === folderShortcuts[i]) {
            return currentState;
        }
        const shortcutEntry = getEntry(currentState, folderShortcuts[i]);
        // The folder shortcut array is sorted, the new item will be added just
        // before the first larger item.
        if (comparePath(shortcutEntry, entry) > 0) {
            return {
                ...currentState,
                folderShortcuts: [
                    ...folderShortcuts.slice(0, i),
                    key,
                    ...folderShortcuts.slice(i),
                ],
            };
        }
    }
    // If for loop is not returned, the key is not added yet, add it at the last.
    return {
        ...currentState,
        folderShortcuts: folderShortcuts.concat(key),
    };
}
/** Create action to remove a folder shortcut. */
slice$7.addReducer('remove', removeFolderShortcutReducer);
function removeFolderShortcutReducer(currentState, payload) {
    const { key } = payload;
    const { folderShortcuts } = currentState;
    const isExisted = folderShortcuts.find(k => k === key);
    // Do nothing if the key is not existed.
    if (!isExisted) {
        return currentState;
    }
    return {
        ...currentState,
        folderShortcuts: folderShortcuts.filter(k => k !== key),
    };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Navigation slice of the store.
 * @suppress {checkTypes}
 */
const slice$6 = new Slice('navigation');
const VolumeType$1 = VolumeManagerCommon.VolumeType;
const sections = new Map();
// My Files.
sections.set(VolumeType$1.DOWNLOADS, NavigationSection.MY_FILES);
// Cloud.
sections.set(VolumeType$1.DRIVE, NavigationSection.CLOUD);
sections.set(VolumeType$1.SMB, NavigationSection.CLOUD);
sections.set(VolumeType$1.PROVIDED, NavigationSection.CLOUD);
sections.set(VolumeType$1.DOCUMENTS_PROVIDER, NavigationSection.CLOUD);
// Removable.
sections.set(VolumeType$1.REMOVABLE, NavigationSection.REMOVABLE);
sections.set(VolumeType$1.MTP, NavigationSection.REMOVABLE);
sections.set(VolumeType$1.ARCHIVE, NavigationSection.REMOVABLE);
/** Returns the entry for the volume's top-most prefix or the volume itself. */
function getPrefixEntryOrEntry(state, volume) {
    if (volume.prefixKey) {
        const entry = getEntry(state, volume.prefixKey);
        return entry;
    }
    if (volume.volumeType === VolumeType$1.DOWNLOADS) {
        return getMyFiles(state).myFilesEntry;
    }
    const entry = getEntry(state, volume.rootKey);
    return entry;
}
/**
 * Create action to refresh all navigation roots. This will clear all existing
 * navigation roots in the store and regenerate them with the current state
 * data.
 *
 * Navigation roots' Entries/Volumes will be ordered as below:
 *  1. Recents.
 *  2. Shortcuts.
 *  3. "My-Files" (grouping), actually Downloads volume.
 *  4. Google Drive.
 *  5. ODFS.
 *  6. SMBs
 *  7. Other FSP (File System Provider) (when mounted).
 *  8. Other volumes (MTP, ARCHIVE, REMOVABLE).
 *  9. Android apps.
 *  10. Trash.
 */
slice$6.addReducer('refresh-roots', refreshNavigationRootsReducer);
function refreshNavigationRootsReducer(currentState) {
    const { navigation: { roots: previousRoots }, folderShortcuts, androidApps, } = currentState;
    /** Roots in the desired order. */
    const roots = [];
    /** Set to avoid adding the same entry multiple times. */
    const processedEntryKeys = new Set();
    // 1. Add the Recent/Materialized view root.
    const recentRoot = previousRoots.find(root => root.key === recentRootKey);
    if (recentRoot) {
        roots.push(recentRoot);
        processedEntryKeys.add(recentRootKey);
    }
    else {
        const recentEntry = getEntry(currentState, recentRootKey);
        if (recentEntry) {
            roots.push({
                key: recentRootKey,
                section: NavigationSection.TOP,
                separator: false,
                type: NavigationType.RECENT,
            });
            processedEntryKeys.add(recentRootKey);
        }
    }
    // 2. Add the Shortcuts.
    // TODO: Since Shortcuts are only for Drive, do we need to remove shortcuts
    // if Drive isn't available anymore?
    folderShortcuts.forEach(shortcutKey => {
        const shortcutEntry = getEntry(currentState, shortcutKey);
        if (shortcutEntry) {
            roots.push({
                key: shortcutKey,
                section: NavigationSection.TOP,
                separator: false,
                type: NavigationType.SHORTCUT,
            });
            processedEntryKeys.add(shortcutKey);
        }
    });
    // 3. MyFiles
    const { myFilesEntry, myFilesVolume } = getMyFiles(currentState);
    roots.push({
        key: myFilesEntry.toURL(),
        section: NavigationSection.MY_FILES,
        // Only show separator if this is not the first navigation item.
        separator: processedEntryKeys.size > 0,
        type: myFilesVolume ? NavigationType.VOLUME : NavigationType.ENTRY_LIST,
    });
    processedEntryKeys.add(myFilesEntry.toURL());
    // 4. Add Google Drive - the only Drive.
    const driveEntry = getEntry(currentState, driveRootEntryListKey);
    if (driveEntry) {
        roots.push({
            key: driveEntry.toURL(),
            section: NavigationSection.GOOGLE_DRIVE,
            separator: true,
            type: NavigationType.DRIVE,
        });
        processedEntryKeys.add(driveEntry.toURL());
    }
    // 5/6/7/8 Other volumes.
    const volumesOrder = {
        // ODFS is a PROVIDED volume type but is a special case to be directly below
        // Drive.
        // ODFS : 0
        [VolumeType$1.SMB]: 1,
        [VolumeType$1.PROVIDED]: 2,
        [VolumeType$1.DOCUMENTS_PROVIDER]: 3,
        [VolumeType$1.REMOVABLE]: 4,
        [VolumeType$1.ARCHIVE]: 5,
        [VolumeType$1.MTP]: 6,
    };
    // Filter volumes based on the volumeInfoList in volumeManager.
    const { volumeManager } = window.fileManager;
    const filteredVolumes = Object.values(currentState.volumes).filter(volume => {
        const volumeEntry = getEntry(currentState, volume.rootKey);
        return volumeManager.isAllowedVolume(volumeEntry.volumeInfo);
    });
    function getVolumeOrder(volume) {
        if (isOneDriveId(volume.providerId)) {
            return 0;
        }
        return volumesOrder[volume.volumeType] ?? 999;
    }
    const volumes = filteredVolumes
        .filter((v) => {
        return (
        // Only display if the entry is resolved.
        v.rootKey &&
            // MyFiles and Drive is already displayed above.
            // MediaView volumeType isn't displayed.
            !(v.volumeType === VolumeType$1.DOWNLOADS ||
                v.volumeType === VolumeType$1.DRIVE ||
                v.volumeType === VolumeType$1.MEDIA_VIEW));
    })
        .sort((v1, v2) => {
        const v1Order = getVolumeOrder(v1);
        const v2Order = getVolumeOrder(v2);
        return v1Order - v2Order;
    });
    let lastSection = null;
    for (const volume of volumes) {
        // Some volumes might be nested inside another volume or entry list, e.g.
        // Multiple partition removable volumes can be nested inside a EntryList, or
        // GuestOS/Crostini/Android volumes will be nested inside MyFiles, for these
        // volumes, we only need to add its parent volume in the navigation roots.
        const volumeEntry = getPrefixEntryOrEntry(currentState, volume);
        if (volumeEntry && !processedEntryKeys.has(volumeEntry.toURL())) {
            let section = sections.get(volume.volumeType) ?? NavigationSection.REMOVABLE;
            if (isOneDriveId(volume.providerId)) {
                section = NavigationSection.ODFS;
            }
            const isSectionStart = section !== lastSection;
            roots.push({
                key: volumeEntry.toURL(),
                section,
                separator: isSectionStart,
                type: NavigationType.VOLUME,
            });
            processedEntryKeys.add(volumeEntry.toURL());
            lastSection = section;
        }
    }
    // 9. Android Apps.
    Object.values(androidApps)
        .forEach((app, index) => {
        roots.push({
            key: app.packageName,
            section: NavigationSection.ANDROID_APPS,
            separator: index === 0,
            type: NavigationType.ANDROID_APPS,
        });
        processedEntryKeys.add(app.packageName);
    });
    // 10. Trash
    const trashEntry = getEntry(currentState, trashRootKey);
    if (trashEntry) {
        roots.push({
            key: trashRootKey,
            section: NavigationSection.TRASH,
            separator: true,
            type: NavigationType.TRASH,
        });
        processedEntryKeys.add(trashRootKey);
    }
    return {
        ...currentState,
        navigation: {
            roots,
        },
    };
}
/** Create action to update navigation data in FileData for a given entry. */
slice$6.addReducer('update-entry', updateNavigationEntryReducer);
function updateNavigationEntryReducer(currentState, payload) {
    const { key, expanded } = payload;
    const fileData = getFileData(currentState, key);
    if (!fileData) {
        return currentState;
    }
    currentState.allEntries[key] = {
        ...fileData,
        expanded,
    };
    return { ...currentState };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Chrome preferences slice of the store.
 * @suppress {checkTypes}
 *
 * Chrome preferences store user data that is persisted to disk OR across
 * profiles, this takes care of initially populating these values then keeping
 * them updated on dynamic changes.
 */
const slice$5 = new Slice('preferences');
/**
 * A type guard to see if the payload supplied is a change of preferences or the
 * entire preferences object. Useful in ensuring subsequent type checks are done
 * on the correct type (instead of the union type).
 */
function isPreferencesChange(payload) {
    // The field `driveEnabled` is only on a `Preferences` object, so if this is
    // undefined the payload is a `PreferencesChange` object otherwise it's a
    // `Preferences` object.
    if (payload.driveEnabled !== undefined) {
        return false;
    }
    return true;
}
/**
 * Only update the existing preferences with their new values if they are
 * defined. In the event of spreading the change event over the existing
 * preferences, undefined values should not overwrite their existing values.
 */
function updateIfDefined(updatedPreferences, newPreferences, key) {
    if (!(key in newPreferences) || newPreferences[key] === undefined) {
        return false;
    }
    if (updatedPreferences[key] === newPreferences[key]) {
        return false;
    }
    // We're updating the `Preferences` original here and it doesn't type union
    // well with `PreferencesChange`. Given we've done all the type validation
    // above, cast them both to the `Preferences` type to ensure subsequent
    // updates can work.
    updatedPreferences[key] =
        newPreferences[key];
    return true;
}
/** Create action to update user preferences. */
slice$5.addReducer('set', updatePreferencesReducer);
function updatePreferencesReducer(currentState, payload) {
    const preferences = payload;
    // This action takes two potential payloads:
    //  - chrome.fileManagerPrivate.Preferences
    //  - chrome.fileManagerPrivate.PreferencesChange
    // Both of these have different type requirements. If we receive a
    // `Preferences` update, just store the data directly in the store. If we
    // receive a `PreferencesChange` the individual fields need to be checked to
    // ensure they are different to what we have in the store AND they won't
    // remove the existing data (i.e. they are not null or undefined).
    if (!isPreferencesChange(preferences)) {
        return {
            ...currentState,
            preferences,
        };
    }
    const updatedPreferences = { ...currentState.preferences };
    const keysToCheck = [
        'driveSyncEnabledOnMeteredNetwork',
        'arcEnabled',
        'arcRemovableMediaAccessEnabled',
        'folderShortcuts',
        'driveFsBulkPinningEnabled',
    ];
    let updated = false;
    for (const key of keysToCheck) {
        updated = updateIfDefined(updatedPreferences, preferences, key) || updated;
    }
    // If no keys have been updated in the preference change, then send back the
    // original state as nothing has changed.
    if (!updated) {
        return currentState;
    }
    return {
        ...currentState,
        preferences: updatedPreferences,
    };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Search slice of the store.
 * @suppress {checkTypes}
 */
const slice$4 = new Slice('search');
/**
 * Returns if the given search data represents empty (cleared) search.
 */
function isSearchEmpty(search) {
    return Object.values(search).every(f => f === undefined);
}
/**
 * Helper function that does a deep comparison between two SearchOptions.
 */
function optionsChanged(stored, fresh) {
    if (fresh === undefined) {
        // If fresh options are undefined, that means keep the stored options. No
        // matter what the stored options are, we are saying they have not changed.
        return false;
    }
    if (stored === undefined) {
        return true;
    }
    return fresh.location !== stored.location ||
        fresh.recency !== stored.recency ||
        fresh.fileCategory !== stored.fileCategory;
}
slice$4.addReducer('set', searchReducer);
function searchReducer(state, payload) {
    const blankSearch = {
        query: undefined,
        status: undefined,
        options: undefined,
    };
    // Special case: if none of the fields are set, the action clears the search
    // state in the store.
    if (isSearchEmpty(payload)) {
        // Only change the state if the stored value has some defined values.
        if (state.search && !isSearchEmpty(state.search)) {
            return {
                ...state,
                search: blankSearch,
            };
        }
        return state;
    }
    const currentSearch = state.search || blankSearch;
    // Create a clone of current search. We must not modify the original object,
    // as store customers are free to cache it and check for changes. If we modify
    // the original object the check for changes incorrectly return false.
    const search = { ...currentSearch };
    let changed = false;
    if (payload.query !== undefined && payload.query !== currentSearch.query) {
        search.query = payload.query;
        changed = true;
    }
    if (payload.status !== undefined && payload.status !== currentSearch.status) {
        search.status = payload.status;
        changed = true;
    }
    if (optionsChanged(currentSearch.options, payload.options)) {
        search.options = { ...payload.options };
        changed = true;
    }
    return changed ? { ...state, search } : state;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview UI entries slice of the store.
 * @suppress {checkTypes}
 *
 * UI entries represents entries shown on UI only (aka FakeEntry, e.g.
 * Recents/Trash/Google Drive wrapper), they don't have a real entry backup in
 * the file system.
 */
const slice$3 = new Slice('uiEntries');
const uiEntryRootTypesInMyFiles = new Set([
    VolumeManagerCommon.RootType.ANDROID_FILES,
    VolumeManagerCommon.RootType.CROSTINI,
    VolumeManagerCommon.RootType.GUEST_OS,
]);
/** Create action to add an UI entry to the store. */
slice$3.addReducer('add', addUiEntryReducer);
function addUiEntryReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, [payload.entry]);
    const { entry } = payload;
    const key = entry.toURL();
    let isVolumeEntryExistedInMyFiles = false;
    if (uiEntryRootTypesInMyFiles.has(entry.rootType)) {
        const { myFilesEntry } = getMyFiles(currentState);
        const children = myFilesEntry.getUIChildren();
        // Check if the the ui entry already has a corresponding volume entry.
        isVolumeEntryExistedInMyFiles = !!children.find(childEntry => isVolumeEntry(childEntry) && childEntry.name === entry.name);
        const isUiEntryExistedInMyFiles = !!children.find(childEntry => isSameEntry(childEntry, entry));
        // We only add the UI entry here if:
        // 1. it is not existed in MyFiles entry
        // 2. its corresponding volume (which ui entry is a placeholder for) is not
        // existed in MyFiles entry
        const shouldAddUiEntry = !isUiEntryExistedInMyFiles && !isVolumeEntryExistedInMyFiles;
        if (shouldAddUiEntry) {
            myFilesEntry.addEntry(entry);
            // Push the new entry to the children of FileData and sort them.
            const fileData = getFileData(currentState, myFilesEntry.toURL());
            if (fileData) {
                const newChildren = fileData.children.concat(entry.toURL());
                const childEntries = newChildren.map(childKey => getEntry(currentState, childKey));
                const sortedChildren = sortEntries(myFilesEntry, childEntries).map(entry => entry.toURL());
                currentState.allEntries[myFilesEntry.toURL()] = {
                    ...fileData,
                    children: sortedChildren,
                };
            }
        }
    }
    // If the corresponding volume entry exists, we don't add the ui entry here.
    if (!currentState.uiEntries.find(k => k === key) &&
        !isVolumeEntryExistedInMyFiles) {
        // Shallow copy.
        currentState.uiEntries = currentState.uiEntries.slice();
        currentState.uiEntries.push(key);
    }
    return {
        ...currentState,
    };
}
/** Create action to remove an UI entry from the store. */
slice$3.addReducer('remove', removeUiEntryReducer);
function removeUiEntryReducer(currentState, payload) {
    const { key } = payload;
    const entry = getEntry(currentState, key);
    if (currentState.uiEntries.find(k => k === key)) {
        // Shallow copy.
        currentState.uiEntries = currentState.uiEntries.filter(k => k !== key);
    }
    // We also need to remove it from the children of MyFiles if it's existed
    // there.
    if (entry && uiEntryRootTypesInMyFiles.has(entry.rootType)) {
        const { myFilesEntry } = getMyFiles(currentState);
        const children = myFilesEntry.getUIChildren();
        const isUiEntryExistedInMyFiles = !!children.find(childEntry => isSameEntry(childEntry, entry));
        if (isUiEntryExistedInMyFiles) {
            myFilesEntry.removeChildEntry(entry);
            const fileData = getFileData(currentState, myFilesEntry.toURL());
            if (fileData) {
                currentState.allEntries[myFilesEntry.toURL()] = {
                    ...fileData,
                    children: fileData.children.filter(child => child !== key),
                };
            }
        }
    }
    return {
        ...currentState,
    };
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Store singleton instance.
 * It's only exposed via `getStore()` to guarantee it's a single instance.
 * TODO(b/272120634): Use window.store temporarily, uncomment below code after
 * the duplicate store issue is resolved.
 */
// let store: null|Store = null;
/**
 * Returns the singleton instance for the Files app's Store.
 *
 * NOTE: This doesn't guarantee the Store's initialization. This should be done
 * at the app's main entry point.
 */
function getStore() {
    // TODO(b/272120634): Put the store on window to prevent Store being created
    // twice.
    if (!window.store) {
        window.store = new BaseStore(getEmptyState(), [
            slice$4,
            slice,
            slice$a,
            slice$3,
            slice$b,
            slice$7,
            slice$6,
            slice$5,
            slice$9,
            slice$8,
            slice$2,
            slice$1,
        ]);
    }
    return window.store;
}
function getEmptyState() {
    // TODO(b/241707820): Migrate State to allow optional attributes.
    return {
        allEntries: {},
        currentDirectory: undefined,
        device: {
            connection: chrome.fileManagerPrivate.DeviceConnectionState.ONLINE,
        },
        drive: {
            connectionType: chrome.fileManagerPrivate.DriveConnectionStateType.ONLINE,
            offlineReason: undefined,
        },
        search: {
            query: undefined,
            status: undefined,
            options: undefined,
        },
        navigation: {
            roots: [],
        },
        volumes: {},
        uiEntries: [],
        folderShortcuts: [],
        androidApps: [],
        bulkPinning: undefined,
        preferences: undefined,
    };
}
/**
 * Returns the `FileData` from a FileKey.
 */
function getFileData(state, key) {
    const fileData = state.allEntries[key];
    if (fileData) {
        return fileData;
    }
    return null;
}
function getEntry(state, key) {
    const fileData = state.allEntries[key];
    return fileData?.entry ?? null;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Current directory slice of the store.
 * @suppress {checkTypes}
 */
const slice$2 = new Slice('currentDirectory');
function getEmptySelection(keys = []) {
    return {
        keys,
        dirCount: 0,
        fileCount: 0,
        // hostedCount might be updated to undefined in the for loop below.
        hostedCount: 0,
        // offlineCachedCount might be updated to undefined in the for loop below.
        offlineCachedCount: 0,
        fileTasks: {
            tasks: [],
            defaultTask: undefined,
            policyDefaultHandlerStatus: undefined,
            status: PropStatus.STARTED,
        },
    };
}
/**
 * Returns true if any of the entries in `currentDirectory` are DLP disabled,
 * and false otherwise.
 */
function hasDlpDisabledFiles(currentState) {
    const content = currentState.currentDirectory?.content;
    if (!content) {
        return false;
    }
    for (const key of content.keys) {
        const fileData = currentState.allEntries[key];
        if (!fileData) {
            console.warn(`Missing entry: ${key}`);
            continue;
        }
        if (fileData.metadata.isRestrictedForDestination) {
            return true;
        }
    }
    return false;
}
/** Create action to change the Current Directory. */
slice$2.addReducer('set', changeDirectoryReducer);
function changeDirectoryReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    if (payload.to) {
        cacheEntries(currentState, [payload.to]);
    }
    const { to, toKey } = payload;
    const key = toKey || to.toURL();
    const status = payload.status || PropStatus.STARTED;
    const fileData = currentState.allEntries[key];
    let selection = currentState.currentDirectory?.selection;
    // Use an empty selection when a selection isn't defined or it's navigating to
    // a new directory.
    if (!selection || currentState.currentDirectory?.key !== key) {
        selection = {
            keys: [],
            dirCount: 0,
            fileCount: 0,
            hostedCount: undefined,
            offlineCachedCount: undefined,
            fileTasks: {
                tasks: [],
                policyDefaultHandlerStatus: undefined,
                defaultTask: undefined,
                status: PropStatus.SUCCESS,
            },
        };
    }
    let content = currentState.currentDirectory?.content;
    let hasDlpDisabledFiles = currentState.currentDirectory?.hasDlpDisabledFiles || false;
    // Use empty content when it isn't defined or it's navigating to a new
    // directory. The content will be updated again after a successful scan.
    if (!content || currentState.currentDirectory?.key !== key) {
        content = {
            keys: [],
        };
        hasDlpDisabledFiles = false;
    }
    let currentDirectory = {
        key,
        status,
        pathComponents: [],
        content: content,
        rootType: undefined,
        selection,
        hasDlpDisabledFiles: hasDlpDisabledFiles,
    };
    // The new directory might not be in the allEntries yet, this might happen
    // when starting to change the directory for a entry that isn't cached.
    // At the end of the change directory, DirectoryContents will send an Action
    // with the Entry to be cached.
    if (fileData) {
        const { volumeManager } = window.fileManager;
        if (!volumeManager) {
            console.debug(`VolumeManager not available yet.`);
            currentDirectory = currentState.currentDirectory || currentDirectory;
        }
        else {
            const components = PathComponent.computeComponentsFromEntry(fileData.entry, volumeManager);
            currentDirectory.pathComponents = components.map(c => {
                return {
                    name: c.name,
                    label: c.name,
                    key: c.url_,
                };
            });
            const locationInfo = volumeManager.getLocationInfo(fileData.entry);
            currentDirectory.rootType = locationInfo?.rootType;
        }
    }
    return {
        ...currentState,
        currentDirectory,
    };
}
/** Create action to update currently selected files/folders. */
slice$2.addReducer('set-selection', updateSelectionReducer);
function updateSelectionReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, payload.entries);
    const updatingToEmpty = (payload.entries.length === 0 && payload.selectedKeys.length === 0);
    if (!currentState.currentDirectory) {
        if (!updatingToEmpty) {
            console.warn('Missing `currentDirectory`');
            console.debug('Dropping action:', payload);
        }
        return currentState;
    }
    if (!currentState.currentDirectory.content) {
        if (!updatingToEmpty) {
            console.warn('Missing `currentDirectory.content`');
            console.debug('Dropping action:', payload);
        }
        return currentState;
    }
    const selectedKeys = payload.selectedKeys;
    const contentKeys = new Set(currentState.currentDirectory.content.keys);
    const missingKeys = selectedKeys.filter(k => !contentKeys.has(k));
    if (missingKeys.length > 0) {
        console.warn('Got selected keys that are not in current directory, ' +
            'continuing anyway');
        console.debug(`Missing keys: ${missingKeys.join('\n')} \nexisting keys:\n ${(currentState.currentDirectory?.content?.keys ?? []).join('\n')}`);
    }
    const selection = getEmptySelection(selectedKeys);
    for (const key of selectedKeys) {
        const fileData = currentState.allEntries[key];
        if (!fileData) {
            console.warn(`Missing entry: ${key}`);
            continue;
        }
        if (fileData.isDirectory) {
            selection.dirCount++;
        }
        else {
            selection.fileCount++;
        }
        // Update hostedCount to undefined if any entry doesn't have the metadata
        // yet.
        const isHosted = fileData.metadata?.hosted;
        if (isHosted === undefined) {
            selection.hostedCount = undefined;
        }
        else {
            if (selection.hostedCount !== undefined && isHosted) {
                selection.hostedCount++;
            }
        }
        // Update offlineCachedCount to undefined if any entry doesn't have the
        // metadata yet.
        const isOfflineCached = fileData.metadata?.offlineCached;
        if (isOfflineCached === undefined) {
            selection.offlineCachedCount = undefined;
        }
        else {
            if (selection.offlineCachedCount !== undefined && isOfflineCached) {
                selection.offlineCachedCount++;
            }
        }
    }
    const currentDirectory = {
        ...currentState.currentDirectory,
        selection,
    };
    return {
        ...currentState,
        currentDirectory,
    };
}
/** Create action to update FileTasks for the current selection. */
slice$2.addReducer('set-file-tasks', updateFileTasksReducer);
function updateFileTasksReducer(currentState, payload) {
    const initialSelection = currentState.currentDirectory?.selection ?? getEmptySelection();
    // Apply the changes over the current selection.
    const fileTasks = {
        ...initialSelection.fileTasks,
        ...payload,
    };
    // Update the selection and current directory objects.
    const selection = {
        ...initialSelection,
        fileTasks,
    };
    const currentDirectory = {
        ...currentState.currentDirectory,
        selection,
    };
    return {
        ...currentState,
        currentDirectory,
    };
}
/** Create action to update the current directory's content. */
slice$2.addReducer('update-content', updateDirectoryContentReducer);
function updateDirectoryContentReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, payload.entries);
    if (!currentState.currentDirectory) {
        console.warn('Missing `currentDirectory`');
        return currentState;
    }
    const initialContent = currentState.currentDirectory?.content ?? { keys: [] };
    const keys = payload.entries.map(e => e.toURL());
    const content = {
        ...initialContent,
        keys,
    };
    let currentDirectory = {
        ...currentState.currentDirectory,
        content,
    };
    const newState = {
        ...currentState,
        currentDirectory,
    };
    currentDirectory = {
        ...currentDirectory,
        hasDlpDisabledFiles: hasDlpDisabledFiles(newState),
    };
    return {
        ...newState,
        currentDirectory,
    };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Entries slice of the store.
 * @suppress {checkTypes} TS already checks this file.
 */
const slice$1 = new Slice('allEntries');
/**
 * Create action to scan `allEntries` and remove its stale entries.
 */
const clearCachedEntries = slice$1.addReducer('clear-stale-cache', clearCachedEntriesReducer);
function clearCachedEntriesReducer(state) {
    const entries = state.allEntries;
    const currentDirectoryKey = state.currentDirectory?.key;
    const entriesToKeep = new Set();
    if (currentDirectoryKey) {
        entriesToKeep.add(currentDirectoryKey);
        for (const component of state.currentDirectory.pathComponents) {
            entriesToKeep.add(component.key);
        }
        for (const key of state.currentDirectory.content.keys) {
            entriesToKeep.add(key);
        }
    }
    const selectionKeys = state.currentDirectory?.selection.keys ?? [];
    if (selectionKeys) {
        for (const key of selectionKeys) {
            entriesToKeep.add(key);
        }
    }
    for (const volume of Object.values(state.volumes)) {
        if (!volume.rootKey) {
            continue;
        }
        entriesToKeep.add(volume.rootKey);
        if (volume.prefixKey) {
            entriesToKeep.add(volume.prefixKey);
        }
    }
    for (const key of state.uiEntries) {
        entriesToKeep.add(key);
    }
    for (const key of state.folderShortcuts) {
        entriesToKeep.add(key);
    }
    for (const root of state.navigation.roots) {
        entriesToKeep.add(root.key);
    }
    // For all expanded entries, we need to keep them and all their direct
    // children.
    for (const key of Object.keys(entries)) {
        const fileData = entries[key];
        if (fileData.expanded) {
            entriesToKeep.add(key);
            if (fileData.children) {
                for (const child of fileData.children) {
                    entriesToKeep.add(child);
                }
            }
        }
    }
    // For all kept entries, we also need to keep their children so we can decide
    // if we need to show the expand icon or not.
    for (const key of entriesToKeep) {
        const fileData = entries[key];
        if (fileData?.children) {
            for (const child of fileData.children) {
                entriesToKeep.add(child);
            }
        }
    }
    for (const key of Object.keys(entries)) {
        if (entriesToKeep.has(key)) {
            continue;
        }
        delete entries[key];
    }
    return state;
}
/**
 * Schedules the routine to remove stale entries from `allEntries`.
 */
function scheduleClearCachedEntries() {
    if (clearCachedEntriesRequestId === 0) {
        clearCachedEntriesRequestId = requestIdleCallback(startClearCache);
    }
}
/** ID for the current scheduled `clearCachedEntries`. */
let clearCachedEntriesRequestId = 0;
/** Starts the action CLEAR_STALE_CACHED_ENTRIES.  */
function startClearCache() {
    const store = getStore();
    store.dispatch(clearCachedEntries());
    clearCachedEntriesRequestId = 0;
}
const prefetchPropertyNames = Array.from(new Set([
    ...constants.LIST_CONTAINER_METADATA_PREFETCH_PROPERTY_NAMES,
    ...constants.ACTIONS_MODEL_METADATA_PREFETCH_PROPERTY_NAMES,
    ...constants.FILE_SELECTION_METADATA_PREFETCH_PROPERTY_NAMES,
    ...constants.DLP_METADATA_PREFETCH_PROPERTY_NAMES,
]));
/** Get the icon for an entry. */
function getEntryIcon(entry, locationInfo, volumeType) {
    const url = entry.toURL();
    // Pre-defined icons based on the URL.
    const urlToIconPath = {
        [recentRootKey]: constants.ICON_TYPES.RECENT,
        [myFilesEntryListKey]: constants.ICON_TYPES.MY_FILES,
        [driveRootEntryListKey]: constants.ICON_TYPES.SERVICE_DRIVE,
    };
    if (urlToIconPath[url]) {
        return urlToIconPath[url];
    }
    // Handle icons for grand roots ("Shared drives" and "Computers") in Drive.
    // Here we can't just use `fullPath` to check if an entry is a grand root or
    // not, because normal directory can also have the same full path. We also
    // need to check if the entry is a direct child of the drive root entry list.
    const grandRootPathToIconMap = {
        [VolumeManagerCommon.COMPUTERS_DIRECTORY_PATH]: constants.ICON_TYPES.COMPUTERS_GRAND_ROOT,
        [VolumeManagerCommon.SHARED_DRIVES_DIRECTORY_PATH]: constants.ICON_TYPES.SHARED_DRIVES_GRAND_ROOT,
    };
    if (volumeType === VolumeManagerCommon.VolumeType.DRIVE &&
        grandRootPathToIconMap[entry.fullPath]) {
        return grandRootPathToIconMap[entry.fullPath];
    }
    // For grouped removable devices, its parent folder is an entry list, we
    // should use USB icon for it.
    if ('rootType' in entry &&
        entry.rootType === VolumeManagerCommon.VolumeType.REMOVABLE) {
        return constants.ICON_TYPES.USB;
    }
    if (isVolumeEntry(entry) && entry.volumeInfo) {
        switch (entry.volumeInfo.volumeType) {
            case VolumeManagerCommon.VolumeType.DOWNLOADS:
                return constants.ICON_TYPES.MY_FILES;
            case VolumeManagerCommon.VolumeType.SMB:
                return constants.ICON_TYPES.SMB;
            case VolumeManagerCommon.VolumeType.PROVIDED:
            // Fallthrough
            case VolumeManagerCommon.VolumeType.DOCUMENTS_PROVIDER: {
                // Only return IconSet if there's valid background image generated.
                const iconSet = entry.volumeInfo.iconSet;
                if (iconSet) {
                    const backgroundImage = util.iconSetToCSSBackgroundImageValue(entry.volumeInfo.iconSet);
                    if (backgroundImage !== 'none') {
                        return iconSet;
                    }
                }
                // If no background is generated from IconSet, set the icon to the
                // generic one for certain volume type.
                if (volumeType && VolumeManagerCommon.shouldProvideIcons(volumeType)) {
                    return constants.ICON_TYPES.GENERIC;
                }
                return '';
            }
            case VolumeManagerCommon.VolumeType.MTP:
                return constants.ICON_TYPES.MTP;
            case VolumeManagerCommon.VolumeType.ARCHIVE:
                return constants.ICON_TYPES.ARCHIVE;
            case VolumeManagerCommon.VolumeType.REMOVABLE:
                // For sub-partition from a removable volume, its children icon should
                // be UNKNOWN_REMOVABLE.
                return entry.volumeInfo.prefixEntry ?
                    constants.ICON_TYPES.UNKNOWN_REMOVABLE :
                    constants.ICON_TYPES.USB;
            case VolumeManagerCommon.VolumeType.DRIVE:
                return constants.ICON_TYPES.DRIVE;
        }
    }
    return FileType.getIcon(entry, undefined, locationInfo?.rootType);
}
function appendChildIfNotExisted(parentEntry, childEntry) {
    if (!parentEntry.getUIChildren().find((entry) => isSameEntry(entry, childEntry))) {
        parentEntry.addEntry(childEntry);
        return true;
    }
    return false;
}
/**
 * Converts the entry to the Store representation of an Entry: FileData.
 */
function convertEntryToFileData(entry) {
    const { volumeManager, metadataModel } = window.fileManager;
    // When this function is triggered when mounting new volumes, volumeInfo is
    // not available in the VolumeManager yet, we need to get volumeInfo from the
    // entry itself.
    const volumeInfo = 'volumeInfo' in entry ? entry.volumeInfo :
        volumeManager.getVolumeInfo(entry);
    const locationInfo = volumeManager.getLocationInfo(entry);
    // getEntryLabel() can accept locationInfo=null, but TS doesn't recognize the
    // type definition in closure, hence the ! here.
    const label = util.getEntryLabel(locationInfo, entry);
    // For FakeEntry, we need to read from entry.volumeType because it doesn't
    // have volumeInfo in the volume manager.
    const volumeType = 'volumeType' in entry && entry.volumeType ?
        entry.volumeType :
        (volumeInfo?.volumeType || null);
    const volumeId = volumeInfo?.volumeId || null;
    const icon = getEntryIcon(entry, locationInfo, volumeType);
    /**
     * Update disabled attribute if entry supports disabled attribute and has a
     * non-null volumeType.
     */
    if ('disabled' in entry && volumeType) {
        entry.disabled = volumeManager.isDisabled(volumeType);
    }
    const metadata = metadataModel ?
        metadataModel.getCache([entry], prefetchPropertyNames)[0] :
        {};
    return {
        entry,
        icon,
        type: getEntryType(entry),
        isDirectory: entry.isDirectory,
        label,
        volumeId,
        rootType: locationInfo?.rootType ?? null,
        metadata,
        expanded: false,
        disabled: 'disabled' in entry ? entry.disabled : false,
        isRootEntry: !!locationInfo?.isRootEntry,
        // `isEjectable/shouldDelayLoadingChildren` is determined by its
        // corresponding volume, will be updated when volume is added.
        isEjectable: false,
        shouldDelayLoadingChildren: false,
        children: [],
    };
}
/**
 * Appends the entry to the Store.
 */
function appendEntry(state, entry) {
    const allEntries = state.allEntries || {};
    const key = entry.toURL();
    const existingFileData = allEntries[key] || {};
    // Some client code might dispatch actions based on
    // `volume.resolveDisplayRoot()` which is a DirectoryEntry instead of a
    // VolumeEntry. It's safe to ignore this entry because the data will be the
    // same as `existingFileData` and we don't want to convert from VolumeEntry to
    // DirectoryEntry.
    if (existingFileData.type === EntryType.VOLUME_ROOT &&
        getEntryType(entry) !== EntryType.VOLUME_ROOT) {
        return;
    }
    const fileData = convertEntryToFileData(entry);
    allEntries[key] = {
        ...fileData,
        // For existing entries already in the store, we want to keep the existing
        // value for the following fields. For example, for "expanded" entries with
        // expanded=true, we don't want to override it with expanded=false derived
        // from `convertEntryToFileData` function above.
        expanded: existingFileData.expanded || fileData.expanded,
        isEjectable: existingFileData.isEjectable || fileData.isEjectable,
        shouldDelayLoadingChildren: existingFileData.shouldDelayLoadingChildren ||
            fileData.shouldDelayLoadingChildren,
        // Keep children to prevent sudden removal of the children items on the UI.
        children: existingFileData.children || fileData.children,
    };
    state.allEntries = allEntries;
}
/**
 * Updates `FileData` from a `FileKey`.
 */
function updateFileData(state, key, changes) {
    if (!state.allEntries[key]) {
        console.warn(`Entry FileData not found in the store: ${key}`);
        return;
    }
    const newFileData = {
        ...state.allEntries[key],
        ...changes,
    };
    state.allEntries[key] = newFileData;
    return newFileData;
}
/** Caches the Action's entry in the `allEntries` attribute. */
function cacheEntries(currentState, entries) {
    scheduleClearCachedEntries();
    for (const entry of entries) {
        appendEntry(currentState, entry);
    }
}
function getEntryType(entry) {
    // Entries from FilesAppEntry have the `type_name` property.
    if (!('type_name' in entry)) {
        return EntryType.FS_API;
    }
    switch (entry.type_name) {
        case 'EntryList':
            return EntryType.ENTRY_LIST;
        case 'VolumeEntry':
            return EntryType.VOLUME_ROOT;
        case 'FakeEntry':
            switch (entry.rootType) {
                case VolumeManagerCommon.RootType.RECENT:
                    return EntryType.RECENT;
                case VolumeManagerCommon.RootType.TRASH:
                    return EntryType.TRASH;
                case VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT:
                    return EntryType.ENTRY_LIST;
                case VolumeManagerCommon.RootType.CROSTINI:
                case VolumeManagerCommon.RootType.ANDROID_FILES:
                    return EntryType.PLACEHOLDER;
                case VolumeManagerCommon.RootType.DRIVE_OFFLINE:
                case VolumeManagerCommon.RootType.DRIVE_SHARED_WITH_ME:
                    // TODO(lucmult): This isn't really Recent but it's the closest.
                    return EntryType.RECENT;
            }
            console.warn(`Invalid fakeEntry.rootType='${entry.rootType} rootType`);
            return EntryType.PLACEHOLDER;
        case 'GuestOsPlaceholder':
            return EntryType.PLACEHOLDER;
        case 'TrashEntry':
            return EntryType.TRASH;
        default:
            console.warn(`Invalid entry.type_name='${entry.type_name}`);
            return EntryType.FS_API;
    }
}
/** Create action to update entries metadata. */
slice$1.addReducer('update-metadata', updateMetadataReducer);
function updateMetadataReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, payload.metadata.map(m => m.entry));
    for (const entryMetadata of payload.metadata) {
        const key = entryMetadata.entry.toURL();
        const fileData = currentState.allEntries[key];
        const metadata = { ...fileData.metadata, ...entryMetadata.metadata };
        currentState.allEntries[key] = {
            ...fileData,
            metadata,
        };
    }
    if (!currentState.currentDirectory) {
        console.warn('Missing `currentDirectory`');
        return currentState;
    }
    const currentDirectory = {
        ...currentState.currentDirectory,
        hasDlpDisabledFiles: hasDlpDisabledFiles(currentState),
    };
    return {
        ...currentState,
        currentDirectory,
    };
}
function findVolumeByType(volumes, volumeType) {
    return Object.values(volumes).find(v => {
        // If the volume isn't resolved yet, we just ignore here.
        return v.rootKey && v.volumeType === volumeType;
    }) ??
        null;
}
/**
 * Returns the MyFiles entry and volume, the entry can either be a fake one
 * (EntryList) or a real one (VolumeEntry) depends on if the MyFiles volume is
 * mounted or not.
 * Note: it will create a fake EntryList in the store if there's no
 * MyFiles entry in the store (e.g. no EntryList and no VolumeEntry).
 */
function getMyFiles(state) {
    const { volumes } = state;
    const myFilesVolume = findVolumeByType(volumes, VolumeManagerCommon.VolumeType.DOWNLOADS);
    const myFilesVolumeEntry = myFilesVolume ?
        getEntry(state, myFilesVolume.rootKey) :
        null;
    let myFilesEntryList = getEntry(state, myFilesEntryListKey);
    if (!myFilesVolumeEntry && !myFilesEntryList) {
        myFilesEntryList = new EntryList(str('MY_FILES_ROOT_LABEL'), VolumeManagerCommon.RootType.MY_FILES);
        appendEntry(state, myFilesEntryList);
        state.uiEntries = [...state.uiEntries, myFilesEntryList.toURL()];
    }
    return {
        myFilesEntry: myFilesVolumeEntry || myFilesEntryList,
        myFilesVolume,
    };
}
/**
 * It nests the Android, Crostini & GuestOSes inside MyFiles.
 * It creates a placeholder for MyFiles if MyFiles volume isn't mounted yet.
 *
 * It nests the Drive root (aka MyDrive) inside a EntryList for "Google Drive".
 * It nests the fake entries for "Offline" and "Shared with me" in "Google
 * Drive".
 *
 * For removables, it may nest in a EntryList if one device has multiple
 * partitions.
 */
function volumeNestingEntries(state, volumeInfo, volumeMetadata) {
    const VolumeType = VolumeManagerCommon.VolumeType;
    const myFilesNestedVolumeTypes = getVolumeTypesNestedInMyFiles();
    const volumeRootKey = volumeInfo.displayRoot?.toURL();
    const newVolumeEntry = getEntry(state, volumeRootKey);
    // Do nothing if the volume is not resolved.
    if (!volumeInfo || !newVolumeEntry) {
        return;
    }
    // For volumes which are supposed to be nested inside MyFiles (e.g. Android,
    // Crostini, GuestOS), we need to nest them into MyFiles and remove the
    // placeholder fake entry if existed.
    const { myFilesEntry } = getMyFiles(state);
    if (myFilesNestedVolumeTypes.has(volumeInfo.volumeType)) {
        const myFilesEntryKey = myFilesEntry.toURL();
        // Shallow copy here because we will update this object directly below, and
        // the same object might be referenced in the UI.
        const myFilesFileData = { ...getFileData(state, myFilesEntryKey) };
        // Nest the entry for the new volume info in MyFiles.
        const uiEntryPlaceholder = myFilesEntry.getUIChildren().find(childEntry => childEntry.name === newVolumeEntry.name);
        // Remove a placeholder for the currently mounting volume.
        if (uiEntryPlaceholder) {
            myFilesEntry.removeChildEntry(uiEntryPlaceholder);
            // Also remove it from the children field.
            myFilesFileData.children = myFilesFileData.children.filter(childKey => childKey !== uiEntryPlaceholder.toURL());
            // Do not remove the placeholder ui entry from the store. Removing it from
            // the MyFiles is sufficient to prevent it from showing in the directory
            // tree. We keep it in the store (`state["uiEntries"]`) because when
            // the corresponding volume unmounts, we need to use its existence to
            // decide if we need to re-add the placeholder back to MyFiles.
        }
        appendChildIfNotExisted(myFilesEntry, newVolumeEntry);
        // Push the new entry to the children of FileData and sort them.
        if (!myFilesFileData.children.find(childKey => childKey === volumeRootKey)) {
            const newChildren = [...myFilesFileData.children, volumeRootKey];
            const childEntries = newChildren.map(childKey => getEntry(state, childKey));
            myFilesFileData.children =
                sortEntries(myFilesEntry, childEntries).map(entry => entry.toURL());
        }
        state.allEntries[myFilesEntryKey] = myFilesFileData;
    }
    // When mounting MyFiles replace the temporary placeholder entry.
    if (volumeInfo.volumeType === VolumeType.DOWNLOADS) {
        // Do not use myFilesEntry above, because at this moment both fake MyFiles
        // and real MyFiles are in the store.
        const myFilesEntryList = getEntry(state, myFilesEntryListKey);
        const myFilesVolumeEntry = newVolumeEntry;
        if (myFilesEntryList) {
            // We need to copy the children of the entry list to the real volume
            // entry.
            const uiChildren = [...myFilesEntryList.getUIChildren()];
            for (const childEntry of uiChildren) {
                appendChildIfNotExisted(myFilesVolumeEntry, childEntry);
                myFilesEntryList.removeChildEntry(childEntry);
            }
            // Remove MyFiles entry list from the uiEntries.
            state.uiEntries = state.uiEntries.filter(uiEntryKey => uiEntryKey !== myFilesEntryListKey);
        }
    }
    // Drive fake entries for root for: Shared Drives, Computers and the parent
    // Google Drive.
    if (volumeInfo.volumeType === VolumeType.DRIVE) {
        const myDrive = newVolumeEntry;
        let googleDrive = getEntry(state, driveRootEntryListKey);
        if (!googleDrive) {
            googleDrive = new EntryList(str('DRIVE_DIRECTORY_LABEL'), VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT);
            appendEntry(state, googleDrive);
            state.uiEntries = [...state.uiEntries, googleDrive.toURL()];
        }
        appendChildIfNotExisted(googleDrive, myDrive);
        // We want the order to be
        // - My Drive
        // - Shared Drives (if the user has any)
        // - Computers (if the user has any)
        // - Shared with me
        // - Offline
        const { sharedDriveDisplayRoot, computersDisplayRoot, fakeEntries } = volumeInfo;
        // Add "Shared drives" (team drives) grand root into Drive. It's guaranteed
        // to be resolved at this moment because ADD_VOLUME action will only be
        // triggered after resolving all roots.
        if (sharedDriveDisplayRoot) {
            appendEntry(state, sharedDriveDisplayRoot);
            appendChildIfNotExisted(googleDrive, sharedDriveDisplayRoot);
        }
        // Add "Computer" grand root into Drive. It's guaranteed to be resolved at
        // this moment because ADD_VOLUME action will only be triggered after
        // resolving all roots.
        if (computersDisplayRoot) {
            appendEntry(state, computersDisplayRoot);
            appendChildIfNotExisted(googleDrive, computersDisplayRoot);
        }
        // Add "Shared with me" into Drive.
        const fakeSharedWithMe = fakeEntries[VolumeManagerCommon.RootType.DRIVE_SHARED_WITH_ME];
        if (fakeSharedWithMe) {
            appendEntry(state, fakeSharedWithMe);
            state.uiEntries = [...state.uiEntries, fakeSharedWithMe.toURL()];
            appendChildIfNotExisted(googleDrive, fakeSharedWithMe);
        }
        // Add "Offline" into Drive.
        const fakeOffline = fakeEntries[VolumeManagerCommon.RootType.DRIVE_OFFLINE];
        if (fakeOffline) {
            appendEntry(state, fakeOffline);
            state.uiEntries = [...state.uiEntries, fakeOffline.toURL()];
            appendChildIfNotExisted(googleDrive, fakeOffline);
        }
    }
    state.allEntries[volumeRootKey].isEjectable =
        (volumeInfo.source === VolumeManagerCommon.Source.DEVICE &&
            volumeInfo.volumeType !== VolumeManagerCommon.VolumeType.MTP) ||
            volumeInfo.source === VolumeManagerCommon.Source.FILE;
    if (volumeInfo.volumeType === VolumeType.REMOVABLE) {
        // It should be nested/grouped when there is more than 1 partition in the
        // same device.
        const groupingKey = removableGroupKey(volumeMetadata);
        const shouldGroup = Object.values(state.volumes).some(v => {
            return (v.volumeType === VolumeType.REMOVABLE &&
                removableGroupKey(v) === groupingKey &&
                v.volumeId != volumeInfo.volumeId);
        });
        if (shouldGroup) {
            const parentKey = makeRemovableParentKey(volumeMetadata);
            let parentEntry = getEntry(state, parentKey);
            if (!parentEntry) {
                parentEntry = new EntryList(volumeMetadata.driveLabel || '', VolumeManagerCommon.RootType.REMOVABLE, volumeMetadata.devicePath);
                appendEntry(state, parentEntry);
                state.uiEntries = [...state.uiEntries, parentEntry.toURL()];
                // Removable devices with group, its parent should always be ejectable.
                state.allEntries[parentKey].isEjectable = true;
            }
            // Update the siblings too.
            for (const v of Object.values(state.volumes)) {
                // Ignore the partitions that already is nested via `prefixKey`. Note:
                // `prefixKey` field is handled by AddVolume() reducer.
                if (v.volumeType === VolumeType.REMOVABLE &&
                    removableGroupKey(v) === groupingKey && !v.prefixKey) {
                    const fileData = getFileData(state, v.rootKey);
                    if (fileData?.entry) {
                        appendChildIfNotExisted(parentEntry, fileData.entry);
                        // For sub-partition from a removable volume, its children icon
                        // should be UNKNOWN_REMOVABLE, and it shouldn't be ejectable.
                        state.allEntries[v.rootKey] = {
                            ...fileData,
                            icon: constants.ICON_TYPES.UNKNOWN_REMOVABLE,
                            isEjectable: false,
                        };
                    }
                }
            }
            // At this point the current `newVolumeEntry` is not in state.volumes,
            // we need to add that to that group.
            appendChildIfNotExisted(parentEntry, newVolumeEntry);
            // For sub-partition from a removable volume, its children icon should be
            // UNKNOWN_REMOVABLE, and it shouldn't be ejectable.
            const fileData = getFileData(state, volumeRootKey);
            state.allEntries[volumeRootKey] = {
                ...fileData,
                icon: constants.ICON_TYPES.UNKNOWN_REMOVABLE,
                isEjectable: false,
            };
        }
    }
    // Update the shouldDelayLoadingChildren field in the FileData.
    state.allEntries[volumeRootKey].shouldDelayLoadingChildren =
        volumeInfo.source === VolumeManagerCommon.Source.NETWORK &&
            (volumeInfo.volumeType === VolumeManagerCommon.VolumeType.PROVIDED ||
                volumeInfo.volumeType === VolumeManagerCommon.VolumeType.SMB);
}
/**  Create action to add child entries to a parent entry. */
slice$1.addReducer('add-children', addChildEntriesReducer);
function addChildEntriesReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, payload.entries);
    const { parentKey, entries } = payload;
    const { allEntries } = currentState;
    // The corresponding parent entry item has been removed somehow, do nothing.
    if (!allEntries[parentKey]) {
        return currentState;
    }
    const newEntryKeys = entries.map(entry => entry.toURL());
    // Add children to the parent entry item.
    const parentFileData = {
        ...allEntries[parentKey],
        children: newEntryKeys,
    };
    // We mark all the children's shouldDelayLoadingChildren if the parent entry
    // has been delayed.
    if (parentFileData.shouldDelayLoadingChildren) {
        for (const entryKey of newEntryKeys) {
            allEntries[entryKey] = {
                ...allEntries[entryKey],
                shouldDelayLoadingChildren: true,
            };
        }
    }
    return {
        ...currentState,
        allEntries: {
            ...allEntries,
            [parentKey]: parentFileData,
        },
    };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Volumes slice of the store.
 * @suppress {checkTypes}
 */
const slice = new Slice('volumes');
const VolumeType = VolumeManagerCommon.VolumeType;
const myFilesEntryListKey = `entry-list://${VolumeManagerCommon.RootType.MY_FILES}`;
`fake-entry://${VolumeManagerCommon.RootType.CROSTINI}`;
`fake-entry://${VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT}`;
const recentRootKey = `fake-entry://${VolumeManagerCommon.RootType.RECENT}/all`;
const trashRootKey = `fake-entry://${VolumeManagerCommon.RootType.TRASH}`;
const driveRootEntryListKey = `entry-list://${VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT}`;
const makeRemovableParentKey = (volume) => `entry-list://${VolumeManagerCommon.RootType.REMOVABLE}/${volume.devicePath}`;
const removableGroupKey = (volume) => `${volume.devicePath}/${volume.driveLabel}`;
function getVolumeTypesNestedInMyFiles() {
    const myFilesNestedVolumeTypes = new Set([
        VolumeType.ANDROID_FILES,
        VolumeType.CROSTINI,
    ]);
    if (isGuestOsEnabled()) {
        myFilesNestedVolumeTypes.add(VolumeType.GUEST_OS);
    }
    return myFilesNestedVolumeTypes;
}
/**
 * Convert VolumeInfo and VolumeMetadata to its store representation: Volume.
 */
function convertVolumeInfoAndMetadataToVolume(volumeInfo, volumeMetadata) {
    /**
     * FileKey for the volume root's Entry. Or how do we find the Entry for this
     * volume in the allEntries.
     */
    const volumeRootKey = volumeInfo.displayRoot.toURL();
    return {
        volumeId: volumeMetadata.volumeId,
        volumeType: volumeMetadata.volumeType,
        rootKey: volumeRootKey,
        status: PropStatus.SUCCESS,
        label: volumeInfo.label,
        error: volumeMetadata.mountCondition,
        deviceType: volumeMetadata.deviceType,
        devicePath: volumeMetadata.devicePath,
        isReadOnly: volumeMetadata.isReadOnly,
        isReadOnlyRemovableDevice: volumeMetadata.isReadOnlyRemovableDevice,
        providerId: volumeMetadata.providerId,
        configurable: volumeMetadata.configurable,
        watchable: volumeMetadata.watchable,
        source: volumeMetadata.source,
        diskFileSystemType: volumeMetadata.diskFileSystemType,
        iconSet: volumeMetadata.iconSet,
        driveLabel: volumeMetadata.driveLabel,
        vmType: volumeMetadata.vmType,
        isDisabled: false,
        // FileKey to volume's parent in the Tree.
        prefixKey: undefined,
        // A volume is by default interactive unless explicitly made
        // non-interactive.
        isInteractive: true,
    };
}
/**
 * Updates a volume from the store.
 */
function updateVolume(state, volumeId, changes) {
    if (!state.volumes[volumeId]) {
        console.warn(`Volume not found in the store: ${volumeId}`);
        return;
    }
    return {
        ...state.volumes[volumeId],
        ...changes,
    };
}
/** Create action to add a volume. */
slice.addReducer('add', addVolumeReducer);
function addVolumeReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, [new VolumeEntry(payload.volumeInfo)]);
    volumeNestingEntries(currentState, payload.volumeInfo, payload.volumeMetadata);
    const volumeMetadata = payload.volumeMetadata;
    const volumeInfo = payload.volumeInfo;
    if (!volumeInfo.fileSystem) {
        console.error('Only add to the store volumes that have successfully resolved.');
        return currentState;
    }
    const volumes = {
        ...currentState.volumes,
    };
    const volume = convertVolumeInfoAndMetadataToVolume(volumeInfo, volumeMetadata);
    const volumeEntry = getEntry(currentState, volume.rootKey);
    // Use volume entry's disabled property because that one is derived from
    // volume manager.
    if (volumeEntry) {
        volume.isDisabled = !!volumeEntry.disabled;
    }
    // Nested in MyFiles.
    const myFilesNestedVolumeTypes = getVolumeTypesNestedInMyFiles();
    // When mounting MyFiles replace the temporary placeholder in nested volumes.
    if (volume.volumeType === VolumeType.DOWNLOADS) {
        for (const v of Object.values(volumes)) {
            if (myFilesNestedVolumeTypes.has(v.volumeType)) {
                v.prefixKey = volume.rootKey;
            }
        }
    }
    // When mounting a nested volume, set the prefixKey.
    if (myFilesNestedVolumeTypes.has(volume.volumeType)) {
        const { myFilesEntry } = getMyFiles(currentState);
        volume.prefixKey = myFilesEntry.toURL();
    }
    // When mounting Drive.
    if (volume.volumeType === VolumeType.DRIVE) {
        const drive = getEntry(currentState, driveRootEntryListKey);
        assert(drive);
        volume.prefixKey = drive.toURL();
    }
    // When mounting Removable.
    if (volume.volumeType === VolumeType.REMOVABLE) {
        // Should it it be nested or not?
        const groupingKey = removableGroupKey(volume);
        const parentKey = makeRemovableParentKey(volume);
        const groupParentEntry = getEntry(currentState, parentKey);
        if (groupParentEntry) {
            const volumesInSameGroup = Object.values(volumes).filter(v => {
                if (v.volumeType === VolumeType.REMOVABLE &&
                    removableGroupKey(v) === groupingKey) {
                    v.prefixKey = parentKey;
                    return true;
                }
                return false;
            });
            volume.prefixKey =
                volumesInSameGroup.length > 0 ? groupParentEntry?.toURL() : undefined;
        }
    }
    return {
        ...currentState,
        volumes: {
            ...volumes,
            [volume.volumeId]: volume,
        },
    };
}
/** Create action to remove a volume. */
slice.addReducer('remove', removeVolumeReducer);
function removeVolumeReducer(currentState, payload) {
    const volumeToRemove = currentState.volumes[payload.volumeId];
    const volumeEntry = getEntry(currentState, volumeToRemove.rootKey);
    delete currentState.volumes[payload.volumeId];
    currentState.volumes = {
        ...currentState.volumes,
    };
    // We also need to check if the removed volume is a child of My files.
    const volumeTypesNestedInMyFiles = getVolumeTypesNestedInMyFiles();
    if (volumeTypesNestedInMyFiles.has(volumeToRemove.volumeType)) {
        const { myFilesEntry } = getMyFiles(currentState);
        const children = myFilesEntry.getUIChildren();
        const volumeEntryExistsInMyFiles = !!children.find(childEntry => isVolumeEntry(childEntry) && isSameEntry(childEntry, volumeEntry));
        if (volumeEntryExistsInMyFiles) {
            // Remove it from the MyFiles UI children.
            myFilesEntry.removeChildEntry(volumeEntry);
            // Re-add the corresponding placeholder ui entry to the UI children.
            const uiEntryKey = currentState.uiEntries.find(entryKey => {
                const uiEntry = getEntry(currentState, entryKey);
                return uiEntry.name === volumeEntry.name;
            });
            if (uiEntryKey) {
                const uiEntry = getEntry(currentState, uiEntryKey);
                myFilesEntry.addEntry(uiEntry);
            }
            // Remove it from the MyFiles file data.
            const fileData = getFileData(currentState, myFilesEntry.toURL());
            if (fileData) {
                let newChildren = fileData.children.filter(child => child !== volumeEntry.toURL());
                // Re-add the corresponding placeholder ui entry to the file data.
                if (uiEntryKey) {
                    newChildren = newChildren.concat(uiEntryKey);
                    const childEntries = newChildren.map(childKey => getEntry(currentState, childKey));
                    newChildren = sortEntries(myFilesEntry, childEntries)
                        .map(entry => entry.toURL());
                }
                currentState.allEntries[myFilesEntry.toURL()] = {
                    ...fileData,
                    children: newChildren,
                };
            }
        }
    }
    return {
        ...currentState,
    };
}
/** Create action to update isInteractive for a volume. */
slice.addReducer('set-is-interactive', updateIsInteractiveVolumeReducer);
function updateIsInteractiveVolumeReducer(currentState, payload) {
    const volumes = {
        ...currentState.volumes,
    };
    const updatedVolume = {
        ...volumes[payload.volumeId],
        isInteractive: payload.isInteractive,
    };
    return {
        ...currentState,
        volumes: {
            ...volumes,
            [payload.volumeId]: updatedVolume,
        },
    };
}
slice.addReducer(updateDeviceConnectionState.type, updateDeviceConnectionStateReducer);
function updateDeviceConnectionStateReducer(currentState, payload) {
    let volumes;
    // Find ODFS volume(s) and disable it (or them) if offline.
    const disableODFS = payload.connection ===
        chrome.fileManagerPrivate.DeviceConnectionState.OFFLINE;
    for (const volume of Object.values(currentState.volumes)) {
        if (!isOneDriveId(volume.providerId) || volume.isDisabled === disableODFS) {
            continue;
        }
        const updatedVolume = updateVolume(currentState, volume.volumeId, { isDisabled: disableODFS });
        if (updatedVolume) {
            if (!volumes) {
                volumes = {
                    ...currentState.volumes,
                    [volume.volumeId]: updatedVolume,
                };
            }
            else {
                volumes[volume.volumeId] = updatedVolume;
            }
        }
        // Make the ODFS FileData/VolumeEntry consistent with its volume in the
        // store.
        updateFileData(currentState, volume.rootKey, { disabled: disableODFS });
        const odfsVolumeEntry = getEntry(currentState, volume.rootKey);
        if (odfsVolumeEntry) {
            odfsVolumeEntry.disabled = disableODFS;
        }
    }
    return volumes ? { ...currentState, volumes } : currentState;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Type guard used to identify if a given entry is actually a
 * VolumeEntry.
 */
function isVolumeEntry(entry) {
    return 'volumeInfo' in entry;
}
/**
 * Check if the entry is MyFiles or not.
 * Note: if the return value is true, the input entry is guaranteed to be
 * EntryList or VolumeEntry type.
 */
function isMyFilesEntry(entry) {
    if (!entry) {
        return false;
    }
    if (entry instanceof EntryList && entry.toURL() === myFilesEntryListKey) {
        return true;
    }
    if (isVolumeEntry(entry) &&
        entry.volumeType === VolumeManagerCommon.VolumeType.DOWNLOADS) {
        return true;
    }
    return false;
}
/** Sort the entries based on the filter and the names. */
function sortEntries(parentEntry, entries) {
    if (entries.length === 0) {
        return [];
    }
    // TODO: proper way to get directory model and volume manager.
    const { directoryModel, volumeManager } = window.fileManager;
    const fileFilter = directoryModel.getFileFilter();
    // For entries under My Files we need to use a different sorting logic
    // because we need to make sure curtain files are always at the bottom.
    if (isMyFilesEntry(parentEntry)) {
        // Use locationInfo from first entry because it only compare within the
        // same volume.
        // TODO(b/271485133): Do not use getLocationInfo() for sorting.
        const locationInfo = volumeManager.getLocationInfo(entries[0]);
        if (locationInfo) {
            const compareFunction = compareLabelAndGroupBottomEntries(locationInfo, 
            // Only Linux/Play/GuestOS files are in the UI children.
            parentEntry.getUIChildren());
            return entries.filter(entry => fileFilter.filter(entry))
                .sort(compareFunction);
        }
    }
    return entries.filter(entry => fileFilter.filter(entry)).sort(compareName);
}
/**
 * Obtains whether an entry is fake or not.
 */
function isFakeEntry(entry) {
    if (entry.getParent === undefined) {
        return true;
    }
    return 'isNativeType' in entry ? !entry.isNativeType : false;
}
/**
 * Compares two entries.
 * @return {boolean} True if the both entry represents a same file or
 *     directory. Returns true if both entries are null.
 */
function isSameEntry(entry1, entry2) {
    if (!entry1 && !entry2) {
        return true;
    }
    if (!entry1 || !entry2) {
        return false;
    }
    return entry1.toURL() === entry2.toURL();
}
/**
 * Compare by name. The 2 entries must be in same directory.
 */
function compareName(entry1, entry2) {
    return util.collator.compare(entry1.name, entry2.name);
}
/**
 * Compare by label (i18n name). The 2 entries must be in same directory.
 */
function compareLabel(locationInfo, entry1, entry2) {
    return util.collator.compare(util.getEntryLabel(locationInfo, entry1), util.getEntryLabel(locationInfo, entry2));
}
/**
 * Compare by path.
 */
function comparePath(entry1, entry2) {
    return util.collator.compare(entry1.fullPath, entry2.fullPath);
}
/**
 * @param bottomEntries entries that should be grouped in the bottom, used for
 *     sorting Linux and Play files entries after
 * other folders in MyFiles.
 */
function compareLabelAndGroupBottomEntries(locationInfo, bottomEntries) {
    const childrenMap = new Map();
    bottomEntries.forEach((entry) => {
        childrenMap.set(entry.toURL(), entry);
    });
    /**
     * Compare entries putting entries from |bottomEntries| in the bottom and
     * sort by name within entries that are the same type in regards to
     * |bottomEntries|.
     */
    function compare(entry1, entry2) {
        // Bottom entry here means Linux or Play files, which should appear after
        // all native entries.
        const isBottomlEntry1 = childrenMap.has(entry1.toURL()) ? 1 : 0;
        const isBottomlEntry2 = childrenMap.has(entry2.toURL()) ? 1 : 0;
        // When there are the same type, just compare by label.
        if (isBottomlEntry1 === isBottomlEntry2) {
            return compareLabel(locationInfo, entry1, entry2);
        }
        return isBottomlEntry1 - isBottomlEntry2;
    }
    return compare;
}
/**
 * Converts array of entries to an array of corresponding URLs.
 */
function entriesToURLs(entries) {
    return entries.map(entry => {
        // When building file_manager_base.js, cachedUrl is not referred other than
        // here. Thus closure compiler raises an error if we refer the property like
        // entry.cachedUrl.
        if ('cachedUrl' in entry) {
            return entry['cachedUrl'] || entry.toURL();
        }
        return entry.toURL();
    });
}
const isOneDriveId = (providerId) => providerId === constants.ODFS_EXTENSION_ID;

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Helpers for APIs used within Files app.
 */
/**
 * Calls the `fn` function which should expect the callback as last argument.
 *
 * Resolves with the result of the `fn`.
 *
 * Rejects if there is `chrome.runtime.lastError`.
 */
async function promisify(fn, ...args) {
    return new Promise((resolve, reject) => {
        const callback = (result) => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError.message);
            }
            else {
                resolve(result);
            }
        };
        fn(...args, callback);
    });
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file should contain utility functions used only by the
 * files app. Other shared utility functions can be found in base/*_util.js,
 * which allows finer-grained control over introducing dependencies.
 */
/**
 * Namespace for utility functions.
 */
const util = {};
/**
 * @param {!chrome.fileManagerPrivate.IconSet} iconSet Set of icons.
 * @return {string} CSS value.
 */
util.iconSetToCSSBackgroundImageValue = iconSet => {
    let lowDpiPart = null;
    let highDpiPart = null;
    if (iconSet.icon16x16Url) {
        lowDpiPart = 'url(' + iconSet.icon16x16Url + ') 1x';
    }
    if (iconSet.icon32x32Url) {
        highDpiPart = 'url(' + iconSet.icon32x32Url + ') 2x';
    }
    if (lowDpiPart && highDpiPart) {
        return '-webkit-image-set(' + lowDpiPart + ', ' + highDpiPart + ')';
    }
    else if (lowDpiPart) {
        return '-webkit-image-set(' + lowDpiPart + ')';
    }
    else if (highDpiPart) {
        return '-webkit-image-set(' + highDpiPart + ')';
    }
    return 'none';
};
/**
 * Mapping table of file error name to i18n localized error name.
 *
 * @const @enum {string}
 */
util.FileErrorLocalizedName = {
    'InvalidModificationError': 'FILE_ERROR_INVALID_MODIFICATION',
    'InvalidStateError': 'FILE_ERROR_INVALID_STATE',
    'NoModificationAllowedError': 'FILE_ERROR_NO_MODIFICATION_ALLOWED',
    'NotFoundError': 'FILE_ERROR_NOT_FOUND',
    'NotReadableError': 'FILE_ERROR_NOT_READABLE',
    'PathExistsError': 'FILE_ERROR_PATH_EXISTS',
    'QuotaExceededError': 'FILE_ERROR_QUOTA_EXCEEDED',
    'SecurityError': 'FILE_ERROR_SECURITY',
};
Object.freeze(util.FileErrorLocalizedName);
/**
 * Returns i18n localized error name for file error |name|.
 *
 * @param {?string|undefined} name File error name.
 * @return {string} Translated file error string.
 */
util.getFileErrorString = name => {
    // @ts-ignore: error TS2538: Type 'undefined' cannot be used as an index type.
    const error = util.FileErrorLocalizedName[name] || 'FILE_ERROR_GENERIC';
    return loadTimeData.getString(error);
};
/**
 * Mapping table for FileError.code style enum to DOMError.name string.
 *
 * @const @enum {string}
 */
util.FileError = {
    ABORT_ERR: 'AbortError',
    INVALID_MODIFICATION_ERR: 'InvalidModificationError',
    INVALID_STATE_ERR: 'InvalidStateError',
    NO_MODIFICATION_ALLOWED_ERR: 'NoModificationAllowedError',
    NOT_FOUND_ERR: 'NotFoundError',
    NOT_READABLE_ERR: 'NotReadable',
    PATH_EXISTS_ERR: 'PathExistsError',
    QUOTA_EXCEEDED_ERR: 'QuotaExceededError',
    TYPE_MISMATCH_ERR: 'TypeMismatchError',
    ENCODING_ERR: 'EncodingError',
};
Object.freeze(util.FileError);
/**
 * Convert a number of bytes into a human friendly format, using the correct
 * number separators.
 *
 * @param {number} bytes The number of bytes.
 * @param {number=} addedPrecision The number of precision digits to add.
 * @return {string} Localized string.
 */
util.bytesToString = (bytes, addedPrecision = 0) => {
    // Translation identifiers for size units.
    const UNITS = [
        'SIZE_BYTES',
        'SIZE_KB',
        'SIZE_MB',
        'SIZE_GB',
        'SIZE_TB',
        'SIZE_PB',
    ];
    // Minimum values for the units above.
    const STEPS = [
        0,
        Math.pow(2, 10),
        Math.pow(2, 20),
        Math.pow(2, 30),
        Math.pow(2, 40),
        Math.pow(2, 50),
    ];
    // Rounding with precision.
    // @ts-ignore: error TS7006: Parameter 'decimals' implicitly has an 'any'
    // type.
    const round = (value, decimals) => {
        const scale = Math.pow(10, decimals);
        return Math.round(value * scale) / scale;
    };
    // @ts-ignore: error TS7006: Parameter 'u' implicitly has an 'any' type.
    const str = (n, u) => {
        return strf(u, n.toLocaleString());
    };
    // @ts-ignore: error TS7006: Parameter 'u' implicitly has an 'any' type.
    const fmt = (s, u) => {
        const rounded = round(bytes / s, 1 + addedPrecision);
        return str(rounded, u);
    };
    // Less than 1KB is displayed like '80 bytes'.
    // @ts-ignore: error TS2532: Object is possibly 'undefined'.
    if (bytes < STEPS[1]) {
        return str(bytes, UNITS[0]);
    }
    // Up to 1MB is displayed as rounded up number of KBs, or with the desired
    // number of precision digits.
    // @ts-ignore: error TS2532: Object is possibly 'undefined'.
    if (bytes < STEPS[2]) {
        const rounded = addedPrecision ?
            // @ts-ignore: error TS2532: Object is possibly 'undefined'.
            round(bytes / STEPS[1], addedPrecision) :
            // @ts-ignore: error TS2532: Object is possibly 'undefined'.
            Math.ceil(bytes / STEPS[1]);
        return str(rounded, UNITS[1]);
    }
    // This loop index is used outside the loop if it turns out |bytes|
    // requires the largest unit.
    let i;
    for (i = 2 /* MB */; i < UNITS.length - 1; i++) {
        // @ts-ignore: error TS2532: Object is possibly 'undefined'.
        if (bytes < STEPS[i + 1]) {
            return fmt(STEPS[i], UNITS[i]);
        }
    }
    return fmt(STEPS[i], UNITS[i]);
};
/**
 * Extracts path from filesystem: URL.
 * @param {?string=} url Filesystem URL.
 * @return {?string} The path if it can be parsed, null if it cannot.
 */
util.extractFilePath = url => {
    const match = /^filesystem:[\w-]*:\/\/[\w-]*\/(external|persistent|temporary)(\/.*)$/
        .exec(url || '');
    const path = match && match[2];
    if (!path) {
        return null;
    }
    return decodeURIComponent(path);
};
/**
 * Returns a translated string.
 *
 * Wrapper function to make dealing with translated strings more concise.
 * Equivalent to loadTimeData.getString(id).
 *
 * @param {string} id The id of the string to return.
 * @return {string} The translated string.
 */
function str(id) {
    try {
        return loadTimeData.getString(id);
    }
    catch (e) {
        console.warn('Failed to get string for', id);
        return id;
    }
}
/**
 * Returns a translated string with arguments replaced.
 *
 * Wrapper function to make dealing with translated strings more concise.
 * Equivalent to loadTimeData.getStringF(id, ...).
 *
 * @param {string} id The id of the string to return.
 * @param {...*} var_args The values to replace into the string.
 * @return {string} The translated string with replaced values.
 */
// @ts-ignore: error TS6133: 'var_args' is declared but its value is never read.
function strf(id, var_args) {
    // @ts-ignore: error TS2345: Argument of type 'IArguments' is not assignable
    // to parameter of type '[id: string, ...args: (string | number)[]]'.
    return loadTimeData.getStringF.apply(loadTimeData, arguments);
}
// Export strf() into the util namespace.
util.strf = strf;
/**
 * @return {boolean} True if the Files app is running as an open files or a
 *     select folder dialog. False otherwise.
 */
util.runningInBrowser = () => {
    // @ts-ignore: error TS2339: Property 'appID' does not exist on type 'Window &
    // typeof globalThis'.
    return !window.appID;
};
/**
 * The type of a file operation.
 * @enum {string}
 * @const
 */
util.FileOperationType = {
    COPY: 'COPY',
    DELETE: 'DELETE',
    MOVE: 'MOVE',
    RESTORE: 'RESTORE',
    RESTORE_TO_DESTINATION: 'RESTORE_TO_DESTINATION',
    ZIP: 'ZIP',
};
Object.freeze(util.FileOperationType);
/**
 * The type of a file operation error.
 * @enum {number}
 * @const
 */
util.FileOperationErrorType = {
    UNEXPECTED_SOURCE_FILE: 0,
    TARGET_EXISTS: 1,
    FILESYSTEM_ERROR: 2,
};
Object.freeze(util.FileOperationErrorType);
/**
 * Collator for sorting.
 * @type {Intl.Collator}
 */
util.collator =
    new Intl.Collator([], { usage: 'sort', numeric: true, sensitivity: 'base' });
/**
 * The last URL with visitURL().
 * @private @type {string}
 */
// @ts-ignore: error TS7034: Variable 'lastVisitedURL' implicitly has type 'any'
// in some locations where its type cannot be determined.
let lastVisitedURL;
/**
 * Visit the URL.
 *
 * If the browser is opening, the url is opened in a new tab, otherwise the url
 * is opened in a new window.
 *
 * @param {!string} url URL to visit.
 */
util.visitURL = url => {
    lastVisitedURL = url;
    // openURL opens URLs in the primary browser (ash vs lacros) as opposed to
    // window.open which always opens URLs in ash-chrome.
    chrome.fileManagerPrivate.openURL(url);
};
/**
 * Return the last URL visited with visitURL().
 *
 * @return {string} The last URL visited.
 */
util.getLastVisitedURL = () => {
    // @ts-ignore: error TS7005: Variable 'lastVisitedURL' implicitly has an 'any'
    // type.
    return lastVisitedURL;
};
/**
 * Returns normalized current locale, or default locale - 'en'.
 * @return {string} Current locale
 */
util.getCurrentLocaleOrDefault = () => {
    const locale = str('UI_LOCALE') || 'en';
    return locale.replace(/_/g, '-');
};
/**
 * Returns whether the window is teleported or not.
 * @param {Window} window Window.
 * @return {Promise<boolean>} Whether the window is teleported or not.
 */
util.isTeleported = window => {
    return new Promise(onFulfilled => {
        // @ts-ignore: error TS2339: Property 'chrome' does not exist on type
        // 'Window'.
        window.chrome.fileManagerPrivate.getProfiles(
        // @ts-ignore: error TS7006: Parameter 'displayedId' implicitly has an
        // 'any' type.
        (profiles, currentId, displayedId) => {
            onFulfilled(currentId !== displayedId);
        });
    });
};
/**
 * Runs chrome.test.sendMessage in test environment. Does nothing if running
 * in production environment.
 *
 * @param {string} message Test message to send.
 */
util.testSendMessage = message => {
    // @ts-ignore: error TS2339: Property 'chrome' does not exist on type
    // 'Window'.
    const test = chrome.test || window.top.chrome.test;
    if (test) {
        test.sendMessage(message);
    }
};
/**
 * Extracts the extension of the path.
 *
 * Examples:
 * util.splitExtension('abc.ext') -> ['abc', '.ext']
 * util.splitExtension('a/b/abc.ext') -> ['a/b/abc', '.ext']
 * util.splitExtension('a/b') -> ['a/b', '']
 * util.splitExtension('.cshrc') -> ['', '.cshrc']
 * util.splitExtension('a/b.backup/hoge') -> ['a/b.backup/hoge', '']
 *
 * @param {string} path Path to be extracted.
 * @return {Array<string>} Filename and extension of the given path.
 */
util.splitExtension = path => {
    let dotPosition = path.lastIndexOf('.');
    if (dotPosition <= path.lastIndexOf('/')) {
        dotPosition = -1;
    }
    const filename = dotPosition != -1 ? path.substr(0, dotPosition) : path;
    const extension = dotPosition != -1 ? path.substr(dotPosition) : '';
    return [filename, extension];
};
/**
 * Returns the localized name of the root type.
 * @param {!EntryLocation} locationInfo Location info.
 * @return {string} The localized name.
 */
util.getRootTypeLabel = locationInfo => {
    switch (locationInfo.rootType) {
        case VolumeManagerCommon.RootType.DOWNLOADS:
            return locationInfo.volumeInfo.label;
        case VolumeManagerCommon.RootType.DRIVE:
            return str('DRIVE_MY_DRIVE_LABEL');
        case VolumeManagerCommon.RootType.SHARED_DRIVE:
        // |locationInfo| points to either the root directory of an individual Team
        // Drive or sub-directory under it, but not the Shared Drives grand
        // directory. Every Shared Drive and its sub-directories always have
        // individual names (locationInfo.hasFixedLabel is false). So
        // getRootTypeLabel() is used by PathComponent.computeComponentsFromEntry()
        // to display the ancestor name in the breadcrumb like this:
        //   Shared Drives > ABC Shared Drive > Folder1
        //   ^^^^^^^^^^^
        // By this reason, we return the label of the Shared Drives grand root here.
        case VolumeManagerCommon.RootType.SHARED_DRIVES_GRAND_ROOT:
            return str('DRIVE_SHARED_DRIVES_LABEL');
        case VolumeManagerCommon.RootType.COMPUTER:
        case VolumeManagerCommon.RootType.COMPUTERS_GRAND_ROOT:
            return str('DRIVE_COMPUTERS_LABEL');
        case VolumeManagerCommon.RootType.DRIVE_OFFLINE:
            return str('DRIVE_OFFLINE_COLLECTION_LABEL');
        case VolumeManagerCommon.RootType.DRIVE_SHARED_WITH_ME:
            return str('DRIVE_SHARED_WITH_ME_COLLECTION_LABEL');
        case VolumeManagerCommon.RootType.DRIVE_RECENT:
            return str('DRIVE_RECENT_COLLECTION_LABEL');
        case VolumeManagerCommon.RootType.DRIVE_FAKE_ROOT:
            return str('DRIVE_DIRECTORY_LABEL');
        case VolumeManagerCommon.RootType.RECENT:
            return str('RECENT_ROOT_LABEL');
        case VolumeManagerCommon.RootType.CROSTINI:
            return str('LINUX_FILES_ROOT_LABEL');
        case VolumeManagerCommon.RootType.MY_FILES:
            return str('MY_FILES_ROOT_LABEL');
        case VolumeManagerCommon.RootType.TRASH:
            return str('TRASH_ROOT_LABEL');
        case VolumeManagerCommon.RootType.MEDIA_VIEW:
            const mediaViewRootType = VolumeManagerCommon.getMediaViewRootTypeFromVolumeId(locationInfo.volumeInfo.volumeId);
            switch (mediaViewRootType) {
                case VolumeManagerCommon.MediaViewRootType.IMAGES:
                    return str('MEDIA_VIEW_IMAGES_ROOT_LABEL');
                case VolumeManagerCommon.MediaViewRootType.VIDEOS:
                    return str('MEDIA_VIEW_VIDEOS_ROOT_LABEL');
                case VolumeManagerCommon.MediaViewRootType.AUDIO:
                    return str('MEDIA_VIEW_AUDIO_ROOT_LABEL');
                case VolumeManagerCommon.MediaViewRootType.DOCUMENTS:
                    return str('MEDIA_VIEW_DOCUMENTS_ROOT_LABEL');
            }
            console.error('Unsupported media view root type: ' + mediaViewRootType);
            return locationInfo.volumeInfo.label;
        case VolumeManagerCommon.RootType.ARCHIVE:
        case VolumeManagerCommon.RootType.REMOVABLE:
        case VolumeManagerCommon.RootType.MTP:
        case VolumeManagerCommon.RootType.PROVIDED:
        case VolumeManagerCommon.RootType.ANDROID_FILES:
        case VolumeManagerCommon.RootType.DOCUMENTS_PROVIDER:
        case VolumeManagerCommon.RootType.SMB:
        case VolumeManagerCommon.RootType.GUEST_OS:
            return locationInfo.volumeInfo.label;
        default:
            console.error('Unsupported root type: ' + locationInfo.rootType);
            return locationInfo.volumeInfo.label;
    }
};
/**
 * Returns the localized/i18n name of the entry.
 *
 * @param {?EntryLocation} locationInfo
 * @param {!Entry|!FilesAppEntry} entry The entry to be retrieve the name of.
 * @return {string} The localized name.
 */
util.getEntryLabel = (locationInfo, entry) => {
    if (locationInfo) {
        if (locationInfo.hasFixedLabel) {
            return util.getRootTypeLabel(locationInfo);
        }
        if (entry.filesystem && entry.filesystem.root === entry) {
            return util.getRootTypeLabel(locationInfo);
        }
    }
    // Special case for MyFiles/Downloads, MyFiles/PvmDefault and MyFiles/Camera.
    if (locationInfo &&
        locationInfo.rootType == VolumeManagerCommon.RootType.DOWNLOADS) {
        if (entry.fullPath == '/Downloads') {
            return str('DOWNLOADS_DIRECTORY_LABEL');
        }
        if (entry.fullPath == '/PvmDefault') {
            return str('PLUGIN_VM_DIRECTORY_LABEL');
        }
        if (entry.fullPath == '/Camera') {
            return str('CAMERA_DIRECTORY_LABEL');
        }
    }
    return entry.name;
};
/**
 * Checks if an API call returned an error, and if yes then prints it.
 */
util.checkAPIError = () => {
    if (chrome.runtime.lastError) {
        console.warn(chrome.runtime.lastError.message);
    }
};
/**
 * Makes a promise which will be fulfilled |ms| milliseconds later.
 * @param {number} ms The delay in milliseconds.
 * @return {!Promise<void>}
 */
// @ts-ignore: error TS2314: Generic type 'Promise<T>' requires 1 type
// argument(s).
util.delay = ms => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
};
/**
 * Makes a promise which will be rejected if the given |promise| is not resolved
 * or rejected for |ms| milliseconds.
 * @param {!Promise<*>} promise A promise which needs to be timed out.
 * @param {number} ms Delay for the timeout in milliseconds.
 * @param {string=} opt_message Error message for the timeout.
// @ts-ignore: error TS2314: Generic type 'Promise<T>' requires 1 type
argument(s).
 * @return {!Promise<*>} A promise which can be rejected by timeout.
 */
util.timeoutPromise = (promise, ms, opt_message) => {
    return Promise.race([
        // @ts-ignore: error TS2314: Generic type 'Promise<T>' requires 1 type
        // argument(s).
        promise,
        util.delay(ms).then(() => {
            throw new Error(opt_message || 'Operation timed out.');
        }),
    ]);
};
/**
 * Executes a functions only when the context is not the incognito one in a
 * regular session. Returns a promise that when fulfilled informs us whether or
 * not the callback was invoked.
 * @param {function():void} callback
 * @return {!Promise<boolean>}
 */
util.doIfPrimaryContext = async (callback) => {
    const guestMode = await util.isInGuestMode();
    if (guestMode) {
        callback();
        return true;
    }
    return false;
};
/**
 * Returns the Files app modal dialog used to embed any files app dialog
 * that derives from cr.ui.dialogs.
 *
 * @return {!HTMLDialogElement}
 */
util.getFilesAppModalDialogInstance = () => {
    let dialogElement = document.querySelector('#files-app-modal-dialog');
    if (!dialogElement) { // Lazily create the files app dialog instance.
        dialogElement = document.createElement('dialog');
        dialogElement.id = 'files-app-modal-dialog';
        document.body.appendChild(dialogElement);
    }
    return /** @type {!HTMLDialogElement} */ (dialogElement);
};
/**
 *
 * @param {!chrome.fileManagerPrivate.FileTaskDescriptor} left
 * @param {!chrome.fileManagerPrivate.FileTaskDescriptor} right
 * @returns {boolean}
 */
util.descriptorEqual = function (left, right) {
    return left.appId === right.appId && left.taskType === right.taskType &&
        left.actionId === right.actionId;
};
/**
 * Create a taskID which is a string unique-ID for a task. This is temporary
 * and will be removed once we use task.descriptor everywhere instead.
 * @param {!chrome.fileManagerPrivate.FileTaskDescriptor} descriptor
 * @returns {string}
 */
util.makeTaskID = function ({ appId, taskType, actionId }) {
    return `${appId}|${taskType}|${actionId}`;
};
/**
 * Returns a new promise which, when fulfilled carries a boolean indicating
 * whether the app is in the guest mode. Typical use:
 *
 * util.isInGuestMode().then(
 *     (guest) => { if (guest) { ... in guest mode } }
 * );
 * @return {Promise<boolean>}
 */
util.isInGuestMode = async () => {
    const profiles = await promisify(chrome.fileManagerPrivate.getProfiles);
    return profiles.length > 0 && profiles[0].profileId === '$guest';
};
/**
 * Get the locale based week start from the load time data.
 * @returns {number}
 */
util.getLocaleBasedWeekStart = () => {
    return loadTimeData.valueExists('WEEK_START_FROM') ?
        loadTimeData.getInteger('WEEK_START_FROM') :
        0;
};
/**
 * Returns whether the given value is null or undefined.
 * @param {*} value
 * @returns {boolean}
 */
util.isNullOrUndefined = (value) => value === null || value === undefined;
/**
 * Bulk pinning should only show visible UI elements when in progress or
 * continuing to sync.
 * @param {chrome.fileManagerPrivate.BulkPinStage|undefined} stage
 * @param {boolean|undefined} pref
 * @returns {boolean}
 */
util.canBulkPinningCloudPanelShow = (stage, pref) => {
    if (!isDriveFsBulkPinningEnabled()) {
        return false;
    }
    const BulkPinStage = chrome.fileManagerPrivate.BulkPinStage;
    // If the stage is in progress and the bulk pinning preference is enabled,
    // then the cloud panel should not be visible.
    if (pref &&
        (stage === BulkPinStage.GETTING_FREE_SPACE ||
            stage === BulkPinStage.LISTING_FILES ||
            stage === BulkPinStage.SYNCING)) {
        return true;
    }
    // For the PAUSED... states the preference should still be enabled, however,
    // for the latter the preference will have been disabled.
    if ((stage === BulkPinStage.PAUSED_OFFLINE && pref) ||
        (stage === BulkPinStage.PAUSED_BATTERY_SAVER && pref) ||
        stage === BulkPinStage.NOT_ENOUGH_SPACE) {
        return true;
    }
    return false;
};
/**
 * Converts seconds into a time remaining string.
 * @param {number} seconds
 * @returns {string}
 */
util.secondsToRemainingTimeString = (seconds) => {
    const locale = util.getCurrentLocaleOrDefault();
    let minutes = Math.ceil(seconds / 60);
    if (minutes <= 1) {
        // Less than one minute. Display remaining time in seconds.
        const formatter = new Intl.NumberFormat(locale, { style: 'unit', unit: 'second', unitDisplay: 'long' });
        return strf('TIME_REMAINING_ESTIMATE', formatter.format(Math.ceil(seconds)));
    }
    const minuteFormatter = new Intl.NumberFormat(locale, { style: 'unit', unit: 'minute', unitDisplay: 'long' });
    const hours = Math.floor(minutes / 60);
    if (hours == 0) {
        // Less than one hour. Display remaining time in minutes.
        return strf('TIME_REMAINING_ESTIMATE', minuteFormatter.format(minutes));
    }
    minutes -= hours * 60;
    const hourFormatter = new Intl.NumberFormat(locale, { style: 'unit', unit: 'hour', unitDisplay: 'long' });
    if (minutes == 0) {
        // Hours but no minutes.
        return strf('TIME_REMAINING_ESTIMATE', hourFormatter.format(hours));
    }
    // Hours and minutes.
    return strf('TIME_REMAINING_ESTIMATE_2', hourFormatter.format(hours), minuteFormatter.format(minutes));
};

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Namespace for test related things.
 */
window.test = window.test || {};
const test = window.test;
/**
 * Namespace for test utility functions.
 *
 * Public functions in the test.util.sync and the test.util.async namespaces are
 * published to test cases and can be called by using callRemoteTestUtil. The
 * arguments are serialized as JSON internally. If application ID is passed to
 * callRemoteTestUtil, the content window of the application is added as the
 * first argument. The functions in the test.util.async namespace are passed the
 * callback function as the last argument.
 */
test.util = {};
/**
 * Namespace for synchronous utility functions.
 */
test.util.sync = {};
/**
 * Namespace for asynchronous utility functions.
 */
test.util.async = {};

// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Sanitizes the formatted date. Replaces unusual space with normal space.
 * @param {string} strDate the date already in the string format.
 * @return {string}
 */
function sanitizeDate(strDate) {
    return strDate.replace('\u202f', ' ');
}
/**
 * Returns details about each file shown in the file list: name, size, type and
 * modification time.
 *
 * Since FilesApp normally has a fixed display size in test, and also since the
 * #detail-table recycles its file row elements, this call only returns details
 * about the visible file rows (11 rows normally, see crbug.com/850834).
 *
 * @param {Window} contentWindow Window to be tested.
 * @return {Array<Array<string>>} Details for each visible file row.
 */
// @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
// util'.
test.util.sync.getFileList = contentWindow => {
    const table = contentWindow.document.querySelector('#detail-table');
    // @ts-ignore: error TS18047: 'table' is possibly 'null'.
    const rows = table.querySelectorAll('li');
    const fileList = [];
    for (let j = 0; j < rows.length; ++j) {
        const row = rows[j];
        fileList.push([
            // @ts-ignore: error TS2531: Object is possibly 'null'.
            row.querySelector('.filename-label').textContent,
            // @ts-ignore: error TS2531: Object is possibly 'null'.
            row.querySelector('.size').textContent,
            // @ts-ignore: error TS2531: Object is possibly 'null'.
            row.querySelector('.type').textContent,
            // @ts-ignore: error TS2531: Object is possibly 'null'.
            sanitizeDate(row.querySelector('.date').textContent || ''),
        ]);
    }
    // @ts-ignore: error TS2322: Type '(string | null)[][]' is not assignable to
    // type 'string[][]'.
    return fileList;
};
/**
 * Returns the name of the files currently selected in the file list. Note the
 * routine has the same 'visible files' limitation as getFileList() above.
 *
 * @param {Window} contentWindow Window to be tested.
 * @return {Array<string>} Selected file names.
 */
// @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
// util'.
test.util.sync.getSelectedFiles = contentWindow => {
    const table = contentWindow.document.querySelector('#detail-table');
    // @ts-ignore: error TS18047: 'table' is possibly 'null'.
    const rows = table.querySelectorAll('li');
    const selected = [];
    for (let i = 0; i < rows.length; ++i) {
        // @ts-ignore: error TS2532: Object is possibly 'undefined'.
        if (rows[i].hasAttribute('selected')) {
            // @ts-ignore: error TS2531: Object is possibly 'null'.
            selected.push(rows[i].querySelector('.filename-label').textContent);
        }
    }
    // @ts-ignore: error TS2322: Type '(string | null)[]' is not assignable to
    // type 'string[]'.
    return selected;
};
/**
 * Fakes pressing the down arrow until the given |filename| is selected.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string} filename Name of the file to be selected.
 * @return {boolean} True if file got selected, false otherwise.
 */
// @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
// util'.
test.util.sync.selectFile = (contentWindow, filename) => {
    const rows = contentWindow.document.querySelectorAll('#detail-table li');
    // @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
    // util'.
    test.util.sync.focus(contentWindow, '#file-list');
    // @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
    // util'.
    test.util.sync.fakeKeyDown(contentWindow, '#file-list', 'Home', false, false, false);
    for (let index = 0; index < rows.length; ++index) {
        // @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
        // util'.
        const selection = test.util.sync.getSelectedFiles(contentWindow);
        if (selection.length === 1 && selection[0] === filename) {
            return true;
        }
        // @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
        // util'.
        test.util.sync.fakeKeyDown(contentWindow, '#file-list', 'ArrowDown', false, false, false);
    }
    console.warn('Failed to select file "' + filename + '"');
    return false;
};
/**
 * Open the file by selectFile and fakeMouseDoubleClick.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string} filename Name of the file to be opened.
 * @return {boolean} True if file got selected and a double click message is
 *     sent, false otherwise.
 */
// @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
// util'.
test.util.sync.openFile = (contentWindow, filename) => {
    const query = '#file-list li.table-row[selected] .filename-label span';
    // @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
    // util'.
    return test.util.sync.selectFile(contentWindow, filename) &&
        // @ts-ignore: error TS2339: Property 'sync' does not exist on type
        // 'typeof util'.
        test.util.sync.fakeMouseDoubleClick(contentWindow, query);
};
/**
 * Returns the last URL visited with visitURL() (e.g. for "Manage in Drive").
 *
 * @param {Window} contentWindow The window where visitURL() was called.
 * @return {!string} The URL of the last URL visited.
 */
// @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
// util'.
test.util.sync.getLastVisitedURL = contentWindow => {
    // @ts-ignore: error TS2339: Property 'getLastVisitedURL' does not exist on
    // type 'FileManager'.
    return contentWindow.fileManager.getLastVisitedURL();
};
/**
 * Returns a string translation from its translation ID.
 * @param {string} id The id of the translated string.
 * @return {string}
 */
// @ts-ignore: error TS7006: Parameter 'contentWindow' implicitly has an 'any'
// type.
test.util.sync.getTranslatedString = (contentWindow, id) => {
    return contentWindow.fileManager.getTranslatedString(id);
};
/**
 * Executes Javascript code on a webview and returns the result.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string} webViewQuery Selector for the web view.
 * @param {string} code Javascript code to be executed within the web view.
 * @param {function(*):void} callback Callback function with results returned by
the
 *     script.
// @ts-ignore: error TS7014: Function type, which lacks return-type annotation,
implicitly has an 'any' return type.
 */
// @ts-ignore: error TS2339: Property 'async' does not exist on type 'typeof
// util'.
test.util.async.executeScriptInWebView =
    (contentWindow, webViewQuery, code, callback) => {
        const webView = contentWindow.document.querySelector(webViewQuery);
        // @ts-ignore: error TS2339: Property 'executeScript' does not exist on
        // type 'Element'.
        webView.executeScript({ code: code }, callback);
    };
/**
 * Selects |filename| and fakes pressing Ctrl+C, Ctrl+V (copy, paste).
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string} filename Name of the file to be copied.
 * @return {boolean} True if copying got simulated successfully. It does not
 *     say if the file got copied, or not.
 */
// @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
// util'.
test.util.sync.copyFile = (contentWindow, filename) => {
    // @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
    // util'.
    if (!test.util.sync.selectFile(contentWindow, filename)) {
        return false;
    }
    // Ctrl+C and Ctrl+V
    // @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
    // util'.
    test.util.sync.fakeKeyDown(contentWindow, '#file-list', 'c', true, false, false);
    // @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
    // util'.
    test.util.sync.fakeKeyDown(contentWindow, '#file-list', 'v', true, false, false);
    return true;
};
/**
 * Selects |filename| and fakes pressing the Delete key.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string} filename Name of the file to be deleted.
 * @return {boolean} True if deleting got simulated successfully. It does not
 *     say if the file got deleted, or not.
 */
// @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
// util'.
test.util.sync.deleteFile = (contentWindow, filename) => {
    // @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
    // util'.
    if (!test.util.sync.selectFile(contentWindow, filename)) {
        return false;
    }
    // Delete
    // @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
    // util'.
    test.util.sync.fakeKeyDown(contentWindow, '#file-list', 'Delete', false, false, false);
    return true;
};
/**
 * Execute a command on the document in the specified window.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string} command Command name.
 * @return {boolean} True if the command is executed successfully.
 */
// @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
// util'.
test.util.sync.execCommand = (contentWindow, command) => {
    const ret = contentWindow.document.execCommand(command);
    if (!ret) {
        // TODO(b/191831968): Fix execCommand for SWA.
        console.warn(`execCommand(${command}) returned false for SWA, forcing ` +
            `return value to true. b/191831968`);
        return true;
    }
    return ret;
};
/**
 * Override the task-related methods in private api for test.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {Array<Object>} taskList List of tasks to be returned in
 *     fileManagerPrivate.getFileTasks().
 * @param {boolean}
 *     isPolicyDefault Whether the default is set by policy.
 * @return {boolean} Always return true.
 */
// @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
// util'.
test.util.sync
    .overrideTasks = (contentWindow, taskList, isPolicyDefault = false) => {
    // @ts-ignore: error TS7006: Parameter 'onTasks' implicitly has an 'any' type.
    const getFileTasks = (entries, sourceUrls, onTasks) => {
        // Call onTask asynchronously (same with original getFileTasks).
        setTimeout(() => {
            const policyDefaultHandlerStatus = isPolicyDefault ?
                chrome.fileManagerPrivate.PolicyDefaultHandlerStatus
                    .DEFAULT_HANDLER_ASSIGNED_BY_POLICY :
                undefined;
            onTasks({ tasks: taskList, policyDefaultHandlerStatus });
        }, 0);
    };
    // @ts-ignore: error TS7006: Parameter 'callback' implicitly has an 'any'
    // type.
    const executeTask = (descriptor, entries, callback) => {
        // @ts-ignore: error TS2339: Property 'executedTasks_' does not exist on
        // type 'typeof util'.
        test.util.executedTasks_.push({ descriptor, entries, callback });
    };
    // @ts-ignore: error TS7006: Parameter 'descriptor' implicitly has an 'any'
    // type.
    const setDefaultTask = descriptor => {
        for (let i = 0; i < taskList.length; i++) {
            // @ts-ignore: error TS2339: Property 'isDefault' does not exist on type
            // 'Object'.
            taskList[i].isDefault =
                // @ts-ignore: error TS2339: Property 'descriptor' does not exist on
                // type 'Object'.
                util.descriptorEqual(taskList[i].descriptor, descriptor);
        }
    };
    // @ts-ignore: error TS2339: Property 'executedTasks_' does not exist on type
    // 'typeof util'.
    test.util.executedTasks_ = [];
    // @ts-ignore: error TS2339: Property 'chrome' does not exist on type
    // 'Window'.
    contentWindow.chrome.fileManagerPrivate.getFileTasks = getFileTasks;
    // @ts-ignore: error TS2339: Property 'chrome' does not exist on type
    // 'Window'.
    contentWindow.chrome.fileManagerPrivate.executeTask = executeTask;
    // @ts-ignore: error TS2339: Property 'chrome' does not exist on type
    // 'Window'.
    contentWindow.chrome.fileManagerPrivate.setDefaultTask = setDefaultTask;
    return true;
};
/**
 * Obtains the list of executed tasks.
 * @param {Window} contentWindow Window to be tested.
// @ts-ignore: error TS1131: Property or signature expected.
 * @return {Array<!{descriptor: chrome.fileManagerPrivate.FileTaskDescriptor,
 *     fileNames: !Array<string>}>} List of executed tasks.
// @ts-ignore: error TS1131: Property or signature expected.
 */
// @ts-ignore: error TS6133: 'contentWindow' is declared but its value is never
// read.
test.util.sync.getExecutedTasks = contentWindow => {
    // @ts-ignore: error TS2339: Property 'executedTasks_' does not exist on type
    // 'typeof util'.
    if (!test.util.executedTasks_) {
        console.error('Please call overrideTasks() first.');
        // @ts-ignore: error TS2322: Type 'null' is not assignable to type '{}[]'.
        return null;
    }
    // @ts-ignore: error TS7006: Parameter 'task' implicitly has an 'any' type.
    return test.util.executedTasks_.map(task => {
        return {
            descriptor: task.descriptor,
            // @ts-ignore: error TS7006: Parameter 'e' implicitly has an 'any' type.
            fileNames: task.entries.map(e => e.name),
        };
    });
};
/**
 * Obtains the list of executed tasks.
 * @param {Window} contentWindow Window to be tested.
 * @param {!chrome.fileManagerPrivate.FileTaskDescriptor} descriptor the task to
 *     check.
 * @param {!Array<string>} fileNames Name of files that should have been passed
 *     to the executeTasks().
 * @return {boolean} True if the task was executed.
 */
// @ts-ignore: error TS6133: 'contentWindow' is declared but its value is never
// read.
test.util.sync.taskWasExecuted = (contentWindow, descriptor, fileNames) => {
    // @ts-ignore: error TS2339: Property 'executedTasks_' does not exist on type
    // 'typeof util'.
    if (!test.util.executedTasks_) {
        console.error('Please call overrideTasks() first.');
        // @ts-ignore: error TS2322: Type 'null' is not assignable to type
        // 'boolean'.
        return null;
    }
    const fileNamesStr = JSON.stringify(fileNames);
    // @ts-ignore: error TS2339: Property 'executedTasks_' does not exist on type
    // 'typeof util'.
    const task = test.util.executedTasks_.find(
    // @ts-ignore: error TS7006: Parameter 'task' implicitly has an 'any'
    // type.
    task => util.descriptorEqual(task.descriptor, descriptor) &&
        // @ts-ignore: error TS7006: Parameter 'e' implicitly has an 'any'
        // type.
        fileNamesStr === JSON.stringify(task.entries.map(e => e.name)));
    return task !== undefined;
};
/**
 * Invokes an executed task with |responseArgs|.
 * @param {Window} contentWindow Window to be tested.
 * @param {!chrome.fileManagerPrivate.FileTaskDescriptor} descriptor the task to
 *     be replied to.
 * @param {Array<Object>} responseArgs the arguments to inoke the callback with.
 */
// @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
// util'.
test.util.sync.replyExecutedTask =
    // @ts-ignore: error TS6133: 'contentWindow' is declared but its value is
    // never read.
    (contentWindow, descriptor, responseArgs) => {
        // @ts-ignore: error TS2339: Property 'executedTasks_' does not exist on
        // type 'typeof util'.
        if (!test.util.executedTasks_) {
            console.error('Please call overrideTasks() first.');
            return false;
        }
        // @ts-ignore: error TS2339: Property 'executedTasks_' does not exist on
        // type 'typeof util'.
        const found = test.util.executedTasks_.find(
        // @ts-ignore: error TS7006: Parameter 'task' implicitly has an 'any'
        // type.
        task => util.descriptorEqual(task.descriptor, descriptor));
        if (!found) {
            const { appId, taskType, actionId } = descriptor;
            console.error(`No task with id ${appId}|${taskType}|${actionId}`);
            return false;
        }
        found.callback(...responseArgs);
        return true;
    };
/**
 * Calls the unload handler for the window.
 * @param {Window} contentWindow Window to be tested.
 */
// @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
// util'.
test.util.sync.unload = contentWindow => {
    // @ts-ignore: error TS2339: Property 'onUnload_' does not exist on type
    // 'FileManager'.
    contentWindow.fileManager.onUnload_();
};
/**
 * Returns the path shown in the breadcrumb.
 *
 * @param {Window} contentWindow Window to be tested.
 * @return {string} The breadcrumb path.
 */
// @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
// util'.
test.util.sync.getBreadcrumbPath = contentWindow => {
    const doc = contentWindow.document;
    const breadcrumb = doc.querySelector('#location-breadcrumbs xf-breadcrumb');
    if (!breadcrumb) {
        return '';
    }
    // @ts-ignore: error TS2339: Property 'path' does not exist on type 'Element'.
    return '/' + breadcrumb.path;
};
/**
 * Obtains the preferences.
 * @param {function(Object):void} callback Callback function with results
 *     returned by the script.
 */
// @ts-ignore: error TS2339: Property 'async' does not exist on type 'typeof
// util'.
test.util.async.getPreferences = callback => {
    chrome.fileManagerPrivate.getPreferences(callback);
};
/**
 * Stubs out the formatVolume() function in fileManagerPrivate.
 *
 * @param {Window} contentWindow Window to be affected.
 */
// @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
// util'.
test.util.sync.overrideFormat = contentWindow => {
    // @ts-ignore: error TS2339: Property 'chrome' does not exist on type
    // 'Window'.
    contentWindow.chrome.fileManagerPrivate.formatVolume =
        // @ts-ignore: error TS7006: Parameter 'volumeLabel' implicitly has an
        // 'any' type.
        (volumeId, filesystem, volumeLabel) => { };
    return true;
};
/**
 * Run a contentWindow.requestAnimationFrame() cycle and resolve the callback
 * when that requestAnimationFrame completes.
 * @param {Window} contentWindow Window to be tested.
 * @param {function(boolean):void} callback Completion callback.
 */
// @ts-ignore: error TS2339: Property 'async' does not exist on type 'typeof
// util'.
test.util.async.requestAnimationFrame = (contentWindow, callback) => {
    // @ts-ignore: error TS7014: Function type, which lacks return-type
    // annotation, implicitly has an 'any' return type.
    contentWindow.requestAnimationFrame(() => {
        callback(true);
    });
};
/**
 * Set the window text direction to RTL and wait for the window to redraw.
 * @param {Window} contentWindow Window to be tested.
 * @param {function(boolean):void} callback Completion callback.
 */
// @ts-ignore: error TS2339: Property 'async' does not exist on type 'typeof
// util'.
test.util.async.renderWindowTextDirectionRTL = (contentWindow, callback) => {
    contentWindow.document.documentElement.setAttribute('dir', 'rtl');
    // @ts-ignore: error TS7014: Function type, which lacks return-type
    // annotation, implicitly has an 'any' return type.
    contentWindow.document.body.setAttribute('dir', 'rtl');
    contentWindow.requestAnimationFrame(() => {
        callback(true);
    });
};
/**
 * Maps the path to the replaced attribute to the PrepareFake instance that
 * replaced it, to be able to restore the original value.
 *
 * @private @type {Record<string, PrepareFake>}
 */
// @ts-ignore: error TS2339: Property 'backgroundReplacedObjects_' does not
// exist on type 'typeof util'.
test.util.backgroundReplacedObjects_ = {};
/**
 * Map the appId to a map of all fakes applied in the foreground window e.g.:
 *  {'files#0': {'chrome.bla.api': FAKE}
 *
 * @private @type {Record<string, Object<string, PrepareFake>>}
 */
// @ts-ignore: error TS2339: Property 'foregroundReplacedObjects_' does not
// exist on type 'typeof util'.
test.util.foregroundReplacedObjects_ = {};
/**
 * @param {string} attrName
 * @param {*} staticValue
 * @return {function(...*)}
 */
// @ts-ignore: error TS2339: Property 'staticFakeFactory' does not exist on type
// 'typeof util'.
test.util.staticFakeFactory = (attrName, staticValue) => {
    // @ts-ignore: error TS7019: Rest parameter 'args' implicitly has an 'any[]'
    // type.
    const fake = (...args) => {
        // @ts-ignore: error TS1110: Type expected.
        setTimeout(() => {
            // Find the first callback.
            for (const arg of args) {
                if (typeof arg === 'function') {
                    console.warn(`staticFake for ${attrName} value: ${staticValue}`);
                    return arg(staticValue);
                }
            }
            throw new Error(`Couldn't find callback for ${attrName}`);
        }, 0);
    };
    return fake;
};
/**
 * Registry of available fakes, it maps the an string ID to a factory function
 * which returns the actual fake used to replace an implementation.
 *
 * @private @type {Record<string, function(string, *):void>}
 */
// @ts-ignore: error TS2339: Property 'fakes_' does not exist on type 'typeof
// util'.
test.util.fakes_ = {
    // @ts-ignore: error TS2339: Property 'staticFakeFactory' does not exist on
    // type 'typeof util'.
    'static_fake': test.util.staticFakeFactory,
};
/**
 * @enum {string}
 */
test.util.FakeType = {
    FOREGROUND_FAKE: 'FOREGROUND_FAKE',
    BACKGROUND_FAKE: 'BACKGROUND_FAKE',
};
/**
 * Class holds the information for applying and restoring fakes.
 */
class PrepareFake {
    /**
     * @param {string} attrName Name of the attribute to be replaced by the fake
     *   e.g.: "chrome.app.window.create".
     * @param {string} fakeId The name of the fake to be used from
     *   test.util.fakes_.
     * @param {*} context The context where the attribute will be traversed from,
     *   e.g.: Window object.
     * @param {...*} args Additional args provided from the integration test to
     *     the
     *   fake, e.g.: static return value.
     */
    constructor(attrName, fakeId, context, ...args) {
        /**
         * The instance of the fake to be used, ready to be used.
         * @private @type {*}
         */
        this.fake_ = null;
        /**
         * The attribute name to be traversed in the |context_|.
         * @private @type {string}
         */
        this.attrName_ = attrName;
        /**
         * The fake id the key to retrieve from test.util.fakes_.
         * @private @type {string}
         */
        this.fakeId_ = fakeId;
        /**
         * The context where |attrName_| will be traversed from, e.g. Window.
         * @private @type {*}
         */
        this.context_ = context;
        /**
         * After traversing |context_| the object that holds the attribute to be
         * replaced by the fake.
         * @private @type {*}
         */
        this.parentObject_ = null;
        /**
         * After traversing |context_| the attribute name in |parentObject_| that
         * will be replaced by the fake.
         * @private @type {string}
         */
        this.leafAttrName_ = '';
        /**
         * Additional data provided from integration tests to the fake constructor.
         * @private @type {!Array<*>}
         */
        this.args_ = args;
        /**
         * Original object that was replaced by the fake.
         * @private @type {*}
         */
        this.original_ = null;
        /**
         * If this fake object has been constructed and everything initialized.
         * @private @type {boolean}
         */
        this.prepared_ = false;
        /**
         * Counter to record the number of times the static fake is called.
         * @private @type {number}
         */
        this.callCounter_ = 0;
        /**
         * List to record the arguments provided to the static fake calls.
         * @private @type {!Array<*>}
         */
        this.calledArgs_ = [];
    }
    /**
     * Initializes the fake and traverse |context_| to be ready to replace the
     * original implementation with the fake.
     */
    prepare() {
        this.buildFake_();
        this.traverseContext_();
        this.prepared_ = true;
    }
    /**
     * Replaces the original implementation with the fake.
     * NOTE: It requires prepare() to have been called.
     * @param {test.util.FakeType} fakeType Foreground or background fake.
     * @param {Window} contentWindow Window to be tested.
     */
    replace(fakeType, contentWindow) {
        const suffix = `for ${this.attrName_} ${this.fakeId_}`;
        if (!this.prepared_) {
            throw new Error(`PrepareFake prepare() not called ${suffix}`);
        }
        if (!this.parentObject_) {
            throw new Error(`Missing parentObject_ ${suffix}`);
        }
        if (!this.fake_) {
            throw new Error(`Missing fake_ ${suffix}`);
        }
        if (!this.leafAttrName_) {
            throw new Error(`Missing leafAttrName_ ${suffix}`);
        }
        this.saveOriginal_(fakeType, contentWindow);
        // @ts-ignore: error TS7019: Rest parameter 'args' implicitly has an 'any[]'
        // type.
        this.parentObject_[this.leafAttrName_] = (...args) => {
            this.fake_(...args);
            this.callCounter_++;
            this.calledArgs_.push([...args]);
        };
    }
    /**
     * Restores the original implementation that had been rpeviously replaced by
     * the fake.
     */
    restore() {
        if (!this.original_) {
            return;
        }
        this.parentObject_[this.leafAttrName_] = this.original_;
        this.original_ = null;
    }
    /**
     * Saves the original implementation to be able restore it later.
     * @param {test.util.FakeType} fakeType Foreground or background fake.
     * @param {Window} contentWindow Window to be tested.
     */
    saveOriginal_(fakeType, contentWindow) {
        // @ts-ignore: error TS2339: Property 'FOREGROUND_FAKE' does not exist on
        // type 'typeof FakeType'.
        if (fakeType === test.util.FakeType.FOREGROUND_FAKE) {
            const windowFakes = 
            // @ts-ignore: error TS2339: Property 'appID' does not exist on type
            // 'Window'.
            test.util.foregroundReplacedObjects_[contentWindow.appID] || {};
            // @ts-ignore: error TS2339: Property 'appID' does not exist on type
            // 'Window'.
            test.util.foregroundReplacedObjects_[contentWindow.appID] = windowFakes;
            // Only save once, otherwise it can save an object that is already fake.
            if (!windowFakes[this.attrName_]) {
                const original = this.parentObject_[this.leafAttrName_];
                this.original_ = original;
                windowFakes[this.attrName_] = this;
            }
            return;
        }
        // @ts-ignore: error TS2339: Property 'BACKGROUND_FAKE' does not exist on
        // type 'typeof FakeType'.
        if (fakeType === test.util.FakeType.BACKGROUND_FAKE) {
            // Only save once, otherwise it can save an object that is already fake.
            // @ts-ignore: error TS2339: Property 'backgroundReplacedObjects_' does
            // not exist on type 'typeof util'.
            if (!test.util.backgroundReplacedObjects_[this.attrName_]) {
                const original = this.parentObject_[this.leafAttrName_];
                this.original_ = original;
                // @ts-ignore: error TS2339: Property 'backgroundReplacedObjects_' does
                // not exist on type 'typeof util'.
                test.util.backgroundReplacedObjects_[this.attrName_] = this;
            }
        }
    }
    /**
     * Constructs the fake.
     */
    buildFake_() {
        // @ts-ignore: error TS2339: Property 'fakes_' does not exist on type
        // 'typeof util'.
        const factory = test.util.fakes_[this.fakeId_];
        if (!factory) {
            throw new Error(`Failed to find the fake factory for ${this.fakeId_}`);
        }
        this.fake_ = factory(this.attrName_, ...this.args_);
    }
    /**
     * Finds the parent and the object to be replaced by fake.
     */
    traverseContext_() {
        let target = this.context_;
        let parentObj;
        let attr = '';
        for (const a of this.attrName_.split('.')) {
            attr = a;
            parentObj = target;
            target = target[a];
            if (target === undefined) {
                throw new Error(`Couldn't find "${0}" from "${this.attrName_}"`);
            }
        }
        this.parentObject_ = parentObj;
        this.leafAttrName_ = attr;
    }
}
// @ts-ignore: error TS2339: Property 'PrepareFake' does not exist on type
// 'typeof util'.
test.util.PrepareFake = PrepareFake;
/**
 * Replaces implementations in the background page with fakes.
 *
 * @param {Record<string, Array<*>>} fakeData An object mapping the path to the
 * object to be replaced and the value is the Array with fake id and additional
 * arguments for the fake constructor, e.g.:
 *   fakeData = {
 *     'chrome.app.window.create' : [
 *       'static_fake',
 *       ['some static value', 'other arg'],
// @ts-ignore: error TS1005: '}' expected.
 *     ]
 *   }
 *
 *  This will replace the API 'chrome.app.window.create' with a static fake,
 *  providing the additional data to static fake: ['some static value', 'other
 *  value'].
 */
// @ts-ignore: error TS7006: Parameter 'fakeData' implicitly has an 'any' type.
test.util.sync.backgroundFake = (fakeData) => {
    for (const [path, mockValue] of Object.entries(fakeData)) {
        const fakeId = mockValue[0];
        const fakeArgs = mockValue[1] || [];
        const fake = new PrepareFake(path, fakeId, window, ...fakeArgs);
        fake.prepare();
        // @ts-ignore: error TS2339: Property 'BACKGROUND_FAKE' does not exist on
        // type 'typeof FakeType'.
        fake.replace(test.util.FakeType.BACKGROUND_FAKE, window);
    }
};
/**
 * Removes all fakes that were applied to the background page.
 */
// @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
// util'.
test.util.sync.removeAllBackgroundFakes = () => {
    // @ts-ignore: error TS2339: Property 'backgroundReplacedObjects_' does not
    // exist on type 'typeof util'.
    const savedFakes = Object.entries(test.util.backgroundReplacedObjects_);
    let removedCount = 0;
    // @ts-ignore: error TS6133: 'path' is declared but its value is never read.
    for (const [path, fake] of savedFakes) {
        fake.restore();
        removedCount++;
    }
    return removedCount;
};
/**
 * Replaces implementations in the foreground page with fakes.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {Record<string, Array<*>>} fakeData An object mapping the path to the
 * object to be replaced and the value is the Array with fake id and additional
 * arguments for the fake constructor, e.g.:
 *   fakeData = {
 *     'chrome.app.window.create' : [
 *       'static_fake',
 *       ['some static value', 'other arg'],
 *     ]
// @ts-ignore: error TS1005: '}' expected.
 *   }
 *
 *  This will replace the API 'chrome.app.window.create' with a static fake,
 *  providing the additional data to static fake: ['some static value', 'other
 *  value'].
 */
// @ts-ignore: error TS7006: Parameter 'fakeData' implicitly has an 'any' type.
test.util.sync.foregroundFake = (contentWindow, fakeData) => {
    const entries = Object.entries(fakeData);
    for (const [path, mockValue] of entries) {
        const fakeId = mockValue[0];
        const fakeArgs = mockValue[1] || [];
        const fake = new PrepareFake(path, fakeId, contentWindow, ...fakeArgs);
        fake.prepare();
        // @ts-ignore: error TS2339: Property 'FOREGROUND_FAKE' does not exist on
        // type 'typeof FakeType'.
        fake.replace(test.util.FakeType.FOREGROUND_FAKE, contentWindow);
    }
    return entries.length;
};
/**
 * Removes all fakes that were applied to the foreground page.
 * @param {Window} contentWindow Window to be tested.
 */
// @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
// util'.
test.util.sync.removeAllForegroundFakes = (contentWindow) => {
    const savedFakes = 
    // @ts-ignore: error TS2339: Property 'appID' does not exist on type
    // 'Window'.
    Object.entries(test.util.foregroundReplacedObjects_[contentWindow.appID]);
    let removedCount = 0;
    // @ts-ignore: error TS6133: 'path' is declared but its value is never read.
    for (const [path, fake] of savedFakes) {
        fake.restore();
        removedCount++;
    }
    return removedCount;
};
/**
 * Obtains the number of times the static fake api is called.
 * @param {Window} contentWindow Window to be tested.
 * @param {string} fakedApi Path of the method that is faked.
 * @return {number} Number of times the fake api called.
 */
// @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
// util'.
test.util.sync.staticFakeCounter = (contentWindow, fakedApi) => {
    const fake = 
    // @ts-ignore: error TS2339: Property 'appID' does not exist on type
    // 'Window'.
    test.util.foregroundReplacedObjects_[contentWindow.appID][fakedApi];
    return fake.callCounter_;
};
/**
 * Obtains the list of arguments with which the static fake api was called.
 * @param {Window} contentWindow Window to be tested.
 * @param {string} fakedApi Path of the method that is faked.
 * @return {!Array<!Array<*>>} An array with all calls to this fake, each item
 *     is an array with all args passed in when the fake was called.
 */
// @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
// util'.
test.util.sync.staticFakeCalledArgs = (contentWindow, fakedApi) => {
    const fake = 
    // @ts-ignore: error TS2339: Property 'appID' does not exist on type
    // 'Window'.
    test.util.foregroundReplacedObjects_[contentWindow.appID][fakedApi];
    return fake.calledArgs_;
    // @ts-ignore: error TS8024: JSDoc '@param' tag has name 'An', but there is no
    // parameter with that name.
};
/**
 * Send progress item to Foreground page to display.
 * @param {string} id Progress item id.
 * @param {ProgressItemType} type Type of progress item.
 * @param {ProgressItemState} state State of the progress item.
 * @param {string} message Message of the progress item.
 * @param {number} remainingTime The remaining time of the progress in second.
 * @param {number} progressMax Max value of the progress.
 * @param {number} progressValue Current value of the progress.
 * @param {number} count Number of items being processed.
 */
// @ts-ignore: error TS2339: Property 'sync' does not exist on type 'typeof
// util'.
test.util.sync.sendProgressItem =
    // @ts-ignore: error TS2304: Cannot find name 'ProgressItemType'.
    (id, type, state, message, remainingTime, progressMax = 1, progressValue = 0, count = 1) => {
        // @ts-ignore: error TS2304: Cannot find name 'ProgressItemState'.
        const item = new ProgressCenterItem();
        item.id = id;
        item.type = type;
        item.state = state;
        item.message = message;
        item.remainingTime = remainingTime;
        item.progressMax = progressMax;
        item.progressValue = progressValue;
        item.itemCount = count;
        // @ts-ignore: error TS2339: Property 'background' does not exist on type
        // 'Window & typeof globalThis'.
        window.background.progressCenter.updateItem(item);
        return true;
    };
/**
 * Remote call API handler. This function handles messages coming from the test
 * harness to execute known functions and return results. This is a dummy
 * implementation that is replaced by a real one once the test harness is fully
 * loaded.
 * @type {function(*, function(*): void): void}
 */
// @ts-ignore: error TS6133: 'callback' is declared but its value is never read.
test.util.executeTestMessage = (request, callback) => {
    throw new Error('executeTestMessage not implemented');
};
/**
 * Handles a direct call from the integration test harness. We execute
 * swaTestMessageListener call directly from the FileManagerBrowserTest.
 * This method avoids enabling external callers to Files SWA. We forward
 * the response back to the caller, as a serialized JSON string.
// @ts-ignore: error TS7014: Function type, which lacks return-type annotation,
implicitly has an 'any' return type.
 * @param {!Object} request
 */
// @ts-ignore: error TS2339: Property 'swaTestMessageListener' does not exist on
// type 'typeof test'.
test.swaTestMessageListener = (request) => {
    // @ts-ignore: error TS2339: Property 'contentWindow' does not exist on type
    // 'Window & typeof globalThis'.
    request.contentWindow = window.contentWindow || window;
    return new Promise(resolve => {
        // @ts-ignore: error TS7006: Parameter 'response' implicitly has an 'any'
        // type.
        test.util.executeTestMessage(request, (response) => {
            response = response === undefined ? '@undefined@' : response;
            resolve(JSON.stringify(response));
        });
    });
};
// @ts-ignore: error TS7034: Variable 'testUtilsLoaded' implicitly has type
// 'any' in some locations where its type cannot be determined.
let testUtilsLoaded = null;
// @ts-ignore: error TS2339: Property 'swaLoadTestUtils' does not exist on type
// 'typeof test'.
test.swaLoadTestUtils = async () => {
    const scriptUrl = 'background/js/runtime_loaded_test_util.js';
    try {
        // @ts-ignore: error TS7005: Variable 'testUtilsLoaded' implicitly has an
        // 'any' type.
        if (!testUtilsLoaded) {
            console.log('Loading ' + scriptUrl);
            testUtilsLoaded = new ScriptLoader(scriptUrl, { type: 'module' }).load();
        }
        await testUtilsLoaded;
        console.log('Loaded ' + scriptUrl);
        return true;
    }
    catch (error) {
        testUtilsLoaded = null;
        return false;
    }
};
// @ts-ignore: error TS2339: Property 'getSwaAppId' does not exist on type
// 'typeof test'.
test.getSwaAppId = async () => {
    // @ts-ignore: error TS7005: Variable 'testUtilsLoaded' implicitly has an
    // 'any' type.
    if (!testUtilsLoaded) {
        // @ts-ignore: error TS2339: Property 'swaLoadTestUtils' does not exist on
        // type 'typeof test'.
        await test.swaLoadTestUtils();
    }
    // @ts-ignore: error TS2339: Property 'appID' does not exist on type 'Window &
    // typeof globalThis'.
    return String(window.appID);
};

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Script loaded into the background page of a component
 * extension under test at runtime to populate testing functionality.
 */
/**
 * @typedef {{
 *   attributes:Record<string, string>,
 *   text:string,
 *   styles:(Record<string, string>|undefined),
 *   hidden:boolean,
 *   hasShadowRoot: boolean,
 *   imageWidth: (number|undefined),
 *   imageHeight: (number|undefined),
 *   renderedWidth: (number|undefined),
 *   renderedHeight: (number|undefined),
 *   renderedTop: (number|undefined),
 *   renderedLeft: (number|undefined),
 *   scrollLeft: (number|undefined),
 *   scrollTop: (number|undefined),
 *   scrollWidth: (number|undefined),
 *   scrollHeight: (number|undefined),
 *  }}
 */
// @ts-ignore: error TS7005: Variable 'ElementObject' implicitly has an 'any'
// type.
let ElementObject;
/**
 * Object containing common key modifiers: shift, alt, and ctrl.
 *
 * @typedef {{
 *   shift: (boolean|undefined),
 *   alt: (boolean|undefined),
 *   ctrl: (boolean|undefined),
 * }}
 */
// @ts-ignore: error TS7005: Variable 'KeyModifiers' implicitly has an 'any'
// type.
let KeyModifiers;
/**
 * Extract the information of the given element.
 * @param {Element} element Element to be extracted.
 * @param {Window} contentWindow Window to be tested.
 * @param {Array<string>=} opt_styleNames List of CSS property name to be
 *     obtained. NOTE: Causes element style re-calculation.
 * @return {!ElementObject} Element information that contains contentText,
 *     attribute names and values, hidden attribute, and style names and values.
 */
function extractElementInfo(element, contentWindow, opt_styleNames) {
    const attributes = {};
    for (let i = 0; i < element.attributes.length; i++) {
        // @ts-ignore: error TS2532: Object is possibly 'undefined'.
        attributes[element.attributes[i].nodeName] =
            // @ts-ignore: error TS2532: Object is possibly 'undefined'.
            element.attributes[i].nodeValue;
    }
    const result = {
        attributes: attributes,
        text: element.textContent,
        // @ts-ignore: error TS2339: Property 'innerText' does not exist on type
        // 'Element'.
        innerText: element.innerText,
        // @ts-ignore: error TS2339: Property 'value' does not exist on type
        // 'Element'.
        value: element.value,
        // The hidden attribute is not in the element.attributes even if
        // element.hasAttribute('hidden') is true.
        // @ts-ignore: error TS2339: Property 'hidden' does not exist on type
        // 'Element'.
        hidden: !!element.hidden,
        hasShadowRoot: !!element.shadowRoot,
    };
    const styleNames = opt_styleNames || [];
    assert(Array.isArray(styleNames));
    if (!styleNames.length) {
        // @ts-ignore: error TS2740: Type '{ attributes: {}; text: string | null;
        // innerText: any; value: any; hidden: boolean; hasShadowRoot: boolean; }'
        // is missing the following properties from type 'ElementObject': styles,
        // imageWidth, imageHeight, renderedWidth, and 7 more.
        return result;
    }
    // Force a style resolve and record the requested style values.
    // @ts-ignore: error TS2339: Property 'styles' does not exist on type '{
    // attributes: {}; text: string | null; innerText: any; value: any; hidden:
    // boolean; hasShadowRoot: boolean; }'.
    result.styles = {};
    const size = element.getBoundingClientRect();
    const computedStyle = contentWindow.getComputedStyle(element);
    for (let i = 0; i < styleNames.length; i++) {
        // @ts-ignore: error TS2538: Type 'undefined' cannot be used as an index
        // type.
        result.styles[styleNames[i]] = computedStyle[styleNames[i]];
    }
    // These attributes are set when element is <img> or <canvas>.
    // @ts-ignore: error TS2339: Property 'width' does not exist on type
    // 'Element'.
    result.imageWidth = Number(element.width);
    // @ts-ignore: error TS2339: Property 'height' does not exist on type
    // 'Element'.
    result.imageHeight = Number(element.height);
    // Get the element client rectangle properties.
    // @ts-ignore: error TS2339: Property 'renderedWidth' does not exist on type
    // '{ attributes: {}; text: string | null; innerText: any; value: any; hidden:
    // boolean; hasShadowRoot: boolean; }'.
    result.renderedWidth = size.width;
    // @ts-ignore: error TS2339: Property 'renderedHeight' does not exist on type
    // '{ attributes: {}; text: string | null; innerText: any; value: any; hidden:
    // boolean; hasShadowRoot: boolean; }'.
    result.renderedHeight = size.height;
    // @ts-ignore: error TS2339: Property 'renderedTop' does not exist on type '{
    // attributes: {}; text: string | null; innerText: any; value: any; hidden:
    // boolean; hasShadowRoot: boolean; }'.
    result.renderedTop = size.top;
    // @ts-ignore: error TS2339: Property 'renderedLeft' does not exist on type '{
    // attributes: {}; text: string | null; innerText: any; value: any; hidden:
    // boolean; hasShadowRoot: boolean; }'.
    result.renderedLeft = size.left;
    // Get the element scroll properties.
    // @ts-ignore: error TS2339: Property 'scrollLeft' does not exist on type '{
    // attributes: {}; text: string | null; innerText: any; value: any; hidden:
    // boolean; hasShadowRoot: boolean; }'.
    result.scrollLeft = element.scrollLeft;
    // @ts-ignore: error TS2339: Property 'scrollTop' does not exist on type '{
    // attributes: {}; text: string | null; innerText: any; value: any; hidden:
    // boolean; hasShadowRoot: boolean; }'.
    result.scrollTop = element.scrollTop;
    // @ts-ignore: error TS2339: Property 'scrollWidth' does not exist on type '{
    // attributes: {}; text: string | null; innerText: any; value: any; hidden:
    // boolean; hasShadowRoot: boolean; }'.
    result.scrollWidth = element.scrollWidth;
    // @ts-ignore: error TS2339: Property 'scrollHeight' does not exist on type '{
    // attributes: {}; text: string | null; innerText: any; value: any; hidden:
    // boolean; hasShadowRoot: boolean; }'.
    result.scrollHeight = element.scrollHeight;
    // @ts-ignore: error TS2322: Type '{ attributes: {}; text: string | null;
    // innerText: any; value: any; hidden: boolean; hasShadowRoot: boolean; }' is
    // not assignable to type 'ElementObject'.
    return result;
}
/**
 * Gets total Javascript error count from background page and each app window.
 * @return {number} Error count.
 */
test.util.sync.getErrorCount = () => {
    // @ts-ignore: error TS2339: Property 'JSErrorCount' does not exist on type
    // 'Window & typeof globalThis'.
    return window.JSErrorCount;
};
/**
 * Resizes the window to the specified dimensions.
 *
 * @param {number} width Window width.
 * @param {number} height Window height.
 * @return {boolean} True for success.
 */
test.util.sync.resizeWindow = (width, height) => {
    window.resizeTo(width, height);
    return true;
};
/**
 * Queries all elements.
 *
 * @param {!Window} contentWindow Window to be tested.
 * @param {string} targetQuery Query to specify the element.
 * @param {Array<string>=} opt_styleNames List of CSS property name to be
 *     obtained.
 * @return {!Array<!ElementObject>} Element information that contains
 *     contentText, attribute names and values, hidden attribute, and style
 *     names and values.
 */
test.util.sync.queryAllElements =
    (contentWindow, targetQuery, opt_styleNames) => {
        return test.util.sync.deepQueryAllElements(contentWindow, targetQuery, opt_styleNames);
    };
/**
 * Queries elements inside shadow DOM.
 *
 * @param {!Window} contentWindow Window to be tested.
 * @param {string|!Array<string>} targetQuery Query to specify the element.
 *   |targetQuery[0]| specifies the first element(s). |targetQuery[1]| specifies
 *   elements inside the shadow DOM of the first element, and so on.
 * @param {Array<string>=} opt_styleNames List of CSS property name to be
 *     obtained.
 * @return {!Array<!ElementObject>} Element information that contains
 *     contentText, attribute names and values, hidden attribute, and style
 *     names and values.
 */
test.util.sync.deepQueryAllElements =
    (contentWindow, targetQuery, opt_styleNames) => {
        if (!contentWindow.document) {
            return [];
        }
        if (typeof targetQuery === 'string') {
            targetQuery = [targetQuery];
        }
        const elems = test.util.sync.deepQuerySelectorAll_(contentWindow.document, targetQuery);
        // @ts-ignore: error TS7006: Parameter 'element' implicitly has an 'any'
        // type.
        return elems.map(element => {
            return extractElementInfo(element, contentWindow, opt_styleNames);
        });
    };
/**
 * Count elements matching the selector query.
 *
 * This avoid serializing and transmitting the elements to the test extension,
 * which can be time consuming for large elements.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {!Array<string>} query Query to specify the element.
 *   |query[0]| specifies the first element(s). |query[1]| specifies elements
 *   inside the shadow DOM of the first element, and so on.
 * @param {function(boolean):void} callback Callback function with results if
 *     the
 *    number of elements match |count|.
 */
// @ts-ignore: error TS7006: Parameter 'count' implicitly has an 'any' type.
test.util.async.countElements = (contentWindow, query, count, callback) => {
    // Uses requestIdleCallback so it doesn't interfere with normal operation of
    // Files app UI.
    contentWindow.requestIdleCallback(() => {
        const elements = test.util.sync.deepQuerySelectorAll_(contentWindow.document, query);
        callback(elements.length === count);
    });
};
/**
 * Selects elements below |root|, possibly following shadow DOM subtree.
 *
 * @param {(!HTMLElement|!Document)} root Element to search from.
 * @param {!Array<string>} targetQuery Query to specify the element.
 *   |targetQuery[0]| specifies the first element(s). |targetQuery[1]| specifies
 *   elements inside the shadow DOM of the first element, and so on.
 * @return {!Array<!HTMLElement>} Matched elements.
 *
 * @private
 */
test.util.sync.deepQuerySelectorAll_ = (root, targetQuery) => {
    const elems = 
    // @ts-ignore: error TS2769: No overload matches this call.
    Array.prototype.slice.call(root.querySelectorAll(targetQuery[0]));
    const remaining = targetQuery.slice(1);
    if (remaining.length === 0) {
        return elems;
    }
    // @ts-ignore: error TS7034: Variable 'res' implicitly has type 'any[]' in
    // some locations where its type cannot be determined.
    let res = [];
    for (let i = 0; i < elems.length; i++) {
        if (elems[i].shadowRoot) {
            // @ts-ignore: error TS7005: Variable 'res' implicitly has an 'any[]'
            // type.
            res = res.concat(test.util.sync.deepQuerySelectorAll_(elems[i].shadowRoot, remaining));
        }
    }
    return res;
};
/**
 * Gets the information of the active element.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {Array<string>=} opt_styleNames List of CSS property name to be
 *     obtained.
 * @return {?ElementObject} Element information that contains contentText,
 *     attribute names and values, hidden attribute, and style names and values.
 *     If there is no active element, returns null.
 */
test.util.sync.getActiveElement = (contentWindow, opt_styleNames) => {
    if (!contentWindow.document || !contentWindow.document.activeElement) {
        return null;
    }
    return extractElementInfo(contentWindow.document.activeElement, contentWindow, opt_styleNames);
};
/**
 * Gets the information of the active element. However, unlike the previous
 * helper, the shadow roots are searched as well.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {Array<string>=} opt_styleNames List of CSS property name to be
 *     obtained.
 * @return {?ElementObject} Element information that contains contentText,
 *     attribute names and values, hidden attribute, and style names and values.
 *     If there is no active element, returns null.
 */
test.util.sync.deepGetActiveElement = (contentWindow, opt_styleNames) => {
    if (!contentWindow.document || !contentWindow.document.activeElement) {
        return null;
    }
    let activeElement = contentWindow.document.activeElement;
    while (true) {
        const shadow = activeElement.shadowRoot;
        if (shadow && shadow.activeElement) {
            activeElement = shadow.activeElement;
        }
        else {
            break;
        }
    }
    return extractElementInfo(activeElement, contentWindow, opt_styleNames);
};
/**
 * Gets an array of every activeElement, walking down the shadowRoot of every
 * active element it finds.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {Array<string>=} opt_styleNames List of CSS property name to be
 *     obtained.
 * @return {Array<ElementObject>} Element information that contains contentText,
 *     attribute names and values, hidden attribute, and style names and values.
 *     If there is no active element, returns an empty array.
 */
test.util.sync.deepGetActivePath = (contentWindow, opt_styleNames) => {
    if (!contentWindow.document || !contentWindow.document.activeElement) {
        return [];
    }
    const path = [contentWindow.document.activeElement];
    while (true) {
        // @ts-ignore: error TS2532: Object is possibly 'undefined'.
        const shadow = path[path.length - 1].shadowRoot;
        if (shadow && shadow.activeElement) {
            path.push(shadow.activeElement);
        }
        else {
            break;
        }
    }
    return path.map(el => extractElementInfo(el, contentWindow, opt_styleNames));
};
/**
 * Assigns the text to the input element.
 * @param {Window} contentWindow Window to be tested.
 * @param {string|!Array<string>} query Query for the input element.
 *     If |query| is an array, |query[0]| specifies the first element(s),
 *     |query[1]| specifies elements inside the shadow DOM of the first element,
 *     and so on.
 * @param {string} text Text to be assigned.
 * @return {boolean} Whether or not the text was assigned.
 */
test.util.sync.inputText = (contentWindow, query, text) => {
    if (typeof query === 'string') {
        query = [query];
    }
    const elems = test.util.sync.deepQuerySelectorAll_(contentWindow.document, query);
    if (elems.length === 0) {
        console.error(`Input element not found: [${query.join(',')}]`);
        return false;
    }
    const input = elems[0];
    input.value = text;
    input.dispatchEvent(new Event('change'));
    return true;
};
/**
 * Sets the left scroll position of an element.
 * @param {Window} contentWindow Window to be tested.
 * @param {string} query Query for the test element.
 * @param {number} position scrollLeft position to set.
 * @return {boolean} True if operation was successful.
 */
test.util.sync.setScrollLeft = (contentWindow, query, position) => {
    // @ts-ignore: error TS2531: Object is possibly 'null'.
    contentWindow.document.querySelector(query).scrollLeft = position;
    return true;
};
/**
 * Sets the top scroll position of an element.
 * @param {Window} contentWindow Window to be tested.
 * @param {string} query Query for the test element.
 * @param {number} position scrollTop position to set.
 * @return {boolean} True if operation was successful.
 */
test.util.sync.setScrollTop = (contentWindow, query, position) => {
    // @ts-ignore: error TS2531: Object is possibly 'null'.
    contentWindow.document.querySelector(query).scrollTop = position;
    return true;
};
/**
 * Sets style properties for an element using the CSS OM.
 * @param {Window} contentWindow Window to be tested.
 * @param {string} query Query for the test element.
 * @param {!Object<?, string>} properties CSS Property name/values to set.
 * @return {boolean} Whether styles were set or not.
 */
test.util.sync.setElementStyles = (contentWindow, query, properties) => {
    const element = contentWindow.document.querySelector(query);
    if (element === null) {
        console.error(`Failed to locate element using query "${query}"`);
        return false;
    }
    for (const [key, value] of Object.entries(properties)) {
        // @ts-ignore: error TS2339: Property 'style' does not exist on type
        // 'Element'.
        element.style[key] = value;
    }
    return true;
};
/**
 * Sends an event to the element specified by |targetQuery| or active element.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {?string|Array<string>} targetQuery Query to specify the element.
 *     If this value is null, an event is dispatched to active element of the
 *     document.
 *     If targetQuery is an array, |targetQuery[0]| specifies the first
 *     element(s), |targetQuery[1]| specifies elements inside the shadow DOM of
 *     the first element, and so on.
 * @param {!Event} event Event to be sent.
 * @return {boolean} True if the event is sent to the target, false otherwise.
 */
test.util.sync.sendEvent = (contentWindow, targetQuery, event) => {
    if (!contentWindow.document) {
        return false;
    }
    let target;
    if (targetQuery === null) {
        target = contentWindow.document.activeElement;
    }
    else if (typeof targetQuery === 'string') {
        target = contentWindow.document.querySelector(targetQuery);
    }
    else if (Array.isArray(targetQuery)) {
        const elements = test.util.sync.deepQuerySelectorAll_(contentWindow.document, targetQuery);
        if (elements.length > 0) {
            target = elements[0];
        }
    }
    if (!target) {
        return false;
    }
    target.dispatchEvent(event);
    return true;
};
/**
 * Sends an fake event having the specified type to the target query.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string} targetQuery Query to specify the element.
 * @param {string} eventType Type of event.
 * @param {Object=} opt_additionalProperties Object containing additional
 *     properties.
 * @return {boolean} True if the event is sent to the target, false otherwise.
 */
test.util.sync.fakeEvent =
    (contentWindow, targetQuery, eventType, opt_additionalProperties) => {
        const event = new Event(eventType, 
        /** @type {!EventInit} */ (opt_additionalProperties || {}));
        if (opt_additionalProperties) {
            for (const name in opt_additionalProperties) {
                if (name === 'bubbles') {
                    // bubbles is a read-only which, causes an error when assigning.
                    continue;
                }
                // @ts-ignore: error TS7053: Element implicitly has an 'any' type
                // because expression of type 'string' can't be used to index type
                // 'Object'.
                event[name] = opt_additionalProperties[name];
            }
        }
        return test.util.sync.sendEvent(contentWindow, targetQuery, event);
    };
/**
 * Sends a fake key event to the element specified by |targetQuery| or active
 * element with the given |key| and optional |ctrl,shift,alt| modifier.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {?string} targetQuery Query to specify the element. If this value is
 *     null, key event is dispatched to active element of the document.
 * @param {string} key DOM UI Events key value.
 * @param {boolean} ctrl Whether CTRL should be pressed, or not.
 * @param {boolean} shift whether SHIFT should be pressed, or not.
 * @param {boolean} alt whether ALT should be pressed, or not.
 * @return {boolean} True if the event is sent to the target, false otherwise.
 */
test.util.sync.fakeKeyDown =
    (contentWindow, targetQuery, key, ctrl, shift, alt) => {
        const event = new KeyboardEvent('keydown', {
            bubbles: true,
            composed: true,
            key: key,
            ctrlKey: ctrl,
            shiftKey: shift,
            altKey: alt,
        });
        return test.util.sync.sendEvent(contentWindow, targetQuery, event);
    };
/**
 * Simulates a fake mouse click (left button, single click) on the element
 * specified by |targetQuery|. If the element has the click method, just calls
 * it. Otherwise, this sends 'mouseover', 'mousedown', 'mouseup' and 'click'
 * events in turns.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string|Array<string>} targetQuery Query to specify the element.
 *     If targetQuery is an array, |targetQuery[0]| specifies the first
 *     element(s), |targetQuery[1]| specifies elements inside the shadow DOM of
 *     the first element, and so on.
 * @param {KeyModifiers=} opt_keyModifiers Object containing common key
 *     modifiers : shift, alt, and ctrl.
 * @param {number=} opt_button Mouse button number as per spec, e.g.: 2 for
 *     right-click.
 * @param {Object=} opt_eventProperties Additional properties to pass to each
 *     event, e.g.: clientX and clientY. right-click.
 * @return {boolean} True if the all events are sent to the target, false
 *     otherwise.
 */
test.util.sync.fakeMouseClick =
    (contentWindow, targetQuery, opt_keyModifiers, opt_button, opt_eventProperties) => {
        const modifiers = opt_keyModifiers || {};
        const eventProperties = opt_eventProperties || {};
        const props = Object.assign({
            bubbles: true,
            detail: 1,
            composed: true,
            // @ts-ignore: error TS2339: Property 'ctrl' does not exist on type
            // '{}'.
            ctrlKey: modifiers.ctrl,
            // @ts-ignore: error TS2339: Property 'shift' does not exist on type
            // '{}'.
            shiftKey: modifiers.shift,
            // @ts-ignore: error TS2339: Property 'alt' does not exist on type
            // '{}'.
            altKey: modifiers.alt,
        }, eventProperties);
        if (opt_button !== undefined) {
            // @ts-ignore: error TS2339: Property 'button' does not exist on type '{
            // bubbles: boolean; detail: number; composed: boolean; ctrlKey: any;
            // shiftKey: any; altKey: any; } & Object'.
            props.button = opt_button;
        }
        if (!targetQuery) {
            return false;
        }
        if (typeof targetQuery === 'string') {
            targetQuery = [targetQuery];
        }
        const elems = test.util.sync.deepQuerySelectorAll_(
        // @ts-ignore: error TS1110: Type expected.
        contentWindow.document, /** @type !Array<string> */ (targetQuery));
        if (elems.length === 0) {
            return false;
        }
        // Only sends the event to the first matched element.
        const target = elems[0];
        const mouseOverEvent = new MouseEvent('mouseover', props);
        const resultMouseOver = target.dispatchEvent(mouseOverEvent);
        const mouseDownEvent = new MouseEvent('mousedown', props);
        const resultMouseDown = target.dispatchEvent(mouseDownEvent);
        const mouseUpEvent = new MouseEvent('mouseup', props);
        const resultMouseUp = target.dispatchEvent(mouseUpEvent);
        const clickEvent = new MouseEvent('click', props);
        const resultClick = target.dispatchEvent(clickEvent);
        return resultMouseOver && resultMouseDown && resultMouseUp && resultClick;
    };
/**
 * Simulates a mouse hover on an element specified by |targetQuery|.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string|Array<string>} targetQuery Query to specify the element.
 *     If targetQuery is an array, |targetQuery[0]| specifies the first
 *     element(s), |targetQuery[1]| specifies elements inside the shadow DOM of
 *     the first element, and so on.
 * @param {KeyModifiers=} opt_keyModifiers Object containing common key
 *     modifiers : shift, alt, and ctrl.
 * @return {boolean} True if the event was sent to the target, false otherwise.
 */
test.util.sync.fakeMouseOver =
    (contentWindow, targetQuery, opt_keyModifiers) => {
        const modifiers = opt_keyModifiers || {};
        const props = {
            bubbles: true,
            detail: 1,
            composed: true,
            // @ts-ignore: error TS2339: Property 'ctrl' does not exist on type
            // '{}'.
            ctrlKey: modifiers.ctrl,
            // @ts-ignore: error TS2339: Property 'shift' does not exist on type
            // '{}'.
            shiftKey: modifiers.shift,
            // @ts-ignore: error TS2339: Property 'alt' does not exist on type '{}'.
            altKey: modifiers.alt,
        };
        const mouseOverEvent = new MouseEvent('mouseover', props);
        return test.util.sync.sendEvent(contentWindow, targetQuery, mouseOverEvent);
    };
/**
 * Simulates a mouseout event on an element specified by |targetQuery|.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string|Array<string>} targetQuery Query to specify the element.
 *     If targetQuery is an array, |targetQuery[0]| specifies the first
 *     element(s), |targetQuery[1]| specifies elements inside the shadow DOM of
 *     the first element, and so on.
 * @param {KeyModifiers=} opt_keyModifiers Object containing common key
 *     modifiers : shift, alt, and ctrl.
 * @return {boolean} True if the event is sent to the target, false otherwise.
 */
test.util.sync.fakeMouseOut =
    (contentWindow, targetQuery, opt_keyModifiers) => {
        const modifiers = opt_keyModifiers || {};
        const props = {
            bubbles: true,
            detail: 1,
            composed: true,
            // @ts-ignore: error TS2339: Property 'ctrl' does not exist on type
            // '{}'.
            ctrlKey: modifiers.ctrl,
            // @ts-ignore: error TS2339: Property 'shift' does not exist on type
            // '{}'.
            shiftKey: modifiers.shift,
            // @ts-ignore: error TS2339: Property 'alt' does not exist on type '{}'.
            altKey: modifiers.alt,
        };
        const mouseOutEvent = new MouseEvent('mouseout', props);
        return test.util.sync.sendEvent(contentWindow, targetQuery, mouseOutEvent);
    };
/**
 * Simulates a fake full mouse right-click  on the element specified by
 * |targetQuery|.
 *
 * It generates the sequence of the following MouseEvents:
 * 1. mouseover
 * 2. mousedown
 * 3. mouseup
 * 4. click
 * 5. contextmenu
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string} targetQuery Query to specify the element.
 * @param {KeyModifiers=} opt_keyModifiers Object containing common key
 *     modifiers : shift, alt, and ctrl.
 * @return {boolean} True if the event is sent to the target, false
 *     otherwise.
 */
test.util.sync.fakeMouseRightClick =
    (contentWindow, targetQuery, opt_keyModifiers) => {
        const clickResult = test.util.sync.fakeMouseClick(contentWindow, targetQuery, opt_keyModifiers, 2 /* right button */);
        if (!clickResult) {
            return false;
        }
        const contextMenuEvent = new MouseEvent('contextmenu', { bubbles: true, composed: true });
        return test.util.sync.sendEvent(contentWindow, targetQuery, contextMenuEvent);
    };
/**
 * Simulates a fake touch event (touch start and touch end) on the element
 * specified by |targetQuery|.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string} targetQuery Query to specify the element.
 * @return {boolean} True if the event is sent to the target, false
 *     otherwise.
 */
test.util.sync.fakeTouchClick = (contentWindow, targetQuery) => {
    const touchStartEvent = new TouchEvent('touchstart');
    if (!test.util.sync.sendEvent(contentWindow, targetQuery, touchStartEvent)) {
        return false;
    }
    const touchEndEvent = new TouchEvent('touchend');
    if (!test.util.sync.sendEvent(contentWindow, targetQuery, touchEndEvent)) {
        return false;
    }
    return true;
};
/**
 * Simulates a fake double click event (left button) to the element specified by
 * |targetQuery|.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string} targetQuery Query to specify the element.
 * @return {boolean} True if the event is sent to the target, false otherwise.
 */
test.util.sync.fakeMouseDoubleClick = (contentWindow, targetQuery) => {
    // Double click is always preceded with a single click.
    if (!test.util.sync.fakeMouseClick(contentWindow, targetQuery)) {
        return false;
    }
    // Send the second click event, but with detail equal to 2 (number of clicks)
    // in a row.
    let event = new MouseEvent('click', { bubbles: true, detail: 2, composed: true });
    if (!test.util.sync.sendEvent(contentWindow, targetQuery, event)) {
        return false;
    }
    // Send the double click event.
    event = new MouseEvent('dblclick', { bubbles: true, composed: true });
    if (!test.util.sync.sendEvent(contentWindow, targetQuery, event)) {
        return false;
    }
    return true;
};
/**
 * Sends a fake mouse down event to the element specified by |targetQuery|.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string} targetQuery Query to specify the element.
 * @return {boolean} True if the event is sent to the target, false otherwise.
 */
test.util.sync.fakeMouseDown = (contentWindow, targetQuery) => {
    const event = new MouseEvent('mousedown', { bubbles: true, composed: true });
    return test.util.sync.sendEvent(contentWindow, targetQuery, event);
};
/**
 * Sends a fake mouse up event to the element specified by |targetQuery|.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string} targetQuery Query to specify the element.
 * @return {boolean} True if the event is sent to the target, false otherwise.
 */
test.util.sync.fakeMouseUp = (contentWindow, targetQuery) => {
    const event = new MouseEvent('mouseup', { bubbles: true, composed: true });
    return test.util.sync.sendEvent(contentWindow, targetQuery, event);
};
/**
 * Simulates a mouse right-click on the element specified by |targetQuery|.
 * Optionally pass X,Y coordinates to be able to choose where the right-click
 * should occur.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string} targetQuery Query to specify the element.
 * @param {number=} opt_offsetBottom offset pixels applied to target element
 *     bottom, can be negative to move above the bottom.
 * @param {number=} opt_offsetRight offset pixels applied to target element
 *     right can be negative to move inside the element.
 * @return {boolean} True if the all events are sent to the target, false
 *     otherwise.
 */
test.util.sync.rightClickOffset =
    (contentWindow, targetQuery, opt_offsetBottom, opt_offsetRight) => {
        const target = contentWindow.document &&
            contentWindow.document.querySelector(targetQuery);
        if (!target) {
            return false;
        }
        // Calculate the offsets.
        const targetRect = target.getBoundingClientRect();
        const props = {
            clientX: targetRect.right + (opt_offsetRight ? opt_offsetRight : 0),
            clientY: targetRect.bottom + (opt_offsetBottom ? opt_offsetBottom : 0),
        };
        const keyModifiers = undefined;
        const rightButton = 2;
        if (!test.util.sync.fakeMouseClick(contentWindow, targetQuery, keyModifiers, rightButton, props)) {
            return false;
        }
        return true;
    };
/**
 * Sends drag and drop events to simulate dragging a source over a target.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string} sourceQuery Query to specify the source element.
 * @param {string} targetQuery Query to specify the target element.
 * @param {boolean} skipDrop Set true to drag over (hover) the target
 *    only, and not send target drop or source dragend events.
 * @param {function(boolean):void} callback Function called with result
 *    true on success, or false on failure.
 */
test.util.async.fakeDragAndDrop =
    (contentWindow, sourceQuery, targetQuery, skipDrop, callback) => {
        const source = contentWindow.document.querySelector(sourceQuery);
        const target = contentWindow.document.querySelector(targetQuery);
        if (!source || !target) {
            setTimeout(() => {
                callback(false);
            }, 0);
            return;
        }
        const targetOptions = {
            bubbles: true,
            composed: true,
            dataTransfer: new DataTransfer(),
        };
        // Get the middle of the source element since some of Files app
        // logic requires clientX and clientY.
        const sourceRect = source.getBoundingClientRect();
        const sourceOptions = Object.assign({}, targetOptions);
        // @ts-ignore: error TS2339: Property 'clientX' does not exist on type '{
        // bubbles: boolean; composed: boolean; dataTransfer: DataTransfer; }'.
        sourceOptions.clientX = sourceRect.left + (sourceRect.width / 2);
        // @ts-ignore: error TS2339: Property 'clientY' does not exist on type '{
        // bubbles: boolean; composed: boolean; dataTransfer: DataTransfer; }'.
        sourceOptions.clientY = sourceRect.top + (sourceRect.height / 2);
        let dragEventPhase = 0;
        let event = null;
        function sendPhasedDragDropEvents() {
            let result = true;
            switch (dragEventPhase) {
                case 0:
                    event = new DragEvent('dragstart', sourceOptions);
                    // @ts-ignore: error TS18047: 'source' is possibly 'null'.
                    result = source.dispatchEvent(event);
                    break;
                case 1:
                    // @ts-ignore: error TS2339: Property 'relatedTarget' does not exist
                    // on type '{ bubbles: boolean; composed: boolean; dataTransfer:
                    // DataTransfer; }'.
                    targetOptions.relatedTarget = source;
                    event = new DragEvent('dragenter', targetOptions);
                    // @ts-ignore: error TS18047: 'target' is possibly 'null'.
                    result = target.dispatchEvent(event);
                    break;
                case 2:
                    // @ts-ignore: error TS2339: Property 'relatedTarget' does not exist
                    // on type '{ bubbles: boolean; composed: boolean; dataTransfer:
                    // DataTransfer; }'.
                    targetOptions.relatedTarget = null;
                    event = new DragEvent('dragover', targetOptions);
                    // @ts-ignore: error TS18047: 'target' is possibly 'null'.
                    result = target.dispatchEvent(event);
                    break;
                case 3:
                    if (!skipDrop) {
                        // @ts-ignore: error TS2339: Property 'relatedTarget' does not
                        // exist on type '{ bubbles: boolean; composed: boolean;
                        // dataTransfer: DataTransfer; }'.
                        targetOptions.relatedTarget = null;
                        event = new DragEvent('drop', targetOptions);
                        // @ts-ignore: error TS18047: 'target' is possibly 'null'.
                        result = target.dispatchEvent(event);
                    }
                    break;
                case 4:
                    if (!skipDrop) {
                        event = new DragEvent('dragend', sourceOptions);
                        // @ts-ignore: error TS18047: 'source' is possibly 'null'.
                        result = source.dispatchEvent(event);
                    }
                    break;
                default:
                    result = false;
                    break;
            }
            if (!result) {
                callback(false);
            }
            else if (++dragEventPhase <= 4) {
                contentWindow.requestIdleCallback(sendPhasedDragDropEvents);
            }
            else {
                callback(true);
            }
        }
        sendPhasedDragDropEvents();
    };
/**
 * Sends a target dragleave or drop event, and source dragend event, to finish
 * the drag a source over target simulation started by fakeDragAndDrop for the
 * case where the target was hovered.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string} sourceQuery Query to specify the source element.
 * @param {string} targetQuery Query to specify the target element.
 * @param {boolean} dragLeave Set true to send a dragleave event to
 *    the target instead of a drop event.
 * @param {function(boolean):void} callback Function called with result
 *    true on success, or false on failure.
 */
test.util.async.fakeDragLeaveOrDrop =
    (contentWindow, sourceQuery, targetQuery, dragLeave, callback) => {
        const source = contentWindow.document.querySelector(sourceQuery);
        const target = contentWindow.document.querySelector(targetQuery);
        if (!source || !target) {
            setTimeout(() => {
                callback(false);
            }, 0);
            return;
        }
        const targetOptions = {
            bubbles: true,
            composed: true,
            dataTransfer: new DataTransfer(),
        };
        // Get the middle of the source element since some of Files app
        // logic requires clientX and clientY.
        const sourceRect = source.getBoundingClientRect();
        const sourceOptions = Object.assign({}, targetOptions);
        // @ts-ignore: error TS2339: Property 'clientX' does not exist on type '{
        // bubbles: boolean; composed: boolean; dataTransfer: DataTransfer; }'.
        sourceOptions.clientX = sourceRect.left + (sourceRect.width / 2);
        // @ts-ignore: error TS2339: Property 'clientY' does not exist on type '{
        // bubbles: boolean; composed: boolean; dataTransfer: DataTransfer; }'.
        sourceOptions.clientY = sourceRect.top + (sourceRect.height / 2);
        // Define the target event type.
        const targetType = dragLeave ? 'dragleave' : 'drop';
        let dragEventPhase = 0;
        let event = null;
        function sendPhasedDragEndEvents() {
            let result = false;
            switch (dragEventPhase) {
                case 0:
                    event = new DragEvent(targetType, targetOptions);
                    // @ts-ignore: error TS18047: 'target' is possibly 'null'.
                    result = target.dispatchEvent(event);
                    break;
                case 1:
                    event = new DragEvent('dragend', sourceOptions);
                    // @ts-ignore: error TS18047: 'source' is possibly 'null'.
                    result = source.dispatchEvent(event);
                    break;
            }
            if (!result) {
                callback(false);
            }
            else if (++dragEventPhase <= 1) {
                contentWindow.requestIdleCallback(sendPhasedDragEndEvents);
            }
            else {
                callback(true);
            }
        }
        sendPhasedDragEndEvents();
    };
/**
 * Sends a drop event to simulate dropping a file originating in the browser to
 * a target.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string} fileName File name.
 * @param {string} fileContent File content.
 * @param {string} fileMimeType File mime type.
 * @param {string} targetQuery Query to specify the target element.
 * @param {function(boolean):void} callback Function called with result
 *    true on success, or false on failure.
 */
test.util.async.fakeDropBrowserFile =
    (contentWindow, fileName, fileContent, fileMimeType, targetQuery, callback) => {
        const target = contentWindow.document.querySelector(targetQuery);
        if (!target) {
            setTimeout(() => callback(false));
            return;
        }
        const file = new File([fileContent], fileName, { type: fileMimeType });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        // The value for the callback is true if the event has been handled, i.e.
        // event has been received and preventDefault() called.
        callback(target.dispatchEvent(new DragEvent('drop', {
            bubbles: true,
            composed: true,
            dataTransfer: dataTransfer,
        })));
    };
/**
 * Sends a resize event to the content window.
 *
 * @param {Window} contentWindow Window to be tested.
 * @return {boolean} True if the event was sent to the contentWindow.
 */
test.util.sync.fakeResizeEvent = (contentWindow) => {
    const resize = contentWindow.document.createEvent('Event');
    resize.initEvent('resize', false, false);
    return contentWindow.dispatchEvent(resize);
};
/**
 * Focuses to the element specified by |targetQuery|. This method does not
 * provide any guarantee whether the element is actually focused or not.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string} targetQuery Query to specify the element.
 * @return {boolean} True if focus method of the element has been called, false
 *     otherwise.
 */
test.util.sync.focus = (contentWindow, targetQuery) => {
    const target = contentWindow.document &&
        contentWindow.document.querySelector(targetQuery);
    if (!target) {
        return false;
    }
    // @ts-ignore: error TS2339: Property 'focus' does not exist on type
    // 'Element'.
    target.focus();
    return true;
};
/**
 * Obtains the list of notification ID.
 * @param {function(Record<string, boolean>):void} callback Callback function
 *     with results returned by the script.
 */
test.util.async.getNotificationIDs = callback => {
    // @ts-ignore: error TS2339: Property 'notifications' does not exist on type
    // 'typeof chrome'.
    chrome.notifications.getAll(callback);
};
/**
 * Gets file entries just under the volume.
 *
 * @param {VolumeManagerCommon.VolumeType} volumeType Volume type.
 * @param {Array<string>} names File name list.
 * @param {function(*):void} callback Callback function with results returned by
 *     the script.
 */
test.util.async.getFilesUnderVolume = async (volumeType, names, callback) => {
    // @ts-ignore: error TS2339: Property 'background' does not exist on type
    // 'Window & typeof globalThis'.
    const volumeManager = await window.background.getVolumeManager();
    let volumeInfo = null;
    // @ts-ignore: error TS7034: Variable 'displayRoot' implicitly has type 'any'
    // in some locations where its type cannot be determined.
    let displayRoot = null;
    // Wait for the volume to initialize.
    while (!(volumeInfo && displayRoot)) {
        volumeInfo = volumeManager.getCurrentProfileVolumeInfo(volumeType);
        if (volumeInfo) {
            displayRoot = await volumeInfo.resolveDisplayRoot();
        }
        if (!displayRoot) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
    const filesPromise = names.map(name => {
        // TODO(crbug.com/880130): Remove this conditional.
        if (volumeType === VolumeManagerCommon.VolumeType.DOWNLOADS) {
            name = 'Downloads/' + name;
        }
        // @ts-ignore: error TS7005: Variable 'displayRoot' implicitly has an 'any'
        // type.
        return new Promise(displayRoot.getFile.bind(displayRoot, name, {}));
    });
    try {
        const urls = await Promise.all(filesPromise);
        const result = entriesToURLs(urls);
        callback(result);
    }
    catch (error) {
        console.error(error);
        callback([]);
    }
};
/**
 * Unmounts the specified volume.
 *
 * @param {VolumeManagerCommon.VolumeType} volumeType Volume type.
 * @param {function(boolean):void} callback Function receives true on success.
 */
test.util.async.unmount = async (volumeType, callback) => {
    // @ts-ignore: error TS2339: Property 'background' does not exist on type
    // 'Window & typeof globalThis'.
    const volumeManager = await window.background.getVolumeManager();
    const volumeInfo = volumeManager.getCurrentProfileVolumeInfo(volumeType);
    try {
        if (volumeInfo) {
            await volumeManager.unmount(volumeInfo);
            callback(true);
            return;
        }
    }
    catch (error) {
        console.error(error);
    }
    callback(false);
};
/**
 * Remote call API handler. When loaded, this replaces the declaration in
 * test_util_base.js.
 * @param {*} request
 * @param {function(*): void} sendResponse
 * @return {boolean|undefined}
 */
test.util.executeTestMessage = (request, sendResponse) => {
    window.IN_TEST = true;
    // Check the function name.
    if (!request.func || request.func[request.func.length - 1] == '_') {
        request.func = '';
    }
    // Prepare arguments.
    if (!('args' in request)) {
        throw new Error('Invalid request: no args provided.');
    }
    const args = request.args.slice(); // shallow copy
    if (request.appId) {
        if (request.contentWindow) {
            // request.contentWindow is present if this function was called via
            // test.swaTestMessageListener.
            args.unshift(request.contentWindow);
        }
        else {
            console.error('Specified window not found: ' + request.appId);
            return false;
        }
    }
    // Call the test utility function and respond the result.
    if (test.util.async[request.func]) {
        // @ts-ignore: error TS7019: Rest parameter 'innerArgs' implicitly has an
        // 'any[]' type.
        args[test.util.async[request.func].length - 1] = function (...innerArgs) {
            console.debug('Received the result of ' + request.func);
            // @ts-ignore: error TS2345: Argument of type 'any[]' is not assignable to
            // parameter of type '[any]'.
            sendResponse.apply(null, innerArgs);
        };
        console.debug('Waiting for the result of ' + request.func);
        test.util.async[request.func].apply(null, args);
        return true;
    }
    else if (test.util.sync[request.func]) {
        try {
            sendResponse(test.util.sync[request.func].apply(null, args));
        }
        catch (e) {
            console.error(`Failure executing ${request.func}: ${e}`);
            sendResponse(null);
        }
        return false;
    }
    else {
        console.error('Invalid function name: ' + request.func);
        return false;
    }
};
/**
 * Returns the MetadataStats collected in MetadataModel, it will be serialized
 * as a plain object when sending to test extension.
 *
 * @suppress {missingProperties} metadataStats is only defined for foreground
 *   Window so it isn't visible in the background. Here it will return as JSON
 *   object to test extension.
 */
// @ts-ignore: error TS7006: Parameter 'contentWindow' implicitly has an 'any'
// type.
test.util.sync.getMetadataStats = contentWindow => {
    return contentWindow.fileManager.metadataModel.getStats();
};
/**
 * Calls the metadata model to get the selected file entries in the file
 * list and try to get their metadata properties.
 *
 * @param {Array<String>} properties Content metadata properties to get.
 * @param {function(*):void} callback Callback with metadata results returned.
 * @suppress {missingProperties} getContentMetadata isn't visible in the
 * background window.
 */
// @ts-ignore: error TS7006: Parameter 'contentWindow' implicitly has an 'any'
// type.
test.util.async.getContentMetadata = (contentWindow, properties, callback) => {
    const entries = contentWindow.fileManager.directoryModel.getSelectedEntries_();
    assert(entries.length > 0);
    const metaPromise = contentWindow.fileManager.metadataModel.get(entries, properties);
    // Wait for the promise to resolve
    // @ts-ignore: error TS7006: Parameter 'resultsList' implicitly has an 'any'
    // type.
    metaPromise.then(resultsList => {
        callback(resultsList);
    });
};
/**
 * Returns true when FileManager has finished loading, by checking the attribute
 * "loaded" on its root element.
 */
// @ts-ignore: error TS7006: Parameter 'contentWindow' implicitly has an 'any'
// type.
test.util.sync.isFileManagerLoaded = contentWindow => {
    if (contentWindow && contentWindow.fileManager &&
        contentWindow.fileManager.ui) {
        return contentWindow.fileManager.ui.element.hasAttribute('loaded');
    }
    return false;
};
/**
 * Returns all a11y messages announced by |FileManagerUI.speakA11yMessage|.
 *
 * @return {Array<string>}
 */
// @ts-ignore: error TS7006: Parameter 'contentWindow' implicitly has an 'any'
// type.
test.util.sync.getA11yAnnounces = contentWindow => {
    if (contentWindow && contentWindow.fileManager &&
        contentWindow.fileManager.ui) {
        return contentWindow.fileManager.ui.a11yAnnounces;
    }
    // @ts-ignore: error TS2322: Type 'null' is not assignable to type 'string[]'.
    return null;
};
/**
 * Reports to the given |callback| the number of volumes available in
 * VolumeManager in the background page.
 *
 * @param {function(number):void} callback Callback function to be called with
 *     the
 *   number of volumes.
 */
test.util.async.getVolumesCount = callback => {
    // @ts-ignore: error TS7006: Parameter 'volumeManager' implicitly has an 'any'
    // type.
    return window.background.getVolumeManager().then((volumeManager) => {
        callback(volumeManager.volumeInfoList.length);
    });
};
/**
 * Updates the preferences.
 * @param {chrome.fileManagerPrivate.PreferencesChange} preferences Preferences
 *     to set.
 */
test.util.sync.setPreferences = preferences => {
    chrome.fileManagerPrivate.setPreferences(preferences);
    return true;
};
/**
 * Reports an enum metric.
 * @param {string} name The metric name.
 * @param {string} value The metric enumerator to record.
 * @param {Array<string>} validValues An array containing the valid enumerators
 *     in order.
 *
 */
test.util.sync.recordEnumMetric = (name, value, validValues) => {
    recordEnum(name, value, validValues);
    return true;
};
/**
 * Tells background page progress center to never notify a completed operation.
 * @suppress {checkTypes} Remove suppress when migrating Files app. This is only
 *     used for Files app.
 */
test.util.sync.progressCenterNeverNotifyCompleted = () => {
    // @ts-ignore: error TS2339: Property 'background' does not exist on type
    // 'Window & typeof globalThis'.
    window.background.progressCenter.neverNotifyCompleted();
    return true;
};
/**
 * Waits for the background page to initialize.
 * @param {function():void} callback Callback function called when background
 *     page
 *      has finished initializing.
 * @suppress {missingProperties}: ready() isn't available for Audio and Video
 * Player.
 */
test.util.async.waitForBackgroundReady = callback => {
    // @ts-ignore: error TS2339: Property 'background' does not exist on type
    // 'Window & typeof globalThis'.
    window.background.ready(callback);
};
/**
 * Isolates a specific banner to be shown. Useful when testing functionality of
 * a banner in isolation.
 *
 * @param {Window} contentWindow Window to be tested.
 * @param {string} bannerTagName Tag name of the banner to isolate.
 * @param {function(boolean):void} callback Callback function to be called with
 *     a
 *    boolean indicating success or failure.
 * @suppress {missingProperties} banners is only defined for foreground
 *    Window so it isn't visible in the background.
 */
test.util.async.isolateBannerForTesting =
    async (contentWindow, bannerTagName, callback) => {
        try {
            // @ts-ignore: error TS2339: Property 'ui_' does not exist on type
            // 'FileManager'.
            await contentWindow.fileManager.ui_.banners.isolateBannerForTesting(bannerTagName);
            callback(true);
            return;
        }
        catch (e) {
            console.error(`Error isolating banner with tagName ${bannerTagName} for testing: ${e}`);
        }
        callback(false);
    };
/**
 * Disable banners from attaching themselves to the DOM.
 *
 * @param {Window} contentWindow Window the banner controller exists.
 * @param {function(boolean):void} callback Callback function to be called with
 *     a
 *    boolean indicating success or failure.
 * @suppress {missingProperties} banners is only defined for foreground
 *    Window so it isn't visible in the background.
 */
test.util.async.disableBannersForTesting = async (contentWindow, callback) => {
    try {
        // @ts-ignore: error TS2339: Property 'ui_' does not exist on type
        // 'FileManager'.
        await contentWindow.fileManager.ui_.banners.disableBannersForTesting();
        callback(true);
        return;
    }
    catch (e) {
        console.error(`Error disabling banners for testing: ${e}`);
    }
    callback(false);
};
/**
 * Disables the nudge expiry period for testing.
 *
 * @param {Window} contentWindow Window the banner controller exists.
 * @param {function(boolean):void} callback Callback function to be called with
 *     a
 *    boolean indicating success or failure.
 * @suppress {missingProperties} nudgeContainer is only defined for foreground
 *    Window so it isn't visible in the background.
 */
test.util.async.disableNudgeExpiry = async (contentWindow, callback) => {
    // @ts-ignore: error TS2339: Property 'ui_' does not exist on type
    // 'FileManager'.
    contentWindow.fileManager.ui_.nudgeContainer
        .setExpiryPeriodEnabledForTesting = false;
    callback(true);
};

export { ElementObject, KeyModifiers };
//# sourceMappingURL=runtime_loaded_test_util.rollup.js.map
