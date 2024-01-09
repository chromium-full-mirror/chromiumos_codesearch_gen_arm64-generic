// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/wm_desks_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_WM_DESKS_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_WM_DESKS_PRIVATE_H__

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
namespace wm_desks_private {

//
// Types
//

enum class SavedDeskType {
  kNone = 0,
  kTemplate,
  kSaveAndRecall,
  kUnknown,
  kMaxValue = kUnknown,
};


const char* ToString(SavedDeskType as_enum);
SavedDeskType ParseSavedDeskType(base::StringPiece as_string);
std::u16string GetSavedDeskTypeParseError(base::StringPiece as_string);

struct RemoveDeskOptions {
  RemoveDeskOptions();
  ~RemoveDeskOptions();
  RemoveDeskOptions(const RemoveDeskOptions&) = delete;
  RemoveDeskOptions& operator=(const RemoveDeskOptions&) = delete;
  RemoveDeskOptions(RemoveDeskOptions&& rhs) noexcept;
  RemoveDeskOptions& operator=(RemoveDeskOptions&& rhs) noexcept;

  // Populates a RemoveDeskOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RemoveDeskOptions& out);

  // Populates a RemoveDeskOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RemoveDeskOptions& out);

  // Creates a deep copy of RemoveDeskOptions.
  RemoveDeskOptions Clone() const;

  // Creates a RemoveDeskOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<RemoveDeskOptions> FromValue(const base::Value::Dict& value);

  // Creates a RemoveDeskOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<RemoveDeskOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRemoveDeskOptions object.
  base::Value::Dict ToValue() const;

  // Define whether close all windows on the desk and combine them to the active
  // desk to the left.
  bool combine_desks;

  // Define whether removed desk is retrievable.
  std::optional<bool> allow_undo;

};

struct Desk {
  Desk();
  ~Desk();
  Desk(const Desk&) = delete;
  Desk& operator=(const Desk&) = delete;
  Desk(Desk&& rhs) noexcept;
  Desk& operator=(Desk&& rhs) noexcept;

  // Populates a Desk object from a base::Value& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value& value, Desk& out);

  // Populates a Desk object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Desk& out);

  // Creates a deep copy of Desk.
  Desk Clone() const;

  // Creates a Desk object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Desk> FromValue(const base::Value::Dict& value);

  // Creates a Desk object from a base::Value, or nullopt on failure.
  static std::optional<Desk> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDesk object.
  base::Value::Dict ToValue() const;

  // Unique ID for a desk.
  std::string desk_uuid;

  // User readable name of the desk.
  std::string desk_name;

};

struct SavedDesk {
  SavedDesk();
  ~SavedDesk();
  SavedDesk(const SavedDesk&) = delete;
  SavedDesk& operator=(const SavedDesk&) = delete;
  SavedDesk(SavedDesk&& rhs) noexcept;
  SavedDesk& operator=(SavedDesk&& rhs) noexcept;

  // Populates a SavedDesk object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, SavedDesk& out);

  // Populates a SavedDesk object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, SavedDesk& out);

  // Creates a deep copy of SavedDesk.
  SavedDesk Clone() const;

  // Creates a SavedDesk object from a base::Value::Dict, or nullopt on failure.
  static std::optional<SavedDesk> FromValue(const base::Value::Dict& value);

  // Creates a SavedDesk object from a base::Value, or nullopt on failure.
  static std::optional<SavedDesk> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSavedDesk object.
  base::Value::Dict ToValue() const;

  // Unique ID for a saved desk.
  std::string saved_desk_uuid;

  // User readable name of the saved desk.
  std::string saved_desk_name;

  // Saved desk type.
  SavedDeskType saved_desk_type;

};

struct LaunchOptions {
  LaunchOptions();
  ~LaunchOptions();
  LaunchOptions(const LaunchOptions&) = delete;
  LaunchOptions& operator=(const LaunchOptions&) = delete;
  LaunchOptions(LaunchOptions&& rhs) noexcept;
  LaunchOptions& operator=(LaunchOptions&& rhs) noexcept;

