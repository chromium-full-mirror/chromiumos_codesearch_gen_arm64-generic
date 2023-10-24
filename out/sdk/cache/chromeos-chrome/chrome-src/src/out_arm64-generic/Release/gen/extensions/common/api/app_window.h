// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/app_window.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_APP_WINDOW_H__
#define EXTENSIONS_COMMON_API_APP_WINDOW_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"
#include "extensions/common/api/app_runtime.h"


namespace extensions {
namespace api {
namespace app_window {

//
// Types
//

struct ContentBounds {
  ContentBounds();
  ~ContentBounds();
  ContentBounds(const ContentBounds&) = delete;
  ContentBounds& operator=(const ContentBounds&) = delete;
  ContentBounds(ContentBounds&& rhs);
  ContentBounds& operator=(ContentBounds&& rhs);

  // Populates a ContentBounds object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ContentBounds& out);

  // Populates a ContentBounds object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ContentBounds& out);

  // Creates a deep copy of ContentBounds.
  ContentBounds Clone() const;

  // Creates a ContentBounds object from a base::Value, or NULL on failure.
  static std::unique_ptr<ContentBounds> FromValueDeprecated(const base::Value& value);

  // Creates a ContentBounds object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ContentBounds> FromValue(const base::Value::Dict& value);

  // Creates a ContentBounds object from a base::Value, or nullopt on failure.
  static absl::optional<ContentBounds> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisContentBounds object.
  base::Value::Dict ToValue() const;

  absl::optional<int> left;

  absl::optional<int> top;

  absl::optional<int> width;

  absl::optional<int> height;

};

struct BoundsSpecification {
  BoundsSpecification();
  ~BoundsSpecification();
  BoundsSpecification(const BoundsSpecification&) = delete;
  BoundsSpecification& operator=(const BoundsSpecification&) = delete;
  BoundsSpecification(BoundsSpecification&& rhs);
  BoundsSpecification& operator=(BoundsSpecification&& rhs);

  // Populates a BoundsSpecification object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, BoundsSpecification& out);

  // Populates a BoundsSpecification object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, BoundsSpecification& out);

  // Creates a deep copy of BoundsSpecification.
  BoundsSpecification Clone() const;

  // Creates a BoundsSpecification object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<BoundsSpecification> FromValueDeprecated(const base::Value& value);

  // Creates a BoundsSpecification object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<BoundsSpecification> FromValue(const base::Value::Dict& value);

  // Creates a BoundsSpecification object from a base::Value, or nullopt on
  // failure.
  static absl::optional<BoundsSpecification> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisBoundsSpecification object.
  base::Value::Dict ToValue() const;

  // The X coordinate of the content or window.
  absl::optional<int> left;

  // The Y coordinate of the content or window.
  absl::optional<int> top;

  // The width of the content or window.
  absl::optional<int> width;

  // The height of the content or window.
  absl::optional<int> height;

  // The minimum width of the content or window.
  absl::optional<int> min_width;

  // The minimum height of the content or window.
  absl::optional<int> min_height;

  // The maximum width of the content or window.
  absl::optional<int> max_width;

  // The maximum height of the content or window.
  absl::optional<int> max_height;

};

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

  // This property can be used to read or write the current X coordinate of the
  // content or window.
  int left;

  // This property can be used to read or write the current Y coordinate of the
  // content or window.
  int top;

  // This property can be used to read or write the current width of the content
  // or window.
  int width;

  // This property can be used to read or write the current height of the content
  // or window.
  int height;

  // This property can be used to read or write the current minimum width of the
  // content or window. A value of <code>null</code> indicates 'unspecified'.
  absl::optional<int> min_width;

  // This property can be used to read or write the current minimum height of the
  // content or window. A value of <code>null</code> indicates 'unspecified'.
  absl::optional<int> min_height;

  // This property can be used to read or write the current maximum width of the
  // content or window. A value of <code>null</code> indicates 'unspecified'.
  absl::optional<int> max_width;

  // This property can be used to read or write the current maximum height of the
  // content or window. A value of <code>null</code> indicates 'unspecified'.
  absl::optional<int> max_height;

  // Set the left and top position of the content or window.
  base::Value::Dict set_position;

