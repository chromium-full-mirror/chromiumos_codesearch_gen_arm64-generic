// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-cups-printers' is a component for showing CUPS
 * Printer settings subpage (chrome://settings/cupsPrinters). It is used to
 * set up legacy & non-CloudPrint printers on ChromeOS by leveraging CUPS (the
 * unix printing system) and the many open source drivers built for CUPS.
 */
// TODO(xdai): Rename it to 'settings-cups-printers-page'.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import 'chrome://resources/cr_elements/policy/cr_policy_pref_indicator.js';
import 'chrome://resources/js/action_link.js';
import 'chrome://resources/cr_elements/action_link.css.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/cr_components/localized_link/localized_link.js';
import '../icons.html.js';
import './cups_edit_printer_dialog.js';
import './cups_enterprise_printers.js';
import './cups_printer_shared.css.js';
import './cups_printer_types.js';
import './cups_printers_browser_proxy.js';
import './cups_printers_entry.js';
import './cups_printers_entry_manager.js';
import './cups_saved_printers.js';
import './cups_settings_add_printer_dialog.js';
import { MojoInterfaceProviderImpl } from 'chrome://resources/ash/common/network/mojo_interface_provider.js';
import { NetworkListenerBehavior } from 'chrome://resources/ash/common/network/network_listener_behavior.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { addWebUiListener, removeWebUiListener } from 'chrome://resources/js/cr.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { FilterType, NO_LIMIT } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/cros_network_config.mojom-webui.js';
import { ConnectionStateType, NetworkType } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js';
import { afterNextRender, mixinBehaviors, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { isRevampWayfindingEnabled } from '../common/load_time_booleans.js';
import { RouteObserverMixin } from '../common/route_observer_mixin.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { routes } from '../router.js';
import { PrinterType } from './cups_printer_types.js';
import { getTemplate } from './cups_printers.html.js';
import { CupsPrintersBrowserProxyImpl, PrinterSetupResult } from './cups_printers_browser_proxy.js';
import { CupsPrintersEntryManager } from './cups_printers_entry_manager.js';
/**
 * Enumeration of the user actions that can be taken on the Printer settings
 * page.
 * This enum is tied directly to a UMA enum defined in
 * //tools/metrics/histograms/enums.xml, and should always reflect it (do not
 * change one without changing the other).
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 * @enum {number}
 */
export var PrinterSettingsUserAction;
(function (PrinterSettingsUserAction) {
    PrinterSettingsUserAction[PrinterSettingsUserAction["ADD_PRINTER_MANUALLY"] = 0] = "ADD_PRINTER_MANUALLY";
    PrinterSettingsUserAction[PrinterSettingsUserAction["SAVE_PRINTER"] = 1] = "SAVE_PRINTER";
    PrinterSettingsUserAction[PrinterSettingsUserAction["EDIT_PRINTER"] = 2] = "EDIT_PRINTER";
    PrinterSettingsUserAction[PrinterSettingsUserAction["REMOVE_PRINTER"] = 3] = "REMOVE_PRINTER";
    PrinterSettingsUserAction[PrinterSettingsUserAction["CLICK_HELP_LINK"] = 4] = "CLICK_HELP_LINK";
})(PrinterSettingsUserAction || (PrinterSettingsUserAction = {}));
export function recordPrinterSettingsUserAction(userAction) {
    chrome.metricsPrivate.recordEnumerationValue('Printing.CUPS.SettingsUserAction', userAction, Object.keys(PrinterSettingsUserAction).length);
}
const SettingsCupsPrintersElementBase = mixinBehaviors([
    NetworkListenerBehavior,
], DeepLinkingMixin(RouteObserverMixin(WebUiListenerMixin(PolymerElement))));
export class SettingsCupsPrintersElement extends SettingsCupsPrintersElementBase {
    static get is() {
        return 'settings-cups-printers';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            printers: {
                type: Array,
                notify: true,
            },
            prefs: Object,
            activePrinter: {
                type: Object,
                notify: true,
            },
            onPrintersChangedListener_: {
                type: Object,
                value: null,
            },
            onEnterprisePrintersChangedListener_: {
                type: Object,
                value: null,
            },
            searchTerm: {
                type: String,
            },
            /**
             * This is also used as an attribute for css styling.
             */
            hasActiveNetworkConnection: {
                type: Boolean,
                reflectToAttribute: true,
            },
            savedPrinters_: {
                type: Array,
                value: () => [],
            },
            enterprisePrinters_: {
                type: Array,
                value: () => [],
            },
            attemptedLoadingPrinters_: {
                type: Boolean,
                value: false,
            },
            showCupsEditPrinterDialog_: Boolean,
            addPrinterResultText_: String,
            nearbyPrintersAriaLabel_: {
                type: String,
                computed: 'getNearbyPrintersAriaLabel_(nearbyPrinterCount_)',
            },
            savedPrintersAriaLabel_: {
                type: String,
                computed: 'getSavedPrintersAriaLabel_(savedPrinterCount_)',
            },
            enterprisePrintersAriaLabel_: {
                type: String,
                computed: 'getEnterprisePrintersAriaLabel_(enterprisePrinterCount_)',
            },
            nearbyPrinterCount_: {
                type: Number,
                value: 0,
            },
            savedPrinterCount_: {
                type: Number,
                value: 0,
            },
            enterprisePrinterCount_: {
                type: Number,
                value: 0,
            },
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([
                    Setting.kAddPrinter,
                    Setting.kSavedPrinters,
                    Setting.kPrintJobs,
                ]),
            },
            /**
             * Indicates whether the nearby printers section is expanded.
             * @private {boolean}
             */
            nearbyPrintersExpanded_: {
                type: Boolean,
                value: true,
            },
            /**
             * Indicates whether the nearby printers section is empty.
             * @private {boolean}
             */
            nearbyPrintersEmpty_: {
                type: Boolean,
                computed: 'computeNearbyPrintersEmpty_(nearbyPrinterCount_)',
                reflectToAttribute: true,
            },
            /**
             * True when the "printer-settings-revamp" feature flag is enabled.
             */
            isPrinterSettingsRevampEnabled_: {
                type: Boolean,
                value: () => {
                    return loadTimeData.getBoolean('isPrinterSettingsRevampEnabled');
                },
                readOnly: true,
                reflectToAttribute: true,
            },
            isRevampWayfindingEnabled_: {
                type: Boolean,
                value: () => {
                    return isRevampWayfindingEnabled();
                },
            },
        };
    }
    constructor() {
        super();
        this.networkConfig_ =
            MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();
        this.entryManager_ = CupsPrintersEntryManager.getInstance();
        this.addPrintServerResultText_ = '';
        this.browserProxy_ = CupsPrintersBrowserProxyImpl.getInstance();
        if (this.isPrinterSettingsRevampEnabled_) {
            // This request is made in the constructor to fetch the # of saved
            // printers for determining whether the nearby printers section should
            // start open or closed.
            this.browserProxy_.getCupsSavedPrintersList().then(savedPrinters => this.nearbyPrintersExpanded_ =
                savedPrinters.printerList.length === 0);
        }
        else {
            // Nearby printers should always show when the revamp flag is disabled.
            this.nearbyPrintersExpanded_ = true;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.networkConfig_
            .getNetworkStateList({
            filter: FilterType.kActive,
            networkType: NetworkType.kAll,
            limit: NO_LIMIT,
        })
            .then((responseParams) => {
            this.onActiveNetworksChanged(responseParams.result);
        });
    }
    ready() {
        super.ready();
        this.updateCupsPrintersList_();
        this.addEventListener('edit-cups-printer-details', this.onShowCupsEditPrinterDialog_);
        this.addEventListener('show-cups-printer-toast', (event) => {
            this.openResultToast_(event);
        });
        this.addEventListener('add-print-server-and-show-toast', (event) => {
            this.addPrintServerAndShowResultToast_((event));
        });
        this.addEventListener('open-manufacturer-model-dialog-for-specified-printer', (event) => {
            this.openManufacturerModelDialogForSpecifiedPrinter_(event);
        });
    }
    /**
     * Overridden from DeepLinkingMixin.
     */
    beforeDeepLinkAttempt(settingId) {
        if (settingId !== Setting.kSavedPrinters) {
            // Continue with deep link attempt.
            return true;
        }
        afterNextRender(this, () => {
            const savedPrinters = this.shadowRoot.querySelector('#savedPrinters');
            const printerEntry = savedPrinters.shadowRoot.querySelector('settings-cups-printers-entry');
            const deepLinkElement = printerEntry.shadowRoot.querySelector('#moreActions');
            if (!deepLinkElement || deepLinkElement.hidden) {
                console.warn(`Element with deep link id ${settingId} not focusable.`);
                return;
            }
            this.showDeepLinkElement(deepLinkElement);
        });
        // Stop deep link attempt since we completed it manually.
        return false;
    }
    currentRouteChanged(route) {
        if (route !== routes.CUPS_PRINTERS) {
            if (this.onPrintersChangedListener_) {
                removeWebUiListener(this.onPrintersChangedListener_);
                this.onPrintersChangedListener_ = null;
            }
            this.entryManager_.removeWebUiListeners();
            this.shadowRoot
                .querySelector('#savedPrinters')
                ?.removeFocusListener();
            return;
        }
        this.entryManager_.addWebUiListeners();
        this.onPrintersChangedListener_ = addWebUiListener('on-saved-printers-changed', this.onSavedPrintersChanged_.bind(this));
        this.onEnterprisePrintersChangedListener_ = addWebUiListener('on-enterprise-printers-changed', this.onEnterprisePrintersChanged_.bind(this));
        this.updateCupsPrintersList_();
        this.attemptDeepLink();
        this.shadowRoot
            .querySelector('#savedPrinters')
            ?.addFocusListener();
    }
    /**
     * CrosNetworkConfigObserver impl
     */
    onActiveNetworksChanged(networks) {
        this.hasActiveNetworkConnection = networks.some((network) => {
            // Note: Check for kOnline rather than using
            // OncMojo.connectionStateIsConnected() since the latter could return true
            // for networks without connectivity (e.g., captive portals).
            return network.connectionState === ConnectionStateType.kOnline;
        });
    }
    openResultToast_(event) {
        const printerName = event.detail.printerName;
        switch (event.detail.resultCode) {
            case PrinterSetupResult.SUCCESS:
                this.addPrinterResultText_ = loadTimeData.getStringF('printerAddedSuccessfulMessage', printerName);
                break;
            case PrinterSetupResult.EDIT_SUCCESS:
                this.addPrinterResultText_ = loadTimeData.getStringF('printerEditedSuccessfulMessage', printerName);
                break;
            case PrinterSetupResult.PRINTER_UNREACHABLE:
                this.addPrinterResultText_ =
                    loadTimeData.getStringF('printerUnavailableMessage', printerName);
                break;
            default:
                assertNotReached();
        }
        this.$.errorToast.show();
    }
    addPrintServerAndShowResultToast_(event) {
        this.entryManager_.addPrintServerPrinters(event.detail.printers);
        const length = event.detail.printers.printerList.length;
        if (length === 0) {
            this.addPrintServerResultText_ =
                loadTimeData.getString('printServerFoundZeroPrinters');
        }
        else if (length === 1) {
            this.addPrintServerResultText_ =
                loadTimeData.getString('printServerFoundOnePrinter');
        }
        else {
            this.addPrintServerResultText_ =
                loadTimeData.getStringF('printServerFoundManyPrinters', length);
        }
        this.$.printServerErrorToast.show();
    }
    openManufacturerModelDialogForSpecifiedPrinter_(e) {
        const item = e.detail.item;
        this.$.addPrinterDialog.openManufacturerModelDialogForSpecifiedPrinter(item);
    }
    updateCupsPrintersList_() {
        this.browserProxy_.getCupsSavedPrintersList().then(this.onSavedPrintersChanged_.bind(this));
        this.browserProxy_.getCupsEnterprisePrintersList().then(this.onEnterprisePrintersChanged_.bind(this));
    }
    onSavedPrintersChanged_(cupsPrintersList) {
        this.savedPrinters_ = cupsPrintersList.printerList.map(printer => ({ printerInfo: printer, printerType: PrinterType.SAVED }));
        this.entryManager_.setSavedPrintersList(this.savedPrinters_);
        // Used to delay rendering nearby and add printer sections to prevent
        // "Add Printer" flicker when clicking "Printers" in settings page.
        this.attemptedLoadingPrinters_ = true;
    }
    onEnterprisePrintersChanged_(cupsPrintersList) {
        this.enterprisePrinters_ = cupsPrintersList.printerList.map(printer => ({ printerInfo: printer, printerType: PrinterType.ENTERPRISE }));
        this.entryManager_.setEnterprisePrintersList(this.enterprisePrinters_);
    }
    onAddPrinterClick_() {
        this.$.addPrinterDialog.open();
        recordPrinterSettingsUserAction(PrinterSettingsUserAction.ADD_PRINTER_MANUALLY);
    }
    onAddPrinterDialogClose_() {
        const icon = this.shadowRoot.querySelector('#addManualPrinterIcon');
        assert(icon);
        focusWithoutInk(icon);
    }
    onShowCupsEditPrinterDialog_() {
        this.showCupsEditPrinterDialog_ = true;
    }
    onEditPrinterDialogClose_() {
        this.showCupsEditPrinterDialog_ = false;
    }
    /**
     * @return Returns if the 'no-search-results-found' string should be shown.
     */
    showNoSearchResultsMessage_(searchTerm) {
        if (!searchTerm || !this.printers.length) {
            return false;
        }
        searchTerm = searchTerm.toLowerCase();
        return !this.printers.some(printer => {
            return printer.printerName.toLowerCase().includes(searchTerm);
        });
    }
    addPrinterButtonActive_(connectedToNetwork, userPrintersAllowed) {
        return connectedToNetwork && userPrintersAllowed;
    }
    showSavedPrintersSection_() {
        return this.isPrinterSettingsRevampEnabled_ ||
            this.doesAccountHaveSavedPrinters_();
    }
    doesAccountHaveSavedPrinters_() {
        return !!this.savedPrinters_.length;
    }
    doesAccountHaveEnterprisePrinters_() {
        return !!this.enterprisePrinters_.length;
    }
    getSavedPrintersAriaLabel_() {
        let printerLabel = '';
        if (this.savedPrinterCount_ === 0) {
            printerLabel = 'savedPrintersCountNone';
        }
        else if (this.savedPrinterCount_ === 1) {
            printerLabel = 'savedPrintersCountOne';
        }
        else {
            printerLabel = 'savedPrintersCountMany';
        }
        return loadTimeData.getStringF(printerLabel, this.savedPrinterCount_);
    }
    getNearbyPrintersAriaLabel_() {
        let printerLabel = '';
        if (this.nearbyPrinterCount_ === 0) {
            printerLabel = 'nearbyPrintersCountNone';
        }
        else if (this.nearbyPrinterCount_ === 1) {
            printerLabel = 'nearbyPrintersCountOne';
        }
        else {
            printerLabel = 'nearbyPrintersCountMany';
        }
        return loadTimeData.getStringF(printerLabel, this.nearbyPrinterCount_);
    }
    getEnterprisePrintersAriaLabel_() {
        let printerLabel = '';
        if (this.enterprisePrinterCount_ === 0) {
            printerLabel = 'enterprisePrintersCountNone';
        }
        else if (this.enterprisePrinterCount_ === 1) {
            printerLabel = 'enterprisePrintersCountOne';
        }
        else {
            printerLabel = 'enterprisePrintersCountMany';
        }
        return loadTimeData.getStringF(printerLabel, this.enterprisePrinterCount_);
    }
    toggleClicked_() {
        assert(this.isPrinterSettingsRevampEnabled_);
        this.nearbyPrintersExpanded_ = !this.nearbyPrintersExpanded_;
        // The iron list containing nearby printers does not get rendered while
        // hidden so the list needs to be refreshed when the Nearby printer
        // section is expanded.
        if (this.nearbyPrintersExpanded_) {
            this.shadowRoot.querySelector('settings-cups-nearby-printers')
                .resizePrintersList();
        }
    }
    getIconDirection_() {
        return this.nearbyPrintersExpanded_ ? 'cr:expand-less' : 'cr:expand-more';
    }
    onHelpLinkClicked_() {
        recordPrinterSettingsUserAction(PrinterSettingsUserAction.CLICK_HELP_LINK);
    }
    computeNearbyPrintersEmpty_() {
        return this.nearbyPrinterCount_ === 0;
    }
    showNearbyPrintersRevampSection_() {
        return this.isPrinterSettingsRevampEnabled_ &&
            this.hasActiveNetworkConnection;
    }
    onClickPrintManagement_() {
        this.browserProxy_.openPrintManagementApp();
    }
}
customElements.define(SettingsCupsPrintersElement.is, SettingsCupsPrintersElement);
