// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/mime_handler_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_MIME_HANDLER_PRIVATE_H__
#define EXTENSIONS_COMMON_API_MIME_HANDLER_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace mime_handler_private {

//
// Types
//

struct StreamInfo {
  StreamInfo();
  ~StreamInfo();
  StreamInfo(const StreamInfo&) = delete;
  StreamInfo& operator=(const StreamInfo&) = delete;
  StreamInfo(StreamInfo&& rhs);
  StreamInfo& operator=(StreamInfo&& rhs);

  // Populates a StreamInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, StreamInfo& out);

  // Populates a StreamInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, StreamInfo& out);

  // Creates a deep copy of StreamInfo.
  StreamInfo Clone() const;

  // Creates a StreamInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<StreamInfo> FromValueDeprecated(const base::Value& value);

  // Creates a StreamInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<StreamInfo> FromValue(const base::Value::Dict& value);

  // Creates a StreamInfo object from a base::Value, or nullopt on failure.
  static absl::optional<StreamInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStreamInfo object.
  base::Value::Dict ToValue() const;

  // The HTTP response headers of the intercepted request stored as a dictionary
  // mapping header name to header value. If a header name appears multiple times,
  // the header values are merged in the dictionary and separated by a ", ".
  // Non-ASCII headers are dropped.
  struct ResponseHeaders {
    ResponseHeaders();
    ~ResponseHeaders();
    ResponseHeaders(const ResponseHeaders&) = delete;
    ResponseHeaders& operator=(const ResponseHeaders&) = delete;
    ResponseHeaders(ResponseHeaders&& rhs);
    ResponseHeaders& operator=(ResponseHeaders&& rhs);

    // Populates a ResponseHeaders object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, ResponseHeaders& out);

    // Populates a ResponseHeaders object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, ResponseHeaders& out);

    // Creates a deep copy of ResponseHeaders.
    ResponseHeaders Clone() const;

    // Creates a ResponseHeaders object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<ResponseHeaders> FromValue(const base::Value::Dict& value);

    // Creates a ResponseHeaders object from a base::Value, or nullopt on failure.
    static absl::optional<ResponseHeaders> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisResponseHeaders object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };


  // The MIME type of the intercepted URL request.
  std::string mime_type;

  // The original URL that was intercepted.
  std::string original_url;

  // The URL that the stream can be read from.
  std::string stream_url;

  // The ID of the tab that opened the stream. If the stream is not opened in a
  // tab, it will be -1.
  int tab_id;

  // The HTTP response headers of the intercepted request stored as a dictionary
  // mapping header name to header value. If a header name appears multiple times,
  // the header values are merged in the dictionary and separated by a ", ".
  // Non-ASCII headers are dropped.
  ResponseHeaders response_headers;

  // Whether the stream is embedded within another document.
  bool embedded;

};

struct PdfPluginAttributes {
  PdfPluginAttributes();
  ~PdfPluginAttributes();
  PdfPluginAttributes(const PdfPluginAttributes&) = delete;
  PdfPluginAttributes& operator=(const PdfPluginAttributes&) = delete;
  PdfPluginAttributes(PdfPluginAttributes&& rhs);
  PdfPluginAttributes& operator=(PdfPluginAttributes&& rhs);

  // Populates a PdfPluginAttributes object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PdfPluginAttributes& out);

  // Populates a PdfPluginAttributes object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PdfPluginAttributes& out);

  // Creates a deep copy of PdfPluginAttributes.
  PdfPluginAttributes Clone() const;

  // Creates a PdfPluginAttributes object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<PdfPluginAttributes> FromValueDeprecated(const base::Value& value);

  // Creates a PdfPluginAttributes object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<PdfPluginAttributes> FromValue(const base::Value::Dict& value);

  // Creates a PdfPluginAttributes object from a base::Value, or nullopt on
  // failure.
  static absl::optional<PdfPluginAttributes> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPdfPluginAttributes object.
  base::Value::Dict ToValue() const;

  // The background color in ARGB format for painting. Since the background color
  // is an unsigned 32-bit integer which can be outside the range of "long" type,
  // define it as a "double" type here.
  double background_color;

  // Indicates whether the plugin allows to execute JavaScript and maybe XFA.
  // Loading XFA for PDF forms will automatically be disabled if this flag is
  // false.
  bool allow_javascript;

};


//
// Events
//

namespace OnSave {

extern const char kEventName[];  // "mimeHandlerPrivate.onSave"

// Unique ID for the instance that should perform the save.
base::Value::List Create(const std::string& stream_url);
}  // namespace OnSave

}  // namespace mime_handler_private
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_MIME_HANDLER_PRIVATE_H__
