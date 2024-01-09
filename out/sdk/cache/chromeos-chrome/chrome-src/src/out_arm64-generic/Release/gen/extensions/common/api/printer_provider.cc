// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/printer_provider.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/printer_provider.h"

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
#include "extensions/common/api/usb.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace printer_provider {
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


PrinterInfo::PrinterInfo()
 {}

PrinterInfo::~PrinterInfo() = default;
PrinterInfo::PrinterInfo(PrinterInfo&& rhs) noexcept = default;
PrinterInfo& PrinterInfo::operator=(PrinterInfo&& rhs) noexcept = default;
PrinterInfo PrinterInfo::Clone() const {
  PrinterInfo out;
  out.id = id;
  out.name = name;
  out.description = description;
  return out;
}

// static
bool PrinterInfo::Populate(
    const base::Value::Dict& dict, PrinterInfo& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.id = *temp;
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

  const base::Value* description_value = dict.Find("description");
  if (description_value) {
    {
      auto* temp = (*description_value).GetIfString();
      if (!temp) {
        out.description = std::nullopt;
        return false;
      }
      out.description = *temp;
    }
  }

  return true;
}

// static
bool PrinterInfo::Populate(
    const base::Value& value, PrinterInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PrinterInfo> PrinterInfo::FromValue(const base::Value::Dict& value) {
  PrinterInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PrinterInfo> PrinterInfo::FromValue(const base::Value& value) {
  PrinterInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PrinterInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("name", this->name);

  if (this->description) {
    to_value_result.Set("description", *this->description);

  }

  return to_value_result;
}


PrintJob::Ticket::Ticket()
 {}

PrintJob::Ticket::~Ticket() = default;
PrintJob::Ticket::Ticket(Ticket&& rhs) noexcept = default;
PrintJob::Ticket& PrintJob::Ticket::operator=(Ticket&& rhs) noexcept = default;
PrintJob::Ticket PrintJob::Ticket::Clone() const {
  Ticket out;
  return out;
}

// static
bool PrintJob::Ticket::Populate(
    const base::Value::Dict& dict, Ticket& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool PrintJob::Ticket::Populate(
    const base::Value& value, Ticket& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PrintJob::Ticket> PrintJob::Ticket::FromValue(const base::Value::Dict& value) {
  Ticket out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PrintJob::Ticket> PrintJob::Ticket::FromValue(const base::Value& value) {
  Ticket out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PrintJob::Ticket::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


PrintJob::Document::Document()
 {}

PrintJob::Document::~Document() = default;
PrintJob::Document::Document(Document&& rhs) noexcept = default;
PrintJob::Document& PrintJob::Document::operator=(Document&& rhs) noexcept = default;
PrintJob::Document PrintJob::Document::Clone() const {
  Document out;
  return out;
}

// static
bool PrintJob::Document::Populate(
    const base::Value::Dict& dict, Document& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool PrintJob::Document::Populate(
    const base::Value& value, Document& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PrintJob::Document> PrintJob::Document::FromValue(const base::Value::Dict& value) {
  Document out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PrintJob::Document> PrintJob::Document::FromValue(const base::Value& value) {
  Document out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PrintJob::Document::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



PrintJob::PrintJob()
 {}

PrintJob::~PrintJob() = default;
PrintJob::PrintJob(PrintJob&& rhs) noexcept = default;
PrintJob& PrintJob::operator=(PrintJob&& rhs) noexcept = default;
PrintJob PrintJob::Clone() const {
  PrintJob out;
  out.printer_id = printer_id;
  out.title = title;
  out.ticket = ticket.Clone();
  out.content_type = content_type;
  out.document = document.Clone();
  return out;
}

// static
bool PrintJob::Populate(
    const base::Value::Dict& dict, PrintJob& out) {
  const base::Value* printer_id_value = dict.Find("printerId");
  if (!printer_id_value) {
    return false;
  }
  {
    auto* temp = (*printer_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.printer_id = *temp;
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

  const base::Value* ticket_value = dict.Find("ticket");
  if (!ticket_value) {
    return false;
  }
  {
    if (!(*ticket_value).is_dict()) {
      return false;
    }
    if (!Ticket::Populate((*ticket_value).GetDict(), out.ticket)) {
      return false;
    }
  }

  const base::Value* content_type_value = dict.Find("contentType");
  if (!content_type_value) {
    return false;
  }
  {
    auto* temp = (*content_type_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.content_type = *temp;
  }

  const base::Value* document_value = dict.Find("document");
  if (!document_value) {
    return false;
  }
  {
    if (!(*document_value).is_dict()) {
      return false;
    }
    if (!Document::Populate((*document_value).GetDict(), out.document)) {
      return false;
    }
  }

  return true;
}

// static
bool PrintJob::Populate(
    const base::Value& value, PrintJob& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PrintJob> PrintJob::FromValue(const base::Value::Dict& value) {
  PrintJob out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PrintJob> PrintJob::FromValue(const base::Value& value) {
  PrintJob out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PrintJob::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("printerId", this->printer_id);

  to_value_result.Set("title", this->title);

  to_value_result.Set("ticket", (this->ticket).ToValue());

  to_value_result.Set("contentType", this->content_type);

  to_value_result.Set("document", (this->document).ToValue());


  return to_value_result;
}



//
// Events
//

namespace OnGetPrintersRequested {

const char kEventName[] = "printerProvider.onGetPrintersRequested";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnGetPrintersRequested

namespace OnGetUsbPrinterInfoRequested {

const char kEventName[] = "printerProvider.onGetUsbPrinterInfoRequested";

base::Value::List Create(const extensions::api::usb::Device& device) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((device).ToValue());

  return create_results;
}

}  // namespace OnGetUsbPrinterInfoRequested

namespace OnGetCapabilityRequested {

const char kEventName[] = "printerProvider.onGetCapabilityRequested";

base::Value::List Create(const std::string& printer_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(printer_id);

  return create_results;
}

}  // namespace OnGetCapabilityRequested

namespace OnPrintRequested {

const char kEventName[] = "printerProvider.onPrintRequested";

base::Value::List Create(const PrintJob& print_job) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((print_job).ToValue());

  return create_results;
}

}  // namespace OnPrintRequested

}  // namespace printer_provider
}  // namespace api
}  // namespace extensions

