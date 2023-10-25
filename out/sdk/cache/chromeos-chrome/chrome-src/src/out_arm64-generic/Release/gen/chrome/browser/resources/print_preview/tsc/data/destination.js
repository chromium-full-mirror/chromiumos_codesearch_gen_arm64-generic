// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../strings.m.js';
import { assert } from 'chrome://resources/js/assert.js';
// 
import { NativeLayerCrosImpl } from '../native_layer_cros.js';
// 
import { getStatusReasonFromPrinterStatus, PrinterStatusReason } from './printer_status_cros.js';
// 
/**
 * Enumeration of the origin types for destinations.
 */
export var DestinationOrigin;
(function (DestinationOrigin) {
    DestinationOrigin["LOCAL"] = "local";
    // Note: Cookies, device and privet are deprecated, but used to filter any
    // legacy entries in the recent destinations, since we can't guarantee all
    // such recent printers have been overridden.
    DestinationOrigin["COOKIES"] = "cookies";
    // 
    DestinationOrigin["DEVICE"] = "device";
    // 
    DestinationOrigin["PRIVET"] = "privet";
    DestinationOrigin["EXTENSION"] = "extension";
    DestinationOrigin["CROS"] = "chrome_os";
})(DestinationOrigin || (DestinationOrigin = {}));
/**
 * Printer types for capabilities and printer list requests.
 * Must match PrinterType in printing/mojom/print.mojom
 */
export var PrinterType;
(function (PrinterType) {
    PrinterType[PrinterType["PRIVET_PRINTER_DEPRECATED"] = 0] = "PRIVET_PRINTER_DEPRECATED";
    PrinterType[PrinterType["EXTENSION_PRINTER"] = 1] = "EXTENSION_PRINTER";
    PrinterType[PrinterType["PDF_PRINTER"] = 2] = "PDF_PRINTER";
    PrinterType[PrinterType["LOCAL_PRINTER"] = 3] = "LOCAL_PRINTER";
    PrinterType[PrinterType["CLOUD_PRINTER_DEPRECATED"] = 4] = "CLOUD_PRINTER_DEPRECATED";
})(PrinterType || (PrinterType = {}));
// 
/**
 * Enumeration specifying whether a destination is provisional and the reason
 * the destination is provisional.
 */
export var DestinationProvisionalType;
(function (DestinationProvisionalType) {
    // Destination is not provisional.
    DestinationProvisionalType["NONE"] = "NONE";
    // User has to grant USB access for the destination to its provider.
    // Used for destinations with extension origin.
    DestinationProvisionalType["NEEDS_USB_PERMISSION"] = "NEEDS_USB_PERMISSION";
})(DestinationProvisionalType || (DestinationProvisionalType = {}));
// 
/**
 * Enumeration of color modes used by Chromium.
 */
export var ColorMode;
(function (ColorMode) {
    ColorMode[ColorMode["GRAY"] = 1] = "GRAY";
    ColorMode[ColorMode["COLOR"] = 2] = "COLOR";
})(ColorMode || (ColorMode = {}));
export function isPdfPrinter(id) {
    // 
    if (id === GooglePromotedDestinationId.SAVE_TO_DRIVE_CROS) {
        return true;
    }
    // 
    return id === GooglePromotedDestinationId.SAVE_AS_PDF;
}
/**
 * Creates a |RecentDestination| to represent |destination| in the app
 * state.
 */
export function makeRecentDestination(destination) {
    return {
        id: destination.id,
        origin: destination.origin,
        capabilities: destination.capabilities,
        displayName: destination.displayName || '',
        extensionId: destination.extensionId || '',
        extensionName: destination.extensionName || '',
        icon: destination.icon || '',
    };
}
/**
 * @return key that maps to a destination with the selected |id| and |origin|.
 */
export function createDestinationKey(id, origin) {
    return `${id}/${origin}/`;
}
/**
 * @return A key that maps to a destination with parameters matching
 *     |recentDestination|.
 */
