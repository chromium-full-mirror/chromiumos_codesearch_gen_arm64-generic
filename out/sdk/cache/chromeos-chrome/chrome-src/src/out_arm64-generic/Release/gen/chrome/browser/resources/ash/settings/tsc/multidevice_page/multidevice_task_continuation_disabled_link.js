// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-multidevice-task-continuation-disabled-link'
 * creates a localized string with accessibility labels for the Phone Hub Task
 * continuation feature when the prerequisite Chrome Sync setting is not
 * enabled.
 *
 * The localized string is treated as a special case for accessibility
 * labelling since it contains two links, one to the Chrome Sync dependency
 * and the other to a Learn More page for Phone Hub.
 */
import '../settings_shared.css.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { MultiDeviceBrowserProxyImpl } from './multidevice_browser_proxy.js';
import { getTemplate } from './multidevice_task_continuation_disabled_link.html.js';
const SettingsMultideviceTaskContinuationDisabledLinkElementBase = I18nMixin(PolymerElement);
/** @polymer */
export class SettingsMultideviceTaskContinuationDisabledLinkElement extends SettingsMultideviceTaskContinuationDisabledLinkElementBase {
    static get is() {
        return 'settings-multidevice-task-continuation-disabled-link';
    }
    static get template() {
        return getTemplate();
    }
    constructor() {
        super();
        this.browserProxy_ = MultiDeviceBrowserProxyImpl.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        const chromeSyncLink = this.shadowRoot.querySelector('#chromeSyncLink');
        if (chromeSyncLink) {
            chromeSyncLink.addEventListener('click', this.onChromeSyncLinkClick_.bind(this));
        }
    }
    /**
     * @return  Localized summary of Task Continuation when Chrome Sync is
     *     turned off, formatted with correct aria-labels and click events.
     */
    getAriaLabelledContent_() {
        const tempEl = document.createElement('div');
        tempEl.innerHTML = this.i18nAdvanced('multidevicePhoneHubTaskContinuationDisabledSummary', { attrs: ['id'] });
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
        chromeSyncLink.setAttribute('aria-label', this.i18n('multidevicePhoneHubTaskContinuationSyncLabel'));
        learnMoreLink.setAttribute('aria-label', this.i18n('multidevicePhoneHubLearnMoreLabel'));
        chromeSyncLink.href = '#';
        return sanitizeInnerHtml(tempEl.innerHTML, {
            tags: ['span', 'a'],
            attrs: ['id', 'aria-hidden', 'aria-label', 'href', 'target'],
        });
    }
    onChromeSyncLinkClick_(event) {
        event.preventDefault();
        this.browserProxy_.showBrowserSyncSettings();
        const openedBrowserAdvancedSyncSettingsEvent = new CustomEvent('opened-browser-advanced-sync-settings', { bubbles: true, composed: true });
        this.dispatchEvent(openedBrowserAdvancedSyncSettingsEvent);
    }
}
customElements.define(SettingsMultideviceTaskContinuationDisabledLinkElement.is, SettingsMultideviceTaskContinuationDisabledLinkElement);
