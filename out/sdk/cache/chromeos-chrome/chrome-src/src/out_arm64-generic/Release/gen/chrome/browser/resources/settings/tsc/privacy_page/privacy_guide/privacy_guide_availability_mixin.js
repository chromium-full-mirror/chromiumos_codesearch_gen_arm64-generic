// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from '../../i18n_setup.js';
export const PrivacyGuideAvailabilityMixin = dedupingMixin((superClass) => {
    const superClassBase = WebUiListenerMixin(superClass);
    class PrivacyGuideAvailabilityMixinInternal extends superClassBase {
        static get properties() {
            return {
                isPrivacyGuideAvailable: {
                    type: Boolean,
                    value: () => loadTimeData.getBoolean('showPrivacyGuide'),
                },
            };
        }
        connectedCallback() {
            super.connectedCallback();
            this.addWebUiListener('is-managed-changed', (isManaged) => this.onPrivacyGuideAvailabilityChanged_(!isManaged));
            this.addWebUiListener('sync-status-changed', (syncStatus) => this.onPrivacyGuideAvailabilityChanged_(!syncStatus.supervisedUser));
        }
        onPrivacyGuideAvailabilityChanged_(isAvailable) {
            // If the Privacy Guide becomes unavailable, then hide the entry
            // point. However, if the Privacy Guide was unavailable before, but
            // now is, then do not make the privacy guide entry point visible,
            // as the Settings route for privacy guide would still be unavailable
            // until the page is reloaded.
            this.isPrivacyGuideAvailable =
                this.isPrivacyGuideAvailable && isAvailable;
        }
    }
    return PrivacyGuideAvailabilityMixinInternal;
});
