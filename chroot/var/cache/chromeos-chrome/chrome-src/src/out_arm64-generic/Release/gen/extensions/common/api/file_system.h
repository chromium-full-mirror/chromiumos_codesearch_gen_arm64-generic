// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/file_system.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_FILE_SYSTEM_H__
#define EXTENSIONS_COMMON_API_FILE_SYSTEM_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace file_system {

//
// Types
//

struct AcceptOption {
  AcceptOption();
  ~AcceptOption();
  AcceptOption(const AcceptOption&) = delete;
  AcceptOption& operator=(const AcceptOption&) = delete;
  AcceptOption(AcceptOption&& rhs);
  AcceptOption& operator=(AcceptOption&& rhs);

  // Populates a AcceptOption object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AcceptOption& out);

  // Populates a AcceptOption object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AcceptOption& out);

  // Creates a deep copy of AcceptOption.
  AcceptOption Clone() const;

  // Creates a AcceptOption object from a base::Value, or NULL on failure.
  static std::unique_ptr<AcceptOption> FromValueDeprecated(const base::Value& value);

  // Creates a AcceptOption object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<AcceptOption> FromValue(const base::Value::Dict& value);

  // Creates a AcceptOption object from a base::Value, or nullopt on failure.
  static absl::optional<AcceptOption> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAcceptOption object.
  base::Value::Dict ToValue() const;

  // This is the optional text description for this option. If not present, a
  // description will be automatically generated; typically containing an expanded
  // list of valid extensions (e.g. "text/html" may expand to "*.html, *.htm").
  absl::optional<std::string> description;

  // Mime-types to accept, e.g. "image/jpeg" or "audio/*". One of mimeTypes or
  // extensions must contain at least one valid element.
  absl::optional<std::vector<std::string>> mime_types;

  // Extensions to accept, e.g. "jpg", "gif", "crx".
  absl::optional<std::vector<std::string>> extensions;

};

enum class ChooseEntryType {
  kNone = 0,
  kOpenFile,
  kOpenWritableFile,
  kSaveFile,
  kOpenDirectory,
  kMaxValue = kOpenDirectory,
};


const char* ToString(ChooseEntryType as_enum);
ChooseEntryType ParseChooseEntryType(base::StringPiece as_string);

struct ChooseEntryOptions {
  ChooseEntryOptions();
  ~ChooseEntryOptions();
  ChooseEntryOptions(const ChooseEntryOptions&) = delete;
  ChooseEntryOptions& operator=(const ChooseEntryOptions&) = delete;
  ChooseEntryOptions(ChooseEntryOptions&& rhs);
  ChooseEntryOptions& operator=(ChooseEntryOptions&& rhs);

  // Populates a ChooseEntryOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ChooseEntryOptions& out);

  // Populates a ChooseEntryOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ChooseEntryOptions& out);

  // Creates a deep copy of ChooseEntryOptions.
  ChooseEntryOptions Clone() const;

  // Creates a ChooseEntryOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<ChooseEntryOptions> FromValueDeprecated(const base::Value& value);

  // Creates a ChooseEntryOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ChooseEntryOptions> FromValue(const base::Value::Dict& value);

  // Creates a ChooseEntryOptions object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ChooseEntryOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisChooseEntryOptions object.
  base::Value::Dict ToValue() const;

  // Type of the prompt to show. The default is 'openFile'.
  ChooseEntryType type;

  // The suggested file name that will be presented to the user as the default
  // name to read or write. This is optional.
  absl::optional<std::string> suggested_name;

  // The optional list of accept options for this file opener. Each option will be
  // presented as a unique group to the end-user.
  absl::optional<std::vector<AcceptOption>> accepts;

  // Whether to accept all file types, in addition to the options specified in the
  // accepts argument. The default is true. If the accepts field is unset or
  // contains no valid entries, this will always be reset to true.
  absl::optional<bool> accepts_all_types;

  // Whether to accept multiple files. This is only supported for openFile and
  // openWritableFile. The callback to chooseEntry will be called with a list of
  // entries if this is set to true. Otherwise it will be called with a single
  // Entry.
  absl::optional<bool> accepts_multiple;

};

struct RequestFileSystemOptions {
  RequestFileSystemOptions();
  ~RequestFileSystemOptions();
  RequestFileSystemOptions(const RequestFileSystemOptions&) = delete;
  RequestFileSystemOptions& operator=(const RequestFileSystemOptions&) = delete;
  RequestFileSystemOptions(RequestFileSystemOptions&& rhs);
  RequestFileSystemOptions& operator=(RequestFileSystemOptions&& rhs);

  // Populates a RequestFileSystemOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RequestFileSystemOptions& out);

  // Populates a RequestFileSystemOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RequestFileSystemOptions& out);

  // Creates a deep copy of RequestFileSystemOptions.
  RequestFileSystemOptions Clone() const;

  // Creates a RequestFileSystemOptions object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<RequestFileSystemOptions> FromValueDeprecated(const base::Value& value);

  // Creates a RequestFileSystemOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<RequestFileSystemOptions> FromValue(const base::Value::Dict& value);

  // Creates a RequestFileSystemOptions object from a base::Value, or nullopt on
  // failure.
  static absl::optional<RequestFileSystemOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRequestFileSystemOptions object.
  base::Value::Dict ToValue() const;

  // The ID of the requested volume.
  std::string volume_id;

  // Whether the requested file system should be writable. The default is
  // read-only.
  absl::optional<bool> writable;

};

