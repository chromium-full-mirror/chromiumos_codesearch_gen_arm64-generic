// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { OmniboxPageCallbackRouter, OmniboxPageHandler } from '../omnibox.mojom-webui.js';
import { MlVersionObj } from '../omnibox_util.js';
export var ResponseFilter;
(function (ResponseFilter) {
    ResponseFilter["FINAL"] = "Final results";
    ResponseFilter["ALL"] = "All results";
})(ResponseFilter || (ResponseFilter = {}));
export class MlBrowserProxy {
    constructor() {
        this.callbackRouter = new OmniboxPageCallbackRouter();
        this.handler = OmniboxPageHandler.getRemote();
        this.onResponseCallbacks = [];
        this.callbackRouter.handleNewAutocompleteResponse.addListener(this.handleNewAutocompleteResponse.bind(this));
        this.callbackRouter.handleNewMlResponse.addListener(this.handleNewMlResponse.bind(this));
        this.handler.setClientPage(this.callbackRouter.$.bindNewPipeAndPassRemote());
    }
    addResponseListener(callback) {
        this.onResponseCallbacks.push(callback);
    }
    onResponse(responseFilter, controllerType, input, matches) {
        this.onResponseCallbacks.forEach(callback => callback(responseFilter, controllerType, input, matches));
    }
    handleNewAutocompleteResponse(controllerType, response) {
        this.onResponse(ResponseFilter.FINAL, controllerType, response.inputText, response.combinedResults);
    }
    handleNewMlResponse(controllerType, input, matches) {
        this.onResponse(ResponseFilter.ALL, controllerType, input, matches);
    }
    get modelVersion() {
        return this.version ||= this.handler.getMlModelVersion().then(({ version }) => new MlVersionObj(version));
    }
    makeMlRequest(signals) {
        return this.handler.startMl(signals).then(({ score }) => score);
    }
}
