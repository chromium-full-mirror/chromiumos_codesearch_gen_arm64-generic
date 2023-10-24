// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class LifetimeBrowserProxyImpl{restart(){chrome.send("restart")}relaunch(){chrome.send("relaunch")}signOutAndRestart(){chrome.send("signOutAndRestart")}factoryReset(requestTpmFirmwareUpdate){chrome.send("factoryReset",[requestTpmFirmwareUpdate])}static getInstance(){return instance||(instance=new LifetimeBrowserProxyImpl)}static setInstance(obj){instance=obj}}let instance=null;