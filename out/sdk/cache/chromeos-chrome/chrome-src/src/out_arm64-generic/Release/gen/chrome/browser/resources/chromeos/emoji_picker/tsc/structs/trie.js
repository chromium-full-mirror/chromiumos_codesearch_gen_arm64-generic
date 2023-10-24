// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class Trie {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
    add(key) {
        let node = this;
        for (const curChar of key) {
            const newNode = node.children[curChar];
            if (newNode === undefined) {
                node.children[curChar] = new Trie();
            }
            // ! is safe here since we created the node above.
            node = node.children[curChar];
        }
        node.isEndOfWord = true;
    }
    /**
     *  returns the node at the end of the term, or
     *  returns undefined if the node for the path does not exist.
     */
    getChildNode(path) {
        let node = this;
        for (const curChar of path) {
            const newnode = node.children[curChar];
            if (newnode !== undefined) {
                node = newnode;
            }
            else {
                return undefined;
            }
        }
        return node;
    }
    /**
     * returns all keys that share the same given prefix.
     */
    getKeys(prefix) {
        const allKeys = [];
        if (prefix !== undefined) {
            const prefixNode = this.getChildNode(prefix);
            if (prefixNode === undefined) {
                return [];
            }
            prefixNode.getKeysInternal(prefix, allKeys);
        }
        else {
            this.getKeysInternal('', allKeys);
        }
        return allKeys;
    }
    /**
     * Collects all keys in the trie that has 'curKey' as the prefix.
     */
    getKeysInternal(curKey, allKeys) {
        if (this.isEndOfWord) {
            allKeys.push(curKey);
        }
        for (const char in this.children) {
            this.children[char]?.getKeysInternal(`${curKey}${char}`, allKeys);
        }
    }
    containsKey(key) {
        return !!this.getChildNode(key)?.isEndOfWord;
    }
    hasChildren() {
        return Object.keys(this.children).length > 0;
    }
    /**
     * Erase all content of the trie.
     */
    clear() {
        this.children = {};
        this.isEndOfWord = false;
    }
}
