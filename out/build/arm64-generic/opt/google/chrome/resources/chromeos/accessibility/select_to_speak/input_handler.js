// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { RectUtil } from '../common/rect_util.js';
import { SelectToSpeakConstants } from './select_to_speak_constants.js';
/**
 * Class to handle user-input, from mouse, keyboard, and copy-paste events.
 */
export class InputHandler {
    callbacks_;
    didTrackMouse_;
    isSearchKeyDown_;
    isSelectionKeyDown_;
    keysCurrentlyDown_;
    keysPressedTogether_;
    lastClearClipboardDataTime_;
    lastReadClipboardDataTime_;
    mouseStart_;
    mouseEnd_;
    trackingMouse_;
    static kClipboardClearMaxDelayMs;
    static kClipboardReadMaxDelayMs;
    /**
     * Please keep fields in alphabetical order.
     */
    constructor(callbacks) {
        this.callbacks_ = callbacks;
        this.didTrackMouse_ = false;
        this.isSearchKeyDown_ = false;
        this.isSelectionKeyDown_ = false;
        this.keysCurrentlyDown_ = new Set();
        /**
         * All of the keys pressed since the last time 0 keys were pressed.
         */
        this.keysPressedTogether_ = new Set();
        /**
         * The timestamp at which the last clipboard data clear was requested.
         * Used to make sure we don't clear the clipboard on a user's request,
         * but only after the clipboard was used to read selected text.
         */
        this.lastClearClipboardDataTime_ = new Date(0);
        /**
         * The timestamp at which clipboard data read was requested by the user
         * doing a "read selection" keystroke on a Google Docs app. If a
         * clipboard change event comes in within kClipboardReadMaxDelayMs,
         * Select-to-Speak will read that text out loud.
         */
        this.lastReadClipboardDataTime_ = new Date(0);
        this.mouseStart_ = { x: 0, y: 0 };
        this.mouseEnd_ = { x: 0, y: 0 };
        this.trackingMouse_ = false;
    }
    clearClipboard_() {
        this.lastClearClipboardDataTime_ = new Date();
        document.execCommand('copy');
    }
    onClipboardCopy_(evt) {
        if (new Date().getTime() - this.lastClearClipboardDataTime_.getTime() <
            InputHandler.kClipboardClearMaxDelayMs) {
            // onClipboardPaste has just completed reading the clipboard for speech.
            // This is used to clear the clipboard.
            // @ts-ignore: TODO(b/270623046): clipboardData can be null.
            evt.clipboardData.setData('text/plain', '');
            evt.preventDefault();
            this.lastClearClipboardDataTime_ = new Date(0);
        }
    }
    onClipboardDataChanged_() {
        if (new Date().getTime() - this.lastReadClipboardDataTime_.getTime() <
            InputHandler.kClipboardReadMaxDelayMs) {
            // The data has changed, and we are ready to read it.
            // Get it using a paste.
            document.execCommand('paste');
        }
    }
    onClipboardPaste_(evt) {
        if (new Date().getTime() - this.lastReadClipboardDataTime_.getTime() <
            InputHandler.kClipboardReadMaxDelayMs) {
            // Read the current clipboard data.
            evt.preventDefault();
            // @ts-ignore: TODO(b/270623046): clipboardData can be null.
            this.callbacks_.onTextReceived(evt.clipboardData.getData('text/plain'));
            this.lastReadClipboardDataTime_ = new Date(0);
            // Clear the clipboard data by copying nothing (the current document).
            // Do this in a timeout to avoid a recursive warning per
            // https://crbug.com/363288.
            setTimeout(() => this.clearClipboard_(), 0);
        }
    }
    /**
     * Set up event listeners for mouse and keyboard events. These are
     * forwarded to us from the SelectToSpeakEventHandler so they should
     * be interpreted as global events on the whole screen, not local to
     * any particular window.
     */
    setUpEventListeners() {
        chrome.clipboard.onClipboardDataChanged.addListener(() => this.onClipboardDataChanged_());
        document.addEventListener('paste', evt => this.onClipboardPaste_(evt));
        document.addEventListener('copy', evt => this.onClipboardCopy_(evt));
        chrome.accessibilityPrivate.onSelectToSpeakKeysPressedChanged.addListener((keysPressed) => {
            this.onKeysPressedChanged(new Set(keysPressed));
        });
        chrome.accessibilityPrivate.onSelectToSpeakMouseChanged.addListener((eventType, mouseX, mouseY) => {
            this.onMouseEvent(eventType, mouseX, mouseY);
        });
    }
    /**
     * Change whether or not we are tracking the mouse.
     * @param tracking True if we should start tracking the mouse, false
     *     otherwise.
     */
    setTrackingMouse(tracking) {
        this.trackingMouse_ = tracking;
    }
    /**
     * Gets the rect that has been drawn by clicking and dragging the mouse.
     */
    getMouseRect() {
        return RectUtil.rectFromPoints(this.mouseStart_.x, this.mouseStart_.y, this.mouseEnd_.x, this.mouseEnd_.y);
    }
    /**
     * Sets the date at which we last wanted the clipboard data to be read.
     */
    onRequestReadClipboardData() {
        this.lastReadClipboardDataTime_ = new Date();
    }
    /**
     * Called when the mouse is pressed, released or moved and the user is
     * in a mode where select-to-speak is capturing mouse events (for example
     * holding down Search).
     * Visible for testing.
     *
     * @param type The event type.
     * @param mouseX The mouse x coordinate in global screen
     *     coordinates.
     * @param mouseY The mouse y coordinate in global screen
     *     coordinates.
     * Visible for testing.
     */
    onMouseEvent(type, mouseX, mouseY) {
        if (type === chrome.accessibilityPrivate.SyntheticMouseEventType.PRESS) {
            this.onMouseDown_(mouseX, mouseY);
        }
        else if (type === chrome.accessibilityPrivate.SyntheticMouseEventType.RELEASE) {
            this.onMouseUp_(mouseX, mouseY);
        }
        else {
            this.onMouseMove_(mouseX, mouseY);
        }
    }
    /**
     * Called when the mouse is pressed and the user is in a
     * mode where select-to-speak is capturing mouse events (for example
     * holding down Search).
     * @param mouseX The mouse x coordinate in global screen
     *     coordinates.
     * @param mouseY The mouse y coordinate in global screen
     *     coordinates.
     */
    onMouseDown_(mouseX, mouseY) {
        // If the user hasn't clicked 'search', or if they are currently
        // trying to highlight a selection, don't track the mouse.
        if (this.callbacks_.canStartSelecting() &&
            (!this.isSearchKeyDown_ || this.isSelectionKeyDown_)) {
            return false;
        }
        this.callbacks_.onSelectingStateChanged(true /* is selecting */, mouseX, mouseY);
        this.trackingMouse_ = true;
        this.didTrackMouse_ = true;
        this.mouseStart_ = { x: mouseX, y: mouseY };
        this.onMouseMove_(mouseX, mouseY);
        return false;
    }
    /**
     * Called when the mouse is moved or dragged and the user is in a
     * mode where select-to-speak is capturing mouse events (for example
     * holding down Search).
     * @param mouseX The mouse x coordinate in global screen
     *     coordinates.
     * @param mouseY The mouse y coordinate in global screen
     *     coordinates.
     */
    onMouseMove_(mouseX, mouseY) {
        if (!this.trackingMouse_) {
            return;
        }
        const rect = RectUtil.rectFromPoints(this.mouseStart_.x, this.mouseStart_.y, mouseX, mouseY);
        this.callbacks_.onSelectionChanged(rect);
    }
    /**
     * Called when the mouse is released and the user is in a
     * mode where select-to-speak is capturing mouse events (for example
     * holding down Search).
     * @param mouseX The mouse x coordinate in global screen
     *     coordinates.
     * @param mouseY The mouse y coordinate in global screen
     *     coordinates.
     */
    onMouseUp_(mouseX, mouseY) {
        if (!this.trackingMouse_) {
            return;
        }
        this.onMouseMove_(mouseX, mouseY);
        this.trackingMouse_ = false;
        if (!this.keysCurrentlyDown_.has(SelectToSpeakConstants.SEARCH_KEY_CODE)) {
            // This is only needed to cancel something started with the search key.
            this.didTrackMouse_ = false;
        }
        this.mouseEnd_ = { x: mouseX, y: mouseY };
        var ctrX = Math.floor((this.mouseStart_.x + this.mouseEnd_.x) / 2);
        var ctrY = Math.floor((this.mouseStart_.y + this.mouseEnd_.y) / 2);
        this.callbacks_.onSelectingStateChanged(false /* is no longer selecting */, ctrX, ctrY);
    }
    /**
     * Visible for testing.
     */
    onKeysPressedChanged(keysCurrentlyPressed) {
        if (keysCurrentlyPressed.size > this.keysCurrentlyDown_.size) {
            // If a key was pressed.
            for (const key of keysCurrentlyPressed) {
                // Union with keysPressedTogether_ to track all the keys that have been
                // pressed.
                this.keysPressedTogether_.add(key);
            }
            if (this.keysPressedTogether_.size === 1 &&
                keysCurrentlyPressed.has(SelectToSpeakConstants.SEARCH_KEY_CODE)) {
                this.isSearchKeyDown_ = true;
            }
            else if (this.isSearchKeyDown_ && keysCurrentlyPressed.size === 2 &&
                keysCurrentlyPressed.has(SelectToSpeakConstants.READ_SELECTION_KEY_CODE) &&
                !this.trackingMouse_) {
                // Only go into selection mode if we aren't already tracking the mouse.
                this.isSelectionKeyDown_ = true;
            }
            else if (!this.trackingMouse_) {
                // Some other key was pressed.
                this.isSearchKeyDown_ = false;
            }
        }
        else {
            // If a key was released.
            const searchKeyReleased = this.keysCurrentlyDown_.has(SelectToSpeakConstants.SEARCH_KEY_CODE) &&
                !keysCurrentlyPressed.has(SelectToSpeakConstants.SEARCH_KEY_CODE);
            const ctrlKeyReleased = this.keysCurrentlyDown_.has(SelectToSpeakConstants.CONTROL_KEY_CODE) &&
                !keysCurrentlyPressed.has(SelectToSpeakConstants.CONTROL_KEY_CODE);
            const speakSelectionKeyReleased = this.keysCurrentlyDown_.has(SelectToSpeakConstants.READ_SELECTION_KEY_CODE) &&
                !keysCurrentlyPressed.has(SelectToSpeakConstants.READ_SELECTION_KEY_CODE);
            if (speakSelectionKeyReleased) {
                if (this.isSelectionKeyDown_ && this.keysPressedTogether_.size === 2 &&
                    this.keysPressedTogether_.has(SelectToSpeakConstants.SEARCH_KEY_CODE)) {
                    this.callbacks_.onKeystrokeSelection();
                }
                this.isSelectionKeyDown_ = false;
            }
            else if (searchKeyReleased) {
                // Search key released.
                this.isSearchKeyDown_ = false;
                // If we were in the middle of tracking the mouse, cancel it.
                if (this.trackingMouse_) {
                    this.trackingMouse_ = false;
                    this.callbacks_.onRequestCancel();
                }
            }
            // Stop speech when the user taps and releases Control or Search
            // without using the mouse or pressing any other keys along the way.
            if (!this.didTrackMouse_ && (ctrlKeyReleased || searchKeyReleased) &&
                this.keysPressedTogether_.size === 1) {
                this.trackingMouse_ = false;
                this.callbacks_.onRequestCancel();
            }
            // We don't remove from keysPressedTogether_ because it tracks all the
            // keys which were pressed since pressing started.
        }
        // Reset our state with the Chrome OS key state. This ensures that even if
        // we miss a key event (may happen during login/logout/screensaver?) we
        // quickly get back to the correct state.
        this.keysCurrentlyDown_ = keysCurrentlyPressed;
        if (this.keysCurrentlyDown_.size === 0) {
            this.didTrackMouse_ = false;
            this.keysPressedTogether_.clear();
        }
    }
}
// Number of milliseconds to wait after requesting a clipboard read
// before clipboard change and paste events are ignored.
InputHandler.kClipboardReadMaxDelayMs = 1000;
// Number of milliseconds to wait after requesting a clipboard copy
// before clipboard copy events are ignored, used to clear the clipboard
// after reading data in a paste event.
InputHandler.kClipboardClearMaxDelayMs = 500;
