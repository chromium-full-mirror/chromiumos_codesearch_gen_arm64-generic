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
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BaseMixin } from '../base_mixin.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { AccessibilityBrowserProxyImpl } from './a11y_browser_proxy.js';
import { getTemplate } from './a11y_page.html.js';
// clang-format off
// 
// clang-format on
const SettingsA11yPageElementBase = PrefsMixin(WebUiListenerMixin(BaseMixin(PolymerElement)));
export class SettingsA11yPageElement extends SettingsA11yPageElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = AccessibilityBrowserProxyImpl.getInstance();
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
             * Indicate whether a screen reader is enabled. Also, determine whether
             * to show accessibility labels settings.
             */
            hasScreenReader_: {
                type: Boolean,
                value: false,
            },
            // 
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
    // 
    connectedCallback() {
        super.connectedCallback();
        const updateScreenReaderState = (hasScreenReader) => {
            this.hasScreenReader_ = hasScreenReader;
        };
        this.browserProxy_.getScreenReaderState().then(updateScreenReaderState);
        this.addWebUiListener('screen-reader-state-changed', updateScreenReaderState);
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
    // 
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
