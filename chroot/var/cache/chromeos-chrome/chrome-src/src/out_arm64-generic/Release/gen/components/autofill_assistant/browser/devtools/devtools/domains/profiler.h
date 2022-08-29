// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Copied and modified from
// https://chromium.googlesource.com/chromium/src/+/a3f9d4fac81fc86065d867ab08fa4912ddf662c7/headless/lib/browser/devtools_api/domain_h.template
// Modifications include namespace and path.

#ifndef COMPONENTS_AUTOFILL_ASSISTANT_BROWSER_DEVTOOLS_DEVTOOLS_DOMAINS_PROFILER_H_
#define COMPONENTS_AUTOFILL_ASSISTANT_BROWSER_DEVTOOLS_DEVTOOLS_DOMAINS_PROFILER_H_

#include "base/callback.h"
#include "base/observer_list.h"
#include "base/values.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_debugger.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_profiler.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_runtime.h"
#include "components/autofill_assistant/browser/devtools/message_dispatcher.h"


namespace autofill_assistant {
namespace profiler {
class ExperimentalDomain;
class ExperimentalObserver;

class ExperimentalObserver {
 public:
  virtual ~ExperimentalObserver() {}
  virtual void OnConsoleProfileFinished(const ConsoleProfileFinishedParams& params) {}
  // Sent when new profile recording is started using console.profile() call.
  virtual void OnConsoleProfileStarted(const ConsoleProfileStartedParams& params) {}
  // Reports coverage delta since the last poll (either from an event like this, or from
  // `takePreciseCoverage` for the current isolate. May only be sent if precise code
  // coverage has been started. This event can be trigged by the embedder to, for example,
  // trigger collection of coverage data immediately at a certain point in time.
  virtual void OnPreciseCoverageDeltaUpdate(const PreciseCoverageDeltaUpdateParams& params) {}
};

class Observer : public ExperimentalObserver {
 public:
  virtual ~Observer() {}
  virtual void OnConsoleProfileFinished(const ConsoleProfileFinishedParams& params) {}
  // Sent when new profile recording is started using console.profile() call.
  virtual void OnConsoleProfileStarted(const ConsoleProfileStartedParams& params) {}
  // Experimental: Reports coverage delta since the last poll (either from an event like this, or from
  // `takePreciseCoverage` for the current isolate. May only be sent if precise code
  // coverage has been started. This event can be trigged by the embedder to, for example,
  // trigger collection of coverage data immediately at a certain point in time.
  virtual void OnPreciseCoverageDeltaUpdate(const PreciseCoverageDeltaUpdateParams& params) final {}
};

class Domain {
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

  void Disable(std::unique_ptr<DisableParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DisableResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DisableResult>)>());
  void Disable(const std::string& optional_node_frame_id,
base::OnceClosure callback = base::OnceClosure());
  void Disable(std::unique_ptr<DisableParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback);

  void Enable(std::unique_ptr<EnableParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EnableResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EnableResult>)>());
  void Enable(const std::string& optional_node_frame_id,
base::OnceClosure callback = base::OnceClosure());
  void Enable(std::unique_ptr<EnableParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback);

