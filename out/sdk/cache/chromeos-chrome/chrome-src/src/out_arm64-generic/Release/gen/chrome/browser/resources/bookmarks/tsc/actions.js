// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { IncognitoAvailability, ROOT_NODE_ID } from './constants.js';
import { getDescendants, getDisplayedList, normalizeNode } from './util.js';
export function createBookmark(id, treeNode) {
    return {
        name: 'create-bookmark',
        id: id,
        parentId: treeNode.parentId,
        parentIndex: treeNode.index,
        node: normalizeNode(treeNode),
    };
}
export function editBookmark(id, changeInfo) {
    return {
        name: 'edit-bookmark',
        id: id,
        changeInfo: changeInfo,
    };
}
export function moveBookmark(id, parentId, index, oldParentId, oldIndex) {
    return {
        name: 'move-bookmark',
        id: id,
        parentId: parentId,
        index: index,
        oldParentId: oldParentId,
        oldIndex: oldIndex,
    };
}
export function reorderChildren(id, newChildIds) {
    return {
        name: 'reorder-children',
        id: id,
        children: newChildIds,
    };
}
export function removeBookmark(id, parentId, index, nodes) {
    const descendants = getDescendants(nodes, id);
    return {
        name: 'remove-bookmark',
        id: id,
        descendants: descendants,
        parentId: parentId,
        index: index,
    };
}
export function refreshNodes(nodeMap) {
    return {
        name: 'refresh-nodes',
        nodes: nodeMap,
    };
}
export function selectFolder(id, nodes) {
    if (nodes && (id === ROOT_NODE_ID || !nodes[id] || nodes[id].url)) {
        console.warn('Tried to select invalid folder: ' + id);
        return null;
    }
    return {
        name: 'select-folder',
        id: id,
    };
}
export function changeFolderOpen(id, open) {
    return {
        name: 'change-folder-open',
        id: id,
        open: open,
    };
}
export function clearSearch() {
    return {
        name: 'clear-search',
    };
}
export function deselectItems() {
    return {
        name: 'deselect-items',
    };
}
export function selectItem(id, state, config) {
    assert(!config.toggle || !config.range);
    assert(!config.toggle || !config.clear);
    const anchor = state.selection.anchor;
    const toSelect = [];
    let newAnchor = id;
    if (config.range && anchor) {
        const displayedList = getDisplayedList(state);
        const selectedIndex = displayedList.indexOf(id);
        assert(selectedIndex !== -1);
        let anchorIndex = displayedList.indexOf(anchor);
        if (anchorIndex === -1) {
            anchorIndex = selectedIndex;
        }
        // When performing a range selection, don't change the anchor from what
        // was used in this selection.
        newAnchor = displayedList[anchorIndex];
        const startIndex = Math.min(anchorIndex, selectedIndex);
        const endIndex = Math.max(anchorIndex, selectedIndex);
        for (let i = startIndex; i <= endIndex; i++) {
            toSelect.push(displayedList[i]);
        }
    }
    else {
        toSelect.push(id);
    }
    return {
        name: 'select-items',
        clear: config.clear,
        toggle: config.toggle,
        anchor: newAnchor,
        items: toSelect,
    };
}
export function selectAll(ids, state, anchor) {
    const finalAnchor = anchor ? anchor : state.selection.anchor;
    return {
        name: 'select-items',
        clear: true,
        toggle: false,
        anchor: finalAnchor,
        items: ids,
    };
}
export function updateAnchor(id) {
    return {
        name: 'update-anchor',
        anchor: id,
    };
}
export function setSearchTerm(term) {
    if (!term) {
        return clearSearch();
    }
    return {
        name: 'start-search',
        term: term,
    };
}
export function setSearchResults(ids) {
    return {
        name: 'finish-search',
        results: ids,
    };
}
export function setIncognitoAvailability(availability) {
    assert(availability !== IncognitoAvailability.FORCED);
    return {
        name: 'set-incognito-availability',
        value: availability,
    };
}
export function setCanEditBookmarks(canEdit) {
    return {
        name: 'set-can-edit',
        value: canEdit,
    };
}
