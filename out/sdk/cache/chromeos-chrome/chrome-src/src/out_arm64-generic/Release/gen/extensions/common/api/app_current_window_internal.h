// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/app_current_window_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_APP_CURRENT_WINDOW_INTERNAL_H__
#define EXTENSIONS_COMMON_API_APP_CURRENT_WINDOW_INTERNAL_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace app_current_window_internal {

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

  std::optional<int> left;

  std::optional<int> top;

  std::optional<int> width;

  std::optional<int> height;

};

struct SizeConstraints {
  SizeConstraints();
  ~SizeConstraints();
  SizeConstraints(const SizeConstraints&) = delete;
  SizeConstraints& operator=(const SizeConstraints&) = delete;
  SizeConstraints(SizeConstraints&& rhs) noexcept;
  SizeConstraints& operator=(SizeConstraints&& rhs) noexcept;

  // Populates a SizeConstraints object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SizeConstraints& out);

  // Populates a SizeConstraints object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SizeConstraints& out);

  // Creates a deep copy of SizeConstraints.
  SizeConstraints Clone() const;

  // Creates a SizeConstraints object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SizeConstraints> FromValue(const base::Value::Dict& value);

  // Creates a SizeConstraints object from a base::Value, or nullopt on failure.
  static std::optional<SizeConstraints> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSizeConstraints object.
  base::Value::Dict ToValue() const;

  std::optional<int> min_width;

  std::optional<int> min_height;

  std::optional<int> max_width;

  std::optional<int> max_height;

};

struct RegionRect {
  RegionRect();
  ~RegionRect();
  RegionRect(const RegionRect&) = delete;
  RegionRect& operator=(const RegionRect&) = delete;
  RegionRect(RegionRect&& rhs) noexcept;
  RegionRect& operator=(RegionRect&& rhs) noexcept;

  // Populates a RegionRect object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, RegionRect& out);

  // Populates a RegionRect object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, RegionRect& out);

  // Creates a deep copy of RegionRect.
  RegionRect Clone() const;

  // Creates a RegionRect object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<RegionRect> FromValue(const base::Value::Dict& value);

  // Creates a RegionRect object from a base::Value, or nullopt on failure.
  static std::optional<RegionRect> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRegionRect object.
  base::Value::Dict ToValue() const;

  int left;

  int top;

  int width;

  int height;

};

struct Region {
  Region();
  ~Region();
  Region(const Region&) = delete;
  Region& operator=(const Region&) = delete;
  Region(Region&& rhs) noexcept;
  Region& operator=(Region&& rhs) noexcept;

  // Populates a Region object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Region& out);

  // Populates a Region object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Region& out);

  // Creates a deep copy of Region.
  Region Clone() const;

  // Creates a Region object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Region> FromValue(const base::Value::Dict& value);

  // Creates a Region object from a base::Value, or nullopt on failure.
  static std::optional<Region> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRegion object.
  base::Value::Dict ToValue() const;

  std::optional<std::vector<RegionRect>> rects;

};


//
// Functions
//

namespace Focus {

}  // namespace Focus

namespace Fullscreen {

}  // namespace Fullscreen

namespace Minimize {

}  // namespace Minimize

namespace Maximize {

}  // namespace Maximize

namespace Restore {

}  // namespace Restore

namespace DrawAttention {

}  // namespace DrawAttention

namespace ClearAttention {

}  // namespace ClearAttention

namespace Show {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::optional<bool> focused;


 private:
  Params();
};

}  // namespace Show

namespace Hide {

}  // namespace Hide

namespace SetBounds {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string bounds_type;

  Bounds bounds;


 private:
  Params();
};

}  // namespace SetBounds

namespace SetSizeConstraints {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string bounds_type;

  SizeConstraints constraints;


 private:
  Params();
};

}  // namespace SetSizeConstraints

namespace SetIcon {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string icon_url;


 private:
  Params();
};

}  // namespace SetIcon

namespace SetShape {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  Region region;


 private:
  Params();
};

}  // namespace SetShape

namespace SetAlwaysOnTop {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  bool always_on_top;


 private:
  Params();
};

}  // namespace SetAlwaysOnTop

namespace SetVisibleOnAllWorkspaces {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  bool always_visible;


 private:
  Params();
};

}  // namespace SetVisibleOnAllWorkspaces

namespace SetActivateOnPointer {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  bool activate_on_pointer;


 private:
  Params();
};

}  // namespace SetActivateOnPointer

//
// Events
//

namespace OnClosed {

extern const char kEventName[];  // "app.currentWindowInternal.onClosed"

base::Value::List Create();
}  // namespace OnClosed

namespace OnBoundsChanged {

extern const char kEventName[];  // "app.currentWindowInternal.onBoundsChanged"

base::Value::List Create();
}  // namespace OnBoundsChanged

namespace OnFullscreened {

extern const char kEventName[];  // "app.currentWindowInternal.onFullscreened"

base::Value::List Create();
}  // namespace OnFullscreened

namespace OnMinimized {

extern const char kEventName[];  // "app.currentWindowInternal.onMinimized"

base::Value::List Create();
}  // namespace OnMinimized

namespace OnMaximized {

extern const char kEventName[];  // "app.currentWindowInternal.onMaximized"

base::Value::List Create();
}  // namespace OnMaximized

namespace OnRestored {

extern const char kEventName[];  // "app.currentWindowInternal.onRestored"

base::Value::List Create();
}  // namespace OnRestored

namespace OnAlphaEnabledChanged {

extern const char kEventName[];  // "app.currentWindowInternal.onAlphaEnabledChanged"

base::Value::List Create();
}  // namespace OnAlphaEnabledChanged

}  // namespace app_current_window_internal
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_APP_CURRENT_WINDOW_INTERNAL_H__
