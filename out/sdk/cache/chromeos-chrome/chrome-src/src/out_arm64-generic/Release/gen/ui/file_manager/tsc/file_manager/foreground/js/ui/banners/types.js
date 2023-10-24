// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../../../../common/js/volume_manager_types.js';
/**
 * Events dispatched by concrete banners.
 */
export var BannerEvent;
(function (BannerEvent) {
    BannerEvent["BANNER_DISMISSED"] = "banner-dismissed";
    BannerEvent["BANNER_DISMISSED_FOREVER"] = "banner-dismissed-forever";
})(BannerEvent || (BannerEvent = {}));
/**
 * Event source for BANNER_DISMISSED_FOREVER event.
 */
export var DismissedForeverEventSource;
(function (DismissedForeverEventSource) {
    DismissedForeverEventSource["EXTRA_BUTTON"] = "extra-button";
    DismissedForeverEventSource["DEFAULT_DISMISS_BUTTON"] = "default-dismiss-button";
    DismissedForeverEventSource["OVERRIDEN_DISMISS_BUTTON"] = "overriden-dismiss-button";
})(DismissedForeverEventSource || (DismissedForeverEventSource = {}));
/**
 * Helper const to define infinite time showing.
 */
export const BANNER_INFINITE_TIME = 0;
export class Banner extends HTMLElement {
}
