// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/app_runtime.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_APP_RUNTIME_H__
#define EXTENSIONS_COMMON_API_APP_RUNTIME_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace app_runtime {

//
// Types
//

struct LaunchItem {
  LaunchItem();
  ~LaunchItem();
  LaunchItem(const LaunchItem&) = delete;
  LaunchItem& operator=(const LaunchItem&) = delete;
  LaunchItem(LaunchItem&& rhs);
  LaunchItem& operator=(LaunchItem&& rhs);

  // Populates a LaunchItem object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, LaunchItem& out);

  // Populates a LaunchItem object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, LaunchItem& out);

  // Creates a deep copy of LaunchItem.
  LaunchItem Clone() const;

  // Creates a LaunchItem object from a base::Value, or NULL on failure.
  static std::unique_ptr<LaunchItem> FromValueDeprecated(const base::Value& value);

  // Creates a LaunchItem object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<LaunchItem> FromValue(const base::Value::Dict& value);

  // Creates a LaunchItem object from a base::Value, or nullopt on failure.
  static absl::optional<LaunchItem> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisLaunchItem object.
  base::Value::Dict ToValue() const;

  // Entry for the item.
  struct Entry {
    Entry();
    ~Entry();
    Entry(const Entry&) = delete;
    Entry& operator=(const Entry&) = delete;
    Entry(Entry&& rhs);
    Entry& operator=(Entry&& rhs);

    // Populates a Entry object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Entry& out);

    // Populates a Entry object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Entry& out);

    // Creates a deep copy of Entry.
    Entry Clone() const;

    // Creates a Entry object from a base::Value::Dict, or nullopt on failure.
    static absl::optional<Entry> FromValue(const base::Value::Dict& value);

    // Creates a Entry object from a base::Value, or nullopt on failure.
    static absl::optional<Entry> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisEntry object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };


  // Entry for the item.
  Entry entry;

  // The MIME type of the file.
  absl::optional<std::string> type;

};

// Enumeration of app launch sources. This should be kept in sync with
// AppLaunchSource in components/services/app_service/public/mojom/types.mojom,
// and GetLaunchSourceEnum() in
// extensions/browser/api/app_runtime/app_runtime_api.cc. Note the enumeration
// is used in UMA histogram so entries should not be re-ordered or removed.
enum class LaunchSource {
  kNone = 0,
  kUntracked,
  kAppLauncher,
  kNewTabPage,
  kReload,
  kRestart,
  kLoadAndLaunch,
  kCommandLine,
  kFileHandler,
  kUrlHandler,
  kSystemTray,
  kAboutPage,
  kKeyboard,
  kExtensionsPage,
  kManagementApi,
  kEphemeralApp,
  kBackground,
  kKiosk,
  kChromeInternal,
  kTest,
  kInstalledNotification,
  kContextMenu,
  kArc,
  kIntentUrl,
  kAppHomePage,
  kMaxValue = kAppHomePage,
};


const char* ToString(LaunchSource as_enum);
LaunchSource ParseLaunchSource(base::StringPiece as_string);
std::u16string GetLaunchSourceParseError(base::StringPiece as_string);

// An app can be launched with a specific action in mind, for example, to create
// a new note. The type of action the app was launched with is available inside
// of the |actionData| field from the LaunchData instance.
enum class ActionType {
  kNone = 0,
  kNewNote,
  kMaxValue = kNewNote,
};


const char* ToString(ActionType as_enum);
ActionType ParseActionType(base::StringPiece as_string);
std::u16string GetActionTypeParseError(base::StringPiece as_string);

struct ActionData {
  ActionData();
  ~ActionData();
  ActionData(const ActionData&) = delete;
  ActionData& operator=(const ActionData&) = delete;
  ActionData(ActionData&& rhs);
  ActionData& operator=(ActionData&& rhs);

  // Populates a ActionData object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ActionData& out);

  // Populates a ActionData object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ActionData& out);

  // Creates a deep copy of ActionData.
  ActionData Clone() const;

  // Creates a ActionData object from a base::Value, or NULL on failure.
  static std::unique_ptr<ActionData> FromValueDeprecated(const base::Value& value);

  // Creates a ActionData object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ActionData> FromValue(const base::Value::Dict& value);

  // Creates a ActionData object from a base::Value, or nullopt on failure.
  static absl::optional<ActionData> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisActionData object.
  base::Value::Dict ToValue() const;

  ActionType action_type;

  // <p>Whether the action was requested on Chrome OS lock screen.</p> <p>
  // Launch events with this valued set to <code>true</code> are fired   in lock
  // screen context, where apps have reduced access to extension   APIs, but are
  // able to create windows on lock screen. </p> <p>   Note that this value will
  // be set to <code>true</code> only if the app   is set as the lock screen
  // enabled action handler by the user. </p>
  absl::optional<bool> is_lock_screen_action;

