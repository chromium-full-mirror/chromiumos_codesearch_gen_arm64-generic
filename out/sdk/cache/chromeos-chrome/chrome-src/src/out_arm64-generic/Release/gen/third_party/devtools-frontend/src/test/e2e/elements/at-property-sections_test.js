"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const elements_helpers_js_1 = require("../helpers/elements-helpers.js");
async function getStyleRuleProperties(selector, count) {
    const rule = await (0, elements_helpers_js_1.getStyleRule)(selector);
    const propertyElements = await (0, helper_js_1.waitForMany)(elements_helpers_js_1.STYLE_PROPERTIES_SELECTOR, count, rule);
    const properties = await Promise.all(propertyElements.map(e => e.evaluate(e => e.textContent)));
    properties.sort();
    const subtitle = await (0, helper_js_1.waitFor)(elements_helpers_js_1.SECTION_SUBTITLE_SELECTOR, rule).then(e => e.evaluate(e => e.textContent));
    return { properties, subtitle };
}
(0, mocha_extensions_js_1.describe)('The styles pane', () => {
    (0, mocha_extensions_js_1.it)('shows syntax mismatches as invalid properties', async () => {
        await (0, elements_helpers_js_1.goToResourceAndWaitForStyleSection)('elements/at-property.html');
        await (0, helper_js_1.waitFor)('.invalid-property-value:has(> [aria-label="CSS property name: --my-color"])');
    });
    (0, mocha_extensions_js_1.it)('shows a parser error message popover on syntax mismatches', async () => {
        await (0, elements_helpers_js_1.goToResourceAndWaitForStyleSection)('elements/at-property.html');
        await (0, helper_js_1.hover)('.invalid-property-value:has(> [aria-label="CSS property name: --my-color"]) .exclamation-mark');
        const popover = await (0, helper_js_1.waitFor)('.variable-value-popup-wrapper');
        const popoverContents = (await popover.evaluate(e => e.textContent))?.trim()?.replaceAll(/\s\s+/g, ', ');
        chai_1.assert.deepEqual(popoverContents, 'Invalid property value, expected type "<color>", View registered property');
    });
    (0, mocha_extensions_js_1.it)('correctly determines the computed value for non-overriden properties', async () => {
        await (0, elements_helpers_js_1.goToResourceAndWaitForStyleSection)('elements/at-property.html');
        const myColorProp = await (0, helper_js_1.waitForAria)('CSS property value: var(--my-cssom-color)');
        await (0, helper_js_1.waitFor)('.link-swatch-link[data-title="orange"]', myColorProp);
    });
    (0, mocha_extensions_js_1.it)('shows registered properties', async () => {
        await (0, elements_helpers_js_1.goToResourceAndWaitForStyleSection)('elements/at-property.html');
        chai_1.assert.deepStrictEqual(await getStyleRuleProperties('--my-color', 3), {
            properties: ['    inherits: false;', '    initial-value: red;', '    syntax: "<color>";'],
            subtitle: '<style>',
        });
        chai_1.assert.deepStrictEqual(await getStyleRuleProperties('--my-color2', 3), {
            properties: ['    inherits: false;', '    initial-value: #c0ffee;', '    syntax: "<color>";'],
            subtitle: '<style>',
        });
        chai_1.assert.deepStrictEqual(await getStyleRuleProperties('--my-cssom-color', 3), {
            properties: ['    inherits: false;', '    initial-value: orange;', '    syntax: "<color>";'],
            subtitle: 'CSS.registerProperty',
        });
    });
    (0, mocha_extensions_js_1.it)('shows a foldable @property section when there are 5 or less registered properties', async () => {
        await (0, elements_helpers_js_1.goToResourceAndWaitForStyleSection)('elements/at-property.html');
        const stylesPane = await (0, helper_js_1.waitFor)('div.styles-pane');
        {
            const section = await (0, helper_js_1.waitForElementWithTextContent)('@property', stylesPane);
            chai_1.assert.deepStrictEqual(await section.evaluate(e => e.ariaExpanded), 'true');
            const rule = await (0, elements_helpers_js_1.getStyleRule)('--my-color');
            chai_1.assert.isTrue(await rule.evaluate(e => !e.classList.contains('hidden')));
        }
        {
            const section = await (0, helper_js_1.click)('pierceShadowText/@property', { root: stylesPane });
            await (0, helper_js_1.waitForFunction)(async () => 'false' === await section.evaluate(e => e.ariaExpanded));
            const rule = await (0, elements_helpers_js_1.getStyleRule)('--my-color');
            await (0, helper_js_1.waitForFunction)(() => rule.evaluate(e => e.classList.contains('hidden')));
        }
    });
    (0, mocha_extensions_js_1.it)('shows a collapsed @property section when there are more than 5 registered properties', async () => {
        await (0, elements_helpers_js_1.goToResourceAndWaitForStyleSection)('elements/at-property.html');
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        // Add some properties to go above the threshold
        await target.evaluate(() => {
            for (let n = 0; n < 5; ++n) {
                CSS.registerProperty({ name: `--custom-prop-${n}`, inherits: false, syntax: '<length>', initialValue: '0px' });
            }
        });
        await frontend.reload();
        const stylesPane = await (0, helper_js_1.waitFor)('div.styles-pane');
        {
            const section = await (0, helper_js_1.waitForElementWithTextContent)('@property', stylesPane);
            chai_1.assert.deepStrictEqual(await section.evaluate(e => e.ariaExpanded), 'false');
            const rule = await (0, elements_helpers_js_1.getStyleRule)('--my-color');
            chai_1.assert.isTrue(await rule.evaluate(e => e.classList.contains('hidden')));
        }
        {
            const section = await (0, helper_js_1.click)('pierceShadowText/@property', { root: stylesPane });
            await (0, helper_js_1.waitForFunction)(async () => 'true' === await section.evaluate(e => e.ariaExpanded));
            const rule = await (0, elements_helpers_js_1.getStyleRule)('--my-color');
            await (0, helper_js_1.waitForFunction)(() => rule.evaluate(e => !e.classList.contains('hidden')));
        }
    });
    (0, mocha_extensions_js_1.it)('shows registration information in a variable popover', async () => {
        async function hoverVariable(label) {
            const isValue = label.startsWith('var(');
            if (isValue) {
                const prop = await (0, helper_js_1.waitForAria)(`CSS property value: ${label}`);
                await (0, helper_js_1.hover)('.link-swatch-link', { root: prop });
            }
            else {
                await (0, helper_js_1.hover)(`aria/CSS property name: ${label}`);
            }
            const firstSection = await (0, helper_js_1.waitFor)('.variable-value-popup-wrapper');
            const textContent = await firstSection.evaluate((e) => {
                const results = [];
                while (e) {
                    results.push(e.textContent);
                    e = e.nextElementSibling;
                }
                return results;
            });
            const popoverContents = textContent.join(' ').trim().replaceAll(/\s\s+/g, ', ');
            await (0, helper_js_1.hover)(elements_helpers_js_1.ELEMENTS_PANEL_SELECTOR);
            await (0, helper_js_1.waitForNone)('.variable-value-popup-wrapper');
            return popoverContents;
        }
        await (0, elements_helpers_js_1.goToResourceAndWaitForStyleSection)('elements/at-property.html');
        chai_1.assert.strictEqual(await hoverVariable('var(--my-cssom-color)'), 'orange, syntax: "<color>", inherits: false, initial-value: orange, View registered property');
        chai_1.assert.strictEqual(await hoverVariable('--my-color'), 'red, syntax: "<color>", inherits: false, initial-value: red, View registered property');
        chai_1.assert.strictEqual(await hoverVariable('var(--my-color)'), 'red, syntax: "<color>", inherits: false, initial-value: red, View registered property');
        chai_1.assert.strictEqual(await hoverVariable('--my-color2'), 'gray, syntax: "<color>", inherits: false, initial-value: #c0ffee, View registered property');
        chai_1.assert.strictEqual(await hoverVariable('var(--my-color2)'), 'gray, syntax: "<color>", inherits: false, initial-value: #c0ffee, View registered property');
        chai_1.assert.strictEqual(await hoverVariable('--my-other-color'), 'green');
        chai_1.assert.strictEqual(await hoverVariable('var(--my-other-color)'), 'green');
    });
});
//# sourceMappingURL=at-property-sections_test.js.map