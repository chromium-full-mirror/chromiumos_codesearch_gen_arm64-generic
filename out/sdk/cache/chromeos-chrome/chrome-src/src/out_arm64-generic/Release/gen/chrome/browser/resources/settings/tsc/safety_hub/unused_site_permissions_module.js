// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import 'chrome://resources/polymer/v3_0/paper-tooltip/paper-tooltip.js';
import '../i18n_setup.js';
import '../icons.html.js';
import './safety_hub_module.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { isUndoKeyboardEvent } from 'chrome://resources/js/util.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { MetricsBrowserProxyImpl, SafetyCheckUnusedSitePermissionsModuleInteractions } from '../metrics_browser_proxy.js';
import { routes } from '../route.js';
import { RouteObserverMixin, Router } from '../router.js';
import { SiteSettingsMixin } from '../site_settings/site_settings_mixin.js';
import { getLocalizationStringForContentType } from '../site_settings_page/site_settings_page_util.js';
import { TooltipMixin } from '../tooltip_mixin.js';
import { SafetyHubBrowserProxyImpl, SafetyHubEvent } from './safety_hub_browser_proxy.js';
import { getTemplate } from './unused_site_permissions_module.html.js';
/** Actions the user can perform to review their unused site permissions. */
var Action;
(function (Action) {
    Action[Action["ALLOW_AGAIN"] = 0] = "ALLOW_AGAIN";
    Action[Action["GOT_IT"] = 1] = "GOT_IT";
})(Action || (Action = {}));
const SettingsSafetyHubUnusedSitePermissionsModuleElementBase = TooltipMixin(I18nMixin(RouteObserverMixin(WebUiListenerMixin(SiteSettingsMixin(PolymerElement)))));
export class SettingsSafetyHubUnusedSitePermissionsModuleElement extends SettingsSafetyHubUnusedSitePermissionsModuleElementBase {
    constructor() {
        super(...arguments);
        this.eventTracker_ = new EventTracker();
        this.browserProxy_ = SafetyHubBrowserProxyImpl.getInstance();
        this.metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-safety-hub-unused-site-permissions';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            // The string for the primary header label.
            headerString_: String,
            // Text below primary header label.
            subheaderString_: String,
            // The icon next to primary header label.
            headerIconString_: String,
            // Most recent site permissions the user has allowed again.
            lastUnusedSitePermissionsAllowedAgain_: {
                type: Object,
                value: null,
            },
            // Most recent site permissions list the user has acknowledged.
            lastUnusedSitePermissionsListAcknowledged_: {
                type: Array,
                value: null,
            },
            // Sites that have already been rendered. Any new ones not listed here
            // will need to be explicitly animated to show.
            renderedOrigins_: {
                type: Array,
                value: [],
            },
            // Last action the user has taken, determines the function of the undo
            // button in the toast.
            lastUserAction_: {
                type: Object,
                value: null,
            },
            // List of unused sites where permissions have been removed. This list
            // being null indicates it has not loaded yet.
            sites_: {
                type: Array,
                value: null,
                observer: 'onSitesChanged_',
            },
            // The text that will be shown in the undo toast element.
            toastText_: String,
            // Indicates whether user has finished the review process.
            shouldShowCompletionInfo_: {
                type: Boolean,
                computed: 'computeShouldShowCompletionInfo_(sites_.*)',
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
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    currentRouteChanged(currentRoute) {
        if (currentRoute !== routes.SAFETY_HUB) {
            // Remove event listener when navigating away from the page.
            this.eventTracker_.removeAll();
            return;
        }
        if (this.sites_ !== null) {
            this.metricsBrowserProxy_
                .recordSafetyHubUnusedSitePermissionsModuleListCountHistogram(this.sites_.length);
        }
        this.eventTracker_.add(document, 'keydown', (e) => this.onKeyDown_(e));
    }
    /**
     * Text that describes which permissions have been revoked for an origin.
     * Permissions are listed explicitly when there are up to and including 3.
     * For 4 or more, the two first permissions are listed explicitly and for
     * the remaining ones a count is shown, e.g. 'and 2 more'.
     */
    getPermissionsText_(permissions) {
        assert(permissions.length > 0, 'There is no permission for the user to review.');
        const permissionsI18n = permissions.map(permission => {
            const localizationString = getLocalizationStringForContentType(permission);
            return localizationString ? this.i18n(localizationString) : '';
        });
        switch (permissionsI18n.length) {
            case 1:
                return this.i18n('safetyCheckUnusedSitePermissionsRemovedOnePermissionLabel', ...permissionsI18n);
            case 2:
                return this.i18n('safetyCheckUnusedSitePermissionsRemovedTwoPermissionsLabel', ...permissionsI18n);
            case 3:
                return this.i18n('safetyCheckUnusedSitePermissionsRemovedThreePermissionsLabel', ...permissionsI18n);
            default:
                return this.i18n('safetyCheckUnusedSitePermissionsRemovedFourOrMorePermissionsLabel', permissionsI18n[0], permissionsI18n[1], permissionsI18n.length - 2);
        }
    }
    onAllowAgainClick_(event) {
        event.stopPropagation();
        const item = event.detail;
        this.lastUserAction_ = Action.ALLOW_AGAIN;
        this.lastUnusedSitePermissionsAllowedAgain_ = item;
        this.showUndoToast_(this.i18n('safetyCheckUnusedSitePermissionsToastLabel', item.origin));
        this.$.module.animateHide(item.origin, this.browserProxy_.allowPermissionsAgainForUnusedSite.bind(this.browserProxy_, item.origin));
        this.metricsBrowserProxy_
            .recordSafetyHubUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions.ALLOW_AGAIN);
    }
    async onGotItClick_(e) {
        e.stopPropagation();
        assert(this.sites_ !== null);
        this.lastUserAction_ = Action.GOT_IT;
        this.lastUnusedSitePermissionsListAcknowledged_ = this.sites_;
        this.$.module.animateHide(
        /* all origins */ null, this.browserProxy_.acknowledgeRevokedUnusedSitePermissionsList.bind(this.browserProxy_));
        const toastText = await PluralStringProxyImpl.getInstance().getPluralString('safetyCheckUnusedSitePermissionsToastBulkLabel', this.sites_.length);
        this.showUndoToast_(toastText);
        this.metricsBrowserProxy_
            .recordSafetyHubUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions.ACKNOWLEDGE_ALL);
    }
    onMoreActionClick_(e) {
        e.stopPropagation();
        this.$.headerActionMenu.showAt(e.target);
    }
    onGoToSettingsClick_(e) {
        e.stopPropagation();
        this.$.headerActionMenu.close();
        Router.getInstance().navigateTo(routes.SITE_SETTINGS, /* dynamicParams= */ undefined, 
        /* removeSearch= */ true);
        this.metricsBrowserProxy_
            .recordSafetyHubUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions.GO_TO_SETTINGS);
    }
    /* Repopulate the list when unused site permission list is updated. */
    onUnusedSitePermissionListChanged_(sites) {
        this.sites_ = sites.map((site) => ({ ...site, detail: this.getPermissionsText_(site.permissions) }));
    }
    setHeaderToCompletionState_() {
        this.headerString_ = this.toastText_ ?
            this.toastText_ :
            this.i18n('safetyCheckUnusedSitePermissionsDoneLabel');
        this.subheaderString_ = '';
        this.headerIconString_ = 'cr:check';
    }
    async onSitesChanged_() {
        if (this.sites_ === null) {
            return;
        }
        // Run the show animation on all new items, i.e. those items
        // in |this.sites_| which aren't already rendered.
        this.$.module.animateShow(this.sites_.map(site => site.origin)
            .filter(origin => !this.renderedOrigins_.includes(origin)));
        this.renderedOrigins_ = this.sites_.map(site => site.origin);
        if (this.shouldShowCompletionInfo_) {
            this.setHeaderToCompletionState_();
            return;
        }
        this.headerString_ =
            await PluralStringProxyImpl.getInstance().getPluralString('safetyCheckUnusedSitePermissionsPrimaryLabel', this.sites_.length);
        this.subheaderString_ =
            await PluralStringProxyImpl.getInstance().getPluralString('safetyCheckUnusedSitePermissionsSecondaryLabel', this.sites_.length);
        this.headerIconString_ = 'settings:permissions';
    }
    onUndoClick_(e) {
        e.stopPropagation();
        this.undoLastAction_();
    }
    /**
     * Show info that review is completed when there are no permissions left.
     */
    computeShouldShowCompletionInfo_() {
        return this.sites_ !== null && this.sites_.length === 0;
    }
    undoLastAction_() {
        switch (this.lastUserAction_) {
            case Action.ALLOW_AGAIN:
                assert(this.lastUnusedSitePermissionsAllowedAgain_ !== null);
                this.browserProxy_.undoAllowPermissionsAgainForUnusedSite(this.lastUnusedSitePermissionsAllowedAgain_);
                this.lastUnusedSitePermissionsAllowedAgain_ = null;
                this.metricsBrowserProxy_
                    .recordSafetyHubUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions
                    .UNDO_ALLOW_AGAIN);
                break;
            case Action.GOT_IT:
                assert(this.lastUnusedSitePermissionsListAcknowledged_ !== null);
                this.browserProxy_.undoAcknowledgeRevokedUnusedSitePermissionsList(this.lastUnusedSitePermissionsListAcknowledged_);
                this.lastUnusedSitePermissionsListAcknowledged_ = null;
                this.metricsBrowserProxy_
                    .recordSafetyHubUnusedSitePermissionsModuleInteractionsHistogram(SafetyCheckUnusedSitePermissionsModuleInteractions
                    .UNDO_ACKNOWLEDGE_ALL);
                break;
            default:
                assertNotReached();
        }
        this.lastUserAction_ = null;
        this.$.undoToast.hide();
    }
    onKeyDown_(e) {
        // Only allow undoing via ctrl+z when the undo toast is opened.
        if (!this.$.undoToast.open) {
            return;
        }
        if (isUndoKeyboardEvent(e)) {
            this.undoLastAction_();
            e.stopPropagation();
        }
    }
    showUndoToast_(text) {
        this.toastText_ = text;
        this.$.undoToast.show();
    }
    // TODO(crbug.com/1443466): Move common functionality between
    // unused_site_permissions_module.ts and notification_permissions_module.ts to
    // a util class.
    showUndoTooltip_(e) {
        e.stopPropagation();
        const tooltip = this.shadowRoot.querySelector('paper-tooltip');
        assert(tooltip);
        this.showTooltipAtTarget(tooltip, e.target);
    }
}
customElements.define(SettingsSafetyHubUnusedSitePermissionsModuleElement.is, SettingsSafetyHubUnusedSitePermissionsModuleElement);
