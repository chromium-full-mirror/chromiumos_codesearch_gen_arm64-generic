// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/printer_provider.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_PRINTER_PROVIDER_H__
#define EXTENSIONS_COMMON_API_PRINTER_PROVIDER_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"
#include "extensions/common/api/usb.h"


namespace extensions {
namespace api {
namespace printer_provider {

//
// Types
//

// Error codes returned in response to $(ref:onPrintRequested) event.
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

struct PrinterInfo {
  PrinterInfo();
  ~PrinterInfo();
  PrinterInfo(const PrinterInfo&) = delete;
  PrinterInfo& operator=(const PrinterInfo&) = delete;
  PrinterInfo(PrinterInfo&& rhs) noexcept;
  PrinterInfo& operator=(PrinterInfo&& rhs) noexcept;

  // Populates a PrinterInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PrinterInfo& out);

  // Populates a PrinterInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, PrinterInfo& out);

  // Creates a deep copy of PrinterInfo.
  PrinterInfo Clone() const;

  // Creates a PrinterInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<PrinterInfo> FromValue(const base::Value::Dict& value);

  // Creates a PrinterInfo object from a base::Value, or nullopt on failure.
  static std::optional<PrinterInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPrinterInfo object.
  base::Value::Dict ToValue() const;

  // Unique printer ID.
  std::string id;

  // Printer's human readable name.
  std::string name;

  // Printer's human readable description.
  std::optional<std::string> description;

};

struct PrintJob {
  PrintJob();
  ~PrintJob();
  PrintJob(const PrintJob&) = delete;
  PrintJob& operator=(const PrintJob&) = delete;
  PrintJob(PrintJob&& rhs) noexcept;
  PrintJob& operator=(PrintJob&& rhs) noexcept;

  // Populates a PrintJob object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, PrintJob& out);

  // Populates a PrintJob object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, PrintJob& out);

  // Creates a deep copy of PrintJob.
  PrintJob Clone() const;

  // Creates a PrintJob object from a base::Value::Dict, or nullopt on failure.
  static std::optional<PrintJob> FromValue(const base::Value::Dict& value);

  // Creates a PrintJob object from a base::Value, or nullopt on failure.
  static std::optional<PrintJob> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPrintJob object.
  base::Value::Dict ToValue() const;

  // Print ticket in <a
  // href="https://developers.google.com/cloud-print/docs/cdd#cjt"> CJT
  // format</a>. <aside class="aside flow bg-state-info-bg color-state-info-text">
  // <div class="flow">The CJT reference is marked as deprecated. It is deprecated
  // for Google Cloud Print only. is not deprecated for ChromeOS printing. </div>
  // </aside>
  struct Ticket {
    Ticket();
    ~Ticket();
    Ticket(const Ticket&) = delete;
    Ticket& operator=(const Ticket&) = delete;
    Ticket(Ticket&& rhs) noexcept;
    Ticket& operator=(Ticket&& rhs) noexcept;

    // Populates a Ticket object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Ticket& out);

    // Populates a Ticket object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Ticket& out);

    // Creates a deep copy of Ticket.
    Ticket Clone() const;

    // Creates a Ticket object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Ticket> FromValue(const base::Value::Dict& value);

    // Creates a Ticket object from a base::Value, or nullopt on failure.
    static std::optional<Ticket> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisTicket object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };

  // Blob containing the document data to print. Format must match |contentType|.
  struct Document {
    Document();
    ~Document();
    Document(const Document&) = delete;
    Document& operator=(const Document&) = delete;
    Document(Document&& rhs) noexcept;
    Document& operator=(Document&& rhs) noexcept;

    // Populates a Document object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Document& out);

    // Populates a Document object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, Document& out);

    // Creates a deep copy of Document.
    Document Clone() const;

    // Creates a Document object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Document> FromValue(const base::Value::Dict& value);

    // Creates a Document object from a base::Value, or nullopt on failure.
    static std::optional<Document> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisDocument object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };


  // ID of the printer which should handle the job.
  std::string printer_id;

  // The print job title.
  std::string title;

  // Print ticket in <a
  // href="https://developers.google.com/cloud-print/docs/cdd#cjt"> CJT
  // format</a>. <aside class="aside flow bg-state-info-bg color-state-info-text">
  // <div class="flow">The CJT reference is marked as deprecated. It is deprecated
  // for Google Cloud Print only. is not deprecated for ChromeOS printing. </div>
  // </aside>
  Ticket ticket;

  // The document content type. Supported formats are
  // <code>"application/pdf"</code> and <code>"image/pwg-raster"</code>.
  std::string content_type;

  // Blob containing the document data to print. Format must match |contentType|.
  Document document;

};


//
// Events
//

namespace OnGetPrintersRequested {

extern const char kEventName[];  // "printerProvider.onGetPrintersRequested"

base::Value::List Create();
}  // namespace OnGetPrintersRequested

namespace OnGetUsbPrinterInfoRequested {

extern const char kEventName[];  // "printerProvider.onGetUsbPrinterInfoRequested"

// The USB device.
base::Value::List Create(const extensions::api::usb::Device& device);
}  // namespace OnGetUsbPrinterInfoRequested

namespace OnGetCapabilityRequested {

extern const char kEventName[];  // "printerProvider.onGetCapabilityRequested"

// Unique ID of the printer whose capabilities are requested.
base::Value::List Create(const std::string& printer_id);
}  // namespace OnGetCapabilityRequested

namespace OnPrintRequested {

extern const char kEventName[];  // "printerProvider.onPrintRequested"

// The printing request parameters.
base::Value::List Create(const PrintJob& print_job);
}  // namespace OnPrintRequested

}  // namespace printer_provider
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_PRINTER_PROVIDER_H__
