// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
/**
 *  These values must be kept in sync with the Reason enum in
 *  /chromeos/printing/cups_printer_status.h
 */
export var PrinterStatusReason;
(function (PrinterStatusReason) {
    PrinterStatusReason[PrinterStatusReason["UNKNOWN_REASON"] = 0] = "UNKNOWN_REASON";
    PrinterStatusReason[PrinterStatusReason["DEVICE_ERROR"] = 1] = "DEVICE_ERROR";
    PrinterStatusReason[PrinterStatusReason["DOOR_OPEN"] = 2] = "DOOR_OPEN";
    PrinterStatusReason[PrinterStatusReason["LOW_ON_INK"] = 3] = "LOW_ON_INK";
    PrinterStatusReason[PrinterStatusReason["LOW_ON_PAPER"] = 4] = "LOW_ON_PAPER";
    PrinterStatusReason[PrinterStatusReason["NO_ERROR"] = 5] = "NO_ERROR";
    PrinterStatusReason[PrinterStatusReason["OUT_OF_INK"] = 6] = "OUT_OF_INK";
    PrinterStatusReason[PrinterStatusReason["OUT_OF_PAPER"] = 7] = "OUT_OF_PAPER";
    PrinterStatusReason[PrinterStatusReason["OUTPUT_ALMOST_FULL"] = 8] = "OUTPUT_ALMOST_FULL";
    PrinterStatusReason[PrinterStatusReason["OUTPUT_FULL"] = 9] = "OUTPUT_FULL";
    PrinterStatusReason[PrinterStatusReason["PAPER_JAM"] = 10] = "PAPER_JAM";
    PrinterStatusReason[PrinterStatusReason["PAUSED"] = 11] = "PAUSED";
    PrinterStatusReason[PrinterStatusReason["PRINTER_QUEUE_FULL"] = 12] = "PRINTER_QUEUE_FULL";
    PrinterStatusReason[PrinterStatusReason["PRINTER_UNREACHABLE"] = 13] = "PRINTER_UNREACHABLE";
    PrinterStatusReason[PrinterStatusReason["STOPPED"] = 14] = "STOPPED";
    PrinterStatusReason[PrinterStatusReason["TRAY_MISSING"] = 15] = "TRAY_MISSING";
})(PrinterStatusReason || (PrinterStatusReason = {}));
/**
 *  These values must be kept in sync with the Severity enum in
 *  /chromeos/printing/cups_printer_status.h
 */
export var PrinterStatusSeverity;
(function (PrinterStatusSeverity) {
    PrinterStatusSeverity[PrinterStatusSeverity["UNKNOWN_SEVERITY"] = 0] = "UNKNOWN_SEVERITY";
    PrinterStatusSeverity[PrinterStatusSeverity["REPORT"] = 1] = "REPORT";
    PrinterStatusSeverity[PrinterStatusSeverity["WARNING"] = 2] = "WARNING";
    PrinterStatusSeverity[PrinterStatusSeverity["ERROR"] = 3] = "ERROR";
})(PrinterStatusSeverity || (PrinterStatusSeverity = {}));
/**
 * Enumeration giving a local Chrome OS printer 3 different state possibilities
 * depending on its current status.
 */
