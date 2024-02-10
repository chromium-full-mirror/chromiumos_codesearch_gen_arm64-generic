// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{mojo}from"//resources/mojo/mojo/public/js/bindings.js";export const ReadOnlyFileSpec={$:{}};mojo.internal.Struct(ReadOnlyFileSpec.$,"ReadOnlyFile",[mojo.internal.StructField("fd",0,0,mojo.internal.Handle,null,false,0),mojo.internal.StructField("async",4,0,mojo.internal.Bool,false,false,0)],[[0,16]]);export class ReadOnlyFile{constructor(){this.fd;this.async}}