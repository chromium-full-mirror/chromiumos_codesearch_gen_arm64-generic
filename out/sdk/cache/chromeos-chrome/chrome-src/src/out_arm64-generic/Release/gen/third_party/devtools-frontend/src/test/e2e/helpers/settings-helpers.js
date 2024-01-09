"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleIgnoreListing = exports.setIgnoreListPattern = exports.togglePreferenceInSettingsTab = exports.closeSettings = exports.openSettingsTab = exports.openPanelViaMoreTools = void 0;
const helper_js_1 = require("../../shared/helper.js");
const openPanelViaMoreTools = async (panelTitle) => {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await frontend.bringToFront();
    // Head to the triple dot menu.
    await (0, helper_js_1.click)('aria/Customize and control DevTools');
    await (0, helper_js_1.waitForFunction)(async () => {
        // Open the “More Tools” option.
        await (0, helper_js_1.hover)('aria/More tools[role="menuitem"]');
        return (0, helper_js_1.$)(`${panelTitle}[role="menuitem"]`, undefined, 'aria');
    });
    // Click the desired menu item
    await (0, helper_js_1.click)(`aria/${panelTitle}[role="menuitem"]`);
    // Wait for the corresponding panel to appear.
    await (0, helper_js_1.waitForAria)(`${panelTitle} panel[role="tabpanel"]`);
};
exports.openPanelViaMoreTools = openPanelViaMoreTools;
const openSettingsTab = async (tabTitle) => {
    const gearIconSelector = '.toolbar-button[aria-label="Settings"]';
    const settingsMenuSelector = `.tabbed-pane-header-tab[aria-label="${tabTitle}"]`;
    const panelSelector = `.view-container[aria-label="${tabTitle} panel"]`;
    // Click on the Settings Gear toolbar icon.
    await (0, helper_js_1.click)(gearIconSelector);
    // Click on the Settings tab and wait for the panel to appear.
    await (0, helper_js_1.click)(settingsMenuSelector);
    await (0, helper_js_1.waitFor)(panelSelector);
};
exports.openSettingsTab = openSettingsTab;
const closeSettings = async () => {
    await (0, helper_js_1.click)('.dialog-close-button');
};
exports.closeSettings = closeSettings;
const togglePreferenceInSettingsTab = async (label, shouldBeChecked) => {
    await (0, exports.openSettingsTab)('Preferences');
    const selector = `[aria-label="${label}"]`;
    await (0, helper_js_1.scrollElementIntoView)(selector);
    const preference = await (0, helper_js_1.waitFor)(selector);
    const value = await preference.evaluate(checkbox => checkbox.checked);
    if (value !== shouldBeChecked) {
        await (0, helper_js_1.clickElement)(preference);
        await (0, helper_js_1.waitForFunction)(async () => {
            const newValue = await preference.evaluate(checkbox => checkbox.checked);
            return newValue !== value;
        });
    }
    await (0, exports.closeSettings)();
};
exports.togglePreferenceInSettingsTab = togglePreferenceInSettingsTab;
const setIgnoreListPattern = async (pattern) => {
    await (0, exports.openSettingsTab)('Ignore List');
    await (0, helper_js_1.click)('[aria-label="Add filename pattern"]');
    const textBox = await (0, helper_js_1.waitFor)('[aria-label="Add Pattern"]');
    await (0, helper_js_1.clickElement)(textBox);
    await textBox.type(pattern);
    await textBox.type('\n');
    await (0, helper_js_1.waitFor)(`[title="Ignore scripts whose names match '${pattern}'"]`);
    await (0, exports.closeSettings)();
};
exports.setIgnoreListPattern = setIgnoreListPattern;
const toggleIgnoreListing = async (enable) => {
    await (0, exports.openSettingsTab)('Ignore List');
    const enabledPattern = '.ignore-list-options:not(.ignore-listing-disabled)';
    const disabledPattern = '.ignore-list-options.ignore-listing-disabled';
    await (0, helper_js_1.waitFor)(enable ? disabledPattern : enabledPattern);
    await (0, helper_js_1.click)('[title="Enable Ignore Listing"]');
    await (0, helper_js_1.waitFor)(enable ? enabledPattern : disabledPattern);
    await (0, exports.closeSettings)();
};
exports.toggleIgnoreListing = toggleIgnoreListing;
//# sourceMappingURL=settings-helpers.js.map