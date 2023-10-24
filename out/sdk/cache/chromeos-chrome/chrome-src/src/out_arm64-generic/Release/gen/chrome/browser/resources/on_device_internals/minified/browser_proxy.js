// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{OnDeviceModelService}from"./on_device_model.mojom-webui.js";let instance=null;export class BrowserProxy{static getInstance(){if(!instance){instance=new BrowserProxy(OnDeviceModelService.getRemote())}return instance}constructor(handler){this.handler=handler}}