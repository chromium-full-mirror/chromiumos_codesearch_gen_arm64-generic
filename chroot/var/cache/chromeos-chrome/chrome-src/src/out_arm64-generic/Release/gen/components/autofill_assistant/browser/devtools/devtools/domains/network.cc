// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Copied and modified from
// https://chromium.googlesource.com/chromium/src/+/a3f9d4fac81fc86065d867ab08fa4912ddf662c7/headless/lib/browser/devtools_api/domain_cc.template
// Modifications include namespace and path.

#include "components/autofill_assistant/browser/devtools/devtools/domains/network.h"

#include "base/bind.h"
#include "components/autofill_assistant/browser/devtools/error_reporter.h"

namespace autofill_assistant {

namespace network {

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
      "Network.dataReceived",
      base::BindRepeating(&Domain::DispatchDataReceivedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.eventSourceMessageReceived",
      base::BindRepeating(&Domain::DispatchEventSourceMessageReceivedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.loadingFailed",
      base::BindRepeating(&Domain::DispatchLoadingFailedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.loadingFinished",
      base::BindRepeating(&Domain::DispatchLoadingFinishedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.requestIntercepted",
      base::BindRepeating(&Domain::DispatchRequestInterceptedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.requestServedFromCache",
      base::BindRepeating(&Domain::DispatchRequestServedFromCacheEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.requestWillBeSent",
      base::BindRepeating(&Domain::DispatchRequestWillBeSentEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.resourceChangedPriority",
      base::BindRepeating(&Domain::DispatchResourceChangedPriorityEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.signedExchangeReceived",
      base::BindRepeating(&Domain::DispatchSignedExchangeReceivedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.responseReceived",
      base::BindRepeating(&Domain::DispatchResponseReceivedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.webSocketClosed",
      base::BindRepeating(&Domain::DispatchWebSocketClosedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.webSocketCreated",
      base::BindRepeating(&Domain::DispatchWebSocketCreatedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.webSocketFrameError",
      base::BindRepeating(&Domain::DispatchWebSocketFrameErrorEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.webSocketFrameReceived",
      base::BindRepeating(&Domain::DispatchWebSocketFrameReceivedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.webSocketFrameSent",
      base::BindRepeating(&Domain::DispatchWebSocketFrameSentEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.webSocketHandshakeResponseReceived",
      base::BindRepeating(&Domain::DispatchWebSocketHandshakeResponseReceivedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.webSocketWillSendHandshakeRequest",
      base::BindRepeating(&Domain::DispatchWebSocketWillSendHandshakeRequestEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.webTransportCreated",
      base::BindRepeating(&Domain::DispatchWebTransportCreatedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.webTransportConnectionEstablished",
      base::BindRepeating(&Domain::DispatchWebTransportConnectionEstablishedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.webTransportClosed",
      base::BindRepeating(&Domain::DispatchWebTransportClosedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.requestWillBeSentExtraInfo",
      base::BindRepeating(&Domain::DispatchRequestWillBeSentExtraInfoEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.responseReceivedExtraInfo",
      base::BindRepeating(&Domain::DispatchResponseReceivedExtraInfoEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.trustTokenOperationDone",
      base::BindRepeating(&Domain::DispatchTrustTokenOperationDoneEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.subresourceWebBundleMetadataReceived",
      base::BindRepeating(&Domain::DispatchSubresourceWebBundleMetadataReceivedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.subresourceWebBundleMetadataError",
      base::BindRepeating(&Domain::DispatchSubresourceWebBundleMetadataErrorEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.subresourceWebBundleInnerResponseParsed",
      base::BindRepeating(&Domain::DispatchSubresourceWebBundleInnerResponseParsedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.subresourceWebBundleInnerResponseError",
      base::BindRepeating(&Domain::DispatchSubresourceWebBundleInnerResponseErrorEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.reportingApiReportAdded",
      base::BindRepeating(&Domain::DispatchReportingApiReportAddedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.reportingApiReportUpdated",
      base::BindRepeating(&Domain::DispatchReportingApiReportUpdatedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Network.reportingApiEndpointsChangedForOrigin",
      base::BindRepeating(&Domain::DispatchReportingApiEndpointsChangedForOriginEvent,
                          base::Unretained(this)));
}

void ExperimentalDomain::SetAcceptedEncodings(
    std::unique_ptr<SetAcceptedEncodingsParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetAcceptedEncodingsResult>)> callback) {
  dispatcher_->SendMessage("Network.setAcceptedEncodings", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleSetAcceptedEncodingsResponse, std::move(callback)));
}
void ExperimentalDomain::ClearAcceptedEncodingsOverride(
    std::unique_ptr<ClearAcceptedEncodingsOverrideParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearAcceptedEncodingsOverrideResult>)> callback) {
  dispatcher_->SendMessage("Network.clearAcceptedEncodingsOverride", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleClearAcceptedEncodingsOverrideResponse, std::move(callback)));
}
void Domain::CanClearBrowserCache(
    std::unique_ptr<CanClearBrowserCacheParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanClearBrowserCacheResult>)> callback) {
  dispatcher_->SendMessage("Network.canClearBrowserCache", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleCanClearBrowserCacheResponse, std::move(callback)));
}

void Domain::CanClearBrowserCache(const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanClearBrowserCacheResult>)> callback) {
  std::unique_ptr<CanClearBrowserCacheParams> params = CanClearBrowserCacheParams::Builder()
      .Build();
dispatcher_->SendMessage("Network.canClearBrowserCache", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleCanClearBrowserCacheResponse, std::move(callback)));
}
void Domain::CanClearBrowserCookies(
    std::unique_ptr<CanClearBrowserCookiesParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanClearBrowserCookiesResult>)> callback) {
  dispatcher_->SendMessage("Network.canClearBrowserCookies", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleCanClearBrowserCookiesResponse, std::move(callback)));
}

void Domain::CanClearBrowserCookies(const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanClearBrowserCookiesResult>)> callback) {
  std::unique_ptr<CanClearBrowserCookiesParams> params = CanClearBrowserCookiesParams::Builder()
      .Build();
dispatcher_->SendMessage("Network.canClearBrowserCookies", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleCanClearBrowserCookiesResponse, std::move(callback)));
}
void Domain::CanEmulateNetworkConditions(
    std::unique_ptr<CanEmulateNetworkConditionsParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanEmulateNetworkConditionsResult>)> callback) {
  dispatcher_->SendMessage("Network.canEmulateNetworkConditions", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleCanEmulateNetworkConditionsResponse, std::move(callback)));
}

void Domain::CanEmulateNetworkConditions(const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanEmulateNetworkConditionsResult>)> callback) {
  std::unique_ptr<CanEmulateNetworkConditionsParams> params = CanEmulateNetworkConditionsParams::Builder()
      .Build();
dispatcher_->SendMessage("Network.canEmulateNetworkConditions", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleCanEmulateNetworkConditionsResponse, std::move(callback)));
}
void Domain::ClearBrowserCache(
    std::unique_ptr<ClearBrowserCacheParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearBrowserCacheResult>)> callback) {
  dispatcher_->SendMessage("Network.clearBrowserCache", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleClearBrowserCacheResponse, std::move(callback)));
}

void Domain::ClearBrowserCache(const std::string& optional_node_frame_id,
base::OnceClosure callback) {
  std::unique_ptr<ClearBrowserCacheParams> params = ClearBrowserCacheParams::Builder()
      .Build();
  dispatcher_->SendMessage("Network.clearBrowserCache", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void Domain::ClearBrowserCache(std::unique_ptr<ClearBrowserCacheParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback) {
  dispatcher_->SendMessage("Network.clearBrowserCache", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void Domain::ClearBrowserCookies(
    std::unique_ptr<ClearBrowserCookiesParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearBrowserCookiesResult>)> callback) {
  dispatcher_->SendMessage("Network.clearBrowserCookies", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleClearBrowserCookiesResponse, std::move(callback)));
}

void Domain::ClearBrowserCookies(const std::string& optional_node_frame_id,
base::OnceClosure callback) {
  std::unique_ptr<ClearBrowserCookiesParams> params = ClearBrowserCookiesParams::Builder()
      .Build();
  dispatcher_->SendMessage("Network.clearBrowserCookies", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void Domain::ClearBrowserCookies(std::unique_ptr<ClearBrowserCookiesParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback) {
  dispatcher_->SendMessage("Network.clearBrowserCookies", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void ExperimentalDomain::ContinueInterceptedRequest(
    std::unique_ptr<ContinueInterceptedRequestParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ContinueInterceptedRequestResult>)> callback) {
  dispatcher_->SendMessage("Network.continueInterceptedRequest", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleContinueInterceptedRequestResponse, std::move(callback)));
}
void Domain::DeleteCookies(
    std::unique_ptr<DeleteCookiesParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DeleteCookiesResult>)> callback) {
  dispatcher_->SendMessage("Network.deleteCookies", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleDeleteCookiesResponse, std::move(callback)));
}

void Domain::DeleteCookies(const std::string& name, const std::string& optional_node_frame_id,
base::OnceClosure callback) {
  std::unique_ptr<DeleteCookiesParams> params = DeleteCookiesParams::Builder()
      .SetName(std::move(name))
      .Build();
  dispatcher_->SendMessage("Network.deleteCookies", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void Domain::DeleteCookies(std::unique_ptr<DeleteCookiesParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback) {
  dispatcher_->SendMessage("Network.deleteCookies", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void Domain::Disable(
    std::unique_ptr<DisableParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DisableResult>)> callback) {
  dispatcher_->SendMessage("Network.disable", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleDisableResponse, std::move(callback)));
}

void Domain::Disable(const std::string& optional_node_frame_id,
base::OnceClosure callback) {
  std::unique_ptr<DisableParams> params = DisableParams::Builder()
      .Build();
  dispatcher_->SendMessage("Network.disable", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void Domain::Disable(std::unique_ptr<DisableParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback) {
  dispatcher_->SendMessage("Network.disable", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void Domain::EmulateNetworkConditions(
    std::unique_ptr<EmulateNetworkConditionsParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EmulateNetworkConditionsResult>)> callback) {
  dispatcher_->SendMessage("Network.emulateNetworkConditions", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleEmulateNetworkConditionsResponse, std::move(callback)));
}

void Domain::EmulateNetworkConditions(bool offline, double latency, double download_throughput, double upload_throughput, const std::string& optional_node_frame_id,
base::OnceClosure callback) {
  std::unique_ptr<EmulateNetworkConditionsParams> params = EmulateNetworkConditionsParams::Builder()
      .SetOffline(std::move(offline))
      .SetLatency(std::move(latency))
      .SetDownloadThroughput(std::move(download_throughput))
      .SetUploadThroughput(std::move(upload_throughput))
      .Build();
  dispatcher_->SendMessage("Network.emulateNetworkConditions", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void Domain::EmulateNetworkConditions(std::unique_ptr<EmulateNetworkConditionsParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback) {
  dispatcher_->SendMessage("Network.emulateNetworkConditions", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void Domain::Enable(
    std::unique_ptr<EnableParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EnableResult>)> callback) {
  dispatcher_->SendMessage("Network.enable", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleEnableResponse, std::move(callback)));
}

void Domain::Enable(const std::string& optional_node_frame_id,
base::OnceClosure callback) {
  std::unique_ptr<EnableParams> params = EnableParams::Builder()
      .Build();
  dispatcher_->SendMessage("Network.enable", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void Domain::Enable(std::unique_ptr<EnableParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback) {
  dispatcher_->SendMessage("Network.enable", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void Domain::GetAllCookies(
    std::unique_ptr<GetAllCookiesParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetAllCookiesResult>)> callback) {
  dispatcher_->SendMessage("Network.getAllCookies", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetAllCookiesResponse, std::move(callback)));
}

void Domain::GetAllCookies(const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetAllCookiesResult>)> callback) {
  std::unique_ptr<GetAllCookiesParams> params = GetAllCookiesParams::Builder()
      .Build();
dispatcher_->SendMessage("Network.getAllCookies", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetAllCookiesResponse, std::move(callback)));
}
void ExperimentalDomain::GetCertificate(
    std::unique_ptr<GetCertificateParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetCertificateResult>)> callback) {
  dispatcher_->SendMessage("Network.getCertificate", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetCertificateResponse, std::move(callback)));
}
void Domain::GetCookies(
    std::unique_ptr<GetCookiesParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetCookiesResult>)> callback) {
  dispatcher_->SendMessage("Network.getCookies", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetCookiesResponse, std::move(callback)));
}

void Domain::GetCookies(const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetCookiesResult>)> callback) {
  std::unique_ptr<GetCookiesParams> params = GetCookiesParams::Builder()
      .Build();
dispatcher_->SendMessage("Network.getCookies", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetCookiesResponse, std::move(callback)));
}
void Domain::GetResponseBody(
    std::unique_ptr<GetResponseBodyParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetResponseBodyResult>)> callback) {
  dispatcher_->SendMessage("Network.getResponseBody", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetResponseBodyResponse, std::move(callback)));
}

void Domain::GetResponseBody(const std::string& request_id, const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetResponseBodyResult>)> callback) {
  std::unique_ptr<GetResponseBodyParams> params = GetResponseBodyParams::Builder()
      .SetRequestId(std::move(request_id))
      .Build();
dispatcher_->SendMessage("Network.getResponseBody", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetResponseBodyResponse, std::move(callback)));
}
void Domain::GetRequestPostData(
    std::unique_ptr<GetRequestPostDataParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetRequestPostDataResult>)> callback) {
  dispatcher_->SendMessage("Network.getRequestPostData", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetRequestPostDataResponse, std::move(callback)));
}

void Domain::GetRequestPostData(const std::string& request_id, const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetRequestPostDataResult>)> callback) {
  std::unique_ptr<GetRequestPostDataParams> params = GetRequestPostDataParams::Builder()
      .SetRequestId(std::move(request_id))
      .Build();
dispatcher_->SendMessage("Network.getRequestPostData", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetRequestPostDataResponse, std::move(callback)));
}
void ExperimentalDomain::GetResponseBodyForInterception(
    std::unique_ptr<GetResponseBodyForInterceptionParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetResponseBodyForInterceptionResult>)> callback) {
  dispatcher_->SendMessage("Network.getResponseBodyForInterception", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetResponseBodyForInterceptionResponse, std::move(callback)));
}
void ExperimentalDomain::TakeResponseBodyForInterceptionAsStream(
    std::unique_ptr<TakeResponseBodyForInterceptionAsStreamParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TakeResponseBodyForInterceptionAsStreamResult>)> callback) {
  dispatcher_->SendMessage("Network.takeResponseBodyForInterceptionAsStream", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleTakeResponseBodyForInterceptionAsStreamResponse, std::move(callback)));
}
void ExperimentalDomain::ReplayXHR(
    std::unique_ptr<ReplayXHRParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ReplayXHRResult>)> callback) {
  dispatcher_->SendMessage("Network.replayXHR", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleReplayXHRResponse, std::move(callback)));
}
void ExperimentalDomain::SearchInResponseBody(
    std::unique_ptr<SearchInResponseBodyParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SearchInResponseBodyResult>)> callback) {
  dispatcher_->SendMessage("Network.searchInResponseBody", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleSearchInResponseBodyResponse, std::move(callback)));
}
void ExperimentalDomain::SetBlockedURLs(
    std::unique_ptr<SetBlockedURLsParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetBlockedURLsResult>)> callback) {
  dispatcher_->SendMessage("Network.setBlockedURLs", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleSetBlockedURLsResponse, std::move(callback)));
}
void ExperimentalDomain::SetBypassServiceWorker(
    std::unique_ptr<SetBypassServiceWorkerParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetBypassServiceWorkerResult>)> callback) {
  dispatcher_->SendMessage("Network.setBypassServiceWorker", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleSetBypassServiceWorkerResponse, std::move(callback)));
}
void Domain::SetCacheDisabled(
    std::unique_ptr<SetCacheDisabledParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCacheDisabledResult>)> callback) {
  dispatcher_->SendMessage("Network.setCacheDisabled", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleSetCacheDisabledResponse, std::move(callback)));
}

