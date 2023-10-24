// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_STORAGE_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_STORAGE_H_

#include "base/values.h"
#include "third_party/abseil-cpp/absl/types/optional.h"
#include "third_party/inspector_protocol/crdtp/chromium/protocol_traits.h"

#include "headless/public/devtools/internal/types_forward_declarations_browser.h"
#include "headless/public/devtools/internal/types_forward_declarations_dom.h"
#include "headless/public/devtools/internal/types_forward_declarations_debugger.h"
#include "headless/public/devtools/internal/types_forward_declarations_emulation.h"
#include "headless/public/devtools/internal/types_forward_declarations_io.h"
#include "headless/public/devtools/internal/types_forward_declarations_network.h"
#include "headless/public/devtools/internal/types_forward_declarations_page.h"
#include "headless/public/devtools/internal/types_forward_declarations_runtime.h"
#include "headless/public/devtools/internal/types_forward_declarations_security.h"
#include "headless/public/devtools/internal/types_forward_declarations_storage.h"
#include "headless/public/devtools/internal/types_forward_declarations_target.h"
#include "headless/public/headless_export.h"

namespace headless {
namespace protocol {
using Binary = crdtp::Binary;
}

class ErrorReporter;

namespace storage {

// Usage for a storage type.
class HEADLESS_EXPORT UsageForType {
 public:
  static std::unique_ptr<UsageForType> Parse(const base::Value& value, ErrorReporter* errors);

  UsageForType(const UsageForType&) = delete;
  UsageForType& operator=(const UsageForType&) = delete;

  ~UsageForType() { }


  // Name of storage type.
  ::headless::storage::StorageType GetStorageType() const { return storage_type_; }
  void SetStorageType(::headless::storage::StorageType value) { storage_type_ = value; }

  // Storage usage (bytes).
  double GetUsage() const { return usage_; }
  void SetUsage(double value) { usage_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<UsageForType> Clone() const;

  template<int STATE>
  class UsageForTypeBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kStorageTypeSet = 1 << 1,
    kUsageSet = 1 << 2,
      kAllRequiredFieldsSet = (kStorageTypeSet | kUsageSet | 0)
    };

    UsageForTypeBuilder<STATE | kStorageTypeSet>& SetStorageType(::headless::storage::StorageType value) {
      static_assert(!(STATE & kStorageTypeSet), "property storageType should not have already been set");
      result_->SetStorageType(value);
      return CastState<kStorageTypeSet>();
    }

    UsageForTypeBuilder<STATE | kUsageSet>& SetUsage(double value) {
      static_assert(!(STATE & kUsageSet), "property usage should not have already been set");
      result_->SetUsage(value);
      return CastState<kUsageSet>();
    }

    std::unique_ptr<UsageForType> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class UsageForType;
    UsageForTypeBuilder() : result_(new UsageForType()) { }

    template<int STEP> UsageForTypeBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<UsageForTypeBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<UsageForType> result_;
  };

  static UsageForTypeBuilder<0> Builder() {
    return UsageForTypeBuilder<0>();
  }

 private:
  UsageForType() { }

  ::headless::storage::StorageType storage_type_;
  double usage_;
};


// Pair of issuer origin and number of available (signed, but not used) Trust
// Tokens from that issuer.
class HEADLESS_EXPORT TrustTokens {
 public:
  static std::unique_ptr<TrustTokens> Parse(const base::Value& value, ErrorReporter* errors);

  TrustTokens(const TrustTokens&) = delete;
  TrustTokens& operator=(const TrustTokens&) = delete;

  ~TrustTokens() { }


  std::string GetIssuerOrigin() const { return issuer_origin_; }
  void SetIssuerOrigin(const std::string& value) { issuer_origin_ = value; }

  double GetCount() const { return count_; }
  void SetCount(double value) { count_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<TrustTokens> Clone() const;

  template<int STATE>
  class TrustTokensBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kIssuerOriginSet = 1 << 1,
    kCountSet = 1 << 2,
      kAllRequiredFieldsSet = (kIssuerOriginSet | kCountSet | 0)
    };

    TrustTokensBuilder<STATE | kIssuerOriginSet>& SetIssuerOrigin(const std::string& value) {
      static_assert(!(STATE & kIssuerOriginSet), "property issuerOrigin should not have already been set");
      result_->SetIssuerOrigin(value);
      return CastState<kIssuerOriginSet>();
    }

    TrustTokensBuilder<STATE | kCountSet>& SetCount(double value) {
      static_assert(!(STATE & kCountSet), "property count should not have already been set");
      result_->SetCount(value);
      return CastState<kCountSet>();
    }

    std::unique_ptr<TrustTokens> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class TrustTokens;
    TrustTokensBuilder() : result_(new TrustTokens()) { }

    template<int STEP> TrustTokensBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<TrustTokensBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<TrustTokens> result_;
  };

  static TrustTokensBuilder<0> Builder() {
    return TrustTokensBuilder<0>();
  }

 private:
  TrustTokens() { }

  std::string issuer_origin_;
  double count_;
};


// Ad advertising element inside an interest group.
class HEADLESS_EXPORT InterestGroupAd {
 public:
  static std::unique_ptr<InterestGroupAd> Parse(const base::Value& value, ErrorReporter* errors);

  InterestGroupAd(const InterestGroupAd&) = delete;
  InterestGroupAd& operator=(const InterestGroupAd&) = delete;

  ~InterestGroupAd() { }


  std::string GetRenderURL() const { return renderurl_; }
  void SetRenderURL(const std::string& value) { renderurl_ = value; }

  bool HasMetadata() const { return !!metadata_; }
  std::string GetMetadata() const { DCHECK(HasMetadata()); return metadata_.value(); }
  void SetMetadata(const std::string& value) { metadata_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<InterestGroupAd> Clone() const;

  template<int STATE>
  class InterestGroupAdBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kRenderURLSet = 1 << 1,
      kAllRequiredFieldsSet = (kRenderURLSet | 0)
    };

    InterestGroupAdBuilder<STATE | kRenderURLSet>& SetRenderURL(const std::string& value) {
      static_assert(!(STATE & kRenderURLSet), "property renderURL should not have already been set");
      result_->SetRenderURL(value);
      return CastState<kRenderURLSet>();
    }

    InterestGroupAdBuilder<STATE>& SetMetadata(const std::string& value) {
      result_->SetMetadata(value);
      return *this;
    }

    std::unique_ptr<InterestGroupAd> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class InterestGroupAd;
    InterestGroupAdBuilder() : result_(new InterestGroupAd()) { }

    template<int STEP> InterestGroupAdBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<InterestGroupAdBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<InterestGroupAd> result_;
  };

  static InterestGroupAdBuilder<0> Builder() {
    return InterestGroupAdBuilder<0>();
  }

 private:
  InterestGroupAd() { }

  std::string renderurl_;
  absl::optional<std::string> metadata_;
};


// The full details of an interest group.
class HEADLESS_EXPORT InterestGroupDetails {
 public:
  static std::unique_ptr<InterestGroupDetails> Parse(const base::Value& value, ErrorReporter* errors);

  InterestGroupDetails(const InterestGroupDetails&) = delete;
  InterestGroupDetails& operator=(const InterestGroupDetails&) = delete;

  ~InterestGroupDetails() { }


  std::string GetOwnerOrigin() const { return owner_origin_; }
  void SetOwnerOrigin(const std::string& value) { owner_origin_ = value; }

  std::string GetName() const { return name_; }
  void SetName(const std::string& value) { name_ = value; }

  double GetExpirationTime() const { return expiration_time_; }
  void SetExpirationTime(double value) { expiration_time_ = value; }

  std::string GetJoiningOrigin() const { return joining_origin_; }
  void SetJoiningOrigin(const std::string& value) { joining_origin_ = value; }

  bool HasBiddingLogicURL() const { return !!bidding_logicurl_; }
  std::string GetBiddingLogicURL() const { DCHECK(HasBiddingLogicURL()); return bidding_logicurl_.value(); }
  void SetBiddingLogicURL(const std::string& value) { bidding_logicurl_ = value; }

  bool HasBiddingWasmHelperURL() const { return !!bidding_wasm_helperurl_; }
  std::string GetBiddingWasmHelperURL() const { DCHECK(HasBiddingWasmHelperURL()); return bidding_wasm_helperurl_.value(); }
  void SetBiddingWasmHelperURL(const std::string& value) { bidding_wasm_helperurl_ = value; }

  bool HasUpdateURL() const { return !!updateurl_; }
  std::string GetUpdateURL() const { DCHECK(HasUpdateURL()); return updateurl_.value(); }
  void SetUpdateURL(const std::string& value) { updateurl_ = value; }

  bool HasTrustedBiddingSignalsURL() const { return !!trusted_bidding_signalsurl_; }
  std::string GetTrustedBiddingSignalsURL() const { DCHECK(HasTrustedBiddingSignalsURL()); return trusted_bidding_signalsurl_.value(); }
  void SetTrustedBiddingSignalsURL(const std::string& value) { trusted_bidding_signalsurl_ = value; }

  const std::vector<std::string>* GetTrustedBiddingSignalsKeys() const { return &trusted_bidding_signals_keys_; }
  void SetTrustedBiddingSignalsKeys(std::vector<std::string> value) { trusted_bidding_signals_keys_ = std::move(value); }

  bool HasUserBiddingSignals() const { return !!user_bidding_signals_; }
  std::string GetUserBiddingSignals() const { DCHECK(HasUserBiddingSignals()); return user_bidding_signals_.value(); }
  void SetUserBiddingSignals(const std::string& value) { user_bidding_signals_ = value; }

  const std::vector<std::unique_ptr<::headless::storage::InterestGroupAd>>* GetAds() const { return &ads_; }
  void SetAds(std::vector<std::unique_ptr<::headless::storage::InterestGroupAd>> value) { ads_ = std::move(value); }

  const std::vector<std::unique_ptr<::headless::storage::InterestGroupAd>>* GetAdComponents() const { return &ad_components_; }
  void SetAdComponents(std::vector<std::unique_ptr<::headless::storage::InterestGroupAd>> value) { ad_components_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<InterestGroupDetails> Clone() const;

  template<int STATE>
  class InterestGroupDetailsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kOwnerOriginSet = 1 << 1,
    kNameSet = 1 << 2,
    kExpirationTimeSet = 1 << 3,
    kJoiningOriginSet = 1 << 4,
    kTrustedBiddingSignalsKeysSet = 1 << 5,
    kAdsSet = 1 << 6,
    kAdComponentsSet = 1 << 7,
      kAllRequiredFieldsSet = (kOwnerOriginSet | kNameSet | kExpirationTimeSet | kJoiningOriginSet | kTrustedBiddingSignalsKeysSet | kAdsSet | kAdComponentsSet | 0)
    };

    InterestGroupDetailsBuilder<STATE | kOwnerOriginSet>& SetOwnerOrigin(const std::string& value) {
      static_assert(!(STATE & kOwnerOriginSet), "property ownerOrigin should not have already been set");
      result_->SetOwnerOrigin(value);
      return CastState<kOwnerOriginSet>();
    }

    InterestGroupDetailsBuilder<STATE | kNameSet>& SetName(const std::string& value) {
      static_assert(!(STATE & kNameSet), "property name should not have already been set");
      result_->SetName(value);
      return CastState<kNameSet>();
    }

    InterestGroupDetailsBuilder<STATE | kExpirationTimeSet>& SetExpirationTime(double value) {
      static_assert(!(STATE & kExpirationTimeSet), "property expirationTime should not have already been set");
      result_->SetExpirationTime(value);
      return CastState<kExpirationTimeSet>();
    }

    InterestGroupDetailsBuilder<STATE | kJoiningOriginSet>& SetJoiningOrigin(const std::string& value) {
      static_assert(!(STATE & kJoiningOriginSet), "property joiningOrigin should not have already been set");
      result_->SetJoiningOrigin(value);
      return CastState<kJoiningOriginSet>();
    }

    InterestGroupDetailsBuilder<STATE>& SetBiddingLogicURL(const std::string& value) {
      result_->SetBiddingLogicURL(value);
      return *this;
    }

    InterestGroupDetailsBuilder<STATE>& SetBiddingWasmHelperURL(const std::string& value) {
      result_->SetBiddingWasmHelperURL(value);
      return *this;
    }

    InterestGroupDetailsBuilder<STATE>& SetUpdateURL(const std::string& value) {
      result_->SetUpdateURL(value);
      return *this;
    }

    InterestGroupDetailsBuilder<STATE>& SetTrustedBiddingSignalsURL(const std::string& value) {
      result_->SetTrustedBiddingSignalsURL(value);
      return *this;
    }

    InterestGroupDetailsBuilder<STATE | kTrustedBiddingSignalsKeysSet>& SetTrustedBiddingSignalsKeys(std::vector<std::string> value) {
      static_assert(!(STATE & kTrustedBiddingSignalsKeysSet), "property trustedBiddingSignalsKeys should not have already been set");
      result_->SetTrustedBiddingSignalsKeys(std::move(value));
      return CastState<kTrustedBiddingSignalsKeysSet>();
    }

    InterestGroupDetailsBuilder<STATE>& SetUserBiddingSignals(const std::string& value) {
      result_->SetUserBiddingSignals(value);
      return *this;
    }

    InterestGroupDetailsBuilder<STATE | kAdsSet>& SetAds(std::vector<std::unique_ptr<::headless::storage::InterestGroupAd>> value) {
      static_assert(!(STATE & kAdsSet), "property ads should not have already been set");
      result_->SetAds(std::move(value));
      return CastState<kAdsSet>();
    }

    InterestGroupDetailsBuilder<STATE | kAdComponentsSet>& SetAdComponents(std::vector<std::unique_ptr<::headless::storage::InterestGroupAd>> value) {
      static_assert(!(STATE & kAdComponentsSet), "property adComponents should not have already been set");
      result_->SetAdComponents(std::move(value));
      return CastState<kAdComponentsSet>();
    }

    std::unique_ptr<InterestGroupDetails> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class InterestGroupDetails;
    InterestGroupDetailsBuilder() : result_(new InterestGroupDetails()) { }

    template<int STEP> InterestGroupDetailsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<InterestGroupDetailsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<InterestGroupDetails> result_;
  };

  static InterestGroupDetailsBuilder<0> Builder() {
    return InterestGroupDetailsBuilder<0>();
  }

 private:
  InterestGroupDetails() { }

  std::string owner_origin_;
  std::string name_;
  double expiration_time_;
  std::string joining_origin_;
  absl::optional<std::string> bidding_logicurl_;
  absl::optional<std::string> bidding_wasm_helperurl_;
  absl::optional<std::string> updateurl_;
  absl::optional<std::string> trusted_bidding_signalsurl_;
  std::vector<std::string> trusted_bidding_signals_keys_;
  absl::optional<std::string> user_bidding_signals_;
  std::vector<std::unique_ptr<::headless::storage::InterestGroupAd>> ads_;
  std::vector<std::unique_ptr<::headless::storage::InterestGroupAd>> ad_components_;
};


// Struct for a single key-value pair in an origin's shared storage.
class HEADLESS_EXPORT SharedStorageEntry {
 public:
  static std::unique_ptr<SharedStorageEntry> Parse(const base::Value& value, ErrorReporter* errors);

  SharedStorageEntry(const SharedStorageEntry&) = delete;
  SharedStorageEntry& operator=(const SharedStorageEntry&) = delete;

  ~SharedStorageEntry() { }


  std::string GetKey() const { return key_; }
  void SetKey(const std::string& value) { key_ = value; }

  std::string GetValue() const { return value_; }
  void SetValue(const std::string& value) { value_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SharedStorageEntry> Clone() const;

  template<int STATE>
  class SharedStorageEntryBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kKeySet = 1 << 1,
    kValueSet = 1 << 2,
      kAllRequiredFieldsSet = (kKeySet | kValueSet | 0)
    };

    SharedStorageEntryBuilder<STATE | kKeySet>& SetKey(const std::string& value) {
      static_assert(!(STATE & kKeySet), "property key should not have already been set");
      result_->SetKey(value);
      return CastState<kKeySet>();
    }

    SharedStorageEntryBuilder<STATE | kValueSet>& SetValue(const std::string& value) {
      static_assert(!(STATE & kValueSet), "property value should not have already been set");
      result_->SetValue(value);
      return CastState<kValueSet>();
    }

    std::unique_ptr<SharedStorageEntry> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SharedStorageEntry;
    SharedStorageEntryBuilder() : result_(new SharedStorageEntry()) { }

    template<int STEP> SharedStorageEntryBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SharedStorageEntryBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SharedStorageEntry> result_;
  };

  static SharedStorageEntryBuilder<0> Builder() {
    return SharedStorageEntryBuilder<0>();
  }

 private:
  SharedStorageEntry() { }

  std::string key_;
  std::string value_;
};


// Details for an origin's shared storage.
class HEADLESS_EXPORT SharedStorageMetadata {
 public:
  static std::unique_ptr<SharedStorageMetadata> Parse(const base::Value& value, ErrorReporter* errors);

  SharedStorageMetadata(const SharedStorageMetadata&) = delete;
  SharedStorageMetadata& operator=(const SharedStorageMetadata&) = delete;

  ~SharedStorageMetadata() { }


  double GetCreationTime() const { return creation_time_; }
  void SetCreationTime(double value) { creation_time_ = value; }

  int GetLength() const { return length_; }
  void SetLength(int value) { length_ = value; }

  double GetRemainingBudget() const { return remaining_budget_; }
  void SetRemainingBudget(double value) { remaining_budget_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SharedStorageMetadata> Clone() const;

  template<int STATE>
  class SharedStorageMetadataBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kCreationTimeSet = 1 << 1,
    kLengthSet = 1 << 2,
    kRemainingBudgetSet = 1 << 3,
      kAllRequiredFieldsSet = (kCreationTimeSet | kLengthSet | kRemainingBudgetSet | 0)
    };

    SharedStorageMetadataBuilder<STATE | kCreationTimeSet>& SetCreationTime(double value) {
      static_assert(!(STATE & kCreationTimeSet), "property creationTime should not have already been set");
      result_->SetCreationTime(value);
      return CastState<kCreationTimeSet>();
    }

    SharedStorageMetadataBuilder<STATE | kLengthSet>& SetLength(int value) {
      static_assert(!(STATE & kLengthSet), "property length should not have already been set");
      result_->SetLength(value);
      return CastState<kLengthSet>();
    }

    SharedStorageMetadataBuilder<STATE | kRemainingBudgetSet>& SetRemainingBudget(double value) {
      static_assert(!(STATE & kRemainingBudgetSet), "property remainingBudget should not have already been set");
      result_->SetRemainingBudget(value);
      return CastState<kRemainingBudgetSet>();
    }

    std::unique_ptr<SharedStorageMetadata> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SharedStorageMetadata;
    SharedStorageMetadataBuilder() : result_(new SharedStorageMetadata()) { }

    template<int STEP> SharedStorageMetadataBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SharedStorageMetadataBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SharedStorageMetadata> result_;
  };

  static SharedStorageMetadataBuilder<0> Builder() {
    return SharedStorageMetadataBuilder<0>();
  }

 private:
  SharedStorageMetadata() { }

  double creation_time_;
  int length_;
  double remaining_budget_;
};


// Pair of reporting metadata details for a candidate URL for `selectURL()`.
class HEADLESS_EXPORT SharedStorageReportingMetadata {
 public:
  static std::unique_ptr<SharedStorageReportingMetadata> Parse(const base::Value& value, ErrorReporter* errors);

  SharedStorageReportingMetadata(const SharedStorageReportingMetadata&) = delete;
  SharedStorageReportingMetadata& operator=(const SharedStorageReportingMetadata&) = delete;

  ~SharedStorageReportingMetadata() { }


  std::string GetEventType() const { return event_type_; }
  void SetEventType(const std::string& value) { event_type_ = value; }

  std::string GetReportingUrl() const { return reporting_url_; }
  void SetReportingUrl(const std::string& value) { reporting_url_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SharedStorageReportingMetadata> Clone() const;

  template<int STATE>
  class SharedStorageReportingMetadataBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kEventTypeSet = 1 << 1,
    kReportingUrlSet = 1 << 2,
      kAllRequiredFieldsSet = (kEventTypeSet | kReportingUrlSet | 0)
    };

    SharedStorageReportingMetadataBuilder<STATE | kEventTypeSet>& SetEventType(const std::string& value) {
      static_assert(!(STATE & kEventTypeSet), "property eventType should not have already been set");
      result_->SetEventType(value);
      return CastState<kEventTypeSet>();
    }

    SharedStorageReportingMetadataBuilder<STATE | kReportingUrlSet>& SetReportingUrl(const std::string& value) {
      static_assert(!(STATE & kReportingUrlSet), "property reportingUrl should not have already been set");
      result_->SetReportingUrl(value);
      return CastState<kReportingUrlSet>();
    }

    std::unique_ptr<SharedStorageReportingMetadata> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SharedStorageReportingMetadata;
    SharedStorageReportingMetadataBuilder() : result_(new SharedStorageReportingMetadata()) { }

    template<int STEP> SharedStorageReportingMetadataBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SharedStorageReportingMetadataBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SharedStorageReportingMetadata> result_;
  };

  static SharedStorageReportingMetadataBuilder<0> Builder() {
    return SharedStorageReportingMetadataBuilder<0>();
  }

 private:
  SharedStorageReportingMetadata() { }

  std::string event_type_;
  std::string reporting_url_;
};


// Bundles a candidate URL with its reporting metadata.
class HEADLESS_EXPORT SharedStorageUrlWithMetadata {
 public:
  static std::unique_ptr<SharedStorageUrlWithMetadata> Parse(const base::Value& value, ErrorReporter* errors);

  SharedStorageUrlWithMetadata(const SharedStorageUrlWithMetadata&) = delete;
  SharedStorageUrlWithMetadata& operator=(const SharedStorageUrlWithMetadata&) = delete;

  ~SharedStorageUrlWithMetadata() { }


  // Spec of candidate URL.
  std::string GetUrl() const { return url_; }
  void SetUrl(const std::string& value) { url_ = value; }

  // Any associated reporting metadata.
  const std::vector<std::unique_ptr<::headless::storage::SharedStorageReportingMetadata>>* GetReportingMetadata() const { return &reporting_metadata_; }
  void SetReportingMetadata(std::vector<std::unique_ptr<::headless::storage::SharedStorageReportingMetadata>> value) { reporting_metadata_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<SharedStorageUrlWithMetadata> Clone() const;

  template<int STATE>
  class SharedStorageUrlWithMetadataBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kUrlSet = 1 << 1,
    kReportingMetadataSet = 1 << 2,
      kAllRequiredFieldsSet = (kUrlSet | kReportingMetadataSet | 0)
    };

    SharedStorageUrlWithMetadataBuilder<STATE | kUrlSet>& SetUrl(const std::string& value) {
      static_assert(!(STATE & kUrlSet), "property url should not have already been set");
      result_->SetUrl(value);
      return CastState<kUrlSet>();
    }

