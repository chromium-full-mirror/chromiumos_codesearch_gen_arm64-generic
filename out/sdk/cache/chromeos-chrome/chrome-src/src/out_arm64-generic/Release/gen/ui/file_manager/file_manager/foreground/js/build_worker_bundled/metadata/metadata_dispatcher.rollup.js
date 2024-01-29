// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ByteReader {
    /**
     * @param arrayBuffer An array of buffers to be read from.
     * @param offset Offset to read bytes at.
     * @param length Number of bytes to read.
     */
    constructor(arrayBuffer, offset = 0, length) {
        this.pos_ = 0;
        this.seekStack_ = [];
        this.littleEndian_ = false;
        length = length || (arrayBuffer.byteLength - offset);
        this.view_ = new DataView(arrayBuffer, offset, length);
    }
    /**
     * Throw an error if (0 > pos >= end) or if (pos + size > end).
     *
     * Static utility function.
     *
     * @param pos Position in the file.
     * @param size Number of bytes to read.
     * @param end Maximum position to read from.
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
     * @param dataView Data view instance.
     * @param pos Position in bytes to read from.
     * @param size Number of bytes to read.
     * @param end Maximum position to read from.
     * @return Read string.
     */
    static readString(dataView, pos, size, end) {
        ByteReader.validateRead(pos, size, end || dataView.byteLength);
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
     * @param dataView Data view instance.
     * @param pos Position in bytes to read from.
     * @param size Number of bytes to read.
     * @param end Maximum position to read from.
     * @return Read string.
     */
    static readNullTerminatedString(dataView, pos, size, end) {
        ByteReader.validateRead(pos, size, end || dataView.byteLength);
        const codes = [];
        for (let i = 0; i < size; ++i) {
            const code = dataView.getUint8(pos + i);
            if (code === 0) {
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
     * @param dataView Data view instance.
     * @param pos Position in bytes to read from.
     * @param bom True if BOM should be parsed.
     * @param size Number of bytes to read.
     * @param end Maximum position to read from.
     * @return Read string.
     */
    static readNullTerminatedStringUtf16(dataView, pos, bom, size, end) {
        ByteReader.validateRead(pos, size, end || dataView.byteLength);
        let littleEndian = false;
        let start = 0;
        if (bom) {
            littleEndian = (dataView.getUint8(pos) === 0xFF);
            start = 2;
        }
        const codes = [];
        for (let i = start; i < size; i += 2) {
            const code = dataView.getUint16(pos + i, littleEndian);
            if (code === 0) {
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
     * @param dataView Data view instance.
     * @param pos Position in bytes to read from.
     * @param size Number of bytes to read.
     * @param end Maximum position to read from.
     * @return Base 64 encoded value.
     */
    static readBase64(dataView, pos, size, end) {
        ByteReader.validateRead(pos, size, end || dataView.byteLength);
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
            chars[3] = BASE64_ALPHABET[bits & 63];
            chars[2] = BASE64_ALPHABET[(bits >> 6) & 63];
            chars[1] = BASE64_ALPHABET[(bits >> 12) & 63];
            chars[0] = BASE64_ALPHABET[(bits >> 18) & 63];
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
     * @param dataView Data view instance.
     * @param pos Position in bytes to read from.
     * @param size Number of bytes to read.
     * @param end Maximum position to read from.
     * @return Image as a data url.
     */
    static readImage(dataView, pos, size, end) {
        end = end || dataView.byteLength;
        ByteReader.validateRead(pos, size, end);
        // Two bytes is enough to identify the mime type.
        const prefixToMime = {
            '\x89P': 'png',
            '\xFF\xD8': 'jpeg',
            'BM': 'bmp',
            'GI': 'gif',
        };
        const prefix = ByteReader.readString(dataView, pos, 2, end);
        const mime = prefixToMime[prefix] ||
            dataView.getUint16(pos, false).toString(16); // For debugging.
        const b64 = ByteReader.readBase64(dataView, pos, size, end);
        return 'data:image/' + mime + ';base64,' + b64;
    }
    /**
     * Return true if the requested number of bytes can be read from the buffer.
     *
     * @param size Number of bytes to read.
     * @return True if allowed, false otherwise.
     */
    canRead(size) {
        return this.pos_ + size <= this.view_.byteLength;
    }
    /**
     * Return true if the current position is past the end of the buffer.
     * @return True if EOF, otherwise false.
     */
    eof() {
        return this.pos_ >= this.view_.byteLength;
    }
    /**
     * Return true if the current position is before the beginning of the buffer.
     * @return True if BOF, otherwise false.
     */
    bof() {
        return this.pos_ < 0;
    }
    /**
     * Return true if the current position is outside the buffer.
     * @return True if outside, false if inside.
     */
    beof() {
        return this.pos_ >= this.view_.byteLength || this.pos_ < 0;
    }
    /**
     * Set the expected byte ordering for future reads.
     * @param order Byte order. Either LITTLE_ENDIAN or BIG_ENDIAN.
     */
    setByteOrder(order) {
        this.littleEndian_ = order === ByteOrder.LITTLE_ENDIAN;
    }
    /**
     * Throw an error if the reader is at an invalid position, or if a read a read
     * of |size| would put it in one.
     *
     * You may optionally pass |end| to override what is considered to be the
     * end of the buffer.
     *
     * @param size Number of bytes to read.
     * @param end Maximum position to read from.
     */
    validateRead(size, end) {
        if (typeof end === 'undefined') {
            end = this.view_.byteLength;
        }
        ByteReader.validateRead(this.pos_, size, end);
    }
    /**
     * @param width Number of bytes to read.
     * @param signed True if signed, false otherwise.
     * @param end Maximum position to read from.
     * @return Scalar value.
     */
    readScalar(width, signed, end) {
        this.validateRead(width, end);
        const method = WIDTH_TO_DATA_VIEW_METHOD[width][signed ? 1 : 0];
        let rv;
        if (method === 'getInt8' || method === 'getUint8') {
            rv = this.view_[method](this.pos_);
        }
        else {
            rv = this.view_[method](this.pos_, this.littleEndian_);
        }
        this.pos_ += width;
        return rv;
    }
    /**
     * Read as a sequence of characters, returning them as a single string.
     *
     * Adjusts the current position on success.  Throws an exception if the
     * read would go past the end of the buffer.
     *
     * @param size Number of bytes to read.
     * @param end Maximum position to read from.
     * @return String value.
     */
    readString(size, end) {
        const rv = ByteReader.readString(this.view_, this.pos_, size, end);
        this.pos_ += size;
        return rv;
    }
    /**
     * Read as a sequence of characters, returning them as a single string.
     *
     * Adjusts the current position on success.  Throws an exception if the
     * read would go past the end of the buffer.
     *
     * @param size Number of bytes to read.
     * @param end Maximum position to read from.
     * @return Null-terminated string value.
     */
    readNullTerminatedString(size, end) {
        const rv = ByteReader.readNullTerminatedString(this.view_, this.pos_, size, end);
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
     * @param bom True if BOM should be parsed.
     * @param size Number of bytes to read.
     * @param end Maximum position to read from.
     * @return Read string.
     */
    readNullTerminatedStringUtf16(bom, size, end) {
        const rv = ByteReader.readNullTerminatedStringUtf16(this.view_, this.pos_, bom, size, end);
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
     * Read as a sequence of bytes, returning them as a single base64 encoded
     * string.
     *
     * Adjusts the current position on success.  Throws an exception if the
     * read would go past the end of the buffer.
     *
     * @param size Number of bytes to read.
     * @param end Maximum position to read from.
     * @return Base 64 encoded value.
     */
    readBase64(size, end) {
        const rv = ByteReader.readBase64(this.view_, this.pos_, size, end);
        this.pos_ += size;
        return rv;
    }
    /**
     * Read an image returning it as a data url.
     *
     * Adjusts the current position on success.  Throws an exception if the
     * read would go past the end of the buffer.
     *
     * @param size Number of bytes to read.
     * @param end Maximum position to read from.
     * @return Image as a data url.
     */
    readImage(size, end) {
        const rv = ByteReader.readImage(this.view_, this.pos_, size, end);
        this.pos_ += size;
        return rv;
    }
    /**
     * Seek to a give position relative to seekStart.
     *
     * @param pos Position in bytes to seek to.
     * @param seekStart Relative position in bytes.
     * @param end Maximum position to seek to.
     */
    seek(pos, seekStart = SeekOrigin.SEEK_BEG, end) {
        end = end || this.view_.byteLength;
        let newPos;
        if (seekStart === SeekOrigin.SEEK_CUR) {
            newPos = this.pos_ + pos;
        }
        else if (seekStart === SeekOrigin.SEEK_END) {
            newPos = end + pos;
        }
        else {
            newPos = pos;
        }
        if (newPos < 0 || newPos > this.view_.byteLength) {
            throw new Error('Seek outside of buffer: ' + (newPos - end));
        }
        this.pos_ = newPos;
    }
    /**
     * Seek to a given position relative to seekStart, saving the current
     * position.
     *
     * Recover the current position with a call to seekPop.
     *
     * @param pos Position in bytes to seek to.
     * @param seekStart Relative position in bytes.
     */
    pushSeek(pos, seekStart) {
        const oldPos = this.pos_;
        this.seek(pos, seekStart);
        // Alter the seekStack_ after the call to seek(), in case it throws.
        this.seekStack_.push(oldPos);
    }
    /**
     * Undo a previous seekPush.
     */
    popSeek() {
        const lastSeek = this.seekStack_.pop();
        if (lastSeek !== undefined) {
            this.seek(lastSeek);
        }
    }
    /**
     * Return the current read position.
     * @return Current position in bytes.
     */
    tell() {
        return this.pos_;
    }
}
var ByteOrder;
(function (ByteOrder) {
    // Intel, 0x1234 is [0x34, 0x12]
    ByteOrder[ByteOrder["LITTLE_ENDIAN"] = 0] = "LITTLE_ENDIAN";
    // Motorola, 0x1234 is [0x12, 0x34]
    ByteOrder[ByteOrder["BIG_ENDIAN"] = 1] = "BIG_ENDIAN";
})(ByteOrder || (ByteOrder = {}));
var SeekOrigin;
(function (SeekOrigin) {
    // Seek relative to the beginning of the buffer.
    SeekOrigin[SeekOrigin["SEEK_BEG"] = 0] = "SEEK_BEG";
    // Seek relative to the current position.
    SeekOrigin[SeekOrigin["SEEK_CUR"] = 1] = "SEEK_CUR";
    // Seek relative to the end of the buffer.
    SeekOrigin[SeekOrigin["SEEK_END"] = 2] = "SEEK_END";
})(SeekOrigin || (SeekOrigin = {}));
const BASE64_ALPHABET = ('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/')
    .split('');
const WIDTH_TO_DATA_VIEW_METHOD = {
    1: ['getUint8', 'getInt8'],
    2: ['getUint16', 'getInt16'],
    4: ['getUint32', 'getInt32'],
};

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Exif marks.
 */
var ExifMark;
(function (ExifMark) {
    // Start of "stream" (the actual image data).
    ExifMark[ExifMark["SOS"] = 65498] = "SOS";
    // Start of "frame".
    ExifMark[ExifMark["SOF"] = 65472] = "SOF";
    // Start of image data.
    ExifMark[ExifMark["SOI"] = 65496] = "SOI";
    // End of image data.
    ExifMark[ExifMark["EOI"] = 65497] = "EOI";
    // APP0 block, most commonly JFIF data.
    ExifMark[ExifMark["APP0"] = 65504] = "APP0";
    // Start of exif block.
    ExifMark[ExifMark["EXIF"] = 65505] = "EXIF";
})(ExifMark || (ExifMark = {}));
/**
 * Exif align.
 */
var ExifAlign;
(function (ExifAlign) {
    // Indicates little endian exif data.
    ExifAlign[ExifAlign["LITTLE"] = 18761] = "LITTLE";
    // Indicates big endian exif data.
    ExifAlign[ExifAlign["BIG"] = 19789] = "BIG";
})(ExifAlign || (ExifAlign = {}));
/**
 * Exif tag.
 */
var ExifTag;
(function (ExifTag) {
    // First directory containing TIFF data.
    ExifTag[ExifTag["TIFF"] = 42] = "TIFF";
    // Pointer from TIFF to the GPS directory.
    ExifTag[ExifTag["GPSDATA"] = 34853] = "GPSDATA";
    // Pointer from TIFF to the EXIF IFD.
    ExifTag[ExifTag["EXIFDATA"] = 34665] = "EXIFDATA";
    // Pointer from TIFF to thumbnail.
    ExifTag[ExifTag["JPG_THUMB_OFFSET"] = 513] = "JPG_THUMB_OFFSET";
    // Length of thumbnail data.
    ExifTag[ExifTag["JPG_THUMB_LENGTH"] = 514] = "JPG_THUMB_LENGTH";
    ExifTag[ExifTag["IMAGE_WIDTH"] = 256] = "IMAGE_WIDTH";
    ExifTag[ExifTag["IMAGE_HEIGHT"] = 257] = "IMAGE_HEIGHT";
    ExifTag[ExifTag["COMPRESSION"] = 258] = "COMPRESSION";
    ExifTag[ExifTag["MAKE"] = 271] = "MAKE";
    ExifTag[ExifTag["MODEL"] = 272] = "MODEL";
    ExifTag[ExifTag["ORIENTATION"] = 274] = "ORIENTATION";
    ExifTag[ExifTag["DATETIME"] = 306] = "DATETIME";
    ExifTag[ExifTag["X_DIMENSION"] = 40962] = "X_DIMENSION";
    ExifTag[ExifTag["Y_DIMENSION"] = 40963] = "Y_DIMENSION";
    ExifTag[ExifTag["SOFTWARE"] = 305] = "SOFTWARE";
})(ExifTag || (ExifTag = {}));

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class MetadataParser {
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
class ImageParser extends MetadataParser {
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

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @final */
class ExifParser extends ImageParser {
    /**
     * @param parent Parent object.
     */
    constructor(parent) {
        super(parent, 'jpeg', /\.jpe?g$/i);
    }
    /**
     * @param file File object to parse.
     * @param metadata Metadata object for the file.
     * @param callback Callback to be called on success.
     * @param errorCallback Error callback.
     */
    parse(file, metadata, callback, errorCallback) {
        this.requestSlice(file, callback, errorCallback, metadata, 0);
    }
    /**
     * @param file File object to parse.
     * @param callback Callback to be called on success.
     * @param errorCallback Error callback.
     * @param metadata Metadata object.
     * @param filePos Position to slice at.
     * @param length Number of bytes to slice. By default 1 KB.
     */
    requestSlice(file, callback, errorCallback, metadata, filePos, length) {
        // Read at least 1Kb so that we do not issue too many read requests.
        length = Math.max(1024, length || 0);
        const self = this;
        const reader = new FileReader();
        reader.onerror = errorCallback;
        reader.onload = () => {
            self.parseSlice(file, callback, errorCallback, metadata, filePos, reader.result);
        };
        reader.readAsArrayBuffer(file.slice(filePos, filePos + length));
    }
    /**
     * @param file File object to parse.
     * @param callback Callback to be called on success.
     * @param errorCallback Error callback.
     * @param metadata Metadata object.
     * @param filePos Position to slice at.
     * @param buf Buffer to be parsed.
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
                if (firstMark !== ExifMark.SOI) {
                    throw new Error('Invalid file header: ' + firstMark.toString(16));
                }
            }
            const self = this;
            /**
             */
            const reread = (offset, bytes) => {
                self.requestSlice(file, callback, errorCallback, metadata, filePos + br.tell() + (offset || 0), bytes);
            };
            while (true) {
                if (!br.canRead(4)) {
                    // Cannot read the mark and the length, request a minimum-size slice.
                    reread();
                    return;
                }
                const mark = this.readMark(br);
                if (mark === ExifMark.SOS) {
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
                if (mark === ExifMark.EXIF) {
                    this.parseExifSection(metadata, buf, br);
                }
                else if (ExifParser.isSof_(mark)) {
                    // The most reliable size information is encoded in the SOF section.
                    br.seek(1, SeekOrigin.SEEK_CUR); // Skip the precision byte.
                    const height = br.readScalar(2);
                    const width = br.readScalar(2);
                    ExifParser.setImageSize(metadata, width, height);
                    callback(metadata); // We are done!
                    return;
                }
                br.seek(nextSectionStart, SeekOrigin.SEEK_BEG);
            }
        }
        catch (e) {
            errorCallback(e.toString());
        }
    }
    /**
     * @param mark Mark to be checked.
     * @return True if the mark is SOF (Start of Frame).
     */
    static isSof_(mark) {
        // There are 13 variants of SOF fragment format distinguished by the last
        // hex digit of the mark, but the part we want is always the same.
        if ((mark & ~0xF) !== ExifMark.SOF) {
            return false;
        }
        // If the last digit is 4, 8 or 12 it is not really a SOF.
        const type = mark & 0xF;
        return (type !== 4 && type !== 8 && type !== 12);
    }
    /**
     * @param metadata Metadata object.
     * @param buf Buffer to be parsed.
     * @param br Byte reader to be used.
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
        if (order === ExifAlign.LITTLE) {
            br.setByteOrder(ByteOrder.LITTLE_ENDIAN);
        }
        else if (order !== ExifAlign.BIG) {
            this.log('Invalid alignment value: ' + order.toString(16));
            return;
        }
        const tag = br.readScalar(2);
        if (tag !== ExifTag.TIFF) {
            this.log('Invalid TIFF tag: ' + tag.toString(16));
            return;
        }
        metadata.littleEndian = (order === ExifAlign.LITTLE);
        metadata.ifd = {
            image: {},
            thumbnail: {},
        };
        let directoryOffset = br.readScalar(4);
        // Image directory.
        this.vlog('Read image directory');
        br.seek(directoryOffset);
        directoryOffset = this.readDirectory(br, metadata.ifd.image);
        metadata.imageTransform = this.parseOrientation(metadata.ifd.image);
        // Thumbnail Directory chained from the end of the image directory.
        if (directoryOffset) {
            this.vlog('Read thumbnail directory');
            br.seek(directoryOffset);
            this.readDirectory(br, metadata.ifd.thumbnail);
            // If no thumbnail orientation is encoded, assume same orientation as
            // the primary image.
            metadata.thumbnailTransform =
                this.parseOrientation(metadata.ifd.thumbnail) ||
                    metadata.imageTransform;
        }
        // EXIF Directory may be specified as a tag in the image directory.
        if (ExifTag.EXIFDATA in metadata.ifd.image) {
            this.vlog('Read EXIF directory');
            directoryOffset = metadata.ifd.image[ExifTag.EXIFDATA].value;
            br.seek(directoryOffset);
            metadata.ifd.exif = {};
            this.readDirectory(br, metadata.ifd.exif);
        }
        // GPS Directory may also be linked from the image directory.
        if (ExifTag.GPSDATA in metadata.ifd.image) {
            this.vlog('Read GPS directory');
            directoryOffset = metadata.ifd.image[ExifTag.GPSDATA].value;
            br.seek(directoryOffset);
            metadata.ifd.gps = {};
            this.readDirectory(br, metadata.ifd.gps);
        }
        // Thumbnail may be linked from the image directory.
        if (ExifTag.JPG_THUMB_OFFSET in metadata.ifd.thumbnail &&
            ExifTag.JPG_THUMB_LENGTH in metadata.ifd.thumbnail) {
            this.vlog('Read thumbnail image');
            br.seek(metadata.ifd.thumbnail[ExifTag.JPG_THUMB_OFFSET].value);
            metadata.thumbnailURL =
                br.readImage(metadata.ifd.thumbnail[ExifTag.JPG_THUMB_LENGTH].value);
        }
        else {
            this.vlog('Image has EXIF data, but no JPG thumbnail');
        }
    }
    /**
     * @param metadata Metadata object.
     * @param width Width in pixels.
     * @param height Height in pixels.
     */
    static setImageSize(metadata, width, height) {
        if (metadata.imageTransform && metadata.imageTransform.rotate90) {
            metadata.width = height;
            metadata.height = width;
        }
        else {
            metadata.width = width;
            metadata.height = height;
        }
    }
    /**
     * @param br Byte reader to be used for reading.
     * @return Mark value.
     */
    readMark(br) {
        return br.readScalar(2);
    }
    /**
     * @param br Bye reader to be used for reading.
     * @return Size of the mark at the current position.
     */
    readMarkLength(br) {
        // Length includes the 2 bytes used to store the length.
        return br.readScalar(2) - 2;
    }
    /**
     * @param br Byte reader to be used for reading.
     * @param tags Map of tags to be written to.
     * @return Directory offset.
     */
    readDirectory(br, tags) {
        const entryCount = br.readScalar(2);
        for (let i = 0; i < entryCount; i++) {
            const tagId = br.readScalar(2);
            const tag = tags[tagId] =
                { id: tagId, format: 0, componentCount: 0, value: undefined };
            tag.format = br.readScalar(2);
            tag.componentCount = br.readScalar(4);
            this.readTagValue(br, tag);
        }
        return br.readScalar(4);
    }
    /**
     * @param br Byte reader to be used for reading.
     * @param tag Tag object.
     */
    readTagValue(br, tag) {
        const self = this;
        function safeRead(size, readFunction, signed) {
            try {
                unsafeRead(size, readFunction, signed);
            }
            catch (ex) {
                self.log('Error reading tag 0x' + tag.id.toString(16) + '/' + tag.format +
                    ', size ' + tag.componentCount + '*' + size + ' ' +
                    (ex.stack || '<no stack>') + ': ' + ex);
                tag.value = null;
            }
        }
        function unsafeRead(size, readFunction, signed) {
            const reader = readFunction || ((size) => {
                // Every time this function is called with `size` =
                // 8, `readFunction` is also passed, so
                // readScalar is only ever called with `size` = 1,2
                // or 4.
                return br.readScalar(size, signed);
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
                tag.value = reader(size);
            }
            else {
                // Read multiple components into an array.
                tag.value = [];
                for (let i = 0; i < tag.componentCount; i++) {
                    tag.value[i] = reader(size);
                }
            }
            if (totalSize > 4) {
                // Go back to the previous position if we had to jump to the data.
                br.popSeek();
            }
            else if (totalSize < 4) {
                // Otherwise, if the value wasn't exactly 4 bytes, skip over the
                // unread data.
                br.seek(4 - totalSize, SeekOrigin.SEEK_CUR);
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
                    tag.value = String.fromCharCode(tag.value);
                }
                else {
                    tag.value = String.fromCharCode.apply(null, tag.value);
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
     * @param tag A tag to be validated and fixed.
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
     * @param ifd Exif property dictionary (image or thumbnail).
     * @return Orientation object.
     */
    parseOrientation(ifd) {
        if (ifd[ExifTag.ORIENTATION]) {
            const index = (ifd[ExifTag.ORIENTATION].value || 1) - 1;
            return {
                scaleX: SCALEX[index],
                scaleY: SCALEY[index],
                rotate90: ROTATE90[index],
            };
        }
        return undefined;
    }
}
/**
 * Map from the exif orientation value to the horizontal scale value.
 */
const SCALEX = [1, -1, -1, 1, 1, 1, -1, -1];
/**
 * Map from the exif orientation value to the vertical scale value.
 */
const SCALEY = [1, 1, -1, -1, -1, 1, 1, -1];
/**
 * Map from the exif orientation value to the rotation value.
 */
const ROTATE90 = [0, 0, 0, 0, 1, 1, 1, 1];

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * ID3 parser.
 */
class Id3Parser extends MetadataParser {
    /**
     * @param parent A metadata dispatcher.
     */
    constructor(parent) {
        super(parent, 'id3', /\.(mp3)$/i);
    }
    /**
     * Reads synchsafe integer.
     * 'SynchSafe' term is taken from id3 documentation.
     *
     * @param reader Reader to use.
     * @param length Rytes to read.
     * @return Synchsafe value.
     */
    static readSynchSafe_(reader, length) {
        let rv = 0;
        switch (length) {
            case 4:
                rv = reader.readScalar(1, false) << 21;
            // fall through
            case 3:
                rv |= reader.readScalar(1, false) << 14;
            // fall through
            case 2:
                rv |= reader.readScalar(1, false) << 7;
            // fall through
            case 1:
                rv |= reader.readScalar(1, false);
        }
        return rv;
    }
    /**
     * Reads 3bytes integer.
     *
     * @param reader Reader to use.
     * @return Uint24 value.
     */
    static readUint24_(reader) {
        return reader.readScalar(2, false) << 16 | reader.readScalar(1, false);
    }
    /**
     * Reads string from reader with specified encoding
     *
     * @param reader Reader to use.
     * @param encoding String encoding.
     * @param size Maximum string size. Actual result may be shorter.
     * @return String value.
     */
    readString_(reader, encoding, size) {
        switch (encoding) {
            case Id3Parser.V2.ENCODING.ISO_8859_1:
                return reader.readNullTerminatedString(size);
            case Id3Parser.V2.ENCODING.UTF_16:
                return reader.readNullTerminatedStringUtf16(true, size);
            case Id3Parser.V2.ENCODING.UTF_16BE:
                return reader.readNullTerminatedStringUtf16(false, size);
            case Id3Parser.V2.ENCODING.UTF_8:
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
     * @param reader Reader to use.
     * @param majorVersion Major id3 version to use.
     * @param frame Frame so store data at.
     * @param end Frame end position in reader.
     */
    readTextFrame_(reader, _majorVersion, frame, end) {
        frame.encoding = reader.readScalar(1, false, end);
        frame.value = this.readString_(reader, frame.encoding, end - reader.tell());
    }
    /**
     * Reads user defined text frame from reader.
     *
     * @param reader Reader to use.
     * @param majorVersion Major id3 version to use.
     * @param frame Frame so store data at.
     * @param end Frame end position in reader.
     */
    readUserDefinedTextFrame_(reader, _majorVersion, frame, end) {
        frame.encoding = reader.readScalar(1, false, end);
        frame.description =
            this.readString_(reader, frame.encoding, end - reader.tell());
        frame.value = this.readString_(reader, frame.encoding, end - reader.tell());
    }
    /**
     * @param reader Reader to use.
     * @param majorVersion Major id3 version to use.
     * @param frame Frame so store data at.
     * @param end Frame end position in reader.
     */
    readPic_(reader, _majorVersion, frame, end) {
        frame.encoding = reader.readScalar(1, false, end);
        frame.format = reader.readNullTerminatedString(3, end - reader.tell());
        frame.pictureType = reader.readScalar(1, false, end);
        frame.description =
            this.readString_(reader, frame.encoding, end - reader.tell());
        if (frame.format === '-->') {
            frame.imageUrl = reader.readNullTerminatedString(end - reader.tell());
        }
        else {
            frame.imageUrl = reader.readImage(end - reader.tell());
        }
    }
    /**
     * @param reader Reader to use.
     * @param majorVersion Major id3 version to use.
     * @param frame Frame so store data at.
     * @param end Frame end position in reader.
     */
    readApic_(reader, _majorVersion, frame, end) {
        this.vlog('Extracting picture');
        frame.encoding = reader.readScalar(1, false, end);
        frame.mime = reader.readNullTerminatedString(end - reader.tell());
        frame.pictureType = reader.readScalar(1, false, end);
        frame.description =
            this.readString_(reader, frame.encoding, end - reader.tell());
        if (frame.mime === '-->') {
            frame.imageUrl = reader.readNullTerminatedString(end - reader.tell());
        }
        else {
            frame.imageUrl = reader.readImage(end - reader.tell());
        }
    }
    /**
     * Reads string from reader with specified encoding
     *
     * @param reader Reader to use.
     * @param majorVersion Major id3 version to use.
     * @return Frame read.
     */
    readFrame_(reader, majorVersion) {
        if (reader.eof()) {
            return null;
        }
        const frame = {
            name: '',
            headerSize: 0,
            size: 0,
        };
        reader.pushSeek(reader.tell(), SeekOrigin.SEEK_BEG);
        const position = reader.tell();
        frame.name = (majorVersion === 2) ? reader.readNullTerminatedString(3) :
            reader.readNullTerminatedString(4);
        if (frame.name === '') {
            return null;
        }
        this.vlog('Found frame ' + (frame.name) + ' at position ' + position);
        switch (majorVersion) {
            case 2:
                frame.size = Id3Parser.readUint24_(reader);
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
        const handler = Id3Parser.V2.HANDLERS[frame.name];
        if (handler) {
            handler.call(this, reader, majorVersion, frame, reader.tell() + frame.size);
        }
        else if (frame.name.charAt(0) === 'T' || frame.name.charAt(0) === 'W') {
            this.readTextFrame_(reader, majorVersion, frame, reader.tell() + frame.size);
        }
        reader.popSeek();
        reader.seek(frame.size + frame.headerSize, SeekOrigin.SEEK_CUR);
        return frame;
    }
    /**
     * Parse the `file` and attempt to extract id3v1 metadata from it, and place
     * these properties on the `metadata` object.
     * @param file Input File object to parse.
     * @param metadata Output metadata object of the file.
     */
    async parseId3v1(file, metadata) {
        // Reads last 128 bytes of file in bytebuffer, which passes further. In
        // last 128 bytes should be placed ID3v1 tag if available.
        const reader = await MetadataParser.readFileBytes(file, file.size - 128, file.size);
        // Attempts to extract ID3v1 tag from 128 bytes long ByteBuffer
        if (reader.readString(3) === 'TAG') {
            this.vlog('id3v1 found');
            const title = reader.readNullTerminatedString(30).trim();
            if (title.length > 0) {
                metadata.title = title;
            }
            reader.seek(3 + 30, SeekOrigin.SEEK_BEG);
            const artist = reader.readNullTerminatedString(30).trim();
            if (artist.length > 0) {
                metadata.artist = artist;
            }
            reader.seek(3 + 30 + 30, SeekOrigin.SEEK_BEG);
            const album = reader.readNullTerminatedString(30).trim();
            if (album.length > 0) {
                metadata.album = album;
            }
        }
    }
    /**
     * Parse the `file` and attempt to extract id3v2 metadata from it, and place
     * these properties on the `metadata` object.
     * @param file Input File object to parse.
     * @param metadata Output metadata object of the file.
     */
    async parseId3v2(file, metadata) {
        let reader = await MetadataParser.readFileBytes(file, 0, 10);
        // Check if the first 10 bytes contains ID3 header.
        if (reader.readString(3) !== 'ID3') {
            return;
        }
        this.vlog('id3v2 found');
        const major = reader.readScalar(1, false);
        const minor = reader.readScalar(1, false);
        const flags = reader.readScalar(1, false);
        const size = Id3Parser.readSynchSafe_(reader, 4);
        const id3v2 = metadata.id3v2 = {
            majorVersion: major,
            minorVersion: minor,
            flags: flags,
            size: size,
            frames: {},
        };
        // Extract all ID3v2 frames
        reader = await MetadataParser.readFileBytes(file, 10, 10 + id3v2.size);
        if ((id3v2.majorVersion > 2) &&
            ((id3v2.flags & Id3Parser.V2.FLAG_EXTENDED_HEADER) !== 0)) {
            // Skip extended header if found
            if (id3v2.majorVersion === 3) {
                reader.seek(reader.readScalar(4, false) - 4);
            }
            else if (id3v2.majorVersion === 4) {
                reader.seek(Id3Parser.readSynchSafe_(reader, 4) - 4);
            }
        }
        let frame;
        while (frame = this.readFrame_(reader, id3v2.majorVersion)) {
            id3v2.frames[frame.name] = frame;
        }
        if (id3v2.frames['APIC']) {
            metadata.thumbnailURL = id3v2.frames['APIC'].imageUrl;
        }
        else if (id3v2.frames['PIC']) {
            metadata.thumbnailURL = id3v2.frames['PIC'].imageUrl;
        }
        // Adds 'description' object to metadata. 'description' is used to unify
        // different parsers and make metadata parser-aware. The key of each
        // description item should be used to properly format the value before
        // displaying to users.
        metadata.description = [];
        for (const [key, frame] of Object.entries(id3v2.frames)) {
            const mappedKey = Id3Parser.V2.MAPPERS[key];
            if (mappedKey && frame.value && frame.value.trim().length > 0) {
                metadata.description.push({
                    key: mappedKey,
                    value: frame.value.trim(),
                });
            }
        }
        function extract(propName, ...tagNames) {
            for (const tagName of tagNames) {
                const tag = id3v2.frames[tagName];
                if (tag && tag.value) {
                    metadata[propName] = tag.value;
                    break;
                }
            }
        }
        extract('album', 'TALB', 'TAL');
        extract('title', 'TIT2', 'TT2');
        extract('artist', 'TPE1', 'TP1');
        metadata.description.sort((a, b) => {
            return Id3Parser.METADATA_ORDER.indexOf(a.key) -
                Id3Parser.METADATA_ORDER.indexOf(b.key);
        });
    }
    /**
     * @param file Input File object to parse.
     * @param metadata Output metadata object of the file.
     * @param callback Success callback.
     * @param onError Error callback.
     */
    parse(file, metadata, callback, onError) {
        this.log('Starting id3 parser for ' + file.name);
        Promise
            .all([this.parseId3v1(file, metadata), this.parseId3v2(file, metadata)])
            .then(() => {
            callback(metadata);
        })
            .catch((e) => {
            onError(e.toString());
        });
    }
    /**
     * Metadata order to use for metadata generation
     */
    static { this.METADATA_ORDER = [
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
    ]; }
    /**
     * Id3v1 constants.
     */
    static { this.V1 = {
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
    }; }
    /**
     * Id3v2 constants.
     */
    static { this.V2 = {
        FLAG_EXTENDED_HEADER: 1 << 5,
        ENCODING: {
            /**
             * ISO-8859-1 [ISO-8859-1]. Terminated with $00.
             */
            ISO_8859_1: 0,
            /**
             * [UTF-16] encoded Unicode [UNICODE] with BOM. All
             * strings in the same frame SHALL have the same byteorder.
             * Terminated with $00 00.
             */
            UTF_16: 1,
            /**
             * UTF-16BE [UTF-16] encoded Unicode [UNICODE] without BOM.
             * Terminated with $00 00.
             */
            UTF_16BE: 2,
            /**
             * UTF-8 [UTF-8] encoded Unicode [UNICODE]. Terminated with $00.
             */
            UTF_8: 3,
        },
        HANDLERS: {
            // User defined text information frame
            TXX: Id3Parser.prototype.readUserDefinedTextFrame_,
            // User defined URL link frame
            WXX: Id3Parser.prototype.readUserDefinedTextFrame_,
            // User defined text information frame
            TXXX: Id3Parser.prototype.readUserDefinedTextFrame_,
            // User defined URL link frame
            WXXX: Id3Parser.prototype.readUserDefinedTextFrame_,
            // User attached image
            PIC: Id3Parser.prototype.readPic_,
            // User attached image
            APIC: Id3Parser.prototype.readApic_,
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
    }; }
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Base class for image metadata parsers that only need to look at a short
 * fragment at the start of the file.
 */
class SimpleImageParser extends ImageParser {
    /**
     * @param parent Parent object.
     * @param type Image type.
     * @param urlFilter RegExp to match URLs.
     * @param headerSize Size of header.
     */
    constructor(parent, type, urlFilter, headerSize) {
        super(parent, type, urlFilter);
        this.headerSize = headerSize;
    }
    /**
     * @param file File to be parsed.
     * @param metadata Metadata object of the file.
     * @param callback Success callback.
     * @param errorCallback Error callback.
     */
    parse(file, metadata, callback, errorCallback) {
        MetadataParser.readFileBytes(file, 0, this.headerSize)
            .then(byteReader => {
            this.parseHeader(metadata, byteReader);
            callback(metadata);
        })
            .catch((e) => {
            errorCallback(e.toString());
        });
    }
}
/**
 * Parser for the header of png files.
 */
class PngParser extends SimpleImageParser {
    constructor(parent) {
        super(parent, 'png', /\.png$/i, 24);
    }
    parseHeader(metadata, br) {
        br.setByteOrder(ByteOrder.BIG_ENDIAN);
        const signature = br.readString(8);
        if (signature !== '\x89PNG\x0D\x0A\x1A\x0A') {
            throw new Error('Invalid PNG signature: ' + signature);
        }
        br.seek(12);
        const ihdr = br.readString(4);
        if (ihdr !== 'IHDR') {
            throw new Error('Missing IHDR chunk');
        }
        metadata.width = br.readScalar(4);
        metadata.height = br.readScalar(4);
    }
}
/**
 * Parser for the header of bmp files.
 */
class BmpParser extends SimpleImageParser {
    constructor(parent) {
        super(parent, 'bmp', /\.bmp$/i, 28);
    }
    parseHeader(metadata, br) {
        br.setByteOrder(ByteOrder.LITTLE_ENDIAN);
        const signature = br.readString(2);
        if (signature !== 'BM') {
            throw new Error('Invalid BMP signature: ' + signature);
        }
        br.seek(18);
        metadata.width = br.readScalar(4);
        metadata.height = br.readScalar(4);
    }
}
/**
 * Parser for the header of gif files.
 */
class GifParser extends SimpleImageParser {
    constructor(parent) {
        super(parent, 'gif', /\.Gif$/i, 10);
    }
    parseHeader(metadata, br) {
        br.setByteOrder(ByteOrder.LITTLE_ENDIAN);
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
 */
class WebpParser extends SimpleImageParser {
    constructor(parent) {
        super(parent, 'webp', /\.webp$/i, 30);
    }
    parseHeader(metadata, br) {
        br.setByteOrder(ByteOrder.LITTLE_ENDIAN);
        const riffSignature = br.readString(4);
        if (riffSignature !== 'RIFF') {
            throw new Error('Invalid RIFF signature: ' + riffSignature);
        }
        br.seek(8);
        const webpSignature = br.readString(4);
        if (webpSignature !== 'WEBP') {
            throw new Error('Invalid WEBP signature: ' + webpSignature);
        }
        const chunkFormat = br.readString(4);
        switch (chunkFormat) {
            // VP8 lossy bitstream format.
            case 'VP8 ':
                br.seek(23);
                const lossySignature = br.readScalar(2) | (br.readScalar(1) << 16);
                if (lossySignature !== 0x2a019d) {
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
                if (losslessSignature !== 0x2f) {
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
 */
class IcoParser extends SimpleImageParser {
    constructor(parent) {
        super(parent, 'ico', /\.ico$/i, 8);
    }
    parseHeader(metadata, byteReader) {
        byteReader.setByteOrder(ByteOrder.LITTLE_ENDIAN);
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
class MpegParser extends MetadataParser {
    constructor(parent) {
        super(parent, 'mpeg', /\.(mp4|m4v|m4a|mpe?g4?)$/i);
        this.mimeType = 'video/mpeg';
    }
    /**
     * @param br ByteReader instance.
     * @param end End of atom position.
     * @return Atom size.
     */
    static readAtomSize(br, end) {
        const pos = br.tell();
        if (end) {
            // Assert that opt_end <= buffer end.
            // When supplied, opt_end is the end of the enclosing atom and is used to
            // check the correct nesting.
            br.validateRead(end - pos);
        }
        const size = br.readScalar(4, false, end);
        if (size < MpegParser.HEADER_SIZE) {
            throw new Error('atom too short (' + size + ') @' + pos);
        }
        if (end && pos + size > end) {
            throw new Error('atom too long (' + size + '>' + (end - pos) + ') @' + pos);
        }
        return size;
    }
    /**
     * @param br ByteReader instance.
     * @param end End of atom position.
     * @return Atom name.
     */
    static readAtomName(br, end) {
        return br.readString(4, end).toLowerCase();
    }
    /**
     * @param metadata Metadata object.
     * @return Root of the parser tree.
     */
    static createRootParser(metadata) {
        function findParentAtom(atom, name) {
            for (;;) {
                if (!atom.parent) {
                    return null;
                }
                atom = atom.parent;
                if (atom.name === name) {
                    return atom;
                }
            }
        }
        function parseFtyp(br, atom) {
            metadata.mpegBrand = br.readString(4, atom.end);
        }
        function parseMvhd(br, atom) {
            const version = br.readScalar(4, false, atom.end);
            const offset = (version === 0) ? 8 : 16;
            br.seek(offset, SeekOrigin.SEEK_CUR);
            const timescale = br.readScalar(4, false, atom.end);
            const duration = br.readScalar(4, false, atom.end);
            metadata.duration = duration / timescale;
        }
        function parseHdlr(br, atom) {
            br.seek(8, SeekOrigin.SEEK_CUR);
            const type = br.readString(4, atom.end);
            const track = findParentAtom(atom, 'trak');
            if (track) {
                track.trackType = type;
            }
        }
        function parseStsd(br, atom) {
            const track = findParentAtom(atom, 'trak');
            if (track && track.trackType === 'vide') {
                br.seek(40, SeekOrigin.SEEK_CUR);
                metadata.width = br.readScalar(2, false, atom.end);
                metadata.height = br.readScalar(2, false, atom.end);
            }
        }
        function parseDataString(name, br, atom) {
            br.seek(8, SeekOrigin.SEEK_CUR);
            metadata[name] = br.readString(atom.end - br.tell(), atom.end);
        }
        function parseCovr(br, atom) {
            br.seek(8, SeekOrigin.SEEK_CUR);
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
     * @param file File.
     * @param metadata Metadata.
     * @param callback Success callback.
     * @param onError Error callback.
     */
    parse(file, metadata, callback, onError) {
        const rootParser = MpegParser.createRootParser(metadata);
        // Kick off the processing by reading the first atom's header.
        this.requestRead(rootParser, file, 0, MpegParser.HEADER_SIZE, null, onError, callback.bind(null, metadata));
    }
    /**
     * @param parser Parser tree node.
     * @param br ByteReader instance.
     * @param atom Atom descriptor.
     * @param filePos File position of the atom start.
     */
    applyParser(parser, br, atom, filePos) {
        if (this.verbose) {
            let path = atom.name;
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
            const start = atom.start - MpegParser.HEADER_SIZE;
            this.vlog(path + ': ' +
                '@' + (filePos + start) + ':' + (atom.end - start), action);
        }
        if (parser instanceof Function) {
            br.pushSeek(atom.start);
            parser(br, atom);
            br.popSeek();
        }
        else if (parser instanceof Object) {
            if (parser.versioned) {
                atom.start += 4;
            }
            this.parseMpegAtomsInRange(parser, br, atom, filePos);
        }
    }
    /**
     * @param parser Parser tree node.
     * @param br ByteReader instance.
     * @param parentAtom Parent atom descriptor.
     * @param filePos File position of the atom start.
     */
    parseMpegAtomsInRange(parser, br, parentAtom, filePos) {
        let count = 0;
        for (let offset = parentAtom.start; offset !== parentAtom.end;) {
            if (count++ > 100) {
                // Most likely we are looping through a corrupt file.
                throw new Error('too many child atoms in ' + parentAtom.name + ' @' + offset);
            }
            br.seek(offset);
            const size = MpegParser.readAtomSize(br, parentAtom.end);
            const name = MpegParser.readAtomName(br, parentAtom.end);
            this.applyParser(parser[name], br, {
                start: offset + MpegParser.HEADER_SIZE,
                end: offset + size,
                name: name,
                parent: parentAtom,
            }, filePos);
            offset += size;
        }
    }
    /**
     * @param rootParser Parser definition.
     * @param file File.
     * @param filePos Start position in the file.
     * @param size Atom size.
     * @param name Atom name.
     * @param onError Error callback.
     * @param onSuccess Success callback.
     */
    requestRead(rootParser, file, filePos, size, name, onError, onSuccess) {
        const self = this;
        const reader = new FileReader();
        reader.onerror = onError;
        reader.onload = _event => {
            self.processTopLevelAtom(reader.result, rootParser, file, filePos, size, name, onError, onSuccess);
        };
        this.vlog('reading @' + filePos + ':' + size);
        reader.readAsArrayBuffer(file.slice(filePos, filePos + size));
    }
    /**
     * @param buf Data buffer.
     * @param rootParser Parser definition.
     * @param file File.
     * @param filePos Start position in the file.
     * @param size Atom size.
     * @param name Atom name.
     * @param onError Error callback.
     * @param onSuccess Success callback.
     */
    processTopLevelAtom(buf, rootParser, file, filePos, size, name, onError, onSuccess) {
        try {
            const br = new ByteReader(buf);
            // the header has already been read.
            const atomEnd = size - MpegParser.HEADER_SIZE;
            const bufLength = buf.byteLength;
            // Check the available data size. It should be either exactly
            // what we requested or HEADER_SIZE bytes less (for the last atom).
            if (bufLength !== atomEnd && bufLength !== size) {
                throw new Error('Read failure @' + filePos + ', ' +
                    'requested ' + size + ', read ' + bufLength);
            }
            // Process the top level atom.
            if (name) { // name is null only the first time.
                this.applyParser(rootParser[name], br, { start: 0, end: atomEnd, name: name }, filePos);
            }
            filePos += bufLength;
            if (bufLength === size) {
                // The previous read returned everything we asked for, including
                // the next atom header at the end of the buffer.
                // Parse this header and schedule the next read.
                br.seek(-MpegParser.HEADER_SIZE, SeekOrigin.SEEK_END);
                let nextSize = MpegParser.readAtomSize(br);
                const nextName = MpegParser.readAtomName(br);
                // If we do not have a parser for the next atom, skip the content and
                // read only the header (the one after the next).
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
            onError(e.toString());
        }
    }
    /**
     * Size of the atom header.
     */
    static { this.HEADER_SIZE = 8; }
}

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
//# sourceMappingURL=metadata_dispatcher.rollup.js.map
