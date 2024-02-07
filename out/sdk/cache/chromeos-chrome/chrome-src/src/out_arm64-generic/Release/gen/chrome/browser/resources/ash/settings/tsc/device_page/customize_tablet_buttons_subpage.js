// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'customize-tablet-buttons-subpage' displays the customized tablet buttons
 * and allow users to configure their tablet buttons for each graphics tablet.
 */
import '../icons.html.js';
import '../settings_shared.css.js';
import './input_device_settings_shared.css.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { RouteObserverMixin } from '../common/route_observer_mixin.js';
import { Router, routes } from '../router.js';
import { getTemplate } from './customize_tablet_buttons_subpage.html.js';
import { getInputDeviceSettingsProvider } from './input_device_mojo_interface_provider.js';
const SettingsCustomizeTabletButtonsSubpageElementBase = RouteObserverMixin(I18nMixin(PolymerElement));
export class SettingsCustomizeTabletButtonsSubpageElement extends SettingsCustomizeTabletButtonsSubpageElementBase {
    constructor() {
        super(...arguments);
        this.inputDeviceSettingsProvider_ = getInputDeviceSettingsProvider();
        this.previousRoute_ = null;
        this.isInitialized_ = false;
    }
    static get is() {
        return 'settings-customize-tablet-buttons-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            selectedTablet: {
                type: Object,
            },
            graphicsTablets: {
                type: Array,
            },
            /**
             * Use hasLauncherButton to decide which meta key icon to display.
             */
            hasLauncherButton_: {
                type: Boolean,
            },
        };
    }
    static get observers() {
        return [
            'onGraphicsTabletListUpdated(graphicsTablets.*)',
        ];
    }
    async connectedCallback() {
        super.connectedCallback();
        this.addEventListener('button-remapping-changed', this.onSettingsChanged);
        this.hasLauncherButton_ =
            (await this.inputDeviceSettingsProvider_.hasLauncherButton())
                ?.hasLauncherButton;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('button-remapping-changed', this.onSettingsChanged);
    }
    async currentRouteChanged(route) {
        // Does not apply to this page.
        if (route !== routes.CUSTOMIZE_TABLET_BUTTONS) {
            if (this.previousRoute_ === routes.CUSTOMIZE_TABLET_BUTTONS) {
                this.inputDeviceSettingsProvider_.stopObserving();
            }
            this.previousRoute_ = route;
            return;
        }
        this.previousRoute_ = route;
        if (!this.hasGraphicsTablets()) {
            return;
        }
        if (!this.selectedTablet ||
            this.selectedTablet.id !== this.getGraphicsTabletIdFromUrl()) {
            await this.initializeTablet();
        }
        this.inputDeviceSettingsProvider_.startObserving(this.selectedTablet.id);
    }
    /**
     * Get the tablet to display according to the graphicsTabletId in the url
     * query, initializing the page and pref with the tablet data.
     */
    async initializeTablet() {
        this.isInitialized_ = false;
        const tabletId = this.getGraphicsTabletIdFromUrl();
        const searchedGraphicsTablet = this.graphicsTablets.find((graphicsTablet) => graphicsTablet.id === tabletId);
        this.selectedTablet = castExists(searchedGraphicsTablet);
        this.buttonActionList_ =
            (await this.inputDeviceSettingsProvider_
                .getActionsForGraphicsTabletButtonCustomization())
                ?.options;
        this.isInitialized_ = true;
    }
    getGraphicsTabletIdFromUrl() {
        return Number(Router.getInstance().getQueryParameters().get('graphicsTabletId'));
    }
    hasGraphicsTablets() {
        return this.graphicsTablets?.length > 0;
    }
    isTabletConnected(id) {
        return !!this.graphicsTablets.find(tablet => tablet.id === id);
    }
    async onGraphicsTabletListUpdated() {
        if (Router.getInstance().currentRoute !== routes.CUSTOMIZE_TABLET_BUTTONS) {
            return;
        }
        if (!this.hasGraphicsTablets()) {
            Router.getInstance().navigateTo(routes.DEVICE);
            return;
        }
        if (!this.isTabletConnected(this.getGraphicsTabletIdFromUrl())) {
            Router.getInstance().navigateTo(routes.GRAPHICS_TABLET);
            return;
        }
        await this.initializeTablet();
        this.inputDeviceSettingsProvider_.startObserving(this.selectedTablet.id);
    }
    onSettingsChanged() {
        if (!this.isInitialized_) {
            return;
        }
        this.inputDeviceSettingsProvider_.setGraphicsTabletSettings(this.selectedTablet.id, this.selectedTablet.settings);
    }
    getDescription_() {
        if (!this.selectedTablet?.name) {
            return '';
        }
        return this.i18n('customizeButtonSubpageDescription', this.selectedTablet.name);
    }
}
customElements.define(SettingsCustomizeTabletButtonsSubpageElement.is, SettingsCustomizeTabletButtonsSubpageElement);
