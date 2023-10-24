// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { isChromeOS, isLacros } from 'chrome://resources/js/platform.js';
import { Destination, DestinationOrigin, PrinterType } from './destination.js';
// 
import { DestinationProvisionalType } from './destination.js';
/**
 * @param type The type of printer to parse.
 * @param printer Information about the printer.
 *       Type expected depends on |type|:
 *       For LOCAL_PRINTER => LocalDestinationInfo
 *       For EXTENSION_PRINTER => ExtensionDestinationInfo
 * @return Destination, or null if an invalid value is provided for |type|.
 */
export function parseDestination(type, printer) {
    if (type === PrinterType.LOCAL_PRINTER || type === PrinterType.PDF_PRINTER) {
        return parseLocalDestination(printer);
    }
    if (type === PrinterType.EXTENSION_PRINTER) {
        return parseExtensionDestination(printer);
    }
    assertNotReached('Unknown printer type ' + type);
}
/**
 * @param destinationInfo Information describing a local print destination.
 * @return Parsed local print destination.
 */
function parseLocalDestination(destinationInfo) {
    const options = {
        description: destinationInfo.printerDescription,
        isEnterprisePrinter: destinationInfo.cupsEnterprisePrinter,
        location: '',
    };
    const locationOptions = new Set(['location', 'printer-location']);
    if (destinationInfo.printerOptions) {
        // The only printer option currently used by Print Preview's UI is location.
        for (const printerOption of Object.keys(destinationInfo.printerOptions)) {
            if (locationOptions.has(printerOption)) {
                options.location = destinationInfo.printerOptions[printerOption] || '';
            }
        }
    }
    return new Destination(destinationInfo.deviceName, (isChromeOS || isLacros) ? DestinationOrigin.CROS :
        DestinationOrigin.LOCAL, destinationInfo.printerName, options);
}
/**
 * Parses an extension destination from an extension supplied printer
 * description.
 */
export function parseExtensionDestination(destinationInfo) {
    // 
    const provisionalType = destinationInfo.provisional ?
        DestinationProvisionalType.NEEDS_USB_PERMISSION :
        DestinationProvisionalType.NONE;
    // 
    return new Destination(destinationInfo.id, DestinationOrigin.EXTENSION, destinationInfo.name, {
        description: destinationInfo.description || '',
        extensionId: destinationInfo.extensionId,
        extensionName: destinationInfo.extensionName || '',
        // 
        provisionalType: provisionalType,
        // 
    });
}
