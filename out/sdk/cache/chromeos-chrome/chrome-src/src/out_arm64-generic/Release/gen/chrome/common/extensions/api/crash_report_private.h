// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/crash_report_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_CRASH_REPORT_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_CRASH_REPORT_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace crash_report_private {

//
// Types
//

struct ErrorInfo {
  ErrorInfo();
  ~ErrorInfo();
  ErrorInfo(const ErrorInfo&) = delete;
  ErrorInfo& operator=(const ErrorInfo&) = delete;
  ErrorInfo(ErrorInfo&& rhs) noexcept;
  ErrorInfo& operator=(ErrorInfo&& rhs) noexcept;

  // Populates a ErrorInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ErrorInfo& out);

  // Populates a ErrorInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ErrorInfo& out);

  // Creates a deep copy of ErrorInfo.
  ErrorInfo Clone() const;

  // Creates a ErrorInfo object from a base::Value::Dict, or nullopt on failure.
  static std::optional<ErrorInfo> FromValue(const base::Value::Dict& value);

  // Creates a ErrorInfo object from a base::Value, or nullopt on failure.
  static std::optional<ErrorInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisErrorInfo object.
  base::Value::Dict ToValue() const;

  // The error message.
  std::string message;

  // URL where the error occurred. Must be the full URL, containing the protocol
  // (e.g. http://www.example.com).
  std::string url;

  // Name of the product where the error occurred. Defaults to the product variant
  // of Chrome that is hosting the extension. (e.g. "Chrome" or
  // "Chrome_ChromeOS").
  std::optional<std::string> product;

  // Version of the product where the error occurred. Defaults to the version of
  // Chrome that is hosting the extension (e.g. "73.0.3683.75").
  std::optional<std::string> version;

  // Line number where the error occurred.
  std::optional<int> line_number;

  // Column number where the error occurred.
  std::optional<int> column_number;

  // Used to map the obfuscated source code back to a source map. If present, must
  // match the debug_id used to upload the source map.
  std::optional<std::string> debug_id;

  // String containing the stack trace for the error. Defaults to the empty
  // string.
  std::optional<std::string> stack_trace;

};


//
// Functions
//

namespace ReportError {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Information about the error.
  ErrorInfo info;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ReportError

}  // namespace crash_report_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_CRASH_REPORT_PRIVATE_H__
