// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/notifications.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_NOTIFICATIONS_H__
#define CHROME_COMMON_EXTENSIONS_API_NOTIFICATIONS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace notifications {

//
// Types
//

enum  TemplateType {
  TEMPLATE_TYPE_NONE = 0,
  TEMPLATE_TYPE_BASIC,
  TEMPLATE_TYPE_IMAGE,
  TEMPLATE_TYPE_LIST,
  TEMPLATE_TYPE_PROGRESS,
  TEMPLATE_TYPE_LAST = TEMPLATE_TYPE_PROGRESS,
};


const char* ToString(TemplateType as_enum);
TemplateType ParseTemplateType(base::StringPiece as_string);
std::u16string GetTemplateTypeParseError(base::StringPiece as_string);

enum  PermissionLevel {
  PERMISSION_LEVEL_NONE = 0,
  PERMISSION_LEVEL_GRANTED,
  PERMISSION_LEVEL_DENIED,
  PERMISSION_LEVEL_LAST = PERMISSION_LEVEL_DENIED,
};


const char* ToString(PermissionLevel as_enum);
PermissionLevel ParsePermissionLevel(base::StringPiece as_string);
std::u16string GetPermissionLevelParseError(base::StringPiece as_string);

struct NotificationItem {
  NotificationItem();
  ~NotificationItem();
  NotificationItem(const NotificationItem&) = delete;
  NotificationItem& operator=(const NotificationItem&) = delete;
  NotificationItem(NotificationItem&& rhs);
  NotificationItem& operator=(NotificationItem&& rhs);

  // Populates a NotificationItem object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NotificationItem& out);

  // Populates a NotificationItem object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NotificationItem& out);

  // Creates a deep copy of NotificationItem.
  NotificationItem Clone() const;

  // Creates a NotificationItem object from a base::Value, or NULL on failure.
  static std::unique_ptr<NotificationItem> FromValueDeprecated(const base::Value& value);

  // Creates a NotificationItem object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<NotificationItem> FromValue(const base::Value::Dict& value);

  // Creates a NotificationItem object from a base::Value, or nullopt on
  // failure.
  static absl::optional<NotificationItem> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNotificationItem object.
  base::Value::Dict ToValue() const;

  // Title of one item of a list notification.
  std::string title;

  // Additional details about this item.
  std::string message;

};

struct NotificationBitmap {
  NotificationBitmap();
  ~NotificationBitmap();
  NotificationBitmap(const NotificationBitmap&) = delete;
  NotificationBitmap& operator=(const NotificationBitmap&) = delete;
  NotificationBitmap(NotificationBitmap&& rhs);
  NotificationBitmap& operator=(NotificationBitmap&& rhs);

  // Populates a NotificationBitmap object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NotificationBitmap& out);

  // Populates a NotificationBitmap object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NotificationBitmap& out);

  // Creates a deep copy of NotificationBitmap.
  NotificationBitmap Clone() const;

  // Creates a NotificationBitmap object from a base::Value, or NULL on failure.
  static std::unique_ptr<NotificationBitmap> FromValueDeprecated(const base::Value& value);

  // Creates a NotificationBitmap object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<NotificationBitmap> FromValue(const base::Value::Dict& value);

  // Creates a NotificationBitmap object from a base::Value, or nullopt on
  // failure.
  static absl::optional<NotificationBitmap> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNotificationBitmap object.
  base::Value::Dict ToValue() const;

  int width;

  int height;

  absl::optional<std::vector<uint8_t>> data;

};

struct NotificationButton {
  NotificationButton();
  ~NotificationButton();
  NotificationButton(const NotificationButton&) = delete;
  NotificationButton& operator=(const NotificationButton&) = delete;
  NotificationButton(NotificationButton&& rhs);
  NotificationButton& operator=(NotificationButton&& rhs);

  // Populates a NotificationButton object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NotificationButton& out);

  // Populates a NotificationButton object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NotificationButton& out);

  // Creates a deep copy of NotificationButton.
  NotificationButton Clone() const;

  // Creates a NotificationButton object from a base::Value, or NULL on failure.
  static std::unique_ptr<NotificationButton> FromValueDeprecated(const base::Value& value);

  // Creates a NotificationButton object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<NotificationButton> FromValue(const base::Value::Dict& value);

  // Creates a NotificationButton object from a base::Value, or nullopt on
  // failure.
  static absl::optional<NotificationButton> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNotificationButton object.
  base::Value::Dict ToValue() const;

  std::string title;

  absl::optional<std::string> icon_url;

  absl::optional<NotificationBitmap> icon_bitmap;

};

struct NotificationOptions {
  NotificationOptions();
  ~NotificationOptions();
  NotificationOptions(const NotificationOptions&) = delete;
  NotificationOptions& operator=(const NotificationOptions&) = delete;
  NotificationOptions(NotificationOptions&& rhs);
  NotificationOptions& operator=(NotificationOptions&& rhs);

  // Populates a NotificationOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NotificationOptions& out);

  // Populates a NotificationOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NotificationOptions& out);

  // Creates a deep copy of NotificationOptions.
  NotificationOptions Clone() const;

  // Creates a NotificationOptions object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<NotificationOptions> FromValueDeprecated(const base::Value& value);

  // Creates a NotificationOptions object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<NotificationOptions> FromValue(const base::Value::Dict& value);

