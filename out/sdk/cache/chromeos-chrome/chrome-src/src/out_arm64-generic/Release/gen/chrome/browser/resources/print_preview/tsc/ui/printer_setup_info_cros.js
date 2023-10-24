// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import './print_preview_shared.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { MetricsContext, PrintPreviewLaunchSourceBucket } from '../metrics.js';
import { NativeLayerImpl } from '../native_layer.js';
import { NativeLayerCrosImpl } from '../native_layer_cros.js';
import { getTemplate } from './printer_setup_info_cros.html.js';
/**
 * @fileoverview PrintPreviewPrinterSetupInfoCrosElement
 * This element provides contextual instructions to help users navigate
 * to printer settings based on the state of printers available in
 * print-preview. Element will use NativeLayer to open the correct printer
 * settings interface.
 */
const PrintPreviewPrinterSetupInfoCrosElementBase = I18nMixin(PolymerElement);
export var PrinterSetupInfoMetricsSource;
(function (PrinterSetupInfoMetricsSource) {
    PrinterSetupInfoMetricsSource[PrinterSetupInfoMetricsSource["PREVIEW_AREA"] = 0] = "PREVIEW_AREA";
    PrinterSetupInfoMetricsSource[PrinterSetupInfoMetricsSource["DESTINATION_DIALOG_CROS"] = 1] = "DESTINATION_DIALOG_CROS";
})(PrinterSetupInfoMetricsSource || (PrinterSetupInfoMetricsSource = {}));
export var PrinterSetupInfoMessageType;
(function (PrinterSetupInfoMessageType) {
    PrinterSetupInfoMessageType[PrinterSetupInfoMessageType["NO_PRINTERS"] = 0] = "NO_PRINTERS";
    PrinterSetupInfoMessageType[PrinterSetupInfoMessageType["PRINTER_OFFLINE"] = 1] = "PRINTER_OFFLINE";
})(PrinterSetupInfoMessageType || (PrinterSetupInfoMessageType = {}));
const MESSAGE_TYPE_LOCALIZED_STRINGS_MAP = new Map([
    [
        PrinterSetupInfoMessageType.NO_PRINTERS,
        {
            headingKey: 'printerSetupInfoMessageHeadingNoPrintersText',
            detailKey: 'printerSetupInfoMessageDetailNoPrintersText',
        },
    ],
    [
        PrinterSetupInfoMessageType.PRINTER_OFFLINE,
        {
            headingKey: 'printerSetupInfoMessageHeadingPrinterOfflineText',
            detailKey: 'printerSetupInfoMessageDetailPrinterOfflineText',
        },
    ],
]);
export class PrintPreviewPrinterSetupInfoCrosElement extends PrintPreviewPrinterSetupInfoCrosElementBase {
    constructor() {
        super(...arguments);
        this.showManagePrintersButton = false;
    }
    static get is() {
        return 'print-preview-printer-setup-info-cros';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            messageType: {
                type: Number,
                value: PrinterSetupInfoMessageType.NO_PRINTERS,
            },
            metricsSource: Number,
            showManagePrintersButton: Boolean,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.nativeLayer = NativeLayerImpl.getInstance();
        this.metricsContext =
            MetricsContext.getLaunchPrinterSettingsMetricsContextCros();
        NativeLayerCrosImpl.getInstance().getShowManagePrinters().then((show) => {
            this.showManagePrintersButton = show;
        });
    }
    getMessageDetail() {
        const messageData = MESSAGE_TYPE_LOCALIZED_STRINGS_MAP.get(this.messageType);
        assert(messageData);
        return this.i18n(messageData.detailKey);
    }
    getMessageHeading() {
        const messageData = MESSAGE_TYPE_LOCALIZED_STRINGS_MAP.get(this.messageType);
        assert(messageData);
        return this.i18n(messageData.headingKey);
    }
    onManagePrintersClicked() {
        this.nativeLayer.managePrinters();
        switch (this.metricsSource) {
            case PrinterSetupInfoMetricsSource.PREVIEW_AREA:
                this.metricsContext.record(PrintPreviewLaunchSourceBucket.PREVIEW_AREA_CONNECTION_ERROR);
                break;
            case PrinterSetupInfoMetricsSource.DESTINATION_DIALOG_CROS:
                // `<print-preview-printer-setup-info-cros>` is only displayed when
                // there are no printers.
                this.metricsContext.record(PrintPreviewLaunchSourceBucket.DESTINATION_DIALOG_CROS_NO_PRINTERS);
                break;
            default:
                assertNotReached();
        }
    }
    setMetricsSourceForTesting(source) {
        this.metricsSource = source;
    }
}
customElements.define(PrintPreviewPrinterSetupInfoCrosElement.is, PrintPreviewPrinterSetupInfoCrosElement);
