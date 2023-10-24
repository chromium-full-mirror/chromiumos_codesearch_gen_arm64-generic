// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { BOOKMARKS_BAR_ID, IncognitoAvailability, ROOT_NODE_ID } from './constants.js';
/**
 * @fileoverview Utility functions for the Bookmarks page.
 */
export function getDisplayedList(state) {
    if (isShowingSearch(state)) {
        assert(state.search.results);
        return state.search.results;
    }
    const children = state.nodes[state.selectedFolder].children;
    assert(children);
    return children;
}
export function normalizeNode(treeNode) {
    const node = Object.assign({}, treeNode);
    // Node index is not necessary and not kept up-to-date. Remove it from the
    // data structure so we don't accidentally depend on the incorrect
    // information.
    delete node.index;
    delete node.children;
    const bookmarkNode = node;
    if (!('url' in node)) {
        // The onCreated API listener returns folders without |children| defined.
        bookmarkNode.children = (treeNode.children || []).map(function (child) {
            return child.id;
        });
    }
    return bookmarkNode;
}
export function normalizeNodes(rootNode) {
    const nodeMap = {};
    const stack = [];
    stack.push(rootNode);
    while (stack.length > 0) {
        const node = stack.pop();
        nodeMap[node.id] = normalizeNode(node);
        if (!node.children) {
            continue;
        }
        node.children.forEach(function (child) {
            stack.push(child);
        });
    }
    return nodeMap;
}
export function createEmptyState() {
    return {
        nodes: {},
        selectedFolder: BOOKMARKS_BAR_ID,
        folderOpenState: new Map(),
        prefs: {
            canEdit: true,
            incognitoAvailability: IncognitoAvailability.ENABLED,
        },
        search: {
            term: '',
            inProgress: false,
            results: null,
        },
        selection: {
            items: new Set(),
            anchor: null,
        },
    };
}
export function isShowingSearch(state) {
    return state.search.results != null;
}
/**
 * Returns true if the node with ID |itemId| is modifiable, allowing
 * the node to be renamed, moved or deleted. Note that if a node is
 * uneditable, it may still have editable children (for example, the top-level
 * folders).
 */
export function canEditNode(state, itemId) {
    return itemId !== ROOT_NODE_ID &&
        state.nodes[itemId].parentId !== ROOT_NODE_ID &&
        !state.nodes[itemId].unmodifiable && state.prefs.canEdit;
}
/**
 * Returns true if it is possible to modify the children list of the node with
 * ID |itemId|. This includes rearranging the children or adding new ones.
 */
export function canReorderChildren(state, itemId) {
    return itemId !== ROOT_NODE_ID && !state.nodes[itemId].unmodifiable &&
        state.prefs.canEdit;
}
export function hasChildFolders(id, nodes) {
    const children = nodes[id].children;
    for (let i = 0; i < children.length; i++) {
        if (nodes[children[i]].children) {
            return true;
        }
    }
    return false;
}
export function getDescendants(nodes, baseId) {
    const descendants = new Set();
    const stack = [];
    stack.push(baseId);
    while (stack.length > 0) {
        const id = stack.pop();
        const node = nodes[id];
        if (!node) {
            continue;
        }
        descendants.add(id);
        if (!node.children) {
            continue;
        }
        node.children.forEach(function (childId) {
            stack.push(childId);
        });
    }
    return descendants;
}
export function removeIdsFromObject(map, ids) {
    const newObject = Object.assign({}, map);
    ids.forEach(function (id) {
        delete newObject[id];
    });
    return newObject;
}
export function removeIdsFromMap(map, ids) {
    const newMap = new Map(map);
    ids.forEach(function (id) {
        newMap.delete(id);
    });
    return newMap;
}
export function removeIdsFromSet(set, ids) {
    const difference = new Set(set);
    ids.forEach(function (id) {
        difference.delete(id);
    });
    return difference;
}