    SharedStorageUrlWithMetadataBuilder<STATE | kReportingMetadataSet>& SetReportingMetadata(std::vector<std::unique_ptr<::headless::storage::SharedStorageReportingMetadata>> value) {
      static_assert(!(STATE & kReportingMetadataSet), "property reportingMetadata should not have already been set");
      result_->SetReportingMetadata(std::move(value));
      return CastState<kReportingMetadataSet>();
    }

    std::unique_ptr<SharedStorageUrlWithMetadata> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SharedStorageUrlWithMetadata;
    SharedStorageUrlWithMetadataBuilder() : result_(new SharedStorageUrlWithMetadata()) { }

    template<int STEP> SharedStorageUrlWithMetadataBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SharedStorageUrlWithMetadataBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SharedStorageUrlWithMetadata> result_;
  };

  static SharedStorageUrlWithMetadataBuilder<0> Builder() {
    return SharedStorageUrlWithMetadataBuilder<0>();
  }

 private:
  SharedStorageUrlWithMetadata() { }

  std::string url_;
  std::vector<std::unique_ptr<::headless::storage::SharedStorageReportingMetadata>> reporting_metadata_;
};


// Bundles the parameters for shared storage access events whose
// presence/absence can vary according to SharedStorageAccessType.
class HEADLESS_EXPORT SharedStorageAccessParams {
 public:
  static std::unique_ptr<SharedStorageAccessParams> Parse(const base::Value& value, ErrorReporter* errors);

  SharedStorageAccessParams(const SharedStorageAccessParams&) = delete;
  SharedStorageAccessParams& operator=(const SharedStorageAccessParams&) = delete;

  ~SharedStorageAccessParams() { }


  // Spec of the module script URL.
  // Present only for SharedStorageAccessType.documentAddModule.
  bool HasScriptSourceUrl() const { return !!script_source_url_; }
  std::string GetScriptSourceUrl() const { DCHECK(HasScriptSourceUrl()); return script_source_url_.value(); }
  void SetScriptSourceUrl(const std::string& value) { script_source_url_ = value; }

  // Name of the registered operation to be run.
  // Present only for SharedStorageAccessType.documentRun and
  // SharedStorageAccessType.documentSelectURL.
  bool HasOperationName() const { return !!operation_name_; }
  std::string GetOperationName() const { DCHECK(HasOperationName()); return operation_name_.value(); }
  void SetOperationName(const std::string& value) { operation_name_ = value; }

  // The operation's serialized data in bytes (converted to a string).
  // Present only for SharedStorageAccessType.documentRun and
  // SharedStorageAccessType.documentSelectURL.
  bool HasSerializedData() const { return !!serialized_data_; }
  std::string GetSerializedData() const { DCHECK(HasSerializedData()); return serialized_data_.value(); }
  void SetSerializedData(const std::string& value) { serialized_data_ = value; }

  // Array of candidate URLs' specs, along with any associated metadata.
  // Present only for SharedStorageAccessType.documentSelectURL.
  bool HasUrlsWithMetadata() const { return !!urls_with_metadata_; }
  const std::vector<std::unique_ptr<::headless::storage::SharedStorageUrlWithMetadata>>* GetUrlsWithMetadata() const { DCHECK(HasUrlsWithMetadata()); return &urls_with_metadata_.value(); }
  void SetUrlsWithMetadata(std::vector<std::unique_ptr<::headless::storage::SharedStorageUrlWithMetadata>> value) { urls_with_metadata_ = std::move(value); }

  // Key for a specific entry in an origin's shared storage.
  // Present only for SharedStorageAccessType.documentSet,
  // SharedStorageAccessType.documentAppend,
  // SharedStorageAccessType.documentDelete,
  // SharedStorageAccessType.workletSet,
  // SharedStorageAccessType.workletAppend,
  // SharedStorageAccessType.workletDelete, and
  // SharedStorageAccessType.workletGet.
  bool HasKey() const { return !!key_; }
  std::string GetKey() const { DCHECK(HasKey()); return key_.value(); }
  void SetKey(const std::string& value) { key_ = value; }

  // Value for a specific entry in an origin's shared storage.
  // Present only for SharedStorageAccessType.documentSet,
  // SharedStorageAccessType.documentAppend,
  // SharedStorageAccessType.workletSet, and
  // SharedStorageAccessType.workletAppend.
  bool HasValue() const { return !!value_; }
  std::string GetValue() const { DCHECK(HasValue()); return value_.value(); }
  void SetValue(const std::string& value) { value_ = value; }

  // Whether or not to set an entry for a key if that key is already present.
  // Present only for SharedStorageAccessType.documentSet and
  // SharedStorageAccessType.workletSet.
  bool HasIgnoreIfPresent() const { return !!ignore_if_present_; }
  bool GetIgnoreIfPresent() const { DCHECK(HasIgnoreIfPresent()); return ignore_if_present_.value(); }
  void SetIgnoreIfPresent(bool value) { ignore_if_present_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SharedStorageAccessParams> Clone() const;

  template<int STATE>
  class SharedStorageAccessParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    SharedStorageAccessParamsBuilder<STATE>& SetScriptSourceUrl(const std::string& value) {
      result_->SetScriptSourceUrl(value);
      return *this;
    }

    SharedStorageAccessParamsBuilder<STATE>& SetOperationName(const std::string& value) {
      result_->SetOperationName(value);
      return *this;
    }

    SharedStorageAccessParamsBuilder<STATE>& SetSerializedData(const std::string& value) {
      result_->SetSerializedData(value);
      return *this;
    }

    SharedStorageAccessParamsBuilder<STATE>& SetUrlsWithMetadata(std::vector<std::unique_ptr<::headless::storage::SharedStorageUrlWithMetadata>> value) {
      result_->SetUrlsWithMetadata(std::move(value));
      return *this;
    }

    SharedStorageAccessParamsBuilder<STATE>& SetKey(const std::string& value) {
      result_->SetKey(value);
      return *this;
    }

    SharedStorageAccessParamsBuilder<STATE>& SetValue(const std::string& value) {
      result_->SetValue(value);
      return *this;
    }

    SharedStorageAccessParamsBuilder<STATE>& SetIgnoreIfPresent(bool value) {
      result_->SetIgnoreIfPresent(value);
      return *this;
    }

    std::unique_ptr<SharedStorageAccessParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SharedStorageAccessParams;
    SharedStorageAccessParamsBuilder() : result_(new SharedStorageAccessParams()) { }

    template<int STEP> SharedStorageAccessParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SharedStorageAccessParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SharedStorageAccessParams> result_;
  };

  static SharedStorageAccessParamsBuilder<0> Builder() {
    return SharedStorageAccessParamsBuilder<0>();
  }

 private:
  SharedStorageAccessParams() { }

  absl::optional<std::string> script_source_url_;
  absl::optional<std::string> operation_name_;
  absl::optional<std::string> serialized_data_;
  absl::optional<std::vector<std::unique_ptr<::headless::storage::SharedStorageUrlWithMetadata>>> urls_with_metadata_;
  absl::optional<std::string> key_;
  absl::optional<std::string> value_;
  absl::optional<bool> ignore_if_present_;
};


class HEADLESS_EXPORT StorageBucket {
 public:
  static std::unique_ptr<StorageBucket> Parse(const base::Value& value, ErrorReporter* errors);

  StorageBucket(const StorageBucket&) = delete;
  StorageBucket& operator=(const StorageBucket&) = delete;

  ~StorageBucket() { }


  std::string GetStorageKey() const { return storage_key_; }
  void SetStorageKey(const std::string& value) { storage_key_ = value; }

  // If not specified, it is the default bucket of the storageKey.
  bool HasName() const { return !!name_; }
  std::string GetName() const { DCHECK(HasName()); return name_.value(); }
  void SetName(const std::string& value) { name_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<StorageBucket> Clone() const;

  template<int STATE>
  class StorageBucketBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kStorageKeySet = 1 << 1,
      kAllRequiredFieldsSet = (kStorageKeySet | 0)
    };

    StorageBucketBuilder<STATE | kStorageKeySet>& SetStorageKey(const std::string& value) {
      static_assert(!(STATE & kStorageKeySet), "property storageKey should not have already been set");
      result_->SetStorageKey(value);
      return CastState<kStorageKeySet>();
    }

    StorageBucketBuilder<STATE>& SetName(const std::string& value) {
      result_->SetName(value);
      return *this;
    }

    std::unique_ptr<StorageBucket> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class StorageBucket;
    StorageBucketBuilder() : result_(new StorageBucket()) { }

    template<int STEP> StorageBucketBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<StorageBucketBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<StorageBucket> result_;
  };

  static StorageBucketBuilder<0> Builder() {
    return StorageBucketBuilder<0>();
  }

 private:
  StorageBucket() { }

  std::string storage_key_;
  absl::optional<std::string> name_;
};


class HEADLESS_EXPORT StorageBucketInfo {
 public:
  static std::unique_ptr<StorageBucketInfo> Parse(const base::Value& value, ErrorReporter* errors);

  StorageBucketInfo(const StorageBucketInfo&) = delete;
  StorageBucketInfo& operator=(const StorageBucketInfo&) = delete;

  ~StorageBucketInfo() { }


  const ::headless::storage::StorageBucket* GetBucket() const { return bucket_.get(); }
  void SetBucket(std::unique_ptr<::headless::storage::StorageBucket> value) { bucket_ = std::move(value); }

  std::string GetId() const { return id_; }
  void SetId(const std::string& value) { id_ = value; }

  double GetExpiration() const { return expiration_; }
  void SetExpiration(double value) { expiration_ = value; }

  // Storage quota (bytes).
  double GetQuota() const { return quota_; }
  void SetQuota(double value) { quota_ = value; }

  bool GetPersistent() const { return persistent_; }
  void SetPersistent(bool value) { persistent_ = value; }

  ::headless::storage::StorageBucketsDurability GetDurability() const { return durability_; }
  void SetDurability(::headless::storage::StorageBucketsDurability value) { durability_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<StorageBucketInfo> Clone() const;

  template<int STATE>
  class StorageBucketInfoBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kBucketSet = 1 << 1,
    kIdSet = 1 << 2,
    kExpirationSet = 1 << 3,
    kQuotaSet = 1 << 4,
    kPersistentSet = 1 << 5,
    kDurabilitySet = 1 << 6,
      kAllRequiredFieldsSet = (kBucketSet | kIdSet | kExpirationSet | kQuotaSet | kPersistentSet | kDurabilitySet | 0)
    };

    StorageBucketInfoBuilder<STATE | kBucketSet>& SetBucket(std::unique_ptr<::headless::storage::StorageBucket> value) {
      static_assert(!(STATE & kBucketSet), "property bucket should not have already been set");
      result_->SetBucket(std::move(value));
      return CastState<kBucketSet>();
    }

    StorageBucketInfoBuilder<STATE | kIdSet>& SetId(const std::string& value) {
      static_assert(!(STATE & kIdSet), "property id should not have already been set");
      result_->SetId(value);
      return CastState<kIdSet>();
    }

    StorageBucketInfoBuilder<STATE | kExpirationSet>& SetExpiration(double value) {
      static_assert(!(STATE & kExpirationSet), "property expiration should not have already been set");
      result_->SetExpiration(value);
      return CastState<kExpirationSet>();
    }

    StorageBucketInfoBuilder<STATE | kQuotaSet>& SetQuota(double value) {
      static_assert(!(STATE & kQuotaSet), "property quota should not have already been set");
      result_->SetQuota(value);
      return CastState<kQuotaSet>();
    }

    StorageBucketInfoBuilder<STATE | kPersistentSet>& SetPersistent(bool value) {
      static_assert(!(STATE & kPersistentSet), "property persistent should not have already been set");
      result_->SetPersistent(value);
      return CastState<kPersistentSet>();
    }

    StorageBucketInfoBuilder<STATE | kDurabilitySet>& SetDurability(::headless::storage::StorageBucketsDurability value) {
      static_assert(!(STATE & kDurabilitySet), "property durability should not have already been set");
      result_->SetDurability(value);
      return CastState<kDurabilitySet>();
    }

    std::unique_ptr<StorageBucketInfo> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class StorageBucketInfo;
    StorageBucketInfoBuilder() : result_(new StorageBucketInfo()) { }

    template<int STEP> StorageBucketInfoBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<StorageBucketInfoBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<StorageBucketInfo> result_;
  };

  static StorageBucketInfoBuilder<0> Builder() {
    return StorageBucketInfoBuilder<0>();
  }

 private:
  StorageBucketInfo() { }

  std::unique_ptr<::headless::storage::StorageBucket> bucket_;
  std::string id_;
  double expiration_;
  double quota_;
  bool persistent_;
  ::headless::storage::StorageBucketsDurability durability_;
};


class HEADLESS_EXPORT AttributionReportingFilterDataEntry {
 public:
  static std::unique_ptr<AttributionReportingFilterDataEntry> Parse(const base::Value& value, ErrorReporter* errors);

  AttributionReportingFilterDataEntry(const AttributionReportingFilterDataEntry&) = delete;
  AttributionReportingFilterDataEntry& operator=(const AttributionReportingFilterDataEntry&) = delete;

  ~AttributionReportingFilterDataEntry() { }


  std::string GetKey() const { return key_; }
  void SetKey(const std::string& value) { key_ = value; }

  const std::vector<std::string>* GetValues() const { return &values_; }
  void SetValues(std::vector<std::string> value) { values_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<AttributionReportingFilterDataEntry> Clone() const;

  template<int STATE>
  class AttributionReportingFilterDataEntryBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kKeySet = 1 << 1,
    kValuesSet = 1 << 2,
      kAllRequiredFieldsSet = (kKeySet | kValuesSet | 0)
    };

    AttributionReportingFilterDataEntryBuilder<STATE | kKeySet>& SetKey(const std::string& value) {
      static_assert(!(STATE & kKeySet), "property key should not have already been set");
      result_->SetKey(value);
      return CastState<kKeySet>();
    }

    AttributionReportingFilterDataEntryBuilder<STATE | kValuesSet>& SetValues(std::vector<std::string> value) {
      static_assert(!(STATE & kValuesSet), "property values should not have already been set");
      result_->SetValues(std::move(value));
      return CastState<kValuesSet>();
    }

    std::unique_ptr<AttributionReportingFilterDataEntry> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class AttributionReportingFilterDataEntry;
    AttributionReportingFilterDataEntryBuilder() : result_(new AttributionReportingFilterDataEntry()) { }

    template<int STEP> AttributionReportingFilterDataEntryBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<AttributionReportingFilterDataEntryBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<AttributionReportingFilterDataEntry> result_;
  };

  static AttributionReportingFilterDataEntryBuilder<0> Builder() {
    return AttributionReportingFilterDataEntryBuilder<0>();
  }

 private:
  AttributionReportingFilterDataEntry() { }

  std::string key_;
  std::vector<std::string> values_;
};


class HEADLESS_EXPORT AttributionReportingAggregationKeysEntry {
 public:
  static std::unique_ptr<AttributionReportingAggregationKeysEntry> Parse(const base::Value& value, ErrorReporter* errors);

  AttributionReportingAggregationKeysEntry(const AttributionReportingAggregationKeysEntry&) = delete;
  AttributionReportingAggregationKeysEntry& operator=(const AttributionReportingAggregationKeysEntry&) = delete;

  ~AttributionReportingAggregationKeysEntry() { }


  std::string GetKey() const { return key_; }
  void SetKey(const std::string& value) { key_ = value; }

  std::string GetValue() const { return value_; }
  void SetValue(const std::string& value) { value_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<AttributionReportingAggregationKeysEntry> Clone() const;

  template<int STATE>
  class AttributionReportingAggregationKeysEntryBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kKeySet = 1 << 1,
    kValueSet = 1 << 2,
      kAllRequiredFieldsSet = (kKeySet | kValueSet | 0)
    };

    AttributionReportingAggregationKeysEntryBuilder<STATE | kKeySet>& SetKey(const std::string& value) {
      static_assert(!(STATE & kKeySet), "property key should not have already been set");
      result_->SetKey(value);
      return CastState<kKeySet>();
    }

    AttributionReportingAggregationKeysEntryBuilder<STATE | kValueSet>& SetValue(const std::string& value) {
      static_assert(!(STATE & kValueSet), "property value should not have already been set");
      result_->SetValue(value);
      return CastState<kValueSet>();
    }

    std::unique_ptr<AttributionReportingAggregationKeysEntry> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class AttributionReportingAggregationKeysEntry;
    AttributionReportingAggregationKeysEntryBuilder() : result_(new AttributionReportingAggregationKeysEntry()) { }

    template<int STEP> AttributionReportingAggregationKeysEntryBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<AttributionReportingAggregationKeysEntryBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<AttributionReportingAggregationKeysEntry> result_;
  };

  static AttributionReportingAggregationKeysEntryBuilder<0> Builder() {
    return AttributionReportingAggregationKeysEntryBuilder<0>();
  }

 private:
  AttributionReportingAggregationKeysEntry() { }

  std::string key_;
  std::string value_;
};


class HEADLESS_EXPORT AttributionReportingEventReportWindows {
 public:
  static std::unique_ptr<AttributionReportingEventReportWindows> Parse(const base::Value& value, ErrorReporter* errors);

  AttributionReportingEventReportWindows(const AttributionReportingEventReportWindows&) = delete;
  AttributionReportingEventReportWindows& operator=(const AttributionReportingEventReportWindows&) = delete;

  ~AttributionReportingEventReportWindows() { }


  // duration in seconds
  int GetStart() const { return start_; }
  void SetStart(int value) { start_ = value; }

  // duration in seconds
  const std::vector<int>* GetEnds() const { return &ends_; }
  void SetEnds(std::vector<int> value) { ends_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<AttributionReportingEventReportWindows> Clone() const;

  template<int STATE>
  class AttributionReportingEventReportWindowsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kStartSet = 1 << 1,
    kEndsSet = 1 << 2,
      kAllRequiredFieldsSet = (kStartSet | kEndsSet | 0)
    };

    AttributionReportingEventReportWindowsBuilder<STATE | kStartSet>& SetStart(int value) {
      static_assert(!(STATE & kStartSet), "property start should not have already been set");
      result_->SetStart(value);
      return CastState<kStartSet>();
    }

    AttributionReportingEventReportWindowsBuilder<STATE | kEndsSet>& SetEnds(std::vector<int> value) {
      static_assert(!(STATE & kEndsSet), "property ends should not have already been set");
      result_->SetEnds(std::move(value));
      return CastState<kEndsSet>();
    }

    std::unique_ptr<AttributionReportingEventReportWindows> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class AttributionReportingEventReportWindows;
    AttributionReportingEventReportWindowsBuilder() : result_(new AttributionReportingEventReportWindows()) { }

    template<int STEP> AttributionReportingEventReportWindowsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<AttributionReportingEventReportWindowsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<AttributionReportingEventReportWindows> result_;
  };

  static AttributionReportingEventReportWindowsBuilder<0> Builder() {
    return AttributionReportingEventReportWindowsBuilder<0>();
  }

 private:
  AttributionReportingEventReportWindows() { }

  int start_;
  std::vector<int> ends_;
};


class HEADLESS_EXPORT AttributionReportingSourceRegistration {
 public:
  static std::unique_ptr<AttributionReportingSourceRegistration> Parse(const base::Value& value, ErrorReporter* errors);

  AttributionReportingSourceRegistration(const AttributionReportingSourceRegistration&) = delete;
  AttributionReportingSourceRegistration& operator=(const AttributionReportingSourceRegistration&) = delete;

  ~AttributionReportingSourceRegistration() { }


  double GetTime() const { return time_; }
  void SetTime(double value) { time_ = value; }

  // duration in seconds
  int GetExpiry() const { return expiry_; }
  void SetExpiry(int value) { expiry_ = value; }

  const ::headless::storage::AttributionReportingEventReportWindows* GetEventReportWindows() const { return event_report_windows_.get(); }
  void SetEventReportWindows(std::unique_ptr<::headless::storage::AttributionReportingEventReportWindows> value) { event_report_windows_ = std::move(value); }

  // duration in seconds
  int GetAggregatableReportWindow() const { return aggregatable_report_window_; }
  void SetAggregatableReportWindow(int value) { aggregatable_report_window_ = value; }

  ::headless::storage::AttributionReportingSourceType GetType() const { return type_; }
  void SetType(::headless::storage::AttributionReportingSourceType value) { type_ = value; }

  std::string GetSourceOrigin() const { return source_origin_; }
  void SetSourceOrigin(const std::string& value) { source_origin_ = value; }

  std::string GetReportingOrigin() const { return reporting_origin_; }
  void SetReportingOrigin(const std::string& value) { reporting_origin_ = value; }

  const std::vector<std::string>* GetDestinationSites() const { return &destination_sites_; }
  void SetDestinationSites(std::vector<std::string> value) { destination_sites_ = std::move(value); }

  std::string GetEventId() const { return event_id_; }
  void SetEventId(const std::string& value) { event_id_ = value; }

  std::string GetPriority() const { return priority_; }
  void SetPriority(const std::string& value) { priority_ = value; }

  const std::vector<std::unique_ptr<::headless::storage::AttributionReportingFilterDataEntry>>* GetFilterData() const { return &filter_data_; }
  void SetFilterData(std::vector<std::unique_ptr<::headless::storage::AttributionReportingFilterDataEntry>> value) { filter_data_ = std::move(value); }

  const std::vector<std::unique_ptr<::headless::storage::AttributionReportingAggregationKeysEntry>>* GetAggregationKeys() const { return &aggregation_keys_; }
  void SetAggregationKeys(std::vector<std::unique_ptr<::headless::storage::AttributionReportingAggregationKeysEntry>> value) { aggregation_keys_ = std::move(value); }

  bool HasDebugKey() const { return !!debug_key_; }
  std::string GetDebugKey() const { DCHECK(HasDebugKey()); return debug_key_.value(); }
  void SetDebugKey(const std::string& value) { debug_key_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<AttributionReportingSourceRegistration> Clone() const;

  template<int STATE>
  class AttributionReportingSourceRegistrationBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kTimeSet = 1 << 1,
    kExpirySet = 1 << 2,
    kEventReportWindowsSet = 1 << 3,
    kAggregatableReportWindowSet = 1 << 4,
    kTypeSet = 1 << 5,
    kSourceOriginSet = 1 << 6,
    kReportingOriginSet = 1 << 7,
    kDestinationSitesSet = 1 << 8,
    kEventIdSet = 1 << 9,
    kPrioritySet = 1 << 10,
    kFilterDataSet = 1 << 11,
    kAggregationKeysSet = 1 << 12,
      kAllRequiredFieldsSet = (kTimeSet | kExpirySet | kEventReportWindowsSet | kAggregatableReportWindowSet | kTypeSet | kSourceOriginSet | kReportingOriginSet | kDestinationSitesSet | kEventIdSet | kPrioritySet | kFilterDataSet | kAggregationKeysSet | 0)
    };

