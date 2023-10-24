// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { EventType, RequestType, ResponseType } from './message_type';
/**
 * Actual implementation for the service worker.
 */
class ServiceWorkerImpl {
    /**
     * This constructor sets three fields: the deskApi and notification field
     * exists in order to facilitate dependency injection for this class, the
     * isTest boolean field exists in order to short circuit reads to
     * chrome.runtime.LastError during tests.  This is done because said variable
     * is not available in the test environment and there is no way to inject a
     * reference to that error here.
     */
    constructor(deskApi, notificationApi, isTest) {
        this.deskApi = deskApi;
        this.notificationApi = notificationApi;
        this.isTest = isTest;
    }
    launchDeskPromise(options) {
        return new Promise((resolve, reject) => {
            try {
                this.deskApi.launchDesk(options, (deskId) => {
                    if (!this.isTest && chrome.runtime.lastError) {
                        reject(chrome.runtime.lastError);
                        return;
                    }
                    resolve({
                        messageType: ResponseType.OPERATION_SUCCESS,
                        operands: { 'deskUuid': deskId },
                    });
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    removeDeskPromise(operands) {
        if (!operands.deskId) {
            return Promise.reject({ message: 'The desk can not be found.' });
        }
        if (operands.options) {
            if (operands.options.allowUndo && operands.options.combineDesks) {
                return Promise.reject({
                    message: 'Unsupported behavior: allowUndo and combineDesks are both true.',
                });
            }
        }
        if (operands.skipConfirmation) {
            return this.removeDeskInternalPromise(operands);
        }
        const notificationId = 'deskAPI';
        this.notificationApi.clear(notificationId);
        const defaultNotificationOptions = {
            title: 'Close all windows?',
            message: 'This interaction has ended. ' +
                'This will close all windows on this desk.',
            iconUrl: 'templates_icon.png',
            buttons: [{ title: 'Close windows' }, { title: 'Keep windows' }],
        };
        const notificationOptions = !operands.confirmationSetting ? defaultNotificationOptions : {
            title: operands.confirmationSetting.title,
            message: operands.confirmationSetting.message,
            iconUrl: operands.confirmationSetting.iconUrl,
            buttons: [
                { title: operands.confirmationSetting.acceptMessage },
                { title: operands.confirmationSetting.rejectMessage },
            ],
        };
        return new Promise((resolve, reject) => {
            // First, check if the desk is able to be obtained.
            this.getDeskByIdPromise({ deskId: operands.deskId })
                .then(() => {
                resolve(this.removeDeskNotificationPromise(operands, notificationOptions, notificationId));
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    removeDeskNotificationPromise(operands, notificationOptions, notificationId) {
        return new Promise((resolve, reject) => {
            try {
                //  Create a pop up window
                //  Set notificationId so that the same notification needs to be
                //  cancelled before the new notification can be created
                this.notificationApi.create(notificationId, notificationOptions, () => {
                    resolve(this.removeDeskAddNotificationListenerPromise(operands));
                });
            }
            catch (error) {
                this.notificationApi.clear(notificationId);
                reject(error);
            }
        });
    }
    removeDeskAddNotificationListenerPromise(operands) {
        return new Promise((resolve, reject) => {
            this.notificationApi.addClickEventListener((notificationId, buttonIndex) => {
                if (buttonIndex === 0) {
                    this.removeDeskInternalPromise(operands)
                        .then((result) => {
                        resolve(result);
                    })
                        .catch(error => {
                        reject(error);
                    });
                }
                else {
                    reject(new Error('User cancelled desk removal operation'));
                }
                this.notificationApi.clear(notificationId);
            });
        });
    }
    removeDeskInternalPromise(operands) {
        return new Promise((resolve, reject) => {
            try {
                this.deskApi.removeDesk(operands.deskId, operands.options, () => {
                    if (!this.isTest && chrome.runtime.lastError) {
                        reject(chrome.runtime.lastError);
                        return;
                    }
                    resolve({
                        messageType: ResponseType.OPERATION_SUCCESS,
                        operands: [],
                    });
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    setWindowPropertiesPromise(operands, sender) {
        return new Promise((resolve, reject) => {
            try {
                this.deskApi.setWindowProperties(sender.tab.windowId, operands, () => {
                    if (!this.isTest && chrome.runtime.lastError) {
                        reject(chrome.runtime.lastError);
                        return;
                    }
                    resolve({ messageType: ResponseType.OPERATION_SUCCESS, operands: [] });
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    getActiveDeskPromise() {
        return new Promise((resolve, reject) => {
            try {
                this.deskApi.getActiveDesk((deskId) => {
                    if (!this.isTest && chrome.runtime.lastError) {
                        reject(chrome.runtime.lastError);
                        return;
                    }
                    resolve({
                        messageType: ResponseType.OPERATION_SUCCESS,
                        operands: { 'deskUuid': deskId },
                    });
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    switchDeskPromise(operands) {
        return new Promise((resolve, reject) => {
            try {
                this.deskApi.switchDesk(operands.deskId, () => {
                    if (!this.isTest && chrome.runtime.lastError) {
                        reject(chrome.runtime.lastError);
                        return;
                    }
                    resolve({ messageType: ResponseType.OPERATION_SUCCESS, operands: [] });
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    getDeskByIdPromise(operands) {
        return new Promise((resolve, reject) => {
            try {
                this.deskApi.getDeskById(operands.deskId, (desk) => {
                    if (!this.isTest && chrome.runtime.lastError) {
                        reject(chrome.runtime.lastError);
                        return;
                    }
                    resolve({
                        messageType: ResponseType.OPERATION_SUCCESS,
                        operands: { 'deskUuid': desk.deskUuid, 'deskName': desk.deskName },
                    });
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * This function handles a message and returns a promise containing
     * the result of the operation called for by the RequestType field.
     */
    handleMessage(message, sender) {
        switch (message.messageType) {
            case RequestType.LAUNCH_DESK:
                return this.launchDeskPromise(message.operands);
            case RequestType.REMOVE_DESK:
                return this.removeDeskPromise(message.operands);
            case RequestType.SET_WINDOW_PROPERTIES:
                return this.setWindowPropertiesPromise(message.operands, sender);
            case RequestType.GET_ACTIVE_DESK:
                return this.getActiveDeskPromise();
            case RequestType.SWITCH_DESK:
                return this.switchDeskPromise(message.operands);
            case RequestType.GET_DESK_BY_ID:
                return this.getDeskByIdPromise(message.operands);
            default:
                throw new Error(`message of unknown type: ${message.messageType}!`);
        }
    }
    /**
     * This function register listener for desk events.
     * @param port port for communicating with web page
     */
    //@ts-ignore
    registerEventsListener(port) {
        this.deskApi.addDeskAddedListener((id, fromUndo = false) => {
            const eventType = fromUndo ? EventType.DESK_UNDONE : EventType.DESK_ADDED;
            port.postMessage({ 'eventName': eventType, 'data': { 'deskId': id } });
        });
        this.deskApi.addDeskRemovedListener((id) => {
            port.postMessage({ 'eventName': EventType.DESK_REMOVED, 'data': { 'deskId': id } });
        });
        this.deskApi.addDeskSwitchedListener((a, d) => {
            port.postMessage({
                'eventName': EventType.DESK_SWITCHED,
                'data': { 'activated': a, 'deactivated': d },
            });
        });
    }
}
/**
 * This class manages the single service worker instance and is the point of
 * injections for its dependencies.
 */
export class ServiceWorkerFactory {
    constructor(deskApi, notificationApi, isTest) {
        ServiceWorkerFactory.serviceWorkerInstance =
            new ServiceWorkerImpl(deskApi, notificationApi, isTest);
    }
    get() {
        return new Promise((resolve, reject) => {
            if (ServiceWorkerFactory.serviceWorkerInstance === null) {
                reject(new Error('Service worker factory not constructed!'));
                return;
            }
            resolve(ServiceWorkerFactory.serviceWorkerInstance);
        });
    }
}
