// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/types_device_access.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_device_access.h"

namespace headless {

namespace device_access {

std::unique_ptr<PromptDevice> PromptDevice::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("PromptDevice");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<PromptDevice> result(new PromptDevice());
  errors->Push();
  errors->SetName("PromptDevice");
  const base::Value::Dict& dict = value.GetDict();
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
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value PromptDevice::Serialize() const {
  base::Value::Dict result;
  result.Set("id", internal::ToValue(id_));
  result.Set("name", internal::ToValue(name_));
  return base::Value(std::move(result));
}

std::unique_ptr<PromptDevice> PromptDevice::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<PromptDevice> result = Parse(Serialize(), &errors);
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


std::unique_ptr<SelectPromptParams> SelectPromptParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SelectPromptParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SelectPromptParams> result(new SelectPromptParams());
  errors->Push();
  errors->SetName("SelectPromptParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    errors->SetName("id");
    result->id_ = internal::FromValue<std::string>::Parse(*id_value, errors);
  } else {
    errors->AddError("required property missing: id");
  }
  const base::Value* device_id_value = dict.Find("deviceId");
  if (device_id_value) {
    errors->SetName("deviceId");
    result->device_id_ = internal::FromValue<std::string>::Parse(*device_id_value, errors);
  } else {
    errors->AddError("required property missing: deviceId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SelectPromptParams::Serialize() const {
  base::Value::Dict result;
  result.Set("id", internal::ToValue(id_));
  result.Set("deviceId", internal::ToValue(device_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<SelectPromptParams> SelectPromptParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SelectPromptParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SelectPromptResult> SelectPromptResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SelectPromptResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SelectPromptResult> result(new SelectPromptResult());
  errors->Push();
  errors->SetName("SelectPromptResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SelectPromptResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SelectPromptResult> SelectPromptResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SelectPromptResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CancelPromptParams> CancelPromptParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CancelPromptParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CancelPromptParams> result(new CancelPromptParams());
  errors->Push();
  errors->SetName("CancelPromptParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    errors->SetName("id");
    result->id_ = internal::FromValue<std::string>::Parse(*id_value, errors);
  } else {
    errors->AddError("required property missing: id");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CancelPromptParams::Serialize() const {
  base::Value::Dict result;
  result.Set("id", internal::ToValue(id_));
  return base::Value(std::move(result));
}

std::unique_ptr<CancelPromptParams> CancelPromptParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CancelPromptParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CancelPromptResult> CancelPromptResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CancelPromptResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CancelPromptResult> result(new CancelPromptResult());
  errors->Push();
  errors->SetName("CancelPromptResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CancelPromptResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<CancelPromptResult> CancelPromptResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CancelPromptResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DeviceRequestPromptedParams> DeviceRequestPromptedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DeviceRequestPromptedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DeviceRequestPromptedParams> result(new DeviceRequestPromptedParams());
  errors->Push();
  errors->SetName("DeviceRequestPromptedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    errors->SetName("id");
    result->id_ = internal::FromValue<std::string>::Parse(*id_value, errors);
  } else {
    errors->AddError("required property missing: id");
  }
  const base::Value* devices_value = dict.Find("devices");
  if (devices_value) {
    errors->SetName("devices");
    result->devices_ = internal::FromValue<std::vector<std::unique_ptr<::headless::device_access::PromptDevice>>>::Parse(*devices_value, errors);
  } else {
    errors->AddError("required property missing: devices");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DeviceRequestPromptedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("id", internal::ToValue(id_));
  result.Set("devices", internal::ToValue(devices_));
  return base::Value(std::move(result));
}

std::unique_ptr<DeviceRequestPromptedParams> DeviceRequestPromptedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DeviceRequestPromptedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


}  // namespace device_access
}  // namespace headless
