// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as AcceleratorTypes from 'chrome://resources/mojo/ui/base/accelerators/mojom/accelerator.mojom-webui.js';
import * as AcceleratorConfigurationTypes from '../mojom-webui/accelerator_configuration.mojom-webui.js';
import * as AcceleratorInfoTypes from '../mojom-webui/accelerator_info.mojom-webui.js';
import { SearchHandler } from '../mojom-webui/ash/webui/shortcut_customization_ui/backend/search/search.mojom-webui.js';
/**
 * @fileoverview
 * Type aliases for the mojo API.
 *
 * TODO(zentaro): When the fake API is replaced by mojo these can be
 * re-aliased to the corresponding mojo types, or replaced by them.
 */
/**
 * Modifier values are based off of ui::Accelerator. Must be kept in sync with
 * ui::Accelerator and ui::KeyEvent.
 */
export var Modifier;
(function (Modifier) {
    Modifier[Modifier["NONE"] = 0] = "NONE";
    Modifier[Modifier["SHIFT"] = 2] = "SHIFT";
    Modifier[Modifier["CONTROL"] = 4] = "CONTROL";
    Modifier[Modifier["ALT"] = 8] = "ALT";
    Modifier[Modifier["COMMAND"] = 16] = "COMMAND";
})(Modifier || (Modifier = {}));
/**
 * The actions that can be done in the accelerator edit dialog. These should
 * be consistent with the representation in
 * `ash/webui/shortcut_customization_ui/mojom/shortcut_customization.mojom`.
 */
export var EditAction;
(function (EditAction) {
    EditAction[EditAction["NONE"] = 0] = "NONE";
    EditAction[EditAction["ADD"] = 1] = "ADD";
    EditAction[EditAction["EDIT"] = 2] = "EDIT";
    EditAction[EditAction["REMOVE"] = 4] = "REMOVE";
    EditAction[EditAction["RESET"] = 8] = "RESET";
})(EditAction || (EditAction = {}));
export const TextAcceleratorPartType = AcceleratorInfoTypes.TextAcceleratorPartType;
export const AcceleratorSource = AcceleratorInfoTypes.AcceleratorSource;
export const AcceleratorType = AcceleratorInfoTypes.AcceleratorType;
export const AcceleratorState = AcceleratorInfoTypes.AcceleratorState;
export const AcceleratorKeyState = AcceleratorTypes.AcceleratorKeyState;
export const AcceleratorConfigResult = AcceleratorConfigurationTypes.AcceleratorConfigResult;
export const AcceleratorSubcategory = AcceleratorInfoTypes.AcceleratorSubcategory;
export const AcceleratorCategory = AcceleratorInfoTypes.AcceleratorCategory;
export const LayoutStyle = AcceleratorInfoTypes.AcceleratorLayoutStyle;
export const ShortcutSearchHandler = SearchHandler;
