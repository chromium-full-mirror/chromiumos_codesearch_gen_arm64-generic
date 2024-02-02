// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Helpers for APIs used within Files app.
 */
import { FilesAppDirEntry, FilesAppEntry } from '../../common/js/files_app_entry_types.js';
import { unwrapEntry } from './entry_utils.js';
import { promisify } from './util.js';
/**
 * Opens a new window for Files SWA.
 */
export async function openWindow(params) {
    return promisify(chrome.fileManagerPrivate.openWindow, params);
}
export async function resolveIsolatedEntries(isolatedEntries) {
    return promisify(chrome.fileManagerPrivate.resolveIsolatedEntries, isolatedEntries.map(e => unwrapEntry(e)));
}
export async function getPreferences() {
    return promisify(chrome.fileManagerPrivate.getPreferences);
}
export async function validatePathNameLength(parentEntry, name) {
    return promisify(chrome.fileManagerPrivate.validatePathNameLength, unwrapEntry(parentEntry), name);
}
/**
 * Wrap the chrome.fileManagerPrivate.getSizeStats function in an async/await
 * compatible style.
 */
export async function getSizeStats(volumeId) {
    return promisify(chrome.fileManagerPrivate.getSizeStats, volumeId);
}
/**
 * Wrap the chrome.fileManagerPrivate.getDriveQuotaMetadata function in an
 * async/await compatible style.
 */
export async function getDriveQuotaMetadata(entry) {
    return promisify(chrome.fileManagerPrivate.getDriveQuotaMetadata, unwrapEntry(entry));
}
/**
 * Retrieves the current holding space state, for example the list of items the
 * holding space currently contains.
 */
export async function getHoldingSpaceState() {
    return promisify(chrome.fileManagerPrivate.getHoldingSpaceState);
}
/**
 * Wrap the chrome.fileManagerPrivate.getDisallowedTransfers function in an
 * async/await compatible style.
 */
export async function getDisallowedTransfers(entries, destinationEntry, isMove) {
    return promisify(chrome.fileManagerPrivate.getDisallowedTransfers, entries.map(e => unwrapEntry(e)), unwrapEntry(destinationEntry), isMove);
}
/**
 * Wrap the chrome.fileManagerPrivate.getDlpMetadata function in an async/await
 * compatible style.
 */
export async function getDlpMetadata(entries) {
    return promisify(chrome.fileManagerPrivate.getDlpMetadata, entries.map(e => unwrapEntry(e)));
}
/**
 * Retrieves the list of components to which the transfer of an Entry is blocked
 * by Data Leak Prevention (DLP) policy.
 */
export async function getDlpBlockedComponents(sourceUrl) {
    return promisify(chrome.fileManagerPrivate.getDlpBlockedComponents, sourceUrl);
}
/**
 * Retrieves Data Leak Prevention (DLP) restriction details.
 */
export async function getDlpRestrictionDetails(sourceUrl) {
    return promisify(chrome.fileManagerPrivate.getDlpRestrictionDetails, sourceUrl);
}
/**
 * Retrieves the caller that created the dialog (Save As/File Picker).
 */
export async function getDialogCaller() {
    return promisify(chrome.fileManagerPrivate.getDialogCaller);
}
/**
 * Lists Guest OSs which support having their files mounted.
 */
export async function listMountableGuests() {
    return promisify(chrome.fileManagerPrivate.listMountableGuests);
}
/**
 * Lists Guest OSs which support having their files mounted.
 */
export async function mountGuest(id) {
    return promisify(chrome.fileManagerPrivate.mountGuest, id);
}
/*
 * FileSystemEntry helpers
 */
export async function getParentEntry(entry) {
    return new Promise((resolve, reject) => {
        entry.getParent(resolve, reject);
    });
}
export async function moveEntryTo(entry, parent, newName) {
    return new Promise((resolve, reject) => {
        entry.moveTo(parent, newName, resolve, reject);
    });
}
export async function getFile(directory, filename, options) {
    return new Promise((resolve, reject) => {
        directory.getFile(filename, options, resolve, reject);
    });
}
export async function getDirectory(directory, filename, options) {
    return new Promise((resolve, reject) => {
        directory.getDirectory(filename, options, resolve, reject);
    });
}
export async function getEntry(directory, filename, isFile, options) {
    const getEntry = isFile ? getFile : getDirectory;
    return getEntry(directory, filename, options);
}
/**
 * Starts an IOTask of `type` and returns a taskId that can be used to cancel
 * or identify the ongoing IO operation.
 */
export async function startIOTask(type, entries, params) {
    if (params.destinationFolder) {
        params.destinationFolder =
            unwrapEntry(params.destinationFolder);
    }
    return promisify(chrome.fileManagerPrivate.startIOTask, type, entries.map(e => unwrapEntry(e)), params);
}
/**
 * Parses .trashinfo files to retrieve the restore path and deletion date.
 */
export async function parseTrashInfoFiles(entries) {
    return promisify(chrome.fileManagerPrivate.parseTrashInfoFiles, entries.map(e => unwrapEntry(e)));
}
export async function getMimeType(entry) {
    return promisify(chrome.fileManagerPrivate.getMimeType, unwrapEntry(entry));
}
export async function getFileTasks(entries, dlpSourceUrls) {
    return promisify(chrome.fileManagerPrivate.getFileTasks, entries.map(e => unwrapEntry(e)), dlpSourceUrls);
}
export async function executeTask(taskDescriptor, entries) {
    return promisify(chrome.fileManagerPrivate.executeTask, taskDescriptor, entries.map(e => unwrapEntry(e)));
}
/**
 * Returns unique parent directories of provided entries. Note: this assumes
 * all provided entries are from the same filesystem.
 */
export async function getUniqueParents(entries) {
    if (entries.length === 0) {
        return [];
    }
    const root = entries[0].filesystem.root;
    const uniquePaths = entries.reduce((paths, entry) => {
        const parts = entry.fullPath.split('/').slice(0, -1);
        while (parts.length > 1) {
            const path = parts.join('/');
            if (paths.has(path)) {
                return paths;
            }
            paths.add(path);
            parts.pop();
        }
        return paths;
    }, new Set());
    return Promise.all([...uniquePaths].map((path) => getDirectory(root, path, undefined)));
}
/**
 * Gets the current bulk pin progress status.
 */
export async function getBulkPinProgress() {
    return promisify(chrome.fileManagerPrivate.getBulkPinProgress);
}
/**
 * Starts calculating the required space to pin all the users items on their My
 * drive.
 */
export async function calculateBulkPinRequiredSpace() {
    return promisify(chrome.fileManagerPrivate.calculateBulkPinRequiredSpace);
}
/**
 * Wrap the chrome.fileManagerPrivate.getDriveConnectionStatus function in an
 * async/await compatible style.
 */
export async function getDriveConnectionState() {
    return promisify(chrome.fileManagerPrivate.getDriveConnectionState);
}
export async function grantAccess(entries) {
    return promisify(chrome.fileManagerPrivate.grantAccess, entries);
}
export async function getContentMimeType(fileEntry) {
    return promisify(chrome.fileManagerPrivate.getContentMimeType, fileEntry);
}
export async function getContentMetadata(fileEntry, mimeType, includeImages) {
    return promisify(chrome.fileManagerPrivate.getContentMetadata, fileEntry, mimeType, includeImages);
}
export async function getEntryProperties(entries, properties) {
    return promisify(chrome.fileManagerPrivate.getEntryProperties, entries.map(unwrapEntry), properties);
}
