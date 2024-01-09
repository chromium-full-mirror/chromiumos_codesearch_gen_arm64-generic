// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/pdf_viewer_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_PDF_VIEWER_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_PDF_VIEWER_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace pdf_viewer_private {

//
// Types
//

struct StreamInfo {
  StreamInfo();
  ~StreamInfo();
  StreamInfo(const StreamInfo&) = delete;
  StreamInfo& operator=(const StreamInfo&) = delete;
  StreamInfo(StreamInfo&& rhs) noexcept;
  StreamInfo& operator=(StreamInfo&& rhs) noexcept;

  // Populates a StreamInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, StreamInfo& out);

  // Populates a StreamInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, StreamInfo& out);

  // Creates a deep copy of StreamInfo.
  StreamInfo Clone() const;

  // Creates a StreamInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<StreamInfo> FromValue(const base::Value::Dict& value);

  // Creates a StreamInfo object from a base::Value, or nullopt on failure.
  static std::optional<StreamInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStreamInfo object.
  base::Value::Dict ToValue() const;

  // The original URL that was intercepted.
  std::string original_url;

  // The URL that the stream can be read from.
  std::string stream_url;

  // The ID of the tab that opened the stream. If the stream is not opened in a
  // tab, it will be -1.
  int tab_id;

  // Whether the stream is embedded within another document.
  bool embedded;

};

struct PdfPluginAttributes {
  PdfPluginAttributes();
  ~PdfPluginAttributes();
  PdfPluginAttributes(const PdfPluginAttributes&) = delete;
  PdfPluginAttributes& operator=(const PdfPluginAttributes&) = delete;
  PdfPluginAttributes(PdfPluginAttributes&& rhs) noexcept;
  PdfPluginAttributes& operator=(PdfPluginAttributes&& rhs) noexcept;

  // Populates a PdfPluginAttributes object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PdfPluginAttributes& out);

  // Populates a PdfPluginAttributes object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PdfPluginAttributes& out);

  // Creates a deep copy of PdfPluginAttributes.
  PdfPluginAttributes Clone() const;

  // Creates a PdfPluginAttributes object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<PdfPluginAttributes> FromValue(const base::Value::Dict& value);

  // Creates a PdfPluginAttributes object from a base::Value, or nullopt on
  // failure.
  static std::optional<PdfPluginAttributes> FromValue(const base::Value& value);

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
// Functions
//

namespace GetStreamInfo {

namespace Results {

base::Value::List Create(const StreamInfo& stream_info);
}  // namespace Results

}  // namespace GetStreamInfo

namespace IsAllowedLocalFileAccess {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string url;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace IsAllowedLocalFileAccess

namespace IsPdfOcrAlwaysActive {

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace IsPdfOcrAlwaysActive

namespace SetPdfOcrPref {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The new value of the pref.
  bool value;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace SetPdfOcrPref

namespace SetPdfPluginAttributes {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  PdfPluginAttributes attributes;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetPdfPluginAttributes

//
// Events
//

namespace OnPdfOcrPrefChanged {

extern const char kEventName[];  // "pdfViewerPrivate.onPdfOcrPrefChanged"

base::Value::List Create(bool value);
}  // namespace OnPdfOcrPrefChanged

namespace OnSave {

extern const char kEventName[];  // "pdfViewerPrivate.onSave"

base::Value::List Create(const std::string& stream_url);
}  // namespace OnSave

}  // namespace pdf_viewer_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_PDF_VIEWER_PRIVATE_H__
