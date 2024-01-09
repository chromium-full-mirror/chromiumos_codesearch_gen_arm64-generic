// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/system_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_SYSTEM_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_SYSTEM_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace system_private {

//
// Types
//

// State of system update.  NotAvailable when there is no available update or
// the update system is in error state, Updating when a system update is in
// progress, NeedRestart when a system update is finished and restart is needed.
enum class UpdateStatusState {
  kNone = 0,
  kNotAvailable,
  kUpdating,
  kNeedRestart,
  kMaxValue = kNeedRestart,
};


const char* ToString(UpdateStatusState as_enum);
UpdateStatusState ParseUpdateStatusState(base::StringPiece as_string);
std::u16string GetUpdateStatusStateParseError(base::StringPiece as_string);

// Exposes whether the incognito mode is available to windows. One of 'enabled',
// 'disabled' (user cannot browse pages in Incognito mode), 'forced' (all
// pages/sessions are forced into Incognito mode).
enum class GetIncognitoModeAvailabilityValue {
  kNone = 0,
  kEnabled,
  kDisabled,
  kForced,
  kMaxValue = kForced,
};


const char* ToString(GetIncognitoModeAvailabilityValue as_enum);
GetIncognitoModeAvailabilityValue ParseGetIncognitoModeAvailabilityValue(base::StringPiece as_string);
std::u16string GetGetIncognitoModeAvailabilityValueParseError(base::StringPiece as_string);

// Information about the system update.
struct UpdateStatus {
  UpdateStatus();
  ~UpdateStatus();
  UpdateStatus(const UpdateStatus&) = delete;
  UpdateStatus& operator=(const UpdateStatus&) = delete;
  UpdateStatus(UpdateStatus&& rhs) noexcept;
  UpdateStatus& operator=(UpdateStatus&& rhs) noexcept;

  // Populates a UpdateStatus object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UpdateStatus& out);

  // Populates a UpdateStatus object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, UpdateStatus& out);

  // Creates a deep copy of UpdateStatus.
  UpdateStatus Clone() const;

  // Creates a UpdateStatus object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<UpdateStatus> FromValue(const base::Value::Dict& value);

  // Creates a UpdateStatus object from a base::Value, or nullopt on failure.
  static std::optional<UpdateStatus> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUpdateStatus object.
  base::Value::Dict ToValue() const;

  // State of system update.
  UpdateStatusState state;

  // Value between 0 and 1 describing the progress of system update download.
  // This value will be set to 0 when |state| is NotAvailable, 1 when NeedRestart.
  double download_progress;

};


//
// Functions
//

namespace GetIncognitoModeAvailability {

namespace Results {

base::Value::List Create(const GetIncognitoModeAvailabilityValue& value);
}  // namespace Results

}  // namespace GetIncognitoModeAvailability

namespace GetUpdateStatus {

namespace Results {

// Details of the system update
base::Value::List Create(const UpdateStatus& status);
}  // namespace Results

}  // namespace GetUpdateStatus

namespace GetApiKey {

namespace Results {

// The API key.
base::Value::List Create(const std::string& key);
}  // namespace Results

}  // namespace GetApiKey

}  // namespace system_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_SYSTEM_PRIVATE_H__
