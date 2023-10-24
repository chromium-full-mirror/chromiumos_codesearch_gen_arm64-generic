// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/virtual_keyboard_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_VIRTUAL_KEYBOARD_PRIVATE_H__
#define EXTENSIONS_COMMON_API_VIRTUAL_KEYBOARD_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace virtual_keyboard_private {

//
// Types
//

// One of keyup or keydown.
enum class VirtualKeyboardEventType {
  kNone = 0,
  kKeyup,
  kKeydown,
  kMaxValue = kKeydown,
};


const char* ToString(VirtualKeyboardEventType as_enum);
VirtualKeyboardEventType ParseVirtualKeyboardEventType(base::StringPiece as_string);
std::u16string GetVirtualKeyboardEventTypeParseError(base::StringPiece as_string);

struct VirtualKeyboardEvent {
  VirtualKeyboardEvent();
  ~VirtualKeyboardEvent();
  VirtualKeyboardEvent(const VirtualKeyboardEvent&) = delete;
  VirtualKeyboardEvent& operator=(const VirtualKeyboardEvent&) = delete;
  VirtualKeyboardEvent(VirtualKeyboardEvent&& rhs);
  VirtualKeyboardEvent& operator=(VirtualKeyboardEvent&& rhs);

  // Populates a VirtualKeyboardEvent object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VirtualKeyboardEvent& out);

  // Populates a VirtualKeyboardEvent object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, VirtualKeyboardEvent& out);

  // Creates a deep copy of VirtualKeyboardEvent.
  VirtualKeyboardEvent Clone() const;

  // Creates a VirtualKeyboardEvent object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<VirtualKeyboardEvent> FromValueDeprecated(const base::Value& value);

  // Creates a VirtualKeyboardEvent object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<VirtualKeyboardEvent> FromValue(const base::Value::Dict& value);

  // Creates a VirtualKeyboardEvent object from a base::Value, or nullopt on
  // failure.
  static absl::optional<VirtualKeyboardEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisVirtualKeyboardEvent object.
  base::Value::Dict ToValue() const;

  VirtualKeyboardEventType type;

  // Unicode value of the key.
  int char_value;

  // Virtual key code, which is independent of the keyboard layout or modifier
  // state.
  int key_code;

  // Name of the key, which is independent of modifier state.
  std::string key_name;

  // Flag for modifiers that are active. None = 0, Shift = 2, Control = 4, Alt =
  // 8.
  absl::optional<int> modifiers;

};

// The value of the virtual keyboard mode to set to.
enum class KeyboardMode {
  kNone = 0,
  kFullWidth,
  kFloating,
  kMaxValue = kFloating,
};


const char* ToString(KeyboardMode as_enum);
KeyboardMode ParseKeyboardMode(base::StringPiece as_string);
std::u16string GetKeyboardModeParseError(base::StringPiece as_string);

// The value of the virtual keyboard state to change to.
enum class KeyboardState {
  kNone = 0,
  kEnabled,
  kDisabled,
  kAuto,
  kMaxValue = kAuto,
};


const char* ToString(KeyboardState as_enum);
KeyboardState ParseKeyboardState(base::StringPiece as_string);
std::u16string GetKeyboardStateParseError(base::StringPiece as_string);

struct Bounds {
  Bounds();
  ~Bounds();
  Bounds(const Bounds&) = delete;
  Bounds& operator=(const Bounds&) = delete;
  Bounds(Bounds&& rhs);
  Bounds& operator=(Bounds&& rhs);

  // Populates a Bounds object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Bounds& out);

  // Populates a Bounds object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Bounds& out);

  // Creates a deep copy of Bounds.
  Bounds Clone() const;

  // Creates a Bounds object from a base::Value, or NULL on failure.
  static std::unique_ptr<Bounds> FromValueDeprecated(const base::Value& value);

  // Creates a Bounds object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<Bounds> FromValue(const base::Value::Dict& value);

  // Creates a Bounds object from a base::Value, or nullopt on failure.
  static absl::optional<Bounds> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisBounds object.
  base::Value::Dict ToValue() const;

  // The position of the virtual keyboard window's left edge.
  int left;

  // The position of the virtual keyboard window's top edge.
  int top;

  // The width of the virtual keyboard window.
  int width;

  // The height of the virtual keyboard window.
  int height;

};

struct KeyboardConfig {
  KeyboardConfig();
  ~KeyboardConfig();
  KeyboardConfig(const KeyboardConfig&) = delete;
  KeyboardConfig& operator=(const KeyboardConfig&) = delete;
  KeyboardConfig(KeyboardConfig&& rhs);
  KeyboardConfig& operator=(KeyboardConfig&& rhs);

  // Populates a KeyboardConfig object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, KeyboardConfig& out);

  // Populates a KeyboardConfig object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, KeyboardConfig& out);

