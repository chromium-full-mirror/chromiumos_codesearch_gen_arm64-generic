"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const events_js_1 = require("../../conductor/events.js");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const console_helpers_js_1 = require("../helpers/console-helpers.js");
const extension_helpers_js_1 = require("../helpers/extension-helpers.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
function goToWasmResource(moduleName, options = {}) {
    const queryParams = [`module=${moduleName}`];
    if (!options.autoLoadModule) {
        queryParams.push('defer=1');
    }
    if (options.runFunctionAfterLoad) {
        queryParams.push(`autorun=${options.runFunctionAfterLoad}`);
    }
    return (0, helper_js_1.goToResource)(`extensions/wasm_module.html?${queryParams.join('&')}`);
}
// This testcase reaches into DevTools internals to install the extension plugin. At this point, there is no sensible
// alternative, because loading a real extension is not supported in our test setup.
(0, mocha_extensions_js_1.describe)('The Debugger Language Plugins', async () => {
    // Load a simple wasm file and verify that the source file shows up in the file tree.
    (0, mocha_extensions_js_1.it)('can show C filenames after loading the module', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        const extension = await (0, extension_helpers_js_1.loadExtension)('TestExtension', `${(0, extension_helpers_js_1.getResourcesPathWithDevToolsHostname)()}/extensions/language_extensions.html`);
        await extension.evaluate(() => {
            // A simple plugin that resolves to a single source file
            class SingleFilePlugin {
                async addRawModule(rawModuleId, symbols, rawModule) {
                    const fileUrl = new URL('/source_file.c', rawModule.url || symbols);
                    return [fileUrl.href];
                }
            }
            RegisterExtension(new SingleFilePlugin(), 'Single File', { language: 'WebAssembly', symbol_types: ['None'] });
        });
        await goToWasmResource('/test/e2e/resources/extensions/global_variable.wasm');
        await (0, sources_helpers_js_1.openSourcesPanel)();
        const capturedFileNames = await (0, sources_helpers_js_1.captureAddedSourceFiles)(2, async () => {
            await target.evaluate('loadModule();');
        });
        chai_1.assert.deepEqual(capturedFileNames, [
            '/test/e2e/resources/extensions/global_variable.wasm',
            '/source_file.c',
        ]);
    });
    // Resolve a single code offset to a source line to test the correctness of offset computations.
    (0, mocha_extensions_js_1.it)('use correct code offsets to interpret raw locations', async () => {
        const extension = await (0, extension_helpers_js_1.loadExtension)('TestExtension', `${(0, extension_helpers_js_1.getResourcesPathWithDevToolsHostname)()}/extensions/language_extensions.html`);
        const locationLabels = sources_helpers_js_1.WasmLocationLabels.load('extensions/unreachable.wat', 'extensions/unreachable.wasm');
        await extension.evaluate((mappings) => {
            class LocationMappingPlugin {
                module = undefined;
                async addRawModule(rawModuleId, symbols, rawModule) {
                    if (this.module) {
                        throw new Error('Expected only one module');
                    }
                    const sourceFileURL = new URL('unreachable.wat', rawModule.url || symbols).href;
                    this.module = { rawModuleId, sourceFileURL };
                    return [sourceFileURL];
                }
                async rawLocationToSourceLocation(rawLocation) {
                    if (this.module) {
                        const { rawModuleId, sourceFileURL } = this.module;
                        if (rawModuleId === rawLocation.rawModuleId) {
                            const mapping = mappings.find(m => rawLocation.codeOffset === m.bytecode);
                            if (mapping) {
                                return [{ rawModuleId, sourceFileURL, lineNumber: mapping.sourceLine - 1, columnNumber: -1 }];
                            }
                        }
                    }
                    return [];
                }
            }
            RegisterExtension(new LocationMappingPlugin(), 'Location Mapping', { language: 'WebAssembly', symbol_types: ['None'] });
        }, locationLabels.getMappingsForPlugin());
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await (0, helper_js_1.click)(sources_helpers_js_1.PAUSE_ON_UNCAUGHT_EXCEPTION_SELECTOR);
        await goToWasmResource('unreachable.wasm', { runFunctionAfterLoad: 'Main', autoLoadModule: true });
        await (0, helper_js_1.waitFor)('.paused-status');
        const pauseLocation = await locationLabels.checkLocationForLabel('PAUSED(unreachable)');
        await (0, helper_js_1.click)(sources_helpers_js_1.RESUME_BUTTON);
        const error = await (0, helper_js_1.waitForFunction)(async () => {
            const messages = await (0, console_helpers_js_1.getStructuredConsoleMessages)();
            return messages.find(message => message.message?.startsWith('Uncaught (in promise) RuntimeError: unreachable'));
        });
        const callframes = error.message?.split('\n').slice(1);
        chai_1.assert.deepEqual(callframes, [
            `    at Main (unreachable.wat:${pauseLocation.sourceLine})`,
            '    at window.loadModule (wasm_module.html?mod…&autorun=Main:24:46)',
        ]);
    });
    // Resolve the location for a breakpoint.
    (0, mocha_extensions_js_1.it)('resolve locations for breakpoints correctly', async () => {
        const locationLabels = sources_helpers_js_1.WasmLocationLabels.load('extensions/global_variable.wat', 'extensions/global_variable.wasm');
        const extension = await (0, extension_helpers_js_1.loadExtension)('TestExtension', `${(0, extension_helpers_js_1.getResourcesPathWithDevToolsHostname)()}/extensions/language_extensions.html`);
        await extension.evaluate((mappings) => {
            // This plugin will emulate a source mapping with a single file and a single corresponding source line and byte
            // code offset pair.
            class LocationMappingPlugin {
                module = undefined;
                async addRawModule(rawModuleId, symbols, rawModule) {
                    if (this.module) {
                        throw new Error('Expected only one module');
                    }
                    const sourceFileURL = new URL('global_variable.wat', rawModule.url || symbols).href;
                    this.module = { rawModuleId, sourceFileURL };
                    return [sourceFileURL];
                }
                async rawLocationToSourceLocation(rawLocation) {
                    if (this.module) {
                        const { rawModuleId, sourceFileURL } = this.module;
                        if (rawModuleId === rawLocation.rawModuleId) {
                            const mapping = mappings.find(m => rawLocation.codeOffset === m.bytecode);
                            if (mapping) {
                                return [{ rawModuleId, sourceFileURL, lineNumber: mapping.sourceLine - 1, columnNumber: -1 }];
                            }
                        }
                    }
                    return [];
                }
                async sourceLocationToRawLocation(sourceLocation) {
                    if (this.module) {
                        const { rawModuleId, sourceFileURL } = this.module;
                        if (rawModuleId === sourceLocation.rawModuleId && sourceFileURL === sourceLocation.sourceFileURL) {
                            const mapping = mappings.find(m => sourceLocation.lineNumber === m.sourceLine - 1);
                            if (mapping) {
                                return [{ rawModuleId, startOffset: mapping.bytecode, endOffset: mapping.bytecode + 1 }];
                            }
                        }
                    }
                    return [];
                }
                async getMappedLines(rawModuleIdArg, sourceFileURLArg) {
                    if (this.module) {
                        const { rawModuleId, sourceFileURL } = this.module;
                        if (rawModuleId === rawModuleIdArg && sourceFileURL === sourceFileURLArg) {
                            return Array.from(new Set(mappings.map(m => m.sourceLine - 1)).values()).sort();
                        }
                    }
                    return undefined;
                }
            }
            RegisterExtension(new LocationMappingPlugin(), 'Location Mapping', { language: 'WebAssembly', symbol_types: ['None'] });
        }, locationLabels.getMappingsForPlugin());
        await goToWasmResource('/test/e2e/resources/extensions/global_variable.wasm', { autoLoadModule: true });
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await (0, sources_helpers_js_1.openFileInEditor)('global_variable.wat');
        const toolbarLink = await (0, helper_js_1.waitFor)('.toolbar-item .devtools-link');
        const toolbarLinkText = await toolbarLink.evaluate(({ textContent }) => textContent);
        chai_1.assert.strictEqual(toolbarLinkText, 'global_variable.wasm');
        chai_1.assert.isNotEmpty(await (0, sources_helpers_js_1.getNonBreakableLines)());
        await locationLabels.setBreakpointInSourceAndRun('BREAK(return)', 'Module.instance.exports.Main();');
    });
    (0, mocha_extensions_js_1.it)('shows top-level and nested variables', async () => {
        const extension = await (0, extension_helpers_js_1.loadExtension)('TestExtension', `${(0, extension_helpers_js_1.getResourcesPathWithDevToolsHostname)()}/extensions/language_extensions.html`);
        await extension.evaluateHandle(() => {
            class VariableListingPlugin {
                modules;
                constructor() {
                    this.modules = new Map();
                }
                async addRawModule(rawModuleId, symbols, rawModule) {
                    const sourceFileURL = new URL('unreachable.ll', rawModule.url || symbols).href;
                    this.modules.set(rawModuleId, {
                        rawLocationRange: { rawModuleId, startOffset: 6, endOffset: 7 },
                        sourceLocation: { rawModuleId, sourceFileURL, lineNumber: 5, columnNumber: 2 },
                    });
                    return [sourceFileURL];
                }
                async rawLocationToSourceLocation(rawLocation) {
                    const { rawLocationRange, sourceLocation } = this.modules.get(rawLocation.rawModuleId) || {};
                    if (rawLocationRange && sourceLocation && rawLocationRange.startOffset <= rawLocation.codeOffset &&
                        rawLocation.codeOffset < rawLocationRange.endOffset) {
                        return [sourceLocation];
                    }
                    return [];
                }
                async getScopeInfo(type) {
                    return { type, typeName: type };
                }
                async listVariablesInScope(rawLocation) {
                    const { rawLocationRange } = this.modules.get(rawLocation.rawModuleId) || {};
                    if (rawLocationRange && rawLocationRange.startOffset <= rawLocation.codeOffset &&
                        rawLocation.codeOffset < rawLocationRange.endOffset) {
                        return [
                            { scope: 'LOCAL', name: 'localX', type: 'int' },
                            { scope: 'GLOBAL', name: 'n1::n2::globalY', nestedName: ['n1', 'n2', 'globalY'], type: 'float' },
                        ];
                    }
                    return [];
                }
            }
            RegisterExtension(new VariableListingPlugin(), 'Location Mapping', { language: 'WebAssembly', symbol_types: ['None'] });
        });
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await (0, helper_js_1.click)(sources_helpers_js_1.PAUSE_ON_UNCAUGHT_EXCEPTION_SELECTOR);
        await (0, helper_js_1.goToResource)('sources/wasm/unreachable.html');
        await (0, helper_js_1.waitFor)(sources_helpers_js_1.RESUME_BUTTON);
        const locals = await (0, sources_helpers_js_1.getValuesForScope)('LOCAL', 0, 1);
        chai_1.assert.deepEqual(locals, ['localX: undefined']);
        const globals = await (0, sources_helpers_js_1.getValuesForScope)('GLOBAL', 2, 3);
        chai_1.assert.deepEqual(globals, ['n1: namespace', 'n2: namespace', 'globalY: undefined']);
    });
    (0, mocha_extensions_js_1.it)('shows inline frames', async () => {
        const extension = await (0, extension_helpers_js_1.loadExtension)('TestExtension', `${(0, extension_helpers_js_1.getResourcesPathWithDevToolsHostname)()}/extensions/language_extensions.html`);
        await extension.evaluate(() => {
            class InliningPlugin {
                modules;
                constructor() {
                    this.modules = new Map();
                }
                async addRawModule(rawModuleId, symbols, rawModule) {
                    const sourceFileURL = new URL('unreachable.ll', rawModule.url || symbols).href;
                    this.modules.set(rawModuleId, {
                        rawLocationRange: { rawModuleId, startOffset: 6, endOffset: 7 },
                        sourceLocations: [
                            { rawModuleId, sourceFileURL, lineNumber: 5, columnNumber: 2 },
                            { rawModuleId, sourceFileURL, lineNumber: 10, columnNumber: 2 },
                            { rawModuleId, sourceFileURL, lineNumber: 15, columnNumber: 2 },
                        ],
                    });
                    return [sourceFileURL];
                }
                async rawLocationToSourceLocation(rawLocation) {
                    const { rawLocationRange, sourceLocations } = this.modules.get(rawLocation.rawModuleId) || {};
                    if (rawLocationRange && sourceLocations && rawLocationRange.startOffset <= rawLocation.codeOffset &&
                        rawLocation.codeOffset < rawLocationRange.endOffset) {
                        return [sourceLocations[rawLocation.inlineFrameIndex || 0]];
                    }
                    return [];
                }
                async getFunctionInfo(rawLocation) {
                    const { rawLocationRange } = this.modules.get(rawLocation.rawModuleId) || {};
                    if (rawLocationRange && rawLocationRange.startOffset <= rawLocation.codeOffset &&
                        rawLocation.codeOffset < rawLocationRange.endOffset) {
                        return { frames: [{ name: 'inner_inline_func' }, { name: 'outer_inline_func' }, { name: 'Main' }] };
                    }
                    return { frames: [] };
                }
                async getScopeInfo(type) {
                    return { type, typeName: type };
                }
                async listVariablesInScope(rawLocation) {
                    const { rawLocationRange } = this.modules.get(rawLocation.rawModuleId) || {};
                    const frame = rawLocation.inlineFrameIndex || 0;
                    if (rawLocationRange && rawLocationRange.startOffset <= rawLocation.codeOffset &&
                        rawLocation.codeOffset < rawLocationRange.endOffset) {
                        return [
                            { scope: 'LOCAL', name: `localX${frame}`, type: 'int' },
                        ];
                    }
                    return [];
                }
            }
            RegisterExtension(new InliningPlugin(), 'Inlining', { language: 'WebAssembly', symbol_types: ['None'] });
        });
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await (0, helper_js_1.click)(sources_helpers_js_1.PAUSE_ON_UNCAUGHT_EXCEPTION_SELECTOR);
        await (0, helper_js_1.goToResource)('sources/wasm/unreachable.html');
        await (0, helper_js_1.waitFor)(sources_helpers_js_1.RESUME_BUTTON);
        // Call stack shows inline function names and source locations.
        const funcNames = await (0, sources_helpers_js_1.getCallFrameNames)();
        chai_1.assert.deepEqual(funcNames, ['inner_inline_func', 'outer_inline_func', 'Main', 'go', 'await in go (async)', '(anonymous)']);
        const sourceLocations = await (0, sources_helpers_js_1.getCallFrameLocations)();
        chai_1.assert.deepEqual(sourceLocations, ['unreachable.ll:6', 'unreachable.ll:11', 'unreachable.ll:16', 'unreachable.html:27', 'unreachable.html:30']);
        // We see variables for innermost frame.
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.getValuesForScope)('LOCAL', 0, 1), ['localX0: undefined']);
        // Switching frames affects what variables we see.
        await (0, sources_helpers_js_1.switchToCallFrame)(2);
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.getValuesForScope)('LOCAL', 0, 1), ['localX1: undefined']);
        await (0, sources_helpers_js_1.switchToCallFrame)(3);
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.getValuesForScope)('LOCAL', 0, 1), ['localX2: undefined']);
        await (0, helper_js_1.click)(sources_helpers_js_1.RESUME_BUTTON);
        await (0, helper_js_1.waitForFunction)(async () => {
            const messages = await (0, console_helpers_js_1.getStructuredConsoleMessages)();
            if (!messages.length) {
                return false;
            }
            const message = messages[messages.length - 1];
            return message.message === `Uncaught (in promise) RuntimeError: unreachable
    at inner_inline_func (unreachable.ll:6)
    at outer_inline_func (unreachable.ll:11)
    at Main (unreachable.ll:16)
    at go (unreachable.html:27:29)`;
        });
    });
    (0, mocha_extensions_js_1.it)('falls back to wasm function names when inline info not present', async () => {
        const extension = await (0, extension_helpers_js_1.loadExtension)('TestExtension', `${(0, extension_helpers_js_1.getResourcesPathWithDevToolsHostname)()}/extensions/language_extensions.html`);
        await extension.evaluate(() => {
            class InliningPlugin {
                modules;
                constructor() {
                    this.modules = new Map();
                }
                async addRawModule(rawModuleId, symbols, rawModule) {
                    const sourceFileURL = new URL('unreachable.ll', rawModule.url || symbols).href;
                    this.modules.set(rawModuleId, {
                        rawLocationRange: { rawModuleId, startOffset: 6, endOffset: 7 },
                        sourceLocations: [
                            { rawModuleId, sourceFileURL, lineNumber: 5, columnNumber: 2 },
                        ],
                    });
                    return [sourceFileURL];
                }
                async rawLocationToSourceLocation(rawLocation) {
                    const { rawLocationRange, sourceLocations } = this.modules.get(rawLocation.rawModuleId) || {};
                    if (rawLocationRange && sourceLocations && rawLocationRange.startOffset <= rawLocation.codeOffset &&
                        rawLocation.codeOffset < rawLocationRange.endOffset) {
                        return [sourceLocations[rawLocation.inlineFrameIndex || 0]];
                    }
                    return [];
                }
                async getFunctionInfo(rawLocation) {
                    const { rawLocationRange } = this.modules.get(rawLocation.rawModuleId) || {};
                    if (rawLocationRange && rawLocationRange.startOffset <= rawLocation.codeOffset &&
                        rawLocation.codeOffset < rawLocationRange.endOffset) {
                        return { frames: [] };
                    }
                    return { frames: [] };
                }
                async getScopeInfo(type) {
                    return { type, typeName: type };
                }
                async listVariablesInScope(_rawLocation) {
                    return [];
                }
            }
            RegisterExtension(new InliningPlugin(), 'Inlining', { language: 'WebAssembly', symbol_types: ['None'] });
        });
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await (0, helper_js_1.click)(sources_helpers_js_1.PAUSE_ON_UNCAUGHT_EXCEPTION_SELECTOR);
        await (0, helper_js_1.goToResource)('sources/wasm/unreachable.html');
        await (0, helper_js_1.waitFor)(sources_helpers_js_1.RESUME_BUTTON);
        // Call stack shows inline function names and source locations.
        const funcNames = await (0, sources_helpers_js_1.getCallFrameNames)();
        chai_1.assert.deepEqual(funcNames, ['$Main', 'go', 'await in go (async)', '(anonymous)']);
        const sourceLocations = await (0, sources_helpers_js_1.getCallFrameLocations)();
        chai_1.assert.deepEqual(sourceLocations, ['unreachable.ll:6', 'unreachable.html:27', 'unreachable.html:30']);
    });
    (0, mocha_extensions_js_1.it)('shows a warning when no debug info is present', async () => {
        const extension = await (0, extension_helpers_js_1.loadExtension)('TestExtension', `${(0, extension_helpers_js_1.getResourcesPathWithDevToolsHostname)()}/extensions/language_extensions.html`);
        await extension.evaluate(() => {
            class MissingInfoPlugin {
                modules;
                constructor() {
                    this.modules = new Map();
                }
                async addRawModule() {
                    return { missingSymbolFiles: ['test.wasm'] };
                }
            }
            RegisterExtension(new MissingInfoPlugin(), 'MissingInfo', { language: 'WebAssembly', symbol_types: ['None'] });
        });
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await (0, helper_js_1.click)(sources_helpers_js_1.PAUSE_ON_UNCAUGHT_EXCEPTION_SELECTOR);
        await (0, helper_js_1.goToResource)('sources/wasm/unreachable.html');
        await (0, helper_js_1.waitFor)(sources_helpers_js_1.RESUME_BUTTON);
        const incompleteMessage = `Failed to load any debug info for ${(0, helper_js_1.getResourcesPath)()}/sources/wasm/unreachable.wasm.`;
        const infoBar = await (0, helper_js_1.waitFor)(`.infobar-error[aria-label="${incompleteMessage}"`);
        const details = await (0, helper_js_1.waitFor)('.infobar-details-rows', infoBar);
        const text = await details.evaluate(e => e.textContent);
        chai_1.assert.deepEqual(text, 'Failed to load debug file "test.wasm".');
        const banners = await (0, helper_js_1.$$)('.call-frame-warnings-message');
        const bannerTexts = await Promise.all(banners.map(e => e.evaluate(e => e.textContent)));
        chai_1.assert.include(bannerTexts, 'Some call frames have warnings');
        const selectedCallFrame = await (0, helper_js_1.waitFor)('.call-frame-item[aria-selected="true"]');
        const warning = await (0, helper_js_1.waitFor)('.call-frame-warning-icon', selectedCallFrame);
        const title = await warning.evaluate(e => e.getAttribute('title'));
        chai_1.assert.deepEqual(title, 'No debug information for function "$Main"');
    });
    (0, mocha_extensions_js_1.it)('shows warnings when function info not present', async () => {
        const extension = await (0, extension_helpers_js_1.loadExtension)('TestExtension', `${(0, extension_helpers_js_1.getResourcesPathWithDevToolsHostname)()}/extensions/language_extensions.html`);
        await extension.evaluate(() => {
            class MissingInfoPlugin {
                modules;
                constructor() {
                    this.modules = new Map();
                }
                async addRawModule(rawModuleId, symbols, rawModule) {
                    const sourceFileURL = new URL('unreachable.ll', rawModule.url || symbols).href;
                    this.modules.set(rawModuleId, {
                        rawLocationRange: { rawModuleId, startOffset: 6, endOffset: 7 },
                        sourceLocations: [
                            { rawModuleId, sourceFileURL, lineNumber: 5, columnNumber: 2 },
                        ],
                    });
                    return [sourceFileURL];
                }
                async rawLocationToSourceLocation(rawLocation) {
                    const { rawLocationRange, sourceLocations } = this.modules.get(rawLocation.rawModuleId) || {};
                    if (rawLocationRange && sourceLocations && rawLocationRange.startOffset <= rawLocation.codeOffset &&
                        rawLocation.codeOffset < rawLocationRange.endOffset) {
                        return [sourceLocations[rawLocation.inlineFrameIndex || 0]];
                    }
                    return [];
                }
                async getFunctionInfo() {
                    return { missingSymbolFiles: ['test.dwo'] };
                }
                async getScopeInfo(type) {
                    return { type, typeName: type };
                }
                async listVariablesInScope(_rawLocation) {
                    return [];
                }
            }
            RegisterExtension(new MissingInfoPlugin(), 'MissingInfo', { language: 'WebAssembly', symbol_types: ['None'] });
        });
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await (0, helper_js_1.click)(sources_helpers_js_1.PAUSE_ON_UNCAUGHT_EXCEPTION_SELECTOR);
        await (0, helper_js_1.goToResource)('sources/wasm/unreachable.html');
        await (0, helper_js_1.waitFor)(sources_helpers_js_1.RESUME_BUTTON);
        const incompleteMessage = 'The debug information for function $Main is incomplete';
        const infoBar = await (0, helper_js_1.waitFor)(`.infobar-error[aria-label="${incompleteMessage}"`);
        const details = await (0, helper_js_1.waitFor)('.infobar-details-rows', infoBar);
        const text = await details.evaluate(e => e.textContent);
        chai_1.assert.deepEqual(text, 'Failed to load debug file "test.dwo".');
        const banners = await (0, helper_js_1.$$)('.call-frame-warnings-message');
        const bannerTexts = await Promise.all(banners.map(e => e.evaluate(e => e.textContent)));
        chai_1.assert.include(bannerTexts, 'Some call frames have warnings');
        const selectedCallFrame = await (0, helper_js_1.waitFor)('.call-frame-item[aria-selected="true"]');
        const warning = await (0, helper_js_1.waitFor)('.call-frame-warning-icon', selectedCallFrame);
        const title = await warning.evaluate(e => e.getAttribute('title'));
        chai_1.assert.deepEqual(title, `${incompleteMessage}\n${text}`);
    });
    (0, mocha_extensions_js_1.it)('shows variable values with the evaluate API', async () => {
        const extension = await (0, extension_helpers_js_1.loadExtension)('TestExtension', `${(0, extension_helpers_js_1.getResourcesPathWithDevToolsHostname)()}/extensions/language_extensions.html`);
        await extension.evaluate(() => {
            class EvalPlugin {
                modules;
                constructor() {
                    this.modules = new Map();
                }
                async addRawModule(rawModuleId, symbols, rawModule) {
                    const sourceFileURL = new URL('unreachable.ll', rawModule.url || symbols).href;
                    this.modules.set(rawModuleId, {
                        rawLocationRange: { rawModuleId, startOffset: 6, endOffset: 7 },
                        sourceLocation: { rawModuleId, sourceFileURL, lineNumber: 5, columnNumber: 2 },
                    });
                    return [sourceFileURL];
                }
                async rawLocationToSourceLocation(rawLocation) {
                    const { rawLocationRange, sourceLocation } = this.modules.get(rawLocation.rawModuleId) || {};
                    if (rawLocationRange && sourceLocation && rawLocationRange.startOffset <= rawLocation.codeOffset &&
                        rawLocation.codeOffset < rawLocationRange.endOffset) {
                        return [sourceLocation];
                    }
                    return [];
                }
                async listVariablesInScope(_rawLocation) {
                    return [{ scope: 'LOCAL', name: 'local', type: 'TestType' }];
                }
                async getScopeInfo(type) {
                    return { type, typeName: type };
                }
                async evaluate(expression, _context, _stopId) {
                    if (expression !== 'local') {
                        return null;
                    }
                    return {
                        type: 'object',
                        description: 'TestType',
                        objectId: 'TestType',
                        hasChildren: true,
                    };
                }
                async getProperties(objectId) {
                    if (objectId === 'TestType') {
                        return [{
                                name: 'member',
                                value: {
                                    type: 'object',
                                    description: 'TestTypeMember',
                                    objectId: 'TestTypeMember',
                                    hasChildren: true,
                                },
                            }];
                    }
                    if (objectId === 'TestTypeMember') {
                        return [{
                                name: 'member2',
                                value: {
                                    type: 'object',
                                    description: 'TestTypeMember2',
                                    objectId: 'TestTypeMember2',
                                    hasChildren: true,
                                },
                            }];
                    }
                    if (objectId === 'TestTypeMember2') {
                        return [
                            {
                                name: 'recurse',
                                value: {
                                    type: 'number',
                                    description: '27',
                                    value: 27,
                                    hasChildren: false,
                                },
                            },
                            {
                                name: 'value',
                                value: {
                                    type: 'number',
                                    description: '26',
                                    value: 26,
                                    hasChildren: false,
                                },
                            },
                        ];
                    }
                    return [];
                }
                async releaseObject(objectId) {
                    if (objectId !== 'TestType' && objectId !== 'TestTypeMember' && objectId !== 'TestTypeMember2') {
                        throw new Error(`Invalid object id ${objectId}`);
                    }
                }
            }
            RegisterExtension(new EvalPlugin(), 'Evaluation', { language: 'WebAssembly', symbol_types: ['None'] });
        });
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await (0, helper_js_1.click)(sources_helpers_js_1.PAUSE_ON_UNCAUGHT_EXCEPTION_SELECTOR);
        await (0, helper_js_1.goToResource)('sources/wasm/unreachable.html');
        await (0, helper_js_1.waitFor)(sources_helpers_js_1.RESUME_BUTTON);
        const locals = await (0, sources_helpers_js_1.getValuesForScope)('LOCAL', 3, 5);
        chai_1.assert.deepEqual(locals, [
            'local: TestType',
            'member: TestTypeMember',
            'member2: TestTypeMember2',
            'recurse: 27',
            'value: 26',
        ]);
    });
    (0, mocha_extensions_js_1.it)('shows variable value in popover', async () => {
        const extension = await (0, extension_helpers_js_1.loadExtension)('TestExtension', `${(0, extension_helpers_js_1.getResourcesPathWithDevToolsHostname)()}/extensions/language_extensions.html`);
        await extension.evaluate(() => {
            class VariableListingPlugin {
                modules;
                constructor() {
                    this.modules = new Map();
                }
                async addRawModule(rawModuleId, symbols, rawModule) {
                    const sourceFileURL = new URL('unreachable.ll', rawModule.url || symbols).href;
                    this.modules.set(rawModuleId, {
                        rawLocationRange: { rawModuleId, startOffset: 6, endOffset: 7 },
                        sourceLocation: { rawModuleId, sourceFileURL, lineNumber: 5, columnNumber: 2 },
                    });
                    return [sourceFileURL];
                }
                async rawLocationToSourceLocation(rawLocation) {
                    const { rawLocationRange, sourceLocation } = this.modules.get(rawLocation.rawModuleId) || {};
                    if (rawLocationRange && sourceLocation && rawLocationRange.startOffset <= rawLocation.codeOffset &&
                        rawLocation.codeOffset < rawLocationRange.endOffset) {
                        return [sourceLocation];
                    }
                    return [];
                }
                async getScopeInfo(type) {
                    return { type, typeName: type };
                }
                async listVariablesInScope(rawLocation) {
                    const { rawLocationRange } = this.modules.get(rawLocation.rawModuleId) || {};
                    const { codeOffset } = rawLocation;
                    if (!rawLocationRange || rawLocationRange.startOffset > codeOffset ||
                        rawLocationRange.endOffset <= codeOffset) {
                        return [];
                    }
                    // The source code is LLVM IR so there are no meaningful variable names. Most tokens are however
                    // identified as js-variable tokens by codemirror, so we can pretend they're variables. The unreachable
                    // instruction is where we pause at, so it's really easy to find in the page and is a great mock variable
                    // candidate.
                    return [{ scope: 'LOCAL', name: 'unreachable', type: 'int' }];
                }
                evaluate(expression, _context, _stopId) {
                    if (expression === 'unreachable') {
                        return Promise.resolve({ type: 'number', value: 23, description: '23', hasChildren: false });
                    }
                    return Promise.resolve(null);
                }
            }
            RegisterExtension(new VariableListingPlugin(), 'Location Mapping', { language: 'WebAssembly', symbol_types: ['None'] });
        });
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await (0, helper_js_1.click)(sources_helpers_js_1.PAUSE_ON_UNCAUGHT_EXCEPTION_SELECTOR);
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('unreachable.ll', 'wasm/unreachable.html');
        await (0, helper_js_1.waitFor)(sources_helpers_js_1.RESUME_BUTTON);
        const pausedPosition = await (0, helper_js_1.waitForFunction)(async () => {
            const element = await (0, helper_js_1.$)('.cm-executionToken');
            if (element && await element.evaluate(e => e.isConnected)) {
                return element;
            }
            return undefined;
        });
        await pausedPosition.hover();
        const popover = await (0, helper_js_1.waitFor)('[data-stable-name-for-test="object-popover-content"]');
        const value = await (0, helper_js_1.waitFor)('.object-value-number', popover).then(e => e.evaluate(node => node.textContent));
        chai_1.assert.strictEqual(value, '23');
    });
    (0, mocha_extensions_js_1.it)('shows sensible error messages.', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        // This test times out on mac-arm64 when watch expressions take some time to calculate.
        await (0, helper_js_1.disableExperiment)('evaluateExpressionsWithSourceMaps');
        const extension = await (0, extension_helpers_js_1.loadExtension)('TestExtension', `${(0, extension_helpers_js_1.getResourcesPathWithDevToolsHostname)()}/extensions/language_extensions.html`);
        await extension.evaluate(() => {
            class FormattingErrorsPlugin {
                modules;
                constructor() {
                    this.modules = new Map();
                }
                async addRawModule(rawModuleId, symbols, rawModule) {
                    const sourceFileURL = new URL('unreachable.ll', rawModule.url || symbols).href;
                    this.modules.set(rawModuleId, {
                        rawLocationRange: { rawModuleId, startOffset: 6, endOffset: 7 },
                        sourceLocation: { rawModuleId, sourceFileURL, lineNumber: 5, columnNumber: 2 },
                    });
                    return [sourceFileURL];
                }
                async rawLocationToSourceLocation(rawLocation) {
                    const { rawLocationRange, sourceLocation } = this.modules.get(rawLocation.rawModuleId) || {};
                    if (rawLocationRange && sourceLocation && rawLocationRange.startOffset <= rawLocation.codeOffset &&
                        rawLocation.codeOffset < rawLocationRange.endOffset) {
                        return [sourceLocation];
                    }
                    return [];
                }
                async getScopeInfo(type) {
                    return { type, typeName: type };
                }
                async listVariablesInScope(rawLocation) {
                    const { rawLocationRange } = this.modules.get(rawLocation.rawModuleId) || {};
                    const { codeOffset } = rawLocation;
                    if (!rawLocationRange || rawLocationRange.startOffset > codeOffset ||
                        rawLocationRange.endOffset <= codeOffset) {
                        console.error('foobar');
                        return [];
                    }
                    return [{ scope: 'LOCAL', name: 'unreachable', type: 'int' }];
                }
                async evaluate(expression, _context, _stopId) {
                    if (expression === 'foo') {
                        return { type: 'number', value: 23, description: '23', hasChildren: false };
                    }
                    throw new Error(`No typeinfo for ${expression}`);
                }
            }
            RegisterExtension(new FormattingErrorsPlugin(), 'Formatter Errors', { language: 'WebAssembly', symbol_types: ['None'] });
        });
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await (0, helper_js_1.click)(sources_helpers_js_1.PAUSE_ON_UNCAUGHT_EXCEPTION_SELECTOR);
        await (0, helper_js_1.goToResource)('sources/wasm/unreachable.html');
        await (0, helper_js_1.waitFor)(sources_helpers_js_1.RESUME_BUTTON);
        const locals = await (0, sources_helpers_js_1.getValuesForScope)('LOCAL', 0, 1);
        chai_1.assert.deepStrictEqual(locals, ['unreachable: undefined']);
        const watchPane = await (0, helper_js_1.waitFor)('[aria-label="Watch"]');
        const isExpanded = await watchPane.evaluate(element => {
            return element.getAttribute('aria-expanded') === 'true';
        });
        if (!isExpanded) {
            await (0, helper_js_1.click)('.title-expand-icon', { root: watchPane });
        }
        await (0, helper_js_1.click)('[aria-label="Add watch expression"]');
        await (0, helper_js_1.waitFor)('.watch-expression-editing');
        await (0, helper_js_1.pasteText)('foo');
        await frontend.keyboard.press('Enter');
        await (0, helper_js_1.waitForNone)('.watch-expression-editing');
        await (0, helper_js_1.click)('[aria-label="Add watch expression"]');
        await (0, helper_js_1.waitFor)('.watch-expression-editing');
        await (0, helper_js_1.pasteText)('bar');
        await frontend.keyboard.press('Enter');
        await (0, helper_js_1.waitForNone)('.watch-expression-editing');
        const watchResults = await (0, helper_js_1.waitForMany)('.watch-expression', 2);
        const watchTexts = await (0, helper_js_1.waitForFunction)(async () => {
            const texts = await Promise.all(watchResults.map(async (watch) => await watch.evaluate(e => e.textContent)));
            return texts.every(t => t?.length) ? texts : null;
        });
        chai_1.assert.deepStrictEqual(watchTexts, ['foo: 23', 'bar: <not available>']);
        const tooltipText = await watchResults[1].evaluate(e => {
            const errorElement = e.querySelector('.watch-expression-error');
            if (!errorElement) {
                return 'NO ERROR COULD BE FOUND';
            }
            return errorElement.getAttribute('title');
        });
        chai_1.assert.strictEqual(tooltipText, 'No typeinfo for bar');
        await (0, helper_js_1.click)(console_helpers_js_1.CONSOLE_TAB_SELECTOR);
        await (0, console_helpers_js_1.focusConsolePrompt)();
        await (0, helper_js_1.pasteText)('bar');
        await frontend.keyboard.press('Enter');
        // Wait for the console to be usable again.
        await frontend.waitForFunction(() => {
            return document.querySelectorAll('.console-user-command-result').length === 1;
        });
        const messages = await (0, console_helpers_js_1.getCurrentConsoleMessages)();
        chai_1.assert.deepStrictEqual(messages.filter(m => !m.startsWith('[Formatter Errors]')), ['Uncaught No typeinfo for bar']);
    });
    (0, mocha_extensions_js_1.it)('can access wasm data directly', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        const extension = await (0, extension_helpers_js_1.loadExtension)('TestExtension', `${(0, extension_helpers_js_1.getResourcesPathWithDevToolsHostname)()}/extensions/language_extensions.html`);
        await extension.evaluate(() => {
            class WasmDataExtension {
                constructor() {
                }
                async addRawModule(rawModuleId, symbols, rawModule) {
                    const sourceFileURL = new URL('can_access_wasm_data.wat', rawModule.url || symbols).href;
                    return [sourceFileURL];
                }
            }
            RegisterExtension(new WasmDataExtension(), 'Wasm Data', { language: 'WebAssembly', symbol_types: ['None'] });
        });
        await goToWasmResource('can_access_wasm_data.wasm', { autoLoadModule: true });
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await target.evaluate(() => new Uint8Array(window.Module.instance.exports.memory.buffer)
            .set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0));
        const locationLabels = sources_helpers_js_1.WasmLocationLabels.load('extensions/can_access_wasm_data.wat', 'extensions/can_access_wasm_data.wasm');
        await locationLabels.setBreakpointInWasmAndRun('BREAK(can_access_wasm_data)', 'window.Module.instance.exports.exported_func(4)');
        const mem = await extension.evaluate(async () => {
            const buffer = await chrome.devtools.languageServices.getWasmLinearMemory(0, 10, 0n);
            if (buffer instanceof ArrayBuffer) {
                return Array.from(new Uint8Array(buffer));
            }
            throw new Error('Expected an ArrayBuffer');
        });
        chai_1.assert.deepEqual(mem, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        const global = await extension.evaluate(() => chrome.devtools.languageServices.getWasmGlobal(0, 0n));
        chai_1.assert.deepEqual(global, { type: 'i32', value: 0xdad });
        const local = await extension.evaluate(() => chrome.devtools.languageServices.getWasmLocal(0, 0n));
        chai_1.assert.deepEqual(local, { type: 'i32', value: 4 });
        const local2 = await extension.evaluate(() => chrome.devtools.languageServices.getWasmLocal(1, 0n));
        chai_1.assert.deepEqual(local2, { type: 'i32', value: 0 });
        await locationLabels.continueAndCheckForLabel('BREAK(can_access_wasm_data)');
        const expectedError = (0, events_js_1.expectError)('Extension server error: Invalid argument stopId: Unknown stop id');
        // The stop id is invalid now:
        const fail = await extension.evaluate(() => chrome.devtools.languageServices.getWasmLocal(1, 0n));
        // FIXME is this the error reporting experience we want?
        chai_1.assert.deepEqual(fail, {
            code: 'E_BADARG',
            description: 'Invalid argument %s: %s',
            details: [
                'stopId',
                'Unknown stop id',
            ],
            isError: true,
        });
        (0, helper_js_1.assertNotNullOrUndefined)(expectedError.caught);
        // TODO(crbug.com/1472241): Find a way to stop the flake by determining the stopid
        // const local2Set = await extension.evaluate(() => chrome.devtools.languageServices.getWasmLocal(1, 1n));
        // assert.deepEqual(local2Set, {type: 'i32', value: 4});
    });
    (0, mocha_extensions_js_1.it)('lets users manually attach debug info', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        const extension = await (0, extension_helpers_js_1.loadExtension)('TestExtension', `${(0, extension_helpers_js_1.getResourcesPathWithDevToolsHostname)()}/extensions/language_extensions.html`);
        await extension.evaluate(() => {
            // A simple plugin that resolves to a single source file
            class DWARFSymbolsWithSingleFilePlugin {
                async addRawModule(rawModuleId, symbols, rawModule) {
                    if (symbols !== 'foobar81') {
                        return [];
                    }
                    const fileUrl = new URL('/source_file.c', rawModule.url || symbols);
                    return [fileUrl.href];
                }
            }
            RegisterExtension(new DWARFSymbolsWithSingleFilePlugin(), 'Single File', { language: 'WebAssembly', symbol_types: ['ExternalDWARF'] });
        });
        await goToWasmResource('/test/e2e/resources/extensions/global_variable.wasm');
        await (0, sources_helpers_js_1.openSourcesPanel)();
        {
            const capturedFileNames = await (0, sources_helpers_js_1.captureAddedSourceFiles)(1, async () => {
                await target.evaluate('loadModule();');
            });
            chai_1.assert.deepEqual(capturedFileNames, ['/test/e2e/resources/extensions/global_variable.wasm']);
        }
        {
            const capturedFileNames = await (0, sources_helpers_js_1.captureAddedSourceFiles)(1, async () => {
                await (0, sources_helpers_js_1.openFileInEditor)('global_variable.wasm');
                await (0, helper_js_1.click)('aria/Code editor', { clickOptions: { button: 'right' } });
                await (0, helper_js_1.click)('aria/Add DWARF debug info…');
                await (0, helper_js_1.waitFor)('.add-source-map');
                await (0, helper_js_1.typeText)('foobar81');
                await (0, helper_js_1.pressKey)('Enter');
            });
            chai_1.assert.deepEqual(capturedFileNames, ['/source_file.c']);
        }
    });
    (0, mocha_extensions_js_1.it)('does not auto-step for modules without a plugin', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        const locationLabels = sources_helpers_js_1.WasmLocationLabels.load('extensions/stepping.wat', 'extensions/stepping.wasm');
        await goToWasmResource('stepping.wasm', { autoLoadModule: true });
        await (0, sources_helpers_js_1.openSourcesPanel)();
        (0, helper_js_1.installEventListener)(frontend, sources_helpers_js_1.DEBUGGER_PAUSED_EVENT);
        await locationLabels.setBreakpointInWasmAndRun('FIRST_PAUSE', 'window.Module.instance.exports.Main(16)');
        await (0, helper_js_1.waitFor)('.paused-status');
        await locationLabels.checkLocationForLabel('FIRST_PAUSE');
        const beforeStepCallFrame = (await (0, sources_helpers_js_1.retrieveTopCallFrameWithoutResuming)())?.split(':');
        (0, helper_js_1.assertNotNullOrUndefined)(beforeStepCallFrame);
        const beforeStepFunctionNames = await (0, sources_helpers_js_1.getCallFrameNames)();
        await (0, sources_helpers_js_1.stepOver)();
        const afterStepCallFrame = await (0, helper_js_1.waitForFunction)(async () => {
            const callFrame = (await (0, sources_helpers_js_1.retrieveTopCallFrameWithoutResuming)())?.split(':');
            if (callFrame && (callFrame[0] !== beforeStepCallFrame[0] || callFrame[1] !== beforeStepCallFrame[1])) {
                return callFrame;
            }
            return undefined;
        });
        const afterStepFunctionNames = await (0, sources_helpers_js_1.getCallFrameNames)();
        // still in the same function:
        chai_1.assert.deepStrictEqual(beforeStepFunctionNames, afterStepFunctionNames);
        // still in the same module:
        chai_1.assert.deepStrictEqual(beforeStepCallFrame[0], afterStepCallFrame[0]);
        // moved one instruction:
        chai_1.assert.deepStrictEqual(parseInt(beforeStepCallFrame[1], 16) + 2, parseInt(afterStepCallFrame[1], 16));
    });
    (0, mocha_extensions_js_1.it)('auto-steps over unmapped code correctly', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        const extension = await (0, extension_helpers_js_1.loadExtension)('TestExtension', `${(0, extension_helpers_js_1.getResourcesPathWithDevToolsHostname)()}/extensions/language_extensions.html`);
        const locationLabels = sources_helpers_js_1.WasmLocationLabels.load('extensions/stepping.wat', 'extensions/stepping.wasm');
        await goToWasmResource('stepping.wasm', { autoLoadModule: true });
        await (0, sources_helpers_js_1.openSourcesPanel)();
        // Do this after setting the breakpoint, otherwise the helper gets confused
        await locationLabels.setBreakpointInWasmAndRun('FIRST_PAUSE', 'window.Module.instance.exports.Main(16)');
        await extension.evaluate((mappings) => {
            // This plugin will emulate a source mapping with a single file and a single corresponding source line and byte
            // code offset pair.
            class LocationMappingPlugin {
                module = undefined;
                async addRawModule(rawModuleId, symbols, rawModule) {
                    if (this.module) {
                        throw new Error('Expected only one module');
                    }
                    const sourceFileURL = new URL('stepping.wat', rawModule.url || symbols).href;
                    this.module = { rawModuleId, sourceFileURL };
                    return [sourceFileURL];
                }
                async rawLocationToSourceLocation(rawLocation) {
                    if (this.module) {
                        const { rawModuleId, sourceFileURL } = this.module;
                        if (rawModuleId === rawLocation.rawModuleId) {
                            const mapping = mappings.find(m => rawLocation.codeOffset === m.bytecode && m.label !== 'THIRD_PAUSE');
                            if (mapping) {
                                return [{ rawModuleId, sourceFileURL, lineNumber: mapping.sourceLine - 1, columnNumber: -1 }];
                            }
                        }
                    }
                    return [];
                }
                async sourceLocationToRawLocation(sourceLocation) {
                    if (this.module) {
                        const { rawModuleId, sourceFileURL } = this.module;
                        if (rawModuleId === sourceLocation.rawModuleId && sourceFileURL === sourceLocation.sourceFileURL) {
                            const mapping = mappings.find(m => sourceLocation.lineNumber === m.sourceLine - 1);
                            if (mapping) {
                                return [{ rawModuleId, startOffset: mapping.bytecode, endOffset: mapping.bytecode + 1 }];
                            }
                        }
                    }
                    return [];
                }
                async getMappedLines(rawModuleIdArg, sourceFileURLArg) {
                    if (this.module) {
                        const { rawModuleId, sourceFileURL } = this.module;
                        if (rawModuleId === rawModuleIdArg && sourceFileURL === sourceFileURLArg) {
                            return Array.from(new Set(mappings.map(m => m.sourceLine - 1)).values()).sort();
                        }
                    }
                    return undefined;
                }
            }
            RegisterExtension(new LocationMappingPlugin(), 'Location Mapping', { language: 'WebAssembly', symbol_types: ['None'] });
        }, locationLabels.getMappingsForPlugin());
        await (0, helper_js_1.waitFor)('.paused-status');
        await locationLabels.checkLocationForLabel('FIRST_PAUSE');
        (0, helper_js_1.installEventListener)(frontend, sources_helpers_js_1.DEBUGGER_PAUSED_EVENT);
        await (0, sources_helpers_js_1.stepOver)();
        await locationLabels.checkLocationForLabel('SECOND_PAUSE');
        await (0, sources_helpers_js_1.stepOver)();
        const pausedLocation = await locationLabels.checkLocationForLabel('THIRD_PAUSE');
        // We're paused at the right location, but let's also check that we're paused in wasm, not the source code:
        const pausedFrame = await (0, sources_helpers_js_1.retrieveTopCallFrameWithoutResuming)();
        chai_1.assert.deepEqual(pausedFrame, `stepping.wasm:0x${pausedLocation.moduleOffset.toString(16)}`);
    });
});
//# sourceMappingURL=debugger-language-plugins_test.js.map