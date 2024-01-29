// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A polymer component that displays the feedback buttons.
 */
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { getTemplate } from './sea_pen_feedback_element.html.js';
import { WithSeaPenStore } from './sea_pen_store.js';
export var FeedbackOption;
(function (FeedbackOption) {
    FeedbackOption[FeedbackOption["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    FeedbackOption[FeedbackOption["THUMBS_UP"] = 1] = "THUMBS_UP";
    FeedbackOption[FeedbackOption["THUMBS_DOWN"] = 2] = "THUMBS_DOWN";
})(FeedbackOption || (FeedbackOption = {}));
export class SeaPenFeedbackElement extends WithSeaPenStore {
    static get is() {
        return 'sea-pen-feedback';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            selectedFeedbackOption: {
                type: String,
                value: FeedbackOption.UNSPECIFIED,
            },
        };
    }
    notifySelectedOptionChanged_(isThumbsUp) {
        this.dispatchEvent(new CustomEvent('selected-feedback-changed', {
            bubbles: true,
            composed: true,
            detail: { isThumbsUp },
        }));
    }
    onClickThumbsUp_() {
        this.selectedFeedbackOption =
            this.selectedFeedbackOption === FeedbackOption.THUMBS_UP ?
                FeedbackOption.UNSPECIFIED :
                FeedbackOption.THUMBS_UP;
        if (this.selectedFeedbackOption === FeedbackOption.THUMBS_UP) {
            this.notifySelectedOptionChanged_(/*isThumbsUp=*/ true);
        }
    }
    onClickThumbsDown_() {
        this.selectedFeedbackOption =
            this.selectedFeedbackOption === FeedbackOption.THUMBS_DOWN ?
                FeedbackOption.UNSPECIFIED :
                FeedbackOption.THUMBS_DOWN;
        if (this.selectedFeedbackOption === FeedbackOption.THUMBS_DOWN) {
            this.notifySelectedOptionChanged_(/*isThumbsUp=*/ false);
        }
    }
    getThumbsUpIcon_() {
        return this.selectedFeedbackOption === FeedbackOption.THUMBS_UP ?
            'cr:thumbs-up-filled' :
            'cr:thumbs-up';
    }
    getThumbsDownIcon_() {
        return this.selectedFeedbackOption === FeedbackOption.THUMBS_DOWN ?
            'cr:thumbs-down-filled' :
            'cr:thumbs-down';
    }
}
customElements.define(SeaPenFeedbackElement.is, SeaPenFeedbackElement);
