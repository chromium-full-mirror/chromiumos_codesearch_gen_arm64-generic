// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_INPUT_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_INPUT_H_

#include "base/values.h"
#include "third_party/abseil-cpp/absl/types/optional.h"
#include "third_party/inspector_protocol/crdtp/chromium/protocol_traits.h"

#include "headless/public/devtools/internal/types_forward_declarations_input.h"
#include "headless/public/headless_export.h"

namespace headless {
namespace protocol {
using Binary = crdtp::Binary;
}

class ErrorReporter;

namespace input {

class HEADLESS_EXPORT TouchPoint {
 public:
  static std::unique_ptr<TouchPoint> Parse(const base::Value& value, ErrorReporter* errors);

  TouchPoint(const TouchPoint&) = delete;
  TouchPoint& operator=(const TouchPoint&) = delete;

  ~TouchPoint() { }


  // X coordinate of the event relative to the main frame's viewport in CSS pixels.
  double GetX() const { return x_; }
  void SetX(double value) { x_ = value; }

  // Y coordinate of the event relative to the main frame's viewport in CSS pixels. 0 refers to
  // the top of the viewport and Y increases as it proceeds towards the bottom of the viewport.
  double GetY() const { return y_; }
  void SetY(double value) { y_ = value; }

  // X radius of the touch area (default: 1.0).
  bool HasRadiusX() const { return !!radiusx_; }
  double GetRadiusX() const { DCHECK(HasRadiusX()); return radiusx_.value(); }
  void SetRadiusX(double value) { radiusx_ = value; }

  // Y radius of the touch area (default: 1.0).
  bool HasRadiusY() const { return !!radiusy_; }
  double GetRadiusY() const { DCHECK(HasRadiusY()); return radiusy_.value(); }
  void SetRadiusY(double value) { radiusy_ = value; }

  // Rotation angle (default: 0.0).
  bool HasRotationAngle() const { return !!rotation_angle_; }
  double GetRotationAngle() const { DCHECK(HasRotationAngle()); return rotation_angle_.value(); }
  void SetRotationAngle(double value) { rotation_angle_ = value; }

  // Force (default: 1.0).
  bool HasForce() const { return !!force_; }
  double GetForce() const { DCHECK(HasForce()); return force_.value(); }
  void SetForce(double value) { force_ = value; }

  // The normalized tangential pressure, which has a range of [-1,1] (default: 0).
  bool HasTangentialPressure() const { return !!tangential_pressure_; }
  double GetTangentialPressure() const { DCHECK(HasTangentialPressure()); return tangential_pressure_.value(); }
  void SetTangentialPressure(double value) { tangential_pressure_ = value; }

  // The plane angle between the Y-Z plane and the plane containing both the stylus axis and the Y axis, in degrees of the range [-90,90], a positive tiltX is to the right (default: 0)
  bool HasTiltX() const { return !!tiltx_; }
  double GetTiltX() const { DCHECK(HasTiltX()); return tiltx_.value(); }
  void SetTiltX(double value) { tiltx_ = value; }

  // The plane angle between the X-Z plane and the plane containing both the stylus axis and the X axis, in degrees of the range [-90,90], a positive tiltY is towards the user (default: 0).
  bool HasTiltY() const { return !!tilty_; }
  double GetTiltY() const { DCHECK(HasTiltY()); return tilty_.value(); }
  void SetTiltY(double value) { tilty_ = value; }

  // The clockwise rotation of a pen stylus around its own major axis, in degrees in the range [0,359] (default: 0).
  bool HasTwist() const { return !!twist_; }
  int GetTwist() const { DCHECK(HasTwist()); return twist_.value(); }
  void SetTwist(int value) { twist_ = value; }

  // Identifier used to track touch sources between events, must be unique within an event.
  bool HasId() const { return !!id_; }
  double GetId() const { DCHECK(HasId()); return id_.value(); }
  void SetId(double value) { id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<TouchPoint> Clone() const;

  template<int STATE>
  class TouchPointBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kXSet = 1 << 1,
    kYSet = 1 << 2,
      kAllRequiredFieldsSet = (kXSet | kYSet | 0)
    };

    TouchPointBuilder<STATE | kXSet>& SetX(double value) {
      static_assert(!(STATE & kXSet), "property x should not have already been set");
      result_->SetX(value);
      return CastState<kXSet>();
    }

    TouchPointBuilder<STATE | kYSet>& SetY(double value) {
      static_assert(!(STATE & kYSet), "property y should not have already been set");
      result_->SetY(value);
      return CastState<kYSet>();
    }

    TouchPointBuilder<STATE>& SetRadiusX(double value) {
      result_->SetRadiusX(value);
      return *this;
    }

    TouchPointBuilder<STATE>& SetRadiusY(double value) {
      result_->SetRadiusY(value);
      return *this;
    }

    TouchPointBuilder<STATE>& SetRotationAngle(double value) {
      result_->SetRotationAngle(value);
      return *this;
    }

    TouchPointBuilder<STATE>& SetForce(double value) {
      result_->SetForce(value);
      return *this;
    }

    TouchPointBuilder<STATE>& SetTangentialPressure(double value) {
      result_->SetTangentialPressure(value);
      return *this;
    }

    TouchPointBuilder<STATE>& SetTiltX(double value) {
      result_->SetTiltX(value);
      return *this;
    }

    TouchPointBuilder<STATE>& SetTiltY(double value) {
      result_->SetTiltY(value);
      return *this;
    }

    TouchPointBuilder<STATE>& SetTwist(int value) {
      result_->SetTwist(value);
      return *this;
    }

    TouchPointBuilder<STATE>& SetId(double value) {
      result_->SetId(value);
      return *this;
    }

    std::unique_ptr<TouchPoint> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class TouchPoint;
    TouchPointBuilder() : result_(new TouchPoint()) { }

    template<int STEP> TouchPointBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<TouchPointBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<TouchPoint> result_;
  };

  static TouchPointBuilder<0> Builder() {
    return TouchPointBuilder<0>();
  }

 private:
  TouchPoint() { }

  double x_;
  double y_;
  absl::optional<double> radiusx_;
  absl::optional<double> radiusy_;
  absl::optional<double> rotation_angle_;
  absl::optional<double> force_;
  absl::optional<double> tangential_pressure_;
  absl::optional<double> tiltx_;
  absl::optional<double> tilty_;
  absl::optional<int> twist_;
  absl::optional<double> id_;
};


class HEADLESS_EXPORT DragDataItem {
 public:
  static std::unique_ptr<DragDataItem> Parse(const base::Value& value, ErrorReporter* errors);

  DragDataItem(const DragDataItem&) = delete;
  DragDataItem& operator=(const DragDataItem&) = delete;

  ~DragDataItem() { }


  // Mime type of the dragged data.
  std::string GetMimeType() const { return mime_type_; }
  void SetMimeType(const std::string& value) { mime_type_ = value; }

  // Depending of the value of `mimeType`, it contains the dragged link,
  // text, HTML markup or any other data.
  std::string GetData() const { return data_; }
  void SetData(const std::string& value) { data_ = value; }

  // Title associated with a link. Only valid when `mimeType` == "text/uri-list".
  bool HasTitle() const { return !!title_; }
  std::string GetTitle() const { DCHECK(HasTitle()); return title_.value(); }
  void SetTitle(const std::string& value) { title_ = value; }

  // Stores the base URL for the contained markup. Only valid when `mimeType`
  // == "text/html".
  bool HasBaseURL() const { return !!baseurl_; }
  std::string GetBaseURL() const { DCHECK(HasBaseURL()); return baseurl_.value(); }
  void SetBaseURL(const std::string& value) { baseurl_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<DragDataItem> Clone() const;

  template<int STATE>
  class DragDataItemBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kMimeTypeSet = 1 << 1,
    kDataSet = 1 << 2,
      kAllRequiredFieldsSet = (kMimeTypeSet | kDataSet | 0)
    };

    DragDataItemBuilder<STATE | kMimeTypeSet>& SetMimeType(const std::string& value) {
      static_assert(!(STATE & kMimeTypeSet), "property mimeType should not have already been set");
      result_->SetMimeType(value);
      return CastState<kMimeTypeSet>();
    }

    DragDataItemBuilder<STATE | kDataSet>& SetData(const std::string& value) {
      static_assert(!(STATE & kDataSet), "property data should not have already been set");
      result_->SetData(value);
      return CastState<kDataSet>();
    }

    DragDataItemBuilder<STATE>& SetTitle(const std::string& value) {
      result_->SetTitle(value);
      return *this;
    }

    DragDataItemBuilder<STATE>& SetBaseURL(const std::string& value) {
      result_->SetBaseURL(value);
      return *this;
    }

    std::unique_ptr<DragDataItem> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DragDataItem;
    DragDataItemBuilder() : result_(new DragDataItem()) { }

    template<int STEP> DragDataItemBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DragDataItemBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DragDataItem> result_;
  };

  static DragDataItemBuilder<0> Builder() {
    return DragDataItemBuilder<0>();
  }

 private:
  DragDataItem() { }

  std::string mime_type_;
  std::string data_;
  absl::optional<std::string> title_;
  absl::optional<std::string> baseurl_;
};


class HEADLESS_EXPORT DragData {
 public:
  static std::unique_ptr<DragData> Parse(const base::Value& value, ErrorReporter* errors);

  DragData(const DragData&) = delete;
  DragData& operator=(const DragData&) = delete;

  ~DragData() { }


  const std::vector<std::unique_ptr<::headless::input::DragDataItem>>* GetItems() const { return &items_; }
  void SetItems(std::vector<std::unique_ptr<::headless::input::DragDataItem>> value) { items_ = std::move(value); }

  // List of filenames that should be included when dropping
  bool HasFiles() const { return !!files_; }
  const std::vector<std::string>* GetFiles() const { DCHECK(HasFiles()); return &files_.value(); }
  void SetFiles(std::vector<std::string> value) { files_ = std::move(value); }

  // Bit field representing allowed drag operations. Copy = 1, Link = 2, Move = 16
  int GetDragOperationsMask() const { return drag_operations_mask_; }
  void SetDragOperationsMask(int value) { drag_operations_mask_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<DragData> Clone() const;

  template<int STATE>
  class DragDataBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kItemsSet = 1 << 1,
    kDragOperationsMaskSet = 1 << 2,
      kAllRequiredFieldsSet = (kItemsSet | kDragOperationsMaskSet | 0)
    };

