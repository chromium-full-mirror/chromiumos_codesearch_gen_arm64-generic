// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * A linked-list node which holds data for cache entry such as key, value, size.
 */
class LruCacheNode {
    constructor(key, value, size) {
        this.key = key;
        this.value = value;
        this.size = size;
        this.next = null;
        this.prev = null;
    }
}
/**
 * Container of the list of cache nodes.
 */
class LruCacheList {
    constructor() {
        this.tail_ = null;
        this.head_ = null;
    }
    /**
     * Removes a node from this list.
     */
    remove(node) {
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        if (node === this.head_) {
            this.head_ = node.next;
        }
        if (node === this.tail_) {
            this.tail_ = node.prev;
        }
        node.prev = null;
        node.next = null;
    }
    /**
     * Adds a node at the head of this list.
     */
    prepend(node) {
        node.prev = null;
        node.next = this.head_;
        if (node.next === null) {
            this.tail_ = node;
        }
        else {
            node.next.prev = node;
        }
        this.head_ = node;
    }
    /**
     * Returns the last node of the list, or null if the list has no nodes.
     */
    lastNode() {
        return this.tail_;
    }
}
/**
 * Cache management class implementing LRU algorithm.
 */
export class LruCache {
    /**
     * @param maxSize_ Maximum total size of items this cache can hold.
     *     When items are put without specifying their sizes, their sizes are
     *     treated as 1 and the |maxSize_| can be interpreted as the maximum
     *     number of items. If items are put with specifying their sizes in bytes,
     *     the |maxSize_| can be interpreted as the maximum number of bytes.
     */
    constructor(maxSize_) {
        this.maxSize_ = maxSize_;
        this.totalSize_ = 0;
        this.list_ = new LruCacheList();
        this.nodes_ = {};
    }
    /**
     * Returns a cached item corresponding to the given key. The referenced item
     * will be the most recently used item and won't be evicted soon.
     */
    get(key) {
        const node = this.nodes_[key];
        if (!node) {
            return null;
        }
        this.moveNodeToHead_(node);
        return node.value;
    }
    /**
     * Returns a cached item corresponding to the given key without making the
     * referenced item the most recently used item.
     */
    peek(key) {
        const node = this.nodes_[key];
        if (!node) {
            return null;
        }
        return node.value;
    }
    /**
     * Returns true if the cache contains the key.
     */
    hasKey(key) {
        return key in this.nodes_;
    }
    /**
     * Saves an item in this cache. The saved item will be the most recently used
     * item and won't be evicted soon. If an item with the same key already exists
     * in the cache, the existing item's value and size will be updated and the
     * item will become the most recently used item.
     * @param key Key to find the cached item later.
     * @param value Value of the item to be cached.
     * @param size Size of the put item. If not specified, the size
     *     is regarded as 1. If the size is larger than the |maxSize_|, put
     *     operation will be ignored keeping cache state unchanged.
     */
    put(key, value, size = 1) {
        if (size > this.maxSize_) {
            return;
        }
        let node = this.nodes_[key];
        while (this.totalSize_ + size - (node ? node.size : 0) > this.maxSize_) {
            this.evictLastNode_();
            // The referenced node may be evicted, so it needs to be updated.
            node = this.nodes_[key];
        }
        if (node) {
            this.updateNode_(node, value, size);
            this.moveNodeToHead_(node);
        }
        else {
            node = new LruCacheNode(key, value, size);
            this.prependNode_(node);
        }
    }
    /**
     * Removes an item from the cache.
     */
    remove(key) {
        const node = this.nodes_[key];
        if (node) {
            this.removeNode_(node);
        }
    }
    /**
     * Returns the cache size.
     */
    size() {
        return this.totalSize_;
    }
    /**
     * Updates max size of the cache.
     * @param {number} value New max size.
     */
    setMaxSize(value) {
        this.maxSize_ = value;
        while (this.totalSize_ > this.maxSize_) {
            this.evictLastNode_();
        }
    }
    /**
     * Returns the max size of the cache.
     */
    getMaxSize() {
        return this.maxSize_;
    }
    /**
     * Evicts the oldest cache node.
     */
    evictLastNode_() {
        const lastNode = this.list_.lastNode();
        if (!lastNode) {
            throw new Error('No more nodes to evict.');
        }
        this.removeNode_(lastNode);
    }
    /**
     * Removes given node from this cache store completely.
     */
    removeNode_(node) {
        this.list_.remove(node);
        this.totalSize_ -= node.size;
        console.assert(this.totalSize_ >= 0);
        console.assert(!!this.nodes_[node.key]);
        delete this.nodes_[node.key];
    }
    /**
     * Prepends given node to the head of list.
     */
    prependNode_(node) {
        this.list_.prepend(node);
        this.totalSize_ += node.size;
        console.assert(this.totalSize_ <= this.maxSize_);
        console.assert(!this.nodes_[node.key]);
        this.nodes_[node.key] = node;
    }
    /**
     * Updates the given nodes size and value.
     */
    updateNode_(node, value, size) {
        this.totalSize_ += size - node.size;
        console.assert(this.totalSize_ >= 0 && this.totalSize_ <= this.maxSize_);
        node.value = value;
        node.size = size;
    }
    /**
     * Moves the given node to the head of the linked list.
     */
    moveNodeToHead_(node) {
        this.list_.remove(node);
        this.list_.prepend(node);
    }
}
