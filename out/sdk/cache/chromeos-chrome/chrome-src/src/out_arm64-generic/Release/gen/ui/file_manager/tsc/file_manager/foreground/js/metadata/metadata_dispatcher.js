// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ExifParser } from './exif_parser.js';
import { Id3Parser } from './id3_parser.js';
import { BmpParser, GifParser, IcoParser, PngParser, WebpParser } from './image_parsers.js';
import { ParserMetadata } from './metadata_item.js';
import { MetadataParser } from './metadata_parser.js';
import { MpegParser } from './mpeg_parser.js';
// Helper function to type entries as FileEntry. We redefine it here because
// importing entry_utils.js has some transitive side effects that access objects
// not accessible in a shared worker.
function isFileEntry(entry) {
    return entry.isFile;
}
/**
 * Dispatches metadata requests to the correct parser.
 */
class MetadataDispatcher {
    /***
     * @param port Worker port.
     */
    constructor(port_) {
        this.port_ = port_;
        /**
         * Verbose logging for the dispatcher.
         *
         * Individual parsers also take this as their default verbosity setting.
         */
        this.verbose = false;
        // Explicitly type this as a record so we can index into this object with a
        // string.
        this.messageHandlers_ = {
            init: this.init_.bind(this),
            request: this.request_.bind(this),
        };
        this.port_.onmessage = this.onMessage.bind(this);
        const patterns = [];
        this.parserInstances_ = [];
        const parserClasses = [
            BmpParser,
            ExifParser,
            GifParser,
            IcoParser,
            Id3Parser,
            MpegParser,
            PngParser,
            WebpParser,
        ];
        for (const parserClass of parserClasses) {
            const parser = new parserClass(this);
            this.parserInstances_.push(parser);
            patterns.push(parser.urlFilter.source);
        }
        this.parserRegexp_ = new RegExp('(' + patterns.join('|') + ')', 'i');
    }
    /**
     * |init| message handler.
     */
    init_() {
        // Inform our owner that we're done initializing.
        // If we need to pass more data back, we can add it to the param array.
        // TODO(cleanup): parserRegexp_ looks unused in content_metadata_provider
        // and in this file, too.
        this.postMessage('initialized', [this.parserRegexp_]);
        this.vlog('initialized with URL filter ' + this.parserRegexp_);
    }
    /**
     * |request| message handler.
     * @param fileURL File URL.
     */
    request_(fileURL) {
        try {
            this.processOneFile(fileURL, (metadata) => {
                console.log(metadata);
                this.postMessage('result', [fileURL, metadata]);
            });
        }
        catch (ex) {
            this.error(fileURL, ex);
        }
    }
    /**
     * Indicate to the caller that an operation has failed.
     *
     * No other messages relating to the failed operation should be sent.
     */
    error(...args) {
        // TODO(cleanup): Strictly type these arguments to the [url, step, cause]
        // format that ContentMetadataProvider expects.
        this.postMessage('error', args);
    }
    /**
     * Send a log message to the caller.
     *
     * Callers must not parse log messages for control flow.
     */
    log(...args) {
        this.postMessage('log', args);
    }
    /**
     * Send a log message to the caller only if this.verbose is true.
     */
    vlog(...args) {
        if (this.verbose) {
            this.log(...args);
        }
    }
    /**
     * Post a properly formatted message to the caller.
     * @param verb Message type descriptor.
     * @param args Arguments array.
     */
    postMessage(verb, args) {
        this.port_.postMessage({ verb: verb, arguments: args });
    }
    /**
     * Message handler.
     * @param event Event object.
     */
    onMessage(event) {
        const data = event.data;
        const handler = this.messageHandlers_[data.verb];
        if (handler instanceof Function) {
            handler.apply(this, data.arguments);
        }
        else {
            this.log('Unknown message from client: ' + data.verb, data);
        }
    }
    detectFormat_(fileURL) {
        for (const parser of this.parserInstances_) {
            if (fileURL.match(parser.urlFilter)) {
                return parser;
            }
        }
        return null;
    }
    /**
     * @param fileURL File URL.
     * @param callback Completion callback.
     */
    async processOneFile(fileURL, callback) {
        // Step one, find the parser matching the url.
        const parser = this.detectFormat_(fileURL);
        if (!parser) {
            this.error(fileURL, 'detectFormat', 'unsupported format');
            return;
        }
        // Create the metadata object as early as possible so that we can
        // pass it with the error message.
        const metadata = parser.createDefaultMetadata();
        // Step two, turn the url into an entry.
        const entry = await new Promise((resolve, reject) => globalThis.webkitResolveLocalFileSystemURL(fileURL, resolve, reject));
        if (!isFileEntry(entry)) {
            this.error(fileURL, 'getEntry', 'url does not refer a file', metadata);
            return;
        }
        // Step three, turn the entry into a file.
        const file = await new Promise(entry.file.bind(entry));
        // Step four, parse the file.
        metadata.fileSize = file.size;
        try {
            parser.parse(file, metadata, callback, (error) => this.error(fileURL, 'parseContent', error));
        }
        catch (e) {
            this.error(fileURL, 'parseContent', e.stack);
        }
    }
}
// Webworker spec says that the worker global object is called self.  That's
// a terrible name since we use it all over the chrome codebase to capture
// the 'this' keyword in lambdas.
const global = self;
if (global.constructor.name === 'SharedWorkerGlobalScope') {
    global.addEventListener('connect', e => {
        const port = e.ports[0];
        new MetadataDispatcher(port);
        port.start();
    });
}
else {
    // Non-shared worker.
    new MetadataDispatcher(global);
}
