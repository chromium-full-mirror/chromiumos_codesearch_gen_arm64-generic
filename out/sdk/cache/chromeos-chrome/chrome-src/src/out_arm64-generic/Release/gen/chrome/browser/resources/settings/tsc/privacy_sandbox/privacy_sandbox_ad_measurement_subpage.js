// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_components/settings_prefs/prefs.js';
import '../controls/settings_toggle_button.js';
import '../settings_columned_section.css.js';
import '../settings_shared.css.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { HatsBrowserProxyImpl, TrustSafetyInteraction } from '../hats_browser_proxy.js';
import { MetricsBrowserProxyImpl } from '../metrics_browser_proxy.js';
import { routes } from '../route.js';
import { RouteObserverMixin } from '../router.js';
import { getTemplate } from './privacy_sandbox_ad_measurement_subpage.html.js';
const SettingsPrivacySandboxAdMeasurementSubpageElementBase = RouteObserverMixin(PrefsMixin(PolymerElement));
export class SettingsPrivacySandboxAdMeasurementSubpageElement extends SettingsPrivacySandboxAdMeasurementSubpageElementBase {
    constructor() {
        super(...arguments);
        this.metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-privacy-sandbox-ad-measurement-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Preferences state.
             */
            prefs: {
                type: Object,
                notify: true,
            },
        };
    }
    currentRouteChanged(newRoute) {
        if (newRoute === routes.PRIVACY_SANDBOX_AD_MEASUREMENT) {
            HatsBrowserProxyImpl.getInstance().trustSafetyInteractionOccurred(TrustSafetyInteraction.OPENED_AD_MEASUREMENT_SUBPAGE);
        }
    }
    onToggleChange_(e) {
        const target = e.target;
        this.metricsBrowserProxy_.recordAction(target.checked ? 'Settings.PrivacySandbox.AdMeasurement.Enabled' :
            'Settings.PrivacySandbox.AdMeasurement.Disabled');
    }
}
customElements.define(SettingsPrivacySandboxAdMeasurementSubpageElement.is, SettingsPrivacySandboxAdMeasurementSubpageElement);
