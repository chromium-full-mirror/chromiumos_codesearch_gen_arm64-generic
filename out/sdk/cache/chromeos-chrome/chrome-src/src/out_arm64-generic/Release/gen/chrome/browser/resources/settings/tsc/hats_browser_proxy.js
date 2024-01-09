// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @fileoverview Handles Happiness Tracking Surveys for the settings pages. */
/**
 * All Trust & Safety based interactions which may result in a HaTS survey.
 *
 * Must be kept in sync with the enum of the same name in hats_handler.h.
 */
export var TrustSafetyInteraction;
(function (TrustSafetyInteraction) {
    TrustSafetyInteraction[TrustSafetyInteraction["RAN_SAFETY_CHECK"] = 0] = "RAN_SAFETY_CHECK";
    TrustSafetyInteraction[TrustSafetyInteraction["USED_PRIVACY_CARD"] = 1] = "USED_PRIVACY_CARD";
    // OPENED_PRIVACY_SANDBOX = 2, // DEPRECATED
    TrustSafetyInteraction[TrustSafetyInteraction["OPENED_PASSWORD_MANAGER"] = 3] = "OPENED_PASSWORD_MANAGER";
    TrustSafetyInteraction[TrustSafetyInteraction["COMPLETED_PRIVACY_GUIDE"] = 4] = "COMPLETED_PRIVACY_GUIDE";
    TrustSafetyInteraction[TrustSafetyInteraction["RAN_PASSWORD_CHECK"] = 5] = "RAN_PASSWORD_CHECK";
    TrustSafetyInteraction[TrustSafetyInteraction["OPENED_AD_PRIVACY"] = 6] = "OPENED_AD_PRIVACY";
    TrustSafetyInteraction[TrustSafetyInteraction["OPENED_TOPICS_SUBPAGE"] = 7] = "OPENED_TOPICS_SUBPAGE";
    TrustSafetyInteraction[TrustSafetyInteraction["OPENED_FLEDGE_SUBPAGE"] = 8] = "OPENED_FLEDGE_SUBPAGE";
    TrustSafetyInteraction[TrustSafetyInteraction["OPENED_AD_MEASUREMENT_SUBPAGE"] = 9] = "OPENED_AD_MEASUREMENT_SUBPAGE";
    // 
})(TrustSafetyInteraction || (TrustSafetyInteraction = {}));
/**
 * All interactions from the security settings page which may result in a HaTS
 * survey. Must be kept in sync with the enum of the same name located in:
 * chrome/browser/ui/webui/settings/hats_handler.h
 */
export var SecurityPageInteraction;
(function (SecurityPageInteraction) {
    SecurityPageInteraction[SecurityPageInteraction["RADIO_BUTTON_ENHANCED_CLICK"] = 0] = "RADIO_BUTTON_ENHANCED_CLICK";
    SecurityPageInteraction[SecurityPageInteraction["RADIO_BUTTON_STANDARD_CLICK"] = 1] = "RADIO_BUTTON_STANDARD_CLICK";
    SecurityPageInteraction[SecurityPageInteraction["RADIO_BUTTON_DISABLE_CLICK"] = 2] = "RADIO_BUTTON_DISABLE_CLICK";
    SecurityPageInteraction[SecurityPageInteraction["EXPAND_BUTTON_ENHANCED_CLICK"] = 3] = "EXPAND_BUTTON_ENHANCED_CLICK";
    SecurityPageInteraction[SecurityPageInteraction["EXPAND_BUTTON_STANDARD_CLICK"] = 4] = "EXPAND_BUTTON_STANDARD_CLICK";
    SecurityPageInteraction[SecurityPageInteraction["NO_INTERACTION"] = 5] = "NO_INTERACTION";
})(SecurityPageInteraction || (SecurityPageInteraction = {}));
/**
 * Enumeration of all safe browsing modes. Must be kept in sync with the enum
 * of the same name located in:
 * chrome/browser/safe_browsing/generated_safe_browsing_pref.h
 */
export var SafeBrowsingSetting;
(function (SafeBrowsingSetting) {
    SafeBrowsingSetting[SafeBrowsingSetting["ENHANCED"] = 0] = "ENHANCED";
    SafeBrowsingSetting[SafeBrowsingSetting["STANDARD"] = 1] = "STANDARD";
    SafeBrowsingSetting[SafeBrowsingSetting["DISABLED"] = 2] = "DISABLED";
})(SafeBrowsingSetting || (SafeBrowsingSetting = {}));
export class HatsBrowserProxyImpl {
    trustSafetyInteractionOccurred(interaction) {
        chrome.send('trustSafetyInteractionOccurred', [interaction]);
    }
    securityPageHatsRequest(securityPageInteraction, safeBrowsingSetting, totalTimeOnPage) {
        chrome.send('securityPageHatsRequest', [securityPageInteraction, safeBrowsingSetting, totalTimeOnPage]);
    }
    now() {
        return window.performance.now();
    }
    static getInstance() {
        return instance || (instance = new HatsBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
