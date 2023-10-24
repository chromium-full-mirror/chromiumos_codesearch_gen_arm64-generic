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
class AttributionReportingAggregationKeysEntry;
class AttributionReportingEventReportWindows;
class AttributionReportingSourceRegistration;
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
class SharedStorageAccessedParams;
class StorageBucketCreatedOrUpdatedParams;
class StorageBucketDeletedParams;
class AttributionReportingSourceRegisteredParams;

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
  CLEAR
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

}  // namespace storage

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_STORAGE_H_
