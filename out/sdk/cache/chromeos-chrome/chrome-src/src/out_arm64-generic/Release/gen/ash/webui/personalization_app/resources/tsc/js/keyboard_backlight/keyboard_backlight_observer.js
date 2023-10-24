// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { KeyboardBacklightObserverReceiver } from '../../personalization_app.mojom-webui.js';
import { PersonalizationStore } from '../personalization_store.js';
import { setCurrentBacklightStateAction, setWallpaperColorAction } from './keyboard_backlight_actions.js';
import { getKeyboardBacklightProvider } from './keyboard_backlight_interface_provider.js';
/** @fileoverview listens for updates on keyboard backlight settings changes. */
let instance = null;
/**
 * Observes keyboard backlight changes and saves updates to
 * PersonalizationStore.
 */
export class KeyboardBacklightObserver {
    constructor() {
        this.receiver_ = this.initReceiver_(getKeyboardBacklightProvider());
    }
    static initKeyboardBacklightObserverIfNeeded() {
        if (!instance) {
            instance = new KeyboardBacklightObserver();
        }
    }
    static shutdown() {
        if (instance) {
            instance.receiver_.$.close();
            instance = null;
        }
    }
    initReceiver_(keyboardBacklightProvider) {
        const receiver = new KeyboardBacklightObserverReceiver(this);
        keyboardBacklightProvider.setKeyboardBacklightObserver(receiver.$.bindNewPipeAndPassRemote());
        return receiver;
    }
    onBacklightStateChanged(currentBacklightState) {
        const store = PersonalizationStore.getInstance();
        store.dispatch(setCurrentBacklightStateAction(currentBacklightState));
    }
    onWallpaperColorChanged(wallpaperColor) {
        const store = PersonalizationStore.getInstance();
        store.dispatch(setWallpaperColorAction(wallpaperColor));
    }
}
