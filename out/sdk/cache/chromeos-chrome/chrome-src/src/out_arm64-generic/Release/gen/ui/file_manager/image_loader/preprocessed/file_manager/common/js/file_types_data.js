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
export let FileExtensionType;
/**
 * Maps a file extension to a FileExtensionType.
 * Note: If an extension can match multiple types, in this map contains
 * only the first occurrence.
 *
 * @const Map<string, !FileExtensionType>
 */
export const EXTENSION_TO_TYPE = new Map([
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
/**
 * Maps a MIME type to a FileExtensionType.
 * Note: If a MIME type can match multiple types, in this map contains
 * only the first occurrence.
 *
 * @const Map<string, !FileExtensionType>
 */
export const MIME_TO_TYPE = new Map([
    ["image/jpeg", {
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
    ["image/bmp", {
            "extensions": [
                ".bmp"
            ],
            "mime": "image/bmp",
            "subtype": "BMP",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/gif", {
            "extensions": [
                ".gif"
            ],
            "mime": "image/gif",
            "subtype": "GIF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/x-icon", {
            "extensions": [
                ".ico"
            ],
            "mime": "image/x-icon",
            "subtype": "ICO",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/png", {
            "extensions": [
                ".png"
            ],
            "mime": "image/png",
            "subtype": "PNG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/webp", {
            "extensions": [
                ".webp"
            ],
            "mime": "image/webp",
            "subtype": "WebP",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/tiff", {
            "extensions": [
                ".tif",
                ".tiff"
            ],
            "mime": "image/tiff",
            "subtype": "TIFF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/svg+xml", {
            "extensions": [
                ".svg",
                ".svgz"
            ],
            "mime": "image/svg+xml",
            "subtype": "SVG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/avif", {
            "extensions": [
                ".avif"
            ],
            "mime": "image/avif",
            "subtype": "AVIF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/jxl", {
            "extensions": [
                ".jxl"
            ],
            "mime": "image/jxl",
            "subtype": "JXL",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/x-xbitmap", {
            "extensions": [
                ".xbm"
            ],
            "mime": "image/x-xbitmap",
            "subtype": "XBM",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/x-sony-arw", {
            "extensions": [
                ".arw"
            ],
            "icon": "image",
            "mime": "image/x-sony-arw",
            "subtype": "ARW",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-canon-cr2", {
            "extensions": [
                ".cr2"
            ],
            "icon": "image",
            "mime": "image/x-canon-cr2",
            "subtype": "CR2",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-adobe-dng", {
            "extensions": [
                ".dng"
            ],
            "icon": "image",
            "mime": "image/x-adobe-dng",
            "subtype": "DNG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-nikon-nef", {
            "extensions": [
                ".nef"
            ],
            "icon": "image",
            "mime": "image/x-nikon-nef",
            "subtype": "NEF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-nikon-nrw", {
            "extensions": [
                ".nrw"
            ],
            "icon": "image",
            "mime": "image/x-nikon-nrw",
            "subtype": "NRW",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-olympus-orf", {
            "extensions": [
                ".orf"
            ],
            "icon": "image",
            "mime": "image/x-olympus-orf",
            "subtype": "ORF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-fuji-raf", {
            "extensions": [
                ".raf"
            ],
            "icon": "image",
            "mime": "image/x-fuji-raf",
            "subtype": "RAF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-panasonic-rw2", {
            "extensions": [
                ".rw2"
            ],
            "icon": "image",
            "mime": "image/x-panasonic-rw2",
            "subtype": "RW2",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["video/3gpp", {
            "extensions": [
                ".3gp",
                ".3gpp"
            ],
            "mime": "video/3gpp",
            "subtype": "3GP",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/x-msvideo", {
            "extensions": [
                ".avi"
            ],
            "mime": "video/x-msvideo",
            "subtype": "AVI",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/quicktime", {
            "extensions": [
                ".mov"
            ],
            "mime": "video/quicktime",
            "subtype": "QuickTime",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/x-matroska", {
            "extensions": [
                ".mkv"
            ],
            "mime": "video/x-matroska",
            "subtype": "MKV",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/mp4", {
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
    ["video/mpeg", {
            "extensions": [
                ".mpg",
                ".mpeg"
            ],
            "mime": "video/mpeg",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/ogg", {
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
    ["application/ogg", {
            "extensions": [
                ".ogm",
                ".ogv",
                ".ogx"
            ],
            "mime": "application/ogg",
            "subtype": "OGG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/webm", {
            "extensions": [
                ".webm"
            ],
            "mime": "video/webm",
            "subtype": "WebM",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["audio/amr", {
            "extensions": [
                ".amr"
            ],
            "mime": "audio/amr",
            "subtype": "AMR",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/flac", {
            "extensions": [
                ".flac"
            ],
            "mime": "audio/flac",
            "subtype": "FLAC",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/mpeg", {
            "extensions": [
                ".mp3"
            ],
            "mime": "audio/mpeg",
            "subtype": "MP3",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/mp4a-latm", {
            "extensions": [
                ".m4a"
            ],
            "mime": "audio/mp4a-latm",
            "subtype": "MPEG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/ogg", {
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
    ["audio/x-wav", {
            "extensions": [
                ".wav"
            ],
            "mime": "audio/x-wav",
            "subtype": "WAV",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/webm", {
            "extensions": [
                ".weba"
            ],
            "mime": "audio/webm",
            "subtype": "WEBA",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["text/plain", {
            "extensions": [
                ".txt",
                ".text"
            ],
            "mime": "text/plain",
            "subtype": "TXT",
            "translationKey": "PLAIN_TEXT_FILE_TYPE",
            "type": "text"
        }],
    ["text/csv", {
            "extensions": [
                ".csv"
            ],
            "mime": "text/csv",
            "subtype": "CSV",
            "translationKey": "CSV_TEXT_FILE_TYPE",
            "type": "text"
        }],
    ["application/zip", {
            "extensions": [
                ".zip"
            ],
            "mime": "application/zip",
            "subtype": "ZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-rar-compressed", {
            "extensions": [
                ".rar"
            ],
            "mime": "application/x-rar-compressed",
            "subtype": "RAR",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-iso9660-image", {
            "extensions": [
                ".iso"
            ],
            "mime": "application/x-iso9660-image",
            "subtype": "ISO",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-7z-compressed", {
            "extensions": [
                ".7z"
            ],
            "mime": "application/x-7z-compressed",
            "subtype": "7-Zip",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-chrome-extension", {
            "extensions": [
                ".crx"
            ],
            "mime": "application/x-chrome-extension",
            "subtype": "CRX",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-tar", {
            "extensions": [
                ".tar"
            ],
            "mime": "application/x-tar",
            "subtype": "TAR",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-bzip2", {
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
    ["application/x-gzip", {
            "extensions": [
                ".gz",
                ".tgz"
            ],
            "mime": "application/x-gzip",
            "subtype": "GZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-lzip", {
            "extensions": [
                ".lz"
            ],
            "mime": "application/x-lzip",
            "subtype": "LZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-lzop", {
            "extensions": [
                ".lzo"
            ],
            "mime": "application/x-lzop",
            "subtype": "LZOP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-lzma", {
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
    ["application/x-xz", {
            "extensions": [
                ".xz",
                ".txz"
            ],
            "mime": "application/x-xz",
            "subtype": "XZ",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-compress", {
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
    ["application/zstd", {
            "extensions": [
                ".zst",
                ".tzst"
            ],
            "mime": "application/zstd",
            "subtype": "Zstandard",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/vnd.google-apps.document", {
            "extensions": [
                ".gdoc"
            ],
            "icon": "gdoc",
            "mime": "application/vnd.google-apps.document",
            "subtype": "doc",
            "translationKey": "GDOC_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.spreadsheet", {
            "extensions": [
                ".gsheet"
            ],
            "icon": "gsheet",
            "mime": "application/vnd.google-apps.spreadsheet",
            "subtype": "sheet",
            "translationKey": "GSHEET_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.presentation", {
            "extensions": [
                ".gslides"
            ],
            "icon": "gslides",
            "mime": "application/vnd.google-apps.presentation",
            "subtype": "slides",
            "translationKey": "GSLIDES_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.drawing", {
            "extensions": [
                ".gdraw"
            ],
            "icon": "gdraw",
            "mime": "application/vnd.google-apps.drawing",
            "subtype": "draw",
            "translationKey": "GDRAW_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.fusiontable", {
            "extensions": [
                ".gtable"
            ],
            "icon": "gtable",
            "mime": "application/vnd.google-apps.fusiontable",
            "subtype": "table",
            "translationKey": "GTABLE_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.shortcut", {
            "extensions": [
                ".glink"
            ],
            "icon": "glink",
            "mime": "application/vnd.google-apps.shortcut",
            "subtype": "glink",
            "translationKey": "GLINK_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.form", {
            "extensions": [
                ".gform"
            ],
            "icon": "gform",
            "mime": "application/vnd.google-apps.form",
            "subtype": "form",
            "translationKey": "GFORM_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.map", {
            "extensions": [
                ".gmap"
            ],
            "icon": "gmap",
            "mime": "application/vnd.google-apps.map",
            "subtype": "map",
            "translationKey": "GMAP_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.site", {
            "extensions": [
                ".gsite"
            ],
            "icon": "gsite",
            "mime": "application/vnd.google-apps.site",
            "subtype": "site",
            "translationKey": "GSITE_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/pdf", {
            "extensions": [
                ".pdf"
            ],
            "icon": "pdf",
            "mime": "application/pdf",
            "subtype": "PDF",
            "translationKey": "PDF_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    ["text/html", {
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
    ["application/msword", {
            "extensions": [
                ".doc"
            ],
            "icon": "word",
            "mime": "application/msword",
            "subtype": "Word",
            "translationKey": "WORD_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", {
            "extensions": [
                ".docx"
            ],
            "icon": "word",
            "mime": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "subtype": "Word",
            "translationKey": "WORD_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.ms-powerpoint", {
            "extensions": [
                ".ppt"
            ],
            "icon": "ppt",
            "mime": "application/vnd.ms-powerpoint",
            "subtype": "PPT",
            "translationKey": "POWERPOINT_PRESENTATION_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.openxmlformats-officedocument.presentationml.presentation", {
            "extensions": [
                ".pptx"
            ],
            "icon": "ppt",
            "mime": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "subtype": "PPT",
            "translationKey": "POWERPOINT_PRESENTATION_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.ms-excel", {
            "extensions": [
                ".xls"
            ],
            "icon": "excel",
            "mime": "application/vnd.ms-excel",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", {
            "extensions": [
                ".xlsx"
            ],
            "icon": "excel",
            "mime": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.ms-excel.sheet.macroEnabled.12", {
            "extensions": [
                ".xlsm"
            ],
            "icon": "excel",
            "mime": "application/vnd.ms-excel.sheet.macroEnabled.12",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
]);
