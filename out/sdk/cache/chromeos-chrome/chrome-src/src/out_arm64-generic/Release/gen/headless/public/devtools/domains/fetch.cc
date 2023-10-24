// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/fetch.h"

#include "base/functional/bind.h"
#include "headless/public/util/error_reporter.h"

namespace headless {

namespace fetch {

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
      "Fetch.requestPaused",
      base::BindRepeating(&Domain::DispatchRequestPausedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Fetch.authRequired",
      base::BindRepeating(&Domain::DispatchAuthRequiredEvent,
                          base::Unretained(this)));
}

void Domain::Disable(std::unique_ptr<DisableParams> params, base::OnceCallback<void(std::unique_ptr<DisableResult>)> callback) {
  dispatcher_->SendMessage("Fetch.disable", params->Serialize(), base::BindOnce(&Domain::HandleDisableResponse, std::move(callback)));
}

void Domain::Disable(base::OnceClosure callback) {
  std::unique_ptr<DisableParams> params = DisableParams::Builder()
      .Build();
  dispatcher_->SendMessage("Fetch.disable", params->Serialize(), std::move(callback));
}
void Domain::Disable(std::unique_ptr<DisableParams> params, base::OnceClosure callback) {
  dispatcher_->SendMessage("Fetch.disable", params->Serialize(), std::move(callback));
}
void Domain::Enable(std::unique_ptr<EnableParams> params, base::OnceCallback<void(std::unique_ptr<EnableResult>)> callback) {
  dispatcher_->SendMessage("Fetch.enable", params->Serialize(), base::BindOnce(&Domain::HandleEnableResponse, std::move(callback)));
}

void Domain::Enable(base::OnceClosure callback) {
  std::unique_ptr<EnableParams> params = EnableParams::Builder()
      .Build();
  dispatcher_->SendMessage("Fetch.enable", params->Serialize(), std::move(callback));
}
void Domain::Enable(std::unique_ptr<EnableParams> params, base::OnceClosure callback) {
  dispatcher_->SendMessage("Fetch.enable", params->Serialize(), std::move(callback));
}
void Domain::FailRequest(std::unique_ptr<FailRequestParams> params, base::OnceCallback<void(std::unique_ptr<FailRequestResult>)> callback) {
  dispatcher_->SendMessage("Fetch.failRequest", params->Serialize(), base::BindOnce(&Domain::HandleFailRequestResponse, std::move(callback)));
}

void Domain::FailRequest(const std::string& request_id, ::headless::network::ErrorReason error_reason, base::OnceClosure callback) {
  std::unique_ptr<FailRequestParams> params = FailRequestParams::Builder()
      .SetRequestId(std::move(request_id))
      .SetErrorReason(std::move(error_reason))
      .Build();
  dispatcher_->SendMessage("Fetch.failRequest", params->Serialize(), std::move(callback));
}
void Domain::FailRequest(std::unique_ptr<FailRequestParams> params, base::OnceClosure callback) {
  dispatcher_->SendMessage("Fetch.failRequest", params->Serialize(), std::move(callback));
}
void Domain::FulfillRequest(std::unique_ptr<FulfillRequestParams> params, base::OnceCallback<void(std::unique_ptr<FulfillRequestResult>)> callback) {
  dispatcher_->SendMessage("Fetch.fulfillRequest", params->Serialize(), base::BindOnce(&Domain::HandleFulfillRequestResponse, std::move(callback)));
}

void Domain::FulfillRequest(const std::string& request_id, int response_code, base::OnceClosure callback) {
  std::unique_ptr<FulfillRequestParams> params = FulfillRequestParams::Builder()
      .SetRequestId(std::move(request_id))
      .SetResponseCode(std::move(response_code))
      .Build();
  dispatcher_->SendMessage("Fetch.fulfillRequest", params->Serialize(), std::move(callback));
}
void Domain::FulfillRequest(std::unique_ptr<FulfillRequestParams> params, base::OnceClosure callback) {
  dispatcher_->SendMessage("Fetch.fulfillRequest", params->Serialize(), std::move(callback));
}
void Domain::ContinueRequest(std::unique_ptr<ContinueRequestParams> params, base::OnceCallback<void(std::unique_ptr<ContinueRequestResult>)> callback) {
  dispatcher_->SendMessage("Fetch.continueRequest", params->Serialize(), base::BindOnce(&Domain::HandleContinueRequestResponse, std::move(callback)));
}

void Domain::ContinueRequest(const std::string& request_id, base::OnceClosure callback) {
  std::unique_ptr<ContinueRequestParams> params = ContinueRequestParams::Builder()
      .SetRequestId(std::move(request_id))
      .Build();
  dispatcher_->SendMessage("Fetch.continueRequest", params->Serialize(), std::move(callback));
}
void Domain::ContinueRequest(std::unique_ptr<ContinueRequestParams> params, base::OnceClosure callback) {
  dispatcher_->SendMessage("Fetch.continueRequest", params->Serialize(), std::move(callback));
}
void Domain::ContinueWithAuth(std::unique_ptr<ContinueWithAuthParams> params, base::OnceCallback<void(std::unique_ptr<ContinueWithAuthResult>)> callback) {
  dispatcher_->SendMessage("Fetch.continueWithAuth", params->Serialize(), base::BindOnce(&Domain::HandleContinueWithAuthResponse, std::move(callback)));
}

void Domain::ContinueWithAuth(const std::string& request_id, std::unique_ptr<::headless::fetch::AuthChallengeResponse> auth_challenge_response, base::OnceClosure callback) {
  std::unique_ptr<ContinueWithAuthParams> params = ContinueWithAuthParams::Builder()
      .SetRequestId(std::move(request_id))
      .SetAuthChallengeResponse(std::move(auth_challenge_response))
      .Build();
  dispatcher_->SendMessage("Fetch.continueWithAuth", params->Serialize(), std::move(callback));
}
void Domain::ContinueWithAuth(std::unique_ptr<ContinueWithAuthParams> params, base::OnceClosure callback) {
  dispatcher_->SendMessage("Fetch.continueWithAuth", params->Serialize(), std::move(callback));
}
void ExperimentalDomain::ContinueResponse(std::unique_ptr<ContinueResponseParams> params, base::OnceCallback<void(std::unique_ptr<ContinueResponseResult>)> callback) {
  dispatcher_->SendMessage("Fetch.continueResponse", params->Serialize(), base::BindOnce(&Domain::HandleContinueResponseResponse, std::move(callback)));
}
void Domain::GetResponseBody(std::unique_ptr<GetResponseBodyParams> params, base::OnceCallback<void(std::unique_ptr<GetResponseBodyResult>)> callback) {
  dispatcher_->SendMessage("Fetch.getResponseBody", params->Serialize(), base::BindOnce(&Domain::HandleGetResponseBodyResponse, std::move(callback)));
}

void Domain::GetResponseBody(const std::string& request_id, base::OnceCallback<void(std::unique_ptr<GetResponseBodyResult>)> callback) {
  std::unique_ptr<GetResponseBodyParams> params = GetResponseBodyParams::Builder()
      .SetRequestId(std::move(request_id))
      .Build();
dispatcher_->SendMessage("Fetch.getResponseBody", params->Serialize(), base::BindOnce(&Domain::HandleGetResponseBodyResponse, std::move(callback)));
}
void Domain::TakeResponseBodyAsStream(std::unique_ptr<TakeResponseBodyAsStreamParams> params, base::OnceCallback<void(std::unique_ptr<TakeResponseBodyAsStreamResult>)> callback) {
  dispatcher_->SendMessage("Fetch.takeResponseBodyAsStream", params->Serialize(), base::BindOnce(&Domain::HandleTakeResponseBodyAsStreamResponse, std::move(callback)));
}

void Domain::TakeResponseBodyAsStream(const std::string& request_id, base::OnceCallback<void(std::unique_ptr<TakeResponseBodyAsStreamResult>)> callback) {
  std::unique_ptr<TakeResponseBodyAsStreamParams> params = TakeResponseBodyAsStreamParams::Builder()
      .SetRequestId(std::move(request_id))
      .Build();
dispatcher_->SendMessage("Fetch.takeResponseBodyAsStream", params->Serialize(), base::BindOnce(&Domain::HandleTakeResponseBodyAsStreamResponse, std::move(callback)));
}


// static
void Domain::HandleDisableResponse(base::OnceCallback<void(std::unique_ptr<DisableResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<DisableResult> result = DisableResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleEnableResponse(base::OnceCallback<void(std::unique_ptr<EnableResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<EnableResult> result = EnableResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleFailRequestResponse(base::OnceCallback<void(std::unique_ptr<FailRequestResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<FailRequestResult> result = FailRequestResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleFulfillRequestResponse(base::OnceCallback<void(std::unique_ptr<FulfillRequestResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<FulfillRequestResult> result = FulfillRequestResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleContinueRequestResponse(base::OnceCallback<void(std::unique_ptr<ContinueRequestResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<ContinueRequestResult> result = ContinueRequestResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleContinueWithAuthResponse(base::OnceCallback<void(std::unique_ptr<ContinueWithAuthResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<ContinueWithAuthResult> result = ContinueWithAuthResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleContinueResponseResponse(base::OnceCallback<void(std::unique_ptr<ContinueResponseResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<ContinueResponseResult> result = ContinueResponseResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleGetResponseBodyResponse(base::OnceCallback<void(std::unique_ptr<GetResponseBodyResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetResponseBodyResult> result = GetResponseBodyResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleTakeResponseBodyAsStreamResponse(base::OnceCallback<void(std::unique_ptr<TakeResponseBodyAsStreamResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<TakeResponseBodyAsStreamResult> result = TakeResponseBodyAsStreamResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

void Domain::DispatchRequestPausedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<RequestPausedParams> parsed_params(RequestPausedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnRequestPaused(*parsed_params);
  }
}

void Domain::DispatchAuthRequiredEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<AuthRequiredParams> parsed_params(AuthRequiredParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnAuthRequired(*parsed_params);
  }
}

Domain::Domain(internal::MessageDispatcher* dispatcher)
    : dispatcher_(dispatcher) {
}

Domain::~Domain() {}

ExperimentalDomain::ExperimentalDomain(internal::MessageDispatcher* dispatcher)
    : Domain(dispatcher) {}

ExperimentalDomain::~ExperimentalDomain() {}

void ExperimentalDomain::AddObserver(ExperimentalObserver* observer) {
  RegisterEventHandlersIfNeeded();
  observers_.AddObserver(observer);
}

void ExperimentalDomain::RemoveObserver(ExperimentalObserver* observer) {
  observers_.RemoveObserver(observer);
}

}  // namespace fetch

} // namespace headless
