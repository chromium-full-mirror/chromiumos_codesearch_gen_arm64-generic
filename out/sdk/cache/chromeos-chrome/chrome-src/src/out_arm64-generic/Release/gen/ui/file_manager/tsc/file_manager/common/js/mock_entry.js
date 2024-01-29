// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FileErrorToDomError } from './util.js';
/** Joins paths so that the two paths are connected by only 1 '/'. */
export function joinPath(a, b) {
    return a.replace(/\/+$/, '') + '/' + b.replace(/^\/+/, '');
}
/** Mock class for DOMFileSystem. */
export class MockFileSystem {
    /**
     * @param name Volume ID.
     * @param rootURL URL string of root which is used in MockEntry.toURL.
     */
    constructor(name, rootURL) {
        this.name = name;
        this.entries = {};
        this.entries['/'] = MockDirectoryEntry.create(this, '/');
        this.rootURL = rootURL || 'filesystem:' + name + '/';
    }
    get root() {
        return this.entries['/'];
    }
    /**
     * Creates file and directory entries for all the given entries.  Entries can
     * be either string paths or objects containing properties 'fullPath',
     * 'metadata', 'content'.  Paths ending in slashes are interpreted as
     * directories.  All intermediate directories leading up to the
     * files/directories to be created, are also created.
     * @param entries An array of either string file paths, objects containing
     *     'fullPath' and 'metadata', or Entry to populate in this file system.
     * @param clear If true clears all entries before populating.
     */
    populate(entries, clear = false) {
        if (clear) {
            this.entries = { '/': MockDirectoryEntry.create(this, '/') };
        }
        entries.forEach(entry => {
            if (entry instanceof MockEntry) {
                this.entries[entry.fullPath] = entry;
                entry.filesystem = this;
                return;
            }
            let path;
            let metadata;
            let content;
            if (typeof (entry) === 'string') {
                path = entry;
            }
            else {
                path = entry.fullPath;
                metadata = entry.metadata;
                content = entry.content;
            }
            const pathElements = path.split('/');
            pathElements.forEach((_, i) => {
                const subpath = pathElements.slice(0, i).join('/');
                if (subpath && !(subpath in this.entries)) {
                    this.entries[subpath] =
                        MockDirectoryEntry.create(this, subpath, metadata);
                }
            });
            // If the path doesn't end in a slash, create a file.
            if (!/\/$/.test(path)) {
                this.entries[path] =
                    MockFileEntry.create(this, path, metadata, content);
            }
        });
    }
    /**
     * Returns all children of the supplied directoryEntry.
     * @param directory parent directory to find children of.
     */
    findChildren(directory) {
        const parentPath = directory.fullPath.replace(/\/?$/, '/');
        const children = [];
        for (const path in this.entries) {
            if (path.indexOf(parentPath) === 0 && path !== parentPath) {
                const nextSeparator = path.indexOf('/', parentPath.length);
                // Add immediate children files and directories...
                if (nextSeparator === -1 || nextSeparator === path.length - 1) {
                    children.push(this.entries[path]);
                }
            }
        }
        return children;
    }
}
/** Base class of mock entries. */
export class MockEntry {
    constructor(filesystem, fullPath, metadata = {}) {
        this.filesystem = filesystem;
        this.fullPath = fullPath;
        this.metadata = metadata;
        this.removed = false;
        this.isFile = true;
        this.isDirectory = false;
        this.filesystem.entries[this.fullPath] = this;
        this.metadata.size ??= 0;
        this.metadata.modificationTime ??= new Date();
    }
    /** Name of the entry. */
    get name() {
        return this.fullPath.replace(/^.*\//, '');
    }
    /** Gets metadata of the entry. */
    getMetadata(onSuccess, onError) {
        if (this.filesystem.entries[this.fullPath]) {
            onSuccess?.(this.metadata);
        }
        else {
            onError?.({ name: FileErrorToDomError.NOT_FOUND_ERR });
        }
    }
    /** Returns fake URL. */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    toURL() {
        const segments = this.fullPath.split('/');
        for (let i = 0; i < segments.length; i++) {
            segments[i] = encodeURIComponent(segments[i]);
        }
        return joinPath(this.filesystem.rootURL, segments.join('/'));
    }
    /** Gets parent directory. */
    getParent(onSuccess, onError) {
        const path = this.fullPath.replace(/\/[^\/]+$/, '') || '/';
        const entry = this.filesystem.entries[path];
        if (entry) {
            onSuccess?.(entry);
        }
        else {
            onError?.({ name: FileErrorToDomError.NOT_FOUND_ERR });
        }
    }
    /**
     * Moves the entry to the directory.
     *
     * @param parent Destination directory.
     * @param newName New name.
     * @param onSuccess Callback invoked with the moved entry.
     */
    moveTo(parent, newName, onSuccess, _onError) {
        delete this.filesystem.entries[this.fullPath];
        const newPath = joinPath(parent.fullPath, newName || this.name);
        const newFs = parent.filesystem;
        // For directories, also move all descendant entries.
        if (this.isDirectory) {
            for (const e of Object.values(this.filesystem.entries)) {
                if (e.fullPath.startsWith(this.fullPath)) {
                    delete this.filesystem.entries[e.fullPath];
                    e
                        .clone(e.fullPath.replace(this.fullPath, newPath), newFs);
                }
            }
        }
        onSuccess?.(this.clone(newPath, newFs));
    }
    copyTo(parent, newName, onSuccess, _onError) {
        const entry = this.clone(joinPath(parent.fullPath, newName || this.name), parent.filesystem);
        onSuccess?.(entry);
    }
    /** Removes the entry. */
    remove(onSuccess, _onError) {
        this.removed = true;
        delete this.filesystem.entries[this.fullPath];
        onSuccess?.();
    }
    /** Removes the entry and any children. */
    removeRecursively(onSuccess, _onError) {
        this.removed = true;
        for (const path in this.filesystem.entries) {
            if (path.startsWith(this.fullPath)) {
                this.filesystem.entries[path].removed = true;
                delete this.filesystem.entries[path];
            }
        }
        onSuccess?.();
    }
    /** Asserts that the entry was removed. */
    assertRemoved() {
        if (!this.removed) {
            throw new Error('expected removed for file ' + this.name);
        }
    }
    clone(_fullPath, _fileSystem) {
        throw new Error('Not implemented');
    }
}
/** Mock class for FileEntry. */
export class MockFileEntry extends MockEntry {
    static create(filesystem, fullPath, metadata, content) {
        return new MockFileEntry(filesystem, fullPath, metadata, content);
    }
    /** Use create() instead, so the instance gets the |FileEntry| type. */
    constructor(filesystem, fullPath, metadata, content = new Blob([])) {
        super(filesystem, fullPath, metadata);
        this.content = content;
        this.isFile = true;
        this.isDirectory = false;
    }
    /** Gets a File that this object represents. */
    file(onSuccess, _onError) {
        onSuccess?.(new File([this.content], this.toURL()));
    }
    /** Gets a FileWriter. */
    createWriter(onSuccess, _onError) {
        onSuccess?.(new MockFileWriter(this));
    }
    clone(path, filesystem) {
        return MockFileEntry.create(filesystem || this.filesystem, path, this.metadata, this.content);
    }
    /** Helper to expose methods mixed in via MockEntry to the type checker. */
    asMock() {
        return this;
    }
    asFileEntry() {
        return this;
    }
}
/** Mock class for FileWriter. */
export class MockFileWriter {
    constructor(entry_) {
        this.entry_ = entry_;
        this.position = 0;
        this.length = 0;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.INIT = 0;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.WRITING = 0;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.DONE = 0;
        this.readyState = 0;
        this.error = new Error('Not implemented');
        this.onwriteend = (_e) => { };
        this.onwritestart = (_e) => { };
        this.onprogress = (_e) => { };
        this.onwrite = (_e) => { };
        this.onabort = (_e) => { };
        this.onerror = (_e) => { };
    }
    write(data) {
        this.entry_.content = data;
        this.onwriteend(new ProgressEvent('writeend', { lengthComputable: true, loaded: data.size, total: data.size }));
    }
    abort() {
        throw new Error('Not implemented');
    }
    addEventListener(_type, _callback, _options) {
        throw new Error('Not implemented');
    }
    dispatchEvent(_event) {
        throw new Error('Not implemented');
    }
    removeEventListener(_type, _callback, _options) {
        throw new Error('Not implemented');
    }
    seek(_offset) {
        throw new Error('Not implemented');
    }
    truncate(_size) {
        throw new Error('Not implemented');
    }
}
/** Mock class for DirectoryEntry. */
export class MockDirectoryEntry extends MockEntry {
    static create(filesystem, fullPath, metadata) {
        return new MockDirectoryEntry(filesystem, fullPath, metadata);
    }
    /** Use create() instead, so the instance gets the DirectoryEntry type. */
    constructor(filesystem, fullPath, metadata) {
        super(filesystem, fullPath, metadata);
        this.isFile = false;
        this.isDirectory = true;
    }
    clone(path, filesystem) {
        return MockDirectoryEntry.create(filesystem || this.filesystem, path);
    }
    /** Returns all children of the supplied directoryEntry. */
    getAllChildren() {
        return this.filesystem.findChildren(this);
    }
    /** Returns a file under the directory. */
    getEntry_(expectedClass, path, option = {}, onSuccess, onError) {
        if (this.removed) {
            onError?.({ name: FileErrorToDomError.NOT_FOUND_ERR });
            return;
        }
        const fullPath = path[0] === '/' ? path : joinPath(this.fullPath, path);
        const result = this.filesystem.entries[fullPath];
        if (result) {
            if (!(result instanceof expectedClass)) {
                onError?.({ name: FileErrorToDomError.TYPE_MISMATCH_ERR });
            }
            else if (option['create'] && option['exclusive']) {
                onError?.({ name: FileErrorToDomError.PATH_EXISTS_ERR });
            }
            else {
                onSuccess?.(result);
            }
        }
        else {
            if (!option['create']) {
                onError?.({ name: FileErrorToDomError.NOT_FOUND_ERR });
            }
            else {
                const newEntry = expectedClass.create(this.filesystem, fullPath);
                onSuccess?.(newEntry);
            }
        }
    }
    /** Returns a file under the directory. */
    getFile(path, option, onSuccess, onError) {
        this.getEntry_(MockFileEntry, path, option, onSuccess, onError);
    }
    /** Returns a directory under the directory. */
    getDirectory(path, option, onSuccess, onError) {
        this.getEntry_(MockDirectoryEntry, path, option, onSuccess, onError);
    }
    /** Creates a MockDirectoryReader for the entry. */
    createReader() {
        return new MockDirectoryReader(this.filesystem.findChildren(this));
    }
}
/** Mock class for DirectoryReader. */
export class MockDirectoryReader {
    constructor(entries_) {
        this.entries_ = entries_;
    }
    /**
     * Returns entries from the filesystem associated with this directory in
     * chunks of 2.
     */
    readEntries(onSuccess, _onError) {
        const chunk = this.entries_.splice(0, 2);
        onSuccess?.(chunk);
    }
}
