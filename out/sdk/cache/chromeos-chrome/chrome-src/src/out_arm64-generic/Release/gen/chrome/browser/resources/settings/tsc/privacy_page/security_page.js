// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_components/settings_prefs/prefs.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import './collapse_radio_button.js';
import '/shared/settings/controls/settings_radio_group.js';
import '/shared/settings/controls/settings_toggle_button.js';
import '/shared/settings/privacy_page/secure_dns.js';
import '../icons.html.js';
import '../settings_shared.css.js';
import '../simple_confirmation_dialog.js';
import { PrivacyPageBrowserProxyImpl } from '/shared/settings/privacy_page/privacy_page_browser_proxy.js';
import { HelpBubbleMixin } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { CrSettingsPrefs } from 'chrome://resources/cr_components/settings_prefs/prefs_types.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from '../i18n_setup.js';
import { MetricsBrowserProxyImpl, PrivacyElementInteractions, SafeBrowsingInteractions } from '../metrics_browser_proxy.js';
import { routes } from '../route.js';
import { RouteObserverMixin, Router } from '../router.js';
import { getTemplate } from './security_page.html.js';
/**
 * Enumeration of all safe browsing modes. Must be kept in sync with the enum
 * of the same name located in:
 * chrome/browser/safe_browsing/generated_safe_browsing_pref.h
 */
