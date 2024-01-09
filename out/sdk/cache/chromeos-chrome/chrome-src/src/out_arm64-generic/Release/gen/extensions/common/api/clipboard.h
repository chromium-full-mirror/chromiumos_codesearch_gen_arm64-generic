// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/clipboard.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_CLIPBOARD_H__
#define EXTENSIONS_COMMON_API_CLIPBOARD_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace clipboard {

//
// Types
//

// Supported image types.
enum class ImageType {
  kNone = 0,
  kPng,
  kJpeg,
  kMaxValue = kJpeg,
};


const char* ToString(ImageType as_enum);
ImageType ParseImageType(base::StringPiece as_string);
std::u16string GetImageTypeParseError(base::StringPiece as_string);

enum class DataItemType {
  kNone = 0,
  kTextPlain,
  kTextHtml,
  kMaxValue = kTextHtml,
};


const char* ToString(DataItemType as_enum);
DataItemType ParseDataItemType(base::StringPiece as_string);
std::u16string GetDataItemTypeParseError(base::StringPiece as_string);

struct AdditionalDataItem {
  AdditionalDataItem();
  ~AdditionalDataItem();
  AdditionalDataItem(const AdditionalDataItem&) = delete;
  AdditionalDataItem& operator=(const AdditionalDataItem&) = delete;
  AdditionalDataItem(AdditionalDataItem&& rhs) noexcept;
  AdditionalDataItem& operator=(AdditionalDataItem&& rhs) noexcept;

  // Populates a AdditionalDataItem object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AdditionalDataItem& out);

  // Populates a AdditionalDataItem object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AdditionalDataItem& out);

  // Creates a deep copy of AdditionalDataItem.
  AdditionalDataItem Clone() const;

  // Creates a AdditionalDataItem object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AdditionalDataItem> FromValue(const base::Value::Dict& value);

  // Creates a AdditionalDataItem object from a base::Value, or nullopt on
  // failure.
  static std::optional<AdditionalDataItem> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAdditionalDataItem object.
  base::Value::Dict ToValue() const;

  // Type of the additional data item.
  DataItemType type;

  // Content of the additional data item. Either the plain text string if |type|
  // is "textPlain" or markup string if |type| is "textHtml". The data can not
  // exceed 2MB.
  std::string data;

};


//
// Functions
//

namespace SetImageData {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The encoded image data.
  std::vector<uint8_t> image_data;

  // The type of image being passed.
  ImageType type;

  // Additional data items for describing image data. The callback is called with
  // <code>chrome.runtime.lastError</code> set to error code if there is an error.
  // Requires clipboard and clipboardWrite permissions.
  std::optional<std::vector<AdditionalDataItem>> additional_items;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetImageData

//
// Events
//

namespace OnClipboardDataChanged {

extern const char kEventName[];  // "clipboard.onClipboardDataChanged"

base::Value::List Create();
}  // namespace OnClipboardDataChanged

}  // namespace clipboard
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_CLIPBOARD_H__
