// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertDeepEquals, assertEquals, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { FakeChromeEvent } from 'chrome://webui-test/fake_chrome_event.js';
import { MockController, MockMethod } from 'chrome://webui-test/mock_controller.js';
import { isChildVisible } from 'chrome://webui-test/test_util.js';
/** A mock to test that clicking on an element calls a specific method. */
export class ClickMock {
    /**
     * Tests clicking on an element and expecting a call.
     * @param element The element to click on.
     * @param callName The function expected to be called.
     * @param expectedArgs The arguments the function is
     *     expected to be called with.
     * @param returnValue The value to return from the function call.
     */
    testClickingCalls(element, callName, expectedArgs, returnValue) {
        const mock = new MockController();
        const mockMethod = mock.createFunctionMock(this, callName);
        mockMethod.returnValue = returnValue;
        MockMethod.prototype.addExpectation.apply(mockMethod, expectedArgs);
        element.click();
        mock.verifyMocks();
    }
}
/**
 * A mock to test receiving expected events and verify that they were called
 * with the proper detail values.
 */
export class ListenerMock {
    listeners_ = {};
    onEvent_(eventName, e) {
        assertTrue(this.listeners_.hasOwnProperty(eventName));
        if (this.listeners_[eventName].satisfied) {
            // Event was already called and checked. We could always make this
            // more intelligent by allowing for subsequent calls, removing the
            // listener, etc, but there's no need right now.
            return;
        }
        const expected = this.listeners_[eventName].args || {};
        assertDeepEquals(e.detail, expected);
        this.listeners_[eventName].satisfied = true;
    }
    /**
     * Adds an expected event.
     * @param eventArgs If omitted, will check that the details
     *     are empty (i.e., {}).
     */
    addListener(target, eventName, eventArgs) {
        assertTrue(!this.listeners_.hasOwnProperty(eventName));
        this.listeners_[eventName] = { args: eventArgs || {}, satisfied: false };
        target.addEventListener(eventName, this.onEvent_.bind(this, eventName));
    }
    /** Verifies the expectations set. */
    verify() {
        const missingEvents = [];
        for (const key in this.listeners_) {
            if (!this.listeners_[key].satisfied) {
                missingEvents.push(key);
            }
        }
        assertEquals(0, missingEvents.length, JSON.stringify(missingEvents));
    }
}
/**
 * A mock delegate for the item, capable of testing functionality.
 */
export class MockItemDelegate extends ClickMock {
    itemStateChangedTarget = new FakeChromeEvent();
    deleteItem(_id) { }
    deleteItems(_ids) {
        return Promise.resolve();
    }
    uninstallItem(_id) {
        return Promise.resolve();
    }
    setItemSafetyCheckWarningAcknowledged(_id) { }
    setItemEnabled(_id, _isEnabled) { }
    setItemAllowedIncognito(_id, _isAllowedIncognito) { }
    setItemAllowedOnFileUrls(_id, _isAllowedOnFileUrls) { }
    setItemHostAccess(_id, _hostAccess) { }
    setItemCollectsErrors(_id, _collectsErrors) { }
    setItemPinnedToToolbar(_id, _pinnedToToolbar) { }
    inspectItemView(_id, _view) { }
    openUrl(_url) { }
    reloadItem(_id) {
        return Promise.resolve();
    }
    repairItem(_id) { }
    showItemOptionsPage(_extension) { }
    showInFolder(_id) { }
    getExtensionSize(_id) {
        return Promise.resolve('10 MB');
    }
    addRuntimeHostPermission(_id, _host) {
        return Promise.resolve();
    }
    removeRuntimeHostPermission(_id, _host) {
        return Promise.resolve();
    }
    setShowAccessRequestsInToolbar(_id, _showRequests) { }
    recordUserAction(_metricName) { }
    getItemStateChangedTarget() {
        return this.itemStateChangedTarget;
    }
}
/**
 * A mock to intercept User Action logging calls and verify how many times they
 * were called.
 */
export class MetricsPrivateMock {
    userActionMap = new Map();
    getUserActionCount(metricName) {
        return this.userActionMap.get(metricName) || 0;
    }
    recordUserAction(metricName) {
        this.userActionMap.set(metricName, this.getUserActionCount(metricName) + 1);
    }
}
export function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    return rect.width * rect.height > 0; // Width and height is never negative.
}
/**
 * Tests that the element's visibility matches |expectedVisible| and,
 * optionally, has specific content if it is visible.
 * @param parentEl The parent element to query for the element.
 * @param selector The selector to find the element.
 * @param expectedVisible Whether the element should be visible.
 * @param expectedText The expected textContent value.
 */
export function testVisible(parentEl, selector, expectedVisible, expectedText) {
    const visible = isChildVisible(parentEl, selector);
    assertEquals(expectedVisible, visible, selector);
    if (expectedVisible && visible && expectedText) {
        const element = parentEl.shadowRoot.querySelector(selector);
        assertEquals(expectedText, element.textContent.trim(), selector);
    }
}
/**
 * Creates an ExtensionInfo object.
 * @param properties A set of properties that will be used on the resulting
 *     ExtensionInfo (otherwise defaults will be used).
 */
export function createExtensionInfo(properties) {
    const id = properties && properties.hasOwnProperty('id') ? properties['id'] :
        'a'.repeat(32);
    const baseUrl = 'chrome-extension://' + id + '/';
    return Object.assign({
        commands: [],
        errorCollection: {
            isEnabled: false,
            isActive: false,
        },
        dependentExtensions: [],
        description: 'This is an extension',
        disableReasons: {
            suspiciousInstall: false,
            corruptInstall: false,
            updateRequired: false,
            publishedInStoreRequired: false,
            blockedByPolicy: false,
            custodianApprovalRequired: false,
            parentDisabledPermissions: false,
            reloading: false,
        },
        fileAccess: {
            isEnabled: false,
            isActive: false,
        },
        homePage: { specified: false, url: '' },
        iconUrl: 'chrome://extension-icon/' + id + '/24/0',
        id: id,
        incognitoAccess: { isEnabled: true, isActive: false },
        installWarnings: [],
        location: 'FROM_STORE',
        manifestErrors: [],
        manifestHomePageUrl: '',
        mustRemainInstalled: false,
        name: 'Wonderful Extension',
        offlineEnabled: false,
        runtimeErrors: [],
        runtimeWarnings: [],
        permissions: { simplePermissions: [], canAccessSiteData: false },
        state: 'ENABLED',
        type: 'EXTENSION',
        updateUrl: '',
        userMayModify: true,
        version: '2.0',
        views: [{ url: baseUrl + 'foo.html' }, { url: baseUrl + 'bar.html' }],
        webStoreUrl: '',
        showSafeBrowsingAllowlistWarning: false,
        showAccessRequestsInToolbar: false,
        acknowledgeSafetyCheckWarning: false,
    }, properties || {});
}
/**
 * Finds all nodes matching |query| under |root|, within self and children's
 * Shadow DOM.
 */
export function findMatches(root, query) {
    const elements = new Set();
    function doSearch(node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            const matches = node.querySelectorAll(query);
            for (const match of matches) {
                elements.add(match);
            }
        }
        let child = node.firstChild;
        while (child !== null) {
            doSearch(child);
            child = child.nextSibling;
        }
        const shadowRoot = node.shadowRoot;
        if (shadowRoot) {
            doSearch(shadowRoot);
        }
    }
    doSearch(root);
    return Array.from(elements);
}
