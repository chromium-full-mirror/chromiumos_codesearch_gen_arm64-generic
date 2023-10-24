// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class BrowserProxyImpl{textChanged(newText){chrome.send("textChanged",[newText])}optionSelected(index,resultSetId){chrome.send("optionSelected",[index,resultSetId])}heightChanged(newHeight){chrome.send("heightChanged",[newHeight])}dismiss(){chrome.send("dismiss")}promptCancelled(){chrome.send("compositeCommandCancelled")}static getInstance(){return instance||(instance=new BrowserProxyImpl)}static setInstance(obj){instance=obj}}let instance=null;