// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This component displays the wallpaper section of the
 * personalization SWA.
 */
import { WallpaperType } from '../../personalization_app.mojom-webui.js';
import { isGooglePhotosIntegrationEnabled, isSeaPenEnabled } from '../load_time_booleans.js';
import { Paths, PersonalizationRouterElement } from '../personalization_router_element.js';
import { WithPersonalizationStore } from '../personalization_store.js';
import { getTemplate } from './wallpaper_subpage_element.html.js';
export class WallpaperSubpageElement extends WithPersonalizationStore {
    static get is() {
        return 'wallpaper-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            path: String,
            queryParams: Object,
            currentSelected_: {
                type: Object,
                value: null,
                observer: 'onCurrentSelectedChanged_',
            },
            isGooglePhotosIntegrationEnabled_: {
                type: Boolean,
                value() {
                    return isGooglePhotosIntegrationEnabled();
                },
            },
            isGooglePhotosAlbumShared_: {
                type: Boolean,
                computed: 'computeIsGooglePhotosAlbumShared_(queryParams)',
            },
            isSeaPenEnabled_: {
                type: Boolean,
                value() {
                    return isSeaPenEnabled();
                },
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.watch('currentSelected_', state => state.wallpaper.currentSelected);
        this.updateFromStore();
    }
    onCurrentSelectedChanged_(value) {
        if (value && value.type === WallpaperType.kPolicy) {
            PersonalizationRouterElement.reloadAtRoot();
        }
    }
    computeIsGooglePhotosAlbumShared_(queryParams) {
        return !!queryParams && queryParams.googlePhotosAlbumIsShared === 'true';
    }
    shouldShowWallpaperSelected_(path) {
        return !this.shouldShowSeaPenCollection_(path);
    }
    shouldShowCollections_(path) {
        return path === Paths.COLLECTIONS;
    }
    shouldShowCollectionImages_(path) {
        return path === Paths.COLLECTION_IMAGES;
    }
    shouldShowGooglePhotosCollection_(path) {
        return this.isGooglePhotosIntegrationEnabled_ &&
            path === Paths.GOOGLE_PHOTOS_COLLECTION;
    }
    shouldShowLocalCollection_(path) {
        return path === Paths.LOCAL_COLLECTION;
    }
    shouldShowSeaPenCollection_(path) {
        return this.isSeaPenEnabled_ && path === Paths.SEA_PEN_COLLECTION;
    }
}
customElements.define(WallpaperSubpageElement.is, WallpaperSubpageElement);
