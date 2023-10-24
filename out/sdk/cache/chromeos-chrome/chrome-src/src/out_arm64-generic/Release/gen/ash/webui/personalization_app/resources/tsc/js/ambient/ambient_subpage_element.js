// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The ambient-subpage component displays the main content of
 * the ambient mode settings.
 */
import '../../css/common.css.js';
import './albums_subpage_element.js';
import './ambient_weather_element.js';
import './ambient_preview_small_element.js';
import './ambient_theme_list_element.js';
import './toggle_row_element.js';
import './topic_source_list_element.js';
import { assert } from 'chrome://resources/js/assert.js';
import { afterNextRender } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { TopicSource } from '../../personalization_app.mojom-webui.js';
import { isAmbientModeAllowed, isPersonalizationJellyEnabled, isScreenSaverDurationEnabled } from '../load_time_booleans.js';
import { Paths, ScrollableTarget } from '../personalization_router_element.js';
import { WithPersonalizationStore } from '../personalization_store.js';
import { getZerosArray } from '../utils.js';
import { dismissTimeOfDayBanner, setAmbientModeEnabled } from './ambient_controller.js';
import { getAmbientProvider } from './ambient_interface_provider.js';
import { AmbientObserver } from './ambient_observer.js';
import { getTemplate } from './ambient_subpage_element.html.js';
export class AmbientSubpageElement extends WithPersonalizationStore {
    constructor() {
        super(...arguments);
        // Refetch albums if the user is currently viewing ambient subpage, focuses
        // another window, and then re-focuses personalization app.
        this.onFocus_ = () => getAmbientProvider().fetchSettingsAndAlbums();
    }
    static get is() {
        return 'ambient-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            path: Paths,
            queryParams: Object,
            albums_: {
                type: Array,
                value: null,
            },
            ambientTheme_: {
                type: Object,
                value: null,
            },
            ambientModeEnabled_: {
                type: Boolean,
                value: null,
                observer: 'onAmbientModeEnabledChanged_',
            },
            duration_: {
                type: Number,
                value: null,
            },
            temperatureUnit_: {
                type: Number,
                value: null,
            },
            topicSource_: {
                type: Number,
                value: null,
            },
            loading_: {
                type: Boolean,
                computed: 'computeLoading_(ambientModeEnabled_, albums_, temperatureUnit_, topicSource_, isOnline_)',
                observer: 'onLoadingChanged_',
            },
            isPersonalizationJellyEnabled_: {
                type: Boolean,
                value() {
                    return isPersonalizationJellyEnabled();
                },
            },
            isScreenSaverDurationEnabled_: {
                readOnly: true,
                type: Boolean,
                value() {
                    return isScreenSaverDurationEnabled();
                },
            },
            isOnline_: {
                type: Boolean,
                value() {
                    return window.navigator.onLine;
                },
            },
        };
    }
    ready() {
        // Pre-scroll to prevent visual jank when focusing the toggle row.
        window.scrollTo(0, 0);
        super.ready();
        afterNextRender(this, () => {
            const elem = this.shadowRoot.getElementById('ambientToggleRow');
            if (elem) {
                // Focus the toggle row to inform screen reader users of the current
                // state.
                elem.focus();
            }
        });
        window.addEventListener('online', () => {
            this.isOnline_ = true;
        });
        window.addEventListener('offline', () => {
            this.isOnline_ = false;
        });
    }
    connectedCallback() {
        assert(isAmbientModeAllowed(), 'ambient subpage should not load if ambient not allowed');
        super.connectedCallback();
        AmbientObserver.initAmbientObserverIfNeeded();
        this.watch('albums_', state => state.ambient.albums);
        this.watch('ambientModeEnabled_', state => state.ambient.ambientModeEnabled);
        this.watch('ambientTheme_', state => state.ambient.ambientTheme);
        this.watch('temperatureUnit_', state => state.ambient.temperatureUnit);
        this.watch('topicSource_', state => state.ambient.topicSource);
        this.watch('duration_', state => state.ambient.duration);
        this.updateFromStore();
        getAmbientProvider().setPageViewed();
        window.addEventListener('focus', this.onFocus_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('focus', this.onFocus_);
    }
    // Scroll down to the topic source list.
    scrollToTopicSourceList_() {
        const elem = this.shadowRoot.querySelector('topic-source-list');
        if (elem) {
            elem.scrollIntoView();
            elem.focus();
        }
    }
    onAmbientModeEnabledChanged_(value) {
        if (value) {
            // Dismisses the banner after the user visits this subpage and ambient
            // mode is enabled.
            dismissTimeOfDayBanner(this.getStore());
        }
    }
    onLoadingChanged_(value) {
        if (!value && !!this.queryParams &&
            this.queryParams['scrollTo'] === ScrollableTarget.TOPIC_SOURCE_LIST) {
            afterNextRender(this, () => this.scrollToTopicSourceList_());
        }
    }
    setAmbientModeEnabled_(ambientModeEnabled) {
        setAmbientModeEnabled(ambientModeEnabled, getAmbientProvider(), this.getStore());
    }
    temperatureUnitToString_(temperatureUnit) {
        return temperatureUnit != null ? temperatureUnit.toString() : '';
    }
    hasGooglePhotosAlbums_() {
        return (this.albums_ || [])
            .some(album => album.topicSource === TopicSource.kGooglePhotos);
    }
    getTopicSource_() {
        if (!this.queryParams) {
            return null;
        }
        const topicSource = parseInt(this.queryParams['topicSource'], 10);
        if (isNaN(topicSource)) {
            return null;
        }
        return topicSource;
    }
    // Null result indicates albums are loading.
    getAlbums_() {
        if (!this.queryParams || this.albums_ === null) {
            return null;
        }
        const topicSource = this.getTopicSource_();
        return (this.albums_ || []).filter(album => {
            return album.topicSource === topicSource;
        });
    }
    shouldShowMainSettings_(path) {
        return path === Paths.AMBIENT;
    }
    shouldShowAlbums_(path) {
        return path === Paths.AMBIENT_ALBUMS;
    }
    computeLoading_() {
        return this.ambientModeEnabled_ === null || this.albums_ === null ||
            this.topicSource_ === null || this.temperatureUnit_ === null ||
            (this.isScreenSaverDurationEnabled_ && this.duration_ === null) ||
            !this.isOnline_;
    }
    getPlaceholders_(x) {
        return getZerosArray(x);
    }
}
customElements.define(AmbientSubpageElement.is, AmbientSubpageElement);
