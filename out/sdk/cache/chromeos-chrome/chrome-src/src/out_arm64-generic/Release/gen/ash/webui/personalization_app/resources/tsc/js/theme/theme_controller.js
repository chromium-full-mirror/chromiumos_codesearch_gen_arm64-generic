// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ColorScheme } from '../../color_scheme.mojom-webui.js';
import { setColorModeAutoScheduleEnabledAction, setColorSchemeAction, setDarkModeEnabledAction, setSampleColorSchemesAction, setStaticColorAction } from './theme_actions.js';
/**
 * @fileoverview contains all of the functions to interact with C++ side through
 * mojom calls. Handles setting |PersonalizationStore| state in response to
 * mojom data.
 */
export async function initializeData(provider, store) {
    const [{ enabled }, { darkModeEnabled }] = await Promise.all([
        provider.isColorModeAutoScheduleEnabled(),
        provider.isDarkModeEnabled(),
    ]);
    store.beginBatchUpdate();
    store.dispatch(setDarkModeEnabledAction(darkModeEnabled));
    store.dispatch(setColorModeAutoScheduleEnabledAction(enabled));
    store.endBatchUpdate();
}
export async function initializeDynamicColorData(provider, store) {
    const [{ staticColor }, { colorScheme }, { sampleColorSchemes }] = await Promise.all([
        provider.getStaticColor(),
        provider.getColorScheme(),
        provider.generateSampleColorSchemes(),
    ]);
    store.beginBatchUpdate();
    store.dispatch(setStaticColorAction(staticColor));
    store.dispatch(setColorSchemeAction(colorScheme));
    store.dispatch(setSampleColorSchemesAction(sampleColorSchemes));
    store.endBatchUpdate();
}
// Disables or enables dark color mode.
export function setColorModePref(darkModeEnabled, provider, store) {
    provider.setColorModePref(darkModeEnabled);
    // Dispatch action to highlight color mode.
    store.dispatch(setDarkModeEnabledAction(darkModeEnabled));
}
// Disables or enables color mode auto schedule.
export function setColorModeAutoSchedule(enabled, provider, store) {
    provider.setColorModeAutoScheduleEnabled(enabled);
    // Dispatch action to highlight auto color mode.
    store.dispatch(setColorModeAutoScheduleEnabledAction(enabled));
}
export function setColorSchemePref(colorScheme, provider, store) {
    provider.setColorScheme(colorScheme);
    store.dispatch(setColorSchemeAction(colorScheme));
}
export function setStaticColorPref(staticColor, provider, store) {
    provider.setStaticColor(staticColor);
    store.dispatch(setStaticColorAction(staticColor));
    store.dispatch(setColorSchemeAction(ColorScheme.kStatic));
}
