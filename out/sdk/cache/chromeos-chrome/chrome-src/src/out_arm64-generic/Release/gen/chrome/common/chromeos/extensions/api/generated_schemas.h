// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITIONS IN
//   chrome/common/chromeos/extensions/api
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_CHROMEOS_EXTENSIONS_API_GENERATED_SCHEMAS_H__
#define CHROME_COMMON_CHROMEOS_EXTENSIONS_API_GENERATED_SCHEMAS_H__

#include "base/strings/string_piece.h"

namespace chromeos {
namespace api {

class ChromeOSGeneratedSchemas {
 public:
  // Determines if schema named |name| is generated.
  static bool IsGenerated(base::StringPiece name);

  // Gets the API schema named |name|.
  static base::StringPiece Get(base::StringPiece name);
};

}  // namespace api
}  // namespace chromeos

#endif  // CHROME_COMMON_CHROMEOS_EXTENSIONS_API_GENERATED_SCHEMAS_H__
