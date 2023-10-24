// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/pdf_viewer_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_PDF_VIEWER_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_PDF_VIEWER_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace pdf_viewer_private {

//
// Functions
//

namespace IsAllowedLocalFileAccess {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string url;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace IsAllowedLocalFileAccess

namespace IsPdfOcrAlwaysActive {

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace IsPdfOcrAlwaysActive

namespace SetPdfOcrPref {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The new value of the pref.
  bool value;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace SetPdfOcrPref

//
// Events
//

namespace OnPdfOcrPrefChanged {

extern const char kEventName[];  // "pdfViewerPrivate.onPdfOcrPrefChanged"

base::Value::List Create(bool value);
}  // namespace OnPdfOcrPrefChanged

}  // namespace pdf_viewer_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_PDF_VIEWER_PRIVATE_H__
