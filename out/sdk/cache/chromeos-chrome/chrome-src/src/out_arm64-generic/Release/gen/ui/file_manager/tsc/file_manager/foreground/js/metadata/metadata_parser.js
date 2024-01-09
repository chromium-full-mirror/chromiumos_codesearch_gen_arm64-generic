// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ByteReader } from './byte_reader.js';
import { ParserMetadata } from './metadata_item.js';
export class MetadataParser {
    /**
     * @param parent_ Parent object.
     * @param type_ Parser type.
     * @param urlFilter_ RegExp to match URLs.
     */
    constructor(parent_, type, urlFilter) {
        this.parent_ = parent_;
        this.type = type;
        this.urlFilter = urlFilter;
        this.mimeType = 'unknown';
        this.verbose = parent_.verbose;
    }
    /**
     * Output an error message.
     */
    error(...args) {
        this.parent_.error.apply(this.parent_, args);
    }
    /**
     * Output a log message.
     */
    log(...args) {
        this.parent_.log.apply(this.parent_, args);
    }
    /**
     * Output a log message if |verbose| flag is on.
     */
    vlog(...args) {
        if (this.verbose) {
            this.parent_.log.apply(this.parent_, args);
        }
    }
    /**
     * @return Metadata object with the minimal set of properties.
     */
    createDefaultMetadata() {
        return { type: this.type, mimeType: this.mimeType };
    }
    /**
     * Get a ByteReader for a range of bytes from file. Rejects on error.
     * @param file The file to read.
     * @param begin Starting byte (included).
     * @param end Last byte (excluded).
     */
    static async readFileBytes(file, begin, end) {
        return new ByteReader(await file.slice(begin, end).arrayBuffer());
    }
}
/**
 * Base class for image metadata parsers.
 */
export class ImageParser extends MetadataParser {
    /**
     * @param parent Parent object.
     * @param type Image type.
     * @param urlFilter RegExp to match URLs.
     */
    constructor(parent, type, urlFilter) {
        super(parent, type, urlFilter);
        this.mimeType = 'image/' + this.type;
    }
}
