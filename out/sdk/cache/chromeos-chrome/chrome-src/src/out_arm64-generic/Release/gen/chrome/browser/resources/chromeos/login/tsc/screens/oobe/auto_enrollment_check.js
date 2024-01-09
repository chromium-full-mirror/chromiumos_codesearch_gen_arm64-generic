// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Oobe Auto-enrollment check screen implementation.
 */
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './auto_enrollment_check.html.js';
export const AutoEnrollmentCheckElementBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, OobeDialogHostBehavior], PolymerElement);
export class AutoEnrollmentCheckElement extends AutoEnrollmentCheckElementBase {
    static get is() {
        return 'auto-enrollment-check-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Whether to show get device ready title.
             */
            isOobeSoftwareUpdateEnabled: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isOobeSoftwareUpdateEnabled');
                },
            },
        };
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('AutoEnrollmentCheckScreen');
    }
    getLoadingTitle() {
        if (this.isOobeSoftwareUpdateEnabled) {
            return 'gettingDeviceReadyTitle';
        }
        return 'autoEnrollmentCheckMessage';
    }
}
customElements.define(AutoEnrollmentCheckElement.is, AutoEnrollmentCheckElement);
