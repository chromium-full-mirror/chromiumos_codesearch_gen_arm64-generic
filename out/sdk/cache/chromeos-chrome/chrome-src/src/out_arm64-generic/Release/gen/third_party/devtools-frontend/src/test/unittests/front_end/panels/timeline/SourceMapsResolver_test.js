// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertNotNullOrUndefined } from '../../../../../front_end/core/platform/platform.js';
import * as Root from '../../../../../front_end/core/root/root.js';
import * as SDK from '../../../../../front_end/core/sdk/sdk.js';
import * as Bindings from '../../../../../front_end/models/bindings/bindings.js';
import * as TraceEngine from '../../../../../front_end/models/trace/trace.js';
import * as Workspace from '../../../../../front_end/models/workspace/workspace.js';
import * as Timeline from '../../../../../front_end/panels/timeline/timeline.js';
import { createTarget } from '../../helpers/EnvironmentHelpers.js';
import { TestPlugin } from '../../helpers/LanguagePluginHelpers.js';
import { describeWithMockConnection, dispatchEvent, setMockConnectionResponseHandler, } from '../../helpers/MockConnection.js';
const { assert } = chai;
const SCRIPT_ID = '25';
const NODE_ID = 16;
const MINIFIED_FUNCTION_NAME = 'minified';
const AUTHORED_FUNCTION_NAME = 'authored';
const profileEvent = {
    name: 'Profile',
    id: '1234',
    args: {
        data: {
            startTime: 151790328951,
        },
    },
    ph: "P" /* TraceEngine.Types.TraceEvents.Phase.SAMPLE */,
    cat: 'disabled-by-default-v8.cpu_profiler',
    pid: 102,
    tid: 259,
    ts: 410166906542,
};
const profileChunk = {
    name: 'ProfileChunk',
    id: '1234',
    cat: 'disabled-by-default-v8.cpu_profiler',
    ph: "P" /* TraceEngine.Types.TraceEvents.Phase.SAMPLE */,
    pid: 102,
    tid: 259,
    ts: 410166906542,
    args: {
        data: {
            timeDeltas: [
                2,
                2,
                2,
                2,
                2,
            ],
            cpuProfile: {
                'nodes': [
                    {
                        'callFrame': { 'codeType': 'other', 'functionName': '(root)', 'scriptId': 0 },
                        'id': 1,
                    },
                    {
                        'callFrame': { 'codeType': 'other', 'functionName': '(program)', 'scriptId': 0 },
                        'id': 2,
                        'parent': 1,
                    },
                    {
                        'callFrame': { 'codeType': 'other', 'functionName': '(idle)', 'scriptId': 0 },
                        'id': 8,
                        'parent': 1,
                    },
                    {
                        'callFrame': {
                            'codeType': 'JS',
                            'columnNumber': 0,
                            'functionName': '',
                            'lineNumber': 0,
                            'scriptId': parseInt(SCRIPT_ID, 10),
                            'url': 'file://gen.js',
                        },
                        'id': 9,
                        'parent': 1,
                    },
                    {
                        'callFrame': {
                            'codeType': 'JS',
                            'columnNumber': 51,
                            'functionName': MINIFIED_FUNCTION_NAME,
                            'lineNumber': 0,
                            'scriptId': parseInt(SCRIPT_ID, 10),
                            'url': 'file://gen.js',
                        },
                        'id': NODE_ID,
                        'parent': 9,
                    },
                    {
                        'callFrame': { 'codeType': 'JS', 'functionName': 'now', 'scriptId': 0 },
                        'id': 11,
                        'parent': NODE_ID,
                    },
                    {
                        'callFrame': { 'codeType': 'other', 'functionName': '(garbage collector)', 'scriptId': 0 },
                        'id': 12,
                        'parent': 1,
                    },
                ],
                'samples': [
                    2,
                    2,
                    NODE_ID,
                    NODE_ID,
                    2,
                ],
            },
        },
    },
};
const SCRIPT_URL = 'file://main.js';
// Generated with:
// `terser main.js --mangle --toplevel  --output gen.js  --source-map url='gen.js.map'` v5.15.0
const SCRIPT_SOURCE = 'function n(){o("hi");console.log("done")}function o(n){const o=performance.now();while(performance.now()-o<n);}n();o(200);\n//# sourceMappingURL=gen.js.map';
const SOURCE_MAP = {
    version: 3,
    names: ['sayHi', AUTHORED_FUNCTION_NAME, 'console', 'log', 'breakDuration', 'started', 'performance', 'now'],
    sources: ['main.js'],
    mappings: 'AAAA,SAASA,IACLC,EAAW,MACXC,QAAQC,IAAI,OAChB,CAEA,SAASF,EAAWG,GAChB,MAAMC,EAAUC,YAAYC,MAC5B,MAAQD,YAAYC,MAAQF,EAAWD,GAC3C,CAEAJ,IACAC,EAAW',
};
const SOURCE_MAP_URL = 'file://gen.js.map';
describeWithMockConnection('SourceMapsResolver', () => {
    let target;
    let traceParsedData;
    beforeEach(async function () {
        target = createTarget();
        const workspace = Workspace.Workspace.WorkspaceImpl.instance();
        const targetManager = SDK.TargetManager.TargetManager.instance();
        const traceEngine = TraceEngine.TraceModel.Model.createWithAllHandlers();
        await traceEngine.parse([profileEvent, profileChunk]);
        const data = traceEngine.traceParsedData();
        if (!data) {
            throw new Error('Could not parse data in new trace engine.');
        }
        traceParsedData = data;
        const resourceMapping = new Bindings.ResourceMapping.ResourceMapping(targetManager, workspace);
        const debuggerWorkspaceBinding = Bindings.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping,
            targetManager,
        });
        Bindings.IgnoreListManager.IgnoreListManager.instance({
            forceNew: true,
            debuggerWorkspaceBinding,
        });
        SDK.PageResourceLoader.PageResourceLoader.instance({
            forceNew: true,
            loadOverride: async (_) => ({
                success: true,
                content: JSON.stringify(SOURCE_MAP),
                errorDescription: { message: '', statusCode: 0, netError: 0, netErrorName: '', urlValid: true },
            }),
            maxConcurrentLoads: 1,
        });
        setMockConnectionResponseHandler('Debugger.getScriptSource', getScriptSourceHandler);
        function getScriptSourceHandler(_) {
            return { scriptSource: SCRIPT_SOURCE };
        }
    });
    it('renames nodes from the profile models when the corresponding scripts and source maps have loaded', async function () {
        const cpuProfiles = traceParsedData.Samples.profilesInProcess;
        assert.strictEqual(cpuProfiles.size, 1);
        const profile = Array.from(cpuProfiles.values())[0].get(259);
        if (!profile) {
            throw new Error('Could not find expected profile for ThreadID 259');
        }
        const nodes = profile.parsedProfile.nodes();
        if (!nodes) {
            throw new Error('Parsed profile had no nodes.');
        }
        assert.strictEqual(nodes.length, profileChunk.args.data?.cpuProfile?.nodes?.length);
        const resolver = new Timeline.SourceMapsResolver.SourceMapsResolver(traceParsedData);
        const namesUpdatedPromise = new Promise(resolve => resolver.addEventListener(Timeline.SourceMapsResolver.NodeNamesUpdated.eventName, () => resolve()));
        const bottomModelNode = nodes?.find(n => n.id === NODE_ID);
        // Test the node's name is minified before the script and source maps load.
        assert.strictEqual(bottomModelNode?.functionName, MINIFIED_FUNCTION_NAME);
        await resolver.install();
        // Load the script and source map into the frontend.
        dispatchEvent(target, 'Debugger.scriptParsed', {
            scriptId: SCRIPT_ID,
            url: SCRIPT_URL,
            startLine: 0,
            startColumn: 0,
            endLine: (SCRIPT_SOURCE.match(/^/gm)?.length ?? 1) - 1,
            endColumn: SCRIPT_SOURCE.length - SCRIPT_SOURCE.lastIndexOf('\n') - 1,
            executionContextId: 1,
            hash: '',
            hasSourceURL: false,
            sourceMapURL: SOURCE_MAP_URL,
        });
        await namesUpdatedPromise;
        // Now that the script and source map have loaded, test that the model has been automatically
        // reparsed to resolve function names.
        assert.strictEqual(bottomModelNode?.functionName, AUTHORED_FUNCTION_NAME);
    });
    it('resolves function names using a plugin when available', async () => {
        const PLUGIN_FUNCTION_NAME = 'PLUGIN_FUNCTION_NAME';
        class Plugin extends TestPlugin {
            constructor() {
                super('InstrumentationBreakpoints');
            }
            getFunctionInfo(_rawLocation) {
                return Promise.resolve({ frames: [{ name: PLUGIN_FUNCTION_NAME }] });
            }
            handleScript(_) {
                return true;
            }
        }
        const cpuProfiles = traceParsedData.Samples.profilesInProcess;
        const profile = Array.from(cpuProfiles.values())[0].get(259);
        if (!profile) {
            throw new Error('Could not find expected profile for ThreadID 259');
        }
        const nodes = profile.parsedProfile.nodes();
        if (!nodes) {
            throw new Error('Parsed profile had no nodes.');
        }
        Root.Runtime.experiments.setEnabled('wasmDWARFDebugging', true);
        const pluginManager = Bindings.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().initPluginManagerForTest();
        assertNotNullOrUndefined(pluginManager);
        pluginManager.addPlugin(new Plugin());
        const resolver = new Timeline.SourceMapsResolver.SourceMapsResolver(traceParsedData);
        const namesUpdatedPromise = new Promise(resolve => resolver.addEventListener(Timeline.SourceMapsResolver.NodeNamesUpdated.eventName, () => resolve()));
        const bottomModelNode = nodes.find(n => n.id === NODE_ID);
        await resolver.install();
        // Load the script into the frontend.
        dispatchEvent(target, 'Debugger.scriptParsed', {
            scriptId: SCRIPT_ID,
            url: SCRIPT_URL,
            startLine: 0,
            startColumn: 0,
            endLine: (SCRIPT_SOURCE.match(/^/gm)?.length ?? 1) - 1,
            endColumn: SCRIPT_SOURCE.length - SCRIPT_SOURCE.lastIndexOf('\n') - 1,
            executionContextId: 1,
            hash: '',
            hasSourceURL: false,
            sourceMapURL: SOURCE_MAP_URL,
        });
        await namesUpdatedPromise;
        assert.strictEqual(bottomModelNode?.functionName, PLUGIN_FUNCTION_NAME);
    });
});
//# sourceMappingURL=SourceMapsResolver_test.js.map