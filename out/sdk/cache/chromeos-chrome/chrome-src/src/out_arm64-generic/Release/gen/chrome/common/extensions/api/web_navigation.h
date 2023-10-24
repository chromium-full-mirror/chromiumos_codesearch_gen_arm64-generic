// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/web_navigation.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_WEB_NAVIGATION_H__
#define CHROME_COMMON_EXTENSIONS_API_WEB_NAVIGATION_H__

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
namespace web_navigation {

//
// Types
//

// Cause of the navigation. The same transition types as defined in the history
// API are used. These are the same transition types as defined in the <a
// href="history#transition_types">history API</a> except with
// <code>"start_page"</code> in place of <code>"auto_toplevel"</code> (for
// backwards compatibility).
enum  TransitionType {
  TRANSITION_TYPE_NONE = 0,
  TRANSITION_TYPE_LINK,
  TRANSITION_TYPE_TYPED,
  TRANSITION_TYPE_AUTO_BOOKMARK,
  TRANSITION_TYPE_AUTO_SUBFRAME,
  TRANSITION_TYPE_MANUAL_SUBFRAME,
  TRANSITION_TYPE_GENERATED,
  TRANSITION_TYPE_START_PAGE,
  TRANSITION_TYPE_FORM_SUBMIT,
  TRANSITION_TYPE_RELOAD,
  TRANSITION_TYPE_KEYWORD,
  TRANSITION_TYPE_KEYWORD_GENERATED,
  TRANSITION_TYPE_LAST = TRANSITION_TYPE_KEYWORD_GENERATED,
};


const char* ToString(TransitionType as_enum);
TransitionType ParseTransitionType(base::StringPiece as_string);
std::u16string GetTransitionTypeParseError(base::StringPiece as_string);

enum  TransitionQualifier {
  TRANSITION_QUALIFIER_NONE = 0,
  TRANSITION_QUALIFIER_CLIENT_REDIRECT,
  TRANSITION_QUALIFIER_SERVER_REDIRECT,
  TRANSITION_QUALIFIER_FORWARD_BACK,
  TRANSITION_QUALIFIER_FROM_ADDRESS_BAR,
  TRANSITION_QUALIFIER_LAST = TRANSITION_QUALIFIER_FROM_ADDRESS_BAR,
};


const char* ToString(TransitionQualifier as_enum);
TransitionQualifier ParseTransitionQualifier(base::StringPiece as_string);
std::u16string GetTransitionQualifierParseError(base::StringPiece as_string);


//
// Functions
//

namespace GetFrame {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Information about the frame to retrieve information about.
  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs);
    Details& operator=(Details&& rhs);

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static absl::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static absl::optional<Details> FromValue(const base::Value& value);

    // The ID of the tab in which the frame is.
    absl::optional<int> tab_id;

    // The ID of the process that runs the renderer for this tab.
    absl::optional<int> process_id;

    // The ID of the frame in the given tab.
    absl::optional<int> frame_id;

    // The UUID of the document. If the frameId and/or tabId are provided they will
    // be validated to match the document found by provided document ID.
    absl::optional<std::string> document_id;

  };


  // Information about the frame to retrieve information about.
  Details details;


 private:
  Params();
};

namespace Results {

// Information about the requested frame, null if the specified frame ID and/or
// tab ID are invalid.
struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs);
  Details& operator=(Details&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // True if the last navigation in this frame was interrupted by an error, i.e.
  // the onErrorOccurred event fired.
  bool error_occurred;

  // The URL currently associated with this frame, if the frame identified by the
  // frameId existed at one point in the given tab. The fact that an URL is
  // associated with a given frameId does not imply that the corresponding frame
  // still exists.
  std::string url;

  // The ID of the parent frame, or <code>-1</code> if this is the main frame.
  int parent_frame_id;

  // A UUID of the document loaded.
  std::string document_id;

  // A UUID of the parent document owning this frame. This is not set if there is
  // no parent.
  absl::optional<std::string> parent_document_id;

  // The lifecycle the document is in.
  extensions::api::extension_types::DocumentLifecycle document_lifecycle;

  // The type of frame the navigation occurred in.
  extensions::api::extension_types::FrameType frame_type;

};


