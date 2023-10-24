// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/apps/platform_apps/api/media_galleries.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_APPS_PLATFORM_APPS_API_MEDIA_GALLERIES_H__
#define CHROME_COMMON_APPS_PLATFORM_APPS_API_MEDIA_GALLERIES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace chrome_apps {
namespace api {
namespace media_galleries {

//
// Types
//

enum class GalleryChangeType {
  kNone = 0,
  kContentsChanged,
  kWatchDropped,
  kMaxValue = kWatchDropped,
};


const char* ToString(GalleryChangeType as_enum);
GalleryChangeType ParseGalleryChangeType(base::StringPiece as_string);
std::u16string GetGalleryChangeTypeParseError(base::StringPiece as_string);

enum class GetMediaFileSystemsInteractivity {
  kNone = 0,
  kNo,
  kYes,
  kIfNeeded,
  kMaxValue = kIfNeeded,
};


const char* ToString(GetMediaFileSystemsInteractivity as_enum);
GetMediaFileSystemsInteractivity ParseGetMediaFileSystemsInteractivity(base::StringPiece as_string);
std::u16string GetGetMediaFileSystemsInteractivityParseError(base::StringPiece as_string);

enum class GetMetadataType {
  kNone = 0,
  kAll,
  kMimeTypeAndTags,
  kMimeTypeOnly,
  kMaxValue = kMimeTypeOnly,
};


const char* ToString(GetMetadataType as_enum);
GetMetadataType ParseGetMetadataType(base::StringPiece as_string);
std::u16string GetGetMetadataTypeParseError(base::StringPiece as_string);

struct GalleryChangeDetails {
  GalleryChangeDetails();
  ~GalleryChangeDetails();
  GalleryChangeDetails(const GalleryChangeDetails&) = delete;
  GalleryChangeDetails& operator=(const GalleryChangeDetails&) = delete;
  GalleryChangeDetails(GalleryChangeDetails&& rhs);
  GalleryChangeDetails& operator=(GalleryChangeDetails&& rhs);

  // Populates a GalleryChangeDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GalleryChangeDetails& out);

  // Populates a GalleryChangeDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GalleryChangeDetails& out);

  // Creates a deep copy of GalleryChangeDetails.
  GalleryChangeDetails Clone() const;

  // Creates a GalleryChangeDetails object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<GalleryChangeDetails> FromValueDeprecated(const base::Value& value);

  // Creates a GalleryChangeDetails object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<GalleryChangeDetails> FromValue(const base::Value::Dict& value);

  // Creates a GalleryChangeDetails object from a base::Value, or nullopt on
  // failure.
  static absl::optional<GalleryChangeDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGalleryChangeDetails object.
  base::Value::Dict ToValue() const;

  // Type of change event.
  GalleryChangeType type;

  // Identifies the modified gallery.
  std::string gallery_id;

};

struct MediaFileSystemsDetails {
  MediaFileSystemsDetails();
  ~MediaFileSystemsDetails();
  MediaFileSystemsDetails(const MediaFileSystemsDetails&) = delete;
  MediaFileSystemsDetails& operator=(const MediaFileSystemsDetails&) = delete;
  MediaFileSystemsDetails(MediaFileSystemsDetails&& rhs);
  MediaFileSystemsDetails& operator=(MediaFileSystemsDetails&& rhs);

  // Populates a MediaFileSystemsDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MediaFileSystemsDetails& out);

  // Populates a MediaFileSystemsDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MediaFileSystemsDetails& out);

  // Creates a deep copy of MediaFileSystemsDetails.
  MediaFileSystemsDetails Clone() const;

  // Creates a MediaFileSystemsDetails object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<MediaFileSystemsDetails> FromValueDeprecated(const base::Value& value);

  // Creates a MediaFileSystemsDetails object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<MediaFileSystemsDetails> FromValue(const base::Value::Dict& value);

  // Creates a MediaFileSystemsDetails object from a base::Value, or nullopt on
  // failure.
  static absl::optional<MediaFileSystemsDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMediaFileSystemsDetails object.
  base::Value::Dict ToValue() const;

