// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Constants used in cellular setup flow.
 */
export var CellularSetupPageName;
(function (CellularSetupPageName) {
    CellularSetupPageName["ESIM_FLOW_UI"] = "esim-flow-ui";
    CellularSetupPageName["PSIM_FLOW_UI"] = "psim-flow-ui";
})(CellularSetupPageName || (CellularSetupPageName = {}));
export var ButtonState;
(function (ButtonState) {
    ButtonState[ButtonState["ENABLED"] = 1] = "ENABLED";
    ButtonState[ButtonState["DISABLED"] = 2] = "DISABLED";
    ButtonState[ButtonState["HIDDEN"] = 3] = "HIDDEN";
})(ButtonState || (ButtonState = {}));
export var Button;
(function (Button) {
    Button[Button["BACKWARD"] = 1] = "BACKWARD";
    Button[Button["CANCEL"] = 2] = "CANCEL";
    Button[Button["FORWARD"] = 3] = "FORWARD";
})(Button || (Button = {}));
