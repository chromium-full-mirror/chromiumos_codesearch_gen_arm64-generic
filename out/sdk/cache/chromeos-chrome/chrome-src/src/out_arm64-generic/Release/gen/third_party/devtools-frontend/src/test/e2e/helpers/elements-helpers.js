"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComputedStyleProperties = exports.waitForStyleRule = exports.waitForExactStyleRule = exports.getStyleRuleSelector = exports.assertGutterDecorationForDomNodeExists = exports.waitForDomNodeToBeHidden = exports.waitForDomNodeToBeVisible = exports.toggleGroupComputedProperties = exports.toggleShowAllComputedProperties = exports.filterComputedProperties = exports.getComputedPanel = exports.waitForNumberOfComputedProperties = exports.getComputedStylesForDomNode = exports.removePseudoState = exports.forcePseudoState = exports.expandSelectedNodeRecursively = exports.waitForPropertyValueInComputedPane = exports.getPropertyFromComputedPane = exports.getAllPropertiesFromComputedPane = exports.waitForComputedPaneChange = exports.getContentOfComputedPane = exports.waitForElementsComputedSection = exports.waitForElementsStyleSection = exports.navigateToSidePane = exports.focusElementsTree = exports.clickNthChildOfSelectedElementNode = exports.clickTreeElementWithPartialText = exports.waitForElementWithPartialText = exports.waitForAndClickTreeElementWithPartialText = exports.waitForChildrenOfSelectedElementNode = exports.waitForSelectedTreeElementSelectorWhichIncludesText = exports.waitForSelectedTreeElementSelectorWithTextcontent = exports.assertSelectedElementsNodeTextIncludes = exports.waitForSelectedNodeChange = exports.getContentOfSelectedNode = exports.waitForPartialContentOfSelectedElementsNode = exports.waitForContentOfSelectedElementsNode = exports.waitForSomeGridsInLayoutPane = exports.getGridsInLayoutPane = exports.toggleElementCheckboxInLayoutPane = exports.waitForAdornerOnSelectedNode = exports.waitForSelectedNodeToBeExpanded = exports.waitForAdorners = exports.openLayoutPane = exports.SEARCH_BOX_SELECTOR = exports.STYLE_PROPERTIES_SELECTOR = exports.ACTIVE_GRID_ADORNER_SELECTOR = exports.INACTIVE_GRID_ADORNER_SELECTOR = exports.SECTION_SUBTITLE_SELECTOR = exports.ELEMENTS_PANEL_SELECTOR = void 0;
exports.checkStyleAttributes = exports.goToResourceAndWaitForStyleSection = exports.assertSearchResultMatchesText = exports.summonAndWaitForSearchBox = exports.getPropertiesWithHints = exports.toggleAccessibilityTree = exports.toggleAccessibilityPane = exports.assertSelectedNodeClasses = exports.uncheckStylesPaneCheckbox = exports.toggleClassesPaneCheckbox = exports.typeInClassesPaneInput = exports.toggleClassesPane = exports.clickOnFirstLinkInStylesPanel = exports.navigateToElementsTab = exports.getSelectedBreadcrumbTextContent = exports.getBreadcrumbsTextContent = exports.waitForPropertyToHighlight = exports.waitForCSSPropertyValue = exports.editQueryRuleText = exports.editCSSProperty = exports.focusCSSPropertyValue = exports.getCSSPropertyInRule = exports.getStyleSectionSubtitles = exports.getHiddenFontEditorButtons = exports.getFontEditorButtons = exports.getElementStyleFontEditorButton = exports.shiftClickColorSwatch = exports.getColorSwatchColor = exports.getColorSwatch = exports.getStyleRuleWithSourcePosition = exports.getStyleRule = exports.getDisplayedCSSPropertyNames = exports.getDisplayedCSSPropertyData = exports.getDisplayedStyleRules = exports.getDisplayedStyleRulesCompact = exports.getDisplayedCSSDeclarations = void 0;
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const chai_1 = require("chai");
const async_scope_js_1 = require("../../shared/async-scope.js");
const helper_js_1 = require("../../shared/helper.js");
const SELECTED_TREE_ELEMENT_SELECTOR = '.selected[role="treeitem"]';
const CSS_PROPERTY_NAME_SELECTOR = '.webkit-css-property';
const CSS_PROPERTY_VALUE_SELECTOR = '.value';
const CSS_DECLARATION_SELECTOR = `[role="treeitem"]:has(${CSS_PROPERTY_NAME_SELECTOR}):has(${CSS_PROPERTY_VALUE_SELECTOR})`;
const COLOR_SWATCH_SELECTOR = '.color-swatch-inner';
const CSS_STYLE_RULE_SELECTOR = '[aria-label*="css selector"]';
const COMPUTED_PROPERTY_SELECTOR = 'devtools-computed-style-property';
const COMPUTED_STYLES_PANEL_SELECTOR = '[aria-label="Computed panel"]';
const COMPUTED_STYLES_SHOW_ALL_SELECTOR = '[title="Show all"]';
const COMPUTED_STYLES_GROUP_SELECTOR = '[title="Group"]';
exports.ELEMENTS_PANEL_SELECTOR = '.panel[aria-label="elements"]';
const FONT_EDITOR_SELECTOR = '[aria-label="Font Editor"]';
const HIDDEN_FONT_EDITOR_SELECTOR = '.font-toolbar-hidden';
exports.SECTION_SUBTITLE_SELECTOR = '.styles-section-subtitle';
const CLS_PANE_SELECTOR = '.styles-sidebar-toolbar-pane';
const CLS_BUTTON_SELECTOR = '[aria-label="Element Classes"]';
const CLS_INPUT_SELECTOR = '[aria-placeholder="Add new class"]';
const LAYOUT_PANE_TAB_SELECTOR = '[aria-label="Layout"]';
const LAYOUT_PANE_TABPANEL_SELECTOR = '[aria-label="Layout panel"]';
const ADORNER_SELECTOR = 'devtools-adorner';
exports.INACTIVE_GRID_ADORNER_SELECTOR = '[aria-label="Enable grid mode"]';
exports.ACTIVE_GRID_ADORNER_SELECTOR = '[aria-label="Disable grid mode"]';
const ELEMENT_CHECKBOX_IN_LAYOUT_PANE_SELECTOR = '.elements input[type=checkbox]';
const ELEMENT_STYLE_SECTION_SELECTOR = '[aria-label="element.style, css selector"]';
const STYLE_QUERY_RULE_TEXT_SELECTOR = '.query-text';
exports.STYLE_PROPERTIES_SELECTOR = '.tree-outline-disclosure [role="treeitem"]';
const CSS_AUTHORING_HINTS_ICON_SELECTOR = '.hint';
exports.SEARCH_BOX_SELECTOR = '.search-bar';
const SEARCH_RESULTS_MATCHES = '.search-results-matches';
const openLayoutPane = async () => {
    await (0, helper_js_1.step)('Open Layout pane', async () => {
        await (0, helper_js_1.click)(LAYOUT_PANE_TAB_SELECTOR);
        const panel = await (0, helper_js_1.waitFor)(LAYOUT_PANE_TABPANEL_SELECTOR);
        await (0, helper_js_1.waitFor)('.elements', panel);
    });
};
exports.openLayoutPane = openLayoutPane;
const waitForAdorners = async (expectedAdorners) => {
    await (0, helper_js_1.waitForFunction)(async () => {
        const actualAdorners = await (0, helper_js_1.$$)(ADORNER_SELECTOR);
        const actualAdornersStates = await Promise.all(actualAdorners.map(n => {
            return n.evaluate((node, activeSelector) => {
                // TODO for now only the grid adorner that can be active. When the flex (or other) adorner can be activated
                // too we should change the selector passed here crbug.com/1144090.
                return { textContent: node.textContent, isActive: node.matches(activeSelector) };
            }, exports.ACTIVE_GRID_ADORNER_SELECTOR);
        }));
        if (actualAdornersStates.length !== expectedAdorners.length) {
            return false;
        }
        for (let i = 0; i < actualAdornersStates.length; i++) {
            const index = expectedAdorners.findIndex(expected => {
                const actual = actualAdornersStates[i];
                return expected.textContent === actual.textContent && expected.isActive === actual.isActive;
            });
            if (index !== -1) {
                expectedAdorners.splice(index, 1);
            }
        }
        return expectedAdorners.length === 0;
    });
};
exports.waitForAdorners = waitForAdorners;
const waitForSelectedNodeToBeExpanded = async () => {
    await (0, helper_js_1.waitFor)(`${SELECTED_TREE_ELEMENT_SELECTOR}[aria-expanded="true"]`);
};
exports.waitForSelectedNodeToBeExpanded = waitForSelectedNodeToBeExpanded;
const waitForAdornerOnSelectedNode = async (expectedAdornerText) => {
    await (0, helper_js_1.waitForFunction)(async () => {
        const selectedNode = await (0, helper_js_1.waitFor)(SELECTED_TREE_ELEMENT_SELECTOR);
        const adorner = await (0, helper_js_1.waitFor)(ADORNER_SELECTOR, selectedNode);
        return expectedAdornerText === await adorner.evaluate(node => node.textContent);
    });
};
exports.waitForAdornerOnSelectedNode = waitForAdornerOnSelectedNode;
const toggleElementCheckboxInLayoutPane = async () => {
    await (0, helper_js_1.step)('Click element checkbox in Layout pane', async () => {
        await (0, helper_js_1.click)(ELEMENT_CHECKBOX_IN_LAYOUT_PANE_SELECTOR);
    });
};
exports.toggleElementCheckboxInLayoutPane = toggleElementCheckboxInLayoutPane;
const getGridsInLayoutPane = async () => {
    const panel = await (0, helper_js_1.waitFor)(LAYOUT_PANE_TABPANEL_SELECTOR);
    return await (0, helper_js_1.$$)('.elements .element', panel);
};
exports.getGridsInLayoutPane = getGridsInLayoutPane;
const waitForSomeGridsInLayoutPane = async (minimumGridCount) => {
    await (0, helper_js_1.waitForFunction)(async () => {
        const grids = await (0, exports.getGridsInLayoutPane)();
        return grids.length >= minimumGridCount;
    });
};
exports.waitForSomeGridsInLayoutPane = waitForSomeGridsInLayoutPane;
const waitForContentOfSelectedElementsNode = async (expectedTextContent) => {
    await (0, helper_js_1.waitForFunction)(async () => {
        const selectedTextContent = await (0, exports.getContentOfSelectedNode)();
        return selectedTextContent === expectedTextContent;
    });
};
exports.waitForContentOfSelectedElementsNode = waitForContentOfSelectedElementsNode;
const waitForPartialContentOfSelectedElementsNode = async (expectedPartialTextContent) => {
    await (0, helper_js_1.waitForFunction)(async () => {
        const selectedTextContent = await (0, exports.getContentOfSelectedNode)();
        return selectedTextContent.includes(expectedPartialTextContent);
    });
};
exports.waitForPartialContentOfSelectedElementsNode = waitForPartialContentOfSelectedElementsNode;
/**
 * Gets the text content of the currently selected element.
 */
