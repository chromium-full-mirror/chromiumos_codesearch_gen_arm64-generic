// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Module defined by 'piex.js.wasm' script upon initialization.
 */
let PiexModule;
/**
 * Module constructor defined by 'piex.js.wasm' script.
 */
const initPiexModule = globalThis.createPiexModule;
console.log(`[PiexLoader] available [init=${typeof initPiexModule}]`);
/**
 * Set true if the Module.onAbort() handler is called.
 */
let piexFailed = false;
const MODULE_SETTINGS = {
    /**
     * Installs an (Emscripten) Module.onAbort handler. Record that the
     * Module has failed in piexFailed and re-throw the error.
     *
     * @throws {!Error|string}
     */
    onAbort: (error) => {
        piexFailed = true;
        throw error;
    },
};
let initPiexModulePromise = null;
/**
 * Returns a promise that resolves once initialization is complete. PiexModule
 * may be undefined before this promise resolves.
 */
function piexModuleInitialized() {
    if (!initPiexModulePromise) {
        initPiexModulePromise = new Promise(resolve => {
            initPiexModule(MODULE_SETTINGS).then(module => {
                PiexModule = module;
                console.log(`[PiexLoader] loaded [module=${typeof module}]`);
                resolve();
            });
        });
    }
    return initPiexModulePromise;
}
/**
 * Module failure recovery: if piexFailed is set via onAbort due to OOM in
 * the C++ for example, or the Module failed to load or call run, then the
 * Module is in a broken, non-functional state.
 *
 * Loading the entire page is the only reliable way to recover from broken
 * Module state. Log the error, and return true to tell caller to initiate
 * failure recovery steps.
 *
 */
