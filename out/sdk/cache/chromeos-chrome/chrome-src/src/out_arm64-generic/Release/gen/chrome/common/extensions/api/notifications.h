// Copyright 2024 The Chromium Authors
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
#include <optional>
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

enum class TemplateType {
  kNone = 0,
  kBasic,
  kImage,
  kList,
  kProgress,
  kMaxValue = kProgress,
};


const char* ToString(TemplateType as_enum);
TemplateType ParseTemplateType(base::StringPiece as_string);
std::u16string GetTemplateTypeParseError(base::StringPiece as_string);

enum class PermissionLevel {
  kNone = 0,
  kGranted,
  kDenied,
  kMaxValue = kDenied,
};


const char* ToString(PermissionLevel as_enum);
PermissionLevel ParsePermissionLevel(base::StringPiece as_string);
std::u16string GetPermissionLevelParseError(base::StringPiece as_string);

struct NotificationItem {
  NotificationItem();
  ~NotificationItem();
  NotificationItem(const NotificationItem&) = delete;
  NotificationItem& operator=(const NotificationItem&) = delete;
  NotificationItem(NotificationItem&& rhs) noexcept;
  NotificationItem& operator=(NotificationItem&& rhs) noexcept;

  // Populates a NotificationItem object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NotificationItem& out);

  // Populates a NotificationItem object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NotificationItem& out);

  // Creates a deep copy of NotificationItem.
  NotificationItem Clone() const;

  // Creates a NotificationItem object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<NotificationItem> FromValue(const base::Value::Dict& value);

  // Creates a NotificationItem object from a base::Value, or nullopt on
  // failure.
  static std::optional<NotificationItem> FromValue(const base::Value& value);

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
  NotificationBitmap(NotificationBitmap&& rhs) noexcept;
  NotificationBitmap& operator=(NotificationBitmap&& rhs) noexcept;

  // Populates a NotificationBitmap object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NotificationBitmap& out);

  // Populates a NotificationBitmap object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NotificationBitmap& out);

  // Creates a deep copy of NotificationBitmap.
  NotificationBitmap Clone() const;

  // Creates a NotificationBitmap object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<NotificationBitmap> FromValue(const base::Value::Dict& value);

  // Creates a NotificationBitmap object from a base::Value, or nullopt on
  // failure.
  static std::optional<NotificationBitmap> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNotificationBitmap object.
  base::Value::Dict ToValue() const;

  int width;

  int height;

  std::optional<std::vector<uint8_t>> data;

};

struct NotificationButton {
  NotificationButton();
  ~NotificationButton();
  NotificationButton(const NotificationButton&) = delete;
  NotificationButton& operator=(const NotificationButton&) = delete;
  NotificationButton(NotificationButton&& rhs) noexcept;
  NotificationButton& operator=(NotificationButton&& rhs) noexcept;

  // Populates a NotificationButton object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NotificationButton& out);

  // Populates a NotificationButton object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NotificationButton& out);

  // Creates a deep copy of NotificationButton.
  NotificationButton Clone() const;

  // Creates a NotificationButton object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<NotificationButton> FromValue(const base::Value::Dict& value);

  // Creates a NotificationButton object from a base::Value, or nullopt on
  // failure.
  static std::optional<NotificationButton> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNotificationButton object.
  base::Value::Dict ToValue() const;

  std::string title;

  std::optional<std::string> icon_url;

  std::optional<NotificationBitmap> icon_bitmap;

};

struct NotificationOptions {
  NotificationOptions();
  ~NotificationOptions();
  NotificationOptions(const NotificationOptions&) = delete;
  NotificationOptions& operator=(const NotificationOptions&) = delete;
  NotificationOptions(NotificationOptions&& rhs) noexcept;
  NotificationOptions& operator=(NotificationOptions&& rhs) noexcept;

  // Populates a NotificationOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NotificationOptions& out);

  // Populates a NotificationOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NotificationOptions& out);

  // Creates a deep copy of NotificationOptions.
  NotificationOptions Clone() const;

  // Creates a NotificationOptions object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<NotificationOptions> FromValue(const base::Value::Dict& value);

  // Creates a NotificationOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<NotificationOptions> FromValue(const base::Value& value);

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
  std::optional<std::string> icon_url;

  std::optional<NotificationBitmap> icon_bitmap;

  // <p>A URL to the app icon mask. URLs have the same restrictions as
  // $(ref:notifications.NotificationOptions.iconUrl iconUrl).</p><p>The app icon
  // mask should be in alpha channel, as only the alpha channel of the image will
  // be considered.</p>
  std::optional<std::string> app_icon_mask_url;

  std::optional<NotificationBitmap> app_icon_mask_bitmap;

  // Title of the notification (e.g. sender name for email). <em>Required for
  // $(ref:notifications.create)</em> method.
  std::optional<std::string> title;

  // Main notification content. <em>Required for $(ref:notifications.create)</em>
  // method.
  std::optional<std::string> message;

  // Alternate notification content with a lower-weight font.
  std::optional<std::string> context_message;

  // Priority ranges from -2 to 2. -2 is lowest priority. 2 is highest. Zero is
  // default.  On platforms that don't support a notification center (Windows,
  // Linux & Mac), -2 and -1 result in an error as notifications with those
  // priorities will not be shown at all.
  std::optional<int> priority;

  // A timestamp associated with the notification, in milliseconds past the epoch
  // (e.g. <code>Date.now() + n</code>).
  std::optional<double> event_time;

  // Text and icons for up to two notification action buttons.
  std::optional<std::vector<NotificationButton>> buttons;

  // Secondary notification content.
  std::optional<std::string> expanded_message;

  // A URL to the image thumbnail for image-type notifications. URLs have the same
  // restrictions as $(ref:notifications.NotificationOptions.iconUrl iconUrl).
  std::optional<std::string> image_url;

  std::optional<NotificationBitmap> image_bitmap;

  // Items for multi-item notifications. Users on Mac OS X only see the first
  // item.
  std::optional<std::vector<NotificationItem>> items;

  // Current progress ranges from 0 to 100.
  std::optional<int> progress;

  std::optional<bool> is_clickable;

  // Indicates that the notification should remain visible on screen until the
  // user activates or dismisses the notification. This defaults to false.
  std::optional<bool> require_interaction;

  // Indicates that no sounds or vibrations should be made when the notification
  // is being shown. This defaults to false.
  std::optional<bool> silent;

};


//
// Functions
//

namespace Create {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // <p>Identifier of the notification. If not set or empty, an ID will
  // automatically be generated. If it matches an existing notification, this
  // method first clears that notification before proceeding with the create
  // operation. The identifier may not be longer than 500 characters.</p><p>The
  // <code>notificationId</code> parameter is required before Chrome 42.</p>
  std::optional<std::string> notification_id;

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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  Notifications(Notifications&& rhs) noexcept;
  Notifications& operator=(Notifications&& rhs) noexcept;

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
