// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FittingType, PdfOcrUserSelection } from './constants.js';
// Handles events specific to the PDF viewer and logs the corresponding metrics.
/**
 * Records when the zoom mode is changed to fit a FittingType.
 * @param fittingType the new FittingType.
 */
export function recordFitTo(fittingType) {
    if (fittingType === FittingType.FIT_TO_PAGE) {
        record(UserAction.FIT_TO_PAGE);
    }
    else if (fittingType === FittingType.FIT_TO_WIDTH) {
        record(UserAction.FIT_TO_WIDTH);
    }
    // There is no user action to do a fit-to-height, this only happens with the
    // the open param "view=FitV".
}
/** Records the given action to chrome.metricsPrivate. */
export function record(action) {
    if (!chrome.metricsPrivate) {
        return;
    }
    if (!actionsMetric) {
        actionsMetric = {
            'metricName': 'PDF.Actions',
            'type': chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LOG,
            'min': 1,
            'max': UserAction.NUMBER_OF_ACTIONS,
            'buckets': UserAction.NUMBER_OF_ACTIONS + 1,
        };
    }
    chrome.metricsPrivate.recordValue(actionsMetric, action);
    if (firstMap.has(action)) {
        const firstAction = firstMap.get(action);
        if (!firstActionRecorded.has(firstAction)) {
            chrome.metricsPrivate.recordValue(actionsMetric, firstAction);
            firstActionRecorded.add(firstAction);
        }
    }
}
/**
 * Records when the user selects to turn on or off PDF OCR.
 * @param userSelection the new UserSelection.
 */
export function recordPdfOcrUserSelection(pdfOcrAlwaysActive) {
    // Need to divide Object.keys().length by 2 to get the enum size due to enum
    // reverse mapping in TypeScript.
    const enumSize = Object.keys(PdfOcrUserSelection).length / 2;
    const enumValue = pdfOcrAlwaysActive ?
        PdfOcrUserSelection.TURN_ON_ALWAYS_FROM_MORE_ACTIONS :
        PdfOcrUserSelection.TURN_OFF_FROM_MORE_ACTIONS;
    recordEnumeration('Accessibility.PdfOcr.UserSelection', enumValue, enumSize);
}
/** Records the given enumeration to chrome.metricsPrivate. */
export function recordEnumeration(enumKey, enumValue, enumSize) {
    if (!chrome.metricsPrivate) {
        return;
    }
    chrome.metricsPrivate.recordEnumerationValue(enumKey, enumValue, enumSize);
}
export function resetForTesting() {
    firstActionRecorded.clear();
    actionsMetric = null;
}
let actionsMetric = null;
const firstActionRecorded = new Set();
// Keep in sync with enums.xml.
// Do not change the numeric values or reuse them since these numbers are
// persisted to logs.
/**
 * User Actions that can be recorded by calling record.
 * The *_FIRST values are recorded automaticlly,
 * eg. record(...ROTATE) will also record ROTATE_FIRST
 * on the first instance.
 */
