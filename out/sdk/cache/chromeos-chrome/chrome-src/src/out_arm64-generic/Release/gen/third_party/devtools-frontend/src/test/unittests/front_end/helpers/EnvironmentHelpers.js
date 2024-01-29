// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as Common from '../../../../front_end/core/common/common.js';
import * as Host from '../../../../front_end/core/host/host.js';
import * as i18n from '../../../../front_end/core/i18n/i18n.js';
import * as Root from '../../../../front_end/core/root/root.js';
import * as SDK from '../../../../front_end/core/sdk/sdk.js';
import * as Bindings from '../../../../front_end/models/bindings/bindings.js';
import * as IssuesManager from '../../../../front_end/models/issues_manager/issues_manager.js';
import * as Logs from '../../../../front_end/models/logs/logs.js';
import * as Persistence from '../../../../front_end/models/persistence/persistence.js';
import * as Workspace from '../../../../front_end/models/workspace/workspace.js';
// Don't import UI at this stage because it will fail without
// the environment. Instead we do the import at the end of the
// initialization phase.
let UI;
let uniqueTargetId = 0;
export function createTarget({ id, name, type = SDK.Target.Type.Frame, parentTarget, subtype, url = 'http://example.com' } = {}) {
    if (!id) {
        if (!uniqueTargetId++) {
            id = 'test';
        }
        else {
            id = ('test' + uniqueTargetId);
        }
    }
    const targetManager = SDK.TargetManager.TargetManager.instance();
    return targetManager.createTarget(id, name ?? id, type, parentTarget ? parentTarget : null, /* sessionId=*/ parentTarget ? id : undefined, 
    /* suspended=*/ false, 
    /* connection=*/ undefined, { targetId: id, url, subtype });
}
function createSettingValue(category, settingName, defaultValue, settingType = "boolean" /* Common.Settings.SettingType.BOOLEAN */) {
    return { category, settingName, defaultValue, settingType };
}
export function stubNoopSettings() {
    sinon.stub(Common.Settings.Settings, 'instance').returns({
        createSetting: () => ({
            get: () => [],
            set: () => { },
            addChangeListener: () => { },
            removeChangeListener: () => { },
            setDisabled: () => { },
            setTitle: () => { },
            title: () => { },
            asRegExp: () => { },
            type: () => "boolean" /* Common.Settings.SettingType.BOOLEAN */,
            getAsArray: () => [],
        }),
        moduleSetting: () => ({
            get: () => [],
            set: () => { },
            addChangeListener: () => { },
            removeChangeListener: () => { },
            setDisabled: () => { },
            setTitle: () => { },
            title: () => { },
            asRegExp: () => { },
            type: () => "boolean" /* Common.Settings.SettingType.BOOLEAN */,
            getAsArray: () => [],
        }),
        createLocalSetting: () => ({
            get: () => [],
            set: () => { },
            addChangeListener: () => { },
            removeChangeListener: () => { },
            setDisabled: () => { },
            setTitle: () => { },
            title: () => { },
            asRegExp: () => { },
            type: () => "boolean" /* Common.Settings.SettingType.BOOLEAN */,
            getAsArray: () => [],
        }),
    });
}
export function registerNoopActions(actionIds) {
    for (const actionId of actionIds) {
        UI.ActionRegistration.maybeRemoveActionExtension(actionId);
        UI.ActionRegistration.registerActionExtension({
            actionId,
            category: "" /* UI.ActionRegistration.ActionCategory.NONE */,
            title: () => 'mock',
        });
    }
    const actionRegistryInstance = UI.ActionRegistry.ActionRegistry.instance({ forceNew: true });
    UI.ShortcutRegistry.ShortcutRegistry.instance({ forceNew: true, actionRegistry: actionRegistryInstance });
}
const REGISTERED_EXPERIMENTS = [
    'captureNodeCreationStacks',
    'protocolMonitor',
    'timelineShowAllEvents',
    'timelineV8RuntimeCallStats',
    'timelineInvalidationTracking',
    'ignoreListJSFramesOnTimeline',
    'instrumentationBreakpoints',
    'cssTypeComponentLength',
    'stylesPaneCSSChanges',
    'timelineAsConsoleProfileResultPanel',
    'headerOverrides',
    'highlightErrorsElementsPanel',
    'setAllBreakpointsEagerly',
    'selfXssWarning',
    'evaluateExpressionsWithSourceMaps',
    'useSourceMapScopes',
    'fontEditor',
    'networkPanelFilterBarRedesign',
    'trackContextMenu',
    'sourcesFrameIndentationMarkersTemporarilyDisable',
];
export async function initializeGlobalVars({ reset = true } = {}) {
    await initializeGlobalLocaleVars();
    // Create the appropriate settings needed to boot.
    const settings = [
        createSettingValue("APPEARANCE" /* Common.Settings.SettingCategory.APPEARANCE */, 'disablePausedStateOverlay', false),
        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */, 'customFormatters', false),
        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */, 'pauseOnExceptionEnabled', false),
        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */, 'pauseOnCaughtException', false),
        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */, 'pauseOnUncaughtException', false),
        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */, 'disableAsyncStackTraces', false),
        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */, 'breakpointsActive', true),
        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */, 'javaScriptDisabled', false),
        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */, 'skipContentScripts', true),
        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */, 'automaticallyIgnoreListKnownThirdPartyScripts', true),
        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */, 'enableIgnoreListing', true),
        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */, 'skipStackFramesPattern', '/node_modules/|/bower_components/', "regex" /* Common.Settings.SettingType.REGEX */),
        createSettingValue("DEBUGGER" /* Common.Settings.SettingCategory.DEBUGGER */, 'navigatorGroupByFolder', true),
        createSettingValue("ELEMENTS" /* Common.Settings.SettingCategory.ELEMENTS */, 'showDetailedInspectTooltip', true),
        createSettingValue("NETWORK" /* Common.Settings.SettingCategory.NETWORK */, 'cacheDisabled', false),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'avifFormatDisabled', false),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'emulatedCSSMedia', '', "enum" /* Common.Settings.SettingType.ENUM */),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'emulatedCSSMediaFeaturePrefersColorScheme', '', "enum" /* Common.Settings.SettingType.ENUM */),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'emulatedCSSMediaFeatureForcedColors', '', "enum" /* Common.Settings.SettingType.ENUM */),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'emulatedCSSMediaFeaturePrefersReducedMotion', '', "enum" /* Common.Settings.SettingType.ENUM */),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'emulatedCSSMediaFeaturePrefersContrast', '', "enum" /* Common.Settings.SettingType.ENUM */),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'emulatedCSSMediaFeaturePrefersReducedData', '', "enum" /* Common.Settings.SettingType.ENUM */),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'emulatedCSSMediaFeaturePrefersReducedTransparency', '', "enum" /* Common.Settings.SettingType.ENUM */),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'emulatedCSSMediaFeatureColorGamut', '', "enum" /* Common.Settings.SettingType.ENUM */),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'emulatedVisionDeficiency', '', "enum" /* Common.Settings.SettingType.ENUM */),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'emulateAutoDarkMode', '', "enum" /* Common.Settings.SettingType.ENUM */),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'localFontsDisabled', false),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'showPaintRects', false),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'showLayoutShiftRegions', false),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'showAdHighlights', false),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'showDebugBorders', false),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'showFPSCounter', false),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'showScrollBottleneckRects', false),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'showWebVitals', false),
        createSettingValue("RENDERING" /* Common.Settings.SettingCategory.RENDERING */, 'webpFormatDisabled', false),
        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */, 'allowScrollPastEof', true),
        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */, 'cssSourceMapsEnabled', true),
        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */, 'inlineVariableValues', true),
        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */, 'jsSourceMapsEnabled', true),
        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */, 'showWhitespacesInEditor', 'none'),
        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */, 'textEditorAutocompletion', true),
        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */, 'textEditorAutoDetectIndent', false),
        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */, 'textEditorBracketMatching', true),
        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */, 'textEditorCodeFolding', true),
        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */, 'textEditorIndent', '    '),
        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */, 'textEditorTabMovesFocus', false),
        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */, 'domWordWrap', true),
        createSettingValue("EMULATION" /* Common.Settings.SettingCategory.EMULATION */, 'emulation.touch', '', "enum" /* Common.Settings.SettingType.ENUM */),
        createSettingValue("EMULATION" /* Common.Settings.SettingCategory.EMULATION */, 'emulation.idleDetection', '', "enum" /* Common.Settings.SettingType.ENUM */),
        createSettingValue("GRID" /* Common.Settings.SettingCategory.GRID */, 'showGridLineLabels', 'none', "enum" /* Common.Settings.SettingType.ENUM */),
        createSettingValue("GRID" /* Common.Settings.SettingCategory.GRID */, 'extendGridLines', true),
        createSettingValue("GRID" /* Common.Settings.SettingCategory.GRID */, 'showGridAreas', true),
        createSettingValue("GRID" /* Common.Settings.SettingCategory.GRID */, 'showGridTrackSizes', true),
        createSettingValue("" /* Common.Settings.SettingCategory.NONE */, 'activeKeybindSet', '', "enum" /* Common.Settings.SettingType.ENUM */),
        createSettingValue("" /* Common.Settings.SettingCategory.NONE */, 'userShortcuts', [], "array" /* Common.Settings.SettingType.ARRAY */),
        createSettingValue("APPEARANCE" /* Common.Settings.SettingCategory.APPEARANCE */, 'help.show-release-note', true, "boolean" /* Common.Settings.SettingType.BOOLEAN */),
        createSettingValue("NETWORK" /* Common.Settings.SettingCategory.NETWORK */, 'requestBlockingEnabled', false),
        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */, 'monitoringXHREnabled', false),
        createSettingValue("" /* Common.Settings.SettingCategory.NONE */, 'customNetworkConditions', [], "array" /* Common.Settings.SettingType.ARRAY */),
        createSettingValue("APPEARANCE" /* Common.Settings.SettingCategory.APPEARANCE */, 'uiTheme', 'systemPreferred', "enum" /* Common.Settings.SettingType.ENUM */),
        createSettingValue("APPEARANCE" /* Common.Settings.SettingCategory.APPEARANCE */, 'language', 'en-US', "enum" /* Common.Settings.SettingType.ENUM */),
        createSettingValue("PERSISTENCE" /* Common.Settings.SettingCategory.PERSISTENCE */, 'persistenceNetworkOverridesEnabled', true, "boolean" /* Common.Settings.SettingType.BOOLEAN */),
        createSettingValue("NETWORK" /* Common.Settings.SettingCategory.NETWORK */, 'network_log.preserve-log', true, "boolean" /* Common.Settings.SettingType.BOOLEAN */),
        createSettingValue("NETWORK" /* Common.Settings.SettingCategory.NETWORK */, 'network_log.record-log', true, "boolean" /* Common.Settings.SettingType.BOOLEAN */),
        createSettingValue("SOURCES" /* Common.Settings.SettingCategory.SOURCES */, 'network.enable-remote-file-loading', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */),
        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */, 'hideNetworkMessages', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */),
        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */, 'selectedContextFilterEnabled', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */),
        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */, 'consoleGroupSimilar', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */),
        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */, 'consoleShowsCorsErrors', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */),
        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */, 'consoleTimestampsEnabled', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */),
        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */, 'consoleHistoryAutocomplete', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */),
        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */, 'consoleAutocompleteOnEnter', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */),
        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */, 'preserveConsoleLog', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */),
        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */, 'consoleEagerEval', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */),
        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */, 'consoleUserActivationEval', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */),
        createSettingValue("CONSOLE" /* Common.Settings.SettingCategory.CONSOLE */, 'consoleTraceExpand', false, "boolean" /* Common.Settings.SettingType.BOOLEAN */),
        createSettingValue("PERFORMANCE" /* Common.Settings.SettingCategory.PERFORMANCE */, 'flamechartMouseWheelAction', false, "enum" /* Common.Settings.SettingType.ENUM */),
    ];
    Common.Settings.registerSettingsForTest(settings, reset);
    // Instantiate the storage.
    const storage = new Common.Settings.SettingsStorage({}, Common.Settings.NOOP_STORAGE, 'test');
    Common.Settings.Settings.instance({ forceNew: reset, syncedStorage: storage, globalStorage: storage, localStorage: storage });
    Root.Runtime.experiments.clearForTest();
    for (const experimentName of REGISTERED_EXPERIMENTS) {
        Root.Runtime.experiments.register(experimentName, '');
    }
    // Dynamically import UI after the rest of the environment is set up, otherwise it will fail.
    UI = await import('../../../../front_end/ui/legacy/legacy.js');
    UI.ZoomManager.ZoomManager.instance({ forceNew: true, win: window, frontendHost: Host.InspectorFrontendHost.InspectorFrontendHostInstance });
    // Initialize theme support and context menus.
    Common.Settings.Settings.instance().createSetting('uiTheme', 'systemPreferred');
    UI.UIUtils.initializeUIUtils(document);
}
export async function deinitializeGlobalVars() {
    // Remove the global SDK.
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const globalObject = globalThis;
    delete globalObject.SDK;
    delete globalObject.ls;
    for (const target of SDK.TargetManager.TargetManager.instance().targets()) {
        target.dispose('deinitializeGlobalVars');
    }
    // Remove instances.
    await deinitializeGlobalLocaleVars();
    Logs.NetworkLog.NetworkLog.removeInstance();
    SDK.TargetManager.TargetManager.removeInstance();
    Root.Runtime.Runtime.removeInstance();
    Common.Settings.Settings.removeInstance();
    Common.Revealer.RevealerRegistry.removeInstance();
    Common.Console.Console.removeInstance();
    Workspace.Workspace.WorkspaceImpl.removeInstance();
    Bindings.IgnoreListManager.IgnoreListManager.removeInstance();
    Bindings.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.removeInstance();
    Bindings.CSSWorkspaceBinding.CSSWorkspaceBinding.removeInstance();
    IssuesManager.IssuesManager.IssuesManager.removeInstance();
    Persistence.IsolatedFileSystemManager.IsolatedFileSystemManager.removeInstance();
    Common.Settings.resetSettings();
    // Protect against the dynamic import not having happened.
    if (UI) {
        UI.ZoomManager.ZoomManager.removeInstance();
        UI.ViewManager.ViewManager.removeInstance();
        UI.ViewManager.resetViewRegistration();
        UI.Context.Context.removeInstance();
        UI.InspectorView.InspectorView.removeInstance();
        UI.ActionRegistry.ActionRegistry.reset();
    }
    Root.Runtime.experiments.clearForTest();
}
export function describeWithEnvironment(title, fn, opts = {
    reset: true,
}) {
    return describe(title, function () {
        before(async () => await initializeGlobalVars(opts));
        fn.call(this);
        after(async () => await deinitializeGlobalVars());
    });
}
describeWithEnvironment.only = function (title, fn, opts = {
    reset: true,
}) {
    // eslint-disable-next-line rulesdir/no_only
    return describe.only(title, function () {
        before(async () => await initializeGlobalVars(opts));
        fn.call(this);
        after(async () => await deinitializeGlobalVars());
    });
};
export async function initializeGlobalLocaleVars() {
    // Expose the locale.
    i18n.DevToolsLocale.DevToolsLocale.instance({
        create: true,
        data: {
            navigatorLanguage: 'en-US',
            settingLanguage: 'en-US',
            lookupClosestDevToolsLocale: () => 'en-US',
        },
    });
    // Load the strings from the resource file.
    const locale = i18n.DevToolsLocale.DevToolsLocale.instance().locale;
    // proxied call.
    try {
        await i18n.i18n.fetchAndRegisterLocaleData(locale);
    }
    catch (error) {
        // eslint-disable-next-line no-console
        console.warn('EnvironmentHelper: Loading en-US locale failed', error.message);
    }
}
export function deinitializeGlobalLocaleVars() {
    i18n.DevToolsLocale.DevToolsLocale.removeInstance();
}
export function describeWithLocale(title, fn) {
    return describe(title, function () {
        before(async () => await initializeGlobalLocaleVars());
        fn.call(this);
        after(deinitializeGlobalLocaleVars);
    });
}
describeWithLocale.only = function (title, fn) {
    // eslint-disable-next-line rulesdir/no_only
    return describe.only(title, function () {
        before(async () => await initializeGlobalLocaleVars());
        fn.call(this);
        after(deinitializeGlobalLocaleVars);
    });
};
describeWithLocale.skip = function (title, fn) {
    // eslint-disable-next-line rulesdir/check_test_definitions
    return describe.skip(title, function () {
        fn.call(this);
    });
};
export function createFakeSetting(name, defaultValue) {
    const storage = new Common.Settings.SettingsStorage({}, Common.Settings.NOOP_STORAGE, 'test');
    return new Common.Settings.Setting(name, defaultValue, new Common.ObjectWrapper.ObjectWrapper(), storage);
}
export function enableFeatureForTest(feature) {
    Root.Runtime.experiments.enableForTest(feature);
}
export function setupActionRegistry() {
    before(function () {
        const actionRegistry = UI.ActionRegistry.ActionRegistry.instance();
        UI.ShortcutRegistry.ShortcutRegistry.instance({
            forceNew: true,
            actionRegistry,
        });
    });
    after(function () {
        if (UI) {
            UI.ShortcutRegistry.ShortcutRegistry.removeInstance();
            UI.ActionRegistry.ActionRegistry.removeInstance();
        }
    });
}
export function expectConsoleLogs(expectedLogs) {
    const { error, warn, log } = console;
    before(() => {
        if (expectedLogs.log) {
            // eslint-disable-next-line no-console
            console.log = (...data) => {
                if (!expectedLogs.log?.includes(data.join(' '))) {
                    log(...data);
                }
            };
        }
        if (expectedLogs.warn) {
            console.warn = (...data) => {
                if (!expectedLogs.warn?.includes(data.join(' '))) {
                    warn(...data);
                }
            };
        }
        if (expectedLogs.error) {
            console.error = (...data) => {
                if (!expectedLogs.error?.includes(data.join(' '))) {
                    error(...data);
                }
            };
        }
    });
    after(() => {
        if (expectedLogs.log) {
            // eslint-disable-next-line no-console
            console.log = log;
        }
        if (expectedLogs.warn) {
            console.warn = warn;
        }
        if (expectedLogs.error) {
            console.error = error;
        }
    });
}
//# sourceMappingURL=EnvironmentHelpers.js.map