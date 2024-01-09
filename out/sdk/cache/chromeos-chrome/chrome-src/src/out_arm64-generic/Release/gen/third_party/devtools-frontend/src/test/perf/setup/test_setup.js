"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const report_js_1 = require("../report/report.js");
after(() => {
    (0, report_js_1.writeReport)();
    (0, report_js_1.clearResults)();
});
//# sourceMappingURL=test_setup.js.map