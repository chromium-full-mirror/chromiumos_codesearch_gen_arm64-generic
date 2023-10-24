// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_AUTOFILL_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_AUTOFILL_H_

#include "base/functional/callback.h"
#include "base/observer_list.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_autofill.h"
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
namespace autofill {
class HEADLESS_EXPORT ExperimentalDomain;
class HEADLESS_EXPORT ExperimentalObserver;

class HEADLESS_EXPORT ExperimentalObserver {
 public:
  virtual ~ExperimentalObserver() {}
  // Emitted when an address form is filled.
  virtual void OnAddressFormFilled(const AddressFormFilledParams& params) {}
};

class HEADLESS_EXPORT Observer : public ExperimentalObserver {
 public:
  virtual ~Observer() {}
  // Experimental: Emitted when an address form is filled.
  virtual void OnAddressFormFilled(const AddressFormFilledParams& params) final {}
};

// Defines commands and events for Autofill.
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

  static void HandleTriggerResponse(base::OnceCallback<void(std::unique_ptr<TriggerResult>)> callback, const base::Value& response);
  static void HandleSetAddressesResponse(base::OnceCallback<void(std::unique_ptr<SetAddressesResult>)> callback, const base::Value& response);
  static void HandleDisableResponse(base::OnceCallback<void(std::unique_ptr<DisableResult>)> callback, const base::Value& response);
  static void HandleEnableResponse(base::OnceCallback<void(std::unique_ptr<EnableResult>)> callback, const base::Value& response);

  void DispatchAddressFormFilledEvent(const base::Value& params);

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

  // Trigger autofill on a form identified by the fieldId.
  // If the field and related form cannot be autofilled, returns an error.
  void Trigger(std::unique_ptr<TriggerParams> params, base::OnceCallback<void(std::unique_ptr<TriggerResult>)> callback = base::OnceCallback<void(std::unique_ptr<TriggerResult>)>());

  // Set addresses so that developers can verify their forms implementation.
  void SetAddresses(std::unique_ptr<SetAddressesParams> params, base::OnceCallback<void(std::unique_ptr<SetAddressesResult>)> callback = base::OnceCallback<void(std::unique_ptr<SetAddressesResult>)>());

  // Disables autofill domain notifications.
  void Disable(std::unique_ptr<DisableParams> params, base::OnceCallback<void(std::unique_ptr<DisableResult>)> callback = base::OnceCallback<void(std::unique_ptr<DisableResult>)>());

  // Enables autofill domain notifications.
  void Enable(std::unique_ptr<EnableParams> params, base::OnceCallback<void(std::unique_ptr<EnableResult>)> callback = base::OnceCallback<void(std::unique_ptr<EnableResult>)>());

};

}  // namespace autofill
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_AUTOFILL_H_
