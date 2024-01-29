// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This router component hooks into the current url path and query
 * parameters to display sections of the personalization SWA.
 */
import 'chrome://resources/polymer/v3_0/iron-location/iron-location.js';
import 'chrome://resources/polymer/v3_0/iron-location/iron-query-params.js';
import { assert } from 'chrome://resources/ash/common/assert.js';
import { isSeaPenEnabled } from 'chrome://resources/ash/common/sea_pen/load_time_booleans.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { TopicSource } from '../personalization_app.mojom-webui.js';
import { isAmbientModeAllowed } from './load_time_booleans.js';
import { logPersonalizationPathUMA } from './personalization_metrics_logger.js';
import { getTemplate } from './personalization_router_element.html.js';
import { WallpaperObserver } from './wallpaper/wallpaper_observer.js';
export var Paths;
(function (Paths) {
    Paths["AMBIENT"] = "/ambient";
    Paths["AMBIENT_ALBUMS"] = "/ambient/albums";
    Paths["COLLECTION_IMAGES"] = "/wallpaper/collection";
    Paths["COLLECTIONS"] = "/wallpaper";
    Paths["GOOGLE_PHOTOS_COLLECTION"] = "/wallpaper/google-photos";
    Paths["LOCAL_COLLECTION"] = "/wallpaper/local";
    Paths["ROOT"] = "/";
    Paths["SEA_PEN_COLLECTION"] = "/wallpaper/sea-pen";
    Paths["SEA_PEN_RESULTS"] = "/wallpaper/sea-pen/results";
    Paths["USER"] = "/user";
})(Paths || (Paths = {}));
export var ScrollableTarget;
(function (ScrollableTarget) {
    ScrollableTarget["TOPIC_SOURCE_LIST"] = "topic-source-list";
})(ScrollableTarget || (ScrollableTarget = {}));
export function isPathValid(path) {
    return !!path && Object.values(Paths).includes(path);
}
export function isAmbientPath(path) {
    return !!path && path.startsWith(Paths.AMBIENT);
}
export function isAmbientPathAllowed(path) {
    return isAmbientPath(path) && isAmbientModeAllowed();
}
export function isAmbientPathNotAllowed(path) {
    return isAmbientPath(path) && !isAmbientModeAllowed();
}
export function isSeaPenPath(path) {
    return !!path && path.startsWith(Paths.SEA_PEN_COLLECTION);
}
export function isSeaPenPathNotAllowed(path) {
    return isSeaPenPath(path) && !isSeaPenEnabled();
}
export class PersonalizationRouterElement extends PolymerElement {
    static get is() {
        return 'personalization-router';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            path_: {
                type: String,
                observer: 'onPathChanged_',
            },
            query_: {
                type: String,
            },
            queryParams_: {
                type: Object,
            },
            seaPenBasePath_: {
                type: String,
                value() {
                    return Paths.SEA_PEN_COLLECTION;
                },
            },
        };
    }
    static instance() {
        return document.querySelector(PersonalizationRouterElement.is);
    }
    static reloadAtRoot() {
        window.location.replace(Paths.ROOT);
    }
    /**
     * Reload the application at the collections page.
     */
    static reloadAtWallpaper() {
        window.location.replace(Paths.COLLECTIONS);
    }
    /**
     * Reload the application at the ambient subpage.
     */
    static reloadAtAmbient() {
        window.location.replace(Paths.AMBIENT);
    }
    connectedCallback() {
        super.connectedCallback();
        WallpaperObserver.initWallpaperObserverIfNeeded();
    }
    get collectionId() {
        if (this.path_ !== Paths.COLLECTION_IMAGES) {
            return null;
        }
        return this.queryParams_.id;
    }
    /**
     * Navigate to the selected collection id. Assumes validation of the
     * collection has already happened.
     */
    selectCollection(collection) {
        document.title = collection.name;
        this.goToRoute(Paths.COLLECTION_IMAGES, { id: collection.id });
    }
    /** Navigate to a specific album in the Google Photos collection page. */
    selectGooglePhotosAlbum(album) {
        this.goToRoute(Paths.GOOGLE_PHOTOS_COLLECTION, {
            googlePhotosAlbumId: album.id,
            // Only include key if album is shared.
            ...(album.isShared ? { googlePhotosAlbumIsShared: 'true' } : false),
        });
    }
    /** Navigate to albums subpage of specific topic source. */
    selectAmbientAlbums(topicSource) {
        this.goToRoute(Paths.AMBIENT_ALBUMS, { topicSource: topicSource.toString() });
    }
    goToRoute(path, queryParams = {}) {
        this.setProperties({ path_: path, queryParams_: queryParams });
    }
    shouldShowRootPage_(path) {
        // If the ambient mode is not allowed, will not show Ambient/AmbientAlbums
        // subpages.
        return (path === Paths.ROOT) || (isAmbientPathNotAllowed(path));
    }
    shouldShowAmbientSubpage_(path) {
        return isAmbientPathAllowed(path);
    }
    shouldShowUserSubpage_(path) {
        return path === Paths.USER;
    }
    shouldShowWallpaperSubpage_(path) {
        return !!path && path.startsWith(Paths.COLLECTIONS) &&
            !path.startsWith(Paths.SEA_PEN_COLLECTION);
    }
    shouldShowSeaPen_(path) {
        return isSeaPenEnabled() && isSeaPenPath(path);
    }
    shouldShowBreadcrumb_(path) {
        return path !== Paths.ROOT;
    }
    /**
     * When entering a wrong path or navigating to Ambient/AmbientAlbums
     * subpages, but the ambient mode is not allowed, reset path to root.
     */
    onPathChanged_(path) {
        // Navigates to the top of the subpage.
        window.scrollTo(0, 0);
        if (!isPathValid(path) || isAmbientPathNotAllowed(path) ||
            isSeaPenPathNotAllowed(path)) {
            // Reset the path to root.
            this.setProperties({ path_: Paths.ROOT, queryParams_: {} });
        }
        if (isPathValid(path)) {
            logPersonalizationPathUMA(path);
        }
        // Update the page title when the path changes.
        // TODO(b/228967523): Wallpaper related pages have been handled in their
        // specific Polymer elements so they are skipped here. See if we can move
        // them here.
        switch (path) {
            case Paths.ROOT:
                document.title = loadTimeData.getString('personalizationTitle');
                break;
            case Paths.AMBIENT:
                document.title = loadTimeData.getString('screensaverLabel');
                break;
            case Paths.AMBIENT_ALBUMS: {
                assert(!!this.queryParams_.topicSource);
                if (this.queryParams_.topicSource ===
                    TopicSource.kGooglePhotos.toString()) {
                    document.title =
                        loadTimeData.getString('ambientModeTopicSourceGooglePhotos');
                }
                else {
                    document.title =
                        loadTimeData.getString('ambientModeTopicSourceArtGallery');
                }
                break;
            }
            case Paths.GOOGLE_PHOTOS_COLLECTION: {
                document.title = loadTimeData.getString('googlePhotosLabel');
                break;
            }
            case Paths.LOCAL_COLLECTION: {
                document.title = loadTimeData.getString('myImagesLabel');
                break;
            }
            case Paths.USER:
                document.title = loadTimeData.getString('avatarLabel');
                break;
        }
    }
    onRefuseSeaPenTermsOfService_() {
        this.goToRoute(Paths.COLLECTIONS);
    }
}
customElements.define(PersonalizationRouterElement.is, PersonalizationRouterElement);
