// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/media_perception_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/media_perception_private.h"

#include <memory>
#include <optional>
#include <ostream>
#include <string>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"
#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace media_perception_private {
//
// Types
//

const char* ToString(Status enum_param) {
  switch (enum_param) {
    case Status::kUninitialized:
      return "UNINITIALIZED";
    case Status::kStarted:
      return "STARTED";
    case Status::kRunning:
      return "RUNNING";
    case Status::kSuspended:
      return "SUSPENDED";
    case Status::kRestarting:
      return "RESTARTING";
    case Status::kStopped:
      return "STOPPED";
    case Status::kServiceError:
      return "SERVICE_ERROR";
    case Status::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Status ParseStatus(base::StringPiece enum_string) {
  if (enum_string == "UNINITIALIZED")
    return Status::kUninitialized;
  if (enum_string == "STARTED")
    return Status::kStarted;
  if (enum_string == "RUNNING")
    return Status::kRunning;
  if (enum_string == "SUSPENDED")
    return Status::kSuspended;
  if (enum_string == "RESTARTING")
    return Status::kRestarting;
  if (enum_string == "STOPPED")
    return Status::kStopped;
  if (enum_string == "SERVICE_ERROR")
    return Status::kServiceError;
  return Status::kNone;
}

std::u16string GetStatusParseError(base::StringPiece enum_string) {
  return u"expected \"UNINITIALIZED\" or \"STARTED\" or \"RUNNING\" or \"SUSPENDED\" or \"RESTARTING\" or \"STOPPED\" or \"SERVICE_ERROR\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ServiceError enum_param) {
  switch (enum_param) {
    case ServiceError::kServiceUnreachable:
      return "SERVICE_UNREACHABLE";
    case ServiceError::kServiceNotRunning:
      return "SERVICE_NOT_RUNNING";
    case ServiceError::kServiceBusyLaunching:
      return "SERVICE_BUSY_LAUNCHING";
    case ServiceError::kServiceNotInstalled:
      return "SERVICE_NOT_INSTALLED";
    case ServiceError::kMojoConnectionFailure:
      return "MOJO_CONNECTION_FAILURE";
    case ServiceError::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ServiceError ParseServiceError(base::StringPiece enum_string) {
  if (enum_string == "SERVICE_UNREACHABLE")
    return ServiceError::kServiceUnreachable;
  if (enum_string == "SERVICE_NOT_RUNNING")
    return ServiceError::kServiceNotRunning;
  if (enum_string == "SERVICE_BUSY_LAUNCHING")
    return ServiceError::kServiceBusyLaunching;
  if (enum_string == "SERVICE_NOT_INSTALLED")
    return ServiceError::kServiceNotInstalled;
  if (enum_string == "MOJO_CONNECTION_FAILURE")
    return ServiceError::kMojoConnectionFailure;
  return ServiceError::kNone;
}

std::u16string GetServiceErrorParseError(base::StringPiece enum_string) {
  return u"expected \"SERVICE_UNREACHABLE\" or \"SERVICE_NOT_RUNNING\" or \"SERVICE_BUSY_LAUNCHING\" or \"SERVICE_NOT_INSTALLED\" or \"MOJO_CONNECTION_FAILURE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(Feature enum_param) {
  switch (enum_param) {
    case Feature::kAutozoom:
      return "AUTOZOOM";
    case Feature::kHotwordDetection:
      return "HOTWORD_DETECTION";
    case Feature::kOccupancyDetection:
      return "OCCUPANCY_DETECTION";
    case Feature::kEdgeEmbeddings:
      return "EDGE_EMBEDDINGS";
    case Feature::kSoftwareCropping:
      return "SOFTWARE_CROPPING";
    case Feature::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Feature ParseFeature(base::StringPiece enum_string) {
  if (enum_string == "AUTOZOOM")
    return Feature::kAutozoom;
  if (enum_string == "HOTWORD_DETECTION")
    return Feature::kHotwordDetection;
  if (enum_string == "OCCUPANCY_DETECTION")
    return Feature::kOccupancyDetection;
  if (enum_string == "EDGE_EMBEDDINGS")
    return Feature::kEdgeEmbeddings;
  if (enum_string == "SOFTWARE_CROPPING")
    return Feature::kSoftwareCropping;
  return Feature::kNone;
}

std::u16string GetFeatureParseError(base::StringPiece enum_string) {
  return u"expected \"AUTOZOOM\" or \"HOTWORD_DETECTION\" or \"OCCUPANCY_DETECTION\" or \"EDGE_EMBEDDINGS\" or \"SOFTWARE_CROPPING\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


NamedTemplateArgument::Value::Value()
 {}

NamedTemplateArgument::Value::~Value() = default;
NamedTemplateArgument::Value::Value(Value&& rhs) noexcept = default;
NamedTemplateArgument::Value& NamedTemplateArgument::Value::operator=(Value&& rhs) noexcept = default;
NamedTemplateArgument::Value NamedTemplateArgument::Value::Clone() const {
  Value out;
  out.as_string = as_string;
  out.as_number = as_number;
  return out;
}

// static
bool NamedTemplateArgument::Value::Populate(
    const base::Value& value, Value& out) {
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::DOUBLE) {
    {
      auto temp = value.GetIfDouble();
      if (!temp.has_value()) {
        out.as_number = std::nullopt;
        return false;
      }
      out.as_number = *temp;
    }
    return true;
  }
  return false;
}

// static
std::optional<NamedTemplateArgument::Value> NamedTemplateArgument::Value::FromValue(const base::Value& value) {
  Value out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value NamedTemplateArgument::Value::ToValue() const {
  base::Value result;
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for value";
    result = base::Value(*as_string);

  }
  if (as_number) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for value";
    result = base::Value(*as_number);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for value";
  return result;
}



NamedTemplateArgument::NamedTemplateArgument()
 {}

NamedTemplateArgument::~NamedTemplateArgument() = default;
NamedTemplateArgument::NamedTemplateArgument(NamedTemplateArgument&& rhs) noexcept = default;
NamedTemplateArgument& NamedTemplateArgument::operator=(NamedTemplateArgument&& rhs) noexcept = default;
NamedTemplateArgument NamedTemplateArgument::Clone() const {
  NamedTemplateArgument out;
  out.name = name;
  if (value) {
    out.value = value->Clone();
  }
  return out;
}

// static
bool NamedTemplateArgument::Populate(
    const base::Value::Dict& dict, NamedTemplateArgument& out) {
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = std::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    {
      Value temp;
      if (!Value::Populate((*value_value), temp))
        return false;
      out.value = std::move(temp);
    }
  }

  return true;
}

// static
bool NamedTemplateArgument::Populate(
    const base::Value& value, NamedTemplateArgument& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<NamedTemplateArgument> NamedTemplateArgument::FromValue(const base::Value::Dict& value) {
  NamedTemplateArgument out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<NamedTemplateArgument> NamedTemplateArgument::FromValue(const base::Value& value) {
  NamedTemplateArgument out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict NamedTemplateArgument::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->name) {
    to_value_result.Set("name", *this->name);

  }
  if (this->value) {
    to_value_result.Set("value", (this->value)->ToValue());

  }

  return to_value_result;
}


const char* ToString(ComponentType enum_param) {
  switch (enum_param) {
    case ComponentType::kLight:
      return "LIGHT";
    case ComponentType::kFull:
      return "FULL";
    case ComponentType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ComponentType ParseComponentType(base::StringPiece enum_string) {
  if (enum_string == "LIGHT")
    return ComponentType::kLight;
  if (enum_string == "FULL")
    return ComponentType::kFull;
  return ComponentType::kNone;
}

std::u16string GetComponentTypeParseError(base::StringPiece enum_string) {
  return u"expected \"LIGHT\" or \"FULL\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ComponentStatus enum_param) {
  switch (enum_param) {
    case ComponentStatus::kUnknown:
      return "UNKNOWN";
    case ComponentStatus::kInstalled:
      return "INSTALLED";
    case ComponentStatus::kFailedToInstall:
      return "FAILED_TO_INSTALL";
    case ComponentStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ComponentStatus ParseComponentStatus(base::StringPiece enum_string) {
  if (enum_string == "UNKNOWN")
    return ComponentStatus::kUnknown;
  if (enum_string == "INSTALLED")
    return ComponentStatus::kInstalled;
  if (enum_string == "FAILED_TO_INSTALL")
    return ComponentStatus::kFailedToInstall;
  return ComponentStatus::kNone;
}

std::u16string GetComponentStatusParseError(base::StringPiece enum_string) {
  return u"expected \"UNKNOWN\" or \"INSTALLED\" or \"FAILED_TO_INSTALL\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ComponentInstallationError enum_param) {
  switch (enum_param) {
    case ComponentInstallationError::kUnknownComponent:
      return "UNKNOWN_COMPONENT";
    case ComponentInstallationError::kInstallFailure:
      return "INSTALL_FAILURE";
    case ComponentInstallationError::kMountFailure:
      return "MOUNT_FAILURE";
    case ComponentInstallationError::kCompatibilityCheckFailed:
      return "COMPATIBILITY_CHECK_FAILED";
    case ComponentInstallationError::kNotFound:
      return "NOT_FOUND";
    case ComponentInstallationError::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ComponentInstallationError ParseComponentInstallationError(base::StringPiece enum_string) {
  if (enum_string == "UNKNOWN_COMPONENT")
    return ComponentInstallationError::kUnknownComponent;
  if (enum_string == "INSTALL_FAILURE")
    return ComponentInstallationError::kInstallFailure;
  if (enum_string == "MOUNT_FAILURE")
    return ComponentInstallationError::kMountFailure;
  if (enum_string == "COMPATIBILITY_CHECK_FAILED")
    return ComponentInstallationError::kCompatibilityCheckFailed;
  if (enum_string == "NOT_FOUND")
    return ComponentInstallationError::kNotFound;
  return ComponentInstallationError::kNone;
}

std::u16string GetComponentInstallationErrorParseError(base::StringPiece enum_string) {
  return u"expected \"UNKNOWN_COMPONENT\" or \"INSTALL_FAILURE\" or \"MOUNT_FAILURE\" or \"COMPATIBILITY_CHECK_FAILED\" or \"NOT_FOUND\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


Component::Component()
: type() {}

Component::~Component() = default;
Component::Component(Component&& rhs) noexcept = default;
Component& Component::operator=(Component&& rhs) noexcept = default;
Component Component::Clone() const {
  Component out;
  out.type = type;
  return out;
}

// static
bool Component::Populate(
    const base::Value::Dict& dict, Component& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* component_type_as_string = (*type_value).GetIfString();
    if (!component_type_as_string) {
      return false;
    }
    out.type = ParseComponentType(*component_type_as_string);
    if (out.type == ComponentType()) {
      return false;
    }
  }

  return true;
}

// static
bool Component::Populate(
    const base::Value& value, Component& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Component> Component::FromValue(const base::Value::Dict& value) {
  Component out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Component> Component::FromValue(const base::Value& value) {
  Component out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Component::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", media_perception_private::ToString(this->type));


  return to_value_result;
}


ComponentState::ComponentState()
: status(),
installation_error_code() {}

ComponentState::~ComponentState() = default;
ComponentState::ComponentState(ComponentState&& rhs) noexcept = default;
ComponentState& ComponentState::operator=(ComponentState&& rhs) noexcept = default;
ComponentState ComponentState::Clone() const {
  ComponentState out;
  out.status = status;
  out.version = version;
  out.installation_error_code = installation_error_code;
  return out;
}

// static
bool ComponentState::Populate(
    const base::Value::Dict& dict, ComponentState& out) {
  out.installation_error_code = ComponentInstallationError();
  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* component_status_as_string = (*status_value).GetIfString();
    if (!component_status_as_string) {
      return false;
    }
    out.status = ParseComponentStatus(*component_status_as_string);
    if (out.status == ComponentStatus()) {
      return false;
    }
  }

  const base::Value* version_value = dict.Find("version");
  if (version_value) {
    {
      auto* temp = (*version_value).GetIfString();
      if (!temp) {
        out.version = std::nullopt;
        return false;
      }
      out.version = *temp;
    }
  }

  const base::Value* installation_error_code_value = dict.Find("installationErrorCode");
  if (installation_error_code_value) {
    {
      const std::string* component_installation_error_as_string = (*installation_error_code_value).GetIfString();
      if (!component_installation_error_as_string) {
        return false;
      }
      out.installation_error_code = ParseComponentInstallationError(*component_installation_error_as_string);
      if (out.installation_error_code == ComponentInstallationError()) {
        return false;
      }
    }
    } else {
    out.installation_error_code = ComponentInstallationError();
  }

  return true;
}

// static
bool ComponentState::Populate(
    const base::Value& value, ComponentState& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ComponentState> ComponentState::FromValue(const base::Value::Dict& value) {
  ComponentState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ComponentState> ComponentState::FromValue(const base::Value& value) {
  ComponentState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ComponentState::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("status", media_perception_private::ToString(this->status));

  if (this->version) {
    to_value_result.Set("version", *this->version);

  }
  if (this->installation_error_code != ComponentInstallationError()) {
    to_value_result.Set("installationErrorCode", media_perception_private::ToString(this->installation_error_code));

  }

  return to_value_result;
}


const char* ToString(ProcessStatus enum_param) {
  switch (enum_param) {
    case ProcessStatus::kUnknown:
      return "UNKNOWN";
    case ProcessStatus::kStarted:
      return "STARTED";
    case ProcessStatus::kStopped:
      return "STOPPED";
    case ProcessStatus::kServiceError:
      return "SERVICE_ERROR";
    case ProcessStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ProcessStatus ParseProcessStatus(base::StringPiece enum_string) {
  if (enum_string == "UNKNOWN")
    return ProcessStatus::kUnknown;
  if (enum_string == "STARTED")
    return ProcessStatus::kStarted;
  if (enum_string == "STOPPED")
    return ProcessStatus::kStopped;
  if (enum_string == "SERVICE_ERROR")
    return ProcessStatus::kServiceError;
  return ProcessStatus::kNone;
}

std::u16string GetProcessStatusParseError(base::StringPiece enum_string) {
  return u"expected \"UNKNOWN\" or \"STARTED\" or \"STOPPED\" or \"SERVICE_ERROR\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ProcessState::ProcessState()
: status(),
service_error() {}

ProcessState::~ProcessState() = default;
ProcessState::ProcessState(ProcessState&& rhs) noexcept = default;
ProcessState& ProcessState::operator=(ProcessState&& rhs) noexcept = default;
ProcessState ProcessState::Clone() const {
  ProcessState out;
  out.status = status;
  out.service_error = service_error;
  return out;
}

// static
bool ProcessState::Populate(
    const base::Value::Dict& dict, ProcessState& out) {
  out.status = ProcessStatus();
  out.service_error = ServiceError();
  const base::Value* status_value = dict.Find("status");
  if (status_value) {
    {
      const std::string* process_status_as_string = (*status_value).GetIfString();
      if (!process_status_as_string) {
        return false;
      }
      out.status = ParseProcessStatus(*process_status_as_string);
      if (out.status == ProcessStatus()) {
        return false;
      }
    }
    } else {
    out.status = ProcessStatus();
  }

  const base::Value* service_error_value = dict.Find("serviceError");
  if (service_error_value) {
    {
      const std::string* service_error_as_string = (*service_error_value).GetIfString();
      if (!service_error_as_string) {
        return false;
      }
      out.service_error = ParseServiceError(*service_error_as_string);
      if (out.service_error == ServiceError()) {
        return false;
      }
    }
    } else {
    out.service_error = ServiceError();
  }

  return true;
}

// static
bool ProcessState::Populate(
    const base::Value& value, ProcessState& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ProcessState> ProcessState::FromValue(const base::Value::Dict& value) {
  ProcessState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ProcessState> ProcessState::FromValue(const base::Value& value) {
  ProcessState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ProcessState::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->status != ProcessStatus()) {
    to_value_result.Set("status", media_perception_private::ToString(this->status));

  }
  if (this->service_error != ServiceError()) {
    to_value_result.Set("serviceError", media_perception_private::ToString(this->service_error));

  }

  return to_value_result;
}


VideoStreamParam::VideoStreamParam()
 {}

VideoStreamParam::~VideoStreamParam() = default;
VideoStreamParam::VideoStreamParam(VideoStreamParam&& rhs) noexcept = default;
VideoStreamParam& VideoStreamParam::operator=(VideoStreamParam&& rhs) noexcept = default;
VideoStreamParam VideoStreamParam::Clone() const {
  VideoStreamParam out;
  out.id = id;
  out.width = width;
  out.height = height;
  out.frame_rate = frame_rate;
  return out;
}

// static
bool VideoStreamParam::Populate(
    const base::Value::Dict& dict, VideoStreamParam& out) {
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    {
      auto* temp = (*id_value).GetIfString();
      if (!temp) {
        out.id = std::nullopt;
        return false;
      }
      out.id = *temp;
    }
  }

  const base::Value* width_value = dict.Find("width");
  if (width_value) {
    {
      auto temp = (*width_value).GetIfInt();
      if (!temp.has_value()) {
        out.width = std::nullopt;
        return false;
      }
      out.width = *temp;
    }
  }

  const base::Value* height_value = dict.Find("height");
  if (height_value) {
    {
      auto temp = (*height_value).GetIfInt();
      if (!temp.has_value()) {
        out.height = std::nullopt;
        return false;
      }
      out.height = *temp;
    }
  }

  const base::Value* frame_rate_value = dict.Find("frameRate");
  if (frame_rate_value) {
    {
      auto temp = (*frame_rate_value).GetIfInt();
      if (!temp.has_value()) {
        out.frame_rate = std::nullopt;
        return false;
      }
      out.frame_rate = *temp;
    }
  }

  return true;
}

// static
bool VideoStreamParam::Populate(
    const base::Value& value, VideoStreamParam& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<VideoStreamParam> VideoStreamParam::FromValue(const base::Value::Dict& value) {
  VideoStreamParam out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<VideoStreamParam> VideoStreamParam::FromValue(const base::Value& value) {
  VideoStreamParam out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict VideoStreamParam::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->id) {
    to_value_result.Set("id", *this->id);

  }
  if (this->width) {
    to_value_result.Set("width", *this->width);

  }
  if (this->height) {
    to_value_result.Set("height", *this->height);

  }
  if (this->frame_rate) {
    to_value_result.Set("frameRate", *this->frame_rate);

  }

  return to_value_result;
}


Point::Point()
 {}

Point::~Point() = default;
Point::Point(Point&& rhs) noexcept = default;
Point& Point::operator=(Point&& rhs) noexcept = default;
Point Point::Clone() const {
  Point out;
  out.x = x;
  out.y = y;
  return out;
}

// static
bool Point::Populate(
    const base::Value::Dict& dict, Point& out) {
  const base::Value* x_value = dict.Find("x");
  if (x_value) {
    {
      auto temp = (*x_value).GetIfDouble();
      if (!temp.has_value()) {
        out.x = std::nullopt;
        return false;
      }
      out.x = *temp;
    }
  }

  const base::Value* y_value = dict.Find("y");
  if (y_value) {
    {
      auto temp = (*y_value).GetIfDouble();
      if (!temp.has_value()) {
        out.y = std::nullopt;
        return false;
      }
      out.y = *temp;
    }
  }

  return true;
}

// static
bool Point::Populate(
    const base::Value& value, Point& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Point> Point::FromValue(const base::Value::Dict& value) {
  Point out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Point> Point::FromValue(const base::Value& value) {
  Point out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Point::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->x) {
    to_value_result.Set("x", *this->x);

  }
  if (this->y) {
    to_value_result.Set("y", *this->y);

  }

  return to_value_result;
}


Whiteboard::Whiteboard()
 {}

Whiteboard::~Whiteboard() = default;
Whiteboard::Whiteboard(Whiteboard&& rhs) noexcept = default;
Whiteboard& Whiteboard::operator=(Whiteboard&& rhs) noexcept = default;
Whiteboard Whiteboard::Clone() const {
  Whiteboard out;
  if (top_left) {
    out.top_left = top_left->Clone();
  }
  if (top_right) {
    out.top_right = top_right->Clone();
  }
  if (bottom_left) {
    out.bottom_left = bottom_left->Clone();
  }
  if (bottom_right) {
    out.bottom_right = bottom_right->Clone();
  }
  out.aspect_ratio = aspect_ratio;
  return out;
}

// static
bool Whiteboard::Populate(
    const base::Value::Dict& dict, Whiteboard& out) {
  const base::Value* top_left_value = dict.Find("topLeft");
  if (top_left_value) {
    {
      if (!(*top_left_value).is_dict()) {
        return false;
      }
      else {
        Point temp;
        if (!Point::Populate((*top_left_value).GetDict(), temp))
          return false;
        out.top_left = std::move(temp);
      }
    }
  }

  const base::Value* top_right_value = dict.Find("topRight");
  if (top_right_value) {
    {
      if (!(*top_right_value).is_dict()) {
        return false;
      }
      else {
        Point temp;
        if (!Point::Populate((*top_right_value).GetDict(), temp))
          return false;
        out.top_right = std::move(temp);
      }
    }
  }

  const base::Value* bottom_left_value = dict.Find("bottomLeft");
  if (bottom_left_value) {
    {
      if (!(*bottom_left_value).is_dict()) {
        return false;
      }
      else {
        Point temp;
        if (!Point::Populate((*bottom_left_value).GetDict(), temp))
          return false;
        out.bottom_left = std::move(temp);
      }
    }
  }

  const base::Value* bottom_right_value = dict.Find("bottomRight");
  if (bottom_right_value) {
    {
      if (!(*bottom_right_value).is_dict()) {
        return false;
      }
      else {
        Point temp;
        if (!Point::Populate((*bottom_right_value).GetDict(), temp))
          return false;
        out.bottom_right = std::move(temp);
      }
    }
  }

  const base::Value* aspect_ratio_value = dict.Find("aspectRatio");
  if (aspect_ratio_value) {
    {
      auto temp = (*aspect_ratio_value).GetIfDouble();
      if (!temp.has_value()) {
        out.aspect_ratio = std::nullopt;
        return false;
      }
      out.aspect_ratio = *temp;
    }
  }

  return true;
}

// static
bool Whiteboard::Populate(
    const base::Value& value, Whiteboard& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Whiteboard> Whiteboard::FromValue(const base::Value::Dict& value) {
  Whiteboard out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Whiteboard> Whiteboard::FromValue(const base::Value& value) {
  Whiteboard out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Whiteboard::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->top_left) {
    to_value_result.Set("topLeft", (this->top_left)->ToValue());

  }
  if (this->top_right) {
    to_value_result.Set("topRight", (this->top_right)->ToValue());

  }
  if (this->bottom_left) {
    to_value_result.Set("bottomLeft", (this->bottom_left)->ToValue());

  }
  if (this->bottom_right) {
    to_value_result.Set("bottomRight", (this->bottom_right)->ToValue());

  }
  if (this->aspect_ratio) {
    to_value_result.Set("aspectRatio", *this->aspect_ratio);

  }

  return to_value_result;
}


State::State()
: status(),
service_error() {}

State::~State() = default;
State::State(State&& rhs) noexcept = default;
State& State::operator=(State&& rhs) noexcept = default;
State State::Clone() const {
  State out;
  out.status = status;
  out.device_context = device_context;
  out.service_error = service_error;
  if (video_stream_param) {
    out.video_stream_param.emplace();
    out.video_stream_param->reserve(video_stream_param->size());
    for (const auto& element : *video_stream_param) {
      json_schema_compiler::util::AppendToContainer(*out.video_stream_param, element.Clone());
    }
  }
  out.configuration = configuration;
  if (whiteboard) {
    out.whiteboard = whiteboard->Clone();
  }
  out.features = features;
  if (named_template_arguments) {
    out.named_template_arguments.emplace();
    out.named_template_arguments->reserve(named_template_arguments->size());
    for (const auto& element : *named_template_arguments) {
      json_schema_compiler::util::AppendToContainer(*out.named_template_arguments, element.Clone());
    }
  }
  return out;
}

// static
bool State::Populate(
    const base::Value::Dict& dict, State& out) {
  out.service_error = ServiceError();
  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* status_as_string = (*status_value).GetIfString();
    if (!status_as_string) {
      return false;
    }
    out.status = ParseStatus(*status_as_string);
    if (out.status == Status()) {
      return false;
    }
  }

  const base::Value* device_context_value = dict.Find("deviceContext");
  if (device_context_value) {
    {
      auto* temp = (*device_context_value).GetIfString();
      if (!temp) {
        out.device_context = std::nullopt;
        return false;
      }
      out.device_context = *temp;
    }
  }

  const base::Value* service_error_value = dict.Find("serviceError");
  if (service_error_value) {
    {
      const std::string* service_error_as_string = (*service_error_value).GetIfString();
      if (!service_error_as_string) {
        return false;
      }
      out.service_error = ParseServiceError(*service_error_as_string);
      if (out.service_error == ServiceError()) {
        return false;
      }
    }
    } else {
    out.service_error = ServiceError();
  }

  const base::Value* video_stream_param_value = dict.Find("videoStreamParam");
  if (video_stream_param_value) {
    {
      if (!(*video_stream_param_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*video_stream_param_value).GetList(), out.video_stream_param)) {
          return false;
        }
      }
    }
  }

  const base::Value* configuration_value = dict.Find("configuration");
  if (configuration_value) {
    {
      auto* temp = (*configuration_value).GetIfString();
      if (!temp) {
        out.configuration = std::nullopt;
        return false;
      }
      out.configuration = *temp;
    }
  }

  const base::Value* whiteboard_value = dict.Find("whiteboard");
  if (whiteboard_value) {
    {
      if (!(*whiteboard_value).is_dict()) {
        return false;
      }
      else {
        Whiteboard temp;
        if (!Whiteboard::Populate((*whiteboard_value).GetDict(), temp))
          return false;
        out.whiteboard = std::move(temp);
      }
    }
  }

  const base::Value* features_value = dict.Find("features");
  if (features_value) {
    {
      if (!(*features_value).is_list()) {
        return false;
      }
      else {
        out.features.emplace();
        for (const auto& it : ((*features_value)).GetList()) {
          Feature tmp;
          const std::string* feature_as_string = (it).GetIfString();
          if (!feature_as_string) {
            return false;
          }
          tmp = ParseFeature(*feature_as_string);
          if (tmp == Feature()) {
            return false;
          }
          out.features->push_back(tmp);
        }
      }
    }
  }

  const base::Value* named_template_arguments_value = dict.Find("namedTemplateArguments");
  if (named_template_arguments_value) {
    {
      if (!(*named_template_arguments_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*named_template_arguments_value).GetList(), out.named_template_arguments)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool State::Populate(
    const base::Value& value, State& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<State> State::FromValue(const base::Value::Dict& value) {
  State out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<State> State::FromValue(const base::Value& value) {
  State out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict State::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("status", media_perception_private::ToString(this->status));

  if (this->device_context) {
    to_value_result.Set("deviceContext", *this->device_context);

  }
  if (this->service_error != ServiceError()) {
    to_value_result.Set("serviceError", media_perception_private::ToString(this->service_error));

  }
  if (this->video_stream_param) {
    to_value_result.Set("videoStreamParam", json_schema_compiler::util::CreateValueFromArray(*this->video_stream_param));

  }
  if (this->configuration) {
    to_value_result.Set("configuration", *this->configuration);

  }
  if (this->whiteboard) {
    to_value_result.Set("whiteboard", (this->whiteboard)->ToValue());

  }
  if (this->features) {
    {
      std::vector<std::string> features_list;
      for (const auto& it : *(this->features)) {
        features_list.emplace_back(media_perception_private::ToString(it));
      }
      to_value_result.Set("features", json_schema_compiler::util::CreateValueFromArray(features_list));
    }

  }
  if (this->named_template_arguments) {
    to_value_result.Set("namedTemplateArguments", json_schema_compiler::util::CreateValueFromArray(*this->named_template_arguments));

  }

  return to_value_result;
}


BoundingBox::BoundingBox()
 {}

BoundingBox::~BoundingBox() = default;
BoundingBox::BoundingBox(BoundingBox&& rhs) noexcept = default;
BoundingBox& BoundingBox::operator=(BoundingBox&& rhs) noexcept = default;
BoundingBox BoundingBox::Clone() const {
  BoundingBox out;
  out.normalized = normalized;
  if (top_left) {
    out.top_left = top_left->Clone();
  }
  if (bottom_right) {
    out.bottom_right = bottom_right->Clone();
  }
  return out;
}

// static
bool BoundingBox::Populate(
    const base::Value::Dict& dict, BoundingBox& out) {
  const base::Value* normalized_value = dict.Find("normalized");
  if (normalized_value) {
    {
      auto temp = (*normalized_value).GetIfBool();
      if (!temp.has_value()) {
        out.normalized = std::nullopt;
        return false;
      }
      out.normalized = *temp;
    }
  }

  const base::Value* top_left_value = dict.Find("topLeft");
  if (top_left_value) {
    {
      if (!(*top_left_value).is_dict()) {
        return false;
      }
      else {
        Point temp;
        if (!Point::Populate((*top_left_value).GetDict(), temp))
          return false;
        out.top_left = std::move(temp);
      }
    }
  }

  const base::Value* bottom_right_value = dict.Find("bottomRight");
  if (bottom_right_value) {
    {
      if (!(*bottom_right_value).is_dict()) {
        return false;
      }
      else {
        Point temp;
        if (!Point::Populate((*bottom_right_value).GetDict(), temp))
          return false;
        out.bottom_right = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool BoundingBox::Populate(
    const base::Value& value, BoundingBox& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<BoundingBox> BoundingBox::FromValue(const base::Value::Dict& value) {
  BoundingBox out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<BoundingBox> BoundingBox::FromValue(const base::Value& value) {
  BoundingBox out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict BoundingBox::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->normalized) {
    to_value_result.Set("normalized", *this->normalized);

  }
  if (this->top_left) {
    to_value_result.Set("topLeft", (this->top_left)->ToValue());

  }
  if (this->bottom_right) {
    to_value_result.Set("bottomRight", (this->bottom_right)->ToValue());

  }

  return to_value_result;
}


const char* ToString(DistanceUnits enum_param) {
  switch (enum_param) {
    case DistanceUnits::kUnspecified:
      return "UNSPECIFIED";
    case DistanceUnits::kMeters:
      return "METERS";
    case DistanceUnits::kPixels:
      return "PIXELS";
    case DistanceUnits::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DistanceUnits ParseDistanceUnits(base::StringPiece enum_string) {
  if (enum_string == "UNSPECIFIED")
    return DistanceUnits::kUnspecified;
  if (enum_string == "METERS")
    return DistanceUnits::kMeters;
  if (enum_string == "PIXELS")
    return DistanceUnits::kPixels;
  return DistanceUnits::kNone;
}

std::u16string GetDistanceUnitsParseError(base::StringPiece enum_string) {
  return u"expected \"UNSPECIFIED\" or \"METERS\" or \"PIXELS\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


Distance::Distance()
: units() {}

Distance::~Distance() = default;
Distance::Distance(Distance&& rhs) noexcept = default;
Distance& Distance::operator=(Distance&& rhs) noexcept = default;
Distance Distance::Clone() const {
  Distance out;
  out.units = units;
  out.magnitude = magnitude;
  return out;
}

// static
bool Distance::Populate(
    const base::Value::Dict& dict, Distance& out) {
  out.units = DistanceUnits();
  const base::Value* units_value = dict.Find("units");
  if (units_value) {
    {
      const std::string* distance_units_as_string = (*units_value).GetIfString();
      if (!distance_units_as_string) {
        return false;
      }
      out.units = ParseDistanceUnits(*distance_units_as_string);
      if (out.units == DistanceUnits()) {
        return false;
      }
    }
    } else {
    out.units = DistanceUnits();
  }

  const base::Value* magnitude_value = dict.Find("magnitude");
  if (magnitude_value) {
    {
      auto temp = (*magnitude_value).GetIfDouble();
      if (!temp.has_value()) {
        out.magnitude = std::nullopt;
        return false;
      }
      out.magnitude = *temp;
    }
  }

  return true;
}

// static
bool Distance::Populate(
    const base::Value& value, Distance& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Distance> Distance::FromValue(const base::Value::Dict& value) {
  Distance out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Distance> Distance::FromValue(const base::Value& value) {
  Distance out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Distance::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->units != DistanceUnits()) {
    to_value_result.Set("units", media_perception_private::ToString(this->units));

  }
  if (this->magnitude) {
    to_value_result.Set("magnitude", *this->magnitude);

  }

  return to_value_result;
}


const char* ToString(EntityType enum_param) {
  switch (enum_param) {
    case EntityType::kUnspecified:
      return "UNSPECIFIED";
    case EntityType::kFace:
      return "FACE";
    case EntityType::kPerson:
      return "PERSON";
    case EntityType::kMotionRegion:
      return "MOTION_REGION";
    case EntityType::kLabeledRegion:
      return "LABELED_REGION";
    case EntityType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

EntityType ParseEntityType(base::StringPiece enum_string) {
  if (enum_string == "UNSPECIFIED")
    return EntityType::kUnspecified;
  if (enum_string == "FACE")
    return EntityType::kFace;
  if (enum_string == "PERSON")
    return EntityType::kPerson;
  if (enum_string == "MOTION_REGION")
    return EntityType::kMotionRegion;
  if (enum_string == "LABELED_REGION")
    return EntityType::kLabeledRegion;
  return EntityType::kNone;
}

std::u16string GetEntityTypeParseError(base::StringPiece enum_string) {
  return u"expected \"UNSPECIFIED\" or \"FACE\" or \"PERSON\" or \"MOTION_REGION\" or \"LABELED_REGION\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(FramePerceptionType enum_param) {
  switch (enum_param) {
    case FramePerceptionType::kUnknownType:
      return "UNKNOWN_TYPE";
    case FramePerceptionType::kFaceDetection:
      return "FACE_DETECTION";
    case FramePerceptionType::kPersonDetection:
      return "PERSON_DETECTION";
    case FramePerceptionType::kMotionDetection:
      return "MOTION_DETECTION";
    case FramePerceptionType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

FramePerceptionType ParseFramePerceptionType(base::StringPiece enum_string) {
  if (enum_string == "UNKNOWN_TYPE")
    return FramePerceptionType::kUnknownType;
  if (enum_string == "FACE_DETECTION")
    return FramePerceptionType::kFaceDetection;
  if (enum_string == "PERSON_DETECTION")
    return FramePerceptionType::kPersonDetection;
  if (enum_string == "MOTION_DETECTION")
    return FramePerceptionType::kMotionDetection;
  return FramePerceptionType::kNone;
}

std::u16string GetFramePerceptionTypeParseError(base::StringPiece enum_string) {
  return u"expected \"UNKNOWN_TYPE\" or \"FACE_DETECTION\" or \"PERSON_DETECTION\" or \"MOTION_DETECTION\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


Entity::Entity()
: type() {}

Entity::~Entity() = default;
Entity::Entity(Entity&& rhs) noexcept = default;
Entity& Entity::operator=(Entity&& rhs) noexcept = default;
Entity Entity::Clone() const {
  Entity out;
  out.id = id;
  out.type = type;
  out.entity_label = entity_label;
  if (bounding_box) {
    out.bounding_box = bounding_box->Clone();
  }
  out.confidence = confidence;
  if (depth) {
    out.depth = depth->Clone();
  }
  return out;
}

// static
bool Entity::Populate(
    const base::Value::Dict& dict, Entity& out) {
  out.type = EntityType();
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    {
      auto temp = (*id_value).GetIfInt();
      if (!temp.has_value()) {
        out.id = std::nullopt;
        return false;
      }
      out.id = *temp;
    }
  }

  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      const std::string* entity_type_as_string = (*type_value).GetIfString();
      if (!entity_type_as_string) {
        return false;
      }
      out.type = ParseEntityType(*entity_type_as_string);
      if (out.type == EntityType()) {
        return false;
      }
    }
    } else {
    out.type = EntityType();
  }

  const base::Value* entity_label_value = dict.Find("entityLabel");
  if (entity_label_value) {
    {
      auto* temp = (*entity_label_value).GetIfString();
      if (!temp) {
        out.entity_label = std::nullopt;
        return false;
      }
      out.entity_label = *temp;
    }
  }

  const base::Value* bounding_box_value = dict.Find("boundingBox");
  if (bounding_box_value) {
    {
      if (!(*bounding_box_value).is_dict()) {
        return false;
      }
      else {
        BoundingBox temp;
        if (!BoundingBox::Populate((*bounding_box_value).GetDict(), temp))
          return false;
        out.bounding_box = std::move(temp);
      }
    }
  }

  const base::Value* confidence_value = dict.Find("confidence");
  if (confidence_value) {
    {
      auto temp = (*confidence_value).GetIfDouble();
      if (!temp.has_value()) {
        out.confidence = std::nullopt;
        return false;
      }
      out.confidence = *temp;
    }
  }

  const base::Value* depth_value = dict.Find("depth");
  if (depth_value) {
    {
      if (!(*depth_value).is_dict()) {
        return false;
      }
      else {
        Distance temp;
        if (!Distance::Populate((*depth_value).GetDict(), temp))
          return false;
        out.depth = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool Entity::Populate(
    const base::Value& value, Entity& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Entity> Entity::FromValue(const base::Value::Dict& value) {
  Entity out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Entity> Entity::FromValue(const base::Value& value) {
  Entity out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Entity::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->id) {
    to_value_result.Set("id", *this->id);

  }
  if (this->type != EntityType()) {
    to_value_result.Set("type", media_perception_private::ToString(this->type));

  }
  if (this->entity_label) {
    to_value_result.Set("entityLabel", *this->entity_label);

  }
  if (this->bounding_box) {
    to_value_result.Set("boundingBox", (this->bounding_box)->ToValue());

  }
  if (this->confidence) {
    to_value_result.Set("confidence", *this->confidence);

  }
  if (this->depth) {
    to_value_result.Set("depth", (this->depth)->ToValue());

  }

  return to_value_result;
}


PacketLatency::PacketLatency()
 {}

PacketLatency::~PacketLatency() = default;
PacketLatency::PacketLatency(PacketLatency&& rhs) noexcept = default;
PacketLatency& PacketLatency::operator=(PacketLatency&& rhs) noexcept = default;
PacketLatency PacketLatency::Clone() const {
  PacketLatency out;
  out.packet_label = packet_label;
  out.latency_usec = latency_usec;
  return out;
}

// static
bool PacketLatency::Populate(
    const base::Value::Dict& dict, PacketLatency& out) {
  const base::Value* packet_label_value = dict.Find("packetLabel");
  if (packet_label_value) {
    {
      auto* temp = (*packet_label_value).GetIfString();
      if (!temp) {
        out.packet_label = std::nullopt;
        return false;
      }
      out.packet_label = *temp;
    }
  }

  const base::Value* latency_usec_value = dict.Find("latencyUsec");
  if (latency_usec_value) {
    {
      auto temp = (*latency_usec_value).GetIfInt();
      if (!temp.has_value()) {
        out.latency_usec = std::nullopt;
        return false;
      }
      out.latency_usec = *temp;
    }
  }

  return true;
}

// static
bool PacketLatency::Populate(
    const base::Value& value, PacketLatency& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PacketLatency> PacketLatency::FromValue(const base::Value::Dict& value) {
  PacketLatency out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PacketLatency> PacketLatency::FromValue(const base::Value& value) {
  PacketLatency out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PacketLatency::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->packet_label) {
    to_value_result.Set("packetLabel", *this->packet_label);

  }
  if (this->latency_usec) {
    to_value_result.Set("latencyUsec", *this->latency_usec);

  }

  return to_value_result;
}


const char* ToString(LightCondition enum_param) {
  switch (enum_param) {
    case LightCondition::kUnspecified:
      return "UNSPECIFIED";
    case LightCondition::kNoChange:
      return "NO_CHANGE";
    case LightCondition::kTurnedOn:
      return "TURNED_ON";
    case LightCondition::kTurnedOff:
      return "TURNED_OFF";
    case LightCondition::kDimmer:
      return "DIMMER";
    case LightCondition::kBrighter:
      return "BRIGHTER";
    case LightCondition::kBlackFrame:
      return "BLACK_FRAME";
    case LightCondition::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

LightCondition ParseLightCondition(base::StringPiece enum_string) {
  if (enum_string == "UNSPECIFIED")
    return LightCondition::kUnspecified;
  if (enum_string == "NO_CHANGE")
    return LightCondition::kNoChange;
  if (enum_string == "TURNED_ON")
    return LightCondition::kTurnedOn;
  if (enum_string == "TURNED_OFF")
    return LightCondition::kTurnedOff;
  if (enum_string == "DIMMER")
    return LightCondition::kDimmer;
  if (enum_string == "BRIGHTER")
    return LightCondition::kBrighter;
  if (enum_string == "BLACK_FRAME")
    return LightCondition::kBlackFrame;
  return LightCondition::kNone;
}

std::u16string GetLightConditionParseError(base::StringPiece enum_string) {
  return u"expected \"UNSPECIFIED\" or \"NO_CHANGE\" or \"TURNED_ON\" or \"TURNED_OFF\" or \"DIMMER\" or \"BRIGHTER\" or \"BLACK_FRAME\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


VideoHumanPresenceDetection::VideoHumanPresenceDetection()
: light_condition() {}

VideoHumanPresenceDetection::~VideoHumanPresenceDetection() = default;
VideoHumanPresenceDetection::VideoHumanPresenceDetection(VideoHumanPresenceDetection&& rhs) noexcept = default;
VideoHumanPresenceDetection& VideoHumanPresenceDetection::operator=(VideoHumanPresenceDetection&& rhs) noexcept = default;
VideoHumanPresenceDetection VideoHumanPresenceDetection::Clone() const {
  VideoHumanPresenceDetection out;
  out.human_presence_likelihood = human_presence_likelihood;
  out.motion_detected_likelihood = motion_detected_likelihood;
  out.light_condition = light_condition;
  out.light_condition_likelihood = light_condition_likelihood;
  return out;
}

// static
bool VideoHumanPresenceDetection::Populate(
    const base::Value::Dict& dict, VideoHumanPresenceDetection& out) {
  out.light_condition = LightCondition();
  const base::Value* human_presence_likelihood_value = dict.Find("humanPresenceLikelihood");
  if (human_presence_likelihood_value) {
    {
      auto temp = (*human_presence_likelihood_value).GetIfDouble();
      if (!temp.has_value()) {
        out.human_presence_likelihood = std::nullopt;
        return false;
      }
      out.human_presence_likelihood = *temp;
    }
  }

  const base::Value* motion_detected_likelihood_value = dict.Find("motionDetectedLikelihood");
  if (motion_detected_likelihood_value) {
    {
      auto temp = (*motion_detected_likelihood_value).GetIfDouble();
      if (!temp.has_value()) {
        out.motion_detected_likelihood = std::nullopt;
        return false;
      }
      out.motion_detected_likelihood = *temp;
    }
  }

  const base::Value* light_condition_value = dict.Find("lightCondition");
  if (light_condition_value) {
    {
      const std::string* light_condition_as_string = (*light_condition_value).GetIfString();
      if (!light_condition_as_string) {
        return false;
      }
      out.light_condition = ParseLightCondition(*light_condition_as_string);
      if (out.light_condition == LightCondition()) {
        return false;
      }
    }
    } else {
    out.light_condition = LightCondition();
  }

  const base::Value* light_condition_likelihood_value = dict.Find("lightConditionLikelihood");
  if (light_condition_likelihood_value) {
    {
      auto temp = (*light_condition_likelihood_value).GetIfDouble();
      if (!temp.has_value()) {
        out.light_condition_likelihood = std::nullopt;
        return false;
      }
      out.light_condition_likelihood = *temp;
    }
  }

  return true;
}

// static
bool VideoHumanPresenceDetection::Populate(
    const base::Value& value, VideoHumanPresenceDetection& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<VideoHumanPresenceDetection> VideoHumanPresenceDetection::FromValue(const base::Value::Dict& value) {
  VideoHumanPresenceDetection out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<VideoHumanPresenceDetection> VideoHumanPresenceDetection::FromValue(const base::Value& value) {
  VideoHumanPresenceDetection out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict VideoHumanPresenceDetection::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->human_presence_likelihood) {
    to_value_result.Set("humanPresenceLikelihood", *this->human_presence_likelihood);

  }
  if (this->motion_detected_likelihood) {
    to_value_result.Set("motionDetectedLikelihood", *this->motion_detected_likelihood);

  }
  if (this->light_condition != LightCondition()) {
    to_value_result.Set("lightCondition", media_perception_private::ToString(this->light_condition));

  }
  if (this->light_condition_likelihood) {
    to_value_result.Set("lightConditionLikelihood", *this->light_condition_likelihood);

  }

  return to_value_result;
}


FramePerception::FramePerception()
 {}

FramePerception::~FramePerception() = default;
FramePerception::FramePerception(FramePerception&& rhs) noexcept = default;
FramePerception& FramePerception::operator=(FramePerception&& rhs) noexcept = default;
FramePerception FramePerception::Clone() const {
  FramePerception out;
  out.frame_id = frame_id;
  out.frame_width_in_px = frame_width_in_px;
  out.frame_height_in_px = frame_height_in_px;
  out.timestamp = timestamp;
  if (entities) {
    out.entities.emplace();
    out.entities->reserve(entities->size());
    for (const auto& element : *entities) {
      json_schema_compiler::util::AppendToContainer(*out.entities, element.Clone());
    }
  }
  if (packet_latency) {
    out.packet_latency.emplace();
    out.packet_latency->reserve(packet_latency->size());
    for (const auto& element : *packet_latency) {
      json_schema_compiler::util::AppendToContainer(*out.packet_latency, element.Clone());
    }
  }
  if (video_human_presence_detection) {
    out.video_human_presence_detection = video_human_presence_detection->Clone();
  }
  out.frame_perception_types = frame_perception_types;
  return out;
}

// static
bool FramePerception::Populate(
    const base::Value::Dict& dict, FramePerception& out) {
  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    {
      auto temp = (*frame_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.frame_id = std::nullopt;
        return false;
      }
      out.frame_id = *temp;
    }
  }

  const base::Value* frame_width_in_px_value = dict.Find("frameWidthInPx");
  if (frame_width_in_px_value) {
    {
      auto temp = (*frame_width_in_px_value).GetIfInt();
      if (!temp.has_value()) {
        out.frame_width_in_px = std::nullopt;
        return false;
      }
      out.frame_width_in_px = *temp;
    }
  }

  const base::Value* frame_height_in_px_value = dict.Find("frameHeightInPx");
  if (frame_height_in_px_value) {
    {
      auto temp = (*frame_height_in_px_value).GetIfInt();
      if (!temp.has_value()) {
        out.frame_height_in_px = std::nullopt;
        return false;
      }
      out.frame_height_in_px = *temp;
    }
  }

  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    {
      auto temp = (*timestamp_value).GetIfDouble();
      if (!temp.has_value()) {
        out.timestamp = std::nullopt;
        return false;
      }
      out.timestamp = *temp;
    }
  }

  const base::Value* entities_value = dict.Find("entities");
  if (entities_value) {
    {
      if (!(*entities_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*entities_value).GetList(), out.entities)) {
          return false;
        }
      }
    }
  }

  const base::Value* packet_latency_value = dict.Find("packetLatency");
  if (packet_latency_value) {
    {
      if (!(*packet_latency_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*packet_latency_value).GetList(), out.packet_latency)) {
          return false;
        }
      }
    }
  }

  const base::Value* video_human_presence_detection_value = dict.Find("videoHumanPresenceDetection");
  if (video_human_presence_detection_value) {
    {
      if (!(*video_human_presence_detection_value).is_dict()) {
        return false;
      }
      else {
        VideoHumanPresenceDetection temp;
        if (!VideoHumanPresenceDetection::Populate((*video_human_presence_detection_value).GetDict(), temp))
          return false;
        out.video_human_presence_detection = std::move(temp);
      }
    }
  }

  const base::Value* frame_perception_types_value = dict.Find("framePerceptionTypes");
  if (frame_perception_types_value) {
    {
      if (!(*frame_perception_types_value).is_list()) {
        return false;
      }
      else {
        out.frame_perception_types.emplace();
        for (const auto& it : ((*frame_perception_types_value)).GetList()) {
          FramePerceptionType tmp;
          const std::string* frame_perception_type_as_string = (it).GetIfString();
          if (!frame_perception_type_as_string) {
            return false;
          }
          tmp = ParseFramePerceptionType(*frame_perception_type_as_string);
          if (tmp == FramePerceptionType()) {
            return false;
          }
          out.frame_perception_types->push_back(tmp);
        }
      }
    }
  }

  return true;
}

// static
bool FramePerception::Populate(
    const base::Value& value, FramePerception& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FramePerception> FramePerception::FromValue(const base::Value::Dict& value) {
  FramePerception out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FramePerception> FramePerception::FromValue(const base::Value& value) {
  FramePerception out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict FramePerception::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->frame_id) {
    to_value_result.Set("frameId", *this->frame_id);

  }
  if (this->frame_width_in_px) {
    to_value_result.Set("frameWidthInPx", *this->frame_width_in_px);

  }
  if (this->frame_height_in_px) {
    to_value_result.Set("frameHeightInPx", *this->frame_height_in_px);

  }
  if (this->timestamp) {
    to_value_result.Set("timestamp", *this->timestamp);

  }
  if (this->entities) {
    to_value_result.Set("entities", json_schema_compiler::util::CreateValueFromArray(*this->entities));

  }
  if (this->packet_latency) {
    to_value_result.Set("packetLatency", json_schema_compiler::util::CreateValueFromArray(*this->packet_latency));

  }
  if (this->video_human_presence_detection) {
    to_value_result.Set("videoHumanPresenceDetection", (this->video_human_presence_detection)->ToValue());

  }
  if (this->frame_perception_types) {
    {
      std::vector<std::string> framePerceptionTypes_list;
      for (const auto& it : *(this->frame_perception_types)) {
        framePerceptionTypes_list.emplace_back(media_perception_private::ToString(it));
      }
      to_value_result.Set("framePerceptionTypes", json_schema_compiler::util::CreateValueFromArray(framePerceptionTypes_list));
    }

  }

  return to_value_result;
}


AudioLocalization::AudioLocalization()
 {}

AudioLocalization::~AudioLocalization() = default;
AudioLocalization::AudioLocalization(AudioLocalization&& rhs) noexcept = default;
AudioLocalization& AudioLocalization::operator=(AudioLocalization&& rhs) noexcept = default;
AudioLocalization AudioLocalization::Clone() const {
  AudioLocalization out;
  out.azimuth_radians = azimuth_radians;
  out.azimuth_scores = azimuth_scores;
  return out;
}

// static
bool AudioLocalization::Populate(
    const base::Value::Dict& dict, AudioLocalization& out) {
  const base::Value* azimuth_radians_value = dict.Find("azimuthRadians");
  if (azimuth_radians_value) {
    {
      auto temp = (*azimuth_radians_value).GetIfDouble();
      if (!temp.has_value()) {
        out.azimuth_radians = std::nullopt;
        return false;
      }
      out.azimuth_radians = *temp;
    }
  }

  const base::Value* azimuth_scores_value = dict.Find("azimuthScores");
  if (azimuth_scores_value) {
    {
      if (!(*azimuth_scores_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*azimuth_scores_value).GetList(), out.azimuth_scores)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool AudioLocalization::Populate(
    const base::Value& value, AudioLocalization& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AudioLocalization> AudioLocalization::FromValue(const base::Value::Dict& value) {
  AudioLocalization out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AudioLocalization> AudioLocalization::FromValue(const base::Value& value) {
  AudioLocalization out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AudioLocalization::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->azimuth_radians) {
    to_value_result.Set("azimuthRadians", *this->azimuth_radians);

  }
  if (this->azimuth_scores) {
    to_value_result.Set("azimuthScores", json_schema_compiler::util::CreateValueFromArray(*this->azimuth_scores));

  }

  return to_value_result;
}


AudioSpectrogram::AudioSpectrogram()
 {}

AudioSpectrogram::~AudioSpectrogram() = default;
AudioSpectrogram::AudioSpectrogram(AudioSpectrogram&& rhs) noexcept = default;
AudioSpectrogram& AudioSpectrogram::operator=(AudioSpectrogram&& rhs) noexcept = default;
AudioSpectrogram AudioSpectrogram::Clone() const {
  AudioSpectrogram out;
  out.values = values;
  return out;
}

// static
bool AudioSpectrogram::Populate(
    const base::Value::Dict& dict, AudioSpectrogram& out) {
  const base::Value* values_value = dict.Find("values");
  if (values_value) {
    {
      if (!(*values_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*values_value).GetList(), out.values)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool AudioSpectrogram::Populate(
    const base::Value& value, AudioSpectrogram& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AudioSpectrogram> AudioSpectrogram::FromValue(const base::Value::Dict& value) {
  AudioSpectrogram out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AudioSpectrogram> AudioSpectrogram::FromValue(const base::Value& value) {
  AudioSpectrogram out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AudioSpectrogram::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->values) {
    to_value_result.Set("values", json_schema_compiler::util::CreateValueFromArray(*this->values));

  }

  return to_value_result;
}


AudioHumanPresenceDetection::AudioHumanPresenceDetection()
 {}

AudioHumanPresenceDetection::~AudioHumanPresenceDetection() = default;
AudioHumanPresenceDetection::AudioHumanPresenceDetection(AudioHumanPresenceDetection&& rhs) noexcept = default;
AudioHumanPresenceDetection& AudioHumanPresenceDetection::operator=(AudioHumanPresenceDetection&& rhs) noexcept = default;
AudioHumanPresenceDetection AudioHumanPresenceDetection::Clone() const {
  AudioHumanPresenceDetection out;
  out.human_presence_likelihood = human_presence_likelihood;
  if (noise_spectrogram) {
    out.noise_spectrogram = noise_spectrogram->Clone();
  }
  if (frame_spectrogram) {
    out.frame_spectrogram = frame_spectrogram->Clone();
  }
  return out;
}

// static
bool AudioHumanPresenceDetection::Populate(
    const base::Value::Dict& dict, AudioHumanPresenceDetection& out) {
  const base::Value* human_presence_likelihood_value = dict.Find("humanPresenceLikelihood");
  if (human_presence_likelihood_value) {
    {
      auto temp = (*human_presence_likelihood_value).GetIfDouble();
      if (!temp.has_value()) {
        out.human_presence_likelihood = std::nullopt;
        return false;
      }
      out.human_presence_likelihood = *temp;
    }
  }

  const base::Value* noise_spectrogram_value = dict.Find("noiseSpectrogram");
  if (noise_spectrogram_value) {
    {
      if (!(*noise_spectrogram_value).is_dict()) {
        return false;
      }
      else {
        AudioSpectrogram temp;
        if (!AudioSpectrogram::Populate((*noise_spectrogram_value).GetDict(), temp))
          return false;
        out.noise_spectrogram = std::move(temp);
      }
    }
  }

  const base::Value* frame_spectrogram_value = dict.Find("frameSpectrogram");
  if (frame_spectrogram_value) {
    {
      if (!(*frame_spectrogram_value).is_dict()) {
        return false;
      }
      else {
        AudioSpectrogram temp;
        if (!AudioSpectrogram::Populate((*frame_spectrogram_value).GetDict(), temp))
          return false;
        out.frame_spectrogram = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool AudioHumanPresenceDetection::Populate(
    const base::Value& value, AudioHumanPresenceDetection& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AudioHumanPresenceDetection> AudioHumanPresenceDetection::FromValue(const base::Value::Dict& value) {
  AudioHumanPresenceDetection out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AudioHumanPresenceDetection> AudioHumanPresenceDetection::FromValue(const base::Value& value) {
  AudioHumanPresenceDetection out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AudioHumanPresenceDetection::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->human_presence_likelihood) {
    to_value_result.Set("humanPresenceLikelihood", *this->human_presence_likelihood);

  }
  if (this->noise_spectrogram) {
    to_value_result.Set("noiseSpectrogram", (this->noise_spectrogram)->ToValue());

  }
  if (this->frame_spectrogram) {
    to_value_result.Set("frameSpectrogram", (this->frame_spectrogram)->ToValue());

  }

  return to_value_result;
}


const char* ToString(HotwordType enum_param) {
  switch (enum_param) {
    case HotwordType::kUnknownType:
      return "UNKNOWN_TYPE";
    case HotwordType::kOkGoogle:
      return "OK_GOOGLE";
    case HotwordType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

HotwordType ParseHotwordType(base::StringPiece enum_string) {
  if (enum_string == "UNKNOWN_TYPE")
    return HotwordType::kUnknownType;
  if (enum_string == "OK_GOOGLE")
    return HotwordType::kOkGoogle;
  return HotwordType::kNone;
}

std::u16string GetHotwordTypeParseError(base::StringPiece enum_string) {
  return u"expected \"UNKNOWN_TYPE\" or \"OK_GOOGLE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


Hotword::Hotword()
: type() {}

Hotword::~Hotword() = default;
Hotword::Hotword(Hotword&& rhs) noexcept = default;
Hotword& Hotword::operator=(Hotword&& rhs) noexcept = default;
Hotword Hotword::Clone() const {
  Hotword out;
  out.id = id;
  out.type = type;
  out.frame_id = frame_id;
  out.start_timestamp_ms = start_timestamp_ms;
  out.end_timestamp_ms = end_timestamp_ms;
  out.confidence = confidence;
  return out;
}

// static
bool Hotword::Populate(
    const base::Value::Dict& dict, Hotword& out) {
  out.type = HotwordType();
  const base::Value* id_value = dict.Find("id");
  if (id_value) {
    {
      auto temp = (*id_value).GetIfInt();
      if (!temp.has_value()) {
        out.id = std::nullopt;
        return false;
      }
      out.id = *temp;
    }
  }

  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      const std::string* hotword_type_as_string = (*type_value).GetIfString();
      if (!hotword_type_as_string) {
        return false;
      }
      out.type = ParseHotwordType(*hotword_type_as_string);
      if (out.type == HotwordType()) {
        return false;
      }
    }
    } else {
    out.type = HotwordType();
  }

  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    {
      auto temp = (*frame_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.frame_id = std::nullopt;
        return false;
      }
      out.frame_id = *temp;
    }
  }

  const base::Value* start_timestamp_ms_value = dict.Find("startTimestampMs");
  if (start_timestamp_ms_value) {
    {
      auto temp = (*start_timestamp_ms_value).GetIfInt();
      if (!temp.has_value()) {
        out.start_timestamp_ms = std::nullopt;
        return false;
      }
      out.start_timestamp_ms = *temp;
    }
  }

  const base::Value* end_timestamp_ms_value = dict.Find("endTimestampMs");
  if (end_timestamp_ms_value) {
    {
      auto temp = (*end_timestamp_ms_value).GetIfInt();
      if (!temp.has_value()) {
        out.end_timestamp_ms = std::nullopt;
        return false;
      }
      out.end_timestamp_ms = *temp;
    }
  }

  const base::Value* confidence_value = dict.Find("confidence");
  if (confidence_value) {
    {
      auto temp = (*confidence_value).GetIfDouble();
      if (!temp.has_value()) {
        out.confidence = std::nullopt;
        return false;
      }
      out.confidence = *temp;
    }
  }

  return true;
}

// static
bool Hotword::Populate(
    const base::Value& value, Hotword& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Hotword> Hotword::FromValue(const base::Value::Dict& value) {
  Hotword out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Hotword> Hotword::FromValue(const base::Value& value) {
  Hotword out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Hotword::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->id) {
    to_value_result.Set("id", *this->id);

  }
  if (this->type != HotwordType()) {
    to_value_result.Set("type", media_perception_private::ToString(this->type));

  }
  if (this->frame_id) {
    to_value_result.Set("frameId", *this->frame_id);

  }
  if (this->start_timestamp_ms) {
    to_value_result.Set("startTimestampMs", *this->start_timestamp_ms);

  }
  if (this->end_timestamp_ms) {
    to_value_result.Set("endTimestampMs", *this->end_timestamp_ms);

  }
  if (this->confidence) {
    to_value_result.Set("confidence", *this->confidence);

  }

  return to_value_result;
}


HotwordDetection::HotwordDetection()
 {}

HotwordDetection::~HotwordDetection() = default;
HotwordDetection::HotwordDetection(HotwordDetection&& rhs) noexcept = default;
HotwordDetection& HotwordDetection::operator=(HotwordDetection&& rhs) noexcept = default;
HotwordDetection HotwordDetection::Clone() const {
  HotwordDetection out;
  if (hotwords) {
    out.hotwords.emplace();
    out.hotwords->reserve(hotwords->size());
    for (const auto& element : *hotwords) {
      json_schema_compiler::util::AppendToContainer(*out.hotwords, element.Clone());
    }
  }
  return out;
}

// static
bool HotwordDetection::Populate(
    const base::Value::Dict& dict, HotwordDetection& out) {
  const base::Value* hotwords_value = dict.Find("hotwords");
  if (hotwords_value) {
    {
      if (!(*hotwords_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*hotwords_value).GetList(), out.hotwords)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool HotwordDetection::Populate(
    const base::Value& value, HotwordDetection& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<HotwordDetection> HotwordDetection::FromValue(const base::Value::Dict& value) {
  HotwordDetection out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<HotwordDetection> HotwordDetection::FromValue(const base::Value& value) {
  HotwordDetection out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict HotwordDetection::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->hotwords) {
    to_value_result.Set("hotwords", json_schema_compiler::util::CreateValueFromArray(*this->hotwords));

  }

  return to_value_result;
}


AudioPerception::AudioPerception()
 {}

AudioPerception::~AudioPerception() = default;
AudioPerception::AudioPerception(AudioPerception&& rhs) noexcept = default;
AudioPerception& AudioPerception::operator=(AudioPerception&& rhs) noexcept = default;
AudioPerception AudioPerception::Clone() const {
  AudioPerception out;
  out.timestamp_us = timestamp_us;
  if (audio_localization) {
    out.audio_localization = audio_localization->Clone();
  }
  if (audio_human_presence_detection) {
    out.audio_human_presence_detection = audio_human_presence_detection->Clone();
  }
  if (hotword_detection) {
    out.hotword_detection = hotword_detection->Clone();
  }
  return out;
}

// static
bool AudioPerception::Populate(
    const base::Value::Dict& dict, AudioPerception& out) {
  const base::Value* timestamp_us_value = dict.Find("timestampUs");
  if (timestamp_us_value) {
    {
      auto temp = (*timestamp_us_value).GetIfDouble();
      if (!temp.has_value()) {
        out.timestamp_us = std::nullopt;
        return false;
      }
      out.timestamp_us = *temp;
    }
  }

  const base::Value* audio_localization_value = dict.Find("audioLocalization");
  if (audio_localization_value) {
    {
      if (!(*audio_localization_value).is_dict()) {
        return false;
      }
      else {
        AudioLocalization temp;
        if (!AudioLocalization::Populate((*audio_localization_value).GetDict(), temp))
          return false;
        out.audio_localization = std::move(temp);
      }
    }
  }

  const base::Value* audio_human_presence_detection_value = dict.Find("audioHumanPresenceDetection");
  if (audio_human_presence_detection_value) {
    {
      if (!(*audio_human_presence_detection_value).is_dict()) {
        return false;
      }
      else {
        AudioHumanPresenceDetection temp;
        if (!AudioHumanPresenceDetection::Populate((*audio_human_presence_detection_value).GetDict(), temp))
          return false;
        out.audio_human_presence_detection = std::move(temp);
      }
    }
  }

  const base::Value* hotword_detection_value = dict.Find("hotwordDetection");
  if (hotword_detection_value) {
    {
      if (!(*hotword_detection_value).is_dict()) {
        return false;
      }
      else {
        HotwordDetection temp;
        if (!HotwordDetection::Populate((*hotword_detection_value).GetDict(), temp))
          return false;
        out.hotword_detection = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool AudioPerception::Populate(
    const base::Value& value, AudioPerception& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AudioPerception> AudioPerception::FromValue(const base::Value::Dict& value) {
  AudioPerception out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AudioPerception> AudioPerception::FromValue(const base::Value& value) {
  AudioPerception out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AudioPerception::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->timestamp_us) {
    to_value_result.Set("timestampUs", *this->timestamp_us);

  }
  if (this->audio_localization) {
    to_value_result.Set("audioLocalization", (this->audio_localization)->ToValue());

  }
  if (this->audio_human_presence_detection) {
    to_value_result.Set("audioHumanPresenceDetection", (this->audio_human_presence_detection)->ToValue());

  }
  if (this->hotword_detection) {
    to_value_result.Set("hotwordDetection", (this->hotword_detection)->ToValue());

  }

  return to_value_result;
}


AudioVisualHumanPresenceDetection::AudioVisualHumanPresenceDetection()
 {}

AudioVisualHumanPresenceDetection::~AudioVisualHumanPresenceDetection() = default;
AudioVisualHumanPresenceDetection::AudioVisualHumanPresenceDetection(AudioVisualHumanPresenceDetection&& rhs) noexcept = default;
AudioVisualHumanPresenceDetection& AudioVisualHumanPresenceDetection::operator=(AudioVisualHumanPresenceDetection&& rhs) noexcept = default;
AudioVisualHumanPresenceDetection AudioVisualHumanPresenceDetection::Clone() const {
  AudioVisualHumanPresenceDetection out;
  out.human_presence_likelihood = human_presence_likelihood;
  return out;
}

// static
bool AudioVisualHumanPresenceDetection::Populate(
    const base::Value::Dict& dict, AudioVisualHumanPresenceDetection& out) {
  const base::Value* human_presence_likelihood_value = dict.Find("humanPresenceLikelihood");
  if (human_presence_likelihood_value) {
    {
      auto temp = (*human_presence_likelihood_value).GetIfDouble();
      if (!temp.has_value()) {
        out.human_presence_likelihood = std::nullopt;
        return false;
      }
      out.human_presence_likelihood = *temp;
    }
  }

  return true;
}

// static
bool AudioVisualHumanPresenceDetection::Populate(
    const base::Value& value, AudioVisualHumanPresenceDetection& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AudioVisualHumanPresenceDetection> AudioVisualHumanPresenceDetection::FromValue(const base::Value::Dict& value) {
  AudioVisualHumanPresenceDetection out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AudioVisualHumanPresenceDetection> AudioVisualHumanPresenceDetection::FromValue(const base::Value& value) {
  AudioVisualHumanPresenceDetection out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AudioVisualHumanPresenceDetection::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->human_presence_likelihood) {
    to_value_result.Set("humanPresenceLikelihood", *this->human_presence_likelihood);

  }

  return to_value_result;
}


AudioVisualPerception::AudioVisualPerception()
 {}

AudioVisualPerception::~AudioVisualPerception() = default;
AudioVisualPerception::AudioVisualPerception(AudioVisualPerception&& rhs) noexcept = default;
AudioVisualPerception& AudioVisualPerception::operator=(AudioVisualPerception&& rhs) noexcept = default;
AudioVisualPerception AudioVisualPerception::Clone() const {
  AudioVisualPerception out;
  out.timestamp_us = timestamp_us;
  if (audio_visual_human_presence_detection) {
    out.audio_visual_human_presence_detection = audio_visual_human_presence_detection->Clone();
  }
  return out;
}

// static
bool AudioVisualPerception::Populate(
    const base::Value::Dict& dict, AudioVisualPerception& out) {
  const base::Value* timestamp_us_value = dict.Find("timestampUs");
  if (timestamp_us_value) {
    {
      auto temp = (*timestamp_us_value).GetIfDouble();
      if (!temp.has_value()) {
        out.timestamp_us = std::nullopt;
        return false;
      }
      out.timestamp_us = *temp;
    }
  }

  const base::Value* audio_visual_human_presence_detection_value = dict.Find("audioVisualHumanPresenceDetection");
  if (audio_visual_human_presence_detection_value) {
    {
      if (!(*audio_visual_human_presence_detection_value).is_dict()) {
        return false;
      }
      else {
        AudioVisualHumanPresenceDetection temp;
        if (!AudioVisualHumanPresenceDetection::Populate((*audio_visual_human_presence_detection_value).GetDict(), temp))
          return false;
        out.audio_visual_human_presence_detection = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool AudioVisualPerception::Populate(
    const base::Value& value, AudioVisualPerception& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AudioVisualPerception> AudioVisualPerception::FromValue(const base::Value::Dict& value) {
  AudioVisualPerception out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AudioVisualPerception> AudioVisualPerception::FromValue(const base::Value& value) {
  AudioVisualPerception out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AudioVisualPerception::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->timestamp_us) {
    to_value_result.Set("timestampUs", *this->timestamp_us);

  }
  if (this->audio_visual_human_presence_detection) {
    to_value_result.Set("audioVisualHumanPresenceDetection", (this->audio_visual_human_presence_detection)->ToValue());

  }

  return to_value_result;
}


Metadata::Metadata()
 {}

Metadata::~Metadata() = default;
Metadata::Metadata(Metadata&& rhs) noexcept = default;
Metadata& Metadata::operator=(Metadata&& rhs) noexcept = default;
Metadata Metadata::Clone() const {
  Metadata out;
  out.visual_experience_controller_version = visual_experience_controller_version;
  return out;
}

// static
bool Metadata::Populate(
    const base::Value::Dict& dict, Metadata& out) {
  const base::Value* visual_experience_controller_version_value = dict.Find("visualExperienceControllerVersion");
  if (visual_experience_controller_version_value) {
    {
      auto* temp = (*visual_experience_controller_version_value).GetIfString();
      if (!temp) {
        out.visual_experience_controller_version = std::nullopt;
        return false;
      }
      out.visual_experience_controller_version = *temp;
    }
  }

  return true;
}

// static
bool Metadata::Populate(
    const base::Value& value, Metadata& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Metadata> Metadata::FromValue(const base::Value::Dict& value) {
  Metadata out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Metadata> Metadata::FromValue(const base::Value& value) {
  Metadata out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Metadata::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->visual_experience_controller_version) {
    to_value_result.Set("visualExperienceControllerVersion", *this->visual_experience_controller_version);

  }

  return to_value_result;
}


MediaPerception::MediaPerception()
 {}

MediaPerception::~MediaPerception() = default;
MediaPerception::MediaPerception(MediaPerception&& rhs) noexcept = default;
MediaPerception& MediaPerception::operator=(MediaPerception&& rhs) noexcept = default;
MediaPerception MediaPerception::Clone() const {
  MediaPerception out;
  out.timestamp = timestamp;
  if (frame_perceptions) {
    out.frame_perceptions.emplace();
    out.frame_perceptions->reserve(frame_perceptions->size());
    for (const auto& element : *frame_perceptions) {
      json_schema_compiler::util::AppendToContainer(*out.frame_perceptions, element.Clone());
    }
  }
  if (audio_perceptions) {
    out.audio_perceptions.emplace();
    out.audio_perceptions->reserve(audio_perceptions->size());
    for (const auto& element : *audio_perceptions) {
      json_schema_compiler::util::AppendToContainer(*out.audio_perceptions, element.Clone());
    }
  }
  if (audio_visual_perceptions) {
    out.audio_visual_perceptions.emplace();
    out.audio_visual_perceptions->reserve(audio_visual_perceptions->size());
    for (const auto& element : *audio_visual_perceptions) {
      json_schema_compiler::util::AppendToContainer(*out.audio_visual_perceptions, element.Clone());
    }
  }
  if (metadata) {
    out.metadata = metadata->Clone();
  }
  return out;
}

// static
bool MediaPerception::Populate(
    const base::Value::Dict& dict, MediaPerception& out) {
  const base::Value* timestamp_value = dict.Find("timestamp");
  if (timestamp_value) {
    {
      auto temp = (*timestamp_value).GetIfDouble();
      if (!temp.has_value()) {
        out.timestamp = std::nullopt;
        return false;
      }
      out.timestamp = *temp;
    }
  }

  const base::Value* frame_perceptions_value = dict.Find("framePerceptions");
  if (frame_perceptions_value) {
    {
      if (!(*frame_perceptions_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*frame_perceptions_value).GetList(), out.frame_perceptions)) {
          return false;
        }
      }
    }
  }

  const base::Value* audio_perceptions_value = dict.Find("audioPerceptions");
  if (audio_perceptions_value) {
    {
      if (!(*audio_perceptions_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*audio_perceptions_value).GetList(), out.audio_perceptions)) {
          return false;
        }
      }
    }
  }

  const base::Value* audio_visual_perceptions_value = dict.Find("audioVisualPerceptions");
  if (audio_visual_perceptions_value) {
    {
      if (!(*audio_visual_perceptions_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*audio_visual_perceptions_value).GetList(), out.audio_visual_perceptions)) {
          return false;
        }
      }
    }
  }

  const base::Value* metadata_value = dict.Find("metadata");
  if (metadata_value) {
    {
      if (!(*metadata_value).is_dict()) {
        return false;
      }
      else {
        Metadata temp;
        if (!Metadata::Populate((*metadata_value).GetDict(), temp))
          return false;
        out.metadata = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool MediaPerception::Populate(
    const base::Value& value, MediaPerception& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MediaPerception> MediaPerception::FromValue(const base::Value::Dict& value) {
  MediaPerception out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MediaPerception> MediaPerception::FromValue(const base::Value& value) {
  MediaPerception out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict MediaPerception::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->timestamp) {
    to_value_result.Set("timestamp", *this->timestamp);

  }
  if (this->frame_perceptions) {
    to_value_result.Set("framePerceptions", json_schema_compiler::util::CreateValueFromArray(*this->frame_perceptions));

  }
  if (this->audio_perceptions) {
    to_value_result.Set("audioPerceptions", json_schema_compiler::util::CreateValueFromArray(*this->audio_perceptions));

  }
  if (this->audio_visual_perceptions) {
    to_value_result.Set("audioVisualPerceptions", json_schema_compiler::util::CreateValueFromArray(*this->audio_visual_perceptions));

  }
  if (this->metadata) {
    to_value_result.Set("metadata", (this->metadata)->ToValue());

  }

  return to_value_result;
}


const char* ToString(ImageFormat enum_param) {
  switch (enum_param) {
    case ImageFormat::kRaw:
      return "RAW";
    case ImageFormat::kPng:
      return "PNG";
    case ImageFormat::kJpeg:
      return "JPEG";
    case ImageFormat::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ImageFormat ParseImageFormat(base::StringPiece enum_string) {
  if (enum_string == "RAW")
    return ImageFormat::kRaw;
  if (enum_string == "PNG")
    return ImageFormat::kPng;
  if (enum_string == "JPEG")
    return ImageFormat::kJpeg;
  return ImageFormat::kNone;
}

std::u16string GetImageFormatParseError(base::StringPiece enum_string) {
  return u"expected \"RAW\" or \"PNG\" or \"JPEG\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ImageFrame::ImageFrame()
: format() {}

ImageFrame::~ImageFrame() = default;
ImageFrame::ImageFrame(ImageFrame&& rhs) noexcept = default;
ImageFrame& ImageFrame::operator=(ImageFrame&& rhs) noexcept = default;
ImageFrame ImageFrame::Clone() const {
  ImageFrame out;
  out.width = width;
  out.height = height;
  out.format = format;
  out.data_length = data_length;
  out.frame = frame;
  return out;
}

// static
bool ImageFrame::Populate(
    const base::Value::Dict& dict, ImageFrame& out) {
  out.format = ImageFormat();
  const base::Value* width_value = dict.Find("width");
  if (width_value) {
    {
      auto temp = (*width_value).GetIfInt();
      if (!temp.has_value()) {
        out.width = std::nullopt;
        return false;
      }
      out.width = *temp;
    }
  }

  const base::Value* height_value = dict.Find("height");
  if (height_value) {
    {
      auto temp = (*height_value).GetIfInt();
      if (!temp.has_value()) {
        out.height = std::nullopt;
        return false;
      }
      out.height = *temp;
    }
  }

  const base::Value* format_value = dict.Find("format");
  if (format_value) {
    {
      const std::string* image_format_as_string = (*format_value).GetIfString();
      if (!image_format_as_string) {
        return false;
      }
      out.format = ParseImageFormat(*image_format_as_string);
      if (out.format == ImageFormat()) {
        return false;
      }
    }
    } else {
    out.format = ImageFormat();
  }

  const base::Value* data_length_value = dict.Find("dataLength");
  if (data_length_value) {
    {
      auto temp = (*data_length_value).GetIfInt();
      if (!temp.has_value()) {
        out.data_length = std::nullopt;
        return false;
      }
      out.data_length = *temp;
    }
  }

  const base::Value* frame_value = dict.Find("frame");
  if (frame_value) {
    {
      if (!(*frame_value).is_blob()) {
        return false;
      }
      else {
        out.frame = (*frame_value).GetBlob();
      }
    }
  }

  return true;
}

// static
bool ImageFrame::Populate(
    const base::Value& value, ImageFrame& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ImageFrame> ImageFrame::FromValue(const base::Value::Dict& value) {
  ImageFrame out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ImageFrame> ImageFrame::FromValue(const base::Value& value) {
  ImageFrame out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ImageFrame::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->width) {
    to_value_result.Set("width", *this->width);

  }
  if (this->height) {
    to_value_result.Set("height", *this->height);

  }
  if (this->format != ImageFormat()) {
    to_value_result.Set("format", media_perception_private::ToString(this->format));

  }
  if (this->data_length) {
    to_value_result.Set("dataLength", *this->data_length);

  }
  if (this->frame) {
    to_value_result.Set("frame", base::Value(*this->frame));

  }

  return to_value_result;
}


PerceptionSample::PerceptionSample()
 {}

PerceptionSample::~PerceptionSample() = default;
PerceptionSample::PerceptionSample(PerceptionSample&& rhs) noexcept = default;
PerceptionSample& PerceptionSample::operator=(PerceptionSample&& rhs) noexcept = default;
PerceptionSample PerceptionSample::Clone() const {
  PerceptionSample out;
  if (frame_perception) {
    out.frame_perception = frame_perception->Clone();
  }
  if (image_frame) {
    out.image_frame = image_frame->Clone();
  }
  if (audio_perception) {
    out.audio_perception = audio_perception->Clone();
  }
  if (audio_visual_perception) {
    out.audio_visual_perception = audio_visual_perception->Clone();
  }
  if (metadata) {
    out.metadata = metadata->Clone();
  }
  return out;
}

// static
bool PerceptionSample::Populate(
    const base::Value::Dict& dict, PerceptionSample& out) {
  const base::Value* frame_perception_value = dict.Find("framePerception");
  if (frame_perception_value) {
    {
      if (!(*frame_perception_value).is_dict()) {
        return false;
      }
      else {
        FramePerception temp;
        if (!FramePerception::Populate((*frame_perception_value).GetDict(), temp))
          return false;
        out.frame_perception = std::move(temp);
      }
    }
  }

  const base::Value* image_frame_value = dict.Find("imageFrame");
  if (image_frame_value) {
    {
      if (!(*image_frame_value).is_dict()) {
        return false;
      }
      else {
        ImageFrame temp;
        if (!ImageFrame::Populate((*image_frame_value).GetDict(), temp))
          return false;
        out.image_frame = std::move(temp);
      }
    }
  }

  const base::Value* audio_perception_value = dict.Find("audioPerception");
  if (audio_perception_value) {
    {
      if (!(*audio_perception_value).is_dict()) {
        return false;
      }
      else {
        AudioPerception temp;
        if (!AudioPerception::Populate((*audio_perception_value).GetDict(), temp))
          return false;
        out.audio_perception = std::move(temp);
      }
    }
  }

  const base::Value* audio_visual_perception_value = dict.Find("audioVisualPerception");
  if (audio_visual_perception_value) {
    {
      if (!(*audio_visual_perception_value).is_dict()) {
        return false;
      }
      else {
        AudioVisualPerception temp;
        if (!AudioVisualPerception::Populate((*audio_visual_perception_value).GetDict(), temp))
          return false;
        out.audio_visual_perception = std::move(temp);
      }
    }
  }

  const base::Value* metadata_value = dict.Find("metadata");
  if (metadata_value) {
    {
      if (!(*metadata_value).is_dict()) {
        return false;
      }
      else {
        Metadata temp;
        if (!Metadata::Populate((*metadata_value).GetDict(), temp))
          return false;
        out.metadata = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool PerceptionSample::Populate(
    const base::Value& value, PerceptionSample& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PerceptionSample> PerceptionSample::FromValue(const base::Value::Dict& value) {
  PerceptionSample out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PerceptionSample> PerceptionSample::FromValue(const base::Value& value) {
  PerceptionSample out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PerceptionSample::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->frame_perception) {
    to_value_result.Set("framePerception", (this->frame_perception)->ToValue());

  }
  if (this->image_frame) {
    to_value_result.Set("imageFrame", (this->image_frame)->ToValue());

  }
  if (this->audio_perception) {
    to_value_result.Set("audioPerception", (this->audio_perception)->ToValue());

  }
  if (this->audio_visual_perception) {
    to_value_result.Set("audioVisualPerception", (this->audio_visual_perception)->ToValue());

  }
  if (this->metadata) {
    to_value_result.Set("metadata", (this->metadata)->ToValue());

  }

  return to_value_result;
}


Diagnostics::Diagnostics()
: service_error() {}

Diagnostics::~Diagnostics() = default;
Diagnostics::Diagnostics(Diagnostics&& rhs) noexcept = default;
Diagnostics& Diagnostics::operator=(Diagnostics&& rhs) noexcept = default;
Diagnostics Diagnostics::Clone() const {
  Diagnostics out;
  out.service_error = service_error;
  if (perception_samples) {
    out.perception_samples.emplace();
    out.perception_samples->reserve(perception_samples->size());
    for (const auto& element : *perception_samples) {
      json_schema_compiler::util::AppendToContainer(*out.perception_samples, element.Clone());
    }
  }
  return out;
}

// static
bool Diagnostics::Populate(
    const base::Value::Dict& dict, Diagnostics& out) {
  out.service_error = ServiceError();
  const base::Value* service_error_value = dict.Find("serviceError");
  if (service_error_value) {
    {
      const std::string* service_error_as_string = (*service_error_value).GetIfString();
      if (!service_error_as_string) {
        return false;
      }
      out.service_error = ParseServiceError(*service_error_as_string);
      if (out.service_error == ServiceError()) {
        return false;
      }
    }
    } else {
    out.service_error = ServiceError();
  }

  const base::Value* perception_samples_value = dict.Find("perceptionSamples");
  if (perception_samples_value) {
    {
      if (!(*perception_samples_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*perception_samples_value).GetList(), out.perception_samples)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool Diagnostics::Populate(
    const base::Value& value, Diagnostics& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Diagnostics> Diagnostics::FromValue(const base::Value::Dict& value) {
  Diagnostics out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Diagnostics> Diagnostics::FromValue(const base::Value& value) {
  Diagnostics out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Diagnostics::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->service_error != ServiceError()) {
    to_value_result.Set("serviceError", media_perception_private::ToString(this->service_error));

  }
  if (this->perception_samples) {
    to_value_result.Set("perceptionSamples", json_schema_compiler::util::CreateValueFromArray(*this->perception_samples));

  }

  return to_value_result;
}



//
// Functions
//

namespace GetState {

base::Value::List Results::Create(const State& state) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((state).ToValue());

  return create_results;
}
}  // namespace GetState

namespace SetState {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& state_value = args[0];
    {
      if (!state_value.is_dict()) {
        return std::nullopt;
      }
      if (!State::Populate(state_value.GetDict(), params.state)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const State& state) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((state).ToValue());

  return create_results;
}
}  // namespace SetState

namespace GetDiagnostics {

base::Value::List Results::Create(const Diagnostics& diagnostics) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((diagnostics).ToValue());

  return create_results;
}
}  // namespace GetDiagnostics

namespace SetAnalyticsComponent {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& component_value = args[0];
    {
      if (!component_value.is_dict()) {
        return std::nullopt;
      }
      if (!Component::Populate(component_value.GetDict(), params.component)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ComponentState& component_state) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((component_state).ToValue());

  return create_results;
}
}  // namespace SetAnalyticsComponent

namespace SetComponentProcessState {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& process_state_value = args[0];
    {
      if (!process_state_value.is_dict()) {
        return std::nullopt;
      }
      if (!ProcessState::Populate(process_state_value.GetDict(), params.process_state)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ProcessState& process_state) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((process_state).ToValue());

  return create_results;
}
}  // namespace SetComponentProcessState

//
// Events
//

namespace OnMediaPerception {

const char kEventName[] = "mediaPerceptionPrivate.onMediaPerception";

base::Value::List Create(const MediaPerception& media_perception) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((media_perception).ToValue());

  return create_results;
}

}  // namespace OnMediaPerception

}  // namespace media_perception_private
}  // namespace api
}  // namespace extensions

