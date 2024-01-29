// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { KeyCodeData } from '/common/key_code.js';
export var SelectToSpeakConstants;
(function (SelectToSpeakConstants) {
    SelectToSpeakConstants.SEARCH_KEY_CODE = KeyCodeData.SEARCH.code;
    SelectToSpeakConstants.CONTROL_KEY_CODE = KeyCodeData.CONTROL.code;
    SelectToSpeakConstants.READ_SELECTION_KEY_CODE = KeyCodeData.S.code;
    /**
     * How often (in ms) to check that the currently spoken node is
     * still valid and in the same position. Decreasing this will make
     * STS seem more reactive to page changes but decreasing it too much
     * could cause performance issues.
     */
    SelectToSpeakConstants.NODE_STATE_TEST_INTERVAL_MS = 500;
    /**
     * Max size in pixels for a region selection to be considered a paragraph
     * selection vs a selection of specific nodes. Generally paragraph
     * selection is a single click (size 0), though allow for a little
     * jitter.
     */
    SelectToSpeakConstants.PARAGRAPH_SELECTION_MAX_SIZE = 5;
})(SelectToSpeakConstants || (SelectToSpeakConstants = {}));
