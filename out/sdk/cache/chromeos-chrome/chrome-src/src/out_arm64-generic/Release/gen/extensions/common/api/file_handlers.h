// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/file_handlers.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_FILE_HANDLERS_H__
#define EXTENSIONS_COMMON_API_FILE_HANDLERS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"
#include "base/types/expected.h"


namespace extensions {
namespace api {
namespace file_handlers {

//
// Types
//

struct Icon {
  Icon();
  ~Icon();
  Icon(const Icon&) = delete;
  Icon& operator=(const Icon&) = delete;
  Icon(Icon&& rhs);
  Icon& operator=(Icon&& rhs);

  // Populates a Icon object from a base::Value& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value& value, Icon& out, std::u16string& error);

  // Populates a Icon object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Icon& out, std::u16string& error);

  // Creates a deep copy of Icon.
  Icon Clone() const;

  // Creates a Icon object from a base::Value, or NULL on failure.
  static std::unique_ptr<Icon> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a Icon object from a base::Value::Dict, or unexpected on failure.
  static base::expected<Icon, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a Icon object from a base::Value, or unexpected on failure.
  static base::expected<Icon, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisIcon object.
  base::Value::Dict ToValue() const;

  // URL from which a user agent can fetch image data.
  std::string src;

  // Multiple space-separated size values to also accommodate image formats that
  // can act as containers for multiple images of varying dimensions: e.g.
  // "16x16", "16x16 32x32".
  absl::optional<std::string> sizes;

  // MIME type is purely advisory with no default value.
  absl::optional<std::string> type;

};

struct FileHandler {
  FileHandler();
  ~FileHandler();
  FileHandler(const FileHandler&) = delete;
  FileHandler& operator=(const FileHandler&) = delete;
  FileHandler(FileHandler&& rhs);
  FileHandler& operator=(FileHandler&& rhs);

  // Manifest key constants.
  static constexpr char kAccept[] = "accept";
  static constexpr char kAction[] = "action";
  static constexpr char kName[] = "name";
  static constexpr char kIcons[] = "icons";
  static constexpr char kLaunchType[] = "launch_type";

  // Populates a FileHandler object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FileHandler& out, std::u16string& error);

  // Populates a FileHandler object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, FileHandler& out, std::u16string& error);

  // Creates a deep copy of FileHandler.
  FileHandler Clone() const;

  // Creates a FileHandler object from a base::Value, or NULL on failure.
  static std::unique_ptr<FileHandler> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a FileHandler object from a base::Value::Dict, or unexpected on
  // failure.
  static base::expected<FileHandler, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a FileHandler object from a base::Value, or unexpected on failure.
  static base::expected<FileHandler, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFileHandler object.
  base::Value::Dict ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, base::StringPiece key, FileHandler& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed);


  // A mapping of one or more MIME types to one or more file extensions. e.g.
  // "accept": {"text/csv": ".csv"} or {"text/csv": [".csv", ".txt"]}.
  struct Accept {
    Accept();
    ~Accept();
    Accept(const Accept&) = delete;
    Accept& operator=(const Accept&) = delete;
    Accept(Accept&& rhs);
    Accept& operator=(Accept&& rhs);

    // Manifest key constants.

    // Populates a Accept object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Accept& out, std::u16string& error);

    // Populates a Accept object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Accept& out, std::u16string& error);

    // Creates a deep copy of Accept.
    Accept Clone() const;

    // Creates a Accept object from a base::Value::Dict, or unexpected on failure.
    static base::expected<Accept, std::u16string> FromValue(const base::Value::Dict& value);

    // Creates a Accept object from a base::Value, or unexpected on failure.
    static base::expected<Accept, std::u16string> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisAccept object.
    base::Value::Dict ToValue() const;

    // Parses the given |key| from |root_dict|. Any keys not available to the
    // manifest will be ignored. On a parsing error, false is returned and |error|
    // and |error_path_reversed| are populated.
    static bool ParseFromDictionary(const base::Value::Dict& root_dict, base::StringPiece key, Accept& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed);


    base::Value::Dict additional_properties;
  };


  // A mapping of one or more MIME types to one or more file extensions. e.g.
  // "accept": {"text/csv": ".csv"} or {"text/csv": [".csv", ".txt"]}.
  Accept accept;

  // Specifies the url after the origin that is the navigation destination for
  // file handling launches.
  std::string action;

  // Description of the file type.
  std::string name;

  // Array of ImageResources. Only icons declared at the manifest level are
  // currently supported. The icon for the extension will appear in the "Open"
  // menu.
  absl::optional<std::vector<Icon>> icons;

  // Whether multiple files should be opened in a single client or multiple.
  // Defaults to `single-client`, which makes all files available in only one tab.
  // `multiple-client` opens a new tab for each file.
  absl::optional<std::string> launch_type;

};


//
// Manifest Keys
//

struct ManifestKeys {
  ManifestKeys();
  ~ManifestKeys();
  ManifestKeys(const ManifestKeys&) = delete;
  ManifestKeys& operator=(const ManifestKeys&) = delete;
  ManifestKeys(ManifestKeys&& rhs);
  ManifestKeys& operator=(ManifestKeys&& rhs);

  // Manifest key constants.
  static constexpr char kFileHandlers[] = "file_handlers";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error);


  // File Handlers to register onto the target system.
  std::vector<FileHandler> file_handlers;

};

}  // namespace file_handlers
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_FILE_HANDLERS_H__
