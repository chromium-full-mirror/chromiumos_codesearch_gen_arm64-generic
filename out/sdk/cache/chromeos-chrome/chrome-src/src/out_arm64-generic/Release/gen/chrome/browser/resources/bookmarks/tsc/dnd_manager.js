// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './folder_node.js';
import './item.js';
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { changeFolderOpen, deselectItems, selectItem } from './actions.js';
import { highlightUpdatedItems, trackUpdatedItems } from './api_listener.js';
import { BookmarkManagerApiProxyImpl } from './bookmark_manager_api_proxy.js';
import { DropPosition, ROOT_NODE_ID } from './constants.js';
import { Debouncer } from './debouncer.js';
import { Store } from './store.js';
import { canEditNode, canReorderChildren, getDisplayedList, hasChildFolders, isShowingSearch, normalizeNode } from './util.js';
function isBookmarkItem(element) {
    return element.tagName === 'BOOKMARKS-ITEM';
}
function isBookmarkFolderNode(element) {
    return element.tagName === 'BOOKMARKS-FOLDER-NODE';
}
function isBookmarkList(element) {
    return element.tagName === 'BOOKMARKS-LIST';
}
function isClosedBookmarkFolderNode(element) {
    return isBookmarkFolderNode(element) &&
        !(element.isOpen);
}
function getBookmarkElement(path) {
    if (!path) {
        return null;
    }
    for (let i = 0; i < path.length; i++) {
        const element = path[i];
        if (isBookmarkItem(element) || isBookmarkFolderNode(element) ||
            isBookmarkList(element)) {
            return path[i];
        }
    }
    return null;
}
function getDragElement(path) {
    const dragElement = getBookmarkElement(path);
    for (let i = 0; i < path.length; i++) {
        if (path[i].tagName === 'BUTTON') {
            return null;
        }
    }
    return dragElement && dragElement.getAttribute('draggable') ? dragElement :
        null;
}
function getBookmarkNode(bookmarkElement) {
    return Store.getInstance().data.nodes[bookmarkElement.itemId];
}
function isTextInputElement(element) {
    return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA';
}
/**
 * Contains and provides utility methods for drag data sent by the
 * bookmarkManagerPrivate API.
 */
export class DragInfo {
    constructor() {
        this.dragData = null;
    }
    setNativeDragData(newDragData) {
        this.dragData = {
            sameProfile: newDragData.sameProfile,
            elements: newDragData.elements.map((x) => normalizeNode(x)),
        };
    }
    clearDragData() {
        this.dragData = null;
    }
    isDragValid() {
        return !!this.dragData;
    }
    isSameProfile() {
        return !!this.dragData && this.dragData.sameProfile;
    }
    isDraggingFolders() {
        return !!this.dragData && this.dragData.elements.some(function (node) {
            return !node.url;
        });
    }
    isDraggingBookmark(bookmarkId) {
        return !!this.dragData && this.isSameProfile() &&
            this.dragData.elements.some(function (node) {
                return node.id === bookmarkId;
            });
    }
    isDraggingChildBookmark(folderId) {
        return !!this.dragData && this.isSameProfile() &&
            this.dragData.elements.some(function (node) {
                return node.parentId === folderId;
            });
    }
    isDraggingFolderToDescendant(itemId, nodes) {
        if (!this.isSameProfile()) {
            return false;
        }
        let parentId = nodes[itemId].parentId;
        const parents = {};
        while (parentId) {
            parents[parentId] = true;
            parentId = nodes[parentId].parentId;
        }
        return !!this.dragData && this.dragData.elements.some(function (node) {
            return parents[node.id];
        });
    }
}
// Ms to wait during a dragover to open closed folder.
let folderOpenerTimeoutDelay = 400;
export function overrideFolderOpenerTimeoutDelay(ms) {
    folderOpenerTimeoutDelay = ms;
}
/**
 * Manages auto expanding of sidebar folders on hover while dragging.
 */
