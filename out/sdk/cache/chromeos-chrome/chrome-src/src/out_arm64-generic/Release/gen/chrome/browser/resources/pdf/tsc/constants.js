// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export var DisplayAnnotationsAction;
(function (DisplayAnnotationsAction) {
    DisplayAnnotationsAction["DISPLAY_ANNOTATIONS"] = "display-annotations";
    DisplayAnnotationsAction["HIDE_ANNOTATIONS"] = "hide-annotations";
})(DisplayAnnotationsAction || (DisplayAnnotationsAction = {}));
/** Enumeration of page fitting types and bounding box fitting types. */
export var FittingType;
(function (FittingType) {
    FittingType["NONE"] = "none";
    FittingType["FIT_TO_PAGE"] = "fit-to-page";
    FittingType["FIT_TO_WIDTH"] = "fit-to-width";
    FittingType["FIT_TO_HEIGHT"] = "fit-to-height";
    FittingType["FIT_TO_BOUNDING_BOX"] = "fit-to-bounding-box";
    FittingType["FIT_TO_BOUNDING_BOX_WIDTH"] = "fit-to-bounding-box-width";
    FittingType["FIT_TO_BOUNDING_BOX_HEIGHT"] = "fit-to-bounding-box-height";
})(FittingType || (FittingType = {}));
/**
 * Enumeration of save message request types. Must match `SaveRequestType` in
 * pdf/pdf_view_web_plugin.h.
 */
export var SaveRequestType;
(function (SaveRequestType) {
    SaveRequestType[SaveRequestType["ANNOTATION"] = 0] = "ANNOTATION";
    SaveRequestType[SaveRequestType["ORIGINAL"] = 1] = "ORIGINAL";
    SaveRequestType[SaveRequestType["EDITED"] = 2] = "EDITED";
})(SaveRequestType || (SaveRequestType = {}));
/**
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused. This enum is tied directly to a UMA
 * enum, PdfOcrUserSelection, defined in //tools/metrics/histograms/enums.xml
 * and should always reflect it (do not change one without changing the other).
 */
export var PdfOcrUserSelection;
(function (PdfOcrUserSelection) {
    PdfOcrUserSelection[PdfOcrUserSelection["DEPRECATED_TURN_ON_ONCE_FROM_CONTEXT_MENU"] = 0] = "DEPRECATED_TURN_ON_ONCE_FROM_CONTEXT_MENU";
    PdfOcrUserSelection[PdfOcrUserSelection["TURN_ON_ALWAYS_FROM_CONTEXT_MENU"] = 1] = "TURN_ON_ALWAYS_FROM_CONTEXT_MENU";
    PdfOcrUserSelection[PdfOcrUserSelection["TURN_OFF_FROM_CONTEXT_MENU"] = 2] = "TURN_OFF_FROM_CONTEXT_MENU";
    PdfOcrUserSelection[PdfOcrUserSelection["TURN_ON_ALWAYS_FROM_MORE_ACTIONS"] = 3] = "TURN_ON_ALWAYS_FROM_MORE_ACTIONS";
    PdfOcrUserSelection[PdfOcrUserSelection["TURN_OFF_FROM_MORE_ACTIONS"] = 4] = "TURN_OFF_FROM_MORE_ACTIONS";
    PdfOcrUserSelection[PdfOcrUserSelection["TURN_ON_ALWAYS_FROM_SETTINGS"] = 5] = "TURN_ON_ALWAYS_FROM_SETTINGS";
    PdfOcrUserSelection[PdfOcrUserSelection["TURN_OFF_FROM_SETTINGS"] = 6] = "TURN_OFF_FROM_SETTINGS";
})(PdfOcrUserSelection || (PdfOcrUserSelection = {}));
