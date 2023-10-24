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
    TrustSafetyInteraction[TrustSafetyInteraction["OPENED_PRIVACY_SANDBOX"] = 2] = "OPENED_PRIVACY_SANDBOX";
    TrustSafetyInteraction[TrustSafetyInteraction["OPENED_PASSWORD_MANAGER"] = 3] = "OPENED_PASSWORD_MANAGER";
    TrustSafetyInteraction[TrustSafetyInteraction["COMPLETED_PRIVACY_GUIDE"] = 4] = "COMPLETED_PRIVACY_GUIDE";
    TrustSafetyInteraction[TrustSafetyInteraction["RAN_PASSWORD_CHECK"] = 5] = "RAN_PASSWORD_CHECK";
    TrustSafetyInteraction[TrustSafetyInteraction["OPENED_AD_PRIVACY"] = 6] = "OPENED_AD_PRIVACY";
    TrustSafetyInteraction[TrustSafetyInteraction["OPENED_TOPICS_SUBPAGE"] = 7] = "OPENED_TOPICS_SUBPAGE";
    TrustSafetyInteraction[TrustSafetyInteraction["OPENED_FLEDGE_SUBPAGE"] = 8] = "OPENED_FLEDGE_SUBPAGE";
    TrustSafetyInteraction[TrustSafetyInteraction["OPENED_AD_MEASUREMENT_SUBPAGE"] = 9] = "OPENED_AD_MEASUREMENT_SUBPAGE";
})(TrustSafetyInteraction || (TrustSafetyInteraction = {}));
export class HatsBrowserProxyImpl {
    trustSafetyInteractionOccurred(interaction) {
        chrome.send('trustSafetyInteractionOccurred', [interaction]);
    }
    static getInstance() {
        return instance || (instance = new HatsBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
