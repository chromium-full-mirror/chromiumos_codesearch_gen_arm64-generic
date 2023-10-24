// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/dns.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_DNS_H__
#define EXTENSIONS_COMMON_API_DNS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace dns {

//
// Types
//

struct ResolveCallbackResolveInfo {
  ResolveCallbackResolveInfo();
  ~ResolveCallbackResolveInfo();
  ResolveCallbackResolveInfo(const ResolveCallbackResolveInfo&) = delete;
  ResolveCallbackResolveInfo& operator=(const ResolveCallbackResolveInfo&) = delete;
  ResolveCallbackResolveInfo(ResolveCallbackResolveInfo&& rhs);
  ResolveCallbackResolveInfo& operator=(ResolveCallbackResolveInfo&& rhs);

  // Populates a ResolveCallbackResolveInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ResolveCallbackResolveInfo& out);

  // Populates a ResolveCallbackResolveInfo object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ResolveCallbackResolveInfo& out);

  // Creates a deep copy of ResolveCallbackResolveInfo.
  ResolveCallbackResolveInfo Clone() const;

  // Creates a ResolveCallbackResolveInfo object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ResolveCallbackResolveInfo> FromValueDeprecated(const base::Value& value);

  // Creates a ResolveCallbackResolveInfo object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<ResolveCallbackResolveInfo> FromValue(const base::Value::Dict& value);

  // Creates a ResolveCallbackResolveInfo object from a base::Value, or nullopt
  // on failure.
  static absl::optional<ResolveCallbackResolveInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisResolveCallbackResolveInfo object.
  base::Value::Dict ToValue() const;

  // The result code. Zero indicates success.
  int result_code;

  // A string representing the IP address literal. Supplied only if resultCode
  // indicates success.
  absl::optional<std::string> address;

};


//
// Functions
//

namespace Resolve {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The hostname to resolve.
  std::string hostname;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ResolveCallbackResolveInfo& resolve_info);
}  // namespace Results

}  // namespace Resolve

}  // namespace dns
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_DNS_H__
