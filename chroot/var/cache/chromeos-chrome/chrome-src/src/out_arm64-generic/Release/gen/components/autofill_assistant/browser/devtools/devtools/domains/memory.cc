// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Copied and modified from
// https://chromium.googlesource.com/chromium/src/+/a3f9d4fac81fc86065d867ab08fa4912ddf662c7/headless/lib/browser/devtools_api/domain_cc.template
// Modifications include namespace and path.

#include "components/autofill_assistant/browser/devtools/devtools/domains/memory.h"

#include "base/bind.h"
#include "components/autofill_assistant/browser/devtools/error_reporter.h"

namespace autofill_assistant {

namespace memory {

ExperimentalDomain* Domain::GetExperimental() {
  return static_cast<ExperimentalDomain*>(this);
}


void ExperimentalDomain::GetDOMCounters(
    std::unique_ptr<GetDOMCountersParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetDOMCountersResult>)> callback) {
  dispatcher_->SendMessage("Memory.getDOMCounters", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetDOMCountersResponse, std::move(callback)));
}
void ExperimentalDomain::PrepareForLeakDetection(
    std::unique_ptr<PrepareForLeakDetectionParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<PrepareForLeakDetectionResult>)> callback) {
  dispatcher_->SendMessage("Memory.prepareForLeakDetection", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandlePrepareForLeakDetectionResponse, std::move(callback)));
}
void ExperimentalDomain::ForciblyPurgeJavaScriptMemory(
    std::unique_ptr<ForciblyPurgeJavaScriptMemoryParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ForciblyPurgeJavaScriptMemoryResult>)> callback) {
  dispatcher_->SendMessage("Memory.forciblyPurgeJavaScriptMemory", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleForciblyPurgeJavaScriptMemoryResponse, std::move(callback)));
}
void ExperimentalDomain::SetPressureNotificationsSuppressed(
    std::unique_ptr<SetPressureNotificationsSuppressedParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetPressureNotificationsSuppressedResult>)> callback) {
  dispatcher_->SendMessage("Memory.setPressureNotificationsSuppressed", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleSetPressureNotificationsSuppressedResponse, std::move(callback)));
}
void ExperimentalDomain::SimulatePressureNotification(
    std::unique_ptr<SimulatePressureNotificationParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SimulatePressureNotificationResult>)> callback) {
  dispatcher_->SendMessage("Memory.simulatePressureNotification", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleSimulatePressureNotificationResponse, std::move(callback)));
}
void ExperimentalDomain::StartSampling(
    std::unique_ptr<StartSamplingParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StartSamplingResult>)> callback) {
  dispatcher_->SendMessage("Memory.startSampling", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleStartSamplingResponse, std::move(callback)));
}
void ExperimentalDomain::StopSampling(
    std::unique_ptr<StopSamplingParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StopSamplingResult>)> callback) {
  dispatcher_->SendMessage("Memory.stopSampling", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleStopSamplingResponse, std::move(callback)));
}
void ExperimentalDomain::GetAllTimeSamplingProfile(
    std::unique_ptr<GetAllTimeSamplingProfileParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetAllTimeSamplingProfileResult>)> callback) {
  dispatcher_->SendMessage("Memory.getAllTimeSamplingProfile", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetAllTimeSamplingProfileResponse, std::move(callback)));
}
void ExperimentalDomain::GetBrowserSamplingProfile(
    std::unique_ptr<GetBrowserSamplingProfileParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetBrowserSamplingProfileResult>)> callback) {
  dispatcher_->SendMessage("Memory.getBrowserSamplingProfile", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetBrowserSamplingProfileResponse, std::move(callback)));
}
void ExperimentalDomain::GetSamplingProfile(
    std::unique_ptr<GetSamplingProfileParams> params,
    const std::string& optional_node_frame_id,
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetSamplingProfileResult>)> callback) {
  dispatcher_->SendMessage("Memory.getSamplingProfile", params->Serialize(), optional_node_frame_id, base::BindOnce(&Domain::HandleGetSamplingProfileResponse, std::move(callback)));
}


// static
void Domain::HandleGetDOMCountersResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetDOMCountersResult>)> callback,
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
  std::unique_ptr<GetDOMCountersResult> result = GetDOMCountersResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandlePrepareForLeakDetectionResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<PrepareForLeakDetectionResult>)> callback,
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
  std::unique_ptr<PrepareForLeakDetectionResult> result = PrepareForLeakDetectionResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleForciblyPurgeJavaScriptMemoryResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ForciblyPurgeJavaScriptMemoryResult>)> callback,
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
  std::unique_ptr<ForciblyPurgeJavaScriptMemoryResult> result = ForciblyPurgeJavaScriptMemoryResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleSetPressureNotificationsSuppressedResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetPressureNotificationsSuppressedResult>)> callback,
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
  std::unique_ptr<SetPressureNotificationsSuppressedResult> result = SetPressureNotificationsSuppressedResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleSimulatePressureNotificationResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SimulatePressureNotificationResult>)> callback,
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
  std::unique_ptr<SimulatePressureNotificationResult> result = SimulatePressureNotificationResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleStartSamplingResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StartSamplingResult>)> callback,
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
  std::unique_ptr<StartSamplingResult> result = StartSamplingResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleStopSamplingResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StopSamplingResult>)> callback,
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
  std::unique_ptr<StopSamplingResult> result = StopSamplingResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleGetAllTimeSamplingProfileResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetAllTimeSamplingProfileResult>)> callback,
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
  std::unique_ptr<GetAllTimeSamplingProfileResult> result = GetAllTimeSamplingProfileResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleGetBrowserSamplingProfileResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetBrowserSamplingProfileResult>)> callback,
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
  std::unique_ptr<GetBrowserSamplingProfileResult> result = GetBrowserSamplingProfileResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

// static
void Domain::HandleGetSamplingProfileResponse(
    base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetSamplingProfileResult>)> callback,
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
  std::unique_ptr<GetSamplingProfileResult> result = GetSamplingProfileResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(reply_status, std::move(result));
}

Domain::Domain(MessageDispatcher* dispatcher)
    : dispatcher_(dispatcher) {
}

Domain::~Domain() {}

ExperimentalDomain::ExperimentalDomain(MessageDispatcher* dispatcher)
    : Domain(dispatcher) {}

ExperimentalDomain::~ExperimentalDomain() {}


}  // namespace memory

} // namespace autofill_assistant
