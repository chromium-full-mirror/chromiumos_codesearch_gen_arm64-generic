// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './theme_hue_slider_dialog.js';
import './theme_color.js';
import 'chrome://resources/cr_elements/cr_grid/cr_grid.js';
import 'chrome://resources/cr_components/managed_dialog/managed_dialog.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { hexColorToSkColor, skColorToRgba } from 'chrome://resources/js/color_utils.js';
import { BrowserColorVariant } from 'chrome://resources/mojo/ui/base/mojom/themes.mojom-webui.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ThemeColorPickerBrowserProxy } from './browser_proxy.js';
import { ColorType, DARK_BASELINE_BLUE_COLOR, DARK_BASELINE_GREY_COLOR, DARK_DEFAULT_COLOR, LIGHT_BASELINE_BLUE_COLOR, LIGHT_BASELINE_GREY_COLOR, LIGHT_DEFAULT_COLOR } from './color_utils.js';
import { getTemplate } from './theme_color_picker.html.js';
const ThemeColorPickerElementBase = I18nMixin(PolymerElement);
export class ThemeColorPickerElement extends ThemeColorPickerElementBase {
    constructor() {
        super(...arguments);
        this.setThemeListenerId_ = null;
    }
    static get is() {
        return 'cr-theme-color-picker';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            defaultColor_: {
                type: Object,
                computed: 'computeDefaultColor_(theme_)',
            },
            greyDefaultColor_: {
                type: Object,
                computed: 'computeGreyDefaultColor_(theme_)',
            },
            mainColor_: {
                type: Object,
                computed: 'computeMainColor_(theme_)',
            },
            colors_: Array,
            theme_: Object,
            selectedColor_: {
                type: Object,
                computed: 'computeSelectedColor_(theme_, colors_)',
            },
            isDefaultColorSelected_: {
                type: Boolean,
                computed: 'computeIsDefaultColorSelected_(selectedColor_)',
            },
            isGreyDefaultColorSelected_: {
                type: Boolean,
                computed: 'computeIsGreyDefaultColorSelected_(selectedColor_)',
            },
            isMainColorSelected_: {
                type: Boolean,
                computed: 'computeIsMainColorSelected_(selectedColor_)',
            },
            isCustomColorSelected_: {
                type: Boolean,
                computed: 'computeIsCustomColorSelected_(selectedColor_)',
            },
            customColor_: {
                type: Object,
                value: () => document.documentElement.hasAttribute('chrome-refresh-2023') ?
                    {} :
                    {
                        background: { value: 0xffffffff },
                        foreground: { value: 0xfff1f3f4 },
                    },
            },
            showManagedDialog_: Boolean,
            showBackgroundColor_: {
                type: Boolean,
                computed: 'computeShowBackgroundColor_(theme_)',
            },
            showCustomColorBackgroundColor_: {
                type: Boolean,
                computed: 'computeShowCustomColorBackgroundColor_(theme_)',
            },
            showMainColor_: {
                type: Boolean,
                computed: 'computeShowMainColor_(theme_)',
            },
            isChromeRefresh2023_: {
                type: Boolean,
                value: () => document.documentElement.hasAttribute('chrome-refresh-2023'),
            },
            columns: {
                type: Number,
                value: 4,
            },
        };
    }
    static get observers() {
        return [
            'updateCustomColor_(colors_, theme_, isCustomColorSelected_)',
            'updateColors_(theme_)',
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.handler_ = ThemeColorPickerBrowserProxy.getInstance().handler;
        this.setThemeListenerId_ =
            ThemeColorPickerBrowserProxy.getInstance()
                .callbackRouter.setTheme.addListener((theme) => {
                this.theme_ = theme;
            });
        this.handler_.updateTheme();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        ThemeColorPickerBrowserProxy.getInstance().callbackRouter.removeListener(this.setThemeListenerId_);
    }
    computeDefaultColor_() {
        if (this.isChromeRefresh2023_) {
            return this.theme_.isDarkMode ? DARK_BASELINE_BLUE_COLOR :
                LIGHT_BASELINE_BLUE_COLOR;
        }
        return this.theme_.isDarkMode ? DARK_DEFAULT_COLOR : LIGHT_DEFAULT_COLOR;
    }
    computeGreyDefaultColor_() {
        return this.theme_.isDarkMode ? DARK_BASELINE_GREY_COLOR :
            LIGHT_BASELINE_GREY_COLOR;
    }
    computeMainColor_() {
        return this.theme_ && this.theme_.backgroundImageMainColor;
    }
    computeSelectedColor_() {
        if (!this.colors_ || !this.theme_) {
            return { type: ColorType.NONE };
        }
        if (this.isChromeRefresh2023_ && this.theme_.isGreyBaseline) {
            return { type: ColorType.GREY };
        }
        if (!this.theme_.foregroundColor) {
            return { type: ColorType.DEFAULT };
        }
        if (this.theme_.backgroundImageMainColor &&
            this.theme_.backgroundImageMainColor.value ===
                this.theme_.seedColor.value) {
            if (this.isChromeRefresh2023_) {
                return { type: ColorType.CUSTOM };
            }
            return { type: ColorType.MAIN };
        }
        if (this.colors_.find((color) => color.seed.value === this.theme_.seedColor.value &&
            color.variant === this.theme_.browserColorVariant)) {
            return {
                type: ColorType.CHROME,
                chromeColor: this.theme_.seedColor,
                variant: this.theme_.browserColorVariant,
            };
        }
        return { type: ColorType.CUSTOM };
    }
    computeIsDefaultColorSelected_() {
        return this.selectedColor_.type === ColorType.DEFAULT;
    }
    computeIsGreyDefaultColorSelected_() {
        return this.selectedColor_.type === ColorType.GREY;
    }
    computeIsMainColorSelected_() {
        return this.selectedColor_.type === ColorType.MAIN;
    }
    computeIsCustomColorSelected_() {
        return this.selectedColor_.type === ColorType.CUSTOM;
    }
    isChromeColorSelected_(color, variant) {
        return this.selectedColor_.type === ColorType.CHROME &&
            this.selectedColor_.chromeColor.value === color.value &&
            this.selectedColor_.variant === variant;
    }
    boolToString_(value) {
        return value ? 'true' : 'false';
    }
    getChromeColorCheckedStatus_(color, variant) {
        return this.boolToString_(this.isChromeColorSelected_(color, variant));
    }
    chromeColorTabIndex_(color, variant) {
        return this.selectedColor_.type === ColorType.CHROME &&
            this.selectedColor_.chromeColor.value === color.value &&
            this.selectedColor_.variant === variant ?
            '0' :
            '-1';
    }
    tabIndex_(selected) {
        return selected ? '0' : '-1';
    }
    themeHasBackgroundImage_() {
        return !!this.theme_ && !!this.theme_.hasBackgroundImage;
    }
    computeShowMainColor_() {
        return !this.isChromeRefresh2023_ && !!this.theme_ &&
            !!this.theme_.backgroundImageMainColor;
    }
    computeShowBackgroundColor_() {
        return this.isChromeRefresh2023_ || !this.themeHasBackgroundImage_();
    }
    computeShowCustomColorBackgroundColor_() {
        return !this.isChromeRefresh2023_ && !this.themeHasBackgroundImage_();
    }
    onDefaultColorClick_() {
        if (this.handleClickForManagedColors_()) {
            return;
        }
        this.handler_.setDefaultColor();
    }
    onGreyDefaultColorClick_() {
        if (this.handleClickForManagedColors_()) {
            return;
        }
        this.handler_.setGreyDefaultColor();
    }
    onMainColorClick_() {
        if (this.handleClickForManagedColors_()) {
            return;
        }
        this.handler_.setSeedColor(this.theme_.backgroundImageMainColor, BrowserColorVariant.kTonalSpot);
    }
    onChromeColorClick_(e) {
        if (this.handleClickForManagedColors_()) {
            return;
        }
        const color = this.$.chromeColors.itemForElement(e.target);
        this.handler_.setSeedColor(color.seed, color.variant);
    }
    onCustomColorClick_() {
        if (this.handleClickForManagedColors_()) {
            return;
        }
        if (this.isChromeRefresh2023_) {
            this.$.hueSlider.showAt(this.$.customColorContainer);
        }
        else {
            this.$.colorPicker.focus();
            this.$.colorPicker.click();
        }
    }
    onCustomColorChange_(e) {
        this.handler_.setSeedColor(hexColorToSkColor(e.target.value), BrowserColorVariant.kTonalSpot);
    }
    onSelectedHueChanged_() {
        const selectedHue = this.$.hueSlider.selectedHue;
        if (this.theme_ && this.theme_.seedColorHue === selectedHue) {
            return;
        }
        ThemeColorPickerBrowserProxy.getInstance().handler.setSeedColorFromHue(selectedHue);
    }
    updateCustomColor_() {
        // We only change the custom color when theme updates to a new custom color
        // so that the picked color persists while clicking on other color circles.
        if (!this.isCustomColorSelected_) {
            return;
        }
        this.customColor_ = {
            background: this.theme_.backgroundColor,
            foreground: this.theme_.foregroundColor,
        };
        this.$.colorPickerIcon.style.setProperty('background-color', skColorToRgba(this.theme_.colorPickerIconColor));
        if (this.isChromeRefresh2023_) {
            this.$.hueSlider.selectedHue = this.theme_.seedColorHue;
        }
    }
    async updateColors_() {
        this.colors_ =
            (await this.handler_.getChromeColors(this.theme_.isDarkMode, false))
                .colors;
    }
    onManagedDialogClosed_() {
        this.showManagedDialog_ = false;
    }
    handleClickForManagedColors_() {
        if (!this.theme_ || !this.theme_.colorsManagedByPolicy) {
            return false;
        }
        this.showManagedDialog_ = true;
        return true;
    }
}
customElements.define(ThemeColorPickerElement.is, ThemeColorPickerElement);
