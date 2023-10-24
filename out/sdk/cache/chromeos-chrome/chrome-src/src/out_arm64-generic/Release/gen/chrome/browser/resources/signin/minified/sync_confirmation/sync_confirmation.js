/* Copyright 2017 The Chromium Authors
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */
import{SyncConfirmationBrowserProxyImpl}from"./sync_confirmation_browser_proxy.js";function initialize(){const syncConfirmationBrowserProxy=SyncConfirmationBrowserProxyImpl.getInstance();syncConfirmationBrowserProxy.initializedWithSize([document.body.offsetHeight]);document.body.style.width="auto"}document.addEventListener("DOMContentLoaded",initialize);