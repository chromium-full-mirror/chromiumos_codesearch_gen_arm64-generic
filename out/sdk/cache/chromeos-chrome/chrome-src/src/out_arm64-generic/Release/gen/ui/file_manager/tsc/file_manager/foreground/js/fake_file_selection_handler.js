// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { NativeEventTarget as EventTarget } from 'chrome://resources/ash/common/event_target.js';
import { MockVolumeManager } from '../../background/js/mock_volume_manager.js';
import { AllowedPaths } from '../../common/js/volume_manager_types.js';
import { updateDirectoryContent, updateSelection } from '../../state/ducks/current_directory.js';
import { FileSelectionHandler } from './file_selection.js';
import { MockMetadataModel } from './metadata/mock_metadata.js';
import { createFakeDirectoryModel } from './mock_directory_model.js';
/**
 * Mock FileSelectionHandler.
 */
export class FakeFileSelectionHandler extends FileSelectionHandler {
    constructor() {
        super(createFakeDirectoryModel(), document.createElement('div'), new MockMetadataModel({}), new MockVolumeManager(), AllowedPaths.ANY_PATH);
        this.eventTarget_ = new EventTarget();
        this.selection = {};
        this.updateSelection([], []);
    }
    computeAdditionalCallback() { }
    updateSelection(entries, mimeTypes, store) {
        this.selection = {
            entries: entries,
            mimeTypes: mimeTypes,
            computeAdditional: async (_metadataModel) => {
                this.computeAdditionalCallback();
                return Promise.resolve(true);
            },
        };
        if (store) {
            // Make sure that the entry is in the directory content.
            store.dispatch(updateDirectoryContent({ entries }));
            // Mark the entry as selected.
            store.dispatch(updateSelection({
                selectedKeys: entries.map(e => e.toURL()),
                entries,
            }));
        }
    }
    addEventListener(...args) {
        return this.eventTarget_.addEventListener(...args);
    }
    isAvailable() {
        return true;
    }
}