const getContentOfSelectedNode = async () => {
    const selectedNode = await (0, helper_js_1.waitFor)(SELECTED_TREE_ELEMENT_SELECTOR);
    return await selectedNode.evaluate(node => node.textContent);
};
exports.getContentOfSelectedNode = getContentOfSelectedNode;
const waitForSelectedNodeChange = async (initialValue, asyncScope = new async_scope_js_1.AsyncScope()) => {
    await (0, helper_js_1.waitForFunction)(async () => {
        const currentContent = await (0, exports.getContentOfSelectedNode)();
        return currentContent !== initialValue;
    }, asyncScope);
};
exports.waitForSelectedNodeChange = waitForSelectedNodeChange;
const assertSelectedElementsNodeTextIncludes = async (expectedTextContent) => {
    const selectedNode = await (0, helper_js_1.waitFor)(SELECTED_TREE_ELEMENT_SELECTOR);
    const selectedTextContent = await selectedNode.evaluate(node => node.textContent);
    chai_1.assert.include(selectedTextContent, expectedTextContent);
};
exports.assertSelectedElementsNodeTextIncludes = assertSelectedElementsNodeTextIncludes;
const waitForSelectedTreeElementSelectorWithTextcontent = async (expectedTextContent) => {
    await (0, helper_js_1.waitForFunction)(async () => {
        const selectedNode = await (0, helper_js_1.waitFor)(SELECTED_TREE_ELEMENT_SELECTOR);
        const selectedTextContent = await selectedNode.evaluate(node => node.textContent);
        return selectedTextContent === expectedTextContent;
    });
};
exports.waitForSelectedTreeElementSelectorWithTextcontent = waitForSelectedTreeElementSelectorWithTextcontent;
const waitForSelectedTreeElementSelectorWhichIncludesText = async (expectedTextContent) => {
    await (0, helper_js_1.waitForFunction)(async () => {
        const selectedNode = await (0, helper_js_1.waitFor)(SELECTED_TREE_ELEMENT_SELECTOR);
        const selectedTextContent = await selectedNode.evaluate(node => node.textContent);
        return selectedTextContent && selectedTextContent.includes(expectedTextContent);
    });
};
exports.waitForSelectedTreeElementSelectorWhichIncludesText = waitForSelectedTreeElementSelectorWhichIncludesText;
const waitForChildrenOfSelectedElementNode = async () => {
    await (0, helper_js_1.waitFor)(`${SELECTED_TREE_ELEMENT_SELECTOR} + ol > li`);
};
exports.waitForChildrenOfSelectedElementNode = waitForChildrenOfSelectedElementNode;
const waitForAndClickTreeElementWithPartialText = async (text) => (0, helper_js_1.waitForFunction)(async () => (0, exports.clickTreeElementWithPartialText)(text));
exports.waitForAndClickTreeElementWithPartialText = waitForAndClickTreeElementWithPartialText;
const waitForElementWithPartialText = async (text) => {
    return (0, helper_js_1.waitForFunction)(async () => elementWithPartialText(text));
};
exports.waitForElementWithPartialText = waitForElementWithPartialText;
const elementWithPartialText = async (text) => {
    const tree = await (0, helper_js_1.waitFor)('Page DOM[role="tree"]', undefined, undefined, 'aria');
    const elements = await (0, helper_js_1.$$)('[role="treeitem"]', tree, 'aria');
    for (const handle of elements) {
        const match = await handle.evaluate((element, text) => element.textContent?.includes(text), text);
        if (match) {
            return handle;
        }
    }
    return null;
};
const clickTreeElementWithPartialText = async (text) => {
    const handle = await elementWithPartialText(text);
    if (handle) {
        await (0, helper_js_1.clickElement)(handle);
        return true;
    }
    throw false;
};
exports.clickTreeElementWithPartialText = clickTreeElementWithPartialText;
const clickNthChildOfSelectedElementNode = async (childIndex) => {
    (0, chai_1.assert)(childIndex > 0, 'CSS :nth-child() selector indices are 1-based.');
    await (0, helper_js_1.click)(`${SELECTED_TREE_ELEMENT_SELECTOR} + ol > li:nth-child(${childIndex})`);
};
exports.clickNthChildOfSelectedElementNode = clickNthChildOfSelectedElementNode;
const focusElementsTree = async () => {
    await (0, helper_js_1.click)(SELECTED_TREE_ELEMENT_SELECTOR);
};
exports.focusElementsTree = focusElementsTree;
const navigateToSidePane = async (paneName) => {
    await (0, helper_js_1.click)(`[aria-label="${paneName}"]`);
    await (0, helper_js_1.waitFor)(`[aria-label="${paneName} panel"]`);
};
exports.navigateToSidePane = navigateToSidePane;
const waitForElementsStyleSection = async () => {
    // Wait for the file to be loaded and selectors to be shown
    await (0, helper_js_1.waitFor)('.styles-selector');
};
exports.waitForElementsStyleSection = waitForElementsStyleSection;
const waitForElementsComputedSection = async () => {
    await (0, helper_js_1.waitFor)(COMPUTED_PROPERTY_SELECTOR);
};
exports.waitForElementsComputedSection = waitForElementsComputedSection;
const getContentOfComputedPane = async () => {
    const pane = await (0, helper_js_1.waitFor)('Computed panel', undefined, undefined, 'aria');
    const tree = await (0, helper_js_1.waitFor)('[role="tree"]', pane, undefined, 'aria');
    return await tree.evaluate(node => node.textContent);
};
exports.getContentOfComputedPane = getContentOfComputedPane;
const waitForComputedPaneChange = async (initialValue) => {
    await (0, helper_js_1.waitForFunction)(async () => {
        const value = await (0, exports.getContentOfComputedPane)();
        return value !== initialValue;
    });
};
exports.waitForComputedPaneChange = waitForComputedPaneChange;
const getAllPropertiesFromComputedPane = async () => {
    const properties = await (0, helper_js_1.$$)(COMPUTED_PROPERTY_SELECTOR);
    return (await Promise.all(properties.map(elem => elem.evaluate(async (node) => {
        const nameSlot = node.shadowRoot?.querySelector('.property-name slot');
        const valueSlot = node.shadowRoot?.querySelector('.property-value slot');
        const name = nameSlot?.assignedElements().at(0);
        const value = valueSlot?.assignedElements().at(0);
        return (!name || !value) ? null : {
            name: name.textContent ? name.textContent.trim().replace(/:$/, '') : '',
            value: value.textContent ? value.textContent.trim().replace(/;$/, '') : '',
        };
    }))))
        .filter(prop => Boolean(prop));
};
exports.getAllPropertiesFromComputedPane = getAllPropertiesFromComputedPane;
const getPropertyFromComputedPane = async (name) => {
    const properties = await (0, helper_js_1.$$)(COMPUTED_PROPERTY_SELECTOR);
    for (const property of properties) {
        const matchingProperty = await property.evaluate((node, name) => {
            const nameSlot = node.shadowRoot?.querySelector('.property-name slot');
            const nameEl = nameSlot?.assignedElements().at(0);
            return nameEl?.textContent?.trim().replace(/:$/, '') === name;
        }, name);
        // Note that evaluateHandle always returns a handle, even if it points to an undefined remote object, so we need to
        // check it's defined here or continue iterating.
        if (matchingProperty) {
            return property;
        }
    }
    return undefined;
};
exports.getPropertyFromComputedPane = getPropertyFromComputedPane;
const waitForPropertyValueInComputedPane = async (name, value) => {
    await (0, helper_js_1.waitForFunction)(async () => {
        const properties = await (0, exports.getAllPropertiesFromComputedPane)();
        for (const property of properties) {
            if (property && property.name === name && property.value === value) {
                return true;
            }
        }
        return false;
    });
};
exports.waitForPropertyValueInComputedPane = waitForPropertyValueInComputedPane;
const expandSelectedNodeRecursively = async () => {
    const EXPAND_RECURSIVELY = '[aria-label="Expand recursively"]';
    // Find the selected node, right click.
    await (0, helper_js_1.click)(SELECTED_TREE_ELEMENT_SELECTOR, { clickOptions: { button: 'right' } });
    // Wait for the 'expand recursively' option, and click it.
    await (0, helper_js_1.click)(EXPAND_RECURSIVELY);
};
exports.expandSelectedNodeRecursively = expandSelectedNodeRecursively;
const forcePseudoState = async (pseudoState) => {
    // Open element state pane and wait for it to be loaded asynchronously
    await (0, helper_js_1.click)('[aria-label="Toggle Element State"]');
    await (0, helper_js_1.waitFor)(`[aria-label="${pseudoState}"]`);
    // FIXME(crbug/1112692): Refactor test to remove the timeout.
    await (0, helper_js_1.timeout)(100);
    await (0, helper_js_1.click)(`[aria-label="${pseudoState}"]`);
};
exports.forcePseudoState = forcePseudoState;
const removePseudoState = async (pseudoState) => {
    await (0, helper_js_1.click)(`[aria-label="${pseudoState}"]`);
};
exports.removePseudoState = removePseudoState;
const getComputedStylesForDomNode = async (elementSelector, styleAttribute) => {
    const { target } = (0, helper_js_1.getBrowserAndPages)();
    return target.evaluate((elementSelector, styleAttribute) => {
        const element = document.querySelector(elementSelector);
        if (!element) {
            throw new Error(`${elementSelector} could not be found`);
        }
        return getComputedStyle(element)[styleAttribute];
    }, elementSelector, styleAttribute);
};
exports.getComputedStylesForDomNode = getComputedStylesForDomNode;
const waitForNumberOfComputedProperties = async (numberToWaitFor) => {
    const computedPane = await (0, exports.getComputedPanel)();
    return (0, helper_js_1.waitForFunction)(async () => numberToWaitFor ===
        await computedPane.$$eval('pierce/' + COMPUTED_PROPERTY_SELECTOR, properties => properties.length));
};
exports.waitForNumberOfComputedProperties = waitForNumberOfComputedProperties;
const getComputedPanel = async () => (0, helper_js_1.waitFor)(COMPUTED_STYLES_PANEL_SELECTOR);
exports.getComputedPanel = getComputedPanel;
const filterComputedProperties = async (filterString) => {
    const initialContent = await (0, exports.getContentOfComputedPane)();
    const computedPanel = await (0, helper_js_1.waitFor)(COMPUTED_STYLES_PANEL_SELECTOR);
    await (0, helper_js_1.click)('[aria-label="Filter Computed Styles"]', {
        root: computedPanel,
    });
    await (0, helper_js_1.typeText)(filterString);
    await (0, exports.waitForComputedPaneChange)(initialContent);
};
exports.filterComputedProperties = filterComputedProperties;
const toggleShowAllComputedProperties = async () => {
    const initialContent = await (0, exports.getContentOfComputedPane)();
    const computedPanel = await (0, helper_js_1.waitFor)(COMPUTED_STYLES_PANEL_SELECTOR);
    await (0, helper_js_1.click)(COMPUTED_STYLES_SHOW_ALL_SELECTOR, { root: computedPanel });
    await (0, exports.waitForComputedPaneChange)(initialContent);
};
exports.toggleShowAllComputedProperties = toggleShowAllComputedProperties;
const toggleGroupComputedProperties = async () => {
    const computedPanel = await (0, helper_js_1.waitFor)(COMPUTED_STYLES_PANEL_SELECTOR);
    const groupCheckbox = await (0, helper_js_1.waitFor)(COMPUTED_STYLES_GROUP_SELECTOR, computedPanel);
    const wasChecked = await groupCheckbox.evaluate(checkbox => checkbox.checked);
    await (0, helper_js_1.click)(COMPUTED_STYLES_GROUP_SELECTOR, {
        root: computedPanel,
    });
    if (wasChecked) {
        await (0, helper_js_1.waitFor)('[role="tree"].alphabetical-list', computedPanel);
    }
    else {
        await (0, helper_js_1.waitFor)('[role="tree"].grouped-list', computedPanel);
    }
};
exports.toggleGroupComputedProperties = toggleGroupComputedProperties;
const waitForDomNodeToBeVisible = async (elementSelector) => {
    const { target } = (0, helper_js_1.getBrowserAndPages)();
    // DevTools will force Blink to make the hover shown, so we have
    // to wait for the element to be DOM-visible (e.g. no `display: none;`)
    await target.waitForSelector(elementSelector, { visible: true });
};
exports.waitForDomNodeToBeVisible = waitForDomNodeToBeVisible;
const waitForDomNodeToBeHidden = async (elementSelector) => {
    const { target } = (0, helper_js_1.getBrowserAndPages)();
    await target.waitForSelector(elementSelector, { hidden: true });
};
exports.waitForDomNodeToBeHidden = waitForDomNodeToBeHidden;
const assertGutterDecorationForDomNodeExists = async () => {
    await (0, helper_js_1.waitFor)('.elements-gutter-decoration');
};
exports.assertGutterDecorationForDomNodeExists = assertGutterDecorationForDomNodeExists;
const getStyleRuleSelector = (selector) => `[aria-label="${selector}, css selector"]`;
exports.getStyleRuleSelector = getStyleRuleSelector;
const waitForExactStyleRule = async (expectedSelector) => {
    await (0, helper_js_1.waitForFunction)(async () => {
        const rules = await (0, exports.getDisplayedStyleRules)();
        return rules.find(rule => rule.selectorText === expectedSelector);
    });
};
exports.waitForExactStyleRule = waitForExactStyleRule;
const waitForStyleRule = async (expectedSelector) => {
    await (0, helper_js_1.waitForFunction)(async () => {
        const rules = await (0, exports.getDisplayedStyleRules)();
        return rules.map(rule => rule.selectorText).includes(expectedSelector);
    });
};
exports.waitForStyleRule = waitForStyleRule;
const getComputedStyleProperties = async () => {
    const computedPanel = await (0, exports.getComputedPanel)();
    const allProperties = await computedPanel.$$('pierce/[role="treeitem"][aria-level="1"]');
    const properties = [];
    for (const prop of allProperties) {
        const name = await prop.$eval('pierce/' + CSS_PROPERTY_NAME_SELECTOR, element => element.textContent);
        const value = await prop.$eval('pierce/' + CSS_PROPERTY_VALUE_SELECTOR, element => element.textContent);
        const traceElements = await prop.$$('pierce/devtools-computed-style-trace');
        const trace = await Promise.all(traceElements.map(async (element) => {
            const value = await element.$eval('pierce/.value', element => element.textContent);
            const selector = await element.$eval('pierce/.trace-selector', element => element.textContent);
            const link = await element.$eval('pierce/.trace-link', element => element.textContent);
            return { value, selector, link };
        }));
        properties.push({ name, value, trace });
    }
    return properties;
};
exports.getComputedStyleProperties = getComputedStyleProperties;
const getDisplayedCSSDeclarations = async () => {
    const cssDeclarations = await (0, helper_js_1.$$)(CSS_DECLARATION_SELECTOR);
    return Promise.all(cssDeclarations.map(async (node) => await node.evaluate(n => n.textContent?.trim())));
};
exports.getDisplayedCSSDeclarations = getDisplayedCSSDeclarations;
const getDisplayedStyleRulesCompact = async () => {
    const compactRules = [];
    for (const rule of await (0, exports.getDisplayedStyleRules)()) {
        compactRules.push({ selectorText: rule.selectorText, propertyNames: rule.propertyData.map(data => data.propertyName) });
    }
    return compactRules;
};
exports.getDisplayedStyleRulesCompact = getDisplayedStyleRulesCompact;
const getDisplayedStyleRules = async () => {
    const allRuleSelectors = await (0, helper_js_1.$$)(CSS_STYLE_RULE_SELECTOR);
    const rules = [];
    for (const ruleSelector of allRuleSelectors) {
        const propertyData = await (0, exports.getDisplayedCSSPropertyData)(ruleSelector);
        const selectorText = await ruleSelector.evaluate(node => {
            const attribute = node.getAttribute('aria-label') || '';
            return attribute.substring(0, attribute.lastIndexOf(', css selector'));
        });
        rules.push({ selectorText, propertyData });
    }
    return rules;
};
exports.getDisplayedStyleRules = getDisplayedStyleRules;
/**
 * @param propertiesSection - The element containing this properties section.
 * @returns an array with an entry for each property in the section. Each entry has:
 * - propertyName: The name of this property.
 * - isOverloaded: True if this is an inherited properties section, and this property is overloaded by a child node.
 *                 The property will be shown as crossed out in the style pane.
 * - isInherited: True if this is an inherited properties section, and this property is a non-inherited CSS property.
 *                The property will be shown as grayed-out in the style pane.
 */
