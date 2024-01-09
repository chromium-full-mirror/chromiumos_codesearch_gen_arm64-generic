// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { isNonEmptyArray } from 'chrome://resources/ash/common/sea_pen/sea_pen_utils.js';
import { AmbientObserverReceiver, TopicSource } from '../../personalization_app.mojom-webui.js';
import { isAmbientModeAllowed, isPersonalizationJellyEnabled } from '../load_time_booleans.js';
import { logGooglePhotosPreviewsLoadTime } from '../personalization_metrics_logger.js';
import { Paths } from '../personalization_router_element.js';
import { PersonalizationStore } from '../personalization_store.js';
import { isRecentHighlightsAlbum } from '../utils.js';
import { setAlbumsAction, setAmbientModeEnabledAction, setAmbientThemeAction, setAmbientUiVisibilityAction, setPreviewsAction, setScreenSaverDurationAction, setTemperatureUnitAction, setTopicSourceAction } from './ambient_actions.js';
import { getAmbientProvider } from './ambient_interface_provider.js';
/** @fileoverview listens for updates on ambient mode changes. */
let instance = null;
/**
 * Observes ambient mode changes and saves updates to PersonalizationStore.
 */
export class AmbientObserver {
    // Allow logging first load performance if the user began on a page where
    // preview images are loaded immediately.
    static { this.shouldLogPreviewsLoadPerformance = window.location.pathname === Paths.ROOT ||
        window.location.pathname === Paths.AMBIENT; }
    static initAmbientObserverIfNeeded() {
        if (isAmbientModeAllowed() && !instance) {
            instance = new AmbientObserver();
        }
    }
    static shutdown() {
        if (instance) {
            instance.receiver_.$.close();
            instance = null;
        }
    }
    constructor() {
        const provider = getAmbientProvider();
        this.receiver_ = this.initReceiver_(provider);
        provider.fetchSettingsAndAlbums();
    }
    initReceiver_(ambientProvider) {
        const receiver = new AmbientObserverReceiver(this);
        ambientProvider.setAmbientObserver(receiver.$.bindNewPipeAndPassRemote());
        return receiver;
    }
    onAmbientModeEnabledChanged(ambientModeEnabled) {
        // Only record google photos previews load performance if ambient mode
        // starts enabled.
        AmbientObserver.shouldLogPreviewsLoadPerformance =
            AmbientObserver.shouldLogPreviewsLoadPerformance && ambientModeEnabled;
        const store = PersonalizationStore.getInstance();
        store.dispatch(setAmbientModeEnabledAction(ambientModeEnabled));
    }
    onAmbientThemeChanged(ambientTheme) {
        const store = PersonalizationStore.getInstance();
        store.dispatch(setAmbientThemeAction(ambientTheme));
    }
    onScreenSaverDurationChanged(minutes) {
        const store = PersonalizationStore.getInstance();
        store.dispatch(setScreenSaverDurationAction(minutes));
    }
    onTopicSourceChanged(topicSource) {
        const store = PersonalizationStore.getInstance();
        // If the first time receiving `topicSource`, allow logging load
        // performance.
        AmbientObserver.shouldLogPreviewsLoadPerformance =
            AmbientObserver.shouldLogPreviewsLoadPerformance &&
                store.data.ambient.topicSource === null &&
                (topicSource === TopicSource.kGooglePhotos ||
                    isPersonalizationJellyEnabled());
        store.dispatch(setTopicSourceAction(topicSource));
    }
    onTemperatureUnitChanged(temperatureUnit) {
        const store = PersonalizationStore.getInstance();
        store.dispatch(setTemperatureUnitAction(temperatureUnit));
    }
    onAlbumsChanged(albums) {
        const store = PersonalizationStore.getInstance();
        // Prevent recent highlights album from constantly changing preview image
        // when albums are refreshed during a single session.
        const oldRecentHighlightsAlbum = (store.data.ambient.albums ||
            []).find(album => isRecentHighlightsAlbum(album));
        if (oldRecentHighlightsAlbum) {
            const newRecentHighlightsAlbum = albums.find(album => isRecentHighlightsAlbum(album));
            if (newRecentHighlightsAlbum) {
                // Edit by reference.
                newRecentHighlightsAlbum.url = oldRecentHighlightsAlbum.url;
            }
        }
        store.dispatch(setAlbumsAction(albums));
    }
    onPreviewsFetched(previews) {
        const store = PersonalizationStore.getInstance();
        // Only log performance metrics if this is the first time receiving google
        // photos previews.
        // When Jelly disabled: log google photos albums only.
        // When Jelly enabled: log both art galleries and google photos albums.
        AmbientObserver.shouldLogPreviewsLoadPerformance =
            AmbientObserver.shouldLogPreviewsLoadPerformance &&
                (!store.data.ambient.previews ||
                    store.data.ambient.previews.length === 0);
        store.dispatch(setPreviewsAction(previews));
        if (AmbientObserver.shouldLogPreviewsLoadPerformance &&
            isNonEmptyArray(previews)) {
            logGooglePhotosPreviewsLoadTime();
            AmbientObserver.shouldLogPreviewsLoadPerformance = false;
        }
    }
    onAmbientUiVisibilityChanged(ambientUiVisibility) {
        const store = PersonalizationStore.getInstance();
        store.dispatch(setAmbientUiVisibilityAction(ambientUiVisibility));
    }
}
