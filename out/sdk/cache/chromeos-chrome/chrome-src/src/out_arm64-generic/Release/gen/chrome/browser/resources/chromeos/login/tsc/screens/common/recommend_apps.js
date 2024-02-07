// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying material design Recommend Apps
 * screen.
 */
import '//resources/ash/common/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/oobe_apps_list.js';
import { assert } from '//resources/js/assert.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { OobeAppsList } from '../../components/oobe_apps_list.js';
import { getTemplate } from './recommend_apps.html.js';
var RecommendAppsUiState;
(function (RecommendAppsUiState) {
    RecommendAppsUiState["LOADING"] = "loading";
    RecommendAppsUiState["LIST"] = "list";
})(RecommendAppsUiState || (RecommendAppsUiState = {}));
const RecommendAppsElementBase = mixinBehaviors([
    OobeI18nBehavior,
    OobeDialogHostBehavior,
    LoginScreenBehavior,
    MultiStepBehavior,
], PolymerElement);
class RecommendAppsElement extends RecommendAppsElementBase {
    static get is() {
        return 'recommend-apps-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            appsSelected: {
                type: Number,
                value: 0,
            },
            appList: {
                type: Array,
                value: [],
            },
        };
    }
    constructor() {
        super();
        this.initialized = false;
    }
    get EXTERNAL_API() {
        return ['loadAppList'];
    }
    get UI_STEPS() {
        return RecommendAppsUiState;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('RecommendAppsScreen');
    }
    /**
     * Resets screen to initial state.
     * Currently is used for debugging purposes only.
     */
    reset() {
        this.setUIStep(RecommendAppsUiState.LOADING);
        this.appsSelected = 0;
        this.appList = [];
    }
    /**
     * Returns the control which should receive initial focus.
     */
    get defaultControl() {
        const appsDialog = this.shadowRoot?.querySelector('#appsDialog');
        if (appsDialog instanceof HTMLElement) {
            return appsDialog;
        }
        return null;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return RecommendAppsUiState.LOADING;
    }
    /**
     * Initial UI State for screen
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.ONBOARDING;
    }
    onBeforeHide() {
        this.appList = [];
    }
    /**
     * Generates the contents in the webview.
     */
    loadAppList(appList) {
        const recommendAppsContainsAdsStr = this.i18n('recommendAppsContainsAds');
        const recommendAppsInAppPurchasesStr = this.i18n('recommendAppsInAppPurchases');
        const recommendAppsWasInstalledStr = this.i18n('recommendAppsWasInstalled');
        this.appList = appList.map((app) => {
            const tagList = [app.category];
            if (app.contains_ads) {
                tagList.push(recommendAppsContainsAdsStr);
            }
            if (app.in_app_purchases) {
                tagList.push(recommendAppsInAppPurchasesStr);
            }
            if (app.was_installed) {
                tagList.push(recommendAppsWasInstalledStr);
            }
            if (app.content_rating) {
                tagList.push(app.content_rating);
            }
            return {
                title: app.title,
                icon_url: app.icon_url,
                tags: tagList,
                description: app.description,
                package_name: app.package_name,
                checked: false,
            };
        });
    }
    /**
     * Handles event when contents in the webview is generated.
     */
    onFullyLoaded() {
        this.setUIStep(RecommendAppsUiState.LIST);
        const appsList = this.shadowRoot?.querySelector('#appsList');
        if (appsList instanceof HTMLElement) {
            appsList.focus();
        }
    }
    /**
     * Handles Skip button click.
     */
    onSkip() {
        this.userActed('recommendAppsSkip');
    }
    /**
     * Handles Install button click.
     */
    onInstall() {
        // Button should be disabled if nothing is selected.
        assert(this.appsSelected > 0);
        const appsList = this.shadowRoot?.querySelector('#appsList');
        if (appsList instanceof OobeAppsList) {
            const packageNames = appsList.getSelectedApps();
            this.userActed(['recommendAppsInstall', packageNames]);
        }
    }
    canProceed(appsSelected) {
        return appsSelected > 0;
    }
}
customElements.define(RecommendAppsElement.is, RecommendAppsElement);
