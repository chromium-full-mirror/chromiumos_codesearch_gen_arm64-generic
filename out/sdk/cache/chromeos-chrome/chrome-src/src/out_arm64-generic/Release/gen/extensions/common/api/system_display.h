// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/system_display.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_SYSTEM_DISPLAY_H__
#define EXTENSIONS_COMMON_API_SYSTEM_DISPLAY_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace system_display {

//
// Types
//

struct Bounds {
  Bounds();
  ~Bounds();
  Bounds(const Bounds&) = delete;
  Bounds& operator=(const Bounds&) = delete;
  Bounds(Bounds&& rhs) noexcept;
  Bounds& operator=(Bounds&& rhs) noexcept;

  // Populates a Bounds object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Bounds& out);

  // Populates a Bounds object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Bounds& out);

  // Creates a deep copy of Bounds.
  Bounds Clone() const;

  // Creates a Bounds object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Bounds> FromValue(const base::Value::Dict& value);

  // Creates a Bounds object from a base::Value, or nullopt on failure.
  static std::optional<Bounds> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisBounds object.
  base::Value::Dict ToValue() const;

  // The x-coordinate of the upper-left corner.
  int left;

  // The y-coordinate of the upper-left corner.
  int top;

  // The width of the display in pixels.
  int width;

  // The height of the display in pixels.
  int height;

};

struct Insets {
  Insets();
  ~Insets();
  Insets(const Insets&) = delete;
  Insets& operator=(const Insets&) = delete;
  Insets(Insets&& rhs) noexcept;
  Insets& operator=(Insets&& rhs) noexcept;

  // Populates a Insets object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Insets& out);

  // Populates a Insets object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Insets& out);

  // Creates a deep copy of Insets.
  Insets Clone() const;

  // Creates a Insets object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Insets> FromValue(const base::Value::Dict& value);

  // Creates a Insets object from a base::Value, or nullopt on failure.
  static std::optional<Insets> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInsets object.
  base::Value::Dict ToValue() const;

  // The x-axis distance from the left bound.
  int left;

  // The y-axis distance from the top bound.
  int top;

  // The x-axis distance from the right bound.
  int right;

  // The y-axis distance from the bottom bound.
  int bottom;

};

struct Point {
  Point();
  ~Point();
  Point(const Point&) = delete;
  Point& operator=(const Point&) = delete;
  Point(Point&& rhs) noexcept;
  Point& operator=(Point&& rhs) noexcept;

  // Populates a Point object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Point& out);

  // Populates a Point object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Point& out);

  // Creates a deep copy of Point.
  Point Clone() const;

  // Creates a Point object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Point> FromValue(const base::Value::Dict& value);

  // Creates a Point object from a base::Value, or nullopt on failure.
  static std::optional<Point> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPoint object.
  base::Value::Dict ToValue() const;

  // The x-coordinate of the point.
  int x;

  // The y-coordinate of the point.
  int y;

};

struct TouchCalibrationPair {
  TouchCalibrationPair();
  ~TouchCalibrationPair();
  TouchCalibrationPair(const TouchCalibrationPair&) = delete;
  TouchCalibrationPair& operator=(const TouchCalibrationPair&) = delete;
  TouchCalibrationPair(TouchCalibrationPair&& rhs) noexcept;
  TouchCalibrationPair& operator=(TouchCalibrationPair&& rhs) noexcept;

  // Populates a TouchCalibrationPair object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TouchCalibrationPair& out);

  // Populates a TouchCalibrationPair object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, TouchCalibrationPair& out);

  // Creates a deep copy of TouchCalibrationPair.
  TouchCalibrationPair Clone() const;

  // Creates a TouchCalibrationPair object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<TouchCalibrationPair> FromValue(const base::Value::Dict& value);

  // Creates a TouchCalibrationPair object from a base::Value, or nullopt on
  // failure.
  static std::optional<TouchCalibrationPair> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTouchCalibrationPair object.
  base::Value::Dict ToValue() const;