void Domain::SetCacheDisabled(bool cache_disabled, const std::string& optional_node_frame_id,
base::OnceClosure callback) {
  std::unique_ptr<SetCacheDisabledParams> params = SetCacheDisabledParams::Builder()
      .SetCacheDisabled(std::move(cache_disabled))
      .Build();
  dispatcher_->SendMessage("Network.setCacheDisabled", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void Domain::SetCacheDisabled(std::unique_ptr<SetCacheDisabledParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback) {
  dispatcher_->SendMessage("Network.setCacheDisabled", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void Domain::SetCookie(
    std::unique_ptr<SetCookieParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCookieResult>)> callback) {
  dispatcher_->SendMessage("Network.setCookie", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleSetCookieResponse, std::move(callback)));
}

void Domain::SetCookie(const std::string& name, const std::string& value, const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCookieResult>)> callback) {
  std::unique_ptr<SetCookieParams> params = SetCookieParams::Builder()
      .SetName(std::move(name))
      .SetValue(std::move(value))
      .Build();
dispatcher_->SendMessage("Network.setCookie", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleSetCookieResponse, std::move(callback)));
}
void Domain::SetCookies(
    std::unique_ptr<SetCookiesParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCookiesResult>)> callback) {
  dispatcher_->SendMessage("Network.setCookies", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleSetCookiesResponse, std::move(callback)));
}

