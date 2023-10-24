// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/accessibility_service_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_ACCESSIBILITY_SERVICE_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_ACCESSIBILITY_SERVICE_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace accessibility_service_private {

//
// Functions
//

namespace SpeakSelectedText {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SpeakSelectedText

//
// Events
//

namespace ClipboardCopyInActiveGoogleDoc {

extern const char kEventName[];  // "accessibilityServicePrivate.clipboardCopyInActiveGoogleDoc"

base::Value::List Create(const std::string& url);
}  // namespace ClipboardCopyInActiveGoogleDoc

}  // namespace accessibility_service_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_ACCESSIBILITY_SERVICE_PRIVATE_H__