  // The coordinates of the display point.
  Point display_point;

  // The coordinates of the touch point corresponding to the display point.
  Point touch_point;

};

struct TouchCalibrationPairQuad {
  TouchCalibrationPairQuad();
  ~TouchCalibrationPairQuad();
  TouchCalibrationPairQuad(const TouchCalibrationPairQuad&) = delete;
  TouchCalibrationPairQuad& operator=(const TouchCalibrationPairQuad&) = delete;
  TouchCalibrationPairQuad(TouchCalibrationPairQuad&& rhs) noexcept;
  TouchCalibrationPairQuad& operator=(TouchCalibrationPairQuad&& rhs) noexcept;

  // Populates a TouchCalibrationPairQuad object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TouchCalibrationPairQuad& out);

  // Populates a TouchCalibrationPairQuad object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, TouchCalibrationPairQuad& out);

  // Creates a deep copy of TouchCalibrationPairQuad.
  TouchCalibrationPairQuad Clone() const;

  // Creates a TouchCalibrationPairQuad object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<TouchCalibrationPairQuad> FromValue(const base::Value::Dict& value);

  // Creates a TouchCalibrationPairQuad object from a base::Value, or nullopt on
  // failure.
  static std::optional<TouchCalibrationPairQuad> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTouchCalibrationPairQuad object.
  base::Value::Dict ToValue() const;

  // First pair of touch and display point required for touch calibration.
  TouchCalibrationPair pair1;

  // Second pair of touch and display point required for touch calibration.
  TouchCalibrationPair pair2;

  // Third pair of touch and display point required for touch calibration.
  TouchCalibrationPair pair3;

  // Fourth pair of touch and display point required for touch calibration.
  TouchCalibrationPair pair4;

};

struct DisplayMode {
  DisplayMode();
  ~DisplayMode();
  DisplayMode(const DisplayMode&) = delete;
  DisplayMode& operator=(const DisplayMode&) = delete;
  DisplayMode(DisplayMode&& rhs) noexcept;
  DisplayMode& operator=(DisplayMode&& rhs) noexcept;

  // Populates a DisplayMode object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DisplayMode& out);

  // Populates a DisplayMode object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, DisplayMode& out);

  // Creates a deep copy of DisplayMode.
  DisplayMode Clone() const;

  // Creates a DisplayMode object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DisplayMode> FromValue(const base::Value::Dict& value);

  // Creates a DisplayMode object from a base::Value, or nullopt on failure.
  static std::optional<DisplayMode> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDisplayMode object.
  base::Value::Dict ToValue() const;

  // The display mode width in device independent (user visible) pixels.
  int width;

  // The display mode height in device independent (user visible) pixels.
  int height;

  // The display mode width in native pixels.
  int width_in_native_pixels;

  // The display mode height in native pixels.
  int height_in_native_pixels;

  // The display mode UI scale factor.
  std::optional<double> ui_scale;

  // The display mode device scale factor.
  double device_scale_factor;

  // The display mode refresh rate in hertz.
  double refresh_rate;

  // True if the mode is the display's native mode.
  bool is_native;

  // True if the display mode is currently selected.
  bool is_selected;

  // True if this mode is interlaced, false if not provided.
  std::optional<bool> is_interlaced;

};

// Layout position, i.e. edge of parent that the display is attached to.
enum class LayoutPosition {
  kNone = 0,
  kTop,
  kRight,
  kBottom,
  kLeft,
  kMaxValue = kLeft,
};


const char* ToString(LayoutPosition as_enum);
LayoutPosition ParseLayoutPosition(base::StringPiece as_string);
std::u16string GetLayoutPositionParseError(base::StringPiece as_string);