    AttributionReportingSourceRegistrationBuilder<STATE | kTimeSet>& SetTime(double value) {
      static_assert(!(STATE & kTimeSet), "property time should not have already been set");
      result_->SetTime(value);
      return CastState<kTimeSet>();
    }

    AttributionReportingSourceRegistrationBuilder<STATE | kExpirySet>& SetExpiry(int value) {
      static_assert(!(STATE & kExpirySet), "property expiry should not have already been set");
      result_->SetExpiry(value);
      return CastState<kExpirySet>();
    }

    AttributionReportingSourceRegistrationBuilder<STATE | kEventReportWindowsSet>& SetEventReportWindows(std::unique_ptr<::headless::storage::AttributionReportingEventReportWindows> value) {
      static_assert(!(STATE & kEventReportWindowsSet), "property eventReportWindows should not have already been set");
      result_->SetEventReportWindows(std::move(value));
      return CastState<kEventReportWindowsSet>();
    }

    AttributionReportingSourceRegistrationBuilder<STATE | kAggregatableReportWindowSet>& SetAggregatableReportWindow(int value) {
      static_assert(!(STATE & kAggregatableReportWindowSet), "property aggregatableReportWindow should not have already been set");
      result_->SetAggregatableReportWindow(value);
      return CastState<kAggregatableReportWindowSet>();
    }

    AttributionReportingSourceRegistrationBuilder<STATE | kTypeSet>& SetType(::headless::storage::AttributionReportingSourceType value) {
      static_assert(!(STATE & kTypeSet), "property type should not have already been set");
      result_->SetType(value);
      return CastState<kTypeSet>();
    }

    AttributionReportingSourceRegistrationBuilder<STATE | kSourceOriginSet>& SetSourceOrigin(const std::string& value) {
      static_assert(!(STATE & kSourceOriginSet), "property sourceOrigin should not have already been set");
      result_->SetSourceOrigin(value);
      return CastState<kSourceOriginSet>();
    }

    AttributionReportingSourceRegistrationBuilder<STATE | kReportingOriginSet>& SetReportingOrigin(const std::string& value) {
      static_assert(!(STATE & kReportingOriginSet), "property reportingOrigin should not have already been set");
      result_->SetReportingOrigin(value);
      return CastState<kReportingOriginSet>();
    }

    AttributionReportingSourceRegistrationBuilder<STATE | kDestinationSitesSet>& SetDestinationSites(std::vector<std::string> value) {
      static_assert(!(STATE & kDestinationSitesSet), "property destinationSites should not have already been set");
      result_->SetDestinationSites(std::move(value));
      return CastState<kDestinationSitesSet>();
    }

    AttributionReportingSourceRegistrationBuilder<STATE | kEventIdSet>& SetEventId(const std::string& value) {
      static_assert(!(STATE & kEventIdSet), "property eventId should not have already been set");
      result_->SetEventId(value);
      return CastState<kEventIdSet>();
    }

    AttributionReportingSourceRegistrationBuilder<STATE | kPrioritySet>& SetPriority(const std::string& value) {
      static_assert(!(STATE & kPrioritySet), "property priority should not have already been set");
      result_->SetPriority(value);
      return CastState<kPrioritySet>();
    }

    AttributionReportingSourceRegistrationBuilder<STATE | kFilterDataSet>& SetFilterData(std::vector<std::unique_ptr<::headless::storage::AttributionReportingFilterDataEntry>> value) {
      static_assert(!(STATE & kFilterDataSet), "property filterData should not have already been set");
      result_->SetFilterData(std::move(value));
      return CastState<kFilterDataSet>();
    }

    AttributionReportingSourceRegistrationBuilder<STATE | kAggregationKeysSet>& SetAggregationKeys(std::vector<std::unique_ptr<::headless::storage::AttributionReportingAggregationKeysEntry>> value) {
      static_assert(!(STATE & kAggregationKeysSet), "property aggregationKeys should not have already been set");
      result_->SetAggregationKeys(std::move(value));
      return CastState<kAggregationKeysSet>();
    }

    AttributionReportingSourceRegistrationBuilder<STATE>& SetDebugKey(const std::string& value) {
      result_->SetDebugKey(value);
      return *this;
    }

    std::unique_ptr<AttributionReportingSourceRegistration> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class AttributionReportingSourceRegistration;
    AttributionReportingSourceRegistrationBuilder() : result_(new AttributionReportingSourceRegistration()) { }

    template<int STEP> AttributionReportingSourceRegistrationBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<AttributionReportingSourceRegistrationBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<AttributionReportingSourceRegistration> result_;
  };

  static AttributionReportingSourceRegistrationBuilder<0> Builder() {
    return AttributionReportingSourceRegistrationBuilder<0>();
  }

 private:
  AttributionReportingSourceRegistration() { }

  double time_;
  int expiry_;
  std::unique_ptr<::headless::storage::AttributionReportingEventReportWindows> event_report_windows_;
  int aggregatable_report_window_;
  ::headless::storage::AttributionReportingSourceType type_;
  std::string source_origin_;
  std::string reporting_origin_;
  std::vector<std::string> destination_sites_;
  std::string event_id_;
  std::string priority_;
  std::vector<std::unique_ptr<::headless::storage::AttributionReportingFilterDataEntry>> filter_data_;
  std::vector<std::unique_ptr<::headless::storage::AttributionReportingAggregationKeysEntry>> aggregation_keys_;
  absl::optional<std::string> debug_key_;
};


// Parameters for the GetStorageKeyForFrame command.
class HEADLESS_EXPORT GetStorageKeyForFrameParams {
 public:
  static std::unique_ptr<GetStorageKeyForFrameParams> Parse(const base::Value& value, ErrorReporter* errors);

  GetStorageKeyForFrameParams(const GetStorageKeyForFrameParams&) = delete;
  GetStorageKeyForFrameParams& operator=(const GetStorageKeyForFrameParams&) = delete;

  ~GetStorageKeyForFrameParams() { }


  std::string GetFrameId() const { return frame_id_; }
  void SetFrameId(const std::string& value) { frame_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<GetStorageKeyForFrameParams> Clone() const;

  template<int STATE>
  class GetStorageKeyForFrameParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kFrameIdSet = 1 << 1,
      kAllRequiredFieldsSet = (kFrameIdSet | 0)
    };

    GetStorageKeyForFrameParamsBuilder<STATE | kFrameIdSet>& SetFrameId(const std::string& value) {
      static_assert(!(STATE & kFrameIdSet), "property frameId should not have already been set");
      result_->SetFrameId(value);
      return CastState<kFrameIdSet>();
    }

    std::unique_ptr<GetStorageKeyForFrameParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetStorageKeyForFrameParams;
    GetStorageKeyForFrameParamsBuilder() : result_(new GetStorageKeyForFrameParams()) { }

    template<int STEP> GetStorageKeyForFrameParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetStorageKeyForFrameParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetStorageKeyForFrameParams> result_;
  };

  static GetStorageKeyForFrameParamsBuilder<0> Builder() {
    return GetStorageKeyForFrameParamsBuilder<0>();
  }

 private:
  GetStorageKeyForFrameParams() { }

  std::string frame_id_;
};


// Result for the GetStorageKeyForFrame command.
class HEADLESS_EXPORT GetStorageKeyForFrameResult {
 public:
  static std::unique_ptr<GetStorageKeyForFrameResult> Parse(const base::Value& value, ErrorReporter* errors);

  GetStorageKeyForFrameResult(const GetStorageKeyForFrameResult&) = delete;
  GetStorageKeyForFrameResult& operator=(const GetStorageKeyForFrameResult&) = delete;

  ~GetStorageKeyForFrameResult() { }


  std::string GetStorageKey() const { return storage_key_; }
  void SetStorageKey(const std::string& value) { storage_key_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<GetStorageKeyForFrameResult> Clone() const;

  template<int STATE>
  class GetStorageKeyForFrameResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kStorageKeySet = 1 << 1,
      kAllRequiredFieldsSet = (kStorageKeySet | 0)
    };

    GetStorageKeyForFrameResultBuilder<STATE | kStorageKeySet>& SetStorageKey(const std::string& value) {
      static_assert(!(STATE & kStorageKeySet), "property storageKey should not have already been set");
      result_->SetStorageKey(value);
      return CastState<kStorageKeySet>();
    }

    std::unique_ptr<GetStorageKeyForFrameResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetStorageKeyForFrameResult;
    GetStorageKeyForFrameResultBuilder() : result_(new GetStorageKeyForFrameResult()) { }

    template<int STEP> GetStorageKeyForFrameResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetStorageKeyForFrameResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetStorageKeyForFrameResult> result_;
  };

  static GetStorageKeyForFrameResultBuilder<0> Builder() {
    return GetStorageKeyForFrameResultBuilder<0>();
  }

 private:
  GetStorageKeyForFrameResult() { }

  std::string storage_key_;
};


// Parameters for the ClearDataForOrigin command.
class HEADLESS_EXPORT ClearDataForOriginParams {
 public:
  static std::unique_ptr<ClearDataForOriginParams> Parse(const base::Value& value, ErrorReporter* errors);

  ClearDataForOriginParams(const ClearDataForOriginParams&) = delete;
  ClearDataForOriginParams& operator=(const ClearDataForOriginParams&) = delete;

  ~ClearDataForOriginParams() { }


  // Security origin.
  std::string GetOrigin() const { return origin_; }
  void SetOrigin(const std::string& value) { origin_ = value; }

  // Comma separated list of StorageType to clear.
  std::string GetStorageTypes() const { return storage_types_; }
  void SetStorageTypes(const std::string& value) { storage_types_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<ClearDataForOriginParams> Clone() const;

  template<int STATE>
  class ClearDataForOriginParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kOriginSet = 1 << 1,
    kStorageTypesSet = 1 << 2,
      kAllRequiredFieldsSet = (kOriginSet | kStorageTypesSet | 0)
    };

    ClearDataForOriginParamsBuilder<STATE | kOriginSet>& SetOrigin(const std::string& value) {
      static_assert(!(STATE & kOriginSet), "property origin should not have already been set");
      result_->SetOrigin(value);
      return CastState<kOriginSet>();
    }

    ClearDataForOriginParamsBuilder<STATE | kStorageTypesSet>& SetStorageTypes(const std::string& value) {
      static_assert(!(STATE & kStorageTypesSet), "property storageTypes should not have already been set");
      result_->SetStorageTypes(value);
      return CastState<kStorageTypesSet>();
    }

    std::unique_ptr<ClearDataForOriginParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ClearDataForOriginParams;
    ClearDataForOriginParamsBuilder() : result_(new ClearDataForOriginParams()) { }

    template<int STEP> ClearDataForOriginParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ClearDataForOriginParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ClearDataForOriginParams> result_;
  };

  static ClearDataForOriginParamsBuilder<0> Builder() {
    return ClearDataForOriginParamsBuilder<0>();
  }

 private:
  ClearDataForOriginParams() { }

  std::string origin_;
  std::string storage_types_;
};


// Result for the ClearDataForOrigin command.
class HEADLESS_EXPORT ClearDataForOriginResult {
 public:
  static std::unique_ptr<ClearDataForOriginResult> Parse(const base::Value& value, ErrorReporter* errors);

  ClearDataForOriginResult(const ClearDataForOriginResult&) = delete;
  ClearDataForOriginResult& operator=(const ClearDataForOriginResult&) = delete;

  ~ClearDataForOriginResult() { }


  base::Value Serialize() const;
  std::unique_ptr<ClearDataForOriginResult> Clone() const;

  template<int STATE>
  class ClearDataForOriginResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<ClearDataForOriginResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ClearDataForOriginResult;
    ClearDataForOriginResultBuilder() : result_(new ClearDataForOriginResult()) { }

    template<int STEP> ClearDataForOriginResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ClearDataForOriginResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ClearDataForOriginResult> result_;
  };

  static ClearDataForOriginResultBuilder<0> Builder() {
    return ClearDataForOriginResultBuilder<0>();
  }

 private:
  ClearDataForOriginResult() { }

};


// Parameters for the ClearDataForStorageKey command.
class HEADLESS_EXPORT ClearDataForStorageKeyParams {
 public:
  static std::unique_ptr<ClearDataForStorageKeyParams> Parse(const base::Value& value, ErrorReporter* errors);

  ClearDataForStorageKeyParams(const ClearDataForStorageKeyParams&) = delete;
  ClearDataForStorageKeyParams& operator=(const ClearDataForStorageKeyParams&) = delete;

  ~ClearDataForStorageKeyParams() { }


  // Storage key.
  std::string GetStorageKey() const { return storage_key_; }
  void SetStorageKey(const std::string& value) { storage_key_ = value; }

  // Comma separated list of StorageType to clear.
  std::string GetStorageTypes() const { return storage_types_; }
  void SetStorageTypes(const std::string& value) { storage_types_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<ClearDataForStorageKeyParams> Clone() const;

  template<int STATE>
  class ClearDataForStorageKeyParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kStorageKeySet = 1 << 1,
    kStorageTypesSet = 1 << 2,
      kAllRequiredFieldsSet = (kStorageKeySet | kStorageTypesSet | 0)
    };

    ClearDataForStorageKeyParamsBuilder<STATE | kStorageKeySet>& SetStorageKey(const std::string& value) {
      static_assert(!(STATE & kStorageKeySet), "property storageKey should not have already been set");
      result_->SetStorageKey(value);
      return CastState<kStorageKeySet>();
    }

    ClearDataForStorageKeyParamsBuilder<STATE | kStorageTypesSet>& SetStorageTypes(const std::string& value) {
      static_assert(!(STATE & kStorageTypesSet), "property storageTypes should not have already been set");
      result_->SetStorageTypes(value);
      return CastState<kStorageTypesSet>();
    }

    std::unique_ptr<ClearDataForStorageKeyParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ClearDataForStorageKeyParams;
    ClearDataForStorageKeyParamsBuilder() : result_(new ClearDataForStorageKeyParams()) { }

    template<int STEP> ClearDataForStorageKeyParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ClearDataForStorageKeyParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ClearDataForStorageKeyParams> result_;
  };

  static ClearDataForStorageKeyParamsBuilder<0> Builder() {
    return ClearDataForStorageKeyParamsBuilder<0>();
  }

 private:
  ClearDataForStorageKeyParams() { }

  std::string storage_key_;
  std::string storage_types_;
};


// Result for the ClearDataForStorageKey command.
class HEADLESS_EXPORT ClearDataForStorageKeyResult {
 public:
  static std::unique_ptr<ClearDataForStorageKeyResult> Parse(const base::Value& value, ErrorReporter* errors);

  ClearDataForStorageKeyResult(const ClearDataForStorageKeyResult&) = delete;
  ClearDataForStorageKeyResult& operator=(const ClearDataForStorageKeyResult&) = delete;

  ~ClearDataForStorageKeyResult() { }


  base::Value Serialize() const;
  std::unique_ptr<ClearDataForStorageKeyResult> Clone() const;

  template<int STATE>
  class ClearDataForStorageKeyResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<ClearDataForStorageKeyResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ClearDataForStorageKeyResult;
    ClearDataForStorageKeyResultBuilder() : result_(new ClearDataForStorageKeyResult()) { }

    template<int STEP> ClearDataForStorageKeyResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ClearDataForStorageKeyResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ClearDataForStorageKeyResult> result_;
  };

  static ClearDataForStorageKeyResultBuilder<0> Builder() {
    return ClearDataForStorageKeyResultBuilder<0>();
  }

 private:
  ClearDataForStorageKeyResult() { }

};


// Parameters for the GetCookies command.
class HEADLESS_EXPORT GetCookiesParams {
 public:
  static std::unique_ptr<GetCookiesParams> Parse(const base::Value& value, ErrorReporter* errors);

  GetCookiesParams(const GetCookiesParams&) = delete;
  GetCookiesParams& operator=(const GetCookiesParams&) = delete;

  ~GetCookiesParams() { }


  // Browser context to use when called on the browser endpoint.
  bool HasBrowserContextId() const { return !!browser_context_id_; }
  std::string GetBrowserContextId() const { DCHECK(HasBrowserContextId()); return browser_context_id_.value(); }
  void SetBrowserContextId(const std::string& value) { browser_context_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<GetCookiesParams> Clone() const;

  template<int STATE>
  class GetCookiesParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    GetCookiesParamsBuilder<STATE>& SetBrowserContextId(const std::string& value) {
      result_->SetBrowserContextId(value);
      return *this;
    }

    std::unique_ptr<GetCookiesParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetCookiesParams;
    GetCookiesParamsBuilder() : result_(new GetCookiesParams()) { }

    template<int STEP> GetCookiesParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetCookiesParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetCookiesParams> result_;
  };

  static GetCookiesParamsBuilder<0> Builder() {
    return GetCookiesParamsBuilder<0>();
  }

 private:
  GetCookiesParams() { }

  absl::optional<std::string> browser_context_id_;
};


// Result for the GetCookies command.
class HEADLESS_EXPORT GetCookiesResult {
 public:
  static std::unique_ptr<GetCookiesResult> Parse(const base::Value& value, ErrorReporter* errors);

  GetCookiesResult(const GetCookiesResult&) = delete;
  GetCookiesResult& operator=(const GetCookiesResult&) = delete;

  ~GetCookiesResult() { }


  // Array of cookie objects.
  const std::vector<std::unique_ptr<::headless::network::Cookie>>* GetCookies() const { return &cookies_; }
  void SetCookies(std::vector<std::unique_ptr<::headless::network::Cookie>> value) { cookies_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<GetCookiesResult> Clone() const;

  template<int STATE>
  class GetCookiesResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kCookiesSet = 1 << 1,
      kAllRequiredFieldsSet = (kCookiesSet | 0)
    };

    GetCookiesResultBuilder<STATE | kCookiesSet>& SetCookies(std::vector<std::unique_ptr<::headless::network::Cookie>> value) {
      static_assert(!(STATE & kCookiesSet), "property cookies should not have already been set");
      result_->SetCookies(std::move(value));
      return CastState<kCookiesSet>();
    }

    std::unique_ptr<GetCookiesResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetCookiesResult;
    GetCookiesResultBuilder() : result_(new GetCookiesResult()) { }

    template<int STEP> GetCookiesResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetCookiesResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetCookiesResult> result_;
  };

  static GetCookiesResultBuilder<0> Builder() {
    return GetCookiesResultBuilder<0>();
  }

 private:
  GetCookiesResult() { }

  std::vector<std::unique_ptr<::headless::network::Cookie>> cookies_;
};


// Parameters for the SetCookies command.
class HEADLESS_EXPORT SetCookiesParams {
 public:
  static std::unique_ptr<SetCookiesParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetCookiesParams(const SetCookiesParams&) = delete;
  SetCookiesParams& operator=(const SetCookiesParams&) = delete;

  ~SetCookiesParams() { }


  // Cookies to be set.
  const std::vector<std::unique_ptr<::headless::network::CookieParam>>* GetCookies() const { return &cookies_; }
  void SetCookies(std::vector<std::unique_ptr<::headless::network::CookieParam>> value) { cookies_ = std::move(value); }

  // Browser context to use when called on the browser endpoint.
  bool HasBrowserContextId() const { return !!browser_context_id_; }
  std::string GetBrowserContextId() const { DCHECK(HasBrowserContextId()); return browser_context_id_.value(); }
  void SetBrowserContextId(const std::string& value) { browser_context_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetCookiesParams> Clone() const;

  template<int STATE>
  class SetCookiesParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kCookiesSet = 1 << 1,
      kAllRequiredFieldsSet = (kCookiesSet | 0)
    };

    SetCookiesParamsBuilder<STATE | kCookiesSet>& SetCookies(std::vector<std::unique_ptr<::headless::network::CookieParam>> value) {
      static_assert(!(STATE & kCookiesSet), "property cookies should not have already been set");
      result_->SetCookies(std::move(value));
      return CastState<kCookiesSet>();
    }

    SetCookiesParamsBuilder<STATE>& SetBrowserContextId(const std::string& value) {
      result_->SetBrowserContextId(value);
      return *this;
    }

    std::unique_ptr<SetCookiesParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetCookiesParams;
    SetCookiesParamsBuilder() : result_(new SetCookiesParams()) { }

    template<int STEP> SetCookiesParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetCookiesParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetCookiesParams> result_;
  };

  static SetCookiesParamsBuilder<0> Builder() {
    return SetCookiesParamsBuilder<0>();
  }

 private:
  SetCookiesParams() { }

  std::vector<std::unique_ptr<::headless::network::CookieParam>> cookies_;
  absl::optional<std::string> browser_context_id_;
};


// Result for the SetCookies command.
class HEADLESS_EXPORT SetCookiesResult {
 public:
  static std::unique_ptr<SetCookiesResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetCookiesResult(const SetCookiesResult&) = delete;
  SetCookiesResult& operator=(const SetCookiesResult&) = delete;

  ~SetCookiesResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetCookiesResult> Clone() const;

  template<int STATE>
  class SetCookiesResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetCookiesResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetCookiesResult;
    SetCookiesResultBuilder() : result_(new SetCookiesResult()) { }

    template<int STEP> SetCookiesResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetCookiesResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetCookiesResult> result_;
  };

  static SetCookiesResultBuilder<0> Builder() {
    return SetCookiesResultBuilder<0>();
  }

 private:
  SetCookiesResult() { }

};


// Parameters for the ClearCookies command.
class HEADLESS_EXPORT ClearCookiesParams {
 public:
  static std::unique_ptr<ClearCookiesParams> Parse(const base::Value& value, ErrorReporter* errors);

  ClearCookiesParams(const ClearCookiesParams&) = delete;
  ClearCookiesParams& operator=(const ClearCookiesParams&) = delete;

  ~ClearCookiesParams() { }


  // Browser context to use when called on the browser endpoint.
  bool HasBrowserContextId() const { return !!browser_context_id_; }
  std::string GetBrowserContextId() const { DCHECK(HasBrowserContextId()); return browser_context_id_.value(); }
  void SetBrowserContextId(const std::string& value) { browser_context_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<ClearCookiesParams> Clone() const;

  template<int STATE>
  class ClearCookiesParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    ClearCookiesParamsBuilder<STATE>& SetBrowserContextId(const std::string& value) {
      result_->SetBrowserContextId(value);
      return *this;
    }

    std::unique_ptr<ClearCookiesParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ClearCookiesParams;
    ClearCookiesParamsBuilder() : result_(new ClearCookiesParams()) { }

    template<int STEP> ClearCookiesParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ClearCookiesParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ClearCookiesParams> result_;
  };

  static ClearCookiesParamsBuilder<0> Builder() {
    return ClearCookiesParamsBuilder<0>();
  }

 private:
  ClearCookiesParams() { }

  absl::optional<std::string> browser_context_id_;
};


