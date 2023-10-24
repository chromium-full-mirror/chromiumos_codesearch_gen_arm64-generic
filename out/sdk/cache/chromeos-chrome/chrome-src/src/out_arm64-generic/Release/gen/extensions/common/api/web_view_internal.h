// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/web_view_internal.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_WEB_VIEW_INTERNAL_H__
#define EXTENSIONS_COMMON_API_WEB_VIEW_INTERNAL_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"
#include "extensions/common/api/extension_types.h"


namespace extensions {
namespace api {
namespace web_view_internal {

//
// Properties
//

// The maximum number of times that $(ref:captureVisibleRegion) can be called
// per second. $(ref:captureVisibleRegion) is expensive and should not be called
// too often.
extern const int MAX_CAPTURE_VISIBLE_REGION_CALLS_PER_SECOND;

//
// Types
//

// A set of data types. Missing data types are interpreted as
// <code>false</code>.
struct DataTypeSet {
  DataTypeSet();
  ~DataTypeSet();
  DataTypeSet(const DataTypeSet&) = delete;
  DataTypeSet& operator=(const DataTypeSet&) = delete;
  DataTypeSet(DataTypeSet&& rhs);
  DataTypeSet& operator=(DataTypeSet&& rhs);

  // Populates a DataTypeSet object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DataTypeSet& out);

  // Populates a DataTypeSet object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, DataTypeSet& out);

  // Creates a deep copy of DataTypeSet.
  DataTypeSet Clone() const;

  // Creates a DataTypeSet object from a base::Value, or NULL on failure.
  static std::unique_ptr<DataTypeSet> FromValueDeprecated(const base::Value& value);

  // Creates a DataTypeSet object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<DataTypeSet> FromValue(const base::Value::Dict& value);

  // Creates a DataTypeSet object from a base::Value, or nullopt on failure.
  static absl::optional<DataTypeSet> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDataTypeSet object.
  base::Value::Dict ToValue() const;

  // Websites' appcaches.
  absl::optional<bool> appcache;

  // The Websites' cookies. This will remove both session and persistent cookies
  absl::optional<bool> cookies;

  // The Websites' session cookies.
  absl::optional<bool> session_cookies;

  // The Websites' persistent cookies.
  absl::optional<bool> persistent_cookies;

  // Websites' file systems.
  absl::optional<bool> file_systems;

  // Websites' IndexedDB data.
  absl::optional<bool> indexed_db;

  // Websites' local storage data.
  absl::optional<bool> local_storage;

  // Websites' WebSQL data.
  absl::optional<bool> web_sql;

  // The Websites' cache data. Note: when removing data, this clears the
  // <em>entire</em> cache: it is not limited to the range you specify.
  absl::optional<bool> cache;

};

// Options that determine exactly what data will be removed.
struct RemovalOptions {
  RemovalOptions();
  ~RemovalOptions();
  RemovalOptions(const RemovalOptions&) = delete;
  RemovalOptions& operator=(const RemovalOptions&) = delete;
  RemovalOptions(RemovalOptions&& rhs);
  RemovalOptions& operator=(RemovalOptions&& rhs);

  // Populates a RemovalOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RemovalOptions& out);

  // Populates a RemovalOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RemovalOptions& out);

  // Creates a deep copy of RemovalOptions.
  RemovalOptions Clone() const;

  // Creates a RemovalOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<RemovalOptions> FromValueDeprecated(const base::Value& value);

  // Creates a RemovalOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<RemovalOptions> FromValue(const base::Value::Dict& value);

  // Creates a RemovalOptions object from a base::Value, or nullopt on failure.
  static absl::optional<RemovalOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRemovalOptions object.
  base::Value::Dict ToValue() const;