void Domain::SetCookies(std::vector<std::unique_ptr<::autofill_assistant::network::CookieParam>> cookies, const std::string& optional_node_frame_id,
base::OnceClosure callback) {
  std::unique_ptr<SetCookiesParams> params = SetCookiesParams::Builder()
      .SetCookies(std::move(cookies))
      .Build();
  dispatcher_->SendMessage("Network.setCookies", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void Domain::SetCookies(std::unique_ptr<SetCookiesParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback) {
  dispatcher_->SendMessage("Network.setCookies", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void Domain::SetExtraHTTPHeaders(
    std::unique_ptr<SetExtraHTTPHeadersParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetExtraHTTPHeadersResult>)> callback) {
  dispatcher_->SendMessage("Network.setExtraHTTPHeaders", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleSetExtraHTTPHeadersResponse, std::move(callback)));
}

void Domain::SetExtraHTTPHeaders(std::unique_ptr<base::DictionaryValue> headers, const std::string& optional_node_frame_id,
base::OnceClosure callback) {
  std::unique_ptr<SetExtraHTTPHeadersParams> params = SetExtraHTTPHeadersParams::Builder()
      .SetHeaders(std::move(headers))
      .Build();
  dispatcher_->SendMessage("Network.setExtraHTTPHeaders", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void Domain::SetExtraHTTPHeaders(std::unique_ptr<SetExtraHTTPHeadersParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback) {
  dispatcher_->SendMessage("Network.setExtraHTTPHeaders", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void ExperimentalDomain::SetAttachDebugStack(
    std::unique_ptr<SetAttachDebugStackParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetAttachDebugStackResult>)> callback) {
  dispatcher_->SendMessage("Network.setAttachDebugStack", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleSetAttachDebugStackResponse, std::move(callback)));
}
void ExperimentalDomain::SetRequestInterception(
    std::unique_ptr<SetRequestInterceptionParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetRequestInterceptionResult>)> callback) {
  dispatcher_->SendMessage("Network.setRequestInterception", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleSetRequestInterceptionResponse, std::move(callback)));
}
void Domain::SetUserAgentOverride(
    std::unique_ptr<SetUserAgentOverrideParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetUserAgentOverrideResult>)> callback) {
  dispatcher_->SendMessage("Network.setUserAgentOverride", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleSetUserAgentOverrideResponse, std::move(callback)));
}

