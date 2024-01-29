// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_STORAGE_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_STORAGE_H_

#include "base/notreached.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_storage.h"
#include "headless/public/internal/value_conversions.h"

namespace headless {
namespace internal {


template <>
struct FromValue<storage::StorageType> {
  static storage::StorageType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return storage::StorageType::APPCACHE;
    }
    if (value.GetString() == "appcache")
      return storage::StorageType::APPCACHE;
    if (value.GetString() == "cookies")
      return storage::StorageType::COOKIES;
    if (value.GetString() == "file_systems")
      return storage::StorageType::FILE_SYSTEMS;
    if (value.GetString() == "indexeddb")
      return storage::StorageType::INDEXEDDB;
    if (value.GetString() == "local_storage")
      return storage::StorageType::LOCAL_STORAGE;
    if (value.GetString() == "shader_cache")
      return storage::StorageType::SHADER_CACHE;
    if (value.GetString() == "websql")
      return storage::StorageType::WEBSQL;
    if (value.GetString() == "service_workers")
      return storage::StorageType::SERVICE_WORKERS;
    if (value.GetString() == "cache_storage")
      return storage::StorageType::CACHE_STORAGE;
    if (value.GetString() == "interest_groups")
      return storage::StorageType::INTEREST_GROUPS;
    if (value.GetString() == "shared_storage")
      return storage::StorageType::SHARED_STORAGE;
    if (value.GetString() == "storage_buckets")
      return storage::StorageType::STORAGE_BUCKETS;
    if (value.GetString() == "all")
      return storage::StorageType::ALL;
    if (value.GetString() == "other")
      return storage::StorageType::OTHER;
    errors->AddError("invalid enum value");
    return storage::StorageType::APPCACHE;
  }
};

