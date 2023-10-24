// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/instance_id.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_INSTANCE_ID_H__
#define CHROME_COMMON_EXTENSIONS_API_INSTANCE_ID_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace instance_id {

//
// Functions
//

namespace GetID {

namespace Results {

// An Instance ID assigned to the app instance.
base::Value::List Create(const std::string& instance_id);
}  // namespace Results

}  // namespace GetID

namespace GetCreationTime {

namespace Results {

// The time when the Instance ID has been generated, represented in milliseconds
// since the epoch.
base::Value::List Create(double creation_time);
}  // namespace Results

}  // namespace GetCreationTime

namespace GetToken {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Parameters for getToken.
  struct GetTokenParams {
    GetTokenParams();
    ~GetTokenParams();
    GetTokenParams(const GetTokenParams&) = delete;
    GetTokenParams& operator=(const GetTokenParams&) = delete;
    GetTokenParams(GetTokenParams&& rhs);
    GetTokenParams& operator=(GetTokenParams&& rhs);

    // Populates a GetTokenParams object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, GetTokenParams& out);

    // Populates a GetTokenParams object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, GetTokenParams& out);

    // Creates a deep copy of GetTokenParams.
    GetTokenParams Clone() const;

    // Creates a GetTokenParams object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<GetTokenParams> FromValue(const base::Value::Dict& value);

    // Creates a GetTokenParams object from a base::Value, or nullopt on failure.
    static absl::optional<GetTokenParams> FromValue(const base::Value& value);

    // Allows including a small number of string key/value pairs that will be
    // associated with the token and may be used in processing the request.
    struct Options {
      Options();
      ~Options();
      Options(const Options&) = delete;
      Options& operator=(const Options&) = delete;
      Options(Options&& rhs);
      Options& operator=(Options&& rhs);

      // Populates a Options object from a base::Value& instance. Returns whether
      // |out| was successfully populated.
      static bool Populate(const base::Value& value, Options& out);

      // Populates a Options object from a Dict& instance. Returns whether |out| was
      // successfully populated.
      static bool Populate(const base::Value::Dict& value, Options& out);

      // Creates a deep copy of Options.
      Options Clone() const;

      // Creates a Options object from a base::Value::Dict, or nullopt on failure.
      static absl::optional<Options> FromValue(const base::Value::Dict& value);

      // Creates a Options object from a base::Value, or nullopt on failure.
      static absl::optional<Options> FromValue(const base::Value& value);

      std::map<std::string, std::string> additional_properties;
    };


    // Identifies the entity that is authorized to access resources associated with
    // this Instance ID. It can be a project ID from <a
    // href='https://code.google.com/apis/console'>Google developer console</a>.
    std::string authorized_entity;

    // Identifies authorized actions that the authorized entity can take. E.g. for
    // sending GCM messages, <code>GCM</code> scope should be used.
    std::string scope;

    // Allows including a small number of string key/value pairs that will be
    // associated with the token and may be used in processing the request.
    absl::optional<Options> options;

  };


  // Parameters for getToken.
  GetTokenParams get_token_params;


 private:
  Params();
};

namespace Results {

// A token assigned by the requested service.
base::Value::List Create(const std::string& token);
}  // namespace Results

}  // namespace GetToken

namespace DeleteToken {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Parameters for deleteToken.
  struct DeleteTokenParams {
    DeleteTokenParams();
    ~DeleteTokenParams();
    DeleteTokenParams(const DeleteTokenParams&) = delete;
    DeleteTokenParams& operator=(const DeleteTokenParams&) = delete;
    DeleteTokenParams(DeleteTokenParams&& rhs);
    DeleteTokenParams& operator=(DeleteTokenParams&& rhs);

    // Populates a DeleteTokenParams object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, DeleteTokenParams& out);

    // Populates a DeleteTokenParams object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, DeleteTokenParams& out);

    // Creates a deep copy of DeleteTokenParams.
    DeleteTokenParams Clone() const;

    // Creates a DeleteTokenParams object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<DeleteTokenParams> FromValue(const base::Value::Dict& value);

    // Creates a DeleteTokenParams object from a base::Value, or nullopt on
    // failure.
    static absl::optional<DeleteTokenParams> FromValue(const base::Value& value);

    // The authorized entity that is used to obtain the token.
    std::string authorized_entity;

    // The scope that is used to obtain the token.
    std::string scope;

  };


  // Parameters for deleteToken.
  DeleteTokenParams delete_token_params;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace DeleteToken

namespace DeleteID {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace DeleteID

//
// Events
//

namespace OnTokenRefresh {

extern const char kEventName[];  // "instanceID.onTokenRefresh"

base::Value::List Create();
}  // namespace OnTokenRefresh

}  // namespace instance_id
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_INSTANCE_ID_H__
