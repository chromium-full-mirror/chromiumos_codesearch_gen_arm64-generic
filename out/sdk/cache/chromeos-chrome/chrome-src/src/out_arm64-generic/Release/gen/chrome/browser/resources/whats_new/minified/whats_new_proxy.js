// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{sendWithPromise}from"chrome://resources/js/cr.js";export class WhatsNewProxyImpl{initialize(isRefresh){return sendWithPromise("initialize",isRefresh)}static getInstance(){return instance||(instance=new WhatsNewProxyImpl)}static setInstance(obj){instance=obj}}let instance=null;