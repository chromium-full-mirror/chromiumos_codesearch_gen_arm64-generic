// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class MostVisitedWindowProxy{matchMedia(query){return window.matchMedia(query)}now(){return Date.now()}static getInstance(){return instance||(instance=new MostVisitedWindowProxy)}static setInstance(obj){instance=obj}}let instance=null;