function piexModuleFailed() {
    if (piexFailed || !PiexModule.calledRun) {
        console.error('[PiexLoader] piex wasm module failed');
        return true;
    }
    return false;
}
class PiexLoaderResponse {
    thumbnail;
    mimeType;
    /** JEITA EXIF image orientation being an integer in [1..8].  */
    orientation;
    /** JEITA EXIF image color space: 'sRgb' or 'adobeRgb'.  */
    colorSpace;
    /** JSON encoded RAW image photographic details.  */
    ifd;
    /**
     * @param data The extracted preview image data.
     */
    constructor(data) {
        this.thumbnail = data.thumbnail;
        this.mimeType = data.mimeType || 'image/jpeg';
        this.orientation = data.orientation;
        this.colorSpace = data.colorSpace;
        this.ifd = data.ifd || null;
    }
}
/** JFIF APP2 ICC_PROFILE segment containing an AdobeRGB1998 Color Profile. */
const adobeProfile = new Uint8Array([
    // clang-format off
    // APP2 ICC_PROFILE\0 segment header.
    0xff, 0xe2, 0x02, 0x40, 0x49, 0x43, 0x43, 0x5f, 0x50, 0x52, 0x4f, 0x46,
    0x49, 0x4c, 0x45, 0x00, 0x01, 0x01,
    // AdobeRGB1998 ICC Color Profile data.
    0x00, 0x00, 0x02, 0x30, 0x41, 0x44, 0x42, 0x45, 0x02, 0x10, 0x00, 0x00,
    0x6d, 0x6e, 0x74, 0x72, 0x52, 0x47, 0x42, 0x20, 0x58, 0x59, 0x5a, 0x20,
    0x07, 0xd0, 0x00, 0x08, 0x00, 0x0b, 0x00, 0x13, 0x00, 0x33, 0x00, 0x3b,
    0x61, 0x63, 0x73, 0x70, 0x41, 0x50, 0x50, 0x4c, 0x00, 0x00, 0x00, 0x00,
    0x6e, 0x6f, 0x6e, 0x65, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf6, 0xd6,
    0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0xd3, 0x2d, 0x41, 0x44, 0x42, 0x45,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0a,
    0x63, 0x70, 0x72, 0x74, 0x00, 0x00, 0x00, 0xfc, 0x00, 0x00, 0x00, 0x32,
    0x64, 0x65, 0x73, 0x63, 0x00, 0x00, 0x01, 0x30, 0x00, 0x00, 0x00, 0x6b,
    0x77, 0x74, 0x70, 0x74, 0x00, 0x00, 0x01, 0x9c, 0x00, 0x00, 0x00, 0x14,
    0x62, 0x6b, 0x70, 0x74, 0x00, 0x00, 0x01, 0xb0, 0x00, 0x00, 0x00, 0x14,
    0x72, 0x54, 0x52, 0x43, 0x00, 0x00, 0x01, 0xc4, 0x00, 0x00, 0x00, 0x0e,
    0x67, 0x54, 0x52, 0x43, 0x00, 0x00, 0x01, 0xd4, 0x00, 0x00, 0x00, 0x0e,
    0x62, 0x54, 0x52, 0x43, 0x00, 0x00, 0x01, 0xe4, 0x00, 0x00, 0x00, 0x0e,
    0x72, 0x58, 0x59, 0x5a, 0x00, 0x00, 0x01, 0xf4, 0x00, 0x00, 0x00, 0x14,
    0x67, 0x58, 0x59, 0x5a, 0x00, 0x00, 0x02, 0x08, 0x00, 0x00, 0x00, 0x14,
    0x62, 0x58, 0x59, 0x5a, 0x00, 0x00, 0x02, 0x1c, 0x00, 0x00, 0x00, 0x14,
    0x74, 0x65, 0x78, 0x74, 0x00, 0x00, 0x00, 0x00, 0x43, 0x6f, 0x70, 0x79,
    0x72, 0x69, 0x67, 0x68, 0x74, 0x20, 0x32, 0x30, 0x30, 0x30, 0x20, 0x41,
    0x64, 0x6f, 0x62, 0x65, 0x20, 0x53, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x73,
    0x20, 0x49, 0x6e, 0x63, 0x6f, 0x72, 0x70, 0x6f, 0x72, 0x61, 0x74, 0x65,
    0x64, 0x00, 0x00, 0x00, 0x64, 0x65, 0x73, 0x63, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x11, 0x41, 0x64, 0x6f, 0x62, 0x65, 0x20, 0x52, 0x47,
    0x42, 0x20, 0x28, 0x31, 0x39, 0x39, 0x38, 0x29, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x58, 0x59, 0x5a, 0x20, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0xf3, 0x51, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x16, 0xcc,
    0x58, 0x59, 0x5a, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x63, 0x75, 0x72, 0x76,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x02, 0x33, 0x00, 0x00,
    0x63, 0x75, 0x72, 0x76, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
    0x02, 0x33, 0x00, 0x00, 0x63, 0x75, 0x72, 0x76, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x01, 0x02, 0x33, 0x00, 0x00, 0x58, 0x59, 0x5a, 0x20,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x9c, 0x18, 0x00, 0x00, 0x4f, 0xa5,
    0x00, 0x00, 0x04, 0xfc, 0x58, 0x59, 0x5a, 0x20, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x34, 0x8d, 0x00, 0x00, 0xa0, 0x2c, 0x00, 0x00, 0x0f, 0x95,
    0x58, 0x59, 0x5a, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x26, 0x31,
    0x00, 0x00, 0x10, 0x2f, 0x00, 0x00, 0xbe, 0x9c,
    // clang-format on
]);
/**
 * Preview Image EXtractor (PIEX).
 */
