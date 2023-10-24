// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/polymer/v3_0/iron-pages/iron-pages.js';
import 'chrome://resources/polymer/v3_0/paper-ripple/paper-ripple.js';
import { assert } from 'chrome://resources/js/assert.js';
import { skColorToRgba } from 'chrome://resources/js/color_utils.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { CustomizeChromeApiProxy } from './customize_chrome_api_proxy.js';
import { getTemplate } from './theme_snapshot.html.js';
export var CustomizeThemeType;
(function (CustomizeThemeType) {
    CustomizeThemeType["CLASSIC_CHROME"] = "classicChrome";
    CustomizeThemeType["CUSTOM_THEME"] = "customTheme";
    CustomizeThemeType["UPLOADED_IMAGE"] = "uploadedImage";
})(CustomizeThemeType || (CustomizeThemeType = {}));
/** Element used to display a snapshot of the NTP. */
export class ThemeSnapshotElement extends PolymerElement {
    static get is() {
        return 'customize-chrome-theme-snapshot';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            chromeRefresh2023Enabled_: {
                type: Boolean,
            },
            theme_: Object,
            themeType_: {
                type: String,
                computed: 'computeThemeType_(theme_)',
            },
        };
    }
    constructor() {
        super();
        this.theme_ = undefined;
        this.themeType_ = null;
        this.setThemeListenerId_ = null;
        this.pageHandler_ = CustomizeChromeApiProxy.getInstance().handler;
        this.callbackRouter_ = CustomizeChromeApiProxy.getInstance().callbackRouter;
    }
    connectedCallback() {
        super.connectedCallback();
        this.chromeRefresh2023Enabled_ =
            document.documentElement.hasAttribute('chrome-refresh-2023');
        this.setThemeListenerId_ =
            this.callbackRouter_.setTheme.addListener((theme) => {
                this.theme_ = theme;
                if (this.theme_) {
                    this.updateStyles({
                        '--customize-chrome-color-background-color': skColorToRgba(this.theme_.backgroundColor),
                    });
                }
            });
        this.pageHandler_.updateTheme();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setThemeListenerId_);
        this.callbackRouter_.removeListener(this.setThemeListenerId_);
    }
    computeThemeType_() {
        if (this.theme_) {
            if (!this.theme_.backgroundImage) {
                return CustomizeThemeType.CLASSIC_CHROME;
            }
            else if (this.theme_.backgroundImage.isUploadedImage) {
                return CustomizeThemeType.UPLOADED_IMAGE;
            }
            else if (this.theme_.backgroundImage.snapshotUrl?.url) {
                return CustomizeThemeType.CUSTOM_THEME;
            }
        }
        return null;
    }
    onThemeSnapshotClick_() {
        if (!this.chromeRefresh2023Enabled_ ||
            (this.theme_ && this.theme_.backgroundManagedByPolicy)) {
            return;
        }
        this.dispatchEvent(new Event('edit-theme-click'));
    }
}
customElements.define(ThemeSnapshotElement.is, ThemeSnapshotElement);