struct Volume {
  Volume();
  ~Volume();
  Volume(const Volume&) = delete;
  Volume& operator=(const Volume&) = delete;
  Volume(Volume&& rhs);
  Volume& operator=(Volume&& rhs);

  // Populates a Volume object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Volume& out);

  // Populates a Volume object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Volume& out);

  // Creates a deep copy of Volume.
  Volume Clone() const;

  // Creates a Volume object from a base::Value, or NULL on failure.
  static std::unique_ptr<Volume> FromValueDeprecated(const base::Value& value);

  // Creates a Volume object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<Volume> FromValue(const base::Value::Dict& value);

  // Creates a Volume object from a base::Value, or nullopt on failure.
  static absl::optional<Volume> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisVolume object.
  base::Value::Dict ToValue() const;

  std::string volume_id;

  bool writable;

};

struct VolumeListChangedEvent {
  VolumeListChangedEvent();
  ~VolumeListChangedEvent();
  VolumeListChangedEvent(const VolumeListChangedEvent&) = delete;
  VolumeListChangedEvent& operator=(const VolumeListChangedEvent&) = delete;
  VolumeListChangedEvent(VolumeListChangedEvent&& rhs);
  VolumeListChangedEvent& operator=(VolumeListChangedEvent&& rhs);

  // Populates a VolumeListChangedEvent object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, VolumeListChangedEvent& out);

  // Populates a VolumeListChangedEvent object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, VolumeListChangedEvent& out);

  // Creates a deep copy of VolumeListChangedEvent.
  VolumeListChangedEvent Clone() const;

  // Creates a VolumeListChangedEvent object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<VolumeListChangedEvent> FromValueDeprecated(const base::Value& value);

  // Creates a VolumeListChangedEvent object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<VolumeListChangedEvent> FromValue(const base::Value::Dict& value);

  // Creates a VolumeListChangedEvent object from a base::Value, or nullopt on
  // failure.
  static absl::optional<VolumeListChangedEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisVolumeListChangedEvent object.
  base::Value::Dict ToValue() const;

  std::vector<Volume> volumes;

};


//
// Functions
//

namespace GetDisplayPath {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

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

    base::Value::Dict additional_properties;
  };


  Entry entry;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& display_path);
}  // namespace Results

}  // namespace GetDisplayPath

namespace GetWritableEntry {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

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

    base::Value::Dict additional_properties;
  };


  Entry entry;


 private:
  Params();
};

namespace Results {

struct Entry {
  Entry();
  ~Entry();
  Entry(const Entry&) = delete;
  Entry& operator=(const Entry&) = delete;
  Entry(Entry&& rhs);
  Entry& operator=(Entry&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEntry object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


base::Value::List Create(const Entry& entry);
}  // namespace Results

}  // namespace GetWritableEntry

namespace IsWritableEntry {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

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

    base::Value::Dict additional_properties;
  };


  Entry entry;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool is_writable);
}  // namespace Results

}  // namespace IsWritableEntry

namespace ChooseEntry {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  absl::optional<ChooseEntryOptions> options;


 private:
  Params();
};

namespace Results {

struct Entry {
  Entry();
  ~Entry();
  Entry(const Entry&) = delete;
  Entry& operator=(const Entry&) = delete;
  Entry(Entry&& rhs);
  Entry& operator=(Entry&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEntry object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};

struct FileEntriesType {
  FileEntriesType();
  ~FileEntriesType();
  FileEntriesType(const FileEntriesType&) = delete;
  FileEntriesType& operator=(const FileEntriesType&) = delete;
  FileEntriesType(FileEntriesType&& rhs);
  FileEntriesType& operator=(FileEntriesType&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFileEntriesType object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};



base::Value::List Create(const Entry& entry, const std::vector<FileEntriesType>& file_entries);
}  // namespace Results

}  // namespace ChooseEntry

namespace RestoreEntry {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string id;


 private:
  Params();
};

namespace Results {

struct Entry {
  Entry();
  ~Entry();
  Entry(const Entry&) = delete;
  Entry& operator=(const Entry&) = delete;
  Entry(Entry&& rhs);
  Entry& operator=(Entry&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEntry object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


base::Value::List Create(const Entry& entry);
}  // namespace Results

}  // namespace RestoreEntry

namespace IsRestorable {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool is_restorable);
}  // namespace Results

}  // namespace IsRestorable

namespace RetainEntry {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

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

    base::Value::Dict additional_properties;
  };


  Entry entry;


 private:
  Params();
};

}  // namespace RetainEntry

namespace RequestFileSystem {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  RequestFileSystemOptions options;


 private:
  Params();
};

namespace Results {

struct FileSystem {
  FileSystem();
  ~FileSystem();
  FileSystem(const FileSystem&) = delete;
  FileSystem& operator=(const FileSystem&) = delete;
  FileSystem(FileSystem&& rhs);
  FileSystem& operator=(FileSystem&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFileSystem object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


base::Value::List Create(const FileSystem& file_system);
}  // namespace Results

}  // namespace RequestFileSystem

namespace GetVolumeList {

namespace Results {

base::Value::List Create(const std::vector<Volume>& volumes);
}  // namespace Results

}  // namespace GetVolumeList

//
// Events
//

namespace OnVolumeListChanged {

extern const char kEventName[];  // "fileSystem.onVolumeListChanged"

base::Value::List Create(const VolumeListChangedEvent& event);
}  // namespace OnVolumeListChanged

}  // namespace file_system
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_FILE_SYSTEM_H__
