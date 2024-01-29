"use strict";
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const events_js_1 = require("../../conductor/events.js");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const console_helpers_js_1 = require("../helpers/console-helpers.js");
const memory_helpers_js_1 = require("../helpers/memory-helpers.js");
const network_helpers_js_1 = require("../helpers/network-helpers.js");
const SIMPLE_PAGE_REQUEST_NUMBER = 2;
const SIMPLE_PAGE_URL = `requests.html?num=${SIMPLE_PAGE_REQUEST_NUMBER}`;
const configureAndCheckHeaderOverrides = async () => {
    const infoBar = await (0, helper_js_1.waitForAria)('Select a folder to store override files in.');
    await (0, helper_js_1.click)('.infobar-main-row .infobar-button', {
        root: infoBar,
    });
    let networkView = await (0, helper_js_1.waitFor)('.network-item-view');
    await (0, helper_js_1.click)('#tab-headersComponent', {
        root: networkView,
    });
    await (0, helper_js_1.waitFor)('#tab-headersComponent[role=tab][aria-selected=true]', networkView);
    let responseHeaderSection = await (0, helper_js_1.waitFor)('[aria-label="Response Headers"]', networkView);
    let row = await (0, helper_js_1.waitFor)('.row', responseHeaderSection);
    chai_1.assert.deepStrictEqual(await (0, network_helpers_js_1.getTextFromHeadersRow)(row), ['cache-control:', 'max-age=3600']);
    await (0, helper_js_1.waitForFunction)(async () => {
        await (0, helper_js_1.click)('.header-name', { root: row });
        await (0, helper_js_1.click)('.header-value', { root: row });
        await (0, helper_js_1.pasteText)('Foo');
        return (await (0, network_helpers_js_1.getTextFromHeadersRow)(row))[1] === 'Foo';
    });
    await (0, helper_js_1.click)('[title="Reveal header override definitions"]');
    const headersView = await (0, helper_js_1.waitFor)('devtools-sources-headers-view');
    const headersViewRow = await (0, helper_js_1.waitFor)('.row.padded', headersView);
    chai_1.assert.deepStrictEqual(await (0, network_helpers_js_1.getTextFromHeadersRow)(headersViewRow), ['cache-control', 'Foo']);
    await (0, network_helpers_js_1.navigateToNetworkTab)('hello.html');
    await (0, network_helpers_js_1.selectRequestByName)('hello.html');
    networkView = await (0, helper_js_1.waitFor)('.network-item-view');
    await (0, helper_js_1.click)('#tab-headersComponent', {
        root: networkView,
    });
    responseHeaderSection = await (0, helper_js_1.waitFor)('[aria-label="Response Headers"]');
    row = await (0, helper_js_1.waitFor)('.row.header-overridden', responseHeaderSection);
    chai_1.assert.deepStrictEqual(await (0, network_helpers_js_1.getTextFromHeadersRow)(row), ['cache-control:', 'Foo']);
};
(0, mocha_extensions_js_1.describe)('The Network Request view', async () => {
    (0, mocha_extensions_js_1.it)('re-opens the same tab after switching to another panel and navigating back to the "Network" tab (https://crbug.com/1184578)', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)(SIMPLE_PAGE_URL);
        await (0, helper_js_1.step)('wait for all requests to be shown', async () => {
            await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(SIMPLE_PAGE_REQUEST_NUMBER + 1);
        });
        await (0, helper_js_1.step)('select the first SVG request', async () => {
            await (0, network_helpers_js_1.selectRequestByName)('image.svg?id=0');
        });
        await (0, helper_js_1.step)('select the "Timing" tab', async () => {
            const networkView = await (0, helper_js_1.waitFor)('.network-item-view');
            await (0, helper_js_1.click)('[aria-label=Timing][role="tab"]', {
                root: networkView,
            });
            await (0, helper_js_1.waitFor)('[aria-label=Timing][role=tab][aria-selected=true]', networkView);
        });
        await (0, helper_js_1.step)('open the "Console" panel', async () => {
            await (0, helper_js_1.click)(console_helpers_js_1.CONSOLE_TAB_SELECTOR);
            await (0, console_helpers_js_1.focusConsolePrompt)();
        });
        await (0, helper_js_1.step)('open the "Network" panel', async () => {
            await (0, helper_js_1.click)('#tab-network');
            await (0, helper_js_1.waitFor)('.network-log-grid');
        });
        await (0, helper_js_1.step)('ensure that the "Timing" tab is shown', async () => {
            const networkView = await (0, helper_js_1.waitFor)('.network-item-view');
            const selectedTabHeader = await (0, helper_js_1.waitFor)('[role=tab][aria-selected=true]', networkView);
            const selectedTabText = await selectedTabHeader.evaluate(element => element.textContent || '');
            chai_1.assert.strictEqual(selectedTabText, 'Timing');
        });
    });
    (0, mocha_extensions_js_1.it)('shows webbundle content on preview tab', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)('resources-from-webbundle.html');
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(3);
        await (0, network_helpers_js_1.selectRequestByName)('webbundle.wbn');
        const networkView = await (0, helper_js_1.waitFor)('.network-item-view');
        await (0, helper_js_1.click)('[aria-label=Preview][role=tab]', {
            root: networkView,
        });
        await (0, helper_js_1.waitFor)('[aria-label=Preview][role=tab][aria-selected=true]', networkView);
        await (0, helper_js_1.waitForElementWithTextContent)('webbundle.wbn', networkView);
        await (0, helper_js_1.waitForElementWithTextContent)('uuid-in-package:429fcc4e-0696-4bad-b099-ee9175f023ae', networkView);
        await (0, helper_js_1.waitForElementWithTextContent)('uuid-in-package:020111b3-437a-4c5c-ae07-adb6bbffb720', networkView);
    });
    // failing test blocking the roll
    mocha_extensions_js_1.it.skip('[crbug.com/1518454]: prevents requests on the preview tab.', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)('embedded_requests.html');
        // For the issue to manifest it's mandatory to load the stylesheet by absolute URL. A relative URL would be treated
        // relative to the data URL in the preview iframe and thus not work. We need to generate the URL because the
        // resources path is dynamic, but we can't have any scripts in the resource page since they would be disabled in the
        // preview. Therefore, the resource page contains just an iframe and we're filling it dynamically with content here.
        const stylesheet = `${(0, helper_js_1.getResourcesPath)()}/network/style.css`;
        const contents = `<head><link rel="stylesheet" href="${stylesheet}"></head><body><p>Content</p></body>`;
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.waitForFunction)(async () => (await target.$('iframe')) ?? undefined);
        const dataUrl = `data:text/html,${contents}`;
        await target.evaluate((dataUrl) => {
            document.querySelector('iframe').src = dataUrl;
        }, dataUrl);
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(3);
        const names = await (0, network_helpers_js_1.getAllRequestNames)();
        const name = names.find(v => v && v.startsWith('data:'));
        (0, helper_js_1.assertNotNullOrUndefined)(name);
        await (0, network_helpers_js_1.selectRequestByName)(name);
        const styleSrcError = (0, events_js_1.expectError)(`Refused to load the stylesheet '${stylesheet}'`);
        const networkView = await (0, helper_js_1.waitFor)('.network-item-view');
        await (0, helper_js_1.click)('[aria-label=Preview][role=tab]', {
            root: networkView,
        });
        await (0, helper_js_1.waitFor)('[aria-label=Preview][role=tab][aria-selected=true]', networkView);
        const frame = await (0, helper_js_1.waitFor)('.html-preview-frame');
        const content = await (0, helper_js_1.waitForFunction)(async () => (await frame.contentFrame() ?? undefined));
        const p = await (0, helper_js_1.waitForFunction)(async () => (await content.$('p') ?? undefined));
        const color = await p.evaluate(e => getComputedStyle(e).color);
        chai_1.assert.deepEqual(color, 'rgb(0, 0, 0)');
        await (0, helper_js_1.waitForFunction)(async () => await styleSrcError.caught);
    });
    // failing test blocking the roll
    mocha_extensions_js_1.it.skip('[crbug.com/1518454]: permits inline styles on the preview tab.', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)('embedded_requests.html');
        const contents = '<head><style>p { color: red; }</style></head><body><p>Content</p></body>';
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.waitForFunction)(async () => (await target.$('iframe')) ?? undefined);
        const dataUrl = `data:text/html,${contents}`;
        await target.evaluate((dataUrl) => {
            document.querySelector('iframe').src = dataUrl;
        }, dataUrl);
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(2);
        const names = await (0, network_helpers_js_1.getAllRequestNames)();
        const name = names.find(v => v && v.startsWith('data:'));
        (0, helper_js_1.assertNotNullOrUndefined)(name);
        await (0, network_helpers_js_1.selectRequestByName)(name);
        const networkView = await (0, helper_js_1.waitFor)('.network-item-view');
        await (0, helper_js_1.click)('[aria-label=Preview][role=tab]', {
            root: networkView,
        });
        await (0, helper_js_1.waitFor)('[aria-label=Preview][role=tab][aria-selected=true]', networkView);
        const frame = await (0, helper_js_1.waitFor)('.html-preview-frame');
        const content = await (0, helper_js_1.waitForFunction)(async () => (await frame.contentFrame() ?? undefined));
        const p = await (0, helper_js_1.waitForFunction)(async () => (await content.$('p') ?? undefined));
        const color = await p.evaluate(e => getComputedStyle(e).color);
        chai_1.assert.deepEqual(color, 'rgb(255, 0, 0)');
    });
    (0, mocha_extensions_js_1.it)('stores websocket filter', async () => {
        const navigateToWebsocketMessages = async () => {
            await (0, network_helpers_js_1.navigateToNetworkTab)('websocket.html');
            await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(2);
            await (0, network_helpers_js_1.selectRequestByName)('localhost');
            const networkView = await (0, helper_js_1.waitFor)('.network-item-view');
            await (0, helper_js_1.click)('[aria-label=Messages][role=tab]', {
                root: networkView,
            });
            await (0, helper_js_1.waitFor)('[aria-label=Messages][role=tab][aria-selected=true]', networkView);
            return (0, helper_js_1.waitFor)('.websocket-frame-view');
        };
        let messagesView = await navigateToWebsocketMessages();
        const waitForMessages = async (count) => {
            return (0, helper_js_1.waitForFunction)(async () => {
                const messages = await (0, helper_js_1.$$)('.data-column.websocket-frame-view-td', messagesView);
                if (messages.length !== count) {
                    return undefined;
                }
                return Promise.all(messages.map(message => {
                    return message.evaluate(message => message.textContent || '');
                }));
            });
        };
        let messages = await waitForMessages(4);
        const filterInput = await (0, helper_js_1.waitFor)('[aria-label="Enter regex, for example: (web)?socket"][role=textbox]', messagesView);
        await filterInput.focus();
        await (0, helper_js_1.typeText)('ping');
        messages = await waitForMessages(2);
        chai_1.assert.deepEqual(messages, ['ping', 'ping']);
        messagesView = await navigateToWebsocketMessages();
        messages = await waitForMessages(2);
        chai_1.assert.deepEqual(messages, ['ping', 'ping']);
    });
    function assertOutlineMatches(expectedPatterns, outline) {
        const regexpSpecialChars = /[-\/\\^$*+?.()|[\]{}]/g;
        for (const item of outline) {
            const expectedPattern = expectedPatterns.shift();
            if (expectedPattern) {
                chai_1.assert.match(item, new RegExp(expectedPattern.replace(regexpSpecialChars, '\\$&').replace(/%/g, '.*')));
            }
            else {
                chai_1.assert.fail('Unexpected text: ' + item);
            }
        }
    }
    (0, mocha_extensions_js_1.it)('shows request headers and payload', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)('headers-and-payload.html');
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(2);
        await (0, network_helpers_js_1.selectRequestByName)('image.svg?id=42&param=a%20b');
        const networkView = await (0, helper_js_1.waitFor)('.network-item-view');
        await (0, helper_js_1.click)('[aria-label=Headers][role="tab"]', {
            root: networkView,
        });
        await (0, helper_js_1.waitFor)('[aria-label=Headers][role=tab][aria-selected=true]', networkView);
        const expectedHeadersContent = [
            {
                aria: 'General',
                rows: [
                    'Request URL:',
                    'https://localhost:%/test/e2e/resources/network/image.svg?id=42&param=a%20b',
                    'Request Method:',
                    'POST',
                    'Status Code:',
                    '200 OK',
                    'Remote Address:',
                    '[::1]:%',
                    'Referrer Policy:',
                    'strict-origin-when-cross-origin',
                ],
            },
            {
                aria: 'Response Headers',
                rows: [
                    'cache-control:',
                    'max-age=%',
                    'connection:',
                    'keep-alive',
                    'content-type:',
                    'image/svg+xml; charset=utf-8',
                    'date:',
                    '%',
                    'keep-alive:',
                    'timeout=5',
                    'transfer-encoding:',
                    'chunked',
                    'vary:',
                    'Origin',
                ],
            },
            {
                aria: 'Request Headers',
                rows: [
                    'accept:',
                    '*/*',
                    'accept-encoding:',
                    '%',
                    'accept-language:',
                    '%',
                    'connection:',
                    'keep-alive',
                    'content-length:',
                    '32',
                    'content-type:',
                    'application/x-www-form-urlencoded;charset=UTF-8',
                    'host:',
                    'localhost:%',
                    'origin:',
                    'https://localhost:%',
                    'referer:',
                    'https://localhost:%/test/e2e/resources/network/headers-and-payload.html',
                    'sec-ch-ua:',
                    '%',
                    'sec-ch-ua-mobile:',
                    '?0',
                    'sec-ch-ua-platform:',
                    '%',
                    'sec-fetch-dest:',
                    'empty',
                    'sec-fetch-mode:',
                    'cors',
                    'sec-fetch-site:',
                    'same-origin',
                    'user-agent:',
                    'Mozilla/5.0 %',
                    'x-same-domain:',
                    '1',
                ],
            },
        ];
        for (const sectionContent of expectedHeadersContent) {
            const section = await (0, helper_js_1.waitFor)(`[aria-label="${sectionContent.aria}"]`);
            const rows = await (0, helper_js_1.$$)('.row', section);
            const rowsText = await (await Promise.all(rows.map(async (row) => await (0, network_helpers_js_1.getTextFromHeadersRow)(row)))).flat();
            assertOutlineMatches(sectionContent.rows, rowsText);
        }
        await (0, helper_js_1.click)('[aria-label=Payload][role="tab"]', {
            root: networkView,
        });
        await (0, helper_js_1.waitFor)('[aria-label=Payload][role=tab][aria-selected=true]', networkView);
        const payloadView = await (0, helper_js_1.waitFor)('.request-payload-view');
        const payloadOutline = await (0, helper_js_1.$$)('[role=treeitem]:not(.hidden)', payloadView);
        const payloadOutlineText = await Promise.all(payloadOutline.map(async (item) => item.evaluate(el => el.textContent || '')));
        const expectedPayloadContent = [
            'Query String Parameters (2)view sourceview URL-encoded',
            ['id: 42', 'param: a b'],
            'Form Data (4)view sourceview URL-encoded',
            [
                'foo: alpha',
                'bar: beta:42:0',
                'baz: ',
                '(empty)',
            ],
        ].flat();
        assertOutlineMatches(expectedPayloadContent, payloadOutlineText);
    });
    (0, mocha_extensions_js_1.it)('shows raw headers', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)('headers-and-payload.html');
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(2);
        await (0, network_helpers_js_1.selectRequestByName)('image.svg?id=42&param=a%20b');
        const networkView = await (0, helper_js_1.waitFor)('.network-item-view');
        await (0, helper_js_1.click)('[aria-label=Headers][role="tab"]', {
            root: networkView,
        });
        await (0, helper_js_1.waitFor)('[aria-label=Headers][role=tab][aria-selected=true]', networkView);
        const section = await (0, helper_js_1.waitFor)('[aria-label="Response Headers"]');
        await (0, helper_js_1.click)('input', {
            root: section,
        });
        const expectedRawHeadersContent = [
            'HTTP/1.1 200 OK',
            'Content-Type: image/svg+xml; charset=utf-8',
            'Cache-Control: max-age=%',
            'Vary: Origin',
            'Date: %',
            'Connection: keep-alive',
            'Keep-Alive: timeout=5',
            'Transfer-Encoding: chunked',
        ].join('\r\n');
        const rawHeaders = await (0, helper_js_1.waitFor)('.raw-headers', section);
        const rawHeadersText = await rawHeaders.evaluate(el => el.textContent || '');
        assertOutlineMatches([expectedRawHeadersContent], [rawHeadersText]);
        const expectedHeadersContent = [
            {
                aria: 'General',
                rows: [
                    'Request URL:',
                    'https://localhost:%/test/e2e/resources/network/image.svg?id=42&param=a%20b',
                    'Request Method:',
                    'POST',
                    'Status Code:',
                    '200 OK',
                    'Remote Address:',
                    '[::1]:%',
                    'Referrer Policy:',
                    'strict-origin-when-cross-origin',
                ],
            },
            {
                aria: 'Request Headers',
                rows: [
                    'accept:',
                    '*/*',
                    'accept-encoding:',
                    '%',
                    'accept-language:',
                    '%',
                    'connection:',
                    'keep-alive',
                    'content-length:',
                    '32',
                    'content-type:',
                    'application/x-www-form-urlencoded;charset=UTF-8',
                    'host:',
                    'localhost:%',
                    'origin:',
                    'https://localhost:%',
                    'referer:',
                    'https://localhost:%/test/e2e/resources/network/headers-and-payload.html',
                    'sec-ch-ua:',
                    '%',
                    'sec-ch-ua-mobile:',
                    '?0',
                    'sec-ch-ua-platform:',
                    '%',
                    'sec-fetch-dest:',
                    'empty',
                    'sec-fetch-mode:',
                    'cors',
                    'sec-fetch-site:',
                    'same-origin',
                    'user-agent:',
                    'Mozilla/5.0 %',
                    'x-same-domain:',
                    '1',
                ],
            },
        ];
        for (const sectionContent of expectedHeadersContent) {
            const section = await (0, helper_js_1.waitFor)(`[aria-label="${sectionContent.aria}"]`);
            const rows = await (0, helper_js_1.$$)('.row', section);
            const rowsText = await (await Promise.all(rows.map(async (row) => await (0, network_helpers_js_1.getTextFromHeadersRow)(row)))).flat();
            assertOutlineMatches(sectionContent.rows, rowsText);
        }
    });
    (0, mocha_extensions_js_1.it)('payload tab selection is preserved', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)('headers-and-payload.html');
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(3);
        await (0, network_helpers_js_1.selectRequestByName)('image.svg?id=42&param=a%20b');
        const networkView = await (0, helper_js_1.waitFor)('.network-item-view');
        await (0, helper_js_1.click)('[aria-label=Payload][role="tab"]', {
            root: networkView,
        });
        await (0, helper_js_1.waitFor)('[aria-label=Payload][role=tab][aria-selected=true]', networkView);
        await (0, network_helpers_js_1.selectRequestByName)('image.svg');
        await (0, helper_js_1.waitForElementWithTextContent)('foo: gamma');
    });
    (0, mocha_extensions_js_1.it)('no duplicate payload tab on headers update', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)('requests.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        target.evaluate(() => fetch('image.svg?delay'));
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(2);
        await (0, network_helpers_js_1.selectRequestByName)('image.svg?delay');
        await target.evaluate(async () => await fetch('/?send_delayed'));
    });
    (0, mocha_extensions_js_1.it)('can create header overrides via request\'s context menu', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)('hello.html');
        await (0, network_helpers_js_1.selectRequestByName)('hello.html', { button: 'right' });
        await (0, helper_js_1.click)('aria/Override headers');
        await configureAndCheckHeaderOverrides();
    });
    (0, mocha_extensions_js_1.it)('can create header overrides via header\'s pencil icon', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)('hello.html');
        await (0, network_helpers_js_1.selectRequestByName)('hello.html');
        const networkView = await (0, helper_js_1.waitFor)('.network-item-view');
        await (0, helper_js_1.click)('#tab-headersComponent', {
            root: networkView,
        });
        await (0, helper_js_1.click)('devtools-button.enable-editing');
        await configureAndCheckHeaderOverrides();
    });
    (0, mocha_extensions_js_1.it)('can search by headers name', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)('headers-and-payload.html');
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(2);
        await (0, network_helpers_js_1.selectRequestByName)('image.svg?id=42&param=a%20b');
        const SEARCH_QUERY = '[aria-label="Search Query"]';
        const SEARCH_RESULT = '.search-result';
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, memory_helpers_js_1.triggerLocalFindDialog)(frontend);
        await (0, helper_js_1.waitFor)(SEARCH_QUERY);
        const inputElement = await (0, helper_js_1.$)(SEARCH_QUERY);
        if (!inputElement) {
            chai_1.assert.fail('Unable to find search input field');
        }
        await inputElement.focus();
        await inputElement.type('Cache-Control');
        await frontend.keyboard.press('Enter');
        await (0, helper_js_1.waitFor)(SEARCH_RESULT);
    });
});
//# sourceMappingURL=network-request-view_test.js.map