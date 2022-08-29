// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Copied and modified from
// https://chromium.googlesource.com/chromium/src/+/a3f9d4fac81fc86065d867ab08fa4912ddf662c7/headless/lib/browser/devtools_api/domain_cc.template
// Modifications include namespace and path.

#include "components/autofill_assistant/browser/devtools/devtools/domains/storage.h"

#include "base/bind.h"
#include "components/autofill_assistant/browser/devtools/error_reporter.h"

namespace autofill_assistant {

namespace storage {

ExperimentalDomain* Domain::GetExperimental() {
  return static_cast<ExperimentalDomain*>(this);
}

void Domain::AddObserver(Observer* observer) {
  RegisterEventHandlersIfNeeded();
  observers_.AddObserver(observer);
}

void Domain::RemoveObserver(Observer* observer) {
  observers_.RemoveObserver(observer);
}

void Domain::RegisterEventHandlersIfNeeded() {
  if (event_handlers_registered_)
    return;
  event_handlers_registered_ = true;
  dispatcher_->RegisterEventHandler(
      "Storage.cacheStorageContentUpdated",
      base::BindRepeating(&Domain::DispatchCacheStorageContentUpdatedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Storage.cacheStorageListUpdated",
      base::BindRepeating(&Domain::DispatchCacheStorageListUpdatedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Storage.indexedDBContentUpdated",
      base::BindRepeating(&Domain::DispatchIndexedDBContentUpdatedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Storage.indexedDBListUpdated",
      base::BindRepeating(&Domain::DispatchIndexedDBListUpdatedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Storage.interestGroupAccessed",
      base::BindRepeating(&Domain::DispatchInterestGroupAccessedEvent,
                          base::Unretained(this)));
}

void ExperimentalDomain::GetStorageKeyForFrame(
    std::unique_ptr<GetStorageKeyForFrameParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetStorageKeyForFrameResult>)> callback) {
  dispatcher_->SendMessage("Storage.getStorageKeyForFrame", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetStorageKeyForFrameResponse, std::move(callback)));
}
void ExperimentalDomain::ClearDataForOrigin(
    std::unique_ptr<ClearDataForOriginParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearDataForOriginResult>)> callback) {
  dispatcher_->SendMessage("Storage.clearDataForOrigin", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleClearDataForOriginResponse, std::move(callback)));
}
void ExperimentalDomain::ClearDataForStorageKey(
    std::unique_ptr<ClearDataForStorageKeyParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearDataForStorageKeyResult>)> callback) {
  dispatcher_->SendMessage("Storage.clearDataForStorageKey", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleClearDataForStorageKeyResponse, std::move(callback)));
}
void ExperimentalDomain::GetCookies(
    std::unique_ptr<GetCookiesParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetCookiesResult>)> callback) {
  dispatcher_->SendMessage("Storage.getCookies", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetCookiesResponse, std::move(callback)));
}
void ExperimentalDomain::SetCookies(
    std::unique_ptr<SetCookiesParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCookiesResult>)> callback) {
  dispatcher_->SendMessage("Storage.setCookies", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleSetCookiesResponse, std::move(callback)));
}
void ExperimentalDomain::ClearCookies(
    std::unique_ptr<ClearCookiesParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearCookiesResult>)> callback) {
  dispatcher_->SendMessage("Storage.clearCookies", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleClearCookiesResponse, std::move(callback)));
}
void ExperimentalDomain::GetUsageAndQuota(
    std::unique_ptr<GetUsageAndQuotaParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetUsageAndQuotaResult>)> callback) {
  dispatcher_->SendMessage("Storage.getUsageAndQuota", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetUsageAndQuotaResponse, std::move(callback)));
}
void ExperimentalDomain::OverrideQuotaForOrigin(
    std::unique_ptr<OverrideQuotaForOriginParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<OverrideQuotaForOriginResult>)> callback) {
  dispatcher_->SendMessage("Storage.overrideQuotaForOrigin", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleOverrideQuotaForOriginResponse, std::move(callback)));
}
void ExperimentalDomain::TrackCacheStorageForOrigin(
    std::unique_ptr<TrackCacheStorageForOriginParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TrackCacheStorageForOriginResult>)> callback) {
  dispatcher_->SendMessage("Storage.trackCacheStorageForOrigin", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleTrackCacheStorageForOriginResponse, std::move(callback)));
}
void ExperimentalDomain::TrackIndexedDBForOrigin(
    std::unique_ptr<TrackIndexedDBForOriginParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TrackIndexedDBForOriginResult>)> callback) {
  dispatcher_->SendMessage("Storage.trackIndexedDBForOrigin", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleTrackIndexedDBForOriginResponse, std::move(callback)));
}
void ExperimentalDomain::TrackIndexedDBForStorageKey(
    std::unique_ptr<TrackIndexedDBForStorageKeyParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TrackIndexedDBForStorageKeyResult>)> callback) {
  dispatcher_->SendMessage("Storage.trackIndexedDBForStorageKey", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleTrackIndexedDBForStorageKeyResponse, std::move(callback)));
}
void ExperimentalDomain::UntrackCacheStorageForOrigin(
    std::unique_ptr<UntrackCacheStorageForOriginParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<UntrackCacheStorageForOriginResult>)> callback) {
  dispatcher_->SendMessage("Storage.untrackCacheStorageForOrigin", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleUntrackCacheStorageForOriginResponse, std::move(callback)));
}
void ExperimentalDomain::UntrackIndexedDBForOrigin(
    std::unique_ptr<UntrackIndexedDBForOriginParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<UntrackIndexedDBForOriginResult>)> callback) {
  dispatcher_->SendMessage("Storage.untrackIndexedDBForOrigin", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleUntrackIndexedDBForOriginResponse, std::move(callback)));
}
void ExperimentalDomain::UntrackIndexedDBForStorageKey(
    std::unique_ptr<UntrackIndexedDBForStorageKeyParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<UntrackIndexedDBForStorageKeyResult>)> callback) {
  dispatcher_->SendMessage("Storage.untrackIndexedDBForStorageKey", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleUntrackIndexedDBForStorageKeyResponse, std::move(callback)));
}
void ExperimentalDomain::GetTrustTokens(
    std::unique_ptr<GetTrustTokensParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetTrustTokensResult>)> callback) {
  dispatcher_->SendMessage("Storage.getTrustTokens", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetTrustTokensResponse, std::move(callback)));
}
void ExperimentalDomain::ClearTrustTokens(
    std::unique_ptr<ClearTrustTokensParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearTrustTokensResult>)> callback) {
  dispatcher_->SendMessage("Storage.clearTrustTokens", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleClearTrustTokensResponse, std::move(callback)));
}
void ExperimentalDomain::GetInterestGroupDetails(
    std::unique_ptr<GetInterestGroupDetailsParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetInterestGroupDetailsResult>)> callback) {
  dispatcher_->SendMessage("Storage.getInterestGroupDetails", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetInterestGroupDetailsResponse, std::move(callback)));
}
void ExperimentalDomain::SetInterestGroupTracking(
    std::unique_ptr<SetInterestGroupTrackingParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetInterestGroupTrackingResult>)> callback) {
  dispatcher_->SendMessage("Storage.setInterestGroupTracking", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleSetInterestGroupTrackingResponse, std::move(callback)));
}


