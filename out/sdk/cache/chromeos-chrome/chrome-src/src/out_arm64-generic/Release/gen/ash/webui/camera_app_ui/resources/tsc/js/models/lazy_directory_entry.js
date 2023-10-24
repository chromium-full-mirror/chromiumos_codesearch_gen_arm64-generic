// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from '../assert.js';
/**
 * Gets directory entry by given |name| under |parentDir| directory. If the
 * directory does not exist, returns a lazy directory which will only be created
 * once there is any file written in it.
 */
export async function getMaybeLazyDirectory(parentDir, name) {
    const targetDir = await parentDir.getDirectory({ name, createIfNotExist: false });
    return targetDir ?? new LazyDirectoryEntry(parentDir, name);
}
/**
 * A directory entry which will only create itself if there is any
 * file/directory created under it.
 */
class LazyDirectoryEntry {
    constructor(parent, name) {
        this.parent = parent;
        this.name = name;
        this.directory = null;
    }
    async getHandle() {
        const dir = await this.getRealDirectory();
        return dir.getHandle();
    }
    async getFiles() {
        if (this.directory === null) {
            return [];
        }
        return this.directory.getFiles();
    }
    async getDirectories() {
        if (this.directory === null) {
            return [];
        }
        return this.directory.getDirectories();
    }
    async getFile(name) {
        if (this.directory === null) {
            return null;
        }
        return this.directory.getFile(name);
    }
    async exists(name) {
        if (this.directory === null) {
            return false;
        }
        return this.directory.exists(name);
    }
    async createFile(name) {
        const dir = await this.getRealDirectory();
        return dir.createFile(name);
    }
    async getDirectory({ name, createIfNotExist }) {
        if (this.directory === null && !createIfNotExist) {
            return null;
        }
        const dir = await this.getRealDirectory();
        return dir.getDirectory({ name, createIfNotExist });
    }
    async removeEntry(name) {
        if (this.directory === null) {
            return;
        }
        await this.directory.removeEntry(name);
    }
    /**
     * Gets the directory which this entry points to. Creates it if it does not
     * exist.
     */
    async getRealDirectory() {
        this.directory = await this.parent.getDirectory({ name: this.name, createIfNotExist: true });
        // createIfNotExist is set so the return value will never be null.
        assert(this.directory !== null);
        return this.directory;
    }
}
