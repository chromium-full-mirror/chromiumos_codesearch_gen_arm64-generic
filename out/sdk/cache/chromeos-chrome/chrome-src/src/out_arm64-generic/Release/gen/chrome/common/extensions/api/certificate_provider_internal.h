// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/certificate_provider_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_CERTIFICATE_PROVIDER_INTERNAL_H__
#define CHROME_COMMON_EXTENSIONS_API_CERTIFICATE_PROVIDER_INTERNAL_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "chrome/common/extensions/api/certificate_provider.h"


namespace extensions {
namespace api {
namespace certificate_provider_internal {

//
// Functions
//

namespace ReportSignature {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int request_id;

  absl::optional<std::vector<uint8_t>> signature;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ReportSignature

namespace ReportCertificates {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int request_id;

  absl::optional<std::vector<extensions::api::certificate_provider::CertificateInfo>> certificates;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<std::vector<uint8_t>>& rejected_certificates);
}  // namespace Results

}  // namespace ReportCertificates

}  // namespace certificate_provider_internal
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_CERTIFICATE_PROVIDER_INTERNAL_H__