    DragDataBuilder<STATE | kItemsSet>& SetItems(std::vector<std::unique_ptr<::headless::input::DragDataItem>> value) {
      static_assert(!(STATE & kItemsSet), "property items should not have already been set");
      result_->SetItems(std::move(value));
      return CastState<kItemsSet>();
    }

    DragDataBuilder<STATE>& SetFiles(std::vector<std::string> value) {
      result_->SetFiles(std::move(value));
      return *this;
    }

    DragDataBuilder<STATE | kDragOperationsMaskSet>& SetDragOperationsMask(int value) {
      static_assert(!(STATE & kDragOperationsMaskSet), "property dragOperationsMask should not have already been set");
      result_->SetDragOperationsMask(value);
      return CastState<kDragOperationsMaskSet>();
    }

    std::unique_ptr<DragData> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DragData;
    DragDataBuilder() : result_(new DragData()) { }

    template<int STEP> DragDataBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DragDataBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DragData> result_;
  };

  static DragDataBuilder<0> Builder() {
    return DragDataBuilder<0>();
  }

 private:
  DragData() { }

  std::vector<std::unique_ptr<::headless::input::DragDataItem>> items_;
  absl::optional<std::vector<std::string>> files_;
  int drag_operations_mask_;
};


// Parameters for the DispatchDragEvent command.
class HEADLESS_EXPORT DispatchDragEventParams {
 public:
  static std::unique_ptr<DispatchDragEventParams> Parse(const base::Value& value, ErrorReporter* errors);

  DispatchDragEventParams(const DispatchDragEventParams&) = delete;
  DispatchDragEventParams& operator=(const DispatchDragEventParams&) = delete;

  ~DispatchDragEventParams() { }


  // Type of the drag event.
  ::headless::input::DispatchDragEventType GetType() const { return type_; }
  void SetType(::headless::input::DispatchDragEventType value) { type_ = value; }

  // X coordinate of the event relative to the main frame's viewport in CSS pixels.
  double GetX() const { return x_; }
  void SetX(double value) { x_ = value; }

  // Y coordinate of the event relative to the main frame's viewport in CSS pixels. 0 refers to
  // the top of the viewport and Y increases as it proceeds towards the bottom of the viewport.
  double GetY() const { return y_; }
  void SetY(double value) { y_ = value; }

  const ::headless::input::DragData* GetData() const { return data_.get(); }
  void SetData(std::unique_ptr<::headless::input::DragData> value) { data_ = std::move(value); }

  // Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8
  // (default: 0).
  bool HasModifiers() const { return !!modifiers_; }
  int GetModifiers() const { DCHECK(HasModifiers()); return modifiers_.value(); }
  void SetModifiers(int value) { modifiers_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<DispatchDragEventParams> Clone() const;

  template<int STATE>
  class DispatchDragEventParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kTypeSet = 1 << 1,
    kXSet = 1 << 2,
    kYSet = 1 << 3,
    kDataSet = 1 << 4,
      kAllRequiredFieldsSet = (kTypeSet | kXSet | kYSet | kDataSet | 0)
    };

    DispatchDragEventParamsBuilder<STATE | kTypeSet>& SetType(::headless::input::DispatchDragEventType value) {
      static_assert(!(STATE & kTypeSet), "property type should not have already been set");
      result_->SetType(value);
      return CastState<kTypeSet>();
    }

    DispatchDragEventParamsBuilder<STATE | kXSet>& SetX(double value) {
      static_assert(!(STATE & kXSet), "property x should not have already been set");
      result_->SetX(value);
      return CastState<kXSet>();
    }

    DispatchDragEventParamsBuilder<STATE | kYSet>& SetY(double value) {
      static_assert(!(STATE & kYSet), "property y should not have already been set");
      result_->SetY(value);
      return CastState<kYSet>();
    }

    DispatchDragEventParamsBuilder<STATE | kDataSet>& SetData(std::unique_ptr<::headless::input::DragData> value) {
      static_assert(!(STATE & kDataSet), "property data should not have already been set");
      result_->SetData(std::move(value));
      return CastState<kDataSet>();
    }

    DispatchDragEventParamsBuilder<STATE>& SetModifiers(int value) {
      result_->SetModifiers(value);
      return *this;
    }

    std::unique_ptr<DispatchDragEventParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DispatchDragEventParams;
    DispatchDragEventParamsBuilder() : result_(new DispatchDragEventParams()) { }

    template<int STEP> DispatchDragEventParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DispatchDragEventParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DispatchDragEventParams> result_;
  };

  static DispatchDragEventParamsBuilder<0> Builder() {
    return DispatchDragEventParamsBuilder<0>();
  }

 private:
  DispatchDragEventParams() { }

  ::headless::input::DispatchDragEventType type_;
  double x_;
  double y_;
  std::unique_ptr<::headless::input::DragData> data_;
  absl::optional<int> modifiers_;
};


// Result for the DispatchDragEvent command.
class HEADLESS_EXPORT DispatchDragEventResult {
 public:
  static std::unique_ptr<DispatchDragEventResult> Parse(const base::Value& value, ErrorReporter* errors);

  DispatchDragEventResult(const DispatchDragEventResult&) = delete;
  DispatchDragEventResult& operator=(const DispatchDragEventResult&) = delete;

  ~DispatchDragEventResult() { }


  base::Value Serialize() const;
  std::unique_ptr<DispatchDragEventResult> Clone() const;

  template<int STATE>
  class DispatchDragEventResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<DispatchDragEventResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DispatchDragEventResult;
    DispatchDragEventResultBuilder() : result_(new DispatchDragEventResult()) { }

    template<int STEP> DispatchDragEventResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DispatchDragEventResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DispatchDragEventResult> result_;
  };

  static DispatchDragEventResultBuilder<0> Builder() {
    return DispatchDragEventResultBuilder<0>();
  }

 private:
  DispatchDragEventResult() { }

};


// Parameters for the DispatchKeyEvent command.
class HEADLESS_EXPORT DispatchKeyEventParams {
 public:
  static std::unique_ptr<DispatchKeyEventParams> Parse(const base::Value& value, ErrorReporter* errors);

  DispatchKeyEventParams(const DispatchKeyEventParams&) = delete;
  DispatchKeyEventParams& operator=(const DispatchKeyEventParams&) = delete;

  ~DispatchKeyEventParams() { }


  // Type of the key event.
  ::headless::input::DispatchKeyEventType GetType() const { return type_; }
  void SetType(::headless::input::DispatchKeyEventType value) { type_ = value; }

  // Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8
  // (default: 0).
  bool HasModifiers() const { return !!modifiers_; }
  int GetModifiers() const { DCHECK(HasModifiers()); return modifiers_.value(); }
  void SetModifiers(int value) { modifiers_ = value; }

  // Time at which the event occurred.
  bool HasTimestamp() const { return !!timestamp_; }
  double GetTimestamp() const { DCHECK(HasTimestamp()); return timestamp_.value(); }
  void SetTimestamp(double value) { timestamp_ = value; }

  // Text as generated by processing a virtual key code with a keyboard layout. Not needed for
  // for `keyUp` and `rawKeyDown` events (default: "")
  bool HasText() const { return !!text_; }
  std::string GetText() const { DCHECK(HasText()); return text_.value(); }
  void SetText(const std::string& value) { text_ = value; }

  // Text that would have been generated by the keyboard if no modifiers were pressed (except for
  // shift). Useful for shortcut (accelerator) key handling (default: "").
  bool HasUnmodifiedText() const { return !!unmodified_text_; }
  std::string GetUnmodifiedText() const { DCHECK(HasUnmodifiedText()); return unmodified_text_.value(); }
  void SetUnmodifiedText(const std::string& value) { unmodified_text_ = value; }

  // Unique key identifier (e.g., 'U+0041') (default: "").
  bool HasKeyIdentifier() const { return !!key_identifier_; }
  std::string GetKeyIdentifier() const { DCHECK(HasKeyIdentifier()); return key_identifier_.value(); }
  void SetKeyIdentifier(const std::string& value) { key_identifier_ = value; }

  // Unique DOM defined string value for each physical key (e.g., 'KeyA') (default: "").
  bool HasCode() const { return !!code_; }
  std::string GetCode() const { DCHECK(HasCode()); return code_.value(); }
  void SetCode(const std::string& value) { code_ = value; }

  // Unique DOM defined string value describing the meaning of the key in the context of active
  // modifiers, keyboard layout, etc (e.g., 'AltGr') (default: "").
  bool HasKey() const { return !!key_; }
  std::string GetKey() const { DCHECK(HasKey()); return key_.value(); }
  void SetKey(const std::string& value) { key_ = value; }

  // Windows virtual key code (default: 0).
  bool HasWindowsVirtualKeyCode() const { return !!windows_virtual_key_code_; }
  int GetWindowsVirtualKeyCode() const { DCHECK(HasWindowsVirtualKeyCode()); return windows_virtual_key_code_.value(); }
  void SetWindowsVirtualKeyCode(int value) { windows_virtual_key_code_ = value; }

  // Native virtual key code (default: 0).
  bool HasNativeVirtualKeyCode() const { return !!native_virtual_key_code_; }
  int GetNativeVirtualKeyCode() const { DCHECK(HasNativeVirtualKeyCode()); return native_virtual_key_code_.value(); }
  void SetNativeVirtualKeyCode(int value) { native_virtual_key_code_ = value; }

  // Whether the event was generated from auto repeat (default: false).
  bool HasAutoRepeat() const { return !!auto_repeat_; }
  bool GetAutoRepeat() const { DCHECK(HasAutoRepeat()); return auto_repeat_.value(); }
  void SetAutoRepeat(bool value) { auto_repeat_ = value; }

  // Whether the event was generated from the keypad (default: false).
  bool HasIsKeypad() const { return !!is_keypad_; }
  bool GetIsKeypad() const { DCHECK(HasIsKeypad()); return is_keypad_.value(); }
  void SetIsKeypad(bool value) { is_keypad_ = value; }

