// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Assertion support.
 */

/**
 * Note: This method is deprecated. Use the equvalent method in assert_ts.ts
 * instead.
 * Verify |condition| is truthy and return |condition| if so.
 * @template T
 * @param {T} condition A condition to check for truthiness.  Note that this
 *     may be used to test whether a value is defined or not, and we don't want
 *     to force a cast to Boolean.
 * @param {string=} opt_message A message to show on failure.
 * @return {T} A non-null |condition|.
 * @closurePrimitive {asserts.truthy}
 * @suppress {reportUnknownTypes} because T is not sufficiently constrained.
 */
function assert(condition, opt_message) {
  if (!condition) {
    let message = 'Assertion failed';
    if (opt_message) {
      message = message + ': ' + opt_message;
    }
    const error = new Error(message);
    const global = function() {
      const thisOrSelf = this || self;
      /** @type {boolean} */
      thisOrSelf.traceAssertionsForTesting;
      return thisOrSelf;
    }();
    if (global.traceAssertionsForTesting) {
      console.warn(error.stack);
    }
    throw error;
  }
  return condition;
}

/**
 * Note: This method is deprecated. Use the equvalent method in assert_ts.ts
 * instead.
 * Call this from places in the code that should never be reached.
 *
 * For example, handling all the values of enum with a switch() like this:
 *
 *   function getValueFromEnum(enum) {
 *     switch (enum) {
 *       case ENUM_FIRST_OF_TWO:
 *         return first
 *       case ENUM_LAST_OF_TWO:
 *         return last;
 *     }
 *     assertNotReached();
 *     return document;
 *   }
 *
 * This code should only be hit in the case of serious programmer error or
 * unexpected input.
 *
 * @param {string=} message A message to show when this is hit.
 * @closurePrimitive {asserts.fail}
 */
function assertNotReached(message) {
  assert(false, message || 'Unreachable code hit');
}

/**
 * @param {*} value The value to check.
 * @param {function(new: T, ...)} type A user-defined constructor.
 * @param {string=} message A message to show when this is hit.
 * @return {T}
 * @template T
 */
function assertInstanceof(value, type, message) {
  // We don't use assert immediately here so that we avoid constructing an error
  // message if we don't have to.
  if (!(value instanceof type)) {
    assertNotReached(
        message ||
        'Value ' + value + ' is not a[n] ' + (type.name || typeof type));
  }
  return value;
}

// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Persistent cache storing images in an indexed database on the hard disk.
 */
class ImageCache {
    /**
     * IndexedDB database handle.
     */
    db_ = null;
    /**
     * Initializes the cache database.
     * @param callback Completion callback.
     */
    initialize(callback) {
        // Establish a connection to the database or (re)create it if not available
        // or not up to date. After changing the database's schema, increment
        // DB_VERSION to force database recreating.
        const openRequest = indexedDB.open(DB_NAME, DB_VERSION);
        openRequest.onsuccess = () => {
            this.db_ = openRequest.result;
            callback();
        };
        openRequest.onerror = callback;
        openRequest.onupgradeneeded = () => {
            console.info('Cache database creating or upgrading.');
            const db = openRequest.result;
            if (db.objectStoreNames.contains('metadata')) {
                db.deleteObjectStore('metadata');
            }
            if (db.objectStoreNames.contains('data')) {
                db.deleteObjectStore('data');
            }
            if (db.objectStoreNames.contains('settings')) {
                db.deleteObjectStore('settings');
            }
            db.createObjectStore('metadata', { keyPath: 'key' });
            db.createObjectStore('data', { keyPath: 'key' });
            db.createObjectStore('settings', { keyPath: 'key' });
        };
    }
    /**
     * Sets size of the cache.
     *
     * @param size Size in bytes.
     * @param transaction Transaction to be reused. If not provided, then a new
     *     one is created.
     */
    setCacheSize_(size, transaction) {
        transaction =
            transaction || this.db_.transaction(['settings'], 'readwrite');
        const settingsStore = transaction.objectStore('settings');
        settingsStore.put({ key: 'size', value: size }); // Update asynchronously.
    }
    /**
     * Fetches current size of the cache.
     *
     * @param onSuccess Callback to return the size.
     * @param onFailure Failure callback.
     * @param transaction Transaction to be reused. If not
     *     provided, then a new one is created.
     */
    fetchCacheSize_(onSuccess, onFailure, transaction) {
        transaction = transaction ||
            this.db_.transaction(['settings', 'metadata', 'data'], 'readwrite');
        const settingsStore = transaction.objectStore('settings');
        const sizeRequest = settingsStore.get('size');
        sizeRequest.onsuccess = () => {
            const result = sizeRequest.result;
            if (result) {
                onSuccess(result.value);
            }
            else {
                onSuccess(0);
            }
        };
        sizeRequest.onerror = () => {
            console.warn('Failed to fetch size from the database.');
            onFailure();
        };
    }
    /**
     * Evicts the least used elements in cache to make space for a new image and
     * updates size of the cache taking into account the upcoming item.
     *
     * @param size Requested size.
     * @param onSuccess Success callback.
     * @param onFailure Failure callback.
     * @param dbTransaction Transaction to be reused. If not provided, then a new
     *     one is created.
     */
    evictCache_(size, onSuccess, onFailure, dbTransaction) {
        const transaction = dbTransaction ||
            this.db_.transaction(['settings', 'metadata', 'data'], 'readwrite');
        // Check if the requested size is smaller than the cache size.
        if (size > MEMORY_LIMIT) {
            onFailure();
            return;
        }
        const onCacheSize = (cacheSize) => {
            if (size < MEMORY_LIMIT - cacheSize) {
                // Enough space, no need to evict.
                this.setCacheSize_(cacheSize + size, transaction);
                onSuccess();
                return;
            }
            let bytesToEvict = Math.max(size, EVICTION_CHUNK_SIZE);
            // Fetch all metadata.
            const metadataEntries = [];
            const metadataStore = transaction.objectStore('metadata');
            const dataStore = transaction.objectStore('data');
            const onEntriesFetched = () => {
                metadataEntries.sort((a, b) => {
                    return b.lastLoadTimestamp - a.lastLoadTimestamp;
                });
                let totalEvicted = 0;
                while (bytesToEvict > 0) {
                    const entry = metadataEntries.pop();
                    totalEvicted += entry.size;
                    bytesToEvict -= entry.size;
                    metadataStore.delete(entry.key); // Remove asynchronously.
                    dataStore.delete(entry.key); // Remove asynchronously.
                }
                this.setCacheSize_(cacheSize - totalEvicted + size, transaction);
            };
            const cursor = metadataStore.openCursor();
            cursor.onsuccess = () => {
                const result = cursor.result;
                if (result) {
                    metadataEntries.push(result.value);
                    result.continue();
                }
                else {
                    onEntriesFetched();
                }
            };
        };
        this.fetchCacheSize_(onCacheSize, onFailure, transaction);
    }
    /**
     * Saves an image in the cache.
     *
     * @param key Cache key.
     * @param timestamp Last modification timestamp. Used to detect if the image
     *     cache entry is out of date.
     * @param width Image width.
     * @param height Image height.
     * @param ifd Image ifd, null if none.
     * @param data Image data.
     */
    saveImage(key, timestamp, width, height, ifd, data) {
        if (!this.db_) {
            console.warn('Cache database not available.');
            return;
        }
        const onNotFoundInCache = () => {
            const metadataEntry = {
                key: key,
                timestamp: timestamp,
                width: width,
                height: height,
                ifd: ifd,
                size: data.length,
                lastLoadTimestamp: Date.now(),
            };
            const dataEntry = { key: key, data: data };
            const transaction = this.db_.transaction(['settings', 'metadata', 'data'], 'readwrite');
            const metadataStore = transaction.objectStore('metadata');
            const dataStore = transaction.objectStore('data');
            const onCacheEvicted = () => {
                metadataStore.put(metadataEntry); // Add asynchronously.
                dataStore.put(dataEntry); // Add asynchronously.
            };
            // Make sure there is enough space in the cache.
            this.evictCache_(data.length, onCacheEvicted, () => { }, transaction);
        };
        // Check if the image is already in cache. If not, then save it to
        // cache.
        this.loadImage(key, timestamp, () => { }, onNotFoundInCache);
    }
    /**
     * Loads an image from the cache.
     *
     * @param key Cache key.
     * @param timestamp Last modification timestamp. If different than the one in
     *     cache, then the entry will be invalidated.
     * @param onSuccess Success callback.
     * @param onFailure Failure callback.
     */
    loadImage(key, timestamp, onSuccess, onFailure) {
        if (!this.db_) {
            console.warn('Cache database not available.');
            onFailure();
            return;
        }
        const transaction = this.db_.transaction(['settings', 'metadata', 'data'], 'readwrite');
        const metadataStore = transaction.objectStore('metadata');
        const dataStore = transaction.objectStore('data');
        const metadataRequest = metadataStore.get(key);
        const dataRequest = dataStore.get(key);
        let metadataEntry = null;
        let metadataReceived = false;
        let dataEntry = null;
        let dataReceived = false;
        const onPartialSuccess = () => {
            // Check if all sub-requests have finished.
            if (!metadataReceived || !dataReceived) {
                return;
            }
            // Check if both entries are available or both unavailable.
            if (!!metadataEntry !== !!dataEntry) {
                console.warn('Inconsistent cache database.');
                onFailure();
                return;
            }
            // Process the responses.
            if (!metadataEntry) {
                // The image not found.
                onFailure();
            }
            else if (metadataEntry.timestamp !== timestamp) {
                // The image is not up to date, so remove it.
                this.removeImage(key, () => { }, () => { }, transaction);
                onFailure();
            }
            else {
                // The image is available. Update the last load time and return the
                // image data.
                metadataEntry.lastLoadTimestamp = Date.now();
                metadataStore.put(metadataEntry); // Added asynchronously.
                onSuccess(metadataEntry.width, metadataEntry.height, metadataEntry.ifd, dataEntry.data);
            }
        };
        metadataRequest.onsuccess = () => {
            if (metadataRequest.result) {
                metadataEntry = metadataRequest.result;
            }
            metadataReceived = true;
            onPartialSuccess();
        };
        dataRequest.onsuccess = () => {
            if (dataRequest.result) {
                dataEntry = dataRequest.result;
            }
            dataReceived = true;
            onPartialSuccess();
        };
        metadataRequest.onerror = () => {
            console.warn('Failed to fetch metadata from the database.');
            metadataReceived = true;
            onPartialSuccess();
        };
        dataRequest.onerror = () => {
            console.warn('Failed to fetch image data from the database.');
            dataReceived = true;
            onPartialSuccess();
        };
    }
    /**
     * Removes the image from the cache.
     *
     * @param key Cache key.
     * @param onSuccess Success callback.
     * @param onFailure Failure callback.
     * @param transaction Transaction to be reused. If not provided, then a new
     *     one is created.
     */
    removeImage(key, onSuccess, onFailure, transaction) {
        if (!this.db_) {
            console.warn('Cache database not available.');
            return;
        }
        transaction = transaction ||
            this.db_.transaction(['settings', 'metadata', 'data'], 'readwrite');
        const metadataStore = transaction.objectStore('metadata');
        const dataStore = transaction.objectStore('data');
        let cacheSize = null;
        let cacheSizeReceived = false;
        let metadataEntry = null;
        let metadataReceived = false;
        const onPartialSuccess = () => {
            if (!cacheSizeReceived || !metadataReceived) {
                return;
            }
            // If either cache size or metadata entry is not available, then it is an
            // error.
            if (cacheSize === null || !metadataEntry) {
                if (onFailure) {
                    onFailure();
                }
                return;
            }
            if (onSuccess) {
                onSuccess();
            }
            this.setCacheSize_(cacheSize - metadataEntry.size, transaction);
            metadataStore.delete(key); // Delete asynchronously.
            dataStore.delete(key); // Delete asynchronously.
        };
        const onCacheSizeFailure = () => {
            cacheSizeReceived = true;
        };
        const onCacheSizeSuccess = (result) => {
            cacheSize = result;
            cacheSizeReceived = true;
            onPartialSuccess();
        };
        // Fetch the current cache size.
        this.fetchCacheSize_(onCacheSizeSuccess, onCacheSizeFailure, transaction);
        // Receive image's metadata.
        const metadataRequest = metadataStore.get(key);
        metadataRequest.onsuccess = () => {
            if (metadataRequest.result) {
                metadataEntry = metadataRequest.result;
            }
            metadataReceived = true;
            onPartialSuccess();
        };
        metadataRequest.onerror = () => {
            console.warn('Failed to remove an image.');
            metadataReceived = true;
            onPartialSuccess();
        };
    }
}
/**
 * Cache database name.
 */