struct DisplayLayout {
  DisplayLayout();
  ~DisplayLayout();
  DisplayLayout(const DisplayLayout&) = delete;
  DisplayLayout& operator=(const DisplayLayout&) = delete;
  DisplayLayout(DisplayLayout&& rhs) noexcept;
  DisplayLayout& operator=(DisplayLayout&& rhs) noexcept;

  // Populates a DisplayLayout object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DisplayLayout& out);

  // Populates a DisplayLayout object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DisplayLayout& out);

  // Creates a deep copy of DisplayLayout.
  DisplayLayout Clone() const;

  // Creates a DisplayLayout object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DisplayLayout> FromValue(const base::Value::Dict& value);

  // Creates a DisplayLayout object from a base::Value, or nullopt on failure.
  static std::optional<DisplayLayout> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDisplayLayout object.
  base::Value::Dict ToValue() const;

  // The unique identifier of the display.
  std::string id;

  // The unique identifier of the parent display. Empty if this is the root.
  std::string parent_id;

  // The layout position of this display relative to the parent. This will be
  // ignored for the root.
  LayoutPosition position;

  // The offset of the display along the connected edge. 0 indicates that the
  // topmost or leftmost corners are aligned.
  int offset;

};

struct Edid {
  Edid();
  ~Edid();
  Edid(const Edid&) = delete;
  Edid& operator=(const Edid&) = delete;
  Edid(Edid&& rhs) noexcept;
  Edid& operator=(Edid&& rhs) noexcept;

  // Populates a Edid object from a base::Value& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value& value, Edid& out);

  // Populates a Edid object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Edid& out);

  // Creates a deep copy of Edid.
  Edid Clone() const;

  // Creates a Edid object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Edid> FromValue(const base::Value::Dict& value);

  // Creates a Edid object from a base::Value, or nullopt on failure.
  static std::optional<Edid> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEdid object.
  base::Value::Dict ToValue() const;

  // 3 character manufacturer code. See Sec. 3.4.1 page 21. Required in v1.4.
  std::string manufacturer_id;

  // 2 byte manufacturer-assigned code, Sec. 3.4.2 page 21. Required in v1.4.
  std::string product_id;

  // Year of manufacturer, Sec. 3.4.4 page 22. Required in v1.4.
  int year_of_manufacture;

};

// An enum to tell if the display is detected and used by the system. The
// display is considered 'inactive', if it is not detected by the system (maybe
// disconnected, or considered disconnected due to sleep mode, etc). This state
// is used to keep existing display when the all displays are disconnected, for
// example.
enum class ActiveState {
  kNone = 0,
  kActive,
  kInactive,
  kMaxValue = kInactive,
};


const char* ToString(ActiveState as_enum);
ActiveState ParseActiveState(base::StringPiece as_string);
std::u16string GetActiveStateParseError(base::StringPiece as_string);

struct DisplayUnitInfo {
  DisplayUnitInfo();
  ~DisplayUnitInfo();
  DisplayUnitInfo(const DisplayUnitInfo&) = delete;
  DisplayUnitInfo& operator=(const DisplayUnitInfo&) = delete;
  DisplayUnitInfo(DisplayUnitInfo&& rhs) noexcept;
  DisplayUnitInfo& operator=(DisplayUnitInfo&& rhs) noexcept;

  // Populates a DisplayUnitInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DisplayUnitInfo& out);

  // Populates a DisplayUnitInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DisplayUnitInfo& out);

  // Creates a deep copy of DisplayUnitInfo.
  DisplayUnitInfo Clone() const;

  // Creates a DisplayUnitInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DisplayUnitInfo> FromValue(const base::Value::Dict& value);

  // Creates a DisplayUnitInfo object from a base::Value, or nullopt on failure.
  static std::optional<DisplayUnitInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDisplayUnitInfo object.
  base::Value::Dict ToValue() const;

  // The unique identifier of the display.
  std::string id;

  // The user-friendly name (e.g. "HP LCD monitor").
  std::string name;

  // NOTE: This is only available to Chrome OS Kiosk apps and Web UI.
  std::optional<Edid> edid;

