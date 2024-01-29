// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'personalization-options' contains several toggles related to
 * personalizations.
 */
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_components/settings_prefs/prefs.js';
import '../controls/settings_toggle_button.js';
import '../people_page/signout_dialog.js';
// 
import '../settings_shared.css.js';
import { WebUiListenerMixin } from '//resources/cr_elements/web_ui_listener_mixin.js';
import { assert } from '//resources/js/assert.js';
import { focusWithoutInk } from '//resources/js/focus_without_ink.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { StatusAction } from '/shared/settings/people_page/sync_browser_proxy.js';
import { PrivacyPageBrowserProxyImpl } from '/shared/settings/privacy_page/privacy_page_browser_proxy.js';
import { HelpBubbleMixin } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { loadTimeData } from '../i18n_setup.js';
import { RelaunchMixin, RestartType } from '../relaunch_mixin.js';
import { Router } from '../router.js';
import { getTemplate } from './personalization_options.html.js';
const SettingsPersonalizationOptionsElementBase = HelpBubbleMixin(RelaunchMixin(WebUiListenerMixin(I18nMixin(PrefsMixin(PolymerElement)))));
// browser_element_identifiers constants
const ANONYMIZED_URL_COLLECTION_ID = 'kAnonymizedUrlCollectionPersonalizationSettingId';
export class SettingsPersonalizationOptionsElement extends SettingsPersonalizationOptionsElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = PrivacyPageBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-personalization-options';
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
            focusConfig: {
                type: Object,
                observer: 'onFocusConfigChange_',
            },
            pageVisibility: Object,
            syncStatus: Object,
            // 
            showSignoutDialog_: Boolean,
            syncFirstSetupInProgress_: {
                type: Boolean,
                value: false,
                computed: 'computeSyncFirstSetupInProgress_(syncStatus)',
            },
            // 
            enablePageContentSetting_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enablePageContentSetting');
                },
            },
        };
    }
    onFocusConfigChange_() {
        if (!this.enablePageContentSetting_) {
            // TODO(crbug.com/1476887): Remove once crbug.com/1476887 launched.
            return;
        }
        this.focusConfig.set(Router.getInstance().getRoutes().PAGE_CONTENT.path, () => {
            const toFocus = this.shadowRoot.querySelector('#pageContentRow');
            assert(toFocus);
            focusWithoutInk(toFocus);
        });
    }
    computeSyncFirstSetupInProgress_() {
        return !!this.syncStatus && !!this.syncStatus.firstSetupInProgress;
    }
    showPriceEmailNotificationsToggle_() {
        // Only show the toggle when the user signed in.
        return loadTimeData.getBoolean('changePriceEmailNotificationsEnabled') &&
            !!this.syncStatus && !!this.syncStatus.signedIn;
    }
    getPriceEmailNotificationsPrefDesc_() {
        const username = this.syncStatus.signedInUsername || '';
        return loadTimeData.getStringF('priceEmailNotificationsPrefDesc', username);
    }
    ready() {
        super.ready();
        // 
        this.registerHelpBubble(ANONYMIZED_URL_COLLECTION_ID, this.$.urlCollectionToggle.getBubbleAnchor(), { anchorPaddingTop: 10 });
    }
    // 
    /**
     * @return the autocomplete search suggestions CrToggleElement.
     */
    getSearchSuggestToggle() {
        return this.shadowRoot.querySelector('#searchSuggestToggle');
    }
    /**
     * @return the anonymized URL collection CrToggleElement.
     */
    getUrlCollectionToggle() {
        return this.shadowRoot.querySelector('#urlCollectionToggle');
    }
    /**
     * @return the Drive suggestions CrToggleElement.
     */
    getDriveSuggestToggle() {
        return this.shadowRoot.querySelector('#driveSuggestControl');
    }
    // 
    // 
    showSearchSuggestToggle_() {
        if (this.pageVisibility === undefined) {
            // pageVisibility isn't defined in non-Guest profiles (crbug.com/1288911).
            return true;
        }
        return this.pageVisibility.searchPrediction;
    }
    navigateTo_(url) {
        window.location.href = url;
    }
    // 
    onMetricsReportingLinkClick_() {
        if (loadTimeData.getBoolean('osDeprecateSyncMetricsToggle')) {
            this.navigateTo_(loadTimeData.getString('osPrivacySettingsUrl'));
        }
        else {
            this.navigateTo_(loadTimeData.getString('osSyncSetupSettingsUrl'));
        }
    }
    // 
    // <!-- _google_chrome -->
    shouldShowDriveSuggest_() {
        if (loadTimeData.getBoolean('driveSuggestNoSetting')) {
            return false;
        }
        if (!loadTimeData.getBoolean('driveSuggestAvailable')) {
            return false;
        }
        if (loadTimeData.getBoolean('driveSuggestNoSyncRequirement')) {
            return true;
        }
        return !!this.syncStatus && !!this.syncStatus.signedIn &&
            this.syncStatus.statusAction !== StatusAction.REAUTHENTICATE;
    }
    onSigninAllowedChange_() {
        if (this.syncStatus.signedIn && !this.$.signinAllowedToggle.checked) {
            // Switch the toggle back on and show the signout dialog.
            this.$.signinAllowedToggle.checked = true;
            this.showSignoutDialog_ = true;
        }
        else {
            this.$.signinAllowedToggle.sendPrefChange();
            this.$.toast.show();
        }
    }
    onSignoutDialogClosed_() {
        if (this.shadowRoot
            .querySelector('settings-signout-dialog').wasConfirmed()) {
            this.$.signinAllowedToggle.checked = false;
            this.$.signinAllowedToggle.sendPrefChange();
            this.$.toast.show();
        }
        this.showSignoutDialog_ = false;
    }
    onRestartClick_(e) {
        e.stopPropagation();
        this.performRestart(RestartType.RESTART);
    }
    onPageContentRowClick_() {
        const router = Router.getInstance();
        router.navigateTo(router.getRoutes().PAGE_CONTENT);
    }
    computePageContentRowSublabel_() {
        return this.getPref('page_content_collection.enabled').value ?
            this.i18n('pageContentLinkRowSublabelOn') :
            this.i18n('pageContentLinkRowSublabelOff');
    }
}
customElements.define(SettingsPersonalizationOptionsElement.is, SettingsPersonalizationOptionsElement);