  // Creates a deep copy of KeyboardConfig.
  KeyboardConfig Clone() const;

  // Creates a KeyboardConfig object from a base::Value, or NULL on failure.
  static std::unique_ptr<KeyboardConfig> FromValueDeprecated(const base::Value& value);

  // Creates a KeyboardConfig object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<KeyboardConfig> FromValue(const base::Value::Dict& value);

  // Creates a KeyboardConfig object from a base::Value, or nullopt on failure.
  static absl::optional<KeyboardConfig> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisKeyboardConfig object.
  base::Value::Dict ToValue() const;

  // Virtual keyboard layout string.
  std::string layout;

  // Virtual keyboard is in hotrod mode.
  bool hotrodmode;

  // True if accessibility virtual keyboard is enabled.
  bool a11ymode;

  // List of experimental feature flags.
  std::vector<std::string> features;

};

struct ContainerBehaviorOptions {
  ContainerBehaviorOptions();
  ~ContainerBehaviorOptions();
  ContainerBehaviorOptions(const ContainerBehaviorOptions&) = delete;
  ContainerBehaviorOptions& operator=(const ContainerBehaviorOptions&) = delete;
  ContainerBehaviorOptions(ContainerBehaviorOptions&& rhs);
  ContainerBehaviorOptions& operator=(ContainerBehaviorOptions&& rhs);

  // Populates a ContainerBehaviorOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ContainerBehaviorOptions& out);

  // Populates a ContainerBehaviorOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ContainerBehaviorOptions& out);

  // Creates a deep copy of ContainerBehaviorOptions.
  ContainerBehaviorOptions Clone() const;

  // Creates a ContainerBehaviorOptions object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ContainerBehaviorOptions> FromValueDeprecated(const base::Value& value);

  // Creates a ContainerBehaviorOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<ContainerBehaviorOptions> FromValue(const base::Value::Dict& value);

  // Creates a ContainerBehaviorOptions object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ContainerBehaviorOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisContainerBehaviorOptions object.
  base::Value::Dict ToValue() const;

  // The value of the virtual keyboard mode to set to.
  KeyboardMode mode;

  // The bounds of the virtual keyboard after changing mode
  Bounds bounds;

};

// The display format associated with this item.
enum class DisplayFormat {
  kNone = 0,
  kText,
  kPng,
  kHtml,
  kFile,
  kMaxValue = kFile,
};


const char* ToString(DisplayFormat as_enum);
DisplayFormat ParseDisplayFormat(base::StringPiece as_string);
std::u16string GetDisplayFormatParseError(base::StringPiece as_string);

struct ClipboardItem {
  ClipboardItem();
  ~ClipboardItem();
  ClipboardItem(const ClipboardItem&) = delete;
  ClipboardItem& operator=(const ClipboardItem&) = delete;
  ClipboardItem(ClipboardItem&& rhs);
  ClipboardItem& operator=(ClipboardItem&& rhs);

  // Populates a ClipboardItem object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ClipboardItem& out);

  // Populates a ClipboardItem object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ClipboardItem& out);

  // Creates a deep copy of ClipboardItem.
  ClipboardItem Clone() const;

  // Creates a ClipboardItem object from a base::Value, or NULL on failure.
  static std::unique_ptr<ClipboardItem> FromValueDeprecated(const base::Value& value);

  // Creates a ClipboardItem object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ClipboardItem> FromValue(const base::Value::Dict& value);

  // Creates a ClipboardItem object from a base::Value, or nullopt on failure.
  static absl::optional<ClipboardItem> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisClipboardItem object.
  base::Value::Dict ToValue() const;

  // The unique id which identifies this clipboard item.
  std::string id;

  // The image data associated with this item.
  absl::optional<std::string> image_data;

  // The text data associated with this item.
  absl::optional<std::string> text_data;

  // The display format associated with this item.
  DisplayFormat display_format;

  // The time that this item was added to the clipboard, in milliseconds since the
  // epoch.
  double time_copied;

};


//
// Functions
//

namespace InsertText {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The text that will be inserted.
  std::string text;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace InsertText

namespace SendKeyEvent {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  VirtualKeyboardEvent key_event;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SendKeyEvent

namespace HideKeyboard {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace HideKeyboard

namespace SetHotrodKeyboard {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  bool enable;


 private:
  Params();
};

}  // namespace SetHotrodKeyboard

namespace LockKeyboard {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  bool lock;


 private:
  Params();
};

}  // namespace LockKeyboard

namespace KeyboardLoaded {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace KeyboardLoaded

namespace GetKeyboardConfig {

namespace Results {

base::Value::List Create(const KeyboardConfig& config);
}  // namespace Results

}  // namespace GetKeyboardConfig

namespace OpenSettings {

}  // namespace OpenSettings

namespace OpenSuggestionSettings {

}  // namespace OpenSuggestionSettings

namespace SetContainerBehavior {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Optional parameters for new container behavior.
  ContainerBehaviorOptions options;