  // Remove data accumulated on or after this date, represented in milliseconds
  // since the epoch (accessible via the <code>getTime</code> method of the
  // JavaScript <code>Date</code> object). If absent, defaults to 0 (which would
  // remove all browsing data).
  absl::optional<double> since;

};

// Defines the how zooming is handled in the webview.
enum class ZoomMode {
  kNone = 0,
  kPerOrigin,
  kPerView,
  kDisabled,
  kMaxValue = kDisabled,
};


const char* ToString(ZoomMode as_enum);
ZoomMode ParseZoomMode(base::StringPiece as_string);
std::u16string GetZoomModeParseError(base::StringPiece as_string);

// Determines what to do with the active match after the find session has ended.
// 'clear' will clear the highlighting over the active match; 'keep' will keep
// the active match highlighted; 'activate' will keep the active match
// highlighted and simulate a user click on that match.
enum class StopFindingAction {
  kNone = 0,
  kClear,
  kKeep,
  kActivate,
  kMaxValue = kActivate,
};


const char* ToString(StopFindingAction as_enum);
StopFindingAction ParseStopFindingAction(base::StringPiece as_string);
std::u16string GetStopFindingActionParseError(base::StringPiece as_string);

enum class SetPermissionAction {
  kNone = 0,
  kAllow,
  kDeny,
  kDefault,
  kMaxValue = kDefault,
};


const char* ToString(SetPermissionAction as_enum);
SetPermissionAction ParseSetPermissionAction(base::StringPiece as_string);
std::u16string GetSetPermissionActionParseError(base::StringPiece as_string);

// The type of injection item: code or a set of files.
struct InjectionItems {
  InjectionItems();
  ~InjectionItems();
  InjectionItems(const InjectionItems&) = delete;
  InjectionItems& operator=(const InjectionItems&) = delete;
  InjectionItems(InjectionItems&& rhs);
  InjectionItems& operator=(InjectionItems&& rhs);

  // Populates a InjectionItems object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InjectionItems& out);

  // Populates a InjectionItems object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, InjectionItems& out);

  // Creates a deep copy of InjectionItems.
  InjectionItems Clone() const;

  // Creates a InjectionItems object from a base::Value, or NULL on failure.
  static std::unique_ptr<InjectionItems> FromValueDeprecated(const base::Value& value);

  // Creates a InjectionItems object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<InjectionItems> FromValue(const base::Value::Dict& value);

  // Creates a InjectionItems object from a base::Value, or nullopt on failure.
  static absl::optional<InjectionItems> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInjectionItems object.
  base::Value::Dict ToValue() const;

  // JavaScript code or CSS to be injected into matching pages.
  absl::optional<std::string> code;

  // The list of JavaScript or CSS files to be injected into matching pages. These
  // are injected in the order they appear in this array.
  absl::optional<std::vector<std::string>> files;

};

// Details of the content script to inject.
struct ContentScriptDetails {
  ContentScriptDetails();
  ~ContentScriptDetails();
  ContentScriptDetails(const ContentScriptDetails&) = delete;
  ContentScriptDetails& operator=(const ContentScriptDetails&) = delete;
  ContentScriptDetails(ContentScriptDetails&& rhs);
  ContentScriptDetails& operator=(ContentScriptDetails&& rhs);

  // Populates a ContentScriptDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ContentScriptDetails& out);

  // Populates a ContentScriptDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ContentScriptDetails& out);

  // Creates a deep copy of ContentScriptDetails.
  ContentScriptDetails Clone() const;

  // Creates a ContentScriptDetails object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ContentScriptDetails> FromValueDeprecated(const base::Value& value);

  // Creates a ContentScriptDetails object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<ContentScriptDetails> FromValue(const base::Value::Dict& value);

  // Creates a ContentScriptDetails object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ContentScriptDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisContentScriptDetails object.
  base::Value::Dict ToValue() const;

  // The name of the content script to inject.
  std::string name;

  // Specifies which pages this content script will be injected into.
  std::vector<std::string> matches;

  // Excludes pages that this content script would otherwise be injected into.
  absl::optional<std::vector<std::string>> exclude_matches;

  // Whether to insert the content script on about:blank and about:srcdoc. Content
  // scripts will only be injected on pages when their inherit URL is matched by
  // one of the declared patterns in the matches field. The inherit URL is the URL
  // of the document that created the frame or window. Content scripts cannot be
  // inserted in sandboxed frames.
  absl::optional<bool> match_about_blank;

  // The CSS code or a list of CSS files to be injected into matching pages. These
  // are injected in the order they appear, before any DOM is constructed or
  // displayed for the page.
  absl::optional<InjectionItems> css;