  // Whether the event was a system key event (default: false).
  bool HasIsSystemKey() const { return !!is_system_key_; }
  bool GetIsSystemKey() const { DCHECK(HasIsSystemKey()); return is_system_key_.value(); }
  void SetIsSystemKey(bool value) { is_system_key_ = value; }

  // Whether the event was from the left or right side of the keyboard. 1=Left, 2=Right (default:
  // 0).
  bool HasLocation() const { return !!location_; }
  int GetLocation() const { DCHECK(HasLocation()); return location_.value(); }
  void SetLocation(int value) { location_ = value; }

  // Editing commands to send with the key event (e.g., 'selectAll') (default: []).
  // These are related to but not equal the command names used in `document.execCommand` and NSStandardKeyBindingResponding.
  // See https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/editing/commands/editor_command_names.h for valid command names.
  bool HasCommands() const { return !!commands_; }
  const std::vector<std::string>* GetCommands() const { DCHECK(HasCommands()); return &commands_.value(); }
  void SetCommands(std::vector<std::string> value) { commands_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<DispatchKeyEventParams> Clone() const;

  template<int STATE>
  class DispatchKeyEventParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kTypeSet = 1 << 1,
      kAllRequiredFieldsSet = (kTypeSet | 0)
    };

    DispatchKeyEventParamsBuilder<STATE | kTypeSet>& SetType(::headless::input::DispatchKeyEventType value) {
      static_assert(!(STATE & kTypeSet), "property type should not have already been set");
      result_->SetType(value);
      return CastState<kTypeSet>();
    }

    DispatchKeyEventParamsBuilder<STATE>& SetModifiers(int value) {
      result_->SetModifiers(value);
      return *this;
    }

    DispatchKeyEventParamsBuilder<STATE>& SetTimestamp(double value) {
      result_->SetTimestamp(value);
      return *this;
    }

    DispatchKeyEventParamsBuilder<STATE>& SetText(const std::string& value) {
      result_->SetText(value);
      return *this;
    }

    DispatchKeyEventParamsBuilder<STATE>& SetUnmodifiedText(const std::string& value) {
      result_->SetUnmodifiedText(value);
      return *this;
    }

    DispatchKeyEventParamsBuilder<STATE>& SetKeyIdentifier(const std::string& value) {
      result_->SetKeyIdentifier(value);
      return *this;
    }

    DispatchKeyEventParamsBuilder<STATE>& SetCode(const std::string& value) {
      result_->SetCode(value);
      return *this;
    }

    DispatchKeyEventParamsBuilder<STATE>& SetKey(const std::string& value) {
      result_->SetKey(value);
      return *this;
    }

    DispatchKeyEventParamsBuilder<STATE>& SetWindowsVirtualKeyCode(int value) {
      result_->SetWindowsVirtualKeyCode(value);
      return *this;
    }

    DispatchKeyEventParamsBuilder<STATE>& SetNativeVirtualKeyCode(int value) {
      result_->SetNativeVirtualKeyCode(value);
      return *this;
    }

    DispatchKeyEventParamsBuilder<STATE>& SetAutoRepeat(bool value) {
      result_->SetAutoRepeat(value);
      return *this;
    }

    DispatchKeyEventParamsBuilder<STATE>& SetIsKeypad(bool value) {
      result_->SetIsKeypad(value);
      return *this;
    }

    DispatchKeyEventParamsBuilder<STATE>& SetIsSystemKey(bool value) {
      result_->SetIsSystemKey(value);
      return *this;
    }

    DispatchKeyEventParamsBuilder<STATE>& SetLocation(int value) {
      result_->SetLocation(value);
      return *this;
    }

    DispatchKeyEventParamsBuilder<STATE>& SetCommands(std::vector<std::string> value) {
      result_->SetCommands(std::move(value));
      return *this;
    }

    std::unique_ptr<DispatchKeyEventParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DispatchKeyEventParams;
    DispatchKeyEventParamsBuilder() : result_(new DispatchKeyEventParams()) { }

    template<int STEP> DispatchKeyEventParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DispatchKeyEventParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DispatchKeyEventParams> result_;
  };

  static DispatchKeyEventParamsBuilder<0> Builder() {
    return DispatchKeyEventParamsBuilder<0>();
  }

 private:
  DispatchKeyEventParams() { }

  ::headless::input::DispatchKeyEventType type_;
  absl::optional<int> modifiers_;
  absl::optional<double> timestamp_;
  absl::optional<std::string> text_;
  absl::optional<std::string> unmodified_text_;
  absl::optional<std::string> key_identifier_;
  absl::optional<std::string> code_;
  absl::optional<std::string> key_;
  absl::optional<int> windows_virtual_key_code_;
  absl::optional<int> native_virtual_key_code_;
  absl::optional<bool> auto_repeat_;
  absl::optional<bool> is_keypad_;
  absl::optional<bool> is_system_key_;
  absl::optional<int> location_;
  absl::optional<std::vector<std::string>> commands_;
};


// Result for the DispatchKeyEvent command.
class HEADLESS_EXPORT DispatchKeyEventResult {
 public:
  static std::unique_ptr<DispatchKeyEventResult> Parse(const base::Value& value, ErrorReporter* errors);

  DispatchKeyEventResult(const DispatchKeyEventResult&) = delete;
  DispatchKeyEventResult& operator=(const DispatchKeyEventResult&) = delete;

  ~DispatchKeyEventResult() { }


  base::Value Serialize() const;
  std::unique_ptr<DispatchKeyEventResult> Clone() const;

  template<int STATE>
  class DispatchKeyEventResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<DispatchKeyEventResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DispatchKeyEventResult;
    DispatchKeyEventResultBuilder() : result_(new DispatchKeyEventResult()) { }

    template<int STEP> DispatchKeyEventResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DispatchKeyEventResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DispatchKeyEventResult> result_;
  };

  static DispatchKeyEventResultBuilder<0> Builder() {
    return DispatchKeyEventResultBuilder<0>();
  }

 private:
  DispatchKeyEventResult() { }

};


// Parameters for the InsertText command.
class HEADLESS_EXPORT InsertTextParams {
 public:
  static std::unique_ptr<InsertTextParams> Parse(const base::Value& value, ErrorReporter* errors);

  InsertTextParams(const InsertTextParams&) = delete;
  InsertTextParams& operator=(const InsertTextParams&) = delete;

  ~InsertTextParams() { }


  // The text to insert.
  std::string GetText() const { return text_; }
  void SetText(const std::string& value) { text_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<InsertTextParams> Clone() const;

  template<int STATE>
  class InsertTextParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kTextSet = 1 << 1,
      kAllRequiredFieldsSet = (kTextSet | 0)
    };

    InsertTextParamsBuilder<STATE | kTextSet>& SetText(const std::string& value) {
      static_assert(!(STATE & kTextSet), "property text should not have already been set");
      result_->SetText(value);
      return CastState<kTextSet>();
    }

    std::unique_ptr<InsertTextParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class InsertTextParams;
    InsertTextParamsBuilder() : result_(new InsertTextParams()) { }

    template<int STEP> InsertTextParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<InsertTextParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<InsertTextParams> result_;
  };

  static InsertTextParamsBuilder<0> Builder() {
    return InsertTextParamsBuilder<0>();
  }

 private:
  InsertTextParams() { }

  std::string text_;
};


// Result for the InsertText command.
class HEADLESS_EXPORT InsertTextResult {
 public:
  static std::unique_ptr<InsertTextResult> Parse(const base::Value& value, ErrorReporter* errors);

  InsertTextResult(const InsertTextResult&) = delete;
  InsertTextResult& operator=(const InsertTextResult&) = delete;

  ~InsertTextResult() { }


  base::Value Serialize() const;
  std::unique_ptr<InsertTextResult> Clone() const;

  template<int STATE>
  class InsertTextResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<InsertTextResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class InsertTextResult;
    InsertTextResultBuilder() : result_(new InsertTextResult()) { }

    template<int STEP> InsertTextResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<InsertTextResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<InsertTextResult> result_;
  };

  static InsertTextResultBuilder<0> Builder() {
    return InsertTextResultBuilder<0>();
  }

 private:
  InsertTextResult() { }

};


// Parameters for the ImeSetComposition command.
class HEADLESS_EXPORT ImeSetCompositionParams {
 public:
  static std::unique_ptr<ImeSetCompositionParams> Parse(const base::Value& value, ErrorReporter* errors);

  ImeSetCompositionParams(const ImeSetCompositionParams&) = delete;
  ImeSetCompositionParams& operator=(const ImeSetCompositionParams&) = delete;

  ~ImeSetCompositionParams() { }


  // The text to insert
  std::string GetText() const { return text_; }
  void SetText(const std::string& value) { text_ = value; }

  // selection start
  int GetSelectionStart() const { return selection_start_; }
  void SetSelectionStart(int value) { selection_start_ = value; }

  // selection end
  int GetSelectionEnd() const { return selection_end_; }
  void SetSelectionEnd(int value) { selection_end_ = value; }

  // replacement start
  bool HasReplacementStart() const { return !!replacement_start_; }
  int GetReplacementStart() const { DCHECK(HasReplacementStart()); return replacement_start_.value(); }
  void SetReplacementStart(int value) { replacement_start_ = value; }

  // replacement end
  bool HasReplacementEnd() const { return !!replacement_end_; }
  int GetReplacementEnd() const { DCHECK(HasReplacementEnd()); return replacement_end_.value(); }
  void SetReplacementEnd(int value) { replacement_end_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<ImeSetCompositionParams> Clone() const;

  template<int STATE>
  class ImeSetCompositionParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kTextSet = 1 << 1,
    kSelectionStartSet = 1 << 2,
    kSelectionEndSet = 1 << 3,
      kAllRequiredFieldsSet = (kTextSet | kSelectionStartSet | kSelectionEndSet | 0)
    };

    ImeSetCompositionParamsBuilder<STATE | kTextSet>& SetText(const std::string& value) {
      static_assert(!(STATE & kTextSet), "property text should not have already been set");
      result_->SetText(value);
      return CastState<kTextSet>();
    }

    ImeSetCompositionParamsBuilder<STATE | kSelectionStartSet>& SetSelectionStart(int value) {
      static_assert(!(STATE & kSelectionStartSet), "property selectionStart should not have already been set");
      result_->SetSelectionStart(value);
      return CastState<kSelectionStartSet>();
    }

