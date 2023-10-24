// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/printer_provider_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/printer_provider_internal.h"

#include <memory>
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
#include "extensions/common/api/printer_provider.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace printer_provider_internal {
//
// Types
//

const char* ToString(PrintError enum_param) {
  switch (enum_param) {
    case PrintError::kOk:
      return "OK";
    case PrintError::kFailed:
      return "FAILED";
    case PrintError::kInvalidTicket:
      return "INVALID_TICKET";
    case PrintError::kInvalidData:
      return "INVALID_DATA";
    case PrintError::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PrintError ParsePrintError(base::StringPiece enum_string) {
  if (enum_string == "OK")
    return PrintError::kOk;
  if (enum_string == "FAILED")
    return PrintError::kFailed;
  if (enum_string == "INVALID_TICKET")
    return PrintError::kInvalidTicket;
  if (enum_string == "INVALID_DATA")
    return PrintError::kInvalidData;
  return PrintError::kNone;
}

std::u16string GetPrintErrorParseError(base::StringPiece enum_string) {
  return u"expected \"OK\" or \"FAILED\" or \"INVALID_TICKET\" or \"INVALID_DATA\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace ReportPrinters {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& printers_value = args[1];
    {
      if (!printers_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(printers_value.GetList(), params.printers)) {
          return absl::nullopt;
        }
      }
    }
  }

  return params;
}


}  // namespace ReportPrinters

namespace ReportUsbPrinterInfo {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& printer_info_value = args[1];
    {
      if (!printer_info_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        extensions::api::printer_provider::PrinterInfo temp;
        if (!extensions::api::printer_provider::PrinterInfo::Populate(printer_info_value.GetDict(), temp))
          return absl::nullopt;
        params.printer_info = std::move(temp);
      }
    }
  }

  return params;
}


}  // namespace ReportUsbPrinterInfo

namespace ReportPrinterCapability {

Params::Capability::Capability()
 {}

Params::Capability::~Capability() = default;
Params::Capability::Capability(Capability&& rhs) = default;
Params::Capability& Params::Capability::operator=(Capability&& rhs) = default;
Params::Capability Params::Capability::Clone() const {
  Capability out;
  return out;
}

// static
bool Params::Capability::Populate(
    const base::Value::Dict& dict, Capability& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::Capability::Populate(
    const base::Value& value, Capability& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Capability> Params::Capability::FromValue(const base::Value::Dict& value) {
  Capability out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Capability> Params::Capability::FromValue(const base::Value& value) {
  Capability out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& capability_value = args[1];
    {
      if (!capability_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        Capability temp;
        if (!Capability::Populate(capability_value.GetDict(), temp))
          return absl::nullopt;
        params.capability = std::move(temp);
      }
    }
  }

  return params;
}


}  // namespace ReportPrinterCapability

namespace ReportPrintResult {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return absl::nullopt;
  }
  Params params;
  params.error = PrintError();

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& error_value = args[1];
    {
      const std::string* print_error_as_string = error_value.GetIfString();
      if (!print_error_as_string) {
        return absl::nullopt;
      }
      params.error = ParsePrintError(*print_error_as_string);
      if (params.error == PrintError()) {
        return absl::nullopt;
      }
    }
  }

  return params;
}


}  // namespace ReportPrintResult

namespace GetPrintData {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


Results::Blob::Blob()
 {}

Results::Blob::~Blob() = default;
Results::Blob::Blob(Blob&& rhs) = default;
Results::Blob& Results::Blob::operator=(Blob&& rhs) = default;
base::Value::Dict Results::Blob::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Results::Create(const Blob& blob) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((blob).ToValue());

  return create_results;
}
}  // namespace GetPrintData

}  // namespace printer_provider_internal
}  // namespace api
}  // namespace extensions

