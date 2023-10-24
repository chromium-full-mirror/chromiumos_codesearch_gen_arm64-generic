// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/types_io.h"
#include "headless/public/devtools/domains/types_runtime.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_io.h"
#include "headless/public/devtools/internal/type_conversions_runtime.h"

namespace headless {

namespace io {

std::unique_ptr<CloseParams> CloseParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CloseParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CloseParams> result(new CloseParams());
  errors->Push();
  errors->SetName("CloseParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* handle_value = dict.Find("handle");
  if (handle_value) {
    errors->SetName("handle");
    result->handle_ = internal::FromValue<std::string>::Parse(*handle_value, errors);
  } else {
    errors->AddError("required property missing: handle");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CloseParams::Serialize() const {
  base::Value::Dict result;
  result.Set("handle", internal::ToValue(handle_));
  return base::Value(std::move(result));
}

std::unique_ptr<CloseParams> CloseParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CloseParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CloseResult> CloseResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CloseResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CloseResult> result(new CloseResult());
  errors->Push();
  errors->SetName("CloseResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CloseResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<CloseResult> CloseResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CloseResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ReadParams> ReadParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ReadParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ReadParams> result(new ReadParams());
  errors->Push();
  errors->SetName("ReadParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* handle_value = dict.Find("handle");
  if (handle_value) {
    errors->SetName("handle");
    result->handle_ = internal::FromValue<std::string>::Parse(*handle_value, errors);
  } else {
    errors->AddError("required property missing: handle");
  }
  const base::Value* offset_value = dict.Find("offset");
  if (offset_value) {
    errors->SetName("offset");
    result->offset_ = internal::FromValue<int>::Parse(*offset_value, errors);
  }
  const base::Value* size_value = dict.Find("size");
  if (size_value) {
    errors->SetName("size");
    result->size_ = internal::FromValue<int>::Parse(*size_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ReadParams::Serialize() const {
  base::Value::Dict result;
  result.Set("handle", internal::ToValue(handle_));
  if (offset_)
    result.Set("offset", internal::ToValue(offset_.value()));
  if (size_)
    result.Set("size", internal::ToValue(size_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<ReadParams> ReadParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ReadParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ReadResult> ReadResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ReadResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ReadResult> result(new ReadResult());
  errors->Push();
  errors->SetName("ReadResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* base64_encoded_value = dict.Find("base64Encoded");
  if (base64_encoded_value) {
    errors->SetName("base64Encoded");
    result->base64_encoded_ = internal::FromValue<bool>::Parse(*base64_encoded_value, errors);
  }
  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    errors->SetName("data");
    result->data_ = internal::FromValue<std::string>::Parse(*data_value, errors);
  } else {
    errors->AddError("required property missing: data");
  }
  const base::Value* eof_value = dict.Find("eof");
  if (eof_value) {
    errors->SetName("eof");
    result->eof_ = internal::FromValue<bool>::Parse(*eof_value, errors);
  } else {
    errors->AddError("required property missing: eof");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ReadResult::Serialize() const {
  base::Value::Dict result;
  if (base64_encoded_)
    result.Set("base64Encoded", internal::ToValue(base64_encoded_.value()));
  result.Set("data", internal::ToValue(data_));
  result.Set("eof", internal::ToValue(eof_));
  return base::Value(std::move(result));
}

std::unique_ptr<ReadResult> ReadResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ReadResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ResolveBlobParams> ResolveBlobParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ResolveBlobParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ResolveBlobParams> result(new ResolveBlobParams());
  errors->Push();
  errors->SetName("ResolveBlobParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* object_id_value = dict.Find("objectId");
  if (object_id_value) {
    errors->SetName("objectId");
    result->object_id_ = internal::FromValue<std::string>::Parse(*object_id_value, errors);
  } else {
    errors->AddError("required property missing: objectId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ResolveBlobParams::Serialize() const {
  base::Value::Dict result;
  result.Set("objectId", internal::ToValue(object_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<ResolveBlobParams> ResolveBlobParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ResolveBlobParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ResolveBlobResult> ResolveBlobResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ResolveBlobResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ResolveBlobResult> result(new ResolveBlobResult());
  errors->Push();
  errors->SetName("ResolveBlobResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* uuid_value = dict.Find("uuid");
  if (uuid_value) {
    errors->SetName("uuid");
    result->uuid_ = internal::FromValue<std::string>::Parse(*uuid_value, errors);
  } else {
    errors->AddError("required property missing: uuid");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ResolveBlobResult::Serialize() const {
  base::Value::Dict result;
  result.Set("uuid", internal::ToValue(uuid_));
  return base::Value(std::move(result));
}

std::unique_ptr<ResolveBlobResult> ResolveBlobResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ResolveBlobResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


}  // namespace io
}  // namespace headless
