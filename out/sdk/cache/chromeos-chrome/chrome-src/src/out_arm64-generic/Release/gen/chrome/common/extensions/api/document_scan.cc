// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/document_scan.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/document_scan.h"

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
namespace document_scan {
//
// Types
//

ScanOptions::ScanOptions()
 {}

ScanOptions::~ScanOptions() = default;
ScanOptions::ScanOptions(ScanOptions&& rhs) noexcept = default;
ScanOptions& ScanOptions::operator=(ScanOptions&& rhs) noexcept = default;
ScanOptions ScanOptions::Clone() const {
  ScanOptions out;
  out.mime_types = mime_types;
  out.max_images = max_images;
  return out;
}

// static
bool ScanOptions::Populate(
    const base::Value::Dict& dict, ScanOptions& out) {
  const base::Value* mime_types_value = dict.Find("mimeTypes");
  if (mime_types_value) {
    {
      if (!(*mime_types_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*mime_types_value).GetList(), out.mime_types)) {
          return false;
        }
      }
    }
  }

  const base::Value* max_images_value = dict.Find("maxImages");
  if (max_images_value) {
    {
      auto temp = (*max_images_value).GetIfInt();
      if (!temp.has_value()) {
        out.max_images = std::nullopt;
        return false;
      }
      out.max_images = *temp;
    }
  }

  return true;
}

// static
bool ScanOptions::Populate(
    const base::Value& value, ScanOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ScanOptions> ScanOptions::FromValue(const base::Value::Dict& value) {
  ScanOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ScanOptions> ScanOptions::FromValue(const base::Value& value) {
  ScanOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ScanOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->mime_types) {
    to_value_result.Set("mimeTypes", json_schema_compiler::util::CreateValueFromArray(*this->mime_types));

  }
  if (this->max_images) {
    to_value_result.Set("maxImages", *this->max_images);

  }

  return to_value_result;
}


ScanResults::ScanResults()
 {}

ScanResults::~ScanResults() = default;
ScanResults::ScanResults(ScanResults&& rhs) noexcept = default;
ScanResults& ScanResults::operator=(ScanResults&& rhs) noexcept = default;
ScanResults ScanResults::Clone() const {
  ScanResults out;
  out.data_urls = data_urls;
  out.mime_type = mime_type;
  return out;
}

// static
bool ScanResults::Populate(
    const base::Value::Dict& dict, ScanResults& out) {
  const base::Value* data_urls_value = dict.Find("dataUrls");
  if (!data_urls_value) {
    return false;
  }
  {
    if (!(*data_urls_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*data_urls_value).GetList(), out.data_urls)) {
        return false;
      }
    }
  }

  const base::Value* mime_type_value = dict.Find("mimeType");
  if (!mime_type_value) {
    return false;
  }
  {
    auto* temp = (*mime_type_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.mime_type = *temp;
  }

  return true;
}

