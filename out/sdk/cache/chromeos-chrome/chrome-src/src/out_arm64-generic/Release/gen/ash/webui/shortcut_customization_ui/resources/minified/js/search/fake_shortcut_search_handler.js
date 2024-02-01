// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{FakeMethodResolver}from"chrome://resources/ash/common/fake_method_resolver.js";export class FakeShortcutSearchHandler{constructor(){this.methods=new FakeMethodResolver;this.methods.register("search")}search(_query,_maxNumResult){return this.methods.resolveMethod("search")}addSearchResultsAvailabilityObserver(_observer){}setFakeSearchResult(results){this.methods.setResult("search",{results:results})}}