class ImageBuffer {
    source;
    length;
    memory = 0;
    /**
     * @param buffer - RAW image source data.
     */
    constructor(buffer) {
        this.source = new Uint8Array(buffer);
        this.length = buffer.byteLength;
    }
    /**
     * Calls Module.image() to process |this.source| and return the result.
     *
     * @throws {!Error} Memory allocation error.
     */
    process() {
        this.memory = PiexModule._malloc(this.length);
        if (!this.memory) {
            throw new Error('Image malloc failed: ' + this.length + ' bytes');
        }
        PiexModule.HEAP8.set(this.source, this.memory);
        const result = PiexModule.image(this.memory, this.length);
        if (result.error) {
            throw new Error(result.error);
        }
        return result;
    }
    /**
     * Returns the preview image data. If no preview image was found, returns
     * the thumbnail image.
     *
     * @throws {!Error} Data access security error.
     */
    preview(result) {
        const preview = result.preview;
        if (!preview) {
            return this.thumbnail_(result);
        }
        const offset = preview.offset;
        const length = preview.length;
        if (offset > this.length || (this.length - offset) < length) {
            throw new Error('Preview image access failed');
        }
        const view = new Uint8Array(this.source.buffer, offset, length);
        return {
            thumbnail: this.createImageDataArray_(view, preview).buffer,
            mimeType: 'image/jpeg',
            ifd: this.details_(result, preview.orientation),
            orientation: preview.orientation,
            colorSpace: preview.colorSpace,
        };
    }
    /**
     * Returns the thumbnail image. If no thumbnail image was found, returns
     * an empty thumbnail image.
     *
     * @throws {!Error} Data access security error.
     */
    thumbnail_(result) {
        const thumbnail = result.thumbnail;
        if (!thumbnail) {
            return {
                thumbnail: new ArrayBuffer(0),
                colorSpace: 'sRgb',
                orientation: 1,
                ifd: null,
            };
        }
        if (thumbnail.format) {
            return this.rgb_(result);
        }
        const offset = thumbnail.offset;
        const length = thumbnail.length;
        if (offset > this.length || (this.length - offset) < length) {
            throw new Error('Thumbnail image access failed');
        }
        const view = new Uint8Array(this.source.buffer, offset, length);
        return {
            thumbnail: this.createImageDataArray_(view, thumbnail).buffer,
            mimeType: 'image/jpeg',
            ifd: this.details_(result, thumbnail.orientation),
            orientation: thumbnail.orientation,
            colorSpace: thumbnail.colorSpace,
        };
    }
    /**
     * Returns the RGB thumbnail. If no RGB thumbnail was found, returns
     * an empty thumbnail image.
     *
     * @throws {!Error} Data access security error.
     */
    rgb_(result) {
        const thumbnail = result.thumbnail;
        if (!thumbnail || thumbnail.format !== 1) {
            return {
                thumbnail: new ArrayBuffer(0),
                colorSpace: 'sRgb',
                orientation: 1,
                ifd: null,
            };
        }
        // Expect a width and height.
        if (!thumbnail.width || !thumbnail.height) {
            throw new Error('invalid image width or height');
        }
        const offset = thumbnail.offset;
        const length = thumbnail.length;
        if (offset > this.length || (this.length - offset) < length) {
            throw new Error('Thumbnail image access failed');
        }
        const view = new Uint8Array(this.source.buffer, offset, length);
        // Compute output image width and height.
        const usesWidthAsHeight = thumbnail.orientation >= 5;
        const height = usesWidthAsHeight ? thumbnail.width : thumbnail.height;
        const width = usesWidthAsHeight ? thumbnail.height : thumbnail.width;
        // Compute pixel row stride.
        const rowPad = width & 3;
        const rowStride = 3 * width + rowPad;
        // Create bitmap image.
        const pixelDataOffset = 14 + 108;
        const fileSize = pixelDataOffset + rowStride * height;
        const bitmap = new DataView(new ArrayBuffer(fileSize));
        // BITMAPFILEHEADER 14 bytes.
        bitmap.setUint8(0, 'B'.charCodeAt(0));
        bitmap.setUint8(1, 'M'.charCodeAt(0));
        bitmap.setUint32(2, fileSize /* bytes */, true);
        bitmap.setUint32(6, /* Reserved */ 0, true);
        bitmap.setUint32(10, pixelDataOffset, true);
        // DIB BITMAPV4HEADER 108 bytes.
        bitmap.setUint32(14, /* HeaderSize */ 108, true);
        bitmap.setInt32(18, width, true);
        bitmap.setInt32(22, -height /* top-down DIB */, true);
        bitmap.setInt16(26, /* ColorPlanes */ 1, true);
        bitmap.setInt16(28, /* BitsPerPixel BI_RGB */ 24, true);
        bitmap.setUint32(30, /* Compression: BI_RGB none */ 0, true);
        bitmap.setUint32(34, /* ImageSize: 0 not compressed */ 0, true);
        bitmap.setInt32(38, /* XPixelsPerMeter */ 0, true);
        bitmap.setInt32(42, /* YPixelPerMeter */ 0, true);
        bitmap.setUint32(46, /* TotalPalletColors */ 0, true);
        bitmap.setUint32(50, /* ImportantColors */ 0, true);
        bitmap.setUint32(54, /* RedMask */ 0, true);
        bitmap.setUint32(58, /* GreenMask */ 0, true);
        bitmap.setUint32(62, /* BlueMask */ 0, true);
        bitmap.setUint32(66, /* AlphaMask */ 0, true);
        let rx = 0;
        let ry = 0;
        let gx = 0;
        let gy = 0;
        let bx = 0;
        let by = 0;
        let zz = 0;
        let gg = 0;
        if (thumbnail.colorSpace !== 'adobeRgb') {
            bitmap.setUint8(70, 's'.charCodeAt(0));
            bitmap.setUint8(71, 'R'.charCodeAt(0));
            bitmap.setUint8(72, 'G'.charCodeAt(0));
            bitmap.setUint8(73, 'B'.charCodeAt(0));
        }
        else {
            bitmap.setUint32(70, /* adobeRgb LCS_CALIBRATED_RGB */ 0);
            rx = Math.round(0.6400 * (1 << 30));
            ry = Math.round(0.3300 * (1 << 30));
            gx = Math.round(0.2100 * (1 << 30));
            gy = Math.round(0.7100 * (1 << 30));
            bx = Math.round(0.1500 * (1 << 30));
            by = Math.round(0.0600 * (1 << 30));
            zz = Math.round(1.0000 * (1 << 30));
            gg = Math.round(2.1992187 * (1 << 16));
        }
        // RGB CIEXYZ.
        bitmap.setUint32(74, /* R CIEXYZ x */ rx, true);
        bitmap.setUint32(78, /* R CIEXYZ y */ ry, true);
        bitmap.setUint32(82, /* R CIEXYZ z */ zz, true);
        bitmap.setUint32(86, /* G CIEXYZ x */ gx, true);
        bitmap.setUint32(90, /* G CIEXYZ y */ gy, true);
        bitmap.setUint32(94, /* G CIEXYZ z */ zz, true);
        bitmap.setUint32(98, /* B CIEXYZ x */ bx, true);
        bitmap.setUint32(102, /* B CIEXYZ y */ by, true);
        bitmap.setUint32(106, /* B CIEXYZ z */ zz, true);
        // RGB gamma.
        bitmap.setUint32(110, /* R Gamma */ gg, true);
        bitmap.setUint32(114, /* G Gamma */ gg, true);
        bitmap.setUint32(118, /* B Gamma */ gg, true);
        // Write RGB row pixels in top-down DIB order.
        const h = thumbnail.height - 1;
        const w = thumbnail.width - 1;
        let dx = 0;
        for (let input = 0, y = 0; y <= h; ++y) {
            let output = pixelDataOffset;
            /**
             * Compute affine(a,b,c,d,tx,ty) transform of pixel (x,y)
             *   { x': a * x + c * y + tx, y': d * y + b * x + ty }
             * a,b,c,d in [-1,0,1], to apply the image orientation at
             * (0,y) to find the output location of the input row.
             * The transform derivative in x is used to calculate the
             * relative output location of adjacent input row pixels.
             */
            switch (thumbnail.orientation) {
                case 1: // affine(+1, 0, 0, +1, 0, 0)
                    output += y * rowStride;
                    dx = 3;
                    break;
                case 2: // affine(-1, 0, 0, +1, w, 0)
                    output += y * rowStride + 3 * w;
                    dx = -3;
                    break;
                case 3: // affine(-1, 0, 0, -1, w, h)
                    output += (h - y) * rowStride + 3 * w;
                    dx = -3;
                    break;
                case 4: // affine(+1, 0, 0, -1, 0, h)
                    output += (h - y) * rowStride;
                    dx = 3;
                    break;
                case 5: // affine(0, +1, +1, 0, 0, 0)
                    output += 3 * y;
                    dx = rowStride;
                    break;
                case 6: // affine(0, +1, -1, 0, h, 0)
                    output += 3 * (h - y);
                    dx = rowStride;
                    break;
                case 7: // affine(0, -1, -1, 0, h, w)
                    output += w * rowStride + 3 * (h - y);
                    dx = -rowStride;
                    break;
                case 8: // affine(0, -1, +1, 0, 0, w)
                    output += w * rowStride + 3 * y;
                    dx = -rowStride;
                    break;
            }
            for (let x = 0; x <= w; ++x, input += 3, output += dx) {
                bitmap.setUint8(output + 0, view[input + 2]); // B
                bitmap.setUint8(output + 1, view[input + 1]); // G
                bitmap.setUint8(output + 2, view[input + 0]); // R
            }
        }
        // Write pixel row padding bytes if needed.
        if (rowPad) {
            let paddingOffset = pixelDataOffset + 3 * width;
            for (let y = 0; y < height; ++y) {
                let output = paddingOffset;
                switch (rowPad) {
                    case 1:
                        bitmap.setUint8(output++, 0);
                        break;
                    case 2:
                        bitmap.setUint8(output++, 0);
                        bitmap.setUint8(output++, 0);
                        break;
                    case 3:
                        bitmap.setUint8(output++, 0);
                        bitmap.setUint8(output++, 0);
                        bitmap.setUint8(output++, 0);
                        break;
                }
                paddingOffset += rowStride;
            }
        }
        return {
            thumbnail: bitmap.buffer,
            mimeType: 'image/bmp',
            ifd: this.details_(result, thumbnail.orientation),
            colorSpace: thumbnail.colorSpace,
            orientation: 1,
        };
    }
    /**
     * Converts a |view| of the "preview image" to Uint8Array data. Embeds an
     * AdobeRGB1998 ICC Color Profile in that data if the preview is JPEG and
     * it has 'adodeRgb' color space.
     *
     */
    createImageDataArray_(view, preview) {
        const jpeg = view.byteLength > 2 && view[0] === 0xff && view[1] === 0xd8;
        if (jpeg && preview.colorSpace === 'adobeRgb') {
            const data = new Uint8Array(view.byteLength + adobeProfile.byteLength);
            data.set(view.subarray(2), 2 + adobeProfile.byteLength);
            data.set(adobeProfile, 2);
            data.set([0xff, 0xd8], 0);
            return data;
        }
        return new Uint8Array(view);
    }
    /**
     * Returns the RAW image photographic |details| in a JSON-encoded string.
     * Only number and string values are retained, and they are formatted for
     * presentation to the user.
     *
     * @param orientation - image EXIF orientation
     */
    details_(result, orientation) {
        const details = result.details;
        if (!details) {
            return null;
        }
        const format = {};
        for (const [key, value] of Object.entries(details)) {
            if (typeof value === 'string') {
                format[key] = value.replace(/\0+$/, '').trim();
            }
            else if (typeof value === 'number') {
                if (!Number.isInteger(value)) {
                    format[key] = Number(value.toFixed(3).replace(/0+$/, ''));
                }
                else {
                    format[key] = value;
                }
            }
        }
        const usesWidthAsHeight = orientation >= 5;
        if (usesWidthAsHeight) {
            const width = format['width'];
            format['width'] = format['height'];
            format['height'] = width;
        }
        return JSON.stringify(format);
    }
    /**
     * Release resources.
     */
    close() {
        const memory = this.memory;
        if (memory) {
            PiexModule._free(memory);
            this.memory = 0;
        }
    }
}
/**
 * PiexLoader: is a namespace.
 */
