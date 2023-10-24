// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * The color selector provides the selection of wallpaper or preset colors in
 * keyboard backlight and zone customization section.
 */
import 'chrome://resources/polymer/v3_0/iron-a11y-keys/iron-a11y-keys.js';
import 'chrome://resources/polymer/v3_0/iron-selector/iron-selector.js';
import 'chrome://resources/polymer/v3_0/paper-ripple/paper-ripple.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render.js';
import './color_icon_element.js';
import '../../css/common.css.js';
import '../../css/cros_button_style.css.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { BacklightColor } from '../../personalization_app.mojom-webui.js';
import { isMultiZoneRgbKeyboardSupported } from '../load_time_booleans.js';
import { WithPersonalizationStore } from '../personalization_store.js';
import { getPresetColors, isSelectionEvent, RAINBOW, WALLPAPER, WHITE } from '../utils.js';
import { getTemplate } from './color_selector_element.html.js';
import { getShouldShowNudge, handleNudgeShown } from './keyboard_backlight_controller.js';
import { getKeyboardBacklightProvider } from './keyboard_backlight_interface_provider.js';
const presetColorSelectedEventName = 'preset-color-selected';
const rainbowColorSelectedEventName = 'rainbow-color-selected';
const wallpaperColorSelectedEventName = 'wallpaper-color-selected';
export class ColorSelectorElement extends WithPersonalizationStore {
    static get is() {
        return 'color-selector';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            isCustomizedDialog: {
                type: Boolean,
                value: false,
            },
            ironSelectedColor_: Object,
            isMultiZoneRgbKeyboardSupported_: {
                type: Boolean,
                value() {
                    return isMultiZoneRgbKeyboardSupported();
                },
            },
            presetColors_: {
                type: Object,
                value() {
                    return getPresetColors();
                },
            },
            presetColorIds_: {
                type: Array,
                computed: 'computePresetColorIds_(presetColors_)',
            },
            rainbowColorId_: {
                type: String,
                value: RAINBOW,
            },
            wallpaperColorId_: {
                type: String,
                value: WALLPAPER,
            },
            currentBacklightState_: Object,
            selectedColor: BacklightColor,
            /** The current wallpaper extracted color. */
            wallpaperColor_: Object,
            shouldShowNudge_: {
                type: Boolean,
                value: false,
                observer: 'onShouldShowNudgeChanged_',
            },
        };
    }
    ready() {
        super.ready();
        this.$.keys.target = this.$.selector;
    }
    connectedCallback() {
        super.connectedCallback();
        this.watch('currentBacklightState_', state => state.keyboardBacklight.currentBacklightState);
        this.watch('shouldShowNudge_', state => state.keyboardBacklight.shouldShowNudge);
        this.watch('wallpaperColor_', state => state.keyboardBacklight.wallpaperColor);
        this.updateFromStore();
        getShouldShowNudge(getKeyboardBacklightProvider(), this.getStore());
    }
    /** Handle keyboard navigation. */
    onKeysPress_(e) {
        const selector = this.$.selector;
        const prevButton = this.ironSelectedColor_;
        switch (e.detail.key) {
            case 'left':
                selector.selectPrevious();
                break;
            case 'right':
                selector.selectNext();
                break;
            case 'enter':
                switch (this.ironSelectedColor_.id) {
                    case this.rainbowColorId_:
                        this.dispatchEvent(new CustomEvent(rainbowColorSelectedEventName, { bubbles: true, composed: true, detail: null }));
                        break;
                    case this.wallpaperColorId_:
                        this.dispatchEvent(new CustomEvent(wallpaperColorSelectedEventName, { bubbles: true, composed: true, detail: null }));
                        break;
                    default:
                        this.dispatchEvent(new CustomEvent(presetColorSelectedEventName, {
                            bubbles: true,
                            composed: true,
                            detail: { colorId: this.ironSelectedColor_.id },
                        }));
                        break;
                }
                break;
            default:
                return;
        }
        // Remove focus state of color icon in previous button.
        if (prevButton) {
            const colorIconElem = this.getColorIconElement_(prevButton);
            if (colorIconElem) {
                colorIconElem.removeAttribute('tabindex');
            }
        }
        // Add focus state for the color icon in new button.
        if (this.ironSelectedColor_) {
            const colorIconElem = this.getColorIconElement_(this.ironSelectedColor_);
            if (colorIconElem) {
                colorIconElem.setAttribute('tabindex', '0');
                colorIconElem.focus();
            }
        }
        e.detail.keyboardEvent.preventDefault();
    }
    shouldShowRainbowColorItem_() {
        return !this.isCustomizedDialog;
    }
    computePresetColorIds_(presetColors) {
        // ES2020 maintains ordering of Object.keys.
        return Object.keys(presetColors);
    }
    /** Invoked when the wallpaper color is selected. */
    onWallpaperColorSelected_(e) {
        if (!isSelectionEvent(e)) {
            return;
        }
        const eventTarget = e.target;
        if (eventTarget.id === 'wallpaperColorIcon') {
            // Only dispatch the event if the icon is clicked.
            this.dispatchEvent(new CustomEvent(wallpaperColorSelectedEventName, { bubbles: true, composed: true, detail: null }));
        }
    }
    /** Invoked when a preset color is selected. */
    onPresetColorSelected_(e) {
        if (!isSelectionEvent(e)) {
            return;
        }
        const htmlElement = e.currentTarget;
        const colorId = htmlElement.id;
        assert(colorId !== undefined, 'colorId not found');
        this.dispatchEvent(new CustomEvent(presetColorSelectedEventName, { bubbles: true, composed: true, detail: { colorId: colorId } }));
    }
    /** Invoked when the rainbow color is selected. */
    onRainbowColorSelected_(e) {
        if (!isSelectionEvent(e)) {
            return;
        }
        this.dispatchEvent(new CustomEvent(rainbowColorSelectedEventName, { bubbles: true, composed: true, detail: null }));
    }
    onShouldShowNudgeChanged_(shouldShowNudge) {
        if (shouldShowNudge) {
            setTimeout(() => {
                handleNudgeShown(getKeyboardBacklightProvider(), this.getStore());
            }, 3000);
        }
    }
    getColorIconElement_(button) {
        return this.shadowRoot.getElementById(button.id).querySelector('color-icon');
    }
    getColorSelectorAriaLabel_() {
        return loadTimeData.getString('keyboardBacklightTitle');
    }
    getPresetColorTabIndex_(isMultiZoneRgbKeyboardSupported, presetColorId) {
        return isMultiZoneRgbKeyboardSupported && presetColorId === WHITE ? '0' :
            '-1';
    }
    getPresetColorAriaLabel_(presetColorId) {
        return this.i18n(presetColorId);
    }
    getWallpaperColorContainerClass_(selectedColor) {
        return this.getColorContainerClass_(this.getWallpaperColorAriaChecked_(selectedColor));
    }
    getPresetColorContainerClass_(colorId, colors, selectedColor) {
        return this.getColorContainerClass_(this.getPresetColorAriaChecked_(colorId, colors, selectedColor));
    }
    getRainbowColorContainerClass_(selectedColor) {
        return this.getColorContainerClass_(this.getRainbowColorAriaChecked_(selectedColor));
    }
    getColorContainerClass_(isSelected) {
        const defaultClassName = 'selectable';
        return isSelected === 'true' ? `${defaultClassName} tast-selected-color` :
            defaultClassName;
    }
    getWallpaperColorAriaChecked_(selectedColor) {
        return (selectedColor === BacklightColor.kWallpaper).toString();
    }
    getPresetColorAriaChecked_(colorId, colors, selectedColor) {
        if (!colorId || !colors[colorId]) {
            return 'false';
        }
        return (colors[colorId].enumVal === selectedColor).toString();
    }
    getRainbowColorAriaChecked_(selectedColor) {
        return (selectedColor === BacklightColor.kRainbow).toString();
    }
    getWallpaperColorTitle_() {
        return this.i18n('wallpaperColorTooltipText');
    }
}
customElements.define(ColorSelectorElement.is, ColorSelectorElement);