    ImeSetCompositionParamsBuilder<STATE | kSelectionEndSet>& SetSelectionEnd(int value) {
      static_assert(!(STATE & kSelectionEndSet), "property selectionEnd should not have already been set");
      result_->SetSelectionEnd(value);
      return CastState<kSelectionEndSet>();
    }

    ImeSetCompositionParamsBuilder<STATE>& SetReplacementStart(int value) {
      result_->SetReplacementStart(value);
      return *this;
    }

    ImeSetCompositionParamsBuilder<STATE>& SetReplacementEnd(int value) {
      result_->SetReplacementEnd(value);
      return *this;
    }

    std::unique_ptr<ImeSetCompositionParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ImeSetCompositionParams;
    ImeSetCompositionParamsBuilder() : result_(new ImeSetCompositionParams()) { }

    template<int STEP> ImeSetCompositionParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ImeSetCompositionParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ImeSetCompositionParams> result_;
  };

  static ImeSetCompositionParamsBuilder<0> Builder() {
    return ImeSetCompositionParamsBuilder<0>();
  }

 private:
  ImeSetCompositionParams() { }

  std::string text_;
  int selection_start_;
  int selection_end_;
  absl::optional<int> replacement_start_;
  absl::optional<int> replacement_end_;
};


// Result for the ImeSetComposition command.
class HEADLESS_EXPORT ImeSetCompositionResult {
 public:
  static std::unique_ptr<ImeSetCompositionResult> Parse(const base::Value& value, ErrorReporter* errors);

  ImeSetCompositionResult(const ImeSetCompositionResult&) = delete;
  ImeSetCompositionResult& operator=(const ImeSetCompositionResult&) = delete;

  ~ImeSetCompositionResult() { }


  base::Value Serialize() const;
  std::unique_ptr<ImeSetCompositionResult> Clone() const;

  template<int STATE>
  class ImeSetCompositionResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<ImeSetCompositionResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class ImeSetCompositionResult;
    ImeSetCompositionResultBuilder() : result_(new ImeSetCompositionResult()) { }

    template<int STEP> ImeSetCompositionResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<ImeSetCompositionResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<ImeSetCompositionResult> result_;
  };

  static ImeSetCompositionResultBuilder<0> Builder() {
    return ImeSetCompositionResultBuilder<0>();
  }

 private:
  ImeSetCompositionResult() { }

};


// Parameters for the DispatchMouseEvent command.
class HEADLESS_EXPORT DispatchMouseEventParams {
 public:
  static std::unique_ptr<DispatchMouseEventParams> Parse(const base::Value& value, ErrorReporter* errors);

  DispatchMouseEventParams(const DispatchMouseEventParams&) = delete;
  DispatchMouseEventParams& operator=(const DispatchMouseEventParams&) = delete;

  ~DispatchMouseEventParams() { }


  // Type of the mouse event.
  ::headless::input::DispatchMouseEventType GetType() const { return type_; }
  void SetType(::headless::input::DispatchMouseEventType value) { type_ = value; }

  // X coordinate of the event relative to the main frame's viewport in CSS pixels.
  double GetX() const { return x_; }
  void SetX(double value) { x_ = value; }

  // Y coordinate of the event relative to the main frame's viewport in CSS pixels. 0 refers to
  // the top of the viewport and Y increases as it proceeds towards the bottom of the viewport.
  double GetY() const { return y_; }
  void SetY(double value) { y_ = value; }

  // Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8
  // (default: 0).
  bool HasModifiers() const { return !!modifiers_; }
  int GetModifiers() const { DCHECK(HasModifiers()); return modifiers_.value(); }
  void SetModifiers(int value) { modifiers_ = value; }

  // Time at which the event occurred.
  bool HasTimestamp() const { return !!timestamp_; }
  double GetTimestamp() const { DCHECK(HasTimestamp()); return timestamp_.value(); }
  void SetTimestamp(double value) { timestamp_ = value; }

  // Mouse button (default: "none").
  bool HasButton() const { return !!button_; }
  ::headless::input::MouseButton GetButton() const { DCHECK(HasButton()); return button_.value(); }
  void SetButton(::headless::input::MouseButton value) { button_ = value; }

  // A number indicating which buttons are pressed on the mouse when a mouse event is triggered.
  // Left=1, Right=2, Middle=4, Back=8, Forward=16, None=0.
  bool HasButtons() const { return !!buttons_; }
  int GetButtons() const { DCHECK(HasButtons()); return buttons_.value(); }
  void SetButtons(int value) { buttons_ = value; }

  // Number of times the mouse button was clicked (default: 0).
  bool HasClickCount() const { return !!click_count_; }
  int GetClickCount() const { DCHECK(HasClickCount()); return click_count_.value(); }
  void SetClickCount(int value) { click_count_ = value; }

  // The normalized pressure, which has a range of [0,1] (default: 0).
  bool HasForce() const { return !!force_; }
  double GetForce() const { DCHECK(HasForce()); return force_.value(); }
  void SetForce(double value) { force_ = value; }

  // The normalized tangential pressure, which has a range of [-1,1] (default: 0).
  bool HasTangentialPressure() const { return !!tangential_pressure_; }
  double GetTangentialPressure() const { DCHECK(HasTangentialPressure()); return tangential_pressure_.value(); }
  void SetTangentialPressure(double value) { tangential_pressure_ = value; }

  // The plane angle between the Y-Z plane and the plane containing both the stylus axis and the Y axis, in degrees of the range [-90,90], a positive tiltX is to the right (default: 0).
  bool HasTiltX() const { return !!tiltx_; }
  double GetTiltX() const { DCHECK(HasTiltX()); return tiltx_.value(); }
  void SetTiltX(double value) { tiltx_ = value; }

  // The plane angle between the X-Z plane and the plane containing both the stylus axis and the X axis, in degrees of the range [-90,90], a positive tiltY is towards the user (default: 0).
  bool HasTiltY() const { return !!tilty_; }
  double GetTiltY() const { DCHECK(HasTiltY()); return tilty_.value(); }
  void SetTiltY(double value) { tilty_ = value; }

  // The clockwise rotation of a pen stylus around its own major axis, in degrees in the range [0,359] (default: 0).
  bool HasTwist() const { return !!twist_; }
  int GetTwist() const { DCHECK(HasTwist()); return twist_.value(); }
  void SetTwist(int value) { twist_ = value; }

  // X delta in CSS pixels for mouse wheel event (default: 0).
  bool HasDeltaX() const { return !!deltax_; }
  double GetDeltaX() const { DCHECK(HasDeltaX()); return deltax_.value(); }
  void SetDeltaX(double value) { deltax_ = value; }

  // Y delta in CSS pixels for mouse wheel event (default: 0).
  bool HasDeltaY() const { return !!deltay_; }
  double GetDeltaY() const { DCHECK(HasDeltaY()); return deltay_.value(); }
  void SetDeltaY(double value) { deltay_ = value; }

  // Pointer type (default: "mouse").
  bool HasPointerType() const { return !!pointer_type_; }
  ::headless::input::DispatchMouseEventPointerType GetPointerType() const { DCHECK(HasPointerType()); return pointer_type_.value(); }
  void SetPointerType(::headless::input::DispatchMouseEventPointerType value) { pointer_type_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<DispatchMouseEventParams> Clone() const;

  template<int STATE>
  class DispatchMouseEventParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kTypeSet = 1 << 1,
    kXSet = 1 << 2,
    kYSet = 1 << 3,
      kAllRequiredFieldsSet = (kTypeSet | kXSet | kYSet | 0)
    };

    DispatchMouseEventParamsBuilder<STATE | kTypeSet>& SetType(::headless::input::DispatchMouseEventType value) {
      static_assert(!(STATE & kTypeSet), "property type should not have already been set");
      result_->SetType(value);
      return CastState<kTypeSet>();
    }

    DispatchMouseEventParamsBuilder<STATE | kXSet>& SetX(double value) {
      static_assert(!(STATE & kXSet), "property x should not have already been set");
      result_->SetX(value);
      return CastState<kXSet>();
    }

    DispatchMouseEventParamsBuilder<STATE | kYSet>& SetY(double value) {
      static_assert(!(STATE & kYSet), "property y should not have already been set");
      result_->SetY(value);
      return CastState<kYSet>();
    }

    DispatchMouseEventParamsBuilder<STATE>& SetModifiers(int value) {
      result_->SetModifiers(value);
      return *this;
    }

    DispatchMouseEventParamsBuilder<STATE>& SetTimestamp(double value) {
      result_->SetTimestamp(value);
      return *this;
    }

    DispatchMouseEventParamsBuilder<STATE>& SetButton(::headless::input::MouseButton value) {
      result_->SetButton(value);
      return *this;
    }

    DispatchMouseEventParamsBuilder<STATE>& SetButtons(int value) {
      result_->SetButtons(value);
      return *this;
    }

    DispatchMouseEventParamsBuilder<STATE>& SetClickCount(int value) {
      result_->SetClickCount(value);
      return *this;
    }

    DispatchMouseEventParamsBuilder<STATE>& SetForce(double value) {
      result_->SetForce(value);
      return *this;
    }

    DispatchMouseEventParamsBuilder<STATE>& SetTangentialPressure(double value) {
      result_->SetTangentialPressure(value);
      return *this;
    }

    DispatchMouseEventParamsBuilder<STATE>& SetTiltX(double value) {
      result_->SetTiltX(value);
      return *this;
    }

    DispatchMouseEventParamsBuilder<STATE>& SetTiltY(double value) {
      result_->SetTiltY(value);
      return *this;
    }

    DispatchMouseEventParamsBuilder<STATE>& SetTwist(int value) {
      result_->SetTwist(value);
      return *this;
    }

    DispatchMouseEventParamsBuilder<STATE>& SetDeltaX(double value) {
      result_->SetDeltaX(value);
      return *this;
    }

    DispatchMouseEventParamsBuilder<STATE>& SetDeltaY(double value) {
      result_->SetDeltaY(value);
      return *this;
    }

    DispatchMouseEventParamsBuilder<STATE>& SetPointerType(::headless::input::DispatchMouseEventPointerType value) {
      result_->SetPointerType(value);
      return *this;
    }