// Information about the requested frame, null if the specified frame ID and/or
// tab ID are invalid.
base::Value::List Create(const Details& details);
}  // namespace Results

}  // namespace GetFrame

namespace GetAllFrames {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Information about the tab to retrieve all frames from.
  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs);
    Details& operator=(Details&& rhs);

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static absl::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static absl::optional<Details> FromValue(const base::Value& value);

    // The ID of the tab.
    int tab_id;

  };


  // Information about the tab to retrieve all frames from.
  Details details;


 private:
  Params();
};

namespace Results {

struct DetailsType {
  DetailsType();
  ~DetailsType();
  DetailsType(const DetailsType&) = delete;
  DetailsType& operator=(const DetailsType&) = delete;
  DetailsType(DetailsType&& rhs);
  DetailsType& operator=(DetailsType&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetailsType object.
  base::Value::Dict ToValue() const;

  // True if the last navigation in this frame was interrupted by an error, i.e.
  // the onErrorOccurred event fired.
  bool error_occurred;

  // The ID of the process that runs the renderer for this frame.
  int process_id;

  // The ID of the frame. 0 indicates that this is the main frame; a positive
  // value indicates the ID of a subframe.
  int frame_id;

  // The ID of the parent frame, or <code>-1</code> if this is the main frame.
  int parent_frame_id;

  // The URL currently associated with this frame.
  std::string url;

  // A UUID of the document loaded.
  std::string document_id;

  // A UUID of the parent document owning this frame. This is not set if there is
  // no parent.
  absl::optional<std::string> parent_document_id;

  // The lifecycle the document is in.
  extensions::api::extension_types::DocumentLifecycle document_lifecycle;

  // The type of frame the navigation occurred in.
  extensions::api::extension_types::FrameType frame_type;

};



// A list of frames in the given tab, null if the specified tab ID is invalid.
base::Value::List Create(const std::vector<DetailsType>& details);
}  // namespace Results

}  // namespace GetAllFrames

//
// Events
//

namespace OnBeforeNavigate {

extern const char kEventName[];  // "webNavigation.onBeforeNavigate"

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs);
  Details& operator=(Details&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The ID of the tab in which the navigation is about to occur.
  int tab_id;

  std::string url;

  // The value of -1.
  int process_id;

  // 0 indicates the navigation happens in the tab content window; a positive
  // value indicates navigation in a subframe. Frame IDs are unique for a given
  // tab and process.
  int frame_id;

  // The ID of the parent frame, or <code>-1</code> if this is the main frame.
  int parent_frame_id;

  // The time when the browser was about to start the navigation, in milliseconds
  // since the epoch.
  double time_stamp;

  // A UUID of the parent document owning this frame. This is not set if there is
  // no parent.
  absl::optional<std::string> parent_document_id;

  // The lifecycle the document is in.
  extensions::api::extension_types::DocumentLifecycle document_lifecycle;

  // The type of frame the navigation occurred in.
  extensions::api::extension_types::FrameType frame_type;

};


base::Value::List Create(const Details& details);
}  // namespace OnBeforeNavigate

namespace OnCommitted {

extern const char kEventName[];  // "webNavigation.onCommitted"

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs);
  Details& operator=(Details&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The ID of the tab in which the navigation occurs.
  int tab_id;

  std::string url;

  // The ID of the process that runs the renderer for this frame.
  int process_id;

  // 0 indicates the navigation happens in the tab content window; a positive
  // value indicates navigation in a subframe. Frame IDs are unique within a tab.
  int frame_id;

  // The ID of the parent frame, or <code>-1</code> if this is the main frame.
  int parent_frame_id;

  // Cause of the navigation.
  TransitionType transition_type;

  // A list of transition qualifiers.
  std::vector<TransitionQualifier> transition_qualifiers;

  // The time when the navigation was committed, in milliseconds since the epoch.
  double time_stamp;

  // A UUID of the document loaded.
  std::string document_id;

  // A UUID of the parent document owning this frame. This is not set if there is
  // no parent.
  absl::optional<std::string> parent_document_id;

  // The lifecycle the document is in.
  extensions::api::extension_types::DocumentLifecycle document_lifecycle;

  // The type of frame the navigation occurred in.
  extensions::api::extension_types::FrameType frame_type;

};


