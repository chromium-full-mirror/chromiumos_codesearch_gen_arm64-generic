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
 *
 * The main intention of those types is to be able to provide alternative
 * implementations and from other sources for "entries", as well as be able to
 * extend the native "entry" types.
 *
 * Native Entry:
 * https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
 * Native DirectoryEntry:
 * https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader
 */
import { FakeEntry, FilesAppDirEntry, FilesAppEntry } from '../../externs/files_app_entry_interfaces.js';
import { isSameEntry } from './entry_utils.js';
import { vmTypeToIconName } from './icon_util.js';
import { getVolumeTypeFromRootType, RootType, VolumeType } from './volume_manager_types.js';
/**
 * A reader compatible with DirectoryEntry.createReader (from Web Standards)
 * that reads a static list of entries, provided at construction time.
 * https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader
 * It can be used by DirectoryEntry-like such as EntryList to return its
 * entries.
 */
export class StaticReader {
    /**
     * @param entries_ Array of Entry-like instances that will be returned/read by
     * this reader.
     */
    constructor(entries_) {
        this.entries_ = entries_;
    }
    /**
     * Reads array of entries via |success| callback.
     *
     * @param success A callback that will be called multiple times with the
     * entries, last call will be called with an empty array indicating that no
     * more entries available.
     * @param _error A callback that's never called, it's here to match the
     * signature from the Web Standards.
     */
    readEntries(success, _error) {
        const entries = this.entries_;
        // readEntries is suppose to return empty result when there are no more
        // files to return, so we clear the entries_ attribute for next call.
        this.entries_ = [];
        // Triggers callback asynchronously.
        setTimeout(() => success(entries), 0);
    }
}
/**
 * A reader compatible with DirectoryEntry.createReader (from Web Standards),
 * It chains entries from one reader to another, creating a combined set of
 * entries from all readers.
 */
