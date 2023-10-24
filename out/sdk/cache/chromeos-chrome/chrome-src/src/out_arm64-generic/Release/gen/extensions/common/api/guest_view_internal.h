// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/guest_view_internal.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_GUEST_VIEW_INTERNAL_H__
#define EXTENSIONS_COMMON_API_GUEST_VIEW_INTERNAL_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace guest_view_internal {

//
// Types
//

struct Size {
  Size();
  ~Size();
  Size(const Size&) = delete;
  Size& operator=(const Size&) = delete;
  Size(Size&& rhs);
  Size& operator=(Size&& rhs);

  // Populates a Size object from a base::Value& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value& value, Size& out);

  // Populates a Size object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Size& out);

  // Creates a deep copy of Size.
  Size Clone() const;

  // Creates a Size object from a base::Value, or NULL on failure.
  static std::unique_ptr<Size> FromValueDeprecated(const base::Value& value);

  // Creates a Size object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<Size> FromValue(const base::Value::Dict& value);

  // Creates a Size object from a base::Value, or nullopt on failure.
  static absl::optional<Size> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSize object.
  base::Value::Dict ToValue() const;

  int width;

  int height;

};

// Size parameters.
struct SizeParams {
  SizeParams();
  ~SizeParams();
  SizeParams(const SizeParams&) = delete;
  SizeParams& operator=(const SizeParams&) = delete;
  SizeParams(SizeParams&& rhs);
  SizeParams& operator=(SizeParams&& rhs);

  // Populates a SizeParams object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, SizeParams& out);

  // Populates a SizeParams object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, SizeParams& out);

  // Creates a deep copy of SizeParams.
  SizeParams Clone() const;

  // Creates a SizeParams object from a base::Value, or NULL on failure.
  static std::unique_ptr<SizeParams> FromValueDeprecated(const base::Value& value);

  // Creates a SizeParams object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<SizeParams> FromValue(const base::Value::Dict& value);

  // Creates a SizeParams object from a base::Value, or nullopt on failure.
  static absl::optional<SizeParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSizeParams object.
  base::Value::Dict ToValue() const;

  absl::optional<bool> enable_auto_size;

  absl::optional<Size> min;

  absl::optional<Size> max;

  absl::optional<Size> normal;

};


//
// Functions
//

namespace CreateGuest {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct CreateParams {
    CreateParams();
    ~CreateParams();
    CreateParams(const CreateParams&) = delete;
    CreateParams& operator=(const CreateParams&) = delete;
    CreateParams(CreateParams&& rhs);
    CreateParams& operator=(CreateParams&& rhs);

    // Populates a CreateParams object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, CreateParams& out);

    // Populates a CreateParams object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, CreateParams& out);

    // Creates a deep copy of CreateParams.
    CreateParams Clone() const;

    // Creates a CreateParams object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<CreateParams> FromValue(const base::Value::Dict& value);

    // Creates a CreateParams object from a base::Value, or nullopt on failure.
    static absl::optional<CreateParams> FromValue(const base::Value& value);

    base::Value::Dict additional_properties;
  };


  std::string view_type;

  int owner_routing_id;

  CreateParams create_params;


 private:
  Params();
};

namespace Results {

base::Value::List Create(int instance_id);
}  // namespace Results

}  // namespace CreateGuest

namespace DestroyUnattachedGuest {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int instance_id;


 private:
  Params();
};

}  // namespace DestroyUnattachedGuest

namespace SetSize {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The instance ID of the guest &lt;webview&gt; process. This not exposed to
  // developers through the API.
  int instance_id;

  SizeParams params;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetSize

}  // namespace guest_view_internal
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_GUEST_VIEW_INTERNAL_H__
