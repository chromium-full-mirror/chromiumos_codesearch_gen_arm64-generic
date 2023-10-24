// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import 'chrome://resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/paper-tooltip/paper-tooltip.js';
import '../settings_shared.css.js';
import '../site_favicon.js';
import '../i18n_setup.js';
import './site_review_shared.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { isUndoKeyboardEvent } from 'chrome://resources/js/util_ts.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { MetricsBrowserProxyImpl, SafetyCheckUnusedSitePermissionsModuleInteractions } from '../metrics_browser_proxy.js';
import { routes } from '../route.js';
import { RouteObserverMixin } from '../router.js';
import { SafetyHubBrowserProxyImpl, SafetyHubEvent } from '../safety_hub/safety_hub_browser_proxy.js';
import { MODEL_UPDATE_DELAY_MS } from '../site_settings/constants.js';
import { SiteSettingsMixin } from '../site_settings/site_settings_mixin.js';
import { TooltipMixin } from '../tooltip_mixin.js';
import { getLocalizationStringForContentType } from './site_settings_page_util.js';
import { getTemplate } from './unused_site_permissions.html.js';
/** Actions the user can perform to review their unused site permissions. */
var Action;
(function (Action) {
    Action["ALLOW_AGAIN"] = "allow_again";
    Action["GOT_IT"] = "got_it";
})(Action || (Action = {}));
const SettingsUnusedSitePermissionsElementBase = TooltipMixin(I18nMixin(RouteObserverMixin(WebUiListenerMixin(SiteSettingsMixin(PolymerElement)))));
export class SettingsUnusedSitePermissionsElement extends SettingsUnusedSitePermissionsElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = SafetyHubBrowserProxyImpl.getInstance();
        this.eventTracker_ = new EventTracker();
        this.modelUpdateDelayMsForTesting_ = null;
        this.metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
        this.shouldRefocusExpandButton_ = false;
    }
    static get is() {
        return 'settings-unused-site-permissions';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /* The string for the primary header label. */
            headerString_: String,
            /** Most recent site permissions the user has allowed again. */
            lastUnusedSitePermissionsAllowedAgain_: {
                type: Object,
                value: null,
            },
            /** Most recent site permissions list the user has acknowledged. */
            lastUnusedSitePermissionsListAcknowledged_: {
                type: Array,
                value: null,
            },
            /**
             * Last action the user has taken, determines the function of the undo
             * button in the toast.
             */
            lastUserAction_: {
                type: Action,
                value: null,
            },
            /**
             * List of unused sites where permissions have been removed. This list
             * being null indicates it has not loaded yet.
             */
            sites_: {
                type: Array,
                value: null,
                observer: 'onSitesChanged_',
            },
            /**
             * Indicates whether to show completion info after user has finished the
             * review process.
             */
            shouldShowCompletionInfo_: {
                type: Boolean,
                computed: 'computeShouldShowCompletionInfo_(sites_.*)',
            },
            /** Text below primary header label. */
            subtitleString_: String,
            /* The text that will be shown in the undo toast element. */
            toastText_: String,
            /* If the list of unused site permissions is expanded or collapsed. */
            unusedSitePermissionsReviewListExpanded_: {
                type: Boolean,
                value: true,
                observer: 'onListExpandedChanged_',
            },
        };
    }
    async connectedCallback() {
        this.addWebUiListener(SafetyHubEvent.UNUSED_PERMISSIONS_MAYBE_CHANGED, (sites) => this.onUnusedSitePermissionListChanged_(sites));
        const sites = await this.browserProxy_.getRevokedUnusedSitePermissionsList();
        this.onUnusedSitePermissionListChanged_(sites);
        // This should be called after the sites have been retrieved such that
        // currentRouteChanged is called afterwards.
        super.connectedCallback();
    }
    currentRouteChanged(currentRoute) {
        if (currentRoute !== routes.SITE_SETTINGS) {
            // Remove event listener when navigating away from the page.
            this.eventTracker_.remove(document, 'keydown');
            return;
        }
        // Only record the metrics when the user navigates to the site settings page
        // that shows the unused sites module.
        assert(this.sites_);
        this.metricsBrowserProxy_
            .recordSafetyCheckUnusedSitePermissionsListCountHistogram(this.sites_.length);
        this.metricsBrowserProxy_
            .recordSafetyCheckUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions.OPEN_REVIEW_UI);
        this.eventTracker_.add(document, 'keydown', (e) => this.onKeyDown_(e));
    }
    /** Show info that review is completed when there are no permissions left. */
    computeShouldShowCompletionInfo_() {
        return this.sites_ !== null && this.sites_.length === 0;
    }
    getAllowAgainAriaLabelForOrigin_(origin) {
        return this.i18n('safetyCheckUnusedSitePermissionsAllowAgainAriaLabel', origin);
    }
    // TODO(crbug.com/1393005): Refactor common code across this and
    // review_notification_permissions.ts.
    getModelUpdateDelayMs_() {
        return this.modelUpdateDelayMsForTesting_ === null ?
            MODEL_UPDATE_DELAY_MS :
            this.modelUpdateDelayMsForTesting_;
    }
    /**
     * Text that describes which permissions have been revoked for an origin.
     * Permissions are listed explicitly when there are up to and including 3. For
     * 4 or more, the two first permissions are listed explicitly and for the
     * remaining ones a count is shown, e.g. 'and 2 more'.
     */
    getPermissionsText_(permissions) {
        assert(permissions.length > 0, 'There is no permission for the user to review.');
        const permissionsI18n = permissions.map(permission => {
            const localizationString = getLocalizationStringForContentType(permission);
            return localizationString ? this.i18n(localizationString) : '';
        });
        if (permissionsI18n.length === 1) {
            return this.i18n('safetyCheckUnusedSitePermissionsRemovedOnePermissionLabel', ...permissionsI18n);
        }
        if (permissionsI18n.length === 2) {
            return this.i18n('safetyCheckUnusedSitePermissionsRemovedTwoPermissionsLabel', ...permissionsI18n);
        }
        if (permissionsI18n.length === 3) {
            return this.i18n('safetyCheckUnusedSitePermissionsRemovedThreePermissionsLabel', ...permissionsI18n);
        }
        return this.i18n('safetyCheckUnusedSitePermissionsRemovedFourOrMorePermissionsLabel', permissionsI18n[0], permissionsI18n[1], permissionsI18n.length - 2);
    }
    getRowClass_(visible) {
        return visible ? '' : 'removed';
    }
    // TODO(crbug.com/1393005): Refactor common code across this and
    // review_notification_permissions.ts.
    hideItem_(origin) {
        assert(this.sites_ !== null);
        for (const [index, site] of this.sites_.entries()) {
            if (!origin || site.origin === origin) {
                // Update site property through Polymer's array mutation method so
                // that the corresponding row in the dom-repeat for the list of sites
                // gets notified.
                this.set(['sites_', index, 'visible'], false);
                if (origin) {
                    break;
                }
            }
        }
    }
    onAllowAgainClick_(event) {
        event.stopPropagation();
        const item = event.model.item;
        this.lastUserAction_ = Action.ALLOW_AGAIN;
        this.lastUnusedSitePermissionsAllowedAgain_ = item;
        this.showUndoToast_(this.i18n('safetyCheckUnusedSitePermissionsToastLabel', item.origin));
        this.hideItem_(item.origin);
        setTimeout(this.browserProxy_.allowPermissionsAgainForUnusedSite.bind(this.browserProxy_, item.origin), this.getModelUpdateDelayMs_());
        this.metricsBrowserProxy_
            .recordSafetyCheckUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions.ALLOW_AGAIN);
    }
    async onGotItClick_(e) {
        e.stopPropagation();
        assert(this.sites_ !== null);
        this.lastUserAction_ = Action.GOT_IT;
        this.lastUnusedSitePermissionsListAcknowledged_ = this.sites_;
        this.browserProxy_.acknowledgeRevokedUnusedSitePermissionsList();
        const toastText = await PluralStringProxyImpl.getInstance().getPluralString('safetyCheckUnusedSitePermissionsToastBulkLabel', this.sites_.length);
        this.showUndoToast_(toastText);
        this.metricsBrowserProxy_
            .recordSafetyCheckUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions.ACKNOWLEDGE_ALL);
    }
    /* Repopulate the list when unused site permission list is updated. */
    onUnusedSitePermissionListChanged_(sites) {
        this.sites_ = sites.map((site) => {
            return { ...site, visible: true };
        });
    }
    onShowTooltip_(e) {
        e.stopPropagation();
        const tooltip = this.shadowRoot.querySelector('paper-tooltip');
        assert(tooltip);
        this.showTooltipAtTarget(tooltip, e.target);
    }
    async onSitesChanged_() {
        if (this.sites_ === null) {
            return;
        }
        this.headerString_ =
            await PluralStringProxyImpl.getInstance().getPluralString('safetyCheckUnusedSitePermissionsPrimaryLabel', this.sites_.length);
        this.subtitleString_ =
            await PluralStringProxyImpl.getInstance().getPluralString('safetyCheckUnusedSitePermissionsSecondaryLabel', this.sites_.length);
        // Focus on the expand button after the undo button is clicked and sites are
        // loaded again.
        if (this.shouldRefocusExpandButton_) {
            this.shouldRefocusExpandButton_ = false;
            const expandButton = this.shadowRoot.querySelector('cr-expand-button');
            assert(expandButton);
            expandButton.focus();
        }
    }
    onListExpandedChanged_(isExpanded) {
        if (!isExpanded) {
            this.metricsBrowserProxy_
                .recordSafetyCheckUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions.MINIMIZE);
        }
    }
    onUndoClick_(e) {
        e.stopPropagation();
        this.undoLastAction_();
    }
    undoLastAction_() {
        switch (this.lastUserAction_) {
            case Action.ALLOW_AGAIN:
                assert(this.lastUnusedSitePermissionsAllowedAgain_ !== null);
                this.browserProxy_.undoAllowPermissionsAgainForUnusedSite(this.lastUnusedSitePermissionsAllowedAgain_);
                this.lastUnusedSitePermissionsAllowedAgain_ = null;
                this.metricsBrowserProxy_
                    .recordSafetyCheckUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions
                    .UNDO_ALLOW_AGAIN);
                break;
            case Action.GOT_IT:
                assert(this.lastUnusedSitePermissionsListAcknowledged_ !== null);
                this.browserProxy_.undoAcknowledgeRevokedUnusedSitePermissionsList(this.lastUnusedSitePermissionsListAcknowledged_);
                this.lastUnusedSitePermissionsListAcknowledged_ = null;
                this.metricsBrowserProxy_
                    .recordSafetyCheckUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions
                    .UNDO_ACKNOWLEDGE_ALL);
                break;
            default:
                assertNotReached();
        }
        this.lastUserAction_ = null;
        this.shouldRefocusExpandButton_ = true;
        this.$.undoToast.hide();
    }
    onKeyDown_(e) {
        // Only allow undoing via ctrl+z when the undo toast is opened.
        if (!this.$.undoToast.open) {
            return;
        }
        if (isUndoKeyboardEvent(e)) {
            this.undoLastAction_();
        }
    }
    showUndoToast_(text) {
        this.toastText_ = text;
        // Re-open the toast if one was already open; this resets the timer.
        if (this.$.undoToast.open) {
            this.$.undoToast.hide();
        }
        this.$.undoToast.show();
    }
    // TODO(crbug.com/1393005): Refactor common code across this and
    // review_notification_permissions.ts.
    setModelUpdateDelayMsForTesting(delayMs) {
        this.modelUpdateDelayMsForTesting_ = delayMs;
    }
}
customElements.define(SettingsUnusedSitePermissionsElement.is, SettingsUnusedSitePermissionsElement);