// Result for the ClearCookies command.
class HEADLESS_EXPORT ClearCookiesResult {
 public:
  static std::unique_ptr<ClearCookiesResult> Parse(const base::Value& value, ErrorReporter* errors);

  ClearCookiesResult(const ClearCookiesResult&) = delete;
  ClearCookiesResult& operator=(const ClearCookiesResult&) = delete;

  ~ClearCookiesResult() { }


  base::Value Serialize() const;
  std::unique_ptr<ClearCookiesResult> Clone() const;

  template<int STATE>
  class ClearCookiesResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<ClearCookiesResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ClearCookiesResult;
    ClearCookiesResultBuilder() : result_(new ClearCookiesResult()) { }

    template<int STEP> ClearCookiesResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ClearCookiesResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ClearCookiesResult> result_;
  };

  static ClearCookiesResultBuilder<0> Builder() {
    return ClearCookiesResultBuilder<0>();
  }

 private:
  ClearCookiesResult() { }

};


// Parameters for the GetUsageAndQuota command.
class HEADLESS_EXPORT GetUsageAndQuotaParams {
 public:
  static std::unique_ptr<GetUsageAndQuotaParams> Parse(const base::Value& value, ErrorReporter* errors);

  GetUsageAndQuotaParams(const GetUsageAndQuotaParams&) = delete;
  GetUsageAndQuotaParams& operator=(const GetUsageAndQuotaParams&) = delete;

  ~GetUsageAndQuotaParams() { }


  // Security origin.
  std::string GetOrigin() const { return origin_; }
  void SetOrigin(const std::string& value) { origin_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<GetUsageAndQuotaParams> Clone() const;

  template<int STATE>
  class GetUsageAndQuotaParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kOriginSet = 1 << 1,
      kAllRequiredFieldsSet = (kOriginSet | 0)
    };

    GetUsageAndQuotaParamsBuilder<STATE | kOriginSet>& SetOrigin(const std::string& value) {
      static_assert(!(STATE & kOriginSet), "property origin should not have already been set");
      result_->SetOrigin(value);
      return CastState<kOriginSet>();
    }

    std::unique_ptr<GetUsageAndQuotaParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetUsageAndQuotaParams;
    GetUsageAndQuotaParamsBuilder() : result_(new GetUsageAndQuotaParams()) { }

    template<int STEP> GetUsageAndQuotaParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetUsageAndQuotaParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetUsageAndQuotaParams> result_;
  };

  static GetUsageAndQuotaParamsBuilder<0> Builder() {
    return GetUsageAndQuotaParamsBuilder<0>();
  }

 private:
  GetUsageAndQuotaParams() { }

  std::string origin_;
};


// Result for the GetUsageAndQuota command.
class HEADLESS_EXPORT GetUsageAndQuotaResult {
 public:
  static std::unique_ptr<GetUsageAndQuotaResult> Parse(const base::Value& value, ErrorReporter* errors);

  GetUsageAndQuotaResult(const GetUsageAndQuotaResult&) = delete;
  GetUsageAndQuotaResult& operator=(const GetUsageAndQuotaResult&) = delete;

  ~GetUsageAndQuotaResult() { }


  // Storage usage (bytes).
  double GetUsage() const { return usage_; }
  void SetUsage(double value) { usage_ = value; }

  // Storage quota (bytes).
  double GetQuota() const { return quota_; }
  void SetQuota(double value) { quota_ = value; }

  // Whether or not the origin has an active storage quota override
  bool GetOverrideActive() const { return override_active_; }
  void SetOverrideActive(bool value) { override_active_ = value; }

  // Storage usage per type (bytes).
  const std::vector<std::unique_ptr<::headless::storage::UsageForType>>* GetUsageBreakdown() const { return &usage_breakdown_; }
  void SetUsageBreakdown(std::vector<std::unique_ptr<::headless::storage::UsageForType>> value) { usage_breakdown_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<GetUsageAndQuotaResult> Clone() const;

  template<int STATE>
  class GetUsageAndQuotaResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kUsageSet = 1 << 1,
    kQuotaSet = 1 << 2,
    kOverrideActiveSet = 1 << 3,
    kUsageBreakdownSet = 1 << 4,
      kAllRequiredFieldsSet = (kUsageSet | kQuotaSet | kOverrideActiveSet | kUsageBreakdownSet | 0)
    };

    GetUsageAndQuotaResultBuilder<STATE | kUsageSet>& SetUsage(double value) {
      static_assert(!(STATE & kUsageSet), "property usage should not have already been set");
      result_->SetUsage(value);
      return CastState<kUsageSet>();
    }

    GetUsageAndQuotaResultBuilder<STATE | kQuotaSet>& SetQuota(double value) {
      static_assert(!(STATE & kQuotaSet), "property quota should not have already been set");
      result_->SetQuota(value);
      return CastState<kQuotaSet>();
    }

    GetUsageAndQuotaResultBuilder<STATE | kOverrideActiveSet>& SetOverrideActive(bool value) {
      static_assert(!(STATE & kOverrideActiveSet), "property overrideActive should not have already been set");
      result_->SetOverrideActive(value);
      return CastState<kOverrideActiveSet>();
    }

    GetUsageAndQuotaResultBuilder<STATE | kUsageBreakdownSet>& SetUsageBreakdown(std::vector<std::unique_ptr<::headless::storage::UsageForType>> value) {
      static_assert(!(STATE & kUsageBreakdownSet), "property usageBreakdown should not have already been set");
      result_->SetUsageBreakdown(std::move(value));
      return CastState<kUsageBreakdownSet>();
    }

    std::unique_ptr<GetUsageAndQuotaResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetUsageAndQuotaResult;
    GetUsageAndQuotaResultBuilder() : result_(new GetUsageAndQuotaResult()) { }

    template<int STEP> GetUsageAndQuotaResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetUsageAndQuotaResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetUsageAndQuotaResult> result_;
  };

  static GetUsageAndQuotaResultBuilder<0> Builder() {
    return GetUsageAndQuotaResultBuilder<0>();
  }

 private:
  GetUsageAndQuotaResult() { }

  double usage_;
  double quota_;
  bool override_active_;
  std::vector<std::unique_ptr<::headless::storage::UsageForType>> usage_breakdown_;
};


// Parameters for the OverrideQuotaForOrigin command.
class HEADLESS_EXPORT OverrideQuotaForOriginParams {
 public:
  static std::unique_ptr<OverrideQuotaForOriginParams> Parse(const base::Value& value, ErrorReporter* errors);

  OverrideQuotaForOriginParams(const OverrideQuotaForOriginParams&) = delete;
  OverrideQuotaForOriginParams& operator=(const OverrideQuotaForOriginParams&) = delete;

  ~OverrideQuotaForOriginParams() { }


  // Security origin.
  std::string GetOrigin() const { return origin_; }
  void SetOrigin(const std::string& value) { origin_ = value; }

  // The quota size (in bytes) to override the original quota with.
  // If this is called multiple times, the overridden quota will be equal to
  // the quotaSize provided in the final call. If this is called without
  // specifying a quotaSize, the quota will be reset to the default value for
  // the specified origin. If this is called multiple times with different
  // origins, the override will be maintained for each origin until it is
  // disabled (called without a quotaSize).
  bool HasQuotaSize() const { return !!quota_size_; }
  double GetQuotaSize() const { DCHECK(HasQuotaSize()); return quota_size_.value(); }
  void SetQuotaSize(double value) { quota_size_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<OverrideQuotaForOriginParams> Clone() const;

  template<int STATE>
  class OverrideQuotaForOriginParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kOriginSet = 1 << 1,
      kAllRequiredFieldsSet = (kOriginSet | 0)
    };

    OverrideQuotaForOriginParamsBuilder<STATE | kOriginSet>& SetOrigin(const std::string& value) {
      static_assert(!(STATE & kOriginSet), "property origin should not have already been set");
      result_->SetOrigin(value);
      return CastState<kOriginSet>();
    }

    OverrideQuotaForOriginParamsBuilder<STATE>& SetQuotaSize(double value) {
      result_->SetQuotaSize(value);
      return *this;
    }

    std::unique_ptr<OverrideQuotaForOriginParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class OverrideQuotaForOriginParams;
    OverrideQuotaForOriginParamsBuilder() : result_(new OverrideQuotaForOriginParams()) { }

    template<int STEP> OverrideQuotaForOriginParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<OverrideQuotaForOriginParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<OverrideQuotaForOriginParams> result_;
  };

  static OverrideQuotaForOriginParamsBuilder<0> Builder() {
    return OverrideQuotaForOriginParamsBuilder<0>();
  }

 private:
  OverrideQuotaForOriginParams() { }

  std::string origin_;
  absl::optional<double> quota_size_;
};


// Result for the OverrideQuotaForOrigin command.
class HEADLESS_EXPORT OverrideQuotaForOriginResult {
 public:
  static std::unique_ptr<OverrideQuotaForOriginResult> Parse(const base::Value& value, ErrorReporter* errors);

  OverrideQuotaForOriginResult(const OverrideQuotaForOriginResult&) = delete;
  OverrideQuotaForOriginResult& operator=(const OverrideQuotaForOriginResult&) = delete;

  ~OverrideQuotaForOriginResult() { }


  base::Value Serialize() const;
  std::unique_ptr<OverrideQuotaForOriginResult> Clone() const;

  template<int STATE>
  class OverrideQuotaForOriginResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<OverrideQuotaForOriginResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class OverrideQuotaForOriginResult;
    OverrideQuotaForOriginResultBuilder() : result_(new OverrideQuotaForOriginResult()) { }

    template<int STEP> OverrideQuotaForOriginResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<OverrideQuotaForOriginResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<OverrideQuotaForOriginResult> result_;
  };

  static OverrideQuotaForOriginResultBuilder<0> Builder() {
    return OverrideQuotaForOriginResultBuilder<0>();
  }

 private:
  OverrideQuotaForOriginResult() { }

};


// Parameters for the TrackCacheStorageForOrigin command.
class HEADLESS_EXPORT TrackCacheStorageForOriginParams {
 public:
  static std::unique_ptr<TrackCacheStorageForOriginParams> Parse(const base::Value& value, ErrorReporter* errors);

  TrackCacheStorageForOriginParams(const TrackCacheStorageForOriginParams&) = delete;
  TrackCacheStorageForOriginParams& operator=(const TrackCacheStorageForOriginParams&) = delete;

  ~TrackCacheStorageForOriginParams() { }


  // Security origin.
  std::string GetOrigin() const { return origin_; }
  void SetOrigin(const std::string& value) { origin_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<TrackCacheStorageForOriginParams> Clone() const;

  template<int STATE>
  class TrackCacheStorageForOriginParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kOriginSet = 1 << 1,
      kAllRequiredFieldsSet = (kOriginSet | 0)
    };

    TrackCacheStorageForOriginParamsBuilder<STATE | kOriginSet>& SetOrigin(const std::string& value) {
      static_assert(!(STATE & kOriginSet), "property origin should not have already been set");
      result_->SetOrigin(value);
      return CastState<kOriginSet>();
    }

    std::unique_ptr<TrackCacheStorageForOriginParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class TrackCacheStorageForOriginParams;
    TrackCacheStorageForOriginParamsBuilder() : result_(new TrackCacheStorageForOriginParams()) { }

    template<int STEP> TrackCacheStorageForOriginParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<TrackCacheStorageForOriginParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<TrackCacheStorageForOriginParams> result_;
  };

  static TrackCacheStorageForOriginParamsBuilder<0> Builder() {
    return TrackCacheStorageForOriginParamsBuilder<0>();
  }

 private:
  TrackCacheStorageForOriginParams() { }

  std::string origin_;
};


// Result for the TrackCacheStorageForOrigin command.
class HEADLESS_EXPORT TrackCacheStorageForOriginResult {
 public:
  static std::unique_ptr<TrackCacheStorageForOriginResult> Parse(const base::Value& value, ErrorReporter* errors);

  TrackCacheStorageForOriginResult(const TrackCacheStorageForOriginResult&) = delete;
  TrackCacheStorageForOriginResult& operator=(const TrackCacheStorageForOriginResult&) = delete;

  ~TrackCacheStorageForOriginResult() { }


  base::Value Serialize() const;
  std::unique_ptr<TrackCacheStorageForOriginResult> Clone() const;

  template<int STATE>
  class TrackCacheStorageForOriginResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<TrackCacheStorageForOriginResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class TrackCacheStorageForOriginResult;
    TrackCacheStorageForOriginResultBuilder() : result_(new TrackCacheStorageForOriginResult()) { }

    template<int STEP> TrackCacheStorageForOriginResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<TrackCacheStorageForOriginResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<TrackCacheStorageForOriginResult> result_;
  };

  static TrackCacheStorageForOriginResultBuilder<0> Builder() {
    return TrackCacheStorageForOriginResultBuilder<0>();
  }

 private:
  TrackCacheStorageForOriginResult() { }

};


// Parameters for the TrackCacheStorageForStorageKey command.
class HEADLESS_EXPORT TrackCacheStorageForStorageKeyParams {
 public:
  static std::unique_ptr<TrackCacheStorageForStorageKeyParams> Parse(const base::Value& value, ErrorReporter* errors);

  TrackCacheStorageForStorageKeyParams(const TrackCacheStorageForStorageKeyParams&) = delete;
  TrackCacheStorageForStorageKeyParams& operator=(const TrackCacheStorageForStorageKeyParams&) = delete;

  ~TrackCacheStorageForStorageKeyParams() { }


  // Storage key.
  std::string GetStorageKey() const { return storage_key_; }
  void SetStorageKey(const std::string& value) { storage_key_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<TrackCacheStorageForStorageKeyParams> Clone() const;

  template<int STATE>
  class TrackCacheStorageForStorageKeyParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kStorageKeySet = 1 << 1,
      kAllRequiredFieldsSet = (kStorageKeySet | 0)
    };

    TrackCacheStorageForStorageKeyParamsBuilder<STATE | kStorageKeySet>& SetStorageKey(const std::string& value) {
      static_assert(!(STATE & kStorageKeySet), "property storageKey should not have already been set");
      result_->SetStorageKey(value);
      return CastState<kStorageKeySet>();
    }

    std::unique_ptr<TrackCacheStorageForStorageKeyParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class TrackCacheStorageForStorageKeyParams;
    TrackCacheStorageForStorageKeyParamsBuilder() : result_(new TrackCacheStorageForStorageKeyParams()) { }

    template<int STEP> TrackCacheStorageForStorageKeyParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<TrackCacheStorageForStorageKeyParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<TrackCacheStorageForStorageKeyParams> result_;
  };

  static TrackCacheStorageForStorageKeyParamsBuilder<0> Builder() {
    return TrackCacheStorageForStorageKeyParamsBuilder<0>();
  }

 private:
  TrackCacheStorageForStorageKeyParams() { }

  std::string storage_key_;
};


// Result for the TrackCacheStorageForStorageKey command.
class HEADLESS_EXPORT TrackCacheStorageForStorageKeyResult {
 public:
  static std::unique_ptr<TrackCacheStorageForStorageKeyResult> Parse(const base::Value& value, ErrorReporter* errors);

  TrackCacheStorageForStorageKeyResult(const TrackCacheStorageForStorageKeyResult&) = delete;
  TrackCacheStorageForStorageKeyResult& operator=(const TrackCacheStorageForStorageKeyResult&) = delete;

  ~TrackCacheStorageForStorageKeyResult() { }


  base::Value Serialize() const;
  std::unique_ptr<TrackCacheStorageForStorageKeyResult> Clone() const;

  template<int STATE>
  class TrackCacheStorageForStorageKeyResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<TrackCacheStorageForStorageKeyResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class TrackCacheStorageForStorageKeyResult;
    TrackCacheStorageForStorageKeyResultBuilder() : result_(new TrackCacheStorageForStorageKeyResult()) { }

    template<int STEP> TrackCacheStorageForStorageKeyResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<TrackCacheStorageForStorageKeyResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<TrackCacheStorageForStorageKeyResult> result_;
  };

  static TrackCacheStorageForStorageKeyResultBuilder<0> Builder() {
    return TrackCacheStorageForStorageKeyResultBuilder<0>();
  }

 private:
  TrackCacheStorageForStorageKeyResult() { }

};


// Parameters for the TrackIndexedDBForOrigin command.
class HEADLESS_EXPORT TrackIndexedDBForOriginParams {
 public:
  static std::unique_ptr<TrackIndexedDBForOriginParams> Parse(const base::Value& value, ErrorReporter* errors);

  TrackIndexedDBForOriginParams(const TrackIndexedDBForOriginParams&) = delete;
  TrackIndexedDBForOriginParams& operator=(const TrackIndexedDBForOriginParams&) = delete;

  ~TrackIndexedDBForOriginParams() { }


  // Security origin.
  std::string GetOrigin() const { return origin_; }
  void SetOrigin(const std::string& value) { origin_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<TrackIndexedDBForOriginParams> Clone() const;

  template<int STATE>
  class TrackIndexedDBForOriginParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kOriginSet = 1 << 1,
      kAllRequiredFieldsSet = (kOriginSet | 0)
    };

    TrackIndexedDBForOriginParamsBuilder<STATE | kOriginSet>& SetOrigin(const std::string& value) {
      static_assert(!(STATE & kOriginSet), "property origin should not have already been set");
      result_->SetOrigin(value);
      return CastState<kOriginSet>();
    }

    std::unique_ptr<TrackIndexedDBForOriginParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class TrackIndexedDBForOriginParams;
    TrackIndexedDBForOriginParamsBuilder() : result_(new TrackIndexedDBForOriginParams()) { }

    template<int STEP> TrackIndexedDBForOriginParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<TrackIndexedDBForOriginParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<TrackIndexedDBForOriginParams> result_;
  };

  static TrackIndexedDBForOriginParamsBuilder<0> Builder() {
    return TrackIndexedDBForOriginParamsBuilder<0>();
  }

 private:
  TrackIndexedDBForOriginParams() { }

  std::string origin_;
};


// Result for the TrackIndexedDBForOrigin command.
class HEADLESS_EXPORT TrackIndexedDBForOriginResult {
 public:
  static std::unique_ptr<TrackIndexedDBForOriginResult> Parse(const base::Value& value, ErrorReporter* errors);

  TrackIndexedDBForOriginResult(const TrackIndexedDBForOriginResult&) = delete;
  TrackIndexedDBForOriginResult& operator=(const TrackIndexedDBForOriginResult&) = delete;

  ~TrackIndexedDBForOriginResult() { }


  base::Value Serialize() const;
  std::unique_ptr<TrackIndexedDBForOriginResult> Clone() const;

  template<int STATE>
  class TrackIndexedDBForOriginResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<TrackIndexedDBForOriginResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class TrackIndexedDBForOriginResult;
    TrackIndexedDBForOriginResultBuilder() : result_(new TrackIndexedDBForOriginResult()) { }

    template<int STEP> TrackIndexedDBForOriginResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<TrackIndexedDBForOriginResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<TrackIndexedDBForOriginResult> result_;
  };

  static TrackIndexedDBForOriginResultBuilder<0> Builder() {
    return TrackIndexedDBForOriginResultBuilder<0>();
  }

 private:
  TrackIndexedDBForOriginResult() { }

};


// Parameters for the TrackIndexedDBForStorageKey command.
class HEADLESS_EXPORT TrackIndexedDBForStorageKeyParams {
 public:
  static std::unique_ptr<TrackIndexedDBForStorageKeyParams> Parse(const base::Value& value, ErrorReporter* errors);

  TrackIndexedDBForStorageKeyParams(const TrackIndexedDBForStorageKeyParams&) = delete;
  TrackIndexedDBForStorageKeyParams& operator=(const TrackIndexedDBForStorageKeyParams&) = delete;

  ~TrackIndexedDBForStorageKeyParams() { }


  // Storage key.
  std::string GetStorageKey() const { return storage_key_; }
  void SetStorageKey(const std::string& value) { storage_key_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<TrackIndexedDBForStorageKeyParams> Clone() const;

  template<int STATE>
  class TrackIndexedDBForStorageKeyParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kStorageKeySet = 1 << 1,
      kAllRequiredFieldsSet = (kStorageKeySet | 0)
    };

    TrackIndexedDBForStorageKeyParamsBuilder<STATE | kStorageKeySet>& SetStorageKey(const std::string& value) {
      static_assert(!(STATE & kStorageKeySet), "property storageKey should not have already been set");
      result_->SetStorageKey(value);
      return CastState<kStorageKeySet>();
    }

    std::unique_ptr<TrackIndexedDBForStorageKeyParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class TrackIndexedDBForStorageKeyParams;
    TrackIndexedDBForStorageKeyParamsBuilder() : result_(new TrackIndexedDBForStorageKeyParams()) { }

    template<int STEP> TrackIndexedDBForStorageKeyParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<TrackIndexedDBForStorageKeyParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<TrackIndexedDBForStorageKeyParams> result_;
  };

  static TrackIndexedDBForStorageKeyParamsBuilder<0> Builder() {
    return TrackIndexedDBForStorageKeyParamsBuilder<0>();
  }

 private:
  TrackIndexedDBForStorageKeyParams() { }

  std::string storage_key_;
};


// Result for the TrackIndexedDBForStorageKey command.
class HEADLESS_EXPORT TrackIndexedDBForStorageKeyResult {
 public:
  static std::unique_ptr<TrackIndexedDBForStorageKeyResult> Parse(const base::Value& value, ErrorReporter* errors);

  TrackIndexedDBForStorageKeyResult(const TrackIndexedDBForStorageKeyResult&) = delete;
  TrackIndexedDBForStorageKeyResult& operator=(const TrackIndexedDBForStorageKeyResult&) = delete;

  ~TrackIndexedDBForStorageKeyResult() { }


  base::Value Serialize() const;
  std::unique_ptr<TrackIndexedDBForStorageKeyResult> Clone() const;

  template<int STATE>
  class TrackIndexedDBForStorageKeyResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<TrackIndexedDBForStorageKeyResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class TrackIndexedDBForStorageKeyResult;
    TrackIndexedDBForStorageKeyResultBuilder() : result_(new TrackIndexedDBForStorageKeyResult()) { }

    template<int STEP> TrackIndexedDBForStorageKeyResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<TrackIndexedDBForStorageKeyResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<TrackIndexedDBForStorageKeyResult> result_;
  };

  static TrackIndexedDBForStorageKeyResultBuilder<0> Builder() {
    return TrackIndexedDBForStorageKeyResultBuilder<0>();
  }

 private:
  TrackIndexedDBForStorageKeyResult() { }

};


// Parameters for the UntrackCacheStorageForOrigin command.
class HEADLESS_EXPORT UntrackCacheStorageForOriginParams {
 public:
  static std::unique_ptr<UntrackCacheStorageForOriginParams> Parse(const base::Value& value, ErrorReporter* errors);

