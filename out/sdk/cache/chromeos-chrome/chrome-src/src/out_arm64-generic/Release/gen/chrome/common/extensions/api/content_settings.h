// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/content_settings.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_CONTENT_SETTINGS_H__
#define CHROME_COMMON_EXTENSIONS_API_CONTENT_SETTINGS_H__

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
namespace content_settings {

//
// Properties
//

//
// Types
//

// The only content type using resource identifiers is
// $(ref:contentSettings.plugins). For more information, see <a
// href="contentSettings#resource-identifiers">Resource Identifiers</a>.
struct ResourceIdentifier {
  ResourceIdentifier();
  ~ResourceIdentifier();
  ResourceIdentifier(const ResourceIdentifier&) = delete;
  ResourceIdentifier& operator=(const ResourceIdentifier&) = delete;
  ResourceIdentifier(ResourceIdentifier&& rhs) noexcept;
  ResourceIdentifier& operator=(ResourceIdentifier&& rhs) noexcept;

  // Populates a ResourceIdentifier object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ResourceIdentifier& out);

  // Populates a ResourceIdentifier object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ResourceIdentifier& out);

  // Creates a deep copy of ResourceIdentifier.
  ResourceIdentifier Clone() const;

  // Creates a ResourceIdentifier object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ResourceIdentifier> FromValue(const base::Value::Dict& value);

  // Creates a ResourceIdentifier object from a base::Value, or nullopt on
  // failure.
  static std::optional<ResourceIdentifier> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisResourceIdentifier object.
  base::Value::Dict ToValue() const;

  // The resource identifier for the given content type.
  std::string id;

  // A human readable description of the resource.
  std::optional<std::string> description;

};

// The scope of the ContentSetting. One of<br><var>regular</var>: setting for
// regular profile (which is inherited by the incognito profile if not
// overridden elsewhere),<br><var>incognito_session_only</var>: setting for
// incognito profile that can only be set during an incognito session and is
// deleted when the incognito session ends (overrides regular settings).
enum class Scope {
  kNone = 0,
  kRegular,
  kIncognitoSessionOnly,
  kMaxValue = kIncognitoSessionOnly,
};


const char* ToString(Scope as_enum);
Scope ParseScope(base::StringPiece as_string);
std::u16string GetScopeParseError(base::StringPiece as_string);

namespace ContentSetting {

namespace Clear {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

    // Where to clear the setting (default: regular).
    Scope scope;

  };


  Details details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Clear

namespace Get {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

    // The primary URL for which the content setting should be retrieved. Note that
    // the meaning of a primary URL depends on the content type.
    std::string primary_url;

    // The secondary URL for which the content setting should be retrieved. Defaults
    // to the primary URL. Note that the meaning of a secondary URL depends on the
    // content type, and not all content types use secondary URLs.
    std::optional<std::string> secondary_url;

    // A more specific identifier of the type of content for which the settings
    // should be retrieved.
    std::optional<ResourceIdentifier> resource_identifier;

    // Whether to check the content settings for an incognito session. (default
    // false)
    std::optional<bool> incognito;

  };


  Details details;


 private:
  Params();
};

namespace Results {

struct Details {
  Details();
  ~Details();
  Details(const Details&) = delete;
  Details& operator=(const Details&) = delete;
  Details(Details&& rhs) noexcept;
  Details& operator=(Details&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDetails object.
  base::Value::Dict ToValue() const;

  // The content setting. See the description of the individual ContentSetting
  // objects for the possible values.
  base::Value setting;

};


base::Value::List Create(const Details& details);
}  // namespace Results

}  // namespace Get

namespace Set {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Populates a Details object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Details& out);

    // Populates a Details object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Details& out);

    // Creates a deep copy of Details.
    Details Clone() const;

    // Creates a Details object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value::Dict& value);

    // Creates a Details object from a base::Value, or nullopt on failure.
    static std::optional<Details> FromValue(const base::Value& value);

    // The pattern for the primary URL. For details on the format of a pattern, see
    // <a href='contentSettings#patterns'>Content Setting Patterns</a>.
    std::string primary_pattern;

    // The pattern for the secondary URL. Defaults to matching all URLs. For details
    // on the format of a pattern, see <a href='contentSettings#patterns'>Content
    // Setting Patterns</a>.
    std::optional<std::string> secondary_pattern;

    // The resource identifier for the content type.
    std::optional<ResourceIdentifier> resource_identifier;

    // The setting applied by this rule. See the description of the individual
    // ContentSetting objects for the possible values.
    base::Value setting;

    // Where to set the setting (default: regular).
    Scope scope;

  };


  Details details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Set

namespace GetResourceIdentifiers {

namespace Results {

// A list of resource identifiers for this content type, or <var>undefined</var>
// if this content type does not use resource identifiers.
base::Value::List Create(const std::vector<ResourceIdentifier>& resource_identifiers);
}  // namespace Results

}  // namespace GetResourceIdentifiers

}  // namespace ContentSetting

enum class AutoVerifyContentSetting {
  kNone = 0,
  kAllow,
  kBlock,
  kMaxValue = kBlock,
};


const char* ToString(AutoVerifyContentSetting as_enum);
AutoVerifyContentSetting ParseAutoVerifyContentSetting(base::StringPiece as_string);
std::u16string GetAutoVerifyContentSettingParseError(base::StringPiece as_string);