  // Populates a LaunchOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LaunchOptions& out);

  // Populates a LaunchOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, LaunchOptions& out);

  // Creates a deep copy of LaunchOptions.
  LaunchOptions Clone() const;

  // Creates a LaunchOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<LaunchOptions> FromValue(const base::Value::Dict& value);

  // Creates a LaunchOptions object from a base::Value, or nullopt on failure.
  static std::optional<LaunchOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisLaunchOptions object.
  base::Value::Dict ToValue() const;

  // User readable name of the desk.
  std::optional<std::string> desk_name;

};

struct WindowProperties {
  WindowProperties();
  ~WindowProperties();
  WindowProperties(const WindowProperties&) = delete;
  WindowProperties& operator=(const WindowProperties&) = delete;
  WindowProperties(WindowProperties&& rhs) noexcept;
  WindowProperties& operator=(WindowProperties&& rhs) noexcept;

  // Populates a WindowProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, WindowProperties& out);

  // Populates a WindowProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, WindowProperties& out);

  // Creates a deep copy of WindowProperties.
  WindowProperties Clone() const;

  // Creates a WindowProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<WindowProperties> FromValue(const base::Value::Dict& value);

  // Creates a WindowProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<WindowProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisWindowProperties object.
  base::Value::Dict ToValue() const;

  // If window show up on all desks.
  bool all_desks;

};


//
// Functions
//

namespace GetSavedDesks {

namespace Results {

base::Value::List Create(const std::vector<SavedDesk>& save_desks);
}  // namespace Results

}  // namespace GetSavedDesks

namespace LaunchDesk {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  LaunchOptions launch_options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& desk_id);
}  // namespace Results

}  // namespace LaunchDesk

namespace GetDeskTemplateJson {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string template_uuid;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& template_json);
}  // namespace Results

}  // namespace GetDeskTemplateJson

namespace RemoveDesk {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string desk_id;

  std::optional<RemoveDeskOptions> remove_desk_options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveDesk

namespace GetAllDesks {

namespace Results {

base::Value::List Create(const std::vector<Desk>& desks);
}  // namespace Results

}  // namespace GetAllDesks

namespace SetWindowProperties {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int window_id;

  WindowProperties window_properties;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetWindowProperties

namespace SaveActiveDesk {

namespace Results {

base::Value::List Create(const SavedDesk& desk);
}  // namespace Results

}  // namespace SaveActiveDesk

namespace DeleteSavedDesk {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string saved_desk_uuid;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace DeleteSavedDesk

namespace RecallSavedDesk {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string saved_desk_uuid;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& desk_id);
}  // namespace Results

}  // namespace RecallSavedDesk

namespace GetActiveDesk {

namespace Results {

base::Value::List Create(const std::string& desk_id);
}  // namespace Results

}  // namespace GetActiveDesk

namespace SwitchDesk {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string desk_uuid;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SwitchDesk

namespace GetDeskByID {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string desk_uuid;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const Desk& desk);
}  // namespace Results

}  // namespace GetDeskByID

//
// Events
//

namespace OnDeskAdded {

extern const char kEventName[];  // "wmDesksPrivate.OnDeskAdded"

base::Value::List Create(const std::string& desk_id, bool from_undo);
}  // namespace OnDeskAdded

namespace OnDeskRemoved {

extern const char kEventName[];  // "wmDesksPrivate.OnDeskRemoved"

base::Value::List Create(const std::string& desk_id);
}  // namespace OnDeskRemoved

namespace OnDeskSwitched {

extern const char kEventName[];  // "wmDesksPrivate.OnDeskSwitched"

base::Value::List Create(const std::string& activated, const std::string& deactivated);
}  // namespace OnDeskSwitched

}  // namespace wm_desks_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_WM_DESKS_PRIVATE_H__
