// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A polymer component that previews the current selected
 * wallpaper.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../common/icons.html.js';
import '../../css/common.css.js';
import '../../css/wallpaper.css.js';
import '../../css/cros_button_style.css.js';
import { assert } from 'chrome://resources/js/assert.js';
import { WallpaperType } from '../../personalization_app.mojom-webui.js';
import { isPersonalizationJellyEnabled } from '../load_time_booleans.js';
import { Paths, PersonalizationRouterElement } from '../personalization_router_element.js';
import { WithPersonalizationStore } from '../personalization_store.js';
import { getWallpaperAriaLabel, getWallpaperSrc } from './utils.js';
import { getTemplate } from './wallpaper_preview_element.html.js';
export class WallpaperPreviewElement extends WithPersonalizationStore {
    static get is() {
        return 'wallpaper-preview';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            attribution_: {
                type: Object,
                value: null,
            },
            image_: {
                type: Object,
                value: null,
            },
            imageLoading_: Boolean,
            loading_: {
                type: Boolean,
                computed: 'computeLoading_(imageLoading_, image_)',
            },
            policyControlled_: {
                type: Boolean,
                computed: 'isPolicyControlled_(image_)',
            },
            isPersonalizationJellyEnabled_: {
                type: Boolean,
                value() {
                    return isPersonalizationJellyEnabled();
                },
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.watch('attribution_', state => state.wallpaper.attribution);
        this.watch('image_', state => state.wallpaper.currentSelected);
        this.watch('imageLoading_', state => state.wallpaper.loading.setImage > 0 ||
            state.wallpaper.loading.selected.image ||
            state.wallpaper.loading.selected.attribution ||
            state.wallpaper.loading.refreshWallpaper);
        this.updateFromStore();
    }
    /**
     * Navigate to wallpaper collections page.
     */
    onClickWallpaper_() {
        assert(!!this.image_ && this.image_.type !== WallpaperType.kPolicy);
        PersonalizationRouterElement.instance().goToRoute(Paths.COLLECTIONS);
    }
    getWallpaperSrc_(image) {
        return getWallpaperSrc(image);
    }
    getImageAltDescription_(image, attribution) {
        return getWallpaperAriaLabel(image, attribution, /*dailyRefreshState=*/ null);
    }
    computeLoading_() {
        return this.imageLoading_ || !this.image_;
    }
    isPolicyControlled_() {
        return !!this.image_ && this.image_.type === WallpaperType.kPolicy;
    }
}
customElements.define(WallpaperPreviewElement.is, WallpaperPreviewElement);
