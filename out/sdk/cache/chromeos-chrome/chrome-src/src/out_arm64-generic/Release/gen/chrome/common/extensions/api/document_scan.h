// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/document_scan.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_DOCUMENT_SCAN_H__
#define CHROME_COMMON_EXTENSIONS_API_DOCUMENT_SCAN_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace document_scan {

//
// Types
//

struct ScanOptions {
  ScanOptions();
  ~ScanOptions();
  ScanOptions(const ScanOptions&) = delete;
  ScanOptions& operator=(const ScanOptions&) = delete;
  ScanOptions(ScanOptions&& rhs);
  ScanOptions& operator=(ScanOptions&& rhs);

  // Populates a ScanOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ScanOptions& out);

  // Populates a ScanOptions object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ScanOptions& out);

  // Creates a deep copy of ScanOptions.
  ScanOptions Clone() const;

  // Creates a ScanOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<ScanOptions> FromValueDeprecated(const base::Value& value);

  // Creates a ScanOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ScanOptions> FromValue(const base::Value::Dict& value);

  // Creates a ScanOptions object from a base::Value, or nullopt on failure.
  static absl::optional<ScanOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisScanOptions object.
  base::Value::Dict ToValue() const;

  // The MIME types that are accepted by the caller.
  absl::optional<std::vector<std::string>> mime_types;

  // The number of scanned images allowed (defaults to 1).
  absl::optional<int> max_images;

};

struct ScanResults {
  ScanResults();
  ~ScanResults();
  ScanResults(const ScanResults&) = delete;
  ScanResults& operator=(const ScanResults&) = delete;
  ScanResults(ScanResults&& rhs);
  ScanResults& operator=(ScanResults&& rhs);

  // Populates a ScanResults object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ScanResults& out);

  // Populates a ScanResults object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ScanResults& out);

  // Creates a deep copy of ScanResults.
  ScanResults Clone() const;

  // Creates a ScanResults object from a base::Value, or NULL on failure.
  static std::unique_ptr<ScanResults> FromValueDeprecated(const base::Value& value);

  // Creates a ScanResults object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ScanResults> FromValue(const base::Value::Dict& value);

  // Creates a ScanResults object from a base::Value, or nullopt on failure.
  static absl::optional<ScanResults> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisScanResults object.
  base::Value::Dict ToValue() const;

  // The data image URLs in a form that can be passed as the "src" value to an
  // image tag.
  std::vector<std::string> data_urls;

  // The MIME type of <code>dataUrls</code>.
  std::string mime_type;

};


//
// Functions
//

namespace Scan {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Object containing scan parameters.
  ScanOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ScanResults& result);
}  // namespace Results

}  // namespace Scan

}  // namespace document_scan
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_DOCUMENT_SCAN_H__
