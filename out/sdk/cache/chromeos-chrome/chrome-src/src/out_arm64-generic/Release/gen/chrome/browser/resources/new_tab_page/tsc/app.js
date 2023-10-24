// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './iframe.js';
import './realbox/realbox.js';
import './logo.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import { ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { HelpBubbleMixin } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin.js';
import { Command } from 'chrome://resources/js/browser_command.mojom-webui.js';
import { BrowserCommandProxy } from 'chrome://resources/js/browser_command/browser_command_proxy.js';
import { hexColorToSkColor, skColorToRgba } from 'chrome://resources/js/color_utils.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { FocusOutlineManager } from 'chrome://resources/js/focus_outline_manager.js';
import { getTrustedScriptURL } from 'chrome://resources/js/static_types.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './app.html.js';
import { BackgroundManager } from './background_manager.js';
import { CustomizeDialogPage } from './customize_dialog_types.js';
import { loadTimeData } from './i18n_setup.js';
import { recordDuration, recordLoadDuration } from './metrics_utils.js';
import { CustomizeChromeSection, NtpBackgroundImageSource } from './new_tab_page.mojom-webui.js';
import { NewTabPageProxy } from './new_tab_page_proxy.js';
import { $$ } from './utils.js';
import { Action as VoiceAction, recordVoiceAction } from './voice_search_overlay.js';
import { WindowProxy } from './window_proxy.js';
/**
 * Elements on the NTP. This enum must match the numbering for NTPElement in
 * enums.xml. These values are persisted to logs. Entries should not be
 * renumbered, removed or reused.
 */
export var NtpElement;
(function (NtpElement) {
    NtpElement[NtpElement["OTHER"] = 0] = "OTHER";
    NtpElement[NtpElement["BACKGROUND"] = 1] = "BACKGROUND";
    NtpElement[NtpElement["ONE_GOOGLE_BAR"] = 2] = "ONE_GOOGLE_BAR";
    NtpElement[NtpElement["LOGO"] = 3] = "LOGO";
    NtpElement[NtpElement["REALBOX"] = 4] = "REALBOX";
    NtpElement[NtpElement["MOST_VISITED"] = 5] = "MOST_VISITED";
    NtpElement[NtpElement["MIDDLE_SLOT_PROMO"] = 6] = "MIDDLE_SLOT_PROMO";
    NtpElement[NtpElement["MODULE"] = 7] = "MODULE";
    NtpElement[NtpElement["CUSTOMIZE"] = 8] = "CUSTOMIZE";
    NtpElement[NtpElement["CUSTOMIZE_BUTTON"] = 9] = "CUSTOMIZE_BUTTON";
    NtpElement[NtpElement["CUSTOMIZE_DIALOG"] = 10] = "CUSTOMIZE_DIALOG";
})(NtpElement || (NtpElement = {}));
/**
 * Customize Chrome entry points. This enum must match the numbering for
 * NtpCustomizeChromeEntryPoint in enums.xml. These values are persisted to
 * logs. Entries should not be renumbered, removed or reused.
 */
