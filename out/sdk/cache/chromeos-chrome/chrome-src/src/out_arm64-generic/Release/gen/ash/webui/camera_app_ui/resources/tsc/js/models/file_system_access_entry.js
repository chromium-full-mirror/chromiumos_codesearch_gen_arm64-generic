// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from '../assert.js';
import { AsyncJobWithResultQueue } from '../async_job_queue.js';
import { isFileSystemDirectoryHandle, isFileSystemFileHandle } from '../util.js';
import { AsyncWriter } from './async_writer.js';
/**
 * The file entry implementation for SWA.
 */
export class FileAccessEntry {
    constructor(handle, parent = null) {
        this.handle = handle;
        this.parent = parent;
    }
    /**
     * Returns the File object which the entry points to.
     */
    async file() {
        return this.handle.getFile();
    }
    /**
     * Writes |blob| data into the file.
     *
     * @return The promise is resolved once the write operation is
     *     completed.
     */
    async write(blob) {
        const writer = await this.handle.createWritable();
        await writer.write(blob);
        await writer.close();
    }
    async getWriter() {
        const writer = await this.handle.createWritable();
        // TODO(crbug.com/980846): We should write files in-place so that even the
        // app is accidentally closed or hit any unexpected exceptions, the captured
        // video will not be dropped entirely.
        return new AsyncWriter({
            write: (blob) => writer.write(blob),
            seek: (offset) => writer.seek(offset),
            close: () => writer.close(),
        });
    }
    /**
     * Gets the timestamp of the last modification time of the file.
     *
     * @return The number of milliseconds since the Unix epoch in UTC.
     */
    async getLastModificationTime() {
        const file = await this.file();
        return file.lastModified;
    }
    /**
     * @throws Thrown when trying to delete file with no parent directory.
     */
    async remove() {
        if (this.parent === null) {
            throw new Error('Failed to delete file due to no parent directory');
        }
        return this.parent.removeEntry(this.name);
    }
    /**
     * Moves the file to given directory |dir| and given |name|.
     */
    async moveTo(dir, name) {
        const dirHandle = await dir.getHandle();
        await this.handle.move(dirHandle, name);
    }
    get name() {
        return this.handle.name;
    }
}
/**
 * Guards from name collision when creating files.
 */
const createFileJobs = new AsyncJobWithResultQueue();
/**
 * The directory entry implementation for SWA.
 */
export class DirectoryAccessEntryImpl {
    constructor(handle) {
        this.handle = handle;
    }
    get name() {
        return this.handle.name;
    }
    getHandle() {
        return Promise.resolve(this.handle);
    }
    async getFiles() {
        const results = [];
        for await (const handle of this.handle.values()) {
            if (isFileSystemFileHandle(handle)) {
                results.push(new FileAccessEntry(handle, this));
            }
        }
        return results;
    }
    async getDirectories() {
        const results = [];
        for await (const handle of this.handle.values()) {
            if (isFileSystemDirectoryHandle(handle)) {
                results.push(new DirectoryAccessEntryImpl(handle));
            }
        }
        return results;
    }
    async getFile(name) {
        const handle = await this.handle.getFileHandle(name, { create: false });
        return new FileAccessEntry(handle, this);
    }
    async exists(name) {
        try {
            await this.getFile(name);
            return true;
        }
        catch (e) {
            assert(e instanceof Error);
            // File doesn't exist.
            if (e.name === 'NotFoundError') {
                return false;
            }
            // Directory with same name exists.
            if (e.name === 'TypeMismatchError') {
                return true;
            }
            throw e;
        }
    }
    async createFile(name) {
        return createFileJobs.push(async () => {
            let uniqueName = name;
            for (let i = 0; await this.exists(uniqueName);) {
                uniqueName = name.replace(/^(.*?)(?=\.)/, `$& (${++i})`);
            }
            const handle = await this.handle.getFileHandle(uniqueName, { create: true });
            return new FileAccessEntry(handle, this);
        });
    }
    async getDirectory({ name, createIfNotExist }) {
        try {
            const handle = await this.handle.getDirectoryHandle(name, { create: createIfNotExist });
            assert(handle !== null);
            return new DirectoryAccessEntryImpl(handle);
        }
        catch (error) {
            if (!createIfNotExist && error instanceof Error &&
                error.name === 'NotFoundError') {
                return null;
            }
            throw error;
        }
    }
    async removeEntry(name) {
        if (await this.exists(name)) {
            await this.handle.removeEntry(name);
        }
    }
}