void Domain::SetUserAgentOverride(const std::string& user_agent, const std::string& optional_node_frame_id,
base::OnceClosure callback) {
  std::unique_ptr<SetUserAgentOverrideParams> params = SetUserAgentOverrideParams::Builder()
      .SetUserAgent(std::move(user_agent))
      .Build();
  dispatcher_->SendMessage("Network.setUserAgentOverride", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void Domain::SetUserAgentOverride(std::unique_ptr<SetUserAgentOverrideParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback) {
  dispatcher_->SendMessage("Network.setUserAgentOverride", params->Serialize(), optional_node_frame_id, std::move(callback));
}
void ExperimentalDomain::GetSecurityIsolationStatus(
    std::unique_ptr<GetSecurityIsolationStatusParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetSecurityIsolationStatusResult>)> callback) {
  dispatcher_->SendMessage("Network.getSecurityIsolationStatus", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetSecurityIsolationStatusResponse, std::move(callback)));
}
void ExperimentalDomain::EnableReportingApi(
    std::unique_ptr<EnableReportingApiParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EnableReportingApiResult>)> callback) {
  dispatcher_->SendMessage("Network.enableReportingApi", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleEnableReportingApiResponse, std::move(callback)));
}
void ExperimentalDomain::LoadNetworkResource(
    std::unique_ptr<LoadNetworkResourceParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<LoadNetworkResourceResult>)> callback) {
  dispatcher_->SendMessage("Network.loadNetworkResource", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleLoadNetworkResourceResponse, std::move(callback)));
}


