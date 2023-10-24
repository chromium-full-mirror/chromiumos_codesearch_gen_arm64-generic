// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_SCHEMA_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_SCHEMA_H_

#include "base/values.h"
#include "third_party/abseil-cpp/absl/types/optional.h"
#include "third_party/inspector_protocol/crdtp/chromium/protocol_traits.h"

#include "headless/public/devtools/internal/types_forward_declarations_schema.h"
#include "headless/public/headless_export.h"

namespace headless {
namespace protocol {
using Binary = crdtp::Binary;
}

class ErrorReporter;

namespace schema {

// Description of the protocol domain.
class HEADLESS_EXPORT Domain {
 public:
  static std::unique_ptr<Domain> Parse(const base::Value& value, ErrorReporter* errors);

  Domain(const Domain&) = delete;
  Domain& operator=(const Domain&) = delete;

  ~Domain() { }


  // Domain name.
  std::string GetName() const { return name_; }
  void SetName(const std::string& value) { name_ = value; }

  // Domain version.
  std::string GetVersion() const { return version_; }
  void SetVersion(const std::string& value) { version_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<Domain> Clone() const;

  template<int STATE>
  class DomainBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kNameSet = 1 << 1,
    kVersionSet = 1 << 2,
      kAllRequiredFieldsSet = (kNameSet | kVersionSet | 0)
    };

    DomainBuilder<STATE | kNameSet>& SetName(const std::string& value) {
      static_assert(!(STATE & kNameSet), "property name should not have already been set");
      result_->SetName(value);
      return CastState<kNameSet>();
    }

    DomainBuilder<STATE | kVersionSet>& SetVersion(const std::string& value) {
      static_assert(!(STATE & kVersionSet), "property version should not have already been set");
      result_->SetVersion(value);
      return CastState<kVersionSet>();
    }

    std::unique_ptr<Domain> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class Domain;
    DomainBuilder() : result_(new Domain()) { }

    template<int STEP> DomainBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DomainBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<Domain> result_;
  };

  static DomainBuilder<0> Builder() {
    return DomainBuilder<0>();
  }

 private:
  Domain() { }

  std::string name_;
  std::string version_;
};


// Parameters for the GetDomains command.
class HEADLESS_EXPORT GetDomainsParams {
 public:
  static std::unique_ptr<GetDomainsParams> Parse(const base::Value& value, ErrorReporter* errors);

  GetDomainsParams(const GetDomainsParams&) = delete;
  GetDomainsParams& operator=(const GetDomainsParams&) = delete;

  ~GetDomainsParams() { }


  base::Value Serialize() const;
  std::unique_ptr<GetDomainsParams> Clone() const;

  template<int STATE>
  class GetDomainsParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<GetDomainsParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetDomainsParams;
    GetDomainsParamsBuilder() : result_(new GetDomainsParams()) { }

    template<int STEP> GetDomainsParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetDomainsParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetDomainsParams> result_;
  };

  static GetDomainsParamsBuilder<0> Builder() {
    return GetDomainsParamsBuilder<0>();
  }

 private:
  GetDomainsParams() { }

};


// Result for the GetDomains command.
class HEADLESS_EXPORT GetDomainsResult {
 public:
  static std::unique_ptr<GetDomainsResult> Parse(const base::Value& value, ErrorReporter* errors);

  GetDomainsResult(const GetDomainsResult&) = delete;
  GetDomainsResult& operator=(const GetDomainsResult&) = delete;

  ~GetDomainsResult() { }


  // List of supported domains.
  const std::vector<std::unique_ptr<::headless::schema::Domain>>* GetDomains() const { return &domains_; }
  void SetDomains(std::vector<std::unique_ptr<::headless::schema::Domain>> value) { domains_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<GetDomainsResult> Clone() const;

  template<int STATE>
  class GetDomainsResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kDomainsSet = 1 << 1,
      kAllRequiredFieldsSet = (kDomainsSet | 0)
    };

    GetDomainsResultBuilder<STATE | kDomainsSet>& SetDomains(std::vector<std::unique_ptr<::headless::schema::Domain>> value) {
      static_assert(!(STATE & kDomainsSet), "property domains should not have already been set");
      result_->SetDomains(std::move(value));
      return CastState<kDomainsSet>();
    }

    std::unique_ptr<GetDomainsResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetDomainsResult;
    GetDomainsResultBuilder() : result_(new GetDomainsResult()) { }

    template<int STEP> GetDomainsResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetDomainsResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetDomainsResult> result_;
  };

  static GetDomainsResultBuilder<0> Builder() {
    return GetDomainsResultBuilder<0>();
  }

 private:
  GetDomainsResult() { }

  std::vector<std::unique_ptr<::headless::schema::Domain>> domains_;
};


}  // namespace schema

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_SCHEMA_H_
