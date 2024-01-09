// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The Google One banner highlights the benefit for Chromebook
 * users when navigating to Drive.
 */
import { recordUserAction } from '../../../../common/js/metrics.js';
import { RootType, VolumeType } from '../../../../common/js/volume_manager_types.js';
import { EducationalBanner } from './educational_banner.js';
import { getTemplate } from './google_one_offer_banner.html.js';
import { BannerEvent, DismissedForeverEventSource } from './types.js';
/**
 * The custom element tag name.
 */
export const TAG_NAME = 'google-one-offer-banner';
/**
 * User actions of GoogleOneOfferBanner.
 */
var UserActions;
(function (UserActions) {
    UserActions["SHOWN"] = "GoogleOneOffer.Shown";
    UserActions["GET_PERK"] = "GoogleOneOffer.GetPerk";
    UserActions["DISMISS"] = "GoogleOneOffer.Dismiss";
})(UserActions || (UserActions = {}));
/**
 * GoogleOneOfferBanner shows when the user navigates to the Google Drive
 * volume. This banner will be shown instead of DriveWelcomeBanner if
 * GoogleOneOfferFilesBanner flag is on.
 */
export class GoogleOneOfferBanner extends EducationalBanner {
    /**
     * Returns the HTML template for the Google One offer educational banner.
     */
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = getTemplate();
        const fragment = template.content.cloneNode(true);
        return fragment;
    }
    /**
     * Only show the banner when the user has navigated to the Drive volume type.
     */
    allowedVolumes() {
        return [{
                type: VolumeType.DRIVE,
                root: RootType.DRIVE,
            }];
    }
    /**
     * Called when the banner gets connected to the DOM.
     */
    connectedCallback() {
        super.connectedCallback();
        const getPerkButton = this.shadowRoot.querySelector('[slot="extra-button"]');
        if (getPerkButton) {
            getPerkButton.addEventListener('click', (_) => this.onGetPerkButtonClickHandler_());
        }
        this.addEventListener(BannerEvent.BANNER_DISMISSED_FOREVER, (event) => this.onBannerDismissedForever_(event));
    }
    /**
     * Called when the banner gets shown in the UI.
     */
    onShow() {
        recordUserAction(UserActions.SHOWN);
    }
    /**
     * Called when the get perk button gets clicked.
     */
    onGetPerkButtonClickHandler_() {
        recordUserAction(UserActions.GET_PERK);
    }
    /**
     * Called when DismissedForeverEvent gets dispatched for this banner. Note
     * that the event can gets dispatched for dismiss caused by a click of get
     * perk button.
     */
    onBannerDismissedForever_(event) {
        // UserActions.DISMISS should not be recorded for dismiss caused by a click
        // of the get perk button.
        if (event.detail.eventSource === DismissedForeverEventSource.EXTRA_BUTTON) {
            return;
        }
        recordUserAction(UserActions.DISMISS);
    }
}
customElements.define(TAG_NAME, GoogleOneOfferBanner);
