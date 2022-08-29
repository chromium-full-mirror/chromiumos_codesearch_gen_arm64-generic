// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Copied and modified from
// https://chromium.googlesource.com/chromium/src/+/a3f9d4fac81fc86065d867ab08fa4912ddf662c7/headless/lib/browser/devtools_api/domain_h.template
// Modifications include namespace and path.

#ifndef COMPONENTS_AUTOFILL_ASSISTANT_BROWSER_DEVTOOLS_DEVTOOLS_DOMAINS_STORAGE_H_
#define COMPONENTS_AUTOFILL_ASSISTANT_BROWSER_DEVTOOLS_DEVTOOLS_DOMAINS_STORAGE_H_

#include "base/callback.h"
#include "base/observer_list.h"
#include "base/values.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_browser.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_dom.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_debugger.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_emulation.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_io.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_network.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_page.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_runtime.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_security.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_storage.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_target.h"
#include "components/autofill_assistant/browser/devtools/message_dispatcher.h"


namespace autofill_assistant {
namespace storage {
class ExperimentalDomain;
class ExperimentalObserver;

class ExperimentalObserver {
 public:
  virtual ~ExperimentalObserver() {}
  // A cache's contents have been modified.
  virtual void OnCacheStorageContentUpdated(const CacheStorageContentUpdatedParams& params) {}
  // A cache has been added/deleted.
  virtual void OnCacheStorageListUpdated(const CacheStorageListUpdatedParams& params) {}
  // The origin's IndexedDB object store has been modified.
  virtual void OnIndexedDBContentUpdated(const IndexedDBContentUpdatedParams& params) {}
  // The origin's IndexedDB database list has been modified.
  virtual void OnIndexedDBListUpdated(const IndexedDBListUpdatedParams& params) {}
  // One of the interest groups was accessed by the associated page.
  virtual void OnInterestGroupAccessed(const InterestGroupAccessedParams& params) {}
};

class Observer : public ExperimentalObserver {
 public:
  virtual ~Observer() {}
  // Experimental: A cache's contents have been modified.
  virtual void OnCacheStorageContentUpdated(const CacheStorageContentUpdatedParams& params) final {}
  // Experimental: A cache has been added/deleted.
  virtual void OnCacheStorageListUpdated(const CacheStorageListUpdatedParams& params) final {}
  // Experimental: The origin's IndexedDB object store has been modified.
  virtual void OnIndexedDBContentUpdated(const IndexedDBContentUpdatedParams& params) final {}
  // Experimental: The origin's IndexedDB database list has been modified.
  virtual void OnIndexedDBListUpdated(const IndexedDBListUpdatedParams& params) final {}
  // Experimental: One of the interest groups was accessed by the associated page.
  virtual void OnInterestGroupAccessed(const InterestGroupAccessedParams& params) final {}
};

class Domain {
 public:
  Domain(const Domain&) = delete;
  Domain& operator=(const Domain&) = delete;

  // Add or remove an observer. |observer| must be removed before being
  // destroyed.
  void AddObserver(Observer* observer);
  void RemoveObserver(Observer* observer);

  // Return the experimental interface for this domain. Note that experimental
  // commands may be changed or removed at any time.
  ExperimentalDomain* GetExperimental();

 protected:
  Domain(MessageDispatcher* dispatcher);
  ~Domain();

  static void HandleGetStorageKeyForFrameResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetStorageKeyForFrameResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleClearDataForOriginResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearDataForOriginResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleClearDataForStorageKeyResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearDataForStorageKeyResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleGetCookiesResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetCookiesResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleSetCookiesResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCookiesResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleClearCookiesResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearCookiesResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleGetUsageAndQuotaResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetUsageAndQuotaResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleOverrideQuotaForOriginResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<OverrideQuotaForOriginResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleTrackCacheStorageForOriginResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TrackCacheStorageForOriginResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleTrackIndexedDBForOriginResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TrackIndexedDBForOriginResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleTrackIndexedDBForStorageKeyResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TrackIndexedDBForStorageKeyResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleUntrackCacheStorageForOriginResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<UntrackCacheStorageForOriginResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleUntrackIndexedDBForOriginResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<UntrackIndexedDBForOriginResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleUntrackIndexedDBForStorageKeyResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<UntrackIndexedDBForStorageKeyResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleGetTrustTokensResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetTrustTokensResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleClearTrustTokensResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearTrustTokensResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleGetInterestGroupDetailsResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetInterestGroupDetailsResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleSetInterestGroupTrackingResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetInterestGroupTrackingResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);

  void DispatchCacheStorageContentUpdatedEvent(const base::Value& params);
  void DispatchCacheStorageListUpdatedEvent(const base::Value& params);
  void DispatchIndexedDBContentUpdatedEvent(const base::Value& params);
  void DispatchIndexedDBListUpdatedEvent(const base::Value& params);
  void DispatchInterestGroupAccessedEvent(const base::Value& params);

