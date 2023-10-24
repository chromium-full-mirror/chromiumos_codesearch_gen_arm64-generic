// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { RecipesHandler } from '../../recipes.mojom-webui.js';
/**
 * @fileoverview This file provides a class that exposes the Mojo handler
 * interface used for retrieving a shopping task for a task module.
 */
let handler = null;
export class RecipesHandlerProxy {
    static getHandler() {
        return handler || (handler = RecipesHandler.getRemote());
    }
    static setHandler(newHandler) {
        handler = newHandler;
    }
    constructor() { }
}
