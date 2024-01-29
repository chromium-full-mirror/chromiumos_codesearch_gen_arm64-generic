// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { AllowedPaths } from '../../common/js/volume_manager_types.js';
import { DialogType } from '../../state/state.js';
/**
 * Parsed options used to launch a new Files app window.
 */
export class LaunchParam {
    constructor(unformatted) {
        this.type = unformatted.type || DialogType.FULL_PAGE;
        this.currentDirectoryURL = unformatted.currentDirectoryURL ?? '';
        this.selectionURL = unformatted.selectionURL ?? '';
        this.targetName = unformatted.targetName ?? '';
        this.typeList = unformatted.typeList ?? [];
        this.includeAllFiles = !!unformatted.includeAllFiles;
        this.allowedPaths =
            unformatted.allowedPaths ?? AllowedPaths.ANY_PATH_OR_URL;
        this.searchQuery = unformatted.searchQuery ?? '';
        this.showAndroidPickerApps = !!unformatted.showAndroidPickerApps;
        this.volumeFilter = unformatted.volumeFilter ?? [];
    }
}
