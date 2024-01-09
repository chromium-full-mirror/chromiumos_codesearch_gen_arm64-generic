// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/windows.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_WINDOWS_H__
#define CHROME_COMMON_EXTENSIONS_API_WINDOWS_H__

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
namespace tabs {
struct Tab;
}  // namespace tabs
}  // namespace api
}  // namespace extensions

namespace extensions {
namespace api {
namespace windows {

//
// Properties
//

// The windowId value that represents the absence of a Chrome browser window.
extern const int WINDOW_ID_NONE;

// The windowId value that represents the <a
// href='windows#current-window'>current window</a>.
extern const int WINDOW_ID_CURRENT;

//
// Types
//

// The type of browser window this is. In some circumstances a window may not be
// assigned a <code>type</code> property; for example, when querying closed
// windows from the $(ref:sessions) API.
enum class WindowType {
  kNone = 0,
  kNormal,
  kPopup,
  kPanel,
  kApp,
  kDevtools,
  kMaxValue = kDevtools,
};


const char* ToString(WindowType as_enum);
WindowType ParseWindowType(base::StringPiece as_string);
std::u16string GetWindowTypeParseError(base::StringPiece as_string);

// The state of this browser window. In some circumstances a window may not be
// assigned a <code>state</code> property; for example, when querying closed
// windows from the $(ref:sessions) API.
enum class WindowState {
  kNone = 0,
  kNormal,
  kMinimized,
  kMaximized,
  kFullscreen,
  kLockedFullscreen,
  kMaxValue = kLockedFullscreen,
};


const char* ToString(WindowState as_enum);
WindowState ParseWindowState(base::StringPiece as_string);
std::u16string GetWindowStateParseError(base::StringPiece as_string);

struct Window {
  Window();
  ~Window();
  Window(const Window&) = delete;
  Window& operator=(const Window&) = delete;
  Window(Window&& rhs) noexcept;
  Window& operator=(Window&& rhs) noexcept;

  // Populates a Window object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Window& out);

  // Populates a Window object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Window& out);

  // Creates a deep copy of Window.
  Window Clone() const;

  // Creates a Window object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Window> FromValue(const base::Value::Dict& value);

  // Creates a Window object from a base::Value, or nullopt on failure.
  static std::optional<Window> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisWindow object.
  base::Value::Dict ToValue() const;

  // The ID of the window. Window IDs are unique within a browser session. In some
  // circumstances a window may not be assigned an <code>ID</code> property; for
  // example, when querying windows using the $(ref:sessions) API, in which case a
  // session ID may be present.
  std::optional<int> id;

  // Whether the window is currently the focused window.
  bool focused;

  // The offset of the window from the top edge of the screen in pixels. In some
  // circumstances a window may not be assigned a <code>top</code> property; for
  // example, when querying closed windows from the $(ref:sessions) API.
  std::optional<int> top;

  // The offset of the window from the left edge of the screen in pixels. In some
  // circumstances a window may not be assigned a <code>left</code> property; for
  // example, when querying closed windows from the $(ref:sessions) API.
  std::optional<int> left;

  // The width of the window, including the frame, in pixels. In some
  // circumstances a window may not be assigned a <code>width</code> property; for
  // example, when querying closed windows from the $(ref:sessions) API.
  std::optional<int> width;

  // The height of the window, including the frame, in pixels. In some
  // circumstances a window may not be assigned a <code>height</code> property;
  // for example, when querying closed windows from the $(ref:sessions) API.
  std::optional<int> height;

  // Array of $(ref:tabs.Tab) objects representing the current tabs in the window.
  std::optional<std::vector<extensions::api::tabs::Tab>> tabs;

  // Whether the window is incognito.
  bool incognito;

  // The type of browser window this is.
  WindowType type;

  // The state of this browser window.
  WindowState state;

  // Whether the window is set to be always on top.
  bool always_on_top;

  // The session ID used to uniquely identify a window, obtained from the
  // $(ref:sessions) API.
  std::optional<std::string> session_id;

};

// Specifies what type of browser window to create. 'panel' is deprecated and is
// available only to existing allowlisted extensions on Chrome OS.
enum class CreateType {
  kNone = 0,
  kNormal,
  kPopup,
  kPanel,
  kMaxValue = kPanel,
};


const char* ToString(CreateType as_enum);
CreateType ParseCreateType(base::StringPiece as_string);
std::u16string GetCreateTypeParseError(base::StringPiece as_string);

struct QueryOptions {
  QueryOptions();
  ~QueryOptions();
  QueryOptions(const QueryOptions&) = delete;
  QueryOptions& operator=(const QueryOptions&) = delete;
  QueryOptions(QueryOptions&& rhs) noexcept;
  QueryOptions& operator=(QueryOptions&& rhs) noexcept;

