// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Unittests for the chrome://enterprise-reporting element.
 */
import { EnterpriseReportingBrowserProxy } from 'chrome://enterprise-reporting/browser_proxy.js';
import { PageCallbackRouter, PageHandlerRemote } from 'chrome://enterprise-reporting/enterprise_reporting.mojom-webui.js';
import { ReportingHistoryElement } from 'chrome://enterprise-reporting/reporting_history.js';
import { assertEquals } from 'chrome://webui-test/chai_assert.js';
import { flushTasks } from 'chrome://webui-test/polymer_test_util.js';
import { TestMock } from 'chrome://webui-test/test_mock.js';
suite('enterprise_reporting', function () {
    let reportingHistoryElement;
    let callbackRouterRemote;
    let handler;
    // Number of cells in HTML row representing a single event, produced by
    // `chrome://enterprise_reporting/reporting_history.ts`:
    // `call`, `parameters`, `status` and `timestamp`.
    const numCellsInRow = 4;
    function installMock(clazz, installer) {
        installer = installer ||
            clazz.setInstance;
        const mock = TestMock.fromClass(clazz);
        installer(mock);
        return mock;
    }
    function getHistoryTable() {
        return reportingHistoryElement.$.body;
    }
    function timestampToString(timestampSeconds) {
        // Multiply by 1000 since the constructor expects milliseconds, but the
        // timestamps are in seconds.
        const timestamp = new Date(Number(timestampSeconds) * 1000);
        // For today's timestamp, show time only.
        const now = new Date();
        if (timestamp.getDate() === now.getDate()) {
            return timestamp.toLocaleTimeString();
        }
        // Otherwise show whole timestamp.
        return timestamp.toLocaleString();
    }
    function parametersMatch(expectedParameters, parameters) {
        const lines = parameters.querySelectorAll('li');
        assertEquals(expectedParameters.length, lines.length);
        lines.forEach((line, index) => {
            assertEquals((expectedParameters[index].name + ': ' +
                expectedParameters[index].value), line.innerText);
        });
    }
    function cellMatches(expectedEvent, row) {
        // Enumerate and match cells in the row.
        const cells = row.querySelectorAll('td');
        assertEquals(numCellsInRow, cells.length);
        assertEquals(expectedEvent.call, cells[0].innerText);
        parametersMatch(expectedEvent.parameters, cells[1]);
        assertEquals(expectedEvent.status, cells[2].innerText);
        assertEquals(timestampToString(expectedEvent.time), cells[3].innerText);
    }
    function rowsMatchInReverse(expectedHistory, rows) {
        // Enumerate and match all rows.
        assertEquals(expectedHistory.events.length, rows.length);
        rows.forEach((row, index) => {
            cellMatches(expectedHistory.events[expectedHistory.events.length - index - 1], row);
        });
    }
    function emptyMatch(rows) {
        // Check for empty case.
        assertEquals(1, rows.length);
        // Enumerate the cells.
        const cells = rows[0].querySelectorAll('td');
        assertEquals(numCellsInRow, cells.length);
        assertEquals('No events', cells[0].innerText);
        assertEquals('', cells[1].innerText);
        assertEquals('', cells[2].innerText);
        assertEquals('', cells[3].innerText);
    }
    async function setInitialSettings() {
        callbackRouterRemote.setErpHistoryData({ events: [] });
        handler.setResultFor('getDebugState', Promise.resolve({ state: true }));
        handler.setResultFor('getErpHistoryData', Promise.resolve({ events: [] }));
        reportingHistoryElement =
            document.createElement(ReportingHistoryElement.is);
        document.body.appendChild(reportingHistoryElement);
        await handler.whenCalled('getDebugState');
        await handler.whenCalled('getErpHistoryData');
    }
    setup(() => {
        handler = installMock(PageHandlerRemote, (mock) => EnterpriseReportingBrowserProxy.createInstanceForTest(mock, new PageCallbackRouter()));
        callbackRouterRemote = EnterpriseReportingBrowserProxy.getInstance()
            .callbackRouter.$.bindNewPipeAndPassRemote();
    });
    teardown(async () => {
        await callbackRouterRemote.$.flushForTesting();
        await flushTasks();
        reportingHistoryElement.remove();
    });
    test('create History Element and see that it is empty', async () => {
        await setInitialSettings();
        await callbackRouterRemote.$.flushForTesting();
        await handler.whenCalled('getErpHistoryData');
        await flushTasks();
        const table = getHistoryTable();
        emptyMatch(table.querySelectorAll('tr'));
    });
    test('create History Element and update it with data', async () => {
        await setInitialSettings();
        await callbackRouterRemote.$.flushForTesting();
        const event1 = {
            call: 'call',
            parameters: [{ name: 'seq_id', value: '345' }],
            status: 'OK',
            time: BigInt(123456789),
        };
        const event2 = {
            call: 'recall',
            parameters: [
                { name: 'seq_id', value: '123' },
                { name: 'count', value: '777' },
            ],
            status: 'Error',
            time: BigInt(987654321),
        };
        const event3 = {
            call: 'upload',
            parameters: [
                { name: 'seq_id', value: '123' },
                { name: 'seq_id', value: '456' },
                { name: 'seq_id', value: '789' },
            ],
            status: 'Success',
            time: BigInt(555666777),
        };
        const history = { events: [event1, event2, event3] };
        callbackRouterRemote.setErpHistoryData(history);
        await handler.whenCalled('getErpHistoryData');
        await flushTasks();
        const table = getHistoryTable();
        rowsMatchInReverse(history, table.querySelectorAll('tr'));
    });
});