  // Collect coverage data for the current isolate. The coverage data may be incomplete due to
  // garbage collection.
  void GetBestEffortCoverage(std::unique_ptr<GetBestEffortCoverageParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetBestEffortCoverageResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetBestEffortCoverageResult>)>());
  void GetBestEffortCoverage(const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetBestEffortCoverageResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetBestEffortCoverageResult>)>());

  // Changes CPU profiler sampling interval. Must be called before CPU profiles recording started.
  void SetSamplingInterval(std::unique_ptr<SetSamplingIntervalParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetSamplingIntervalResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetSamplingIntervalResult>)>());
  void SetSamplingInterval(int interval, const std::string& optional_node_frame_id,
base::OnceClosure callback = base::OnceClosure());
  void SetSamplingInterval(std::unique_ptr<SetSamplingIntervalParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback);

  void Start(std::unique_ptr<StartParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StartResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StartResult>)>());
  void Start(const std::string& optional_node_frame_id,
base::OnceClosure callback = base::OnceClosure());
  void Start(std::unique_ptr<StartParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback);

  // Enable precise code coverage. Coverage data for JavaScript executed before enabling precise code
  // coverage may be incomplete. Enabling prevents running optimized code and resets execution
  // counters.
  void StartPreciseCoverage(std::unique_ptr<StartPreciseCoverageParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StartPreciseCoverageResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StartPreciseCoverageResult>)>());
  void StartPreciseCoverage(const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StartPreciseCoverageResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StartPreciseCoverageResult>)>());

  void Stop(std::unique_ptr<StopParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StopResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StopResult>)>());
  void Stop(const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StopResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StopResult>)>());

  // Disable precise code coverage. Disabling releases unnecessary execution count records and allows
  // executing optimized code.
  void StopPreciseCoverage(std::unique_ptr<StopPreciseCoverageParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StopPreciseCoverageResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StopPreciseCoverageResult>)>());
  void StopPreciseCoverage(const std::string& optional_node_frame_id,
base::OnceClosure callback = base::OnceClosure());
  void StopPreciseCoverage(std::unique_ptr<StopPreciseCoverageParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback);

  // Collect coverage data for the current isolate, and resets execution counters. Precise code
  // coverage needs to have started.
  void TakePreciseCoverage(std::unique_ptr<TakePreciseCoverageParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TakePreciseCoverageResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TakePreciseCoverageResult>)>());
  void TakePreciseCoverage(const std::string& optional_node_frame_id,
base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TakePreciseCoverageResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TakePreciseCoverageResult>)>());

 protected:
  Domain(MessageDispatcher* dispatcher);
  ~Domain();

  static void HandleDisableResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DisableResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleEnableResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EnableResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleGetBestEffortCoverageResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<GetBestEffortCoverageResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleSetSamplingIntervalResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetSamplingIntervalResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleStartResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StartResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleStartPreciseCoverageResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StartPreciseCoverageResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleStartTypeProfileResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StartTypeProfileResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleStopResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StopResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleStopPreciseCoverageResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StopPreciseCoverageResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleStopTypeProfileResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StopTypeProfileResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleTakePreciseCoverageResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TakePreciseCoverageResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleTakeTypeProfileResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TakeTypeProfileResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);

  void DispatchConsoleProfileFinishedEvent(const base::Value& params);
  void DispatchConsoleProfileStartedEvent(const base::Value& params);
  void DispatchPreciseCoverageDeltaUpdateEvent(const base::Value& params);

  MessageDispatcher* dispatcher_;  // Not owned.
  base::ObserverList<ExperimentalObserver>::Unchecked observers_;

 protected:
  void RegisterEventHandlersIfNeeded();

 private:
  bool event_handlers_registered_ = false;

};

class ExperimentalDomain : public Domain {
 public:
  ExperimentalDomain(MessageDispatcher* dispatcher);

  ExperimentalDomain(const ExperimentalDomain&) = delete;
  ExperimentalDomain& operator=(const ExperimentalDomain&) = delete;

  ~ExperimentalDomain();

  // Add or remove an observer. |observer| must be removed before being
  // destroyed.
  void AddObserver(ExperimentalObserver* observer);
  void RemoveObserver(ExperimentalObserver* observer);

  // Enable type profile.
  void StartTypeProfile(std::unique_ptr<StartTypeProfileParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StartTypeProfileResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StartTypeProfileResult>)>());

  // Disable type profile. Disabling releases type profile data collected so far.
  void StopTypeProfile(std::unique_ptr<StopTypeProfileParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StopTypeProfileResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<StopTypeProfileResult>)>());

  // Collect type profile.
  void TakeTypeProfile(std::unique_ptr<TakeTypeProfileParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TakeTypeProfileResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<TakeTypeProfileResult>)>());

};

}  // namespace profiler
}  // namespace autofill_assistant

#endif  // COMPONENTS_AUTOFILL_ASSISTANT_BROWSER_DEVTOOLS_DEVTOOLS_DOMAINS_PROFILER_H_
