// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "headless/public/devtools/domains/types_system_info.h"

#include "base/values.h"
#include "headless/public/devtools/internal/type_conversions_system_info.h"

namespace headless {

namespace system_info {

std::unique_ptr<GPUDevice> GPUDevice::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GPUDevice");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GPUDevice> result(new GPUDevice());
  errors->Push();
  errors->SetName("GPUDevice");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* vendor_id_value = dict.Find("vendorId");
  if (vendor_id_value) {
    errors->SetName("vendorId");
    result->vendor_id_ = internal::FromValue<double>::Parse(*vendor_id_value, errors);
  } else {
    errors->AddError("required property missing: vendorId");
  }
  const base::Value* device_id_value = dict.Find("deviceId");
  if (device_id_value) {
    errors->SetName("deviceId");
    result->device_id_ = internal::FromValue<double>::Parse(*device_id_value, errors);
  } else {
    errors->AddError("required property missing: deviceId");
  }
  const base::Value* sub_sys_id_value = dict.Find("subSysId");
  if (sub_sys_id_value) {
    errors->SetName("subSysId");
    result->sub_sys_id_ = internal::FromValue<double>::Parse(*sub_sys_id_value, errors);
  }
  const base::Value* revision_value = dict.Find("revision");
  if (revision_value) {
    errors->SetName("revision");
    result->revision_ = internal::FromValue<double>::Parse(*revision_value, errors);
  }
  const base::Value* vendor_string_value = dict.Find("vendorString");
  if (vendor_string_value) {
    errors->SetName("vendorString");
    result->vendor_string_ = internal::FromValue<std::string>::Parse(*vendor_string_value, errors);
  } else {
    errors->AddError("required property missing: vendorString");
  }
  const base::Value* device_string_value = dict.Find("deviceString");
  if (device_string_value) {
    errors->SetName("deviceString");
    result->device_string_ = internal::FromValue<std::string>::Parse(*device_string_value, errors);
  } else {
    errors->AddError("required property missing: deviceString");
  }
  const base::Value* driver_vendor_value = dict.Find("driverVendor");
  if (driver_vendor_value) {
    errors->SetName("driverVendor");
    result->driver_vendor_ = internal::FromValue<std::string>::Parse(*driver_vendor_value, errors);
  } else {
    errors->AddError("required property missing: driverVendor");
  }
  const base::Value* driver_version_value = dict.Find("driverVersion");
  if (driver_version_value) {
    errors->SetName("driverVersion");
    result->driver_version_ = internal::FromValue<std::string>::Parse(*driver_version_value, errors);
  } else {
    errors->AddError("required property missing: driverVersion");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GPUDevice::Serialize() const {
  base::Value::Dict result;
  result.Set("vendorId", internal::ToValue(vendor_id_));
  result.Set("deviceId", internal::ToValue(device_id_));
  if (sub_sys_id_)
    result.Set("subSysId", internal::ToValue(sub_sys_id_.value()));
  if (revision_)
    result.Set("revision", internal::ToValue(revision_.value()));
  result.Set("vendorString", internal::ToValue(vendor_string_));
  result.Set("deviceString", internal::ToValue(device_string_));
  result.Set("driverVendor", internal::ToValue(driver_vendor_));
  result.Set("driverVersion", internal::ToValue(driver_version_));
  return base::Value(std::move(result));
}

std::unique_ptr<GPUDevice> GPUDevice::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GPUDevice> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<Size> Size::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("Size");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<Size> result(new Size());
  errors->Push();
  errors->SetName("Size");
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

base::Value Size::Serialize() const {
  base::Value::Dict result;
  result.Set("width", internal::ToValue(width_));
  result.Set("height", internal::ToValue(height_));
  return base::Value(std::move(result));
}

std::unique_ptr<Size> Size::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<Size> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<VideoDecodeAcceleratorCapability> VideoDecodeAcceleratorCapability::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("VideoDecodeAcceleratorCapability");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<VideoDecodeAcceleratorCapability> result(new VideoDecodeAcceleratorCapability());
  errors->Push();
  errors->SetName("VideoDecodeAcceleratorCapability");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* profile_value = dict.Find("profile");
  if (profile_value) {
    errors->SetName("profile");
    result->profile_ = internal::FromValue<std::string>::Parse(*profile_value, errors);
  } else {
    errors->AddError("required property missing: profile");
  }
  const base::Value* max_resolution_value = dict.Find("maxResolution");
  if (max_resolution_value) {
    errors->SetName("maxResolution");
    result->max_resolution_ = internal::FromValue<::headless::system_info::Size>::Parse(*max_resolution_value, errors);
  } else {
    errors->AddError("required property missing: maxResolution");
  }
  const base::Value* min_resolution_value = dict.Find("minResolution");
  if (min_resolution_value) {
    errors->SetName("minResolution");
    result->min_resolution_ = internal::FromValue<::headless::system_info::Size>::Parse(*min_resolution_value, errors);
  } else {
    errors->AddError("required property missing: minResolution");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value VideoDecodeAcceleratorCapability::Serialize() const {
  base::Value::Dict result;
  result.Set("profile", internal::ToValue(profile_));
  result.Set("maxResolution", internal::ToValue(*max_resolution_));
  result.Set("minResolution", internal::ToValue(*min_resolution_));
  return base::Value(std::move(result));
}

std::unique_ptr<VideoDecodeAcceleratorCapability> VideoDecodeAcceleratorCapability::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<VideoDecodeAcceleratorCapability> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<VideoEncodeAcceleratorCapability> VideoEncodeAcceleratorCapability::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("VideoEncodeAcceleratorCapability");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<VideoEncodeAcceleratorCapability> result(new VideoEncodeAcceleratorCapability());
  errors->Push();
  errors->SetName("VideoEncodeAcceleratorCapability");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* profile_value = dict.Find("profile");
  if (profile_value) {
    errors->SetName("profile");
    result->profile_ = internal::FromValue<std::string>::Parse(*profile_value, errors);
  } else {
    errors->AddError("required property missing: profile");
  }
  const base::Value* max_resolution_value = dict.Find("maxResolution");
  if (max_resolution_value) {
    errors->SetName("maxResolution");
    result->max_resolution_ = internal::FromValue<::headless::system_info::Size>::Parse(*max_resolution_value, errors);
  } else {
    errors->AddError("required property missing: maxResolution");
  }
  const base::Value* max_framerate_numerator_value = dict.Find("maxFramerateNumerator");
  if (max_framerate_numerator_value) {
    errors->SetName("maxFramerateNumerator");
    result->max_framerate_numerator_ = internal::FromValue<int>::Parse(*max_framerate_numerator_value, errors);
  } else {
    errors->AddError("required property missing: maxFramerateNumerator");
  }
  const base::Value* max_framerate_denominator_value = dict.Find("maxFramerateDenominator");
  if (max_framerate_denominator_value) {
    errors->SetName("maxFramerateDenominator");
    result->max_framerate_denominator_ = internal::FromValue<int>::Parse(*max_framerate_denominator_value, errors);
  } else {
    errors->AddError("required property missing: maxFramerateDenominator");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value VideoEncodeAcceleratorCapability::Serialize() const {
  base::Value::Dict result;
  result.Set("profile", internal::ToValue(profile_));
  result.Set("maxResolution", internal::ToValue(*max_resolution_));
  result.Set("maxFramerateNumerator", internal::ToValue(max_framerate_numerator_));
  result.Set("maxFramerateDenominator", internal::ToValue(max_framerate_denominator_));
  return base::Value(std::move(result));
}

std::unique_ptr<VideoEncodeAcceleratorCapability> VideoEncodeAcceleratorCapability::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<VideoEncodeAcceleratorCapability> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ImageDecodeAcceleratorCapability> ImageDecodeAcceleratorCapability::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ImageDecodeAcceleratorCapability");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ImageDecodeAcceleratorCapability> result(new ImageDecodeAcceleratorCapability());
  errors->Push();
  errors->SetName("ImageDecodeAcceleratorCapability");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* image_type_value = dict.Find("imageType");
  if (image_type_value) {
    errors->SetName("imageType");
    result->image_type_ = internal::FromValue<::headless::system_info::ImageType>::Parse(*image_type_value, errors);
  } else {
    errors->AddError("required property missing: imageType");
  }
  const base::Value* max_dimensions_value = dict.Find("maxDimensions");
  if (max_dimensions_value) {
    errors->SetName("maxDimensions");
    result->max_dimensions_ = internal::FromValue<::headless::system_info::Size>::Parse(*max_dimensions_value, errors);
  } else {
    errors->AddError("required property missing: maxDimensions");
  }
  const base::Value* min_dimensions_value = dict.Find("minDimensions");
  if (min_dimensions_value) {
    errors->SetName("minDimensions");
    result->min_dimensions_ = internal::FromValue<::headless::system_info::Size>::Parse(*min_dimensions_value, errors);
  } else {
    errors->AddError("required property missing: minDimensions");
  }
  const base::Value* subsamplings_value = dict.Find("subsamplings");
  if (subsamplings_value) {
    errors->SetName("subsamplings");
    result->subsamplings_ = internal::FromValue<std::vector<::headless::system_info::SubsamplingFormat>>::Parse(*subsamplings_value, errors);
  } else {
    errors->AddError("required property missing: subsamplings");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ImageDecodeAcceleratorCapability::Serialize() const {
  base::Value::Dict result;
  result.Set("imageType", internal::ToValue(image_type_));
  result.Set("maxDimensions", internal::ToValue(*max_dimensions_));
  result.Set("minDimensions", internal::ToValue(*min_dimensions_));
  result.Set("subsamplings", internal::ToValue(subsamplings_));
  return base::Value(std::move(result));
}

std::unique_ptr<ImageDecodeAcceleratorCapability> ImageDecodeAcceleratorCapability::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ImageDecodeAcceleratorCapability> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GPUInfo> GPUInfo::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GPUInfo");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GPUInfo> result(new GPUInfo());
  errors->Push();
  errors->SetName("GPUInfo");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* devices_value = dict.Find("devices");
  if (devices_value) {
    errors->SetName("devices");
    result->devices_ = internal::FromValue<std::vector<std::unique_ptr<::headless::system_info::GPUDevice>>>::Parse(*devices_value, errors);
  } else {
    errors->AddError("required property missing: devices");
  }
  const base::Value* aux_attributes_value = dict.Find("auxAttributes");
  if (aux_attributes_value) {
    errors->SetName("auxAttributes");
    result->aux_attributes_ = internal::FromValue<base::Value>::Parse(*aux_attributes_value, errors);
  }
  const base::Value* feature_status_value = dict.Find("featureStatus");
  if (feature_status_value) {
    errors->SetName("featureStatus");
    result->feature_status_ = internal::FromValue<base::Value>::Parse(*feature_status_value, errors);
  }
  const base::Value* driver_bug_workarounds_value = dict.Find("driverBugWorkarounds");
  if (driver_bug_workarounds_value) {
    errors->SetName("driverBugWorkarounds");
    result->driver_bug_workarounds_ = internal::FromValue<std::vector<std::string>>::Parse(*driver_bug_workarounds_value, errors);
  } else {
    errors->AddError("required property missing: driverBugWorkarounds");
  }
  const base::Value* video_decoding_value = dict.Find("videoDecoding");
  if (video_decoding_value) {
    errors->SetName("videoDecoding");
    result->video_decoding_ = internal::FromValue<std::vector<std::unique_ptr<::headless::system_info::VideoDecodeAcceleratorCapability>>>::Parse(*video_decoding_value, errors);
  } else {
    errors->AddError("required property missing: videoDecoding");
  }
  const base::Value* video_encoding_value = dict.Find("videoEncoding");
  if (video_encoding_value) {
    errors->SetName("videoEncoding");
    result->video_encoding_ = internal::FromValue<std::vector<std::unique_ptr<::headless::system_info::VideoEncodeAcceleratorCapability>>>::Parse(*video_encoding_value, errors);
  } else {
    errors->AddError("required property missing: videoEncoding");
  }
  const base::Value* image_decoding_value = dict.Find("imageDecoding");
  if (image_decoding_value) {
    errors->SetName("imageDecoding");
    result->image_decoding_ = internal::FromValue<std::vector<std::unique_ptr<::headless::system_info::ImageDecodeAcceleratorCapability>>>::Parse(*image_decoding_value, errors);
  } else {
    errors->AddError("required property missing: imageDecoding");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GPUInfo::Serialize() const {
  base::Value::Dict result;
  result.Set("devices", internal::ToValue(devices_));
  if (aux_attributes_)
    result.Set("auxAttributes", internal::ToValue(*aux_attributes_.value()));
  if (feature_status_)
    result.Set("featureStatus", internal::ToValue(*feature_status_.value()));
  result.Set("driverBugWorkarounds", internal::ToValue(driver_bug_workarounds_));
  result.Set("videoDecoding", internal::ToValue(video_decoding_));
  result.Set("videoEncoding", internal::ToValue(video_encoding_));
  result.Set("imageDecoding", internal::ToValue(image_decoding_));
  return base::Value(std::move(result));
}

std::unique_ptr<GPUInfo> GPUInfo::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GPUInfo> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<ProcessInfo> ProcessInfo::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("ProcessInfo");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<ProcessInfo> result(new ProcessInfo());
  errors->Push();
  errors->SetName("ProcessInfo");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    errors->SetName("type");
    result->type_ = internal::FromValue<std::string>::Parse(*type_value, errors);
  } else {
    errors->AddError("required property missing: type");
  }
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    errors->SetName("id");
    result->id_ = internal::FromValue<int>::Parse(*id_value, errors);
  } else {
    errors->AddError("required property missing: id");
  }
  const base::Value* cpu_time_value = dict.Find("cpuTime");
  if (cpu_time_value) {
    errors->SetName("cpuTime");
    result->cpu_time_ = internal::FromValue<double>::Parse(*cpu_time_value, errors);
  } else {
    errors->AddError("required property missing: cpuTime");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value ProcessInfo::Serialize() const {
  base::Value::Dict result;
  result.Set("type", internal::ToValue(type_));
  result.Set("id", internal::ToValue(id_));
  result.Set("cpuTime", internal::ToValue(cpu_time_));
  return base::Value(std::move(result));
}

std::unique_ptr<ProcessInfo> ProcessInfo::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<ProcessInfo> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetInfoParams> GetInfoParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetInfoParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetInfoParams> result(new GetInfoParams());
  errors->Push();
  errors->SetName("GetInfoParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetInfoParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<GetInfoParams> GetInfoParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetInfoParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetInfoResult> GetInfoResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetInfoResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetInfoResult> result(new GetInfoResult());
  errors->Push();
  errors->SetName("GetInfoResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* gpu_value = dict.Find("gpu");
  if (gpu_value) {
    errors->SetName("gpu");
    result->gpu_ = internal::FromValue<::headless::system_info::GPUInfo>::Parse(*gpu_value, errors);
  } else {
    errors->AddError("required property missing: gpu");
  }
  const base::Value* model_name_value = dict.Find("modelName");
  if (model_name_value) {
    errors->SetName("modelName");
    result->model_name_ = internal::FromValue<std::string>::Parse(*model_name_value, errors);
  } else {
    errors->AddError("required property missing: modelName");
  }
  const base::Value* model_version_value = dict.Find("modelVersion");
  if (model_version_value) {
    errors->SetName("modelVersion");
    result->model_version_ = internal::FromValue<std::string>::Parse(*model_version_value, errors);
  } else {
    errors->AddError("required property missing: modelVersion");
  }
  const base::Value* command_line_value = dict.Find("commandLine");
  if (command_line_value) {
    errors->SetName("commandLine");
    result->command_line_ = internal::FromValue<std::string>::Parse(*command_line_value, errors);
  } else {
    errors->AddError("required property missing: commandLine");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetInfoResult::Serialize() const {
  base::Value::Dict result;
  result.Set("gpu", internal::ToValue(*gpu_));
  result.Set("modelName", internal::ToValue(model_name_));
  result.Set("modelVersion", internal::ToValue(model_version_));
  result.Set("commandLine", internal::ToValue(command_line_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetInfoResult> GetInfoResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetInfoResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetFeatureStateParams> GetFeatureStateParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetFeatureStateParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetFeatureStateParams> result(new GetFeatureStateParams());
  errors->Push();
  errors->SetName("GetFeatureStateParams");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* feature_state_value = dict.Find("featureState");
  if (feature_state_value) {
    errors->SetName("featureState");
    result->feature_state_ = internal::FromValue<std::string>::Parse(*feature_state_value, errors);
  } else {
    errors->AddError("required property missing: featureState");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetFeatureStateParams::Serialize() const {
  base::Value::Dict result;
  result.Set("featureState", internal::ToValue(feature_state_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetFeatureStateParams> GetFeatureStateParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetFeatureStateParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetFeatureStateResult> GetFeatureStateResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetFeatureStateResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetFeatureStateResult> result(new GetFeatureStateResult());
  errors->Push();
  errors->SetName("GetFeatureStateResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* feature_enabled_value = dict.Find("featureEnabled");
  if (feature_enabled_value) {
    errors->SetName("featureEnabled");
    result->feature_enabled_ = internal::FromValue<bool>::Parse(*feature_enabled_value, errors);
  } else {
    errors->AddError("required property missing: featureEnabled");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetFeatureStateResult::Serialize() const {
  base::Value::Dict result;
  result.Set("featureEnabled", internal::ToValue(feature_enabled_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetFeatureStateResult> GetFeatureStateResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetFeatureStateResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetProcessInfoParams> GetProcessInfoParams::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetProcessInfoParams");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetProcessInfoParams> result(new GetProcessInfoParams());
  errors->Push();
  errors->SetName("GetProcessInfoParams");
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetProcessInfoParams::Serialize() const {
  base::Value::Dict result;
  return base::Value(std::move(result));
}

std::unique_ptr<GetProcessInfoParams> GetProcessInfoParams::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetProcessInfoParams> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


std::unique_ptr<GetProcessInfoResult> GetProcessInfoResult::Parse(const base::Value& value, ErrorReporter* errors) {
  errors->Push();
  errors->SetName("GetProcessInfoResult");
  if (!value.is_dict()) {
    errors->AddError("object expected");
    errors->Pop();
    return nullptr;
  }

  std::unique_ptr<GetProcessInfoResult> result(new GetProcessInfoResult());
  errors->Push();
  errors->SetName("GetProcessInfoResult");
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* process_info_value = dict.Find("processInfo");
  if (process_info_value) {
    errors->SetName("processInfo");
    result->process_info_ = internal::FromValue<std::vector<std::unique_ptr<::headless::system_info::ProcessInfo>>>::Parse(*process_info_value, errors);
  } else {
    errors->AddError("required property missing: processInfo");
  }
  errors->Pop();
  errors->Pop();
  if (errors->HasErrors())
    return nullptr;
  return result;
}

base::Value GetProcessInfoResult::Serialize() const {
  base::Value::Dict result;
  result.Set("processInfo", internal::ToValue(process_info_));
  return base::Value(std::move(result));
}

std::unique_ptr<GetProcessInfoResult> GetProcessInfoResult::Clone() const {
  ErrorReporter errors;
  std::unique_ptr<GetProcessInfoResult> result = Parse(Serialize(), &errors);
  DCHECK(!errors.HasErrors());
  return result;
}


}  // namespace system_info
}  // namespace headless
