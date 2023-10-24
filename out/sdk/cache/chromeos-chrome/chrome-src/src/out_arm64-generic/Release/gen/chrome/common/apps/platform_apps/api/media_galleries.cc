// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/apps/platform_apps/api/media_galleries.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/apps/platform_apps/api/media_galleries.h"

#include <memory>
#include <ostream>
#include <string>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"
#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace chrome_apps {
namespace api {
namespace media_galleries {
//
// Types
//

const char* ToString(GalleryChangeType enum_param) {
  switch (enum_param) {
    case GalleryChangeType::kContentsChanged:
      return "contents_changed";
    case GalleryChangeType::kWatchDropped:
      return "watch_dropped";
    case GalleryChangeType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

GalleryChangeType ParseGalleryChangeType(base::StringPiece enum_string) {
  if (enum_string == "contents_changed")
    return GalleryChangeType::kContentsChanged;
  if (enum_string == "watch_dropped")
    return GalleryChangeType::kWatchDropped;
  return GalleryChangeType::kNone;
}

std::u16string GetGalleryChangeTypeParseError(base::StringPiece enum_string) {
  return u"expected \"contents_changed\" or \"watch_dropped\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(GetMediaFileSystemsInteractivity enum_param) {
  switch (enum_param) {
    case GetMediaFileSystemsInteractivity::kNo:
      return "no";
    case GetMediaFileSystemsInteractivity::kYes:
      return "yes";
    case GetMediaFileSystemsInteractivity::kIfNeeded:
      return "if_needed";
    case GetMediaFileSystemsInteractivity::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

GetMediaFileSystemsInteractivity ParseGetMediaFileSystemsInteractivity(base::StringPiece enum_string) {
  if (enum_string == "no")
    return GetMediaFileSystemsInteractivity::kNo;
  if (enum_string == "yes")
    return GetMediaFileSystemsInteractivity::kYes;
  if (enum_string == "if_needed")
    return GetMediaFileSystemsInteractivity::kIfNeeded;
  return GetMediaFileSystemsInteractivity::kNone;
}

std::u16string GetGetMediaFileSystemsInteractivityParseError(base::StringPiece enum_string) {
  return u"expected \"no\" or \"yes\" or \"if_needed\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(GetMetadataType enum_param) {
  switch (enum_param) {
    case GetMetadataType::kAll:
      return "all";
    case GetMetadataType::kMimeTypeAndTags:
      return "mimeTypeAndTags";
    case GetMetadataType::kMimeTypeOnly:
      return "mimeTypeOnly";
    case GetMetadataType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

GetMetadataType ParseGetMetadataType(base::StringPiece enum_string) {
  if (enum_string == "all")
    return GetMetadataType::kAll;
  if (enum_string == "mimeTypeAndTags")
    return GetMetadataType::kMimeTypeAndTags;
  if (enum_string == "mimeTypeOnly")
    return GetMetadataType::kMimeTypeOnly;
  return GetMetadataType::kNone;
}

std::u16string GetGetMetadataTypeParseError(base::StringPiece enum_string) {
  return u"expected \"all\" or \"mimeTypeAndTags\" or \"mimeTypeOnly\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


GalleryChangeDetails::GalleryChangeDetails()
: type() {}

GalleryChangeDetails::~GalleryChangeDetails() = default;
GalleryChangeDetails::GalleryChangeDetails(GalleryChangeDetails&& rhs) = default;
GalleryChangeDetails& GalleryChangeDetails::operator=(GalleryChangeDetails&& rhs) = default;
GalleryChangeDetails GalleryChangeDetails::Clone() const {
  GalleryChangeDetails out;
  out.type = type;
  out.gallery_id = gallery_id;
  return out;
}

// static
bool GalleryChangeDetails::Populate(
    const base::Value::Dict& dict, GalleryChangeDetails& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* gallery_change_type_as_string = (*type_value).GetIfString();
    if (!gallery_change_type_as_string) {
      return false;
    }
    out.type = ParseGalleryChangeType(*gallery_change_type_as_string);
    if (out.type == GalleryChangeType()) {
      return false;
    }
  }

  const base::Value* gallery_id_value = dict.Find("galleryId");
  if (!gallery_id_value) {
    return false;
  }
  {
    auto* temp = (*gallery_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.gallery_id = *temp;
  }

  return true;
}

// static
bool GalleryChangeDetails::Populate(
    const base::Value& value, GalleryChangeDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<GalleryChangeDetails> GalleryChangeDetails::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<GalleryChangeDetails>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<GalleryChangeDetails> GalleryChangeDetails::FromValue(const base::Value::Dict& value) {
  GalleryChangeDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<GalleryChangeDetails> GalleryChangeDetails::FromValue(const base::Value& value) {
  GalleryChangeDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict GalleryChangeDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", media_galleries::ToString(this->type));

  to_value_result.Set("galleryId", this->gallery_id);


  return to_value_result;
}


MediaFileSystemsDetails::MediaFileSystemsDetails()
: interactive() {}

MediaFileSystemsDetails::~MediaFileSystemsDetails() = default;
MediaFileSystemsDetails::MediaFileSystemsDetails(MediaFileSystemsDetails&& rhs) = default;
MediaFileSystemsDetails& MediaFileSystemsDetails::operator=(MediaFileSystemsDetails&& rhs) = default;
MediaFileSystemsDetails MediaFileSystemsDetails::Clone() const {
  MediaFileSystemsDetails out;
  out.interactive = interactive;
  return out;
}

// static
bool MediaFileSystemsDetails::Populate(
    const base::Value::Dict& dict, MediaFileSystemsDetails& out) {
  out.interactive = GetMediaFileSystemsInteractivity();
  const base::Value* interactive_value = dict.Find("interactive");
  if (interactive_value) {
    {
      const std::string* get_media_file_systems_interactivity_as_string = (*interactive_value).GetIfString();
      if (!get_media_file_systems_interactivity_as_string) {
        return false;
      }
      out.interactive = ParseGetMediaFileSystemsInteractivity(*get_media_file_systems_interactivity_as_string);
      if (out.interactive == GetMediaFileSystemsInteractivity()) {
        return false;
      }
    }
    } else {
    out.interactive = GetMediaFileSystemsInteractivity();
  }

  return true;
}

// static
bool MediaFileSystemsDetails::Populate(
    const base::Value& value, MediaFileSystemsDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<MediaFileSystemsDetails> MediaFileSystemsDetails::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MediaFileSystemsDetails>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<MediaFileSystemsDetails> MediaFileSystemsDetails::FromValue(const base::Value::Dict& value) {
  MediaFileSystemsDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MediaFileSystemsDetails> MediaFileSystemsDetails::FromValue(const base::Value& value) {
  MediaFileSystemsDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict MediaFileSystemsDetails::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->interactive != GetMediaFileSystemsInteractivity()) {
    to_value_result.Set("interactive", media_galleries::ToString(this->interactive));

  }

  return to_value_result;
}


MediaMetadataOptions::MediaMetadataOptions()
: metadata_type() {}

MediaMetadataOptions::~MediaMetadataOptions() = default;
MediaMetadataOptions::MediaMetadataOptions(MediaMetadataOptions&& rhs) = default;
MediaMetadataOptions& MediaMetadataOptions::operator=(MediaMetadataOptions&& rhs) = default;
MediaMetadataOptions MediaMetadataOptions::Clone() const {
  MediaMetadataOptions out;
  out.metadata_type = metadata_type;
  return out;
}

// static
bool MediaMetadataOptions::Populate(
    const base::Value::Dict& dict, MediaMetadataOptions& out) {
  out.metadata_type = GetMetadataType();
  const base::Value* metadata_type_value = dict.Find("metadataType");
  if (metadata_type_value) {
    {
      const std::string* get_metadata_type_as_string = (*metadata_type_value).GetIfString();
      if (!get_metadata_type_as_string) {
        return false;
      }
      out.metadata_type = ParseGetMetadataType(*get_metadata_type_as_string);
      if (out.metadata_type == GetMetadataType()) {
        return false;
      }
    }
    } else {
    out.metadata_type = GetMetadataType();
  }

  return true;
}

// static
bool MediaMetadataOptions::Populate(
    const base::Value& value, MediaMetadataOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<MediaMetadataOptions> MediaMetadataOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MediaMetadataOptions>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<MediaMetadataOptions> MediaMetadataOptions::FromValue(const base::Value::Dict& value) {
  MediaMetadataOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MediaMetadataOptions> MediaMetadataOptions::FromValue(const base::Value& value) {
  MediaMetadataOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict MediaMetadataOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->metadata_type != GetMetadataType()) {
    to_value_result.Set("metadataType", media_galleries::ToString(this->metadata_type));

  }

  return to_value_result;
}


MediaFileSystemMetadata::MediaFileSystemMetadata()
: is_removable(false),
is_media_device(false),
is_available(false) {}

MediaFileSystemMetadata::~MediaFileSystemMetadata() = default;
MediaFileSystemMetadata::MediaFileSystemMetadata(MediaFileSystemMetadata&& rhs) = default;
MediaFileSystemMetadata& MediaFileSystemMetadata::operator=(MediaFileSystemMetadata&& rhs) = default;
MediaFileSystemMetadata MediaFileSystemMetadata::Clone() const {
  MediaFileSystemMetadata out;
  out.name = name;
  out.gallery_id = gallery_id;
  out.device_id = device_id;
  out.is_removable = is_removable;
  out.is_media_device = is_media_device;
  out.is_available = is_available;
  return out;
}

// static
bool MediaFileSystemMetadata::Populate(
    const base::Value::Dict& dict, MediaFileSystemMetadata& out) {
  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* gallery_id_value = dict.Find("galleryId");
  if (!gallery_id_value) {
    return false;
  }
  {
    auto* temp = (*gallery_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.gallery_id = *temp;
  }

  const base::Value* device_id_value = dict.Find("deviceId");
  if (device_id_value) {
    {
      auto* temp = (*device_id_value).GetIfString();
      if (!temp) {
        out.device_id = absl::nullopt;
        return false;
      }
      out.device_id = *temp;
    }
  }

  const base::Value* is_removable_value = dict.Find("isRemovable");
  if (!is_removable_value) {
    return false;
  }
  {
    auto temp = (*is_removable_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_removable = *temp;
  }

  const base::Value* is_media_device_value = dict.Find("isMediaDevice");
  if (!is_media_device_value) {
    return false;
  }
  {
    auto temp = (*is_media_device_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_media_device = *temp;
  }

  const base::Value* is_available_value = dict.Find("isAvailable");
  if (!is_available_value) {
    return false;
  }
  {
    auto temp = (*is_available_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_available = *temp;
  }

  return true;
}

// static
bool MediaFileSystemMetadata::Populate(
    const base::Value& value, MediaFileSystemMetadata& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<MediaFileSystemMetadata> MediaFileSystemMetadata::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MediaFileSystemMetadata>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<MediaFileSystemMetadata> MediaFileSystemMetadata::FromValue(const base::Value::Dict& value) {
  MediaFileSystemMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MediaFileSystemMetadata> MediaFileSystemMetadata::FromValue(const base::Value& value) {
  MediaFileSystemMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict MediaFileSystemMetadata::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("galleryId", this->gallery_id);

  if (this->device_id) {
    to_value_result.Set("deviceId", *this->device_id);

  }
  to_value_result.Set("isRemovable", this->is_removable);

  to_value_result.Set("isMediaDevice", this->is_media_device);

  to_value_result.Set("isAvailable", this->is_available);


  return to_value_result;
}


StreamInfo::Tags::Tags()
 {}

StreamInfo::Tags::~Tags() = default;
StreamInfo::Tags::Tags(Tags&& rhs) = default;
StreamInfo::Tags& StreamInfo::Tags::operator=(Tags&& rhs) = default;
StreamInfo::Tags StreamInfo::Tags::Clone() const {
  Tags out;
  return out;
}

// static
bool StreamInfo::Tags::Populate(
    const base::Value::Dict& dict, Tags& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool StreamInfo::Tags::Populate(
    const base::Value& value, Tags& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<StreamInfo::Tags> StreamInfo::Tags::FromValue(const base::Value::Dict& value) {
  Tags out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<StreamInfo::Tags> StreamInfo::Tags::FromValue(const base::Value& value) {
  Tags out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict StreamInfo::Tags::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



StreamInfo::StreamInfo()
 {}

StreamInfo::~StreamInfo() = default;
StreamInfo::StreamInfo(StreamInfo&& rhs) = default;
StreamInfo& StreamInfo::operator=(StreamInfo&& rhs) = default;
StreamInfo StreamInfo::Clone() const {
  StreamInfo out;
  out.type = type;
  out.tags = tags.Clone();
  return out;
}

// static
bool StreamInfo::Populate(
    const base::Value::Dict& dict, StreamInfo& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    auto* temp = (*type_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.type = *temp;
  }

  const base::Value* tags_value = dict.Find("tags");
  if (!tags_value) {
    return false;
  }
  {
    if (!(*tags_value).is_dict()) {
      return false;
    }
    if (!Tags::Populate((*tags_value).GetDict(), out.tags)) {
      return false;
    }
  }

  return true;
}

// static
bool StreamInfo::Populate(
    const base::Value& value, StreamInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<StreamInfo> StreamInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<StreamInfo>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<StreamInfo> StreamInfo::FromValue(const base::Value::Dict& value) {
  StreamInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<StreamInfo> StreamInfo::FromValue(const base::Value& value) {
  StreamInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict StreamInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", this->type);

  to_value_result.Set("tags", (this->tags).ToValue());


  return to_value_result;
}


MediaMetadata::AttachedImagesType::AttachedImagesType()
 {}

MediaMetadata::AttachedImagesType::~AttachedImagesType() = default;
MediaMetadata::AttachedImagesType::AttachedImagesType(AttachedImagesType&& rhs) = default;
MediaMetadata::AttachedImagesType& MediaMetadata::AttachedImagesType::operator=(AttachedImagesType&& rhs) = default;
MediaMetadata::AttachedImagesType MediaMetadata::AttachedImagesType::Clone() const {
  AttachedImagesType out;
  return out;
}

// static
bool MediaMetadata::AttachedImagesType::Populate(
    const base::Value::Dict& dict, AttachedImagesType& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool MediaMetadata::AttachedImagesType::Populate(
    const base::Value& value, AttachedImagesType& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<MediaMetadata::AttachedImagesType> MediaMetadata::AttachedImagesType::FromValue(const base::Value::Dict& value) {
  AttachedImagesType out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MediaMetadata::AttachedImagesType> MediaMetadata::AttachedImagesType::FromValue(const base::Value& value) {
  AttachedImagesType out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict MediaMetadata::AttachedImagesType::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}




MediaMetadata::MediaMetadata()
 {}

MediaMetadata::~MediaMetadata() = default;
MediaMetadata::MediaMetadata(MediaMetadata&& rhs) = default;
MediaMetadata& MediaMetadata::operator=(MediaMetadata&& rhs) = default;
MediaMetadata MediaMetadata::Clone() const {
  MediaMetadata out;
  out.mime_type = mime_type;
  out.height = height;
  out.width = width;
  out.duration = duration;
  out.rotation = rotation;
  out.album = album;
  out.artist = artist;
  out.comment = comment;
  out.copyright = copyright;
  out.disc = disc;
  out.genre = genre;
  out.language = language;
  out.title = title;
  out.track = track;
  out.raw_tags.reserve(raw_tags.size());
  for (const auto& element : raw_tags) {
    json_schema_compiler::util::AppendToContainer(out.raw_tags, element.Clone());
  }
  out.attached_images.reserve(attached_images.size());
  for (const auto& element : attached_images) {
    json_schema_compiler::util::AppendToContainer(out.attached_images, element.Clone());
  }
  return out;
}

// static
bool MediaMetadata::Populate(
    const base::Value::Dict& dict, MediaMetadata& out) {
  const base::Value* mime_type_value = dict.Find("mimeType");
  if (!mime_type_value) {
    return false;
  }
  {
    auto* temp = (*mime_type_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.mime_type = *temp;
  }

  const base::Value* height_value = dict.Find("height");
  if (height_value) {
    {
      auto temp = (*height_value).GetIfInt();
      if (!temp.has_value()) {
        out.height = absl::nullopt;
        return false;
      }
      out.height = *temp;
    }
  }

  const base::Value* width_value = dict.Find("width");
  if (width_value) {
    {
      auto temp = (*width_value).GetIfInt();
      if (!temp.has_value()) {
        out.width = absl::nullopt;
        return false;
      }
      out.width = *temp;
    }
  }

  const base::Value* duration_value = dict.Find("duration");
  if (duration_value) {
    {
      auto temp = (*duration_value).GetIfDouble();
      if (!temp.has_value()) {
        out.duration = absl::nullopt;
        return false;
      }
      out.duration = *temp;
    }
  }

  const base::Value* rotation_value = dict.Find("rotation");
  if (rotation_value) {
    {
      auto temp = (*rotation_value).GetIfInt();
      if (!temp.has_value()) {
        out.rotation = absl::nullopt;
        return false;
      }
      out.rotation = *temp;
    }
  }

  const base::Value* album_value = dict.Find("album");
  if (album_value) {
    {
      auto* temp = (*album_value).GetIfString();
      if (!temp) {
        out.album = absl::nullopt;
        return false;
      }
      out.album = *temp;
    }
  }

  const base::Value* artist_value = dict.Find("artist");
  if (artist_value) {
    {
      auto* temp = (*artist_value).GetIfString();
      if (!temp) {
        out.artist = absl::nullopt;
        return false;
      }
      out.artist = *temp;
    }
  }

  const base::Value* comment_value = dict.Find("comment");
  if (comment_value) {
    {
      auto* temp = (*comment_value).GetIfString();
      if (!temp) {
        out.comment = absl::nullopt;
        return false;
      }
      out.comment = *temp;
    }
  }

  const base::Value* copyright_value = dict.Find("copyright");
  if (copyright_value) {
    {
      auto* temp = (*copyright_value).GetIfString();
      if (!temp) {
        out.copyright = absl::nullopt;
        return false;
      }
      out.copyright = *temp;
    }
  }

  const base::Value* disc_value = dict.Find("disc");
  if (disc_value) {
    {
      auto temp = (*disc_value).GetIfInt();
      if (!temp.has_value()) {
        out.disc = absl::nullopt;
        return false;
      }
      out.disc = *temp;
    }
  }

  const base::Value* genre_value = dict.Find("genre");
  if (genre_value) {
    {
      auto* temp = (*genre_value).GetIfString();
      if (!temp) {
        out.genre = absl::nullopt;
        return false;
      }
      out.genre = *temp;
    }
  }

  const base::Value* language_value = dict.Find("language");
  if (language_value) {
    {
      auto* temp = (*language_value).GetIfString();
      if (!temp) {
        out.language = absl::nullopt;
        return false;
      }
      out.language = *temp;
    }
  }

  const base::Value* title_value = dict.Find("title");
  if (title_value) {
    {
      auto* temp = (*title_value).GetIfString();
      if (!temp) {
        out.title = absl::nullopt;
        return false;
      }
      out.title = *temp;
    }
  }

  const base::Value* track_value = dict.Find("track");
  if (track_value) {
    {
      auto temp = (*track_value).GetIfInt();
      if (!temp.has_value()) {
        out.track = absl::nullopt;
        return false;
      }
      out.track = *temp;
    }
  }

  const base::Value* raw_tags_value = dict.Find("rawTags");
  if (!raw_tags_value) {
    return false;
  }
  {
    if (!(*raw_tags_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*raw_tags_value).GetList(), out.raw_tags)) {
        return false;
      }
    }
  }

  const base::Value* attached_images_value = dict.Find("attachedImages");
  if (!attached_images_value) {
    return false;
  }
  {
    if (!(*attached_images_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*attached_images_value).GetList(), out.attached_images)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool MediaMetadata::Populate(
    const base::Value& value, MediaMetadata& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<MediaMetadata> MediaMetadata::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MediaMetadata>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<MediaMetadata> MediaMetadata::FromValue(const base::Value::Dict& value) {
  MediaMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MediaMetadata> MediaMetadata::FromValue(const base::Value& value) {
  MediaMetadata out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict MediaMetadata::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("mimeType", this->mime_type);

  if (this->height) {
    to_value_result.Set("height", *this->height);

  }
  if (this->width) {
    to_value_result.Set("width", *this->width);

  }
  if (this->duration) {
    to_value_result.Set("duration", *this->duration);

  }
  if (this->rotation) {
    to_value_result.Set("rotation", *this->rotation);

  }
  if (this->album) {
    to_value_result.Set("album", *this->album);

  }
  if (this->artist) {
    to_value_result.Set("artist", *this->artist);

  }
  if (this->comment) {
    to_value_result.Set("comment", *this->comment);

  }
  if (this->copyright) {
    to_value_result.Set("copyright", *this->copyright);

  }
  if (this->disc) {
    to_value_result.Set("disc", *this->disc);

  }
  if (this->genre) {
    to_value_result.Set("genre", *this->genre);

  }
  if (this->language) {
    to_value_result.Set("language", *this->language);

  }
  if (this->title) {
    to_value_result.Set("title", *this->title);

  }
  if (this->track) {
    to_value_result.Set("track", *this->track);

  }
  to_value_result.Set("rawTags", json_schema_compiler::util::CreateValueFromArray(this->raw_tags));

  to_value_result.Set("attachedImages", json_schema_compiler::util::CreateValueFromArray(this->attached_images));


  return to_value_result;
}


AddGalleryWatchResult::AddGalleryWatchResult()
: success(false) {}

AddGalleryWatchResult::~AddGalleryWatchResult() = default;
AddGalleryWatchResult::AddGalleryWatchResult(AddGalleryWatchResult&& rhs) = default;
AddGalleryWatchResult& AddGalleryWatchResult::operator=(AddGalleryWatchResult&& rhs) = default;
AddGalleryWatchResult AddGalleryWatchResult::Clone() const {
  AddGalleryWatchResult out;
  out.gallery_id = gallery_id;
  out.success = success;
  return out;
}

// static
bool AddGalleryWatchResult::Populate(
    const base::Value::Dict& dict, AddGalleryWatchResult& out) {
  const base::Value* gallery_id_value = dict.Find("galleryId");
  if (!gallery_id_value) {
    return false;
  }
  {
    auto* temp = (*gallery_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.gallery_id = *temp;
  }

  const base::Value* success_value = dict.Find("success");
  if (!success_value) {
    return false;
  }
  {
    auto temp = (*success_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.success = *temp;
  }

  return true;
}

// static
bool AddGalleryWatchResult::Populate(
    const base::Value& value, AddGalleryWatchResult& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<AddGalleryWatchResult> AddGalleryWatchResult::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<AddGalleryWatchResult>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<AddGalleryWatchResult> AddGalleryWatchResult::FromValue(const base::Value::Dict& value) {
  AddGalleryWatchResult out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<AddGalleryWatchResult> AddGalleryWatchResult::FromValue(const base::Value& value) {
  AddGalleryWatchResult out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict AddGalleryWatchResult::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("galleryId", this->gallery_id);

  to_value_result.Set("success", this->success);


  return to_value_result;
}



//
// Functions
//

namespace GetMediaFileSystems {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        MediaFileSystemsDetails temp;
        if (!MediaFileSystemsDetails::Populate(details_value.GetDict(), temp))
          return absl::nullopt;
        params.details = std::move(temp);
      }
    }
  }

  return params;
}


Results::MediaFileSystemsType::MediaFileSystemsType()
 {}

Results::MediaFileSystemsType::~MediaFileSystemsType() = default;
Results::MediaFileSystemsType::MediaFileSystemsType(MediaFileSystemsType&& rhs) = default;
Results::MediaFileSystemsType& Results::MediaFileSystemsType::operator=(MediaFileSystemsType&& rhs) = default;
base::Value::Dict Results::MediaFileSystemsType::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



base::Value::List Results::Create(const std::vector<MediaFileSystemsType>& media_file_systems) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(media_file_systems));

  return create_results;
}
}  // namespace GetMediaFileSystems

namespace AddUserSelectedFolder {

Results::MediaFileSystemsType::MediaFileSystemsType()
 {}

Results::MediaFileSystemsType::~MediaFileSystemsType() = default;
Results::MediaFileSystemsType::MediaFileSystemsType(MediaFileSystemsType&& rhs) = default;
Results::MediaFileSystemsType& Results::MediaFileSystemsType::operator=(MediaFileSystemsType&& rhs) = default;
base::Value::Dict Results::MediaFileSystemsType::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



base::Value::List Results::Create(const std::vector<MediaFileSystemsType>& media_file_systems, const std::string& selected_file_system_name) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(media_file_systems));

  create_results.Append(selected_file_system_name);

  return create_results;
}
}  // namespace AddUserSelectedFolder

namespace GetMetadata {

Params::MediaFile::MediaFile()
 {}

Params::MediaFile::~MediaFile() = default;
Params::MediaFile::MediaFile(MediaFile&& rhs) = default;
Params::MediaFile& Params::MediaFile::operator=(MediaFile&& rhs) = default;
Params::MediaFile Params::MediaFile::Clone() const {
  MediaFile out;
  return out;
}

// static
bool Params::MediaFile::Populate(
    const base::Value::Dict& dict, MediaFile& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::MediaFile::Populate(
    const base::Value& value, MediaFile& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::MediaFile> Params::MediaFile::FromValue(const base::Value::Dict& value) {
  MediaFile out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::MediaFile> Params::MediaFile::FromValue(const base::Value& value) {
  MediaFile out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& media_file_value = args[0];
    {
      if (!media_file_value.is_dict()) {
        return absl::nullopt;
      }
      if (!MediaFile::Populate(media_file_value.GetDict(), params.media_file)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& options_value = args[1];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        MediaMetadataOptions temp;
        if (!MediaMetadataOptions::Populate(options_value.GetDict(), temp))
          return absl::nullopt;
        params.options = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const MediaMetadata& metadata) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((metadata).ToValue());

  return create_results;
}
}  // namespace GetMetadata

namespace AddGalleryWatch {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& gallery_id_value = args[0];
    {
      auto* temp = gallery_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.gallery_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const AddGalleryWatchResult& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace AddGalleryWatch

namespace RemoveGalleryWatch {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& gallery_id_value = args[0];
    {
      auto* temp = gallery_id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.gallery_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace RemoveGalleryWatch

//
// Events
//

namespace OnGalleryChanged {

const char kEventName[] = "mediaGalleries.onGalleryChanged";

base::Value::List Create(const GalleryChangeDetails& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnGalleryChanged

}  // namespace media_galleries
}  // namespace api
}  // namespace chrome_apps

