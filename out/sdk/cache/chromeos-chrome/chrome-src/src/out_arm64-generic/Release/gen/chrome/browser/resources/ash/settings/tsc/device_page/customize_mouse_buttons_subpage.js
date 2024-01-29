// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-customize-mouse-buttons-subpage' displays the customized buttons
 * and allow users to configure their buttons for each mouse.
 */
import '../icons.html.js';
import '../settings_shared.css.js';
import './input_device_settings_shared.css.js';
import '../controls/settings_toggle_button.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { RouteObserverMixin } from '../common/route_observer_mixin.js';
import { Router, routes } from '../router.js';
import { getTemplate } from './customize_mouse_buttons_subpage.html.js';
import { getInputDeviceSettingsProvider } from './input_device_mojo_interface_provider.js';
import { getPrefPolicyFields } from './input_device_settings_utils.js';
const SettingsCustomizeMouseButtonsSubpageElementBase = RouteObserverMixin(I18nMixin(PolymerElement));
export class SettingsCustomizeMouseButtonsSubpageElement extends SettingsCustomizeMouseButtonsSubpageElementBase {
    constructor() {
        super(...arguments);
        this.inputDeviceSettingsProvider_ = getInputDeviceSettingsProvider();
        this.previousRoute_ = null;
        this.isInitialized_ = false;
    }
    static get is() {
        return 'settings-customize-mouse-buttons-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            selectedMouse: {
                type: Object,
            },
            mouseList: {
                type: Array,
            },
            buttonActionList_: {
                type: Array,
            },
            mousePolicies: {
                type: Object,
            },
            primaryRightPref_: {
                type: Object,
                value() {
                    return {
                        key: 'fakePrimaryRightPref',
                        type: chrome.settingsPrivate.PrefType.BOOLEAN,
                        value: false,
                    };
                },
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
            'onMouseListUpdated(mouseList.*)',
            'onPoliciesChanged(mousePolicies)',
            'onSettingsChanged(primaryRightPref_.value)',
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
        if (route !== routes.CUSTOMIZE_MOUSE_BUTTONS) {
            if (this.previousRoute_ === routes.CUSTOMIZE_MOUSE_BUTTONS) {
                this.inputDeviceSettingsProvider_.stopObserving();
            }
            this.previousRoute_ = route;
            return;
        }
        this.previousRoute_ = route;
        if (!this.hasMice()) {
            return;
        }
        if (!this.selectedMouse ||
            this.selectedMouse.id !== this.getMouseIdFromUrl()) {
            await this.initializeMouse();
        }
        this.inputDeviceSettingsProvider_.startObserving(this.selectedMouse.id);
    }
    /**
     * Get the mouse to display according to the mouseId in the url query,
     * initializing the page and pref with the mouse data.
     */
    async initializeMouse() {
        this.isInitialized_ = false;
        const mouseId = this.getMouseIdFromUrl();
        const searchedMouse = this.mouseList.find((mouse) => mouse.id === mouseId);
        this.selectedMouse = castExists(searchedMouse);
        this.set('primaryRightPref_.value', this.selectedMouse.settings.swapRight);
        this.buttonActionList_ = (await this.inputDeviceSettingsProvider_
            .getActionsForMouseButtonCustomization())
            ?.options;
        this.isInitialized_ = true;
    }
    onPoliciesChanged() {
        this.primaryRightPref_ = {
            ...this.primaryRightPref_,
            ...getPrefPolicyFields(this.mousePolicies.swapRightPolicy),
        };
    }
    getMouseIdFromUrl() {
        return Number(Router.getInstance().getQueryParameters().get('mouseId'));
    }
    hasMice() {
        return this.mouseList?.length > 0;
    }
    isMouseConnected(id) {
        return !!this.mouseList.find(mouse => mouse.id === id);
    }
    async onMouseListUpdated() {
        if (Router.getInstance().currentRoute !== routes.CUSTOMIZE_MOUSE_BUTTONS) {
            return;
        }
        if (!this.hasMice()) {
            Router.getInstance().navigateTo(routes.DEVICE);
            return;
        }
        if (!this.isMouseConnected(this.getMouseIdFromUrl())) {
            Router.getInstance().navigateTo(routes.PER_DEVICE_MOUSE);
            return;
        }
        await this.initializeMouse();
        this.inputDeviceSettingsProvider_.startObserving(this.selectedMouse.id);
    }
    onSettingsChanged() {
        if (!this.isInitialized_) {
            return;
        }
        this.selectedMouse.settings.swapRight = this.primaryRightPref_.value;
        this.inputDeviceSettingsProvider_.setMouseSettings(this.selectedMouse.id, this.selectedMouse.settings);
    }
    getDescription_() {
        if (!this.selectedMouse?.name) {
            return '';
        }
        return this.i18n('customizeButtonSubpageDescription', this.selectedMouse.name);
    }
}
customElements.define(SettingsCustomizeMouseButtonsSubpageElement.is, SettingsCustomizeMouseButtonsSubpageElement);
