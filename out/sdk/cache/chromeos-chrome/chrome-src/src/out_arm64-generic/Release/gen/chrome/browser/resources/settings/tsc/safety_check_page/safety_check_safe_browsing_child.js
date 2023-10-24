// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-safety-safe-browsing-child' is the settings page containing the
 * safety check child showing the Safe Browsing status.
 */
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { MetricsBrowserProxyImpl, SafetyCheckInteractions } from '../metrics_browser_proxy.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { SafetyCheckCallbackConstants, SafetyCheckSafeBrowsingStatus } from './safety_check_browser_proxy.js';
import { SafetyCheckIconStatus } from './safety_check_child.js';
import { getTemplate } from './safety_check_safe_browsing_child.html.js';
const SettingsSafetyCheckSafeBrowsingChildElementBase = WebUiListenerMixin(I18nMixin(PolymerElement));
export class SettingsSafetyCheckSafeBrowsingChildElement extends SettingsSafetyCheckSafeBrowsingChildElementBase {
    constructor() {
        super(...arguments);
        this.metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-safety-check-safe-browsing-child';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Current state of the safety check safe browsing child.
             */
            status_: {
                type: Number,
                value: SafetyCheckSafeBrowsingStatus.CHECKING,
            },
            /**
             * UI string to display for this child, received from the backend.
             */
            displayString_: String,
            /**
             * A set of statuses that the entire row is clickable.
             */
            rowClickableStatuses: {
                readOnly: true,
                type: Object,
                value: () => new Set([
                    SafetyCheckSafeBrowsingStatus.ENABLED_STANDARD,
                    SafetyCheckSafeBrowsingStatus.ENABLED_ENHANCED,
                    SafetyCheckSafeBrowsingStatus.ENABLED_STANDARD_AVAILABLE_ENHANCED,
                    SafetyCheckSafeBrowsingStatus.DISABLED_BY_ADMIN,
                    SafetyCheckSafeBrowsingStatus.DISABLED_BY_EXTENSION,
                ]),
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // Register for safety check status updates.
        this.addWebUiListener(SafetyCheckCallbackConstants.SAFE_BROWSING_CHANGED, this.onSafetyCheckSafeBrowsingChanged_.bind(this));
    }
    onSafetyCheckSafeBrowsingChanged_(event) {
        this.displayString_ = event.displayString;
        this.status_ = event.newState;
    }
    getIconStatus_() {
        switch (this.status_) {
            case SafetyCheckSafeBrowsingStatus.CHECKING:
                return SafetyCheckIconStatus.RUNNING;
            case SafetyCheckSafeBrowsingStatus.ENABLED_STANDARD:
            case SafetyCheckSafeBrowsingStatus.ENABLED_ENHANCED:
            case SafetyCheckSafeBrowsingStatus.ENABLED_STANDARD_AVAILABLE_ENHANCED:
                return SafetyCheckIconStatus.SAFE;
            case SafetyCheckSafeBrowsingStatus.ENABLED:
                // ENABLED is deprecated.
                assertNotReached();
            case SafetyCheckSafeBrowsingStatus.DISABLED:
            case SafetyCheckSafeBrowsingStatus.DISABLED_BY_ADMIN:
            case SafetyCheckSafeBrowsingStatus.DISABLED_BY_EXTENSION:
                return SafetyCheckIconStatus.INFO;
            default:
                assertNotReached();
        }
    }
    getButtonLabel_() {
        switch (this.status_) {
            case SafetyCheckSafeBrowsingStatus.DISABLED:
                return this.i18n('safetyCheckSafeBrowsingButton');
            default:
                return null;
        }
    }
    onButtonClick_() {
        // Log click both in action and histogram.
        this.metricsBrowserProxy_.recordSafetyCheckInteractionHistogram(SafetyCheckInteractions.SAFE_BROWSING_MANAGE);
        this.metricsBrowserProxy_.recordAction('Settings.SafetyCheck.ManageSafeBrowsing');
        this.openSecurityPage_();
    }
    getManagedIcon_() {
        switch (this.status_) {
            case SafetyCheckSafeBrowsingStatus.DISABLED_BY_ADMIN:
                return 'cr20:domain';
            case SafetyCheckSafeBrowsingStatus.DISABLED_BY_EXTENSION:
                return 'cr:extension';
            default:
                return null;
        }
    }
    isRowClickable_() {
        return this.rowClickableStatuses.has(this.status_);
    }
    onRowClick_() {
        if (this.isRowClickable_()) {
            // Log click both in action and histogram.
            this.metricsBrowserProxy_.recordSafetyCheckInteractionHistogram(SafetyCheckInteractions.SAFE_BROWSING_CARET_NAVIGATION);
            this.metricsBrowserProxy_.recordAction('Settings.SafetyCheck.ManageSafeBrowsingThroughCaretNavigation');
            this.openSecurityPage_();
        }
    }
    openSecurityPage_() {
        this.metricsBrowserProxy_.recordAction('SafeBrowsing.Settings.ShowedFromSafetyCheck');
        Router.getInstance().navigateTo(routes.SECURITY, /* dynamicParams= */ undefined, 
        /* removeSearch= */ true);
    }
}
customElements.define(SettingsSafetyCheckSafeBrowsingChildElement.is, SettingsSafetyCheckSafeBrowsingChildElement);
