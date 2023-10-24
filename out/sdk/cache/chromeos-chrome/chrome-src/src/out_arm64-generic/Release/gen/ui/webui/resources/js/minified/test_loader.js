// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{loadMochaAdapter,loadTestModule}from"./test_loader_util.js";async function main(){const mochaAdapterLoaded=await loadMochaAdapter();if(!mochaAdapterLoaded){throw new Error("Failed to load Mocha adapter file.")}const testModuleLoaded=await loadTestModule();if(!testModuleLoaded){throw new Error("Failed to load test module")}}main();