  // Chrome OS only. Identifier of the display that is being mirrored if mirroring
  // is enabled, otherwise empty. This will be set for all displays (including the
  // display being mirrored).
  std::string mirroring_source_id;

  // Chrome OS only. Identifiers of the displays to which the source display is
  // being mirrored. Empty if no displays are being mirrored. This will be set to
  // the same value for all displays. This must not include |mirroringSourceId|.
  std::vector<std::string> mirroring_destination_ids;

  // True if this is the primary display.
  bool is_primary;

  // True if this is an internal display.
  bool is_internal;

  // True if this display is enabled.
  bool is_enabled;

  // Active if the display is detected and used by the system.
  ActiveState active_state;

  // True for all displays when in unified desktop mode. See documentation for
  // $(ref:enableUnifiedDesktop).
  bool is_unified;

  // True when the auto-rotation is allowed. It happens when the device is in a
  // tablet physical state or kSupportsClamshellAutoRotation is set. Provided for
  // ChromeOS Settings UI only. TODO(stevenjb): Remove when Settings switches to a
  // mojo API.
  std::optional<bool> is_auto_rotation_allowed;

  // The number of pixels per inch along the x-axis.
  double dpi_x;

  // The number of pixels per inch along the y-axis.
  double dpi_y;

  // The display's clockwise rotation in degrees relative to the vertical
  // position. Currently exposed only on ChromeOS. Will be set to 0 on other
  // platforms. A value of -1 will be interpreted as auto-rotate when the device
  // is in a physical tablet state.
  int rotation;

  // The display's logical bounds.
  Bounds bounds;

  // The display's insets within its screen's bounds. Currently exposed only on
  // ChromeOS. Will be set to empty insets on other platforms.
  Insets overscan;

  // The usable work area of the display within the display bounds. The work area
  // excludes areas of the display reserved for OS, for example taskbar and
  // launcher.
  Bounds work_area;

  // The list of available display modes. The current mode will have
  // isSelected=true. Only available on Chrome OS. Will be set to an empty array
  // on other platforms.
  std::vector<DisplayMode> modes;

  // True if this display has a touch input device associated with it.
  bool has_touch_support;

  // True if this display has an accelerometer associated with it. Provided for
  // ChromeOS Settings UI only. TODO(stevenjb): Remove when Settings switches to a
  // mojo API. NOTE: The name of this may change.
  bool has_accelerometer_support;

  // A list of zoom factor values that can be set for the display.
  std::vector<double> available_display_zoom_factors;

  // The ratio between the display's current and default zoom. For example, value
  // 1 is equivalent to 100% zoom, and value 1.5 is equivalent to 150% zoom.
  double display_zoom_factor;

};

struct DisplayProperties {
  DisplayProperties();
  ~DisplayProperties();
  DisplayProperties(const DisplayProperties&) = delete;
  DisplayProperties& operator=(const DisplayProperties&) = delete;
  DisplayProperties(DisplayProperties&& rhs) noexcept;
  DisplayProperties& operator=(DisplayProperties&& rhs) noexcept;

  // Populates a DisplayProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DisplayProperties& out);

  // Populates a DisplayProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DisplayProperties& out);

  // Creates a deep copy of DisplayProperties.
  DisplayProperties Clone() const;

  // Creates a DisplayProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DisplayProperties> FromValue(const base::Value::Dict& value);

  // Creates a DisplayProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<DisplayProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDisplayProperties object.
  base::Value::Dict ToValue() const;

  // Chrome OS only. If set to true, changes the display mode to unified desktop
  // (see $(ref:enableUnifiedDesktop) for details). If set to false, unified
  // desktop mode will be disabled. This is only valid for the primary display. If
  // provided, mirroringSourceId must not be provided and other properties will be
  // ignored. This is has no effect if not provided.
  std::optional<bool> is_unified;

