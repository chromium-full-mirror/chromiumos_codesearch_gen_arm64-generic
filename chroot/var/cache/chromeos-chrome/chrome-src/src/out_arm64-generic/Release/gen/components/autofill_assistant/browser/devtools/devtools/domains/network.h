// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Copied and modified from
// https://chromium.googlesource.com/chromium/src/+/a3f9d4fac81fc86065d867ab08fa4912ddf662c7/headless/lib/browser/devtools_api/domain_h.template
// Modifications include namespace and path.

#ifndef COMPONENTS_AUTOFILL_ASSISTANT_BROWSER_DEVTOOLS_DEVTOOLS_DOMAINS_NETWORK_H_
#define COMPONENTS_AUTOFILL_ASSISTANT_BROWSER_DEVTOOLS_DEVTOOLS_DOMAINS_NETWORK_H_

#include "base/callback.h"
#include "base/observer_list.h"
#include "base/values.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_dom.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_debugger.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_emulation.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_io.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_network.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_page.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_runtime.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_security.h"
#include "components/autofill_assistant/browser/devtools/message_dispatcher.h"


namespace autofill_assistant {
namespace network {
class ExperimentalDomain;
class ExperimentalObserver;

class ExperimentalObserver {
 public:
  virtual ~ExperimentalObserver() {}
  // Fired when data chunk was received over the network.
  virtual void OnDataReceived(const DataReceivedParams& params) {}
  // Fired when EventSource message is received.
  virtual void OnEventSourceMessageReceived(const EventSourceMessageReceivedParams& params) {}
  // Fired when HTTP request has failed to load.
  virtual void OnLoadingFailed(const LoadingFailedParams& params) {}
  // Fired when HTTP request has finished loading.
  virtual void OnLoadingFinished(const LoadingFinishedParams& params) {}
  // Details of an intercepted HTTP request, which must be either allowed, blocked, modified or
  // mocked.
  // Deprecated, use Fetch.requestPaused instead.
  virtual void OnRequestIntercepted(const RequestInterceptedParams& params) {}
  // Fired if request ended up loading from cache.
  virtual void OnRequestServedFromCache(const RequestServedFromCacheParams& params) {}
  // Fired when page is about to send HTTP request.
  virtual void OnRequestWillBeSent(const RequestWillBeSentParams& params) {}
  // Fired when resource loading priority is changed
  virtual void OnResourceChangedPriority(const ResourceChangedPriorityParams& params) {}
  // Fired when a signed exchange was received over the network
  virtual void OnSignedExchangeReceived(const SignedExchangeReceivedParams& params) {}
  // Fired when HTTP response is available.
  virtual void OnResponseReceived(const ResponseReceivedParams& params) {}
  // Fired when WebSocket is closed.
  virtual void OnWebSocketClosed(const WebSocketClosedParams& params) {}
  // Fired upon WebSocket creation.
  virtual void OnWebSocketCreated(const WebSocketCreatedParams& params) {}
  // Fired when WebSocket message error occurs.
  virtual void OnWebSocketFrameError(const WebSocketFrameErrorParams& params) {}
  // Fired when WebSocket message is received.
  virtual void OnWebSocketFrameReceived(const WebSocketFrameReceivedParams& params) {}
  // Fired when WebSocket message is sent.
  virtual void OnWebSocketFrameSent(const WebSocketFrameSentParams& params) {}
  // Fired when WebSocket handshake response becomes available.
  virtual void OnWebSocketHandshakeResponseReceived(const WebSocketHandshakeResponseReceivedParams& params) {}
  // Fired when WebSocket is about to initiate handshake.
  virtual void OnWebSocketWillSendHandshakeRequest(const WebSocketWillSendHandshakeRequestParams& params) {}
  // Fired upon WebTransport creation.
  virtual void OnWebTransportCreated(const WebTransportCreatedParams& params) {}
  // Fired when WebTransport handshake is finished.
  virtual void OnWebTransportConnectionEstablished(const WebTransportConnectionEstablishedParams& params) {}
  // Fired when WebTransport is disposed.
  virtual void OnWebTransportClosed(const WebTransportClosedParams& params) {}
  // Fired when additional information about a requestWillBeSent event is available from the
  // network stack. Not every requestWillBeSent event will have an additional
  // requestWillBeSentExtraInfo fired for it, and there is no guarantee whether requestWillBeSent
  // or requestWillBeSentExtraInfo will be fired first for the same request.
  virtual void OnRequestWillBeSentExtraInfo(const RequestWillBeSentExtraInfoParams& params) {}
  // Fired when additional information about a responseReceived event is available from the network
  // stack. Not every responseReceived event will have an additional responseReceivedExtraInfo for
  // it, and responseReceivedExtraInfo may be fired before or after responseReceived.
  virtual void OnResponseReceivedExtraInfo(const ResponseReceivedExtraInfoParams& params) {}
  // Fired exactly once for each Trust Token operation. Depending on
  // the type of the operation and whether the operation succeeded or
  // failed, the event is fired before the corresponding request was sent
  // or after the response was received.
  virtual void OnTrustTokenOperationDone(const TrustTokenOperationDoneParams& params) {}
  // Fired once when parsing the .wbn file has succeeded.
  // The event contains the information about the web bundle contents.
  virtual void OnSubresourceWebBundleMetadataReceived(const SubresourceWebBundleMetadataReceivedParams& params) {}
  // Fired once when parsing the .wbn file has failed.
  virtual void OnSubresourceWebBundleMetadataError(const SubresourceWebBundleMetadataErrorParams& params) {}
  // Fired when handling requests for resources within a .wbn file.
  // Note: this will only be fired for resources that are requested by the webpage.
  virtual void OnSubresourceWebBundleInnerResponseParsed(const SubresourceWebBundleInnerResponseParsedParams& params) {}
  // Fired when request for resources within a .wbn file failed.
  virtual void OnSubresourceWebBundleInnerResponseError(const SubresourceWebBundleInnerResponseErrorParams& params) {}
  // Is sent whenever a new report is added.
  // And after 'enableReportingApi' for all existing reports.
  virtual void OnReportingApiReportAdded(const ReportingApiReportAddedParams& params) {}
  virtual void OnReportingApiReportUpdated(const ReportingApiReportUpdatedParams& params) {}
  virtual void OnReportingApiEndpointsChangedForOrigin(const ReportingApiEndpointsChangedForOriginParams& params) {}
};

class Observer : public ExperimentalObserver {
 public:
  virtual ~Observer() {}
  // Fired when data chunk was received over the network.
  virtual void OnDataReceived(const DataReceivedParams& params) {}
  // Fired when EventSource message is received.
  virtual void OnEventSourceMessageReceived(const EventSourceMessageReceivedParams& params) {}
  // Fired when HTTP request has failed to load.
  virtual void OnLoadingFailed(const LoadingFailedParams& params) {}
  // Fired when HTTP request has finished loading.
  virtual void OnLoadingFinished(const LoadingFinishedParams& params) {}
  // Experimental: Details of an intercepted HTTP request, which must be either allowed, blocked, modified or
  // mocked.
  // Deprecated, use Fetch.requestPaused instead.
  virtual void OnRequestIntercepted(const RequestInterceptedParams& params) final {}
  // Fired if request ended up loading from cache.
  virtual void OnRequestServedFromCache(const RequestServedFromCacheParams& params) {}
  // Fired when page is about to send HTTP request.
  virtual void OnRequestWillBeSent(const RequestWillBeSentParams& params) {}
  // Experimental: Fired when resource loading priority is changed
  virtual void OnResourceChangedPriority(const ResourceChangedPriorityParams& params) final {}
  // Experimental: Fired when a signed exchange was received over the network
  virtual void OnSignedExchangeReceived(const SignedExchangeReceivedParams& params) final {}
  // Fired when HTTP response is available.
  virtual void OnResponseReceived(const ResponseReceivedParams& params) {}
  // Fired when WebSocket is closed.
  virtual void OnWebSocketClosed(const WebSocketClosedParams& params) {}
  // Fired upon WebSocket creation.
  virtual void OnWebSocketCreated(const WebSocketCreatedParams& params) {}
  // Fired when WebSocket message error occurs.
  virtual void OnWebSocketFrameError(const WebSocketFrameErrorParams& params) {}
  // Fired when WebSocket message is received.
  virtual void OnWebSocketFrameReceived(const WebSocketFrameReceivedParams& params) {}
  // Fired when WebSocket message is sent.
  virtual void OnWebSocketFrameSent(const WebSocketFrameSentParams& params) {}
  // Fired when WebSocket handshake response becomes available.
  virtual void OnWebSocketHandshakeResponseReceived(const WebSocketHandshakeResponseReceivedParams& params) {}
  // Fired when WebSocket is about to initiate handshake.
  virtual void OnWebSocketWillSendHandshakeRequest(const WebSocketWillSendHandshakeRequestParams& params) {}
  // Fired upon WebTransport creation.
  virtual void OnWebTransportCreated(const WebTransportCreatedParams& params) {}
  // Fired when WebTransport handshake is finished.
  virtual void OnWebTransportConnectionEstablished(const WebTransportConnectionEstablishedParams& params) {}
  // Fired when WebTransport is disposed.
  virtual void OnWebTransportClosed(const WebTransportClosedParams& params) {}
  // Experimental: Fired when additional information about a requestWillBeSent event is available from the
  // network stack. Not every requestWillBeSent event will have an additional
  // requestWillBeSentExtraInfo fired for it, and there is no guarantee whether requestWillBeSent
  // or requestWillBeSentExtraInfo will be fired first for the same request.
  virtual void OnRequestWillBeSentExtraInfo(const RequestWillBeSentExtraInfoParams& params) final {}
  // Experimental: Fired when additional information about a responseReceived event is available from the network
  // stack. Not every responseReceived event will have an additional responseReceivedExtraInfo for
  // it, and responseReceivedExtraInfo may be fired before or after responseReceived.
  virtual void OnResponseReceivedExtraInfo(const ResponseReceivedExtraInfoParams& params) final {}
  // Experimental: Fired exactly once for each Trust Token operation. Depending on
  // the type of the operation and whether the operation succeeded or
  // failed, the event is fired before the corresponding request was sent
  // or after the response was received.
  virtual void OnTrustTokenOperationDone(const TrustTokenOperationDoneParams& params) final {}
  // Experimental: Fired once when parsing the .wbn file has succeeded.
  // The event contains the information about the web bundle contents.
  virtual void OnSubresourceWebBundleMetadataReceived(const SubresourceWebBundleMetadataReceivedParams& params) final {}
  // Experimental: Fired once when parsing the .wbn file has failed.
  virtual void OnSubresourceWebBundleMetadataError(const SubresourceWebBundleMetadataErrorParams& params) final {}
  // Experimental: Fired when handling requests for resources within a .wbn file.
  // Note: this will only be fired for resources that are requested by the webpage.
  virtual void OnSubresourceWebBundleInnerResponseParsed(const SubresourceWebBundleInnerResponseParsedParams& params) final {}
  // Experimental: Fired when request for resources within a .wbn file failed.
  virtual void OnSubresourceWebBundleInnerResponseError(const SubresourceWebBundleInnerResponseErrorParams& params) final {}
  // Experimental: Is sent whenever a new report is added.
  // And after 'enableReportingApi' for all existing reports.
  virtual void OnReportingApiReportAdded(const ReportingApiReportAddedParams& params) final {}
  virtual void OnReportingApiReportUpdated(const ReportingApiReportUpdatedParams& params) final {}
  virtual void OnReportingApiEndpointsChangedForOrigin(const ReportingApiEndpointsChangedForOriginParams& params) final {}
};

// Network domain allows tracking network activities of the page. It exposes information about http,
// file, data and other requests and responses, their headers, bodies, timing, etc.
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