const DB_NAME = 'image-loader';
/**
 * Cache database version.
 */
const DB_VERSION = 16;
/**
 * Memory limit for images data in bytes.
 */
const MEMORY_LIMIT = 250 * 1024 * 1024; // 250 MB.
/**
 * Minimal amount of memory freed per eviction. Used to limit number
 * of evictions which are expensive.
 */
const EVICTION_CHUNK_SIZE = 50 * 1024 * 1024; // 50 MB.

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// @ts-nocheck
/**
 * rotate90: clockwise degrees / 90.
 *
 * @typedef {{scaleX: number, scaleY: number, rotate90: number}}
 */
/**
 * Class representing image orientation.
 * @final
 */
class ImageOrientation {
    /**
     * The constructor takes 2x2 matrix value that cancels the image orientation:
     * |a, c|
     * |b, d|
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @param {number} d
     */
    constructor(a, b, c, d) {
        /** @public @const {number} */
        this.a = a;
        /** @public @const {number} */
        this.b = b;
        /** @public @const {number} */
        this.c = c;
        /** @public @const {number} */
        this.d = d;
    }
    /**
     * @param {number} orientation 1-based orientation number defined by EXIF.
     * @return {!ImageOrientation}
     */
    static fromExifOrientation(orientation) {
        switch (~~orientation) {
            case 1:
                return new ImageOrientation(1, 0, 0, 1);
            case 2:
                return new ImageOrientation(-1, 0, 0, 1);
            case 3:
                return new ImageOrientation(-1, 0, 0, -1);
            case 4:
                return new ImageOrientation(1, 0, 0, -1);
            case 5:
                return new ImageOrientation(0, 1, 1, 0);
            case 6:
                return new ImageOrientation(0, 1, -1, 0);
            case 7:
                return new ImageOrientation(0, -1, -1, 0);
            case 8:
                return new ImageOrientation(0, -1, 1, 0);
            default:
                console.error('Invalid orientation number.');
                return new ImageOrientation(1, 0, 0, 1);
        }
    }
    /**
     * @param {number} rotation90 Clockwise degrees / 90.
     * @return {!ImageOrientation}
     */
    static fromClockwiseRotation(rotation90) {
        switch (~~(rotation90 % 4)) {
            case 0:
                return new ImageOrientation(1, 0, 0, 1);
            case 1:
            case -3:
                return new ImageOrientation(0, 1, -1, 0);
            case 2:
            case -2:
                return new ImageOrientation(-1, 0, 0, -1);
            case 3:
            case -1:
                return new ImageOrientation(0, -1, 1, 0);
            default:
                console.error('Invalid orientation number.');
                return new ImageOrientation(1, 0, 0, 1);
        }
    }
    /**
     * Builds a transformation matrix from the image transform parameters.
     * @param {!ImageTransformParam} transform
     * @return {!ImageOrientation}
     */
    static fromRotationAndScale(transform) {
        const scaleX = transform.scaleX;
        const scaleY = transform.scaleY;
        const rotate90 = transform.rotate90;
        const orientation = ImageOrientation.fromClockwiseRotation(rotate90);
        // Flip X and Y.
        // In the Files app., CSS transformations are applied like
        // "transform: rotate(90deg) scaleX(-1)".
        // Since the image is scaled based on the X,Y axes pinned to the original,
        // it is equivalent to scale first and then rotate.
        // |a c| |s_x 0 | |x|   |a*s_x c*s_y| |x|
        // |b d| | 0 s_y| |y| = |b*s_x d*s_y| |y|
        return new ImageOrientation(orientation.a * scaleX, orientation.b * scaleX, orientation.c * scaleY, orientation.d * scaleY);
    }
    /**
     * Obtains the image size after cancelling its orientation.
     * @param {number} imageWidth
     * @param {number} imageHeight
     * @return {{width:number, height:number}}
     */
    getSizeAfterCancelling(imageWidth, imageHeight) {
        const projectedX = this.a * imageWidth + this.c * imageHeight;
        const projectedY = this.b * imageWidth + this.d * imageHeight;
        return {
            width: Math.abs(projectedX),
            height: Math.abs(projectedY),
        };
    }
    /**
     * Applies the transformation that cancels the image orientation to the given
     * context.
     * @param {!CanvasRenderingContext2D} context
     * @param {number} imageWidth
     * @param {number} imageHeight
     */
    cancelImageOrientation(context, imageWidth, imageHeight) {
        // Calculate where to project the point of (imageWidth, imageHeight).
        const projectedX = this.a * imageWidth + this.c * imageHeight;
        const projectedY = this.b * imageWidth + this.d * imageHeight;
        // If the projected point coordinates are negative, add offset to cancel it.
        const offsetX = projectedX < 0 ? -projectedX : 0;
        const offsetY = projectedY < 0 ? -projectedY : 0;
        // Apply the transform.
        context.setTransform(this.a, this.b, this.c, this.d, offsetX, offsetY);
    }
    /**
     * Checks if the orientation represents identity transformation or not.
     * @return {boolean}
     */
    isIdentity() {
        return this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1;
    }
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* This file is generated from:
 *  ../../../../../../../home/chrome-bot/chrome_root/src/ui/file_manager/base/gn/file_types.json5
 */
/**
 * @typedef {{
 *   translationKey: !string,
 *   type: !string,
 *   icon: (string|undefined),
 *   subtype: !string,
 *   extensions: (!Array<!string>|undefined),
 *   mime: (string|undefined),
 *   encrypted: (boolean|undefined),
 *   originalMimeType: (string|undefined)
 * }}
 */
// @ts-ignore:  error TS7005: Variable 'FileExtensionType' implicitly has an 'any' type.
/**
 * Maps a file extension to a FileExtensionType.
 * Note: If an extension can match multiple types, in this map contains
 * only the first occurrence.
 *
 * @const Map<string, !FileExtensionType>
 */
const EXTENSION_TO_TYPE = new Map([
    [".jpeg", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".jpg", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".jfif", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".pjpeg", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".pjp", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".bmp", {
            "extensions": [
                ".bmp"
            ],
            "mime": "image/bmp",
            "subtype": "BMP",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".gif", {
            "extensions": [
                ".gif"
            ],
            "mime": "image/gif",
            "subtype": "GIF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".ico", {
            "extensions": [
                ".ico"
            ],
            "mime": "image/x-icon",
            "subtype": "ICO",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".png", {
            "extensions": [
                ".png"
            ],
            "mime": "image/png",
            "subtype": "PNG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".webp", {
            "extensions": [
                ".webp"
            ],
            "mime": "image/webp",
            "subtype": "WebP",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".tif", {
            "extensions": [
                ".tif",
                ".tiff"
            ],
            "mime": "image/tiff",
            "subtype": "TIFF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".tiff", {
            "extensions": [
                ".tif",
                ".tiff"
            ],
            "mime": "image/tiff",
            "subtype": "TIFF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".svg", {
            "extensions": [
                ".svg",
                ".svgz"
            ],
            "mime": "image/svg+xml",
            "subtype": "SVG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".svgz", {
            "extensions": [
                ".svg",
                ".svgz"
            ],
            "mime": "image/svg+xml",
            "subtype": "SVG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".avif", {
            "extensions": [
                ".avif"
            ],
            "mime": "image/avif",
            "subtype": "AVIF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".jxl", {
            "extensions": [
                ".jxl"
            ],
            "mime": "image/jxl",
            "subtype": "JXL",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".xbm", {
            "extensions": [
                ".xbm"
            ],
            "mime": "image/x-xbitmap",
            "subtype": "XBM",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".arw", {
            "extensions": [
                ".arw"
            ],
            "icon": "image",
            "mime": "image/x-sony-arw",
            "subtype": "ARW",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".cr2", {
            "extensions": [
                ".cr2"
            ],
            "icon": "image",
            "mime": "image/x-canon-cr2",
            "subtype": "CR2",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".dng", {
            "extensions": [
                ".dng"
            ],
            "icon": "image",
            "mime": "image/x-adobe-dng",
            "subtype": "DNG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".nef", {
            "extensions": [
                ".nef"
            ],
            "icon": "image",
            "mime": "image/x-nikon-nef",
            "subtype": "NEF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".nrw", {
            "extensions": [
                ".nrw"
            ],
            "icon": "image",
            "mime": "image/x-nikon-nrw",
            "subtype": "NRW",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".orf", {
            "extensions": [
                ".orf"
            ],
            "icon": "image",
            "mime": "image/x-olympus-orf",
            "subtype": "ORF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".raf", {
            "extensions": [
                ".raf"
            ],
            "icon": "image",
            "mime": "image/x-fuji-raf",
            "subtype": "RAF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".rw2", {
            "extensions": [
                ".rw2"
            ],
            "icon": "image",
            "mime": "image/x-panasonic-rw2",
            "subtype": "RW2",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".3gp", {
            "extensions": [
                ".3gp",
                ".3gpp"
            ],
            "mime": "video/3gpp",
            "subtype": "3GP",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".3gpp", {
            "extensions": [
                ".3gp",
                ".3gpp"
            ],
            "mime": "video/3gpp",
            "subtype": "3GP",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".avi", {
            "extensions": [
                ".avi"
            ],
            "mime": "video/x-msvideo",
            "subtype": "AVI",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mov", {
            "extensions": [
                ".mov"
            ],
            "mime": "video/quicktime",
            "subtype": "QuickTime",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mkv", {
            "extensions": [
                ".mkv"
            ],
            "mime": "video/x-matroska",
            "subtype": "MKV",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mp4", {
            "extensions": [
                ".mp4",
                ".m4v",
                ".mpg4",
                ".mpeg4"
            ],
            "mime": "video/mp4",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".m4v", {
            "extensions": [
                ".mp4",
                ".m4v",
                ".mpg4",
                ".mpeg4"
            ],
            "mime": "video/mp4",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mpg4", {
            "extensions": [
                ".mp4",
                ".m4v",
                ".mpg4",
                ".mpeg4"
            ],
            "mime": "video/mp4",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mpeg4", {
            "extensions": [
                ".mp4",
                ".m4v",
                ".mpg4",
                ".mpeg4"
            ],
            "mime": "video/mp4",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mpg", {
            "extensions": [
                ".mpg",
                ".mpeg"
            ],
            "mime": "video/mpeg",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mpeg", {
            "extensions": [
                ".mpg",
                ".mpeg"
            ],
            "mime": "video/mpeg",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".ogm", {
            "extensions": [
                ".ogm",
                ".ogv",
                ".ogx"
            ],
            "mime": "video/ogg",
            "subtype": "OGG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".ogv", {
            "extensions": [
                ".ogm",
                ".ogv",
                ".ogx"
            ],
            "mime": "video/ogg",
            "subtype": "OGG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".ogx", {
            "extensions": [
                ".ogm",
                ".ogv",
                ".ogx"
            ],
            "mime": "video/ogg",
            "subtype": "OGG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".webm", {
            "extensions": [
                ".webm"
            ],
            "mime": "video/webm",
            "subtype": "WebM",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".amr", {
            "extensions": [
                ".amr"
            ],
            "mime": "audio/amr",
            "subtype": "AMR",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".flac", {
            "extensions": [
                ".flac"
            ],
            "mime": "audio/flac",
            "subtype": "FLAC",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".mp3", {
            "extensions": [
                ".mp3"
            ],
            "mime": "audio/mpeg",
            "subtype": "MP3",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".m4a", {
            "extensions": [
                ".m4a"
            ],
            "mime": "audio/mp4a-latm",
            "subtype": "MPEG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".oga", {
            "extensions": [
                ".oga",
                ".ogg",
                ".opus"
            ],
            "mime": "audio/ogg",
            "subtype": "OGG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".ogg", {
            "extensions": [
                ".oga",
                ".ogg",
                ".opus"
            ],
            "mime": "audio/ogg",
            "subtype": "OGG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".opus", {
            "extensions": [
                ".oga",
                ".ogg",
                ".opus"
            ],
            "mime": "audio/ogg",
            "subtype": "OGG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".wav", {
            "extensions": [
                ".wav"
            ],
            "mime": "audio/x-wav",
            "subtype": "WAV",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".weba", {
            "extensions": [
                ".weba"
            ],
            "mime": "audio/webm",
            "subtype": "WEBA",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".txt", {
            "extensions": [
                ".txt",
                ".text"
            ],
            "mime": "text/plain",
            "subtype": "TXT",
            "translationKey": "PLAIN_TEXT_FILE_TYPE",
            "type": "text"
        }],
    [".text", {
            "extensions": [
                ".txt",
                ".text"
            ],
            "mime": "text/plain",
            "subtype": "TXT",
            "translationKey": "PLAIN_TEXT_FILE_TYPE",
            "type": "text"
        }],
    [".csv", {
            "extensions": [
                ".csv"
            ],
            "mime": "text/csv",
            "subtype": "CSV",
            "translationKey": "CSV_TEXT_FILE_TYPE",
            "type": "text"
        }],
    [".zip", {
            "extensions": [
                ".zip"
            ],
            "mime": "application/zip",
            "subtype": "ZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".rar", {
            "extensions": [
                ".rar"
            ],
            "mime": "application/x-rar-compressed",
            "subtype": "RAR",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".iso", {
            "extensions": [
                ".iso"
            ],
            "mime": "application/x-iso9660-image",
            "subtype": "ISO",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".7z", {
            "extensions": [
                ".7z"
            ],
            "mime": "application/x-7z-compressed",
            "subtype": "7-Zip",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".crx", {
            "extensions": [
                ".crx"
            ],
            "mime": "application/x-chrome-extension",
            "subtype": "CRX",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tar", {
            "extensions": [
                ".tar"
            ],
            "mime": "application/x-tar",
            "subtype": "TAR",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".bz2", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".bz", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tbz", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tbz2", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tz2", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tb2", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".gz", {
            "extensions": [
                ".gz",
                ".tgz"
            ],
            "mime": "application/x-gzip",
            "subtype": "GZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tgz", {
            "extensions": [
                ".gz",
                ".tgz"
            ],
            "mime": "application/x-gzip",
            "subtype": "GZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".lz", {
            "extensions": [
                ".lz"
            ],
            "mime": "application/x-lzip",
            "subtype": "LZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".lzo", {
            "extensions": [
                ".lzo"
            ],
            "mime": "application/x-lzop",
            "subtype": "LZOP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".lzma", {
            "extensions": [
                ".lzma",
                ".tlzma",
                ".tlz"
            ],
            "mime": "application/x-lzma",
            "subtype": "LZMA",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tlzma", {
            "extensions": [
                ".lzma",
                ".tlzma",
                ".tlz"
            ],
            "mime": "application/x-lzma",
            "subtype": "LZMA",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tlz", {
            "extensions": [
                ".lzma",
                ".tlzma",
                ".tlz"
            ],
            "mime": "application/x-lzma",
            "subtype": "LZMA",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".xz", {
            "extensions": [
                ".xz",
                ".txz"
            ],
            "mime": "application/x-xz",
            "subtype": "XZ",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".txz", {
            "extensions": [
                ".xz",
                ".txz"
            ],
            "mime": "application/x-xz",
            "subtype": "XZ",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".z", {
            "extensions": [
                ".z",
                ".taz",
                ".tz"
            ],
            "mime": "application/x-compress",
            "subtype": "Z",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".taz", {
            "extensions": [
                ".z",
                ".taz",
                ".tz"
            ],
            "mime": "application/x-compress",
            "subtype": "Z",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tz", {
            "extensions": [
                ".z",
                ".taz",
                ".tz"
            ],
            "mime": "application/x-compress",
            "subtype": "Z",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".zst", {
            "extensions": [
                ".zst",
                ".tzst"
            ],
            "mime": "application/zstd",
            "subtype": "Zstandard",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tzst", {
            "extensions": [
                ".zst",
                ".tzst"
            ],
            "mime": "application/zstd",
            "subtype": "Zstandard",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".gdoc", {
            "extensions": [
                ".gdoc"
            ],
            "icon": "gdoc",
            "mime": "application/vnd.google-apps.document",
            "subtype": "doc",
            "translationKey": "GDOC_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gsheet", {
            "extensions": [
                ".gsheet"
            ],
            "icon": "gsheet",
            "mime": "application/vnd.google-apps.spreadsheet",
            "subtype": "sheet",
            "translationKey": "GSHEET_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gslides", {
            "extensions": [
                ".gslides"
            ],
            "icon": "gslides",
            "mime": "application/vnd.google-apps.presentation",
            "subtype": "slides",
            "translationKey": "GSLIDES_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gdraw", {
            "extensions": [
                ".gdraw"
            ],
            "icon": "gdraw",
            "mime": "application/vnd.google-apps.drawing",
            "subtype": "draw",
            "translationKey": "GDRAW_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gtable", {
            "extensions": [
                ".gtable"
            ],
            "icon": "gtable",
            "mime": "application/vnd.google-apps.fusiontable",
            "subtype": "table",
            "translationKey": "GTABLE_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".glink", {
            "extensions": [
                ".glink"
            ],
            "icon": "glink",
            "mime": "application/vnd.google-apps.shortcut",
            "subtype": "glink",
            "translationKey": "GLINK_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gform", {
            "extensions": [
                ".gform"
            ],
            "icon": "gform",
            "mime": "application/vnd.google-apps.form",
            "subtype": "form",
            "translationKey": "GFORM_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gmap", {
            "extensions": [
                ".gmap"
            ],
            "icon": "gmap",
            "mime": "application/vnd.google-apps.map",
            "subtype": "map",
            "translationKey": "GMAP_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gsite", {
            "extensions": [
                ".gsite"
            ],
            "icon": "gsite",
            "mime": "application/vnd.google-apps.site",
            "subtype": "site",
            "translationKey": "GSITE_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gmaillayout", {
            "extensions": [
                ".gmaillayout"
            ],
            "icon": "gmaillayout",
            "mime": "application/vnd.google-apps.mail-layout",
            "subtype": "emaillayouts",
            "translationKey": "EMAIL_LAYOUTS_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".pdf", {
            "extensions": [
                ".pdf"
            ],
            "icon": "pdf",
            "mime": "application/pdf",
            "subtype": "PDF",
            "translationKey": "PDF_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".htm", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".html", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".mht", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".mhtml", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".shtml", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".xht", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".xhtml", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".doc", {
            "extensions": [
                ".doc"
            ],
            "icon": "word",
            "mime": "application/msword",
            "subtype": "Word",
            "translationKey": "WORD_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".docx", {
            "extensions": [
                ".docx"
            ],
            "icon": "word",
            "mime": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "subtype": "Word",
            "translationKey": "WORD_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".ppt", {
            "extensions": [
                ".ppt"
            ],
            "icon": "ppt",
            "mime": "application/vnd.ms-powerpoint",
            "subtype": "PPT",
            "translationKey": "POWERPOINT_PRESENTATION_FILE_TYPE",
            "type": "document"
        }],
    [".pptx", {
            "extensions": [
                ".pptx"
            ],
            "icon": "ppt",
            "mime": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "subtype": "PPT",
            "translationKey": "POWERPOINT_PRESENTATION_FILE_TYPE",
            "type": "document"
        }],
    [".xls", {
            "extensions": [
                ".xls"
            ],
            "icon": "excel",
            "mime": "application/vnd.ms-excel",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    [".xlsx", {
            "extensions": [
                ".xlsx"
            ],
            "icon": "excel",
            "mime": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    [".xlsm", {
            "extensions": [
                ".xlsm"
            ],
            "icon": "excel",
            "mime": "application/vnd.ms-excel.sheet.macroEnabled.12",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    [".tini", {
            "extensions": [
                ".tini"
            ],
            "icon": "tini",
            "subtype": "TGZ",
            "translationKey": "TINI_FILE_TYPE",
            "type": "archive"
        }],
]);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * A special placeholder for unknown types with no extension.
 */
const PLACEHOLDER = {
    translationKey: 'NO_EXTENSION_FILE_TYPE',
    type: 'UNKNOWN',
    icon: '',
    subtype: '',
    extensions: undefined,
    mime: undefined,
    encrypted: undefined,
    originalMimeType: undefined,
};
/**
 * Returns the final extension of a file name, check for the last two dots
 * to distinguish extensions like ".tar.gz" and ".gz".
 */
function getFinalExtension(fileName) {
    if (!fileName) {
        return '';
    }
    const lowerCaseFileName = fileName.toLowerCase();
    const parts = lowerCaseFileName.split('.');
    // No dot, so no extension.
    if (parts.length === 1) {
        return '';
    }
    // Only one dot, so only 1 extension.
    if (parts.length === 2) {
        return `.${parts.pop()}`;
    }
    // More than 1 dot/extension: e.g. ".tar.gz".
    const last = `.${parts.pop()}`;
    const secondLast = `.${parts.pop()}`;
    const doubleExtension = `${secondLast}${last}`;
    if (EXTENSION_TO_TYPE.has(doubleExtension)) {
        return doubleExtension;
    }
    // Double extension doesn't exist in the map, return the single one.
    return last;
}
/**
 * Gets the file type object for a given file name (base name). Use getType()
 * if possible, since this method can't recognize directories.
 */
function getFileTypeForName(name) {
    const extension = getFinalExtension(name);
    if (EXTENSION_TO_TYPE.has(extension)) {
        return EXTENSION_TO_TYPE.get(extension);
    }
    // Unknown file type.
    if (extension === '') {
        return PLACEHOLDER;
    }
    // subtype is the extension excluding the first dot.
    return {
        translationKey: 'GENERIC_FILE_TYPE',
        type: 'UNKNOWN',
        subtype: extension.substr(1).toUpperCase(),
        icon: '',
        extensions: undefined,
        mime: undefined,
        encrypted: undefined,
        originalMimeType: undefined,
    };
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// @ts-nocheck
/**
 * Response status.
 *
 * @enum {string}
 */
const LoadImageResponseStatus = {
    SUCCESS: 'success',
    ERROR: 'error',
};
/**
 * Structure of the response object passed to the LoadImageRequest callback.
 * All methods must be static since this is passed between isolated contexts.
 *
 * @struct
 */
class LoadImageResponse {
    /**
     * @param {!LoadImageResponseStatus} status
     * @param {?number} taskId or null if fulfilled by the client-side cache.
     * @param {{width:number, height:number, ifd:?string, data:string}=}
     *    opt_result
     */
    constructor(status, taskId, opt_result) {
        /** @type {!LoadImageResponseStatus} */
        this.status = status;
        /** @type {?number} */
        this.taskId = taskId;
        if (status === LoadImageResponseStatus.ERROR) {
            return;
        }
        // Response result defined only when status === SUCCESS.
        assert(opt_result);
        /** @type {number|undefined} */
        this.width = opt_result.width;
        /** @type {number|undefined} */
        this.height = opt_result.height;
        /** @type {?string} */
        this.ifd = opt_result.ifd;
        /**
         * The (compressed) image data as a data URL.
         * @type {string|undefined}
         */
        this.data = opt_result.data;
    }
    /**
     * Returns the cacheable result value for |response|, or null for an error.
     *
     * @param {!LoadImageResponse} response Response data from the ImageLoader.
     * @param {number|undefined} timestamp The request timestamp. If undefined,
     *        then null is used. Currently this disables any caching in the
     *        ImageLoader, but disables only *expiration* in the client unless a
     *        timestamp is presented on a later request.
     * @return {?{
     *   timestamp: ?number,
     *   width: number,
     *   height: number,
     *   ifd: ?string,
     *   data: string
     * }}
     */
    static cacheValue(response, timestamp) {
        if (!response || response.status === LoadImageResponseStatus.ERROR) {
            return null;
        }
        // Response result defined only when status === SUCCESS.
        assert(response.width);
        assert(response.height);
        assert(response.data);
        return {
            timestamp: timestamp || null,
            width: response.width,
            height: response.height,
            ifd: response.ifd,
            data: response.data,
        };
    }
}
/**
 * Encapsulates a request to load an image.
 * All methods must be static since this is passed between isolated contexts.
 *
 * @struct
 */
class LoadImageRequest {
    constructor() {
        // Parts that uniquely identify the request.
        /**
         * Url of the requested image. Undefined only for cancellations.
         * @type {string|undefined}
         */
        this.url;
        /** @type{ImageOrientation|ImageTransformParam|undefined} */
        this.orientation;
        /** @type {number|undefined} */
        this.scale;
        /** @type {number|undefined} */
        this.width;
        /** @type {number|undefined} */
        this.height;
        /** @type {number|undefined} */
        this.maxWidth;
        /** @type {number|undefined} */
        this.maxHeight;
        // Parts that control the request flow.
        /** @type {number|undefined} */
        this.taskId;
        /** @type {boolean|undefined} */
        this.cancel;
        /** @type {boolean|undefined} */
        this.crop;
        /** @type {number|undefined} */
        this.timestamp;
        /** @type {boolean|undefined} */
        this.cache;
        /** @type {number|undefined} */
        this.priority;
    }
    /**
     * Creates a cache key.
     *
     * @return {?string} Cache key. It may be null if the cache does not support
     *     the request. e.g. Data URI.
     */
    static cacheKey(request) {
        if (/^data:/i.test(request.url)) {
            return null;
        }
        return JSON.stringify({
            url: request.url,
            orientation: request.orientation,
            scale: request.scale,
            width: request.width,
            height: request.height,
            maxWidth: request.maxWidth,
            maxHeight: request.maxHeight,
        });
    }
    /**
     * Creates a cancel request.
     *
     * @param{number} taskId The task to cancel.
     * @return {!LoadImageRequest}
     */
    static createCancel(taskId) {
        return /** @type {!LoadImageRequest} */ ({ taskId: taskId, cancel: true });
    }
    /**
     * Creates a load request from an option map.
     * Only the timestamp may be undefined.
     *
     * @param {{
     *   url: !string,
     *   maxWidth: number,
     *   maxHeight: number,
     *   cache: boolean,
     *   priority: number,
     *   timestamp: (number|undefined),
     *   orientation: ?ImageTransformParam,
     * }} params Request parameters.
     * @return {!LoadImageRequest}
     */
    static createRequest(params) {
        return /** @type {!LoadImageRequest} */ (params);
    }
    /**
     * Creates a request to load a full-sized image.
     * Only the timestamp may be undefined.
     *
     * @param {{
     *   url: !string,
     *   cache: boolean,
     *   priority: number,
     *   timestamp: (?number|undefined),
     * }} params Request parameters.
     * @return {!LoadImageRequest}
     */
    static createFullImageRequest(params) {
        return /** @type {!LoadImageRequest} */ (params);
    }
    /**
     * Creates a load request from a url string. All options are undefined.
     *
     * @param {string} url
     * @return {!LoadImageRequest}
     */
    static createForUrl(url) {
        return /** @type {!LoadImageRequest} */ ({ url: url });
    }
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// @ts-nocheck
function ImageLoaderUtil() { }
/**
 * Checks if the options on the request contain any image processing.
 *
 * @param {number} width Source width.
 * @param {number} height Source height.
 * @param {!LoadImageRequest} request The request, containing resizing options.
 * @return {boolean} True if yes, false if not.
 */
ImageLoaderUtil.shouldProcess = function (width, height, request) {
    const targetDimensions = ImageLoaderUtil.resizeDimensions(width, height, request);
    // Dimensions has to be adjusted.
    if (targetDimensions.width !== width || targetDimensions.height !== height) {
        return true;
    }
    // Orientation has to be adjusted.
    if (!request.orientation.isIdentity()) {
        return true;
    }
    // No changes required.
    return false;
};
/**
 * Calculates dimensions taking into account resize options, such as:
 * - scale: for scaling,
 * - maxWidth, maxHeight: for maximum dimensions,
 * - width, height: for exact requested size.
 * Returns the target size as hash array with width, height properties.
 *
 * @param {number} width Source width.
 * @param {number} height Source height.
 * @param {!LoadImageRequest} request The request, containing resizing options.
 * @return {!{width: number, height:number}} Dimensions.
 */
ImageLoaderUtil.resizeDimensions = function (width, height, request) {
    const scale = request.scale || 1;
    const targetDimensions = request.orientation.getSizeAfterCancelling(width * scale, height * scale);
    let targetWidth = targetDimensions.width;
    let targetHeight = targetDimensions.height;
    if (request.maxWidth && targetWidth > request.maxWidth) {
        const scale = request.maxWidth / targetWidth;
        targetWidth *= scale;
        targetHeight *= scale;
    }
    if (request.maxHeight && targetHeight > request.maxHeight) {
        const scale = request.maxHeight / targetHeight;
        targetWidth *= scale;
        targetHeight *= scale;
    }
    if (request.width) {
        targetWidth = request.width;
    }
    if (request.height) {
        targetHeight = request.height;
    }
    targetWidth = Math.round(targetWidth);
    targetHeight = Math.round(targetHeight);
    return { width: targetWidth, height: targetHeight };
};
/**
 * Performs resizing and cropping of the source image into the target canvas.
 *
 * @param {HTMLCanvasElement|Image} source Source image or canvas.
 * @param {HTMLCanvasElement} target Target canvas.
 * @param {!LoadImageRequest} request The request, containing resizing options.
 */
ImageLoaderUtil.resizeAndCrop = function (source, target, request) {
    // Calculates copy parameters.
    const copyParameters = ImageLoaderUtil.calculateCopyParameters(source, request);
    target.width = copyParameters.canvas.width;
    target.height = copyParameters.canvas.height;
    // Apply.
    const targetContext = 
    /** @type {CanvasRenderingContext2D} */ (target.getContext('2d'));
    targetContext.save();
    request.orientation.cancelImageOrientation(targetContext, copyParameters.target.width, copyParameters.target.height);
    targetContext.drawImage(source, copyParameters.source.x, copyParameters.source.y, copyParameters.source.width, copyParameters.source.height, copyParameters.target.x, copyParameters.target.y, copyParameters.target.width, copyParameters.target.height);
    targetContext.restore();
};
/**
 * Calculates copy parameters.
 *
 * @param {HTMLCanvasElement|Image} source Source image or canvas.
 * @param {!LoadImageRequest} request The request, containing resizing options.
 * @return {!ImageLoaderUtil.CopyParameters} Calculated copy parameters.
 */
ImageLoaderUtil.calculateCopyParameters = function (source, request) {
    if (request.crop) {
        // When an image is cropped, target should be a fixed size square.
        assert(request.width);
        assert(request.height);
        assert(request.width === request.height);
        // The length of shorter edge becomes dimension of cropped area in the
        // source.
        const cropSourceDimension = Math.min(source.width, source.height);
        return {
            source: {
                x: Math.floor((source.width / 2) - (cropSourceDimension / 2)),
                y: Math.floor((source.height / 2) - (cropSourceDimension / 2)),
                width: cropSourceDimension,
                height: cropSourceDimension,
            },
            target: {
                x: 0,
                y: 0,
                width: request.width,
                height: request.height,
            },
            canvas: {
                width: request.width,
                height: request.height,
            },
        };
    }
    // Target dimension is calculated in the rotated(transformed) coordinate.
    const targetCanvasDimensions = ImageLoaderUtil.resizeDimensions(source.width, source.height, request);
    const targetDimensions = request.orientation.getSizeAfterCancelling(targetCanvasDimensions.width, targetCanvasDimensions.height);
    return {
        source: {
            x: 0,
            y: 0,
            width: source.width,
            height: source.height,
        },
        target: {
            x: 0,
            y: 0,
            width: targetDimensions.width,
            height: targetDimensions.height,
        },
        canvas: {
            width: targetCanvasDimensions.width,
            height: targetCanvasDimensions.height,
        },
    };
};

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// @ts-nocheck
/**
 * Declares the piex-wasm Module interface. The Module has many interfaces
 * but only declare the parts required for PIEX work.
 *
 * @typedef {{
 *  calledRun: boolean,
 *  HEAP8: !Uint8Array,
 *  _malloc: function(number):number,
 *  _free: function(number):undefined,
 *  image: function(number, number):!PiexWasmImageResult
 * }}
 */
/**
 * Module defined by 'piex.js.wasm' script upon initialization.
 * @type {!PiexWasmModule}
 */
let PiexModule;
/**
 * Module constructor defined by 'piex.js.wasm' script.
 * @type {function(!ModuleInitParams): !Promise<!PiexWasmModule>}
 */
const initPiexModule = 
/** @type {function(!ModuleInitParams): !Promise<!PiexWasmModule>} */ (globalThis['createPiexModule']);
console.log(`[PiexLoader] available [init=${typeof initPiexModule}]`);
/**
 * Set true if the Module.onAbort() handler is called.
 * @type {boolean}
 */
let piexFailed = false;
const MODULE_SETTINGS = {
    /**
     * Installs an (Emscripten) Module.onAbort handler. Record that the
     * Module has failed in piexFailed and re-throw the error.
     *
     * @param {!Error|string} error
     * @throws {!Error|string}
     */
    onAbort: (error) => {
        piexFailed = true;
        throw error;
    },
};
/** @type {?Promise<undefined>} */
let initPiexModulePromise = null;
/**
 * Returns a promise that resolves once initialization is complete. PiexModule
 * may be undefined before this promise resolves.
 * @return {!Promise<undefined>}
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
 * @return {boolean}
 */
function piexModuleFailed() {
    if (piexFailed || !PiexModule.calledRun) {
        console.error('[PiexLoader] piex wasm module failed');
        return true;
    }
    return false;
}
/**
 * @struct
 */
class PiexLoaderResponse {
    /**
     * @param {!PiexPreviewImageData} data The extracted preview image data.
     */
    constructor(data) {
        /**
         * @type {!ArrayBuffer}
         * @const
         */
        this.thumbnail = data.thumbnail;
        /**
         * @type {string}
         * @const
         */
        this.mimeType = data.mimeType || 'image/jpeg';
        /**
         * JEITA EXIF image orientation being an integer in [1..8].
         * @type {number}
         * @const
         */
        this.orientation = data.orientation;
        /**
         * JEITA EXIF image color space: 'sRgb' or 'adobeRgb'.
         * @type {string}
         * @const
         */
        this.colorSpace = data.colorSpace;
        /**
         * JSON encoded RAW image photographic details.
         * @type {?string}
         * @const
         */
        this.ifd = data.ifd || null;
    }
}
/**
 * JFIF APP2 ICC_PROFILE segment containing an AdobeRGB1998 Color Profile.
 * @const {!Uint8Array}
 */
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
    /**
     * @param {!ArrayBuffer} buffer - RAW image source data.
     */
    constructor(buffer) {
        /**
         * @const {!Uint8Array}
         * @private
         */
        this.source = new Uint8Array(buffer);
        /**
         * @const {number}
         * @private
         */
        this.length = buffer.byteLength;
        /**
         * @type {number}
         * @private
         */
        this.memory = 0;
    }
    /**
     * Calls Module.image() to process |this.source| and return the result.
     *
     * @throws {!Error} Memory allocation error.
     * @return {!PiexWasmImageResult}
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
     * @param {!PiexWasmImageResult} result
     * @throws {!Error} Data access security error.
     * @return {!PiexPreviewImageData}
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
     * @private
     * @param {!PiexWasmImageResult} result
     * @throws {!Error} Data access security error.
     * @return {!PiexPreviewImageData}
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
     * @private
     * @param {!PiexWasmImageResult} result
     * @throws {!Error} Data access security error.
     * @return {!PiexPreviewImageData}
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
                    case 3:
                        bitmap.setUint8(output++, 0);
                    // Fall through.
                    case 2:
                        bitmap.setUint8(output++, 0);
                    // Fall through.
                    case 1:
                        bitmap.setUint8(output++, 0);
                    // Fall through.
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
     * @private
     * @param {!PiexWasmPreviewImageMetadata} preview
     * @param {!Uint8Array} view
     * @return {!Uint8Array}
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
     * @private
     * @param {!PiexWasmImageResult} result
     * @param {number} orientation - image EXIF orientation
     * @return {?string}
     */
    details_(result, orientation) {
        const details = result.details;
        if (!details) {
            return null;
        }
        /** @type {!Object<string|number, number|string>} */
        const format = {};
        /** @type {!Array<!Array<string|number>>} */
        const entries = Object.entries(details);
        for (const [key, value] of entries) {
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
const PiexLoader = {};
/**
 * Loads a RAW image. Returns the image metadata and the image thumbnail in a
 * PiexLoaderResponse.
 *
 * piexModuleFailed() returns true if the Module is in an unrecoverable error
 * state. This is rare, but possible, and the only reliable way to recover is
 * to reload the page. Callback |onPiexModuleFailed| is used to indicate that
 * the caller should initiate failure recovery steps.
 *
 * @param {!ArrayBuffer} buffer
 * @param {!function()} onPiexModuleFailed
 * @return {!Promise<!PiexLoaderResponse>}
 */
PiexLoader.load = function (buffer, onPiexModuleFailed) {
    /** @type {?ImageBuffer} */
    let imageBuffer;
    return piexModuleInitialized()
        .then(() => {
        if (piexModuleFailed()) {
            throw new Error('piex wasm module failed');
        }
        imageBuffer = new ImageBuffer(buffer);
        return imageBuffer.process();
    })
        .then((/** !PiexWasmImageResult */ result) => {
        const buffer = /** @type {!ImageBuffer} */ (imageBuffer);
        return new PiexLoaderResponse(buffer.preview(result));
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
};

// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Creates and starts downloading and then resizing of the image. Finally,
 * returns the image using the callback.
 */
class ImageRequestTask {
    /**
     * @param {string} id Request ID.
     * @param {ImageCache} cache Cache object.
     * @param {LoadImageRequest} request Request message as a hash array.
     * @param {(a: LoadImageResponse)=> void} callback Response handler.
     */
    constructor(id, cache, request, callback) {
        /**
         * Global ID (concatenated client ID and client request ID).
         * @type {string}
         * @private
         */
        this.id_ = id;
        /**
         * @type {ImageCache}
         * @private
         */
        this.cache_ = cache;
        /**
         * @type {!LoadImageRequest}
         * @private
         */
        this.request_ = request;
        /**
         * @type {(a: LoadImageResponse)=>void}
         * @private
         */
        this.sendResponse_ = callback;
        /**
         * Temporary image used to download images.
         * @type {HTMLImageElement}
         * @private
         */
        this.image_ = new Image();
        /**
         * MIME type of the fetched image.
         * @type {?string}
         * @private
         */
        this.contentType_ = null;
        /**
         * IFD data of the fetched image. Only RAW images provide a non-null
         * ifd at this time. Drive images might provide an ifd in future.
         * @type {?string}
         * @private
         */
        this.ifd_ = null;
        /**
         * Used to download remote images using http:// or https:// protocols.
         * @type {?XMLHttpRequest}
         * @private
         */
        this.xhr_ = null;
        /**
         * Temporary canvas used to resize and compress the image.
         * @type {HTMLCanvasElement}
         * @private
         */
        this.canvas_ =
            /** @type {HTMLCanvasElement} */ (document.createElement('canvas'));
        /**
         * @type {CanvasRenderingContext2D}
         * @private
         */
        this.context_ =
            /** @type {CanvasRenderingContext2D} */ (this.canvas_.getContext('2d'));
        /**
         * @type {ImageOrientation|null}
         */
        this.renderOrientation_ = null;
        /**
         * Callback to be called once downloading is finished.
         * @type {?VoidCallback}
         * @private
         */
        this.downloadCallback_ = null;
        /**
         * @type {boolean}
         * @private
         */
        this.aborted_ = false;
    }
    /**
     * Extracts MIME type of a data URL.
     * @param {string|undefined} dataUrl Data URL.
     * @return {?string|undefined} MIME type string, or null if the URL is
     *     invalid.
     */
    static getDataUrlMimeType(dataUrl) {
        const dataUrlMatches = (dataUrl || '').match(/^data:([^,;]*)[,;]/);
        return dataUrlMatches ? dataUrlMatches[1] : null;
    }
    /**
     * Returns ID of the request.
     * @return {string} Request ID.
     */
    getId() {
        return this.id_;
    }
    /**
     * Returns the client's task ID for the request.
     * @return {number}
     */
    getClientTaskId() {
        // Every incoming request should have been given a taskId.
        assert(this.request_.taskId);
        // @ts-ignore: error TS2322: Type 'number | undefined' is not assignable to
        // type 'number'.
        return this.request_.taskId;
    }
    /**
     * Returns priority of the request. The higher priority, the faster it will
     * be handled. The highest priority is 0. The default one is 2.
     *
     * @return {number} Priority.
     */
    getPriority() {
        return (this.request_.priority !== undefined) ? this.request_.priority : 2;
    }
    /**
     * Tries to load the image from cache, if it exists in the cache, and sends
     * the response. Fails if the image is not found in the cache.
     *
     * @param {VoidCallback} onSuccess Success callback.
     * @param {VoidCallback} onFailure Failure callback.
     */
    loadFromCacheAndProcess(onSuccess, onFailure) {
        this.loadFromCache_((width, height, ifd, data) => {
            this.ifd_ = ifd;
            this.sendImageData_(width, height, data);
            onSuccess();
        }, onFailure); // Not found in cache.
    }
    /**
     * Tries to download the image, resizes and sends the response.
     *
     * @param {VoidCallback} callback Completion callback.
     */
    downloadAndProcess(callback) {
        if (this.downloadCallback_) {
            throw new Error('Downloading already started.');
        }
        this.downloadCallback_ = callback;
        this.downloadThumbnail_(this.onImageLoad_.bind(this), this.onImageError_.bind(this));
    }
    /**
     * Fetches the image from the persistent cache.
     *
     * @param {(a: number, b: number, c: ?string, d: string)=> void} onSuccess
     *    Success callback with the image width, height, ?ifd, and data.
     * @param {VoidCallback} onFailure Failure callback.
     * @private
     */
    loadFromCache_(onSuccess, onFailure) {
        const cacheKey = LoadImageRequest.cacheKey(this.request_);
        if (!cacheKey) {
            // Cache key is not provided for the request.
            onFailure();
            return;
        }
        if (!this.request_.cache) {
            // Cache is disabled for this request; therefore, remove it from cache
            // if existed.
            this.cache_.removeImage(cacheKey);
            onFailure();
            return;
        }
        const timestamp = this.request_.timestamp;
        if (!timestamp) {
            // Persistent cache is available only when a timestamp is provided.
            onFailure();
            return;
        }
        // @ts-ignore: error TS2345: Argument of type '(a: number, b: number, c:
        // string | null, d: string) => void' is not assignable to parameter of type
        // '(width: number, height: number, ifd?: string | undefined, data?: string
        // | undefined) => void'.
        this.cache_.loadImage(cacheKey, timestamp, onSuccess, onFailure);
    }
    /**
     * Saves the image to the persistent cache.
     *
     * @param {number} width Image width.
     * @param {number} height Image height.
     * @param {string} data Image data.
     * @private
     */
    saveToCache_(width, height, data) {
        const timestamp = this.request_.timestamp;
        if (!this.request_.cache || !timestamp) {
            // Persistent cache is available only when a timestamp is provided.
            return;
        }
        const cacheKey = LoadImageRequest.cacheKey(this.request_);
        if (!cacheKey) {
            // Cache key is not provided for the request.
            return;
        }
        // @ts-ignore: error TS2345: Argument of type 'string | null' is not
        // assignable to parameter of type 'string | undefined'.
        this.cache_.saveImage(cacheKey, timestamp, width, height, this.ifd_, data);
    }
    /**
     * Gets the target image size for external thumbnails, where supported.
       The defaults replicate drivefs thumbnailer behavior.
     * @return {{width: !number, height: !number}}
     */
    targetThumbnailSize_() {
        const crop = !!this.request_.crop;
        const defaultWidth = crop ? ImageRequestTask.DEFAULT_THUMBNAIL_SQUARE_SIZE :
            ImageRequestTask.DEFAULT_THUMBNAIL_WIDTH;
        const defaultHeight = crop ?
            ImageRequestTask.DEFAULT_THUMBNAIL_SQUARE_SIZE :
            ImageRequestTask.DEFAULT_THUMBNAIL_HEIGHT;
        return {
            width: this.request_.width || defaultWidth,
            height: this.request_.height || defaultHeight,
        };
    }
    /**
     * Loads |this.image_| with the |this.request_.url| source or the thumbnail
     * image of the source.
     *
     * @param {VoidCallback} onSuccess Success callback.
     * @param {VoidCallback} onFailure Failure callback.
     * @private
     */
    downloadThumbnail_(onSuccess, onFailure) {
        // Load methods below set |this.image_.src|. Call revokeObjectURL(src) to
        // release resources if the image src was created with createObjectURL().
        this.image_.onload = () => {
            URL.revokeObjectURL(this.image_.src);
            onSuccess();
        };
        this.image_.onerror = () => {
            URL.revokeObjectURL(this.image_.src);
            onFailure();
        };
        // Load dataURL sources directly.
        const dataUrlMimeType = ImageRequestTask.getDataUrlMimeType(this.request_.url);
        if (dataUrlMimeType) {
            // @ts-ignore: error TS2322: Type 'string | undefined' is not assignable
            // to type 'string'.
            this.image_.src = this.request_.url;
            this.contentType_ = dataUrlMimeType;
            return;
        }
        // @ts-ignore: error TS7006: Parameter 'dataUrl' implicitly has an 'any'
        // type.
        const onExternalThumbnail = (dataUrl) => {
            if (chrome.runtime.lastError) {
                console.warn(chrome.runtime.lastError.message);
                onFailure();
            }
            else if (dataUrl) {
                this.image_.src = dataUrl;
                // @ts-ignore: error TS2322: Type 'string | null | undefined' is not
                // assignable to type 'string | null'.
                this.contentType_ = ImageRequestTask.getDataUrlMimeType(dataUrl);
            }
            else {
                onFailure();
            }
        };
        // Load Drive source thumbnail.
        // @ts-ignore: error TS2532: Object is possibly 'undefined'.
        const drivefsUrlMatches = this.request_.url.match(/^drivefs:(.*)/);
        if (drivefsUrlMatches) {
            const url = drivefsUrlMatches[1];
            const cropToSquare = !!this.request_.crop;
            // @ts-ignore: error TS2339: Property 'imageLoaderPrivate' does not exist
            // on type 'typeof chrome'.
            chrome.imageLoaderPrivate.getDriveThumbnail(
            // @ts-ignore: Convert the `onExternalThumbnail` callback to promise.
            url, cropToSquare, onExternalThumbnail);
            return;
        }
        // Load PDF source thumbnail.
        // @ts-ignore: error TS2532: Object is possibly 'undefined'.
        if (this.request_.url.endsWith('.pdf')) {
            const { width, height } = this.targetThumbnailSize_();
            // @ts-ignore: error TS2339: Property 'imageLoaderPrivate' does not exist
            // on type 'typeof chrome'.
            chrome.imageLoaderPrivate.getPdfThumbnail(
            // @ts-ignore: Convert the `onExternalThumbnail` callback to promise.
            this.request_.url, width, height, onExternalThumbnail);
            return;
        }
        // Load DocumentsProvider thumbnail, if supported.
        // @ts-ignore: error TS2532: Object is possibly 'undefined'.
        const isDocumentsProviderRequest = !!this.request_.url.match(RegExp('filesystem:chrome-extension://[a-z]+/external/arc-documents-provider/.*'));
        if (isDocumentsProviderRequest) {
            const { width, height } = this.targetThumbnailSize_();
            // @ts-ignore: error TS2339: Property 'imageLoaderPrivate' does not exist
            // on type 'typeof chrome'.
            chrome.imageLoaderPrivate.getArcDocumentsProviderThumbnail(
            // @ts-ignore: Convert the `onExternalThumbnail` callback to promise.
            this.request_.url, width, height, onExternalThumbnail);
            return;
        }
        // @ts-ignore: error TS2345: Argument of type 'string | undefined' is not
        // assignable to parameter of type 'string'.
        const fileType = getFileTypeForName(this.request_.url);
        // Load video source thumbnail.
        if (fileType.type === 'video') {
            // @ts-ignore: error TS2345: Argument of type 'string | undefined' is not
            // assignable to parameter of type 'string'.
            this.createVideoThumbnailUrl_(this.request_.url)
                .then((url) => {
                // @ts-ignore: error TS2322: Type 'Blob' is not assignable to type
                // 'string'.
                this.image_.src = url;
            })
                .catch((error) => {
                console.warn('Video thumbnail error: ', error);
                onFailure();
            });
            return;
        }
        // Load the source directly.
        // @ts-ignore: error TS2345: Argument of type 'string | undefined' is not
        // assignable to parameter of type 'string'.
        this.load(this.request_.url, (contentType, blob) => {
            // Load RAW image source thumbnail.
            if (fileType.type === 'raw') {
                blob.arrayBuffer()
                    // @ts-ignore: error TS2339: Property 'reload' does not exist on
                    // type 'typeof runtime'.
                    .then(buffer => PiexLoader.load(buffer, chrome.runtime.reload))
                    .then(data => {
                    this.renderOrientation_ =
                        ImageOrientation.fromExifOrientation(data.orientation);
                    this.ifd_ = data.ifd;
                    this.contentType_ = data.mimeType;
                    const blob = new Blob([data.thumbnail], { type: data.mimeType });
                    this.image_.src = URL.createObjectURL(blob);
                })
                    .catch(onFailure);
                return;
            }
            this.image_.src = blob ? URL.createObjectURL(blob) : '!';
            this.contentType_ = contentType || null;
            if (this.contentType_ === 'image/jpeg') {
                this.renderOrientation_ = ImageOrientation.fromExifOrientation(1);
            }
        }, onFailure);
    }
    /**
     * Creates a video thumbnail data url from video file.
     *
     * @param {string} url Video URL.
     * @return {!Promise<Blob>}  Promise that resolves with the data url of video
     *    thumbnail.
     * @private
     */
    createVideoThumbnailUrl_(url) {
        const video = assertInstanceof(document.createElement('video'), HTMLVideoElement);
        // @ts-ignore: error TS2322: Type 'Promise<string | Blob>' is not assignable
        // to type 'Promise<Blob>'.
        return Promise
            .race([
            new Promise((resolve, reject) => {
                video.addEventListener('loadedmetadata', () => {
                    video.addEventListener('seeked', () => {
                        if (video.readyState >= video.HAVE_CURRENT_DATA) {
                            // @ts-ignore: error TS2810: Expected 1 argument, but got 0.
                            // 'new Promise()' needs a JSDoc hint to produce a 'resolve'
                            // that can be called without arguments.
                            resolve();
                        }
                        else {
                            video.addEventListener('loadeddata', resolve);
                        }
                    });
                    const halfDuration = video.duration / 2;
                    video.currentTime = halfDuration;
                });
                video.addEventListener('error', reject);
                video.preload = 'metadata';
                video.src = url;
                video.load();
            }),
            new Promise((resolve) => {
                setTimeout(resolve, ImageRequestTask.MAX_MILLISECONDS_TO_LOAD_VIDEO);
            }).then(() => {
                // If we can't get the frame at the midpoint of the video after 3
                // seconds have passed for some reason (e.g. unseekable video), we
                // give up generating thumbnail.
                video.src =
                    ''; // Make sure to stop loading remaining part of the video.
                throw new Error('Seeking video failed.');
            }),
        ])
            .then(() => {
            const canvas = assertInstanceof(document.createElement('canvas'), HTMLCanvasElement);
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            assertInstanceof(canvas.getContext('2d'), CanvasRenderingContext2D)
                .drawImage(video, 0, 0);
            return canvas.toDataURL();
        });
    }
    /**
     * Loads an image.
     *
     * @param {string} url URL to the resource to be fetched.
     * @param {(a: string, b: Blob)=>void} onSuccess Success callback with the
     *     content type and the fetched data.
     * @param {VoidCallback} onFailure Failure callback.
     */
    load(url, onSuccess, onFailure) {
        this.aborted_ = false;
        // Do not call any callbacks when aborting.
        const onMaybeSuccess = 
        /** @type {(a: string, b: Blob)=>void} */ ((contentType, response) => {
            // When content type is not available, try to estimate it from url.
            if (!contentType) {
                contentType =
                    // @ts-ignore: error TS7053: Element implicitly has an 'any'
                    // type because expression of type 'string' can't be used to
                    // index type '{ gif: string; png: string; svg: string; bmp:
                    // string; jpg: string; jpeg: string; }'.
                    ImageRequestTask
                        .ExtensionContentTypeMap[this.extractExtension_(url)];
            }
            if (!this.aborted_) {
                onSuccess(contentType, response);
            }
        });
        const onMaybeFailure = 
        // @ts-ignore: error TS6133: 'opt_code' is declared but its value is
        // never read.
        /** @type {(a?: number)=>void} */ ((opt_code) => {
            if (!this.aborted_) {
                onFailure();
            }
        });
        // The query parameter is workaround for crbug.com/379678, which forces the
        // browser to obtain the latest contents of the image.
        const noCacheUrl = url + '?nocache=' + Date.now();
        this.xhr_ =
            ImageRequestTask.load_(noCacheUrl, onMaybeSuccess, onMaybeFailure);
    }
    /**
     * Extracts extension from url.
     * @param {string} url Url.
     * @return {string} Extracted extension, e.g. png.
     */
    extractExtension_(url) {
        const result = (/\.([a-zA-Z]+)$/i).exec(url);
        // @ts-ignore: error TS2322: Type 'string | undefined' is not assignable to
        // type 'string'.
        return result ? result[1] : '';
    }
    /**
     * Fetches data using XmlHttpRequest.
     *
     * @param {string} url URL to the resource to be fetched.
     * @param {(a: string, b: Blob)=>void} onSuccess Success callback with the
     *     content type and the fetched data.
     * @param {(a?: number)=>void} onFailure Failure callback with the error code
     *     if available.
     * @return {XMLHttpRequest} XHR instance.
     * @private
     */
    static load_(url, onSuccess, onFailure) {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status !== 200) {
                onFailure(xhr.status);
                return;
            }
            const response = /** @type {Blob} */ (xhr.response);
            const contentType = xhr.getResponseHeader('Content-Type') || response.type;
            onSuccess(contentType, response);
        };
        // Perform a xhr request.
        try {
            xhr.open('GET', url, true);
            xhr.send();
        }
        catch (e) {
            onFailure();
        }
        return xhr;
    }
    /**
     * Sends the resized image via the callback. If the image has been changed,
     * then packs the canvas contents, otherwise sends the raw image data.
     *
     * @param {boolean} imageChanged Whether the image has been changed.
     * @private
     */
    sendImage_(imageChanged) {
        let width;
        let height;
        let data;
        if (!imageChanged) {
            // The image hasn't been processed, so the raw data can be directly
            // forwarded for speed (no need to encode the image again).
            width = this.image_.width;
            height = this.image_.height;
            data = this.image_.src;
        }
        else {
            // The image has been resized or rotated, therefore the canvas has to be
            // encoded to get the correct compressed image data.
            width = this.canvas_.width;
            height = this.canvas_.height;
            switch (this.contentType_) {
                case 'image/jpeg':
                    data = this.canvas_.toDataURL('image/jpeg', 0.9);
                    break;
                default:
                    data = this.canvas_.toDataURL('image/png');
                    break;
            }
        }
        // Send the image data and also save it in the persistent cache.
        this.sendImageData_(width, height, data);
        this.saveToCache_(width, height, data);
    }
    /**
     * Sends the resized image via the callback.
     *
     * @param {number} width Image width.
     * @param {number} height Image height.
     * @param {string} data Image data.
     * @private
     */
    sendImageData_(width, height, data) {
        const result = { width, height, ifd: this.ifd_, data };
        this.sendResponse_(new LoadImageResponse(LoadImageResponseStatus.SUCCESS, this.getClientTaskId(), result));
    }
    /**
     * Handler, when contents are loaded into the image element. Performs image
     * processing operations if needed, and finalizes the request process.
     * @private
     */
    onImageLoad_() {
        const requestOrientation = this.request_.orientation;
        // Override the request orientation before processing if needed.
        if (this.renderOrientation_) {
            this.request_.orientation = this.renderOrientation_;
        }
        // Perform processing if the url is not a data url, or if there are some
        // operations requested.
        let imageChanged = false;
        // @ts-ignore: error TS2532: Object is possibly 'undefined'.
        if (!(this.request_.url.match(/^data/) ||
            // @ts-ignore: error TS2532: Object is possibly 'undefined'.
            this.request_.url.match(/^drivefs:/)) ||
            ImageLoaderUtil.shouldProcess(this.image_.width, this.image_.height, this.request_)) {
            // @ts-ignore: error TS2345: Argument of type 'HTMLImageElement' is not
            // assignable to parameter of type 'HTMLCanvasElement | (new (width?:
            // number | undefined, height?: number | undefined) => HTMLImageElement)'.
            ImageLoaderUtil.resizeAndCrop(this.image_, this.canvas_, this.request_);
            imageChanged = true; // The image is now on the <canvas>.
        }
        // Restore the request orientation after processing.
        if (this.renderOrientation_) {
            this.request_.orientation = requestOrientation;
        }
        // Finalize the request.
        this.sendImage_(imageChanged);
        this.cleanup_();
        // @ts-ignore: error TS2721: Cannot invoke an object which is possibly
        // 'null'.
        this.downloadCallback_();
    }
    /**
     * Handler, when loading of the image fails. Sends a failure response and
     * finalizes the request process.
     * @private
     */
    onImageError_() {
        this.sendResponse_(new LoadImageResponse(LoadImageResponseStatus.ERROR, this.getClientTaskId()));
        this.cleanup_();
        // @ts-ignore: error TS2721: Cannot invoke an object which is possibly
        // 'null'.
        this.downloadCallback_();
    }
    /**
     * Cancels the request.
     */
    cancel() {
        this.cleanup_();
        // If downloading has started, then call the callback.
        if (this.downloadCallback_) {
            this.downloadCallback_();
        }
    }
    /**
     * Cleans up memory used by this request.
     * @private
     */
    cleanup_() {
        this.image_.onerror = () => { };
        this.image_.onload = () => { };
        // Transparent 1x1 pixel gif, to force garbage collecting.
        this.image_.src =
            'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAA' +
                'ABAAEAAAICTAEAOw==';
        this.aborted_ = true;
        if (this.xhr_) {
            this.xhr_.abort();
        }
        // Dispose memory allocated by Canvas.
        this.canvas_.width = 0;
        this.canvas_.height = 0;
    }
}
/**
 * The maximum milliseconds to load video. If loading video exceeds the limit,
 * we give up generating video thumbnail and free the consumed memory.
 * @const
 * @type {number}
 */
ImageRequestTask.MAX_MILLISECONDS_TO_LOAD_VIDEO = 3000;
/**
 * The default size (width and height) of a square thumbnail. The value is set
 * to match the behavior of drivefs thumbnail generation.
 * See chromeos/ash/components/drivefs/mojom/drivefs.mojom
 * @const
 * @type {number}
 */
ImageRequestTask.DEFAULT_THUMBNAIL_SQUARE_SIZE = 360;
/**
 * The default width of a non-square thumbnail. The value is set to match the
 * behavior of drivefs thumbnail generation.
 * See chromeos/ash/components/drivefs/mojom/drivefs.mojom
 * @const
 * @type {number}
 */
ImageRequestTask.DEFAULT_THUMBNAIL_WIDTH = 500;
/**
 * The default height of a non-square thumbnail. The value is set to match the
 * behavior of drivefs thumbnail generation.
 * See chromeos/ash/components/drivefs/mojom/drivefs.mojom
 * @const
 * @type {number}
 */
ImageRequestTask.DEFAULT_THUMBNAIL_HEIGHT = 500;
/**
 * A map which is used to estimate content type from extension.
 * @enum {string}
 */
ImageRequestTask.ExtensionContentTypeMap = {
    gif: 'image/gif',
    png: 'image/png',
    svg: 'image/svg',
    bmp: 'image/bmp',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
};

// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// @ts-nocheck
/**
 * Scheduler for ImageRequestTask objects. Fetches tasks from a queue and
 * processes them synchronously, taking into account priorities. The highest
 * priority is 0.
 */
class Scheduler {
    constructor() {
        /**
         * List of tasks waiting to be checked. If these items are available in
         * cache, then they are processed immediately after starting the scheduler.
         * However, if they have to be downloaded, then these tasks are moved
         * to pendingTasks_.
         *
         * @type {Array<ImageRequestTask>}
         * @private
         */
        this.newTasks_ = [];
        /**
         * List of pending tasks for images to be downloaded.
         * @type {Array<ImageRequestTask>}
         * @private
         */
        this.pendingTasks_ = [];
        /**
         * List of tasks being processed.
         * @type {Array<ImageRequestTask>}
         * @private
         */
        this.activeTasks_ = [];
        /**
         * Map of tasks being added to the queue, but not finalized yet. Keyed by
         * the ImageRequestTask id.
         * @type {Object<string, ImageRequestTask>}>
         * @private
         */
        this.tasks_ = {};
        /**
         * If the scheduler has been started.
         * @type {boolean}
         * @private
         */
        this.started_ = false;
    }
    /**
     * Adds a task to the internal priority queue and executes it when tasks
     * with higher priorities are finished. If the result is cached, then it is
     * processed immediately once the scheduler is started.
     *
     * @param {ImageRequestTask} task A task to be run
     */
    add(task) {
        if (!this.started_) {
            this.newTasks_.push(task);
            this.tasks_[task.getId()] = task;
            return;
        }
        // Enqueue the tasks, since already started.
        this.pendingTasks_.push(task);
        this.sortPendingTasks_();
        this.continue_();
    }
    /**
     * Removes a task from the scheduler (if exists).
     * @param {string} taskId Unique ID of the task.
     */
    remove(taskId) {
        const task = this.tasks_[taskId];
        if (!task) {
            return;
        }
        // Remove from the internal queues with pending tasks.
        const newIndex = this.newTasks_.indexOf(task);
        if (newIndex !== -1) {
            this.newTasks_.splice(newIndex, 1);
        }
        const pendingIndex = this.pendingTasks_.indexOf(task);
        if (pendingIndex !== -1) {
            this.pendingTasks_.splice(pendingIndex, 1);
        }
        // Cancel the task.
        task.cancel();
        delete this.tasks_[taskId];
    }
    /**
     * Starts handling tasks.
     */
    start() {
        this.started_ = true;
        // Process tasks added before scheduler has been started.
        this.pendingTasks_ = this.newTasks_;
        this.sortPendingTasks_();
        this.newTasks_ = [];
        // Start serving enqueued tasks.
        this.continue_();
    }
    /**
     * Sorts pending tasks by priorities.
     * @private
     */
    sortPendingTasks_() {
        this.pendingTasks_.sort((a, b) => {
            return a.getPriority() - b.getPriority();
        });
    }
    /**
     * Processes pending tasks from the queue. There is no guarantee that
     * all of the tasks will be processed at once.
     *
     * @private
     */
    continue_() {
        // Run only up to MAXIMUM_IN_PARALLEL in the same time.
        while (this.pendingTasks_.length &&
            this.activeTasks_.length < MAXIMUM_IN_PARALLEL) {
            const task = this.pendingTasks_.shift();
            this.activeTasks_.push(task);
            // Try to load from cache. If doesn't exist, then download.
            task.loadFromCacheAndProcess(this.finish_.bind(this, task), function (currentTask) {
                currentTask.downloadAndProcess(this.finish_.bind(this, currentTask));
            }.bind(this, task));
        }
    }
    /**
     * Handles finished tasks.
     *
     * @param {ImageRequestTask} task Finished task.
     * @private
     */
    finish_(task) {
        const index = this.activeTasks_.indexOf(task);
        if (index < 0) {
            console.warn('ImageRequestTask not found.');
        }
        this.activeTasks_.splice(index, 1);
        delete this.tasks_[task.getId()];
        // Continue handling the most important tasks (if started).
        if (this.started_) {
            this.continue_();
        }
    }
}
/**
 * Maximum download tasks to be run in parallel.
 * @type {number}
 * @const
 */
const MAXIMUM_IN_PARALLEL = 5;

// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// @ts-nocheck
/**
 * Loads and resizes an image.
 */
class ImageLoader {
    constructor() {
        /**
         * Persistent cache object.
         * @type {ImageCache}
         * @private
         */
        this.cache_ = new ImageCache();
        /**
         * Manages pending requests and runs them in order of priorities.
         * @type {Scheduler}
         * @private
         */
        this.scheduler_ = new Scheduler();
        // Initialize the cache and then start the scheduler.
        this.cache_.initialize(() => this.scheduler_.start());
        // Listen for incoming requests.
        chrome.runtime.onMessageExternal.addListener((msg, sender, sendResponse) => {
            if (!sender.origin || !msg) {
                return;
            }
            if (ALLOWED_CLIENT_ORIGINS.indexOf(sender.origin) === -1) {
                return;
            }
            this.onIncomingRequest_(msg, sender.origin, sendResponse);
        });
        chrome.runtime['onConnectNative'].addListener((port) => {
            if (port.sender.nativeApplication !== 'com.google.ash_thumbnail_loader') {
                port.disconnect();
                return;
            }
            port.onMessage.addListener((msg) => {
                // Each connection is expected to handle a single request only.
                const started = this.onIncomingRequest_(msg, port.sender.nativeApplication, response => {
                    port.postMessage(response);
                    port.disconnect();
                });
                if (!started) {
                    port.disconnect();
                }
            });
        });
    }
    /**
     * Handler for incoming requests.
     *
     * @param {*} request_data A LoadImageRequest (received untyped).
     * @param {!string} senderOrigin
     * @param {function(*): void} sendResponse
     */
    onIncomingRequest_(request_data, senderOrigin, sendResponse) {
        const request = /** @type {!LoadImageRequest} */ (request_data);
        // Sending a response may fail if the receiver already went offline.
        // This is not an error, but a normal and quite common situation.
        const failSafeSendResponse = function (response) {
            try {
                sendResponse(response);
            }
            catch (e) {
                // Ignore the error.
            }
        };
        // Incoming requests won't have the full type.
        assert(!(request.orientation instanceof ImageOrientation));
        assert(!(typeof request.orientation === 'number'));
        if (request.orientation) {
            request.orientation =
                ImageOrientation.fromRotationAndScale(request.orientation);
        }
        else {
            request.orientation = new ImageOrientation(1, 0, 0, 1);
        }
        return this.onMessage_(senderOrigin, request, failSafeSendResponse);
    }
    /**
     * Handles a request. Depending on type of the request, starts or stops
     * an image task.
     *
     * @param {string} senderOrigin Sender's origin.
     * @param {!LoadImageRequest} request Pre-processed request.
     * @param {function(!LoadImageResponse)} callback Callback to be called to
     *     return response.
     * @return {boolean} True if the message channel should stay alive until the
     *     callback is called.
     * @private
     */
    onMessage_(senderOrigin, request, callback) {
        const requestId = senderOrigin + ':' + request.taskId;
        if (request.cancel) {
            // Cancel a task.
            this.scheduler_.remove(requestId);
            return false; // No callback calls.
        }
        else {
            // Create a request task and add it to the scheduler (queue).
            const requestTask = new ImageRequestTask(requestId, this.cache_, request, callback);
            this.scheduler_.add(requestTask);
            return true; // Request will call the callback.
        }
    }
    /**
     * Returns the singleton instance.
     * @return {ImageLoader} ImageLoader object.
     */
    static getInstance() {
        if (!ImageLoader.instance_) {
            ImageLoader.instance_ = new ImageLoader();
        }
        return ImageLoader.instance_;
    }
}
/**
 * List of extensions allowed to perform image requests.
 *
 * @const
 * @type {Array<string>}
 */
const ALLOWED_CLIENT_ORIGINS = [
    'chrome://file-manager', // File Manager SWA
];

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Entry point for Image Loader.
 */
// Load the extension.
ImageLoader.getInstance();
//# sourceMappingURL=background.rollup.js.map