  // Set the width and height of the content or window.
  base::Value::Dict set_size;

  // Set the minimum size constraints of the content or window. The minimum width
  // or height can be set to <code>null</code> to remove the constraint. A value
  // of <code>undefined</code> will leave a constraint unchanged.
  base::Value::Dict set_minimum_size;

  // Set the maximum size constraints of the content or window. The maximum width
  // or height can be set to <code>null</code> to remove the constraint. A value
  // of <code>undefined</code> will leave a constraint unchanged.
  base::Value::Dict set_maximum_size;

};

struct FrameOptions {
  FrameOptions();
  ~FrameOptions();
  FrameOptions(const FrameOptions&) = delete;
  FrameOptions& operator=(const FrameOptions&) = delete;
  FrameOptions(FrameOptions&& rhs);
  FrameOptions& operator=(FrameOptions&& rhs);

  // Populates a FrameOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FrameOptions& out);

  // Populates a FrameOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, FrameOptions& out);

  // Creates a deep copy of FrameOptions.
  FrameOptions Clone() const;

  // Creates a FrameOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<FrameOptions> FromValueDeprecated(const base::Value& value);

  // Creates a FrameOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<FrameOptions> FromValue(const base::Value::Dict& value);

  // Creates a FrameOptions object from a base::Value, or nullopt on failure.
  static absl::optional<FrameOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFrameOptions object.
  base::Value::Dict ToValue() const;

  // <p>Frame type: <code>none</code> or <code>chrome</code> (defaults to
  // <code>chrome</code>).</p><p>For <code>none</code>, the
  // <code>-webkit-app-region</code> CSS property can be used to apply
  // draggability to the app's window.</p><p><code>-webkit-app-region: drag</code>
  // can be used to mark regions draggable. <code>no-drag</code> can be used to
  // disable this style on nested elements.</p>
  absl::optional<std::string> type;

  // <p>Allows the frame color to be set. Frame coloring is only available if the
  // frame type is <code>chrome</code>.</p><p>Frame coloring is new in Chrome
  // 36.</p>
  absl::optional<std::string> color;

  // <p>Allows the frame color of the window when active to be set. Frame coloring
  // is only available if the frame type is <code>chrome</code>.</p><p>Frame
  // coloring is only available if the frame type is
  // <code>chrome</code>.</p><p>Frame coloring is new in Chrome 36.</p>
  absl::optional<std::string> active_color;

  // <p>Allows the frame color of the window when inactive to be set differently
  // to the active color. Frame coloring is only available if the frame type is
  // <code>chrome</code>.</p><p><code>inactiveColor</code> must be used in
  // conjunction with <code> color</code>.</p><p>Frame coloring is new in Chrome
  // 36.</p>
  absl::optional<std::string> inactive_color;

};

// State of a window: normal, fullscreen, maximized, minimized.
enum class State {
  kNone = 0,
  kNormal,
  kFullscreen,
  kMaximized,
  kMinimized,
  kMaxValue = kMinimized,
};


const char* ToString(State as_enum);
State ParseState(base::StringPiece as_string);
std::u16string GetStateParseError(base::StringPiece as_string);

// Specifies the type of window to create.
enum class WindowType {
  kNone = 0,
  kShell,
  kPanel,
  kMaxValue = kPanel,
};


const char* ToString(WindowType as_enum);
WindowType ParseWindowType(base::StringPiece as_string);
std::u16string GetWindowTypeParseError(base::StringPiece as_string);

struct CreateWindowOptions {
  CreateWindowOptions();
  ~CreateWindowOptions();
  CreateWindowOptions(const CreateWindowOptions&) = delete;
  CreateWindowOptions& operator=(const CreateWindowOptions&) = delete;
  CreateWindowOptions(CreateWindowOptions&& rhs);
  CreateWindowOptions& operator=(CreateWindowOptions&& rhs);

  // Populates a CreateWindowOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CreateWindowOptions& out);

  // Populates a CreateWindowOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CreateWindowOptions& out);

  // Creates a deep copy of CreateWindowOptions.
  CreateWindowOptions Clone() const;

  // Creates a CreateWindowOptions object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<CreateWindowOptions> FromValueDeprecated(const base::Value& value);

