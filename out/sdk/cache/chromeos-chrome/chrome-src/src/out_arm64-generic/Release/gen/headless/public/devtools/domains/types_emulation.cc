// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/types_dom.h"
#include "headless/public/devtools/domains/types_debugger.h"
#include "headless/public/devtools/domains/types_emulation.h"
#include "headless/public/devtools/domains/types_io.h"
#include "headless/public/devtools/domains/types_network.h"
#include "headless/public/devtools/domains/types_page.h"
#include "headless/public/devtools/domains/types_runtime.h"
#include "headless/public/devtools/domains/types_security.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_dom.h"
#include "headless/public/devtools/internal/type_conversions_debugger.h"
#include "headless/public/devtools/internal/type_conversions_emulation.h"
#include "headless/public/devtools/internal/type_conversions_io.h"
#include "headless/public/devtools/internal/type_conversions_network.h"
#include "headless/public/devtools/internal/type_conversions_page.h"
#include "headless/public/devtools/internal/type_conversions_runtime.h"
#include "headless/public/devtools/internal/type_conversions_security.h"

namespace headless {

namespace emulation {

std::unique_ptr<ScreenOrientation> ScreenOrientation::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ScreenOrientation");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ScreenOrientation> result(new ScreenOrientation());
  errors->Push();
  errors->SetName("ScreenOrientation");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::emulation::ScreenOrientationType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  const base::Value* angle_value = dict.Find("angle");
  if (angle_value) {
    errors->SetName("angle");
    result->angle_ = internal::FromValue<int>::Parse(*angle_value, errors);
  } else {
    errors->AddError("required property missing: angle");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ScreenOrientation::Serialize() const {
  base::Value::Dict result;
  result.Set("type", internal::ToValue(type_));
  result.Set("angle", internal::ToValue(angle_));
  return base::Value(std::move(result));
}

std::unique_ptr<ScreenOrientation> ScreenOrientation::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ScreenOrientation> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<DisplayFeature> DisplayFeature::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("DisplayFeature");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<DisplayFeature> result(new DisplayFeature());
  errors->Push();
  errors->SetName("DisplayFeature");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* orientation_value = dict.Find("orientation");
  if (orientation_value) {
    errors->SetName("orientation");
    result->orientation_ = internal::FromValue<::headless::emulation::DisplayFeatureOrientation>::Parse(*orientation_value, errors);
  } else {
    errors->AddError("required property missing: orientation");
  }
  const base::Value* offset_value = dict.Find("offset");
  if (offset_value) {
    errors->SetName("offset");
    result->offset_ = internal::FromValue<int>::Parse(*offset_value, errors);
  } else {
    errors->AddError("required property missing: offset");
  }
  const base::Value* mask_length_value = dict.Find("maskLength");
  if (mask_length_value) {
    errors->SetName("maskLength");
    result->mask_length_ = internal::FromValue<int>::Parse(*mask_length_value, errors);
  } else {
    errors->AddError("required property missing: maskLength");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value DisplayFeature::Serialize() const {
  base::Value::Dict result;
  result.Set("orientation", internal::ToValue(orientation_));
  result.Set("offset", internal::ToValue(offset_));
  result.Set("maskLength", internal::ToValue(mask_length_));
  return base::Value(std::move(result));
}

std::unique_ptr<DisplayFeature> DisplayFeature::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<DisplayFeature> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<MediaFeature> MediaFeature::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("MediaFeature");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<MediaFeature> result(new MediaFeature());
  errors->Push();
  errors->SetName("MediaFeature");
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

base::Value MediaFeature::Serialize() const {
  base::Value::Dict result;
  result.Set("name", internal::ToValue(name_));
  result.Set("value", internal::ToValue(value_));
  return base::Value(std::move(result));
}

std::unique_ptr<MediaFeature> MediaFeature::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<MediaFeature> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<UserAgentBrandVersion> UserAgentBrandVersion::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("UserAgentBrandVersion");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<UserAgentBrandVersion> result(new UserAgentBrandVersion());
  errors->Push();
  errors->SetName("UserAgentBrandVersion");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* brand_value = dict.Find("brand");
  if (brand_value) {
    errors->SetName("brand");
    result->brand_ = internal::FromValue<std::string>::Parse(*brand_value, errors);
  } else {
    errors->AddError("required property missing: brand");
  }
  const base::Value* version_value = dict.Find("version");
  if (version_value) {
    errors->SetName("version");
    result->version_ = internal::FromValue<std::string>::Parse(*version_value, errors);
  } else {
    errors->AddError("required property missing: version");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value UserAgentBrandVersion::Serialize() const {
  base::Value::Dict result;
  result.Set("brand", internal::ToValue(brand_));
  result.Set("version", internal::ToValue(version_));
  return base::Value(std::move(result));
}

std::unique_ptr<UserAgentBrandVersion> UserAgentBrandVersion::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<UserAgentBrandVersion> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<UserAgentMetadata> UserAgentMetadata::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("UserAgentMetadata");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<UserAgentMetadata> result(new UserAgentMetadata());
  errors->Push();
  errors->SetName("UserAgentMetadata");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* brands_value = dict.Find("brands");
  if (brands_value) {
    errors->SetName("brands");
    result->brands_ = internal::FromValue<std::vector<std::unique_ptr<::headless::emulation::UserAgentBrandVersion>>>::Parse(*brands_value, errors);
  }
  const base::Value* full_version_list_value = dict.Find("fullVersionList");
  if (full_version_list_value) {
    errors->SetName("fullVersionList");
    result->full_version_list_ = internal::FromValue<std::vector<std::unique_ptr<::headless::emulation::UserAgentBrandVersion>>>::Parse(*full_version_list_value, errors);
  }
  const base::Value* full_version_value = dict.Find("fullVersion");
  if (full_version_value) {
    errors->SetName("fullVersion");
    result->full_version_ = internal::FromValue<std::string>::Parse(*full_version_value, errors);
  }
  const base::Value* platform_value = dict.Find("platform");
  if (platform_value) {
    errors->SetName("platform");
    result->platform_ = internal::FromValue<std::string>::Parse(*platform_value, errors);
  } else {
    errors->AddError("required property missing: platform");
  }
  const base::Value* platform_version_value = dict.Find("platformVersion");
  if (platform_version_value) {
    errors->SetName("platformVersion");
    result->platform_version_ = internal::FromValue<std::string>::Parse(*platform_version_value, errors);
  } else {
    errors->AddError("required property missing: platformVersion");
  }
  const base::Value* architecture_value = dict.Find("architecture");
  if (architecture_value) {
    errors->SetName("architecture");
    result->architecture_ = internal::FromValue<std::string>::Parse(*architecture_value, errors);
  } else {
    errors->AddError("required property missing: architecture");
  }
  const base::Value* model_value = dict.Find("model");
  if (model_value) {
    errors->SetName("model");
    result->model_ = internal::FromValue<std::string>::Parse(*model_value, errors);
  } else {
    errors->AddError("required property missing: model");
  }
  const base::Value* mobile_value = dict.Find("mobile");
  if (mobile_value) {
    errors->SetName("mobile");
    result->mobile_ = internal::FromValue<bool>::Parse(*mobile_value, errors);
  } else {
    errors->AddError("required property missing: mobile");
  }
  const base::Value* bitness_value = dict.Find("bitness");
  if (bitness_value) {
    errors->SetName("bitness");
    result->bitness_ = internal::FromValue<std::string>::Parse(*bitness_value, errors);
  }
  const base::Value* wow64_value = dict.Find("wow64");
  if (wow64_value) {
    errors->SetName("wow64");
    result->wow64_ = internal::FromValue<bool>::Parse(*wow64_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value UserAgentMetadata::Serialize() const {
  base::Value::Dict result;
  if (brands_)
    result.Set("brands", internal::ToValue(brands_.value()));
  if (full_version_list_)
    result.Set("fullVersionList", internal::ToValue(full_version_list_.value()));
  if (full_version_)
    result.Set("fullVersion", internal::ToValue(full_version_.value()));
  result.Set("platform", internal::ToValue(platform_));
  result.Set("platformVersion", internal::ToValue(platform_version_));
  result.Set("architecture", internal::ToValue(architecture_));
  result.Set("model", internal::ToValue(model_));
  result.Set("mobile", internal::ToValue(mobile_));
  if (bitness_)
    result.Set("bitness", internal::ToValue(bitness_.value()));
  if (wow64_)
    result.Set("wow64", internal::ToValue(wow64_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<UserAgentMetadata> UserAgentMetadata::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<UserAgentMetadata> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SensorMetadata> SensorMetadata::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SensorMetadata");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SensorMetadata> result(new SensorMetadata());
  errors->Push();
  errors->SetName("SensorMetadata");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* available_value = dict.Find("available");
  if (available_value) {
    errors->SetName("available");
    result->available_ = internal::FromValue<bool>::Parse(*available_value, errors);
  }
  const base::Value* minimum_frequency_value = dict.Find("minimumFrequency");
  if (minimum_frequency_value) {
    errors->SetName("minimumFrequency");
    result->minimum_frequency_ = internal::FromValue<double>::Parse(*minimum_frequency_value, errors);
  }
  const base::Value* maximum_frequency_value = dict.Find("maximumFrequency");
  if (maximum_frequency_value) {
    errors->SetName("maximumFrequency");
    result->maximum_frequency_ = internal::FromValue<double>::Parse(*maximum_frequency_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SensorMetadata::Serialize() const {
  base::Value::Dict result;
  if (available_)
    result.Set("available", internal::ToValue(available_.value()));
  if (minimum_frequency_)
    result.Set("minimumFrequency", internal::ToValue(minimum_frequency_.value()));
  if (maximum_frequency_)
    result.Set("maximumFrequency", internal::ToValue(maximum_frequency_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SensorMetadata> SensorMetadata::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SensorMetadata> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SensorReadingSingle> SensorReadingSingle::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SensorReadingSingle");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SensorReadingSingle> result(new SensorReadingSingle());
  errors->Push();
  errors->SetName("SensorReadingSingle");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<double>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SensorReadingSingle::Serialize() const {
  base::Value::Dict result;
  result.Set("value", internal::ToValue(value_));
  return base::Value(std::move(result));
}

std::unique_ptr<SensorReadingSingle> SensorReadingSingle::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SensorReadingSingle> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SensorReadingXYZ> SensorReadingXYZ::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SensorReadingXYZ");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SensorReadingXYZ> result(new SensorReadingXYZ());
  errors->Push();
  errors->SetName("SensorReadingXYZ");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* x_value = dict.Find("x");
  if (x_value) {
    errors->SetName("x");
    result->x_ = internal::FromValue<double>::Parse(*x_value, errors);
  } else {
    errors->AddError("required property missing: x");
  }
  const base::Value* y_value = dict.Find("y");
  if (y_value) {
    errors->SetName("y");
    result->y_ = internal::FromValue<double>::Parse(*y_value, errors);
  } else {
    errors->AddError("required property missing: y");
  }
  const base::Value* z_value = dict.Find("z");
  if (z_value) {
    errors->SetName("z");
    result->z_ = internal::FromValue<double>::Parse(*z_value, errors);
  } else {
    errors->AddError("required property missing: z");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SensorReadingXYZ::Serialize() const {
  base::Value::Dict result;
  result.Set("x", internal::ToValue(x_));
  result.Set("y", internal::ToValue(y_));
  result.Set("z", internal::ToValue(z_));
  return base::Value(std::move(result));
}

std::unique_ptr<SensorReadingXYZ> SensorReadingXYZ::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SensorReadingXYZ> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SensorReadingQuaternion> SensorReadingQuaternion::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SensorReadingQuaternion");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SensorReadingQuaternion> result(new SensorReadingQuaternion());
  errors->Push();
  errors->SetName("SensorReadingQuaternion");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* x_value = dict.Find("x");
  if (x_value) {
    errors->SetName("x");
    result->x_ = internal::FromValue<double>::Parse(*x_value, errors);
  } else {
    errors->AddError("required property missing: x");
  }
  const base::Value* y_value = dict.Find("y");
  if (y_value) {
    errors->SetName("y");
    result->y_ = internal::FromValue<double>::Parse(*y_value, errors);
  } else {
    errors->AddError("required property missing: y");
  }
  const base::Value* z_value = dict.Find("z");
  if (z_value) {
    errors->SetName("z");
    result->z_ = internal::FromValue<double>::Parse(*z_value, errors);
  } else {
    errors->AddError("required property missing: z");
  }
  const base::Value* w_value = dict.Find("w");
  if (w_value) {
    errors->SetName("w");
    result->w_ = internal::FromValue<double>::Parse(*w_value, errors);
  } else {
    errors->AddError("required property missing: w");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SensorReadingQuaternion::Serialize() const {
  base::Value::Dict result;
  result.Set("x", internal::ToValue(x_));
  result.Set("y", internal::ToValue(y_));
  result.Set("z", internal::ToValue(z_));
  result.Set("w", internal::ToValue(w_));
  return base::Value(std::move(result));
}

std::unique_ptr<SensorReadingQuaternion> SensorReadingQuaternion::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SensorReadingQuaternion> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SensorReading> SensorReading::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SensorReading");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SensorReading> result(new SensorReading());
  errors->Push();
  errors->SetName("SensorReading");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* single_value = dict.Find("single");
  if (single_value) {
    errors->SetName("single");
    result->single_ = internal::FromValue<::headless::emulation::SensorReadingSingle>::Parse(*single_value, errors);
  }
  const base::Value* xyz_value = dict.Find("xyz");
  if (xyz_value) {
    errors->SetName("xyz");
    result->xyz_ = internal::FromValue<::headless::emulation::SensorReadingXYZ>::Parse(*xyz_value, errors);
  }
  const base::Value* quaternion_value = dict.Find("quaternion");
  if (quaternion_value) {
    errors->SetName("quaternion");
    result->quaternion_ = internal::FromValue<::headless::emulation::SensorReadingQuaternion>::Parse(*quaternion_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SensorReading::Serialize() const {
  base::Value::Dict result;
  if (single_)
    result.Set("single", internal::ToValue(*single_.value()));
  if (xyz_)
    result.Set("xyz", internal::ToValue(*xyz_.value()));
  if (quaternion_)
    result.Set("quaternion", internal::ToValue(*quaternion_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SensorReading> SensorReading::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SensorReading> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CanEmulateParams> CanEmulateParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CanEmulateParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CanEmulateParams> result(new CanEmulateParams());
  errors->Push();
  errors->SetName("CanEmulateParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CanEmulateParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<CanEmulateParams> CanEmulateParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CanEmulateParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<CanEmulateResult> CanEmulateResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("CanEmulateResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<CanEmulateResult> result(new CanEmulateResult());
  errors->Push();
  errors->SetName("CanEmulateResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* result_value = dict.Find("result");
  if (result_value) {
    errors->SetName("result");
    result->result_ = internal::FromValue<bool>::Parse(*result_value, errors);
  } else {
    errors->AddError("required property missing: result");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value CanEmulateResult::Serialize() const {
  base::Value::Dict result;
  result.Set("result", internal::ToValue(result_));
  return base::Value(std::move(result));
}

std::unique_ptr<CanEmulateResult> CanEmulateResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<CanEmulateResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearDeviceMetricsOverrideParams> ClearDeviceMetricsOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearDeviceMetricsOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearDeviceMetricsOverrideParams> result(new ClearDeviceMetricsOverrideParams());
  errors->Push();
  errors->SetName("ClearDeviceMetricsOverrideParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearDeviceMetricsOverrideParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearDeviceMetricsOverrideParams> ClearDeviceMetricsOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearDeviceMetricsOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearDeviceMetricsOverrideResult> ClearDeviceMetricsOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearDeviceMetricsOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearDeviceMetricsOverrideResult> result(new ClearDeviceMetricsOverrideResult());
  errors->Push();
  errors->SetName("ClearDeviceMetricsOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearDeviceMetricsOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearDeviceMetricsOverrideResult> ClearDeviceMetricsOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearDeviceMetricsOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearGeolocationOverrideParams> ClearGeolocationOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearGeolocationOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearGeolocationOverrideParams> result(new ClearGeolocationOverrideParams());
  errors->Push();
  errors->SetName("ClearGeolocationOverrideParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearGeolocationOverrideParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearGeolocationOverrideParams> ClearGeolocationOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearGeolocationOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearGeolocationOverrideResult> ClearGeolocationOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearGeolocationOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearGeolocationOverrideResult> result(new ClearGeolocationOverrideResult());
  errors->Push();
  errors->SetName("ClearGeolocationOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearGeolocationOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearGeolocationOverrideResult> ClearGeolocationOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearGeolocationOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ResetPageScaleFactorParams> ResetPageScaleFactorParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ResetPageScaleFactorParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ResetPageScaleFactorParams> result(new ResetPageScaleFactorParams());
  errors->Push();
  errors->SetName("ResetPageScaleFactorParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ResetPageScaleFactorParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ResetPageScaleFactorParams> ResetPageScaleFactorParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ResetPageScaleFactorParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ResetPageScaleFactorResult> ResetPageScaleFactorResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ResetPageScaleFactorResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ResetPageScaleFactorResult> result(new ResetPageScaleFactorResult());
  errors->Push();
  errors->SetName("ResetPageScaleFactorResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ResetPageScaleFactorResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ResetPageScaleFactorResult> ResetPageScaleFactorResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ResetPageScaleFactorResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetFocusEmulationEnabledParams> SetFocusEmulationEnabledParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetFocusEmulationEnabledParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetFocusEmulationEnabledParams> result(new SetFocusEmulationEnabledParams());
  errors->Push();
  errors->SetName("SetFocusEmulationEnabledParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    errors->SetName("enabled");
    result->enabled_ = internal::FromValue<bool>::Parse(*enabled_value, errors);
  } else {
    errors->AddError("required property missing: enabled");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetFocusEmulationEnabledParams::Serialize() const {
  base::Value::Dict result;
  result.Set("enabled", internal::ToValue(enabled_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetFocusEmulationEnabledParams> SetFocusEmulationEnabledParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetFocusEmulationEnabledParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetFocusEmulationEnabledResult> SetFocusEmulationEnabledResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetFocusEmulationEnabledResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetFocusEmulationEnabledResult> result(new SetFocusEmulationEnabledResult());
  errors->Push();
  errors->SetName("SetFocusEmulationEnabledResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetFocusEmulationEnabledResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetFocusEmulationEnabledResult> SetFocusEmulationEnabledResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetFocusEmulationEnabledResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetAutoDarkModeOverrideParams> SetAutoDarkModeOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetAutoDarkModeOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetAutoDarkModeOverrideParams> result(new SetAutoDarkModeOverrideParams());
  errors->Push();
  errors->SetName("SetAutoDarkModeOverrideParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    errors->SetName("enabled");
    result->enabled_ = internal::FromValue<bool>::Parse(*enabled_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetAutoDarkModeOverrideParams::Serialize() const {
  base::Value::Dict result;
  if (enabled_)
    result.Set("enabled", internal::ToValue(enabled_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetAutoDarkModeOverrideParams> SetAutoDarkModeOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetAutoDarkModeOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetAutoDarkModeOverrideResult> SetAutoDarkModeOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetAutoDarkModeOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetAutoDarkModeOverrideResult> result(new SetAutoDarkModeOverrideResult());
  errors->Push();
  errors->SetName("SetAutoDarkModeOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetAutoDarkModeOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetAutoDarkModeOverrideResult> SetAutoDarkModeOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetAutoDarkModeOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetCPUThrottlingRateParams> SetCPUThrottlingRateParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetCPUThrottlingRateParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetCPUThrottlingRateParams> result(new SetCPUThrottlingRateParams());
  errors->Push();
  errors->SetName("SetCPUThrottlingRateParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* rate_value = dict.Find("rate");
  if (rate_value) {
    errors->SetName("rate");
    result->rate_ = internal::FromValue<double>::Parse(*rate_value, errors);
  } else {
    errors->AddError("required property missing: rate");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetCPUThrottlingRateParams::Serialize() const {
  base::Value::Dict result;
  result.Set("rate", internal::ToValue(rate_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetCPUThrottlingRateParams> SetCPUThrottlingRateParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetCPUThrottlingRateParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetCPUThrottlingRateResult> SetCPUThrottlingRateResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetCPUThrottlingRateResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetCPUThrottlingRateResult> result(new SetCPUThrottlingRateResult());
  errors->Push();
  errors->SetName("SetCPUThrottlingRateResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetCPUThrottlingRateResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetCPUThrottlingRateResult> SetCPUThrottlingRateResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetCPUThrottlingRateResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetDefaultBackgroundColorOverrideParams> SetDefaultBackgroundColorOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetDefaultBackgroundColorOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetDefaultBackgroundColorOverrideParams> result(new SetDefaultBackgroundColorOverrideParams());
  errors->Push();
  errors->SetName("SetDefaultBackgroundColorOverrideParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* color_value = dict.Find("color");
  if (color_value) {
    errors->SetName("color");
    result->color_ = internal::FromValue<::headless::dom::RGBA>::Parse(*color_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetDefaultBackgroundColorOverrideParams::Serialize() const {
  base::Value::Dict result;
  if (color_)
    result.Set("color", internal::ToValue(*color_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetDefaultBackgroundColorOverrideParams> SetDefaultBackgroundColorOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetDefaultBackgroundColorOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetDefaultBackgroundColorOverrideResult> SetDefaultBackgroundColorOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetDefaultBackgroundColorOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetDefaultBackgroundColorOverrideResult> result(new SetDefaultBackgroundColorOverrideResult());
  errors->Push();
  errors->SetName("SetDefaultBackgroundColorOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetDefaultBackgroundColorOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetDefaultBackgroundColorOverrideResult> SetDefaultBackgroundColorOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetDefaultBackgroundColorOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetDeviceMetricsOverrideParams> SetDeviceMetricsOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetDeviceMetricsOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetDeviceMetricsOverrideParams> result(new SetDeviceMetricsOverrideParams());
  errors->Push();
  errors->SetName("SetDeviceMetricsOverrideParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* width_value = dict.Find("width");
  if (width_value) {
    errors->SetName("width");
    result->width_ = internal::FromValue<int>::Parse(*width_value, errors);
  } else {
    errors->AddError("required property missing: width");
  }
  const base::Value* height_value = dict.Find("height");
  if (height_value) {
    errors->SetName("height");
    result->height_ = internal::FromValue<int>::Parse(*height_value, errors);
  } else {
    errors->AddError("required property missing: height");
  }
  const base::Value* device_scale_factor_value = dict.Find("deviceScaleFactor");
  if (device_scale_factor_value) {
    errors->SetName("deviceScaleFactor");
    result->device_scale_factor_ = internal::FromValue<double>::Parse(*device_scale_factor_value, errors);
  } else {
    errors->AddError("required property missing: deviceScaleFactor");
  }
  const base::Value* mobile_value = dict.Find("mobile");
  if (mobile_value) {
    errors->SetName("mobile");
    result->mobile_ = internal::FromValue<bool>::Parse(*mobile_value, errors);
  } else {
    errors->AddError("required property missing: mobile");
  }
  const base::Value* scale_value = dict.Find("scale");
  if (scale_value) {
    errors->SetName("scale");
    result->scale_ = internal::FromValue<double>::Parse(*scale_value, errors);
  }
  const base::Value* screen_width_value = dict.Find("screenWidth");
  if (screen_width_value) {
    errors->SetName("screenWidth");
    result->screen_width_ = internal::FromValue<int>::Parse(*screen_width_value, errors);
  }
  const base::Value* screen_height_value = dict.Find("screenHeight");
  if (screen_height_value) {
    errors->SetName("screenHeight");
    result->screen_height_ = internal::FromValue<int>::Parse(*screen_height_value, errors);
  }
  const base::Value* positionx_value = dict.Find("positionX");
  if (positionx_value) {
    errors->SetName("positionX");
    result->positionx_ = internal::FromValue<int>::Parse(*positionx_value, errors);
  }
  const base::Value* positiony_value = dict.Find("positionY");
  if (positiony_value) {
    errors->SetName("positionY");
    result->positiony_ = internal::FromValue<int>::Parse(*positiony_value, errors);
  }
  const base::Value* dont_set_visible_size_value = dict.Find("dontSetVisibleSize");
  if (dont_set_visible_size_value) {
    errors->SetName("dontSetVisibleSize");
    result->dont_set_visible_size_ = internal::FromValue<bool>::Parse(*dont_set_visible_size_value, errors);
  }
  const base::Value* screen_orientation_value = dict.Find("screenOrientation");
  if (screen_orientation_value) {
    errors->SetName("screenOrientation");
    result->screen_orientation_ = internal::FromValue<::headless::emulation::ScreenOrientation>::Parse(*screen_orientation_value, errors);
  }
  const base::Value* viewport_value = dict.Find("viewport");
  if (viewport_value) {
    errors->SetName("viewport");
    result->viewport_ = internal::FromValue<::headless::page::Viewport>::Parse(*viewport_value, errors);
  }
  const base::Value* display_feature_value = dict.Find("displayFeature");
  if (display_feature_value) {
    errors->SetName("displayFeature");
    result->display_feature_ = internal::FromValue<::headless::emulation::DisplayFeature>::Parse(*display_feature_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetDeviceMetricsOverrideParams::Serialize() const {
  base::Value::Dict result;
  result.Set("width", internal::ToValue(width_));
  result.Set("height", internal::ToValue(height_));
  result.Set("deviceScaleFactor", internal::ToValue(device_scale_factor_));
  result.Set("mobile", internal::ToValue(mobile_));
  if (scale_)
    result.Set("scale", internal::ToValue(scale_.value()));
  if (screen_width_)
    result.Set("screenWidth", internal::ToValue(screen_width_.value()));
  if (screen_height_)
    result.Set("screenHeight", internal::ToValue(screen_height_.value()));
  if (positionx_)
    result.Set("positionX", internal::ToValue(positionx_.value()));
  if (positiony_)
    result.Set("positionY", internal::ToValue(positiony_.value()));
  if (dont_set_visible_size_)
    result.Set("dontSetVisibleSize", internal::ToValue(dont_set_visible_size_.value()));
  if (screen_orientation_)
    result.Set("screenOrientation", internal::ToValue(*screen_orientation_.value()));
  if (viewport_)
    result.Set("viewport", internal::ToValue(*viewport_.value()));
  if (display_feature_)
    result.Set("displayFeature", internal::ToValue(*display_feature_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetDeviceMetricsOverrideParams> SetDeviceMetricsOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetDeviceMetricsOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetDeviceMetricsOverrideResult> SetDeviceMetricsOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetDeviceMetricsOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetDeviceMetricsOverrideResult> result(new SetDeviceMetricsOverrideResult());
  errors->Push();
  errors->SetName("SetDeviceMetricsOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetDeviceMetricsOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetDeviceMetricsOverrideResult> SetDeviceMetricsOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetDeviceMetricsOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetScrollbarsHiddenParams> SetScrollbarsHiddenParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetScrollbarsHiddenParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetScrollbarsHiddenParams> result(new SetScrollbarsHiddenParams());
  errors->Push();
  errors->SetName("SetScrollbarsHiddenParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* hidden_value = dict.Find("hidden");
  if (hidden_value) {
    errors->SetName("hidden");
    result->hidden_ = internal::FromValue<bool>::Parse(*hidden_value, errors);
  } else {
    errors->AddError("required property missing: hidden");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetScrollbarsHiddenParams::Serialize() const {
  base::Value::Dict result;
  result.Set("hidden", internal::ToValue(hidden_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetScrollbarsHiddenParams> SetScrollbarsHiddenParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetScrollbarsHiddenParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetScrollbarsHiddenResult> SetScrollbarsHiddenResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetScrollbarsHiddenResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetScrollbarsHiddenResult> result(new SetScrollbarsHiddenResult());
  errors->Push();
  errors->SetName("SetScrollbarsHiddenResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetScrollbarsHiddenResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetScrollbarsHiddenResult> SetScrollbarsHiddenResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetScrollbarsHiddenResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetDocumentCookieDisabledParams> SetDocumentCookieDisabledParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetDocumentCookieDisabledParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetDocumentCookieDisabledParams> result(new SetDocumentCookieDisabledParams());
  errors->Push();
  errors->SetName("SetDocumentCookieDisabledParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* disabled_value = dict.Find("disabled");
  if (disabled_value) {
    errors->SetName("disabled");
    result->disabled_ = internal::FromValue<bool>::Parse(*disabled_value, errors);
  } else {
    errors->AddError("required property missing: disabled");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetDocumentCookieDisabledParams::Serialize() const {
  base::Value::Dict result;
  result.Set("disabled", internal::ToValue(disabled_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetDocumentCookieDisabledParams> SetDocumentCookieDisabledParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetDocumentCookieDisabledParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetDocumentCookieDisabledResult> SetDocumentCookieDisabledResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetDocumentCookieDisabledResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetDocumentCookieDisabledResult> result(new SetDocumentCookieDisabledResult());
  errors->Push();
  errors->SetName("SetDocumentCookieDisabledResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetDocumentCookieDisabledResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetDocumentCookieDisabledResult> SetDocumentCookieDisabledResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetDocumentCookieDisabledResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetEmitTouchEventsForMouseParams> SetEmitTouchEventsForMouseParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetEmitTouchEventsForMouseParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetEmitTouchEventsForMouseParams> result(new SetEmitTouchEventsForMouseParams());
  errors->Push();
  errors->SetName("SetEmitTouchEventsForMouseParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    errors->SetName("enabled");
    result->enabled_ = internal::FromValue<bool>::Parse(*enabled_value, errors);
  } else {
    errors->AddError("required property missing: enabled");
  }
  const base::Value* configuration_value = dict.Find("configuration");
  if (configuration_value) {
    errors->SetName("configuration");
    result->configuration_ = internal::FromValue<::headless::emulation::SetEmitTouchEventsForMouseConfiguration>::Parse(*configuration_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetEmitTouchEventsForMouseParams::Serialize() const {
  base::Value::Dict result;
  result.Set("enabled", internal::ToValue(enabled_));
  if (configuration_)
    result.Set("configuration", internal::ToValue(configuration_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetEmitTouchEventsForMouseParams> SetEmitTouchEventsForMouseParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetEmitTouchEventsForMouseParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetEmitTouchEventsForMouseResult> SetEmitTouchEventsForMouseResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetEmitTouchEventsForMouseResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetEmitTouchEventsForMouseResult> result(new SetEmitTouchEventsForMouseResult());
  errors->Push();
  errors->SetName("SetEmitTouchEventsForMouseResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetEmitTouchEventsForMouseResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetEmitTouchEventsForMouseResult> SetEmitTouchEventsForMouseResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetEmitTouchEventsForMouseResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetEmulatedMediaParams> SetEmulatedMediaParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetEmulatedMediaParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetEmulatedMediaParams> result(new SetEmulatedMediaParams());
  errors->Push();
  errors->SetName("SetEmulatedMediaParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* media_value = dict.Find("media");
  if (media_value) {
    errors->SetName("media");
    result->media_ = internal::FromValue<std::string>::Parse(*media_value, errors);
  }
  const base::Value* features_value = dict.Find("features");
  if (features_value) {
    errors->SetName("features");
    result->features_ = internal::FromValue<std::vector<std::unique_ptr<::headless::emulation::MediaFeature>>>::Parse(*features_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetEmulatedMediaParams::Serialize() const {
  base::Value::Dict result;
  if (media_)
    result.Set("media", internal::ToValue(media_.value()));
  if (features_)
    result.Set("features", internal::ToValue(features_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetEmulatedMediaParams> SetEmulatedMediaParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetEmulatedMediaParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetEmulatedMediaResult> SetEmulatedMediaResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetEmulatedMediaResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetEmulatedMediaResult> result(new SetEmulatedMediaResult());
  errors->Push();
  errors->SetName("SetEmulatedMediaResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetEmulatedMediaResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetEmulatedMediaResult> SetEmulatedMediaResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetEmulatedMediaResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetEmulatedVisionDeficiencyParams> SetEmulatedVisionDeficiencyParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetEmulatedVisionDeficiencyParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetEmulatedVisionDeficiencyParams> result(new SetEmulatedVisionDeficiencyParams());
  errors->Push();
  errors->SetName("SetEmulatedVisionDeficiencyParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::emulation::SetEmulatedVisionDeficiencyType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetEmulatedVisionDeficiencyParams::Serialize() const {
  base::Value::Dict result;
  result.Set("type", internal::ToValue(type_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetEmulatedVisionDeficiencyParams> SetEmulatedVisionDeficiencyParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetEmulatedVisionDeficiencyParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetEmulatedVisionDeficiencyResult> SetEmulatedVisionDeficiencyResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetEmulatedVisionDeficiencyResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetEmulatedVisionDeficiencyResult> result(new SetEmulatedVisionDeficiencyResult());
  errors->Push();
  errors->SetName("SetEmulatedVisionDeficiencyResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetEmulatedVisionDeficiencyResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetEmulatedVisionDeficiencyResult> SetEmulatedVisionDeficiencyResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetEmulatedVisionDeficiencyResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetGeolocationOverrideParams> SetGeolocationOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetGeolocationOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetGeolocationOverrideParams> result(new SetGeolocationOverrideParams());
  errors->Push();
  errors->SetName("SetGeolocationOverrideParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* latitude_value = dict.Find("latitude");
  if (latitude_value) {
    errors->SetName("latitude");
    result->latitude_ = internal::FromValue<double>::Parse(*latitude_value, errors);
  }
  const base::Value* longitude_value = dict.Find("longitude");
  if (longitude_value) {
    errors->SetName("longitude");
    result->longitude_ = internal::FromValue<double>::Parse(*longitude_value, errors);
  }
  const base::Value* accuracy_value = dict.Find("accuracy");
  if (accuracy_value) {
    errors->SetName("accuracy");
    result->accuracy_ = internal::FromValue<double>::Parse(*accuracy_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetGeolocationOverrideParams::Serialize() const {
  base::Value::Dict result;
  if (latitude_)
    result.Set("latitude", internal::ToValue(latitude_.value()));
  if (longitude_)
    result.Set("longitude", internal::ToValue(longitude_.value()));
  if (accuracy_)
    result.Set("accuracy", internal::ToValue(accuracy_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetGeolocationOverrideParams> SetGeolocationOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetGeolocationOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetGeolocationOverrideResult> SetGeolocationOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetGeolocationOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetGeolocationOverrideResult> result(new SetGeolocationOverrideResult());
  errors->Push();
  errors->SetName("SetGeolocationOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetGeolocationOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetGeolocationOverrideResult> SetGeolocationOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetGeolocationOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetOverriddenSensorInformationParams> GetOverriddenSensorInformationParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetOverriddenSensorInformationParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetOverriddenSensorInformationParams> result(new GetOverriddenSensorInformationParams());
  errors->Push();
  errors->SetName("GetOverriddenSensorInformationParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::emulation::SensorType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetOverriddenSensorInformationParams::Serialize() const {
  base::Value::Dict result;
  result.Set("type", internal::ToValue(type_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetOverriddenSensorInformationParams> GetOverriddenSensorInformationParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetOverriddenSensorInformationParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetOverriddenSensorInformationResult> GetOverriddenSensorInformationResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetOverriddenSensorInformationResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetOverriddenSensorInformationResult> result(new GetOverriddenSensorInformationResult());
  errors->Push();
  errors->SetName("GetOverriddenSensorInformationResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* requested_sampling_frequency_value = dict.Find("requestedSamplingFrequency");
  if (requested_sampling_frequency_value) {
    errors->SetName("requestedSamplingFrequency");
    result->requested_sampling_frequency_ = internal::FromValue<double>::Parse(*requested_sampling_frequency_value, errors);
  } else {
    errors->AddError("required property missing: requestedSamplingFrequency");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetOverriddenSensorInformationResult::Serialize() const {
  base::Value::Dict result;
  result.Set("requestedSamplingFrequency", internal::ToValue(requested_sampling_frequency_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetOverriddenSensorInformationResult> GetOverriddenSensorInformationResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetOverriddenSensorInformationResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetSensorOverrideEnabledParams> SetSensorOverrideEnabledParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetSensorOverrideEnabledParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetSensorOverrideEnabledParams> result(new SetSensorOverrideEnabledParams());
  errors->Push();
  errors->SetName("SetSensorOverrideEnabledParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    errors->SetName("enabled");
    result->enabled_ = internal::FromValue<bool>::Parse(*enabled_value, errors);
  } else {
    errors->AddError("required property missing: enabled");
  }
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::emulation::SensorType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  const base::Value* metadata_value = dict.Find("metadata");
  if (metadata_value) {
    errors->SetName("metadata");
    result->metadata_ = internal::FromValue<::headless::emulation::SensorMetadata>::Parse(*metadata_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetSensorOverrideEnabledParams::Serialize() const {
  base::Value::Dict result;
  result.Set("enabled", internal::ToValue(enabled_));
  result.Set("type", internal::ToValue(type_));
  if (metadata_)
    result.Set("metadata", internal::ToValue(*metadata_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetSensorOverrideEnabledParams> SetSensorOverrideEnabledParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetSensorOverrideEnabledParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetSensorOverrideEnabledResult> SetSensorOverrideEnabledResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetSensorOverrideEnabledResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetSensorOverrideEnabledResult> result(new SetSensorOverrideEnabledResult());
  errors->Push();
  errors->SetName("SetSensorOverrideEnabledResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetSensorOverrideEnabledResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetSensorOverrideEnabledResult> SetSensorOverrideEnabledResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetSensorOverrideEnabledResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetSensorOverrideReadingsParams> SetSensorOverrideReadingsParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetSensorOverrideReadingsParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetSensorOverrideReadingsParams> result(new SetSensorOverrideReadingsParams());
  errors->Push();
  errors->SetName("SetSensorOverrideReadingsParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<::headless::emulation::SensorType>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  const base::Value* reading_value = dict.Find("reading");
  if (reading_value) {
    errors->SetName("reading");
    result->reading_ = internal::FromValue<::headless::emulation::SensorReading>::Parse(*reading_value, errors);
  } else {
    errors->AddError("required property missing: reading");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetSensorOverrideReadingsParams::Serialize() const {
  base::Value::Dict result;
  result.Set("type", internal::ToValue(type_));
  result.Set("reading", internal::ToValue(*reading_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetSensorOverrideReadingsParams> SetSensorOverrideReadingsParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetSensorOverrideReadingsParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetSensorOverrideReadingsResult> SetSensorOverrideReadingsResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetSensorOverrideReadingsResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetSensorOverrideReadingsResult> result(new SetSensorOverrideReadingsResult());
  errors->Push();
  errors->SetName("SetSensorOverrideReadingsResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetSensorOverrideReadingsResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetSensorOverrideReadingsResult> SetSensorOverrideReadingsResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetSensorOverrideReadingsResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetIdleOverrideParams> SetIdleOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetIdleOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetIdleOverrideParams> result(new SetIdleOverrideParams());
  errors->Push();
  errors->SetName("SetIdleOverrideParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* is_user_active_value = dict.Find("isUserActive");
  if (is_user_active_value) {
    errors->SetName("isUserActive");
    result->is_user_active_ = internal::FromValue<bool>::Parse(*is_user_active_value, errors);
  } else {
    errors->AddError("required property missing: isUserActive");
  }
  const base::Value* is_screen_unlocked_value = dict.Find("isScreenUnlocked");
  if (is_screen_unlocked_value) {
    errors->SetName("isScreenUnlocked");
    result->is_screen_unlocked_ = internal::FromValue<bool>::Parse(*is_screen_unlocked_value, errors);
  } else {
    errors->AddError("required property missing: isScreenUnlocked");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetIdleOverrideParams::Serialize() const {
  base::Value::Dict result;
  result.Set("isUserActive", internal::ToValue(is_user_active_));
  result.Set("isScreenUnlocked", internal::ToValue(is_screen_unlocked_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetIdleOverrideParams> SetIdleOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetIdleOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetIdleOverrideResult> SetIdleOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetIdleOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetIdleOverrideResult> result(new SetIdleOverrideResult());
  errors->Push();
  errors->SetName("SetIdleOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetIdleOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetIdleOverrideResult> SetIdleOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetIdleOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearIdleOverrideParams> ClearIdleOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearIdleOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearIdleOverrideParams> result(new ClearIdleOverrideParams());
  errors->Push();
  errors->SetName("ClearIdleOverrideParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearIdleOverrideParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearIdleOverrideParams> ClearIdleOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearIdleOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ClearIdleOverrideResult> ClearIdleOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ClearIdleOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ClearIdleOverrideResult> result(new ClearIdleOverrideResult());
  errors->Push();
  errors->SetName("ClearIdleOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ClearIdleOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<ClearIdleOverrideResult> ClearIdleOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ClearIdleOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetNavigatorOverridesParams> SetNavigatorOverridesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetNavigatorOverridesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetNavigatorOverridesParams> result(new SetNavigatorOverridesParams());
  errors->Push();
  errors->SetName("SetNavigatorOverridesParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* platform_value = dict.Find("platform");
  if (platform_value) {
    errors->SetName("platform");
    result->platform_ = internal::FromValue<std::string>::Parse(*platform_value, errors);
  } else {
    errors->AddError("required property missing: platform");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetNavigatorOverridesParams::Serialize() const {
  base::Value::Dict result;
  result.Set("platform", internal::ToValue(platform_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetNavigatorOverridesParams> SetNavigatorOverridesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetNavigatorOverridesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetNavigatorOverridesResult> SetNavigatorOverridesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetNavigatorOverridesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetNavigatorOverridesResult> result(new SetNavigatorOverridesResult());
  errors->Push();
  errors->SetName("SetNavigatorOverridesResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetNavigatorOverridesResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetNavigatorOverridesResult> SetNavigatorOverridesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetNavigatorOverridesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetPageScaleFactorParams> SetPageScaleFactorParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetPageScaleFactorParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetPageScaleFactorParams> result(new SetPageScaleFactorParams());
  errors->Push();
  errors->SetName("SetPageScaleFactorParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* page_scale_factor_value = dict.Find("pageScaleFactor");
  if (page_scale_factor_value) {
    errors->SetName("pageScaleFactor");
    result->page_scale_factor_ = internal::FromValue<double>::Parse(*page_scale_factor_value, errors);
  } else {
    errors->AddError("required property missing: pageScaleFactor");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetPageScaleFactorParams::Serialize() const {
  base::Value::Dict result;
  result.Set("pageScaleFactor", internal::ToValue(page_scale_factor_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetPageScaleFactorParams> SetPageScaleFactorParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetPageScaleFactorParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetPageScaleFactorResult> SetPageScaleFactorResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetPageScaleFactorResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetPageScaleFactorResult> result(new SetPageScaleFactorResult());
  errors->Push();
  errors->SetName("SetPageScaleFactorResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetPageScaleFactorResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetPageScaleFactorResult> SetPageScaleFactorResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetPageScaleFactorResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetScriptExecutionDisabledParams> SetScriptExecutionDisabledParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetScriptExecutionDisabledParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetScriptExecutionDisabledParams> result(new SetScriptExecutionDisabledParams());
  errors->Push();
  errors->SetName("SetScriptExecutionDisabledParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    errors->SetName("value");
    result->value_ = internal::FromValue<bool>::Parse(*value_value, errors);
  } else {
    errors->AddError("required property missing: value");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetScriptExecutionDisabledParams::Serialize() const {
  base::Value::Dict result;
  result.Set("value", internal::ToValue(value_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetScriptExecutionDisabledParams> SetScriptExecutionDisabledParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetScriptExecutionDisabledParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetScriptExecutionDisabledResult> SetScriptExecutionDisabledResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetScriptExecutionDisabledResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetScriptExecutionDisabledResult> result(new SetScriptExecutionDisabledResult());
  errors->Push();
  errors->SetName("SetScriptExecutionDisabledResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetScriptExecutionDisabledResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetScriptExecutionDisabledResult> SetScriptExecutionDisabledResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetScriptExecutionDisabledResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetTouchEmulationEnabledParams> SetTouchEmulationEnabledParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetTouchEmulationEnabledParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetTouchEmulationEnabledParams> result(new SetTouchEmulationEnabledParams());
  errors->Push();
  errors->SetName("SetTouchEmulationEnabledParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    errors->SetName("enabled");
    result->enabled_ = internal::FromValue<bool>::Parse(*enabled_value, errors);
  } else {
    errors->AddError("required property missing: enabled");
  }
  const base::Value* max_touch_points_value = dict.Find("maxTouchPoints");
  if (max_touch_points_value) {
    errors->SetName("maxTouchPoints");
    result->max_touch_points_ = internal::FromValue<int>::Parse(*max_touch_points_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetTouchEmulationEnabledParams::Serialize() const {
  base::Value::Dict result;
  result.Set("enabled", internal::ToValue(enabled_));
  if (max_touch_points_)
    result.Set("maxTouchPoints", internal::ToValue(max_touch_points_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetTouchEmulationEnabledParams> SetTouchEmulationEnabledParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetTouchEmulationEnabledParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetTouchEmulationEnabledResult> SetTouchEmulationEnabledResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetTouchEmulationEnabledResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetTouchEmulationEnabledResult> result(new SetTouchEmulationEnabledResult());
  errors->Push();
  errors->SetName("SetTouchEmulationEnabledResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetTouchEmulationEnabledResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetTouchEmulationEnabledResult> SetTouchEmulationEnabledResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetTouchEmulationEnabledResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetVirtualTimePolicyParams> SetVirtualTimePolicyParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetVirtualTimePolicyParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetVirtualTimePolicyParams> result(new SetVirtualTimePolicyParams());
  errors->Push();
  errors->SetName("SetVirtualTimePolicyParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* policy_value = dict.Find("policy");
  if (policy_value) {
    errors->SetName("policy");
    result->policy_ = internal::FromValue<::headless::emulation::VirtualTimePolicy>::Parse(*policy_value, errors);
  } else {
    errors->AddError("required property missing: policy");
  }
  const base::Value* budget_value = dict.Find("budget");
  if (budget_value) {
    errors->SetName("budget");
    result->budget_ = internal::FromValue<double>::Parse(*budget_value, errors);
  }
  const base::Value* max_virtual_time_task_starvation_count_value = dict.Find("maxVirtualTimeTaskStarvationCount");
  if (max_virtual_time_task_starvation_count_value) {
    errors->SetName("maxVirtualTimeTaskStarvationCount");
    result->max_virtual_time_task_starvation_count_ = internal::FromValue<int>::Parse(*max_virtual_time_task_starvation_count_value, errors);
  }
  const base::Value* initial_virtual_time_value = dict.Find("initialVirtualTime");
  if (initial_virtual_time_value) {
    errors->SetName("initialVirtualTime");
    result->initial_virtual_time_ = internal::FromValue<double>::Parse(*initial_virtual_time_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetVirtualTimePolicyParams::Serialize() const {
  base::Value::Dict result;
  result.Set("policy", internal::ToValue(policy_));
  if (budget_)
    result.Set("budget", internal::ToValue(budget_.value()));
  if (max_virtual_time_task_starvation_count_)
    result.Set("maxVirtualTimeTaskStarvationCount", internal::ToValue(max_virtual_time_task_starvation_count_.value()));
  if (initial_virtual_time_)
    result.Set("initialVirtualTime", internal::ToValue(initial_virtual_time_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetVirtualTimePolicyParams> SetVirtualTimePolicyParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetVirtualTimePolicyParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetVirtualTimePolicyResult> SetVirtualTimePolicyResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetVirtualTimePolicyResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetVirtualTimePolicyResult> result(new SetVirtualTimePolicyResult());
  errors->Push();
  errors->SetName("SetVirtualTimePolicyResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* virtual_time_ticks_base_value = dict.Find("virtualTimeTicksBase");
  if (virtual_time_ticks_base_value) {
    errors->SetName("virtualTimeTicksBase");
    result->virtual_time_ticks_base_ = internal::FromValue<double>::Parse(*virtual_time_ticks_base_value, errors);
  } else {
    errors->AddError("required property missing: virtualTimeTicksBase");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetVirtualTimePolicyResult::Serialize() const {
  base::Value::Dict result;
  result.Set("virtualTimeTicksBase", internal::ToValue(virtual_time_ticks_base_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetVirtualTimePolicyResult> SetVirtualTimePolicyResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetVirtualTimePolicyResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetLocaleOverrideParams> SetLocaleOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetLocaleOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetLocaleOverrideParams> result(new SetLocaleOverrideParams());
  errors->Push();
  errors->SetName("SetLocaleOverrideParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* locale_value = dict.Find("locale");
  if (locale_value) {
    errors->SetName("locale");
    result->locale_ = internal::FromValue<std::string>::Parse(*locale_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetLocaleOverrideParams::Serialize() const {
  base::Value::Dict result;
  if (locale_)
    result.Set("locale", internal::ToValue(locale_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetLocaleOverrideParams> SetLocaleOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetLocaleOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetLocaleOverrideResult> SetLocaleOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetLocaleOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetLocaleOverrideResult> result(new SetLocaleOverrideResult());
  errors->Push();
  errors->SetName("SetLocaleOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetLocaleOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetLocaleOverrideResult> SetLocaleOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetLocaleOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetTimezoneOverrideParams> SetTimezoneOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetTimezoneOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetTimezoneOverrideParams> result(new SetTimezoneOverrideParams());
  errors->Push();
  errors->SetName("SetTimezoneOverrideParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* timezone_id_value = dict.Find("timezoneId");
  if (timezone_id_value) {
    errors->SetName("timezoneId");
    result->timezone_id_ = internal::FromValue<std::string>::Parse(*timezone_id_value, errors);
  } else {
    errors->AddError("required property missing: timezoneId");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetTimezoneOverrideParams::Serialize() const {
  base::Value::Dict result;
  result.Set("timezoneId", internal::ToValue(timezone_id_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetTimezoneOverrideParams> SetTimezoneOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetTimezoneOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetTimezoneOverrideResult> SetTimezoneOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetTimezoneOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetTimezoneOverrideResult> result(new SetTimezoneOverrideResult());
  errors->Push();
  errors->SetName("SetTimezoneOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetTimezoneOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetTimezoneOverrideResult> SetTimezoneOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetTimezoneOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetVisibleSizeParams> SetVisibleSizeParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetVisibleSizeParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetVisibleSizeParams> result(new SetVisibleSizeParams());
  errors->Push();
  errors->SetName("SetVisibleSizeParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* width_value = dict.Find("width");
  if (width_value) {
    errors->SetName("width");
    result->width_ = internal::FromValue<int>::Parse(*width_value, errors);
  } else {
    errors->AddError("required property missing: width");
  }
  const base::Value* height_value = dict.Find("height");
  if (height_value) {
    errors->SetName("height");
    result->height_ = internal::FromValue<int>::Parse(*height_value, errors);
  } else {
    errors->AddError("required property missing: height");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetVisibleSizeParams::Serialize() const {
  base::Value::Dict result;
  result.Set("width", internal::ToValue(width_));
  result.Set("height", internal::ToValue(height_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetVisibleSizeParams> SetVisibleSizeParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetVisibleSizeParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetVisibleSizeResult> SetVisibleSizeResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetVisibleSizeResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetVisibleSizeResult> result(new SetVisibleSizeResult());
  errors->Push();
  errors->SetName("SetVisibleSizeResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetVisibleSizeResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetVisibleSizeResult> SetVisibleSizeResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetVisibleSizeResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetDisabledImageTypesParams> SetDisabledImageTypesParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetDisabledImageTypesParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetDisabledImageTypesParams> result(new SetDisabledImageTypesParams());
  errors->Push();
  errors->SetName("SetDisabledImageTypesParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* image_types_value = dict.Find("imageTypes");
  if (image_types_value) {
    errors->SetName("imageTypes");
    result->image_types_ = internal::FromValue<std::vector<::headless::emulation::DisabledImageType>>::Parse(*image_types_value, errors);
  } else {
    errors->AddError("required property missing: imageTypes");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetDisabledImageTypesParams::Serialize() const {
  base::Value::Dict result;
  result.Set("imageTypes", internal::ToValue(image_types_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetDisabledImageTypesParams> SetDisabledImageTypesParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetDisabledImageTypesParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetDisabledImageTypesResult> SetDisabledImageTypesResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetDisabledImageTypesResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetDisabledImageTypesResult> result(new SetDisabledImageTypesResult());
  errors->Push();
  errors->SetName("SetDisabledImageTypesResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetDisabledImageTypesResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetDisabledImageTypesResult> SetDisabledImageTypesResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetDisabledImageTypesResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetHardwareConcurrencyOverrideParams> SetHardwareConcurrencyOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetHardwareConcurrencyOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetHardwareConcurrencyOverrideParams> result(new SetHardwareConcurrencyOverrideParams());
  errors->Push();
  errors->SetName("SetHardwareConcurrencyOverrideParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* hardware_concurrency_value = dict.Find("hardwareConcurrency");
  if (hardware_concurrency_value) {
    errors->SetName("hardwareConcurrency");
    result->hardware_concurrency_ = internal::FromValue<int>::Parse(*hardware_concurrency_value, errors);
  } else {
    errors->AddError("required property missing: hardwareConcurrency");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetHardwareConcurrencyOverrideParams::Serialize() const {
  base::Value::Dict result;
  result.Set("hardwareConcurrency", internal::ToValue(hardware_concurrency_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetHardwareConcurrencyOverrideParams> SetHardwareConcurrencyOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetHardwareConcurrencyOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetHardwareConcurrencyOverrideResult> SetHardwareConcurrencyOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetHardwareConcurrencyOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetHardwareConcurrencyOverrideResult> result(new SetHardwareConcurrencyOverrideResult());
  errors->Push();
  errors->SetName("SetHardwareConcurrencyOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetHardwareConcurrencyOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetHardwareConcurrencyOverrideResult> SetHardwareConcurrencyOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetHardwareConcurrencyOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetUserAgentOverrideParams> SetUserAgentOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetUserAgentOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetUserAgentOverrideParams> result(new SetUserAgentOverrideParams());
  errors->Push();
  errors->SetName("SetUserAgentOverrideParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* user_agent_value = dict.Find("userAgent");
  if (user_agent_value) {
    errors->SetName("userAgent");
    result->user_agent_ = internal::FromValue<std::string>::Parse(*user_agent_value, errors);
  } else {
    errors->AddError("required property missing: userAgent");
  }
  const base::Value* accept_language_value = dict.Find("acceptLanguage");
  if (accept_language_value) {
    errors->SetName("acceptLanguage");
    result->accept_language_ = internal::FromValue<std::string>::Parse(*accept_language_value, errors);
  }
  const base::Value* platform_value = dict.Find("platform");
  if (platform_value) {
    errors->SetName("platform");
    result->platform_ = internal::FromValue<std::string>::Parse(*platform_value, errors);
  }
  const base::Value* user_agent_metadata_value = dict.Find("userAgentMetadata");
  if (user_agent_metadata_value) {
    errors->SetName("userAgentMetadata");
    result->user_agent_metadata_ = internal::FromValue<::headless::emulation::UserAgentMetadata>::Parse(*user_agent_metadata_value, errors);
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetUserAgentOverrideParams::Serialize() const {
  base::Value::Dict result;
  result.Set("userAgent", internal::ToValue(user_agent_));
  if (accept_language_)
    result.Set("acceptLanguage", internal::ToValue(accept_language_.value()));
  if (platform_)
    result.Set("platform", internal::ToValue(platform_.value()));
  if (user_agent_metadata_)
    result.Set("userAgentMetadata", internal::ToValue(*user_agent_metadata_.value()));
  return base::Value(std::move(result));
}

std::unique_ptr<SetUserAgentOverrideParams> SetUserAgentOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetUserAgentOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetUserAgentOverrideResult> SetUserAgentOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetUserAgentOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetUserAgentOverrideResult> result(new SetUserAgentOverrideResult());
  errors->Push();
  errors->SetName("SetUserAgentOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetUserAgentOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetUserAgentOverrideResult> SetUserAgentOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetUserAgentOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetAutomationOverrideParams> SetAutomationOverrideParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetAutomationOverrideParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetAutomationOverrideParams> result(new SetAutomationOverrideParams());
  errors->Push();
  errors->SetName("SetAutomationOverrideParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* enabled_value = dict.Find("enabled");
  if (enabled_value) {
    errors->SetName("enabled");
    result->enabled_ = internal::FromValue<bool>::Parse(*enabled_value, errors);
  } else {
    errors->AddError("required property missing: enabled");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetAutomationOverrideParams::Serialize() const {
  base::Value::Dict result;
  result.Set("enabled", internal::ToValue(enabled_));
  return base::Value(std::move(result));
}

std::unique_ptr<SetAutomationOverrideParams> SetAutomationOverrideParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetAutomationOverrideParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<SetAutomationOverrideResult> SetAutomationOverrideResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("SetAutomationOverrideResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<SetAutomationOverrideResult> result(new SetAutomationOverrideResult());
  errors->Push();
  errors->SetName("SetAutomationOverrideResult");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value SetAutomationOverrideResult::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<SetAutomationOverrideResult> SetAutomationOverrideResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<SetAutomationOverrideResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<VirtualTimeBudgetExpiredParams> VirtualTimeBudgetExpiredParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("VirtualTimeBudgetExpiredParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<VirtualTimeBudgetExpiredParams> result(new VirtualTimeBudgetExpiredParams());
  errors->Push();
  errors->SetName("VirtualTimeBudgetExpiredParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value VirtualTimeBudgetExpiredParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<VirtualTimeBudgetExpiredParams> VirtualTimeBudgetExpiredParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<VirtualTimeBudgetExpiredParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


}  // namespace emulation
}  // namespace headless