// static
void Domain::HandleSetAcceptedEncodingsResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetAcceptedEncodingsResult>)> callback,
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
  std::unique_ptr<SetAcceptedEncodingsResult> result = SetAcceptedEncodingsResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleClearAcceptedEncodingsOverrideResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearAcceptedEncodingsOverrideResult>)> callback,
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
  std::unique_ptr<ClearAcceptedEncodingsOverrideResult> result = ClearAcceptedEncodingsOverrideResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleCanClearBrowserCacheResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanClearBrowserCacheResult>)> callback,
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
  std::unique_ptr<CanClearBrowserCacheResult> result = CanClearBrowserCacheResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleCanClearBrowserCookiesResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanClearBrowserCookiesResult>)> callback,
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
  std::unique_ptr<CanClearBrowserCookiesResult> result = CanClearBrowserCookiesResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleCanEmulateNetworkConditionsResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanEmulateNetworkConditionsResult>)> callback,
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
  std::unique_ptr<CanEmulateNetworkConditionsResult> result = CanEmulateNetworkConditionsResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleClearBrowserCacheResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearBrowserCacheResult>)> callback,
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
  std::unique_ptr<ClearBrowserCacheResult> result = ClearBrowserCacheResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleClearBrowserCookiesResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearBrowserCookiesResult>)> callback,
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
  std::unique_ptr<ClearBrowserCookiesResult> result = ClearBrowserCookiesResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleContinueInterceptedRequestResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ContinueInterceptedRequestResult>)> callback,
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
  std::unique_ptr<ContinueInterceptedRequestResult> result = ContinueInterceptedRequestResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleDeleteCookiesResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DeleteCookiesResult>)> callback,
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
  std::unique_ptr<DeleteCookiesResult> result = DeleteCookiesResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleDisableResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DisableResult>)> callback,
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
  std::unique_ptr<DisableResult> result = DisableResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleEmulateNetworkConditionsResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EmulateNetworkConditionsResult>)> callback,
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
  std::unique_ptr<EmulateNetworkConditionsResult> result = EmulateNetworkConditionsResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleEnableResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EnableResult>)> callback,
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
  std::unique_ptr<EnableResult> result = EnableResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleGetAllCookiesResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetAllCookiesResult>)> callback,
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
  std::unique_ptr<GetAllCookiesResult> result = GetAllCookiesResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleGetCertificateResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetCertificateResult>)> callback,
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
  std::unique_ptr<GetCertificateResult> result = GetCertificateResult::Parse(response, &errors);
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
void Domain::HandleGetResponseBodyResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetResponseBodyResult>)> callback,
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
  std::unique_ptr<GetResponseBodyResult> result = GetResponseBodyResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleGetRequestPostDataResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetRequestPostDataResult>)> callback,
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
  std::unique_ptr<GetRequestPostDataResult> result = GetRequestPostDataResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleGetResponseBodyForInterceptionResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetResponseBodyForInterceptionResult>)> callback,
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
  std::unique_ptr<GetResponseBodyForInterceptionResult> result = GetResponseBodyForInterceptionResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleTakeResponseBodyForInterceptionAsStreamResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TakeResponseBodyForInterceptionAsStreamResult>)> callback,
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
  std::unique_ptr<TakeResponseBodyForInterceptionAsStreamResult> result = TakeResponseBodyForInterceptionAsStreamResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleReplayXHRResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ReplayXHRResult>)> callback,
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
  std::unique_ptr<ReplayXHRResult> result = ReplayXHRResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleSearchInResponseBodyResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SearchInResponseBodyResult>)> callback,
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
  std::unique_ptr<SearchInResponseBodyResult> result = SearchInResponseBodyResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleSetBlockedURLsResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetBlockedURLsResult>)> callback,
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
  std::unique_ptr<SetBlockedURLsResult> result = SetBlockedURLsResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleSetBypassServiceWorkerResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetBypassServiceWorkerResult>)> callback,
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
  std::unique_ptr<SetBypassServiceWorkerResult> result = SetBypassServiceWorkerResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleSetCacheDisabledResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCacheDisabledResult>)> callback,
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
  std::unique_ptr<SetCacheDisabledResult> result = SetCacheDisabledResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleSetCookieResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCookieResult>)> callback,
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
  std::unique_ptr<SetCookieResult> result = SetCookieResult::Parse(response, &errors);
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
void Domain::HandleSetExtraHTTPHeadersResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetExtraHTTPHeadersResult>)> callback,
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
  std::unique_ptr<SetExtraHTTPHeadersResult> result = SetExtraHTTPHeadersResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleSetAttachDebugStackResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetAttachDebugStackResult>)> callback,
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
  std::unique_ptr<SetAttachDebugStackResult> result = SetAttachDebugStackResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleSetRequestInterceptionResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetRequestInterceptionResult>)> callback,
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
  std::unique_ptr<SetRequestInterceptionResult> result = SetRequestInterceptionResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleSetUserAgentOverrideResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetUserAgentOverrideResult>)> callback,
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
  std::unique_ptr<SetUserAgentOverrideResult> result = SetUserAgentOverrideResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleGetSecurityIsolationStatusResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetSecurityIsolationStatusResult>)> callback,
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
  std::unique_ptr<GetSecurityIsolationStatusResult> result = GetSecurityIsolationStatusResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleEnableReportingApiResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EnableReportingApiResult>)> callback,
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
  std::unique_ptr<EnableReportingApiResult> result = EnableReportingApiResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleLoadNetworkResourceResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<LoadNetworkResourceResult>)> callback,
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
  std::unique_ptr<LoadNetworkResourceResult> result = LoadNetworkResourceResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