export var PrinterState;
(function (PrinterState) {
    PrinterState[PrinterState["GOOD"] = 0] = "GOOD";
    PrinterState[PrinterState["ERROR"] = 1] = "ERROR";
    PrinterState[PrinterState["UNKNOWN"] = 2] = "UNKNOWN";
})(PrinterState || (PrinterState = {}));
export var PrintAttemptOutcome;
(function (PrintAttemptOutcome) {
    PrintAttemptOutcome[PrintAttemptOutcome["CANCELLED_PRINT_BUTTON_DISABLED"] = 0] = "CANCELLED_PRINT_BUTTON_DISABLED";
    PrintAttemptOutcome[PrintAttemptOutcome["CANCELLED_NO_PRINTERS_AVAILABLE"] = 1] = "CANCELLED_NO_PRINTERS_AVAILABLE";
    PrintAttemptOutcome[PrintAttemptOutcome["CANCELLED_OTHER_PRINTERS_AVAILABLE"] = 2] = "CANCELLED_OTHER_PRINTERS_AVAILABLE";
    PrintAttemptOutcome[PrintAttemptOutcome["CANCELLED_PRINTER_ERROR_STATUS"] = 3] = "CANCELLED_PRINTER_ERROR_STATUS";
    PrintAttemptOutcome[PrintAttemptOutcome["CANCELLED_PRINTER_GOOD_STATUS"] = 4] = "CANCELLED_PRINTER_GOOD_STATUS";
    PrintAttemptOutcome[PrintAttemptOutcome["CANCELLED_PRINTER_UNKNOWN_STATUS"] = 5] = "CANCELLED_PRINTER_UNKNOWN_STATUS";
    PrintAttemptOutcome[PrintAttemptOutcome["PDF_PRINT_ATTEMPTED"] = 6] = "PDF_PRINT_ATTEMPTED";
    PrintAttemptOutcome[PrintAttemptOutcome["PRINT_JOB_SUCCESS_INITIAL_PRINTER"] = 7] = "PRINT_JOB_SUCCESS_INITIAL_PRINTER";
    PrintAttemptOutcome[PrintAttemptOutcome["PRINT_JOB_SUCCESS_MANUALLY_SELECTED_PRINTER"] = 8] = "PRINT_JOB_SUCCESS_MANUALLY_SELECTED_PRINTER";
    PrintAttemptOutcome[PrintAttemptOutcome["PRINT_JOB_FAIL_INITIAL_PRINTER"] = 9] = "PRINT_JOB_FAIL_INITIAL_PRINTER";
    PrintAttemptOutcome[PrintAttemptOutcome["PRINT_JOB_FAIL_MANUALLY_SELECTED_PRINTER"] = 10] = "PRINT_JOB_FAIL_MANUALLY_SELECTED_PRINTER";
})(PrintAttemptOutcome || (PrintAttemptOutcome = {}));
export const ERROR_STRING_KEY_MAP = new Map([
    [PrinterStatusReason.DEVICE_ERROR, 'printerStatusDeviceError'],
    [PrinterStatusReason.DOOR_OPEN, 'printerStatusDoorOpen'],
    [PrinterStatusReason.LOW_ON_INK, 'printerStatusLowOnInk'],
    [PrinterStatusReason.LOW_ON_PAPER, 'printerStatusLowOnPaper'],
    [PrinterStatusReason.OUT_OF_INK, 'printerStatusOutOfInk'],
    [PrinterStatusReason.OUT_OF_PAPER, 'printerStatusOutOfPaper'],
    [PrinterStatusReason.OUTPUT_ALMOST_FULL, 'printerStatusOutputAlmostFull'],
    [PrinterStatusReason.OUTPUT_FULL, 'printerStatusOutputFull'],
    [PrinterStatusReason.PAPER_JAM, 'printerStatusPaperJam'],
    [PrinterStatusReason.PAUSED, 'printerStatusPaused'],
    [PrinterStatusReason.PRINTER_QUEUE_FULL, 'printerStatusPrinterQueueFull'],
    [PrinterStatusReason.PRINTER_UNREACHABLE, 'printerStatusPrinterUnreachable'],
    [PrinterStatusReason.STOPPED, 'printerStatusStopped'],
    [PrinterStatusReason.TRAY_MISSING, 'printerStatusTrayMissing'],
]);
/**
 * A |printerStatus| can have multiple status reasons so this function's
 * responsibility is to determine which status reason is most relevant to
 * surface to the user. Any status reason with a severity of WARNING or ERROR
 * will get highest precedence since this usually means the printer is in a
 * bad state. If there does not exist an error status reason with a high enough
 * severity, then return NO_ERROR.
 * @return Status reason extracted from |printerStatus|.
 */
