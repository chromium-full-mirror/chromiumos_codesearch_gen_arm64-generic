// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{CartHandler}from"./chrome_cart.mojom-webui.js";let handler=null;export class ChromeCartProxy{static getHandler(){return handler||(handler=CartHandler.getRemote())}static setHandler(newHandler){handler=newHandler}constructor(){}}