  // Tells whether clearing browser cache is supported.
  void CanClearBrowserCache(std::unique_ptr<CanClearBrowserCacheParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanClearBrowserCacheResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanClearBrowserCacheResult>)>());
  void CanClearBrowserCache(const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanClearBrowserCacheResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanClearBrowserCacheResult>)>());

  // Tells whether clearing browser cookies is supported.
  void CanClearBrowserCookies(std::unique_ptr<CanClearBrowserCookiesParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanClearBrowserCookiesResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanClearBrowserCookiesResult>)>());
  void CanClearBrowserCookies(const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanClearBrowserCookiesResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanClearBrowserCookiesResult>)>());

  // Tells whether emulation of network conditions is supported.
  void CanEmulateNetworkConditions(std::unique_ptr<CanEmulateNetworkConditionsParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanEmulateNetworkConditionsResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanEmulateNetworkConditionsResult>)>());
  void CanEmulateNetworkConditions(const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanEmulateNetworkConditionsResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanEmulateNetworkConditionsResult>)>());

  // Clears browser cache.
  void ClearBrowserCache(std::unique_ptr<ClearBrowserCacheParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearBrowserCacheResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearBrowserCacheResult>)>());
  void ClearBrowserCache(const std::string& optional_node_frame_id,
base::OnceClosure callback = base::OnceClosure());
  void ClearBrowserCache(std::unique_ptr<ClearBrowserCacheParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback);

  // Clears browser cookies.
  void ClearBrowserCookies(std::unique_ptr<ClearBrowserCookiesParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearBrowserCookiesResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearBrowserCookiesResult>)>());
  void ClearBrowserCookies(const std::string& optional_node_frame_id,
base::OnceClosure callback = base::OnceClosure());
  void ClearBrowserCookies(std::unique_ptr<ClearBrowserCookiesParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback);

  // Deletes browser cookies with matching name and url or domain/path pair.
  void DeleteCookies(std::unique_ptr<DeleteCookiesParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DeleteCookiesResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DeleteCookiesResult>)>());
  void DeleteCookies(const std::string& name, const std::string& optional_node_frame_id,
base::OnceClosure callback = base::OnceClosure());
  void DeleteCookies(std::unique_ptr<DeleteCookiesParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback);

  // Disables network tracking, prevents network events from being sent to the client.
  void Disable(std::unique_ptr<DisableParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DisableResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DisableResult>)>());
  void Disable(const std::string& optional_node_frame_id,
base::OnceClosure callback = base::OnceClosure());
  void Disable(std::unique_ptr<DisableParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback);

  // Activates emulation of network conditions.
  void EmulateNetworkConditions(std::unique_ptr<EmulateNetworkConditionsParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EmulateNetworkConditionsResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EmulateNetworkConditionsResult>)>());
  void EmulateNetworkConditions(bool offline, double latency, double download_throughput, double upload_throughput, const std::string& optional_node_frame_id,
base::OnceClosure callback = base::OnceClosure());
  void EmulateNetworkConditions(std::unique_ptr<EmulateNetworkConditionsParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback);

  // Enables network tracking, network events will now be delivered to the client.
  void Enable(std::unique_ptr<EnableParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EnableResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EnableResult>)>());
  void Enable(const std::string& optional_node_frame_id,
base::OnceClosure callback = base::OnceClosure());
  void Enable(std::unique_ptr<EnableParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback);

  // Returns all browser cookies. Depending on the backend support, will return detailed cookie
  // information in the `cookies` field.
  void GetAllCookies(std::unique_ptr<GetAllCookiesParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetAllCookiesResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetAllCookiesResult>)>());
  void GetAllCookies(const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetAllCookiesResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetAllCookiesResult>)>());

  // Returns all browser cookies for the current URL. Depending on the backend support, will return
  // detailed cookie information in the `cookies` field.
  void GetCookies(std::unique_ptr<GetCookiesParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetCookiesResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetCookiesResult>)>());
  void GetCookies(const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetCookiesResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetCookiesResult>)>());

  // Returns content served for the given request.
  void GetResponseBody(std::unique_ptr<GetResponseBodyParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetResponseBodyResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetResponseBodyResult>)>());
  void GetResponseBody(const std::string& request_id, const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetResponseBodyResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetResponseBodyResult>)>());

  // Returns post data sent with the request. Returns an error when no data was sent with the request.
  void GetRequestPostData(std::unique_ptr<GetRequestPostDataParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetRequestPostDataResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetRequestPostDataResult>)>());
  void GetRequestPostData(const std::string& request_id, const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetRequestPostDataResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetRequestPostDataResult>)>());

  // Toggles ignoring cache for each request. If `true`, cache will not be used.
  void SetCacheDisabled(std::unique_ptr<SetCacheDisabledParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCacheDisabledResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCacheDisabledResult>)>());
  void SetCacheDisabled(bool cache_disabled, const std::string& optional_node_frame_id,
base::OnceClosure callback = base::OnceClosure());
  void SetCacheDisabled(std::unique_ptr<SetCacheDisabledParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback);

  // Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.
  void SetCookie(std::unique_ptr<SetCookieParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCookieResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCookieResult>)>());
  void SetCookie(const std::string& name, const std::string& value, const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCookieResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCookieResult>)>());

  // Sets given cookies.
  void SetCookies(std::unique_ptr<SetCookiesParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCookiesResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCookiesResult>)>());
  void SetCookies(std::vector<std::unique_ptr<::autofill_assistant::network::CookieParam>> cookies, const std::string& optional_node_frame_id,
base::OnceClosure callback = base::OnceClosure());
  void SetCookies(std::unique_ptr<SetCookiesParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback);

  // Specifies whether to always send extra HTTP headers with the requests from this page.
  void SetExtraHTTPHeaders(std::unique_ptr<SetExtraHTTPHeadersParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetExtraHTTPHeadersResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetExtraHTTPHeadersResult>)>());
  void SetExtraHTTPHeaders(std::unique_ptr<base::DictionaryValue> headers, const std::string& optional_node_frame_id,
base::OnceClosure callback = base::OnceClosure());
  void SetExtraHTTPHeaders(std::unique_ptr<SetExtraHTTPHeadersParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback);

  // Allows overriding user agent with the given string.
  void SetUserAgentOverride(std::unique_ptr<SetUserAgentOverrideParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetUserAgentOverrideResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetUserAgentOverrideResult>)>());
  void SetUserAgentOverride(const std::string& user_agent, const std::string& optional_node_frame_id,
base::OnceClosure callback = base::OnceClosure());
  void SetUserAgentOverride(std::unique_ptr<SetUserAgentOverrideParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback);

 protected:
  Domain(MessageDispatcher* dispatcher);
  ~Domain();

  static void HandleSetAcceptedEncodingsResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetAcceptedEncodingsResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleClearAcceptedEncodingsOverrideResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearAcceptedEncodingsOverrideResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleCanClearBrowserCacheResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanClearBrowserCacheResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleCanClearBrowserCookiesResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanClearBrowserCookiesResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleCanEmulateNetworkConditionsResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<CanEmulateNetworkConditionsResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleClearBrowserCacheResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearBrowserCacheResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleClearBrowserCookiesResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearBrowserCookiesResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleContinueInterceptedRequestResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ContinueInterceptedRequestResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleDeleteCookiesResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DeleteCookiesResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleDisableResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DisableResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleEmulateNetworkConditionsResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EmulateNetworkConditionsResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleEnableResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EnableResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleGetAllCookiesResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetAllCookiesResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleGetCertificateResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetCertificateResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleGetCookiesResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetCookiesResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleGetResponseBodyResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetResponseBodyResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleGetRequestPostDataResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetRequestPostDataResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleGetResponseBodyForInterceptionResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetResponseBodyForInterceptionResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleTakeResponseBodyForInterceptionAsStreamResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TakeResponseBodyForInterceptionAsStreamResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleReplayXHRResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ReplayXHRResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleSearchInResponseBodyResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SearchInResponseBodyResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleSetBlockedURLsResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetBlockedURLsResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleSetBypassServiceWorkerResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetBypassServiceWorkerResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleSetCacheDisabledResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCacheDisabledResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleSetCookieResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCookieResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleSetCookiesResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetCookiesResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleSetExtraHTTPHeadersResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetExtraHTTPHeadersResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleSetAttachDebugStackResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetAttachDebugStackResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleSetRequestInterceptionResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetRequestInterceptionResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleSetUserAgentOverrideResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetUserAgentOverrideResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleGetSecurityIsolationStatusResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetSecurityIsolationStatusResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleEnableReportingApiResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EnableReportingApiResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleLoadNetworkResourceResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<LoadNetworkResourceResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);

  void DispatchDataReceivedEvent(const base::Value& params);
  void DispatchEventSourceMessageReceivedEvent(const base::Value& params);
  void DispatchLoadingFailedEvent(const base::Value& params);
  void DispatchLoadingFinishedEvent(const base::Value& params);
  void DispatchRequestInterceptedEvent(const base::Value& params);
  void DispatchRequestServedFromCacheEvent(const base::Value& params);
  void DispatchRequestWillBeSentEvent(const base::Value& params);
  void DispatchResourceChangedPriorityEvent(const base::Value& params);
  void DispatchSignedExchangeReceivedEvent(const base::Value& params);
  void DispatchResponseReceivedEvent(const base::Value& params);
  void DispatchWebSocketClosedEvent(const base::Value& params);
  void DispatchWebSocketCreatedEvent(const base::Value& params);
  void DispatchWebSocketFrameErrorEvent(const base::Value& params);
  void DispatchWebSocketFrameReceivedEvent(const base::Value& params);
  void DispatchWebSocketFrameSentEvent(const base::Value& params);
  void DispatchWebSocketHandshakeResponseReceivedEvent(const base::Value& params);
  void DispatchWebSocketWillSendHandshakeRequestEvent(const base::Value& params);
  void DispatchWebTransportCreatedEvent(const base::Value& params);
  void DispatchWebTransportConnectionEstablishedEvent(const base::Value& params);
  void DispatchWebTransportClosedEvent(const base::Value& params);
  void DispatchRequestWillBeSentExtraInfoEvent(const base::Value& params);
  void DispatchResponseReceivedExtraInfoEvent(const base::Value& params);
  void DispatchTrustTokenOperationDoneEvent(const base::Value& params);
  void DispatchSubresourceWebBundleMetadataReceivedEvent(const base::Value& params);
  void DispatchSubresourceWebBundleMetadataErrorEvent(const base::Value& params);
  void DispatchSubresourceWebBundleInnerResponseParsedEvent(const base::Value& params);
  void DispatchSubresourceWebBundleInnerResponseErrorEvent(const base::Value& params);
  void DispatchReportingApiReportAddedEvent(const base::Value& params);
  void DispatchReportingApiReportUpdatedEvent(const base::Value& params);
  void DispatchReportingApiEndpointsChangedForOriginEvent(const base::Value& params);

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

  // Sets a list of content encodings that will be accepted. Empty list means no encoding is accepted.
  void SetAcceptedEncodings(std::unique_ptr<SetAcceptedEncodingsParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetAcceptedEncodingsResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetAcceptedEncodingsResult>)>());

  // Clears accepted encodings set by setAcceptedEncodings
  void ClearAcceptedEncodingsOverride(std::unique_ptr<ClearAcceptedEncodingsOverrideParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearAcceptedEncodingsOverrideResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ClearAcceptedEncodingsOverrideResult>)>());

  // Response to Network.requestIntercepted which either modifies the request to continue with any
  // modifications, or blocks it, or completes it with the provided response bytes. If a network
  // fetch occurs as a result which encounters a redirect an additional Network.requestIntercepted
  // event will be sent with the same InterceptionId.
  // Deprecated, use Fetch.continueRequest, Fetch.fulfillRequest and Fetch.failRequest instead.
  void ContinueInterceptedRequest(std::unique_ptr<ContinueInterceptedRequestParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ContinueInterceptedRequestResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ContinueInterceptedRequestResult>)>());

  // Returns the DER-encoded certificate.
  void GetCertificate(std::unique_ptr<GetCertificateParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetCertificateResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetCertificateResult>)>());

  // Returns content served for the given currently intercepted request.
  void GetResponseBodyForInterception(std::unique_ptr<GetResponseBodyForInterceptionParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetResponseBodyForInterceptionResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetResponseBodyForInterceptionResult>)>());

  // Returns a handle to the stream representing the response body. Note that after this command,
  // the intercepted request can't be continued as is -- you either need to cancel it or to provide
  // the response body. The stream only supports sequential read, IO.read will fail if the position
  // is specified.
  void TakeResponseBodyForInterceptionAsStream(std::unique_ptr<TakeResponseBodyForInterceptionAsStreamParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TakeResponseBodyForInterceptionAsStreamResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TakeResponseBodyForInterceptionAsStreamResult>)>());

  // This method sends a new XMLHttpRequest which is identical to the original one. The following
  // parameters should be identical: method, url, async, request body, extra headers, withCredentials
  // attribute, user, password.
  void ReplayXHR(std::unique_ptr<ReplayXHRParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ReplayXHRResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ReplayXHRResult>)>());

  // Searches for given string in response content.
  void SearchInResponseBody(std::unique_ptr<SearchInResponseBodyParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SearchInResponseBodyResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SearchInResponseBodyResult>)>());

  // Blocks URLs from loading.
  void SetBlockedURLs(std::unique_ptr<SetBlockedURLsParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetBlockedURLsResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetBlockedURLsResult>)>());

  // Toggles ignoring of service worker for each request.
  void SetBypassServiceWorker(std::unique_ptr<SetBypassServiceWorkerParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetBypassServiceWorkerResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetBypassServiceWorkerResult>)>());

  // Specifies whether to attach a page script stack id in requests
  void SetAttachDebugStack(std::unique_ptr<SetAttachDebugStackParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetAttachDebugStackResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetAttachDebugStackResult>)>());

  // Sets the requests to intercept that match the provided patterns and optionally resource types.
  // Deprecated, please use Fetch.enable instead.
  void SetRequestInterception(std::unique_ptr<SetRequestInterceptionParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetRequestInterceptionResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetRequestInterceptionResult>)>());

  // Returns information about the COEP/COOP isolation status.
  void GetSecurityIsolationStatus(std::unique_ptr<GetSecurityIsolationStatusParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetSecurityIsolationStatusResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetSecurityIsolationStatusResult>)>());

  // Enables tracking for the Reporting API, events generated by the Reporting API will now be delivered to the client.
  // Enabling triggers 'reportingApiReportAdded' for all existing reports.
  void EnableReportingApi(std::unique_ptr<EnableReportingApiParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EnableReportingApiResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EnableReportingApiResult>)>());

  // Fetches the resource and returns the content.
  void LoadNetworkResource(std::unique_ptr<LoadNetworkResourceParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<LoadNetworkResourceResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<LoadNetworkResourceResult>)>());

};

}  // namespace network
}  // namespace autofill_assistant

#endif  // COMPONENTS_AUTOFILL_ASSISTANT_BROWSER_DEVTOOLS_DEVTOOLS_DOMAINS_NETWORK_H_
