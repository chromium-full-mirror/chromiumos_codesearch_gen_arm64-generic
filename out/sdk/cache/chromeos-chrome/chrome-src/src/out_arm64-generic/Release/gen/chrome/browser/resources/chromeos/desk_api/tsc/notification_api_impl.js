// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Provides the implementation for Notification API.
 */
export class NotificationApiImpl {
    create(notificationId, options, callback) {
        if (typeof chrome.notifications.create !== 'function') {
            throw new Error('Create notification is not supported ');
        }
        const notificationOptions = {
            title: options.title,
            message: options.message,
            iconUrl: options.iconUrl,
            type: 'basic',
            buttons: options.buttons,
        };
        chrome.notifications.create(notificationId, notificationOptions, callback);
    }
    addClickEventListener(callback) {
        if (typeof chrome.notifications.onButtonClicked.addListener !==
            'function') {
            throw new Error('Add notification button listener is not supported ');
        }
        chrome.notifications.onButtonClicked.addListener(callback);
    }
    clear(notificationId) {
        if (typeof chrome.notifications.onButtonClicked.addListener !==
            'function') {
            throw new Error('Clear notification is not supported ');
        }
        chrome.notifications.clear(notificationId);
    }
}