  // Populates a QueryOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, QueryOptions& out);

  // Populates a QueryOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, QueryOptions& out);

  // Creates a deep copy of QueryOptions.
  QueryOptions Clone() const;

  // Creates a QueryOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<QueryOptions> FromValue(const base::Value::Dict& value);

  // Creates a QueryOptions object from a base::Value, or nullopt on failure.
  static std::optional<QueryOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisQueryOptions object.
  base::Value::Dict ToValue() const;

  // If true, the $(ref:windows.Window) object has a <var>tabs</var> property that
  // contains a list of the $(ref:tabs.Tab) objects. The <code>Tab</code> objects
  // only contain the <code>url</code>, <code>pendingUrl</code>,
  // <code>title</code>, and <code>favIconUrl</code> properties if the extension's
  // manifest file includes the <code>"tabs"</code> permission.
  std::optional<bool> populate;

  // If set, the $(ref:windows.Window) returned is filtered based on its type. If
  // unset, the default filter is set to <code>['normal', 'popup']</code>.
  std::optional<std::vector<WindowType>> window_types;

};


//
// Functions
//

namespace Get {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int window_id;

  std::optional<QueryOptions> query_options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const Window& window);
}  // namespace Results

}  // namespace Get

namespace GetCurrent {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::optional<QueryOptions> query_options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const Window& window);
}  // namespace Results

}  // namespace GetCurrent

namespace GetLastFocused {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::optional<QueryOptions> query_options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const Window& window);
}  // namespace Results

}  // namespace GetLastFocused

namespace GetAll {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::optional<QueryOptions> query_options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<Window>& windows);
}  // namespace Results

}  // namespace GetAll

namespace Create {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct CreateData {
    CreateData();
    ~CreateData();
    CreateData(const CreateData&) = delete;
    CreateData& operator=(const CreateData&) = delete;
    CreateData(CreateData&& rhs) noexcept;
    CreateData& operator=(CreateData&& rhs) noexcept;

    // Populates a CreateData object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, CreateData& out);

    // Populates a CreateData object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, CreateData& out);

    // Creates a deep copy of CreateData.
    CreateData Clone() const;

    // Creates a CreateData object from a base::Value::Dict, or nullopt on
    // failure.
    static std::optional<CreateData> FromValue(const base::Value::Dict& value);

    // Creates a CreateData object from a base::Value, or nullopt on failure.
    static std::optional<CreateData> FromValue(const base::Value& value);

    // A URL or array of URLs to open as tabs in the window. Fully-qualified URLs
    // must include a scheme, e.g., 'http://www.google.com', not 'www.google.com'.
    // Non-fully-qualified URLs are considered relative within the extension.
    // Defaults to the New Tab Page.
    struct Url {
      Url();
      ~Url();
      Url(const Url&) = delete;
      Url& operator=(const Url&) = delete;
      Url(Url&& rhs) noexcept;
      Url& operator=(Url&& rhs) noexcept;

      // Populates a Url object from a base::Value& instance. Returns whether |out|
      // was successfully populated.
      static bool Populate(const base::Value& value, Url& out);

      // Creates a deep copy of Url.
      Url Clone() const;

      // Creates a Url object from a base::Value, or nullopt on failure.
      static std::optional<Url> FromValue(const base::Value& value);
      // Choices:
      std::optional<std::string> as_string;
      std::optional<std::vector<std::string>> as_strings;
    };


    // A URL or array of URLs to open as tabs in the window. Fully-qualified URLs
    // must include a scheme, e.g., 'http://www.google.com', not 'www.google.com'.
    // Non-fully-qualified URLs are considered relative within the extension.
    // Defaults to the New Tab Page.
    std::optional<Url> url;

    // The ID of the tab to add to the new window.
    std::optional<int> tab_id;

    // The number of pixels to position the new window from the left edge of the
    // screen. If not specified, the new window is offset naturally from the last
    // focused window. This value is ignored for panels.
    std::optional<int> left;

    // The number of pixels to position the new window from the top edge of the
    // screen. If not specified, the new window is offset naturally from the last
    // focused window. This value is ignored for panels.
    std::optional<int> top;

