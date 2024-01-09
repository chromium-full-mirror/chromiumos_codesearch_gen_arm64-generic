// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://office-fallback/office_fallback_dialog.js';
import { DialogChoice, PageHandlerRemote } from 'chrome://office-fallback/office_fallback.mojom-webui.js';
import { OfficeFallbackBrowserProxy } from 'chrome://office-fallback/office_fallback_browser_proxy.js';
import { assertDeepEquals, assertEquals } from 'chrome://webui-test/chai_assert.js';
import { TestMock } from 'chrome://webui-test/test_mock.js';
/**
 * A test OfficeFallbackBrowserProxy implementation that enables to mock various
 * mojo responses.
 */
class OfficeFallbackTestBrowserProxy {
    handler;
    dialogArgs;
    constructor() {
        this.handler = TestMock.fromClass(PageHandlerRemote);
        // Creating JSON string as in OfficeFallbackDialog::GetDialogArgs().
        const args = {
            'titleText': 'a title',
            'reasonMessage': 'a reason',
            'instructionsMessage': 'an instruction',
        };
        this.dialogArgs = JSON.stringify(args);
    }
    // JSON-encoded dialog arguments.
    getDialogArguments() {
        return this.dialogArgs;
    }
}
suite('<office-fallback>', () => {
    // Holds the <cloud-upload> app.
    let container;
    // The <office-fallback> app.
    let officeFallbackApp;
    // The BrowserProxy element to make assertions on when mojo methods are
    // called.
    let testProxy;
    const setUp = async () => {
        testProxy = new OfficeFallbackTestBrowserProxy();
        OfficeFallbackBrowserProxy.setInstance(testProxy);
        // Creates and attaches the <office-fallback> element to the DOM tree.
        officeFallbackApp = document.createElement('office-fallback');
        container.appendChild(officeFallbackApp);
    };
    /**
     * Runs prior to all the tests running, attaches a div to enable isolated
     * clearing and attaching of the web component.
     */
    suiteSetup(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });
    /**
     * Runs after each test. Removes all elements from the <div> that holds
     * the <cloud-upload> component.
     */
    teardown(() => {
        container.innerHTML = window.trustedTypes.emptyHTML;
        testProxy.handler.reset();
    });
    /**
     * Tests that clicking the "quick office" button triggers the right `close`
     * mojo request.
     */
    test('Open in offline editor button', async () => {
        await setUp();
        officeFallbackApp.$('#quick-office-button').click();
        await testProxy.handler.whenCalled('close');
        assertEquals(1, testProxy.handler.getCallCount('close'));
        assertDeepEquals([DialogChoice.kQuickOffice], testProxy.handler.getArgs('close'));
    });
    /**
     * Tests that clicking the "try again" button triggers the right `close`
     * mojo request.
     */
    test('Try again button', async () => {
        await setUp();
        officeFallbackApp.$('#try-again-button').click();
        await testProxy.handler.whenCalled('close');
        assertEquals(1, testProxy.handler.getCallCount('close'));
        assertDeepEquals([DialogChoice.kTryAgain], testProxy.handler.getArgs('close'));
    });
    /**
     * Tests that clicking the "close" button triggers the right `close`
     * mojo request.
     */
    test('Close button', async () => {
        await setUp();
        officeFallbackApp.$('#cancel-button').click();
        await testProxy.handler.whenCalled('close');
        assertEquals(1, testProxy.handler.getCallCount('close'));
        assertDeepEquals([DialogChoice.kCancel], testProxy.handler.getArgs('close'));
    });
});
