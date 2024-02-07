// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-graphics-tablet-subpage' allow users to configure their graphics
 * tablet settings for each device in system settings.
 */
import '../icons.html.js';
import '../settings_shared.css.js';
import './input_device_settings_shared.css.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/ash/common/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { CrLinkRowElement } from 'chrome://resources/ash/common/cr_elements/cr_link_row/cr_link_row.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { cast, castExists } from '../assert_extras.js';
import { RouteObserverMixin } from '../common/route_observer_mixin.js';
import { Router, routes } from '../router.js';
import { getTemplate } from './graphics_tablet_subpage.html.js';
import { getDeviceStateChangesToAnnounce } from './input_device_settings_utils.js';
const SettingsGraphicsTabletSubpageElementBase = RouteObserverMixin(I18nMixin(PolymerElement));
export class SettingsGraphicsTabletSubpageElement extends SettingsGraphicsTabletSubpageElementBase {
    static get is() {
        return 'settings-graphics-tablet-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            prefs: {
                type: Object,
                notify: true,
            },
            graphicsTablets: {
                type: Array,
                observer: 'onGraphicsTabletListUpdated',
            },
        };
    }
    currentRouteChanged(route) {
        // Does not apply to this page.
        if (route !== routes.GRAPHICS_TABLET) {
            return;
        }
    }
    onGraphicsTabletListUpdated(newGraphicsTabletList, oldGraphicsTabletList) {
        if (!oldGraphicsTabletList) {
            return;
        }
        const { msgId, deviceNames } = getDeviceStateChangesToAnnounce(newGraphicsTabletList, oldGraphicsTabletList);
        for (const deviceName of deviceNames) {
            getAnnouncerInstance().announce(this.i18n(msgId, deviceName));
        }
    }
    onCustomizeTabletButtonsClick(e) {
        Router.getInstance().navigateTo(routes.CUSTOMIZE_TABLET_BUTTONS, 
        /* dynamicParams= */ this.getSelectedGraphicsTabletUrl(e), 
        /* removeSearch= */ true);
    }
    onCustomizePenButtonsClick(e) {
        Router.getInstance().navigateTo(routes.CUSTOMIZE_PEN_BUTTONS, 
        /* dynamicParams= */ this.getSelectedGraphicsTabletUrl(e), 
        /* removeSearch= */ true);
    }
    getSelectedGraphicsTabletUrl(e) {
        const customizeTabletButton = cast(e.target, CrLinkRowElement);
        const closestTablet = castExists(customizeTabletButton.closest('.device'));
        return new URLSearchParams({
            graphicsTabletId: encodeURIComponent(closestTablet.getAttribute('data-evdev-id')),
        });
    }
}
customElements.define(SettingsGraphicsTabletSubpageElement.is, SettingsGraphicsTabletSubpageElement);
