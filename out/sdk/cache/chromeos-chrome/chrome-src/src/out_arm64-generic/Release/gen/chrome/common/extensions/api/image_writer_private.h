// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/image_writer_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_IMAGE_WRITER_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_IMAGE_WRITER_PRIVATE_H__

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
namespace image_writer_private {

//
// Types
//

// <p>The different stages of a write call.</p><p><dl>    <dt>confirmation</dt>
// <dd>The process starts by prompting the user for confirmation.</dd>
// <dt>download</dt>    <dd>The image file is being download if a remote image
// was    requested.</dd>    <dt>verifyDownload</dt>    <dd>The download is
// being verified to match the image hash, if    provided</dd>    <dt>unzip</dt>
// <dd>The image is being extracted from the downloaded zip file</dd>
// <dt>write</dt>    <dd>The image is being written to disk.</dd>
// <dt>verifyWrite</dt>    <dt>The system is verifying that the written image
// matches the    downloaded image.</dd> <dl></p>
enum class Stage {
  kNone = 0,
  kConfirmation,
  kDownload,
  kVerifyDownload,
  kUnzip,
  kWrite,
  kVerifyWrite,
  kUnknown,
  kMaxValue = kUnknown,
};


const char* ToString(Stage as_enum);
Stage ParseStage(base::StringPiece as_string);
std::u16string GetStageParseError(base::StringPiece as_string);

struct UrlWriteOptions {
  UrlWriteOptions();
  ~UrlWriteOptions();
  UrlWriteOptions(const UrlWriteOptions&) = delete;
  UrlWriteOptions& operator=(const UrlWriteOptions&) = delete;
  UrlWriteOptions(UrlWriteOptions&& rhs) noexcept;
  UrlWriteOptions& operator=(UrlWriteOptions&& rhs) noexcept;

  // Populates a UrlWriteOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UrlWriteOptions& out);

  // Populates a UrlWriteOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, UrlWriteOptions& out);

  // Creates a deep copy of UrlWriteOptions.
  UrlWriteOptions Clone() const;

  // Creates a UrlWriteOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<UrlWriteOptions> FromValue(const base::Value::Dict& value);

  // Creates a UrlWriteOptions object from a base::Value, or nullopt on failure.
  static std::optional<UrlWriteOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUrlWriteOptions object.
  base::Value::Dict ToValue() const;

  // If present, verify that the downloaded image matches this hash.
  std::optional<std::string> image_hash;

  // If true, save the downloaded image as a file using the user's downloads
  // preferences.
  std::optional<bool> save_as_download;

};

struct ProgressInfo {
  ProgressInfo();
  ~ProgressInfo();
  ProgressInfo(const ProgressInfo&) = delete;
  ProgressInfo& operator=(const ProgressInfo&) = delete;
  ProgressInfo(ProgressInfo&& rhs) noexcept;
  ProgressInfo& operator=(ProgressInfo&& rhs) noexcept;

  // Populates a ProgressInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProgressInfo& out);

  // Populates a ProgressInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ProgressInfo& out);

  // Creates a deep copy of ProgressInfo.
  ProgressInfo Clone() const;

  // Creates a ProgressInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ProgressInfo> FromValue(const base::Value::Dict& value);

  // Creates a ProgressInfo object from a base::Value, or nullopt on failure.
  static std::optional<ProgressInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisProgressInfo object.
  base::Value::Dict ToValue() const;

  // The $(ref:Stage) that the write process is currently in.
  Stage stage;

  // Current progress within the stage.
  int percent_complete;

};

struct RemovableStorageDevice {
  RemovableStorageDevice();
  ~RemovableStorageDevice();
  RemovableStorageDevice(const RemovableStorageDevice&) = delete;
  RemovableStorageDevice& operator=(const RemovableStorageDevice&) = delete;
  RemovableStorageDevice(RemovableStorageDevice&& rhs) noexcept;
  RemovableStorageDevice& operator=(RemovableStorageDevice&& rhs) noexcept;

  // Populates a RemovableStorageDevice object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RemovableStorageDevice& out);

  // Populates a RemovableStorageDevice object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RemovableStorageDevice& out);

  // Creates a deep copy of RemovableStorageDevice.
  RemovableStorageDevice Clone() const;

  // Creates a RemovableStorageDevice object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<RemovableStorageDevice> FromValue(const base::Value::Dict& value);

  // Creates a RemovableStorageDevice object from a base::Value, or nullopt on
  // failure.
  static std::optional<RemovableStorageDevice> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRemovableStorageDevice object.
  base::Value::Dict ToValue() const;

  std::string storage_unit_id;

  double capacity;

  std::string vendor;

  std::string model;

  bool removable;

};


//
// Functions
//

namespace WriteFromUrl {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The identifier for the storage unit
  std::string storage_unit_id;

  // The url of the image to download which will be written to the storage unit
  // identified by |storageUnitId|
  std::string image_url;

  // Optional parameters if comparing the download with a given hash or saving the
  // download to the users Downloads folder instead of a temporary directory is
  // desired
  std::optional<UrlWriteOptions> options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace WriteFromUrl

namespace WriteFromFile {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The FileEntry object of the image to be burned.
  struct FileEntry {
    FileEntry();
    ~FileEntry();
    FileEntry(const FileEntry&) = delete;
    FileEntry& operator=(const FileEntry&) = delete;
    FileEntry(FileEntry&& rhs) noexcept;
    FileEntry& operator=(FileEntry&& rhs) noexcept;

    // Populates a FileEntry object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, FileEntry& out);

    // Populates a FileEntry object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, FileEntry& out);

    // Creates a deep copy of FileEntry.
    FileEntry Clone() const;

    // Creates a FileEntry object from a base::Value::Dict, or nullopt on failure.
    static std::optional<FileEntry> FromValue(const base::Value::Dict& value);

    // Creates a FileEntry object from a base::Value, or nullopt on failure.
    static std::optional<FileEntry> FromValue(const base::Value& value);

    base::Value::Dict additional_properties;
  };


  // The identifier for the storage unit
  std::string storage_unit_id;

  // The FileEntry object of the image to be burned.
  FileEntry file_entry;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace WriteFromFile

namespace CancelWrite {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace CancelWrite

namespace DestroyPartitions {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The identifier of the storage unit to wipe
  std::string storage_unit_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace DestroyPartitions

namespace ListRemovableStorageDevices {

namespace Results {

base::Value::List Create(const std::vector<RemovableStorageDevice>& devices);
}  // namespace Results

}  // namespace ListRemovableStorageDevices

//
// Events
//

namespace OnWriteProgress {

extern const char kEventName[];  // "imageWriterPrivate.onWriteProgress"

base::Value::List Create(const ProgressInfo& info);
}  // namespace OnWriteProgress

namespace OnWriteComplete {

extern const char kEventName[];  // "imageWriterPrivate.onWriteComplete"

base::Value::List Create();
}  // namespace OnWriteComplete

namespace OnWriteError {

extern const char kEventName[];  // "imageWriterPrivate.onWriteError"

base::Value::List Create(const ProgressInfo& info, const std::string& error);
}  // namespace OnWriteError

namespace OnDeviceInserted {

extern const char kEventName[];  // "imageWriterPrivate.onDeviceInserted"

base::Value::List Create(const RemovableStorageDevice& device);
}  // namespace OnDeviceInserted

namespace OnDeviceRemoved {

extern const char kEventName[];  // "imageWriterPrivate.onDeviceRemoved"

base::Value::List Create(const RemovableStorageDevice& device);
}  // namespace OnDeviceRemoved

}  // namespace image_writer_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_IMAGE_WRITER_PRIVATE_H__