  // Whether to prompt the user for permission to additional media galleries
  // before returning the permitted set. Default is silent.  If the value 'yes' is
  // passed, or if the application has not been granted access to any media
  // galleries and the value 'if_needed' is passed, then the media gallery
  // configuration dialog will be displayed.
  GetMediaFileSystemsInteractivity interactive;

};

struct MediaMetadataOptions {
  MediaMetadataOptions();
  ~MediaMetadataOptions();
  MediaMetadataOptions(const MediaMetadataOptions&) = delete;
  MediaMetadataOptions& operator=(const MediaMetadataOptions&) = delete;
  MediaMetadataOptions(MediaMetadataOptions&& rhs);
  MediaMetadataOptions& operator=(MediaMetadataOptions&& rhs);

  // Populates a MediaMetadataOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MediaMetadataOptions& out);

  // Populates a MediaMetadataOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MediaMetadataOptions& out);

  // Creates a deep copy of MediaMetadataOptions.
  MediaMetadataOptions Clone() const;

  // Creates a MediaMetadataOptions object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<MediaMetadataOptions> FromValueDeprecated(const base::Value& value);

  // Creates a MediaMetadataOptions object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<MediaMetadataOptions> FromValue(const base::Value::Dict& value);

  // Creates a MediaMetadataOptions object from a base::Value, or nullopt on
  // failure.
  static absl::optional<MediaMetadataOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMediaMetadataOptions object.
  base::Value::Dict ToValue() const;

  // Specifies which subset of the metadata to retrieve. Defaults to 'all' if the
  // option is omitted.
  GetMetadataType metadata_type;

};

struct MediaFileSystemMetadata {
  MediaFileSystemMetadata();
  ~MediaFileSystemMetadata();
  MediaFileSystemMetadata(const MediaFileSystemMetadata&) = delete;
  MediaFileSystemMetadata& operator=(const MediaFileSystemMetadata&) = delete;
  MediaFileSystemMetadata(MediaFileSystemMetadata&& rhs);
  MediaFileSystemMetadata& operator=(MediaFileSystemMetadata&& rhs);

  // Populates a MediaFileSystemMetadata object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MediaFileSystemMetadata& out);

  // Populates a MediaFileSystemMetadata object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MediaFileSystemMetadata& out);

  // Creates a deep copy of MediaFileSystemMetadata.
  MediaFileSystemMetadata Clone() const;

  // Creates a MediaFileSystemMetadata object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<MediaFileSystemMetadata> FromValueDeprecated(const base::Value& value);

  // Creates a MediaFileSystemMetadata object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<MediaFileSystemMetadata> FromValue(const base::Value::Dict& value);

  // Creates a MediaFileSystemMetadata object from a base::Value, or nullopt on
  // failure.
  static absl::optional<MediaFileSystemMetadata> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMediaFileSystemMetadata object.
  base::Value::Dict ToValue() const;

  // The name of the file system.
  std::string name;

  // A unique and persistent id for the media gallery.
  std::string gallery_id;

  // If the media gallery is on a removable device, a unique id for the device
  // while the device is online.
  absl::optional<std::string> device_id;

  // True if the media gallery is on a removable device.
  bool is_removable;

  // True if the device the media gallery is on was detected as a media device.
  // i.e. a PTP or MTP device, or a DCIM directory is present.
  bool is_media_device;

  // True if the device is currently available.
  bool is_available;

};

struct StreamInfo {
  StreamInfo();
  ~StreamInfo();
  StreamInfo(const StreamInfo&) = delete;
  StreamInfo& operator=(const StreamInfo&) = delete;
  StreamInfo(StreamInfo&& rhs);
  StreamInfo& operator=(StreamInfo&& rhs);

  // Populates a StreamInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, StreamInfo& out);

  // Populates a StreamInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, StreamInfo& out);

  // Creates a deep copy of StreamInfo.
  StreamInfo Clone() const;

  // Creates a StreamInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<StreamInfo> FromValueDeprecated(const base::Value& value);

  // Creates a StreamInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<StreamInfo> FromValue(const base::Value::Dict& value);

  // Creates a StreamInfo object from a base::Value, or nullopt on failure.
  static absl::optional<StreamInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStreamInfo object.
  base::Value::Dict ToValue() const;

