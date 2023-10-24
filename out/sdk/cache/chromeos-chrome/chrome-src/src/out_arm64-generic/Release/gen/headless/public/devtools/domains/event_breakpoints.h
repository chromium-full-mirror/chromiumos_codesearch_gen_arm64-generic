// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_EVENT_BREAKPOINTS_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_EVENT_BREAKPOINTS_H_

#include "base/functional/callback.h"
#include "base/observer_list.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_event_breakpoints.h"
#include "headless/public/headless_export.h"
#include "headless/public/internal/message_dispatcher.h"


namespace headless {
namespace event_breakpoints {
class HEADLESS_EXPORT ExperimentalDomain;
class HEADLESS_EXPORT ExperimentalObserver;

// EventBreakpoints permits setting JavaScript breakpoints on operations and events
// occurring in native code invoked from JavaScript. Once breakpoint is hit, it is
// reported through Debugger domain, similarly to regular breakpoints being hit.
class HEADLESS_EXPORT Domain {
 public:
  Domain(const Domain&) = delete;
  Domain& operator=(const Domain&) = delete;


  // Return the experimental interface for this domain. Note that experimental
  // commands may be changed or removed at any time.
  ExperimentalDomain* GetExperimental();

 protected:
  Domain(internal::MessageDispatcher* dispatcher);
  ~Domain();

  static void HandleSetInstrumentationBreakpointResponse(base::OnceCallback<void(std::unique_ptr<SetInstrumentationBreakpointResult>)> callback, const base::Value& response);
  static void HandleRemoveInstrumentationBreakpointResponse(base::OnceCallback<void(std::unique_ptr<RemoveInstrumentationBreakpointResult>)> callback, const base::Value& response);
  static void HandleDisableResponse(base::OnceCallback<void(std::unique_ptr<DisableResult>)> callback, const base::Value& response);


  internal::MessageDispatcher* dispatcher_;  // Not owned.

 private:
};

class ExperimentalDomain : public Domain {
 public:
  ExperimentalDomain(internal::MessageDispatcher* dispatcher);

  ExperimentalDomain(const ExperimentalDomain&) = delete;
  ExperimentalDomain& operator=(const ExperimentalDomain&) = delete;

  ~ExperimentalDomain();


  // Sets breakpoint on particular native event.
  void SetInstrumentationBreakpoint(std::unique_ptr<SetInstrumentationBreakpointParams> params, base::OnceCallback<void(std::unique_ptr<SetInstrumentationBreakpointResult>)> callback = base::OnceCallback<void(std::unique_ptr<SetInstrumentationBreakpointResult>)>());

  // Removes breakpoint on particular native event.
  void RemoveInstrumentationBreakpoint(std::unique_ptr<RemoveInstrumentationBreakpointParams> params, base::OnceCallback<void(std::unique_ptr<RemoveInstrumentationBreakpointResult>)> callback = base::OnceCallback<void(std::unique_ptr<RemoveInstrumentationBreakpointResult>)>());

  // Removes all breakpoints
  void Disable(std::unique_ptr<DisableParams> params, base::OnceCallback<void(std::unique_ptr<DisableResult>)> callback = base::OnceCallback<void(std::unique_ptr<DisableResult>)>());

};

}  // namespace event_breakpoints
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_EVENT_BREAKPOINTS_H_
