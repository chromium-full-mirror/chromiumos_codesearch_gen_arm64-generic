// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for Device Disabled message screen.
 */
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { getTemplate } from './device_disabled.html.js';
const DeviceDisabledElementBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, OobeDialogHostBehavior], PolymerElement);
export class DeviceDisabled extends DeviceDisabledElementBase {
    static get is() {
        return 'device-disabled-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The serial number of the device.
             */
            serial: {
                type: String,
                value: '',
            },
            /**
             * The domain that owns the device (can be empty).
             */
            enrollmentDomain: {
                type: String,
                value: '',
            },
            /**
             * Admin message (external data, non-html-safe).
             */
            message: {
                type: String,
                value: '',
            },
            /**
             * Flag indicating if the device was disabled because it's in AD mode,
             * which is no longer supported.
             */
            isDisabledAdDevice: {
                type: Boolean,
                value: false,
            },
        };
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('DeviceDisabledScreen');
    }
    /** @override */
    get EXTERNAL_API() {
        return ['setMessage'];
    }
    /** Initial UI State for screen */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.BLOCKING;
    }
    get defaultControl() {
        return this.shadowRoot.querySelector('#dialog');
    }
    /**
     * Event handler that is invoked just before the frame is shown.
     * data Screen init payload.
     */
    onBeforeShow(data) {
        if ('serial' in data) {
            this.serial = data.serial;
        }
        if ('domain' in data) {
            this.enrollmentDomain = data.domain;
        }
        if ('message' in data) {
            this.message = data.message;
        }
        if ('isDisabledAdDevice' in data) {
            this.isDisabledAdDevice = data.isDisabledAdDevice;
        }
    }
    /**
     * Sets the message to be shown to the user.
     */
    setMessage(message) {
        this.message = message;
    }
    /**
     * Updates the explanation shown to the user. The explanation contains the
     * device serial number and may contain the domain the device is enrolled to,
     * if that information is available. However, if `isDisabledAdDevice` is true,
     * a custom explanation about Chromad disabling will be used.
     * locale The i18n locale.
     * serial The device serial number.
     * domain The enrollment domain.
     * isDisabledAdDevice Flag indicating if the device was
     * disabled because it's in AD mode.
     * return The internationalized explanation.
     */
    disabledText(locale, serial, domain, isDisabledAdDevice) {
        if (isDisabledAdDevice) {
            return this.i18nAdvancedDynamic(locale, 'deviceDisabledAdModeExplanation', { substitutions: [serial] });
        }
        if (domain) {
            return this.i18nAdvancedDynamic(locale, 'deviceDisabledExplanationWithDomain', { substitutions: [serial, domain] });
        }
        return this.i18nAdvancedDynamic(locale, 'deviceDisabledExplanationWithoutDomain', { substitutions: [serial] });
    }
}
customElements.define(DeviceDisabled.is, DeviceDisabled);
