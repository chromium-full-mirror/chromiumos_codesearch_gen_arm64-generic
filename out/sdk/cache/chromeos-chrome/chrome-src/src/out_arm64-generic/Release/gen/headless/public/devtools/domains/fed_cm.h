// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_FED_CM_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_FED_CM_H_

#include "base/functional/callback.h"
#include "base/observer_list.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_fed_cm.h"
#include "headless/public/headless_export.h"
#include "headless/public/internal/message_dispatcher.h"


namespace headless {
namespace fed_cm {
class HEADLESS_EXPORT ExperimentalDomain;
class HEADLESS_EXPORT ExperimentalObserver;

class HEADLESS_EXPORT ExperimentalObserver {
 public:
  virtual ~ExperimentalObserver() {}
  virtual void OnDialogShown(const DialogShownParams& params) {}
};

class HEADLESS_EXPORT Observer : public ExperimentalObserver {
 public:
  virtual ~Observer() {}
  virtual void OnDialogShown(const DialogShownParams& params) final {}
};

// This domain allows interacting with the FedCM dialog.
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
  static void HandleSelectAccountResponse(base::OnceCallback<void(std::unique_ptr<SelectAccountResult>)> callback, const base::Value& response);
  static void HandleConfirmIdpLoginResponse(base::OnceCallback<void(std::unique_ptr<ConfirmIdpLoginResult>)> callback, const base::Value& response);
  static void HandleDismissDialogResponse(base::OnceCallback<void(std::unique_ptr<DismissDialogResult>)> callback, const base::Value& response);
  static void HandleResetCooldownResponse(base::OnceCallback<void(std::unique_ptr<ResetCooldownResult>)> callback, const base::Value& response);

  void DispatchDialogShownEvent(const base::Value& params);

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

  void SelectAccount(std::unique_ptr<SelectAccountParams> params, base::OnceCallback<void(std::unique_ptr<SelectAccountResult>)> callback = base::OnceCallback<void(std::unique_ptr<SelectAccountResult>)>());

  // Only valid if the dialog type is ConfirmIdpLogin. Acts as if the user had
  // clicked the continue button.
  void ConfirmIdpLogin(std::unique_ptr<ConfirmIdpLoginParams> params, base::OnceCallback<void(std::unique_ptr<ConfirmIdpLoginResult>)> callback = base::OnceCallback<void(std::unique_ptr<ConfirmIdpLoginResult>)>());

  void DismissDialog(std::unique_ptr<DismissDialogParams> params, base::OnceCallback<void(std::unique_ptr<DismissDialogResult>)> callback = base::OnceCallback<void(std::unique_ptr<DismissDialogResult>)>());

  // Resets the cooldown time, if any, to allow the next FedCM call to show
  // a dialog even if one was recently dismissed by the user.
  void ResetCooldown(std::unique_ptr<ResetCooldownParams> params, base::OnceCallback<void(std::unique_ptr<ResetCooldownResult>)> callback = base::OnceCallback<void(std::unique_ptr<ResetCooldownResult>)>());

};

}  // namespace fed_cm
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_FED_CM_H_
