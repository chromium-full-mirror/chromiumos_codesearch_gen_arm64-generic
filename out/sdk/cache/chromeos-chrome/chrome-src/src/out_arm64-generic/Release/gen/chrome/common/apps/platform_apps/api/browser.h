// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/apps/platform_apps/api/browser.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_APPS_PLATFORM_APPS_API_BROWSER_H__
#define CHROME_COMMON_APPS_PLATFORM_APPS_API_BROWSER_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace chrome_apps {
namespace api {
namespace browser {

//
// Types
//

struct OpenTabOptions {
  OpenTabOptions();
  ~OpenTabOptions();
  OpenTabOptions(const OpenTabOptions&) = delete;
  OpenTabOptions& operator=(const OpenTabOptions&) = delete;
  OpenTabOptions(OpenTabOptions&& rhs) noexcept;
  OpenTabOptions& operator=(OpenTabOptions&& rhs) noexcept;

  // Populates a OpenTabOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OpenTabOptions& out);

  // Populates a OpenTabOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, OpenTabOptions& out);

  // Creates a deep copy of OpenTabOptions.
  OpenTabOptions Clone() const;

  // Creates a OpenTabOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<OpenTabOptions> FromValue(const base::Value::Dict& value);

  // Creates a OpenTabOptions object from a base::Value, or nullopt on failure.
  static std::optional<OpenTabOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOpenTabOptions object.
  base::Value::Dict ToValue() const;

  // The URL to navigate to when the new tab is initially opened.
  std::string url;

};


//
// Functions
//

namespace OpenTab {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Configures how the tab should be opened.
  OpenTabOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace OpenTab

}  // namespace browser
}  // namespace api
}  // namespace chrome_apps

#endif  // CHROME_COMMON_APPS_PLATFORM_APPS_API_BROWSER_H__
