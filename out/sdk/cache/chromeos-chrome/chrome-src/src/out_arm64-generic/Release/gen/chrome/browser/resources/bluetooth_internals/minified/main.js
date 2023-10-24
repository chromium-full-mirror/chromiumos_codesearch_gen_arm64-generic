// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{checkSystemPermissions,initializeViews}from"./bluetooth_internals.js";import{BluetoothInternalsHandler}from"./bluetooth_internals.mojom-webui.js";document.addEventListener("DOMContentLoaded",(async()=>{const params=new URLSearchParams(window.location.search);const isTest=params.has("isTest");if(!isTest){checkSystemPermissions(BluetoothInternalsHandler.getRemote(),initializeViews)}}));