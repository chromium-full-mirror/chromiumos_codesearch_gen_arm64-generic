// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-a11y-page' is the small section of advanced settings with
 * a link to the web store accessibility page on most platforms, and
 * a subpage with lots of other settings on Chrome OS.
 */
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '/shared/settings/controls/settings_toggle_button.js';
import '../settings_page/settings_animated_pages.js';
import '../settings_shared.css.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BaseMixin } from '../base_mixin.js';
import { loadTimeData } from '../i18n_setup.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { AccessibilityBrowserProxyImpl } from './a11y_browser_proxy.js';
import { getTemplate } from './a11y_page.html.js';
// clang-format off
// 
// clang-format on
const SettingsA11yPageElementBase = WebUiListenerMixin(BaseMixin(PolymerElement));
class SettingsA11yPageElement extends SettingsA11yPageElementBase {
    constructor() {
        super(...arguments);
        this.accessibilityBrowserProxy = AccessibilityBrowserProxyImpl.getInstance();
        // 
        // 
    }
    static get is() {
        return 'settings-a11y-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The current active route.
             */
            currentRoute: {
                type: Object,
                notify: true,
            },
            /**
             * Preferences state.
             */
            prefs: {
                type: Object,
                notify: true,
            },
            // 
            /**
             * Whether to show accessibility labels settings.
             */
            showAccessibilityLabelsSetting_: {
                type: Boolean,
                value: false,
            },
            /**
             * Whether to show pdf ocr settings.
             */
            showPdfOcrToggle_: {
                type: Boolean,
                value: function () {
                    let isPdfOcrEnabled = false;
                    // 
                    return isPdfOcrEnabled;
                },
            },
            focusConfig_: {
                type: Object,
                value() {
                    const map = new Map();
                    if (routes.CAPTIONS) {
                        map.set(routes.CAPTIONS.path, '#captions');
                    }
                    return map;
                },
            },
            /**
             * Whether the caption settings link opens externally.
             */
            captionSettingsOpensExternally_: {
                type: Boolean,
                value() {
                    let opensExternally = false;
                    // 
                    // 
                    return opensExternally;
                },
            },
            /**
             * Whether to show the overscroll history navigation setting.
             */
            showOverscrollHistoryNavigationToggle_: {
                type: Boolean,
                value: function () {
                    let showOverscroll = false;
                    // 
                    return showOverscroll;
                },
            },
        };
    }
    ready() {
        super.ready();
        this.addWebUiListener('screen-reader-state-changed', (hasScreenReader) => this.onScreenReaderStateChanged_(hasScreenReader));
        // Enables javascript and gets the screen reader state.
        chrome.send('a11yPageReady');
    }
    /**
     * @param hasScreenReader Whether a screen reader is enabled.
     */
    onScreenReaderStateChanged_(hasScreenReader) {
        this.showAccessibilityLabelsSetting_ = hasScreenReader;
        this.showPdfOcrToggle_ =
            hasScreenReader && loadTimeData.getBoolean('pdfOcrEnabled');
    }
    onA11yCaretBrowsingChange_(event) {
        if (event.target.checked) {
            chrome.metricsPrivate.recordUserAction('Accessibility.CaretBrowsing.EnableWithSettings');
        }
        else {
            chrome.metricsPrivate.recordUserAction('Accessibility.CaretBrowsing.DisableWithSettings');
        }
    }
    onA11yImageLabelsChange_(event) {
        const a11yImageLabelsOn = event.target.checked;
        if (a11yImageLabelsOn) {
            chrome.send('confirmA11yImageLabels');
        }
    }
    onPdfOcrChange_(event) {
        const pdfOcrOn = event.target.checked;
        if (pdfOcrOn) {
            console.error('Need to check a pdf ocr model and download it if necessary');
        }
    }
    // 
    // 
    onManageSystemAccessibilityFeaturesClick_() {
        window.location.href = 'chrome://os-settings/osAccessibility';
    }
    // 
    /** private */
    onMoreFeaturesLinkClick_() {
        window.open('https://chrome.google.com/webstore/category/collection/3p_accessibility_extensions');
    }
    onCaptionsClick_() {
        if (this.captionSettingsOpensExternally_) {
            // 
        }
        else {
            Router.getInstance().navigateTo(routes.CAPTIONS);
        }
    }
}
customElements.define(SettingsA11yPageElement.is, SettingsA11yPageElement);
