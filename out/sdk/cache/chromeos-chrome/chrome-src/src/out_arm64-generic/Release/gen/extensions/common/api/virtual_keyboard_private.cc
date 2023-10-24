// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/virtual_keyboard_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/virtual_keyboard_private.h"

#include <memory>
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
namespace virtual_keyboard_private {
//
// Types
//

const char* ToString(VirtualKeyboardEventType enum_param) {
  switch (enum_param) {
    case VirtualKeyboardEventType::kKeyup:
      return "keyup";
    case VirtualKeyboardEventType::kKeydown:
      return "keydown";
    case VirtualKeyboardEventType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

VirtualKeyboardEventType ParseVirtualKeyboardEventType(base::StringPiece enum_string) {
  if (enum_string == "keyup")
    return VirtualKeyboardEventType::kKeyup;
  if (enum_string == "keydown")
    return VirtualKeyboardEventType::kKeydown;
  return VirtualKeyboardEventType::kNone;
}

std::u16string GetVirtualKeyboardEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"keyup\" or \"keydown\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


VirtualKeyboardEvent::VirtualKeyboardEvent()
: type(),
char_value(0),
key_code(0) {}

VirtualKeyboardEvent::~VirtualKeyboardEvent() = default;
VirtualKeyboardEvent::VirtualKeyboardEvent(VirtualKeyboardEvent&& rhs) = default;
VirtualKeyboardEvent& VirtualKeyboardEvent::operator=(VirtualKeyboardEvent&& rhs) = default;
VirtualKeyboardEvent VirtualKeyboardEvent::Clone() const {
  VirtualKeyboardEvent out;
  out.type = type;
  out.char_value = char_value;
  out.key_code = key_code;
  out.key_name = key_name;
  out.modifiers = modifiers;
  return out;
}

// static
bool VirtualKeyboardEvent::Populate(
    const base::Value::Dict& dict, VirtualKeyboardEvent& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* virtual_keyboard_event_type_as_string = (*type_value).GetIfString();
    if (!virtual_keyboard_event_type_as_string) {
      return false;
    }
    out.type = ParseVirtualKeyboardEventType(*virtual_keyboard_event_type_as_string);
    if (out.type == VirtualKeyboardEventType()) {
      return false;
    }
  }

  const base::Value* char_value_value = dict.Find("charValue");
  if (!char_value_value) {
    return false;
  }
  {
    auto temp = (*char_value_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.char_value = *temp;
  }

  const base::Value* key_code_value = dict.Find("keyCode");
  if (!key_code_value) {
    return false;
  }
  {
    auto temp = (*key_code_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.key_code = *temp;
  }

  const base::Value* key_name_value = dict.Find("keyName");
  if (!key_name_value) {
    return false;
  }
  {
    auto* temp = (*key_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.key_name = *temp;
  }

  const base::Value* modifiers_value = dict.Find("modifiers");
  if (modifiers_value) {
    {
      auto temp = (*modifiers_value).GetIfInt();
      if (!temp.has_value()) {
        out.modifiers = absl::nullopt;
        return false;
      }
      out.modifiers = *temp;
    }
  }

  return true;
}

// static
bool VirtualKeyboardEvent::Populate(
    const base::Value& value, VirtualKeyboardEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<VirtualKeyboardEvent> VirtualKeyboardEvent::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<VirtualKeyboardEvent>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<VirtualKeyboardEvent> VirtualKeyboardEvent::FromValue(const base::Value::Dict& value) {
  VirtualKeyboardEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<VirtualKeyboardEvent> VirtualKeyboardEvent::FromValue(const base::Value& value) {
  VirtualKeyboardEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict VirtualKeyboardEvent::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", virtual_keyboard_private::ToString(this->type));

  to_value_result.Set("charValue", this->char_value);

  to_value_result.Set("keyCode", this->key_code);

  to_value_result.Set("keyName", this->key_name);

  if (this->modifiers) {
    to_value_result.Set("modifiers", *this->modifiers);

  }

  return to_value_result;
}


const char* ToString(KeyboardMode enum_param) {
  switch (enum_param) {
    case KeyboardMode::kFullWidth:
      return "FULL_WIDTH";
    case KeyboardMode::kFloating:
      return "FLOATING";
    case KeyboardMode::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

KeyboardMode ParseKeyboardMode(base::StringPiece enum_string) {
  if (enum_string == "FULL_WIDTH")
    return KeyboardMode::kFullWidth;
  if (enum_string == "FLOATING")
    return KeyboardMode::kFloating;
  return KeyboardMode::kNone;
}

std::u16string GetKeyboardModeParseError(base::StringPiece enum_string) {
  return u"expected \"FULL_WIDTH\" or \"FLOATING\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(KeyboardState enum_param) {
  switch (enum_param) {
    case KeyboardState::kEnabled:
      return "ENABLED";
    case KeyboardState::kDisabled:
      return "DISABLED";
    case KeyboardState::kAuto:
      return "AUTO";
    case KeyboardState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

KeyboardState ParseKeyboardState(base::StringPiece enum_string) {
  if (enum_string == "ENABLED")
    return KeyboardState::kEnabled;
  if (enum_string == "DISABLED")
    return KeyboardState::kDisabled;
  if (enum_string == "AUTO")
    return KeyboardState::kAuto;
  return KeyboardState::kNone;
}

std::u16string GetKeyboardStateParseError(base::StringPiece enum_string) {
  return u"expected \"ENABLED\" or \"DISABLED\" or \"AUTO\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


Bounds::Bounds()
: left(0),
top(0),
width(0),
height(0) {}

Bounds::~Bounds() = default;
Bounds::Bounds(Bounds&& rhs) = default;
Bounds& Bounds::operator=(Bounds&& rhs) = default;
Bounds Bounds::Clone() const {
  Bounds out;
  out.left = left;
  out.top = top;
  out.width = width;
  out.height = height;
  return out;
}

// static
bool Bounds::Populate(
    const base::Value::Dict& dict, Bounds& out) {
  const base::Value* left_value = dict.Find("left");
  if (!left_value) {
    return false;
  }
  {
    auto temp = (*left_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.left = *temp;
  }

  const base::Value* top_value = dict.Find("top");
  if (!top_value) {
    return false;
  }
  {
    auto temp = (*top_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.top = *temp;
  }

  const base::Value* width_value = dict.Find("width");
  if (!width_value) {
    return false;
  }
  {
    auto temp = (*width_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.width = *temp;
  }

  const base::Value* height_value = dict.Find("height");
  if (!height_value) {
    return false;
  }
  {
    auto temp = (*height_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.height = *temp;
  }

  return true;
}

// static
bool Bounds::Populate(
    const base::Value& value, Bounds& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Bounds> Bounds::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Bounds>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<Bounds> Bounds::FromValue(const base::Value::Dict& value) {
  Bounds out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Bounds> Bounds::FromValue(const base::Value& value) {
  Bounds out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Bounds::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("left", this->left);

  to_value_result.Set("top", this->top);

  to_value_result.Set("width", this->width);

  to_value_result.Set("height", this->height);


  return to_value_result;
}


KeyboardConfig::KeyboardConfig()
: hotrodmode(false),
a11ymode(false) {}

KeyboardConfig::~KeyboardConfig() = default;
KeyboardConfig::KeyboardConfig(KeyboardConfig&& rhs) = default;
KeyboardConfig& KeyboardConfig::operator=(KeyboardConfig&& rhs) = default;
KeyboardConfig KeyboardConfig::Clone() const {
  KeyboardConfig out;
  out.layout = layout;
  out.hotrodmode = hotrodmode;
  out.a11ymode = a11ymode;
  out.features = features;
  return out;
}

// static
bool KeyboardConfig::Populate(
    const base::Value::Dict& dict, KeyboardConfig& out) {
  const base::Value* layout_value = dict.Find("layout");
  if (!layout_value) {
    return false;
  }
  {
    auto* temp = (*layout_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.layout = *temp;
  }

  const base::Value* hotrodmode_value = dict.Find("hotrodmode");
  if (!hotrodmode_value) {
    return false;
  }
  {
    auto temp = (*hotrodmode_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.hotrodmode = *temp;
  }

  const base::Value* a11ymode_value = dict.Find("a11ymode");
  if (!a11ymode_value) {
    return false;
  }
  {
    auto temp = (*a11ymode_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.a11ymode = *temp;
  }

  const base::Value* features_value = dict.Find("features");
  if (!features_value) {
    return false;
  }
  {
    if (!(*features_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*features_value).GetList(), out.features)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool KeyboardConfig::Populate(
    const base::Value& value, KeyboardConfig& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<KeyboardConfig> KeyboardConfig::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<KeyboardConfig>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<KeyboardConfig> KeyboardConfig::FromValue(const base::Value::Dict& value) {
  KeyboardConfig out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<KeyboardConfig> KeyboardConfig::FromValue(const base::Value& value) {
  KeyboardConfig out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict KeyboardConfig::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("layout", this->layout);

  to_value_result.Set("hotrodmode", this->hotrodmode);

  to_value_result.Set("a11ymode", this->a11ymode);

  to_value_result.Set("features", json_schema_compiler::util::CreateValueFromArray(this->features));


  return to_value_result;
}


ContainerBehaviorOptions::ContainerBehaviorOptions()
: mode() {}

ContainerBehaviorOptions::~ContainerBehaviorOptions() = default;
ContainerBehaviorOptions::ContainerBehaviorOptions(ContainerBehaviorOptions&& rhs) = default;
ContainerBehaviorOptions& ContainerBehaviorOptions::operator=(ContainerBehaviorOptions&& rhs) = default;
ContainerBehaviorOptions ContainerBehaviorOptions::Clone() const {
  ContainerBehaviorOptions out;
  out.mode = mode;
  out.bounds = bounds.Clone();
  return out;
}

// static
bool ContainerBehaviorOptions::Populate(
    const base::Value::Dict& dict, ContainerBehaviorOptions& out) {
  const base::Value* mode_value = dict.Find("mode");
  if (!mode_value) {
    return false;
  }
  {
    const std::string* keyboard_mode_as_string = (*mode_value).GetIfString();
    if (!keyboard_mode_as_string) {
      return false;
    }
    out.mode = ParseKeyboardMode(*keyboard_mode_as_string);
    if (out.mode == KeyboardMode()) {
      return false;
    }
  }

  const base::Value* bounds_value = dict.Find("bounds");
  if (!bounds_value) {
    return false;
  }
  {
    if (!(*bounds_value).is_dict()) {
      return false;
    }
    if (!Bounds::Populate((*bounds_value).GetDict(), out.bounds)) {
      return false;
    }
  }

  return true;
}

// static
bool ContainerBehaviorOptions::Populate(
    const base::Value& value, ContainerBehaviorOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ContainerBehaviorOptions> ContainerBehaviorOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ContainerBehaviorOptions>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<ContainerBehaviorOptions> ContainerBehaviorOptions::FromValue(const base::Value::Dict& value) {
  ContainerBehaviorOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ContainerBehaviorOptions> ContainerBehaviorOptions::FromValue(const base::Value& value) {
  ContainerBehaviorOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ContainerBehaviorOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("mode", virtual_keyboard_private::ToString(this->mode));

  to_value_result.Set("bounds", (this->bounds).ToValue());


  return to_value_result;
}


const char* ToString(DisplayFormat enum_param) {
  switch (enum_param) {
    case DisplayFormat::kText:
      return "text";
    case DisplayFormat::kPng:
      return "png";
    case DisplayFormat::kHtml:
      return "html";
    case DisplayFormat::kFile:
      return "file";
    case DisplayFormat::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DisplayFormat ParseDisplayFormat(base::StringPiece enum_string) {
  if (enum_string == "text")
    return DisplayFormat::kText;
  if (enum_string == "png")
    return DisplayFormat::kPng;
  if (enum_string == "html")
    return DisplayFormat::kHtml;
  if (enum_string == "file")
    return DisplayFormat::kFile;
  return DisplayFormat::kNone;
}

std::u16string GetDisplayFormatParseError(base::StringPiece enum_string) {
  return u"expected \"text\" or \"png\" or \"html\" or \"file\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ClipboardItem::ClipboardItem()
: display_format(),
time_copied(0.0) {}

ClipboardItem::~ClipboardItem() = default;
ClipboardItem::ClipboardItem(ClipboardItem&& rhs) = default;
ClipboardItem& ClipboardItem::operator=(ClipboardItem&& rhs) = default;
ClipboardItem ClipboardItem::Clone() const {
  ClipboardItem out;
  out.id = id;
  out.image_data = image_data;
  out.text_data = text_data;
  out.display_format = display_format;
  out.time_copied = time_copied;
  return out;
}

// static
bool ClipboardItem::Populate(
    const base::Value::Dict& dict, ClipboardItem& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* image_data_value = dict.Find("imageData");
  if (image_data_value) {
    {
      auto* temp = (*image_data_value).GetIfString();
      if (!temp) {
        out.image_data = absl::nullopt;
        return false;
      }
      out.image_data = *temp;
    }
  }

  const base::Value* text_data_value = dict.Find("textData");
  if (text_data_value) {
    {
      auto* temp = (*text_data_value).GetIfString();
      if (!temp) {
        out.text_data = absl::nullopt;
        return false;
      }
      out.text_data = *temp;
    }
  }

  const base::Value* display_format_value = dict.Find("displayFormat");
  if (!display_format_value) {
    return false;
  }
  {
    const std::string* display_format_as_string = (*display_format_value).GetIfString();
    if (!display_format_as_string) {
      return false;
    }
    out.display_format = ParseDisplayFormat(*display_format_as_string);
    if (out.display_format == DisplayFormat()) {
      return false;
    }
  }

  const base::Value* time_copied_value = dict.Find("timeCopied");
  if (!time_copied_value) {
    return false;
  }
  {
    auto temp = (*time_copied_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.time_copied = *temp;
  }

  return true;
}

// static
bool ClipboardItem::Populate(
    const base::Value& value, ClipboardItem& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ClipboardItem> ClipboardItem::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ClipboardItem>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<ClipboardItem> ClipboardItem::FromValue(const base::Value::Dict& value) {
  ClipboardItem out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ClipboardItem> ClipboardItem::FromValue(const base::Value& value) {
  ClipboardItem out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ClipboardItem::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  if (this->image_data) {
    to_value_result.Set("imageData", *this->image_data);

  }
  if (this->text_data) {
    to_value_result.Set("textData", *this->text_data);

  }
  to_value_result.Set("displayFormat", virtual_keyboard_private::ToString(this->display_format));

  to_value_result.Set("timeCopied", this->time_copied);


  return to_value_result;
}



//
// Functions
//

namespace InsertText {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& text_value = args[0];
    {
      auto* temp = text_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.text = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace InsertText

namespace SendKeyEvent {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& key_event_value = args[0];
    {
      if (!key_event_value.is_dict()) {
        return absl::nullopt;
      }
      if (!VirtualKeyboardEvent::Populate(key_event_value.GetDict(), params.key_event)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SendKeyEvent

namespace HideKeyboard {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace HideKeyboard

namespace SetHotrodKeyboard {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& enable_value = args[0];
    {
      auto temp = enable_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.enable = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetHotrodKeyboard

namespace LockKeyboard {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& lock_value = args[0];
    {
      auto temp = lock_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.lock = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace LockKeyboard

namespace KeyboardLoaded {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace KeyboardLoaded

namespace GetKeyboardConfig {

base::Value::List Results::Create(const KeyboardConfig& config) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((config).ToValue());

  return create_results;
}
}  // namespace GetKeyboardConfig

namespace OpenSettings {

}  // namespace OpenSettings

namespace OpenSuggestionSettings {

}  // namespace OpenSuggestionSettings

namespace SetContainerBehavior {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      if (!ContainerBehaviorOptions::Populate(options_value.GetDict(), params.options)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace SetContainerBehavior

namespace SetDraggableArea {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& bounds_value = args[0];
    {
      if (!bounds_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Bounds::Populate(bounds_value.GetDict(), params.bounds)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetDraggableArea

namespace SetKeyboardState {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& state_value = args[0];
    {
      const std::string* keyboard_state_as_string = state_value.GetIfString();
      if (!keyboard_state_as_string) {
        return absl::nullopt;
      }
      params.state = ParseKeyboardState(*keyboard_state_as_string);
      if (params.state == KeyboardState()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetKeyboardState

namespace SetOccludedBounds {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& bounds_list_value = args[0];
    {
      if (!bounds_list_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(bounds_list_value.GetList(), params.bounds_list)) {
          return absl::nullopt;
        }
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetOccludedBounds

namespace SetHitTestBounds {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& bounds_list_value = args[0];
    {
      if (!bounds_list_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(bounds_list_value.GetList(), params.bounds_list)) {
          return absl::nullopt;
        }
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetHitTestBounds

namespace SetAreaToRemainOnScreen {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& bounds_value = args[0];
    {
      if (!bounds_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Bounds::Populate(bounds_value.GetDict(), params.bounds)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetAreaToRemainOnScreen

namespace SetWindowBoundsInScreen {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& bounds_value = args[0];
    {
      if (!bounds_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Bounds::Populate(bounds_value.GetDict(), params.bounds)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace SetWindowBoundsInScreen

namespace GetClipboardHistory {

Params::Options::Options()
 {}

Params::Options::~Options() = default;
Params::Options::Options(Options&& rhs) = default;
Params::Options& Params::Options::operator=(Options&& rhs) = default;
Params::Options Params::Options::Clone() const {
  Options out;
  out.item_ids = item_ids;
  return out;
}

// static
bool Params::Options::Populate(
    const base::Value::Dict& dict, Options& out) {
  const base::Value* item_ids_value = dict.Find("itemIds");
  if (item_ids_value) {
    {
      if (!(*item_ids_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*item_ids_value).GetList(), out.item_ids)) {
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool Params::Options::Populate(
    const base::Value& value, Options& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Options> Params::Options::FromValue(const base::Value::Dict& value) {
  Options out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Options> Params::Options::FromValue(const base::Value& value) {
  Options out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Options::Populate(options_value.GetDict(), params.options)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<ClipboardItem>& clipboard_history) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(clipboard_history));

  return create_results;
}
}  // namespace GetClipboardHistory

namespace PasteClipboardItem {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& item_id_value = args[0];
    {
      auto* temp = item_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.item_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace PasteClipboardItem

namespace DeleteClipboardItem {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& item_id_value = args[0];
    {
      auto* temp = item_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.item_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace DeleteClipboardItem

//
// Events
//

namespace OnBoundsChanged {

const char kEventName[] = "virtualKeyboardPrivate.onBoundsChanged";

base::Value::List Create(const Bounds& bounds) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((bounds).ToValue());

  return create_results;
}

}  // namespace OnBoundsChanged

namespace OnKeyboardClosed {

const char kEventName[] = "virtualKeyboardPrivate.onKeyboardClosed";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnKeyboardClosed

namespace OnKeyboardConfigChanged {

const char kEventName[] = "virtualKeyboardPrivate.onKeyboardConfigChanged";

base::Value::List Create(const KeyboardConfig& config) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((config).ToValue());

  return create_results;
}

}  // namespace OnKeyboardConfigChanged

namespace OnClipboardHistoryChanged {

const char kEventName[] = "virtualKeyboardPrivate.onClipboardHistoryChanged";

base::Value::List Create(const std::vector<std::string>& item_ids) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(item_ids));

  return create_results;
}

}  // namespace OnClipboardHistoryChanged

namespace OnClipboardItemUpdated {

const char kEventName[] = "virtualKeyboardPrivate.onClipboardItemUpdated";

base::Value::List Create(const ClipboardItem& clipboard_history_item) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((clipboard_history_item).ToValue());

  return create_results;
}

}  // namespace OnClipboardItemUpdated

namespace OnColorProviderChanged {

const char kEventName[] = "virtualKeyboardPrivate.onColorProviderChanged";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnColorProviderChanged

}  // namespace virtual_keyboard_private
}  // namespace api
}  // namespace extensions

