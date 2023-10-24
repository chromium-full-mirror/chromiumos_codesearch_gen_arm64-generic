// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{mojo}from"//resources/mojo/mojo/public/js/bindings.js";import{FilePath as mojoBase_mojom_FilePath,FilePathSpec as mojoBase_mojom_FilePathSpec}from"./file_path.mojom-webui.js";export const SafeBaseNameSpec={$:{}};mojo.internal.Struct(SafeBaseNameSpec.$,"SafeBaseName",[mojo.internal.StructField("path",0,0,mojoBase_mojom_FilePathSpec.$,null,false,0)],[[0,16]]);export class SafeBaseName{constructor(){this.path}}