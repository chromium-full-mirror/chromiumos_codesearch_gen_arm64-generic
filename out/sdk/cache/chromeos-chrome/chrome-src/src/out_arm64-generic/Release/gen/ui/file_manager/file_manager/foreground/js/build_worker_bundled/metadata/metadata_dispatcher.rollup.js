// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const Exif = {};
/**
 * Exif marks.
 * @enum {number}
 */
Exif.Mark = {
    // Start of "stream" (the actual image data).
    SOS: 0xffda,
    // Start of "frame".
    SOF: 0xffc0,
    // Start of image data.
    SOI: 0xffd8,
    // End of image data.
    EOI: 0xffd9,
    // APP0 block, most commonly JFIF data.
    APP0: 0xffe0,
    // Start of exif block.
    EXIF: 0xffe1,
};
/**
 * Exif align.
 * @enum {number}
 */
Exif.Align = {
    // Indicates little endian exif data.
    LITTLE: 0x4949,
    // Indicates big endian exif data.
    BIG: 0x4d4d,
};
/**
 * Exif tag.
 * @enum {number}
 */
Exif.Tag = {
    // First directory containing TIFF data.
    TIFF: 0x002a,
    // Pointer from TIFF to the GPS directory.
    GPSDATA: 0x8825,
    // Pointer from TIFF to the EXIF IFD.
    EXIFDATA: 0x8769,
    // Pointer from TIFF to thumbnail.
    JPG_THUMB_OFFSET: 0x0201,
    // Length of thumbnail data.
    JPG_THUMB_LENGTH: 0x0202,
    IMAGE_WIDTH: 0x0100,
    IMAGE_HEIGHT: 0x0101,
    COMPRESSION: 0x0102,
    ORIENTATION: 0x0112,
    DATETIME: 0x132,
    X_DIMENSION: 0xA002,
    Y_DIMENSION: 0xA003,
    SOFTWARE: 0x0131,
};

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @final */
class ByteReader {
    /**
     * @param {ArrayBuffer} arrayBuffer An array of buffers to be read from.
     * @param {number=} opt_offset Offset to read bytes at.
     * @param {number=} opt_length Number of bytes to read.
     */
    constructor(arrayBuffer, opt_offset, opt_length) {
        opt_offset = opt_offset || 0;
        opt_length = opt_length || (arrayBuffer.byteLength - opt_offset);
        /** @private @const @type {!DataView} */
        this.view_ = new DataView(arrayBuffer, opt_offset, opt_length);
        /** @private @type {number} */
        this.pos_ = 0;
        /** @private @const @type {!Array<number>} */
        this.seekStack_ = [];
        /** @private @type {boolean} */
        this.littleEndian_ = false;
    }
    /**
     * Throw an error if (0 > pos >= end) or if (pos + size > end).
     *
     * Static utility function.
     *
     * @param {number} pos Position in the file.
     * @param {number} size Number of bytes to read.
     * @param {number} end Maximum position to read from.
     */
    static validateRead(pos, size, end) {
        if (pos < 0 || pos >= end) {
            throw new Error('Invalid read position');
        }
        if (pos + size > end) {
            throw new Error('Read past end of buffer');
        }
    }
    /**
     * Read as a sequence of characters, returning them as a single string.
     *
     * This is a static utility function.  There is a member function with the
     * same name which side-effects the current read position.
     *
     * @param {DataView} dataView Data view instance.
     * @param {number} pos Position in bytes to read from.
     * @param {number} size Number of bytes to read.
     * @param {number=} opt_end Maximum position to read from.
     * @return {string} Read string.
     */
    static readString(dataView, pos, size, opt_end) {
        ByteReader.validateRead(pos, size, opt_end || dataView.byteLength);
        const codes = [];
        for (let i = 0; i < size; ++i) {
            codes.push(dataView.getUint8(pos + i));
        }
        return String.fromCharCode.apply(null, codes);
    }
    /**
     * Read as a sequence of characters, returning them as a single string.
     *
     * This is a static utility function.  There is a member function with the
     * same name which side-effects the current read position.
     *
     * @param {DataView} dataView Data view instance.
     * @param {number} pos Position in bytes to read from.
     * @param {number} size Number of bytes to read.
     * @param {number=} opt_end Maximum position to read from.
     * @return {string} Read string.
     */
    static readNullTerminatedString(dataView, pos, size, opt_end) {
        ByteReader.validateRead(pos, size, opt_end || dataView.byteLength);
        const codes = [];
        for (let i = 0; i < size; ++i) {
            const code = dataView.getUint8(pos + i);
            if (code == 0) {
                break;
            }
            codes.push(code);
        }
        return String.fromCharCode.apply(null, codes);
    }
    /**
     * Read as a sequence of UTF16 characters, returning them as a single string.
     *
     * This is a static utility function.  There is a member function with the
     * same name which side-effects the current read position.
     *
     * @param {DataView} dataView Data view instance.
     * @param {number} pos Position in bytes to read from.
     * @param {boolean} bom True if BOM should be parsed.
     * @param {number} size Number of bytes to read.
     * @param {number=} opt_end Maximum position to read from.
     * @return {string} Read string.
     */
    static readNullTerminatedStringUTF16(dataView, pos, bom, size, opt_end) {
        ByteReader.validateRead(pos, size, opt_end || dataView.byteLength);
        let littleEndian = false;
        let start = 0;
        if (bom) {
            littleEndian = (dataView.getUint8(pos) == 0xFF);
            start = 2;
        }
        const codes = [];
        for (let i = start; i < size; i += 2) {
            const code = dataView.getUint16(pos + i, littleEndian);
            if (code == 0) {
                break;
            }
            codes.push(code);
        }
        return String.fromCharCode.apply(null, codes);
    }
    /**
     * Read as a sequence of bytes, returning them as a single base64 encoded
     * string.
     *
     * This is a static utility function.  There is a member function with the
     * same name which side-effects the current read position.
     *
     * @param {DataView} dataView Data view instance.
     * @param {number} pos Position in bytes to read from.
     * @param {number} size Number of bytes to read.
     * @param {number=} opt_end Maximum position to read from.
     * @return {string} Base 64 encoded value.
     */
    static readBase64(dataView, pos, size, opt_end) {
        ByteReader.validateRead(pos, size, opt_end || dataView.byteLength);
        // @ts-ignore: error TS7034: Variable 'rv' implicitly has type 'any[]' in
        // some locations where its type cannot be determined.
        const rv = [];
        const chars = [];
        let padding = 0;
        for (let i = 0; i < size; /* incremented inside */) {
            let bits = dataView.getUint8(pos + (i++)) << 16;
            if (i < size) {
                bits |= dataView.getUint8(pos + (i++)) << 8;
                if (i < size) {
                    bits |= dataView.getUint8(pos + (i++));
                }
                else {
                    padding = 1;
                }
            }
            else {
                padding = 2;
            }
            chars[3] = ByteReader.base64Alphabet_[bits & 63];
            chars[2] = ByteReader.base64Alphabet_[(bits >> 6) & 63];
            chars[1] = ByteReader.base64Alphabet_[(bits >> 12) & 63];
            chars[0] = ByteReader.base64Alphabet_[(bits >> 18) & 63];
            // @ts-ignore: error TS7005: Variable 'rv' implicitly has an 'any[]' type.
            rv.push.apply(rv, chars);
        }
        if (padding > 0) {
            rv[rv.length - 1] = '=';
        }
        if (padding > 1) {
            rv[rv.length - 2] = '=';
        }
        return rv.join('');
    }
    /**
     * Read as an image encoded in a data url.
     *
     * This is a static utility function.  There is a member function with the
     * same name which side-effects the current read position.
     *
     * @param {DataView} dataView Data view instance.
     * @param {number} pos Position in bytes to read from.
     * @param {number} size Number of bytes to read.
     * @param {number=} opt_end Maximum position to read from.
     * @return {string} Image as a data url.
     */
    static readImage(dataView, pos, size, opt_end) {
        opt_end = opt_end || dataView.byteLength;
        ByteReader.validateRead(pos, size, opt_end);
        // Two bytes is enough to identify the mime type.
        const prefixToMime = {
            '\x89P': 'png',
            '\xFF\xD8': 'jpeg',
            'BM': 'bmp',
            'GI': 'gif',
        };
        const prefix = ByteReader.readString(dataView, pos, 2, opt_end);
        // @ts-ignore: error TS7053: Element implicitly has an 'any' type because
        // expression of type 'string' can't be used to index type '{ '\u0089P':
        // string; ÿØ: string; BM: string; GI: string; }'.
        const mime = prefixToMime[prefix] ||
            dataView.getUint16(pos, false).toString(16); // For debugging.
        const b64 = ByteReader.readBase64(dataView, pos, size, opt_end);
        return 'data:image/' + mime + ';base64,' + b64;
    }
    /**
     * Return true if the requested number of bytes can be read from the buffer.
     *
     * @param {number} size Number of bytes to read.
     * @return {boolean} True if allowed, false otherwise.
     */
    canRead(size) {
        return this.pos_ + size <= this.view_.byteLength;
    }
    /**
     * Return true if the current position is past the end of the buffer.
     * @return {boolean} True if EOF, otherwise false.
     */
    eof() {
        return this.pos_ >= this.view_.byteLength;
    }
    /**
     * Return true if the current position is before the beginning of the buffer.
     * @return {boolean} True if BOF, otherwise false.
     */
    bof() {
        return this.pos_ < 0;
    }
    /**
     * Return true if the current position is outside the buffer.
     * @return {boolean} True if outside, false if inside.
     */
    beof() {
        return this.pos_ >= this.view_.byteLength || this.pos_ < 0;
    }
    /**
     * Set the expected byte ordering for future reads.
     * @param {number} order Byte order. Either LITTLE_ENDIAN or BIG_ENDIAN.
     */
    setByteOrder(order) {
        this.littleEndian_ = order == ByteReader.LITTLE_ENDIAN;
    }
    /**
     * Throw an error if the reader is at an invalid position, or if a read a read
     * of |size| would put it in one.
     *
     * You may optionally pass opt_end to override what is considered to be the
     * end of the buffer.
     *
     * @param {number} size Number of bytes to read.
     * @param {number=} opt_end Maximum position to read from.
     */
    validateRead(size, opt_end) {
        if (typeof opt_end == 'undefined') {
            opt_end = this.view_.byteLength;
        }
        ByteReader.validateRead(this.pos_, size, opt_end);
    }
    /**
     * @param {number} width Number of bytes to read.
     * @param {boolean=} opt_signed True if signed, false otherwise.
     * @param {number=} opt_end Maximum position to read from.
     * @return {number} Scalar value.
     */
    readScalar(width, opt_signed, opt_end) {
        let method = opt_signed ? 'getInt' : 'getUint';
        switch (width) {
            case 1:
                method += '8';
                break;
            case 2:
                method += '16';
                break;
            case 4:
                method += '32';
                break;
            case 8:
                method += '64';
                break;
            default:
                throw new Error('Invalid width: ' + width);
        }
        this.validateRead(width, opt_end);
        // @ts-ignore: error TS7053: Element implicitly has an 'any' type because
        // expression of type 'string' can't be used to index type 'DataView'.
        const rv = this.view_[method](this.pos_, this.littleEndian_);
        this.pos_ += width;
        return rv;
    }
    /**
     * Read as a sequence of characters, returning them as a single string.
     *
     * Adjusts the current position on success.  Throws an exception if the
     * read would go past the end of the buffer.
     *
     * @param {number} size Number of bytes to read.
     * @param {number=} opt_end Maximum position to read from.
     * @return {string} String value.
     */
    readString(size, opt_end) {
        const rv = ByteReader.readString(this.view_, this.pos_, size, opt_end);
        this.pos_ += size;
        return rv;
    }
    /**
     * Read as a sequence of characters, returning them as a single string.
     *
     * Adjusts the current position on success.  Throws an exception if the
     * read would go past the end of the buffer.
     *
     * @param {number} size Number of bytes to read.
     * @param {number=} opt_end Maximum position to read from.
     * @return {string} Null-terminated string value.
     */
    readNullTerminatedString(size, opt_end) {
        const rv = ByteReader.readNullTerminatedString(this.view_, this.pos_, size, opt_end);
        this.pos_ += rv.length;
        if (rv.length < size) {
            // If we've stopped reading because we found '0' but didn't hit size limit
            // then we should skip additional '0' character
            this.pos_++;
        }
        return rv;
    }
    /**
     * Read as a sequence of UTF16 characters, returning them as a single string.
     *
     * Adjusts the current position on success.  Throws an exception if the
     * read would go past the end of the buffer.
     *
     * @param {boolean} bom True if BOM should be parsed.
     * @param {number} size Number of bytes to read.
     * @param {number=} opt_end Maximum position to read from.
     * @return {string} Read string.
     */
    readNullTerminatedStringUTF16(bom, size, opt_end) {
        const rv = ByteReader.readNullTerminatedStringUTF16(this.view_, this.pos_, bom, size, opt_end);
        if (bom) {
            // If the BOM word was present advance the position.
            this.pos_ += 2;
        }
        this.pos_ += rv.length;
        if (rv.length < size) {
            // If we've stopped reading because we found '0' but didn't hit size limit
            // then we should skip additional '0' character
            this.pos_ += 2;
        }
        return rv;
    }
    /**
     * Read as an array of numbers.
     *
     * Adjusts the current position on success.  Throws an exception if the
     * read would go past the end of the buffer.
     *
     * @param {number} size Number of bytes to read.
     * @param {number=} opt_end Maximum position to read from.
     * @param {function(new:Array<*>)=} opt_arrayConstructor Array constructor.
     * @return {Array<*>} Array of bytes.
     */
    readSlice(size, opt_end, opt_arrayConstructor) {
        this.validateRead(size, opt_end);
        const arrayConstructor = opt_arrayConstructor || Uint8Array;
        const slice = new arrayConstructor(this.view_.buffer, this.view_.byteOffset + this.pos_, size);
        this.pos_ += size;
        // @ts-ignore: error TS2322: Type 'any[] | Uint8Array' is not assignable to
        // type 'any[]'.
        return slice;
    }
    /**
     * Read as a sequence of bytes, returning them as a single base64 encoded
     * string.
     *
     * Adjusts the current position on success.  Throws an exception if the
     * read would go past the end of the buffer.
     *
     * @param {number} size Number of bytes to read.
     * @param {number=} opt_end Maximum position to read from.
     * @return {string} Base 64 encoded value.
     */
    readBase64(size, opt_end) {
        const rv = ByteReader.readBase64(this.view_, this.pos_, size, opt_end);
        this.pos_ += size;
        return rv;
    }
    /**
     * Read an image returning it as a data url.
     *
     * Adjusts the current position on success.  Throws an exception if the
     * read would go past the end of the buffer.
     *
     * @param {number} size Number of bytes to read.
     * @param {number=} opt_end Maximum position to read from.
     * @return {string} Image as a data url.
     */
    readImage(size, opt_end) {
        const rv = ByteReader.readImage(this.view_, this.pos_, size, opt_end);
        this.pos_ += size;
        return rv;
    }
    /**
     * Seek to a give position relative to opt_seekStart.
     *
     * @param {number} pos Position in bytes to seek to.
     * @param {number=} opt_seekStart Relative position in bytes.
     * @param {number=} opt_end Maximum position to seek to.
     */
    seek(pos, opt_seekStart, opt_end) {
        opt_end = opt_end || this.view_.byteLength;
        let newPos;
        if (opt_seekStart == ByteReader.SEEK_CUR) {
            newPos = this.pos_ + pos;
        }
        else if (opt_seekStart == ByteReader.SEEK_END) {
            newPos = opt_end + pos;
        }
        else {
            newPos = pos;
        }
        if (newPos < 0 || newPos > this.view_.byteLength) {
            throw new Error('Seek outside of buffer: ' + (newPos - opt_end));
        }
        this.pos_ = newPos;
    }
    /**
     * Seek to a given position relative to opt_seekStart, saving the current
     * position.
     *
     * Recover the current position with a call to seekPop.
     *
     * @param {number} pos Position in bytes to seek to.
     * @param {number=} opt_seekStart Relative position in bytes.
     */
    pushSeek(pos, opt_seekStart) {
        const oldPos = this.pos_;
        this.seek(pos, opt_seekStart);
        // Alter the seekStack_ after the call to seek(), in case it throws.
        this.seekStack_.push(oldPos);
    }
    /**
     * Undo a previous seekPush.
     */
    popSeek() {
        // @ts-ignore: error TS2345: Argument of type 'number | undefined' is not
        // assignable to parameter of type 'number'.
        this.seek(this.seekStack_.pop());
    }
    /**
     * Return the current read position.
     * @return {number} Current position in bytes.
     */
    tell() {
        return this.pos_;
    }
}
/**
 * Intel, 0x1234 is [0x34, 0x12]
 * @const @type {number}
 */
