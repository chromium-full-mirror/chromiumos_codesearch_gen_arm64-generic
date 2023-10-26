// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { isOneDriveId } from '../../common/js/entry_utils.js';
import '../../common/js/files_app_entry_types.js';
import { VolumeManagerCommon } from '../../common/js/volume_manager_types.js';
import '../../externs/files_app_entry_interfaces.js';
import { NavigationSection, NavigationType } from '../../externs/ts/state.js';
import { Slice } from '../../lib/base_store.js';
import { getMyFiles } from '../ducks/all_entries.js';
import { driveRootEntryListKey, recentRootKey, trashRootKey } from '../ducks/volumes.js';
import { getEntry, getFileData } from '../store.js';
/**
 * @fileoverview Navigation slice of the store.
 * @suppress {checkTypes}
 */
const slice = new Slice('navigation');
export { slice as navigationSlice };
const VolumeType = VolumeManagerCommon.VolumeType;
const sections = new Map();
// My Files.
sections.set(VolumeType.DOWNLOADS, NavigationSection.MY_FILES);
// Cloud.
sections.set(VolumeType.DRIVE, NavigationSection.CLOUD);
sections.set(VolumeType.SMB, NavigationSection.CLOUD);
sections.set(VolumeType.PROVIDED, NavigationSection.CLOUD);
sections.set(VolumeType.DOCUMENTS_PROVIDER, NavigationSection.CLOUD);
// Removable.
sections.set(VolumeType.REMOVABLE, NavigationSection.REMOVABLE);
sections.set(VolumeType.MTP, NavigationSection.REMOVABLE);
sections.set(VolumeType.ARCHIVE, NavigationSection.REMOVABLE);
/** Returns the entry for the volume's top-most prefix or the volume itself. */
function getPrefixEntryOrEntry(state, volume) {
    if (volume.prefixKey) {
        const entry = getEntry(state, volume.prefixKey);
        return entry;
    }
    if (volume.volumeType === VolumeType.DOWNLOADS) {
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
export const refreshNavigationRoots = slice.addReducer('refresh-roots', refreshNavigationRootsReducer);
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
        [VolumeType.SMB]: 1,
        [VolumeType.PROVIDED]: 2,
        [VolumeType.DOCUMENTS_PROVIDER]: 3,
        [VolumeType.REMOVABLE]: 4,
        [VolumeType.ARCHIVE]: 5,
        [VolumeType.MTP]: 6,
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
            !(v.volumeType === VolumeType.DOWNLOADS ||
                v.volumeType === VolumeType.DRIVE ||
                v.volumeType === VolumeType.MEDIA_VIEW));
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
export const updateNavigationEntry = slice.addReducer('update-entry', updateNavigationEntryReducer);
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
