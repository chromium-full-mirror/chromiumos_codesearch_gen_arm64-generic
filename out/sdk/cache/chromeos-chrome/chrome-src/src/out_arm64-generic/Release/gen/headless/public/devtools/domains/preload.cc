// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/preload.h"

#include "base/functional/bind.h"
#include "headless/public/util/error_reporter.h"

namespace headless {

namespace preload {

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
      "Preload.ruleSetUpdated",
      base::BindRepeating(&Domain::DispatchRuleSetUpdatedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Preload.ruleSetRemoved",
      base::BindRepeating(&Domain::DispatchRuleSetRemovedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Preload.preloadEnabledStateUpdated",
      base::BindRepeating(&Domain::DispatchPreloadEnabledStateUpdatedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Preload.prefetchStatusUpdated",
      base::BindRepeating(&Domain::DispatchPrefetchStatusUpdatedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Preload.prerenderStatusUpdated",
      base::BindRepeating(&Domain::DispatchPrerenderStatusUpdatedEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Preload.preloadingAttemptSourcesUpdated",
      base::BindRepeating(&Domain::DispatchPreloadingAttemptSourcesUpdatedEvent,
                          base::Unretained(this)));
}

void ExperimentalDomain::Enable(std::unique_ptr<EnableParams> params, base::OnceCallback<void(std::unique_ptr<EnableResult>)> callback) {
  dispatcher_->SendMessage("Preload.enable", params->Serialize(), base::BindOnce(&Domain::HandleEnableResponse, std::move(callback)));
}
void ExperimentalDomain::Disable(std::unique_ptr<DisableParams> params, base::OnceCallback<void(std::unique_ptr<DisableResult>)> callback) {
  dispatcher_->SendMessage("Preload.disable", params->Serialize(), base::BindOnce(&Domain::HandleDisableResponse, std::move(callback)));
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

void Domain::DispatchRuleSetUpdatedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<RuleSetUpdatedParams> parsed_params(RuleSetUpdatedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnRuleSetUpdated(*parsed_params);
  }
}

void Domain::DispatchRuleSetRemovedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<RuleSetRemovedParams> parsed_params(RuleSetRemovedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnRuleSetRemoved(*parsed_params);
  }
}

void Domain::DispatchPreloadEnabledStateUpdatedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<PreloadEnabledStateUpdatedParams> parsed_params(PreloadEnabledStateUpdatedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnPreloadEnabledStateUpdated(*parsed_params);
  }
}

void Domain::DispatchPrefetchStatusUpdatedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<PrefetchStatusUpdatedParams> parsed_params(PrefetchStatusUpdatedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnPrefetchStatusUpdated(*parsed_params);
  }
}

void Domain::DispatchPrerenderStatusUpdatedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<PrerenderStatusUpdatedParams> parsed_params(PrerenderStatusUpdatedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnPrerenderStatusUpdated(*parsed_params);
  }
}

void Domain::DispatchPreloadingAttemptSourcesUpdatedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<PreloadingAttemptSourcesUpdatedParams> parsed_params(PreloadingAttemptSourcesUpdatedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnPreloadingAttemptSourcesUpdated(*parsed_params);
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

}  // namespace preload

} // namespace headless