void Domain::DispatchDataReceivedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<DataReceivedParams> parsed_params(DataReceivedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnDataReceived(*parsed_params);
  }
}

void Domain::DispatchEventSourceMessageReceivedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<EventSourceMessageReceivedParams> parsed_params(EventSourceMessageReceivedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnEventSourceMessageReceived(*parsed_params);
  }
}

void Domain::DispatchLoadingFailedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<LoadingFailedParams> parsed_params(LoadingFailedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnLoadingFailed(*parsed_params);
  }
}

void Domain::DispatchLoadingFinishedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<LoadingFinishedParams> parsed_params(LoadingFinishedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnLoadingFinished(*parsed_params);
  }
}

void Domain::DispatchRequestInterceptedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<RequestInterceptedParams> parsed_params(RequestInterceptedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnRequestIntercepted(*parsed_params);
  }
}

void Domain::DispatchRequestServedFromCacheEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<RequestServedFromCacheParams> parsed_params(RequestServedFromCacheParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnRequestServedFromCache(*parsed_params);
  }
}

void Domain::DispatchRequestWillBeSentEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<RequestWillBeSentParams> parsed_params(RequestWillBeSentParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnRequestWillBeSent(*parsed_params);
  }
}

void Domain::DispatchResourceChangedPriorityEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<ResourceChangedPriorityParams> parsed_params(ResourceChangedPriorityParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnResourceChangedPriority(*parsed_params);
  }
}

void Domain::DispatchSignedExchangeReceivedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<SignedExchangeReceivedParams> parsed_params(SignedExchangeReceivedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnSignedExchangeReceived(*parsed_params);
  }
}

void Domain::DispatchResponseReceivedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<ResponseReceivedParams> parsed_params(ResponseReceivedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnResponseReceived(*parsed_params);
  }
}

void Domain::DispatchWebSocketClosedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<WebSocketClosedParams> parsed_params(WebSocketClosedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnWebSocketClosed(*parsed_params);
  }
}

void Domain::DispatchWebSocketCreatedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<WebSocketCreatedParams> parsed_params(WebSocketCreatedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnWebSocketCreated(*parsed_params);
  }
}

void Domain::DispatchWebSocketFrameErrorEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<WebSocketFrameErrorParams> parsed_params(WebSocketFrameErrorParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnWebSocketFrameError(*parsed_params);
  }
}

void Domain::DispatchWebSocketFrameReceivedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<WebSocketFrameReceivedParams> parsed_params(WebSocketFrameReceivedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnWebSocketFrameReceived(*parsed_params);
  }
}

void Domain::DispatchWebSocketFrameSentEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<WebSocketFrameSentParams> parsed_params(WebSocketFrameSentParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnWebSocketFrameSent(*parsed_params);
  }
}