  UntrackCacheStorageForOriginParams(const UntrackCacheStorageForOriginParams&) = delete;
  UntrackCacheStorageForOriginParams& operator=(const UntrackCacheStorageForOriginParams&) = delete;

  ~UntrackCacheStorageForOriginParams() { }


  // Security origin.
  std::string GetOrigin() const { return origin_; }
  void SetOrigin(const std::string& value) { origin_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<UntrackCacheStorageForOriginParams> Clone() const;

  template<int STATE>
  class UntrackCacheStorageForOriginParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kOriginSet = 1 << 1,
      kAllRequiredFieldsSet = (kOriginSet | 0)
    };

    UntrackCacheStorageForOriginParamsBuilder<STATE | kOriginSet>& SetOrigin(const std::string& value) {
      static_assert(!(STATE & kOriginSet), "property origin should not have already been set");
      result_->SetOrigin(value);
      return CastState<kOriginSet>();
    }

    std::unique_ptr<UntrackCacheStorageForOriginParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class UntrackCacheStorageForOriginParams;
    UntrackCacheStorageForOriginParamsBuilder() : result_(new UntrackCacheStorageForOriginParams()) { }

    template<int STEP> UntrackCacheStorageForOriginParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<UntrackCacheStorageForOriginParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<UntrackCacheStorageForOriginParams> result_;
  };

  static UntrackCacheStorageForOriginParamsBuilder<0> Builder() {
    return UntrackCacheStorageForOriginParamsBuilder<0>();
  }

 private:
  UntrackCacheStorageForOriginParams() { }

  std::string origin_;
};


// Result for the UntrackCacheStorageForOrigin command.
class HEADLESS_EXPORT UntrackCacheStorageForOriginResult {
 public:
  static std::unique_ptr<UntrackCacheStorageForOriginResult> Parse(const base::Value& value, ErrorReporter* errors);

  UntrackCacheStorageForOriginResult(const UntrackCacheStorageForOriginResult&) = delete;
  UntrackCacheStorageForOriginResult& operator=(const UntrackCacheStorageForOriginResult&) = delete;

  ~UntrackCacheStorageForOriginResult() { }


  base::Value Serialize() const;
  std::unique_ptr<UntrackCacheStorageForOriginResult> Clone() const;

  template<int STATE>
  class UntrackCacheStorageForOriginResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<UntrackCacheStorageForOriginResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class UntrackCacheStorageForOriginResult;
    UntrackCacheStorageForOriginResultBuilder() : result_(new UntrackCacheStorageForOriginResult()) { }

    template<int STEP> UntrackCacheStorageForOriginResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<UntrackCacheStorageForOriginResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<UntrackCacheStorageForOriginResult> result_;
  };

  static UntrackCacheStorageForOriginResultBuilder<0> Builder() {
    return UntrackCacheStorageForOriginResultBuilder<0>();
  }

 private:
  UntrackCacheStorageForOriginResult() { }

};


// Parameters for the UntrackCacheStorageForStorageKey command.
class HEADLESS_EXPORT UntrackCacheStorageForStorageKeyParams {
 public:
  static std::unique_ptr<UntrackCacheStorageForStorageKeyParams> Parse(const base::Value& value, ErrorReporter* errors);

  UntrackCacheStorageForStorageKeyParams(const UntrackCacheStorageForStorageKeyParams&) = delete;
  UntrackCacheStorageForStorageKeyParams& operator=(const UntrackCacheStorageForStorageKeyParams&) = delete;

  ~UntrackCacheStorageForStorageKeyParams() { }


  // Storage key.
  std::string GetStorageKey() const { return storage_key_; }
  void SetStorageKey(const std::string& value) { storage_key_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<UntrackCacheStorageForStorageKeyParams> Clone() const;

  template<int STATE>
  class UntrackCacheStorageForStorageKeyParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kStorageKeySet = 1 << 1,
      kAllRequiredFieldsSet = (kStorageKeySet | 0)
    };

    UntrackCacheStorageForStorageKeyParamsBuilder<STATE | kStorageKeySet>& SetStorageKey(const std::string& value) {
      static_assert(!(STATE & kStorageKeySet), "property storageKey should not have already been set");
      result_->SetStorageKey(value);
      return CastState<kStorageKeySet>();
    }

    std::unique_ptr<UntrackCacheStorageForStorageKeyParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class UntrackCacheStorageForStorageKeyParams;
    UntrackCacheStorageForStorageKeyParamsBuilder() : result_(new UntrackCacheStorageForStorageKeyParams()) { }

    template<int STEP> UntrackCacheStorageForStorageKeyParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<UntrackCacheStorageForStorageKeyParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<UntrackCacheStorageForStorageKeyParams> result_;
  };

  static UntrackCacheStorageForStorageKeyParamsBuilder<0> Builder() {
    return UntrackCacheStorageForStorageKeyParamsBuilder<0>();
  }

 private:
  UntrackCacheStorageForStorageKeyParams() { }

  std::string storage_key_;
};


// Result for the UntrackCacheStorageForStorageKey command.
class HEADLESS_EXPORT UntrackCacheStorageForStorageKeyResult {
 public:
  static std::unique_ptr<UntrackCacheStorageForStorageKeyResult> Parse(const base::Value& value, ErrorReporter* errors);

  UntrackCacheStorageForStorageKeyResult(const UntrackCacheStorageForStorageKeyResult&) = delete;
  UntrackCacheStorageForStorageKeyResult& operator=(const UntrackCacheStorageForStorageKeyResult&) = delete;

  ~UntrackCacheStorageForStorageKeyResult() { }


  base::Value Serialize() const;
  std::unique_ptr<UntrackCacheStorageForStorageKeyResult> Clone() const;

  template<int STATE>
  class UntrackCacheStorageForStorageKeyResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<UntrackCacheStorageForStorageKeyResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class UntrackCacheStorageForStorageKeyResult;
    UntrackCacheStorageForStorageKeyResultBuilder() : result_(new UntrackCacheStorageForStorageKeyResult()) { }

    template<int STEP> UntrackCacheStorageForStorageKeyResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<UntrackCacheStorageForStorageKeyResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<UntrackCacheStorageForStorageKeyResult> result_;
  };

  static UntrackCacheStorageForStorageKeyResultBuilder<0> Builder() {
    return UntrackCacheStorageForStorageKeyResultBuilder<0>();
  }

 private:
  UntrackCacheStorageForStorageKeyResult() { }

};


// Parameters for the UntrackIndexedDBForOrigin command.
class HEADLESS_EXPORT UntrackIndexedDBForOriginParams {
 public:
  static std::unique_ptr<UntrackIndexedDBForOriginParams> Parse(const base::Value& value, ErrorReporter* errors);

  UntrackIndexedDBForOriginParams(const UntrackIndexedDBForOriginParams&) = delete;
  UntrackIndexedDBForOriginParams& operator=(const UntrackIndexedDBForOriginParams&) = delete;

  ~UntrackIndexedDBForOriginParams() { }


  // Security origin.
  std::string GetOrigin() const { return origin_; }
  void SetOrigin(const std::string& value) { origin_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<UntrackIndexedDBForOriginParams> Clone() const;

  template<int STATE>
  class UntrackIndexedDBForOriginParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kOriginSet = 1 << 1,
      kAllRequiredFieldsSet = (kOriginSet | 0)
    };

    UntrackIndexedDBForOriginParamsBuilder<STATE | kOriginSet>& SetOrigin(const std::string& value) {
      static_assert(!(STATE & kOriginSet), "property origin should not have already been set");
      result_->SetOrigin(value);
      return CastState<kOriginSet>();
    }

    std::unique_ptr<UntrackIndexedDBForOriginParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class UntrackIndexedDBForOriginParams;
    UntrackIndexedDBForOriginParamsBuilder() : result_(new UntrackIndexedDBForOriginParams()) { }

    template<int STEP> UntrackIndexedDBForOriginParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<UntrackIndexedDBForOriginParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<UntrackIndexedDBForOriginParams> result_;
  };

  static UntrackIndexedDBForOriginParamsBuilder<0> Builder() {
    return UntrackIndexedDBForOriginParamsBuilder<0>();
  }

 private:
  UntrackIndexedDBForOriginParams() { }

  std::string origin_;
};


// Result for the UntrackIndexedDBForOrigin command.
class HEADLESS_EXPORT UntrackIndexedDBForOriginResult {
 public:
  static std::unique_ptr<UntrackIndexedDBForOriginResult> Parse(const base::Value& value, ErrorReporter* errors);

  UntrackIndexedDBForOriginResult(const UntrackIndexedDBForOriginResult&) = delete;
  UntrackIndexedDBForOriginResult& operator=(const UntrackIndexedDBForOriginResult&) = delete;

  ~UntrackIndexedDBForOriginResult() { }


  base::Value Serialize() const;
  std::unique_ptr<UntrackIndexedDBForOriginResult> Clone() const;

  template<int STATE>
  class UntrackIndexedDBForOriginResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<UntrackIndexedDBForOriginResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class UntrackIndexedDBForOriginResult;
    UntrackIndexedDBForOriginResultBuilder() : result_(new UntrackIndexedDBForOriginResult()) { }

    template<int STEP> UntrackIndexedDBForOriginResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<UntrackIndexedDBForOriginResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<UntrackIndexedDBForOriginResult> result_;
  };

  static UntrackIndexedDBForOriginResultBuilder<0> Builder() {
    return UntrackIndexedDBForOriginResultBuilder<0>();
  }

 private:
  UntrackIndexedDBForOriginResult() { }

};


// Parameters for the UntrackIndexedDBForStorageKey command.
class HEADLESS_EXPORT UntrackIndexedDBForStorageKeyParams {
 public:
  static std::unique_ptr<UntrackIndexedDBForStorageKeyParams> Parse(const base::Value& value, ErrorReporter* errors);

  UntrackIndexedDBForStorageKeyParams(const UntrackIndexedDBForStorageKeyParams&) = delete;
  UntrackIndexedDBForStorageKeyParams& operator=(const UntrackIndexedDBForStorageKeyParams&) = delete;

  ~UntrackIndexedDBForStorageKeyParams() { }


  // Storage key.
  std::string GetStorageKey() const { return storage_key_; }
  void SetStorageKey(const std::string& value) { storage_key_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<UntrackIndexedDBForStorageKeyParams> Clone() const;

  template<int STATE>
  class UntrackIndexedDBForStorageKeyParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kStorageKeySet = 1 << 1,
      kAllRequiredFieldsSet = (kStorageKeySet | 0)
    };

    UntrackIndexedDBForStorageKeyParamsBuilder<STATE | kStorageKeySet>& SetStorageKey(const std::string& value) {
      static_assert(!(STATE & kStorageKeySet), "property storageKey should not have already been set");
      result_->SetStorageKey(value);
      return CastState<kStorageKeySet>();
    }

    std::unique_ptr<UntrackIndexedDBForStorageKeyParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class UntrackIndexedDBForStorageKeyParams;
    UntrackIndexedDBForStorageKeyParamsBuilder() : result_(new UntrackIndexedDBForStorageKeyParams()) { }

    template<int STEP> UntrackIndexedDBForStorageKeyParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<UntrackIndexedDBForStorageKeyParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<UntrackIndexedDBForStorageKeyParams> result_;
  };

  static UntrackIndexedDBForStorageKeyParamsBuilder<0> Builder() {
    return UntrackIndexedDBForStorageKeyParamsBuilder<0>();
  }

 private:
  UntrackIndexedDBForStorageKeyParams() { }

  std::string storage_key_;
};


// Result for the UntrackIndexedDBForStorageKey command.
class HEADLESS_EXPORT UntrackIndexedDBForStorageKeyResult {
 public:
  static std::unique_ptr<UntrackIndexedDBForStorageKeyResult> Parse(const base::Value& value, ErrorReporter* errors);

  UntrackIndexedDBForStorageKeyResult(const UntrackIndexedDBForStorageKeyResult&) = delete;
  UntrackIndexedDBForStorageKeyResult& operator=(const UntrackIndexedDBForStorageKeyResult&) = delete;

  ~UntrackIndexedDBForStorageKeyResult() { }


  base::Value Serialize() const;
  std::unique_ptr<UntrackIndexedDBForStorageKeyResult> Clone() const;

  template<int STATE>
  class UntrackIndexedDBForStorageKeyResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<UntrackIndexedDBForStorageKeyResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class UntrackIndexedDBForStorageKeyResult;
    UntrackIndexedDBForStorageKeyResultBuilder() : result_(new UntrackIndexedDBForStorageKeyResult()) { }

    template<int STEP> UntrackIndexedDBForStorageKeyResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<UntrackIndexedDBForStorageKeyResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<UntrackIndexedDBForStorageKeyResult> result_;
  };

  static UntrackIndexedDBForStorageKeyResultBuilder<0> Builder() {
    return UntrackIndexedDBForStorageKeyResultBuilder<0>();
  }

 private:
  UntrackIndexedDBForStorageKeyResult() { }

};


// Parameters for the GetTrustTokens command.
class HEADLESS_EXPORT GetTrustTokensParams {
 public:
  static std::unique_ptr<GetTrustTokensParams> Parse(const base::Value& value, ErrorReporter* errors);

  GetTrustTokensParams(const GetTrustTokensParams&) = delete;
  GetTrustTokensParams& operator=(const GetTrustTokensParams&) = delete;

  ~GetTrustTokensParams() { }


  base::Value Serialize() const;
  std::unique_ptr<GetTrustTokensParams> Clone() const;

  template<int STATE>
  class GetTrustTokensParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<GetTrustTokensParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetTrustTokensParams;
    GetTrustTokensParamsBuilder() : result_(new GetTrustTokensParams()) { }

    template<int STEP> GetTrustTokensParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetTrustTokensParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetTrustTokensParams> result_;
  };

  static GetTrustTokensParamsBuilder<0> Builder() {
    return GetTrustTokensParamsBuilder<0>();
  }

 private:
  GetTrustTokensParams() { }

};


// Result for the GetTrustTokens command.
class HEADLESS_EXPORT GetTrustTokensResult {
 public:
  static std::unique_ptr<GetTrustTokensResult> Parse(const base::Value& value, ErrorReporter* errors);

  GetTrustTokensResult(const GetTrustTokensResult&) = delete;
  GetTrustTokensResult& operator=(const GetTrustTokensResult&) = delete;

  ~GetTrustTokensResult() { }


  const std::vector<std::unique_ptr<::headless::storage::TrustTokens>>* GetTokens() const { return &tokens_; }
  void SetTokens(std::vector<std::unique_ptr<::headless::storage::TrustTokens>> value) { tokens_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<GetTrustTokensResult> Clone() const;

  template<int STATE>
  class GetTrustTokensResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kTokensSet = 1 << 1,
      kAllRequiredFieldsSet = (kTokensSet | 0)
    };

    GetTrustTokensResultBuilder<STATE | kTokensSet>& SetTokens(std::vector<std::unique_ptr<::headless::storage::TrustTokens>> value) {
      static_assert(!(STATE & kTokensSet), "property tokens should not have already been set");
      result_->SetTokens(std::move(value));
      return CastState<kTokensSet>();
    }

    std::unique_ptr<GetTrustTokensResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetTrustTokensResult;
    GetTrustTokensResultBuilder() : result_(new GetTrustTokensResult()) { }

    template<int STEP> GetTrustTokensResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetTrustTokensResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetTrustTokensResult> result_;
  };

  static GetTrustTokensResultBuilder<0> Builder() {
    return GetTrustTokensResultBuilder<0>();
  }

 private:
  GetTrustTokensResult() { }

  std::vector<std::unique_ptr<::headless::storage::TrustTokens>> tokens_;
};


// Parameters for the ClearTrustTokens command.
class HEADLESS_EXPORT ClearTrustTokensParams {
 public:
  static std::unique_ptr<ClearTrustTokensParams> Parse(const base::Value& value, ErrorReporter* errors);

  ClearTrustTokensParams(const ClearTrustTokensParams&) = delete;
  ClearTrustTokensParams& operator=(const ClearTrustTokensParams&) = delete;

  ~ClearTrustTokensParams() { }


  std::string GetIssuerOrigin() const { return issuer_origin_; }
  void SetIssuerOrigin(const std::string& value) { issuer_origin_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<ClearTrustTokensParams> Clone() const;

  template<int STATE>
  class ClearTrustTokensParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kIssuerOriginSet = 1 << 1,
      kAllRequiredFieldsSet = (kIssuerOriginSet | 0)
    };

    ClearTrustTokensParamsBuilder<STATE | kIssuerOriginSet>& SetIssuerOrigin(const std::string& value) {
      static_assert(!(STATE & kIssuerOriginSet), "property issuerOrigin should not have already been set");
      result_->SetIssuerOrigin(value);
      return CastState<kIssuerOriginSet>();
    }

    std::unique_ptr<ClearTrustTokensParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ClearTrustTokensParams;
    ClearTrustTokensParamsBuilder() : result_(new ClearTrustTokensParams()) { }

    template<int STEP> ClearTrustTokensParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ClearTrustTokensParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ClearTrustTokensParams> result_;
  };

  static ClearTrustTokensParamsBuilder<0> Builder() {
    return ClearTrustTokensParamsBuilder<0>();
  }

 private:
  ClearTrustTokensParams() { }

  std::string issuer_origin_;
};


// Result for the ClearTrustTokens command.
class HEADLESS_EXPORT ClearTrustTokensResult {
 public:
  static std::unique_ptr<ClearTrustTokensResult> Parse(const base::Value& value, ErrorReporter* errors);

  ClearTrustTokensResult(const ClearTrustTokensResult&) = delete;
  ClearTrustTokensResult& operator=(const ClearTrustTokensResult&) = delete;

  ~ClearTrustTokensResult() { }


  // True if any tokens were deleted, false otherwise.
  bool GetDidDeleteTokens() const { return did_delete_tokens_; }
  void SetDidDeleteTokens(bool value) { did_delete_tokens_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<ClearTrustTokensResult> Clone() const;

  template<int STATE>
  class ClearTrustTokensResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kDidDeleteTokensSet = 1 << 1,
      kAllRequiredFieldsSet = (kDidDeleteTokensSet | 0)
    };

    ClearTrustTokensResultBuilder<STATE | kDidDeleteTokensSet>& SetDidDeleteTokens(bool value) {
      static_assert(!(STATE & kDidDeleteTokensSet), "property didDeleteTokens should not have already been set");
      result_->SetDidDeleteTokens(value);
      return CastState<kDidDeleteTokensSet>();
    }

    std::unique_ptr<ClearTrustTokensResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ClearTrustTokensResult;
    ClearTrustTokensResultBuilder() : result_(new ClearTrustTokensResult()) { }

    template<int STEP> ClearTrustTokensResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ClearTrustTokensResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ClearTrustTokensResult> result_;
  };

  static ClearTrustTokensResultBuilder<0> Builder() {
    return ClearTrustTokensResultBuilder<0>();
  }

 private:
  ClearTrustTokensResult() { }

  bool did_delete_tokens_;
};


// Parameters for the GetInterestGroupDetails command.
class HEADLESS_EXPORT GetInterestGroupDetailsParams {
 public:
  static std::unique_ptr<GetInterestGroupDetailsParams> Parse(const base::Value& value, ErrorReporter* errors);

  GetInterestGroupDetailsParams(const GetInterestGroupDetailsParams&) = delete;
  GetInterestGroupDetailsParams& operator=(const GetInterestGroupDetailsParams&) = delete;

  ~GetInterestGroupDetailsParams() { }


  std::string GetOwnerOrigin() const { return owner_origin_; }
  void SetOwnerOrigin(const std::string& value) { owner_origin_ = value; }

  std::string GetName() const { return name_; }
  void SetName(const std::string& value) { name_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<GetInterestGroupDetailsParams> Clone() const;

  template<int STATE>
  class GetInterestGroupDetailsParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kOwnerOriginSet = 1 << 1,
    kNameSet = 1 << 2,
      kAllRequiredFieldsSet = (kOwnerOriginSet | kNameSet | 0)
    };

    GetInterestGroupDetailsParamsBuilder<STATE | kOwnerOriginSet>& SetOwnerOrigin(const std::string& value) {
      static_assert(!(STATE & kOwnerOriginSet), "property ownerOrigin should not have already been set");
      result_->SetOwnerOrigin(value);
      return CastState<kOwnerOriginSet>();
    }

    GetInterestGroupDetailsParamsBuilder<STATE | kNameSet>& SetName(const std::string& value) {
      static_assert(!(STATE & kNameSet), "property name should not have already been set");
      result_->SetName(value);
      return CastState<kNameSet>();
    }

    std::unique_ptr<GetInterestGroupDetailsParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetInterestGroupDetailsParams;
    GetInterestGroupDetailsParamsBuilder() : result_(new GetInterestGroupDetailsParams()) { }

    template<int STEP> GetInterestGroupDetailsParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetInterestGroupDetailsParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetInterestGroupDetailsParams> result_;
  };

  static GetInterestGroupDetailsParamsBuilder<0> Builder() {
    return GetInterestGroupDetailsParamsBuilder<0>();
  }

 private:
  GetInterestGroupDetailsParams() { }

  std::string owner_origin_;
  std::string name_;
};


// Result for the GetInterestGroupDetails command.
class HEADLESS_EXPORT GetInterestGroupDetailsResult {
 public:
  static std::unique_ptr<GetInterestGroupDetailsResult> Parse(const base::Value& value, ErrorReporter* errors);

  GetInterestGroupDetailsResult(const GetInterestGroupDetailsResult&) = delete;
  GetInterestGroupDetailsResult& operator=(const GetInterestGroupDetailsResult&) = delete;

  ~GetInterestGroupDetailsResult() { }


  const ::headless::storage::InterestGroupDetails* GetDetails() const { return details_.get(); }
  void SetDetails(std::unique_ptr<::headless::storage::InterestGroupDetails> value) { details_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<GetInterestGroupDetailsResult> Clone() const;

  template<int STATE>
  class GetInterestGroupDetailsResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kDetailsSet = 1 << 1,
      kAllRequiredFieldsSet = (kDetailsSet | 0)
    };

    GetInterestGroupDetailsResultBuilder<STATE | kDetailsSet>& SetDetails(std::unique_ptr<::headless::storage::InterestGroupDetails> value) {
      static_assert(!(STATE & kDetailsSet), "property details should not have already been set");
      result_->SetDetails(std::move(value));
      return CastState<kDetailsSet>();
    }

    std::unique_ptr<GetInterestGroupDetailsResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetInterestGroupDetailsResult;
    GetInterestGroupDetailsResultBuilder() : result_(new GetInterestGroupDetailsResult()) { }

    template<int STEP> GetInterestGroupDetailsResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetInterestGroupDetailsResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetInterestGroupDetailsResult> result_;
  };

  static GetInterestGroupDetailsResultBuilder<0> Builder() {
    return GetInterestGroupDetailsResultBuilder<0>();
  }

 private:
  GetInterestGroupDetailsResult() { }

  std::unique_ptr<::headless::storage::InterestGroupDetails> details_;
};


