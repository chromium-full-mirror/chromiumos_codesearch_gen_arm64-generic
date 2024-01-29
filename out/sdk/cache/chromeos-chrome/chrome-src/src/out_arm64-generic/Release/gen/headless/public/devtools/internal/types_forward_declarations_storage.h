// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_STORAGE_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_STORAGE_H_

#include "base/values.h"

namespace headless {

namespace storage {
class UsageForType;
class TrustTokens;
class InterestGroupAd;
class InterestGroupDetails;
class SharedStorageEntry;
class SharedStorageMetadata;
class SharedStorageReportingMetadata;
class SharedStorageUrlWithMetadata;
class SharedStorageAccessParams;
class StorageBucket;
class StorageBucketInfo;
class AttributionReportingFilterDataEntry;
class AttributionReportingFilterConfig;
class AttributionReportingFilterPair;
class AttributionReportingAggregationKeysEntry;
class AttributionReportingEventReportWindows;
class AttributionReportingTriggerSpec;
class AttributionReportingSourceRegistration;
class AttributionReportingAggregatableValueEntry;
class AttributionReportingEventTriggerData;
class AttributionReportingAggregatableTriggerData;
class AttributionReportingAggregatableDedupKey;
class AttributionReportingTriggerRegistration;
class GetStorageKeyForFrameParams;
class GetStorageKeyForFrameResult;
class ClearDataForOriginParams;
class ClearDataForOriginResult;
class ClearDataForStorageKeyParams;
class ClearDataForStorageKeyResult;
class GetCookiesParams;
class GetCookiesResult;
class SetCookiesParams;
class SetCookiesResult;
class ClearCookiesParams;
class ClearCookiesResult;
class GetUsageAndQuotaParams;
class GetUsageAndQuotaResult;
class OverrideQuotaForOriginParams;
class OverrideQuotaForOriginResult;
class TrackCacheStorageForOriginParams;
class TrackCacheStorageForOriginResult;
class TrackCacheStorageForStorageKeyParams;
class TrackCacheStorageForStorageKeyResult;
class TrackIndexedDBForOriginParams;
class TrackIndexedDBForOriginResult;
class TrackIndexedDBForStorageKeyParams;
class TrackIndexedDBForStorageKeyResult;
class UntrackCacheStorageForOriginParams;
class UntrackCacheStorageForOriginResult;
class UntrackCacheStorageForStorageKeyParams;
class UntrackCacheStorageForStorageKeyResult;
class UntrackIndexedDBForOriginParams;
class UntrackIndexedDBForOriginResult;
class UntrackIndexedDBForStorageKeyParams;
class UntrackIndexedDBForStorageKeyResult;
class GetTrustTokensParams;
class GetTrustTokensResult;
class ClearTrustTokensParams;
class ClearTrustTokensResult;
class GetInterestGroupDetailsParams;
class GetInterestGroupDetailsResult;
class SetInterestGroupTrackingParams;
class SetInterestGroupTrackingResult;
class SetInterestGroupAuctionTrackingParams;
class SetInterestGroupAuctionTrackingResult;
class GetSharedStorageMetadataParams;
class GetSharedStorageMetadataResult;
class GetSharedStorageEntriesParams;
class GetSharedStorageEntriesResult;
class SetSharedStorageEntryParams;
class SetSharedStorageEntryResult;
class DeleteSharedStorageEntryParams;
class DeleteSharedStorageEntryResult;
class ClearSharedStorageEntriesParams;
class ClearSharedStorageEntriesResult;
class ResetSharedStorageBudgetParams;
class ResetSharedStorageBudgetResult;
class SetSharedStorageTrackingParams;
class SetSharedStorageTrackingResult;
class SetStorageBucketTrackingParams;
class SetStorageBucketTrackingResult;
class DeleteStorageBucketParams;
class DeleteStorageBucketResult;
class RunBounceTrackingMitigationsParams;
class RunBounceTrackingMitigationsResult;
class SetAttributionReportingLocalTestingModeParams;
class SetAttributionReportingLocalTestingModeResult;
class SetAttributionReportingTrackingParams;
class SetAttributionReportingTrackingResult;
class CacheStorageContentUpdatedParams;
class CacheStorageListUpdatedParams;
class IndexedDBContentUpdatedParams;
class IndexedDBListUpdatedParams;
class InterestGroupAccessedParams;
class InterestGroupAuctionEventOccurredParams;
class InterestGroupAuctionNetworkRequestCreatedParams;
class SharedStorageAccessedParams;
class StorageBucketCreatedOrUpdatedParams;
class StorageBucketDeletedParams;
class AttributionReportingSourceRegisteredParams;
class AttributionReportingTriggerRegisteredParams;

enum class StorageType {
  APPCACHE,
  COOKIES,
  FILE_SYSTEMS,
  INDEXEDDB,
  LOCAL_STORAGE,
  SHADER_CACHE,
  WEBSQL,
  SERVICE_WORKERS,
  CACHE_STORAGE,
  INTEREST_GROUPS,
  SHARED_STORAGE,
  STORAGE_BUCKETS,
  ALL,
  OTHER
};

enum class InterestGroupAccessType {
  JOIN,
  LEAVE,
  UPDATE,
  LOADED,
  BID,
  WIN,
  ADDITIONAL_BID,
  ADDITIONAL_BID_WIN,
  TOP_LEVEL_BID,
  TOP_LEVEL_ADDITIONAL_BID,
  CLEAR
};

enum class InterestGroupAuctionEventType {
  STARTED,
  CONFIG_RESOLVED
};

enum class InterestGroupAuctionFetchType {
  BIDDER_JS,
  BIDDER_WASM,
  SELLER_JS,
  BIDDER_TRUSTED_SIGNALS,
  SELLER_TRUSTED_SIGNALS
};

enum class SharedStorageAccessType {
  DOCUMENT_ADD_MODULE,
  DOCUMENT_SELECTURL,
  DOCUMENT_RUN,
  DOCUMENT_SET,
  DOCUMENT_APPEND,
  DOCUMENT_DELETE,
  DOCUMENT_CLEAR,
  WORKLET_SET,
  WORKLET_APPEND,
  WORKLET_DELETE,
  WORKLET_CLEAR,
  WORKLET_GET,
  WORKLET_KEYS,
  WORKLET_ENTRIES,
  WORKLET_LENGTH,
  WORKLET_REMAINING_BUDGET
};

enum class StorageBucketsDurability {
  RELAXED,
  STRICT
};

enum class AttributionReportingSourceType {
  NAVIGATION,
  EVENT
};

enum class AttributionReportingTriggerDataMatching {
  EXACT,
  MODULUS
};

enum class AttributionReportingSourceRegistrationResult {
  SUCCESS,
  INTERNAL_ERROR,
  INSUFFICIENT_SOURCE_CAPACITY,
  INSUFFICIENT_UNIQUE_DESTINATION_CAPACITY,
  EXCESSIVE_REPORTING_ORIGINS,
  PROHIBITED_BY_BROWSER_POLICY,
  SUCCESS_NOISED,
  DESTINATION_REPORTING_LIMIT_REACHED,
  DESTINATION_GLOBAL_LIMIT_REACHED,
  DESTINATION_BOTH_LIMITS_REACHED,
  REPORTING_ORIGINS_PER_SITE_LIMIT_REACHED,
  EXCEEDS_MAX_CHANNEL_CAPACITY
};

enum class AttributionReportingSourceRegistrationTimeConfig {
  INCLUDE,
  EXCLUDE
};

enum class AttributionReportingEventLevelResult {
  SUCCESS,
  SUCCESS_DROPPED_LOWER_PRIORITY,
  INTERNAL_ERROR,
  NO_CAPACITY_FOR_ATTRIBUTION_DESTINATION,
  NO_MATCHING_SOURCES,
  DEDUPLICATED,
  EXCESSIVE_ATTRIBUTIONS,
  PRIORITY_TOO_LOW,
  NEVER_ATTRIBUTED_SOURCE,
  EXCESSIVE_REPORTING_ORIGINS,
  NO_MATCHING_SOURCE_FILTER_DATA,
  PROHIBITED_BY_BROWSER_POLICY,
  NO_MATCHING_CONFIGURATIONS,
  EXCESSIVE_REPORTS,
  FALSELY_ATTRIBUTED_SOURCE,
  REPORT_WINDOW_PASSED,
  NOT_REGISTERED,
  REPORT_WINDOW_NOT_STARTED,
  NO_MATCHING_TRIGGER_DATA
};

enum class AttributionReportingAggregatableResult {
  SUCCESS,
  INTERNAL_ERROR,
  NO_CAPACITY_FOR_ATTRIBUTION_DESTINATION,
  NO_MATCHING_SOURCES,
  EXCESSIVE_ATTRIBUTIONS,
  EXCESSIVE_REPORTING_ORIGINS,
  NO_HISTOGRAMS,
  INSUFFICIENT_BUDGET,
  NO_MATCHING_SOURCE_FILTER_DATA,
  NOT_REGISTERED,
  PROHIBITED_BY_BROWSER_POLICY,
  DEDUPLICATED,
  REPORT_WINDOW_PASSED,
  EXCESSIVE_REPORTS
};

}  // namespace storage

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_STORAGE_H_
