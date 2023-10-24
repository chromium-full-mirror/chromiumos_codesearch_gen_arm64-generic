// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{mojo}from"//resources/mojo/mojo/public/js/bindings.js";export const ReadOnlyBufferSpec={$:{}};mojo.internal.Struct(ReadOnlyBufferSpec.$,"ReadOnlyBuffer",[mojo.internal.StructField("buffer",0,0,mojo.internal.Array(mojo.internal.Uint8,false),null,false,0)],[[0,16]]);export class ReadOnlyBuffer{constructor(){this.buffer}}