  // Creates a CreateWindowOptions object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<CreateWindowOptions> FromValue(const base::Value::Dict& value);

  // Creates a CreateWindowOptions object from a base::Value, or nullopt on
  // failure.
  static absl::optional<CreateWindowOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCreateWindowOptions object.
  base::Value::Dict ToValue() const;

  // <p>Frame type: <code>none</code> or <code>chrome</code> (defaults to
  // <code>chrome</code>). For <code>none</code>, the
  // <code>-webkit-app-region</code> CSS property can be used to apply
  // draggability to the app's window. <code>-webkit-app-region: drag</code> can
  // be used to mark regions draggable. <code>no-drag</code> can be used to
  // disable this style on nested elements.</p><p>Use of <code>FrameOptions</code>
  // is new in M36.</p>
  struct Frame {
    Frame();
    ~Frame();
    Frame(const Frame&) = delete;
    Frame& operator=(const Frame&) = delete;
    Frame(Frame&& rhs);
    Frame& operator=(Frame&& rhs);

    // Populates a Frame object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Frame& out);

    // Creates a deep copy of Frame.
    Frame Clone() const;

    // Creates a Frame object from a base::Value, or nullopt on failure.
    static absl::optional<Frame> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisFrame
    // object.
    base::Value ToValue() const;
    // Choices:
    absl::optional<std::string> as_string;
    absl::optional<FrameOptions> as_frame_options;
  };


  // Id to identify the window. This will be used to remember the size and
  // position of the window and restore that geometry when a window with the same
  // id is later opened. If a window with a given id is created while another
  // window with the same id already exists, the currently opened window will be
  // focused instead of creating a new window.
  absl::optional<std::string> id;

  // <p>Used to specify the initial position, initial size and constraints of the
  // window's content (excluding window decorations). If an <code>id</code> is
  // also specified and a window with a matching <code>id</code> has been shown
  // before, the remembered bounds will be used instead.</p><p>Note that the
  // padding between the inner and outer bounds is determined by the OS. Therefore
  // setting the same bounds property for both the <code>innerBounds</code> and
  // <code>outerBounds</code> will result in an error.</p><p>This property is new
  // in Chrome 36.</p>
  absl::optional<BoundsSpecification> inner_bounds;

  // <p>Used to specify the initial position, initial size and constraints of the
  // window (including window decorations such as the title bar and frame). If an
  // <code>id</code> is also specified and a window with a matching
  // <code>id</code> has been shown before, the remembered bounds will be used
  // instead.</p><p>Note that the padding between the inner and outer bounds is
  // determined by the OS. Therefore setting the same bounds property for both the
  // <code>innerBounds</code> and <code>outerBounds</code> will result in an
  // error.</p><p>This property is new in Chrome 36.</p>
  absl::optional<BoundsSpecification> outer_bounds;

  // Default width of the window.
  absl::optional<int> default_width;

  // Default height of the window.
  absl::optional<int> default_height;

  // Default X coordinate of the window.
  absl::optional<int> default_left;

  // Default Y coordinate of the window.
  absl::optional<int> default_top;

  // Width of the window.
  absl::optional<int> width;

  // Height of the window.
  absl::optional<int> height;

  // X coordinate of the window.
  absl::optional<int> left;

  // Y coordinate of the window.
  absl::optional<int> top;

  // Minimum width of the window.
  absl::optional<int> min_width;

  // Minimum height of the window.
  absl::optional<int> min_height;

  // Maximum width of the window.
  absl::optional<int> max_width;

  // Maximum height of the window.
  absl::optional<int> max_height;

  // Type of window to create.
  WindowType type;

  // Creates a special ime window. This window is not focusable and can be stacked
  // above virtual keyboard window. This is restriced to component ime extensions.
  // Requires the <code>app.window.ime</code> API permission.
  absl::optional<bool> ime;

  // If true, the window will have its own shelf icon. Otherwise the window will
  // be grouped in the shelf with other windows that are associated with the app.
  // Defaults to false. If showInShelf is set to true you need to specify an id
  // for the window.
  absl::optional<bool> show_in_shelf;