// Parameters for the SetInterestGroupTracking command.
class HEADLESS_EXPORT SetInterestGroupTrackingParams {
 public:
  static std::unique_ptr<SetInterestGroupTrackingParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetInterestGroupTrackingParams(const SetInterestGroupTrackingParams&) = delete;
  SetInterestGroupTrackingParams& operator=(const SetInterestGroupTrackingParams&) = delete;

  ~SetInterestGroupTrackingParams() { }


  bool GetEnable() const { return enable_; }
  void SetEnable(bool value) { enable_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetInterestGroupTrackingParams> Clone() const;

  template<int STATE>
  class SetInterestGroupTrackingParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kEnableSet = 1 << 1,
      kAllRequiredFieldsSet = (kEnableSet | 0)
    };

    SetInterestGroupTrackingParamsBuilder<STATE | kEnableSet>& SetEnable(bool value) {
      static_assert(!(STATE & kEnableSet), "property enable should not have already been set");
      result_->SetEnable(value);
      return CastState<kEnableSet>();
    }

    std::unique_ptr<SetInterestGroupTrackingParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetInterestGroupTrackingParams;
    SetInterestGroupTrackingParamsBuilder() : result_(new SetInterestGroupTrackingParams()) { }

    template<int STEP> SetInterestGroupTrackingParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetInterestGroupTrackingParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetInterestGroupTrackingParams> result_;
  };

  static SetInterestGroupTrackingParamsBuilder<0> Builder() {
    return SetInterestGroupTrackingParamsBuilder<0>();
  }

 private:
  SetInterestGroupTrackingParams() { }

  bool enable_;
};


// Result for the SetInterestGroupTracking command.
class HEADLESS_EXPORT SetInterestGroupTrackingResult {
 public:
  static std::unique_ptr<SetInterestGroupTrackingResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetInterestGroupTrackingResult(const SetInterestGroupTrackingResult&) = delete;
  SetInterestGroupTrackingResult& operator=(const SetInterestGroupTrackingResult&) = delete;

  ~SetInterestGroupTrackingResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetInterestGroupTrackingResult> Clone() const;

  template<int STATE>
  class SetInterestGroupTrackingResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetInterestGroupTrackingResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetInterestGroupTrackingResult;
    SetInterestGroupTrackingResultBuilder() : result_(new SetInterestGroupTrackingResult()) { }

    template<int STEP> SetInterestGroupTrackingResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetInterestGroupTrackingResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetInterestGroupTrackingResult> result_;
  };

  static SetInterestGroupTrackingResultBuilder<0> Builder() {
    return SetInterestGroupTrackingResultBuilder<0>();
  }

 private:
  SetInterestGroupTrackingResult() { }

};


// Parameters for the GetSharedStorageMetadata command.
class HEADLESS_EXPORT GetSharedStorageMetadataParams {
 public:
  static std::unique_ptr<GetSharedStorageMetadataParams> Parse(const base::Value& value, ErrorReporter* errors);

  GetSharedStorageMetadataParams(const GetSharedStorageMetadataParams&) = delete;
  GetSharedStorageMetadataParams& operator=(const GetSharedStorageMetadataParams&) = delete;

  ~GetSharedStorageMetadataParams() { }


  std::string GetOwnerOrigin() const { return owner_origin_; }
  void SetOwnerOrigin(const std::string& value) { owner_origin_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<GetSharedStorageMetadataParams> Clone() const;

  template<int STATE>
  class GetSharedStorageMetadataParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kOwnerOriginSet = 1 << 1,
      kAllRequiredFieldsSet = (kOwnerOriginSet | 0)
    };

    GetSharedStorageMetadataParamsBuilder<STATE | kOwnerOriginSet>& SetOwnerOrigin(const std::string& value) {
      static_assert(!(STATE & kOwnerOriginSet), "property ownerOrigin should not have already been set");
      result_->SetOwnerOrigin(value);
      return CastState<kOwnerOriginSet>();
    }

    std::unique_ptr<GetSharedStorageMetadataParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetSharedStorageMetadataParams;
    GetSharedStorageMetadataParamsBuilder() : result_(new GetSharedStorageMetadataParams()) { }

    template<int STEP> GetSharedStorageMetadataParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetSharedStorageMetadataParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetSharedStorageMetadataParams> result_;
  };

  static GetSharedStorageMetadataParamsBuilder<0> Builder() {
    return GetSharedStorageMetadataParamsBuilder<0>();
  }

 private:
  GetSharedStorageMetadataParams() { }

  std::string owner_origin_;
};


// Result for the GetSharedStorageMetadata command.
class HEADLESS_EXPORT GetSharedStorageMetadataResult {
 public:
  static std::unique_ptr<GetSharedStorageMetadataResult> Parse(const base::Value& value, ErrorReporter* errors);

  GetSharedStorageMetadataResult(const GetSharedStorageMetadataResult&) = delete;
  GetSharedStorageMetadataResult& operator=(const GetSharedStorageMetadataResult&) = delete;

  ~GetSharedStorageMetadataResult() { }


  const ::headless::storage::SharedStorageMetadata* GetMetadata() const { return metadata_.get(); }
  void SetMetadata(std::unique_ptr<::headless::storage::SharedStorageMetadata> value) { metadata_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<GetSharedStorageMetadataResult> Clone() const;

  template<int STATE>
  class GetSharedStorageMetadataResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kMetadataSet = 1 << 1,
      kAllRequiredFieldsSet = (kMetadataSet | 0)
    };

    GetSharedStorageMetadataResultBuilder<STATE | kMetadataSet>& SetMetadata(std::unique_ptr<::headless::storage::SharedStorageMetadata> value) {
      static_assert(!(STATE & kMetadataSet), "property metadata should not have already been set");
      result_->SetMetadata(std::move(value));
      return CastState<kMetadataSet>();
    }

    std::unique_ptr<GetSharedStorageMetadataResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetSharedStorageMetadataResult;
    GetSharedStorageMetadataResultBuilder() : result_(new GetSharedStorageMetadataResult()) { }

    template<int STEP> GetSharedStorageMetadataResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetSharedStorageMetadataResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetSharedStorageMetadataResult> result_;
  };

  static GetSharedStorageMetadataResultBuilder<0> Builder() {
    return GetSharedStorageMetadataResultBuilder<0>();
  }

 private:
  GetSharedStorageMetadataResult() { }

  std::unique_ptr<::headless::storage::SharedStorageMetadata> metadata_;
};


// Parameters for the GetSharedStorageEntries command.
class HEADLESS_EXPORT GetSharedStorageEntriesParams {
 public:
  static std::unique_ptr<GetSharedStorageEntriesParams> Parse(const base::Value& value, ErrorReporter* errors);

  GetSharedStorageEntriesParams(const GetSharedStorageEntriesParams&) = delete;
  GetSharedStorageEntriesParams& operator=(const GetSharedStorageEntriesParams&) = delete;

  ~GetSharedStorageEntriesParams() { }


  std::string GetOwnerOrigin() const { return owner_origin_; }
  void SetOwnerOrigin(const std::string& value) { owner_origin_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<GetSharedStorageEntriesParams> Clone() const;

  template<int STATE>
  class GetSharedStorageEntriesParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kOwnerOriginSet = 1 << 1,
      kAllRequiredFieldsSet = (kOwnerOriginSet | 0)
    };

    GetSharedStorageEntriesParamsBuilder<STATE | kOwnerOriginSet>& SetOwnerOrigin(const std::string& value) {
      static_assert(!(STATE & kOwnerOriginSet), "property ownerOrigin should not have already been set");
      result_->SetOwnerOrigin(value);
      return CastState<kOwnerOriginSet>();
    }

    std::unique_ptr<GetSharedStorageEntriesParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetSharedStorageEntriesParams;
    GetSharedStorageEntriesParamsBuilder() : result_(new GetSharedStorageEntriesParams()) { }

    template<int STEP> GetSharedStorageEntriesParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetSharedStorageEntriesParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetSharedStorageEntriesParams> result_;
  };

  static GetSharedStorageEntriesParamsBuilder<0> Builder() {
    return GetSharedStorageEntriesParamsBuilder<0>();
  }

 private:
  GetSharedStorageEntriesParams() { }

  std::string owner_origin_;
};


// Result for the GetSharedStorageEntries command.
class HEADLESS_EXPORT GetSharedStorageEntriesResult {
 public:
  static std::unique_ptr<GetSharedStorageEntriesResult> Parse(const base::Value& value, ErrorReporter* errors);

  GetSharedStorageEntriesResult(const GetSharedStorageEntriesResult&) = delete;
  GetSharedStorageEntriesResult& operator=(const GetSharedStorageEntriesResult&) = delete;

  ~GetSharedStorageEntriesResult() { }


  const std::vector<std::unique_ptr<::headless::storage::SharedStorageEntry>>* GetEntries() const { return &entries_; }
  void SetEntries(std::vector<std::unique_ptr<::headless::storage::SharedStorageEntry>> value) { entries_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<GetSharedStorageEntriesResult> Clone() const;

  template<int STATE>
  class GetSharedStorageEntriesResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kEntriesSet = 1 << 1,
      kAllRequiredFieldsSet = (kEntriesSet | 0)
    };

    GetSharedStorageEntriesResultBuilder<STATE | kEntriesSet>& SetEntries(std::vector<std::unique_ptr<::headless::storage::SharedStorageEntry>> value) {
      static_assert(!(STATE & kEntriesSet), "property entries should not have already been set");
      result_->SetEntries(std::move(value));
      return CastState<kEntriesSet>();
    }

    std::unique_ptr<GetSharedStorageEntriesResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetSharedStorageEntriesResult;
    GetSharedStorageEntriesResultBuilder() : result_(new GetSharedStorageEntriesResult()) { }

    template<int STEP> GetSharedStorageEntriesResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetSharedStorageEntriesResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetSharedStorageEntriesResult> result_;
  };

  static GetSharedStorageEntriesResultBuilder<0> Builder() {
    return GetSharedStorageEntriesResultBuilder<0>();
  }

 private:
  GetSharedStorageEntriesResult() { }

  std::vector<std::unique_ptr<::headless::storage::SharedStorageEntry>> entries_;
};


// Parameters for the SetSharedStorageEntry command.
class HEADLESS_EXPORT SetSharedStorageEntryParams {
 public:
  static std::unique_ptr<SetSharedStorageEntryParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetSharedStorageEntryParams(const SetSharedStorageEntryParams&) = delete;
  SetSharedStorageEntryParams& operator=(const SetSharedStorageEntryParams&) = delete;

  ~SetSharedStorageEntryParams() { }


  std::string GetOwnerOrigin() const { return owner_origin_; }
  void SetOwnerOrigin(const std::string& value) { owner_origin_ = value; }

  std::string GetKey() const { return key_; }
  void SetKey(const std::string& value) { key_ = value; }

  std::string GetValue() const { return value_; }
  void SetValue(const std::string& value) { value_ = value; }

  // If `ignoreIfPresent` is included and true, then only sets the entry if
  // `key` doesn't already exist.
  bool HasIgnoreIfPresent() const { return !!ignore_if_present_; }
  bool GetIgnoreIfPresent() const { DCHECK(HasIgnoreIfPresent()); return ignore_if_present_.value(); }
  void SetIgnoreIfPresent(bool value) { ignore_if_present_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetSharedStorageEntryParams> Clone() const;

  template<int STATE>
  class SetSharedStorageEntryParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kOwnerOriginSet = 1 << 1,
    kKeySet = 1 << 2,
    kValueSet = 1 << 3,
      kAllRequiredFieldsSet = (kOwnerOriginSet | kKeySet | kValueSet | 0)
    };

    SetSharedStorageEntryParamsBuilder<STATE | kOwnerOriginSet>& SetOwnerOrigin(const std::string& value) {
      static_assert(!(STATE & kOwnerOriginSet), "property ownerOrigin should not have already been set");
      result_->SetOwnerOrigin(value);
      return CastState<kOwnerOriginSet>();
    }

    SetSharedStorageEntryParamsBuilder<STATE | kKeySet>& SetKey(const std::string& value) {
      static_assert(!(STATE & kKeySet), "property key should not have already been set");
      result_->SetKey(value);
      return CastState<kKeySet>();
    }

    SetSharedStorageEntryParamsBuilder<STATE | kValueSet>& SetValue(const std::string& value) {
      static_assert(!(STATE & kValueSet), "property value should not have already been set");
      result_->SetValue(value);
      return CastState<kValueSet>();
    }

    SetSharedStorageEntryParamsBuilder<STATE>& SetIgnoreIfPresent(bool value) {
      result_->SetIgnoreIfPresent(value);
      return *this;
    }

    std::unique_ptr<SetSharedStorageEntryParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetSharedStorageEntryParams;
    SetSharedStorageEntryParamsBuilder() : result_(new SetSharedStorageEntryParams()) { }

    template<int STEP> SetSharedStorageEntryParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetSharedStorageEntryParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetSharedStorageEntryParams> result_;
  };

  static SetSharedStorageEntryParamsBuilder<0> Builder() {
    return SetSharedStorageEntryParamsBuilder<0>();
  }

 private:
  SetSharedStorageEntryParams() { }

  std::string owner_origin_;
  std::string key_;
  std::string value_;
  absl::optional<bool> ignore_if_present_;
};


// Result for the SetSharedStorageEntry command.
class HEADLESS_EXPORT SetSharedStorageEntryResult {
 public:
  static std::unique_ptr<SetSharedStorageEntryResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetSharedStorageEntryResult(const SetSharedStorageEntryResult&) = delete;
  SetSharedStorageEntryResult& operator=(const SetSharedStorageEntryResult&) = delete;

  ~SetSharedStorageEntryResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetSharedStorageEntryResult> Clone() const;

  template<int STATE>
  class SetSharedStorageEntryResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetSharedStorageEntryResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetSharedStorageEntryResult;
    SetSharedStorageEntryResultBuilder() : result_(new SetSharedStorageEntryResult()) { }

    template<int STEP> SetSharedStorageEntryResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetSharedStorageEntryResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetSharedStorageEntryResult> result_;
  };

  static SetSharedStorageEntryResultBuilder<0> Builder() {
    return SetSharedStorageEntryResultBuilder<0>();
  }

 private:
  SetSharedStorageEntryResult() { }

};


// Parameters for the DeleteSharedStorageEntry command.
class HEADLESS_EXPORT DeleteSharedStorageEntryParams {
 public:
  static std::unique_ptr<DeleteSharedStorageEntryParams> Parse(const base::Value& value, ErrorReporter* errors);

  DeleteSharedStorageEntryParams(const DeleteSharedStorageEntryParams&) = delete;
  DeleteSharedStorageEntryParams& operator=(const DeleteSharedStorageEntryParams&) = delete;

  ~DeleteSharedStorageEntryParams() { }


  std::string GetOwnerOrigin() const { return owner_origin_; }
  void SetOwnerOrigin(const std::string& value) { owner_origin_ = value; }

  std::string GetKey() const { return key_; }
  void SetKey(const std::string& value) { key_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<DeleteSharedStorageEntryParams> Clone() const;

  template<int STATE>
  class DeleteSharedStorageEntryParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kOwnerOriginSet = 1 << 1,
    kKeySet = 1 << 2,
      kAllRequiredFieldsSet = (kOwnerOriginSet | kKeySet | 0)
    };

    DeleteSharedStorageEntryParamsBuilder<STATE | kOwnerOriginSet>& SetOwnerOrigin(const std::string& value) {
      static_assert(!(STATE & kOwnerOriginSet), "property ownerOrigin should not have already been set");
      result_->SetOwnerOrigin(value);
      return CastState<kOwnerOriginSet>();
    }

    DeleteSharedStorageEntryParamsBuilder<STATE | kKeySet>& SetKey(const std::string& value) {
      static_assert(!(STATE & kKeySet), "property key should not have already been set");
      result_->SetKey(value);
      return CastState<kKeySet>();
    }

    std::unique_ptr<DeleteSharedStorageEntryParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DeleteSharedStorageEntryParams;
    DeleteSharedStorageEntryParamsBuilder() : result_(new DeleteSharedStorageEntryParams()) { }

    template<int STEP> DeleteSharedStorageEntryParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DeleteSharedStorageEntryParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DeleteSharedStorageEntryParams> result_;
  };

  static DeleteSharedStorageEntryParamsBuilder<0> Builder() {
    return DeleteSharedStorageEntryParamsBuilder<0>();
  }

 private:
  DeleteSharedStorageEntryParams() { }

  std::string owner_origin_;
  std::string key_;
};


// Result for the DeleteSharedStorageEntry command.
class HEADLESS_EXPORT DeleteSharedStorageEntryResult {
 public:
  static std::unique_ptr<DeleteSharedStorageEntryResult> Parse(const base::Value& value, ErrorReporter* errors);

  DeleteSharedStorageEntryResult(const DeleteSharedStorageEntryResult&) = delete;
  DeleteSharedStorageEntryResult& operator=(const DeleteSharedStorageEntryResult&) = delete;

  ~DeleteSharedStorageEntryResult() { }


  base::Value Serialize() const;
  std::unique_ptr<DeleteSharedStorageEntryResult> Clone() const;

  template<int STATE>
  class DeleteSharedStorageEntryResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<DeleteSharedStorageEntryResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DeleteSharedStorageEntryResult;
    DeleteSharedStorageEntryResultBuilder() : result_(new DeleteSharedStorageEntryResult()) { }

    template<int STEP> DeleteSharedStorageEntryResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DeleteSharedStorageEntryResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DeleteSharedStorageEntryResult> result_;
  };

  static DeleteSharedStorageEntryResultBuilder<0> Builder() {
    return DeleteSharedStorageEntryResultBuilder<0>();
  }

 private:
  DeleteSharedStorageEntryResult() { }

};


// Parameters for the ClearSharedStorageEntries command.
class HEADLESS_EXPORT ClearSharedStorageEntriesParams {
 public:
  static std::unique_ptr<ClearSharedStorageEntriesParams> Parse(const base::Value& value, ErrorReporter* errors);

  ClearSharedStorageEntriesParams(const ClearSharedStorageEntriesParams&) = delete;
  ClearSharedStorageEntriesParams& operator=(const ClearSharedStorageEntriesParams&) = delete;

  ~ClearSharedStorageEntriesParams() { }


  std::string GetOwnerOrigin() const { return owner_origin_; }
  void SetOwnerOrigin(const std::string& value) { owner_origin_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<ClearSharedStorageEntriesParams> Clone() const;

  template<int STATE>
  class ClearSharedStorageEntriesParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kOwnerOriginSet = 1 << 1,
      kAllRequiredFieldsSet = (kOwnerOriginSet | 0)
    };

    ClearSharedStorageEntriesParamsBuilder<STATE | kOwnerOriginSet>& SetOwnerOrigin(const std::string& value) {
      static_assert(!(STATE & kOwnerOriginSet), "property ownerOrigin should not have already been set");
      result_->SetOwnerOrigin(value);
      return CastState<kOwnerOriginSet>();
    }

    std::unique_ptr<ClearSharedStorageEntriesParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ClearSharedStorageEntriesParams;
    ClearSharedStorageEntriesParamsBuilder() : result_(new ClearSharedStorageEntriesParams()) { }

    template<int STEP> ClearSharedStorageEntriesParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ClearSharedStorageEntriesParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ClearSharedStorageEntriesParams> result_;
  };

  static ClearSharedStorageEntriesParamsBuilder<0> Builder() {
    return ClearSharedStorageEntriesParamsBuilder<0>();
  }

 private:
  ClearSharedStorageEntriesParams() { }

  std::string owner_origin_;
};


// Result for the ClearSharedStorageEntries command.
class HEADLESS_EXPORT ClearSharedStorageEntriesResult {
 public:
  static std::unique_ptr<ClearSharedStorageEntriesResult> Parse(const base::Value& value, ErrorReporter* errors);

  ClearSharedStorageEntriesResult(const ClearSharedStorageEntriesResult&) = delete;
  ClearSharedStorageEntriesResult& operator=(const ClearSharedStorageEntriesResult&) = delete;

  ~ClearSharedStorageEntriesResult() { }


  base::Value Serialize() const;
  std::unique_ptr<ClearSharedStorageEntriesResult> Clone() const;

  template<int STATE>
  class ClearSharedStorageEntriesResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<ClearSharedStorageEntriesResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ClearSharedStorageEntriesResult;
    ClearSharedStorageEntriesResultBuilder() : result_(new ClearSharedStorageEntriesResult()) { }

    template<int STEP> ClearSharedStorageEntriesResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ClearSharedStorageEntriesResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ClearSharedStorageEntriesResult> result_;
  };

  static ClearSharedStorageEntriesResultBuilder<0> Builder() {
    return ClearSharedStorageEntriesResultBuilder<0>();
  }

 private:
  ClearSharedStorageEntriesResult() { }

};


// Parameters for the ResetSharedStorageBudget command.
class HEADLESS_EXPORT ResetSharedStorageBudgetParams {
 public:
  static std::unique_ptr<ResetSharedStorageBudgetParams> Parse(const base::Value& value, ErrorReporter* errors);

  ResetSharedStorageBudgetParams(const ResetSharedStorageBudgetParams&) = delete;
  ResetSharedStorageBudgetParams& operator=(const ResetSharedStorageBudgetParams&) = delete;

  ~ResetSharedStorageBudgetParams() { }


  std::string GetOwnerOrigin() const { return owner_origin_; }
  void SetOwnerOrigin(const std::string& value) { owner_origin_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<ResetSharedStorageBudgetParams> Clone() const;

  template<int STATE>
  class ResetSharedStorageBudgetParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kOwnerOriginSet = 1 << 1,
      kAllRequiredFieldsSet = (kOwnerOriginSet | 0)
    };

    ResetSharedStorageBudgetParamsBuilder<STATE | kOwnerOriginSet>& SetOwnerOrigin(const std::string& value) {
      static_assert(!(STATE & kOwnerOriginSet), "property ownerOrigin should not have already been set");
      result_->SetOwnerOrigin(value);
      return CastState<kOwnerOriginSet>();
    }

    std::unique_ptr<ResetSharedStorageBudgetParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ResetSharedStorageBudgetParams;
    ResetSharedStorageBudgetParamsBuilder() : result_(new ResetSharedStorageBudgetParams()) { }

    template<int STEP> ResetSharedStorageBudgetParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ResetSharedStorageBudgetParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ResetSharedStorageBudgetParams> result_;
  };

  static ResetSharedStorageBudgetParamsBuilder<0> Builder() {
    return ResetSharedStorageBudgetParamsBuilder<0>();
  }

 private:
  ResetSharedStorageBudgetParams() { }

  std::string owner_origin_;
};


