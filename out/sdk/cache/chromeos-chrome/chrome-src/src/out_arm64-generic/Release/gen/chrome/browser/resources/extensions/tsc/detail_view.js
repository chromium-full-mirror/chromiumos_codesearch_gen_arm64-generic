// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/js/action_link.js';
import 'chrome://resources/cr_elements/action_link.css.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import 'chrome://resources/polymer/v3_0/paper-styles/color.js';
import './host_permissions_toggle_list.js';
import './runtime_host_permissions.js';
import './shared_style.css.js';
import './shared_vars.css.js';
import './strings.m.js';
import './toggle_row.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { afterNextRender, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './detail_view.html.js';
import { ItemMixin } from './item_mixin.js';
import { computeInspectableViewLabel, EnableControl, getEnableControl, getEnableToggleAriaLabel, getEnableToggleTooltipText, getItemSource, getItemSourceString, isEnabled, sortViews, userCanChangeEnablement } from './item_util.js';
import { navigation, Page } from './navigation_helper.js';
const ExtensionsDetailViewElementBase = I18nMixin(ItemMixin(PolymerElement));
export class ExtensionsDetailViewElement extends ExtensionsDetailViewElementBase {
    static get is() {
        return 'extensions-detail-view';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The underlying ExtensionInfo for the details being displayed.
             */
            data: Object,
            size_: String,
            delegate: Object,
            /** Whether the user has enabled the UI's developer mode. */
            inDevMode: Boolean,
            /**
             * Whether enhanced site controls have been enabled (through a feature
             * flag). For this page, there are some changes to the site permissions
             * section.
             */
            enableEnhancedSiteControls: Boolean,
            /** Whether "allow in incognito" option should be shown. */
            incognitoAvailable: Boolean,
            /** Whether "View Activity Log" link should be shown. */
            showActivityLog: Boolean,
            /** Whether the user navigated to this page from the activity log page. */
            fromActivityLog: Boolean,
            /** Inspectable views sorted to put background/service workers first */
            sortedViews_: {
                type: Array,
                computed: 'computeSortedViews_(data.views)',
            },
            /** Whether the extensions safety check warning is shown. */
            showSafetyCheck_: {
                type: Boolean,
                computed: 'computeShowSafetyCheck_(data.safetyCheckText)',
                observer: 'onShowSafetyCheckChanged_',
            },
            /** Whether the extensions blocklist text is shown. */
            showBlocklistText_: {
                type: Boolean,
                computed: 'computeShowBlocklistText_(data.blacklistText)',
            },
        };
    }
    static get observers() {
        return ['onItemIdChanged_(data.id, delegate)'];
    }
    ready() {
        super.ready();
        this.addEventListener('view-enter-start', this.onViewEnterStart_);
    }
    /**
     * Focuses the extensions options button. This should be used after the
     * dialog closes.
     */
    focusOptionsButton() {
        this.$.extensionsOptions.focus();
    }
    /**
     * Focuses the back button when page is loaded.
     */
    onViewEnterStart_() {
        const elementToFocus = this.fromActivityLog ?
            this.$.extensionsActivityLogLink :
            this.$.closeButton;
        afterNextRender(this, () => focusWithoutInk(elementToFocus));
    }
    onItemIdChanged_() {
        // Clear the size, since this view is reused, such that no obsolete size
        // is displayed.:
        this.size_ = '';
        this.delegate.getExtensionSize(this.data.id).then(size => {
            this.size_ = size;
        });
    }
    onActivityLogClick_() {
        navigation.navigateTo({ page: Page.ACTIVITY_LOG, extensionId: this.data.id });
    }
    getDescription_(description, fallback) {
        return description || fallback;
    }
    getBackButtonAriaLabel_() {
        return loadTimeData.getStringF('itemDetailsBackButtonAriaLabel', this.data.name);
    }
    getBackButtonAriaRoleDescription_() {
        return loadTimeData.getStringF('itemDetailsBackButtonRoleDescription', this.data.name);
    }
    getEnableToggleAriaLabel_() {
        return getEnableToggleAriaLabel(this.isEnabled_(), this.data.type, this.i18n('appEnabled'), this.i18n('extensionEnabled'), this.i18n('itemOff'));
    }
    getEnableToggleTooltipText_() {
        return getEnableToggleTooltipText(this.data);
    }
    onCloseButtonClick_() {
        navigation.navigateTo({ page: Page.LIST });
    }
    isEnabled_() {
        return isEnabled(this.data.state);
    }
    isEnableToggleEnabled_() {
        return userCanChangeEnablement(this.data);
    }
    hasDependentExtensions_() {
        return this.data.dependentExtensions.length > 0;
    }
    hasSevereWarnings_() {
        return this.data.disableReasons.corruptInstall ||
            this.data.disableReasons.suspiciousInstall ||
            this.data.disableReasons.updateRequired || !!this.data.blacklistText ||
            this.data.disableReasons.publishedInStoreRequired ||
            this.data.runtimeWarnings.length > 0;
    }
    computeEnabledStyle_() {
        return this.isEnabled_() ? 'enabled-text' : '';
    }
    computeEnabledText_(state, onText, offText) {
        // TODO(devlin): Get the full spectrum of these strings from bettes.
        return isEnabled(state) ? onText : offText;
    }
    computeSortedViews_() {
        return sortViews(this.data.views);
    }
    computeInspectLabel_(view) {
        return computeInspectableViewLabel(view);
    }
    shouldShowOptionsLink_() {
        return !!this.data.optionsPage;
    }
    shouldShowOptionsSection_() {
        return this.canPinToToolbar_() || this.data.incognitoAccess.isEnabled ||
            this.data.fileAccess.isEnabled || this.data.errorCollection.isEnabled;
    }
    canPinToToolbar_() {
        return this.data.pinnedToToolbar !== undefined;
    }
    shouldShowIncognitoOption_() {
        return this.data.incognitoAccess.isEnabled && this.incognitoAvailable;
    }
    onEnableToggleChange_() {
        this.delegate.setItemEnabled(this.data.id, this.$.enableToggle.checked);
        this.$.enableToggle.checked = this.isEnabled_();
    }
    onInspectClick_(e) {
        this.delegate.inspectItemView(this.data.id, e.model.item);
    }
    onExtensionOptionsClick_() {
        this.delegate.showItemOptionsPage(this.data);
    }
    onReloadClick_() {
        this.delegate.reloadItem(this.data.id).catch(loadError => {
            this.dispatchEvent(new CustomEvent('load-error', { bubbles: true, composed: true, detail: loadError }));
        });
    }
    onRemoveClick_() {
        if (this.showSafetyCheck_) {
            chrome.metricsPrivate.recordUserAction('SafetyCheck.DetailRemoveClicked');
        }
        this.delegate.deleteItem(this.data.id);
    }
    onKeepClick_() {
        if (this.showSafetyCheck_) {
            chrome.metricsPrivate.recordUserAction('SafetyCheck.DetailKeepClicked');
        }
        this.delegate.setItemSafetyCheckWarningAcknowledged(this.data.id);
    }
    onRepairClick_() {
        this.delegate.repairItem(this.data.id);
    }
    onLoadPathClick_() {
        this.delegate.showInFolder(this.data.id);
    }
    onPinnedToToolbarChange_() {
        this.delegate.setItemPinnedToToolbar(this.data.id, this.shadowRoot
            .querySelector('#pin-to-toolbar').checked);
    }
    onAllowIncognitoChange_() {
        this.delegate.setItemAllowedIncognito(this.data.id, this.shadowRoot
            .querySelector('#allow-incognito').checked);
    }
    onAllowOnFileUrlsChange_() {
        this.delegate.setItemAllowedOnFileUrls(this.data.id, this.shadowRoot
            .querySelector('#allow-on-file-urls').checked);
    }
    onCollectErrorsChange_() {
        this.delegate.setItemCollectsErrors(this.data.id, this.shadowRoot
            .querySelector('#collect-errors').checked);
    }
    onExtensionWebSiteClick_() {
        this.delegate.openUrl(this.data.manifestHomePageUrl);
    }
    onSiteSettingsClick_() {
        this.delegate.openUrl(`chrome://settings/content/siteDetails?site=chrome-extension://${this.data.id}`);
    }
    onViewInStoreClick_() {
        this.delegate.openUrl(this.data.webStoreUrl);
    }
    computeDependentEntry_(item) {
        return loadTimeData.getStringF('itemDependentEntry', item.name, item.id);
    }
    computeSourceString_() {
        return this.data.locationText ||
            getItemSourceString(getItemSource(this.data));
    }
    hasPermissions_() {
        return this.data.permissions.simplePermissions.length > 0 ||
            this.hasRuntimeHostPermissions_();
    }
    getNoPermissionsString_() {
        const showPermissionsAndSiteAccessStrings = this.enableEnhancedSiteControls && !this.showSiteAccessContent_();
        return loadTimeData.getString(showPermissionsAndSiteAccessStrings ?
            'itemPermissionsAndSiteAccessEmpty' :
            'itemPermissionsEmpty');
    }
    hasRuntimeHostPermissions_() {
        return !!this.data.permissions.runtimeHostPermissions;
    }
    // Returns whether the site access section should be shown. This includes the
    // "no site access" message shown in the section if
    // |enableEnhancedSiteControls| is not enabled.
    showSiteAccessSection_() {
        return !this.enableEnhancedSiteControls || this.showSiteAccessContent_();
    }
    showSiteAccessContent_() {
        return this.showFreeformRuntimeHostPermissions_() ||
            this.showHostPermissionsToggleList_();
    }
    showFreeformRuntimeHostPermissions_() {
        return this.hasRuntimeHostPermissions_() &&
            this.data.permissions.runtimeHostPermissions.hasAllHosts;
    }
    showHostPermissionsToggleList_() {
        return this.hasRuntimeHostPermissions_() &&
            !this.data.permissions.runtimeHostPermissions.hasAllHosts;
    }
    showEnableAccessRequestsToggle_() {
        return this.showSiteAccessContent_() && this.enableEnhancedSiteControls;
    }
    onShowAccessRequestsChange_() {
        const showAccessRequestsToggle = this.shadowRoot.querySelector('#show-access-requests-toggle');
        assert(showAccessRequestsToggle);
        this.delegate.setShowAccessRequestsInToolbar(this.data.id, showAccessRequestsToggle.checked);
    }
    showReloadButton_() {
        return getEnableControl(this.data) === EnableControl.RELOAD;
    }
    computeShowSafetyCheck_() {
        if (!loadTimeData.getBoolean('safetyCheckShowReviewPanel')) {
            return false;
        }
        const ExtensionType = chrome.developerPrivate.ExtensionType;
        // Check to make sure this is an extension and not a Chrome app.
        if (!(this.data.type === ExtensionType.EXTENSION ||
            this.data.type === ExtensionType.SHARED_MODULE)) {
            return false;
        }
        return !!(this.data.safetyCheckText && this.data.safetyCheckText.detailString &&
            this.data.acknowledgeSafetyCheckWarning !== true);
    }
    onShowSafetyCheckChanged_() {
        if (this.showSafetyCheck_) {
            chrome.metricsPrivate.recordUserAction('SafetyCheck.DetailWarningShown');
        }
    }
    computeShowBlocklistText_() {
        return !this.showSafetyCheck_ && !!this.data.blacklistText;
    }
    showRepairButton_() {
        return getEnableControl(this.data) === EnableControl.REPAIR;
    }
    showEnableToggle_() {
        const enableControl = getEnableControl(this.data);
        // We still show the toggle even if we also show the repair button in the
        // detail view, because the repair button appears just beneath it.
        return enableControl === EnableControl.ENABLE_TOGGLE ||
            enableControl === EnableControl.REPAIR;
    }
    showAllowlistWarning_() {
        // Only show the allowlist warning if there is no blocklist warning. It
        // would be redundant since all blocklisted items are necessarily not
        // included in the Safe Browsing allowlist.
        return this.data.showSafeBrowsingAllowlistWarning &&
            !this.data.blacklistText;
    }
}
customElements.define(ExtensionsDetailViewElement.is, ExtensionsDetailViewElement);
