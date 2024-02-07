// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{PageHandler}from"./connectors_internals.mojom-webui.js";export class BrowserProxy{handler;constructor(){this.handler=PageHandler.getRemote()}static getInstance(){return instance||(instance=new BrowserProxy)}static setInstance(obj){instance=obj}}let instance=null;