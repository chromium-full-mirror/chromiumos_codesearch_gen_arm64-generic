// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export const DISABLE_NEXT_BUTTON = 'disable-next-button';
export const DISABLE_ALL_BUTTONS = 'disable-all-buttons';
export const ENABLE_ALL_BUTTONS = 'enable-all-buttons';
export const TRANSITION_STATE = 'transition-state';
export const CLICK_NEXT_BUTTON = 'click-next-button';
export const CLICK_EXIT_BUTTON = 'click-exit-button';
export const SET_NEXT_BUTTON_LABEL = 'set-next-button-label';
export const CLICK_REPAIR_COMPONENT_BUTTON = 'click-repair-component-button';
export const CLICK_CALIBRATION_COMPONENT_BUTTON = 'click-calibration-component-button';
export const FATAL_HARDWARE_ERROR = 'fatal-hardware-error';
export const OPEN_LOGS_DIALOG = 'open-logs-dialog';
/**
 * Constructs a CustomEvent with the given event type and details.
 * The event will bubble up through elements and components.
 */
export function createCustomEvent(type, detail) {
    return new CustomEvent(type, { bubbles: true, composed: true, detail });
}