  MessageDispatcher* dispatcher_;  // Not owned.
  base::ObserverList<ExperimentalObserver>::Unchecked observers_;

 protected:
  void RegisterEventHandlersIfNeeded();

 private:
  bool event_handlers_registered_ = false;

};

class ExperimentalDomain : public Domain {
 public:
  ExperimentalDomain(MessageDispatcher* dispatcher);

  ExperimentalDomain(const ExperimentalDomain&) = delete;
  ExperimentalDomain& operator=(const ExperimentalDomain&) = delete;

  ~ExperimentalDomain();

  // Add or remove an observer. |observer| must be removed before being
  // destroyed.
  void AddObserver(ExperimentalObserver* observer);
  void RemoveObserver(ExperimentalObserver* observer);

  // Returns a storage key given a frame id.
  void GetStorageKeyForFrame(std::unique_ptr<GetStorageKeyForFrameParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetStorageKeyForFrameResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetStorageKeyForFrameResult>)>());

  // Clears storage for origin.
  void ClearDataForOrigin(std::unique_ptr<ClearDataForOriginParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearDataForOriginResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearDataForOriginResult>)>());

  // Clears storage for storage key.
  void ClearDataForStorageKey(std::unique_ptr<ClearDataForStorageKeyParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearDataForStorageKeyResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearDataForStorageKeyResult>)>());

  // Returns all browser cookies.
  void GetCookies(std::unique_ptr<GetCookiesParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetCookiesResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetCookiesResult>)>());

  // Sets given cookies.
  void SetCookies(std::unique_ptr<SetCookiesParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCookiesResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCookiesResult>)>());

  // Clears cookies.
  void ClearCookies(std::unique_ptr<ClearCookiesParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearCookiesResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearCookiesResult>)>());

  // Returns usage and quota in bytes.
  void GetUsageAndQuota(std::unique_ptr<GetUsageAndQuotaParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetUsageAndQuotaResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetUsageAndQuotaResult>)>());

  // Override quota for the specified origin
  void OverrideQuotaForOrigin(std::unique_ptr<OverrideQuotaForOriginParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<OverrideQuotaForOriginResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<OverrideQuotaForOriginResult>)>());

  // Registers origin to be notified when an update occurs to its cache storage list.
  void TrackCacheStorageForOrigin(std::unique_ptr<TrackCacheStorageForOriginParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TrackCacheStorageForOriginResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TrackCacheStorageForOriginResult>)>());

  // Registers origin to be notified when an update occurs to its IndexedDB.
  void TrackIndexedDBForOrigin(std::unique_ptr<TrackIndexedDBForOriginParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TrackIndexedDBForOriginResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TrackIndexedDBForOriginResult>)>());

  // Registers storage key to be notified when an update occurs to its IndexedDB.
  void TrackIndexedDBForStorageKey(std::unique_ptr<TrackIndexedDBForStorageKeyParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TrackIndexedDBForStorageKeyResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TrackIndexedDBForStorageKeyResult>)>());

  // Unregisters origin from receiving notifications for cache storage.
  void UntrackCacheStorageForOrigin(std::unique_ptr<UntrackCacheStorageForOriginParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<UntrackCacheStorageForOriginResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<UntrackCacheStorageForOriginResult>)>());

  // Unregisters origin from receiving notifications for IndexedDB.
  void UntrackIndexedDBForOrigin(std::unique_ptr<UntrackIndexedDBForOriginParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<UntrackIndexedDBForOriginResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<UntrackIndexedDBForOriginResult>)>());

  // Unregisters storage key from receiving notifications for IndexedDB.
  void UntrackIndexedDBForStorageKey(std::unique_ptr<UntrackIndexedDBForStorageKeyParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<UntrackIndexedDBForStorageKeyResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<UntrackIndexedDBForStorageKeyResult>)>());

  // Returns the number of stored Trust Tokens per issuer for the
  // current browsing context.
  void GetTrustTokens(std::unique_ptr<GetTrustTokensParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetTrustTokensResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetTrustTokensResult>)>());

  // Removes all Trust Tokens issued by the provided issuerOrigin.
  // Leaves other stored data, including the issuer's Redemption Records, intact.
  void ClearTrustTokens(std::unique_ptr<ClearTrustTokensParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearTrustTokensResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearTrustTokensResult>)>());

  // Gets details for a named interest group.
  void GetInterestGroupDetails(std::unique_ptr<GetInterestGroupDetailsParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetInterestGroupDetailsResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetInterestGroupDetailsResult>)>());

  // Enables/Disables issuing of interestGroupAccessed events.
  void SetInterestGroupTracking(std::unique_ptr<SetInterestGroupTrackingParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetInterestGroupTrackingResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetInterestGroupTrackingResult>)>());

};

}  // namespace storage
}  // namespace autofill_assistant

#endif  // COMPONENTS_AUTOFILL_ASSISTANT_BROWSER_DEVTOOLS_DEVTOOLS_DOMAINS_STORAGE_H_
