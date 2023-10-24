// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/permissions.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_PERMISSIONS_H__
#define CHROME_COMMON_EXTENSIONS_API_PERMISSIONS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace permissions {

//
// Types
//

struct Permissions {
  Permissions();
  ~Permissions();
  Permissions(const Permissions&) = delete;
  Permissions& operator=(const Permissions&) = delete;
  Permissions(Permissions&& rhs);
  Permissions& operator=(Permissions&& rhs);

  // Populates a Permissions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Permissions& out);

  // Populates a Permissions object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Permissions& out);

  // Creates a deep copy of Permissions.
  Permissions Clone() const;

  // Creates a Permissions object from a base::Value, or NULL on failure.
  static std::unique_ptr<Permissions> FromValueDeprecated(const base::Value& value);

  // Creates a Permissions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<Permissions> FromValue(const base::Value::Dict& value);

  // Creates a Permissions object from a base::Value, or nullopt on failure.
  static absl::optional<Permissions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPermissions object.
  base::Value::Dict ToValue() const;

  // List of named permissions (does not include hosts or origins).
  absl::optional<std::vector<std::string>> permissions;

  // The list of host permissions, including those specified in the
  // <code>optional_permissions</code> or <code>permissions</code> keys in the
  // manifest, and those associated with <a href='content_scripts'>Content
  // Scripts</a>.
  absl::optional<std::vector<std::string>> origins;

};


//
// Functions
//

namespace GetAll {

namespace Results {

// The extension's active permissions. Note that the <code>origins</code>
// property will contain granted origins from those specified in the
// <code>permissions</code> and <code>optional_permissions</code> keys in the
// manifest and those associated with <a href='content_scripts'>Content
// Scripts</a>.
base::Value::List Create(const Permissions& permissions);
}  // namespace Results

}  // namespace GetAll

namespace Contains {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  Permissions permissions;


 private:
  Params();
};

namespace Results {

// True if the extension has the specified permissions. If an origin is
// specified as both an optional permission and a content script match pattern,
// this will return <code>false</code> unless both permissions are granted.
base::Value::List Create(bool result);
}  // namespace Results

}  // namespace Contains

namespace Request {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  Permissions permissions;


 private:
  Params();
};

namespace Results {

// True if the user granted the specified permissions.
base::Value::List Create(bool granted);
}  // namespace Results

}  // namespace Request

namespace Remove {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  Permissions permissions;


 private:
  Params();
};

namespace Results {

// True if the permissions were removed.
base::Value::List Create(bool removed);
}  // namespace Results

}  // namespace Remove

//
// Events
//

namespace OnAdded {

extern const char kEventName[];  // "permissions.onAdded"

// The newly acquired permissions.
base::Value::List Create(const Permissions& permissions);
}  // namespace OnAdded

namespace OnRemoved {

extern const char kEventName[];  // "permissions.onRemoved"

// The permissions that have been removed.
base::Value::List Create(const Permissions& permissions);
}  // namespace OnRemoved

}  // namespace permissions
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_PERMISSIONS_H__