  // An unfiltered string->string dictionary of tags for the stream.
  struct Tags {
    Tags();
    ~Tags();
    Tags(const Tags&) = delete;
    Tags& operator=(const Tags&) = delete;
    Tags(Tags&& rhs);
    Tags& operator=(Tags&& rhs);

    // Populates a Tags object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Tags& out);

    // Populates a Tags object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Tags& out);

    // Creates a deep copy of Tags.
    Tags Clone() const;

    // Creates a Tags object from a base::Value::Dict, or nullopt on failure.
    static absl::optional<Tags> FromValue(const base::Value::Dict& value);

    // Creates a Tags object from a base::Value, or nullopt on failure.
    static absl::optional<Tags> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisTags object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };


  // Describes format of container or codec of stream, i.e. "mp3", "h264".
  std::string type;

  // An unfiltered string->string dictionary of tags for the stream.
  Tags tags;

};

struct MediaMetadata {
  MediaMetadata();
  ~MediaMetadata();
  MediaMetadata(const MediaMetadata&) = delete;
  MediaMetadata& operator=(const MediaMetadata&) = delete;
  MediaMetadata(MediaMetadata&& rhs);
  MediaMetadata& operator=(MediaMetadata&& rhs);

  // Populates a MediaMetadata object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MediaMetadata& out);

  // Populates a MediaMetadata object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MediaMetadata& out);

  // Creates a deep copy of MediaMetadata.
  MediaMetadata Clone() const;

  // Creates a MediaMetadata object from a base::Value, or NULL on failure.
  static std::unique_ptr<MediaMetadata> FromValueDeprecated(const base::Value& value);

  // Creates a MediaMetadata object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<MediaMetadata> FromValue(const base::Value::Dict& value);

  // Creates a MediaMetadata object from a base::Value, or nullopt on failure.
  static absl::optional<MediaMetadata> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMediaMetadata object.
  base::Value::Dict ToValue() const;

  struct AttachedImagesType {
    AttachedImagesType();
    ~AttachedImagesType();
    AttachedImagesType(const AttachedImagesType&) = delete;
    AttachedImagesType& operator=(const AttachedImagesType&) = delete;
    AttachedImagesType(AttachedImagesType&& rhs);
    AttachedImagesType& operator=(AttachedImagesType&& rhs);

    // Populates a AttachedImagesType object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, AttachedImagesType& out);

    // Populates a AttachedImagesType object from a Dict& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, AttachedImagesType& out);

    // Creates a deep copy of AttachedImagesType.
    AttachedImagesType Clone() const;

    // Creates a AttachedImagesType object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<AttachedImagesType> FromValue(const base::Value::Dict& value);

    // Creates a AttachedImagesType object from a base::Value, or nullopt on
    // failure.
    static absl::optional<AttachedImagesType> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisAttachedImagesType object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };



  // The browser sniffed mime type.
  std::string mime_type;

  // Defined for video. In pixels.
  absl::optional<int> height;

  absl::optional<int> width;

  // Defined for audio and video. In seconds.
  absl::optional<double> duration;

  // Defined for video. In degrees.
  absl::optional<int> rotation;

  // Defined for audio and video.
  absl::optional<std::string> album;

  absl::optional<std::string> artist;

  absl::optional<std::string> comment;

  absl::optional<std::string> copyright;

  absl::optional<int> disc;

  absl::optional<std::string> genre;

  absl::optional<std::string> language;

  absl::optional<std::string> title;

  absl::optional<int> track;

  // All the metadata in the media file. For formats with multiple streams, stream
  // order will be preserved. Container metadata is the first element.
  std::vector<StreamInfo> raw_tags;

  // The images embedded in the media file's metadata. This is most often used for
  // album art or video thumbnails.
  std::vector<AttachedImagesType> attached_images;

};

struct AddGalleryWatchResult {
  AddGalleryWatchResult();
  ~AddGalleryWatchResult();
  AddGalleryWatchResult(const AddGalleryWatchResult&) = delete;
  AddGalleryWatchResult& operator=(const AddGalleryWatchResult&) = delete;
  AddGalleryWatchResult(AddGalleryWatchResult&& rhs);
  AddGalleryWatchResult& operator=(AddGalleryWatchResult&& rhs);

