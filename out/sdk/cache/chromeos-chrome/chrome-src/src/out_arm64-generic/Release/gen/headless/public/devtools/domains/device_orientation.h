// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_DEVICE_ORIENTATION_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_DEVICE_ORIENTATION_H_

#include "base/functional/callback.h"
#include "base/observer_list.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_device_orientation.h"
#include "headless/public/headless_export.h"
#include "headless/public/internal/message_dispatcher.h"


namespace headless {
namespace device_orientation {
class HEADLESS_EXPORT ExperimentalDomain;
class HEADLESS_EXPORT ExperimentalObserver;

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

  static void HandleClearDeviceOrientationOverrideResponse(base::OnceCallback<void(std::unique_ptr<ClearDeviceOrientationOverrideResult>)> callback, const base::Value& response);
  static void HandleSetDeviceOrientationOverrideResponse(base::OnceCallback<void(std::unique_ptr<SetDeviceOrientationOverrideResult>)> callback, const base::Value& response);


  internal::MessageDispatcher* dispatcher_;  // Not owned.

 private:
};

class ExperimentalDomain : public Domain {
 public:
  ExperimentalDomain(internal::MessageDispatcher* dispatcher);

  ExperimentalDomain(const ExperimentalDomain&) = delete;
  ExperimentalDomain& operator=(const ExperimentalDomain&) = delete;

  ~ExperimentalDomain();


  // Clears the overridden Device Orientation.
  void ClearDeviceOrientationOverride(std::unique_ptr<ClearDeviceOrientationOverrideParams> params, base::OnceCallback<void(std::unique_ptr<ClearDeviceOrientationOverrideResult>)> callback = base::OnceCallback<void(std::unique_ptr<ClearDeviceOrientationOverrideResult>)>());

  // Overrides the Device Orientation.
  void SetDeviceOrientationOverride(std::unique_ptr<SetDeviceOrientationOverrideParams> params, base::OnceCallback<void(std::unique_ptr<SetDeviceOrientationOverrideResult>)> callback = base::OnceCallback<void(std::unique_ptr<SetDeviceOrientationOverrideResult>)>());

};

}  // namespace device_orientation
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_DEVICE_ORIENTATION_H_
