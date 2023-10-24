// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{mojo}from"//resources/mojo/mojo/public/js/bindings.js";export const UnguessableTokenSpec={$:{}};mojo.internal.Struct(UnguessableTokenSpec.$,"UnguessableToken",[mojo.internal.StructField("high",0,0,mojo.internal.Uint64,BigInt(0),false,0),mojo.internal.StructField("low",8,0,mojo.internal.Uint64,BigInt(0),false,0)],[[0,24]]);export class UnguessableToken{constructor(){this.high;this.low}}