// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_FED_CM_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_FED_CM_H_

#include "base/values.h"

namespace headless {

namespace fed_cm {
class Account;
class EnableParams;
class EnableResult;
class DisableParams;
class DisableResult;
class SelectAccountParams;
class SelectAccountResult;
class ClickDialogButtonParams;
class ClickDialogButtonResult;
class DismissDialogParams;
class DismissDialogResult;
class ResetCooldownParams;
class ResetCooldownResult;
class DialogShownParams;
class DialogClosedParams;

enum class LoginState {
  SIGN_IN,
  SIGN_UP
};

enum class DialogType {
  ACCOUNT_CHOOSER,
  AUTO_REAUTHN,
  CONFIRM_IDP_LOGIN,
  ERROR
};

enum class DialogButton {
  CONFIRM_IDP_LOGIN_CONTINUE,
  ERROR_GOT_IT,
  ERROR_MORE_DETAILS
};

}  // namespace fed_cm

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_FED_CM_H_