  // Currently, used only with lock screen actions. If set, indicates whether the
  // app should attempt to restore state from when the action was last handled.
  absl::optional<bool> restore_last_action_state;

};

struct LaunchData {
  LaunchData();
  ~LaunchData();
  LaunchData(const LaunchData&) = delete;
  LaunchData& operator=(const LaunchData&) = delete;
  LaunchData(LaunchData&& rhs);
  LaunchData& operator=(LaunchData&& rhs);

  // Populates a LaunchData object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, LaunchData& out);

  // Populates a LaunchData object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, LaunchData& out);

  // Creates a deep copy of LaunchData.
  LaunchData Clone() const;

  // Creates a LaunchData object from a base::Value, or NULL on failure.
  static std::unique_ptr<LaunchData> FromValueDeprecated(const base::Value& value);

  // Creates a LaunchData object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<LaunchData> FromValue(const base::Value::Dict& value);

  // Creates a LaunchData object from a base::Value, or nullopt on failure.
  static absl::optional<LaunchData> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisLaunchData object.
  base::Value::Dict ToValue() const;

  // The ID of the file or URL handler that the app is being invoked with. Handler
  // IDs are the top-level keys in the <code>file_handlers</code> and/or
  // <code>url_handlers</code> dictionaries in the manifest.
  absl::optional<std::string> id;

  // The file entries for the <code>onLaunched</code> event triggered by a
  // matching file handler in the <code>file_handlers</code> manifest key.
  absl::optional<std::vector<LaunchItem>> items;

  // The URL for the <code>onLaunched</code> event triggered by a matching URL
  // handler in the <code>url_handlers</code> manifest key.
  absl::optional<std::string> url;

  // The referrer URL for the <code>onLaunched</code> event triggered by a
  // matching URL handler in the <code>url_handlers</code> manifest key.
  absl::optional<std::string> referrer_url;

  // Whether the app is launched in a Chrome OS Demo Mode session. Used for
  // default-installed Demo Mode Chrome apps.
  absl::optional<bool> is_demo_session;

  // Whether the app is being launched in a <a
  // href="https://support.google.com/chromebook/answer/3134673">Chrome OS kiosk
  // session</a>.
  absl::optional<bool> is_kiosk_session;

  // Whether the app is being launched in a <a
  // href="https://support.google.com/chrome/a/answer/3017014">Chrome OS public
  // session</a>.
  absl::optional<bool> is_public_session;

  // Where the app is launched from.
  LaunchSource source;

  // Contains data that specifies the <code>ActionType</code> this app was
  // launched with. This is null if the app was not launched with a specific
  // action intent.
  absl::optional<ActionData> action_data;

};

struct EmbedRequest {
  EmbedRequest();
  ~EmbedRequest();
  EmbedRequest(const EmbedRequest&) = delete;
  EmbedRequest& operator=(const EmbedRequest&) = delete;
  EmbedRequest(EmbedRequest&& rhs);
  EmbedRequest& operator=(EmbedRequest&& rhs);

  // Populates a EmbedRequest object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, EmbedRequest& out);

  // Populates a EmbedRequest object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, EmbedRequest& out);

  // Creates a deep copy of EmbedRequest.
  EmbedRequest Clone() const;

  // Creates a EmbedRequest object from a base::Value, or NULL on failure.
  static std::unique_ptr<EmbedRequest> FromValueDeprecated(const base::Value& value);

  // Creates a EmbedRequest object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<EmbedRequest> FromValue(const base::Value::Dict& value);

  // Creates a EmbedRequest object from a base::Value, or nullopt on failure.
  static absl::optional<EmbedRequest> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEmbedRequest object.
  base::Value::Dict ToValue() const;

  std::string embedder_id;

  // Optional developer specified data that the app to be embedded can use when
  // making an embedding decision.
  absl::optional<base::Value> data;

};


//
// Events
//

namespace OnEmbedRequested {

extern const char kEventName[];  // "app.runtime.onEmbedRequested"

base::Value::List Create(const EmbedRequest& request);
}  // namespace OnEmbedRequested

namespace OnLaunched {

extern const char kEventName[];  // "app.runtime.onLaunched"

base::Value::List Create(const LaunchData& launch_data);
}  // namespace OnLaunched

namespace OnRestarted {

extern const char kEventName[];  // "app.runtime.onRestarted"

base::Value::List Create();
}  // namespace OnRestarted

}  // namespace app_runtime
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_APP_RUNTIME_H__
