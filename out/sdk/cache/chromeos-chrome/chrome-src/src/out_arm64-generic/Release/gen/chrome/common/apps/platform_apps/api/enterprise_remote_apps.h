// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/apps/platform_apps/api/enterprise_remote_apps.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_APPS_PLATFORM_APPS_API_ENTERPRISE_REMOTE_APPS_H__
#define CHROME_COMMON_APPS_PLATFORM_APPS_API_ENTERPRISE_REMOTE_APPS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace chrome_apps {
namespace api {
namespace enterprise_remote_apps {

//
// Types
//

struct AddFolderOptions {
  AddFolderOptions();
  ~AddFolderOptions();
  AddFolderOptions(const AddFolderOptions&) = delete;
  AddFolderOptions& operator=(const AddFolderOptions&) = delete;
  AddFolderOptions(AddFolderOptions&& rhs);
  AddFolderOptions& operator=(AddFolderOptions&& rhs);

  // Populates a AddFolderOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AddFolderOptions& out);

  // Populates a AddFolderOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AddFolderOptions& out);

  // Creates a deep copy of AddFolderOptions.
  AddFolderOptions Clone() const;

  // Creates a AddFolderOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<AddFolderOptions> FromValueDeprecated(const base::Value& value);

  // Creates a AddFolderOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<AddFolderOptions> FromValue(const base::Value::Dict& value);

  // Creates a AddFolderOptions object from a base::Value, or nullopt on
  // failure.
  static absl::optional<AddFolderOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAddFolderOptions object.
  base::Value::Dict ToValue() const;

  std::string name;

  absl::optional<bool> add_to_front;

};

struct AddAppOptions {
  AddAppOptions();
  ~AddAppOptions();
  AddAppOptions(const AddAppOptions&) = delete;
  AddAppOptions& operator=(const AddAppOptions&) = delete;
  AddAppOptions(AddAppOptions&& rhs);
  AddAppOptions& operator=(AddAppOptions&& rhs);

  // Populates a AddAppOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AddAppOptions& out);

  // Populates a AddAppOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AddAppOptions& out);

  // Creates a deep copy of AddAppOptions.
  AddAppOptions Clone() const;

  // Creates a AddAppOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<AddAppOptions> FromValueDeprecated(const base::Value& value);

  // Creates a AddAppOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<AddAppOptions> FromValue(const base::Value::Dict& value);

  // Creates a AddAppOptions object from a base::Value, or nullopt on failure.
  static absl::optional<AddAppOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAddAppOptions object.
  base::Value::Dict ToValue() const;

  std::string name;

  absl::optional<bool> add_to_front;

  absl::optional<std::string> folder_id;

  absl::optional<std::string> icon_url;

};

// Possible sort order positions for $(ref:sortLauncher).
enum class RemoteAppsPosition {
  kNone = 0,
  kRemoteAppsFirst,
  kMaxValue = kRemoteAppsFirst,
};


const char* ToString(RemoteAppsPosition as_enum);
RemoteAppsPosition ParseRemoteAppsPosition(base::StringPiece as_string);
std::u16string GetRemoteAppsPositionParseError(base::StringPiece as_string);

struct SortLauncherOptions {
  SortLauncherOptions();
  ~SortLauncherOptions();
  SortLauncherOptions(const SortLauncherOptions&) = delete;
  SortLauncherOptions& operator=(const SortLauncherOptions&) = delete;
  SortLauncherOptions(SortLauncherOptions&& rhs);
  SortLauncherOptions& operator=(SortLauncherOptions&& rhs);

  // Populates a SortLauncherOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SortLauncherOptions& out);

  // Populates a SortLauncherOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SortLauncherOptions& out);

  // Creates a deep copy of SortLauncherOptions.
  SortLauncherOptions Clone() const;

  // Creates a SortLauncherOptions object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<SortLauncherOptions> FromValueDeprecated(const base::Value& value);

  // Creates a SortLauncherOptions object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<SortLauncherOptions> FromValue(const base::Value::Dict& value);

  // Creates a SortLauncherOptions object from a base::Value, or nullopt on
  // failure.
  static absl::optional<SortLauncherOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSortLauncherOptions object.
  base::Value::Dict ToValue() const;

  RemoteAppsPosition position;

};


//
// Functions
//

namespace AddFolder {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  AddFolderOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& result);
}  // namespace Results

}  // namespace AddFolder

namespace AddApp {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  AddAppOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& result);
}  // namespace Results

}  // namespace AddApp

namespace DeleteApp {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string app_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace DeleteApp

namespace SortLauncher {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  SortLauncherOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SortLauncher

namespace SetPinnedApps {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::vector<std::string> app_ids;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetPinnedApps

//
// Events
//

namespace OnRemoteAppLaunched {

extern const char kEventName[];  // "enterprise.remoteApps.onRemoteAppLaunched"

base::Value::List Create(const std::string& app_id);
}  // namespace OnRemoteAppLaunched

}  // namespace enterprise_remote_apps
}  // namespace api
}  // namespace chrome_apps

#endif  // CHROME_COMMON_APPS_PLATFORM_APPS_API_ENTERPRISE_REMOTE_APPS_H__
