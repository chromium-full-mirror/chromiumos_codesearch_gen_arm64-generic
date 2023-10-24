// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const LOGGING_ATTRIBUTE = 'jslog';
export function needsLogging(element) {
    return element.hasAttribute(LOGGING_ATTRIBUTE);
}
export function getLoggingConfig(element) {
    return parseJsLog(element.getAttribute(LOGGING_ATTRIBUTE) || '');
}
// eslint-disable-next-line rulesdir/const_enum
var VisualElements;
(function (VisualElements) {
    VisualElements[VisualElements["TreeItem"] = 1] = "TreeItem";
    VisualElements[VisualElements["AriaAttributes"] = 2] = "AriaAttributes";
    VisualElements[VisualElements["AccessibilityComputedProperties"] = 3] = "AccessibilityComputedProperties";
    VisualElements[VisualElements["AccessibilityPane"] = 4] = "AccessibilityPane";
    VisualElements[VisualElements["AccessibilitySourceOrder"] = 5] = "AccessibilitySourceOrder";
    VisualElements[VisualElements["Toggle"] = 6] = "Toggle";
    VisualElements[VisualElements["AddStylesRule"] = 7] = "AddStylesRule";
    VisualElements[VisualElements["FilterTextField"] = 8] = "FilterTextField";
    VisualElements[VisualElements["ShowAllStyleProperties"] = 9] = "ShowAllStyleProperties";
    VisualElements[VisualElements["StylePropertiesSection"] = 10] = "StylePropertiesSection";
    VisualElements[VisualElements["StylePropertiesSectionSeparator"] = 11] = "StylePropertiesSectionSeparator";
    VisualElements[VisualElements["StylesPane"] = 12] = "StylesPane";
    VisualElements[VisualElements["StylesSelector"] = 13] = "StylesSelector";
    VisualElements[VisualElements["TreeItemExpand"] = 14] = "TreeItemExpand";
    VisualElements[VisualElements["ToggleSubpane"] = 15] = "ToggleSubpane";
    VisualElements[VisualElements["ElementClassesPane"] = 16] = "ElementClassesPane";
    VisualElements[VisualElements["AddElementClassPrompt"] = 17] = "AddElementClassPrompt";
    VisualElements[VisualElements["ElementStatesPan"] = 18] = "ElementStatesPan";
    VisualElements[VisualElements["CssLayersPane"] = 19] = "CssLayersPane";
    VisualElements[VisualElements["DropDownButton"] = 20] = "DropDownButton";
    VisualElements[VisualElements["StylesMetricsPane"] = 21] = "StylesMetricsPane";
    VisualElements[VisualElements["JumpToSource"] = 22] = "JumpToSource";
    VisualElements[VisualElements["MetricsBox"] = 23] = "MetricsBox";
    VisualElements[VisualElements["MetricsBoxPart"] = 24] = "MetricsBoxPart";
    VisualElements[VisualElements["DOMBreakpointsPane"] = 25] = "DOMBreakpointsPane";
    VisualElements[VisualElements["DOMBreakpoint"] = 26] = "DOMBreakpoint";
    VisualElements[VisualElements["ElementPropertiesPane"] = 27] = "ElementPropertiesPane";
    VisualElements[VisualElements["EventListenersPane"] = 28] = "EventListenersPane";
    VisualElements[VisualElements["Refresh"] = 29] = "Refresh";
    VisualElements[VisualElements["FilterDropdown"] = 30] = "FilterDropdown";
})(VisualElements || (VisualElements = {}));
function resolveVe(ve) {
    return VisualElements[ve] || 0;
}
function parseJsLog(jslog) {
    const components = jslog.replace(/ /g, '').split(';');
    const getComponent = (name) => components.find(c => c.startsWith(name))?.substr(name.length);
    const ve = resolveVe(components[0]);
    if (ve === 0) {
        throw new Error('Unkown VE: ' + jslog);
    }
    const config = { ve };
    const context = getComponent('context:');
    if (context) {
        config.context = context;
    }
    const parent = getComponent('parent:');
    if (parent) {
        config.parent = parent;
    }
    const trackString = getComponent('track:');
    if (trackString) {
        config.track = new Map(trackString.split(',').map(t => t.split(':')));
    }
    return config;
}
export function makeConfigStringBuilder(veName) {
    const components = [veName];
    return {
        context: function (value) {
            components.push(`context: ${value}`);
            return this;
        },
        parent: function (value) {
            components.push(`parent: ${value}`);
            return this;
        },
        track: function (options) {
            components.push(`track: ${Object.entries(options).map(([key, value]) => value !== true ? `${key}: ${value}` : key).join(', ')}`);
            return this;
        },
        toString: function () {
            return components.join('; ');
        },
    };
}
//# sourceMappingURL=LoggingConfig.js.map