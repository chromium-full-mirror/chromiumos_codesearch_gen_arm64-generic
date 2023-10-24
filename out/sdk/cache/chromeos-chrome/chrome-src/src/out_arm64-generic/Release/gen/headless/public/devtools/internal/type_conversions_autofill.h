// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_AUTOFILL_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_AUTOFILL_H_

#include "base/notreached.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_autofill.h"
#include "headless/public/internal/value_conversions.h"

namespace headless {
namespace internal {


template <>
struct FromValue<autofill::CreditCard> {
  static std::unique_ptr<autofill::CreditCard> Parse(const base::Value& value, ErrorReporter* errors) {
    return autofill::CreditCard::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const autofill::CreditCard& value) {
  return value.Serialize();
}


template <>
struct FromValue<autofill::AddressField> {
  static std::unique_ptr<autofill::AddressField> Parse(const base::Value& value, ErrorReporter* errors) {
    return autofill::AddressField::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const autofill::AddressField& value) {
  return value.Serialize();
}


template <>
struct FromValue<autofill::AddressFields> {
  static std::unique_ptr<autofill::AddressFields> Parse(const base::Value& value, ErrorReporter* errors) {
    return autofill::AddressFields::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const autofill::AddressFields& value) {
  return value.Serialize();
}


template <>
struct FromValue<autofill::Address> {
  static std::unique_ptr<autofill::Address> Parse(const base::Value& value, ErrorReporter* errors) {
    return autofill::Address::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const autofill::Address& value) {
  return value.Serialize();
}


template <>
struct FromValue<autofill::AddressUI> {
  static std::unique_ptr<autofill::AddressUI> Parse(const base::Value& value, ErrorReporter* errors) {
    return autofill::AddressUI::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const autofill::AddressUI& value) {
  return value.Serialize();
}

template <>
struct FromValue<autofill::FillingStrategy> {
  static autofill::FillingStrategy Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return autofill::FillingStrategy::AUTOCOMPLETE_ATTRIBUTE;
    }
    if (value.GetString() == "autocompleteAttribute")
      return autofill::FillingStrategy::AUTOCOMPLETE_ATTRIBUTE;
    if (value.GetString() == "autofillInferred")
      return autofill::FillingStrategy::AUTOFILL_INFERRED;
    errors->AddError("invalid enum value");
    return autofill::FillingStrategy::AUTOCOMPLETE_ATTRIBUTE;
  }
};

template <>
inline base::Value ToValue(const autofill::FillingStrategy& value) {
  switch (value) {
    case autofill::FillingStrategy::AUTOCOMPLETE_ATTRIBUTE:
      return base::Value("autocompleteAttribute");
    case autofill::FillingStrategy::AUTOFILL_INFERRED:
      return base::Value("autofillInferred");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<autofill::FilledField> {
  static std::unique_ptr<autofill::FilledField> Parse(const base::Value& value, ErrorReporter* errors) {
    return autofill::FilledField::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const autofill::FilledField& value) {
  return value.Serialize();
}


template <>
struct FromValue<autofill::TriggerParams> {
  static std::unique_ptr<autofill::TriggerParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return autofill::TriggerParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const autofill::TriggerParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<autofill::TriggerResult> {
  static std::unique_ptr<autofill::TriggerResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return autofill::TriggerResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const autofill::TriggerResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<autofill::SetAddressesParams> {
  static std::unique_ptr<autofill::SetAddressesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return autofill::SetAddressesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const autofill::SetAddressesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<autofill::SetAddressesResult> {
  static std::unique_ptr<autofill::SetAddressesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return autofill::SetAddressesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const autofill::SetAddressesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<autofill::DisableParams> {
  static std::unique_ptr<autofill::DisableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return autofill::DisableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const autofill::DisableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<autofill::DisableResult> {
  static std::unique_ptr<autofill::DisableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return autofill::DisableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const autofill::DisableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<autofill::EnableParams> {
  static std::unique_ptr<autofill::EnableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return autofill::EnableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const autofill::EnableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<autofill::EnableResult> {
  static std::unique_ptr<autofill::EnableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return autofill::EnableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const autofill::EnableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<autofill::AddressFormFilledParams> {
  static std::unique_ptr<autofill::AddressFormFilledParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return autofill::AddressFormFilledParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const autofill::AddressFormFilledParams& value) {
  return value.Serialize();
}


}  // namespace internal
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_AUTOFILL_H_
