// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The element for displaying a list of albums.
 */
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import '../../css/common.css.js';
import { assert } from 'chrome://resources/js/assert.js';
import { TopicSource } from '../../personalization_app.mojom-webui.js';
import { WithPersonalizationStore } from '../personalization_store.js';
import { getCountText, isRecentHighlightsAlbum } from '../utils.js';
import { getTemplate } from './album_list_element.html.js';
export class AlbumListElement extends WithPersonalizationStore {
    static get is() {
        return 'album-list';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            topicSource: TopicSource,
            /**
             * List of albums received from the client.
             */
            albums: {
                type: Array,
                value: null,
                observer: 'onAlbumsChanged_',
            },
            /**
             * List of albums used for iron-list rendering.
             */
            albumsForDisplay_: {
                type: Array,
                value: [],
            },
        };
    }
    onAlbumsChanged_(albums) {
        if (!albums) {
            return;
        }
        // `albumsForDisplay_` is updated in place to avoid complete re-rendering of
        // iron-list, which would cause the tabindex to reset. See b/291123326.
        this.updateList(
        /*propertyPath=*/ 'albumsForDisplay_', 
        /*identityGetter=*/
        (album) => album.id, 
        /*newList=*/ albums, 
        /*identityBasedUpdate=*/ true);
    }
    /** Invoked on selection of an album. */
    onAlbumSelected_(e) {
        // Retrieve the actual instance of selected album from `albums`.
        const albumIndex = this.albums.findIndex(album => album.id === e.model.album.id);
        assert(albumIndex >= 0);
        const albumChanged = this.albums[albumIndex];
        if (this.topicSource === TopicSource.kVideo && albumChanged.checked) {
            // De-selecting a selected video album is a no-op. Selecting a different
            // video album will unselect the other video albums in the client.
            return;
        }
        albumChanged.checked = !albumChanged.checked;
        this.dispatchEvent(new CustomEvent('album_selected_changed', { bubbles: true, composed: true, detail: { album: albumChanged } }));
    }
    isAlbumSelected_(changedAlbum, albums) {
        if (!changedAlbum) {
            return false;
        }
        const album = albums.find(album => album.id === changedAlbum.id);
        return !!album && album.checked;
    }
    getAlbumItemClass_(album, albums) {
        return album && this.isAlbumSelected_(album, albums) ?
            'album album-selected' :
            'album';
    }
    /** Returns the secondary text to display for the specified |album|. */
    getSecondaryText_(album, topicSource) {
        if (!album) {
            return '';
        }
        if (topicSource === TopicSource.kGooglePhotos) {
            if (isRecentHighlightsAlbum(album)) {
                return this.i18n('ambientModeAlbumsSubpageRecentHighlightsDesc');
            }
            return getCountText(album.numberOfPhotos);
        }
        if (this.topicSource === TopicSource.kArtGallery ||
            this.topicSource === TopicSource.kVideo) {
            return album.description;
        }
        return '';
    }
    getAriaIndex_(index) {
        return index + 1;
    }
    isGooglePhotos_(topicSource) {
        return topicSource === TopicSource.kGooglePhotos;
    }
    isVideo_(topicSource) {
        return topicSource === TopicSource.kVideo;
    }
}
customElements.define(AlbumListElement.is, AlbumListElement);