  // Chrome OS only. If set and not empty, enables mirroring for this display
  // only. Otherwise disables mirroring for all displays. This value should
  // indicate the id of the source display to mirror, which must not be the same
  // as the id passed to setDisplayProperties. If set, no other property may be
  // set.
  std::optional<std::string> mirroring_source_id;

  // If set to true, makes the display primary. No-op if set to false. Note: If
  // set, the display is considered primary for all other properties (i.e.
  // $(ref:isUnified) may be set and bounds origin may not).
  std::optional<bool> is_primary;

  // If set, sets the display's overscan insets to the provided values. Note that
  // overscan values may not be negative or larger than a half of the screen's
  // size. Overscan cannot be changed on the internal monitor.
  std::optional<Insets> overscan;

  // If set, updates the display's rotation. Legal values are [0, 90, 180, 270].
  // The rotation is set clockwise, relative to the display's vertical position.
  std::optional<int> rotation;

  // If set, updates the display's logical bounds origin along the x-axis. Applied
  // together with $(ref:boundsOriginY). Defaults to the current value if not set
  // and $(ref:boundsOriginY) is set. Note that when updating the display origin,
  // some constraints will be applied, so the final bounds origin may be different
  // than the one set. The final bounds can be retrieved using $(ref:getInfo). The
  // bounds origin cannot be changed on the primary display.
  std::optional<int> bounds_origin_x;

  // If set, updates the display's logical bounds origin along the y-axis. See
  // documentation for $(ref:boundsOriginX) parameter.
  std::optional<int> bounds_origin_y;

  // If set, updates the display mode to the mode matching this value. If other
  // parameters are invalid, this will not be applied. If the display mode is
  // invalid, it will not be applied and an error will be set, but other
  // properties will still be applied.
  std::optional<DisplayMode> display_mode;

  // If set, updates the zoom associated with the display. This zoom performs
  // re-layout and repaint thus resulting in a better quality zoom than just
  // performing a pixel by pixel stretch enlargement.
  std::optional<double> display_zoom_factor;

};

struct GetInfoFlags {
  GetInfoFlags();
  ~GetInfoFlags();
  GetInfoFlags(const GetInfoFlags&) = delete;
  GetInfoFlags& operator=(const GetInfoFlags&) = delete;
  GetInfoFlags(GetInfoFlags&& rhs) noexcept;
  GetInfoFlags& operator=(GetInfoFlags&& rhs) noexcept;

  // Populates a GetInfoFlags object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetInfoFlags& out);

  // Populates a GetInfoFlags object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetInfoFlags& out);

  // Creates a deep copy of GetInfoFlags.
  GetInfoFlags Clone() const;

  // Creates a GetInfoFlags object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<GetInfoFlags> FromValue(const base::Value::Dict& value);

  // Creates a GetInfoFlags object from a base::Value, or nullopt on failure.
  static std::optional<GetInfoFlags> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetInfoFlags object.
  base::Value::Dict ToValue() const;

  // If set to true, only a single $(ref:DisplayUnitInfo) will be returned by
  // $(ref:getInfo) when in unified desktop mode (see
  // $(ref:enableUnifiedDesktop)). Defaults to false.
  std::optional<bool> single_unified;

};

// Mirror mode, i.e. different ways of how a display is mirrored to other
// displays.
enum class MirrorMode {
  kNone = 0,
  kOff,
  kNormal,
  kMixed,
  kMaxValue = kMixed,
};


const char* ToString(MirrorMode as_enum);
MirrorMode ParseMirrorMode(base::StringPiece as_string);
std::u16string GetMirrorModeParseError(base::StringPiece as_string);

struct MirrorModeInfo {
  MirrorModeInfo();
  ~MirrorModeInfo();
  MirrorModeInfo(const MirrorModeInfo&) = delete;
  MirrorModeInfo& operator=(const MirrorModeInfo&) = delete;
  MirrorModeInfo(MirrorModeInfo&& rhs) noexcept;
  MirrorModeInfo& operator=(MirrorModeInfo&& rhs) noexcept;

