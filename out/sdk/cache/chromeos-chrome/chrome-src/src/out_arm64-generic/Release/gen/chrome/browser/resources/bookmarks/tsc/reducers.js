// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Module of functions which produce a new page state in response
 * to an action. Reducers (in the same sense as Array.prototype.reduce) must be
 * pure functions: they must not modify existing state objects, or make any API
 * calls.
 */
import { assert } from 'chrome://resources/js/assert.js';
import { removeIdsFromMap, removeIdsFromObject, removeIdsFromSet } from './util.js';
function selectItems(selectionState, action) {
    let newItems = new Set();
    if (!action.clear) {
        newItems = new Set(selectionState.items);
    }
    action.items.forEach(function (id) {
        let add = true;
        if (action.toggle) {
            add = !newItems.has(id);
        }
        if (add) {
            newItems.add(id);
        }
        else {
            newItems.delete(id);
        }
    });
    return Object.assign({}, selectionState, {
        items: newItems,
        anchor: action.anchor,
    });
}
function deselectAll(_selectionState) {
    return {
        items: new Set(),
        anchor: null,
    };
}
function deselectItems(selectionState, deleted) {
    return /** @type {SelectionState} */ (Object.assign({}, selectionState, {
        items: removeIdsFromSet(selectionState.items, deleted),
        anchor: !selectionState.anchor || deleted.has(selectionState.anchor) ?
            null :
            selectionState.anchor,
    }));
}
function updateAnchor(selectionState, action) {
    return Object.assign({}, selectionState, {
        anchor: action.anchor,
    });
}
// Exported for tests.
export function updateSelection(selection, action) {
    switch (action.name) {
        case 'clear-search':
        case 'finish-search':
        case 'select-folder':
        case 'deselect-items':
            return deselectAll(selection);
        case 'select-items':
            return selectItems(selection, action);
        case 'remove-bookmark':
            return deselectItems(selection, action.descendants);
        case 'move-bookmark':
            // Deselect items when they are moved to another folder, since they will
            // no longer be visible on screen (for simplicity, ignores items visible
            // in search results).
            const moveAction = action;
            if (moveAction.parentId !== moveAction.oldParentId &&
                selection.items.has(moveAction.id)) {
                return deselectItems(selection, new Set([moveAction.id]));
            }
            return selection;
        case 'update-anchor':
            return updateAnchor(selection, action);
        default:
            return selection;
    }
}
function startSearch(search, action) {
    return {
        term: action.term,
        inProgress: true,
        results: search.results,
    };
}
function finishSearch(search, action) {
    return /** @type {SearchState} */ (Object.assign({}, search, {
        inProgress: false,
        results: action.results,
    }));
}
function clearSearch() {
    return {
        term: '',
        inProgress: false,
        results: null,
    };
}
function removeDeletedResults(search, deletedIds) {
    if (!search.results) {
        return search;
    }
    const newResults = [];
    search.results.forEach(function (id) {
        if (!deletedIds.has(id)) {
            newResults.push(id);
        }
    });
    return Object.assign({}, search, {
        results: newResults,
    });
}
function updateSearch(search, action) {
    switch (action.name) {
        case 'start-search':
            return startSearch(search, action);
        case 'select-folder':
        case 'clear-search':
            return clearSearch();
        case 'finish-search':
            return finishSearch(search, action);
        case 'remove-bookmark':
            return removeDeletedResults(search, action.descendants);
        default:
            return search;
    }
}
function modifyNode(nodes, id, callback) {
    const nodeModification = {};
    nodeModification[id] = callback(nodes[id]);
    return Object.assign({}, nodes, nodeModification);
}
function createBookmark(nodes, action) {
    const nodeModifications = {};
    nodeModifications[action.id] = action.node;
    const parentNode = nodes[action.parentId];
    const newChildren = parentNode.children.slice();
    newChildren.splice(action.parentIndex, 0, action.id);
    nodeModifications[action.parentId] = Object.assign({}, parentNode, {
        children: newChildren,
    });
    return Object.assign({}, nodes, nodeModifications);
}
function editBookmark(nodes, action) {
    // Do not allow folders to change URL (making them no longer folders).
    if (!nodes[action.id].url && action.changeInfo.url) {
        delete action.changeInfo.url;
    }
    return modifyNode(nodes, action.id, function (node) {
        return Object.assign({}, node, action.changeInfo);
    });
}
function moveBookmark(nodes, action) {
    const nodeModifications = {};
    const id = action.id;
    // Change node's parent.
    nodeModifications[id] =
        Object.assign({}, nodes[id], { parentId: action.parentId });
    // Remove from old parent.
    const oldParentId = action.oldParentId;
    const oldParentChildren = nodes[oldParentId].children.slice();
    oldParentChildren.splice(action.oldIndex, 1);
    nodeModifications[oldParentId] =
        Object.assign({}, nodes[oldParentId], { children: oldParentChildren });
    // Add to new parent.
    const parentId = action.parentId;
    const parentChildren = oldParentId === parentId ?
        oldParentChildren :
        nodes[parentId].children.slice();
    parentChildren.splice(action.index, 0, action.id);
    nodeModifications[parentId] =
        Object.assign({}, nodes[parentId], { children: parentChildren });
    return Object.assign({}, nodes, nodeModifications);
}
function removeBookmark(nodes, action) {
    const newState = modifyNode(nodes, action.parentId, function (node) {
        const newChildren = node.children.slice();
        newChildren.splice(action.index, 1);
        return /** @type {BookmarkNode} */ (Object.assign({}, node, { children: newChildren }));
    });
    return removeIdsFromObject(newState, action.descendants);
}
function reorderChildren(nodes, action) {
    return modifyNode(nodes, action.id, function (node) {
        return /** @type {BookmarkNode} */ (Object.assign({}, node, { children: action.children }));
    });
}
export function updateNodes(nodes, action) {
    switch (action.name) {
        case 'create-bookmark':
            return createBookmark(nodes, action);
        case 'edit-bookmark':
            return editBookmark(nodes, action);
        case 'move-bookmark':
            return moveBookmark(nodes, action);
        case 'remove-bookmark':
            return removeBookmark(nodes, action);
        case 'reorder-children':
            return reorderChildren(nodes, action);
        case 'refresh-nodes':
            return action.nodes;
        default:
            return nodes;
    }
}
function isAncestorOf(nodes, ancestorId, childId) {
    let currentId = childId;
    // Work upwards through the tree from child.
    while (currentId) {
        if (currentId === ancestorId) {
            return true;
        }
        currentId = nodes[currentId].parentId;
    }
    return false;
}
// Exported for tests.
export function updateSelectedFolder(selectedFolder, action, nodes) {
    switch (action.name) {
        case 'select-folder':
            return action.id;
        case 'change-folder-open':
            // When hiding the selected folder by closing its ancestor, select
            // that ancestor instead.
            const changeFolderAction = action;
            if (!changeFolderAction.open && selectedFolder &&
                isAncestorOf(nodes, changeFolderAction.id, selectedFolder)) {
                return changeFolderAction.id;
            }
            return selectedFolder;
        case 'remove-bookmark':
            // When deleting the selected folder (or its ancestor), select the
            // parent of the deleted node.
            const id = action.id;
            if (selectedFolder && isAncestorOf(nodes, id, selectedFolder)) {
                const parentId = nodes[id].parentId;
                assert(parentId);
                return parentId;
            }
            return selectedFolder;
        default:
            return selectedFolder;
    }
}
function openFolderAndAncestors(folderOpenState, id, nodes) {
    const newFolderOpenState = new Map(folderOpenState);
    for (let currentId = id; currentId; currentId = nodes[currentId].parentId) {
        newFolderOpenState.set(currentId, true);
    }
    return newFolderOpenState;
}
function changeFolderOpen(folderOpenState, action) {
    const newFolderOpenState = new Map(folderOpenState);
    newFolderOpenState.set(action.id, action.open);
    return newFolderOpenState;
}
export function updateFolderOpenState(folderOpenState, action, nodes) {
    switch (action.name) {
        case 'change-folder-open':
            return changeFolderOpen(folderOpenState, action);
        case 'select-folder':
            return openFolderAndAncestors(folderOpenState, nodes[action.id].parentId, nodes);
        case 'move-bookmark':
            if (!nodes[action.id].children) {
                return folderOpenState;
            }
            return openFolderAndAncestors(folderOpenState, action.parentId, nodes);
        case 'remove-bookmark':
            return removeIdsFromMap(folderOpenState, action.descendants);
        default:
            return folderOpenState;
    }
}
function updatePrefs(prefs, action) {
    const prefAction = action;
    switch (prefAction.name) {
        case 'set-incognito-availability':
            return /** @type {PreferencesState} */ (Object.assign({}, prefs, {
                incognitoAvailability: prefAction.value,
            }));
        case 'set-can-edit':
            return /** @type {PreferencesState} */ (Object.assign({}, prefs, {
                canEdit: prefAction.value,
            }));
        default:
            return prefs;
    }
}
export function reduceAction(state, action) {
    return {
        nodes: updateNodes(state.nodes, action),
        selectedFolder: updateSelectedFolder(state.selectedFolder, action, state.nodes),
        folderOpenState: updateFolderOpenState(state.folderOpenState, action, state.nodes),
        prefs: updatePrefs(state.prefs, action),
        search: updateSearch(state.search, action),
        selection: updateSelection(state.selection, action),
    };
}
