// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_heading.js';
import 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_chip/cr_chip.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/polymer/v3_0/iron-pages/iron-pages.js';
import './appearance.js';
import './cards.js';
import './categories.js';
import './chrome_colors.js';
import './shortcuts.js';
import './themes.js';
import './wallpaper_search/wallpaper_search.js';
import { ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { HelpBubbleMixin } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './app.html.js';
import { ChromeWebStoreCategory, ChromeWebStoreCollection, CustomizeChromeSection } from './customize_chrome.mojom-webui.js';
import { CustomizeChromeApiProxy } from './customize_chrome_api_proxy.js';
const SECTION_TO_SELECTOR = {
    [CustomizeChromeSection.kAppearance]: '#appearance',
    [CustomizeChromeSection.kShortcuts]: '#shortcuts',
    [CustomizeChromeSection.kModules]: '#modules',
};
const CHANGE_CHROME_THEME_BUTTON_ELEMENT_ID = 'CustomizeChromeUI::kChangeChromeThemeButtonElementId';
export var CustomizeChromePage;
(function (CustomizeChromePage) {
    CustomizeChromePage["OVERVIEW"] = "overview";
    CustomizeChromePage["CATEGORIES"] = "categories";
    CustomizeChromePage["THEMES"] = "themes";
    CustomizeChromePage["CHROME_COLORS"] = "chrome-colors";
    CustomizeChromePage["WALLPAPER_SEARCH"] = "wallpaper-search";
})(CustomizeChromePage || (CustomizeChromePage = {}));
const AppElementBase = HelpBubbleMixin(PolymerElement);
export class AppElement extends AppElementBase {
    static get is() {
        return 'customize-chrome-app';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            page_: {
                type: String,
                value: CustomizeChromePage.OVERVIEW,
            },
            modulesEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('modulesEnabled'),
            },
            selectedCollection_: {
                type: Object,
                value: null,
            },
            extensionsCardEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('extensionsCardEnabled'),
            },
            wallpaperSearchEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('wallpaperSearchEnabled'),
            },
        };
    }
    ready() {
        super.ready();
        ColorChangeUpdater.forDocument().start();
        this.registerHelpBubble(CHANGE_CHROME_THEME_BUTTON_ELEMENT_ID, ['#appearanceElement', '#editThemeButton']);
    }
    constructor() {
        super();
        this.scrollToSectionListenerId_ = null;
        this.pageHandler_ = CustomizeChromeApiProxy.getInstance().handler;
    }
    connectedCallback() {
        super.connectedCallback();
        this.scrollToSectionListenerId_ =
            CustomizeChromeApiProxy.getInstance()
                .callbackRouter.scrollToSection.addListener((section) => {
                const selector = SECTION_TO_SELECTOR[section];
                const element = this.shadowRoot.querySelector(selector);
                if (!element) {
                    return;
                }
                this.page_ = CustomizeChromePage.OVERVIEW;
                element.scrollIntoView({ behavior: 'auto' });
            });
        // We wait for load because `scrollIntoView` above requires the page to be
        // laid out.
        window.addEventListener('load', () => {
            CustomizeChromeApiProxy.getInstance().handler.updateScrollToSection();
        }, { once: true });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.scrollToSectionListenerId_);
        CustomizeChromeApiProxy.getInstance().callbackRouter.removeListener(this.scrollToSectionListenerId_);
    }
    onBackClick_() {
        switch (this.page_) {
            case CustomizeChromePage.CATEGORIES:
                this.page_ = CustomizeChromePage.OVERVIEW;
                this.$.appearanceElement.focusOnThemeButton();
                break;
            case CustomizeChromePage.THEMES:
            case CustomizeChromePage.CHROME_COLORS:
            case CustomizeChromePage.WALLPAPER_SEARCH:
                this.page_ = CustomizeChromePage.CATEGORIES;
                this.$.categoriesPage.focusOnBackButton();
                break;
        }
    }
    onEditThemeClick_() {
        this.page_ = CustomizeChromePage.CATEGORIES;
        this.$.categoriesPage.focusOnBackButton();
    }
    onCollectionSelect_(event) {
        this.selectedCollection_ = event.detail;
        this.page_ = CustomizeChromePage.THEMES;
        this.$.themesPage.focusOnBackButton();
    }
    onLocalImageUpload_() {
        this.page_ = CustomizeChromePage.OVERVIEW;
        this.$.appearanceElement.focusOnThemeButton();
    }
    onChromeColorsSelect_() {
        this.page_ = CustomizeChromePage.CHROME_COLORS;
        this.$.chromeColorsPage.focusOnBackButton();
    }
    onWallpaperSearchSelect_() {
        this.page_ = CustomizeChromePage.WALLPAPER_SEARCH;
        const page = this.shadowRoot.querySelector('customize-chrome-wallpaper-search');
        assert(page);
        page.focusOnBackButton();
    }
    onCouponsButtonClick_() {
        this.pageHandler_.openChromeWebStoreCategoryPage(ChromeWebStoreCategory.kShopping);
    }
    onWritingButtonClick_() {
        this.pageHandler_.openChromeWebStoreCollectionPage(ChromeWebStoreCollection.kWrittingEssentials);
    }
    onProductivityButtonClick_() {
        this.pageHandler_.openChromeWebStoreCategoryPage(ChromeWebStoreCategory.kWorkflowPlanning);
    }
}
customElements.define(AppElement.is, AppElement);
