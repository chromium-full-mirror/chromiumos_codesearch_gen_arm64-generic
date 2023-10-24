// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { AppNotificationsHandler } from '../../mojom-webui/app_notification_handler.mojom-webui.js';
let appNotificationProvider = null;
export function setAppNotificationProviderForTesting(testProvider) {
    appNotificationProvider = testProvider;
}
export function getAppNotificationProvider() {
    // For testing only.
    if (appNotificationProvider) {
        return appNotificationProvider;
    }
    appNotificationProvider = AppNotificationsHandler.getRemote();
    return appNotificationProvider;
}
