// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/types_autofill.h"
#include "headless/public/devtools/domains/types_dom.h"
#include "headless/public/devtools/domains/types_debugger.h"
#include "headless/public/devtools/domains/types_emulation.h"
#include "headless/public/devtools/domains/types_io.h"
#include "headless/public/devtools/domains/types_network.h"
#include "headless/public/devtools/domains/types_page.h"
#include "headless/public/devtools/domains/types_runtime.h"
#include "headless/public/devtools/domains/types_security.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_autofill.h"
#include "headless/public/devtools/internal/type_conversions_dom.h"
#include "headless/public/devtools/internal/type_conversions_debugger.h"
#include "headless/public/devtools/internal/type_conversions_emulation.h"
#include "headless/public/devtools/internal/type_conversions_io.h"
#include "headless/public/devtools/internal/type_conversions_network.h"
#include "headless/public/devtools/internal/type_conversions_page.h"
#include "headless/public/devtools/internal/type_conversions_runtime.h"
#include "headless/public/devtools/internal/type_conversions_security.h"

namespace headless {

namespace autofill {

std::unique_ptr<CreditCard> CreditCard::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CreditCard");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CreditCard> result(new CreditCard());
  errors->Push();
  errors->SetName("CreditCard");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* number_value = dict.Find("number");
  if (number_value) {
    errors->SetName("number");
    result->number_ = internal::FromValue<std::string>::Parse(*number_value, errors);
  } else {
    errors->AddError("required property missing: number");
  }
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  } else {
    errors->AddError("required property missing: name");
  }
  const base::Value* expiry_month_value = dict.Find("expiryMonth");
  if (expiry_month_value) {
    errors->SetName("expiryMonth");
    result->expiry_month_ = internal::FromValue<std::string>::Parse(*expiry_month_value, errors);
  } else {
    errors->AddError("required property missing: expiryMonth");
  }
  const base::Value* expiry_year_value = dict.Find("expiryYear");
  if (expiry_year_value) {
    errors->SetName("expiryYear");
    result->expiry_year_ = internal::FromValue<std::string>::Parse(*expiry_year_value, errors);
  } else {
    errors->AddError("required property missing: expiryYear");
  }
  const base::Value* cvc_value = dict.Find("cvc");
  if (cvc_value) {
    errors->SetName("cvc");
    result->cvc_ = internal::FromValue<std::string>::Parse(*cvc_value, errors);
  } else {
    errors->AddError("required property missing: cvc");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CreditCard::Serialize() const {
  base::Value::Dict result;
  result.Set("number", internal::ToValue(number_));
  result.Set("name", internal::ToValue(name_));
  result.Set("expiryMonth", internal::ToValue(expiry_month_));
  result.Set("expiryYear", internal::ToValue(expiry_year_));
  result.Set("cvc", internal::ToValue(cvc_));
  return base::Value(std::move(result));
}

std::unique_ptr<CreditCard> CreditCard::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CreditCard> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AddressField> AddressField::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AddressField");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AddressField> result(new AddressField());
  errors->Push();
  errors->SetName("AddressField");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  } else {
    errors->AddError("required property missing: name");
  }
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<std::string>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AddressField::Serialize() const {
  base::Value::Dict result;
  result.Set("name", internal::ToValue(name_));
  result.Set("value", internal::ToValue(value_));
  return base::Value(std::move(result));
}

std::unique_ptr<AddressField> AddressField::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AddressField> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AddressFields> AddressFields::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AddressFields");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AddressFields> result(new AddressFields());
  errors->Push();
  errors->SetName("AddressFields");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* fields_value = dict.Find("fields");
  if (fields_value) {
    errors->SetName("fields");
    result->fields_ = internal::FromValue<std::vector<std::unique_ptr<::headless::autofill::AddressField>>>::Parse(*fields_value, errors);
  } else {
    errors->AddError("required property missing: fields");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AddressFields::Serialize() const {
  base::Value::Dict result;
  result.Set("fields", internal::ToValue(fields_));
  return base::Value(std::move(result));
}

std::unique_ptr<AddressFields> AddressFields::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AddressFields> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<Address> Address::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("Address");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<Address> result(new Address());
  errors->Push();
  errors->SetName("Address");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* fields_value = dict.Find("fields");
  if (fields_value) {
    errors->SetName("fields");
    result->fields_ = internal::FromValue<std::vector<std::unique_ptr<::headless::autofill::AddressField>>>::Parse(*fields_value, errors);
  } else {
    errors->AddError("required property missing: fields");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value Address::Serialize() const {
  base::Value::Dict result;
  result.Set("fields", internal::ToValue(fields_));
  return base::Value(std::move(result));
}

std::unique_ptr<Address> Address::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<Address> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AddressUI> AddressUI::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AddressUI");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AddressUI> result(new AddressUI());
  errors->Push();
  errors->SetName("AddressUI");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* address_fields_value = dict.Find("addressFields");
  if (address_fields_value) {
    errors->SetName("addressFields");
    result->address_fields_ = internal::FromValue<std::vector<std::unique_ptr<::headless::autofill::AddressFields>>>::Parse(*address_fields_value, errors);
  } else {
    errors->AddError("required property missing: addressFields");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AddressUI::Serialize() const {
  base::Value::Dict result;
  result.Set("addressFields", internal::ToValue(address_fields_));
  return base::Value(std::move(result));
}

std::unique_ptr<AddressUI> AddressUI::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AddressUI> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<FilledField> FilledField::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("FilledField");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<FilledField> result(new FilledField());
  errors->Push();
  errors->SetName("FilledField");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* html_type_value = dict.Find("htmlType");
  if (html_type_value) {
    errors->SetName("htmlType");
    result->html_type_ = internal::FromValue<std::string>::Parse(*html_type_value, errors);
  } else {
    errors->AddError("required property missing: htmlType");
  }
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    errors->SetName("id");
    result->id_ = internal::FromValue<std::string>::Parse(*id_value, errors);
  } else {
    errors->AddError("required property missing: id");
  }
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    errors->SetName("name");
    result->name_ = internal::FromValue<std::string>::Parse(*name_value, errors);
  } else {
    errors->AddError("required property missing: name");
  }
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<std::string>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  const base::Value* autofill_type_value = dict.Find("autofillType");
  if (autofill_type_value) {
    errors->SetName("autofillType");
    result->autofill_type_ = internal::FromValue<std::string>::Parse(*autofill_type_value, errors);
  } else {
    errors->AddError("required property missing: autofillType");
  }
  const base::Value* filling_strategy_value = dict.Find("fillingStrategy");
  if (filling_strategy_value) {
    errors->SetName("fillingStrategy");
    result->filling_strategy_ = internal::FromValue<::headless::autofill::FillingStrategy>::Parse(*filling_strategy_value, errors);
  } else {
    errors->AddError("required property missing: fillingStrategy");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value FilledField::Serialize() const {
  base::Value::Dict result;
  result.Set("htmlType", internal::ToValue(html_type_));
  result.Set("id", internal::ToValue(id_));
  result.Set("name", internal::ToValue(name_));
  result.Set("value", internal::ToValue(value_));
  result.Set("autofillType", internal::ToValue(autofill_type_));
  result.Set("fillingStrategy", internal::ToValue(filling_strategy_));
  return base::Value(std::move(result));
}

std::unique_ptr<FilledField> FilledField::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<FilledField> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TriggerParams> TriggerParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TriggerParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TriggerParams> result(new TriggerParams());
  errors->Push();
  errors->SetName("TriggerParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* field_id_value = dict.Find("fieldId");
  if (field_id_value) {
    errors->SetName("fieldId");
    result->field_id_ = internal::FromValue<int>::Parse(*field_id_value, errors);
  } else {
    errors->AddError("required property missing: fieldId");
  }
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    errors->SetName("frameId");
    result->frame_id_ = internal::FromValue<std::string>::Parse(*frame_id_value, errors);
  }
  const base::Value* card_value = dict.Find("card");
  if (card_value) {
    errors->SetName("card");
    result->card_ = internal::FromValue<::headless::autofill::CreditCard>::Parse(*card_value, errors);
  } else {
    errors->AddError("required property missing: card");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TriggerParams::Serialize() const {
  base::Value::Dict result;
  result.Set("fieldId", internal::ToValue(field_id_));
  if (frame_id_)
    result.Set("frameId", internal::ToValue(frame_id_.value()));
  result.Set("card", internal::ToValue(*card_));
  return base::Value(std::move(result));
}

std::unique_ptr<TriggerParams> TriggerParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TriggerParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<TriggerResult> TriggerResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("TriggerResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<TriggerResult> result(new TriggerResult());
  errors->Push();
  errors->SetName("TriggerResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value TriggerResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<TriggerResult> TriggerResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<TriggerResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetAddressesParams> SetAddressesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetAddressesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetAddressesParams> result(new SetAddressesParams());
  errors->Push();
  errors->SetName("SetAddressesParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* addresses_value = dict.Find("addresses");
  if (addresses_value) {
    errors->SetName("addresses");
    result->addresses_ = internal::FromValue<std::vector<std::unique_ptr<::headless::autofill::Address>>>::Parse(*addresses_value, errors);
  } else {
    errors->AddError("required property missing: addresses");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetAddressesParams::Serialize() const {
  base::Value::Dict result;
  result.Set("addresses", internal::ToValue(addresses_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetAddressesParams> SetAddressesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetAddressesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetAddressesResult> SetAddressesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetAddressesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetAddressesResult> result(new SetAddressesResult());
  errors->Push();
  errors->SetName("SetAddressesResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetAddressesResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetAddressesResult> SetAddressesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetAddressesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DisableParams> DisableParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DisableParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DisableParams> result(new DisableParams());
  errors->Push();
  errors->SetName("DisableParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DisableParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<DisableParams> DisableParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DisableParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DisableResult> DisableResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DisableResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DisableResult> result(new DisableResult());
  errors->Push();
  errors->SetName("DisableResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DisableResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<DisableResult> DisableResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DisableResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<EnableParams> EnableParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("EnableParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<EnableParams> result(new EnableParams());
  errors->Push();
  errors->SetName("EnableParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EnableParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<EnableParams> EnableParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EnableParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<EnableResult> EnableResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("EnableResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<EnableResult> result(new EnableResult());
  errors->Push();
  errors->SetName("EnableResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value EnableResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<EnableResult> EnableResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<EnableResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AddressFormFilledParams> AddressFormFilledParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AddressFormFilledParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AddressFormFilledParams> result(new AddressFormFilledParams());
  errors->Push();
  errors->SetName("AddressFormFilledParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* filled_fields_value = dict.Find("filledFields");
  if (filled_fields_value) {
    errors->SetName("filledFields");
    result->filled_fields_ = internal::FromValue<std::vector<std::unique_ptr<::headless::autofill::FilledField>>>::Parse(*filled_fields_value, errors);
  } else {
    errors->AddError("required property missing: filledFields");
  }
  const base::Value* address_ui_value = dict.Find("addressUi");
  if (address_ui_value) {
    errors->SetName("addressUi");
    result->address_ui_ = internal::FromValue<::headless::autofill::AddressUI>::Parse(*address_ui_value, errors);
  } else {
    errors->AddError("required property missing: addressUi");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AddressFormFilledParams::Serialize() const {
  base::Value::Dict result;
  result.Set("filledFields", internal::ToValue(filled_fields_));
  result.Set("addressUi", internal::ToValue(*address_ui_));
  return base::Value(std::move(result));
}

std::unique_ptr<AddressFormFilledParams> AddressFormFilledParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AddressFormFilledParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


}  // namespace autofill
}  // namespace headless
