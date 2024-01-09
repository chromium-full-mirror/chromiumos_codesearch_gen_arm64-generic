"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectNonDualScreenDevice = exports.getWidthOfDevice = exports.clickToggleButton = exports.getDevicePostureDropDown = exports.clickDevicePosture = exports.selectFoldableDevice = exports.selectDualScreen = exports.selectTestDevice = exports.selectDevice = exports.selectEdit = exports.selectToggleButton = exports.clickZoomDropDown = exports.clickDevicePostureDropDown = exports.clickDevicesDropDown = exports.getButtonDisabled = exports.startEmulationWithDualScreenPage = exports.showMediaQueryInspector = exports.openDeviceToolbar = exports.reloadDockableFrontEnd = void 0;
const helper_js_1 = require("../../shared/helper.js");
const DEVICE_TOOLBAR_TOGGLER_SELECTOR = '[aria-label="Toggle device toolbar"]';
const DEVICE_TOOLBAR_SELECTOR = '.device-mode-toolbar';
const DEVICE_TOOLBAR_OPTIONS_SELECTOR = '.device-mode-toolbar .device-mode-toolbar-options';
const MEDIA_QUERY_INSPECTOR_SELECTOR = '.media-inspector-view';
const DEVICE_LIST_DROPDOWN_SELECTOR = '.toolbar-button';
const ZOOM_LIST_DROPDOWN_SELECTOR = '[aria-label*="Zoom"]';
const SURFACE_DUO_MENU_ITEM_SELECTOR = '[aria-label*="Surface Duo"]';
const FOLDABLE_DEVICE_MENU_ITEM_SELECTOR = '[aria-label*="Asus Zenbook Fold"]';
const EDIT_MENU_ITEM_SELECTOR = '[aria-label*="Edit"]';
const TEST_DEVICE_MENU_ITEM_SELECTOR = '[aria-label*="Test device, unchecked"]';
const DUAL_SCREEN_BUTTON_SELECTOR = '[aria-label="Toggle dual-screen mode"]';
const DEVICE_POSTURE_DROPDOWN_SELECTOR = '[aria-label="Device posture"]';
const SCREEN_DIM_INPUT_SELECTOR = '[title="Width"]';
const reloadDockableFrontEnd = async () => {
    await (0, helper_js_1.reloadDevTools)({ canDock: true });
};
exports.reloadDockableFrontEnd = reloadDockableFrontEnd;
const openDeviceToolbar = async () => {
    const deviceToolbarToggler = await (0, helper_js_1.waitFor)(DEVICE_TOOLBAR_TOGGLER_SELECTOR);
    const togglerARIAPressed = await deviceToolbarToggler.evaluate(element => element.getAttribute('aria-pressed'));
    const isOpen = togglerARIAPressed === 'true';
    if (isOpen) {
        return;
    }
    await (0, helper_js_1.clickElement)(deviceToolbarToggler);
    await (0, helper_js_1.waitFor)(DEVICE_TOOLBAR_SELECTOR);
};
exports.openDeviceToolbar = openDeviceToolbar;
const showMediaQueryInspector = async () => {
    const inspector = await (0, helper_js_1.$)(MEDIA_QUERY_INSPECTOR_SELECTOR);
    if (inspector) {
        return;
    }
    await (0, helper_js_1.click)(DEVICE_TOOLBAR_OPTIONS_SELECTOR);
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await frontend.keyboard.press('ArrowDown');
    await frontend.keyboard.press('Enter');
    await (0, helper_js_1.waitFor)(MEDIA_QUERY_INSPECTOR_SELECTOR);
};
exports.showMediaQueryInspector = showMediaQueryInspector;
const startEmulationWithDualScreenPage = async () => {
    await (0, exports.reloadDockableFrontEnd)();
    await (0, helper_js_1.goToResource)('emulation/dual-screen-inspector.html');
    await (0, helper_js_1.waitFor)('.tabbed-pane-left-toolbar');
    await (0, exports.openDeviceToolbar)();
};
exports.startEmulationWithDualScreenPage = startEmulationWithDualScreenPage;
const getButtonDisabled = async (spanButton) => {
    return await spanButton.evaluate((e) => {
        return e.disabled;
    });
};
exports.getButtonDisabled = getButtonDisabled;
const clickDevicesDropDown = async () => {
    const toolbar = await (0, helper_js_1.waitFor)(DEVICE_TOOLBAR_SELECTOR);
    await (0, helper_js_1.click)(DEVICE_LIST_DROPDOWN_SELECTOR, { root: toolbar });
};
exports.clickDevicesDropDown = clickDevicesDropDown;
const clickDevicePostureDropDown = async () => {
    const toolbar = await (0, helper_js_1.waitFor)(DEVICE_TOOLBAR_SELECTOR);
    await (0, helper_js_1.click)(DEVICE_POSTURE_DROPDOWN_SELECTOR, { root: toolbar });
};
exports.clickDevicePostureDropDown = clickDevicePostureDropDown;
const clickZoomDropDown = async () => {
    const toolbar = await (0, helper_js_1.waitFor)(DEVICE_TOOLBAR_SELECTOR);
    await (0, helper_js_1.click)(ZOOM_LIST_DROPDOWN_SELECTOR, { root: toolbar });
};
exports.clickZoomDropDown = clickZoomDropDown;
const selectToggleButton = async () => {
    // button that toggles between single and double screen.
    const toggleButton = await (0, helper_js_1.$)(DUAL_SCREEN_BUTTON_SELECTOR);
    return toggleButton;
};
exports.selectToggleButton = selectToggleButton;
const selectEdit = async () => {
    await (0, exports.clickDevicesDropDown)();
    await (0, helper_js_1.click)(EDIT_MENU_ITEM_SELECTOR);
};
exports.selectEdit = selectEdit;
const selectDevice = async (name) => {
    await (0, exports.clickDevicesDropDown)();
    await (0, helper_js_1.click)(`[aria-label*="${name}, unchecked"]`);
};
exports.selectDevice = selectDevice;
const selectTestDevice = async () => {
    await (0, exports.clickDevicesDropDown)();
    await (0, helper_js_1.click)(TEST_DEVICE_MENU_ITEM_SELECTOR);
};
exports.selectTestDevice = selectTestDevice;
// Test if span button works when emulating a dual screen device.
const selectDualScreen = async () => {
    await (0, exports.clickDevicesDropDown)();
    await (0, helper_js_1.click)(SURFACE_DUO_MENU_ITEM_SELECTOR);
};
exports.selectDualScreen = selectDualScreen;
const selectFoldableDevice = async () => {
    await (0, exports.clickDevicesDropDown)();
    await (0, helper_js_1.click)(FOLDABLE_DEVICE_MENU_ITEM_SELECTOR);
};
exports.selectFoldableDevice = selectFoldableDevice;
const clickDevicePosture = async (name) => {
    await (0, exports.clickDevicePostureDropDown)();
    await (0, helper_js_1.click)(`[aria-label*="${name}, unchecked"]`);
};
exports.clickDevicePosture = clickDevicePosture;
const getDevicePostureDropDown = async () => {
    // dropdown menu for the posture selection.
    const dropdown = await (0, helper_js_1.$)(DEVICE_POSTURE_DROPDOWN_SELECTOR);
    return dropdown;
};
exports.getDevicePostureDropDown = getDevicePostureDropDown;
const clickToggleButton = async () => {
    // make sure the toggle button is clickable.
    const toggleButton = await (0, exports.selectToggleButton)();
    await (0, helper_js_1.clickElement)(toggleButton);
};
exports.clickToggleButton = clickToggleButton;
const getWidthOfDevice = async () => {
    // Read the width of spanned duo to make sure spanning works.
    const widthInput = await (0, helper_js_1.waitFor)(SCREEN_DIM_INPUT_SELECTOR);
    return widthInput.evaluate(e => e.value);
};
exports.getWidthOfDevice = getWidthOfDevice;
const IPAD_MENU_ITEM_SELECTOR = '[aria-label*="iPad"]';
// Test if span button is clickable when emulating a non-dual-screen device.
const selectNonDualScreenDevice = async () => {
    await (0, exports.clickDevicesDropDown)();
    await (0, helper_js_1.click)(IPAD_MENU_ITEM_SELECTOR);
};
exports.selectNonDualScreenDevice = selectNonDualScreenDevice;
//# sourceMappingURL=emulation-helpers.js.map