// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_PRELOAD_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_PRELOAD_H_

#include "base/functional/callback.h"
#include "base/observer_list.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_dom.h"
#include "headless/public/devtools/domains/types_debugger.h"
#include "headless/public/devtools/domains/types_emulation.h"
#include "headless/public/devtools/domains/types_io.h"
#include "headless/public/devtools/domains/types_network.h"
#include "headless/public/devtools/domains/types_page.h"
#include "headless/public/devtools/domains/types_preload.h"
#include "headless/public/devtools/domains/types_runtime.h"
#include "headless/public/devtools/domains/types_security.h"
#include "headless/public/headless_export.h"
#include "headless/public/internal/message_dispatcher.h"


namespace headless {
namespace preload {
class HEADLESS_EXPORT ExperimentalDomain;
class HEADLESS_EXPORT ExperimentalObserver;

class HEADLESS_EXPORT ExperimentalObserver {
 public:
  virtual ~ExperimentalObserver() {}
  // Upsert. Currently, it is only emitted when a rule set added.
  virtual void OnRuleSetUpdated(const RuleSetUpdatedParams& params) {}
  virtual void OnRuleSetRemoved(const RuleSetRemovedParams& params) {}
  // Fired when a preload enabled state is updated.
  virtual void OnPreloadEnabledStateUpdated(const PreloadEnabledStateUpdatedParams& params) {}
  // Fired when a prefetch attempt is updated.
  virtual void OnPrefetchStatusUpdated(const PrefetchStatusUpdatedParams& params) {}
  // Fired when a prerender attempt is updated.
  virtual void OnPrerenderStatusUpdated(const PrerenderStatusUpdatedParams& params) {}
  // Send a list of sources for all preloading attempts in a document.
  virtual void OnPreloadingAttemptSourcesUpdated(const PreloadingAttemptSourcesUpdatedParams& params) {}
};

class HEADLESS_EXPORT Observer : public ExperimentalObserver {
 public:
  virtual ~Observer() {}
  // Experimental: Upsert. Currently, it is only emitted when a rule set added.
  virtual void OnRuleSetUpdated(const RuleSetUpdatedParams& params) final {}
  virtual void OnRuleSetRemoved(const RuleSetRemovedParams& params) final {}
  // Experimental: Fired when a preload enabled state is updated.
  virtual void OnPreloadEnabledStateUpdated(const PreloadEnabledStateUpdatedParams& params) final {}
  // Experimental: Fired when a prefetch attempt is updated.
  virtual void OnPrefetchStatusUpdated(const PrefetchStatusUpdatedParams& params) final {}
  // Experimental: Fired when a prerender attempt is updated.
  virtual void OnPrerenderStatusUpdated(const PrerenderStatusUpdatedParams& params) final {}
  // Experimental: Send a list of sources for all preloading attempts in a document.
  virtual void OnPreloadingAttemptSourcesUpdated(const PreloadingAttemptSourcesUpdatedParams& params) final {}
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

  static void HandleEnableResponse(base::OnceCallback<void(std::unique_ptr<EnableResult>)> callback, const base::Value& response);
  static void HandleDisableResponse(base::OnceCallback<void(std::unique_ptr<DisableResult>)> callback, const base::Value& response);

  void DispatchRuleSetUpdatedEvent(const base::Value& params);
  void DispatchRuleSetRemovedEvent(const base::Value& params);
  void DispatchPreloadEnabledStateUpdatedEvent(const base::Value& params);
  void DispatchPrefetchStatusUpdatedEvent(const base::Value& params);
  void DispatchPrerenderStatusUpdatedEvent(const base::Value& params);
  void DispatchPreloadingAttemptSourcesUpdatedEvent(const base::Value& params);

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

  void Enable(std::unique_ptr<EnableParams> params, base::OnceCallback<void(std::unique_ptr<EnableResult>)> callback = base::OnceCallback<void(std::unique_ptr<EnableResult>)>());

  void Disable(std::unique_ptr<DisableParams> params, base::OnceCallback<void(std::unique_ptr<DisableResult>)> callback = base::OnceCallback<void(std::unique_ptr<DisableResult>)>());

};

}  // namespace preload
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_PRELOAD_H_
