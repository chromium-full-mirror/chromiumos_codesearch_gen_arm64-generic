// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class NearbyContactBrowserProxy{initialize(){chrome.send("initializeContacts")}downloadContacts(){chrome.send("downloadContacts")}static getInstance(){return instance||(instance=new NearbyContactBrowserProxy)}}let instance=null;