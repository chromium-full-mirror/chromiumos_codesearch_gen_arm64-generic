// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../strings.m.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PowerBookmarkRowElement } from './power_bookmark_row.js';
const ROOT_FOLDER_ID = '0';
export const DROP_POSITION_ATTR = 'drop-position';
export var DropPosition;
(function (DropPosition) {
    DropPosition["INTO"] = "into";
})(DropPosition || (DropPosition = {}));
class DragSession {
    constructor(delegate, dragData) {
        this.lastDragOverElement_ = null;
        this.lastDropTargetBookmark_ = null;
        this.lastPointerWasTouch_ = false;
        this.delegate_ = delegate;
        this.dragData_ = dragData;
    }
    start(e) {
        chrome.bookmarkManagerPrivate.startDrag(this.dragData_.elements.map(bookmark => bookmark.id), 0, this.lastPointerWasTouch_, e.clientX, e.clientY);
    }
    update(e) {
        const dragOverElement = e.composedPath().find(target => {
            return target instanceof PowerBookmarkRowElement;
        });
        if (!dragOverElement) {
            // Invalid drag over element. Cancel session.
            this.cancel();
            return;
        }
        else if (dragOverElement === this.lastDragOverElement_) {
            // State has not changed, nothing to update.
            return;
        }
        this.resetState_();
        const dragOverBookmark = dragOverElement.bookmark;
        let dropTargetBookmark = dragOverBookmark;
        const invalidDropTarget = dropTargetBookmark.unmodifiable ||
            dropTargetBookmark.url ||
            (this.dragData_.elements &&
                this.dragData_.elements.some(element => element.id === dropTargetBookmark.id));
        if (invalidDropTarget) {
            dropTargetBookmark = this.delegate_.getFallbackBookmark();
        }
        const draggedBookmarks = this.dragData_.elements;
        let dropTargetIsParent = true;
        draggedBookmarks.forEach((bookmark) => {
            if (bookmark.parentId !== dropTargetBookmark.id) {
                dropTargetIsParent = false;
            }
        });
        if (draggedBookmarks.length === 0 || dropTargetIsParent) {
            this.cancel();
            return;
        }
        if (dragOverBookmark.url) {
            this.delegate_.getFallbackDropTargetElement().setAttribute(DROP_POSITION_ATTR, DropPosition.INTO);
        }
        else {
            dragOverElement.setAttribute(DROP_POSITION_ATTR, DropPosition.INTO);
        }
        this.lastDragOverElement_ = dragOverElement;
        this.lastDropTargetBookmark_ = dropTargetBookmark;
    }
    cancel() {
        this.resetState_();
        this.lastDragOverElement_ = null;
        this.lastDropTargetBookmark_ = null;
    }
    finish() {
        // TODO(crbug/1444154): Ensure it is possible to drag bookmarks into an
        // empty active folder.
        if (!this.lastDropTargetBookmark_) {
            return;
        }
        chrome.bookmarkManagerPrivate
            .drop(this.lastDropTargetBookmark_.id, /* index */ undefined)
            .then(() => {
            this.delegate_.onFinishDrop(this.lastDropTargetBookmark_);
            this.cancel();
        });
    }
    resetState_() {
        if (this.lastDragOverElement_) {
            this.lastDragOverElement_.removeAttribute(DROP_POSITION_ATTR);
        }
        this.delegate_.getFallbackDropTargetElement().removeAttribute(DROP_POSITION_ATTR);
    }
    static createFromBookmark(delegate, bookmark) {
        return new DragSession(delegate, {
            elements: [bookmark],
            sameProfile: true,
        });
    }
}
export class PowerBookmarksDragManager {
    constructor(delegate) {
        this.eventTracker_ = new EventTracker();
        this.delegate_ = delegate;
    }
    startObserving() {
        this.eventTracker_.removeAll();
        this.eventTracker_.add(this.delegate_, 'dragstart', (e) => this.onDragStart_(e));
        this.eventTracker_.add(this.delegate_, 'dragover', (e) => this.onDragOver_(e));
        this.eventTracker_.add(this.delegate_, 'dragleave', () => this.onDragLeave_());
        this.eventTracker_.add(this.delegate_, 'dragend', () => this.cancelDrag_());
        this.eventTracker_.add(this.delegate_, 'drop', (e) => this.onDrop_(e));
        if (loadTimeData.getBoolean('editBookmarksEnabled')) {
            chrome.bookmarkManagerPrivate.onDragEnter.addListener((dragData) => this.onChromeDragEnter_(dragData));
            chrome.bookmarkManagerPrivate.onDragLeave.addListener(() => this.cancelDrag_());
        }
    }
    stopObserving() {
        this.eventTracker_.removeAll();
    }
    cancelDrag_() {
        if (!this.dragSession_) {
            return;
        }
        this.dragSession_.cancel();
        this.dragSession_ = null;
    }
    onChromeDragEnter_(dragData) {
        if (this.dragSession_) {
            // A drag session is already in flight.
            return;
        }
        this.dragSession_ = new DragSession(this.delegate_, dragData);
    }
    onDragStart_(e) {
        e.preventDefault();
        if (!loadTimeData.getBoolean('editBookmarksEnabled')) {
            return;
        }
        const bookmark = e.composedPath().find(target => target.draggable)
            .bookmark;
        if (!bookmark ||
            /* Cannot drag root's children. */ bookmark.parentId ===
                ROOT_FOLDER_ID ||
            bookmark.unmodifiable) {
            return;
        }
        this.dragSession_ =
            DragSession.createFromBookmark(this.delegate_, bookmark);
        this.dragSession_.start(e);
    }
    onDragOver_(e) {
        e.preventDefault();
        if (!this.dragSession_) {
            return;
        }
        this.dragSession_.update(e);
    }
    onDragLeave_() {
        if (!this.dragSession_) {
            return;
        }
        this.dragSession_.cancel();
    }
    onDrop_(e) {
        if (!this.dragSession_) {
            return;
        }
        e.preventDefault();
        this.dragSession_.finish();
        this.dragSession_ = null;
    }
}