enum class ClipboardContentSetting {
  kNone = 0,
  kAllow,
  kBlock,
  kAsk,
  kMaxValue = kAsk,
};


const char* ToString(ClipboardContentSetting as_enum);
ClipboardContentSetting ParseClipboardContentSetting(base::StringPiece as_string);
std::u16string GetClipboardContentSettingParseError(base::StringPiece as_string);

enum class CookiesContentSetting {
  kNone = 0,
  kAllow,
  kBlock,
  kSessionOnly,
  kMaxValue = kSessionOnly,
};


const char* ToString(CookiesContentSetting as_enum);
CookiesContentSetting ParseCookiesContentSetting(base::StringPiece as_string);
std::u16string GetCookiesContentSettingParseError(base::StringPiece as_string);

enum class ImagesContentSetting {
  kNone = 0,
  kAllow,
  kBlock,
  kMaxValue = kBlock,
};


const char* ToString(ImagesContentSetting as_enum);
ImagesContentSetting ParseImagesContentSetting(base::StringPiece as_string);
std::u16string GetImagesContentSettingParseError(base::StringPiece as_string);

enum class JavascriptContentSetting {
  kNone = 0,
  kAllow,
  kBlock,
  kMaxValue = kBlock,
};


const char* ToString(JavascriptContentSetting as_enum);
JavascriptContentSetting ParseJavascriptContentSetting(base::StringPiece as_string);
std::u16string GetJavascriptContentSettingParseError(base::StringPiece as_string);

enum class LocationContentSetting {
  kNone = 0,
  kAllow,
  kBlock,
  kAsk,
  kMaxValue = kAsk,
};


const char* ToString(LocationContentSetting as_enum);
LocationContentSetting ParseLocationContentSetting(base::StringPiece as_string);
std::u16string GetLocationContentSettingParseError(base::StringPiece as_string);

enum class PluginsContentSetting {
  kNone = 0,
  kBlock,
  kMaxValue = kBlock,
};


const char* ToString(PluginsContentSetting as_enum);
PluginsContentSetting ParsePluginsContentSetting(base::StringPiece as_string);
std::u16string GetPluginsContentSettingParseError(base::StringPiece as_string);

enum class PopupsContentSetting {
  kNone = 0,
  kAllow,
  kBlock,
  kMaxValue = kBlock,
};


const char* ToString(PopupsContentSetting as_enum);
PopupsContentSetting ParsePopupsContentSetting(base::StringPiece as_string);
std::u16string GetPopupsContentSettingParseError(base::StringPiece as_string);

enum class NotificationsContentSetting {
  kNone = 0,
  kAllow,
  kBlock,
  kAsk,
  kMaxValue = kAsk,
};


const char* ToString(NotificationsContentSetting as_enum);
NotificationsContentSetting ParseNotificationsContentSetting(base::StringPiece as_string);
std::u16string GetNotificationsContentSettingParseError(base::StringPiece as_string);

enum class FullscreenContentSetting {
  kNone = 0,
  kAllow,
  kMaxValue = kAllow,
};


const char* ToString(FullscreenContentSetting as_enum);
FullscreenContentSetting ParseFullscreenContentSetting(base::StringPiece as_string);
std::u16string GetFullscreenContentSettingParseError(base::StringPiece as_string);

enum class MouselockContentSetting {
  kNone = 0,
  kAllow,
  kMaxValue = kAllow,
};


const char* ToString(MouselockContentSetting as_enum);
MouselockContentSetting ParseMouselockContentSetting(base::StringPiece as_string);
std::u16string GetMouselockContentSettingParseError(base::StringPiece as_string);

enum class MicrophoneContentSetting {
  kNone = 0,
  kAllow,
  kBlock,
  kAsk,
  kMaxValue = kAsk,
};


const char* ToString(MicrophoneContentSetting as_enum);
MicrophoneContentSetting ParseMicrophoneContentSetting(base::StringPiece as_string);
std::u16string GetMicrophoneContentSettingParseError(base::StringPiece as_string);

enum class CameraContentSetting {
  kNone = 0,
  kAllow,
  kBlock,
  kAsk,
  kMaxValue = kAsk,
};


const char* ToString(CameraContentSetting as_enum);
CameraContentSetting ParseCameraContentSetting(base::StringPiece as_string);
std::u16string GetCameraContentSettingParseError(base::StringPiece as_string);

enum class PpapiBrokerContentSetting {
  kNone = 0,
  kBlock,
  kMaxValue = kBlock,
};


const char* ToString(PpapiBrokerContentSetting as_enum);
PpapiBrokerContentSetting ParsePpapiBrokerContentSetting(base::StringPiece as_string);
std::u16string GetPpapiBrokerContentSettingParseError(base::StringPiece as_string);

enum class MultipleAutomaticDownloadsContentSetting {
  kNone = 0,
  kAllow,
  kBlock,
  kAsk,
  kMaxValue = kAsk,
};


const char* ToString(MultipleAutomaticDownloadsContentSetting as_enum);
MultipleAutomaticDownloadsContentSetting ParseMultipleAutomaticDownloadsContentSetting(base::StringPiece as_string);
std::u16string GetMultipleAutomaticDownloadsContentSettingParseError(base::StringPiece as_string);


}  // namespace content_settings
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_CONTENT_SETTINGS_H__