 private:
  Params();
};

namespace Results {

// Whether the container mode changed successfully
base::Value::List Create(bool success);
}  // namespace Results

}  // namespace SetContainerBehavior

namespace SetDraggableArea {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The value of draggable rect area of floating keyboard.
  Bounds bounds;


 private:
  Params();
};

}  // namespace SetDraggableArea

namespace SetKeyboardState {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The value of the virtual keyboard state to change to.
  KeyboardState state;


 private:
  Params();
};

}  // namespace SetKeyboardState

namespace SetOccludedBounds {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // List of rectangles representing regions occluded by the keyboard.
  std::vector<Bounds> bounds_list;


 private:
  Params();
};

}  // namespace SetOccludedBounds

namespace SetHitTestBounds {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // List of rectangles representing regions where events targeting the keyboard
  // should be handled.
  std::vector<Bounds> bounds_list;


 private:
  Params();
};

}  // namespace SetHitTestBounds

namespace SetAreaToRemainOnScreen {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The bounds of the area inside the keyboard window, relative to the window
  // origin, that should not be moved off screen. Any area outside of this bounds
  // can be moved off screen.
  Bounds bounds;


 private:
  Params();
};

}  // namespace SetAreaToRemainOnScreen

namespace SetWindowBoundsInScreen {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // A rectangle defining the new bounds of the window in screen coordinates.
  Bounds bounds;


 private:
  Params();
};

}  // namespace SetWindowBoundsInScreen

namespace GetClipboardHistory {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct Options {
    Options();
    ~Options();
    Options(const Options&) = delete;
    Options& operator=(const Options&) = delete;
    Options(Options&& rhs);
    Options& operator=(Options&& rhs);

    // Populates a Options object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Options& out);

    // Populates a Options object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Options& out);

    // Creates a deep copy of Options.
    Options Clone() const;

    // Creates a Options object from a base::Value::Dict, or nullopt on failure.
    static absl::optional<Options> FromValue(const base::Value::Dict& value);

    // Creates a Options object from a base::Value, or nullopt on failure.
    static absl::optional<Options> FromValue(const base::Value& value);

    // A filter represented as a list of clipboard item ids. getClipboardHistory
    // will only return the items in this list. If this list is empty,
    // getClipboardHistory will return all clipboard items in the history.
    absl::optional<std::vector<std::string>> item_ids;

  };


  Options options;


 private:
  Params();
};

namespace Results {

// List of clipboard items corresponding to the requested items (or everything
// if 'itemIds' was not specified).
base::Value::List Create(const std::vector<ClipboardItem>& clipboard_history);
}  // namespace Results

}  // namespace GetClipboardHistory

namespace PasteClipboardItem {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The unique id which identifies this clipboard item.
  std::string item_id;


 private:
  Params();
};

}  // namespace PasteClipboardItem

namespace DeleteClipboardItem {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The unique id which identifies this clipboard item.
  std::string item_id;


 private:
  Params();
};

}  // namespace DeleteClipboardItem

//
// Events
//

namespace OnBoundsChanged {

extern const char kEventName[];  // "virtualKeyboardPrivate.onBoundsChanged"

// The virtual keyboard bounds
base::Value::List Create(const Bounds& bounds);
}  // namespace OnBoundsChanged

namespace OnKeyboardClosed {

extern const char kEventName[];  // "virtualKeyboardPrivate.onKeyboardClosed"

base::Value::List Create();
}  // namespace OnKeyboardClosed

namespace OnKeyboardConfigChanged {

extern const char kEventName[];  // "virtualKeyboardPrivate.onKeyboardConfigChanged"

// The virtual keyboard config
base::Value::List Create(const KeyboardConfig& config);
}  // namespace OnKeyboardConfigChanged

namespace OnClipboardHistoryChanged {

extern const char kEventName[];  // "virtualKeyboardPrivate.onClipboardHistoryChanged"

// A list of ids for all current items in the clipboard history.
base::Value::List Create(const std::vector<std::string>& item_ids);
}  // namespace OnClipboardHistoryChanged

namespace OnClipboardItemUpdated {

extern const char kEventName[];  // "virtualKeyboardPrivate.onClipboardItemUpdated"

// An existing clipboard history item with changed data
base::Value::List Create(const ClipboardItem& clipboard_history_item);
}  // namespace OnClipboardItemUpdated

namespace OnColorProviderChanged {

extern const char kEventName[];  // "virtualKeyboardPrivate.onColorProviderChanged"

base::Value::List Create();
}  // namespace OnColorProviderChanged

}  // namespace virtual_keyboard_private
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_VIRTUAL_KEYBOARD_PRIVATE_H__
