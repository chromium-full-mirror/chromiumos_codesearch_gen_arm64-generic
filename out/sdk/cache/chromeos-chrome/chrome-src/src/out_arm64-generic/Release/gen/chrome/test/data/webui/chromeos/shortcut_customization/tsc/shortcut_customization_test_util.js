// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { AcceleratorKeyState, AcceleratorState, AcceleratorType } from 'chrome://shortcut-customization/js/shortcut_types.js';
export function createStandardAcceleratorInfo(modifier, keycode, keyDisplay, locked = false) {
    return {
        layoutProperties: {
            standardAccelerator: {
                keyDisplay: keyDisplay,
                accelerator: {
                    modifiers: modifier,
                    keyCode: keycode,
                    keyState: AcceleratorKeyState.PRESSED,
                },
            },
        },
        locked: locked,
        state: AcceleratorState.kEnabled,
        type: AcceleratorType.kDefault,
    };
}
export function createTextAcceleratorInfo(parts, locked = false) {
    return {
        layoutProperties: {
            textAccelerator: {
                parts,
            },
        },
        locked,
        state: AcceleratorState.kEnabled,
        type: AcceleratorType.kDefault,
    };
}
export function createUserAcceleratorInfo(modifier, keycode, keyDisplay, locked = false) {
    return {
        layoutProperties: {
            standardAccelerator: {
                keyDisplay: keyDisplay,
                accelerator: {
                    modifiers: modifier,
                    keyCode: keycode,
                    keyState: AcceleratorKeyState.PRESSED,
                },
            },
        },
        locked: locked,
        state: AcceleratorState.kEnabled,
        type: AcceleratorType.kUser,
    };
}
export function createCustomStandardAcceleratorInfo(modifier, keycode, keyDisplay, state, locked = false) {
    return {
        layoutProperties: {
            standardAccelerator: {
                keyDisplay: keyDisplay,
                accelerator: {
                    modifiers: modifier,
                    keyCode: keycode,
                    keyState: AcceleratorKeyState.PRESSED,
                },
            },
        },
        locked: locked,
        state: state,
        type: AcceleratorType.kUser,
    };
}
export function createAliasedStandardAcceleratorInfo(modifier, keyCode, keyDisplay, state, originalAccelerator) {
    return {
        layoutProperties: {
            standardAccelerator: {
                keyDisplay: keyDisplay,
                accelerator: {
                    modifiers: modifier,
                    keyCode: keyCode,
                    keyState: AcceleratorKeyState.PRESSED,
                },
                originalAccelerator: originalAccelerator,
            },
        },
        locked: false,
        state: state,
        type: AcceleratorType.kUser,
    };
}
