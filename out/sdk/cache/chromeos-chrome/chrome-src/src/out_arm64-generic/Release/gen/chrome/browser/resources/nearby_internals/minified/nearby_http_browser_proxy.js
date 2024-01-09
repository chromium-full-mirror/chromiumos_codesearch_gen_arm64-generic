// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class NearbyHttpBrowserProxy{initialize(){chrome.send("initializeHttp")}updateDevice(){chrome.send("updateDevice")}listContactPeople(){chrome.send("listContactPeople")}listPublicCertificates(){chrome.send("listPublicCertificates")}static getInstance(){return instance||(instance=new NearbyHttpBrowserProxy)}}let instance=null;