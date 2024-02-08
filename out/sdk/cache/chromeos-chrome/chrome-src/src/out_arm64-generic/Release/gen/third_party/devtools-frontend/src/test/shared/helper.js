"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectTextFromNodeToNode = exports.tabBackward = exports.tabForward = exports.activeElementAccessibleName = exports.activeElementTextContent = exports.activeElement = exports.waitForAnimationFrame = exports.step = exports.getResourcesPath = exports.goToResourceWithCustomHost = exports.goToResource = exports.clearPermissionsOverride = exports.overridePermissions = exports.goTo = exports.setDevToolsSettings = exports.disableExperiment = exports.enableExperiment = exports.logFailure = exports.logToStdOut = exports.debuggerStatement = exports.waitForWithTries = exports.waitForFunctionWithTries = exports.waitForFunction = exports.TIMEOUT_ERROR_MESSAGE = exports.waitForNoElementsWithTextContent = exports.waitForElementsWithTextContent = exports.waitForElementWithTextContent = exports.waitForAriaNone = exports.waitForAria = exports.waitForNone = exports.waitForMany = exports.waitForVisible = exports.waitFor = exports.getVisibleTextContents = exports.getTextContent = exports.timeout = exports.$$textContent = exports.$textContent = exports.$$ = exports.$ = exports.pasteText = exports.pressKey = exports.typeText = exports.doubleClick = exports.hoverElement = exports.clickElement = exports.hover = exports.click = exports.withControlOrMetaKey = exports.platform = void 0;
exports.raf = exports.replacePuppeteerUrl = exports.summonSearchBox = exports.setCheckBox = exports.renderCoordinatorQueueEmpty = exports.matchStringTable = exports.assertMatchArray = exports.matchStringArray = exports.matchTable = exports.assertOk = exports.matchArray = exports.matchString = exports.reloadDevTools = exports.getTestServerPort = exports.getDevToolsFrontendHostname = exports.getBrowserAndPages = exports.assertNotNullOrUndefined = exports.waitForClass = exports.hasClass = exports.waitForEvent = exports.prepareWaitForEvent = exports.getPendingEvents = exports.installEventListener = exports.scrollElementIntoView = exports.selectOption = exports.logOutstandingCDP = exports.enableCDPTracking = exports.enableCDPLogging = exports.closeAllCloseableTabs = exports.closePanelTab = void 0;
const chai_1 = require("chai");
const os = require("os");
const hooks_js_1 = require("../conductor/hooks.js");
Object.defineProperty(exports, "getDevToolsFrontendHostname", { enumerable: true, get: function () { return hooks_js_1.getDevToolsFrontendHostname; } });
Object.defineProperty(exports, "reloadDevTools", { enumerable: true, get: function () { return hooks_js_1.reloadDevTools; } });
const puppeteer_state_js_1 = require("../conductor/puppeteer-state.js");
Object.defineProperty(exports, "getBrowserAndPages", { enumerable: true, get: function () { return puppeteer_state_js_1.getBrowserAndPages; } });
Object.defineProperty(exports, "getTestServerPort", { enumerable: true, get: function () { return puppeteer_state_js_1.getTestServerPort; } });
const test_runner_config_js_1 = require("../conductor/test_runner_config.js");
const async_scope_js_1 = require("./async-scope.js");
switch (os.platform()) {
    case 'darwin':
        exports.platform = 'mac';
        break;
    case 'win32':
        exports.platform = 'win32';
        break;
    default:
        exports.platform = 'linux';
        break;
}
// TODO: Remove once Chromium updates its version of Node.js to 12+.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalThis = global;
const CONTROL_OR_META = exports.platform === 'mac' ? 'Meta' : 'Control';
const withControlOrMetaKey = async (action, root = (0, puppeteer_state_js_1.getBrowserAndPages)().frontend) => {
    await (0, exports.waitForFunction)(async () => {
        await root.keyboard.down(CONTROL_OR_META);
        try {
            await action();
            return true;
        }
        finally {
            await root.keyboard.up(CONTROL_OR_META);
        }
    });
};
exports.withControlOrMetaKey = withControlOrMetaKey;
const click = async (selector, options) => {
    return await performActionOnSelector(selector, { root: options?.root }, element => element.click(options?.clickOptions));
};
exports.click = click;
const hover = async (selector, options) => {
    return await performActionOnSelector(selector, { root: options?.root }, element => element.hover());
};
exports.hover = hover;
async function performActionOnSelector(selector, options, action) {
    // TODO(crbug.com/1410168): we should refactor waitFor to be compatible with
    // Puppeteer's syntax for selectors.
    const queryHandlers = new Set([
        'pierceShadowText',
        'pierce',
        'aria',
        'xpath',
        'text',
    ]);
    let queryHandler = 'pierce';
    for (const handler of queryHandlers) {
        const prefix = handler + '/';
        if (selector.startsWith(prefix)) {
            queryHandler = handler;
            selector = selector.substring(prefix.length);
            break;
        }
    }
    return (0, exports.waitForFunction)(async () => {
        const element = await (0, exports.waitFor)(selector, options?.root, undefined, queryHandler);
        try {
            await action(element);
            return element;
        }
        catch (err) {
            // A bit of delay to not retry too often.
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        return undefined;
    });
}
/**
 * @deprecated This method is not able to recover from unstable DOM. Use click(selector) instead.
 */
async function clickElement(element, options) {
    // Retries here just in case the element gets connected to DOM / becomes visible.
    await (0, exports.waitForFunction)(async () => {
        try {
            await element.click(options?.clickOptions);
            return true;
        }
        catch {
            return false;
        }
    });
}
exports.clickElement = clickElement;
/**
 * @deprecated This method is not able to recover from unstable DOM. Use hover(selector) instead.
 */
async function hoverElement(element) {
    // Retries here just in case the element gets connected to DOM / becomes visible.
    await (0, exports.waitForFunction)(async () => {
        try {
            await element.hover();
            return true;
        }
        catch {
            return false;
        }
    });
}
exports.hoverElement = hoverElement;
const doubleClick = async (selector, options) => {
    const passedClickOptions = (options && options.clickOptions) || {};
    const clickOptionsWithDoubleClick = {
        ...passedClickOptions,
        clickCount: 2,
    };
    return (0, exports.click)(selector, {
        ...options,
        clickOptions: clickOptionsWithDoubleClick,
    });
};
exports.doubleClick = doubleClick;
const typeText = async (text) => {
    const { frontend } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    await frontend.keyboard.type(text);
};
exports.typeText = typeText;
const pressKey = async (key, modifiers) => {
    const { frontend } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    if (modifiers) {
        if (modifiers.control) {
            if (exports.platform === 'mac') {
                // Use command key on mac
                await frontend.keyboard.down('Meta');
            }
            else {
                await frontend.keyboard.down('Control');
            }
        }
        if (modifiers.alt) {
            await frontend.keyboard.down('Alt');
        }
        if (modifiers.shift) {
            await frontend.keyboard.down('Shift');
        }
    }
    await frontend.keyboard.press(key);
    if (modifiers) {
        if (modifiers.shift) {
            await frontend.keyboard.up('Shift');
        }
        if (modifiers.alt) {
            await frontend.keyboard.up('Alt');
        }
        if (modifiers.control) {
            if (exports.platform === 'mac') {
                // Use command key on mac
                await frontend.keyboard.up('Meta');
            }
            else {
                await frontend.keyboard.up('Control');
            }
        }
    }
};
exports.pressKey = pressKey;
const pasteText = async (text) => {
    const { frontend } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    await frontend.keyboard.sendCharacter(text);
};
exports.pasteText = pasteText;
// Get a single element handle. Uses `pierce` handler per default for piercing Shadow DOM.
const $ = async (selector, root, handler = 'pierce') => {
    const { frontend } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    const rootElement = root ? root : frontend;
    const element = await rootElement.$(`${handler}/${selector}`);
    return element;
};
exports.$ = $;
// Get multiple element handles. Uses `pierce` handler per default for piercing Shadow DOM.
const $$ = async (selector, root, handler = 'pierce') => {
    const { frontend } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    const rootElement = root ? root.asElement() || frontend : frontend;
    const elements = await rootElement.$$(`${handler}/${selector}`);
    return elements;
};
exports.$$ = $$;
/**
 * Search for an element based on its textContent.
 *
 * @param textContent The text content to search for.
 * @param root The root of the search.
 */
const $textContent = async (textContent, root) => {
    return (0, exports.$)(textContent, root, 'pierceShadowText');
};
exports.$textContent = $textContent;
/**
 * Search for all elements based on their textContent
 *
 * @param textContent The text content to search for.
 * @param root The root of the search.
 */
const $$textContent = async (textContent, root) => {
    return (0, exports.$$)(textContent, root, 'pierceShadowText');
};
exports.$$textContent = $$textContent;
const timeout = (duration) => new Promise(resolve => setTimeout(resolve, duration));
exports.timeout = timeout;
const getTextContent = async (selector, root) => {
    const text = await (await (0, exports.$)(selector, root))?.evaluate(node => node.textContent);
    return text ?? undefined;
};
exports.getTextContent = getTextContent;
/**
 * Match multiple elements based on a selector and return their textContents, but only for those
 * elements that are visible.
 *
 * @param selector jquery selector to match
 * @returns array containing text contents from visible elements
 */
const getVisibleTextContents = async (selector) => {
    const allElements = await (0, exports.$$)(selector);
    const texts = await Promise.all(allElements.map(el => el.evaluate(node => node.checkVisibility() ? node.textContent?.trim() : undefined)));
    return texts.filter(content => typeof (content) === 'string');
};
exports.getVisibleTextContents = getVisibleTextContents;
const waitFor = async (selector, root, asyncScope = new async_scope_js_1.AsyncScope(), handler) => {
    return await asyncScope.exec(() => (0, exports.waitForFunction)(async () => {
        const element = await (0, exports.$)(selector, root, handler);
        return (element || undefined);
    }, asyncScope), `Waiting for element matching selector '${selector}'`);
};
exports.waitFor = waitFor;
const waitForVisible = async (selector, root, asyncScope = new async_scope_js_1.AsyncScope(), handler) => {
    return await asyncScope.exec(() => (0, exports.waitForFunction)(async () => {
        const element = await (0, exports.$)(selector, root, handler);
        const visible = await element.evaluate(node => node.checkVisibility());
        return visible ? element : undefined;
    }, asyncScope), `Waiting for element matching selector '${selector}' to be visible`);
};
exports.waitForVisible = waitForVisible;
const waitForMany = async (selector, count, root, asyncScope = new async_scope_js_1.AsyncScope(), handler) => {
    return await asyncScope.exec(() => (0, exports.waitForFunction)(async () => {
        const elements = await (0, exports.$$)(selector, root, handler);
        return elements.length >= count ? elements : undefined;
    }, asyncScope), `Waiting for ${count} elements to match selector '${selector}'`);
};
exports.waitForMany = waitForMany;
const waitForNone = async (selector, root, asyncScope = new async_scope_js_1.AsyncScope(), handler) => {
    return await asyncScope.exec(() => (0, exports.waitForFunction)(async () => {
        const elements = await (0, exports.$$)(selector, root, handler);
        if (elements.length === 0) {
            return true;
        }
        return false;
    }, asyncScope), `Waiting for no elements to match selector '${selector}'`);
};
exports.waitForNone = waitForNone;
const waitForAria = (selector, root, asyncScope = new async_scope_js_1.AsyncScope()) => {
    return (0, exports.waitFor)(selector, root, asyncScope, 'aria');
};
exports.waitForAria = waitForAria;
const waitForAriaNone = (selector, root, asyncScope = new async_scope_js_1.AsyncScope()) => {
    return (0, exports.waitForNone)(selector, root, asyncScope, 'aria');
};
exports.waitForAriaNone = waitForAriaNone;
const waitForElementWithTextContent = (textContent, root, asyncScope = new async_scope_js_1.AsyncScope()) => {
    return (0, exports.waitFor)(textContent, root, asyncScope, 'pierceShadowText');
};
exports.waitForElementWithTextContent = waitForElementWithTextContent;
const waitForElementsWithTextContent = (textContent, root, asyncScope = new async_scope_js_1.AsyncScope()) => {
    return asyncScope.exec(() => (0, exports.waitForFunction)(async () => {
        const elems = await (0, exports.$$textContent)(textContent, root);
        if (elems && elems.length) {
            return elems;
        }
        return undefined;
    }, asyncScope), `Waiting for elements with textContent '${textContent}'`);
};
exports.waitForElementsWithTextContent = waitForElementsWithTextContent;
const waitForNoElementsWithTextContent = (textContent, root, asyncScope = new async_scope_js_1.AsyncScope()) => {
    return asyncScope.exec(() => (0, exports.waitForFunction)(async () => {
        const elems = await (0, exports.$$textContent)(textContent, root);
        if (elems && elems.length === 0) {
            return true;
        }
        return false;
    }, asyncScope), `Waiting for no elements with textContent '${textContent}'`);
};
exports.waitForNoElementsWithTextContent = waitForNoElementsWithTextContent;
exports.TIMEOUT_ERROR_MESSAGE = 'Test timed out';
const waitForFunction = async (fn, asyncScope = new async_scope_js_1.AsyncScope(), description) => {
    const innerFunction = async () => {
        while (true) {
            if (asyncScope.isCanceled()) {
                throw new Error(exports.TIMEOUT_ERROR_MESSAGE);
            }
            const result = await fn();
            if (result) {
                return result;
            }
            await (0, exports.timeout)(100);
        }
    };
    return await asyncScope.exec(innerFunction, description);
};
exports.waitForFunction = waitForFunction;
const waitForFunctionWithTries = async (fn, options = {
    tries: Number.MAX_SAFE_INTEGER,
}, asyncScope = new async_scope_js_1.AsyncScope()) => {
    return await asyncScope.exec(async () => {
        let tries = 0;
        while (tries++ < options.tries) {
            const result = await fn();
            if (result) {
                return result;
            }
            await (0, exports.timeout)(100);
        }
        return undefined;
    });
};
exports.waitForFunctionWithTries = waitForFunctionWithTries;
const waitForWithTries = async (selector, root, options = {
    tries: Number.MAX_SAFE_INTEGER,
}, asyncScope = new async_scope_js_1.AsyncScope(), handler) => {
    return await asyncScope.exec(() => (0, exports.waitForFunctionWithTries)(async () => {
        const element = await (0, exports.$)(selector, root, handler);
        return (element || undefined);
    }, options, asyncScope));
};
exports.waitForWithTries = waitForWithTries;
const debuggerStatement = (frontend) => {
    return frontend.evaluate(() => {
        // eslint-disable-next-line no-debugger
        debugger;
    });
};
exports.debuggerStatement = debuggerStatement;
const logToStdOut = (msg) => {
    if (!process.send) {
        return;
    }
    process.send({
        pid: process.pid,
        details: msg,
    });
};
exports.logToStdOut = logToStdOut;
const logFailure = () => {
    if (!process.send) {
        return;
    }
    process.send({
        pid: process.pid,
        details: 'failure',
    });
};
exports.logFailure = logFailure;
async function setExperimentEnabled(experiment, enabled, options) {
    const { frontend } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    await frontend.evaluate(`(async () => {
    const Root = await import('./core/root/root.js');
    Root.Runtime.experiments.setEnabled('${experiment}', ${enabled});
  })()`);
    await (0, hooks_js_1.reloadDevTools)(options);
}
const enableExperiment = (experiment, options) => setExperimentEnabled(experiment, true, options);
exports.enableExperiment = enableExperiment;
const disableExperiment = (experiment, options) => setExperimentEnabled(experiment, false, options);
exports.disableExperiment = disableExperiment;
const setDevToolsSettings = async (settings) => {
    const { frontend } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    await frontend.evaluate(settings => {
        for (const name in settings) {
            globalThis.InspectorFrontendHost.setPreference(name, JSON.stringify(settings[name]));
        }
    }, settings);
    await (0, hooks_js_1.reloadDevTools)();
};
exports.setDevToolsSettings = setDevToolsSettings;
const goTo = async (url, options = {}) => {
    const { target } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    await target.goto(url, options);
};
exports.goTo = goTo;
const overridePermissions = async (permissions) => {
    const { browser } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    await browser.defaultBrowserContext().overridePermissions(`https://localhost:${(0, puppeteer_state_js_1.getTestServerPort)()}`, permissions);
};
exports.overridePermissions = overridePermissions;
const clearPermissionsOverride = async () => {
    const { browser } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    await browser.defaultBrowserContext().clearPermissionOverrides();
};
exports.clearPermissionsOverride = clearPermissionsOverride;
const goToResource = async (path, options = {}) => {
    await (0, exports.goTo)(`${(0, exports.getResourcesPath)()}/${path}`, options);
};
exports.goToResource = goToResource;
const goToResourceWithCustomHost = async (host, path) => {
    chai_1.assert.isTrue(host.endsWith('.test'), 'Only custom hosts with a .test domain are allowed.');
    await (0, exports.goTo)(`${(0, exports.getResourcesPath)(host)}/${path}`);
};
exports.goToResourceWithCustomHost = goToResourceWithCustomHost;
const getResourcesPath = (host = 'localhost') => {
    let resourcesPath = (0, test_runner_config_js_1.getTestRunnerConfigSetting)('hosted-server-e2e-resources-path', '/test/e2e/resources');
    if (!resourcesPath.startsWith('/')) {
        resourcesPath = `/${resourcesPath}`;
    }
    return `https://${host}:${(0, puppeteer_state_js_1.getTestServerPort)()}${resourcesPath}`;
};
exports.getResourcesPath = getResourcesPath;
const step = async (description, step) => {
    try {
        return await step();
    }
    catch (error) {
        if (error instanceof chai_1.AssertionError) {
            throw new chai_1.AssertionError(`Unexpected Result in Step "${description}"
      ${error.message}`, error);
        }
        else {
            error.message += ` in Step "${description}"`;
            throw error;
        }
    }
};
exports.step = step;
const waitForAnimationFrame = async () => {
    const { frontend } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    await frontend.waitForFunction(() => {
        return new Promise(resolve => {
            requestAnimationFrame(resolve);
        });
    });
};
exports.waitForAnimationFrame = waitForAnimationFrame;
const activeElement = async () => {
    const { frontend } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    await (0, exports.waitForAnimationFrame)();
    return frontend.evaluateHandle(() => {
        let activeElement = document.activeElement;
        while (activeElement && activeElement.shadowRoot) {
            activeElement = activeElement.shadowRoot.activeElement;
        }
        if (!activeElement) {
            throw new Error('No active element found');
        }
        return activeElement;
    });
};
exports.activeElement = activeElement;
const activeElementTextContent = async () => {
    const element = await (0, exports.activeElement)();
    return element.evaluate(node => node.textContent);
};
exports.activeElementTextContent = activeElementTextContent;
const activeElementAccessibleName = async () => {
    const element = await (0, exports.activeElement)();
    return element.evaluate(node => node.getAttribute('aria-label'));
};
exports.activeElementAccessibleName = activeElementAccessibleName;
const tabForward = async (page) => {
    let targetPage;
    if (page) {
        targetPage = page;
    }
    else {
        const { frontend } = (0, puppeteer_state_js_1.getBrowserAndPages)();
        targetPage = frontend;
    }
    await targetPage.keyboard.press('Tab');
};
exports.tabForward = tabForward;
const tabBackward = async (page) => {
    let targetPage;
    if (page) {
        targetPage = page;
    }
    else {
        const { frontend } = (0, puppeteer_state_js_1.getBrowserAndPages)();
        targetPage = frontend;
    }
    await targetPage.keyboard.down('Shift');
    await targetPage.keyboard.press('Tab');
    await targetPage.keyboard.up('Shift');
};
exports.tabBackward = tabBackward;
const selectTextFromNodeToNode = async (from, to, direction) => {
    const { target } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    // The clipboard api does not allow you to copy, unless the tab is focused.
    await target.bringToFront();
    return target.evaluate(async (from, to, direction) => {
        const selection = from.getRootNode().getSelection();
        const range = document.createRange();
        if (direction === 'down') {
            range.setStartBefore(from);
            range.setEndAfter(to);
        }
        else {
            range.setStartBefore(to);
            range.setEndAfter(from);
        }
        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
        }
        document.execCommand('copy');
        return navigator.clipboard.readText();
    }, await from, await to, direction);
};
exports.selectTextFromNodeToNode = selectTextFromNodeToNode;
const closePanelTab = async (panelTabSelector) => {
    // Get close button from tab element
    const selector = `${panelTabSelector} > .tabbed-pane-close-button`;
    await (0, exports.click)(selector);
    await (0, exports.waitForNone)(selector);
};
exports.closePanelTab = closePanelTab;
const closeAllCloseableTabs = async () => {
    // get all closeable tools by looking for the available x buttons on tabs
    const selector = '.tabbed-pane-close-button';
    const allCloseButtons = await (0, exports.$$)(selector);
    // Get all panel ids
    const panelTabIds = await Promise.all(allCloseButtons.map(button => {
        return button.evaluate(button => button.parentElement ? button.parentElement.id : '');
    }));
    // Close each tab
    for (const tabId of panelTabIds) {
        const selector = `#${tabId}`;
        await (0, exports.closePanelTab)(selector);
    }
};
exports.closeAllCloseableTabs = closeAllCloseableTabs;
// Noisy! Do not leave this in your test but it may be helpful
// when debugging.
const enableCDPLogging = async () => {
    const { frontend } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    await frontend.evaluate(() => {
        globalThis.ProtocolClient.test.dumpProtocol = console.log; // eslint-disable-line no-console
    });
};
exports.enableCDPLogging = enableCDPLogging;
const enableCDPTracking = async () => {
    const { frontend } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    await frontend.evaluate(() => {
        globalThis.__messageMapForTest = new Map();
        globalThis.ProtocolClient.test.onMessageSent = (message) => {
            globalThis.__messageMapForTest.set(message.id, message.method);
        };
        globalThis.ProtocolClient.test.onMessageReceived = (message) => {
            if (message.id) {
                globalThis.__messageMapForTest.delete(message.id);
            }
        };
    });
};
exports.enableCDPTracking = enableCDPTracking;
const logOutstandingCDP = async () => {
    const { frontend } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    await frontend.evaluate(() => {
        for (const entry of globalThis.__messageMapForTest) {
            console.error(entry);
        }
    });
};
exports.logOutstandingCDP = logOutstandingCDP;
const selectOption = async (select, value) => {
    await select.evaluate(async (node, _value) => {
        node.value = _value;
        const event = document.createEvent('HTMLEvents');
        event.initEvent('change', false, true);
        node.dispatchEvent(event);
    }, value);
};
exports.selectOption = selectOption;
const scrollElementIntoView = async (selector, root) => {
    const element = await (0, exports.$)(selector, root);
    if (!element) {
        throw new Error(`Unable to find element with selector "${selector}"`);
    }
    await element.evaluate(el => {
        el.scrollIntoView();
    });
};
exports.scrollElementIntoView = scrollElementIntoView;
const installEventListener = function (frontend, eventType) {
    return frontend.evaluate(eventType => {
        window.__pendingEvents = window.__pendingEvents || new Map();
        window.addEventListener(eventType, (e) => {
            let events = window.__pendingEvents.get(eventType);
            if (!events) {
                events = [];
                window.__pendingEvents.set(eventType, events);
            }
            events.push(e);
        });
    }, eventType);
};
exports.installEventListener = installEventListener;
const getPendingEvents = function (frontend, eventType) {
    return frontend.evaluate(eventType => {
        if (!('__pendingEvents' in window)) {
            return undefined;
        }
        const pendingEvents = window.__pendingEvents.get(eventType);
        window.__pendingEvents.set(eventType, []);
        return pendingEvents;
    }, eventType);
};
exports.getPendingEvents = getPendingEvents;
function prepareWaitForEvent(element, eventType) {
    return element.evaluate((element, eventType) => {
        window.__eventHandlers = window.__eventHandlers || new WeakMap();
        const eventHandlers = (() => {
            const eventHandlers = window.__eventHandlers.get(element);
            if (eventHandlers) {
                return eventHandlers;
            }
            const newMap = new Map();
            window.__eventHandlers.set(element, newMap);
            return newMap;
        })();
        if (eventHandlers.has(eventType)) {
            throw new Error(`Event listener for ${eventType}' has already been installed.`);
        }
        eventHandlers.set(eventType, new Promise(resolve => {
            const handler = () => {
                element.removeEventListener(eventType, handler);
                resolve();
            };
            element.addEventListener(eventType, handler);
        }));
    }, eventType);
}
exports.prepareWaitForEvent = prepareWaitForEvent;
function waitForEvent(element, eventType) {
    return element.evaluate((element, eventType) => {
        if (!('__eventHandlers' in window)) {
            throw new Error(`Event listener for '${eventType}' has not been installed.`);
        }
        const handler = window.__eventHandlers.get(element)?.get(eventType);
        if (!handler) {
            throw new Error(`Event listener for '${eventType}' has not been installed.`);
        }
        return handler;
    }, eventType);
}
exports.waitForEvent = waitForEvent;
const hasClass = async (element, classname) => {
    return await element.evaluate((el, classname) => el.classList.contains(classname), classname);
};
exports.hasClass = hasClass;
const waitForClass = async (element, classname) => {
    await (0, exports.waitForFunction)(async () => {
        return (0, exports.hasClass)(element, classname);
    });
};
exports.waitForClass = waitForClass;
/**
 * This is useful to keep TypeScript happy in a test - if you have a value
 * that's potentially `null` you can use this function to assert that it isn't,
 * and satisfy TypeScript that the value is present.
 */