base::Value::List Create(const Details& details);
}  // namespace OnCommitted

namespace OnDOMContentLoaded {

extern const char kEventName[];  // "webNavigation.onDOMContentLoaded"

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs);
  Details& operator=(Details&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The ID of the tab in which the navigation occurs.
  int tab_id;

  std::string url;

  // The ID of the process that runs the renderer for this frame.
  int process_id;

  // 0 indicates the navigation happens in the tab content window; a positive
  // value indicates navigation in a subframe. Frame IDs are unique within a tab.
  int frame_id;

  // The ID of the parent frame, or <code>-1</code> if this is the main frame.
  int parent_frame_id;

  // The time when the page's DOM was fully constructed, in milliseconds since the
  // epoch.
  double time_stamp;

  // A UUID of the document loaded.
  std::string document_id;

  // A UUID of the parent document owning this frame. This is not set if there is
  // no parent.
  absl::optional<std::string> parent_document_id;

  // The lifecycle the document is in.
  extensions::api::extension_types::DocumentLifecycle document_lifecycle;

  // The type of frame the navigation occurred in.
  extensions::api::extension_types::FrameType frame_type;

};


base::Value::List Create(const Details& details);
}  // namespace OnDOMContentLoaded

namespace OnCompleted {

extern const char kEventName[];  // "webNavigation.onCompleted"

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs);
  Details& operator=(Details&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The ID of the tab in which the navigation occurs.
  int tab_id;

  std::string url;

  // The ID of the process that runs the renderer for this frame.
  int process_id;

  // 0 indicates the navigation happens in the tab content window; a positive
  // value indicates navigation in a subframe. Frame IDs are unique within a tab.
  int frame_id;

  // The ID of the parent frame, or <code>-1</code> if this is the main frame.
  int parent_frame_id;

  // The time when the document finished loading, in milliseconds since the epoch.
  double time_stamp;

  // A UUID of the document loaded.
  std::string document_id;

  // A UUID of the parent document owning this frame. This is not set if there is
  // no parent.
  absl::optional<std::string> parent_document_id;

  // The lifecycle the document is in.
  extensions::api::extension_types::DocumentLifecycle document_lifecycle;

  // The type of frame the navigation occurred in.
  extensions::api::extension_types::FrameType frame_type;

};


base::Value::List Create(const Details& details);
}  // namespace OnCompleted

namespace OnErrorOccurred {

extern const char kEventName[];  // "webNavigation.onErrorOccurred"

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs);
  Details& operator=(Details&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The ID of the tab in which the navigation occurs.
  int tab_id;

  std::string url;

  // The value of -1.
  int process_id;

  // 0 indicates the navigation happens in the tab content window; a positive
  // value indicates navigation in a subframe. Frame IDs are unique within a tab.
  int frame_id;

  // The ID of the parent frame, or <code>-1</code> if this is the main frame.
  int parent_frame_id;

  // The error description.
  std::string error;

  // The time when the error occurred, in milliseconds since the epoch.
  double time_stamp;

  // A UUID of the document loaded.
  std::string document_id;

  // A UUID of the parent document owning this frame. This is not set if there is
  // no parent.
  absl::optional<std::string> parent_document_id;

  // The lifecycle the document is in.
  extensions::api::extension_types::DocumentLifecycle document_lifecycle;

  // The type of frame the navigation occurred in.
  extensions::api::extension_types::FrameType frame_type;

};