// static
void Domain::HandleGetStorageKeyForFrameResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetStorageKeyForFrameResult>)> callback,
    const MessageDispatcher::ReplyStatus& reply_status,
    const base::Value& response) {
  if (callback.is_null())
    return;

  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(reply_status, nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetStorageKeyForFrameResult> result = GetStorageKeyForFrameResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleClearDataForOriginResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearDataForOriginResult>)> callback,
    const MessageDispatcher::ReplyStatus& reply_status,
    const base::Value& response) {
  if (callback.is_null())
    return;

  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(reply_status, nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<ClearDataForOriginResult> result = ClearDataForOriginResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleClearDataForStorageKeyResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearDataForStorageKeyResult>)> callback,
    const MessageDispatcher::ReplyStatus& reply_status,
    const base::Value& response) {
  if (callback.is_null())
    return;

  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(reply_status, nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<ClearDataForStorageKeyResult> result = ClearDataForStorageKeyResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleGetCookiesResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetCookiesResult>)> callback,
    const MessageDispatcher::ReplyStatus& reply_status,
    const base::Value& response) {
  if (callback.is_null())
    return;

  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(reply_status, nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetCookiesResult> result = GetCookiesResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleSetCookiesResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCookiesResult>)> callback,
    const MessageDispatcher::ReplyStatus& reply_status,
    const base::Value& response) {
  if (callback.is_null())
    return;

  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(reply_status, nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<SetCookiesResult> result = SetCookiesResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleClearCookiesResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearCookiesResult>)> callback,
    const MessageDispatcher::ReplyStatus& reply_status,
    const base::Value& response) {
  if (callback.is_null())
    return;

  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(reply_status, nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<ClearCookiesResult> result = ClearCookiesResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleGetUsageAndQuotaResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetUsageAndQuotaResult>)> callback,
    const MessageDispatcher::ReplyStatus& reply_status,
    const base::Value& response) {
  if (callback.is_null())
    return;

  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(reply_status, nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetUsageAndQuotaResult> result = GetUsageAndQuotaResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleOverrideQuotaForOriginResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<OverrideQuotaForOriginResult>)> callback,
    const MessageDispatcher::ReplyStatus& reply_status,
    const base::Value& response) {
  if (callback.is_null())
    return;

  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(reply_status, nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<OverrideQuotaForOriginResult> result = OverrideQuotaForOriginResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleTrackCacheStorageForOriginResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TrackCacheStorageForOriginResult>)> callback,
    const MessageDispatcher::ReplyStatus& reply_status,
    const base::Value& response) {
  if (callback.is_null())
    return;

  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(reply_status, nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<TrackCacheStorageForOriginResult> result = TrackCacheStorageForOriginResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleTrackIndexedDBForOriginResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TrackIndexedDBForOriginResult>)> callback,
    const MessageDispatcher::ReplyStatus& reply_status,
    const base::Value& response) {
  if (callback.is_null())
    return;

  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(reply_status, nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<TrackIndexedDBForOriginResult> result = TrackIndexedDBForOriginResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleTrackIndexedDBForStorageKeyResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TrackIndexedDBForStorageKeyResult>)> callback,
    const MessageDispatcher::ReplyStatus& reply_status,
    const base::Value& response) {
  if (callback.is_null())
    return;

  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(reply_status, nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<TrackIndexedDBForStorageKeyResult> result = TrackIndexedDBForStorageKeyResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleUntrackCacheStorageForOriginResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<UntrackCacheStorageForOriginResult>)> callback,
    const MessageDispatcher::ReplyStatus& reply_status,
    const base::Value& response) {
  if (callback.is_null())
    return;

  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(reply_status, nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<UntrackCacheStorageForOriginResult> result = UntrackCacheStorageForOriginResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleUntrackIndexedDBForOriginResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<UntrackIndexedDBForOriginResult>)> callback,
    const MessageDispatcher::ReplyStatus& reply_status,
    const base::Value& response) {
  if (callback.is_null())
    return;

  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(reply_status, nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<UntrackIndexedDBForOriginResult> result = UntrackIndexedDBForOriginResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleUntrackIndexedDBForStorageKeyResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<UntrackIndexedDBForStorageKeyResult>)> callback,
    const MessageDispatcher::ReplyStatus& reply_status,
    const base::Value& response) {
  if (callback.is_null())
    return;

  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(reply_status, nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<UntrackIndexedDBForStorageKeyResult> result = UntrackIndexedDBForStorageKeyResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleGetTrustTokensResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetTrustTokensResult>)> callback,
    const MessageDispatcher::ReplyStatus& reply_status,
    const base::Value& response) {
  if (callback.is_null())
    return;

  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(reply_status, nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetTrustTokensResult> result = GetTrustTokensResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleClearTrustTokensResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearTrustTokensResult>)> callback,
    const MessageDispatcher::ReplyStatus& reply_status,
    const base::Value& response) {
  if (callback.is_null())
    return;

  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(reply_status, nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<ClearTrustTokensResult> result = ClearTrustTokensResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleGetInterestGroupDetailsResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetInterestGroupDetailsResult>)> callback,
    const MessageDispatcher::ReplyStatus& reply_status,
    const base::Value& response) {
  if (callback.is_null())
    return;

  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(reply_status, nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetInterestGroupDetailsResult> result = GetInterestGroupDetailsResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleSetInterestGroupTrackingResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetInterestGroupTrackingResult>)> callback,
    const MessageDispatcher::ReplyStatus& reply_status,
    const base::Value& response) {
  if (callback.is_null())
    return;

  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(reply_status, nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<SetInterestGroupTrackingResult> result = SetInterestGroupTrackingResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

void Domain::DispatchCacheStorageContentUpdatedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<CacheStorageContentUpdatedParams> parsed_params(CacheStorageContentUpdatedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnCacheStorageContentUpdated(*parsed_params);
  }
}

void Domain::DispatchCacheStorageListUpdatedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<CacheStorageListUpdatedParams> parsed_params(CacheStorageListUpdatedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnCacheStorageListUpdated(*parsed_params);
  }
}

