// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/accessibility_service_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/accessibility_service_private.h"

#include <memory>
#include <ostream>
#include <string>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"

using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace accessibility_service_private {
//
// Functions
//

namespace SpeakSelectedText {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SpeakSelectedText

//
// Events
//

namespace ClipboardCopyInActiveGoogleDoc {

const char kEventName[] = "accessibilityServicePrivate.clipboardCopyInActiveGoogleDoc";

base::Value::List Create(const std::string& url) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(url);

  return create_results;
}

}  // namespace ClipboardCopyInActiveGoogleDoc

}  // namespace accessibility_service_private
}  // namespace api
}  // namespace extensions

