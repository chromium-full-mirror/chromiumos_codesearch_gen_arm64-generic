// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { DialogType } from '../../externs/ts/state.js';
import { AllowedPaths } from './volume_manager_types.js';
/**
 * FilesAppState is used in 2 ways:
 *
 * 1. Persist in the localStorage the some state, like current directory,
 * sorting column options, etc.
 *
 * 2. To open a new window:
 * 2.1, Requests to open a new window set part of these options to configure the
 * how the new window should behave.
 * 2.2  When the Files app extension is restarted, the background page retrieves
 * the last state from localStorage for each opened window and re-spawn the
 * windows with their state.
 */
export class FilesAppState {
}