void Domain::DispatchWebSocketHandshakeResponseReceivedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<WebSocketHandshakeResponseReceivedParams> parsed_params(WebSocketHandshakeResponseReceivedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnWebSocketHandshakeResponseReceived(*parsed_params);
  }
}

void Domain::DispatchWebSocketWillSendHandshakeRequestEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<WebSocketWillSendHandshakeRequestParams> parsed_params(WebSocketWillSendHandshakeRequestParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnWebSocketWillSendHandshakeRequest(*parsed_params);
  }
}

void Domain::DispatchWebTransportCreatedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<WebTransportCreatedParams> parsed_params(WebTransportCreatedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnWebTransportCreated(*parsed_params);
  }
}

void Domain::DispatchWebTransportConnectionEstablishedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<WebTransportConnectionEstablishedParams> parsed_params(WebTransportConnectionEstablishedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnWebTransportConnectionEstablished(*parsed_params);
  }
}

void Domain::DispatchWebTransportClosedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<WebTransportClosedParams> parsed_params(WebTransportClosedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnWebTransportClosed(*parsed_params);
  }
}

void Domain::DispatchRequestWillBeSentExtraInfoEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<RequestWillBeSentExtraInfoParams> parsed_params(RequestWillBeSentExtraInfoParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnRequestWillBeSentExtraInfo(*parsed_params);
  }
}

void Domain::DispatchResponseReceivedExtraInfoEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<ResponseReceivedExtraInfoParams> parsed_params(ResponseReceivedExtraInfoParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnResponseReceivedExtraInfo(*parsed_params);
  }
}

void Domain::DispatchTrustTokenOperationDoneEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<TrustTokenOperationDoneParams> parsed_params(TrustTokenOperationDoneParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnTrustTokenOperationDone(*parsed_params);
  }
}

void Domain::DispatchSubresourceWebBundleMetadataReceivedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<SubresourceWebBundleMetadataReceivedParams> parsed_params(SubresourceWebBundleMetadataReceivedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnSubresourceWebBundleMetadataReceived(*parsed_params);
  }
}

void Domain::DispatchSubresourceWebBundleMetadataErrorEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<SubresourceWebBundleMetadataErrorParams> parsed_params(SubresourceWebBundleMetadataErrorParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnSubresourceWebBundleMetadataError(*parsed_params);
  }
}

void Domain::DispatchSubresourceWebBundleInnerResponseParsedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<SubresourceWebBundleInnerResponseParsedParams> parsed_params(SubresourceWebBundleInnerResponseParsedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnSubresourceWebBundleInnerResponseParsed(*parsed_params);
  }
}

void Domain::DispatchSubresourceWebBundleInnerResponseErrorEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<SubresourceWebBundleInnerResponseErrorParams> parsed_params(SubresourceWebBundleInnerResponseErrorParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnSubresourceWebBundleInnerResponseError(*parsed_params);
  }
}

void Domain::DispatchReportingApiReportAddedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<ReportingApiReportAddedParams> parsed_params(ReportingApiReportAddedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnReportingApiReportAdded(*parsed_params);
  }
}

void Domain::DispatchReportingApiReportUpdatedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<ReportingApiReportUpdatedParams> parsed_params(ReportingApiReportUpdatedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnReportingApiReportUpdated(*parsed_params);
  }
}

void Domain::DispatchReportingApiEndpointsChangedForOriginEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<ReportingApiEndpointsChangedForOriginParams> parsed_params(ReportingApiEndpointsChangedForOriginParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnReportingApiEndpointsChangedForOrigin(*parsed_params);
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

}  // namespace network

} // namespace autofill_assistant
