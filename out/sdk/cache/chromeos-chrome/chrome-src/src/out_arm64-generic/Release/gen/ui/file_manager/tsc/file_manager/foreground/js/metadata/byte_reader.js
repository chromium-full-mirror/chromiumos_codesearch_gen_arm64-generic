// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class ByteReader {
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
        this.littleEndian_ = order == ByteOrder.LITTLE_ENDIAN;
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
        if (typeof end == 'undefined') {
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
        if (method == 'getInt8' || method == 'getUint8') {
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
        if (seekStart == SeekOrigin.SEEK_CUR) {
            newPos = this.pos_ + pos;
        }
        else if (seekStart == SeekOrigin.SEEK_END) {
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
        if (lastSeek != undefined) {
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
export var ByteOrder;
(function (ByteOrder) {
    // Intel, 0x1234 is [0x34, 0x12]
    ByteOrder[ByteOrder["LITTLE_ENDIAN"] = 0] = "LITTLE_ENDIAN";
    // Motorola, 0x1234 is [0x12, 0x34]
    ByteOrder[ByteOrder["BIG_ENDIAN"] = 1] = "BIG_ENDIAN";
})(ByteOrder || (ByteOrder = {}));
export var SeekOrigin;
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
