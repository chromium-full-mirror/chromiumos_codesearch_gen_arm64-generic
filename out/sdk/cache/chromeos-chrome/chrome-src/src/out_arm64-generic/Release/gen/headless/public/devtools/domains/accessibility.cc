// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/accessibility.h"

#include "base/functional/bind.h"
#include "headless/public/util/error_reporter.h"

namespace headless {

namespace accessibility {

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
      "Accessibility.loadComplete",
      base::BindRepeating(&Domain::DispatchLoadCompleteEvent,
                          base::Unretained(this)));
  dispatcher_->RegisterEventHandler(
      "Accessibility.nodesUpdated",
      base::BindRepeating(&Domain::DispatchNodesUpdatedEvent,
                          base::Unretained(this)));
}

void ExperimentalDomain::Disable(std::unique_ptr<DisableParams> params, base::OnceCallback<void(std::unique_ptr<DisableResult>)> callback) {
  dispatcher_->SendMessage("Accessibility.disable", params->Serialize(), base::BindOnce(&Domain::HandleDisableResponse, std::move(callback)));
}
void ExperimentalDomain::Enable(std::unique_ptr<EnableParams> params, base::OnceCallback<void(std::unique_ptr<EnableResult>)> callback) {
  dispatcher_->SendMessage("Accessibility.enable", params->Serialize(), base::BindOnce(&Domain::HandleEnableResponse, std::move(callback)));
}
void ExperimentalDomain::GetPartialAXTree(std::unique_ptr<GetPartialAXTreeParams> params, base::OnceCallback<void(std::unique_ptr<GetPartialAXTreeResult>)> callback) {
  dispatcher_->SendMessage("Accessibility.getPartialAXTree", params->Serialize(), base::BindOnce(&Domain::HandleGetPartialAXTreeResponse, std::move(callback)));
}
void ExperimentalDomain::GetFullAXTree(std::unique_ptr<GetFullAXTreeParams> params, base::OnceCallback<void(std::unique_ptr<GetFullAXTreeResult>)> callback) {
  dispatcher_->SendMessage("Accessibility.getFullAXTree", params->Serialize(), base::BindOnce(&Domain::HandleGetFullAXTreeResponse, std::move(callback)));
}
void ExperimentalDomain::GetRootAXNode(std::unique_ptr<GetRootAXNodeParams> params, base::OnceCallback<void(std::unique_ptr<GetRootAXNodeResult>)> callback) {
  dispatcher_->SendMessage("Accessibility.getRootAXNode", params->Serialize(), base::BindOnce(&Domain::HandleGetRootAXNodeResponse, std::move(callback)));
}
void ExperimentalDomain::GetAXNodeAndAncestors(std::unique_ptr<GetAXNodeAndAncestorsParams> params, base::OnceCallback<void(std::unique_ptr<GetAXNodeAndAncestorsResult>)> callback) {
  dispatcher_->SendMessage("Accessibility.getAXNodeAndAncestors", params->Serialize(), base::BindOnce(&Domain::HandleGetAXNodeAndAncestorsResponse, std::move(callback)));
}
void ExperimentalDomain::GetChildAXNodes(std::unique_ptr<GetChildAXNodesParams> params, base::OnceCallback<void(std::unique_ptr<GetChildAXNodesResult>)> callback) {
  dispatcher_->SendMessage("Accessibility.getChildAXNodes", params->Serialize(), base::BindOnce(&Domain::HandleGetChildAXNodesResponse, std::move(callback)));
}
void ExperimentalDomain::QueryAXTree(std::unique_ptr<QueryAXTreeParams> params, base::OnceCallback<void(std::unique_ptr<QueryAXTreeResult>)> callback) {
  dispatcher_->SendMessage("Accessibility.queryAXTree", params->Serialize(), base::BindOnce(&Domain::HandleQueryAXTreeResponse, std::move(callback)));
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
void Domain::HandleGetPartialAXTreeResponse(base::OnceCallback<void(std::unique_ptr<GetPartialAXTreeResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetPartialAXTreeResult> result = GetPartialAXTreeResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleGetFullAXTreeResponse(base::OnceCallback<void(std::unique_ptr<GetFullAXTreeResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetFullAXTreeResult> result = GetFullAXTreeResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleGetRootAXNodeResponse(base::OnceCallback<void(std::unique_ptr<GetRootAXNodeResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetRootAXNodeResult> result = GetRootAXNodeResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleGetAXNodeAndAncestorsResponse(base::OnceCallback<void(std::unique_ptr<GetAXNodeAndAncestorsResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetAXNodeAndAncestorsResult> result = GetAXNodeAndAncestorsResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleGetChildAXNodesResponse(base::OnceCallback<void(std::unique_ptr<GetChildAXNodesResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<GetChildAXNodesResult> result = GetChildAXNodesResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

// static
void Domain::HandleQueryAXTreeResponse(base::OnceCallback<void(std::unique_ptr<QueryAXTreeResult>)> callback, const base::Value& response) {
  if (callback.is_null())
    return;
  // This is an error response.
  if (response.is_none()) {
    std::move(callback).Run(nullptr);
    return;
  }
  ErrorReporter errors;
  std::unique_ptr<QueryAXTreeResult> result = QueryAXTreeResult::Parse(response, &errors);
  DCHECK(!errors.HasErrors()) << errors.ToString();
  std::move(callback).Run(std::move(result));
}

void Domain::DispatchLoadCompleteEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<LoadCompleteParams> parsed_params(LoadCompleteParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnLoadComplete(*parsed_params);
  }
}

void Domain::DispatchNodesUpdatedEvent(const base::Value& params) {
  ErrorReporter errors;
  std::unique_ptr<NodesUpdatedParams> parsed_params(NodesUpdatedParams::Parse(params, &errors));
  DCHECK(!errors.HasErrors()) << errors.ToString();
  for (ExperimentalObserver& observer : observers_) {
    observer.OnNodesUpdated(*parsed_params);
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

}  // namespace accessibility

} // namespace headless
