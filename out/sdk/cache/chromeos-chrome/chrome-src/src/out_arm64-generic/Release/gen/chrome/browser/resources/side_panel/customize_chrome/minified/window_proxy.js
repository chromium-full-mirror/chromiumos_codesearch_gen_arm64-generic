// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance=null;export class WindowProxy{static getInstance(){return instance||(instance=new WindowProxy)}static setInstance(newInstance){instance=newInstance}now(){return Date.now()}}