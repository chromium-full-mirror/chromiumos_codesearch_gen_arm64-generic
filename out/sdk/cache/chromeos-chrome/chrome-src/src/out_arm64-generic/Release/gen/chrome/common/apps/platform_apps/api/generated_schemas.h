// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITIONS IN
//   chrome/common/apps/platform_apps/api
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_APPS_PLATFORM_APPS_API_GENERATED_SCHEMAS_H__
#define CHROME_COMMON_APPS_PLATFORM_APPS_API_GENERATED_SCHEMAS_H__

#include "base/strings/string_piece.h"

namespace chrome_apps {
namespace api {

class ChromeAppsGeneratedSchemas {
 public:
  // Determines if schema named |name| is generated.
  static bool IsGenerated(base::StringPiece name);

  // Gets the API schema named |name|.
  static base::StringPiece Get(base::StringPiece name);
};

}  // namespace api
}  // namespace chrome_apps

#endif  // CHROME_COMMON_APPS_PLATFORM_APPS_API_GENERATED_SCHEMAS_H__