export var SafeBrowsingSetting;
(function (SafeBrowsingSetting) {
    SafeBrowsingSetting[SafeBrowsingSetting["ENHANCED"] = 0] = "ENHANCED";
    SafeBrowsingSetting[SafeBrowsingSetting["STANDARD"] = 1] = "STANDARD";
    SafeBrowsingSetting[SafeBrowsingSetting["DISABLED"] = 2] = "DISABLED";
})(SafeBrowsingSetting || (SafeBrowsingSetting = {}));
const SettingsSecurityPageElementBase = HelpBubbleMixin(RouteObserverMixin(I18nMixin(PrefsMixin(PolymerElement))));
export class SettingsSecurityPageElement extends SettingsSecurityPageElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = PrivacyPageBrowserProxyImpl.getInstance();
        this.metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-security-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Preferences state.
             */
            prefs: {
                type: Object,
                notify: true,
            },
            /**
             * Whether we should adjust Manage Certificates links to indicate
             * support for Chrome Root Store.
             */
            // TODO(crbug.com/1412591): remove when CRS enterprise policy is removed
            // for ChromeOS and Linux
            showChromeRootStoreCertificates_: {
                type: Boolean,
                readOnly: true,
                value: function () {
                    return loadTimeData.getBoolean('showChromeRootStoreCertificates');
                },
            },
            /**
             * Whether the secure DNS setting should be displayed.
             */
            showSecureDnsSetting_: {
                type: Boolean,
                readOnly: true,
                value: function () {
                    return loadTimeData.getBoolean('showSecureDnsSetting');
                },
            },
            // 
            /**
             * Whether a link to secure DNS OS setting should be displayed.
             */
            showSecureDnsSettingLink_: {
                type: Boolean,
                readOnly: true,
                value: function () {
                    return loadTimeData.getBoolean('showSecureDnsSettingLink');
                },
            },
            // 
            /**
             * Valid safe browsing states.
             */
            safeBrowsingSettingEnum_: {
                type: Object,
                value: SafeBrowsingSetting,
            },
            enableSecurityKeysSubpage_: {
                type: Boolean,
                readOnly: true,
                value() {
                    return loadTimeData.getBoolean('enableSecurityKeysSubpage');
                },
            },
            // 
            focusConfig: {
                type: Object,
                observer: 'focusConfigChanged_',
            },
            enableFriendlierSafeBrowsingSettings_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableFriendlierSafeBrowsingSettings');
                },
            },
            enableHashPrefixRealTimeLookups_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableHashPrefixRealTimeLookups');
                },
            },
            showDisableSafebrowsingDialog_: Boolean,
        };
    }
    focusConfigChanged_(_newConfig, oldConfig) {
        assert(!oldConfig);
        // 
        if (routes.CERTIFICATES) {
            this.focusConfig.set(routes.CERTIFICATES.path, () => {
                const toFocus = this.shadowRoot.querySelector('#manageCertificates');
                assert(toFocus);
                focusWithoutInk(toFocus);
            });
        }
        // 
        if (routes.SECURITY_KEYS) {
            this.focusConfig.set(routes.SECURITY_KEYS.path, () => {
                const toFocus = this.shadowRoot.querySelector('#security-keys-subpage-trigger');
                assert(toFocus);
                focusWithoutInk(toFocus);
            });
        }
    }
    ready() {
        super.ready();
        CrSettingsPrefs.initialized.then(() => {
            // Expand initial pref value manually because automatic
            // expanding is disabled.
            const prefValue = this.getPref('generated.safe_browsing').value;
            if (prefValue === SafeBrowsingSetting.ENHANCED) {
                this.$.safeBrowsingEnhanced.expanded = true;
            }
            else if (prefValue === SafeBrowsingSetting.STANDARD) {
                this.$.safeBrowsingStandard.expanded = true;
            }
        });
        this.registerHelpBubble('kEnhancedProtectionSettingElementId', this.$.safeBrowsingEnhanced.getBubbleAnchor(), { anchorPaddingTop: 10 });
    }
    /**
     * RouteObserverMixin
     */
    currentRouteChanged(route) {
        if (route === routes.SECURITY) {
            this.metricsBrowserProxy_.recordSafeBrowsingInteractionHistogram(SafeBrowsingInteractions.SAFE_BROWSING_SHOWED);
            const queryParams = Router.getInstance().getQueryParameters();
            const section = queryParams.get('q');
            if (section === 'enhanced') {
                this.$.safeBrowsingEnhanced.expanded = false;
                this.$.safeBrowsingStandard.expanded = false;
            }
        }
    }
    /**
     * Updates the buttons' expanded status by propagating previous click
     * events
     */
    updateCollapsedButtons_() {
        this.$.safeBrowsingEnhanced.updateCollapsed();
        this.$.safeBrowsingStandard.updateCollapsed();
    }
    /**
     * Possibly displays the Safe Browsing disable dialog based on the users
     * selection.
     */
    onSafeBrowsingRadioChange_() {
        const selected = Number.parseInt(this.$.safeBrowsingRadioGroup.selected, 10);
        const prefValue = this.getPref('generated.safe_browsing').value;
        if (prefValue !== selected) {
            this.recordInteractionHistogramOnRadioChange_(selected);
            this.recordActionOnRadioChange_(selected);
        }
        if (selected === SafeBrowsingSetting.DISABLED) {
            this.showDisableSafebrowsingDialog_ = true;
        }
        else {
            this.updateCollapsedButtons_();
            this.$.safeBrowsingRadioGroup.sendPrefChange();
        }
    }
    getDisabledExtendedSafeBrowsing_() {
        return this.getPref('generated.safe_browsing').value !==
            SafeBrowsingSetting.STANDARD;
    }
    getSafeBrowsingDisabledSubLabel_() {
        return this.i18n(this.enableFriendlierSafeBrowsingSettings_ ?
            'safeBrowsingNoneDescUpdated' :
            'safeBrowsingNoneDesc');
    }
    getSafeBrowsingEnhancedSubLabel_() {
        return this.i18n(this.enableFriendlierSafeBrowsingSettings_ ?
            'safeBrowsingEnhancedDescUpdated' :
            'safeBrowsingEnhancedDesc');
    }
    getSafeBrowsingStandardSubLabel_() {
        return this.i18n(this.enableFriendlierSafeBrowsingSettings_ ?
            this.enableHashPrefixRealTimeLookups_ ?
                'safeBrowsingStandardDescUpdatedProxy' :
                'safeBrowsingStandardDescUpdated' :
            'safeBrowsingStandardDesc');
    }
    getSafeBrowsingStandardBulTwo_() {
        return this.i18n(this.enableHashPrefixRealTimeLookups_ ?
            'safeBrowsingStandardBulTwoProxy' :
            'safeBrowsingStandardBulTwo');
    }
    getPasswordsLeakToggleLabel_() {
        return this.i18n(this.enableFriendlierSafeBrowsingSettings_ ?
            'passwordsLeakDetectionLabelUpdated' :
            'passwordsLeakDetectionLabel');
    }
    getPasswordsLeakToggleSubLabel_() {
        let subLabel = this.i18n(this.enableFriendlierSafeBrowsingSettings_ ?
            'passwordsLeakDetectionGeneralDescriptionUpdated' :
            'passwordsLeakDetectionGeneralDescription');
        // If the backing password leak detection preference is enabled, but the
        // generated preference is off and user control is disabled, then additional
        // text explaining that the feature will be enabled if the user signs in is
        // added.
        if (this.prefs !== undefined) {
            const generatedPref = this.getPref('generated.password_leak_detection');
            if (this.getPref('profile.password_manager_leak_detection').value &&
                !generatedPref.value && generatedPref.userControlDisabled) {
                subLabel +=
                    ' ' + // Whitespace is a valid sentence separator w.r.t. i18n.
                        this.i18n('passwordsLeakDetectionSignedOutEnabledDescription');
            }
        }
        return subLabel;
    }
    getHttpsFirstModeSubLabel_() {
        // If the backing HTTPS-Only Mode preference is enabled, but the
        // generated preference has its user control disabled, then additional
        // text explaining that the feature is locked down for Advanced Protection
        // users is added.
        const generatedPref = this.getPref('generated.https_first_mode_enabled');
        return this.i18n(generatedPref.userControlDisabled ?
            'httpsOnlyModeDescriptionAdvancedProtection' :
            'httpsOnlyModeDescription');
    }
    onManageCertificatesClick_() {
        // 
        Router.getInstance().navigateTo(routes.CERTIFICATES);
        // 
        // 
        this.metricsBrowserProxy_.recordSettingsPageHistogram(PrivacyElementInteractions.MANAGE_CERTIFICATES);
    }
    onChromeCertificatesClick_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('chromeRootStoreHelpCenterURL'));
    }
    onAdvancedProtectionProgramLinkClick_() {
        window.open(loadTimeData.getString('advancedProtectionURL'));
    }
    onSecurityKeysClick_() {
        Router.getInstance().navigateTo(routes.SECURITY_KEYS);
    }
    // 
    onSafeBrowsingExtendedReportingChange_() {
        this.metricsBrowserProxy_.recordSettingsPageHistogram(PrivacyElementInteractions.IMPROVE_SECURITY);
    }
    /**
     * Handles the closure of the disable safebrowsing dialog, reselects the
     * appropriate radio button if the user cancels the dialog, and puts focus on
     * the disable safebrowsing button.
     */
    onDisableSafebrowsingDialogClose_() {
        const dialog = this.shadowRoot.querySelector('settings-simple-confirmation-dialog');
        assert(dialog);
        const confirmed = dialog.wasConfirmed();
        this.recordInteractionHistogramOnSafeBrowsingDialogClose_(confirmed);
        this.recordActionOnSafeBrowsingDialogClose_(confirmed);
        // Check if the dialog was confirmed before closing it.
        if (confirmed) {
            this.$.safeBrowsingRadioGroup.sendPrefChange();
            this.updateCollapsedButtons_();
        }
        else {
            this.$.safeBrowsingRadioGroup.resetToPrefValue();
        }
        this.showDisableSafebrowsingDialog_ = false;
        // Set focus back to the no protection button regardless of user interaction
        // with the dialog, as it was the entry point to the dialog.
        focusWithoutInk(this.$.safeBrowsingDisabled);
    }
    onEnhancedProtectionExpandButtonClicked_() {
        this.recordInteractionHistogramOnExpandButtonClicked_(SafeBrowsingSetting.ENHANCED);
        this.recordActionOnExpandButtonClicked_(SafeBrowsingSetting.ENHANCED);
    }
    onStandardProtectionExpandButtonClicked_() {
        this.recordInteractionHistogramOnExpandButtonClicked_(SafeBrowsingSetting.STANDARD);
        this.recordActionOnExpandButtonClicked_(SafeBrowsingSetting.STANDARD);
    }
    // 
    onOpenChromeOsSecureDnsSettingsClicked_() {
        const path = loadTimeData.getString('chromeOSPrivacyAndSecuritySectionPath');
        OpenWindowProxyImpl.getInstance().openUrl(`chrome://os-settings/${path}`);
    }
    // 
    recordInteractionHistogramOnRadioChange_(safeBrowsingSetting) {
        let action;
        if (safeBrowsingSetting === SafeBrowsingSetting.ENHANCED) {
            action =
                SafeBrowsingInteractions.SAFE_BROWSING_ENHANCED_PROTECTION_CLICKED;
        }
        else if (safeBrowsingSetting === SafeBrowsingSetting.STANDARD) {
            action =
                SafeBrowsingInteractions.SAFE_BROWSING_STANDARD_PROTECTION_CLICKED;
        }
        else {
            action =
                SafeBrowsingInteractions.SAFE_BROWSING_DISABLE_SAFE_BROWSING_CLICKED;
        }
        this.metricsBrowserProxy_.recordSafeBrowsingInteractionHistogram(action);
    }
    recordInteractionHistogramOnExpandButtonClicked_(safeBrowsingSetting) {
        this.metricsBrowserProxy_.recordSafeBrowsingInteractionHistogram(safeBrowsingSetting === SafeBrowsingSetting.ENHANCED ?
            SafeBrowsingInteractions
                .SAFE_BROWSING_ENHANCED_PROTECTION_EXPAND_ARROW_CLICKED :
            SafeBrowsingInteractions
                .SAFE_BROWSING_STANDARD_PROTECTION_EXPAND_ARROW_CLICKED);
    }
    recordInteractionHistogramOnSafeBrowsingDialogClose_(confirmed) {
        this.metricsBrowserProxy_.recordSafeBrowsingInteractionHistogram(confirmed ? SafeBrowsingInteractions
            .SAFE_BROWSING_DISABLE_SAFE_BROWSING_DIALOG_CONFIRMED :
            SafeBrowsingInteractions
                .SAFE_BROWSING_DISABLE_SAFE_BROWSING_DIALOG_DENIED);
    }
    recordActionOnRadioChange_(safeBrowsingSetting) {
        let actionName;
        if (safeBrowsingSetting === SafeBrowsingSetting.ENHANCED) {
            actionName = 'SafeBrowsing.Settings.EnhancedProtectionClicked';
        }
        else if (safeBrowsingSetting === SafeBrowsingSetting.STANDARD) {
            actionName = 'SafeBrowsing.Settings.StandardProtectionClicked';
        }
        else {
            actionName = 'SafeBrowsing.Settings.DisableSafeBrowsingClicked';
        }
        this.metricsBrowserProxy_.recordAction(actionName);
    }
    recordActionOnExpandButtonClicked_(safeBrowsingSetting) {
        this.metricsBrowserProxy_.recordAction(safeBrowsingSetting === SafeBrowsingSetting.ENHANCED ?
            'SafeBrowsing.Settings.EnhancedProtectionExpandArrowClicked' :
            'SafeBrowsing.Settings.StandardProtectionExpandArrowClicked');
    }
    recordActionOnSafeBrowsingDialogClose_(confirmed) {
        this.metricsBrowserProxy_.recordAction(confirmed ? 'SafeBrowsing.Settings.DisableSafeBrowsingDialogConfirmed' :
            'SafeBrowsing.Settings.DisableSafeBrowsingDialogDenied');
    }
}
customElements.define(SettingsSecurityPageElement.is, SettingsSecurityPageElement);
