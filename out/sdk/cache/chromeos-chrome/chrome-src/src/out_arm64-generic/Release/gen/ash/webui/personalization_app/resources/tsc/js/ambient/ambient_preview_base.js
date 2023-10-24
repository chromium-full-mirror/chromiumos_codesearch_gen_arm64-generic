// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TopicSource } from '../../personalization_app.mojom-webui.js';
import { isAmbientModeAllowed, isPersonalizationJellyEnabled } from '../load_time_booleans.js';
import { setErrorAction } from '../personalization_actions.js';
import { WithPersonalizationStore } from '../personalization_store.js';
import { isNonEmptyArray } from '../utils.js';
import { AmbientObserver } from './ambient_observer.js';
import { getPhotoCount, getTopicSourceName } from './utils.js';
/**
 * Removes the resolution suffix at the end of an image (from character '=' to
 * the end) and replace it with a new resolution suffix.
 */
function replaceResolutionSuffix(url, resolution) {
    return url.replace(/=w[\w-]+$/, resolution);
}
export class AmbientPreviewBase extends WithPersonalizationStore {
    constructor() {
        super(...arguments);
        this.loadingTimeoutId_ = null;
    }
    static get properties() {
        return {
            ambientModeEnabled_: Boolean,
            albums_: {
                type: Array,
                value: null,
            },
            topicSource_: {
                type: Object,
                value: null,
            },
            previewAlbums_: {
                type: Array,
                computed: 'computePreviewAlbums_(albums_, topicSource_)',
            },
            firstPreviewAlbum_: {
                type: Object,
                computed: 'computeFirstPreviewAlbum_(previewAlbums_)',
            },
            loading_: {
                type: Boolean,
                computed: 'computeLoading_(isAmbientModeAllowed_, ambientModeEnabled_, albums_, topicSource_, previewImages_)',
                observer: 'onLoadingChanged_',
            },
            previewImages_: {
                type: Array,
                value: null,
            },
            isPersonalizationJellyEnabled_: {
                type: Boolean,
                value() {
                    return isPersonalizationJellyEnabled();
                },
            },
            isAmbientModeAllowed_: {
                type: Boolean,
                value() {
                    return isAmbientModeAllowed();
                },
            },
        };
    }
    ready() {
        super.ready();
        AmbientObserver.initAmbientObserverIfNeeded();
    }
    connectedCallback() {
        super.connectedCallback();
        this.watch('ambientModeEnabled_', state => state.ambient.ambientModeEnabled);
        this.watch('albums_', state => state.ambient.albums);
        this.watch('previewImages_', state => state.ambient.previews);
        this.watch('topicSource_', state => state.ambient.topicSource);
        this.updateFromStore();
    }
    computeLoading_() {
        if (!this.isAmbientModeAllowed_ || this.ambientModeEnabled_ === false) {
            return false;
        }
        return this.ambientModeEnabled_ === null || this.albums_ === null ||
            this.topicSource_ === null || this.previewImages_ === null;
    }
    onLoadingChanged_(value) {
        if (!value && this.loadingTimeoutId_) {
            window.clearTimeout(this.loadingTimeoutId_);
            this.loadingTimeoutId_ = null;
            return;
        }
        if (value && !this.loadingTimeoutId_) {
            this.loadingTimeoutId_ = window.setTimeout(() => this.dispatch(setErrorAction({ message: this.i18n('ambientModeNetworkError') })), 60 * 1000);
        }
    }
    computePreviewAlbums_() {
        return (this.albums_ || [])
            .filter(album => album.topicSource === this.topicSource_ && album.checked &&
            album.url);
    }
    computeFirstPreviewAlbum_() {
        if (isNonEmptyArray(this.previewAlbums_)) {
            return this.previewAlbums_[0];
        }
        return null;
    }
    getPreviewContainerClass_() {
        const classes = [];
        if (this.ambientModeEnabled_ || this.loading_) {
            classes.push('ambient-mode-enabled');
        }
        if (!this.ambientModeEnabled_) {
            classes.push('ambient-mode-disabled');
        }
        return classes.join(' ');
    }
    getPreviewImage_(album) {
        // Replace the resolution suffix appended at the end of the images
        // with a new resolution suffix of 512px so that we do not download very
        // large images. This won't impact images with no resolution suffix.
        return album && album.url ?
            replaceResolutionSuffix(album.url.url, '=s512') :
            '';
    }
    getPreviewTextAriaLabel_() {
        return `${this.i18n('currentlySet')} ${this.getAlbumTitle_()} ${this.getAlbumDescription_()}`;
    }
    getAlbumTitle_() {
        return this.firstPreviewAlbum_ ? this.firstPreviewAlbum_.title : '';
    }
    getAlbumDescription_() {
        if (!isNonEmptyArray(this.previewAlbums_) || this.topicSource_ === null) {
            return '';
        }
        switch (this.previewAlbums_.length) {
            case 1:
                // For only 1 selected album, album description includes image source
                // and number of photos in the album (only applicable for Google
                // Photos).
                const topicSourceDesc = getTopicSourceName(this.topicSource_);
                if (this.topicSource_ === TopicSource.kArtGallery) {
                    return topicSourceDesc;
                }
                else if (this.topicSource_ === TopicSource.kVideo) {
                    return this.previewAlbums_[0].description;
                }
                else {
                    // TODO(b/223834394): replace dot separator symbol • with an
                    // icon/image.
                    return `${topicSourceDesc} • ${getPhotoCount(this.previewAlbums_[0].numberOfPhotos)}`;
                }
            case 2:
            case 3:
                // For 2-3 selected albums, album description includes the titles of all
                // selected albums except the first one already shown in album title
                // text.
                const albumTitles = this.previewAlbums_.slice(1).map(album => album.title);
                return albumTitles.join(', ');
            default:
                // For more than 3 selected albums, album description includes the title
                // of the second album and the number of remaining albums.
                // For example: Sweden 2020, +2 more albums.
                return this.i18n('ambientModeMultipleAlbumsDesc', this.previewAlbums_[1].title, this.previewAlbums_.length - 2);
        }
    }
}