  // Populates a MirrorModeInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MirrorModeInfo& out);

  // Populates a MirrorModeInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MirrorModeInfo& out);

  // Creates a deep copy of MirrorModeInfo.
  MirrorModeInfo Clone() const;

  // Creates a MirrorModeInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<MirrorModeInfo> FromValue(const base::Value::Dict& value);

  // Creates a MirrorModeInfo object from a base::Value, or nullopt on failure.
  static std::optional<MirrorModeInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMirrorModeInfo object.
  base::Value::Dict ToValue() const;

  // The mirror mode that should be set.
  MirrorMode mode;

  // The id of the mirroring source display. This is only valid for 'mixed'.
  std::optional<std::string> mirroring_source_id;

  // The ids of the mirroring destination displays. This is only valid for
  // 'mixed'.
  std::optional<std::vector<std::string>> mirroring_destination_ids;

};


//
// Functions
//

namespace GetInfo {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Options affecting how the information is returned.
  std::optional<GetInfoFlags> flags;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<DisplayUnitInfo>& display_info);
}  // namespace Results

}  // namespace GetInfo

namespace GetDisplayLayout {

namespace Results {

base::Value::List Create(const std::vector<DisplayLayout>& layouts);
}  // namespace Results

}  // namespace GetDisplayLayout

namespace SetDisplayProperties {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The display's unique identifier.
  std::string id;

  // The information about display properties that should be changed.     A
  // property will be changed only if a new value for it is specified in
  // |info|.
  DisplayProperties info;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetDisplayProperties

namespace SetDisplayLayout {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The layout information, required for all displays except     the primary
  // display.
  std::vector<DisplayLayout> layouts;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetDisplayLayout

namespace EnableUnifiedDesktop {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // True if unified desktop should be enabled.
  bool enabled;


 private:
  Params();
};

}  // namespace EnableUnifiedDesktop

namespace OverscanCalibrationStart {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The display's unique identifier.
  std::string id;


 private:
  Params();
};

}  // namespace OverscanCalibrationStart

namespace OverscanCalibrationAdjust {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The display's unique identifier.
  std::string id;

  // The amount to change the overscan insets.
  Insets delta;


 private:
  Params();
};

}  // namespace OverscanCalibrationAdjust

namespace OverscanCalibrationReset {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The display's unique identifier.
  std::string id;


 private:
  Params();
};

}  // namespace OverscanCalibrationReset

namespace OverscanCalibrationComplete {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The display's unique identifier.
  std::string id;


 private:
  Params();
};

}  // namespace OverscanCalibrationComplete

namespace ShowNativeTouchCalibration {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The display's unique identifier.
  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace ShowNativeTouchCalibration

namespace StartCustomTouchCalibration {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The display's unique identifier.
  std::string id;


 private:
  Params();
};

}  // namespace StartCustomTouchCalibration

namespace CompleteCustomTouchCalibration {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The pairs of point used to calibrate the display.
  TouchCalibrationPairQuad pairs;

  // Bounds of the display when the touch calibration was performed.
  // |bounds.left| and |bounds.top| values are ignored.
  Bounds bounds;


 private:
  Params();
};

}  // namespace CompleteCustomTouchCalibration

namespace ClearTouchCalibration {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The display's unique identifier.
  std::string id;


 private:
  Params();
};

}  // namespace ClearTouchCalibration

namespace SetMirrorMode {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The information of the mirror mode that should be applied to the     display
  // mode.
  MirrorModeInfo info;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetMirrorMode

//
// Events
//

namespace OnDisplayChanged {

extern const char kEventName[];  // "system.display.onDisplayChanged"

base::Value::List Create();
}  // namespace OnDisplayChanged

}  // namespace system_display
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_SYSTEM_DISPLAY_H__
