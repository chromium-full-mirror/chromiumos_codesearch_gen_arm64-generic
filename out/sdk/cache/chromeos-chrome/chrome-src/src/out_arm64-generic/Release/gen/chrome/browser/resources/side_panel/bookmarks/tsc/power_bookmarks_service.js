// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// This file contains business logic for power bookmarks side panel content.
import { PageImageServiceBrowserProxy } from '//resources/cr_components/page_image_service/browser_proxy.js';
import { ClientId as PageImageServiceClientId } from '//resources/cr_components/page_image_service/page_image_service.mojom-webui.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { BookmarksApiProxyImpl } from './bookmarks_api_proxy.js';
// This corresponds to the max number of concurrent ImageService requests
// before further requests get dropped. Further requests up to 600 should be
// batched by ImageService, but we leave this remainder as buffer in the case
// of multiple windows.
const MAX_IMAGE_SERVICE_REQUESTS = 30;
export function editingDisabledByPolicy(bookmarks) {
    if (!loadTimeData.getBoolean('editBookmarksEnabled')) {
        return true;
    }
    if (loadTimeData.getBoolean('hasManagedBookmarks')) {
        const managedNodeId = loadTimeData.getString('managedBookmarksFolderId');
        for (const bookmark of bookmarks) {
            if (bookmark.id === managedNodeId ||
                bookmark.parentId === managedNodeId) {
                return true;
            }
        }
    }
    return false;
}
// Return an array that includes folder and all its descendants.
export function getFolderDescendants(folder, excludeFolder = undefined) {
    if (folder === excludeFolder) {
        return [];
    }
    let expanded = [folder];
    if (folder.children) {
        folder.children.forEach((child) => {
            expanded = expanded.concat(getFolderDescendants(child, excludeFolder));
        });
    }
    return expanded;
}
// Compares bookmarks based on the newest dateAdded of the bookmark
// itself and all descendants.
function compareNewest(a, b) {
    let aValue;
    let bValue;
    getFolderDescendants(a).forEach((descendant) => {
        if (!aValue || descendant.dateAdded > aValue) {
            aValue = descendant.dateAdded;
        }
    });
    getFolderDescendants(b).forEach((descendant) => {
        if (!bValue || descendant.dateAdded > bValue) {
            bValue = descendant.dateAdded;
        }
    });
    return bValue - aValue;
}
// Compares bookmarks based on the oldest dateAdded of the bookmark
// itself and all descendants.
function compareOldest(a, b) {
    let aValue;
    let bValue;
    getFolderDescendants(a).forEach((descendant) => {
        if (!aValue || descendant.dateAdded < aValue) {
            aValue = descendant.dateAdded;
        }
    });
    getFolderDescendants(b).forEach((descendant) => {
        if (!bValue || descendant.dateAdded < bValue) {
            bValue = descendant.dateAdded;
        }
    });
    return aValue - bValue;
}
// Compares bookmarks based on the most recent dateLastUsed, or dateAdded if
// dateUsed is not set, of the bookmark itself and all descendants.
function compareLastOpened(a, b) {
    let aValue;
    let bValue;
    getFolderDescendants(a).forEach((descendant) => {
        const descendantValue = descendant.dateLastUsed ? descendant.dateLastUsed :
            descendant.dateAdded;
        if (!aValue || descendantValue > aValue) {
            aValue = descendantValue;
        }
    });
    getFolderDescendants(b).forEach((descendant) => {
        const descendantValue = descendant.dateLastUsed ? descendant.dateLastUsed :
            descendant.dateAdded;
        if (!bValue || descendantValue > bValue) {
            bValue = descendantValue;
        }
    });
    return bValue - aValue;
}
function compareAlphabetical(a, b) {
    return a.title.localeCompare(b.title);
}
function compareReverseAlphabetical(a, b) {
    return b.title.localeCompare(a.title);
}
export class PowerBookmarksService {
    constructor(delegate) {
        this.bookmarksApi_ = BookmarksApiProxyImpl.getInstance();
        this.listeners_ = new Map();
        this.folders_ = [];
        this.bookmarksWithCachedImages_ = new Set();
        this.activeImageServiceRequestCount_ = 0;
        this.inactiveImageServiceRequests_ = new Map();
        this.maxImageServiceRequests_ = MAX_IMAGE_SERVICE_REQUESTS;
        this.delegate_ = delegate;
    }
    /**
     * Creates listeners for all relevant bookmark and shopping information.
     * Invoke during setup.
     */
    startListening() {
        this.bookmarksApi_.getActiveUrl().then(url => this.delegate_.setCurrentUrl(url));
        this.bookmarksApi_.getFolders().then(folders => {
            this.folders_ = folders;
            this.addListener_('onChanged', (id, changedInfo) => this.onChanged_(id, changedInfo));
            this.addListener_('onCreated', (_id, node) => this.onCreated_(node));
            this.addListener_('onMoved', (_id, movedInfo) => this.onMoved_(movedInfo));
            this.addListener_('onRemoved', (id) => this.onRemoved_(id));
            this.addListener_('onTabActivated', (_info) => {
                this.bookmarksApi_.getActiveUrl().then(url => this.delegate_.setCurrentUrl(url));
            });
            this.addListener_('onTabUpdated', (_tabId, _changeInfo, tab) => {
                if (tab.active) {
                    this.delegate_.setCurrentUrl(tab.url);
                }
            });
            this.delegate_.onBookmarksLoaded();
        });
    }
    /**
     * Cleans up any listeners created by the startListening method.
     * Invoke during teardown.
     */
    stopListening() {
        for (const [eventName, callback] of this.listeners_.entries()) {
            this.bookmarksApi_.callbackRouter[eventName].removeListener(callback);
        }
    }
    /**
     * Returns a list of all root bookmark folders.
     */
    getFolders() {
        return this.folders_;
    }
    /**
     * Returns a list of all bookmarks defaulted to if no filter criteria are
     * provided.
     */
    getTopLevelBookmarks() {
        return this.filterBookmarks(undefined, 0, undefined, []);
    }
    /**
     * Returns a list of bookmarks and folders filtered by the provided criteria.
     */
    filterBookmarks(activeFolder, activeSortIndex, searchQuery, labels, excludeFolder = undefined) {
        let bookmarks = [];
        if (activeFolder) {
            bookmarks = activeFolder.children.slice();
        }
        else {
            let topLevelBookmarks = [];
            this.folders_.forEach(folder => topLevelBookmarks = topLevelBookmarks.concat((folder.id === loadTimeData.getString('otherBookmarksId') ||
                folder.id === loadTimeData.getString('mobileBookmarksId')) ?
                folder.children :
                [folder]));
            bookmarks = topLevelBookmarks;
        }
        if (searchQuery || labels.find((label) => label.active)) {
            bookmarks = this.applySearchQueryAndLabels_(labels, searchQuery, bookmarks, excludeFolder);
        }
        const sortChangedPosition = this.sortBookmarks(bookmarks, activeSortIndex);
        return sortChangedPosition ? bookmarks.slice() : bookmarks;
    }
    /**
     * Apply the current active sort type to the given bookmarks list. Returns
     * true if any elements in the list changed position.
     */
    sortBookmarks(bookmarks, activeSortIndex) {
        let changedPosition = false;
        bookmarks.sort(function (a, b) {
            // Always sort by folders first
            if (!a.url && b.url) {
                return -1;
            }
            else if (a.url && !b.url) {
                changedPosition = true;
                return 1;
            }
            else {
                let toReturn;
                if (activeSortIndex === 0) {
                    toReturn = compareNewest(a, b);
                }
                else if (activeSortIndex === 1) {
                    toReturn = compareOldest(a, b);
                }
                else if (activeSortIndex === 2) {
                    toReturn = compareLastOpened(a, b);
                }
                else if (activeSortIndex === 3) {
                    toReturn = compareAlphabetical(a, b);
                }
                else {
                    toReturn = compareReverseAlphabetical(a, b);
                }
                if (toReturn > 0) {
                    changedPosition = true;
                }
                return toReturn;
            }
        });
        return changedPosition;
    }
    /**
     * Checks bookmarks for any relevant data and updates delegate_ with the
     * results. Used to batch data fetching in any cases where it is particularly
     * expensive.
     */
    async refreshDataForBookmarks(bookmarks) {
        bookmarks.forEach((bookmark) => this.findBookmarkImageUrls_(bookmark, true, false));
    }
    /**
     * Returns the BookmarkTreeNode with the given id, or undefined if one does
     * not exist.
     */
    findBookmarkWithId(id) {
        if (id) {
            const path = this.findPathToId_(id);
            if (path) {
                return path[path.length - 1];
            }
        }
        return undefined;
    }
    /**
     * Returns true if the given url is not already present in the given folder.
     * If the folder is undefined, will default to the "Other Bookmarks" folder.
     */
    canAddUrl(url, folder) {
        if (!folder) {
            folder =
                this.findBookmarkWithId(loadTimeData.getString('otherBookmarksId'));
            if (!folder) {
                return false;
            }
        }
        return folder.children.findIndex(b => b.url === url) === -1;
    }
    bookmarkMatchesSearchQueryAndLabels(bookmark, labels, searchQuery) {
        return this.nodeMatchesContentFilters_(bookmark, labels) &&
            (!searchQuery ||
                (!!bookmark.title &&
                    bookmark.title.toLocaleLowerCase().includes(searchQuery)) ||
                (!!bookmark.url &&
                    bookmark.url.toLocaleLowerCase().includes(searchQuery)));
    }
    setMaxImageServiceRequestsForTesting(max) {
        this.maxImageServiceRequests_ = max;
    }
    applySearchQueryAndLabels_(labels, searchQuery, shownBookmarks, excludeFolder) {
        let searchSpace = [];
        // Search space should include all descendants of the shown bookmarks, in
        // addition to the shown bookmarks themselves, excluding the excludeFolder
        // and its descendants.
        shownBookmarks.forEach((bookmark) => {
            searchSpace =
                searchSpace.concat(getFolderDescendants(bookmark, excludeFolder));
        });
        return searchSpace.filter((bookmark) => this.bookmarkMatchesSearchQueryAndLabels(bookmark, labels, searchQuery));
    }
    nodeMatchesContentFilters_(bookmark, labels) {
        // Price tracking label
        if (labels[0] && labels[0].active &&
            !this.delegate_.isPriceTracked(bookmark)) {
            return false;
        }
        return true;
    }
    addListener_(eventName, callback) {
        this.bookmarksApi_.callbackRouter[eventName].addListener(callback);
        this.listeners_.set(eventName, callback);
    }
    onChanged_(id, changedInfo) {
        const bookmark = this.findBookmarkWithId(id);
        Object.assign(bookmark, changedInfo);
        this.findBookmarkImageUrls_(bookmark, false, true);
        this.delegate_.onBookmarkChanged(id, changedInfo);
    }
    onCreated_(node) {
        const parent = this.findBookmarkWithId(node.parentId);
        if (!node.url && !node.children) {
            // Newly created folders in this session may not have an array of
            // children yet, so create an empty one.
            node.children = [];
        }
        parent.children.splice(node.index, 0, node);
        this.delegate_.onBookmarkCreated(node, parent);
        this.findBookmarkImageUrls_(node, false, false);
    }
    onMoved_(movedInfo) {
        // Remove node from oldParent at oldIndex.
        const oldParent = this.findBookmarkWithId(movedInfo.oldParentId);
        const movedNode = oldParent.children[movedInfo.oldIndex];
        Object.assign(movedNode, { index: movedInfo.index, parentId: movedInfo.parentId });
        oldParent.children.splice(movedInfo.oldIndex, 1);
        // Add the node to the new parent at index.
        const newParent = this.findBookmarkWithId(movedInfo.parentId);
        if (!newParent.children) {
            newParent.children = [];
        }
        newParent.children.splice(movedInfo.index, 0, movedNode);
        this.delegate_.onBookmarkMoved(movedNode, oldParent, newParent);
    }
    onRemoved_(id) {
        const oldPath = this.findPathToId_(id);
        const removedNode = oldPath.pop();
        const oldParent = oldPath[oldPath.length - 1];
        oldParent.children.splice(oldParent.children.indexOf(removedNode), 1);
        this.delegate_.onBookmarkRemoved(removedNode);
    }
    /**
     * Finds the node within all bookmarks and returns the path to the node in
     * the tree.
     */
    findPathToId_(id) {
        const path = [];
        function findPathByIdInternal(id, node) {
            if (node.id === id) {
                path.push(node);
                return true;
            }
            if (!node.children) {
                return false;
            }
            path.push(node);
            const foundInChildren = node.children.some(child => findPathByIdInternal(id, child));
            if (!foundInChildren) {
                path.pop();
            }
            return foundInChildren;
        }
        this.folders_.some(bookmark => findPathByIdInternal(id, bookmark));
        return path;
    }
    /**
     * Assigns an image url for the given bookmark. Also assigns an image url to
     * all children if recurse is true.
     */
    async findBookmarkImageUrls_(bookmark, recurse, forceUpdate) {
        const hasImage = this.bookmarksWithCachedImages_.has(bookmark.id.toString());
        if (forceUpdate || !hasImage) {
            // Reset image url to ensure old images don't persist while the new image
            // is being fetched.
            this.delegate_.setImageUrl(bookmark, '');
            if (bookmark.url) {
                const productImageUrl = this.delegate_.getProductImageUrl(bookmark);
                if (productImageUrl) {
                    this.delegate_.setImageUrl(bookmark, productImageUrl);
                    this.bookmarksWithCachedImages_.add(bookmark.id.toString());
                }
                else {
                    if (this.activeImageServiceRequestCount_ <
                        this.maxImageServiceRequests_) {
                        this.findBookmarkImageUrl_(bookmark);
                    }
                    else {
                        this.inactiveImageServiceRequests_.set(bookmark.id, bookmark);
                    }
                }
            }
        }
        if (recurse && bookmark.children) {
            bookmark.children.forEach(child => this.findBookmarkImageUrls_(child, false, forceUpdate));
        }
    }
    async findBookmarkImageUrl_(bookmark) {
        this.inactiveImageServiceRequests_.delete(bookmark.id);
        if (!bookmark.url || !loadTimeData.getBoolean('urlImagesEnabled')) {
            return;
        }
        const url = { url: bookmark.url };
        // Fetch the representative image for this page, if possible.
        this.activeImageServiceRequestCount_++;
        const { result } = await PageImageServiceBrowserProxy.getInstance()
            .handler.getPageImageUrl(PageImageServiceClientId.Bookmarks, url, { suggestImages: false, optimizationGuideImages: true });
        this.activeImageServiceRequestCount_--;
        if (result) {
            this.delegate_.setImageUrl(bookmark, result.imageUrl.url);
            this.bookmarksWithCachedImages_.add(bookmark.id.toString());
        }
        if (this.inactiveImageServiceRequests_.size > 0) {
            this.findBookmarkImageUrl_(this.inactiveImageServiceRequests_.values().next().value);
        }
    }
}