const PiexLoader = {
    /**
     * Loads a RAW image. Returns the image metadata and the image thumbnail in a
     * PiexLoaderResponse.
     *
     * piexModuleFailed() returns true if the Module is in an unrecoverable error
     * state. This is rare, but possible, and the only reliable way to recover is
     * to reload the page. Callback |onPiexModuleFailed| is used to indicate that
     * the caller should initiate failure recovery steps.
     *
     */
    load(buffer, onPiexModuleFailed) {
        let imageBuffer;
        return piexModuleInitialized()
            .then(() => {
            if (piexModuleFailed()) {
                throw new Error('piex wasm module failed');
            }
            imageBuffer = new ImageBuffer(buffer);
            return imageBuffer.process();
        })
            .then((result) => {
            return new PiexLoaderResponse(imageBuffer.preview(result));
        })
            .catch((error) => {
            if (piexModuleFailed()) {
                setTimeout(onPiexModuleFailed, 0);
                return Promise.reject('piex wasm module failed');
            }
            console.warn('[PiexLoader] ' + error);
            return Promise.reject(error);
        })
            .finally(() => {
            imageBuffer && imageBuffer.close();
        });
    },
};
const PIEX_LOADER_TEST_ONLY = {
    getModule: () => PiexModule,
};

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Set when PiexLoader has an unrecoverable error to disable future attempts.
 */
