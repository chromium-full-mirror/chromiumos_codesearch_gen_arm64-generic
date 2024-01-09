// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class InternetDetailDialogBrowserProxyImpl{getDialogArguments(){return chrome.getVariableValue("dialogArguments")}showPortalSignin(guid){chrome.send("showPortalSignin",[guid])}closeDialog(){chrome.send("dialogClose")}static getInstance(){return instance||(instance=new InternetDetailDialogBrowserProxyImpl)}static setInstance(obj){instance=obj}}let instance=null;