// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This component displays color mode settings.
 */
import 'chrome://resources/ash/common/personalization/common.css.js';
import 'chrome://resources/ash/common/personalization/cros_button_style.css.js';
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/polymer/v3_0/iron-a11y-keys/iron-a11y-keys.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/iron-iconset-svg/iron-iconset-svg.js';
import 'chrome://resources/polymer/v3_0/iron-selector/iron-selector.js';
import 'chrome://resources/ash/common/cr_elements/localized_link/localized_link.js';
import '../geolocation_dialog.js';
import { isCrosPrivacyHubLocationEnabled, isPersonalizationJellyEnabled } from '../load_time_booleans.js';
import { WithPersonalizationStore } from '../personalization_store.js';
import { isSelectionEvent } from '../utils.js';
import { getTemplate } from './personalization_theme_element.html.js';
import { enableGeolocationForSystemServices, initializeData, setColorModeAutoSchedule, setColorModePref } from './theme_controller.js';
import { getThemeProvider } from './theme_interface_provider.js';
import { ThemeObserver } from './theme_observer.js';
export class PersonalizationThemeElement extends WithPersonalizationStore {
    static get is() {
        return 'personalization-theme';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            // null indicates value is being loaded.
            darkModeEnabled_: {
                type: Boolean,
                value: null,
            },
            colorModeAutoScheduleEnabled_: {
                type: Boolean,
                value: null,
            },
            geolocationPermissionEnabled_: {
                type: Boolean,
                value: null,
            },
            isPersonalizationJellyEnabled_: {
                type: Boolean,
                value() {
                    return isPersonalizationJellyEnabled();
                },
            },
            /** The button currently highlighted by keyboard navigation. */
            selectedButton_: {
                type: Object,
                notify: true,
            },
            shouldShowGeolocationWarningText_: {
                type: Boolean,
                computed: 'computeShouldShowGeolocationWarningText_(' +
                    'colorModeAutoScheduleEnabled_, ' +
                    'geolocationPermissionEnabled_),',
                value: false,
            },
            shouldShowGeolocationDialog_: {
                type: Boolean,
                value: false,
            },
        };
    }
    ready() {
        super.ready();
        this.$.keys.target = this.$.selector;
    }
    connectedCallback() {
        super.connectedCallback();
        ThemeObserver.initThemeObserverIfNeeded();
        this.watch('darkModeEnabled_', state => state.theme.darkModeEnabled);
        this.watch('colorModeAutoScheduleEnabled_', state => state.theme.colorModeAutoScheduleEnabled);
        this.watch('geolocationPermissionEnabled_', state => state.theme.geolocationPermissionEnabled);
        this.updateFromStore();
        initializeData(getThemeProvider(), this.getStore());
    }
    /** Handle keyboard navigation. */
    onKeysPress_(e) {
        const selector = this.$.selector;
        const prevButton = this.selectedButton_;
        switch (e.detail.key) {
            case 'left':
                selector.selectPrevious();
                break;
            case 'right':
                selector.selectNext();
                break;
            default:
                return;
        }
        // Remove focus state of previous button.
        if (prevButton) {
            prevButton.removeAttribute('tabindex');
        }
        // Add focus state for new button.
        if (this.selectedButton_) {
            this.selectedButton_.setAttribute('tabindex', '0');
            this.selectedButton_.focus();
        }
        e.detail.keyboardEvent.preventDefault();
    }
    getLightAriaChecked_() {
        //  If auto schedule mode is enabled, the system disregards whether dark
        //  mode is enabled or not. To ensure expected behavior, we show that dark
        //  mode can only be selected only when auto schedule mode is disabled and
        //  dark mode is enabled. Also explictly check that these prefs are not null
        //  to avoid showing this button as selected when the values are being
        //  fetched.
        return (this.colorModeAutoScheduleEnabled_ !== null &&
            this.darkModeEnabled_ !== null &&
            !this.colorModeAutoScheduleEnabled_ && !this.darkModeEnabled_)
            .toString();
    }
    getDarkAriaChecked_() {
        //  If auto schedule mode is enabled, the system disregards whether dark
        //  mode is enabled or not. To ensure expected behavior, we show that light
        //  mode is selected only when both auto schedule mode and dark mode are
        //  disabled.
        return (!this.colorModeAutoScheduleEnabled_ && !!this.darkModeEnabled_)
            .toString();
    }
    getAutoAriaChecked_() {
        return (!!this.colorModeAutoScheduleEnabled_).toString();
    }
    onClickColorModeButton_(event) {
        if (!isSelectionEvent(event)) {
            return;
        }
        const eventTarget = event.currentTarget;
        const colorMode = eventTarget.dataset['colorMode'];
        // Disables auto schedule mode if a specific color mode is set.
        setColorModeAutoSchedule(
        /*colorModeAutoScheduleEnabled=*/ false, getThemeProvider(), this.getStore());
        setColorModePref(colorMode === 'DARK', getThemeProvider(), this.getStore());
    }
    onClickAutoModeButton_(event) {
        if (!isSelectionEvent(event) || this.colorModeAutoScheduleEnabled_) {
            return;
        }
        setColorModeAutoSchedule(
        /*enabled=*/ true, getThemeProvider(), this.getStore());
    }
    computeShouldShowGeolocationWarningText_() {
        return (isCrosPrivacyHubLocationEnabled() &&
            this.colorModeAutoScheduleEnabled_ === true &&
            this.geolocationPermissionEnabled_ === false);
    }
    openGeolocationDialog_(e) {
        // A place holder href with the value "#" is used to have a compliant link.
        // This prevents the browser from navigating the window to "#".
        e.detail.event.preventDefault();
        e.stopPropagation();
        // Geolocation Dialog only exists in the Privacy Hub context.
        if (!isCrosPrivacyHubLocationEnabled()) {
            console.error('Geolocation Dialog triggered when the Privacy Hub flag is disabled');
            return;
        }
        // Show the dialog to let users enable system location inline.
        this.shouldShowGeolocationDialog_ = true;
    }
    onGeolocationDialogClose_() {
        this.shouldShowGeolocationDialog_ = false;
    }
    // Callback for user clicking 'Allow' on the geolocation dialog.
    onGeolocationEnabled_() {
        // Enable system geolocation permission for all system services.
        enableGeolocationForSystemServices(getThemeProvider(), this.getStore());
    }
}
customElements.define(PersonalizationThemeElement.is, PersonalizationThemeElement);
