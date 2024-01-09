// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/types_browser.h"
#include "headless/public/devtools/domains/types_dom.h"
#include "headless/public/devtools/domains/types_debugger.h"
#include "headless/public/devtools/domains/types_emulation.h"
#include "headless/public/devtools/domains/types_io.h"
#include "headless/public/devtools/domains/types_network.h"
#include "headless/public/devtools/domains/types_page.h"
#include "headless/public/devtools/domains/types_runtime.h"
#include "headless/public/devtools/domains/types_security.h"
#include "headless/public/devtools/domains/types_storage.h"
#include "headless/public/devtools/domains/types_target.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_browser.h"
#include "headless/public/devtools/internal/type_conversions_dom.h"
#include "headless/public/devtools/internal/type_conversions_debugger.h"
#include "headless/public/devtools/internal/type_conversions_emulation.h"
#include "headless/public/devtools/internal/type_conversions_io.h"
#include "headless/public/devtools/internal/type_conversions_network.h"
#include "headless/public/devtools/internal/type_conversions_page.h"
#include "headless/public/devtools/internal/type_conversions_runtime.h"
#include "headless/public/devtools/internal/type_conversions_security.h"
#include "headless/public/devtools/internal/type_conversions_storage.h"
#include "headless/public/devtools/internal/type_conversions_target.h"

