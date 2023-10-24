// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-basic-page' is the settings page containing the actual settings.
 */
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import '../appearance_page/appearance_page.js';
import '../privacy_page/preloading_page.js';
import '../privacy_page/privacy_guide/privacy_guide_promo.js';
import '../privacy_page/privacy_page.js';
import '../safety_check_page/safety_check_page.js';
import '../safety_hub/safety_hub_entry_point.js';
import '../autofill_page/autofill_page.js';
import '../controls/settings_idle_load.js';
import '../on_startup_page/on_startup_page.js';
import '../people_page/people_page.js';
import '../performance_page/battery_page.js';
import '../performance_page/performance_page.js';
import '../performance_page/speed_page.js';
import '../reset_page/reset_profile_banner.js';
import '../search_page/search_page.js';
import '../settings_page/settings_section.js';
import '../settings_page_styles.css.js';
// 
// 
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { beforeNextRender, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from '../i18n_setup.js';
import { PerformanceBrowserProxyImpl } from '../performance_page/performance_browser_proxy.js';
import { PrivacyGuideAvailabilityMixin } from '../privacy_page/privacy_guide/privacy_guide_availability_mixin.js';
import { MAX_PRIVACY_GUIDE_PROMO_IMPRESSION, PrivacyGuideBrowserProxyImpl } from '../privacy_page/privacy_guide/privacy_guide_browser_proxy.js';
import { routes } from '../route.js';
import { RouteObserverMixin, Router } from '../router.js';
import { getSearchManager } from '../search_settings.js';
import { MainPageMixin } from '../settings_page/main_page_mixin.js';
import { getTemplate } from './basic_page.html.js';
const SettingsBasicPageElementBase = PrefsMixin(MainPageMixin(RouteObserverMixin(PrivacyGuideAvailabilityMixin(WebUiListenerMixin(I18nMixin(PolymerElement))))));
export class SettingsBasicPageElement extends SettingsBasicPageElementBase {
    constructor() {
        super(...arguments);
        this.privacyGuideBrowserProxy_ = PrivacyGuideBrowserProxyImpl.getInstance();
        this.performanceBrowserProxy_ = PerformanceBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-basic-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /** Preferences state. */
            prefs: {
                type: Object,
                notify: true,
            },
            // 
            /**
             * Dictionary defining page visibility.
             */
            pageVisibility: {
                type: Object,
                value() {
                    return {};
                },
            },
            /**
             * Whether a search operation is in progress or previous search
             * results are being displayed.
             */
            inSearchMode: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            advancedToggleExpanded: {
                type: Boolean,
                value: false,
                notify: true,
                observer: 'advancedToggleExpandedChanged_',
            },
            /**
             * True if a section is fully expanded to hide other sections beneath it.
             * False otherwise (even while animating a section open/closed).
             */
            hasExpandedSection_: {
                type: Boolean,
                value: false,
            },
            /**
             * True if the basic page should currently display the reset profile
             * banner.
             */
            showResetProfileBanner_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('showResetProfileBanner');
                },
            },
            /**
             * True if the basic page should currently display the privacy guide
             * promo.
             */
            showPrivacyGuidePromo_: {
                type: Boolean,
                value: false,
            },
            currentRoute_: Object,
            /**
             * Used to avoid handling a new toggle while currently toggling.
             */
            advancedTogglingInProgress_: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            /**
             * Used to hide battery settings section if the device has no battery
             */
            showBatterySettings_: {
                type: Boolean,
                value: false,
            },
            /**
             * If the preloading section is under performance settings, this
             * determines if the V2 UI with a toggle button is displayed.
             */
            showSpeedPageV2_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isPerformanceSettingsPreloadingSubpageV2Enabled');
                },
            },
        };
    }
    static get observers() {
        return [
            'updatePrivacyGuidePromoVisibility_(isPrivacyGuideAvailable, prefs.privacy_guide.viewed.value)',
        ];
    }
    ready() {
        super.ready();
        this.setAttribute('role', 'main');
        this.addEventListener('subpage-expand', this.onSubpageExpanded_);
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('device-has-battery-changed', this.onDeviceHasBatteryChanged_.bind(this));
        this.performanceBrowserProxy_.getDeviceHasBattery().then(this.onDeviceHasBatteryChanged_.bind(this));
        this.currentRoute_ = Router.getInstance().getCurrentRoute();
    }
    currentRouteChanged(newRoute, oldRoute) {
        this.currentRoute_ = newRoute;
        if (routes.ADVANCED && routes.ADVANCED.contains(newRoute)) {
            this.advancedToggleExpanded = true;
        }
        if (oldRoute && oldRoute.isSubpage()) {
            // If the new route isn't the same expanded section, reset
            // hasExpandedSection_ for the next transition.
            if (!newRoute.isSubpage() || newRoute.section !== oldRoute.section) {
                this.hasExpandedSection_ = false;
            }
        }
        else {
            assert(!this.hasExpandedSection_);
        }
        super.currentRouteChanged(newRoute, oldRoute);
        if (newRoute === routes.PRIVACY) {
            this.updatePrivacyGuidePromoVisibility_();
        }
    }
    /** Overrides MainPageMixin method. */
    containsRoute(route) {
        return !route || routes.BASIC.contains(route) ||
            (routes.ADVANCED && routes.ADVANCED.contains(route));
    }
    showPage_(visibility) {
        return visibility !== false;
    }
    getIdleLoad_() {
        return this.shadowRoot.querySelector('#advancedPageTemplate')
            .get();
    }
    updatePrivacyGuidePromoVisibility_() {
        if (!this.isPrivacyGuideAvailable ||
            this.pageVisibility.privacy === false || this.prefs === undefined ||
            this.getPref('privacy_guide.viewed').value ||
            this.privacyGuideBrowserProxy_.getPromoImpressionCount() >=
                MAX_PRIVACY_GUIDE_PROMO_IMPRESSION ||
            this.currentRoute_ !== routes.PRIVACY) {
            this.showPrivacyGuidePromo_ = false;
            return;
        }
        this.showPrivacyGuidePromo_ = true;
        if (!this.privacyGuidePromoWasShown_) {
            this.privacyGuideBrowserProxy_.incrementPromoImpressionCount();
            this.privacyGuidePromoWasShown_ = true;
        }
    }
    onDeviceHasBatteryChanged_(deviceHasBattery) {
        this.showBatterySettings_ = deviceHasBattery;
    }
    /**
     * Queues a task to search the basic sections, then another for the advanced
     * sections.
     * @param query The text to search for.
     * @return A signal indicating that searching finished.
     */
    searchContents(query) {
        const whenSearchDone = [
            getSearchManager().search(query, this.shadowRoot.querySelector('#basicPage')),
        ];
        if (this.pageVisibility.advancedSettings !== false) {
            whenSearchDone.push(this.getIdleLoad_().then(function (advancedPage) {
                return getSearchManager().search(query, advancedPage);
            }));
        }
        return Promise.all(whenSearchDone).then(function (requests) {
            // Combine the SearchRequests results to a single SearchResult object.
            return {
                canceled: requests.some(function (r) {
                    return r.canceled;
                }),
                didFindMatches: requests.some(function (r) {
                    return r.didFindMatches();
                }),
                // All requests correspond to the same user query, so only need to check
                // one of them.
                wasClearSearch: requests[0].isSame(''),
            };
        });
    }
    // 
    onOpenChromeOsLanguagesSettingsClick_() {
        const chromeOSLanguagesSettingsPath = loadTimeData.getString('chromeOSLanguagesSettingsPath');
        window.location.href =
            `chrome://os-settings/${chromeOSLanguagesSettingsPath}`;
    }
    // 
    onResetProfileBannerClosed_() {
        this.showResetProfileBanner_ = false;
    }
    /**
     * Hides everything but the newly expanded subpage.
     */
    onSubpageExpanded_() {
        this.hasExpandedSection_ = true;
    }
    /**
     * Render the advanced page now (don't wait for idle).
     */
    advancedToggleExpandedChanged_() {
        if (!this.advancedToggleExpanded) {
            return;
        }
        // In Polymer2, async() does not wait long enough for layout to complete.
        // beforeNextRender() must be used instead.
        beforeNextRender(this, () => {
            this.getIdleLoad_();
        });
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    /**
     * @return Whether to show the basic page, taking into account both routing
     *     and search state.
     */
    showBasicPage_(currentRoute, _inSearchMode, hasExpandedSection) {
        return !hasExpandedSection || routes.BASIC.contains(currentRoute);
    }
    /**
     * @return Whether to show the advanced page, taking into account both routing
     *     and search state.
     */
    showAdvancedPage_(currentRoute, inSearchMode, hasExpandedSection, advancedToggleExpanded) {
        return hasExpandedSection ?
            (routes.ADVANCED && routes.ADVANCED.contains(currentRoute)) :
            advancedToggleExpanded || inSearchMode;
    }
    showAdvancedSettings_(visibility) {
        return visibility !== false;
    }
    showPerformancePage_(visibility) {
        return visibility !== false;
    }
    showBatteryPage_(visibility) {
        return visibility !== false;
    }
    showSpeedPage_(visibility) {
        return loadTimeData.getBoolean('isPerformanceSettingsPreloadingSubpageEnabled') &&
            this.showPage_(visibility);
    }
    showSafetyCheckPage_(visibility) {
        return !loadTimeData.getBoolean('enableSafetyHub') &&
            this.showPage_(visibility);
    }
    showSafetyHubEntryPointPage_(visibility) {
        return loadTimeData.getBoolean('enableSafetyHub') &&
            this.showPage_(visibility);
    }
    // 
    getPerformancePageTitle_() {
        return loadTimeData.getBoolean('isPerformanceSettingsPreloadingSubpageEnabled') ?
            this.i18n('memoryPageTitle') :
            this.i18n('performancePageTitle');
    }
}
customElements.define(SettingsBasicPageElement.is, SettingsBasicPageElement);
