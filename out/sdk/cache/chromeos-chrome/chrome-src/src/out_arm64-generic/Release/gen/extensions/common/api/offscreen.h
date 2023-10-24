// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/offscreen.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_OFFSCREEN_H__
#define EXTENSIONS_COMMON_API_OFFSCREEN_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace offscreen {

//
// Types
//

enum class Reason {
  kNone = 0,
  kTesting,
  kAudioPlayback,
  kIframeScripting,
  kDomScraping,
  kBlobs,
  kDomParser,
  kUserMedia,
  kDisplayMedia,
  kWebRtc,
  kClipboard,
  kLocalStorage,
  kWorkers,
  kBatteryStatus,
  kMatchMedia,
  kGeolocation,
  kMaxValue = kGeolocation,
};


const char* ToString(Reason as_enum);
Reason ParseReason(base::StringPiece as_string);
std::u16string GetReasonParseError(base::StringPiece as_string);

struct CreateParameters {
  CreateParameters();
  ~CreateParameters();
  CreateParameters(const CreateParameters&) = delete;
  CreateParameters& operator=(const CreateParameters&) = delete;
  CreateParameters(CreateParameters&& rhs);
  CreateParameters& operator=(CreateParameters&& rhs);

  // Populates a CreateParameters object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CreateParameters& out);

  // Populates a CreateParameters object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CreateParameters& out);

  // Creates a deep copy of CreateParameters.
  CreateParameters Clone() const;

  // Creates a CreateParameters object from a base::Value, or NULL on failure.
  static std::unique_ptr<CreateParameters> FromValueDeprecated(const base::Value& value);

  // Creates a CreateParameters object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<CreateParameters> FromValue(const base::Value::Dict& value);

  // Creates a CreateParameters object from a base::Value, or nullopt on
  // failure.
  static absl::optional<CreateParameters> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCreateParameters object.
  base::Value::Dict ToValue() const;

  // The reason(s) the extension is creating the offscreen document.
  std::vector<Reason> reasons;

  // The (relative) URL to load in the document.
  std::string url;

  // A developer-provided string that explains, in more detail, the need for the
  // background context. The user agent _may_ use this in display to the user.
  std::string justification;

};


//
// Functions
//

namespace CreateDocument {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The parameters describing the offscreen document to create.
  CreateParameters parameters;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace CreateDocument

namespace CloseDocument {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace CloseDocument

namespace HasDocument {

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace HasDocument

}  // namespace offscreen
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_OFFSCREEN_H__
