// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { UserNotesPageCallbackRouter } from 'chrome://user-notes-side-panel.top-chrome/user_notes.mojom-webui.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestUserNotesApiProxy extends TestBrowserProxy {
    callbackRouter_ = new UserNotesPageCallbackRouter();
    callbackRouterRemote_ = this.callbackRouter_.$.bindNewPipeAndPassRemote();
    notes_;
    overviews_;
    constructor() {
        super([
            'deleteNote',
            'deleteNotesForUrl',
            'getNotesForCurrentTab',
            'getNoteOverviews',
            'hasNotesInAnyPages',
            'newNoteFinished',
            'noteOverviewSelected',
            'openInIncognitoWindow',
            'openInNewTab',
            'openInNewWindow',
            'setSortOrder',
            'showUi',
            'updateNote',
        ]);
        this.notes_ = [];
        this.overviews_ = [];
    }
    deleteNote(guid) {
        this.methodCalled('deleteNote', guid);
        return Promise.resolve({ success: true });
    }
    deleteNotesForUrl(url) {
        this.methodCalled('deleteNotesForUrl', url);
        return Promise.resolve({ success: true });
    }
    getNotesForCurrentTab() {
        this.methodCalled('getNotesForCurrentTab');
        return Promise.resolve({ notes: this.notes_.slice() });
    }
    getNoteOverviews(userInput) {
        this.methodCalled('getNoteOverviews', userInput);
        return Promise.resolve({ overviews: this.overviews_.slice() });
    }
    hasNotesInAnyPages() {
        this.methodCalled('hasNotesInAnyPages');
        return Promise.resolve({ hasNotes: this.overviews_.length !== 0 });
    }
    newNoteFinished(text) {
        this.methodCalled('newNoteFinished', text);
        return Promise.resolve({ success: true });
    }
    noteOverviewSelected(url, clickModifiers) {
        this.methodCalled('noteOverviewSelected', url, clickModifiers);
    }
    openInIncognitoWindow(url) {
        this.methodCalled('openInIncognitoWindow', url);
    }
    openInNewTab(url) {
        this.methodCalled('openInNewTab', url);
    }
    openInNewWindow(url) {
        this.methodCalled('openInNewWindow', url);
    }
    setSortOrder(sortByNewest) {
        this.methodCalled('setSortOrder', sortByNewest);
    }
    showUi() {
        this.methodCalled('showUi');
    }
    updateNote(guid, text) {
        this.methodCalled('updateNote', guid, text);
        return Promise.resolve({ success: true });
    }
    getCallbackRouter() {
        return this.callbackRouter_;
    }
    getCallbackRouterRemote() {
        return this.callbackRouterRemote_;
    }
    setNotes(notes) {
        this.notes_ = notes;
    }
    setNoteOverviews(overviews) {
        this.overviews_ = overviews;
    }
}
