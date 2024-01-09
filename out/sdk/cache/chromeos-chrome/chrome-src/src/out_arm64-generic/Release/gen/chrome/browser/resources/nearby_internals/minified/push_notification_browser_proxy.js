// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance=null;export class PushNotificationBrowserProxy{initialize(){chrome.send("InitializePushNotificationHandler")}sendAddPushNotificationClient(){chrome.send("AddPushNotificationClient")}static getInstance(){return instance||(instance=new PushNotificationBrowserProxy)}}