// Result for the ResetSharedStorageBudget command.
class HEADLESS_EXPORT ResetSharedStorageBudgetResult {
 public:
  static std::unique_ptr<ResetSharedStorageBudgetResult> Parse(const base::Value& value, ErrorReporter* errors);

  ResetSharedStorageBudgetResult(const ResetSharedStorageBudgetResult&) = delete;
  ResetSharedStorageBudgetResult& operator=(const ResetSharedStorageBudgetResult&) = delete;

  ~ResetSharedStorageBudgetResult() { }


  base::Value Serialize() const;
  std::unique_ptr<ResetSharedStorageBudgetResult> Clone() const;

  template<int STATE>
  class ResetSharedStorageBudgetResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<ResetSharedStorageBudgetResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ResetSharedStorageBudgetResult;
    ResetSharedStorageBudgetResultBuilder() : result_(new ResetSharedStorageBudgetResult()) { }

    template<int STEP> ResetSharedStorageBudgetResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ResetSharedStorageBudgetResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ResetSharedStorageBudgetResult> result_;
  };

  static ResetSharedStorageBudgetResultBuilder<0> Builder() {
    return ResetSharedStorageBudgetResultBuilder<0>();
  }

 private:
  ResetSharedStorageBudgetResult() { }

};


// Parameters for the SetSharedStorageTracking command.
class HEADLESS_EXPORT SetSharedStorageTrackingParams {
 public:
  static std::unique_ptr<SetSharedStorageTrackingParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetSharedStorageTrackingParams(const SetSharedStorageTrackingParams&) = delete;
  SetSharedStorageTrackingParams& operator=(const SetSharedStorageTrackingParams&) = delete;

  ~SetSharedStorageTrackingParams() { }


  bool GetEnable() const { return enable_; }
  void SetEnable(bool value) { enable_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetSharedStorageTrackingParams> Clone() const;

  template<int STATE>
  class SetSharedStorageTrackingParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kEnableSet = 1 << 1,
      kAllRequiredFieldsSet = (kEnableSet | 0)
    };

    SetSharedStorageTrackingParamsBuilder<STATE | kEnableSet>& SetEnable(bool value) {
      static_assert(!(STATE & kEnableSet), "property enable should not have already been set");
      result_->SetEnable(value);
      return CastState<kEnableSet>();
    }

    std::unique_ptr<SetSharedStorageTrackingParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetSharedStorageTrackingParams;
    SetSharedStorageTrackingParamsBuilder() : result_(new SetSharedStorageTrackingParams()) { }

    template<int STEP> SetSharedStorageTrackingParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetSharedStorageTrackingParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetSharedStorageTrackingParams> result_;
  };

  static SetSharedStorageTrackingParamsBuilder<0> Builder() {
    return SetSharedStorageTrackingParamsBuilder<0>();
  }

 private:
  SetSharedStorageTrackingParams() { }

  bool enable_;
};


// Result for the SetSharedStorageTracking command.
class HEADLESS_EXPORT SetSharedStorageTrackingResult {
 public:
  static std::unique_ptr<SetSharedStorageTrackingResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetSharedStorageTrackingResult(const SetSharedStorageTrackingResult&) = delete;
  SetSharedStorageTrackingResult& operator=(const SetSharedStorageTrackingResult&) = delete;

  ~SetSharedStorageTrackingResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetSharedStorageTrackingResult> Clone() const;

  template<int STATE>
  class SetSharedStorageTrackingResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetSharedStorageTrackingResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetSharedStorageTrackingResult;
    SetSharedStorageTrackingResultBuilder() : result_(new SetSharedStorageTrackingResult()) { }

    template<int STEP> SetSharedStorageTrackingResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetSharedStorageTrackingResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetSharedStorageTrackingResult> result_;
  };

  static SetSharedStorageTrackingResultBuilder<0> Builder() {
    return SetSharedStorageTrackingResultBuilder<0>();
  }

 private:
  SetSharedStorageTrackingResult() { }

};


// Parameters for the SetStorageBucketTracking command.
class HEADLESS_EXPORT SetStorageBucketTrackingParams {
 public:
  static std::unique_ptr<SetStorageBucketTrackingParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetStorageBucketTrackingParams(const SetStorageBucketTrackingParams&) = delete;
  SetStorageBucketTrackingParams& operator=(const SetStorageBucketTrackingParams&) = delete;

  ~SetStorageBucketTrackingParams() { }


  std::string GetStorageKey() const { return storage_key_; }
  void SetStorageKey(const std::string& value) { storage_key_ = value; }

  bool GetEnable() const { return enable_; }
  void SetEnable(bool value) { enable_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetStorageBucketTrackingParams> Clone() const;

  template<int STATE>
  class SetStorageBucketTrackingParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kStorageKeySet = 1 << 1,
    kEnableSet = 1 << 2,
      kAllRequiredFieldsSet = (kStorageKeySet | kEnableSet | 0)
    };

    SetStorageBucketTrackingParamsBuilder<STATE | kStorageKeySet>& SetStorageKey(const std::string& value) {
      static_assert(!(STATE & kStorageKeySet), "property storageKey should not have already been set");
      result_->SetStorageKey(value);
      return CastState<kStorageKeySet>();
    }

    SetStorageBucketTrackingParamsBuilder<STATE | kEnableSet>& SetEnable(bool value) {
      static_assert(!(STATE & kEnableSet), "property enable should not have already been set");
      result_->SetEnable(value);
      return CastState<kEnableSet>();
    }

    std::unique_ptr<SetStorageBucketTrackingParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetStorageBucketTrackingParams;
    SetStorageBucketTrackingParamsBuilder() : result_(new SetStorageBucketTrackingParams()) { }

    template<int STEP> SetStorageBucketTrackingParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetStorageBucketTrackingParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetStorageBucketTrackingParams> result_;
  };

  static SetStorageBucketTrackingParamsBuilder<0> Builder() {
    return SetStorageBucketTrackingParamsBuilder<0>();
  }

 private:
  SetStorageBucketTrackingParams() { }

  std::string storage_key_;
  bool enable_;
};


// Result for the SetStorageBucketTracking command.
class HEADLESS_EXPORT SetStorageBucketTrackingResult {
 public:
  static std::unique_ptr<SetStorageBucketTrackingResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetStorageBucketTrackingResult(const SetStorageBucketTrackingResult&) = delete;
  SetStorageBucketTrackingResult& operator=(const SetStorageBucketTrackingResult&) = delete;

  ~SetStorageBucketTrackingResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetStorageBucketTrackingResult> Clone() const;

  template<int STATE>
  class SetStorageBucketTrackingResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetStorageBucketTrackingResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetStorageBucketTrackingResult;
    SetStorageBucketTrackingResultBuilder() : result_(new SetStorageBucketTrackingResult()) { }

    template<int STEP> SetStorageBucketTrackingResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetStorageBucketTrackingResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetStorageBucketTrackingResult> result_;
  };

  static SetStorageBucketTrackingResultBuilder<0> Builder() {
    return SetStorageBucketTrackingResultBuilder<0>();
  }

 private:
  SetStorageBucketTrackingResult() { }

};


// Parameters for the DeleteStorageBucket command.
class HEADLESS_EXPORT DeleteStorageBucketParams {
 public:
  static std::unique_ptr<DeleteStorageBucketParams> Parse(const base::Value& value, ErrorReporter* errors);

  DeleteStorageBucketParams(const DeleteStorageBucketParams&) = delete;
  DeleteStorageBucketParams& operator=(const DeleteStorageBucketParams&) = delete;

  ~DeleteStorageBucketParams() { }


  const ::headless::storage::StorageBucket* GetBucket() const { return bucket_.get(); }
  void SetBucket(std::unique_ptr<::headless::storage::StorageBucket> value) { bucket_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<DeleteStorageBucketParams> Clone() const;

  template<int STATE>
  class DeleteStorageBucketParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kBucketSet = 1 << 1,
      kAllRequiredFieldsSet = (kBucketSet | 0)
    };

    DeleteStorageBucketParamsBuilder<STATE | kBucketSet>& SetBucket(std::unique_ptr<::headless::storage::StorageBucket> value) {
      static_assert(!(STATE & kBucketSet), "property bucket should not have already been set");
      result_->SetBucket(std::move(value));
      return CastState<kBucketSet>();
    }

    std::unique_ptr<DeleteStorageBucketParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DeleteStorageBucketParams;
    DeleteStorageBucketParamsBuilder() : result_(new DeleteStorageBucketParams()) { }

    template<int STEP> DeleteStorageBucketParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DeleteStorageBucketParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DeleteStorageBucketParams> result_;
  };

  static DeleteStorageBucketParamsBuilder<0> Builder() {
    return DeleteStorageBucketParamsBuilder<0>();
  }

 private:
  DeleteStorageBucketParams() { }

  std::unique_ptr<::headless::storage::StorageBucket> bucket_;
};


// Result for the DeleteStorageBucket command.
class HEADLESS_EXPORT DeleteStorageBucketResult {
 public:
  static std::unique_ptr<DeleteStorageBucketResult> Parse(const base::Value& value, ErrorReporter* errors);

  DeleteStorageBucketResult(const DeleteStorageBucketResult&) = delete;
  DeleteStorageBucketResult& operator=(const DeleteStorageBucketResult&) = delete;

  ~DeleteStorageBucketResult() { }


  base::Value Serialize() const;
  std::unique_ptr<DeleteStorageBucketResult> Clone() const;

  template<int STATE>
  class DeleteStorageBucketResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<DeleteStorageBucketResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DeleteStorageBucketResult;
    DeleteStorageBucketResultBuilder() : result_(new DeleteStorageBucketResult()) { }

    template<int STEP> DeleteStorageBucketResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DeleteStorageBucketResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DeleteStorageBucketResult> result_;
  };

  static DeleteStorageBucketResultBuilder<0> Builder() {
    return DeleteStorageBucketResultBuilder<0>();
  }

 private:
  DeleteStorageBucketResult() { }

};


// Parameters for the RunBounceTrackingMitigations command.
class HEADLESS_EXPORT RunBounceTrackingMitigationsParams {
 public:
  static std::unique_ptr<RunBounceTrackingMitigationsParams> Parse(const base::Value& value, ErrorReporter* errors);

  RunBounceTrackingMitigationsParams(const RunBounceTrackingMitigationsParams&) = delete;
  RunBounceTrackingMitigationsParams& operator=(const RunBounceTrackingMitigationsParams&) = delete;

  ~RunBounceTrackingMitigationsParams() { }


  base::Value Serialize() const;
  std::unique_ptr<RunBounceTrackingMitigationsParams> Clone() const;

  template<int STATE>
  class RunBounceTrackingMitigationsParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<RunBounceTrackingMitigationsParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class RunBounceTrackingMitigationsParams;
    RunBounceTrackingMitigationsParamsBuilder() : result_(new RunBounceTrackingMitigationsParams()) { }

    template<int STEP> RunBounceTrackingMitigationsParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<RunBounceTrackingMitigationsParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<RunBounceTrackingMitigationsParams> result_;
  };

  static RunBounceTrackingMitigationsParamsBuilder<0> Builder() {
    return RunBounceTrackingMitigationsParamsBuilder<0>();
  }

 private:
  RunBounceTrackingMitigationsParams() { }

};


// Result for the RunBounceTrackingMitigations command.
class HEADLESS_EXPORT RunBounceTrackingMitigationsResult {
 public:
  static std::unique_ptr<RunBounceTrackingMitigationsResult> Parse(const base::Value& value, ErrorReporter* errors);

  RunBounceTrackingMitigationsResult(const RunBounceTrackingMitigationsResult&) = delete;
  RunBounceTrackingMitigationsResult& operator=(const RunBounceTrackingMitigationsResult&) = delete;

  ~RunBounceTrackingMitigationsResult() { }


  const std::vector<std::string>* GetDeletedSites() const { return &deleted_sites_; }
  void SetDeletedSites(std::vector<std::string> value) { deleted_sites_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<RunBounceTrackingMitigationsResult> Clone() const;

  template<int STATE>
  class RunBounceTrackingMitigationsResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kDeletedSitesSet = 1 << 1,
      kAllRequiredFieldsSet = (kDeletedSitesSet | 0)
    };

    RunBounceTrackingMitigationsResultBuilder<STATE | kDeletedSitesSet>& SetDeletedSites(std::vector<std::string> value) {
      static_assert(!(STATE & kDeletedSitesSet), "property deletedSites should not have already been set");
      result_->SetDeletedSites(std::move(value));
      return CastState<kDeletedSitesSet>();
    }

    std::unique_ptr<RunBounceTrackingMitigationsResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class RunBounceTrackingMitigationsResult;
    RunBounceTrackingMitigationsResultBuilder() : result_(new RunBounceTrackingMitigationsResult()) { }

    template<int STEP> RunBounceTrackingMitigationsResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<RunBounceTrackingMitigationsResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<RunBounceTrackingMitigationsResult> result_;
  };

  static RunBounceTrackingMitigationsResultBuilder<0> Builder() {
    return RunBounceTrackingMitigationsResultBuilder<0>();
  }

 private:
  RunBounceTrackingMitigationsResult() { }

  std::vector<std::string> deleted_sites_;
};


// Parameters for the SetAttributionReportingLocalTestingMode command.
class HEADLESS_EXPORT SetAttributionReportingLocalTestingModeParams {
 public:
  static std::unique_ptr<SetAttributionReportingLocalTestingModeParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetAttributionReportingLocalTestingModeParams(const SetAttributionReportingLocalTestingModeParams&) = delete;
  SetAttributionReportingLocalTestingModeParams& operator=(const SetAttributionReportingLocalTestingModeParams&) = delete;

  ~SetAttributionReportingLocalTestingModeParams() { }


  // If enabled, noise is suppressed and reports are sent immediately.
  bool GetEnabled() const { return enabled_; }
  void SetEnabled(bool value) { enabled_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetAttributionReportingLocalTestingModeParams> Clone() const;

  template<int STATE>
  class SetAttributionReportingLocalTestingModeParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kEnabledSet = 1 << 1,
      kAllRequiredFieldsSet = (kEnabledSet | 0)
    };

    SetAttributionReportingLocalTestingModeParamsBuilder<STATE | kEnabledSet>& SetEnabled(bool value) {
      static_assert(!(STATE & kEnabledSet), "property enabled should not have already been set");
      result_->SetEnabled(value);
      return CastState<kEnabledSet>();
    }

    std::unique_ptr<SetAttributionReportingLocalTestingModeParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetAttributionReportingLocalTestingModeParams;
    SetAttributionReportingLocalTestingModeParamsBuilder() : result_(new SetAttributionReportingLocalTestingModeParams()) { }

    template<int STEP> SetAttributionReportingLocalTestingModeParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetAttributionReportingLocalTestingModeParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetAttributionReportingLocalTestingModeParams> result_;
  };

  static SetAttributionReportingLocalTestingModeParamsBuilder<0> Builder() {
    return SetAttributionReportingLocalTestingModeParamsBuilder<0>();
  }

 private:
  SetAttributionReportingLocalTestingModeParams() { }

  bool enabled_;
};


// Result for the SetAttributionReportingLocalTestingMode command.
class HEADLESS_EXPORT SetAttributionReportingLocalTestingModeResult {
 public:
  static std::unique_ptr<SetAttributionReportingLocalTestingModeResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetAttributionReportingLocalTestingModeResult(const SetAttributionReportingLocalTestingModeResult&) = delete;
  SetAttributionReportingLocalTestingModeResult& operator=(const SetAttributionReportingLocalTestingModeResult&) = delete;

  ~SetAttributionReportingLocalTestingModeResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetAttributionReportingLocalTestingModeResult> Clone() const;

  template<int STATE>
  class SetAttributionReportingLocalTestingModeResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetAttributionReportingLocalTestingModeResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetAttributionReportingLocalTestingModeResult;
    SetAttributionReportingLocalTestingModeResultBuilder() : result_(new SetAttributionReportingLocalTestingModeResult()) { }

    template<int STEP> SetAttributionReportingLocalTestingModeResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetAttributionReportingLocalTestingModeResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetAttributionReportingLocalTestingModeResult> result_;
  };

  static SetAttributionReportingLocalTestingModeResultBuilder<0> Builder() {
    return SetAttributionReportingLocalTestingModeResultBuilder<0>();
  }

 private:
  SetAttributionReportingLocalTestingModeResult() { }

};


// Parameters for the SetAttributionReportingTracking command.
class HEADLESS_EXPORT SetAttributionReportingTrackingParams {
 public:
  static std::unique_ptr<SetAttributionReportingTrackingParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetAttributionReportingTrackingParams(const SetAttributionReportingTrackingParams&) = delete;
  SetAttributionReportingTrackingParams& operator=(const SetAttributionReportingTrackingParams&) = delete;

  ~SetAttributionReportingTrackingParams() { }


  bool GetEnable() const { return enable_; }
  void SetEnable(bool value) { enable_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetAttributionReportingTrackingParams> Clone() const;

  template<int STATE>
  class SetAttributionReportingTrackingParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kEnableSet = 1 << 1,
      kAllRequiredFieldsSet = (kEnableSet | 0)
    };

    SetAttributionReportingTrackingParamsBuilder<STATE | kEnableSet>& SetEnable(bool value) {
      static_assert(!(STATE & kEnableSet), "property enable should not have already been set");
      result_->SetEnable(value);
      return CastState<kEnableSet>();
    }

    std::unique_ptr<SetAttributionReportingTrackingParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetAttributionReportingTrackingParams;
    SetAttributionReportingTrackingParamsBuilder() : result_(new SetAttributionReportingTrackingParams()) { }

    template<int STEP> SetAttributionReportingTrackingParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetAttributionReportingTrackingParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetAttributionReportingTrackingParams> result_;
  };

  static SetAttributionReportingTrackingParamsBuilder<0> Builder() {
    return SetAttributionReportingTrackingParamsBuilder<0>();
  }

 private:
  SetAttributionReportingTrackingParams() { }

  bool enable_;
};


// Result for the SetAttributionReportingTracking command.
class HEADLESS_EXPORT SetAttributionReportingTrackingResult {
 public:
  static std::unique_ptr<SetAttributionReportingTrackingResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetAttributionReportingTrackingResult(const SetAttributionReportingTrackingResult&) = delete;
  SetAttributionReportingTrackingResult& operator=(const SetAttributionReportingTrackingResult&) = delete;

  ~SetAttributionReportingTrackingResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetAttributionReportingTrackingResult> Clone() const;

  template<int STATE>
  class SetAttributionReportingTrackingResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetAttributionReportingTrackingResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetAttributionReportingTrackingResult;
    SetAttributionReportingTrackingResultBuilder() : result_(new SetAttributionReportingTrackingResult()) { }

    template<int STEP> SetAttributionReportingTrackingResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetAttributionReportingTrackingResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetAttributionReportingTrackingResult> result_;
  };

  static SetAttributionReportingTrackingResultBuilder<0> Builder() {
    return SetAttributionReportingTrackingResultBuilder<0>();
  }

 private:
  SetAttributionReportingTrackingResult() { }

};


// Parameters for the CacheStorageContentUpdated event.
class HEADLESS_EXPORT CacheStorageContentUpdatedParams {
 public:
  static std::unique_ptr<CacheStorageContentUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors);

  CacheStorageContentUpdatedParams(const CacheStorageContentUpdatedParams&) = delete;
  CacheStorageContentUpdatedParams& operator=(const CacheStorageContentUpdatedParams&) = delete;

  ~CacheStorageContentUpdatedParams() { }


  // Origin to update.
  std::string GetOrigin() const { return origin_; }
  void SetOrigin(const std::string& value) { origin_ = value; }

  // Storage key to update.
  std::string GetStorageKey() const { return storage_key_; }
  void SetStorageKey(const std::string& value) { storage_key_ = value; }

  // Storage bucket to update.
  std::string GetBucketId() const { return bucket_id_; }
  void SetBucketId(const std::string& value) { bucket_id_ = value; }

  // Name of cache in origin.
  std::string GetCacheName() const { return cache_name_; }
  void SetCacheName(const std::string& value) { cache_name_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<CacheStorageContentUpdatedParams> Clone() const;

  template<int STATE>
  class CacheStorageContentUpdatedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kOriginSet = 1 << 1,
    kStorageKeySet = 1 << 2,
    kBucketIdSet = 1 << 3,
    kCacheNameSet = 1 << 4,
      kAllRequiredFieldsSet = (kOriginSet | kStorageKeySet | kBucketIdSet | kCacheNameSet | 0)
    };

    CacheStorageContentUpdatedParamsBuilder<STATE | kOriginSet>& SetOrigin(const std::string& value) {
      static_assert(!(STATE & kOriginSet), "property origin should not have already been set");
      result_->SetOrigin(value);
      return CastState<kOriginSet>();
    }

    CacheStorageContentUpdatedParamsBuilder<STATE | kStorageKeySet>& SetStorageKey(const std::string& value) {
      static_assert(!(STATE & kStorageKeySet), "property storageKey should not have already been set");
      result_->SetStorageKey(value);
      return CastState<kStorageKeySet>();
    }

    CacheStorageContentUpdatedParamsBuilder<STATE | kBucketIdSet>& SetBucketId(const std::string& value) {
      static_assert(!(STATE & kBucketIdSet), "property bucketId should not have already been set");
      result_->SetBucketId(value);
      return CastState<kBucketIdSet>();
    }

    CacheStorageContentUpdatedParamsBuilder<STATE | kCacheNameSet>& SetCacheName(const std::string& value) {
      static_assert(!(STATE & kCacheNameSet), "property cacheName should not have already been set");
      result_->SetCacheName(value);
      return CastState<kCacheNameSet>();
    }

    std::unique_ptr<CacheStorageContentUpdatedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class CacheStorageContentUpdatedParams;
    CacheStorageContentUpdatedParamsBuilder() : result_(new CacheStorageContentUpdatedParams()) { }

    template<int STEP> CacheStorageContentUpdatedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<CacheStorageContentUpdatedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<CacheStorageContentUpdatedParams> result_;
  };

  static CacheStorageContentUpdatedParamsBuilder<0> Builder() {
    return CacheStorageContentUpdatedParamsBuilder<0>();
  }

 private:
  CacheStorageContentUpdatedParams() { }

  std::string origin_;
  std::string storage_key_;
  std::string bucket_id_;
  std::string cache_name_;
};


