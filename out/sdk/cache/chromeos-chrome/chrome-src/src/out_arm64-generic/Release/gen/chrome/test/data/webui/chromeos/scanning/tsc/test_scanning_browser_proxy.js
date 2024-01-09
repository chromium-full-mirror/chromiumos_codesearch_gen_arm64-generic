// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { TestBrowserProxy } from 'chrome://webui-test/chromeos/test_browser_proxy.js';
const EMPTY_SELECTED_PATH = {
    baseName: '',
    filePath: '',
};
/**
 * Test version of ScanningBrowserProxy.
 */
export class TestScanningBrowserProxy extends TestBrowserProxy {
    selectedPath = EMPTY_SELECTED_PATH;
    pathToFile = null;
    myFilesPath = '';
    savedSettings = '';
    savedSettingsSelectedPath = EMPTY_SELECTED_PATH;
    constructor() {
        super([
            'initialize',
            'requestScanToLocation',
            'showFileInLocation',
            'getPluralString',
            'recordScanJobSettings',
            'getMyFilesPath',
            'openFilesInMediaApp',
            'recordScanCompleteAction',
            'recordNumScanSettingChanges',
            'saveScanSettings',
            'getScanSettings',
            'ensureValidFilePath',
            'recordNumCompletedScans',
        ]);
    }
    initialize() { }
    requestScanToLocation() {
        return Promise.resolve(this.selectedPath);
    }
    showFileInLocation(pathToFile) {
        this.methodCalled('showFileInLocation', pathToFile);
        return Promise.resolve(this.pathToFile === pathToFile);
    }
    getPluralString(name, count) {
        let pluralString = '';
        switch (name) {
            case ('fileSavedText'):
                pluralString = count === 1 ?
                    'Your file has been successfully scanned and saved to ' +
                        '<a id="folderLink">$1</a>.' :
                    'Your files have been successfully scanned and saved to ' +
                        '<a id="folderLink">$1</a>.';
                break;
            case ('editButtonLabel'):
                pluralString = count === 1 ? 'Edit file' : 'Edit files';
                break;
            case ('scanButtonText'):
                pluralString = count === 0 ? 'Scan' : 'Scan page ' + count;
                break;
            case ('removePageDialogTitle'):
                pluralString =
                    count === 0 ? 'Remove page?' : 'Remove page ' + count + '?';
                break;
            case ('rescanPageDialogTitle'):
                pluralString =
                    count === 0 ? 'Rescan page?' : 'Rescan page ' + count + '?';
                break;
        }
        return Promise.resolve(`${sanitizeInnerHtml(pluralString, { attrs: ['id'] })}`);
    }
    recordScanJobSettings() { }
    getMyFilesPath() {
        return Promise.resolve(this.myFilesPath);
    }
    openFilesInMediaApp(filePaths) {
        this.methodCalled('openFilesInMediaApp', filePaths);
    }
    recordScanCompleteAction() { }
    recordNumScanSettingChanges(numChanges) {
        this.methodCalled('recordNumScanSettingChanges', numChanges);
    }
    saveScanSettings(scanSettings) {
        this.methodCalled('saveScanSettings', scanSettings);
    }
    getScanSettings() {
        return Promise.resolve(this.savedSettings);
    }
    ensureValidFilePath(filePath) {
        return Promise.resolve(filePath === this.savedSettingsSelectedPath.filePath ?
            this.savedSettingsSelectedPath :
            EMPTY_SELECTED_PATH);
    }
    recordNumCompletedScans() { }
    setSelectedPath(selectedPath) {
        this.selectedPath = selectedPath;
    }
    setPathToFile(pathToFile) {
        this.pathToFile = pathToFile;
    }
    setMyFilesPath(myFilesPath) {
        this.myFilesPath = myFilesPath;
    }
    setSavedSettings(savedSettings) {
        this.savedSettings = savedSettings;
    }
    setSavedSettingsSelectedPath(selectedPath) {
        this.savedSettingsSelectedPath = selectedPath;
    }
}