    std::unique_ptr<DispatchMouseEventParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DispatchMouseEventParams;
    DispatchMouseEventParamsBuilder() : result_(new DispatchMouseEventParams()) { }

    template<int STEP> DispatchMouseEventParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DispatchMouseEventParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DispatchMouseEventParams> result_;
  };

  static DispatchMouseEventParamsBuilder<0> Builder() {
    return DispatchMouseEventParamsBuilder<0>();
  }

 private:
  DispatchMouseEventParams() { }

  ::headless::input::DispatchMouseEventType type_;
  double x_;
  double y_;
  absl::optional<int> modifiers_;
  absl::optional<double> timestamp_;
  absl::optional<::headless::input::MouseButton> button_;
  absl::optional<int> buttons_;
  absl::optional<int> click_count_;
  absl::optional<double> force_;
  absl::optional<double> tangential_pressure_;
  absl::optional<double> tiltx_;
  absl::optional<double> tilty_;
  absl::optional<int> twist_;
  absl::optional<double> deltax_;
  absl::optional<double> deltay_;
  absl::optional<::headless::input::DispatchMouseEventPointerType> pointer_type_;
};


// Result for the DispatchMouseEvent command.
class HEADLESS_EXPORT DispatchMouseEventResult {
 public:
  static std::unique_ptr<DispatchMouseEventResult> Parse(const base::Value& value, ErrorReporter* errors);

  DispatchMouseEventResult(const DispatchMouseEventResult&) = delete;
  DispatchMouseEventResult& operator=(const DispatchMouseEventResult&) = delete;

  ~DispatchMouseEventResult() { }


  base::Value Serialize() const;
  std::unique_ptr<DispatchMouseEventResult> Clone() const;

  template<int STATE>
  class DispatchMouseEventResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<DispatchMouseEventResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DispatchMouseEventResult;
    DispatchMouseEventResultBuilder() : result_(new DispatchMouseEventResult()) { }

    template<int STEP> DispatchMouseEventResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DispatchMouseEventResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DispatchMouseEventResult> result_;
  };

  static DispatchMouseEventResultBuilder<0> Builder() {
    return DispatchMouseEventResultBuilder<0>();
  }

 private:
  DispatchMouseEventResult() { }

};


// Parameters for the DispatchTouchEvent command.
class HEADLESS_EXPORT DispatchTouchEventParams {
 public:
  static std::unique_ptr<DispatchTouchEventParams> Parse(const base::Value& value, ErrorReporter* errors);

  DispatchTouchEventParams(const DispatchTouchEventParams&) = delete;
  DispatchTouchEventParams& operator=(const DispatchTouchEventParams&) = delete;

  ~DispatchTouchEventParams() { }


  // Type of the touch event. TouchEnd and TouchCancel must not contain any touch points, while
  // TouchStart and TouchMove must contains at least one.
  ::headless::input::DispatchTouchEventType GetType() const { return type_; }
  void SetType(::headless::input::DispatchTouchEventType value) { type_ = value; }

  // Active touch points on the touch device. One event per any changed point (compared to
  // previous touch event in a sequence) is generated, emulating pressing/moving/releasing points
  // one by one.
  const std::vector<std::unique_ptr<::headless::input::TouchPoint>>* GetTouchPoints() const { return &touch_points_; }
  void SetTouchPoints(std::vector<std::unique_ptr<::headless::input::TouchPoint>> value) { touch_points_ = std::move(value); }

  // Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8
  // (default: 0).
  bool HasModifiers() const { return !!modifiers_; }
  int GetModifiers() const { DCHECK(HasModifiers()); return modifiers_.value(); }
  void SetModifiers(int value) { modifiers_ = value; }

  // Time at which the event occurred.
  bool HasTimestamp() const { return !!timestamp_; }
  double GetTimestamp() const { DCHECK(HasTimestamp()); return timestamp_.value(); }
  void SetTimestamp(double value) { timestamp_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<DispatchTouchEventParams> Clone() const;

  template<int STATE>
  class DispatchTouchEventParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kTypeSet = 1 << 1,
    kTouchPointsSet = 1 << 2,
      kAllRequiredFieldsSet = (kTypeSet | kTouchPointsSet | 0)
    };

    DispatchTouchEventParamsBuilder<STATE | kTypeSet>& SetType(::headless::input::DispatchTouchEventType value) {
      static_assert(!(STATE & kTypeSet), "property type should not have already been set");
      result_->SetType(value);
      return CastState<kTypeSet>();
    }

    DispatchTouchEventParamsBuilder<STATE | kTouchPointsSet>& SetTouchPoints(std::vector<std::unique_ptr<::headless::input::TouchPoint>> value) {
      static_assert(!(STATE & kTouchPointsSet), "property touchPoints should not have already been set");
      result_->SetTouchPoints(std::move(value));
      return CastState<kTouchPointsSet>();
    }

    DispatchTouchEventParamsBuilder<STATE>& SetModifiers(int value) {
      result_->SetModifiers(value);
      return *this;
    }

    DispatchTouchEventParamsBuilder<STATE>& SetTimestamp(double value) {
      result_->SetTimestamp(value);
      return *this;
    }

    std::unique_ptr<DispatchTouchEventParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DispatchTouchEventParams;
    DispatchTouchEventParamsBuilder() : result_(new DispatchTouchEventParams()) { }

    template<int STEP> DispatchTouchEventParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DispatchTouchEventParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DispatchTouchEventParams> result_;
  };

  static DispatchTouchEventParamsBuilder<0> Builder() {
    return DispatchTouchEventParamsBuilder<0>();
  }

 private:
  DispatchTouchEventParams() { }

  ::headless::input::DispatchTouchEventType type_;
  std::vector<std::unique_ptr<::headless::input::TouchPoint>> touch_points_;
  absl::optional<int> modifiers_;
  absl::optional<double> timestamp_;
};


// Result for the DispatchTouchEvent command.
class HEADLESS_EXPORT DispatchTouchEventResult {
 public:
  static std::unique_ptr<DispatchTouchEventResult> Parse(const base::Value& value, ErrorReporter* errors);

  DispatchTouchEventResult(const DispatchTouchEventResult&) = delete;
  DispatchTouchEventResult& operator=(const DispatchTouchEventResult&) = delete;

  ~DispatchTouchEventResult() { }


  base::Value Serialize() const;
  std::unique_ptr<DispatchTouchEventResult> Clone() const;

  template<int STATE>
  class DispatchTouchEventResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<DispatchTouchEventResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DispatchTouchEventResult;
    DispatchTouchEventResultBuilder() : result_(new DispatchTouchEventResult()) { }

    template<int STEP> DispatchTouchEventResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DispatchTouchEventResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DispatchTouchEventResult> result_;
  };

  static DispatchTouchEventResultBuilder<0> Builder() {
    return DispatchTouchEventResultBuilder<0>();
  }

 private:
  DispatchTouchEventResult() { }

};


// Parameters for the CancelDragging command.
class HEADLESS_EXPORT CancelDraggingParams {
 public:
  static std::unique_ptr<CancelDraggingParams> Parse(const base::Value& value, ErrorReporter* errors);

  CancelDraggingParams(const CancelDraggingParams&) = delete;
  CancelDraggingParams& operator=(const CancelDraggingParams&) = delete;

  ~CancelDraggingParams() { }


  base::Value Serialize() const;
  std::unique_ptr<CancelDraggingParams> Clone() const;

  template<int STATE>
  class CancelDraggingParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<CancelDraggingParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class CancelDraggingParams;
    CancelDraggingParamsBuilder() : result_(new CancelDraggingParams()) { }

    template<int STEP> CancelDraggingParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<CancelDraggingParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<CancelDraggingParams> result_;
  };

  static CancelDraggingParamsBuilder<0> Builder() {
    return CancelDraggingParamsBuilder<0>();
  }

 private:
  CancelDraggingParams() { }

};


// Result for the CancelDragging command.
class HEADLESS_EXPORT CancelDraggingResult {
 public:
  static std::unique_ptr<CancelDraggingResult> Parse(const base::Value& value, ErrorReporter* errors);

  CancelDraggingResult(const CancelDraggingResult&) = delete;
  CancelDraggingResult& operator=(const CancelDraggingResult&) = delete;

  ~CancelDraggingResult() { }


  base::Value Serialize() const;
  std::unique_ptr<CancelDraggingResult> Clone() const;

  template<int STATE>
  class CancelDraggingResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<CancelDraggingResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class CancelDraggingResult;
    CancelDraggingResultBuilder() : result_(new CancelDraggingResult()) { }

    template<int STEP> CancelDraggingResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<CancelDraggingResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<CancelDraggingResult> result_;
  };

  static CancelDraggingResultBuilder<0> Builder() {
    return CancelDraggingResultBuilder<0>();
  }

 private:
  CancelDraggingResult() { }

};


// Parameters for the EmulateTouchFromMouseEvent command.
class HEADLESS_EXPORT EmulateTouchFromMouseEventParams {
 public:
  static std::unique_ptr<EmulateTouchFromMouseEventParams> Parse(const base::Value& value, ErrorReporter* errors);

  EmulateTouchFromMouseEventParams(const EmulateTouchFromMouseEventParams&) = delete;
  EmulateTouchFromMouseEventParams& operator=(const EmulateTouchFromMouseEventParams&) = delete;

  ~EmulateTouchFromMouseEventParams() { }


  // Type of the mouse event.
  ::headless::input::EmulateTouchFromMouseEventType GetType() const { return type_; }
  void SetType(::headless::input::EmulateTouchFromMouseEventType value) { type_ = value; }

  // X coordinate of the mouse pointer in DIP.
  int GetX() const { return x_; }
  void SetX(int value) { x_ = value; }

  // Y coordinate of the mouse pointer in DIP.
  int GetY() const { return y_; }
  void SetY(int value) { y_ = value; }

  // Mouse button. Only "none", "left", "right" are supported.
  ::headless::input::MouseButton GetButton() const { return button_; }
  void SetButton(::headless::input::MouseButton value) { button_ = value; }