export function getStatusReasonFromPrinterStatus(printerStatus) {
    if (!printerStatus.printerId) {
        // TODO(crbug.com/1027400): Remove console.warn once bug is confirmed fix.
        console.warn('Received printer status missing printer id');
        return PrinterStatusReason.UNKNOWN_REASON;
    }
    let statusReason = PrinterStatusReason.NO_ERROR;
    for (const printerStatusReason of printerStatus.statusReasons) {
        const reason = printerStatusReason.reason;
        const severity = printerStatusReason.severity;
        if (severity !== PrinterStatusSeverity.ERROR &&
            severity !== PrinterStatusSeverity.WARNING) {
            continue;
        }
        // Always prioritize an ERROR severity status, unless it's for unknown
        // reasons.
        if (reason !== PrinterStatusReason.UNKNOWN_REASON &&
            severity === PrinterStatusSeverity.ERROR) {
            return reason;
        }
        if (reason !== PrinterStatusReason.UNKNOWN_REASON ||
            statusReason === PrinterStatusReason.NO_ERROR) {
            statusReason = reason;
        }
    }
    return statusReason;
}
export function computePrinterState(printerStatusReason) {
    if (printerStatusReason === null ||
        printerStatusReason === PrinterStatusReason.UNKNOWN_REASON) {
        return PrinterState.UNKNOWN;
    }
    if (printerStatusReason === PrinterStatusReason.NO_ERROR) {
        return PrinterState.GOOD;
    }
    return PrinterState.ERROR;
}
export function getPrinterStatusIcon(printerStatusReason, isEnterprisePrinter, prefersDarkColorScheme) {
    if (loadTimeData.getBoolean('isPrintPreviewSetupAssistanceEnabled')) {
        return getPrinterStatusIconImproved(printerStatusReason, isEnterprisePrinter, prefersDarkColorScheme);
    }
    const printerTypePrefix = isEnterprisePrinter ?
        'print-preview:business-printer-status-' :
        'print-preview:printer-status-';
    const darkModeSuffix = prefersDarkColorScheme ? '-dark' : '';
    switch (computePrinterState(printerStatusReason)) {
        case PrinterState.GOOD:
            return `${printerTypePrefix}green${darkModeSuffix}`;
        case PrinterState.ERROR:
            return `${printerTypePrefix}red${darkModeSuffix}`;
        case PrinterState.UNKNOWN:
            return `${printerTypePrefix}grey${darkModeSuffix}`;
        default:
            assertNotReached();
    }
}
// Mapping based on http://go/printer-settings-revamp-2023-dd "Determining
// Printer Status" section.
const PRINTER_STATUS_REASON_COLOR_MAP = new Map([
    [PrinterStatusReason.UNKNOWN_REASON, 'green'],
    [PrinterStatusReason.DEVICE_ERROR, 'orange'],
    [PrinterStatusReason.DOOR_OPEN, 'orange'],
    [PrinterStatusReason.LOW_ON_INK, 'orange'],
    [PrinterStatusReason.LOW_ON_PAPER, 'orange'],
    [PrinterStatusReason.NO_ERROR, 'green'],
    [PrinterStatusReason.OUT_OF_INK, 'orange'],
    [PrinterStatusReason.OUT_OF_PAPER, 'orange'],
    [PrinterStatusReason.OUTPUT_ALMOST_FULL, 'orange'],
    [PrinterStatusReason.OUTPUT_FULL, 'orange'],
    [PrinterStatusReason.PAPER_JAM, 'orange'],
    [PrinterStatusReason.PAUSED, 'orange'],
    [PrinterStatusReason.PRINTER_QUEUE_FULL, 'orange'],
    [PrinterStatusReason.PRINTER_UNREACHABLE, 'red'],
    [PrinterStatusReason.STOPPED, 'orange'],
    [PrinterStatusReason.TRAY_MISSING, 'orange'],
]);
/**
 * Returns the print-preview icon matching the printer's PrinterStatusReason,
 * enterprise status, and color scheme when
 * 'isPrintPreviewSetupAssistanceEnabled' flag is enabled.
 */
// TODO(b/289091283): Rename function to `getPrinterStatusIcon` and remove
//                    previous implementation when flag is removed.
function getPrinterStatusIconImproved(printerStatusReason, isEnterprisePrinter, prefersDarkColorScheme) {
    const printerTypePrefix = isEnterprisePrinter ?
        'print-preview:business-printer-status-' :
        'print-preview:printer-status-';
    const darkModeSuffix = prefersDarkColorScheme ? '-dark' : '';
    const iconColor = printerStatusReason === null ?
        'grey' :
        PRINTER_STATUS_REASON_COLOR_MAP.get(printerStatusReason);
    assert(iconColor);
    return `${printerTypePrefix}${iconColor}${darkModeSuffix}`;
}
/**
 * Returns class name matching icon color for the printer's
 * PrinterStatusReason.
 */
export function getStatusTextColorClass(printerStatusReason) {
    // TODO(b/289091283): Remove condition when flag is removed.
    if (!loadTimeData.getBoolean('isPrintPreviewSetupAssistanceEnabled')) {
        return '';
    }
    if (printerStatusReason === null) {
        return '';
    }
    const color = PRINTER_STATUS_REASON_COLOR_MAP.get(printerStatusReason);
    assert(color);
    return `status-${color}`;
}
