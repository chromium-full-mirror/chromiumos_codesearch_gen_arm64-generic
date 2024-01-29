// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertFalse, assertTrue } from 'chrome://webui-test/chromeos/chai_assert.js';
import { MockVolumeManager } from '../../background/js/mock_volume_manager.js';
import { installMockChrome } from '../../common/js/mock_chrome.js';
import { RootType } from '../../common/js/volume_manager_types.js';
import { FileFilter } from './directory_contents.js';
import { DirectoryModel } from './directory_model.js';
import { MockMetadataModel } from './metadata/mock_metadata.js';
let onIOTaskProgressStatusCallback;
/**
 * Initializes the test environment.
 */
export function setUp() {
    /**
     * Mock chrome APIs.
     */
    const mockChrome = {
        fileManagerPrivate: {
            onIOTaskProgressStatus: {
                addListener(callback) {
                    onIOTaskProgressStatusCallback = callback;
                },
            },
        },
    };
    // Install mock chrome APIs.
    installMockChrome(mockChrome);
}
/**
 * Mock DirectoryModel's dependencies and return a DirectoryModel instance.
 *
 */
function getDirectoryModel() {
    const volumeManager = new MockVolumeManager();
    MockVolumeManager.installMockSingleton(volumeManager);
    const fileFilter = new FileFilter(volumeManager);
    const metadataModel = new MockMetadataModel({});
    return new DirectoryModel(false, fileFilter, metadataModel, volumeManager);
}
/**
 * Tests that the fake directory will be re-scanned after the delete and copy
 * operation.
 */
export function testRecanAfterDeletionForRecents() {
    const deleteEvent = {
        type: chrome.fileManagerPrivate.IoTaskType.DELETE,
        state: chrome.fileManagerPrivate.IoTaskState.SUCCESS,
    };
    const copyEvent = {
        type: chrome.fileManagerPrivate.IoTaskType.COPY,
        state: chrome.fileManagerPrivate.IoTaskState.SUCCESS,
    };
    const directoryModel = getDirectoryModel();
    let isRescanCalled = false;
    directoryModel.rescanLater = () => {
        isRescanCalled = true;
    };
    // Current directory is not Recent.
    directoryModel.getCurrentRootType = () => RootType.DOWNLOADS;
    onIOTaskProgressStatusCallback(deleteEvent);
    assertFalse(isRescanCalled);
    onIOTaskProgressStatusCallback(copyEvent);
    assertFalse(isRescanCalled);
    // Current directory is Recent.
    directoryModel.getCurrentRootType = () => RootType.RECENT;
    onIOTaskProgressStatusCallback(deleteEvent);
    assertTrue(isRescanCalled);
    isRescanCalled = false;
    onIOTaskProgressStatusCallback(copyEvent);
    assertTrue(isRescanCalled);
}
/**
 * Tests that the non-watchable volume will be re-scanned after each of
 * the IOTask operations.
 */
export function testRescanAfterIOTaskOperationOnlyForNonWatchableVolume() {
    const directoryModel = getDirectoryModel();
    let isRescanCalled = false;
    directoryModel.rescanLater = () => {
        isRescanCalled = true;
    };
    // Current directory is non-watchable.
    directoryModel.getCurrentVolumeInfo = () => {
        return {
            watchable: false,
        };
    };
    /** @type {!Array<!chrome.fileManagerPrivate.IoTaskType>} */
    const operations = [
        chrome.fileManagerPrivate.IoTaskType.COPY,
        chrome.fileManagerPrivate.IoTaskType.DELETE,
        chrome.fileManagerPrivate.IoTaskType.EMPTY_TRASH,
        chrome.fileManagerPrivate.IoTaskType.EXTRACT,
        chrome.fileManagerPrivate.IoTaskType.MOVE,
        chrome.fileManagerPrivate.IoTaskType.RESTORE,
        chrome.fileManagerPrivate.IoTaskType.RESTORE_TO_DESTINATION,
        chrome.fileManagerPrivate.IoTaskType.TRASH,
        chrome.fileManagerPrivate.IoTaskType.ZIP,
    ];
    for (const operation of operations) {
        const event = {
            type: operation,
            state: chrome.fileManagerPrivate.IoTaskState.SUCCESS,
        };
        isRescanCalled = false;
        onIOTaskProgressStatusCallback(event);
        assertTrue(isRescanCalled);
    }
}