  // Time at which the event occurred (default: current time).
  bool HasTimestamp() const { return !!timestamp_; }
  double GetTimestamp() const { DCHECK(HasTimestamp()); return timestamp_.value(); }
  void SetTimestamp(double value) { timestamp_ = value; }

  // X delta in DIP for mouse wheel event (default: 0).
  bool HasDeltaX() const { return !!deltax_; }
  double GetDeltaX() const { DCHECK(HasDeltaX()); return deltax_.value(); }
  void SetDeltaX(double value) { deltax_ = value; }

  // Y delta in DIP for mouse wheel event (default: 0).
  bool HasDeltaY() const { return !!deltay_; }
  double GetDeltaY() const { DCHECK(HasDeltaY()); return deltay_.value(); }
  void SetDeltaY(double value) { deltay_ = value; }

  // Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8
  // (default: 0).
  bool HasModifiers() const { return !!modifiers_; }
  int GetModifiers() const { DCHECK(HasModifiers()); return modifiers_.value(); }
  void SetModifiers(int value) { modifiers_ = value; }

  // Number of times the mouse button was clicked (default: 0).
  bool HasClickCount() const { return !!click_count_; }
  int GetClickCount() const { DCHECK(HasClickCount()); return click_count_.value(); }
  void SetClickCount(int value) { click_count_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<EmulateTouchFromMouseEventParams> Clone() const;

  template<int STATE>
  class EmulateTouchFromMouseEventParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kTypeSet = 1 << 1,
    kXSet = 1 << 2,
    kYSet = 1 << 3,
    kButtonSet = 1 << 4,
      kAllRequiredFieldsSet = (kTypeSet | kXSet | kYSet | kButtonSet | 0)
    };

    EmulateTouchFromMouseEventParamsBuilder<STATE | kTypeSet>& SetType(::headless::input::EmulateTouchFromMouseEventType value) {
      static_assert(!(STATE & kTypeSet), "property type should not have already been set");
      result_->SetType(value);
      return CastState<kTypeSet>();
    }

    EmulateTouchFromMouseEventParamsBuilder<STATE | kXSet>& SetX(int value) {
      static_assert(!(STATE & kXSet), "property x should not have already been set");
      result_->SetX(value);
      return CastState<kXSet>();
    }

    EmulateTouchFromMouseEventParamsBuilder<STATE | kYSet>& SetY(int value) {
      static_assert(!(STATE & kYSet), "property y should not have already been set");
      result_->SetY(value);
      return CastState<kYSet>();
    }

    EmulateTouchFromMouseEventParamsBuilder<STATE | kButtonSet>& SetButton(::headless::input::MouseButton value) {
      static_assert(!(STATE & kButtonSet), "property button should not have already been set");
      result_->SetButton(value);
      return CastState<kButtonSet>();
    }

    EmulateTouchFromMouseEventParamsBuilder<STATE>& SetTimestamp(double value) {
      result_->SetTimestamp(value);
      return *this;
    }

    EmulateTouchFromMouseEventParamsBuilder<STATE>& SetDeltaX(double value) {
      result_->SetDeltaX(value);
      return *this;
    }

    EmulateTouchFromMouseEventParamsBuilder<STATE>& SetDeltaY(double value) {
      result_->SetDeltaY(value);
      return *this;
    }

    EmulateTouchFromMouseEventParamsBuilder<STATE>& SetModifiers(int value) {
      result_->SetModifiers(value);
      return *this;
    }

    EmulateTouchFromMouseEventParamsBuilder<STATE>& SetClickCount(int value) {
      result_->SetClickCount(value);
      return *this;
    }

    std::unique_ptr<EmulateTouchFromMouseEventParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class EmulateTouchFromMouseEventParams;
    EmulateTouchFromMouseEventParamsBuilder() : result_(new EmulateTouchFromMouseEventParams()) { }

    template<int STEP> EmulateTouchFromMouseEventParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<EmulateTouchFromMouseEventParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<EmulateTouchFromMouseEventParams> result_;
  };

  static EmulateTouchFromMouseEventParamsBuilder<0> Builder() {
    return EmulateTouchFromMouseEventParamsBuilder<0>();
  }

 private:
  EmulateTouchFromMouseEventParams() { }

  ::headless::input::EmulateTouchFromMouseEventType type_;
  int x_;
  int y_;
  ::headless::input::MouseButton button_;
  absl::optional<double> timestamp_;
  absl::optional<double> deltax_;
  absl::optional<double> deltay_;
  absl::optional<int> modifiers_;
  absl::optional<int> click_count_;
};


// Result for the EmulateTouchFromMouseEvent command.
class HEADLESS_EXPORT EmulateTouchFromMouseEventResult {
 public:
  static std::unique_ptr<EmulateTouchFromMouseEventResult> Parse(const base::Value& value, ErrorReporter* errors);

  EmulateTouchFromMouseEventResult(const EmulateTouchFromMouseEventResult&) = delete;
  EmulateTouchFromMouseEventResult& operator=(const EmulateTouchFromMouseEventResult&) = delete;

  ~EmulateTouchFromMouseEventResult() { }


  base::Value Serialize() const;
  std::unique_ptr<EmulateTouchFromMouseEventResult> Clone() const;

  template<int STATE>
  class EmulateTouchFromMouseEventResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<EmulateTouchFromMouseEventResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class EmulateTouchFromMouseEventResult;
    EmulateTouchFromMouseEventResultBuilder() : result_(new EmulateTouchFromMouseEventResult()) { }

    template<int STEP> EmulateTouchFromMouseEventResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<EmulateTouchFromMouseEventResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<EmulateTouchFromMouseEventResult> result_;
  };

  static EmulateTouchFromMouseEventResultBuilder<0> Builder() {
    return EmulateTouchFromMouseEventResultBuilder<0>();
  }

 private:
  EmulateTouchFromMouseEventResult() { }

};


// Parameters for the SetIgnoreInputEvents command.
class HEADLESS_EXPORT SetIgnoreInputEventsParams {
 public:
  static std::unique_ptr<SetIgnoreInputEventsParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetIgnoreInputEventsParams(const SetIgnoreInputEventsParams&) = delete;
  SetIgnoreInputEventsParams& operator=(const SetIgnoreInputEventsParams&) = delete;

  ~SetIgnoreInputEventsParams() { }


  // Ignores input events processing when set to true.
  bool GetIgnore() const { return ignore_; }
  void SetIgnore(bool value) { ignore_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetIgnoreInputEventsParams> Clone() const;

  template<int STATE>
  class SetIgnoreInputEventsParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kIgnoreSet = 1 << 1,
      kAllRequiredFieldsSet = (kIgnoreSet | 0)
    };

    SetIgnoreInputEventsParamsBuilder<STATE | kIgnoreSet>& SetIgnore(bool value) {
      static_assert(!(STATE & kIgnoreSet), "property ignore should not have already been set");
      result_->SetIgnore(value);
      return CastState<kIgnoreSet>();
    }

    std::unique_ptr<SetIgnoreInputEventsParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetIgnoreInputEventsParams;
    SetIgnoreInputEventsParamsBuilder() : result_(new SetIgnoreInputEventsParams()) { }

    template<int STEP> SetIgnoreInputEventsParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetIgnoreInputEventsParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetIgnoreInputEventsParams> result_;
  };

  static SetIgnoreInputEventsParamsBuilder<0> Builder() {
    return SetIgnoreInputEventsParamsBuilder<0>();
  }

 private:
  SetIgnoreInputEventsParams() { }

  bool ignore_;
};


// Result for the SetIgnoreInputEvents command.
class HEADLESS_EXPORT SetIgnoreInputEventsResult {
 public:
  static std::unique_ptr<SetIgnoreInputEventsResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetIgnoreInputEventsResult(const SetIgnoreInputEventsResult&) = delete;
  SetIgnoreInputEventsResult& operator=(const SetIgnoreInputEventsResult&) = delete;

  ~SetIgnoreInputEventsResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetIgnoreInputEventsResult> Clone() const;

  template<int STATE>
  class SetIgnoreInputEventsResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetIgnoreInputEventsResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetIgnoreInputEventsResult;
    SetIgnoreInputEventsResultBuilder() : result_(new SetIgnoreInputEventsResult()) { }

    template<int STEP> SetIgnoreInputEventsResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetIgnoreInputEventsResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetIgnoreInputEventsResult> result_;
  };

  static SetIgnoreInputEventsResultBuilder<0> Builder() {
    return SetIgnoreInputEventsResultBuilder<0>();
  }

 private:
  SetIgnoreInputEventsResult() { }

};


// Parameters for the SetInterceptDrags command.
class HEADLESS_EXPORT SetInterceptDragsParams {
 public:
  static std::unique_ptr<SetInterceptDragsParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetInterceptDragsParams(const SetInterceptDragsParams&) = delete;
  SetInterceptDragsParams& operator=(const SetInterceptDragsParams&) = delete;

  ~SetInterceptDragsParams() { }


  bool GetEnabled() const { return enabled_; }
  void SetEnabled(bool value) { enabled_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetInterceptDragsParams> Clone() const;

  template<int STATE>
  class SetInterceptDragsParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kEnabledSet = 1 << 1,
      kAllRequiredFieldsSet = (kEnabledSet | 0)
    };

    SetInterceptDragsParamsBuilder<STATE | kEnabledSet>& SetEnabled(bool value) {
      static_assert(!(STATE & kEnabledSet), "property enabled should not have already been set");
      result_->SetEnabled(value);
      return CastState<kEnabledSet>();
    }

    std::unique_ptr<SetInterceptDragsParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetInterceptDragsParams;
    SetInterceptDragsParamsBuilder() : result_(new SetInterceptDragsParams()) { }

    template<int STEP> SetInterceptDragsParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetInterceptDragsParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetInterceptDragsParams> result_;
  };

  static SetInterceptDragsParamsBuilder<0> Builder() {
    return SetInterceptDragsParamsBuilder<0>();
  }

 private:
  SetInterceptDragsParams() { }

  bool enabled_;
};


// Result for the SetInterceptDrags command.
class HEADLESS_EXPORT SetInterceptDragsResult {
 public:
  static std::unique_ptr<SetInterceptDragsResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetInterceptDragsResult(const SetInterceptDragsResult&) = delete;
  SetInterceptDragsResult& operator=(const SetInterceptDragsResult&) = delete;

