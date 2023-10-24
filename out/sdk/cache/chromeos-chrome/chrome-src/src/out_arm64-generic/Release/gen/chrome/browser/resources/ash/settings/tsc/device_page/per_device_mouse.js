// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'mouse-settings' allow users to configure their mouse settings in system
 * settings.
 */
import '../icons.html.js';
import '../settings_shared.css.js';
import 'chrome://resources/cr_components/localized_link/localized_link.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import '/shared/settings/controls/settings_radio_group.js';
import '/shared/settings/controls/settings_slider.js';
import '/shared/settings/controls/settings_toggle_button.js';
import 'chrome://resources/cr_elements/cr_slider/cr_slider.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { RouteObserverMixin } from '../route_observer_mixin.js';
import { routes } from '../router.js';
import { getDeviceStateChangesToAnnounce } from './input_device_settings_utils.js';
import { getTemplate } from './per_device_mouse.html.js';
const SettingsPerDeviceMouseElementBase = RouteObserverMixin(I18nMixin(PolymerElement));
export class SettingsPerDeviceMouseElement extends SettingsPerDeviceMouseElementBase {
    static get is() {
        return 'settings-per-device-mouse';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            mice: {
                type: Array,
                observer: 'onMouseListUpdated',
            },
            mousePolicies: {
                type: Object,
            },
        };
    }
    currentRouteChanged(route) {
        // Does not apply to this page.
        if (route !== routes.PER_DEVICE_MOUSE) {
            return;
        }
    }
    onMouseListUpdated(newMouseList, oldMouseList) {
        if (!oldMouseList) {
            return;
        }
        const { msgId, deviceNames } = getDeviceStateChangesToAnnounce(newMouseList, oldMouseList);
        for (const deviceName of deviceNames) {
            getAnnouncerInstance().announce(this.i18n(msgId, deviceName));
        }
    }
    computeIsLastDevice(index) {
        return index === this.mice.length - 1;
    }
}
customElements.define(SettingsPerDeviceMouseElement.is, SettingsPerDeviceMouseElement);
