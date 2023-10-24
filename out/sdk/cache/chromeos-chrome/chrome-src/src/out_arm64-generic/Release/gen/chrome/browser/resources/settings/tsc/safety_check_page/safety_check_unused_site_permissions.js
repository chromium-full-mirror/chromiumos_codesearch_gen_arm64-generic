// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-safety-unused-site-permissions' is the settings page containing the
 * safety check unused site permissions module showing the unused sites that has
 * some granted permissions.
 */
// clang-format off
import './safety_check_child.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { MetricsBrowserProxyImpl, SafetyCheckInteractions } from '../metrics_browser_proxy.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { SafetyHubBrowserProxyImpl, SafetyHubEvent } from '../safety_hub/safety_hub_browser_proxy.js';
import { SafetyCheckIconStatus } from './safety_check_child.js';
import { getTemplate } from './safety_check_unused_site_permissions.html.js';
const SettingsSafetyCheckUnusedSitePermissionsElementBase = WebUiListenerMixin(PolymerElement);
export class SettingsSafetyCheckUnusedSitePermissionsElement extends SettingsSafetyCheckUnusedSitePermissionsElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = SafetyHubBrowserProxyImpl.getInstance();
        this.metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-safety-check-unused-site-permissions';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            iconStatus_: {
                type: SafetyCheckIconStatus,
                value() {
                    return SafetyCheckIconStatus.UNUSED_SITE_PERMISSIONS;
                },
            },
            headerString_: String,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // Register for review notification permission list updates.
        this.addWebUiListener(SafetyHubEvent.UNUSED_PERMISSIONS_MAYBE_CHANGED, (sites) => {
            this.onSitesChanged_(sites);
        });
        this.browserProxy_.getRevokedUnusedSitePermissionsList().then(this.onSitesChanged_.bind(this));
    }
    async onSitesChanged_(sites) {
        this.headerString_ =
            await PluralStringProxyImpl.getInstance().getPluralString('safetyCheckUnusedSitePermissionsHeaderLabel', sites.length);
    }
    onButtonClick_() {
        // Log click both in action and histogram.
        this.metricsBrowserProxy_.recordSafetyCheckInteractionHistogram(SafetyCheckInteractions.UNUSED_SITE_PERMISSIONS_REVIEW);
        this.metricsBrowserProxy_.recordAction('Settings.SafetyCheck.ReviewUnusedSitePermissions');
        Router.getInstance().navigateTo(routes.SITE_SETTINGS, /* dynamicParams= */ undefined, 
        /* removeSearch= */ true);
    }
}
customElements.define(SettingsSafetyCheckUnusedSitePermissionsElement.is, SettingsSafetyCheckUnusedSitePermissionsElement);
