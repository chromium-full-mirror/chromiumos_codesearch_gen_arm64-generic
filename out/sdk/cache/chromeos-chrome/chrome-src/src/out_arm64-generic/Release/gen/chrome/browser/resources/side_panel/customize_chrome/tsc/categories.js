// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_heading.js';
import 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_grid/cr_grid.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './check_mark_wrapper.js';
import './strings.m.js';
import { HelpBubbleMixin } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin.js';
import { FocusOutlineManager } from 'chrome://resources/js/focus_outline_manager.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './categories.html.js';
import { CustomizeChromeApiProxy } from './customize_chrome_api_proxy.js';
import { WindowProxy } from './window_proxy.js';
export var CategoryType;
(function (CategoryType) {
    CategoryType[CategoryType["NONE"] = 0] = "NONE";
    CategoryType[CategoryType["CLASSIC"] = 1] = "CLASSIC";
    CategoryType[CategoryType["LOCAL"] = 2] = "LOCAL";
    CategoryType[CategoryType["COLOR"] = 3] = "COLOR";
    CategoryType[CategoryType["COLLECTION"] = 4] = "COLLECTION";
})(CategoryType || (CategoryType = {}));
export const CHROME_THEME_COLLECTION_ELEMENT_ID = 'CustomizeChromeUI::kChromeThemeCollectionElementId';
export const CHANGE_CHROME_THEME_CLASSIC_ELEMENT_ID = 'CustomizeChromeUI::kChangeChromeThemeClassicElementId';
const CategoriesElementBase = HelpBubbleMixin(PolymerElement);
export class CategoriesElement extends CategoriesElementBase {
    static get is() {
        return 'customize-chrome-categories';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            chromeRefresh2023Enabled_: {
                type: Boolean,
                value: () => document.documentElement.hasAttribute('chrome-refresh-2023'),
            },
            collections_: Array,
            theme_: Object,
            selectedCategory_: {
                type: Object,
                computed: 'computeSelectedCategory_(theme_, collections_)',
            },
            isClassicChromeSelected_: {
                type: Boolean,
                computed: 'computeIsClassicChromeSelected_(selectedCategory_)',
            },
            isLocalImageSelected_: {
                type: Boolean,
                computed: 'computeIsLocalImageSelected_(selectedCategory_)',
            },
            isChromeColorsSelected_: {
                type: Boolean,
                computed: 'computeIsChromeColorsSelected_(selectedCategory_)',
            },
            wallpaperSearchEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('wallpaperSearchEnabled'),
            },
        };
    }
    constructor() {
        super();
        this.setThemeListenerId_ = null;
        this.pageHandler_ = CustomizeChromeApiProxy.getInstance().handler;
        this.previewImageLoadStartEpoch_ = WindowProxy.getInstance().now();
        this.pageHandler_.getBackgroundCollections().then(({ collections }) => {
            this.collections_ = collections;
        });
    }
    connectedCallback() {
        super.connectedCallback();
        this.setThemeListenerId_ =
            CustomizeChromeApiProxy.getInstance()
                .callbackRouter.setTheme.addListener((theme) => {
                this.theme_ = theme;
            });
        this.pageHandler_.updateTheme();
        FocusOutlineManager.forDocument(document);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        CustomizeChromeApiProxy.getInstance().callbackRouter.removeListener(this.setThemeListenerId_);
    }
    ready() {
        super.ready();
        this.registerHelpBubble(CHANGE_CHROME_THEME_CLASSIC_ELEMENT_ID, '#classicChromeTile');
    }
    focusOnBackButton() {
        this.$.heading.getBackButton().focus();
    }
    onCollectionsRendered_() {
        const collections = this.root.querySelectorAll('.collection');
        if (collections.length >= 5) {
            this.registerHelpBubble(CHROME_THEME_COLLECTION_ELEMENT_ID, collections[4]);
        }
    }
    onPreviewImageLoad_() {
        chrome.metricsPrivate.recordValue({
            metricName: 'NewTabPage.Images.ShownTime.CollectionPreviewImage',
            type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LOG,
            min: 1,
            max: 60000,
            buckets: 100,
        }, Math.floor(WindowProxy.getInstance().now() -
            this.previewImageLoadStartEpoch_));
    }
    computeSelectedCategory_() {
        if (!this.theme_ || this.theme_.thirdPartyThemeInfo) {
            return { type: CategoryType.NONE };
        }
        if (!this.theme_.backgroundImage) {
            if (!this.theme_.foregroundColor) {
                return { type: CategoryType.CLASSIC };
            }
            return { type: CategoryType.COLOR };
        }
        if (this.theme_.backgroundImage.isUploadedImage) {
            return { type: CategoryType.LOCAL };
        }
        if (this.theme_.backgroundImage.collectionId) {
            return {
                type: CategoryType.COLLECTION,
                collectionId: this.theme_.backgroundImage.collectionId,
            };
        }
        return { type: CategoryType.NONE };
    }
    computeIsClassicChromeSelected_() {
        return this.selectedCategory_.type === CategoryType.CLASSIC;
    }
    computeIsLocalImageSelected_() {
        return this.selectedCategory_.type === CategoryType.LOCAL;
    }
    computeIsChromeColorsSelected_() {
        return this.selectedCategory_.type === CategoryType.COLOR;
    }
    isCollectionSelected_(id) {
        return this.selectedCategory_.type === CategoryType.COLLECTION &&
            this.selectedCategory_.collectionId === id;
    }
    boolToString_(value) {
        return value ? 'true' : 'false';
    }
    getCollectionCheckedStatus_(id) {
        return this.boolToString_(this.isCollectionSelected_(id));
    }
    onClassicChromeClick_() {
        this.pageHandler_.setDefaultColor();
        this.pageHandler_.removeBackgroundImage();
    }
    onWallpaperSearchClick_() {
        this.dispatchEvent(new Event('wallpaper-search-select'));
    }
    async onUploadImageClick_() {
        chrome.metricsPrivate.recordUserAction('NTPRicherPicker.Backgrounds.UploadClicked');
        const { success } = await this.pageHandler_.chooseLocalCustomBackground();
        if (success) {
            this.dispatchEvent(new Event('local-image-upload'));
        }
    }
    async onChromeColorsClick_() {
        this.dispatchEvent(new Event('chrome-colors-select'));
    }
    onCollectionClick_(e) {
        this.dispatchEvent(new CustomEvent('collection-select', { detail: e.model.item }));
    }
    onChromeWebStoreClick_() {
        this.pageHandler_.openChromeWebStore();
    }
    onBackClick_() {
        this.dispatchEvent(new Event('back-click'));
    }
}
customElements.define(CategoriesElement.is, CategoriesElement);
