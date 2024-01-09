// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/echo_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_ECHO_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_ECHO_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace echo_private {

//
// Functions
//

namespace SetOfferInfo {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The offer info.
  struct OfferInfo {
    OfferInfo();
    ~OfferInfo();
    OfferInfo(const OfferInfo&) = delete;
    OfferInfo& operator=(const OfferInfo&) = delete;
    OfferInfo(OfferInfo&& rhs) noexcept;
    OfferInfo& operator=(OfferInfo&& rhs) noexcept;

    // Populates a OfferInfo object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, OfferInfo& out);

    // Populates a OfferInfo object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, OfferInfo& out);

    // Creates a deep copy of OfferInfo.
    OfferInfo Clone() const;

    // Creates a OfferInfo object from a base::Value::Dict, or nullopt on failure.
    static std::optional<OfferInfo> FromValue(const base::Value::Dict& value);

    // Creates a OfferInfo object from a base::Value, or nullopt on failure.
    static std::optional<OfferInfo> FromValue(const base::Value& value);

    base::Value::Dict additional_properties;
  };


  // The service id of the echo offer.
  std::string id;

  // The offer info.
  OfferInfo offer_info;


 private:
  Params();
};

}  // namespace SetOfferInfo

namespace GetOfferInfo {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The service id of the offer eligibility check.
  std::string id;


 private:
  Params();
};

namespace Results {

// The returned offer info. If the offer info is not available, api will raise
// error.
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


// The returned offer info. If the offer info is not available, api will raise
// error.
base::Value::List Create(const Result& result);
}  // namespace Results

}  // namespace GetOfferInfo

namespace GetRegistrationCode {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Type of coupon code requested to be read (coupon or group).
  std::string type;


 private:
  Params();
};

namespace Results {

// The coupon code.
base::Value::List Create(const std::string& result);
}  // namespace Results

}  // namespace GetRegistrationCode

namespace GetOobeTimestamp {

namespace Results {

// The OOBE timestamp.
base::Value::List Create(const std::string& result);
}  // namespace Results

}  // namespace GetOobeTimestamp

namespace GetUserConsent {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Information about the service requesting user consent.
  struct ConsentRequester {
    ConsentRequester();
    ~ConsentRequester();
    ConsentRequester(const ConsentRequester&) = delete;
    ConsentRequester& operator=(const ConsentRequester&) = delete;
    ConsentRequester(ConsentRequester&& rhs) noexcept;
    ConsentRequester& operator=(ConsentRequester&& rhs) noexcept;

    // Populates a ConsentRequester object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, ConsentRequester& out);

    // Populates a ConsentRequester object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, ConsentRequester& out);

    // Creates a deep copy of ConsentRequester.
    ConsentRequester Clone() const;

    // Creates a ConsentRequester object from a base::Value::Dict, or nullopt on
    // failure.
    static std::optional<ConsentRequester> FromValue(const base::Value::Dict& value);

    // Creates a ConsentRequester object from a base::Value, or nullopt on
    // failure.
    static std::optional<ConsentRequester> FromValue(const base::Value& value);

    // User friendly name of the service that is requesting the consent.
    std::string service_name;

    // URL origin of the service requesting the consent.
    std::string origin;

    // The ID of the tab from which the user consent was requested. The tab ID is
    // used to determine with which tab to associate the user consent request
    // dialog. If the user consent was requested from an app window, the tab ID
    // should not be set.
    std::optional<int> tab_id;

  };


  // Information about the service requesting user consent.
  ConsentRequester consent_requester;


 private:
  Params();
};

namespace Results {

// Whether the user consent was given.
base::Value::List Create(bool result);
}  // namespace Results

}  // namespace GetUserConsent

}  // namespace echo_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_ECHO_PRIVATE_H__
