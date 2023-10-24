// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as AcceleratorActionTypes from '../mojom-webui/accelerator_actions.mojom-webui.js';
import * as AcceleratorKeysTypes from '../mojom-webui/accelerator_keys.mojom-webui.js';
import * as ExtendedFkeysModifierTypes from '../mojom-webui/extended_fkeys_modifier.mojom-webui.js';
import * as InputDeviceSettingsTypes from '../mojom-webui/input_device_settings.mojom-webui.js';
import * as ModifierKeyTypes from '../mojom-webui/modifier_key.mojom-webui.js';
import * as SimulateRightClickModifierTypes from '../mojom-webui/simulate_right_click_modifier.mojom-webui.js';
import * as SixPackShortcutModifierTypes from '../mojom-webui/six_pack_shortcut_modifier.mojom-webui.js';
export const MetaKey = InputDeviceSettingsTypes.MetaKey;
export const ModifierKey = ModifierKeyTypes.ModifierKey;
export const SimulateRightClickModifier = SimulateRightClickModifierTypes.SimulateRightClickModifier;
export const SixPackShortcutModifier = SixPackShortcutModifierTypes.SixPackShortcutModifier;
export const ExtendedFkeysModifier = ExtendedFkeysModifierTypes.ExtendedFkeysModifier;
export const TopRowActionKey = InputDeviceSettingsTypes.TopRowActionKey;
export var SixPackKey;
(function (SixPackKey) {
    SixPackKey["DELETE"] = "del";
    SixPackKey["INSERT"] = "insert";
    SixPackKey["PAGE_UP"] = "pageUp";
    SixPackKey["PAGE_DOWN"] = "pageDown";
    SixPackKey["HOME"] = "home";
    SixPackKey["END"] = "end";
})(SixPackKey || (SixPackKey = {}));
export var Fkey;
(function (Fkey) {
    Fkey["F11"] = "f11";
    Fkey["F12"] = "f12";
})(Fkey || (Fkey = {}));
export const PolicyStatus = InputDeviceSettingsTypes.PolicyStatus;
export const Vkey = AcceleratorKeysTypes.VKey;
export const AcceleratorAction = AcceleratorActionTypes.AcceleratorAction;
export const CustomizableButton = InputDeviceSettingsTypes.CustomizableButton;
export const StaticShortcutAction = InputDeviceSettingsTypes.StaticShortcutAction;
export const CustomizationRestriction = InputDeviceSettingsTypes.CustomizationRestriction;
