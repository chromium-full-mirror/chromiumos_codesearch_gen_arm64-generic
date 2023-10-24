// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_FED_CM_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_FED_CM_H_

#include "base/notreached.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_fed_cm.h"
#include "headless/public/internal/value_conversions.h"

namespace headless {
namespace internal {

template <>
struct FromValue<fed_cm::LoginState> {
  static fed_cm::LoginState Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return fed_cm::LoginState::SIGN_IN;
    }
    if (value.GetString() == "SignIn")
      return fed_cm::LoginState::SIGN_IN;
    if (value.GetString() == "SignUp")
      return fed_cm::LoginState::SIGN_UP;
    errors->AddError("invalid enum value");
    return fed_cm::LoginState::SIGN_IN;
  }
};

template <>
inline base::Value ToValue(const fed_cm::LoginState& value) {
  switch (value) {
    case fed_cm::LoginState::SIGN_IN:
      return base::Value("SignIn");
    case fed_cm::LoginState::SIGN_UP:
      return base::Value("SignUp");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<fed_cm::DialogType> {
  static fed_cm::DialogType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return fed_cm::DialogType::ACCOUNT_CHOOSER;
    }
    if (value.GetString() == "AccountChooser")
      return fed_cm::DialogType::ACCOUNT_CHOOSER;
    if (value.GetString() == "AutoReauthn")
      return fed_cm::DialogType::AUTO_REAUTHN;
    if (value.GetString() == "ConfirmIdpLogin")
      return fed_cm::DialogType::CONFIRM_IDP_LOGIN;
    errors->AddError("invalid enum value");
    return fed_cm::DialogType::ACCOUNT_CHOOSER;
  }
};

template <>
inline base::Value ToValue(const fed_cm::DialogType& value) {
  switch (value) {
    case fed_cm::DialogType::ACCOUNT_CHOOSER:
      return base::Value("AccountChooser");
    case fed_cm::DialogType::AUTO_REAUTHN:
      return base::Value("AutoReauthn");
    case fed_cm::DialogType::CONFIRM_IDP_LOGIN:
      return base::Value("ConfirmIdpLogin");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<fed_cm::Account> {
  static std::unique_ptr<fed_cm::Account> Parse(const base::Value& value, ErrorReporter* errors) {
    return fed_cm::Account::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const fed_cm::Account& value) {
  return value.Serialize();
}


template <>
struct FromValue<fed_cm::EnableParams> {
  static std::unique_ptr<fed_cm::EnableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return fed_cm::EnableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const fed_cm::EnableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<fed_cm::EnableResult> {
  static std::unique_ptr<fed_cm::EnableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return fed_cm::EnableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const fed_cm::EnableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<fed_cm::DisableParams> {
  static std::unique_ptr<fed_cm::DisableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return fed_cm::DisableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const fed_cm::DisableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<fed_cm::DisableResult> {
  static std::unique_ptr<fed_cm::DisableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return fed_cm::DisableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const fed_cm::DisableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<fed_cm::SelectAccountParams> {
  static std::unique_ptr<fed_cm::SelectAccountParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return fed_cm::SelectAccountParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const fed_cm::SelectAccountParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<fed_cm::SelectAccountResult> {
  static std::unique_ptr<fed_cm::SelectAccountResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return fed_cm::SelectAccountResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const fed_cm::SelectAccountResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<fed_cm::ConfirmIdpLoginParams> {
  static std::unique_ptr<fed_cm::ConfirmIdpLoginParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return fed_cm::ConfirmIdpLoginParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const fed_cm::ConfirmIdpLoginParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<fed_cm::ConfirmIdpLoginResult> {
  static std::unique_ptr<fed_cm::ConfirmIdpLoginResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return fed_cm::ConfirmIdpLoginResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const fed_cm::ConfirmIdpLoginResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<fed_cm::DismissDialogParams> {
  static std::unique_ptr<fed_cm::DismissDialogParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return fed_cm::DismissDialogParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const fed_cm::DismissDialogParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<fed_cm::DismissDialogResult> {
  static std::unique_ptr<fed_cm::DismissDialogResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return fed_cm::DismissDialogResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const fed_cm::DismissDialogResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<fed_cm::ResetCooldownParams> {
  static std::unique_ptr<fed_cm::ResetCooldownParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return fed_cm::ResetCooldownParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const fed_cm::ResetCooldownParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<fed_cm::ResetCooldownResult> {
  static std::unique_ptr<fed_cm::ResetCooldownResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return fed_cm::ResetCooldownResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const fed_cm::ResetCooldownResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<fed_cm::DialogShownParams> {
  static std::unique_ptr<fed_cm::DialogShownParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return fed_cm::DialogShownParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const fed_cm::DialogShownParams& value) {
  return value.Serialize();
}


}  // namespace internal
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_FED_CM_H_
