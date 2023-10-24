// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_ACCESSIBILITY_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_ACCESSIBILITY_H_

#include "base/functional/callback.h"
#include "base/observer_list.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_accessibility.h"
#include "headless/public/devtools/domains/types_dom.h"
#include "headless/public/devtools/domains/types_debugger.h"
#include "headless/public/devtools/domains/types_emulation.h"
#include "headless/public/devtools/domains/types_io.h"
#include "headless/public/devtools/domains/types_network.h"
#include "headless/public/devtools/domains/types_page.h"
#include "headless/public/devtools/domains/types_runtime.h"
#include "headless/public/devtools/domains/types_security.h"
#include "headless/public/headless_export.h"
#include "headless/public/internal/message_dispatcher.h"


namespace headless {
namespace accessibility {
class HEADLESS_EXPORT ExperimentalDomain;
class HEADLESS_EXPORT ExperimentalObserver;

class HEADLESS_EXPORT ExperimentalObserver {
 public:
  virtual ~ExperimentalObserver() {}
  // The loadComplete event mirrors the load complete event sent by the browser to assistive
  // technology when the web page has finished loading.
  virtual void OnLoadComplete(const LoadCompleteParams& params) {}
  // The nodesUpdated event is sent every time a previously requested node has changed the in tree.
  virtual void OnNodesUpdated(const NodesUpdatedParams& params) {}
};

class HEADLESS_EXPORT Observer : public ExperimentalObserver {
 public:
  virtual ~Observer() {}
  // Experimental: The loadComplete event mirrors the load complete event sent by the browser to assistive
  // technology when the web page has finished loading.
  virtual void OnLoadComplete(const LoadCompleteParams& params) final {}
  // Experimental: The nodesUpdated event is sent every time a previously requested node has changed the in tree.
  virtual void OnNodesUpdated(const NodesUpdatedParams& params) final {}
};

class HEADLESS_EXPORT Domain {
 public:
  Domain(const Domain&) = delete;
  Domain& operator=(const Domain&) = delete;

  // Add or remove an observer. |observer| must be removed before being
  // destroyed.
  void AddObserver(Observer* observer);
  void RemoveObserver(Observer* observer);

  // Return the experimental interface for this domain. Note that experimental
  // commands may be changed or removed at any time.
  ExperimentalDomain* GetExperimental();

 protected:
  Domain(internal::MessageDispatcher* dispatcher);
  ~Domain();

  static void HandleDisableResponse(base::OnceCallback<void(std::unique_ptr<DisableResult>)> callback, const base::Value& response);
  static void HandleEnableResponse(base::OnceCallback<void(std::unique_ptr<EnableResult>)> callback, const base::Value& response);
  static void HandleGetPartialAXTreeResponse(base::OnceCallback<void(std::unique_ptr<GetPartialAXTreeResult>)> callback, const base::Value& response);
  static void HandleGetFullAXTreeResponse(base::OnceCallback<void(std::unique_ptr<GetFullAXTreeResult>)> callback, const base::Value& response);
  static void HandleGetRootAXNodeResponse(base::OnceCallback<void(std::unique_ptr<GetRootAXNodeResult>)> callback, const base::Value& response);
  static void HandleGetAXNodeAndAncestorsResponse(base::OnceCallback<void(std::unique_ptr<GetAXNodeAndAncestorsResult>)> callback, const base::Value& response);
  static void HandleGetChildAXNodesResponse(base::OnceCallback<void(std::unique_ptr<GetChildAXNodesResult>)> callback, const base::Value& response);
  static void HandleQueryAXTreeResponse(base::OnceCallback<void(std::unique_ptr<QueryAXTreeResult>)> callback, const base::Value& response);

  void DispatchLoadCompleteEvent(const base::Value& params);
  void DispatchNodesUpdatedEvent(const base::Value& params);

