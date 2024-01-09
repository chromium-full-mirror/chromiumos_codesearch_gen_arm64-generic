// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/dashboard_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_DASHBOARD_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_DASHBOARD_PRIVATE_H__

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
namespace dashboard_private {

//
// Types
//

// Whether the API call succeeded, or the reason for failure.
enum class Result {
  kNone = 0,
  kEmptyString,
  kUnknownError,
  kUserCancelled,
  kInvalidId,
  kManifestError,
  kIconError,
  kInvalidIconUrl,
  kMaxValue = kInvalidIconUrl,
};


const char* ToString(Result as_enum);
Result ParseResult(base::StringPiece as_string);
std::u16string GetResultParseError(base::StringPiece as_string);


//
// Functions
//

namespace ShowPermissionPromptForDelegatedInstall {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

    // The id of the extension to be installled.
    std::string id;

    // A string with the contents of the extension's manifest.json file. During the
    // install process, the browser will check that the downloaded extension's
    // manifest matches what was passed in here.
    std::string manifest;

    // The display name of the user for whom the extension should be installed.
    std::string delegated_user;

    std::optional<std::string> icon_url;

    // A string to use instead of the raw value of the 'name' key from
    // manifest.json.
    std::optional<std::string> localized_name;

  };


  Details details;


 private:
  Params();
};

namespace Results {

// A string result code, which will be empty upon success. The possible values
// in the case of errors include 'unknown_error', 'user_cancelled',
// 'manifest_error', 'icon_error', 'invalid_id', and 'invalid_icon_url'.
base::Value::List Create(const Result& result);
}  // namespace Results

}  // namespace ShowPermissionPromptForDelegatedInstall

}  // namespace dashboard_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_DASHBOARD_PRIVATE_H__
