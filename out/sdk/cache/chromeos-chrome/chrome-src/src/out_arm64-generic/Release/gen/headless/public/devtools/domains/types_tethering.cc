// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/types_tethering.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_tethering.h"

namespace headless {

namespace tethering {

std::unique_ptr<BindParams> BindParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("BindParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<BindParams> result(new BindParams());
  errors->Push();
  errors->SetName("BindParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* port_value = dict.Find("port");
  if (port_value) {
    errors->SetName("port");
    result->port_ = internal::FromValue<int>::Parse(*port_value, errors);
  } else {
    errors->AddError("required property missing: port");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value BindParams::Serialize() const {
  base::Value::Dict result;
  result.Set("port", internal::ToValue(port_));
  return base::Value(std::move(result));
}

std::unique_ptr<BindParams> BindParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<BindParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<BindResult> BindResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("BindResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<BindResult> result(new BindResult());
  errors->Push();
  errors->SetName("BindResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value BindResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<BindResult> BindResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<BindResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<UnbindParams> UnbindParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("UnbindParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<UnbindParams> result(new UnbindParams());
  errors->Push();
  errors->SetName("UnbindParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* port_value = dict.Find("port");
  if (port_value) {
    errors->SetName("port");
    result->port_ = internal::FromValue<int>::Parse(*port_value, errors);
  } else {
    errors->AddError("required property missing: port");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value UnbindParams::Serialize() const {
  base::Value::Dict result;
  result.Set("port", internal::ToValue(port_));
  return base::Value(std::move(result));
}

std::unique_ptr<UnbindParams> UnbindParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<UnbindParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<UnbindResult> UnbindResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("UnbindResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<UnbindResult> result(new UnbindResult());
  errors->Push();
  errors->SetName("UnbindResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value UnbindResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<UnbindResult> UnbindResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<UnbindResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<AcceptedParams> AcceptedParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("AcceptedParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<AcceptedParams> result(new AcceptedParams());
  errors->Push();
  errors->SetName("AcceptedParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* port_value = dict.Find("port");
  if (port_value) {
    errors->SetName("port");
    result->port_ = internal::FromValue<int>::Parse(*port_value, errors);
  } else {
    errors->AddError("required property missing: port");
  }
  const base::Value* connection_id_value = dict.Find("connectionId");
  if (connection_id_value) {
    errors->SetName("connectionId");
    result->connection_id_ = internal::FromValue<std::string>::Parse(*connection_id_value, errors);
  } else {
    errors->AddError("required property missing: connectionId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value AcceptedParams::Serialize() const {
  base::Value::Dict result;
  result.Set("port", internal::ToValue(port_));
  result.Set("connectionId", internal::ToValue(connection_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<AcceptedParams> AcceptedParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<AcceptedParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


}  // namespace tethering
}  // namespace headless
