// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/resources_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_RESOURCES_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_RESOURCES_PRIVATE_H__

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
namespace resources_private {

//
// Types
//

enum class Component {
  kNone = 0,
  kIdentity,
  kPdf,
  kMaxValue = kPdf,
};


const char* ToString(Component as_enum);
Component ParseComponent(base::StringPiece as_string);
std::u16string GetComponentParseError(base::StringPiece as_string);


//
// Functions
//

namespace GetStrings {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Internal Chrome component to get strings for.
  Component component;


 private:
  Params();
};

namespace Results {

struct Result {
  Result();
  ~Result();
  Result(const Result&) = delete;
  Result& operator=(const Result&) = delete;
  Result(Result&& rhs) noexcept;
  Result& operator=(Result&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisResult object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


base::Value::List Create(const Result& result);
}  // namespace Results

}  // namespace GetStrings

}  // namespace resources_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_RESOURCES_PRIVATE_H__