let piexEnabled = true;
/** Handles wasm load failures. */
function onPiexModuleFailed() {
    piexEnabled = false;
}
const SIZEOF_APP1_PREFIX = 8;
const SIZEOF_TIFF_HEADER = 8;
const SIZEOF_SINGLE_IFD_FRAME = 18;
const NUM_IFD_FRAMES = 1;
/**
 * For the minimal header, just dump an orientation tag into the "0th" frame and
 * nothing else. There _should_ be other stuff, like a pointer to the "EXIF" IFD
 * frame (containing ExifVersion, etc.), and tags for image resolution. But
 * these are not used by Chrome for rendering.
 */
const SIZEOF_APP1_HEADER = SIZEOF_APP1_PREFIX + SIZEOF_TIFF_HEADER +
    NUM_IFD_FRAMES * SIZEOF_SINGLE_IFD_FRAME;
/**
 * A minimal EXIF header to include an orientation field. Includes the "Start of
 * image" prefix that should already be present, so that this can just form the
 * start of the resulting JPEG; with the quantization table following.
 *
 * The table at https://www.exif.org/Exif2-2.PDF#page=70 was the starting point
 * for this, but details come from all over the document.
 *
 * | Offset | Code |    Meaning      |
 * | ------ | ---- | --------------- |
 * |   -2   | 0xFF | SOI Prefix      |
 * |   -1   | 0xD8 | Start of Image  |
 * |   +0   | 0xFF | Marker Prefix   |
 * |   +1   | 0xE1 | APP1            |
 * |   +2   | 0x.. | Length[1]       |  // Always big-endian.
 * |   +3   | 0x.. | Length[0]       |  // SIZEOF_APP1_HEADER.
 * |   +4   | 0x45 | 'E'             |
 * |   +5   | 0x78 | 'x'             |
 * |   +6   | 0x69 | 'i'             |
 * |   +7   | 0x66 | 'f'             |
 * |   +8   | 0x00 | NULL            |
 * |   +9   | 0x00 | Padding         |
 * |        |      | TIFF header     |  // 8 bytes. Offsets start from here.
 * |   +10  | 0x49 | ByteOrder ('I') |  // Little-endian (seems more common).
 * |   +11  | 0x49 | ByteOrder ('I') |
 * |   +12  | 0x2a | IFD marker[0]   |
 * |   +13  | 0x00 | IFD marker[1]   |
 * |   +14  | 0x08 | IFD offset[0]   |  // 8 (0th IFD immediately follows).
 * |   +15  | 0x00 | IFD offset[1]   |
 * |   +16  | 0x00 | IFD offset[2]   |
 * |   +17  | 0x00 | IFD offset[3]   |
 * |        |      | IFD frame       |  // 18 bytes
 * |   +18  | 0x01 | Field count[0]  |  // 1 Field (just orientation).
 * |   +19  | 0x00 | Field count[1]  |
 * |   +20  | 0x12 | TAG[0]          |  // E.g. TAG_ORIENTATION (0x0112)
 * |   +21  | 0x01 | TAG[1]          |
 * |   +22  | 0x03 | Data type[0]    |  // 3 = "Short"
 * |   +23  | 0x00 | Data type[1]    |
 * |   +24  | 0x01 | Data count[0]   |  // 1
 * |   +25  | 0x00 | Data count[1]   |
 * |   +26  | 0x00 | Data count[2]   |
 * |   +27  | 0x00 | Data count[3]   |
 * | 28-29  | 0x.. | Value           |  // Orientation goes here! <omitted>
 * | 30-31  | 0x00 | Padding         |
 * | 32-35  | 0x00 | Offset to next  |  // 0 to indicate "no more".
 */
