// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/device_access.h"

#include "base/functional/bind.h"
#include "headless/public/util/error_reporter.h"

namespace headless {

namespace device_access {

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
      "DeviceAccess.deviceRequestPrompted",
      base::BindRepeating(&Domain::DispatchDeviceRequestPromptedEvent,
                          base::Unretained(this)));
}

void ExperimentalDomain::Enable(std::unique_ptr<EnableParams> params, base::OnceCallback<void(std::unique_ptr<EnableResult>)> callback) {
  dispatcher_->SendMessage("DeviceAccess.enable", params->Serialize(), base::BindOnce(&Domain::HandleEnableResponse, std::move(callback)));
}
void ExperimentalDomain::Disable(std::unique_ptr<DisableParams> params, base::OnceCallback<void(std::unique_ptr<DisableResult>)> callback) {
  dispatcher_->SendMessage("DeviceAccess.disable", params->Serialize(), base::BindOnce(&Domain::HandleDisableResponse, std::move(callback)));
}
void ExperimentalDomain::SelectPrompt(std::unique_ptr<SelectPromptParams> params, base::OnceCallback<void(std::unique_ptr<SelectPromptResult>)> callback) {
  dispatcher_->SendMessage("DeviceAccess.selectPrompt", params->Serialize(), base::BindOnce(&Domain::HandleSelectPromptResponse, std::move(callback)));
}
void ExperimentalDomain::CancelPrompt(std::unique_ptr<CancelPromptParams> params, base::OnceCallback<void(std::unique_ptr<CancelPromptResult>)> callback) {
  dispatcher_->SendMessage("DeviceAccess.cancelPrompt", params->Serialize(), base::BindOnce(&Domain::HandleCancelPromptResponse, std::move(callback)));
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
void Domain::HandleSelectPromptResponse(base::OnceCallback<void(std::unique_ptr<SelectPromptResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<SelectPromptResult> result = SelectPromptResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleCancelPromptResponse(base::OnceCallback<void(std::unique_ptr<CancelPromptResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<CancelPromptResult> result = CancelPromptResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

void Domain::DispatchDeviceRequestPromptedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<DeviceRequestPromptedParams> parsed_params(DeviceRequestPromptedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnDeviceRequestPrompted(*parsed_params);
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

}  // namespace device_access

} // namespace headless
