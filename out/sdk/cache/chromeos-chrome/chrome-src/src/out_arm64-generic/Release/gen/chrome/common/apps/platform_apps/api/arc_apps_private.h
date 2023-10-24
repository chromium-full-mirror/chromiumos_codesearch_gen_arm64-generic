// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/apps/platform_apps/api/arc_apps_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_APPS_PLATFORM_APPS_API_ARC_APPS_PRIVATE_H__
#define CHROME_COMMON_APPS_PLATFORM_APPS_API_ARC_APPS_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace chrome_apps {
namespace api {
namespace arc_apps_private {

//
// Types
//

struct AppInfo {
  AppInfo();
  ~AppInfo();
  AppInfo(const AppInfo&) = delete;
  AppInfo& operator=(const AppInfo&) = delete;
  AppInfo(AppInfo&& rhs);
  AppInfo& operator=(AppInfo&& rhs);

  // Populates a AppInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, AppInfo& out);

  // Populates a AppInfo object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, AppInfo& out);

  // Creates a deep copy of AppInfo.
  AppInfo Clone() const;

  // Creates a AppInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<AppInfo> FromValueDeprecated(const base::Value& value);

  // Creates a AppInfo object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<AppInfo> FromValue(const base::Value::Dict& value);

  // Creates a AppInfo object from a base::Value, or nullopt on failure.
  static absl::optional<AppInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAppInfo object.
  base::Value::Dict ToValue() const;

  // The app package name.
  std::string package_name;

};


//
// Functions
//

namespace GetLaunchableApps {

namespace Results {

base::Value::List Create(const std::vector<AppInfo>& apps_info);
}  // namespace Results

}  // namespace GetLaunchableApps

namespace LaunchApp {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string package_name;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace LaunchApp

//
// Events
//

namespace OnInstalled {

extern const char kEventName[];  // "arcAppsPrivate.onInstalled"

base::Value::List Create(const AppInfo& app_info);
}  // namespace OnInstalled

}  // namespace arc_apps_private
}  // namespace api
}  // namespace chrome_apps

#endif  // CHROME_COMMON_APPS_PLATFORM_APPS_API_ARC_APPS_PRIVATE_H__