base::Value::List Create(const Details& details);
}  // namespace OnErrorOccurred

namespace OnCreatedNavigationTarget {

extern const char kEventName[];  // "webNavigation.onCreatedNavigationTarget"

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs);
  Details& operator=(Details&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The ID of the tab in which the navigation is triggered.
  int source_tab_id;

  // The ID of the process that runs the renderer for the source frame.
  int source_process_id;

  // The ID of the frame with sourceTabId in which the navigation is triggered. 0
  // indicates the main frame.
  int source_frame_id;

  // The URL to be opened in the new window.
  std::string url;

  // The ID of the tab in which the url is opened
  int tab_id;

  // The time when the browser was about to create a new view, in milliseconds
  // since the epoch.
  double time_stamp;

};


base::Value::List Create(const Details& details);
}  // namespace OnCreatedNavigationTarget

namespace OnReferenceFragmentUpdated {

extern const char kEventName[];  // "webNavigation.onReferenceFragmentUpdated"

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs);
  Details& operator=(Details&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The ID of the tab in which the navigation occurs.
  int tab_id;

  std::string url;

  // The ID of the process that runs the renderer for this frame.
  int process_id;

  // 0 indicates the navigation happens in the tab content window; a positive
  // value indicates navigation in a subframe. Frame IDs are unique within a tab.
  int frame_id;

  // The ID of the parent frame, or <code>-1</code> if this is the main frame.
  int parent_frame_id;

  // Cause of the navigation.
  TransitionType transition_type;

  // A list of transition qualifiers.
  std::vector<TransitionQualifier> transition_qualifiers;

  // The time when the navigation was committed, in milliseconds since the epoch.
  double time_stamp;

  // A UUID of the document loaded.
  std::string document_id;

  // A UUID of the parent document owning this frame. This is not set if there is
  // no parent.
  absl::optional<std::string> parent_document_id;

  // The lifecycle the document is in.
  extensions::api::extension_types::DocumentLifecycle document_lifecycle;

  // The type of frame the navigation occurred in.
  extensions::api::extension_types::FrameType frame_type;

};


base::Value::List Create(const Details& details);
}  // namespace OnReferenceFragmentUpdated

namespace OnTabReplaced {

extern const char kEventName[];  // "webNavigation.onTabReplaced"

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs);
  Details& operator=(Details&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The ID of the tab that was replaced.
  int replaced_tab_id;

  // The ID of the tab that replaced the old tab.
  int tab_id;

  // The time when the replacement happened, in milliseconds since the epoch.
  double time_stamp;

};


base::Value::List Create(const Details& details);
}  // namespace OnTabReplaced

namespace OnHistoryStateUpdated {

extern const char kEventName[];  // "webNavigation.onHistoryStateUpdated"

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs);
  Details& operator=(Details&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The ID of the tab in which the navigation occurs.
  int tab_id;

  std::string url;

  // The ID of the process that runs the renderer for this frame.
  int process_id;

  // 0 indicates the navigation happens in the tab content window; a positive
  // value indicates navigation in a subframe. Frame IDs are unique within a tab.
  int frame_id;

  // The ID of the parent frame, or <code>-1</code> if this is the main frame.
  int parent_frame_id;

  // Cause of the navigation.
  TransitionType transition_type;

  // A list of transition qualifiers.
  std::vector<TransitionQualifier> transition_qualifiers;

  // The time when the navigation was committed, in milliseconds since the epoch.
  double time_stamp;

  // A UUID of the document loaded.
  std::string document_id;

  // A UUID of the parent document owning this frame. This is not set if there is
  // no parent.
  absl::optional<std::string> parent_document_id;

  // The lifecycle the document is in.
  extensions::api::extension_types::DocumentLifecycle document_lifecycle;

  // The type of frame the navigation occurred in.
  extensions::api::extension_types::FrameType frame_type;

};


base::Value::List Create(const Details& details);
}  // namespace OnHistoryStateUpdated

}  // namespace web_navigation
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_WEB_NAVIGATION_H__
