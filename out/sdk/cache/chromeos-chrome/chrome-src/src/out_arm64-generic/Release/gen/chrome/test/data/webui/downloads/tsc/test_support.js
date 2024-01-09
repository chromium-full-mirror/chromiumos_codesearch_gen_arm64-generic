// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { DangerType, PageCallbackRouter, SafeBrowsingState, State } from 'chrome://downloads/downloads.js';
import { stringToMojoString16, stringToMojoUrl } from 'chrome://resources/js/mojo_type_util.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestDownloadsProxy {
    callbackRouter;
    callbackRouterRemote;
    handler;
    constructor() {
        this.callbackRouter = new PageCallbackRouter();
        this.callbackRouterRemote =
            this.callbackRouter.$.bindNewPipeAndPassRemote();
        this.handler = new FakePageHandler(this.callbackRouterRemote);
    }
}
class FakePageHandler {
    callbackRouterRemote_;
    callTracker_ = new TestBrowserProxy([
        'recordCancelBypassWarningPrompt',
        'recordOpenBypassWarningPrompt',
        'remove',
        'saveDangerousFromPromptRequiringGesture',
        'saveDangerousRequiringGesture',
        'saveSuspiciousRequiringGesture',
    ]);
    constructor(callbackRouterRemote) {
        this.callbackRouterRemote_ = callbackRouterRemote;
    }
    whenCalled(methodName) {
        return this.callTracker_.whenCalled(methodName);
    }
    recordCancelBypassWarningPrompt(id) {
        this.callTracker_.methodCalled('recordCancelBypassWarningPrompt', id);
    }
    recordOpenBypassWarningPrompt(id) {
        this.callTracker_.methodCalled('recordOpenBypassWarningPrompt', id);
    }
    async remove(id) {
        this.callbackRouterRemote_.removeItem(0);
        await this.callbackRouterRemote_.$.flushForTesting();
        this.callTracker_.methodCalled('remove', id);
    }
    saveDangerousFromPromptRequiringGesture(id) {
        this.callTracker_.methodCalled('saveDangerousFromPromptRequiringGesture', id);
    }
    saveDangerousRequiringGesture(id) {
        this.callTracker_.methodCalled('saveDangerousRequiringGesture', id);
    }
    saveSuspiciousRequiringGesture(id) {
        this.callTracker_.methodCalled('saveSuspiciousRequiringGesture', id);
    }
    getDownloads(_searchTerms) { }
    openFileRequiringGesture(_id) { }
    drag(_id) { }
    acceptIncognitoWarning(_id) { }
    discardDangerous(_id) { }
    retryDownload(_id) { }
    show(_id) { }
    pause(_id) { }
    resume(_id) { }
    undo() { }
    cancel(_id) { }
    clearAll() { }
    openDownloadsFolderRequiringGesture() { }
    openDuringScanningRequiringGesture(_id) { }
    reviewDangerousRequiringGesture(_id) { }
    deepScan(_id) { }
    bypassDeepScanRequiringGesture(_id) { }
}
export class TestIconLoader extends TestBrowserProxy {
    shouldIconsLoad_ = true;
    constructor() {
        super(['loadIcon']);
    }
    setShouldIconsLoad(shouldIconsLoad) {
        this.shouldIconsLoad_ = shouldIconsLoad;
    }
    loadIcon(_imageEl, filePath) {
        this.methodCalled('loadIcon', filePath);
        return Promise.resolve(this.shouldIconsLoad_);
    }
}
export function createDownload(config) {
    return Object.assign({
        byExtId: '',
        byExtName: '',
        dangerType: DangerType.kNoApplicableDangerType,
        dateString: '',
        fileExternallyRemoved: false,
        fileName: 'download 1',
        filePath: '/some/file/path',
        fileUrl: 'file:///some/file/path',
        hideDate: false,
        id: '123',
        isDangerous: false,
        isInsecure: false,
        isReviewable: false,
        lastReasonText: '',
        otr: false,
        percent: 100,
        progressStatusText: '',
        resume: false,
        retry: false,
        return: false,
        shouldShowIncognitoWarning: false,
        showInFolderText: '',
        sinceString: 'Today',
        started: Date.now() - 10000,
        state: State.kComplete,
        total: -1,
        url: stringToMojoUrl('http://permission.site'),
        displayUrl: stringToMojoString16('http://permission.site'),
        safeBrowsingState: SafeBrowsingState.kStandardProtection,
        hasSafeBrowsingVerdict: true,
    }, config || {});
}