  // URL of the window icon. A window can have its own icon when showInShelf is
  // set to true. The URL should be a global or an extension local URL.
  absl::optional<std::string> icon;

  // <p>Frame type: <code>none</code> or <code>chrome</code> (defaults to
  // <code>chrome</code>). For <code>none</code>, the
  // <code>-webkit-app-region</code> CSS property can be used to apply
  // draggability to the app's window. <code>-webkit-app-region: drag</code> can
  // be used to mark regions draggable. <code>no-drag</code> can be used to
  // disable this style on nested elements.</p><p>Use of <code>FrameOptions</code>
  // is new in M36.</p>
  absl::optional<Frame> frame;

  // Size and position of the content in the window (excluding the titlebar). If
  // an id is also specified and a window with a matching id has been shown
  // before, the remembered bounds of the window will be used instead.
  absl::optional<ContentBounds> bounds;

  // Enable window background transparency. Only supported in ash. Requires the
  // <code>app.window.alpha</code> API permission.
  absl::optional<bool> alpha_enabled;

  // The initial state of the window, allowing it to be created already
  // fullscreen, maximized, or minimized. Defaults to 'normal'.
  State state;

  // If true, the window will be created in a hidden state. Call show() on the
  // window to show it once it has been created. Defaults to false.
  absl::optional<bool> hidden;

  // If true, the window will be resizable by the user. Defaults to true.
  absl::optional<bool> resizable;

  // By default if you specify an id for the window, the window will only be
  // created if another window with the same id doesn't already exist. If a window
  // with the same id already exists that window is activated instead. If you do
  // want to create multiple windows with the same id, you can set this property
  // to false.
  absl::optional<bool> singleton;

  // <p>If true, the window will stay above most other windows. If there are
  // multiple windows of this kind, the currently focused window will be in the
  // foreground. Requires the <code>alwaysOnTopWindows</code> permission. Defaults
  // to false.</p><p>Call <code>setAlwaysOnTop()</code> on the window to change
  // this property after creation.</p>
  absl::optional<bool> always_on_top;

  // If true, the window will be focused when created. Defaults to true.
  absl::optional<bool> focused;

  // If true, and supported by the platform, the window will be visible on all
  // workspaces.
  absl::optional<bool> visible_on_all_workspaces;

  // <p>If set, the action that is intended to be handled by the window on
  // lockscreen. This has to be set to create an app window visible on the   lock
  // screen. The app window should be created only in response to an   app launch
  // request for handling an action from the lock screen. App   window creation
  // will fail if the app was not launched to handle the   action.   </p> <p>This
  // is <b>Chrome OS only</b>.</p>
  extensions::api::app_runtime::ActionType lock_screen_action;

};

struct AppWindow {
  AppWindow();
  ~AppWindow();
  AppWindow(const AppWindow&) = delete;
  AppWindow& operator=(const AppWindow&) = delete;
  AppWindow(AppWindow&& rhs);
  AppWindow& operator=(AppWindow&& rhs);

  // Populates a AppWindow object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, AppWindow& out);

  // Populates a AppWindow object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, AppWindow& out);

  // Creates a deep copy of AppWindow.
  AppWindow Clone() const;

  // Creates a AppWindow object from a base::Value, or NULL on failure.
  static std::unique_ptr<AppWindow> FromValueDeprecated(const base::Value& value);

  // Creates a AppWindow object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<AppWindow> FromValue(const base::Value::Dict& value);

  // Creates a AppWindow object from a base::Value, or nullopt on failure.
  static absl::optional<AppWindow> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAppWindow object.
  base::Value::Dict ToValue() const;

  // The JavaScript 'window' object for the created child.
  struct ContentWindow {
    ContentWindow();
    ~ContentWindow();
    ContentWindow(const ContentWindow&) = delete;
    ContentWindow& operator=(const ContentWindow&) = delete;
    ContentWindow(ContentWindow&& rhs);
    ContentWindow& operator=(ContentWindow&& rhs);

    // Populates a ContentWindow object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, ContentWindow& out);

    // Populates a ContentWindow object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, ContentWindow& out);

    // Creates a deep copy of ContentWindow.
    ContentWindow Clone() const;

    // Creates a ContentWindow object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<ContentWindow> FromValue(const base::Value::Dict& value);

