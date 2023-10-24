// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_DEVICE_ACCESS_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_DEVICE_ACCESS_H_

#include "base/functional/callback.h"
#include "base/observer_list.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_device_access.h"
#include "headless/public/headless_export.h"
#include "headless/public/internal/message_dispatcher.h"


namespace headless {
namespace device_access {
class HEADLESS_EXPORT ExperimentalDomain;
class HEADLESS_EXPORT ExperimentalObserver;

class HEADLESS_EXPORT ExperimentalObserver {
 public:
  virtual ~ExperimentalObserver() {}
  // A device request opened a user prompt to select a device. Respond with the
  // selectPrompt or cancelPrompt command.
  virtual void OnDeviceRequestPrompted(const DeviceRequestPromptedParams& params) {}
};

class HEADLESS_EXPORT Observer : public ExperimentalObserver {
 public:
  virtual ~Observer() {}
  // Experimental: A device request opened a user prompt to select a device. Respond with the
  // selectPrompt or cancelPrompt command.
  virtual void OnDeviceRequestPrompted(const DeviceRequestPromptedParams& params) final {}
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
  static void HandleSelectPromptResponse(base::OnceCallback<void(std::unique_ptr<SelectPromptResult>)> callback, const base::Value& response);
  static void HandleCancelPromptResponse(base::OnceCallback<void(std::unique_ptr<CancelPromptResult>)> callback, const base::Value& response);

  void DispatchDeviceRequestPromptedEvent(const base::Value& params);

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

  // Enable events in this domain.
  void Enable(std::unique_ptr<EnableParams> params, base::OnceCallback<void(std::unique_ptr<EnableResult>)> callback = base::OnceCallback<void(std::unique_ptr<EnableResult>)>());

  // Disable events in this domain.
  void Disable(std::unique_ptr<DisableParams> params, base::OnceCallback<void(std::unique_ptr<DisableResult>)> callback = base::OnceCallback<void(std::unique_ptr<DisableResult>)>());

  // Select a device in response to a DeviceAccess.deviceRequestPrompted event.
  void SelectPrompt(std::unique_ptr<SelectPromptParams> params, base::OnceCallback<void(std::unique_ptr<SelectPromptResult>)> callback = base::OnceCallback<void(std::unique_ptr<SelectPromptResult>)>());

  // Cancel a prompt in response to a DeviceAccess.deviceRequestPrompted event.
  void CancelPrompt(std::unique_ptr<CancelPromptParams> params, base::OnceCallback<void(std::unique_ptr<CancelPromptResult>)> callback = base::OnceCallback<void(std::unique_ptr<CancelPromptResult>)>());

};

}  // namespace device_access
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_DEVICE_ACCESS_H_
