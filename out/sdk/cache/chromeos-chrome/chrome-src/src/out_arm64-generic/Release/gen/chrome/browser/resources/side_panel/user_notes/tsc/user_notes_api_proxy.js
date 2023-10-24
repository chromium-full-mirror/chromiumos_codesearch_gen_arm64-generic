// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { UserNotesPageCallbackRouter, UserNotesPageHandlerFactory, UserNotesPageHandlerRemote } from './user_notes.mojom-webui.js';
let instance = null;
export class UserNotesApiProxyImpl {
    constructor() {
        this.callbackRouter = new UserNotesPageCallbackRouter();
        this.handler = new UserNotesPageHandlerRemote();
        const factory = UserNotesPageHandlerFactory.getRemote();
        factory.createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    showUi() {
        this.handler.showUI();
    }
    getNoteOverviews(userInput) {
        return this.handler.getNoteOverviews(userInput);
    }
    getNotesForCurrentTab() {
        return this.handler.getNotesForCurrentTab();
    }
    newNoteFinished(text) {
        return this.handler.newNoteFinished(text);
    }
    updateNote(guid, text) {
        return this.handler.updateNote(guid, text);
    }
    deleteNote(guid) {
        return this.handler.deleteNote(guid);
    }
    deleteNotesForUrl(url) {
        return this.handler.deleteNotesForUrl(url);
    }
    noteOverviewSelected(url, clickModifiers) {
        this.handler.noteOverviewSelected(url, clickModifiers);
    }
    setSortOrder(sortByNewest) {
        this.handler.setSortOrder(sortByNewest);
    }
    hasNotesInAnyPages() {
        return this.handler.hasNotesInAnyPages();
    }
    openInNewTab(url) {
        this.handler.openInNewTab(url);
    }
    openInNewWindow(url) {
        this.handler.openInNewWindow(url);
    }
    openInIncognitoWindow(url) {
        this.handler.openInIncognitoWindow(url);
    }
    getCallbackRouter() {
        return this.callbackRouter;
    }
    static getInstance() {
        return instance || (instance = new UserNotesApiProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