export class CombinedReaders {
    /**
     * @param readers_ Array of all readers that will have their entries combined.
     */
    constructor(readers_) {
        this.readers_ = readers_;
        // Reverse readers_ so the readEntries can just use pop() to get the next.
        this.readers_.reverse();
        this.currentReader_ = this.readers_.pop();
    }
    /**
     * @param success returning entries of all readers, it's called with empty
     * Array when there is no more entries to return.
     * @param error called when error happens when reading from readers for this
     * implementation.
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
                this.currentReader_ = this.readers_.pop();
                this.readEntries(success, error);
            }
        }, error);
    }
}
/**
 * EntryList, a DirectoryEntry-like object that contains entries. Initially used
 * to implement "My Files" containing VolumeEntry for "Downloads", "Linux
 * Files" and "Play Files".
 */
export class EntryList extends FilesAppDirEntry {
    /**
     * @param label: Label to be used when displaying to user, it should
     *    already translated.
     * @param rootType root type.
     * @param devicePath Path belonging to the external media device. Partitions
     * on the same external drive have the same device path.
     */
    constructor(label, rootType, devicePath = '') {
        super(rootType);
        this.label = label;
        this.devicePath = devicePath;
        /** Children entries of this EntryList instance. */
        this.children_ = [];
        /**
         * EntryList can be a placeholder of a real volume (e.g. MyFiles or
         * DriveFakeRootEntryList). It can be disabled if the corresponding volume
         * type is disabled.
         */
        this.disabled = false;
    }
    get typeName() {
        return 'EntryList';
    }
    get isDirectory() {
        return true;
    }
    get isFile() {
        return false;
    }
    get fullPath() {
        return '/';
    }
    /**
     * @return List of entries that are shown as
     *     children of this Volume in the UI, but are not actually entries of the
     *     Volume.  E.g. 'Play files' is shown as a child of 'My files'.
     */
    getUiChildren() {
        return this.children_;
    }
    get name() {
        return this.label;
    }
    get isNativeType() {
        return false;
    }
    getMetadata(success, _error) {
        // Defaults modificationTime to current time just to have a valid value.
        setTimeout(() => success({ modificationTime: new Date(), size: 0 }), 0);
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    toURL() {
        let url = `entry-list://${this.rootType}`;
        if (this.devicePath) {
            url += `/${this.devicePath}`;
        }
        return url;
    }
    getParent(success, _error) {
        if (success) {
            setTimeout(() => success(this), 0);
        }
    }
    /**
     * @param entry that should be added as
     * child of this EntryList.
     * This method is specific to EntryList instance.
     */
    addEntry(entry) {
        this.children_.push(entry);
        // Only VolumeEntry can have prefix set because it sets on VolumeInfo,
        // which is then used on LocationInfo/PathComponent.
        const volumeEntry = entry;
        if (volumeEntry.typeName == 'VolumeEntry') {
            volumeEntry.setPrefix(this);
        }
    }
    /**
     * @return Returns a reader compatible with
     * DirectoryEntry.createReader (from Web Standards) that reads the children of
     * this EntryList instance.
     * This method is defined on DirectoryEntry.
     */
    createReader() {
        return new StaticReader(this.children_);
    }
    /**
     * This method is specific to VolumeEntry/EntryList instance.
     * Note: we compare the volumeId instead of the whole volumeInfo reference
     * because the same volume could be mounted multiple times and every time a
     * new volumeInfo is created.
     * @return index of entry on this EntryList or -1 if not found.
     */
    findIndexByVolumeInfo(volumeInfo) {
        return this.children_.findIndex(childEntry => childEntry.volumeInfo ?
            childEntry.volumeInfo.volumeId ===
                volumeInfo.volumeId :
            false);
    }
    /**
     * Removes the first volume with the given type.
     * @param volumeType desired type.
     * This method is specific to VolumeEntry/EntryList instance.
     * @return if entry was removed.
     */
    removeByVolumeType(volumeType) {
        const childIndex = this.children_.findIndex(childEntry => {
            const volumeInfo = childEntry.volumeInfo;
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
     * @param rootType to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     */
    removeAllByRootType(rootType) {
        this.children_ = this.children_.filter(entry => entry.rootType !== rootType);
    }
    /**
     * Removes all entries that match the volumeType.
     * @param volumeType to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     */
    removeAllByVolumeType(volumeType) {
        this.children_ = this.children_.filter(entry => entry.volumeType !== volumeType);
    }
    /**
     * Removes the entry.
     * @param entry to be removed.
     * This method is specific to EntryList and VolumeEntry instance.
     * @return true if entry was removed.
     */
    removeChildEntry(entry) {
        const childIndex = this.children_.findIndex(childEntry => isSameEntry(childEntry, entry));
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
     */
    get volumeType() {
        switch (this.rootType) {
            case RootType.MY_FILES:
                return VolumeType.DOWNLOADS;
            case RootType.DRIVE_FAKE_ROOT:
                return VolumeType.DRIVE;
            default:
                return null;
        }
    }
}
/**
 * A DirectoryEntry-like which represents a Volume, based on VolumeInfo.
 *
 * It uses composition to behave like a DirectoryEntry and proxies some calls
 * to its VolumeInfo instance.
 *
 * It's used to be able to add a volume as child of |EntryList| and make volume
 * displayable on file list.
 */
export class VolumeEntry extends FilesAppDirEntry {
    /** @param volumeInfo VolumeInfo for this entry. */
    constructor(volumeInfo) {
        super();
        this.volumeInfo = volumeInfo;
        /**
         * Additional entries that will be displayed together with this Volume's
         * entries.
         */
        this.children_ = [];
        this.disabled = false;
        this.rootEntry_ = this.volumeInfo.displayRoot;
        if (!this.rootEntry_) {
            this.volumeInfo.resolveDisplayRoot((displayRoot) => {
                this.rootEntry_ = displayRoot;
            });
        }
    }
    get typeName() {
        return 'VolumeEntry';
    }
    get volumeType() {
        return this.volumeInfo.volumeType;
    }
    get filesystem() {
        return this.rootEntry_ ? this.rootEntry_.filesystem : null;
    }
    /**
     * @return List of entries that are shown as
     *     children of this Volume in the UI, but are not
     * actually entries of the Volume.  E.g. 'Play files' is
     * shown as a child of 'My files'.  Use createReader to find
     * real child entries of the Volume's filesystem.
     */
    getUiChildren() {
        return this.children_;
    }
    get fullPath() {
        return this.rootEntry_ ? this.rootEntry_.fullPath : '';
    }
    get isDirectory() {
        return this.rootEntry_ ? this.rootEntry_.isDirectory : true;
    }
    get isFile() {
        return this.rootEntry_ ? this.rootEntry_.isFile : false;
    }
    /**
     * @see https://github.com/google/closure-compiler/blob/mastexterns/browser/fileapi.js
     * @param path Entry fullPath.
     */
    getDirectory(path, options, success, error) {
        if (!this.rootEntry_) {
            if (error) {
                setTimeout(() => error(new Error('Root entry not resolved yet')), 0);
            }
            return;
        }
        this.rootEntry_.getDirectory(path, options, success, error);
    }
    /**
     * @see https://github.com/google/closure-compiler/blob/mastexterns/browser/fileapi.js
     */
    getFile(path, options, success, error) {
        if (!this.rootEntry_) {
            if (error) {
                setTimeout(() => error(new Error('Root entry not resolved yet')), 0);
            }
            return;
        }
        this.rootEntry_.getFile(path, options, success, error);
    }
    get name() {
        return this.volumeInfo.label;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    toURL() {
        return this.rootEntry_?.toURL() ?? '';
    }
    /** String used to determine the icon. */
    get iconName() {
        if (this.volumeInfo.volumeType == VolumeType.GUEST_OS) {
            return vmTypeToIconName(this.volumeInfo.vmType);
        }
        if (this.volumeInfo.volumeType == VolumeType.DOWNLOADS) {
            return VolumeType.MY_FILES;
        }
        return this.volumeInfo.volumeType;
    }
    /**
     * callback, it returns itself since EntryList is intended to be used as
     * root node and the Web Standard says to do so.
     * @param _error callback, not used for this implementation.
     */
    getParent(success, _error) {
        if (success) {
            setTimeout(() => success(this), 0);
        }
    }
    getMetadata(success, error) {
        this.rootEntry_.getMetadata(success, error);
    }
    get isNativeType() {
        return true;
    }
    getNativeEntry() {
        return this.rootEntry_;
    }
    /**
     * @return Returns a reader from root entry, which is compatible with
     * DirectoryEntry.createReader (from Web Standards). This method is defined on
     * DirectoryEntry.
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
     * @param entry An entry to be used as prefix of this instance on breadcrumbs
     *     path, e.g. "My Files > Downloads", "My Files" is a prefixEntry on
     *     "Downloads" VolumeInfo.
     */
    setPrefix(entry) {
        this.volumeInfo.prefixEntry = entry;
    }
    /**
     * @param entry that should be added as child of this VolumeEntry. This method
     * is specific to VolumeEntry instance.
     */
    addEntry(entry) {
        this.children_.push(entry);
        // Only VolumeEntry can have prefix set because it sets on
        // VolumeInfo, which is then used on
        // LocationInfo/PathComponent.
        const volumeEntry = entry;
        if (volumeEntry.typeName == 'VolumeEntry') {
            volumeEntry.setPrefix(this);
        }
    }
    /**
     *     that's desired to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     * Note: we compare the volumeId instead of the whole volumeInfo reference
     * because the same volume could be mounted multiple times and every time a
     * new volumeInfo is created.
     * @return index of entry within VolumeEntry or -1 if not found.
     */
    findIndexByVolumeInfo(volumeInfo) {
        return this.children_.findIndex(childEntry => childEntry.volumeInfo?.volumeId ===
            volumeInfo.volumeId);
    }
    /**
     * Removes the first volume with the given type.
     * @param volumeType desired type.
     * This method is specific to VolumeEntry/EntryList instance.
     * @return if entry was removed.
     */
    removeByVolumeType(volumeType) {
        const childIndex = this.children_.findIndex(childEntry => {
            return childEntry.volumeInfo?.volumeType ===
                volumeType;
        });
        if (childIndex !== -1) {
            this.children_.splice(childIndex, 1);
            return true;
        }
        return false;
    }
    /**
     * Removes all entries that match the rootType.
     * @param rootType to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     */
    removeAllByRootType(rootType) {
        this.children_ = this.children_.filter(entry => entry.rootType !== rootType);
    }
    /**
     * Removes all entries that match the volumeType.
     * @param volumeType to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     */
    removeAllByVolumeType(volumeType) {
        this.children_ = this.children_.filter(entry => entry.volumeType !== volumeType);
    }
    /**
     * Removes the entry.
     * @param entry to be removed.
     * This method is specific to EntryList and VolumeEntry instance.
     * @return if entry was removed.
     */
    removeChildEntry(entry) {
        const childIndex = this.children_.findIndex(childEntry => isSameEntry(childEntry, entry));
        if (childIndex !== -1) {
            this.children_.splice(childIndex, 1);
            return true;
        }
        return false;
    }
}
/**
 * FakeEntry is used for entries that used only for UI, that weren't generated
 * by FileSystem API, like Drive, Downloads or Provided.
 */
export class FakeEntryImpl extends FakeEntry {
    /**
     * @param label Translated text to be displayed to user.
     * @param rootType Root type of this entry. used on Recents to filter the
     *    source of recent files/directories. used on Recents to filter recent
     *    files by their file types.
     * @param sourceRestriction Used to communicate restrictions about sources to
     * chrome.fileManagerPrivate.getRecentFiles API.
     * @param fileCategory Used to communicate file-type filter to
     * chrome.fileManagerPrivate.getRecentFiles API.
     */
    constructor(label, rootType, sourceRestriction, fileCategory) {
        super(label, rootType, sourceRestriction, fileCategory);
    }
    get name() {
        return this.label;
    }
    get fullPath() {
        return '/';
    }
    /**
     * FakeEntry is used as root, so doesn't have a parent and should return
     * itself. callback, it returns itself since EntryList is intended to be used
     * as root node and the Web Standard says to do so.
     * @param _error callback, not used for this implementation.
     */
    getParent(success, _error) {
        if (success) {
            setTimeout(() => success(this), 0);
        }
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    toURL() {
        let url = `fake-entry://${this.rootType}`;
        if (this.fileCategory) {
            url += `/${this.fileCategory}`;
        }
        return url;
    }
    /**
     * @return List of entries that are shown as children of this Volume in the
     *     UI, but are not actually entries of the Volume.  E.g. 'Play files' is
     *     shown as a child of 'My files'.
     */
    getUiChildren() {
        return [];
    }
    /** String used to determine the icon. */
    get iconName() {
        // When Drive volume isn't available yet, the
        // FakeEntry should show the "drive" icon.
        if (this.rootType === RootType.DRIVE_FAKE_ROOT) {
            return RootType.DRIVE;
        }
        return this.rootType ?? '';
    }
    getMetadata(success, _error) {
        setTimeout(() => success({ modificationTime: new Date(), size: 0 }), 0);
    }
    get isNativeType() {
        return false;
    }
    getNativeEntry() {
        return null;
    }
    /**
     * @return Returns a reader compatible with DirectoryEntry.createReader (from
     * Web Standards) that reads 0 entries.
     */
    createReader() {
        return new StaticReader([]);
    }
    /**
     * FakeEntry can be a placeholder for the real volume, if so this field will
     * be the volume type of the volume it represents.
     */
    get volumeType() {
        // Recent rootType has no corresponding volume
        // type, and it will throw error in the below
        // getVolumeTypeFromRootType() call, we need to
        // return null here.
        if (this.rootType === RootType.RECENT) {
            return null;
        }
        return getVolumeTypeFromRootType(this.rootType);
    }
}
/**
 * GuestOsPlaceholder is used for placeholder entries in the UI, representing
 * Guest OSs (e.g. Crostini) that could be mounted but aren't yet.
 */
export class GuestOsPlaceholder extends FakeEntryImpl {
    /**
     * @param label Translated text to be displayed to user.
     * @param guest_id Id of the guest
     * @param vm_type Type of the underlying VM
     */
    constructor(label, guest_id, vm_type) {
        super(label, RootType.GUEST_OS);
        this.guest_id = guest_id;
        this.vm_type = vm_type;
    }
    get typeName() {
        return 'GuestOsPlaceholder';
    }
    /** String used to determine the icon. */
    get iconName() {
        return vmTypeToIconName(this.vm_type);
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    toURL() {
        return `fake-entry://guest-os/${this.guest_id}`;
    }
    get volumeType() {
        if (this.vm_type === chrome.fileManagerPrivate.VmType.ARCVM) {
            return VolumeType.ANDROID_FILES;
        }
        return VolumeType.GUEST_OS;
    }
}
