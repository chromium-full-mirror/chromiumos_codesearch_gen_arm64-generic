// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The ambient albums subpage is to select personal albums in
 * Google Photos or categories in Art gallery.
 */
import 'chrome://resources/cr_components/localized_link/localized_link.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './album_list_element.js';
import './art_album_dialog_element.js';
import '../../css/common.css.js';
import { assert } from 'chrome://resources/js/assert.js';
import { TopicSource } from '../../personalization_app.mojom-webui.js';
import { PersonalizationRouterElement } from '../personalization_router_element.js';
import { WithPersonalizationStore } from '../personalization_store.js';
import { getNumberOfGridItemsPerRow, getZerosArray, isNonEmptyArray } from '../utils.js';
import { getTemplate } from './albums_subpage_element.html.js';
import { setAlbumSelected } from './ambient_controller.js';
import { getAmbientProvider } from './ambient_interface_provider.js';
import { AmbientObserver } from './ambient_observer.js';
/** Height in pixels of a tile. */
const kTileHeightPx = 136;
export class AlbumsSubpageElement extends WithPersonalizationStore {
    constructor() {
        super(...arguments);
        this.albums = null;
    }
    static get is() {
        return 'albums-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            topicSource: TopicSource,
            albums: {
                type: Array,
                // Set to null to differentiate from an empty album.
                value: null,
            },
            ambientModeEnabled_: {
                type: Boolean,
                observer: 'onAmbientModeEnabledChanged_',
            },
            showArtAlbumDialog_: {
                type: Boolean,
                value: false,
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('album_selected_changed', this.onAlbumSelectedChanged_.bind(this));
    }
    connectedCallback() {
        super.connectedCallback();
        AmbientObserver.initAmbientObserverIfNeeded();
        this.watch('ambientModeEnabled_', state => state.ambient.ambientModeEnabled);
        this.updateFromStore();
        getAmbientProvider().fetchSettingsAndAlbums();
    }
    shouldShowContent_() {
        return this.ambientModeEnabled_ !== null && this.ambientModeEnabled_;
    }
    getTitleInnerHtml_() {
        switch (this.topicSource) {
            case TopicSource.kGooglePhotos:
                return this.i18nAdvanced('ambientModeAlbumsSubpageGooglePhotosTitle');
            case TopicSource.kArtGallery:
                return this.i18n('ambientModeTopicSourceArtGalleryDescription');
            case TopicSource.kVideo:
                return this.i18n('ambientModeTopicSourceVideoDescription');
        }
    }
    /**
     * List of loading tiles to be displayed to the user when albums are loading.
     */
    getLoadingTiles_() {
        const x = getNumberOfGridItemsPerRow();
        const y = Math.floor(this.offsetHeight / kTileHeightPx);
        return getZerosArray(x * y);
    }
    loadingAlbums_() {
        return this.albums === null || this.topicSource === null;
    }
    showNoGoogleAlbums_() {
        if (this.topicSource !== TopicSource.kGooglePhotos) {
            return false;
        }
        return !isNonEmptyArray(this.albums);
    }
    onAlbumSelectedChanged_(event) {
        const albumChanged = event.detail.album;
        if (this.topicSource === TopicSource.kArtGallery) {
            const anySelected = this.albums.some(album => album.checked);
            // For art gallery, cannot deselect all the albums. Show a dialog to users
            // and select the album automatically.
            if (!anySelected) {
                this.showArtAlbumDialog_ = true;
                const albumIndex = this.albums.findIndex(album => album.id === albumChanged.id);
                assert(albumIndex >= 0);
                this.set(`albums.${albumIndex}.checked`, true);
                return;
            }
        }
        setAlbumSelected(albumChanged, getAmbientProvider(), this.getStore());
    }
    onArtAlbumDialogClose_() {
        this.showArtAlbumDialog_ = false;
    }
    onAmbientModeEnabledChanged_(ambientModeEnabled) {
        if (ambientModeEnabled !== null && !ambientModeEnabled) {
            PersonalizationRouterElement.reloadAtAmbient();
        }
    }
}
customElements.define(AlbumsSubpageElement.is, AlbumsSubpageElement);
