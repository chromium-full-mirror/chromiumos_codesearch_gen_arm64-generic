// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/headless_experimental.h"

#include "base/functional/bind.h"
#include "headless/public/util/error_reporter.h"

namespace headless {

namespace headless_experimental {

ExperimentalDomain* Domain::GetExperimental() {
  return static_cast<ExperimentalDomain*>(this);
}


void ExperimentalDomain::BeginFrame(std::unique_ptr<BeginFrameParams> params, base::OnceCallback<void(std::unique_ptr<BeginFrameResult>)> callback) {
  dispatcher_->SendMessage("HeadlessExperimental.beginFrame", params->Serialize(), base::BindOnce(&Domain::HandleBeginFrameResponse, std::move(callback)));
}
void ExperimentalDomain::Disable(std::unique_ptr<DisableParams> params, base::OnceCallback<void(std::unique_ptr<DisableResult>)> callback) {
  dispatcher_->SendMessage("HeadlessExperimental.disable", params->Serialize(), base::BindOnce(&Domain::HandleDisableResponse, std::move(callback)));
}
void ExperimentalDomain::Enable(std::unique_ptr<EnableParams> params, base::OnceCallback<void(std::unique_ptr<EnableResult>)> callback) {
  dispatcher_->SendMessage("HeadlessExperimental.enable", params->Serialize(), base::BindOnce(&Domain::HandleEnableResponse, std::move(callback)));
}


// static
void Domain::HandleBeginFrameResponse(base::OnceCallback<void(std::unique_ptr<BeginFrameResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<BeginFrameResult> result = BeginFrameResult::Parse(response, &errors);
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

Domain::Domain(internal::MessageDispatcher* dispatcher)
    : dispatcher_(dispatcher) {
}

Domain::~Domain() {}

ExperimentalDomain::ExperimentalDomain(internal::MessageDispatcher* dispatcher)
    : Domain(dispatcher) {}

ExperimentalDomain::~ExperimentalDomain() {}


}  // namespace headless_experimental

} // namespace headless
