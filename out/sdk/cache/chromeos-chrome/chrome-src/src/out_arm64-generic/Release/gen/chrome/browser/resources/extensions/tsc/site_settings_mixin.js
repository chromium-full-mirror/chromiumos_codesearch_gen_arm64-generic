// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export const SiteSettingsMixin = dedupingMixin((superClass) => {
    class SiteSettingsMixin extends superClass {
        static get properties() {
            return {
                delegate: Object,
                enableEnhancedSiteControls: Boolean,
                restrictedSites: {
                    type: Array,
                    value: [],
                },
                permittedSites: {
                    type: Array,
                    value: [],
                },
            };
        }
        ready() {
            super.ready();
            if (this.enableEnhancedSiteControls) {
                this.delegate.getUserSiteSettings().then(this.onUserSiteSettingsChanged_.bind(this));
                this.delegate.getUserSiteSettingsChangedTarget().addListener(this.onUserSiteSettingsChanged_.bind(this));
            }
        }
        onUserSiteSettingsChanged_({ permittedSites, restrictedSites, }) {
            this.permittedSites = permittedSites;
            this.restrictedSites = restrictedSites;
        }
    }
    return SiteSettingsMixin;
});
