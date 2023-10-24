// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// TODO(b/278895546): Merge this printer_status_cros.ts used for Print Preview.
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
 * Enumeration giving a local Chrome OS printer 4 different state possibilities
 * depending on its current status.
 */
export var PrinterState;
(function (PrinterState) {
    PrinterState[PrinterState["UNKNOWN"] = 0] = "UNKNOWN";
    PrinterState[PrinterState["GOOD"] = 1] = "GOOD";
    PrinterState[PrinterState["LOW_SEVERITY_ERROR"] = 2] = "LOW_SEVERITY_ERROR";
    PrinterState[PrinterState["HIGH_SEVERITY_ERROR"] = 3] = "HIGH_SEVERITY_ERROR";
})(PrinterState || (PrinterState = {}));
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
    if (printerStatusReason === null) {
        return PrinterState.UNKNOWN;
    }
    switch (printerStatusReason) {
        case PrinterStatusReason.NO_ERROR:
        case PrinterStatusReason.UNKNOWN_REASON:
            return PrinterState.GOOD;
        case PrinterStatusReason.PRINTER_UNREACHABLE:
            return PrinterState.HIGH_SEVERITY_ERROR;
        default:
            return PrinterState.LOW_SEVERITY_ERROR;
    }
}
export const STATUS_REASON_STRING_KEY_MAP = new Map([
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
    [
        PrinterStatusReason.PRINTER_UNREACHABLE,
        'printerStatusPrinterUnreachable',
    ],
    [PrinterStatusReason.STOPPED, 'printerStatusStopped'],
    [PrinterStatusReason.TRAY_MISSING, 'printerStatusTrayMissing'],
]);
