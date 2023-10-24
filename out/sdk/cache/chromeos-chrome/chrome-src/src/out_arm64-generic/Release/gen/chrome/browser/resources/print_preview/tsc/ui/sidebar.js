// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import './advanced_options_settings.js';
import './button_strip.js';
import './color_settings.js';
import './copies_settings.js';
import './dpi_settings.js';
import './duplex_settings.js';
import './header.js';
import './layout_settings.js';
import './media_size_settings.js';
import './media_type_settings.js';
import './margins_settings.js';
import './more_settings.js';
import './other_options_settings.js';
import './pages_per_sheet_settings.js';
import './pages_settings.js';
// 
import './pin_settings.js';
// 
import './print_preview_vars.css.js';
import './scaling_settings.js';
import '../strings.m.js';
// 
import { CrContainerShadowMixin } from 'chrome://resources/cr_elements/cr_container_shadow_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { DarkModeMixin } from '../dark_mode_mixin.js';
import { State } from '../data/state.js';
import { MetricsContext, PrintSettingsUiBucket } from '../metrics.js';
import { SettingsMixin } from './settings_mixin.js';
import { getTemplate } from './sidebar.html.js';
/**
 * Number of settings sections to show when "More settings" is collapsed.
 */
const MAX_SECTIONS_TO_SHOW = 6;
const PrintPreviewSidebarElementBase = CrContainerShadowMixin(WebUiListenerMixin(SettingsMixin(DarkModeMixin(PolymerElement))));
export class PrintPreviewSidebarElement extends PrintPreviewSidebarElementBase {
    static get is() {
        return 'print-preview-sidebar';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            controlsManaged: Boolean,
            destination: {
                type: Object,
                notify: true,
            },
            destinationState: {
                type: Number,
                notify: true,
            },
            error: {
                type: Number,
                notify: true,
            },
            isPdf: Boolean,
            pageCount: Number,
            state: {
                type: Number,
                observer: 'onStateChanged_',
            },
            controlsDisabled_: {
                type: Boolean,
                computed: 'computeControlsDisabled_(state)',
            },
            maxSheets: Number,
            sheetCount_: {
                type: Number,
                computed: 'computeSheetCount_(' +
                    'settings.pages.*, settings.duplex.*, settings.copies.*)',
            },
            firstLoad_: {
                type: Boolean,
                value: true,
            },
            isInAppKioskMode_: {
                type: Boolean,
                value: false,
            },
            settingsExpandedByUser_: {
                type: Boolean,
                value: false,
            },
            shouldShowMoreSettings_: {
                type: Boolean,
                computed: 'computeShouldShowMoreSettings_(settings.pages.available, ' +
                    'settings.copies.available, settings.layout.available, ' +
                    'settings.color.available, settings.mediaSize.available, ' +
                    'settings.dpi.available, settings.margins.available, ' +
                    'settings.pagesPerSheet.available, settings.scaling.available, ' +
                    'settings.duplex.available, settings.otherOptions.available, ' +
                    'settings.vendorItems.available)',
            },
            // 
            isPinValid_: {
                type: Boolean,
                value: true,
            },
            // 
        };
    }
    // 
    /**
     * @param defaultPrinter The system default printer ID.
     * @param serializedDestinationSelectionRulesStr String with rules
     *     for selecting the default destination.
     * @param pdfPrinterDisabled Whether the PDF printer is disabled.
     * @param isDriveMounted Whether Google Drive is mounted. Only used
          on Chrome OS.
     */
    init(appKioskMode, defaultPrinter, serializedDestinationSelectionRulesStr, pdfPrinterDisabled, isDriveMounted) {
        this.isInAppKioskMode_ = appKioskMode;
        pdfPrinterDisabled = this.isInAppKioskMode_ || pdfPrinterDisabled;
        // 'Save to Google Drive' is almost the same as PDF printing. The only
        // difference is the default location shown in the file picker when user
        // clicks 'Save'. Therefore, we should disable the 'Save to Google Drive'
        // destination if the user should be blocked from using PDF printing.
        const saveToDriveDisabled = pdfPrinterDisabled || !isDriveMounted;
        this.$.destinationSettings.init(defaultPrinter, pdfPrinterDisabled, saveToDriveDisabled, serializedDestinationSelectionRulesStr);
    }
    /**
     * @return Whether the controls should be disabled.
     */
    computeControlsDisabled_() {
        return this.state !== State.READY;
    }
    /**
     * @return The number of sheets that will be printed.
     */
    computeSheetCount_() {
        let sheets = this.getSettingValue('pages').length;
        if (this.getSettingValue('duplex')) {
            sheets = Math.ceil(sheets / 2);
        }
        return sheets * this.getSettingValue('copies');
    }
    /**
     * @return Whether to show the "More settings" link.
     */
    computeShouldShowMoreSettings_() {
        // Destination settings is always available. See if the total number of
        // available sections exceeds the maximum number to show.
        return [
            'pages',
            'copies',
            'layout',
            'color',
            'mediaSize',
            'margins',
            'color',
            'pagesPerSheet',
            'scaling',
            'dpi',
            'duplex',
            'otherOptions',
            'vendorItems',
        ].reduce((count, setting) => {
            return this.getSetting(setting).available ? count + 1 : count;
        }, 1) > MAX_SECTIONS_TO_SHOW;
    }
    /**
     * @return Whether the "more settings" collapse should be expanded.
     */
    shouldExpandSettings_() {
        if (this.settingsExpandedByUser_ === undefined ||
            this.shouldShowMoreSettings_ === undefined) {
            return false;
        }
        // Expand the settings if the user has requested them expanded or if more
        // settings is not displayed (i.e. less than 6 total settings available).
        return this.settingsExpandedByUser_ || !this.shouldShowMoreSettings_;
    }
    onPrintButtonFocused_() {
        this.firstLoad_ = false;
    }
    onStateChanged_() {
        if (this.state !== State.PRINTING) {
            return;
        }
        if (this.shouldShowMoreSettings_) {
            MetricsContext.printSettingsUi().record(this.settingsExpandedByUser_ ?
                PrintSettingsUiBucket.PRINT_WITH_SETTINGS_EXPANDED :
                PrintSettingsUiBucket.PRINT_WITH_SETTINGS_COLLAPSED);
        }
    }
    // 
    // 
    /**
     * Returns true if at least one non-PDF printer destination is shown in the
     * destination dropdown.
     */
    printerExistsInDisplayedDestinations() {
        return this.$.destinationSettings.printerExistsInDisplayedDestinations();
    }
}
customElements.define(PrintPreviewSidebarElement.is, PrintPreviewSidebarElement);
