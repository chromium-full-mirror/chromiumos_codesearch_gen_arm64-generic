// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/printer_provider_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_PRINTER_PROVIDER_INTERNAL_H__
#define EXTENSIONS_COMMON_API_PRINTER_PROVIDER_INTERNAL_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"
#include "extensions/common/api/printer_provider.h"


namespace extensions {
namespace api {
namespace printer_provider_internal {

//
// Types
//

// Same as in printerProvider.PrintError enum API.
enum class PrintError {
  kNone = 0,
  kOk,
  kFailed,
  kInvalidTicket,
  kInvalidData,
  kMaxValue = kInvalidData,
};


const char* ToString(PrintError as_enum);
PrintError ParsePrintError(base::StringPiece as_string);
std::u16string GetPrintErrorParseError(base::StringPiece as_string);


//
// Functions
//

namespace ReportPrinters {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Parameter identifying the event instance for which the     callback is run.
  int request_id;

  // List of printers reported by the extension.
  absl::optional<std::vector<extensions::api::printer_provider::PrinterInfo>> printers;


 private:
  Params();
};

}  // namespace ReportPrinters

namespace ReportUsbPrinterInfo {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Parameter identifying the event instance for which the     callback is run.
  int request_id;

  // Printer information reported by the extension.
  absl::optional<extensions::api::printer_provider::PrinterInfo> printer_info;


 private:
  Params();
};

}  // namespace ReportUsbPrinterInfo

namespace ReportPrinterCapability {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct Capability {
    Capability();
    ~Capability();
    Capability(const Capability&) = delete;
    Capability& operator=(const Capability&) = delete;
    Capability(Capability&& rhs);
    Capability& operator=(Capability&& rhs);

    // Populates a Capability object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Capability& out);

    // Populates a Capability object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, Capability& out);

    // Creates a deep copy of Capability.
    Capability Clone() const;

    // Creates a Capability object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<Capability> FromValue(const base::Value::Dict& value);

    // Creates a Capability object from a base::Value, or nullopt on failure.
    static absl::optional<Capability> FromValue(const base::Value& value);

    base::Value::Dict additional_properties;
  };


  int request_id;

  absl::optional<Capability> capability;


 private:
  Params();
};

}  // namespace ReportPrinterCapability

namespace ReportPrintResult {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int request_id;

  // The requested print job result.
  PrintError error;


 private:
  Params();
};

}  // namespace ReportPrintResult

namespace GetPrintData {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The request id for the print request for which data is     needed.
  int request_id;


 private:
  Params();
};

namespace Results {

struct Blob {
  Blob();
  ~Blob();
  Blob(const Blob&) = delete;
  Blob& operator=(const Blob&) = delete;
  Blob(Blob&& rhs);
  Blob& operator=(Blob&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisBlob object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


base::Value::List Create(const Blob& blob);
}  // namespace Results

}  // namespace GetPrintData

}  // namespace printer_provider_internal
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_PRINTER_PROVIDER_INTERNAL_H__