  // Creates a NotificationOptions object from a base::Value, or nullopt on
  // failure.
  static absl::optional<NotificationOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNotificationOptions object.
  base::Value::Dict ToValue() const;

  // Which type of notification to display. <em>Required for
  // $(ref:notifications.create)</em> method.
  TemplateType type;

  // <p>A URL to the sender's avatar, app icon, or a thumbnail for image
  // notifications.</p><p>URLs can be a data URL, a blob URL, or a URL relative to
  // a resource within this extension's .crx file <em>Required for
  // $(ref:notifications.create)</em> method.</p>
  absl::optional<std::string> icon_url;

  absl::optional<NotificationBitmap> icon_bitmap;

  // <p>A URL to the app icon mask. URLs have the same restrictions as
  // $(ref:notifications.NotificationOptions.iconUrl iconUrl).</p><p>The app icon
  // mask should be in alpha channel, as only the alpha channel of the image will
  // be considered.</p>
  absl::optional<std::string> app_icon_mask_url;

  absl::optional<NotificationBitmap> app_icon_mask_bitmap;

  // Title of the notification (e.g. sender name for email). <em>Required for
  // $(ref:notifications.create)</em> method.
  absl::optional<std::string> title;

  // Main notification content. <em>Required for $(ref:notifications.create)</em>
  // method.
  absl::optional<std::string> message;

  // Alternate notification content with a lower-weight font.
  absl::optional<std::string> context_message;

  // Priority ranges from -2 to 2. -2 is lowest priority. 2 is highest. Zero is
  // default.  On platforms that don't support a notification center (Windows,
  // Linux & Mac), -2 and -1 result in an error as notifications with those
  // priorities will not be shown at all.
  absl::optional<int> priority;

  // A timestamp associated with the notification, in milliseconds past the epoch
  // (e.g. <code>Date.now() + n</code>).
  absl::optional<double> event_time;

  // Text and icons for up to two notification action buttons.
  absl::optional<std::vector<NotificationButton>> buttons;

  // Secondary notification content.
  absl::optional<std::string> expanded_message;

  // A URL to the image thumbnail for image-type notifications. URLs have the same
  // restrictions as $(ref:notifications.NotificationOptions.iconUrl iconUrl).
  absl::optional<std::string> image_url;

  absl::optional<NotificationBitmap> image_bitmap;

  // Items for multi-item notifications. Users on Mac OS X only see the first
  // item.
  absl::optional<std::vector<NotificationItem>> items;

  // Current progress ranges from 0 to 100.
  absl::optional<int> progress;

  absl::optional<bool> is_clickable;

  // Indicates that the notification should remain visible on screen until the
  // user activates or dismisses the notification. This defaults to false.
  absl::optional<bool> require_interaction;

  // Indicates that no sounds or vibrations should be made when the notification
  // is being shown. This defaults to false.
  absl::optional<bool> silent;

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

  // <p>Identifier of the notification. If not set or empty, an ID will
  // automatically be generated. If it matches an existing notification, this
  // method first clears that notification before proceeding with the create
  // operation. The identifier may not be longer than 500 characters.</p><p>The
  // <code>notificationId</code> parameter is required before Chrome 42.</p>
  absl::optional<std::string> notification_id;

  // Contents of the notification.
  NotificationOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& notification_id);
}  // namespace Results

}  // namespace Create

namespace Update {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The id of the notification to be updated. This is returned by
  // $(ref:notifications.create) method.
  std::string notification_id;

  // Contents of the notification to update to.
  NotificationOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool was_updated);
}  // namespace Results

}  // namespace Update

namespace Clear {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The id of the notification to be cleared. This is returned by
  // $(ref:notifications.create) method.
  std::string notification_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool was_cleared);
}  // namespace Results

}  // namespace Clear

namespace GetAll {

namespace Results {

struct Notifications {
  Notifications();
  ~Notifications();
  Notifications(const Notifications&) = delete;
  Notifications& operator=(const Notifications&) = delete;
  Notifications(Notifications&& rhs);
  Notifications& operator=(Notifications&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNotifications object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


base::Value::List Create(const Notifications& notifications);
}  // namespace Results

}  // namespace GetAll

namespace GetPermissionLevel {

namespace Results {

base::Value::List Create(const PermissionLevel& level);
}  // namespace Results

}  // namespace GetPermissionLevel

//
// Events
//

namespace OnClosed {

extern const char kEventName[];  // "notifications.onClosed"

base::Value::List Create(const std::string& notification_id, bool by_user);
}  // namespace OnClosed

namespace OnClicked {

extern const char kEventName[];  // "notifications.onClicked"

base::Value::List Create(const std::string& notification_id);
}  // namespace OnClicked

namespace OnButtonClicked {

extern const char kEventName[];  // "notifications.onButtonClicked"

base::Value::List Create(const std::string& notification_id, int button_index);
}  // namespace OnButtonClicked

namespace OnPermissionLevelChanged {

extern const char kEventName[];  // "notifications.onPermissionLevelChanged"

base::Value::List Create(const PermissionLevel& level);
}  // namespace OnPermissionLevelChanged

namespace OnShowSettings {

extern const char kEventName[];  // "notifications.onShowSettings"

base::Value::List Create();
}  // namespace OnShowSettings

}  // namespace notifications
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_NOTIFICATIONS_H__
