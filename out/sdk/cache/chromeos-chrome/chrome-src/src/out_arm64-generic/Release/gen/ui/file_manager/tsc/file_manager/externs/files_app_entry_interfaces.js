// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Interfaces for the Files app Entry Types.
 */
import { RootType, VolumeType } from '../common/js/volume_manager_types.js';
/**
 * FilesAppEntry represents a single Entry (file, folder or root) in the Files
 * app. Previously, we used the Entry type directly, but this limits the code to
 * only work with native Entry type which can't be instantiated in JS.
 * For now, Entry and FilesAppEntry should be used interchangeably.
 * See also FilesAppDirEntry for a folder-like interface.
 *
 * TODO(lucmult): Replace uses of Entry with FilesAppEntry implementations.
 */
export class FilesAppEntry {
    constructor(rootType = null) {
        this.rootType = rootType;
    }
    /**
     * @returns the class name of this object. It's a workaround for the fact that
     * an instance created in the foreground page and sent to the background page
     * can't be checked with `instanceof`.
     */
    get typeName() {
        return 'FilesAppEntry';
    }
    /**
     * This attribute is defined on Entry.
     * @return true if this entry represents a Directory-like entry, as
     * in have sub-entries and implements {createReader} method.
     */
    get isDirectory() {
        return false;
    }
    /**
     * This attribute is defined on Entry.
     * @return true if this entry represents a File-like entry.
     * Implementations of FilesAppEntry are expected to have this as true.
     * Whereas implementations of FilesAppDirEntry are expected to have this as
     * false.
     */
    get isFile() {
        return true;
    }
    get filesystem() {
        return null;
    }
    /**
     * This attribute is defined on Entry.
     * @return absolute path from the file system's root to the entry. It can also
     * be thought of as a path which is relative to the root directory, prepended
     * with a "/" character.
     */
    get fullPath() {
        return '';
    }
    /**
     * This attribute is defined on Entry.
     * @return the name of the entry (the final part of the path, after the last.
     */
    get name() {
        return '';
    }
    /** This method is defined on Entry. */
    getParent(_success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
    /** Gets metadata, such as "modificationTime" and "contentMimeType". */
    getMetadata(_success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
    /**
     * Returns true if this entry object has a native representation such as Entry
     * or DirectoryEntry, this means it can interact with VolumeManager.
     */
    get isNativeType() {
        return false;
    }
    /**
     * Returns a FileSystemEntry if this instance has one, returns null if it
     * doesn't have or the entry hasn't been resolved yet. It's used to unwrap a
     * FilesAppEntry to be able to send to FileSystem API or fileManagerPrivate.
     */
    getNativeEntry() {
        return null;
    }
    copyTo(_newParent, _newName, _success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
    moveTo(_newParent, _newName, _success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
    remove(_success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
}
/**
 * Interface with minimal API shared among different types of FilesAppDirEntry
 * and native DirectoryEntry. UI components should be able to display any
 * implementation of FilesAppEntry.
 *
 * FilesAppDirEntry represents a DirectoryEntry-like (folder or root) in the
 * Files app. It's a specialization of FilesAppEntry extending the behavior for
 * folder, which is basically the method createReader.
 * As in FilesAppEntry, FilesAppDirEntry should be interchangeable with Entry
 * and DirectoryEntry.
 */
export class FilesAppDirEntry extends FilesAppEntry {
    get typeName() {
        return 'FilesAppDirEntry';
    }
    get isDirectory() {
        return true;
    }
    get isFile() {
        return false;
    }
    /**
     * @return Returns a reader compatible with DirectoryEntry.createReader (from
     * Web Standards) that reads the children of this instance.
     *
     * This method is defined on DirectoryEntry.
     */
    createReader() {
        return {};
    }
    getFile(_path, _options, _success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
    getDirectory(_path, _options, _success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
    removeRecursively(_success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
}
/**
 * FakeEntry is used for entries that used only for UI, that weren't generated
 * by FileSystem API, like Drive, Downloads or Provided.
 */
export class FakeEntry extends FilesAppDirEntry {
    /**
     * @param label Translated text to be displayed to user.
     * @param rootType Root type of this entry. Used on Recents to filter the
     *    source of recent files/directories. Used on Recents to filter recent
     *    files by their file types.
     * @param sourceRestriction Used to communicate restrictions about sources to
     *   chrome.fileManagerPrivate.getRecentFiles API.
     * @param fileCategory Used to communicate category filter to
     *   chrome.fileManagerPrivate.getRecentFiles API.
     */
    constructor(label, rootType, sourceRestriction, fileCategory) {
        super(rootType);
        this.label = label;
        this.sourceRestriction = sourceRestriction;
        this.fileCategory = fileCategory;
        /**
         * FakeEntry can be disabled if it represents the placeholder of the real
         * volume.
         */
        this.disabled = false;
    }
    get typeName() {
        return 'FakeEntry';
    }
    get isDirectory() {
        return true;
    }
    get isFile() {
        return false;
    }
    /** String used to determine the icon. */
    get iconName() {
        return '';
    }
    /**
     * FakeEntry can be a placeholder for the real volume, if so
     * this field will be the volume type of the volume it
     * represents.
     */
    get volumeType() {
        return null;
    }
}