const getDisplayedCSSPropertyData = async (propertiesSection) => {
    const cssPropertyNames = await (0, helper_js_1.$$)(CSS_PROPERTY_NAME_SELECTOR, propertiesSection);
    const propertyNamesData = (await Promise.all(cssPropertyNames.map(async (node) => {
        return {
            propertyName: await node.evaluate(n => n.textContent),
            isOverLoaded: await node.evaluate(n => n.parentElement && n.parentElement.matches('.overloaded')),
            isInherited: await node.evaluate(n => n.parentElement && n.parentElement.matches('.inherited')),
        };
    })))
        .filter(c => Boolean(c.propertyName));
    return propertyNamesData;
};
exports.getDisplayedCSSPropertyData = getDisplayedCSSPropertyData;
const getDisplayedCSSPropertyNames = async (propertiesSection) => {
    const cssPropertyNames = await (0, helper_js_1.$$)(CSS_PROPERTY_NAME_SELECTOR, propertiesSection);
    const propertyNamesText = (await Promise.all(cssPropertyNames.map(node => node.evaluate(n => n.textContent))))
        .filter(c => Boolean(c));
    return propertyNamesText;
};
exports.getDisplayedCSSPropertyNames = getDisplayedCSSPropertyNames;
const getStyleRule = (selector) => {
    return (0, helper_js_1.waitFor)((0, exports.getStyleRuleSelector)(selector));
};
exports.getStyleRule = getStyleRule;
const getStyleRuleWithSourcePosition = (styleSelector, sourcePosition) => {
    if (!sourcePosition) {
        return (0, exports.getStyleRule)(styleSelector);
    }
    const selector = (0, exports.getStyleRuleSelector)(styleSelector);
    return (0, helper_js_1.waitForFunction)(async () => {
        const candidate = await (0, helper_js_1.waitFor)(selector);
        if (candidate) {
            const sourcePositionElement = await candidate.$('.styles-section-subtitle .devtools-link');
            const text = await sourcePositionElement?.evaluate(node => node.textContent);
            if (text === sourcePosition) {
                return candidate;
            }
        }
        return undefined;
    });
};
exports.getStyleRuleWithSourcePosition = getStyleRuleWithSourcePosition;
const getColorSwatch = async (parent, index) => {
    const swatches = await (0, helper_js_1.$$)(COLOR_SWATCH_SELECTOR, parent);
    return swatches[index];
};
exports.getColorSwatch = getColorSwatch;
const getColorSwatchColor = async (parent, index) => {
    const swatch = await (0, exports.getColorSwatch)(parent, index);
    return await swatch.evaluate(node => node.style.backgroundColor);
};
exports.getColorSwatchColor = getColorSwatchColor;
const shiftClickColorSwatch = async (ruleSection, index) => {
    const swatch = await (0, exports.getColorSwatch)(ruleSection, index);
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await frontend.keyboard.down('Shift');
    await (0, helper_js_1.clickElement)(swatch);
    await frontend.keyboard.up('Shift');
};
exports.shiftClickColorSwatch = shiftClickColorSwatch;
const getElementStyleFontEditorButton = async () => {
    const section = await (0, helper_js_1.waitFor)(ELEMENT_STYLE_SECTION_SELECTOR);
    return await (0, helper_js_1.$)(FONT_EDITOR_SELECTOR, section);
};
exports.getElementStyleFontEditorButton = getElementStyleFontEditorButton;
const getFontEditorButtons = async () => {
    const buttons = await (0, helper_js_1.$$)(FONT_EDITOR_SELECTOR);
    return buttons;
};
exports.getFontEditorButtons = getFontEditorButtons;
const getHiddenFontEditorButtons = async () => {
    const buttons = await (0, helper_js_1.$$)(HIDDEN_FONT_EDITOR_SELECTOR);
    return buttons;
};
exports.getHiddenFontEditorButtons = getHiddenFontEditorButtons;
const getStyleSectionSubtitles = async () => {
    const subtitles = await (0, helper_js_1.$$)(exports.SECTION_SUBTITLE_SELECTOR);
    return Promise.all(subtitles.map(node => node.evaluate(n => n.textContent)));
};
exports.getStyleSectionSubtitles = getStyleSectionSubtitles;
const getCSSPropertyInRule = async (ruleSection, name, sourcePosition) => {
    if (typeof ruleSection === 'string') {
        ruleSection = await (0, exports.getStyleRuleWithSourcePosition)(ruleSection, sourcePosition);
    }
    const propertyNames = await (0, helper_js_1.$$)(CSS_PROPERTY_NAME_SELECTOR, ruleSection);
    for (const node of propertyNames) {
        const parent = (await node.evaluateHandle((node, name) => (name === node.textContent) ? node.parentNode : undefined, name))
            .asElement();
        if (parent) {
            return parent;
        }
    }
    return undefined;
};
exports.getCSSPropertyInRule = getCSSPropertyInRule;
const focusCSSPropertyValue = async (selector, propertyName) => {
    await (0, exports.waitForStyleRule)(selector);
    let property = await (0, exports.getCSSPropertyInRule)(selector, propertyName);
    // Clicking on the semicolon element to make sure we don't hit the swatch or other
    // non-editable elements.
    await (0, helper_js_1.click)(CSS_PROPERTY_VALUE_SELECTOR + ' + .styles-semicolon', { root: property });
    await (0, helper_js_1.waitForFunction)(async () => {
        property = await (0, exports.getCSSPropertyInRule)(selector, propertyName);
        const value = await (0, helper_js_1.$)(CSS_PROPERTY_VALUE_SELECTOR, property);
        if (!value) {
            chai_1.assert.fail(`Could not find property ${propertyName} in rule ${selector}`);
        }
        return await value.evaluate(node => {
            return node.classList.contains('text-prompt') && node.hasAttribute('contenteditable');
        });
    });
};
exports.focusCSSPropertyValue = focusCSSPropertyValue;
/**
 * Edit a CSS property value in a given rule
 * @param selector The selector of the rule to be updated. Note that because of the way the Styles populates, it is
 * important to provide a rule selector that is unique here, to avoid editing a property in the wrong rule.
 * @param propertyName The name of the property to be found and edited. If several properties have the same names, the
 * first one is edited.
 * @param newValue The new value to be used.
 */
