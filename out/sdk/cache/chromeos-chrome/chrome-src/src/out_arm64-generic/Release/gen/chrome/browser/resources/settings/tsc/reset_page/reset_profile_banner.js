// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-reset-profile-banner' is the banner shown for prompting the user to
 * clear profile settings.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { ResetBrowserProxyImpl } from './reset_browser_proxy.js';
import { getTemplate } from './reset_profile_banner.html.js';
export class SettingsResetProfileBannerElement extends PolymerElement {
    static get is() {
        return 'settings-reset-profile-banner';
    }
    static get template() {
        return getTemplate();
    }
    connectedCallback() {
        super.connectedCallback();
        this.$.dialog.showModal();
    }
    onOkClick_() {
        this.$.dialog.cancel();
    }
    onCancel_() {
        ResetBrowserProxyImpl.getInstance().onHideResetProfileBanner();
    }
    onResetClick_() {
        this.$.dialog.close();
        Router.getInstance().navigateTo(routes.RESET_DIALOG);
    }
}
customElements.define(SettingsResetProfileBannerElement.is, SettingsResetProfileBannerElement);
