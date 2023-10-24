// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/navigation_view_panel.js';
import 'chrome://resources/ash/common/page_toolbar.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import './diagnostics_sticky_banner.js';
import './diagnostics_shared.css.js';
import './input_list.js';
import './network_list.js';
import './strings.m.js';
import './system_page.js';
import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import { ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './diagnostics_app.html.js';
import { DiagnosticsBrowserProxyImpl } from './diagnostics_browser_proxy.js';
import { getDiagnosticsIcon, getNavigationIcon } from './diagnostics_utils.js';
import { ConnectedDevicesObserverReceiver } from './input_data_provider.mojom-webui.js';
import { getInputDataProvider } from './mojo_interface_provider.js';
/**
 * @fileoverview
 * 'diagnostics-app' is responsible for displaying the 'system-page' which is
 * the main page for viewing telemetric system information and running
 * diagnostic tests.
 */
const DiagnosticsAppElementBase = I18nMixin(PolymerElement);
export class DiagnosticsAppElement extends DiagnosticsAppElementBase {
    static get is() {
        return 'diagnostics-app';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Used in navigation-view-panel to set show-banner when banner is
             * expected to be shown.
             */
            bannerMessage: {
                type: Boolean,
                value: '',
            },
            saveSessionLogEnabled: {
                type: Boolean,
                value: true,
            },
            /**
             * Whether a user is logged in or not.
             * Note: A guest session is considered a logged-in state.
             */
            isLoggedIn: {
                type: Boolean,
                value: loadTimeData.getBoolean('isLoggedIn'),
            },
            toastText: {
                type: String,
                value: '',
            },
        };
    }
    constructor() {
        super();
        this.browserProxy = DiagnosticsBrowserProxyImpl.getInstance();
        this.inputDataProvider = getInputDataProvider();
        this.numKeyboards = 0;
        /**
         * Event callback for 'show-toast' which is triggered from input-list. Event
         * will contain message to display on message property of event found on
         * event found on path `e.detail.message`.
         */
        this.showToastHandler = (e) => {
            assert(e.detail.message);
            this.toastText = e.detail.message;
            this.$.toast.show();
        };
        this.browserProxy.initialize();
        this.inputDataProvider.observeConnectedDevices(new ConnectedDevicesObserverReceiver(this)
            .$.bindNewPipeAndPassRemote());
    }
    /**
     * Implements ConnectedDevicesObserver.OnKeyboardConnected.
     */
    onKeyboardConnected() {
        this.numKeyboards++;
        // Note: This will need to be revisited if additional navigation pages are
        // created as the navigation panel may have to be updated to ensure pages
        // appear in the correct order.
        if (!this.$.navigationPanel.pageExists('input')) {
            this.$.navigationPanel.addSelectorItem(this.createInputSelector());
        }
    }
    /**
     * Implements ConnectedDevicesObserver.OnKeyboardDisconnected.
     */
    onKeyboardDisconnected() {
        this.numKeyboards--;
        if (this.numKeyboards === 0) {
            this.$.navigationPanel.removeSelectorById('input');
        }
    }
    /**
     * Implements ConnectedDevicesObserver.OnTouchDeviceConnected.
     */
    onTouchDeviceConnected() { }
    /**
     * Implements ConnectedDevicesObserver.OnTouchDeviceDisconnected.
     */
    onTouchDeviceDisconnected() { }
    // Note: When adding a new page, update the DiagnosticsPage enum located
    // in chrome/browser/ui/webui/ash/diagnostics_dialog.h.
    async getNavPages() {
        const pages = [
            this.$.navigationPanel.createSelectorItem(loadTimeData.getString('systemText'), 'system-page', getNavigationIcon('laptop-chromebook'), 'system'),
            this.$.navigationPanel.createSelectorItem(loadTimeData.getString('connectivityText'), 'network-list', getNavigationIcon('ethernet'), 'connectivity'),
        ];
        pages.push(this.createInputSelector());
        const devices = await this.inputDataProvider.getConnectedDevices();
        // Check the existing value of |numKeyboards| if |GetConnectedDevices|
        // returns no keyboards as it's possible |onKeyboardConnected| was called
        // prior.
        this.numKeyboards = devices.keyboards.length || this.numKeyboards;
        const isTouchPadOrTouchScreenEnabled = loadTimeData.getBoolean('isTouchpadEnabled') ||
            loadTimeData.getBoolean('isTouchscreenEnabled');
        if (this.numKeyboards === 0 && !isTouchPadOrTouchScreenEnabled) {
            pages.pop();
        }
        return pages;
    }
    async createNavigationPanel() {
        this.$.navigationPanel.addSelectors(await this.getNavPages());
    }
    connectedCallback() {
        super.connectedCallback();
        if (loadTimeData.getBoolean('isJellyEnabledForDiagnosticsApp')) {
            // TODO(b/276493287): After the Jelly experiment is launched, replace
            // `cros_styles.css` with `theme/colors.css` directly in `index.html`.
            // Also add `theme/typography.css` to `index.html`.
            document.querySelector('link[href*=\'cros_styles.css\']')
                ?.setAttribute('href', 'chrome://theme/colors.css?sets=legacy,sys');
            const typographyLink = document.createElement('link');
            typographyLink.href = 'chrome://theme/typography.css';
            typographyLink.rel = 'stylesheet';
            document.head.appendChild(typographyLink);
            document.body.classList.add('jelly-enabled');
            ColorChangeUpdater.forDocument().start();
        }
        this.createNavigationPanel();
        window.addEventListener('show-toast', (e) => this.showToastHandler(e));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('show-toast', (e) => this.showToastHandler(e));
    }
    onSessionLogClick() {
        // Click already handled then leave early.
        if (!this.saveSessionLogEnabled) {
            return;
        }
        this.saveSessionLogEnabled = false;
        this.browserProxy.saveSessionLog()
            .then((success) => {
            const result = success ? 'Success' : 'Failure';
            this.toastText =
                loadTimeData.getString(`sessionLogToastText${result}`);
            this.$.toast.show();
        })
            .catch(() => { })
            .finally(() => {
            this.saveSessionLogEnabled = true;
        });
    }
    // Note: addSelectorItem or addSelectors still needs to be called to add
    // the input page to the navigation panel.
    createInputSelector() {
        return this.$.navigationPanel.createSelectorItem(loadTimeData.getString('keyboardText'), 'input-list', getDiagnosticsIcon('keyboard'), 'input');
    }
}
customElements.define(DiagnosticsAppElement.is, DiagnosticsAppElement);
