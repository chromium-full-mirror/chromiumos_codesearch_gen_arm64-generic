// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Behavior for handling dragging elements in a container.
 *     Draggable elements must have the 'draggable' attribute set.
 */
import { assert } from 'chrome://resources/js/assert.js';
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { cast } from '../assert_extras.js';
/**
 * Type of an ongoing drag.
 */
var DragType;
(function (DragType) {
    DragType[DragType["NONE"] = 0] = "NONE";
    DragType[DragType["CURSOR"] = 1] = "CURSOR";
    DragType[DragType["KEYBOARD"] = 2] = "KEYBOARD";
})(DragType || (DragType = {}));
export const DragMixin = dedupingMixin((baseClass) => {
    class DragMixinInternal extends baseClass {
        constructor() {
            super(...arguments);
            /**
             * The id of the element being dragged, or empty if not dragging.
             */
            this.dragId = '';
            /**
             * The type of the currently ongoing drag.  If a keyboard drag is
             * ongoing and the user initiates a cursor drag, the keyboard drag
             * should end before the cursor drag starts.  If a cursor drag is
             * onging, keyboard dragging should be ignored.
             */
            this.dragType_ = DragType.NONE;
            this.dragStartLocation_ = { x: 0, y: 0 };
            /**
             * Used to ignore unnecessary drag events.
             */
            this.lastTouchLocation_ = null;
            this.mouseDownListener_ = this.onMouseDown_.bind(this);
            this.mouseMoveListener_ = this.onMouseMove_.bind(this);
            this.touchStartListener_ = this.onTouchStart_.bind(this);
            this.touchMoveListener_ = this.onTouchMove_.bind(this);
            this.keyDownListener_ = this.onKeyDown_.bind(this);
            this.endDragListener_ = this.endCursorDrag_.bind(this);
        }
        static get properties() {
            return {
                /** Whether or not drag is enabled (e.g. not mirrored). */
                dragEnabled: Boolean,
                /**
                 * Whether or not to allow keyboard dragging.  If set to false,
                 * all keystrokes will be ignored by this element.
                 */
                keyboardDragEnabled: {
                    type: Boolean,
                    value: false,
                },
                /**
                 * The number of pixels to drag on each keypress.
                 */
                keyboardDragStepSize: {
                    type: Number,
                    value: 20,
                },
            };
        }
        initializeDrag(enabled, container, callback) {
            this.dragEnabled = enabled;
            if (!enabled) {
                this.removeListeners_();
                return;
            }
            if (container) {
                this.container_ = container;
            }
            if (callback) {
                this.callback_ = callback;
            }
            this.addListeners_();
        }
        addListeners_() {
            const container = this.container_;
            if (!container) {
                return;
            }
            container.addEventListener('mousedown', this.mouseDownListener_);
            container.addEventListener('mousemove', this.mouseMoveListener_);
            container.addEventListener('touchstart', this.touchStartListener_);
            container.addEventListener('touchmove', this.touchMoveListener_);
            container.addEventListener('keydown', this.keyDownListener_);
            container.addEventListener('touchend', this.endDragListener_);
            window.addEventListener('mouseup', this.endDragListener_);
        }
        removeListeners_() {
            const container = this.container_;
            if (!container || !this.mouseDownListener_) {
                return;
            }
            container.removeEventListener('mousedown', this.mouseDownListener_);
            container.removeEventListener('mousemove', this.mouseMoveListener_);
            container.removeEventListener('touchstart', this.touchStartListener_);
            container.removeEventListener('touchmove', this.touchMoveListener_);
            container.removeEventListener('keydown', this.keyDownListener_);
            container.removeEventListener('touchend', this.endDragListener_);
            window.removeEventListener('mouseup', this.endDragListener_);
        }
        onMouseDown_(e) {
            const target = cast(e.target, HTMLElement);
            if (e.button !== 0 || !target.getAttribute('draggable')) {
                return true;
            }
            e.preventDefault();
            return this.startCursorDrag_(target, { x: e.pageX, y: e.pageY });
        }
        onMouseMove_(e) {
            e.preventDefault();
            return this.processCursorDrag_({ x: e.pageX, y: e.pageY });
        }
        onTouchStart_(e) {
            if (e.touches.length !== 1) {
                return false;
            }
            e.preventDefault();
            const target = cast(e.target, HTMLElement);
            const touch = e.touches[0];
            this.lastTouchLocation_ = { x: touch.pageX, y: touch.pageY };
            return this.startCursorDrag_(target, this.lastTouchLocation_);
        }
        onTouchMove_(e) {
            if (e.touches.length !== 1) {
                return true;
            }
            const touchLocation = { x: e.touches[0].pageX, y: e.touches[0].pageY };
            // Touch move events can happen even if the touch location doesn't
            // change and on small unintentional finger movements. Ignore these
            // small changes.
            if (this.lastTouchLocation_) {
                const IGNORABLE_TOUCH_MOVE_PX = 1;
                const xDiff = Math.abs(touchLocation.x - this.lastTouchLocation_.x);
                const yDiff = Math.abs(touchLocation.y - this.lastTouchLocation_.y);
                if (xDiff <= IGNORABLE_TOUCH_MOVE_PX &&
                    yDiff <= IGNORABLE_TOUCH_MOVE_PX) {
                    return true;
                }
            }
            this.lastTouchLocation_ = touchLocation;
            e.preventDefault();
            return this.processCursorDrag_(touchLocation);
        }
        onKeyDown_(e) {
            // Ignore keystrokes if keyboard dragging is disabled.
            if (this.keyboardDragEnabled === false) {
                return true;
            }
            // Ignore keystrokes if the event target is not draggable.
            const target = cast(e.target, HTMLElement);
            if (!target.getAttribute('draggable')) {
                return true;
            }
            // Keyboard drags should not interrupt cursor drags.
            if (this.dragType_ === DragType.CURSOR) {
                return true;
            }
            let delta;
            switch (e.key) {
                case 'ArrowUp':
                    delta = { x: 0, y: -this.keyboardDragStepSize };
                    break;
                case 'ArrowDown':
                    delta = { x: 0, y: this.keyboardDragStepSize };
                    break;
                case 'ArrowLeft':
                    delta = { x: -this.keyboardDragStepSize, y: 0 };
                    break;
                case 'ArrowRight':
                    delta = { x: this.keyboardDragStepSize, y: 0 };
                    break;
                case 'Enter':
                    e.preventDefault();
                    this.endKeyboardDrag_();
                    return false;
                default:
                    return true;
            }
            e.preventDefault();
            if (this.dragType_ === DragType.NONE) {
                // Start drag
                this.startKeyboardDrag_(target);
            }
            this.dragOffset_.x += delta.x;
            this.dragOffset_.y += delta.y;
            this.processKeyboardDrag_(this.dragOffset_);
            return false;
        }
        startCursorDrag_(target, eventLocation) {
            assert(this.dragEnabled);
            if (this.dragType_ === DragType.KEYBOARD) {
                this.endKeyboardDrag_();
            }
            this.dragId = target.id;
            this.dragStartLocation_ = eventLocation;
            this.dragType_ = DragType.CURSOR;
            return false;
        }
        endCursorDrag_() {
            assert(this.dragEnabled);
            if (this.dragType_ === DragType.CURSOR && this.callback_) {
                this.callback_(this.dragId, null);
            }
            this.cleanupDrag_();
            return false;
        }
        processCursorDrag_(eventLocation) {
            assert(this.dragEnabled);
            if (this.dragType_ !== DragType.CURSOR) {
                return true;
            }
            this.executeCallback_(eventLocation);
            return false;
        }
        startKeyboardDrag_(target) {
            assert(this.dragEnabled);
            if (this.dragType_ === DragType.CURSOR) {
                this.endCursorDrag_();
            }
            this.dragId = target.id;
            this.dragStartLocation_ = { x: 0, y: 0 };
            this.dragOffset_ = { x: 0, y: 0 };
            this.dragType_ = DragType.KEYBOARD;
        }
        endKeyboardDrag_() {
            assert(this.dragEnabled);
            if (this.dragType_ === DragType.KEYBOARD && this.callback_) {
                this.callback_(this.dragId, null);
            }
            this.cleanupDrag_();
        }
        processKeyboardDrag_(dragPosition) {
            assert(this.dragEnabled);
            if (this.dragType_ !== DragType.KEYBOARD) {
                return true;
            }
            this.executeCallback_(dragPosition);
            return false;
        }
        /**
         * Cleans up state for all currently ongoing drags.
         */
        cleanupDrag_() {
            this.dragId = '';
            this.dragStartLocation_ = { x: 0, y: 0 };
            this.lastTouchLocation_ = null;
            this.dragType_ = DragType.NONE;
        }
        executeCallback_(dragPosition) {
            if (this.callback_) {
                const delta = {
                    x: dragPosition.x - this.dragStartLocation_.x,
                    y: dragPosition.y - this.dragStartLocation_.y,
                };
                this.callback_(this.dragId, delta);
            }
        }
    }
    return DragMixinInternal;
});
