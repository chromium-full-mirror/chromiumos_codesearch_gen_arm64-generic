// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CartHandler } from '../../chrome_cart.mojom-webui.js';
/**
 * @fileoverview This file provides a class that exposes the Mojo handler
 * interface used for sending requests from NTP chrome cart module JS to the
 * browser and receiving the browser response.
 */
let handler = null;
export class ChromeCartProxy {
    static getHandler() {
        return handler || (handler = CartHandler.getRemote());
    }
    static setHandler(newHandler) {
        handler = newHandler;
    }
    constructor() { }
}