  // The JavaScript code or a list of JavaScript files to be injected into
  // matching pages. These are injected in the order they appear.
  absl::optional<InjectionItems> js;

  // The soonest that the JavaScript or CSS will be injected into the tab.
  // Defaults to "document_idle".
  extensions::api::extension_types::RunAt run_at;

  // If allFrames is <code>true</code>, implies that the JavaScript or CSS should
  // be injected into all frames of current page. By default, it's
  // <code>false</code> and is only injected into the top frame.
  absl::optional<bool> all_frames;

  // Applied after matches to include only those URLs that also match this glob.
  // Intended to emulate the @include Greasemonkey keyword.
  absl::optional<std::vector<std::string>> include_globs;

  // Applied after matches to exclude URLs that match this glob. Intended to
  // emulate the @exclude Greasemonkey keyword.
  absl::optional<std::vector<std::string>> exclude_globs;

};


//
// Functions
//

namespace GetAudioState {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The instance ID of the guest <webview> process.
  int instance_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool audible);
}  // namespace Results

}  // namespace GetAudioState

namespace SetAudioMuted {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The instance ID of the guest <webview> process.
  int instance_id;

  // Mute audio value.
  bool mute;


 private:
  Params();
};

}  // namespace SetAudioMuted

namespace IsAudioMuted {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The instance ID of the guest <webview> process.
  int instance_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool muted);
}  // namespace Results

}  // namespace IsAudioMuted

namespace ExecuteScript {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The instance ID of the guest <webview> process.
  int instance_id;

  // The src of the guest <webview> tag.
  std::string src;

  // Details of the script to run.
  extensions::api::extension_types::InjectDetails details;


 private:
  Params();
};

namespace Results {

// The result of the script in every injected frame.
base::Value::List Create(const base::Value::List& result);
}  // namespace Results

}  // namespace ExecuteScript

namespace InsertCSS {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The instance ID of the guest <webview> process.
  int instance_id;

  // The src of the guest <webview> tag.
  std::string src;

  // Details of the CSS text to insert.
  extensions::api::extension_types::InjectDetails details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace InsertCSS

namespace AddContentScripts {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The instance ID of the guest <webview> process.
  int instance_id;

  // Details of the content scripts to add.
  std::vector<ContentScriptDetails> content_script_list;


 private:
  Params();
};

}  // namespace AddContentScripts

namespace RemoveContentScripts {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The instance ID of the guest <webview> process.
  int instance_id;

  // A list of names of content scripts that will be removed. If the list is
  // empty, all the content scripts added to the <webview> page will be removed.
  absl::optional<std::vector<std::string>> script_name_list;


 private:
  Params();
};

}  // namespace RemoveContentScripts

namespace SetZoom {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The instance ID of the guest <webview> process.
  int instance_id;

  // The new zoom factor.
  double zoom_factor;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetZoom

namespace GetZoom {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The instance ID of the guest <webview> process.
  int instance_id;


 private:
  Params();
};

namespace Results {

// The current zoom factor.
base::Value::List Create(double zoom_factor);
}  // namespace Results

}  // namespace GetZoom

namespace SetZoomMode {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The instance ID of the guest <webview> process.
  int instance_id;

  // Defines how zooming is handled in the webview.
  ZoomMode zoom_mode;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetZoomMode

namespace GetZoomMode {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The instance ID of the guest <webview> process.
  int instance_id;


 private:
  Params();
};

namespace Results {

// The webview's current zoom mode.
base::Value::List Create(const ZoomMode& zoom_mode);
}  // namespace Results

}  // namespace GetZoomMode

namespace Find {

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

    // Flag to find matches in reverse order.
    absl::optional<bool> backward;

    // Flag to match |searchText| with case-sensitivity.
    absl::optional<bool> match_case;

  };


  // The instance ID of the guest <webview> process.
  int instance_id;

  // The string to find in the page.
  std::string search_text;

  absl::optional<Options> options;


 private:
  Params();
};

