// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/printing_metrics.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_PRINTING_METRICS_H__
#define CHROME_COMMON_EXTENSIONS_API_PRINTING_METRICS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"
#include "chrome/common/extensions/api/printing.h"


namespace extensions {
namespace api {
namespace printing_metrics {

//
// Types
//

// The source of the print job.
enum class PrintJobSource {
  kNone = 0,
  kPrintPreview,
  kAndroidApp,
  kExtension,
  kIsolatedWebApp,
  kMaxValue = kIsolatedWebApp,
};


const char* ToString(PrintJobSource as_enum);
PrintJobSource ParsePrintJobSource(base::StringPiece as_string);
std::u16string GetPrintJobSourceParseError(base::StringPiece as_string);

// Specifies the final status of the print job.
enum class PrintJobStatus {
  kNone = 0,
  kFailed,
  kCanceled,
  kPrinted,
  kMaxValue = kPrinted,
};


const char* ToString(PrintJobStatus as_enum);
PrintJobStatus ParsePrintJobStatus(base::StringPiece as_string);
std::u16string GetPrintJobStatusParseError(base::StringPiece as_string);

// The source of the printer.
enum class PrinterSource {
  kNone = 0,
  kUser,
  kPolicy,
  kMaxValue = kPolicy,
};


const char* ToString(PrinterSource as_enum);
PrinterSource ParsePrinterSource(base::StringPiece as_string);
std::u16string GetPrinterSourceParseError(base::StringPiece as_string);

enum class ColorMode {
  kNone = 0,
  kBlackAndWhite,
  kColor,
  kMaxValue = kColor,
};


const char* ToString(ColorMode as_enum);
ColorMode ParseColorMode(base::StringPiece as_string);
std::u16string GetColorModeParseError(base::StringPiece as_string);

enum class DuplexMode {
  kNone = 0,
  kOneSided,
  kTwoSidedLongEdge,
  kTwoSidedShortEdge,
  kMaxValue = kTwoSidedShortEdge,
};


const char* ToString(DuplexMode as_enum);
DuplexMode ParseDuplexMode(base::StringPiece as_string);
std::u16string GetDuplexModeParseError(base::StringPiece as_string);

struct MediaSize {
  MediaSize();
  ~MediaSize();
  MediaSize(const MediaSize&) = delete;
  MediaSize& operator=(const MediaSize&) = delete;
  MediaSize(MediaSize&& rhs) noexcept;
  MediaSize& operator=(MediaSize&& rhs) noexcept;

  // Populates a MediaSize object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, MediaSize& out);

  // Populates a MediaSize object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, MediaSize& out);

  // Creates a deep copy of MediaSize.
  MediaSize Clone() const;

  // Creates a MediaSize object from a base::Value::Dict, or nullopt on failure.
  static std::optional<MediaSize> FromValue(const base::Value::Dict& value);

  // Creates a MediaSize object from a base::Value, or nullopt on failure.
  static std::optional<MediaSize> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMediaSize object.
  base::Value::Dict ToValue() const;

  // Width (in micrometers) of the media used for printing.
  int width;

  // Height (in micrometers) of the media used for printing.
  int height;

  // Vendor-provided ID, e.g. "iso_a3_297x420mm" or "na_index-3x5_3x5in". Possible
  // values are values of "media" IPP attribute and can be found on <a
  // href="https://www.iana.org/assignments/ipp-registrations/ipp-registrations.xhtml"> IANA page</a> .
  std::string vendor_id;

};

struct PrintSettings {
  PrintSettings();
  ~PrintSettings();
  PrintSettings(const PrintSettings&) = delete;
  PrintSettings& operator=(const PrintSettings&) = delete;
  PrintSettings(PrintSettings&& rhs) noexcept;
  PrintSettings& operator=(PrintSettings&& rhs) noexcept;

  // Populates a PrintSettings object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PrintSettings& out);

  // Populates a PrintSettings object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PrintSettings& out);

  // Creates a deep copy of PrintSettings.
  PrintSettings Clone() const;

  // Creates a PrintSettings object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<PrintSettings> FromValue(const base::Value::Dict& value);

  // Creates a PrintSettings object from a base::Value, or nullopt on failure.
  static std::optional<PrintSettings> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPrintSettings object.
  base::Value::Dict ToValue() const;

  // The requested color mode.
  ColorMode color;

  // The requested duplex mode.
  DuplexMode duplex;

  // The requested media size.
  MediaSize media_size;

  // The requested number of copies.
  int copies;

};

struct Printer {
  Printer();
  ~Printer();
  Printer(const Printer&) = delete;
  Printer& operator=(const Printer&) = delete;
  Printer(Printer&& rhs) noexcept;
  Printer& operator=(Printer&& rhs) noexcept;

  // Populates a Printer object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Printer& out);

  // Populates a Printer object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Printer& out);

  // Creates a deep copy of Printer.
  Printer Clone() const;

  // Creates a Printer object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Printer> FromValue(const base::Value::Dict& value);

  // Creates a Printer object from a base::Value, or nullopt on failure.
  static std::optional<Printer> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPrinter object.
  base::Value::Dict ToValue() const;

  // Displayed name of the printer.
  std::string name;

  // The full path for the printer. Contains protocol, hostname, port, and queue.
  std::string uri;

  // The source of the printer.
  PrinterSource source;

};

struct PrintJobInfo {
  PrintJobInfo();
  ~PrintJobInfo();
  PrintJobInfo(const PrintJobInfo&) = delete;
  PrintJobInfo& operator=(const PrintJobInfo&) = delete;
  PrintJobInfo(PrintJobInfo&& rhs) noexcept;
  PrintJobInfo& operator=(PrintJobInfo&& rhs) noexcept;

  // Populates a PrintJobInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PrintJobInfo& out);

  // Populates a PrintJobInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PrintJobInfo& out);

  // Creates a deep copy of PrintJobInfo.
  PrintJobInfo Clone() const;

  // Creates a PrintJobInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<PrintJobInfo> FromValue(const base::Value::Dict& value);

  // Creates a PrintJobInfo object from a base::Value, or nullopt on failure.
  static std::optional<PrintJobInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPrintJobInfo object.
  base::Value::Dict ToValue() const;

  // The ID of the job.
  std::string id;

  // The title of the document which was printed.
  std::string title;

  // Source showing who initiated the print job.
  PrintJobSource source;

  // ID of source. Null if source is PRINT_PREVIEW or ANDROID_APP.
  std::optional<std::string> source_id;

  // The final status of the job.
  PrintJobStatus status;

  // The job creation time (in milliseconds past the Unix epoch).
  double creation_time;

  // The job completion time (in milliseconds past the Unix epoch).
  double completion_time;

  // The info about the printer which printed the document.
  Printer printer;

  // The settings of the print job.
  PrintSettings settings;

  // The number of pages in the document.
  int number_of_pages;

  // The status of the printer.
  extensions::api::printing::PrinterStatus printer_status;

};


//
// Functions
//

namespace GetPrintJobs {

namespace Results {

base::Value::List Create(const std::vector<PrintJobInfo>& jobs);
}  // namespace Results

}  // namespace GetPrintJobs

//
// Events
//

namespace OnPrintJobFinished {

extern const char kEventName[];  // "printingMetrics.onPrintJobFinished"

base::Value::List Create(const PrintJobInfo& job_info);
}  // namespace OnPrintJobFinished

}  // namespace printing_metrics
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_PRINTING_METRICS_H__
