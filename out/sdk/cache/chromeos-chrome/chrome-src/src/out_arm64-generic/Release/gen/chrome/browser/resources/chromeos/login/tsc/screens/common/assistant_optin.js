// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Oobe Assistant OptIn Flow screen implementation.
 */
import '../../assistant_optin/assistant_optin_flow.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
// TODO(b/320439437) Migrate AssistantOptInFlow to ts
// import {AssistantOptInFlow} from
// '../../assistant_optin/assistant_optin_flow.js'
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { getTemplate } from './assistant_optin.html.js';
const AssistantOptinBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, OobeDialogHostBehavior], PolymerElement);
export class AssistantOptin extends AssistantOptinBase {
    static get is() {
        return 'assistant-optin-element';
    }
    static get template() {
        return getTemplate();
    }
    get EXTERNAL_API() {
        return [
            'reloadContent',
            'addSettingZippy',
            'showNextScreen',
            'onVoiceMatchUpdate',
            'onValuePropUpdate',
        ];
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('AssistantOptInFlowScreen');
    }
    /**
     * Returns default event target element.
     */
    get defaultControl() {
        return this.shadowRoot.querySelector('#card');
    }
    /** Initial UI State for screen */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.ONBOARDING;
    }
    /**
     * Event handler that is invoked just before the frame is shown.
     */
    onBeforeShow() {
        const card = this.shadowRoot?.querySelector('#card');
        if (card) {
            card.onShow();
        }
    }
    /**
     * Reloads localized strings.
     * @param data New dictionary with i18n values.
     */
    reloadContent(data) {
        const card = this.shadowRoot?.querySelector('#card');
        if (card) {
            card.reloadContent(data);
        }
    }
    /**
     * Add a setting zippy object in the corresponding screen.
     * @param type type of the setting zippy.
     * @param data String and url for the setting zippy.
     */
    addSettingZippy(type, data) {
        const card = this.shadowRoot?.querySelector('#card');
        if (card) {
            card.addSettingZippy(type, data);
        }
    }
    /**
     * Show the next screen in the flow.
     */
    showNextScreen() {
        const card = this.shadowRoot?.querySelector('#card');
        if (card) {
            card.showNextScreen();
        }
    }
    /**
     * Called when the Voice match state is updated.
     * @param state the voice match state.
     */
    onVoiceMatchUpdate(state) {
        const card = this.shadowRoot?.querySelector('#card');
        if (card) {
            card.onVoiceMatchUpdate(state);
        }
    }
    /**
     * Called to show the next settings when there are multiple unbundled
     * activity control settings in the Value prop screen.
     */
    onValuePropUpdate() {
        const card = this.shadowRoot?.querySelector('#card');
        if (card) {
            card.onValuePropUpdate();
        }
    }
}
customElements.define(AssistantOptin.is, AssistantOptin);
