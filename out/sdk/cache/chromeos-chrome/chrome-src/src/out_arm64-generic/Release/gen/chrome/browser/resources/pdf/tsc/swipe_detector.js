// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * The longest period of time in milliseconds for a horizontal touch movement to
 * be considered as a swipe.
 */
const SWIPE_TIMER_INTERVAL_MS = 200;
/* The minimum travel distance on the x axis for a swipe. */
const SWIPE_X_DIST_MIN = 150;
/* The maximum travel distance on the y axis for a swipe. */
const SWIPE_Y_DIST_MAX = 100;
/** Enumeration of swipe directions. */
export var SwipeDirection;
(function (SwipeDirection) {
    SwipeDirection[SwipeDirection["RIGHT_TO_LEFT"] = 0] = "RIGHT_TO_LEFT";
    SwipeDirection[SwipeDirection["LEFT_TO_RIGHT"] = 1] = "LEFT_TO_RIGHT";
})(SwipeDirection || (SwipeDirection = {}));
// A class that listens for touch events and produces events when these
// touches form swipe gestures.
export class SwipeDetector {
    /** @param element The element to monitor for touch gestures. */
    constructor(element) {
        this.isPresentationMode_ = false;
        this.swipeStartEvent_ = null;
        this.elapsedTimeForTesting_ = null;
        this.eventTarget_ = new EventTarget();
        this.element_ = element;
        this.element_.addEventListener('touchstart', this.onTouchStart_.bind(this), { passive: true });
        this.element_.addEventListener('touchend', this.onTouchEnd_.bind(this), { passive: true });
        this.element_.addEventListener('touchcancel', () => this.onTouchCancel_(), { passive: true });
    }
    /**
     * Public for tests. Allow manually setting the elapsed time for a swipe
     * action.
     */
    setElapsedTimerForTesting(time) {
        this.elapsedTimeForTesting_ = time;
    }
    setPresentationMode(enabled) {
        this.isPresentationMode_ = enabled;
    }
    getPresentationModeForTesting() {
        return this.isPresentationMode_;
    }
    getEventTarget() {
        return this.eventTarget_;
    }
    /**
     * Call the relevant listeners with the given swipe |direction|.
     * @param direction The direction of swipe action.
     */
    notify_(direction) {
        this.eventTarget_.dispatchEvent(new CustomEvent('swipe', { detail: direction }));
    }
    /** The callback for touchstart events on the element. */
    onTouchStart_(event) {
        if (!this.isPresentationMode_) {
            return;
        }
        // If more than 1 finger touch the screen or there is already an ongoing
        // swipe detection process, there is no valid swipe event to keep track.
        if (event.touches.length !== 1 || this.swipeStartEvent_) {
            this.swipeStartEvent_ = null;
            return;
        }
        this.swipeStartEvent_ = event;
        return;
    }
    /** The callback for touchcancel events on the element. */
    onTouchCancel_() {
        if (!this.isPresentationMode_ || !this.swipeStartEvent_) {
            return;
        }
        this.swipeStartEvent_ = null;
    }
    /** The callback for touchend events on the element. */
    onTouchEnd_(event) {
        if (!this.isPresentationMode_ || !this.swipeStartEvent_) {
            return;
        }
        if (event.touches.length !== 0 ||
            this.swipeStartEvent_.touches.length !== 1) {
            return;
        }
        const elapsedTime = this.elapsedTimeForTesting_ ?
            this.elapsedTimeForTesting_ :
            event.timeStamp - this.swipeStartEvent_.timeStamp;
        const swipeStartObj = this.swipeStartEvent_.changedTouches[0];
        const swipeEndObj = event.changedTouches[0];
        const distX = swipeEndObj.pageX - swipeStartObj.pageX;
        const distY = swipeEndObj.pageY - swipeStartObj.pageY;
        // If this is a valid swipe, notify its direction to the viewer.
        if (elapsedTime <= SWIPE_TIMER_INTERVAL_MS &&
            Math.abs(distX) >= SWIPE_X_DIST_MIN &&
            Math.abs(distY) <= SWIPE_Y_DIST_MAX) {
            const direction = distX > 0 ? SwipeDirection.LEFT_TO_RIGHT :
                SwipeDirection.RIGHT_TO_LEFT;
            this.notify_(direction);
        }
        this.swipeStartEvent_ = null;
    }
}
