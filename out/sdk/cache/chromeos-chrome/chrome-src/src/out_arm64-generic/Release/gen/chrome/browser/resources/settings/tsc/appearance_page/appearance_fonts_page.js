// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import '../controls/settings_slider.js';
import '../settings_shared.css.js';
import '../controls/settings_dropdown_menu.js';
import { FontsBrowserProxyImpl } from '/shared/settings/appearance_page/fonts_browser_proxy.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './appearance_fonts_page.html.js';
const FONT_SIZE_RANGE = [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 22, 24,
    26, 28, 30, 32, 34, 36, 40, 44, 48, 56, 64, 72,
];
const MINIMUM_FONT_SIZE_RANGE = [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 22, 24];
function ticksWithLabels(ticks) {
    return ticks.map(x => ({ label: `${x}`, value: x, ariaValue: undefined }));
}
export class SettingsAppearanceFontsPageElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.browserProxy_ = FontsBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-appearance-fonts-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            fontOptions_: Object,
            /** Common font sizes. */
            fontSizeRange_: {
                readOnly: true,
                type: Array,
                value: ticksWithLabels(FONT_SIZE_RANGE),
            },
            /** Reasonable, minimum font sizes. */
            minimumFontSizeRange_: {
                readOnly: true,
                type: Array,
                value: ticksWithLabels(MINIMUM_FONT_SIZE_RANGE),
            },
            /**
             * Preferences state.
             */
            prefs: {
                type: Object,
                notify: true,
            },
        };
    }
    static get observers() {
        return [
            'onMinimumSizeChange_(prefs.webkit.webprefs.minimum_font_size.value)',
        ];
    }
    ready() {
        super.ready();
        this.browserProxy_.fetchFontsData().then(this.setFontsData_.bind(this));
    }
    setFontsData_(response) {
        const fontMenuOptions = [];
        for (const fontData of response.fontList) {
            fontMenuOptions.push({ value: fontData[0], name: fontData[1] });
        }
        this.fontOptions_ = fontMenuOptions;
    }
    /**
     * Get the minimum font size, accounting for unset prefs.
     */
    computeMinimumFontSize_() {
        const prefValue = this.get('prefs.webkit.webprefs.minimum_font_size.value');
        return prefValue || MINIMUM_FONT_SIZE_RANGE[0];
    }
    onMinimumSizeChange_() {
        this.$.minimumSizeFontPreview.hidden = this.computeMinimumFontSize_() <= 0;
    }
}
customElements.define(SettingsAppearanceFontsPageElement.is, SettingsAppearanceFontsPageElement);