// Parameters for the CacheStorageListUpdated event.
class HEADLESS_EXPORT CacheStorageListUpdatedParams {
 public:
  static std::unique_ptr<CacheStorageListUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors);

  CacheStorageListUpdatedParams(const CacheStorageListUpdatedParams&) = delete;
  CacheStorageListUpdatedParams& operator=(const CacheStorageListUpdatedParams&) = delete;

  ~CacheStorageListUpdatedParams() { }


  // Origin to update.
  std::string GetOrigin() const { return origin_; }
  void SetOrigin(const std::string& value) { origin_ = value; }

  // Storage key to update.
  std::string GetStorageKey() const { return storage_key_; }
  void SetStorageKey(const std::string& value) { storage_key_ = value; }

  // Storage bucket to update.
  std::string GetBucketId() const { return bucket_id_; }
  void SetBucketId(const std::string& value) { bucket_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<CacheStorageListUpdatedParams> Clone() const;

  template<int STATE>
  class CacheStorageListUpdatedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kOriginSet = 1 << 1,
    kStorageKeySet = 1 << 2,
    kBucketIdSet = 1 << 3,
      kAllRequiredFieldsSet = (kOriginSet | kStorageKeySet | kBucketIdSet | 0)
    };

    CacheStorageListUpdatedParamsBuilder<STATE | kOriginSet>& SetOrigin(const std::string& value) {
      static_assert(!(STATE & kOriginSet), "property origin should not have already been set");
      result_->SetOrigin(value);
      return CastState<kOriginSet>();
    }

    CacheStorageListUpdatedParamsBuilder<STATE | kStorageKeySet>& SetStorageKey(const std::string& value) {
      static_assert(!(STATE & kStorageKeySet), "property storageKey should not have already been set");
      result_->SetStorageKey(value);
      return CastState<kStorageKeySet>();
    }

    CacheStorageListUpdatedParamsBuilder<STATE | kBucketIdSet>& SetBucketId(const std::string& value) {
      static_assert(!(STATE & kBucketIdSet), "property bucketId should not have already been set");
      result_->SetBucketId(value);
      return CastState<kBucketIdSet>();
    }

    std::unique_ptr<CacheStorageListUpdatedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class CacheStorageListUpdatedParams;
    CacheStorageListUpdatedParamsBuilder() : result_(new CacheStorageListUpdatedParams()) { }

    template<int STEP> CacheStorageListUpdatedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<CacheStorageListUpdatedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<CacheStorageListUpdatedParams> result_;
  };

  static CacheStorageListUpdatedParamsBuilder<0> Builder() {
    return CacheStorageListUpdatedParamsBuilder<0>();
  }

 private:
  CacheStorageListUpdatedParams() { }

  std::string origin_;
  std::string storage_key_;
  std::string bucket_id_;
};


// Parameters for the IndexedDBContentUpdated event.
class HEADLESS_EXPORT IndexedDBContentUpdatedParams {
 public:
  static std::unique_ptr<IndexedDBContentUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors);

  IndexedDBContentUpdatedParams(const IndexedDBContentUpdatedParams&) = delete;
  IndexedDBContentUpdatedParams& operator=(const IndexedDBContentUpdatedParams&) = delete;

  ~IndexedDBContentUpdatedParams() { }


  // Origin to update.
  std::string GetOrigin() const { return origin_; }
  void SetOrigin(const std::string& value) { origin_ = value; }

  // Storage key to update.
  std::string GetStorageKey() const { return storage_key_; }
  void SetStorageKey(const std::string& value) { storage_key_ = value; }

  // Storage bucket to update.
  std::string GetBucketId() const { return bucket_id_; }
  void SetBucketId(const std::string& value) { bucket_id_ = value; }

  // Database to update.
  std::string GetDatabaseName() const { return database_name_; }
  void SetDatabaseName(const std::string& value) { database_name_ = value; }

  // ObjectStore to update.
  std::string GetObjectStoreName() const { return object_store_name_; }
  void SetObjectStoreName(const std::string& value) { object_store_name_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<IndexedDBContentUpdatedParams> Clone() const;

  template<int STATE>
  class IndexedDBContentUpdatedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kOriginSet = 1 << 1,
    kStorageKeySet = 1 << 2,
    kBucketIdSet = 1 << 3,
    kDatabaseNameSet = 1 << 4,
    kObjectStoreNameSet = 1 << 5,
      kAllRequiredFieldsSet = (kOriginSet | kStorageKeySet | kBucketIdSet | kDatabaseNameSet | kObjectStoreNameSet | 0)
    };

    IndexedDBContentUpdatedParamsBuilder<STATE | kOriginSet>& SetOrigin(const std::string& value) {
      static_assert(!(STATE & kOriginSet), "property origin should not have already been set");
      result_->SetOrigin(value);
      return CastState<kOriginSet>();
    }

    IndexedDBContentUpdatedParamsBuilder<STATE | kStorageKeySet>& SetStorageKey(const std::string& value) {
      static_assert(!(STATE & kStorageKeySet), "property storageKey should not have already been set");
      result_->SetStorageKey(value);
      return CastState<kStorageKeySet>();
    }

    IndexedDBContentUpdatedParamsBuilder<STATE | kBucketIdSet>& SetBucketId(const std::string& value) {
      static_assert(!(STATE & kBucketIdSet), "property bucketId should not have already been set");
      result_->SetBucketId(value);
      return CastState<kBucketIdSet>();
    }

    IndexedDBContentUpdatedParamsBuilder<STATE | kDatabaseNameSet>& SetDatabaseName(const std::string& value) {
      static_assert(!(STATE & kDatabaseNameSet), "property databaseName should not have already been set");
      result_->SetDatabaseName(value);
      return CastState<kDatabaseNameSet>();
    }

    IndexedDBContentUpdatedParamsBuilder<STATE | kObjectStoreNameSet>& SetObjectStoreName(const std::string& value) {
      static_assert(!(STATE & kObjectStoreNameSet), "property objectStoreName should not have already been set");
      result_->SetObjectStoreName(value);
      return CastState<kObjectStoreNameSet>();
    }

    std::unique_ptr<IndexedDBContentUpdatedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class IndexedDBContentUpdatedParams;
    IndexedDBContentUpdatedParamsBuilder() : result_(new IndexedDBContentUpdatedParams()) { }

    template<int STEP> IndexedDBContentUpdatedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<IndexedDBContentUpdatedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<IndexedDBContentUpdatedParams> result_;
  };

  static IndexedDBContentUpdatedParamsBuilder<0> Builder() {
    return IndexedDBContentUpdatedParamsBuilder<0>();
  }

 private:
  IndexedDBContentUpdatedParams() { }

  std::string origin_;
  std::string storage_key_;
  std::string bucket_id_;
  std::string database_name_;
  std::string object_store_name_;
};


// Parameters for the IndexedDBListUpdated event.
class HEADLESS_EXPORT IndexedDBListUpdatedParams {
 public:
  static std::unique_ptr<IndexedDBListUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors);

  IndexedDBListUpdatedParams(const IndexedDBListUpdatedParams&) = delete;
  IndexedDBListUpdatedParams& operator=(const IndexedDBListUpdatedParams&) = delete;

  ~IndexedDBListUpdatedParams() { }


  // Origin to update.
  std::string GetOrigin() const { return origin_; }
  void SetOrigin(const std::string& value) { origin_ = value; }

  // Storage key to update.
  std::string GetStorageKey() const { return storage_key_; }
  void SetStorageKey(const std::string& value) { storage_key_ = value; }

  // Storage bucket to update.
  std::string GetBucketId() const { return bucket_id_; }
  void SetBucketId(const std::string& value) { bucket_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<IndexedDBListUpdatedParams> Clone() const;

  template<int STATE>
  class IndexedDBListUpdatedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kOriginSet = 1 << 1,
    kStorageKeySet = 1 << 2,
    kBucketIdSet = 1 << 3,
      kAllRequiredFieldsSet = (kOriginSet | kStorageKeySet | kBucketIdSet | 0)
    };

    IndexedDBListUpdatedParamsBuilder<STATE | kOriginSet>& SetOrigin(const std::string& value) {
      static_assert(!(STATE & kOriginSet), "property origin should not have already been set");
      result_->SetOrigin(value);
      return CastState<kOriginSet>();
    }

    IndexedDBListUpdatedParamsBuilder<STATE | kStorageKeySet>& SetStorageKey(const std::string& value) {
      static_assert(!(STATE & kStorageKeySet), "property storageKey should not have already been set");
      result_->SetStorageKey(value);
      return CastState<kStorageKeySet>();
    }

    IndexedDBListUpdatedParamsBuilder<STATE | kBucketIdSet>& SetBucketId(const std::string& value) {
      static_assert(!(STATE & kBucketIdSet), "property bucketId should not have already been set");
      result_->SetBucketId(value);
      return CastState<kBucketIdSet>();
    }

    std::unique_ptr<IndexedDBListUpdatedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class IndexedDBListUpdatedParams;
    IndexedDBListUpdatedParamsBuilder() : result_(new IndexedDBListUpdatedParams()) { }

    template<int STEP> IndexedDBListUpdatedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<IndexedDBListUpdatedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<IndexedDBListUpdatedParams> result_;
  };

  static IndexedDBListUpdatedParamsBuilder<0> Builder() {
    return IndexedDBListUpdatedParamsBuilder<0>();
  }

 private:
  IndexedDBListUpdatedParams() { }

  std::string origin_;
  std::string storage_key_;
  std::string bucket_id_;
};


// Parameters for the InterestGroupAccessed event.
class HEADLESS_EXPORT InterestGroupAccessedParams {
 public:
  static std::unique_ptr<InterestGroupAccessedParams> Parse(const base::Value& value, ErrorReporter* errors);

  InterestGroupAccessedParams(const InterestGroupAccessedParams&) = delete;
  InterestGroupAccessedParams& operator=(const InterestGroupAccessedParams&) = delete;

  ~InterestGroupAccessedParams() { }


  double GetAccessTime() const { return access_time_; }
  void SetAccessTime(double value) { access_time_ = value; }

  ::headless::storage::InterestGroupAccessType GetType() const { return type_; }
  void SetType(::headless::storage::InterestGroupAccessType value) { type_ = value; }

  std::string GetOwnerOrigin() const { return owner_origin_; }
  void SetOwnerOrigin(const std::string& value) { owner_origin_ = value; }

  std::string GetName() const { return name_; }
  void SetName(const std::string& value) { name_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<InterestGroupAccessedParams> Clone() const;

  template<int STATE>
  class InterestGroupAccessedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kAccessTimeSet = 1 << 1,
    kTypeSet = 1 << 2,
    kOwnerOriginSet = 1 << 3,
    kNameSet = 1 << 4,
      kAllRequiredFieldsSet = (kAccessTimeSet | kTypeSet | kOwnerOriginSet | kNameSet | 0)
    };

    InterestGroupAccessedParamsBuilder<STATE | kAccessTimeSet>& SetAccessTime(double value) {
      static_assert(!(STATE & kAccessTimeSet), "property accessTime should not have already been set");
      result_->SetAccessTime(value);
      return CastState<kAccessTimeSet>();
    }

    InterestGroupAccessedParamsBuilder<STATE | kTypeSet>& SetType(::headless::storage::InterestGroupAccessType value) {
      static_assert(!(STATE & kTypeSet), "property type should not have already been set");
      result_->SetType(value);
      return CastState<kTypeSet>();
    }

    InterestGroupAccessedParamsBuilder<STATE | kOwnerOriginSet>& SetOwnerOrigin(const std::string& value) {
      static_assert(!(STATE & kOwnerOriginSet), "property ownerOrigin should not have already been set");
      result_->SetOwnerOrigin(value);
      return CastState<kOwnerOriginSet>();
    }

    InterestGroupAccessedParamsBuilder<STATE | kNameSet>& SetName(const std::string& value) {
      static_assert(!(STATE & kNameSet), "property name should not have already been set");
      result_->SetName(value);
      return CastState<kNameSet>();
    }

    std::unique_ptr<InterestGroupAccessedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class InterestGroupAccessedParams;
    InterestGroupAccessedParamsBuilder() : result_(new InterestGroupAccessedParams()) { }

    template<int STEP> InterestGroupAccessedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<InterestGroupAccessedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<InterestGroupAccessedParams> result_;
  };

  static InterestGroupAccessedParamsBuilder<0> Builder() {
    return InterestGroupAccessedParamsBuilder<0>();
  }

 private:
  InterestGroupAccessedParams() { }

  double access_time_;
  ::headless::storage::InterestGroupAccessType type_;
  std::string owner_origin_;
  std::string name_;
};


// Parameters for the SharedStorageAccessed event.
class HEADLESS_EXPORT SharedStorageAccessedParams {
 public:
  static std::unique_ptr<SharedStorageAccessedParams> Parse(const base::Value& value, ErrorReporter* errors);

  SharedStorageAccessedParams(const SharedStorageAccessedParams&) = delete;
  SharedStorageAccessedParams& operator=(const SharedStorageAccessedParams&) = delete;

  ~SharedStorageAccessedParams() { }


  // Time of the access.
  double GetAccessTime() const { return access_time_; }
  void SetAccessTime(double value) { access_time_ = value; }

  // Enum value indicating the Shared Storage API method invoked.
  ::headless::storage::SharedStorageAccessType GetType() const { return type_; }
  void SetType(::headless::storage::SharedStorageAccessType value) { type_ = value; }

  // DevTools Frame Token for the primary frame tree's root.
  std::string GetMainFrameId() const { return main_frame_id_; }
  void SetMainFrameId(const std::string& value) { main_frame_id_ = value; }

  // Serialized origin for the context that invoked the Shared Storage API.
  std::string GetOwnerOrigin() const { return owner_origin_; }
  void SetOwnerOrigin(const std::string& value) { owner_origin_ = value; }

  // The sub-parameters warapped by `params` are all optional and their
  // presence/absence depends on `type`.
  const ::headless::storage::SharedStorageAccessParams* GetParams() const { return params_.get(); }
  void SetParams(std::unique_ptr<::headless::storage::SharedStorageAccessParams> value) { params_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<SharedStorageAccessedParams> Clone() const;

  template<int STATE>
  class SharedStorageAccessedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kAccessTimeSet = 1 << 1,
    kTypeSet = 1 << 2,
    kMainFrameIdSet = 1 << 3,
    kOwnerOriginSet = 1 << 4,
    kParamsSet = 1 << 5,
      kAllRequiredFieldsSet = (kAccessTimeSet | kTypeSet | kMainFrameIdSet | kOwnerOriginSet | kParamsSet | 0)
    };

    SharedStorageAccessedParamsBuilder<STATE | kAccessTimeSet>& SetAccessTime(double value) {
      static_assert(!(STATE & kAccessTimeSet), "property accessTime should not have already been set");
      result_->SetAccessTime(value);
      return CastState<kAccessTimeSet>();
    }

    SharedStorageAccessedParamsBuilder<STATE | kTypeSet>& SetType(::headless::storage::SharedStorageAccessType value) {
      static_assert(!(STATE & kTypeSet), "property type should not have already been set");
      result_->SetType(value);
      return CastState<kTypeSet>();
    }

    SharedStorageAccessedParamsBuilder<STATE | kMainFrameIdSet>& SetMainFrameId(const std::string& value) {
      static_assert(!(STATE & kMainFrameIdSet), "property mainFrameId should not have already been set");
      result_->SetMainFrameId(value);
      return CastState<kMainFrameIdSet>();
    }

    SharedStorageAccessedParamsBuilder<STATE | kOwnerOriginSet>& SetOwnerOrigin(const std::string& value) {
      static_assert(!(STATE & kOwnerOriginSet), "property ownerOrigin should not have already been set");
      result_->SetOwnerOrigin(value);
      return CastState<kOwnerOriginSet>();
    }

    SharedStorageAccessedParamsBuilder<STATE | kParamsSet>& SetParams(std::unique_ptr<::headless::storage::SharedStorageAccessParams> value) {
      static_assert(!(STATE & kParamsSet), "property params should not have already been set");
      result_->SetParams(std::move(value));
      return CastState<kParamsSet>();
    }

    std::unique_ptr<SharedStorageAccessedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SharedStorageAccessedParams;
    SharedStorageAccessedParamsBuilder() : result_(new SharedStorageAccessedParams()) { }

    template<int STEP> SharedStorageAccessedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SharedStorageAccessedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SharedStorageAccessedParams> result_;
  };

  static SharedStorageAccessedParamsBuilder<0> Builder() {
    return SharedStorageAccessedParamsBuilder<0>();
  }

 private:
  SharedStorageAccessedParams() { }

  double access_time_;
  ::headless::storage::SharedStorageAccessType type_;
  std::string main_frame_id_;
  std::string owner_origin_;
  std::unique_ptr<::headless::storage::SharedStorageAccessParams> params_;
};


// Parameters for the StorageBucketCreatedOrUpdated event.
class HEADLESS_EXPORT StorageBucketCreatedOrUpdatedParams {
 public:
  static std::unique_ptr<StorageBucketCreatedOrUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors);

  StorageBucketCreatedOrUpdatedParams(const StorageBucketCreatedOrUpdatedParams&) = delete;
  StorageBucketCreatedOrUpdatedParams& operator=(const StorageBucketCreatedOrUpdatedParams&) = delete;

  ~StorageBucketCreatedOrUpdatedParams() { }


  const ::headless::storage::StorageBucketInfo* GetBucketInfo() const { return bucket_info_.get(); }
  void SetBucketInfo(std::unique_ptr<::headless::storage::StorageBucketInfo> value) { bucket_info_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<StorageBucketCreatedOrUpdatedParams> Clone() const;

  template<int STATE>
  class StorageBucketCreatedOrUpdatedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kBucketInfoSet = 1 << 1,
      kAllRequiredFieldsSet = (kBucketInfoSet | 0)
    };

    StorageBucketCreatedOrUpdatedParamsBuilder<STATE | kBucketInfoSet>& SetBucketInfo(std::unique_ptr<::headless::storage::StorageBucketInfo> value) {
      static_assert(!(STATE & kBucketInfoSet), "property bucketInfo should not have already been set");
      result_->SetBucketInfo(std::move(value));
      return CastState<kBucketInfoSet>();
    }

    std::unique_ptr<StorageBucketCreatedOrUpdatedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class StorageBucketCreatedOrUpdatedParams;
    StorageBucketCreatedOrUpdatedParamsBuilder() : result_(new StorageBucketCreatedOrUpdatedParams()) { }

    template<int STEP> StorageBucketCreatedOrUpdatedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<StorageBucketCreatedOrUpdatedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<StorageBucketCreatedOrUpdatedParams> result_;
  };

  static StorageBucketCreatedOrUpdatedParamsBuilder<0> Builder() {
    return StorageBucketCreatedOrUpdatedParamsBuilder<0>();
  }

 private:
  StorageBucketCreatedOrUpdatedParams() { }

  std::unique_ptr<::headless::storage::StorageBucketInfo> bucket_info_;
};


// Parameters for the StorageBucketDeleted event.
class HEADLESS_EXPORT StorageBucketDeletedParams {
 public:
  static std::unique_ptr<StorageBucketDeletedParams> Parse(const base::Value& value, ErrorReporter* errors);

  StorageBucketDeletedParams(const StorageBucketDeletedParams&) = delete;
  StorageBucketDeletedParams& operator=(const StorageBucketDeletedParams&) = delete;

  ~StorageBucketDeletedParams() { }


  std::string GetBucketId() const { return bucket_id_; }
  void SetBucketId(const std::string& value) { bucket_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<StorageBucketDeletedParams> Clone() const;

  template<int STATE>
  class StorageBucketDeletedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kBucketIdSet = 1 << 1,
      kAllRequiredFieldsSet = (kBucketIdSet | 0)
    };

    StorageBucketDeletedParamsBuilder<STATE | kBucketIdSet>& SetBucketId(const std::string& value) {
      static_assert(!(STATE & kBucketIdSet), "property bucketId should not have already been set");
      result_->SetBucketId(value);
      return CastState<kBucketIdSet>();
    }

    std::unique_ptr<StorageBucketDeletedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class StorageBucketDeletedParams;
    StorageBucketDeletedParamsBuilder() : result_(new StorageBucketDeletedParams()) { }

    template<int STEP> StorageBucketDeletedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<StorageBucketDeletedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<StorageBucketDeletedParams> result_;
  };

  static StorageBucketDeletedParamsBuilder<0> Builder() {
    return StorageBucketDeletedParamsBuilder<0>();
  }

 private:
  StorageBucketDeletedParams() { }

  std::string bucket_id_;
};


// Parameters for the AttributionReportingSourceRegistered event.
class HEADLESS_EXPORT AttributionReportingSourceRegisteredParams {
 public:
  static std::unique_ptr<AttributionReportingSourceRegisteredParams> Parse(const base::Value& value, ErrorReporter* errors);

  AttributionReportingSourceRegisteredParams(const AttributionReportingSourceRegisteredParams&) = delete;
  AttributionReportingSourceRegisteredParams& operator=(const AttributionReportingSourceRegisteredParams&) = delete;

  ~AttributionReportingSourceRegisteredParams() { }


  const ::headless::storage::AttributionReportingSourceRegistration* GetRegistration() const { return registration_.get(); }
  void SetRegistration(std::unique_ptr<::headless::storage::AttributionReportingSourceRegistration> value) { registration_ = std::move(value); }

  ::headless::storage::AttributionReportingSourceRegistrationResult GetResult() const { return result_; }
  void SetResult(::headless::storage::AttributionReportingSourceRegistrationResult value) { result_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<AttributionReportingSourceRegisteredParams> Clone() const;

  template<int STATE>
  class AttributionReportingSourceRegisteredParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kRegistrationSet = 1 << 1,
    kResultSet = 1 << 2,
      kAllRequiredFieldsSet = (kRegistrationSet | kResultSet | 0)
    };

    AttributionReportingSourceRegisteredParamsBuilder<STATE | kRegistrationSet>& SetRegistration(std::unique_ptr<::headless::storage::AttributionReportingSourceRegistration> value) {
      static_assert(!(STATE & kRegistrationSet), "property registration should not have already been set");
      result_->SetRegistration(std::move(value));
      return CastState<kRegistrationSet>();
    }

    AttributionReportingSourceRegisteredParamsBuilder<STATE | kResultSet>& SetResult(::headless::storage::AttributionReportingSourceRegistrationResult value) {
      static_assert(!(STATE & kResultSet), "property result should not have already been set");
      result_->SetResult(value);
      return CastState<kResultSet>();
    }

    std::unique_ptr<AttributionReportingSourceRegisteredParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class AttributionReportingSourceRegisteredParams;
    AttributionReportingSourceRegisteredParamsBuilder() : result_(new AttributionReportingSourceRegisteredParams()) { }

    template<int STEP> AttributionReportingSourceRegisteredParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<AttributionReportingSourceRegisteredParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<AttributionReportingSourceRegisteredParams> result_;
  };

  static AttributionReportingSourceRegisteredParamsBuilder<0> Builder() {
    return AttributionReportingSourceRegisteredParamsBuilder<0>();
  }

 private:
  AttributionReportingSourceRegisteredParams() { }

  std::unique_ptr<::headless::storage::AttributionReportingSourceRegistration> registration_;
  ::headless::storage::AttributionReportingSourceRegistrationResult result_;
};


}  // namespace storage

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_STORAGE_H_
