// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/system_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/system_private.h"

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
#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace system_private {
//
// Types
//

const char* ToString(UpdateStatusState enum_param) {
  switch (enum_param) {
    case UPDATE_STATUS_STATE_NOTAVAILABLE:
      return "NotAvailable";
    case UPDATE_STATUS_STATE_UPDATING:
      return "Updating";
    case UPDATE_STATUS_STATE_NEEDRESTART:
      return "NeedRestart";
    case UPDATE_STATUS_STATE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

UpdateStatusState ParseUpdateStatusState(base::StringPiece enum_string) {
  if (enum_string == "NotAvailable")
    return UPDATE_STATUS_STATE_NOTAVAILABLE;
  if (enum_string == "Updating")
    return UPDATE_STATUS_STATE_UPDATING;
  if (enum_string == "NeedRestart")
    return UPDATE_STATUS_STATE_NEEDRESTART;
  return UPDATE_STATUS_STATE_NONE;
}

std::u16string GetUpdateStatusStateParseError(base::StringPiece enum_string) {
  return u"expected \"NotAvailable\" or \"Updating\" or \"NeedRestart\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(GetIncognitoModeAvailabilityValue enum_param) {
  switch (enum_param) {
    case GET_INCOGNITO_MODE_AVAILABILITY_VALUE_ENABLED:
      return "enabled";
    case GET_INCOGNITO_MODE_AVAILABILITY_VALUE_DISABLED:
      return "disabled";
    case GET_INCOGNITO_MODE_AVAILABILITY_VALUE_FORCED:
      return "forced";
    case GET_INCOGNITO_MODE_AVAILABILITY_VALUE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

GetIncognitoModeAvailabilityValue ParseGetIncognitoModeAvailabilityValue(base::StringPiece enum_string) {
  if (enum_string == "enabled")
    return GET_INCOGNITO_MODE_AVAILABILITY_VALUE_ENABLED;
  if (enum_string == "disabled")
    return GET_INCOGNITO_MODE_AVAILABILITY_VALUE_DISABLED;
  if (enum_string == "forced")
    return GET_INCOGNITO_MODE_AVAILABILITY_VALUE_FORCED;
  return GET_INCOGNITO_MODE_AVAILABILITY_VALUE_NONE;
}

std::u16string GetGetIncognitoModeAvailabilityValueParseError(base::StringPiece enum_string) {
  return u"expected \"enabled\" or \"disabled\" or \"forced\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


UpdateStatus::UpdateStatus()
: state(),
download_progress(0.0) {}

UpdateStatus::~UpdateStatus() = default;
UpdateStatus::UpdateStatus(UpdateStatus&& rhs) = default;
UpdateStatus& UpdateStatus::operator=(UpdateStatus&& rhs) = default;
UpdateStatus UpdateStatus::Clone() const {
  UpdateStatus out;
  out.state = state;
  out.download_progress = download_progress;
  return out;
}

// static
bool UpdateStatus::Populate(
    const base::Value::Dict& dict, UpdateStatus& out) {
  const base::Value* state_value = dict.Find("state");
  if (!state_value) {
    return false;
  }
  {
    const std::string* update_status_state_as_string = (*state_value).GetIfString();
    if (!update_status_state_as_string) {
      return false;
    }
    out.state = ParseUpdateStatusState(*update_status_state_as_string);
    if (out.state == UpdateStatusState()) {
      return false;
    }
  }

  const base::Value* download_progress_value = dict.Find("downloadProgress");
  if (!download_progress_value) {
    return false;
  }
  {
    auto temp = (*download_progress_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.download_progress = *temp;
  }

  return true;
}

// static
bool UpdateStatus::Populate(
    const base::Value& value, UpdateStatus& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<UpdateStatus> UpdateStatus::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<UpdateStatus>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<UpdateStatus> UpdateStatus::FromValue(const base::Value::Dict& value) {
  UpdateStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<UpdateStatus> UpdateStatus::FromValue(const base::Value& value) {
  UpdateStatus out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict UpdateStatus::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("state", system_private::ToString(this->state));

  to_value_result.Set("downloadProgress", this->download_progress);


  return to_value_result;
}



//
// Functions
//

namespace GetIncognitoModeAvailability {

base::Value::List Results::Create(const GetIncognitoModeAvailabilityValue& value) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(system_private::ToString(value));

  return create_results;
}
}  // namespace GetIncognitoModeAvailability

namespace GetUpdateStatus {

base::Value::List Results::Create(const UpdateStatus& status) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((status).ToValue());

  return create_results;
}
}  // namespace GetUpdateStatus

namespace GetApiKey {

base::Value::List Results::Create(const std::string& key) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(key);

  return create_results;
}
}  // namespace GetApiKey

}  // namespace system_private
}  // namespace api
}  // namespace extensions