const TIFF_HEADER = new Uint8Array([
    0xff,
    0xd8,
    0xff,
    0xe1,
    SIZEOF_APP1_HEADER >> 8,
    SIZEOF_APP1_HEADER & 0xff,
    0x45,
    0x78,
    0x69,
    0x66,
    0x00,
    0x00,
    0x49,
    0x49,
    0x2a,
    0x00,
    0x08,
    0x00,
    0x00,
    0x00,
]);
/**
 * Makes an 18-byte little-endian IFD frame for the Exif orientation value.
 * This is a number [1, 8]. The Exif spec requests a 16-bit unsigned int to be
 * written.
 * Reference: https://www.exif.org/Exif2-2.PDF#page=19.
 */
function makeOrientationIfdFrame(value) {
    const LITTLE_ENDIAN = true;
    const TAG_ORIENTATION = 0x0112;
    const TYPE_UINT16 = 3; // 1=BYTE, 2=ASCII, 3=SHORT, 4=LONG, etc.
    const FIELD_COUNT = 1; // Just writing orientation.
    const VALUE_LENGTH = 1; // Writing one "short".
    const NEXT_OFFSET = 0; // No more frames.
    const buffer = new ArrayBuffer(SIZEOF_SINGLE_IFD_FRAME);
    const view = new DataView(buffer);
    view.setUint16(0, FIELD_COUNT, LITTLE_ENDIAN);
    view.setUint16(2, TAG_ORIENTATION, LITTLE_ENDIAN);
    view.setUint16(4, TYPE_UINT16, LITTLE_ENDIAN);
    view.setUint32(6, VALUE_LENGTH, LITTLE_ENDIAN);
    // The value is <= 4 bytes, so write directly. Otherwise an offset to the
    // value data would be written here. Note the type "hugs" the low-order bits
    // and is followed by padding if the data size is < 4 bytes.
    view.setUint16(10, value, LITTLE_ENDIAN);
    view.setUint32(14, NEXT_OFFSET, LITTLE_ENDIAN);
    return buffer;
}
/**
 * Extracts a JPEG from a RAW Image ArrayBuffer.
 */