ByteReader.LITTLE_ENDIAN = 0;
/**
 * Motorola, 0x1234 is [0x12, 0x34]
 * @const @type {number}
 */
ByteReader.BIG_ENDIAN = 1;
/**
 * Seek relative to the beginning of the buffer.
 * @const @type {number}
 */
ByteReader.SEEK_BEG = 0;
/**
 * Seek relative to the current position.
 * @const @type {number}
 */
ByteReader.SEEK_CUR = 1;
/**
 * Seek relative to the end of the buffer.
 * @const @type {number}
 */
ByteReader.SEEK_END = 2;
/**
 * @private @const @type {Array<string>}
 */
// @ts-ignore: error TS2341: Property 'base64Alphabet_' is private and only
// accessible within class 'ByteReader'.
ByteReader.base64Alphabet_ =
    ('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/')
        .split('');

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @implements {MetadataParserLogger}
 */
class MetadataParser {
    /**
     * @param {!MetadataParserLogger} parent Parent object.
     * @param {string} type Parser type.
     * @param {!RegExp} urlFilter RegExp to match URLs.
     */
    constructor(parent, type, urlFilter) {
        /** @private @const @type {!MetadataParserLogger} */
        this.parent_ = parent;
        /** @public @const @type {string} */
        this.type = type;
        /** @public @const @type {!RegExp} */
        this.urlFilter = urlFilter;
        /** @public @const @type {boolean} */
        // @ts-ignore: error TS2339: Property 'verbose' does not exist on type
        // 'MetadataParserLogger'.
        this.verbose = parent.verbose;
        /** @public @type {string} */
        this.mimeType = 'unknown';
    }
    /**
     * Output an error message.
     * @param {...(Object|string)} var_args Arguments.
     */
    // @ts-ignore: error TS6133: 'var_args' is declared but its value is never
    // read.
    error(var_args) {
        // @ts-ignore: error TS2345: Argument of type 'IArguments' is not assignable
        // to parameter of type '[var_args: string | Object | undefined]'.
        this.parent_.error.apply(this.parent_, arguments);
    }
    /**
     * Output a log message.
     * @param {...(Object|string)} var_args Arguments.
     */
    // @ts-ignore: error TS6133: 'var_args' is declared but its value is never
    // read.
    log(var_args) {
        // @ts-ignore: error TS2345: Argument of type 'IArguments' is not assignable
        // to parameter of type '[var_args: string | Object | undefined]'.
        this.parent_.log.apply(this.parent_, arguments);
    }
    /**
     * Output a log message if |verbose| flag is on.
     * @param {...(Object|string)} var_args Arguments.
     */
    // @ts-ignore: error TS6133: 'var_args' is declared but its value is never
    // read.
    vlog(var_args) {
        if (this.verbose) {
            // @ts-ignore: error TS2345: Argument of type 'IArguments' is not
            // assignable to parameter of type '[var_args: string | Object |
            // undefined]'.
            this.parent_.log.apply(this.parent_, arguments);
        }
    }
    /**
     * @return {Object} Metadata object with the minimal set of properties.
     */
    createDefaultMetadata() {
        return { type: this.type, mimeType: this.mimeType };
    }
    /**
     * Utility function to read specified range of bytes from file
     * @param {File} file The file to read.
     * @param {number} begin Starting byte(included).
     * @param {number} end Last byte(excluded).
     * @param {function(File, ByteReader):void} callback Callback to invoke.
     * @param {function(string):void} onError Error handler.
     */
    static readFileBytes(file, begin, end, callback, onError) {
        const fileReader = new FileReader();
        fileReader.onerror = event => {
            onError(event.type);
        };
        fileReader.onloadend = () => {
            callback(file, new ByteReader(
            /** @type {ArrayBuffer} */ (fileReader.result)));
        };
        fileReader.readAsArrayBuffer(file.slice(begin, end));
    }
}
/**
 * Base class for image metadata parsers.
 */