class AutoExpander {
    constructor() {
        this.lastElement_ = null;
        this.lastX_ = null;
        this.lastY_ = null;
        this.debouncer_ = new Debouncer(() => {
            const store = Store.getInstance();
            store.dispatch(changeFolderOpen(this.lastElement_.itemId, true));
            this.reset();
        });
    }
    update(e, overElement, dropPosition) {
        const x = e.clientX;
        const y = e.clientY;
        const itemId = overElement ? overElement.itemId : null;
        const store = Store.getInstance();
        // If dragging over a new closed folder node with children reset the
        // expander. Falls through to reset the expander delay.
        if (overElement && overElement !== this.lastElement_ &&
            isClosedBookmarkFolderNode(overElement) &&
            hasChildFolders(itemId, store.data.nodes)) {
            this.reset();
            this.lastElement_ = overElement;
        }
        // If dragging over the same node, reset the expander delay.
        if (overElement && overElement === this.lastElement_ &&
            dropPosition === DropPosition.ON) {
            if (x !== this.lastX_ || y !== this.lastY_) {
                this.debouncer_.restartTimeout(folderOpenerTimeoutDelay);
            }
        }
        else {
            // Otherwise, cancel the expander.
            this.reset();
        }
        this.lastX_ = x;
        this.lastY_ = y;
    }
    reset() {
        this.debouncer_.reset();
        this.lastElement_ = null;
    }
}
/**
 * Encapsulates the behavior of the drag and drop indicator which puts a line
 * between items or highlights folders which are valid drop targets.
 */
class DropIndicator {
    constructor() {
        this.removeDropIndicatorTimeoutId_ = null;
        this.lastIndicatorElement_ = null;
        this.lastIndicatorClassName_ = null;
        this.timerProxy = window;
    }
    /**
     * Applies the drop indicator style on the target element and stores that
     * information to easily remove the style in the future.
     */
    addDropIndicatorStyle(indicatorElement, position) {
        const indicatorStyleName = position === DropPosition.ABOVE ?
            'drag-above' :
            position === DropPosition.BELOW ? 'drag-below' : 'drag-on';
        this.lastIndicatorElement_ = indicatorElement;
        this.lastIndicatorClassName_ = indicatorStyleName;
        indicatorElement.classList.add(indicatorStyleName);
    }
    /**
     * Clears the drop indicator style from the last drop target.
     */
    removeDropIndicatorStyle() {
        if (!this.lastIndicatorElement_ || !this.lastIndicatorClassName_) {
            return;
        }
        this.lastIndicatorElement_.classList.remove(this.lastIndicatorClassName_);
        this.lastIndicatorElement_ = null;
        this.lastIndicatorClassName_ = null;
    }
    /**
     * Displays the drop indicator on the current drop target to give the
     * user feedback on where the drop will occur.
     */
    update(dropDest) {
        this.timerProxy.clearTimeout(this.removeDropIndicatorTimeoutId_);
        this.removeDropIndicatorTimeoutId_ = null;
        const indicatorElement = dropDest.element.getDropTarget();
        const position = dropDest.position;
        this.removeDropIndicatorStyle();
        this.addDropIndicatorStyle(indicatorElement, position);
    }
    /**
     * Stop displaying the drop indicator.
     */
    finish() {
        if (this.removeDropIndicatorTimeoutId_) {
            return;
        }
        // The use of a timeout is in order to reduce flickering as we move
        // between valid drop targets.
        this.removeDropIndicatorTimeoutId_ = this.timerProxy.setTimeout(() => {
            this.removeDropIndicatorStyle();
        }, 100);
    }
}
/**
 * Manages drag and drop events for the bookmarks-app.
 */
