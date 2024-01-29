// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/printing_metrics.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/printing_metrics.h"

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
#include "chrome/common/extensions/api/printing.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace printing_metrics {
//
// Types
//

const char* ToString(PrintJobSource enum_param) {
  switch (enum_param) {
    case PrintJobSource::kPrintPreview:
      return "PRINT_PREVIEW";
    case PrintJobSource::kAndroidApp:
      return "ANDROID_APP";
    case PrintJobSource::kExtension:
      return "EXTENSION";
    case PrintJobSource::kIsolatedWebApp:
      return "ISOLATED_WEB_APP";
    case PrintJobSource::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PrintJobSource ParsePrintJobSource(base::StringPiece enum_string) {
  if (enum_string == "PRINT_PREVIEW")
    return PrintJobSource::kPrintPreview;
  if (enum_string == "ANDROID_APP")
    return PrintJobSource::kAndroidApp;
  if (enum_string == "EXTENSION")
    return PrintJobSource::kExtension;
  if (enum_string == "ISOLATED_WEB_APP")
    return PrintJobSource::kIsolatedWebApp;
  return PrintJobSource::kNone;
}

std::u16string GetPrintJobSourceParseError(base::StringPiece enum_string) {
  return u"expected \"PRINT_PREVIEW\" or \"ANDROID_APP\" or \"EXTENSION\" or \"ISOLATED_WEB_APP\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PrintJobStatus enum_param) {
  switch (enum_param) {
    case PrintJobStatus::kFailed:
      return "FAILED";
    case PrintJobStatus::kCanceled:
      return "CANCELED";
    case PrintJobStatus::kPrinted:
      return "PRINTED";
    case PrintJobStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PrintJobStatus ParsePrintJobStatus(base::StringPiece enum_string) {
  if (enum_string == "FAILED")
    return PrintJobStatus::kFailed;
  if (enum_string == "CANCELED")
    return PrintJobStatus::kCanceled;
  if (enum_string == "PRINTED")
    return PrintJobStatus::kPrinted;
  return PrintJobStatus::kNone;
}

std::u16string GetPrintJobStatusParseError(base::StringPiece enum_string) {
  return u"expected \"FAILED\" or \"CANCELED\" or \"PRINTED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PrinterSource enum_param) {
  switch (enum_param) {
    case PrinterSource::kUser:
      return "USER";
    case PrinterSource::kPolicy:
      return "POLICY";
    case PrinterSource::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PrinterSource ParsePrinterSource(base::StringPiece enum_string) {
  if (enum_string == "USER")
    return PrinterSource::kUser;
  if (enum_string == "POLICY")
    return PrinterSource::kPolicy;
  return PrinterSource::kNone;
}

std::u16string GetPrinterSourceParseError(base::StringPiece enum_string) {
  return u"expected \"USER\" or \"POLICY\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ColorMode enum_param) {
  switch (enum_param) {
    case ColorMode::kBlackAndWhite:
      return "BLACK_AND_WHITE";
    case ColorMode::kColor:
      return "COLOR";
    case ColorMode::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ColorMode ParseColorMode(base::StringPiece enum_string) {
  if (enum_string == "BLACK_AND_WHITE")
    return ColorMode::kBlackAndWhite;
  if (enum_string == "COLOR")
    return ColorMode::kColor;
  return ColorMode::kNone;
}

std::u16string GetColorModeParseError(base::StringPiece enum_string) {
  return u"expected \"BLACK_AND_WHITE\" or \"COLOR\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DuplexMode enum_param) {
  switch (enum_param) {
    case DuplexMode::kOneSided:
      return "ONE_SIDED";
    case DuplexMode::kTwoSidedLongEdge:
      return "TWO_SIDED_LONG_EDGE";
    case DuplexMode::kTwoSidedShortEdge:
      return "TWO_SIDED_SHORT_EDGE";
    case DuplexMode::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DuplexMode ParseDuplexMode(base::StringPiece enum_string) {
  if (enum_string == "ONE_SIDED")
    return DuplexMode::kOneSided;
  if (enum_string == "TWO_SIDED_LONG_EDGE")
    return DuplexMode::kTwoSidedLongEdge;
  if (enum_string == "TWO_SIDED_SHORT_EDGE")
    return DuplexMode::kTwoSidedShortEdge;
  return DuplexMode::kNone;
}

std::u16string GetDuplexModeParseError(base::StringPiece enum_string) {
  return u"expected \"ONE_SIDED\" or \"TWO_SIDED_LONG_EDGE\" or \"TWO_SIDED_SHORT_EDGE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


MediaSize::MediaSize()
: width(0),
height(0) {}

MediaSize::~MediaSize() = default;
MediaSize::MediaSize(MediaSize&& rhs) noexcept = default;
MediaSize& MediaSize::operator=(MediaSize&& rhs) noexcept = default;
MediaSize MediaSize::Clone() const {
  MediaSize out;
  out.width = width;
  out.height = height;
  out.vendor_id = vendor_id;
  return out;
}

// static
bool MediaSize::Populate(
    const base::Value::Dict& dict, MediaSize& out) {
  const base::Value* width_value = dict.Find("width");
  if (!width_value) {
    return false;
  }
  {
    auto temp = (*width_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.width = *temp;
  }

  const base::Value* height_value = dict.Find("height");
  if (!height_value) {
    return false;
  }
  {
    auto temp = (*height_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.height = *temp;
  }

  const base::Value* vendor_id_value = dict.Find("vendorId");
  if (!vendor_id_value) {
    return false;
  }
  {
    auto* temp = (*vendor_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.vendor_id = *temp;
  }

  return true;
}

// static
bool MediaSize::Populate(
    const base::Value& value, MediaSize& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MediaSize> MediaSize::FromValue(const base::Value::Dict& value) {
  MediaSize out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MediaSize> MediaSize::FromValue(const base::Value& value) {
  MediaSize out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict MediaSize::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("width", this->width);

  to_value_result.Set("height", this->height);

  to_value_result.Set("vendorId", this->vendor_id);


  return to_value_result;
}


PrintSettings::PrintSettings()
: color(),
duplex(),
copies(0) {}

PrintSettings::~PrintSettings() = default;
PrintSettings::PrintSettings(PrintSettings&& rhs) noexcept = default;
PrintSettings& PrintSettings::operator=(PrintSettings&& rhs) noexcept = default;
PrintSettings PrintSettings::Clone() const {
  PrintSettings out;
  out.color = color;
  out.duplex = duplex;
  out.media_size = media_size.Clone();
  out.copies = copies;
  return out;
}

// static
bool PrintSettings::Populate(
    const base::Value::Dict& dict, PrintSettings& out) {
  const base::Value* color_value = dict.Find("color");
  if (!color_value) {
    return false;
  }
  {
    const std::string* color_mode_as_string = (*color_value).GetIfString();
    if (!color_mode_as_string) {
      return false;
    }
    out.color = ParseColorMode(*color_mode_as_string);
    if (out.color == ColorMode()) {
      return false;
    }
  }

  const base::Value* duplex_value = dict.Find("duplex");
  if (!duplex_value) {
    return false;
  }
  {
    const std::string* duplex_mode_as_string = (*duplex_value).GetIfString();
    if (!duplex_mode_as_string) {
      return false;
    }
    out.duplex = ParseDuplexMode(*duplex_mode_as_string);
    if (out.duplex == DuplexMode()) {
      return false;
    }
  }

  const base::Value* media_size_value = dict.Find("mediaSize");
  if (!media_size_value) {
    return false;
  }
  {
    if (!(*media_size_value).is_dict()) {
      return false;
    }
    if (!MediaSize::Populate((*media_size_value).GetDict(), out.media_size)) {
      return false;
    }
  }

  const base::Value* copies_value = dict.Find("copies");
  if (!copies_value) {
    return false;
  }
  {
    auto temp = (*copies_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.copies = *temp;
  }

  return true;
}

// static
bool PrintSettings::Populate(
    const base::Value& value, PrintSettings& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PrintSettings> PrintSettings::FromValue(const base::Value::Dict& value) {
  PrintSettings out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PrintSettings> PrintSettings::FromValue(const base::Value& value) {
  PrintSettings out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PrintSettings::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("color", printing_metrics::ToString(this->color));

  to_value_result.Set("duplex", printing_metrics::ToString(this->duplex));

  to_value_result.Set("mediaSize", (this->media_size).ToValue());

  to_value_result.Set("copies", this->copies);


  return to_value_result;
}


Printer::Printer()
: source() {}

Printer::~Printer() = default;
Printer::Printer(Printer&& rhs) noexcept = default;
Printer& Printer::operator=(Printer&& rhs) noexcept = default;
Printer Printer::Clone() const {
  Printer out;
  out.name = name;
  out.uri = uri;
  out.source = source;
  return out;
}

// static
bool Printer::Populate(
    const base::Value::Dict& dict, Printer& out) {
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

  const base::Value* uri_value = dict.Find("uri");
  if (!uri_value) {
    return false;
  }
  {
    auto* temp = (*uri_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.uri = *temp;
  }

  const base::Value* source_value = dict.Find("source");
  if (!source_value) {
    return false;
  }
  {
    const std::string* printer_source_as_string = (*source_value).GetIfString();
    if (!printer_source_as_string) {
      return false;
    }
    out.source = ParsePrinterSource(*printer_source_as_string);
    if (out.source == PrinterSource()) {
      return false;
    }
  }

  return true;
}

// static
bool Printer::Populate(
    const base::Value& value, Printer& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Printer> Printer::FromValue(const base::Value::Dict& value) {
  Printer out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Printer> Printer::FromValue(const base::Value& value) {
  Printer out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Printer::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("uri", this->uri);

  to_value_result.Set("source", printing_metrics::ToString(this->source));


  return to_value_result;
}


PrintJobInfo::PrintJobInfo()
: source(),
status(),
creation_time(0.0),
completion_time(0.0),
number_of_pages(0),
printer_status() {}

PrintJobInfo::~PrintJobInfo() = default;
PrintJobInfo::PrintJobInfo(PrintJobInfo&& rhs) noexcept = default;
PrintJobInfo& PrintJobInfo::operator=(PrintJobInfo&& rhs) noexcept = default;
PrintJobInfo PrintJobInfo::Clone() const {
  PrintJobInfo out;
  out.id = id;
  out.title = title;
  out.source = source;
  out.source_id = source_id;
  out.status = status;
  out.creation_time = creation_time;
  out.completion_time = completion_time;
  out.printer = printer.Clone();
  out.settings = settings.Clone();
  out.number_of_pages = number_of_pages;
  out.printer_status = printer_status;
  return out;
}

// static
bool PrintJobInfo::Populate(
    const base::Value::Dict& dict, PrintJobInfo& out) {
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

  const base::Value* source_value = dict.Find("source");
  if (!source_value) {
    return false;
  }
  {
    const std::string* print_job_source_as_string = (*source_value).GetIfString();
    if (!print_job_source_as_string) {
      return false;
    }
    out.source = ParsePrintJobSource(*print_job_source_as_string);
    if (out.source == PrintJobSource()) {
      return false;
    }
  }

  const base::Value* source_id_value = dict.Find("sourceId");
  if (source_id_value) {
    {
      auto* temp = (*source_id_value).GetIfString();
      if (!temp) {
        out.source_id = std::nullopt;
        return false;
      }
      out.source_id = *temp;
    }
  }

  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* print_job_status_as_string = (*status_value).GetIfString();
    if (!print_job_status_as_string) {
      return false;
    }
    out.status = ParsePrintJobStatus(*print_job_status_as_string);
    if (out.status == PrintJobStatus()) {
      return false;
    }
  }

  const base::Value* creation_time_value = dict.Find("creationTime");
  if (!creation_time_value) {
    return false;
  }
  {
    auto temp = (*creation_time_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.creation_time = *temp;
  }

  const base::Value* completion_time_value = dict.Find("completionTime");
  if (!completion_time_value) {
    return false;
  }
  {
    auto temp = (*completion_time_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.completion_time = *temp;
  }

  const base::Value* printer_value = dict.Find("printer");
  if (!printer_value) {
    return false;
  }
  {
    if (!(*printer_value).is_dict()) {
      return false;
    }
    if (!Printer::Populate((*printer_value).GetDict(), out.printer)) {
      return false;
    }
  }

  const base::Value* settings_value = dict.Find("settings");
  if (!settings_value) {
    return false;
  }
  {
    if (!(*settings_value).is_dict()) {
      return false;
    }
    if (!PrintSettings::Populate((*settings_value).GetDict(), out.settings)) {
      return false;
    }
  }

  const base::Value* number_of_pages_value = dict.Find("numberOfPages");
  if (!number_of_pages_value) {
    return false;
  }
  {
    auto temp = (*number_of_pages_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.number_of_pages = *temp;
  }

  const base::Value* printer_status_value = dict.Find("printer_status");
  if (!printer_status_value) {
    return false;
  }
  {
    const std::string* printer_status_as_string = (*printer_status_value).GetIfString();
    if (!printer_status_as_string) {
      return false;
    }
    out.printer_status = extensions::api::printing::ParsePrinterStatus(*printer_status_as_string);
    if (out.printer_status == extensions::api::printing::PrinterStatus()) {
      return false;
    }
  }

  return true;
}

// static
bool PrintJobInfo::Populate(
    const base::Value& value, PrintJobInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PrintJobInfo> PrintJobInfo::FromValue(const base::Value::Dict& value) {
  PrintJobInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PrintJobInfo> PrintJobInfo::FromValue(const base::Value& value) {
  PrintJobInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PrintJobInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("title", this->title);

  to_value_result.Set("source", printing_metrics::ToString(this->source));

  if (this->source_id) {
    to_value_result.Set("sourceId", *this->source_id);

  }
  to_value_result.Set("status", printing_metrics::ToString(this->status));

  to_value_result.Set("creationTime", this->creation_time);

  to_value_result.Set("completionTime", this->completion_time);

  to_value_result.Set("printer", (this->printer).ToValue());

  to_value_result.Set("settings", (this->settings).ToValue());

  to_value_result.Set("numberOfPages", this->number_of_pages);

  to_value_result.Set("printer_status", printing::ToString(this->printer_status));


  return to_value_result;
}



//
// Functions
//

namespace GetPrintJobs {

base::Value::List Results::Create(const std::vector<PrintJobInfo>& jobs) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(jobs));

  return create_results;
}
}  // namespace GetPrintJobs

//
// Events
//

namespace OnPrintJobFinished {

const char kEventName[] = "printingMetrics.onPrintJobFinished";

base::Value::List Create(const PrintJobInfo& job_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((job_info).ToValue());

  return create_results;
}

}  // namespace OnPrintJobFinished

}  // namespace printing_metrics
}  // namespace api
}  // namespace extensions