async function extractFromRawImageBuffer(buffer) {
    /** Application Segment Marker. */
    const APP1_MARKER = 0xffe1;
    /** SOI. Page 64. */
    const START_OF_IMAGE = 0xffd8;
    /** Field value for no rotation. Don't add an Exif header in this case. */
    const NO_ROTATION = 1;
    if (!piexEnabled) {
        throw new Error('Piex disabled');
    }
    const response = await PiexLoader.load(buffer, onPiexModuleFailed);
    // Note the "thumbnail" is usually the full-sized image "preview", but may
    // fall back to a thumbnail when that is unavailable.
    const jpegData = response.thumbnail;
    function original(warning = '') {
        if (warning) {
            console.warn(`Returning unrotated image: ${warning}.`);
        }
        return new File([jpegData], 'raw-preview', { type: response.mimeType });
    }
    if (response.orientation === NO_ROTATION) {
        return original();
    }
    const view = new DataView(jpegData);
    if (view.getUint16(0) !== START_OF_IMAGE) {
        return original('No SOI');
    }
    // Files returned by Piex should begin immediately with JPEG headers (and the
    // Define Quantization Table marker). If a layer between here and Piex has
    // added its own APP marker segment(s), don't add a duplicate.
    if (view.getUint16(2) === APP1_MARKER) {
        return original('APP1 marker already present');
    }
    // Ignore the Start-Of-Image already in `jpegData` (TIFF_HEADER has one).
    const jpegWithoutSOI = (new Blob([jpegData])).slice(2);
    const orientation = makeOrientationIfdFrame(response.orientation);
    return new File([TIFF_HEADER, orientation, jpegWithoutSOI], 'raw-preview', { type: response.mimeType });
}
// Export to `window` manually until the toolchain has better support for
// dynamic module loading. Dynamic modules require ES2020, but asking chromium's
// closure typechecking toolchain for ES2020 input and output still complains
// that dynamic imports can't be transpiled.
window.extractFromRawImageBuffer = extractFromRawImageBuffer;
// Expose the module on `window` for MediaAppIntegrationTest.HandleRawFiles.
// TODO(b/185957537): Convert the test case to a JS module.
window.getPiexModuleForTesting = PIEX_LOADER_TEST_ONLY.getModule;
//# sourceMappingURL=piex_module.rollup.js.map
