// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ResponseType } from './message_type';
import { ServiceWorkerFactory } from './service_worker';
/**
 * Extension entry point.
 */
export class Background {
    constructor(chromeAPI, deskAPI, notifAPI) {
        this.chromeAPI = chromeAPI;
        this.deskAPI = deskAPI;
        this.notifAPI = notifAPI;
        const serviceWorkerFactory = new ServiceWorkerFactory(this.deskAPI, this.notifAPI, /*isTest=*/ false);
        this.chromeAPI.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
            serviceWorkerFactory.get()
                .then((serviceWorker) => {
                serviceWorker.handleMessage(request, sender)
                    .then((response) => {
                    sendResponse(response);
                })
                    .catch((error) => {
                    sendResponse({
                        messageType: ResponseType.OPERATION_FAILURE,
                        operands: [],
                        errorMessage: error.message,
                    });
                });
            })
                .catch((error) => {
                sendResponse({
                    messageType: ResponseType.OPERATION_FAILURE,
                    operands: [],
                    errorMessage: error.message,
                });
            });
            // assures that the service worker will continue to accept requests
            // after it's no longer active.
            return true;
        });
        // @ts-ignore: onConnectExternal defined in chrome.runtime
        this.chromeAPI.runtime.onConnectExternal.addListener(
        // @ts-ignore: Port defined in chrome.runtime
        (port) => {
            serviceWorkerFactory.get().then(serviceWorker => {
                serviceWorker.registerEventsListener(port);
            });
        });
    }
}