export class DndManager {
    constructor() {
        this.eventTracker_ = new EventTracker();
        this.dragInfo_ = null;
        this.dropDestination_ = null;
        this.dropIndicator_ = null;
        this.autoExpander_ = null;
        this.timerProxy_ = window;
        this.lastPointerWasTouch_ = false;
    }
    init() {
        this.dragInfo_ = new DragInfo();
        this.dropIndicator_ = new DropIndicator();
        this.autoExpander_ = new AutoExpander();
        this.eventTracker_.add(document, 'dragstart', (e) => this.onDragStart_(e));
        this.eventTracker_.add(document, 'dragenter', (e) => this.onDragEnter_(e));
        this.eventTracker_.add(document, 'dragover', (e) => this.onDragOver_(e));
        this.eventTracker_.add(document, 'dragleave', () => this.onDragLeave_());
        this.eventTracker_.add(document, 'drop', (e) => this.onDrop_(e));
        this.eventTracker_.add(document, 'dragend', () => this.clearDragData_());
        this.eventTracker_.add(document, 'mousedown', () => this.onMouseDown_());
        this.eventTracker_.add(document, 'touchstart', () => this.onTouchStart_());
        BookmarkManagerApiProxyImpl.getInstance().onDragEnter.addListener(this.handleChromeDragEnter_.bind(this));
        chrome.bookmarkManagerPrivate.onDragLeave.addListener(this.clearDragData_.bind(this));
    }
    destroy() {
        this.eventTracker_.removeAll();
    }
    ////////////////////////////////////////////////////////////////////////////
    // DragEvent handlers:
    onDragStart_(e) {
        const dragElement = getDragElement(e.composedPath());
        if (!dragElement) {
            return;
        }
        e.preventDefault();
        const dragData = this.calculateDragData_(dragElement);
        if (!dragData) {
            this.clearDragData_();
            return;
        }
        const state = Store.getInstance().data;
        let draggedNodes = [];
        if (isBookmarkItem(dragElement)) {
            const displayingItems = getDisplayedList(state);
            // TODO(crbug.com/980427): Make this search more time efficient to avoid
            // delay on large amount of bookmark dragging.
            for (const itemId of displayingItems) {
                for (const element of dragData.elements) {
                    if (element.id === itemId) {
                        draggedNodes.push(element.id);
                        break;
                    }
                }
            }
        }
        else {
            draggedNodes = dragData.elements.map((item) => item.id);
        }
        assert(draggedNodes.length === dragData.elements.length);
        const dragNodeIndex = draggedNodes.indexOf(dragElement.itemId);
        assert(dragNodeIndex !== -1);
        BookmarkManagerApiProxyImpl.getInstance().startDrag(draggedNodes, dragNodeIndex, this.lastPointerWasTouch_, e.clientX, e.clientY);
    }
    onDragLeave_() {
        this.dropIndicator_.finish();
    }
    onDrop_(e) {
        // Allow normal DND on text inputs.
        if (isTextInputElement(e.composedPath()[0])) {
            return;
        }
        e.preventDefault();
        if (this.dropDestination_) {
            const dropInfo = this.calculateDropInfo_(this.dropDestination_);
            const index = dropInfo.index !== -1 ? dropInfo.index : undefined;
            const shouldHighlight = this.shouldHighlight_(this.dropDestination_);
            if (shouldHighlight) {
                trackUpdatedItems();
            }
            BookmarkManagerApiProxyImpl.getInstance()
                .drop(dropInfo.parentId, index)
                .then(shouldHighlight ? highlightUpdatedItems : undefined);
        }
        this.clearDragData_();
    }
    onDragEnter_(e) {
        e.preventDefault();
    }
    onDragOver_(e) {
        this.dropDestination_ = null;
        // Allow normal DND on text inputs.
        if (isTextInputElement(e.composedPath()[0])) {
            return;
        }
        // The default operation is to allow dropping links etc to do
        // navigation. We never want to do that for the bookmark manager.
        e.preventDefault();
        if (!this.dragInfo_.isDragValid()) {
            return;
        }
        const overElement = getBookmarkElement(e.composedPath());
        if (!overElement) {
            this.autoExpander_.update(e, overElement);
            this.dropIndicator_.finish();
            return;
        }
        // Now we know that we can drop. Determine if we will drop above, on or
        // below based on mouse position etc.
        this.dropDestination_ =
            this.calculateDropDestination_(e.clientY, overElement);
        if (!this.dropDestination_) {
            this.autoExpander_.update(e, overElement);
            this.dropIndicator_.finish();
            return;
        }
        this.autoExpander_.update(e, overElement, this.dropDestination_.position);
        this.dropIndicator_.update(this.dropDestination_);
    }
    onMouseDown_() {
        this.lastPointerWasTouch_ = false;
    }
    onTouchStart_() {
        this.lastPointerWasTouch_ = true;
    }
    handleChromeDragEnter_(dragData) {
        this.dragInfo_.setNativeDragData(dragData);
    }
    ////////////////////////////////////////////////////////////////////////////
    // Helper methods:
    clearDragData_() {
        this.autoExpander_.reset();
        // Defer the clearing of the data so that the bookmark manager API's drop
        // event doesn't clear the drop data before the web drop event has a
        // chance to execute (on Mac).
        this.timerProxy_.setTimeout(() => {
            this.dragInfo_.clearDragData();
            this.dropDestination_ = null;
            this.dropIndicator_.finish();
        }, 0);
    }
    calculateDropInfo_(dropDestination) {
        if (isBookmarkList(dropDestination.element)) {
            return {
                index: 0,
                parentId: Store.getInstance().data.selectedFolder,
            };
        }
        const node = getBookmarkNode(dropDestination.element);
        const position = dropDestination.position;
        let index = -1;
        let parentId = node.id;
        if (position !== DropPosition.ON) {
            const state = Store.getInstance().data;
            // Drops between items in the normal list and the sidebar use the drop
            // destination node's parent.
            assert(node.parentId);
            parentId = node.parentId;
            index = state.nodes[parentId].children.indexOf(node.id);
            if (position === DropPosition.BELOW) {
                index++;
            }
        }
        return {
            index: index,
            parentId: parentId,
        };
    }
    /**
     * Calculates which items should be dragged based on the initial drag item
     * and the current selection. Dragged items will end up selected.
     */
    calculateDragData_(dragElement) {
        const dragId = dragElement.itemId;
        const store = Store.getInstance();
        const state = store.data;
        // Determine the selected bookmarks.
        let draggedNodes = Array.from(state.selection.items);
        // Change selection to the dragged node if the node is not part of the
        // existing selection.
        if (isBookmarkFolderNode(dragElement) ||
            draggedNodes.indexOf(dragId) === -1) {
            store.dispatch(deselectItems());
            if (!isBookmarkFolderNode(dragElement)) {
                store.dispatch(selectItem(dragId, state, {
                    clear: false,
                    range: false,
                    toggle: false,
                }));
            }
            draggedNodes = [dragId];
        }
        // If any node can't be dragged, end the drag.
        const anyUnmodifiable = draggedNodes.some((itemId) => !canEditNode(state, itemId));
        if (anyUnmodifiable) {
            return null;
        }
        return {
            elements: draggedNodes.map((id) => state.nodes[id]),
            sameProfile: true,
        };
    }
    /**
     * This function determines where the drop will occur.
     */
    calculateDropDestination_(elementClientY, overElement) {
        const validDropPositions = this.calculateValidDropPositions_(overElement);
        if (validDropPositions === DropPosition.NONE) {
            return null;
        }
        const above = validDropPositions & DropPosition.ABOVE;
        const below = validDropPositions & DropPosition.BELOW;
        const on = validDropPositions & DropPosition.ON;
        const rect = overElement.getDropTarget().getBoundingClientRect();
        const yRatio = (elementClientY - rect.top) / rect.height;
        if (above && (yRatio <= .25 || yRatio <= .5 && (!below || !on))) {
            return { element: overElement, position: DropPosition.ABOVE };
        }
        if (below && (yRatio > .75 || yRatio > .5 && (!above || !on))) {
            return { element: overElement, position: DropPosition.BELOW };
        }
        if (on) {
            return { element: overElement, position: DropPosition.ON };
        }
        return null;
    }
    /**
     * Determines the valid drop positions for the given target element.
     */
    calculateValidDropPositions_(overElement) {
        const dragInfo = this.dragInfo_;
        const state = Store.getInstance().data;
        let itemId = overElement.itemId;
        // Drags aren't allowed onto the search result list.
        if ((isBookmarkList(overElement) || isBookmarkItem(overElement)) &&
            isShowingSearch(state)) {
            return DropPosition.NONE;
        }
        if (isBookmarkList(overElement)) {
            itemId = state.selectedFolder;
        }
        if (!canReorderChildren(state, itemId)) {
            return DropPosition.NONE;
        }
        // Drags of a bookmark onto itself or of a folder into its children aren't
        // allowed.
        if (dragInfo.isDraggingBookmark(itemId) ||
            dragInfo.isDraggingFolderToDescendant(itemId, state.nodes)) {
            return DropPosition.NONE;
        }
        let validDropPositions = this.calculateDropAboveBelow_(overElement);
        if (this.canDropOn_(overElement)) {
            validDropPositions |= DropPosition.ON;
        }
        return validDropPositions;
    }
    calculateDropAboveBelow_(overElement) {
        const dragInfo = this.dragInfo_;
        const state = Store.getInstance().data;
        if (isBookmarkList(overElement)) {
            return DropPosition.NONE;
        }
        // We cannot drop between Bookmarks bar and Other bookmarks.
        if (getBookmarkNode(overElement).parentId === ROOT_NODE_ID) {
            return DropPosition.NONE;
        }
        const isOverFolderNode = isBookmarkFolderNode(overElement);
        // We can only drop between items in the tree if we have any folders.
        if (isOverFolderNode && !dragInfo.isDraggingFolders()) {
            return DropPosition.NONE;
        }
        let validDropPositions = DropPosition.NONE;
        // Cannot drop above if the item above is already in the drag source.
        const previousElem = overElement.previousElementSibling;
        if (!previousElem || !dragInfo.isDraggingBookmark(previousElem.itemId)) {
            validDropPositions |= DropPosition.ABOVE;
        }
        // Don't allow dropping below an expanded sidebar folder item since it is
        // confusing to the user anyway.
        if (isOverFolderNode && !isClosedBookmarkFolderNode(overElement) &&
            hasChildFolders(overElement.itemId, state.nodes)) {
            return validDropPositions;
        }
        const nextElement = overElement.nextElementSibling;
        // Cannot drop below if the item below is already in the drag source.
        if (!nextElement || !dragInfo.isDraggingBookmark(nextElement.itemId)) {
            validDropPositions |= DropPosition.BELOW;
        }
        return validDropPositions;
    }
    /**
     * Determine whether we can drop the dragged items on the drop target.
     */
    canDropOn_(overElement) {
        // Allow dragging onto empty bookmark lists.
        if (isBookmarkList(overElement)) {
            const state = Store.getInstance().data;
            return !!state.selectedFolder &&
                state.nodes[state.selectedFolder].children.length === 0;
        }
        // We can only drop on a folder.
        if (getBookmarkNode(overElement).url) {
            return false;
        }
        return !this.dragInfo_.isDraggingChildBookmark(overElement.itemId);
    }
    shouldHighlight_(dropDestination) {
        return isBookmarkItem(dropDestination.element) ||
            isBookmarkList(dropDestination.element);
    }
    setTimerProxyForTesting(timerProxy) {
        this.timerProxy_ = timerProxy;
        this.dropIndicator_.timerProxy = timerProxy;
    }
    getDragInfoForTesting() {
        return this.dragInfo_;
    }
}