  // Populates a AddGalleryWatchResult object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AddGalleryWatchResult& out);

  // Populates a AddGalleryWatchResult object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AddGalleryWatchResult& out);

  // Creates a deep copy of AddGalleryWatchResult.
  AddGalleryWatchResult Clone() const;

  // Creates a AddGalleryWatchResult object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<AddGalleryWatchResult> FromValueDeprecated(const base::Value& value);

  // Creates a AddGalleryWatchResult object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<AddGalleryWatchResult> FromValue(const base::Value::Dict& value);

  // Creates a AddGalleryWatchResult object from a base::Value, or nullopt on
  // failure.
  static absl::optional<AddGalleryWatchResult> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAddGalleryWatchResult object.
  base::Value::Dict ToValue() const;

  std::string gallery_id;

  bool success;

};


//
// Functions
//

namespace GetMediaFileSystems {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  absl::optional<MediaFileSystemsDetails> details;


 private:
  Params();
};

namespace Results {

struct MediaFileSystemsType {
  MediaFileSystemsType();
  ~MediaFileSystemsType();
  MediaFileSystemsType(const MediaFileSystemsType&) = delete;
  MediaFileSystemsType& operator=(const MediaFileSystemsType&) = delete;
  MediaFileSystemsType(MediaFileSystemsType&& rhs);
  MediaFileSystemsType& operator=(MediaFileSystemsType&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMediaFileSystemsType object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};



base::Value::List Create(const std::vector<MediaFileSystemsType>& media_file_systems);
}  // namespace Results

}  // namespace GetMediaFileSystems

namespace AddUserSelectedFolder {

namespace Results {

struct MediaFileSystemsType {
  MediaFileSystemsType();
  ~MediaFileSystemsType();
  MediaFileSystemsType(const MediaFileSystemsType&) = delete;
  MediaFileSystemsType& operator=(const MediaFileSystemsType&) = delete;
  MediaFileSystemsType(MediaFileSystemsType&& rhs);
  MediaFileSystemsType& operator=(MediaFileSystemsType&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMediaFileSystemsType object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};



base::Value::List Create(const std::vector<MediaFileSystemsType>& media_file_systems, const std::string& selected_file_system_name);
}  // namespace Results

}  // namespace AddUserSelectedFolder

namespace GetMetadata {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct MediaFile {
    MediaFile();
    ~MediaFile();
    MediaFile(const MediaFile&) = delete;
    MediaFile& operator=(const MediaFile&) = delete;
    MediaFile(MediaFile&& rhs);
    MediaFile& operator=(MediaFile&& rhs);

    // Populates a MediaFile object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, MediaFile& out);

    // Populates a MediaFile object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, MediaFile& out);

    // Creates a deep copy of MediaFile.
    MediaFile Clone() const;

    // Creates a MediaFile object from a base::Value::Dict, or nullopt on failure.
    static absl::optional<MediaFile> FromValue(const base::Value::Dict& value);

    // Creates a MediaFile object from a base::Value, or nullopt on failure.
    static absl::optional<MediaFile> FromValue(const base::Value& value);

    base::Value::Dict additional_properties;
  };


  MediaFile media_file;

  absl::optional<MediaMetadataOptions> options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const MediaMetadata& metadata);
}  // namespace Results

}  // namespace GetMetadata

namespace AddGalleryWatch {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string gallery_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const AddGalleryWatchResult& result);
}  // namespace Results

}  // namespace AddGalleryWatch

namespace RemoveGalleryWatch {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string gallery_id;


 private:
  Params();
};

}  // namespace RemoveGalleryWatch

//
// Events
//

namespace OnGalleryChanged {

extern const char kEventName[];  // "mediaGalleries.onGalleryChanged"

base::Value::List Create(const GalleryChangeDetails& details);
}  // namespace OnGalleryChanged

}  // namespace media_galleries
}  // namespace api
}  // namespace chrome_apps

#endif  // CHROME_COMMON_APPS_PLATFORM_APPS_API_MEDIA_GALLERIES_H__
