// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/system_info.h"

#include "base/functional/bind.h"
#include "headless/public/util/error_reporter.h"

namespace headless {

namespace system_info {

ExperimentalDomain* Domain::GetExperimental() {
  return static_cast<ExperimentalDomain*>(this);
}


void ExperimentalDomain::GetInfo(std::unique_ptr<GetInfoParams> params, base::OnceCallback<void(std::unique_ptr<GetInfoResult>)> callback) {
  dispatcher_->SendMessage("SystemInfo.getInfo", params->Serialize(), base::BindOnce(&Domain::HandleGetInfoResponse, std::move(callback)));
}
void ExperimentalDomain::GetFeatureState(std::unique_ptr<GetFeatureStateParams> params, base::OnceCallback<void(std::unique_ptr<GetFeatureStateResult>)> callback) {
  dispatcher_->SendMessage("SystemInfo.getFeatureState", params->Serialize(), base::BindOnce(&Domain::HandleGetFeatureStateResponse, std::move(callback)));
}
void ExperimentalDomain::GetProcessInfo(std::unique_ptr<GetProcessInfoParams> params, base::OnceCallback<void(std::unique_ptr<GetProcessInfoResult>)> callback) {
  dispatcher_->SendMessage("SystemInfo.getProcessInfo", params->Serialize(), base::BindOnce(&Domain::HandleGetProcessInfoResponse, std::move(callback)));
}


// static
void Domain::HandleGetInfoResponse(base::OnceCallback<void(std::unique_ptr<GetInfoResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetInfoResult> result = GetInfoResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleGetFeatureStateResponse(base::OnceCallback<void(std::unique_ptr<GetFeatureStateResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetFeatureStateResult> result = GetFeatureStateResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleGetProcessInfoResponse(base::OnceCallback<void(std::unique_ptr<GetProcessInfoResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetProcessInfoResult> result = GetProcessInfoResult::Parse(response, &errors);
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


}  // namespace system_info

} // namespace headless