function assertNotNullOrUndefined(val) {
    if (val === null || val === undefined) {
        throw new Error(`Expected given value to not be null/undefined but it was: ${val}`);
    }
}
exports.assertNotNullOrUndefined = assertNotNullOrUndefined;
function matchString(actual, expected) {
    if (typeof expected === 'string') {
        if (actual !== expected) {
            return `Expected item "${actual}" to equal "${expected}"`;
        }
    }
    else if (!expected.test(actual)) {
        return `Expected item "${actual}" to match "${expected}"`;
    }
    return true;
}
exports.matchString = matchString;
function matchArray(actual, expected, comparator) {
    if (actual.length !== expected.length) {
        return `Expected [${actual.map(x => `"${x}"`).join(', ')}] to have length ${expected.length}`;
    }
    for (let i = 0; i < expected.length; ++i) {
        const result = comparator(actual[i], expected[i]);
        if (result !== true) {
            return `Mismatch in row ${i}: ${result}`;
        }
    }
    return true;
}
exports.matchArray = matchArray;
function assertOk(check) {
    return (...args) => {
        const result = check(...args);
        if (result !== true) {
            throw new chai_1.AssertionError(result);
        }
    };
}
exports.assertOk = assertOk;
function matchTable(actual, expected, comparator) {
    return matchArray(actual, expected, (actual, expected) => matchArray(actual, expected, comparator));
}
exports.matchTable = matchTable;
const matchStringArray = (actual, expected) => matchArray(actual, expected, matchString);
exports.matchStringArray = matchStringArray;
exports.assertMatchArray = assertOk(exports.matchStringArray);
const matchStringTable = (actual, expected) => matchTable(actual, expected, matchString);
exports.matchStringTable = matchStringTable;
async function renderCoordinatorQueueEmpty() {
    const { frontend } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    await frontend.evaluate(() => {
        return new Promise(resolve => {
            const pendingFrames = globalThis.__getRenderCoordinatorPendingFrames();
            if (pendingFrames < 1) {
                resolve();
                return;
            }
            globalThis.addEventListener('renderqueueempty', resolve, { once: true });
        });
    });
}
exports.renderCoordinatorQueueEmpty = renderCoordinatorQueueEmpty;
async function setCheckBox(selector, wantChecked) {
    const checkbox = await (0, exports.waitFor)(selector);
    const checked = await checkbox.evaluate(box => box.checked);
    if (checked !== wantChecked) {
        await (0, exports.click)(`${selector} + label`);
    }
    chai_1.assert.strictEqual(await checkbox.evaluate(box => box.checked), wantChecked);
}
exports.setCheckBox = setCheckBox;
const summonSearchBox = async () => {
    await (0, exports.pressKey)('f', { control: true });
};
exports.summonSearchBox = summonSearchBox;
const replacePuppeteerUrl = (value) => {
    return value.replace(/pptr:.*:([0-9]+)$/, (_, match) => {
        return `(index):${match}`;
    });
};
exports.replacePuppeteerUrl = replacePuppeteerUrl;
async function raf(page) {
    await page.evaluate(() => {
        return new Promise(resolve => window.requestAnimationFrame(resolve));
    });
}
exports.raf = raf;
//# sourceMappingURL=helper.js.map