// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{CommandHandlerFactory,CommandHandlerRemote}from"../browser_command.mojom-webui.js";let instance=null;export class BrowserCommandProxy{static getInstance(){return instance||(instance=new BrowserCommandProxy)}static setInstance(newInstance){instance=newInstance}handler;constructor(){this.handler=new CommandHandlerRemote;const factory=CommandHandlerFactory.getRemote();factory.createBrowserCommandHandler(this.handler.$.bindNewPipeAndPassReceiver())}}