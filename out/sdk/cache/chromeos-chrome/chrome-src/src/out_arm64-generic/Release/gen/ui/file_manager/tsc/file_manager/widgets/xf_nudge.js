// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getTemplate } from './xf_nudge.html.js';
/**
 * The diameter of the dot that appears beside the anchor. Keep this up to date
 * with the width of the dot in the `xf_nudge.html` file.
 */
const DOT_DIAMETER_PX = 8;
/**
 * The default indent that the dot is from the side of the bubble.
 */
const DEFAULT_DOT_INDENT_PX = 32;
/**
 * An XfNudge represents an element on the screen to draw the user's
 * attention to a specific portion of the screen. This can be a new feature, the
 * location of a file that has just changed etc.
 */
export class XfNudge extends HTMLElement {
    constructor() {
        super();
        /**
         * The anchor element that the nudge should be highlighting.
         */
        this.anchor_ = undefined;
        /**
         * The direction of the nudge relative to the anchor.
         */
        this.direction_ = "top-startward" /* NudgeDirection.TOP_STARTWARD */;
        /**
         * The content of the nudge.
         */
        this.content_ = '';
        /**
         * Text used in the dismiss button. When empty the button is hidden.
         */
        this.dismissText_ = '';
        /**
         * How many times the nudge has been repositioned, this is reset when the
         * nudge is hidden.
         */
        this.repositions_ = 0;
        const template = document.createElement('template');
        template.innerHTML = getTemplate();
        const fragment = template.content.cloneNode(true);
        this.attachShadow({ mode: 'open' }).appendChild(fragment);
        this.bubble_ = this.shadowRoot.getElementById('bubble');
        this.contentSlot_ = this.shadowRoot.getElementById('text');
        this.dismissButton_ = this.shadowRoot.getElementById('dismiss');
        this.dismissButton_.addEventListener('click', this.dismissClicked_.bind(this));
        this.dot_ = this.shadowRoot.getElementById('dot');
    }
    static get events() {
        return {
            DISMISS: 'dismiss',
        };
    }
    dismissClicked_() {
        this.dispatchEvent(new CustomEvent(XfNudge.events.DISMISS, { bubbles: true, composed: true }));
    }
    /**
     * Show the nudge attached to a provided anchor. Note: This class should not
     * handle any logic on _when_ a nudge should be shown. This should be
     * completely handled by the NudgeManager.
     */
    show() {
        if (this.content_ === '') {
            throw new Error('Attempted to show <xf-nudge> without a message');
        }
        if (!this.anchor_) {
            throw new Error('Attempted to show <xf-nudge> without an anchor');
        }
        this.dismissButton_.innerText = this.dismissText_;
        this.dismissButton_.toggleAttribute('hidden', this.dismissText_ === '');
        this.contentSlot_.innerText = this.content_;
        this.reposition();
    }
    /**
     * Hide the nudge. Note: This class should not handle any logic on _when_ a
     * nudge should be hidden. This should be completely handled by the
     * NudgeManager.
     */
    hide() {
        // Rather than removing the nudge elements from the DOM, render them
        // off-screen so that they change size correctly when the nudge contents are
        // updated. In doing this, they will be the correct size before attempting
        // to position the nudge the next time it is shown.
        this.dot_.style.left = `-${DOT_DIAMETER_PX}px`;
        this.bubble_.style.left = '-296px';
        this.repositions_ = 0;
    }
    /**
     * Repositions the nudge component to be anchored to the anchor.
     */
    reposition() {
        if (!this.anchor_) {
            throw new Error('Attempted to position <xf-nudge> without an anchor');
        }
        // Reset CSS values which might not get set.
        this.bubble_.style.left = 'unset';
        this.bubble_.style.right = 'unset';
        this.bubble_.style.top = 'unset';
        this.bubble_.style.bottom = 'unset';
        const anchorRect = this.anchor_.getBoundingClientRect();
        this.positionDot_(anchorRect);
        if (this.positionedVertically_()) {
            this.positionBubbleVertical_(anchorRect);
        }
        else {
            this.positionBubbleHorizontal_(anchorRect);
        }
        this.repositions_++;
    }
    /**
     * Sets the anchor that the nudge is tied to. This element will serve as the
     * point where the nudge will position itself relative to.
     */
    set anchor(anchor) {
        this.anchor_ = anchor;
    }
    /**
     * Get the anchor this nudge is highlighting.
     */
    get anchor() {
        return this.anchor_;
    }
    /**
     * Sets the content that the nudge will show.
     */
    set content(content) {
        this.content_ = content;
    }
    /**
     * Returns the content that the nudge will display.
     */
    get content() {
        return this.content_;
    }
    /**
     * Sets the text for the dismiss button, when empty hides the button.
     */
    set dismissText(text) {
        this.dismissText_ = text;
    }
    get dismissText() {
        return this.dismissText_;
    }
    /**
     * Sets the direction of the nudge to appear relative to the anchor point.
     */
    set direction(direction) {
        this.direction_ = direction;
    }
    /**
     * Helper method that exposes the bounding DOMRect of the dot to introspect in
     * tests.
     */
    get dotRect() {
        return this.dot_.getBoundingClientRect();
    }
    /**
     * Helper method that exposes the bounding DOMRect of the bubble to introspect
     * in tests.
     */
    get bubbleRect() {
        return this.bubble_.getBoundingClientRect();
    }
    /**
     * Returns the number of repositions for the nudge that is currently showing.
     * This is reset when the nudge is hidden.
     */
    get repositions() {
        return this.repositions_;
    }
    /**
     * Position the dot of the nudge to be at the correct position to the anchored
     * element.
     */
    positionDot_(anchorRect) {
        let dotTop = anchorRect.top + anchorRect.height / 2 - DOT_DIAMETER_PX / 2;
        let dotLeft = anchorRect.left + anchorRect.width / 2 - DOT_DIAMETER_PX / 2;
        if (this.positionedTop_()) {
            dotTop = anchorRect.top - DOT_DIAMETER_PX - 4;
        }
        if (this.positionedBottom_()) {
            dotTop = anchorRect.bottom + 4;
        }
        if (this.positionedLeft()) {
            dotLeft = anchorRect.left - DOT_DIAMETER_PX - 4;
        }
        if (this.positionedRight_()) {
            dotLeft = anchorRect.right + 4;
        }
        this.dot_.style.top = `${dotTop}px`;
        this.dot_.style.left = `${dotLeft}px`;
    }
    /**
     * Position the bubble that has the nudge contents vertically above or below
     * the dot.
     */
    positionBubbleVertical_(anchorRect) {
        // Calculate the bubble's vertical position.
        if (this.positionedTop_()) {
            const bubbleBottom = anchorRect.top - DOT_DIAMETER_PX - 2 * 4;
            // Fixed position bottom refers to how far the bottom edge of the element
            // should be from the bottom edge of the window, so transform our value to
            // account for this difference in semantics.
            this.bubble_.style.bottom = `${window.innerHeight - bubbleBottom}px`;
        }
        else {
            this.bubble_.style.top =
                `${anchorRect.bottom + DOT_DIAMETER_PX + 2 * 4}px`;
        }
        // Calculate the bubble's horizontal position.
        if (this.growsLeft_()) {
            // E.g.,
            //  _________________
            //  |  Nudge        |
            //  |_______________|
            //              .
            //             []
            // Calculate the ideal right edge position for the bubble to have it
            // appear towards the left of the dot.
            const dotRightEdge = anchorRect.left + anchorRect.width / 2 + DOT_DIAMETER_PX / 2 + 4;
            // The bubble's right edge should be `DEFAULT_DOT_INDENT_PX` further right
            // than the dot's right edge.
            const idealBubbleRight = dotRightEdge + DEFAULT_DOT_INDENT_PX;
            // The bubble should not be positioned so far right that it goes
            // off-screen.
            const maxBubbleRight = window.innerWidth;
            // Fixed position right refers to how far the right edge of the element
            // should be from the right edge of the window, so transform our value to
            // account for this difference in semantics.
            this.bubble_.style.right =
                `${window.innerWidth - Math.min(idealBubbleRight, maxBubbleRight)}px`;
        }
        else {
            // E.g.,
            //  _________________
            //  |  Nudge        |
            //  |_______________|
            //      .
            //     []
            // Calculate the ideal left offset for the bubble to have it appear
            // towards the right of the dot.
            const dotLeftEdge = anchorRect.left + anchorRect.width / 2 - DOT_DIAMETER_PX / 2 - 4;
            const idealBubbleLeft = dotLeftEdge - DEFAULT_DOT_INDENT_PX;
            this.bubble_.style.left = `${Math.max(idealBubbleLeft, 0)}px`;
        }
    }
    /**
     * Position the bubble that has the nudge contents horizontally to the left or
     * right of the dot.
     */
    positionBubbleHorizontal_(anchorRect) {
        // Calculate the bubble's vertical position.
        if (this.growsUpward_()) {
            // We can't guarantee the height of the anchor, so position the bottom of
            // the bubble 10px below the dot.
            const dotBottom = anchorRect.top + anchorRect.height / 2 + DOT_DIAMETER_PX / 2 + 4;
            const bubbleBottom = dotBottom + 10;
            // Fixed position bottom refers to how far the bottom edge of the element
            // should be from the bottom edge of the window, so transform our value to
            // account for this difference in semantics.
            this.bubble_.style.bottom = `${window.innerHeight - bubbleBottom}px`;
        }
        else {
            // We can't guarantee the height of the anchor, so position the top of the
            // bubble 10px above the dot.
            const dotTop = anchorRect.top + anchorRect.height / 2 - DOT_DIAMETER_PX / 2 - 4;
            const bubbleTop = dotTop - 10;
            this.bubble_.style.top = `${bubbleTop}px`;
        }
        // Calculate the bubble's horizontal position.
        if (this.positionedLeft()) {
            // E.g.,
            //  _________________
            //  |  Nudge        |
            //  |_______________| . []
            const bubbleRight = anchorRect.left - DOT_DIAMETER_PX - 2 * 4;
            // Fixed position right refers to how far the right edge of the element
            // should be from the right edge of the window, so transform our value to
            // account for this difference in semantics.
            this.bubble_.style.right = `${window.innerWidth - bubbleRight}px`;
        }
        else {
            // E.g.,
            //      _________________
            //      |  Nudge        |
            // [] . |_______________|
            const bubbleLeft = anchorRect.right + DOT_DIAMETER_PX + 2 * 4;
            this.bubble_.style.left = `${bubbleLeft}px`;
        }
    }
    /**
     * For the remainder methods, look at the NudgeDirection to understand what
     * they mean.
     */
    positionedTop_() {
        return this.direction_ === "top-startward" /* NudgeDirection.TOP_STARTWARD */ ||
            this.direction_ === "top-endward" /* NudgeDirection.TOP_ENDWARD */;
    }
    positionedBottom_() {
        return this.direction_ === "bottom-startward" /* NudgeDirection.BOTTOM_STARTWARD */ ||
            this.direction_ === "bottom-endward" /* NudgeDirection.BOTTOM_ENDWARD */;
    }
    positionedLeading_() {
        return this.direction_ === "leading-upward" /* NudgeDirection.LEADING_UPWARD */ ||
            this.direction_ === "leading-downward" /* NudgeDirection.LEADING_DOWNWARD */;
    }
    positionedTrailing_() {
        return this.direction_ === "trailing-upward" /* NudgeDirection.TRAILING_UPWARD */ ||
            this.direction_ === "trailing-downward" /* NudgeDirection.TRAILING_DOWNWARD */;
    }
    positionedLeft() {
        if (document.dir === 'rtl') {
            return this.positionedTrailing_();
        }
        else {
            return this.positionedLeading_();
        }
    }
    positionedRight_() {
        if (document.dir === 'rtl') {
            return this.positionedLeading_();
        }
        else {
            return this.positionedTrailing_();
        }
    }
    positionedVertically_() {
        return this.positionedTop_() || this.positionedBottom_();
    }
    growsUpward_() {
        return this.direction_ === "leading-upward" /* NudgeDirection.LEADING_UPWARD */ ||
            this.direction_ === "trailing-upward" /* NudgeDirection.TRAILING_UPWARD */;
    }
    growsLeft_() {
        if (document.dir === 'rtl') {
            return this.direction_ === "top-endward" /* NudgeDirection.TOP_ENDWARD */ ||
                this.direction_ === "bottom-endward" /* NudgeDirection.BOTTOM_ENDWARD */;
        }
        else {
            return this.direction_ === "top-startward" /* NudgeDirection.TOP_STARTWARD */ ||
                this.direction_ === "bottom-startward" /* NudgeDirection.BOTTOM_STARTWARD */;
        }
    }
}
customElements.define('xf-nudge', XfNudge);