namespace headless {

namespace storage {

std::unique_ptr<UsageForType> UsageForType::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("UsageForType");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<UsageForType> result(new UsageForType());
  errors->Push();
  errors->SetName("UsageForType");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* storage_type_value = dict.Find("storageType");
  if (storage_type_value) {
    errors->SetName("storageType");
    result->storage_type_ = internal::FromValue<::headless::storage::StorageType>::Parse(*storage_type_value, errors);
  } else {
    errors->AddError("required property missing: storageType");
  }
  const base::Value* usage_value = dict.Find("usage");
  if (usage_value) {
    errors->SetName("usage");
    result->usage_ = internal::FromValue<double>::Parse(*usage_value, errors);
  } else {
    errors->AddError("required property missing: usage");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value UsageForType::Serialize() const {
  base::Value::Dict result;
  result.Set("storageType", internal::ToValue(storage_type_));
  result.Set("usage", internal::ToValue(usage_));
  return base::Value(std::move(result));
}

std::unique_ptr<UsageForType> UsageForType::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<UsageForType> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TrustTokens> TrustTokens::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TrustTokens");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TrustTokens> result(new TrustTokens());
  errors->Push();
  errors->SetName("TrustTokens");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* issuer_origin_value = dict.Find("issuerOrigin");
  if (issuer_origin_value) {
    errors->SetName("issuerOrigin");
    result->issuer_origin_ = internal::FromValue<std::string>::Parse(*issuer_origin_value, errors);
  } else {
    errors->AddError("required property missing: issuerOrigin");
  }
  const base::Value* count_value = dict.Find("count");
  if (count_value) {
    errors->SetName("count");
    result->count_ = internal::FromValue<double>::Parse(*count_value, errors);
  } else {
    errors->AddError("required property missing: count");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TrustTokens::Serialize() const {
  base::Value::Dict result;
  result.Set("issuerOrigin", internal::ToValue(issuer_origin_));
  result.Set("count", internal::ToValue(count_));
  return base::Value(std::move(result));
}

std::unique_ptr<TrustTokens> TrustTokens::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TrustTokens> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<InterestGroupAd> InterestGroupAd::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("InterestGroupAd");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<InterestGroupAd> result(new InterestGroupAd());
  errors->Push();
  errors->SetName("InterestGroupAd");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* renderurl_value = dict.Find("renderURL");
  if (renderurl_value) {
    errors->SetName("renderURL");
    result->renderurl_ = internal::FromValue<std::string>::Parse(*renderurl_value, errors);
  } else {
    errors->AddError("required property missing: renderURL");
  }
  const base::Value* metadata_value = dict.Find("metadata");
  if (metadata_value) {
    errors->SetName("metadata");
    result->metadata_ = internal::FromValue<std::string>::Parse(*metadata_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value InterestGroupAd::Serialize() const {
  base::Value::Dict result;
  result.Set("renderURL", internal::ToValue(renderurl_));
  if (metadata_)
    result.Set("metadata", internal::ToValue(metadata_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<InterestGroupAd> InterestGroupAd::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<InterestGroupAd> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<InterestGroupDetails> InterestGroupDetails::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("InterestGroupDetails");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<InterestGroupDetails> result(new InterestGroupDetails());
  errors->Push();
  errors->SetName("InterestGroupDetails");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* owner_origin_value = dict.Find("ownerOrigin");
  if (owner_origin_value) {
    errors->SetName("ownerOrigin");
    result->owner_origin_ = internal::FromValue<std::string>::Parse(*owner_origin_value, errors);
  } else {
    errors->AddError("required property missing: ownerOrigin");
  }
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  } else {
    errors->AddError("required property missing: name");
  }
  const base::Value* expiration_time_value = dict.Find("expirationTime");
  if (expiration_time_value) {
    errors->SetName("expirationTime");
    result->expiration_time_ = internal::FromValue<double>::Parse(*expiration_time_value, errors);
  } else {
    errors->AddError("required property missing: expirationTime");
  }
  const base::Value* joining_origin_value = dict.Find("joiningOrigin");
  if (joining_origin_value) {
    errors->SetName("joiningOrigin");
    result->joining_origin_ = internal::FromValue<std::string>::Parse(*joining_origin_value, errors);
  } else {
    errors->AddError("required property missing: joiningOrigin");
  }
  const base::Value* bidding_logicurl_value = dict.Find("biddingLogicURL");
  if (bidding_logicurl_value) {
    errors->SetName("biddingLogicURL");
    result->bidding_logicurl_ = internal::FromValue<std::string>::Parse(*bidding_logicurl_value, errors);
  }
  const base::Value* bidding_wasm_helperurl_value = dict.Find("biddingWasmHelperURL");
  if (bidding_wasm_helperurl_value) {
    errors->SetName("biddingWasmHelperURL");
    result->bidding_wasm_helperurl_ = internal::FromValue<std::string>::Parse(*bidding_wasm_helperurl_value, errors);
  }
  const base::Value* updateurl_value = dict.Find("updateURL");
  if (updateurl_value) {
    errors->SetName("updateURL");
    result->updateurl_ = internal::FromValue<std::string>::Parse(*updateurl_value, errors);
  }
  const base::Value* trusted_bidding_signalsurl_value = dict.Find("trustedBiddingSignalsURL");
  if (trusted_bidding_signalsurl_value) {
    errors->SetName("trustedBiddingSignalsURL");
    result->trusted_bidding_signalsurl_ = internal::FromValue<std::string>::Parse(*trusted_bidding_signalsurl_value, errors);
  }
  const base::Value* trusted_bidding_signals_keys_value = dict.Find("trustedBiddingSignalsKeys");
  if (trusted_bidding_signals_keys_value) {
    errors->SetName("trustedBiddingSignalsKeys");
    result->trusted_bidding_signals_keys_ = internal::FromValue<std::vector<std::string>>::Parse(*trusted_bidding_signals_keys_value, errors);
  } else {
    errors->AddError("required property missing: trustedBiddingSignalsKeys");
  }
  const base::Value* user_bidding_signals_value = dict.Find("userBiddingSignals");
  if (user_bidding_signals_value) {
    errors->SetName("userBiddingSignals");
    result->user_bidding_signals_ = internal::FromValue<std::string>::Parse(*user_bidding_signals_value, errors);
  }
  const base::Value* ads_value = dict.Find("ads");
  if (ads_value) {
    errors->SetName("ads");
    result->ads_ = internal::FromValue<std::vector<std::unique_ptr<::headless::storage::InterestGroupAd>>>::Parse(*ads_value, errors);
  } else {
    errors->AddError("required property missing: ads");
  }
  const base::Value* ad_components_value = dict.Find("adComponents");
  if (ad_components_value) {
    errors->SetName("adComponents");
    result->ad_components_ = internal::FromValue<std::vector<std::unique_ptr<::headless::storage::InterestGroupAd>>>::Parse(*ad_components_value, errors);
  } else {
    errors->AddError("required property missing: adComponents");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value InterestGroupDetails::Serialize() const {
  base::Value::Dict result;
  result.Set("ownerOrigin", internal::ToValue(owner_origin_));
  result.Set("name", internal::ToValue(name_));
  result.Set("expirationTime", internal::ToValue(expiration_time_));
  result.Set("joiningOrigin", internal::ToValue(joining_origin_));
  if (bidding_logicurl_)
    result.Set("biddingLogicURL", internal::ToValue(bidding_logicurl_.value()));
  if (bidding_wasm_helperurl_)
    result.Set("biddingWasmHelperURL", internal::ToValue(bidding_wasm_helperurl_.value()));
  if (updateurl_)
    result.Set("updateURL", internal::ToValue(updateurl_.value()));
  if (trusted_bidding_signalsurl_)
    result.Set("trustedBiddingSignalsURL", internal::ToValue(trusted_bidding_signalsurl_.value()));
  result.Set("trustedBiddingSignalsKeys", internal::ToValue(trusted_bidding_signals_keys_));
  if (user_bidding_signals_)
    result.Set("userBiddingSignals", internal::ToValue(user_bidding_signals_.value()));
  result.Set("ads", internal::ToValue(ads_));
  result.Set("adComponents", internal::ToValue(ad_components_));
  return base::Value(std::move(result));
}

std::unique_ptr<InterestGroupDetails> InterestGroupDetails::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<InterestGroupDetails> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SharedStorageEntry> SharedStorageEntry::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SharedStorageEntry");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SharedStorageEntry> result(new SharedStorageEntry());
  errors->Push();
  errors->SetName("SharedStorageEntry");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* key_value = dict.Find("key");
  if (key_value) {
    errors->SetName("key");
    result->key_ = internal::FromValue<std::string>::Parse(*key_value, errors);
  } else {
    errors->AddError("required property missing: key");
  }
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<std::string>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SharedStorageEntry::Serialize() const {
  base::Value::Dict result;
  result.Set("key", internal::ToValue(key_));
  result.Set("value", internal::ToValue(value_));
  return base::Value(std::move(result));
}

std::unique_ptr<SharedStorageEntry> SharedStorageEntry::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SharedStorageEntry> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SharedStorageMetadata> SharedStorageMetadata::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SharedStorageMetadata");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SharedStorageMetadata> result(new SharedStorageMetadata());
  errors->Push();
  errors->SetName("SharedStorageMetadata");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* creation_time_value = dict.Find("creationTime");
  if (creation_time_value) {
    errors->SetName("creationTime");
    result->creation_time_ = internal::FromValue<double>::Parse(*creation_time_value, errors);
  } else {
    errors->AddError("required property missing: creationTime");
  }
  const base::Value* length_value = dict.Find("length");
  if (length_value) {
    errors->SetName("length");
    result->length_ = internal::FromValue<int>::Parse(*length_value, errors);
  } else {
    errors->AddError("required property missing: length");
  }
  const base::Value* remaining_budget_value = dict.Find("remainingBudget");
  if (remaining_budget_value) {
    errors->SetName("remainingBudget");
    result->remaining_budget_ = internal::FromValue<double>::Parse(*remaining_budget_value, errors);
  } else {
    errors->AddError("required property missing: remainingBudget");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SharedStorageMetadata::Serialize() const {
  base::Value::Dict result;
  result.Set("creationTime", internal::ToValue(creation_time_));
  result.Set("length", internal::ToValue(length_));
  result.Set("remainingBudget", internal::ToValue(remaining_budget_));
  return base::Value(std::move(result));
}

std::unique_ptr<SharedStorageMetadata> SharedStorageMetadata::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SharedStorageMetadata> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SharedStorageReportingMetadata> SharedStorageReportingMetadata::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SharedStorageReportingMetadata");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SharedStorageReportingMetadata> result(new SharedStorageReportingMetadata());
  errors->Push();
  errors->SetName("SharedStorageReportingMetadata");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* event_type_value = dict.Find("eventType");
  if (event_type_value) {
    errors->SetName("eventType");
    result->event_type_ = internal::FromValue<std::string>::Parse(*event_type_value, errors);
  } else {
    errors->AddError("required property missing: eventType");
  }
  const base::Value* reporting_url_value = dict.Find("reportingUrl");
  if (reporting_url_value) {
    errors->SetName("reportingUrl");
    result->reporting_url_ = internal::FromValue<std::string>::Parse(*reporting_url_value, errors);
  } else {
    errors->AddError("required property missing: reportingUrl");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SharedStorageReportingMetadata::Serialize() const {
  base::Value::Dict result;
  result.Set("eventType", internal::ToValue(event_type_));
  result.Set("reportingUrl", internal::ToValue(reporting_url_));
  return base::Value(std::move(result));
}

std::unique_ptr<SharedStorageReportingMetadata> SharedStorageReportingMetadata::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SharedStorageReportingMetadata> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SharedStorageUrlWithMetadata> SharedStorageUrlWithMetadata::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SharedStorageUrlWithMetadata");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SharedStorageUrlWithMetadata> result(new SharedStorageUrlWithMetadata());
  errors->Push();
  errors->SetName("SharedStorageUrlWithMetadata");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    errors->SetName("url");
    result->url_ = internal::FromValue<std::string>::Parse(*url_value, errors);
  } else {
    errors->AddError("required property missing: url");
  }
  const base::Value* reporting_metadata_value = dict.Find("reportingMetadata");
  if (reporting_metadata_value) {
    errors->SetName("reportingMetadata");
    result->reporting_metadata_ = internal::FromValue<std::vector<std::unique_ptr<::headless::storage::SharedStorageReportingMetadata>>>::Parse(*reporting_metadata_value, errors);
  } else {
    errors->AddError("required property missing: reportingMetadata");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SharedStorageUrlWithMetadata::Serialize() const {
  base::Value::Dict result;
  result.Set("url", internal::ToValue(url_));
  result.Set("reportingMetadata", internal::ToValue(reporting_metadata_));
  return base::Value(std::move(result));
}

std::unique_ptr<SharedStorageUrlWithMetadata> SharedStorageUrlWithMetadata::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SharedStorageUrlWithMetadata> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SharedStorageAccessParams> SharedStorageAccessParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SharedStorageAccessParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SharedStorageAccessParams> result(new SharedStorageAccessParams());
  errors->Push();
  errors->SetName("SharedStorageAccessParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* script_source_url_value = dict.Find("scriptSourceUrl");
  if (script_source_url_value) {
    errors->SetName("scriptSourceUrl");
    result->script_source_url_ = internal::FromValue<std::string>::Parse(*script_source_url_value, errors);
  }
  const base::Value* operation_name_value = dict.Find("operationName");
  if (operation_name_value) {
    errors->SetName("operationName");
    result->operation_name_ = internal::FromValue<std::string>::Parse(*operation_name_value, errors);
  }
  const base::Value* serialized_data_value = dict.Find("serializedData");
  if (serialized_data_value) {
    errors->SetName("serializedData");
    result->serialized_data_ = internal::FromValue<std::string>::Parse(*serialized_data_value, errors);
  }
  const base::Value* urls_with_metadata_value = dict.Find("urlsWithMetadata");
  if (urls_with_metadata_value) {
    errors->SetName("urlsWithMetadata");
    result->urls_with_metadata_ = internal::FromValue<std::vector<std::unique_ptr<::headless::storage::SharedStorageUrlWithMetadata>>>::Parse(*urls_with_metadata_value, errors);
  }
  const base::Value* key_value = dict.Find("key");
  if (key_value) {
    errors->SetName("key");
    result->key_ = internal::FromValue<std::string>::Parse(*key_value, errors);
  }
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<std::string>::Parse(*value_value, errors);
  }
  const base::Value* ignore_if_present_value = dict.Find("ignoreIfPresent");
  if (ignore_if_present_value) {
    errors->SetName("ignoreIfPresent");
    result->ignore_if_present_ = internal::FromValue<bool>::Parse(*ignore_if_present_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SharedStorageAccessParams::Serialize() const {
  base::Value::Dict result;
  if (script_source_url_)
    result.Set("scriptSourceUrl", internal::ToValue(script_source_url_.value()));
  if (operation_name_)
    result.Set("operationName", internal::ToValue(operation_name_.value()));
  if (serialized_data_)
    result.Set("serializedData", internal::ToValue(serialized_data_.value()));
  if (urls_with_metadata_)
    result.Set("urlsWithMetadata", internal::ToValue(urls_with_metadata_.value()));
  if (key_)
    result.Set("key", internal::ToValue(key_.value()));
  if (value_)
    result.Set("value", internal::ToValue(value_.value()));
  if (ignore_if_present_)
    result.Set("ignoreIfPresent", internal::ToValue(ignore_if_present_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SharedStorageAccessParams> SharedStorageAccessParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SharedStorageAccessParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StorageBucket> StorageBucket::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StorageBucket");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StorageBucket> result(new StorageBucket());
  errors->Push();
  errors->SetName("StorageBucket");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* storage_key_value = dict.Find("storageKey");
  if (storage_key_value) {
    errors->SetName("storageKey");
    result->storage_key_ = internal::FromValue<std::string>::Parse(*storage_key_value, errors);
  } else {
    errors->AddError("required property missing: storageKey");
  }
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StorageBucket::Serialize() const {
  base::Value::Dict result;
  result.Set("storageKey", internal::ToValue(storage_key_));
  if (name_)
    result.Set("name", internal::ToValue(name_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<StorageBucket> StorageBucket::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StorageBucket> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StorageBucketInfo> StorageBucketInfo::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StorageBucketInfo");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StorageBucketInfo> result(new StorageBucketInfo());
  errors->Push();
  errors->SetName("StorageBucketInfo");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* bucket_value = dict.Find("bucket");
  if (bucket_value) {
    errors->SetName("bucket");
    result->bucket_ = internal::FromValue<::headless::storage::StorageBucket>::Parse(*bucket_value, errors);
  } else {
    errors->AddError("required property missing: bucket");
  }
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    errors->SetName("id");
    result->id_ = internal::FromValue<std::string>::Parse(*id_value, errors);
  } else {
    errors->AddError("required property missing: id");
  }
  const base::Value* expiration_value = dict.Find("expiration");
  if (expiration_value) {
    errors->SetName("expiration");
    result->expiration_ = internal::FromValue<double>::Parse(*expiration_value, errors);
  } else {
    errors->AddError("required property missing: expiration");
  }
  const base::Value* quota_value = dict.Find("quota");
  if (quota_value) {
    errors->SetName("quota");
    result->quota_ = internal::FromValue<double>::Parse(*quota_value, errors);
  } else {
    errors->AddError("required property missing: quota");
  }
  const base::Value* persistent_value = dict.Find("persistent");
  if (persistent_value) {
    errors->SetName("persistent");
    result->persistent_ = internal::FromValue<bool>::Parse(*persistent_value, errors);
  } else {
    errors->AddError("required property missing: persistent");
  }
  const base::Value* durability_value = dict.Find("durability");
  if (durability_value) {
    errors->SetName("durability");
    result->durability_ = internal::FromValue<::headless::storage::StorageBucketsDurability>::Parse(*durability_value, errors);
  } else {
    errors->AddError("required property missing: durability");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StorageBucketInfo::Serialize() const {
  base::Value::Dict result;
  result.Set("bucket", internal::ToValue(*bucket_));
  result.Set("id", internal::ToValue(id_));
  result.Set("expiration", internal::ToValue(expiration_));
  result.Set("quota", internal::ToValue(quota_));
  result.Set("persistent", internal::ToValue(persistent_));
  result.Set("durability", internal::ToValue(durability_));
  return base::Value(std::move(result));
}

std::unique_ptr<StorageBucketInfo> StorageBucketInfo::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StorageBucketInfo> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AttributionReportingFilterDataEntry> AttributionReportingFilterDataEntry::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AttributionReportingFilterDataEntry");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AttributionReportingFilterDataEntry> result(new AttributionReportingFilterDataEntry());
  errors->Push();
  errors->SetName("AttributionReportingFilterDataEntry");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* key_value = dict.Find("key");
  if (key_value) {
    errors->SetName("key");
    result->key_ = internal::FromValue<std::string>::Parse(*key_value, errors);
  } else {
    errors->AddError("required property missing: key");
  }
  const base::Value* values_value = dict.Find("values");
  if (values_value) {
    errors->SetName("values");
    result->values_ = internal::FromValue<std::vector<std::string>>::Parse(*values_value, errors);
  } else {
    errors->AddError("required property missing: values");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AttributionReportingFilterDataEntry::Serialize() const {
  base::Value::Dict result;
  result.Set("key", internal::ToValue(key_));
  result.Set("values", internal::ToValue(values_));
  return base::Value(std::move(result));
}

std::unique_ptr<AttributionReportingFilterDataEntry> AttributionReportingFilterDataEntry::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AttributionReportingFilterDataEntry> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AttributionReportingFilterConfig> AttributionReportingFilterConfig::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AttributionReportingFilterConfig");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AttributionReportingFilterConfig> result(new AttributionReportingFilterConfig());
  errors->Push();
  errors->SetName("AttributionReportingFilterConfig");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* filter_values_value = dict.Find("filterValues");
  if (filter_values_value) {
    errors->SetName("filterValues");
    result->filter_values_ = internal::FromValue<std::vector<std::unique_ptr<::headless::storage::AttributionReportingFilterDataEntry>>>::Parse(*filter_values_value, errors);
  } else {
    errors->AddError("required property missing: filterValues");
  }
  const base::Value* lookback_window_value = dict.Find("lookbackWindow");
  if (lookback_window_value) {
    errors->SetName("lookbackWindow");
    result->lookback_window_ = internal::FromValue<int>::Parse(*lookback_window_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AttributionReportingFilterConfig::Serialize() const {
  base::Value::Dict result;
  result.Set("filterValues", internal::ToValue(filter_values_));
  if (lookback_window_)
    result.Set("lookbackWindow", internal::ToValue(lookback_window_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<AttributionReportingFilterConfig> AttributionReportingFilterConfig::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AttributionReportingFilterConfig> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AttributionReportingFilterPair> AttributionReportingFilterPair::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AttributionReportingFilterPair");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AttributionReportingFilterPair> result(new AttributionReportingFilterPair());
  errors->Push();
  errors->SetName("AttributionReportingFilterPair");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* filters_value = dict.Find("filters");
  if (filters_value) {
    errors->SetName("filters");
    result->filters_ = internal::FromValue<std::vector<std::unique_ptr<::headless::storage::AttributionReportingFilterConfig>>>::Parse(*filters_value, errors);
  } else {
    errors->AddError("required property missing: filters");
  }
  const base::Value* not_filters_value = dict.Find("notFilters");
  if (not_filters_value) {
    errors->SetName("notFilters");
    result->not_filters_ = internal::FromValue<std::vector<std::unique_ptr<::headless::storage::AttributionReportingFilterConfig>>>::Parse(*not_filters_value, errors);
  } else {
    errors->AddError("required property missing: notFilters");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AttributionReportingFilterPair::Serialize() const {
  base::Value::Dict result;
  result.Set("filters", internal::ToValue(filters_));
  result.Set("notFilters", internal::ToValue(not_filters_));
  return base::Value(std::move(result));
}

std::unique_ptr<AttributionReportingFilterPair> AttributionReportingFilterPair::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AttributionReportingFilterPair> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AttributionReportingAggregationKeysEntry> AttributionReportingAggregationKeysEntry::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AttributionReportingAggregationKeysEntry");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AttributionReportingAggregationKeysEntry> result(new AttributionReportingAggregationKeysEntry());
  errors->Push();
  errors->SetName("AttributionReportingAggregationKeysEntry");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* key_value = dict.Find("key");
  if (key_value) {
    errors->SetName("key");
    result->key_ = internal::FromValue<std::string>::Parse(*key_value, errors);
  } else {
    errors->AddError("required property missing: key");
  }
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<std::string>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AttributionReportingAggregationKeysEntry::Serialize() const {
  base::Value::Dict result;
  result.Set("key", internal::ToValue(key_));
  result.Set("value", internal::ToValue(value_));
  return base::Value(std::move(result));
}

std::unique_ptr<AttributionReportingAggregationKeysEntry> AttributionReportingAggregationKeysEntry::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AttributionReportingAggregationKeysEntry> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AttributionReportingEventReportWindows> AttributionReportingEventReportWindows::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AttributionReportingEventReportWindows");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AttributionReportingEventReportWindows> result(new AttributionReportingEventReportWindows());
  errors->Push();
  errors->SetName("AttributionReportingEventReportWindows");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* start_value = dict.Find("start");
  if (start_value) {
    errors->SetName("start");
    result->start_ = internal::FromValue<int>::Parse(*start_value, errors);
  } else {
    errors->AddError("required property missing: start");
  }
  const base::Value* ends_value = dict.Find("ends");
  if (ends_value) {
    errors->SetName("ends");
    result->ends_ = internal::FromValue<std::vector<int>>::Parse(*ends_value, errors);
  } else {
    errors->AddError("required property missing: ends");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AttributionReportingEventReportWindows::Serialize() const {
  base::Value::Dict result;
  result.Set("start", internal::ToValue(start_));
  result.Set("ends", internal::ToValue(ends_));
  return base::Value(std::move(result));
}

std::unique_ptr<AttributionReportingEventReportWindows> AttributionReportingEventReportWindows::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AttributionReportingEventReportWindows> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AttributionReportingTriggerSpec> AttributionReportingTriggerSpec::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AttributionReportingTriggerSpec");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AttributionReportingTriggerSpec> result(new AttributionReportingTriggerSpec());
  errors->Push();
  errors->SetName("AttributionReportingTriggerSpec");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* trigger_data_value = dict.Find("triggerData");
  if (trigger_data_value) {
    errors->SetName("triggerData");
    result->trigger_data_ = internal::FromValue<std::vector<double>>::Parse(*trigger_data_value, errors);
  } else {
    errors->AddError("required property missing: triggerData");
  }
  const base::Value* event_report_windows_value = dict.Find("eventReportWindows");
  if (event_report_windows_value) {
    errors->SetName("eventReportWindows");
    result->event_report_windows_ = internal::FromValue<::headless::storage::AttributionReportingEventReportWindows>::Parse(*event_report_windows_value, errors);
  } else {
    errors->AddError("required property missing: eventReportWindows");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AttributionReportingTriggerSpec::Serialize() const {
  base::Value::Dict result;
  result.Set("triggerData", internal::ToValue(trigger_data_));
  result.Set("eventReportWindows", internal::ToValue(*event_report_windows_));
  return base::Value(std::move(result));
}

std::unique_ptr<AttributionReportingTriggerSpec> AttributionReportingTriggerSpec::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AttributionReportingTriggerSpec> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AttributionReportingSourceRegistration> AttributionReportingSourceRegistration::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AttributionReportingSourceRegistration");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AttributionReportingSourceRegistration> result(new AttributionReportingSourceRegistration());
  errors->Push();
  errors->SetName("AttributionReportingSourceRegistration");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* time_value = dict.Find("time");
  if (time_value) {
    errors->SetName("time");
    result->time_ = internal::FromValue<double>::Parse(*time_value, errors);
  } else {
    errors->AddError("required property missing: time");
  }
  const base::Value* expiry_value = dict.Find("expiry");
  if (expiry_value) {
    errors->SetName("expiry");
    result->expiry_ = internal::FromValue<int>::Parse(*expiry_value, errors);
  } else {
    errors->AddError("required property missing: expiry");
  }
  const base::Value* trigger_specs_value = dict.Find("triggerSpecs");
  if (trigger_specs_value) {
    errors->SetName("triggerSpecs");
    result->trigger_specs_ = internal::FromValue<std::vector<std::unique_ptr<::headless::storage::AttributionReportingTriggerSpec>>>::Parse(*trigger_specs_value, errors);
  } else {
    errors->AddError("required property missing: triggerSpecs");
  }
  const base::Value* aggregatable_report_window_value = dict.Find("aggregatableReportWindow");
  if (aggregatable_report_window_value) {
    errors->SetName("aggregatableReportWindow");
    result->aggregatable_report_window_ = internal::FromValue<int>::Parse(*aggregatable_report_window_value, errors);
  } else {
    errors->AddError("required property missing: aggregatableReportWindow");
  }
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::storage::AttributionReportingSourceType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  const base::Value* source_origin_value = dict.Find("sourceOrigin");
  if (source_origin_value) {
    errors->SetName("sourceOrigin");
    result->source_origin_ = internal::FromValue<std::string>::Parse(*source_origin_value, errors);
  } else {
    errors->AddError("required property missing: sourceOrigin");
  }
  const base::Value* reporting_origin_value = dict.Find("reportingOrigin");
  if (reporting_origin_value) {
    errors->SetName("reportingOrigin");
    result->reporting_origin_ = internal::FromValue<std::string>::Parse(*reporting_origin_value, errors);
  } else {
    errors->AddError("required property missing: reportingOrigin");
  }
  const base::Value* destination_sites_value = dict.Find("destinationSites");
  if (destination_sites_value) {
    errors->SetName("destinationSites");
    result->destination_sites_ = internal::FromValue<std::vector<std::string>>::Parse(*destination_sites_value, errors);
  } else {
    errors->AddError("required property missing: destinationSites");
  }
  const base::Value* event_id_value = dict.Find("eventId");
  if (event_id_value) {
    errors->SetName("eventId");
    result->event_id_ = internal::FromValue<std::string>::Parse(*event_id_value, errors);
  } else {
    errors->AddError("required property missing: eventId");
  }
  const base::Value* priority_value = dict.Find("priority");
  if (priority_value) {
    errors->SetName("priority");
    result->priority_ = internal::FromValue<std::string>::Parse(*priority_value, errors);
  } else {
    errors->AddError("required property missing: priority");
  }
  const base::Value* filter_data_value = dict.Find("filterData");
  if (filter_data_value) {
    errors->SetName("filterData");
    result->filter_data_ = internal::FromValue<std::vector<std::unique_ptr<::headless::storage::AttributionReportingFilterDataEntry>>>::Parse(*filter_data_value, errors);
  } else {
    errors->AddError("required property missing: filterData");
  }
  const base::Value* aggregation_keys_value = dict.Find("aggregationKeys");
  if (aggregation_keys_value) {
    errors->SetName("aggregationKeys");
    result->aggregation_keys_ = internal::FromValue<std::vector<std::unique_ptr<::headless::storage::AttributionReportingAggregationKeysEntry>>>::Parse(*aggregation_keys_value, errors);
  } else {
    errors->AddError("required property missing: aggregationKeys");
  }
  const base::Value* debug_key_value = dict.Find("debugKey");
  if (debug_key_value) {
    errors->SetName("debugKey");
    result->debug_key_ = internal::FromValue<std::string>::Parse(*debug_key_value, errors);
  }
  const base::Value* trigger_data_matching_value = dict.Find("triggerDataMatching");
  if (trigger_data_matching_value) {
    errors->SetName("triggerDataMatching");
    result->trigger_data_matching_ = internal::FromValue<::headless::storage::AttributionReportingTriggerDataMatching>::Parse(*trigger_data_matching_value, errors);
  } else {
    errors->AddError("required property missing: triggerDataMatching");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AttributionReportingSourceRegistration::Serialize() const {
  base::Value::Dict result;
  result.Set("time", internal::ToValue(time_));
  result.Set("expiry", internal::ToValue(expiry_));
  result.Set("triggerSpecs", internal::ToValue(trigger_specs_));
  result.Set("aggregatableReportWindow", internal::ToValue(aggregatable_report_window_));
  result.Set("type", internal::ToValue(type_));
  result.Set("sourceOrigin", internal::ToValue(source_origin_));
  result.Set("reportingOrigin", internal::ToValue(reporting_origin_));
  result.Set("destinationSites", internal::ToValue(destination_sites_));
  result.Set("eventId", internal::ToValue(event_id_));
  result.Set("priority", internal::ToValue(priority_));
  result.Set("filterData", internal::ToValue(filter_data_));
  result.Set("aggregationKeys", internal::ToValue(aggregation_keys_));
  if (debug_key_)
    result.Set("debugKey", internal::ToValue(debug_key_.value()));
  result.Set("triggerDataMatching", internal::ToValue(trigger_data_matching_));
  return base::Value(std::move(result));
}

std::unique_ptr<AttributionReportingSourceRegistration> AttributionReportingSourceRegistration::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AttributionReportingSourceRegistration> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AttributionReportingAggregatableValueEntry> AttributionReportingAggregatableValueEntry::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AttributionReportingAggregatableValueEntry");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AttributionReportingAggregatableValueEntry> result(new AttributionReportingAggregatableValueEntry());
  errors->Push();
  errors->SetName("AttributionReportingAggregatableValueEntry");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* key_value = dict.Find("key");
  if (key_value) {
    errors->SetName("key");
    result->key_ = internal::FromValue<std::string>::Parse(*key_value, errors);
  } else {
    errors->AddError("required property missing: key");
  }
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<double>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AttributionReportingAggregatableValueEntry::Serialize() const {
  base::Value::Dict result;
  result.Set("key", internal::ToValue(key_));
  result.Set("value", internal::ToValue(value_));
  return base::Value(std::move(result));
}

std::unique_ptr<AttributionReportingAggregatableValueEntry> AttributionReportingAggregatableValueEntry::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AttributionReportingAggregatableValueEntry> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AttributionReportingEventTriggerData> AttributionReportingEventTriggerData::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AttributionReportingEventTriggerData");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AttributionReportingEventTriggerData> result(new AttributionReportingEventTriggerData());
  errors->Push();
  errors->SetName("AttributionReportingEventTriggerData");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    errors->SetName("data");
    result->data_ = internal::FromValue<std::string>::Parse(*data_value, errors);
  } else {
    errors->AddError("required property missing: data");
  }
  const base::Value* priority_value = dict.Find("priority");
  if (priority_value) {
    errors->SetName("priority");
    result->priority_ = internal::FromValue<std::string>::Parse(*priority_value, errors);
  } else {
    errors->AddError("required property missing: priority");
  }
  const base::Value* dedup_key_value = dict.Find("dedupKey");
  if (dedup_key_value) {
    errors->SetName("dedupKey");
    result->dedup_key_ = internal::FromValue<std::string>::Parse(*dedup_key_value, errors);
  }
  const base::Value* filters_value = dict.Find("filters");
  if (filters_value) {
    errors->SetName("filters");
    result->filters_ = internal::FromValue<::headless::storage::AttributionReportingFilterPair>::Parse(*filters_value, errors);
  } else {
    errors->AddError("required property missing: filters");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AttributionReportingEventTriggerData::Serialize() const {
  base::Value::Dict result;
  result.Set("data", internal::ToValue(data_));
  result.Set("priority", internal::ToValue(priority_));
  if (dedup_key_)
    result.Set("dedupKey", internal::ToValue(dedup_key_.value()));
  result.Set("filters", internal::ToValue(*filters_));
  return base::Value(std::move(result));
}

std::unique_ptr<AttributionReportingEventTriggerData> AttributionReportingEventTriggerData::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AttributionReportingEventTriggerData> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AttributionReportingAggregatableTriggerData> AttributionReportingAggregatableTriggerData::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AttributionReportingAggregatableTriggerData");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AttributionReportingAggregatableTriggerData> result(new AttributionReportingAggregatableTriggerData());
  errors->Push();
  errors->SetName("AttributionReportingAggregatableTriggerData");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* key_piece_value = dict.Find("keyPiece");
  if (key_piece_value) {
    errors->SetName("keyPiece");
    result->key_piece_ = internal::FromValue<std::string>::Parse(*key_piece_value, errors);
  } else {
    errors->AddError("required property missing: keyPiece");
  }
  const base::Value* source_keys_value = dict.Find("sourceKeys");
  if (source_keys_value) {
    errors->SetName("sourceKeys");
    result->source_keys_ = internal::FromValue<std::vector<std::string>>::Parse(*source_keys_value, errors);
  } else {
    errors->AddError("required property missing: sourceKeys");
  }
  const base::Value* filters_value = dict.Find("filters");
  if (filters_value) {
    errors->SetName("filters");
    result->filters_ = internal::FromValue<::headless::storage::AttributionReportingFilterPair>::Parse(*filters_value, errors);
  } else {
    errors->AddError("required property missing: filters");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AttributionReportingAggregatableTriggerData::Serialize() const {
  base::Value::Dict result;
  result.Set("keyPiece", internal::ToValue(key_piece_));
  result.Set("sourceKeys", internal::ToValue(source_keys_));
  result.Set("filters", internal::ToValue(*filters_));
  return base::Value(std::move(result));
}

std::unique_ptr<AttributionReportingAggregatableTriggerData> AttributionReportingAggregatableTriggerData::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AttributionReportingAggregatableTriggerData> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AttributionReportingAggregatableDedupKey> AttributionReportingAggregatableDedupKey::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AttributionReportingAggregatableDedupKey");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AttributionReportingAggregatableDedupKey> result(new AttributionReportingAggregatableDedupKey());
  errors->Push();
  errors->SetName("AttributionReportingAggregatableDedupKey");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* dedup_key_value = dict.Find("dedupKey");
  if (dedup_key_value) {
    errors->SetName("dedupKey");
    result->dedup_key_ = internal::FromValue<std::string>::Parse(*dedup_key_value, errors);
  }
  const base::Value* filters_value = dict.Find("filters");
  if (filters_value) {
    errors->SetName("filters");
    result->filters_ = internal::FromValue<::headless::storage::AttributionReportingFilterPair>::Parse(*filters_value, errors);
  } else {
    errors->AddError("required property missing: filters");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AttributionReportingAggregatableDedupKey::Serialize() const {
  base::Value::Dict result;
  if (dedup_key_)
    result.Set("dedupKey", internal::ToValue(dedup_key_.value()));
  result.Set("filters", internal::ToValue(*filters_));
  return base::Value(std::move(result));
}

std::unique_ptr<AttributionReportingAggregatableDedupKey> AttributionReportingAggregatableDedupKey::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AttributionReportingAggregatableDedupKey> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AttributionReportingTriggerRegistration> AttributionReportingTriggerRegistration::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AttributionReportingTriggerRegistration");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AttributionReportingTriggerRegistration> result(new AttributionReportingTriggerRegistration());
  errors->Push();
  errors->SetName("AttributionReportingTriggerRegistration");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* filters_value = dict.Find("filters");
  if (filters_value) {
    errors->SetName("filters");
    result->filters_ = internal::FromValue<::headless::storage::AttributionReportingFilterPair>::Parse(*filters_value, errors);
  } else {
    errors->AddError("required property missing: filters");
  }
  const base::Value* debug_key_value = dict.Find("debugKey");
  if (debug_key_value) {
    errors->SetName("debugKey");
    result->debug_key_ = internal::FromValue<std::string>::Parse(*debug_key_value, errors);
  }
  const base::Value* aggregatable_dedup_keys_value = dict.Find("aggregatableDedupKeys");
  if (aggregatable_dedup_keys_value) {
    errors->SetName("aggregatableDedupKeys");
    result->aggregatable_dedup_keys_ = internal::FromValue<std::vector<std::unique_ptr<::headless::storage::AttributionReportingAggregatableDedupKey>>>::Parse(*aggregatable_dedup_keys_value, errors);
  } else {
    errors->AddError("required property missing: aggregatableDedupKeys");
  }
  const base::Value* event_trigger_data_value = dict.Find("eventTriggerData");
  if (event_trigger_data_value) {
    errors->SetName("eventTriggerData");
    result->event_trigger_data_ = internal::FromValue<std::vector<std::unique_ptr<::headless::storage::AttributionReportingEventTriggerData>>>::Parse(*event_trigger_data_value, errors);
  } else {
    errors->AddError("required property missing: eventTriggerData");
  }
  const base::Value* aggregatable_trigger_data_value = dict.Find("aggregatableTriggerData");
  if (aggregatable_trigger_data_value) {
    errors->SetName("aggregatableTriggerData");
    result->aggregatable_trigger_data_ = internal::FromValue<std::vector<std::unique_ptr<::headless::storage::AttributionReportingAggregatableTriggerData>>>::Parse(*aggregatable_trigger_data_value, errors);
  } else {
    errors->AddError("required property missing: aggregatableTriggerData");
  }
  const base::Value* aggregatable_values_value = dict.Find("aggregatableValues");
  if (aggregatable_values_value) {
    errors->SetName("aggregatableValues");
    result->aggregatable_values_ = internal::FromValue<std::vector<std::unique_ptr<::headless::storage::AttributionReportingAggregatableValueEntry>>>::Parse(*aggregatable_values_value, errors);
  } else {
    errors->AddError("required property missing: aggregatableValues");
  }
  const base::Value* debug_reporting_value = dict.Find("debugReporting");
  if (debug_reporting_value) {
    errors->SetName("debugReporting");
    result->debug_reporting_ = internal::FromValue<bool>::Parse(*debug_reporting_value, errors);
  } else {
    errors->AddError("required property missing: debugReporting");
  }
  const base::Value* aggregation_coordinator_origin_value = dict.Find("aggregationCoordinatorOrigin");
  if (aggregation_coordinator_origin_value) {
    errors->SetName("aggregationCoordinatorOrigin");
    result->aggregation_coordinator_origin_ = internal::FromValue<std::string>::Parse(*aggregation_coordinator_origin_value, errors);
  }
  const base::Value* source_registration_time_config_value = dict.Find("sourceRegistrationTimeConfig");
  if (source_registration_time_config_value) {
    errors->SetName("sourceRegistrationTimeConfig");
    result->source_registration_time_config_ = internal::FromValue<::headless::storage::AttributionReportingSourceRegistrationTimeConfig>::Parse(*source_registration_time_config_value, errors);
  } else {
    errors->AddError("required property missing: sourceRegistrationTimeConfig");
  }
  const base::Value* trigger_context_id_value = dict.Find("triggerContextId");
  if (trigger_context_id_value) {
    errors->SetName("triggerContextId");
    result->trigger_context_id_ = internal::FromValue<std::string>::Parse(*trigger_context_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AttributionReportingTriggerRegistration::Serialize() const {
  base::Value::Dict result;
  result.Set("filters", internal::ToValue(*filters_));
  if (debug_key_)
    result.Set("debugKey", internal::ToValue(debug_key_.value()));
  result.Set("aggregatableDedupKeys", internal::ToValue(aggregatable_dedup_keys_));
  result.Set("eventTriggerData", internal::ToValue(event_trigger_data_));
  result.Set("aggregatableTriggerData", internal::ToValue(aggregatable_trigger_data_));
  result.Set("aggregatableValues", internal::ToValue(aggregatable_values_));
  result.Set("debugReporting", internal::ToValue(debug_reporting_));
  if (aggregation_coordinator_origin_)
    result.Set("aggregationCoordinatorOrigin", internal::ToValue(aggregation_coordinator_origin_.value()));
  result.Set("sourceRegistrationTimeConfig", internal::ToValue(source_registration_time_config_));
  if (trigger_context_id_)
    result.Set("triggerContextId", internal::ToValue(trigger_context_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<AttributionReportingTriggerRegistration> AttributionReportingTriggerRegistration::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AttributionReportingTriggerRegistration> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetStorageKeyForFrameParams> GetStorageKeyForFrameParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetStorageKeyForFrameParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetStorageKeyForFrameParams> result(new GetStorageKeyForFrameParams());
  errors->Push();
  errors->SetName("GetStorageKeyForFrameParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  } else {
    errors->AddError("required property missing: frameId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetStorageKeyForFrameParams::Serialize() const {
  base::Value::Dict result;
  result.Set("frameId", internal::ToValue(frame_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetStorageKeyForFrameParams> GetStorageKeyForFrameParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetStorageKeyForFrameParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetStorageKeyForFrameResult> GetStorageKeyForFrameResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetStorageKeyForFrameResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetStorageKeyForFrameResult> result(new GetStorageKeyForFrameResult());
  errors->Push();
  errors->SetName("GetStorageKeyForFrameResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* storage_key_value = dict.Find("storageKey");
  if (storage_key_value) {
    errors->SetName("storageKey");
    result->storage_key_ = internal::FromValue<std::string>::Parse(*storage_key_value, errors);
  } else {
    errors->AddError("required property missing: storageKey");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetStorageKeyForFrameResult::Serialize() const {
  base::Value::Dict result;
  result.Set("storageKey", internal::ToValue(storage_key_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetStorageKeyForFrameResult> GetStorageKeyForFrameResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetStorageKeyForFrameResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearDataForOriginParams> ClearDataForOriginParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearDataForOriginParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearDataForOriginParams> result(new ClearDataForOriginParams());
  errors->Push();
  errors->SetName("ClearDataForOriginParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<std::string>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  const base::Value* storage_types_value = dict.Find("storageTypes");
  if (storage_types_value) {
    errors->SetName("storageTypes");
    result->storage_types_ = internal::FromValue<std::string>::Parse(*storage_types_value, errors);
  } else {
    errors->AddError("required property missing: storageTypes");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearDataForOriginParams::Serialize() const {
  base::Value::Dict result;
  result.Set("origin", internal::ToValue(origin_));
  result.Set("storageTypes", internal::ToValue(storage_types_));
  return base::Value(std::move(result));
}

std::unique_ptr<ClearDataForOriginParams> ClearDataForOriginParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearDataForOriginParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearDataForOriginResult> ClearDataForOriginResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearDataForOriginResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearDataForOriginResult> result(new ClearDataForOriginResult());
  errors->Push();
  errors->SetName("ClearDataForOriginResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearDataForOriginResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearDataForOriginResult> ClearDataForOriginResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearDataForOriginResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearDataForStorageKeyParams> ClearDataForStorageKeyParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearDataForStorageKeyParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearDataForStorageKeyParams> result(new ClearDataForStorageKeyParams());
  errors->Push();
  errors->SetName("ClearDataForStorageKeyParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* storage_key_value = dict.Find("storageKey");
  if (storage_key_value) {
    errors->SetName("storageKey");
    result->storage_key_ = internal::FromValue<std::string>::Parse(*storage_key_value, errors);
  } else {
    errors->AddError("required property missing: storageKey");
  }
  const base::Value* storage_types_value = dict.Find("storageTypes");
  if (storage_types_value) {
    errors->SetName("storageTypes");
    result->storage_types_ = internal::FromValue<std::string>::Parse(*storage_types_value, errors);
  } else {
    errors->AddError("required property missing: storageTypes");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearDataForStorageKeyParams::Serialize() const {
  base::Value::Dict result;
  result.Set("storageKey", internal::ToValue(storage_key_));
  result.Set("storageTypes", internal::ToValue(storage_types_));
  return base::Value(std::move(result));
}

std::unique_ptr<ClearDataForStorageKeyParams> ClearDataForStorageKeyParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearDataForStorageKeyParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearDataForStorageKeyResult> ClearDataForStorageKeyResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearDataForStorageKeyResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearDataForStorageKeyResult> result(new ClearDataForStorageKeyResult());
  errors->Push();
  errors->SetName("ClearDataForStorageKeyResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearDataForStorageKeyResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearDataForStorageKeyResult> ClearDataForStorageKeyResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearDataForStorageKeyResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetCookiesParams> GetCookiesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetCookiesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetCookiesParams> result(new GetCookiesParams());
  errors->Push();
  errors->SetName("GetCookiesParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* browser_context_id_value = dict.Find("browserContextId");
  if (browser_context_id_value) {
    errors->SetName("browserContextId");
    result->browser_context_id_ = internal::FromValue<std::string>::Parse(*browser_context_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetCookiesParams::Serialize() const {
  base::Value::Dict result;
  if (browser_context_id_)
    result.Set("browserContextId", internal::ToValue(browser_context_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<GetCookiesParams> GetCookiesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetCookiesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetCookiesResult> GetCookiesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetCookiesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetCookiesResult> result(new GetCookiesResult());
  errors->Push();
  errors->SetName("GetCookiesResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* cookies_value = dict.Find("cookies");
  if (cookies_value) {
    errors->SetName("cookies");
    result->cookies_ = internal::FromValue<std::vector<std::unique_ptr<::headless::network::Cookie>>>::Parse(*cookies_value, errors);
  } else {
    errors->AddError("required property missing: cookies");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetCookiesResult::Serialize() const {
  base::Value::Dict result;
  result.Set("cookies", internal::ToValue(cookies_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetCookiesResult> GetCookiesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetCookiesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetCookiesParams> SetCookiesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetCookiesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetCookiesParams> result(new SetCookiesParams());
  errors->Push();
  errors->SetName("SetCookiesParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* cookies_value = dict.Find("cookies");
  if (cookies_value) {
    errors->SetName("cookies");
    result->cookies_ = internal::FromValue<std::vector<std::unique_ptr<::headless::network::CookieParam>>>::Parse(*cookies_value, errors);
  } else {
    errors->AddError("required property missing: cookies");
  }
  const base::Value* browser_context_id_value = dict.Find("browserContextId");
  if (browser_context_id_value) {
    errors->SetName("browserContextId");
    result->browser_context_id_ = internal::FromValue<std::string>::Parse(*browser_context_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetCookiesParams::Serialize() const {
  base::Value::Dict result;
  result.Set("cookies", internal::ToValue(cookies_));
  if (browser_context_id_)
    result.Set("browserContextId", internal::ToValue(browser_context_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetCookiesParams> SetCookiesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetCookiesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetCookiesResult> SetCookiesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetCookiesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetCookiesResult> result(new SetCookiesResult());
  errors->Push();
  errors->SetName("SetCookiesResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetCookiesResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetCookiesResult> SetCookiesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetCookiesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearCookiesParams> ClearCookiesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearCookiesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearCookiesParams> result(new ClearCookiesParams());
  errors->Push();
  errors->SetName("ClearCookiesParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* browser_context_id_value = dict.Find("browserContextId");
  if (browser_context_id_value) {
    errors->SetName("browserContextId");
    result->browser_context_id_ = internal::FromValue<std::string>::Parse(*browser_context_id_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearCookiesParams::Serialize() const {
  base::Value::Dict result;
  if (browser_context_id_)
    result.Set("browserContextId", internal::ToValue(browser_context_id_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<ClearCookiesParams> ClearCookiesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearCookiesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearCookiesResult> ClearCookiesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearCookiesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearCookiesResult> result(new ClearCookiesResult());
  errors->Push();
  errors->SetName("ClearCookiesResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearCookiesResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearCookiesResult> ClearCookiesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearCookiesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetUsageAndQuotaParams> GetUsageAndQuotaParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetUsageAndQuotaParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetUsageAndQuotaParams> result(new GetUsageAndQuotaParams());
  errors->Push();
  errors->SetName("GetUsageAndQuotaParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<std::string>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetUsageAndQuotaParams::Serialize() const {
  base::Value::Dict result;
  result.Set("origin", internal::ToValue(origin_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetUsageAndQuotaParams> GetUsageAndQuotaParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetUsageAndQuotaParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetUsageAndQuotaResult> GetUsageAndQuotaResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetUsageAndQuotaResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetUsageAndQuotaResult> result(new GetUsageAndQuotaResult());
  errors->Push();
  errors->SetName("GetUsageAndQuotaResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* usage_value = dict.Find("usage");
  if (usage_value) {
    errors->SetName("usage");
    result->usage_ = internal::FromValue<double>::Parse(*usage_value, errors);
  } else {
    errors->AddError("required property missing: usage");
  }
  const base::Value* quota_value = dict.Find("quota");
  if (quota_value) {
    errors->SetName("quota");
    result->quota_ = internal::FromValue<double>::Parse(*quota_value, errors);
  } else {
    errors->AddError("required property missing: quota");
  }
  const base::Value* override_active_value = dict.Find("overrideActive");
  if (override_active_value) {
    errors->SetName("overrideActive");
    result->override_active_ = internal::FromValue<bool>::Parse(*override_active_value, errors);
  } else {
    errors->AddError("required property missing: overrideActive");
  }
  const base::Value* usage_breakdown_value = dict.Find("usageBreakdown");
  if (usage_breakdown_value) {
    errors->SetName("usageBreakdown");
    result->usage_breakdown_ = internal::FromValue<std::vector<std::unique_ptr<::headless::storage::UsageForType>>>::Parse(*usage_breakdown_value, errors);
  } else {
    errors->AddError("required property missing: usageBreakdown");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetUsageAndQuotaResult::Serialize() const {
  base::Value::Dict result;
  result.Set("usage", internal::ToValue(usage_));
  result.Set("quota", internal::ToValue(quota_));
  result.Set("overrideActive", internal::ToValue(override_active_));
  result.Set("usageBreakdown", internal::ToValue(usage_breakdown_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetUsageAndQuotaResult> GetUsageAndQuotaResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetUsageAndQuotaResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<OverrideQuotaForOriginParams> OverrideQuotaForOriginParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("OverrideQuotaForOriginParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<OverrideQuotaForOriginParams> result(new OverrideQuotaForOriginParams());
  errors->Push();
  errors->SetName("OverrideQuotaForOriginParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<std::string>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  const base::Value* quota_size_value = dict.Find("quotaSize");
  if (quota_size_value) {
    errors->SetName("quotaSize");
    result->quota_size_ = internal::FromValue<double>::Parse(*quota_size_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value OverrideQuotaForOriginParams::Serialize() const {
  base::Value::Dict result;
  result.Set("origin", internal::ToValue(origin_));
  if (quota_size_)
    result.Set("quotaSize", internal::ToValue(quota_size_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<OverrideQuotaForOriginParams> OverrideQuotaForOriginParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<OverrideQuotaForOriginParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<OverrideQuotaForOriginResult> OverrideQuotaForOriginResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("OverrideQuotaForOriginResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<OverrideQuotaForOriginResult> result(new OverrideQuotaForOriginResult());
  errors->Push();
  errors->SetName("OverrideQuotaForOriginResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value OverrideQuotaForOriginResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<OverrideQuotaForOriginResult> OverrideQuotaForOriginResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<OverrideQuotaForOriginResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TrackCacheStorageForOriginParams> TrackCacheStorageForOriginParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TrackCacheStorageForOriginParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TrackCacheStorageForOriginParams> result(new TrackCacheStorageForOriginParams());
  errors->Push();
  errors->SetName("TrackCacheStorageForOriginParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<std::string>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TrackCacheStorageForOriginParams::Serialize() const {
  base::Value::Dict result;
  result.Set("origin", internal::ToValue(origin_));
  return base::Value(std::move(result));
}

std::unique_ptr<TrackCacheStorageForOriginParams> TrackCacheStorageForOriginParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TrackCacheStorageForOriginParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TrackCacheStorageForOriginResult> TrackCacheStorageForOriginResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TrackCacheStorageForOriginResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TrackCacheStorageForOriginResult> result(new TrackCacheStorageForOriginResult());
  errors->Push();
  errors->SetName("TrackCacheStorageForOriginResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TrackCacheStorageForOriginResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<TrackCacheStorageForOriginResult> TrackCacheStorageForOriginResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TrackCacheStorageForOriginResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TrackCacheStorageForStorageKeyParams> TrackCacheStorageForStorageKeyParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TrackCacheStorageForStorageKeyParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TrackCacheStorageForStorageKeyParams> result(new TrackCacheStorageForStorageKeyParams());
  errors->Push();
  errors->SetName("TrackCacheStorageForStorageKeyParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* storage_key_value = dict.Find("storageKey");
  if (storage_key_value) {
    errors->SetName("storageKey");
    result->storage_key_ = internal::FromValue<std::string>::Parse(*storage_key_value, errors);
  } else {
    errors->AddError("required property missing: storageKey");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TrackCacheStorageForStorageKeyParams::Serialize() const {
  base::Value::Dict result;
  result.Set("storageKey", internal::ToValue(storage_key_));
  return base::Value(std::move(result));
}

std::unique_ptr<TrackCacheStorageForStorageKeyParams> TrackCacheStorageForStorageKeyParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TrackCacheStorageForStorageKeyParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TrackCacheStorageForStorageKeyResult> TrackCacheStorageForStorageKeyResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TrackCacheStorageForStorageKeyResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TrackCacheStorageForStorageKeyResult> result(new TrackCacheStorageForStorageKeyResult());
  errors->Push();
  errors->SetName("TrackCacheStorageForStorageKeyResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TrackCacheStorageForStorageKeyResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<TrackCacheStorageForStorageKeyResult> TrackCacheStorageForStorageKeyResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TrackCacheStorageForStorageKeyResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TrackIndexedDBForOriginParams> TrackIndexedDBForOriginParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TrackIndexedDBForOriginParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TrackIndexedDBForOriginParams> result(new TrackIndexedDBForOriginParams());
  errors->Push();
  errors->SetName("TrackIndexedDBForOriginParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<std::string>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TrackIndexedDBForOriginParams::Serialize() const {
  base::Value::Dict result;
  result.Set("origin", internal::ToValue(origin_));
  return base::Value(std::move(result));
}

std::unique_ptr<TrackIndexedDBForOriginParams> TrackIndexedDBForOriginParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TrackIndexedDBForOriginParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TrackIndexedDBForOriginResult> TrackIndexedDBForOriginResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TrackIndexedDBForOriginResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TrackIndexedDBForOriginResult> result(new TrackIndexedDBForOriginResult());
  errors->Push();
  errors->SetName("TrackIndexedDBForOriginResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TrackIndexedDBForOriginResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<TrackIndexedDBForOriginResult> TrackIndexedDBForOriginResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TrackIndexedDBForOriginResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TrackIndexedDBForStorageKeyParams> TrackIndexedDBForStorageKeyParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TrackIndexedDBForStorageKeyParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TrackIndexedDBForStorageKeyParams> result(new TrackIndexedDBForStorageKeyParams());
  errors->Push();
  errors->SetName("TrackIndexedDBForStorageKeyParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* storage_key_value = dict.Find("storageKey");
  if (storage_key_value) {
    errors->SetName("storageKey");
    result->storage_key_ = internal::FromValue<std::string>::Parse(*storage_key_value, errors);
  } else {
    errors->AddError("required property missing: storageKey");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TrackIndexedDBForStorageKeyParams::Serialize() const {
  base::Value::Dict result;
  result.Set("storageKey", internal::ToValue(storage_key_));
  return base::Value(std::move(result));
}

std::unique_ptr<TrackIndexedDBForStorageKeyParams> TrackIndexedDBForStorageKeyParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TrackIndexedDBForStorageKeyParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TrackIndexedDBForStorageKeyResult> TrackIndexedDBForStorageKeyResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TrackIndexedDBForStorageKeyResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TrackIndexedDBForStorageKeyResult> result(new TrackIndexedDBForStorageKeyResult());
  errors->Push();
  errors->SetName("TrackIndexedDBForStorageKeyResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TrackIndexedDBForStorageKeyResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<TrackIndexedDBForStorageKeyResult> TrackIndexedDBForStorageKeyResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TrackIndexedDBForStorageKeyResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<UntrackCacheStorageForOriginParams> UntrackCacheStorageForOriginParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("UntrackCacheStorageForOriginParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<UntrackCacheStorageForOriginParams> result(new UntrackCacheStorageForOriginParams());
  errors->Push();
  errors->SetName("UntrackCacheStorageForOriginParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<std::string>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value UntrackCacheStorageForOriginParams::Serialize() const {
  base::Value::Dict result;
  result.Set("origin", internal::ToValue(origin_));
  return base::Value(std::move(result));
}

std::unique_ptr<UntrackCacheStorageForOriginParams> UntrackCacheStorageForOriginParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<UntrackCacheStorageForOriginParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<UntrackCacheStorageForOriginResult> UntrackCacheStorageForOriginResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("UntrackCacheStorageForOriginResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<UntrackCacheStorageForOriginResult> result(new UntrackCacheStorageForOriginResult());
  errors->Push();
  errors->SetName("UntrackCacheStorageForOriginResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value UntrackCacheStorageForOriginResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<UntrackCacheStorageForOriginResult> UntrackCacheStorageForOriginResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<UntrackCacheStorageForOriginResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<UntrackCacheStorageForStorageKeyParams> UntrackCacheStorageForStorageKeyParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("UntrackCacheStorageForStorageKeyParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<UntrackCacheStorageForStorageKeyParams> result(new UntrackCacheStorageForStorageKeyParams());
  errors->Push();
  errors->SetName("UntrackCacheStorageForStorageKeyParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* storage_key_value = dict.Find("storageKey");
  if (storage_key_value) {
    errors->SetName("storageKey");
    result->storage_key_ = internal::FromValue<std::string>::Parse(*storage_key_value, errors);
  } else {
    errors->AddError("required property missing: storageKey");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value UntrackCacheStorageForStorageKeyParams::Serialize() const {
  base::Value::Dict result;
  result.Set("storageKey", internal::ToValue(storage_key_));
  return base::Value(std::move(result));
}

std::unique_ptr<UntrackCacheStorageForStorageKeyParams> UntrackCacheStorageForStorageKeyParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<UntrackCacheStorageForStorageKeyParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<UntrackCacheStorageForStorageKeyResult> UntrackCacheStorageForStorageKeyResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("UntrackCacheStorageForStorageKeyResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<UntrackCacheStorageForStorageKeyResult> result(new UntrackCacheStorageForStorageKeyResult());
  errors->Push();
  errors->SetName("UntrackCacheStorageForStorageKeyResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value UntrackCacheStorageForStorageKeyResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<UntrackCacheStorageForStorageKeyResult> UntrackCacheStorageForStorageKeyResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<UntrackCacheStorageForStorageKeyResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<UntrackIndexedDBForOriginParams> UntrackIndexedDBForOriginParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("UntrackIndexedDBForOriginParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<UntrackIndexedDBForOriginParams> result(new UntrackIndexedDBForOriginParams());
  errors->Push();
  errors->SetName("UntrackIndexedDBForOriginParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<std::string>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value UntrackIndexedDBForOriginParams::Serialize() const {
  base::Value::Dict result;
  result.Set("origin", internal::ToValue(origin_));
  return base::Value(std::move(result));
}

std::unique_ptr<UntrackIndexedDBForOriginParams> UntrackIndexedDBForOriginParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<UntrackIndexedDBForOriginParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<UntrackIndexedDBForOriginResult> UntrackIndexedDBForOriginResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("UntrackIndexedDBForOriginResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<UntrackIndexedDBForOriginResult> result(new UntrackIndexedDBForOriginResult());
  errors->Push();
  errors->SetName("UntrackIndexedDBForOriginResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value UntrackIndexedDBForOriginResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<UntrackIndexedDBForOriginResult> UntrackIndexedDBForOriginResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<UntrackIndexedDBForOriginResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<UntrackIndexedDBForStorageKeyParams> UntrackIndexedDBForStorageKeyParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("UntrackIndexedDBForStorageKeyParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<UntrackIndexedDBForStorageKeyParams> result(new UntrackIndexedDBForStorageKeyParams());
  errors->Push();
  errors->SetName("UntrackIndexedDBForStorageKeyParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* storage_key_value = dict.Find("storageKey");
  if (storage_key_value) {
    errors->SetName("storageKey");
    result->storage_key_ = internal::FromValue<std::string>::Parse(*storage_key_value, errors);
  } else {
    errors->AddError("required property missing: storageKey");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value UntrackIndexedDBForStorageKeyParams::Serialize() const {
  base::Value::Dict result;
  result.Set("storageKey", internal::ToValue(storage_key_));
  return base::Value(std::move(result));
}

std::unique_ptr<UntrackIndexedDBForStorageKeyParams> UntrackIndexedDBForStorageKeyParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<UntrackIndexedDBForStorageKeyParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<UntrackIndexedDBForStorageKeyResult> UntrackIndexedDBForStorageKeyResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("UntrackIndexedDBForStorageKeyResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<UntrackIndexedDBForStorageKeyResult> result(new UntrackIndexedDBForStorageKeyResult());
  errors->Push();
  errors->SetName("UntrackIndexedDBForStorageKeyResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value UntrackIndexedDBForStorageKeyResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<UntrackIndexedDBForStorageKeyResult> UntrackIndexedDBForStorageKeyResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<UntrackIndexedDBForStorageKeyResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetTrustTokensParams> GetTrustTokensParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetTrustTokensParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetTrustTokensParams> result(new GetTrustTokensParams());
  errors->Push();
  errors->SetName("GetTrustTokensParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetTrustTokensParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<GetTrustTokensParams> GetTrustTokensParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetTrustTokensParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetTrustTokensResult> GetTrustTokensResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetTrustTokensResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetTrustTokensResult> result(new GetTrustTokensResult());
  errors->Push();
  errors->SetName("GetTrustTokensResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* tokens_value = dict.Find("tokens");
  if (tokens_value) {
    errors->SetName("tokens");
    result->tokens_ = internal::FromValue<std::vector<std::unique_ptr<::headless::storage::TrustTokens>>>::Parse(*tokens_value, errors);
  } else {
    errors->AddError("required property missing: tokens");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetTrustTokensResult::Serialize() const {
  base::Value::Dict result;
  result.Set("tokens", internal::ToValue(tokens_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetTrustTokensResult> GetTrustTokensResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetTrustTokensResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearTrustTokensParams> ClearTrustTokensParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearTrustTokensParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearTrustTokensParams> result(new ClearTrustTokensParams());
  errors->Push();
  errors->SetName("ClearTrustTokensParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* issuer_origin_value = dict.Find("issuerOrigin");
  if (issuer_origin_value) {
    errors->SetName("issuerOrigin");
    result->issuer_origin_ = internal::FromValue<std::string>::Parse(*issuer_origin_value, errors);
  } else {
    errors->AddError("required property missing: issuerOrigin");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearTrustTokensParams::Serialize() const {
  base::Value::Dict result;
  result.Set("issuerOrigin", internal::ToValue(issuer_origin_));
  return base::Value(std::move(result));
}

std::unique_ptr<ClearTrustTokensParams> ClearTrustTokensParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearTrustTokensParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearTrustTokensResult> ClearTrustTokensResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearTrustTokensResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearTrustTokensResult> result(new ClearTrustTokensResult());
  errors->Push();
  errors->SetName("ClearTrustTokensResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* did_delete_tokens_value = dict.Find("didDeleteTokens");
  if (did_delete_tokens_value) {
    errors->SetName("didDeleteTokens");
    result->did_delete_tokens_ = internal::FromValue<bool>::Parse(*did_delete_tokens_value, errors);
  } else {
    errors->AddError("required property missing: didDeleteTokens");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearTrustTokensResult::Serialize() const {
  base::Value::Dict result;
  result.Set("didDeleteTokens", internal::ToValue(did_delete_tokens_));
  return base::Value(std::move(result));
}

std::unique_ptr<ClearTrustTokensResult> ClearTrustTokensResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearTrustTokensResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetInterestGroupDetailsParams> GetInterestGroupDetailsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetInterestGroupDetailsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetInterestGroupDetailsParams> result(new GetInterestGroupDetailsParams());
  errors->Push();
  errors->SetName("GetInterestGroupDetailsParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* owner_origin_value = dict.Find("ownerOrigin");
  if (owner_origin_value) {
    errors->SetName("ownerOrigin");
    result->owner_origin_ = internal::FromValue<std::string>::Parse(*owner_origin_value, errors);
  } else {
    errors->AddError("required property missing: ownerOrigin");
  }
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  } else {
    errors->AddError("required property missing: name");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetInterestGroupDetailsParams::Serialize() const {
  base::Value::Dict result;
  result.Set("ownerOrigin", internal::ToValue(owner_origin_));
  result.Set("name", internal::ToValue(name_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetInterestGroupDetailsParams> GetInterestGroupDetailsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetInterestGroupDetailsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetInterestGroupDetailsResult> GetInterestGroupDetailsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetInterestGroupDetailsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetInterestGroupDetailsResult> result(new GetInterestGroupDetailsResult());
  errors->Push();
  errors->SetName("GetInterestGroupDetailsResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* details_value = dict.Find("details");
  if (details_value) {
    errors->SetName("details");
    result->details_ = internal::FromValue<::headless::storage::InterestGroupDetails>::Parse(*details_value, errors);
  } else {
    errors->AddError("required property missing: details");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetInterestGroupDetailsResult::Serialize() const {
  base::Value::Dict result;
  result.Set("details", internal::ToValue(*details_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetInterestGroupDetailsResult> GetInterestGroupDetailsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetInterestGroupDetailsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetInterestGroupTrackingParams> SetInterestGroupTrackingParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetInterestGroupTrackingParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetInterestGroupTrackingParams> result(new SetInterestGroupTrackingParams());
  errors->Push();
  errors->SetName("SetInterestGroupTrackingParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* enable_value = dict.Find("enable");
  if (enable_value) {
    errors->SetName("enable");
    result->enable_ = internal::FromValue<bool>::Parse(*enable_value, errors);
  } else {
    errors->AddError("required property missing: enable");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetInterestGroupTrackingParams::Serialize() const {
  base::Value::Dict result;
  result.Set("enable", internal::ToValue(enable_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetInterestGroupTrackingParams> SetInterestGroupTrackingParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetInterestGroupTrackingParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetInterestGroupTrackingResult> SetInterestGroupTrackingResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetInterestGroupTrackingResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetInterestGroupTrackingResult> result(new SetInterestGroupTrackingResult());
  errors->Push();
  errors->SetName("SetInterestGroupTrackingResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetInterestGroupTrackingResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetInterestGroupTrackingResult> SetInterestGroupTrackingResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetInterestGroupTrackingResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetSharedStorageMetadataParams> GetSharedStorageMetadataParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetSharedStorageMetadataParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetSharedStorageMetadataParams> result(new GetSharedStorageMetadataParams());
  errors->Push();
  errors->SetName("GetSharedStorageMetadataParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* owner_origin_value = dict.Find("ownerOrigin");
  if (owner_origin_value) {
    errors->SetName("ownerOrigin");
    result->owner_origin_ = internal::FromValue<std::string>::Parse(*owner_origin_value, errors);
  } else {
    errors->AddError("required property missing: ownerOrigin");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetSharedStorageMetadataParams::Serialize() const {
  base::Value::Dict result;
  result.Set("ownerOrigin", internal::ToValue(owner_origin_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetSharedStorageMetadataParams> GetSharedStorageMetadataParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetSharedStorageMetadataParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetSharedStorageMetadataResult> GetSharedStorageMetadataResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetSharedStorageMetadataResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetSharedStorageMetadataResult> result(new GetSharedStorageMetadataResult());
  errors->Push();
  errors->SetName("GetSharedStorageMetadataResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* metadata_value = dict.Find("metadata");
  if (metadata_value) {
    errors->SetName("metadata");
    result->metadata_ = internal::FromValue<::headless::storage::SharedStorageMetadata>::Parse(*metadata_value, errors);
  } else {
    errors->AddError("required property missing: metadata");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetSharedStorageMetadataResult::Serialize() const {
  base::Value::Dict result;
  result.Set("metadata", internal::ToValue(*metadata_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetSharedStorageMetadataResult> GetSharedStorageMetadataResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetSharedStorageMetadataResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetSharedStorageEntriesParams> GetSharedStorageEntriesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetSharedStorageEntriesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetSharedStorageEntriesParams> result(new GetSharedStorageEntriesParams());
  errors->Push();
  errors->SetName("GetSharedStorageEntriesParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* owner_origin_value = dict.Find("ownerOrigin");
  if (owner_origin_value) {
    errors->SetName("ownerOrigin");
    result->owner_origin_ = internal::FromValue<std::string>::Parse(*owner_origin_value, errors);
  } else {
    errors->AddError("required property missing: ownerOrigin");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetSharedStorageEntriesParams::Serialize() const {
  base::Value::Dict result;
  result.Set("ownerOrigin", internal::ToValue(owner_origin_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetSharedStorageEntriesParams> GetSharedStorageEntriesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetSharedStorageEntriesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetSharedStorageEntriesResult> GetSharedStorageEntriesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetSharedStorageEntriesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetSharedStorageEntriesResult> result(new GetSharedStorageEntriesResult());
  errors->Push();
  errors->SetName("GetSharedStorageEntriesResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* entries_value = dict.Find("entries");
  if (entries_value) {
    errors->SetName("entries");
    result->entries_ = internal::FromValue<std::vector<std::unique_ptr<::headless::storage::SharedStorageEntry>>>::Parse(*entries_value, errors);
  } else {
    errors->AddError("required property missing: entries");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetSharedStorageEntriesResult::Serialize() const {
  base::Value::Dict result;
  result.Set("entries", internal::ToValue(entries_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetSharedStorageEntriesResult> GetSharedStorageEntriesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetSharedStorageEntriesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetSharedStorageEntryParams> SetSharedStorageEntryParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetSharedStorageEntryParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetSharedStorageEntryParams> result(new SetSharedStorageEntryParams());
  errors->Push();
  errors->SetName("SetSharedStorageEntryParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* owner_origin_value = dict.Find("ownerOrigin");
  if (owner_origin_value) {
    errors->SetName("ownerOrigin");
    result->owner_origin_ = internal::FromValue<std::string>::Parse(*owner_origin_value, errors);
  } else {
    errors->AddError("required property missing: ownerOrigin");
  }
  const base::Value* key_value = dict.Find("key");
  if (key_value) {
    errors->SetName("key");
    result->key_ = internal::FromValue<std::string>::Parse(*key_value, errors);
  } else {
    errors->AddError("required property missing: key");
  }
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<std::string>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  const base::Value* ignore_if_present_value = dict.Find("ignoreIfPresent");
  if (ignore_if_present_value) {
    errors->SetName("ignoreIfPresent");
    result->ignore_if_present_ = internal::FromValue<bool>::Parse(*ignore_if_present_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetSharedStorageEntryParams::Serialize() const {
  base::Value::Dict result;
  result.Set("ownerOrigin", internal::ToValue(owner_origin_));
  result.Set("key", internal::ToValue(key_));
  result.Set("value", internal::ToValue(value_));
  if (ignore_if_present_)
    result.Set("ignoreIfPresent", internal::ToValue(ignore_if_present_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetSharedStorageEntryParams> SetSharedStorageEntryParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetSharedStorageEntryParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetSharedStorageEntryResult> SetSharedStorageEntryResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetSharedStorageEntryResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetSharedStorageEntryResult> result(new SetSharedStorageEntryResult());
  errors->Push();
  errors->SetName("SetSharedStorageEntryResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetSharedStorageEntryResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetSharedStorageEntryResult> SetSharedStorageEntryResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetSharedStorageEntryResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DeleteSharedStorageEntryParams> DeleteSharedStorageEntryParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DeleteSharedStorageEntryParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DeleteSharedStorageEntryParams> result(new DeleteSharedStorageEntryParams());
  errors->Push();
  errors->SetName("DeleteSharedStorageEntryParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* owner_origin_value = dict.Find("ownerOrigin");
  if (owner_origin_value) {
    errors->SetName("ownerOrigin");
    result->owner_origin_ = internal::FromValue<std::string>::Parse(*owner_origin_value, errors);
  } else {
    errors->AddError("required property missing: ownerOrigin");
  }
  const base::Value* key_value = dict.Find("key");
  if (key_value) {
    errors->SetName("key");
    result->key_ = internal::FromValue<std::string>::Parse(*key_value, errors);
  } else {
    errors->AddError("required property missing: key");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DeleteSharedStorageEntryParams::Serialize() const {
  base::Value::Dict result;
  result.Set("ownerOrigin", internal::ToValue(owner_origin_));
  result.Set("key", internal::ToValue(key_));
  return base::Value(std::move(result));
}

std::unique_ptr<DeleteSharedStorageEntryParams> DeleteSharedStorageEntryParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DeleteSharedStorageEntryParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DeleteSharedStorageEntryResult> DeleteSharedStorageEntryResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DeleteSharedStorageEntryResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DeleteSharedStorageEntryResult> result(new DeleteSharedStorageEntryResult());
  errors->Push();
  errors->SetName("DeleteSharedStorageEntryResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DeleteSharedStorageEntryResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<DeleteSharedStorageEntryResult> DeleteSharedStorageEntryResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DeleteSharedStorageEntryResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearSharedStorageEntriesParams> ClearSharedStorageEntriesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearSharedStorageEntriesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearSharedStorageEntriesParams> result(new ClearSharedStorageEntriesParams());
  errors->Push();
  errors->SetName("ClearSharedStorageEntriesParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* owner_origin_value = dict.Find("ownerOrigin");
  if (owner_origin_value) {
    errors->SetName("ownerOrigin");
    result->owner_origin_ = internal::FromValue<std::string>::Parse(*owner_origin_value, errors);
  } else {
    errors->AddError("required property missing: ownerOrigin");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearSharedStorageEntriesParams::Serialize() const {
  base::Value::Dict result;
  result.Set("ownerOrigin", internal::ToValue(owner_origin_));
  return base::Value(std::move(result));
}

std::unique_ptr<ClearSharedStorageEntriesParams> ClearSharedStorageEntriesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearSharedStorageEntriesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearSharedStorageEntriesResult> ClearSharedStorageEntriesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearSharedStorageEntriesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearSharedStorageEntriesResult> result(new ClearSharedStorageEntriesResult());
  errors->Push();
  errors->SetName("ClearSharedStorageEntriesResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearSharedStorageEntriesResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearSharedStorageEntriesResult> ClearSharedStorageEntriesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearSharedStorageEntriesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ResetSharedStorageBudgetParams> ResetSharedStorageBudgetParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ResetSharedStorageBudgetParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ResetSharedStorageBudgetParams> result(new ResetSharedStorageBudgetParams());
  errors->Push();
  errors->SetName("ResetSharedStorageBudgetParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* owner_origin_value = dict.Find("ownerOrigin");
  if (owner_origin_value) {
    errors->SetName("ownerOrigin");
    result->owner_origin_ = internal::FromValue<std::string>::Parse(*owner_origin_value, errors);
  } else {
    errors->AddError("required property missing: ownerOrigin");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ResetSharedStorageBudgetParams::Serialize() const {
  base::Value::Dict result;
  result.Set("ownerOrigin", internal::ToValue(owner_origin_));
  return base::Value(std::move(result));
}

std::unique_ptr<ResetSharedStorageBudgetParams> ResetSharedStorageBudgetParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ResetSharedStorageBudgetParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ResetSharedStorageBudgetResult> ResetSharedStorageBudgetResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ResetSharedStorageBudgetResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ResetSharedStorageBudgetResult> result(new ResetSharedStorageBudgetResult());
  errors->Push();
  errors->SetName("ResetSharedStorageBudgetResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ResetSharedStorageBudgetResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ResetSharedStorageBudgetResult> ResetSharedStorageBudgetResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ResetSharedStorageBudgetResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetSharedStorageTrackingParams> SetSharedStorageTrackingParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetSharedStorageTrackingParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetSharedStorageTrackingParams> result(new SetSharedStorageTrackingParams());
  errors->Push();
  errors->SetName("SetSharedStorageTrackingParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* enable_value = dict.Find("enable");
  if (enable_value) {
    errors->SetName("enable");
    result->enable_ = internal::FromValue<bool>::Parse(*enable_value, errors);
  } else {
    errors->AddError("required property missing: enable");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetSharedStorageTrackingParams::Serialize() const {
  base::Value::Dict result;
  result.Set("enable", internal::ToValue(enable_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetSharedStorageTrackingParams> SetSharedStorageTrackingParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetSharedStorageTrackingParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetSharedStorageTrackingResult> SetSharedStorageTrackingResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetSharedStorageTrackingResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetSharedStorageTrackingResult> result(new SetSharedStorageTrackingResult());
  errors->Push();
  errors->SetName("SetSharedStorageTrackingResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetSharedStorageTrackingResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetSharedStorageTrackingResult> SetSharedStorageTrackingResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetSharedStorageTrackingResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetStorageBucketTrackingParams> SetStorageBucketTrackingParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetStorageBucketTrackingParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetStorageBucketTrackingParams> result(new SetStorageBucketTrackingParams());
  errors->Push();
  errors->SetName("SetStorageBucketTrackingParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* storage_key_value = dict.Find("storageKey");
  if (storage_key_value) {
    errors->SetName("storageKey");
    result->storage_key_ = internal::FromValue<std::string>::Parse(*storage_key_value, errors);
  } else {
    errors->AddError("required property missing: storageKey");
  }
  const base::Value* enable_value = dict.Find("enable");
  if (enable_value) {
    errors->SetName("enable");
    result->enable_ = internal::FromValue<bool>::Parse(*enable_value, errors);
  } else {
    errors->AddError("required property missing: enable");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetStorageBucketTrackingParams::Serialize() const {
  base::Value::Dict result;
  result.Set("storageKey", internal::ToValue(storage_key_));
  result.Set("enable", internal::ToValue(enable_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetStorageBucketTrackingParams> SetStorageBucketTrackingParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetStorageBucketTrackingParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetStorageBucketTrackingResult> SetStorageBucketTrackingResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetStorageBucketTrackingResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetStorageBucketTrackingResult> result(new SetStorageBucketTrackingResult());
  errors->Push();
  errors->SetName("SetStorageBucketTrackingResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetStorageBucketTrackingResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetStorageBucketTrackingResult> SetStorageBucketTrackingResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetStorageBucketTrackingResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DeleteStorageBucketParams> DeleteStorageBucketParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DeleteStorageBucketParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DeleteStorageBucketParams> result(new DeleteStorageBucketParams());
  errors->Push();
  errors->SetName("DeleteStorageBucketParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* bucket_value = dict.Find("bucket");
  if (bucket_value) {
    errors->SetName("bucket");
    result->bucket_ = internal::FromValue<::headless::storage::StorageBucket>::Parse(*bucket_value, errors);
  } else {
    errors->AddError("required property missing: bucket");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DeleteStorageBucketParams::Serialize() const {
  base::Value::Dict result;
  result.Set("bucket", internal::ToValue(*bucket_));
  return base::Value(std::move(result));
}

std::unique_ptr<DeleteStorageBucketParams> DeleteStorageBucketParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DeleteStorageBucketParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DeleteStorageBucketResult> DeleteStorageBucketResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DeleteStorageBucketResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DeleteStorageBucketResult> result(new DeleteStorageBucketResult());
  errors->Push();
  errors->SetName("DeleteStorageBucketResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DeleteStorageBucketResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<DeleteStorageBucketResult> DeleteStorageBucketResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DeleteStorageBucketResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RunBounceTrackingMitigationsParams> RunBounceTrackingMitigationsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RunBounceTrackingMitigationsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RunBounceTrackingMitigationsParams> result(new RunBounceTrackingMitigationsParams());
  errors->Push();
  errors->SetName("RunBounceTrackingMitigationsParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RunBounceTrackingMitigationsParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<RunBounceTrackingMitigationsParams> RunBounceTrackingMitigationsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RunBounceTrackingMitigationsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<RunBounceTrackingMitigationsResult> RunBounceTrackingMitigationsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("RunBounceTrackingMitigationsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<RunBounceTrackingMitigationsResult> result(new RunBounceTrackingMitigationsResult());
  errors->Push();
  errors->SetName("RunBounceTrackingMitigationsResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* deleted_sites_value = dict.Find("deletedSites");
  if (deleted_sites_value) {
    errors->SetName("deletedSites");
    result->deleted_sites_ = internal::FromValue<std::vector<std::string>>::Parse(*deleted_sites_value, errors);
  } else {
    errors->AddError("required property missing: deletedSites");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value RunBounceTrackingMitigationsResult::Serialize() const {
  base::Value::Dict result;
  result.Set("deletedSites", internal::ToValue(deleted_sites_));
  return base::Value(std::move(result));
}

std::unique_ptr<RunBounceTrackingMitigationsResult> RunBounceTrackingMitigationsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<RunBounceTrackingMitigationsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetAttributionReportingLocalTestingModeParams> SetAttributionReportingLocalTestingModeParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetAttributionReportingLocalTestingModeParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetAttributionReportingLocalTestingModeParams> result(new SetAttributionReportingLocalTestingModeParams());
  errors->Push();
  errors->SetName("SetAttributionReportingLocalTestingModeParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    errors->SetName("enabled");
    result->enabled_ = internal::FromValue<bool>::Parse(*enabled_value, errors);
  } else {
    errors->AddError("required property missing: enabled");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetAttributionReportingLocalTestingModeParams::Serialize() const {
  base::Value::Dict result;
  result.Set("enabled", internal::ToValue(enabled_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetAttributionReportingLocalTestingModeParams> SetAttributionReportingLocalTestingModeParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetAttributionReportingLocalTestingModeParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetAttributionReportingLocalTestingModeResult> SetAttributionReportingLocalTestingModeResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetAttributionReportingLocalTestingModeResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetAttributionReportingLocalTestingModeResult> result(new SetAttributionReportingLocalTestingModeResult());
  errors->Push();
  errors->SetName("SetAttributionReportingLocalTestingModeResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetAttributionReportingLocalTestingModeResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetAttributionReportingLocalTestingModeResult> SetAttributionReportingLocalTestingModeResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetAttributionReportingLocalTestingModeResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetAttributionReportingTrackingParams> SetAttributionReportingTrackingParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetAttributionReportingTrackingParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetAttributionReportingTrackingParams> result(new SetAttributionReportingTrackingParams());
  errors->Push();
  errors->SetName("SetAttributionReportingTrackingParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* enable_value = dict.Find("enable");
  if (enable_value) {
    errors->SetName("enable");
    result->enable_ = internal::FromValue<bool>::Parse(*enable_value, errors);
  } else {
    errors->AddError("required property missing: enable");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetAttributionReportingTrackingParams::Serialize() const {
  base::Value::Dict result;
  result.Set("enable", internal::ToValue(enable_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetAttributionReportingTrackingParams> SetAttributionReportingTrackingParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetAttributionReportingTrackingParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetAttributionReportingTrackingResult> SetAttributionReportingTrackingResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetAttributionReportingTrackingResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetAttributionReportingTrackingResult> result(new SetAttributionReportingTrackingResult());
  errors->Push();
  errors->SetName("SetAttributionReportingTrackingResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetAttributionReportingTrackingResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetAttributionReportingTrackingResult> SetAttributionReportingTrackingResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetAttributionReportingTrackingResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CacheStorageContentUpdatedParams> CacheStorageContentUpdatedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CacheStorageContentUpdatedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CacheStorageContentUpdatedParams> result(new CacheStorageContentUpdatedParams());
  errors->Push();
  errors->SetName("CacheStorageContentUpdatedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<std::string>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  const base::Value* storage_key_value = dict.Find("storageKey");
  if (storage_key_value) {
    errors->SetName("storageKey");
    result->storage_key_ = internal::FromValue<std::string>::Parse(*storage_key_value, errors);
  } else {
    errors->AddError("required property missing: storageKey");
  }
  const base::Value* bucket_id_value = dict.Find("bucketId");
  if (bucket_id_value) {
    errors->SetName("bucketId");
    result->bucket_id_ = internal::FromValue<std::string>::Parse(*bucket_id_value, errors);
  } else {
    errors->AddError("required property missing: bucketId");
  }
  const base::Value* cache_name_value = dict.Find("cacheName");
  if (cache_name_value) {
    errors->SetName("cacheName");
    result->cache_name_ = internal::FromValue<std::string>::Parse(*cache_name_value, errors);
  } else {
    errors->AddError("required property missing: cacheName");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CacheStorageContentUpdatedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("origin", internal::ToValue(origin_));
  result.Set("storageKey", internal::ToValue(storage_key_));
  result.Set("bucketId", internal::ToValue(bucket_id_));
  result.Set("cacheName", internal::ToValue(cache_name_));
  return base::Value(std::move(result));
}

std::unique_ptr<CacheStorageContentUpdatedParams> CacheStorageContentUpdatedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CacheStorageContentUpdatedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CacheStorageListUpdatedParams> CacheStorageListUpdatedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CacheStorageListUpdatedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CacheStorageListUpdatedParams> result(new CacheStorageListUpdatedParams());
  errors->Push();
  errors->SetName("CacheStorageListUpdatedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<std::string>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  const base::Value* storage_key_value = dict.Find("storageKey");
  if (storage_key_value) {
    errors->SetName("storageKey");
    result->storage_key_ = internal::FromValue<std::string>::Parse(*storage_key_value, errors);
  } else {
    errors->AddError("required property missing: storageKey");
  }
  const base::Value* bucket_id_value = dict.Find("bucketId");
  if (bucket_id_value) {
    errors->SetName("bucketId");
    result->bucket_id_ = internal::FromValue<std::string>::Parse(*bucket_id_value, errors);
  } else {
    errors->AddError("required property missing: bucketId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CacheStorageListUpdatedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("origin", internal::ToValue(origin_));
  result.Set("storageKey", internal::ToValue(storage_key_));
  result.Set("bucketId", internal::ToValue(bucket_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<CacheStorageListUpdatedParams> CacheStorageListUpdatedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CacheStorageListUpdatedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<IndexedDBContentUpdatedParams> IndexedDBContentUpdatedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("IndexedDBContentUpdatedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<IndexedDBContentUpdatedParams> result(new IndexedDBContentUpdatedParams());
  errors->Push();
  errors->SetName("IndexedDBContentUpdatedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<std::string>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  const base::Value* storage_key_value = dict.Find("storageKey");
  if (storage_key_value) {
    errors->SetName("storageKey");
    result->storage_key_ = internal::FromValue<std::string>::Parse(*storage_key_value, errors);
  } else {
    errors->AddError("required property missing: storageKey");
  }
  const base::Value* bucket_id_value = dict.Find("bucketId");
  if (bucket_id_value) {
    errors->SetName("bucketId");
    result->bucket_id_ = internal::FromValue<std::string>::Parse(*bucket_id_value, errors);
  } else {
    errors->AddError("required property missing: bucketId");
  }
  const base::Value* database_name_value = dict.Find("databaseName");
  if (database_name_value) {
    errors->SetName("databaseName");
    result->database_name_ = internal::FromValue<std::string>::Parse(*database_name_value, errors);
  } else {
    errors->AddError("required property missing: databaseName");
  }
  const base::Value* object_store_name_value = dict.Find("objectStoreName");
  if (object_store_name_value) {
    errors->SetName("objectStoreName");
    result->object_store_name_ = internal::FromValue<std::string>::Parse(*object_store_name_value, errors);
  } else {
    errors->AddError("required property missing: objectStoreName");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value IndexedDBContentUpdatedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("origin", internal::ToValue(origin_));
  result.Set("storageKey", internal::ToValue(storage_key_));
  result.Set("bucketId", internal::ToValue(bucket_id_));
  result.Set("databaseName", internal::ToValue(database_name_));
  result.Set("objectStoreName", internal::ToValue(object_store_name_));
  return base::Value(std::move(result));
}

std::unique_ptr<IndexedDBContentUpdatedParams> IndexedDBContentUpdatedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<IndexedDBContentUpdatedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<IndexedDBListUpdatedParams> IndexedDBListUpdatedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("IndexedDBListUpdatedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<IndexedDBListUpdatedParams> result(new IndexedDBListUpdatedParams());
  errors->Push();
  errors->SetName("IndexedDBListUpdatedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* origin_value = dict.Find("origin");
  if (origin_value) {
    errors->SetName("origin");
    result->origin_ = internal::FromValue<std::string>::Parse(*origin_value, errors);
  } else {
    errors->AddError("required property missing: origin");
  }
  const base::Value* storage_key_value = dict.Find("storageKey");
  if (storage_key_value) {
    errors->SetName("storageKey");
    result->storage_key_ = internal::FromValue<std::string>::Parse(*storage_key_value, errors);
  } else {
    errors->AddError("required property missing: storageKey");
  }
  const base::Value* bucket_id_value = dict.Find("bucketId");
  if (bucket_id_value) {
    errors->SetName("bucketId");
    result->bucket_id_ = internal::FromValue<std::string>::Parse(*bucket_id_value, errors);
  } else {
    errors->AddError("required property missing: bucketId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value IndexedDBListUpdatedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("origin", internal::ToValue(origin_));
  result.Set("storageKey", internal::ToValue(storage_key_));
  result.Set("bucketId", internal::ToValue(bucket_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<IndexedDBListUpdatedParams> IndexedDBListUpdatedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<IndexedDBListUpdatedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<InterestGroupAccessedParams> InterestGroupAccessedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("InterestGroupAccessedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<InterestGroupAccessedParams> result(new InterestGroupAccessedParams());
  errors->Push();
  errors->SetName("InterestGroupAccessedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* access_time_value = dict.Find("accessTime");
  if (access_time_value) {
    errors->SetName("accessTime");
    result->access_time_ = internal::FromValue<double>::Parse(*access_time_value, errors);
  } else {
    errors->AddError("required property missing: accessTime");
  }
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::storage::InterestGroupAccessType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  const base::Value* owner_origin_value = dict.Find("ownerOrigin");
  if (owner_origin_value) {
    errors->SetName("ownerOrigin");
    result->owner_origin_ = internal::FromValue<std::string>::Parse(*owner_origin_value, errors);
  } else {
    errors->AddError("required property missing: ownerOrigin");
  }
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  } else {
    errors->AddError("required property missing: name");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value InterestGroupAccessedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("accessTime", internal::ToValue(access_time_));
  result.Set("type", internal::ToValue(type_));
  result.Set("ownerOrigin", internal::ToValue(owner_origin_));
  result.Set("name", internal::ToValue(name_));
  return base::Value(std::move(result));
}

std::unique_ptr<InterestGroupAccessedParams> InterestGroupAccessedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<InterestGroupAccessedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SharedStorageAccessedParams> SharedStorageAccessedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SharedStorageAccessedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SharedStorageAccessedParams> result(new SharedStorageAccessedParams());
  errors->Push();
  errors->SetName("SharedStorageAccessedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* access_time_value = dict.Find("accessTime");
  if (access_time_value) {
    errors->SetName("accessTime");
    result->access_time_ = internal::FromValue<double>::Parse(*access_time_value, errors);
  } else {
    errors->AddError("required property missing: accessTime");
  }
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::storage::SharedStorageAccessType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  const base::Value* main_frame_id_value = dict.Find("mainFrameId");
  if (main_frame_id_value) {
    errors->SetName("mainFrameId");
    result->main_frame_id_ = internal::FromValue<std::string>::Parse(*main_frame_id_value, errors);
  } else {
    errors->AddError("required property missing: mainFrameId");
  }
  const base::Value* owner_origin_value = dict.Find("ownerOrigin");
  if (owner_origin_value) {
    errors->SetName("ownerOrigin");
    result->owner_origin_ = internal::FromValue<std::string>::Parse(*owner_origin_value, errors);
  } else {
    errors->AddError("required property missing: ownerOrigin");
  }
  const base::Value* params_value = dict.Find("params");
  if (params_value) {
    errors->SetName("params");
    result->params_ = internal::FromValue<::headless::storage::SharedStorageAccessParams>::Parse(*params_value, errors);
  } else {
    errors->AddError("required property missing: params");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SharedStorageAccessedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("accessTime", internal::ToValue(access_time_));
  result.Set("type", internal::ToValue(type_));
  result.Set("mainFrameId", internal::ToValue(main_frame_id_));
  result.Set("ownerOrigin", internal::ToValue(owner_origin_));
  result.Set("params", internal::ToValue(*params_));
  return base::Value(std::move(result));
}

std::unique_ptr<SharedStorageAccessedParams> SharedStorageAccessedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SharedStorageAccessedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StorageBucketCreatedOrUpdatedParams> StorageBucketCreatedOrUpdatedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StorageBucketCreatedOrUpdatedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StorageBucketCreatedOrUpdatedParams> result(new StorageBucketCreatedOrUpdatedParams());
  errors->Push();
  errors->SetName("StorageBucketCreatedOrUpdatedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* bucket_info_value = dict.Find("bucketInfo");
  if (bucket_info_value) {
    errors->SetName("bucketInfo");
    result->bucket_info_ = internal::FromValue<::headless::storage::StorageBucketInfo>::Parse(*bucket_info_value, errors);
  } else {
    errors->AddError("required property missing: bucketInfo");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StorageBucketCreatedOrUpdatedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("bucketInfo", internal::ToValue(*bucket_info_));
  return base::Value(std::move(result));
}

std::unique_ptr<StorageBucketCreatedOrUpdatedParams> StorageBucketCreatedOrUpdatedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StorageBucketCreatedOrUpdatedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<StorageBucketDeletedParams> StorageBucketDeletedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("StorageBucketDeletedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<StorageBucketDeletedParams> result(new StorageBucketDeletedParams());
  errors->Push();
  errors->SetName("StorageBucketDeletedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* bucket_id_value = dict.Find("bucketId");
  if (bucket_id_value) {
    errors->SetName("bucketId");
    result->bucket_id_ = internal::FromValue<std::string>::Parse(*bucket_id_value, errors);
  } else {
    errors->AddError("required property missing: bucketId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value StorageBucketDeletedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("bucketId", internal::ToValue(bucket_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<StorageBucketDeletedParams> StorageBucketDeletedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<StorageBucketDeletedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AttributionReportingSourceRegisteredParams> AttributionReportingSourceRegisteredParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AttributionReportingSourceRegisteredParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AttributionReportingSourceRegisteredParams> result(new AttributionReportingSourceRegisteredParams());
  errors->Push();
  errors->SetName("AttributionReportingSourceRegisteredParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* registration_value = dict.Find("registration");
  if (registration_value) {
    errors->SetName("registration");
    result->registration_ = internal::FromValue<::headless::storage::AttributionReportingSourceRegistration>::Parse(*registration_value, errors);
  } else {
    errors->AddError("required property missing: registration");
  }
  const base::Value* result_value = dict.Find("result");
  if (result_value) {
    errors->SetName("result");
    result->result_ = internal::FromValue<::headless::storage::AttributionReportingSourceRegistrationResult>::Parse(*result_value, errors);
  } else {
    errors->AddError("required property missing: result");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AttributionReportingSourceRegisteredParams::Serialize() const {
  base::Value::Dict result;
  result.Set("registration", internal::ToValue(*registration_));
  result.Set("result", internal::ToValue(result_));
  return base::Value(std::move(result));
}

std::unique_ptr<AttributionReportingSourceRegisteredParams> AttributionReportingSourceRegisteredParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AttributionReportingSourceRegisteredParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AttributionReportingTriggerRegisteredParams> AttributionReportingTriggerRegisteredParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AttributionReportingTriggerRegisteredParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AttributionReportingTriggerRegisteredParams> result(new AttributionReportingTriggerRegisteredParams());
  errors->Push();
  errors->SetName("AttributionReportingTriggerRegisteredParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* registration_value = dict.Find("registration");
  if (registration_value) {
    errors->SetName("registration");
    result->registration_ = internal::FromValue<::headless::storage::AttributionReportingTriggerRegistration>::Parse(*registration_value, errors);
  } else {
    errors->AddError("required property missing: registration");
  }
  const base::Value* event_level_value = dict.Find("eventLevel");
  if (event_level_value) {
    errors->SetName("eventLevel");
    result->event_level_ = internal::FromValue<::headless::storage::AttributionReportingEventLevelResult>::Parse(*event_level_value, errors);
  } else {
    errors->AddError("required property missing: eventLevel");
  }
  const base::Value* aggregatable_value = dict.Find("aggregatable");
  if (aggregatable_value) {
    errors->SetName("aggregatable");
    result->aggregatable_ = internal::FromValue<::headless::storage::AttributionReportingAggregatableResult>::Parse(*aggregatable_value, errors);
  } else {
    errors->AddError("required property missing: aggregatable");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AttributionReportingTriggerRegisteredParams::Serialize() const {
  base::Value::Dict result;
  result.Set("registration", internal::ToValue(*registration_));
  result.Set("eventLevel", internal::ToValue(event_level_));
  result.Set("aggregatable", internal::ToValue(aggregatable_));
  return base::Value(std::move(result));
}

std::unique_ptr<AttributionReportingTriggerRegisteredParams> AttributionReportingTriggerRegisteredParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AttributionReportingTriggerRegisteredParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


}  // namespace storage
}  // namespace headless
