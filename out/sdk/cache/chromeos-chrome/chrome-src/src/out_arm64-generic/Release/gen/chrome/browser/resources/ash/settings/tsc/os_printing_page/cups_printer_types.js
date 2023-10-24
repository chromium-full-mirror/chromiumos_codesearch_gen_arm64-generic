// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * These values correspond to the different types of printers available. Refer
 * to cups_printer_management.md for more information about the different
 * categories of printers.
 *
 * The types are numbered in desired sorting order for display.
 */
export var PrinterType;
(function (PrinterType) {
    PrinterType[PrinterType["SAVED"] = 0] = "SAVED";
    PrinterType[PrinterType["PRINTSERVER"] = 1] = "PRINTSERVER";
    PrinterType[PrinterType["AUTOMATIC"] = 2] = "AUTOMATIC";
    PrinterType[PrinterType["DISCOVERED"] = 3] = "DISCOVERED";
    PrinterType[PrinterType["ENTERPRISE"] = 4] = "ENTERPRISE";
})(PrinterType || (PrinterType = {}));
