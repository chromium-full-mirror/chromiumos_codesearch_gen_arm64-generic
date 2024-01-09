// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { NativeEventTarget as EventTarget } from 'chrome://resources/ash/common/event_target.js';
import { RootType } from '../../common/js/volume_manager_types.js';
import { FileFilter } from './directory_contents.js';
import { DirectoryModel } from './directory_model.js';
import { FileListModel } from './file_list_model.js';
/**
 * @return fake for unittests.
 */
function createFakeFileFilter() {
    /**
     * FileFilter fake.
     */
    class FakeFileFilter extends EventTarget {
        /**
         * @param entry File entry.
         * @return True if the file should be shown.
         */
        filter(_entry) {
            return true;
        }
    }
    return new FakeFileFilter();
}
/**
 * @return fake for unittests.
 */
export function createFakeDirectoryModel() {
    /**
     * DirectoryModel fake.
     */
    class FakeDirectoryModel extends EventTarget {
        constructor() {
            super();
            this.fileFilter_ = createFakeFileFilter();
        }
        /**
         * @return file filter.
         */
        getFileFilter() {
            return this.fileFilter_;
        }
        /**
         * @return Current directory.
         */
        getCurrentDirEntry() {
            return undefined;
        }
        getCurrentVolumeInfo() {
            return null;
        }
        getCurrentRootType() {
            return null;
        }
        getFileList() {
            return null;
        }
        /**
         * @param dirEntry The entry of the new
         *     directory to be changed to.
         * @param opt_callback Executed if the directory loads
         *     successfully.
         */
        changeDirectoryEntry(_dirEntry, callback) {
            if (callback) {
                callback();
            }
        }
        isReadOnly() {
            return false;
        }
        getFileListSelection() {
            return new EventTarget();
        }
    }
    return new FakeDirectoryModel();
}