    // The width in pixels of the new window, including the frame. If not specified,
    // defaults to a natural width.
    std::optional<int> width;

    // The height in pixels of the new window, including the frame. If not
    // specified, defaults to a natural height.
    std::optional<int> height;

    // If <code>true</code>, opens an active window. If <code>false</code>, opens an
    // inactive window.
    std::optional<bool> focused;

    // Whether the new window should be an incognito window.
    std::optional<bool> incognito;

    // Specifies what type of browser window to create.
    CreateType type;

    // The initial state of the window. The <code>minimized</code>,
    // <code>maximized</code>, and <code>fullscreen</code> states cannot be combined
    // with <code>left</code>, <code>top</code>, <code>width</code>, or
    // <code>height</code>.
    WindowState state;

    // If <code>true</code>, the newly-created window's 'window.opener' is set to
    // the caller and is in the same <a
    // href="https://www.w3.org/TR/html51/browsers.html#unit-of-related-browsing-contexts">unit of related browsing contexts</a> as the caller.
    std::optional<bool> set_self_as_opener;

  };


  std::optional<CreateData> create_data;


 private:
  Params();
};

namespace Results {

// Contains details about the created window.
base::Value::List Create(const Window& window);
}  // namespace Results

}  // namespace Create

namespace Update {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct UpdateInfo {
    UpdateInfo();
    ~UpdateInfo();
    UpdateInfo(const UpdateInfo&) = delete;
    UpdateInfo& operator=(const UpdateInfo&) = delete;
    UpdateInfo(UpdateInfo&& rhs) noexcept;
    UpdateInfo& operator=(UpdateInfo&& rhs) noexcept;

    // Populates a UpdateInfo object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, UpdateInfo& out);

    // Populates a UpdateInfo object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, UpdateInfo& out);

    // Creates a deep copy of UpdateInfo.
    UpdateInfo Clone() const;

    // Creates a UpdateInfo object from a base::Value::Dict, or nullopt on
    // failure.
    static std::optional<UpdateInfo> FromValue(const base::Value::Dict& value);

    // Creates a UpdateInfo object from a base::Value, or nullopt on failure.
    static std::optional<UpdateInfo> FromValue(const base::Value& value);

    // The offset from the left edge of the screen to move the window to in pixels.
    // This value is ignored for panels.
    std::optional<int> left;

    // The offset from the top edge of the screen to move the window to in pixels.
    // This value is ignored for panels.
    std::optional<int> top;

    // The width to resize the window to in pixels. This value is ignored for
    // panels.
    std::optional<int> width;

    // The height to resize the window to in pixels. This value is ignored for
    // panels.
    std::optional<int> height;

    // If <code>true</code>, brings the window to the front; cannot be combined with
    // the state 'minimized'. If <code>false</code>, brings the next window in the
    // z-order to the front; cannot be combined with the state 'fullscreen' or
    // 'maximized'.
    std::optional<bool> focused;

    // If <code>true</code>, causes the window to be displayed in a manner that
    // draws the user's attention to the window, without changing the focused
    // window. The effect lasts until the user changes focus to the window. This
    // option has no effect if the window already has focus. Set to
    // <code>false</code> to cancel a previous <code>drawAttention</code> request.
    std::optional<bool> draw_attention;

    // The new state of the window. The 'minimized', 'maximized', and 'fullscreen'
    // states cannot be combined with 'left', 'top', 'width', or 'height'.
    WindowState state;

  };


  int window_id;

  UpdateInfo update_info;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const Window& window);
}  // namespace Results

}  // namespace Update

namespace Remove {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int window_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Remove

//
// Events
//

namespace OnCreated {

extern const char kEventName[];  // "windows.onCreated"

// Details of the created window.
base::Value::List Create(const Window& window);
}  // namespace OnCreated

namespace OnRemoved {

extern const char kEventName[];  // "windows.onRemoved"

// ID of the removed window.
base::Value::List Create(int window_id);
}  // namespace OnRemoved

namespace OnFocusChanged {

extern const char kEventName[];  // "windows.onFocusChanged"

// ID of the newly-focused window.
base::Value::List Create(int window_id);
}  // namespace OnFocusChanged

namespace OnBoundsChanged {

extern const char kEventName[];  // "windows.onBoundsChanged"

// Details of the window. The tabs will not be populated for the window.
base::Value::List Create(const Window& window);
}  // namespace OnBoundsChanged

}  // namespace windows
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_WINDOWS_H__