async function editCSSProperty(selector, propertyName, newValue) {
    await (0, exports.focusCSSPropertyValue)(selector, propertyName);
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await frontend.keyboard.type(newValue, { delay: 100 });
    await frontend.keyboard.press('Enter');
    await (0, helper_js_1.waitForFunction)(async () => {
        // Wait until the value element is not a text-prompt anymore.
        const property = await (0, exports.getCSSPropertyInRule)(selector, propertyName);
        const value = await (0, helper_js_1.$)(CSS_PROPERTY_VALUE_SELECTOR, property);
        if (!value) {
            chai_1.assert.fail(`Could not find property ${propertyName} in rule ${selector}`);
        }
        return await value.evaluate(node => {
            return !node.classList.contains('text-prompt') && !node.hasAttribute('contenteditable');
        });
    });
}
exports.editCSSProperty = editCSSProperty;
// Edit a media or container query rule text for the given styles section
async function editQueryRuleText(queryStylesSections, newQueryText) {
    await (0, helper_js_1.click)(STYLE_QUERY_RULE_TEXT_SELECTOR, { root: queryStylesSections });
    await (0, helper_js_1.waitForFunction)(async () => {
        // Wait until the value element has been marked as a text-prompt.
        const queryText = await (0, helper_js_1.$)(STYLE_QUERY_RULE_TEXT_SELECTOR, queryStylesSections);
        if (!queryText) {
            chai_1.assert.fail('Could not find any query in the given styles section');
        }
        const check = await queryText.evaluate(node => {
            return node.classList.contains('being-edited') && node.hasAttribute('contenteditable');
        });
        return check;
    });
    await (0, helper_js_1.typeText)(newQueryText);
    await (0, helper_js_1.pressKey)('Enter');
    await (0, helper_js_1.waitForFunction)(async () => {
        // Wait until the value element is not a text-prompt anymore.
        const queryText = await (0, helper_js_1.$)(STYLE_QUERY_RULE_TEXT_SELECTOR, queryStylesSections);
        if (!queryText) {
            chai_1.assert.fail('Could not find any query in the given styles section');
        }
        const check = await queryText.evaluate(node => {
            return !node.classList.contains('being-edited') && !node.hasAttribute('contenteditable');
        });
        return check;
    });
}
exports.editQueryRuleText = editQueryRuleText;
async function waitForCSSPropertyValue(selector, name, value, sourcePosition) {
    return await (0, helper_js_1.waitForFunction)(async () => {
        const propertyHandle = await (0, exports.getCSSPropertyInRule)(selector, name, sourcePosition);
        if (!propertyHandle) {
            return undefined;
        }
        const valueHandle = await (0, helper_js_1.$)(CSS_PROPERTY_VALUE_SELECTOR, propertyHandle);
        if (!valueHandle) {
            return undefined;
        }
        const matches = await valueHandle.evaluate((node, value) => node.textContent === value, value);
        if (matches) {
            return valueHandle;
        }
        return undefined;
    });
}
exports.waitForCSSPropertyValue = waitForCSSPropertyValue;
async function waitForPropertyToHighlight(ruleSelector, propertyName) {
    await (0, helper_js_1.waitForFunction)(async () => {
        const property = await (0, exports.getCSSPropertyInRule)(ruleSelector, propertyName);
        if (!property) {
            chai_1.assert.fail(`Could not find property ${propertyName} in rule ${ruleSelector}`);
        }
        // StylePropertyHighlighter temporarily highlights the property using the Web Animations API, so the only way to
        // know it's happening is by listing all animations.
        const animationCount = await property.evaluate(node => node.getAnimations().length);
        return animationCount > 0;
    });
}
exports.waitForPropertyToHighlight = waitForPropertyToHighlight;
const getBreadcrumbsTextContent = async ({ expectedNodeCount }) => {
    const crumbsSelector = 'li.crumb > a > devtools-node-text';
    await (0, helper_js_1.waitForFunction)(async () => {
        const crumbs = await (0, helper_js_1.$$)(crumbsSelector);
        return crumbs.length === expectedNodeCount;
    });
    const crumbs = await (0, helper_js_1.$$)(crumbsSelector);
    const crumbsAsText = await Promise.all(crumbs.map(node => node.evaluate((node) => {
        if (!node.shadowRoot) {
            chai_1.assert.fail('Found breadcrumbs node that unexpectedly has no shadowRoot.');
        }
        return Array.from(node.shadowRoot.querySelectorAll('span') || []).map(span => span.textContent).join('');
    })));
    return crumbsAsText;
};
exports.getBreadcrumbsTextContent = getBreadcrumbsTextContent;
const getSelectedBreadcrumbTextContent = async () => {
    const selectedCrumb = await (0, helper_js_1.waitFor)('li.crumb.selected > a > devtools-node-text');
    const text = selectedCrumb.evaluate((node) => {
        if (!node.shadowRoot) {
            chai_1.assert.fail('Found breadcrumbs node that unexpectedly has no shadowRoot.');
        }
        return Array.from(node.shadowRoot.querySelectorAll('span') || []).map(span => span.textContent).join('');
    });
    return text;
};
exports.getSelectedBreadcrumbTextContent = getSelectedBreadcrumbTextContent;
const navigateToElementsTab = async () => {
    // Open Elements panel
    await (0, helper_js_1.click)('#tab-elements');
    await (0, helper_js_1.waitFor)(exports.ELEMENTS_PANEL_SELECTOR);
};
exports.navigateToElementsTab = navigateToElementsTab;
const clickOnFirstLinkInStylesPanel = async () => {
    const stylesPane = await (0, helper_js_1.waitFor)('div.styles-pane');
    await (0, helper_js_1.click)('div.styles-section-subtitle span.devtools-link', { root: stylesPane });
};
exports.clickOnFirstLinkInStylesPanel = clickOnFirstLinkInStylesPanel;
const toggleClassesPane = async () => {
    await (0, helper_js_1.click)(CLS_BUTTON_SELECTOR);
};
exports.toggleClassesPane = toggleClassesPane;
const typeInClassesPaneInput = async (text, commitWith = 'Enter', waitForNodeChange = true) => {
    await (0, helper_js_1.step)(`Typing in new class names ${text}`, async () => {
        const clsInput = await (0, helper_js_1.waitFor)(CLS_INPUT_SELECTOR);
        await clsInput.type(text, { delay: 50 });
    });
    if (commitWith) {
        await (0, helper_js_1.step)(`Committing the changes with ${commitWith}`, async () => {
            const { frontend } = (0, helper_js_1.getBrowserAndPages)();
            await frontend.keyboard.press(commitWith);
        });
    }
    if (waitForNodeChange) {
        // Make sure the classes provided in text can be found in the selected element's content. This is important as the
        // cls pane applies classes as you type, so it is not enough to wait for the selected node to change just once.
        await (0, helper_js_1.step)('Waiting for the selected node to change', async () => {
            await (0, helper_js_1.waitForFunction)(async () => {
                const nodeContent = await (0, exports.getContentOfSelectedNode)();
                return text.split(' ').every(cls => nodeContent.includes(cls));
            });
        });
    }
};
exports.typeInClassesPaneInput = typeInClassesPaneInput;
const toggleClassesPaneCheckbox = async (checkboxLabel) => {
    const initialValue = await (0, exports.getContentOfSelectedNode)();
    const classesPane = await (0, helper_js_1.waitFor)(CLS_PANE_SELECTOR);
    await (0, helper_js_1.click)(`[title="${checkboxLabel}"]`, { root: classesPane });
    await (0, exports.waitForSelectedNodeChange)(initialValue);
};
exports.toggleClassesPaneCheckbox = toggleClassesPaneCheckbox;
const uncheckStylesPaneCheckbox = async (checkboxLabel) => {
    const initialValue = await (0, exports.getContentOfSelectedNode)();
    await (0, helper_js_1.click)(`.enabled-button[aria-label="${checkboxLabel}"]`);
    await (0, exports.waitForSelectedNodeChange)(initialValue);
};
exports.uncheckStylesPaneCheckbox = uncheckStylesPaneCheckbox;
const assertSelectedNodeClasses = async (expectedClasses) => {
    const nodeText = await (0, exports.getContentOfSelectedNode)();
    const match = nodeText.match(/class=\u200B"([^"]*)/);
    const classText = match ? match[1] : '';
    const classes = classText.split(/[\s]/).map(className => className.trim()).filter(className => className.length);
    chai_1.assert.strictEqual(classes.length, expectedClasses.length, 'Did not find the expected number of classes on the element');
    for (const expectedClass of expectedClasses) {
        chai_1.assert.include(classes, expectedClass, `Could not find class ${expectedClass} on the element`);
    }
};
exports.assertSelectedNodeClasses = assertSelectedNodeClasses;
const toggleAccessibilityPane = async () => {
    let a11yPane = await (0, helper_js_1.$)('Accessibility', undefined, 'aria');
    if (!a11yPane) {
        const elementsPanel = await (0, helper_js_1.waitForAria)('Elements panel');
        const moreTabs = await (0, helper_js_1.waitForAria)('More tabs', elementsPanel);
        await (0, helper_js_1.clickElement)(moreTabs);
        a11yPane = await (0, helper_js_1.waitForAria)('Accessibility');
    }
    await (0, helper_js_1.clickElement)(a11yPane);
};
exports.toggleAccessibilityPane = toggleAccessibilityPane;
const toggleAccessibilityTree = async () => {
    await (0, helper_js_1.click)('aria/Switch to Accessibility Tree view');
};
exports.toggleAccessibilityTree = toggleAccessibilityTree;
const getPropertiesWithHints = async () => {
    const allRuleSelectors = await (0, helper_js_1.$$)(CSS_STYLE_RULE_SELECTOR);
    const propertiesWithHints = [];
    for (const propertiesSection of allRuleSelectors) {
        const cssRuleNodes = await (0, helper_js_1.$$)('li ', propertiesSection);
        for (const cssRuleNode of cssRuleNodes) {
            const propertyNode = await (0, helper_js_1.$)(CSS_PROPERTY_NAME_SELECTOR, cssRuleNode);
            const propertyName = propertyNode !== null ? await propertyNode.evaluate(n => n.textContent) : null;
            if (propertyName === null) {
                continue;
            }
            const authoringHintsIcon = await (0, helper_js_1.$)(CSS_AUTHORING_HINTS_ICON_SELECTOR, cssRuleNode);
            if (authoringHintsIcon) {
                propertiesWithHints.push(propertyName);
            }
        }
    }
    return propertiesWithHints;
};
exports.getPropertiesWithHints = getPropertiesWithHints;
const summonAndWaitForSearchBox = async () => {
    await (0, helper_js_1.summonSearchBox)();
    await (0, helper_js_1.waitFor)(exports.SEARCH_BOX_SELECTOR);
};
exports.summonAndWaitForSearchBox = summonAndWaitForSearchBox;
const assertSearchResultMatchesText = async (text) => {
    await (0, helper_js_1.waitForFunction)(async () => {
        return await (0, helper_js_1.getTextContent)(SEARCH_RESULTS_MATCHES) === text;
    });
};
exports.assertSearchResultMatchesText = assertSearchResultMatchesText;
const goToResourceAndWaitForStyleSection = async (path) => {
    await (0, helper_js_1.goToResource)(path);
    await (0, exports.waitForElementsStyleSection)();
    // Check to make sure we have the correct node selected after opening a file.
    await (0, exports.waitForPartialContentOfSelectedElementsNode)('<body>\u200B');
};
exports.goToResourceAndWaitForStyleSection = goToResourceAndWaitForStyleSection;
const checkStyleAttributes = async (expectedStyles) => {
    const result = await (0, helper_js_1.$$)(exports.STYLE_PROPERTIES_SELECTOR, undefined, 'pierce');
    const actual = await Promise.all(result.map(e => e.evaluate(e => e.textContent?.trim())));
    return actual.sort().join(' ') === expectedStyles.sort().join(' ');
};
exports.checkStyleAttributes = checkStyleAttributes;
//# sourceMappingURL=elements-helpers.js.map