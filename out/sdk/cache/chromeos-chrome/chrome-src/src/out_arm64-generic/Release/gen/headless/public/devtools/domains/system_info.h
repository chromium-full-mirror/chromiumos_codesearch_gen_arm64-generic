// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_SYSTEM_INFO_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_SYSTEM_INFO_H_

#include "base/functional/callback.h"
#include "base/observer_list.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_system_info.h"
#include "headless/public/headless_export.h"
#include "headless/public/internal/message_dispatcher.h"


namespace headless {
namespace system_info {
class HEADLESS_EXPORT ExperimentalDomain;
class HEADLESS_EXPORT ExperimentalObserver;

// The SystemInfo domain defines methods and events for querying low-level system information.
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

  static void HandleGetInfoResponse(base::OnceCallback<void(std::unique_ptr<GetInfoResult>)> callback, const base::Value& response);
  static void HandleGetFeatureStateResponse(base::OnceCallback<void(std::unique_ptr<GetFeatureStateResult>)> callback, const base::Value& response);
  static void HandleGetProcessInfoResponse(base::OnceCallback<void(std::unique_ptr<GetProcessInfoResult>)> callback, const base::Value& response);


  internal::MessageDispatcher* dispatcher_;  // Not owned.

 private:
};

class ExperimentalDomain : public Domain {
 public:
  ExperimentalDomain(internal::MessageDispatcher* dispatcher);

  ExperimentalDomain(const ExperimentalDomain&) = delete;
  ExperimentalDomain& operator=(const ExperimentalDomain&) = delete;

  ~ExperimentalDomain();


  // Returns information about the system.
  void GetInfo(std::unique_ptr<GetInfoParams> params, base::OnceCallback<void(std::unique_ptr<GetInfoResult>)> callback = base::OnceCallback<void(std::unique_ptr<GetInfoResult>)>());

  // Returns information about the feature state.
  void GetFeatureState(std::unique_ptr<GetFeatureStateParams> params, base::OnceCallback<void(std::unique_ptr<GetFeatureStateResult>)> callback = base::OnceCallback<void(std::unique_ptr<GetFeatureStateResult>)>());

  // Returns information about all running processes.
  void GetProcessInfo(std::unique_ptr<GetProcessInfoParams> params, base::OnceCallback<void(std::unique_ptr<GetProcessInfoResult>)> callback = base::OnceCallback<void(std::unique_ptr<GetProcessInfoResult>)>());

};

}  // namespace system_info
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_SYSTEM_INFO_H_
