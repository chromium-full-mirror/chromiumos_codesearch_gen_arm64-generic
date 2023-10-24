// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-multidevice-wifi-sync-disabled-link' creates a
 * localized string with accessibility labels for the Wifi Sync feature when
 * the prerequisite Chrome Sync setting is not enabled.
 *
 * The localized string is treated as a special case for accessibility
 * labelling since it contains two links, one to the Chrome Sync dependency
 * and the other to a Learn More page for Wifi Sync.
 */
import '../settings_shared.css.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { Router, routes } from '../router.js';
import { MultiDeviceFeatureMixin } from './multidevice_feature_mixin.js';
import { getTemplate } from './multidevice_wifi_sync_disabled_link.html.js';
const SettingsMultideviceWifiSyncDisabledLinkElementBase = MultiDeviceFeatureMixin(PolymerElement);
export class SettingsMultideviceWifiSyncDisabledLinkElement extends SettingsMultideviceWifiSyncDisabledLinkElementBase {
    static get is() {
        return 'settings-multidevice-wifi-sync-disabled-link';
    }
    static get template() {
        return getTemplate();
    }
    getAriaLabelledContent_() {
        const tempEl = document.createElement('div');
        tempEl.innerHTML = this.i18nAdvanced('multideviceEnableWifiSyncV1ItemSummary', { attrs: ['id'] });
        tempEl.childNodes.forEach((node, index) => {
            // Text nodes should be aria-hidden
            if (node.nodeType === Node.TEXT_NODE) {
                const spanNode = document.createElement('span');
                spanNode.textContent = node.textContent;
                spanNode.id = `id${index}`;
                spanNode.setAttribute('aria-hidden', 'true');
                node.replaceWith(spanNode);
            }
        });
        const chromeSyncLink = castExists(tempEl.querySelector('#chromeSyncLink'));
        const learnMoreLink = castExists(tempEl.querySelector('#learnMoreLink'));
        chromeSyncLink.setAttribute('aria-label', this.i18n('multideviceWifiSyncChromeSyncLabel'));
        learnMoreLink.setAttribute('aria-label', this.i18n('multideviceWifiSyncLearnMoreLabel'));
        chromeSyncLink.href = '#';
        return sanitizeInnerHtml(tempEl.innerHTML, {
            tags: ['span', 'a'],
            attrs: ['id', 'aria-label', 'aria-hidden', 'target', 'href'],
        });
    }
    connectedCallback() {
        super.connectedCallback();
        const chromeSyncLink = this.shadowRoot.querySelector('#chromeSyncLink');
        if (chromeSyncLink) {
            chromeSyncLink.addEventListener('click', this.onChromeSyncLinkClick_.bind(this));
        }
    }
    onChromeSyncLinkClick_(event) {
        event.preventDefault();
        Router.getInstance().navigateTo(routes.OS_SYNC);
    }
}
customElements.define(SettingsMultideviceWifiSyncDisabledLinkElement.is, SettingsMultideviceWifiSyncDisabledLinkElement);
