// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for HW data collection screen.
 */
import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '//resources/js/action_link.js';
import '../../components/oobe_icons.html.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './hw_data_collection.html.js';
const HwDataCollectionScreenElementBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, OobeDialogHostBehavior], PolymerElement);
export class HwDataCollectionScreen extends HwDataCollectionScreenElementBase {
    static get is() {
        return 'hw-data-collection-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            dataUsageChecked: {
                type: Boolean,
                value: false,
            },
        };
    }
    constructor() {
        super();
    }
    /**
     * Event handler that is invoked just before the screen is shown.
     * param data Screen init payload
     */
    onBeforeShow(data) {
        this.dataUsageChecked =
            'hwDataUsageEnabled' in data && data.hwDataUsageEnabled;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('HWDataCollectionScreen');
    }
    getHwDataCollectionContent_(locale) {
        return this.i18nAdvancedDynamic(locale, 'HWDataCollectionContent', { tags: ['p'] });
    }
    onAcceptButtonClicked_() {
        this.userActed('accept-button');
    }
    /**
     * On-change event handler for dataUsageChecked.
     */
    onDataUsageChanged_() {
        this.userActed(['select-hw-data-usage', this.dataUsageChecked]);
    }
}
customElements.define(HwDataCollectionScreen.is, HwDataCollectionScreen);