  internal::MessageDispatcher* dispatcher_;  // Not owned.
  base::ObserverList<ExperimentalObserver>::Unchecked observers_;

 protected:
  void RegisterEventHandlersIfNeeded();

 private:
  bool event_handlers_registered_ = false;

};

class ExperimentalDomain : public Domain {
 public:
  ExperimentalDomain(internal::MessageDispatcher* dispatcher);

  ExperimentalDomain(const ExperimentalDomain&) = delete;
  ExperimentalDomain& operator=(const ExperimentalDomain&) = delete;

  ~ExperimentalDomain();

  // Add or remove an observer. |observer| must be removed before being
  // destroyed.
  void AddObserver(ExperimentalObserver* observer);
  void RemoveObserver(ExperimentalObserver* observer);

  // Disables the accessibility domain.
  void Disable(std::unique_ptr<DisableParams> params, base::OnceCallback<void(std::unique_ptr<DisableResult>)> callback = base::OnceCallback<void(std::unique_ptr<DisableResult>)>());

  // Enables the accessibility domain which causes `AXNodeId`s to remain consistent between method calls.
  // This turns on accessibility for the page, which can impact performance until accessibility is disabled.
  void Enable(std::unique_ptr<EnableParams> params, base::OnceCallback<void(std::unique_ptr<EnableResult>)> callback = base::OnceCallback<void(std::unique_ptr<EnableResult>)>());

  // Fetches the accessibility node and partial accessibility tree for this DOM node, if it exists.
  void GetPartialAXTree(std::unique_ptr<GetPartialAXTreeParams> params, base::OnceCallback<void(std::unique_ptr<GetPartialAXTreeResult>)> callback = base::OnceCallback<void(std::unique_ptr<GetPartialAXTreeResult>)>());

  // Fetches the entire accessibility tree for the root Document
  void GetFullAXTree(std::unique_ptr<GetFullAXTreeParams> params, base::OnceCallback<void(std::unique_ptr<GetFullAXTreeResult>)> callback = base::OnceCallback<void(std::unique_ptr<GetFullAXTreeResult>)>());

  // Fetches the root node.
  // Requires `enable()` to have been called previously.
  void GetRootAXNode(std::unique_ptr<GetRootAXNodeParams> params, base::OnceCallback<void(std::unique_ptr<GetRootAXNodeResult>)> callback = base::OnceCallback<void(std::unique_ptr<GetRootAXNodeResult>)>());

  // Fetches a node and all ancestors up to and including the root.
  // Requires `enable()` to have been called previously.
  void GetAXNodeAndAncestors(std::unique_ptr<GetAXNodeAndAncestorsParams> params, base::OnceCallback<void(std::unique_ptr<GetAXNodeAndAncestorsResult>)> callback = base::OnceCallback<void(std::unique_ptr<GetAXNodeAndAncestorsResult>)>());

  // Fetches a particular accessibility node by AXNodeId.
  // Requires `enable()` to have been called previously.
  void GetChildAXNodes(std::unique_ptr<GetChildAXNodesParams> params, base::OnceCallback<void(std::unique_ptr<GetChildAXNodesResult>)> callback = base::OnceCallback<void(std::unique_ptr<GetChildAXNodesResult>)>());

  // Query a DOM node's accessibility subtree for accessible name and role.
  // This command computes the name and role for all nodes in the subtree, including those that are
  // ignored for accessibility, and returns those that mactch the specified name and role. If no DOM
  // node is specified, or the DOM node does not exist, the command returns an error. If neither
  // `accessibleName` or `role` is specified, it returns all the accessibility nodes in the subtree.
  void QueryAXTree(std::unique_ptr<QueryAXTreeParams> params, base::OnceCallback<void(std::unique_ptr<QueryAXTreeResult>)> callback = base::OnceCallback<void(std::unique_ptr<QueryAXTreeResult>)>());

};

}  // namespace accessibility
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_ACCESSIBILITY_H_