  ~SetInterceptDragsResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetInterceptDragsResult> Clone() const;

  template<int STATE>
  class SetInterceptDragsResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetInterceptDragsResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetInterceptDragsResult;
    SetInterceptDragsResultBuilder() : result_(new SetInterceptDragsResult()) { }

    template<int STEP> SetInterceptDragsResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetInterceptDragsResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetInterceptDragsResult> result_;
  };

  static SetInterceptDragsResultBuilder<0> Builder() {
    return SetInterceptDragsResultBuilder<0>();
  }

 private:
  SetInterceptDragsResult() { }

};


// Parameters for the SynthesizePinchGesture command.
class HEADLESS_EXPORT SynthesizePinchGestureParams {
 public:
  static std::unique_ptr<SynthesizePinchGestureParams> Parse(const base::Value& value, ErrorReporter* errors);

  SynthesizePinchGestureParams(const SynthesizePinchGestureParams&) = delete;
  SynthesizePinchGestureParams& operator=(const SynthesizePinchGestureParams&) = delete;

  ~SynthesizePinchGestureParams() { }


  // X coordinate of the start of the gesture in CSS pixels.
  double GetX() const { return x_; }
  void SetX(double value) { x_ = value; }

  // Y coordinate of the start of the gesture in CSS pixels.
  double GetY() const { return y_; }
  void SetY(double value) { y_ = value; }

  // Relative scale factor after zooming (>1.0 zooms in, <1.0 zooms out).
  double GetScaleFactor() const { return scale_factor_; }
  void SetScaleFactor(double value) { scale_factor_ = value; }

  // Relative pointer speed in pixels per second (default: 800).
  bool HasRelativeSpeed() const { return !!relative_speed_; }
  int GetRelativeSpeed() const { DCHECK(HasRelativeSpeed()); return relative_speed_.value(); }
  void SetRelativeSpeed(int value) { relative_speed_ = value; }

  // Which type of input events to be generated (default: 'default', which queries the platform
  // for the preferred input type).
  bool HasGestureSourceType() const { return !!gesture_source_type_; }
  ::headless::input::GestureSourceType GetGestureSourceType() const { DCHECK(HasGestureSourceType()); return gesture_source_type_.value(); }
  void SetGestureSourceType(::headless::input::GestureSourceType value) { gesture_source_type_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SynthesizePinchGestureParams> Clone() const;

  template<int STATE>
  class SynthesizePinchGestureParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kXSet = 1 << 1,
    kYSet = 1 << 2,
    kScaleFactorSet = 1 << 3,
      kAllRequiredFieldsSet = (kXSet | kYSet | kScaleFactorSet | 0)
    };

    SynthesizePinchGestureParamsBuilder<STATE | kXSet>& SetX(double value) {
      static_assert(!(STATE & kXSet), "property x should not have already been set");
      result_->SetX(value);
      return CastState<kXSet>();
    }

    SynthesizePinchGestureParamsBuilder<STATE | kYSet>& SetY(double value) {
      static_assert(!(STATE & kYSet), "property y should not have already been set");
      result_->SetY(value);
      return CastState<kYSet>();
    }

    SynthesizePinchGestureParamsBuilder<STATE | kScaleFactorSet>& SetScaleFactor(double value) {
      static_assert(!(STATE & kScaleFactorSet), "property scaleFactor should not have already been set");
      result_->SetScaleFactor(value);
      return CastState<kScaleFactorSet>();
    }

    SynthesizePinchGestureParamsBuilder<STATE>& SetRelativeSpeed(int value) {
      result_->SetRelativeSpeed(value);
      return *this;
    }

    SynthesizePinchGestureParamsBuilder<STATE>& SetGestureSourceType(::headless::input::GestureSourceType value) {
      result_->SetGestureSourceType(value);
      return *this;
    }

    std::unique_ptr<SynthesizePinchGestureParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SynthesizePinchGestureParams;
    SynthesizePinchGestureParamsBuilder() : result_(new SynthesizePinchGestureParams()) { }

    template<int STEP> SynthesizePinchGestureParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SynthesizePinchGestureParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SynthesizePinchGestureParams> result_;
  };

  static SynthesizePinchGestureParamsBuilder<0> Builder() {
    return SynthesizePinchGestureParamsBuilder<0>();
  }

 private:
  SynthesizePinchGestureParams() { }

  double x_;
  double y_;
  double scale_factor_;
  absl::optional<int> relative_speed_;
  absl::optional<::headless::input::GestureSourceType> gesture_source_type_;
};


// Result for the SynthesizePinchGesture command.
class HEADLESS_EXPORT SynthesizePinchGestureResult {
 public:
  static std::unique_ptr<SynthesizePinchGestureResult> Parse(const base::Value& value, ErrorReporter* errors);

  SynthesizePinchGestureResult(const SynthesizePinchGestureResult&) = delete;
  SynthesizePinchGestureResult& operator=(const SynthesizePinchGestureResult&) = delete;

  ~SynthesizePinchGestureResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SynthesizePinchGestureResult> Clone() const;

  template<int STATE>
  class SynthesizePinchGestureResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SynthesizePinchGestureResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SynthesizePinchGestureResult;
    SynthesizePinchGestureResultBuilder() : result_(new SynthesizePinchGestureResult()) { }

    template<int STEP> SynthesizePinchGestureResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SynthesizePinchGestureResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SynthesizePinchGestureResult> result_;
  };

  static SynthesizePinchGestureResultBuilder<0> Builder() {
    return SynthesizePinchGestureResultBuilder<0>();
  }

 private:
  SynthesizePinchGestureResult() { }

};


// Parameters for the SynthesizeScrollGesture command.
class HEADLESS_EXPORT SynthesizeScrollGestureParams {
 public:
  static std::unique_ptr<SynthesizeScrollGestureParams> Parse(const base::Value& value, ErrorReporter* errors);

  SynthesizeScrollGestureParams(const SynthesizeScrollGestureParams&) = delete;
  SynthesizeScrollGestureParams& operator=(const SynthesizeScrollGestureParams&) = delete;

  ~SynthesizeScrollGestureParams() { }


  // X coordinate of the start of the gesture in CSS pixels.
  double GetX() const { return x_; }
  void SetX(double value) { x_ = value; }

  // Y coordinate of the start of the gesture in CSS pixels.
  double GetY() const { return y_; }
  void SetY(double value) { y_ = value; }

  // The distance to scroll along the X axis (positive to scroll left).
  bool HasXDistance() const { return !!x_distance_; }
  double GetXDistance() const { DCHECK(HasXDistance()); return x_distance_.value(); }
  void SetXDistance(double value) { x_distance_ = value; }

  // The distance to scroll along the Y axis (positive to scroll up).
  bool HasYDistance() const { return !!y_distance_; }
  double GetYDistance() const { DCHECK(HasYDistance()); return y_distance_.value(); }
  void SetYDistance(double value) { y_distance_ = value; }

  // The number of additional pixels to scroll back along the X axis, in addition to the given
  // distance.
  bool HasXOverscroll() const { return !!x_overscroll_; }
  double GetXOverscroll() const { DCHECK(HasXOverscroll()); return x_overscroll_.value(); }
  void SetXOverscroll(double value) { x_overscroll_ = value; }

  // The number of additional pixels to scroll back along the Y axis, in addition to the given
  // distance.
  bool HasYOverscroll() const { return !!y_overscroll_; }
  double GetYOverscroll() const { DCHECK(HasYOverscroll()); return y_overscroll_.value(); }
  void SetYOverscroll(double value) { y_overscroll_ = value; }

  // Prevent fling (default: true).
  bool HasPreventFling() const { return !!prevent_fling_; }
  bool GetPreventFling() const { DCHECK(HasPreventFling()); return prevent_fling_.value(); }
  void SetPreventFling(bool value) { prevent_fling_ = value; }

  // Swipe speed in pixels per second (default: 800).
  bool HasSpeed() const { return !!speed_; }
  int GetSpeed() const { DCHECK(HasSpeed()); return speed_.value(); }
  void SetSpeed(int value) { speed_ = value; }

  // Which type of input events to be generated (default: 'default', which queries the platform
  // for the preferred input type).
  bool HasGestureSourceType() const { return !!gesture_source_type_; }
  ::headless::input::GestureSourceType GetGestureSourceType() const { DCHECK(HasGestureSourceType()); return gesture_source_type_.value(); }
  void SetGestureSourceType(::headless::input::GestureSourceType value) { gesture_source_type_ = value; }

  // The number of times to repeat the gesture (default: 0).
  bool HasRepeatCount() const { return !!repeat_count_; }
  int GetRepeatCount() const { DCHECK(HasRepeatCount()); return repeat_count_.value(); }
  void SetRepeatCount(int value) { repeat_count_ = value; }

  // The number of milliseconds delay between each repeat. (default: 250).
  bool HasRepeatDelayMs() const { return !!repeat_delay_ms_; }
  int GetRepeatDelayMs() const { DCHECK(HasRepeatDelayMs()); return repeat_delay_ms_.value(); }
  void SetRepeatDelayMs(int value) { repeat_delay_ms_ = value; }

  // The name of the interaction markers to generate, if not empty (default: "").
  bool HasInteractionMarkerName() const { return !!interaction_marker_name_; }
  std::string GetInteractionMarkerName() const { DCHECK(HasInteractionMarkerName()); return interaction_marker_name_.value(); }
  void SetInteractionMarkerName(const std::string& value) { interaction_marker_name_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SynthesizeScrollGestureParams> Clone() const;

  template<int STATE>
  class SynthesizeScrollGestureParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kXSet = 1 << 1,
    kYSet = 1 << 2,
      kAllRequiredFieldsSet = (kXSet | kYSet | 0)
    };

    SynthesizeScrollGestureParamsBuilder<STATE | kXSet>& SetX(double value) {
      static_assert(!(STATE & kXSet), "property x should not have already been set");
      result_->SetX(value);
      return CastState<kXSet>();
    }

    SynthesizeScrollGestureParamsBuilder<STATE | kYSet>& SetY(double value) {
      static_assert(!(STATE & kYSet), "property y should not have already been set");
      result_->SetY(value);
      return CastState<kYSet>();
    }

