// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/login_screen_storage.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_LOGIN_SCREEN_STORAGE_H__
#define CHROME_COMMON_EXTENSIONS_API_LOGIN_SCREEN_STORAGE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace login_screen_storage {

//
// Functions
//

namespace StorePersistentData {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // IDs of the extensions that should have access to the stored data.
  std::vector<std::string> extension_ids;

  // The data to store.
  std::string data;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StorePersistentData

namespace RetrievePersistentData {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // ID of the extension that saved the data that the caller is trying to
  // retrieve.
  std::string owner_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& data);
}  // namespace Results

}  // namespace RetrievePersistentData

namespace StoreCredentials {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // ID of the in-session extension that should have access to these credentials.
  // Credentials stored using this method are deleted on session exit.
  std::string extension_id;

  // The credentials to store.
  std::string credentials;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace StoreCredentials

namespace RetrieveCredentials {

namespace Results {

base::Value::List Create(const std::string& data);
}  // namespace Results

}  // namespace RetrieveCredentials

}  // namespace login_screen_storage
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_LOGIN_SCREEN_STORAGE_H__