class ImageParser extends MetadataParser {
    /**
     * @param {!MetadataParserLogger} parent Parent object.
     * @param {string} type Image type.
     * @param {!RegExp} urlFilter RegExp to match URLs.
     */
    constructor(parent, type, urlFilter) {
        super(parent, type, urlFilter);
        this.mimeType = 'image/' + this.type;
    }
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @final */
class ExifParser extends ImageParser {
    /**
     * @param {!MetadataParserLogger} parent Parent object.
     */
    constructor(parent) {
        super(parent, 'jpeg', /\.jpe?g$/i);
    }
    /**
     * @param {File} file File object to parse.
     * @param {!Object} metadata Metadata object for the file.
     * @param {function(!Object):void} callback Callback to be called on success.
     * @param {function((Event|string)):void} errorCallback Error callback.
     */
    parse(file, metadata, callback, errorCallback) {
        this.requestSlice(file, callback, errorCallback, metadata, 0);
    }
    /**
     * @param {File} file File object to parse.
     * @param {function(!Object):void} callback Callback to be called on success.
     * @param {function((Event|string)):void} errorCallback Error callback.
     * @param {!Object} metadata Metadata object.
     * @param {number} filePos Position to slice at.
     * @param {number=} opt_length Number of bytes to slice. By default 1 KB.
     */
    requestSlice(file, callback, errorCallback, metadata, filePos, opt_length) {
        // Read at least 1Kb so that we do not issue too many read requests.
        opt_length = Math.max(1024, opt_length || 0);
        const self = this;
        const reader = new FileReader();
        reader.onerror = errorCallback;
        reader.onload = () => {
            self.parseSlice(file, callback, errorCallback, metadata, filePos, 
            /** @type{ArrayBuffer} */ (reader.result));
        };
        reader.readAsArrayBuffer(file.slice(filePos, filePos + opt_length));
    }
    /**
     * @param {File} file File object to parse.
     * @param {function(!Object):void} callback Callback to be called on success.
     * @param {function((Event|string)):void} errorCallback Error callback.
     * @param {!Object} metadata Metadata object.
     * @param {number} filePos Position to slice at.
     * @param {ArrayBuffer} buf Buffer to be parsed.
     */
    parseSlice(file, callback, errorCallback, metadata, filePos, buf) {
        try {
            const br = new ByteReader(buf);
            if (!br.canRead(4)) {
                // We never ask for less than 4 bytes. This can only mean we reached
                // EOF.
                throw new Error('Unexpected EOF @' + (filePos + buf.byteLength));
            }
            if (filePos === 0) {
                // First slice, check for the SOI mark.
                const firstMark = this.readMark(br);
                if (firstMark !== Exif.Mark.SOI) {
                    throw new Error('Invalid file header: ' + firstMark.toString(16));
                }
            }
            const self = this;
            /**
             * @param {number=} opt_offset
             * @param {number=} opt_bytes
             */
            const reread = (opt_offset, opt_bytes) => {
                self.requestSlice(file, callback, errorCallback, metadata, filePos + br.tell() + (opt_offset || 0), opt_bytes);
            };
            while (true) {
                if (!br.canRead(4)) {
                    // Cannot read the mark and the length, request a minimum-size slice.
                    reread();
                    return;
                }
                const mark = this.readMark(br);
                if (mark === Exif.Mark.SOS) {
                    throw new Error('SOS marker found before SOF');
                }
                const markLength = this.readMarkLength(br);
                const nextSectionStart = br.tell() + markLength;
                if (!br.canRead(markLength)) {
                    // Get the entire section.
                    if (filePos + br.tell() + markLength > file.size) {
                        throw new Error('Invalid section length @' + (filePos + br.tell() - 2));
                    }
                    reread(-4, markLength + 4);
                    return;
                }
                if (mark === Exif.Mark.EXIF) {
                    this.parseExifSection(metadata, buf, br);
                }
                else if (ExifParser.isSOF_(mark)) {
                    // The most reliable size information is encoded in the SOF section.
                    br.seek(1, ByteReader.SEEK_CUR); // Skip the precision byte.
                    const height = br.readScalar(2);
                    const width = br.readScalar(2);
                    ExifParser.setImageSize(metadata, width, height);
                    callback(metadata); // We are done!
                    return;
                }
                br.seek(nextSectionStart, ByteReader.SEEK_BEG);
            }
        }
        catch (e) {
            // @ts-ignore: error TS18046: 'e' is of type 'unknown'.
            errorCallback(e.toString());
        }
    }
    /**
     * @private
     * @param {number} mark Mark to be checked.
     * @return {boolean} True if the mark is SOF.
     */
    static isSOF_(mark) {
        // There are 13 variants of SOF fragment format distinguished by the last
        // hex digit of the mark, but the part we want is always the same.
        if ((mark & ~0xF) !== Exif.Mark.SOF) {
            return false;
        }
        // If the last digit is 4, 8 or 12 it is not really a SOF.
        const type = mark & 0xF;
        return (type !== 4 && type !== 8 && type !== 12);
    }
    /**
     * @param {Object} metadata Metadata object.
     * @param {ArrayBuffer} buf Buffer to be parsed.
     * @param {ByteReader} br Byte reader to be used.
     */
    parseExifSection(metadata, buf, br) {
        const magic = br.readString(6);
        if (magic !== 'Exif\0\0') {
            // Some JPEG files may have sections marked with EXIF_MARK_EXIF
            // but containing something else (e.g. XML text). Ignore such sections.
            this.vlog('Invalid EXIF magic: ' + magic + br.readString(100));
            return;
        }
        // Offsets inside the EXIF block are based after the magic string.
        // Create a new ByteReader based on the current position to make offset
        // calculations simpler.
        br = new ByteReader(buf, br.tell());
        const order = br.readScalar(2);
        if (order === Exif.Align.LITTLE) {
            br.setByteOrder(ByteReader.LITTLE_ENDIAN);
        }
        else if (order !== Exif.Align.BIG) {
            this.log('Invalid alignment value: ' + order.toString(16));
            return;
        }
        const tag = br.readScalar(2);
        if (tag !== Exif.Tag.TIFF) {
            this.log('Invalid TIFF tag: ' + tag.toString(16));
            return;
        }
        // @ts-ignore: error TS2339: Property 'littleEndian' does not exist on type
        // 'Object'.
        metadata.littleEndian = (order === Exif.Align.LITTLE);
        // @ts-ignore: error TS2339: Property 'ifd' does not exist on type 'Object'.
        metadata.ifd = {
            image: {},
            thumbnail: {},
        };
        let directoryOffset = br.readScalar(4);
        // Image directory.
        this.vlog('Read image directory');
        br.seek(directoryOffset);
        // @ts-ignore: error TS2339: Property 'ifd' does not exist on type 'Object'.
        directoryOffset = this.readDirectory(br, metadata.ifd.image);
        // @ts-ignore: error TS2339: Property 'ifd' does not exist on type 'Object'.
        metadata.imageTransform = this.parseOrientation(metadata.ifd.image);
        // Thumbnail Directory chained from the end of the image directory.
        if (directoryOffset) {
            this.vlog('Read thumbnail directory');
            br.seek(directoryOffset);
            // @ts-ignore: error TS2339: Property 'ifd' does not exist on type
            // 'Object'.
            this.readDirectory(br, metadata.ifd.thumbnail);
            // If no thumbnail orientation is encoded, assume same orientation as
            // the primary image.
            // @ts-ignore: error TS2339: Property 'thumbnailTransform' does not exist
            // on type 'Object'.
            metadata.thumbnailTransform =
                // @ts-ignore: error TS2339: Property 'ifd' does not exist on type
                // 'Object'.
                this.parseOrientation(metadata.ifd.thumbnail) ||
                    // @ts-ignore: error TS2339: Property 'imageTransform' does not exist
                    // on type 'Object'.
                    metadata.imageTransform;
        }
        // EXIF Directory may be specified as a tag in the image directory.
        // @ts-ignore: error TS2339: Property 'ifd' does not exist on type 'Object'.
        if (Exif.Tag.EXIFDATA in metadata.ifd.image) {
            this.vlog('Read EXIF directory');
            // @ts-ignore: error TS2339: Property 'ifd' does not exist on type
            // 'Object'.
            directoryOffset = metadata.ifd.image[Exif.Tag.EXIFDATA].value;
            br.seek(directoryOffset);
            // @ts-ignore: error TS2339: Property 'ifd' does not exist on type
            // 'Object'.
            metadata.ifd.exif = {};
            // @ts-ignore: error TS2339: Property 'ifd' does not exist on type
            // 'Object'.
            this.readDirectory(br, metadata.ifd.exif);
        }
        // GPS Directory may also be linked from the image directory.
        // @ts-ignore: error TS2339: Property 'ifd' does not exist on type 'Object'.
        if (Exif.Tag.GPSDATA in metadata.ifd.image) {
            this.vlog('Read GPS directory');
            // @ts-ignore: error TS2339: Property 'ifd' does not exist on type
            // 'Object'.
            directoryOffset = metadata.ifd.image[Exif.Tag.GPSDATA].value;
            br.seek(directoryOffset);
            // @ts-ignore: error TS2339: Property 'ifd' does not exist on type
            // 'Object'.
            metadata.ifd.gps = {};
            // @ts-ignore: error TS2339: Property 'ifd' does not exist on type
            // 'Object'.
            this.readDirectory(br, metadata.ifd.gps);
        }
        // Thumbnail may be linked from the image directory.
        // @ts-ignore: error TS2339: Property 'ifd' does not exist on type 'Object'.
        if (Exif.Tag.JPG_THUMB_OFFSET in metadata.ifd.thumbnail &&
            // @ts-ignore: error TS2339: Property 'ifd' does not exist on type
            // 'Object'.
            Exif.Tag.JPG_THUMB_LENGTH in metadata.ifd.thumbnail) {
            this.vlog('Read thumbnail image');
            // @ts-ignore: error TS2339: Property 'ifd' does not exist on type
            // 'Object'.
            br.seek(metadata.ifd.thumbnail[Exif.Tag.JPG_THUMB_OFFSET].value);
            // @ts-ignore: error TS2339: Property 'thumbnailURL' does not exist on
            // type 'Object'.
            metadata.thumbnailURL =
                // @ts-ignore: error TS2339: Property 'ifd' does not exist on type
                // 'Object'.
                br.readImage(metadata.ifd.thumbnail[Exif.Tag.JPG_THUMB_LENGTH].value);
        }
        else {
            this.vlog('Image has EXIF data, but no JPG thumbnail');
        }
    }
    /**
     * @param {Object} metadata Metadata object.
     * @param {number} width Width in pixels.
     * @param {number} height Height in pixels.
     */
    static setImageSize(metadata, width, height) {
        // @ts-ignore: error TS2339: Property 'imageTransform' does not exist on
        // type 'Object'.
        if (metadata.imageTransform && metadata.imageTransform.rotate90) {
            // @ts-ignore: error TS2339: Property 'width' does not exist on type
            // 'Object'.
            metadata.width = height;
            // @ts-ignore: error TS2339: Property 'height' does not exist on type
            // 'Object'.
            metadata.height = width;
        }
        else {
            // @ts-ignore: error TS2339: Property 'width' does not exist on type
            // 'Object'.
            metadata.width = width;
            // @ts-ignore: error TS2339: Property 'height' does not exist on type
            // 'Object'.
            metadata.height = height;
        }
    }
    /**
     * @param {ByteReader} br Byte reader to be used for reading.
     * @return {number} Mark value.
     */
    readMark(br) {
        return br.readScalar(2);
    }
    /**
     * @param {ByteReader} br Bye reader to be used for reading.
     * @return {number} Size of the mark at the current position.
     */
    readMarkLength(br) {
        // Length includes the 2 bytes used to store the length.
        return br.readScalar(2) - 2;
    }
    /**
     * @param {ByteReader} br Byte reader to be used for reading.
     * @param {Object<number, Object>} tags Map of tags to be written to.
     * @return {number} Directory offset.
     */
    readDirectory(br, tags) {
        const entryCount = br.readScalar(2);
        for (let i = 0; i < entryCount; i++) {
            // @ts-ignore: error TS2315: Type 'Tag' is not generic.
            const tagId = /** @type {!Exif.Tag<number>} */ (br.readScalar(2));
            const tag = tags[tagId] = { id: tagId };
            // @ts-ignore: error TS2339: Property 'format' does not exist on type '{
            // id: any; }'.
            tag.format = br.readScalar(2);
            // @ts-ignore: error TS2339: Property 'componentCount' does not exist on
            // type '{ id: any; }'.
            tag.componentCount = br.readScalar(4);
            // @ts-ignore: error TS2345: Argument of type '{ id: any; }' is not
            // assignable to parameter of type 'ExifEntry'.
            this.readTagValue(br, tag);
        }
        return br.readScalar(4);
    }
    /**
     * @param {ByteReader} br Byte reader to be used for reading.
     * @param {ExifEntry} tag Tag object.
     */
    readTagValue(br, tag) {
        const self = this;
        /**
         * @param {number} size
         * @param {function(number)=} opt_readFunction
         * @param {boolean=} opt_signed
         */
        function safeRead(size, opt_readFunction, opt_signed) {
            try {
                unsafeRead(size, opt_readFunction, opt_signed);
            }
            catch (ex) {
                self.log('Error reading tag 0x' + tag.id.toString(16) + '/' + tag.format +
                    ', size ' + tag.componentCount + '*' + size + ' ' +
                    // @ts-ignore: error TS18046: 'ex' is of type 'unknown'.
                    (ex.stack || '<no stack>') + ': ' + ex);
                tag.value = null;
            }
        }
        /**
         * @param {number} size
         * @param {function(number)=} opt_readFunction
         * @param {boolean=} opt_signed
         */
        function unsafeRead(size, opt_readFunction, opt_signed) {
            const readFunction = opt_readFunction || (size => {
                return br.readScalar(size, opt_signed);
            });
            const totalSize = tag.componentCount * size;
            if (totalSize < 1) {
                // This is probably invalid exif data, skip it.
                tag.componentCount = 1;
                tag.value = br.readScalar(4);
                return;
            }
            if (totalSize > 4) {
                // If the total size is > 4, the next 4 bytes will be a pointer to the
                // actual data.
                br.pushSeek(br.readScalar(4));
            }
            if (tag.componentCount === 1) {
                tag.value = readFunction(size);
            }
            else {
                // Read multiple components into an array.
                tag.value = [];
                for (let i = 0; i < tag.componentCount; i++) {
                    tag.value[i] = readFunction(size);
                }
            }
            if (totalSize > 4) {
                // Go back to the previous position if we had to jump to the data.
                br.popSeek();
            }
            else if (totalSize < 4) {
                // Otherwise, if the value wasn't exactly 4 bytes, skip over the
                // unread data.
                br.seek(4 - totalSize, ByteReader.SEEK_CUR);
            }
        }
        switch (tag.format) {
            case 1: // Byte
            case 7: // Undefined
                safeRead(1);
                break;
            case 2: // String
                safeRead(1);
                if (tag.componentCount === 0) {
                    tag.value = '';
                }
                else if (tag.componentCount === 1) {
                    tag.value = String.fromCharCode(/** @type {number} */ (tag.value));
                }
                else {
                    tag.value = String.fromCharCode.apply(null, /** @type{Array<number>} */ (tag.value));
                }
                this.validateAndFixStringTag_(tag);
                break;
            case 3: // Short
                safeRead(2);
                break;
            case 4: // Long
                safeRead(4);
                break;
            case 9: // Signed Long
                safeRead(4, undefined, true);
                break;
            case 5: // Rational
                safeRead(8, () => {
                    return [br.readScalar(4), br.readScalar(4)];
                });
                break;
            case 10: // Signed Rational
                safeRead(8, () => {
                    return [br.readScalar(4, true), br.readScalar(4, true)];
                });
                break;
            default: // ???
                this.vlog('Unknown tag format 0x' + Number(tag.id).toString(16) + ': ' +
                    tag.format);
                safeRead(4);
                break;
        }
        this.vlog('Read tag: 0x' + tag.id.toString(16) + '/' + tag.format + ': ' +
            tag.value);
    }
    /**
     * Validates string tag value, and fix it if necessary.
     * @param {!ExifEntry} tag A tag to be validated and fixed.
     * @private
     */
    validateAndFixStringTag_(tag) {
        if (tag.format === 2) { // string
            // String should end with null character.
            if (tag.value.charAt(tag.value.length - 1) !== '\0') {
                tag.value += '\0';
                tag.componentCount = tag.value.length;
                this.vlog('Appended missing null character at the end of tag 0x' +
                    tag.id.toString(16) + '/' + tag.format);
            }
        }
    }
    /**
     * Transform exif-encoded orientation into a set of parameters compatible with
     * CSS and canvas transforms (scaleX, scaleY, rotation).
     *
     * @param {Object} ifd Exif property dictionary (image or thumbnail).
     * @return {Object} Orientation object.
     */
    parseOrientation(ifd) {
        // @ts-ignore: error TS7053: Element implicitly has an 'any' type because
        // expression of type 'number' can't be used to index type 'Object'.
        if (ifd[Exif.Tag.ORIENTATION]) {
            // @ts-ignore: error TS7053: Element implicitly has an 'any' type because
            // expression of type 'number' can't be used to index type 'Object'.
            const index = (ifd[Exif.Tag.ORIENTATION].value || 1) - 1;
            return {
                scaleX: ExifParser.SCALEX[index],
                scaleY: ExifParser.SCALEY[index],
                rotate90: ExifParser.ROTATE90[index],
            };
        }
        // @ts-ignore: error TS2322: Type 'null' is not assignable to type 'Object'.
        return null;
    }
}
/**
 * Map from the exif orientation value to the horizontal scale value.
 * @const @type {Array<number>}
 */
ExifParser.SCALEX = [1, -1, -1, 1, 1, 1, -1, -1];
/**
 * Map from the exif orientation value to the vertical scale value.
 * @const @type {Array<number>}
 */
ExifParser.SCALEY = [1, 1, -1, -1, -1, 1, 1, -1];
/**
 * Map from the exit orientation value to the rotation value.
 * @const @type {Array<number>}
 */
ExifParser.ROTATE90 = [0, 0, 0, 0, 1, 1, 1, 1];

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @class FunctionParallel to invoke steps in parallel.
 */
class FunctionParallel {
    /**
     * @param {string} name Name of the function.
     * @param {Array<Function>} steps Array of functions to invoke in parallel.
     * @param {MetadataParser} logger Logger object.
     * @param {function():void} callback Callback to invoke on success.
     * @param {function(string):void} failureCallback Callback to invoke on
     *     failure.
     */
    constructor(name, steps, logger, callback, failureCallback) {
        // Private variables hidden in closure
        this.currentStepIdx_ = -1;
        this.failed_ = false;
        this.steps_ = steps;
        this.callback_ = callback;
        this.failureCallback_ = failureCallback;
        this.logger = logger;
        this.name = name;
        this.remaining = this.steps_.length;
        this.nextStep = this.nextStep_.bind(this);
        this.onError = this.onError_.bind(this);
        this.apply = this.start.bind(this);
    }
    /**
     * Error handling function, which fires error callback.
     *
     * @param {string} err Error message.
     * @private
     */
    onError_(err) {
        if (!this.failed_) {
            this.failed_ = true;
            this.failureCallback_(err);
        }
    }
    /**
     * Advances to next step. This method should not be used externally. In
     * external cases should be used nextStep function, which is defined in
     * closure and thus has access to internal variables of functionsequence.
     *
     * @private
     */
    nextStep_() {
        if (--this.remaining == 0 && !this.failed_) {
            this.callback_();
        }
    }
    /**
     * This function should be called only once on start, so start all the
     * children at once
     * @param {...*} var_args Arguments to be passed to all the steps.
     */
    // @ts-ignore: error TS6133: 'var_args' is declared but its value is never
    // read.
    start(var_args) {
        this.logger.vlog('Starting [' + this.steps_.length + '] parallel tasks ' +
            'with ' + arguments.length + ' argument(s)');
        if (this.logger.verbose) {
            for (let j = 0; j < arguments.length; j++) {
                this.logger.vlog(arguments[j]);
            }
        }
        for (let i = 0; i < this.steps_.length; i++) {
            this.logger.vlog('Attempting to start step [' + this.steps_[i]?.name + ']');
            try {
                // @ts-ignore: error TS2684: The 'this' context of type 'Function |
                // undefined' is not assignable to method's 'this' of type 'Function'.
                this.steps_[i].apply(this, arguments);
            }
            catch (e) {
                // @ts-ignore: error TS18046: 'e' is of type 'unknown'.
                this.onError(e.toString());
            }
        }
    }
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @class FunctionSequence to invoke steps in sequence.
 */
class FunctionSequence {
    /**
     * @param {string} name Name of the function.
     * @param {Array<Function>} steps Array of functions to invoke in sequence.
     * @param {MetadataParser} logger Logger object.
     * @param {function():void} callback Callback to invoke on success.
     * @param {function(string):void} failureCallback Callback to invoke on
     *     failure.
     */
    constructor(name, steps, logger, callback, failureCallback) {
        // Private variables hidden in closure
        this.currentStepIdx_ = -1;
        this.failed_ = false;
        this.steps_ = steps;
        this.callback_ = callback;
        this.failureCallback_ = failureCallback;
        this.logger = logger;
        this.name = name;
        /** @public @type {boolean} */
        this.started = false;
        this.onError = this.onError_.bind(this);
        this.finish = this.finish_.bind(this);
        this.nextStep = this.nextStep_.bind(this);
        this.apply = this.apply_.bind(this);
    }
    /**
     * Sets new callback
     *
     * @param {function():void} callback New callback to call on succeed.
     */
    setCallback(callback) {
        this.callback_ = callback;
    }
    /**
     * Sets new error callback
     *
     * @param {function(string):void} failureCallback New callback to call on
     *     failure.
     */
    setFailureCallback(failureCallback) {
        this.failureCallback_ = failureCallback;
    }
    /**
     * Error handling function, which traces current error step, stops sequence
     * advancing and fires error callback.
     *
     * @param {string} err Error message.
     * @private
     */
    onError_(err) {
        this.logger.vlog('Failed step: ' + this.steps_[this.currentStepIdx_]?.name + ': ' + err);
        if (!this.failed_) {
            this.failed_ = true;
            this.failureCallback_(err);
        }
    }
    /**
     * Finishes sequence processing and jumps to the last step.
     * This method should not be used externally. In external
     * cases should be used finish function, which is defined in closure and thus
     * has access to internal variables of functionsequence.
     * @private
     */
    finish_() {
        if (!this.failed_ && this.currentStepIdx_ < this.steps_.length) {
            this.currentStepIdx_ = this.steps_.length;
            this.callback_();
        }
    }
    /**
     * Advances to next step.
     * This method should not be used externally. In external
     * cases should be used nextStep function, which is defined in closure and
     * thus has access to internal variables of functionsequence.
     * @param {...*} var_args Arguments to be passed to the next step.
     * @private
     */
    // @ts-ignore: error TS6133: 'var_args' is declared but its value is never
    // read.
    nextStep_(var_args) {
        if (this.failed_) {
            return;
        }
        if (++this.currentStepIdx_ >= this.steps_.length) {
            this.logger.vlog('Sequence ended');
            // @ts-ignore: error TS2345: Argument of type 'IArguments' is not
            // assignable to parameter of type '[]'.
            this.callback_.apply(this, arguments);
        }
        else {
            this.logger.vlog('Attempting to start step [' +
                this.steps_[this.currentStepIdx_]?.name + ']');
            try {
                this.steps_[this.currentStepIdx_]?.apply(this, arguments);
            }
            catch (e) {
                // @ts-ignore: error TS18046: 'e' is of type 'unknown'.
                this.onError(e.toString());
            }
        }
    }
    /**
     * This function should be called only once on start, so start sequence
     * pipeline
     * @param {...*} var_args Arguments to be passed to the first step.
     */
    // @ts-ignore: error TS6133: 'var_args' is declared but its value is never
    // read.
    start(var_args) {
        if (this.started) {
            throw new Error('"Start" method of FunctionSequence was called twice');
        }
        this.logger.log('Starting sequence with ' + arguments.length + ' arguments');
        this.started = true;
        // @ts-ignore: error TS2345: Argument of type 'IArguments' is not assignable
        // to parameter of type 'any[]'.
        this.nextStep.apply(this, arguments);
    }
    /**
     * Add Function object mimics to FunctionSequence
     * @private
     * @param {*} obj Object.
     * @param {Array<*>} args Arguments.
     */
    // @ts-ignore: error TS6133: 'obj' is declared but its value is never read.
    apply_(obj, args) {
        this.start.apply(this, args);
    }
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * ID3 parser.
 * @final
 */
class Id3Parser extends MetadataParser {
    /**
     * @param {!MetadataParserLogger} parent A metadata dispatcher.
     */
    constructor(parent) {
        super(parent, 'id3', /\.(mp3)$/i);
    }
    /**
     * Reads synchsafe integer.
     * 'SynchSafe' term is taken from id3 documentation.
     *
     * @param {ByteReader} reader Reader to use.
     * @param {number} length Rytes to read.
     * @return {number} Synchsafe value.
     * @private
     */
    static readSynchSafe_(reader, length) {
        let rv = 0;
        switch (length) {
            case 4:
                rv = reader.readScalar(1, false) << 21;
            case 3:
                rv |= reader.readScalar(1, false) << 14;
            case 2:
                rv |= reader.readScalar(1, false) << 7;
            case 1:
                rv |= reader.readScalar(1, false);
        }
        return rv;
    }
    /**
     * Reads 3bytes integer.
     *
     * @param {ByteReader} reader Reader to use.
     * @return {number} Uint24 value.
     * @private
     */
    static readUInt24_(reader) {
        return reader.readScalar(2, false) << 16 | reader.readScalar(1, false);
    }
    /**
     * Reads string from reader with specified encoding
     *
     * @param {ByteReader} reader Reader to use.
     * @param {number} encoding String encoding.
     * @param {number} size Maximum string size. Actual result may be shorter.
     * @return {string} String value.
     * @private
     */
    readString_(reader, encoding, size) {
        switch (encoding) {
            // @ts-ignore: error TS4111: Property 'ENCODING' comes from an index
            // signature, so it must be accessed with ['ENCODING'].
            case Id3Parser.v2.ENCODING.ISO_8859_1:
                return reader.readNullTerminatedString(size);
            // @ts-ignore: error TS4111: Property 'ENCODING' comes from an index
            // signature, so it must be accessed with ['ENCODING'].
            case Id3Parser.v2.ENCODING.UTF_16:
                return reader.readNullTerminatedStringUTF16(true, size);
            // @ts-ignore: error TS4111: Property 'ENCODING' comes from an index
            // signature, so it must be accessed with ['ENCODING'].
            case Id3Parser.v2.ENCODING.UTF_16BE:
                return reader.readNullTerminatedStringUTF16(false, size);
            // @ts-ignore: error TS4111: Property 'ENCODING' comes from an index
            // signature, so it must be accessed with ['ENCODING'].
            case Id3Parser.v2.ENCODING.UTF_8:
                // TODO: implement UTF_8.
                this.log('UTF8 encoding not supported, used ISO_8859_1 instead');
                return reader.readNullTerminatedString(size);
            default: {
                this.log('Unsupported encoding in ID3 tag: ' + encoding);
                return '';
            }
        }
    }
    /**
     * Reads text frame from reader.
     *
     * @param {ByteReader} reader Reader to use.
     * @param {number} majorVersion Major id3 version to use.
     * @param {Object} frame Frame so store data at.
     * @param {number} end Frame end position in reader.
     * @private
     */
    // @ts-ignore: error TS6133: 'majorVersion' is declared but its value is never
    // read.
    readTextFrame_(reader, majorVersion, frame, end) {
        // @ts-ignore: error TS2339: Property 'encoding' does not exist on type
        // 'Object'.
        frame.encoding = reader.readScalar(1, false, end);
        // @ts-ignore: error TS2339: Property 'encoding' does not exist on type
        // 'Object'.
        frame.value = this.readString_(reader, frame.encoding, end - reader.tell());
    }
    /**
     * Reads user defined text frame from reader.
     *
     * @param {ByteReader} reader Reader to use.
     * @param {number} majorVersion Major id3 version to use.
     * @param {Object} frame Frame so store data at.
     * @param {number} end Frame end position in reader.
     * @private
     */
    // @ts-ignore: error TS6133: 'majorVersion' is declared but its value is never
    // read.
    readUserDefinedTextFrame_(reader, majorVersion, frame, end) {
        // @ts-ignore: error TS2339: Property 'encoding' does not exist on type
        // 'Object'.
        frame.encoding = reader.readScalar(1, false, end);
        // @ts-ignore: error TS2339: Property 'description' does not exist on type
        // 'Object'.
        frame.description =
            // @ts-ignore: error TS2339: Property 'encoding' does not exist on type
            // 'Object'.
            this.readString_(reader, frame.encoding, end - reader.tell());
        // @ts-ignore: error TS2339: Property 'encoding' does not exist on type
        // 'Object'.
        frame.value = this.readString_(reader, frame.encoding, end - reader.tell());
    }
    /**
     * @param {ByteReader} reader Reader to use.
     * @param {number} majorVersion Major id3 version to use.
     * @param {Object} frame Frame so store data at.
     * @param {number} end Frame end position in reader.
     * @private
     */
    // @ts-ignore: error TS6133: 'majorVersion' is declared but its value is never
    // read.
    readPIC_(reader, majorVersion, frame, end) {
        // @ts-ignore: error TS2339: Property 'encoding' does not exist on type
        // 'Object'.
        frame.encoding = reader.readScalar(1, false, end);
        // @ts-ignore: error TS2339: Property 'format' does not exist on type
        // 'Object'.
        frame.format = reader.readNullTerminatedString(3, end - reader.tell());
        // @ts-ignore: error TS2339: Property 'pictureType' does not exist on type
        // 'Object'.
        frame.pictureType = reader.readScalar(1, false, end);
        // @ts-ignore: error TS2339: Property 'description' does not exist on type
        // 'Object'.
        frame.description =
            // @ts-ignore: error TS2339: Property 'encoding' does not exist on type
            // 'Object'.
            this.readString_(reader, frame.encoding, end - reader.tell());
        // @ts-ignore: error TS2339: Property 'format' does not exist on type
        // 'Object'.
        if (frame.format == '-->') {
            // @ts-ignore: error TS2339: Property 'imageUrl' does not exist on type
            // 'Object'.
            frame.imageUrl = reader.readNullTerminatedString(end - reader.tell());
        }
        else {
            // @ts-ignore: error TS2339: Property 'imageUrl' does not exist on type
            // 'Object'.
            frame.imageUrl = reader.readImage(end - reader.tell());
        }
    }
    /**
     * @param {ByteReader} reader Reader to use.
     * @param {number} majorVersion Major id3 version to use.
     * @param {Object} frame Frame so store data at.
     * @param {number} end Frame end position in reader.
     * @private
     */
    // @ts-ignore: error TS6133: 'majorVersion' is declared but its value is never
    // read.
    readAPIC_(reader, majorVersion, frame, end) {
        this.vlog('Extracting picture');
        // @ts-ignore: error TS2339: Property 'encoding' does not exist on type
        // 'Object'.
        frame.encoding = reader.readScalar(1, false, end);
        // @ts-ignore: error TS2339: Property 'mime' does not exist on type
        // 'Object'.
        frame.mime = reader.readNullTerminatedString(end - reader.tell());
        // @ts-ignore: error TS2339: Property 'pictureType' does not exist on type
        // 'Object'.
        frame.pictureType = reader.readScalar(1, false, end);
        // @ts-ignore: error TS2339: Property 'description' does not exist on type
        // 'Object'.
        frame.description =
            // @ts-ignore: error TS2339: Property 'encoding' does not exist on type
            // 'Object'.
            this.readString_(reader, frame.encoding, end - reader.tell());
        // @ts-ignore: error TS2339: Property 'mime' does not exist on type
        // 'Object'.
        if (frame.mime == '-->') {
            // @ts-ignore: error TS2339: Property 'imageUrl' does not exist on type
            // 'Object'.
            frame.imageUrl = reader.readNullTerminatedString(end - reader.tell());
        }
        else {
            // @ts-ignore: error TS2339: Property 'imageUrl' does not exist on type
            // 'Object'.
            frame.imageUrl = reader.readImage(end - reader.tell());
        }
    }
    /**
     * Reads string from reader with specified encoding
     *
     * @param {ByteReader} reader Reader to use.
     * @param {number} majorVersion Major id3 version to use.
     * @return {Object} Frame read.
     * @private
     */
    readFrame_(reader, majorVersion) {
        if (reader.eof()) {
            // @ts-ignore: error TS2322: Type 'null' is not assignable to type
            // 'Object'.
            return null;
        }
        const frame = {};
        reader.pushSeek(reader.tell(), ByteReader.SEEK_BEG);
        const position = reader.tell();
        frame.name = (majorVersion == 2) ? reader.readNullTerminatedString(3) :
            reader.readNullTerminatedString(4);
        if (frame.name == '') {
            // @ts-ignore: error TS2322: Type 'null' is not assignable to type
            // 'Object'.
            return null;
        }
        this.vlog('Found frame ' + (frame.name) + ' at position ' + position);
        switch (majorVersion) {
            case 2:
                frame.size = Id3Parser.readUInt24_(reader);
                frame.headerSize = 6;
                break;
            case 3:
                frame.size = reader.readScalar(4, false);
                frame.headerSize = 10;
                frame.flags = reader.readScalar(2, false);
                break;
            case 4:
                frame.size = Id3Parser.readSynchSafe_(reader, 4);
                frame.headerSize = 10;
                frame.flags = reader.readScalar(2, false);
                break;
        }
        this.vlog('Found frame [' + frame.name + '] with size [' + frame.size + ']');
        // @ts-ignore: error TS4111: Property 'HANDLERS' comes from an index
        // signature, so it must be accessed with ['HANDLERS'].
        if (Id3Parser.v2.HANDLERS[frame.name]) {
            // @ts-ignore: error TS4111: Property 'HANDLERS' comes from an index
            // signature, so it must be accessed with ['HANDLERS'].
            Id3Parser.v2.HANDLERS[frame.name].call(this, reader, majorVersion, frame, reader.tell() + frame.size);
        }
        else if (frame.name.charAt(0) == 'T' || frame.name.charAt(0) == 'W') {
            this.readTextFrame_(reader, majorVersion, frame, reader.tell() + frame.size);
        }
        reader.popSeek();
        reader.seek(frame.size + frame.headerSize, ByteReader.SEEK_CUR);
        return frame;
    }
    /**
     * @param {File} file File object to parse.
     * @param {Object} metadata Metadata object of the file.
     * @param {function(Object):void} callback Success callback.
     * @param {function(string):void} onError Error callback.
     */
    parse(file, metadata, callback, onError) {
        const self = this;
        this.log('Starting id3 parser for ' + file.name);
        const id3v1Parser = new FunctionSequence('id3v1parser', [
            /**
             * Reads last 128 bytes of file in bytebuffer,
             * which passes further.
             * In last 128 bytes should be placed ID3v1 tag if available.
             * @param {File} file File which bytes to read.
             */
            function readTail(file) {
                MetadataParser.readFileBytes(
                // @ts-ignore: error TS2683: 'this' implicitly has type 'any'
                // because it does not have a type annotation.
                file, file.size - 128, file.size, this.nextStep, this.onError);
            },
            /**
             * Attempts to extract ID3v1 tag from 128 bytes long ByteBuffer
             * @param {File} file File which tags are being extracted. Could be
             *     used for logging purposes.
             * @param {ByteReader} reader ByteReader of 128 bytes.
             */
            // @ts-ignore: error TS6133: 'file' is declared but its value is never
            // read.
            function extractId3v1(file, reader) {
                if (reader.readString(3) == 'TAG') {
                    // @ts-ignore: error TS2683: 'this' implicitly has type 'any'
                    // because it does not have a type annotation.
                    this.logger.vlog('id3v1 found');
                    // @ts-ignore: error TS2339: Property 'id3v1' does not exist on
                    // type 'Object'.
                    metadata.id3v1 = {};
                    const title = reader.readNullTerminatedString(30).trim();
                    if (title.length > 0) {
                        // @ts-ignore: error TS2339: Property 'title' does not exist on
                        // type 'Object'.
                        metadata.title = title;
                    }
                    reader.seek(3 + 30, ByteReader.SEEK_BEG);
                    const artist = reader.readNullTerminatedString(30).trim();
                    if (artist.length > 0) {
                        // @ts-ignore: error TS2339: Property 'artist' does not exist on
                        // type 'Object'.
                        metadata.artist = artist;
                    }
                    reader.seek(3 + 30 + 30, ByteReader.SEEK_BEG);
                    const album = reader.readNullTerminatedString(30).trim();
                    if (album.length > 0) {
                        // @ts-ignore: error TS2339: Property 'album' does not exist on
                        // type 'Object'.
                        metadata.album = album;
                    }
                }
                // @ts-ignore: error TS2683: 'this' implicitly has type 'any'
                // because it does not have a type annotation.
                this.nextStep();
            },
        ], 
        // @ts-ignore: error TS6133: 'error' is declared but its value is never
        // read.
        this, () => { }, error => { });
        const id3v2Parser = new FunctionSequence('id3v2parser', [
            // @ts-ignore: error TS7006: Parameter 'file' implicitly has an 'any'
            // type.
            function readHead(file) {
                MetadataParser.readFileBytes(
                // @ts-ignore: error TS2683: 'this' implicitly has type 'any'
                // because it does not have a type annotation.
                file, 0, 10, this.nextStep, this.onError);
            },
            /**
             * Check if passed array of 10 bytes contains ID3 header.
             * @param {File} file File to check and continue reading if ID3
             *     metadata found.
             * @param {ByteReader} reader Reader to fill with stream bytes.
             */
            function checkId3v2(file, reader) {
                if (reader.readString(3) == 'ID3') {
                    // @ts-ignore: error TS2683: 'this' implicitly has type 'any'
                    // because it does not have a type annotation.
                    this.logger.vlog('id3v2 found');
                    // @ts-ignore: error TS2339: Property 'id3v2' does not exist on
                    // type 'Object'.
                    const id3v2 = metadata.id3v2 = {};
                    // @ts-ignore: error TS2339: Property 'major' does not exist on
                    // type '{}'.
                    id3v2.major = reader.readScalar(1, false);
                    // @ts-ignore: error TS2339: Property 'minor' does not exist on
                    // type '{}'.
                    id3v2.minor = reader.readScalar(1, false);
                    // @ts-ignore: error TS2339: Property 'flags' does not exist on
                    // type '{}'.
                    id3v2.flags = reader.readScalar(1, false);
                    // @ts-ignore: error TS2339: Property 'size' does not exist on
                    // type '{}'.
                    id3v2.size = Id3Parser.readSynchSafe_(reader, 4);
                    MetadataParser.readFileBytes(
                    // @ts-ignore: error TS2683: 'this' implicitly has type 'any'
                    // because it does not have a type annotation.
                    file, 10, 10 + id3v2.size, this.nextStep, this.onError);
                }
                else {
                    // @ts-ignore: error TS2683: 'this' implicitly has type 'any'
                    // because it does not have a type annotation.
                    this.finish();
                }
            },
            /**
             * Extracts all ID3v2 frames from given bytebuffer.
             * @param {File} file File being parsed.
             * @param {ByteReader} reader Reader to use for metadata extraction.
             */
            // @ts-ignore: error TS6133: 'file' is declared but its value is never
            // read.
            function extractFrames(file, reader) {
                // @ts-ignore: error TS2339: Property 'id3v2' does not exist on type
                // 'Object'.
                const id3v2 = metadata.id3v2;
                if ((id3v2.major > 2) &&
                    // @ts-ignore: error TS2363: The right-hand side of an
                    // arithmetic operation must be of type 'any', 'number',
                    // 'bigint' or an enum type.
                    (id3v2.flags & Id3Parser.v2.FLAG_EXTENDED_HEADER != 0)) {
                    // Skip extended header if found
                    if (id3v2.major == 3) {
                        reader.seek(reader.readScalar(4, false) - 4);
                    }
                    else if (id3v2.major == 4) {
                        reader.seek(Id3Parser.readSynchSafe_(reader, 4) - 4);
                    }
                }
                let frame;
                while (frame = self.readFrame_(reader, id3v2.major)) {
                    // @ts-ignore: error TS2339: Property 'name' does not exist on
                    // type 'Object'.
                    metadata.id3v2[frame.name] = frame;
                }
                // @ts-ignore: error TS2683: 'this' implicitly has type 'any'
                // because it does not have a type annotation.
                this.nextStep();
            },
            /**
             * Adds 'description' object to metadata.
             * 'description' used to unify different parsers and make
             * metadata parser-aware.
             * Description is array if value-type pairs. Type should be used
             * to properly format value before displaying to user.
             */
            function prepareDescription() {
                // @ts-ignore: error TS2339: Property 'id3v2' does not exist on type
                // 'Object'.
                const id3v2 = metadata.id3v2;
                if (id3v2['APIC']) {
                    // @ts-ignore: error TS2339: Property 'thumbnailURL' does not
                    // exist on type 'Object'.
                    metadata.thumbnailURL = id3v2['APIC'].imageUrl;
                }
                else if (id3v2['PIC']) {
                    // @ts-ignore: error TS2339: Property 'thumbnailURL' does not
                    // exist on type 'Object'.
                    metadata.thumbnailURL = id3v2['PIC'].imageUrl;
                }
                // @ts-ignore: error TS2339: Property 'description' does not exist
                // on type 'Object'.
                metadata.description = [];
                for (const key in id3v2) {
                    // @ts-ignore: error TS4111: Property 'MAPPERS' comes from an
                    // index signature, so it must be accessed with ['MAPPERS'].
                    if (typeof (Id3Parser.v2.MAPPERS[key]) != 'undefined' &&
                        id3v2[key].value.trim().length > 0) {
                        // @ts-ignore: error TS2339: Property 'description' does not
                        // exist on type 'Object'.
                        metadata.description.push({
                            // @ts-ignore: error TS4111: Property 'MAPPERS' comes from an
                            // index signature, so it must be accessed with ['MAPPERS'].
                            key: Id3Parser.v2.MAPPERS[key],
                            value: id3v2[key].value.trim(),
                        });
                    }
                }
                /**
                 * @param {string} propName
                 * @param {...string} tags
                 */
                // @ts-ignore: error TS6133: 'tags' is declared but its value is
                // never read.
                function extract(propName, tags) {
                    for (let i = 1; i != arguments.length; i++) {
                        const tag = id3v2[arguments[i]];
                        if (tag && tag.value) {
                            // @ts-ignore: error TS7053: Element implicitly has an 'any'
                            // type because expression of type 'string' can't be used to
                            // index type 'Object'.
                            metadata[propName] = tag.value;
                            break;
                        }
                    }
                }
                extract('album', 'TALB', 'TAL');
                extract('title', 'TIT2', 'TT2');
                extract('artist', 'TPE1', 'TP1');
                // @ts-ignore: error TS7006: Parameter 'b' implicitly has an 'any'
                // type.
                metadata.description.sort((a, b) => {
                    return Id3Parser.METADATA_ORDER.indexOf(a.key) -
                        Id3Parser.METADATA_ORDER.indexOf(b.key);
                });
                // @ts-ignore: error TS2683: 'this' implicitly has type 'any'
                // because it does not have a type annotation.
                this.nextStep();
            },
        ], 
        // @ts-ignore: error TS6133: 'error' is declared but its value is never
        // read.
        this, () => { }, error => { });
        const metadataParser = new FunctionParallel(
        // @ts-ignore: error TS2322: Type 'FunctionSequence' is not assignable
        // to type 'Function'.
        'mp3metadataParser', [id3v1Parser, id3v2Parser], this, () => {
            callback.call(null, metadata);
        }, onError);
        id3v1Parser.setCallback(metadataParser.nextStep);
        id3v2Parser.setCallback(metadataParser.nextStep);
        id3v1Parser.setFailureCallback(metadataParser.onError);
        id3v2Parser.setFailureCallback(metadataParser.onError);
        this.vlog('Passed argument : ' + file);
        metadataParser.start(file);
    }
}
/**
 * Metadata order to use for metadata generation
 * @type {Array<string>}
 * @const
 */
Id3Parser.METADATA_ORDER = [
    'ID3_TITLE',
    'ID3_LEAD_PERFORMER',
    'ID3_YEAR',
    'ID3_ALBUM',
    'ID3_TRACK_NUMBER',
    'ID3_BPM',
    'ID3_COMPOSER',
    'ID3_DATE',
    'ID3_PLAYLIST_DELAY',
    'ID3_LYRICIST',
    'ID3_FILE_TYPE',
    'ID3_TIME',
    'ID3_LENGTH',
    'ID3_FILE_OWNER',
    'ID3_BAND',
    'ID3_COPYRIGHT',
    'ID3_OFFICIAL_AUDIO_FILE_WEBPAGE',
    'ID3_OFFICIAL_ARTIST',
    'ID3_OFFICIAL_AUDIO_SOURCE_WEBPAGE',
    'ID3_PUBLISHERS_OFFICIAL_WEBPAGE',
];
/**
 * Id3v1 constants.
 * @type {Record<string, *>}
 */
Id3Parser.v1 = {
    /**
     * Genres list as described in id3 documentation. We aren't going to
     * localize this list, because at least in Russian (and I think most
     * other languages), translation exists at least for 10% and most time
     * translation would degrade to transliteration.
     */
    GENRES: [
        'Blues',
        'Classic Rock',
        'Country',
        'Dance',
        'Disco',
        'Funk',
        'Grunge',
        'Hip-Hop',
        'Jazz',
        'Metal',
        'New Age',
        'Oldies',
        'Other',
        'Pop',
        'R&B',
        'Rap',
        'Reggae',
        'Rock',
        'Techno',
        'Industrial',
        'Alternative',
        'Ska',
        'Death Metal',
        'Pranks',
        'Soundtrack',
        'Euro-Techno',
        'Ambient',
        'Trip-Hop',
        'Vocal',
        'Jazz+Funk',
        'Fusion',
        'Trance',
        'Classical',
        'Instrumental',
        'Acid',
        'House',
        'Game',
        'Sound Clip',
        'Gospel',
        'Noise',
        'AlternRock',
        'Bass',
        'Soul',
        'Punk',
        'Space',
        'Meditative',
        'Instrumental Pop',
        'Instrumental Rock',
        'Ethnic',
        'Gothic',
        'Darkwave',
        'Techno-Industrial',
        'Electronic',
        'Pop-Folk',
        'Eurodance',
        'Dream',
        'Southern Rock',
        'Comedy',
        'Cult',
        'Gangsta',
        'Top 40',
        'Christian Rap',
        'Pop/Funk',
        'Jungle',
        'Native American',
        'Cabaret',
        'New Wave',
        'Psychadelic',
        'Rave',
        'Showtunes',
        'Trailer',
        'Lo-Fi',
        'Tribal',
        'Acid Punk',
        'Acid Jazz',
        'Polka',
        'Retro',
        'Musical',
        'Rock & Roll',
        'Hard Rock',
        'Folk',
        'Folk-Rock',
        'National Folk',
        'Swing',
        'Fast Fusion',
        'Bebob',
        'Latin',
        'Revival',
        'Celtic',
        'Bluegrass',
        'Avantgarde',
        'Gothic Rock',
        'Progressive Rock',
        'Psychedelic Rock',
        'Symphonic Rock',
        'Slow Rock',
        'Big Band',
        'Chorus',
        'Easy Listening',
        'Acoustic',
        'Humour',
        'Speech',
        'Chanson',
        'Opera',
        'Chamber Music',
        'Sonata',
        'Symphony',
        'Booty Bass',
        'Primus',
        'Porn Groove',
        'Satire',
        'Slow Jam',
        'Club',
        'Tango',
        'Samba',
        'Folklore',
        'Ballad',
        'Power Ballad',
        'Rhythmic Soul',
        'Freestyle',
        'Duet',
        'Punk Rock',
        'Drum Solo',
        'A capella',
        'Euro-House',
        'Dance Hall',
        'Goa',
        'Drum & Bass',
        'Club-House',
        'Hardcore',
        'Terror',
        'Indie',
        'BritPop',
        'Negerpunk',
        'Polsk Punk',
        'Beat',
        'Christian Gangsta Rap',
        'Heavy Metal',
        'Black Metal',
        'Crossover',
        'Contemporary Christian',
        'Christian Rock',
        'Merengue',
        'Salsa',
        'Thrash Metal',
        'Anime',
        'Jpop',
        'Synthpop',
    ],
};
/**
 * Id3v2 constants.
 * @type {Record<string, *>}
 */
Id3Parser.v2 = {
    FLAG_EXTENDED_HEADER: 1 << 5,
    ENCODING: {
        /**
         * ISO-8859-1 [ISO-8859-1]. Terminated with $00.
         *
         * @const
         * @type {number}
         */
        ISO_8859_1: 0,
        /**
         * [UTF-16] encoded Unicode [UNICODE] with BOM. All
         * strings in the same frame SHALL have the same byteorder.
         * Terminated with $00 00.
         *
         * @const
         * @type {number}
         */
        UTF_16: 1,
        /**
         * UTF-16BE [UTF-16] encoded Unicode [UNICODE] without BOM.
         * Terminated with $00 00.
         *
         * @const
         * @type {number}
         */
        UTF_16BE: 2,
        /**
         * UTF-8 [UTF-8] encoded Unicode [UNICODE]. Terminated with $00.
         *
         * @const
         * @type {number}
         */
        UTF_8: 3,
    },
    HANDLERS: {
        // User defined text information frame
        // @ts-ignore: error TS2341: Property 'readUserDefinedTextFrame_' is private
        // and only accessible within class 'Id3Parser'.
        TXX: Id3Parser.prototype.readUserDefinedTextFrame_,
        // User defined URL link frame
        // @ts-ignore: error TS2341: Property 'readUserDefinedTextFrame_' is private
        // and only accessible within class 'Id3Parser'.
        WXX: Id3Parser.prototype.readUserDefinedTextFrame_,
        // User defined text information frame
        // @ts-ignore: error TS2341: Property 'readUserDefinedTextFrame_' is private
        // and only accessible within class 'Id3Parser'.
        TXXX: Id3Parser.prototype.readUserDefinedTextFrame_,
        // User defined URL link frame
        // @ts-ignore: error TS2341: Property 'readUserDefinedTextFrame_' is private
        // and only accessible within class 'Id3Parser'.
        WXXX: Id3Parser.prototype.readUserDefinedTextFrame_,
        // User attached image
        // @ts-ignore: error TS2341: Property 'readPIC_' is private and only
        // accessible within class 'Id3Parser'.
        PIC: Id3Parser.prototype.readPIC_,
        // User attached image
        // @ts-ignore: error TS2341: Property 'readAPIC_' is private and only
        // accessible within class 'Id3Parser'.
        APIC: Id3Parser.prototype.readAPIC_,
    },
    MAPPERS: {
        TALB: 'ID3_ALBUM',
        TBPM: 'ID3_BPM',
        TCOM: 'ID3_COMPOSER',
        TDAT: 'ID3_DATE',
        TDLY: 'ID3_PLAYLIST_DELAY',
        TEXT: 'ID3_LYRICIST',
        TFLT: 'ID3_FILE_TYPE',
        TIME: 'ID3_TIME',
        TIT2: 'ID3_TITLE',
        TLEN: 'ID3_LENGTH',
        TOWN: 'ID3_FILE_OWNER',
        TPE1: 'ID3_LEAD_PERFORMER',
        TPE2: 'ID3_BAND',
        TRCK: 'ID3_TRACK_NUMBER',
        TYER: 'ID3_YEAR',
        WCOP: 'ID3_COPYRIGHT',
        WOAF: 'ID3_OFFICIAL_AUDIO_FILE_WEBPAGE',
        WOAR: 'ID3_OFFICIAL_ARTIST',
        WOAS: 'ID3_OFFICIAL_AUDIO_SOURCE_WEBPAGE',
        WPUB: 'ID3_PUBLISHERS_OFFICIAL_WEBPAGE',
    },
};

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Base class for image metadata parsers that only need to look at a short
 * fragment at the start of the file.
 * @abstract
 */
class SimpleImageParser extends ImageParser {
    /**
     * @param {!MetadataParserLogger} parent Parent object.
     * @param {string} type Image type.
     * @param {!RegExp} urlFilter RegExp to match URLs.
     * @param {number} headerSize Size of header.
     */
    constructor(parent, type, urlFilter, headerSize) {
        super(parent, type, urlFilter);
        /** @public @const @type {number} */
        this.headerSize = headerSize;
    }
    /**
     * @param {File} file File to be parses.
     * @param {Object} metadata Metadata object of the file.
     * @param {function(Object):void} callback Success callback.
     * @param {function(string):void} errorCallback Error callback.
     */
    parse(file, metadata, callback, errorCallback) {
        const self = this;
        // @ts-ignore: error TS6133: 'file' is declared but its value is never read.
        MetadataParser.readFileBytes(file, 0, this.headerSize, (file, br) => {
            try {
                self.parseHeader(metadata, br);
                callback(metadata);
            }
            catch (e) {
                // @ts-ignore: error TS18046: 'e' is of type 'unknown'.
                errorCallback(e.toString());
            }
        }, errorCallback);
    }
    /**
     * Parse header of an image. Inherited class must implement this.
     * @abstract
     * @param {Object} metadata Dictionary to store the parsed metadata.
     * @param {ByteReader} byteReader Reader for header binary data.
     */
    // @ts-ignore: error TS6133: 'byteReader' is declared but its value is never
    // read.
    parseHeader(metadata, byteReader) { }
}
/**
 * Parser for the header of png files.
 * @final
 */
class PngParser extends SimpleImageParser {
    /**
     * @param {!MetadataParserLogger} parent Parent object.
     */
    constructor(parent) {
        super(parent, 'png', /\.png$/i, 24);
    }
    /**
     * @override
     */
    // @ts-ignore: error TS7006: Parameter 'br' implicitly has an 'any' type.
    parseHeader(metadata, br) {
        br.setByteOrder(ByteReader.BIG_ENDIAN);
        const signature = br.readString(8);
        if (signature != '\x89PNG\x0D\x0A\x1A\x0A') {
            throw new Error('Invalid PNG signature: ' + signature);
        }
        br.seek(12);
        const ihdr = br.readString(4);
        if (ihdr != 'IHDR') {
            throw new Error('Missing IHDR chunk');
        }
        metadata.width = br.readScalar(4);
        metadata.height = br.readScalar(4);
    }
}
/**
 * Parser for the header of bmp files.
 * @final
 */
class BmpParser extends SimpleImageParser {
    /**
     * @param {!MetadataParserLogger} parent Parent object.
     */
    constructor(parent) {
        super(parent, 'bmp', /\.bmp$/i, 28);
    }
    /**
     * @override
     */
    // @ts-ignore: error TS7006: Parameter 'br' implicitly has an 'any' type.
    parseHeader(metadata, br) {
        br.setByteOrder(ByteReader.LITTLE_ENDIAN);
        const signature = br.readString(2);
        if (signature != 'BM') {
            throw new Error('Invalid BMP signature: ' + signature);
        }
        br.seek(18);
        metadata.width = br.readScalar(4);
        metadata.height = br.readScalar(4);
    }
}
/**
 * Parser for the header of gif files.
 * @final
 */
class GifParser extends SimpleImageParser {
    /**
     * @param {!MetadataParserLogger} parent Parent object.
     */
    constructor(parent) {
        super(parent, 'gif', /\.Gif$/i, 10);
    }
    /**
     * @override
     */
    // @ts-ignore: error TS7006: Parameter 'br' implicitly has an 'any' type.
    parseHeader(metadata, br) {
        br.setByteOrder(ByteReader.LITTLE_ENDIAN);
        const signature = br.readString(6);
        if (!signature.match(/GIF8(7|9)a/)) {
            throw new Error('Invalid GIF signature: ' + signature);
        }
        metadata.width = br.readScalar(2);
        metadata.height = br.readScalar(2);
    }
}
/**
 * Parser for the header of webp files.
 * @final
 */
class WebpParser extends SimpleImageParser {
    /**
     * @param {!MetadataParserLogger} parent Parent object.
     */
    constructor(parent) {
        super(parent, 'webp', /\.webp$/i, 30);
    }
    /**
     * @override
     */
    // @ts-ignore: error TS7006: Parameter 'br' implicitly has an 'any' type.
    parseHeader(metadata, br) {
        br.setByteOrder(ByteReader.LITTLE_ENDIAN);
        const riffSignature = br.readString(4);
        if (riffSignature != 'RIFF') {
            throw new Error('Invalid RIFF signature: ' + riffSignature);
        }
        br.seek(8);
        const webpSignature = br.readString(4);
        if (webpSignature != 'WEBP') {
            throw new Error('Invalid WEBP signature: ' + webpSignature);
        }
        const chunkFormat = br.readString(4);
        switch (chunkFormat) {
            // VP8 lossy bitstream format.
            case 'VP8 ':
                br.seek(23);
                const lossySignature = br.readScalar(2) | (br.readScalar(1) << 16);
                if (lossySignature != 0x2a019d) {
                    throw new Error('Invalid VP8 lossy bitstream signature: ' + lossySignature);
                }
                {
                    const dimensionBits = br.readScalar(4);
                    metadata.width = dimensionBits & 0x3fff;
                    metadata.height = (dimensionBits >> 16) & 0x3fff;
                }
                break;
            // VP8 lossless bitstream format.
            case 'VP8L':
                br.seek(20);
                const losslessSignature = br.readScalar(1);
                if (losslessSignature != 0x2f) {
                    throw new Error('Invalid VP8 lossless bitstream signature: ' + losslessSignature);
                }
                {
                    const dimensionBits = br.readScalar(4);
                    metadata.width = (dimensionBits & 0x3fff) + 1;
                    metadata.height = ((dimensionBits >> 14) & 0x3fff) + 1;
                }
                break;
            // VP8 extended file format.
            case 'VP8X':
                br.seek(24);
                // Read 24-bit value. ECMAScript assures left-to-right evaluation order.
                metadata.width = (br.readScalar(2) | (br.readScalar(1) << 16)) + 1;
                metadata.height = (br.readScalar(2) | (br.readScalar(1) << 16)) + 1;
                break;
            default:
                throw new Error('Invalid chunk format: ' + chunkFormat);
        }
    }
}
/**
 * Parser for the header of .ico icon files.
 * @final
 */
class IcoParser extends SimpleImageParser {
    /**
     * @param {!MetadataParserLogger} parent Parent metadata dispatcher object.
     */
    constructor(parent) {
        super(parent, 'ico', /\.ico$/i, 8);
    }
    /**
     * @override
     */
    // @ts-ignore: error TS7006: Parameter 'byteReader' implicitly has an 'any'
    // type.
    parseHeader(metadata, byteReader) {
        byteReader.setByteOrder(ByteReader.LITTLE_ENDIAN);
        const signature = byteReader.readString(4);
        if (signature !== '\x00\x00\x00\x01') {
            throw new Error('Invalid ICO signature: ' + signature);
        }
        byteReader.seek(2);
        metadata.width = byteReader.readScalar(1);
        metadata.height = byteReader.readScalar(1);
    }
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @final */
class MpegParser extends MetadataParser {
    /**
     * @param {!MetadataParserLogger} parent Parent object.
     */
    constructor(parent) {
        super(parent, 'mpeg', /\.(mp4|m4v|m4a|mpe?g4?)$/i);
        this.mimeType = 'video/mpeg';
    }
    /**
     * @param {ByteReader} br ByteReader instance.
     * @param {number=} opt_end End of atom position.
     * @return {number} Atom size.
     */
    static readAtomSize(br, opt_end) {
        const pos = br.tell();
        if (opt_end) {
            // Assert that opt_end <= buffer end.
            // When supplied, opt_end is the end of the enclosing atom and is used to
            // check the correct nesting.
            br.validateRead(opt_end - pos);
        }
        const size = br.readScalar(4, false, opt_end);
        if (size < MpegParser.HEADER_SIZE) {
            throw new Error('atom too short (' + size + ') @' + pos);
        }
        if (opt_end && pos + size > opt_end) {
            throw new Error('atom too long (' + size + '>' + (opt_end - pos) + ') @' + pos);
        }
        return size;
    }
    /**
     * @param {ByteReader} br ByteReader instance.
     * @param {number=} opt_end End of atom position.
     * @return {string} Atom name.
     */
    static readAtomName(br, opt_end) {
        return br.readString(4, opt_end).toLowerCase();
    }
    /**
     * @param {Object} metadata Metadata object.
     * @return {Object} Root of the parser tree.
     */
    static createRootParser(metadata) {
        // @ts-ignore: error TS7006: Parameter 'name' implicitly has an 'any' type.
        function findParentAtom(atom, name) {
            for (;;) {
                atom = atom.parent;
                if (!atom) {
                    return null;
                }
                if (atom.name == name) {
                    return atom;
                }
            }
        }
        // @ts-ignore: error TS7006: Parameter 'atom' implicitly has an 'any' type.
        function parseFtyp(br, atom) {
            // @ts-ignore: error TS2339: Property 'brand' does not exist on type
            // 'Object'.
            metadata.brand = br.readString(4, atom.end);
        }
        // @ts-ignore: error TS7006: Parameter 'atom' implicitly has an 'any' type.
        function parseMvhd(br, atom) {
            const version = br.readScalar(4, false, atom.end);
            const offset = (version == 0) ? 8 : 16;
            br.seek(offset, ByteReader.SEEK_CUR);
            const timescale = br.readScalar(4, false, atom.end);
            const duration = br.readScalar(4, false, atom.end);
            // @ts-ignore: error TS2339: Property 'duration' does not exist on type
            // 'Object'.
            metadata.duration = duration / timescale;
        }
        // @ts-ignore: error TS7006: Parameter 'atom' implicitly has an 'any' type.
        function parseHdlr(br, atom) {
            br.seek(8, ByteReader.SEEK_CUR);
            findParentAtom(atom, 'trak').trackType = br.readString(4, atom.end);
        }
        // @ts-ignore: error TS7006: Parameter 'atom' implicitly has an 'any' type.
        function parseStsd(br, atom) {
            const track = findParentAtom(atom, 'trak');
            if (track && track.trackType == 'vide') {
                br.seek(40, ByteReader.SEEK_CUR);
                // @ts-ignore: error TS2339: Property 'width' does not exist on type
                // 'Object'.
                metadata.width = br.readScalar(2, false, atom.end);
                // @ts-ignore: error TS2339: Property 'height' does not exist on type
                // 'Object'.
                metadata.height = br.readScalar(2, false, atom.end);
            }
        }
        // @ts-ignore: error TS7006: Parameter 'atom' implicitly has an 'any' type.
        function parseDataString(name, br, atom) {
            br.seek(8, ByteReader.SEEK_CUR);
            // @ts-ignore: error TS7053: Element implicitly has an 'any' type because
            // expression of type 'any' can't be used to index type 'Object'.
            metadata[name] = br.readString(atom.end - br.tell(), atom.end);
        }
        // @ts-ignore: error TS7006: Parameter 'atom' implicitly has an 'any' type.
        function parseCovr(br, atom) {
            br.seek(8, ByteReader.SEEK_CUR);
            // @ts-ignore: error TS2339: Property 'thumbnailURL' does not exist on
            // type 'Object'.
            metadata.thumbnailURL = br.readImage(atom.end - br.tell(), atom.end);
        }
        // 'meta' atom can occur at one of the several places in the file structure.
        const parseMeta = {
            ilst: {
                '©nam': { data: parseDataString.bind(null, 'title') },
                '©alb': { data: parseDataString.bind(null, 'album') },
                '©art': { data: parseDataString.bind(null, 'artist') },
                'covr': { data: parseCovr },
            },
            versioned: true,
        };
        // main parser for the entire file structure.
        return {
            ftyp: parseFtyp,
            moov: {
                mvhd: parseMvhd,
                trak: {
                    mdia: {
                        hdlr: parseHdlr,
                        minf: {
                            stbl: { stsd: parseStsd },
                        },
                    },
                    meta: parseMeta,
                },
                udta: {
                    meta: parseMeta,
                },
                meta: parseMeta,
            },
            meta: parseMeta,
        };
    }
    /**
     * @param {File} file File.
     * @param {Object} metadata Metadata.
     * @param {function(Object):void} callback Success callback.
     * @param {function((ProgressEvent|string)):void} onError Error callback.
     */
    parse(file, metadata, callback, onError) {
        const rootParser = MpegParser.createRootParser(metadata);
        // Kick off the processing by reading the first atom's header.
        this.requestRead(rootParser, file, 0, MpegParser.HEADER_SIZE, null, onError, callback.bind(null, metadata));
    }
    /**
     * @param {function(ByteReader, Object):void|Object} parser Parser tree node.
     * @param {ByteReader} br ByteReader instance.
     * @param {Object} atom Atom descriptor.
     * @param {number} filePos File position of the atom start.
     */
    applyParser(parser, br, atom, filePos) {
        if (this.verbose) {
            // @ts-ignore: error TS2339: Property 'name' does not exist on type
            // 'Object'.
            let path = atom.name;
            // @ts-ignore: error TS2339: Property 'parent' does not exist on type
            // 'Object'.
            for (let p = atom.parent; p && p.name; p = p.parent) {
                path = p.name + '.' + path;
            }
            let action;
            if (!parser) {
                action = 'skipping ';
            }
            else if (parser instanceof Function) {
                action = 'parsing  ';
            }
            else {
                action = 'recursing';
            }
            // @ts-ignore: error TS2339: Property 'start' does not exist on type
            // 'Object'.
            const start = atom.start - MpegParser.HEADER_SIZE;
            this.vlog(path + ': ' +
                // @ts-ignore: error TS2339: Property 'end' does not exist on type
                // 'Object'.
                '@' + (filePos + start) + ':' + (atom.end - start), action);
        }
        if (parser) {
            if (parser instanceof Function) {
                // @ts-ignore: error TS2339: Property 'start' does not exist on type
                // 'Object'.
                br.pushSeek(atom.start);
                parser(br, atom);
                br.popSeek();
            }
            else {
                // @ts-ignore: error TS2339: Property 'versioned' does not exist on type
                // 'Object'.
                if (parser.versioned) {
                    // @ts-ignore: error TS2339: Property 'start' does not exist on type
                    // 'Object'.
                    atom.start += 4;
                }
                this.parseMpegAtomsInRange(parser, br, atom, filePos);
            }
        }
    }
    /**
     * @param {function(ByteReader, Object):void|Object} parser Parser tree node.
     * @param {ByteReader} br ByteReader instance.
     * @param {Object} parentAtom Parent atom descriptor.
     * @param {number} filePos File position of the atom start.
     */
    parseMpegAtomsInRange(parser, br, parentAtom, filePos) {
        let count = 0;
        // @ts-ignore: error TS2339: Property 'end' does not exist on type 'Object'.
        for (let offset = parentAtom.start; offset != parentAtom.end;) {
            if (count++ > 100) {
                // Most likely we are looping through a corrupt file.
                throw new Error(
                // @ts-ignore: error TS2339: Property 'name' does not exist on type
                // 'Object'.
                'too many child atoms in ' + parentAtom.name + ' @' + offset);
            }
            br.seek(offset);
            // @ts-ignore: error TS2339: Property 'end' does not exist on type
            // 'Object'.
            const size = MpegParser.readAtomSize(br, parentAtom.end);
            // @ts-ignore: error TS2339: Property 'end' does not exist on type
            // 'Object'.
            const name = MpegParser.readAtomName(br, parentAtom.end);
            this.applyParser(
            // @ts-ignore: error TS7053: Element implicitly has an 'any' type
            // because expression of type 'string' can't be used to index type
            // 'Object | ((arg0: ByteReader, arg1: Object) => any)'.
            parser[name], br, {
                start: offset + MpegParser.HEADER_SIZE,
                end: offset + size,
                name: name,
                parent: parentAtom,
            }, filePos);
            offset += size;
        }
    }
    /**
     * @param {Object} rootParser Parser definition.
     * @param {File} file File.
     * @param {number} filePos Start position in the file.
     * @param {number} size Atom size.
     * @param {string?} name Atom name.
     * @param {function((ProgressEvent|string)):void} onError Error callback.
     * @param {function():void} onSuccess Success callback.
     */
    requestRead(rootParser, file, filePos, size, name, onError, onSuccess) {
        const self = this;
        const reader = new FileReader();
        reader.onerror = onError;
        // @ts-ignore: error TS6133: 'event' is declared but its value is never
        // read.
        reader.onload = event => {
            self.processTopLevelAtom(
            /** @type {ArrayBuffer} */ (reader.result), rootParser, file, filePos, size, name, onError, onSuccess);
        };
        this.vlog('reading @' + filePos + ':' + size);
        reader.readAsArrayBuffer(file.slice(filePos, filePos + size));
    }
    /**
     * @param {ArrayBuffer} buf Data buffer.
     * @param {Object} rootParser Parser definition.
     * @param {File} file File.
     * @param {number} filePos Start position in the file.
     * @param {number} size Atom size.
     * @param {string?} name Atom name.
     * @param {function((ProgressEvent|string)):void} onError Error callback.
     * @param {function():void} onSuccess Success callback.
     */
    processTopLevelAtom(buf, rootParser, file, filePos, size, name, onError, onSuccess) {
        try {
            const br = new ByteReader(buf);
            // the header has already been read.
            const atomEnd = size - MpegParser.HEADER_SIZE;
            const bufLength = buf.byteLength;
            // Check the available data size. It should be either exactly
            // what we requested or HEADER_SIZE bytes less (for the last atom).
            if (bufLength != atomEnd && bufLength != size) {
                throw new Error('Read failure @' + filePos + ', ' +
                    'requested ' + size + ', read ' + bufLength);
            }
            // Process the top level atom.
            if (name) { // name is null only the first time.
                this.applyParser(
                // @ts-ignore: error TS7053: Element implicitly has an 'any' type
                // because expression of type 'string' can't be used to index type
                // 'Object'.
                rootParser[name], br, { start: 0, end: atomEnd, name: name }, filePos);
            }
            filePos += bufLength;
            if (bufLength == size) {
                // The previous read returned everything we asked for, including
                // the next atom header at the end of the buffer.
                // Parse this header and schedule the next read.
                br.seek(-MpegParser.HEADER_SIZE, ByteReader.SEEK_END);
                let nextSize = MpegParser.readAtomSize(br);
                const nextName = MpegParser.readAtomName(br);
                // If we do not have a parser for the next atom, skip the content and
                // read only the header (the one after the next).
                // @ts-ignore: error TS7053: Element implicitly has an 'any' type
                // because expression of type 'string' can't be used to index type
                // 'Object'.
                if (!rootParser[nextName]) {
                    filePos += nextSize - MpegParser.HEADER_SIZE;
                    nextSize = MpegParser.HEADER_SIZE;
                }
                this.requestRead(rootParser, file, filePos, nextSize, nextName, onError, onSuccess);
            }
            else {
                // The previous read did not return the next atom header, EOF reached.
                this.vlog('EOF @' + filePos);
                onSuccess();
            }
        }
        catch (e) {
            // @ts-ignore: error TS18046: 'e' is of type 'unknown'.
            onError(e.toString());
        }
    }
}
/**
 * Size of the atom header.
 */
MpegParser.HEADER_SIZE = 8;

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Dispatches metadata requests to the correct parser.
 * @implements {MetadataParserLogger}
 */
class MetadataDispatcher {
    /***
     * @param {Object} port Worker port.
     */
    constructor(port) {
        this.port_ = port;
        // @ts-ignore: error TS2339: Property 'onmessage' does not exist on type
        // 'Object'.
        this.port_.onmessage = this.onMessage.bind(this);
        /**
         * Verbose logging for the dispatcher.
         *
         * Individual parsers also take this as their default verbosity setting.
         * @public @type {boolean}
         */
        this.verbose = false;
        const patterns = [];
        this.parserInstances_ = [];
        /** @type {!Array<function(new:MetadataParser, !MetadataParserLogger)>} */
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
        this.messageHandlers_ = {
            init: this.init_.bind(this),
            request: this.request_.bind(this),
        };
    }
    /**
     * |init| message handler.
     * @private
     */
    init_() {
        // Inform our owner that we're done initializing.
        // If we need to pass more data back, we can add it to the param array.
        this.postMessage('initialized', [this.parserRegexp_]);
        this.vlog('initialized with URL filter ' + this.parserRegexp_);
    }
    /**
     * |request| message handler.
     * @param {string} fileURL File URL.
     * @private
     */
    request_(fileURL) {
        try {
            // @ts-ignore: error TS7006: Parameter 'metadata' implicitly has an 'any'
            // type.
            this.processOneFile(fileURL, function callback(metadata) {
                // @ts-ignore: error TS2683: 'this' implicitly has type 'any' because it
                // does not have a type annotation.
                this.postMessage('result', [fileURL, metadata]);
            }.bind(this));
        }
        catch (ex) {
            // @ts-ignore: error TS2345: Argument of type 'unknown' is not assignable
            // to parameter of type 'string | Object'.
            this.error(fileURL, ex);
        }
    }
    /**
     * Indicate to the caller that an operation has failed.
     *
     * No other messages relating to the failed operation should be sent.
     * @param {...(Object|string)} var_args Arguments.
     */
    // @ts-ignore: error TS6133: 'var_args' is declared but its value is never
    // read.
    error(var_args) {
        // @ts-ignore: error TS2345: Argument of type 'IArguments' is not assignable
        // to parameter of type 'unknown[]'.
        const ary = Array.apply(null, arguments);
        // @ts-ignore: error TS2345: Argument of type 'unknown[]' is not assignable
        // to parameter of type 'Object[]'.
        this.postMessage('error', ary);
    }
    /**
     * Send a log message to the caller.
     *
     * Callers must not parse log messages for control flow.
     * @param {...(Object|string)} var_args Arguments.
     */
    // @ts-ignore: error TS6133: 'var_args' is declared but its value is never
    // read.
    log(var_args) {
        // @ts-ignore: error TS2345: Argument of type 'IArguments' is not assignable
        // to parameter of type 'unknown[]'.
        const ary = Array.apply(null, arguments);
        // @ts-ignore: error TS2345: Argument of type 'unknown[]' is not assignable
        // to parameter of type 'Object[]'.
        this.postMessage('log', ary);
    }
    /**
     * Send a log message to the caller only if this.verbose is true.
     * @param {...(Object|string)} var_args Arguments.
     */
    // @ts-ignore: error TS6133: 'var_args' is declared but its value is never
    // read.
    vlog(var_args) {
        if (this.verbose) {
            // @ts-ignore: error TS2345: Argument of type 'IArguments' is not
            // assignable to parameter of type '(string | Object)[]'.
            this.log.apply(this, arguments);
        }
    }
    /**
     * Post a properly formatted message to the caller.
     * @param {string} verb Message type descriptor.
     * @param {Array<Object>} args Arguments array.
     */
    postMessage(verb, args) {
        // @ts-ignore: error TS2339: Property 'postMessage' does not exist on type
        // 'Object'.
        this.port_.postMessage({ verb: verb, arguments: args });
    }
    /**
     * Message handler.
     * @param {Event} event Event object.
     */
    onMessage(event) {
        // @ts-ignore: error TS2339: Property 'data' does not exist on type 'Event'.
        const data = event.data;
        if (this.messageHandlers_.hasOwnProperty(data.verb)) {
            // @ts-ignore: error TS7053: Element implicitly has an 'any' type because
            // expression of type 'any' can't be used to index type '{ init: () =>
            // void; request: (fileURL: string) => void; }'.
            this.messageHandlers_[data.verb].apply(this, data.arguments);
        }
        else {
            this.log('Unknown message from client: ' + data.verb, data);
        }
    }
    /**
     * @param {string} fileURL File URL.
     * @param {function(Object):void} callback Completion callback.
     */
    processOneFile(fileURL, callback) {
        const self = this;
        let currentStep = -1;
        /**
         * @param {...*} var_args Arguments.
         */
        // @ts-ignore: error TS6133: 'var_args' is declared but its value is never
        // read.
        function nextStep(var_args) {
            // @ts-ignore: error TS2532: Object is possibly 'undefined'.
            self.vlog('nextStep: ' + steps[currentStep + 1].name);
            // @ts-ignore: error TS2684: The 'this' context of type '((entry: any,
            // parser: any) => void) | undefined' is not assignable to method's 'this'
            // of type '(this: this, entry?: any, parser?: any) => void'.
            steps[++currentStep].apply(self, arguments);
        }
        // @ts-ignore: error TS7034: Variable 'metadata' implicitly has type 'any'
        // in some locations where its type cannot be determined.
        let metadata;
        /**
         * @param {*} err An error.
         * @param {string=} opt_stepName Step name.
         */
        function onError(err, opt_stepName) {
            self.error(
            // @ts-ignore: error TS2532: Object is possibly 'undefined'.
            fileURL, opt_stepName || steps[currentStep].name, err.toString(), 
            // @ts-ignore: error TS7005: Variable 'metadata' implicitly has an
            // 'any' type.
            metadata);
        }
        const steps = [
            // Step one, find the parser matching the url.
            function detectFormat() {
                for (let i = 0; i != self.parserInstances_.length; i++) {
                    const parser = self.parserInstances_[i];
                    // @ts-ignore: error TS18048: 'parser' is possibly 'undefined'.
                    if (fileURL.match(parser.urlFilter)) {
                        // Create the metadata object as early as possible so that we can
                        // pass it with the error message.
                        // @ts-ignore: error TS18048: 'parser' is possibly 'undefined'.
                        metadata = parser.createDefaultMetadata();
                        nextStep(parser);
                        return;
                    }
                }
                onError('unsupported format');
            },
            // Step two, turn the url into an entry.
            // @ts-ignore: error TS7006: Parameter 'parser' implicitly has an 'any'
            // type.
            function getEntry(parser) {
                // @ts-ignore: error TS7006: Parameter 'entry' implicitly has an 'any'
                // type.
                globalThis.webkitResolveLocalFileSystemURL(fileURL, entry => {
                    nextStep(entry, parser);
                }, onError);
            },
            // Step three, turn the entry into a file.
            // @ts-ignore: error TS7006: Parameter 'parser' implicitly has an 'any'
            // type.
            function getFile(entry, parser) {
                // @ts-ignore: error TS7006: Parameter 'file' implicitly has an 'any'
                // type.
                entry.file(file => {
                    nextStep(file, parser);
                }, onError);
            },
            // Step four, parse the file content.
            // @ts-ignore: error TS7006: Parameter 'parser' implicitly has an 'any'
            // type.
            function parseContent(file, parser) {
                // @ts-ignore: error TS7005: Variable 'metadata' implicitly has an 'any'
                // type.
                metadata.fileSize = file.size;
                try {
                    // @ts-ignore: error TS7005: Variable 'metadata' implicitly has an
                    // 'any' type.
                    parser.parse(file, metadata, callback, onError);
                }
                catch (e) {
                    // @ts-ignore: error TS18046: 'e' is of type 'unknown'.
                    onError(e.stack);
                }
            },
        ];
        // @ts-ignore: error TS2555: Expected at least 1 arguments, but got 0.
        nextStep();
    }
}
// Webworker spec says that the worker global object is called self.  That's
// a terrible name since we use it all over the chrome codebase to capture
// the 'this' keyword in lambdas.
const global = self;
if (global.constructor.name == 'SharedWorkerGlobalScope') {
    global.addEventListener('connect', e => {
        // @ts-ignore: error TS2339: Property 'ports' does not exist on type
        // 'Event'.
        const port = e.ports[0];
        new MetadataDispatcher(port);
        port.start();
    });
}
else {
    // Non-shared worker.
    new MetadataDispatcher(global);
}
//# sourceMappingURL=metadata_dispatcher.rollup.js.map
