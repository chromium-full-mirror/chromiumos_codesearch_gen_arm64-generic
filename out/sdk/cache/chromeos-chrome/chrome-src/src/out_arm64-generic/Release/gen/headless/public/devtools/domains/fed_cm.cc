// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/fed_cm.h"

#include "base/functional/bind.h"
#include "headless/public/util/error_reporter.h"

namespace headless {

namespace fed_cm {

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
      "FedCm.dialogShown",
      base::BindRepeating(&Domain::DispatchDialogShownEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "FedCm.dialogClosed",
      base::BindRepeating(&Domain::DispatchDialogClosedEvent,
                          base::Unretained(this)));
}

void ExperimentalDomain::Enable(std::unique_ptr<EnableParams> params, base::OnceCallback<void(std::unique_ptr<EnableResult>)> callback) {
  dispatcher_->SendMessage("FedCm.enable", params->Serialize(), base::BindOnce(&Domain::HandleEnableResponse, std::move(callback)));
}
void ExperimentalDomain::Disable(std::unique_ptr<DisableParams> params, base::OnceCallback<void(std::unique_ptr<DisableResult>)> callback) {
  dispatcher_->SendMessage("FedCm.disable", params->Serialize(), base::BindOnce(&Domain::HandleDisableResponse, std::move(callback)));
}
void ExperimentalDomain::SelectAccount(std::unique_ptr<SelectAccountParams> params, base::OnceCallback<void(std::unique_ptr<SelectAccountResult>)> callback) {
  dispatcher_->SendMessage("FedCm.selectAccount", params->Serialize(), base::BindOnce(&Domain::HandleSelectAccountResponse, std::move(callback)));
}
void ExperimentalDomain::ClickDialogButton(std::unique_ptr<ClickDialogButtonParams> params, base::OnceCallback<void(std::unique_ptr<ClickDialogButtonResult>)> callback) {
  dispatcher_->SendMessage("FedCm.clickDialogButton", params->Serialize(), base::BindOnce(&Domain::HandleClickDialogButtonResponse, std::move(callback)));
}
void ExperimentalDomain::DismissDialog(std::unique_ptr<DismissDialogParams> params, base::OnceCallback<void(std::unique_ptr<DismissDialogResult>)> callback) {
  dispatcher_->SendMessage("FedCm.dismissDialog", params->Serialize(), base::BindOnce(&Domain::HandleDismissDialogResponse, std::move(callback)));
}
void ExperimentalDomain::ResetCooldown(std::unique_ptr<ResetCooldownParams> params, base::OnceCallback<void(std::unique_ptr<ResetCooldownResult>)> callback) {
  dispatcher_->SendMessage("FedCm.resetCooldown", params->Serialize(), base::BindOnce(&Domain::HandleResetCooldownResponse, std::move(callback)));
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
void Domain::HandleSelectAccountResponse(base::OnceCallback<void(std::unique_ptr<SelectAccountResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<SelectAccountResult> result = SelectAccountResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleClickDialogButtonResponse(base::OnceCallback<void(std::unique_ptr<ClickDialogButtonResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<ClickDialogButtonResult> result = ClickDialogButtonResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleDismissDialogResponse(base::OnceCallback<void(std::unique_ptr<DismissDialogResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<DismissDialogResult> result = DismissDialogResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleResetCooldownResponse(base::OnceCallback<void(std::unique_ptr<ResetCooldownResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<ResetCooldownResult> result = ResetCooldownResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

void Domain::DispatchDialogShownEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<DialogShownParams> parsed_params(DialogShownParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnDialogShown(*parsed_params);
  }
}

void Domain::DispatchDialogClosedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<DialogClosedParams> parsed_params(DialogClosedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnDialogClosed(*parsed_params);
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

}  // namespace fed_cm

} // namespace headless
