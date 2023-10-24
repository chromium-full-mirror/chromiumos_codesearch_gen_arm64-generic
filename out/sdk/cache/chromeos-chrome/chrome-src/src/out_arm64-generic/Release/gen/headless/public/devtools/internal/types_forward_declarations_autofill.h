// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_AUTOFILL_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_AUTOFILL_H_

#include "base/values.h"

namespace headless {

namespace autofill {
class CreditCard;
class AddressField;
class AddressFields;
class Address;
class AddressUI;
class FilledField;
class TriggerParams;
class TriggerResult;
class SetAddressesParams;
class SetAddressesResult;
class DisableParams;
class DisableResult;
class EnableParams;
class EnableResult;
class AddressFormFilledParams;

enum class FillingStrategy {
  AUTOCOMPLETE_ATTRIBUTE,
  AUTOFILL_INFERRED
};

}  // namespace autofill

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPES_FORWARD_DECLARATIONS_AUTOFILL_H_
