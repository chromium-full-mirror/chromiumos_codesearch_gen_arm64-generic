// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../check_mark_wrapper.js';
import './combobox/customize_chrome_combobox.js';
import 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_heading.js';
import 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_feedback_buttons/cr_feedback_buttons.js';
import 'chrome://resources/cr_elements/cr_grid/cr_grid.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_loading_gradient/cr_loading_gradient.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_components/theme_color_picker/theme_hue_slider_dialog.js';
import 'chrome://resources/polymer/v3_0/paper-ripple/paper-ripple.js';
import { CrFeedbackOption } from 'chrome://resources/cr_elements/cr_feedback_buttons/cr_feedback_buttons.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { hexColorToSkColor } from 'chrome://resources/js/color_utils.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { Debouncer, PolymerElement, timeOut } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { CustomizeChromeAction, recordCustomizeChromeAction } from '../common.js';
import { CustomizeChromeApiProxy } from '../customize_chrome_api_proxy.js';
import { UserFeedback, WallpaperSearchStatus } from '../wallpaper_search.mojom-webui.js';
import { WindowProxy } from '../window_proxy.js';
import { getTemplate } from './wallpaper_search.html.js';
import { WallpaperSearchProxy } from './wallpaper_search_proxy.js';
export const DESCRIPTOR_D_VALUE = [
    {
        hex: '#ef4837',
        name: 'colorRed',
    },
    {
        hex: '#0984e3',
        name: 'colorBlue',
    },
    {
        hex: '#f9cc18',
        name: 'colorYellow',
    },
    {
        hex: '#23cc6a',
        name: 'colorGreen',
    },
    {
        hex: '#474747',
        name: 'colorBlack',
    },
];
function getRandomDescriptorA(descriptorArrayA) {
    const randomLabels = descriptorArrayA[Math.floor(Math.random() * descriptorArrayA.length)]
        .labels;
    return randomLabels[Math.floor(Math.random() * randomLabels.length)];
}
function recordStatusChange(status) {
    chrome.metricsPrivate.recordEnumerationValue('NewTabPage.WallpaperSearch.Status', status, WallpaperSearchStatus.MAX_VALUE);
}
const WallpaperSearchElementBase = I18nMixin(PolymerElement);
export class WallpaperSearchElement extends WallpaperSearchElementBase {
    static get is() {
        return 'customize-chrome-wallpaper-search';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            comboboxItems_: Array,
            descriptors_: {
                type: Object,
                value: null,
            },
            descriptorD_: {
                type: Array,
                value: DESCRIPTOR_D_VALUE.map((value) => value.hex),
            },
            errorState_: {
                type: Object,
                computed: 'computeErrorState_(status_, history_)',
            },
            emptyHistoryContainers_: Object,
            emptyResultContainers_: Object,
            expandedCategories_: Object,
            loading_: {
                type: Boolean,
                value: false,
            },
            history_: Object,
            inspirationCardEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('wallpaperSearchInspirationCardEnabled'),
            },
            resultsDescriptors_: Object,
            results_: Object,
            selectedFeedbackOption_: {
                type: Number,
                value: CrFeedbackOption.UNSPECIFIED,
            },
            selectedDescriptorA_: {
                type: String,
                observer: 'onSubjectDescriptorChange_',
            },
            selectedDescriptorB_: {
                type: String,
                observer: 'onStyleDescriptorChange_',
            },
            selectedDescriptorC_: {
                type: String,
                observer: 'onMoodDescriptorChange_',
            },
            selectedDescriptorD_: {
                type: Object,
                observer: 'onColorDescriptorChange_',
            },
            selectedHue_: Number,
            status_: {
                type: WallpaperSearchStatus,
                value: WallpaperSearchStatus.kOk,
                observer: 'onStatusChange_',
            },
            theme_: {
                type: Object,
                value: undefined,
            },
        };
    }
    constructor() {
        super();
        this.emptyHistoryContainers_ = [];
        this.emptyResultContainers_ = [];
        this.errorState_ = null;
        this.expandedCategories_ = {};
        this.history_ = [];
        this.results_ = [];
        this.resultsDescriptors_ = {};
        this.setThemeListenerId_ = null;
        this.setHistoryListenerId_ = null;
        this.loadingUiResizeObserver_ = null;
        this.loadingUiDebouncer_ = null;
        this.callbackRouter_ = CustomizeChromeApiProxy.getInstance().callbackRouter;
        this.pageHandler_ = CustomizeChromeApiProxy.getInstance().handler;
        this.wallpaperSearchHandler_ = WallpaperSearchProxy.getInstance().handler;
        this.wallpaperSearchCallbackRouter_ =
            WallpaperSearchProxy.getInstance().callbackRouter;
        this.fetchDescriptors_();
    }
    connectedCallback() {
        super.connectedCallback();
        this.setThemeListenerId_ =
            this.callbackRouter_.setTheme.addListener((theme) => {
                this.theme_ = theme;
            });
        this.pageHandler_.updateTheme();
        this.setHistoryListenerId_ =
            this.wallpaperSearchCallbackRouter_.setHistory.addListener((history) => {
                this.history_ = history;
                this.emptyHistoryContainers_ = this.calculateEmptyTiles(history);
            });
        this.wallpaperSearchHandler_.updateHistory();
        this.loadingUiResizeObserver_ = new ResizeObserver(() => {
            // Timeout of 20ms was decided by manual testing to see how often the
            // resizes can be debounced before appearing janky.
            this.loadingUiDebouncer_ = Debouncer.debounce(this.loadingUiDebouncer_, timeOut.after(20), () => this.generateLoadingUi_());
        });
        this.loadingUiResizeObserver_.observe(this);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setThemeListenerId_);
        assert(this.setHistoryListenerId_);
        this.callbackRouter_.removeListener(this.setThemeListenerId_);
        this.wallpaperSearchCallbackRouter_.removeListener(this.setHistoryListenerId_);
        this.loadingUiResizeObserver_.disconnect();
        this.loadingUiResizeObserver_ = null;
    }
    focusOnBackButton() {
        this.$.heading.getBackButton().focus();
    }
    calculateEmptyTiles(filledTiles) {
        return Array.from({ length: filledTiles.length > 0 ? 6 - filledTiles.length : 0 }, () => 0);
    }
    computeErrorState_() {
        switch (this.status_) {
            case WallpaperSearchStatus.kOk:
                return null;
            case WallpaperSearchStatus.kError:
                return {
                    title: this.i18n('genericErrorTitle'),
                    description: this.shouldShowHistory_() ?
                        this.i18n('genericErrorDescriptionWithHistory') :
                        this.i18n('genericErrorDescription'),
                    callToAction: this.i18n('tryAgain'),
                };
            case WallpaperSearchStatus.kRequestThrottled:
                return {
                    title: this.i18n('requestThrottledTitle'),
                    description: this.i18n('requestThrottledDescription'),
                    callToAction: this.i18n('ok'),
                };
            case WallpaperSearchStatus.kOffline:
                return {
                    title: this.i18n('offlineTitle'),
                    description: this.shouldShowHistory_() ?
                        this.i18n('offlineDescriptionWithHistory') :
                        this.i18n('offlineDescription'),
                    callToAction: this.i18n('ok'),
                };
        }
    }
    expandCategoryForDescriptorA_(label) {
        if (!this.descriptors_) {
            return;
        }
        const categoryGroupIndex = this.descriptors_.descriptorA.findIndex(group => group.labels.includes(label));
        if (categoryGroupIndex >= 0) {
            this.set(`expandedCategories_.${categoryGroupIndex}`, true);
        }
    }
    async fetchDescriptors_() {
        this.wallpaperSearchHandler_.getDescriptors().then(({ descriptors }) => {
            if (descriptors) {
                this.descriptors_ = descriptors;
                this.comboboxItems_ = {
                    a: descriptors.descriptorA.map((group) => {
                        return {
                            label: group.category,
                            items: group.labels.map((label) => {
                                return { label };
                            }),
                        };
                    }),
                    b: descriptors.descriptorB,
                    c: descriptors.descriptorC.map((label) => {
                        return { label };
                    }),
                };
                this.errorCallback_ = undefined;
                recordStatusChange(WallpaperSearchStatus.kOk);
            }
            else {
                this.errorCallback_ = () => this.fetchDescriptors_();
                this.status_ = WindowProxy.getInstance().onLine ?
                    WallpaperSearchStatus.kError :
                    WallpaperSearchStatus.kOffline;
                recordStatusChange(this.status_);
            }
        });
    }
    /**
     * The loading gradient is rendered using a SVG clip path. As typical CSS
     * layouts such as grid cannot apply to clip paths, this ResizeObserver
     * callback resizes the loading tiles based on the current width of the
     * side panel.
     */
    generateLoadingUi_() {
        const availableWidth = this.$.wallpaperSearch.offsetWidth;
        if (availableWidth === 0) {
            // Wallpaper search is likely hidden.
            return;
        }
        const columns = 3;
        const gapBetweenTiles = 10;
        const tileSize = (availableWidth - (gapBetweenTiles * (columns - 1))) / columns;
        const svg = this.$.loading.querySelector('svg');
        const rects = svg.querySelectorAll('rect');
        const rows = Math.ceil(rects.length / columns);
        svg.setAttribute('width', `${availableWidth}`);
        svg.setAttribute('height', `${(rows * tileSize) + ((rows - 1) * gapBetweenTiles)}`);
        for (let row = 0; row < rows; row++) {
            for (let column = 0; column < columns; column++) {
                const rect = rects[column + (row * columns)];
                if (!rect) {
                    return;
                }
                rect.setAttribute('height', `${tileSize}`);
                rect.setAttribute('width', `${tileSize}`);
                rect.setAttribute('x', `${column * (tileSize + gapBetweenTiles)}`);
                rect.setAttribute('y', `${row * (tileSize + gapBetweenTiles)}`);
            }
        }
    }
    getBackgroundCheckedStatus_(id) {
        return this.isBackgroundSelected_(id) ? 'true' : 'false';
    }
    getColorCheckedStatus_(defaultColor) {
        return this.isColorSelected_(defaultColor) ? 'true' : 'false';
    }
    getColorLabel_(defaultColor) {
        const descriptor = DESCRIPTOR_D_VALUE.find((color) => color.hex === defaultColor);
        return descriptor ? loadTimeData.getString(descriptor.name) : '';
    }
    getCustomColorCheckedStatus_() {
        return this.selectedHue_ !== undefined ? 'true' : 'false';
    }
    getHistoryTileTitle_(index) {
        return loadTimeData.getStringF('wallpaperSearchHistoryTileTitle', index + 1);
    }
    getResultAriaLabel_(index) {
        assert(this.resultsDescriptors_.a);
        if (this.resultsDescriptors_.b && this.resultsDescriptors_.c) {
            return loadTimeData.getStringF('wallpaperSearchResultLabelBC', index + 1, this.resultsDescriptors_.a, this.resultsDescriptors_.b, this.resultsDescriptors_.c);
        }
        else if (this.resultsDescriptors_.b) {
            return loadTimeData.getStringF('wallpaperSearchResultLabelB', index + 1, this.resultsDescriptors_.a, this.resultsDescriptors_.b);
        }
        else if (this.resultsDescriptors_.c) {
            return loadTimeData.getStringF('wallpaperSearchResultLabelC', index + 1, this.resultsDescriptors_.a, this.resultsDescriptors_.c);
        }
        return loadTimeData.getStringF('wallpaperSearchResultLabel', index + 1, this.resultsDescriptors_.a);
    }
    isBackgroundSelected_(id) {
        return !!(this.theme_ && this.theme_.backgroundImage &&
            this.theme_.backgroundImage.localBackgroundId &&
            this.theme_.backgroundImage.localBackgroundId.low === id.low &&
            this.theme_.backgroundImage.localBackgroundId.high === id.high);
    }
    isColorSelected_(defaultColor) {
        return defaultColor === this.selectedDefaultColor_;
    }
    isOptionSelectedInDescriptorB_(option) {
        return option.label === this.selectedDescriptorB_;
    }
    async onBackClick_() {
        this.dispatchEvent(new Event('back-click'));
    }
    onComboboxCategoryClick_(e) {
        const index = e.model.index;
        this.set(`expandedCategories_.${index}`, !this.expandedCategories_[index]);
    }
    onCustomColorClick_() {
        this.$.hueSlider.showAt(this.$.customColorContainer);
    }
    onErrorClick_() {
        this.status_ = WallpaperSearchStatus.kOk;
        recordStatusChange(this.status_);
        if (this.errorCallback_) {
            this.errorCallback_();
        }
    }
    onDefaultColorClick_(e) {
        this.selectedHue_ = undefined;
        this.selectedDefaultColor_ = e.model.item;
        this.selectedDescriptorD_ = {
            color: hexColorToSkColor(this.selectedDefaultColor_),
        };
    }
    onColorDescriptorChange_() {
        recordCustomizeChromeAction(CustomizeChromeAction.WALLPAPER_SEARCH_COLOR_DESCRIPTOR_UPDATED);
    }
    onMoodDescriptorChange_() {
        recordCustomizeChromeAction(CustomizeChromeAction.WALLPAPER_SEARCH_MOOD_DESCRIPTOR_UPDATED);
    }
    onStyleDescriptorChange_() {
        recordCustomizeChromeAction(CustomizeChromeAction.WALLPAPER_SEARCH_STYLE_DESCRIPTOR_UPDATED);
    }
    onSubjectDescriptorChange_() {
        recordCustomizeChromeAction(CustomizeChromeAction.WALLPAPER_SEARCH_SUBJECT_DESCRIPTOR_UPDATED);
    }
    onFeedbackSelectedOptionChanged_(e) {
        this.selectedFeedbackOption_ = e.detail.value;
        switch (e.detail.value) {
            case CrFeedbackOption.UNSPECIFIED:
                this.wallpaperSearchHandler_.setUserFeedback(UserFeedback.kUnspecified);
                return;
            case CrFeedbackOption.THUMBS_UP:
                recordCustomizeChromeAction(CustomizeChromeAction.WALLPAPER_SEARCH_THUMBS_UP_SELECTED);
                this.wallpaperSearchHandler_.setUserFeedback(UserFeedback.kThumbsUp);
                return;
            case CrFeedbackOption.THUMBS_DOWN:
                recordCustomizeChromeAction(CustomizeChromeAction.WALLPAPER_SEARCH_THUMBS_DOWN_SELECTED);
                this.wallpaperSearchHandler_.setUserFeedback(UserFeedback.kThumbsDown);
                return;
        }
    }
    onHistoryImageClick_(e) {
        recordCustomizeChromeAction(CustomizeChromeAction.WALLPAPER_SEARCH_HISTORY_IMAGE_SELECTED);
        this.wallpaperSearchHandler_.setBackgroundToHistoryImage(e.model.item.id);
    }
    onLearnMoreClick_(e) {
        e.preventDefault();
        this.wallpaperSearchHandler_.openHelpArticle();
    }
    async onSelectedHueChanged_() {
        this.selectedDefaultColor_ = undefined;
        this.selectedHue_ = this.$.hueSlider.selectedHue;
        this.selectedDescriptorD_ = { hue: this.selectedHue_ };
    }
    async onSearchClick_() {
        if (!WindowProxy.getInstance().onLine) {
            this.status_ = WallpaperSearchStatus.kOffline;
            recordStatusChange(this.status_);
            return;
        }
        recordCustomizeChromeAction(CustomizeChromeAction.WALLPAPER_SEARCH_PROMPT_SUBMITTED);
        assert(this.descriptors_);
        const selectedDescriptorA = this.selectedDescriptorA_ ||
            getRandomDescriptorA(this.descriptors_.descriptorA);
        this.expandCategoryForDescriptorA_(selectedDescriptorA);
        this.selectedDescriptorA_ = selectedDescriptorA;
        this.loading_ = true;
        this.results_ = [];
        this.emptyResultContainers_ = [];
        const { status, results } = await this.wallpaperSearchHandler_.getWallpaperSearchResults(this.selectedDescriptorA_, this.selectedDescriptorB_, this.selectedDescriptorC_, this.selectedDescriptorD_);
        this.loading_ = false;
        this.results_ = results;
        this.resultsDescriptors_ = {
            a: this.selectedDescriptorA_,
            b: this.selectedDescriptorB_,
            c: this.selectedDescriptorC_,
        };
        this.status_ = status;
        recordStatusChange(status);
        this.selectedFeedbackOption_ = CrFeedbackOption.UNSPECIFIED;
        this.emptyResultContainers_ = this.calculateEmptyTiles(results);
    }
    onResultsRender_() {
        this.wallpaperSearchHandler_.setResultRenderTime(this.results_.map(r => r.id), WindowProxy.getInstance().now());
    }
    async onResultClick_(e) {
        recordCustomizeChromeAction(CustomizeChromeAction.WALLPAPER_SEARCH_RESULT_IMAGE_SELECTED);
        this.wallpaperSearchHandler_.setBackgroundToWallpaperSearchResult(e.model.item.id, WindowProxy.getInstance().now());
    }
    onStatusChange_() {
        if (this.status_ === WallpaperSearchStatus.kOk) {
            this.$.wallpaperSearch.focus();
        }
        else {
            this.$.error.focus();
        }
    }
    shouldShowFeedbackButtons_() {
        return !this.loading_ && this.results_.length > 0;
    }
    shouldShowGrid_() {
        return this.results_.length > 0 || this.emptyResultContainers_.length > 0;
    }
    shouldShowHistory_() {
        return this.history_.length > 0;
    }
}
customElements.define(WallpaperSearchElement.is, WallpaperSearchElement);