export function createRecentDestinationKey(recentDestination) {
    return createDestinationKey(recentDestination.id, recentDestination.origin);
}
/**
 * List of capability types considered color.
 */
const COLOR_TYPES = ['STANDARD_COLOR', 'CUSTOM_COLOR'];
/**
 * List of capability types considered monochrome.
 */
const MONOCHROME_TYPES = ['STANDARD_MONOCHROME', 'CUSTOM_MONOCHROME'];
/**
 * Print destination data object.
 */
export class Destination {
    constructor(id, origin, displayName, params) {
        /**
         * Print capabilities of the destination.
         */
        this.capabilities_ = null;
        /**
         * Destination location.
         */
        this.location_ = '';
        /**
         * EULA url for printer's PPD. Empty string indicates no provided EULA.
         */
        this.eulaUrl_ = '';
        /**
         * True if the user opened the print preview dropdown and selected a different
         * printer than the original destination.
         */
        this.printerManuallySelected_ = false;
        /**
         * Stores the printer status reason for a local Chrome OS printer.
         */
        this.printerStatusReason_ = null;
        /**
         * Promise returns |key_| when the printer status request is completed.
         */
        this.printerStatusRequestedPromise_ = null;
        /**
         * True if the failed printer status request has already been retried once.
         */
        this.printerStatusRetrySent_ = false;
        /**
         * The length of time to wait before retrying a printer status request.
         */
        this.printerStatusRetryTimerMs_ = 3000;
        this.id_ = id;
        this.origin_ = origin;
        this.displayName_ = displayName || '';
        this.isEnterprisePrinter_ = (params && params.isEnterprisePrinter) || false;
        this.description_ = (params && params.description) || '';
        this.extensionId_ = (params && params.extensionId) || '';
        this.extensionName_ = (params && params.extensionName) || '';
        this.location_ = (params && params.location) || '';
        this.type_ = this.computeType_(id, origin);
        // 
        this.provisionalType_ =
            (params && params.provisionalType) || DestinationProvisionalType.NONE;
        assert(this.provisionalType_ !==
            DestinationProvisionalType.NEEDS_USB_PERMISSION ||
            this.isExtension, 'Provisional USB destination only supprted with extension origin.');
        // 
    }
    computeType_(id, origin) {
        if (isPdfPrinter(id)) {
            return PrinterType.PDF_PRINTER;
        }
        return origin === DestinationOrigin.EXTENSION ?
            PrinterType.EXTENSION_PRINTER :
            PrinterType.LOCAL_PRINTER;
    }
    get type() {
        return this.type_;
    }
    get id() {
        return this.id_;
    }
    get origin() {
        return this.origin_;
    }
    get displayName() {
        return this.displayName_;
    }
    /**
     * @return Whether the destination is an extension managed printer.
     */
    get isExtension() {
        return this.origin_ === DestinationOrigin.EXTENSION;
    }
    /**
     * @return Most relevant string to help user to identify this
     *     destination.
     */
    get hint() {
        return this.location_ || this.extensionName || this.description_;
    }
    /**
     * @return Extension ID associated with the destination. Non-empty
     *     only for extension managed printers.
     */
    get extensionId() {
        return this.extensionId_;
    }
    /**
     * @return Extension name associated with the destination.
     *     Non-empty only for extension managed printers.
     */
    get extensionName() {
        return this.extensionName_;
    }
    /** @return Print capabilities of the destination. */
    get capabilities() {
        return this.capabilities_;
    }
    set capabilities(capabilities) {
        if (capabilities) {
            this.capabilities_ = capabilities;
        }
    }
    // 
    get eulaUrl() {
        return this.eulaUrl_;
    }
    set eulaUrl(eulaUrl) {
        this.eulaUrl_ = eulaUrl;
    }
    get printerManuallySelected() {
        return this.printerManuallySelected_;
    }
    set printerManuallySelected(printerManuallySelected) {
        this.printerManuallySelected_ = printerManuallySelected;
    }
    /**
     * @return The printer status reason for a local Chrome OS printer.
     */
    get printerStatusReason() {
        return this.printerStatusReason_;
    }
    set printerStatusReason(printerStatusReason) {
        this.printerStatusReason_ = printerStatusReason;
    }
    setPrinterStatusRetryTimeoutForTesting(timeoutMs) {
        this.printerStatusRetryTimerMs_ = timeoutMs;
    }
    /**
     * Requests a printer status for the destination.
     * @return Promise with destination key.
     */
    requestPrinterStatus() {
        // Requesting printer status only allowed for local CrOS printers.
        if (this.origin_ !== DestinationOrigin.CROS) {
            return Promise.reject();
        }
        // Immediately resolve promise if |printerStatusReason_| is already
        // available.
        if (this.printerStatusReason_) {
            return Promise.resolve(this.key);
        }
        // Return existing promise if the printer status has already been requested.
        if (this.printerStatusRequestedPromise_) {
            return this.printerStatusRequestedPromise_;
        }
        // Request printer status then set and return the promise.
        this.printerStatusRequestedPromise_ = this.requestPrinterStatusPromise_();
        return this.printerStatusRequestedPromise_;
    }
    /**
     * Requests a printer status for the destination. If the printer status comes
     * back as |PRINTER_UNREACHABLE|, this function will retry and call itself
     * again once before resolving the original call.
     * @return Promise with destination key.
     */
    requestPrinterStatusPromise_() {
        return NativeLayerCrosImpl.getInstance()
            .requestPrinterStatusUpdate(this.id_)
            .then(status => {
            if (status) {
                const statusReason = getStatusReasonFromPrinterStatus(status);
                const isPrinterUnreachable = statusReason === PrinterStatusReason.PRINTER_UNREACHABLE;
                if (isPrinterUnreachable && !this.printerStatusRetrySent_) {
                    this.printerStatusRetrySent_ = true;
                    return this.printerStatusWaitForTimerPromise_();
                }
                this.printerStatusReason_ = statusReason;
                // If this is the second printer status attempt, record the result.
                if (this.printerStatusRetrySent_) {
                    NativeLayerCrosImpl.getInstance()
                        .recordPrinterStatusRetrySuccessHistogram(!isPrinterUnreachable);
                }
            }
            return Promise.resolve(this.key);
        });
    }
    /**
     * Pause for a set timeout then retry the printer status request.
     * @return Promise with destination key.
     */
    printerStatusWaitForTimerPromise_() {
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                resolve();
            }, this.printerStatusRetryTimerMs_);
        })
            .then(() => {
            return this.requestPrinterStatusPromise_();
        });
    }
    /** @return Whether the destination is ready to be selected. */
    get readyForSelection() {
        return (this.origin_ !== DestinationOrigin.CROS ||
            this.capabilities_ !== null) &&
            !this.isProvisional;
    }
    get provisionalType() {
        return this.provisionalType_;
    }
    get isProvisional() {
        return this.provisionalType_ !== DestinationProvisionalType.NONE;
    }
    // 
    /** @return Path to the SVG for the destination's icon. */
    get icon() {
        // 
        if (this.id_ === GooglePromotedDestinationId.SAVE_TO_DRIVE_CROS) {
            return 'print-preview:save-to-drive';
        }
        // 
        if (this.id_ === GooglePromotedDestinationId.SAVE_AS_PDF) {
            return 'cr:insert-drive-file';
        }
        if (this.isEnterprisePrinter) {
            return 'print-preview:business';
        }
        return 'print-preview:print';
    }
    /**
     * @return Properties (besides display name) to match search queries against.
     */
    get extraPropertiesToMatch() {
        return [this.location_, this.description_];
    }
    /**
     * Matches a query against the destination.
     * @param query Query to match against the destination.
     * @return Whether the query matches this destination.
     */
    matches(query) {
        return !!this.displayName_.match(query) ||
            !!this.extensionName_.match(query) || !!this.location_.match(query) ||
            !!this.description_.match(query);
    }
    /**
     * Whether the printer is enterprise policy controlled printer.
     */
    get isEnterprisePrinter() {
        return this.isEnterprisePrinter_;
    }
    copiesCapability_() {
        return this.capabilities && this.capabilities.printer &&
            this.capabilities.printer.copies ?
            this.capabilities.printer.copies :
            null;
    }
    colorCapability_() {
        return this.capabilities && this.capabilities.printer &&
            this.capabilities.printer.color ?
            this.capabilities.printer.color :
            null;
    }
    /** @return Whether the printer supports copies. */
    get hasCopiesCapability() {
        const capability = this.copiesCapability_();
        if (!capability) {
            return false;
        }
        return capability.max ? capability.max > 1 : true;
    }
    /**
     * @return Whether the printer supports both black and white and
     *     color printing.
     */
    get hasColorCapability() {
        const capability = this.colorCapability_();
        if (!capability || !capability.option) {
            return false;
        }
        let hasColor = false;
        let hasMonochrome = false;
        capability.option.forEach(option => {
            assert(option.type);
            hasColor = hasColor || COLOR_TYPES.includes(option.type);
            hasMonochrome = hasMonochrome || MONOCHROME_TYPES.includes(option.type);
        });
        return hasColor && hasMonochrome;
    }
    /**
     * @param isColor Whether to use a color printing mode.
     * @return Selected color option.
     */
    getSelectedColorOption(isColor) {
        const typesToLookFor = isColor ? COLOR_TYPES : MONOCHROME_TYPES;
        const capability = this.colorCapability_();
        if (!capability || !capability.option) {
            return null;
        }
        for (let i = 0; i < typesToLookFor.length; i++) {
            const matchingOptions = capability.option.filter(option => {
                return option.type === typesToLookFor[i];
            });
            if (matchingOptions.length > 0) {
                return matchingOptions[0];
            }
        }
        return null;
    }
    /**
     * @param isColor Whether to use a color printing mode.
     * @return Native color model of the destination.
     */
    getNativeColorModel(isColor) {
        // For printers without capability, native color model is ignored.
        const capability = this.colorCapability_();
        if (!capability || !capability.option) {
            return isColor ? ColorMode.COLOR : ColorMode.GRAY;
        }
        const selected = this.getSelectedColorOption(isColor);
        const mode = parseInt(selected ? selected.vendor_id : '', 10);
        if (isNaN(mode)) {
            return isColor ? ColorMode.COLOR : ColorMode.GRAY;
        }
        return mode;
    }
    /**
     * @return The default color option for the destination.
     */
    get defaultColorOption() {
        const capability = this.colorCapability_();
        if (!capability || !capability.option) {
            return null;
        }
        const defaultOptions = capability.option.filter(option => {
            return option.is_default;
        });
        return defaultOptions.length !== 0 ? defaultOptions[0] : null;
    }
    /** @return A unique identifier for this destination. */
    get key() {
        return `${this.id_}/${this.origin_}/`;
    }
}
/**
 * Enumeration of Google-promoted destination IDs.
 * @enum {string}
 */
export var GooglePromotedDestinationId;
(function (GooglePromotedDestinationId) {
    GooglePromotedDestinationId["SAVE_AS_PDF"] = "Save as PDF";
    // 
    GooglePromotedDestinationId["SAVE_TO_DRIVE_CROS"] = "Save to Drive CrOS";
    // 
})(GooglePromotedDestinationId || (GooglePromotedDestinationId = {}));
/* Unique identifier for the Save as PDF destination */
export const PDF_DESTINATION_KEY = `${GooglePromotedDestinationId.SAVE_AS_PDF}/${DestinationOrigin.LOCAL}/`;
// 
/* Unique identifier for the Save to Drive CrOS destination */
export const SAVE_TO_DRIVE_CROS_DESTINATION_KEY = `${GooglePromotedDestinationId.SAVE_TO_DRIVE_CROS}/${DestinationOrigin.LOCAL}/`;
// 