    SynthesizeScrollGestureParamsBuilder<STATE>& SetXDistance(double value) {
      result_->SetXDistance(value);
      return *this;
    }

    SynthesizeScrollGestureParamsBuilder<STATE>& SetYDistance(double value) {
      result_->SetYDistance(value);
      return *this;
    }

    SynthesizeScrollGestureParamsBuilder<STATE>& SetXOverscroll(double value) {
      result_->SetXOverscroll(value);
      return *this;
    }

    SynthesizeScrollGestureParamsBuilder<STATE>& SetYOverscroll(double value) {
      result_->SetYOverscroll(value);
      return *this;
    }

    SynthesizeScrollGestureParamsBuilder<STATE>& SetPreventFling(bool value) {
      result_->SetPreventFling(value);
      return *this;
    }

    SynthesizeScrollGestureParamsBuilder<STATE>& SetSpeed(int value) {
      result_->SetSpeed(value);
      return *this;
    }

    SynthesizeScrollGestureParamsBuilder<STATE>& SetGestureSourceType(::headless::input::GestureSourceType value) {
      result_->SetGestureSourceType(value);
      return *this;
    }

    SynthesizeScrollGestureParamsBuilder<STATE>& SetRepeatCount(int value) {
      result_->SetRepeatCount(value);
      return *this;
    }

    SynthesizeScrollGestureParamsBuilder<STATE>& SetRepeatDelayMs(int value) {
      result_->SetRepeatDelayMs(value);
      return *this;
    }

    SynthesizeScrollGestureParamsBuilder<STATE>& SetInteractionMarkerName(const std::string& value) {
      result_->SetInteractionMarkerName(value);
      return *this;
    }

    std::unique_ptr<SynthesizeScrollGestureParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SynthesizeScrollGestureParams;
    SynthesizeScrollGestureParamsBuilder() : result_(new SynthesizeScrollGestureParams()) { }

    template<int STEP> SynthesizeScrollGestureParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SynthesizeScrollGestureParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SynthesizeScrollGestureParams> result_;
  };

  static SynthesizeScrollGestureParamsBuilder<0> Builder() {
    return SynthesizeScrollGestureParamsBuilder<0>();
  }

 private:
  SynthesizeScrollGestureParams() { }

  double x_;
  double y_;
  absl::optional<double> x_distance_;
  absl::optional<double> y_distance_;
  absl::optional<double> x_overscroll_;
  absl::optional<double> y_overscroll_;
  absl::optional<bool> prevent_fling_;
  absl::optional<int> speed_;
  absl::optional<::headless::input::GestureSourceType> gesture_source_type_;
  absl::optional<int> repeat_count_;
  absl::optional<int> repeat_delay_ms_;
  absl::optional<std::string> interaction_marker_name_;
};


// Result for the SynthesizeScrollGesture command.
class HEADLESS_EXPORT SynthesizeScrollGestureResult {
 public:
  static std::unique_ptr<SynthesizeScrollGestureResult> Parse(const base::Value& value, ErrorReporter* errors);

  SynthesizeScrollGestureResult(const SynthesizeScrollGestureResult&) = delete;
  SynthesizeScrollGestureResult& operator=(const SynthesizeScrollGestureResult&) = delete;

  ~SynthesizeScrollGestureResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SynthesizeScrollGestureResult> Clone() const;

  template<int STATE>
  class SynthesizeScrollGestureResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SynthesizeScrollGestureResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SynthesizeScrollGestureResult;
    SynthesizeScrollGestureResultBuilder() : result_(new SynthesizeScrollGestureResult()) { }

    template<int STEP> SynthesizeScrollGestureResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SynthesizeScrollGestureResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SynthesizeScrollGestureResult> result_;
  };

  static SynthesizeScrollGestureResultBuilder<0> Builder() {
    return SynthesizeScrollGestureResultBuilder<0>();
  }

 private:
  SynthesizeScrollGestureResult() { }

};


// Parameters for the SynthesizeTapGesture command.
class HEADLESS_EXPORT SynthesizeTapGestureParams {
 public:
  static std::unique_ptr<SynthesizeTapGestureParams> Parse(const base::Value& value, ErrorReporter* errors);

  SynthesizeTapGestureParams(const SynthesizeTapGestureParams&) = delete;
  SynthesizeTapGestureParams& operator=(const SynthesizeTapGestureParams&) = delete;

  ~SynthesizeTapGestureParams() { }


  // X coordinate of the start of the gesture in CSS pixels.
  double GetX() const { return x_; }
  void SetX(double value) { x_ = value; }

  // Y coordinate of the start of the gesture in CSS pixels.
  double GetY() const { return y_; }
  void SetY(double value) { y_ = value; }

  // Duration between touchdown and touchup events in ms (default: 50).
  bool HasDuration() const { return !!duration_; }
  int GetDuration() const { DCHECK(HasDuration()); return duration_.value(); }
  void SetDuration(int value) { duration_ = value; }

  // Number of times to perform the tap (e.g. 2 for double tap, default: 1).
  bool HasTapCount() const { return !!tap_count_; }
  int GetTapCount() const { DCHECK(HasTapCount()); return tap_count_.value(); }
  void SetTapCount(int value) { tap_count_ = value; }

  // Which type of input events to be generated (default: 'default', which queries the platform
  // for the preferred input type).
  bool HasGestureSourceType() const { return !!gesture_source_type_; }
  ::headless::input::GestureSourceType GetGestureSourceType() const { DCHECK(HasGestureSourceType()); return gesture_source_type_.value(); }
  void SetGestureSourceType(::headless::input::GestureSourceType value) { gesture_source_type_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SynthesizeTapGestureParams> Clone() const;

  template<int STATE>
  class SynthesizeTapGestureParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kXSet = 1 << 1,
    kYSet = 1 << 2,
      kAllRequiredFieldsSet = (kXSet | kYSet | 0)
    };

    SynthesizeTapGestureParamsBuilder<STATE | kXSet>& SetX(double value) {
      static_assert(!(STATE & kXSet), "property x should not have already been set");
      result_->SetX(value);
      return CastState<kXSet>();
    }

    SynthesizeTapGestureParamsBuilder<STATE | kYSet>& SetY(double value) {
      static_assert(!(STATE & kYSet), "property y should not have already been set");
      result_->SetY(value);
      return CastState<kYSet>();
    }

    SynthesizeTapGestureParamsBuilder<STATE>& SetDuration(int value) {
      result_->SetDuration(value);
      return *this;
    }

    SynthesizeTapGestureParamsBuilder<STATE>& SetTapCount(int value) {
      result_->SetTapCount(value);
      return *this;
    }

    SynthesizeTapGestureParamsBuilder<STATE>& SetGestureSourceType(::headless::input::GestureSourceType value) {
      result_->SetGestureSourceType(value);
      return *this;
    }

    std::unique_ptr<SynthesizeTapGestureParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SynthesizeTapGestureParams;
    SynthesizeTapGestureParamsBuilder() : result_(new SynthesizeTapGestureParams()) { }

    template<int STEP> SynthesizeTapGestureParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SynthesizeTapGestureParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SynthesizeTapGestureParams> result_;
  };

  static SynthesizeTapGestureParamsBuilder<0> Builder() {
    return SynthesizeTapGestureParamsBuilder<0>();
  }

 private:
  SynthesizeTapGestureParams() { }

  double x_;
  double y_;
  absl::optional<int> duration_;
  absl::optional<int> tap_count_;
  absl::optional<::headless::input::GestureSourceType> gesture_source_type_;
};


// Result for the SynthesizeTapGesture command.
class HEADLESS_EXPORT SynthesizeTapGestureResult {
 public:
  static std::unique_ptr<SynthesizeTapGestureResult> Parse(const base::Value& value, ErrorReporter* errors);

  SynthesizeTapGestureResult(const SynthesizeTapGestureResult&) = delete;
  SynthesizeTapGestureResult& operator=(const SynthesizeTapGestureResult&) = delete;

  ~SynthesizeTapGestureResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SynthesizeTapGestureResult> Clone() const;

  template<int STATE>
  class SynthesizeTapGestureResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SynthesizeTapGestureResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SynthesizeTapGestureResult;
    SynthesizeTapGestureResultBuilder() : result_(new SynthesizeTapGestureResult()) { }

    template<int STEP> SynthesizeTapGestureResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SynthesizeTapGestureResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SynthesizeTapGestureResult> result_;
  };

  static SynthesizeTapGestureResultBuilder<0> Builder() {
    return SynthesizeTapGestureResultBuilder<0>();
  }

 private:
  SynthesizeTapGestureResult() { }

};


// Parameters for the DragIntercepted event.
class HEADLESS_EXPORT DragInterceptedParams {
 public:
  static std::unique_ptr<DragInterceptedParams> Parse(const base::Value& value, ErrorReporter* errors);

  DragInterceptedParams(const DragInterceptedParams&) = delete;
  DragInterceptedParams& operator=(const DragInterceptedParams&) = delete;

  ~DragInterceptedParams() { }


  const ::headless::input::DragData* GetData() const { return data_.get(); }
  void SetData(std::unique_ptr<::headless::input::DragData> value) { data_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<DragInterceptedParams> Clone() const;

  template<int STATE>
  class DragInterceptedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kDataSet = 1 << 1,
      kAllRequiredFieldsSet = (kDataSet | 0)
    };

    DragInterceptedParamsBuilder<STATE | kDataSet>& SetData(std::unique_ptr<::headless::input::DragData> value) {
      static_assert(!(STATE & kDataSet), "property data should not have already been set");
      result_->SetData(std::move(value));
      return CastState<kDataSet>();
    }

    std::unique_ptr<DragInterceptedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DragInterceptedParams;
    DragInterceptedParamsBuilder() : result_(new DragInterceptedParams()) { }

    template<int STEP> DragInterceptedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DragInterceptedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DragInterceptedParams> result_;
  };

  static DragInterceptedParamsBuilder<0> Builder() {
    return DragInterceptedParamsBuilder<0>();
  }

 private:
  DragInterceptedParams() { }

  std::unique_ptr<::headless::input::DragData> data_;
};


}  // namespace input

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_INPUT_H_