    // Creates a ContentWindow object from a base::Value, or nullopt on failure.
    static absl::optional<ContentWindow> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisContentWindow object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };


  // Focus the window.
  base::Value::Dict focus;

  // <p>Fullscreens the window.</p><p>The user will be able to restore the window
  // by pressing ESC. An application can prevent the fullscreen state to be left
  // when ESC is pressed by requesting the
  // <code>app.window.fullscreen.overrideEsc</code> permission and canceling the
  // event by calling .preventDefault(), in the keydown and keyup handlers, like
  // this:</p><p><code>window.onkeydown = window.onkeyup = function(e) { if
  // (e.keyCode == 27 /* ESC */) { e.preventDefault(); } };</code></p><p>Note
  // <code>window.fullscreen()</code> will cause the entire window to become
  // fullscreen and does not require a user gesture. The HTML5 fullscreen API can
  // also be used to enter fullscreen mode (see <a
  // href="http://developer.chrome.com/apps/api_other.html">Web APIs</a> for more
  // details).</p>
  base::Value::Dict fullscreen;

  // Is the window fullscreen? This will be true if the window has been created
  // fullscreen or was made fullscreen via the <code>AppWindow</code> or HTML5
  // fullscreen APIs.
  base::Value::Dict is_fullscreen;

  // Minimize the window.
  base::Value::Dict minimize;

  // Is the window minimized?
  base::Value::Dict is_minimized;

  // Maximize the window.
  base::Value::Dict maximize;

  // Is the window maximized?
  base::Value::Dict is_maximized;

  // Restore the window, exiting a maximized, minimized, or fullscreen state.
  base::Value::Dict restore;

  // Move the window to the position (|left|, |top|).
  base::Value::Dict move_to;

  // Resize the window to |width|x|height| pixels in size.
  base::Value::Dict resize_to;

  // Draw attention to the window.
  base::Value::Dict draw_attention;

  // Clear attention to the window.
  base::Value::Dict clear_attention;

  // Close the window.
  base::Value::Dict close;

  // Show the window. Does nothing if the window is already visible. Focus the
  // window if |focused| is set to true or omitted.
  base::Value::Dict show;

  // Hide the window. Does nothing if the window is already hidden.
  base::Value::Dict hide;

  // Set the app icon for the window (experimental). Currently this is only being
  // implemented on Ash. TODO(stevenjb): Investigate implementing this on Windows
  // and OSX.
  base::Value::Dict set_icon;

  // Is the window always on top?
  base::Value::Dict is_always_on_top;

  // Accessors for testing.
  bool has_frame_color;

  int active_frame_color;

  int inactive_frame_color;

  // Set whether the window should stay above most other windows. Requires the
  // <code>alwaysOnTopWindows</code> permission.
  base::Value::Dict set_always_on_top;

  // Can the window use alpha transparency? TODO(jackhou): Document this properly
  // before going to stable.
  base::Value::Dict alpha_enabled;

  // Set whether the window is visible on all workspaces. (Only for platforms that
  // support this).
  base::Value::Dict set_visible_on_all_workspaces;

  // The JavaScript 'window' object for the created child.
  ContentWindow content_window;

  // The id the window was created with.
  std::string id;

  // The position, size and constraints of the window's content, which does not
  // include window decorations. This property is new in Chrome 36.
  Bounds inner_bounds;

  // The position, size and constraints of the window, which includes window
  // decorations, such as the title bar and frame. This property is new in Chrome
  // 36.
  Bounds outer_bounds;

};


//
// Functions
//

namespace Create {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string url;

  absl::optional<CreateWindowOptions> options;


 private:
  Params();
};

namespace Results {

struct CreatedWindow {
  CreatedWindow();
  ~CreatedWindow();
  CreatedWindow(const CreatedWindow&) = delete;
  CreatedWindow& operator=(const CreatedWindow&) = delete;
  CreatedWindow(CreatedWindow&& rhs);
  CreatedWindow& operator=(CreatedWindow&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCreatedWindow object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


base::Value::List Create(const CreatedWindow& created_window);
}  // namespace Results

}  // namespace Create

}  // namespace app_window
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_APP_WINDOW_H__
