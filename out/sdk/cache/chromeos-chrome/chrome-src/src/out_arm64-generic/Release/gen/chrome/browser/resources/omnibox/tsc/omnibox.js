// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './strings.m.js';
import './omnibox_input.js';
import './omnibox_output.js';
import { assert } from 'chrome://resources/js/assert.js';
import { sendWithPromise } from 'chrome://resources/js/cr.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { AutocompleteControllerType, OmniboxPageCallbackRouter, OmniboxPageHandler } from './omnibox.mojom-webui.js';
let browserProxy;
let omniboxInput;
let omniboxOutput;
let exportDelegate;
class BrowserProxy {
    callbackRouter_ = new OmniboxPageCallbackRouter();
    handler_;
    lastRequest = null;
    constructor(omniboxOutput) {
        this.callbackRouter_.handleNewAutocompleteResponse.addListener(this.handleNewAutocompleteResponse.bind(this));
        this.callbackRouter_.handleNewAutocompleteQuery.addListener(this.handleNewAutocompleteQuery.bind(this));
        this.callbackRouter_.handleAnswerImageData.addListener(omniboxOutput.updateAnswerImage.bind(omniboxOutput));
        this.handler_ = OmniboxPageHandler.getRemote();
        this.handler_.setClientPage(this.callbackRouter_.$.bindNewPipeAndPassRemote());
    }
    handleNewAutocompleteResponse(controllerType, response) {
        if (controllerType === AutocompleteControllerType.kMlDisabledDebug) {
            return;
        }
        const isDebugController = controllerType === AutocompleteControllerType.kDebug;
        const isForLastPageRequest = this.isForLastPageRequest(response.inputText, isDebugController);
        // When unfocusing the browser omnibox, the autocomplete controller
        // sends a response with no combined results. This response is ignored
        // in order to prevent the previous non-empty response from being
        // hidden and because these results wouldn't normally be displayed by
        // the browser window omnibox.
        if (isForLastPageRequest && this.lastRequest.display ||
            omniboxInput.connectWindowOmnibox && !isDebugController &&
                response.combinedResults.length) {
            omniboxOutput.addAutocompleteResponse(response);
        }
        // TODO(orinj|manukh): If `response.done` but not `isForLastPageRequest`
        //  then callback is being dropped. We should guarantee that callback is
        //  always called because some callers await promises.
        if (isForLastPageRequest && response.done) {
            assert(this.lastRequest);
            this.lastRequest.callback(response);
            this.lastRequest = null;
        }
    }
    handleNewAutocompleteQuery(controllerType, inputText) {
        if (controllerType === AutocompleteControllerType.kMlDisabledDebug) {
            return;
        }
        const isDebugController = controllerType === AutocompleteControllerType.kDebug;
        // If the request originated from the debug page and is not for display,
        // then we don't want to clear the omniboxOutput.
        if (this.isForLastPageRequest(inputText, isDebugController) &&
            this.lastRequest.display ||
            omniboxInput.connectWindowOmnibox && !isDebugController) {
            omniboxOutput.prepareNewQuery();
        }
    }
    makeRequest(inputText, resetAutocompleteController, cursorPosition, zeroSuggest, preventInlineAutocomplete, preferKeyword, currentUrl, pageClassification, display) {
        return new Promise(resolve => {
            this.lastRequest = { inputText, callback: resolve, display };
            this.handler_.startOmniboxQuery(inputText, resetAutocompleteController, cursorPosition, zeroSuggest, preventInlineAutocomplete, preferKeyword, currentUrl, pageClassification);
        });
    }
    isForLastPageRequest(inputText, isDebugController) {
        // Note: Using inputText is a sufficient fix for the way this is used today,
        // but in principle it would be better to associate requests with responses
        // using a unique session identifier, for example by rolling an integer each
        // time a request is made. Doing so would require extra bookkeeping on the
        // host side, so for now we keep it simple.
        return isDebugController && !!this.lastRequest &&
            this.lastRequest.inputText.trimStart() === inputText;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    omniboxInput = document.querySelector('omnibox-input');
    omniboxOutput = document.querySelector('omnibox-output');
    browserProxy = new BrowserProxy(omniboxOutput);
    exportDelegate = new ExportDelegate(omniboxOutput, omniboxInput);
    omniboxInput.addEventListener('query-inputs-changed', e => {
        browserProxy.makeRequest(e.detail.inputText, e.detail.resetAutocompleteController, e.detail.cursorPosition, e.detail.zeroSuggest, e.detail.preventInlineAutocomplete, e.detail.preferKeyword, e.detail.currentUrl, e.detail.pageClassification, true);
    });
    omniboxInput.addEventListener('display-inputs-changed', e => omniboxOutput.updateDisplayInputs(e.detail));
    omniboxInput.addEventListener('filter-input-changed', e => omniboxOutput.updateFilterText(e.detail));
    omniboxInput.addEventListener('import', e => exportDelegate.import(e.detail));
    omniboxInput.addEventListener('process-batch', e => exportDelegate.processBatchData(e.detail));
    omniboxInput.addEventListener('export-clipboard', () => exportDelegate.exportClipboard());
    omniboxInput.addEventListener('export-file', () => exportDelegate.exportFile());
    omniboxInput.addEventListener('response-select', e => omniboxOutput.updateSelectedResponseIndex(e.detail));
    omniboxOutput.addEventListener('responses-count-changed', e => omniboxInput.responsesCount = e.detail);
    omniboxOutput.updateDisplayInputs(omniboxInput.displayInputs);
});
class ExportDelegate {
    omniboxInput_;
    omniboxOutput_;
    constructor(omniboxOutput, omniboxInput) {
        this.omniboxInput_ = omniboxInput;
        this.omniboxOutput_ = omniboxOutput;
    }
    /**
     * Import a single data item previously exported. Returns true if a single
     * data item was imported for viewing; false if import failed.
     */
    import(importData) {
        if (!validateImportData(importData)) {
            // TODO(manukh): Make use of this return value to fix the UI state bug in
            //  omnibox_input.js -- see the related TODO there.
            return false;
        }
        this.omniboxInput_.queryInputs = importData.queryInputs;
        this.omniboxInput_.displayInputs = importData.displayInputs;
        this.omniboxOutput_.updateDisplayInputs(importData.displayInputs);
        this.omniboxOutput_.setResponsesHistory(importData.responsesHistory);
        return true;
    }
    /**
     * This is the worker function that transforms query inputs to accumulate
     * batch exports, then finally initiates a download for the complete set.
     */
    async processBatch(batchQueryInputs, batchName) {
        const batchExports = [];
        for (const queryInputs of batchQueryInputs) {
            const omniboxResponse = await browserProxy.makeRequest(queryInputs.inputText, queryInputs.resetAutocompleteController, queryInputs.cursorPosition, queryInputs.zeroSuggest, queryInputs.preventInlineAutocomplete, queryInputs.preferKeyword, queryInputs.currentUrl, queryInputs.pageClassification, false);
            const exportData = {
                queryInputs,
                // TODO(orinj|manukh): Make the schema consistent and remove the extra
                //  level of array nesting. [[This]] is done for now so that elements
                //  can be extracted in the form import expects.
                responsesHistory: [[omniboxResponse]],
                displayInputs: this.omniboxInput_.displayInputs,
            };
            batchExports.push(exportData);
        }
        const variationInfo = await sendWithPromise('requestVariationInfo', true);
        const pathInfo = await sendWithPromise('requestPathInfo');
        const now = new Date();
        const fileName = `omnibox_batch_${ExportDelegate.getTimeStamp(now)}.json`;
        // If this data format changes, please roll schemaVersion.
        const batchData = {
            schemaKind: 'Omnibox Batch Export',
            schemaVersion: 3,
            dateCreated: now.toISOString(),
            author: '',
            description: '',
            authorTool: 'chrome://omnibox',
            batchName,
            versionDetails: ExportDelegate.getVersionDetails(),
            variationInfo,
            pathInfo,
            appVersion: navigator.appVersion,
            batchExports,
        };
        ExportDelegate.download(batchData, fileName);
    }
    /**
     * Event handler for uploaded batch processing specifier data, kicks off
     * the processBatch asynchronous pipeline.
     */
    processBatchData(processBatchData) {
        if (processBatchData.batchMode && processBatchData.batchQueryInputs &&
            processBatchData.batchName) {
            this.processBatch(processBatchData.batchQueryInputs, processBatchData.batchName);
        }
        else {
            const expected = {
                batchMode: 'combined',
                batchName: 'name for this batch of queries',
                batchQueryInputs: [{
                        inputText: 'example input text',
                        cursorPosition: 18,
                        resetAutocompleteController: false,
                        cursorLock: false,
                        zeroSuggest: false,
                        preventInlineAutocomplete: false,
                        preferKeyword: false,
                        currentUrl: '',
                        pageClassification: '4',
                    }],
            };
            console.error(`Invalid batch specifier data.  Expected format: \n${JSON.stringify(expected, null, 2)}`);
        }
    }
    exportClipboard() {
        navigator.clipboard.writeText(ExportDelegate.jsonStringify(this.exportData))
            .catch(error => console.error('unable to export to clipboard:', error));
    }
    exportFile() {
        const exportData = this.exportData;
        const timeStamp = ExportDelegate.getTimeStamp();
        const fileName = `omnibox_debug_export_${exportData.queryInputs.inputText}_${timeStamp}.json`;
        ExportDelegate.download(exportData, fileName);
    }
    get exportData() {
        return {
            versionDetails: ExportDelegate.getVersionDetails(),
            queryInputs: this.omniboxInput_.queryInputs,
            displayInputs: this.omniboxInput_.displayInputs,
            // 20 entries will be about 7mb and 180k lines. That's small enough to
            // attach to bugs.chromium.org which has a 10mb limit.
            responsesHistory: this.omniboxOutput_.responsesHistory.slice(-20),
        };
    }
    static download(object, fileName) {
        const content = ExportDelegate.jsonStringify(object);
        const blob = new Blob([content], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
    }
    static jsonStringify(data) {
        return JSON.stringify(data, (_, value) => typeof value === 'bigint' ? value.toString() : value, 2);
    }
    /**
     * Returns a sortable timestamp string for use in filenames.
     */
    static getTimeStamp(date = new Date()) {
        const iso = date.toISOString();
        return iso.replace(/:/g, '').split('.')[0];
    }
    static getVersionDetails() {
        const loadTimeDataKeys = ['cl', 'command_line', 'executable_path',
            'language', 'official', 'os_type', 'profile_path', 'useragent',
            'version', 'version_processor_variation', 'version_modifier'];
        return Object.fromEntries(loadTimeDataKeys.map(key => {
            let valueOrError;
            try {
                valueOrError = loadTimeData.getValue(key);
            }
            catch (e) {
                valueOrError = e.toString();
            }
            return [key, valueOrError];
        }));
    }
}
/**
 * This is the minimum validation required to ensure no console errors.
 * Invalid importData that passes validation will be processed with a
 * best-attempt; e.g. if responses are missing 'relevance' values, then those
 * cells will be left blank.
 */
function validateImportData(importData) {
    const EXPECTED_FORMAT = {
        queryInputs: {},
        displayInputs: {},
        responsesHistory: [[{ combinedResults: [], resultsByProvider: [] }]],
    };
    const INVALID_MESSAGE = `Invalid import format; expected \n${JSON.stringify(EXPECTED_FORMAT, null, 2)};\n`;
    if (!importData) {
        console.error(INVALID_MESSAGE + 'received non object.');
        return false;
    }
    if (!importData.queryInputs || !importData.displayInputs) {
        console.error(INVALID_MESSAGE +
            'import missing objects queryInputs and displayInputs.');
        return false;
    }
    if (!Array.isArray(importData.responsesHistory)) {
        console.error(INVALID_MESSAGE + 'import missing array responsesHistory.');
        return false;
    }
    if (!importData.responsesHistory.every(Array.isArray)) {
        console.error(INVALID_MESSAGE + 'responsesHistory contains non arrays.');
        return false;
    }
    if (!importData.responsesHistory.every(responses => responses.every(({ combinedResults, resultsByProvider }) => Array.isArray(combinedResults) &&
        Array.isArray(resultsByProvider)))) {
        console.error(INVALID_MESSAGE +
            'responsesHistory items\' items missing combinedResults and ' +
            'resultsByProvider arrays.');
        return false;
    }
    return true;
}
