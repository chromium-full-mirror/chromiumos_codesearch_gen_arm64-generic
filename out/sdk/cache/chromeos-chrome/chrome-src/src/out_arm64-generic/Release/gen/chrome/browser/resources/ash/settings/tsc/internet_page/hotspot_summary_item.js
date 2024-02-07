// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying a hotspot summary item row with
 * a toggle button below the network summary item.
 */
import 'chrome://resources/ash/common/network/network_icon.js';
import 'chrome://resources/ash/common/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import { getHotspotConfig } from 'chrome://resources/ash/common/hotspot/cros_hotspot_config.js';
import { HotspotAllowStatus, HotspotState } from 'chrome://resources/ash/common/hotspot/cros_hotspot_config.mojom-webui.js';
import { CrPolicyNetworkBehaviorMojo } from 'chrome://resources/ash/common/network/cr_policy_network_behavior_mojo.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/ash/common/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { OncSource } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js';
import { mixinBehaviors, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { Router, routes } from '../router.js';
import { getTemplate } from './hotspot_summary_item.html.js';
const HotspotSummaryItemElementBase = mixinBehaviors([CrPolicyNetworkBehaviorMojo], I18nMixin(PolymerElement));
export class HotspotSummaryItemElement extends HotspotSummaryItemElementBase {
    static get is() {
        return 'hotspot-summary-item';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            hotspotInfo: {
                type: Object,
                observer: 'onHotspotInfoChanged_',
            },
            /**
             * Reflects the current state of the toggle button. This will be set when
             * the |HotspotInfo| state changes or when the user presses the
             * toggle.
             */
            isHotspotToggleOn_: {
                type: Boolean,
                value: false,
            },
        };
    }
    onHotspotInfoChanged_(newValue, _oldValue) {
        this.isHotspotToggleOn_ = newValue.state === HotspotState.kEnabled ||
            newValue.state === HotspotState.kEnabling;
    }
    navigateToDetailPage_() {
        if (!this.shouldShowArrowButton_()) {
            return;
        }
        Router.getInstance().navigateTo(routes.HOTSPOT_DETAIL);
    }
    getHotspotStateSublabel_() {
        if (this.hotspotInfo.state === HotspotState.kEnabling) {
            return this.i18n('hotspotSummaryStateTurningOn');
        }
        if (this.hotspotInfo.state === HotspotState.kEnabled) {
            return this.i18n('hotspotSummaryStateOn');
        }
        if (this.hotspotInfo.state === HotspotState.kDisabling) {
            return this.i18n('hotspotSummaryStateTurningOff');
        }
        return this.i18n('hotspotSummaryStateOff');
    }
    shouldHideHotspotStateSublabel_() {
        if (this.hotspotInfo.state === HotspotState.kEnabling ||
            this.hotspotInfo.state === HotspotState.kEnabled) {
            return false;
        }
        return this.hotspotInfo.allowStatus ===
            HotspotAllowStatus.kDisallowedReadinessCheckFail ||
            this.hotspotInfo.allowStatus ===
                HotspotAllowStatus.kDisallowedNoMobileData;
    }
    getHotspotDisabledSublabelLink_(allowStatus) {
        if (allowStatus === HotspotAllowStatus.kDisallowedNoMobileData) {
            return this.i18nAdvanced('hotspotNoMobileDataSublabelWithLink')
                .toString();
        }
        if (allowStatus === HotspotAllowStatus.kDisallowedReadinessCheckFail) {
            return this.i18nAdvanced('hotspotMobileDataNotSupportedSublabelWithLink')
                .toString();
        }
        return '';
    }
    setHotspotEnabledState_(enabled) {
        if (enabled) {
            getHotspotConfig().enableHotspot();
            return;
        }
        getHotspotConfig().disableHotspot();
    }
    isToggleDisabled_() {
        if (this.hotspotInfo.state === HotspotState.kDisabling) {
            return true;
        }
        if (this.hotspotInfo.state === HotspotState.kEnabling ||
            this.hotspotInfo.state === HotspotState.kEnabled) {
            return false;
        }
        return this.hotspotInfo.allowStatus !== HotspotAllowStatus.kAllowed;
    }
    shouldShowArrowButton_() {
        return this.hotspotInfo.allowStatus === HotspotAllowStatus.kAllowed ||
            this.hotspotInfo.state === HotspotState.kEnabling ||
            this.hotspotInfo.state === HotspotState.kEnabled;
    }
    getIconClass_(isHotspotToggleOn) {
        if (isHotspotToggleOn) {
            return 'os-settings:hotspot-enabled';
        }
        return 'os-settings:hotspot-disabled';
    }
    shouldShowPolicyIndicator_(allowStatus) {
        return allowStatus === HotspotAllowStatus.kDisallowedByPolicy;
    }
    getPolicyIndicatorType_() {
        return this.getIndicatorTypeForSource(OncSource.kDevicePolicy);
    }
    onHotspotToggleChange_() {
        this.setHotspotEnabledState_(this.isHotspotToggleOn_);
        getAnnouncerInstance().announce(this.isHotspotToggleOn_ ? this.i18n('hotspotEnabledA11yLabel') :
            this.i18n('hotspotDisabledA11yLabel'));
    }
}
customElements.define(HotspotSummaryItemElement.is, HotspotSummaryItemElement);
