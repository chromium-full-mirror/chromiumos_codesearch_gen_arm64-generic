// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter } from 'chrome://resources/cr_components/omnibox/omnibox.mojom-webui.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
/**
 * Helps track realbox browser call arguments. A mocked page handler remote
 * resolves the browser call promises with the arguments as an array making the
 * tests prone to change if the arguments change. This class extends the page
 * handler remote, resolving the browser call promises with named arguments.
 */
class FakePageHandler extends TestBrowserProxy {
    constructor() {
        super([
            'deleteAutocompleteMatch',
            'executeAction',
            'onNavigationLikely',
            'openAutocompleteMatch',
            'queryAutocomplete',
            'stopAutocomplete',
            'toggleSuggestionGroupIdVisibility',
            'onFocusChanged',
            'popupElementSizeChanged',
        ]);
    }
    setPage(page) {
        this.methodCalled('setPage', page);
    }
    onFocusChanged(focused) {
        this.methodCalled('onFocusChanged', { focused });
    }
    popupElementSizeChanged(size) {
        this.methodCalled('popupElementSizeChanged', { size });
    }
    deleteAutocompleteMatch(line, url) {
        this.methodCalled('deleteAutocompleteMatch', { line, url });
    }
    executeAction(line, actionIndex, url, matchSelectionTimestamp, mouseButton, altKey, ctrlKey, metaKey, shiftKey) {
        this.methodCalled('executeAction', {
            line,
            actionIndex,
            url,
            matchSelectionTimestamp,
            mouseButton,
            altKey,
            ctrlKey,
            metaKey,
            shiftKey,
        });
    }
    openAutocompleteMatch(line, url, areMatchesShowing, mouseButton, altKey, ctrlKey, metaKey, shiftKey) {
        this.methodCalled('openAutocompleteMatch', {
            line,
            url,
            areMatchesShowing,
            mouseButton,
            altKey,
            ctrlKey,
            metaKey,
            shiftKey,
        });
    }
    onNavigationLikely(line, url, navigationPredictor) {
        this.methodCalled('onNavigationLikely', { line, url, navigationPredictor });
    }
    queryAutocomplete(input, preventInlineAutocomplete) {
        this.methodCalled('queryAutocomplete', { input, preventInlineAutocomplete });
    }
    stopAutocomplete(clearResult) {
        this.methodCalled('stopAutocomplete', { clearResult });
    }
    toggleSuggestionGroupIdVisibility(suggestionGroupId) {
        this.methodCalled('toggleSuggestionGroupIdVisibility', { suggestionGroupId });
    }
}
export class TestRealboxBrowserProxy {
    callbackRouter;
    callbackRouterRemote;
    handler;
    constructor() {
        this.callbackRouter = new PageCallbackRouter();
        this.callbackRouterRemote =
            this.callbackRouter.$.bindNewPipeAndPassRemote();
        this.handler = new FakePageHandler();
    }
}
