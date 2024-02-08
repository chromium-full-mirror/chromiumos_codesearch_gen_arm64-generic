"use strict";
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const hooks_js_1 = require("../../conductor/hooks.js");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const network_helpers_js_1 = require("../helpers/network-helpers.js");
async function getRequestRowInfo(frontend, name) {
    const statusColumn = await frontend.evaluate(() => {
        return Array.from(document.querySelectorAll('.status-column')).map(node => node.textContent);
    });
    const timeColumn = await frontend.evaluate(() => {
        return Array.from(document.querySelectorAll('.time-column')).map(node => node.textContent);
    });
    const typeColumn = await frontend.evaluate(() => {
        return Array.from(document.querySelectorAll('.type-column')).map(node => node.textContent);
    });
    const nameColumn = await frontend.evaluate(() => {
        return Array.from(document.querySelectorAll('.name-column')).map(node => node.textContent);
    });
    const index = nameColumn.findIndex(x => x === name);
    return { status: statusColumn[index], time: timeColumn[index], type: typeColumn[index] };
}
(0, mocha_extensions_js_1.describe)('The Network Tab', async function () {
    if (this.timeout() !== 0.0) {
        // These tests take some time on slow windows machines.
        this.timeout(10000);
    }
    const formatByteSize = (value) => {
        return `${value}\xA0B`;
    };
    beforeEach(async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)('empty.html');
        await (0, network_helpers_js_1.setCacheDisabled)(true);
        await (0, network_helpers_js_1.setPersistLog)(false);
    });
    afterEach(async () => {
        await (0, hooks_js_1.unregisterAllServiceWorkers)();
    });
    (0, mocha_extensions_js_1.it)('can click on checkbox label to toggle checkbox', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)('resources-from-cache.html');
        // Click the label next to the checkbox input element
        await (0, helper_js_1.click)('[title^="Disable cache"] + label');
        const checkbox = await (0, helper_js_1.waitFor)('[title^="Disable cache"]');
        const checked = await checkbox.evaluate(box => box.checked);
        chai_1.assert.strictEqual(checked, false, 'The disable cache checkbox should be unchecked');
    });
    (0, mocha_extensions_js_1.it)('shows Last-Modified', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, network_helpers_js_1.navigateToNetworkTab)('last-modified.html');
        // Reload to populate network request table
        await target.reload({ waitUntil: 'networkidle0' });
        await (0, helper_js_1.step)('Wait for the column to show up and populate its values', async () => {
            await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(2);
        });
        await (0, helper_js_1.step)('Open the contextmenu for all network column', async () => {
            await (0, helper_js_1.click)('.name-column', { clickOptions: { button: 'right' } });
        });
        await (0, helper_js_1.step)('Click "Response Headers" submenu', async () => {
            await (0, helper_js_1.click)('aria/Response Headers');
        });
        await (0, helper_js_1.step)('Enable the Last-Modified column in the network datagrid', async () => {
            await (0, helper_js_1.click)('aria/Last-Modified, unchecked');
        });
        await (0, helper_js_1.step)('Wait for the "Last-Modified" column to have the expected values', async () => {
            const expectedValues = JSON.stringify(['Last-Modified', '', 'Sun, 26 Sep 2010 22:04:35 GMT']);
            await (0, helper_js_1.waitForFunction)(async () => {
                const lastModifiedColumnValues = await frontend.$$eval('pierce/.last-modified-column', cells => cells.map(element => element.textContent));
                return JSON.stringify(lastModifiedColumnValues) === expectedValues;
            });
        });
    });
    (0, mocha_extensions_js_1.it)('shows size of chunked responses', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, network_helpers_js_1.navigateToNetworkTab)('chunked.txt?numChunks=5');
        // Reload to populate network request table
        await target.reload({ waitUntil: 'networkidle0' });
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(1);
        // Get the size of the first two network request responses (excluding header and favicon.ico).
        const getNetworkRequestSize = () => frontend.evaluate(() => {
            return Array.from(document.querySelectorAll('.size-column')).slice(1, 3).map(node => node.textContent);
        });
        chai_1.assert.deepEqual(await getNetworkRequestSize(), [
            `${formatByteSize(210)}${formatByteSize(25)}`,
        ]);
    });
    (0, mocha_extensions_js_1.it)('shows size of chunked responses for sync XHR', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, network_helpers_js_1.navigateToNetworkTab)('chunked_sync.html');
        // Reload to populate network request table
        await target.reload({ waitUntil: 'networkidle0' });
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(2);
        // Get the size of the first two network request responses (excluding header and favicon.ico).
        const getNetworkRequestSize = () => frontend.evaluate(() => {
            return Array.from(document.querySelectorAll('.size-column')).slice(1, 3).map(node => node.textContent);
        });
        chai_1.assert.deepEqual(await getNetworkRequestSize(), [
            `${formatByteSize(313)}${formatByteSize(128)}`,
            `${formatByteSize(210)}${formatByteSize(25)}`,
        ]);
    });
    (0, mocha_extensions_js_1.it)('the HTML response including cyrillic characters with utf-8 encoding', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, network_helpers_js_1.navigateToNetworkTab)('utf-8.rawresponse');
        // Reload to populate network request table
        await target.reload({ waitUntil: 'networkidle0' });
        // Wait for the column to show up and populate its values
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(1);
        // Open the HTML file that was loaded
        await (0, helper_js_1.click)('td.name-column');
        // Open the raw response HTML
        await (0, helper_js_1.click)('[aria-label="Response"]');
        // Disable pretty printing
        await (0, helper_js_1.waitFor)('[aria-label="Pretty print"]');
        await Promise.all([
            (0, helper_js_1.click)('[aria-label="Pretty print"]'),
            (0, helper_js_1.waitFor)('[aria-label="Pretty print"][aria-pressed="true"]'),
        ]);
        // Wait for the raw response editor to show up
        const codeMirrorEditor = await (0, helper_js_1.waitFor)('[aria-label="Code editor"]');
        const htmlRawResponse = await codeMirrorEditor.evaluate(editor => editor.textContent);
        chai_1.assert.strictEqual(htmlRawResponse, '<html>    <body>The following word is written using cyrillic letters and should look like "SUCCESS": SU\u0421\u0421\u0415SS.</body></html>');
    });
    (0, mocha_extensions_js_1.it)('the correct MIME type when resources came from HTTP cache', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, network_helpers_js_1.navigateToNetworkTab)('resources-from-cache.html');
        // Reload the page without a cache, to force a fresh load of the network resources
        await (0, network_helpers_js_1.setCacheDisabled)(true);
        await target.reload({ waitUntil: 'networkidle0' });
        // Wait for the column to show up and populate its values
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(2);
        // Get the size of the first two network request responses (excluding header and favicon.ico).
        const getNetworkRequestSize = () => frontend.evaluate(() => {
            return Array.from(document.querySelectorAll('.size-column')).slice(1, 3).map(node => node.textContent);
        });
        const getNetworkRequestMimeTypes = () => frontend.evaluate(() => {
            return Array.from(document.querySelectorAll('.type-column')).slice(1, 3).map(node => node.textContent);
        });
        chai_1.assert.deepEqual(await getNetworkRequestSize(), [
            `${formatByteSize(404)}${formatByteSize(219)}`,
            `${formatByteSize(376)}${formatByteSize(28)}`,
        ]);
        chai_1.assert.deepEqual(await getNetworkRequestMimeTypes(), [
            'document',
            'script',
        ]);
        // Allow resources from the cache again and reload the page to load from cache
        await (0, network_helpers_js_1.setCacheDisabled)(false);
        await target.reload({ waitUntil: 'networkidle0' });
        // Wait for the column to show up and populate its values
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(2);
        chai_1.assert.deepEqual(await getNetworkRequestSize(), [
            `${formatByteSize(404)}${formatByteSize(219)}`,
            `(memory cache)${formatByteSize(28)}`,
        ]);
        chai_1.assert.deepEqual(await getNetworkRequestMimeTypes(), [
            'document',
            'script',
        ]);
    });
    (0, mocha_extensions_js_1.it)('shows the correct initiator address space', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, network_helpers_js_1.navigateToNetworkTab)('fetch.html');
        // Reload to populate network request table
        await target.reload({ waitUntil: 'networkidle0' });
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(2);
        await (0, helper_js_1.step)('Open the contextmenu for all network column', async () => {
            await (0, helper_js_1.click)('.name-column', { clickOptions: { button: 'right' } });
        });
        await (0, helper_js_1.step)('Enable the Initiator Address Space column in the network datagrid', async () => {
            await (0, helper_js_1.click)('aria/Initiator Address Space, unchecked');
        });
        await (0, helper_js_1.step)('Wait for the Initiator Address Space column to have the expected values', async () => {
            const expectedValues = JSON.stringify(['Initiator Address Space', '', 'Local']);
            await (0, helper_js_1.waitForFunction)(async () => {
                const initiatorAddressSpaceValues = await frontend.$$eval('pierce/.initiator-address-space-column', cells => cells.map(element => element.textContent));
                return JSON.stringify(initiatorAddressSpaceValues) === expectedValues;
            });
        });
    });
    (0, mocha_extensions_js_1.it)('shows the correct remote address space', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, network_helpers_js_1.navigateToNetworkTab)('fetch.html');
        // Reload to populate network request table
        await target.reload({ waitUntil: 'networkidle0' });
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(2);
        await (0, helper_js_1.step)('Open the contextmenu for all network column', async () => {
            await (0, helper_js_1.click)('.name-column', { clickOptions: { button: 'right' } });
        });
        await (0, helper_js_1.step)('Enable the Remote Address Space column in the network datagrid', async () => {
            await (0, helper_js_1.click)('aria/Remote Address Space, unchecked');
        });
        await (0, helper_js_1.step)('Wait for the Remote Address Space column to have the expected values', async () => {
            const expectedValues = JSON.stringify(['Remote Address Space', 'Local', 'Local']);
            await (0, helper_js_1.waitForFunction)(async () => {
                const remoteAddressSpaceValues = await frontend.$$eval('pierce/.remoteaddress-space-column', cells => cells.map(element => element.textContent));
                return JSON.stringify(remoteAddressSpaceValues) === expectedValues;
            });
        });
    });
    (0, mocha_extensions_js_1.it)('indicates resources from the web bundle in the size column', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, network_helpers_js_1.navigateToNetworkTab)('resources-from-webbundle.html');
        await target.reload({ waitUntil: 'networkidle0' });
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(3);
        await (0, helper_js_1.waitForElementWithTextContent)(`(Web Bundle)${formatByteSize(27)}`);
        const getNetworkRequestSize = () => frontend.evaluate(() => {
            return Array.from(document.querySelectorAll('.size-column')).slice(2, 4).map(node => node.textContent);
        });
        chai_1.assert.sameMembers(await getNetworkRequestSize(), [
            `${formatByteSize(653)}${formatByteSize(0)}`,
            `(Web Bundle)${formatByteSize(27)}`,
        ]);
    });
    (0, mocha_extensions_js_1.it)('shows web bundle metadata error in the status column', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, network_helpers_js_1.navigateToNetworkTab)('resources-from-webbundle-with-bad-metadata.html');
        await target.reload({ waitUntil: 'networkidle0' });
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(3);
        await (0, helper_js_1.waitForElementWithTextContent)('Web Bundle error');
        await (0, helper_js_1.waitForFunction)(async () => {
            const [nameColumn, statusColumn] = await frontend.evaluate(() => {
                return [
                    Array.from(document.querySelectorAll('.name-column')).map(node => node.textContent),
                    Array.from(document.querySelectorAll('.status-column')).map(node => node.textContent),
                ];
            });
            const webBundleStatus = statusColumn[nameColumn.indexOf('webbundle_bad_metadata.wbn/test/e2e/resources/network')];
            const webBundleInnerRequestStatus = statusColumn[nameColumn.indexOf('uuid-in-package:020111b3-437a-4c5c-ae07-adb6bbffb720')];
            return webBundleStatus === 'Web Bundle error' &&
                (webBundleInnerRequestStatus === '(failed)net::ERR_INVALID_WEB_BUNDLE' ||
                    // There's a race in the renderer where the subresource request will
                    // be canceled if it hasn't finished before parsing the metadata failed.
                    webBundleInnerRequestStatus === '(canceled)');
        });
    });
    (0, mocha_extensions_js_1.it)('shows web bundle inner request error in the status column', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, network_helpers_js_1.navigateToNetworkTab)('resources-from-webbundle-with-bad-inner-request.html');
        await target.reload({ waitUntil: 'networkidle0' });
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(3);
        await (0, helper_js_1.waitForElementWithTextContent)('Web Bundle error');
        const getNetworkRequestSize = () => frontend.evaluate(() => {
            return Array.from(document.querySelectorAll('.status-column')).slice(2, 4).map(node => node.textContent);
        });
        chai_1.assert.sameMembers(await getNetworkRequestSize(), ['200OK', 'Web Bundle error']);
    });
    (0, mocha_extensions_js_1.it)('shows web bundle icons', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, network_helpers_js_1.navigateToNetworkTab)('resources-from-webbundle.html');
        await (0, network_helpers_js_1.setCacheDisabled)(true);
        await target.reload({ waitUntil: 'networkidle0' });
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(3);
        await (0, helper_js_1.waitFor)('.name-column > [role="link"] > .icon');
        const getNetworkRequestIcons = () => frontend.evaluate(() => {
            return Array.from(document.querySelectorAll('.name-column > .icon'))
                .slice(1, 4)
                .map(node => node.title);
        });
        chai_1.assert.sameMembers(await getNetworkRequestIcons(), [
            'Script',
            'WebBundle',
        ]);
        const getFromWebBundleIcons = () => frontend.evaluate(() => {
            return Array.from(document.querySelectorAll('.name-column > [role="link"] > .icon'))
                .map(node => node.title);
        });
        chai_1.assert.sameMembers(await getFromWebBundleIcons(), [
            'Served from Web Bundle',
        ]);
    });
    (0, mocha_extensions_js_1.it)('shows preserved pending requests as unknown', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, network_helpers_js_1.navigateToNetworkTab)('send_beacon_on_unload.html');
        await (0, network_helpers_js_1.setCacheDisabled)(true);
        await target.bringToFront();
        await target.reload({ waitUntil: 'networkidle0' });
        await frontend.bringToFront();
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(1);
        await (0, network_helpers_js_1.setPersistLog)(true);
        await (0, network_helpers_js_1.navigateToNetworkTab)('fetch.html');
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(1);
        // We need to wait for the network log to update.
        await (0, helper_js_1.waitForFunction)(async () => {
            const { status } = await getRequestRowInfo(frontend, 'sendBeacon');
            // Depending on timing of the reporting, the status infomation (404) might reach DevTools in time.
            return (status === '(unknown)' || status === '404Not Found');
        });
    });
    (0, mocha_extensions_js_1.it)('repeats xhr request on "r" shortcut when the request is focused', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, network_helpers_js_1.navigateToNetworkTab)('xhr.html');
        await target.reload({ waitUntil: 'networkidle0' });
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(2);
        await (0, network_helpers_js_1.selectRequestByName)('image.svg');
        await (0, network_helpers_js_1.waitForSelectedRequestChange)(null);
        await (0, helper_js_1.pressKey)('r');
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(3);
        const updatedRequestNames = await (0, network_helpers_js_1.getAllRequestNames)();
        chai_1.assert.deepStrictEqual(updatedRequestNames, ['xhr.html', 'image.svg', 'image.svg']);
    });
    (0, mocha_extensions_js_1.it)('displays focused background color when request is selected via keyboard navigation', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, network_helpers_js_1.navigateToNetworkTab)('xhr.html');
        await target.reload({ waitUntil: 'networkidle0' });
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(2);
        await (0, network_helpers_js_1.selectRequestByName)('xhr.html');
        await (0, helper_js_1.pressKey)('ArrowDown');
        const getSelectedRequestBgColor = () => frontend.evaluate(() => {
            return document.querySelector('.network-log-grid tbody tr.selected')?.getAttribute('style');
        });
        chai_1.assert.deepStrictEqual(await getSelectedRequestBgColor(), 'background-color: var(--color-grid-focus-selected);');
    });
    (0, mocha_extensions_js_1.it)('shows the request panel when clicked during a websocket message (https://crbug.com/1222382)', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)('websocket.html?infiniteMessages=true');
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(2);
        // WebSocket messages get sent every 100 milliseconds, so holding the mouse
        // down for 300 milliseconds should suffice.
        await (0, network_helpers_js_1.selectRequestByName)('localhost', { delay: 300 });
        await (0, helper_js_1.waitFor)('.network-item-view');
    });
    (0, mocha_extensions_js_1.it)('shows the main service worker request as complete', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        const promises = [
            (0, helper_js_1.waitForFunction)(async () => {
                const { status, type } = await getRequestRowInfo(frontend, 'service-worker.html/test/e2e/resources/network');
                return status === '200OK' && type === 'document';
            }),
            (0, helper_js_1.waitForFunction)(async () => {
                const { status, type } = await getRequestRowInfo(frontend, '⚙ service-worker.jslocalhost/test/e2e/resources/network');
                return status === 'Finished' && type === 'script';
            }),
        ];
        await (0, network_helpers_js_1.navigateToNetworkTab)('service-worker.html');
        await target.waitForSelector('xpath///div[@id="content" and text()="pong"]');
        await Promise.all(promises);
    });
});
//# sourceMappingURL=network-datagrid_test.js.map