void Domain::DispatchIndexedDBContentUpdatedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<IndexedDBContentUpdatedParams> parsed_params(IndexedDBContentUpdatedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnIndexedDBContentUpdated(*parsed_params);
  }
}

void Domain::DispatchIndexedDBListUpdatedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<IndexedDBListUpdatedParams> parsed_params(IndexedDBListUpdatedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnIndexedDBListUpdated(*parsed_params);
  }
}

void Domain::DispatchInterestGroupAccessedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<InterestGroupAccessedParams> parsed_params(InterestGroupAccessedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnInterestGroupAccessed(*parsed_params);
  }
}

Domain::Domain(MessageDispatcher* dispatcher)
    : dispatcher_(dispatcher) {
}

Domain::~Domain() {}

ExperimentalDomain::ExperimentalDomain(MessageDispatcher* dispatcher)
    : Domain(dispatcher) {}

ExperimentalDomain::~ExperimentalDomain() {}

void ExperimentalDomain::AddObserver(ExperimentalObserver* observer) {
  RegisterEventHandlersIfNeeded();
  observers_.AddObserver(observer);
}

void ExperimentalDomain::RemoveObserver(ExperimentalObserver* observer) {
  observers_.RemoveObserver(observer);
}

}  // namespace storage

} // namespace autofill_assistant