export var UserAction;
(function (UserAction) {
    // Recorded when the document is first loaded. This event serves as
    // denominator to determine percentages of documents in which an action was
    // taken as well as average number of each action per document.
    UserAction[UserAction["DOCUMENT_OPENED"] = 0] = "DOCUMENT_OPENED";
    // Recorded when the document is rotated clockwise or counter-clockwise.
    UserAction[UserAction["ROTATE_FIRST"] = 1] = "ROTATE_FIRST";
    UserAction[UserAction["ROTATE"] = 2] = "ROTATE";
    UserAction[UserAction["FIT_TO_WIDTH_FIRST"] = 3] = "FIT_TO_WIDTH_FIRST";
    UserAction[UserAction["FIT_TO_WIDTH"] = 4] = "FIT_TO_WIDTH";
    UserAction[UserAction["FIT_TO_PAGE_FIRST"] = 5] = "FIT_TO_PAGE_FIRST";
    UserAction[UserAction["FIT_TO_PAGE"] = 6] = "FIT_TO_PAGE";
    // Recorded when a bookmark is followed.
    UserAction[UserAction["FOLLOW_BOOKMARK_FIRST"] = 9] = "FOLLOW_BOOKMARK_FIRST";
    UserAction[UserAction["FOLLOW_BOOKMARK"] = 10] = "FOLLOW_BOOKMARK";
    // Recorded when the page selection is used to navigate to another page.
    UserAction[UserAction["PAGE_SELECTOR_NAVIGATE_FIRST"] = 11] = "PAGE_SELECTOR_NAVIGATE_FIRST";
    UserAction[UserAction["PAGE_SELECTOR_NAVIGATE"] = 12] = "PAGE_SELECTOR_NAVIGATE";
    // Recorded when the user triggers a save of the document.
    UserAction[UserAction["SAVE_FIRST"] = 13] = "SAVE_FIRST";
    UserAction[UserAction["SAVE"] = 14] = "SAVE";
    // Recorded when the user triggers a save of the document and the document
    // has been modified by annotations.
    UserAction[UserAction["SAVE_WITH_ANNOTATION_FIRST"] = 15] = "SAVE_WITH_ANNOTATION_FIRST";
    UserAction[UserAction["SAVE_WITH_ANNOTATION"] = 16] = "SAVE_WITH_ANNOTATION";
    UserAction[UserAction["PRINT_FIRST"] = 17] = "PRINT_FIRST";
    UserAction[UserAction["PRINT"] = 18] = "PRINT";
    UserAction[UserAction["ENTER_ANNOTATION_MODE_FIRST"] = 19] = "ENTER_ANNOTATION_MODE_FIRST";
    UserAction[UserAction["ENTER_ANNOTATION_MODE"] = 20] = "ENTER_ANNOTATION_MODE";
    UserAction[UserAction["EXIT_ANNOTATION_MODE_FIRST"] = 21] = "EXIT_ANNOTATION_MODE_FIRST";
    UserAction[UserAction["EXIT_ANNOTATION_MODE"] = 22] = "EXIT_ANNOTATION_MODE";
    // Recorded when a pen stroke is made.
    UserAction[UserAction["ANNOTATE_STROKE_TOOL_PEN_FIRST"] = 23] = "ANNOTATE_STROKE_TOOL_PEN_FIRST";
    UserAction[UserAction["ANNOTATE_STROKE_TOOL_PEN"] = 24] = "ANNOTATE_STROKE_TOOL_PEN";
    // Recorded when an eraser stroke is made.
    UserAction[UserAction["ANNOTATE_STROKE_TOOL_ERASER_FIRST"] = 25] = "ANNOTATE_STROKE_TOOL_ERASER_FIRST";
    UserAction[UserAction["ANNOTATE_STROKE_TOOL_ERASER"] = 26] = "ANNOTATE_STROKE_TOOL_ERASER";
    // Recorded when a highlighter stroke is made.
    UserAction[UserAction["ANNOTATE_STROKE_TOOL_HIGHLIGHTER_FIRST"] = 27] = "ANNOTATE_STROKE_TOOL_HIGHLIGHTER_FIRST";
    UserAction[UserAction["ANNOTATE_STROKE_TOOL_HIGHLIGHTER"] = 28] = "ANNOTATE_STROKE_TOOL_HIGHLIGHTER";
    // Recorded when a stroke is made using touch.
    UserAction[UserAction["ANNOTATE_STROKE_DEVICE_TOUCH_FIRST"] = 29] = "ANNOTATE_STROKE_DEVICE_TOUCH_FIRST";
    UserAction[UserAction["ANNOTATE_STROKE_DEVICE_TOUCH"] = 30] = "ANNOTATE_STROKE_DEVICE_TOUCH";
    // Recorded when a stroke is made using mouse.
    UserAction[UserAction["ANNOTATE_STROKE_DEVICE_MOUSE_FIRST"] = 31] = "ANNOTATE_STROKE_DEVICE_MOUSE_FIRST";
    UserAction[UserAction["ANNOTATE_STROKE_DEVICE_MOUSE"] = 32] = "ANNOTATE_STROKE_DEVICE_MOUSE";
    // Recorded when a stroke is made using pen.
    UserAction[UserAction["ANNOTATE_STROKE_DEVICE_PEN_FIRST"] = 33] = "ANNOTATE_STROKE_DEVICE_PEN_FIRST";
    UserAction[UserAction["ANNOTATE_STROKE_DEVICE_PEN"] = 34] = "ANNOTATE_STROKE_DEVICE_PEN";
    // Recorded when two-up view mode is enabled.
    UserAction[UserAction["TWO_UP_VIEW_ENABLE_FIRST"] = 35] = "TWO_UP_VIEW_ENABLE_FIRST";
    UserAction[UserAction["TWO_UP_VIEW_ENABLE"] = 36] = "TWO_UP_VIEW_ENABLE";
    // Recorded when two-up view mode is disabled.
    UserAction[UserAction["TWO_UP_VIEW_DISABLE_FIRST"] = 37] = "TWO_UP_VIEW_DISABLE_FIRST";
    UserAction[UserAction["TWO_UP_VIEW_DISABLE"] = 38] = "TWO_UP_VIEW_DISABLE";
    // Recorded when zoom in button is clicked.
    UserAction[UserAction["ZOOM_IN_FIRST"] = 39] = "ZOOM_IN_FIRST";
    UserAction[UserAction["ZOOM_IN"] = 40] = "ZOOM_IN";
    // Recorded when zoom out button is clicked.
    UserAction[UserAction["ZOOM_OUT_FIRST"] = 41] = "ZOOM_OUT_FIRST";
    UserAction[UserAction["ZOOM_OUT"] = 42] = "ZOOM_OUT";
    // Recorded when the custom zoom input field is modified.
    UserAction[UserAction["ZOOM_CUSTOM_FIRST"] = 43] = "ZOOM_CUSTOM_FIRST";
    UserAction[UserAction["ZOOM_CUSTOM"] = 44] = "ZOOM_CUSTOM";
    // Recorded when a thumbnail is used for navigation.
    UserAction[UserAction["THUMBNAIL_NAVIGATE_FIRST"] = 45] = "THUMBNAIL_NAVIGATE_FIRST";
    UserAction[UserAction["THUMBNAIL_NAVIGATE"] = 46] = "THUMBNAIL_NAVIGATE";
    // Recorded when the user triggers a save of the document and the document
    // has never been modified.
    UserAction[UserAction["SAVE_ORIGINAL_ONLY_FIRST"] = 47] = "SAVE_ORIGINAL_ONLY_FIRST";
    UserAction[UserAction["SAVE_ORIGINAL_ONLY"] = 48] = "SAVE_ORIGINAL_ONLY";
    // Recorded when the user triggers a save of the original document, even
    // though the document has been modified.
    UserAction[UserAction["SAVE_ORIGINAL_FIRST"] = 49] = "SAVE_ORIGINAL_FIRST";
    UserAction[UserAction["SAVE_ORIGINAL"] = 50] = "SAVE_ORIGINAL";
    // Recorded when the user triggers a save of the edited document.
    UserAction[UserAction["SAVE_EDITED_FIRST"] = 51] = "SAVE_EDITED_FIRST";
    UserAction[UserAction["SAVE_EDITED"] = 52] = "SAVE_EDITED";
    // Recorded when the sidenav menu button is clicked.
    UserAction[UserAction["TOGGLE_SIDENAV_FIRST"] = 53] = "TOGGLE_SIDENAV_FIRST";
    UserAction[UserAction["TOGGLE_SIDENAV"] = 54] = "TOGGLE_SIDENAV";
    // Recorded when the thumbnails button in the sidenav is clicked.
    UserAction[UserAction["SELECT_SIDENAV_THUMBNAILS_FIRST"] = 55] = "SELECT_SIDENAV_THUMBNAILS_FIRST";
    UserAction[UserAction["SELECT_SIDENAV_THUMBNAILS"] = 56] = "SELECT_SIDENAV_THUMBNAILS";
    // Recorded when the outline button in the sidenav is clicked.
    UserAction[UserAction["SELECT_SIDENAV_OUTLINE_FIRST"] = 57] = "SELECT_SIDENAV_OUTLINE_FIRST";
    UserAction[UserAction["SELECT_SIDENAV_OUTLINE"] = 58] = "SELECT_SIDENAV_OUTLINE";
    // Recorded when the show/hide annotations overflow menu item is clicked.
    UserAction[UserAction["TOGGLE_DISPLAY_ANNOTATIONS_FIRST"] = 59] = "TOGGLE_DISPLAY_ANNOTATIONS_FIRST";
    UserAction[UserAction["TOGGLE_DISPLAY_ANNOTATIONS"] = 60] = "TOGGLE_DISPLAY_ANNOTATIONS";
    // Recorded when the present menu item is clicked.
    UserAction[UserAction["PRESENT_FIRST"] = 61] = "PRESENT_FIRST";
    UserAction[UserAction["PRESENT"] = 62] = "PRESENT";
    // Recorded when the document properties menu item is clicked.
    UserAction[UserAction["PROPERTIES_FIRST"] = 63] = "PROPERTIES_FIRST";
    UserAction[UserAction["PROPERTIES"] = 64] = "PROPERTIES";
    // Recorded when the attachment button in the sidenav is clicked.
    UserAction[UserAction["SELECT_SIDENAV_ATTACHMENT_FIRST"] = 65] = "SELECT_SIDENAV_ATTACHMENT_FIRST";
    UserAction[UserAction["SELECT_SIDENAV_ATTACHMENT"] = 66] = "SELECT_SIDENAV_ATTACHMENT";
    UserAction[UserAction["NUMBER_OF_ACTIONS"] = 67] = "NUMBER_OF_ACTIONS";
})(UserAction || (UserAction = {}));
function createFirstMap() {
    const entries = Object.entries(UserAction)
        .filter(x => Number.isInteger(x[1]))
        .sort((a, b) => a[1] - b[1]);
    // Exclude the first and last entries (DOCUMENT_OPENED, and NUMBER_OF_ACTIONS)
    // which don't have an equivalent "_FIRST" UserAction.
    const entriesWithFirst = entries.slice(1, entries.length - 1);
    const map = new Map();
    for (let i = 0; i < entriesWithFirst.length; i += 2) {
        map.set(entriesWithFirst[i + 1][1], entriesWithFirst[i][1]);
    }
    return map;
}
// Map from UserAction to the 'FIRST' action. These metrics are recorded
// by PDFMetrics.log the first time each corresponding action occurs.
const firstMap = createFirstMap();
