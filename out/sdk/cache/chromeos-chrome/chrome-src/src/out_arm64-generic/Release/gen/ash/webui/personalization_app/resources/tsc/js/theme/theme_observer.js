// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ThemeObserverReceiver } from '../../personalization_app.mojom-webui.js';
import { PersonalizationStore } from '../personalization_store.js';
import { setColorModeAutoScheduleEnabledAction, setColorSchemeAction, setDarkModeEnabledAction, setGeolocationPermissionEnabledAction, setSampleColorSchemesAction, setStaticColorAction } from './theme_actions.js';
import { getThemeProvider } from './theme_interface_provider.js';
/** @fileoverview listens for updates on color mode changes. */
let instance = null;
/**
 * Observes color mode changes and saves updates to PersonalizationStore.
 */
export class ThemeObserver {
    constructor() {
        this.receiver_ = this.initReceiver_(getThemeProvider());
    }
    static initThemeObserverIfNeeded() {
        if (!instance) {
            instance = new ThemeObserver();
        }
    }
    static shutdown() {
        if (instance) {
            instance.receiver_.$.close();
            instance = null;
        }
    }
    initReceiver_(themeProvider) {
        const receiver = new ThemeObserverReceiver(this);
        themeProvider.setThemeObserver(receiver.$.bindNewPipeAndPassRemote());
        return receiver;
    }
    onColorModeChanged(darkModeEnabled) {
        const store = PersonalizationStore.getInstance();
        store.dispatch(setDarkModeEnabledAction(darkModeEnabled));
    }
    onColorModeAutoScheduleChanged(enabled) {
        const store = PersonalizationStore.getInstance();
        store.dispatch(setColorModeAutoScheduleEnabledAction(enabled));
    }
    onColorSchemeChanged(scheme) {
        const store = PersonalizationStore.getInstance();
        store.dispatch(setColorSchemeAction(scheme));
    }
    onSampleColorSchemesChanged(sampleColorSchemes) {
        const store = PersonalizationStore.getInstance();
        store.dispatch(setSampleColorSchemesAction(sampleColorSchemes));
    }
    onStaticColorChanged(staticColor) {
        const store = PersonalizationStore.getInstance();
        store.dispatch(setStaticColorAction(staticColor));
    }
    onGeolocationPermissionForSystemServicesChanged(enabled) {
        const store = PersonalizationStore.getInstance();
        store.dispatch(setGeolocationPermissionEnabledAction(enabled));
    }
}
