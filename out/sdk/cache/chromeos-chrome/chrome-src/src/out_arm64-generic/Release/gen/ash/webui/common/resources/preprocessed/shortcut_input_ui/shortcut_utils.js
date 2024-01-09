// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Refers to the state of an 'shortcut-input-key' item.
 */
export var KeyInputState;
(function (KeyInputState) {
    KeyInputState["NOT_SELECTED"] = "not-selected";
    KeyInputState["MODIFIER_SELECTED"] = "modifier-selected";
    KeyInputState["ALPHANUMERIC_SELECTED"] = "alpha-numeric-selected";
})(KeyInputState || (KeyInputState = {}));
export var Modifier;
(function (Modifier) {
    Modifier[Modifier["NONE"] = 0] = "NONE";
    Modifier[Modifier["SHIFT"] = 2] = "SHIFT";
    Modifier[Modifier["CONTROL"] = 4] = "CONTROL";
    Modifier[Modifier["ALT"] = 8] = "ALT";
    Modifier[Modifier["COMMAND"] = 16] = "COMMAND";
})(Modifier || (Modifier = {}));
export const Modifiers = [
    Modifier.SHIFT,
    Modifier.CONTROL,
    Modifier.ALT,
    Modifier.COMMAND,
];
export var AllowedModifierKeyCodes;
(function (AllowedModifierKeyCodes) {
    AllowedModifierKeyCodes[AllowedModifierKeyCodes["SHIFT"] = 16] = "SHIFT";
    AllowedModifierKeyCodes[AllowedModifierKeyCodes["CTRL"] = 17] = "CTRL";
    AllowedModifierKeyCodes[AllowedModifierKeyCodes["ALT"] = 18] = "ALT";
    AllowedModifierKeyCodes[AllowedModifierKeyCodes["META_LEFT"] = 91] = "META_LEFT";
    AllowedModifierKeyCodes[AllowedModifierKeyCodes["META_RIGHT"] = 92] = "META_RIGHT";
})(AllowedModifierKeyCodes || (AllowedModifierKeyCodes = {}));
export const ModifierKeyCodes = [
    AllowedModifierKeyCodes.SHIFT,
    AllowedModifierKeyCodes.ALT,
    AllowedModifierKeyCodes.CTRL,
    AllowedModifierKeyCodes.META_LEFT,
    AllowedModifierKeyCodes.META_RIGHT,
];
export const getSortedModifiers = (modifierStrings) => {
    const sortOrder = ['meta', 'ctrl', 'alt', 'shift'];
    if (modifierStrings.length <= 1) {
        return modifierStrings;
    }
    return modifierStrings.sort((a, b) => sortOrder.indexOf(a) - sortOrder.indexOf(b));
};
// The keys in this map are pulled from the file:
// ui/events/keycodes/dom/dom_code_data.inc
export const KeyToIconNameMap = {
    'ArrowDown': 'arrow-down',
    'ArrowLeft': 'arrow-left',
    'ArrowRight': 'arrow-right',
    'ArrowUp': 'arrow-up',
    'AudioVolumeDown': 'volume-down',
    'AudioVolumeMute': 'volume-mute',
    'AudioVolumeUp': 'volume-up',
    'BrightnessDown': 'display-brightness-down',
    'BrightnessUp': 'display-brightness-up',
    'BrowserBack': 'back',
    'BrowserForward': 'forward',
    'BrowserHome': 'browser-home',
    'BrowserRefresh': 'refresh',
    'BrowserSearch': 'browser-search',
    'ContextMenu': 'menu',
    'EmojiPicker': 'emoji-picker',
    'EnableOrToggleDictation': 'dictation-toggle',
    'KeyboardBacklightToggle': 'keyboard-brightness-toggle',
    'KeyboardBrightnessUp': 'keyboard-brightness-up',
    'KeyboardBrightnessDown': 'keyboard-brightness-down',
    'LaunchApplication1': 'overview',
    'LaunchApplication2': 'calculator',
    'LaunchAssistant': 'assistant',
    'LaunchMail': 'launch-mail',
    'MediaFastForward': 'fast-forward',
    'MediaPause': 'pause',
    'MediaPlay': 'play',
    'MediaPlayPause': 'play-pause',
    'MediaTrackNext': 'next-track',
    'MediaTrackPrevious': 'last-track',
    'MicrophoneMuteToggle': 'microphone-mute',
    'ModeChange': 'globe',
    'ViewAllApps': 'view-all-apps',
    'Power': 'power',
    'PrintScreen': 'screenshot',
    'PrivacyScreenToggle': 'electronic-privacy-screen',
    'Settings': 'settings-icon',
    'Standby': 'lock',
    'ZoomToggle': 'fullscreen',
};
