"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const elements_helpers_js_1 = require("../helpers/elements-helpers.js");
(0, mocha_extensions_js_1.describe)('The Computed pane', async function () {
    beforeEach(async function () {
        await (0, helper_js_1.goToResource)('elements/simple-styled-page.html');
        await (0, elements_helpers_js_1.navigateToSidePane)('Computed');
        await (0, elements_helpers_js_1.waitForElementsComputedSection)();
        // Note that navigating to the computed pane moved focus away from the
        // elements pane. Restore it.
        await (0, elements_helpers_js_1.focusElementsTree)();
    });
    (0, mocha_extensions_js_1.it)('can display the CSS properties of the selected element', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        // Select the H1 element and wait for the computed pane to change.
        let content = await (0, elements_helpers_js_1.getContentOfComputedPane)();
        await frontend.keyboard.press('ArrowDown');
        await (0, elements_helpers_js_1.waitForComputedPaneChange)(content);
        await (0, elements_helpers_js_1.waitForElementsComputedSection)();
        const h1Properties = await (0, elements_helpers_js_1.getAllPropertiesFromComputedPane)();
        chai_1.assert.strictEqual(h1Properties.length, 10, 'There should be 10 computed properties on the H1 element');
        const colorProperty = h1Properties.find(property => property && property.name === 'color');
        chai_1.assert.exists(colorProperty, 'H1 element should have a color computed property');
        chai_1.assert.deepEqual(colorProperty, {
            name: 'color',
            value: 'rgb(255, 0, 102)',
        });
        // Select the H2 element by pressing down again.
        content = await (0, elements_helpers_js_1.getContentOfComputedPane)();
        await frontend.keyboard.press('ArrowDown');
        await (0, elements_helpers_js_1.waitForComputedPaneChange)(content);
        await (0, elements_helpers_js_1.waitForElementsComputedSection)();
        const h2Properties = await (0, elements_helpers_js_1.getAllPropertiesFromComputedPane)();
        chai_1.assert.strictEqual(h2Properties.length, 11, 'There should be 11 computed properties on the H2 element');
        const backgroundProperty = h2Properties.find(property => property && property.name === 'background-color');
        chai_1.assert.exists(backgroundProperty, 'H2 element should have a background-color computed property');
        chai_1.assert.deepEqual(backgroundProperty, {
            name: 'background-color',
            value: 'rgb(255, 215, 0)',
        });
    });
    (0, mocha_extensions_js_1.it)('can display inherited CSS properties of the selected element', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        // Select the H1 element and wait for the computed pane to change.
        const content = await (0, elements_helpers_js_1.getContentOfComputedPane)();
        await frontend.keyboard.press('ArrowDown');
        await (0, elements_helpers_js_1.waitForComputedPaneChange)(content);
        await (0, elements_helpers_js_1.toggleShowAllComputedProperties)();
        await (0, elements_helpers_js_1.waitForElementsComputedSection)();
        const getAlignContentProperty = async () => {
            const allH1Properties = await (0, elements_helpers_js_1.getAllPropertiesFromComputedPane)();
            const prop = allH1Properties.find(property => property && property.name === 'align-content');
            return prop;
        };
        const alignContentProperty = await (0, helper_js_1.waitForFunction)(getAlignContentProperty);
        chai_1.assert.exists(alignContentProperty, 'H1 element should display the inherited align-content computed property');
        chai_1.assert.deepEqual(alignContentProperty, {
            name: 'align-content',
            value: 'normal',
        });
    });
    (0, mocha_extensions_js_1.it)('remembers which properties that are expanded when re-rendering', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await frontend.keyboard.press('ArrowDown');
        const colorProperty = await (0, helper_js_1.waitFor)('CSS property name: color : CSS property value: rgb(255, 0, 102) ;', undefined, undefined, 'aria');
        await (0, helper_js_1.click)('.arrow-icon', {
            root: colorProperty,
        });
        const isExpandedBefore = await colorProperty.evaluate(element => element.ariaExpanded);
        (0, chai_1.assert)(isExpandedBefore);
        await (0, elements_helpers_js_1.focusElementsTree)();
        await frontend.keyboard.press('ArrowDown');
        const colorPropertyAfter = await (0, helper_js_1.waitFor)('CSS property name: color : CSS property value: rgb(0, 0, 0) ;', undefined, undefined, 'aria');
        const isExpandedAfter = await colorPropertyAfter.evaluate(element => element.ariaExpanded);
        (0, chai_1.assert)(isExpandedAfter);
    });
    // Skip until flake is fixed
    mocha_extensions_js_1.it.skip('[crbug.com/1346261]: allows tracing to style rules (ported layout test)', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.goToResource)('elements/css-styles-variables.html');
        await (0, elements_helpers_js_1.waitForNumberOfComputedProperties)(7);
        await (0, elements_helpers_js_1.toggleShowAllComputedProperties)();
        await (0, elements_helpers_js_1.filterComputedProperties)('--');
        await (0, elements_helpers_js_1.waitForNumberOfComputedProperties)(1);
        await (0, elements_helpers_js_1.focusElementsTree)();
        await frontend.keyboard.press('ArrowRight');
        await frontend.keyboard.press('ArrowRight');
        await (0, elements_helpers_js_1.waitForPartialContentOfSelectedElementsNode)('"id1"');
        await (0, elements_helpers_js_1.waitForNumberOfComputedProperties)(2);
        const computedPane = await (0, elements_helpers_js_1.getComputedPanel)();
        await computedPane.$$eval('pierce/.arrow-icon', elements => elements.map(element => element.click()));
        const expectedPropId1 = [
            {
                'name': '--a',
                'value': 'red',
                'trace': [{
                        'value': 'red',
                        'selector': 'body',
                        'link': 'css-styles-variables.html:8',
                    }],
            },
            {
                'name': '--b',
                'value': '44px',
                'trace': [{
                        'value': '44px',
                        'selector': '#id1',
                        'link': 'css-styles-variables.html:12',
                    }],
            },
        ];
        await (0, helper_js_1.waitForFunction)(async () => JSON.stringify(await (0, elements_helpers_js_1.getComputedStyleProperties)()) === JSON.stringify(expectedPropId1));
        await frontend.keyboard.press('ArrowRight');
        await frontend.keyboard.press('ArrowRight');
        await (0, elements_helpers_js_1.waitForPartialContentOfSelectedElementsNode)('"id2"');
        const expectedPropId2 = [
            {
                'name': '--a',
                'value': 'green',
                'trace': [
                    {
                        'value': 'green',
                        'selector': '#id2',
                        'link': 'css-styles-variables.html:16',
                    },
                    {
                        'value': 'red',
                        'selector': 'body',
                        'link': 'css-styles-variables.html:8',
                    },
                ],
            },
            {
                'name': '--b',
                'value': '44px',
                'trace': [{
                        'value': '44px',
                        'selector': '#id1',
                        'link': 'css-styles-variables.html:12',
                    }],
            },
        ];
        await (0, helper_js_1.waitForFunction)(async () => JSON.stringify(await (0, elements_helpers_js_1.getComputedStyleProperties)()) === JSON.stringify(expectedPropId2));
        await frontend.keyboard.press('ArrowRight');
        await frontend.keyboard.press('ArrowRight');
        await (0, elements_helpers_js_1.waitForPartialContentOfSelectedElementsNode)('"id3"');
        const expectedPropId3 = [
            {
                'name': '--a',
                'value': 'green',
                'trace': [
                    {
                        'value': 'inherit',
                        'selector': '#id3',
                        'link': 'css-styles-variables.html:20',
                    },
                    {
                        'value': 'green',
                        'selector': '#id2',
                        'link': 'css-styles-variables.html:16',
                    },
                    {
                        'value': 'red',
                        'selector': 'body',
                        'link': 'css-styles-variables.html:8',
                    },
                ],
            },
            {
                'name': '--b',
                'value': '44px',
                'trace': [{
                        'value': '44px',
                        'selector': '#id1',
                        'link': 'css-styles-variables.html:12',
                    }],
            },
        ];
        await (0, helper_js_1.waitForFunction)(async () => JSON.stringify(await (0, elements_helpers_js_1.getComputedStyleProperties)()) === JSON.stringify(expectedPropId3));
    });
});
//# sourceMappingURL=computed-pane-properties_test.js.map