// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/polymer/v3_0/iron-a11y-keys/iron-a11y-keys.js';
import 'chrome://resources/polymer/v3_0/iron-selector/iron-selector.js';
import 'chrome://resources/polymer/v3_0/paper-ripple/paper-ripple.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render.js';
import './color_icon_element.js';
import '../../css/common.css.js';
import '../../css/cros_button_style.css.js';
import { assert } from 'chrome://resources/js/assert.js';
import { BacklightColor } from '../../personalization_app.mojom-webui.js';
import { isMultiZoneRgbKeyboardSupported } from '../load_time_booleans.js';
import { logKeyboardBacklightOpenZoneCustomizationUMA } from '../personalization_metrics_logger.js';
import { WithPersonalizationStore } from '../personalization_store.js';
import { getPresetColors, RAINBOW, WALLPAPER } from '../utils.js';
import { setBacklightColor } from './keyboard_backlight_controller.js';
import { getTemplate } from './keyboard_backlight_element.html.js';
import { getKeyboardBacklightProvider } from './keyboard_backlight_interface_provider.js';
import { KeyboardBacklightObserver } from './keyboard_backlight_observer.js';
/**
 * @fileoverview
 * The keyboard backlight section that allows users to customize their keyboard
 * backlight colors.
 */
export class KeyboardBacklightElement extends WithPersonalizationStore {
    static get is() {
        return 'keyboard-backlight';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
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
            backlightColor_: {
                type: Object,
                computed: 'computeBacklightColor_(currentBacklightState_)',
            },
            /** The color currently highlighted by keyboard navigation. */
            ironSelectedColor_: Object,
            /** The current backlight state in the system. */
            currentBacklightState_: Object,
            /** The current wallpaper extracted color. */
            wallpaperColor_: Object,
            isZoneCustomizationDialogOpen_: {
                type: Boolean,
                value: false,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        KeyboardBacklightObserver.initKeyboardBacklightObserverIfNeeded();
        this.watch('currentBacklightState_', state => state.keyboardBacklight.currentBacklightState);
        this.watch('wallpaperColor_', state => state.keyboardBacklight.wallpaperColor);
        this.updateFromStore();
    }
    computePresetColorIds_(presetColors) {
        // ES2020 maintains ordering of Object.keys.
        return Object.keys(presetColors);
    }
    computeBacklightColor_(currentBacklightState) {
        return currentBacklightState ? currentBacklightState.color : null;
    }
    /** Invoked when the wallpaper color is selected. */
    onWallpaperColorSelected_() {
        setBacklightColor(BacklightColor.kWallpaper, getKeyboardBacklightProvider(), this.getStore());
    }
    /** Invoked when a preset color is selected. */
    onPresetColorSelected_(e) {
        const colorId = e.detail.colorId;
        assert(colorId !== undefined, 'colorId not found');
        setBacklightColor(this.presetColors_[colorId].enumVal, getKeyboardBacklightProvider(), this.getStore());
    }
    /** Invoked when the rainbow color is selected. */
    onRainbowColorSelected_() {
        setBacklightColor(BacklightColor.kRainbow, getKeyboardBacklightProvider(), this.getStore());
    }
    showZoneCustomizationDialog_() {
        assert(this.isMultiZoneRgbKeyboardSupported_, 'zone customization dialog only available if multi-zone is supported');
        logKeyboardBacklightOpenZoneCustomizationUMA();
        this.isZoneCustomizationDialogOpen_ = true;
    }
    closeZoneCustomizationDialog_() {
        this.isZoneCustomizationDialogOpen_ = false;
    }
    getZoneCustomizationButtonAriaPressed_(currentBacklightState) {
        return (!!currentBacklightState && !!currentBacklightState.zoneColors)
            .toString();
    }
}
customElements.define(KeyboardBacklightElement.is, KeyboardBacklightElement);
