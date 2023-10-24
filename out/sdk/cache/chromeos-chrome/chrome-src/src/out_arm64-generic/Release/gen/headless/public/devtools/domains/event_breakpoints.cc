// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/event_breakpoints.h"

#include "base/functional/bind.h"
#include "headless/public/util/error_reporter.h"

namespace headless {

namespace event_breakpoints {

ExperimentalDomain* Domain::GetExperimental() {
  return static_cast<ExperimentalDomain*>(this);
}


void ExperimentalDomain::SetInstrumentationBreakpoint(std::unique_ptr<SetInstrumentationBreakpointParams> params, base::OnceCallback<void(std::unique_ptr<SetInstrumentationBreakpointResult>)> callback) {
  dispatcher_->SendMessage("EventBreakpoints.setInstrumentationBreakpoint", params->Serialize(), base::BindOnce(&Domain::HandleSetInstrumentationBreakpointResponse, std::move(callback)));
}
void ExperimentalDomain::RemoveInstrumentationBreakpoint(std::unique_ptr<RemoveInstrumentationBreakpointParams> params, base::OnceCallback<void(std::unique_ptr<RemoveInstrumentationBreakpointResult>)> callback) {
  dispatcher_->SendMessage("EventBreakpoints.removeInstrumentationBreakpoint", params->Serialize(), base::BindOnce(&Domain::HandleRemoveInstrumentationBreakpointResponse, std::move(callback)));
}
void ExperimentalDomain::Disable(std::unique_ptr<DisableParams> params, base::OnceCallback<void(std::unique_ptr<DisableResult>)> callback) {
  dispatcher_->SendMessage("EventBreakpoints.disable", params->Serialize(), base::BindOnce(&Domain::HandleDisableResponse, std::move(callback)));
}


// static
void Domain::HandleSetInstrumentationBreakpointResponse(base::OnceCallback<void(std::unique_ptr<SetInstrumentationBreakpointResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<SetInstrumentationBreakpointResult> result = SetInstrumentationBreakpointResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleRemoveInstrumentationBreakpointResponse(base::OnceCallback<void(std::unique_ptr<RemoveInstrumentationBreakpointResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<RemoveInstrumentationBreakpointResult> result = RemoveInstrumentationBreakpointResult::Parse(response, &errors);
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

Domain::Domain(internal::MessageDispatcher* dispatcher)
    : dispatcher_(dispatcher) {
}

Domain::~Domain() {}

ExperimentalDomain::ExperimentalDomain(internal::MessageDispatcher* dispatcher)
    : Domain(dispatcher) {}

ExperimentalDomain::~ExperimentalDomain() {}


}  // namespace event_breakpoints

} // namespace headless
