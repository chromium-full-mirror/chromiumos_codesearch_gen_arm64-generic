// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{mojo}from"//resources/mojo/mojo/public/js/bindings.js";export const IPAddressSpec={$:{}};mojo.internal.Struct(IPAddressSpec.$,"IPAddress",[mojo.internal.StructField("addressBytes",0,0,mojo.internal.Array(mojo.internal.Uint8,false),null,false,0)],[[0,16]]);export class IPAddress{constructor(){this.addressBytes}}