// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{sendWithPromise}from"chrome://resources/js/cr.js";export class ProfileInfoBrowserProxyImpl{getProfileInfo(){return sendWithPromise("getProfileInfo")}getProfileStatsCount(){chrome.send("getProfileStatsCount")}static getInstance(){return instance||(instance=new ProfileInfoBrowserProxyImpl)}static setInstance(obj){instance=obj}}let instance=null;