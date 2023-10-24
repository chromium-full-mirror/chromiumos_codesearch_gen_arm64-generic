// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer mixin for scrolling/focusing/indicating
 * setting elements with deep links.
 */
import { afterNextRender, dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getSettingIdParameter } from './common/setting_id_param_util.js';
import { Setting } from './mojom-webui/setting.mojom-webui.js';
const DEEP_LINK_FOCUS_ID = 'deep-link-focus-id';
export const DeepLinkingMixin = dedupingMixin((superClass) => {
    class DeepLinkingMixinInternal extends superClass {
        static get properties() {
            return {
                /**
                 * An object whose values are the kSetting mojom values. Defined
                 * as a property so that the Setting enum values can be used in
                 * the element's HTML template to define deep link ID attributes.
                 */
                Setting: {
                    type: Object,
                    value: Setting,
                },
                /**
                 * Set of setting IDs that could be deep linked to. Initialized as
                 * an empty set, should be overridden with applicable setting IDs.
                 */
                supportedSettingIds: {
                    type: Object,
                    value: () => new Set(),
                },
            };
        }
        /**
         * Retrieves the settingId saved in the url's query parameter. Returns
         * null if deep linking is disabled or if no settingId is found.
         */
        getDeepLinkSettingId() {
            const settingIdStr = getSettingIdParameter();
            if (!settingIdStr) {
                return null;
            }
            const settingIdNum = Number(settingIdStr);
            if (isNaN(settingIdNum)) {
                return null;
            }
            return settingIdNum;
        }
        /**
         * Focuses the deep linked element referred to by |settingId|. Returns a
         * Promise for an object that reflects if the deep link was shown or
         * not. The object has a boolean |deepLinkShown| and any
         * |pendingSettingId| that couldn't be shown.
         */
        showDeepLink(settingId) {
            return new Promise(resolve => {
                afterNextRender(this, () => {
                    const elToFocus = this.shadowRoot.querySelector(`[${DEEP_LINK_FOCUS_ID}~="${settingId}"]`);
                    if (!elToFocus || elToFocus.hidden) {
                        console.warn(`Element with deep link id ${settingId} not focusable.`);
                        resolve({ deepLinkShown: false, pendingSettingId: settingId });
                        return;
                    }
                    this.showDeepLinkElement(elToFocus);
                    resolve({ deepLinkShown: true, pendingSettingId: settingId });
                });
            });
        }
        /**
         * Focuses the deep linked element |elem|. Returns whether the deep link
         * was shown or not.
         */
        showDeepLinkElement(elToFocus) {
            elToFocus.focus();
        }
        /**
         * Override this method to execute code after a supported settingId is
         * found and before the deep link is shown. Returns whether or not the
         * deep link attempt should continue. Default behavior is to no op and
         * then return true, continuing the deep link attempt.
         */
        beforeDeepLinkAttempt(_settingId) {
            return true;
        }
        /**
         * Checks if there are settingIds that can be linked to and attempts to
         * show the deep link. Returns a Promise for an object that reflects if
         * the deep link was shown or not. The object has a boolean
         * |deepLinkShown| and any |pendingSettingId| that couldn't be shown.
         */
        attemptDeepLink() {
            const settingId = this.getDeepLinkSettingId();
            // Explicitly check for null to handle settingId = 0.
            if (settingId === null || !this.supportedSettingIds.has(settingId)) {
                // No deep link was shown since the settingId was unsupported.
                return Promise.resolve({ deepLinkShown: false, pendingSettingId: null });
            }
            const shouldContinue = this.beforeDeepLinkAttempt(settingId);
            if (!shouldContinue) {
                // Don't continue the deep link attempt since it was presumably
                // handled manually in beforeDeepLinkAttempt().
                return Promise.resolve({ deepLinkShown: false, pendingSettingId: settingId });
            }
            return this.showDeepLink(settingId);
        }
    }
    return DeepLinkingMixinInternal;
});