template <>
inline base::Value ToValue(const storage::StorageType& value) {
  switch (value) {
    case storage::StorageType::APPCACHE:
      return base::Value("appcache");
    case storage::StorageType::COOKIES:
      return base::Value("cookies");
    case storage::StorageType::FILE_SYSTEMS:
      return base::Value("file_systems");
    case storage::StorageType::INDEXEDDB:
      return base::Value("indexeddb");
    case storage::StorageType::LOCAL_STORAGE:
      return base::Value("local_storage");
    case storage::StorageType::SHADER_CACHE:
      return base::Value("shader_cache");
    case storage::StorageType::WEBSQL:
      return base::Value("websql");
    case storage::StorageType::SERVICE_WORKERS:
      return base::Value("service_workers");
    case storage::StorageType::CACHE_STORAGE:
      return base::Value("cache_storage");
    case storage::StorageType::INTEREST_GROUPS:
      return base::Value("interest_groups");
    case storage::StorageType::SHARED_STORAGE:
      return base::Value("shared_storage");
    case storage::StorageType::STORAGE_BUCKETS:
      return base::Value("storage_buckets");
    case storage::StorageType::ALL:
      return base::Value("all");
    case storage::StorageType::OTHER:
      return base::Value("other");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<storage::UsageForType> {
  static std::unique_ptr<storage::UsageForType> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::UsageForType::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::UsageForType& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::TrustTokens> {
  static std::unique_ptr<storage::TrustTokens> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::TrustTokens::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::TrustTokens& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::InterestGroupAccessType> {
  static storage::InterestGroupAccessType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return storage::InterestGroupAccessType::JOIN;
    }
    if (value.GetString() == "join")
      return storage::InterestGroupAccessType::JOIN;
    if (value.GetString() == "leave")
      return storage::InterestGroupAccessType::LEAVE;
    if (value.GetString() == "update")
      return storage::InterestGroupAccessType::UPDATE;
    if (value.GetString() == "loaded")
      return storage::InterestGroupAccessType::LOADED;
    if (value.GetString() == "bid")
      return storage::InterestGroupAccessType::BID;
    if (value.GetString() == "win")
      return storage::InterestGroupAccessType::WIN;
    if (value.GetString() == "additionalBid")
      return storage::InterestGroupAccessType::ADDITIONAL_BID;
    if (value.GetString() == "additionalBidWin")
      return storage::InterestGroupAccessType::ADDITIONAL_BID_WIN;
    if (value.GetString() == "topLevelBid")
      return storage::InterestGroupAccessType::TOP_LEVEL_BID;
    if (value.GetString() == "topLevelAdditionalBid")
      return storage::InterestGroupAccessType::TOP_LEVEL_ADDITIONAL_BID;
    if (value.GetString() == "clear")
      return storage::InterestGroupAccessType::CLEAR;
    errors->AddError("invalid enum value");
    return storage::InterestGroupAccessType::JOIN;
  }
};

template <>
inline base::Value ToValue(const storage::InterestGroupAccessType& value) {
  switch (value) {
    case storage::InterestGroupAccessType::JOIN:
      return base::Value("join");
    case storage::InterestGroupAccessType::LEAVE:
      return base::Value("leave");
    case storage::InterestGroupAccessType::UPDATE:
      return base::Value("update");
    case storage::InterestGroupAccessType::LOADED:
      return base::Value("loaded");
    case storage::InterestGroupAccessType::BID:
      return base::Value("bid");
    case storage::InterestGroupAccessType::WIN:
      return base::Value("win");
    case storage::InterestGroupAccessType::ADDITIONAL_BID:
      return base::Value("additionalBid");
    case storage::InterestGroupAccessType::ADDITIONAL_BID_WIN:
      return base::Value("additionalBidWin");
    case storage::InterestGroupAccessType::TOP_LEVEL_BID:
      return base::Value("topLevelBid");
    case storage::InterestGroupAccessType::TOP_LEVEL_ADDITIONAL_BID:
      return base::Value("topLevelAdditionalBid");
    case storage::InterestGroupAccessType::CLEAR:
      return base::Value("clear");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<storage::InterestGroupAuctionEventType> {
  static storage::InterestGroupAuctionEventType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return storage::InterestGroupAuctionEventType::STARTED;
    }
    if (value.GetString() == "started")
      return storage::InterestGroupAuctionEventType::STARTED;
    if (value.GetString() == "configResolved")
      return storage::InterestGroupAuctionEventType::CONFIG_RESOLVED;
    errors->AddError("invalid enum value");
    return storage::InterestGroupAuctionEventType::STARTED;
  }
};

template <>
inline base::Value ToValue(const storage::InterestGroupAuctionEventType& value) {
  switch (value) {
    case storage::InterestGroupAuctionEventType::STARTED:
      return base::Value("started");
    case storage::InterestGroupAuctionEventType::CONFIG_RESOLVED:
      return base::Value("configResolved");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<storage::InterestGroupAuctionFetchType> {
  static storage::InterestGroupAuctionFetchType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return storage::InterestGroupAuctionFetchType::BIDDER_JS;
    }
    if (value.GetString() == "bidderJs")
      return storage::InterestGroupAuctionFetchType::BIDDER_JS;
    if (value.GetString() == "bidderWasm")
      return storage::InterestGroupAuctionFetchType::BIDDER_WASM;
    if (value.GetString() == "sellerJs")
      return storage::InterestGroupAuctionFetchType::SELLER_JS;
    if (value.GetString() == "bidderTrustedSignals")
      return storage::InterestGroupAuctionFetchType::BIDDER_TRUSTED_SIGNALS;
    if (value.GetString() == "sellerTrustedSignals")
      return storage::InterestGroupAuctionFetchType::SELLER_TRUSTED_SIGNALS;
    errors->AddError("invalid enum value");
    return storage::InterestGroupAuctionFetchType::BIDDER_JS;
  }
};

template <>
inline base::Value ToValue(const storage::InterestGroupAuctionFetchType& value) {
  switch (value) {
    case storage::InterestGroupAuctionFetchType::BIDDER_JS:
      return base::Value("bidderJs");
    case storage::InterestGroupAuctionFetchType::BIDDER_WASM:
      return base::Value("bidderWasm");
    case storage::InterestGroupAuctionFetchType::SELLER_JS:
      return base::Value("sellerJs");
    case storage::InterestGroupAuctionFetchType::BIDDER_TRUSTED_SIGNALS:
      return base::Value("bidderTrustedSignals");
    case storage::InterestGroupAuctionFetchType::SELLER_TRUSTED_SIGNALS:
      return base::Value("sellerTrustedSignals");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<storage::InterestGroupAd> {
  static std::unique_ptr<storage::InterestGroupAd> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::InterestGroupAd::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::InterestGroupAd& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::InterestGroupDetails> {
  static std::unique_ptr<storage::InterestGroupDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::InterestGroupDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::InterestGroupDetails& value) {
  return value.Serialize();
}

template <>
struct FromValue<storage::SharedStorageAccessType> {
  static storage::SharedStorageAccessType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return storage::SharedStorageAccessType::DOCUMENT_ADD_MODULE;
    }
    if (value.GetString() == "documentAddModule")
      return storage::SharedStorageAccessType::DOCUMENT_ADD_MODULE;
    if (value.GetString() == "documentSelectURL")
      return storage::SharedStorageAccessType::DOCUMENT_SELECTURL;
    if (value.GetString() == "documentRun")
      return storage::SharedStorageAccessType::DOCUMENT_RUN;
    if (value.GetString() == "documentSet")
      return storage::SharedStorageAccessType::DOCUMENT_SET;
    if (value.GetString() == "documentAppend")
      return storage::SharedStorageAccessType::DOCUMENT_APPEND;
    if (value.GetString() == "documentDelete")
      return storage::SharedStorageAccessType::DOCUMENT_DELETE;
    if (value.GetString() == "documentClear")
      return storage::SharedStorageAccessType::DOCUMENT_CLEAR;
    if (value.GetString() == "workletSet")
      return storage::SharedStorageAccessType::WORKLET_SET;
    if (value.GetString() == "workletAppend")
      return storage::SharedStorageAccessType::WORKLET_APPEND;
    if (value.GetString() == "workletDelete")
      return storage::SharedStorageAccessType::WORKLET_DELETE;
    if (value.GetString() == "workletClear")
      return storage::SharedStorageAccessType::WORKLET_CLEAR;
    if (value.GetString() == "workletGet")
      return storage::SharedStorageAccessType::WORKLET_GET;
    if (value.GetString() == "workletKeys")
      return storage::SharedStorageAccessType::WORKLET_KEYS;
    if (value.GetString() == "workletEntries")
      return storage::SharedStorageAccessType::WORKLET_ENTRIES;
    if (value.GetString() == "workletLength")
      return storage::SharedStorageAccessType::WORKLET_LENGTH;
    if (value.GetString() == "workletRemainingBudget")
      return storage::SharedStorageAccessType::WORKLET_REMAINING_BUDGET;
    errors->AddError("invalid enum value");
    return storage::SharedStorageAccessType::DOCUMENT_ADD_MODULE;
  }
};

template <>
inline base::Value ToValue(const storage::SharedStorageAccessType& value) {
  switch (value) {
    case storage::SharedStorageAccessType::DOCUMENT_ADD_MODULE:
      return base::Value("documentAddModule");
    case storage::SharedStorageAccessType::DOCUMENT_SELECTURL:
      return base::Value("documentSelectURL");
    case storage::SharedStorageAccessType::DOCUMENT_RUN:
      return base::Value("documentRun");
    case storage::SharedStorageAccessType::DOCUMENT_SET:
      return base::Value("documentSet");
    case storage::SharedStorageAccessType::DOCUMENT_APPEND:
      return base::Value("documentAppend");
    case storage::SharedStorageAccessType::DOCUMENT_DELETE:
      return base::Value("documentDelete");
    case storage::SharedStorageAccessType::DOCUMENT_CLEAR:
      return base::Value("documentClear");
    case storage::SharedStorageAccessType::WORKLET_SET:
      return base::Value("workletSet");
    case storage::SharedStorageAccessType::WORKLET_APPEND:
      return base::Value("workletAppend");
    case storage::SharedStorageAccessType::WORKLET_DELETE:
      return base::Value("workletDelete");
    case storage::SharedStorageAccessType::WORKLET_CLEAR:
      return base::Value("workletClear");
    case storage::SharedStorageAccessType::WORKLET_GET:
      return base::Value("workletGet");
    case storage::SharedStorageAccessType::WORKLET_KEYS:
      return base::Value("workletKeys");
    case storage::SharedStorageAccessType::WORKLET_ENTRIES:
      return base::Value("workletEntries");
    case storage::SharedStorageAccessType::WORKLET_LENGTH:
      return base::Value("workletLength");
    case storage::SharedStorageAccessType::WORKLET_REMAINING_BUDGET:
      return base::Value("workletRemainingBudget");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<storage::SharedStorageEntry> {
  static std::unique_ptr<storage::SharedStorageEntry> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SharedStorageEntry::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SharedStorageEntry& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SharedStorageMetadata> {
  static std::unique_ptr<storage::SharedStorageMetadata> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SharedStorageMetadata::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SharedStorageMetadata& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SharedStorageReportingMetadata> {
  static std::unique_ptr<storage::SharedStorageReportingMetadata> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SharedStorageReportingMetadata::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SharedStorageReportingMetadata& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SharedStorageUrlWithMetadata> {
  static std::unique_ptr<storage::SharedStorageUrlWithMetadata> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SharedStorageUrlWithMetadata::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SharedStorageUrlWithMetadata& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SharedStorageAccessParams> {
  static std::unique_ptr<storage::SharedStorageAccessParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SharedStorageAccessParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SharedStorageAccessParams& value) {
  return value.Serialize();
}

template <>
struct FromValue<storage::StorageBucketsDurability> {
  static storage::StorageBucketsDurability Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return storage::StorageBucketsDurability::RELAXED;
    }
    if (value.GetString() == "relaxed")
      return storage::StorageBucketsDurability::RELAXED;
    if (value.GetString() == "strict")
      return storage::StorageBucketsDurability::STRICT;
    errors->AddError("invalid enum value");
    return storage::StorageBucketsDurability::RELAXED;
  }
};

template <>
inline base::Value ToValue(const storage::StorageBucketsDurability& value) {
  switch (value) {
    case storage::StorageBucketsDurability::RELAXED:
      return base::Value("relaxed");
    case storage::StorageBucketsDurability::STRICT:
      return base::Value("strict");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<storage::StorageBucket> {
  static std::unique_ptr<storage::StorageBucket> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::StorageBucket::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::StorageBucket& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::StorageBucketInfo> {
  static std::unique_ptr<storage::StorageBucketInfo> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::StorageBucketInfo::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::StorageBucketInfo& value) {
  return value.Serialize();
}

template <>
struct FromValue<storage::AttributionReportingSourceType> {
  static storage::AttributionReportingSourceType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return storage::AttributionReportingSourceType::NAVIGATION;
    }
    if (value.GetString() == "navigation")
      return storage::AttributionReportingSourceType::NAVIGATION;
    if (value.GetString() == "event")
      return storage::AttributionReportingSourceType::EVENT;
    errors->AddError("invalid enum value");
    return storage::AttributionReportingSourceType::NAVIGATION;
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingSourceType& value) {
  switch (value) {
    case storage::AttributionReportingSourceType::NAVIGATION:
      return base::Value("navigation");
    case storage::AttributionReportingSourceType::EVENT:
      return base::Value("event");
  };
  NOTREACHED();
  return base::Value();
}




template <>
struct FromValue<storage::AttributionReportingFilterDataEntry> {
  static std::unique_ptr<storage::AttributionReportingFilterDataEntry> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::AttributionReportingFilterDataEntry::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingFilterDataEntry& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::AttributionReportingFilterConfig> {
  static std::unique_ptr<storage::AttributionReportingFilterConfig> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::AttributionReportingFilterConfig::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingFilterConfig& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::AttributionReportingFilterPair> {
  static std::unique_ptr<storage::AttributionReportingFilterPair> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::AttributionReportingFilterPair::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingFilterPair& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::AttributionReportingAggregationKeysEntry> {
  static std::unique_ptr<storage::AttributionReportingAggregationKeysEntry> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::AttributionReportingAggregationKeysEntry::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingAggregationKeysEntry& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::AttributionReportingEventReportWindows> {
  static std::unique_ptr<storage::AttributionReportingEventReportWindows> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::AttributionReportingEventReportWindows::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingEventReportWindows& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::AttributionReportingTriggerSpec> {
  static std::unique_ptr<storage::AttributionReportingTriggerSpec> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::AttributionReportingTriggerSpec::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingTriggerSpec& value) {
  return value.Serialize();
}

template <>
struct FromValue<storage::AttributionReportingTriggerDataMatching> {
  static storage::AttributionReportingTriggerDataMatching Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return storage::AttributionReportingTriggerDataMatching::EXACT;
    }
    if (value.GetString() == "exact")
      return storage::AttributionReportingTriggerDataMatching::EXACT;
    if (value.GetString() == "modulus")
      return storage::AttributionReportingTriggerDataMatching::MODULUS;
    errors->AddError("invalid enum value");
    return storage::AttributionReportingTriggerDataMatching::EXACT;
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingTriggerDataMatching& value) {
  switch (value) {
    case storage::AttributionReportingTriggerDataMatching::EXACT:
      return base::Value("exact");
    case storage::AttributionReportingTriggerDataMatching::MODULUS:
      return base::Value("modulus");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<storage::AttributionReportingSourceRegistration> {
  static std::unique_ptr<storage::AttributionReportingSourceRegistration> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::AttributionReportingSourceRegistration::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingSourceRegistration& value) {
  return value.Serialize();
}

template <>
struct FromValue<storage::AttributionReportingSourceRegistrationResult> {
  static storage::AttributionReportingSourceRegistrationResult Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return storage::AttributionReportingSourceRegistrationResult::SUCCESS;
    }
    if (value.GetString() == "success")
      return storage::AttributionReportingSourceRegistrationResult::SUCCESS;
    if (value.GetString() == "internalError")
      return storage::AttributionReportingSourceRegistrationResult::INTERNAL_ERROR;
    if (value.GetString() == "insufficientSourceCapacity")
      return storage::AttributionReportingSourceRegistrationResult::INSUFFICIENT_SOURCE_CAPACITY;
    if (value.GetString() == "insufficientUniqueDestinationCapacity")
      return storage::AttributionReportingSourceRegistrationResult::INSUFFICIENT_UNIQUE_DESTINATION_CAPACITY;
    if (value.GetString() == "excessiveReportingOrigins")
      return storage::AttributionReportingSourceRegistrationResult::EXCESSIVE_REPORTING_ORIGINS;
    if (value.GetString() == "prohibitedByBrowserPolicy")
      return storage::AttributionReportingSourceRegistrationResult::PROHIBITED_BY_BROWSER_POLICY;
    if (value.GetString() == "successNoised")
      return storage::AttributionReportingSourceRegistrationResult::SUCCESS_NOISED;
    if (value.GetString() == "destinationReportingLimitReached")
      return storage::AttributionReportingSourceRegistrationResult::DESTINATION_REPORTING_LIMIT_REACHED;
    if (value.GetString() == "destinationGlobalLimitReached")
      return storage::AttributionReportingSourceRegistrationResult::DESTINATION_GLOBAL_LIMIT_REACHED;
    if (value.GetString() == "destinationBothLimitsReached")
      return storage::AttributionReportingSourceRegistrationResult::DESTINATION_BOTH_LIMITS_REACHED;
    if (value.GetString() == "reportingOriginsPerSiteLimitReached")
      return storage::AttributionReportingSourceRegistrationResult::REPORTING_ORIGINS_PER_SITE_LIMIT_REACHED;
    if (value.GetString() == "exceedsMaxChannelCapacity")
      return storage::AttributionReportingSourceRegistrationResult::EXCEEDS_MAX_CHANNEL_CAPACITY;
    errors->AddError("invalid enum value");
    return storage::AttributionReportingSourceRegistrationResult::SUCCESS;
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingSourceRegistrationResult& value) {
  switch (value) {
    case storage::AttributionReportingSourceRegistrationResult::SUCCESS:
      return base::Value("success");
    case storage::AttributionReportingSourceRegistrationResult::INTERNAL_ERROR:
      return base::Value("internalError");
    case storage::AttributionReportingSourceRegistrationResult::INSUFFICIENT_SOURCE_CAPACITY:
      return base::Value("insufficientSourceCapacity");
    case storage::AttributionReportingSourceRegistrationResult::INSUFFICIENT_UNIQUE_DESTINATION_CAPACITY:
      return base::Value("insufficientUniqueDestinationCapacity");
    case storage::AttributionReportingSourceRegistrationResult::EXCESSIVE_REPORTING_ORIGINS:
      return base::Value("excessiveReportingOrigins");
    case storage::AttributionReportingSourceRegistrationResult::PROHIBITED_BY_BROWSER_POLICY:
      return base::Value("prohibitedByBrowserPolicy");
    case storage::AttributionReportingSourceRegistrationResult::SUCCESS_NOISED:
      return base::Value("successNoised");
    case storage::AttributionReportingSourceRegistrationResult::DESTINATION_REPORTING_LIMIT_REACHED:
      return base::Value("destinationReportingLimitReached");
    case storage::AttributionReportingSourceRegistrationResult::DESTINATION_GLOBAL_LIMIT_REACHED:
      return base::Value("destinationGlobalLimitReached");
    case storage::AttributionReportingSourceRegistrationResult::DESTINATION_BOTH_LIMITS_REACHED:
      return base::Value("destinationBothLimitsReached");
    case storage::AttributionReportingSourceRegistrationResult::REPORTING_ORIGINS_PER_SITE_LIMIT_REACHED:
      return base::Value("reportingOriginsPerSiteLimitReached");
    case storage::AttributionReportingSourceRegistrationResult::EXCEEDS_MAX_CHANNEL_CAPACITY:
      return base::Value("exceedsMaxChannelCapacity");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<storage::AttributionReportingSourceRegistrationTimeConfig> {
  static storage::AttributionReportingSourceRegistrationTimeConfig Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return storage::AttributionReportingSourceRegistrationTimeConfig::INCLUDE;
    }
    if (value.GetString() == "include")
      return storage::AttributionReportingSourceRegistrationTimeConfig::INCLUDE;
    if (value.GetString() == "exclude")
      return storage::AttributionReportingSourceRegistrationTimeConfig::EXCLUDE;
    errors->AddError("invalid enum value");
    return storage::AttributionReportingSourceRegistrationTimeConfig::INCLUDE;
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingSourceRegistrationTimeConfig& value) {
  switch (value) {
    case storage::AttributionReportingSourceRegistrationTimeConfig::INCLUDE:
      return base::Value("include");
    case storage::AttributionReportingSourceRegistrationTimeConfig::EXCLUDE:
      return base::Value("exclude");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<storage::AttributionReportingAggregatableValueEntry> {
  static std::unique_ptr<storage::AttributionReportingAggregatableValueEntry> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::AttributionReportingAggregatableValueEntry::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingAggregatableValueEntry& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::AttributionReportingEventTriggerData> {
  static std::unique_ptr<storage::AttributionReportingEventTriggerData> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::AttributionReportingEventTriggerData::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingEventTriggerData& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::AttributionReportingAggregatableTriggerData> {
  static std::unique_ptr<storage::AttributionReportingAggregatableTriggerData> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::AttributionReportingAggregatableTriggerData::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingAggregatableTriggerData& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::AttributionReportingAggregatableDedupKey> {
  static std::unique_ptr<storage::AttributionReportingAggregatableDedupKey> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::AttributionReportingAggregatableDedupKey::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingAggregatableDedupKey& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::AttributionReportingTriggerRegistration> {
  static std::unique_ptr<storage::AttributionReportingTriggerRegistration> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::AttributionReportingTriggerRegistration::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingTriggerRegistration& value) {
  return value.Serialize();
}

template <>
struct FromValue<storage::AttributionReportingEventLevelResult> {
  static storage::AttributionReportingEventLevelResult Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return storage::AttributionReportingEventLevelResult::SUCCESS;
    }
    if (value.GetString() == "success")
      return storage::AttributionReportingEventLevelResult::SUCCESS;
    if (value.GetString() == "successDroppedLowerPriority")
      return storage::AttributionReportingEventLevelResult::SUCCESS_DROPPED_LOWER_PRIORITY;
    if (value.GetString() == "internalError")
      return storage::AttributionReportingEventLevelResult::INTERNAL_ERROR;
    if (value.GetString() == "noCapacityForAttributionDestination")
      return storage::AttributionReportingEventLevelResult::NO_CAPACITY_FOR_ATTRIBUTION_DESTINATION;
    if (value.GetString() == "noMatchingSources")
      return storage::AttributionReportingEventLevelResult::NO_MATCHING_SOURCES;
    if (value.GetString() == "deduplicated")
      return storage::AttributionReportingEventLevelResult::DEDUPLICATED;
    if (value.GetString() == "excessiveAttributions")
      return storage::AttributionReportingEventLevelResult::EXCESSIVE_ATTRIBUTIONS;
    if (value.GetString() == "priorityTooLow")
      return storage::AttributionReportingEventLevelResult::PRIORITY_TOO_LOW;
    if (value.GetString() == "neverAttributedSource")
      return storage::AttributionReportingEventLevelResult::NEVER_ATTRIBUTED_SOURCE;
    if (value.GetString() == "excessiveReportingOrigins")
      return storage::AttributionReportingEventLevelResult::EXCESSIVE_REPORTING_ORIGINS;
    if (value.GetString() == "noMatchingSourceFilterData")
      return storage::AttributionReportingEventLevelResult::NO_MATCHING_SOURCE_FILTER_DATA;
    if (value.GetString() == "prohibitedByBrowserPolicy")
      return storage::AttributionReportingEventLevelResult::PROHIBITED_BY_BROWSER_POLICY;
    if (value.GetString() == "noMatchingConfigurations")
      return storage::AttributionReportingEventLevelResult::NO_MATCHING_CONFIGURATIONS;
    if (value.GetString() == "excessiveReports")
      return storage::AttributionReportingEventLevelResult::EXCESSIVE_REPORTS;
    if (value.GetString() == "falselyAttributedSource")
      return storage::AttributionReportingEventLevelResult::FALSELY_ATTRIBUTED_SOURCE;
    if (value.GetString() == "reportWindowPassed")
      return storage::AttributionReportingEventLevelResult::REPORT_WINDOW_PASSED;
    if (value.GetString() == "notRegistered")
      return storage::AttributionReportingEventLevelResult::NOT_REGISTERED;
    if (value.GetString() == "reportWindowNotStarted")
      return storage::AttributionReportingEventLevelResult::REPORT_WINDOW_NOT_STARTED;
    if (value.GetString() == "noMatchingTriggerData")
      return storage::AttributionReportingEventLevelResult::NO_MATCHING_TRIGGER_DATA;
    errors->AddError("invalid enum value");
    return storage::AttributionReportingEventLevelResult::SUCCESS;
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingEventLevelResult& value) {
  switch (value) {
    case storage::AttributionReportingEventLevelResult::SUCCESS:
      return base::Value("success");
    case storage::AttributionReportingEventLevelResult::SUCCESS_DROPPED_LOWER_PRIORITY:
      return base::Value("successDroppedLowerPriority");
    case storage::AttributionReportingEventLevelResult::INTERNAL_ERROR:
      return base::Value("internalError");
    case storage::AttributionReportingEventLevelResult::NO_CAPACITY_FOR_ATTRIBUTION_DESTINATION:
      return base::Value("noCapacityForAttributionDestination");
    case storage::AttributionReportingEventLevelResult::NO_MATCHING_SOURCES:
      return base::Value("noMatchingSources");
    case storage::AttributionReportingEventLevelResult::DEDUPLICATED:
      return base::Value("deduplicated");
    case storage::AttributionReportingEventLevelResult::EXCESSIVE_ATTRIBUTIONS:
      return base::Value("excessiveAttributions");
    case storage::AttributionReportingEventLevelResult::PRIORITY_TOO_LOW:
      return base::Value("priorityTooLow");
    case storage::AttributionReportingEventLevelResult::NEVER_ATTRIBUTED_SOURCE:
      return base::Value("neverAttributedSource");
    case storage::AttributionReportingEventLevelResult::EXCESSIVE_REPORTING_ORIGINS:
      return base::Value("excessiveReportingOrigins");
    case storage::AttributionReportingEventLevelResult::NO_MATCHING_SOURCE_FILTER_DATA:
      return base::Value("noMatchingSourceFilterData");
    case storage::AttributionReportingEventLevelResult::PROHIBITED_BY_BROWSER_POLICY:
      return base::Value("prohibitedByBrowserPolicy");
    case storage::AttributionReportingEventLevelResult::NO_MATCHING_CONFIGURATIONS:
      return base::Value("noMatchingConfigurations");
    case storage::AttributionReportingEventLevelResult::EXCESSIVE_REPORTS:
      return base::Value("excessiveReports");
    case storage::AttributionReportingEventLevelResult::FALSELY_ATTRIBUTED_SOURCE:
      return base::Value("falselyAttributedSource");
    case storage::AttributionReportingEventLevelResult::REPORT_WINDOW_PASSED:
      return base::Value("reportWindowPassed");
    case storage::AttributionReportingEventLevelResult::NOT_REGISTERED:
      return base::Value("notRegistered");
    case storage::AttributionReportingEventLevelResult::REPORT_WINDOW_NOT_STARTED:
      return base::Value("reportWindowNotStarted");
    case storage::AttributionReportingEventLevelResult::NO_MATCHING_TRIGGER_DATA:
      return base::Value("noMatchingTriggerData");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<storage::AttributionReportingAggregatableResult> {
  static storage::AttributionReportingAggregatableResult Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return storage::AttributionReportingAggregatableResult::SUCCESS;
    }
    if (value.GetString() == "success")
      return storage::AttributionReportingAggregatableResult::SUCCESS;
    if (value.GetString() == "internalError")
      return storage::AttributionReportingAggregatableResult::INTERNAL_ERROR;
    if (value.GetString() == "noCapacityForAttributionDestination")
      return storage::AttributionReportingAggregatableResult::NO_CAPACITY_FOR_ATTRIBUTION_DESTINATION;
    if (value.GetString() == "noMatchingSources")
      return storage::AttributionReportingAggregatableResult::NO_MATCHING_SOURCES;
    if (value.GetString() == "excessiveAttributions")
      return storage::AttributionReportingAggregatableResult::EXCESSIVE_ATTRIBUTIONS;
    if (value.GetString() == "excessiveReportingOrigins")
      return storage::AttributionReportingAggregatableResult::EXCESSIVE_REPORTING_ORIGINS;
    if (value.GetString() == "noHistograms")
      return storage::AttributionReportingAggregatableResult::NO_HISTOGRAMS;
    if (value.GetString() == "insufficientBudget")
      return storage::AttributionReportingAggregatableResult::INSUFFICIENT_BUDGET;
    if (value.GetString() == "noMatchingSourceFilterData")
      return storage::AttributionReportingAggregatableResult::NO_MATCHING_SOURCE_FILTER_DATA;
    if (value.GetString() == "notRegistered")
      return storage::AttributionReportingAggregatableResult::NOT_REGISTERED;
    if (value.GetString() == "prohibitedByBrowserPolicy")
      return storage::AttributionReportingAggregatableResult::PROHIBITED_BY_BROWSER_POLICY;
    if (value.GetString() == "deduplicated")
      return storage::AttributionReportingAggregatableResult::DEDUPLICATED;
    if (value.GetString() == "reportWindowPassed")
      return storage::AttributionReportingAggregatableResult::REPORT_WINDOW_PASSED;
    if (value.GetString() == "excessiveReports")
      return storage::AttributionReportingAggregatableResult::EXCESSIVE_REPORTS;
    errors->AddError("invalid enum value");
    return storage::AttributionReportingAggregatableResult::SUCCESS;
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingAggregatableResult& value) {
  switch (value) {
    case storage::AttributionReportingAggregatableResult::SUCCESS:
      return base::Value("success");
    case storage::AttributionReportingAggregatableResult::INTERNAL_ERROR:
      return base::Value("internalError");
    case storage::AttributionReportingAggregatableResult::NO_CAPACITY_FOR_ATTRIBUTION_DESTINATION:
      return base::Value("noCapacityForAttributionDestination");
    case storage::AttributionReportingAggregatableResult::NO_MATCHING_SOURCES:
      return base::Value("noMatchingSources");
    case storage::AttributionReportingAggregatableResult::EXCESSIVE_ATTRIBUTIONS:
      return base::Value("excessiveAttributions");
    case storage::AttributionReportingAggregatableResult::EXCESSIVE_REPORTING_ORIGINS:
      return base::Value("excessiveReportingOrigins");
    case storage::AttributionReportingAggregatableResult::NO_HISTOGRAMS:
      return base::Value("noHistograms");
    case storage::AttributionReportingAggregatableResult::INSUFFICIENT_BUDGET:
      return base::Value("insufficientBudget");
    case storage::AttributionReportingAggregatableResult::NO_MATCHING_SOURCE_FILTER_DATA:
      return base::Value("noMatchingSourceFilterData");
    case storage::AttributionReportingAggregatableResult::NOT_REGISTERED:
      return base::Value("notRegistered");
    case storage::AttributionReportingAggregatableResult::PROHIBITED_BY_BROWSER_POLICY:
      return base::Value("prohibitedByBrowserPolicy");
    case storage::AttributionReportingAggregatableResult::DEDUPLICATED:
      return base::Value("deduplicated");
    case storage::AttributionReportingAggregatableResult::REPORT_WINDOW_PASSED:
      return base::Value("reportWindowPassed");
    case storage::AttributionReportingAggregatableResult::EXCESSIVE_REPORTS:
      return base::Value("excessiveReports");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<storage::GetStorageKeyForFrameParams> {
  static std::unique_ptr<storage::GetStorageKeyForFrameParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::GetStorageKeyForFrameParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::GetStorageKeyForFrameParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::GetStorageKeyForFrameResult> {
  static std::unique_ptr<storage::GetStorageKeyForFrameResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::GetStorageKeyForFrameResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::GetStorageKeyForFrameResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::ClearDataForOriginParams> {
  static std::unique_ptr<storage::ClearDataForOriginParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::ClearDataForOriginParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::ClearDataForOriginParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::ClearDataForOriginResult> {
  static std::unique_ptr<storage::ClearDataForOriginResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::ClearDataForOriginResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::ClearDataForOriginResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::ClearDataForStorageKeyParams> {
  static std::unique_ptr<storage::ClearDataForStorageKeyParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::ClearDataForStorageKeyParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::ClearDataForStorageKeyParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::ClearDataForStorageKeyResult> {
  static std::unique_ptr<storage::ClearDataForStorageKeyResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::ClearDataForStorageKeyResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::ClearDataForStorageKeyResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::GetCookiesParams> {
  static std::unique_ptr<storage::GetCookiesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::GetCookiesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::GetCookiesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::GetCookiesResult> {
  static std::unique_ptr<storage::GetCookiesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::GetCookiesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::GetCookiesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SetCookiesParams> {
  static std::unique_ptr<storage::SetCookiesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SetCookiesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SetCookiesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SetCookiesResult> {
  static std::unique_ptr<storage::SetCookiesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SetCookiesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SetCookiesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::ClearCookiesParams> {
  static std::unique_ptr<storage::ClearCookiesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::ClearCookiesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::ClearCookiesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::ClearCookiesResult> {
  static std::unique_ptr<storage::ClearCookiesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::ClearCookiesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::ClearCookiesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::GetUsageAndQuotaParams> {
  static std::unique_ptr<storage::GetUsageAndQuotaParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::GetUsageAndQuotaParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::GetUsageAndQuotaParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::GetUsageAndQuotaResult> {
  static std::unique_ptr<storage::GetUsageAndQuotaResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::GetUsageAndQuotaResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::GetUsageAndQuotaResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::OverrideQuotaForOriginParams> {
  static std::unique_ptr<storage::OverrideQuotaForOriginParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::OverrideQuotaForOriginParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::OverrideQuotaForOriginParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::OverrideQuotaForOriginResult> {
  static std::unique_ptr<storage::OverrideQuotaForOriginResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::OverrideQuotaForOriginResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::OverrideQuotaForOriginResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::TrackCacheStorageForOriginParams> {
  static std::unique_ptr<storage::TrackCacheStorageForOriginParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::TrackCacheStorageForOriginParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::TrackCacheStorageForOriginParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::TrackCacheStorageForOriginResult> {
  static std::unique_ptr<storage::TrackCacheStorageForOriginResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::TrackCacheStorageForOriginResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::TrackCacheStorageForOriginResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::TrackCacheStorageForStorageKeyParams> {
  static std::unique_ptr<storage::TrackCacheStorageForStorageKeyParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::TrackCacheStorageForStorageKeyParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::TrackCacheStorageForStorageKeyParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::TrackCacheStorageForStorageKeyResult> {
  static std::unique_ptr<storage::TrackCacheStorageForStorageKeyResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::TrackCacheStorageForStorageKeyResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::TrackCacheStorageForStorageKeyResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::TrackIndexedDBForOriginParams> {
  static std::unique_ptr<storage::TrackIndexedDBForOriginParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::TrackIndexedDBForOriginParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::TrackIndexedDBForOriginParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::TrackIndexedDBForOriginResult> {
  static std::unique_ptr<storage::TrackIndexedDBForOriginResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::TrackIndexedDBForOriginResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::TrackIndexedDBForOriginResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::TrackIndexedDBForStorageKeyParams> {
  static std::unique_ptr<storage::TrackIndexedDBForStorageKeyParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::TrackIndexedDBForStorageKeyParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::TrackIndexedDBForStorageKeyParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::TrackIndexedDBForStorageKeyResult> {
  static std::unique_ptr<storage::TrackIndexedDBForStorageKeyResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::TrackIndexedDBForStorageKeyResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::TrackIndexedDBForStorageKeyResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::UntrackCacheStorageForOriginParams> {
  static std::unique_ptr<storage::UntrackCacheStorageForOriginParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::UntrackCacheStorageForOriginParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::UntrackCacheStorageForOriginParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::UntrackCacheStorageForOriginResult> {
  static std::unique_ptr<storage::UntrackCacheStorageForOriginResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::UntrackCacheStorageForOriginResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::UntrackCacheStorageForOriginResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::UntrackCacheStorageForStorageKeyParams> {
  static std::unique_ptr<storage::UntrackCacheStorageForStorageKeyParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::UntrackCacheStorageForStorageKeyParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::UntrackCacheStorageForStorageKeyParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::UntrackCacheStorageForStorageKeyResult> {
  static std::unique_ptr<storage::UntrackCacheStorageForStorageKeyResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::UntrackCacheStorageForStorageKeyResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::UntrackCacheStorageForStorageKeyResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::UntrackIndexedDBForOriginParams> {
  static std::unique_ptr<storage::UntrackIndexedDBForOriginParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::UntrackIndexedDBForOriginParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::UntrackIndexedDBForOriginParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::UntrackIndexedDBForOriginResult> {
  static std::unique_ptr<storage::UntrackIndexedDBForOriginResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::UntrackIndexedDBForOriginResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::UntrackIndexedDBForOriginResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::UntrackIndexedDBForStorageKeyParams> {
  static std::unique_ptr<storage::UntrackIndexedDBForStorageKeyParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::UntrackIndexedDBForStorageKeyParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::UntrackIndexedDBForStorageKeyParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::UntrackIndexedDBForStorageKeyResult> {
  static std::unique_ptr<storage::UntrackIndexedDBForStorageKeyResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::UntrackIndexedDBForStorageKeyResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::UntrackIndexedDBForStorageKeyResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::GetTrustTokensParams> {
  static std::unique_ptr<storage::GetTrustTokensParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::GetTrustTokensParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::GetTrustTokensParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::GetTrustTokensResult> {
  static std::unique_ptr<storage::GetTrustTokensResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::GetTrustTokensResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::GetTrustTokensResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::ClearTrustTokensParams> {
  static std::unique_ptr<storage::ClearTrustTokensParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::ClearTrustTokensParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::ClearTrustTokensParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::ClearTrustTokensResult> {
  static std::unique_ptr<storage::ClearTrustTokensResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::ClearTrustTokensResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::ClearTrustTokensResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::GetInterestGroupDetailsParams> {
  static std::unique_ptr<storage::GetInterestGroupDetailsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::GetInterestGroupDetailsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::GetInterestGroupDetailsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::GetInterestGroupDetailsResult> {
  static std::unique_ptr<storage::GetInterestGroupDetailsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::GetInterestGroupDetailsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::GetInterestGroupDetailsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SetInterestGroupTrackingParams> {
  static std::unique_ptr<storage::SetInterestGroupTrackingParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SetInterestGroupTrackingParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SetInterestGroupTrackingParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SetInterestGroupTrackingResult> {
  static std::unique_ptr<storage::SetInterestGroupTrackingResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SetInterestGroupTrackingResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SetInterestGroupTrackingResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SetInterestGroupAuctionTrackingParams> {
  static std::unique_ptr<storage::SetInterestGroupAuctionTrackingParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SetInterestGroupAuctionTrackingParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SetInterestGroupAuctionTrackingParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SetInterestGroupAuctionTrackingResult> {
  static std::unique_ptr<storage::SetInterestGroupAuctionTrackingResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SetInterestGroupAuctionTrackingResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SetInterestGroupAuctionTrackingResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::GetSharedStorageMetadataParams> {
  static std::unique_ptr<storage::GetSharedStorageMetadataParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::GetSharedStorageMetadataParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::GetSharedStorageMetadataParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::GetSharedStorageMetadataResult> {
  static std::unique_ptr<storage::GetSharedStorageMetadataResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::GetSharedStorageMetadataResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::GetSharedStorageMetadataResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::GetSharedStorageEntriesParams> {
  static std::unique_ptr<storage::GetSharedStorageEntriesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::GetSharedStorageEntriesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::GetSharedStorageEntriesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::GetSharedStorageEntriesResult> {
  static std::unique_ptr<storage::GetSharedStorageEntriesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::GetSharedStorageEntriesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::GetSharedStorageEntriesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SetSharedStorageEntryParams> {
  static std::unique_ptr<storage::SetSharedStorageEntryParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SetSharedStorageEntryParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SetSharedStorageEntryParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SetSharedStorageEntryResult> {
  static std::unique_ptr<storage::SetSharedStorageEntryResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SetSharedStorageEntryResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SetSharedStorageEntryResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::DeleteSharedStorageEntryParams> {
  static std::unique_ptr<storage::DeleteSharedStorageEntryParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::DeleteSharedStorageEntryParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::DeleteSharedStorageEntryParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::DeleteSharedStorageEntryResult> {
  static std::unique_ptr<storage::DeleteSharedStorageEntryResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::DeleteSharedStorageEntryResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::DeleteSharedStorageEntryResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::ClearSharedStorageEntriesParams> {
  static std::unique_ptr<storage::ClearSharedStorageEntriesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::ClearSharedStorageEntriesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::ClearSharedStorageEntriesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::ClearSharedStorageEntriesResult> {
  static std::unique_ptr<storage::ClearSharedStorageEntriesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::ClearSharedStorageEntriesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::ClearSharedStorageEntriesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::ResetSharedStorageBudgetParams> {
  static std::unique_ptr<storage::ResetSharedStorageBudgetParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::ResetSharedStorageBudgetParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::ResetSharedStorageBudgetParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::ResetSharedStorageBudgetResult> {
  static std::unique_ptr<storage::ResetSharedStorageBudgetResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::ResetSharedStorageBudgetResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::ResetSharedStorageBudgetResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SetSharedStorageTrackingParams> {
  static std::unique_ptr<storage::SetSharedStorageTrackingParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SetSharedStorageTrackingParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SetSharedStorageTrackingParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SetSharedStorageTrackingResult> {
  static std::unique_ptr<storage::SetSharedStorageTrackingResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SetSharedStorageTrackingResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SetSharedStorageTrackingResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SetStorageBucketTrackingParams> {
  static std::unique_ptr<storage::SetStorageBucketTrackingParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SetStorageBucketTrackingParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SetStorageBucketTrackingParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SetStorageBucketTrackingResult> {
  static std::unique_ptr<storage::SetStorageBucketTrackingResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SetStorageBucketTrackingResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SetStorageBucketTrackingResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::DeleteStorageBucketParams> {
  static std::unique_ptr<storage::DeleteStorageBucketParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::DeleteStorageBucketParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::DeleteStorageBucketParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::DeleteStorageBucketResult> {
  static std::unique_ptr<storage::DeleteStorageBucketResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::DeleteStorageBucketResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::DeleteStorageBucketResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::RunBounceTrackingMitigationsParams> {
  static std::unique_ptr<storage::RunBounceTrackingMitigationsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::RunBounceTrackingMitigationsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::RunBounceTrackingMitigationsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::RunBounceTrackingMitigationsResult> {
  static std::unique_ptr<storage::RunBounceTrackingMitigationsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::RunBounceTrackingMitigationsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::RunBounceTrackingMitigationsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SetAttributionReportingLocalTestingModeParams> {
  static std::unique_ptr<storage::SetAttributionReportingLocalTestingModeParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SetAttributionReportingLocalTestingModeParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SetAttributionReportingLocalTestingModeParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SetAttributionReportingLocalTestingModeResult> {
  static std::unique_ptr<storage::SetAttributionReportingLocalTestingModeResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SetAttributionReportingLocalTestingModeResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SetAttributionReportingLocalTestingModeResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SetAttributionReportingTrackingParams> {
  static std::unique_ptr<storage::SetAttributionReportingTrackingParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SetAttributionReportingTrackingParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SetAttributionReportingTrackingParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SetAttributionReportingTrackingResult> {
  static std::unique_ptr<storage::SetAttributionReportingTrackingResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SetAttributionReportingTrackingResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SetAttributionReportingTrackingResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::CacheStorageContentUpdatedParams> {
  static std::unique_ptr<storage::CacheStorageContentUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::CacheStorageContentUpdatedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::CacheStorageContentUpdatedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::CacheStorageListUpdatedParams> {
  static std::unique_ptr<storage::CacheStorageListUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::CacheStorageListUpdatedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::CacheStorageListUpdatedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::IndexedDBContentUpdatedParams> {
  static std::unique_ptr<storage::IndexedDBContentUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::IndexedDBContentUpdatedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::IndexedDBContentUpdatedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::IndexedDBListUpdatedParams> {
  static std::unique_ptr<storage::IndexedDBListUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::IndexedDBListUpdatedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::IndexedDBListUpdatedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::InterestGroupAccessedParams> {
  static std::unique_ptr<storage::InterestGroupAccessedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::InterestGroupAccessedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::InterestGroupAccessedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::InterestGroupAuctionEventOccurredParams> {
  static std::unique_ptr<storage::InterestGroupAuctionEventOccurredParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::InterestGroupAuctionEventOccurredParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::InterestGroupAuctionEventOccurredParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::InterestGroupAuctionNetworkRequestCreatedParams> {
  static std::unique_ptr<storage::InterestGroupAuctionNetworkRequestCreatedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::InterestGroupAuctionNetworkRequestCreatedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::InterestGroupAuctionNetworkRequestCreatedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::SharedStorageAccessedParams> {
  static std::unique_ptr<storage::SharedStorageAccessedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::SharedStorageAccessedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::SharedStorageAccessedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::StorageBucketCreatedOrUpdatedParams> {
  static std::unique_ptr<storage::StorageBucketCreatedOrUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::StorageBucketCreatedOrUpdatedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::StorageBucketCreatedOrUpdatedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::StorageBucketDeletedParams> {
  static std::unique_ptr<storage::StorageBucketDeletedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::StorageBucketDeletedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::StorageBucketDeletedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::AttributionReportingSourceRegisteredParams> {
  static std::unique_ptr<storage::AttributionReportingSourceRegisteredParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::AttributionReportingSourceRegisteredParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingSourceRegisteredParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<storage::AttributionReportingTriggerRegisteredParams> {
  static std::unique_ptr<storage::AttributionReportingTriggerRegisteredParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return storage::AttributionReportingTriggerRegisteredParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const storage::AttributionReportingTriggerRegisteredParams& value) {
  return value.Serialize();
}


}  // namespace internal
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_STORAGE_H_