// static
bool ScanResults::Populate(
    const base::Value& value, ScanResults& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ScanResults> ScanResults::FromValue(const base::Value::Dict& value) {
  ScanResults out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ScanResults> ScanResults::FromValue(const base::Value& value) {
  ScanResults out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ScanResults::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("dataUrls", json_schema_compiler::util::CreateValueFromArray(this->data_urls));

  to_value_result.Set("mimeType", this->mime_type);


  return to_value_result;
}


const char* ToString(OperationResult enum_param) {
  switch (enum_param) {
    case OperationResult::kUnknown:
      return "UNKNOWN";
    case OperationResult::kSuccess:
      return "SUCCESS";
    case OperationResult::kUnsupported:
      return "UNSUPPORTED";
    case OperationResult::kCancelled:
      return "CANCELLED";
    case OperationResult::kDeviceBusy:
      return "DEVICE_BUSY";
    case OperationResult::kInvalid:
      return "INVALID";
    case OperationResult::kWrongType:
      return "WRONG_TYPE";
    case OperationResult::kEof:
      return "EOF";
    case OperationResult::kAdfJammed:
      return "ADF_JAMMED";
    case OperationResult::kAdfEmpty:
      return "ADF_EMPTY";
    case OperationResult::kCoverOpen:
      return "COVER_OPEN";
    case OperationResult::kIoError:
      return "IO_ERROR";
    case OperationResult::kAccessDenied:
      return "ACCESS_DENIED";
    case OperationResult::kNoMemory:
      return "NO_MEMORY";
    case OperationResult::kUnreachable:
      return "UNREACHABLE";
    case OperationResult::kMissing:
      return "MISSING";
    case OperationResult::kInternalError:
      return "INTERNAL_ERROR";
    case OperationResult::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

OperationResult ParseOperationResult(base::StringPiece enum_string) {
  if (enum_string == "UNKNOWN")
    return OperationResult::kUnknown;
  if (enum_string == "SUCCESS")
    return OperationResult::kSuccess;
  if (enum_string == "UNSUPPORTED")
    return OperationResult::kUnsupported;
  if (enum_string == "CANCELLED")
    return OperationResult::kCancelled;
  if (enum_string == "DEVICE_BUSY")
    return OperationResult::kDeviceBusy;
  if (enum_string == "INVALID")
    return OperationResult::kInvalid;
  if (enum_string == "WRONG_TYPE")
    return OperationResult::kWrongType;
  if (enum_string == "EOF")
    return OperationResult::kEof;
  if (enum_string == "ADF_JAMMED")
    return OperationResult::kAdfJammed;
  if (enum_string == "ADF_EMPTY")
    return OperationResult::kAdfEmpty;
  if (enum_string == "COVER_OPEN")
    return OperationResult::kCoverOpen;
  if (enum_string == "IO_ERROR")
    return OperationResult::kIoError;
  if (enum_string == "ACCESS_DENIED")
    return OperationResult::kAccessDenied;
  if (enum_string == "NO_MEMORY")
    return OperationResult::kNoMemory;
  if (enum_string == "UNREACHABLE")
    return OperationResult::kUnreachable;
  if (enum_string == "MISSING")
    return OperationResult::kMissing;
  if (enum_string == "INTERNAL_ERROR")
    return OperationResult::kInternalError;
  return OperationResult::kNone;
}

std::u16string GetOperationResultParseError(base::StringPiece enum_string) {
  return u"expected \"UNKNOWN\" or \"SUCCESS\" or \"UNSUPPORTED\" or \"CANCELLED\" or \"DEVICE_BUSY\" or \"INVALID\" or \"WRONG_TYPE\" or \"EOF\" or \"ADF_JAMMED\" or \"ADF_EMPTY\" or \"COVER_OPEN\" or \"IO_ERROR\" or \"ACCESS_DENIED\" or \"NO_MEMORY\" or \"UNREACHABLE\" or \"MISSING\" or \"INTERNAL_ERROR\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ConnectionType enum_param) {
  switch (enum_param) {
    case ConnectionType::kUnspecified:
      return "UNSPECIFIED";
    case ConnectionType::kUsb:
      return "USB";
    case ConnectionType::kNetwork:
      return "NETWORK";
    case ConnectionType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ConnectionType ParseConnectionType(base::StringPiece enum_string) {
  if (enum_string == "UNSPECIFIED")
    return ConnectionType::kUnspecified;
  if (enum_string == "USB")
    return ConnectionType::kUsb;
  if (enum_string == "NETWORK")
    return ConnectionType::kNetwork;
  return ConnectionType::kNone;
}

std::u16string GetConnectionTypeParseError(base::StringPiece enum_string) {
  return u"expected \"UNSPECIFIED\" or \"USB\" or \"NETWORK\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ScannerInfo::ScannerInfo()
: connection_type(),
secure(false) {}

ScannerInfo::~ScannerInfo() = default;
ScannerInfo::ScannerInfo(ScannerInfo&& rhs) noexcept = default;
ScannerInfo& ScannerInfo::operator=(ScannerInfo&& rhs) noexcept = default;
ScannerInfo ScannerInfo::Clone() const {
  ScannerInfo out;
  out.scanner_id = scanner_id;
  out.name = name;
  out.manufacturer = manufacturer;
  out.model = model;
  out.device_uuid = device_uuid;
  out.connection_type = connection_type;
  out.secure = secure;
  out.image_formats = image_formats;
  return out;
}

// static
bool ScannerInfo::Populate(
    const base::Value::Dict& dict, ScannerInfo& out) {
  const base::Value* scanner_id_value = dict.Find("scannerId");
  if (!scanner_id_value) {
    return false;
  }
  {
    auto* temp = (*scanner_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.scanner_id = *temp;
  }

  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* manufacturer_value = dict.Find("manufacturer");
  if (!manufacturer_value) {
    return false;
  }
  {
    auto* temp = (*manufacturer_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.manufacturer = *temp;
  }

  const base::Value* model_value = dict.Find("model");
  if (!model_value) {
    return false;
  }
  {
    auto* temp = (*model_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.model = *temp;
  }

  const base::Value* device_uuid_value = dict.Find("deviceUuid");
  if (!device_uuid_value) {
    return false;
  }
  {
    auto* temp = (*device_uuid_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.device_uuid = *temp;
  }

  const base::Value* connection_type_value = dict.Find("connectionType");
  if (!connection_type_value) {
    return false;
  }
  {
    const std::string* connection_type_as_string = (*connection_type_value).GetIfString();
    if (!connection_type_as_string) {
      return false;
    }
    out.connection_type = ParseConnectionType(*connection_type_as_string);
    if (out.connection_type == ConnectionType()) {
      return false;
    }
  }

  const base::Value* secure_value = dict.Find("secure");
  if (!secure_value) {
    return false;
  }
  {
    auto temp = (*secure_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.secure = *temp;
  }

  const base::Value* image_formats_value = dict.Find("imageFormats");
  if (!image_formats_value) {
    return false;
  }
  {
    if (!(*image_formats_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*image_formats_value).GetList(), out.image_formats)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool ScannerInfo::Populate(
    const base::Value& value, ScannerInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ScannerInfo> ScannerInfo::FromValue(const base::Value::Dict& value) {
  ScannerInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ScannerInfo> ScannerInfo::FromValue(const base::Value& value) {
  ScannerInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ScannerInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("scannerId", this->scanner_id);

  to_value_result.Set("name", this->name);

  to_value_result.Set("manufacturer", this->manufacturer);

  to_value_result.Set("model", this->model);

  to_value_result.Set("deviceUuid", this->device_uuid);

  to_value_result.Set("connectionType", document_scan::ToString(this->connection_type));

  to_value_result.Set("secure", this->secure);

  to_value_result.Set("imageFormats", json_schema_compiler::util::CreateValueFromArray(this->image_formats));


  return to_value_result;
}


const char* ToString(OptionType enum_param) {
  switch (enum_param) {
    case OptionType::kUnknown:
      return "UNKNOWN";
    case OptionType::kBool:
      return "BOOL";
    case OptionType::kInt:
      return "INT";
    case OptionType::kFixed:
      return "FIXED";
    case OptionType::kString:
      return "STRING";
    case OptionType::kButton:
      return "BUTTON";
    case OptionType::kGroup:
      return "GROUP";
    case OptionType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

OptionType ParseOptionType(base::StringPiece enum_string) {
  if (enum_string == "UNKNOWN")
    return OptionType::kUnknown;
  if (enum_string == "BOOL")
    return OptionType::kBool;
  if (enum_string == "INT")
    return OptionType::kInt;
  if (enum_string == "FIXED")
    return OptionType::kFixed;
  if (enum_string == "STRING")
    return OptionType::kString;
  if (enum_string == "BUTTON")
    return OptionType::kButton;
  if (enum_string == "GROUP")
    return OptionType::kGroup;
  return OptionType::kNone;
}

std::u16string GetOptionTypeParseError(base::StringPiece enum_string) {
  return u"expected \"UNKNOWN\" or \"BOOL\" or \"INT\" or \"FIXED\" or \"STRING\" or \"BUTTON\" or \"GROUP\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(OptionUnit enum_param) {
  switch (enum_param) {
    case OptionUnit::kUnitless:
      return "UNITLESS";
    case OptionUnit::kPixel:
      return "PIXEL";
    case OptionUnit::kBit:
      return "BIT";
    case OptionUnit::kMm:
      return "MM";
    case OptionUnit::kDpi:
      return "DPI";
    case OptionUnit::kPercent:
      return "PERCENT";
    case OptionUnit::kMicrosecond:
      return "MICROSECOND";
    case OptionUnit::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

OptionUnit ParseOptionUnit(base::StringPiece enum_string) {
  if (enum_string == "UNITLESS")
    return OptionUnit::kUnitless;
  if (enum_string == "PIXEL")
    return OptionUnit::kPixel;
  if (enum_string == "BIT")
    return OptionUnit::kBit;
  if (enum_string == "MM")
    return OptionUnit::kMm;
  if (enum_string == "DPI")
    return OptionUnit::kDpi;
  if (enum_string == "PERCENT")
    return OptionUnit::kPercent;
  if (enum_string == "MICROSECOND")
    return OptionUnit::kMicrosecond;
  return OptionUnit::kNone;
}

std::u16string GetOptionUnitParseError(base::StringPiece enum_string) {
  return u"expected \"UNITLESS\" or \"PIXEL\" or \"BIT\" or \"MM\" or \"DPI\" or \"PERCENT\" or \"MICROSECOND\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ConstraintType enum_param) {
  switch (enum_param) {
    case ConstraintType::kIntRange:
      return "INT_RANGE";
    case ConstraintType::kFixedRange:
      return "FIXED_RANGE";
    case ConstraintType::kIntList:
      return "INT_LIST";
    case ConstraintType::kFixedList:
      return "FIXED_LIST";
    case ConstraintType::kStringList:
      return "STRING_LIST";
    case ConstraintType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ConstraintType ParseConstraintType(base::StringPiece enum_string) {
  if (enum_string == "INT_RANGE")
    return ConstraintType::kIntRange;
  if (enum_string == "FIXED_RANGE")
    return ConstraintType::kFixedRange;
  if (enum_string == "INT_LIST")
    return ConstraintType::kIntList;
  if (enum_string == "FIXED_LIST")
    return ConstraintType::kFixedList;
  if (enum_string == "STRING_LIST")
    return ConstraintType::kStringList;
  return ConstraintType::kNone;
}

std::u16string GetConstraintTypeParseError(base::StringPiece enum_string) {
  return u"expected \"INT_RANGE\" or \"FIXED_RANGE\" or \"INT_LIST\" or \"FIXED_LIST\" or \"STRING_LIST\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


OptionConstraint::Min::Min()
 {}

OptionConstraint::Min::~Min() = default;
OptionConstraint::Min::Min(Min&& rhs) noexcept = default;
OptionConstraint::Min& OptionConstraint::Min::operator=(Min&& rhs) noexcept = default;
OptionConstraint::Min OptionConstraint::Min::Clone() const {
  Min out;
  out.as_integer = as_integer;
  out.as_number = as_number;
  return out;
}

// static
bool OptionConstraint::Min::Populate(
    const base::Value& value, Min& out) {
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::DOUBLE) {
    {
      auto temp = value.GetIfDouble();
      if (!temp.has_value()) {
        out.as_number = std::nullopt;
        return false;
      }
      out.as_number = *temp;
    }
    return true;
  }
  return false;
}

// static
std::optional<OptionConstraint::Min> OptionConstraint::Min::FromValue(const base::Value& value) {
  Min out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value OptionConstraint::Min::ToValue() const {
  base::Value result;
  if (as_integer) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for min";
    result = base::Value(*as_integer);

  }
  if (as_number) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for min";
    result = base::Value(*as_number);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for min";
  return result;
}


OptionConstraint::Max::Max()
 {}

OptionConstraint::Max::~Max() = default;
OptionConstraint::Max::Max(Max&& rhs) noexcept = default;
OptionConstraint::Max& OptionConstraint::Max::operator=(Max&& rhs) noexcept = default;
OptionConstraint::Max OptionConstraint::Max::Clone() const {
  Max out;
  out.as_integer = as_integer;
  out.as_number = as_number;
  return out;
}

// static
bool OptionConstraint::Max::Populate(
    const base::Value& value, Max& out) {
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::DOUBLE) {
    {
      auto temp = value.GetIfDouble();
      if (!temp.has_value()) {
        out.as_number = std::nullopt;
        return false;
      }
      out.as_number = *temp;
    }
    return true;
  }
  return false;
}

// static
std::optional<OptionConstraint::Max> OptionConstraint::Max::FromValue(const base::Value& value) {
  Max out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value OptionConstraint::Max::ToValue() const {
  base::Value result;
  if (as_integer) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for max";
    result = base::Value(*as_integer);

  }
  if (as_number) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for max";
    result = base::Value(*as_number);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for max";
  return result;
}


OptionConstraint::Quant::Quant()
 {}

OptionConstraint::Quant::~Quant() = default;
OptionConstraint::Quant::Quant(Quant&& rhs) noexcept = default;
OptionConstraint::Quant& OptionConstraint::Quant::operator=(Quant&& rhs) noexcept = default;
OptionConstraint::Quant OptionConstraint::Quant::Clone() const {
  Quant out;
  out.as_integer = as_integer;
  out.as_number = as_number;
  return out;
}

// static
bool OptionConstraint::Quant::Populate(
    const base::Value& value, Quant& out) {
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::DOUBLE) {
    {
      auto temp = value.GetIfDouble();
      if (!temp.has_value()) {
        out.as_number = std::nullopt;
        return false;
      }
      out.as_number = *temp;
    }
    return true;
  }
  return false;
}

// static
std::optional<OptionConstraint::Quant> OptionConstraint::Quant::FromValue(const base::Value& value) {
  Quant out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value OptionConstraint::Quant::ToValue() const {
  base::Value result;
  if (as_integer) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for quant";
    result = base::Value(*as_integer);

  }
  if (as_number) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for quant";
    result = base::Value(*as_number);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for quant";
  return result;
}


OptionConstraint::List::List()
 {}

OptionConstraint::List::~List() = default;
OptionConstraint::List::List(List&& rhs) noexcept = default;
OptionConstraint::List& OptionConstraint::List::operator=(List&& rhs) noexcept = default;
OptionConstraint::List OptionConstraint::List::Clone() const {
  List out;
  out.as_numbers = as_numbers;
  out.as_integers = as_integers;
  out.as_strings = as_strings;
  return out;
}

// static
bool OptionConstraint::List::Populate(
    const base::Value& value, List& out) {
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_numbers)) {
          return false;
        }
      }
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_integers)) {
          return false;
        }
      }
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_strings)) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

// static
std::optional<OptionConstraint::List> OptionConstraint::List::FromValue(const base::Value& value) {
  List out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value OptionConstraint::List::ToValue() const {
  base::Value result;
  if (as_numbers) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for list";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_numbers));

  }
  if (as_integers) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for list";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_integers));

  }
  if (as_strings) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for list";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_strings));

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for list";
  return result;
}



OptionConstraint::OptionConstraint()
: type() {}

OptionConstraint::~OptionConstraint() = default;
OptionConstraint::OptionConstraint(OptionConstraint&& rhs) noexcept = default;
OptionConstraint& OptionConstraint::operator=(OptionConstraint&& rhs) noexcept = default;
OptionConstraint OptionConstraint::Clone() const {
  OptionConstraint out;
  out.type = type;
  if (min) {
    out.min = min->Clone();
  }
  if (max) {
    out.max = max->Clone();
  }
  if (quant) {
    out.quant = quant->Clone();
  }
  if (list) {
    out.list = list->Clone();
  }
  return out;
}

// static
bool OptionConstraint::Populate(
    const base::Value::Dict& dict, OptionConstraint& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* constraint_type_as_string = (*type_value).GetIfString();
    if (!constraint_type_as_string) {
      return false;
    }
    out.type = ParseConstraintType(*constraint_type_as_string);
    if (out.type == ConstraintType()) {
      return false;
    }
  }

  const base::Value* min_value = dict.Find("min");
  if (min_value) {
    {
      Min temp;
      if (!Min::Populate((*min_value), temp))
        return false;
      out.min = std::move(temp);
    }
  }

  const base::Value* max_value = dict.Find("max");
  if (max_value) {
    {
      Max temp;
      if (!Max::Populate((*max_value), temp))
        return false;
      out.max = std::move(temp);
    }
  }

  const base::Value* quant_value = dict.Find("quant");
  if (quant_value) {
    {
      Quant temp;
      if (!Quant::Populate((*quant_value), temp))
        return false;
      out.quant = std::move(temp);
    }
  }

  const base::Value* list_value = dict.Find("list");
  if (list_value) {
    {
      List temp;
      if (!List::Populate((*list_value), temp))
        return false;
      out.list = std::move(temp);
    }
  }

  return true;
}

// static
bool OptionConstraint::Populate(
    const base::Value& value, OptionConstraint& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<OptionConstraint> OptionConstraint::FromValue(const base::Value::Dict& value) {
  OptionConstraint out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<OptionConstraint> OptionConstraint::FromValue(const base::Value& value) {
  OptionConstraint out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict OptionConstraint::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", document_scan::ToString(this->type));

  if (this->min) {
    to_value_result.Set("min", (this->min)->ToValue());

  }
  if (this->max) {
    to_value_result.Set("max", (this->max)->ToValue());

  }
  if (this->quant) {
    to_value_result.Set("quant", (this->quant)->ToValue());

  }
  if (this->list) {
    to_value_result.Set("list", (this->list)->ToValue());

  }

  return to_value_result;
}


const char* ToString(Configurability enum_param) {
  switch (enum_param) {
    case Configurability::kNotConfigurable:
      return "NOT_CONFIGURABLE";
    case Configurability::kSoftwareConfigurable:
      return "SOFTWARE_CONFIGURABLE";
    case Configurability::kHardwareConfigurable:
      return "HARDWARE_CONFIGURABLE";
    case Configurability::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Configurability ParseConfigurability(base::StringPiece enum_string) {
  if (enum_string == "NOT_CONFIGURABLE")
    return Configurability::kNotConfigurable;
  if (enum_string == "SOFTWARE_CONFIGURABLE")
    return Configurability::kSoftwareConfigurable;
  if (enum_string == "HARDWARE_CONFIGURABLE")
    return Configurability::kHardwareConfigurable;
  return Configurability::kNone;
}

std::u16string GetConfigurabilityParseError(base::StringPiece enum_string) {
  return u"expected \"NOT_CONFIGURABLE\" or \"SOFTWARE_CONFIGURABLE\" or \"HARDWARE_CONFIGURABLE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ScannerOption::Value::Value()
 {}

ScannerOption::Value::~Value() = default;
ScannerOption::Value::Value(Value&& rhs) noexcept = default;
ScannerOption::Value& ScannerOption::Value::operator=(Value&& rhs) noexcept = default;
ScannerOption::Value ScannerOption::Value::Clone() const {
  Value out;
  out.as_boolean = as_boolean;
  out.as_number = as_number;
  out.as_numbers = as_numbers;
  out.as_integer = as_integer;
  out.as_integers = as_integers;
  out.as_string = as_string;
  return out;
}

// static
bool ScannerOption::Value::Populate(
    const base::Value& value, Value& out) {
  if (value.type() == base::Value::Type::BOOLEAN) {
    {
      auto temp = value.GetIfBool();
      if (!temp.has_value()) {
        out.as_boolean = std::nullopt;
        return false;
      }
      out.as_boolean = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::DOUBLE) {
    {
      auto temp = value.GetIfDouble();
      if (!temp.has_value()) {
        out.as_number = std::nullopt;
        return false;
      }
      out.as_number = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_numbers)) {
          return false;
        }
      }
    }
    return true;
  }
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_integers)) {
          return false;
        }
      }
    }
    return true;
  }
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  return false;
}

// static
std::optional<ScannerOption::Value> ScannerOption::Value::FromValue(const base::Value& value) {
  Value out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value ScannerOption::Value::ToValue() const {
  base::Value result;
  if (as_boolean) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for value";
    result = base::Value(*as_boolean);

  }
  if (as_number) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for value";
    result = base::Value(*as_number);

  }
  if (as_numbers) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for value";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_numbers));

  }
  if (as_integer) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for value";
    result = base::Value(*as_integer);

  }
  if (as_integers) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for value";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_integers));

  }
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for value";
    result = base::Value(*as_string);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for value";
  return result;
}



ScannerOption::ScannerOption()
: type(),
unit(),
is_detectable(false),
configurability(),
is_auto_settable(false),
is_emulated(false),
is_active(false),
is_advanced(false),
is_internal(false) {}

ScannerOption::~ScannerOption() = default;
ScannerOption::ScannerOption(ScannerOption&& rhs) noexcept = default;
ScannerOption& ScannerOption::operator=(ScannerOption&& rhs) noexcept = default;
ScannerOption ScannerOption::Clone() const {
  ScannerOption out;
  out.name = name;
  out.title = title;
  out.description = description;
  out.type = type;
  out.unit = unit;
  if (value) {
    out.value = value->Clone();
  }
  if (constraint) {
    out.constraint = constraint->Clone();
  }
  out.is_detectable = is_detectable;
  out.configurability = configurability;
  out.is_auto_settable = is_auto_settable;
  out.is_emulated = is_emulated;
  out.is_active = is_active;
  out.is_advanced = is_advanced;
  out.is_internal = is_internal;
  return out;
}

// static
bool ScannerOption::Populate(
    const base::Value::Dict& dict, ScannerOption& out) {
  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* title_value = dict.Find("title");
  if (!title_value) {
    return false;
  }
  {
    auto* temp = (*title_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.title = *temp;
  }

  const base::Value* description_value = dict.Find("description");
  if (!description_value) {
    return false;
  }
  {
    auto* temp = (*description_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.description = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* option_type_as_string = (*type_value).GetIfString();
    if (!option_type_as_string) {
      return false;
    }
    out.type = ParseOptionType(*option_type_as_string);
    if (out.type == OptionType()) {
      return false;
    }
  }

  const base::Value* unit_value = dict.Find("unit");
  if (!unit_value) {
    return false;
  }
  {
    const std::string* option_unit_as_string = (*unit_value).GetIfString();
    if (!option_unit_as_string) {
      return false;
    }
    out.unit = ParseOptionUnit(*option_unit_as_string);
    if (out.unit == OptionUnit()) {
      return false;
    }
  }

  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    {
      Value temp;
      if (!Value::Populate((*value_value), temp))
        return false;
      out.value = std::move(temp);
    }
  }

  const base::Value* constraint_value = dict.Find("constraint");
  if (constraint_value) {
    {
      if (!(*constraint_value).is_dict()) {
        return false;
      }
      else {
        OptionConstraint temp;
        if (!OptionConstraint::Populate((*constraint_value).GetDict(), temp))
          return false;
        out.constraint = std::move(temp);
      }
    }
  }

  const base::Value* is_detectable_value = dict.Find("isDetectable");
  if (!is_detectable_value) {
    return false;
  }
  {
    auto temp = (*is_detectable_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_detectable = *temp;
  }

  const base::Value* configurability_value = dict.Find("configurability");
  if (!configurability_value) {
    return false;
  }
  {
    const std::string* configurability_as_string = (*configurability_value).GetIfString();
    if (!configurability_as_string) {
      return false;
    }
    out.configurability = ParseConfigurability(*configurability_as_string);
    if (out.configurability == Configurability()) {
      return false;
    }
  }

  const base::Value* is_auto_settable_value = dict.Find("isAutoSettable");
  if (!is_auto_settable_value) {
    return false;
  }
  {
    auto temp = (*is_auto_settable_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_auto_settable = *temp;
  }

  const base::Value* is_emulated_value = dict.Find("isEmulated");
  if (!is_emulated_value) {
    return false;
  }
  {
    auto temp = (*is_emulated_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_emulated = *temp;
  }

  const base::Value* is_active_value = dict.Find("isActive");
  if (!is_active_value) {
    return false;
  }
  {
    auto temp = (*is_active_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_active = *temp;
  }

  const base::Value* is_advanced_value = dict.Find("isAdvanced");
  if (!is_advanced_value) {
    return false;
  }
  {
    auto temp = (*is_advanced_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_advanced = *temp;
  }

  const base::Value* is_internal_value = dict.Find("isInternal");
  if (!is_internal_value) {
    return false;
  }
  {
    auto temp = (*is_internal_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_internal = *temp;
  }

  return true;
}

// static
bool ScannerOption::Populate(
    const base::Value& value, ScannerOption& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ScannerOption> ScannerOption::FromValue(const base::Value::Dict& value) {
  ScannerOption out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ScannerOption> ScannerOption::FromValue(const base::Value& value) {
  ScannerOption out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ScannerOption::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("title", this->title);

  to_value_result.Set("description", this->description);

  to_value_result.Set("type", document_scan::ToString(this->type));

  to_value_result.Set("unit", document_scan::ToString(this->unit));

  if (this->value) {
    to_value_result.Set("value", (this->value)->ToValue());

  }
  if (this->constraint) {
    to_value_result.Set("constraint", (this->constraint)->ToValue());

  }
  to_value_result.Set("isDetectable", this->is_detectable);

  to_value_result.Set("configurability", document_scan::ToString(this->configurability));

  to_value_result.Set("isAutoSettable", this->is_auto_settable);

  to_value_result.Set("isEmulated", this->is_emulated);

  to_value_result.Set("isActive", this->is_active);

  to_value_result.Set("isAdvanced", this->is_advanced);

  to_value_result.Set("isInternal", this->is_internal);


  return to_value_result;
}


DeviceFilter::DeviceFilter()
 {}

DeviceFilter::~DeviceFilter() = default;
DeviceFilter::DeviceFilter(DeviceFilter&& rhs) noexcept = default;
DeviceFilter& DeviceFilter::operator=(DeviceFilter&& rhs) noexcept = default;
DeviceFilter DeviceFilter::Clone() const {
  DeviceFilter out;
  out.local = local;
  out.secure = secure;
  return out;
}

// static
bool DeviceFilter::Populate(
    const base::Value::Dict& dict, DeviceFilter& out) {
  const base::Value* local_value = dict.Find("local");
  if (local_value) {
    {
      auto temp = (*local_value).GetIfBool();
      if (!temp.has_value()) {
        out.local = std::nullopt;
        return false;
      }
      out.local = *temp;
    }
  }

  const base::Value* secure_value = dict.Find("secure");
  if (secure_value) {
    {
      auto temp = (*secure_value).GetIfBool();
      if (!temp.has_value()) {
        out.secure = std::nullopt;
        return false;
      }
      out.secure = *temp;
    }
  }

  return true;
}

// static
bool DeviceFilter::Populate(
    const base::Value& value, DeviceFilter& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DeviceFilter> DeviceFilter::FromValue(const base::Value::Dict& value) {
  DeviceFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DeviceFilter> DeviceFilter::FromValue(const base::Value& value) {
  DeviceFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DeviceFilter::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->local) {
    to_value_result.Set("local", *this->local);

  }
  if (this->secure) {
    to_value_result.Set("secure", *this->secure);

  }

  return to_value_result;
}


OptionGroup::OptionGroup()
 {}

OptionGroup::~OptionGroup() = default;
OptionGroup::OptionGroup(OptionGroup&& rhs) noexcept = default;
OptionGroup& OptionGroup::operator=(OptionGroup&& rhs) noexcept = default;
OptionGroup OptionGroup::Clone() const {
  OptionGroup out;
  out.title = title;
  out.members = members;
  return out;
}

// static
bool OptionGroup::Populate(
    const base::Value::Dict& dict, OptionGroup& out) {
  const base::Value* title_value = dict.Find("title");
  if (!title_value) {
    return false;
  }
  {
    auto* temp = (*title_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.title = *temp;
  }

  const base::Value* members_value = dict.Find("members");
  if (!members_value) {
    return false;
  }
  {
    if (!(*members_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*members_value).GetList(), out.members)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool OptionGroup::Populate(
    const base::Value& value, OptionGroup& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<OptionGroup> OptionGroup::FromValue(const base::Value::Dict& value) {
  OptionGroup out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<OptionGroup> OptionGroup::FromValue(const base::Value& value) {
  OptionGroup out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict OptionGroup::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("title", this->title);

  to_value_result.Set("members", json_schema_compiler::util::CreateValueFromArray(this->members));


  return to_value_result;
}


GetScannerListResponse::GetScannerListResponse()
: result() {}

GetScannerListResponse::~GetScannerListResponse() = default;
GetScannerListResponse::GetScannerListResponse(GetScannerListResponse&& rhs) noexcept = default;
GetScannerListResponse& GetScannerListResponse::operator=(GetScannerListResponse&& rhs) noexcept = default;
GetScannerListResponse GetScannerListResponse::Clone() const {
  GetScannerListResponse out;
  out.result = result;
  out.scanners.reserve(scanners.size());
  for (const auto& element : scanners) {
    json_schema_compiler::util::AppendToContainer(out.scanners, element.Clone());
  }
  return out;
}

// static
bool GetScannerListResponse::Populate(
    const base::Value::Dict& dict, GetScannerListResponse& out) {
  const base::Value* result_value = dict.Find("result");
  if (!result_value) {
    return false;
  }
  {
    const std::string* operation_result_as_string = (*result_value).GetIfString();
    if (!operation_result_as_string) {
      return false;
    }
    out.result = ParseOperationResult(*operation_result_as_string);
    if (out.result == OperationResult()) {
      return false;
    }
  }

  const base::Value* scanners_value = dict.Find("scanners");
  if (!scanners_value) {
    return false;
  }
  {
    if (!(*scanners_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*scanners_value).GetList(), out.scanners)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool GetScannerListResponse::Populate(
    const base::Value& value, GetScannerListResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetScannerListResponse> GetScannerListResponse::FromValue(const base::Value::Dict& value) {
  GetScannerListResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetScannerListResponse> GetScannerListResponse::FromValue(const base::Value& value) {
  GetScannerListResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GetScannerListResponse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("result", document_scan::ToString(this->result));

  to_value_result.Set("scanners", json_schema_compiler::util::CreateValueFromArray(this->scanners));


  return to_value_result;
}


OpenScannerResponse::Options::Options()
 {}

OpenScannerResponse::Options::~Options() = default;
OpenScannerResponse::Options::Options(Options&& rhs) noexcept = default;
OpenScannerResponse::Options& OpenScannerResponse::Options::operator=(Options&& rhs) noexcept = default;
OpenScannerResponse::Options OpenScannerResponse::Options::Clone() const {
  Options out;
  return out;
}

// static
bool OpenScannerResponse::Options::Populate(
    const base::Value::Dict& dict, Options& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool OpenScannerResponse::Options::Populate(
    const base::Value& value, Options& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<OpenScannerResponse::Options> OpenScannerResponse::Options::FromValue(const base::Value::Dict& value) {
  Options out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<OpenScannerResponse::Options> OpenScannerResponse::Options::FromValue(const base::Value& value) {
  Options out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict OpenScannerResponse::Options::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



OpenScannerResponse::OpenScannerResponse()
: result() {}

OpenScannerResponse::~OpenScannerResponse() = default;
OpenScannerResponse::OpenScannerResponse(OpenScannerResponse&& rhs) noexcept = default;
OpenScannerResponse& OpenScannerResponse::operator=(OpenScannerResponse&& rhs) noexcept = default;
OpenScannerResponse OpenScannerResponse::Clone() const {
  OpenScannerResponse out;
  out.scanner_id = scanner_id;
  out.result = result;
  out.scanner_handle = scanner_handle;
  if (options) {
    out.options = options->Clone();
  }
  return out;
}

// static
bool OpenScannerResponse::Populate(
    const base::Value::Dict& dict, OpenScannerResponse& out) {
  const base::Value* scanner_id_value = dict.Find("scannerId");
  if (!scanner_id_value) {
    return false;
  }
  {
    auto* temp = (*scanner_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.scanner_id = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (!result_value) {
    return false;
  }
  {
    const std::string* operation_result_as_string = (*result_value).GetIfString();
    if (!operation_result_as_string) {
      return false;
    }
    out.result = ParseOperationResult(*operation_result_as_string);
    if (out.result == OperationResult()) {
      return false;
    }
  }

  const base::Value* scanner_handle_value = dict.Find("scannerHandle");
  if (scanner_handle_value) {
    {
      auto* temp = (*scanner_handle_value).GetIfString();
      if (!temp) {
        out.scanner_handle = std::nullopt;
        return false;
      }
      out.scanner_handle = *temp;
    }
  }

  const base::Value* options_value = dict.Find("options");
  if (options_value) {
    {
      if (!(*options_value).is_dict()) {
        return false;
      }
      else {
        Options temp;
        if (!Options::Populate((*options_value).GetDict(), temp))
          return false;
        out.options = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool OpenScannerResponse::Populate(
    const base::Value& value, OpenScannerResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<OpenScannerResponse> OpenScannerResponse::FromValue(const base::Value::Dict& value) {
  OpenScannerResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<OpenScannerResponse> OpenScannerResponse::FromValue(const base::Value& value) {
  OpenScannerResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict OpenScannerResponse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("scannerId", this->scanner_id);

  to_value_result.Set("result", document_scan::ToString(this->result));

  if (this->scanner_handle) {
    to_value_result.Set("scannerHandle", *this->scanner_handle);

  }
  if (this->options) {
    to_value_result.Set("options", (this->options)->ToValue());

  }

  return to_value_result;
}


GetOptionGroupsResponse::GetOptionGroupsResponse()
: result() {}

GetOptionGroupsResponse::~GetOptionGroupsResponse() = default;
GetOptionGroupsResponse::GetOptionGroupsResponse(GetOptionGroupsResponse&& rhs) noexcept = default;
GetOptionGroupsResponse& GetOptionGroupsResponse::operator=(GetOptionGroupsResponse&& rhs) noexcept = default;
GetOptionGroupsResponse GetOptionGroupsResponse::Clone() const {
  GetOptionGroupsResponse out;
  out.scanner_handle = scanner_handle;
  out.result = result;
  if (groups) {
    out.groups.emplace();
    out.groups->reserve(groups->size());
    for (const auto& element : *groups) {
      json_schema_compiler::util::AppendToContainer(*out.groups, element.Clone());
    }
  }
  return out;
}

// static
bool GetOptionGroupsResponse::Populate(
    const base::Value::Dict& dict, GetOptionGroupsResponse& out) {
  const base::Value* scanner_handle_value = dict.Find("scannerHandle");
  if (!scanner_handle_value) {
    return false;
  }
  {
    auto* temp = (*scanner_handle_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.scanner_handle = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (!result_value) {
    return false;
  }
  {
    const std::string* operation_result_as_string = (*result_value).GetIfString();
    if (!operation_result_as_string) {
      return false;
    }
    out.result = ParseOperationResult(*operation_result_as_string);
    if (out.result == OperationResult()) {
      return false;
    }
  }

  const base::Value* groups_value = dict.Find("groups");
  if (groups_value) {
    {
      if (!(*groups_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*groups_value).GetList(), out.groups)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool GetOptionGroupsResponse::Populate(
    const base::Value& value, GetOptionGroupsResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetOptionGroupsResponse> GetOptionGroupsResponse::FromValue(const base::Value::Dict& value) {
  GetOptionGroupsResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetOptionGroupsResponse> GetOptionGroupsResponse::FromValue(const base::Value& value) {
  GetOptionGroupsResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GetOptionGroupsResponse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("scannerHandle", this->scanner_handle);

  to_value_result.Set("result", document_scan::ToString(this->result));

  if (this->groups) {
    to_value_result.Set("groups", json_schema_compiler::util::CreateValueFromArray(*this->groups));

  }

  return to_value_result;
}


CloseScannerResponse::CloseScannerResponse()
: result() {}

CloseScannerResponse::~CloseScannerResponse() = default;
CloseScannerResponse::CloseScannerResponse(CloseScannerResponse&& rhs) noexcept = default;
CloseScannerResponse& CloseScannerResponse::operator=(CloseScannerResponse&& rhs) noexcept = default;
CloseScannerResponse CloseScannerResponse::Clone() const {
  CloseScannerResponse out;
  out.scanner_handle = scanner_handle;
  out.result = result;
  return out;
}

// static
bool CloseScannerResponse::Populate(
    const base::Value::Dict& dict, CloseScannerResponse& out) {
  const base::Value* scanner_handle_value = dict.Find("scannerHandle");
  if (!scanner_handle_value) {
    return false;
  }
  {
    auto* temp = (*scanner_handle_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.scanner_handle = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (!result_value) {
    return false;
  }
  {
    const std::string* operation_result_as_string = (*result_value).GetIfString();
    if (!operation_result_as_string) {
      return false;
    }
    out.result = ParseOperationResult(*operation_result_as_string);
    if (out.result == OperationResult()) {
      return false;
    }
  }

  return true;
}

// static
bool CloseScannerResponse::Populate(
    const base::Value& value, CloseScannerResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CloseScannerResponse> CloseScannerResponse::FromValue(const base::Value::Dict& value) {
  CloseScannerResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CloseScannerResponse> CloseScannerResponse::FromValue(const base::Value& value) {
  CloseScannerResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict CloseScannerResponse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("scannerHandle", this->scanner_handle);

  to_value_result.Set("result", document_scan::ToString(this->result));


  return to_value_result;
}


OptionSetting::Value::Value()
 {}

OptionSetting::Value::~Value() = default;
OptionSetting::Value::Value(Value&& rhs) noexcept = default;
OptionSetting::Value& OptionSetting::Value::operator=(Value&& rhs) noexcept = default;
OptionSetting::Value OptionSetting::Value::Clone() const {
  Value out;
  out.as_boolean = as_boolean;
  out.as_number = as_number;
  out.as_numbers = as_numbers;
  out.as_integer = as_integer;
  out.as_integers = as_integers;
  out.as_string = as_string;
  return out;
}

// static
bool OptionSetting::Value::Populate(
    const base::Value& value, Value& out) {
  if (value.type() == base::Value::Type::BOOLEAN) {
    {
      auto temp = value.GetIfBool();
      if (!temp.has_value()) {
        out.as_boolean = std::nullopt;
        return false;
      }
      out.as_boolean = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::DOUBLE) {
    {
      auto temp = value.GetIfDouble();
      if (!temp.has_value()) {
        out.as_number = std::nullopt;
        return false;
      }
      out.as_number = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_numbers)) {
          return false;
        }
      }
    }
    return true;
  }
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_integers)) {
          return false;
        }
      }
    }
    return true;
  }
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  return false;
}

// static
std::optional<OptionSetting::Value> OptionSetting::Value::FromValue(const base::Value& value) {
  Value out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value OptionSetting::Value::ToValue() const {
  base::Value result;
  if (as_boolean) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for value";
    result = base::Value(*as_boolean);

  }
  if (as_number) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for value";
    result = base::Value(*as_number);

  }
  if (as_numbers) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for value";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_numbers));

  }
  if (as_integer) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for value";
    result = base::Value(*as_integer);

  }
  if (as_integers) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for value";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_integers));

  }
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for value";
    result = base::Value(*as_string);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for value";
  return result;
}



OptionSetting::OptionSetting()
: type() {}

OptionSetting::~OptionSetting() = default;
OptionSetting::OptionSetting(OptionSetting&& rhs) noexcept = default;
OptionSetting& OptionSetting::operator=(OptionSetting&& rhs) noexcept = default;
OptionSetting OptionSetting::Clone() const {
  OptionSetting out;
  out.name = name;
  out.type = type;
  if (value) {
    out.value = value->Clone();
  }
  return out;
}

// static
bool OptionSetting::Populate(
    const base::Value::Dict& dict, OptionSetting& out) {
  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* option_type_as_string = (*type_value).GetIfString();
    if (!option_type_as_string) {
      return false;
    }
    out.type = ParseOptionType(*option_type_as_string);
    if (out.type == OptionType()) {
      return false;
    }
  }

  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    {
      Value temp;
      if (!Value::Populate((*value_value), temp))
        return false;
      out.value = std::move(temp);
    }
  }

  return true;
}

// static
bool OptionSetting::Populate(
    const base::Value& value, OptionSetting& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<OptionSetting> OptionSetting::FromValue(const base::Value::Dict& value) {
  OptionSetting out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<OptionSetting> OptionSetting::FromValue(const base::Value& value) {
  OptionSetting out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict OptionSetting::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("type", document_scan::ToString(this->type));

  if (this->value) {
    to_value_result.Set("value", (this->value)->ToValue());

  }

  return to_value_result;
}


SetOptionResult::SetOptionResult()
: result() {}

SetOptionResult::~SetOptionResult() = default;
SetOptionResult::SetOptionResult(SetOptionResult&& rhs) noexcept = default;
SetOptionResult& SetOptionResult::operator=(SetOptionResult&& rhs) noexcept = default;
SetOptionResult SetOptionResult::Clone() const {
  SetOptionResult out;
  out.name = name;
  out.result = result;
  return out;
}

// static
bool SetOptionResult::Populate(
    const base::Value::Dict& dict, SetOptionResult& out) {
  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (!result_value) {
    return false;
  }
  {
    const std::string* operation_result_as_string = (*result_value).GetIfString();
    if (!operation_result_as_string) {
      return false;
    }
    out.result = ParseOperationResult(*operation_result_as_string);
    if (out.result == OperationResult()) {
      return false;
    }
  }

  return true;
}

// static
bool SetOptionResult::Populate(
    const base::Value& value, SetOptionResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SetOptionResult> SetOptionResult::FromValue(const base::Value::Dict& value) {
  SetOptionResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SetOptionResult> SetOptionResult::FromValue(const base::Value& value) {
  SetOptionResult out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SetOptionResult::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("result", document_scan::ToString(this->result));


  return to_value_result;
}


SetOptionsResponse::Options::Options()
 {}

SetOptionsResponse::Options::~Options() = default;
SetOptionsResponse::Options::Options(Options&& rhs) noexcept = default;
SetOptionsResponse::Options& SetOptionsResponse::Options::operator=(Options&& rhs) noexcept = default;
SetOptionsResponse::Options SetOptionsResponse::Options::Clone() const {
  Options out;
  return out;
}

// static
bool SetOptionsResponse::Options::Populate(
    const base::Value::Dict& dict, Options& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool SetOptionsResponse::Options::Populate(
    const base::Value& value, Options& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SetOptionsResponse::Options> SetOptionsResponse::Options::FromValue(const base::Value::Dict& value) {
  Options out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SetOptionsResponse::Options> SetOptionsResponse::Options::FromValue(const base::Value& value) {
  Options out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SetOptionsResponse::Options::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



SetOptionsResponse::SetOptionsResponse()
 {}

SetOptionsResponse::~SetOptionsResponse() = default;
SetOptionsResponse::SetOptionsResponse(SetOptionsResponse&& rhs) noexcept = default;
SetOptionsResponse& SetOptionsResponse::operator=(SetOptionsResponse&& rhs) noexcept = default;
SetOptionsResponse SetOptionsResponse::Clone() const {
  SetOptionsResponse out;
  out.scanner_handle = scanner_handle;
  out.results.reserve(results.size());
  for (const auto& element : results) {
    json_schema_compiler::util::AppendToContainer(out.results, element.Clone());
  }
  if (options) {
    out.options = options->Clone();
  }
  return out;
}

// static
bool SetOptionsResponse::Populate(
    const base::Value::Dict& dict, SetOptionsResponse& out) {
  const base::Value* scanner_handle_value = dict.Find("scannerHandle");
  if (!scanner_handle_value) {
    return false;
  }
  {
    auto* temp = (*scanner_handle_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.scanner_handle = *temp;
  }

  const base::Value* results_value = dict.Find("results");
  if (!results_value) {
    return false;
  }
  {
    if (!(*results_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*results_value).GetList(), out.results)) {
        return false;
      }
    }
  }

  const base::Value* options_value = dict.Find("options");
  if (options_value) {
    {
      if (!(*options_value).is_dict()) {
        return false;
      }
      else {
        Options temp;
        if (!Options::Populate((*options_value).GetDict(), temp))
          return false;
        out.options = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool SetOptionsResponse::Populate(
    const base::Value& value, SetOptionsResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SetOptionsResponse> SetOptionsResponse::FromValue(const base::Value::Dict& value) {
  SetOptionsResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SetOptionsResponse> SetOptionsResponse::FromValue(const base::Value& value) {
  SetOptionsResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SetOptionsResponse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("scannerHandle", this->scanner_handle);

  to_value_result.Set("results", json_schema_compiler::util::CreateValueFromArray(this->results));

  if (this->options) {
    to_value_result.Set("options", (this->options)->ToValue());

  }

  return to_value_result;
}


StartScanOptions::StartScanOptions()
 {}

StartScanOptions::~StartScanOptions() = default;
StartScanOptions::StartScanOptions(StartScanOptions&& rhs) noexcept = default;
StartScanOptions& StartScanOptions::operator=(StartScanOptions&& rhs) noexcept = default;
StartScanOptions StartScanOptions::Clone() const {
  StartScanOptions out;
  out.format = format;
  return out;
}

// static
bool StartScanOptions::Populate(
    const base::Value::Dict& dict, StartScanOptions& out) {
  const base::Value* format_value = dict.Find("format");
  if (!format_value) {
    return false;
  }
  {
    auto* temp = (*format_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.format = *temp;
  }

  return true;
}

// static
bool StartScanOptions::Populate(
    const base::Value& value, StartScanOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StartScanOptions> StartScanOptions::FromValue(const base::Value::Dict& value) {
  StartScanOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StartScanOptions> StartScanOptions::FromValue(const base::Value& value) {
  StartScanOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict StartScanOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("format", this->format);


  return to_value_result;
}


StartScanResponse::StartScanResponse()
: result() {}

StartScanResponse::~StartScanResponse() = default;
StartScanResponse::StartScanResponse(StartScanResponse&& rhs) noexcept = default;
StartScanResponse& StartScanResponse::operator=(StartScanResponse&& rhs) noexcept = default;
StartScanResponse StartScanResponse::Clone() const {
  StartScanResponse out;
  out.scanner_handle = scanner_handle;
  out.result = result;
  out.job = job;
  return out;
}

// static
bool StartScanResponse::Populate(
    const base::Value::Dict& dict, StartScanResponse& out) {
  const base::Value* scanner_handle_value = dict.Find("scannerHandle");
  if (!scanner_handle_value) {
    return false;
  }
  {
    auto* temp = (*scanner_handle_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.scanner_handle = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (!result_value) {
    return false;
  }
  {
    const std::string* operation_result_as_string = (*result_value).GetIfString();
    if (!operation_result_as_string) {
      return false;
    }
    out.result = ParseOperationResult(*operation_result_as_string);
    if (out.result == OperationResult()) {
      return false;
    }
  }

  const base::Value* job_value = dict.Find("job");
  if (job_value) {
    {
      auto* temp = (*job_value).GetIfString();
      if (!temp) {
        out.job = std::nullopt;
        return false;
      }
      out.job = *temp;
    }
  }

  return true;
}

// static
bool StartScanResponse::Populate(
    const base::Value& value, StartScanResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StartScanResponse> StartScanResponse::FromValue(const base::Value::Dict& value) {
  StartScanResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StartScanResponse> StartScanResponse::FromValue(const base::Value& value) {
  StartScanResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict StartScanResponse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("scannerHandle", this->scanner_handle);

  to_value_result.Set("result", document_scan::ToString(this->result));

  if (this->job) {
    to_value_result.Set("job", *this->job);

  }

  return to_value_result;
}


CancelScanResponse::CancelScanResponse()
: result() {}

CancelScanResponse::~CancelScanResponse() = default;
CancelScanResponse::CancelScanResponse(CancelScanResponse&& rhs) noexcept = default;
CancelScanResponse& CancelScanResponse::operator=(CancelScanResponse&& rhs) noexcept = default;
CancelScanResponse CancelScanResponse::Clone() const {
  CancelScanResponse out;
  out.job = job;
  out.result = result;
  return out;
}

// static
bool CancelScanResponse::Populate(
    const base::Value::Dict& dict, CancelScanResponse& out) {
  const base::Value* job_value = dict.Find("job");
  if (!job_value) {
    return false;
  }
  {
    auto* temp = (*job_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.job = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (!result_value) {
    return false;
  }
  {
    const std::string* operation_result_as_string = (*result_value).GetIfString();
    if (!operation_result_as_string) {
      return false;
    }
    out.result = ParseOperationResult(*operation_result_as_string);
    if (out.result == OperationResult()) {
      return false;
    }
  }

  return true;
}

// static
bool CancelScanResponse::Populate(
    const base::Value& value, CancelScanResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CancelScanResponse> CancelScanResponse::FromValue(const base::Value::Dict& value) {
  CancelScanResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CancelScanResponse> CancelScanResponse::FromValue(const base::Value& value) {
  CancelScanResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict CancelScanResponse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("job", this->job);

  to_value_result.Set("result", document_scan::ToString(this->result));


  return to_value_result;
}


ReadScanDataResponse::ReadScanDataResponse()
: result() {}

ReadScanDataResponse::~ReadScanDataResponse() = default;
ReadScanDataResponse::ReadScanDataResponse(ReadScanDataResponse&& rhs) noexcept = default;
ReadScanDataResponse& ReadScanDataResponse::operator=(ReadScanDataResponse&& rhs) noexcept = default;
ReadScanDataResponse ReadScanDataResponse::Clone() const {
  ReadScanDataResponse out;
  out.job = job;
  out.result = result;
  out.data = data;
  out.estimated_completion = estimated_completion;
  return out;
}

// static
bool ReadScanDataResponse::Populate(
    const base::Value::Dict& dict, ReadScanDataResponse& out) {
  const base::Value* job_value = dict.Find("job");
  if (!job_value) {
    return false;
  }
  {
    auto* temp = (*job_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.job = *temp;
  }

  const base::Value* result_value = dict.Find("result");
  if (!result_value) {
    return false;
  }
  {
    const std::string* operation_result_as_string = (*result_value).GetIfString();
    if (!operation_result_as_string) {
      return false;
    }
    out.result = ParseOperationResult(*operation_result_as_string);
    if (out.result == OperationResult()) {
      return false;
    }
  }

  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    {
      if (!(*data_value).is_blob()) {
        return false;
      }
      else {
        out.data = (*data_value).GetBlob();
      }
    }
  }

  const base::Value* estimated_completion_value = dict.Find("estimatedCompletion");
  if (estimated_completion_value) {
    {
      auto temp = (*estimated_completion_value).GetIfInt();
      if (!temp.has_value()) {
        out.estimated_completion = std::nullopt;
        return false;
      }
      out.estimated_completion = *temp;
    }
  }

  return true;
}

// static
bool ReadScanDataResponse::Populate(
    const base::Value& value, ReadScanDataResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ReadScanDataResponse> ReadScanDataResponse::FromValue(const base::Value::Dict& value) {
  ReadScanDataResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ReadScanDataResponse> ReadScanDataResponse::FromValue(const base::Value& value) {
  ReadScanDataResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ReadScanDataResponse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("job", this->job);

  to_value_result.Set("result", document_scan::ToString(this->result));

  if (this->data) {
    to_value_result.Set("data", base::Value(*this->data));

  }
  if (this->estimated_completion) {
    to_value_result.Set("estimatedCompletion", *this->estimated_completion);

  }

  return to_value_result;
}



//
// Functions
//

namespace Scan {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!ScanOptions::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ScanResults& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace Scan

namespace GetScannerList {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& filter_value = args[0];
    {
      if (!filter_value.is_dict()) {
        return std::nullopt;
      }
      if (!DeviceFilter::Populate(filter_value.GetDict(), params.filter)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const GetScannerListResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace GetScannerList

namespace OpenScanner {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& scanner_id_value = args[0];
    {
      auto* temp = scanner_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.scanner_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const OpenScannerResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace OpenScanner

namespace GetOptionGroups {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& scanner_handle_value = args[0];
    {
      auto* temp = scanner_handle_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.scanner_handle = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const GetOptionGroupsResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace GetOptionGroups

namespace CloseScanner {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& scanner_handle_value = args[0];
    {
      auto* temp = scanner_handle_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.scanner_handle = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const CloseScannerResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace CloseScanner

namespace SetOptions {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& scanner_handle_value = args[0];
    {
      auto* temp = scanner_handle_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.scanner_handle = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& options_value = args[1];
    {
      if (!options_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(options_value.GetList(), params.options)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const SetOptionsResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace SetOptions

namespace StartScan {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& scanner_handle_value = args[0];
    {
      auto* temp = scanner_handle_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.scanner_handle = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& options_value = args[1];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!StartScanOptions::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const StartScanResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace StartScan

namespace CancelScan {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& job_value = args[0];
    {
      auto* temp = job_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.job = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const CancelScanResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace CancelScan

namespace ReadScanData {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& job_value = args[0];
    {
      auto* temp = job_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.job = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ReadScanDataResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace ReadScanData

}  // namespace document_scan
}  // namespace api
}  // namespace extensions

