// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/image_loader_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_IMAGE_LOADER_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_IMAGE_LOADER_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace image_loader_private {

//
// Functions
//

namespace GetDriveThumbnail {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string url;

  bool crop_to_square;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& thumbnail_data_url);
}  // namespace Results

}  // namespace GetDriveThumbnail

namespace GetPdfThumbnail {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string url;

  int width;

  int height;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& thumbnail_data_url);
}  // namespace Results

}  // namespace GetPdfThumbnail

namespace GetArcDocumentsProviderThumbnail {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string url;

  int width_hint;

  int height_hint;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& thumbnail_data_url);
}  // namespace Results

}  // namespace GetArcDocumentsProviderThumbnail

}  // namespace image_loader_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_IMAGE_LOADER_PRIVATE_H__
