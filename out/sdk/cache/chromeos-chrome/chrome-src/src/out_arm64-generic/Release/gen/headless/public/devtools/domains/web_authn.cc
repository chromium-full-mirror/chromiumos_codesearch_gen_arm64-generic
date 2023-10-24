// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/web_authn.h"

#include "base/functional/bind.h"
#include "headless/public/util/error_reporter.h"

namespace headless {

namespace web_authn {

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
      "WebAuthn.credentialAdded",
      base::BindRepeating(&Domain::DispatchCredentialAddedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "WebAuthn.credentialAsserted",
      base::BindRepeating(&Domain::DispatchCredentialAssertedEvent,
                          base::Unretained(this)));
}

void ExperimentalDomain::Enable(std::unique_ptr<EnableParams> params, base::OnceCallback<void(std::unique_ptr<EnableResult>)> callback) {
  dispatcher_->SendMessage("WebAuthn.enable", params->Serialize(), base::BindOnce(&Domain::HandleEnableResponse, std::move(callback)));
}
void ExperimentalDomain::Disable(std::unique_ptr<DisableParams> params, base::OnceCallback<void(std::unique_ptr<DisableResult>)> callback) {
  dispatcher_->SendMessage("WebAuthn.disable", params->Serialize(), base::BindOnce(&Domain::HandleDisableResponse, std::move(callback)));
}
void ExperimentalDomain::AddVirtualAuthenticator(std::unique_ptr<AddVirtualAuthenticatorParams> params, base::OnceCallback<void(std::unique_ptr<AddVirtualAuthenticatorResult>)> callback) {
  dispatcher_->SendMessage("WebAuthn.addVirtualAuthenticator", params->Serialize(), base::BindOnce(&Domain::HandleAddVirtualAuthenticatorResponse, std::move(callback)));
}
void ExperimentalDomain::SetResponseOverrideBits(std::unique_ptr<SetResponseOverrideBitsParams> params, base::OnceCallback<void(std::unique_ptr<SetResponseOverrideBitsResult>)> callback) {
  dispatcher_->SendMessage("WebAuthn.setResponseOverrideBits", params->Serialize(), base::BindOnce(&Domain::HandleSetResponseOverrideBitsResponse, std::move(callback)));
}
void ExperimentalDomain::RemoveVirtualAuthenticator(std::unique_ptr<RemoveVirtualAuthenticatorParams> params, base::OnceCallback<void(std::unique_ptr<RemoveVirtualAuthenticatorResult>)> callback) {
  dispatcher_->SendMessage("WebAuthn.removeVirtualAuthenticator", params->Serialize(), base::BindOnce(&Domain::HandleRemoveVirtualAuthenticatorResponse, std::move(callback)));
}
void ExperimentalDomain::AddCredential(std::unique_ptr<AddCredentialParams> params, base::OnceCallback<void(std::unique_ptr<AddCredentialResult>)> callback) {
  dispatcher_->SendMessage("WebAuthn.addCredential", params->Serialize(), base::BindOnce(&Domain::HandleAddCredentialResponse, std::move(callback)));
}
void ExperimentalDomain::GetCredential(std::unique_ptr<GetCredentialParams> params, base::OnceCallback<void(std::unique_ptr<GetCredentialResult>)> callback) {
  dispatcher_->SendMessage("WebAuthn.getCredential", params->Serialize(), base::BindOnce(&Domain::HandleGetCredentialResponse, std::move(callback)));
}
void ExperimentalDomain::GetCredentials(std::unique_ptr<GetCredentialsParams> params, base::OnceCallback<void(std::unique_ptr<GetCredentialsResult>)> callback) {
  dispatcher_->SendMessage("WebAuthn.getCredentials", params->Serialize(), base::BindOnce(&Domain::HandleGetCredentialsResponse, std::move(callback)));
}
void ExperimentalDomain::RemoveCredential(std::unique_ptr<RemoveCredentialParams> params, base::OnceCallback<void(std::unique_ptr<RemoveCredentialResult>)> callback) {
  dispatcher_->SendMessage("WebAuthn.removeCredential", params->Serialize(), base::BindOnce(&Domain::HandleRemoveCredentialResponse, std::move(callback)));
}
void ExperimentalDomain::ClearCredentials(std::unique_ptr<ClearCredentialsParams> params, base::OnceCallback<void(std::unique_ptr<ClearCredentialsResult>)> callback) {
  dispatcher_->SendMessage("WebAuthn.clearCredentials", params->Serialize(), base::BindOnce(&Domain::HandleClearCredentialsResponse, std::move(callback)));
}
void ExperimentalDomain::SetUserVerified(std::unique_ptr<SetUserVerifiedParams> params, base::OnceCallback<void(std::unique_ptr<SetUserVerifiedResult>)> callback) {
  dispatcher_->SendMessage("WebAuthn.setUserVerified", params->Serialize(), base::BindOnce(&Domain::HandleSetUserVerifiedResponse, std::move(callback)));
}
void ExperimentalDomain::SetAutomaticPresenceSimulation(std::unique_ptr<SetAutomaticPresenceSimulationParams> params, base::OnceCallback<void(std::unique_ptr<SetAutomaticPresenceSimulationResult>)> callback) {
  dispatcher_->SendMessage("WebAuthn.setAutomaticPresenceSimulation", params->Serialize(), base::BindOnce(&Domain::HandleSetAutomaticPresenceSimulationResponse, std::move(callback)));
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
void Domain::HandleAddVirtualAuthenticatorResponse(base::OnceCallback<void(std::unique_ptr<AddVirtualAuthenticatorResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<AddVirtualAuthenticatorResult> result = AddVirtualAuthenticatorResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleSetResponseOverrideBitsResponse(base::OnceCallback<void(std::unique_ptr<SetResponseOverrideBitsResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<SetResponseOverrideBitsResult> result = SetResponseOverrideBitsResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleRemoveVirtualAuthenticatorResponse(base::OnceCallback<void(std::unique_ptr<RemoveVirtualAuthenticatorResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<RemoveVirtualAuthenticatorResult> result = RemoveVirtualAuthenticatorResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleAddCredentialResponse(base::OnceCallback<void(std::unique_ptr<AddCredentialResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<AddCredentialResult> result = AddCredentialResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleGetCredentialResponse(base::OnceCallback<void(std::unique_ptr<GetCredentialResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetCredentialResult> result = GetCredentialResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleGetCredentialsResponse(base::OnceCallback<void(std::unique_ptr<GetCredentialsResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetCredentialsResult> result = GetCredentialsResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleRemoveCredentialResponse(base::OnceCallback<void(std::unique_ptr<RemoveCredentialResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<RemoveCredentialResult> result = RemoveCredentialResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleClearCredentialsResponse(base::OnceCallback<void(std::unique_ptr<ClearCredentialsResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<ClearCredentialsResult> result = ClearCredentialsResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleSetUserVerifiedResponse(base::OnceCallback<void(std::unique_ptr<SetUserVerifiedResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<SetUserVerifiedResult> result = SetUserVerifiedResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleSetAutomaticPresenceSimulationResponse(base::OnceCallback<void(std::unique_ptr<SetAutomaticPresenceSimulationResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<SetAutomaticPresenceSimulationResult> result = SetAutomaticPresenceSimulationResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

void Domain::DispatchCredentialAddedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<CredentialAddedParams> parsed_params(CredentialAddedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnCredentialAdded(*parsed_params);
  }
}

void Domain::DispatchCredentialAssertedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<CredentialAssertedParams> parsed_params(CredentialAssertedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnCredentialAsserted(*parsed_params);
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

}  // namespace web_authn

} // namespace headless
