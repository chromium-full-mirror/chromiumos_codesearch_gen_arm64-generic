// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/system_log.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_SYSTEM_LOG_H__
#define CHROME_COMMON_EXTENSIONS_API_SYSTEM_LOG_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace system_log {

//
// Types
//

struct MessageOptions {
  MessageOptions();
  ~MessageOptions();
  MessageOptions(const MessageOptions&) = delete;
  MessageOptions& operator=(const MessageOptions&) = delete;
  MessageOptions(MessageOptions&& rhs);
  MessageOptions& operator=(MessageOptions&& rhs);

  // Populates a MessageOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MessageOptions& out);

  // Populates a MessageOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MessageOptions& out);

  // Creates a deep copy of MessageOptions.
  MessageOptions Clone() const;

  // Creates a MessageOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<MessageOptions> FromValueDeprecated(const base::Value& value);

  // Creates a MessageOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<MessageOptions> FromValue(const base::Value::Dict& value);

  // Creates a MessageOptions object from a base::Value, or nullopt on failure.
  static absl::optional<MessageOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMessageOptions object.
  base::Value::Dict ToValue() const;

  std::string message;

};


//
// Functions
//

namespace Add {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The logging options.
  MessageOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Add

}  // namespace system_log
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_SYSTEM_LOG_H__