namespace Results {

struct Results {
  Results();
  ~Results();
  Results(const Results&) = delete;
  Results& operator=(const Results&) = delete;
  Results(Results&& rhs);
  Results& operator=(Results&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisResults object.
  base::Value::Dict ToValue() const;

  // Describes a rectangle around the active match.
  struct SelectionRect {
    SelectionRect();
    ~SelectionRect();
    SelectionRect(const SelectionRect&) = delete;
    SelectionRect& operator=(const SelectionRect&) = delete;
    SelectionRect(SelectionRect&& rhs);
    SelectionRect& operator=(SelectionRect&& rhs);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisSelectionRect object.
    base::Value::Dict ToValue() const;

    int left;

    int top;

    int width;

    int height;

  };


  // The number of times |searchText| was matched on the page.
  int number_of_matches;

  // The ordinal number of the current match.
  int active_match_ordinal;

  // Describes a rectangle around the active match.
  SelectionRect selection_rect;

  // Indicates whether this find request was canceled.
  bool canceled;

};


base::Value::List Create(const Results& results);
}  // namespace Results

}  // namespace Find

namespace StopFinding {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The instance ID of the guest <webview> process.
  int instance_id;

  // Determines what to do with the active match after the find session has ended.
  StopFindingAction action;


 private:
  Params();
};

}  // namespace StopFinding

namespace LoadDataWithBaseUrl {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The instance ID of the guest <webview> process.
  int instance_id;

  // The data URL to load.
  std::string data_url;

  // The base URL that will be used for relative links.
  std::string base_url;

  // The URL that will be displayed to the user.
  absl::optional<std::string> virtual_url;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace LoadDataWithBaseUrl

namespace Go {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int instance_id;

  int relative_index;


 private:
  Params();
};

namespace Results {

// Indicates whether the navigation was successful.
base::Value::List Create(bool success);
}  // namespace Results

}  // namespace Go

namespace OverrideUserAgent {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int instance_id;

  std::string user_agent_override;


 private:
  Params();
};

}  // namespace OverrideUserAgent

namespace Reload {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int instance_id;


 private:
  Params();
};

}  // namespace Reload

namespace SetAllowTransparency {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int instance_id;

  bool allow;


 private:
  Params();
};

}  // namespace SetAllowTransparency

namespace SetAllowScaling {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int instance_id;

  bool allow;


 private:
  Params();
};

}  // namespace SetAllowScaling

namespace SetName {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int instance_id;

  std::string frame_name;


 private:
  Params();
};

}  // namespace SetName

namespace SetPermission {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int instance_id;

  int request_id;

  SetPermissionAction action;

  absl::optional<std::string> user_input;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool allowed);
}  // namespace Results

}  // namespace SetPermission

namespace Navigate {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int instance_id;

  std::string src;


 private:
  Params();
};

}  // namespace Navigate

namespace Stop {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int instance_id;


 private:
  Params();
};

}  // namespace Stop

namespace Terminate {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int instance_id;


 private:
  Params();
};

}  // namespace Terminate

namespace CaptureVisibleRegion {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The instance ID of the guest <webview> process.
  int instance_id;

  absl::optional<extensions::api::extension_types::ImageDetails> options;


 private:
  Params();
};

namespace Results {

// A data URL which encodes an image of the visible area of the captured tab.
// May be assigned to the 'src' property of an HTML Image element for display.
base::Value::List Create(const std::string& data_url);
}  // namespace Results

}  // namespace CaptureVisibleRegion

namespace SetSpatialNavigationEnabled {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The instance ID of the guest <webview> process.
  int instance_id;

  // Spatial navigation state value.
  bool spatial_nav_enabled;


 private:
  Params();
};

}  // namespace SetSpatialNavigationEnabled

namespace IsSpatialNavigationEnabled {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The instance ID of the guest <webview> process.
  int instance_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool spatial_nav_enabled);
}  // namespace Results

}  // namespace IsSpatialNavigationEnabled

namespace ClearData {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The instance ID of the guest <webview> process.
  int instance_id;

  RemovalOptions options;

  // The set of data types to remove.
  DataTypeSet data_to_remove;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ClearData

}  // namespace web_view_internal
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_WEB_VIEW_INTERNAL_H__
