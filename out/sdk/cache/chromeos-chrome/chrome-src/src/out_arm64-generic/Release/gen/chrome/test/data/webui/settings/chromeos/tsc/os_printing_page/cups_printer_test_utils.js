import { assertTrue } from 'chrome://webui-test/chai_assert.js';
export function createCupsPrinterInfo(printerName, printerAddress, printerId, isManaged = false) {
    const printer = {
        isManaged,
        ppdManufacturer: '',
        ppdModel: '',
        printerAddress,
        printerDescription: '',
        printerId,
        printerMakeAndModel: '',
        printerName,
        printerPPDPath: '',
        printerPpdReference: {
            userSuppliedPpdUrl: '',
            effectiveMakeAndModel: '',
            autoconf: false,
        },
        printerProtocol: 'ipp',
        printerQueue: 'moreinfohere',
        printServerUri: '',
    };
    return printer;
}
/**
 * Helper function that creates a new PrinterListEntry.
 */
export function createPrinterListEntry(printerName, printerAddress, printerId, printerType) {
    const entry = {
        printerInfo: {
            isManaged: false,
            ppdManufacturer: '',
            ppdModel: '',
            printerAddress,
            printerDescription: '',
            printerId,
            printerMakeAndModel: '',
            printerName,
            printerPPDPath: '',
            printerPpdReference: {
                userSuppliedPpdUrl: '',
                effectiveMakeAndModel: '',
                autoconf: false,
            },
            printerProtocol: 'ipp',
            printerQueue: 'moreinfohere',
            printServerUri: '',
        },
        printerType,
    };
    return entry;
}
/**
 * Helper method to pull an array of CupsPrinterEntry out of a
 * |printersElement|.
 */
export function getPrinterEntries(printersElement) {
    const entryList = printersElement.shadowRoot.querySelector('#printerEntryList');
    assertTrue(!!entryList);
    return entryList.querySelectorAll('settings-cups-printers-entry:not([hidden])');
}