export var NtpCustomizeChromeEntryPoint;
(function (NtpCustomizeChromeEntryPoint) {
    NtpCustomizeChromeEntryPoint[NtpCustomizeChromeEntryPoint["CUSTOMIZE_BUTTON"] = 0] = "CUSTOMIZE_BUTTON";
    NtpCustomizeChromeEntryPoint[NtpCustomizeChromeEntryPoint["MODULE"] = 1] = "MODULE";
    NtpCustomizeChromeEntryPoint[NtpCustomizeChromeEntryPoint["URL"] = 2] = "URL";
})(NtpCustomizeChromeEntryPoint || (NtpCustomizeChromeEntryPoint = {}));
const CUSTOMIZE_URL_PARAM = 'customize';
const OGB_IFRAME_ORIGIN = 'chrome-untrusted://new-tab-page';
export const CUSTOMIZE_CHROME_BUTTON_ELEMENT_ID = 'NewTabPageUI::kCustomizeChromeButtonElementId';
function recordClick(element) {
    chrome.metricsPrivate.recordEnumerationValue('NewTabPage.Click', element, Object.keys(NtpElement).length);
}
function recordCustomizeChromeOpen(element) {
    chrome.metricsPrivate.recordEnumerationValue('NewTabPage.CustomizeChromeOpened', element, Object.keys(NtpCustomizeChromeEntryPoint).length);
}
// Adds a <script> tag that holds the lazy loaded code.
function ensureLazyLoaded() {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = getTrustedScriptURL `./lazy_load.js`;
    document.body.appendChild(script);
}
const AppElementBase = HelpBubbleMixin(PolymerElement);
export class AppElement extends AppElementBase {
    static get is() {
        return 'ntp-app';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            oneGoogleBarIframeOrigin_: {
                type: String,
                value: OGB_IFRAME_ORIGIN,
            },
            oneGoogleBarIframePath_: {
                type: String,
                value: () => {
                    const params = new URLSearchParams();
                    params.set('paramsencoded', btoa(window.location.search.replace(/^[?]/, '&')));
                    return `${OGB_IFRAME_ORIGIN}/one-google-bar?${params}`;
                },
            },
            theme_: {
                observer: 'onThemeChange_',
                type: Object,
            },
            showCustomize_: {
                type: Boolean,
                value: () => WindowProxy.getInstance().url.searchParams.has(CUSTOMIZE_URL_PARAM),
            },
            showCustomizeDialog_: {
                type: Boolean,
                computed: 'computeShowCustomizeDialog_(customizeChromeEnabled_, showCustomize_)',
            },
            selectedCustomizeDialogPage_: {
                type: String,
                value: () => WindowProxy.getInstance().url.searchParams.get(CUSTOMIZE_URL_PARAM),
            },
            showVoiceSearchOverlay_: Boolean,
            showBackgroundImage_: {
                computed: 'computeShowBackgroundImage_(theme_)',
                observer: 'onShowBackgroundImageChange_',
                reflectToAttribute: true,
                type: Boolean,
            },
            backgroundImageAttribution1_: {
                type: String,
                computed: `computeBackgroundImageAttribution1_(theme_)`,
            },
            backgroundImageAttribution2_: {
                type: String,
                computed: `computeBackgroundImageAttribution2_(theme_)`,
            },
            backgroundImageAttributionUrl_: {
                type: String,
                computed: `computeBackgroundImageAttributionUrl_(theme_)`,
            },
            backgroundColor_: {
                computed: 'computeBackgroundColor_(showBackgroundImage_, theme_)',
                type: Object,
            },
            customizeChromeEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('customizeChromeEnabled'),
            },
            logoColor_: {
                type: String,
                computed: 'computeLogoColor_(theme_)',
            },
            singleColoredLogo_: {
                computed: 'computeSingleColoredLogo_(theme_)',
                type: Boolean,
            },
            realboxLensSearchEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('realboxLensSearch'),
            },
            realboxShown_: {
                type: Boolean,
                computed: 'computeRealboxShown_(theme_, showLensUploadDialog_)',
            },
            logoEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('logoEnabled'),
            },
            oneGoogleBarEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('oneGoogleBarEnabled'),
            },
            shortcutsEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('shortcutsEnabled'),
            },
            singleRowShortcutsEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('singleRowShortcutsEnabled'),
            },
            modulesFreShown: {
                type: Boolean,
                reflectToAttribute: true,
            },
            middleSlotPromoEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('middleSlotPromoEnabled'),
            },
            modulesEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('modulesEnabled'),
            },
            modulesRedesignedEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('modulesRedesignedEnabled'),
                reflectToAttribute: true,
            },
            mostVisitedReflowOnOverflowEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('mostVisitedReflowOnOverflowEnabled'),
                reflectToAttribute: true,
            },
            wideModulesEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('wideModulesEnabled'),
                reflectToAttribute: true,
            },
            middleSlotPromoLoaded_: {
                type: Boolean,
                value: false,
            },
            modulesLoaded_: {
                type: Boolean,
                value: false,
            },
            modulesShownToUser: {
                type: Boolean,
                reflectToAttribute: true,
            },
            /**
             * In order to avoid flicker, the promo and modules are hidden until both
             * are loaded. If modules are disabled, the promo is shown as soon as it
             * is loaded.
             */
            promoAndModulesLoaded_: {
                type: Boolean,
                computed: `computePromoAndModulesLoaded_(middleSlotPromoLoaded_,
            modulesLoaded_)`,
                observer: 'onPromoAndModulesLoadedChange_',
            },
            showLensUploadDialog_: Boolean,
            /**
             * If true, renders additional elements that were not deemed crucial to
             * to show up immediately on load.
             */
            lazyRender_: Boolean,
            scrolledToTop_: {
                type: Boolean,
                value: document.documentElement.scrollTop <= 0,
            },
        };
    }
    static get observers() {
        return [
            'updateOneGoogleBarAppearance_(oneGoogleBarLoaded_, theme_)',
        ];
    }
    constructor() {
        performance.mark('app-creation-start');
        super();
        this.showLensUploadDialog_ = false;
        this.setThemeListenerId_ = null;
        this.setCustomizeChromeSidePanelVisibilityListener_ = null;
        this.eventTracker_ = new EventTracker();
        this.backgroundImageLoadStart_ = 0;
        this.showWebstoreToastListenerId_ = null;
        this.callbackRouter_ = NewTabPageProxy.getInstance().callbackRouter;
        this.pageHandler_ = NewTabPageProxy.getInstance().handler;
        this.backgroundManager_ = BackgroundManager.getInstance();
        this.shouldPrintPerformance_ =
            new URLSearchParams(location.search).has('print_perf');
        /**
         * Initialized with the start of the performance timeline in case the
         * background image load is not triggered by JS.
         */
        this.backgroundImageLoadStartEpoch_ = performance.timeOrigin;
        chrome.metricsPrivate.recordValue({
            metricName: 'NewTabPage.Height',
            type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
            min: 1,
            max: 1000,
            buckets: 200,
        }, Math.floor(window.innerHeight));
        chrome.metricsPrivate.recordValue({
            metricName: 'NewTabPage.Width',
            type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
            min: 1,
            max: 1920,
            buckets: 384,
        }, Math.floor(window.innerWidth));
        ColorChangeUpdater.forDocument().start();
    }
    connectedCallback() {
        super.connectedCallback();
        this.setThemeListenerId_ =
            this.callbackRouter_.setTheme.addListener((theme) => {
                if (!this.theme_) {
                    this.onThemeLoaded_(theme);
                }
                performance.measure('theme-set');
                this.theme_ = theme;
            });
        this.setCustomizeChromeSidePanelVisibilityListener_ =
            this.callbackRouter_.setCustomizeChromeSidePanelVisibility.addListener((visible) => {
                this.showCustomize_ = visible;
            });
        this.showWebstoreToastListenerId_ =
            NewTabPageProxy.getInstance()
                .callbackRouter.showWebstoreToast.addListener(() => {
                if (this.showCustomize_) {
                    const toast = $$(this, '#webstoreToast');
                    if (toast) {
                        toast.hidden = false;
                        toast.show();
                    }
                }
            });
        // Open Customize Chrome if there are Customize Chrome URL params.
        if (this.showCustomize_) {
            this.setCustomizeChromeSidePanelVisible_(this.showCustomize_);
            recordCustomizeChromeOpen(NtpCustomizeChromeEntryPoint.URL);
        }
        this.eventTracker_.add(window, 'message', (event) => {
            const data = event.data;
            // Something in OneGoogleBar is sending a message that is received here.
            // Need to ignore it.
            if (typeof data !== 'object') {
                return;
            }
            if ('frameType' in data && data.frameType === 'one-google-bar') {
                this.handleOneGoogleBarMessage_(event);
            }
        });
        this.eventTracker_.add(window, 'keydown', this.onWindowKeydown_.bind(this));
        this.eventTracker_.add(window, 'click', this.onWindowClick_.bind(this), /*capture=*/ true);
        this.eventTracker_.add(document, 'scroll', () => {
            this.scrolledToTop_ = document.documentElement.scrollTop <= 0;
        });
        if (loadTimeData.getString('backgroundImageUrl')) {
            this.backgroundManager_.getBackgroundImageLoadTime().then(time => {
                const duration = time - this.backgroundImageLoadStartEpoch_;
                recordDuration('NewTabPage.Images.ShownTime.BackgroundImage', duration);
                if (this.shouldPrintPerformance_) {
                    this.printPerformanceDatum_('background-image-load', this.backgroundImageLoadStart_, duration);
                    this.printPerformanceDatum_('background-image-loaded', this.backgroundImageLoadStart_ + duration);
                }
            }, () => {
                // Ignore. Failed to capture background image load time.
            });
        }
        FocusOutlineManager.forDocument(document);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.callbackRouter_.removeListener(this.setThemeListenerId_);
        this.callbackRouter_.removeListener(this.setCustomizeChromeSidePanelVisibilityListener_);
        this.eventTracker_.removeAll();
    }
    ready() {
        super.ready();
        this.pageHandler_.onAppRendered(WindowProxy.getInstance().now());
        // Let the browser breathe and then render remaining elements.
        WindowProxy.getInstance().waitForLazyRender().then(() => {
            ensureLazyLoaded();
            this.lazyRender_ = true;
        });
        this.printPerformance_();
        performance.measure('app-creation', 'app-creation-start');
    }
    // Called to update the OGB of relevant NTP state changes.
    updateOneGoogleBarAppearance_() {
        if (this.oneGoogleBarLoaded_) {
            const isNtpDarkTheme = this.theme_ && (!!this.theme_.backgroundImage || this.theme_.isDark);
            $$(this, '#oneGoogleBar').postMessage({
                type: 'updateAppearance',
                // We should be using a light OGB for dark themes and vice versa.
                applyLightTheme: isNtpDarkTheme,
            });
        }
    }
    computeShowCustomizeDialog_() {
        return !this.customizeChromeEnabled_ && this.showCustomize_;
    }
    computeBackgroundImageAttribution1_() {
        return this.theme_ && this.theme_.backgroundImageAttribution1 || '';
    }
    computeBackgroundImageAttribution2_() {
        return this.theme_ && this.theme_.backgroundImageAttribution2 || '';
    }
    computeBackgroundImageAttributionUrl_() {
        return this.theme_ && this.theme_.backgroundImageAttributionUrl ?
            this.theme_.backgroundImageAttributionUrl.url :
            '';
    }
    computeRealboxShown_(theme, showLensUploadDialog) {
        // Do not show the realbox if the upload dialog is showing.
        return theme && !showLensUploadDialog;
    }
    computePromoAndModulesLoaded_() {
        return (!loadTimeData.getBoolean('middleSlotPromoEnabled') ||
            this.middleSlotPromoLoaded_) &&
            (!loadTimeData.getBoolean('modulesEnabled') || this.modulesLoaded_);
    }
    async onLazyRendered_() {
        // Integration tests use this attribute to determine when lazy load has
        // completed.
        document.documentElement.setAttribute('lazy-loaded', String(true));
        this.registerHelpBubble(CUSTOMIZE_CHROME_BUTTON_ELEMENT_ID, '#customizeButton', { fixed: true });
        this.pageHandler_.maybeShowCustomizeChromeFeaturePromo();
    }
    onOpenVoiceSearch_() {
        this.showVoiceSearchOverlay_ = true;
        recordVoiceAction(VoiceAction.ACTIVATE_SEARCH_BOX);
    }
    onOpenLensSearch_() {
        this.showLensUploadDialog_ = true;
    }
    onCloseLensSearch_() {
        this.showLensUploadDialog_ = false;
    }
    onCustomizeClick_() {
        // Let customize dialog or side panel decide what page or section to show.
        this.selectedCustomizeDialogPage_ = null;
        if (this.customizeChromeEnabled_) {
            this.setCustomizeChromeSidePanelVisible_(!this.showCustomize_);
            if (!this.showCustomize_) {
                this.pageHandler_.incrementCustomizeChromeButtonOpenCount();
                recordCustomizeChromeOpen(NtpCustomizeChromeEntryPoint.CUSTOMIZE_BUTTON);
            }
        }
        else {
            this.showCustomize_ = true;
            recordCustomizeChromeOpen(NtpCustomizeChromeEntryPoint.CUSTOMIZE_BUTTON);
        }
    }
    onCustomizeDialogClose_() {
        this.showCustomize_ = false;
        // Let customize dialog decide what page to show on next open.
        this.selectedCustomizeDialogPage_ = null;
    }
    onVoiceSearchOverlayClose_() {
        this.showVoiceSearchOverlay_ = false;
    }
    /**
     * Handles <CTRL> + <SHIFT> + <.> (also <CMD> + <SHIFT> + <.> on mac) to open
     * voice search.
     */
    onWindowKeydown_(e) {
        let ctrlKeyPressed = e.ctrlKey;
        // 
        if (ctrlKeyPressed && e.code === 'Period' && e.shiftKey) {
            this.showVoiceSearchOverlay_ = true;
            recordVoiceAction(VoiceAction.ACTIVATE_KEYBOARD);
        }
    }
    rgbaOrInherit_(skColor) {
        return skColor ? skColorToRgba(skColor) : 'inherit';
    }
    computeShowBackgroundImage_() {
        return !!this.theme_ && !!this.theme_.backgroundImage;
    }
    onShowBackgroundImageChange_() {
        this.backgroundManager_.setShowBackgroundImage(this.showBackgroundImage_);
    }
    onThemeChange_() {
        if (this.theme_) {
            this.backgroundManager_.setBackgroundColor(this.theme_.backgroundColor);
        }
        this.updateBackgroundImagePath_();
    }
    onThemeLoaded_(theme) {
        chrome.metricsPrivate.recordEnumerationValue('NewTabPage.BackgroundImageSource', (theme.backgroundImage ? theme.backgroundImage.imageSource :
            NtpBackgroundImageSource.kNoImage), NtpBackgroundImageSource.MAX_VALUE);
        chrome.metricsPrivate.recordSparseValueWithPersistentHash('NewTabPage.Collections.IdOnLoad', theme.backgroundImageCollectionId ?? '');
    }
    onPromoAndModulesLoadedChange_() {
        if (this.promoAndModulesLoaded_ &&
            loadTimeData.getBoolean('modulesEnabled')) {
            recordLoadDuration('NewTabPage.Modules.ShownTime', WindowProxy.getInstance().now());
        }
    }
    /**
     * Set the #backgroundImage |path| only when different and non-empty. Reset
     * the customize dialog background selection if the dialog is closed.
     *
     * The ntp-untrusted-iframe |path| is set directly. When using a data binding
     * instead, the quick updates to the |path| result in iframe loading an error
     * page.
     */
    updateBackgroundImagePath_() {
        const backgroundImage = this.theme_ && this.theme_.backgroundImage;
        if (backgroundImage) {
            this.backgroundManager_.setBackgroundImage(backgroundImage);
        }
    }
    computeBackgroundColor_() {
        if (this.showBackgroundImage_) {
            return null;
        }
        return this.theme_ && this.theme_.backgroundColor;
    }
    computeLogoColor_() {
        return this.theme_ &&
            (this.theme_.logoColor ||
                (this.theme_.isDark ? hexColorToSkColor('#ffffff') : null));
    }
    computeSingleColoredLogo_() {
        return this.theme_ && (!!this.theme_.logoColor || this.theme_.isDark);
    }
    /**
     * Sends the command received from the given source and origin to the browser.
     * Relays the browser response to whether or not a promo containing the given
     * command can be shown back to the source promo frame. |commandSource| and
     * |commandOrigin| are used only to send the response back to the source promo
     * frame and should not be used for anything else.
     * @param  messageData Data received from the source promo frame.
     * @param commandSource Source promo frame.
     * @param commandOrigin Origin of the source promo frame.
     */
    canShowPromoWithBrowserCommand_(messageData, commandSource, commandOrigin) {
        // Make sure we don't send unsupported commands to the browser.
        /** @type {!Command} */
        const commandId = Object.values(Command).includes(messageData.commandId) ?
            messageData.commandId :
            Command.kUnknownCommand;
        BrowserCommandProxy.getInstance().handler.canExecuteCommand(commandId).then(({ canExecute }) => {
            const response = {
                messageType: messageData.messageType,
                [messageData.commandId]: canExecute,
            };
            commandSource.postMessage(response, commandOrigin);
        });
    }
    /**
     * Sends the command and the accompanying mouse click info received from the
     * promo of the given source and origin to the browser. Relays the execution
     * status response back to the source promo frame. |commandSource| and
     * |commandOrigin| are used only to send the execution status response back to
     * the source promo frame and should not be used for anything else.
     * @param commandData Command and mouse click info.
     * @param commandSource Source promo frame.
     * @param commandOrigin Origin of the source promo frame.
     */
    executePromoBrowserCommand_(commandData, commandSource, commandOrigin) {
        // Make sure we don't send unsupported commands to the browser.
        const commandId = Object.values(Command).includes(commandData.commandId) ?
            commandData.commandId :
            Command.kUnknownCommand;
        BrowserCommandProxy.getInstance()
            .handler.executeCommand(commandId, commandData.clickInfo)
            .then(({ commandExecuted }) => {
            commandSource.postMessage(commandExecuted, commandOrigin);
        });
    }
    /**
     * Handles messages from the OneGoogleBar iframe. The messages that are
     * handled include show bar on load and overlay updates.
     *
     * 'overlaysUpdated' message includes the updated array of overlay rects that
     * are shown.
     */
    handleOneGoogleBarMessage_(event) {
        const data = event.data;
        if (data.messageType === 'loaded') {
            const oneGoogleBar = $$(this, '#oneGoogleBar');
            oneGoogleBar.style.clipPath = 'url(#oneGoogleBarClipPath)';
            oneGoogleBar.style.zIndex = '1000';
            this.oneGoogleBarLoaded_ = true;
            this.pageHandler_.onOneGoogleBarRendered(WindowProxy.getInstance().now());
        }
        else if (data.messageType === 'overlaysUpdated') {
            this.$.oneGoogleBarClipPath.querySelectorAll('rect').forEach(el => {
                el.remove();
            });
            const overlayRects = data.data;
            overlayRects.forEach(({ x, y, width, height }) => {
                const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                // Add 8px around every rect to ensure shadows are not cutoff.
                rectElement.setAttribute('x', `${x - 8}`);
                rectElement.setAttribute('y', `${y - 8}`);
                rectElement.setAttribute('width', `${width + 16}`);
                rectElement.setAttribute('height', `${height + 16}`);
                this.$.oneGoogleBarClipPath.appendChild(rectElement);
            });
        }
        else if (data.messageType === 'can-show-promo-with-browser-command') {
            this.canShowPromoWithBrowserCommand_(data, event.source, event.origin);
        }
        else if (data.messageType === 'execute-browser-command') {
            this.executePromoBrowserCommand_(data.data, event.source, event.origin);
        }
        else if (data.messageType === 'click') {
            recordClick(NtpElement.ONE_GOOGLE_BAR);
        }
    }
    onMiddleSlotPromoLoaded_() {
        this.middleSlotPromoLoaded_ = true;
    }
    onModulesLoaded_() {
        this.modulesLoaded_ = true;
    }
    onCustomizeModule_() {
        this.showCustomize_ = true;
        this.selectedCustomizeDialogPage_ = CustomizeDialogPage.MODULES;
        recordCustomizeChromeOpen(NtpCustomizeChromeEntryPoint.MODULE);
        this.setCustomizeChromeSidePanelVisible_(this.showCustomize_);
    }
    setCustomizeChromeSidePanelVisible_(visible) {
        if (!this.customizeChromeEnabled_) {
            return;
        }
        let section = CustomizeChromeSection.kUnspecified;
        switch (this.selectedCustomizeDialogPage_) {
            case CustomizeDialogPage.BACKGROUNDS:
            case CustomizeDialogPage.THEMES:
                section = CustomizeChromeSection.kAppearance;
                break;
            case CustomizeDialogPage.SHORTCUTS:
                section = CustomizeChromeSection.kShortcuts;
                break;
            case CustomizeDialogPage.MODULES:
                section = CustomizeChromeSection.kModules;
                break;
        }
        this.pageHandler_.setCustomizeChromeSidePanelVisible(visible, section);
    }
    printPerformanceDatum_(name, time, auxTime = 0) {
        if (!this.shouldPrintPerformance_) {
            return;
        }
        console.info(!auxTime ? `${name}: ${time}` : `${name}: ${time} (${auxTime})`);
    }
    /**
     * Prints performance measurements to the console. Also, installs  performance
     * observer to continuously print performance measurements after.
     */
    printPerformance_() {
        if (!this.shouldPrintPerformance_) {
            return;
        }
        const entryTypes = ['paint', 'measure'];
        const log = (entry) => {
            this.printPerformanceDatum_(entry.name, entry.duration ? entry.duration : entry.startTime, entry.duration && entry.startTime ? entry.startTime : 0);
        };
        const observer = new PerformanceObserver(list => {
            list.getEntries().forEach((entry) => {
                log(entry);
            });
        });
        observer.observe({ entryTypes: entryTypes });
        performance.getEntries().forEach((entry) => {
            if (!entryTypes.includes(entry.entryType)) {
                return;
            }
            log(entry);
        });
    }
    onWebstoreToastButtonClick_() {
        window.location.assign(`https://chrome.google.com/webstore/category/collection/chrome_color_themes?hl=${window.navigator.language}`);
    }
    onWindowClick_(e) {
        if (e.composedPath() && e.composedPath()[0] === $$(this, '#content')) {
            recordClick(NtpElement.BACKGROUND);
            return;
        }
        for (const target of e.composedPath()) {
            switch (target) {
                case $$(this, 'ntp-logo'):
                    recordClick(NtpElement.LOGO);
                    return;
                case $$(this, 'ntp-realbox'):
                    recordClick(NtpElement.REALBOX);
                    return;
                case $$(this, 'cr-most-visited'):
                    recordClick(NtpElement.MOST_VISITED);
                    return;
                case $$(this, 'ntp-middle-slot-promo'):
                    recordClick(NtpElement.MIDDLE_SLOT_PROMO);
                    return;
                case $$(this, '#modules'):
                    recordClick(NtpElement.MODULE);
                    return;
                case $$(this, '#customizeButton'):
                    recordClick(NtpElement.CUSTOMIZE_BUTTON);
                    return;
                case $$(this, 'ntp-customize-dialog'):
                    recordClick(NtpElement.CUSTOMIZE_DIALOG);
                    return;
            }
        }
        recordClick(NtpElement.OTHER);
    }
}
customElements.define(AppElement.is, AppElement);
