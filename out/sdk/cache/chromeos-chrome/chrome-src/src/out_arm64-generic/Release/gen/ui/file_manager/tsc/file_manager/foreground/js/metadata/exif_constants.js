// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Exif marks.
 */
export var ExifMark;
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
export var ExifAlign;
(function (ExifAlign) {
    // Indicates little endian exif data.
    ExifAlign[ExifAlign["LITTLE"] = 18761] = "LITTLE";
    // Indicates big endian exif data.
    ExifAlign[ExifAlign["BIG"] = 19789] = "BIG";
})(ExifAlign || (ExifAlign = {}));
/**
 * Exif tag.
 */
export var ExifTag;
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
