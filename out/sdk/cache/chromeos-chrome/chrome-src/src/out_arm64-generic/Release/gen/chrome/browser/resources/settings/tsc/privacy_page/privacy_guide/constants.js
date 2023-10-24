// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Steps in the privacy guide flow in their order of appearance. The page
 * updates from those steps to show the corresponding page content.
 */
export var PrivacyGuideStep;
(function (PrivacyGuideStep) {
    PrivacyGuideStep["WELCOME"] = "welcome";
    PrivacyGuideStep["MSBB"] = "msbb";
    PrivacyGuideStep["HISTORY_SYNC"] = "historySync";
    PrivacyGuideStep["COOKIES"] = "cookies";
    PrivacyGuideStep["SAFE_BROWSING"] = "safeBrowsing";
    PrivacyGuideStep["SEARCH_SUGGESTIONS"] = "searchSuggestions";
    PrivacyGuideStep["PRELOAD"] = "preload";
    PrivacyGuideStep["COMPLETION"] = "completion";
})(PrivacyGuideStep || (PrivacyGuideStep = {}));
// TODO(crbug.com/1215630): remove this once PrivacyGuide3 is launched.
export var PrivacyGuideStepPg3Off;
(function (PrivacyGuideStepPg3Off) {
    PrivacyGuideStepPg3Off["WELCOME"] = "welcome";
    PrivacyGuideStepPg3Off["MSBB"] = "msbb";
    PrivacyGuideStepPg3Off["HISTORY_SYNC"] = "historySync";
    PrivacyGuideStepPg3Off["SAFE_BROWSING"] = "safeBrowsing";
    PrivacyGuideStepPg3Off["COOKIES"] = "cookies";
    PrivacyGuideStepPg3Off["COMPLETION"] = "completion";
})(PrivacyGuideStepPg3Off || (PrivacyGuideStepPg3Off = {}));
