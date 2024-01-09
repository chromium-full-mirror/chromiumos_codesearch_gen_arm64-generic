// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/clipboard.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/clipboard.h"

#include <memory>
#include <optional>
#include <ostream>
#include <string>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"
#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace clipboard {
//
// Types
//

const char* ToString(ImageType enum_param) {
  switch (enum_param) {
    case ImageType::kPng:
      return "png";
    case ImageType::kJpeg:
      return "jpeg";
    case ImageType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ImageType ParseImageType(base::StringPiece enum_string) {
  if (enum_string == "png")
    return ImageType::kPng;
  if (enum_string == "jpeg")
    return ImageType::kJpeg;
  return ImageType::kNone;
}

std::u16string GetImageTypeParseError(base::StringPiece enum_string) {
  return u"expected \"png\" or \"jpeg\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DataItemType enum_param) {
  switch (enum_param) {
    case DataItemType::kTextPlain:
      return "textPlain";
    case DataItemType::kTextHtml:
      return "textHtml";
    case DataItemType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DataItemType ParseDataItemType(base::StringPiece enum_string) {
  if (enum_string == "textPlain")
    return DataItemType::kTextPlain;
  if (enum_string == "textHtml")
    return DataItemType::kTextHtml;
  return DataItemType::kNone;
}

std::u16string GetDataItemTypeParseError(base::StringPiece enum_string) {
  return u"expected \"textPlain\" or \"textHtml\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


AdditionalDataItem::AdditionalDataItem()
: type() {}

AdditionalDataItem::~AdditionalDataItem() = default;
AdditionalDataItem::AdditionalDataItem(AdditionalDataItem&& rhs) noexcept = default;
AdditionalDataItem& AdditionalDataItem::operator=(AdditionalDataItem&& rhs) noexcept = default;
AdditionalDataItem AdditionalDataItem::Clone() const {
  AdditionalDataItem out;
  out.type = type;
  out.data = data;
  return out;
}

// static
bool AdditionalDataItem::Populate(
    const base::Value::Dict& dict, AdditionalDataItem& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* data_item_type_as_string = (*type_value).GetIfString();
    if (!data_item_type_as_string) {
      return false;
    }
    out.type = ParseDataItemType(*data_item_type_as_string);
    if (out.type == DataItemType()) {
      return false;
    }
  }

  const base::Value* data_value = dict.Find("data");
  if (!data_value) {
    return false;
  }
  {
    auto* temp = (*data_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.data = *temp;
  }

  return true;
}

// static
bool AdditionalDataItem::Populate(
    const base::Value& value, AdditionalDataItem& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AdditionalDataItem> AdditionalDataItem::FromValue(const base::Value::Dict& value) {
  AdditionalDataItem out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AdditionalDataItem> AdditionalDataItem::FromValue(const base::Value& value) {
  AdditionalDataItem out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AdditionalDataItem::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", clipboard::ToString(this->type));

  to_value_result.Set("data", this->data);


  return to_value_result;
}



//
// Functions
//

namespace SetImageData {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 2 || args.size() > 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& image_data_value = args[0];
    {
      if (!image_data_value.is_blob()) {
        return std::nullopt;
      }
      else {
        params.image_data = image_data_value.GetBlob();
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& type_value = args[1];
    {
      const std::string* image_type_as_string = type_value.GetIfString();
      if (!image_type_as_string) {
        return std::nullopt;
      }
      params.type = ParseImageType(*image_type_as_string);
      if (params.type == ImageType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& additional_items_value = args[2];
    {
      if (!additional_items_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(additional_items_value.GetList(), params.additional_items)) {
          return std::nullopt;
        }
      }
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetImageData

//
// Events
//

namespace OnClipboardDataChanged {

const char kEventName[] = "clipboard.onClipboardDataChanged";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnClipboardDataChanged

}  // namespace clipboard
}  // namespace api
}  // namespace extensions

